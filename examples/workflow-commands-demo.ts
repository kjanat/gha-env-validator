/**
 * Workflow Commands Demo
 *
 * Demonstrates all workflow command helper utilities.
 * Run this in a GitHub Actions workflow to see the full functionality.
 */

import {
  addJobSummary,
  addPath,
  addSummary,
  addSummaryTable,
  debug,
  error,
  group,
  isGitHubActions,
  maskValue,
  notice,
  setEnvVar,
  setEnvVars,
  setMultilineEnvVar,
  setOutput,
  setOutputs,
  validateEnv,
  warning,
} from "@kjanat/gha-env-validator";

async function main() {
  // Validate we're in GitHub Actions
  if (!isGitHubActions()) {
    console.log("⚠️  Not running in GitHub Actions - skipping workflow commands");
    console.log("💡 Run this in a GitHub Actions workflow to see full functionality\n");
  }

  console.log("🚀 GitHub Actions Workflow Commands Demo\n");

  // 1. Environment Variables
  await group("Setting Environment Variables", async () => {
    if (isGitHubActions()) {
      setEnvVar("DEPLOY_ENV", "staging");
      setEnvVar("API_URL", "https://api.staging.example.com");

      // Batch set
      setEnvVars({
        FEATURE_FLAG_A: "true",
        FEATURE_FLAG_B: "false",
        MAX_RETRIES: "3",
      });

      console.log("✅ Environment variables set for subsequent steps");
    } else {
      console.log("📝 Would set: DEPLOY_ENV, API_URL, feature flags");
    }
  });

  // 2. Multiline Values
  await group("Setting Multiline Values", async () => {
    if (isGitHubActions()) {
      const buildReport = `
Build Summary
=============
Status: Success
Tests: 42 passed
Coverage: 95%
Duration: 2m 34s
      `.trim();

      setMultilineEnvVar("BUILD_REPORT", buildReport);
      console.log("✅ Multiline build report saved");
    } else {
      console.log("📝 Would set multiline BUILD_REPORT");
    }
  });

  // 3. Step Outputs
  await group("Setting Step Outputs", async () => {
    if (isGitHubActions()) {
      setOutput("version", "1.2.3");
      setOutput("commit_sha", "abc123def456");

      setOutputs({
        deployment_url: "https://app.example.com",
        build_number: "42",
        status: "success",
      });

      console.log("✅ Outputs set (accessible via steps.<id>.outputs.<name>)");
    } else {
      console.log("📝 Would set outputs: version, commit_sha, deployment_url, etc.");
    }
  });

  // 4. Path Modification
  await group("Adding to System PATH", async () => {
    if (isGitHubActions()) {
      addPath("/usr/local/custom-tools");
      console.log("✅ Added /usr/local/custom-tools to PATH");
    } else {
      console.log("📝 Would add /usr/local/custom-tools to PATH");
    }
  });

  // 5. Job Summaries
  await group("Creating Job Summary", async () => {
    if (isGitHubActions()) {
      addSummary("Build Results", "🎉 Build completed successfully!");

      addSummaryTable(
        ["Metric", "Value", "Status"],
        [
          ["Tests", "42", "✅"],
          ["Coverage", "95%", "✅"],
          ["Duration", "2m 34s", "✅"],
        ],
      );

      addJobSummary("\n### Next Steps\n\n- Deploy to staging\n- Run E2E tests\n");

      console.log("✅ Job summary created (visible in workflow run page)");
    } else {
      console.log("📝 Would create job summary with build results table");
    }
  });

  // 6. Log Annotations
  await group("Log Annotations", async () => {
    debug("This is a debug message (requires ACTIONS_STEP_DEBUG=true)");
    notice("Deployment completed successfully");
    warning("API rate limit approaching", {
      file: "api-client.ts",
      line: 42,
      title: "Rate Limit Warning",
    });

    // Don't actually fail, just demonstrate
    console.log("📝 Would log error annotation (not calling to avoid failure)");
    // error('Critical error', { file: 'app.ts', line: 10 });
  });

  // 7. Masking Sensitive Values
  await group("Masking Sensitive Values", async () => {
    const fakeApiKey = "sk_test_1234567890abcdef";

    if (isGitHubActions()) {
      maskValue(fakeApiKey);
      console.log(`API Key: ${fakeApiKey}`); // Will show *** in logs
      console.log("✅ API key masked in logs");
    } else {
      console.log(`📝 Would mask: ${fakeApiKey}`);
      console.log("   (Shows as *** in GitHub Actions logs)");
    }
  });

  // 8. Validation with Workflow Commands
  await group("Validation + Workflow Commands", async () => {
    try {
      const env = validateEnv();

      if (isGitHubActions()) {
        // Set outputs based on validated env
        setOutput("repository", env.GITHUB_REPOSITORY);
        setOutput("runner_os", env.RUNNER_OS);
        setOutput("commit_sha", env.GITHUB_SHA);

        addSummary(
          "Environment Info",
          `
- **Repository:** ${env.GITHUB_REPOSITORY}
- **Runner:** ${env.RUNNER_OS} (${env.RUNNER_ARCH})
- **Commit:** ${env.GITHUB_SHA.substring(0, 7)}
        `,
        );

        console.log("✅ Validated env vars exported as outputs");
      } else {
        console.log("📝 Would export validated env vars as step outputs");
      }
    } catch (err) {
      if (isGitHubActions()) {
        error(`Validation failed: ${err}`);
      }
      console.error("❌ Environment validation failed");
    }
  });

  console.log("\n🎯 Demo complete!");
  console.log("\n💡 Run in GitHub Actions to see:");
  console.log("   - Environment variables set for next steps");
  console.log("   - Step outputs for downstream jobs");
  console.log("   - Rich job summaries with tables");
  console.log("   - Annotations in workflow logs");
}

main().catch(console.error);
