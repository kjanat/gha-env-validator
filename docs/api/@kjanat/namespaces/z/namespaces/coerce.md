[**@kjanat/gha-env-validator**](../../../../index.md)

---

[@kjanat/gha-env-validator](../../../../index.md) / [z](../index.md) / coerce

# coerce

## Functions

### bigint()

> **bigint**\<`T`\>(`params?`): [`ZodCoercedBigInt`](../index.md#zodcoercedbigint)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:14

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### params?

`string` |

\{ `coerce?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### coerce?

`boolean`

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodCoercedBigInt`](../index.md#zodcoercedbigint)\<`T`\>

---

### boolean()

> **boolean**\<`T`\>(`params?`): [`ZodCoercedBoolean`](../index.md#zodcoercedboolean)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:11

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodCoercedBoolean`](../index.md#zodcoercedboolean)\<`T`\>

---

### date()

> **date**\<`T`\>(`params?`): [`ZodCoercedDate`](../index.md#zodcoerceddate)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:17

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodCoercedDate`](../index.md#zodcoerceddate)\<`T`\>

---

### number()

> **number**\<`T`\>(`params?`): [`ZodCoercedNumber`](../index.md#zodcoercednumber)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:8

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodCoercedNumber`](../index.md#zodcoercednumber)\<`T`\>

---

### string()

> **string**\<`T`\>(`params?`): [`ZodCoercedString`](../index.md#zodcoercedstring)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:5

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### params?

`string` |

\{ `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>; `message?`: `string`; \}

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodCoercedString`](../index.md#zodcoercedstring)\<`T`\>

## References

### ZodCoercedBigInt

Re-exports [ZodCoercedBigInt](../index.md#zodcoercedbigint)

---

### ZodCoercedBoolean

Re-exports [ZodCoercedBoolean](../index.md#zodcoercedboolean)

---

### ZodCoercedDate

Re-exports [ZodCoercedDate](../index.md#zodcoerceddate)

---

### ZodCoercedNumber

Re-exports [ZodCoercedNumber](../index.md#zodcoercednumber)

---

### ZodCoercedString

Re-exports [ZodCoercedString](../index.md#zodcoercedstring)
