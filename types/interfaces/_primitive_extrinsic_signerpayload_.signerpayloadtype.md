**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

# Interface: SignerPayloadType

## Hierarchy

* [Codec](_types_.codec.md)

  * **SignerPayloadType**

  * [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)
* [era](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)
* [isEmpty](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)
* [method](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [runtimeVersion](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)
* [tip](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)
* [version](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)

### Methods

* [eq](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)
* [toHex](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)
* [toJSON](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tojson)
* [toRawType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)
* [toString](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)
* [toU8a](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)

## Properties

###  address

• **address**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *[BlockNumber](../modules/_interfaces_runtime_types_.md#blocknumber)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](../classes/_primitive_generic_call_.call.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](../modules/_interfaces_runtime_types_.md#index)›*

*Defined in [primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  runtimeVersion

• **runtimeVersion**: *[RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](../modules/_interfaces_runtime_types_.md#balance)›*

*Defined in [primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](_interfaceregistry_.interfaceregistry.md#u8)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L96)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*