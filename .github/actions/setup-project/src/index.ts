#!/usr/bin/env node
import { execSync, spawnSync } from "node:child_process";
import {
  addJobSummary,
  endGroup,
  error,
  getRepoInfo,
  notice,
  safeValidateInputs,
  setFailed,
  setOutput,
  startGroup,
  validateEnv,
  warning
} from "@kjanat/gha-env-validator";
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
    if (process.env.ACT === "true") {
      notice("ACT detected; skipping setup-project action.");
      return;
    }

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
    addJobSummary(`
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

  if (!bunAvailable()) {
    warning("Bun is not available; skipping install step.");
    endGroup();
    return;
  }

  const result = spawnSync(
    "bun",
    ["install", ...args.split(" ").filter(Boolean)],
    {
      stdio: "inherit"
    }
  );

  if (result.status !== 0) {
    throw new Error("Failed to install dependencies");
  }

  notice("Dependencies installed successfully");

  endGroup();
}

/**
 * Run build step
 */
async function runBuild(): Promise<"success" | "failed" | "skipped"> {
  startGroup("🔨 Build Project");

  notice("Running: bun run build");

  if (!bunAvailable()) {
    warning("Bun is not available; skipping build step.");
    endGroup();
    return "skipped";
  }

  const result = spawnSync("bun", ["run", "build"], { stdio: "inherit" });

  if (result.status === 0) {
    notice("Build completed successfully");
    endGroup();
    return "success";
  }

  error("Build failed");
  endGroup();
  return "failed";
}

// Execute main function
run();

function bunAvailable(): boolean {
  try {
    execSync("bun --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}
