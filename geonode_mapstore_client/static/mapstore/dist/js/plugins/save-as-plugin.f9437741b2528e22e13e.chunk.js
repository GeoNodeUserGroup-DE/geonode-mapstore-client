(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103],{38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(480681),o=r(124852),l=r.n(o),i=r(294184),a=r.n(i),c=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}var u=r(815135);const f=(d=n.zx,l().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,i=void 0===o?function(){}:o,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return l().createElement(d,s({ref:t,className:r?a()("disabled",n):n,onClick:function(){r||i.apply(void 0,arguments)}},u),u.children)})));var d;(0,u.Z)(n.zx)},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(727418),o=r.n(n),l=r(45697),i=r.n(l),a=r(124852),c=r.n(a),s=r(485294),u=r.n(s),f=r(472986),d=r.n(f),p=r(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function g(e,t,r){return t=O(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e,t,r){return(t=w(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var P=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return j(e=g(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(p.Z,{msgId:"loading"}),c().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),j(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),j(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),j(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);j(P,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),j(P,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const S=P},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n);const l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(461365),o=r(356936);const l=(0,n.Z)(o.h_)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),l=r(294184),i=r.n(l),a=r(480681),c=r(807472),s=r(80717),u=r(867076),f=r(819081),d=r.n(f),p=r(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},v={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,l=e.loadingText,u=e.onClose,f=void 0===u?function(){}:u,b=e.title,y=void 0===b?"":b,g=e.clickOutEnabled,h=void 0===g||g,O=e.showClose,E=void 0===O||O,j=e.disabledClose,w=void 0!==j&&j,P=e.showFullscreen,S=void 0!==P&&P,C=e.fullscreenType,N=void 0===C?"full":C,k=e.buttons,Z=void 0===k?[]:k,I=e.size,x=void 0===I?"":I,z=e.bodyClassName,R=void 0===z?"":z,_=e.children,T=e.draggable,D=void 0!==T&&T,A=e.fullscreenState,U=e.onFullscreen,L=e.fade,Y=void 0!==L&&L,B=e.fitContent,F=e.modalClassName,$=void 0===F?"":F,G=e.dialogClassName,J=void 0===G?"":G,V=e.enableFooter,X=void 0===V||V,q=m[x]||"",K=S&&"expanded"===A&&v.className[N]||"",M=r?o().createElement("div",{className:"modal-fixed ".concat($," ")+(D?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?f:function(){},containerClassName:"ms-resizable-modal",draggable:D,modal:!0,className:i()("modal-dialog modal-content",q,K,J,{"ms-fit-content":B})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),S&&v.className[N]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return U("expanded"===A?"collapsed":"expanded")},glyph:v.glyph[A][N]}),E&&f&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:w}))),o().createElement("div",{role:"body",className:R},_),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?l:null),o().createElement(s.Z,{buttons:Z})))):null;return Y?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},M):M}))},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),l=r(867076),i=r(957557),a=r.n(i),c=r(815135);const s=(0,l.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(86638),o=r(285547),l=r(45697),i=r.n(l),a=r(984596),c=r.n(a),s=r(701469),u=r.n(s),f=r(414293),d=r.n(f),p=r(747037),m=r.n(p),v=r(867076),b=["messages","locale"];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"msgId";return(0,v.compose)((0,v.getContext)({messages:i().object,locale:i().string}),(0,v.mapProps)((function(l){var i=l.messages,a=l.locale,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(l,b);return h(h({},s),c()(e).reduce(function(e,t,r){var l=t.messages,i=t.locale,a=t.mode;return function(){var t=arguments.length>1?arguments[1]:void 0;return h(h({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},O({},t,"msgId"===a?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(t))return t.map((function(o){var l=(0,n.S$)(e,o[r]||m()(o)&&o||"");return h(h({},o),{},O({},r,d()(l)?t:l))}));var o=t?(0,n.S$)(e,t):t;return d()(o)?t:o}(l,e[t],r):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(e))return e.map((function(n){var l=(0,o.Z)(n[r]||m()(n)&&n||"",t);return h(h({},n),{},O({},r,d()(l)?e:l))}));var n=(0,o.Z)(e,t);return d()(n)?e:n}(e[t],i,r)))}}(s,{locale:a,messages:i,mode:r},t),{}))})))}},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),l=r(867076),i=r(45697),a=r.n(i),c=r(957557),s=r.n(c),u=r(480681),f=r(950966);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function m(e,t,r){return t=b(t),function(e,t){if(t&&("object"==d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}const O=(0,l.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(r,t),n=r,(i=[{key:"renderPopover",value:function(){return o().createElement(u.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,l.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&p(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(o().Component),g(t,"propTypes",{popover:a().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),l=r(819081),i=r.n(l),a=r(480681),c=r(90085),s=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,l=void 0===n?{}:n,f=e.btnDefaultProps,d=void 0===f?{}:f,p=e.transitionProps,m=void 0===p?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:p,v=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,l=e.Element,i=e.renderButton,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s);return n?i||l&&o().createElement(l,u({key:a.key||t},a))||o().createElement(c.Z,u({key:a.key||t},d,a)):null}))};return o().createElement(a.hE,l,m?o().createElement(i(),m,v()):v())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),l=r(867076),i=r(805346),a=r(957557),c=r.n(a),s=r(480681),u=r(532425),f=r(212610),d=r(617252),p=r(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(null,arguments)}const b=(0,l.compose)(f.Z,d.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,l=void 0===n?"":n,a=e.textId,f=e.glyphClassName,d=void 0===f?"":f,b=e.loaderProps,y=void 0===b?{}:b,g=e.children,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,m);return o().createElement(p.Z,c()(h,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(s.gG,{glyph:t,className:d}):null,a?o().createElement(i.Z,{msgId:a}):l,r?o().createElement(u.Z,v({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},y)):null,g)}))},793520:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),o=r.n(n),l=r(480681);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(null,arguments)}l.Lt.Item=l.sN,l.Lt.Divider=function(e){return o().createElement(l.sN,i({},e,{divider:!0}))};const a=l.Lt},881114:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var n=r(124852),o=r.n(n),l=r(171703),i=r(22222),a=r(322843),c=r(782904),s=r(805346),u=r(800827),f=r(274621),d=r(303744),p=r(73443),m=r(925108),v=r(572036),b=r(162170),y=r(18576),g=r(45697),h=r.n(g),O=r(694745),E=r(480681),j=r(993451),w=r(532425),P=r(399534);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,i,a=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var N=(0,j.Z)("placeholder")(E.NI);function k(e){var t=e.update,r=e.error,l=e.success,i=e.labelId,a=e.resource,c=e.contentId,u=e.saving,f=e.loading,d=e.enabled,p=e.onClose,m=e.onSave,v=e.onClear,b=e.hideDescription,y=e.copy,g=S((0,n.useState)(),2),h=g[0],j=g[1],C=S((0,n.useState)(""),2),k=C[0],Z=C[1],I=S((0,n.useState)(""),2),x=I[0],z=I[1],R=S((0,n.useState)(),2),_=R[0],T=R[1],D=(0,n.useRef)();D.current={contentId:c,resource:a};var A=(0,n.useRef)(null);(0,n.useEffect)((function(){v()}),[d]),(0,n.useEffect)((function(){if(!f){var e=D.current.resource||{};j(e.thumbnail_url),Z(e.title),z(e.abstract),T(e.title?void 0:"error")}}),[d,f]);var U=f||u;return o().createElement(P.Z,null,o().createElement("div",{ref:A,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(n=(r=y?{title:k,isUpdate:t,content:c,image:h,text:x,reload:!1}:{title:k,isUpdate:t,content:c,image:h,text:x,reload:!0}).title,o=r.isUpdate,l=r.content,i=r.image,a=r.text,s=r.reload,m(o?l:void 0,{thumbnail:i,name:n,description:a},s));var r,n,o,l,i,a,s}},o().createElement(O.Z,{title:o().createElement(s.Z,{msgId:i}),show:d,fitContent:!0,clickOutEnabled:!1,buttons:U?[]:[{text:o().createElement(s.Z,{msgId:"close"}),onClick:function(){return p()}},{text:o().createElement(s.Z,{msgId:i}),disabled:!!_,bsStyle:"primary",onClick:function(){return m(t?c:void 0,{thumbnail:h,name:k,description:x},!0)}}],onClose:U?null:function(){return p()}},r&&o().createElement(E.bZ,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"map.mapError.errorDefault"}))),l&&o().createElement(E.bZ,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(E.l0,{onSubmit:function(e){return e.preventDefault()}},o().createElement(E.cw,{validationState:_},o().createElement(E.J$,null,o().createElement(s.Z,{msgId:"gnviewer.title"})),o().createElement(N,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:k,onChange:function(e){Z(e.target.value),T(e.target.value?void 0:"error")},onBlur:function(e){T(e.target.value?void 0:"error")}})),!b&&o().createElement(E.cw,null,o().createElement(E.J$,null,o().createElement(s.Z,{msgId:"saveDialog.description"})),o().createElement(N,{placeholder:"saveDialog.descriptionPlaceholder",value:x,onChange:function(e){return z(e.target.value)}}))),U&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(w.Z,{size:70})))))}k.propTypes={update:h().bool,labelId:h().string,contentId:h().oneOfType([h().string,h().number]),resource:h().object,loading:h().bool,enabled:h().bool,onClose:h().func,onSave:h().func,onInit:h().func,onClear:h().func,error:h().oneOfType([h().string,h().object]),success:h().oneOfType([h().string,h().object]),thumbnailOptions:h().object},k.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const Z=k;var I=r(482100),x=r(12530),z=r(535721),R=r(643892),_=r(452992),T=r(793520),D=r(507412),A=r(706428),U=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(null,arguments)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return(t=function(e){var t=function(e){if("object"!=L(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=(0,l.connect)((0,i.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[x.zj.COPY_RESOURCE])||void 0===r?void 0:r.value},u._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},I.fg,I.V$,_.SJ],(function(e,t,r,n,o,l,i,a,c){return{enabled:!!e,contentId:i||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||r,saving:n,error:o,success:l,isNew:a}})),{onClose:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value",void 0),onSave:p.Vj,onCopy:R.EU.bind(null,x.zj.COPY_RESOURCE),onClear:p.rG})((function(e){e.resources;var t,r=e.onSave,n=e.onCopy,l=e.isNew,i=e.closeOnSave,a=e.labelId,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,U);return o().createElement(Z,Y({},c,{hideDescription:!l,copy:!l,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:a||"save",onSave:function(e,t,o){var a;l?r(e,t,o):n([F(F({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(a=c.resource)||void 0===a?void 0:a.title)})]),i&&c.onClose()}}))})),J=function(e){return function(t){var r=(0,f.np)(e);if(!r)return!1;var n=(0,I.V$)(e),o=(0,I.ez)(e);return!(!n||!o)||(0,z.Os)(t,r)}},V=function(e){return"object"===L(e)&&!!e},X=(0,l.connect)((0,i.P1)(I.yK,I.YR,J,(function(e,t,r){return{enabled:!!r(e),resource:e,dirtyState:!V(t)&&!!t,disabled:V(t)}})),{onClick:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value")})((0,A.Z)((function(e){var t=e.onClick,r=e.variant,n=e.size,l=e.resource,i=e.dirtyState,a=e.disabled;return o().createElement(d.Z,{variant:i?"warning":r||"primary",size:n,disabled:a,onClick:function(){return t([l])}},o().createElement(s.Z,{msgId:"saveAs"}))}))),q=(0,l.connect)((0,i.P1)([J],(function(e){return{canCopy:e}})),{onCopy:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value")})((function(e){var t=e.resource,r=e.canCopy,n=e.onCopy;return r(t)?o().createElement(T.Z.Item,{onClick:function(){return n([t])}},o().createElement(D.Z,{name:"copy"})," ",o().createElement(s.Z,{msgId:"gnviewer.clone"})):null}));const K=(0,a.rx)("SaveAs",{component:G,containers:{ActionNavbar:{name:"SaveAs",Component:X},ResourcesGrid:{name:x.zj.COPY_RESOURCE,target:"cardOptions",Component:q}},epics:F({},y.ZP),reducers:{gnresource:v.Z,gnsave:b.Z,controls:m.Z}})},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);