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
  isGitHubActions,
  maskValue,
  notice,
  setEnvVar,
  setMultilineEnvVar,
  setMultilineOutput,
  setOutput,
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
});
