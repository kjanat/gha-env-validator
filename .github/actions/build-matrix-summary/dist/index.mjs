#!/usr/bin/env node

// ../../../src/validate.ts
import z2 from "zod";

// ../../../src/schemas/github-defaults.ts
import { z } from "zod";
var githubActionsSchema = z.object({
  CI: z.literal("true").or(z.boolean()).transform((val) => val === "true" || val === true).meta({
    id: "CI",
    title: "CI Environment Flag",
    description: "Always set to true.",
    category: "environment",
    example: "true"
  }),
  GITHUB_ACTIONS: z.literal("true").or(z.boolean()).transform((val) => val === "true" || val === true).meta({
    id: "GITHUB_ACTIONS",
    title: "GitHub Actions Flag",
    description: "Always set to true when GitHub Actions is running the workflow. You can use this variable to differentiate when tests are being run locally or by GitHub Actions.",
    category: "environment",
    example: "true"
  }),
  GITHUB_REF_PROTECTED: z.string().transform((val) => val === "true").optional().meta({
    id: "GITHUB_REF_PROTECTED",
    title: "Branch Protection Status",
    description: "true if branch protections or rulesets are configured for the ref that triggered the workflow run.",
    category: "git",
    example: "true"
  }),
  GITHUB_ACTION: z.string().meta({
    id: "GITHUB_ACTION",
    title: "Action Name",
    description: "The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id.",
    category: "action",
    example: "__repo-owner_name-of-action-repo"
  }),
  GITHUB_ACTION_PATH: z.string().optional().meta({
    id: "GITHUB_ACTION_PATH",
    title: "Action Path",
    description: "The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository.",
    category: "action",
    example: "/home/runner/work/_actions/repo-owner/name-of-action-repo/v1"
  }),
  GITHUB_ACTION_REPOSITORY: z.string().optional().meta({
    id: "GITHUB_ACTION_REPOSITORY",
    title: "Action Repository",
    description: "For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.",
    category: "action",
    example: "actions/checkout"
  }),
  GITHUB_ACTOR: z.string().meta({
    id: "GITHUB_ACTOR",
    title: "Workflow Actor",
    description: "The name of the person or app that initiated the workflow.",
    category: "actor",
    example: "octocat"
  }),
  GITHUB_ACTOR_ID: z.string().transform(Number).meta({
    id: "GITHUB_ACTOR_ID",
    title: "Actor Account ID",
    description: "The account ID of the person or app that triggered the initial workflow run. Note that this is different from the actor username.",
    category: "actor",
    example: "1234567"
  }),
  GITHUB_TRIGGERING_ACTOR: z.string().meta({
    id: "GITHUB_TRIGGERING_ACTOR",
    title: "Triggering Actor",
    description: "The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from github.actor. Any workflow re-runs will use the privileges of github.actor, even if the actor initiating the re-run (github.triggering_actor) has different privileges.",
    category: "actor",
    example: "octocat"
  }),
  GITHUB_API_URL: z.url().meta({
    id: "GITHUB_API_URL",
    title: "API URL",
    description: "Returns the API URL.",
    category: "api",
    example: "https://api.github.com"
  }),
  GITHUB_GRAPHQL_URL: z.url().meta({
    id: "GITHUB_GRAPHQL_URL",
    title: "GraphQL API URL",
    description: "Returns the GraphQL API URL.",
    category: "api",
    example: "https://api.github.com/graphql"
  }),
  GITHUB_SERVER_URL: z.url().meta({
    id: "GITHUB_SERVER_URL",
    title: "Server URL",
    description: "The URL of the GitHub server.",
    category: "api",
    example: "https://github.com"
  }),
  GITHUB_BASE_REF: z.string().optional().meta({
    id: "GITHUB_BASE_REF",
    title: "PR Base Branch",
    description: "The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "main"
  }),
  GITHUB_HEAD_REF: z.string().optional().meta({
    id: "GITHUB_HEAD_REF",
    title: "PR Source Branch",
    description: "The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "feature-branch-1"
  }),
  GITHUB_ENV: z.string().meta({
    id: "GITHUB_ENV",
    title: "Environment File Path",
    description: "The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_env"
  }),
  GITHUB_EVENT_PATH: z.string().meta({
    id: "GITHUB_EVENT_PATH",
    title: "Event Payload Path",
    description: "The path to the file on the runner that contains the full event webhook payload.",
    category: "paths",
    example: "/github/workflow/event.json"
  }),
  GITHUB_OUTPUT: z.string().meta({
    id: "GITHUB_OUTPUT",
    title: "Output File Path",
    description: "The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_output"
  }),
  GITHUB_PATH: z.string().meta({
    id: "GITHUB_PATH",
    title: "PATH File Path",
    description: "The path on the runner to the file that sets system PATH variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/add_path"
  }),
  GITHUB_STEP_SUMMARY: z.string().meta({
    id: "GITHUB_STEP_SUMMARY",
    title: "Step Summary Path",
    description: "The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/step_summary"
  }),
  GITHUB_EVENT_NAME: z.string().meta({
    id: "GITHUB_EVENT_NAME",
    title: "Event Name",
    description: "The name of the event that triggered the workflow.",
    category: "event",
    example: "workflow_dispatch"
  }),
  GITHUB_JOB: z.string().meta({
    id: "GITHUB_JOB",
    title: "Job ID",
    description: "The job_id of the current job.",
    category: "job",
    example: "greeting_job"
  }),
  GITHUB_REF: z.string().meta({
    id: "GITHUB_REF",
    title: "Git Ref",
    description: "The fully-formed ref of the branch or tag that triggered the workflow run. For branches the format is refs/heads/<branch_name>, for tags it is refs/tags/<tag_name>, and for pull requests it is refs/pull/<pr_number>/merge.",
    category: "git",
    example: "refs/heads/feature-branch-1"
  }),
  GITHUB_REF_NAME: z.string().meta({
    id: "GITHUB_REF_NAME",
    title: "Ref Name",
    description: "The short ref name of the branch or tag that triggered the workflow run. This value matches the branch or tag name shown on GitHub. For pull requests, the format is <pr_number>/merge.",
    category: "git",
    example: "feature-branch-1"
  }),
  GITHUB_REF_TYPE: z.enum(["branch", "tag"]).meta({
    id: "GITHUB_REF_TYPE",
    title: "Ref Type",
    description: "The type of ref that triggered the workflow run. Valid values are branch or tag.",
    category: "git",
    example: "branch"
  }),
  GITHUB_REPOSITORY: z.string().meta({
    id: "GITHUB_REPOSITORY",
    title: "Repository",
    description: "The owner and repository name.",
    category: "repository",
    example: "octocat/Hello-World"
  }),
  GITHUB_REPOSITORY_ID: z.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_ID",
    title: "Repository ID",
    description: "The ID of the repository. Note that this is different from the repository name.",
    category: "repository",
    example: "123456789"
  }),
  GITHUB_REPOSITORY_OWNER: z.string().meta({
    id: "GITHUB_REPOSITORY_OWNER",
    title: "Repository Owner",
    description: "The repository owner's name.",
    category: "repository",
    example: "octocat"
  }),
  GITHUB_REPOSITORY_OWNER_ID: z.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_OWNER_ID",
    title: "Owner Account ID",
    description: "The repository owner's account ID. Note that this is different from the owner's name.",
    category: "repository",
    example: "1234567"
  }),
  GITHUB_RETENTION_DAYS: z.string().transform(Number).meta({
    id: "GITHUB_RETENTION_DAYS",
    title: "Retention Days",
    description: "The number of days that workflow run logs and artifacts are kept.",
    category: "workflow",
    example: "90"
  }),
  GITHUB_RUN_ATTEMPT: z.string().transform(Number).meta({
    id: "GITHUB_RUN_ATTEMPT",
    title: "Run Attempt Number",
    description: "A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run.",
    category: "workflow",
    example: "1"
  }),
  GITHUB_RUN_ID: z.string().transform(Number).meta({
    id: "GITHUB_RUN_ID",
    title: "Workflow Run ID",
    description: "A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "1658821493"
  }),
  GITHUB_RUN_NUMBER: z.string().transform(Number).meta({
    id: "GITHUB_RUN_NUMBER",
    title: "Run Number",
    description: "A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "42"
  }),
  GITHUB_SHA: z.string().meta({
    id: "GITHUB_SHA",
    title: "Commit SHA",
    description: "The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow.",
    category: "git",
    example: "ffac537e6cbbf934b08745a378932722df287a53"
  }),
  GITHUB_WORKFLOW: z.string().meta({
    id: "GITHUB_WORKFLOW",
    title: "Workflow Name",
    description: "The name of the workflow. If the workflow file doesn't specify a name, the value of this variable is the full path of the workflow file in the repository.",
    category: "workflow",
    example: "CI"
  }),
  GITHUB_WORKFLOW_REF: z.string().meta({
    id: "GITHUB_WORKFLOW_REF",
    title: "Workflow Ref",
    description: "The ref path to the workflow.",
    category: "workflow",
    example: "octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch"
  }),
  GITHUB_WORKFLOW_SHA: z.string().meta({
    id: "GITHUB_WORKFLOW_SHA",
    title: "Workflow File SHA",
    description: "The commit SHA for the workflow file.",
    category: "workflow",
    example: "ffac537e6cbbf934b08745a378932722df287a53"
  }),
  GITHUB_WORKSPACE: z.string().meta({
    id: "GITHUB_WORKSPACE",
    title: "Workspace Directory",
    description: "The default working directory on the runner for steps, and the default location of your repository when using the checkout action.",
    category: "paths",
    example: "/home/runner/work/my-repo-name/my-repo-name"
  }),
  RUNNER_ARCH: z.enum(["X86", "X64", "ARM", "ARM64"]).meta({
    id: "RUNNER_ARCH",
    title: "Runner Architecture",
    description: "The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.",
    category: "runner",
    example: "X64"
  }),
  RUNNER_DEBUG: z.string().optional().meta({
    id: "RUNNER_DEBUG",
    title: "Debug Mode",
    description: "This is set only if debug logging is enabled, and always has the value of 1. It can be useful as an indicator to enable additional debugging or verbose logging in your own job steps.",
    category: "runner",
    example: "1"
  }),
  RUNNER_ENVIRONMENT: z.enum(["github-hosted", "self-hosted"]).meta({
    id: "RUNNER_ENVIRONMENT",
    title: "Runner Environment",
    description: "The environment of the runner executing the job. Possible values are: github-hosted for GitHub-hosted runners provided by GitHub, and self-hosted for self-hosted runners configured by the repository owner.",
    category: "runner",
    example: "github-hosted"
  }),
  RUNNER_NAME: z.string().meta({
    id: "RUNNER_NAME",
    title: "Runner Name",
    description: "The name of the runner executing the job. This name may not be unique in a workflow run as runners at the repository and organization levels could use the same name.",
    category: "runner",
    example: "Hosted Agent"
  }),
  RUNNER_OS: z.enum(["Linux", "Windows", "macOS"]).meta({
    id: "RUNNER_OS",
    title: "Runner OS",
    description: "The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS.",
    category: "runner",
    example: "Linux"
  }),
  RUNNER_TEMP: z.string().meta({
    id: "RUNNER_TEMP",
    title: "Temp Directory",
    description: "The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them.",
    category: "runner",
    example: "/home/runner/work/_temp"
  }),
  RUNNER_TOOL_CACHE: z.string().meta({
    id: "RUNNER_TOOL_CACHE",
    title: "Tool Cache Directory",
    description: "The path to the directory containing preinstalled tools for GitHub-hosted runners.",
    category: "runner",
    example: "/opt/hostedtoolcache"
  })
});
// ../../../src/validate.ts
function validateEnv(options = {}) {
  const { env = process.env, strict = false } = options;
  const schema = strict ? githubActionsSchema : z2.looseObject(githubActionsSchema.shape);
  return schema.parse(env);
}

// ../../../src/context.ts
function getCurrentBranch() {
  const env = validateEnv();
  return env.GITHUB_REF_NAME;
}
function getRepoInfo() {
  const env = validateEnv();
  const parts = env.GITHUB_REPOSITORY.split("/");
  const owner = parts[0] || "";
  const name = parts[1] || "";
  return { owner, name, full: env.GITHUB_REPOSITORY };
}
function getCommitSha(format = "full") {
  const env = validateEnv();
  return format === "short" ? env.GITHUB_SHA.substring(0, 7) : env.GITHUB_SHA;
}
function getWorkflowRun() {
  const env = validateEnv();
  return {
    id: env.GITHUB_RUN_ID,
    number: env.GITHUB_RUN_NUMBER,
    attempt: env.GITHUB_RUN_ATTEMPT,
    url: `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}`
  };
}

// ../../../src/inputs.ts
import { z as z3 } from "zod";

// ../../../src/metadata.ts
function getZodTypeName(schema) {
  const schemaAny = schema;
  if (schemaAny._zod?.traits) {
    const traits = Array.from(schemaAny._zod.traits);
    const typeName = traits.find((t) => !t.startsWith("$") && t.startsWith("Zod"));
    if (typeName)
      return typeName;
  }
  return schemaAny._def?.typeName || "ZodUnknown";
}
function isBooleanSchema(schema) {
  const typeName = getZodTypeName(schema);
  if (typeName === "ZodBoolean") {
    return true;
  }
  if (typeName === "ZodOptional" || typeName === "ZodDefault") {
    const innerType = schema._def?.innerType;
    if (innerType) {
      return getZodTypeName(innerType) === "ZodBoolean";
    }
  }
  return false;
}

// ../../../src/inputs.ts
function safeValidateInputs(schema) {
  const inputs = {};
  for (const [name, zodSchema] of Object.entries(schema)) {
    const envName = `INPUT_${name.replace(/[ -]/g, "_").toUpperCase()}`;
    const value = process.env[envName]?.trim();
    if (value !== undefined && value !== "") {
      if (isBooleanSchema(zodSchema)) {
        const normalized = value.toLowerCase();
        inputs[name] = ["true", "yes", "1"].includes(normalized);
      } else {
        inputs[name] = value;
      }
    }
  }
  return z3.object(schema).safeParse(inputs);
}

// ../../../src/workflow-commands.ts
import * as fs from "node:fs";
function setOutput(name, value) {
  const outputFile = process.env.GITHUB_OUTPUT;
  if (!outputFile) {
    throw new Error("GITHUB_OUTPUT is not set. This function only works in GitHub Actions.");
  }
  fs.appendFileSync(outputFile, `${name}=${value}
`, "utf-8");
}
function addJobSummary(markdown) {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryFile) {
    throw new Error("GITHUB_STEP_SUMMARY is not set. This function only works in GitHub Actions.");
  }
  fs.appendFileSync(summaryFile, markdown, "utf-8");
}
function notice(message, options) {
  const params = formatAnnotationParams(options);
  console.log(`::notice${params}::${message}`);
}
function error(message, options) {
  const params = formatAnnotationParams(options);
  console.log(`::error${params}::${message}`);
}
async function group(title, fn) {
  console.log(`::group::${title}`);
  try {
    return await fn();
  } finally {
    console.log("::endgroup::");
  }
}
function formatAnnotationParams(options) {
  if (!options || Object.keys(options).length === 0) {
    return "";
  }
  const params = [];
  if (options.file)
    params.push(`file=${options.file}`);
  if (options.line)
    params.push(`line=${options.line}`);
  if (options.col)
    params.push(`col=${options.col}`);
  if (options.endLine)
    params.push(`endLine=${options.endLine}`);
  if (options.endColumn)
    params.push(`endColumn=${options.endColumn}`);
  if (options.title)
    params.push(`title=${options.title}`);
  return params.length > 0 ? ` ${params.join(",")}` : "";
}
function formatSummaryCodeBlock(code, lang = "") {
  const fence = "```";
  return `${fence}${lang}
${code}
${fence}`;
}
function addSummaryTable(headers, rows) {
  let table = `| ${headers.join(" | ")} |
`;
  table += `| ${headers.map(() => "---").join(" | ")} |
`;
  for (const row of rows) {
    table += `| ${row.join(" | ")} |
`;
  }
  addJobSummary(`${table}
`);
}
function setFailed(message) {
  error(message);
  process.exitCode = 1;
}

// src/index.ts
import { z as z4 } from "zod";
var BuildResultSchema = z4.object({
  name: z4.string(),
  status: z4.enum(["success", "failed", "skipped"]),
  duration: z4.number().optional(),
  os: z4.string().optional(),
  version: z4.string().optional(),
  url: z4.url().optional(),
  error: z4.string().optional()
});
var InputSchemaShape = {
  "matrix-results": z4.string().transform((str, ctx) => {
    try {
      const parsed = JSON.parse(str);
      return z4.array(BuildResultSchema).parse(parsed);
    } catch (err) {
      ctx.addIssue({
        code: "custom",
        message: `Invalid matrix-results JSON: ${err}`
      });
      return z4.NEVER;
    }
  }),
  title: z4.string().default("Build Matrix Results"),
  "include-context": z4.boolean().default(true)
};
var InputSchema = z4.object(InputSchemaShape);
async function run() {
  try {
    const inputResult = safeValidateInputs(InputSchemaShape);
    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }
    const inputs = inputResult.data;
    const results = inputs["matrix-results"];
    const stats = calculateStatistics(results);
    setOutput("total-builds", stats.total.toString());
    setOutput("successful-builds", stats.successful.toString());
    setOutput("failed-builds", stats.failed.toString());
    await generateSummary(inputs, results, stats);
    await group("\uD83D\uDCCA Matrix Summary", async () => {
      notice(`Total builds: ${stats.total}`);
      notice(`Successful: ${stats.successful}`);
      notice(`Failed: ${stats.failed}`);
      notice(`Skipped: ${stats.skipped}`);
      notice(`Success rate: ${stats.successRate.toFixed(1)}%`);
    });
    if (stats.failed > 0) {
      setFailed(`${stats.failed} builds failed`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    error(`Matrix summary generation failed: ${message}`);
    setFailed(message);
  }
}
function calculateStatistics(results) {
  const total = results.length;
  const successful = results.filter((r) => r.status === "success").length;
  const failed = results.filter((r) => r.status === "failed").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const successRate = total > 0 ? successful / total * 100 : 0;
  const durations = results.filter((r) => r.duration !== undefined).map((r) => r.duration);
  const averageDuration = durations.length > 0 ? durations.reduce((sum, d) => sum + d, 0) / durations.length : 0;
  return {
    total,
    successful,
    failed,
    skipped,
    successRate,
    averageDuration
  };
}
async function generateSummary(inputs, results, stats) {
  addJobSummary(`# ${inputs.title}

`);
  if (inputs["include-context"]) {
    const repo = getRepoInfo();
    const branch = getCurrentBranch();
    const commitSha = getCommitSha("short");
    const workflowRun = getWorkflowRun();
    addJobSummary(`## Context

`);
    addSummaryTable(["Property", "Value"], [
      ["Repository", `\`${repo.full}\``],
      ["Branch", `\`${branch}\``],
      ["Commit", `\`${commitSha}\``],
      ["Run", `[#${workflowRun.number}](${workflowRun.url})`]
    ]);
    addJobSummary(`
`);
  }
  addJobSummary(`## Statistics

`);
  const statisticsRows = [
    ["Total Builds", stats.total.toString()],
    ["✅ Successful", stats.successful.toString()],
    ["❌ Failed", stats.failed.toString()],
    ["⏭️ Skipped", stats.skipped.toString()],
    ["Success Rate", `${stats.successRate.toFixed(1)}%`]
  ];
  if (stats.averageDuration > 0) {
    statisticsRows.push([
      "Average Duration",
      formatDuration(stats.averageDuration)
    ]);
  }
  addSummaryTable(["Metric", "Value"], statisticsRows);
  addJobSummary(`
## Results

`);
  const headers = ["Build", "Status", "Duration", "Platform"];
  const rows = results.map((result) => [
    result.url ? `[${result.name}](${result.url})` : result.name,
    formatStatus(result.status),
    result.duration ? formatDuration(result.duration) : "N/A",
    formatPlatform(result)
  ]);
  addSummaryTable(headers, rows);
  if (stats.failed > 0) {
    const failedBuilds = results.filter((r) => r.status === "failed");
    const failedSections = failedBuilds.map((build) => {
      const errorContent = build.error ? formatSummaryCodeBlock(build.error) : `_No error details available_`;
      return `### ${build.name}

${errorContent}`;
    });
    addJobSummary(`
## ❌ Failed Builds

${failedSections.join(`

`)}
`);
  }
}
function formatStatus(status) {
  switch (status) {
    case "success":
      return "✅ Success";
    case "failed":
      return "❌ Failed";
    case "skipped":
      return "⏭️ Skipped";
    default:
      return status;
  }
}
function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
function formatPlatform(result) {
  const parts = [];
  if (result.os) {
    parts.push(result.os);
  }
  if (result.version) {
    parts.push(result.version);
  }
  return parts.length > 0 ? parts.join(" / ") : "N/A";
}
run();
