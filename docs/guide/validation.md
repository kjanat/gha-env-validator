# Environment Validation

Complete guide to validating GitHub Actions environment variables.

## Basic Validation

Validate all 43 default GitHub Actions environment variables:

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

const env = validateEnv();

// All variables are validated and typed
console.log(env.GITHUB_SHA); // string
console.log(env.GITHUB_RUN_ID); // number (transformed!)
console.log(env.GITHUB_REPOSITORY); // string
console.log(env.RUNNER_OS); // "Linux" | "Windows" | "macOS"
```

## Custom Variables

Extend the default schema with your own variables:

```typescript
import {
  createEnvSchema,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

const schema = createEnvSchema({
  // Your custom variables
  API_KEY: z.string().min(1),
  API_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().transform(Number),
  DEBUG: z.string().transform(s => s === "true"),
});

const env = validateCustomEnv(schema);

// Both default and custom vars available
console.log(env.GITHUB_SHA); // From defaults
console.log(env.API_KEY); // Custom
console.log(env.PORT); // number (transformed)
```

## Custom-Only Schema

Validate only your variables without GitHub Actions defaults:

```typescript
import { createCustomEnvSchema, z } from "@kjanat/gha-env-validator";

const schema = createCustomEnvSchema({
  DATABASE_URL: z.string().url(),
  MAX_CONNECTIONS: z.string().transform(Number),
});

const env = z.object(schema).parse(process.env);
```

## Safe Validation

Non-throwing validation with result objects:

```typescript
import { safeValidateEnv } from "@kjanat/gha-env-validator";

const result = safeValidateEnv();

if (result.success) {
  console.log("✅ Valid:", result.data.GITHUB_SHA);
} else {
  console.error("❌ Invalid:", result.error.format());
  process.exit(1);
}
```

## Validation Options

Control validation behavior:

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

// Pass custom environment object
const env = validateEnv({
  env: customEnvObject,
});

// Strict mode - strip unknown variables
const strictEnv = validateEnv({
  strict: true,
});
```

## Type Transformations

The schema automatically transforms types:

- **Booleans**: `"true"` → `true`
- **Numbers**: `"12345"` → `12345`
- **Enums**: Validated against allowed values
- **URLs**: Validated as valid URLs

```typescript
const env = validateEnv();

typeof env.CI; // 'boolean'
typeof env.GITHUB_RUN_ID; // 'number'
env.RUNNER_OS; // "Linux" | "Windows" | "macOS"
```

## Error Handling

Zod provides detailed error messages:

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

try {
  const env = validateEnv();
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Validation errors:");
    error.issues.forEach(issue => {
      console.error(`  ${issue.path.join(".")}: ${issue.message}`);
    });
  }
}
```

## Default Values

Use Zod's `.default()` for optional variables:

```typescript
const schema = createEnvSchema({
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  MAX_RETRIES: z.string().transform(Number).default("3"),
});
```

## Next Steps

- [Action Inputs →](/guide/inputs)
- [Workflow Commands →](/guide/workflow-commands)
- [Examples →](/guide/examples)
