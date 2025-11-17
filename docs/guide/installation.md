# Installation

## Requirements

- **Node.js**: 18.0.0 or higher
- **TypeScript**: 5.0 or higher (peer dependency)
- **Zod**: 4.x (dependency)

## Package Manager

::: code-group

```bash [npm]
npm install @kjanat/gha-env-validator zod
```

```bash [bun]
bun add @kjanat/gha-env-validator zod
```

```bash [yarn]
yarn add @kjanat/gha-env-validator zod
```

```bash [pnpm]
pnpm add @kjanat/gha-env-validator zod
```

:::

## TypeScript Configuration

Make sure your `tsconfig.json` has these settings for optimal experience:

```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "types": ["node"]
  }
}
```

## Verify Installation

Create a test file to verify everything works:

```typescript
// test.ts
import { validateEnv } from "@kjanat/gha-env-validator";

// This will throw if not in GitHub Actions
// but demonstrates the import works
console.log("Package installed successfully!");
```

Run with:

```bash
bun test.ts
# or
npx tsx test.ts
```

## Next Steps

- [Quick Start Guide →](/guide/quick-start)
- [Environment Validation →](/guide/validation)
