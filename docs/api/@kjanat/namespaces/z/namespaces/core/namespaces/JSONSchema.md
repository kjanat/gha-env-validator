[**@kjanat/gha-env-validator**](../../../../../../index.md)

---

[@kjanat/gha-env-validator](../../../../../../index.md) / [z](../../../index.md) / [core](../index.md) / JSONSchema

# JSONSchema

## Interfaces

### ArraySchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:71

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"array"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:72

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### BooleanSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:83

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"boolean"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:84

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### IntegerSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:80

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"integer"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:81

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### NullSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:86

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"null"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:87

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### NumberSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:77

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"number"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:78

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### ObjectSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:68

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"object"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:69

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

---

### StringSchema

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:74

#### Extends

- [`JSONSchema`](#jsonschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

###### Inherited from

`JSONSchema._prefault`

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

###### Inherited from

`JSONSchema.$anchor`

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

###### Inherited from

`JSONSchema.$comment`

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

###### Inherited from

`JSONSchema.$defs`

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

###### Inherited from

`JSONSchema.$dynamicAnchor`

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

###### Inherited from

`JSONSchema.$dynamicRef`

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

###### Inherited from

`JSONSchema.$id`

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

###### Inherited from

`JSONSchema.$ref`

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

###### Inherited from

`JSONSchema.$schema`

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

###### Inherited from

`JSONSchema.$vocabulary`

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

###### Inherited from

`JSONSchema.additionalItems`

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

###### Inherited from

`JSONSchema.additionalProperties`

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

###### Inherited from

`JSONSchema.allOf`

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

###### Inherited from

`JSONSchema.anyOf`

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

###### Inherited from

`JSONSchema.const`

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

###### Inherited from

`JSONSchema.contains`

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

###### Inherited from

`JSONSchema.contentEncoding`

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

###### Inherited from

`JSONSchema.contentMediaType`

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

###### Inherited from

`JSONSchema.contentSchema`

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

###### Inherited from

`JSONSchema.default`

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

###### Inherited from

`JSONSchema.dependentRequired`

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

###### Inherited from

`JSONSchema.dependentSchemas`

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

###### Inherited from

`JSONSchema.deprecated`

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

###### Inherited from

`JSONSchema.description`

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

###### Inherited from

`JSONSchema.else`

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

###### Inherited from

`JSONSchema.enum`

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

###### Inherited from

`JSONSchema.examples`

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

###### Inherited from

`JSONSchema.exclusiveMaximum`

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

###### Inherited from

`JSONSchema.exclusiveMinimum`

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

###### Inherited from

`JSONSchema.format`

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

###### Inherited from

`JSONSchema.id`

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

###### Inherited from

`JSONSchema.if`

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

###### Inherited from

`JSONSchema.items`

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

###### Inherited from

`JSONSchema.maxContains`

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

###### Inherited from

`JSONSchema.maximum`

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

###### Inherited from

`JSONSchema.maxItems`

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

###### Inherited from

`JSONSchema.maxLength`

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

###### Inherited from

`JSONSchema.maxProperties`

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

###### Inherited from

`JSONSchema.minContains`

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

###### Inherited from

`JSONSchema.minimum`

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

###### Inherited from

`JSONSchema.minItems`

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

###### Inherited from

`JSONSchema.minLength`

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

###### Inherited from

`JSONSchema.minProperties`

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

###### Inherited from

`JSONSchema.multipleOf`

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

###### Inherited from

`JSONSchema.not`

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

###### Inherited from

`JSONSchema.nullable`

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

###### Inherited from

`JSONSchema.oneOf`

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

###### Inherited from

`JSONSchema.pattern`

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

###### Inherited from

`JSONSchema.patternProperties`

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

###### Inherited from

`JSONSchema.prefixItems`

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

###### Inherited from

`JSONSchema.properties`

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

###### Inherited from

`JSONSchema.propertyNames`

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

###### Inherited from

`JSONSchema.readOnly`

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

###### Inherited from

`JSONSchema.required`

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

###### Inherited from

`JSONSchema.then`

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

###### Inherited from

`JSONSchema.title`

##### type

> **type**: `"string"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:75

###### Overrides

`JSONSchema.type`

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

###### Inherited from

`JSONSchema.unevaluatedItems`

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

###### Inherited from

`JSONSchema.unevaluatedProperties`

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

###### Inherited from

`JSONSchema.uniqueItems`

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

###### Inherited from

`JSONSchema.writeOnly`

## Type Aliases

### \_JSONSchema

> **\_JSONSchema** = `boolean` \| [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:2

---

### BaseSchema

> **BaseSchema** = [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:67

---

### JSONSchema

> **JSONSchema** = `object`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:3

#### Extended by

- [`ObjectSchema`](#objectschema)
- [`ArraySchema`](#arrayschema)
- [`StringSchema`](#stringschema)
- [`NumberSchema`](#numberschema)
- [`IntegerSchema`](#integerschema)
- [`BooleanSchema`](#booleanschema)
- [`NullSchema`](#nullschema)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### \_prefault?

> `optional` **\_prefault**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:65

##### $anchor?

> `optional` **$anchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:7

##### $comment?

> `optional` **$comment**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:12

##### $defs?

> `optional` **$defs**: `Record`\<`string`, [`JSONSchema`](#jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:13

##### $dynamicAnchor?

> `optional` **$dynamicAnchor**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:10

##### $dynamicRef?

> `optional` **$dynamicRef**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:9

##### $id?

> `optional` **$id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:6

##### $ref?

> `optional` **$ref**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:8

##### $schema?

> `optional` **$schema**: `"https://json-schema.org/draft/2020-12/schema"` \| `"http://json-schema.org/draft-07/schema#"` \| `"http://json-schema.org/draft-04/schema#"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:5

##### $vocabulary?

> `optional` **$vocabulary**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:11

##### additionalItems?

> `optional` **additionalItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:15

##### additionalProperties?

> `optional` **additionalProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:20

##### allOf?

> `optional` **allOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:29

##### anyOf?

> `optional` **anyOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:30

##### const?

> `optional` **const**: `string` \| `number` \| `boolean` \| `null`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:51

##### contains?

> `optional` **contains**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:19

##### contentEncoding?

> `optional` **contentEncoding**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:63

##### contentMediaType?

> `optional` **contentMediaType**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:62

##### contentSchema?

> `optional` **contentSchema**: [`JSONSchema`](#jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:64

##### default?

> `optional` **default**: `unknown`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:55

##### dependentRequired?

> `optional` **dependentRequired**: `Record`\<`string`, `string`[]\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:49

##### dependentSchemas?

> `optional` **dependentSchemas**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:24

##### deprecated?

> `optional` **deprecated**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:56

##### description?

> `optional` **description**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:54

##### else?

> `optional` **else**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:28

##### enum?

> `optional` **enum**: (`string` \| `number` \| `boolean` \| `null`)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:50

##### examples?

> `optional` **examples**: `unknown`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:60

##### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:35

##### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:37

##### format?

> `optional` **format**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:61

##### id?

> `optional` **id**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:52

##### if?

> `optional` **if**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:26

##### items?

> `optional` **items**: [`_JSONSchema`](#_jsonschema) \| [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:18

##### maxContains?

> `optional` **maxContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:44

##### maximum?

> `optional` **maximum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:34

##### maxItems?

> `optional` **maxItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:41

##### maxLength?

> `optional` **maxLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:38

##### maxProperties?

> `optional` **maxProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:46

##### minContains?

> `optional` **minContains**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:45

##### minimum?

> `optional` **minimum**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:36

##### minItems?

> `optional` **minItems**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:42

##### minLength?

> `optional` **minLength**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:39

##### minProperties?

> `optional` **minProperties**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:47

##### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:33

##### not?

> `optional` **not**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:32

##### nullable?

> `optional` **nullable**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:59

##### oneOf?

> `optional` **oneOf**: [`JSONSchema`](#jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:31

##### pattern?

> `optional` **pattern**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:40

##### patternProperties?

> `optional` **patternProperties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:23

##### prefixItems?

> `optional` **prefixItems**: [`_JSONSchema`](#_jsonschema)[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:17

##### properties?

> `optional` **properties**: `Record`\<`string`, [`_JSONSchema`](#_jsonschema)\>

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:22

##### propertyNames?

> `optional` **propertyNames**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:25

##### readOnly?

> `optional` **readOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:57

##### required?

> `optional` **required**: `string`[]

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:48

##### then?

> `optional` **then**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:27

##### title?

> `optional` **title**: `string`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:53

##### type?

> `optional` **type**: `"object"` \| `"array"` \| `"string"` \| `"number"` \| `"boolean"` \| `"null"` \| `"integer"`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:14

##### unevaluatedItems?

> `optional` **unevaluatedItems**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:16

##### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`_JSONSchema`](#_jsonschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:21

##### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:43

##### writeOnly?

> `optional` **writeOnly**: `boolean`

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:58

---

### Schema

> **Schema** = [`ObjectSchema`](#objectschema) \| [`ArraySchema`](#arrayschema) \| [`StringSchema`](#stringschema) \| [`NumberSchema`](#numberschema) \| [`IntegerSchema`](#integerschema) \| [`BooleanSchema`](#booleanschema) \| [`NullSchema`](#nullschema)

Defined in: node\_modules/zod/v4/core/json-schema.d.cts:1
