(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[63109],{240626:(e,t,r)=>{"use strict";r.d(t,{bL:()=>n,f6:()=>o,E_:()=>i,ai:()=>a,U8:()=>c,Pg:()=>l});var n="SET_SEARCH_CONFIG_PROP",o="RESET_SEARCH_CONFIG",i="UPDATE_SERVICE";function a(e,t){return{type:n,property:e,value:t}}function c(){return{type:o,page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}function l(e){return{type:i,service:e,idx:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1}}},399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(461365),o=r(356936);const i=(0,n.Z)(o.h_)},4298:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Be});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),c=r(480681),l=r(729679),s=r(807472),u=r(399534),p=r(481756),f=r(227361),y=r.n(f),m=r(618446),v=r.n(m),b=r(782904),d=r(240626),h=r(805346),g=r(45697),E=r.n(g);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,x(n.key),n)}}function w(e,t,r){return t=j(t),function(e,t){if(t&&("object"==P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_()?Reflect.construct(t,r||[],j(e).constructor):t.apply(e,r))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t,r){return(t=x(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:t+""}var I=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return C(e=w(this,t,[].concat(n)),"getOptions",(function(){return 0===e.props.services.length?o().createElement("div",{className:"search-service-name"},o().createElement(h.Z,{msgId:"search.serviceslistempty"})):e.props.services.map((function(t,r){return o().createElement("div",{className:"search-service-item",key:r},o().createElement("span",{className:"search-service-name"},t.name),o().createElement(l.Z,{className:"list-remove-btn",onConfirm:function(){return e.remove(r)},text:o().createElement(c.gG,{glyph:"remove-circle"}),confirming:{className:"text-warning list-remove-btn",text:o().createElement(h.Z,{msgId:"search.confirmremove"})}}),o().createElement(c.gG,{onClick:function(){return e.edit(t,r)},glyph:"pencil"}))}))})),C(e,"edit",(function(t,r){e.props.onPropertyChange("init_service_values",t),e.props.onPropertyChange("service",t),e.props.onPropertyChange("editIdx",r),e.props.onPropertyChange("page",1)})),C(e,"toggleOverride",(function(){var t=e.props,r=t.services,n=t.override;e.props.onPropertyChange("textSearchConfig",{services:r,override:!n})})),C(e,"remove",(function(t){var r=e.props,n=r.services,o=r.override,i=n.filter((function(e,r){return r!==t}));e.props.onPropertyChange("textSearchConfig",{services:i,override:o})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.override;return o().createElement("form",null,o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.serviceslistlabel"})),o().createElement("div",{className:"services-list"},this.getOptions())),o().createElement(c.XZ,{checked:e,onChange:this.toggleOverride},o().createElement(h.Z,{msgId:"search.overriedservice"})))}}])&&O(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);C(I,"propTypes",{services:E().array,override:E().bool,service:E().object,onPropertyChange:E().func}),C(I,"contextTypes",{messages:E().object}),C(I,"defaultProps",{services:[],override:!1,onPropertyChange:function(){}});const Z={Element:I,validate:function(){return!0}};var N=r(727418),k=r.n(N);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,q(n.key),n)}}function R(e,t,r){return t=F(t),function(e,t){if(t&&("object"==T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,B()?Reflect.construct(t,r||[],F(e).constructor):t.apply(e,r))}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function A(e,t,r){return(t=q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=function(e,t){if("object"!=T(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==T(t)?t:t+""}var J=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return A(e=R(this,t,[].concat(n)),"updateProp",(function(t,r){var n=r.target.value;"queriableAttributes"===t&&(n=n.split(","));var o=k()({},e.props.service.options,A({},t,n));e.props.onPropertyChange("service",k()({},e.props.service,{options:o}))})),A(e,"updateName",(function(t){var r=t.target.value;e.props.onPropertyChange("service",k()({},e.props.service,{name:r}))})),A(e,"updateMaxFeatures",(function(t){var r=k()({},e.props.service.options,{maxFeatures:parseFloat(t[0],10)});e.props.onPropertyChange("service",k()({},e.props.service,{options:r}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.service,t=e.options,r=void 0===t?{}:t;return o().createElement("form",null,o().createElement("span",{className:"wfs-required-props-title"},o().createElement(h.Z,{msgId:"search.s_wfs_props_label"})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_name"})),o().createElement(c.NI,{value:e.name,key:"name",type:"text",onChange:this.updateName})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_url"})),o().createElement(c.NI,{value:r.url,key:"url",type:"text",onChange:this.updateProp.bind(null,"url")})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_layer"})),o().createElement(c.NI,{value:r.typeName,key:"typeName",type:"text",onChange:this.updateProp.bind(null,"typeName")})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_attributes"})),o().createElement(c.NI,{value:([r.queriableAttributes]||0).join(","),key:"queriableAttributes",type:"text",onChange:this.updateProp.bind(null,"queriableAttributes")})))}}])&&D(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);A(J,"propTypes",{service:E().object,onPropertyChange:E().func}),A(J,"defaultProps",{service:{},onPropertyChange:function(){}});const L={Element:J,validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.name,o=void 0===n?"":n,i=r.url,a=void 0===i?"":i,c=r.typeName,l=void 0===c?"":c,s=r.queriableAttributes,u=void 0===s?"":s;return o.length>0&&a.length>0&&l.length>0&&u.length>0}};var G=r(185552),V=r.n(G),X=r(743129),U=r(86638);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(null,arguments)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ne(n.key),n)}}function Q(e,t,r){return t=ee(t),function(e,t){if(t&&("object"==z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Y()?Reflect.construct(t,r||[],ee(e).constructor):t.apply(e,r))}function Y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Y=function(){return!!e})()}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e,t){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},te(e,t)}function re(e,t,r){return(t=ne(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ne(e){var t=function(e,t){if("object"!=z(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==z(t)?t:t+""}var oe=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return re(e=Q(this,t,[].concat(n)),"updateProp",(function(t,r,n){var o=y()(n,r||"target.value");e.props.onPropertyChange("service",k()({},e.props.service,re({},t,o)))})),re(e,"updatePriority",(function(t){e.props.onPropertyChange("service",k()({},e.props.service,{priority:parseFloat(t[0],10)}))})),re(e,"updateLaunchInfoPanel",(function(t){var r=t&&t.value?t.value:"";"no_info"===r&&(r=void 0),e.props.onPropertyChange("service",W(W({},e.props.service),{},{launchInfoPanel:r,openFeatureInfoButtonEnabled:!1,forceSearchLayerVisibility:!1}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&te(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e,t,r=this.props.service,n=this.props.launchInfoPanelOptions||[{label:(0,U.S$)(this.context.messages,"search.s_launch_info_panel.no_info"),value:"no_info"},{label:(0,U.S$)(this.context.messages,"search.s_launch_info_panel.all_layers"),value:"all_layers"},{label:(0,U.S$)(this.context.messages,"search.s_launch_info_panel.single_layer"),value:"single_layer"}],i=(null==r?void 0:r.launchInfoPanel)||this.props.launchInfoPanelDefault;return o().createElement("form",null,o().createElement("span",{className:"wfs-required-props-title"},o().createElement(h.Z,{msgId:"search.s_result_props_label"})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_title"})),o().createElement(c.NI,{value:r.displayName,key:"displayName",type:"text",placeholder:'e.g. "${properties.name}"',onChange:this.updateProp.bind(null,"displayName",null)})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_description"})),o().createElement(c.NI,{value:r.subTitle,key:"subTitle",type:"text",onChange:this.updateProp.bind(null,"subTitle",null)})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_priority"}),o().createElement(c.__,{key:"priority-label",className:"slider-label"},parseInt(r.priority||1,10))),o().createElement(V(),{key:"priority",start:[r.priority||1],step:1,range:{min:1,max:10},onSlide:this.updatePriority}),o().createElement("span",{className:"priority-info"},o().createElement(h.Z,{msgId:"search.s_priority_info"}))),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_launch_info_panel.label"})),o().createElement(X.ZP,H({options:n,clearable:!1,value:i,onChange:this.updateLaunchInfoPanel},this.props.launchInfoPanelSelectOptions)),"single_layer"===i?o().createElement(c.cw,null,o().createElement(c.XZ,{checked:null!==(e=null==r?void 0:r.openFeatureInfoButtonEnabled)&&void 0!==e&&e,onChange:this.updateProp.bind(null,"openFeatureInfoButtonEnabled","target.checked")},o().createElement(h.Z,{msgId:"search.s_launch_info_panel.openFeatureInfoButtonCheckbox"})),o().createElement(c.XZ,{checked:null!==(t=null==r?void 0:r.forceSearchLayerVisibility)&&void 0!==t&&t,onChange:this.updateProp.bind(null,"forceSearchLayerVisibility","target.checked")},o().createElement(h.Z,{msgId:"search.s_launch_info_panel.forceSearchLayerVisibility"}))):null,o().createElement("span",{className:"priority-info with-top-margin"},o().createElement(h.Z,{msgId:"search.s_launch_info_panel.".concat(i,"_description")}))))}}])&&K(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);re(oe,"propTypes",{service:E().object,launchInfoPanelOptions:E().array,launchInfoPanelDefault:E().string,launchInfoPanelSelectOptions:E().object,onPropertyChange:E().func}),re(oe,"contextTypes",{messages:E().object}),re(oe,"defaultProps",{service:{},launchInfoPanelDefault:"no_info",launchInfoPanelSelectOptions:{},onPropertyChange:function(){}});const ie={Element:oe,validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.displayName&&e.displayName.length>0}};function ae(e){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(e)}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){me(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ve(n.key),n)}}function ue(e,t,r){return t=fe(t),function(e,t){if(t&&("object"==ae(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,pe()?Reflect.construct(t,r||[],fe(e).constructor):t.apply(e,r))}function pe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(pe=function(){return!!e})()}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},fe(e)}function ye(e,t){return ye=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ye(e,t)}function me(e,t,r){return(t=ve(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){var t=function(e,t){if("object"!=ae(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=ae(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ae(t)?t:t+""}var be=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return me(e=ue(this,t,[].concat(n)),"updateProp",(function(t,r){var n=r.target.value,o=k()({},e.props.service.options,me({},t,n));e.props.onPropertyChange("service",k()({},e.props.service,{options:o}))})),me(e,"updateSliderProps",(function(t,r){var n=le(le({},e.props.service.options),{},me({},t,parseInt(r[0],10)));e.props.onPropertyChange("service",le(le({},e.props.service),{},{options:n}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ye(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.service.options,t=void 0===e?{}:e;return o().createElement("form",null,o().createElement("span",{className:"wfs-required-props-title"},o().createElement(h.Z,{msgId:"search.s_wfs_opt_props_label"})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_sort"})),o().createElement(c.NI,{value:t.sortBy,key:"sortBy",type:"text",onChange:this.updateProp.bind(null,"sortBy")})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_max_features"})),o().createElement(V(),{key:"maxFeatures",start:[t.maxFeatures||1],range:{min:1,max:50},onSlide:this.updateSliderProps.bind(null,"maxFeatures")}),o().createElement(c.__,{key:"maxFeatures-label",className:"slider-label"},t.maxFeatures||1)),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_max_zoom"})),o().createElement(V(),{key:"maxZoomLevel",start:[t.maxZoomLevel||21],range:{min:1,max:35},onSlide:this.updateSliderProps.bind(null,"maxZoomLevel")}),o().createElement(c.__,{key:"maxZoomLevel-label",className:"slider-label"},t.maxZoomLevel||21)),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_placeholder"})),o().createElement(c.NI,{value:t.placeholder,key:"placeholder",type:"text",onChange:this.updateProp.bind(null,"placeholder")})),o().createElement(c.cw,null,o().createElement(c.J$,null,o().createElement(h.Z,{msgId:"search.s_tooltip"})),o().createElement(c.NI,{value:t.tooltip,key:"tooltip",type:"text",onChange:this.updateProp.bind(null,"tooltip")})))}}])&&se(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);me(be,"propTypes",{service:E().object,onPropertyChange:E().func}),me(be,"defaultProps",{service:{},onPropertyChange:function(){}});const de={Element:be,validate:function(){return!0}};var he=r(38560),ge=r(815135),Ee=r(322843),Pe=r(360951);function Oe(e){return Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){Ze(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Ne(n.key),n)}}function Se(e,t,r){return t=xe(t),function(e,t){if(t&&("object"==Oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Ce()?Reflect.construct(t,r||[],xe(e).constructor):t.apply(e,r))}function Ce(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Ce=function(){return!!e})()}function xe(e){return xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xe(e)}function Ie(e,t){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ie(e,t)}function Ze(e,t,r){return(t=Ne(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ne(e){var t=function(e,t){if("object"!=Oe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Oe(t)?t:t+""}var ke=(0,ge.Z)(he.Z),Te=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return Ze(e=Se(this,t,[].concat(n)),"canProceed",(function(){var t=e.props,r=t.page,n=t.pages,o=t.service;return n[r].validate(o)})),Ze(e,"isDirty",(function(){var t=e.props,r=t.service,n=t.initServiceValues;return!v()(r,n)})),Ze(e,"renderFooter",(function(){var t=e.props,r=t.page,n=t.pages;return 0===r?o().createElement("span",{role:"footer"},o().createElement(ke,{onClick:e.addService,bsStyle:"primary"},o().createElement(p.Z,{msgId:"search.addbtn"}))):r===n.length-1?o().createElement("span",{role:"footer"},o().createElement(ke,{onClick:e.prev,bsStyle:"primary"},o().createElement(p.Z,{msgId:"search.prevbtn"})),o().createElement(ke,{disabled:!e.canProceed(),onClick:e.update,bsStyle:"success"},o().createElement(p.Z,{msgId:"search.savebtn"}))):o().createElement("span",{role:"footer"},1===r&&e.isDirty()?o().createElement(l.Z,{onConfirm:e.prev,bsStyle:"primary",confirming:{text:o().createElement(p.Z,{msgId:"search.cancelconfirm"})},text:o().createElement(p.Z,{msgId:"search.cancelbtn"})}):o().createElement(ke,{onClick:e.prev,bsStyle:"primary"},o().createElement(p.Z,{msgId:1===r?"search.cancelbtn":"search.prevbtn"})),o().createElement(ke,{disabled:!e.canProceed(),onClick:e.next,bsStyle:"primary"},o().createElement(p.Z,{msgId:"search.nextbtn"})))})),Ze(e,"onClose",(function(){e.props.toggleControl("searchservicesconfig"),e.props.restServiceConfig(0)})),Ze(e,"addService",(function(){var t=e.props.newService;e.props.onPropertyChange("init_service_values",t),e.props.onPropertyChange("service",t),e.props.onPropertyChange("page",1)})),Ze(e,"prev",(function(){var t=e.props.page;t>1?e.props.onPropertyChange("page",t-1):1===t&&e.props.restServiceConfig(0)})),Ze(e,"next",(function(){var t=e.props,r=t.page;r<t.pages.length-1&&e.props.onPropertyChange("page",r+1)})),Ze(e,"update",(function(){var t=e.props,r=t.service,n=t.editIdx;e.props.updateService(r,n)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ie(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.enabled,r=e.pages,n=e.page,i=e.id,a=e.panelStyle,f=e.panelClassName,y=e.titleText,m=e.closeGlyph,v=e.onPropertyChange,b=e.service,d=e.textSearchConfig,h=void 0===d?{}:d,g=e.containerClassName,E=r&&r[n]||null;return t?o().createElement(u.Z,null,o().createElement(s.Z,{id:i,style:_e(_e({},a),{},{display:t?"block":"none"}),containerClassName:g,className:f,draggable:!1,modal:!0},o().createElement("span",{role:"header"},o().createElement("span",null,y),this.isDirty()?o().createElement(l.Z,{className:"close",confirming:{text:o().createElement(p.Z,{msgId:"search.cancelconfirm"}),className:"btn btn-sm btn-warning services-config-editor-confirm-close"},onConfirm:this.onClose,bsStyle:"primary",text:o().createElement(c.gG,{glyph:m})}):o().createElement("button",{onClick:this.onClose,className:"close"},m?o().createElement(c.gG,{glyph:m}):o().createElement("span",null,"×"))),o().createElement("div",{role:"body",className:"services-config-editor"},o().createElement(E.Element,{services:h.services,override:h.override,onPropertyChange:v,service:b})),this.renderFooter())):null}}])&&je(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);Ze(Te,"propTypes",{id:E().string,enabled:E().bool,panelStyle:E().object,panelClassName:E().string,containerClassName:E().string,closeGlyph:E().string,titleText:E().oneOfType([E().string,E().element]),toggleControl:E().func,pages:E().arrayOf(E().shape({Element:E().func.isRequired,validate:E().func.isRequired})),page:E().number,service:E().object,initServiceValues:E().object,onPropertyChange:E().func,newService:E().object.isRequired,updateService:E().func,restServiceConfig:E().func,textSearchConfig:E().object,editIdx:E().number}),Ze(Te,"defaultProps",{id:"search-services-config-editor",enabled:!1,panelStyle:{minWidth:"400px",zIndex:2e3,position:"absolute",top:"100px",minHeight:"300px",left:"calc(50% - 150px)",backgroundColor:"white"},panelClassName:"toolbar-panel",containerClassName:"",closeGlyph:"1-close",titleText:o().createElement(p.Z,{msgId:"search.configpaneltitle"}),closePanel:function(){},onPropertyChange:function(){},page:0,newService:{type:"wfs",name:"",displayName:"",subTitle:"",priority:1,options:{url:"",typeName:"",queriableAttributes:"",sortBy:"",maxFeatures:5,srsName:"EPSG:4326"}}});var De=(0,i.connect)((function(e){var t=e.controls,r=void 0===t?{}:t,n=e.searchconfig,o=void 0===n?{}:n;return{enabled:y()(r,"searchservicesconfig.enabled",!1),pages:[Z,L,ie,de],page:y()(o,"page",0),service:y()(o,"service",{}),initServiceValues:y()(o,"init_service_values",{}),textSearchConfig:y()(o,"textSearchConfig",{}),editIdx:o&&o.editIdx}}),{toggleControl:b.Xi,onPropertyChange:d.ai,restServiceConfig:d.U8,updateService:d.Pg})(Te),Re=(0,i.connect)((0,a.P1)([function(e){return e.search||null},function(e){var t,r;return(null==e||null===(t=e.controls)||void 0===t||null===(r=t.searchservicesconfig)||void 0===r?void 0:r.enabled)||!1}],(function(e,t){return{activeTool:y()(e,"activeSearchTool","addressSearch"),enabled:t}})),{onToggleControl:b.Xi})((function(e){var t=e.activeTool,r=e.enabled,n=e.onToggleControl;return"addressSearch"===t?o().createElement(ke,{bsStyle:"default",pullRight:!0,className:"square-button-md no-border",tooltipId:"search.searchservicesbutton",tooltipPosition:"bottom",onClick:function(){r||n("searchservicesconfig")}},o().createElement(c.gG,{glyph:"cog"})):null}));const Be=(0,Ee.rx)("SearchServicesConfig",{component:De,containers:{Search:{name:"SearchServicesConfigButton",target:"button",component:Re}},reducers:{searchconfig:Pe.Z}})},360951:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(240626),o=r(782904),i=r(881808),a=r(727418),c=r.n(a);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}const s=function(){var e,t,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case n.bL:return c()({},a,(e={},t=s.property,r=s.value,(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e));case i.ok:var u=s.config.map.text_search_config||s.config.map.text_serch_config;return c()({},a,{textSearchConfig:u});case o.l:case n.f6:return c()({},a,{service:void 0,page:s.page,init_service_values:void 0,editIdx:void 0});case n.E_:var p=(a.textSearchConfig&&a.textSearchConfig.services||[]).slice(),f=c()({},s.service,{priority:parseInt(s.service.priority,10)});return-1!==s.idx?p[s.idx]=f:p.push(f),c()({},a,{service:void 0,page:0,init_service_values:void 0,editIdx:void 0,textSearchConfig:{services:p,override:a.textSearchConfig&&a.textSearchConfig.override||!1}});default:return a}}},945177:(e,t,r)=>{"use strict";var n=r(595318);t.__esModule=!0,t.default=void 0;var o,i=n(r(250139)),a="clearTimeout",c=function(e){var t=(new Date).getTime(),r=Math.max(0,16-(t-s)),n=setTimeout(e,r);return s=t,n},l=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(e){var t=l(e,"request");if(t in window)return a=l(e,"cancel"),c=function(e){return window[t](e)}}));var s=(new Date).getTime();(o=function(e){return c(e)}).cancel=function(e){window[a]&&"function"==typeof window[a]&&window[a](e)};var u=o;t.default=u,e.exports=t.default}}]);