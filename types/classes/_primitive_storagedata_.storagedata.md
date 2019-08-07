> # Class: StorageData

**`name`** StorageData

**`description`** 
Data retrieved via Storage queries and data for key-value pairs

## Hierarchy

  * [Bytes](_primitive_bytes_.bytes.md)

  * **StorageData**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_storagedata_.storagedata.md#constructor)

### Accessors

* [encodedLength](_primitive_storagedata_.storagedata.md#encodedlength)
* [hash](_primitive_storagedata_.storagedata.md#hash)
* [isEmpty](_primitive_storagedata_.storagedata.md#isempty)
* [length](_primitive_storagedata_.storagedata.md#length)

### Methods

* [bitLength](_primitive_storagedata_.storagedata.md#bitlength)
* [eq](_primitive_storagedata_.storagedata.md#eq)
* [subarray](_primitive_storagedata_.storagedata.md#subarray)
* [toHex](_primitive_storagedata_.storagedata.md#tohex)
* [toJSON](_primitive_storagedata_.storagedata.md#tojson)
* [toRawType](_primitive_storagedata_.storagedata.md#torawtype)
* [toString](_primitive_storagedata_.storagedata.md#tostring)
* [toU8a](_primitive_storagedata_.storagedata.md#tou8a)

## Constructors

###  constructor

\+ **new StorageData**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[StorageData](_primitive_storagedata_.storagedata.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [primitive/Bytes.ts:20](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[StorageData](_primitive_storagedata_.storagedata.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [primitive/Bytes.ts:65](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L65)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:88](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L88)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:95](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:102](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [primitive/Bytes.ts:72](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L72)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:116](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [primitive/Bytes.ts:80](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L80)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*