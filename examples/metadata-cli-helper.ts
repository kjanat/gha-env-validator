/**
 * CLI Helper Example
 *
 * Uses schema metadata to build interactive CLI tools
 * for exploring and understanding GitHub Actions variables.
 */

import { githubActionsSchema } from "../src/index";

// CLI command: Show all variables in a category
function showCategory(category: string) {
  console.log(`\n📁 ${category.toUpperCase()} Variables:\n`);

  for (const [name, schema] of Object.entries(githubActionsSchema.shape)) {
    const meta = (schema as any)._zod?.meta || {};

    if (meta.category === category) {
      console.log(`  ${name}`);
      console.log(`    ${meta.title || "No title"}`);
      console.log(`    Example: ${meta.example || "N/A"}`);
      console.log();
    }
  }
}

// CLI command: Search variables by keyword
function searchVariables(keyword: string) {
  console.log(`\n🔍 Search results for "${keyword}":\n`);

  for (const [name, schema] of Object.entries(githubActionsSchema.shape)) {
    const meta = (schema as any)._zod?.meta || {};
    const searchText =
      `${name} ${meta.title} ${meta.description}`.toLowerCase();

    if (searchText.includes(keyword.toLowerCase())) {
      console.log(`  ✓ ${name}`);
      console.log(`    ${meta.description || "No description"}`);
      console.log();
    }
  }
}

// CLI command: Show variable details
function showVariable(name: string) {
  const schema = (githubActionsSchema.shape as any)[name];

  if (!schema) {
    console.log(`❌ Variable "${name}" not found`);
    return;
  }

  const meta = schema._zod?.meta || {};

  console.log(`\n📋 ${name}\n`);
  console.log(`Title:       ${meta.title || "N/A"}`);
  console.log(`Category:    ${meta.category || "N/A"}`);
  console.log(`Description: ${meta.description || "N/A"}`);
  console.log(`Example:     ${meta.example || "N/A"}`);
  console.log();
}

// CLI command: List all categories
function listCategories() {
  const categories = new Set<string>();

  for (const [_, schema] of Object.entries(githubActionsSchema.shape)) {
    const meta = (schema as any)._zod?.meta || {};
    if (meta.category) {
      categories.add(meta.category);
    }
  }

  console.log("\n📚 Available Categories:\n");
  Array.from(categories)
    .sort()
    .forEach((cat) => console.log(`  - ${cat}`));
  console.log();
}

// Example usage
console.log("=".repeat(60));
console.log("GitHub Actions Environment Variables CLI Helper");
console.log("=".repeat(60));

listCategories();
showCategory("git");
searchVariables("sha");
showVariable("GITHUB_SHA");

console.log("\n💡 Use this pattern to build:");
console.log("  - Interactive CLIs");
console.log("  - Documentation browsers");
console.log("  - Variable explorers");
console.log("  - Help systems");
