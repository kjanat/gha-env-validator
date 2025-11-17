# Action Inputs

Type-safe validation for GitHub Actions input parameters.

## Basic Input Retrieval

```typescript
import { getInput } from "@kjanat/gha-env-validator";

// Optional input
const token = getInput("github-token");

// Required input (throws if missing)
const apiKey = getInput("api-key", { required: true });
```

## Boolean Inputs

Parse boolean values with multiple formats:

```typescript
import { getBooleanInput } from "@kjanat/gha-env-validator";

const dryRun = getBooleanInput("dry-run");
const skipTests = getBooleanInput("skip-tests");

// Accepts: true/false, yes/no, 1/0 (case-insensitive)
```

## Multiline Inputs

Split multiline inputs into arrays:

```typescript
import { getMultilineInput } from "@kjanat/gha-env-validator";

const files = getMultilineInput("files");

// Input in action.yml:
// files: |
//   src/app.ts
//   src/lib.ts
//   src/utils.ts

// Returns: ['src/app.ts', 'src/lib.ts', 'src/utils.ts']
```

## Schema Validation

Validate all inputs with Zod schemas:

```typescript
import { validateInputs, z } from "@kjanat/gha-env-validator";

const inputs = validateInputs({
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  environment: z.enum(["dev", "staging", "prod"]),
  "dry-run": z.boolean().default(false),
  "max-retries": z.string().transform(Number),
  targets: z.array(z.string()).default([])
});

// Fully typed!
console.log(inputs.version); // string
console.log(inputs["dry-run"]); // boolean
```

## Safe Validation

Non-throwing validation:

```typescript
import { safeValidateInputs, z } from "@kjanat/gha-env-validator";

const result = safeValidateInputs({
  "api-key": z.string().min(10),
  retries: z.number().int().min(0).max(5)
});

if (result.success) {
  console.log("Inputs valid:", result.data);
} else {
  console.error("Validation failed:", result.error);
  process.exit(1);
}
```

## Complete Action Example

**action.yml:**

```yaml
name: My Action
inputs:
  version:
    description: "Semantic version"
    required: true
  environment:
    description: "Target environment"
    required: true
  dry-run:
    description: "Dry run mode"
    default: "false"
  targets:
    description: "Deployment targets (multiline)"
    required: false
```

**index.ts:**

```typescript
import { validateInputs, z } from "@kjanat/gha-env-validator";

const inputs = validateInputs({
  version: z.string().regex(/^\d+\.\d+\.\d+$/, "Invalid semver"),
  environment: z.enum(["dev", "staging", "prod"]),
  "dry-run": z.boolean(),
  targets: z.array(z.string()).default([])
});

console.log(`Deploying ${inputs.version} to ${inputs.environment}`);

if (inputs["dry-run"]) {
  console.log("🏃 Dry run mode");
}
```

## Input Name Mapping

Input names are mapped to environment variables:

- `api-key` → `INPUT_API_KEY`
- `my input` → `INPUT_MY_INPUT`
- `DRY_RUN` → `INPUT_DRY_RUN`

Hyphens and spaces become underscores, all uppercase.

## Type Detection

The validator auto-detects types:

- **Boolean schemas**: Parses true/false/yes/no/1/0
- **Number schemas**: Keeps as string (use `.transform(Number)`)
- **Enum schemas**: Validates against allowed values
- **Array schemas**: Use `getMultilineInput()` for arrays

## Next Steps

- [Workflow Commands →](/guide/workflow-commands)
- [Context Utilities →](/guide/context)
- [Examples →](/guide/examples)
