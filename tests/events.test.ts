import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  getCheckRunEvent,
  getCheckSuiteEvent,
  getCreateEvent,
  getDeleteEvent,
  getDeploymentEvent,
  getDeploymentStatusEvent,
  getDiscussionCommentEvent,
  getDiscussionEvent,
  getForkEvent,
  getGollumEvent,
  getIssueCommentEvent,
  getIssuesEvent,
  getPingEvent,
  getStarEvent,
  getWatchEvent,
  getWorkflowJobEvent,
  getWorkflowRunEvent,
  isCheckRunEvent,
  isCheckSuiteEvent,
  isCreateEvent,
  isDeleteEvent,
  isDeploymentEvent,
  isDeploymentStatusEvent,
  isDiscussionCommentEvent,
  isDiscussionEvent,
  isForkEvent,
  isGollumEvent,
  isIssueCommentEvent,
  isIssuesEvent,
  isPingEvent,
  isStarEvent,
  isWatchEvent,
  isWorkflowJobEvent,
  isWorkflowRunEvent
} from "@kjanat/gha-env-validator";

describe("event system", () => {
  let tempDir: string;
  let eventFile: string;
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "events-test-"));
    eventFile = path.join(tempDir, "event.json");

    originalEnv = { ...process.env };
    setupGitHubEnv();
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
    process.env = originalEnv;
  });

  function setupGitHubEnv() {
    process.env.CI = "true";
    process.env.GITHUB_ACTIONS = "true";
    process.env.GITHUB_ACTION = "test";
    process.env.GITHUB_ACTOR = "octocat";
    process.env.GITHUB_ACTOR_ID = "583231";
    process.env.GITHUB_API_URL = "https://api.github.com";
    process.env.GITHUB_ENV = "/tmp/env";
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
    process.env.GITHUB_SHA = "abc123";
    process.env.GITHUB_STEP_SUMMARY = "/tmp/summary";
    process.env.GITHUB_TRIGGERING_ACTOR = "octocat";
    process.env.GITHUB_WORKFLOW = "CI";
    process.env.GITHUB_WORKFLOW_REF =
      "octocat/Hello-World/.github/workflows/ci.yml@refs/heads/main";
    process.env.GITHUB_WORKFLOW_SHA = "abc123";
    process.env.GITHUB_WORKSPACE = "/workspace";
    process.env.RUNNER_ARCH = "X64";
    process.env.GITHUB_EVENT_NAME = "push";
    process.env.RUNNER_ENVIRONMENT = "github-hosted";
    process.env.RUNNER_NAME = "GitHub Actions";
    process.env.RUNNER_OS = "Linux";
    process.env.RUNNER_TEMP = "/tmp";
    process.env.RUNNER_TOOL_CACHE = "/opt/tools";
  }

  describe("workflow events", () => {
    test("getWorkflowRunEvent returns typed event", () => {
      const mockEvent = {
        action: "completed",
        workflow_run: {
          id: 123,
          status: "completed"
        }
      };

      process.env.GITHUB_EVENT_NAME = "workflow_run";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getWorkflowRunEvent();
      expect(event.action).toBe("completed");
    });

    test("isWorkflowRunEvent checks event type", () => {
      expect(isWorkflowRunEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "workflow_run";
      expect(isWorkflowRunEvent()).toBe(true);
    });

    test("getWorkflowJobEvent returns typed event", () => {
      const mockEvent = {
        action: "queued",
        workflow_job: {
          id: 456,
          status: "queued"
        }
      };

      process.env.GITHUB_EVENT_NAME = "workflow_job";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getWorkflowJobEvent();
      expect(event.action).toBe("queued");
    });

    test("isWorkflowJobEvent checks event type", () => {
      expect(isWorkflowJobEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "workflow_job";
      expect(isWorkflowJobEvent()).toBe(true);
    });
  });

  describe("check events", () => {
    test("getCheckRunEvent returns typed event", () => {
      const mockEvent = {
        action: "completed",
        check_run: {
          id: 789,
          status: "completed"
        }
      };

      process.env.GITHUB_EVENT_NAME = "check_run";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getCheckRunEvent();
      expect(event.action).toBe("completed");
    });

    test("isCheckRunEvent checks event type", () => {
      expect(isCheckRunEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "check_run";
      expect(isCheckRunEvent()).toBe(true);
    });

    test("getCheckSuiteEvent returns typed event", () => {
      const mockEvent = {
        action: "completed",
        check_suite: {
          id: 101,
          status: "completed"
        }
      };

      process.env.GITHUB_EVENT_NAME = "check_suite";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getCheckSuiteEvent();
      expect(event.action).toBe("completed");
    });

    test("isCheckSuiteEvent checks event type", () => {
      expect(isCheckSuiteEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "check_suite";
      expect(isCheckSuiteEvent()).toBe(true);
    });
  });

  describe("issues events", () => {
    test("getIssuesEvent returns typed event", () => {
      const mockEvent = {
        action: "opened",
        issue: {
          number: 42,
          title: "Test issue"
        }
      };

      process.env.GITHUB_EVENT_NAME = "issues";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getIssuesEvent();
      expect(event.action).toBe("opened");
      expect(event.issue.number).toBe(42);
    });

    test("isIssuesEvent checks event type", () => {
      expect(isIssuesEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "issues";
      expect(isIssuesEvent()).toBe(true);
    });

    test("getIssueCommentEvent returns typed event", () => {
      const mockEvent = {
        action: "created",
        issue: {
          number: 42
        },
        comment: {
          id: 789,
          body: "Test comment"
        }
      };

      process.env.GITHUB_EVENT_NAME = "issue_comment";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getIssueCommentEvent();
      expect(event.action).toBe("created");
    });

    test("isIssueCommentEvent checks event type", () => {
      expect(isIssueCommentEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "issue_comment";
      expect(isIssueCommentEvent()).toBe(true);
    });
  });

  describe("discussion events", () => {
    test("getDiscussionEvent returns typed event", () => {
      const mockEvent = {
        action: "created",
        discussion: {
          id: 123,
          title: "Test discussion"
        }
      };

      process.env.GITHUB_EVENT_NAME = "discussion";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getDiscussionEvent();
      expect(event.action).toBe("created");
    });

    test("isDiscussionEvent checks event type", () => {
      expect(isDiscussionEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "discussion";
      expect(isDiscussionEvent()).toBe(true);
    });

    test("getDiscussionCommentEvent returns typed event", () => {
      const mockEvent = {
        action: "created",
        comment: {
          id: 456
        }
      };

      process.env.GITHUB_EVENT_NAME = "discussion_comment";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getDiscussionCommentEvent();
      expect(event.action).toBe("created");
    });

    test("isDiscussionCommentEvent checks event type", () => {
      expect(isDiscussionCommentEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "discussion_comment";
      expect(isDiscussionCommentEvent()).toBe(true);
    });
  });

  describe("deployment events", () => {
    test("getDeploymentEvent returns typed event", () => {
      const mockEvent = {
        deployment: {
          id: 999,
          environment: "production"
        }
      };

      process.env.GITHUB_EVENT_NAME = "deployment";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getDeploymentEvent();
      expect(event.deployment.environment).toBe("production");
    });

    test("isDeploymentEvent checks event type", () => {
      expect(isDeploymentEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "deployment";
      expect(isDeploymentEvent()).toBe(true);
    });

    test("getDeploymentStatusEvent returns typed event", () => {
      const mockEvent = {
        deployment_status: {
          id: 888,
          state: "success"
        }
      };

      process.env.GITHUB_EVENT_NAME = "deployment_status";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getDeploymentStatusEvent();
      expect(event.deployment_status.state).toBe("success");
    });

    test("isDeploymentStatusEvent checks event type", () => {
      expect(isDeploymentStatusEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "deployment_status";
      expect(isDeploymentStatusEvent()).toBe(true);
    });
  });

  describe("repository events", () => {
    test("getForkEvent returns typed event", () => {
      const mockEvent = {
        forkee: {
          id: 111,
          name: "forked-repo"
        }
      };

      process.env.GITHUB_EVENT_NAME = "fork";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getForkEvent();
      expect(event.forkee.name).toBe("forked-repo");
    });

    test("isForkEvent checks event type", () => {
      expect(isForkEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "fork";
      expect(isForkEvent()).toBe(true);
    });

    test("getStarEvent returns typed event", () => {
      const mockEvent = {
        action: "created",
        starred_at: "2025-01-01T00:00:00Z"
      };

      process.env.GITHUB_EVENT_NAME = "star";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getStarEvent();
      expect(event.action).toBe("created");
    });

    test("isStarEvent checks event type", () => {
      expect(isStarEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "star";
      expect(isStarEvent()).toBe(true);
    });

    test("getWatchEvent returns typed event", () => {
      const mockEvent = {
        action: "started"
      };

      process.env.GITHUB_EVENT_NAME = "watch";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getWatchEvent();
      expect(event.action).toBe("started");
    });

    test("isWatchEvent checks event type", () => {
      expect(isWatchEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "watch";
      expect(isWatchEvent()).toBe(true);
    });

    test("getCreateEvent returns typed event", () => {
      const mockEvent = {
        ref: "feature-branch",
        ref_type: "branch"
      };

      process.env.GITHUB_EVENT_NAME = "create";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getCreateEvent();
      expect(event.ref).toBe("feature-branch");
    });

    test("isCreateEvent checks event type", () => {
      expect(isCreateEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "create";
      expect(isCreateEvent()).toBe(true);
    });

    test("getDeleteEvent returns typed event", () => {
      const mockEvent = {
        ref: "old-branch",
        ref_type: "branch"
      };

      process.env.GITHUB_EVENT_NAME = "delete";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getDeleteEvent();
      expect(event.ref).toBe("old-branch");
    });

    test("isDeleteEvent checks event type", () => {
      expect(isDeleteEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "delete";
      expect(isDeleteEvent()).toBe(true);
    });
  });

  describe("wiki events", () => {
    test("getGollumEvent returns typed event", () => {
      const mockEvent = {
        pages: [
          {
            page_name: "Home",
            action: "edited"
          }
        ]
      };

      process.env.GITHUB_EVENT_NAME = "gollum";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getGollumEvent();
      expect(event.pages).toHaveLength(1);
    });

    test("isGollumEvent checks event type", () => {
      expect(isGollumEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "gollum";
      expect(isGollumEvent()).toBe(true);
    });
  });

  describe("ping event", () => {
    test("getPingEvent returns typed event", () => {
      const mockEvent = {
        zen: "Design for failure.",
        hook_id: 123
      };

      process.env.GITHUB_EVENT_NAME = "ping";
      fs.writeFileSync(eventFile, JSON.stringify(mockEvent), "utf-8");

      const event = getPingEvent();
      expect(event.zen).toBe("Design for failure.");
    });

    test("isPingEvent checks event type", () => {
      expect(isPingEvent()).toBe(false);

      process.env.GITHUB_EVENT_NAME = "ping";
      expect(isPingEvent()).toBe(true);
    });
  });
});
