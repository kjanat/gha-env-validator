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
    .transform((val) => val === "true" || val === true)
    .describe("Always set to true."),

  GITHUB_ACTIONS: z
    .literal("true")
    .or(z.boolean())
    .transform((val) => val === "true" || val === true)
    .describe(
      "Always set to true when GitHub Actions is running the workflow. You can use this variable to differentiate when tests are being run locally or by GitHub Actions.",
    ),

  GITHUB_REF_PROTECTED: z
    .string()
    .transform((val) => val === "true")
    .optional()
    .describe(
      "true if branch protections or rulesets are configured for the ref that triggered the workflow run.",
    ),

  // Action context
  GITHUB_ACTION: z
    .string()
    .describe(
      "The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id.",
    ),

  GITHUB_ACTION_PATH: z
    .string()
    .optional()
    .describe(
      "The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository.",
    ),

  GITHUB_ACTION_REPOSITORY: z
    .string()
    .optional()
    .describe(
      "For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.",
    ),

  // Actor/user information
  GITHUB_ACTOR: z
    .string()
    .describe(
      "The name of the person or app that initiated the workflow. For example, octocat.",
    ),

  GITHUB_ACTOR_ID: z
    .string()
    .transform(Number)
    .describe(
      "The account ID of the person or app that triggered the initial workflow run. For example, 1234567. Note that this is different from the actor username.",
    ),

  GITHUB_TRIGGERING_ACTOR: z
    .string()
    .describe(
      "The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from github.actor. Any workflow re-runs will use the privileges of github.actor, even if the actor initiating the re-run (github.triggering_actor) has different privileges.",
    ),

  // API endpoints
  GITHUB_API_URL: z
    .string()
    .url()
    .describe("Returns the API URL. For example: https://api.github.com."),

  GITHUB_GRAPHQL_URL: z
    .string()
    .url()
    .describe(
      "Returns the GraphQL API URL. For example: https://api.github.com/graphql.",
    ),

  GITHUB_SERVER_URL: z
    .string()
    .url()
    .describe("The URL of the GitHub server. For example: https://github.com."),

  // Pull request refs (optional - only present in PR contexts)
  GITHUB_BASE_REF: z
    .string()
    .optional()
    .describe(
      "The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    ),

  GITHUB_HEAD_REF: z
    .string()
    .optional()
    .describe(
      "The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    ),

  // File paths for GitHub Actions features
  GITHUB_ENV: z
    .string()
    .describe(
      "The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    ),

  GITHUB_EVENT_PATH: z
    .string()
    .describe(
      "The path to the file on the runner that contains the full event webhook payload. For example, /github/workflow/event.json.",
    ),

  GITHUB_OUTPUT: z
    .string()
    .describe(
      "The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    ),

  GITHUB_PATH: z
    .string()
    .describe(
      "The path on the runner to the file that sets system PATH variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    ),

  GITHUB_STEP_SUMMARY: z
    .string()
    .describe(
      "The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    ),

  // Event information
  GITHUB_EVENT_NAME: z
    .string()
    .describe(
      "The name of the event that triggered the workflow. For example, workflow_dispatch.",
    ),

  // Job information
  GITHUB_JOB: z
    .string()
    .describe("The job_id of the current job. For example, greeting_job."),

  // Ref information
  GITHUB_REF: z
    .string()
    .describe(
      "The fully-formed ref of the branch or tag that triggered the workflow run. For branches the format is refs/heads/<branch_name>, for tags it is refs/tags/<tag_name>, and for pull requests it is refs/pull/<pr_number>/merge.",
    ),

  GITHUB_REF_NAME: z
    .string()
    .describe(
      "The short ref name of the branch or tag that triggered the workflow run. This value matches the branch or tag name shown on GitHub. For pull requests, the format is <pr_number>/merge.",
    ),

  GITHUB_REF_TYPE: z
    .enum(["branch", "tag"])
    .describe("The type of ref that triggered the workflow run. Valid values are branch or tag."),

  // Repository information
  GITHUB_REPOSITORY: z
    .string()
    .describe("The owner and repository name. For example, octocat/Hello-World."),

  GITHUB_REPOSITORY_ID: z
    .string()
    .transform(Number)
    .describe(
      "The ID of the repository. For example, 123456789. Note that this is different from the repository name.",
    ),

  GITHUB_REPOSITORY_OWNER: z
    .string()
    .describe("The repository owner's name. For example, octocat."),

  GITHUB_REPOSITORY_OWNER_ID: z
    .string()
    .transform(Number)
    .describe(
      "The repository owner's account ID. For example, 1234567. Note that this is different from the owner's name.",
    ),

  // Retention settings
  GITHUB_RETENTION_DAYS: z
    .string()
    .transform(Number)
    .describe(
      "The number of days that workflow run logs and artifacts are kept. For example, 90.",
    ),

  // Run information
  GITHUB_RUN_ATTEMPT: z
    .string()
    .transform(Number)
    .describe(
      "A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run.",
    ),

  GITHUB_RUN_ID: z
    .string()
    .transform(Number)
    .describe(
      "A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run.",
    ),

  GITHUB_RUN_NUMBER: z
    .string()
    .transform(Number)
    .describe(
      "A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.",
    ),

  // SHA information
  GITHUB_SHA: z
    .string()
    .describe(
      "The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow.",
    ),

  // Workflow information
  GITHUB_WORKFLOW: z
    .string()
    .describe(
      "The name of the workflow. If the workflow file doesn't specify a name, the value of this variable is the full path of the workflow file in the repository.",
    ),

  GITHUB_WORKFLOW_REF: z
    .string()
    .describe(
      "The ref path to the workflow. For example, octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch.",
    ),

  GITHUB_WORKFLOW_SHA: z.string().describe("The commit SHA for the workflow file."),

  // Workspace
  GITHUB_WORKSPACE: z
    .string()
    .describe(
      "The default working directory on the runner for steps, and the default location of your repository when using the checkout action.",
    ),

  // Runner information
  RUNNER_ARCH: z
    .enum(["X86", "X64", "ARM", "ARM64"])
    .describe(
      "The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.",
    ),

  RUNNER_DEBUG: z
    .string()
    .optional()
    .describe(
      "This is set only if debug logging is enabled, and always has the value of 1. It can be useful as an indicator to enable additional debugging or verbose logging in your own job steps.",
    ),

  RUNNER_ENVIRONMENT: z
    .enum(["github-hosted", "self-hosted"])
    .describe(
      "The environment of the runner executing the job. Possible values are: github-hosted for GitHub-hosted runners provided by GitHub, and self-hosted for self-hosted runners configured by the repository owner.",
    ),

  RUNNER_NAME: z
    .string()
    .describe(
      "The name of the runner executing the job. This name may not be unique in a workflow run as runners at the repository and organization levels could use the same name.",
    ),

  RUNNER_OS: z
    .enum(["Linux", "Windows", "macOS"])
    .describe(
      "The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS.",
    ),

  RUNNER_TEMP: z
    .string()
    .describe(
      "The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them.",
    ),

  RUNNER_TOOL_CACHE: z
    .string()
    .describe(
      "The path to the directory containing preinstalled tools for GitHub-hosted runners.",
    ),
});

/**
 * Inferred TypeScript type from the GitHub Actions schema.
 * This represents the validated and transformed environment variables.
 */
export type GitHubActionsEnv = z.infer<typeof githubActionsSchema>;
