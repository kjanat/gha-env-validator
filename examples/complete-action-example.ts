/**
 * Complete Action Example
 *
 * Demonstrates a full GitHub Action using all package features:
 * - Environment validation
 * - Input validation
 * - Context utilities
 * - Workflow commands
 * - Job summaries
 * - Error handling
 */

import {
  addSummaryTable,
  createEnvSchema,
  getActor,
  getCommitSha,
  getCurrentBranch,
  getRepoInfo,
  getRunnerInfo,
  getWorkflowRun,
  group,
  isGitHubActions,
  isOnBranch,
  isPullRequest,
  notice,
  setFailed,
  setOutputs,
  validateCustomEnv,
  validateInputs,
  z
} from "@kjanat/gha-env-validator";

async function main() {
  try {
    // 1. Validate environment
    await group("Validating Environment", async () => {
      const envSchema = createEnvSchema({
        API_KEY: z.string().min(1),
        DEPLOY_ENV: z.enum(["dev", "staging", "prod"]).default("dev")
      });

      const env = validateCustomEnv(envSchema);
      notice(`Environment: ${env.DEPLOY_ENV}`);
    });

    // 2. Validate action inputs
    const inputs = await group("Validating Inputs", async () => {
      const inputSchema = {
        version: z.string().regex(/^\d+\.\d+\.\d+$/, "Must be semver format"),
        "skip-tests": z.boolean().default(false),
        environment: z.enum(["dev", "staging", "prod"]),
        targets: z.array(z.string()).default([])
      };

      const validated = validateInputs(inputSchema);
      notice(`Version: ${validated.version}`);
      return validated;
    });

    // 3. Get context information
    const context = await group("Gathering Context", async () => {
      const repo = getRepoInfo();
      const branch = getCurrentBranch();
      const sha = getCommitSha("short");
      const actor = getActor();
      const runner = getRunnerInfo();
      const run = getWorkflowRun();

      return { repo, branch, sha, actor, runner, run };
    });

    // 4. Conditional logic based on context
    await group("Executing Build", async () => {
      if (isPullRequest()) {
        notice("Running in PR context - using preview deployment");
      } else if (isOnBranch("main")) {
        notice("Main branch detected - deploying to production");
      } else {
        notice(`Feature branch ${context.branch} - deploying to dev`);
      }

      // Simulate build
      console.log("Building application...");
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log("Build complete!");
    });

    // 5. Set outputs for downstream jobs/steps
    await group("Setting Outputs", async () => {
      setOutputs({
        version: inputs.version,
        commit_sha: context.sha,
        branch: context.branch,
        repository: context.repo.full,
        build_url: context.run.url,
        runner_os: context.runner.os
      });

      notice("Outputs set for downstream jobs");
    });

    // 6. Generate job summary
    await group("Generating Summary", async () => {
      addSummaryTable(
        ["Property", "Value"],
        [
          ["Version", inputs.version],
          ["Repository", context.repo.full],
          ["Branch", context.branch],
          ["Commit", context.sha],
          ["Actor", `${context.actor.name} (#${context.actor.id})`],
          ["Runner", `${context.runner.os} (${context.runner.arch})`],
          ["Run", `#${context.run.number} (attempt ${context.run.attempt})`]
        ]
      );

      notice("Job summary created");
    });

    // 7. Success
    notice("✅ Action completed successfully!");
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    // Detailed error reporting
    if (isGitHubActions()) {
      setFailed(`Action failed: ${errorMessage}`);
    } else {
      console.error("❌ Action failed:", errorMessage);
      process.exit(1);
    }
  }
}

// Only run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main };
