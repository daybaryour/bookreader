!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=73)}([function(n,t,e){(function(t){var e=function(n){return n&&n.Math==Math&&n};n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")()}).call(this,e(38))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(0),o=e(12),i=e(29),a=e(52),c=r.Symbol,u=o("wks");n.exports=function(n){return u[n]||(u[n]=a&&c[n]||(a?c:i)("Symbol."+n))}},function(n,t,e){var r=e(6),o=e(11),i=e(15);n.exports=r?function(n,t,e){return o.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(2);n.exports=function(n){if(!r(n))throw TypeError(String(n)+" is not an object");return n}},function(n,t,e){var r=e(1);n.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(0),o=e(22).f,i=e(4),a=e(26),c=e(18),u=e(44),s=e(50);n.exports=function(n,t){var e,l,f,p,v,d=n.target,h=n.global,b=n.stat;if(e=h?r:b?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in t){if(p=t[l],f=n.noTargetGet?(v=o(e,l))&&v.value:e[l],!s(h?l:d+(b?".":"#")+l,n.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(n.sham||f&&f.sham)&&i(p,"sham",!0),a(e,l,p,n)}}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(6),o=e(24),i=e(5),a=e(17),c=Object.defineProperty;t.f=r?c:function(n,t,e){if(i(n),t=a(t,!0),i(e),o)try{return c(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(40),o=e(41);(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.3.3",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(n,t,e){var r=e(14),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var r=e(23),o=e(7);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(2);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(0),o=e(4);n.exports=function(n,t){try{o(r,n,t)}catch(e){r[n]=t}return t}},function(n,t){n.exports={}},function(n,t){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(n,t,e){var r=e(7);n.exports=function(n){return Object(r(n))}},function(n,t,e){var r=e(6),o=e(39),i=e(15),a=e(16),c=e(17),u=e(8),s=e(24),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(n,t){if(n=a(n),t=c(t,!0),s)try{return l(n,t)}catch(n){}if(u(n,t))return i(!o.f.call(n,t),n[t])}},function(n,t,e){var r=e(1),o=e(10),i="".split;n.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==o(n)?i.call(n,""):Object(n)}:Object},function(n,t,e){var r=e(6),o=e(1),i=e(25);n.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(0),o=e(2),i=r.document,a=o(i)&&o(i.createElement);n.exports=function(n){return a?i.createElement(n):{}}},function(n,t,e){var r=e(0),o=e(12),i=e(4),a=e(8),c=e(18),u=e(27),s=e(42),l=s.get,f=s.enforce,p=String(u).split("toString");o("inspectSource",(function(n){return u.call(n)})),(n.exports=function(n,t,e,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof t||a(e,"name")||i(e,"name",t),f(e).source=p.join("string"==typeof t?t:"")),n!==r?(u?!l&&n[t]&&(s=!0):delete n[t],s?n[t]=e:i(n,t,e)):s?n[t]=e:c(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u.call(this)}))},function(n,t,e){var r=e(12);n.exports=r("native-function-to-string",Function.toString)},function(n,t,e){var r=e(12),o=e(29),i=r("keys");n.exports=function(n){return i[n]||(i[n]=o(n))}},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol("+String(void 0===n?"":n)+")_"+(++e+r).toString(36)}},function(n,t,e){var r=e(46),o=e(0),i=function(n){return"function"==typeof n?n:void 0};n.exports=function(n,t){return arguments.length<2?i(r[n])||i(o[n]):r[n]&&r[n][t]||o[n]&&o[n][t]}},function(n,t,e){var r=e(8),o=e(16),i=e(32).indexOf,a=e(19);n.exports=function(n,t){var e,c=o(n),u=0,s=[];for(e in c)!r(a,e)&&r(c,e)&&s.push(e);for(;t.length>u;)r(c,e=t[u++])&&(~i(s,e)||s.push(e));return s}},function(n,t,e){var r=e(16),o=e(13),i=e(48),a=function(n){return function(t,e,a){var c,u=r(t),s=o(u.length),l=i(a,s);if(n&&e!=e){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((n||l in u)&&u[l]===e)return n||l||0;return!n&&-1}};n.exports={includes:a(!0),indexOf:a(!1)}},function(n,t,e){var r=e(10);n.exports=Array.isArray||function(n){return"Array"==r(n)}},function(n,t,e){var r=e(2),o=e(33),i=e(3)("species");n.exports=function(n,t){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},function(n,t,e){var r=e(3),o=e(58),i=e(4),a=r("unscopables"),c=Array.prototype;null==c[a]&&i(c,a,o(null)),n.exports=function(n){c[a][n]=!0}},function(n,t,e){"use strict";var r,o,i=e(69),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(u=function(n){var t,e,r,o,u=this;return l&&(e=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(t=u.lastIndex),r=a.call(u,n),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),l&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),n.exports=u},function(n,t,e){"use strict";var r=e(9),o=e(1),i=e(33),a=e(2),c=e(21),u=e(13),s=e(51),l=e(34),f=e(53),p=e(3)("isConcatSpreadable"),v=!o((function(){var n=[];return n[p]=!1,n.concat()[0]!==n})),d=f("concat"),h=function(n){if(!a(n))return!1;var t=n[p];return void 0!==t?!!t:i(n)};r({target:"Array",proto:!0,forced:!v||!d},{concat:function(n){var t,e,r,o,i,a=c(this),f=l(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],h(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&s(f,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(n){var t=o(this,n);return!!t&&t.enumerable}:r},function(n,t){n.exports=!1},function(n,t,e){var r=e(0),o=e(18),i=r["__core-js_shared__"]||o("__core-js_shared__",{});n.exports=i},function(n,t,e){var r,o,i,a=e(43),c=e(0),u=e(2),s=e(4),l=e(8),f=e(28),p=e(19),v=c.WeakMap;if(a){var d=new v,h=d.get,b=d.has,g=d.set;r=function(n,t){return g.call(d,n,t),t},o=function(n){return h.call(d,n)||{}},i=function(n){return b.call(d,n)}}else{var m=f("state");p[m]=!0,r=function(n,t){return s(n,m,t),t},o=function(n){return l(n,m)?n[m]:{}},i=function(n){return l(n,m)}}n.exports={set:r,get:o,has:i,enforce:function(n){return i(n)?o(n):r(n,{})},getterFor:function(n){return function(t){var e;if(!u(t)||(e=o(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(n,t,e){var r=e(0),o=e(27),i=r.WeakMap;n.exports="function"==typeof i&&/native code/.test(o.call(i))},function(n,t,e){var r=e(8),o=e(45),i=e(22),a=e(11);n.exports=function(n,t){for(var e=o(t),c=a.f,u=i.f,s=0;s<e.length;s++){var l=e[s];r(n,l)||c(n,l,u(t,l))}}},function(n,t,e){var r=e(30),o=e(47),i=e(49),a=e(5);n.exports=r("Reflect","ownKeys")||function(n){var t=o.f(a(n)),e=i.f;return e?t.concat(e(n)):t}},function(n,t,e){n.exports=e(0)},function(n,t,e){var r=e(31),o=e(20).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},function(n,t,e){var r=e(14),o=Math.max,i=Math.min;n.exports=function(n,t){var e=r(n);return e<0?o(e+t,0):i(e,t)}},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var r=e(1),o=/#|\.prototype\./,i=function(n,t){var e=c[a(n)];return e==s||e!=u&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(n){return String(n).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";n.exports=i},function(n,t,e){"use strict";var r=e(17),o=e(11),i=e(15);n.exports=function(n,t,e){var a=r(t);a in n?o.f(n,a,i(0,e)):n[a]=e}},function(n,t,e){var r=e(1);n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(n,t,e){var r=e(1),o=e(3)("species");n.exports=function(n){return!r((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},function(n,t,e){"use strict";var r=e(9),o=e(55).find,i=e(35),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(n,t,e){var r=e(56),o=e(23),i=e(21),a=e(13),c=e(34),u=[].push,s=function(n){var t=1==n,e=2==n,s=3==n,l=4==n,f=6==n,p=5==n||f;return function(v,d,h,b){for(var g,m,y=i(v),x=o(y),w=r(d,h,3),S=a(x.length),R=0,B=b||c,O=t?B(v,S):e?B(v,0):void 0;S>R;R++)if((p||R in x)&&(m=w(g=x[R],R,y),n))if(t)O[R]=m;else if(m)switch(n){case 3:return!0;case 5:return g;case 6:return R;case 2:u.call(O,g)}else if(l)return!1;return f?-1:s||l?l:O}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(n,t,e){var r=e(57);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 0:return function(){return n.call(t)};case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},function(n,t,e){var r=e(5),o=e(59),i=e(20),a=e(19),c=e(61),u=e(25),s=e(28)("IE_PROTO"),l=function(){},f=function(){var n,t=u("iframe"),e=i.length;for(t.style.display="none",c.appendChild(t),t.src=String("javascript:"),(n=t.contentWindow.document).open(),n.write("<script>document.F=Object<\/script>"),n.close(),f=n.F;e--;)delete f.prototype[i[e]];return f()};n.exports=Object.create||function(n,t){var e;return null!==n?(l.prototype=r(n),e=new l,l.prototype=null,e[s]=n):e=f(),void 0===t?e:o(e,t)},a[s]=!0},function(n,t,e){var r=e(6),o=e(11),i=e(5),a=e(60);n.exports=r?Object.defineProperties:function(n,t){i(n);for(var e,r=a(t),c=r.length,u=0;c>u;)o.f(n,e=r[u++],t[e]);return n}},function(n,t,e){var r=e(31),o=e(20);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(30);n.exports=r("document","documentElement")},function(n,t,e){"use strict";var r=e(9),o=e(32).includes,i=e(35);r({target:"Array",proto:!0},{includes:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(n,t,e){"use strict";var r=e(9),o=e(64),i=e(7);r({target:"String",proto:!0,forced:!e(66)("includes")},{includes:function(n){return!!~String(i(this)).indexOf(o(n),arguments.length>1?arguments[1]:void 0)}})},function(n,t,e){var r=e(65);n.exports=function(n){if(r(n))throw TypeError("The method doesn't accept regular expressions");return n}},function(n,t,e){var r=e(2),o=e(10),i=e(3)("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[i])?!!t:"RegExp"==o(n))}},function(n,t,e){var r=e(3)("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(e){try{return t[r]=!1,"/./"[n](t)}catch(n){}}return!1}},function(n,t,e){"use strict";var r=e(68),o=e(5),i=e(21),a=e(13),c=e(14),u=e(7),s=e(70),l=e(72),f=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(n,t,e){return[function(e,r){var o=u(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):t.call(String(o),e,r)},function(n,i){var u=e(t,n,this,i);if(u.done)return u.value;var v=o(n),d=String(this),h="function"==typeof i;h||(i=String(i));var b=v.global;if(b){var g=v.unicode;v.lastIndex=0}for(var m=[];;){var y=l(v,d);if(null===y)break;if(m.push(y),!b)break;""===String(y[0])&&(v.lastIndex=s(d,a(v.lastIndex),g))}for(var x,w="",S=0,R=0;R<m.length;R++){y=m[R];for(var B=String(y[0]),O=f(p(c(y.index),d.length),0),T=[],_=1;_<y.length;_++)T.push(void 0===(x=y[_])?x:String(x));var M=y.groups;if(h){var j=[B].concat(T,O,d);void 0!==M&&j.push(M);var E=String(i.apply(void 0,j))}else E=r(B,d,O,T,M,i);O>=S&&(w+=d.slice(S,O)+E,S=O+B.length)}return w+d.slice(S)}];function r(n,e,r,o,a,c){var u=r+n.length,s=o.length,l=h;return void 0!==a&&(a=i(a),l=d),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return n;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>s){var f=v(l/10);return 0===f?t:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):t}c=o[l-1]}return void 0===c?"":c}))}}))},function(n,t,e){"use strict";var r=e(4),o=e(26),i=e(1),a=e(3),c=e(36),u=a("species"),s=!i((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),l=!i((function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));n.exports=function(n,t,e,f){var p=a(n),v=!i((function(){var t={};return t[p]=function(){return 7},7!=""[n](t)})),d=v&&!i((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!t}));if(!v||!d||"replace"===n&&!s||"split"===n&&!l){var h=/./[p],b=e(p,""[n],(function(n,t,e,r,o){return t.exec===c?v&&!o?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}})),g=b[0],m=b[1];o(String.prototype,n,g),o(RegExp.prototype,p,2==t?function(n,t){return m.call(n,this,t)}:function(n){return m.call(n,this)}),f&&r(RegExp.prototype[p],"sham",!0)}}},function(n,t,e){"use strict";var r=e(5);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},function(n,t,e){"use strict";var r=e(71).charAt;n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},function(n,t,e){var r=e(14),o=e(7),i=function(n){return function(t,e){var i,a,c=String(o(t)),u=r(e),s=c.length;return u<0||u>=s?n?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?n?c.charAt(u):i:n?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};n.exports={codeAt:i(!1),charAt:i(!0)}},function(n,t,e){var r=e(10),o=e(36);n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var i=e.call(n,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(n))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},function(n,t,e){"use strict";e.r(t);var r;e(37),e(54),e(62),e(63),e(67);function o(n,t,e){var r;return function(){var o=this,i=arguments,a=function(){r=null,e||n.apply(o,i)},c=e&&!r;clearTimeout(r),r=setTimeout(a,t),c&&n.apply(o,i)}}jQuery.extend(BookReader.defaultOptions,{enableMobileNav:!0,mobileNavTitle:"Internet Archive",mobileNavFullscreenOnly:!1}),BookReader.prototype.setup=(r=BookReader.prototype.setup,function(n){r.call(this,n),this.enableMobileNav=n.enableMobileNav,this.mobileNavTitle=n.mobileNavTitle,this.mobileNavFullscreenOnly=n.mobileNavFullscreenOnly,this.refs.$mmenu=null}),BookReader.prototype.initToolbar=function(n){return function(t,e){var r,i=this;if(this.enableMobileNav){var a=this.buildMobileDrawerElement();this.refs.$br.append(a),this.buildInfoDiv(this.$(".BRmobileInfo")),this.buildShareDiv(this.$(".BRmobileShare")),(r=a).mmenu({navbars:[{position:"top"}],navbar:{add:!0,title:this.mobileNavTitle,titleLink:"panel"},extensions:["panelshadow"]},{offCanvas:{wrapPageIfNeeded:!1,zposition:"next",pageSelector:this.el}});var c=r.find(".BRpageviewValue");r.data("mmenu").bind("opened",(function(){c.length&&c.val(window.location.href)})),a.find(".high-contrast-button").click((function(){return i.refs.$br.toggleClass("high-contrast")})),a.find(".DrawerLayoutButton.one_page_mode").click((function(){return i.switchMode(i.constMode1up)})),a.find(".DrawerLayoutButton.two_page_mode").click((function(){return i.switchMode(i.constMode2up)})),a.find(".DrawerLayoutButton.thumbnail_mode").click((function(){return i.switchMode(i.constModeThumb)})),this.mobileNavFullscreenOnly?$(document.body).addClass("BRbodyMobileNavEnabledFullscreen"):$(document.body).addClass("BRbodyMobileNavEnabled"),this.refs.$mmenu=r}if(n.apply(this,arguments),this.enableMobileNav){this.$(".BRmobileHamburger").click((function(){r.data("mmenu").getInstance().vars.opened?r.data("mmenu").close():r.data("mmenu").open()}));var u=function(n){var t=$(window).width();r.data("mmenu").getInstance().vars.opened&&t>=800&&r.data("mmenu").close()};window.addEventListener("resize",o(u,900))}}}(BookReader.prototype.initToolbar),BookReader.prototype.buildToolbarElement=function(n){return function(){var t=n.call(this);if(this.enableMobileNav){var e=BookReader.util.escapeHTML(this.bookTitle),r='\n        <span class="BRmobileHamburgerWrapper">\n          <button class="BRmobileHamburger"></button>\n          <span class="BRtoolbarMobileTitle" title="'.concat(e,'">').concat(this.bookTitle,"</span>\n        </span>\n      ");t.addClass("responsive").prepend($(r))}return t}}(BookReader.prototype.buildToolbarElement),BookReader.prototype.buildMobileDrawerElement=function(){var n="";this.enableExperimentalControls&&(n='\n        <p class="DrawerSettingsTitle">Experimental (may not work)</p>\n        <button class="BRaction default high-contrast-button">Toggle high contrast</button>\n    ');var t='\n    <span>\n        <span class="DrawerIconWrapper">\n          <img class="DrawerIcon" src="'.concat("".concat(this.imagesBaseURL,"icon_gear.svg"),'" alt="settings-icon"/>\n        </span>\n        Settings\n    </span>\n    <div class=DrawerSettingsWrapper>\n        <div class="DrawerSettingsLayoutWrapper">\n          <button class="DrawerLayoutButton one_page_mode">\n            <img src="',this.imagesBaseURL,'icon_one_page.svg" alt="Single Page"/>\n            <br>\n            One Page\n          </button>\n          <button class="DrawerLayoutButton two_page_mode TwoPagesButton">\n            <img src="').concat(this.imagesBaseURL,'icon_two_pages.svg" alt="Two Pages"/>\n            <br>\n            Two Pages\n          </button>\n          <button class="DrawerLayoutButton thumbnail_mode">\n            <img src="').concat(this.imagesBaseURL,'icon_thumbnails.svg" alt="Thumbnails"/>\n            <br>\n            Thumbnails\n          </button>\n        </div>\n        <br>\n        <div class="DrawerSettingsTitle">Zoom</div>\n        <button class=\'BRicon zoom_out\'></button>\n        <button class=\'BRicon zoom_in\'></button>\n        <br style="clear:both"><br><br>\n        ').concat(n,"\n    </div>\n  "),e='\n    <span>\n        <span class="DrawerIconWrapper ">\n            <img class="DrawerIcon" src="'.concat(this.imagesBaseURL,'icon_info.svg" alt="info-icon"/>\n        </span>\n        About This Book\n    </span>\n    <div class="BRmobileInfo"></div>\n  '),r='\n    <span>\n      <span class="DrawerIconWrapper">\n        <img class="DrawerIcon" src="'.concat(this.imagesBaseURL,'icon_share.svg" alt="info-share"/>\n      </span>\n      Share This Book\n    </span>\n    <div class="BRmobileShare"></div>\n  '),o='\n    <nav id="BRmobileMenu" class="BRmobileMenu">\n      <ul>\n        <li class="BRmobileMenu__settings">'.concat(t,'</li>\n        <li class="BRmobileMenu__moreInfoRow">').concat(e,'</li>\n        <li class="BRmobileMenu__share">').concat(r,"</li>\n      </ul>\n    </nav>\n  ");return $(o)},BookReader.prototype.$=function(n){return function(t){var e=n.call(this,t);return this.refs.$mmenu&&(e=e.add(this.refs.$mmenu.find(t))),e}}(BookReader.prototype.$)}]);
//# sourceMappingURL=plugin.mobile_nav.js.map