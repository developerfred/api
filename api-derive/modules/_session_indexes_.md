[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["session/indexes"](_session_indexes_.md)

# External module: "session/indexes"

## Index

### Variables

* [indexes](_session_indexes_.md#const-indexes)

## Variables

### `Const` indexes

• **indexes**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes> => {
  return (): Observable<DeriveSessionIndexes> =>
    api.queryMulti<[SessionIndex, EraIndex, u32]>([
      api.query.session.currentIndex,
      api.query.staking.currentEra,
      api.query.staking.validatorCount
    ]).pipe(
      map(([currentIndex, currentEra, validatorCount]): DeriveSessionIndexes => ({
        currentIndex, currentEra, validatorCount
      })),
      drr()
    );
}, true)

*Defined in [session/indexes.ts:15](https://github.com/polkadot-js/api/blob/cba5710fec/packages/api-derive/src/session/indexes.ts#L15)*
