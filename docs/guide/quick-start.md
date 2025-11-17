# Quick Start

## Basic Validation

Validate default GitHub Actions environment variables:

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

const env = validateEnv();

// Type-safe access with IntelliSense
console.log(env.GITHUB_SHA); // string
console.log(env.GITHUB_RUN_ID); // number (auto-transformed!)
console.log(env.GITHUB_REPOSITORY); // string
console.log(env.RUNNER_OS); // "Linux" | "Windows" | "macOS"
```

## Custom Variables

Extend the schema with your own environment variables:

```typescript
import {
  createEnvSchema,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

const schema = createEnvSchema({
  API_KEY: z.string().min(1),
  API_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  MAX_RETRIES: z.string().transform(Number),
});

const env = validateCustomEnv(schema);

console.log(env.API_KEY); // string
console.log(env.GITHUB_SHA); // string (from defaults)
console.log(env.MAX_RETRIES); // number (transformed)
```

## IntelliSense

Just import the package to enable IntelliSense:

```typescript
import "@kjanat/gha-env-validator";

// Now process.env has autocomplete!
const sha = process.env.GITHUB_SHA; // Hover shows docs
const runId = process.env.GITHUB_RUN_ID; // Autocomplete works
```

## Workflow Commands

Use helper utilities for GitHub Actions workflow commands:

```typescript
import { addSummary, notice, setOutput } from "@kjanat/gha-env-validator";

// Set step outputs
setOutput("version", "1.2.3");
setOutput("commit", env.GITHUB_SHA.substring(0, 7));

// Add job summary
addSummary("Deployment", "🚀 Deployed successfully!");

// Log annotations
notice("Build completed successfully");
```

## Context Helpers

Convenient wrappers for common context operations:

```typescript
import {
  getCommitSha,
  getCurrentBranch,
  getRepoInfo,
  isPullRequest,
} from "@kjanat/gha-env-validator";

const branch = getCurrentBranch(); // 'main'
const repo = getRepoInfo(); // { owner: 'octocat', name: 'Hello-World', ... }
const sha = getCommitSha("short"); // 'ffac537'

if (isPullRequest()) {
  console.log("Running in PR context");
}
```

## In a GitHub Actions Workflow

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2

      - name: Install dependencies
        run: bun install

      - name: Run validation
        env:
          API_KEY: ${{ secrets.API_KEY }}
        run: bun run build.ts
```

**build.ts:**

```typescript
import {
  addSummary,
  createEnvSchema,
  setOutput,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

const schema = createEnvSchema({
  API_KEY: z.string().min(1),
});

const env = validateCustomEnv(schema);

// Your build logic here...

setOutput("status", "success");
addSummary("Build", "✅ All systems go!");
```

## Next Steps

Explore specific features:

- [Environment Validation →](/guide/validation)
- [Workflow Commands →](/guide/workflow-commands)
- [Context Utilities →](/guide/context)
- [Action Inputs →](/guide/inputs)
- [Metadata →](/guide/metadata)
