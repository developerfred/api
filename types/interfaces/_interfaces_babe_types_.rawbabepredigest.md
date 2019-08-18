> # Interface: RawBabePreDigest

Enum

## Hierarchy

  * [Enum](../classes/_codec_enum_.enum.md)

  * **RawBabePreDigest**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_babe_types_.rawbabepredigest.md#constructor)

### Properties

* [asPrimary](_interfaces_babe_types_.rawbabepredigest.md#asprimary)
* [asSecondary](_interfaces_babe_types_.rawbabepredigest.md#assecondary)
* [isPrimary](_interfaces_babe_types_.rawbabepredigest.md#isprimary)
* [isSecondary](_interfaces_babe_types_.rawbabepredigest.md#issecondary)

### Accessors

* [encodedLength](_interfaces_babe_types_.rawbabepredigest.md#encodedlength)
* [hash](_interfaces_babe_types_.rawbabepredigest.md#hash)
* [index](_interfaces_babe_types_.rawbabepredigest.md#index)
* [isEmpty](_interfaces_babe_types_.rawbabepredigest.md#isempty)
* [isNone](_interfaces_babe_types_.rawbabepredigest.md#isnone)
* [isNull](_interfaces_babe_types_.rawbabepredigest.md#isnull)
* [type](_interfaces_babe_types_.rawbabepredigest.md#type)
* [value](_interfaces_babe_types_.rawbabepredigest.md#value)

### Methods

* [eq](_interfaces_babe_types_.rawbabepredigest.md#eq)
* [toHex](_interfaces_babe_types_.rawbabepredigest.md#tohex)
* [toJSON](_interfaces_babe_types_.rawbabepredigest.md#tojson)
* [toNumber](_interfaces_babe_types_.rawbabepredigest.md#tonumber)
* [toRawType](_interfaces_babe_types_.rawbabepredigest.md#torawtype)
* [toString](_interfaces_babe_types_.rawbabepredigest.md#tostring)
* [toU8a](_interfaces_babe_types_.rawbabepredigest.md#tou8a)
* [with](_interfaces_babe_types_.rawbabepredigest.md#static-with)

## Constructors

###  constructor

\+ **new RawBabePreDigest**(`def`: `Record<string, InterfaceTypes | Constructor>` | string[], `value?`: any, `index?`: number | [Enum](../classes/_codec_enum_.enum.md)): *[RawBabePreDigest](_interfaces_babe_types_.rawbabepredigest.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:62](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |
`value?` | any |
`index?` | number \| [Enum](../classes/_codec_enum_.enum.md) |

**Returns:** *[RawBabePreDigest](_interfaces_babe_types_.rawbabepredigest.md)*

## Properties

###  asPrimary

• **asPrimary**: *[RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)*

*Defined in [interfaces/babe/types.ts:21](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/interfaces/babe/types.ts#L21)*

RawBabePreDigestPrimary

___

###  asSecondary

• **asSecondary**: *[RawBabePreDigestSecondary](_interfaces_babe_types_.rawbabepredigestsecondary.md)*

*Defined in [interfaces/babe/types.ts:25](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/interfaces/babe/types.ts#L25)*

RawBabePreDigestSecondary

___

###  isPrimary

• **isPrimary**: *boolean*

*Defined in [interfaces/babe/types.ts:19](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/interfaces/babe/types.ts#L19)*

0:: Primary(RawBabePreDigestPrimary)

___

###  isSecondary

• **isSecondary**: *boolean*

*Defined in [interfaces/babe/types.ts:23](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/interfaces/babe/types.ts#L23)*

1:: Secondary(RawBabePreDigestSecondary)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:171](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:178](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L178)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:185](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L185)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:192](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L192)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:199](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L199)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:206](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:213](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L213)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:228](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:235](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L235)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:244](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:251](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:262](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:272](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L272)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:135](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/Enum.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*