import { describe, expect, test } from "bun:test";
import { githubActionsSchema } from "../src/schemas/index";

describe("githubActionsSchema", () => {
  test("validates complete GitHub Actions environment", () => {
    const mockEnv = {
      CI: "true",
      GITHUB_ACTIONS: "true",
      GITHUB_ACTION: "my-action",
      GITHUB_ACTOR: "octocat",
      GITHUB_ACTOR_ID: "583231",
      GITHUB_API_URL: "https://api.github.com",
      GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env",
      GITHUB_EVENT_NAME: "push",
      GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
      GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
      GITHUB_JOB: "build",
      GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output",
      GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path",
      GITHUB_REF: "refs/heads/main",
      GITHUB_REF_NAME: "main",
      GITHUB_REF_TYPE: "branch",
      GITHUB_REPOSITORY: "octocat/Hello-World",
      GITHUB_REPOSITORY_ID: "1296269",
      GITHUB_REPOSITORY_OWNER: "octocat",
      GITHUB_REPOSITORY_OWNER_ID: "583231",
      GITHUB_RETENTION_DAYS: "90",
      GITHUB_RUN_ATTEMPT: "1",
      GITHUB_RUN_ID: "1658821493",
      GITHUB_RUN_NUMBER: "42",
      GITHUB_SERVER_URL: "https://github.com",
      GITHUB_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_STEP_SUMMARY:
        "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF:
        "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "X64",
      RUNNER_ENVIRONMENT: "github-hosted",
      RUNNER_NAME: "GitHub Actions 2",
      RUNNER_OS: "Linux",
      RUNNER_TEMP: "/home/runner/work/_temp",
      RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
    };

    const result = githubActionsSchema.parse(mockEnv);

    expect(result.CI).toBe(true);
    expect(result.GITHUB_ACTIONS).toBe(true);
    expect(result.GITHUB_ACTOR).toBe("octocat");
    expect(result.GITHUB_ACTOR_ID).toBe(583231); // Transformed to number
    expect(result.GITHUB_RUN_ID).toBe(1658821493); // Transformed to number
    expect(result.GITHUB_RUN_NUMBER).toBe(42); // Transformed to number
    expect(result.RUNNER_OS).toBe("Linux");
  });

  test("validates pull request environment", () => {
    const mockEnv = {
      CI: "true",
      GITHUB_ACTIONS: "true",
      GITHUB_ACTION: "my-action",
      GITHUB_ACTOR: "octocat",
      GITHUB_ACTOR_ID: "583231",
      GITHUB_API_URL: "https://api.github.com",
      GITHUB_BASE_REF: "main",
      GITHUB_HEAD_REF: "feature-branch",
      GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env",
      GITHUB_EVENT_NAME: "pull_request",
      GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
      GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
      GITHUB_JOB: "build",
      GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output",
      GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path",
      GITHUB_REF: "refs/pull/1/merge",
      GITHUB_REF_NAME: "1/merge",
      GITHUB_REF_TYPE: "branch",
      GITHUB_REPOSITORY: "octocat/Hello-World",
      GITHUB_REPOSITORY_ID: "1296269",
      GITHUB_REPOSITORY_OWNER: "octocat",
      GITHUB_REPOSITORY_OWNER_ID: "583231",
      GITHUB_RETENTION_DAYS: "90",
      GITHUB_RUN_ATTEMPT: "1",
      GITHUB_RUN_ID: "1658821493",
      GITHUB_RUN_NUMBER: "42",
      GITHUB_SERVER_URL: "https://github.com",
      GITHUB_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_STEP_SUMMARY:
        "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF:
        "octocat/Hello-World/.github/workflows/ci.yml@refs/pull/1/merge",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "X64",
      RUNNER_ENVIRONMENT: "github-hosted",
      RUNNER_NAME: "GitHub Actions 2",
      RUNNER_OS: "Linux",
      RUNNER_TEMP: "/home/runner/work/_temp",
      RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
    };

    const result = githubActionsSchema.parse(mockEnv);

    expect(result.GITHUB_BASE_REF).toBe("main");
    expect(result.GITHUB_HEAD_REF).toBe("feature-branch");
    expect(result.GITHUB_EVENT_NAME).toBe("pull_request");
  });

  test("fails on missing required fields", () => {
    const incompleteEnv = {
      GITHUB_ACTIONS: "true",
      GITHUB_ACTOR: "octocat",
    };

    expect(() => githubActionsSchema.parse(incompleteEnv)).toThrow();
  });

  test("validates enum values", () => {
    const mockEnv = {
      CI: "true",
      GITHUB_ACTIONS: "true",
      GITHUB_ACTION: "my-action",
      GITHUB_ACTOR: "octocat",
      GITHUB_ACTOR_ID: "583231",
      GITHUB_API_URL: "https://api.github.com",
      GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env",
      GITHUB_EVENT_NAME: "push",
      GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
      GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
      GITHUB_JOB: "build",
      GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output",
      GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path",
      GITHUB_REF: "refs/tags/v1.0.0",
      GITHUB_REF_NAME: "v1.0.0",
      GITHUB_REF_TYPE: "tag", // Should validate as enum
      GITHUB_REPOSITORY: "octocat/Hello-World",
      GITHUB_REPOSITORY_ID: "1296269",
      GITHUB_REPOSITORY_OWNER: "octocat",
      GITHUB_REPOSITORY_OWNER_ID: "583231",
      GITHUB_RETENTION_DAYS: "90",
      GITHUB_RUN_ATTEMPT: "1",
      GITHUB_RUN_ID: "1658821493",
      GITHUB_RUN_NUMBER: "42",
      GITHUB_SERVER_URL: "https://github.com",
      GITHUB_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_STEP_SUMMARY:
        "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF:
        "octocat/Hello-World/.github/workflows/ci.yml@refs/tags/v1.0.0",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "ARM64", // Test enum
      RUNNER_ENVIRONMENT: "self-hosted", // Test enum
      RUNNER_NAME: "My Runner",
      RUNNER_OS: "macOS", // Test enum
      RUNNER_TEMP: "/tmp",
      RUNNER_TOOL_CACHE: "/opt/tools",
    };

    const result = githubActionsSchema.parse(mockEnv);

    expect(result.GITHUB_REF_TYPE).toBe("tag");
    expect(result.RUNNER_ARCH).toBe("ARM64");
    expect(result.RUNNER_ENVIRONMENT).toBe("self-hosted");
    expect(result.RUNNER_OS).toBe("macOS");
  });

  test("fails on invalid enum values", () => {
    const mockEnv = {
      CI: "true",
      GITHUB_ACTIONS: "true",
      GITHUB_ACTION: "my-action",
      GITHUB_ACTOR: "octocat",
      GITHUB_ACTOR_ID: "583231",
      GITHUB_API_URL: "https://api.github.com",
      GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env",
      GITHUB_EVENT_NAME: "push",
      GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
      GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
      GITHUB_JOB: "build",
      GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output",
      GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path",
      GITHUB_REF: "refs/heads/main",
      GITHUB_REF_NAME: "main",
      GITHUB_REF_TYPE: "invalid", // Invalid enum value
      GITHUB_REPOSITORY: "octocat/Hello-World",
      GITHUB_REPOSITORY_ID: "1296269",
      GITHUB_REPOSITORY_OWNER: "octocat",
      GITHUB_REPOSITORY_OWNER_ID: "583231",
      GITHUB_RETENTION_DAYS: "90",
      GITHUB_RUN_ATTEMPT: "1",
      GITHUB_RUN_ID: "1658821493",
      GITHUB_RUN_NUMBER: "42",
      GITHUB_SERVER_URL: "https://github.com",
      GITHUB_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_STEP_SUMMARY:
        "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF:
        "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "X64",
      RUNNER_ENVIRONMENT: "github-hosted",
      RUNNER_NAME: "GitHub Actions 2",
      RUNNER_OS: "Linux",
      RUNNER_TEMP: "/home/runner/work/_temp",
      RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
    };

    expect(() => githubActionsSchema.parse(mockEnv)).toThrow();
  });
});
