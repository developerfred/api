**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › ["types"](../modules/_types_.md) › [SignerPayloadRaw](_types_.signerpayloadraw.md)

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_.signerpayloadrawbase.md)

  * **SignerPayloadRaw**

## Index

### Properties

* [address](_types_.signerpayloadraw.md#address)
* [data](_types_.signerpayloadraw.md#data)
* [type](_types_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:288](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L288)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[data](_types_.signerpayloadrawbase.md#data)*

*Defined in [types.ts:276](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L276)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[type](_types_.signerpayloadrawbase.md#optional-type)*

*Defined in [types.ts:293](https://github.com/polkadot-js/api/blob/bdd0cb9/packages/types/src/types.ts#L293)*

**`description`** The type of the contained data