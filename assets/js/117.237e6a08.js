(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{314:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("router-link",{attrs:{to:"/api-derive/"}},[a._v("Polkadot JS API")]),a._v(" › "),e("router-link",{attrs:{to:"/api-derive/globals.html"}},[a._v("Globals")]),a._v(" › "),e("router-link",{attrs:{to:"/api-derive/modules/_elections_approvalsof_.html"}},[a._v('"elections/approvalsOf"')])],1),a._v(" "),e("h1",{attrs:{id:"external-module-elections-approvalsof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-module-elections-approvalsof"}},[a._v("#")]),a._v(' External module: "elections/approvalsOf"')]),a._v(" "),e("h2",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[a._v("#")]),a._v(" Index")]),a._v(" "),e("h3",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[a._v("#")]),a._v(" Variables")]),a._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/api-derive/modules/_elections_approvalsof_.html#const-approvalsof"}},[a._v("approvalsOf")])],1)]),a._v(" "),e("h2",{attrs:{id:"variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[a._v("#")]),a._v(" Variables")]),a._v(" "),e("h3",{attrs:{id:"const-approvalsof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#const-approvalsof"}},[a._v("#")]),a._v(" "),e("code",[a._v("Const")]),a._v(" approvalsOf")]),a._v(" "),e("p",[a._v("• "),e("strong",[a._v("approvalsOf")]),a._v(": "),e("em",[a._v("(Anonymous function)")]),a._v(" =  memo((api: ApiInterfaceRx): (who: AccountId) => Observable<boolean[][]> => {\nreturn memo((who: AccountId | string): Observable<boolean[][]> =>\napi.query.elections.nextVoterSet"),e("SetIndex",[a._v("().pipe(\nswitchMap((nextVoterSet: SetIndex): Observable<Vec"),e("ApprovalFlag",[a._v("[]> =>\napi.query.elections.approvalsOf.multi(\n[...Array(nextVoterSet.toNumber() + 1).keys()].map((i): [string, number] => [\nwho.toString(), i]\n)\n) as any as Observable<Vec"),e("ApprovalFlag",[a._v("[]>\n),\nmap((votes: Vec"),e("ApprovalFlag",[a._v("[]): boolean[][] =>\nvotes.map((flags: Vec"),e("ApprovalFlag",[a._v("): boolean[] =>\napprovalFlagsToBools(flags)\n)\n),\ndrr()\n)\n);\n}, true)")])],1)],1)],1)],1)],1),a._v(" "),e("p",[e("em",[a._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/elections/approvalsOf.ts#L26",target:"_blank",rel:"noopener noreferrer"}},[a._v("elections/approvalsOf.ts:26"),e("OutboundLink")],1)])]),a._v(" "),e("p",[e("strong",[e("code",[a._v("name")])]),a._v(" approvalsOf")]),a._v(" "),e("p",[e("strong",[e("code",[a._v("returns")])]),a._v(" A nested array of boolean approvals for the given account in each voter set index, converted from its ApprovalFlag(s).")]),a._v(" "),e("p",[e("strong",[e("code",[a._v("example")])]),a._v(" "),e("BR")],1),a._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("derive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("elections"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("approvalsOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ALICE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("approvals")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// approvals === [[false], [true, false], ...]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);