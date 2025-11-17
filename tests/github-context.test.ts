import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  getEventName,
  getEventPayload,
  getGitHubToken,
  getPullRequestEvent,
  getPushEvent,
  getRepositoryGitUrl,
  getRepositoryUrl,
  isEventType,
  isPushEvent,
  isReleaseEvent,
  isWorkflowDispatch,
} from "@kjanat/gha-env-validator";

describe("github context", () => {
  let tempDir: string;
  let eventFile: string;
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "gha-context-"));
    eventFile = path.join(tempDir, "event.json");

    originalEnv = { ...process.env };

    // Set up GitHub Actions environment
    process.env.CI = "true";
    process.env.GITHUB_ACTIONS = "true";
    process.env.GITHUB_ACTION = "test";
    process.env.GITHUB_ACTOR = "octocat";
    process.env.GITHUB_ACTOR_ID = "583231";
    process.env.GITHUB_API_URL = "https://api.github.com";
    process.env.GITHUB_ENV = "/tmp/env";
    process.env.GITHUB_EVENT_NAME = "push";
    process.env.GITHUB_EVENT_PATH = eventFile;
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
    process.env.GITHUB_WORKFLOW_REF =
      "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main";
    process.env.GITHUB_WORKFLOW_SHA =
      "ffac537e6cbbf934b08745a378932722df287a53";
    process.env.GITHUB_WORKSPACE = "/workspace";
    process.env.RUNNER_ARCH = "X64";
    process.env.RUNNER_ENVIRONMENT = "github-hosted";
    process.env.RUNNER_NAME = "GitHub Actions 2";
    process.env.RUNNER_OS = "Linux";
    process.env.RUNNER_TEMP = "/tmp";
    process.env.RUNNER_TOOL_CACHE = "/opt/tools";
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
    process.env = originalEnv;
  });

  describe("getEventPayload", () => {
    test("reads and parses event JSON", () => {
      const mockEvent = {
        action: "opened",
        number: 123,
      };

      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getEventPayload();

      expect(event).toEqual(mockEvent);
    });
  });

  describe("getPushEvent", () => {
    test("returns typed push event", () => {
      const pushEvent = {
        ref: "refs/heads/main",
        commits: [
          {
            id: "abc123",
            message: "Test commit",
          },
        ],
      };

      fs.writeFileSync(eventFile, JSON.stringify(pushEvent), "utf-8");

      const event = getPushEvent();

      expect(event.ref).toBe("refs/heads/main");
      expect(event.commits).toHaveLength(1);
    });
  });

  describe("getPullRequestEvent", () => {
    test("returns typed PR event", () => {
      const prEvent = {
        action: "opened",
        number: 42,
        pull_request: {
          number: 42,
          title: "Test PR",
        },
      };

      fs.writeFileSync(eventFile, JSON.stringify(prEvent), "utf-8");

      const event = getPullRequestEvent();

      expect(event.action).toBe("opened");
      expect(event.pull_request.number).toBe(42);
    });
  });

  describe("getGitHubToken", () => {
    test("returns GITHUB_TOKEN from environment", () => {
      process.env.GITHUB_TOKEN = "ghs_test_token_123";

      const token = getGitHubToken();

      expect(token).toBe("ghs_test_token_123");
    });

    test("throws when GITHUB_TOKEN is not set", () => {
      delete process.env.GITHUB_TOKEN;

      expect(() => getGitHubToken()).toThrow("GITHUB_TOKEN not found");
    });
  });

  describe("getRepositoryUrl", () => {
    test("constructs repository URL", () => {
      const url = getRepositoryUrl();

      expect(url).toBe("https://github.com/octocat/Hello-World");
    });
  });

  describe("getRepositoryGitUrl", () => {
    test("constructs Git clone URL", () => {
      const url = getRepositoryGitUrl();

      expect(url).toBe("https://github.com/octocat/Hello-World.git");
    });
  });

  describe("event type checks", () => {
    test("isEventType checks event name", () => {
      expect(isEventType("push")).toBe(true);
      expect(isEventType("pull_request")).toBe(false);
    });

    test("isPushEvent checks for push", () => {
      expect(isPushEvent()).toBe(true);

      process.env.GITHUB_EVENT_NAME = "pull_request";
      expect(isPushEvent()).toBe(false);
    });

    test("isReleaseEvent checks for release", () => {
      expect(isReleaseEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "release";
      expect(isReleaseEvent()).toBe(true);
    });

    test("isWorkflowDispatch checks for workflow_dispatch", () => {
      expect(isWorkflowDispatch()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "workflow_dispatch";
      expect(isWorkflowDispatch()).toBe(true);
    });
  });

  describe("getEventName", () => {
    test("returns current event name", () => {
      expect(getEventName()).toBe("push");

      process.env.GITHUB_EVENT_NAME = "pull_request";
      expect(getEventName()).toBe("pull_request");
    });
  });
});
