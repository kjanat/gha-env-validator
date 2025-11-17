[**@kjanat/gha-env-validator**](../../../../index.md)

---

[@kjanat/gha-env-validator](../../../../index.md) / [z](../index.md) / iso

# iso

## Functions

### date()

> **date**(`params?`): [`ZodISODate`](../index.md#zodisodate)

Defined in: node\_modules/zod/v4/classic/iso.d.cts:12

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>; `message?`: `string`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

#### Returns

[`ZodISODate`](../index.md#zodisodate)

---

### datetime()

> **datetime**(`params?`): [`ZodISODateTime`](../index.md#zodisodatetime)

Defined in: node\_modules/zod/v4/classic/iso.d.cts:7

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>; `local?`: `boolean`; `message?`: `string`; `offset?`: `boolean`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>

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

[`ZodISODateTime`](../index.md#zodisodatetime)

---

### duration()

> **duration**(`params?`): [`ZodISODuration`](../index.md#zodisoduration)

Defined in: node\_modules/zod/v4/classic/iso.d.cts:22

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>; `message?`: `string`; `pattern?`: `RegExp`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### pattern?

`RegExp`

#### Returns

[`ZodISODuration`](../index.md#zodisoduration)

---

### time()

> **time**(`params?`): [`ZodISOTime`](../index.md#zodisotime)

Defined in: node\_modules/zod/v4/classic/iso.d.cts:17

#### Parameters

##### params?

`string` |

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>; `message?`: `string`; `precision?`: `number` \| `null`; \}

###### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

###### error?

`string` \| [`$ZodErrorMap`](core/index.md#zoderrormap)\<`NonNullable`\<[`$ZodIssueInvalidType`](core/index.md#zodissueinvalidtype)\<`unknown`\> \| [`$ZodIssueInvalidStringFormat`](core/index.md#zodissueinvalidstringformat)\>\>

###### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

###### precision?

`number` \| `null`

#### Returns

[`ZodISOTime`](../index.md#zodisotime)

## References

### ZodISODate

Re-exports [ZodISODate](../index.md#zodisodate-1)

---

### ZodISODateTime

Re-exports [ZodISODateTime](../index.md#zodisodatetime-1)

---

### ZodISODuration

Re-exports [ZodISODuration](../index.md#zodisoduration-1)

---

### ZodISOTime

Re-exports [ZodISOTime](../index.md#zodisotime-1)
