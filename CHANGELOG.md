# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-11-17

### 🎉 Major Features

#### Type-Safe Zod Metadata Utilities

- **New `metadata.ts` module** with comprehensive Zod schema introspection
  utilities
  - `getSchemaMetadata()` - Safely extract metadata from schemas
  - `getZodTypeName()` - Get internal Zod type names
  - `isBooleanSchema()` - Check if schema represents boolean type
  - `isSchemaOptional()` - Determine if schema is optional
  - `isZodEnum()` - Type guard for enum schemas
  - `getEnumValues()` - Extract enum values safely
- **Eliminated all 21 explicit `any` types** across the codebase for improved
  type safety
- Enables powerful tooling scenarios: form builders, documentation generators,
  validation reporters

### 🏗️ Build System Migration

#### Dual ESM+CJS Support via tsdown

- Migrated from TypeScript compiler to **tsdown** for modern build pipeline
- Ships dual module formats:
  - `.mjs` files for ESM consumers
  - `.cjs` files for CommonJS compatibility
  - Separate `.d.mts` and `.d.cts` type declarations
- Improved tree-shaking with explicit external dependencies
- Target platform: Node 18+ with optimized output

### 🔧 Developer Experience Improvements

#### Code Quality Tooling

- **Biome 2.3.6** for fast, opinionated linting
- **Dprint** for consistent code formatting across TypeScript, JSON, Markdown
- **Lefthook** pre-commit hooks ensuring quality before commits
- Enforced 100% test coverage across all modules

#### Modern CI/CD Pipeline

- **Split CI workflow** into dedicated `lint` and `test` jobs for better
  parallelization
- **Codecov integration** for test coverage reporting with LCOV format
- **Enhanced publish workflow**:
  - Planning job with dry-run capability
  - Comprehensive step summaries
  - OIDC trusted publishing support
  - Provenance attestation for supply chain security

### 📚 Documentation Improvements

- **VitePress 1.6.4** documentation site (downgraded from alpha for stability)
- **Refreshed README** with:
  - Modern shield.io badges in "for-the-badge" style
  - Collapsible sections for better navigation
  - Comprehensive metadata usage examples
  - Path alias documentation

### 🐛 Bug Fixes

- Fixed CI build order: tests now import from package name correctly
- Removed unnecessary backslash escapes in GitHub Actions syntax
- Corrected publish workflow conditional logic for manual dispatch
- Fixed TypeScript path aliases configuration

### 🔄 Internal Changes

- Consistent code formatting with trailing commas
- Import path optimization using `~/` aliases
- Removed `@bun-security-scanner/osv` dependency
- Updated all examples to use package imports instead of relative paths
- Modernized GitHub workflows to support both `master` and `main` branches

### 📦 Dependencies

- ⬆️ Upgraded:
  - `@biomejs/biome` 2.3.5 → 2.3.6
  - `vitepress` 2.0.0-alpha.13 → 1.6.4 (stability improvement)
- ➕ Added:
  - `tsdown` 0.16.5 (build system)
- ➖ Removed:
  - `@bun-security-scanner/osv` (security scanner)

### 💔 Breaking Changes

None - This release maintains full backward compatibility with v0.1.1.

### 📈 Statistics

- **21 explicit `any` types eliminated**
- **100% test coverage maintained**
- **Bundle size**: ~15KB (slight increase due to metadata utilities)
- **34 new tests added** for comprehensive event system coverage

## [0.1.1] - 2025-11-17

### 🚀 Major Enhancements

#### Complete Feature Set

- **GitHub Context Utilities** (12 functions for workflow context)
  - Branch/tag detection, PR info, runner details
  - Commit SHA, workflow run info, API URLs
- **Action Input Validation** (5 functions)
  - Typed input retrieval with Zod schema validation
  - Boolean parsing, multiline input handling
- **Workflow Commands** (20+ helper functions)
  - Environment variables, step outputs, job summaries
  - Log annotations (debug, notice, warning, error)
  - Log grouping, secret masking, PATH modification
- **Event System** (70+ event types)
  - Type-safe event payload access
  - Event type guards and helpers
  - Full @octokit/webhooks-types integration

#### Documentation & Developer Experience

- **VitePress Documentation Site**
  - Complete guide with 9 pages
  - API reference, examples, quick-start
  - Auto-deploy to GitHub Pages
- **100% Test Coverage**
  - 106 comprehensive tests
  - All modules fully tested
  - Coverage reporting with detailed metrics
- **Developer Tooling**
  - Lefthook pre-commit hooks
  - Biome linting + Dprint formatting
  - TypeScript path aliases (`~/` imports)

#### CI/CD & Publishing

- **GitHub Actions Workflows**
  - CI pipeline with matrix testing
  - Automated docs deployment
  - NPM publish workflow with OIDC
- **NPM Configuration**
  - Configured for public registry
  - Trusted publishing with provenance
  - Fixed scoped package publishing

### 📦 Dependencies

- ➕ Added: @octokit/webhooks-types, vitepress, lefthook
- ⬆️ Upgraded: Multiple development dependencies

### 🐛 Bug Fixes

- Fixed npm registry configuration for scoped packages
- Corrected publish workflow conditionals
- Fixed CI build order (build before tests)
- Removed unnecessary backslash escapes in workflows
- Made CI robust for different environments

### 📈 Statistics

- **Lines of Code**: ~7,400 additions
- **Test Cases**: 106 (from 18 → 106)
- **Coverage**: 100% across all modules
- **Bundle Size**: 26.16 KB

## [0.1.0] - 2025-11-17

### 🎉 Initial Release

#### Core Features

- **Type-safe GitHub Actions environment validation**
  - 43 pre-built Zod schemas for all GHA default variables
  - Full TypeScript support with type inference
  - IntelliSense via ProcessEnv augmentation

#### Validation System

- **Safe validation methods**
  - `validateGitHubEnv()` - Validate all GHA variables
  - `safeValidateGitHubEnv()` - Non-throwing variant
  - `validateCustomEnv()` - Custom schema validation
  - `createEnvSchema()` - Schema builder utilities

#### Developer Experience

- **Rich metadata using Zod v4**
  - Categories: environment, action, actor, git, paths, etc.
  - Human-readable titles and descriptions
  - Example values for each variable
  - JSDoc hover documentation

#### Testing & Examples

- 18 initial test cases
- 4 usage examples demonstrating core features
- Example integrations for common scenarios

### 📦 Initial Dependencies

- zod: ^4.0.0-beta.1
- TypeScript: ^5.0.0
- Bun test runner

### 📝 Initial Documentation

- Comprehensive README
- Usage examples
- API documentation
- MIT License

## [0.0.1] - 2025-11-12

### 🦇 Project Genesis

- Initial commit: "batman"
- Project initialization

[0.2.0]: https://github.com/kjanat/gha-env-validator/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/kjanat/gha-env-validator/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/kjanat/gha-env-validator/compare/d077d28...v0.1.0
