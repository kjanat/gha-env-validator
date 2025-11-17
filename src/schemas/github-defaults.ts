import { z } from "zod";

/**
 * Zod schema for GitHub Actions default environment variables.
 *
 * These variables are automatically set by GitHub Actions in every workflow run.
 * Variables marked optional are only available in specific contexts (e.g., pull requests).
 *
 * @see https://docs.github.com/en/actions/reference/workflows-and-actions/variables
 */
export const githubActionsSchema = z.object({
  // Boolean flags
  CI: z
    .literal("true")
    .or(z.boolean())
    .transform((val) => val === "true" || val === true),
  GITHUB_ACTIONS: z
    .literal("true")
    .or(z.boolean())
    .transform((val) => val === "true" || val === true),
  GITHUB_REF_PROTECTED: z
    .string()
    .transform((val) => val === "true")
    .optional(),

  // Action context
  GITHUB_ACTION: z.string(),
  GITHUB_ACTION_PATH: z.string().optional(),
  GITHUB_ACTION_REPOSITORY: z.string().optional(),

  // Actor/user information
  GITHUB_ACTOR: z.string(),
  GITHUB_ACTOR_ID: z.string().transform(Number),
  GITHUB_TRIGGERING_ACTOR: z.string(),

  // API endpoints
  GITHUB_API_URL: z.string().url(),
  GITHUB_GRAPHQL_URL: z.string().url(),
  GITHUB_SERVER_URL: z.string().url(),

  // Pull request refs (optional - only present in PR contexts)
  GITHUB_BASE_REF: z.string().optional(),
  GITHUB_HEAD_REF: z.string().optional(),

  // File paths for GitHub Actions features
  GITHUB_ENV: z.string(),
  GITHUB_EVENT_PATH: z.string(),
  GITHUB_OUTPUT: z.string(),
  GITHUB_PATH: z.string(),
  GITHUB_STEP_SUMMARY: z.string(),

  // Event information
  GITHUB_EVENT_NAME: z.string(),

  // Job information
  GITHUB_JOB: z.string(),

  // Ref information
  GITHUB_REF: z.string(),
  GITHUB_REF_NAME: z.string(),
  GITHUB_REF_TYPE: z.enum(["branch", "tag"]),

  // Repository information
  GITHUB_REPOSITORY: z.string(),
  GITHUB_REPOSITORY_ID: z.string().transform(Number),
  GITHUB_REPOSITORY_OWNER: z.string(),
  GITHUB_REPOSITORY_OWNER_ID: z.string().transform(Number),

  // Retention settings
  GITHUB_RETENTION_DAYS: z.string().transform(Number),

  // Run information
  GITHUB_RUN_ATTEMPT: z.string().transform(Number),
  GITHUB_RUN_ID: z.string().transform(Number),
  GITHUB_RUN_NUMBER: z.string().transform(Number),

  // SHA information
  GITHUB_SHA: z.string(),

  // Workflow information
  GITHUB_WORKFLOW: z.string(),
  GITHUB_WORKFLOW_REF: z.string(),
  GITHUB_WORKFLOW_SHA: z.string(),

  // Workspace
  GITHUB_WORKSPACE: z.string(),

  // Runner information
  RUNNER_ARCH: z.enum(["X86", "X64", "ARM", "ARM64"]),
  RUNNER_DEBUG: z.string().optional(),
  RUNNER_ENVIRONMENT: z.enum(["github-hosted", "self-hosted"]),
  RUNNER_NAME: z.string(),
  RUNNER_OS: z.enum(["Linux", "Windows", "macOS"]),
  RUNNER_TEMP: z.string(),
  RUNNER_TOOL_CACHE: z.string(),
});

/**
 * Inferred TypeScript type from the GitHub Actions schema.
 * This represents the validated and transformed environment variables.
 */
export type GitHubActionsEnv = z.infer<typeof githubActionsSchema>;
