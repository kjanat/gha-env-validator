/**
 * Workflow Commands - Helper utilities for GitHub Actions workflow commands
 *
 * Provides type-safe wrappers for writing to GitHub Actions special files
 * and issuing workflow commands.
 *
 * @see https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands
 */

import * as fs from "node:fs";

/**
 * Sets an environment variable for subsequent steps in the workflow.
 *
 * The variable will be available in process.env for all following steps.
 *
 * @example
 * ```typescript
 * import { setEnvVar } from '@kjanat/gha-env-validator';
 *
 * setEnvVar('NODE_ENV', 'production');
 * setEnvVar('API_URL', 'https://api.example.com');
 * ```
 *
 * @param name - Environment variable name
 * @param value - Environment variable value
 */
export function setEnvVar(name: string, value: string): void {
  const envFile = process.env.GITHUB_ENV;

  if (!envFile) {
    throw new Error("GITHUB_ENV is not set. This function only works in GitHub Actions.");
  }

  fs.appendFileSync(envFile, `${name}=${value}\n`, "utf-8");
}

/**
 * Sets a multiline environment variable for subsequent steps.
 *
 * Uses heredoc syntax to handle values with newlines safely.
 *
 * @example
 * ```typescript
 * import { setMultilineEnvVar } from '@kjanat/gha-env-validator';
 *
 * const jsonResponse = JSON.stringify({ foo: 'bar' }, null, 2);
 * setMultilineEnvVar('API_RESPONSE', jsonResponse);
 * ```
 *
 * @param name - Environment variable name
 * @param value - Multiline value
 */
export function setMultilineEnvVar(name: string, value: string): void {
  const envFile = process.env.GITHUB_ENV;

  if (!envFile) {
    throw new Error("GITHUB_ENV is not set. This function only works in GitHub Actions.");
  }

  const delimiter = `EOF_${Math.random().toString(36).substring(7)}`;
  fs.appendFileSync(
    envFile,
    `${name}<<${delimiter}\n${value}\n${delimiter}\n`,
    "utf-8"
  );
}

/**
 * Sets an output parameter for the current step.
 *
 * Outputs can be referenced in later steps using ${{ steps.<step_id>.outputs.<name> }}
 *
 * @example
 * ```typescript
 * import { setOutput } from '@kjanat/gha-env-validator';
 *
 * setOutput('build_version', '1.2.3');
 * setOutput('deployment_url', 'https://app.example.com');
 * ```
 *
 * @param name - Output parameter name
 * @param value - Output parameter value
 */
export function setOutput(name: string, value: string): void {
  const outputFile = process.env.GITHUB_OUTPUT;

  if (!outputFile) {
    throw new Error("GITHUB_OUTPUT is not set. This function only works in GitHub Actions.");
  }

  fs.appendFileSync(outputFile, `${name}=${value}\n`, "utf-8");
}

/**
 * Sets a multiline output parameter for the current step.
 *
 * @example
 * ```typescript
 * import { setMultilineOutput } from '@kjanat/gha-env-validator';
 *
 * const report = `
 * Build Status: Success
 * Tests Passed: 42
 * Coverage: 95%
 * `;
 * setMultilineOutput('build_report', report);
 * ```
 *
 * @param name - Output parameter name
 * @param value - Multiline output value
 */
export function setMultilineOutput(name: string, value: string): void {
  const outputFile = process.env.GITHUB_OUTPUT;

  if (!outputFile) {
    throw new Error("GITHUB_OUTPUT is not set. This function only works in GitHub Actions.");
  }

  const delimiter = `EOF_${Math.random().toString(36).substring(7)}`;
  fs.appendFileSync(
    outputFile,
    `${name}<<${delimiter}\n${value}\n${delimiter}\n`,
    "utf-8"
  );
}

/**
 * Adds a directory to the system PATH for subsequent steps.
 *
 * @example
 * ```typescript
 * import { addPath } from '@kjanat/gha-env-validator';
 *
 * addPath('/usr/local/custom-tools');
 * addPath('$HOME/.local/bin');
 * ```
 *
 * @param path - Directory path to add to PATH
 */
export function addPath(path: string): void {
  const pathFile = process.env.GITHUB_PATH;

  if (!pathFile) {
    throw new Error("GITHUB_PATH is not set. This function only works in GitHub Actions.");
  }

  fs.appendFileSync(pathFile, `${path}\n`, "utf-8");
}

/**
 * Appends markdown content to the job summary.
 *
 * Job summaries appear on the workflow run summary page.
 * Maximum 1MB per step, 20 summaries per job.
 *
 * @example
 * ```typescript
 * import { addJobSummary } from '@kjanat/gha-env-validator';
 *
 * addJobSummary('## Build Results\n\n✅ All tests passed!');
 * addJobSummary('| Metric | Value |\n|--------|-------|\n| Coverage | 95% |');
 * ```
 *
 * @param markdown - Markdown content to append
 */
export function addJobSummary(markdown: string): void {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;

  if (!summaryFile) {
    throw new Error("GITHUB_STEP_SUMMARY is not set. This function only works in GitHub Actions.");
  }

  fs.appendFileSync(summaryFile, markdown, "utf-8");
}

/**
 * Clears the current step's job summary.
 *
 * @example
 * ```typescript
 * import { clearJobSummary } from '@kjanat/gha-env-validator';
 *
 * clearJobSummary();
 * addJobSummary('# Fresh summary content');
 * ```
 */
export function clearJobSummary(): void {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;

  if (!summaryFile) {
    throw new Error("GITHUB_STEP_SUMMARY is not set. This function only works in GitHub Actions.");
  }

  fs.writeFileSync(summaryFile, "", "utf-8");
}

/**
 * Writes a debug message to the log.
 *
 * Debug logging must be enabled by setting the ACTIONS_STEP_DEBUG secret to true.
 *
 * @example
 * ```typescript
 * import { debug } from '@kjanat/gha-env-validator';
 *
 * debug('Processing item 5 of 10');
 * ```
 *
 * @param message - Debug message
 */
export function debug(message: string): void {
  console.log(`::debug::${message}`);
}

/**
 * Creates a notice annotation in the workflow log.
 *
 * @example
 * ```typescript
 * import { notice } from '@kjanat/gha-env-validator';
 *
 * notice('Deployment successful');
 * notice('Check logs', { file: 'app.js', line: 42 });
 * ```
 *
 * @param message - Notice message
 * @param options - Annotation options (file, line, col, etc.)
 */
export function notice(
  message: string,
  options?: {
    file?: string;
    line?: number;
    col?: number;
    endLine?: number;
    endColumn?: number;
    title?: string;
  }
): void {
  const params = formatAnnotationParams(options);
  console.log(`::notice${params}::${message}`);
}

/**
 * Creates a warning annotation in the workflow log.
 *
 * @example
 * ```typescript
 * import { warning } from '@kjanat/gha-env-validator';
 *
 * warning('Deprecated API usage detected');
 * warning('Unused variable', { file: 'main.ts', line: 10 });
 * ```
 *
 * @param message - Warning message
 * @param options - Annotation options
 */
export function warning(
  message: string,
  options?: {
    file?: string;
    line?: number;
    col?: number;
    endLine?: number;
    endColumn?: number;
    title?: string;
  }
): void {
  const params = formatAnnotationParams(options);
  console.log(`::warning${params}::${message}`);
}

/**
 * Creates an error annotation in the workflow log.
 *
 * @example
 * ```typescript
 * import { error } from '@kjanat/gha-env-validator';
 *
 * error('Build failed');
 * error('Type mismatch', { file: 'app.ts', line: 55, col: 12 });
 * ```
 *
 * @param message - Error message
 * @param options - Annotation options
 */
export function error(
  message: string,
  options?: {
    file?: string;
    line?: number;
    col?: number;
    endLine?: number;
    endColumn?: number;
    title?: string;
  }
): void {
  const params = formatAnnotationParams(options);
  console.log(`::error${params}::${message}`);
}

/**
 * Masks a value in the logs, replacing it with asterisks.
 *
 * Useful for preventing secrets from appearing in logs.
 *
 * @example
 * ```typescript
 * import { maskValue } from '@kjanat/gha-env-validator';
 *
 * const apiKey = process.env.API_KEY;
 * maskValue(apiKey);
 * console.log(apiKey); // Shows *** in logs
 * ```
 *
 * @param value - Sensitive value to mask
 */
export function maskValue(value: string): void {
  console.log(`::add-mask::${value}`);
}

/**
 * Creates a collapsible group in the workflow log.
 *
 * @example
 * ```typescript
 * import { group } from '@kjanat/gha-env-validator';
 *
 * group('Install Dependencies', () => {
 *   console.log('Installing packages...');
 *   // ... installation logic
 * });
 * ```
 *
 * @param title - Group title
 * @param fn - Function to execute within the group
 */
export async function group<T>(
  title: string,
  fn: () => T | Promise<T>
): Promise<T> {
  console.log(`::group::${title}`);
  try {
    return await fn();
  } finally {
    console.log("::endgroup::");
  }
}

/**
 * Starts a log group.
 *
 * @example
 * ```typescript
 * import { startGroup, endGroup } from '@kjanat/gha-env-validator';
 *
 * startGroup('Build Process');
 * console.log('Building...');
 * endGroup();
 * ```
 *
 * @param title - Group title
 */
export function startGroup(title: string): void {
  console.log(`::group::${title}`);
}

/**
 * Ends the current log group.
 */
export function endGroup(): void {
  console.log("::endgroup::");
}

/**
 * Stops processing workflow commands until a token is encountered.
 *
 * @example
 * ```typescript
 * import { stopCommands, resumeCommands } from '@kjanat/gha-env-validator';
 *
 * const token = stopCommands();
 * console.log('::warning::This will be printed literally, not processed');
 * resumeCommands(token);
 * ```
 *
 * @returns A unique token to resume commands
 */
export function stopCommands(): string {
  const token = `stop_${Math.random().toString(36).substring(7)}_${Date.now()}`;
  console.log(`::stop-commands::${token}`);
  return token;
}

/**
 * Resumes processing workflow commands.
 *
 * @param token - Token returned from stopCommands()
 */
export function resumeCommands(token: string): void {
  console.log(`::${token}::`);
}

/**
 * Checks if running in GitHub Actions environment.
 *
 * @example
 * ```typescript
 * import { isGitHubActions } from '@kjanat/gha-env-validator';
 *
 * if (isGitHubActions()) {
 *   setEnvVar('BUILD_ID', generateId());
 * }
 * ```
 *
 * @returns true if running in GitHub Actions
 */
export function isGitHubActions(): boolean {
  return process.env.GITHUB_ACTIONS === "true";
}

/**
 * Asserts that the code is running in GitHub Actions, throws otherwise.
 *
 * @example
 * ```typescript
 * import { assertGitHubActions } from '@kjanat/gha-env-validator';
 *
 * assertGitHubActions(); // Throws if not in GHA
 * setEnvVar('VAR', 'value'); // Safe to call
 * ```
 *
 * @throws Error if not running in GitHub Actions
 */
export function assertGitHubActions(): void {
  if (!isGitHubActions()) {
    throw new Error("Not running in GitHub Actions. Workflow commands are only available in GitHub Actions environment.");
  }
}

// Helper function to format annotation parameters
function formatAnnotationParams(options?: {
  file?: string;
  line?: number;
  col?: number;
  endLine?: number;
  endColumn?: number;
  title?: string;
}): string {
  if (!options || Object.keys(options).length === 0) {
    return "";
  }

  const params: string[] = [];

  if (options.file) params.push(`file=${options.file}`);
  if (options.line) params.push(`line=${options.line}`);
  if (options.col) params.push(`col=${options.col}`);
  if (options.endLine) params.push(`endLine=${options.endLine}`);
  if (options.endColumn) params.push(`endColumn=${options.endColumn}`);
  if (options.title) params.push(`title=${options.title}`);

  return params.length > 0 ? ` ${params.join(",")}` : "";
}

/**
 * Batch set multiple environment variables.
 *
 * @example
 * ```typescript
 * import { setEnvVars } from '@kjanat/gha-env-validator';
 *
 * setEnvVars({
 *   NODE_ENV: 'production',
 *   API_URL: 'https://api.example.com',
 *   DEBUG: 'false',
 * });
 * ```
 *
 * @param vars - Object with variable names and values
 */
export function setEnvVars(vars: Record<string, string>): void {
  for (const [name, value] of Object.entries(vars)) {
    setEnvVar(name, value);
  }
}

/**
 * Batch set multiple outputs.
 *
 * @example
 * ```typescript
 * import { setOutputs } from '@kjanat/gha-env-validator';
 *
 * setOutputs({
 *   version: '1.2.3',
 *   commit_sha: 'abc123',
 *   build_time: new Date().toISOString(),
 * });
 * ```
 *
 * @param outputs - Object with output names and values
 */
export function setOutputs(outputs: Record<string, string>): void {
  for (const [name, value] of Object.entries(outputs)) {
    setOutput(name, value);
  }
}

/**
 * Adds a job summary with a title and markdown content.
 *
 * @example
 * ```typescript
 * import { addSummary } from '@kjanat/gha-env-validator';
 *
 * addSummary('Build Results', `
 * - Tests: ✅ Passed
 * - Coverage: 95%
 * - Time: 2m 34s
 * `);
 * ```
 *
 * @param title - Summary title
 * @param markdown - Markdown content
 */
export function addSummary(title: string, markdown: string): void {
  addJobSummary(`## ${title}\n\n${markdown}\n\n`);
}

/**
 * Adds a table to the job summary.
 *
 * @example
 * ```typescript
 * import { addSummaryTable } from '@kjanat/gha-env-validator';
 *
 * addSummaryTable(
 *   ['Metric', 'Value'],
 *   [
 *     ['Tests', '42 passed'],
 *     ['Coverage', '95%'],
 *     ['Duration', '2m 34s'],
 *   ]
 * );
 * ```
 *
 * @param headers - Table headers
 * @param rows - Table rows
 */
export function addSummaryTable(headers: string[], rows: string[][]): void {
  let table = `| ${headers.join(" | ")} |\n`;
  table += `| ${headers.map(() => "---").join(" | ")} |\n`;

  for (const row of rows) {
    table += `| ${row.join(" | ")} |\n`;
  }

  addJobSummary(`${table}\n`);
}

/**
 * Sets a failed status and error message.
 *
 * @example
 * ```typescript
 * import { setFailed } from '@kjanat/gha-env-validator';
 *
 * if (buildFailed) {
 *   setFailed('Build failed with errors');
 * }
 * ```
 *
 * @param message - Failure message
 */
export function setFailed(message: string): void {
  error(message);
  process.exitCode = 1;
}
