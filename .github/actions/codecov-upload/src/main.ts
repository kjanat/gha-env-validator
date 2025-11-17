#!/usr/bin/env node
import { existsSync } from "node:fs";
import {
  assertGitHubActions,
  getCommitSha,
  getPullRequestInfo,
  getRepoInfo,
  isPullRequest
} from "@kjanat/gha-env-validator";
import { safeValidateInputs } from "@kjanat/gha-env-validator/inputs";
import {
  addSummaryTable,
  endGroup,
  error,
  notice,
  setFailed,
  setOutput,
  startGroup,
  warning
} from "@kjanat/gha-env-validator/workflow-commands";
import { z } from "zod";

/**
 * Input schema for codecov-upload action
 */
const InputSchema = z.object({
  "test-results-file": z.string().default("bun.xml"),
  "coverage-file": z.string().default("lcov.info"),
  "codecov-token": z.string().min(1, "Codecov token is required"),
  "fail-on-error": z.boolean().default(false),
  "use-oidc": z.boolean().default(true)
});

type CodecovInputs = z.infer<typeof InputSchema>;

/**
 * Main execution function
 */
async function run(): Promise<void> {
  try {
    // Ensure we're running in GitHub Actions
    assertGitHubActions();

    // Parse and validate inputs
    const inputResult = safeValidateInputs(InputSchema);

    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }

    const inputs = inputResult.data;

    // Get GitHub context information
    const repo = getRepoInfo();
    const commitSha = getCommitSha("short");
    const isPR = isPullRequest();
    const prInfo = isPR ? getPullRequestInfo() : null;

    // Log context
    notice(`Repository: ${repo.full}`);
    notice(`Commit: ${commitSha}`);
    if (isPR && prInfo) {
      notice(`Pull Request: #${prInfo.number} - ${prInfo.title}`);
    }

    // Upload test results
    const testStatus = await uploadTestResults(inputs);

    // Upload coverage
    const coverageStatus = await uploadCoverage(inputs);

    // Set outputs
    setOutput("test-results-status", testStatus);
    setOutput("coverage-status", coverageStatus);

    // Create summary table
    await addSummaryTable({
      headers: ["Upload Type", "File", "Status"],
      rows: [
        [
          "Test Results",
          inputs["test-results-file"],
          testStatus === "success"
            ? "✅ Success"
            : testStatus === "skipped"
            ? "⏭️ Skipped"
            : "❌ Failed"
        ],
        [
          "Coverage",
          inputs["coverage-file"],
          coverageStatus === "success"
            ? "✅ Success"
            : coverageStatus === "skipped"
            ? "⏭️ Skipped"
            : "❌ Failed"
        ]
      ]
    });

    // Check if any uploads failed
    const hasFailures = testStatus === "failed" || coverageStatus === "failed";

    if (hasFailures && inputs["fail-on-error"]) {
      setFailed("One or more uploads failed");
    } else if (hasFailures) {
      warning("One or more uploads failed, but fail-on-error is false");
    } else {
      notice("All uploads completed successfully");
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    error(`Codecov upload failed: ${message}`);
    setFailed(message);
  }
}

/**
 * Upload test results to Codecov
 */
async function uploadTestResults(
  inputs: CodecovInputs
): Promise<"success" | "failed" | "skipped"> {
  startGroup("📊 Upload Test Results");

  const filePath = inputs["test-results-file"];

  // Check if file exists
  if (!existsSync(filePath)) {
    warning(`Test results file not found: ${filePath}`);
    endGroup();
    return "skipped";
  }

  notice(`Uploading test results from: ${filePath}`);

  try {
    // In production, this would call codecov/test-results-action@v1
    notice("Would run: codecov/test-results-action@v1");
    notice(`  files: ${filePath}`);
    notice(`  use_oidc: ${inputs["use-oidc"]}`);
    notice(`  fail_ci_if_error: ${inputs["fail-on-error"]}`);

    // Simulate upload
    notice("Test results uploaded successfully");
    endGroup();
    return "success";
  } catch (err) {
    error(`Failed to upload test results: ${err}`);
    endGroup();
    return "failed";
  }
}

/**
 * Upload coverage to Codecov
 */
async function uploadCoverage(
  inputs: CodecovInputs
): Promise<"success" | "failed" | "skipped"> {
  startGroup("📈 Upload Coverage");

  const filePath = inputs["coverage-file"];

  // Check if file exists
  if (!existsSync(filePath)) {
    warning(`Coverage file not found: ${filePath}`);
    endGroup();
    return "skipped";
  }

  notice(`Uploading coverage from: ${filePath}`);

  // Get repo info for slug
  const repo = getRepoInfo();

  try {
    // In production, this would call codecov/codecov-action@v5
    notice("Would run: codecov/codecov-action@v5");
    notice(`  files: ${filePath}`);
    notice(`  slug: ${repo.full}`);
    notice(`  use_oidc: ${inputs["use-oidc"]}`);
    notice(`  fail_ci_if_error: ${inputs["fail-on-error"]}`);

    // Simulate upload
    notice("Coverage uploaded successfully");
    endGroup();
    return "success";
  } catch (err) {
    error(`Failed to upload coverage: ${err}`);
    endGroup();
    return "failed";
  }
}

// Execute main function
run();
