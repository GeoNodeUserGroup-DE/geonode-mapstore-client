"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16164],{807472:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(727418),o=t.n(r),l=t(45697),i=t.n(l),a=t(124852),s=t.n(a),c=t(485294),u=t.n(c),d=t(472986),p=t.n(d),E=t(805346);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R(r.key),r)}}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function g(e,n){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},g(e,n)}function h(e,n,t){return(n=R(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){var n=function(e){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=f(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(n)?n:n+""}var N=function(e){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return h(e=function(e,n,t){return n=b(n),function(e,n){if(n&&("object"==f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(n,t||[],b(e).constructor):n.apply(e,t))}(this,n,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(E.Z,{msgId:"loading"}),s().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),h(e,"renderRole",(function(n){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===n}))})),h(e,"hasRole",(function(n){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===n})).length>0})),h(e,"onClickOut",(function(n){e.props.onClickOut&&e.mask===n.target&&e.props.onClickOut(n)})),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&g(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){var e=this,n=s().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),t=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},n):n,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(n){e.mask=n},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},t):t}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(s().Component);h(N,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),h(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const S=N},975480:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(124852),o=t.n(r);const l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,n=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},694745:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(124852),o=t.n(r),l=t(294184),i=t.n(l),a=t(271418),s=t(807472),c=t(80717),u=t(867076),d=t(819081),p=t.n(d),E=t(975480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var n=e.initialFullscreenState;return void 0===n?"collapsed":n}))((function(e){var n=e.show,t=void 0!==n&&n,r=e.loading,l=e.loadingText,u=e.onClose,d=void 0===u?function(){}:u,v=e.title,y=void 0===v?"":v,O=e.clickOutEnabled,b=void 0===O||O,g=e.showClose,h=void 0===g||g,R=e.disabledClose,N=void 0!==R&&R,S=e.showFullscreen,_=void 0!==S&&S,C=e.fullscreenType,T=void 0===C?"full":C,w=e.buttons,P=void 0===w?[]:w,D=e.size,j=void 0===D?"":D,I=e.bodyClassName,k=void 0===I?"":I,U=e.children,G=e.draggable,L=void 0!==G&&G,A=e.fullscreenState,Z=e.onFullscreen,z=e.fade,x=void 0!==z&&z,M=e.fitContent,V=e.modalClassName,B=void 0===V?"":V,F=e.dialogClassName,K=void 0===F?"":F,W=e.enableFooter,H=void 0===W||W,Q=f[j]||"",Y=_&&"expanded"===A&&m.className[T]||"",X=t?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(L?"ms-draggable":"")},o().createElement(s.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?d:function(){},containerClassName:"ms-resizable-modal",draggable:L,modal:!0,className:i()("modal-dialog modal-content",Q,Y,K,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),_&&m.className[T]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return Z("expanded"===A?"collapsed":"expanded")},glyph:m.glyph[A][T]}),h&&d&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:N}))),o().createElement("div",{role:"body",className:k},U),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(E.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?l:null),o().createElement(c.Z,{buttons:P})))):null;return x?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},X):X}))},212610:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(124852),o=t.n(r),l=t(867076),i=t(957557),a=t.n(i),s=t(815135);const c=(0,l.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.disabled,t=e.noTooltipWhenDisabled;return!(void 0!==t&&t&&n)}),s.Z,(function(e){return function(n){return o().createElement(e,a()(n,["tooltipId","tooltip","noTooltipWhenDisabled"]),n.children)}}))},617252:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(124852),o=t.n(r),l=t(867076),i=t(45697),a=t.n(i),s=t(957557),c=t.n(s),u=t(271418),d=t(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,n){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},v(e,n)}function y(e,n,t){return(n=O(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){var n=function(e){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=p(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(n)?n:n+""}const b=(0,l.branch)((function(e){return e.popover}),(function(e){var n;return n=function(n){function t(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,n,t){return n=m(n),function(e,n){if(n&&("object"==p(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(n,t||[],m(e).constructor):n.apply(e,t))}(this,t,arguments)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&v(e,n)}(t,n),r=t,(i=[{key:"renderPopover",value:function(){return o().createElement(u.J2,c()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var n=(0,l.toClass)(e);return o().createElement(n,c()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&E(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,i}(o().Component),y(n,"propTypes",{popover:a().object}),y(n,"defaultProps",{popover:{trigger:!0}}),n}))},80717:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(124852),o=t.n(r),l=t(819081),i=t.n(l),a=t(271418),s=t(90085),c=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(null,arguments)}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.buttons,t=void 0===n?[]:n,r=e.btnGroupProps,l=void 0===r?{}:r,d=e.btnDefaultProps,p=void 0===d?{}:d,E=e.transitionProps,f=void 0===E?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:E,m=function(){return t.map((function(e,n){var t=e.visible,r=void 0===t||t,l=e.Element,i=e.renderButton,a=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,c);return r?i||l&&o().createElement(l,u({key:a.key||n},a))||o().createElement(s.Z,u({key:a.key||n},p,a)):null}))};return o().createElement(a.hE,l,f?o().createElement(i(),f,m()):m())}},90085:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(124852),o=t.n(r),l=t(867076),i=t(805346),a=t(957557),s=t.n(a),c=t(271418),u=t(532425),d=t(212610),p=t(617252),E=t(624847),f=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(null,arguments)}const v=(0,l.compose)(d.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.glyph,t=e.loading,r=e.text,l=void 0===r?"":r,a=e.textId,d=e.glyphClassName,p=void 0===d?"":d,v=e.loaderProps,y=void 0===v?{}:v,O=e.children,b=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,f);return o().createElement(E.Z,s()(b,["pullRight","confirmNo","confirmYes"]),n&&!t?o().createElement(c.gG,{glyph:n,className:p}):null,a?o().createElement(i.Z,{msgId:a}):l,t?o().createElement(u.Z,m({className:"ms-loader".concat(b.bsStyle&&" ms-loader-"+b.bsStyle||"").concat(b.bsSize&&" ms-loader-"+b.bsSize||"")},y)):null,O)}))},643892:(e,n,t)=>{t.d(n,{W:()=>r,Zf:()=>o,Eu:()=>l,Vy:()=>i,YB:()=>a,xm:()=>s,_f:()=>c,ek:()=>u,cd:()=>d,pt:()=>p,ww:()=>E,tR:()=>f,Js:()=>m,p2:()=>v,ZH:()=>y,eQ:()=>O,ql:()=>b,$X:()=>g,nS:()=>h,ih:()=>R,J5:()=>N,uA:()=>S,Pv:()=>_,_Z:()=>C,dh:()=>T,IH:()=>w,e3:()=>P,Oq:()=>D,Y0:()=>j,sA:()=>I,ip:()=>k,li:()=>U,F_:()=>G,um:()=>L,Q$:()=>A,DF:()=>Z,id:()=>z,Br:()=>x,bI:()=>M,U5:()=>V,e5:()=>B,b3:()=>F,mN:()=>K,QN:()=>W,HV:()=>H,xe:()=>Q,vA:()=>Y,gw:()=>X,qs:()=>q,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>ne,jQ:()=>te,nk:()=>re,X7:()=>oe,nO:()=>le,F4:()=>ie,EU:()=>ae,Rk:()=>se,V1:()=>ce,rg:()=>ue,v6:()=>de,d7:()=>pe,Rx:()=>Ee,as:()=>fe,jv:()=>me});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",l="GEONODE:RESOURCE_ERROR",i="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",s="GEONODE:SET_NEW_RESOURCE",c="GEONODE:SET_RESOURCE_ID",u="GEONODE:SET_RESOURCE_PERMISSIONS",d="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",E="GEONODE:EDIT_THUMBNAIL_RESOURCE",f="GEONODE:SET_FAVORITE_RESOURCE",m="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",O="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",g="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",R="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",S="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",C="GEONODE_SET_RESOURCE_THUMBNAIL",T="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",w="GEONODE_DOWNLOAD_RESOURCE",P="GEONODE_DOWNLOAD_COMPLETE",D="GEONODE_UPDATE_SINGLE_RESOURCE",j="GEONODE_SET_RESOURCE_EXTENT",I="GEONODE:SET_RESOURCE_PATH_PARAMETERS",k="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",U="GEONODE:MANAGE_LINKED_RESOURCE",G="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",L="GEONODE:SET_SELECTED_LAYER";function A(){return{type:r}}function Z(e,n){return{type:o,data:e,pending:n}}function z(e){return{type:D,data:e}}function x(e){return{type:d,title:e}}function M(e){return{type:p,abstract:e}}function V(e){return{type:E,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function B(){return{type:C}}function F(e){return{type:a,resourceType:e}}function K(e){return{type:l,error:e}}function W(e){return{type:i,properties:e}}function H(){return{type:s}}function Q(e){return{type:c,id:e}}function Y(e){return{type:v,permissions:e}}function X(e){return{type:f,favorite:e}}function q(e){return{type:T,enabled:e}}function J(e){return{type:m,bbox:e}}function $(e,n,t){return{type:y,resourceType:e,pk:n,options:t}}function ee(e,n){return{type:O,resourceType:e,options:n}}function ne(e){return{type:b,loading:e}}function te(e){return{type:h,message:e}}function re(){return{type:g}}function oe(e){return{type:R,compactPermissions:e}}function le(e){return{type:N,compactPermissions:e}}function ie(){return{type:S}}function ae(e,n,t){return{type:_,processType:e,resources:n,redirectTo:t}}function se(e){return{type:w,resource:e}}function ce(e){return{type:P,resource:e}}function ue(e){return{type:j,coords:e}}function de(e){return{type:I,params:e}}function pe(e){return{type:U,payload:e}}function Ee(e){return{type:k,resource:e}}function fe(e){return{type:G,plugins:e}}function me(e){return{type:L,layer:e}}},53645:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var r=t(124852),o=t.n(r),l=t(171703),i=t(441609),a=t.n(i),s=t(22222),c=t(638323),u=t(322843),d=t(643892),p=t(805346),E=t(532425),f=t(535721),m=t(694745),v=t(399534),y=t(205342),O=t(12530),b=t(782904),g=t(17594),h=t(299392),R=["hide","loading","labelId","showLoader"],N=["linkedResources"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S.apply(null,arguments)}function _(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var C=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resourceType;return e?o().createElement("div",{className:"gn-resource-delete-warning"},o().createElement(g.Z,{className:"warning",name:"warning"}),"  ",o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteAndUnlinkWarning.".concat(e)})):null},T=(0,l.connect)((0,s.P1)([function(e){var n,t;return null==e||null===(n=e.controls)||void 0===n||null===(t=n[O.zj.REMOVE_LINKED_RESOURCE])||void 0===t?void 0:t.value},function(e){var n,t;return null==e||null===(n=e.controls)||void 0===n||null===(t=n[O.zj.REMOVE_LINKED_RESOURCE])||void 0===t?void 0:t.loading},h.yK],(function(e,n,t){var r;return{resources:null!==(r=null==e?void 0:e.resources)&&void 0!==r?r:[],resourceType:null==e?void 0:e.resourceType,enabled:!a()(null==e?void 0:e.resources),loading:n,source:null==t?void 0:t.pk}})),{onRemove:d.d7,onDelete:d.EU.bind(null,O.zj.REMOVE_LINKED_RESOURCE),onClose:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value",void 0)})((function(e){var n=e.enabled,t=e.resources,r=void 0===t?[]:t,l=e.onClose,i=void 0===l?function(){}:l,s=e.onDelete,c=void 0===s?function(){}:s,u=e.onRemove,d=void 0===u?function(){}:u,f=e.loading,b=e.resourceType,g=e.source,h=function(){var e=r.map((function(e){return null==e?void 0:e.pk}));a()(g)||a()(e)||!b||d({resourceType:b,source:g,target:e,processType:O.zj.REMOVE_LINKED_RESOURCE})};return o().createElement(v.Z,null,o().createElement(m.Z,{title:o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteTitle",msgParams:{count:r.length}}),show:n,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:f?[]:[{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){h(),i()}},{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){h(),c(r)}}],onClose:f?null:function(){return i()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,n){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+n},o().createElement(y.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),o().createElement(C,{resourceType:b}),f&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(E.Z,{size:70}))))})),w=function(e){var n=e.hide,t=e.loading,r=e.labelId,l=e.showLoader,i=_(e,R);return n?null:o().createElement(c.Z,S({},i,{disabled:t,style:{display:"flex",alignItems:"center",gap:10}}),o().createElement(p.Z,{msgId:null!=r?r:"gnviewer.linkedResource.remove"}),t&&l&&o().createElement(E.Z,{size:12}))},P=(0,l.connect)((function(e){var n,t,r,o;return{loading:null==e||null===(n=e.controls)||void 0===n||null===(t=n[O.zj.REMOVE_LINKED_RESOURCE])||void 0===t?void 0:t.loading,viewerLinkedResource:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.viewerLinkedResource,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{onRemove:d.d7,onDelete:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value")})((function(e){var n,t,r=f.P6.VIEWER,l=null!==(n=e.viewerLinkedResource)&&void 0!==n?n:{},i=l.linkedResources,s=_(l,N),c=1===(null==i||null===(t=i.linkedBy)||void 0===t?void 0:t.length);return o().createElement(w,S({},e,{showLoader:!c,onClick:function(){if(c)e.onDelete({resources:[s],resourceType:r});else{var n,t=null===(n=e.resource)||void 0===n?void 0:n.pk,o=null==s?void 0:s.pk;a()(t)||a()(o)||!r||e.onRemove({resourceType:r,source:t,target:o,processType:O.zj.REMOVE_LINKED_RESOURCE})}},labelId:"gnviewer.removeViewerConfiguration"}))})),D=(0,l.connect)((function(e){var n,t,r,o;return{loading:null==e||null===(n=e.controls)||void 0===n||null===(t=n[O.zj.REMOVE_LINKED_RESOURCE])||void 0===t?void 0:t.loading,resourceParams:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.params,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{})((function(e){var n,t;return o().createElement(w,S({},e,{href:"#/viewer/"+(null===(n=e.resourceParams)||void 0===n?void 0:n.appPk)+"/map/"+(null===(t=e.resource)||void 0===t?void 0:t.pk),labelId:"gnviewer.editViewerConfiguration"}))}));const j=(0,u.rx)("MapViewerConfiguration",{component:T,containers:{ActionNavbar:[{name:"RemoveMapViewer",Component:P},{name:"EditMapViewer",Component:D}]},epics:{},reducers:{}})}}]);