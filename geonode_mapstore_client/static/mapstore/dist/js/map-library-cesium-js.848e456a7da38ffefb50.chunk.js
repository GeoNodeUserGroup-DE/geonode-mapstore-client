(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89437,45992],{313647:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(892322),o=t(640271);const i=function(e){if(!e)throw new Error("geojson is required");var r=[];return(0,n.nG)(e,(function(e){r.push(e)})),(0,o.uf)(r)}},61133:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var n=t(867076).createSink;const o=function(){return t(423639),{Map:t(872892).Z,Layer:t(2400).Z,Feature:n((function(){}))}}},443143:(e,r,t)=>{"use strict";t.d(r,{qH:()=>f,qj:()=>l,qq:()=>p,TM:()=>v});var n,o=t(717621),i=t.n(o),a=t(14841),c=t.n(a),u=t(264721),s=t.n(u),f=function(e,r,t,o){var i=e;isNaN(parseFloat(e))&&(i=n.hexToHsv(e)[0]);var a=.5/(t-1),c=r/(t-1),u=[];1===t&&(a=.5,c=r/2);for(var s=0;s<t;s++){var f=i+s*c-r/2,l=a*s+.3,p=l;o&&(f=o.h||f,l=o.s||l,p=o.v||p),u.push(n.hsvToHex(f,l,p,s))}return u},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(e).toHexString()},p=function(e,r,t){var n=i()(e);return e&&n.setAlpha(c()(void 0!==r?r:n.getAlpha())).toRgbString()||t},v=function e(r){var t=Math.round,o=Math.random,i=[t(255*o()),t(255*o()),t(255*o())],a=n.rgbToHex(i);if(r)for(;s()(r,a)||"#000000"===a||"#FFFFFF"===a;)e(r);return a};n={decToHex:function(e){var r="0123456789ABCDEF",t=parseInt(e,10);return t=isNaN(t)?0:t,r.charAt(((t=t>255||t<0?0:t)-t%16)/16)+r.charAt(t%16)},rgbToHex:function(e,r,t){return e instanceof Array?n.rgbToHex(e[0],e[1],e[2]):"#"+n.decToHex(e)+n.decToHex(r)+n.decToHex(t)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,r,t){if(e instanceof Array)return n.rgbToHsv(e[0],e[1],e[2]);var o,i,a,c,u,s=e/255,f=r/255,l=t/255;switch(o=Math.min(Math.min(s,f),l),a=(i=Math.max(Math.max(s,f),l))-o,i){case o:c=0;break;case s:c=60*(f-l)/a,f<l&&(c+=360);break;case f:c=60*(l-s)/a+120;break;case l:c=60*(s-f)/a+240}return u=0===i?0:1-o/i,[Math.round(c),u,i]},distributedColorsHEX:function(e){for(var r=360/(e-1),t=[],o=function e(r,t,o){var i=e(r,t,o);return n.rgbToHex(i)},i=0;i<e;i++)t.push(o(r*i,.57,.63));return t},sameToneRangeColors:f,hsvToRgb:function(e,r,t){if(e instanceof Array)return n.hsvToRgb(e[0],e[1],e[2]);var o,i,a,c=Math.floor(e/60%6),u=e/60-c,s=t*(1-r),f=t*(1-u*r),l=t*(1-(1-u)*r);switch(c){case 0:o=t,i=l,a=s;break;case 1:o=f,i=t,a=s;break;case 2:o=s,i=t,a=l;break;case 3:o=s,i=f,a=t;break;case 4:o=l,i=s,a=t;break;case 5:o=t,i=s,a=f}return[n.realToDec(o),n.realToDec(i),n.realToDec(a)]},hsvToHex:function(e,r,t){var o=n.hsvToRgb(e,r,t);return n.rgbToHex(o)},hexToHsv:function(e){var r=e;if(r.length>0){"#"===r[0]&&(r=e.substring(1));var t=n.hexToRgb(r);return n.rgbToHsv(t)}return null},hexToRgb:function(e){var r,t,n,o=e;return"#"===o.charAt(0)&&(o=e.substring(1)),r=o.charAt(0)+o.charAt(1),t=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(r,16),parseInt(t,16),parseInt(n,16)]},colorToHexStr:l,colorToRgbaStr:p,generateRandomHexColor:v}},45992:(e,r,t)=>{"use strict";t.d(r,{h:()=>f,Z:()=>l});var n=t(535937),o=t.n(n),i=t(836882),a=t(737275);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){var n,o,i,a;n=e,o=r,i=t[r],a=function(e,r){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e,r){var t,n,c,u,f=i.Z;if("custom"===e)t=r;else if(c=(u=e.split("."))[0],n=u[1],!(t=f[c]))throw new Error("No such provider ("+c+")");var l={url:t.url,options:t.options||{}};if(n&&"variants"in t){if(!(n in t.variants))throw new Error("No such variant of "+(c||t.url)+" ("+n+")");var p,v=t.variants[n];p="string"==typeof v?{variant:v}:v.options,l={url:v.url||l.url,options:s(s({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(u.splice(1,u.length-1).join(".")));var d="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&d&&(l.url="http:"+l.url),l.options.retina&&(r.detectRetina&&a.ZP.getBrowserProperties().retina?r.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function e(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,t){return e(f[t].options.attribution)}))}(l.options.attribution));var h=s(s({},l.options),o()(r,(function(e){return void 0!==e})));return[l.url,h]};const l={getLayerConfig:f}},923645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),r.push(u))}},r}},893379:(e,r,t)=>{"use strict";var n,o=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),i=[];function a(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function c(e,r){for(var t={},n=[],o=0;o<e.length;o++){var c=e[o],u=r.base?c[0]+r.base:c[0],s=t[u]||0,f="".concat(u," ").concat(s);t[u]=s+1;var l=a(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:h(p,r),references:1}),n.push(f)}return n}function u(e){var r=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){r.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,f=(s=[],function(e,r){return s[e]=r,s.filter(Boolean).join("\n")});function l(e,r,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function p(e,r,t){var n=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,d=0;function h(e,r){var t,n,o;if(r.singleton){var i=d++;t=v||(v=u(r)),n=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=u(r),n=p.bind(null,t,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=a(t[n]);i[o].references--}for(var u=c(e,r),s=0;s<t.length;s++){var f=a(t[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}t=u}}}}}]);