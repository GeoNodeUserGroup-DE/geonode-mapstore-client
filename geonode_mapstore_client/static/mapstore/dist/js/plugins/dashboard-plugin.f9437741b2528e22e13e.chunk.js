(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7509],{593009:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(45697),o=r.n(n),i=r(124852),c=r.n(i),u=r(472986),a=r.n(u);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function p(e,t,r){return t=d(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}r.e(79509).then(r.bind(r,634903));var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return this.props.loading?c().createElement("div",{className:this.props.className,id:this.props.id},c().createElement(a(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);y(g,"propTypes",{id:o().string,loading:o().bool,className:o().string,spinner:o().string}),y(g,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const h=g},10960:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(45697),o=r.n(n),i=r(124852),c=r.n(i),u=r(580628),a=r(171703),l=r(867076),s=r(22222),p=r(441609),f=r.n(p),d=r(557579),b=r(805346),y=r(691380),m=r(982030);const g=(0,l.branch)((function(e){return e.selectionActive}),(0,l.compose)((0,l.withProps)((function(e){var t=e.className;return{className:"".concat(t," selection-active")}})),(0,l.withHandlers)({getWidgetClass:function(e){var t=e.getWidgetClass,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){return r(e)?r(e)+(o(e)?void 0:" disabled"):o(e)?void 0:" disabled"}},onWidgetClick:function(e){var t=e.onWidgetSelected,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return o(e)?r.apply(void 0,[e].concat(n)):null}}})));var h=r(264945);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e){if("object"!=v(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const j=(0,l.compose)(l.pure,(0,l.defaultProps)({breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},minLayoutWidth:480}),(0,y.ZY)({overrideWidthProvider:!0}),(0,l.withProps)((function(e){var t=e.width;return{width:t<=e.minLayoutWidth?t-18:t,toolsOptions:{showMaximize:!0}}})),(0,l.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.maximized,o=e.minLayoutWidth,i=e.cols,c=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:99}:{},u=null!=n&&n.widget?{width:t,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{};return O({className:"on-map",breakpoints:{md:o,xxs:0},cols:i||{md:6,xxs:1},style:O({position:"absolute",zIndex:50},c)},u)})),(0,m.Z)((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgets;return 0===(void 0===e?[]:e).length}),(function(e){return{glyph:"dashboard",title:e.loading?c().createElement(b.Z,{msgId:"loading"}):c().createElement(b.Z,{msgId:"dashboard.emptyTitle"})}})),(0,l.defaultProps)({isWidgetSelectable:function(){return!0}}),g)(h.Z);var S=r(875859),W=r(367306),x=r(308316),E=r(38842),_=r(401757),T=r(24412),Z=r(807691),k=r(688395),C=r(593009),D=r(322843),I=r(246781);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,V(n.key),n)}}function H(e,t,r){return t=M(t),function(e,t){if(t&&("object"==L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,B()?Reflect.construct(t,r||[],M(e).constructor):t.apply(e,r))}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}function A(e,t,r){return(t=V(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){var t=function(e){if("object"!=L(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}var F=(0,l.compose)((0,a.connect)((0,s.P1)(W.NB,_.hF,_.nA,_.h9,_.xI,(function(e){return(0,_.YI)(e)}),_.ie,W.P0,W.MZ,W.J,x.KV,E.wk,E.fY,_.Jb,x.Pz,W.Wy,(function(e,t,r,n,o,i,c,u,a,l,s,p,d,b,y,m){return{resource:e,loading:a,canEdit:l?!l:e&&!!e.canEdit,layouts:r,dependencies:n,selectionActive:o,editingWidget:i,widgets:f()(b)?t:t.filter((function(e){return e.id===b.widget.id})),groups:c,showGroupColor:u,language:p?s:null,env:d,maximized:b,currentLocale:y,isDashboardOpened:m}})),{editWidget:d.uT,updateWidgetProperty:d.Ij,exportCSV:d.sD,exportImage:d.Rb,deleteWidget:d.E9,onWidgetSelected:d.Gn,onLayoutChange:d.c_,toggleMaximize:d.Pt}),(0,l.withProps)((function(){return{style:{height:"100%",overflow:"auto"}}})),(0,l.withHandlers)({isWidgetSelectable:function(e){var t=e.editingWidget;return function(e){return("map"===e.widgetType||"table"===e.widgetType&&(0,I.t3)(t,e)&&!e.mapSync)&&e.id!==t.id}}}))(j),G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return this.props.enabled?c().createElement(F,{width:this.props.width,height:this.props.height,rowHeight:this.props.rowHeight,cols:this.props.cols,minLayoutWidth:this.props.minLayoutWidth,enableZoomInTblWidget:this.props.enableZoomInTblWidget,widgetOpts:this.props.widgetOpts}):null}}])&&R(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);A(G,"propTypes",{enabled:o().bool,rowHeight:o().number,cols:o().object,minLayoutWidth:o().number,widgetOpts:o().object,enableZoomInTblWidget:o().bool}),A(G,"defaultProps",{enabled:!0,minLayoutWidth:480,enableZoomInTblWidget:!0});const J=(0,D.rx)("Dashboard",{component:(0,u.Z)(G),reducers:{dashboard:T.Z,widgets:S.Z},containers:{SidebarMenu:{name:"Dashboard-spinner",alwaysVisible:!0,position:2e3,tool:(0,a.connect)((function(e){return{loading:(0,W.MZ)(e)}}))(C.Z)}},epics:N(N({},Z.ZP),k.ZP)})},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>p,Yf:()=>f,c3:()=>d,fY:()=>b});var n=r(218721),o=r.n(n),i=r(227361),c=r.n(i),u=r(313311),a=r.n(u),l=r(22222),s=r(308316),p=function(e){return o()(e,"localConfig.localizedLayerStyles")},f=function(e){var t=c()(e,"localConfig.plugins.dashboard",[]),r=a()(t,(function(e){return"DashboardEditor"===e.name}))||{};return c()(r,"cfg.catalog.localizedLayerStyles",!1)},d=function(e){return c()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},b=(0,l.P1)(p,d,s.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))}}]);