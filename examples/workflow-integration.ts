/**
 * GitHub Actions workflow integration example
 *
 * This script demonstrates how to validate environment variables
 * in a GitHub Actions workflow step.
 *
 * Usage in workflow:
 *
 * ```yaml
 * - name: Validate and run deployment
 *   env:
 *     API_KEY: ${{ secrets.API_KEY }}
 *     DEPLOY_ENV: production
 *   run: bun run examples/workflow-integration.ts
 * ```
 */

import {
  createEnvSchema,
  validateCustomEnv,
  z,
} from "@kjanat/gha-env-validator";

// Define deployment-specific environment variables
const deploymentSchema = createEnvSchema({
  // Required secrets
  API_KEY: z.string().min(1, "API_KEY secret is required"),

  // Deployment configuration
  DEPLOY_ENV: z.enum(["staging", "production"]),
  DEPLOY_REGION: z.string().default("us-east-1"),

  // Optional feature flags
  ENABLE_MONITORING: z
    .string()
    .transform((s) => s === "true")
    .optional(),
  ENABLE_ROLLBACK: z
    .string()
    .transform((s) => s === "true")
    .optional(),
});

try {
  console.log("🚀 Starting deployment validation...\n");

  // Validate environment
  const env = validateCustomEnv(deploymentSchema);

  console.log("✅ Environment validation passed!\n");

  // Display deployment configuration
  console.log("📋 Deployment Configuration:");
  console.log("  Environment:", env.DEPLOY_ENV);
  console.log("  Region:", env.DEPLOY_REGION);
  console.log("  Monitoring:", env.ENABLE_MONITORING ? "enabled" : "disabled");
  console.log("  Rollback:", env.ENABLE_ROLLBACK ? "enabled" : "disabled");

  console.log("\n🎯 GitHub Actions Context:");
  console.log("  Repository:", env.GITHUB_REPOSITORY);
  console.log("  Branch:", env.GITHUB_REF_NAME);
  console.log("  Commit SHA:", env.GITHUB_SHA);
  console.log("  Actor:", env.GITHUB_ACTOR);
  console.log("  Run ID:", env.GITHUB_RUN_ID);
  console.log("  Runner OS:", env.RUNNER_OS);

  // Deployment logic would go here
  console.log("\n🚢 Ready to deploy!");
} catch (error) {
  console.error("❌ Environment validation failed!\n");

  if (error instanceof Error) {
    console.error("Error details:", error.message);
  }

  console.error("\n💡 Make sure all required environment variables are set:");
  console.error("  - API_KEY (from secrets)");
  console.error("  - DEPLOY_ENV (staging or production)");

  process.exit(1);
}
