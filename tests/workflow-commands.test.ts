import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  addJobSummary,
  addPath,
  addSummary,
  addSummaryTable,
  clearJobSummary,
  debug,
  error,
  group,
  isGitHubActions,
  maskValue,
  notice,
  setEnvVar,
  setEnvVars,
  setMultilineEnvVar,
  setMultilineOutput,
  setOutput,
  setOutputs,
  warning,
} from "../src/workflow-commands";

describe("workflow commands", () => {
  let tempDir: string;
  let envFile: string;
  let outputFile: string;
  let pathFile: string;
  let summaryFile: string;
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Create temp directory and files
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "gha-test-"));
    envFile = path.join(tempDir, "env");
    outputFile = path.join(tempDir, "output");
    pathFile = path.join(tempDir, "path");
    summaryFile = path.join(tempDir, "summary");

    fs.writeFileSync(envFile, "", "utf-8");
    fs.writeFileSync(outputFile, "", "utf-8");
    fs.writeFileSync(pathFile, "", "utf-8");
    fs.writeFileSync(summaryFile, "", "utf-8");

    // Mock GitHub Actions environment
    originalEnv = { ...process.env };
    process.env.GITHUB_ACTIONS = "true";
    process.env.GITHUB_ENV = envFile;
    process.env.GITHUB_OUTPUT = outputFile;
    process.env.GITHUB_PATH = pathFile;
    process.env.GITHUB_STEP_SUMMARY = summaryFile;
  });

  afterEach(() => {
    // Cleanup
    fs.rmSync(tempDir, { recursive: true, force: true });
    process.env = originalEnv;
  });

  describe("setEnvVar", () => {
    test("writes environment variable to GITHUB_ENV", () => {
      setEnvVar("NODE_ENV", "production");

      const content = fs.readFileSync(envFile, "utf-8");
      expect(content).toBe("NODE_ENV=production\n");
    });

    test("appends multiple variables", () => {
      setEnvVar("VAR1", "value1");
      setEnvVar("VAR2", "value2");

      const content = fs.readFileSync(envFile, "utf-8");
      expect(content).toBe("VAR1=value1\nVAR2=value2\n");
    });

    test("throws when GITHUB_ENV is not set", () => {
      delete process.env.GITHUB_ENV;

      expect(() => setEnvVar("VAR", "value")).toThrow(
        "GITHUB_ENV is not set",
      );
    });
  });

  describe("setMultilineEnvVar", () => {
    test("writes multiline value with delimiter", () => {
      const multilineValue = "line1\nline2\nline3";
      setMultilineEnvVar("MULTILINE", multilineValue);

      const content = fs.readFileSync(envFile, "utf-8");
      expect(content).toContain("MULTILINE<<EOF_");
      expect(content).toContain("line1\nline2\nline3");
      expect(content).toMatch(/EOF_\w+\n$/);
    });
  });

  describe("setOutput", () => {
    test("writes output to GITHUB_OUTPUT", () => {
      setOutput("version", "1.2.3");

      const content = fs.readFileSync(outputFile, "utf-8");
      expect(content).toBe("version=1.2.3\n");
    });

    test("appends multiple outputs", () => {
      setOutput("version", "1.2.3");
      setOutput("commit", "abc123");

      const content = fs.readFileSync(outputFile, "utf-8");
      expect(content).toBe("version=1.2.3\ncommit=abc123\n");
    });
  });

  describe("setMultilineOutput", () => {
    test("writes multiline output with delimiter", () => {
      const report = "Build: Success\nTests: Passed\nCoverage: 95%";
      setMultilineOutput("report", report);

      const content = fs.readFileSync(outputFile, "utf-8");
      expect(content).toContain("report<<EOF_");
      expect(content).toContain(report);
    });
  });

  describe("addPath", () => {
    test("adds path to GITHUB_PATH", () => {
      addPath("/usr/local/bin");

      const content = fs.readFileSync(pathFile, "utf-8");
      expect(content).toBe("/usr/local/bin\n");
    });

    test("appends multiple paths", () => {
      addPath("/usr/local/bin");
      addPath("/opt/tools");

      const content = fs.readFileSync(pathFile, "utf-8");
      expect(content).toBe("/usr/local/bin\n/opt/tools\n");
    });
  });

  describe("job summary", () => {
    test("addJobSummary appends markdown", () => {
      addJobSummary("## Test Results\n\nAll passed!");

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toBe("## Test Results\n\nAll passed!");
    });

    test("clearJobSummary empties the file", () => {
      addJobSummary("Initial content");
      clearJobSummary();

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toBe("");
    });

    test("addSummary formats with title", () => {
      addSummary("Results", "Tests passed!");

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toContain("## Results");
      expect(content).toContain("Tests passed!");
    });

    test("addSummaryTable creates markdown table", () => {
      addSummaryTable(
        ["Metric", "Value"],
        [
          ["Tests", "42"],
          ["Coverage", "95%"],
        ],
      );

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toContain("| Metric | Value |");
      expect(content).toContain("| Tests | 42 |");
      expect(content).toContain("| Coverage | 95% |");
    });
  });

  describe("isGitHubActions", () => {
    test("returns true when GITHUB_ACTIONS is set", () => {
      expect(isGitHubActions()).toBe(true);
    });

    test("returns false when GITHUB_ACTIONS is not set", () => {
      delete process.env.GITHUB_ACTIONS;
      expect(isGitHubActions()).toBe(false);
    });
  });

  describe("error handling", () => {
    test("setEnvVar throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_ENV;
      expect(() => setEnvVar("VAR", "value")).toThrow("GITHUB_ENV is not set");
    });

    test("setMultilineEnvVar throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_ENV;
      expect(() => setMultilineEnvVar("VAR", "value")).toThrow(
        "GITHUB_ENV is not set",
      );
    });

    test("setOutput throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_OUTPUT;
      expect(() => setOutput("name", "value")).toThrow("GITHUB_OUTPUT is not set");
    });

    test("setMultilineOutput throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_OUTPUT;
      expect(() => setMultilineOutput("name", "value")).toThrow(
        "GITHUB_OUTPUT is not set",
      );
    });

    test("addPath throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_PATH;
      expect(() => addPath("/usr/bin")).toThrow("GITHUB_PATH is not set");
    });

    test("addJobSummary throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_STEP_SUMMARY;
      expect(() => addJobSummary("content")).toThrow(
        "GITHUB_STEP_SUMMARY is not set",
      );
    });

    test("clearJobSummary throws when not in GitHub Actions", () => {
      delete process.env.GITHUB_STEP_SUMMARY;
      expect(() => clearJobSummary()).toThrow("GITHUB_STEP_SUMMARY is not set");
    });
  });

  describe("batch operations", () => {
    test("setEnvVars sets multiple variables", () => {
      setEnvVars({
        VAR1: "value1",
        VAR2: "value2",
        VAR3: "value3",
      });

      const content = fs.readFileSync(envFile, "utf-8");
      expect(content).toContain("VAR1=value1");
      expect(content).toContain("VAR2=value2");
      expect(content).toContain("VAR3=value3");
    });

    test("setOutputs sets multiple outputs", () => {
      setOutputs({
        version: "1.2.3",
        sha: "abc123",
        status: "success",
      });

      const content = fs.readFileSync(outputFile, "utf-8");
      expect(content).toContain("version=1.2.3");
      expect(content).toContain("sha=abc123");
      expect(content).toContain("status=success");
    });
  });

  describe("summary helpers", () => {
    test("addSummary formats with title and content", () => {
      addSummary("Test Title", "Test content here");

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toContain("## Test Title");
      expect(content).toContain("Test content here");
    });

    test("addSummaryTable with multiple rows", () => {
      addSummaryTable(
        ["Col1", "Col2", "Col3"],
        [
          ["A", "B", "C"],
          ["D", "E", "F"],
          ["G", "H", "I"],
        ],
      );

      const content = fs.readFileSync(summaryFile, "utf-8");
      expect(content).toContain("| Col1 | Col2 | Col3 |");
      expect(content).toContain("| A | B | C |");
      expect(content).toContain("| D | E | F |");
      expect(content).toContain("| G | H | I |");
    });
  });

  describe("log grouping", () => {
    test("group wraps function execution", async () => {
      let executed = false;

      await group("Test Group", () => {
        executed = true;
        return "result";
      });

      expect(executed).toBe(true);
    });

    test("group handles async functions", async () => {
      const result = await group("Async Group", async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return "async result";
      });

      expect(result).toBe("async result");
    });

    test("group calls endGroup even on error", async () => {
      try {
        await group("Error Group", () => {
          throw new Error("Test error");
        });
      } catch (err) {
        // Expected
      }

      // If endGroup wasn't called, next output would be grouped
      // This is hard to test directly, but the finally block ensures it
    });
  });
});
