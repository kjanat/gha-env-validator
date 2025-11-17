# Examples

This directory contains usage examples for `@kjanat/gha-env-validator`.

## Running Examples

Make sure you have the package built first:

```bash
bun run build
```

### Basic Usage

Validates default GitHub Actions environment variables:

```bash
bun run examples/basic-usage.ts
```

### Custom Variables

Extends the default schema with custom environment variables:

```bash
# Set some example env vars first
export API_KEY="test-key-123"
export API_URL="https://api.example.com"
export NODE_ENV="development"
export PORT="3000"
export MAX_RETRIES="3"
export TIMEOUT_MS="5000"
export DEBUG="true"
export DRY_RUN="false"

bun run examples/custom-variables.ts
```

### Safe Validation

Demonstrates safe validation without throwing:

```bash
bun run examples/safe-validation.ts
```

### Workflow Integration

Shows how to integrate validation in a GitHub Actions workflow:

```bash
# This example is meant to be run in a GitHub Actions workflow
# But you can test it locally with mock env vars:
export API_KEY="deployment-key-123"
export DEPLOY_ENV="staging"
export DEPLOY_REGION="us-west-2"
export ENABLE_MONITORING="true"

bun run examples/workflow-integration.ts
```

## Example Workflow

Here's a complete GitHub Actions workflow that uses validation:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2

      - name: Install dependencies
        run: bun install

      - name: Validate environment and deploy
        env:
          API_KEY: ${{ secrets.API_KEY }}
          DEPLOY_ENV: production
          DEPLOY_REGION: us-east-1
          ENABLE_MONITORING: "true"
          ENABLE_ROLLBACK: "true"
        run: bun run examples/workflow-integration.ts
```

## Creating Your Own

Use these examples as templates for your own validation scripts. The typical pattern is:

1. Import the necessary functions from `@kjanat/gha-env-validator`
2. Define your schema using `createEnvSchema()` or `createCustomEnvSchema()`
3. Validate with `validateCustomEnv()` or use safe variants
4. Use the typed environment object in your application

```typescript
import {
  createEnvSchema,
  validateCustomEnv,
  z
} from "@kjanat/gha-env-validator";

const schema = createEnvSchema({
  YOUR_VAR: z.string()
  // ... more vars
});

const env = validateCustomEnv(schema);
// Now use env with full type safety!
```
