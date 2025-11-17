**@kjanat/gha-env-validator**

---

# @kjanat/gha-env-validator

@kjanat/gha-env-validator

Type-safe GitHub Actions environment variable validation with IntelliSense support.

## Example

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

const env = validateEnv();
console.log(env.GITHUB_SHA); // Type-safe with IntelliSense
```

## Namespaces

- [z](@kjanat/namespaces/z/index.md)

## Interfaces

### ValidateEnvOptions

Defined in: src/validate.ts:7

Options for environment variable validation

#### Properties

##### env?

> `optional` **env**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: src/validate.ts:11

Environment object to validate (defaults to process.env)

##### strict?

> `optional` **strict**: `boolean`

Defined in: src/validate.ts:17

Whether to strip unknown environment variables from the result

###### Default

```ts
false;
```

---

### ZodError

Defined in: node\_modules/zod/v4/classic/errors.d.cts:6

An Error-like class used to store Zod validation issues.

#### Extends

- [`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror)\<`T`\>

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: `object`

Defined in: node\_modules/zod/v4/core/errors.d.cts:124

###### def

> **def**: [`$ZodIssue`](@kjanat/namespaces/z/namespaces/core/index.md#zodissue)[]

###### output

> **output**: `T`

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`_zod`](@kjanat/namespaces/z/namespaces/core/index.md#_zod-45)

##### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`cause`](@kjanat/namespaces/z/namespaces/core/index.md#cause-2)

##### ~~isEmpty~~

> **isEmpty**: `boolean`

Defined in: node\_modules/zod/v4/classic/errors.d.cts:18

###### Deprecated

Check `err.issues.length === 0` instead.

##### issues

> **issues**: [`$ZodIssue`](@kjanat/namespaces/z/namespaces/core/index.md#zodissue)[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:123

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`issues`](@kjanat/namespaces/z/namespaces/core/index.md#issues-2)

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`message`](@kjanat/namespaces/z/namespaces/core/index.md#message-2)

##### name

> **name**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:129

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`name`](@kjanat/namespaces/z/namespaces/core/index.md#name-2)

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:128

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`stack`](@kjanat/namespaces/z/namespaces/core/index.md#stack-2)

##### type

> **type**: `T`

Defined in: node\_modules/zod/v4/core/errors.d.cts:122

###### Inherited from

[`$ZodError`](@kjanat/namespaces/z/namespaces/core/index.md#zoderror).[`type`](@kjanat/namespaces/z/namespaces/core/index.md#type-22)

#### Methods

##### ~~addIssue()~~

> **addIssue**(`issue`): `void`

Defined in: node\_modules/zod/v4/classic/errors.d.cts:14

###### Parameters

###### issue

[`$ZodIssue`](@kjanat/namespaces/z/namespaces/core/index.md#zodissue)

###### Returns

`void`

###### Deprecated

Push directly to `.issues` instead.

##### ~~addIssues()~~

> **addIssues**(`issues`): `void`

Defined in: node\_modules/zod/v4/classic/errors.d.cts:16

###### Parameters

###### issues

[`$ZodIssue`](@kjanat/namespaces/z/namespaces/core/index.md#zodissue)[]

###### Returns

`void`

###### Deprecated

Push directly to `.issues` instead.

##### flatten()

###### Call Signature

> **flatten**(): [`$ZodFlattenedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodflattenederror)\<`T`\>

Defined in: node\_modules/zod/v4/classic/errors.d.cts:11

###### Returns

[`$ZodFlattenedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodflattenederror)\<`T`\>

###### Deprecated

Use the `z.treeifyError(err)` function instead.

###### Call Signature

> **flatten**\<`U`\>(`mapper`): [`$ZodFlattenedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodflattenederror)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/classic/errors.d.cts:12

###### Type Parameters

###### U

`U`

###### Parameters

###### mapper

(`issue`) => `U`

###### Returns

[`$ZodFlattenedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodflattenederror)\<`T`, `U`\>

##### format()

###### Call Signature

> **format**(): [`$ZodFormattedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodformattederror)\<`T`\>

Defined in: node\_modules/zod/v4/classic/errors.d.cts:8

###### Returns

[`$ZodFormattedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodformattederror)\<`T`\>

###### Deprecated

Use the `z.treeifyError(err)` function instead.

###### Call Signature

> **format**\<`U`\>(`mapper`): [`$ZodFormattedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodformattederror)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/classic/errors.d.cts:9

###### Type Parameters

###### U

`U`

###### Parameters

###### mapper

(`issue`) => `U`

###### Returns

[`$ZodFormattedError`](@kjanat/namespaces/z/namespaces/core/index.md#zodformattederror)\<`T`, `U`\>

## Type Aliases

### GitHubActionsEnv

> **GitHubActionsEnv** = [`output`](@kjanat/namespaces/z/namespaces/core/index.md#output-11)\<_typeof_ [`githubActionsSchema`](#githubactionsschema)\>

Defined in: src/schemas/github-defaults.ts:431

Inferred TypeScript type from the GitHub Actions schema.
This represents the validated and transformed environment variables.

---

### ZodError

> **ZodError** = [`$constructor`](@kjanat/namespaces/z/namespaces/core/index.md#constructor-5)\<[`ZodError`](#zoderror-1)\<`unknown`\>, [`$ZodIssue`](@kjanat/namespaces/z/namespaces/core/index.md#zodissue)[]\>

Defined in: node\_modules/zod/v4/classic/errors.d.cts:6

## Variables

### githubActionsSchema

> `const` **githubActionsSchema**: [`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<\{ `CI`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodUnion`](@kjanat/namespaces/z/index.md#zodunion)\<\[[`ZodLiteral`](@kjanat/namespaces/z/index.md#zodliteral)\<`"true"`\>, [`ZodBoolean`](@kjanat/namespaces/z/index.md#zodboolean)\]\>, [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`boolean`, `boolean` \| `"true"`\>\>; `GITHUB_ACTION`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_ACTION_PATH`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring)\>; `GITHUB_ACTION_REPOSITORY`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring)\>; `GITHUB_ACTIONS`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodUnion`](@kjanat/namespaces/z/index.md#zodunion)\<\[[`ZodLiteral`](@kjanat/namespaces/z/index.md#zodliteral)\<`"true"`\>, [`ZodBoolean`](@kjanat/namespaces/z/index.md#zodboolean)\]\>, [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`boolean`, `boolean` \| `"true"`\>\>; `GITHUB_ACTOR`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_ACTOR_ID`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_API_URL`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_BASE_REF`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring)\>; `GITHUB_ENV`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_EVENT_NAME`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_EVENT_PATH`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_GRAPHQL_URL`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_HEAD_REF`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring)\>; `GITHUB_JOB`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_OUTPUT`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_PATH`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_REF`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_REF_NAME`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_REF_PROTECTED`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`boolean`, `string`\>\>\>; `GITHUB_REF_TYPE`: [`ZodEnum`](@kjanat/namespaces/z/index.md#zodenum)\<\{ `branch`: `"branch"`; `tag`: `"tag"`; \}\>; `GITHUB_REPOSITORY`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_REPOSITORY_ID`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_REPOSITORY_OWNER`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_REPOSITORY_OWNER_ID`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_RETENTION_DAYS`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_RUN_ATTEMPT`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_RUN_ID`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_RUN_NUMBER`: [`ZodPipe`](@kjanat/namespaces/z/index.md#zodpipe)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring), [`ZodTransform`](@kjanat/namespaces/z/index.md#zodtransform)\<`number`, `string`\>\>; `GITHUB_SERVER_URL`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_SHA`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_STEP_SUMMARY`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_TRIGGERING_ACTOR`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_WORKFLOW`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_WORKFLOW_REF`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_WORKFLOW_SHA`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `GITHUB_WORKSPACE`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `RUNNER_ARCH`: [`ZodEnum`](@kjanat/namespaces/z/index.md#zodenum)\<\{ `ARM`: `"ARM"`; `ARM64`: `"ARM64"`; `X64`: `"X64"`; `X86`: `"X86"`; \}\>; `RUNNER_DEBUG`: [`ZodOptional`](@kjanat/namespaces/z/index.md#zodoptional)\<[`ZodString`](@kjanat/namespaces/z/index.md#zodstring)\>; `RUNNER_ENVIRONMENT`: [`ZodEnum`](@kjanat/namespaces/z/index.md#zodenum)\<\{ `github-hosted`: `"github-hosted"`; `self-hosted`: `"self-hosted"`; \}\>; `RUNNER_NAME`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `RUNNER_OS`: [`ZodEnum`](@kjanat/namespaces/z/index.md#zodenum)\<\{ `Linux`: `"Linux"`; `macOS`: `"macOS"`; `Windows`: `"Windows"`; \}\>; `RUNNER_TEMP`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); `RUNNER_TOOL_CACHE`: [`ZodString`](@kjanat/namespaces/z/index.md#zodstring); \}, [`$strip`](@kjanat/namespaces/z/namespaces/core/index.md#strip)\>

Defined in: src/schemas/github-defaults.ts:11

Zod schema for GitHub Actions default environment variables.

These variables are automatically set by GitHub Actions in every workflow run.
Variables marked optional are only available in specific contexts (e.g., pull requests).

#### See

https://docs.github.com/en/actions/reference/workflows-and-actions/variables

## Functions

### addJobSummary()

> **addJobSummary**(`markdown`): `void`

Defined in: src/workflow-commands.ts:177

Appends markdown content to the job summary.

Job summaries appear on the workflow run summary page.
Maximum 1MB per step, 20 summaries per job.

#### Parameters

##### markdown

`string`

Markdown content to append

#### Returns

`void`

#### Example

```typescript
import { addJobSummary } from "@kjanat/gha-env-validator";

addJobSummary("## Build Results\n\n✅ All tests passed!");
addJobSummary("| Metric | Value |\n|--------|-------|\n| Coverage | 95% |");
```

---

### addPath()

> **addPath**(`path`): `void`

Defined in: src/workflow-commands.ts:149

Adds a directory to the system PATH for subsequent steps.

#### Parameters

##### path

`string`

Directory path to add to PATH

#### Returns

`void`

#### Example

```typescript
import { addPath } from "@kjanat/gha-env-validator";

addPath("/usr/local/custom-tools");
addPath("$HOME/.local/bin");
```

---

### addSummary()

> **addSummary**(`title`, `markdown`): `void`

Defined in: src/workflow-commands.ts:544

Adds a job summary with a title and markdown content.

#### Parameters

##### title

`string`

Summary title

##### markdown

`string`

Markdown content

#### Returns

`void`

#### Example

```typescript
import { addSummary } from "@kjanat/gha-env-validator";

addSummary(
  "Build Results",
  `
- Tests: ✅ Passed
- Coverage: 95%
- Time: 2m 34s
`,
);
```

---

### addSummaryTable()

> **addSummaryTable**(`headers`, `rows`): `void`

Defined in: src/workflow-commands.ts:568

Adds a table to the job summary.

#### Parameters

##### headers

`string`[]

Table headers

##### rows

`string`[][]

Table rows

#### Returns

`void`

#### Example

```typescript
import { addSummaryTable } from "@kjanat/gha-env-validator";

addSummaryTable(
  ["Metric", "Value"],
  [
    ["Tests", "42 passed"],
    ["Coverage", "95%"],
    ["Duration", "2m 34s"],
  ],
);
```

---

### assertGitHubActions()

> **assertGitHubActions**(): `void`

Defined in: src/workflow-commands.ts:450

Asserts that the code is running in GitHub Actions, throws otherwise.

#### Returns

`void`

#### Example

```typescript
import { assertGitHubActions } from "@kjanat/gha-env-validator";

assertGitHubActions(); // Throws if not in GHA
setEnvVar("VAR", "value"); // Safe to call
```

#### Throws

Error if not running in GitHub Actions

---

### clearJobSummary()

> **clearJobSummary**(): `void`

Defined in: src/workflow-commands.ts:200

Clears the current step's job summary.

#### Returns

`void`

#### Example

```typescript
import { clearJobSummary } from "@kjanat/gha-env-validator";

clearJobSummary();
addJobSummary("# Fresh summary content");
```

---

### createCustomEnvSchema()

> **createCustomEnvSchema**\<`T`\>(`customSchema`): [`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<`T`\>

Defined in: src/create-env-schema.ts:46

Creates a schema for ONLY custom environment variables (without GitHub Actions defaults).
Useful when you want to validate custom vars independently or in non-GHA contexts.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### customSchema

`T`

Zod schema object for your environment variables

#### Returns

[`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<`T`\>

Zod schema without GitHub Actions defaults

#### Example

```typescript
import { createCustomEnvSchema } from "@kjanat/gha-env-validator";
import { z } from "zod";

const schema = createCustomEnvSchema({
  DATABASE_URL: z.string().url(),
  PORT: z.string().transform(Number),
});
```

---

### createEnvSchema()

> **createEnvSchema**\<`T`\>(`customSchema`): [`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<\{ \[k in string \| number \| symbol\]: ((("CI" \| "GITHUB\_ACTIONS" \| "GITHUB\_REF\_PROTECTED" \| "GITHUB\_ACTION" \| "GITHUB\_ACTION\_PATH" \| "GITHUB\_ACTION\_REPOSITORY" \| "GITHUB\_ACTOR" \| "GITHUB\_ACTOR\_ID" \| "GITHUB\_TRIGGERING\_ACTOR" \| "GITHUB\_API\_URL" \| "GITHUB\_GRAPHQL\_URL" \| "GITHUB\_SERVER\_URL" \| "GITHUB\_BASE\_REF" \| "GITHUB\_HEAD\_REF" \| "GITHUB\_ENV" \| "GITHUB\_EVENT\_PATH" \| "GITHUB\_OUTPUT" \| "GITHUB\_PATH" \| "GITHUB\_STEP\_SUMMARY" \| "GITHUB\_EVENT\_NAME" \| "GITHUB\_JOB" \| "GITHUB\_REF" \| "GITHUB\_REF\_NAME" \| "GITHUB\_REF\_TYPE" \| "GITHUB\_REPOSITORY" \| "GITHUB\_REPOSITORY\_ID" \| "GITHUB\_REPOSITORY\_OWNER" \| "GITHUB\_REPOSITORY\_OWNER\_ID" \| "GITHUB\_RETENTION\_DAYS" \| "GITHUB\_RUN\_ATTEMPT" \| "GITHUB\_RUN\_ID" \| "GITHUB\_RUN\_NUMBER" \| "GITHUB\_SHA" \| "GITHUB\_WORKFLOW" \| "GITHUB\_WORKFLOW\_REF" \| "GITHUB\_WORKFLOW\_SHA" \| "GITHUB\_WORKSPACE" \| "RUNNER\_ARCH" \| "RUNNER\_DEBUG" \| "RUNNER\_ENVIRONMENT" \| "RUNNER\_NAME" \| "RUNNER\_OS" \| "RUNNER\_TEMP" \| "RUNNER\_TOOL\_CACHE") & keyof T) extends never ? \{ CI: ZodPipe\<ZodUnion\<\[ZodLiteral\<"true"\>, ZodBoolean\]\>, ZodTransform\<boolean, boolean \| "true"\>\>; GITHUB\_ACTION: ZodString; GITHUB\_ACTION\_PATH: ZodOptional\<ZodString\>; GITHUB\_ACTION\_REPOSITORY: ZodOptional\<ZodString\>; GITHUB\_ACTIONS: ZodPipe\<ZodUnion\<\[ZodLiteral\<"true"\>, ZodBoolean\]\>, ZodTransform\<boolean, boolean \| "true"\>\>; GITHUB\_ACTOR: ZodString; GITHUB\_ACTOR\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_API\_URL: ZodString; GITHUB\_BASE\_REF: ZodOptional\<ZodString\>; GITHUB\_ENV: ZodString; GITHUB\_EVENT\_NAME: ZodString; GITHUB\_EVENT\_PATH: ZodString; GITHUB\_GRAPHQL\_URL: ZodString; GITHUB\_HEAD\_REF: ZodOptional\<ZodString\>; GITHUB\_JOB: ZodString; GITHUB\_OUTPUT: ZodString; GITHUB\_PATH: ZodString; GITHUB\_REF: ZodString; GITHUB\_REF\_NAME: ZodString; GITHUB\_REF\_PROTECTED: ZodOptional\<ZodPipe\<ZodString, ZodTransform\<boolean, string\>\>\>; GITHUB\_REF\_TYPE: ZodEnum\<\{ branch: "branch"; tag: "tag" \}\>; GITHUB\_REPOSITORY: ZodString; GITHUB\_REPOSITORY\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_REPOSITORY\_OWNER: ZodString; GITHUB\_REPOSITORY\_OWNER\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RETENTION\_DAYS: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ATTEMPT: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_NUMBER: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_SERVER\_URL: ZodString; GITHUB\_SHA: ZodString; GITHUB\_STEP\_SUMMARY: ZodString; GITHUB\_TRIGGERING\_ACTOR: ZodString; GITHUB\_WORKFLOW: ZodString; GITHUB\_WORKFLOW\_REF: ZodString; GITHUB\_WORKFLOW\_SHA: ZodString; GITHUB\_WORKSPACE: ZodString; RUNNER\_ARCH: ZodEnum\<\{ ARM: "ARM"; ARM64: "ARM64"; X64: "X64"; X86: "X86" \}\>; RUNNER\_DEBUG: ZodOptional\<ZodString\>; RUNNER\_ENVIRONMENT: ZodEnum\<\{ github-hosted: "github-hosted"; self-hosted: "self-hosted" \}\>; RUNNER\_NAME: ZodString; RUNNER\_OS: ZodEnum\<\{ Linux: "Linux"; macOS: "macOS"; Windows: "Windows" \}\>; RUNNER\_TEMP: ZodString; RUNNER\_TOOL\_CACHE: ZodString \} & T : \{ \[K in "CI" \| "GITHUB\_ACTIONS" \| "GITHUB\_REF\_PROTECTED" \| "GITHUB\_ACTION" \| "GITHUB\_ACTION\_PATH" \| "GITHUB\_ACTION\_REPOSITORY" \| "GITHUB\_ACTOR" \| "GITHUB\_ACTOR\_ID" \| "GITHUB\_TRIGGERING\_ACTOR" \| "GITHUB\_API\_URL" \| "GITHUB\_GRAPHQL\_URL" \| "GITHUB\_SERVER\_URL" \| "GITHUB\_BASE\_REF" \| "GITHUB\_HEAD\_REF" \| "GITHUB\_ENV" \| "GITHUB\_EVENT\_PATH" \| "GITHUB\_OUTPUT" \| "GITHUB\_PATH" \| "GITHUB\_STEP\_SUMMARY" \| "GITHUB\_EVENT\_NAME" \| "GITHUB\_JOB" \| "GITHUB\_REF" \| "GITHUB\_REF\_NAME" \| "GITHUB\_REF\_TYPE" \| "GITHUB\_REPOSITORY" \| "GITHUB\_REPOSITORY\_ID" \| "GITHUB\_REPOSITORY\_OWNER" \| "GITHUB\_REPOSITORY\_OWNER\_ID" \| "GITHUB\_RETENTION\_DAYS" \| "GITHUB\_RUN\_ATTEMPT" \| "GITHUB\_RUN\_ID" \| "GITHUB\_RUN\_NUMBER" \| "GITHUB\_SHA" \| "GITHUB\_WORKFLOW" \| "GITHUB\_WORKFLOW\_REF" \| "GITHUB\_WORKFLOW\_SHA" \| "GITHUB\_WORKSPACE" \| "RUNNER\_ARCH" \| "RUNNER\_DEBUG" \| "RUNNER\_ENVIRONMENT" \| "RUNNER\_NAME" \| "RUNNER\_OS" \| "RUNNER\_TEMP" \| "RUNNER\_TOOL\_CACHE" as K extends keyof T ? never : K\]: \{ CI: ZodPipe\<ZodUnion\<\[(...), (...)\]\>, ZodTransform\<boolean, (...) \| (...) \| (...)\>\>; GITHUB\_ACTION: ZodString; GITHUB\_ACTION\_PATH: ZodOptional\<ZodString\>; GITHUB\_ACTION\_REPOSITORY: ZodOptional\<ZodString\>; GITHUB\_ACTIONS: ZodPipe\<ZodUnion\<\[(...), (...)\]\>, ZodTransform\<boolean, (...) \| (...) \| (...)\>\>; GITHUB\_ACTOR: ZodString; GITHUB\_ACTOR\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_API\_URL: ZodString; GITHUB\_BASE\_REF: ZodOptional\<ZodString\>; GITHUB\_ENV: ZodString; GITHUB\_EVENT\_NAME: ZodString; GITHUB\_EVENT\_PATH: ZodString; GITHUB\_GRAPHQL\_URL: ZodString; GITHUB\_HEAD\_REF: ZodOptional\<ZodString\>; GITHUB\_JOB: ZodString; GITHUB\_OUTPUT: ZodString; GITHUB\_PATH: ZodString; GITHUB\_REF: ZodString; GITHUB\_REF\_NAME: ZodString; GITHUB\_REF\_PROTECTED: ZodOptional\<ZodPipe\<ZodString, ZodTransform\<(...), (...)\>\>\>; GITHUB\_REF\_TYPE: ZodEnum\<\{ branch: "branch"; tag: "tag" \}\>; GITHUB\_REPOSITORY: ZodString; GITHUB\_REPOSITORY\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_REPOSITORY\_OWNER: ZodString; GITHUB\_REPOSITORY\_OWNER\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RETENTION\_DAYS: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ATTEMPT: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_NUMBER: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_SERVER\_URL: ZodString; GITHUB\_SHA: ZodString; GITHUB\_STEP\_SUMMARY: ZodString; GITHUB\_TRIGGERING\_ACTOR: ZodString; GITHUB\_WORKFLOW: ZodString; GITHUB\_WORKFLOW\_REF: ZodString; GITHUB\_WORKFLOW\_SHA: ZodString; GITHUB\_WORKSPACE: ZodString; RUNNER\_ARCH: ZodEnum\<\{ ARM: "ARM"; ARM64: "ARM64"; X64: "X64"; X86: "X86" \}\>; RUNNER\_DEBUG: ZodOptional\<ZodString\>; RUNNER\_ENVIRONMENT: ZodEnum\<\{ github-hosted: "github-hosted"; self-hosted: "self-hosted" \}\>; RUNNER\_NAME: ZodString; RUNNER\_OS: ZodEnum\<\{ Linux: "Linux"; macOS: "macOS"; Windows: "Windows" \}\>; RUNNER\_TEMP: ZodString; RUNNER\_TOOL\_CACHE: ZodString \}\[K\] \} & \{ \[K in string \| number \| symbol\]: T\[K\] \})\[k\] \}, [`$strip`](@kjanat/namespaces/z/namespaces/core/index.md#strip)\>

Defined in: src/create-env-schema.ts:24

Creates a custom environment variable schema by extending the default GitHub Actions schema.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### customSchema

`T`

Zod schema object for your custom environment variables

#### Returns

[`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<\{ \[k in string \| number \| symbol\]: ((("CI" \| "GITHUB\_ACTIONS" \| "GITHUB\_REF\_PROTECTED" \| "GITHUB\_ACTION" \| "GITHUB\_ACTION\_PATH" \| "GITHUB\_ACTION\_REPOSITORY" \| "GITHUB\_ACTOR" \| "GITHUB\_ACTOR\_ID" \| "GITHUB\_TRIGGERING\_ACTOR" \| "GITHUB\_API\_URL" \| "GITHUB\_GRAPHQL\_URL" \| "GITHUB\_SERVER\_URL" \| "GITHUB\_BASE\_REF" \| "GITHUB\_HEAD\_REF" \| "GITHUB\_ENV" \| "GITHUB\_EVENT\_PATH" \| "GITHUB\_OUTPUT" \| "GITHUB\_PATH" \| "GITHUB\_STEP\_SUMMARY" \| "GITHUB\_EVENT\_NAME" \| "GITHUB\_JOB" \| "GITHUB\_REF" \| "GITHUB\_REF\_NAME" \| "GITHUB\_REF\_TYPE" \| "GITHUB\_REPOSITORY" \| "GITHUB\_REPOSITORY\_ID" \| "GITHUB\_REPOSITORY\_OWNER" \| "GITHUB\_REPOSITORY\_OWNER\_ID" \| "GITHUB\_RETENTION\_DAYS" \| "GITHUB\_RUN\_ATTEMPT" \| "GITHUB\_RUN\_ID" \| "GITHUB\_RUN\_NUMBER" \| "GITHUB\_SHA" \| "GITHUB\_WORKFLOW" \| "GITHUB\_WORKFLOW\_REF" \| "GITHUB\_WORKFLOW\_SHA" \| "GITHUB\_WORKSPACE" \| "RUNNER\_ARCH" \| "RUNNER\_DEBUG" \| "RUNNER\_ENVIRONMENT" \| "RUNNER\_NAME" \| "RUNNER\_OS" \| "RUNNER\_TEMP" \| "RUNNER\_TOOL\_CACHE") & keyof T) extends never ? \{ CI: ZodPipe\<ZodUnion\<\[ZodLiteral\<"true"\>, ZodBoolean\]\>, ZodTransform\<boolean, boolean \| "true"\>\>; GITHUB\_ACTION: ZodString; GITHUB\_ACTION\_PATH: ZodOptional\<ZodString\>; GITHUB\_ACTION\_REPOSITORY: ZodOptional\<ZodString\>; GITHUB\_ACTIONS: ZodPipe\<ZodUnion\<\[ZodLiteral\<"true"\>, ZodBoolean\]\>, ZodTransform\<boolean, boolean \| "true"\>\>; GITHUB\_ACTOR: ZodString; GITHUB\_ACTOR\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_API\_URL: ZodString; GITHUB\_BASE\_REF: ZodOptional\<ZodString\>; GITHUB\_ENV: ZodString; GITHUB\_EVENT\_NAME: ZodString; GITHUB\_EVENT\_PATH: ZodString; GITHUB\_GRAPHQL\_URL: ZodString; GITHUB\_HEAD\_REF: ZodOptional\<ZodString\>; GITHUB\_JOB: ZodString; GITHUB\_OUTPUT: ZodString; GITHUB\_PATH: ZodString; GITHUB\_REF: ZodString; GITHUB\_REF\_NAME: ZodString; GITHUB\_REF\_PROTECTED: ZodOptional\<ZodPipe\<ZodString, ZodTransform\<boolean, string\>\>\>; GITHUB\_REF\_TYPE: ZodEnum\<\{ branch: "branch"; tag: "tag" \}\>; GITHUB\_REPOSITORY: ZodString; GITHUB\_REPOSITORY\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_REPOSITORY\_OWNER: ZodString; GITHUB\_REPOSITORY\_OWNER\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RETENTION\_DAYS: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ATTEMPT: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_NUMBER: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_SERVER\_URL: ZodString; GITHUB\_SHA: ZodString; GITHUB\_STEP\_SUMMARY: ZodString; GITHUB\_TRIGGERING\_ACTOR: ZodString; GITHUB\_WORKFLOW: ZodString; GITHUB\_WORKFLOW\_REF: ZodString; GITHUB\_WORKFLOW\_SHA: ZodString; GITHUB\_WORKSPACE: ZodString; RUNNER\_ARCH: ZodEnum\<\{ ARM: "ARM"; ARM64: "ARM64"; X64: "X64"; X86: "X86" \}\>; RUNNER\_DEBUG: ZodOptional\<ZodString\>; RUNNER\_ENVIRONMENT: ZodEnum\<\{ github-hosted: "github-hosted"; self-hosted: "self-hosted" \}\>; RUNNER\_NAME: ZodString; RUNNER\_OS: ZodEnum\<\{ Linux: "Linux"; macOS: "macOS"; Windows: "Windows" \}\>; RUNNER\_TEMP: ZodString; RUNNER\_TOOL\_CACHE: ZodString \} & T : \{ \[K in "CI" \| "GITHUB\_ACTIONS" \| "GITHUB\_REF\_PROTECTED" \| "GITHUB\_ACTION" \| "GITHUB\_ACTION\_PATH" \| "GITHUB\_ACTION\_REPOSITORY" \| "GITHUB\_ACTOR" \| "GITHUB\_ACTOR\_ID" \| "GITHUB\_TRIGGERING\_ACTOR" \| "GITHUB\_API\_URL" \| "GITHUB\_GRAPHQL\_URL" \| "GITHUB\_SERVER\_URL" \| "GITHUB\_BASE\_REF" \| "GITHUB\_HEAD\_REF" \| "GITHUB\_ENV" \| "GITHUB\_EVENT\_PATH" \| "GITHUB\_OUTPUT" \| "GITHUB\_PATH" \| "GITHUB\_STEP\_SUMMARY" \| "GITHUB\_EVENT\_NAME" \| "GITHUB\_JOB" \| "GITHUB\_REF" \| "GITHUB\_REF\_NAME" \| "GITHUB\_REF\_TYPE" \| "GITHUB\_REPOSITORY" \| "GITHUB\_REPOSITORY\_ID" \| "GITHUB\_REPOSITORY\_OWNER" \| "GITHUB\_REPOSITORY\_OWNER\_ID" \| "GITHUB\_RETENTION\_DAYS" \| "GITHUB\_RUN\_ATTEMPT" \| "GITHUB\_RUN\_ID" \| "GITHUB\_RUN\_NUMBER" \| "GITHUB\_SHA" \| "GITHUB\_WORKFLOW" \| "GITHUB\_WORKFLOW\_REF" \| "GITHUB\_WORKFLOW\_SHA" \| "GITHUB\_WORKSPACE" \| "RUNNER\_ARCH" \| "RUNNER\_DEBUG" \| "RUNNER\_ENVIRONMENT" \| "RUNNER\_NAME" \| "RUNNER\_OS" \| "RUNNER\_TEMP" \| "RUNNER\_TOOL\_CACHE" as K extends keyof T ? never : K\]: \{ CI: ZodPipe\<ZodUnion\<\[(...), (...)\]\>, ZodTransform\<boolean, (...) \| (...) \| (...)\>\>; GITHUB\_ACTION: ZodString; GITHUB\_ACTION\_PATH: ZodOptional\<ZodString\>; GITHUB\_ACTION\_REPOSITORY: ZodOptional\<ZodString\>; GITHUB\_ACTIONS: ZodPipe\<ZodUnion\<\[(...), (...)\]\>, ZodTransform\<boolean, (...) \| (...) \| (...)\>\>; GITHUB\_ACTOR: ZodString; GITHUB\_ACTOR\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_API\_URL: ZodString; GITHUB\_BASE\_REF: ZodOptional\<ZodString\>; GITHUB\_ENV: ZodString; GITHUB\_EVENT\_NAME: ZodString; GITHUB\_EVENT\_PATH: ZodString; GITHUB\_GRAPHQL\_URL: ZodString; GITHUB\_HEAD\_REF: ZodOptional\<ZodString\>; GITHUB\_JOB: ZodString; GITHUB\_OUTPUT: ZodString; GITHUB\_PATH: ZodString; GITHUB\_REF: ZodString; GITHUB\_REF\_NAME: ZodString; GITHUB\_REF\_PROTECTED: ZodOptional\<ZodPipe\<ZodString, ZodTransform\<(...), (...)\>\>\>; GITHUB\_REF\_TYPE: ZodEnum\<\{ branch: "branch"; tag: "tag" \}\>; GITHUB\_REPOSITORY: ZodString; GITHUB\_REPOSITORY\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_REPOSITORY\_OWNER: ZodString; GITHUB\_REPOSITORY\_OWNER\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RETENTION\_DAYS: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ATTEMPT: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_ID: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_RUN\_NUMBER: ZodPipe\<ZodString, ZodTransform\<number, string\>\>; GITHUB\_SERVER\_URL: ZodString; GITHUB\_SHA: ZodString; GITHUB\_STEP\_SUMMARY: ZodString; GITHUB\_TRIGGERING\_ACTOR: ZodString; GITHUB\_WORKFLOW: ZodString; GITHUB\_WORKFLOW\_REF: ZodString; GITHUB\_WORKFLOW\_SHA: ZodString; GITHUB\_WORKSPACE: ZodString; RUNNER\_ARCH: ZodEnum\<\{ ARM: "ARM"; ARM64: "ARM64"; X64: "X64"; X86: "X86" \}\>; RUNNER\_DEBUG: ZodOptional\<ZodString\>; RUNNER\_ENVIRONMENT: ZodEnum\<\{ github-hosted: "github-hosted"; self-hosted: "self-hosted" \}\>; RUNNER\_NAME: ZodString; RUNNER\_OS: ZodEnum\<\{ Linux: "Linux"; macOS: "macOS"; Windows: "Windows" \}\>; RUNNER\_TEMP: ZodString; RUNNER\_TOOL\_CACHE: ZodString \}\[K\] \} & \{ \[K in string \| number \| symbol\]: T\[K\] \})\[k\] \}, [`$strip`](@kjanat/namespaces/z/namespaces/core/index.md#strip)\>

Combined schema with both GitHub Actions defaults and custom variables

#### Example

```typescript
import { createEnvSchema } from "@kjanat/gha-env-validator";
import { z } from "zod";

const schema = createEnvSchema({
  // Custom environment variables
  API_KEY: z.string().min(1),
  API_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  MAX_RETRIES: z.string().transform(Number),
});
```

---

### debug()

> **debug**(`message`): `void`

Defined in: src/workflow-commands.ts:226

Writes a debug message to the log.

Debug logging must be enabled by setting the ACTIONS_STEP_DEBUG secret to true.

#### Parameters

##### message

`string`

Debug message

#### Returns

`void`

#### Example

```typescript
import { debug } from "@kjanat/gha-env-validator";

debug("Processing item 5 of 10");
```

---

### endGroup()

> **endGroup**(): `void`

Defined in: src/workflow-commands.ts:386

Ends the current log group.

#### Returns

`void`

---

### error()

> **error**(`message`, `options?`): `void`

Defined in: src/workflow-commands.ts:302

Creates an error annotation in the workflow log.

#### Parameters

##### message

`string`

Error message

##### options?

Annotation options

###### col?

`number`

###### endColumn?

`number`

###### endLine?

`number`

###### file?

`string`

###### line?

`number`

###### title?

`string`

#### Returns

`void`

#### Example

```typescript
import { error } from "@kjanat/gha-env-validator";

error("Build failed");
error("Type mismatch", { file: "app.ts", line: 55, col: 12 });
```

---

### getActor()

> **getActor**(): `object`

Defined in: src/context.ts:231

Gets actor information.

#### Returns

`object`

Actor name and ID

##### id

> **id**: `number`

##### name

> **name**: `string`

##### triggering

> **triggering**: `string`

#### Example

```typescript
import { getActor } from "@kjanat/gha-env-validator";

const actor = getActor();
console.log(`Triggered by: ${actor.name} (${actor.id})`);
```

---

### getApiUrls()

> **getApiUrls**(): `object`

Defined in: src/context.ts:276

Gets all GitHub API URLs.

#### Returns

`object`

API, GraphQL, and server URLs

##### graphql

> **graphql**: `string`

##### rest

> **rest**: `string`

##### server

> **server**: `string`

#### Example

```typescript
import { getApiUrls } from "@kjanat/gha-env-validator";

const api = getApiUrls();
const response = await fetch(`${api.rest}/repos/${owner}/${repo}`);
```

---

### getBooleanInput()

> **getBooleanInput**(`name`, `options`): `boolean`

Defined in: src/inputs.ts:58

Gets a boolean input value.

Parses common boolean representations: true/false, yes/no, 1/0

#### Parameters

##### name

`string`

Input name

##### options

Input options

###### required?

`boolean`

#### Returns

`boolean`

Boolean value

#### Example

```typescript
import { getBooleanInput } from "@kjanat/gha-env-validator";

const dryRun = getBooleanInput("dry-run");
const skipTests = getBooleanInput("skip-tests", { required: true });
```

---

### getCommitSha()

> **getCommitSha**(`format`): `string`

Defined in: src/context.ts:64

Gets the current commit SHA.

#### Parameters

##### format

'full' or 'short' (7 chars)

`"full"` | `"short"`

#### Returns

`string`

Commit SHA

#### Example

```typescript
import { getCommitSha } from "@kjanat/gha-env-validator";

const sha = getCommitSha();
const shortSha = getCommitSha("short");
```

---

### getCurrentBranch()

> **getCurrentBranch**(): `string`

Defined in: src/context.ts:23

Gets the current branch name.

#### Returns

`string`

The current branch name

#### Example

```typescript
import { getCurrentBranch } from "@kjanat/gha-env-validator";

const branch = getCurrentBranch();
console.log(`Building branch: ${branch}`);
```

---

### getInput()

> **getInput**(`name`, `options`): `string` \| `undefined`

Defined in: src/inputs.ts:27

Gets an action input value.

Action inputs are passed as environment variables with the prefix INPUT_
and uppercased name. Spaces in input names are replaced with underscores.

#### Parameters

##### name

`string`

Input name (as defined in action.yml)

##### options

Input options

###### required?

`boolean`

#### Returns

`string` \| `undefined`

Input value, or undefined if not set

#### Example

```typescript
import { getInput } from "@kjanat/gha-env-validator";

const token = getInput("github-token");
const environment = getInput("environment", { required: true });
```

---

### getMultilineInput()

> **getMultilineInput**(`name`, `options`): `string`[]

Defined in: src/inputs.ts:101

Gets a multiline input value as an array.

#### Parameters

##### name

`string`

Input name

##### options

Input options

###### required?

`boolean`

#### Returns

`string`[]

Array of non-empty lines

#### Example

```typescript
import { getMultilineInput } from "@kjanat/gha-env-validator";

const files = getMultilineInput("files");
// Input:
// src/app.ts
// src/lib.ts
// Returns: ['src/app.ts', 'src/lib.ts']
```

---

### getPullRequestInfo()

> **getPullRequestInfo**(): \{ `base`: `string`; `head`: `string`; \} \| `null`

Defined in: src/context.ts:106

Gets pull request information (only available in PR context).

#### Returns

\{ `base`: `string`; `head`: `string`; \} \| `null`

PR base and head refs, or null if not in PR context

#### Example

```typescript
import { getPullRequestInfo } from "@kjanat/gha-env-validator";

if (isPullRequest()) {
  const pr = getPullRequestInfo();
  console.log(`PR: ${pr.base} ← ${pr.head}`);
}
```

---

### getRepoInfo()

> **getRepoInfo**(): `object`

Defined in: src/context.ts:41

Gets repository information.

#### Returns

`object`

Repository owner and name

##### full

> **full**: `string`

##### name

> **name**: `string`

##### owner

> **owner**: `string`

#### Example

```typescript
import { getRepoInfo } from "@kjanat/gha-env-validator";

const repo = getRepoInfo();
console.log(`${repo.owner}/${repo.name}`); // octocat/Hello-World
```

---

### getRunnerInfo()

> **getRunnerInfo**(): `object`

Defined in: src/context.ts:173

Gets runner information.

#### Returns

`object`

Runner OS, architecture, and environment details

##### arch

> **arch**: `"X86"` \| `"X64"` \| `"ARM"` \| `"ARM64"`

##### environment

> **environment**: `"github-hosted"` \| `"self-hosted"`

##### name

> **name**: `string`

##### os

> **os**: `"Linux"` \| `"Windows"` \| `"macOS"`

#### Example

```typescript
import { getRunnerInfo } from "@kjanat/gha-env-validator";

const runner = getRunnerInfo();
console.log(`Running on ${runner.os} (${runner.arch})`);
```

---

### getWorkflowRun()

> **getWorkflowRun**(): `object`

Defined in: src/context.ts:202

Gets workflow run information.

#### Returns

`object`

Workflow run details

##### attempt

> **attempt**: `number`

##### id

> **id**: `number`

##### number

> **number**: `number`

##### url

> **url**: `string`

#### Example

```typescript
import { getWorkflowRun } from "@kjanat/gha-env-validator";

const run = getWorkflowRun();
console.log(`Run #${run.number}, attempt ${run.attempt}`);
```

---

### group()

> **group**\<`T`\>(`title`, `fn`): `Promise`\<`T`\>

Defined in: src/workflow-commands.ts:353

Creates a collapsible group in the workflow log.

#### Type Parameters

##### T

`T`

#### Parameters

##### title

`string`

Group title

##### fn

() => `T` \| `Promise`\<`T`\>

Function to execute within the group

#### Returns

`Promise`\<`T`\>

#### Example

```typescript
import { group } from "@kjanat/gha-env-validator";

group("Install Dependencies", () => {
  console.log("Installing packages...");
  // ... installation logic
});
```

---

### isDebugMode()

> **isDebugMode**(): `boolean`

Defined in: src/context.ts:259

Checks if running in debug mode.

#### Returns

`boolean`

true if debug logging is enabled

#### Example

```typescript
import { isDebugMode } from "@kjanat/gha-env-validator";

if (isDebugMode()) {
  console.log("Debug logging enabled");
}
```

---

### isGitHubActions()

> **isGitHubActions**(): `boolean`

Defined in: src/workflow-commands.ts:433

Checks if running in GitHub Actions environment.

#### Returns

`boolean`

true if running in GitHub Actions

#### Example

```typescript
import { isGitHubActions } from "@kjanat/gha-env-validator";

if (isGitHubActions()) {
  setEnvVar("BUILD_ID", generateId());
}
```

---

### isOnBranch()

> **isOnBranch**(`branchName`): `boolean`

Defined in: src/context.ts:137

Checks if running on a specific branch.

#### Parameters

##### branchName

`string`

Branch name to check

#### Returns

`boolean`

true if on specified branch

#### Example

```typescript
import { isOnBranch } from "@kjanat/gha-env-validator";

if (isOnBranch("main")) {
  console.log("Running on main branch");
}
```

---

### isPullRequest()

> **isPullRequest**(): `boolean`

Defined in: src/context.ts:83

Checks if the current event is a pull request.

#### Returns

`boolean`

true if running in a pull request

#### Example

```typescript
import { isPullRequest } from "@kjanat/gha-env-validator";

if (isPullRequest()) {
  console.log("Running in PR context");
}
```

---

### isTag()

> **isTag**(): `boolean`

Defined in: src/context.ts:155

Checks if the ref is a tag.

#### Returns

`boolean`

true if the ref is a tag

#### Example

```typescript
import { isTag } from "@kjanat/gha-env-validator";

if (isTag()) {
  console.log("Building a tag release");
}
```

---

### maskValue()

> **maskValue**(`value`): `void`

Defined in: src/workflow-commands.ts:333

Masks a value in the logs, replacing it with asterisks.

Useful for preventing secrets from appearing in logs.

#### Parameters

##### value

`string`

Sensitive value to mask

#### Returns

`void`

#### Example

```typescript
import { maskValue } from "@kjanat/gha-env-validator";

const apiKey = process.env.API_KEY;
maskValue(apiKey);
console.log(apiKey); // Shows *** in logs
```

---

### notice()

> **notice**(`message`, `options?`): `void`

Defined in: src/workflow-commands.ts:244

Creates a notice annotation in the workflow log.

#### Parameters

##### message

`string`

Notice message

##### options?

Annotation options (file, line, col, etc.)

###### col?

`number`

###### endColumn?

`number`

###### endLine?

`number`

###### file?

`string`

###### line?

`number`

###### title?

`string`

#### Returns

`void`

#### Example

```typescript
import { notice } from "@kjanat/gha-env-validator";

notice("Deployment successful");
notice("Check logs", { file: "app.js", line: 42 });
```

---

### resumeCommands()

> **resumeCommands**(`token`): `void`

Defined in: src/workflow-commands.ts:415

Resumes processing workflow commands.

#### Parameters

##### token

`string`

Token returned from stopCommands()

#### Returns

`void`

---

### safeValidateCustomEnv()

> **safeValidateCustomEnv**\<`T`\>(`schema`, `options`): [`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`, \{ \}\>\>

Defined in: src/validate.ts:123

Safely validates environment variables against a custom schema.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### schema

[`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<`T`\>

Custom Zod schema to validate against

##### options

[`ValidateEnvOptions`](#validateenvoptions) = `{}`

Validation options

#### Returns

[`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`, \{ \}\>\>

Safe parse result with success/error

---

### safeValidateEnv()

> **safeValidateEnv**(`options`): [`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<\{ `CI`: `boolean`; `GITHUB_ACTION`: `string`; `GITHUB_ACTION_PATH?`: `string`; `GITHUB_ACTION_REPOSITORY?`: `string`; `GITHUB_ACTIONS`: `boolean`; `GITHUB_ACTOR`: `string`; `GITHUB_ACTOR_ID`: `number`; `GITHUB_API_URL`: `string`; `GITHUB_BASE_REF?`: `string`; `GITHUB_ENV`: `string`; `GITHUB_EVENT_NAME`: `string`; `GITHUB_EVENT_PATH`: `string`; `GITHUB_GRAPHQL_URL`: `string`; `GITHUB_HEAD_REF?`: `string`; `GITHUB_JOB`: `string`; `GITHUB_OUTPUT`: `string`; `GITHUB_PATH`: `string`; `GITHUB_REF`: `string`; `GITHUB_REF_NAME`: `string`; `GITHUB_REF_PROTECTED?`: `boolean`; `GITHUB_REF_TYPE`: `"branch"` \| `"tag"`; `GITHUB_REPOSITORY`: `string`; `GITHUB_REPOSITORY_ID`: `number`; `GITHUB_REPOSITORY_OWNER`: `string`; `GITHUB_REPOSITORY_OWNER_ID`: `number`; `GITHUB_RETENTION_DAYS`: `number`; `GITHUB_RUN_ATTEMPT`: `number`; `GITHUB_RUN_ID`: `number`; `GITHUB_RUN_NUMBER`: `number`; `GITHUB_SERVER_URL`: `string`; `GITHUB_SHA`: `string`; `GITHUB_STEP_SUMMARY`: `string`; `GITHUB_TRIGGERING_ACTOR`: `string`; `GITHUB_WORKFLOW`: `string`; `GITHUB_WORKFLOW_REF`: `string`; `GITHUB_WORKFLOW_SHA`: `string`; `GITHUB_WORKSPACE`: `string`; `RUNNER_ARCH`: `"X86"` \| `"X64"` \| `"ARM"` \| `"ARM64"`; `RUNNER_DEBUG?`: `string`; `RUNNER_ENVIRONMENT`: `"github-hosted"` \| `"self-hosted"`; `RUNNER_NAME`: `string`; `RUNNER_OS`: `"Linux"` \| `"Windows"` \| `"macOS"`; `RUNNER_TEMP`: `string`; `RUNNER_TOOL_CACHE`: `string`; \}\>

Defined in: src/validate.ts:106

Safely validates environment variables, returning an error object instead of throwing.

#### Parameters

##### options

[`ValidateEnvOptions`](#validateenvoptions) = `{}`

Validation options

#### Returns

[`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<\{ `CI`: `boolean`; `GITHUB_ACTION`: `string`; `GITHUB_ACTION_PATH?`: `string`; `GITHUB_ACTION_REPOSITORY?`: `string`; `GITHUB_ACTIONS`: `boolean`; `GITHUB_ACTOR`: `string`; `GITHUB_ACTOR_ID`: `number`; `GITHUB_API_URL`: `string`; `GITHUB_BASE_REF?`: `string`; `GITHUB_ENV`: `string`; `GITHUB_EVENT_NAME`: `string`; `GITHUB_EVENT_PATH`: `string`; `GITHUB_GRAPHQL_URL`: `string`; `GITHUB_HEAD_REF?`: `string`; `GITHUB_JOB`: `string`; `GITHUB_OUTPUT`: `string`; `GITHUB_PATH`: `string`; `GITHUB_REF`: `string`; `GITHUB_REF_NAME`: `string`; `GITHUB_REF_PROTECTED?`: `boolean`; `GITHUB_REF_TYPE`: `"branch"` \| `"tag"`; `GITHUB_REPOSITORY`: `string`; `GITHUB_REPOSITORY_ID`: `number`; `GITHUB_REPOSITORY_OWNER`: `string`; `GITHUB_REPOSITORY_OWNER_ID`: `number`; `GITHUB_RETENTION_DAYS`: `number`; `GITHUB_RUN_ATTEMPT`: `number`; `GITHUB_RUN_ID`: `number`; `GITHUB_RUN_NUMBER`: `number`; `GITHUB_SERVER_URL`: `string`; `GITHUB_SHA`: `string`; `GITHUB_STEP_SUMMARY`: `string`; `GITHUB_TRIGGERING_ACTOR`: `string`; `GITHUB_WORKFLOW`: `string`; `GITHUB_WORKFLOW_REF`: `string`; `GITHUB_WORKFLOW_SHA`: `string`; `GITHUB_WORKSPACE`: `string`; `RUNNER_ARCH`: `"X86"` \| `"X64"` \| `"ARM"` \| `"ARM64"`; `RUNNER_DEBUG?`: `string`; `RUNNER_ENVIRONMENT`: `"github-hosted"` \| `"self-hosted"`; `RUNNER_NAME`: `string`; `RUNNER_OS`: `"Linux"` \| `"Windows"` \| `"macOS"`; `RUNNER_TEMP`: `string`; `RUNNER_TOOL_CACHE`: `string`; \}\>

Safe parse result with success/error

#### Example

```typescript
import { safeValidateEnv } from "@kjanat/gha-env-validator";

const result = safeValidateEnv();

if (result.success) {
  console.log(result.data.GITHUB_SHA);
} else {
  console.error("Validation failed:", result.error.format());
}
```

---

### safeValidateInputs()

> **safeValidateInputs**\<`T`\>(`schema`): [`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<\{ -readonly \[P in string \| number \| symbol\]: T\[P\] \}, \{ \}\>\>

Defined in: src/inputs.ts:184

Safely validates action inputs, returning a result object.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### schema

`T`

Zod schema for inputs

#### Returns

[`ZodSafeParseResult`](@kjanat/namespaces/z/index.md#zodsafeparseresult)\<[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<\{ -readonly \[P in string \| number \| symbol\]: T\[P\] \}, \{ \}\>\>

Safe parse result

#### Example

```typescript
import { safeValidateInputs, z } from "@kjanat/gha-env-validator";

const result = safeValidateInputs({
  "api-key": z.string().min(10),
  "retries": z.number().int().min(0).max(5),
});

if (result.success) {
  console.log("Inputs valid:", result.data);
} else {
  console.error("Validation failed:", result.error);
}
```

---

### setEnvVar()

> **setEnvVar**(`name`, `value`): `void`

Defined in: src/workflow-commands.ts:28

Sets an environment variable for subsequent steps in the workflow.

The variable will be available in process.env for all following steps.

#### Parameters

##### name

`string`

Environment variable name

##### value

`string`

Environment variable value

#### Returns

`void`

#### Example

```typescript
import { setEnvVar } from "@kjanat/gha-env-validator";

setEnvVar("NODE_ENV", "production");
setEnvVar("API_URL", "https://api.example.com");
```

---

### setEnvVars()

> **setEnvVars**(`vars`): `void`

Defined in: src/workflow-commands.ts:499

Batch set multiple environment variables.

#### Parameters

##### vars

`Record`\<`string`, `string`\>

Object with variable names and values

#### Returns

`void`

#### Example

```typescript
import { setEnvVars } from "@kjanat/gha-env-validator";

setEnvVars({
  NODE_ENV: "production",
  API_URL: "https://api.example.com",
  DEBUG: "false",
});
```

---

### setFailed()

> **setFailed**(`message`): `void`

Defined in: src/workflow-commands.ts:593

Sets a failed status and error message.

#### Parameters

##### message

`string`

Failure message

#### Returns

`void`

#### Example

```typescript
import { setFailed } from "@kjanat/gha-env-validator";

if (buildFailed) {
  setFailed("Build failed with errors");
}
```

---

### setMultilineEnvVar()

> **setMultilineEnvVar**(`name`, `value`): `void`

Defined in: src/workflow-commands.ts:56

Sets a multiline environment variable for subsequent steps.

Uses heredoc syntax to handle values with newlines safely.

#### Parameters

##### name

`string`

Environment variable name

##### value

`string`

Multiline value

#### Returns

`void`

#### Example

```typescript
import { setMultilineEnvVar } from "@kjanat/gha-env-validator";

const jsonResponse = JSON.stringify({ foo: "bar" }, null, 2);
setMultilineEnvVar("API_RESPONSE", jsonResponse);
```

---

### setMultilineOutput()

> **setMultilineOutput**(`name`, `value`): `void`

Defined in: src/workflow-commands.ts:119

Sets a multiline output parameter for the current step.

#### Parameters

##### name

`string`

Output parameter name

##### value

`string`

Multiline output value

#### Returns

`void`

#### Example

```typescript
import { setMultilineOutput } from "@kjanat/gha-env-validator";

const report = `
Build Status: Success
Tests Passed: 42
Coverage: 95%
`;
setMultilineOutput("build_report", report);
```

---

### setOutput()

> **setOutput**(`name`, `value`): `void`

Defined in: src/workflow-commands.ts:89

Sets an output parameter for the current step.

Outputs can be referenced in later steps using ${{ steps.<step_id>.outputs.<name> }}

#### Parameters

##### name

`string`

Output parameter name

##### value

`string`

Output parameter value

#### Returns

`void`

#### Example

```typescript
import { setOutput } from "@kjanat/gha-env-validator";

setOutput("build_version", "1.2.3");
setOutput("deployment_url", "https://app.example.com");
```

---

### setOutputs()

> **setOutputs**(`outputs`): `void`

Defined in: src/workflow-commands.ts:521

Batch set multiple outputs.

#### Parameters

##### outputs

`Record`\<`string`, `string`\>

Object with output names and values

#### Returns

`void`

#### Example

```typescript
import { setOutputs } from "@kjanat/gha-env-validator";

setOutputs({
  version: "1.2.3",
  commit_sha: "abc123",
  build_time: new Date().toISOString(),
});
```

---

### startGroup()

> **startGroup**(`title`): `void`

Defined in: src/workflow-commands.ts:379

Starts a log group.

#### Parameters

##### title

`string`

Group title

#### Returns

`void`

#### Example

```typescript
import { endGroup, startGroup } from "@kjanat/gha-env-validator";

startGroup("Build Process");
console.log("Building...");
endGroup();
```

---

### stopCommands()

> **stopCommands**(): `string`

Defined in: src/workflow-commands.ts:404

Stops processing workflow commands until a token is encountered.

#### Returns

`string`

A unique token to resume commands

#### Example

```typescript
import { resumeCommands, stopCommands } from "@kjanat/gha-env-validator";

const token = stopCommands();
console.log("::warning::This will be printed literally, not processed");
resumeCommands(token);
```

---

### validateCustomEnv()

> **validateCustomEnv**\<`T`\>(`schema`, `options`): [`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`\>

Defined in: src/validate.ts:76

Validates environment variables against a custom schema.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### schema

[`ZodObject`](@kjanat/namespaces/z/index.md#zodobject)\<`T`\>

Custom Zod schema to validate against

##### options

[`ValidateEnvOptions`](#validateenvoptions) = `{}`

Validation options

#### Returns

[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`\>

Validated and typed environment variables

#### Example

```typescript
import { createEnvSchema, validateCustomEnv } from "@kjanat/gha-env-validator";
import { z } from "zod";

const schema = createEnvSchema({
  API_KEY: z.string().min(1),
  NODE_ENV: z.enum(["development", "production"]),
});

const env = validateCustomEnv(schema);
console.log(env.API_KEY); // string
console.log(env.GITHUB_SHA); // string (from defaults)
```

#### Throws

If validation fails

---

### validateEnv()

> **validateEnv**(`options`): `object`

Defined in: src/validate.ts:39

Validates environment variables against the default GitHub Actions schema.

Throws a ZodError with detailed validation failures if env vars are invalid or missing.

#### Parameters

##### options

[`ValidateEnvOptions`](#validateenvoptions) = `{}`

Validation options

#### Returns

`object`

Validated and typed environment variables

##### CI

> **CI**: `boolean`

##### GITHUB\_ACTION

> **GITHUB\_ACTION**: `string`

##### GITHUB\_ACTION\_PATH?

> `optional` **GITHUB\_ACTION\_PATH**: `string`

##### GITHUB\_ACTION\_REPOSITORY?

> `optional` **GITHUB\_ACTION\_REPOSITORY**: `string`

##### GITHUB\_ACTIONS

> **GITHUB\_ACTIONS**: `boolean`

##### GITHUB\_ACTOR

> **GITHUB\_ACTOR**: `string`

##### GITHUB\_ACTOR\_ID

> **GITHUB\_ACTOR\_ID**: `number`

##### GITHUB\_API\_URL

> **GITHUB\_API\_URL**: `string`

##### GITHUB\_BASE\_REF?

> `optional` **GITHUB\_BASE\_REF**: `string`

##### GITHUB\_ENV

> **GITHUB\_ENV**: `string`

##### GITHUB\_EVENT\_NAME

> **GITHUB\_EVENT\_NAME**: `string`

##### GITHUB\_EVENT\_PATH

> **GITHUB\_EVENT\_PATH**: `string`

##### GITHUB\_GRAPHQL\_URL

> **GITHUB\_GRAPHQL\_URL**: `string`

##### GITHUB\_HEAD\_REF?

> `optional` **GITHUB\_HEAD\_REF**: `string`

##### GITHUB\_JOB

> **GITHUB\_JOB**: `string`

##### GITHUB\_OUTPUT

> **GITHUB\_OUTPUT**: `string`

##### GITHUB\_PATH

> **GITHUB\_PATH**: `string`

##### GITHUB\_REF

> **GITHUB\_REF**: `string`

##### GITHUB\_REF\_NAME

> **GITHUB\_REF\_NAME**: `string`

##### GITHUB\_REF\_PROTECTED?

> `optional` **GITHUB\_REF\_PROTECTED**: `boolean`

##### GITHUB\_REF\_TYPE

> **GITHUB\_REF\_TYPE**: `"branch"` \| `"tag"`

##### GITHUB\_REPOSITORY

> **GITHUB\_REPOSITORY**: `string`

##### GITHUB\_REPOSITORY\_ID

> **GITHUB\_REPOSITORY\_ID**: `number`

##### GITHUB\_REPOSITORY\_OWNER

> **GITHUB\_REPOSITORY\_OWNER**: `string`

##### GITHUB\_REPOSITORY\_OWNER\_ID

> **GITHUB\_REPOSITORY\_OWNER\_ID**: `number`

##### GITHUB\_RETENTION\_DAYS

> **GITHUB\_RETENTION\_DAYS**: `number`

##### GITHUB\_RUN\_ATTEMPT

> **GITHUB\_RUN\_ATTEMPT**: `number`

##### GITHUB\_RUN\_ID

> **GITHUB\_RUN\_ID**: `number`

##### GITHUB\_RUN\_NUMBER

> **GITHUB\_RUN\_NUMBER**: `number`

##### GITHUB\_SERVER\_URL

> **GITHUB\_SERVER\_URL**: `string`

##### GITHUB\_SHA

> **GITHUB\_SHA**: `string`

##### GITHUB\_STEP\_SUMMARY

> **GITHUB\_STEP\_SUMMARY**: `string`

##### GITHUB\_TRIGGERING\_ACTOR

> **GITHUB\_TRIGGERING\_ACTOR**: `string`

##### GITHUB\_WORKFLOW

> **GITHUB\_WORKFLOW**: `string`

##### GITHUB\_WORKFLOW\_REF

> **GITHUB\_WORKFLOW\_REF**: `string`

##### GITHUB\_WORKFLOW\_SHA

> **GITHUB\_WORKFLOW\_SHA**: `string`

##### GITHUB\_WORKSPACE

> **GITHUB\_WORKSPACE**: `string`

##### RUNNER\_ARCH

> **RUNNER\_ARCH**: `"X86"` \| `"X64"` \| `"ARM"` \| `"ARM64"`

##### RUNNER\_DEBUG?

> `optional` **RUNNER\_DEBUG**: `string`

##### RUNNER\_ENVIRONMENT

> **RUNNER\_ENVIRONMENT**: `"github-hosted"` \| `"self-hosted"`

##### RUNNER\_NAME

> **RUNNER\_NAME**: `string`

##### RUNNER\_OS

> **RUNNER\_OS**: `"Linux"` \| `"Windows"` \| `"macOS"`

##### RUNNER\_TEMP

> **RUNNER\_TEMP**: `string`

##### RUNNER\_TOOL\_CACHE

> **RUNNER\_TOOL\_CACHE**: `string`

#### Example

```typescript
import { validateEnv } from "@kjanat/gha-env-validator";

// In your GitHub Action
const env = validateEnv();
console.log(env.GITHUB_SHA); // Type-safe access with IntelliSense
console.log(env.GITHUB_RUN_ID); // number type
```

#### Throws

If validation fails

---

### validateInputs()

> **validateInputs**\<`T`\>(`schema`): [`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`\>

Defined in: src/inputs.ts:136

Validates action inputs against a Zod schema.

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](@kjanat/namespaces/z/namespaces/core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>

#### Parameters

##### schema

`T`

Zod schema for inputs

#### Returns

[`$InferObjectOutput`](@kjanat/namespaces/z/namespaces/core/index.md#inferobjectoutput)\<`T`\>

Validated inputs object

#### Example

```typescript
import { validateInputs, z } from "@kjanat/gha-env-validator";

const inputs = validateInputs({
  "api-key": z.string().min(1),
  "environment": z.enum(["dev", "staging", "prod"]),
  "dry-run": z.boolean().default(false),
});

console.log(inputs["api-key"]); // Type-safe!
```

---

### warning()

> **warning**(`message`, `options?`): `void`

Defined in: src/workflow-commands.ts:273

Creates a warning annotation in the workflow log.

#### Parameters

##### message

`string`

Warning message

##### options?

Annotation options

###### col?

`number`

###### endColumn?

`number`

###### endLine?

`number`

###### file?

`string`

###### line?

`number`

###### title?

`string`

#### Returns

`void`

#### Example

```typescript
import { warning } from "@kjanat/gha-env-validator";

warning("Deprecated API usage detected");
warning("Unused variable", { file: "main.ts", line: 10 });
```
