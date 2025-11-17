[**@kjanat/gha-env-validator**](../../../../../index.md)

---

[@kjanat/gha-env-validator](../../../../../index.md) / [z](../../index.md) / core

# core

## Namespaces

- [JSONSchema](namespaces/JSONSchema.md)

## Classes

### $ZodAsyncError

Defined in: node\_modules/zod/v4/core/core.d.cts:26

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new $ZodAsyncError**(): [`$ZodAsyncError`](#zodasyncerror)

Defined in: node\_modules/zod/v4/core/core.d.cts:27

###### Returns

[`$ZodAsyncError`](#zodasyncerror)

###### Overrides

`Error.constructor`

#### Properties

##### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

###### Inherited from

`Error.cause`

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/bun-types/globals.d.ts:1048

The maximum number of stack frames to capture.

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/bun-types/globals.d.ts:1043

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack; // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

##### isError()

###### Call Signature

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

`Error.isError`

###### Call Signature

> `static` **isError**(`value`): `value is Error`

Defined in: node\_modules/bun-types/globals.d.ts:1038

Check if a value is an instance of Error

###### Parameters

###### value

`unknown`

The value to check

###### Returns

`value is Error`

True if the value is an instance of Error, false otherwise

###### Inherited from

`Error.isError`

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

---

### $ZodEncodeError

Defined in: node\_modules/zod/v4/core/core.d.cts:29

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new $ZodEncodeError**(`name`): [`$ZodEncodeError`](#zodencodeerror)

Defined in: node\_modules/zod/v4/core/core.d.cts:30

###### Parameters

###### name

`string`

###### Returns

[`$ZodEncodeError`](#zodencodeerror)

###### Overrides

`Error.constructor`

#### Properties

##### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

###### Inherited from

`Error.cause`

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`Error.stack`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/bun-types/globals.d.ts:1048

The maximum number of stack frames to capture.

###### Inherited from

`Error.stackTraceLimit`

#### Methods

##### captureStackTrace()

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/bun-types/globals.d.ts:1043

Create .stack property on a target object

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack; // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

##### isError()

###### Call Signature

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

`Error.isError`

###### Call Signature

> `static` **isError**(`value`): `value is Error`

Defined in: node\_modules/bun-types/globals.d.ts:1038

Check if a value is an instance of Error

###### Parameters

###### value

`unknown`

The value to check

###### Returns

`value is Error`

True if the value is an instance of Error, false otherwise

###### Inherited from

`Error.isError`

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

---

### $ZodRegistry

Defined in: node\_modules/zod/v4/core/registries.d.cts:13

#### Type Parameters

##### Meta

`Meta` _extends_ `MetadataType` = `MetadataType`

##### Schema

`Schema` _extends_ [`$ZodType`](#zodtype) = [`$ZodType`](#zodtype)

#### Constructors

##### Constructor

> **new $ZodRegistry**\<`Meta`, `Schema`\>(): [`$ZodRegistry`](#zodregistry)\<`Meta`,`Schema`\>

###### Returns

[`$ZodRegistry`](#zodregistry)\<`Meta`, `Schema`\>

#### Properties

##### \_idmap

> **\_idmap**: `Map`\<`string`, `Schema`\>

Defined in: node\_modules/zod/v4/core/registries.d.cts:17

##### \_map

> **\_map**: `WeakMap`\<`Schema`, [`$replace`](#replace)\<`Meta`, `Schema`\>\>

Defined in: node\_modules/zod/v4/core/registries.d.cts:16

##### \_meta

> **\_meta**: `Meta`

Defined in: node\_modules/zod/v4/core/registries.d.cts:14

##### \_schema

> **\_schema**: `Schema`

Defined in: node\_modules/zod/v4/core/registries.d.cts:15

#### Methods

##### add()

> **add**\<`S`\>(`schema`, ...`_meta`): `this`

Defined in: node\_modules/zod/v4/core/registries.d.cts:18

###### Type Parameters

###### S

`S` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

###### Parameters

###### schema

`S`

###### \_meta

...`undefined` _extends_ `Meta` ? \[[`$replace`](#replace)\<`Meta`, `S`\>?\] : \[[`$replace`](#replace)\<`Meta`, `S`\>\]

###### Returns

`this`

##### clear()

> **clear**(): `this`

Defined in: node\_modules/zod/v4/core/registries.d.cts:19

###### Returns

`this`

##### get()

> **get**\<`S`\>(`schema`): [`$replace`](#replace)\<`Meta`, `S`\> \| `undefined`

Defined in: node\_modules/zod/v4/core/registries.d.cts:21

###### Type Parameters

###### S

`S` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

###### Parameters

###### schema

`S`

###### Returns

[`$replace`](#replace)\<`Meta`, `S`\> \| `undefined`

##### has()

> **has**(`schema`): `boolean`

Defined in: node\_modules/zod/v4/core/registries.d.cts:22

###### Parameters

###### schema

`Schema`

###### Returns

`boolean`

##### remove()

> **remove**(`schema`): `this`

Defined in: node\_modules/zod/v4/core/registries.d.cts:20

###### Parameters

###### schema

`Schema`

###### Returns

`this`

---

### Doc

Defined in: node\_modules/zod/v4/core/doc.d.cts:4

#### Constructors

##### Constructor

> **new Doc**(`args?`): [`Doc`](#doc)

Defined in: node\_modules/zod/v4/core/doc.d.cts:8

###### Parameters

###### args?

`string`[]

###### Returns

[`Doc`](#doc)

#### Properties

##### args

> **args**: `string`[]

Defined in: node\_modules/zod/v4/core/doc.d.cts:5

##### content

> **content**: `string`[]

Defined in: node\_modules/zod/v4/core/doc.d.cts:6

##### indent

> **indent**: `number`

Defined in: node\_modules/zod/v4/core/doc.d.cts:7

#### Methods

##### compile()

> **compile**(): `any`

Defined in: node\_modules/zod/v4/core/doc.d.cts:12

###### Returns

`any`

##### indented()

> **indented**(`fn`): `void`

Defined in: node\_modules/zod/v4/core/doc.d.cts:9

###### Parameters

###### fn

(`doc`) => `void`

###### Returns

`void`

##### write()

###### Call Signature

> **write**(`fn`): `void`

Defined in: node\_modules/zod/v4/core/doc.d.cts:10

###### Parameters

###### fn

`ModeWriter`

###### Returns

`void`

###### Call Signature

> **write**(`line`): `void`

Defined in: node\_modules/zod/v4/core/doc.d.cts:11

###### Parameters

###### line

`string`

###### Returns

`void`

---

### JSONSchemaGenerator

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:63

#### Constructors

##### Constructor

> **new JSONSchemaGenerator**(`params?`): [`JSONSchemaGenerator`](#jsonschemagenerator)

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:75

###### Parameters

###### params?

`JSONSchemaGeneratorParams`

###### Returns

[`JSONSchemaGenerator`](#jsonschemagenerator)

#### Properties

##### counter

> **counter**: `number`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:73

##### io

> **io**: `"output"` \| `"input"`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:72

##### metadataRegistry

> **metadataRegistry**: [`$ZodRegistry`](#zodregistry)\<`Record`\<`string`, `any`\>\>

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:64

##### override()

> **override**: (`ctx`) => `void`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:67

###### Parameters

###### ctx

###### jsonSchema

[`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

###### path

(`string` \| `number`)[]

###### zodSchema

[`$ZodTypes`](#zodtypes)

###### Returns

`void`

##### seen

> **seen**: `Map`\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, `Seen`\>

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:74

##### target

> **target**: `"draft-4"` \| `"draft-7"` \| `"draft-2020-12"` \| `"openapi-3.0"`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:65

##### unrepresentable

> **unrepresentable**: `"any"` \| `"throw"`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:66

#### Methods

##### emit()

> **emit**(`schema`, `_params?`): [`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:77

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### \_params?

`EmitParams`

###### Returns

[`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

##### process()

> **process**(`schema`, `_params?`): [`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:76

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### \_params?

`ProcessParams`

###### Returns

[`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

## Interfaces

### \_$ZodType

Defined in: node\_modules/zod/v4/core/schemas.d.cts:92

#### Extends

- [`$ZodType`](#zodtype)\<`T`\[`"output"`\], `T`\[`"input"`\], `T`\>

#### Extended by

- [`$ZodString`](#zodstring)

#### Type Parameters

##### T

`T` _extends_ `$ZodTypeInternals` = `$ZodTypeInternals`

#### Properties

##### \_zod

> **\_zod**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

###### Inherited from

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`_$ZodType`](#_zodtype)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### \_$ZodTypeInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:33

#### Extended by

- [`$ZodArrayInternals`](#zodarrayinternals)
- [`$ZodObjectInternals`](#zodobjectinternals)
- [`$ZodUnionInternals`](#zodunioninternals)
- [`$ZodIntersectionInternals`](#zodintersectioninternals)
- [`$ZodTupleInternals`](#zodtupleinternals)

#### Properties

##### def

> **def**: [`$ZodTypeDef`](#zodtypedef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:37

Schema definition.

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

---

### $constructor

Defined in: node\_modules/zod/v4/core/core.d.cts:16

#### Type Parameters

##### T

`T` _extends_ `ZodTrait`

##### D

`D` = `T`\[`"_zod"`\]\[`"def"`\]

#### Constructors

##### Constructor

> **new $constructor**(`def`): `T`

Defined in: node\_modules/zod/v4/core/core.d.cts:11

###### Parameters

###### def

`D`

###### Returns

`T`

#### Methods

##### init()

> **init**(`inst`, `def`): `asserts inst is T`

Defined in: node\_modules/zod/v4/core/core.d.cts:12

###### Parameters

###### inst

`T`

###### def

`D`

###### Returns

`asserts inst is T`

---

### $RefinementCtx

Defined in: node\_modules/zod/v4/core/api.d.cts:275

#### Extends

- [`ParsePayload`](#parsepayload)\<`T`\>

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### aborted?

> `optional` **aborted**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:25

A may to mark a whole payload as aborted. Used in codecs/pipes.

###### Inherited from

[`ParsePayload`](#parsepayload).[`aborted`](#aborted-2)

##### issues

> **issues**: (\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](../util.md#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \})[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:23

###### Inherited from

[`ParsePayload`](#parsepayload).[`issues`](#issues-5)

##### value

> **value**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:22

###### Inherited from

[`ParsePayload`](#parsepayload).[`value`](#value-11)

#### Methods

##### addIssue()

> **addIssue**(`arg`): `void`

Defined in: node\_modules/zod/v4/core/api.d.cts:276

###### Parameters

###### arg

`string` |

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](#zodstringformats); `input?`: `string`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \}

###### code

`"invalid_format"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### format

`string` & `object` \| [`$ZodStringFormats`](#zodstringformats)

###### input?

`string`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### pattern?

`string`

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_type"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### expected

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_big"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### exact?

`boolean`

###### inclusive?

`boolean`

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### maximum

`number` \| `bigint`

###### message?

`string`

###### origin

`"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_small"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### exact?

`boolean`

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

###### inclusive?

`boolean`

True if the allowable range includes the minimum

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### minimum

`number` \| `bigint`

###### origin

`"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input?`: `number` \| `bigint`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"not_multiple_of"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### divisor

`number`

###### input?

`number` \| `bigint`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input?`: `Record`\<`string`, `unknown`\>; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"unrecognized_keys"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### input?

`Record`\<`string`, `unknown`\>

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### keys

`string`[]

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](#zodissue)[][]; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_union"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### discriminator?

`string`

###### errors

[`$ZodIssue`](#zodissue)[][]

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_key"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](#zodissue)[]

###### message?

`string`

###### origin

`"record"` \| `"map"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_element"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](#zodissue)[]

###### key

`unknown`

###### message?

`string`

###### origin

`"map"` \| `"set"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](../util.md#primitive)[]; \}

###### code

`"invalid_value"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### values

[`Primitive`](../util.md#primitive)[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input?`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

###### code

`"custom"`

###### continue?

`boolean`

If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting

###### input?

`unknown`

###### inst?

[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

###### Returns

`void`

---

### $ZodAny

Defined in: node\_modules/zod/v4/core/schemas.d.cts:466

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodAnyInternals`](#zodanyinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:467

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodAny`](#zodany)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodAnyDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:459

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"any"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:460

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodAnyInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:462

#### Properties

##### def

> **def**: [`$ZodAnyDef`](#zodanydef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:463

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodArray

Defined in: node\_modules/zod/v4/core/schemas.d.cts:530

#### Extends

- [`$ZodType`](#zodtype)\<`any`, `any`, [`$ZodArrayInternals`](#zodarrayinternals)\<`T`\>\>

#### Extended by

- [`ZodArray`](../../index.md#zodarray)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodArrayInternals`](#zodarrayinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

###### Inherited from

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodArray`](#zodarray)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodArrayDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:520

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### element

> **element**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:522

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"array"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:521

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodArrayInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:524

#### Extends

- [`_$ZodTypeInternals`](#_zodtypeinternals)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodArrayDef`](#zodarraydef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:525

Schema definition.

###### Overrides

[`_$ZodTypeInternals`](#_zodtypeinternals).[`def`](#def)

##### input

> **input**: [`input`](#input-43)\<`T`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:528

##### output

> **output**: [`output`](#output-11)\<`T`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:527

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`toJSONSchema`](#tojsonschema)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`version`](#version)

---

### $ZodBase64

Defined in: node\_modules/zod/v4/core/schemas.d.cts:304

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodBase64Internals`](#zodbase64internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:305

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodBase64`](#zodbase64)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodBase64Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:300

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"base64"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodBase64Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:302

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"base64"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodBase64URL

Defined in: node\_modules/zod/v4/core/schemas.d.cts:313

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodBase64URLInternals`](#zodbase64urlinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:314

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodBase64URL`](#zodbase64url)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodBase64URLDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:309

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64url"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"base64url"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodBase64URLInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:311

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"base64url"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64url"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodBigInt

Defined in: node\_modules/zod/v4/core/schemas.d.cts:408

#### Extends

- [`$ZodType`](#zodtype)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodBigIntInternals`](#zodbigintinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:409

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodBigInt`](#zodbigint)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodBigIntDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:393

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Extended by

- [`$ZodBigIntFormatDef`](#zodbigintformatdef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:395

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"bigint"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:394

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodBigIntFormat

Defined in: node\_modules/zod/v4/core/schemas.d.cts:418

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodBigIntFormatInternals`](#zodbigintformatinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:419

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodBigIntFormat`](#zodbigintformat)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodBigIntFormatDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:412

#### Extends

- [`$ZodBigIntDef`](#zodbigintdef).[`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef).[`abort`](#abort-3)

##### check

> **check**: `"bigint_format"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:413

###### Overrides

[`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef).[`check`](#check-9)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodBigIntDef`](#zodbigintdef).[`checks`](#checks-4)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:395

###### Inherited from

[`$ZodBigIntDef`](#zodbigintdef).[`coerce`](#coerce-2)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodBigIntDef`](#zodbigintdef).[`error`](#error-4)

##### format

> **format**: [`$ZodBigIntFormats`](#zodbigintformats) \| `undefined`

Defined in: node\_modules/zod/v4/core/checks.d.cts:78

###### Inherited from

[`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef).[`format`](#format-3)

##### type

> **type**: `"bigint"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:394

###### Inherited from

[`$ZodBigIntDef`](#zodbigintdef).[`type`](#type-4)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef).[`when`](#when-3)

---

### $ZodBigIntFormatInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:415

#### Extends

- [`$ZodBigIntInternals`](#zodbigintinternals)\<`bigint`\>.[`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals)

#### Properties

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:82

The set of issues this check might throw.

###### Inherited from

[`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals).[`issc`](#issc-3)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals).[`onattach`](#onattach-3)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodBigIntInternals`](#zodbigintinternals).[`toJSONSchema`](#tojsonschema-6)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodBigIntInternals`](#zodbigintinternals).[`version`](#version-6)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`bigint`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals).[`check`](#check-10)

---

### $ZodBigIntInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:397

#### Extended by

- [`$ZodBigIntFormatInternals`](#zodbigintformatinternals)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodBoolean

Defined in: node\_modules/zod/v4/core/schemas.d.cts:389

#### Extends

- [`$ZodType`](#zodtype)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodBooleanInternals`](#zodbooleaninternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:390

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodBoolean`](#zodboolean)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodBooleanDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:379

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`boolean`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:382

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:381

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"boolean"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:380

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodBooleanInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:384

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### def

> **def**: [`$ZodBooleanDef`](#zodbooleandef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:386

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodCatch

Defined in: node\_modules/zod/v4/core/schemas.d.cts:928

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodCatch`](../../index.md#zodcatch)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCatchInternals`](#zodcatchinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:929

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCatch`](#zodcatch)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCatchCtx

Defined in: node\_modules/zod/v4/core/schemas.d.cts:908

#### Extends

- [`ParsePayload`](#parsepayload)

#### Properties

##### aborted?

> `optional` **aborted**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:25

A may to mark a whole payload as aborted. Used in codecs/pipes.

###### Inherited from

[`ParsePayload`](#parsepayload).[`aborted`](#aborted-2)

##### ~~error~~

> **error**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:910

###### ~~issues~~

> **issues**: [`$ZodIssue`](#zodissue)[]

###### Deprecated

Use `ctx.issues`

##### ~~input~~

> **input**: `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:914

###### Deprecated

Use `ctx.value`

##### issues

> **issues**: (\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](../util.md#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \})[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:23

###### Inherited from

[`ParsePayload`](#parsepayload).[`issues`](#issues-5)

##### value

> **value**: `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:22

###### Inherited from

[`ParsePayload`](#parsepayload).[`value`](#value-11)

---

### $ZodCatchDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:916

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### catchValue()

> **catchValue**: (`ctx`) => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:919

###### Parameters

###### ctx

[`$ZodCatchCtx`](#zodcatchctx)

###### Returns

`unknown`

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:918

##### type

> **type**: `"catch"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:917

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodCatchInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:921

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodCatchDef`](#zodcatchdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:922

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodCheck

Defined in: node\_modules/zod/v4/core/checks.d.cts:20

#### Extended by

- [`$ZodCheckLessThan`](#zodchecklessthan)
- [`$ZodCheckGreaterThan`](#zodcheckgreaterthan)
- [`$ZodCheckMultipleOf`](#zodcheckmultipleof)
- [`$ZodCheckNumberFormat`](#zodchecknumberformat)
- [`$ZodCheckBigIntFormat`](#zodcheckbigintformat)
- [`$ZodCheckMaxSize`](#zodcheckmaxsize)
- [`$ZodCheckMinSize`](#zodcheckminsize)
- [`$ZodCheckSizeEquals`](#zodchecksizeequals)
- [`$ZodCheckMaxLength`](#zodcheckmaxlength)
- [`$ZodCheckMinLength`](#zodcheckminlength)
- [`$ZodCheckLengthEquals`](#zodchecklengthequals)
- [`$ZodCheckStringFormat`](#zodcheckstringformat)
- [`$ZodCheckRegex`](#zodcheckregex)
- [`$ZodCheckLowerCase`](#zodchecklowercase)
- [`$ZodCheckUpperCase`](#zodcheckuppercase)
- [`$ZodCheckIncludes`](#zodcheckincludes)
- [`$ZodCheckStartsWith`](#zodcheckstartswith)
- [`$ZodCheckProperty`](#zodcheckproperty)
- [`$ZodCheckMimeType`](#zodcheckmimetype)
- [`$ZodCheckOverwrite`](#zodcheckoverwrite)

#### Type Parameters

##### T

`T` = `never`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:21

---

### $ZodCheckBigIntFormat

Defined in: node\_modules/zod/v4/core/checks.d.cts:84

#### Extends

- [`$ZodCheck`](#zodcheck)\<`bigint`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:85

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckBigIntFormatDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:76

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Extended by

- [`$ZodBigIntFormatDef`](#zodbigintformatdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"bigint_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:77

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### format

> **format**: [`$ZodBigIntFormats`](#zodbigintformats) \| `undefined`

Defined in: node\_modules/zod/v4/core/checks.d.cts:78

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckBigIntFormatInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:80

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`bigint`\>

#### Extended by

- [`$ZodBigIntFormatInternals`](#zodbigintformatinternals)

#### Properties

##### def

> **def**: [`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:81

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:82

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`bigint`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:5

#### Extended by

- [`$ZodCustomDef`](#zodcustomdef)
- [`$ZodCheckLessThanDef`](#zodchecklessthandef)
- [`$ZodCheckGreaterThanDef`](#zodcheckgreaterthandef)
- [`$ZodCheckMultipleOfDef`](#zodcheckmultipleofdef)
- [`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef)
- [`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef)
- [`$ZodCheckMaxSizeDef`](#zodcheckmaxsizedef)
- [`$ZodCheckMinSizeDef`](#zodcheckminsizedef)
- [`$ZodCheckSizeEqualsDef`](#zodchecksizeequalsdef)
- [`$ZodCheckMaxLengthDef`](#zodcheckmaxlengthdef)
- [`$ZodCheckMinLengthDef`](#zodcheckminlengthdef)
- [`$ZodCheckLengthEqualsDef`](#zodchecklengthequalsdef)
- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)
- [`$ZodCheckPropertyDef`](#zodcheckpropertydef)
- [`$ZodCheckMimeTypeDef`](#zodcheckmimetypedef)
- [`$ZodCheckOverwriteDef`](#zodcheckoverwritedef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

##### check

> **check**: `string`

Defined in: node\_modules/zod/v4/core/checks.d.cts:6

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

---

### $ZodCheckEndsWith

Defined in: node\_modules/zod/v4/core/checks.d.cts:236

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckEndsWithInternals`](#zodcheckendswithinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:237

##### def

> **def**: [`$ZodCheckDef`](#zodcheckdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:14

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc?

> `optional` **issc**: [`$ZodIssueBase`](#zodissuebase)

Defined in: node\_modules/zod/v4/core/checks.d.cts:16

The set of issues this check might throw.

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckEndsWithDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:229

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`"ends_with"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"ends_with"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### suffix

> **suffix**: `string`

Defined in: node\_modules/zod/v4/core/checks.d.cts:230

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckEndsWithInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:232

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckEndsWithDef`](#zodcheckendswithdef-1)

Defined in: node\_modules/zod/v4/core/checks.d.cts:233

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:234

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckGreaterThan

Defined in: node\_modules/zod/v4/core/checks.d.cts:46

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`Numeric`](../util.md#numeric) = [`Numeric`](../util.md#numeric)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckGreaterThanInternals`](#zodcheckgreaterthaninternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:47

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckGreaterThanDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:37

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"greater_than"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:38

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### inclusive

> **inclusive**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:40

##### value

> **value**: [`Numeric`](../util.md#numeric)

Defined in: node\_modules/zod/v4/core/checks.d.cts:39

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckGreaterThanInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:42

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`Numeric`](../util.md#numeric) = [`Numeric`](../util.md#numeric)

#### Properties

##### def

> **def**: [`$ZodCheckGreaterThanDef`](#zodcheckgreaterthandef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:43

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:44

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckIncludes

Defined in: node\_modules/zod/v4/core/checks.d.cts:214

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckIncludesInternals`](#zodcheckincludesinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:215

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckIncludesDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:206

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`"includes"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"includes"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### includes

> **includes**: `string`

Defined in: node\_modules/zod/v4/core/checks.d.cts:207

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### position?

> `optional` **position**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:208

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckIncludesInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:210

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckIncludesDef`](#zodcheckincludesdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:211

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:212

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:13

#### Extended by

- [`$ZodCustomInternals`](#zodcustominternals)
- [`$ZodCheckLessThanInternals`](#zodchecklessthaninternals)
- [`$ZodCheckGreaterThanInternals`](#zodcheckgreaterthaninternals)
- [`$ZodCheckMultipleOfInternals`](#zodcheckmultipleofinternals)
- [`$ZodCheckNumberFormatInternals`](#zodchecknumberformatinternals)
- [`$ZodCheckBigIntFormatInternals`](#zodcheckbigintformatinternals)
- [`$ZodCheckMaxSizeInternals`](#zodcheckmaxsizeinternals)
- [`$ZodCheckMinSizeInternals`](#zodcheckminsizeinternals)
- [`$ZodCheckSizeEqualsInternals`](#zodchecksizeequalsinternals)
- [`$ZodCheckMaxLengthInternals`](#zodcheckmaxlengthinternals)
- [`$ZodCheckMinLengthInternals`](#zodcheckminlengthinternals)
- [`$ZodCheckLengthEqualsInternals`](#zodchecklengthequalsinternals)
- [`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals)
- [`$ZodCheckRegexInternals`](#zodcheckregexinternals)
- [`$ZodCheckLowerCaseInternals`](#zodchecklowercaseinternals)
- [`$ZodCheckUpperCaseInternals`](#zodcheckuppercaseinternals)
- [`$ZodCheckIncludesInternals`](#zodcheckincludesinternals)
- [`$ZodCheckStartsWithInternals`](#zodcheckstartswithinternals)
- [`$ZodCheckEndsWithInternals`](#zodcheckendswithinternals)
- [`$ZodCheckEndsWith`](#zodcheckendswith)
- [`$ZodCheckPropertyInternals`](#zodcheckpropertyinternals)
- [`$ZodCheckMimeTypeInternals`](#zodcheckmimetypeinternals)
- [`$ZodCheckOverwriteInternals`](#zodcheckoverwriteinternals)

#### Type Parameters

##### T

`T`

#### Properties

##### def

> **def**: [`$ZodCheckDef`](#zodcheckdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:14

##### issc?

> `optional` **issc**: [`$ZodIssueBase`](#zodissuebase)

Defined in: node\_modules/zod/v4/core/checks.d.cts:16

The set of issues this check might throw.

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

---

### $ZodCheckLengthEquals

Defined in: node\_modules/zod/v4/core/checks.d.cts:156

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckLengthEqualsInternals`](#zodchecklengthequalsinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:157

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckLengthEqualsDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:148

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"length_equals"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:149

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### length

> **length**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:150

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckLengthEqualsInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:152

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### def

> **def**: [`$ZodCheckLengthEqualsDef`](#zodchecklengthequalsdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:153

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`T`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:154

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckLessThan

Defined in: node\_modules/zod/v4/core/checks.d.cts:33

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`Numeric`](../util.md#numeric) = [`Numeric`](../util.md#numeric)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckLessThanInternals`](#zodchecklessthaninternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:34

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckLessThanDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:24

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"less_than"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:25

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### inclusive

> **inclusive**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:27

##### value

> **value**: [`Numeric`](../util.md#numeric)

Defined in: node\_modules/zod/v4/core/checks.d.cts:26

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckLessThanInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:29

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`Numeric`](../util.md#numeric) = [`Numeric`](../util.md#numeric)

#### Properties

##### def

> **def**: [`$ZodCheckLessThanDef`](#zodchecklessthandef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:30

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:31

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckLowerCase

Defined in: node\_modules/zod/v4/core/checks.d.cts:192

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckLowerCaseInternals`](#zodchecklowercaseinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:193

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckLowerCaseDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:186

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`"lowercase"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"lowercase"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckLowerCaseInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:188

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckLowerCaseDef`](#zodchecklowercasedef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:189

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:190

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMaxLength

Defined in: node\_modules/zod/v4/core/checks.d.cts:132

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMaxLengthInternals`](#zodcheckmaxlengthinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:133

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMaxLengthDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:124

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"max_length"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:125

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### maximum

> **maximum**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:126

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMaxLengthInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:128

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### def

> **def**: [`$ZodCheckMaxLengthDef`](#zodcheckmaxlengthdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:129

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:130

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMaxSize

Defined in: node\_modules/zod/v4/core/checks.d.cts:96

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMaxSizeInternals`](#zodcheckmaxsizeinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:97

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMaxSizeDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:88

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"max_size"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:89

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### maximum

> **maximum**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:90

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMaxSizeInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:92

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### def

> **def**: [`$ZodCheckMaxSizeDef`](#zodcheckmaxsizedef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:93

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:94

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMimeType

Defined in: node\_modules/zod/v4/core/checks.d.cts:261

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`File`](#file) = [`File`](#file)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMimeTypeInternals`](#zodcheckmimetypeinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:262

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMimeTypeDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:253

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"mime_type"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:254

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### mime

> **mime**: [`MimeTypes`](../util.md#mimetypes)[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:255

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMimeTypeInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:257

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`File`](#file) = [`File`](#file)

#### Properties

##### def

> **def**: [`$ZodCheckMimeTypeDef`](#zodcheckmimetypedef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:258

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidValue`](#zodissueinvalidvalue)

Defined in: node\_modules/zod/v4/core/checks.d.cts:259

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMinLength

Defined in: node\_modules/zod/v4/core/checks.d.cts:144

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMinLengthInternals`](#zodcheckminlengthinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:145

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMinLengthDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:136

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"min_length"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:137

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### minimum

> **minimum**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:138

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMinLengthInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:140

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasLength`](../util.md#haslength) = [`HasLength`](../util.md#haslength)

#### Properties

##### def

> **def**: [`$ZodCheckMinLengthDef`](#zodcheckminlengthdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:141

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:142

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMinSize

Defined in: node\_modules/zod/v4/core/checks.d.cts:108

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMinSizeInternals`](#zodcheckminsizeinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:109

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMinSizeDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:100

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"min_size"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:101

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### minimum

> **minimum**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:102

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMinSizeInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:104

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### def

> **def**: [`$ZodCheckMinSizeDef`](#zodcheckminsizedef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:105

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:106

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckMultipleOf

Defined in: node\_modules/zod/v4/core/checks.d.cts:58

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ `number` \| `bigint` = `number` \| `bigint`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckMultipleOfInternals`](#zodcheckmultipleofinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:59

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckMultipleOfDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:50

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Type Parameters

##### T

`T` _extends_ `number` \| `bigint` = `number` \| `bigint`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"multiple_of"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:51

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### value

> **value**: `T`

Defined in: node\_modules/zod/v4/core/checks.d.cts:52

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckMultipleOfInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:54

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ `number` \| `bigint` = `number` \| `bigint`

#### Properties

##### def

> **def**: [`$ZodCheckMultipleOfDef`](#zodcheckmultipleofdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:55

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueNotMultipleOf`](#zodissuenotmultipleof)

Defined in: node\_modules/zod/v4/core/checks.d.cts:56

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckNumberFormat

Defined in: node\_modules/zod/v4/core/checks.d.cts:71

#### Extends

- [`$ZodCheck`](#zodcheck)\<`number`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckNumberFormatInternals`](#zodchecknumberformatinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:72

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckNumberFormatDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:63

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Extended by

- [`$ZodNumberFormatDef`](#zodnumberformatdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"number_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:64

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### format

> **format**: [`$ZodNumberFormats`](#zodnumberformats)

Defined in: node\_modules/zod/v4/core/checks.d.cts:65

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckNumberFormatInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:67

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`number`\>

#### Extended by

- [`$ZodNumberFormatInternals`](#zodnumberformatinternals)

#### Properties

##### def

> **def**: [`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:68

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:69

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`number`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckOverwrite

Defined in: node\_modules/zod/v4/core/checks.d.cts:273

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckOverwriteInternals`](#zodcheckoverwriteinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:274

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckOverwriteDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:265

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"overwrite"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:266

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

#### Methods

##### tx()

> **tx**(`value`): `T`

Defined in: node\_modules/zod/v4/core/checks.d.cts:267

###### Parameters

###### value

`T`

###### Returns

`T`

---

### $ZodCheckOverwriteInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:269

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### def

> **def**: [`$ZodCheckOverwriteDef`](#zodcheckoverwritedef)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:270

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: `never`

Defined in: node\_modules/zod/v4/core/checks.d.cts:271

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckProperty

Defined in: node\_modules/zod/v4/core/checks.d.cts:249

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ `object` = `object`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckPropertyInternals`](#zodcheckpropertyinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:250

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckPropertyDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:240

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"property"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:241

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### property

> **property**: `string`

Defined in: node\_modules/zod/v4/core/checks.d.cts:242

##### schema

> **schema**: [`$ZodType`](#zodtype)

Defined in: node\_modules/zod/v4/core/checks.d.cts:243

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckPropertyInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:245

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ `object` = `object`

#### Properties

##### def

> **def**: [`$ZodCheckPropertyDef`](#zodcheckpropertydef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:246

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssue`](#zodissue)

Defined in: node\_modules/zod/v4/core/checks.d.cts:247

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckRegex

Defined in: node\_modules/zod/v4/core/checks.d.cts:182

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckRegexInternals`](#zodcheckregexinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:183

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckRegexDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:174

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"regex"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:175

###### Overrides

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:176

###### Overrides

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckRegexInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:178

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckRegexDef`](#zodcheckregexdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:179

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:180

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckSizeEquals

Defined in: node\_modules/zod/v4/core/checks.d.cts:120

#### Extends

- [`$ZodCheck`](#zodcheck)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckSizeEqualsInternals`](#zodchecksizeequalsinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:121

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckSizeEqualsDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:112

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"size_equals"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:113

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### size

> **size**: `number`

Defined in: node\_modules/zod/v4/core/checks.d.cts:114

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckSizeEqualsInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:116

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`T`\>

#### Type Parameters

##### T

`T` _extends_ [`HasSize`](../util.md#hassize) = [`HasSize`](../util.md#hassize)

#### Properties

##### def

> **def**: [`$ZodCheckSizeEqualsDef`](#zodchecksizeequalsdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:117

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueTooBig`](#zodissuetoobig)\<`T`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`T`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:118

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`T`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckStartsWith

Defined in: node\_modules/zod/v4/core/checks.d.cts:225

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckStartsWithInternals`](#zodcheckstartswithinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:226

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckStartsWithDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:218

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`"starts_with"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"starts_with"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### prefix

> **prefix**: `string`

Defined in: node\_modules/zod/v4/core/checks.d.cts:219

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckStartsWithInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:221

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckStartsWithDef`](#zodcheckstartswithdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:222

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:223

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckStringFormat

Defined in: node\_modules/zod/v4/core/checks.d.cts:170

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:171

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckStringFormatDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:161

#### Extends

- [`$ZodCheckDef`](#zodcheckdef)

#### Extended by

- [`$ZodStringFormatDef`](#zodstringformatdef)
- [`$ZodCheckRegexDef`](#zodcheckregexdef)
- [`$ZodCheckLowerCaseDef`](#zodchecklowercasedef)
- [`$ZodCheckUpperCaseDef`](#zodcheckuppercasedef)
- [`$ZodCheckIncludesDef`](#zodcheckincludesdef)
- [`$ZodCheckStartsWithDef`](#zodcheckstartswithdef)
- [`$ZodCheckEndsWithDef`](#zodcheckendswithdef-1)

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`error`](#error-10)

##### format

> **format**: `Format`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCheckStringFormatInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:166

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Extended by

- [`$ZodStringFormatInternals`](#zodstringformatinternals)

#### Properties

##### def

> **def**: [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:167

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCheckUpperCase

Defined in: node\_modules/zod/v4/core/checks.d.cts:202

#### Extends

- [`$ZodCheck`](#zodcheck)\<`string`\>

#### Properties

##### \_zod

> **\_zod**: [`$ZodCheckUpperCaseInternals`](#zodcheckuppercaseinternals)

Defined in: node\_modules/zod/v4/core/checks.d.cts:203

###### Overrides

[`$ZodCheck`](#zodcheck).[`_zod`](#_zod-9)

---

### $ZodCheckUpperCaseDef

Defined in: node\_modules/zod/v4/core/checks.d.cts:196

#### Extends

- [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`"uppercase"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:7

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`error`](#error-29)

##### format

> **format**: `"uppercase"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodCheckUpperCaseInternals

Defined in: node\_modules/zod/v4/core/checks.d.cts:198

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`string`\>

#### Properties

##### def

> **def**: [`$ZodCheckUpperCaseDef`](#zodcheckuppercasedef)

Defined in: node\_modules/zod/v4/core/checks.d.cts:199

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:200

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCIDRv4

Defined in: node\_modules/zod/v4/core/schemas.d.cts:285

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCIDRv4Internals`](#zodcidrv4internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:286

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCIDRv4`](#zodcidrv4)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCIDRv4Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:279

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cidrv4"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"cidrv4"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### version?

> `optional` **version**: `"v4"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:280

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodCIDRv4Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:282

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"cidrv4"`\>

#### Properties

##### def

> **def**: [`$ZodCIDRv4Def`](#zodcidrv4def)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:283

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodCIDRv6

Defined in: node\_modules/zod/v4/core/schemas.d.cts:295

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCIDRv6Internals`](#zodcidrv6internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:296

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCIDRv6`](#zodcidrv6)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCIDRv6Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:289

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cidrv6"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"cidrv6"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### version?

> `optional` **version**: `"v6"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:290

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodCIDRv6Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:292

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"cidrv6"`\>

#### Properties

##### def

> **def**: [`$ZodCIDRv6Def`](#zodcidrv6def)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:293

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodCodec

Defined in: node\_modules/zod/v4/core/schemas.d.cts:976

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodCodec`](../../index.md#zodcodec)

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCodecInternals`](#zodcodecinternals)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:977

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCodec`](#zodcodec)\<`A`, `B`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCodecDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:964

#### Extends

- [`$ZodPipeDef`](#zodpipedef)\<`A`, `B`\>

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodPipeDef`](#zodpipedef).[`checks`](#checks-47)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodPipeDef`](#zodpipedef).[`error`](#error-70)

##### in

> **in**: `A`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:945

###### Inherited from

[`$ZodPipeDef`](#zodpipedef).[`in`](#in-2)

##### out

> **out**: `B`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:946

###### Inherited from

[`$ZodPipeDef`](#zodpipedef).[`out`](#out-2)

##### reverseTransform()

> **reverseTransform**: (`value`, `payload`) => [`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`A`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:966

Only defined inside $ZodCodec instances.

###### Parameters

###### value

[`input`](#input-43)\<`B`\>

###### payload

[`ParsePayload`](#parsepayload)\<[`input`](#input-43)\<`B`\>\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`A`\>\>

###### Overrides

[`$ZodPipeDef`](#zodpipedef).[`reverseTransform`](#reversetransform-1)

##### transform()

> **transform**: (`value`, `payload`) => [`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`B`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:965

Only defined inside $ZodCodec instances.

###### Parameters

###### value

[`output`](#output-11)\<`A`\>

###### payload

[`ParsePayload`](#parsepayload)\<[`output`](#output-11)\<`A`\>\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`B`\>\>

###### Overrides

[`$ZodPipeDef`](#zodpipedef).[`transform`](#transform-1)

##### type

> **type**: `"pipe"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:944

###### Inherited from

[`$ZodPipeDef`](#zodpipedef).[`type`](#type-48)

---

### $ZodCodecInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:968

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodCodecDef`](#zodcodecdef)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:969

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodConfig

Defined in: node\_modules/zod/v4/core/core.d.cts:43

#### Properties

##### customError?

> `optional` **customError**: [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssue`](#zodissue)\>

Defined in: node\_modules/zod/v4/core/core.d.cts:45

Custom error map. Overrides `config().localeError`.

##### jitless?

> `optional` **jitless**: `boolean`

Defined in: node\_modules/zod/v4/core/core.d.cts:49

Disable JIT schema compilation. Useful in environments that disallow `eval`.

##### localeError?

> `optional` **localeError**: [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssue`](#zodissue)\>

Defined in: node\_modules/zod/v4/core/core.d.cts:47

Localized error map. Lowest priority.

---

### $ZodCUID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:185

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCUIDInternals`](#zodcuidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:186

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCUID`](#zodcuid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCUID2

Defined in: node\_modules/zod/v4/core/schemas.d.cts:193

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodCUID2Internals`](#zodcuid2internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:194

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCUID2`](#zodcuid2)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCUID2Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:189

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid2"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"cuid2"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodCUID2Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:191

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"cuid2"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid2"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodCUIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:181

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"cuid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodCUIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:183

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"cuid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodCustom

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1108

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodCustom`](../../index.md#zodcustom)

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCustomInternals`](#zodcustominternals)\<`O`, `I`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1109

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCustom`](#zodcustom)\<`O`, `I`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodCustomDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1092

#### Extends

- [`$ZodTypeDef`](#zodtypedef).[`$ZodCheckDef`](#zodcheckdef)

#### Type Parameters

##### O

`O` = `unknown`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`abort`](#abort-4)

##### check

> **check**: `"custom"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1094

###### Overrides

[`$ZodCheckDef`](#zodcheckdef).[`check`](#check-12)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssue`](#zodissue)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1096

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### fn()

> **fn**: (`arg`) => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1098

###### Parameters

###### arg

`O`

###### Returns

`unknown`

##### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1097

##### path?

> `optional` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1095

##### type

> **type**: `"custom"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1093

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckDef`](#zodcheckdef).[`when`](#when-4)

---

### $ZodCustomInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1100

#### Extends

- [`$ZodCheckInternals`](#zodcheckinternals)\<`O`\>

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `unknown`

#### Properties

##### def

> **def**: [`$ZodCustomDef`](#zodcustomdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1101

Schema definition.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`def`](#def-12)

##### issc

> **issc**: [`$ZodIssue`](#zodissue)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1102

The set of issues this check might throw.

###### Overrides

[`$ZodCheckInternals`](#zodcheckinternals).[`issc`](#issc-8)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`onattach`](#onattach-8)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`O`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckInternals`](#zodcheckinternals).[`check`](#check-24)

---

### $ZodCustomStringFormat

Defined in: node\_modules/zod/v4/core/schemas.d.cts:342

#### Extends

- [`$ZodStringFormat`](#zodstringformat)\<`Format`\>

#### Extended by

- [`ZodCustomStringFormat`](../../index.md#zodcustomstringformat)

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### \_zod

> **\_zod**: [`$ZodCustomStringFormatInternals`](#zodcustomstringformatinternals)\<`Format`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:343

###### Overrides

[`$ZodStringFormat`](#zodstringformat).[`_zod`](#_zod-78)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodCustomStringFormat`](#zodcustomstringformat)\<`Format`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodStringFormat`](#zodstringformat).[`~standard`](#standard-55)

---

### $ZodCustomStringFormatDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:336

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`Format`\>

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`check`](#check-137)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### fn()

> **fn**: (`val`) => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:337

###### Parameters

###### val

`string`

###### Returns

`unknown`

##### format

> **format**: `Format`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodCustomStringFormatInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:339

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`Format`\>

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### def

> **def**: [`$ZodCustomStringFormatDef`](#zodcustomstringformatdef)\<`Format`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:340

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`pattern`](#pattern-58)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodDate

Defined in: node\_modules/zod/v4/core/schemas.d.cts:516

#### Extends

- [`$ZodType`](#zodtype)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodDateInternals`](#zoddateinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:517

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodDate`](#zoddate)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodDateDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:503

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:505

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"date"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:504

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodDateInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:507

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### def

> **def**: [`$ZodDateDef`](#zoddatedef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:508

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodDefault

Defined in: node\_modules/zod/v4/core/schemas.d.cts:858

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodDefault`](../../index.md#zoddefault)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodDefaultInternals`](#zoddefaultinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:859

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodDefault`](#zoddefault)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodDefaultDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:845

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### defaultValue

> **defaultValue**: [`NoUndefined`](../util.md#noundefined)\<[`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:849

The default value. May be a getter.

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:847

##### type

> **type**: `"default"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:846

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodDefaultInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:851

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodDefaultDef`](#zoddefaultdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:852

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodDiscriminatedUnion

Defined in: node\_modules/zod/v4/core/schemas.d.cts:635

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodDiscriminatedUnion`](../../index.md#zoddiscriminatedunion)

#### Type Parameters

##### Options

`Options` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

##### Disc

`Disc` _extends_ `string` = `string`

#### Properties

##### \_zod

> **\_zod**: [`$ZodDiscriminatedUnionInternals`](#zoddiscriminatedunioninternals)\<`Options`, `Disc`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:636

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodDiscriminatedUnion`](#zoddiscriminatedunion)\<`Options`, `Disc`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodDiscriminatedUnionDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:627

#### Extends

- [`$ZodUnionDef`](#zoduniondef)\<`Options`\>

#### Type Parameters

##### Options

`Options` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

##### Disc

`Disc` _extends_ `string` = `string`

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodUnionDef`](#zoduniondef).[`checks`](#checks-63)

##### discriminator

> **discriminator**: `Disc`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:628

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodUnionDef`](#zoduniondef).[`error`](#error-87)

##### options

> **options**: `Options`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:609

###### Inherited from

[`$ZodUnionDef`](#zoduniondef).[`options`](#options-5)

##### type

> **type**: `"union"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:608

###### Inherited from

[`$ZodUnionDef`](#zoduniondef).[`type`](#type-64)

##### unionFallback?

> `optional` **unionFallback**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:629

---

### $ZodDiscriminatedUnionInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:631

#### Extends

- [`$ZodUnionInternals`](#zodunioninternals)\<`Options`\>

#### Type Parameters

##### Options

`Options` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

##### Disc

`Disc` _extends_ `string` = `string`

#### Properties

##### def

> **def**: [`$ZodDiscriminatedUnionDef`](#zoddiscriminateduniondef)\<`Options`, `Disc`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:632

Schema definition.

###### Overrides

[`$ZodUnionInternals`](#zodunioninternals).[`def`](#def-85)

##### input

> **input**: [`$InferUnionInput`](#inferunioninput)\<`Options`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:619

###### Inherited from

[`$ZodUnionInternals`](#zodunioninternals).[`input`](#input-41)

##### output

> **output**: [`$InferUnionOutput`](#inferunionoutput)\<`Options`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:618

###### Inherited from

[`$ZodUnionInternals`](#zodunioninternals).[`output`](#output-9)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodUnionInternals`](#zodunioninternals).[`toJSONSchema`](#tojsonschema-64)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodUnionInternals`](#zodunioninternals).[`version`](#version-68)

---

### $ZodE164

Defined in: node\_modules/zod/v4/core/schemas.d.cts:321

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodE164Internals`](#zode164internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:322

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodE164`](#zode164)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodE164Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:317

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"e164"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"e164"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodE164Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:319

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"e164"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"e164"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodEmail

Defined in: node\_modules/zod/v4/core/schemas.d.cts:149

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodEmailInternals`](#zodemailinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:150

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodEmail`](#zodemail)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodEmailDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:145

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"email"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"email"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodEmailInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:147

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"email"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"email"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodEmoji

Defined in: node\_modules/zod/v4/core/schemas.d.cts:169

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodEmojiInternals`](#zodemojiinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:170

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodEmoji`](#zodemoji)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodEmojiDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:165

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"emoji"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"emoji"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodEmojiInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:167

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"emoji"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"emoji"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodEnum

Defined in: node\_modules/zod/v4/core/schemas.d.cts:759

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodEnum`](../../index.md#zodenum)

#### Type Parameters

##### T

`T` _extends_ [`EnumLike`](../util.md#enumlike) = [`EnumLike`](../util.md#enumlike)

#### Properties

##### \_zod

> **\_zod**: [`$ZodEnumInternals`](#zodenuminternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:760

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodEnum`](#zodenum)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodEnumDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:745

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`EnumLike`](../util.md#enumlike) = [`EnumLike`](../util.md#enumlike)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### entries

> **entries**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:747

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"enum"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:746

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodEnumInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:749

#### Type Parameters

##### T

`T` _extends_ [`EnumLike`](../util.md#enumlike) = [`EnumLike`](../util.md#enumlike)

#### Properties

##### def

> **def**: [`$ZodEnumDef`](#zodenumdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:752

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:756

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.pattern`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### ~~values~~

> **values**: [`PrimitiveSet`](../util.md#primitiveset)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:754

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.values`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodError

Defined in: node\_modules/zod/v4/core/errors.d.cts:121

#### Extends

- `Error`

#### Extended by

- [`ZodError`](../../../../../index.md#zoderror)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### \_zod

> **\_zod**: `object`

Defined in: node\_modules/zod/v4/core/errors.d.cts:124

###### def

> **def**: [`$ZodIssue`](#zodissue)[]

###### output

> **output**: `T`

##### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

###### Inherited from

`Error.cause`

##### issues

> **issues**: [`$ZodIssue`](#zodissue)[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:123

##### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`Error.message`

##### name

> **name**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:129

###### Overrides

`Error.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:128

###### Overrides

`Error.stack`

##### type

> **type**: `T`

Defined in: node\_modules/zod/v4/core/errors.d.cts:122

---

### $ZodErrorMap()

Defined in: node\_modules/zod/v4/core/errors.d.cts:116

#### Type Parameters

##### T

`T` _extends_ [`$ZodIssueBase`](#zodissuebase) = [`$ZodIssue`](#zodissue)

> **$ZodErrorMap**(`issue`): `string` \| \{ `message`: `string`; \} \| `null` \| `undefined`

Defined in: node\_modules/zod/v4/core/errors.d.cts:117

#### Parameters

##### issue

[`$ZodInternalIssue`](#zodinternalissue)\<`T`\>

#### Returns

`string` \| \{ `message`: `string`; \} \| `null` \| `undefined`

---

### $ZodFile

Defined in: node\_modules/zod/v4/core/schemas.d.cts:797

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodFile`](../../index.md#zodfile)

#### Properties

##### \_zod

> **\_zod**: [`$ZodFileInternals`](#zodfileinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:798

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodFile`](#zodfile)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodFileDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:785

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"file"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:786

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodFileInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:788

#### Properties

##### def

> **def**: [`$ZodFileDef`](#zodfiledef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:789

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodFunction

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1045

#### Extends

- [`$ZodType`](#zodtype)\<`any`, `any`, [`$ZodFunctionInternals`](#zodfunctioninternals)\<`Args`, `Returns`\>\>

#### Extended by

- [`ZodFunction`](../../index.md#zodfunction)

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin) = [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout) = [`$ZodFunctionOut`](#zodfunctionout)

#### Properties

##### ~~\_def~~

> **\_def**: [`$ZodFunctionDef`](#zodfunctiondef)\<`Args`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1047

###### Deprecated

##### \_input

> **\_input**: [`$InferInnerFunctionType`](#inferinnerfunctiontype)\<`Args`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1048

##### \_output

> **\_output**: [`$InferOuterFunctionType`](#inferouterfunctiontype)\<`Args`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1049

##### \_zod

> **\_zod**: [`$ZodFunctionInternals`](#zodfunctioninternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

###### Inherited from

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodFunction`](#zodfunction)\<`Args`, `Returns`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

#### Methods

##### implement()

> **implement**\<`F`\>(`func`): (...`args`) => `ReturnType`\<`F`\> _extends_ [`output`](#output-11)\<`Returns`\> ? [`output`](#output-11)\<`Returns`\> & `ReturnType`\<`F`\> : [`output`](#output-11)\<`Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1050

###### Type Parameters

###### F

`F` _extends_ [`$InferInnerFunctionType`](#inferinnerfunctiontype)\<`Args`, `Returns`\>

###### Parameters

###### func

`F`

###### Returns

> (...`args`): `ReturnType`\<`F`\> _extends_ [`output`](#output-11)\<`Returns`\> ? [`output`](#output-11)\<`Returns`\> & `ReturnType`\<`F`\> : [`output`](#output-11)\<`Returns`\>

###### Parameters

###### args

...[`$ZodFunctionArgs`](#zodfunctionargs-1) _extends_ `Args` ? `never`[] : [`input`](#input-43)\<`Args`\>

###### Returns

`ReturnType`\<`F`\> _extends_ [`output`](#output-11)\<`Returns`\> ? [`output`](#output-11)\<`Returns`\> & `ReturnType`\<`F`\> : [`output`](#output-11)\<`Returns`\>

##### implementAsync()

> **implementAsync**\<`F`\>(`func`): `F` _extends_ [`$InferOuterFunctionTypeAsync`](#inferouterfunctiontypeasync)\<`Args`, `Returns`\> ? `F`\<`F`\> : [`$InferOuterFunctionTypeAsync`](#inferouterfunctiontypeasync)\<`Args`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1051

###### Type Parameters

###### F

`F` _extends_ [`$InferInnerFunctionTypeAsync`](#inferinnerfunctiontypeasync)\<`Args`, `Returns`\>

###### Parameters

###### func

`F`

###### Returns

`F` _extends_ [`$InferOuterFunctionTypeAsync`](#inferouterfunctiontypeasync)\<`Args`, `Returns`\> ? `F`\<`F`\> : [`$InferOuterFunctionTypeAsync`](#inferouterfunctiontypeasync)\<`Args`, `Returns`\>

##### input()

###### Call Signature

> **input**\<`Items`, `Rest`\>(`args`, `rest?`): [`$ZodFunction`](#zodfunction)\<[`$ZodTuple`](#zodtuple)\<`Items`, `Rest`\>, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1052

###### Type Parameters

###### Items

`Items` _extends_ [`TupleItems`](../util.md#tupleitems)

###### Rest

`Rest` _extends_ [`$ZodFunctionOut`](#zodfunctionout) = [`$ZodFunctionOut`](#zodfunctionout)

###### Parameters

###### args

`Items`

###### rest?

`Rest`

###### Returns

[`$ZodFunction`](#zodfunction)\<[`$ZodTuple`](#zodtuple)\<`Items`, `Rest`\>, `Returns`\>

###### Call Signature

> **input**\<`NewArgs`\>(`args`): [`$ZodFunction`](#zodfunction)\<`NewArgs`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1053

###### Type Parameters

###### NewArgs

`NewArgs` _extends_ [`$ZodFunctionArgs`](#zodfunctionargs-1)

###### Parameters

###### args

`NewArgs`

###### Returns

[`$ZodFunction`](#zodfunction)\<`NewArgs`, `Returns`\>

###### Call Signature

> **input**(...`args`): [`$ZodFunction`](#zodfunction)\<`any`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1054

###### Parameters

###### args

...`any`[]

###### Returns

[`$ZodFunction`](#zodfunction)\<`any`, `Returns`\>

##### output()

> **output**\<`NewReturns`\>(`output`): [`$ZodFunction`](#zodfunction)\<`Args`, `NewReturns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1055

###### Type Parameters

###### NewReturns

`NewReturns` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

###### Parameters

###### output

`NewReturns`

###### Returns

[`$ZodFunction`](#zodfunction)\<`Args`, `NewReturns`\>

---

### $ZodFunctionDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1036

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### In

`In` _extends_ [`$ZodFunctionIn`](#zodfunctionin) = [`$ZodFunctionIn`](#zodfunctionin)

##### Out

`Out` _extends_ [`$ZodFunctionOut`](#zodfunctionout) = [`$ZodFunctionOut`](#zodfunctionout)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### input

> **input**: `In`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1038

##### output

> **output**: `Out`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1039

##### type

> **type**: `"function"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1037

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodFunctionInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1041

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout)

#### Properties

##### def

> **def**: [`$ZodFunctionDef`](#zodfunctiondef)\<`Args`, `Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1042

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodFunctionParams

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1057

#### Type Parameters

##### I

`I` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### O

`O` _extends_ [`$ZodType`](#zodtype)

#### Properties

##### input?

> `optional` **input**: `I`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1058

##### output?

> `optional` **output**: `O`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1059

---

### $ZodGUID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:131

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodGUIDInternals`](#zodguidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:132

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodGUID`](#zodguid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodGUIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:127

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"guid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"guid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodGUIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:129

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"guid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"guid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodIntersection

Defined in: node\_modules/zod/v4/core/schemas.d.cts:652

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodIntersection`](../../index.md#zodintersection)

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodIntersectionInternals`](#zodintersectioninternals)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:653

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodIntersection`](#zodintersection)\<`A`, `B`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodIntersectionDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:639

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### Left

`Left` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### Right

`Right` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### left

> **left**: `Left`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:641

##### right

> **right**: `Right`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:642

##### type

> **type**: `"intersection"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:640

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodIntersectionInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:644

#### Extends

- [`_$ZodTypeInternals`](#_zodtypeinternals)

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodIntersectionDef`](#zodintersectiondef)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:645

Schema definition.

###### Overrides

[`_$ZodTypeInternals`](#_zodtypeinternals).[`def`](#def)

##### input

> **input**: [`input`](#input-43)\<`A`\> & [`input`](#input-43)\<`B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:650

##### output

> **output**: [`output`](#output-11)\<`A`\> & [`output`](#output-11)\<`B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:649

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`toJSONSchema`](#tojsonschema)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`version`](#version)

---

### $ZodIPv4

Defined in: node\_modules/zod/v4/core/schemas.d.cts:265

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodIPv4Internals`](#zodipv4internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:266

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodIPv4`](#zodipv4)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodIPv4Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:259

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ipv4"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"ipv4"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### version?

> `optional` **version**: `"v4"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:260

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodIPv4Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:262

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"ipv4"`\>

#### Properties

##### def

> **def**: [`$ZodIPv4Def`](#zodipv4def)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:263

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodIPv6

Defined in: node\_modules/zod/v4/core/schemas.d.cts:275

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodIPv6Internals`](#zodipv6internals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:276

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodIPv6`](#zodipv6)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodIPv6Def

Defined in: node\_modules/zod/v4/core/schemas.d.cts:269

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ipv6"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"ipv6"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### version?

> `optional` **version**: `"v6"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:270

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodIPv6Internals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:272

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"ipv6"`\>

#### Properties

##### def

> **def**: [`$ZodIPv6Def`](#zodipv6def)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:273

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodISODate

Defined in: node\_modules/zod/v4/core/schemas.d.cts:237

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodISODateInternals`](#zodisodateinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:238

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodISODate`](#zodisodate)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodISODateDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:233

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"date"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"date"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodISODateInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:235

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"date"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"date"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`pattern`](#pattern-58)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodISODateTime

Defined in: node\_modules/zod/v4/core/schemas.d.cts:229

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodISODateTimeInternals`](#zodisodatetimeinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:230

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodISODateTime`](#zodisodatetime)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodISODateTimeDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:221

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"datetime"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"datetime"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### local

> **local**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:224

##### offset

> **offset**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:223

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### precision

> **precision**: `number` \| `null`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:222

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodISODateTimeInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:226

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)

#### Properties

##### def

> **def**: [`$ZodISODateTimeDef`](#zodisodatetimedef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:227

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`isst`](#isst-23)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodISODuration

Defined in: node\_modules/zod/v4/core/schemas.d.cts:255

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodISODurationInternals`](#zodisodurationinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:256

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodISODuration`](#zodisoduration)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodISODurationDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:251

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"duration"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"duration"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodISODurationInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:253

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"duration"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"duration"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`pattern`](#pattern-58)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodISOTime

Defined in: node\_modules/zod/v4/core/schemas.d.cts:247

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodISOTimeInternals`](#zodisotimeinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:248

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodISOTime`](#zodisotime)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodISOTimeDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:241

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"time"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"time"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### precision?

> `optional` **precision**: `number` \| `null`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:242

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodISOTimeInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:244

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"time"`\>

#### Properties

##### def

> **def**: [`$ZodISOTimeDef`](#zodisotimedef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:245

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`pattern`](#pattern-58)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodIssueBase

Defined in: node\_modules/zod/v4/core/errors.d.cts:6

#### Extended by

- [`$ZodIssueInvalidType`](#zodissueinvalidtype)
- [`$ZodIssueTooBig`](#zodissuetoobig)
- [`$ZodIssueTooSmall`](#zodissuetoosmall)
- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)
- [`$ZodIssueNotMultipleOf`](#zodissuenotmultipleof)
- [`$ZodIssueUnrecognizedKeys`](#zodissueunrecognizedkeys)
- [`$ZodIssueInvalidUnion`](#zodissueinvalidunion)
- [`$ZodIssueInvalidKey`](#zodissueinvalidkey)
- [`$ZodIssueInvalidElement`](#zodissueinvalidelement)
- [`$ZodIssueInvalidValue`](#zodissueinvalidvalue)
- [`$ZodIssueCustom`](#zodissuecustom)

#### Properties

##### code?

> `readonly` `optional` **code**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:7

##### input?

> `readonly` `optional` **input**: `unknown`

Defined in: node\_modules/zod/v4/core/errors.d.cts:8

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

---

### $ZodIssueCustom

Defined in: node\_modules/zod/v4/core/errors.d.cts:75

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Properties

##### code

> `readonly` **code**: `"custom"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:76

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### input?

> `readonly` `optional` **input**: `unknown`

Defined in: node\_modules/zod/v4/core/errors.d.cts:78

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### params?

> `readonly` `optional` **params**: `Record`\<`string`, `any`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:77

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueInvalidElement

Defined in: node\_modules/zod/v4/core/errors.d.cts:63

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"invalid_element"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:64

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:68

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### issues

> `readonly` **issues**: [`$ZodIssue`](#zodissue)[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:67

##### key

> `readonly` **key**: `unknown`

Defined in: node\_modules/zod/v4/core/errors.d.cts:66

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### origin

> `readonly` **origin**: `"map"` \| `"set"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:65

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueInvalidKey

Defined in: node\_modules/zod/v4/core/errors.d.cts:57

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"invalid_key"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:58

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:61

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### issues

> `readonly` **issues**: [`$ZodIssue`](#zodissue)[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:60

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### origin

> `readonly` **origin**: `"record"` \| `"map"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:59

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueInvalidStringFormat

Defined in: node\_modules/zod/v4/core/errors.d.cts:35

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Extended by

- [`$ZodIssueStringCommonFormats`](#zodissuestringcommonformats)
- [`$ZodIssueStringInvalidRegex`](#zodissuestringinvalidregex)
- [`$ZodIssueStringInvalidJWT`](#zodissuestringinvalidjwt)
- [`$ZodIssueStringStartsWith`](#zodissuestringstartswith)
- [`$ZodIssueStringEndsWith`](#zodissuestringendswith)
- [`$ZodIssueStringIncludes`](#zodissuestringincludes)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### format

> `readonly` **format**: `string` & `object` \| [`$ZodStringFormats`](#zodstringformats)

Defined in: node\_modules/zod/v4/core/errors.d.cts:37

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

---

### $ZodIssueInvalidType

Defined in: node\_modules/zod/v4/core/errors.d.cts:12

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"invalid_type"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:13

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### expected

> `readonly` **expected**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:14

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:15

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueInvalidUnion

Defined in: node\_modules/zod/v4/core/errors.d.cts:51

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Properties

##### code

> `readonly` **code**: `"invalid_union"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:52

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### discriminator?

> `readonly` `optional` **discriminator**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:55

##### errors

> `readonly` **errors**: [`$ZodIssue`](#zodissue)[][]

Defined in: node\_modules/zod/v4/core/errors.d.cts:53

##### input?

> `readonly` `optional` **input**: `unknown`

Defined in: node\_modules/zod/v4/core/errors.d.cts:54

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueInvalidValue

Defined in: node\_modules/zod/v4/core/errors.d.cts:70

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"invalid_value"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:71

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:73

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

##### values

> `readonly` **values**: [`Primitive`](../util.md#primitive)[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:72

---

### $ZodIssueNotMultipleOf

Defined in: node\_modules/zod/v4/core/errors.d.cts:41

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` _extends_ `number` \| `bigint` = `number` \| `bigint`

#### Properties

##### code

> `readonly` **code**: `"not_multiple_of"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:42

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### divisor

> `readonly` **divisor**: `number`

Defined in: node\_modules/zod/v4/core/errors.d.cts:43

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:44

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueStringCommonFormats

Defined in: node\_modules/zod/v4/core/errors.d.cts:80

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"date"` \| `"url"` \| `"base64"` \| `"base64url"` \| `"email"` \| `"guid"` \| `"uuid"` \| `"emoji"` \| `"nanoid"` \| `"cuid"` \| `"cuid2"` \| `"ulid"` \| `"xid"` \| `"ksuid"` \| `"ipv4"` \| `"ipv6"` \| `"cidrv4"` \| `"cidrv6"` \| `"e164"` \| `"lowercase"` \| `"uppercase"` \| `"datetime"` \| `"time"` \| `"duration"` \| `"json_string"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:81

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

---

### $ZodIssueStringEndsWith

Defined in: node\_modules/zod/v4/core/errors.d.cts:95

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"ends_with"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:96

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

##### suffix

> **suffix**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:97

---

### $ZodIssueStringIncludes

Defined in: node\_modules/zod/v4/core/errors.d.cts:99

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"includes"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:100

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### includes

> **includes**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:101

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

---

### $ZodIssueStringInvalidJWT

Defined in: node\_modules/zod/v4/core/errors.d.cts:87

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### algorithm?

> `optional` **algorithm**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:89

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"jwt"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:88

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

---

### $ZodIssueStringInvalidRegex

Defined in: node\_modules/zod/v4/core/errors.d.cts:83

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"regex"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:84

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern

> **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:85

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

---

### $ZodIssueStringStartsWith

Defined in: node\_modules/zod/v4/core/errors.d.cts:91

#### Extends

- [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

#### Properties

##### code

> `readonly` **code**: `"invalid_format"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:36

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`code`](#code-4)

##### format

> **format**: `"starts_with"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:92

###### Overrides

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`format`](#format-31)

##### input?

> `readonly` `optional` **input**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:39

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`input`](#input-16)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`message`](#message-7)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`path`](#path-5)

##### pattern?

> `readonly` `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:38

###### Inherited from

[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat).[`pattern`](#pattern-42)

##### prefix

> **prefix**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:93

---

### $ZodIssueTooBig

Defined in: node\_modules/zod/v4/core/errors.d.cts:17

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"too_big"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:18

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### exact?

> `readonly` `optional` **exact**: `boolean`

Defined in: node\_modules/zod/v4/core/errors.d.cts:22

##### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

Defined in: node\_modules/zod/v4/core/errors.d.cts:21

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:23

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### maximum

> `readonly` **maximum**: `number` \| `bigint`

Defined in: node\_modules/zod/v4/core/errors.d.cts:20

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

Defined in: node\_modules/zod/v4/core/errors.d.cts:19

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueTooSmall

Defined in: node\_modules/zod/v4/core/errors.d.cts:25

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### code

> `readonly` **code**: `"too_small"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:26

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### exact?

> `readonly` `optional` **exact**: `boolean`

Defined in: node\_modules/zod/v4/core/errors.d.cts:32

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

##### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

Defined in: node\_modules/zod/v4/core/errors.d.cts:30

True if the allowable range includes the minimum

##### input?

> `readonly` `optional` **input**: `Input`

Defined in: node\_modules/zod/v4/core/errors.d.cts:33

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### minimum

> `readonly` **minimum**: `number` \| `bigint`

Defined in: node\_modules/zod/v4/core/errors.d.cts:28

##### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

Defined in: node\_modules/zod/v4/core/errors.d.cts:27

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodIssueUnrecognizedKeys

Defined in: node\_modules/zod/v4/core/errors.d.cts:46

#### Extends

- [`$ZodIssueBase`](#zodissuebase)

#### Properties

##### code

> `readonly` **code**: `"unrecognized_keys"`

Defined in: node\_modules/zod/v4/core/errors.d.cts:47

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`code`](#code)

##### input?

> `readonly` `optional` **input**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:49

###### Overrides

[`$ZodIssueBase`](#zodissuebase).[`input`](#input-10)

##### keys

> `readonly` **keys**: `string`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:48

##### message

> `readonly` **message**: `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:10

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`message`](#message-3)

##### path

> `readonly` **path**: `PropertyKey`[]

Defined in: node\_modules/zod/v4/core/errors.d.cts:9

###### Inherited from

[`$ZodIssueBase`](#zodissuebase).[`path`](#path-1)

---

### $ZodJWT

Defined in: node\_modules/zod/v4/core/schemas.d.cts:332

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodJWTInternals`](#zodjwtinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:333

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodJWT`](#zodjwt)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodJWTDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:326

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"jwt"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### alg?

> `optional` **alg**: [`JWTAlgorithm`](../util.md#jwtalgorithm)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:327

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"jwt"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodJWTInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:329

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"jwt"`\>

#### Properties

##### def

> **def**: [`$ZodJWTDef`](#zodjwtdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:330

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodKSUID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:217

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodKSUIDInternals`](#zodksuidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:218

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodKSUID`](#zodksuid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodKSUIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:213

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ksuid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"ksuid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodKSUIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:215

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"ksuid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ksuid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodLazy

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1088

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodLazy`](../../index.md#zodlazy)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodLazyInternals`](#zodlazyinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1089

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodLazy`](#zodlazy)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodLazyDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1074

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### getter()

> **getter**: () => `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1076

###### Returns

`T`

##### type

> **type**: `"lazy"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1075

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodLazyInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1078

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodLazyDef`](#zodlazydef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1079

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1082

Auto-cached way to retrieve the inner schema

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodLiteral

Defined in: node\_modules/zod/v4/core/schemas.d.cts:773

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodLiteral`](../../index.md#zodliteral)

#### Type Parameters

##### T

`T` _extends_ [`Literal`](../util.md#literal) = [`Literal`](../util.md#literal)

#### Properties

##### \_zod

> **\_zod**: [`$ZodLiteralInternals`](#zodliteralinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:774

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodLiteral`](#zodliteral)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodLiteralDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:763

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`Literal`](../util.md#literal)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"literal"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:764

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

##### values

> **values**: `T`[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:765

---

### $ZodLiteralInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:767

#### Type Parameters

##### T

`T` _extends_ [`Literal`](../util.md#literal) = [`Literal`](../util.md#literal)

#### Properties

##### def

> **def**: [`$ZodLiteralDef`](#zodliteraldef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:768

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodMap

Defined in: node\_modules/zod/v4/core/schemas.d.cts:725

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodMap`](../../index.md#zodmap)

#### Type Parameters

##### Key

`Key` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodMapInternals`](#zodmapinternals)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:726

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodMap`](#zodmap)\<`Key`, `Value`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodMapDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:714

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### Key

`Key` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### keyType

> **keyType**: `Key`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:716

##### type

> **type**: `"map"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:715

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

##### valueType

> **valueType**: `Value`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:717

---

### $ZodMapInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:719

#### Type Parameters

##### Key

`Key` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodMapDef`](#zodmapdef)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:720

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNaN

Defined in: node\_modules/zod/v4/core/schemas.d.cts:939

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodNaN`](../../index.md#zodnan)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNaNInternals`](#zodnaninternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:940

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNaN`](#zodnan)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNaNDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:932

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"nan"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:933

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNaNInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:935

#### Properties

##### def

> **def**: [`$ZodNaNDef`](#zodnandef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:936

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNanoID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:177

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNanoIDInternals`](#zodnanoidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:178

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNanoID`](#zodnanoid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNanoIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:173

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"nanoid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"nanoid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodNanoIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:175

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"nanoid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"nanoid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodNever

Defined in: node\_modules/zod/v4/core/schemas.d.cts:488

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNeverInternals`](#zodneverinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:489

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNever`](#zodnever)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNeverDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:481

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"never"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:482

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNeverInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:484

#### Properties

##### def

> **def**: [`$ZodNeverDef`](#zodneverdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:485

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNonOptional

Defined in: node\_modules/zod/v4/core/schemas.d.cts:890

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodNonOptional`](../../index.md#zodnonoptional)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNonOptionalInternals`](#zodnonoptionalinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:891

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNonOptional`](#zodnonoptional)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNonOptionalDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:879

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:881

##### type

> **type**: `"nonoptional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:880

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNonOptionalInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:883

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodNonOptionalDef`](#zodnonoptionaldef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:884

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNull

Defined in: node\_modules/zod/v4/core/schemas.d.cts:455

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNullInternals`](#zodnullinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:456

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNull`](#zodnull)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNullable

Defined in: node\_modules/zod/v4/core/schemas.d.cts:841

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodNullable`](../../index.md#zodnullable)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNullableInternals`](#zodnullableinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:842

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNullable`](#zodnullable)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNullableDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:829

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:831

##### type

> **type**: `"nullable"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:830

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNullableInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:833

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodNullableDef`](#zodnullabledef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:834

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNullDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:446

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"null"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:447

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNullInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:449

#### Properties

##### def

> **def**: [`$ZodNullDef`](#zodnulldef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:451

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodNumber

Defined in: node\_modules/zod/v4/core/schemas.d.cts:365

#### Extends

- [`$ZodType`](#zodtype)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodNumberInternals`](#zodnumberinternals)\<`Input`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:366

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNumber`](#zodnumber)\<`Input`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNumberDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:346

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Extended by

- [`$ZodNumberFormatDef`](#zodnumberformatdef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:348

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"number"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:347

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodNumberFormat

Defined in: node\_modules/zod/v4/core/schemas.d.cts:375

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodNumberFormatInternals`](#zodnumberformatinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:376

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodNumberFormat`](#zodnumberformat)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodNumberFormatDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:369

#### Extends

- [`$ZodNumberDef`](#zodnumberdef).[`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef)

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef).[`abort`](#abort-17)

##### check

> **check**: `"number_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:64

###### Inherited from

[`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef).[`check`](#check-53)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodNumberDef`](#zodnumberdef).[`checks`](#checks-43)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:348

###### Inherited from

[`$ZodNumberDef`](#zodnumberdef).[`coerce`](#coerce-24)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodNumberDef`](#zodnumberdef).[`error`](#error-66)

##### format

> **format**: [`$ZodNumberFormats`](#zodnumberformats)

Defined in: node\_modules/zod/v4/core/checks.d.cts:65

###### Inherited from

[`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef).[`format`](#format-7)

##### type

> **type**: `"number"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:347

###### Inherited from

[`$ZodNumberDef`](#zodnumberdef).[`type`](#type-44)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef).[`when`](#when-17)

---

### $ZodNumberFormatInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:371

#### Extends

- [`$ZodNumberInternals`](#zodnumberinternals)\<`number`\>.[`$ZodCheckNumberFormatInternals`](#zodchecknumberformatinternals)

#### Properties

##### def

> **def**: [`$ZodNumberFormatDef`](#zodnumberformatdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:372

Schema definition.

###### Overrides

[`$ZodNumberInternals`](#zodnumberinternals).[`def`](#def-66)

##### issc

> **issc**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:69

The set of issues this check might throw.

###### Inherited from

[`$ZodNumberFormatInternals`](#zodnumberformatinternals).[`issc`](#issc-45)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:373

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

[`$ZodNumberInternals`](#zodnumberinternals).[`isst`](#isst-21)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckNumberFormatInternals`](#zodchecknumberformatinternals).[`onattach`](#onattach-18)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:353

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodNumberInternals`](#zodnumberinternals).[`pattern`](#pattern-56)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodNumberInternals`](#zodnumberinternals).[`toJSONSchema`](#tojsonschema-45)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodNumberInternals`](#zodnumberinternals).[`version`](#version-49)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`number`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckNumberFormatInternals`](#zodchecknumberformatinternals).[`check`](#check-54)

---

### $ZodNumberInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:350

#### Extended by

- [`$ZodNumberFormatInternals`](#zodnumberformatinternals)

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### def

> **def**: [`$ZodNumberDef`](#zodnumberdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:351

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:355

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.isst`

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:353

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.pattern`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodObject

Defined in: node\_modules/zod/v4/core/schemas.d.cts:598

#### Extends

- [`$ZodType`](#zodtype)\<`any`, `any`, [`$ZodObjectInternals`](#zodobjectinternals)\<`Shape`, `Params`\>\>

#### Extended by

- [`ZodObject`](../../index.md#zodobject)

#### Type Parameters

##### Shape

`Shape` _extends_ `Readonly`\<[`$ZodShape`](#zodshape)\> = `Readonly`\<[`$ZodShape`](#zodshape)\>

##### Params

`Params` _extends_ [`$ZodObjectConfig`](#zodobjectconfig) = [`$ZodObjectConfig`](#zodobjectconfig)

#### Properties

##### \_zod

> **\_zod**: [`$ZodObjectInternals`](#zodobjectinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

###### Inherited from

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodObject`](#zodobject)\<`Shape`, `Params`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:601

###### Overrides

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodObjectDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:580

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### Shape

`Shape` _extends_ [`$ZodShape`](#zodshape) = [`$ZodShape`](#zodshape)

#### Properties

##### catchall?

> `optional` **catchall**: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:583

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### shape

> **shape**: `Shape`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:582

##### type

> **type**: `"object"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:581

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodObjectInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:585

#### Extends

- [`_$ZodTypeInternals`](#_zodtypeinternals)

#### Type Parameters

##### Shape

`Shape` _extends_ [`$ZodShape`](#zodshape) = [`$ZodShape`](#zodshape)

##### Config

`Config` _extends_ [`$ZodObjectConfig`](#zodobjectconfig) = [`$ZodObjectConfig`](#zodobjectconfig)

#### Properties

##### config

> **config**: `Config`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:589

##### def

> **def**: [`$ZodObjectDef`](#zodobjectdef)\<`Shape`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:588

Schema definition.

###### Overrides

[`_$ZodTypeInternals`](#_zodtypeinternals).[`def`](#def)

##### input

> **input**: [`$InferObjectInput`](#inferobjectinput)\<`Shape`, `Config`\[`"in"`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:593

##### output

> **output**: [`$InferObjectOutput`](#inferobjectoutput)\<`Shape`, `Config`\[`"out"`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:592

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`toJSONSchema`](#tojsonschema)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`version`](#version)

---

### $ZodOptional

Defined in: node\_modules/zod/v4/core/schemas.d.cts:825

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodOptional`](../../index.md#zodoptional)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodOptionalInternals`](#zodoptionalinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:826

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodOptional`](#zodoptional)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodOptionalDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:813

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:815

##### type

> **type**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:814

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodOptionalInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:817

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodOptionalDef`](#zodoptionaldef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:818

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodPipe

Defined in: node\_modules/zod/v4/core/schemas.d.cts:960

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodPipe`](../../index.md#zodpipe)

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodPipeInternals`](#zodpipeinternals)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:961

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodPipe`](#zodpipe)\<`A`, `B`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodPipeDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:943

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Extended by

- [`$ZodCodecDef`](#zodcodecdef)

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### in

> **in**: `A`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:945

##### out

> **out**: `B`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:946

##### reverseTransform()?

> `optional` **reverseTransform**: (`value`, `payload`) => [`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`A`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:950

Only defined inside $ZodCodec instances.

###### Parameters

###### value

[`input`](#input-43)\<`B`\>

###### payload

[`ParsePayload`](#parsepayload)\<[`input`](#input-43)\<`B`\>\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`A`\>\>

##### transform()?

> `optional` **transform**: (`value`, `payload`) => [`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`B`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:948

Only defined inside $ZodCodec instances.

###### Parameters

###### value

[`output`](#output-11)\<`A`\>

###### payload

[`ParsePayload`](#parsepayload)\<[`output`](#output-11)\<`A`\>\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`B`\>\>

##### type

> **type**: `"pipe"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:944

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodPipeInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:952

#### Type Parameters

##### A

`A` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

##### B

`B` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodPipeDef`](#zodpipedef)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:953

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodPrefault

Defined in: node\_modules/zod/v4/core/schemas.d.cts:875

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodPrefault`](../../index.md#zodprefault)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodPrefaultInternals`](#zodprefaultinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:876

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodPrefault`](#zodprefault)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodPrefaultDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:862

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### defaultValue

> **defaultValue**: [`input`](#input-43)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:866

The default value. May be a getter.

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:864

##### type

> **type**: `"prefault"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:863

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodPrefaultInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:868

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodPrefaultDef`](#zodprefaultdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:869

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodPromise

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1070

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodPromise`](../../index.md#zodpromise)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodPromiseInternals`](#zodpromiseinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1071

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodPromise`](#zodpromise)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodPromiseDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1062

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1064

##### type

> **type**: `"promise"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1063

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodPromiseInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1066

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodPromiseDef`](#zodpromisedef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1067

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodReadonly

Defined in: node\_modules/zod/v4/core/schemas.d.cts:992

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodReadonly`](../../index.md#zodreadonly)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodReadonlyInternals`](#zodreadonlyinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:993

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodReadonly`](#zodreadonly)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodReadonlyDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:980

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:982

##### type

> **type**: `"readonly"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:981

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodReadonlyInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:984

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodReadonlyDef`](#zodreadonlydef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:985

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodRecord

Defined in: node\_modules/zod/v4/core/schemas.d.cts:710

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodRecord`](../../index.md#zodrecord)

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1) = [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodRecordInternals`](#zodrecordinternals)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:711

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodRecord`](#zodrecord)\<`Key`, `Value`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodRecordDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:694

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1) = [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### keyType

> **keyType**: `Key`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:696

##### type

> **type**: `"record"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:695

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

##### valueType

> **valueType**: `Value`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:697

---

### $ZodRecordInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:701

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1) = [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodRecordDef`](#zodrecorddef)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:702

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodSet

Defined in: node\_modules/zod/v4/core/schemas.d.cts:739

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodSet`](../../index.md#zodset)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodSetInternals`](#zodsetinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:740

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodSet`](#zodset)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodSetDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:729

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"set"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:730

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

##### valueType

> **valueType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:731

---

### $ZodSetInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:733

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodSetDef`](#zodsetdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:734

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodString

Defined in: node\_modules/zod/v4/core/schemas.d.cts:115

#### Extends

- [`_$ZodType`](#_zodtype)\<[`$ZodStringInternals`](#zodstringinternals)\<`Input`\>\>

#### Type Parameters

##### Input

`Input` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodStringInternals`](#zodstringinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

###### Inherited from

[`_$ZodType`](#_zodtype).[`_zod`](#_zod)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodString`](#zodstring)\<`Input`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`_$ZodType`](#_zodtype).[`~standard`](#standard)

---

### $ZodStringBoolParams

Defined in: node\_modules/zod/v4/core/api.d.cts:280

#### Extends

- [`TypeParams`](#typeparams)

#### Properties

##### case?

> `optional` **case**: `"sensitive"` \| `"insensitive"`

Defined in: node\_modules/zod/v4/core/api.d.cts:288

Options: `"sensitive"`, `"insensitive"`

###### Default

`"insensitive"`

##### error?

> `optional` **error**: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueBase`](#zodissuebase)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:7

###### Inherited from

`TypeParams.error`

##### falsy?

> `optional` **falsy**: `string`[]

Defined in: node\_modules/zod/v4/core/api.d.cts:282

##### ~~message?~~

> `optional` **message**: `string`

Defined in: node\_modules/zod/v4/core/api.d.cts:9

###### Deprecated

This parameter is deprecated. Use `error` instead.

###### Inherited from

`TypeParams.message`

##### truthy?

> `optional` **truthy**: `string`[]

Defined in: node\_modules/zod/v4/core/api.d.cts:281

---

### $ZodStringDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:96

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Extended by

- [`$ZodStringFormatDef`](#zodstringformatdef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodStringFormat

Defined in: node\_modules/zod/v4/core/schemas.d.cts:123

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`$ZodCustomStringFormat`](#zodcustomstringformat)

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### \_zod

> **\_zod**: [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`Format`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:124

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodStringFormat`](#zodstringformat)\<`Format`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodStringFormatDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:118

#### Extends

- [`$ZodStringDef`](#zodstringdef).[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`Format`\>

#### Extended by

- [`$ZodGUIDDef`](#zodguiddef)
- [`$ZodUUIDDef`](#zoduuiddef)
- [`$ZodEmailDef`](#zodemaildef)
- [`$ZodURLDef`](#zodurldef)
- [`$ZodEmojiDef`](#zodemojidef)
- [`$ZodNanoIDDef`](#zodnanoiddef)
- [`$ZodCUIDDef`](#zodcuiddef)
- [`$ZodCUID2Def`](#zodcuid2def)
- [`$ZodULIDDef`](#zoduliddef)
- [`$ZodXIDDef`](#zodxiddef)
- [`$ZodKSUIDDef`](#zodksuiddef)
- [`$ZodISODateTimeDef`](#zodisodatetimedef)
- [`$ZodISODateDef`](#zodisodatedef)
- [`$ZodISOTimeDef`](#zodisotimedef)
- [`$ZodISODurationDef`](#zodisodurationdef)
- [`$ZodIPv4Def`](#zodipv4def)
- [`$ZodIPv6Def`](#zodipv6def)
- [`$ZodCIDRv4Def`](#zodcidrv4def)
- [`$ZodCIDRv6Def`](#zodcidrv6def)
- [`$ZodBase64Def`](#zodbase64def)
- [`$ZodBase64URLDef`](#zodbase64urldef)
- [`$ZodE164Def`](#zode164def)
- [`$ZodJWTDef`](#zodjwtdef)
- [`$ZodCustomStringFormatDef`](#zodcustomstringformatdef)

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`abort`](#abort-23)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringDef`](#zodstringdef).[`checks`](#checks-53)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringDef`](#zodstringdef).[`coerce`](#coerce-26)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringDef`](#zodstringdef).[`error`](#error-77)

##### format

> **format**: `Format`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`format`](#format-11)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`pattern`](#pattern-9)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringDef`](#zodstringdef).[`type`](#type-54)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`when`](#when-23)

---

### $ZodStringFormatInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:120

#### Extends

- [`$ZodStringInternals`](#zodstringinternals)\<`string`\>.[`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals)

#### Extended by

- [`$ZodGUIDInternals`](#zodguidinternals)
- [`$ZodUUIDInternals`](#zoduuidinternals)
- [`$ZodEmailInternals`](#zodemailinternals)
- [`$ZodURLInternals`](#zodurlinternals)
- [`$ZodEmojiInternals`](#zodemojiinternals)
- [`$ZodNanoIDInternals`](#zodnanoidinternals)
- [`$ZodCUIDInternals`](#zodcuidinternals)
- [`$ZodCUID2Internals`](#zodcuid2internals)
- [`$ZodULIDInternals`](#zodulidinternals)
- [`$ZodXIDInternals`](#zodxidinternals)
- [`$ZodKSUIDInternals`](#zodksuidinternals)
- [`$ZodISODateTimeInternals`](#zodisodatetimeinternals)
- [`$ZodISODateInternals`](#zodisodateinternals)
- [`$ZodISOTimeInternals`](#zodisotimeinternals)
- [`$ZodISODurationInternals`](#zodisodurationinternals)
- [`$ZodIPv4Internals`](#zodipv4internals)
- [`$ZodIPv6Internals`](#zodipv6internals)
- [`$ZodCIDRv4Internals`](#zodcidrv4internals)
- [`$ZodCIDRv6Internals`](#zodcidrv6internals)
- [`$ZodBase64Internals`](#zodbase64internals)
- [`$ZodBase64URLInternals`](#zodbase64urlinternals)
- [`$ZodE164Internals`](#zode164internals)
- [`$ZodJWTInternals`](#zodjwtinternals)
- [`$ZodCustomStringFormatInternals`](#zodcustomstringformatinternals)

#### Type Parameters

##### Format

`Format` _extends_ `string` = `string`

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`Format`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Overrides

[`$ZodStringInternals`](#zodstringinternals).[`def`](#def-76)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals).[`issc`](#issc-24)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`isst`](#isst-23)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals).[`onattach`](#onattach-24)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`toJSONSchema`](#tojsonschema-55)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`version`](#version-59)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodCheckStringFormatInternals`](#zodcheckstringformatinternals).[`check`](#check-72)

---

### $ZodStringInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:101

#### Extended by

- [`$ZodStringFormatInternals`](#zodstringformatinternals)

#### Type Parameters

##### Input

`Input`

#### Properties

##### def

> **def**: [`$ZodStringDef`](#zodstringdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:102

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.isst`

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Overrides

`$ZodTypeInternals.pattern`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodSuccess

Defined in: node\_modules/zod/v4/core/schemas.d.cts:904

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodSuccess`](../../index.md#zodsuccess)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodSuccessInternals`](#zodsuccessinternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:905

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodSuccess`](#zodsuccess)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodSuccessDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:894

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### innerType

> **innerType**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:896

##### type

> **type**: `"success"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:895

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodSuccessInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:898

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

#### Properties

##### def

> **def**: [`$ZodSuccessDef`](#zodsuccessdef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:899

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodSymbol

Defined in: node\_modules/zod/v4/core/schemas.d.cts:429

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodSymbolInternals`](#zodsymbolinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:430

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodSymbol`](#zodsymbol)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodSymbolDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:422

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"symbol"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:423

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodSymbolInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:425

#### Properties

##### def

> **def**: [`$ZodSymbolDef`](#zodsymboldef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:426

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodTemplateLiteral

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1006

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodTemplateLiteral`](../../index.md#zodtemplateliteral)

#### Type Parameters

##### Template

`Template` _extends_ `string` = `string`

#### Properties

##### \_zod

> **\_zod**: [`$ZodTemplateLiteralInternals`](#zodtemplateliteralinternals)\<`Template`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1007

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodTemplateLiteral`](#zodtemplateliteral)\<`Template`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodTemplateLiteralDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:996

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:999

##### parts

> **parts**: [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:998

##### type

> **type**: `"template_literal"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:997

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodTemplateLiteralInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1001

#### Type Parameters

##### Template

`Template` _extends_ `string` = `string`

#### Properties

##### def

> **def**: [`$ZodTemplateLiteralDef`](#zodtemplateliteraldef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1003

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodTransform

Defined in: node\_modules/zod/v4/core/schemas.d.cts:809

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodTransform`](../../index.md#zodtransform)

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `unknown`

#### Properties

##### \_zod

> **\_zod**: [`$ZodTransformInternals`](#zodtransforminternals)\<`O`, `I`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:810

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodTransform`](#zodtransform)\<`O`, `I`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodTransformDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:801

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### transform()

> **transform**: (`input`, `payload`) => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:803

###### Parameters

###### input

`unknown`

###### payload

[`ParsePayload`](#parsepayload)\<`unknown`\>

###### Returns

`unknown`

##### type

> **type**: `"transform"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:802

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodTransformInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:805

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `unknown`

#### Properties

##### def

> **def**: [`$ZodTransformDef`](#zodtransformdef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:806

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodTuple

Defined in: node\_modules/zod/v4/core/schemas.d.cts:689

#### Extends

- [`$ZodType`](#zodtype)

#### Extended by

- [`ZodTuple`](../../index.md#zodtuple)

#### Type Parameters

##### T

`T` _extends_ [`TupleItems`](../util.md#tupleitems) = readonly [`$ZodType`](#zodtype)[]

##### Rest

`Rest` _extends_ [`SomeType`](#sometype) \| `null` = [`$ZodType`](#zodtype) \| `null`

#### Properties

##### \_zod

> **\_zod**: [`$ZodTupleInternals`](#zodtupleinternals)\<`T`, `Rest`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:690

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodTuple`](#zodtuple)\<`T`, `Rest`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodTupleDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:656

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Type Parameters

##### T

`T` _extends_ [`TupleItems`](../util.md#tupleitems) = readonly [`$ZodType`](#zodtype)[]

##### Rest

`Rest` _extends_ [`SomeType`](#sometype) \| `null` = [`$ZodType`](#zodtype) \| `null`

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### items

> **items**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:658

##### rest

> **rest**: `Rest`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:659

##### type

> **type**: `"tuple"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:657

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodTupleInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:683

#### Extends

- [`_$ZodTypeInternals`](#_zodtypeinternals)

#### Type Parameters

##### T

`T` _extends_ [`TupleItems`](../util.md#tupleitems) = readonly [`$ZodType`](#zodtype)[]

##### Rest

`Rest` _extends_ [`SomeType`](#sometype) \| `null` = [`$ZodType`](#zodtype) \| `null`

#### Properties

##### def

> **def**: [`$ZodTupleDef`](#zodtupledef)\<`T`, `Rest`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:684

Schema definition.

###### Overrides

[`_$ZodTypeInternals`](#_zodtypeinternals).[`def`](#def)

##### input

> **input**: \[`...TupleInputTypeWithOptionals<T>[]`, `...(Rest extends SomeType ? input<Rest<Rest>>[] : [])[]`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:687

##### output

> **output**: \[`...TupleOutputTypeWithOptionals<T>[]`, `...(Rest extends SomeType ? output<Rest<Rest>>[] : [])[]`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:686

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`toJSONSchema`](#tojsonschema)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`version`](#version)

---

### $ZodType

Defined in: node\_modules/zod/v4/core/schemas.d.cts:88

#### Extended by

- [`ZodType`](../../index.md#zodtype)
- [`_$ZodType`](#_zodtype)
- [`$ZodStringFormat`](#zodstringformat)
- [`$ZodGUID`](#zodguid)
- [`$ZodUUID`](#zoduuid)
- [`$ZodEmail`](#zodemail)
- [`$ZodURL`](#zodurl)
- [`$ZodEmoji`](#zodemoji)
- [`$ZodNanoID`](#zodnanoid)
- [`$ZodCUID`](#zodcuid)
- [`$ZodCUID2`](#zodcuid2)
- [`$ZodULID`](#zodulid)
- [`$ZodXID`](#zodxid)
- [`$ZodKSUID`](#zodksuid)
- [`$ZodISODateTime`](#zodisodatetime)
- [`$ZodISODate`](#zodisodate)
- [`$ZodISOTime`](#zodisotime)
- [`$ZodISODuration`](#zodisoduration)
- [`$ZodIPv4`](#zodipv4)
- [`$ZodIPv6`](#zodipv6)
- [`$ZodCIDRv4`](#zodcidrv4)
- [`$ZodCIDRv6`](#zodcidrv6)
- [`$ZodBase64`](#zodbase64)
- [`$ZodBase64URL`](#zodbase64url)
- [`$ZodE164`](#zode164)
- [`$ZodJWT`](#zodjwt)
- [`$ZodNumber`](#zodnumber)
- [`$ZodNumberFormat`](#zodnumberformat)
- [`$ZodBoolean`](#zodboolean)
- [`$ZodBigInt`](#zodbigint)
- [`$ZodBigIntFormat`](#zodbigintformat)
- [`$ZodSymbol`](#zodsymbol)
- [`$ZodUndefined`](#zodundefined)
- [`$ZodNull`](#zodnull)
- [`$ZodAny`](#zodany)
- [`$ZodUnknown`](#zodunknown)
- [`$ZodNever`](#zodnever)
- [`$ZodVoid`](#zodvoid)
- [`$ZodDate`](#zoddate)
- [`$ZodArray`](#zodarray)
- [`$ZodObject`](#zodobject)
- [`$ZodUnion`](#zodunion)
- [`$ZodDiscriminatedUnion`](#zoddiscriminatedunion)
- [`$ZodIntersection`](#zodintersection)
- [`$ZodTuple`](#zodtuple)
- [`$ZodRecord`](#zodrecord)
- [`$ZodMap`](#zodmap)
- [`$ZodSet`](#zodset)
- [`$ZodEnum`](#zodenum)
- [`$ZodLiteral`](#zodliteral)
- [`$ZodFile`](#zodfile)
- [`$ZodTransform`](#zodtransform)
- [`$ZodOptional`](#zodoptional)
- [`$ZodNullable`](#zodnullable)
- [`$ZodDefault`](#zoddefault)
- [`$ZodPrefault`](#zodprefault)
- [`$ZodNonOptional`](#zodnonoptional)
- [`$ZodSuccess`](#zodsuccess)
- [`$ZodCatch`](#zodcatch)
- [`$ZodNaN`](#zodnan)
- [`$ZodPipe`](#zodpipe)
- [`$ZodCodec`](#zodcodec)
- [`$ZodReadonly`](#zodreadonly)
- [`$ZodTemplateLiteral`](#zodtemplateliteral)
- [`$ZodFunction`](#zodfunction)
- [`$ZodPromise`](#zodpromise)
- [`$ZodLazy`](#zodlazy)
- [`$ZodCustom`](#zodcustom)
- [`$ZodTypeDiscriminable`](#zodtypediscriminable)

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `unknown`

##### Internals

`Internals` _extends_ `$ZodTypeInternals`\<`O`, `I`\> = `$ZodTypeInternals`\<`O`, `I`\>

#### Properties

##### \_zod

> **\_zod**: `Internals`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodType`](#zodtype)\<`O`, `I`, `Internals`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

---

### $ZodTypeDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:28

#### Extended by

- [`$ZodStringDef`](#zodstringdef)
- [`$ZodNumberDef`](#zodnumberdef)
- [`$ZodBooleanDef`](#zodbooleandef)
- [`$ZodBigIntDef`](#zodbigintdef)
- [`$ZodSymbolDef`](#zodsymboldef)
- [`$ZodUndefinedDef`](#zodundefineddef)
- [`$ZodNullDef`](#zodnulldef)
- [`$ZodAnyDef`](#zodanydef)
- [`$ZodUnknownDef`](#zodunknowndef)
- [`$ZodNeverDef`](#zodneverdef)
- [`$ZodVoidDef`](#zodvoiddef)
- [`$ZodDateDef`](#zoddatedef)
- [`$ZodArrayDef`](#zodarraydef)
- [`$ZodObjectDef`](#zodobjectdef)
- [`$ZodUnionDef`](#zoduniondef)
- [`$ZodIntersectionDef`](#zodintersectiondef)
- [`$ZodTupleDef`](#zodtupledef)
- [`$ZodRecordDef`](#zodrecorddef)
- [`$ZodMapDef`](#zodmapdef)
- [`$ZodSetDef`](#zodsetdef)
- [`$ZodEnumDef`](#zodenumdef)
- [`$ZodLiteralDef`](#zodliteraldef)
- [`$ZodFileDef`](#zodfiledef)
- [`$ZodTransformDef`](#zodtransformdef)
- [`$ZodOptionalDef`](#zodoptionaldef)
- [`$ZodNullableDef`](#zodnullabledef)
- [`$ZodDefaultDef`](#zoddefaultdef)
- [`$ZodPrefaultDef`](#zodprefaultdef)
- [`$ZodNonOptionalDef`](#zodnonoptionaldef)
- [`$ZodSuccessDef`](#zodsuccessdef)
- [`$ZodCatchDef`](#zodcatchdef)
- [`$ZodNaNDef`](#zodnandef)
- [`$ZodPipeDef`](#zodpipedef)
- [`$ZodReadonlyDef`](#zodreadonlydef)
- [`$ZodTemplateLiteralDef`](#zodtemplateliteraldef)
- [`$ZodFunctionDef`](#zodfunctiondef)
- [`$ZodPromiseDef`](#zodpromisedef)
- [`$ZodLazyDef`](#zodlazydef)
- [`$ZodCustomDef`](#zodcustomdef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

##### type

> **type**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:29

---

### $ZodTypeDiscriminable

Defined in: node\_modules/zod/v4/core/api.d.cts:209

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodTypeDiscriminableInternals`](#zodtypediscriminableinternals)

Defined in: node\_modules/zod/v4/core/api.d.cts:210

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodTypeDiscriminable`](#zodtypediscriminable)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodTypeDiscriminableInternals

Defined in: node\_modules/zod/v4/core/api.d.cts:206

#### Properties

##### def

> **def**: [`$ZodTypeDef`](#zodtypedef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:37

Schema definition.

###### Inherited from

`schemas.$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`schemas.$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`schemas.$ZodTypeInternals.version`

---

### $ZodULID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:201

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodULIDInternals`](#zodulidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:202

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodULID`](#zodulid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodULIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:197

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ulid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"ulid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodULIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:199

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"ulid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ulid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodUndefined

Defined in: node\_modules/zod/v4/core/schemas.d.cts:442

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodUndefinedInternals`](#zodundefinedinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:443

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodUndefined`](#zodundefined)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodUndefinedDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:433

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"undefined"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:434

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodUndefinedInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:436

#### Properties

##### def

> **def**: [`$ZodUndefinedDef`](#zodundefineddef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:438

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodUnion

Defined in: node\_modules/zod/v4/core/schemas.d.cts:623

#### Extends

- [`$ZodType`](#zodtype)\<`any`, `any`, [`$ZodUnionInternals`](#zodunioninternals)\<`T`\>\>

#### Extended by

- [`ZodUnion`](../../index.md#zodunion)

#### Type Parameters

##### T

`T` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

#### Properties

##### \_zod

> **\_zod**: [`$ZodUnionInternals`](#zodunioninternals)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:624

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodUnion`](#zodunion)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodUnionDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:607

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Extended by

- [`$ZodDiscriminatedUnionDef`](#zoddiscriminateduniondef)

#### Type Parameters

##### Options

`Options` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### options

> **options**: `Options`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:609

##### type

> **type**: `"union"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:608

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodUnionInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:613

#### Extends

- [`_$ZodTypeInternals`](#_zodtypeinternals)

#### Extended by

- [`$ZodDiscriminatedUnionInternals`](#zoddiscriminatedunioninternals)

#### Type Parameters

##### T

`T` _extends_ readonly [`SomeType`](#sometype)[] = readonly [`$ZodType`](#zodtype)[]

#### Properties

##### def

> **def**: [`$ZodUnionDef`](#zoduniondef)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:614

Schema definition.

###### Overrides

[`_$ZodTypeInternals`](#_zodtypeinternals).[`def`](#def)

##### input

> **input**: [`$InferUnionInput`](#inferunioninput)\<`T`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:619

##### output

> **output**: [`$InferUnionOutput`](#inferunionoutput)\<`T`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:618

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`toJSONSchema`](#tojsonschema)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`_$ZodTypeInternals`](#_zodtypeinternals).[`version`](#version)

---

### $ZodUnknown

Defined in: node\_modules/zod/v4/core/schemas.d.cts:477

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodUnknownInternals`](#zodunknowninternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:478

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodUnknown`](#zodunknown)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodUnknownDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:470

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"unknown"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:471

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodUnknownInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:473

#### Properties

##### def

> **def**: [`$ZodUnknownDef`](#zodunknowndef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:474

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodURL

Defined in: node\_modules/zod/v4/core/schemas.d.cts:161

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodURLInternals`](#zodurlinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:162

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodURL`](#zodurl)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodURLDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:153

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"url"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"url"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### hostname?

> `optional` **hostname**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:154

##### normalize?

> `optional` **normalize**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:156

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### protocol?

> `optional` **protocol**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:155

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodURLInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:158

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"url"`\>

#### Properties

##### def

> **def**: [`$ZodURLDef`](#zodurldef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:159

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodUUID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:141

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodUUIDInternals`](#zoduuidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:142

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodUUID`](#zoduuid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodUUIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:135

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"uuid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"uuid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### version?

> `optional` **version**: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:136

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodUUIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:138

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"uuid"`\>

#### Properties

##### def

> **def**: [`$ZodUUIDDef`](#zoduuiddef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:139

Schema definition.

###### Overrides

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### $ZodVoid

Defined in: node\_modules/zod/v4/core/schemas.d.cts:499

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodVoidInternals`](#zodvoidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:500

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodVoid`](#zodvoid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodVoidDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:492

#### Extends

- [`$ZodTypeDef`](#zodtypedef)

#### Properties

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`never`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:31

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`checks`](#checks-60)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodTypeDef`](#zodtypedef).[`error`](#error-84)

##### type

> **type**: `"void"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:493

###### Overrides

[`$ZodTypeDef`](#zodtypedef).[`type`](#type-61)

---

### $ZodVoidInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:495

#### Properties

##### def

> **def**: [`$ZodVoidDef`](#zodvoiddef)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:496

Schema definition.

###### Overrides

`$ZodTypeInternals.def`

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

`$ZodTypeInternals.toJSONSchema`

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

`$ZodTypeInternals.version`

---

### $ZodXID

Defined in: node\_modules/zod/v4/core/schemas.d.cts:209

#### Extends

- [`$ZodType`](#zodtype)

#### Properties

##### \_zod

> **\_zod**: [`$ZodXIDInternals`](#zodxidinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:210

###### Overrides

[`$ZodType`](#zodtype).[`_zod`](#_zod-84)

##### ~standard

> **~standard**: [`$ZodStandardSchema`](#zodstandardschema)\<[`$ZodXID`](#zodxid)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:90

###### Inherited from

[`$ZodType`](#zodtype).[`~standard`](#standard-61)

---

### $ZodXIDDef

Defined in: node\_modules/zod/v4/core/schemas.d.cts:205

#### Extends

- [`$ZodStringFormatDef`](#zodstringformatdef)\<`"xid"`\>

#### Properties

##### abort?

> `optional` **abort**: `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:9

If true, no later checks will be executed if this check fails. Default `false`.

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`abort`](#abort-45)

##### check

> **check**: `"string_format"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:162

###### Inherited from

[`$ZodCheckStringFormatDef`](#zodcheckstringformatdef).[`check`](#check-71)

##### checks?

> `optional` **checks**: [`$ZodCheck`](#zodcheck)\<`string`\>[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:99

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`checks`](#checks-54)

##### coerce?

> `optional` **coerce**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:98

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`coerce`](#coerce-27)

##### error?

> `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`never`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:30

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`error`](#error-78)

##### format

> **format**: `"xid"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:163

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`format`](#format-44)

##### pattern?

> `optional` **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/checks.d.cts:164

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`pattern`](#pattern-57)

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:97

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`type`](#type-55)

##### when()?

> `optional` **when**: (`payload`) => `boolean`

Defined in: node\_modules/zod/v4/core/checks.d.cts:11

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)

###### Returns

`boolean`

###### Inherited from

[`$ZodStringFormatDef`](#zodstringformatdef).[`when`](#when-45)

---

### $ZodXIDInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:207

#### Extends

- [`$ZodStringFormatInternals`](#zodstringformatinternals)\<`"xid"`\>

#### Properties

##### def

> **def**: [`$ZodStringFormatDef`](#zodstringformatdef)\<`"xid"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:121

Schema definition.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`def`](#def-75)

##### issc

> **issc**: [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)

Defined in: node\_modules/zod/v4/core/checks.d.cts:168

The set of issues this check might throw.

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`issc`](#issc-46)

##### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`](#zodissueinvalidtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:106

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`isst`](#isst-22)

##### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

###### Parameters

###### schema

[`$ZodType`](#zodtype)

###### Returns

`void`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`onattach`](#onattach-46)

##### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:104

###### Deprecated

Internal API, use with caution (not deprecated)

###### Inherited from

[`$ZodStringInternals`](#zodstringinternals).[`pattern`](#pattern-59)

##### toJSONSchema()?

> `optional` **toJSONSchema**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:73

An optional method used to override `toJSONSchema` logic.

###### Returns

`unknown`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`toJSONSchema`](#tojsonschema-54)

##### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:35

The `@zod/core` version of this schema

###### major

> `readonly` **major**: `4`

###### minor

> `readonly` **minor**: `1`

###### patch

> `readonly` **patch**: `number`

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`version`](#version-58)

#### Methods

##### check()

> **check**(`payload`): [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

###### Parameters

###### payload

[`ParsePayload`](#parsepayload)\<`string`\>

###### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

###### Inherited from

[`$ZodStringFormatInternals`](#zodstringformatinternals).[`check`](#check-138)

---

### File

Defined in: node\_modules/zod/v4/core/schemas.d.cts:781

Do not reference this directly.

#### Extends

- `_File`

#### Properties

##### lastModified

> `readonly` **lastModified**: `number`

Defined in: node\_modules/bun-types/globals.d.ts:335

###### Inherited from

`_File.lastModified`

##### name

> `readonly` **name**: `string`

Defined in: node\_modules/bun-types/globals.d.ts:336

###### Inherited from

`_File.name`

##### size

> `readonly` **size**: `number`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:783

The size of this Blob in bytes

###### Overrides

`_File.size`

##### type

> `readonly` **type**: `string`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:782

The MIME type of this Blob

###### Overrides

`_File.type`

#### Methods

##### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: node\_modules/bun-types/globals.d.ts:1481

Returns a promise that resolves to the contents of the blob as an ArrayBuffer

###### Returns

`Promise`\<`ArrayBuffer`\>

###### Inherited from

`_File.arrayBuffer`

##### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/bun-types/globals.d.ts:1486

Returns a promise that resolves to the contents of the blob as a Uint8Array (array of bytes) its the same as `new Uint8Array(await blob.arrayBuffer())`

###### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

###### Inherited from

`_File.bytes`

##### formData()

> **formData**(): `Promise`\<`FormData`\>

Defined in: node\_modules/bun-types/globals.d.ts:1471

Read the data from the blob as a FormData object.

This first decodes the data from UTF-8, then parses it as a
`multipart/form-data` body or a `application/x-www-form-urlencoded` body.

The `type` property of the blob is used to determine the format of the
body.

This is a non-standard addition to the `Blob` API, to make it conform more
closely to the `BodyMixin` API.

###### Returns

`Promise`\<`FormData`\>

###### Inherited from

`_File.formData`

##### json()

> **json**(): `Promise`\<`any`\>

Defined in: node\_modules/bun-types/globals.d.ts:1457

Read the data from the blob as a JSON object.

This first decodes the data from UTF-8, then parses it as JSON.

###### Returns

`Promise`\<`any`\>

###### Inherited from

`_File.json`

##### stream()

> **stream**(): `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/bun-types/globals.d.ts:1491

Returns a readable stream of the blob's contents

###### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

###### Inherited from

`_File.stream`

##### text()

> **text**(): `Promise`\<`string`\>

Defined in: node\_modules/bun-types/globals.d.ts:1476

Returns a promise that resolves to the contents of the blob as a string

###### Returns

`Promise`\<`string`\>

###### Inherited from

`_File.text`

---

### GlobalMeta

Defined in: node\_modules/zod/v4/core/registries.d.cts:31

#### Extends

- [`JSONSchemaMeta`](#jsonschemameta)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/registries.d.cts:28

###### Inherited from

[`JSONSchemaMeta`](#jsonschemameta).[`deprecated`](#deprecated-1)

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:27

###### Inherited from

[`JSONSchemaMeta`](#jsonschemameta).[`description`](#description-1)

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:25

###### Inherited from

[`JSONSchemaMeta`](#jsonschemameta).[`id`](#id-1)

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:26

###### Inherited from

[`JSONSchemaMeta`](#jsonschemameta).[`title`](#title-1)

---

### JSONSchemaMeta

Defined in: node\_modules/zod/v4/core/registries.d.cts:24

#### Extended by

- [`GlobalMeta`](#globalmeta)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/registries.d.cts:28

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:27

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:25

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/registries.d.cts:26

---

### ParseContext

Defined in: node\_modules/zod/v4/core/schemas.d.cts:7

#### Type Parameters

##### T

`T` _extends_ [`$ZodIssueBase`](#zodissuebase) = `never`

#### Properties

##### error?

> `readonly` `optional` **error**: [`$ZodErrorMap`](#zoderrormap)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:9

Customize error messages.

##### jitless?

> `readonly` `optional` **jitless**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:13

Skip eval-based fast path. Default `false`.

##### reportInput?

> `readonly` `optional` **reportInput**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:11

Include the `input` field in issue objects. Default `false`.

---

### ParsePayload

Defined in: node\_modules/zod/v4/core/schemas.d.cts:21

#### Extended by

- [`$ZodCatchCtx`](#zodcatchctx)
- [`$RefinementCtx`](#refinementctx)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### aborted?

> `optional` **aborted**: `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:25

A may to mark a whole payload as aborted. Used in codecs/pipes.

##### issues

> **issues**: (\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](../util.md#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \})[]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:23

##### value

> **value**: `T`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:22

## Type Aliases

### $brand

> **$brand**\<`T`\> = `object`

Defined in: node\_modules/zod/v4/core/core.d.cts:19

#### Type Parameters

##### T

`T` _extends_ `string` \| `number` \| `symbol` = `string` \| `number` \| `symbol`

#### Properties

##### \[$brand\]

> **\[$brand\]**: `{ [k in T]: true }`

Defined in: node\_modules/zod/v4/core/core.d.cts:21

---

### $catchall

> **$catchall**\<`T`\> = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:569

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype)

#### Properties

##### in

> **in**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:573

###### Index Signature

\[`k`: `string`\]: [`input`](#input-43)\<`T`\>

##### out

> **out**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:570

###### Index Signature

\[`k`: `string`\]: [`output`](#output-11)\<`T`\>

---

### $Decode()

> **$Decode** = \<`T`\>(`schema`, `value`, `_ctx?`) => [`output`](#output-11)\<`T`\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:29

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`input`](#input-43)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

[`output`](#output-11)\<`T`\>

---

### $DecodeAsync()

> **$DecodeAsync** = \<`T`\>(`schema`, `value`, `_ctx?`) => `Promise`\<[`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:35

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`input`](#input-43)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

`Promise`\<[`output`](#output-11)\<`T`\>\>

---

### $Encode()

> **$Encode** = \<`T`\>(`schema`, `value`, `_ctx?`) => [`input`](#input-43)\<`T`\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:26

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`output`](#output-11)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

[`input`](#input-43)\<`T`\>

---

### $EncodeAsync()

> **$EncodeAsync** = \<`T`\>(`schema`, `value`, `_ctx?`) => `Promise`\<[`input`](#input-43)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:32

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`output`](#output-11)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

`Promise`\<[`input`](#input-43)\<`T`\>\>

---

### $InferEnumInput

> **$InferEnumInput**\<`T`\> = `T`\[keyof `T`\] & `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:744

#### Type Parameters

##### T

`T` _extends_ [`EnumLike`](../util.md#enumlike)

---

### $InferEnumOutput

> **$InferEnumOutput**\<`T`\> = `T`\[keyof `T`\] & `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:743

#### Type Parameters

##### T

`T` _extends_ [`EnumLike`](../util.md#enumlike)

---

### $InferInnerFunctionType()

> **$InferInnerFunctionType**\<`Args`, `Returns`\> = (...`args`) => [`input`](#input-43)\<`Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1032

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout)

#### Parameters

##### args

...[`$ZodFunctionIn`](#zodfunctionin) _extends_ `Args` ? `never`[] : [`output`](#output-11)\<`Args`\>

#### Returns

[`input`](#input-43)\<`Returns`\>

---

### $InferInnerFunctionTypeAsync()

> **$InferInnerFunctionTypeAsync**\<`Args`, `Returns`\> = (...`args`) => [`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`Returns`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1033

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout)

#### Parameters

##### args

...[`$ZodFunctionIn`](#zodfunctionin) _extends_ `Args` ? `never`[] : [`output`](#output-11)\<`Args`\>

#### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`input`](#input-43)\<`Returns`\>\>

---

### $InferObjectInput

> **$InferObjectInput**\<`T`, `Extra`\> = `string` _extends_ keyof `T` ? [`IsAny`](../util.md#isany)\<`T`\[keyof `T`\]\> _extends_ `true` ? `Record`\<`string`, `unknown`\> : `Record`\<`string`, [`input`](#input-43)\<`T`\[keyof `T`\]\>\> : keyof `T` & `Extra` _extends_ `never` ? `Record`\<`string`, `never`\> : [`Prettify`](../util.md#prettify)\<`{ -readonly [k in keyof T as T[k] extends OptionalInSchema ? never : k]: T[k]["_zod"]["input"] }` & `{ -readonly [k in keyof T as T[k] extends OptionalInSchema ? k : never]?: T[k]["_zod"]["input"] }` & `Extra`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:548

#### Type Parameters

##### T

`T` _extends_ [`$ZodLooseShape`](#zodlooseshape)

##### Extra

`Extra` _extends_ `Record`\<`string`, `unknown`\>

---

### $InferObjectOutput

> **$InferObjectOutput**\<`T`, `Extra`\> = `string` _extends_ keyof `T` ? [`IsAny`](../util.md#isany)\<`T`\[keyof `T`\]\> _extends_ `true` ? `Record`\<`string`, `unknown`\> : `Record`\<`string`, [`output`](#output-11)\<`T`\[keyof `T`\]\>\> : keyof `T` & `Extra` _extends_ `never` ? `Record`\<`string`, `never`\> : [`Prettify`](../util.md#prettify)\<`{ -readonly [k in keyof T as T[k] extends OptionalOutSchema ? never : k]: T[k]["_zod"]["output"] }` & `{ -readonly [k in keyof T as T[k] extends OptionalOutSchema ? k : never]?: T[k]["_zod"]["output"] }` & `Extra`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:543

#### Type Parameters

##### T

`T` _extends_ [`$ZodLooseShape`](#zodlooseshape)

##### Extra

`Extra` _extends_ `Record`\<`string`, `unknown`\>

---

### $InferOuterFunctionType()

> **$InferOuterFunctionType**\<`Args`, `Returns`\> = (...`args`) => [`output`](#output-11)\<`Returns`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1034

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout)

#### Parameters

##### args

...[`$ZodFunctionIn`](#zodfunctionin) _extends_ `Args` ? `never`[] : [`input`](#input-43)\<`Args`\>

#### Returns

[`output`](#output-11)\<`Returns`\>

---

### $InferOuterFunctionTypeAsync()

> **$InferOuterFunctionTypeAsync**\<`Args`, `Returns`\> = (...`args`) => [`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`Returns`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1035

#### Type Parameters

##### Args

`Args` _extends_ [`$ZodFunctionIn`](#zodfunctionin)

##### Returns

`Returns` _extends_ [`$ZodFunctionOut`](#zodfunctionout)

#### Parameters

##### args

...[`$ZodFunctionIn`](#zodfunctionin) _extends_ `Args` ? `never`[] : [`input`](#input-43)\<`Args`\>

#### Returns

[`MaybeAsync`](../util.md#maybeasync)\<[`output`](#output-11)\<`Returns`\>\>

---

### $InferTupleInputType

> **$InferTupleInputType**\<`T`, `Rest`\> = \[`...TupleInputTypeWithOptionals<T>`, `...(Rest extends SomeType ? input<Rest>[] : [])`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:661

#### Type Parameters

##### T

`T` _extends_ [`TupleItems`](../util.md#tupleitems)

##### Rest

`Rest` _extends_ [`SomeType`](#sometype) \| `null`

---

### $InferTupleOutputType

> **$InferTupleOutputType**\<`T`, `Rest`\> = \[`...TupleOutputTypeWithOptionals<T>`, `...(Rest extends SomeType ? output<Rest>[] : [])`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:672

#### Type Parameters

##### T

`T` _extends_ [`TupleItems`](../util.md#tupleitems)

##### Rest

`Rest` _extends_ [`SomeType`](#sometype) \| `null`

---

### $InferUnionInput

> **$InferUnionInput**\<`T`\> = `T` _extends_ `any` ? [`input`](#input-43)\<`T`\> : `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:606

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype)

---

### $InferUnionOutput

> **$InferUnionOutput**\<`T`\> = `T` _extends_ `any` ? [`output`](#output-11)\<`T`\> : `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:605

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype)

---

### $InferZodRecordInput

> **$InferZodRecordInput**\<`Key`, `Value`\> = `Key` *extends* [`$partial`](#partial) ?`Partial`\<`Record`\<[`input`](#input-43)\<`Key`\>, [`input`](#input-43)\<`Value`\>\>\> :`Record`\<[`input`](#input-43)\<`Key`\>, [`input`](#input-43)\<`Value`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:700

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1) = [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

---

### $InferZodRecordOutput

> **$InferZodRecordOutput**\<`Key`, `Value`\> = `Key` *extends* [`$partial`](#partial) ?`Partial`\<`Record`\<[`output`](#output-11)\<`Key`\>, [`output`](#output-11)\<`Value`\>\>\> :`Record`\<[`output`](#output-11)\<`Key`\>, [`output`](#output-11)\<`Value`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:699

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1) = [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`SomeType`](#sometype) = [`$ZodType`](#zodtype)

---

### $input

> **$input** = *typeof* [`$input`](#input-44)

Defined in: node\_modules/zod/v4/core/registries.d.cts:5

---

### $loose

> **$loose** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:557

#### Properties

##### in

> **in**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:559

##### out

> **out**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:558

---

### $output

> **$output** = *typeof* [`$output`](#output-12)

Defined in: node\_modules/zod/v4/core/registries.d.cts:3

---

### $Parse()

> **$Parse** = \<`T`\>(`schema`, `value`, `_ctx?`, `_params?`) => [`output`](#output-11)\<`T`\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:8

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

`unknown`

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

##### \_params?

###### callee?

[`AnyFunc`](../util.md#anyfunc)

###### Err?

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`output`](#output-11)\<`T`\>

---

### $ParseAsync()

> **$ParseAsync** = \<`T`\>(`schema`, `value`, `_ctx?`, `_params?`) => `Promise`\<[`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:14

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

`unknown`

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

##### \_params?

###### callee?

[`AnyFunc`](../util.md#anyfunc)

###### Err?

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

`Promise`\<[`output`](#output-11)\<`T`\>\>

---

### $partial

> **$partial** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:707

#### Properties

##### ~~partial

> **~~partial**: `true`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:708

---

### $PartsToTemplateLiteral

> **$PartsToTemplateLiteral**\<`Parts`\> = \[\] *extends* `Parts` ? `""` : `Parts` *extends* \[`...(infer Rest)`, infer Last\] ? `Rest` *extends* [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[] ?`AppendToTemplateLiteral`\<[`$PartsToTemplateLiteral`](#partstotemplateliteral)\<`Rest`\>,`Last`\> :`never`:`never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1027

#### Type Parameters

##### Parts

`Parts` _extends_ [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[]

---

### $replace

> **$replace**\<`Meta`, `S`\> = `Meta` *extends* [`$output`](#output-10) ? [`output`](#output-11)\<`S`\> :`Meta`*extends* [` $input`](#input-42) ? [`input`](#input-43)\<`S`\> : `Meta` *extends* infer M[] ? [`$replace`](#replace)\<`M`,`S`\>[] :`Meta`*extends* (...`args`) => infer R ? (...`args`) => [`$replace`](#replace)\<`R`,`S`\> :`Meta`*extends*`object`?`{ [K in keyof Meta]: $replace<Meta[K], S> }`:`Meta`

Defined in: node\_modules/zod/v4/core/registries.d.cts:7

#### Type Parameters

##### Meta

`Meta`

##### S

`S` _extends_ [`$ZodType`](#zodtype)

---

### $SafeDecode()

> **$SafeDecode** = \<`T`\>(`schema`, `value`, `_ctx?`) => [`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:41

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`input`](#input-43)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>

---

### $SafeDecodeAsync()

> **$SafeDecodeAsync** = \<`T`\>(`schema`, `value`, `_ctx?`) => `Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:47

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`input`](#input-43)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

`Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>\>

---

### $SafeEncode()

> **$SafeEncode** = \<`T`\>(`schema`, `value`, `_ctx?`) => [`SafeParseResult`](../util.md#safeparseresult)\<[`input`](#input-43)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:38

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`output`](#output-11)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

[`SafeParseResult`](../util.md#safeparseresult)\<[`input`](#input-43)\<`T`\>\>

---

### $SafeEncodeAsync()

> **$SafeEncodeAsync** = \<`T`\>(`schema`, `value`, `_ctx?`) => `Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`input`](#input-43)\<`T`\>\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:44

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

[`output`](#output-11)\<`T`\>

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

`Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`input`](#input-43)\<`T`\>\>\>

---

### $SafeParse()

> **$SafeParse** = \<`T`\>(`schema`, `value`, `_ctx?`) => [`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:20

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

`unknown`

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>

---

### $SafeParseAsync()

> **$SafeParseAsync** = \<`T`\>(`schema`, `value`, `_ctx?`) => `Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>\>

Defined in: node\_modules/zod/v4/core/parse.d.cts:23

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)

#### Parameters

##### schema

`T`

##### value

`unknown`

##### \_ctx?

[`ParseContext`](#parsecontext)\<[`$ZodIssue`](#zodissue)\>

#### Returns

`Promise`\<[`SafeParseResult`](../util.md#safeparseresult)\<[`output`](#output-11)\<`T`\>\>\>

---

### $strict

> **$strict** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:561

#### Properties

##### in

> **in**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:563

##### out

> **out**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:562

---

### $strip

> **$strip** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:565

#### Properties

##### in

> **in**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:567

##### out

> **out**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:566

---

### $ZodAnyParams

> **$ZodAnyParams** = [`TypeParams`](#typeparams)\<[`$ZodAny`](#zodany)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:135

---

### $ZodArrayParams

> **$ZodArrayParams** = [`TypeParams`](#typeparams)\<[`$ZodArray`](#zodarray),`"element"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:201

---

### $ZodBase64Params

> **$ZodBase64Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodBase64`](#zodbase64),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:78

---

### $ZodBase64URLParams

> **$ZodBase64URLParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodBase64URL`](#zodbase64url),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:81

---

### $ZodBigIntFormatParams

> **$ZodBigIntFormatParams** = [`CheckTypeParams`](#checktypeparams)\<[`$ZodBigIntFormat`](#zodbigintformat),`"format"`\|`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:123

---

### $ZodBigIntFormats

> **$ZodBigIntFormats** = `"int64"` \| `"uint64"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:75

---

### $ZodBigIntParams

> **$ZodBigIntParams** = [`TypeParams`](#typeparams)\<[`$ZodBigInt`](#zodbigint)\<`bigint`\>\>

Defined in: node\_modules/zod/v4/core/api.d.cts:122

---

### $ZodBooleanParams

> **$ZodBooleanParams** = [`TypeParams`](#typeparams)\<[`$ZodBoolean`](#zodboolean)\<`boolean`\>,`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:119

---

### $ZodBranded

> **$ZodBranded**\<`T`, `Brand`\> = `T` & `Record`\<`"_zod"`, `Record`\<`"output"`, [`output`](#output-11)\<`T`\> & [`$brand`](#brand)\<`Brand`\>\>\>

Defined in: node\_modules/zod/v4/core/core.d.cts:25

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](#sometype)

##### Brand

`Brand` _extends_ `string` \| `number` \| `symbol`

---

### $ZodCatchParams

> **$ZodCatchParams** = [`TypeParams`](#typeparams)\<[`$ZodCatch`](#zodcatch),`"innerType"`\|`"catchValue"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:253

---

### $ZodCheckBase64Params

> **$ZodCheckBase64Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodBase64`](#zodbase64),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:79

---

### $ZodCheckBase64URLParams

> **$ZodCheckBase64URLParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodBase64URL`](#zodbase64url),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:82

---

### $ZodCheckBigIntFormatParams

> **$ZodCheckBigIntFormatParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckBigIntFormat`](#zodcheckbigintformat),`"format"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:124

---

### $ZodCheckCIDRv4Params

> **$ZodCheckCIDRv4Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodCIDRv4`](#zodcidrv4),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:73

---

### $ZodCheckCIDRv6Params

> **$ZodCheckCIDRv6Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodCIDRv6`](#zodcidrv6),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:76

---

### $ZodCheckCUID2Params

> **$ZodCheckCUID2Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodCUID2`](#zodcuid2),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:55

---

### $ZodCheckCUIDParams

> **$ZodCheckCUIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodCUID`](#zodcuid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:52

---

### $ZodCheckE164Params

> **$ZodCheckE164Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodE164`](#zode164),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:85

---

### $ZodCheckEmailParams

> **$ZodCheckEmailParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodEmail`](#zodemail),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:25

---

### $ZodCheckEmojiParams

> **$ZodCheckEmojiParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodEmoji`](#zodemoji),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:46

---

### $ZodCheckEndsWithParams

> **$ZodCheckEndsWithParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckEndsWith`](#zodcheckendswith),`"suffix"`\|`"format"`\|`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:188

---

### $ZodCheckGreaterThanParams

> **$ZodCheckGreaterThanParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckGreaterThan`](#zodcheckgreaterthan),`"inclusive"`\|`"value"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:154

---

### $ZodCheckGUIDParams

> **$ZodCheckGUIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodGUID`](#zodguid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:28

---

### $ZodCheckIncludesParams

> **$ZodCheckIncludesParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckIncludes`](#zodcheckincludes),`"includes"`\|`"format"`\|`"when"`\|`"pattern"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:184

---

### $ZodCheckIPv4Params

> **$ZodCheckIPv4Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodIPv4`](#zodipv4),`"pattern"`\|`"when"`\|`"version"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:67

---

### $ZodCheckIPv6Params

> **$ZodCheckIPv6Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodIPv6`](#zodipv6),`"pattern"`\|`"when"`\|`"version"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:70

---

### $ZodCheckISODateParams

> **$ZodCheckISODateParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodISODate`](#zodisodate),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:101

---

### $ZodCheckISODateTimeParams

> **$ZodCheckISODateTimeParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodISODateTime`](#zodisodatetime),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:98

---

### $ZodCheckISODurationParams

> **$ZodCheckISODurationParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodISODuration`](#zodisoduration),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:107

---

### $ZodCheckISOTimeParams

> **$ZodCheckISOTimeParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodISOTime`](#zodisotime),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:104

---

### $ZodCheckJWTParams

> **$ZodCheckJWTParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodJWT`](#zodjwt),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:88

---

### $ZodCheckKSUIDParams

> **$ZodCheckKSUIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodKSUID`](#zodksuid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:64

---

### $ZodCheckLengthEqualsParams

> **$ZodCheckLengthEqualsParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckLengthEquals`](#zodchecklengthequals),`"length"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:176

---

### $ZodCheckLessThanParams

> **$ZodCheckLessThanParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckLessThan`](#zodchecklessthan),`"inclusive"`\|`"value"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:148

---

### $ZodCheckLowerCaseParams

> **$ZodCheckLowerCaseParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckLowerCase`](#zodchecklowercase),`"format"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:180

---

### $ZodCheckMaxLengthParams

> **$ZodCheckMaxLengthParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMaxLength`](#zodcheckmaxlength),`"maximum"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:172

---

### $ZodCheckMaxSizeParams

> **$ZodCheckMaxSizeParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMaxSize`](#zodcheckmaxsize),`"maximum"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:166

---

### $ZodCheckMimeTypeParams

> **$ZodCheckMimeTypeParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMimeType`](#zodcheckmimetype),`"mime"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:194

---

### $ZodCheckMinLengthParams

> **$ZodCheckMinLengthParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMinLength`](#zodcheckminlength),`"minimum"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:174

---

### $ZodCheckMinSizeParams

> **$ZodCheckMinSizeParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMinSize`](#zodcheckminsize),`"minimum"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:168

---

### $ZodCheckMultipleOfParams

> **$ZodCheckMultipleOfParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckMultipleOf`](#zodcheckmultipleof),`"value"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:164

---

### $ZodCheckNanoIDParams

> **$ZodCheckNanoIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodNanoID`](#zodnanoid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:49

---

### $ZodCheckNumberFormatParams

> **$ZodCheckNumberFormatParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckNumberFormat`](#zodchecknumberformat),`"format"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:111

---

### $ZodCheckPropertyParams

> **$ZodCheckPropertyParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckProperty`](#zodcheckproperty),`"property"`\|`"schema"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:190

---

### $ZodCheckRegexParams

> **$ZodCheckRegexParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckRegex`](#zodcheckregex),`"format"`\|`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:178

---

### $ZodChecks

> **$ZodChecks** = [`$ZodCheckLessThan`](#zodchecklessthan) \| [` $ZodCheckGreaterThan`](#zodcheckgreaterthan) \| [`$ZodCheckMultipleOf`](#zodcheckmultipleof) \| [` $ZodCheckNumberFormat`](#zodchecknumberformat) \| [`$ZodCheckBigIntFormat`](#zodcheckbigintformat) \| [` $ZodCheckMaxSize`](#zodcheckmaxsize) \| [`$ZodCheckMinSize`](#zodcheckminsize) \| [` $ZodCheckSizeEquals`](#zodchecksizeequals) \| [`$ZodCheckMaxLength`](#zodcheckmaxlength) \| [` $ZodCheckMinLength`](#zodcheckminlength) \| [`$ZodCheckLengthEquals`](#zodchecklengthequals) \| [` $ZodCheckStringFormat`](#zodcheckstringformat) \| [`$ZodCheckProperty`](#zodcheckproperty) \| [` $ZodCheckMimeType`](#zodcheckmimetype) \| [`$ZodCheckOverwrite`](#zodcheckoverwrite)

Defined in: node\_modules/zod/v4/core/checks.d.cts:277

---

### $ZodCheckSizeEqualsParams

> **$ZodCheckSizeEqualsParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckSizeEquals`](#zodchecksizeequals),`"size"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:170

---

### $ZodCheckStartsWithParams

> **$ZodCheckStartsWithParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckStartsWith`](#zodcheckstartswith),`"prefix"`\|`"format"`\|`"when"`\|`"pattern"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:186

---

### $ZodCheckStringFormatParams

> **$ZodCheckStringFormatParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckStringFormat`](#zodcheckstringformat),`"format"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:23

---

### $ZodCheckULIDParams

> **$ZodCheckULIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodULID`](#zodulid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:58

---

### $ZodCheckUpperCaseParams

> **$ZodCheckUpperCaseParams** = [`CheckParams`](#checkparams)\<[`$ZodCheckUpperCase`](#zodcheckuppercase),`"format"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:182

---

### $ZodCheckURLParams

> **$ZodCheckURLParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodURL`](#zodurl),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:43

---

### $ZodCheckUUIDParams

> **$ZodCheckUUIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:31

---

### $ZodCheckUUIDv4Params

> **$ZodCheckUUIDv4Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:34

---

### $ZodCheckUUIDv6Params

> **$ZodCheckUUIDv6Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:37

---

### $ZodCheckUUIDv7Params

> **$ZodCheckUUIDv7Params** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:40

---

### $ZodCheckXIDParams

> **$ZodCheckXIDParams** = [`CheckStringFormatParams`](#checkstringformatparams)\<[`$ZodXID`](#zodxid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:61

---

### $ZodCIDRv4Params

> **$ZodCIDRv4Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodCIDRv4`](#zodcidrv4),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:72

---

### $ZodCIDRv6Params

> **$ZodCIDRv6Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodCIDRv6`](#zodcidrv6),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:75

---

### $ZodCUID2Params

> **$ZodCUID2Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodCUID2`](#zodcuid2),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:54

---

### $ZodCUIDParams

> **$ZodCUIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodCUID`](#zodcuid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:51

---

### $ZodCustomParams

> **$ZodCustomParams** = [`CheckTypeParams`](#checktypeparams)\<[`$ZodCustom`](#zodcustom),`"fn"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:265

---

### $ZodDateParams

> **$ZodDateParams** = [`TypeParams`](#typeparams)\<[`$ZodDate`](#zoddate),`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:143

---

### $ZodDefaultParams

> **$ZodDefaultParams** = [`TypeParams`](#typeparams)\<[`$ZodDefault`](#zoddefault),`"innerType"`\|`"defaultValue"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:247

---

### $ZodDiscriminatedUnionParams

> **$ZodDiscriminatedUnionParams** = [`TypeParams`](#typeparams)\<[`$ZodDiscriminatedUnion`](#zoddiscriminatedunion),`"options"`\|`"discriminator"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:212

---

### $ZodE164Params

> **$ZodE164Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodE164`](#zode164),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:84

---

### $ZodEmailParams

> **$ZodEmailParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodEmail`](#zodemail),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:24

---

### $ZodEmojiParams

> **$ZodEmojiParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodEmoji`](#zodemoji),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:45

---

### $ZodEnumParams

> **$ZodEnumParams** = [`TypeParams`](#typeparams)\<[`$ZodEnum`](#zodenum),`"entries"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:225

---

### $ZodErrorClass()

> **$ZodErrorClass** = (`issues`) => [`$ZodError`](#zoderror)

Defined in: node\_modules/zod/v4/core/parse.d.cts:5

#### Parameters

##### issues

[`$ZodIssue`](#zodissue)[]

#### Returns

[`$ZodError`](#zoderror)

---

### $ZodErrorTree

> **$ZodErrorTree**\<`T`, `U`\> = `T` _extends_ [`Primitive`](../util.md#primitive) ? `object` : `T` _extends_ \[`any`, `...any[]`\] ? `object` : `T` _extends_ `any`[] ? `object` : `T` _extends_ `object` ? `object` : `object`

Defined in: node\_modules/zod/v4/core/errors.d.cts:156

#### Type Parameters

##### T

`T`

##### U

`U` = `string`

---

### $ZodFileParams

> **$ZodFileParams** = [`TypeParams`](#typeparams)\<[`$ZodFile`](#zodfile)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:239

---

### $ZodFlattenedError

> **$ZodFlattenedError**\<`T`, `U`\> = `_FlattenedError`\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:135

#### Type Parameters

##### T

`T`

##### U

`U` = `string`

---

### $ZodFormattedError

> **$ZodFormattedError**\<`T`, `U`\> = `object` & [`Flatten`](../util.md#flatten)\<`_ZodFormattedError`\<`T`, `U`\>\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:151

#### Type Declaration

##### \_errors

> **\_errors**: `U`[]

#### Type Parameters

##### T

`T`

##### U

`U` = `string`

---

### $ZodFunctionArgs

> **$ZodFunctionArgs** = [`$ZodType`](#zodtype)\<`unknown`[],`unknown`[]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1029

---

### $ZodFunctionIn

> **$ZodFunctionIn** = [`$ZodFunctionArgs`](#zodfunctionargs-1)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1030

---

### $ZodFunctionOut

> **$ZodFunctionOut** = [`$ZodType`](#zodtype)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1031

---

### $ZodGUIDParams

> **$ZodGUIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodGUID`](#zodguid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:27

---

### $ZodInternalIssue

> **$ZodInternalIssue**\<`T`\> = `T` _extends_ `any` ? `RawIssue`\<`T`\> : `never`

Defined in: node\_modules/zod/v4/core/errors.d.cts:106

#### Type Parameters

##### T

`T` _extends_ [`$ZodIssueBase`](#zodissuebase) = [`$ZodIssue`](#zodissue)

---

### $ZodIntersectionParams

> **$ZodIntersectionParams** = [`TypeParams`](#typeparams)\<[`$ZodIntersection`](#zodintersection),`"left"`\|`"right"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:214

---

### $ZodIPv4Params

> **$ZodIPv4Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodIPv4`](#zodipv4),`"pattern"`\|`"when"`\|`"version"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:66

---

### $ZodIPv6Params

> **$ZodIPv6Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodIPv6`](#zodipv6),`"pattern"`\|`"when"`\|`"version"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:69

---

### $ZodISODateParams

> **$ZodISODateParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodISODate`](#zodisodate),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:100

---

### $ZodISODateTimeParams

> **$ZodISODateTimeParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodISODateTime`](#zodisodatetime),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:97

---

### $ZodISODurationParams

> **$ZodISODurationParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodISODuration`](#zodisoduration),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:106

---

### $ZodISOTimeParams

> **$ZodISOTimeParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodISOTime`](#zodisotime),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:103

---

### $ZodIssue

> **$ZodIssue** = [`$ZodIssueInvalidType`](#zodissueinvalidtype) \| [` $ZodIssueTooBig`](#zodissuetoobig) \| [`$ZodIssueTooSmall`](#zodissuetoosmall) \| [` $ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat) \| [`$ZodIssueNotMultipleOf`](#zodissuenotmultipleof) \| [` $ZodIssueUnrecognizedKeys`](#zodissueunrecognizedkeys) \| [`$ZodIssueInvalidUnion`](#zodissueinvalidunion) \| [` $ZodIssueInvalidKey`](#zodissueinvalidkey) \| [`$ZodIssueInvalidElement`](#zodissueinvalidelement) \| [` $ZodIssueInvalidValue`](#zodissueinvalidvalue) \| [`$ZodIssueCustom`](#zodissuecustom)

Defined in: node\_modules/zod/v4/core/errors.d.cts:104

---

### $ZodIssueCode

> **$ZodIssueCode** = [`$ZodIssue`](#zodissue)\[`"code"`\]

Defined in: node\_modules/zod/v4/core/errors.d.cts:105

---

### $ZodJWTParams

> **$ZodJWTParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodJWT`](#zodjwt),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:87

---

### $ZodKSUIDParams

> **$ZodKSUIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodKSUID`](#zodksuid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:63

---

### $ZodLazyParams

> **$ZodLazyParams** = [`TypeParams`](#typeparams)\<[`$ZodLazy`](#zodlazy),`"getter"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:261

---

### $ZodLiteralParams

> **$ZodLiteralParams** = [`TypeParams`](#typeparams)\<[`$ZodLiteral`](#zodliteral),`"values"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:236

---

### $ZodLooseShape

> **$ZodLooseShape** = `Record`\<`string`, `any`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:597

---

### $ZodMapParams

> **$ZodMapParams** = [`TypeParams`](#typeparams)\<[`$ZodMap`](#zodmap),`"keyType"`\|`"valueType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:221

---

### $ZodNanoIDParams

> **$ZodNanoIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodNanoID`](#zodnanoid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:48

---

### $ZodNaNParams

> **$ZodNaNParams** = [`TypeParams`](#typeparams)\<[`$ZodNaN`](#zodnan)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:146

---

### $ZodNeverParams

> **$ZodNeverParams** = [`TypeParams`](#typeparams)\<[`$ZodNever`](#zodnever)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:139

---

### $ZodNonOptionalParams

> **$ZodNonOptionalParams** = [`TypeParams`](#typeparams)\<[`$ZodNonOptional`](#zodnonoptional),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:249

---

### $ZodNullableParams

> **$ZodNullableParams** = [`TypeParams`](#typeparams)\<[`$ZodNullable`](#zodnullable),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:245

---

### $ZodNullParams

> **$ZodNullParams** = [`TypeParams`](#typeparams)\<[`$ZodNull`](#zodnull)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:133

---

### $ZodNumberFormatParams

> **$ZodNumberFormatParams** = [`CheckTypeParams`](#checktypeparams)\<[`$ZodNumberFormat`](#zodnumberformat),`"format"`\|`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:110

---

### $ZodNumberFormats

> **$ZodNumberFormats** = `"int32"` \| `"uint32"` \| `"float32"` \| `"float64"` \| `"safeint"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:62

---

### $ZodNumberParams

> **$ZodNumberParams** = [`TypeParams`](#typeparams)\<[`$ZodNumber`](#zodnumber)\<`number`\>,`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:109

---

### $ZodObjectConfig

> **$ZodObjectConfig** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:553

#### Properties

##### in

> **in**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:555

##### out

> **out**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:554

---

### $ZodObjectParams

> **$ZodObjectParams** = [`TypeParams`](#typeparams)\<[`$ZodObject`](#zodobject),`"shape"`\|`"catchall"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:203

---

### $ZodOptionalParams

> **$ZodOptionalParams** = [`TypeParams`](#typeparams)\<[`$ZodOptional`](#zodoptional),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:243

---

### $ZodPipeParams

> **$ZodPipeParams** = [`TypeParams`](#typeparams)\<[`$ZodPipe`](#zodpipe),`"in"`\|`"out"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:255

---

### $ZodPromiseParams

> **$ZodPromiseParams** = [`TypeParams`](#typeparams)\<[`$ZodPromise`](#zodpromise),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:263

---

### $ZodRawIssue

> **$ZodRawIssue**\<`T`\> = [`$ZodInternalIssue`](#zodinternalissue)\<`T`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:115

#### Type Parameters

##### T

`T` _extends_ [`$ZodIssueBase`](#zodissuebase) = [`$ZodIssue`](#zodissue)

---

### $ZodReadonlyParams

> **$ZodReadonlyParams** = [`TypeParams`](#typeparams)\<[`$ZodReadonly`](#zodreadonly),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:257

---

### $ZodRecordKey

> **$ZodRecordKey** = [`$ZodType`](#zodtype)\<`string`\|`number`\|`symbol`,`string`\|`number`\|`symbol`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:693

---

### $ZodRecordParams

> **$ZodRecordParams** = [`TypeParams`](#typeparams)\<[`$ZodRecord`](#zodrecord),`"keyType"`\|`"valueType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:219

---

### $ZodSetParams

> **$ZodSetParams** = [`TypeParams`](#typeparams)\<[`$ZodSet`](#zodset),`"valueType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:223

---

### $ZodShape

> **$ZodShape** = `Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`,`unknown`,`$ZodTypeInternals`\<`unknown`,`unknown`\>\>; \}\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:577

---

### $ZodStandardSchema

> **$ZodStandardSchema**\<`T`\> = `StandardSchemaV1.Props`\<[`input`](#input-43)\<`T`\>, [`output`](#output-11)\<`T`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

#### Type Parameters

##### T

`T`

---

### $ZodStringFormatChecks

> **$ZodStringFormatChecks** = [`$ZodCheckRegex`](#zodcheckregex) \| [` $ZodCheckLowerCase`](#zodchecklowercase) \| [`$ZodCheckUpperCase`](#zodcheckuppercase) \| [` $ZodCheckIncludes`](#zodcheckincludes) \| [`$ZodCheckStartsWith`](#zodcheckstartswith) \| [` $ZodCheckEndsWith`](#zodcheckendswith) \| [`$ZodStringFormatTypes`](#zodstringformattypes)

Defined in: node\_modules/zod/v4/core/checks.d.cts:278

---

### $ZodStringFormatIssues

> **$ZodStringFormatIssues** = [`$ZodIssueStringCommonFormats`](#zodissuestringcommonformats) \| [` $ZodIssueStringInvalidRegex`](#zodissuestringinvalidregex) \| [`$ZodIssueStringInvalidJWT`](#zodissuestringinvalidjwt) \| [` $ZodIssueStringStartsWith`](#zodissuestringstartswith) \| [`$ZodIssueStringEndsWith`](#zodissuestringendswith) \| [`$ZodIssueStringIncludes`](#zodissuestringincludes)

Defined in: node\_modules/zod/v4/core/errors.d.cts:103

---

### $ZodStringFormatParams

> **$ZodStringFormatParams** = [`CheckTypeParams`](#checktypeparams)\<[`$ZodStringFormat`](#zodstringformat),`"format"`\|`"coerce"`\|`"when"`\|`"pattern"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:22

---

### $ZodStringFormats

> **$ZodStringFormats** = `"email"` \| `"url"` \| `"emoji"` \| `"uuid"` \| `"guid"` \| `"nanoid"` \| `"cuid"` \| `"cuid2"` \| `"ulid"` \| `"xid"` \| `"ksuid"` \| `"datetime"` \| `"date"` \| `"time"` \| `"duration"` \| `"ipv4"` \| `"ipv6"` \| `"cidrv4"` \| `"cidrv6"` \| `"base64"` \| `"base64url"` \| `"json_string"` \| `"e164"` \| `"lowercase"` \| `"uppercase"` \| `"regex"` \| `"jwt"` \| `"starts_with"` \| `"ends_with"` \| `"includes"`

Defined in: node\_modules/zod/v4/core/checks.d.cts:160

---

### $ZodStringFormatTypes

> **$ZodStringFormatTypes** = [`$ZodGUID`](#zodguid) \| [` $ZodUUID`](#zoduuid) \| [`$ZodEmail`](#zodemail) \| [` $ZodURL`](#zodurl) \| [`$ZodEmoji`](#zodemoji) \| [` $ZodNanoID`](#zodnanoid) \| [`$ZodCUID`](#zodcuid) \| [` $ZodCUID2`](#zodcuid2) \| [`$ZodULID`](#zodulid) \| [` $ZodXID`](#zodxid) \| [`$ZodKSUID`](#zodksuid) \| [` $ZodISODateTime`](#zodisodatetime) \| [`$ZodISODate`](#zodisodate) \| [` $ZodISOTime`](#zodisotime) \| [`$ZodISODuration`](#zodisoduration) \| [` $ZodIPv4`](#zodipv4) \| [`$ZodIPv6`](#zodipv6) \| [` $ZodCIDRv4`](#zodcidrv4) \| [`$ZodCIDRv6`](#zodcidrv6) \| [` $ZodBase64`](#zodbase64) \| [`$ZodBase64URL`](#zodbase64url) \| [` $ZodE164`](#zode164) \| [`$ZodJWT`](#zodjwt) \| [` $ZodCustomStringFormat`](#zodcustomstringformat)\<`"hex"`\> \| [`$ZodCustomStringFormat`](#zodcustomstringformat)\<[`HashFormat`](../util.md#hashformat)\> \| [`$ZodCustomStringFormat`](#zodcustomstringformat)\<`"hostname"`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1113

---

### $ZodStringParams

> **$ZodStringParams** = [`TypeParams`](#typeparams)\<[`$ZodString`](#zodstring)\<`string`\>,`"coerce"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:19

---

### $ZodSuccessParams

> **$ZodSuccessParams** = [`TypeParams`](#typeparams)\<[`$ZodSuccess`](#zodsuccess),`"innerType"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:251

---

### $ZodSuperRefineIssue

> **$ZodSuperRefineIssue**\<`T`\> = `T` _extends_ `any` ? `RawIssue`\<`T`\> : `never`

Defined in: node\_modules/zod/v4/core/api.d.cts:268

#### Type Parameters

##### T

`T` _extends_ [`$ZodIssueBase`](#zodissuebase) = [`$ZodIssue`](#zodissue)

---

### $ZodSymbolParams

> **$ZodSymbolParams** = [`TypeParams`](#typeparams)\<[`$ZodSymbol`](#zodsymbol)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:129

---

### $ZodTemplateLiteralParams

> **$ZodTemplateLiteralParams** = [`TypeParams`](#typeparams)\<[`$ZodTemplateLiteral`](#zodtemplateliteral),`"parts"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:259

---

### $ZodTemplateLiteralPart

> **$ZodTemplateLiteralPart** = `LiteralPart` \| `SchemaPart`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1016

---

### $ZodTransformParams

> **$ZodTransformParams** = [`TypeParams`](#typeparams)\<[`$ZodTransform`](#zodtransform),`"transform"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:241

---

### $ZodTupleParams

> **$ZodTupleParams** = [`TypeParams`](#typeparams)\<[`$ZodTuple`](#zodtuple),`"items"`\|`"rest"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:216

---

### $ZodTypes

> **$ZodTypes** = [`$ZodString`](#zodstring) \| [` $ZodNumber`](#zodnumber) \| [`$ZodBigInt`](#zodbigint) \| [` $ZodBoolean`](#zodboolean) \| [`$ZodDate`](#zoddate) \| [` $ZodSymbol`](#zodsymbol) \| [`$ZodUndefined`](#zodundefined) \| [` $ZodNullable`](#zodnullable) \| [`$ZodNull`](#zodnull) \| [` $ZodAny`](#zodany) \| [`$ZodUnknown`](#zodunknown) \| [` $ZodNever`](#zodnever) \| [`$ZodVoid`](#zodvoid) \| [` $ZodArray`](#zodarray) \| [`$ZodObject`](#zodobject) \| [` $ZodUnion`](#zodunion) \| [`$ZodIntersection`](#zodintersection) \| [` $ZodTuple`](#zodtuple) \| [`$ZodRecord`](#zodrecord) \| [` $ZodMap`](#zodmap) \| [`$ZodSet`](#zodset) \| [` $ZodLiteral`](#zodliteral) \| [`$ZodEnum`](#zodenum) \| [` $ZodFunction`](#zodfunction) \| [`$ZodPromise`](#zodpromise) \| [` $ZodLazy`](#zodlazy) \| [`$ZodOptional`](#zodoptional) \| [` $ZodDefault`](#zoddefault) \| [`$ZodPrefault`](#zodprefault) \| [` $ZodTemplateLiteral`](#zodtemplateliteral) \| [`$ZodCustom`](#zodcustom) \| [` $ZodTransform`](#zodtransform) \| [`$ZodNonOptional`](#zodnonoptional) \| [` $ZodReadonly`](#zodreadonly) \| [`$ZodNaN`](#zodnan) \| [` $ZodPipe`](#zodpipe) \| [`$ZodSuccess`](#zodsuccess) \| [` $ZodCatch`](#zodcatch) \| [`$ZodFile`](#zodfile)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1112

---

### $ZodULIDParams

> **$ZodULIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodULID`](#zodulid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:57

---

### $ZodUndefinedParams

> **$ZodUndefinedParams** = [`TypeParams`](#typeparams)\<[`$ZodUndefined`](#zodundefined)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:131

---

### $ZodUnionParams

> **$ZodUnionParams** = [`TypeParams`](#typeparams)\<[`$ZodUnion`](#zodunion),`"options"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:204

---

### $ZodUnknownParams

> **$ZodUnknownParams** = [`TypeParams`](#typeparams)\<[`$ZodUnknown`](#zodunknown)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:137

---

### $ZodURLParams

> **$ZodURLParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodURL`](#zodurl),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:42

---

### $ZodUUIDParams

> **$ZodUUIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:30

---

### $ZodUUIDv4Params

> **$ZodUUIDv4Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:33

---

### $ZodUUIDv6Params

> **$ZodUUIDv6Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:36

---

### $ZodUUIDv7Params

> **$ZodUUIDv7Params** = [`StringFormatParams`](#stringformatparams)\<[`$ZodUUID`](#zoduuid),`"pattern"`\|`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:39

---

### $ZodVoidParams

> **$ZodVoidParams** = [`TypeParams`](#typeparams)\<[`$ZodVoid`](#zodvoid)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:141

---

### $ZodXIDParams

> **$ZodXIDParams** = [`StringFormatParams`](#stringformatparams)\<[`$ZodXID`](#zodxid),`"when"`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:60

---

### CheckFn()

> **CheckFn**\<`T`\> = (`input`) => [`MaybeAsync`](../util.md#maybeasync)\<`void`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:27

#### Type Parameters

##### T

`T`

#### Parameters

##### input

[`ParsePayload`](#parsepayload)\<`T`\>

#### Returns

[`MaybeAsync`](../util.md#maybeasync)\<`void`\>

---

### CheckParams

> **CheckParams**\<`T`, `AlsoOmit`\> = [`Params`](#params-3)\<`T`, `NonNullable`\<`T`\[`"_zod"`\]\[`"issc"`\]\>, `"check"` \| `"error"` \| `AlsoOmit`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:14

#### Type Parameters

##### T

`T` _extends_ [`$ZodCheck`](#zodcheck) = [`$ZodCheck`](#zodcheck)

##### AlsoOmit

`AlsoOmit` _extends_ `Exclude`\<keyof `T`\[`"_zod"`\]\[`"def"`\], `"check"` \| `"error"`\> = `never`

---

### CheckStringFormatParams

> **CheckStringFormatParams**\<`T`, `AlsoOmit`\> = [`Params`](#params-3)\<`T`, `NonNullable`\<`T`\[`"_zod"`\]\[`"issc"`\]\>, `"type"` \| `"coerce"` \| `"checks"` \| `"error"` \| `"check"` \| `"format"` \| `AlsoOmit`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:17

#### Type Parameters

##### T

`T` _extends_ [`$ZodStringFormat`](#zodstringformat) = [`$ZodStringFormat`](#zodstringformat)

##### AlsoOmit

`AlsoOmit` _extends_ `Exclude`\<keyof `T`\[`"_zod"`\]\[`"def"`\], `"type"` \| `"coerce"` \| `"checks"` \| `"error"` \| `"check"` \| `"format"`\> = `never`

---

### CheckTypeParams

> **CheckTypeParams**\<`T`, `AlsoOmit`\> = [`Params`](#params-3)\<`T`, `NonNullable`\<`T`\[`"_zod"`\]\[`"isst"`\] \| `T`\[`"_zod"`\]\[`"issc"`\]\>, `"type"` \| `"checks"` \| `"error"` \| `"check"` \| `AlsoOmit`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:18

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype) & [`$ZodCheck`](#zodcheck) = [`$ZodType`](#zodtype) & [`$ZodCheck`](#zodcheck)

##### AlsoOmit

`AlsoOmit` _extends_ `Exclude`\<keyof `T`\[`"_zod"`\]\[`"def"`\], `"type"` \| `"checks"` \| `"error"` \| `"check"`\> = `never`

---

### ConcatenateTupleOfStrings

> **ConcatenateTupleOfStrings**\<`T`\> = `T` _extends_ \[infer First, `...(infer Rest extends string[])`\] ? `Rest` _extends_ `string`[] ? `First` _extends_ `""` ? [`ConcatenateTupleOfStrings`](#concatenatetupleofstrings)\<`Rest`\> : `` `${First}${ConcatenateTupleOfStrings<Rest>}` `` : `never` : `""`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1019

#### Type Parameters

##### T

`T` _extends_ `string`[]

---

### ConvertPartsToStringTuple

> **ConvertPartsToStringTuple**\<`Parts`\> = ``{ [K in keyof Parts]: Parts[K] extends LiteralPart ? `${UndefinedToEmptyString<Parts[K]>}` : Parts[K] extends $ZodType ? `${output<Parts[K]> extends infer T extends LiteralPart ? UndefinedToEmptyString<T> : never}` : never }``

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1023

#### Type Parameters

##### Parts

`Parts` _extends_ [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[]

---

### input

> **input**\<`T`\> = `T` _extends_ `object` ? `T`\[`"_zod"`\]\[`"input"`\] : `unknown`

Defined in: node\_modules/zod/v4/core/core.d.cts:32

#### Type Parameters

##### T

`T`

---

### output

> **output**\<`T`\> = `T` _extends_ `object` ? `T`\[`"_zod"`\]\[`"output"`\] : `unknown`

Defined in: node\_modules/zod/v4/core/core.d.cts:37

#### Type Parameters

##### T

`T`

---

### Params

> **Params**\<`T`, `IssueTypes`, `OmitKeys`\> = [`Flatten`](../util.md#flatten)\<`Partial`\<[`EmptyToNever`](../util.md#emptytonever)\<`Omit`\<`T`\[`"_zod"`\]\[`"def"`\], `OmitKeys`\> & \[`IssueTypes`\] _extends_ \[`never`\] ? `object` : `object`\>\>\>

Defined in: node\_modules/zod/v4/core/api.d.cts:6

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype) \| [`$ZodCheck`](#zodcheck)

##### IssueTypes

`IssueTypes` _extends_ [`$ZodIssueBase`](#zodissuebase)

##### OmitKeys

`OmitKeys` _extends_ keyof `T`\[`"_zod"`\]\[`"def"`\] = `never`

---

### SomeType

> **SomeType** = `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:85

#### Properties

##### \_zod

> **\_zod**: [`_$ZodTypeInternals`](#_zodtypeinternals)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:86

---

### StringFormatParams

> **StringFormatParams**\<`T`, `AlsoOmit`\> = [`Params`](#params-3)\<`T`, `NonNullable`\<`T`\[`"_zod"`\]\[`"isst"`\] \| `T`\[`"_zod"`\]\[`"issc"`\]\>, `"type"` \| `"coerce"` \| `"checks"` \| `"error"` \| `"check"` \| `"format"` \| `AlsoOmit`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:16

#### Type Parameters

##### T

`T` _extends_ [`$ZodStringFormat`](#zodstringformat) = [`$ZodStringFormat`](#zodstringformat)

##### AlsoOmit

`AlsoOmit` _extends_ `Exclude`\<keyof `T`\[`"_zod"`\]\[`"def"`\], `"type"` \| `"coerce"` \| `"checks"` \| `"error"` \| `"check"` \| `"format"`\> = `never`

---

### ToTemplateLiteral

> **ToTemplateLiteral**\<`Parts`\> = [`ConcatenateTupleOfStrings`](#concatenatetupleofstrings)\<[`ConvertPartsToStringTuple`](#convertpartstostringtuple)\<`Parts`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1026

#### Type Parameters

##### Parts

`Parts` _extends_ [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[]

---

### TypeParams

> **TypeParams**\<`T`, `AlsoOmit`\> = [`Params`](#params-3)\<`T`, `NonNullable`\<`T`\[`"_zod"`\]\[`"isst"`\]\>, `"type"` \| `"checks"` \| `"error"` \| `AlsoOmit`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:11

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype) = [`$ZodType`](#zodtype) & `object`

##### AlsoOmit

`AlsoOmit` _extends_ `Exclude`\<keyof `T`\[`"_zod"`\]\[`"def"`\], `"type"` \| `"checks"` \| `"error"`\> = `never`

## Variables

### \_decode()

> `const` **\_decode**: (`_Err`) => [`$Decode`](#decode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:30

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$Decode`](#decode)

---

### \_decodeAsync()

> `const` **\_decodeAsync**: (`_Err`) => [`$DecodeAsync`](#decodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:36

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$DecodeAsync`](#decodeasync)

---

### \_encode()

> `const` **\_encode**: (`_Err`) => [`$Encode`](#encode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:27

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$Encode`](#encode)

---

### \_encodeAsync()

> `const` **\_encodeAsync**: (`_Err`) => [`$EncodeAsync`](#encodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:33

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$EncodeAsync`](#encodeasync)

---

### \_parse()

> `const` **\_parse**: (`_Err`) => [`$Parse`](#parse)

Defined in: node\_modules/zod/v4/core/parse.d.cts:12

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$Parse`](#parse)

---

### \_parseAsync()

> `const` **\_parseAsync**: (`_Err`) => [`$ParseAsync`](#parseasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:18

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$ParseAsync`](#parseasync)

---

### \_safeDecode()

> `const` **\_safeDecode**: (`_Err`) => [`$SafeDecode`](#safedecode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:42

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeDecode`](#safedecode)

---

### \_safeDecodeAsync()

> `const` **\_safeDecodeAsync**: (`_Err`) => [`$SafeDecodeAsync`](#safedecodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:48

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeDecodeAsync`](#safedecodeasync)

---

### \_safeEncode()

> `const` **\_safeEncode**: (`_Err`) => [`$SafeEncode`](#safeencode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:39

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeEncode`](#safeencode)

---

### \_safeEncodeAsync()

> `const` **\_safeEncodeAsync**: (`_Err`) => [`$SafeEncodeAsync`](#safeencodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:45

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeEncodeAsync`](#safeencodeasync)

---

### \_safeParse()

> `const` **\_safeParse**: (`_Err`) => [`$SafeParse`](#safeparse)

Defined in: node\_modules/zod/v4/core/parse.d.cts:21

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeParse`](#safeparse)

---

### \_safeParseAsync()

> `const` **\_safeParseAsync**: (`_Err`) => [`$SafeParseAsync`](#safeparseasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:24

#### Parameters

##### \_Err

[`$ZodErrorClass`](#zoderrorclass)

#### Returns

[`$SafeParseAsync`](#safeparseasync)

---

### $brand

> `const` **$brand**: unique `symbol`

Defined in: node\_modules/zod/v4/core/core.d.cts:19

---

### $input

> `const` **$input**: unique `symbol`

Defined in: node\_modules/zod/v4/core/registries.d.cts:5

---

### $output

> `const` **$output**: unique `symbol`

Defined in: node\_modules/zod/v4/core/registries.d.cts:3

---

### $ZodAny

> **$ZodAny**: [`$constructor`](#constructor-5)\<[` $ZodAny`](#zodany), [`$ZodAnyDef`](#zodanydef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:466

---

### $ZodArray

> **$ZodArray**: [`$constructor`](#constructor-5)\<[` $ZodArray`](#zodarray)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodArrayDef`](#zodarraydef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:530

---

### $ZodBase64

> **$ZodBase64**: [`$constructor`](#constructor-5)\<[` $ZodBase64`](#zodbase64), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:304

---

### $ZodBase64URL

> **$ZodBase64URL**: [`$constructor`](#constructor-5)\<[` $ZodBase64URL`](#zodbase64url), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"base64url"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:313

---

### $ZodBigInt

> **$ZodBigInt**: [`$constructor`](#constructor-5)\<[` $ZodBigInt`](#zodbigint)\<`unknown`\>, [`$ZodBigIntDef`](#zodbigintdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:408

---

### $ZodBigIntFormat

> **$ZodBigIntFormat**: [`$constructor`](#constructor-5)\<[` $ZodBigIntFormat`](#zodbigintformat), [`$ZodBigIntFormatDef`](#zodbigintformatdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:418

---

### $ZodBoolean

> **$ZodBoolean**: [`$constructor`](#constructor-5)\<[` $ZodBoolean`](#zodboolean)\<`unknown`\>, [`$ZodBooleanDef`](#zodbooleandef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:389

---

### $ZodCatch

> **$ZodCatch**: [`$constructor`](#constructor-5)\<[` $ZodCatch`](#zodcatch)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodCatchDef`](#zodcatchdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:928

---

### $ZodCheck

> **$ZodCheck**: [`$constructor`](#constructor-5)\<[` $ZodCheck`](#zodcheck)\<`any`\>, [`$ZodCheckDef`](#zodcheckdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:20

---

### $ZodCheckBigIntFormat

> **$ZodCheckBigIntFormat**: [`$constructor`](#constructor-5)\<[` $ZodCheckBigIntFormat`](#zodcheckbigintformat), [`$ZodCheckBigIntFormatDef`](#zodcheckbigintformatdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:84

---

### $ZodCheckEndsWith

> **$ZodCheckEndsWith**: [`$constructor`](#constructor-5)\<[` $ZodCheckEndsWith`](#zodcheckendswith), [`$ZodCheckEndsWithDef`](#zodcheckendswithdef-1)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:236

---

### $ZodCheckGreaterThan

> **$ZodCheckGreaterThan**: [`$constructor`](#constructor-5)\<[` $ZodCheckGreaterThan`](#zodcheckgreaterthan)\<[`Numeric`](../util.md#numeric)\>, [`$ZodCheckGreaterThanDef`](#zodcheckgreaterthandef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:46

---

### $ZodCheckIncludes

> **$ZodCheckIncludes**: [`$constructor`](#constructor-5)\<[` $ZodCheckIncludes`](#zodcheckincludes), [`$ZodCheckIncludesDef`](#zodcheckincludesdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:214

---

### $ZodCheckLengthEquals

> **$ZodCheckLengthEquals**: [`$constructor`](#constructor-5)\<[` $ZodCheckLengthEquals`](#zodchecklengthequals)\<[`HasLength`](../util.md#haslength)\>, [`$ZodCheckLengthEqualsDef`](#zodchecklengthequalsdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:156

---

### $ZodCheckLessThan

> **$ZodCheckLessThan**: [`$constructor`](#constructor-5)\<[` $ZodCheckLessThan`](#zodchecklessthan)\<[`Numeric`](../util.md#numeric)\>, [`$ZodCheckLessThanDef`](#zodchecklessthandef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:33

---

### $ZodCheckLowerCase

> **$ZodCheckLowerCase**: [`$constructor`](#constructor-5)\<[` $ZodCheckLowerCase`](#zodchecklowercase), [`$ZodCheckLowerCaseDef`](#zodchecklowercasedef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:192

---

### $ZodCheckMaxLength

> **$ZodCheckMaxLength**: [`$constructor`](#constructor-5)\<[` $ZodCheckMaxLength`](#zodcheckmaxlength)\<[`HasLength`](../util.md#haslength)\>, [`$ZodCheckMaxLengthDef`](#zodcheckmaxlengthdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:132

---

### $ZodCheckMaxSize

> **$ZodCheckMaxSize**: [`$constructor`](#constructor-5)\<[` $ZodCheckMaxSize`](#zodcheckmaxsize)\<[`HasSize`](../util.md#hassize)\>, [`$ZodCheckMaxSizeDef`](#zodcheckmaxsizedef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:96

---

### $ZodCheckMimeType

> **$ZodCheckMimeType**: [`$constructor`](#constructor-5)\<[` $ZodCheckMimeType`](#zodcheckmimetype)\<[`File`](#file)\>, [`$ZodCheckMimeTypeDef`](#zodcheckmimetypedef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:261

---

### $ZodCheckMinLength

> **$ZodCheckMinLength**: [`$constructor`](#constructor-5)\<[` $ZodCheckMinLength`](#zodcheckminlength)\<[`HasLength`](../util.md#haslength)\>, [`$ZodCheckMinLengthDef`](#zodcheckminlengthdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:144

---

### $ZodCheckMinSize

> **$ZodCheckMinSize**: [`$constructor`](#constructor-5)\<[` $ZodCheckMinSize`](#zodcheckminsize)\<[`HasSize`](../util.md#hassize)\>, [`$ZodCheckMinSizeDef`](#zodcheckminsizedef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:108

---

### $ZodCheckMultipleOf

> **$ZodCheckMultipleOf**: [`$constructor`](#constructor-5)\<[` $ZodCheckMultipleOf`](#zodcheckmultipleof)\<`number` \| `bigint`\>, [`$ZodCheckMultipleOfDef`](#zodcheckmultipleofdef)\<`number`\|`bigint`\>\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:58

---

### $ZodCheckNumberFormat

> **$ZodCheckNumberFormat**: [`$constructor`](#constructor-5)\<[` $ZodCheckNumberFormat`](#zodchecknumberformat), [`$ZodCheckNumberFormatDef`](#zodchecknumberformatdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:71

---

### $ZodCheckOverwrite

> **$ZodCheckOverwrite**: [`$constructor`](#constructor-5)\<[` $ZodCheckOverwrite`](#zodcheckoverwrite)\<`unknown`\>, [`$ZodCheckOverwriteDef`](#zodcheckoverwritedef)\<`unknown`\>\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:273

---

### $ZodCheckProperty

> **$ZodCheckProperty**: [`$constructor`](#constructor-5)\<[` $ZodCheckProperty`](#zodcheckproperty)\<`object`\>, [`$ZodCheckPropertyDef`](#zodcheckpropertydef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:249

---

### $ZodCheckRegex

> **$ZodCheckRegex**: [`$constructor`](#constructor-5)\<[` $ZodCheckRegex`](#zodcheckregex), [`$ZodCheckRegexDef`](#zodcheckregexdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:182

---

### $ZodCheckSizeEquals

> **$ZodCheckSizeEquals**: [`$constructor`](#constructor-5)\<[` $ZodCheckSizeEquals`](#zodchecksizeequals)\<[`HasSize`](../util.md#hassize)\>, [`$ZodCheckSizeEqualsDef`](#zodchecksizeequalsdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:120

---

### $ZodCheckStartsWith

> **$ZodCheckStartsWith**: [`$constructor`](#constructor-5)\<[` $ZodCheckStartsWith`](#zodcheckstartswith), [`$ZodCheckStartsWithDef`](#zodcheckstartswithdef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:225

---

### $ZodCheckStringFormat

> **$ZodCheckStringFormat**: [`$constructor`](#constructor-5)\<[` $ZodCheckStringFormat`](#zodcheckstringformat), [`$ZodCheckStringFormatDef`](#zodcheckstringformatdef)\<`string`\>\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:170

---

### $ZodCheckUpperCase

> **$ZodCheckUpperCase**: [`$constructor`](#constructor-5)\<[` $ZodCheckUpperCase`](#zodcheckuppercase), [`$ZodCheckUpperCaseDef`](#zodcheckuppercasedef)\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:202

---

### $ZodCIDRv4

> **$ZodCIDRv4**: [`$constructor`](#constructor-5)\<[` $ZodCIDRv4`](#zodcidrv4), [`$ZodCIDRv4Def`](#zodcidrv4def)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:285

---

### $ZodCIDRv6

> **$ZodCIDRv6**: [`$constructor`](#constructor-5)\<[` $ZodCIDRv6`](#zodcidrv6), [`$ZodCIDRv6Def`](#zodcidrv6def)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:295

---

### $ZodCodec

> **$ZodCodec**: [`$constructor`](#constructor-5)\<[` $ZodCodec`](#zodcodec)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodCodecDef`](#zodcodecdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>, [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:976

---

### $ZodCUID

> **$ZodCUID**: [`$constructor`](#constructor-5)\<[` $ZodCUID`](#zodcuid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:185

---

### $ZodCUID2

> **$ZodCUID2**: [`$constructor`](#constructor-5)\<[` $ZodCUID2`](#zodcuid2), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"cuid2"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:193

---

### $ZodCustom

> **$ZodCustom**: [`$constructor`](#constructor-5)\<[` $ZodCustom`](#zodcustom)\<`unknown`, `unknown`\>, [`$ZodCustomDef`](#zodcustomdef)\<`unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1108

---

### $ZodCustomStringFormat

> **$ZodCustomStringFormat**: [`$constructor`](#constructor-5)\<[` $ZodCustomStringFormat`](#zodcustomstringformat)\<`string`\>, [`$ZodCustomStringFormatDef`](#zodcustomstringformatdef)\<`string`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:342

---

### $ZodDate

> **$ZodDate**: [`$constructor`](#constructor-5)\<[` $ZodDate`](#zoddate)\<`unknown`\>, [`$ZodDateDef`](#zoddatedef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:516

---

### $ZodDefault

> **$ZodDefault**: [`$constructor`](#constructor-5)\<[` $ZodDefault`](#zoddefault)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodDefaultDef`](#zoddefaultdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:858

---

### $ZodDiscriminatedUnion

> **$ZodDiscriminatedUnion**: [`$constructor`](#constructor-5)\<[` $ZodDiscriminatedUnion`](#zoddiscriminatedunion)\<readonly [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>[], `string`\>, [`$ZodDiscriminatedUnionDef`](#zoddiscriminateduniondef)\<readonly [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>[],`string`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:635

---

### $ZodE164

> **$ZodE164**: [`$constructor`](#constructor-5)\<[` $ZodE164`](#zode164), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"e164"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:321

---

### $ZodEmail

> **$ZodEmail**: [`$constructor`](#constructor-5)\<[` $ZodEmail`](#zodemail), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"email"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:149

---

### $ZodEmoji

> **$ZodEmoji**: [`$constructor`](#constructor-5)\<[` $ZodEmoji`](#zodemoji), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"emoji"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:169

---

### $ZodEnum

> **$ZodEnum**: [`$constructor`](#constructor-5)\<[` $ZodEnum`](#zodenum)\<`Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>\>, [`$ZodEnumDef`](#zodenumdef)\<`Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:759

---

### $ZodError

> **$ZodError**: [`$constructor`](#constructor-5)\<[` $ZodError`](#zoderror)\<`unknown`\>, [`$ZodIssue`](#zodissue)[]\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:121

---

### $ZodFile

> **$ZodFile**: [`$constructor`](#constructor-5)\<[` $ZodFile`](#zodfile), [`$ZodFileDef`](#zodfiledef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:797

---

### $ZodFunction

> **$ZodFunction**: [`$constructor`](#constructor-5)\<[` $ZodFunction`](#zodfunction)\<[`$ZodFunctionArgs`](#zodfunctionargs-1), [` $ZodFunctionOut`](#zodfunctionout)\>, [`$ZodFunctionDef`](#zodfunctiondef)\<[` $ZodFunctionArgs`](#zodfunctionargs-1), [`$ZodFunctionOut`](#zodfunctionout)\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1045

---

### $ZodGUID

> **$ZodGUID**: [`$constructor`](#constructor-5)\<[` $ZodGUID`](#zodguid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"guid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:131

---

### $ZodIntersection

> **$ZodIntersection**: [`$constructor`](#constructor-5)\<[` $ZodIntersection`](#zodintersection)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodIntersectionDef`](#zodintersectiondef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>, [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:652

---

### $ZodIPv4

> **$ZodIPv4**: [`$constructor`](#constructor-5)\<[` $ZodIPv4`](#zodipv4), [`$ZodIPv4Def`](#zodipv4def)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:265

---

### $ZodIPv6

> **$ZodIPv6**: [`$constructor`](#constructor-5)\<[` $ZodIPv6`](#zodipv6), [`$ZodIPv6Def`](#zodipv6def)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:275

---

### $ZodISODate

> **$ZodISODate**: [`$constructor`](#constructor-5)\<[` $ZodISODate`](#zodisodate), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"date"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:237

---

### $ZodISODateTime

> **$ZodISODateTime**: [`$constructor`](#constructor-5)\<[` $ZodISODateTime`](#zodisodatetime), [`$ZodISODateTimeDef`](#zodisodatetimedef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:229

---

### $ZodISODuration

> **$ZodISODuration**: [`$constructor`](#constructor-5)\<[` $ZodISODuration`](#zodisoduration), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"duration"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:255

---

### $ZodISOTime

> **$ZodISOTime**: [`$constructor`](#constructor-5)\<[` $ZodISOTime`](#zodisotime), [`$ZodISOTimeDef`](#zodisotimedef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:247

---

### $ZodJWT

> **$ZodJWT**: [`$constructor`](#constructor-5)\<[` $ZodJWT`](#zodjwt), [`$ZodJWTDef`](#zodjwtdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:332

---

### $ZodKSUID

> **$ZodKSUID**: [`$constructor`](#constructor-5)\<[` $ZodKSUID`](#zodksuid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ksuid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:217

---

### $ZodLazy

> **$ZodLazy**: [`$constructor`](#constructor-5)\<[` $ZodLazy`](#zodlazy)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodLazyDef`](#zodlazydef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1088

---

### $ZodLiteral

> **$ZodLiteral**: [`$constructor`](#constructor-5)\<[` $ZodLiteral`](#zodliteral)\<[`Literal`](../util.md#literal)\>, [`$ZodLiteralDef`](#zodliteraldef)\<[`Literal`](../util.md#literal)\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:773

---

### $ZodMap

> **$ZodMap**: [`$constructor`](#constructor-5)\<[` $ZodMap`](#zodmap)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodMapDef`](#zodmapdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>, [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:725

---

### $ZodNaN

> **$ZodNaN**: [`$constructor`](#constructor-5)\<[` $ZodNaN`](#zodnan), [`$ZodNaNDef`](#zodnandef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:939

---

### $ZodNanoID

> **$ZodNanoID**: [`$constructor`](#constructor-5)\<[` $ZodNanoID`](#zodnanoid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"nanoid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:177

---

### $ZodNever

> **$ZodNever**: [`$constructor`](#constructor-5)\<[` $ZodNever`](#zodnever), [`$ZodNeverDef`](#zodneverdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:488

---

### $ZodNonOptional

> **$ZodNonOptional**: [`$constructor`](#constructor-5)\<[` $ZodNonOptional`](#zodnonoptional)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodNonOptionalDef`](#zodnonoptionaldef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:890

---

### $ZodNull

> **$ZodNull**: [`$constructor`](#constructor-5)\<[` $ZodNull`](#zodnull), [`$ZodNullDef`](#zodnulldef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:455

---

### $ZodNullable

> **$ZodNullable**: [`$constructor`](#constructor-5)\<[` $ZodNullable`](#zodnullable)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodNullableDef`](#zodnullabledef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:841

---

### $ZodNumber

> **$ZodNumber**: [`$constructor`](#constructor-5)\<[` $ZodNumber`](#zodnumber)\<`unknown`\>, [`$ZodNumberDef`](#zodnumberdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:365

---

### $ZodNumberFormat

> **$ZodNumberFormat**: [`$constructor`](#constructor-5)\<[` $ZodNumberFormat`](#zodnumberformat), [`$ZodNumberFormatDef`](#zodnumberformatdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:375

---

### $ZodObject

> **$ZodObject**: [`$constructor`](#constructor-5)\<[` $ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>, [` $ZodObjectDef`](#zodobjectdef)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`,`unknown`,`$ZodTypeInternals`\<`unknown`,`unknown`\>\>; \}\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:598

---

### $ZodObjectJIT

> `const` **$ZodObjectJIT**: [`$constructor`](#constructor-5)\<[`$ZodObject`](#zodobject)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:604

---

### $ZodOptional

> **$ZodOptional**: [`$constructor`](#constructor-5)\<[` $ZodOptional`](#zodoptional)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodOptionalDef`](#zodoptionaldef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:825

---

### $ZodPipe

> **$ZodPipe**: [`$constructor`](#constructor-5)\<[` $ZodPipe`](#zodpipe)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodPipeDef`](#zodpipedef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>, [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:960

---

### $ZodPrefault

> **$ZodPrefault**: [`$constructor`](#constructor-5)\<[` $ZodPrefault`](#zodprefault)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodPrefaultDef`](#zodprefaultdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:875

---

### $ZodPromise

> **$ZodPromise**: [`$constructor`](#constructor-5)\<[` $ZodPromise`](#zodpromise)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodPromiseDef`](#zodpromisedef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1070

---

### $ZodReadonly

> **$ZodReadonly**: [`$constructor`](#constructor-5)\<[` $ZodReadonly`](#zodreadonly)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodReadonlyDef`](#zodreadonlydef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:992

---

### $ZodRealError

> `const` **$ZodRealError**: [`$constructor`](#constructor-5)\<`$ZodRealError`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:134

---

### $ZodRecord

> **$ZodRecord**: [`$constructor`](#constructor-5)\<[` $ZodRecord`](#zodrecord)\<[`$ZodRecordKey`](#zodrecordkey-1), [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>, [` $ZodRecordDef`](#zodrecorddef)\<[`$ZodRecordKey`](#zodrecordkey-1), [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:710

---

### $ZodSet

> **$ZodSet**: [`$constructor`](#constructor-5)\<[` $ZodSet`](#zodset)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodSetDef`](#zodsetdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:739

---

### $ZodString

> **$ZodString**: [`$constructor`](#constructor-5)\<[` $ZodString`](#zodstring)\<`unknown`\>, [`$ZodStringDef`](#zodstringdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:115

---

### $ZodStringFormat

> **$ZodStringFormat**: [`$constructor`](#constructor-5)\<[` $ZodStringFormat`](#zodstringformat)\<`string`\>, [`$ZodStringFormatDef`](#zodstringformatdef)\<`string`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:123

---

### $ZodSuccess

> **$ZodSuccess**: [`$constructor`](#constructor-5)\<[` $ZodSuccess`](#zodsuccess)\<[`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodSuccessDef`](#zodsuccessdef)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:904

---

### $ZodSymbol

> **$ZodSymbol**: [`$constructor`](#constructor-5)\<[` $ZodSymbol`](#zodsymbol), [`$ZodSymbolDef`](#zodsymboldef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:429

---

### $ZodTemplateLiteral

> **$ZodTemplateLiteral**: [`$constructor`](#constructor-5)\<[` $ZodTemplateLiteral`](#zodtemplateliteral)\<`string`\>, [`$ZodTemplateLiteralDef`](#zodtemplateliteraldef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1006

---

### $ZodTransform

> **$ZodTransform**: [`$constructor`](#constructor-5)\<[` $ZodTransform`](#zodtransform)\<`unknown`, `unknown`\>, [`$ZodTransformDef`](#zodtransformdef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:809

---

### $ZodTuple

> **$ZodTuple**: [`$constructor`](#constructor-5)\<[` $ZodTuple`](#zodtuple)\<readonly [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>[], [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\> \| `null`\>, [`$ZodTupleDef`](#zodtupledef)\<readonly [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>[], [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\> \|`null`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:689

---

### $ZodType

> **$ZodType**: [`$constructor`](#constructor-5)\<[` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>, [`$ZodTypeDef`](#zodtypedef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:88

---

### $ZodULID

> **$ZodULID**: [`$constructor`](#constructor-5)\<[` $ZodULID`](#zodulid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"ulid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:201

---

### $ZodUndefined

> **$ZodUndefined**: [`$constructor`](#constructor-5)\<[` $ZodUndefined`](#zodundefined), [`$ZodUndefinedDef`](#zodundefineddef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:442

---

### $ZodUnion

> **$ZodUnion**: [`$constructor`](#constructor-5)\<[` $ZodUnion`](#zodunion)\<readonly [`$ZodType`](#zodtype)\<`unknown`,`unknown`,` $ZodTypeInternals`\<`unknown`, `unknown`\>\>[]\>, [`$ZodUnionDef`](#zoduniondef)\<readonly [` $ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`,`unknown`\>\>[]\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:623

---

### $ZodUnknown

> **$ZodUnknown**: [`$constructor`](#constructor-5)\<[` $ZodUnknown`](#zodunknown), [`$ZodUnknownDef`](#zodunknowndef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:477

---

### $ZodURL

> **$ZodURL**: [`$constructor`](#constructor-5)\<[` $ZodURL`](#zodurl), [`$ZodURLDef`](#zodurldef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:161

---

### $ZodUUID

> **$ZodUUID**: [`$constructor`](#constructor-5)\<[` $ZodUUID`](#zoduuid), [`$ZodUUIDDef`](#zoduuiddef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:141

---

### $ZodVoid

> **$ZodVoid**: [`$constructor`](#constructor-5)\<[` $ZodVoid`](#zodvoid), [`$ZodVoidDef`](#zodvoiddef)\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:499

---

### $ZodXID

> **$ZodXID**: [`$constructor`](#constructor-5)\<[` $ZodXID`](#zodxid), [`$ZodStringFormatDef`](#zodstringformatdef)\<`"xid"`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:209

---

### decode

> `const` **decode**: [`$Decode`](#decode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:31

---

### decodeAsync

> `const` **decodeAsync**: [`$DecodeAsync`](#decodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:37

---

### encode

> `const` **encode**: [`$Encode`](#encode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:28

---

### encodeAsync

> `const` **encodeAsync**: [`$EncodeAsync`](#encodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:34

---

### globalConfig

> `const` **globalConfig**: [`$ZodConfig`](#zodconfig)

Defined in: node\_modules/zod/v4/core/core.d.cts:51

---

### globalRegistry

> `const` **globalRegistry**: [`$ZodRegistry`](#zodregistry)\<[`GlobalMeta`](#globalmeta)\>

Defined in: node\_modules/zod/v4/core/registries.d.cts:34

---

### NEVER

> `const` **NEVER**: `never`

Defined in: node\_modules/zod/v4/core/core.d.cts:15

A special constant with type `never`

---

### parse

> `const` **parse**: [`$Parse`](#parse)

Defined in: node\_modules/zod/v4/core/parse.d.cts:13

---

### parseAsync

> `const` **parseAsync**: [`$ParseAsync`](#parseasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:19

---

### safeDecode

> `const` **safeDecode**: [`$SafeDecode`](#safedecode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:43

---

### safeDecodeAsync

> `const` **safeDecodeAsync**: [`$SafeDecodeAsync`](#safedecodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:49

---

### safeEncode

> `const` **safeEncode**: [`$SafeEncode`](#safeencode)

Defined in: node\_modules/zod/v4/core/parse.d.cts:40

---

### safeEncodeAsync

> `const` **safeEncodeAsync**: [`$SafeEncodeAsync`](#safeencodeasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:46

---

### safeParse

> `const` **safeParse**: [`$SafeParse`](#safeparse)

Defined in: node\_modules/zod/v4/core/parse.d.cts:22

---

### safeParseAsync

> `const` **safeParseAsync**: [`$SafeParseAsync`](#safeparseasync)

Defined in: node\_modules/zod/v4/core/parse.d.cts:25

---

### TimePrecision

> `const` **TimePrecision**: `object`

Defined in: node\_modules/zod/v4/core/api.d.cts:90

#### Type Declaration

##### Any

> `readonly` **Any**: `null`

##### Microsecond

> `readonly` **Microsecond**: `6`

##### Millisecond

> `readonly` **Millisecond**: `3`

##### Minute

> `readonly` **Minute**: `-1`

##### Second

> `readonly` **Second**: `0`

---

### version

> `const` **version**: `object`

Defined in: node\_modules/zod/v4/core/versions.d.cts:1

#### Type Declaration

##### major

> `readonly` **major**: `4`

##### minor

> `readonly` **minor**: `1`

##### patch

> `readonly` **patch**: `number`

## Functions

### \_any()

> **\_any**\<`T`\>(`Class`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:136

#### Type Parameters

##### T

`T` _extends_ [`$ZodAny`](#zodany)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

#### Returns

`T`

---

### \_array()

> **\_array**\<`T`\>(`Class`, `element`, `params?`): [`$ZodArray`](#zodarray)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:202

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodArray`](#zodarray)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### element

`T`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodArray`](#zodarray)\<`T`\>

---

### \_base64()

> **\_base64**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:80

#### Type Parameters

##### T

`T` _extends_ [`$ZodBase64`](#zodbase64)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_base64url()

> **\_base64url**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:83

#### Type Parameters

##### T

`T` _extends_ [`$ZodBase64URL`](#zodbase64url)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_bigint()

> **\_bigint**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:125

#### Type Parameters

##### T

`T` _extends_ [`$ZodBigInt`](#zodbigint)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `coerce?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### coerce?

`boolean`

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_boolean()

> **\_boolean**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:120

#### Type Parameters

##### T

`T` _extends_ [`$ZodBoolean`](#zodboolean)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_catch()

> **\_catch**\<`T`\>(`Class`, `innerType`, `catchValue`): [`$ZodCatch`](#zodcatch)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:254

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodCatch`](#zodcatch)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

##### catchValue

[`output`](#output-11)\<`T`\> | (`ctx`) => [`output`](#output-11)\<`T`\>

#### Returns

[`$ZodCatch`](#zodcatch)\<`T`\>

---

### \_check()

> **\_check**\<`O`\>(`fn`, `params?`): [`$ZodCheck`](#zodcheck)\<`O`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:279

#### Type Parameters

##### O

`O` = `unknown`

#### Parameters

##### fn

[`CheckFn`](#checkfn)\<`O`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; `when?`: (`payload`) => `boolean`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

###### when?

(`payload`) => `boolean`

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

#### Returns

[`$ZodCheck`](#zodcheck)\<`O`\>

---

### \_cidrv4()

> **\_cidrv4**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:74

#### Type Parameters

##### T

`T` _extends_ [`$ZodCIDRv4`](#zodcidrv4)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v4"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v4"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v4"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v4"`

#### Returns

`T`

---

### \_cidrv6()

> **\_cidrv6**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:77

#### Type Parameters

##### T

`T` _extends_ [`$ZodCIDRv6`](#zodcidrv6)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v6"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v6"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v6"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v6"`

#### Returns

`T`

---

### \_coercedBigint()

> **\_coercedBigint**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:126

#### Type Parameters

##### T

`T` _extends_ [`$ZodBigInt`](#zodbigint)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `coerce?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### coerce?

`boolean`

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_coercedBoolean()

> **\_coercedBoolean**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:121

#### Type Parameters

##### T

`T` _extends_ [`$ZodBoolean`](#zodboolean)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_coercedDate()

> **\_coercedDate**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:145

#### Type Parameters

##### T

`T` _extends_ [`$ZodDate`](#zoddate)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_coercedNumber()

> **\_coercedNumber**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:113

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumber`](#zodnumber)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_coercedString()

> **\_coercedString**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:21

#### Type Parameters

##### T

`T` _extends_ [`$ZodString`](#zodstring)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_cuid()

> **\_cuid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:53

#### Type Parameters

##### T

`T` _extends_ [`$ZodCUID`](#zodcuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_cuid2()

> **\_cuid2**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:56

#### Type Parameters

##### T

`T` _extends_ [`$ZodCUID2`](#zodcuid2)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_custom()

> **\_custom**\<`O`, `I`\>(`Class`, `fn`, `_params`): [`$ZodCustom`](#zodcustom)\<`O`, `I`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:266

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `O`

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodCustom`](#zodcustom)\<`unknown`, `unknown`\>\>

##### fn

(`data`) => `unknown`

##### \_params

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; `when?`: (`payload`) => `boolean`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

###### when?

(`payload`) => `boolean`

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

| `undefined`

#### Returns

[`$ZodCustom`](#zodcustom)\<`O`, `I`\>

---

### \_date()

> **\_date**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:144

#### Type Parameters

##### T

`T` _extends_ [`$ZodDate`](#zoddate)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_default()

> **\_default**\<`T`\>(`Class`, `innerType`, `defaultValue`): [`$ZodDefault`](#zoddefault)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:248

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodDefault`](#zoddefault)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

##### defaultValue

[`NoUndefined`](../util.md#noundefined)\<[`output`](#output-11)\<`T`\>\> | () => [`NoUndefined`](../util.md#noundefined)\<[`output`](#output-11)\<`T`\>\>

#### Returns

[`$ZodDefault`](#zoddefault)\<`T`\>

---

### \_discriminatedUnion()

> **\_discriminatedUnion**\<`Types`, `Disc`\>(`Class`, `discriminator`, `options`, `params?`): [`$ZodDiscriminatedUnion`](#zoddiscriminatedunion)\<`Types`, `Disc`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:213

#### Type Parameters

##### Types

`Types` _extends_ \[[`$ZodTypeDiscriminable`](#zodtypediscriminable), `...$ZodTypeDiscriminable[]`\]

##### Disc

`Disc` _extends_ `string`

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodDiscriminatedUnion`](#zoddiscriminatedunion)\<readonly [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>[], `string`\>\>

##### discriminator

`Disc`

##### options

`Types`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidUnion`](#zodissueinvalidunion)\>; `message?`: `string`; `unionFallback?`: `boolean`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidUnion`](#zodissueinvalidunion)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### unionFallback?

`boolean`

#### Returns

[`$ZodDiscriminatedUnion`](#zoddiscriminatedunion)\<`Types`, `Disc`\>

---

### \_e164()

> **\_e164**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:86

#### Type Parameters

##### T

`T` _extends_ [`$ZodE164`](#zode164)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_email()

> **\_email**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:26

#### Type Parameters

##### T

`T` _extends_ [`$ZodEmail`](#zodemail)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_emoji()

> **\_emoji**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:47

#### Type Parameters

##### T

`T` _extends_ [`$ZodEmoji`](#zodemoji)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_endsWith()

> **\_endsWith**(`suffix`, `params?`): [`$ZodCheckEndsWith`](#zodcheckendswith)

Defined in: node\_modules/zod/v4/core/api.d.cts:189

#### Parameters

##### suffix

`string`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckEndsWith`](#zodcheckendswith)

---

### \_enum()

#### Call Signature

> **\_enum**\<`T`\>(`Class`, `values`, `params?`): [`$ZodEnum`](#zodenum)\<`{ [k in string]: { [k in string]: k }[k] }`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:226

##### Type Parameters

###### T

`T` _extends_ `string`[]

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodEnum`](#zodenum)\<`Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>\>\>

###### values

`T`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodEnum`](#zodenum)\<`{ [k in string]: { [k in string]: k }[k] }`\>

#### Call Signature

> **\_enum**\<`T`\>(`Class`, `entries`, `params?`): [`$ZodEnum`](#zodenum)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:227

##### Type Parameters

###### T

`T` _extends_ `Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodEnum`](#zodenum)\<`Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>\>\>

###### entries

`T`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodEnum`](#zodenum)\<`T`\>

---

### \_file()

> **\_file**(`Class`, `params?`): [`$ZodFile`](#zodfile)

Defined in: node\_modules/zod/v4/core/api.d.cts:240

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodFile`](#zodfile)\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodFile`](#zodfile)

---

### \_float32()

> **\_float32**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:115

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumberFormat`](#zodnumberformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_float64()

> **\_float64**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:116

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumberFormat`](#zodnumberformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_gt()

> **\_gt**(`value`, `params?`): [`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:155

#### Parameters

##### value

[`Numeric`](../util.md#numeric)

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

---

### \_gte()

> **\_gte**(`value`, `params?`): [`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:156

#### Parameters

##### value

[`Numeric`](../util.md#numeric)

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

---

### \_guid()

> **\_guid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:29

#### Type Parameters

##### T

`T` _extends_ [`$ZodGUID`](#zodguid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_includes()

> **\_includes**(`includes`, `params?`): [`$ZodCheckIncludes`](#zodcheckincludes)

Defined in: node\_modules/zod/v4/core/api.d.cts:185

#### Parameters

##### includes

`string`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `position?`: `number`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### position?

`number`

#### Returns

[`$ZodCheckIncludes`](#zodcheckincludes)

---

### \_int()

> **\_int**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:114

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumberFormat`](#zodnumberformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_int32()

> **\_int32**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:117

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumberFormat`](#zodnumberformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_int64()

> **\_int64**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:127

#### Type Parameters

##### T

`T` _extends_ [`$ZodBigIntFormat`](#zodbigintformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>\>\>; `message?`: `string`; `when?`: (`payload`) => `boolean`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### when?

(`payload`) => `boolean`

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

#### Returns

`T`

---

### \_intersection()

> **\_intersection**\<`T`, `U`\>(`Class`, `left`, `right`): [`$ZodIntersection`](#zodintersection)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:215

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

##### U

`U` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodIntersection`](#zodintersection)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### left

`T`

##### right

`U`

#### Returns

[`$ZodIntersection`](#zodintersection)\<`T`, `U`\>

---

### \_ipv4()

> **\_ipv4**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:68

#### Type Parameters

##### T

`T` _extends_ [`$ZodIPv4`](#zodipv4)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_ipv6()

> **\_ipv6**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:71

#### Type Parameters

##### T

`T` _extends_ [`$ZodIPv6`](#zodipv6)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_isoDate()

> **\_isoDate**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:102

#### Type Parameters

##### T

`T` _extends_ [`$ZodISODate`](#zodisodate)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_isoDateTime()

> **\_isoDateTime**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:99

#### Type Parameters

##### T

`T` _extends_ [`$ZodISODateTime`](#zodisodatetime)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `local?`: `boolean`; `message?`: `string`; `offset?`: `boolean`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### local?

`boolean`

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### offset?

`boolean`

###### precision?

`number` \| `null`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `local?`: `boolean`; `message?`: `string`; `offset?`: `boolean`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### local?

`boolean`

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### offset?

`boolean`

###### precision?

`number` \| `null`

#### Returns

`T`

---

### \_isoDuration()

> **\_isoDuration**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:108

#### Type Parameters

##### T

`T` _extends_ [`$ZodISODuration`](#zodisoduration)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_isoTime()

> **\_isoTime**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:105

#### Type Parameters

##### T

`T` _extends_ [`$ZodISOTime`](#zodisotime)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### precision?

`number` \| `null`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### precision?

`number` \| `null`

#### Returns

`T`

---

### \_jwt()

> **\_jwt**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:89

#### Type Parameters

##### T

`T` _extends_ [`$ZodJWT`](#zodjwt)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `alg?`: [`JWTAlgorithm`](../util.md#jwtalgorithm); `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### alg?

[`JWTAlgorithm`](../util.md#jwtalgorithm)

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

|

\{ `abort?`: `boolean`; `alg?`: [`JWTAlgorithm`](../util.md#jwtalgorithm); `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### alg?

[`JWTAlgorithm`](../util.md#jwtalgorithm)

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_ksuid()

> **\_ksuid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:65

#### Type Parameters

##### T

`T` _extends_ [`$ZodKSUID`](#zodksuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_lazy()

> **\_lazy**\<`T`\>(`Class`, `getter`): [`$ZodLazy`](#zodlazy)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:262

#### Type Parameters

##### T

`T` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodLazy`](#zodlazy)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### getter

() => `T`

#### Returns

[`$ZodLazy`](#zodlazy)\<`T`\>

---

### \_length()

> **\_length**(`length`, `params?`): [`$ZodCheckLengthEquals`](#zodchecklengthequals)\<[`HasLength`](../util.md#haslength)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:177

#### Parameters

##### length

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasLength`](../util.md#haslength)\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasLength`](../util.md#haslength)\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasLength`](../util.md#haslength)\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasLength`](../util.md#haslength)\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckLengthEquals`](#zodchecklengthequals)\<[`HasLength`](../util.md#haslength)\>

---

### \_literal()

#### Call Signature

> **\_literal**\<`T`\>(`Class`, `value`, `params?`): [`$ZodLiteral`](#zodliteral)\<`T`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/api.d.cts:237

##### Type Parameters

###### T

`T` _extends_ [`Literal`](../util.md#literal)[]

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodLiteral`](#zodliteral)\<[`Literal`](../util.md#literal)\>\>

###### value

`T`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodLiteral`](#zodliteral)\<`T`\[`number`\]\>

#### Call Signature

> **\_literal**\<`T`\>(`Class`, `value`, `params?`): [`$ZodLiteral`](#zodliteral)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:238

##### Type Parameters

###### T

`T` _extends_ [`Literal`](../util.md#literal)

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodLiteral`](#zodliteral)\<[`Literal`](../util.md#literal)\>\>

###### value

`T`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodLiteral`](#zodliteral)\<`T`\>

---

### \_lowercase()

> **\_lowercase**(`params?`): [`$ZodCheckLowerCase`](#zodchecklowercase)

Defined in: node\_modules/zod/v4/core/api.d.cts:181

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

[`$ZodCheckLowerCase`](#zodchecklowercase)

---

### \_lt()

> **\_lt**(`value`, `params?`): [`$ZodCheckLessThan`](#zodchecklessthan)\<[`Numeric`](../util.md#numeric)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:149

#### Parameters

##### value

[`Numeric`](../util.md#numeric)

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckLessThan`](#zodchecklessthan)\<[`Numeric`](../util.md#numeric)\>

---

### \_lte()

> **\_lte**(`value`, `params?`): [`$ZodCheckLessThan`](#zodchecklessthan)\<[`Numeric`](../util.md#numeric)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:150

#### Parameters

##### value

[`Numeric`](../util.md#numeric)

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckLessThan`](#zodchecklessthan)\<[`Numeric`](../util.md#numeric)\>

---

### \_map()

> **\_map**\<`Key`, `Value`\>(`Class`, `keyType`, `valueType`, `params?`): [`$ZodMap`](#zodmap)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:222

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

##### Value

`Value` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodMap`](#zodmap)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### keyType

`Key`

##### valueType

`Value`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidKey`](#zodissueinvalidkey)\<`unknown`\> \| [`$ZodIssueInvalidElement`](#zodissueinvalidelement)\<`unknown`\>\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidKey`](#zodissueinvalidkey)\<`unknown`\> \| [`$ZodIssueInvalidElement`](#zodissueinvalidelement)\<`unknown`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodMap`](#zodmap)\<`Key`, `Value`\>

---

### \_maxLength()

> **\_maxLength**(`maximum`, `params?`): [`$ZodCheckMaxLength`](#zodcheckmaxlength)\<[`HasLength`](../util.md#haslength)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:173

#### Parameters

##### maximum

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasLength`](../util.md#haslength)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasLength`](../util.md#haslength)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMaxLength`](#zodcheckmaxlength)\<[`HasLength`](../util.md#haslength)\>

---

### \_maxSize()

> **\_maxSize**(`maximum`, `params?`): [`$ZodCheckMaxSize`](#zodcheckmaxsize)\<[`HasSize`](../util.md#hassize)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:167

#### Parameters

##### maximum

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasSize`](../util.md#hassize)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasSize`](../util.md#hassize)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMaxSize`](#zodcheckmaxsize)\<[`HasSize`](../util.md#hassize)\>

---

### \_mime()

> **\_mime**(`types`, `params?`): [`$ZodCheckMimeType`](#zodcheckmimetype)

Defined in: node\_modules/zod/v4/core/api.d.cts:195

#### Parameters

##### types

[`MimeTypes`](../util.md#mimetypes)[]

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMimeType`](#zodcheckmimetype)

---

### \_minLength()

> **\_minLength**(`minimum`, `params?`): [`$ZodCheckMinLength`](#zodcheckminlength)\<[`HasLength`](../util.md#haslength)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:175

#### Parameters

##### minimum

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasLength`](../util.md#haslength)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasLength`](../util.md#haslength)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMinLength`](#zodcheckminlength)\<[`HasLength`](../util.md#haslength)\>

---

### \_minSize()

> **\_minSize**(`minimum`, `params?`): [`$ZodCheckMinSize`](#zodcheckminsize)\<[`HasSize`](../util.md#hassize)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:169

#### Parameters

##### minimum

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasSize`](../util.md#hassize)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasSize`](../util.md#hassize)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMinSize`](#zodcheckminsize)\<[`HasSize`](../util.md#hassize)\>

---

### \_multipleOf()

> **\_multipleOf**(`value`, `params?`): [`$ZodCheckMultipleOf`](#zodcheckmultipleof)

Defined in: node\_modules/zod/v4/core/api.d.cts:165

#### Parameters

##### value

`number` | `bigint`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueNotMultipleOf`](#zodissuenotmultipleof)\<`number` \| `bigint`\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueNotMultipleOf`](#zodissuenotmultipleof)\<`number` \| `bigint`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckMultipleOf`](#zodcheckmultipleof)

---

### \_nan()

> **\_nan**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:147

#### Type Parameters

##### T

`T` _extends_ [`$ZodNaN`](#zodnan)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_nanoid()

> **\_nanoid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:50

#### Type Parameters

##### T

`T` _extends_ [`$ZodNanoID`](#zodnanoid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### ~~\_nativeEnum()~~

> **\_nativeEnum**\<`T`\>(`Class`, `entries`, `params?`): [`$ZodEnum`](#zodenum)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:235

#### Type Parameters

##### T

`T` _extends_ `Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodEnum`](#zodenum)\<`Readonly`\<`Record`\<`string`, [`EnumValue`](../util.md#enumvalue)\>\>\>\>

##### entries

`T`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidValue`](#zodissueinvalidvalue)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodEnum`](#zodenum)\<`T`\>

#### Deprecated

This API has been merged into `z.enum()`. Use `z.enum()` instead.

```ts
enum Colors {
  red,
  green,
  blue,
}
z.enum(Colors);
```

---

### \_negative()

> **\_negative**(`params?`): [`$ZodCheckLessThan`](#zodchecklessthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:161

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckLessThan`](#zodchecklessthan)

---

### \_never()

> **\_never**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:140

#### Type Parameters

##### T

`T` _extends_ [`$ZodNever`](#zodnever)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_nonnegative()

> **\_nonnegative**(`params?`): [`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:163

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

---

### \_nonoptional()

> **\_nonoptional**\<`T`\>(`Class`, `innerType`, `params?`): [`$ZodNonOptional`](#zodnonoptional)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:250

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodNonOptional`](#zodnonoptional)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodNonOptional`](#zodnonoptional)\<`T`\>

---

### \_nonpositive()

> **\_nonpositive**(`params?`): [`$ZodCheckLessThan`](#zodchecklessthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:162

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooBig`](#zodissuetoobig)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckLessThan`](#zodchecklessthan)

---

### \_normalize()

> **\_normalize**(`form?`): [`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:197

#### Parameters

##### form?

`string` & `object` | `"NFC"` | `"NFD"` | `"NFKC"` | `"NFKD"`

#### Returns

[`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

---

### \_null()

> **\_null**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:134

#### Type Parameters

##### T

`T` _extends_ [`$ZodNull`](#zodnull)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_nullable()

> **\_nullable**\<`T`\>(`Class`, `innerType`): [`$ZodNullable`](#zodnullable)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:246

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodNullable`](#zodnullable)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

#### Returns

[`$ZodNullable`](#zodnullable)\<`T`\>

---

### \_number()

> **\_number**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:112

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumber`](#zodnumber)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_optional()

> **\_optional**\<`T`\>(`Class`, `innerType`): [`$ZodOptional`](#zodoptional)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:244

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodOptional`](#zodoptional)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

#### Returns

[`$ZodOptional`](#zodoptional)\<`T`\>

---

### \_overwrite()

> **\_overwrite**\<`T`\>(`tx`): [`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:196

#### Type Parameters

##### T

`T`

#### Parameters

##### tx

(`input`) => `T`

#### Returns

[`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`T`\>

---

### \_pipe()

> **\_pipe**\<`A`, `B`\>(`Class`, `in_`, `out`): [`$ZodPipe`](#zodpipe)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:256

#### Type Parameters

##### A

`A` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

##### B

`B` _extends_ [`$ZodType`](#zodtype)\<`unknown`, [`output`](#output-11)\<`A`\>, `$ZodTypeInternals`\<`unknown`, [`output`](#output-11)\<`A`\>\>\> = [`$ZodType`](#zodtype)\<`unknown`, [`output`](#output-11)\<`A`\>, `$ZodTypeInternals`\<`unknown`, [`output`](#output-11)\<`A`\>\>\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodPipe`](#zodpipe)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### in\_

`A`

##### out

`B` | [`$ZodType`](#zodtype)\<`unknown`, [`output`](#output-11)\<`A`\>, `$ZodTypeInternals`\<`unknown`, [`output`](#output-11)\<`A`\>\>\>

#### Returns

[`$ZodPipe`](#zodpipe)\<`A`, `B`\>

---

### \_positive()

> **\_positive**(`params?`): [`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

Defined in: node\_modules/zod/v4/core/api.d.cts:160

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`Numeric`](../util.md#numeric)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckGreaterThan`](#zodcheckgreaterthan)

---

### \_promise()

> **\_promise**\<`T`\>(`Class`, `innerType`): [`$ZodPromise`](#zodpromise)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:264

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodPromise`](#zodpromise)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

#### Returns

[`$ZodPromise`](#zodpromise)\<`T`\>

---

### \_property()

> **\_property**\<`K`, `T`\>(`property`, `schema`, `params?`): [`$ZodCheckProperty`](#zodcheckproperty)\<`{ [k in string]: output<T> }`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:191

#### Type Parameters

##### K

`K` _extends_ `string`

##### T

`T` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

#### Parameters

##### property

`K`

##### schema

`T`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckProperty`](#zodcheckproperty)\<`{ [k in string]: output<T> }`\>

---

### \_readonly()

> **\_readonly**\<`T`\>(`Class`, `innerType`): [`$ZodReadonly`](#zodreadonly)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:258

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodReadonly`](#zodreadonly)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

#### Returns

[`$ZodReadonly`](#zodreadonly)\<`T`\>

---

### \_record()

> **\_record**\<`Key`, `Value`\>(`Class`, `keyType`, `valueType`, `params?`): [`$ZodRecord`](#zodrecord)\<`Key`, `Value`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:220

#### Type Parameters

##### Key

`Key` _extends_ [`$ZodRecordKey`](#zodrecordkey-1)

##### Value

`Value` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodRecord`](#zodrecord)\<[`$ZodRecordKey`](#zodrecordkey-1), [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### keyType

`Key`

##### valueType

`Value`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidKey`](#zodissueinvalidkey)\<`Record`\<`PropertyKey`, `unknown`\>\>\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidKey`](#zodissueinvalidkey)\<`Record`\<`PropertyKey`, `unknown`\>\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodRecord`](#zodrecord)\<`Key`, `Value`\>

---

### \_refine()

> **\_refine**\<`O`, `I`\>(`Class`, `fn`, `_params`): [`$ZodCustom`](#zodcustom)\<`O`, `I`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:267

#### Type Parameters

##### O

`O` = `unknown`

##### I

`I` = `O`

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodCustom`](#zodcustom)\<`unknown`, `unknown`\>\>

##### fn

(`data`) => `unknown`

##### \_params

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; `when?`: (`payload`) => `boolean`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssue`](#zodissue)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

###### when?

(`payload`) => `boolean`

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

| `undefined`

#### Returns

[`$ZodCustom`](#zodcustom)\<`O`, `I`\>

---

### \_regex()

> **\_regex**(`pattern`, `params?`): [`$ZodCheckRegex`](#zodcheckregex)

Defined in: node\_modules/zod/v4/core/api.d.cts:179

#### Parameters

##### pattern

`RegExp`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckRegex`](#zodcheckregex)

---

### \_set()

> **\_set**\<`Value`\>(`Class`, `valueType`, `params?`): [`$ZodSet`](#zodset)\<`Value`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:224

#### Type Parameters

##### Value

`Value` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodSet`](#zodset)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### valueType

`Value`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodSet`](#zodset)\<`Value`\>

---

### \_size()

> **\_size**(`size`, `params?`): [`$ZodCheckSizeEquals`](#zodchecksizeequals)\<[`HasSize`](../util.md#hassize)\>

Defined in: node\_modules/zod/v4/core/api.d.cts:171

#### Parameters

##### size

`number`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasSize`](../util.md#hassize)\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasSize`](../util.md#hassize)\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueTooSmall`](#zodissuetoosmall)\<[`HasSize`](../util.md#hassize)\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<[`HasSize`](../util.md#hassize)\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckSizeEquals`](#zodchecksizeequals)\<[`HasSize`](../util.md#hassize)\>

---

### \_startsWith()

> **\_startsWith**(`prefix`, `params?`): [`$ZodCheckStartsWith`](#zodcheckstartswith)

Defined in: node\_modules/zod/v4/core/api.d.cts:187

#### Parameters

##### prefix

`string`

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCheckStartsWith`](#zodcheckstartswith)

---

### \_string()

> **\_string**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:20

#### Type Parameters

##### T

`T` _extends_ [`$ZodString`](#zodstring)\<`unknown`\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_stringbool()

> **\_stringbool**(`Classes`, `_params?`): [`$ZodCodec`](#zodcodec)\<[`$ZodString`](#zodstring)\<`unknown`\>, [`$ZodBoolean`](#zodboolean)\<`unknown`\>\>

Defined in: node\_modules/zod/v4/core/api.d.cts:290

#### Parameters

##### Classes

###### Boolean?

[`$constructor`](#constructor-5)\<[`$ZodBoolean`](#zodboolean)\<`unknown`\>, [`$ZodBooleanDef`](#zodbooleandef)\>

###### Codec?

[`$constructor`](#constructor-5)\<[`$ZodCodec`](#zodcodec)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, [`$ZodCodecDef`](#zodcodecdef)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

###### String?

[`$constructor`](#constructor-5)\<[`$ZodString`](#zodstring)\<`unknown`\>, [`$ZodStringDef`](#zodstringdef)\>

##### \_params?

`string` | [`$ZodStringBoolParams`](#zodstringboolparams)

#### Returns

[`$ZodCodec`](#zodcodec)\<[`$ZodString`](#zodstring)\<`unknown`\>, [`$ZodBoolean`](#zodboolean)\<`unknown`\>\>

---

### \_stringFormat()

> **\_stringFormat**\<`Format`\>(`Class`, `format`, `fnOrRegex`, `_params?`): [`$ZodCustomStringFormat`](#zodcustomstringformat)\<`Format`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:295

#### Type Parameters

##### Format

`Format` _extends_ `string`

#### Parameters

##### Class

[`$constructor`](#constructor-5)\<[`$ZodCustomStringFormat`](#zodcustomstringformat)\<`string`\>, [`$ZodCustomStringFormatDef`](#zodcustomstringformatdef)\<`string`\>\>

##### format

`Format`

##### fnOrRegex

`RegExp` | (`arg`) => `unknown`

##### \_params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodCustomStringFormat`](#zodcustomstringformat)\<`Format`\>

---

### \_success()

> **\_success**\<`T`\>(`Class`, `innerType`): [`$ZodSuccess`](#zodsuccess)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:252

#### Type Parameters

##### T

`T` _extends_ [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodSuccess`](#zodsuccess)\<[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### innerType

`T`

#### Returns

[`$ZodSuccess`](#zodsuccess)\<`T`\>

---

### \_superRefine()

> **\_superRefine**\<`T`\>(`fn`): [`$ZodCheck`](#zodcheck)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:278

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

(`arg`, `payload`) => `void` \| `Promise`\<`void`\>

#### Returns

[`$ZodCheck`](#zodcheck)\<`T`\>

---

### \_symbol()

> **\_symbol**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:130

#### Type Parameters

##### T

`T` _extends_ [`$ZodSymbol`](#zodsymbol)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_templateLiteral()

> **\_templateLiteral**\<`Parts`\>(`Class`, `parts`, `params?`): [`$ZodTemplateLiteral`](#zodtemplateliteral)\<[`$PartsToTemplateLiteral`](#partstotemplateliteral)\<`Parts`\>\>

Defined in: node\_modules/zod/v4/core/api.d.cts:260

#### Type Parameters

##### Parts

`Parts` _extends_ [`$ZodTemplateLiteralPart`](#zodtemplateliteralpart)[]

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodTemplateLiteral`](#zodtemplateliteral)\<`string`\>\>

##### parts

`Parts`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `format?`: `string`; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### format?

`string`

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodTemplateLiteral`](#zodtemplateliteral)\<[`$PartsToTemplateLiteral`](#partstotemplateliteral)\<`Parts`\>\>

---

### \_toLowerCase()

> **\_toLowerCase**(): [`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:199

#### Returns

[`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

---

### \_toUpperCase()

> **\_toUpperCase**(): [`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:200

#### Returns

[`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

---

### \_transform()

> **\_transform**\<`I`, `O`\>(`Class`, `fn`): [`$ZodTransform`](#zodtransform)\<`Awaited`\<`O`\>, `I`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:242

#### Type Parameters

##### I

`I` = `unknown`

##### O

`O` = `I`

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodTransform`](#zodtransform)\<`unknown`, `unknown`\>\>

##### fn

(`input`, `ctx?`) => `O`

#### Returns

[`$ZodTransform`](#zodtransform)\<`Awaited`\<`O`\>, `I`\>

---

### \_trim()

> **\_trim**(): [`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:198

#### Returns

[`$ZodCheckOverwrite`](#zodcheckoverwrite)\<`string`\>

---

### \_tuple()

#### Call Signature

> **\_tuple**\<`T`\>(`Class`, `items`, `params?`): [`$ZodTuple`](#zodtuple)\<`T`, `null`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:217

##### Type Parameters

###### T

`T` _extends_ readonly \[[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\]

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodTuple`](#zodtuple)\<readonly [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>[], [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| `null`\>\>

###### items

`T`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`unknown`[]\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`unknown`[]\>\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`unknown`[]\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`unknown`[]\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodTuple`](#zodtuple)\<`T`, `null`\>

#### Call Signature

> **\_tuple**\<`T`, `Rest`\>(`Class`, `items`, `rest`, `params?`): [`$ZodTuple`](#zodtuple)\<`T`, `Rest`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:218

##### Type Parameters

###### T

`T` _extends_ readonly \[[`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\]

###### Rest

`Rest` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

##### Parameters

###### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodTuple`](#zodtuple)\<readonly [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>[], [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| `null`\>\>

###### items

`T`

###### rest

`Rest`

###### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`unknown`[]\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`unknown`[]\>\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`unknown`[]\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`unknown`[]\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

##### Returns

[`$ZodTuple`](#zodtuple)\<`T`, `Rest`\>

---

### \_uint32()

> **\_uint32**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:118

#### Type Parameters

##### T

`T` _extends_ [`$ZodNumberFormat`](#zodnumberformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"number"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"number"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_uint64()

> **\_uint64**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:128

#### Type Parameters

##### T

`T` _extends_ [`$ZodBigIntFormat`](#zodbigintformat)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>\>\>; `message?`: `string`; `when?`: (`payload`) => `boolean`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueTooBig`](#zodissuetoobig)\<`"bigint"`\> \| [`$ZodIssueTooSmall`](#zodissuetoosmall)\<`"bigint"`\>\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### when?

(`payload`) => `boolean`

If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`.

#### Returns

`T`

---

### \_ulid()

> **\_ulid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:59

#### Type Parameters

##### T

`T` _extends_ [`$ZodULID`](#zodulid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### \_undefined()

> **\_undefined**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:132

#### Type Parameters

##### T

`T` _extends_ [`$ZodUndefined`](#zodundefined)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_union()

> **\_union**\<`T`\>(`Class`, `options`, `params?`): [`$ZodUnion`](#zodunion)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:205

#### Type Parameters

##### T

`T` _extends_ readonly [`$ZodObject`](#zodobject)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](#zodobjectconfig)\>[]

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<[`$ZodUnion`](#zodunion)\<readonly [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>[]\>\>

##### options

`T`

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidUnion`](#zodissueinvalidunion)\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidUnion`](#zodissueinvalidunion)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`$ZodUnion`](#zodunion)\<`T`\>

---

### \_unknown()

> **\_unknown**\<`T`\>(`Class`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:138

#### Type Parameters

##### T

`T` _extends_ [`$ZodUnknown`](#zodunknown)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

#### Returns

`T`

---

### \_uppercase()

> **\_uppercase**(`params?`): [`$ZodCheckUpperCase`](#zodcheckuppercase)

Defined in: node\_modules/zod/v4/core/api.d.cts:183

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

[`$ZodCheckUpperCase`](#zodcheckuppercase)

---

### \_url()

> **\_url**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:44

#### Type Parameters

##### T

`T` _extends_ [`$ZodURL`](#zodurl)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `hostname?`: `RegExp`; `message?`: `string`; `normalize?`: `boolean`; `pattern?`: `RegExp`; `protocol?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### hostname?

`RegExp`

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### normalize?

`boolean`

###### pattern?

`RegExp`

###### protocol?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `hostname?`: `RegExp`; `message?`: `string`; `normalize?`: `boolean`; `pattern?`: `RegExp`; `protocol?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### hostname?

`RegExp`

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### normalize?

`boolean`

###### pattern?

`RegExp`

###### protocol?

`RegExp`

#### Returns

`T`

---

### \_uuid()

> **\_uuid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:32

#### Type Parameters

##### T

`T` _extends_ [`$ZodUUID`](#zoduuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

#### Returns

`T`

---

### \_uuidv4()

> **\_uuidv4**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:35

#### Type Parameters

##### T

`T` _extends_ [`$ZodUUID`](#zoduuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

#### Returns

`T`

---

### \_uuidv6()

> **\_uuidv6**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:38

#### Type Parameters

##### T

`T` _extends_ [`$ZodUUID`](#zoduuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

#### Returns

`T`

---

### \_uuidv7()

> **\_uuidv7**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:41

#### Type Parameters

##### T

`T` _extends_ [`$ZodUUID`](#zoduuid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `version?`: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### version?

`"v1"` \| `"v2"` \| `"v3"` \| `"v4"` \| `"v5"` \| `"v6"` \| `"v7"` \| `"v8"`

#### Returns

`T`

---

### \_void()

> **\_void**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:142

#### Type Parameters

##### T

`T` _extends_ [`$ZodVoid`](#zodvoid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

`T`

---

### \_xid()

> **\_xid**\<`T`\>(`Class`, `params?`): `T`

Defined in: node\_modules/zod/v4/core/api.d.cts:62

#### Type Parameters

##### T

`T` _extends_ [`$ZodXID`](#zodxid)

#### Parameters

##### Class

[`SchemaClass`](../util.md#schemaclass)\<`T`\>

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

|

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](#zoderrormap)\<[`$ZodIssueInvalidStringFormat`](#zodissueinvalidstringformat)\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

`T`

---

### $constructor()

> **$constructor**\<`T`, `D`\>(`name`, `initializer`, `params?`): [`$constructor`](#constructor-5)\<`T`,`D`\>

Defined in: node\_modules/zod/v4/core/core.d.cts:16

#### Type Parameters

##### T

`T` _extends_ `ZodTrait`

##### D

`D` = `T`\[`"_zod"`\]\[`"def"`\]

#### Parameters

##### name

`string`

##### initializer

(`inst`, `def`) => `void`

##### params?

###### Parent?

_typeof_ [`Class`](../util.md#class)

#### Returns

[`$constructor`](#constructor-5)\<`T`, `D`\>

---

### config()

> **config**(`newConfig?`): [`$ZodConfig`](#zodconfig)

Defined in: node\_modules/zod/v4/core/core.d.cts:52

#### Parameters

##### newConfig?

`Partial`\<[`$ZodConfig`](#zodconfig)\>

#### Returns

[`$ZodConfig`](#zodconfig)

---

### flattenError()

#### Call Signature

> **flattenError**\<`T`\>(`error`): `_FlattenedError`\<`T`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:142

##### Type Parameters

###### T

`T`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

##### Returns

`_FlattenedError`\<`T`\>

#### Call Signature

> **flattenError**\<`T`, `U`\>(`error`, `mapper?`): `_FlattenedError`\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:143

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

###### mapper?

(`issue`) => `U`

##### Returns

`_FlattenedError`\<`T`, `U`\>

---

### formatError()

#### Call Signature

> **formatError**\<`T`\>(`error`): [`$ZodFormattedError`](#zodformattederror)\<`T`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:154

##### Type Parameters

###### T

`T`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

##### Returns

[`$ZodFormattedError`](#zodformattederror)\<`T`\>

#### Call Signature

> **formatError**\<`T`, `U`\>(`error`, `mapper?`): [`$ZodFormattedError`](#zodformattederror)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:155

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

###### mapper?

(`issue`) => `U`

##### Returns

[`$ZodFormattedError`](#zodformattederror)\<`T`, `U`\>

---

### isValidBase64()

> **isValidBase64**(`data`): `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:299

#### Parameters

##### data

`string`

#### Returns

`boolean`

---

### isValidBase64URL()

> **isValidBase64URL**(`data`): `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:308

#### Parameters

##### data

`string`

#### Returns

`boolean`

---

### isValidJWT()

> **isValidJWT**(`token`, `algorithm?`): `boolean`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:325

#### Parameters

##### token

`string`

##### algorithm?

[`JWTAlgorithm`](../util.md#jwtalgorithm) | `null`

#### Returns

`boolean`

---

### prettifyError()

> **prettifyError**(`error`): `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:209

#### Parameters

##### error

`FailureResult`

#### Returns

`string`

---

### registry()

> **registry**\<`T`, `S`\>(): [`$ZodRegistry`](#zodregistry)\<`T`, `S`\>

Defined in: node\_modules/zod/v4/core/registries.d.cts:33

#### Type Parameters

##### T

`T` _extends_ `MetadataType` = `MetadataType`

##### S

`S` _extends_ [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> = [`$ZodType`](#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

#### Returns

[`$ZodRegistry`](#zodregistry)\<`T`, `S`\>

---

### toDotPath()

> **toDotPath**(`_path`): `string`

Defined in: node\_modules/zod/v4/core/errors.d.cts:208

Format a ZodError as a human-readable string in the following form.

From

```ts
ZodError {
  issues: [
    {
      expected: 'string',
      code: 'invalid_type',
      path: [ 'username' ],
      message: 'Invalid input: expected string'
    },
    {
      expected: 'number',
      code: 'invalid_type',
      path: [ 'favoriteNumbers', 1 ],
      message: 'Invalid input: expected number'
    }
  ];
}
```

to

```
username
  ✖ Expected number, received string at "username
favoriteNumbers[0]
  ✖ Invalid input: expected number
```

#### Parameters

##### \_path

readonly (`string` \| `number` \| `symbol` \| `PathSegment`)[]

#### Returns

`string`

---

### toJSONSchema()

#### Call Signature

> **toJSONSchema**(`schema`, `_params?`): [`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:84

##### Parameters

###### schema

[`$ZodType`](#zodtype)

###### \_params?

`ToJSONSchemaParams`

##### Returns

[`JSONSchema`](namespaces/JSONSchema.md#jsonschema)

#### Call Signature

> **toJSONSchema**(`registry`, `_params?`): `object`

Defined in: node\_modules/zod/v4/core/to-json-schema.d.cts:85

##### Parameters

###### registry

[`$ZodRegistry`](#zodregistry)\<\{ `id?`: `string`; \}\>

###### \_params?

`RegistryToJSONSchemaParams`

##### Returns

`object`

###### schemas

> **schemas**: `Record`\<`string`, [`BaseSchema`](namespaces/JSONSchema.md#baseschema)\>

---

### treeifyError()

#### Call Signature

> **treeifyError**\<`T`\>(`error`): [`$ZodErrorTree`](#zoderrortree)\<`T`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:174

##### Type Parameters

###### T

`T`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

##### Returns

[`$ZodErrorTree`](#zoderrortree)\<`T`\>

#### Call Signature

> **treeifyError**\<`T`, `U`\>(`error`, `mapper?`): [`$ZodErrorTree`](#zoderrortree)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/errors.d.cts:175

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### error

[`$ZodError`](#zoderror)\<`T`\>

###### mapper?

(`issue`) => `U`

##### Returns

[`$ZodErrorTree`](#zoderrortree)\<`T`, `U`\>

## References

### \_max

Renames and re-exports [_lte](#_lte)

---

### \_min

Renames and re-exports [_gte](#_gte)

---

### clone

Re-exports [clone](../../index.md#clone-172)

---

### infer

Renames and re-exports [output](#output-11)

---

### locales

Re-exports [locales](../locales.md)

---

### regexes

Re-exports [regexes](../regexes.md)

---

### util

Re-exports [util](../util.md)
