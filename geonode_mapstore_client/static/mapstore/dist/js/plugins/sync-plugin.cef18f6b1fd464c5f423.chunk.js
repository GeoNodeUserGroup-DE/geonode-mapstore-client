(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[67440,888],{555927:(t,e,r)=>{"use strict";r.d(e,{BJ:()=>n,_y:()=>o,vk:()=>i,uI:()=>u,mg:()=>c,aR:()=>a,SW:()=>O,$l:()=>s,zX:()=>f,R4:()=>E,E9:()=>l,CP:()=>p,s6:()=>S,E5:()=>y,CF:()=>R,B_:()=>d,js:()=>A,TA:()=>v,Kv:()=>D,zV:()=>T,Xp:()=>m,D_:()=>b,Nl:()=>_,G9:()=>G,gE:()=>g,pB:()=>h,GD:()=>Y,sA:()=>I,o2:()=>C,PC:()=>w,rR:()=>N,vM:()=>P,AN:()=>B,tH:()=>j,kk:()=>H,ak:()=>L,qY:()=>V,QT:()=>U});var n="DASHBOARD:SET_AVAILABLE",o="DASHBOARD:SET_EDITING",i="DASHBOARD:SHOW_CONNECTIONS",u="DASHBOARD:TRIGGER_SAVE_MODAL",c="DASHBOARD:TRIGGER_SAVE_AS_MODAL",a="DASHBOARD:SAVE_DASHBOARD",O="DASHBOARD:SAVE_ERROR",s="DASHBOARD:DASHBOARD_SAVED",f="DASHBOARD:LOAD_DASHBOARD",E="DASHBOARD:DASHBOARD_RESET",l="DASHBOARD:DASHBOARD_LOADED",p="DASHBOARD:DASHBOARD_LOADING",S="DASHBOARD:UPDATE_SERVICES",y="DASHBOARD:SET_SELECTED_SERVICE",R="DASHBOARD:ADD_NEW_SERVICE",d="DASHBOARD:CATALOG_MODE",A="DASHBOARD:DELETE_SERVICE",v="DASHBOARD:SAVE_SERVICE_LOADING",D="DASHBOARD:EXPORT",T="DASHBOARD:IMPORT",m="DASHBOARD:INIT_PLUGIN",b=function(t){return{type:o,editing:t}},_=function(t){return{type:n,available:t}},G=function(t){return{type:i,show:t}},g=function(t){return{type:u,show:t}},h=function(t){return{type:c,show:t}},Y=function(t){return{type:O,error:t}},I=function(t){return{type:s,id:t}},C=function(t){return{type:f,id:t}},w=function(){return{type:E}},N=function(t,e){return{type:l,resource:t,data:e}},P=function(t){return{type:p,name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading",value:t}},B=function(t){return{type:"DASHBOARD:DASHBOARD_LOAD_ERROR",error:t}},j=function(t,e){return{type:y,service:t,services:e}},H=function(t,e,r){return{type:R,service:t,services:e,isNew:r}},L=function(t,e){return{type:d,mode:t,isNew:e}},V=function(t,e){return{type:A,service:t,services:e}},U=function(t){return{type:m,options:t}}},134990:(t,e,r)=>{"use strict";r.d(e,{D7:()=>a,mN:()=>O,vb:()=>s,KT:()=>f,QK:()=>E,cc:()=>l,Gx:()=>p,XH:()=>S,lX:()=>y,tP:()=>R,Dq:()=>d,LE:()=>A,SW:()=>v,si:()=>D,i2:()=>T,IY:()=>m,Zf:()=>b,ij:()=>_,Hb:()=>G,Mk:()=>g,c:()=>h,NZ:()=>Y,Cx:()=>I,wb:()=>C,km:()=>w,un:()=>N,Ro:()=>P,jr:()=>B,ZY:()=>j,EQ:()=>H,W$:()=>L,mk:()=>V,U3:()=>U,aF:()=>k,IH:()=>M,rp:()=>W,D_:()=>x,zJ:()=>z,wJ:()=>F,OS:()=>X,YP:()=>Z,Ct:()=>$,Od:()=>q,y6:()=>J,g5:()=>K,_e:()=>Q,DF:()=>tt,GD:()=>et,K0:()=>rt,kB:()=>nt,Xn:()=>ot,G5:()=>it,Vx:()=>ut,RZ:()=>ct,pB:()=>at,$A:()=>Ot,m7:()=>st,YM:()=>ft,o2:()=>Et,ql:()=>lt,c0:()=>pt,Fu:()=>St,WE:()=>yt,fD:()=>Rt,EE:()=>dt});var n=r(747037),o=r.n(n),i=r(455877),u=r.n(i),c=r(192579),a="GEOSTORY:ADD",O="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",E="GEOSTORY:EDIT_RESOURCE",l="GEOSTORY:EDIT_WEBPAGE",p="GEOSTORY:SCROLLING",S="GEOSTORY:LOAD_GEOSTORY",y="GEOSTORY:LOADING_GEOSTORY",R="GEOSTORY:MOVE",d="GEOSTORY:REMOVE",A="GEOSTORY:SAVE_STORY",v="GEOSTORY:SAVE_ERROR",D="GEOSTORY:STORY_SAVED",T="GEOSTORY:SELECT_CARD",m="GEOSTORY:SET_CONTROL",b="GEOSTORY:SET_RESOURCE",_="GEOSTORY:SET_CURRENT_STORY",G="GEOSTORY:SET_WEBPAGE_URL",g="GEOSTORY:TOGGLE_CARD_PREVIEW",h="GEOSTORY:TOGGLE_SETTINGS_PANEL",Y="GEOSTORY:TOGGLE_SETTING",I="GEOSTORY:TOGGLE_CONTENT_FOCUS",C="GEOSTORY:UPDATE",w="GEOSTORY:UPDATE_SETTING",N="GEOSTORY:UPDATE_CURRENT_PAGE",P="GEOSTORY:REMOVE_RESOURCE",B="GEOSTORY:SET_PENDING_CHANGES",j="GEOSTORY:SET_UPDATE_URL_SCROLL",H="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",L="GEOSTORY:HIDE_CAROUSEL_ITEMS",V="GEOSTORY:ENABLE_DRAW",U="GEOSTORY:EXPORT",k="GEOSTORY:IMPORT",M=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return{type:a,id:r&&r.id||u()(),path:t,position:e,element:o()(r)&&(0,c.nq)(r,n)||r}},W=function(t,e,r){return{type:O,id:t,mediaType:e,data:r}},x=function(t){return{type:s,mode:t?c.nl.EDIT:c.nl.VIEW}},z=function(t,e,r){return{type:E,id:t,mediaType:e,data:r}},F=function(t,e){return{type:S,id:t,options:e}},X=function(t){return{type:"GEOSTORY:GEOSTORY_LOADED",id:t}},Z=function(){return{type:y,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},$=function(t){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:t}},q=function(t){return{type:d,path:t}},J=function(t){return{type:v,error:t}},K=function(t,e){return{type:m,control:t,value:e}},Q=function(t){return{type:T,card:t}},tt=function(t){return{type:b,resource:t}},et=function(t){return{type:D,id:t}},rt=function(t){return{type:_,story:t}},nt=function(){return{type:g}},ot=function(t){return{type:Y,option:t}},it=function(){return{type:h,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},ut=function(t,e){return{type:C,path:t,element:e,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace",options:arguments.length>3?arguments[3]:void 0}},ct=function(t){var e=t.sectionId,r=t.columnId;return{type:N,sectionId:e,columnId:r}},at=function(t,e,r){return{type:R,source:t,target:e,position:r}},Ot=function(t,e,r,n,o){return{type:I,status:t,target:e,selector:r,hideContent:n,path:o}},st=function(t,e){return{type:w,prop:t,value:e}},ft=function(t){return{type:G,src:t}},Et=function(t){var e=t.path;return{type:l,path:e,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},lt=function(t,e){return{type:P,id:t,mediaType:e}},pt=function(t){return{type:B,value:t}},St=function(t){return{type:H,mediaEditorSettings:t}},yt=function(t){return{type:p,status:t}},Rt=function(t,e){return{type:L,sectionId:t,showContentId:e}},dt=function(t){return{type:V,drawOptions:t}}},73443:(t,e,r)=>{"use strict";r.d(e,{rs:()=>n,AY:()=>o,SW:()=>i,yB:()=>u,oG:()=>c,oz:()=>a,id:()=>O,gc:()=>s,cE:()=>f,rG:()=>E,Vj:()=>l,nY:()=>p});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",i="GEONODE:SAVE_ERROR",u="GEONODE:CLEAR_SAVE",c="GEONODE:SAVE_CONTENT",a="GEONODE:SAVE_DIRECT_CONTENT";function O(){return{type:n}}function s(t){return{type:o,success:t}}function f(t){return{type:i,error:t}}function E(){return{type:u}}function l(t,e,r,n){return{type:c,id:t,metadata:e,reload:r,showNotifications:n}}function p(){return{type:a}}},535188:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ConnectedSyncButton:()=>M,default:()=>W});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i),c=r(171703),a=r(22222),O=r(322843),s=r(805346),f=r(303744),E=r(274621),l=r(49977),p=r(375875),S=r.n(p),y=r(682492),R=r.n(y),d=r(944908),A=r.n(d),v="GEONODE:SYNC_RESOURCES",D=r(73443),T=r(482100),m=r(337326),b=r(134990),_=r(197395),G=r(535721),g=r(367306),h=r(555927);function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function I(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=Y(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Y(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("geostory"===t){var n=e.subtype||e.resource_type;return{type:n,data:"map"!==n?(0,G.R1)(e,e):(0,G.F0)(e)}}if("dashboard"===t){var o,i=null===(o=e.widgets)||void 0===o?void 0:o.map((function(t){if("map"===t.widgetType&&t.maps)return P(P({},t),{},{maps:t.maps.map((function(t){var e=r.find((function(e){var r;return!(e.data.pk!==(null==t||null===(r=t.extraParams)||void 0===r?void 0:r.pk))}));return e?P(P({},t),e.data.data.map):t}))});var e=r.find((function(e){var r,n;return!(e.data.pk!==(null===(r=t.map)||void 0===r||null===(n=r.extraParams)||void 0===n?void 0:n.pk))}));return e?P(P({},t),{},{map:P(P({},t.map),e.data.data.map)}):t}));return{data:R()(e,{widgets:i})}}return{}};const H={gnSyncComponentsWithResources:function(t,e){return t.ofType(v).switchMap((function(){var t=e.getState(),r=(0,T.L4)(t),n=function(t,e){switch(t){case"geostory":return(0,T.hs)(e);case"dashboard":return(0,T.sF)(e);default:return[]}}(r,t),o=A()(n.maps||[]),i=A()(n.documents||[]);return l.Observable.defer((function(){return S().all([o.length>0?(0,m.zV)(o).then((function(t){return t})).catch((function(){return[]})):Promise.resolve([]),i.length>0?(0,m.gU)(i).then((function(t){return t})).catch((function(){return[]})):Promise.resolve([])]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,O=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){O=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(O)throw o}}return c}}(e,r)||C(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=n[0],c=n[1];return[].concat(I(o.map((function(t){var e=u.find((function(e){return e.pk===t}));return e?{data:e,status:"success",title:e.title}:{status:"error",title:"map/".concat(t)}}))),I(i.map((function(t){var e=c.find((function(e){return e.pk===t}));return e?{data:e,status:"success",title:e.title}:{status:"error",title:"document/".concat(t)}}))))}))})).switchMap((function(e){var n,o,i=e.filter((function(t){return"error"===t.status})),u=e.filter((function(t){return"success"===t.status})),c=function(){if(0===u.length)return[];if("geostory"===r)return u.map((function(t){var e=t.data,r=j("geostory",e),n=r.type,o=r.data;return(0,b.zJ)(e.pk,n,o)}));if("dashboard"===r){var e=(0,g.hS)(t),n=j("dashboard",e,u).data;return[(0,h.rR)((0,g.NB)(t),n)]}return[]}(),a=function(t,e,r){var n="Success";return t>0&&e>0?n="Warning":0===t&&e>0?n="Success":t>0&&0===e&&(n="Error"),{level:n.toLowerCase(),title:"gnviewer.sync".concat(n).concat("Warning"!==n?r:"","Title"),message:"gnviewer.sync".concat(n,"Message")}}(i.length,u.length,r),O=a.level,s=a.title,f=a.message;return l.Observable.of.apply(l.Observable,I(c).concat([(0,D.gc)(),(0,_.$Z)({title:s,message:f,values:{successTitles:null===(n=u.map((function(t){return t.title})))||void 0===n?void 0:n.join(", "),errorTitles:null===(o=i.map((function(t){return t.title})))||void 0===o?void 0:o.join(", ")}},O)]))})).catch((function(t){var e,r;return l.Observable.of((0,D.gc)(),(0,_.vU)({title:"gnviewer.syncErrorTitle",message:(null==t||null===(e=t.data)||void 0===e?void 0:e.detail)||(null==t||null===(r=t.originalError)||void 0===r?void 0:r.message)||(null==t?void 0:t.message)||"gnviewer.syncErrorDefault"}))})).startWith((0,D.id)())}))}};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=L(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==L(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=t.synchronize,r=t.enabled,n=t.size;return r&&o().createElement(f.Z,{variant:"primary",size:n,onClick:function(){return e()}},o().createElement(s.Z,{msgId:"gnviewer.sync"}))}k.contextTypes={synchronize:u().func};var M=(0,c.connect)((0,a.P1)(E.jl,(function(t){return{enabled:t}})),{synchronize:function(){return{type:v}}})(k);const W=(0,O.rx)("Sync",{component:M,containers:{ActionNavbar:{name:"Sync",priority:1}},epics:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){U(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},H),reducers:{}})},580760:(t,e,r)=>{var n=r(989881);t.exports=function(t,e){var r=[];return n(t,(function(t,n,o){e(t,n,o)&&r.push(t)})),r}},763105:(t,e,r)=>{var n=r(234963),o=r(580760),i=r(267206),u=r(701469);t.exports=function(t,e){return(u(t)?n:o)(t,i(e,3))}},313880:(t,e,r)=>{var n=r(479833);t.exports=function(){var t=arguments,e=n(t[0]);return t.length<3?e:e.replace(t[1],t[2])}}}]);