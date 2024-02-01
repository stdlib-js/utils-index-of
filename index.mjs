// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function n(n,m,d){var l,a;if(!t(n)&&!r(n))throw new TypeError(i("invalid argument. First argument must be an array-like object. Value: `%s`.",n));if(0===(l=n.length))return-1;if(3===arguments.length){if(!s(d))throw new TypeError(i("invalid argument. Third argument must be an integer. Value: `%s`.",d));if(d>=0){if(d>=l)return-1;a=d}else(a=l+d)<0&&(a=0)}else a=0;if(e(m)){for(;a<l;a++)if(e(n[a]))return a}else for(;a<l;a++)if(n[a]===m)return a;return-1}export{n as default};
//# sourceMappingURL=index.mjs.map
