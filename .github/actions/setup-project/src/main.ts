#!/usr/bin/env node
import { validateEnv } from "@kjanat/gha-env-validator";
import { getRepoInfo } from "@kjanat/gha-env-validator/context";
import { safeValidateInputs } from "@kjanat/gha-env-validator/inputs";
import {
  addJobSummary,
  endGroup,
  error,
  notice,
  setFailed,
  setOutput,
  startGroup
} from "@kjanat/gha-env-validator/workflow-commands";
import { $ } from "bun";
import { z } from "zod";

/**
 * Input schema for setup-project action
 */
const InputSchemaShape = {
  "node-version": z.string().default("lts/*"),
  "bun-version": z.string().default("latest"),
  "skip-build": z.boolean().default(false),
  "install-args": z.string().default("")
} as const;

const InputSchema = z.object(InputSchemaShape);
type SetupInputs = z.infer<typeof InputSchema>;

/**
 * Main execution function
 */
async function run(): Promise<void> {
  try {
    // Validate GitHub Actions environment
    validateEnv();

    // Get repository info for logging
    const repo = getRepoInfo();
    notice(`Setting up project: ${repo.full}`);

    // Parse and validate inputs
    const inputResult = safeValidateInputs(InputSchemaShape);

    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }

    const inputs = inputResult.data as SetupInputs;

    // Execute setup steps with grouped output
    await setupNode(inputs["node-version"]);
    await setupBun(inputs["bun-version"]);
    await installDependencies(inputs["install-args"]);

    // Conditionally run build
    const buildStatus = inputs["skip-build"] ? "skipped" : await runBuild();

    // Set outputs
    setOutput("node-version", inputs["node-version"]);
    setOutput("bun-version", inputs["bun-version"]);
    setOutput("build-status", buildStatus);

    // Add summary
    await addJobSummary(`
## ✅ Project Setup Complete

| Component | Version/Status |
|-----------|----------------|
| Repository | ${repo.full} |
| Node.js | ${inputs["node-version"]} |
| Bun | ${inputs["bun-version"]} |
| Build | ${
      buildStatus === "skipped"
        ? "⏭️ Skipped"
        : buildStatus === "success"
        ? "✅ Success"
        : "❌ Failed"
    } |
`);

    notice("Project setup completed successfully");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    error(`Setup failed: ${message}`);
    setFailed(message);
  }
}

/**
 * Setup Node.js using actions/setup-node
 */
async function setupNode(version: string): Promise<void> {
  startGroup("📦 Setup Node.js");

  notice(`Installing Node.js ${version}`);

  // In a real composite action, this would call actions/setup-node
  // For this demo, we just log the intent
  notice(`Would run: actions/setup-node@v6 with node-version: ${version}`);

  endGroup();
}

/**
 * Setup Bun using oven-sh/setup-bun
 */
async function setupBun(version: string): Promise<void> {
  startGroup("🥖 Setup Bun");

  notice(`Installing Bun ${version}`);

  // In a real composite action, this would call oven-sh/setup-bun
  notice(`Would run: oven-sh/setup-bun@v2 with bun-version: ${version}`);

  endGroup();
}

/**
 * Install dependencies with bun
 */
async function installDependencies(extraArgs: string): Promise<void> {
  startGroup("📥 Install Dependencies");

  const args = extraArgs.trim();
  const command = args ? `bun install ${args}` : "bun install";

  notice(`Running: ${command}`);

  try {
    // Execute bun install
    await $`bun install ${args.split(" ").filter(Boolean)}`;
    notice("Dependencies installed successfully");
  } catch (err) {
    throw new Error(`Failed to install dependencies: ${err}`);
  }

  endGroup();
}

/**
 * Run build step
 */
async function runBuild(): Promise<"success" | "failed"> {
  startGroup("🔨 Build Project");

  notice("Running: bun run build");

  try {
    await $`bun run build`;
    notice("Build completed successfully");
    endGroup();
    return "success";
  } catch (err) {
    error(`Build failed: ${err}`);
    endGroup();
    return "failed";
  }
}

// Execute main function
run();
