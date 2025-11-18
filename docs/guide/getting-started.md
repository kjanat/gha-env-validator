# Getting Started

## What is GHA Env Validator?

`@kjanat/gha-env-validator` is a comprehensive TypeScript SDK for GitHub Actions
that provides:

- **Type-safe environment variable validation** using Zod v4
- **Rich IntelliSense** with hover documentation for all 43 default GitHub
  Actions variables
- **Workflow command helpers** for outputs, summaries, annotations, and more
- **Context utilities** for branches, repos, commits, PRs, and runners
- **Action input validation** with type-safe schemas
- **Metadata support** using Zod v4's `.meta()` API

## Why Use This Package?

### Without GHA Env Validator

```typescript
// ❌ No type safety
const sha = process.env.GITHUB_SHA; // string | undefined

// ❌ Manual validation
if (!sha) {
  throw new Error("GITHUB_SHA not set");
}

// ❌ No IntelliSense
process.env.GITHUB_RUN_ID; // What's this? Is it a string or number?

// ❌ Manual workflow commands
fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=1.2.3\n`);
```

### With GHA Env Validator

```typescript
import { setOutput, validateEnv } from "@kjanat/gha-env-validator";

// ✅ Type-safe validation
const env = validateEnv();

// ✅ Proper types
env.GITHUB_SHA; // string
env.GITHUB_RUN_ID; // number (transformed!)
env.RUNNER_OS; // "Linux" | "Windows" | "macOS"

// ✅ IntelliSense everywhere
env
  // <-- Auto-complete shows all variables with descriptions

  // ✅ Clean workflow commands
  .setOutput("version", "1.2.3");
```

## Key Features

### 🔐 Validation

All GitHub Actions default environment variables validated with Zod:

- Runtime type checking
- Automatic transformations (strings → numbers, booleans)
- Enum validation for OS, architecture, ref types
- Optional vs required fields

### 💡 IntelliSense

Type augmentation for `process.env`:

- Auto-complete for all GitHub Actions variables
- Hover documentation from official GitHub docs
- Type-safe access (string | undefined)

### 📦 Rich Metadata

Zod v4 `.meta()` on all variables:

- `id`: Unique identifier
- `title`: Human-readable name
- `description`: Full documentation
- `category`: Logical grouping (git, runner, workflow, etc.)
- `example`: Sample values

### ⚙️ Utilities

Complete toolkit for GitHub Actions:

- **Workflow Commands**: setOutput, addSummary, debug, error, etc.
- **Context**: getCurrentBranch, getRepoInfo, isPullRequest, etc.
- **Inputs**: validateInputs, getBooleanInput, getMultilineInput

## Next Steps

- [Installation →](/guide/installation)
- [Quick Start →](/guide/quick-start)
- [API Reference →](/api/)
