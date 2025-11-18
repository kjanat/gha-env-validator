# GitHub Actions - Type-Safe Reusable Actions

This directory contains composite GitHub Actions that demonstrate the power of `@kjanat/gha-env-validator` for building type-safe, maintainable workflows.

## ★ Insight ─────────────────────────────────────

**Why These Actions Matter:**

1. **Type Safety**: All inputs and environment variables validated with Zod schemas
2. **Rich Context**: Leverage GitHub Actions context utilities for intelligent behavior
3. **DRY Principle**: Extract repeated workflow patterns into reusable, testable components
4. **Better DX**: Clear error messages, job summaries, and structured logging

─────────────────────────────────────────────────

## Available Actions

### 1. setup-project

**Purpose:** Complete project setup (checkout, node, bun, dependencies, build)

**Inputs:**

```yaml
- node-version: "lts/*" # Node.js version
- bun-version: "latest" # Bun version
- skip-build: false # Skip build step
- install-args: "" # Extra bun install flags
```

**Outputs:**

- `node-version`: Installed Node.js version
- `bun-version`: Installed Bun version
- `build-status`: Build result (success, failed, skipped)

**Example:**

```yaml
- uses: ./.github/actions/setup-project
  with:
    skip-build: false

- name: Run tests
  run: bun test
```

**Features:**

- ✅ Input validation with `validateInputs()`
- ✅ Environment validation with `validateEnv()`
- ✅ Repository context via `getRepoInfo()`
- ✅ Grouped output for clean logs
- ✅ Comprehensive job summary

---

### 2. codecov-upload

**Purpose:** Upload test results and coverage to Codecov with full context

**Inputs:**

```yaml
- test-results-file: "bun.xml" # JUnit XML path
- coverage-file: "lcov.info" # Coverage file path
- codecov-token: required # Codecov token
- fail-on-error: false # Fail on upload error
- use-oidc: true # Use OIDC authentication
```

**Outputs:**

- `test-results-status`: Upload status (success, failed, skipped)
- `coverage-status`: Upload status (success, failed, skipped)

**Example:**

```yaml
- uses: ./.github/actions/codecov-upload
  with:
    codecov-token: ${{ secrets.CODECOV_TOKEN }}
    fail-on-error: false
```

**Features:**

- ✅ Context-aware uploads with `getCommitSha()`, `getRepoInfo()`
- ✅ PR detection via `isPullRequest()` + `getPullRequestInfo()`
- ✅ File existence checks before upload
- ✅ Summary table with upload results
- ✅ Boolean input parsing with `getBooleanInput()`

---

### 3. validate-workflow-env

**Purpose:** Type-safe validation of GitHub Actions environment (showcases core library)

**Inputs:**

```yaml
- custom-schema: "" # JSON Zod schema for custom vars
- strict-mode: false # Strip unknown variables
- required-vars: "" # Multiline list of required vars
- mask-sensitive: true # Auto-mask sensitive values
```

**Outputs:**

- `validation-status`: Validation result (success, failed)
- `env-count`: Number of validated variables

**Example:**

```yaml
- uses: ./.github/actions/validate-workflow-env
  with:
    required-vars: |
      CUSTOM_API_KEY
      DEPLOY_TARGET
    mask-sensitive: true
```

**Features:**

- ✅ GitHub Actions default env validation
- ✅ Custom schema extension with `createEnvSchema()`
- ✅ Multiline input parsing with `getMultilineInput()`
- ✅ Automatic sensitive value masking with `maskValue()`
- ✅ Rich summary with categorized variables
- ✅ Detailed error reporting for validation failures

**Novel Feature:** No existing GitHub Action provides type-safe environment validation!

---

### 4. build-matrix-summary

**Purpose:** Generate rich summaries for build matrix results

**Inputs:**

```yaml
- matrix-results: required # JSON array of build results
- title: "Build Matrix Results"
- include-context: true # Include Git context
```

**Outputs:**

- `total-builds`: Total matrix builds
- `successful-builds`: Successful count
- `failed-builds`: Failed count

**Example:**

```yaml
- uses: ./.github/actions/build-matrix-summary
  with:
    matrix-results: |
      [
        {
          "name": "Ubuntu / Node 20",
          "status": "success",
          "duration": 45000,
          "os": "ubuntu-latest",
          "version": "20.x"
        },
        {
          "name": "Windows / Node 18",
          "status": "failed",
          "duration": 60000,
          "os": "windows-latest",
          "version": "18.x",
          "error": "Test suite failed"
        }
      ]
```

**Features:**

- ✅ JSON input validation with Zod transforms
- ✅ Context integration: `getCurrentBranch()`, `getCommitSha()`, `getWorkflowRun()`
- ✅ Statistics calculation (success rate, avg duration)
- ✅ Rich tables with `addSummaryTable()`
- ✅ Error details for failed builds
- ✅ Platform-aware formatting

---

## Building Actions

### Build all actions:

```bash
bun run build:actions
```

### Build individual action:

```bash
cd .github/actions/setup-project
bun run build
```

### Development workflow:

1. Modify TypeScript source in `src/main.ts`
2. Run `bun run build` to generate `dist/index.js`
3. Test in workflow
4. Commit both source and dist

## Library API Showcase

These actions demonstrate key `@kjanat/gha-env-validator` capabilities:

### Input Validation

```typescript
import { safeValidateInputs } from "@kjanat/gha-env-validator/inputs";

const result = safeValidateInputs(
  z.object({
    "node-version": z.string().default("lts/*"),
    "skip-build": z.boolean().default(false),
  }),
);
```

### Environment Validation

```typescript
import { validateEnv, createEnvSchema } from "@kjanat/gha-env-validator";

// Validate GitHub defaults
validateEnv();

// Extend with custom requirements
const schema = createEnvSchema(
  z.object({
    CUSTOM_VAR: z.string().min(1),
  }),
);
```

### Context Utilities

```typescript
import {
  getRepoInfo,
  getCurrentBranch,
  getCommitSha,
  isPullRequest,
  getPullRequestInfo,
} from "@kjanat/gha-env-validator/context";

const repo = getRepoInfo(); // { owner, name, full }
const branch = getCurrentBranch();
const sha = getCommitSha("short"); // 7 chars

if (isPullRequest()) {
  const pr = getPullRequestInfo();
  console.log(`PR #${pr.number}: ${pr.title}`);
}
```

### Workflow Commands

```typescript
import {
  startGroup,
  endGroup,
  notice,
  error,
  setOutput,
  addJobSummary,
  addSummaryTable,
  maskValue,
} from "@kjanat/gha-env-validator/workflow-commands";

startGroup("Setup Phase");
notice("Installing dependencies...");
endGroup();

setOutput("status", "success");
maskValue(process.env.SECRET_TOKEN);

await addSummaryTable({
  headers: ["Name", "Status"],
  rows: [["Build", "✅ Success"]],
});
```

## Architecture

Each action follows this structure:

```
.github/actions/<action-name>/
├── action.yml           # Composite action definition
├── src/
│   └── main.ts         # TypeScript implementation
├── dist/
│   └── index.js        # Bundled executable
├── package.json        # Dependencies (includes library)
└── README.md           # Action-specific docs
```

**Key Design Principles:**

1. **Type safety first** - Validate all inputs and environment
2. **Rich logging** - Use groups, summaries, and structured output
3. **Context-aware** - Leverage GitHub context for intelligent behavior
4. **Fail gracefully** - Clear error messages and recovery strategies
5. **Self-documenting** - Actions demonstrate library capabilities

## Benefits vs Standard Workflows

| Aspect          | Standard Workflow   | With These Actions       |
| --------------- | ------------------- | ------------------------ |
| Setup steps     | 5-6 repeated steps  | 1 action call            |
| Type safety     | None                | Full Zod validation      |
| Error handling  | Bash exit codes     | Typed error messages     |
| Context access  | Manual env parsing  | Structured utilities     |
| Maintainability | Change 3+ files     | Change 1 action          |
| Testing         | Workflow-level only | Unit + integration tests |
| Documentation   | Comments in YAML    | Typed interfaces + docs  |

## Next Steps

1. **Build the actions**: `bun run build:actions`
2. **Update workflows**: Replace repeated steps with action calls
3. **Test locally**: Use `act` or GitHub Actions workflow
4. **Add more actions**: Extract other common patterns

## Resources

- [Main Library Docs](https://kjanat.github.io/gha-env-validator/)
- [Composite Actions Docs](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action)
- [GitHub Actions Context](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [Zod Documentation](https://zod.dev/)
