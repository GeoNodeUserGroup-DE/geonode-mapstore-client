(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16037,120,58618,47310],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>p,e8:()=>s,E0:()=>l,F9:()=>f,X_:()=>y,pb:()=>d,Re:()=>v,ih:()=>m,xy:()=>E,jL:()=>b,oz:()=>O,ph:()=>P,lF:()=>g,gG:()=>_,cb:()=>h,GI:()=>I,B1:()=>T,fv:()=>N,gc:()=>w,zX:()=>S,ZF:()=>F,Zb:()=>R,DW:()=>j,Xp:()=>A,Fm:()=>M,sV:()=>D,LU:()=>C,XP:()=>G,WU:()=>x,mK:()=>L,g:()=>U,ws:()=>Y,HP:()=>Z,aN:()=>H,Pg:()=>q,u0:()=>W,TM:()=>K,PM:()=>B,lK:()=>X,sv:()=>V,MO:()=>Q,oO:()=>z,Mc:()=>$,Zw:()=>J,RA:()=>ee,am:()=>te,ZM:()=>ne,wm:()=>re,Y$:()=>oe,Qu:()=>ie,kT:()=>ue});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",p="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",v="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",E="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",P="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",_="IDENTIFY:CHANGE_PAGE",h="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",T="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",w="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",S="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",j="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function M(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function D(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function C(){return{type:v}}function G(){return{type:m}}function x(e,t){return{type:c,reqId:e,request:t}}function L(e){return{type:a,enabled:e}}function U(){return{type:p}}function Y(e){return{type:s,infoFormat:e}}function Z(){return{type:l}}function H(){return{type:f}}function k(e){return{type:y,reverseGeocodeData:e.data}}function q(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(k(e))})).catch((function(e){t(k(e))}))}}function W(){return{type:d}}function K(){return{type:P}}function B(e){return{type:g,status:e}}function X(e,t){return{type:E,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function V(e){return{type:b,point:e}}function Q(e){return{type:O,enabled:e}}function z(e){return{type:_,index:e}}var $=function(){return{type:h}},J=function(e){return{type:I,format:e}},ee=function(e){return{type:T,showCoordinateEditor:e}},te=function(e){return{type:N,layer:e}},ne=function(e){return{type:w,query:e}},re=function(e){return{type:S,trigger:e}},oe=function(e){return{type:R,value:e}},ie=function(e){return{type:j,isMounted:e}},ue=function(e){return{type:A,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),p={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var n=c()({q:e},p,t||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},p),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},615402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(45697),o=n.n(r),i=n(124852),u=n.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function p(e,t,n){return t=l(t),function(e,t){if(t&&("object"==a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,n||[],l(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var v=n(868195).FormattedHTMLMessage,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(v,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&c(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(u().Component);y(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(m,"contextTypes",{intl:o().object});const E=m},389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,o=n(124852),i=n(843033);const u=function(e){var t=e.map,n=e.onBoxEnd,u=e.status;return(0,o.useEffect)((function(){"start"===u?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===u&&t.removeInteraction(r)}),[u]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.originalEvent.ctrlKey,metaKey:e.mapBrowserEvent.originalEvent.metaKey}})}))}),[u]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(124852),o=n.n(r),i=n(180307),u=n.n(i),a=n(45697),c=n.n(a),p=n(193409),s=n(747037),l=n.n(s),f=n(925064),y=n(821751);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function E(e,t,n){return t=O(t),function(e,t){if(t&&("object"==d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,n||[],O(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function g(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}var h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return g(e=E(this,t,[].concat(r)),"onPopupClose",(function(t){e.props.onPopupClose(t)})),g(e,"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,a=t.component,c=t.content,p=t.props,s=t.containerStyle,d=r.getElement(),v=l()(a)&&y.default[a]||a;return v?n=o().isValidElement(v)&&v||o().createElement(v,p):c&&(n=f.FP(c)?o().createElement("div",{dangerouslySetInnerHTML:{__html:c}}):c),d&&u().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:s},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)}))})),g(e,"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),g(e,"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),g(e,"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,u=e.position.coordinates,a=e.className,c=e.maxWidth,s=void 0===c?t:c,l=e.maxHeight,y=void 0===l?n:l,d=e.autoPan,m=void 0!==d&&d,E=e.autoPanMargin,b=void 0===E?20:E,O=e.offset,P=void 0===O?[0,0]:O,_=e.autoPanAnimation,h=void 0===_?{duration:200}:_,I=s>t?t:s,T=y>n?n:y,N=f.fH(r,a),w=new p.Z({id:r,element:N,autoPan:m,offset:P,autoPanMargin:b,autoPanAnimation:h,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:u});o.addOverlay(w);var S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r}(w,N,{coordinates:u});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({popup:w,observer:S,containerStyle:{maxWidth:I,maxHeight:T}},e)})),e._popups})),g(e,"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&m(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);g(h,"propTypes",{map:c().object,popups:c().arrayOf(c().object),onPopupClose:c().func}),g(h,"defaultProps",{popups:[],onPopupClose:function(){}})},434637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(){return n(103498).default,{Map:n(790596).Z,Layer:n(145697).Z,Feature:n(130072).Z,MeasurementSupport:n(505904).default,Overview:n(722404).Z,ScaleBar:n(809056).Z,DrawSupport:n(706909).Z,PopupSupport:n(126105).Z,BoxSelectionSupport:n(389912).Z}}},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>_,default:()=>h});var r=n(124852),o=n.n(r),i=n(173014),u=n(11196),a=n(867076),c=n(171703),p=n(22222),s=n(307877),l=n(921914),f=n(542872),y=n(701469),d=n.n(y),v=n(352353),m=n.n(v),E=n(979870),b=n(800827),O=(0,a.compose)((0,c.connect)((0,p.P1)(s.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,a.defaultProps)({index:0,responses:[]})),P=(0,p.P1)([s.q7,s.o9,s.OK,s.us,s.x0,b.hp,s.vR],(function(e,t,n,r,o,i,u){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:u}}));const g=(0,a.compose)((0,c.connect)(P),(0,a.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,d()(n)&&n[t]||n)},header:E.Z}),O,u.Yy,u.mI,(0,i.Z)((function(e){var t=e.loaded;return m()(t)})))(f.Z);var _="identify";const h={identify:g}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>u,R3:()=>a});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},u=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else u(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}},843624:(e,t,n)=>{var r=n(314259),o=n(640554);e.exports=function(e,t,n){var i=null==e?0:e.length;return i?(t=n||void 0===t?1:o(t),r(e,0,(t=i-t)<0?0:t)):[]}},763105:(e,t,n)=>{var r=n(234963),o=n(580760),i=n(267206),u=n(701469);e.exports=function(e,t){return(u(e)?r:o)(e,i(t,3))}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,n)=>{var r=n(829750),o=n(880531),i=n(640554),u=n(479833);e.exports=function(e,t,n){return e=u(e),n=null==n?0:r(i(n),0,e.length),t=o(t),e.slice(n,n+t.length)==t}},558618:()=>{},200120:()=>{}}]);