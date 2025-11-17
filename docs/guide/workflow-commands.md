# Workflow Commands

Helper utilities for GitHub Actions workflow commands.

## Environment Variables

Set environment variables for subsequent steps:

```typescript
import {
  setEnvVar,
  setEnvVars,
  setMultilineEnvVar
} from "@kjanat/gha-env-validator";

// Single variable
setEnvVar("NODE_ENV", "production");

// Multiple variables
setEnvVars({
  API_URL: "https://api.example.com",
  DEBUG: "false",
  MAX_RETRIES: "3"
});

// Multiline values (JSON, logs, etc.)
const data = JSON.stringify({ foo: "bar" }, null, 2);
setMultilineEnvVar("API_RESPONSE", data);
```

## Step Outputs

Set outputs for downstream steps/jobs:

```typescript
import {
  setMultilineOutput,
  setOutput,
  setOutputs
} from "@kjanat/gha-env-validator";

// Single output
setOutput("version", "1.2.3");

// Multiple outputs
setOutputs({
  version: "1.2.3",
  commit_sha: "abc123",
  build_time: new Date().toISOString()
});

// Multiline output
setMultilineOutput("build_report", reportText);
```

Reference outputs in later steps:

```yaml
- id: build
  run: bun run build.ts

- name: Deploy
  run: echo "Version: $\{{ steps.build.outputs.version }}"
```

## Job Summaries

Add markdown to the workflow summary page:

```typescript
import {
  addJobSummary,
  addSummary,
  addSummaryTable,
  clearJobSummary
} from "@kjanat/gha-env-validator";

// Raw markdown
addJobSummary("## Build Results\n\n✅ All tests passed!");

// With title helper
addSummary("Deployment", "🚀 Deployed to production");

// Tables
addSummaryTable(
  ["Metric", "Value", "Status"],
  [
    ["Tests", "42", "✅"],
    ["Coverage", "95%", "✅"],
    ["Duration", "2m 34s", "✅"]
  ]
);

// Clear and restart
clearJobSummary();
addSummary("Fresh", "New summary content");
```

## Log Annotations

Create annotations in workflow logs:

```typescript
import { debug, error, notice, warning } from "@kjanat/gha-env-validator";

// Debug (requires ACTIONS_STEP_DEBUG secret)
debug("Processing item 5 of 10");

// Info annotation
notice("Deployment successful");

// Warning with file location
warning("Deprecated API usage", {
  file: "app.ts",
  line: 42,
  col: 10,
  title: "Deprecation Warning"
});

// Error with full context
error("Build failed", {
  file: "main.ts",
  line: 100,
  col: 5,
  endLine: 105,
  endColumn: 20,
  title: "Type Error"
});
```

## Log Grouping

Organize logs with collapsible sections:

```typescript
import { endGroup, group, startGroup } from "@kjanat/gha-env-validator";

// Functional style (recommended)
await group("Install Dependencies", async () => {
  console.log("Installing packages...");
  await runInstall();
  console.log("Done!");
});

// Manual style
startGroup("Build Process");
console.log("Building...");
// ... build steps
endGroup();
```

## Security

Mask sensitive values in logs:

```typescript
import { maskValue } from "@kjanat/gha-env-validator";

const apiKey = process.env.API_KEY;
maskValue(apiKey);

console.log(`Using API key: ${apiKey}`); // Shows *** in logs
```

## System PATH

Add directories to PATH for subsequent steps:

```typescript
import { addPath } from "@kjanat/gha-env-validator";

addPath("/usr/local/custom-tools");
addPath("$HOME/.local/bin");
```

## Workflow Control

Stop and resume command processing:

```typescript
import { resumeCommands, stopCommands } from "@kjanat/gha-env-validator";

const token = stopCommands();

// These won't be processed as commands
console.log("::warning::This is printed literally");

resumeCommands(token);
// Commands work again
```

## Utilities

```typescript
import {
  assertGitHubActions,
  isGitHubActions,
  setFailed
} from "@kjanat/gha-env-validator";

// Check environment
if (isGitHubActions()) {
  setEnvVar("CI", "true");
} else {
  console.log("Running locally");
}

// Assert GitHub Actions context
assertGitHubActions(); // Throws if not in GHA

// Fail the workflow
if (buildFailed) {
  setFailed("Build encountered errors");
  // Sets exit code 1 and logs error
}
```

## Complete Example

```typescript
import {
  addSummaryTable,
  group,
  notice,
  setFailed,
  setOutputs,
  validateEnv
} from "@kjanat/gha-env-validator";

async function main() {
  try {
    const env = await group("Validate Environment", async () => {
      return validateEnv();
    });

    await group("Run Build", async () => {
      // Build logic here
      console.log("Building...");
    });

    setOutputs({
      version: "1.2.3",
      commit: env.GITHUB_SHA.substring(0, 7)
    });

    addSummaryTable(
      ["Item", "Status"],
      [
        ["Build", "✅"],
        ["Tests", "✅"]
      ]
    );

    notice("✅ Workflow completed");
  } catch (err) {
    setFailed(`Workflow failed: ${err.message}`);
  }
}

main();
```

## Next Steps

- [Context Utilities →](/guide/context)
- [Action Inputs →](/guide/inputs)
- [Examples →](/guide/examples)
