(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41604],{580416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>u,ih:()=>i,OX:()=>c,sb:()=>a,K$:()=>l,k7:()=>s,cX:()=>p,x9:()=>E,vs:()=>y,oE:()=>f,Po:()=>d,qv:()=>O,cI:()=>A,g6:()=>_,I4:()=>m,l$:()=>R,Xv:()=>S,k3:()=>v,CQ:()=>T,R8:()=>b,HN:()=>P,sH:()=>N,c7:()=>g,_7:()=>L,eF:()=>I,O6:()=>D,ED:()=>C,RP:()=>M,sF:()=>h,VP:()=>Y,He:()=>w,vO:()=>G,WO:()=>j,bh:()=>H,MK:()=>Z,ZF:()=>x,tV:()=>U,Dv:()=>k,Yz:()=>z,kI:()=>V,XG:()=>F,A4:()=>X,Rp:()=>W,$o:()=>$,ct:()=>q,oh:()=>J,$h:()=>K,ud:()=>Q,Qr:()=>B,LR:()=>ee,nN:()=>te,UG:()=>ne,c9:()=>re,Xy:()=>oe});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",u="CHANGE_GROUP_PROPERTIES",i="TOGGLE_NODE",c="SORT_NODE",a="REMOVE_NODE",l="UPDATE_NODE",s="MOVE_NODE",p="LAYER_LOADING",E="LAYER_LOAD",y="LAYER_ERROR",f="ADD_LAYER",d="ADD_GROUP",O="REMOVE_LAYER",A="SHOW_SETTINGS",_="HIDE_SETTINGS",m="UPDATE_SETTINGS",R="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",v="LAYERS_REFRESHED",T="LAYERS_REFRESH_ERROR",b="LAYERS:BROWSE_DATA",P="LAYERS:DOWNLOAD",N="LAYERS:CLEAR_LAYERS",g="LAYERS:SELECT_NODE",L="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",D="LAYERS:HIDE_LAYER_METADATA",C="LAYERS:UPDATE_SETTINGS_PARAMS";function M(e,t,n){return{type:A,node:e,nodeType:t,options:n}}function h(){return{type:_}}function Y(e){return{type:m,options:e}}function w(e,t){return{type:r,newProperties:t,layer:e}}function G(e,t){return{type:o,layer:e,params:t}}function j(e,t){return{type:u,newProperties:t,group:e}}function H(e,t,n){return{type:i,node:e,nodeType:t,status:!n}}function Z(e,t){return{type:c,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function x(e,t){return{type:a,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function U(e,t,n){return{type:l,node:e,nodeType:t,options:n}}function k(e,t,n){return{type:s,node:e,groupId:t,index:n}}function z(e){return{type:p,layerId:e}}function V(e,t){return{type:E,layerId:e,error:t}}function F(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function X(e){return{type:f,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function W(e,t,n){return{type:d,group:e,parent:t,options:n,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function $(e){return{type:O,layerId:e}}function q(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function J(e){return{type:v,layers:e}}function K(e,t){return{type:T,layers:e,error:t}}function Q(e,t,n,r){return{type:S,dimension:e,value:t,options:n,layers:r}}function B(e){return{type:b,layer:e}}function ee(e){return{type:P,layer:e}}function te(){return{type:N}}function ne(e,t,n){return{type:g,id:e,nodeType:t,ctrlKey:n}}function re(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:C,newParams:e,update:t}}},801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>u,mq:()=>i,uv:()=>c,Qy:()=>a,IL:()=>l,Li:()=>s,OW:()=>p,ZO:()=>E,Um:()=>y,TF:()=>f,Ls:()=>d,Ec:()=>O,Eu:()=>A,JJ:()=>_,nZ:()=>m,YD:()=>R,GI:()=>S,Jb:()=>v,Uh:()=>T,e$:()=>b,eh:()=>P,$j:()=>N,bJ:()=>g,Mk:()=>L,xy:()=>I,o6:()=>D,NH:()=>C,FP:()=>M,Mo:()=>h,sO:()=>Y,Px:()=>w,hd:()=>G,y9:()=>j,Ju:()=>H,BV:()=>Z,SO:()=>x,H0:()=>U,$X:()=>k,ou:()=>z,NE:()=>V,Lq:()=>F,aN:()=>X});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",i="CHANGE_ZOOM_LVL",c="PAN_TO",a="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",E="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",f="CREATION_ERROR_LAYER",d="UPDATE_VERSION",O="INIT_MAP",A="RESIZE_MAP",_="CHANGE_MAP_LIMITS",m="SET_MAP_RESOLUTIONS",R="REGISTER_EVENT_LISTENER",S="UNREGISTER_EVENT_LISTENER",v="MOUSE_MOVE",T="MOUSE_OUT",b="MAP:MAP_PLUGIN_LOAD",P="MAP:ORIENTATION",N="MAP:UPDATE_MAP_VIEW",g="MAP:UPDATE_MAP_OPTIONS";function L(e,t,n,r){return{type:b,mapType:t,loading:e,loaded:n,error:r}}function I(e,t,n){return{type:l,pos:e,zoom:t,crs:n}}function D(e,t,n,o,u,i,c,a){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:u,projection:i,viewerOptions:c,resolution:a}}function C(e){return{type:s,crs:e}}function M(e,t){return{type:o,point:e,layer:t}}function h(e){return{type:u,pointer:e}}function Y(e,t){return{type:i,zoom:e,mapStateSource:t}}function w(e,t,n,r){return{type:a,extent:e,crs:t,maxZoom:n,options:r}}function G(e,t){return{type:E,style:e,mapStateSource:t}}function j(e){return{type:O,disableFeedbackMask:e}}function H(){return{type:A}}function Z(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:_,restrictedExtent:t,crs:n,minZoom:r}}function x(e){return{type:m,resolutions:e}}var U=function(e,t){return{type:R,eventName:e,toolName:t}},k=function(e,t){return{type:S,eventName:e,toolName:t}},z=function(e){return{type:v,position:e}},V=function(){return{type:T}},F=function(e){return{type:P,orientation:e}},X=function(e){return{type:g,configUpdate:e}}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(45697),o=n.n(r),u=n(124852),i=n.n(u);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){var r,o,u,i;r=e,o=t,u=n[t],i=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(i)?i:i+"")in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,u=e.hidden;return i().createElement("div",{className:o,style:l({width:t,height:t,overflow:"hidden"},r)},!u&&i().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const E=p},50950:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(124852),o=n.n(r),u=n(45697),i=n.n(u),c=n(322843),a=n(171703),l=n(22222),s=n(805346),p=n(303744),E=n(337326),y=n(535721),f=n(580416),d=n(801550),O=n(782904),A=n(229698),_=n(55105),m=n(424216),R=["onAdd","onZoomTo"],S=["enabled"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e){var t=e.onAdd,n=e.onZoomTo,r=T(e,R);return o().createElement(m.Z,v({},r,{onSelect:function(e){var r,o,u=(0,y.tA)(e);t(u);var i,c=(null==u||null===(r=u.bbox)||void 0===r?void 0:r.bounds)||{},a=c.minx,l=c.miny,s=c.maxx,p=c.maxy,E=(null==u||null===(o=u.bbox)||void 0===o?void 0:o.bounds)&&[a,l,s,p];E&&n(E,null==u||null===(i=u.bbox)||void 0===i?void 0:i.crs)}}))}b.propTypes={request:i().func,responseToEntries:i().func,pageSize:i().number,onAdd:i().func,placeholderId:i().string,onClose:i().func,onZoomTo:i().func},b.defaultProps={request:E.EX,responseToEntries:function(e){return e.resources},pageSize:10,onAdd:function(){},placeholderId:"gnviewer.datasetsCatalogFilterPlaceholder",titleId:"gnviewer.datasetsCatalogTitle",noResultId:"gnviewer.datasetsCatalogEntriesNoResults",onZoomTo:function(){},onClose:function(){}};var P=(0,a.connect)((0,l.P1)([function(e){return(0,_.ic)(e,{height:!0})},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.datasetsCatalog)||void 0===n?void 0:n.enabled}],(function(e,t){return{style:e,enabled:t}})),{onAdd:f.A4,onClose:O.Xg.bind(null,"datasetsCatalog","enabled",!1),onZoomTo:d.Px})((function(e){var t=e.enabled,n=T(e,S);return t?o().createElement(b,n):null})),N=(0,a.connect)((0,l.P1)([],(function(){return{}})),{onClick:O.Xg.bind(null,"datasetsCatalog","enabled",!0)})((function(e){var t=e.onClick,n=e.size,r=e.variant;return o().createElement(p.Z,{size:n,onClick:function(){t()},variant:r},o().createElement(s.Z,{msgId:"gnviewer.addLayer"}))}));const g=(0,c.rx)("DatasetsCatalog",{component:P,containers:{ActionNavbar:{name:"DatasetsCatalog",Component:N}},epics:A.Z,reducers:{}})}}]);