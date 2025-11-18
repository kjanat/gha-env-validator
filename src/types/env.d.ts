/**
 * Augments NodeJS.ProcessEnv with GitHub Actions environment variable types.
 *
 * This provides IntelliSense and type-safety when accessing process.env in TypeScript.
 * After importing this package, you'll get autocomplete and hover documentation for all GitHub Actions vars.
 *
 * @see https://docs.github.com/en/actions/reference/workflows-and-actions/variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** Always set to true. */
      CI?: string | undefined;

      /** Always set to true when GitHub Actions is running the workflow. You can use this variable to differentiate when tests are being run locally or by GitHub Actions. */
      GITHUB_ACTIONS?: string | undefined;

      /** The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id. */
      GITHUB_ACTION?: string | undefined;

      /** The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository. */
      GITHUB_ACTION_PATH?: string | undefined;

      /** For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout. */
      GITHUB_ACTION_REPOSITORY?: string | undefined;

      /** The name of the person or app that initiated the workflow. For example, octocat. */
      GITHUB_ACTOR?: string | undefined;

      /** The account ID of the person or app that triggered the initial workflow run. For example, 1234567. Note that this is different from the actor username. */
      GITHUB_ACTOR_ID?: string | undefined;

      /** Returns the API URL. For example: https://api.github.com. */
      GITHUB_API_URL?: string | undefined;

      /** The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either pull_request or pull_request_target. */
      GITHUB_BASE_REF?: string | undefined;

      /** The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. */
      GITHUB_ENV?: string | undefined;

      /** The name of the event that triggered the workflow. For example, workflow_dispatch. */
      GITHUB_EVENT_NAME?: string | undefined;

      /** The path to the file on the runner that contains the full event webhook payload. For example, /github/workflow/event.json. */
      GITHUB_EVENT_PATH?: string | undefined;

      /** Returns the GraphQL API URL. For example: https://api.github.com/graphql. */
      GITHUB_GRAPHQL_URL?: string | undefined;

      /** The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either pull_request or pull_request_target. */
      GITHUB_HEAD_REF?: string | undefined;

      /** The job_id of the current job. For example, greeting_job. */
      GITHUB_JOB?: string | undefined;

      /** The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job. */
      GITHUB_OUTPUT?: string | undefined;

      /** The path on the runner to the file that sets system PATH variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. */
      GITHUB_PATH?: string | undefined;

      /** The fully-formed ref of the branch or tag that triggered the workflow run. For branches the format is refs/heads/<branch_name>, for tags it is refs/tags/<tag_name>, and for pull requests it is refs/pull/<pr_number>/merge. */
      GITHUB_REF?: string | undefined;

      /** The short ref name of the branch or tag that triggered the workflow run. This value matches the branch or tag name shown on GitHub. For pull requests, the format is <pr_number>/merge. */
      GITHUB_REF_NAME?: string | undefined;

      /** true if branch protections or rulesets are configured for the ref that triggered the workflow run. */
      GITHUB_REF_PROTECTED?: string | undefined;

      /** The type of ref that triggered the workflow run. Valid values are branch or tag. */
      GITHUB_REF_TYPE?: string | undefined;

      /** The owner and repository name. For example, octocat/Hello-World. */
      GITHUB_REPOSITORY?: string | undefined;

      /** The ID of the repository. For example, 123456789. Note that this is different from the repository name. */
      GITHUB_REPOSITORY_ID?: string | undefined;

      /** The repository owner's name. For example, octocat. */
      GITHUB_REPOSITORY_OWNER?: string | undefined;

      /** The repository owner's account ID. For example, 1234567. Note that this is different from the owner's name. */
      GITHUB_REPOSITORY_OWNER_ID?: string | undefined;

      /** The number of days that workflow run logs and artifacts are kept. For example, 90. */
      GITHUB_RETENTION_DAYS?: string | undefined;

      /** A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. */
      GITHUB_RUN_ATTEMPT?: string | undefined;

      /** A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run. */
      GITHUB_RUN_ID?: string | undefined;

      /** A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run. */
      GITHUB_RUN_NUMBER?: string | undefined;

      /** The URL of the GitHub server. For example: https://github.com. */
      GITHUB_SERVER_URL?: string | undefined;

      /** The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow. */
      GITHUB_SHA?: string | undefined;

      /** The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job. */
      GITHUB_STEP_SUMMARY?: string | undefined;

      /** The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from github.actor. Any workflow re-runs will use the privileges of github.actor, even if the actor initiating the re-run (github.triggering_actor) has different privileges. */
      GITHUB_TRIGGERING_ACTOR?: string | undefined;

      /** The name of the workflow. If the workflow file doesn't specify a name, the value of this variable is the full path of the workflow file in the repository. */
      GITHUB_WORKFLOW?: string | undefined;

      /** The ref path to the workflow. For example, octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch. */
      GITHUB_WORKFLOW_REF?: string | undefined;

      /** The commit SHA for the workflow file. */
      GITHUB_WORKFLOW_SHA?: string | undefined;

      /** The default working directory on the runner for steps, and the default location of your repository when using the checkout action. */
      GITHUB_WORKSPACE?: string | undefined;

      /** The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64. */
      RUNNER_ARCH?: string | undefined;

      /** This is set only if debug logging is enabled, and always has the value of 1. It can be useful as an indicator to enable additional debugging or verbose logging in your own job steps. */
      RUNNER_DEBUG?: string | undefined;

      /** The environment of the runner executing the job. Possible values are: github-hosted for GitHub-hosted runners provided by GitHub, and self-hosted for self-hosted runners configured by the repository owner. */
      RUNNER_ENVIRONMENT?: string | undefined;

      /** The name of the runner executing the job. This name may not be unique in a workflow run as runners at the repository and organization levels could use the same name. */
      RUNNER_NAME?: string | undefined;

      /** The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS. */
      RUNNER_OS?: string | undefined;

      /** The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them. */
      RUNNER_TEMP?: string | undefined;

      /** The path to the directory containing preinstalled tools for GitHub-hosted runners. */
      RUNNER_TOOL_CACHE?: string | undefined;

      // Preserve index signature for dynamic env var access
      [key: string]: string | undefined;
    }
  }
}

export {};
