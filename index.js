// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,_=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,a,o,p,l,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,n;for(i=[],n=0,t=V.exec(e);t;)(r=e.slice(n,V.lastIndex-t[0].length)).length&&i.push(r),i.push(j(t)),n=V.lastIndex,t=V.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $(e){return"string"==typeof e}function O(e){var r,i;if(!$(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var A=Object.prototype,C=A.toString,N=A.__defineGetter__,P=A.__defineSetter__,R=A.__lookupGetter__,Z=A.__lookupSetter__,W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===C.call(i))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(R.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=A,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,i.get),o&&P&&P.call(e,r,i.set),e};function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",B=X()?function(e){var r,i,t,n,a;if(null==e)return M.call(e);i=e[q],a=q,r=null!=(n=e)&&z.call(n,a);try{e[q]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[q]=i:delete e[q],t}:function(e){return M.call(e)},D=Number,H=D.prototype.toString,J=X();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return L(e)||K(e)}function ee(e){return e!=e}function re(e){return L(e)&&ee(e)}function ie(e){return K(e)&&ee(e.valueOf())}function te(e){return re(e)||ie(e)}G(Q,"isPrimitive",L),G(Q,"isObject",K),G(te,"isPrimitive",re),G(te,"isObject",ie);var ne=Math.floor;function ae(e){return ne(e)===e}function oe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ae(e.length)&&e.length>=0&&e.length<=9007199254740991}function ce(e){return"string"==typeof e}var se=String.prototype.valueOf,pe=X();function le(e){return"object"==typeof e&&(e instanceof String||(pe?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object String]"===B(e)))}function ue(e){return ce(e)||le(e)}G(ue,"isPrimitive",ce),G(ue,"isObject",le);var fe=Number.POSITIVE_INFINITY,ge=D.NEGATIVE_INFINITY;function de(e){return e<fe&&e>ge&&ae(e)}function he(e){return L(e)&&de(e)}function be(e){return K(e)&&de(e.valueOf())}function we(e){return he(e)||be(e)}function ve(e){return"number"==typeof e}function ye(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function me(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ye(n):ye(n)+e,t&&(e="-"+e)),e}G(we,"isPrimitive",he),G(we,"isObject",be);var Ee=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function ke(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ve(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=me(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=me(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===xe.call(e.specifier)?xe.call(i):Ee.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Se(e){return"string"==typeof e}var _e=Math.abs,Ie=String.prototype.toLowerCase,Te=String.prototype.toUpperCase,Ve=String.prototype.replace,je=/e\+(\d)$/,Fe=/e-(\d)$/,$e=/^(\d+)$/,Oe=/^(\d+)e/,Ae=/\.0$/,Ce=/\.0*e/,Ne=/(\..*[^0])0*e/;function Pe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ve(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":_e(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ve.call(i,Ne,"$1e"),i=Ve.call(i,Ce,"e"),i=Ve.call(i,Ae,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ve.call(i,je,"e+0$1"),i=Ve.call(i,Fe,"e-0$1"),e.alternate&&(i=Ve.call(i,$e,"$1."),i=Ve.call(i,Oe,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Te.call(e.specifier)?Te.call(i):Ie.call(i)}function Re(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ze(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Re(t):Re(t)+e}var We=String.fromCharCode,Ge=isNaN,Le=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Xe(e){var r,i,t,n,a,o,c,s,p;if(!Le(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Se(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Ue(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ge(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ge(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ke(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ge(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ge(a)?String(t.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Pe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=me(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ze(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ye(e){var r,i,t,n;for(i=[],n=0,t=Me.exec(e);t;)(r=e.slice(n,Me.lastIndex-t[0].length)).length&&i.push(r),i.push(ze(t)),n=Me.lastIndex,t=Me.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function qe(e){return"string"==typeof e}function Be(e){var r,i,t;if(!qe(e))throw new TypeError(Be("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ye(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Xe.apply(null,i)}return function(e,r,i){var t,n;if(!oe(e)&&!ce(e))throw new TypeError(Be("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(t=e.length))return-1;if(3===arguments.length){if(!he(i))throw new TypeError(Be("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=t)return-1;n=i}else(n=t+i)<0&&(n=0)}else n=0;if(te(r)){for(;n<t;n++)if(te(e[n]))return n}else for(;n<t;n++)if(e[n]===r)return n;return-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).indexOf=r();
//# sourceMappingURL=index.js.map
