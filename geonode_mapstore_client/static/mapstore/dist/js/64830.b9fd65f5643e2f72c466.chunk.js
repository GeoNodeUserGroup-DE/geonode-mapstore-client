(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[64830],{988753:(e,n,t)=>{"use strict";t.d(n,{Yf:()=>h,jU:()=>x,LR:()=>S,RP:()=>w,mr:()=>O,bf:()=>C,cX:()=>j,xp:()=>E,BP:()=>N,zr:()=>T,N:()=>L,I:()=>P,IN:()=>k,Lz:()=>A});var r=t(178598),o=t.n(r),i=t(859825),a=t(997995),l=t.n(a),u=t(279003),c=t.n(u),m=t(489597),s=t.n(m),f=t(966085),p=t.n(f),d=t(882702),y=t(727418),v=t.n(y),b=(t(972163),t(370415)),g=new DOMParser,h={avi:"video/avi",gpx:"application/gpx+xml",kmz:"application/vnd.google-earth.kmz",kml:"application/vnd.google-earth.kml+xml",dxf:"image/vnd.dxf",zip:"application/zip",json:"application/json",geojson:"application/json",wmc:"application/vnd.wmc"},x=function(e){return e.split(".").slice(-1)[0]},S=function(e,n,t){var r=new Blob([e],{type:t});o().saveAs(r,n)},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snapshot.png",t=arguments.length>2?arguments[2]:void 0;S(l()(e),n,t)},O=function(e){return[].concat(c().parseZip(e))},C=function(e){var n=function(e){return[].slice.call(e.documentElement.getElementsByTagName("StyleMap")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("Style")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LineStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PointStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PolyStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("IconStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LabelStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("ListStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("BallonStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("styleUrl")).map((function(e){return e.parentNode.removeChild(e)})),e}(e);return[].concat(s().kml(n)).map((function(e){return v()({},e,{fileName:n.getElementsByTagName("name")[0].innerHTML})}))},j=function(e,n){return[].concat(s().gpx(e)).map((function(t){return v()({},t,{fileName:e.getElementsByTagName("name")[0]&&e.getElementsByTagName("name")[0].innerHTML||n})}))},E=function(e){return new d.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(r.result)},r.onerror=function(){t(r.error.name)},r.readAsArrayBuffer(e)}))},N=function(e){return new d.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(g.parseFromString(r.result,"text/xml"))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},T=function(e){return new d.Promise((function(n,t){var r=new FileReader;r.onload=function(){try{n(JSON.parse(r.result))}catch(e){t(e)}},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},L=function(e){var n=new(p());return new d.Promise((function(t,r){n.loadAsync(e).then((function(e){e.filter((function(e){return-1!==e.indexOf("kml")})).forEach((function(e){return e.async("string").then((function(e){t(g.parseFromString(e,"text/xml"))})).catch((function(e){r(e.message)}))}))}))}))},P=function(e){return new d.Promise((function(n,t){var r=new FileReader;r.onload=function(){try{var e=(new i.H).parseSync(r.result);n(e)}catch(e){t(e)}},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},k=function(e){return new d.Promise((function(n,t){var r=new FileReader;r.onload=function(){(0,b.H)(r.result,!0).then((function(e){return n(e)})).catch((function(e){return t(e)}))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},A=function(e){var n=new(p());return new d.Promise((function(t){n.loadAsync(e).then((function(e){var n=e.files,r=void 0===n?{}:n,o=Object.keys(r).filter((function(e){return!r[e].dir&&0!==e.indexOf("__MACOSX")&&e.indexOf(".shp")===e.length-4})).map((function(e){return e.slice(0,-4)})).reduce((function(e,n){return e.concat(!r["".concat(n,".prj")]&&n||[])}),[]);t(o)}))}))}},370415:(e,n,t)=>{"use strict";t.d(n,{H:()=>xe,Y:()=>Oe});var r=t(505055),o=t(3674),i=t.n(o),a=t(252628),l=t.n(a),u=t(227361),c=t.n(u),m=t(91175),s=t.n(m),f=t(66604),p=t.n(f),d=t(187185),y=t.n(d),v=t(630998),b=t.n(v),g=t(478718),h=t.n(g),x=t(218721),S=t.n(x),w=t(493220),O=t.n(w),C=t(984596),j=t.n(C),E=t(423570),N=t.n(E),T=t(957557),L=t.n(T),P=t(747037),k=t.n(P),A=t(385564),B=t.n(A),F=t(313311),R=t.n(F),$=t(406557),D=t.n($);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=I(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==I(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){if(e){if("string"==typeof e)return H(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?H(e,n):void 0}}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var q=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=c()(n,"childObject",n);return i()(r).filter((function(e){return"$"!==e&&"_"!==e&&"$ns"!==e})).reduce((function(n,o){return[].concat(G(n),G(B()(r[o].map((function(n){var r=c()(n,"$ns",{});return r.uri!==e||r.local!==t?[]:[{params:c()(n,"$",{}),charContent:c()(n,"_"),childObject:L()(n,"$","_","$ns")}]})))))}),[])},J=function(e,n,t){return s()(q(e,n,t))},X=function(e,n,t){return l()(c()(n,"params",{})).reduce((function(n,r){return n||r.local===t&&r.uri===e&&r.value}),void 0)},V=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return l()(c()(e,"params",{})).reduce((function(e,n){var r=t.reduce((function(e,t){var r=k()(t)?{local:t,paramName:t,uri:""}:t,o=r.local,i=r.uri,a=r.paramName;return e||o===n.local&&i===n.uri&&a}),null);return r?z(z({},e),{},_({},r,n.value)):e}),{})},W=function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return B()([[[/\&/g,"&amp;"]],e?[]:[[/\"/g,"&quot;"]],n?[]:[[/\'/g,"&apos;"]],t?[]:[[/\>/g,"&gt;"]],r?[]:[[/\</g,"&lt;"]]]).reduce((function(e,n){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,r)||U(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return e.replace(i,a)}),o)},Y=W.bind(null,!0,!0,!0,!1),Z=W.bind(null,!1,!1,!0,!1),K=function(e){var n=e.ns,t=e.prefix;return"xmlns".concat(t?":".concat(t):"",'="').concat(n,'"')},Q=function e(n){var t=n.name,r=n.xmlns,o=n.textContent,i=void 0===o?"":o,a=n.attributes,l=void 0===a?[]:a,u=n.children,m=void 0===u?[]:u,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\n",d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,v="".concat(r&&r.prefix?"".concat(r.prefix,":"):"").concat(t),b=s.length>0?s:y()([r].concat(G(l.map((function(e){return e.xmlns})))).filter((function(e){return!!e})),(function(e,n){return e.ns===n.ns})),g=(s.length>0&&0===d||0===s.length)&&b.length>0;return(0===d?'<?xml version="1.0" encoding="UTF-8"?>'.concat(p):"")+" ".repeat(d*f)+"<".concat(v)+"".concat(g?" ".concat(b.map(K).join(" ")):"").concat(l.length>0?" ":"")+l.map((function(e){return function(e){var n=e.xmlns,t=e.name,r=e.value;return"".concat(n&&n.prefix?"".concat(n.prefix,":"):"").concat(t,'="').concat(Z(r.toString()),'"')}(z(z({},e),{},{xmlns:e.xmlns&&z(z({},e.xmlns),{},{prefix:c()(R()(b,{ns:e.xmlns.ns}),"prefix")})}))})).join(" ")+(i.length>0||m.length>0?">".concat(Y(i))+"".concat(m.map((function(n){return"".concat(p).concat(e(n,s,f,p,d+1))})).join(""))+(m.length>0?function(e){return"".concat(p).concat(" ".repeat(d*f)).concat(e)}:D())("</".concat(v,">")):"/>")},ee=function e(n){var t=n.children||[],r=n.attributes||[];return z(z({},n),{},{attributes:r.filter((function(e){return!!e})),children:t.filter((function(e){return!!e})).map(e)})},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return i()(e).filter((function(n){return void 0!==e[n]})).map((function(t){return{name:t,value:e[t],xmlns:n}}))},te=function(e,n){return e.filter((function(e){return!!e})).map((function(e){return z(z({},e),{},{xmlns:n})}))},re=t(624262),oe=t(916651);function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,n)||ue(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,n){if(e){if("string"==typeof e)return ce(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ce(e,n):void 0}}function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){fe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fe(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=ie(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=ie(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ie(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var pe={maxExtent:[0,0,1e4,1e4],projection:"EPSG:900913",layerType:"wms"},de={root:{ns:"http://www.opengis.net/context"},xsi:{ns:"http://www.w3.org/2001/XMLSchema-instance",prefix:"xsi"},xlink:{ns:"http://www.w3.org/1999/xlink",prefix:"xlink"},ol:{ns:"http://openlayers.org/context",prefix:"ol"},ms:{ns:"http://geo-solutions.it/mapstore/context",prefix:"ms"}},ye={group:"background",id:"empty_background",source:"ol",title:"Empty Background",type:"empty",visibility:!0},ve=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase();return"true"===e||"1"===e},be=function(e){return i()(e).filter((function(n){return void 0!==e[n]})).reduce((function(n,t){return se(se({},n),{},fe({},t,e[t]))}),{})},ge=function(e){return!!(e&&e.minx&&e.miny&&e.maxx&&e.maxy)},he=function(e){return!!(e&&ge(e.bounds)&&e.crs)},xe=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new r.Parser({explicitRoot:!1,xmlns:!0});return new Promise((function(r){t.parseString(e,(function(e,t){if(e)throw new Error("General XML parsing error");var o=J.bind(null,de.root.ns),i=q.bind(null,de.root.ns),a=J.bind(null,de.ol.ns),l=J.bind(null,de.ms.ns),u=q.bind(null,de.ms.ns),m=X.bind(null,""),f=X.bind(null,de.xlink.ns),d=function(e){var n,t=V(e,"name","type"),r=t.name,o=t.type;switch(o){case"number":n=parseFloat(e.charContent);break;case"object":n=JSON.parse(e.charContent);break;case"boolean":n=ve(e.charContent);break;default:n=e.charContent}return{name:r,type:o,value:n}},v=o({root:[t]},"ViewContext"),b=o(v,"General"),g=o(v,"LayerList"),h=m(v,"version");if(!v||!h)throw new Error("Not a WMC file!");var x=c()(o(b,"Title"),"charContent"),w=o(b,"Extension"),O=a(w,"maxExtent"),C=o(b,"BoundingBox"),j=p()(O&&V(O,"minx","miny","maxx","maxy")||V(C,"minx","miny","maxx","maxy"),parseFloat),E=ge(j)&&[j.minx,j.miny,j.maxx,j.maxy]||pe.maxExtent,T=m(C,"SRS")||pe.projection,L={bounds:p()(V(C,"minx","miny","maxx","maxy"),parseFloat),crs:m(C,"SRS")},P=he(L)?L:void 0,k=n?N()():void 0,A=i(g,"Layer").map((function(e){var n,t=o(e,"Extension"),r=o(e,"Server"),d=s()(i(o(e,"StyleList"),"Style").filter((function(e){return ve(m(e,"current"))}))),v=c()(a(t,"transparent"),"charContent"),b=c()(a(t,"opacity"),"charContent"),g={maxExtent:p()(V(a(t,"maxExtent"),"minx","maxx","miny","maxy"),parseFloat),tileSize:p()(V(a(t,"tileSize"),"width","height"),parseInt),transparent:v&&ve(v),isBaseLayer:ve(c()(a(t,"isBaseLayer"),"charContent")),singleTile:ve(c()(a(t,"singleTile"),"charContent")),opacity:b&&parseFloat(b)},h=l(t,"search"),x=u(l(t,"DimensionList"),"Dimension"),S=c()(l(t,"filter"),"charContent"),w={group:c()(l(t,"group"),"charContent"),search:h&&{url:f(h,"href"),type:m(h,"type")},dimensions:x.map((function(e){return{name:m(e,"name"),source:{type:m(e,"type"),url:f(e,"href")}}})),filter:S&&function(){try{return JSON.parse(S)}catch(e){return null}}()||void 0},O=i(o(e,"DimensionList"),"Dimension").map((function(e){return{name:m(e,"name"),units:m(e,"units"),unitSymbol:m(e,"unitSymbol"),default:m(e,"default"),values:c()(e,"charContent","").split(",")}})),C={id:N()(),visibility:!ve(m(e,"hidden")),type:(n=m(r,"service"),"OGC:WMS"===n?"wms":pe.layerType),url:f(o(r,"OnlineResource"),"href"),name:c()(o(e,"Name"),"charContent"),title:c()(o(e,"Title"),"charContent"),format:c()(s()(i(o(e,"FormatList"),"Format").filter((function(e){return ve(m(e,"current"))}))),"charContent"),style:c()(o(d,"Name"),"charContent"),singleTile:g.singleTile,queryable:ve(m(e,"queryable")),bbox:ge(g.maxExtent)?{bounds:g.maxExtent,crs:T}:void 0,group:w.group||(g.isBaseLayer?"background":k),opacity:g.opacity,search:w.search,layerFilter:w.filter,dimensions:y()([].concat(le(w.dimensions),le(O)),(function(e,n){return e.name===n.name}))};return se(se({},be(C)),{},{params:be(C.params)})})),B=[].concat(le(A.filter((function(e){return"background"===e.group}))),le(A.filter((function(e){return"background"!==e.group})))),F=0===B.filter((function(e){return"background"===e.group&&e.visibility})).length?[ye].concat(le(B)):B,R=l(w,"GroupList"),$=u(R,"Group").map((function(e){return{id:m(e,"id"),title:m(e,"title"),expanded:ve(m(e,"expanded"))}})),D=R&&$||[].concat(le(F.filter((function(e){return!e.group||e.group===re.tE})).length>0?[{id:re.tE,title:re.tE,expanded:!0}]:[]),le(n?[{id:k,title:x||k}]:[])),I=l(w,"center"),M=se(se({},p()(V(I,"x","y"),parseFloat)),{},{crs:m(I,"crs")}),z=parseFloat(c()(l(w,"zoom"),"charContent")),_=l(w,"CatalogServices"),G=m(_,"selectedService"),U=u(_,"Service").map((function(e){return[m(e,"serviceName"),u(e,"Attribute")]})).reduce((function(e,n){var t=ae(n,2),r=t[0],o=t[1];return se(se({},e),{},fe({},r,o.map(d).reduce((function(e,n){var t=n.name,r=n.value;return se(se({},e),{},fe({},t,r))}),{})))}),{}),H={catalogServices:_&&{selectedService:G,services:U},map:{maxExtent:E,bbox:z?void 0:P,projection:T,backgrounds:[],groups:D,layers:F,center:S()(M,"x","y","crs")?M:void 0,zoom:z},version:2};r(H)}))}))},Se=function(e){return e?"1":"0"},we={wms:"OGC:WMS"},Oe=function(e,n){var t=e.map,r=e.catalogServices,o=n.title,a=void 0===o?"MapStore Context":o,u=n.abstract,m=void 0===u?"This is a map exported from MapStore2.":u,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\n",d=function(e){return ne({type:"simple",href:e},de.xlink)},y=function(e){return{name:"OnlineResource",attributes:d(e)}},v=t.maxExtent,g=t.bbox,x=t.projection,S=t.layers,w=t.groups,C=t.center,E=t.zoom,N=te([{name:"maxExtent",attributes:ne({minx:v[0],miny:v[1],maxx:v[2],maxy:v[3]})}],de.ol),T=te([w.length>0?{name:"GroupList",children:w.map((function(e){return{name:"Group",xmlns:de.ms,attributes:ne({id:e.id,title:e.title,expanded:e.expanded})}}))}:null,r&&{name:"CatalogServices",attributes:r.selectedService&&ne({selectedService:r.selectedService}),children:O()(r.services).map((function(e){var n=ae(e,2),t=n[0],r=n[1];return{name:"Service",xmlns:de.ms,attributes:ne({serviceName:t}),children:i()(r).filter((function(e){return void 0!==r[e]&&null!==r[e]&&("string"==typeof r[e]||"boolean"==typeof r[e]||"number"==typeof r[e]||"bigint"==typeof r[e]||"object"===ie(r[e]))})).map((function(e){return{name:"Attribute",xmlns:de.ms,attributes:ne({name:e,type:ie(r[e])}),textContent:"object"===ie(r[e])?JSON.stringify(r[e]):r[e].toString()}}))}}))},C&&{name:"center",attributes:ne(C)},E&&{name:"zoom",textContent:E.toString()}],de.ms),L={name:"LayerList",children:S.filter((function(e){return"wms"===e.type})).map((function(e){var n,t,r=e.capabilities||{},o=(e.dimensions||[]).filter((function(e){return!!e.source})),i=[].concat(le((e.dimensions||[]).filter((function(e){return!e.source}))),le(j()((null==r?void 0:r.Dimension)||[]).filter((function(e){return b()(o,(function(n){var t;return n.name===(null==e||null===(t=e.$)||void 0===t?void 0:t.name)}))>-1})).map((function(e){var n,t,r,o,i;return{name:null==e||null===(n=e.$)||void 0===n?void 0:n.name,units:null==e||null===(t=e.$)||void 0===t?void 0:t.units,unitSymbol:null==e||null===(r=e.$)||void 0===r?void 0:r.unitSymbol,values:null==e||null===(o=e._)||void 0===o?void 0:o.split(","),default:null==e||null===(i=e.$)||void 0===i?void 0:i.default}})))),a=j()((null==r?void 0:r.Style)||[]).map((function(n){var t,r,o,i,a,l,u=j()((null==n?void 0:n.LegendURL)||[])[0];return{name:n.Name,title:n.Title,legendURL:u&&se({width:null!=u&&null!==(t=u.$)&&void 0!==t&&t.width?parseFloat(u.$.width):void 0,height:null!=u&&null!==(r=u.$)&&void 0!==r&&r.height?parseFloat(u.$.height):void 0,format:null==u?void 0:u.Format},(null==u||null===(o=u.OnlineResource)||void 0===o||null===(i=o.$)||void 0===i?void 0:i["xlink:type"])&&(null==u||null===(a=u.OnlineResource)||void 0===a||null===(l=a.$)||void 0===l?void 0:l["xlink:href"])&&{onlineResource:{type:u.OnlineResource.$["xlink:type"],href:u.OnlineResource.$["xlink:href"]}}),current:n.Name===e.style}})),l=te([e.bbox?(n=e.bbox,t=(0,oe.reprojectBbox)(n.bounds,n.crs,x),{name:"maxExtent",attributes:ne({minx:t[0],miny:t[1],maxx:t[2],maxy:t[3]})}):null,{name:"singleTile",textContent:(e.singleTile||!1).toString()},{name:"transparent",textContent:(void 0===e.transparent||e.transparent).toString()},{name:"isBaseLayer",textContent:("background"===e.group).toString()},{name:"opacity",textContent:(void 0===e.opacity?1:e.opacity).toString()}],de.ol),u=te([{name:"group",textContent:e.group||"Default"},e.search&&{name:"search",attributes:[{name:"type",value:e.search.type}].concat(le(d(e.search.url)))},e.layerFilter&&{name:"filter",textContent:JSON.stringify(e.layerFilter)},o.length>0&&{name:"DimensionList",children:o.map((function(e){var n=e.source,t=n.type,r=n.url,o=e.name;return{name:"Dimension",xmlns:de.ms,attributes:[].concat(le(ne({name:o,type:t})),le(d(r)))}}))}],de.ms);return{name:"Layer",attributes:ne(p()({queryable:e.queryable,hidden:!e.visibility},Se)),children:[{name:"Name",textContent:e.name},{name:"Title",textContent:e.title},{name:"Server",attributes:ne({service:we[e.type],version:"1.3.0"}),children:[y((0,re.Hi)(e))]},i.length>0&&{name:"DimensionList",children:i.map((function(e){var n=e.name,t=e.units,r=e.unitSymbol,o=e.values,i=void 0===o?[]:o,a=e.default;return{name:"Dimension",attributes:ne({name:n,units:t,unitSymbol:r,default:a,multipleValues:i.length>1?"1":void 0}),textContent:i.toString()}}))},e.format&&{name:"FormatList",children:[{name:"Format",attributes:[{name:"current",value:"1"}],textContent:e.format}]},a.length>0&&{name:"StyleList",children:a.map((function(e){var n=e.name,t=e.title,r=e.current,o=e.legendURL,i=c()(o,"onlineResource.href");return{name:"Style",attributes:r&&ne({current:r})||[],children:[{name:"Name",textContent:n},{name:"Title",textContent:t},o&&{name:"LegendURL",attributes:ne(se({},h()(o,"width","height","format"))),children:i&&[y(i)]}]}}))},{name:"Extension",children:[].concat(le(l),le(u))}]}}))};return Q(ee({name:"ViewContext",xmlns:de.root,attributes:[{name:"version",value:"1.1.0"},{name:"schemaLocation",value:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",xmlns:de.xsi}],children:[{name:"General",children:[{name:"Title",textContent:a},{name:"Abstract",textContent:m},{name:"BoundingBox",attributes:ne(he(g)?se(se({},g.bounds),{},{SRS:g.crs}):{minx:v[0],miny:v[1],maxx:v[2],maxy:v[3],SRS:x})},{name:"Extension",children:[].concat(le(N),le(T))}]},L]}),l()(de),s,f)}},272810:()=>{},486799:()=>{}}]);