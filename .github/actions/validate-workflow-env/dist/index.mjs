#!/usr/bin/env node

// ../../../dist/index.mjs
import z$1, { z, z as z$2 } from "zod";
var githubActionsSchema = z$2.object({
  CI: z$2.literal("true").or(z$2.boolean()).transform((val) => val === "true" || val === true).meta({
    id: "CI",
    title: "CI Environment Flag",
    description: "Always set to true.",
    category: "environment",
    example: "true"
  }),
  GITHUB_ACTIONS: z$2.literal("true").or(z$2.boolean()).transform((val) => val === "true" || val === true).meta({
    id: "GITHUB_ACTIONS",
    title: "GitHub Actions Flag",
    description: "Always set to true when GitHub Actions is running the workflow. You can use this variable to differentiate when tests are being run locally or by GitHub Actions.",
    category: "environment",
    example: "true"
  }),
  GITHUB_REF_PROTECTED: z$2.string().transform((val) => val === "true").optional().meta({
    id: "GITHUB_REF_PROTECTED",
    title: "Branch Protection Status",
    description: "true if branch protections or rulesets are configured for the ref that triggered the workflow run.",
    category: "git",
    example: "true"
  }),
  GITHUB_ACTION: z$2.string().meta({
    id: "GITHUB_ACTION",
    title: "Action Name",
    description: "The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id.",
    category: "action",
    example: "__repo-owner_name-of-action-repo"
  }),
  GITHUB_ACTION_PATH: z$2.string().optional().meta({
    id: "GITHUB_ACTION_PATH",
    title: "Action Path",
    description: "The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository.",
    category: "action",
    example: "/home/runner/work/_actions/repo-owner/name-of-action-repo/v1"
  }),
  GITHUB_ACTION_REPOSITORY: z$2.string().optional().meta({
    id: "GITHUB_ACTION_REPOSITORY",
    title: "Action Repository",
    description: "For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.",
    category: "action",
    example: "actions/checkout"
  }),
  GITHUB_ACTOR: z$2.string().meta({
    id: "GITHUB_ACTOR",
    title: "Workflow Actor",
    description: "The name of the person or app that initiated the workflow.",
    category: "actor",
    example: "octocat"
  }),
  GITHUB_ACTOR_ID: z$2.string().transform(Number).meta({
    id: "GITHUB_ACTOR_ID",
    title: "Actor Account ID",
    description: "The account ID of the person or app that triggered the initial workflow run. Note that this is different from the actor username.",
    category: "actor",
    example: "1234567"
  }),
  GITHUB_TRIGGERING_ACTOR: z$2.string().meta({
    id: "GITHUB_TRIGGERING_ACTOR",
    title: "Triggering Actor",
    description: "The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from github.actor. Any workflow re-runs will use the privileges of github.actor, even if the actor initiating the re-run (github.triggering_actor) has different privileges.",
    category: "actor",
    example: "octocat"
  }),
  GITHUB_API_URL: z$2.url().meta({
    id: "GITHUB_API_URL",
    title: "API URL",
    description: "Returns the API URL.",
    category: "api",
    example: "https://api.github.com"
  }),
  GITHUB_GRAPHQL_URL: z$2.url().meta({
    id: "GITHUB_GRAPHQL_URL",
    title: "GraphQL API URL",
    description: "Returns the GraphQL API URL.",
    category: "api",
    example: "https://api.github.com/graphql"
  }),
  GITHUB_SERVER_URL: z$2.url().meta({
    id: "GITHUB_SERVER_URL",
    title: "Server URL",
    description: "The URL of the GitHub server.",
    category: "api",
    example: "https://github.com"
  }),
  GITHUB_BASE_REF: z$2.string().optional().meta({
    id: "GITHUB_BASE_REF",
    title: "PR Base Branch",
    description: "The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "main"
  }),
  GITHUB_HEAD_REF: z$2.string().optional().meta({
    id: "GITHUB_HEAD_REF",
    title: "PR Source Branch",
    description: "The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either pull_request or pull_request_target.",
    category: "git",
    example: "feature-branch-1"
  }),
  GITHUB_ENV: z$2.string().meta({
    id: "GITHUB_ENV",
    title: "Environment File Path",
    description: "The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_env"
  }),
  GITHUB_EVENT_PATH: z$2.string().meta({
    id: "GITHUB_EVENT_PATH",
    title: "Event Payload Path",
    description: "The path to the file on the runner that contains the full event webhook payload.",
    category: "paths",
    example: "/github/workflow/event.json"
  }),
  GITHUB_OUTPUT: z$2.string().meta({
    id: "GITHUB_OUTPUT",
    title: "Output File Path",
    description: "The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/set_output"
  }),
  GITHUB_PATH: z$2.string().meta({
    id: "GITHUB_PATH",
    title: "PATH File Path",
    description: "The path on the runner to the file that sets system PATH variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/add_path"
  }),
  GITHUB_STEP_SUMMARY: z$2.string().meta({
    id: "GITHUB_STEP_SUMMARY",
    title: "Step Summary Path",
    description: "The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job.",
    category: "paths",
    example: "/home/runner/work/_temp/_runner_file_commands/step_summary"
  }),
  GITHUB_EVENT_NAME: z$2.string().meta({
    id: "GITHUB_EVENT_NAME",
    title: "Event Name",
    description: "The name of the event that triggered the workflow.",
    category: "event",
    example: "workflow_dispatch"
  }),
  GITHUB_JOB: z$2.string().meta({
    id: "GITHUB_JOB",
    title: "Job ID",
    description: "The job_id of the current job.",
    category: "job",
    example: "greeting_job"
  }),
  GITHUB_REF: z$2.string().meta({
    id: "GITHUB_REF",
    title: "Git Ref",
    description: "The fully-formed ref of the branch or tag that triggered the workflow run. For branches the format is refs/heads/<branch_name>, for tags it is refs/tags/<tag_name>, and for pull requests it is refs/pull/<pr_number>/merge.",
    category: "git",
    example: "refs/heads/feature-branch-1"
  }),
  GITHUB_REF_NAME: z$2.string().meta({
    id: "GITHUB_REF_NAME",
    title: "Ref Name",
    description: "The short ref name of the branch or tag that triggered the workflow run. This value matches the branch or tag name shown on GitHub. For pull requests, the format is <pr_number>/merge.",
    category: "git",
    example: "feature-branch-1"
  }),
  GITHUB_REF_TYPE: z$2.enum(["branch", "tag"]).meta({
    id: "GITHUB_REF_TYPE",
    title: "Ref Type",
    description: "The type of ref that triggered the workflow run. Valid values are branch or tag.",
    category: "git",
    example: "branch"
  }),
  GITHUB_REPOSITORY: z$2.string().meta({
    id: "GITHUB_REPOSITORY",
    title: "Repository",
    description: "The owner and repository name.",
    category: "repository",
    example: "octocat/Hello-World"
  }),
  GITHUB_REPOSITORY_ID: z$2.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_ID",
    title: "Repository ID",
    description: "The ID of the repository. Note that this is different from the repository name.",
    category: "repository",
    example: "123456789"
  }),
  GITHUB_REPOSITORY_OWNER: z$2.string().meta({
    id: "GITHUB_REPOSITORY_OWNER",
    title: "Repository Owner",
    description: "The repository owner's name.",
    category: "repository",
    example: "octocat"
  }),
  GITHUB_REPOSITORY_OWNER_ID: z$2.string().transform(Number).meta({
    id: "GITHUB_REPOSITORY_OWNER_ID",
    title: "Owner Account ID",
    description: "The repository owner's account ID. Note that this is different from the owner's name.",
    category: "repository",
    example: "1234567"
  }),
  GITHUB_RETENTION_DAYS: z$2.string().transform(Number).meta({
    id: "GITHUB_RETENTION_DAYS",
    title: "Retention Days",
    description: "The number of days that workflow run logs and artifacts are kept.",
    category: "workflow",
    example: "90"
  }),
  GITHUB_RUN_ATTEMPT: z$2.string().transform(Number).meta({
    id: "GITHUB_RUN_ATTEMPT",
    title: "Run Attempt Number",
    description: "A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run.",
    category: "workflow",
    example: "1"
  }),
  GITHUB_RUN_ID: z$2.string().transform(Number).meta({
    id: "GITHUB_RUN_ID",
    title: "Workflow Run ID",
    description: "A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "1658821493"
  }),
  GITHUB_RUN_NUMBER: z$2.string().transform(Number).meta({
    id: "GITHUB_RUN_NUMBER",
    title: "Run Number",
    description: "A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.",
    category: "workflow",
    example: "42"
  }),
  GITHUB_SHA: z$2.string().meta({
    id: "GITHUB_SHA",
    title: "Commit SHA",
    description: "The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow.",
    category: "git",
    example: "ffac537e6cbbf934b08745a378932722df287a53"
  }),
  GITHUB_WORKFLOW: z$2.string().meta({
    id: "GITHUB_WORKFLOW",
    title: "Workflow Name",
    description: "The name of the workflow. If the workflow file doesn't specify a name, the value of this variable is the full path of the workflow file in the repository.",
    category: "workflow",
    example: "CI"
  }),
  GITHUB_WORKFLOW_REF: z$2.string().meta({
    id: "GITHUB_WORKFLOW_REF",
    title: "Workflow Ref",
    description: "The ref path to the workflow.",
    category: "workflow",
    example: "octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch"
  }),
  GITHUB_WORKFLOW_SHA: z$2.string().meta({
    id: "GITHUB_WORKFLOW_SHA",
    title: "Workflow File SHA",
    description: "The commit SHA for the workflow file.",
    category: "workflow",
    example: "ffac537e6cbbf934b08745a378932722df287a53"
  }),
  GITHUB_WORKSPACE: z$2.string().meta({
    id: "GITHUB_WORKSPACE",
    title: "Workspace Directory",
    description: "The default working directory on the runner for steps, and the default location of your repository when using the checkout action.",
    category: "paths",
    example: "/home/runner/work/my-repo-name/my-repo-name"
  }),
  RUNNER_ARCH: z$2.enum([
    "X86",
    "X64",
    "ARM",
    "ARM64"
  ]).meta({
    id: "RUNNER_ARCH",
    title: "Runner Architecture",
    description: "The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.",
    category: "runner",
    example: "X64"
  }),
  RUNNER_DEBUG: z$2.string().optional().meta({
    id: "RUNNER_DEBUG",
    title: "Debug Mode",
    description: "This is set only if debug logging is enabled, and always has the value of 1. It can be useful as an indicator to enable additional debugging or verbose logging in your own job steps.",
    category: "runner",
    example: "1"
  }),
  RUNNER_ENVIRONMENT: z$2.enum(["github-hosted", "self-hosted"]).meta({
    id: "RUNNER_ENVIRONMENT",
    title: "Runner Environment",
    description: "The environment of the runner executing the job. Possible values are: github-hosted for GitHub-hosted runners provided by GitHub, and self-hosted for self-hosted runners configured by the repository owner.",
    category: "runner",
    example: "github-hosted"
  }),
  RUNNER_NAME: z$2.string().meta({
    id: "RUNNER_NAME",
    title: "Runner Name",
    description: "The name of the runner executing the job. This name may not be unique in a workflow run as runners at the repository and organization levels could use the same name.",
    category: "runner",
    example: "Hosted Agent"
  }),
  RUNNER_OS: z$2.enum([
    "Linux",
    "Windows",
    "macOS"
  ]).meta({
    id: "RUNNER_OS",
    title: "Runner OS",
    description: "The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS.",
    category: "runner",
    example: "Linux"
  }),
  RUNNER_TEMP: z$2.string().meta({
    id: "RUNNER_TEMP",
    title: "Temp Directory",
    description: "The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them.",
    category: "runner",
    example: "/home/runner/work/_temp"
  }),
  RUNNER_TOOL_CACHE: z$2.string().meta({
    id: "RUNNER_TOOL_CACHE",
    title: "Tool Cache Directory",
    description: "The path to the directory containing preinstalled tools for GitHub-hosted runners.",
    category: "runner",
    example: "/opt/hostedtoolcache"
  })
});
function safeValidateEnv(options = {}) {
  const { env = process.env, strict = false } = options;
  return (strict ? githubActionsSchema : z$1.looseObject(githubActionsSchema.shape)).safeParse(env);
}
function safeValidateCustomEnv(schema, options = {}) {
  const { env = process.env, strict = false } = options;
  return (strict ? schema : z$1.looseObject(schema.shape)).safeParse(env);
}
function createEnvSchema(customSchema) {
  return githubActionsSchema.extend(customSchema);
}

// ../../../src/inputs.ts
import { z as z2 } from "zod";

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
  return z2.object(schema).safeParse(inputs);
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
function maskValue(value) {
  console.log(`::add-mask::${value}`);
}
function startGroup(title) {
  console.log(`::group::${title}`);
}
function endGroup() {
  console.log("::endgroup::");
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
function setFailed(message) {
  error(message);
  process.exitCode = 1;
}

// src/index.ts
import { z as z3 } from "zod";
var InputSchemaShape = {
  "custom-schema": z3.string().default(""),
  "strict-mode": z3.boolean().default(false),
  "required-vars": z3.array(z3.string()).default([]),
  "mask-sensitive": z3.boolean().default(true)
};
var InputSchema = z3.object(InputSchemaShape);
var SENSITIVE_PATTERNS = [
  /token/i,
  /secret/i,
  /password/i,
  /key/i,
  /credential/i,
  /auth/i
];
function isSensitive(name) {
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(name));
}
async function run() {
  try {
    if (process.env.ACT === "true") {
      notice("ACT detected; skipping validate-workflow-env action.");
      return;
    }
    const inputResult = safeValidateInputs(InputSchemaShape);
    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }
    const inputs = inputResult.data;
    startGroup("\uD83D\uDD0D Validating GitHub Actions Environment");
    const customSchema = inputs["required-vars"].length > 0 ? buildCustomSchema(inputs["required-vars"]) : null;
    const validationResult = customSchema ? (() => {
      notice("Validating with custom schema (extending GitHub defaults)");
      const extendedSchema = createEnvSchema(customSchema);
      return safeValidateCustomEnv(extendedSchema);
    })() : (() => {
      notice("Validating GitHub Actions default environment");
      return safeValidateEnv();
    })();
    endGroup();
    if (validationResult.success) {
      const envData = validationResult.data;
      const envCount = Object.keys(envData).length;
      notice(`✅ Environment validation successful (${envCount} variables)`);
      if (inputs["mask-sensitive"]) {
        maskSensitiveValues(envData);
      }
      await createSuccessSummary(envData, inputs);
      setOutput("validation-status", "success");
      setOutput("env-count", envCount.toString());
    } else {
      const errors = validationResult.error.issues;
      error(`❌ Environment validation failed with ${errors.length} errors`);
      for (const err of errors) {
        const path = err.path.join(".");
        error(`  ${path}: ${err.message}`);
      }
      await createErrorSummary(errors);
      setOutput("validation-status", "failed");
      setOutput("env-count", "0");
      setFailed(`Environment validation failed with ${errors.length} errors`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    error(`Validation error: ${message}`);
    setFailed(message);
  }
}
function buildCustomSchema(requiredVars) {
  const schemaShape = {};
  for (const varName of requiredVars) {
    schemaShape[varName] = z3.string().min(1, `${varName} is required but not set`);
  }
  return schemaShape;
}
function maskSensitiveValues(envData) {
  startGroup("\uD83D\uDD12 Masking Sensitive Values");
  let maskedCount = 0;
  for (const [key, value] of Object.entries(envData)) {
    if (isSensitive(key) && typeof value === "string" && value.length > 0) {
      maskValue(value);
      maskedCount++;
    }
  }
  notice(`Masked ${maskedCount} sensitive environment variables`);
  endGroup();
}
async function createSuccessSummary(envData, inputs) {
  const envVars = Object.entries(envData);
  const totalCount = envVars.length;
  const githubVars = envVars.filter(([key]) => key.startsWith("GITHUB_"));
  const runnerVars = envVars.filter(([key]) => key.startsWith("RUNNER_"));
  const customVars = envVars.filter(([key]) => !key.startsWith("GITHUB_") && !key.startsWith("RUNNER_"));
  let summary = `## ✅ Environment Validation Success

`;
  summary += `**Total Variables:** ${totalCount}

`;
  summary += `| Category | Count |
`;
  summary += `|----------|-------|
`;
  summary += `| GitHub Actions | ${githubVars.length} |
`;
  summary += `| Runner | ${runnerVars.length} |
`;
  summary += `| Custom | ${customVars.length} |
`;
  if (inputs["required-vars"].length > 0) {
    summary += `
### Required Custom Variables

`;
    summary += `| Variable | Status |
`;
    summary += `|----------|--------|
`;
    for (const varName of inputs["required-vars"]) {
      const isSet = varName in envData;
      summary += `| \`${varName}\` | ${isSet ? "✅ Set" : "❌ Missing"} |
`;
    }
  }
  summary += `
### Key GitHub Variables

`;
  summary += `| Variable | Value |
`;
  summary += `|----------|-------|
`;
  summary += `| Repository | \`${envData.GITHUB_REPOSITORY || "N/A"}\` |
`;
  summary += `| Ref | \`${envData.GITHUB_REF || "N/A"}\` |
`;
  summary += `| SHA | \`${envData.GITHUB_SHA || "N/A"}\` |
`;
  summary += `| Actor | \`${envData.GITHUB_ACTOR || "N/A"}\` |
`;
  summary += `| Workflow | \`${envData.GITHUB_WORKFLOW || "N/A"}\` |
`;
  addJobSummary(summary);
}
async function createErrorSummary(errors) {
  let summary = `## ❌ Environment Validation Failed

`;
  summary += `**Error Count:** ${errors.length}

`;
  summary += `| Variable | Error |
`;
  summary += `|----------|-------|
`;
  for (const err of errors) {
    const path = err.path.join(".") || "unknown";
    summary += `| \`${path}\` | ${err.message} |
`;
  }
  summary += `
### Resolution

`;
  summary += `Check that all required environment variables are set correctly in your workflow.
`;
  addJobSummary(summary);
}
run();
