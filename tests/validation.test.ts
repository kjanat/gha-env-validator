import { describe, expect, test } from "bun:test";
import {
  createEnvSchema,
  safeValidateCustomEnv,
  safeValidateEnv,
  validateCustomEnv,
  validateEnv,
  z,
} from "@kjanat/gha-env-validator";

describe("validateEnv", () => {
  test("validates with custom env object", () => {
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

    const result = validateEnv({ env: mockEnv });

    expect(result.GITHUB_ACTOR).toBe("octocat");
    expect(result.GITHUB_RUN_ID).toBe(1658821493);
    expect(result.CI).toBe(true);
  });

  test("passes through unknown vars by default", () => {
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
      CUSTOM_VAR: "custom-value",
    };

    const result = validateEnv({ env: mockEnv }) as any;

    expect(result.CUSTOM_VAR).toBe("custom-value");
  });

  test("throws error on invalid env", () => {
    const invalidEnv = {
      GITHUB_ACTIONS: "true",
      GITHUB_ACTOR: "octocat",
    };

    expect(() => validateEnv({ env: invalidEnv })).toThrow();
  });
});

describe("validateCustomEnv", () => {
  test("validates with custom schema", () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(1),
      PORT: z.string().transform(Number),
    });

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
      API_KEY: "secret-key",
      PORT: "3000",
    };

    const result = validateCustomEnv(schema, { env: mockEnv });

    expect(result.API_KEY).toBe("secret-key");
    expect(result.PORT).toBe(3000);
    expect(result.GITHUB_ACTOR).toBe("octocat");
  });
});

describe("safeValidateEnv", () => {
  test("returns success on valid env", () => {
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

    const result = safeValidateEnv({ env: mockEnv });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.GITHUB_ACTOR).toBe("octocat");
    }
  });

  test("returns error on invalid env", () => {
    const invalidEnv = {
      GITHUB_ACTIONS: "true",
      GITHUB_ACTOR: "octocat",
    };

    const result = safeValidateEnv({ env: invalidEnv });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThan(0);
    }
  });
});

describe("safeValidateCustomEnv", () => {
  test("returns success on valid custom env", () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(1),
    });

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
      API_KEY: "secret-key",
    };

    const result = safeValidateCustomEnv(schema, { env: mockEnv });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.API_KEY).toBe("secret-key");
    }
  });

  test("returns error on invalid custom env", () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(10),
    });

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
      API_KEY: "short", // Too short
    };

    const result = safeValidateCustomEnv(schema, { env: mockEnv });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(
        result.error.issues.some((issue) => issue.path.includes("API_KEY")),
      ).toBe(true);
    }
  });
});
