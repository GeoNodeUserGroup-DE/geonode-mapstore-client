(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95121],{217549:(e,r,n)=>{"use strict";n.d(r,{Z:()=>s});var t=n(124852),o=n.n(t),i=n(45697),a=n.n(i),u=["href","readOnly","children"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(null,arguments)}function c(e){var r=e.href,n=e.readOnly,t=e.children,i=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u);return n?t:o().createElement("a",l({href:r},i),t)}c.propTypes={href:a().string,readOnly:a().bool.isRequired,children:a().any},c.defaultProps={href:"",readOnly:!1};const s=c},834065:(e,r,n)=>{"use strict";n.d(r,{Z:()=>d});var t=n(124852),o=n.n(t),i=n(45697),a=n.n(i),u=n(877593),l=n(217549),c=["resource","readOnly","formatHref","pathname"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(null,arguments)}function f(e){var r,n,t,i=e.resource,a=e.readOnly,f=e.formatHref,d=e.pathname,m=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c);return m.detailsPanel?o().createElement(l.Z,{readOnly:a,href:f({pathname:d,query:{"filter{owner.username.in}":null===(t=i.owner)||void 0===t?void 0:t.username}})},i.owner&&(0,u.vW)(i.owner)):o().createElement("p",s({className:"card-text gn-card-user"},m),(null===(r=i.owner)||void 0===r?void 0:r.avatar)&&o().createElement("img",{src:i.owner.avatar,alt:(0,u.vW)(i.owner),className:"gn-card-author-image"}),o().createElement(l.Z,{readOnly:a,href:f({pathname:d,query:{"filter{owner.username.in}":null===(n=i.owner)||void 0===n?void 0:n.username}})},i.owner&&(0,u.vW)(i.owner)))}f.propTypes={resource:a().object,readOnly:a().bool,formatHref:a().func,props:a().any},f.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const d=f},71268:(e,r,n)=>{"use strict";n.d(r,{Z:()=>b});var t=n(124852),o=n.n(t),i=n(805346),a=n(45697),u=n.n(a),l=n(507412),c=n(815135),s=n(441609),f=n.n(s),d=n(535721),m=n(303744),p=(0,c.Z)(m.Z),v=function(e){var r,n,t,a=e.resource,u=void 0===a?{}:a,c=(0,d.fu)(u),s=c.isApproved,m=c.isPublished,v=c.isProcessing,b=c.isCopying,y=c.isDeleting,g=c.isDeleted;return f()(u)?null:o().createElement("p",{className:"gn-resource-status-text"},!v&&(!s||!m)&&o().createElement(p,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:s,isPublished:m},n=r.isApproved,t=r.isPublished,!n&&t?o().createElement(i.Z,{msgId:"gnhome.pendingApproval"}):n||t?t||n?"":o().createElement(i.Z,{msgId:"gnhome.unpublished"}):o().createElement(i.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(y||g||b)&&"0.4rem"},tooltipPosition:"top"},o().createElement(l.Z,{name:"info-circle",className:"gn-resource-status-pending"})),y&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleting"})),g&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleted"})),b&&o().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},o().createElement(i.Z,{msgId:"gnviewer.cloning"})))};v.propTypes={isApproved:u().bool,isPublished:u().bool},v.defaultProps={isApproved:!0,isPublished:!0};const b=v},254746:(e,r,n)=>{"use strict";n.d(r,{Z:()=>f});var t=n(124852),o=n.n(t),i=n(414293),a=n.n(i),u=n(815135),l=n(17594);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(null,arguments)}var s=(0,u.Z)((function(e){return o().createElement("div",c({},e,{className:"gn-unadvertised"}),o().createElement(l.Z,{name:"eye-slash"}))}));const f=function(e){var r=e.resource;return a()(r.advertised)||r.advertised?null:o().createElement(s,{tooltipId:"gnviewer.unadvertised",className:"gn-unadvertised"})}},678833:(e,r,n)=>{"use strict";n.d(r,{Z:()=>p});var t=n(124852),o=n.n(t),i=n(598611),a=n.n(i),u=n(322843);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){f(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function f(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=l(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}const p=function(e){var r=e.items,n=e.loadedPlugins,i=e.loaderComponent,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=(0,t.useRef)({});c.current={items:r,loadedPlugins:n,loaderComponent:i};var f=a()(Object.keys(n||{}),","),m=(0,t.useMemo)((function(){return function(e){return d(e.items).sort((function(e,r){return e.position>r.position?1:-1})).map((function(r){return s(s({},r),{},{Component:r.Component||(0,u.KB)(r,e.loadedPlugins,e.loaderComponent||o().createElement("div",null))})}))||[]}(c.current)}),[f].concat(d(l)));return m}},94228:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>B});var t=n(124852),o=n.n(t),i=n(322843),a=n(171703),u=n(22222),l=n(737275),c=n(398288),s=n(274621),f=n(643892),d=n(452992),m=n(17594),p=n(925108),v=n(782904),b=n(572036),y=n(482100),g=n(303744);var h=n(100824),O=n(625635),w=n(877593),P=n(805346),j=n(675110),E=n(800827),S=n(770058),C=n(807461),A=n(678833),Z=n(535721),I=["hide"];function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function T(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function x(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=k(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=k(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var D=(0,a.connect)((0,u.P1)([function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.data)||null},function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.loading)||!1},function(e){var r,n;return(null==e||null===(r=e.gnresource)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.favorite)||!1},function(e){var r;return(null==e||null===(r=e.gnsave)||void 0===r?void 0:r.savingThumbnailMap)||!1},j.l2,y.km,y.Bs,E.Od,function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.showMapThumbnail)||!1},d.WB],(function(e,r,n,t,o,i,a,u,l,c){return{layers:o,resource:e,loading:r,savingThumbnailMap:t,favorite:n,isThumbnailChanged:i,resourceThumbnailUpdating:a,initialBbox:null==u?void 0:u.bbox,enableMapViewer:l,downloading:c,resourceId:e.pk}})),{closePanel:v.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:f.gw,onMapThumbnail:f.CB,onResourceThumbnail:f.e5,onClose:f.qs,onSetExtent:f.rg})(c.Z),N=(0,a.connect)((0,u.P1)([y.V$,y.fg,y.L4],(function(e,r,n){return{hide:e||!r,resourceType:n}})),{onClick:v.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var r=e.onClick,n=e.hide,t=e.variant,i=e.size,a=e.showMessage,u=e.resourceType,l=((0,Z.NN)()[u]||{}).icon,c=void 0===l?"info-circle":l;return n?null:o().createElement(g.Z,{variant:t,size:i,onClick:function(){r()}},a?o().createElement(P.Z,{msgId:"gnviewer.viewInfo"}):o().createElement(m.Z,{name:c}))}));function R(e,r){var n=e.location,i=e.enabled,a=e.onEditResource,u=e.onEditAbstractResource,l=e.onEditThumbnail,c=e.canEdit,s=e.user,f=e.onClose,d=e.monitoredState,m=e.queryPathname,p=void 0===m?"/":m,v=e.tabs,b=void 0===v?[]:v,y=e.items,g=e.resourceId,O=(0,S._y)(d,{tabs:b}),P=function(e){var r=e.disabled,n=e.onClickOut,o=(0,t.useRef)();return(0,t.useEffect)((function(){function e(e){var t;!r&&(null==o||null===(t=o.current)||void 0===t?void 0:t.contains)&&!o.current.contains(e.target)&&n()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[r,o,n]),o}({disabled:!i,onClickOut:function(){f()}}),j=r.loadedPlugins,E=(0,A.Z)({items:y,loadedPlugins:j},[g]).filter((function(e){return"toolbar"===e.target}));return o().createElement(h.Z,{enabled:i,ref:P,className:"gn-overlay-wrapper"},o().createElement(D,{editTitle:function(e){a(e)},editAbstract:function(e){u(e)},editThumbnail:function(e){l(e,!0)},activeEditMode:i&&c,enableFavorite:!!s,formatHref:function(e){return(0,w.nz)(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?T(Object(n),!0).forEach((function(r){x(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({location:n},e))},tabs:O.tabs,pathname:p,toolbarItems:E}))}var M=(0,a.connect)((0,u.P1)([function(e){var r,n;return"DetailViewer"===(null==e||null===(r=e.controls)||void 0===r||null===(n=r.rightOverlay)||void 0===n?void 0:n.enabled)},y.il,y.V$,y.fg,s.np,function(e){return(0,i.bh)(e,(0,l.u8)("monitorState"))},function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.data)||null}],(function(e,r,n,t,o,i,a){return{enabled:e,canEdit:r,hide:n||!t,user:o,monitoredState:i,resourceId:null==a?void 0:a.pk}})),{onEditResource:f.Br,onEditAbstractResource:f.bI,onEditThumbnail:f.U5,onClose:v.Xg.bind(null,"rightOverlay","enabled",!1)})((0,O.EN)((function(e){var r=e.hide,n=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,I);return r?null:o().createElement(R,n)})));const B=(0,i.rx)("DetailViewer",{component:M,containers:{ActionNavbar:{name:"DetailViewerButton",Component:N}},epics:C.Z,reducers:{gnresource:b.Z,controls:p.Z}})},572036:(e,r,n)=>{"use strict";n.d(r,{Z:()=>w});var t=n(618446),o=n.n(t),i=n(441609),a=n.n(i),u=n(414293),l=n.n(u),c=n(643892),s=n(535721),f=["data"],d=["features"],m=["features"],p=["features"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){h(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function h(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=v(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=v(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var O={selectedLayerPermissions:[],data:{},permissions:[]};const w=function(){var e,r,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case c.$X:return O;case c.ql:return g(g({},t),{},{configError:void 0,loadingResourceConfig:i.loading});case c.nS:return g(g({},t),{},{loading:!1,configError:i.message});case c.W:return g(g({},t),{},{loading:!0});case c.Zf:var u,v,y=i.data||{},h=(y.data,g({},b(y,f))),w=null===(u=t.data)||void 0===u?void 0:u.linkedResources;return a()(w)||h.pk!==(null===(v=t.data)||void 0===v?void 0:v.pk)||(h.linkedResources=w),g(g({},t),{},{error:null,initialResource:g({},i.data),data:h,loading:!1,isNew:!1});case c.Eu:return g(g({},t),{},{initialResource:null,data:null,error:i.error,loading:!1});case c.Vy:return g(g({},t),{},{data:g(g({},t.data),i.properties)});case c.YB:return g(g({},t),{},{type:i.resourceType});case c.xm:return g(g({},O),{},{isNew:!0});case c._f:return g(g({},t),{},{id:i.id});case c.ek:return g(g({},t),{},{permissions:i.permissions});case c.cd:return g(g({},t),{},{data:g(g({},null==t?void 0:t.data),{},{title:null==i?void 0:i.title,name:null==i?void 0:i.title})});case c.pt:return g(g({},t),{},{data:g(g({},null==t?void 0:t.data),{},{abstract:null==i?void 0:i.abstract})});case c.ww:return g(g({},t),{},{data:g(g({},null==t?void 0:t.data),{},{thumbnail_url:null==i?void 0:i.thumbnailUrl,thumbnailChanged:null==i?void 0:i.thumbnailChanged})});case c._Z:return g(g({},t),{},{data:g(g({},null==t?void 0:t.data),{},{updatingThumbnail:!0})});case c.dh:return g(g({},t),{},{showMapThumbnail:i.enabled});case c.p2:return g(g({},t),{},{selectedLayerPermissions:i.permissions});case c.ih:return g(g({},t),{},{initialCompactPermissions:i.compactPermissions,compactPermissions:i.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case c.J5:return g(g({},t),{},{compactPermissions:i.compactPermissions,isCompactPermissionsChanged:!o()((0,s.go)(t.initialCompactPermissions),(0,s.go)(i.compactPermissions)),geoLimits:(0,s.vB)(i.compactPermissions)});case c.uA:if(t.compactPermissions){var P=t.compactPermissions,j=P.users,E=P.organizations,S=P.groups;return g(g({},t),{},{compactPermissions:{users:j.map((function(e){return e.features,b(e,d)})),organizations:E.map((function(e){return e.features,b(e,m)})),groups:S.map((function(e){return e.features,b(e,p)}))},geoLimits:[]})}return t;case c.Y0:return g(g({},t),{},{data:g(g({},t.data),{},{extent:g(g({},null===(e=t.data)||void 0===e?void 0:e.extent),{},{coords:i.coords})})});case c.sA:return g(g({},t),{},{params:i.params});case c.ip:return g(g({},t),{},{viewerLinkedResource:i.resource});case c.F_:return g(g({},t),{},{defaultViewerPlugins:i.plugins});case c.pG:return g(g({},t),{},{selectedLayerIsDataset:!l()(null===(r=i.layer)||void 0===r||null===(n=r.extendedParams)||void 0===n?void 0:n.pk)});default:return t}}},770058:(e,r,n)=>{"use strict";n.d(r,{gj:()=>d,QH:()=>m,mk:()=>p,BK:()=>v,bH:()=>b,_y:()=>y});var t=n(227361),o=n.n(t),i=n(414293),a=n.n(i),u=n(322843),l=n(368523);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;l=!1}else for(;!(l=(t=i.call(n)).done)&&(u.push(t.value),u.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,r,n){var t=r?r.filter((function(e){return e.type===n})):void 0;return void 0===t||t&&0===t.length||t&&t.some((function(r){return e&&e.includes(null==r?void 0:r.value)}))}function m(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",t=r.split(n).map((function(r){return function(e,r){return 0===(null==r?void 0:r.indexOf("${"))?o()(e,r.replace(/^\$\{(.*)\}$/,"$1")):r}(e,r)}));return t.join(n)}var p=function(e){return!(""===e||a()(e))},v=function(e){return function r(n){return n&&"object"===f(n)?Array.isArray(n)?n.map(r):Object.fromEntries(Object.entries(n).map((function(e){var n=c(e,2),t=n[0],o=n[1];return[t,r(o)]}))):e(n)}},b=function e(r,n){return r&&r.reduce((function(r,t){var o=t;return Object.entries(t).forEach((function(r){var i=c(r,2),a=i[0],u=i[1];Array.isArray(u)&&(o[a]=e(t[a],n))})),n(o)&&r.push(o),r}),[])},y=function(e,r){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).filterFunc,t=void 0===n?function(e){return!e.disableIf}:n;return c(b([v((function(r){return(0,u.CU)((function(r){return o()(e,r)}),(0,l.z)(),r)}))(r)],t),1)[0]}}}]);