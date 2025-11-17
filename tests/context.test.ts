import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import {
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
  isTag,
} from "../src/context";

describe("context utilities", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };

    // Set up complete GitHub Actions environment
    process.env.CI = "true";
    process.env.GITHUB_ACTIONS = "true";
    process.env.GITHUB_ACTION = "test-action";
    process.env.GITHUB_ACTOR = "octocat";
    process.env.GITHUB_ACTOR_ID = "583231";
    process.env.GITHUB_API_URL = "https://api.github.com";
    process.env.GITHUB_ENV = "/tmp/env";
    process.env.GITHUB_EVENT_NAME = "push";
    process.env.GITHUB_EVENT_PATH = "/tmp/event.json";
    process.env.GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
    process.env.GITHUB_JOB = "build";
    process.env.GITHUB_OUTPUT = "/tmp/output";
    process.env.GITHUB_PATH = "/tmp/path";
    process.env.GITHUB_REF = "refs/heads/main";
    process.env.GITHUB_REF_NAME = "main";
    process.env.GITHUB_REF_TYPE = "branch";
    process.env.GITHUB_REPOSITORY = "octocat/Hello-World";
    process.env.GITHUB_REPOSITORY_ID = "1296269";
    process.env.GITHUB_REPOSITORY_OWNER = "octocat";
    process.env.GITHUB_REPOSITORY_OWNER_ID = "583231";
    process.env.GITHUB_RETENTION_DAYS = "90";
    process.env.GITHUB_RUN_ATTEMPT = "1";
    process.env.GITHUB_RUN_ID = "1658821493";
    process.env.GITHUB_RUN_NUMBER = "42";
    process.env.GITHUB_SERVER_URL = "https://github.com";
    process.env.GITHUB_SHA = "ffac537e6cbbf934b08745a378932722df287a53";
    process.env.GITHUB_STEP_SUMMARY = "/tmp/summary";
    process.env.GITHUB_TRIGGERING_ACTOR = "octocat";
    process.env.GITHUB_WORKFLOW = "CI";
    process.env.GITHUB_WORKFLOW_REF = "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main";
    process.env.GITHUB_WORKFLOW_SHA = "ffac537e6cbbf934b08745a378932722df287a53";
    process.env.GITHUB_WORKSPACE = "/home/runner/work/Hello-World/Hello-World";
    process.env.RUNNER_ARCH = "X64";
    process.env.RUNNER_ENVIRONMENT = "github-hosted";
    process.env.RUNNER_NAME = "GitHub Actions 2";
    process.env.RUNNER_OS = "Linux";
    process.env.RUNNER_TEMP = "/tmp";
    process.env.RUNNER_TOOL_CACHE = "/opt/hostedtoolcache";
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("getCurrentBranch", () => {
    test("returns current branch name", () => {
      expect(getCurrentBranch()).toBe("main");
    });

    test("returns tag name when on tag", () => {
      process.env.GITHUB_REF_NAME = "v1.0.0";
      process.env.GITHUB_REF_TYPE = "tag";
      expect(getCurrentBranch()).toBe("v1.0.0");
    });
  });

  describe("getRepoInfo", () => {
    test("parses repository owner and name", () => {
      const repo = getRepoInfo();

      expect(repo.owner).toBe("octocat");
      expect(repo.name).toBe("Hello-World");
      expect(repo.full).toBe("octocat/Hello-World");
    });
  });

  describe("getCommitSha", () => {
    test("returns full SHA by default", () => {
      const sha = getCommitSha();
      expect(sha).toBe("ffac537e6cbbf934b08745a378932722df287a53");
    });

    test("returns full SHA when explicitly requested", () => {
      const sha = getCommitSha("full");
      expect(sha).toBe("ffac537e6cbbf934b08745a378932722df287a53");
    });

    test("returns short SHA when requested", () => {
      const sha = getCommitSha("short");
      expect(sha).toBe("ffac537");
    });
  });

  describe("isPullRequest", () => {
    test("returns false for push events", () => {
      expect(isPullRequest()).toBe(false);
    });

    test("returns true for pull_request events", () => {
      process.env.GITHUB_EVENT_NAME = "pull_request";
      expect(isPullRequest()).toBe(true);
    });

    test("returns true for pull_request_target events", () => {
      process.env.GITHUB_EVENT_NAME = "pull_request_target";
      expect(isPullRequest()).toBe(true);
    });
  });

  describe("getPullRequestInfo", () => {
    test("returns null when not in PR context", () => {
      expect(getPullRequestInfo()).toBeNull();
    });

    test("returns PR info when in PR context", () => {
      process.env.GITHUB_BASE_REF = "main";
      process.env.GITHUB_HEAD_REF = "feature-branch";

      const pr = getPullRequestInfo();

      expect(pr).not.toBeNull();
      expect(pr?.base).toBe("main");
      expect(pr?.head).toBe("feature-branch");
    });
  });

  describe("isOnBranch", () => {
    test("returns true when on specified branch", () => {
      expect(isOnBranch("main")).toBe(true);
    });

    test("returns false when on different branch", () => {
      expect(isOnBranch("develop")).toBe(false);
    });
  });

  describe("isTag", () => {
    test("returns false when ref is a branch", () => {
      expect(isTag()).toBe(false);
    });

    test("returns true when ref is a tag", () => {
      process.env.GITHUB_REF_TYPE = "tag";
      expect(isTag()).toBe(true);
    });
  });

  describe("getRunnerInfo", () => {
    test("returns runner details", () => {
      const runner = getRunnerInfo();

      expect(runner.os).toBe("Linux");
      expect(runner.arch).toBe("X64");
      expect(runner.environment).toBe("github-hosted");
      expect(runner.name).toBe("GitHub Actions 2");
    });
  });

  describe("getWorkflowRun", () => {
    test("returns workflow run details", () => {
      const run = getWorkflowRun();

      expect(run.id).toBe(1658821493);
      expect(run.number).toBe(42);
      expect(run.attempt).toBe(1);
      expect(run.url).toBe(
        "https://github.com/octocat/Hello-World/actions/runs/1658821493",
      );
    });
  });

  describe("getActor", () => {
    test("returns actor information", () => {
      const actor = getActor();

      expect(actor.name).toBe("octocat");
      expect(actor.id).toBe(583231);
      expect(actor.triggering).toBe("octocat");
    });
  });

  describe("isDebugMode", () => {
    test("returns false when debug is not enabled", () => {
      expect(isDebugMode()).toBe(false);
    });

    test("returns true when RUNNER_DEBUG is 1", () => {
      process.env.RUNNER_DEBUG = "1";
      expect(isDebugMode()).toBe(true);
    });
  });

  describe("getApiUrls", () => {
    test("returns all API URLs", () => {
      const api = getApiUrls();

      expect(api.rest).toBe("https://api.github.com");
      expect(api.graphql).toBe("https://api.github.com/graphql");
      expect(api.server).toBe("https://github.com");
    });
  });
});
