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

// Re-export all webhook event types
export type {
  CheckRunEvent,
  CheckSuiteEvent,
  CreateEvent,
  DeleteEvent,
  DeploymentEvent,
  DeploymentStatusEvent,
  DiscussionCommentEvent,
  DiscussionEvent,
  ForkEvent,
  GollumEvent,
  IssueCommentEvent,
  IssuesEvent,
  PingEvent,
  PullRequestEvent,
  PushEvent,
  ReleaseEvent,
  StarEvent,
  WatchEvent,
  WorkflowDispatchEvent,
  WorkflowJobEvent,
  WorkflowRunEvent
} from "@octokit/webhooks-types";
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
  isTag
} from "~/context";
// Export builder functions
export { createCustomEnvSchema, createEnvSchema } from "~/create-env-schema";

// Export event name type
export type { GitHubEventName } from "~/event-types";

// Export extended event utilities (15 most common events)
export {
  getCheckRunEvent,
  getCheckSuiteEvent,
  getCreateEvent,
  getDeleteEvent,
  getDeploymentEvent,
  getDeploymentStatusEvent,
  getDiscussionCommentEvent,
  getDiscussionEvent,
  getForkEvent,
  getGollumEvent,
  getIssueCommentEvent,
  getIssuesEvent,
  getPingEvent,
  getStarEvent,
  getWatchEvent,
  getWorkflowJobEvent,
  getWorkflowRunEvent,
  isCheckRunEvent,
  isCheckSuiteEvent,
  isCreateEvent,
  isDeleteEvent,
  isDeploymentEvent,
  isDeploymentStatusEvent,
  isDiscussionCommentEvent,
  isDiscussionEvent,
  isForkEvent,
  isGollumEvent,
  isIssueCommentEvent,
  isIssuesEvent,
  isPingEvent,
  isStarEvent,
  isWatchEvent,
  isWorkflowJobEvent,
  isWorkflowRunEvent
} from "~/events";
// Export github context utilities
export {
  getEventName,
  getEventPayload,
  getGitHubToken,
  getPullRequestEvent,
  getPushEvent,
  getReleaseEvent,
  getRepositoryGitUrl,
  getRepositoryUrl,
  getWorkflowDispatchEvent,
  isEventType,
  isPushEvent,
  isReleaseEvent,
  isWorkflowDispatch
} from "~/github-context";
// Export action input utilities
export {
  getBooleanInput,
  getInput,
  getMultilineInput,
  safeValidateInputs,
  validateInputs
} from "~/inputs";
// Export metadata utilities
export {
  getEnumValues,
  getSchemaMetadata,
  getZodTypeName,
  isBooleanSchema,
  isSchemaOptional,
  isZodEnum,
  type ZodMetadata
} from "~/metadata";
// Export schemas
export { type GitHubActionsEnv, githubActionsSchema } from "~/schemas";
// Export validation functions
export {
  safeValidateCustomEnv,
  safeValidateEnv,
  type ValidateEnvOptions,
  validateCustomEnv,
  validateEnv
} from "~/validate";
// Export workflow command utilities
export {
  addJobSummary,
  addPath,
  addSummary,
  addSummaryCodeBlock,
  addSummaryTable,
  assertGitHubActions,
  clearJobSummary,
  debug,
  endGroup,
  error,
  formatSummaryCodeBlock,
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
  warning
} from "~/workflow-commands";
