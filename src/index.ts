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
export { type ZodError, z } from "zod";
// Export context utilities
export {
  getActor,
  getApiUrls,
  getCommitSha,
  getCurrentBranch,
  getPullRequestInfo,
  getRepoInfo,
  getRunnerInfo,
  getWorkflowRun,
  isDebugMode,
  isOnBranch,
  isPullRequest,
  isTag,
} from "./context.js";
// Export builder functions
export { createCustomEnvSchema, createEnvSchema } from "./create-env-schema.ts";
// Export action input utilities
export {
  getBooleanInput,
  getInput,
  getMultilineInput,
  safeValidateInputs,
  validateInputs,
} from "./inputs.js";
// Export schemas
export { type GitHubActionsEnv, githubActionsSchema } from "./schemas/index.ts";
// Export validation functions
export {
  safeValidateCustomEnv,
  safeValidateEnv,
  type ValidateEnvOptions,
  validateCustomEnv,
  validateEnv,
} from "./validate.ts";
// Export workflow command utilities
export {
  addJobSummary,
  addPath,
  addSummary,
  addSummaryTable,
  assertGitHubActions,
  clearJobSummary,
  debug,
  endGroup,
  error,
  group,
  isGitHubActions,
  maskValue,
  notice,
  resumeCommands,
  setEnvVar,
  setEnvVars,
  setFailed,
  setMultilineEnvVar,
  setMultilineOutput,
  setOutput,
  setOutputs,
  startGroup,
  stopCommands,
  warning,
} from "./workflow-commands.js";
