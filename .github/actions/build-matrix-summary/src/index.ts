#!/usr/bin/env node
import {
  getCommitSha,
  getCurrentBranch,
  getRepoInfo,
  getWorkflowRun
} from "@kjanat/gha-env-validator/context";
import { safeValidateInputs } from "@kjanat/gha-env-validator/inputs";
import {
  addJobSummary,
  addSummaryTable,
  formatSummaryCodeBlock,
  group,
  error as logError,
  notice,
  setFailed,
  setOutput
} from "@kjanat/gha-env-validator/workflow-commands";
import { z } from "zod";

/**
 * Schema for individual matrix build result
 */
const BuildResultSchema = z.object({
  name: z.string(),
  status: z.enum(["success", "failed", "skipped"]),
  duration: z.number().optional(),
  os: z.string().optional(),
  version: z.string().optional(),
  url: z.url().optional(),
  error: z.string().optional()
});

type BuildResult = z.infer<typeof BuildResultSchema>;

/**
 * Input schema for build-matrix-summary action
 */
const InputSchemaShape = {
  "matrix-results": z.string().transform((str, ctx) => {
    try {
      const parsed = JSON.parse(str);
      return z.array(BuildResultSchema).parse(parsed);
    } catch (err) {
      ctx.addIssue({
        code: "custom",
        message: `Invalid matrix-results JSON: ${err}`
      });
      return z.NEVER;
    }
  }),
  title: z.string().default("Build Matrix Results"),
  "include-context": z.boolean().default(true)
} as const;

const InputSchema = z.object(InputSchemaShape);
type MatrixInputs = z.infer<typeof InputSchema>;

/**
 * Main execution function
 */
async function run(): Promise<void> {
  try {
    // Parse and validate inputs
    const inputResult = safeValidateInputs(InputSchemaShape);

    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }

    const inputs = inputResult.data as MatrixInputs;
    const results = inputs["matrix-results"];

    // Calculate statistics
    const stats = calculateStatistics(results);

    // Set outputs
    setOutput("total-builds", stats.total.toString());
    setOutput("successful-builds", stats.successful.toString());
    setOutput("failed-builds", stats.failed.toString());

    // Generate summary
    await generateSummary(inputs, results, stats);

    // Log results
    await group("📊 Matrix Summary", async () => {
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
    logError(`Matrix summary generation failed: ${message}`);
    setFailed(message);
  }
}

/**
 * Calculate build statistics
 */
interface BuildStatistics {
  total: number;
  successful: number;
  failed: number;
  skipped: number;
  successRate: number;
  averageDuration: number;
}

function calculateStatistics(results: BuildResult[]): BuildStatistics {
  const total = results.length;
  const successful = results.filter((r) => r.status === "success").length;
  const failed = results.filter((r) => r.status === "failed").length;
  const skipped = results.filter((r) => r.status === "skipped").length;

  const successRate = total > 0 ? (successful / total) * 100 : 0;

  const durations = results
    .filter((r): r is typeof r & { duration: number } =>
      r.duration !== undefined
    )
    .map((r) => r.duration);

  const averageDuration = durations.length > 0
    ? durations.reduce((sum, d) => sum + d, 0) / durations.length
    : 0;

  return {
    total,
    successful,
    failed,
    skipped,
    successRate,
    averageDuration
  };
}

/**
 * Generate comprehensive summary
 */
async function generateSummary(
  inputs: MatrixInputs,
  results: BuildResult[],
  stats: BuildStatistics
): Promise<void> {
  addJobSummary(`# ${inputs.title}\n\n`);

  // Add GitHub context if requested
  if (inputs["include-context"]) {
    const repo = getRepoInfo();
    const branch = getCurrentBranch();
    const commitSha = getCommitSha("short");
    const workflowRun = getWorkflowRun();

    addJobSummary(`## Context\n\n`);
    addSummaryTable(
      ["Property", "Value"],
      [
        ["Repository", `\`${repo.full}\``],
        ["Branch", `\`${branch}\``],
        ["Commit", `\`${commitSha}\``],
        ["Run", `[#${workflowRun.number}](${workflowRun.url})`]
      ]
    );
    addJobSummary(`\n`);
  }

  // Add statistics
  addJobSummary(`## Statistics\n\n`);
  const statisticsRows: string[][] = [
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
  addJobSummary(`\n## Results\n\n`);

  // Create results table
  const headers = ["Build", "Status", "Duration", "Platform"];
  const rows = results.map((result) => [
    result.url ? `[${result.name}](${result.url})` : result.name,
    formatStatus(result.status),
    result.duration ? formatDuration(result.duration) : "N/A",
    formatPlatform(result)
  ]);

  addSummaryTable(headers, rows);

  // Add error details if any failures
  if (stats.failed > 0) {
    const failedBuilds = results.filter((r) => r.status === "failed");

    const failedSections = failedBuilds.map((build) => {
      const errorContent = build.error
        ? formatSummaryCodeBlock(build.error)
        : `_No error details available_`;
      return `### ${build.name}\n\n${errorContent}`;
    });

    addJobSummary(`\n## ❌ Failed Builds\n\n${failedSections.join("\n\n")}\n`);
  }
}

/**
 * Format status with emoji
 */
function formatStatus(status: BuildResult["status"]): string {
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

/**
 * Format duration in human-readable format
 */
function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);

  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}m ${remainingSeconds}s`;
}

/**
 * Format platform information
 */
function formatPlatform(result: BuildResult): string {
  const parts: string[] = [];

  if (result.os) {
    parts.push(result.os);
  }

  if (result.version) {
    parts.push(result.version);
  }

  return parts.length > 0 ? parts.join(" / ") : "N/A";
}

// Execute main function
run();
