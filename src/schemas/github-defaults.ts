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
    .meta({
      id: "CI",
      title: "CI Environment Flag",
      description: "Always set to true.",
      category: "environment",
      example: "true",
    }),

  GITHUB_ACTIONS: z
    .literal("true")
    .or(z.boolean())
    .transform((val) => val === "true" || val === true)
    .meta({
      id: "GITHUB_ACTIONS",
      title: "GitHub Actions Flag",
      description:
        "Always set to true when GitHub Actions is running the workflow. You can use this variable to differentiate when tests are being run locally or by GitHub Actions.",
      category: "environment",
      example: "true",
    }),

  GITHUB_REF_PROTECTED: z
    .string()
    .transform((val) => val === "true")
    .optional()
    .meta({
      id: "GITHUB_REF_PROTECTED",
      title: "Branch Protection Status",
      description:
        "true if branch protections or rulesets are configured for the ref that triggered the workflow run.",
      category: "git",
      example: "true",
    }),

  // Action context
  GITHUB_ACTION: z.string().meta({
    id: "GITHUB_ACTION",
    title: "Action Name",
    description:
      "The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id.",
    category: "action",
    example: "__repo-owner_name-of-action-repo",
  }),

  GITHUB_ACTION_PATH: z.string().optional().meta({
    id: "GITHUB_ACTION_PATH",
    title: "Action Path",
    description:
      "The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository.",
    category: "action",
    example: "/home/runner/work/_actions/repo-owner/name-of-action-repo/v1",
  }),

  GITHUB_ACTION_REPOSITORY: z.string().optional().meta({
    id: "GITHUB_ACTION_REPOSITORY",
    title: "Action Repository",
    description:
      "For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.",
    category: "action",
    example: "actions/checkout",
  }),

  // Actor/user information
  GITHUB_ACTOR: z.string().meta({
    id: "GITHUB_ACTOR",
    title: "Workflow Actor",
    description: "The name of the person or app that initiated the workflow.",
    category: "actor",
    example: "octocat",
  }),

  GITHUB_ACTOR_ID: z.string().transform(Number).meta({
    id: "GITHUB_ACTOR_ID",
    title: "Actor Account ID",
    description:
      "The account ID of the person or app that triggered the initial workflow run. Note that this is different from the actor username.",
    category: "actor",
    example: "1234567",
  }),

  GITHUB_TRIGGERING_ACTOR: z.string().meta({
    id: "GITHUB_TRIGGERING_ACTOR",
    title: "Triggering Actor",
    description:
      "The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from github.actor. Any workflow re-runs will use the privileges of github.actor, even if the actor initiating the re-run (github.triggering_actor) has different privileges.",
    category: "actor",
    example: "octocat",
  }),

  // API endpoints
  GITHUB_API_URL: z.string().url().meta({
    id: "GITHUB_API_URL",
    title: "API URL",
    description: "Returns the API URL.",
    category: "api",
    example: "https://api.github.com",
  }),

  GITHUB_GRAPHQL_URL: z.string().url().meta({
    id: "GITHUB_GRAPHQL_URL",
    title: "GraphQL API URL",
    description: "Returns the GraphQL API URL.",
    category: "api",
    example: "https://api.github.com/graphql",
  }),

  GITHUB_SERVER_URL: z.string().url().meta({
    id: "GITHUB_SERVER_URL",
    title: "Server URL",
    description: "The URL of the GitHub server.",
    category: "api",
    example: "https://github.com",
  }),

  // Pull request refs (optional - only present in PR contexts)
  GITHUB_BASE_REF: z.string().optional().meta({
    id: "GITHUB_BASE_REF",
    title: "PR Base Branch",
    description:
      "The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "main",
  }),

  GITHUB_HEAD_REF: z.string().optional().meta({
    id: "GITHUB_HEAD_REF",
    title: "PR Source Branch",
    description:
      "The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "feature-branch-1",
  }),

  // File paths for GitHub Actions features
  GITHUB_ENV: z.string().meta({
    id: "GITHUB_ENV",
    title: "Environment File Path",
    description:
      "The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_env",
  }),

  GITHUB_EVENT_PATH: z.string().meta({
    id: "GITHUB_EVENT_PATH",
    title: "Event Payload Path",
    description:
      "The path to the file on the runner that contains the full event webhook payload.",
    category: "paths",
    example: "/github/workflow/event.json",
  }),

  GITHUB_OUTPUT: z.string().meta({
    id: "GITHUB_OUTPUT",
    title: "Output File Path",
    description:
      "The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_output",
  }),

  GITHUB_PATH: z.string().meta({
    id: "GITHUB_PATH",
    title: "PATH File Path",
    description:
      "The path on the runner to the file that sets system PATH variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/add_path",
  }),

  GITHUB_STEP_SUMMARY: z.string().meta({
    id: "GITHUB_STEP_SUMMARY",
    title: "Step Summary Path",
    description:
      "The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/step_summary",
  }),

  // Event information
  GITHUB_EVENT_NAME: z.string().meta({
    id: "GITHUB_EVENT_NAME",
    title: "Event Name",
    description: "The name of the event that triggered the workflow.",
    category: "event",
    example: "workflow_dispatch",
  }),

  // Job information
  GITHUB_JOB: z.string().meta({
    id: "GITHUB_JOB",
    title: "Job ID",
    description: "The job_id of the current job.",
    category: "job",
    example: "greeting_job",
  }),

  // Ref information
  GITHUB_REF: z.string().meta({
    id: "GITHUB_REF",
    title: "Git Ref",
    description:
      "The fully-formed ref of the branch or tag that triggered the workflow run. For branches the format is refs/heads/<branch_name>, for tags it is refs/tags/<tag_name>, and for pull requests it is refs/pull/<pr_number>/merge.",
    category: "git",
    example: "refs/heads/feature-branch-1",
  }),

  GITHUB_REF_NAME: z.string().meta({
    id: "GITHUB_REF_NAME",
    title: "Ref Name",
    description:
      "The short ref name of the branch or tag that triggered the workflow run. This value matches the branch or tag name shown on GitHub. For pull requests, the format is <pr_number>/merge.",
    category: "git",
    example: "feature-branch-1",
  }),

  GITHUB_REF_TYPE: z.enum(["branch", "tag"]).meta({
    id: "GITHUB_REF_TYPE",
    title: "Ref Type",
    description:
      "The type of ref that triggered the workflow run. Valid values are branch or tag.",
    category: "git",
    example: "branch",
  }),

  // Repository information
  GITHUB_REPOSITORY: z.string().meta({
    id: "GITHUB_REPOSITORY",
    title: "Repository",
    description: "The owner and repository name.",
    category: "repository",
    example: "octocat/Hello-World",
  }),

  GITHUB_REPOSITORY_ID: z.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_ID",
    title: "Repository ID",
    description:
      "The ID of the repository. Note that this is different from the repository name.",
    category: "repository",
    example: "123456789",
  }),

  GITHUB_REPOSITORY_OWNER: z.string().meta({
    id: "GITHUB_REPOSITORY_OWNER",
    title: "Repository Owner",
    description: "The repository owner's name.",
    category: "repository",
    example: "octocat",
  }),

  GITHUB_REPOSITORY_OWNER_ID: z.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_OWNER_ID",
    title: "Owner Account ID",
    description:
      "The repository owner's account ID. Note that this is different from the owner's name.",
    category: "repository",
    example: "1234567",
  }),

  // Retention settings
  GITHUB_RETENTION_DAYS: z.string().transform(Number).meta({
    id: "GITHUB_RETENTION_DAYS",
    title: "Retention Days",
    description:
      "The number of days that workflow run logs and artifacts are kept.",
    category: "workflow",
    example: "90",
  }),

  // Run information
  GITHUB_RUN_ATTEMPT: z.string().transform(Number).meta({
    id: "GITHUB_RUN_ATTEMPT",
    title: "Run Attempt Number",
    description:
      "A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run.",
    category: "workflow",
    example: "1",
  }),

  GITHUB_RUN_ID: z.string().transform(Number).meta({
    id: "GITHUB_RUN_ID",
    title: "Workflow Run ID",
    description:
      "A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "1658821493",
  }),

  GITHUB_RUN_NUMBER: z.string().transform(Number).meta({
    id: "GITHUB_RUN_NUMBER",
    title: "Run Number",
    description:
      "A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "42",
  }),

  // SHA information
  GITHUB_SHA: z.string().meta({
    id: "GITHUB_SHA",
    title: "Commit SHA",
    description:
      "The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow.",
    category: "git",
    example: "ffac537e6cbbf934b08745a378932722df287a53",
  }),

  // Workflow information
  GITHUB_WORKFLOW: z.string().meta({
    id: "GITHUB_WORKFLOW",
    title: "Workflow Name",
    description:
      "The name of the workflow. If the workflow file doesn't specify a name, the value of this variable is the full path of the workflow file in the repository.",
    category: "workflow",
    example: "CI",
  }),

  GITHUB_WORKFLOW_REF: z.string().meta({
    id: "GITHUB_WORKFLOW_REF",
    title: "Workflow Ref",
    description: "The ref path to the workflow.",
    category: "workflow",
    example:
      "octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch",
  }),

  GITHUB_WORKFLOW_SHA: z.string().meta({
    id: "GITHUB_WORKFLOW_SHA",
    title: "Workflow File SHA",
    description: "The commit SHA for the workflow file.",
    category: "workflow",
    example: "ffac537e6cbbf934b08745a378932722df287a53",
  }),

  // Workspace
  GITHUB_WORKSPACE: z.string().meta({
    id: "GITHUB_WORKSPACE",
    title: "Workspace Directory",
    description:
      "The default working directory on the runner for steps, and the default location of your repository when using the checkout action.",
    category: "paths",
    example: "/home/runner/work/my-repo-name/my-repo-name",
  }),

  // Runner information
  RUNNER_ARCH: z.enum(["X86", "X64", "ARM", "ARM64"]).meta({
    id: "RUNNER_ARCH",
    title: "Runner Architecture",
    description:
      "The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.",
    category: "runner",
    example: "X64",
  }),

  RUNNER_DEBUG: z.string().optional().meta({
    id: "RUNNER_DEBUG",
    title: "Debug Mode",
    description:
      "This is set only if debug logging is enabled, and always has the value of 1. It can be useful as an indicator to enable additional debugging or verbose logging in your own job steps.",
    category: "runner",
    example: "1",
  }),

  RUNNER_ENVIRONMENT: z.enum(["github-hosted", "self-hosted"]).meta({
    id: "RUNNER_ENVIRONMENT",
    title: "Runner Environment",
    description:
      "The environment of the runner executing the job. Possible values are: github-hosted for GitHub-hosted runners provided by GitHub, and self-hosted for self-hosted runners configured by the repository owner.",
    category: "runner",
    example: "github-hosted",
  }),

  RUNNER_NAME: z.string().meta({
    id: "RUNNER_NAME",
    title: "Runner Name",
    description:
      "The name of the runner executing the job. This name may not be unique in a workflow run as runners at the repository and organization levels could use the same name.",
    category: "runner",
    example: "Hosted Agent",
  }),

  RUNNER_OS: z.enum(["Linux", "Windows", "macOS"]).meta({
    id: "RUNNER_OS",
    title: "Runner OS",
    description:
      "The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS.",
    category: "runner",
    example: "Linux",
  }),

  RUNNER_TEMP: z.string().meta({
    id: "RUNNER_TEMP",
    title: "Temp Directory",
    description:
      "The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them.",
    category: "runner",
    example: "/home/runner/work/_temp",
  }),

  RUNNER_TOOL_CACHE: z.string().meta({
    id: "RUNNER_TOOL_CACHE",
    title: "Tool Cache Directory",
    description:
      "The path to the directory containing preinstalled tools for GitHub-hosted runners.",
    category: "runner",
    example: "/opt/hostedtoolcache",
  }),
});

/**
 * Inferred TypeScript type from the GitHub Actions schema.
 * This represents the validated and transformed environment variables.
 */
export type GitHubActionsEnv = z.infer<typeof githubActionsSchema>;
