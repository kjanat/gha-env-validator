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
  url: z.string().url().optional(),
  error: z.string().optional()
});

type BuildResult = z.infer<typeof BuildResultSchema>;

/**
 * Input schema for build-matrix-summary action
 */
const InputSchema = z.object({
  "matrix-results": z.string().transform((str, ctx) => {
    try {
      const parsed = JSON.parse(str);
      return z.array(BuildResultSchema).parse(parsed);
    } catch (err) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Invalid matrix-results JSON: ${err}`
      });
      return z.NEVER;
    }
  }),
  title: z.string().default("Build Matrix Results"),
  "include-context": z.boolean().default(true)
});

type MatrixInputs = z.infer<typeof InputSchema>;

/**
 * Main execution function
 */
async function run(): Promise<void> {
  try {
    // Parse and validate inputs
    const inputResult = safeValidateInputs(InputSchema);

    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }

    const inputs = inputResult.data;
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
  let summary = `# ${inputs.title}\n\n`;

  // Add GitHub context if requested
  if (inputs["include-context"]) {
    const repo = getRepoInfo();
    const branch = getCurrentBranch();
    const commitSha = getCommitSha("short");
    const workflowRun = getWorkflowRun();

    summary += `## Context\n\n`;
    summary += `| Property | Value |\n`;
    summary += `|----------|-------|\n`;
    summary += `| Repository | \`${repo.full}\` |\n`;
    summary += `| Branch | \`${branch}\` |\n`;
    summary += `| Commit | \`${commitSha}\` |\n`;
    summary += `| Run | [#${workflowRun.number}](${workflowRun.url}) |\n\n`;
  }

  // Add statistics
  summary += `## Statistics\n\n`;
  summary += `| Metric | Value |\n`;
  summary += `|--------|-------|\n`;
  summary += `| Total Builds | ${stats.total} |\n`;
  summary += `| ✅ Successful | ${stats.successful} |\n`;
  summary += `| ❌ Failed | ${stats.failed} |\n`;
  summary += `| ⏭️ Skipped | ${stats.skipped} |\n`;
  summary += `| Success Rate | ${stats.successRate.toFixed(1)}% |\n`;

  if (stats.averageDuration > 0) {
    summary += `| Average Duration | ${
      formatDuration(stats.averageDuration)
    } |\n`;
  }

  summary += `\n`;

  // Add results table
  summary += `## Results\n\n`;

  await addJobSummary(summary);

  // Create results table
  const headers = ["Build", "Status", "Duration", "Platform"];
  const rows = results.map((result) => [
    result.url ? `[${result.name}](${result.url})` : result.name,
    formatStatus(result.status),
    result.duration ? formatDuration(result.duration) : "N/A",
    formatPlatform(result)
  ]);

  await addSummaryTable({ headers, rows });

  // Add error details if any failures
  if (stats.failed > 0) {
    const failedBuilds = results.filter((r) => r.status === "failed");

    let errorSummary = `\n## ❌ Failed Builds\n\n`;

    for (const build of failedBuilds) {
      errorSummary += `### ${build.name}\n\n`;
      if (build.error) {
        errorSummary += `\`\`\`\n${build.error}\n\`\`\`\n\n`;
      } else {
        errorSummary += `_No error details available_\n\n`;
      }
    }

    await addJobSummary(errorSummary);
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
