(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235],{580416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>a,OX:()=>l,sb:()=>s,K$:()=>c,k7:()=>u,cX:()=>p,x9:()=>d,vs:()=>f,oE:()=>m,Po:()=>y,qv:()=>v,cI:()=>g,g6:()=>h,I4:()=>b,l$:()=>E,Xv:()=>w,k3:()=>S,CQ:()=>O,R8:()=>P,HN:()=>R,sH:()=>N,c7:()=>C,_7:()=>j,eF:()=>A,O6:()=>T,ED:()=>_,RP:()=>k,sF:()=>x,VP:()=>I,He:()=>L,vO:()=>D,WO:()=>z,bh:()=>M,pV:()=>Y,MK:()=>G,ZF:()=>Z,tV:()=>F,Dv:()=>H,Yz:()=>W,kI:()=>U,XG:()=>V,A4:()=>X,Rp:()=>q,$o:()=>Q,ct:()=>$,oh:()=>B,$h:()=>K,ud:()=>J,Qr:()=>ee,LR:()=>te,nN:()=>ne,UG:()=>re,F5:()=>oe,c9:()=>ie,Jh:()=>ae,Xy:()=>le});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",l="SORT_NODE",s="REMOVE_NODE",c="UPDATE_NODE",u="MOVE_NODE",p="LAYER_LOADING",d="LAYER_LOAD",f="LAYER_ERROR",m="ADD_LAYER",y="ADD_GROUP",v="REMOVE_LAYER",g="SHOW_SETTINGS",h="HIDE_SETTINGS",b="UPDATE_SETTINGS",E="REFRESH_LAYERS",w="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",O="LAYERS_REFRESH_ERROR",P="LAYERS:BROWSE_DATA",R="LAYERS:DOWNLOAD",N="LAYERS:CLEAR_LAYERS",C="LAYERS:SELECT_NODE",j="LAYERS:FILTER_LAYERS",A="LAYERS:SHOW_LAYER_METADATA",T="LAYERS:HIDE_LAYER_METADATA",_="LAYERS:UPDATE_SETTINGS_PARAMS";function k(e,t,n){return{type:g,node:e,nodeType:t,options:n}}function x(){return{type:h}}function I(e){return{type:b,options:e}}function L(e,t){return{type:r,newProperties:t,layer:e}}function D(e,t){return{type:o,layer:e,params:t}}function z(e,t){return{type:i,newProperties:t,group:e}}function M(e,t,n){return{type:a,node:e,nodeType:t,status:!n}}function Y(e){return{type:"CONTEXT_NODE",node:e}}function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:l,node:e,order:t,sortLayers:n}}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:s,node:e,nodeType:t,removeEmpty:n}}function F(e,t,n){return{type:c,node:e,nodeType:t,options:n}}function H(e,t,n){return{type:u,node:e,groupId:t,index:n}}function W(e){return{type:p,layerId:e}}function U(e,t){return{type:d,layerId:e,error:t}}function V(e,t,n){return{type:f,layerId:e,tilesCount:t,tilesErrorCount:n}}function X(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:m,layer:e,foreground:t}}function q(e,t,n){return{type:y,group:e,parent:t,options:n}}function Q(e){return{type:v,layerId:e}}function $(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function B(e){return{type:S,layers:e}}function K(e,t){return{type:O,layers:e,error:t}}function J(e,t,n,r){return{type:w,dimension:e,value:t,options:n,layers:r}}function ee(e){return{type:P,layer:e}}function te(e){return{type:R,layer:e}}function ne(){return{type:N}}function re(e,t,n){return{type:C,id:e,nodeType:t,ctrlKey:n}}function oe(e){return{type:j,text:e}}function ie(e,t){return{type:A,metadataRecord:e,maskLoading:t}}function ae(){return{type:T}}function le(e,t){return{type:_,newParams:e,update:t}}},965539:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(e){var t=e.id,n=e.children,r=e.header,i=e.footer,l=e.columns,s=e.height,c=e.style,u=void 0===c?{}:c,p=e.className,d=e.bodyClassName,f=void 0===d?"ms2-border-layout-body":d;return o().createElement("div",{id:t,className:p,style:a({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},u)},r,o().createElement("div",{className:f,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},s?o().createElement("div",{style:{height:s}},n):n),s?o().createElement("div",{style:{height:s}},l):l),i)}},807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(727418),o=n.n(r),i=n(675263),a=n.n(i),l=n(124852),s=n.n(l),c=n(485294),u=n.n(c),p=n(472986),d=n.n(p),f=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,r,i,a=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function l(){var e;g(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(w(e=a.call.apply(a,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(f.Z,{msgId:"loading"}),s().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),O(w(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),O(w(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),O(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),n=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(s().Component);O(P,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),O(P,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const R=P},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(294184),a=n.n(i),l=n(480681),s=n(807472),c=n(80717),u=n(867076),p=n(819081),d=n.n(p),f=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,u=e.onClose,p=void 0===u?function(){}:u,v=e.title,g=void 0===v?"":v,h=e.clickOutEnabled,b=void 0===h||h,E=e.showClose,w=void 0===E||E,S=e.disabledClose,O=void 0!==S&&S,P=e.showFullscreen,R=void 0!==P&&P,N=e.fullscreenType,C=void 0===N?"full":N,j=e.buttons,A=void 0===j?[]:j,T=e.size,_=void 0===T?"":T,k=e.bodyClassName,x=void 0===k?"":k,I=e.children,L=e.draggable,D=void 0!==L&&L,z=e.fullscreenState,M=e.onFullscreen,Y=e.fade,G=void 0!==Y&&Y,Z=e.fitContent,F=e.modalClassName,H=void 0===F?"":F,W=e.dialogClassName,U=void 0===W?"":W,V=e.enableFooter,X=void 0===V||V,q=m[_]||"",Q=R&&"expanded"===z&&y.className[C]||"",$=n?o().createElement("div",{className:"modal-fixed ".concat(H," ")+(D?"ms-draggable":"")},o().createElement(s.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?p:function(){},containerClassName:"ms-resizable-modal",draggable:D,modal:!0,className:a()("modal-dialog modal-content",q,Q,U,{"ms-fit-content":Z})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},g),R&&y.className[C]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return M("expanded"===z?"collapsed":"expanded")},glyph:y.glyph[z][C]}),w&&p&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:O}))),o().createElement("div",{role:"body",className:x},I),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(c.Z,{buttons:A})))):null;return G?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},$):$}))},416919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),i=n(732833),a=n(965539),l=n(867076),s=n(480681),c=n(38560),u={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const p=function(e){var t=e.position,n=void 0===t?"right":t,r=e.onClose,i=e.bsStyle,a=void 0===i?"default":i,l=e.title,p=void 0===l?"":l,d=e.fullscreen,f=void 0!==d&&d,m=e.showFullscreen,y=void 0!==m&&m,v=e.glyph,g=void 0===v?"info-sign":v,h=e.additionalRows,b=e.onFullscreen,E=void 0===b?function(){}:b,w=r?o().createElement(c.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:r,bsStyle:a},o().createElement(s.Glyphicon,{glyph:"1-close"})):null,S=y?o().createElement(c.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:a,onClick:function(){return E(!f)}},o().createElement(s.Glyphicon,{glyph:u[n]&&u[n][f]||"resize-full"})):o().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+a),style:{display:"flex"}},o().createElement(s.Glyphicon,{glyph:g,className:"".concat("default"===a?"text-primary":"")})),O="left"===n?[w,S]:[S,w];return o().createElement(s.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+a},o().createElement(s.Row,null,o().createElement(s.Col,{xs:2},O[0]),o().createElement(s.Col,{xs:8},o().createElement("h4",null,p)),o().createElement(s.Col,{xs:2},O[1])),h)},d=(0,l.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,n=e.className,r=void 0===n?"":n,l=e.fullscreen,s=void 0!==l&&l,c=e.position,u=e.open,d=e.size,f=void 0===d?550:d,m=e.style,y=void 0===m?{}:m,v=e.zIndex,g=void 0===v?1030:v,h=e.onClose,b=e.bsStyle,E=e.title,w=e.showFullscreen,S=void 0!==w&&w,O=e.glyph,P=e.header,R=e.footer,N=e.children,C=e.onFullscreen,j=void 0===C?function(){}:C,A=e.fixed,T=void 0!==A&&A,_=e.resizable,k=void 0!==_&&_,x=e.hideHeader;return o().createElement("div",{className:"ms-side-panel "+(T?"":"ms-absolute-dock ")+(k?"":"react-dock-no-resize ")+r},o().createElement(i.default,{fluid:t||s,position:c,dimMode:"none",isVisible:u,size:s?1:f,dockStyle:y,zIndex:g},o().createElement(a.Z,{header:!x&&u&&o().createElement(p,{position:c,onClose:h,bsStyle:b,title:E,fullscreen:s,showFullscreen:S,glyph:O,additionalRows:P,onFullscreen:j}),footer:u&&R},u&&N)))}))},632107:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(124852),o=n.n(r),i=n(867076),a=n(965539),l=n(416919),s=n(694745),c=["children","header"];var u=(0,i.renameProps)({open:"show"})((function(e){var t=e.children,n=e.header,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c);return o().createElement(s.Z,r,o().createElement(a.Z,{header:o().createElement("div",{className:"ms-header"},n)},t))}));const p=(0,i.branch)((function(e){return!e.dock}),(function(){return function(e){return o().createElement(u,e)}}))(l.Z)},822780:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Support:()=>re,default:()=>ae});var r=n(124852),o=n.n(r),i=n(171703),a=n(22222),l=n(675110),s=n(671314),c=n(727418),u=n.n(c),p="SWIPE:SET_ACTIVE",d="SWIPE:SET_MODE",f="SWIPE:SET_SWIPE_TOOL_DIRECTION",m="SWIPE:SET_SPY_TOOL_RADIUS";function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active";return{type:p,active:e,prop:t}}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(49977),E=n.n(b),w=n(580416),S=n(275982);const O={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(w.c7).switchMap((function(e){var n=e.nodeType,r=t.getState();return(0,s.yn)(r).active&&"group"===n?E().Observable.of(y(!1)):E().Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(S.nk).switchMap((function(){return(0,s.yn)(t.getState()).active?E().Observable.of(y(!1)):E().Observable.empty()}))}};var P=n(322843),R=n(743129),N=n(185552),C=n.n(N),j=n(313311),A=n.n(j),T=n(805346),_=n(632107);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],D=function(e){var t=e.spyModeSettings,n=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(T.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(C(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return n(e[0])}})))},z=function(e){var t=e.swipeModeSettings,n=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(T.Z,{msgId:"toc.direction"})),o().createElement(R.ZP,{styles:{menuPortal:function(e){return x(x({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return n(t)},clearable:!1,value:A()(L,["value",t.direction]),options:L}))},M=(0,a.P1)([s.yn,s.wQ,s.IY],(function(e,t,n){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:n}}));const Y=(0,i.connect)(M,{onSetConfigurationActive:y,onSetSwipeToolDirection:function(e){return{type:f,direction:e}},onSetSpyToolRadius:function(e){return{type:m,radius:e}}})((function(e){var t=e.configuring,n=e.toolMode,r=e.swipeModeSettings,i=e.spyModeSettings,a=e.onSetConfigurationActive,l=void 0===a?function(){}:a,s=e.onSetSpyToolRadius,c=void 0===s?function(){}:s,u=e.onSetSwipeToolDirection,p=void 0===u?function(){}:u;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(_.Z,{title:"spy"===n?o().createElement(T.Z,{msgId:"toc.spyconfiguration"}):o().createElement(T.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return l(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===n?o().createElement(D,{spyModeSettings:i,onSetSpyToolRadius:c}):o().createElement(z,{swipeModeSettings:r,onSetSwipeToolDirection:p})))}));var G=n(480681),Z=n(485294),F=n.n(Z);const H=function(e){var t=e.map,n=e.layer,o=e.type,i=e.getWidth,a=e.getHeight,l=e.circleCutProp,s=(0,r.useCallback)((function(e){var n=e.context,r=i()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(r,0,n.canvas.width-r,n.canvas.height),n.strokeStyle="rgba(0,0,0,0.5)",n.clip()}),[n,o]),c=(0,r.useCallback)((function(e){e.context.restore()}),[n,o]),u=(0,r.useCallback)((function(e){var n=e.context,r=a()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(0,r,n.canvas.width,n.canvas.height-r),n.clip()}),[n,o]),p=(0,r.useCallback)((function(e){var t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath();var r=l.getMousePosition();r&&(t.arc(r[0]*n,r[1]*n,l.radius*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[n,o,l]);return(0,r.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===n}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,s,c);break;case"cut-horizontal":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,u,c);break;case"circle":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,p,c)}return t.render(),function(){e.un("precompose",s),e.un("precompose",u),e.un("precompose",p),e.un("postcompose",c),t.render()}}return function(){return t.render()}}),[n,o,l]),null};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t=e.type,n=e.map,i=e.widthRef,a=W((0,r.useState)(),2),l=a[0],s=a[1],c=W((0,r.useState)(!0),2),u=c[0],p=c[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[0]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[0]/2}),[t]),o().createElement(F(),{position:l,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(n.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},u&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(n.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-right"})))))},X=function(e){var t=e.type,n=e.map,i=e.heightRef,a=W((0,r.useState)(),2),l=a[0],s=a[1],c=W((0,r.useState)(!0),2),u=c[0],p=c[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[1]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[1]/2}),[t]),o().createElement(F(),{position:l,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(n.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},u&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(n.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-down"})))))};const q=function(e){var t=e.map,n=e.layer,i=e.type,a=void 0===i?"cut-vertical":i,l=e.active,s=(0,r.useRef)(),c=(0,r.useRef)();return n&&l?o().createElement(o().Fragment,null,"cut-vertical"===a&&o().createElement(V,{widthRef:c,map:t,type:a}),"cut-horizontal"===a&&o().createElement(X,{heightRef:s,map:t,type:a}),o().createElement(H,{map:t,layer:n,type:a,getWidth:function(){return c.current},getHeight:function(){return s.current}})):null},Q=function(e){var t=e.layer,n=e.map,i=e.active,a=e.radius,l=(0,r.useRef)(),s=(0,r.useCallback)((function(e){l.current=n.getEventPixel(e),n.render()}),[t,a]),c=(0,r.useCallback)((function(){l.current=null,n.render()}),[t,a]);(0,r.useEffect)((function(){var e=n.getTargetElement();return e.addEventListener("mousemove",s),e.addEventListener("mouseout",c),function(){e.removeEventListener("mousemove",s),e.removeEventListener("mouseout",c)}}),[]);var u={radius:a,getMousePosition:function(){return l.current}};return t&&i?o().createElement(H,{map:n,layer:t,type:"circle",circleCutProp:u}):null};var $=n(675263),B=n.n($);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}var J=(0,n(815135).Z)(G.SplitButton),ee={title:o().createElement(G.Glyphicon,{glyph:"transfer"}),tooltipId:"toc.compareTool",tooltipPosition:"top",className:"square-button-md no-border",pullRight:!0},te=function(e){var t=e.swipeSettings,n=e.onSetActive,r=e.onSetSwipeMode,i=e.status;return o().createElement(J,K({onClick:function(){t.active||"LAYER"!==i?n(!1):n(!0)},bsStyle:null!=t&&t.active?"success":"primary"},ee),o().createElement(G.MenuItem,{active:"swipe"===(null==t?void 0:t.mode),onClick:function(){r("swipe"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"vert-dashed"}),o().createElement(T.Z,{msgId:"toc.swipe"})),o().createElement(G.MenuItem,{active:"spy"===(null==t?void 0:t.mode),onClick:function(){r("spy"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"search"}),o().createElement(T.Z,{msgId:"toc.spyGlass"})),o().createElement(G.MenuItem,{onClick:function(){t.configuring||"LAYER"!==i?n(!1,"configuring"):n(!0,"configuring")}},o().createElement(G.Glyphicon,{glyph:"cog"}),o().createElement(T.Z,{msgId:"toc.configureTool"})))};te.propTypes={swipeSettings:B().object,status:B().string,onSetActive:B().func,onSetSwipeMode:B().func},te.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const ne=te;var re=function(e){var t=e.mode,n=e.map,r=e.layer,i=e.active,a=e.swipeModeSettings,l=e.spyModeSettings;return"spy"===t?o().createElement(Q,{map:n,layer:r,active:i,radius:l.radius}):o().createElement(q,{map:n,layer:r,active:i,type:a.direction})},oe=(0,a.P1)([l.Iz,s.yn,s.wQ,s.IY],(function(e,t,n,r){return{layer:null==e?void 0:e.id,active:t.active||!1,swipeModeSettings:n,spyModeSettings:r,mode:(null==t?void 0:t.mode)||"swipe"}})),ie=(0,i.connect)(oe,null)(re);const ae=(0,P.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:Y,containers:{TOC:{name:"Swipe",target:"toolbar",selector:function(e){return"LAYER"===e.status},Component:(0,i.connect)((0,a.P1)(s.yn,(function(e){return{swipeSettings:e}})),{onSetActive:y,onSetSwipeMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe";return{type:d,mode:e}}})(ne)},Map:{name:"Swipe",Tool:ie}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return u()({},e,h({},t.prop,t.active));case d:return u()({},e,{mode:t.mode});case f:var n=g(g({},e.swipe),{},{direction:t.direction});return u()({},e,{swipe:n});case m:var r=g(g({},e.spy),{},{radius:t.radius});return u()({},e,{spy:r});default:return e}}},epics:O})},671314:(e,t,n)=>{"use strict";n.d(t,{yn:()=>r,IY:()=>o,wQ:()=>i});var r=function(e){return e.swipe&&e.swipe||{active:!1}},o=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},i=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}}},819081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);