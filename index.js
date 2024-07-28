// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,p,"e+0$1"),i=f.call(i,g,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,u,f,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if("string"==typeof(i=e[u]))s+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),s+=i.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,i,n;for(t=[],n=0,i=k.exec(e);i;)(r=e.slice(n,k.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=k.lastIndex,i=k.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var V=Object.prototype,F=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,R=V.__lookupGetter__,A=V.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||A.call(e,r)?(i=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&$&&$.call(e,r,t.set),e};function N(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return U&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,L=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"",X=Z()?function(e){var r,t,i,n,a;if(null==e)return W.call(e);t=e[M],a=M,r=null!=(n=e)&&L.call(n,a);try{e[M]=void 0}catch(r){return W.call(e)}return i=W.call(e),r?e[M]=t:delete e[M],i}:function(e){return W.call(e)},Y=Number,q=Y.prototype.toString,B=Z();function D(e){return"object"==typeof e&&(e instanceof Y||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return G(e)||D(e)}function J(e){return e!=e}function K(e){return G(e)&&J(e)}function Q(e){return D(e)&&J(e.valueOf())}function ee(e){return K(e)||Q(e)}N(H,"isPrimitive",G),N(H,"isObject",D),N(ee,"isPrimitive",K),N(ee,"isObject",Q);var re=Math.floor;function te(e){return re(e)===e}var ie=9007199254740991;function ne(e){return"string"==typeof e}var ae=String.prototype.valueOf,oe=Z();function ce(e){return"object"==typeof e&&(e instanceof String||(oe?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function se(e){return ne(e)||ce(e)}N(se,"isPrimitive",ne),N(se,"isObject",ce);var le=Number.POSITIVE_INFINITY,ue=Y.NEGATIVE_INFINITY;function fe(e){return e<le&&e>ue&&te(e)}function pe(e){return G(e)&&fe(e)}function ge(e){return D(e)&&fe(e.valueOf())}function de(e){return pe(e)||ge(e)}function he(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return N(de,"isPrimitive",pe),N(de,"isObject",ge),function(e,r,t){var i,n,a;if(!("object"==typeof(a=e)&&null!==a&&"number"==typeof a.length&&te(a.length)&&a.length>=0&&a.length<=ie||ne(e)))throw new TypeError(he("1UR2O",e));if(0===(i=e.length))return-1;if(3===arguments.length){if(!pe(t))throw new TypeError(he("1UR2z",t));if(t>=0){if(t>=i)return-1;n=t}else(n=i+t)<0&&(n=0)}else n=0;if(ee(r)){for(;n<i;n++)if(ee(e[n]))return n}else for(;n<i;n++)if(e[n]===r)return n;return-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).indexOf=r();
//# sourceMappingURL=index.js.map