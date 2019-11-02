[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/txpayment/types"](../modules/_interfaces_txpayment_types_.md) › [Multiplier](_interfaces_txpayment_types_.multiplier.md)

# Interface: Multiplier

Fixed64

## Hierarchy

  ↳ [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)

  ↳ **Multiplier**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_txpayment_types_.multiplier.md#constructor)

### Methods

* [toHex](_interfaces_txpayment_types_.multiplier.md#tohex)
* [toRawType](_interfaces_txpayment_types_.multiplier.md#torawtype)
* [toU8a](_interfaces_txpayment_types_.multiplier.md#tou8a)

## Constructors

###  constructor

\+ **new Multiplier**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[Multiplier](_interfaces_txpayment_types_.multiplier.md)*

*Inherited from [I64](../classes/_primitive_i64_.i64.md).[constructor](../classes/_primitive_i64_.i64.md#constructor)*

*Overrides [Int](../classes/_codec_int_.int.md).[constructor](../classes/_codec_int_.int.md#constructor)*

*Defined in [primitive/I64.ts:14](https://github.com/polkadot-js/api/blob/7cc961f789/packages/types/src/primitive/I64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Multiplier](_interfaces_txpayment_types_.multiplier.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toHex](../classes/_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/7cc961f789/packages/types/src/codec/Int.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toRawType](../classes/_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/7cc961f789/packages/types/src/codec/Int.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Int](../classes/_codec_int_.int.md).[toU8a](../classes/_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [codec/Int.ts:56](https://github.com/polkadot-js/api/blob/7cc961f789/packages/types/src/codec/Int.ts#L56)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*