(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16164,84035,888],{38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(480681),o=r(124852),i=r.n(o),l=r(294184),a=r.n(l),c=["disabled","className","onClick"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}var s=r(815135);const p=(d=n.zx,i().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,l=void 0===o?function(){}:o,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return i().createElement(d,u({ref:t,className:r?a()("disabled",n):n,onClick:function(){r||l.apply(void 0,arguments)}},s),s.children)})));var d;(0,s.Z)(n.zx)},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(727418),o=r.n(n),i=r(45697),l=r.n(i),a=r(124852),c=r.n(a),u=r(485294),s=r.n(u),p=r(472986),d=r.n(p),f=r(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R(n.key),n)}}function b(e,t,r){return t=O(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function S(e,t,r){return(t=R(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(e=b(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(f.Z,{msgId:"loading"}),c().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);S(N,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),S(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const _=N},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(45697),o=r.n(n),i=r(124852),l=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return e>100?"full":e>40?"medium":"small"},d=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return l().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&l().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};d.propTypes={size:o().number,className:o().string,style:o().object};const f=d},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(461365),o=r(356936);const i=(0,n.Z)(o.h_)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(294184),l=r.n(i),a=r(480681),c=r(807472),u=r(80717),s=r(867076),p=r(819081),d=r.n(p),f=r(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},E={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,s=e.onClose,p=void 0===s?function(){}:s,v=e.title,y=void 0===v?"":v,b=e.clickOutEnabled,g=void 0===b||b,O=e.showClose,h=void 0===O||O,S=e.disabledClose,R=void 0!==S&&S,N=e.showFullscreen,_=void 0!==N&&N,w=e.fullscreenType,C=void 0===w?"full":w,P=e.buttons,j=void 0===P?[]:P,T=e.size,D=void 0===T?"":T,k=e.bodyClassName,I=void 0===k?"":k,U=e.children,G=e.draggable,L=void 0!==G&&G,x=e.fullscreenState,A=e.onFullscreen,Z=e.fade,z=void 0!==Z&&Z,M=e.fitContent,F=e.modalClassName,V=void 0===F?"":F,B=e.dialogClassName,K=void 0===B?"":B,W=e.enableFooter,H=void 0===W||W,Q=m[D]||"",X=_&&"expanded"===x&&E.className[C]||"",Y=r?o().createElement("div",{className:"modal-fixed ".concat(V," ")+(L?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?p:function(){},containerClassName:"ms-resizable-modal",draggable:L,modal:!0,className:l()("modal-dialog modal-content",Q,X,K,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),_&&E.className[C]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return A("expanded"===x?"collapsed":"expanded")},glyph:E.glyph[x][C]}),h&&p&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:R}))),o().createElement("div",{role:"body",className:I},U),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(u.Z,{buttons:j})))):null;return z?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Y):Y}))},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),l=r(957557),a=r.n(l),c=r(815135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(867076),l=r(45697),a=r.n(l),c=r(957557),u=r.n(c),s=r(480681),p=r(950966);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function m(e,t,r){return t=v(t),function(e,t){if(t&&("object"==d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(r,t),n=r,(l=[{key:"renderPopover",value:function(){return o().createElement(s.J2,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&f(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,l}(o().Component),b(t,"propTypes",{popover:a().object}),b(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(819081),l=r.n(i),a=r(480681),c=r(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,p=e.btnDefaultProps,d=void 0===p?{}:p,f=e.transitionProps,m=void 0===f?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:f,E=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,l=e.renderButton,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return n?l||i&&o().createElement(i,s({key:a.key||t},a))||o().createElement(c.Z,s({key:a.key||t},d,a)):null}))};return o().createElement(a.hE,i,m?o().createElement(l(),m,E()):E())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),l=r(805346),a=r(957557),c=r.n(a),u=r(480681),s=r(532425),p=r(212610),d=r(617252),f=r(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(null,arguments)}const v=(0,i.compose)(p.Z,d.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,a=e.textId,p=e.glyphClassName,d=void 0===p?"":p,v=e.loaderProps,y=void 0===v?{}:v,b=e.children,g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,m);return o().createElement(f.Z,c()(g,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(u.gG,{glyph:t,className:d}):null,a?o().createElement(l.Z,{msgId:a}):i,r?o().createElement(s.Z,E({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},y)):null,b)}))},788113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>f,PG:()=>m,_x:()=>E,Mm:()=>v,dP:()=>y,SX:()=>b,ZL:()=>g,_S:()=>O,iH:()=>h,R7:()=>S,Q7:()=>R,n7:()=>N,bA:()=>_,hm:()=>w,E2:()=>C,Cb:()=>P,eK:()=>j,Im:()=>T,e8:()=>D,JF:()=>k,kS:()=>I,y:()=>U,l2:()=>G,HN:()=>L,BM:()=>x,O8:()=>A,am:()=>Z,LV:()=>z,CK:()=>M,jU:()=>F,Qg:()=>V,$c:()=>B});var n=r(22222),o=r(227361),i=r.n(o),l=r(800827),a=r(577215),c=r(274621);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return i()(e,"catalog.services")},m=(0,n.P1)((function(e){return i()(e,"catalog.default.staticServices")}),f,(function(e,t){var r=null==e?void 0:e.default_map_backgrounds;return r?(r.readOnly=!0,p(p({},t),{},{default_map_backgrounds:r})):t})),E=function(e){return i()(e,"catalog.default.tileSizes",[256,512])},v=function(e){return i()(e,"controls.metadataexplorer.group")},y=function(e){return i()(e,"catalog.saving")},b=function(e){return i()(e,"catalog.result")},g=function(e){return i()(e,"catalog.openCatalogServiceList")},O=function(e){return i()(e,"catalog.newService")},h=function(e){return i()(e,"catalog.newService.type","csw")},S=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"]'))},R=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].type'),function(e){return i()(e,'catalog.default.staticServices["'.concat(i()(e,"catalog.selectedService"),'"].type'),"csw")}(e))},N=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].layerOptions'),{})},_=function(e){return i()(e,"catalog.searchOptions")},w=function(e){return i()(e,"catalog.loadingError")},C=function(e){return i()(e,"catalog.loading",!1)},P=function(e){return i()(e,"catalog.selectedService")},j=function(e){return i()(e,"catalog.mode","view")},T=function(e){return i()(e,"catalog.layerError")},D=function(e){return i()(e,"catalog.searchOptions.text","")},k=function(e){return"metadataexplorer"===i()(e,"controls.toolbar.active")||i()(e,"controls.metadataexplorer.enabled")},I=function(e){return(i()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},U=function(e){return i()(e,"catalog.pageSize",4)},G=function(e){return i()(e,"catalog.delayAutoSearch",1e3)},L=(0,n.zB)({projection:l.uy}),x=function(e){return i()(e,"catalog.formatsLoading",!1)},A=function(e){return i()(e,"catalog.newService.supportedFormats.imageFormats",[])},Z=function(e){var t,r;return"edit"===j(e)?A(e):(null===(t=S(e))||void 0===t||null===(r=t.supportedFormats)||void 0===r?void 0:r.imageFormats)||[]},z=function(e){return i()(e,"catalog.newService.supportedFormats.infoFormats",(0,a.oL)())},M=function(e){return i()(e,"catalog.newService.formatUrlUsed","")},F=function(e){return i()(e,"catalog.isNewServiceAdded",!1)},V=function(e){return i()(e,"catalog.showFormatError",!1)},B=function(e){var t=function(e){return i()(e,"catalog.editingAllowedRoles",[])}(e),r=function(e){return i()(e,"catalog.editingAllowedGroups",[])}(e);return(0,c.tv)({allowedRoles:t,allowedGroups:r})(e)}},643892:(e,t,r)=>{"use strict";r.d(t,{W:()=>n,Zf:()=>o,Eu:()=>i,Vy:()=>l,YB:()=>a,xm:()=>c,_f:()=>u,ek:()=>s,cd:()=>p,pt:()=>d,ww:()=>f,tR:()=>m,Js:()=>E,p2:()=>v,ZH:()=>y,eQ:()=>b,ql:()=>g,$X:()=>O,nS:()=>h,ih:()=>S,J5:()=>R,uA:()=>N,Pv:()=>_,_Z:()=>w,dh:()=>C,IH:()=>P,e3:()=>j,Oq:()=>T,Y0:()=>D,sA:()=>k,ip:()=>I,li:()=>U,F_:()=>G,pG:()=>L,Q$:()=>x,DF:()=>A,id:()=>Z,Br:()=>z,bI:()=>M,U5:()=>F,e5:()=>V,b3:()=>B,mN:()=>K,QN:()=>W,HV:()=>H,xe:()=>Q,vA:()=>X,gw:()=>Y,qs:()=>q,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>te,jQ:()=>re,nk:()=>ne,X7:()=>oe,nO:()=>ie,F4:()=>le,EU:()=>ae,Rk:()=>ce,V1:()=>ue,rg:()=>se,v6:()=>pe,d7:()=>de,Rx:()=>fe,as:()=>me,iL:()=>Ee});var n="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",l="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",u="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",p="GEONODE:EDIT_TITLE_RESOURCE",d="GEONODE:EDIT_ABSTRACT_RESOURCE",f="GEONODE:EDIT_THUMBNAIL_RESOURCE",m="GEONODE:SET_FAVORITE_RESOURCE",E="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",b="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",g="GEONODE:LOADING_RESOURCE_CONFIG",O="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",S="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",R="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",w="GEONODE_SET_RESOURCE_THUMBNAIL",C="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",P="GEONODE_DOWNLOAD_RESOURCE",j="GEONODE_DOWNLOAD_COMPLETE",T="GEONODE_UPDATE_SINGLE_RESOURCE",D="GEONODE_SET_RESOURCE_EXTENT",k="GEONODE:SET_RESOURCE_PATH_PARAMETERS",I="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",U="GEONODE:MANAGE_LINKED_RESOURCE",G="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",L="GEONODE:SET_SELECTED_LAYER_DATASET";function x(){return{type:n}}function A(e,t){return{type:o,data:e,pending:t}}function Z(e){return{type:T,data:e}}function z(e){return{type:p,title:e}}function M(e){return{type:d,abstract:e}}function F(e){return{type:f,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function V(){return{type:w}}function B(e){return{type:a,resourceType:e}}function K(e){return{type:i,error:e}}function W(e){return{type:l,properties:e}}function H(){return{type:c}}function Q(e){return{type:u,id:e}}function X(e){return{type:v,permissions:e}}function Y(e){return{type:m,favorite:e}}function q(e){return{type:C,enabled:e}}function J(e){return{type:E,bbox:e}}function $(e,t,r){return{type:y,resourceType:e,pk:t,options:r}}function ee(e,t){return{type:b,resourceType:e,options:t}}function te(e){return{type:g,loading:e}}function re(e){return{type:h,message:e}}function ne(){return{type:O}}function oe(e){return{type:S,compactPermissions:e}}function ie(e){return{type:R,compactPermissions:e}}function le(){return{type:N}}function ae(e,t,r){return{type:_,processType:e,resources:t,redirectTo:r}}function ce(e){return{type:P,resource:e}}function ue(e){return{type:j,resource:e}}function se(e){return{type:D,coords:e}}function pe(e){return{type:k,params:e}}function de(e){return{type:U,payload:e}}function fe(e){return{type:I,resource:e}}function me(e){return{type:G,plugins:e}}function Ee(e){return{type:L,layer:e}}},53645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var n=r(124852),o=r.n(n),i=r(171703),l=r(441609),a=r.n(l),c=r(22222),u=r(303744),s=r(322843),p=r(643892),d=r(805346),f=r(532425),m=r(535721),E=r(694745),v=r(399534),y=r(621886),b=r(12530),g=r(782904),O=r(17594),h=r(482100),S=["hide","loading","labelId","showLoader"],R=["linkedResources"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(null,arguments)}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resourceType;return e?o().createElement("div",{className:"gn-resource-delete-warning"},o().createElement(O.Z,{className:"warning",name:"warning"}),"  ",o().createElement(d.Z,{msgId:"gnviewer.linkedResource.deleteAndUnlinkWarning.".concat(e)})):null},C=(0,i.connect)((0,c.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.value},function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading},h.yK],(function(e,t,r){var n;return{resources:null!==(n=null==e?void 0:e.resources)&&void 0!==n?n:[],resourceType:null==e?void 0:e.resourceType,enabled:!a()(null==e?void 0:e.resources),loading:t,source:null==r?void 0:r.pk}})),{onRemove:p.d7,onDelete:p.EU.bind(null,b.zj.REMOVE_LINKED_RESOURCE),onClose:g.Xg.bind(null,b.zj.REMOVE_LINKED_RESOURCE,"value",void 0)})((function(e){var t=e.enabled,r=e.resources,n=void 0===r?[]:r,i=e.onClose,l=void 0===i?function(){}:i,c=e.onDelete,u=void 0===c?function(){}:c,s=e.onRemove,p=void 0===s?function(){}:s,m=e.loading,g=e.resourceType,O=e.source,h=function(){var e=n.map((function(e){return null==e?void 0:e.pk}));a()(O)||a()(e)||!g||p({resourceType:g,source:O,target:e,processType:b.zj.REMOVE_LINKED_RESOURCE})};return o().createElement(v.Z,null,o().createElement(E.Z,{title:o().createElement(d.Z,{msgId:"gnviewer.linkedResource.deleteTitle",msgParams:{count:n.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:m?[]:[{text:o().createElement(d.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:n.length}}),onClick:function(){h(),l()}},{text:o().createElement(d.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:n.length}}),bsStyle:"danger",onClick:function(){h(),u(n)}}],onClose:m?null:function(){return l()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},n.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(y.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),o().createElement(w,{resourceType:g}),m&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(f.Z,{size:70}))))})),P=function(e){var t=e.hide,r=e.loading,n=e.labelId,i=e.showLoader,l=_(e,S);return t?null:o().createElement(u.Z,N({},l,{disabled:r,style:{display:"flex",alignItems:"center",gap:10}}),o().createElement(d.Z,{msgId:null!=n?n:"gnviewer.linkedResource.remove"}),r&&i&&o().createElement(f.Z,{size:12}))},j=(0,i.connect)((function(e){var t,r,n,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading,viewerLinkedResource:null==e||null===(n=e.gnresource)||void 0===n?void 0:n.viewerLinkedResource,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{onRemove:p.d7,onDelete:g.Xg.bind(null,b.zj.REMOVE_LINKED_RESOURCE,"value")})((function(e){var t,r,n=m.P6.VIEWER,i=null!==(t=e.viewerLinkedResource)&&void 0!==t?t:{},l=i.linkedResources,c=_(i,R),u=1===(null==l||null===(r=l.linkedBy)||void 0===r?void 0:r.length);return o().createElement(P,N({},e,{showLoader:!u,onClick:function(){if(u)e.onDelete({resources:[c],resourceType:n});else{var t,r=null===(t=e.resource)||void 0===t?void 0:t.pk,o=null==c?void 0:c.pk;a()(r)||a()(o)||!n||e.onRemove({resourceType:n,source:r,target:o,processType:b.zj.REMOVE_LINKED_RESOURCE})}},labelId:"gnviewer.removeViewerConfiguration"}))})),T=(0,i.connect)((function(e){var t,r,n,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading,resourceParams:null==e||null===(n=e.gnresource)||void 0===n?void 0:n.params,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{})((function(e){var t,r;return o().createElement(P,N({},e,{href:"#/viewer/"+(null===(t=e.resourceParams)||void 0===t?void 0:t.appPk)+"/map/"+(null===(r=e.resource)||void 0===r?void 0:r.pk),labelId:"gnviewer.editViewerConfiguration"}))}));const D=(0,s.rx)("MapViewerConfiguration",{component:C,containers:{ActionNavbar:[{name:"RemoveMapViewer",Component:j},{name:"EditMapViewer",Component:T}]},epics:{},reducers:{}})},887157:(e,t,r)=>{var n=r(640554),o=r(588958);e.exports=function(e,t,r,i){var l=e.length;for((r=n(r))<0&&(r=-r>l?0:l+r),(i=void 0===i||i>l?l:n(i))<0&&(i+=l),i=r>i?0:o(i);r<i;)e[r++]=t;return e}},580760:(e,t,r)=>{var n=r(989881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},441761:(e,t,r)=>{var n=r(644239),o=r(637005);e.exports=function(e){return o(e)&&"[object Date]"==n(e)}},819873:(e,t,r)=>{var n=r(887157),o=r(816612);e.exports=function(e,t,r,i){var l=null==e?0:e.length;return l?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,i=l),n(e,t,r,i)):[]}},763105:(e,t,r)=>{var n=r(234963),o=r(580760),i=r(267206),l=r(701469);e.exports=function(e,t){return(l(e)?n:o)(e,i(t,3))}},647960:(e,t,r)=>{var n=r(441761),o=r(307518),i=r(531167),l=i&&i.isDate,a=l?o(l):n;e.exports=a},313880:(e,t,r)=>{var n=r(479833);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},588958:(e,t,r)=>{var n=r(829750),o=r(640554);e.exports=function(e){return e?n(o(e),0,4294967295):0}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);