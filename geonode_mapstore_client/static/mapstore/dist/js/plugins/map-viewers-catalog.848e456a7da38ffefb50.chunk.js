(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82714],{807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(727418),o=n.n(r),i=n(45697),a=n.n(i),l=n(124852),c=n.n(l),s=n(485294),u=n.n(s),f=n(472986),p=n.n(f),d=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function O(e,t,n){return t=v(t),function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,n||[],v(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function S(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return S(e=O(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:y({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&g(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);S(N,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),S(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const w=N},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(461365),o=n(356936);const i=(0,r.Z)(o.h_)},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(124852),o=n.n(r),i=n(294184),a=n.n(i),l=n(480681),c=n(807472),s=n(80717),u=n(867076),f=n(819081),p=n.n(f),d=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},E={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const y=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,u=e.onClose,f=void 0===u?function(){}:u,y=e.title,g=void 0===y?"":y,O=e.clickOutEnabled,b=void 0===O||O,v=e.showClose,h=void 0===v||v,S=e.disabledClose,C=void 0!==S&&S,N=e.showFullscreen,w=void 0!==N&&N,R=e.fullscreenType,_=void 0===R?"full":R,P=e.buttons,T=void 0===P?[]:P,j=e.size,D=void 0===j?"":j,k=e.bodyClassName,I=void 0===k?"":k,A=e.children,G=e.draggable,U=void 0!==G&&G,M=e.fullscreenState,L=e.onFullscreen,Z=e.fade,x=void 0!==Z&&Z,z=e.fitContent,V=e.modalClassName,F=void 0===V?"":V,B=e.dialogClassName,H=void 0===B?"":B,W=e.enableFooter,q=void 0===W||W,Q=m[D]||"",X=w&&"expanded"===M&&E.className[_]||"",K=n?o().createElement("div",{className:"modal-fixed ".concat(F," ")+(U?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?f:function(){},containerClassName:"ms-resizable-modal",draggable:U,modal:!0,className:a()("modal-dialog modal-content",Q,X,H,{"ms-fit-content":z})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},g),w&&E.className[_]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return L("expanded"===M?"collapsed":"expanded")},glyph:E.glyph[M][_]}),h&&f&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:C}))),o().createElement("div",{role:"body",className:I},A),q&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(s.Z,{buttons:T})))):null;return x?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},K):K}))},271609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(375875),o=n.n(r),i=n(737275),a=n(984596),l=n.n(a),c=n(692957);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){var t=e||i.ZP.getConfigProp("contextPluginsConfiguration")||"configs/pluginsConfig.json",n=l()(t);return o().all(n.map((function(e){return o().get(e).then((function(e){return e.data})).catch((function(){return null}))}))).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],o=n.slice(1);if(!r)throw new Error("plugins configuration file is broken");return(0,c.ao)(r,o.filter((function(e){return e&&"object"===s(e)})))}))}},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>i,Vy:()=>a,YB:()=>l,xm:()=>c,_f:()=>s,ek:()=>u,cd:()=>f,pt:()=>p,ww:()=>d,tR:()=>m,Js:()=>E,p2:()=>y,ZH:()=>g,eQ:()=>O,ql:()=>b,$X:()=>v,nS:()=>h,ih:()=>S,J5:()=>C,uA:()=>N,Pv:()=>w,_Z:()=>R,dh:()=>_,IH:()=>P,e3:()=>T,Oq:()=>j,Y0:()=>D,sA:()=>k,ip:()=>I,li:()=>A,Q$:()=>G,DF:()=>U,id:()=>M,Br:()=>L,bI:()=>Z,U5:()=>x,e5:()=>z,b3:()=>V,mN:()=>F,QN:()=>B,HV:()=>H,xe:()=>W,vA:()=>q,gw:()=>Q,qs:()=>X,CB:()=>K,vg:()=>Y,Z0:()=>$,lf:()=>J,jQ:()=>ee,nk:()=>te,X7:()=>ne,nO:()=>re,F4:()=>oe,EU:()=>ie,Rk:()=>ae,V1:()=>le,rg:()=>ce,v6:()=>se,d7:()=>ue,Rx:()=>fe});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",a="GEONODE:UPDATE_RESOURCE_PROPERTIES",l="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",s="GEONODE:SET_RESOURCE_ID",u="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",d="GEONODE:EDIT_THUMBNAIL_RESOURCE",m="GEONODE:SET_FAVORITE_RESOURCE",E="GEONODE:SET_MAP_THUMBNAIL",y="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",g="GEONODE:REQUEST_RESOURCE_CONFIG",O="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",v="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",S="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",C="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:RESET_GEO_LIMITS",w="GEONODE:PROCESS_RESOURCES",R="GEONODE_SET_RESOURCE_THUMBNAIL",_="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",P="GEONODE_DOWNLOAD_RESOURCE",T="GEONODE_DOWNLOAD_COMPLETE",j="GEONODE_UPDATE_SINGLE_RESOURCE",D="GEONODE_SET_RESOURCE_EXTENT",k="GEONODE:SET_RESOURCE_PATH_PARAMETERS",I="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",A="GEONODE:MANAGE_LINKED_RESOURCE";function G(){return{type:r}}function U(e,t){return{type:o,data:e,pending:t}}function M(e){return{type:j,data:e}}function L(e){return{type:f,title:e}}function Z(e){return{type:p,abstract:e}}function x(e){return{type:d,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function z(){return{type:R}}function V(e){return{type:l,resourceType:e}}function F(e){return{type:i,error:e}}function B(e){return{type:a,properties:e}}function H(){return{type:c}}function W(e){return{type:s,id:e}}function q(e){return{type:y,permissions:e}}function Q(e){return{type:m,favorite:e}}function X(e){return{type:_,enabled:e}}function K(e){return{type:E,bbox:e}}function Y(e,t,n){return{type:g,resourceType:e,pk:t,options:n}}function $(e,t){return{type:O,resourceType:e,options:t}}function J(e){return{type:b,loading:e}}function ee(e){return{type:h,message:e}}function te(){return{type:v}}function ne(e){return{type:S,compactPermissions:e}}function re(e){return{type:C,compactPermissions:e}}function oe(){return{type:N}}function ie(e,t,n){return{type:w,processType:e,resources:t,redirectTo:n}}function ae(e){return{type:P,resource:e}}function le(e){return{type:T,resource:e}}function ce(e){return{type:D,coords:e}}function se(e){return{type:k,params:e}}function ue(e){return{type:A,payload:e}}function fe(e){return{type:I,resource:e}}},586300:(e,t,n)=>{"use strict";n.d(t,{N4:()=>c,vq:()=>s,YD:()=>u,at:()=>f});var r=n(375875),o=n.n(r),i=n(271609),a=n(55035),l={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/map.json";return l.newMapConfig?new Promise((function(e){return e(l.newMapConfig)})):o().get(e).then((function(e){var t=e.data;return l.newMapConfig=t,t})).then((function(e){return window.overrideNewMapConfig?window.overrideNewMapConfig(e):e}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/geostory.json";return l.newGeoStoryConfig?new Promise((function(e){return e(l.newGeoStoryConfig)})):o().get(e).then((function(e){var t=e.data;return l.newGeoStoryConfig=t,t})).then((function(e){return window.overrideNewGeoStoryConfig?window.overrideNewGeoStoryConfig(e):e}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/styleTemplates.json";return l.styleTemplatesConfig?new Promise((function(e){return e(l.styleTemplatesConfig)})):o().get(e).then((function(e){var t=e.data;return l.styleTemplatesConfig=null==t?void 0:t.templates,l.styleTemplatesConfig}))},f=function(){return null!=l&&l.pluginsConfig?Promise.resolve(l.pluginsConfig):(0,i.Z)((0,a.PX)("geoNodeSettings.staticPath","/static/")+"mapstore/configs/pluginsConfig.json").then((function(e){return l.pluginsConfig=e,e}))}},992910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(124852),o=n.n(r),i=n(322843),a=n(171703),l=n(275982),c=n(22222),s=n(805346),u=n(303744),f=n(507412),p=n(337326),d=n(586300),m=n(782904),E=n(229698),y=n(424216),g=n(694745),O=n(399534),b=n(323827),v=n(643892),h=n(535721),S=n(12530);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}var N=["enabled","onSetControl","match","resourcesParams","location","onReplaceLocation","onSetMapViewer","onManageLinkedResource"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){var r,o,i,a;r=e,o=t,i=n[t],a=function(e,t){if("object"!=C(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==C(a)?a:a+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,a.connect)((0,c.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.mapViewersCatalog)||void 0===n?void 0:n.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.params},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[S.zj.LINK_RESOURCE])||void 0===n?void 0:n.loading},function(e){var t;return null==e||null===(t=e.router)||void 0===t?void 0:t.location}],(function(e,t,n,r){return{enabled:e,resourcesParams:t,loading:n,location:r}})),{onSetControl:m.Xg.bind(null,"mapViewersCatalog","enabled"),onReplaceLocation:l.gx,onSetMapViewer:b.DF,onManageLinkedResource:v.d7})((function(e){var t,n,i=e.enabled,a=e.onSetControl,l=(e.match,e.resourcesParams),c=(e.location,e.onReplaceLocation,e.onSetMapViewer),m=e.onManageLinkedResource,E=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,N),b=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=b[0],C=b[1],R=l||{},T=R.pk,j=R.mapPk;return(0,r.useEffect)((function(){"new"===T&&j&&C("select")}),[T,j]),o().createElement(o().Fragment,null,o().createElement(O.Z,null,o().createElement(g.Z,{title:o().createElement(s.Z,{msgId:"link"===v?"gnviewer.selectLinkedMapViewer":"gnviewer.copyConfigurationFromTitle"}),show:i,size:"lg",clickOutEnabled:!1,onClose:function(){a(!1),C("")}},o().createElement(y.Z,w({},E,{placeholderId:"gnviewer.mapViewersCatalogFilterPlaceholder",noResultId:"gnviewer.mapViewersCatalogEntriesNoResults",onSelect:function(e){"link"===v?m({resourceType:h.P6.VIEWER,source:j,target:e.pk,processType:S.zj.LINK_RESOURCE}):((0,d.at)().then((function(t){c({data:e.data},t)})),a(!1)),C("")},request:function(e){return(0,p.i9)(_(_(_({},e),{},{"filter{resource_type}":"mapviewer"},T&&"new"!==T&&{"filter{-pk}":T}),"link"!==v&&{"include[]":"data"}))},style:{position:"relative",width:"100%",height:"100%"}})))),o().createElement(O.Z,null,o().createElement(g.Z,{title:"",show:"select"===v,clickOutEnabled:!1,onClose:null,fitContent:!0,modalClassName:"gn-new-map-viewer-action"},o().createElement("div",{className:"gn-new-map-viewer-action-wrapper"},o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"link",className:"fa-4x"})),o().createElement(u.Z,{variant:"primary",onClick:function(){C("link"),a(!0)}},o().createElement(s.Z,{msgId:"gnviewer.linkToViewer"}))),o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"cogs",className:"fa-4x"})),o().createElement(u.Z,{variant:"primary",onClick:function(){return C("")}},o().createElement(s.Z,{msgId:"gnviewer.createNewViewer"})))))))})),j=(0,a.connect)((0,c.P1)([],(function(){return{}})),{onClick:m.Xg.bind(null,"mapViewersCatalog","enabled",!0)})((function(e){var t=e.onClick,n=e.size,r=e.variant;return o().createElement(u.Z,{size:n,onClick:function(){t()},variant:r},o().createElement(s.Z,{msgId:"gnviewer.copyConfigurationFrom"}))}));const D=(0,i.rx)("MapViewersCatalog",{component:T,containers:{ActionNavbar:{name:"MapViewersCatalog",Component:j}},epics:E.Z,reducers:{}})},819081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);