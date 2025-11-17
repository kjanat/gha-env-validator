/**
 * @kjanat/gha-env-validator
 *
 * Type-safe GitHub Actions environment variable validation with IntelliSense support.
 *
 * @example
 * ```typescript
 * import { validateEnv } from '@kjanat/gha-env-validator';
 *
 * const env = validateEnv();
 * console.log(env.GITHUB_SHA); // Type-safe with IntelliSense
 * ```
 *
 * @packageDocumentation
 */

// Type augmentation happens automatically via src/types/env.d.ts

// Re-export Zod for convenience
export { z, type ZodError } from "zod";

// Export builder functions
export { createCustomEnvSchema, createEnvSchema } from "./create-env-schema.js";
// Export schemas
export { type GitHubActionsEnv, githubActionsSchema } from "./schemas/index.js";
// Export validation functions
export {
  safeValidateCustomEnv,
  safeValidateEnv,
  validateCustomEnv,
  validateEnv,
  type ValidateEnvOptions,
} from "./validate.js";
