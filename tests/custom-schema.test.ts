import { describe, expect, test } from "bun:test";
import { createCustomEnvSchema, createEnvSchema, z } from "../src/index";

describe("createEnvSchema", () => {
  test("extends GitHub Actions schema with custom variables", () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(1),
      NODE_ENV: z.enum(["development", "production", "test"]),
      PORT: z.string().transform(Number),
    });

    const mockEnv = {
      // GitHub Actions vars
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
      GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF: "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "X64",
      RUNNER_ENVIRONMENT: "github-hosted",
      RUNNER_NAME: "GitHub Actions 2",
      RUNNER_OS: "Linux",
      RUNNER_TEMP: "/home/runner/work/_temp",
      RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
      // Custom vars
      API_KEY: "secret-key",
      NODE_ENV: "production",
      PORT: "3000",
    };

    const result = schema.parse(mockEnv);

    // GitHub Actions vars still work
    expect(result.GITHUB_ACTOR).toBe("octocat");
    expect(result.GITHUB_RUN_ID).toBe(1658821493);

    // Custom vars are validated and transformed
    expect(result.API_KEY).toBe("secret-key");
    expect(result.NODE_ENV).toBe("production");
    expect(result.PORT).toBe(3000); // Transformed to number
  });

  test("fails when custom variables are invalid", () => {
    const schema = createEnvSchema({
      API_KEY: z.string().min(10),
      NODE_ENV: z.enum(["development", "production", "test"]),
    });

    const mockEnv = {
      // GitHub Actions vars (minimum required)
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
      GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary",
      GITHUB_TRIGGERING_ACTOR: "octocat",
      GITHUB_WORKFLOW: "CI",
      GITHUB_WORKFLOW_REF: "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main",
      GITHUB_WORKFLOW_SHA: "ffac537e6cbbf934b08745a378932722df287a53",
      GITHUB_WORKSPACE: "/home/runner/work/Hello-World/Hello-World",
      RUNNER_ARCH: "X64",
      RUNNER_ENVIRONMENT: "github-hosted",
      RUNNER_NAME: "GitHub Actions 2",
      RUNNER_OS: "Linux",
      RUNNER_TEMP: "/home/runner/work/_temp",
      RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
      // Custom vars with invalid values
      API_KEY: "short", // Too short (min 10)
      NODE_ENV: "invalid", // Not in enum
    };

    expect(() => schema.parse(mockEnv)).toThrow();
  });
});

describe("createCustomEnvSchema", () => {
  test("creates schema without GitHub Actions defaults", () => {
    const schema = createCustomEnvSchema({
      DATABASE_URL: z.string().url(),
      MAX_CONNECTIONS: z.string().transform(Number),
    });

    const mockEnv = {
      DATABASE_URL: "postgresql://localhost:5432/db",
      MAX_CONNECTIONS: "10",
    };

    const result = schema.parse(mockEnv);

    expect(result.DATABASE_URL).toBe("postgresql://localhost:5432/db");
    expect(result.MAX_CONNECTIONS).toBe(10);
  });

  test("fails on invalid custom variables", () => {
    const schema = createCustomEnvSchema({
      DATABASE_URL: z.string().url(),
    });

    const mockEnv = {
      DATABASE_URL: "not-a-url",
    };

    expect(() => schema.parse(mockEnv)).toThrow();
  });

  test("works with complex transformations", () => {
    const schema = createCustomEnvSchema({
      FEATURE_FLAGS: z
        .string()
        .transform((s) => s.split(","))
        .pipe(z.array(z.string())),
      DEBUG: z
        .string()
        .transform((s) => s === "true")
        .pipe(z.boolean()),
    });

    const mockEnv = {
      FEATURE_FLAGS: "feature1,feature2,feature3",
      DEBUG: "true",
    };

    const result = schema.parse(mockEnv);

    expect(result.FEATURE_FLAGS).toEqual(["feature1", "feature2", "feature3"]);
    expect(result.DEBUG).toBe(true);
  });
});
