(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[55972,888],{580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}},763105:(e,t,n)=>{var r=n(234963),i=n(580760),s=n(267206),o=n(701469);e.exports=function(e,t){return(o(e)?r:i)(e,s(t,3))}},313880:(e,t,n)=>{var r=n(479833);e.exports=function(){var e=arguments,t=r(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},623068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(558493),i=n(173381),s=n(438906),o=n(613002);class l extends r.Z{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new l(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const n=this.getStyle();return n&&e.setStyle(n),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,o.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=(0,o.oL)(e,i.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?function(e){if("function"==typeof e)return e;let t;return Array.isArray(e)?t=e:((0,s.h)("function"==typeof e.getZIndex,41),t=[e]),function(){return t}}(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}const a=l},798090:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(173381),i=n(208204),s=n(421915),o=n(613002);class l extends i.Z{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(o.bN),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push((0,o.oL)(this.geometries_[e],r.Z.CHANGE,this.changed,this))}clone(){const e=new l(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,t,n,r){if(r<(0,s.qf)(this.getExtent(),e,t))return r;const i=this.geometries_;for(let s=0,o=i.length;s<o;++s)r=i[s].closestPointXY(e,t,n,r);return r}containsXY(e,t){const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)if(n[r].containsXY(e,t))return!0;return!1}computeExtent(e){(0,s.YN)(e);const t=this.geometries_;for(let n=0,r=t.length;n<r;++n)(0,s.l7)(e,t[n].getExtent());return e}getGeometries(){return a(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].getType()===this.getType()?e=e.concat(t[n].getGeometriesArrayRecursive()):e.push(t[n]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=[],n=this.geometries_;let r=!1;for(let i=0,s=n.length;i<s;++i){const s=n[i],o=s.getSimplifiedGeometry(e);t.push(o),o!==s&&(r=!0)}if(r){const e=new l(null);return e.setGeometriesArray(t),e}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const t=this.geometries_;for(let n=0,r=t.length;n<r;++n)if(t[n].intersectsExtent(e))return!0;return!1}isEmpty(){return 0===this.geometries_.length}rotate(e,t){const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].rotate(e,t);this.changed()}scale(e,t,n){n||(n=(0,s.qg)(this.getExtent()));const r=this.geometries_;for(let i=0,s=r.length;i<s;++i)r[i].scale(e,t,n);this.changed()}setGeometries(e){this.setGeometriesArray(a(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].applyTransform(e);this.changed()}translate(e,t){const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function a(e){const t=[];for(let n=0,r=e.length;n<r;++n)t.push(e[n].clone());return t}const h=l},697658:(e,t,n)=>{"use strict";n.d(t,{df:()=>v,YD:()=>_});var r=n(722122),i=n(419756),s=n(663349),o=n(841788);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(124852),h=n(441143),u=n.n(h),c=new Map,g=new Map,p=new Map,d=0;function m(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,i=r.root,s=r.rootMargin,o=r.threshold;if(u()(!c.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var l=function(e){return e?p.has(e)?p.get(e):(d+=1,p.set(e,d.toString()),p.get(e)+"_"):""}(i)+(s?o.toString()+"_"+s:o.toString()),a=g.get(l);a||(a=new IntersectionObserver(y,n),l&&g.set(l,a));var h={callback:t,element:e,inView:!1,observerId:l,observer:a,thresholds:a.thresholds||(Array.isArray(o)?o:[o])};return c.set(e,h),a.observe(e),h}}function f(e){if(e){var t=c.get(e);if(t){var n=t.observerId,r=t.observer,i=r.root;r.unobserve(e);var s=!1,o=!1;n&&c.forEach((function(t,r){r!==e&&(t.observerId===n&&(s=!0,o=!0),t.observer.root===i&&(o=!0))})),!o&&i&&p.delete(i),r&&!s&&r.disconnect(),c.delete(e)}}}function y(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,i=c.get(r);if(i&&n>=0){var s=i.thresholds.some((function(e){return i.inView?n>e:n>=e}));void 0!==t&&(s=s&&t),i.inView=s,i.callback(s,e)}}))}var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,l((0,s.Z)(t),"state",{inView:!1,entry:void 0}),l((0,s.Z)(t),"node",null),l((0,s.Z)(t),"handleNode",(function(e){t.node&&f(t.node),t.node=e||null,t.observeNode()})),l((0,s.Z)(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(f(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(f(this.node),this.node=null)},n.componentWillUnmount=function(){this.node&&(f(this.node),this.node=null)},n.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},n.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var s=this.props,o=s.children,l=s.as,h=s.tag,u=(s.triggerOnce,s.threshold,s.root,s.rootMargin,(0,i.Z)(s,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return(0,a.createElement)(l||h||"div",(0,r.Z)({ref:this.handleNode},u),o)},t}(a.Component);function _(e){void 0===e&&(e={});var t=(0,a.useRef)(),n=(0,a.useState)({inView:!1,entry:void 0}),r=n[0],i=n[1],s=(0,a.useCallback)((function(n){t.current&&f(t.current),n&&m(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&f(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return(0,a.useDebugValue)(r.inView),[s,r.inView,r.entry]}l(v,"displayName","InView"),l(v,"defaultProps",{threshold:0,triggerOnce:!1})},41545:e=>{e.exports=r,e.exports.parse=r,e.exports.stringify=function e(t){function n(e){return e.join(" ")}function r(e){return e.map(n).join(", ")}function i(e){return e.map(r).map(s).join(", ")}function s(e){return"("+e+")"}switch("Feature"===t.type&&(t=t.geometry),t.type){case"Point":return"POINT ("+n(t.coordinates)+")";case"LineString":return"LINESTRING ("+r(t.coordinates)+")";case"Polygon":return"POLYGON ("+i(t.coordinates)+")";case"MultiPoint":return"MULTIPOINT ("+r(t.coordinates)+")";case"MultiPolygon":return"MULTIPOLYGON ("+t.coordinates.map(i).map(s).join(", ")+")";case"MultiLineString":return"MULTILINESTRING ("+i(t.coordinates)+")";case"GeometryCollection":return"GEOMETRYCOLLECTION ("+t.geometries.map(e).join(", ")+")";default:throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input")}};var t=/[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/,n=new RegExp("^"+t.source+"(\\s"+t.source+"){1,}");function r(e){var t,r=e.split(";"),i=r.pop(),s=(r.shift()||"").split("=").pop(),o=0;function l(e){var t=i.substring(o).match(e);return t?(o+=t[0].length,t[0]):null}function a(){l(/^\s*/)}function h(){a();for(var e,t=0,r=[],i=[r],s=r;e=l(/^(\()/)||l(/^(\))/)||l(/^(,)/)||l(n);){if("("===e)i.push(s),s=[],i[i.length-1].push(s),t++;else if(")"===e){if(0===s.length)return null;if(!(s=i.pop()))return null;if(0==--t)break}else if(","===e)s=[],i[i.length-1].push(s);else{if(e.split(/\s/g).some(isNaN))return null;Array.prototype.push.apply(s,e.split(/\s/g).map(parseFloat))}a()}return 0!==t?null:r}function u(){for(var e,t,r=[];t=l(n)||l(/^(,)/);)","===t?(r.push(e),e=[]):t.split(/\s/g).some(isNaN)||(e||(e=[]),Array.prototype.push.apply(e,t.split(/\s/g).map(parseFloat))),a();return e?(r.push(e),r.length?r:null):null}return(t=function e(){return function(){if(!l(/^(point(\sz)?)/i))return null;if(a(),!l(/^(\()/))return null;var e=u();return e?(a(),l(/^(\))/)?{type:"Point",coordinates:e[0]}:null):null}()||function(){if(!l(/^(linestring(\sz)?)/i))return null;if(a(),!l(/^(\()/))return null;var e=u();return e&&l(/^(\))/)?{type:"LineString",coordinates:e}:null}()||function(){if(!l(/^(polygon(\sz)?)/i))return null;a();var e=h();return e?{type:"Polygon",coordinates:e}:null}()||function(){if(!l(/^(multipoint)/i))return null;a();var e=i.substring(i.indexOf("(")+1,i.length-1).replace(/\(/g,"").replace(/\)/g,"");i="MULTIPOINT ("+e+")";var t=h();return t?(a(),{type:"MultiPoint",coordinates:t}):null}()||function(){if(!l(/^(multilinestring)/i))return null;a();var e=h();return e?(a(),{type:"MultiLineString",coordinates:e}):null}()||function(){if(!l(/^(multipolygon)/i))return null;a();var e=h();return e?{type:"MultiPolygon",coordinates:e}:null}()||function(){var t,n=[];if(!l(/^(geometrycollection)/i))return null;if(a(),!l(/^(\()/))return null;for(;t=e();)n.push(t),a(),l(/^(,)/),a();return l(/^(\))/)?{type:"GeometryCollection",geometries:n}:null}()}())&&s.match(/\d+/)&&(t.crs={type:"name",properties:{name:"urn:ogc:def:crs:EPSG::"+s}}),t}}}]);