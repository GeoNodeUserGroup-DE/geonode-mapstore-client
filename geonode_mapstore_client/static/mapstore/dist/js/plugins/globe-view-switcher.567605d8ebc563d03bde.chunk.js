(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89585],{213652:(t,e,r)=>{"use strict";r.d(e,{Wz:()=>n,UA:()=>o,LI:()=>i});var n="MAP_TYPE_CHANGED",o="MAP_TYPE:VISUALIZATION_MODE_CHANGED";function i(t){return{type:o,visualizationMode:t}}},21339:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var n=r(45697),o=r.n(n),i=r(124852),c=r.n(i),l=r(727418),u=r.n(l);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function s(t,e,r){return e=y(e),function(t,e){if(e&&("object"==p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],y(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}var m=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return d(t=s(this,e,[].concat(n)),"getStyle",(function(){var e={cursor:t.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return t.props.image?u()(e,{overflow:"hidden"}):u()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),u()(e,t.props.style),e})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return c().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);d(m,"propTypes",{id:o().string,image:o().string,onClick:o().func,style:o().object,disabled:o().bool,tooltip:o().string,className:o().string}),d(m,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const g=m},782457:(t,e,r)=>{"use strict";r.d(e,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i),l=r(480681),u=r(950966),p=r(38560),a=r(21339);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(null,arguments)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function b(t,e,r){return e=v(e),function(t,e){if(e&&("object"==s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,d()?Reflect.construct(e,r||[],v(t).constructor):e.apply(t,r))}function d(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(d=function(){return!!t})()}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function g(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}var O=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return g(t=b(this,e,[].concat(n)),"onClick",(function(){t.props.onClick(!t.props.pressed,t.props.options)})),g(t,"renderNormalButton",(function(){return o().createElement(p.Z,f({id:t.props.id},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.props.pressed?t.props.pressedStyle:t.props.defaultStyle,style:t.props.style}),t.props.glyphicon?o().createElement(l.gG,{glyph:t.props.glyphicon}):null,t.props.glyphicon&&t.props.text&&!o().isValidElement(t.props.text)?" ":null,t.props.text,t.props.help)})),g(t,"renderImageButton",(function(){return o().createElement(a.Z,{id:t.props.id,image:t.props.image,onClick:t.onClick,style:t.props.style})})),g(t,"addTooltip",(function(e){return o().createElement(u.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:t.props.tooltip},e)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);g(O,"propTypes",{id:c().string,btnConfig:c().object,options:c().object,text:c().oneOfType([c().string,c().element]),help:c().oneOfType([c().string,c().element]),glyphicon:c().string,pressed:c().bool,onClick:c().func,tooltip:c().element,tooltipPlace:c().string,style:c().object,btnType:c().oneOf(["normal","image"]),image:c().string,pressedStyle:c().string,defaultStyle:c().string}),g(O,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const w=O},38560:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(480681),o=r(124852),i=r.n(o),c=r(294184),l=r.n(c),u=["disabled","className","onClick"];function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(null,arguments)}var a=r(815135);const s=(f=n.zx,i().forwardRef((function(t,e){var r=t.disabled,n=t.className,o=t.onClick,c=void 0===o?function(){}:o,a=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,u);return i().createElement(f,p({ref:e,className:r?l()("disabled",n):n,onClick:function(){r||c.apply(void 0,arguments)}},a),a.children)})));var f;(0,a.Z)(n.zx)},886537:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>k});var n=r(171703),o=r(213652),i=r(93152),c=r(22222),l=r(124852),u=r.n(l),p=r(45697),a=r.n(p),s=r(782457),f=r(480681),y=r(805346);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(null,arguments)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function m(t,e,r){return e=h(e),function(t,e){if(e&&("object"==b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,g()?Reflect.construct(e,r||[],h(t).constructor):e.apply(t,r))}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function w(t,e,r){return(e=j(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=function(t){if("object"!=b(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var P=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return w(t=m(this,e,[].concat(n)),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(e,r){return e[r]=t.props[r],e}),{})})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return u().createElement(s.Z,d({},this.getButtonProperties(),{pressed:this.props.active,tooltip:u().createElement(f.u,{id:"globeViewSwitcher-tooltip"},u().createElement(y.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(u().Component);w(P,"propTypes",{id:a().string,btnConfig:a().object,options:a().object,text:a().oneOfType([a().string,a().element]),help:a().oneOfType([a().string,a().element]),glyphicon:a().string,active:a().bool,onClick:a().func,activeTooltip:a().string,notActiveTooltip:a().string,tooltipPlace:a().string,style:a().object,btnType:a().oneOf(["normal","image"]),image:a().string,pressedStyle:a().string,defaultStyle:a().string}),w(P,"defaultProps",{id:"globeviewswitcher-btn",activeTooltip:"globeswitcher.tooltipDeactivate",notActiveTooltip:"globeswitcher.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"3d",btnConfig:{className:"square-button"}});const S=P;var T=r(898631),_=r(322843),C=(0,c.P1)([i.$v],(function(t){return{active:(0,T.A)(t)===T.nU._3D}})),E=(0,n.connect)(C,{onClick:function(t){return(0,o.LI)(t?T.nU._3D:T.nU._2D)}})(S);const k=(0,_.rx)("GlobeViewSwitcher",{component:E,options:{disablePluginIf:"{state('featuregridmode') === 'EDIT'}"},containers:{Toolbar:{name:"3d",position:10,alwaysVisible:!0,tool:!0,priority:1}}})}}]);