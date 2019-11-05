[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["session/sessionProgress"](_session_sessionprogress_.md)

# External module: "session/sessionProgress"

## Index

### Variables

* [sessionProgress](_session_sessionprogress_.md#const-sessionprogress)

## Variables

### `Const` sessionProgress

• **sessionProgress**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  const infoCall = info(api);

  return (): Observable<BlockNumber> =>
    infoCall().pipe(
      map(({ sessionProgress }): BlockNumber => sessionProgress),
      drr()
    );
}, true)

*Defined in [session/sessionProgress.ts:14](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/session/sessionProgress.ts#L14)*
