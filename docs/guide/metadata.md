# Metadata

Rich metadata using Zod v4's `.meta()` API.

## Overview

Every GitHub Actions environment variable includes structured metadata:

```typescript
import { githubActionsSchema } from '@kjanat/gha-env-validator';

const shaField = githubActionsSchema.shape.GITHUB_SHA;
const meta = shaField._zod.meta;

// Metadata structure:
{
  id: "GITHUB_SHA",
  title: "Commit SHA",
  description: "The commit SHA that triggered the workflow...",
  category: "git",
  example: "ffac537e6cbbf934b08745a378932722df287a53"
}
```

## Categories

Variables are organized into 11 categories:

- **environment**: CI flags
- **action**: Action context
- **actor**: User/app information
- **api**: GitHub API endpoints
- **git**: Git refs and branches
- **paths**: File system paths
- **event**: Trigger events
- **job**: Job information
- **repository**: Repository details
- **workflow**: Workflow execution
- **runner**: Runner environment

## Use Case: Documentation Generator

Auto-generate markdown docs from schema:

```typescript
import { githubActionsSchema } from "@kjanat/gha-env-validator";

for (const [name, schema] of Object.entries(githubActionsSchema.shape)) {
  const meta = schema._zod.meta;

  console.log(`### ${name}`);
  console.log(`**${meta.title}**`);
  console.log(meta.description);
  console.log(`Example: \`${meta.example}\``);
  console.log();
}
```

## Use Case: Form Builder

Build configuration UIs from metadata:

```typescript
const fields = Object.entries(deploymentSchema.shape).map(([name, schema]) => {
  const meta = schema._zod.meta;

  return {
    name,
    label: meta.title,
    description: meta.description,
    placeholder: meta.example,
    category: meta.category,
  };
});

// Use in React/Vue/etc
```

## Use Case: Enhanced Errors

Context-aware validation errors:

```typescript
if (!result.success) {
  for (const issue of result.error.issues) {
    const fieldName = issue.path[0];
    const meta = schema.shape[fieldName]._zod.meta;

    console.error(`❌ ${meta.title}: ${issue.message}`);
    console.error(`   Expected: ${meta.example}`);
    console.error(`   Category: ${meta.category}`);
  }
}
```

## Use Case: Schema Export

Export to JSON Schema, OpenAPI, GraphQL:

```typescript
const jsonSchema = {
  properties: Object.fromEntries(
    Object.entries(schema.shape).map(([name, s]) => [
      name,
      {
        type: "string",
        title: s._zod.meta.title,
        description: s._zod.meta.description,
        examples: [s._zod.meta.example],
        "x-category": s._zod.meta.category,
      },
    ]),
  ),
};
```

## Use Case: CLI Tools

Build interactive explorers:

```typescript
// Search by keyword
function searchVars(keyword) {
  return Object.entries(schema.shape)
    .filter(([_, s]) =>
      s._zod.meta.description.toLowerCase().includes(keyword.toLowerCase())
    )
    .map(([name, s]) => ({ name, ...s._zod.meta }));
}

// Browse by category
function getCategory(category) {
  return Object.entries(schema.shape)
    .filter(([_, s]) => s._zod.meta.category === category)
    .map(([name, s]) => ({ name, ...s._zod.meta }));
}
```

## Complete Examples

See `examples/` directory for full implementations:

- `metadata-documentation-generator.ts` - Auto-generate docs
- `metadata-form-builder.ts` - Build UIs
- `metadata-cli-helper.ts` - Interactive CLI
- `metadata-validation-reporter.ts` - Rich errors
- `metadata-schema-explorer.ts` - Introspection

## Next Steps

- [Examples →](/guide/examples)
- [API Reference →](/api/)
