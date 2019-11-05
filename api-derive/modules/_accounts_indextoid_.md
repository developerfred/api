[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/indexToId"](_accounts_indextoid_.md)

# External module: "accounts/indexToId"

## Index

### Variables

* [indexToId](_accounts_indextoid_.md#const-indextoid)

## Variables

### `Const` indexToId

• **indexToId**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> => {
  const querySection = api.query.indices || api.query.balances;

  return (_accountIndex: AccountIndex | string): Observable<AccountId | undefined> => {
    const accountIndex = _accountIndex instanceof ClassOf('AccountIndex')
      ? _accountIndex
      : createType('AccountIndex', _accountIndex);

    return querySection.enumSet<Vec<AccountId>>(accountIndex.div(ENUMSET_SIZE)).pipe(
      startWith([]),
      map((accounts): AccountId | undefined =>
        (accounts || [])[accountIndex.mod(ENUMSET_SIZE).toNumber()]
      ),
      drr()
    );
  };
}, true)

*Defined in [accounts/indexToId.ts:28](https://github.com/polkadot-js/api/blob/cba5710fec/packages/api-derive/src/accounts/indexToId.ts#L28)*

**`name`** indexToId

**`param`** An accounts index in different formats.

**`returns`** Returns the corresponding AccountId.

**`example`** 
<BR>

```javascript
api.derive.accounts.indexToId('F7Hs', (accountId) => {
  console.log(`The AccountId of F7Hs is ${accountId}`);
});
```
