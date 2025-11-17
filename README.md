# @kjanat/gha-env-validator

Type-safe GitHub Actions environment variable validation with IntelliSense support using Zod.

## Features

- ✅ **Type-Safe**: Full TypeScript support with inferred types from Zod schemas
- ✅ **IntelliSense**: Auto-complete for all GitHub Actions environment variables in your IDE
- ✅ **Runtime Validation**: Catch missing or invalid environment variables early with Zod
- ✅ **Pre-built Schemas**: All GitHub Actions default variables included out-of-the-box
- ✅ **Extensible**: Easily add custom environment variables to the default schema
- ✅ **Zero-Config**: Works immediately with GitHub Actions workflows
- ✅ **Bun-Native**: Built and tested with Bun for optimal performance

## Installation

```bash
npm install @kjanat/gha-env-validator zod
# or
bun add @kjanat/gha-env-validator zod
# or
yarn add @kjanat/gha-env-validator zod
```

## Quick Start

### Basic Usage (Default GitHub Actions Variables)

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

// Validates all GitHub Actions default environment variables
const env = validateEnv();

// Now you have type-safe access with IntelliSense
console.log(env.GITHUB_SHA); // string
console.log(env.GITHUB_RUN_ID); // number (transformed from string)
console.log(env.GITHUB_REPOSITORY); // string
console.log(env.RUNNER_OS); // "Linux" | "Windows" | "macOS"
```

### Adding Custom Environment Variables

```typescript
import {
  createEnvSchema,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

// Extend the default GitHub Actions schema with your custom variables
const schema = createEnvSchema({
  API_KEY: z.string().min(1),
  API_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  MAX_RETRIES: z.string().transform(Number),
  DRY_RUN: z.string().transform(s => s === "true"),
});

// Validate with both GitHub Actions defaults AND custom variables
const env = validateCustomEnv(schema);

console.log(env.API_KEY); // string
console.log(env.GITHUB_SHA); // string (from defaults)
console.log(env.MAX_RETRIES); // number (transformed)
console.log(env.DRY_RUN); // boolean (transformed)
```

### Safe Validation (No Throwing)

```typescript
import { safeValidateEnv } from "@kjanat/gha-env-validator";

const result = safeValidateEnv();

if (result.success) {
  console.log("Valid environment:", result.data.GITHUB_SHA);
} else {
  console.error("Validation failed:", result.error.format());
  process.exit(1);
}
```

## IntelliSense Support

Simply importing the package augments `process.env` with types:

```typescript
import "@kjanat/gha-env-validator";

// Now you get autocomplete for GitHub Actions variables
const sha = process.env.GITHUB_SHA; // string | undefined
const runId = process.env.GITHUB_RUN_ID; // string | undefined
const os = process.env.RUNNER_OS; // string | undefined
```

## GitHub Actions Workflow Example

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

      - name: Run validation script
        env:
          API_KEY: ${{ secrets.API_KEY }}
          NODE_ENV: production
        run: bun run validate-env.ts
```

**validate-env.ts:**

```typescript
import {
  createEnvSchema,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

const schema = createEnvSchema({
  API_KEY: z.string().min(1),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

try {
  const env = validateCustomEnv(schema);
  console.log("✅ Environment validation passed!");
  console.log("Running on:", env.RUNNER_OS);
  console.log("Repository:", env.GITHUB_REPOSITORY);
  console.log("Commit SHA:", env.GITHUB_SHA);
} catch (error) {
  console.error("❌ Environment validation failed:", error);
  process.exit(1);
}
```

## API Reference

### `validateEnv(options?)`

Validates environment variables against the default GitHub Actions schema.

**Parameters:**

- `options.env` - Custom environment object (defaults to `process.env`)
- `options.strict` - Strip unknown variables (defaults to `false`)

**Returns:** Validated `GitHubActionsEnv` object

**Throws:** `ZodError` if validation fails

### `validateCustomEnv(schema, options?)`

Validates environment variables against a custom schema.

**Parameters:**

- `schema` - Zod schema to validate against
- `options.env` - Custom environment object (defaults to `process.env`)
- `options.strict` - Strip unknown variables (defaults to `false`)

**Returns:** Validated environment object inferred from schema

**Throws:** `ZodError` if validation fails

### `safeValidateEnv(options?)`

Safely validates environment variables, returning a result object instead of throwing.

**Parameters:**

- `options.env` - Custom environment object (defaults to `process.env`)
- `options.strict` - Strip unknown variables (defaults to `false`)

**Returns:** `SafeParseReturnType<unknown, GitHubActionsEnv>`

### `safeValidateCustomEnv(schema, options?)`

Safely validates environment variables against a custom schema.

**Parameters:**

- `schema` - Zod schema to validate against
- `options.env` - Custom environment object (defaults to `process.env`)
- `options.strict` - Strip unknown variables (defaults to `false`)

**Returns:** `SafeParseReturnType<unknown, T>` where T is inferred from schema

### `createEnvSchema(customSchema)`

Creates a combined schema with GitHub Actions defaults + custom variables.

**Parameters:**

- `customSchema` - Object defining custom environment variables with Zod validators

**Returns:** Extended Zod schema

### `createCustomEnvSchema(customSchema)`

Creates a schema with ONLY custom variables (no GitHub Actions defaults).

**Parameters:**

- `customSchema` - Object defining environment variables with Zod validators

**Returns:** Zod schema

### `githubActionsSchema`

Pre-built Zod schema for all GitHub Actions default environment variables.

### Type: `GitHubActionsEnv`

TypeScript type representing all GitHub Actions default environment variables with proper types (string, number, boolean, enums).

## Included GitHub Actions Variables

All GitHub Actions default environment variables are included:

- `CI`, `GITHUB_ACTIONS` (boolean)
- `GITHUB_ACTOR`, `GITHUB_REPOSITORY`, `GITHUB_SHA`, etc. (string)
- `GITHUB_RUN_ID`, `GITHUB_RUN_NUMBER`, etc. (number)
- `RUNNER_OS` (enum: "Linux" | "Windows" | "macOS")
- `RUNNER_ARCH` (enum: "X86" | "X64" | "ARM" | "ARM64")
- And many more...

See [GitHub Actions documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/variables) for complete list.

## Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Type check
bun run typecheck

# Build
bun run build
```

## License

MIT © kjanat
