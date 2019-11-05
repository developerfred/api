[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["session/eraLength"](_session_eralength_.md)

# External module: "session/eraLength"

## Index

### Variables

* [eraLength](_session_eralength_.md#const-eralength)

## Variables

### `Const` eraLength

• **eraLength**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  const infoCall = info(api);

  return (): Observable<BlockNumber> =>
    infoCall().pipe(
      map(({ eraLength }): BlockNumber => eraLength),
      drr()
    );
}, true)

*Defined in [session/eraLength.ts:14](https://github.com/polkadot-js/api/blob/cba5710fec/packages/api-derive/src/session/eraLength.ts#L14)*
