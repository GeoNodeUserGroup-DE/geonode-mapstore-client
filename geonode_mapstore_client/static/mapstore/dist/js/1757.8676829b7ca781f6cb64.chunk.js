(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1757],{557579:(t,e,n)=>{"use strict";n.d(e,{Jm:()=>a,AE:()=>f,dm:()=>l,n8:()=>d,BV:()=>s,Cz:()=>p,wb:()=>y,$A:()=>v,eb:()=>b,v8:()=>g,yY:()=>m,J5:()=>E,ff:()=>h,S0:()=>w,Q6:()=>O,kb:()=>S,GV:()=>D,LH:()=>T,lG:()=>I,Km:()=>j,pV:()=>P,V5:()=>G,IT:()=>A,VR:()=>W,jv:()=>_,oU:()=>N,h9:()=>R,jB:()=>C,Ym:()=>M,uU:()=>L,ke:()=>k,nw:()=>U,A4:()=>x,C2:()=>V,Qe:()=>Y,sZ:()=>F,Ij:()=>z,Ko:()=>H,E9:()=>$,K4:()=>B,c_:()=>J,uT:()=>X,bS:()=>Z,Rz:()=>K,t4:()=>q,_k:()=>Q,w2:()=>tt,YA:()=>et,sD:()=>nt,Gn:()=>rt,Rb:()=>ot,fy:()=>it,kr:()=>ut,f:()=>ct,Ff:()=>at,Pt:()=>ft,ep:()=>lt});var r=n(423570),o=n.n(r);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a="WIDGETS:INSERT",f="WIDGETS:NEW",l="WIDGETS:EDIT",d="WIDGETS:EDIT_NEW",s="WIDGETS:EDITOR_CHANGE",p="WIDGETS:EDITOR_SETTING_CHANGE",y="WIDGETS:UPDATE",v="WIDGETS:UPDATE_PROPERTY",b="WIDGETS:UPDATE_LAYER",g="WIDGETS:CHANGE_LAYOUT",m="WIDGETS:DELETE",E="WIDGETS:REPLACE",h="WIDGETS:CLEAR_WIDGETS",w="WIDGETS:ADD_DEPENDENCY",O="WIDGETS:REMOVE_DEPENDENCY",S="WIDGETS:LOAD_DEPENDENCIES",D="WIDGETS:RESET_DEPENDENCIES",T="WIDGETS:TOGGLE_CONNECTION",I="WIDGETS:OPEN_FILTER_EDITOR",j="WIDGETS:EXPORT_CSV",P="WIDGETS:EXPORT_IMAGE",G="WIDGETS:WIDGET_SELECTED",A="WIDGETS:NEW_CHART",W="floating",_="dependencySelector",N=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,R=/^maps\["?([^"\]]*)"?\]\.?(.*)$/,C=/^widgets\["?([^"\]]*)"?\]\.maps\["?([^"\]]*)"?\]\.?(.*)$/,M="WIDGET:TOGGLE_COLLAPSE",L="WIDGET:TOGGLE_COLLAPSE_ALL",k="WIDGET:TOGGLE_MAXIMIZE",U="WIDGET:TOGGLE_TRAY",x=function(t){return{type:f,widget:t}},V=function(){return{type:A}},Y=function(t){return{type:a,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,id:o()(),widget:t}},F=function(t){return{type:E,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,widgets:t}},z=function(t,e,n){return{type:v,id:t,target:arguments.length>4&&void 0!==arguments[4]?arguments[4]:W,key:e,value:n,mode:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replace"}},H=function(t){return{type:b,layer:t}},$=function(t){return{type:m,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,widget:t}},B=function(){return{type:h}},J=function(t,e){return{type:g,allLayouts:e,layout:t,target:arguments.length>2&&void 0!==arguments[2]?arguments[2]:W}},X=function(t){return{type:l,widget:t}},Z=function(t,e){return{type:d,widget:t,settings:e}},K=function(t,e){return{type:s,key:t,value:e}},q=function(t,e){return{type:p,key:t,value:e}},Q=function(t){return{type:S,dependencies:t}},tt=function(t,e,n,r){return{type:T,active:t,availableDependencies:e,options:n,target:r}},et=function(t){return q("step",t)},nt=function(t){var e=t.data,n=void 0===e?[]:e,r=t.title;return{type:j,data:n,title:void 0===r?"export":r}},rt=function(t,e){return{type:G,widget:t,opts:e}},ot=function(t){var e=t.widgetDivId;return{type:P,widgetDivId:e}},it=function(){return{type:I}},ut=function(t,e){return n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({active:t},e),q("".concat(_),n);var n},ct=function(t){return{type:M,widget:t,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:W}},at=function(){return{type:L,target:arguments.length>0&&void 0!==arguments[0]?arguments[0]:W}},ft=function(t){return{type:k,widget:t,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:W}},lt=function(t){return{type:U,value:t}}},367306:(t,e,n)=>{"use strict";n.d(e,{Wy:()=>i,i$:()=>u,P0:()=>c,NB:()=>a,MZ:()=>f,J:()=>l,DZ:()=>d,hS:()=>s,CN:()=>p,fd:()=>y,Yl:()=>v,Ip:()=>b});var r=n(22222),o=n(324684),i=function(t){return t&&t.dashboard&&t.dashboard.editor&&t.dashboard.editor.available},u=function(t){return t&&t.dashboard&&t.dashboard.editing},c=function(t){return t&&t.dashboard&&t.dashboard.showConnections},a=function(t){return t&&t.dashboard&&t.dashboard.resource},f=function(t){return t&&t.dashboard&&t.dashboard.loading},l=function(t){return t&&t.browser&&t.browser.mobile},d=(0,r.P1)(o.F,a,l,(function(t,e,n){return n?!n:e&&e.canEdit||isNaN(t.substr(-4))})),s=function(t){var e;return null==t||null===(e=t.dashboard)||void 0===e?void 0:e.originalData},p=function(t){return t&&t.dashboard&&t.dashboard.services},y=function(t){return t&&t.dashboard&&t.dashboard.selectedService},v=function(t){return t&&t.dashboard&&t.dashboard.mode||"view"},b=function(t){var e;return(null===(e=t.dashboard)||void 0===e?void 0:e.isNew)||!1}},324684:(t,e,n)=>{"use strict";n.d(e,{F:()=>i,y:()=>u});var r=n(227361),o=n.n(r),i=function(t){return o()(t,"router.location.pathname")||"/"},u=function(t){return o()(t,"router.location.search")||""}},401757:(t,e,n)=>{"use strict";n.d(e,{E2:()=>S,YI:()=>I,GW:()=>j,zm:()=>P,lF:()=>G,Jb:()=>A,E5:()=>W,YR:()=>_,jx:()=>C,zA:()=>M,r0:()=>L,xI:()=>k,ie:()=>U,p:()=>x,yZ:()=>V,hF:()=>Y,Xu:()=>F,HU:()=>z,nA:()=>H,JT:()=>$,Wo:()=>B,um:()=>J,h9:()=>X,md:()=>Z}),n(313311);var r=n(227361),o=n.n(r),i=n(984596),u=n.n(i),c=n(701469),a=n.n(c),f=n(385564),l=n.n(f),d=n(800827),s=n(675110),p=n(324684),y=n(557579),v=n(246781),b=n(367306),g=n(22222),m=n(784715);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(196958);var S=function(t){return o()(t,"widgets.builder.settings")},D=function(t){return o()(t,"widgets.dependencies")||{}},T=function(t){return Object.keys(D(t)).map((function(e){return D(t)[e]}))},I=function(t){return o()(t,"widgets.builder.editor")},j=(0,g.P1)(I,s.Iz,(function(t){return(0,b.Wy)(t)&&(0,b.i$)(t)}),(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).layer||!(arguments.length>2?arguments[2]:void 0)&&(arguments.length>1?arguments[1]:void 0)})),P=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].widgets"))},G=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].collapsed"))},A=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].maximized"))},W=(0,g.P1)(P,G,A,(function(t,e,n){if(t){if(null!=n&&n.widget)return t.filter((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id===n.widget.id}));if(e)return t.filter((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return!e[t]}))}return t})),_=(0,g.P1)(G,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t)})),N=function(t){return(P(t)||[]).filter((function(){return"map"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgetType}))},R=function(t){return(P(t)||[]).filter((function(){return"table"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgetType}))},C=(0,g.P1)(N,R,d.Od,p.F,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0;return{availableDependencies:l()(t.map((function(t){var e=t.id,n=t.maps;return(void 0===n?[]:n).map((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mapId;return"widgets[".concat(e,"].maps[").concat(t,"].map")}))}))).concat(u()(n).map((function(){return"map"}))).concat(u()(e).filter((function(){return-1===r.indexOf("viewer")})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),M=(0,g.P1)(N,R,d.Od,p.F,I,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=o&&"map"!==o.widgetType?o&&o.layer||{}:o&&o.map&&o.map.layers||[];return{availableDependencies:l()(t.map((function(t){var e=t.id,n=t.maps;return(void 0===n?[]:n).map((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mapId;return"widgets[".concat(e,"].maps[").concat(t,"].map")}))}))).concat(u()(n).map((function(){return n?"map":null}))).filter((function(t){return t})).concat(u()(e).filter((function(){return-1===r.indexOf("viewer")})).filter((function(t){return a()(i)||i.name===t.layer.name})).filter((function(t){return o&&o.id!==t.id})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),L=function(t){return o()(S(t),"".concat(y.jv))},k=function(t){return o()(L(t),"active")},U=(0,g.P1)(P,(function(t){return(0,v.Ug)(t)})),x=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].layouts"))},V=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].layout"))},Y=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].widgets"))},F=function(t){return o()(t,"widgets.tray")},z=function(t){return(Y(t)||[]).length>0},H=function(t){return o()(t,"widgets.containers[".concat(y.VR,"].layouts"))},$=function(t){return o()(I(t),"layer")},B=function(t){return o()(t,"widgets.builder.editor.returnToFeatureGrid",!1)},J=function(t){return o()(I(t),"filter")},X=(0,m.y)(D,T,(function(t){return T(t).map((function(e){return 0===e.indexOf("map.")?o()((0,d.Od)(t),e.slice(4)):e.match(y.oU)?(0,v.D6)(e,P(t),N(t)):o()(t,e)}))}),(function(t,e,n){return e.reduce((function(e,r,o){return w(w({},e),{},O({},Object.keys(t)[o],n[o]))}),{})})),Z=(0,g.zB)({widgets:P,layouts:x,catalogs:b.CN})},246781:(t,e,n)=>{"use strict";n.d(e,{sq:()=>k,Mt:()=>L,D6:()=>R,Ug:()=>M,IO:()=>U});var r=n(227361),o=n.n(r),i=n(313311),u=n.n(i),c=(n(281763),n(59854),n(630998)),a=n.n(c),f=n(264721),l=n.n(f),d=n(441609),s=n.n(d),p=n(150361),y=n.n(p),v=n(957557),b=n.n(v),g=n(984596),m=n.n(g),E=n(557579),h=function(t,e,n){var r,o,i=[],u=[],c=t;for(i.push(c);i.length>0;)if(!n[c=i.shift()])for(n[c]=!0,u.push(c),r=0;r<e.length;r+=1)(o=e[r])[0]!==c||n[o[1]]?o[1]!==c||n[o[0]]||i.push(o[0]):i.push(o[1]);return u},w=function(t){for(var e={},n=[],r=0,o=t.length;r<o;r+=1){var i=t[r],u=i[0],c=i[1],a=null;e[u]?e[c]||(a=c):a=u,a&&n.push(h(a,t,e))}return n},O=n(443143),S=n(423570),D=n.n(S);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||W(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){f=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(t,e)||W(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=function(t,e){var n=A(E.oU.exec(t),2),r=n[0],o=n[1];return r?u()(e,{id:o}):null},R=function(t,e,n){var r=E.oU.exec(t),i=r&&r[2];i=function(t,e,n){var r=A(E.h9.exec(t)||[],2),o=r[0],i=r[1],c=(u()(n,{id:e})||{}).maps;if(o&&!s()(c)){var f=a()(c,{mapId:i});return o.replace(i,f)}return t}(i,r[1],n);var c=N(t,e);return i?o()(c,i):c},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(e,n){var r=o()(n,"mapSync")&&o()(n,"dependenciesMap")||{},i=Object.keys(r).map((function(e){return N(r[e],t)}))||[];return[].concat(G(e),G(i.filter((function(t){return void 0!==t})).map((function(t){return[n.id,t.id]}))))}),[])},M=function(){var t=w(C(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])),e=(0,O.qH)(190,340,t.length+1,{base:10,range:360,s:.67,v:.67});return t.map((function(t,n){return{color:e[n],widgets:t}}))},L=function(){return[{value:"Count",label:"widgets.operations.COUNT"},{value:"Sum",label:"widgets.operations.SUM"},{value:"Average",label:"widgets.operations.AVG"},{value:"StdDev",label:"widgets.operations.STDDEV"},{value:"Min",label:"widgets.operations.MIN"},{value:"Max",label:"widgets.operations.MAX"}]},k=function(t){var e=["layers","viewport","zoom","center"],n=y()(t),r=n.widgets||{},o=[];return j(j({},n),{},{widgets:r.map((function(t){var n=j({},t);if("map"===t.widgetType&&t.map){var r=D()();n=b()(j(j({},t),{},{selectedMapId:r,maps:m()(j(j({},t.map),{},{mapId:r}))}),"map"),o.push({widgetId:n.id,mapId:r})}if(!s()(n.dependenciesMap)){var i=Object.values(n.dependenciesMap)[0],c=A(E.oU.exec(i)||[],2)[1],a=u()(o,{widgetId:c})||{},f=a.widgetId,d=a.mapId;if(f)return j(j({},n),{},{dependenciesMap:Object.keys(n.dependenciesMap).filter((function(t){return void 0!==n.dependenciesMap[t]})).reduce((function(t,r){return l()(e,r)?j(j({},t),{},P({},r,n.dependenciesMap[r].replace(".map.",".maps[".concat(d,"].")))):j(j({},t),{},P({},r,n.dependenciesMap[r]))}),{})})}return n}))})},U=function(){var t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0,n=G(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]);return n.filter((function(t){return t.dependenciesMap})).some((function(e){return Object.values(e.dependenciesMap).some((function(e){return(E.oU.exec(e)||[])[1]===t}))}))&&(n=n.map((function(n){var r=n.dependenciesMap,o=!s()(r)&&(E.oU.exec(Object.values(r)[0])||[])[1];return j(j({},n),!s()(r)&&o===t&&{dependenciesMap:Object.keys(r).reduce((function(t,n){var o=A(E.jB.exec(r[n])||[],3)[2];return j(j({},t),{},P({},n,o?r[n].replace(o,e):r[n]))}),{})})}))),n}}}]);