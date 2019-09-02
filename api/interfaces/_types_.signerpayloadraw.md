> # Interface: SignerPayloadRaw

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

*Defined in [types.ts:285](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/types.ts#L285)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[data](_types_.signerpayloadrawbase.md#data)*

*Defined in [types.ts:273](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/types.ts#L273)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[type](_types_.signerpayloadrawbase.md#optional-type)*

*Defined in [types.ts:290](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/types.ts#L290)*

**`description`** The type of the contained data