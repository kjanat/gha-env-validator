/**
 * Basic usage example - validates GitHub Actions default environment variables
 */

import { validateEnv } from "@kjanat/gha-env-validator";

// Validate all GitHub Actions environment variables
const env = validateEnv();

// Type-safe access with IntelliSense
console.log("🚀 GitHub Actions Environment:");
console.log("  Repository:", env.GITHUB_REPOSITORY);
console.log("  Commit SHA:", env.GITHUB_SHA);
console.log("  Run ID:", env.GITHUB_RUN_ID);
console.log("  Actor:", env.GITHUB_ACTOR);
console.log("  Runner OS:", env.RUNNER_OS);
console.log("  Event:", env.GITHUB_EVENT_NAME);

// Transformed types work correctly
console.log("\n📊 Type transformations:");
console.log(
  "  Run ID (number):",
  typeof env.GITHUB_RUN_ID,
  "=",
  env.GITHUB_RUN_ID
);
console.log("  CI (boolean):", typeof env.CI, "=", env.CI);
