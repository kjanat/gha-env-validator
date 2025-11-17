# Examples

## Complete Action Example

Full GitHub Action using all package features:

```typescript
import {
  addSummaryTable,
  createEnvSchema,
  getCommitSha,
  getCurrentBranch,
  group,
  isPullRequest,
  notice,
  setOutputs,
  validateCustomEnv,
  validateInputs,
  z
} from "@kjanat/gha-env-validator";

async function main() {
  // Validate environment
  const env = await group("Validating Environment", async () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(1),
      DEPLOY_ENV: z.enum(["dev", "staging", "prod"]).default("dev")
    });
    return validateCustomEnv(schema);
  });

  // Validate inputs
  const inputs = await group("Validating Inputs", async () => {
    return validateInputs({
      version: z.string().regex(/^\d+\.\d+\.\d+$/),
      "skip-tests": z.boolean().default(false)
    });
  });

  // Get context
  const branch = getCurrentBranch();
  const sha = getCommitSha("short");

  // Conditional logic
  if (isPullRequest()) {
    notice("Running in PR context");
  }

  // Set outputs
  setOutputs({
    version: inputs.version,
    commit: sha,
    branch
  });

  // Generate summary
  addSummaryTable(
    ["Property", "Value"],
    [
      ["Version", inputs.version],
      ["Branch", branch],
      ["Commit", sha]
    ]
  );
}

main().catch(console.error);
```

## More Examples

See the `examples/` directory in the repository for:

- **basic-usage.ts** - Simple environment validation
- **custom-variables.ts** - Extending with custom vars
- **safe-validation.ts** - Non-throwing validation
- **workflow-integration.ts** - Complete workflow example
- **workflow-commands-demo.ts** - All workflow commands
- **complete-action-example.ts** - Full action implementation
- **metadata-*.ts** - Metadata use cases (5 examples)

## Interactive Playground

Try the package live:

[Open in StackBlitz →](https://stackblitz.com/edit/gha-env-validator-demo)
