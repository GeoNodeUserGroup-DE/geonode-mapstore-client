(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[46683],{881808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>a,nT:()=>u,TL:()=>c,KS:()=>l,EB:()=>p,DZ:()=>s,Aw:()=>f,V_:()=>m,H0:()=>y,jW:()=>d,JZ:()=>b,fQ:()=>v,HK:()=>E,YO:()=>A,I6:()=>h});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",a="MAP_CONFIG_LOAD_ERROR",u="MAP_LOAD_INFO",c="MAP_INFO_LOAD_START",l="MAP_INFO_LOADED",p="MAP_INFO_LOAD_ERROR",s="MAP:MAP_SAVE_ERROR",f="MAP:MAP_SAVED",m="MAP:RESET_MAP_SAVE_ERROR";function y(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function d(t,e){return{type:a,error:t,mapId:e}}function b(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function v(t,e){return{type:l,mapId:e,info:t,merge:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function E(t,e){return{type:p,mapId:t,error:e}}function A(t){return{type:c,mapId:t}}function h(t){return{type:u,mapId:t}}},57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>p});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},p=function(t){return{type:a,time:t}}},162187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,qg:()=>a,L9:()=>u,hQ:()=>c,NC:()=>l,c9:()=>p,up:()=>s,AN:()=>f,FZ:()=>m,Fi:()=>y,KB:()=>d,E0:()=>b,Q_:()=>v,hY:()=>E,wO:()=>A,sT:()=>h,wR:()=>T,h1:()=>S,hS:()=>O,zK:()=>I,VS:()=>g,oz:()=>P,FH:()=>_,XN:()=>N,Ym:()=>M,RQ:()=>w,Xt:()=>L});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:INIT",u="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",l="PLAYBACK:FRAMES_LOADING",p="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",f="PLAYBACK:SET_INTERVAL_DATA",m="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",d="PLAYBACK:ANIMATION_STEP_MOVE",b="PLAYBACK:UPDATE_METADATA",v={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},E=function(){return{type:n}},A=function(){return{type:o}},h=function(){return{type:i}},T=function(t){return{type:u,frames:t}},S=function(t){return{type:p,frame:t}},O=function(t){return{type:c,frames:t}},I=function(t){return{type:l,loading:t}},g=function(t){return{type:s,range:t}},P=function(t,e){return{type:m,name:t,value:e}},_=function(){return{type:y}},N=function(t){return{type:d,direction:t}},M=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:b,forTime:n,next:e,previous:r}},w=function(t){return{type:f,timeIntervalData:t}},L=function(t){return{type:a,payload:t}}},757676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,Lv:()=>o,iv:()=>i,br:()=>a,Xe:()=>u,_V:()=>c,JU:()=>l,cb:()=>p,lz:()=>s,Wb:()=>f,M5:()=>m,w:()=>y,p:()=>d,Ud:()=>b,vf:()=>v,AE:()=>E,xp:()=>A,i9:()=>h,HM:()=>T,y3:()=>S,cO:()=>O,aA:()=>I,Nb:()=>g,kq:()=>P,PQ:()=>_,KI:()=>N,m7:()=>M,Hz:()=>w,w2:()=>L,Z7:()=>D,_e:()=>j,FE:()=>C,st:()=>R,Qq:()=>k,bz:()=>Y,mF:()=>B});var n="TIMELINE:SELECT_TIME",o="TIMELINE:RANGE_CHANGE",i="TIMELINE:RANGE_DATA_LOADED",a="TIMELINE:LOADING",u="TIMELINE:INIT_SELECT_LAYER",c="TIMELINE:SELECT_LAYER",l="TIMELINE:ENABLE_OFFSET",p="TIMELINE:AUTOSELECT",s="TIMELINE:SET_SNAP_TYPE",f="TIMELINE:SET_END_VALUES_SUPPORT",m="TIMELINE:SET_COLLAPSED",y="TIMELINE:SET_MAP_SYNC",d="TIMELINE:INIT_TIMELINE",b="TIMELINE:RESET_TIMELINE",v="TIMELINE:SET_RANGE_INIT",E="TIMELINE:SNAP_RADIO_BUTTON_ENABLED",A="TIMELINE:SET_LAYERS",h="TIMELINE:UPDATE_LAYERS_SETTINGS",T=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:o,start:e,end:r}},O=function(t,e,r,n){return{type:i,layerId:t,range:e,histogram:r,domain:n}},I=function(t,e){return{type:a,layerId:t,loading:e}},g=function(t){return{type:u,layerId:t,snap:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}},P=function(t){return{type:c,layerId:t,snap:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}},_=function(t){return{type:l,enabled:t}},N=function(){return{type:p}},M=function(t){return{type:s,snapType:t}},w=function(t){return{type:f,endValuesSupport:t}},L=function(t){return{type:m,collapsed:t}},D=function(t){return{type:y,mapSync:t}},j=function(t){return{type:d,config:t}},C=function(){return{type:b}},R=function(t){return{type:v,value:t}},k=function(t){return{type:E,snapRadioButtonEnabled:t}},Y=function(t){return{type:A,layers:t}},B=function(t,e){return{type:h,id:t,checked:e}}},496361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>b,ot:()=>v,Ci:()=>E,CX:()=>A});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),u=r(49977),c=r(375875),l=r.n(c),p=r(510284);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?m(m({},e),{},y({},r,t[r])):e}),{})},b=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,s=n.tileMatrixSet,f=void 0===s?"EPSG:4326":s,y=n.bbox,b=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:d(m({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:f,bbox:y,domains:b,expandLimit:v},r))})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,s=i.version,f=void 0===s?"1.1.0":s,y=i.tileMatrixSet,b=void 0===y?"EPSG:4326":y,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:d(m({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:f,layer:e,tileMatrixSet:b,bbox:v},n))})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},E=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,s=n.limit,f=void 0===s?20:s,m=n.fromEnd,y=void 0!==m&&m,b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=b.bbox,E=b.tileMatrixSet,A=void 0===E?"EPSG:4326":E,h=b.service,T=void 0===h?"WMTS":h,S=b.version,O=void 0===S?"1.0.0":S;return u.Observable.defer((function(){return l().get(t,{params:d({service:T,version:O,request:"GetDomainValues",tileMatrixSet:A,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:f,fromEnd:y,time:o})})})).let(p.oB).switchMap((function(t){return(0,p.sw)(t.data)}))},A=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},365295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),u=r(414293),c=r.n(u),l=r(45697),p=r.n(l),s=r(730381),f=r.n(s),m=r(480681),y=r(815135),d=r(38560);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function E(t,e,r){return e=h(e),function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,A()?Reflect.construct(e,r||[],h(t).constructor):e.apply(t,r))}function A(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(A=function(){return!!t})()}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function S(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var I=(0,y.Z)(m.gG),g=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(t=E(this,e,[].concat(n)),"onUpdate",(function(e,r){var n=f()(t.props.date).utc(),o=r?f()(n).add(1,e):f()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),S(t,"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=f()(t.props.date).utc(),i=o["day"===e?"date":e]&&f()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),S(t,"getForm",(function(){var e=t.props.date&&f()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&f().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(m.l0,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(m.cw,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(I,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(I,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(I,{glyph:"chevron-up"})),o().createElement(m.NI,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(I,{glyph:"chevron-down"})))}))))}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);S(g,"propTypes",{date:p().string,clickable:p().bool,onUpdate:p().func,onIconClick:p().func,glyph:p().string,style:p().object,className:p().string,tooltip:p().string,tooltipId:p().string,showButtons:p().bool}),S(g,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const P=g},589919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return u(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?c(n,o()(t)).catch(r):c(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{A:()=>y});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==u(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,s(t(r,p(p({sort:"asc",limit:1},u&&{fromValue:e?(0,a.p)(u,.001,"remove"):u}),"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,s(t(r,p(p({sort:"desc",limit:1},u&&{fromValue:e?(0,a.p)(u,.001,"add"):u}),"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},937307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>m});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),u=r(730381),c=r.n(u),l=r(66604),p=r.n(l),s=r(535937),f=r.n(s);const m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=p()(t.data,(function(t){return f()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},176843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>p,KC:()=>s,Wq:()=>f,rp:()=>m,PF:()=>y});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},p=function(t){return t&&t.playback&&t.playback.currentFrame},s=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(u(t)||[])[p(t)]},m=function(t){return t&&t.playback&&t.playback.metadata},y=(0,n.P1)(u,p,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))}}]);