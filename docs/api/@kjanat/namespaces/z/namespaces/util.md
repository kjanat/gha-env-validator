[**@kjanat/gha-env-validator**](../../../../index.md)

---

[@kjanat/gha-env-validator](../../../../index.md) / [z](../index.md) / util

# util

## Classes

### `abstract` Class

Defined in: node\_modules/zod/v4/core/util.d.cts:195

#### Constructors

##### Constructor

> **new Class**(...`_args`): [`Class`](#class)

Defined in: node\_modules/zod/v4/core/util.d.cts:196

###### Parameters

###### \_args

...`any`[]

###### Returns

[`Class`](#class)

## Type Aliases

### AnyFunc()

> **AnyFunc** = (...`args`) => `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:66

#### Parameters

##### args

...`any`[]

#### Returns

`any`

---

### AssertEqual

> **AssertEqual**\<`T`, `U`\> = \<`V`\>() => `V` _extends_ `T` ? `1` : `2` _extends_ \<`V`\>() => `V` _extends_ `U` ? `1` : `2` ? `true` : `false`

Defined in: node\_modules/zod/v4/core/util.d.cts:15

#### Type Parameters

##### T

`T`

##### U

`U`

---

### AssertExtends

> **AssertExtends**\<`T`, `U`\> = `T` _extends_ `U` ? `T` : `never`

Defined in: node\_modules/zod/v4/core/util.d.cts:17

#### Type Parameters

##### T

`T`

##### U

`U`

---

### AssertNotEqual

> **AssertNotEqual**\<`T`, `U`\> = \<`V`\>() => `V` _extends_ `T` ? `1` : `2` _extends_ \<`V`\>() => `V` _extends_ `U` ? `1` : `2` ? `false` : `true`

Defined in: node\_modules/zod/v4/core/util.d.cts:16

#### Type Parameters

##### T

`T`

##### U

`U`

---

### BuiltIn

> **BuiltIn** = (...`args`) => `any` \| (...`args`) => `any` \| \{ `[toStringTag]`: `string`; \} \| `Date` \| `Error` \| `Generator` \| `Promise`\<`unknown`\> \| `RegExp`

Defined in: node\_modules/zod/v4/core/util.d.cts:39

---

### CleanKey

> **CleanKey**\<`T`\> = `T` _extends_ `` `?${infer K}` `` ? `K` : `T` _extends_ `` `${infer K}?` `` ? `K` : `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:161

#### Type Parameters

##### T

`T` _extends_ `PropertyKey`

---

### Constructor()

> **Constructor**\<`T`, `Def`\> = (...`args`) => `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:177

#### Type Parameters

##### T

`T`

##### Def

`Def` _extends_ `any`[] = `any`[]

#### Parameters

##### args

...`Def`

#### Returns

`T`

---

### EmptyObject

> **EmptyObject** = `Record`\<`string`, `never`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:38

---

### EmptyToNever

> **EmptyToNever**\<`T`\> = keyof `T` _extends_ `never` ? `never` : `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:151

#### Type Parameters

##### T

`T`

---

### EnumLike

> **EnumLike** = `Readonly`\<`Record`\<`string`, [`EnumValue`](#enumvalue)\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:81

---

### EnumValue

> **EnumValue** = `string` \| `number`

Defined in: node\_modules/zod/v4/core/util.d.cts:80

---

### Exactly

> **Exactly**\<`T`, `X`\> = `T` & `Record`\<`Exclude`\<keyof `X`, keyof `T`\>, `never`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:23

#### Type Parameters

##### T

`T`

##### X

`X`

---

### Extend

> **Extend**\<`A`, `B`\> = [`Flatten`](#flatten)\<keyof `A` & keyof `B` _extends_ `never` ? `A` & `B` : `{ [K in keyof A as K extends keyof B ? never : K]: A[K] }` & `{ [K in keyof B]: B[K] }`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:60

#### Type Parameters

##### A

`A` _extends_ [`SomeObject`](#someobject)

##### B

`B` _extends_ [`SomeObject`](#someobject)

---

### ExtractIndexSignature

> **ExtractIndexSignature**\<`T`\> = `{ [K in keyof T as string extends K ? K : K extends string ? never : K]: T[K] }`

Defined in: node\_modules/zod/v4/core/util.d.cts:73

#### Type Parameters

##### T

`T`

---

### Flatten

> **Flatten**\<`T`\> = [`Identity`](#identity)\<`{ [k in keyof T]: T[k] }`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:45

#### Type Parameters

##### T

`T`

---

### FromCleanMap

> **FromCleanMap**\<`T`\> = ``{ [k in keyof T as k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k]: k }``

Defined in: node\_modules/zod/v4/core/util.d.cts:165

#### Type Parameters

##### T

`T` _extends_ [`$ZodLooseShape`](core/index.md#zodlooseshape)

---

### HashAlgorithm

> **HashAlgorithm** = `"md5"` \| `"sha1"` \| `"sha256"` \| `"sha384"` \| `"sha512"`

Defined in: node\_modules/zod/v4/core/util.d.cts:9

---

### HashEncoding

> **HashEncoding** = `"hex"` \| `"base64"` \| `"base64url"`

Defined in: node\_modules/zod/v4/core/util.d.cts:10

---

### HashFormat

> **HashFormat** = `` `${HashAlgorithm}_${HashEncoding}` ``

Defined in: node\_modules/zod/v4/core/util.d.cts:11

---

### HasLength

> **HasLength** = `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:94

#### Properties

##### length

> **length**: `number`

Defined in: node\_modules/zod/v4/core/util.d.cts:95

---

### HasSize

> **HasSize** = `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:91

#### Properties

##### size

> **size**: `number`

Defined in: node\_modules/zod/v4/core/util.d.cts:92

---

### Identity

> **Identity**\<`T`\> = `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:44

#### Type Parameters

##### T

`T`

---

### InexactPartial

> **InexactPartial**\<`T`\> = `{ [P in keyof T]?: T[P] }`

Defined in: node\_modules/zod/v4/core/util.d.cts:35

#### Type Parameters

##### T

`T`

---

### IPVersion

> **IPVersion** = `"v4"` \| `"v6"`

Defined in: node\_modules/zod/v4/core/util.d.cts:12

---

### IsAny

> **IsAny**\<`T`\> = `0` _extends_ `1` & `T` ? `true` : `false`

Defined in: node\_modules/zod/v4/core/util.d.cts:18

#### Type Parameters

##### T

`T`

---

### IsProp

> **IsProp**\<`T`, `K`\> = `T`\[`K`\] _extends_ [`AnyFunc`](#anyfunc) ? `never` : `K`

Defined in: node\_modules/zod/v4/core/util.d.cts:67

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ keyof `T`

---

### JSONType

> **JSONType** = `string` \| `number` \| `boolean` \| `null` \| [`JSONType`](#jsontype)[] \| \{\[`key`: `string`\]: [`JSONType`](#jsontype); \}

Defined in: node\_modules/zod/v4/core/util.d.cts:5

---

### JWTAlgorithm

> **JWTAlgorithm** = `"HS256"` \| `"HS384"` \| `"HS512"` \| `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"` \| `"PS256"` \| `"PS384"` \| `"PS512"` \| `"EdDSA"` \| `string` & `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:8

---

### KeyOf

> **KeyOf**\<`T`\> = keyof [`OmitIndexSignature`](#omitindexsignature)\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:69

#### Type Parameters

##### T

`T`

---

### Keys

> **Keys**\<`T`\> = keyof [`OmitIndexSignature`](#omitindexsignature)\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:76

#### Type Parameters

##### T

`T` _extends_ `object`

---

### KeysArray

> **KeysArray**\<`T`\> = [`Flatten`](#flatten)\<keyof `T` & `string`[]\>

Defined in: node\_modules/zod/v4/core/util.d.cts:86

#### Type Parameters

##### T

`T` _extends_ `object`

---

### KeysEnum

> **KeysEnum**\<`T`\> = [`ToEnum`](#toenum)\<`Exclude`\<keyof `T`, `symbol`\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:85

#### Type Parameters

##### T

`T` _extends_ `object`

---

### Literal

> **Literal** = `string` \| `number` \| `bigint` \| `boolean` \| `null` \| `undefined`

Defined in: node\_modules/zod/v4/core/util.d.cts:87

---

### LiteralArray

> **LiteralArray** = [`Literal`](#literal)[]

Defined in: node\_modules/zod/v4/core/util.d.cts:88

---

### LoosePartial

> **LoosePartial**\<`T`\> = [`InexactPartial`](#inexactpartial)\<`T`\> & `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:26

#### Type Parameters

##### T

`T` _extends_ `object`

---

### MakePartial

> **MakePartial**\<`T`, `K`\> = [`Omit`](#omit)\<`T`, `K`\> & [`InexactPartial`](#inexactpartial)\<`Pick`\<`T`, `K`\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:21

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ keyof `T`

---

### MakeReadonly

> **MakeReadonly**\<`T`\> = `T` _extends_ `Map`\<infer K, infer V\> ? `ReadonlyMap`\<`K`, `V`\> : `T` _extends_ `Set`\<infer V\> ? `ReadonlySet`\<`V`\> : `T` _extends_ \[infer Head, `...(infer Tail)`\] ? readonly \[`Head`, `...Tail`\] : `T` _extends_ infer V[] ? `ReadonlyArray`\<`V`\> : `T` _extends_ [`BuiltIn`](#builtin) ? `T` : `Readonly`\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:42

#### Type Parameters

##### T

`T`

---

### MakeRequired

> **MakeRequired**\<`T`, `K`\> = [`Omit`](#omit)\<`T`, `K`\> & `Required`\<`Pick`\<`T`, `K`\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:22

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ keyof `T`

---

### Mapped

> **Mapped**\<`T`\> = `{ [k in keyof T]: T[k] }`

Defined in: node\_modules/zod/v4/core/util.d.cts:48

#### Type Parameters

##### T

`T`

---

### Mask

> **Mask**\<`Keys`\> = `{ [K in Keys]?: true }`

Defined in: node\_modules/zod/v4/core/util.d.cts:29

#### Type Parameters

##### Keys

`Keys` _extends_ `PropertyKey`

---

### MaybeAsync

> **MaybeAsync**\<`T`\> = `T` \| `Promise`\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:68

#### Type Parameters

##### T

`T`

---

### MimeTypes

> **MimeTypes** = `"application/json"` \| `"application/xml"` \| `"application/x-www-form-urlencoded"` \| `"application/javascript"` \| `"application/pdf"` \| `"application/zip"` \| `"application/vnd.ms-excel"` \| `"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"` \| `"application/msword"` \| `"application/vnd.openxmlformats-officedocument.wordprocessingml.document"` \| `"application/vnd.ms-powerpoint"` \| `"application/vnd.openxmlformats-officedocument.presentationml.presentation"` \| `"application/octet-stream"` \| `"application/graphql"` \| `"text/html"` \| `"text/plain"` \| `"text/css"` \| `"text/javascript"` \| `"text/csv"` \| `"image/png"` \| `"image/jpeg"` \| `"image/gif"` \| `"image/svg+xml"` \| `"image/webp"` \| `"audio/mpeg"` \| `"audio/ogg"` \| `"audio/wav"` \| `"audio/webm"` \| `"video/mp4"` \| `"video/webm"` \| `"video/ogg"` \| `"font/woff"` \| `"font/woff2"` \| `"font/ttf"` \| `"font/otf"` \| `"multipart/form-data"` \| `string` & `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:13

---

### NoNever

> **NoNever**\<`T`\> = [`Identity`](#identity)\<`{ [k in NoNeverKeys<T>]: k extends keyof T ? T[k] : never }`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:57

#### Type Parameters

##### T

`T`

---

### NoNeverKeys

> **NoNeverKeys**\<`T`\> = `{ [k in keyof T]: [T[k]] extends [never] ? never : k }`\[keyof `T`\]

Defined in: node\_modules/zod/v4/core/util.d.cts:54

#### Type Parameters

##### T

`T`

---

### Normalize

> **Normalize**\<`T`\> = `T` _extends_ `undefined` ? `never` : `T` _extends_ `Record`\<`any`, `any`\> ? [`Flatten`](#flatten)\<\{ \[k in keyof Omit\<T, "error" \| "message"\>\]: T\[k\] \} & `"error"` _extends_ keyof `T` ? `object` : `unknown`\> : `never`

Defined in: node\_modules/zod/v4/core/util.d.cts:152

#### Type Parameters

##### T

`T`

---

### NoUndefined

> **NoUndefined**\<`T`\> = `T` _extends_ `undefined` ? `never` : `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:24

#### Type Parameters

##### T

`T`

---

### Numeric

> **Numeric** = `number` \| `bigint` \| `Date`

Defined in: node\_modules/zod/v4/core/util.d.cts:97

---

### Omit

> **Omit**\<`T`, `K`\> = `Pick`\<`T`, `Exclude`\<keyof `T`, `K`\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:19

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ keyof `T`

---

### OmitIndexSignature

> **OmitIndexSignature**\<`T`\> = `{ [K in keyof T as string extends K ? never : K extends string ? K : never]: T[K] }`

Defined in: node\_modules/zod/v4/core/util.d.cts:70

#### Type Parameters

##### T

`T`

---

### OmitKeys

> **OmitKeys**\<`T`, `K`\> = `Pick`\<`T`, `Exclude`\<keyof `T`, `K`\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:20

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ `string`

---

### ParsedTypes

> **ParsedTypes** = `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"file"` \| `"date"` \| `"array"` \| `"map"` \| `"set"` \| `"nan"` \| `"null"` \| `"promise"`

Defined in: node\_modules/zod/v4/core/util.d.cts:14

---

### Prettify

> **Prettify**\<`T`\> = `{ [K in keyof T]: T[K] }` & `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:51

#### Type Parameters

##### T

`T`

---

### Primitive

> **Primitive** = `string` \| `number` \| `symbol` \| `bigint` \| `boolean` \| `null` \| `undefined`

Defined in: node\_modules/zod/v4/core/util.d.cts:89

---

### PrimitiveArray

> **PrimitiveArray** = [`Primitive`](#primitive)[]

Defined in: node\_modules/zod/v4/core/util.d.cts:90

---

### PrimitiveSet

> **PrimitiveSet** = `Set`\<[`Primitive`](#primitive)\>

Defined in: node\_modules/zod/v4/core/util.d.cts:110

---

### PropValues

> **PropValues** = `Record`\<`string`, `Set`\<[`Primitive`](#primitive)\>\>

Defined in: node\_modules/zod/v4/core/util.d.cts:109

---

### SafeParseError

> **SafeParseError**\<`T`\> = `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:104

#### Type Parameters

##### T

`T`

#### Properties

##### data?

> `optional` **data**: `never`

Defined in: node\_modules/zod/v4/core/util.d.cts:106

##### error

> **error**: [`$ZodError`](core/index.md#zoderror)\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:107

##### success

> **success**: `false`

Defined in: node\_modules/zod/v4/core/util.d.cts:105

---

### SafeParseResult

> **SafeParseResult**\<`T`\> = [`SafeParseSuccess`](#safeparsesuccess)\<`T`\> \| [`SafeParseError`](#safeparseerror)\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:98

#### Type Parameters

##### T

`T`

---

### SafeParseSuccess

> **SafeParseSuccess**\<`T`\> = `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:99

#### Type Parameters

##### T

`T`

#### Properties

##### data

> **data**: `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:101

##### error?

> `optional` **error**: `never`

Defined in: node\_modules/zod/v4/core/util.d.cts:102

##### success

> **success**: `true`

Defined in: node\_modules/zod/v4/core/util.d.cts:100

---

### SchemaClass()

> **SchemaClass**\<`T`\> = (`def`) => `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:77

#### Type Parameters

##### T

`T` _extends_ [`SomeType`](core/index.md#sometype)

#### Parameters

##### def

`T`\[`"_zod"`\]\[`"def"`\]

#### Returns

`T`

---

### SomeObject

> **SomeObject** = `Record`\<`PropertyKey`, `any`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:43

---

### ToCleanMap

> **ToCleanMap**\<`T`\> = ``{ [k in keyof T]: k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k }``

Defined in: node\_modules/zod/v4/core/util.d.cts:162

#### Type Parameters

##### T

`T` _extends_ [`$ZodLooseShape`](core/index.md#zodlooseshape)

---

### ToEnum

> **ToEnum**\<`T`\> = [`Flatten`](#flatten)\<`{ [k in T]: k }`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:82

#### Type Parameters

##### T

`T` _extends_ [`EnumValue`](#enumvalue)

---

### TupleItems

> **TupleItems** = `ReadonlyArray`\<[`SomeType`](core/index.md#sometype)\>

Defined in: node\_modules/zod/v4/core/util.d.cts:65

---

### Whatever

> **Whatever** = \{ \} \| `undefined` \| `null`

Defined in: node\_modules/zod/v4/core/util.d.cts:25

---

### Writeable

> **Writeable**\<`T`\> = `{ -readonly [P in keyof T]: T[P] }` & `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:32

#### Type Parameters

##### T

`T`

## Variables

### allowsEval

> `const` **allowsEval**: `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:138

#### Type Declaration

##### value

> **value**: `boolean`

---

### BIGINT\_FORMAT\_RANGES

> `const` **BIGINT\_FORMAT\_RANGES**: `Record`\<[`$ZodBigIntFormats`](core/index.md#zodbigintformats), \[`bigint`, `bigint`\]\>

Defined in: node\_modules/zod/v4/core/util.d.cts:169

---

### captureStackTrace()

> `const` **captureStackTrace**: (`targetObject`, `constructorOpt?`) => `void`

Defined in: node\_modules/zod/v4/core/util.d.cts:136

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

---

### getParsedType()

> `const` **getParsedType**: (`data`) => [`ParsedTypes`](#parsedtypes)

Defined in: node\_modules/zod/v4/core/util.d.cts:144

#### Parameters

##### data

`any`

#### Returns

[`ParsedTypes`](#parsedtypes)

---

### NUMBER\_FORMAT\_RANGES

> `const` **NUMBER\_FORMAT\_RANGES**: `Record`\<[`$ZodNumberFormats`](core/index.md#zodnumberformats), \[`number`, `number`\]\>

Defined in: node\_modules/zod/v4/core/util.d.cts:168

---

### primitiveTypes

> `const` **primitiveTypes**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:146

---

### propertyKeyTypes

> `const` **propertyKeyTypes**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:145

## Functions

### aborted()

> **aborted**(`x`, `startIndex?`): `boolean`

Defined in: node\_modules/zod/v4/core/util.d.cts:178

#### Parameters

##### x

[`ParsePayload`](core/index.md#parsepayload)

##### startIndex?

`number`

#### Returns

`boolean`

---

### assert()

> **assert**\<`T`\>(`_`): `asserts _ is T`

Defined in: node\_modules/zod/v4/core/util.d.cts:115

#### Type Parameters

##### T

`T`

#### Parameters

##### \_

`any`

#### Returns

`asserts _ is T`

---

### assertEqual()

> **assertEqual**\<`A`, `B`\>(`val`): [`AssertEqual`](#assertequal)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:111

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### val

[`AssertEqual`](#assertequal)\<`A`, `B`\>

#### Returns

[`AssertEqual`](#assertequal)\<`A`, `B`\>

---

### assertIs()

> **assertIs**\<`T`\>(`_arg`): `void`

Defined in: node\_modules/zod/v4/core/util.d.cts:113

#### Type Parameters

##### T

`T`

#### Parameters

##### \_arg

`T`

#### Returns

`void`

---

### assertNever()

> **assertNever**(`_x`): `never`

Defined in: node\_modules/zod/v4/core/util.d.cts:114

#### Parameters

##### \_x

`never`

#### Returns

`never`

---

### assertNotEqual()

> **assertNotEqual**\<`A`, `B`\>(`val`): [`AssertNotEqual`](#assertnotequal)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:112

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### val

[`AssertNotEqual`](#assertnotequal)\<`A`, `B`\>

#### Returns

[`AssertNotEqual`](#assertnotequal)\<`A`, `B`\>

---

### assignProp()

> **assignProp**\<`T`, `K`\>(`target`, `prop`, `value`): `void`

Defined in: node\_modules/zod/v4/core/util.d.cts:127

#### Type Parameters

##### T

`T` _extends_ `object`

##### K

`K` _extends_ `PropertyKey`

#### Parameters

##### target

`T`

##### prop

`K`

##### value

`K` _extends_ keyof `T` ? `T`\[`K`\<`K`\>\] : `any`

#### Returns

`void`

---

### base64ToUint8Array()

> **base64ToUint8Array**(`base64`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:189

#### Parameters

##### base64

`string`

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

---

### base64urlToUint8Array()

> **base64urlToUint8Array**(`base64url`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:191

#### Parameters

##### base64url

`string`

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

---

### cached()

> **cached**\<`T`\>(`getter`): `object`

Defined in: node\_modules/zod/v4/core/util.d.cts:119

#### Type Parameters

##### T

`T`

#### Parameters

##### getter

() => `T`

#### Returns

`object`

##### value

> **value**: `T`

---

### cleanEnum()

> **cleanEnum**(`obj`): [`EnumValue`](#enumvalue)[]

Defined in: node\_modules/zod/v4/core/util.d.cts:188

#### Parameters

##### obj

`Record`\<`string`, [`EnumValue`](#enumvalue)\>

#### Returns

[`EnumValue`](#enumvalue)[]

---

### cleanRegex()

> **cleanRegex**(`source`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:123

#### Parameters

##### source

`string`

#### Returns

`string`

---

### cloneDef()

> **cloneDef**(`schema`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:129

#### Parameters

##### schema

[`$ZodType`](core/index.md#zodtype)

#### Returns

`any`

---

### createTransparentProxy()

> **createTransparentProxy**\<`T`\>(`getter`): `T`

Defined in: node\_modules/zod/v4/core/util.d.cts:158

#### Type Parameters

##### T

`T` _extends_ `object`

#### Parameters

##### getter

() => `T`

#### Returns

`T`

---

### defineLazy()

> **defineLazy**\<`T`, `K`\>(`object`, `key`, `getter`): `void`

Defined in: node\_modules/zod/v4/core/util.d.cts:125

#### Type Parameters

##### T

`T`

##### K

`K` _extends_ `string` \| `number` \| `symbol`

#### Parameters

##### object

`T`

##### key

`K`

##### getter

() => `T`\[`K`\]

#### Returns

`void`

---

### esc()

> **esc**(`str`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:135

#### Parameters

##### str

`string`

#### Returns

`string`

---

### escapeRegex()

> **escapeRegex**(`str`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:147

#### Parameters

##### str

`string`

#### Returns

`string`

---

### extend()

> **extend**(`schema`, `shape`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:172

#### Parameters

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### shape

[`$ZodShape`](core/index.md#zodshape)

#### Returns

`any`

---

### finalizeIssue()

> **finalizeIssue**(`iss`, `ctx`, `config`): [`$ZodIssue`](core/index.md#zodissue)

Defined in: node\_modules/zod/v4/core/util.d.cts:183

#### Parameters

##### iss

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \}

###### code

`"invalid_format"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### format

`string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats)

###### input

`string` \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### pattern?

`string`

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_type"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### expected

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_big"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

`boolean`

###### inclusive?

`boolean`

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

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

\{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_small"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

`boolean`

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

###### inclusive?

`boolean`

True if the allowable range includes the minimum

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

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

\{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"not_multiple_of"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### divisor

`number`

###### input

`number` \| `bigint` \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"unrecognized_keys"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`Record`\<`string`, `unknown`\> \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### keys

`string`[]

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_union"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### discriminator?

`string`

###### errors

[`$ZodIssue`](core/index.md#zodissue)[][]

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_key"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](core/index.md#zodissue)[]

###### message?

`string`

###### origin

`"record"` \| `"map"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_element"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](core/index.md#zodissue)[]

###### key

`unknown`

###### message?

`string`

###### origin

`"map"` \| `"set"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \}

###### code

`"invalid_value"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### values

[`Primitive`](#primitive)[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

###### code

`"custom"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

##### ctx

`ParseContextInternal`\<`never`\> | `undefined`

##### config

[`$ZodConfig`](core/index.md#zodconfig)

#### Returns

[`$ZodIssue`](core/index.md#zodissue)

---

### floatSafeRemainder()

> **floatSafeRemainder**(`val`, `step`): `number`

Defined in: node\_modules/zod/v4/core/util.d.cts:124

#### Parameters

##### val

`number`

##### step

`number`

#### Returns

`number`

---

### getElementAtPath()

> **getElementAtPath**(`obj`, `path`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:130

#### Parameters

##### obj

`any`

##### path

(`string` \| `number`)[] | `null` | `undefined`

#### Returns

`any`

---

### getEnumValues()

> **getEnumValues**(`entries`): [`EnumValue`](#enumvalue)[]

Defined in: node\_modules/zod/v4/core/util.d.cts:116

#### Parameters

##### entries

[`EnumLike`](#enumlike)

#### Returns

[`EnumValue`](#enumvalue)[]

---

### getLengthableOrigin()

> **getLengthableOrigin**(`input`): `"string"` \| `"unknown"` \| `"array"`

Defined in: node\_modules/zod/v4/core/util.d.cts:185

#### Parameters

##### input

`any`

#### Returns

`"string"` \| `"unknown"` \| `"array"`

---

### getSizableOrigin()

> **getSizableOrigin**(`input`): `"unknown"` \| `"file"` \| `"map"` \| `"set"`

Defined in: node\_modules/zod/v4/core/util.d.cts:184

#### Parameters

##### input

`any`

#### Returns

`"unknown"` \| `"file"` \| `"map"` \| `"set"`

---

### hexToUint8Array()

> **hexToUint8Array**(`hex`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:193

#### Parameters

##### hex

`string`

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

---

### isObject()

> **isObject**(`data`): `data is Record<PropertyKey, unknown>`

Defined in: node\_modules/zod/v4/core/util.d.cts:137

#### Parameters

##### data

`any`

#### Returns

`data is Record<PropertyKey, unknown>`

---

### isPlainObject()

> **isPlainObject**(`o`): `o is Record<PropertyKey, unknown>`

Defined in: node\_modules/zod/v4/core/util.d.cts:141

#### Parameters

##### o

`any`

#### Returns

`o is Record<PropertyKey, unknown>`

---

### issue()

#### Call Signature

> **issue**(`_iss`, `input`, `inst`): \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

Defined in: node\_modules/zod/v4/core/util.d.cts:186

##### Parameters

###### \_iss

`string`

###### input

`any`

###### inst

`any`

##### Returns

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_format"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### format

> `readonly` **format**: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats)

###### input

> `readonly` **input**: `string` \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

###### pattern?

> `readonly` `optional` **pattern**: `string`

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_type"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### expected

> `readonly` **expected**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"too_big"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

> `readonly` `optional` **exact**: `boolean`

###### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### maximum

> `readonly` **maximum**: `number` \| `bigint`

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"too_small"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

> `readonly` `optional` **exact**: `boolean`

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

###### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

True if the allowable range includes the minimum

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### minimum

> `readonly` **minimum**: `number` \| `bigint`

###### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"not_multiple_of"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### divisor

> `readonly` **divisor**: `number`

###### input

> `readonly` **input**: `number` \| `bigint` \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"unrecognized_keys"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `Record`\<`string`, `unknown`\> \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### keys

> `readonly` **keys**: `string`[]

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_union"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### discriminator?

> `readonly` `optional` **discriminator**: `string`

###### errors

> `readonly` **errors**: [`$ZodIssue`](core/index.md#zodissue)[][]

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_key"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

> `readonly` **issues**: [`$ZodIssue`](core/index.md#zodissue)[]

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"record"` \| `"map"`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_element"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

> `readonly` **issues**: [`$ZodIssue`](core/index.md#zodissue)[]

###### key

> `readonly` **key**: `unknown`

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"map"` \| `"set"`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_value"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

###### values

> `readonly` **values**: [`Primitive`](#primitive)[]

\{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"custom"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### params?

> `readonly` `optional` **params**: `Record`\<`string`, `any`\>

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

#### Call Signature

> **issue**(`_iss`): \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

Defined in: node\_modules/zod/v4/core/util.d.cts:187

##### Parameters

###### \_iss

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \}

###### code

`"invalid_format"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### format

`string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats)

###### input

`string` \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### pattern?

`string`

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_type"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### expected

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_big"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

`boolean`

###### inclusive?

`boolean`

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

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

\{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

###### code

`"too_small"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

`boolean`

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

###### inclusive?

`boolean`

True if the allowable range includes the minimum

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

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

\{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"not_multiple_of"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### divisor

`number`

###### input

`number` \| `bigint` \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"unrecognized_keys"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`Record`\<`string`, `unknown`\> \| `undefined`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### keys

`string`[]

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_union"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### discriminator?

`string`

###### errors

[`$ZodIssue`](core/index.md#zodissue)[][]

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_key"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](core/index.md#zodissue)[]

###### message?

`string`

###### origin

`"record"` \| `"map"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \}

###### code

`"invalid_element"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

[`$ZodIssue`](core/index.md#zodissue)[]

###### key

`unknown`

###### message?

`string`

###### origin

`"map"` \| `"set"`

###### path?

`PropertyKey`[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \}

###### code

`"invalid_value"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### path?

`PropertyKey`[]

###### values

[`Primitive`](#primitive)[]

|

\{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

###### code

`"custom"`

###### continue?

`boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

`unknown`

The input data

###### inst?

[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

`string`

###### params?

`Record`\<`string`, `any`\>

###### path?

`PropertyKey`[]

##### Returns

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_format"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### format

> `readonly` **format**: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats)

###### input

> `readonly` **input**: `string` \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

###### pattern?

> `readonly` `optional` **pattern**: `string`

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_type"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### expected

> `readonly` **expected**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"too_big"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

> `readonly` `optional` **exact**: `boolean`

###### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### maximum

> `readonly` **maximum**: `number` \| `bigint`

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"too_small"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### exact?

> `readonly` `optional` **exact**: `boolean`

True if the allowed value is fixed (e.g.`z.length(5)`), not a range (`z.minLength(5)`)

###### inclusive?

> `readonly` `optional` **inclusive**: `boolean`

True if the allowable range includes the minimum

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### minimum

> `readonly` **minimum**: `number` \| `bigint`

###### origin

> `readonly` **origin**: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"not_multiple_of"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### divisor

> `readonly` **divisor**: `number`

###### input

> `readonly` **input**: `number` \| `bigint` \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"unrecognized_keys"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `Record`\<`string`, `unknown`\> \| `undefined`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### keys

> `readonly` **keys**: `string`[]

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_union"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### discriminator?

> `readonly` `optional` **discriminator**: `string`

###### errors

> `readonly` **errors**: [`$ZodIssue`](core/index.md#zodissue)[][]

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_key"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

> `readonly` **issues**: [`$ZodIssue`](core/index.md#zodissue)[]

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"record"` \| `"map"`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_element"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### issues

> `readonly` **issues**: [`$ZodIssue`](core/index.md#zodissue)[]

###### key

> `readonly` **key**: `unknown`

###### message?

> `readonly` `optional` **message**: `string`

###### origin

> `readonly` **origin**: `"map"` \| `"set"`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"invalid_value"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

###### values

> `readonly` **values**: [`Primitive`](#primitive)[]

\{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \}

##### Index Signature

\[`key`: `string`\]: `unknown`

###### code

> `readonly` **code**: `"custom"`

###### continue?

> `readonly` `optional` **continue**: `boolean`

If `true`, Zod will continue executing checks/refinements after this issue.

###### input

> `readonly` **input**: `unknown`

The input data

###### inst?

> `readonly` `optional` **inst**: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>

The schema or check that originated this issue.

###### message?

> `readonly` `optional` **message**: `string`

###### params?

> `readonly` `optional` **params**: `Record`\<`string`, `any`\>

###### path?

> `readonly` `optional` **path**: `PropertyKey`[]

---

### joinValues()

> **joinValues**\<`T`\>(`array`, `separator?`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:117

#### Type Parameters

##### T

`T` _extends_ [`Primitive`](#primitive)[]

#### Parameters

##### array

`T`

##### separator?

`string`

#### Returns

`string`

---

### jsonStringifyReplacer()

> **jsonStringifyReplacer**(`_`, `value`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:118

#### Parameters

##### \_

`string`

##### value

`any`

#### Returns

`any`

---

### merge()

> **merge**(`a`, `b`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:174

#### Parameters

##### a

[`$ZodObject`](core/index.md#zodobject)

##### b

[`$ZodObject`](core/index.md#zodobject)

#### Returns

`any`

---

### mergeDefs()

> **mergeDefs**(...`defs`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:128

#### Parameters

##### defs

...`Record`\<`string`, `any`\>[]

#### Returns

`any`

---

### normalizeParams()

> **normalizeParams**\<`T`\>(`_params`): [`Normalize`](#normalize)\<`T`\>

Defined in: node\_modules/zod/v4/core/util.d.cts:157

#### Type Parameters

##### T

`T`

#### Parameters

##### \_params

`T`

#### Returns

[`Normalize`](#normalize)\<`T`\>

---

### nullish()

> **nullish**(`input`): `boolean`

Defined in: node\_modules/zod/v4/core/util.d.cts:122

#### Parameters

##### input

`any`

#### Returns

`boolean`

---

### numKeys()

> **numKeys**(`data`): `number`

Defined in: node\_modules/zod/v4/core/util.d.cts:143

#### Parameters

##### data

`any`

#### Returns

`number`

---

### objectClone()

> **objectClone**(`obj`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:126

#### Parameters

##### obj

`object`

#### Returns

`any`

---

### omit()

> **omit**(`schema`, `mask`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:171

#### Parameters

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### mask

`object`

#### Returns

`any`

---

### optionalKeys()

> **optionalKeys**(`shape`): `string`[]

Defined in: node\_modules/zod/v4/core/util.d.cts:160

#### Parameters

##### shape

[`$ZodShape`](core/index.md#zodshape)

#### Returns

`string`[]

---

### partial()

> **partial**(`Class`, `schema`, `mask`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:175

#### Parameters

##### Class

[`SchemaClass`](#schemaclass)\<[`$ZodOptional`](core/index.md#zodoptional)\<[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\> | `null`

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### mask

`object` | `undefined`

#### Returns

`any`

---

### pick()

> **pick**(`schema`, `mask`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:170

#### Parameters

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### mask

`Record`\<`string`, `unknown`\>

#### Returns

`any`

---

### prefixIssues()

> **prefixIssues**(`path`, `issues`): (\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \})[]

Defined in: node\_modules/zod/v4/core/util.d.cts:179

#### Parameters

##### path

`PropertyKey`

##### issues

(\{\[`key`: `string`\]: `unknown`; `code`: `"invalid_format"`; `continue?`: `boolean`; `format`: `string` & `object` \| [`$ZodStringFormats`](core/index.md#zodstringformats); `input`: `string` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `pattern?`: `string`; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_type"`; `continue?`: `boolean`; `expected`: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"int"` \| `"null"` \| `"void"` \| `"never"` \| `"any"` \| `"unknown"` \| `"date"` \| `"record"` \| `"file"` \| `"array"` \| `"tuple"` \| `"union"` \| `"intersection"` \| `"map"` \| `"set"` \| `"enum"` \| `"literal"` \| `"nullable"` \| `"optional"` \| `"nonoptional"` \| `"success"` \| `"transform"` \| `"default"` \| `"prefault"` \| `"catch"` \| `"nan"` \| `"pipe"` \| `"readonly"` \| `"template_literal"` \| `"promise"` \| `"lazy"` \| `"custom"`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_big"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `maximum`: `number` \| `bigint`; `message?`: `string`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"too_small"`; `continue?`: `boolean`; `exact?`: `boolean`; `inclusive?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `minimum`: `number` \| `bigint`; `origin`: `"string"` \| `"number"` \| `"bigint"` \| `"int"` \| `"date"` \| `"file"` \| `"array"` \| `"set"` \| `string` & `object`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"not_multiple_of"`; `continue?`: `boolean`; `divisor`: `number`; `input`: `number` \| `bigint` \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"unrecognized_keys"`; `continue?`: `boolean`; `input`: `Record`\<`string`, `unknown`\> \| `undefined`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `keys`: `string`[]; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_union"`; `continue?`: `boolean`; `discriminator?`: `string`; `errors`: [`$ZodIssue`](core/index.md#zodissue)[][]; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_key"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `message?`: `string`; `origin`: `"record"` \| `"map"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_element"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `issues`: [`$ZodIssue`](core/index.md#zodissue)[]; `key`: `unknown`; `message?`: `string`; `origin`: `"map"` \| `"set"`; `path?`: `PropertyKey`[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"invalid_value"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `path?`: `PropertyKey`[]; `values`: [`Primitive`](#primitive)[]; \} \| \{\[`key`: `string`\]: `unknown`; `code`: `"custom"`; `continue?`: `boolean`; `input`: `unknown`; `inst?`: [`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> \| [`$ZodCheck`](core/index.md#zodcheck)\<`never`\>; `message?`: `string`; `params?`: `Record`\<`string`, `any`\>; `path?`: `PropertyKey`[]; \})[]

#### Returns

---

### promiseAllObject()

> **promiseAllObject**\<`T`\>(`promisesObj`): `Promise`\<\{ \[k in string \| number \| symbol\]: Awaited\<T\[k\]\> \}\>

Defined in: node\_modules/zod/v4/core/util.d.cts:131

#### Type Parameters

##### T

`T` _extends_ `object`

#### Parameters

##### promisesObj

`T`

#### Returns

`Promise`\<\{ \[k in string \| number \| symbol\]: Awaited\<T\[k\]\> \}\>

---

### randomString()

> **randomString**(`length?`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:134

#### Parameters

##### length?

`number`

#### Returns

`string`

---

### required()

> **required**(`Class`, `schema`, `mask`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:176

#### Parameters

##### Class

[`SchemaClass`](#schemaclass)\<[`$ZodNonOptional`](core/index.md#zodnonoptional)\<[`$ZodType`](core/index.md#zodtype)\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>\>

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### mask

`object` | `undefined`

#### Returns

`any`

---

### safeExtend()

> **safeExtend**(`schema`, `shape`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:173

#### Parameters

##### schema

[`$ZodObject`](core/index.md#zodobject)

##### shape

[`$ZodShape`](core/index.md#zodshape)

#### Returns

`any`

---

### shallowClone()

> **shallowClone**(`o`): `any`

Defined in: node\_modules/zod/v4/core/util.d.cts:142

#### Parameters

##### o

`any`

#### Returns

`any`

---

### stringifyPrimitive()

> **stringifyPrimitive**(`value`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:159

#### Parameters

##### value

`any`

#### Returns

`string`

---

### uint8ArrayToBase64()

> **uint8ArrayToBase64**(`bytes`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:190

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`string`

---

### uint8ArrayToBase64url()

> **uint8ArrayToBase64url**(`bytes`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:192

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`string`

---

### uint8ArrayToHex()

> **uint8ArrayToHex**(`bytes`): `string`

Defined in: node\_modules/zod/v4/core/util.d.cts:194

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`string`

---

### unwrapMessage()

> **unwrapMessage**(`message`): `string` \| `undefined`

Defined in: node\_modules/zod/v4/core/util.d.cts:180

#### Parameters

##### message

`string` | \{ `message`: `string`; \} | `null` | `undefined`

#### Returns

`string` \| `undefined`

## References

### clone

Re-exports [clone](../index.md#clone-172)
