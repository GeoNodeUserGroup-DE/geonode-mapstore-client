(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[78225],{868143:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>W});var o=e(124852),r=e.n(o),i=e(867076),c=e(22222),u=e(171703),s=e(675263),a=e.n(s),l=e(322843),d=e(401757),p=e(367306),f=e(296311),b=e(557579),y=e(555927);const h=(0,i.compose)((0,u.connect)((function(){return{}}),{backFromWizard:function(){return(0,b.Rz)("layer",void 0)}}),(0,i.withProps)((function(t){var n=t.backFromWizard;return{exitButton:{onClick:void 0===n?function(){}:n,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var m=e(975480),g=e(245856),v=e(807691),w=e(24412),P=e(80717);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function S(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,D(o.key),o)}}function E(t,n,e){return n=j(n),function(t,n){if(n&&("object"===C(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,k()?Reflect.construct(n,e||[],j(t).constructor):n.apply(t,e))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function O(t,n){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},O(t,n)}function _(t,n,e){return(n=D(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function D(t){var n=function(t,n){if("object"!=C(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(n)?n:n+""}var M=(0,i.compose)((0,u.connect)(f.Nb,{toggleConnection:b.w2,triggerShowConnections:y.G9}),(0,u.connect)(f.Tw),(0,i.withProps)((function(t){var n=t.availableDependencies;return{availableDependencies:(void 0===n?[]:n).filter((function(t){return"map"!==t}))}})),h)(g.Z),T=(0,i.compose)((0,u.connect)((0,c.P1)(p.P0,d.HU,p.DZ,d.ie,(function(t,n,e){return{showConnections:t,hasConnections:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]).length>0,hasWidgets:n,canEdit:e}})),{onShowConnections:y.G9,onAddWidget:b.A4}),(0,i.withProps)((function(t){var n=t.onAddWidget,e=void 0===n?function(){}:n,o=t.hasWidgets,r=t.canEdit,i=t.hasConnections,c=t.showConnections,u=t.onShowConnections,s=void 0===u?function(){}:u;return{buttons:[{glyph:"plus",tooltipId:"dashboard.editor.addACardToTheDashboard",bsStyle:"primary",visible:r,id:"ms-add-card-dashboard",onClick:function(){return e()}},{glyph:c?"bulb-on":"bulb-off",tooltipId:c?"dashboard.editor.hideConnections":"dashboard.editor.showConnections",bsStyle:c?"success":"primary",visible:!!o&&!!i||!r,onClick:function(){return s(!c)}}]}})))(P.Z),z=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),E(this,n,arguments)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&O(t,n)}(n,t),e=n,(o=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var t=this,n=this.props.pluginCfg.selectedService||"",e=this.props.pluginCfg.services||{};return this.props.editing?r().createElement("div",{className:"dashboard-editor de-builder"},r().createElement(M,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:n,defaultServices:e,enabled:this.props.editing,onClose:function(){return t.props.setEditing(!1)},catalog:this.props.catalog})):r().createElement("div",{className:"ms-vertical-toolbar dashboard-editor de-toolbar",id:this.props.id},r().createElement(T,{transitionProps:!1,btnGroupProps:{vertical:!0},btnDefaultProps:{tooltipPosition:"right",className:"square-button-md",bsStyle:"primary"}}),this.props.loading?r().createElement(m.Z,{style:{position:"fixed",bottom:0}}):null)}}])&&S(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o}(r().Component);_(z,"propTypes",{id:a().string,editing:a().bool,loading:a().bool,limitDockHeight:a().bool,fluid:a().bool,zIndex:a().number,dockSize:a().number,position:a().string,onMount:a().func,onUnmount:a().func,setEditing:a().func,dimMode:a().string,src:a().string,style:a().object,pluginCfg:a().object,catalog:a().object,disableEmptyMap:a().bool}),_(z,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,loading:!0,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){}});var N=(0,u.connect)((0,c.P1)(p.i$,p.MZ,(function(t,n){return{editing:t,loading:n}})),{setEditing:y.D_,onMount:function(){return(0,y.Nl)(!0)},onUnmount:function(){return(0,y.Nl)(!1)}})(z);const W=(0,l.rx)("DashboardEditor",{component:N,reducers:{dashboard:w.Z},epics:v.ZP})},274621:(t,n,e)=>{"use strict";e.d(n,{np:()=>o,L3:()=>r,jl:()=>i,y8:()=>c,qg:()=>u}),e(727418),e(227361);var o=function(t){return t&&t.security&&t.security.user},r=function(t){return o(t)&&o(t).role},i=function(t){return t&&t.security&&t.security.user},c=function(t){return t.security&&t.security.token},u=function(t){return"ADMIN"===r(t)}}}]);