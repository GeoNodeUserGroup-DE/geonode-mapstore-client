(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[47202],{944538:(t,s,e)=>{"use strict";e.d(s,{Z:()=>C});var i=e(432538),n=e(583729),o=e(421915),r=e(438667),l=e(862418),a=e(179682),h=e(95173),d=e(686204),f=e(321422),g=e(260897),u=e(804027);class c extends i.ZP{constructor(t,s){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===s||Array.isArray(t[0])?this.setCoordinates(t,s):this.setFlatCoordinates(s,t)}appendCoordinate(t){this.flatCoordinates?(0,a.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()}clone(){const t=new c(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,s,e,i){return i<(0,o.qf)(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,n.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,n.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,s,e,i))}forEachSegment(t){return(0,h.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,s){return"XYM"!=this.layout&&"XYZM"!=this.layout?null:(s=void 0!==s&&s,(0,f.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s))}getCoordinates(){return(0,d.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,s){return(0,f.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s,this.stride)}getLength(){return(0,u.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const s=[];return s.length=(0,l.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s,0),new c(s,"XY")}getType(){return"LineString"}intersectsExtent(t){return(0,g.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,r.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}const C=c},525642:(t,s,e)=>{"use strict";e.d(s,{Z:()=>c});var i=e(944538),n=e(432538),o=e(583729),r=e(421915),l=e(438667),a=e(862418),h=e(179682),d=e(686204),f=e(321422),g=e(260897);class u extends n.ZP{constructor(t,s,e){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,s);else if(void 0!==s&&e)this.setFlatCoordinates(s,t),this.ends_=e;else{let s=this.getLayout();const e=t,i=[],n=[];for(let t=0,o=e.length;t<o;++t){const o=e[t];0===t&&(s=o.getLayout()),(0,h.l7)(i,o.getFlatCoordinates()),n.push(i.length)}this.setFlatCoordinates(s,i),this.ends_=n}}appendLineString(t){this.flatCoordinates?(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new u(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,s,e,i){return i<(0,r.qf)(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,o.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,o.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,s,e,i))}getCoordinateAtM(t,s,e){return"XYM"!=this.layout&&"XYZM"!=this.layout||0===this.flatCoordinates.length?null:(s=void 0!==s&&s,e=void 0!==e&&e,(0,f.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,s,e))}getCoordinates(){return(0,d.o1)(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new i.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,s=this.ends_,e=this.layout,n=[];let o=0;for(let r=0,l=s.length;r<l;++r){const l=s[r],a=new i.Z(t.slice(o,l),e);n.push(a),o=l}return n}getFlatMidpoints(){const t=[],s=this.flatCoordinates;let e=0;const i=this.ends_,n=this.stride;for(let o=0,r=i.length;o<r;++o){const r=i[o],l=(0,f.WW)(s,e,r,n,.5);(0,h.l7)(t,l),e=r}return t}getSimplifiedGeometryInternal(t){const s=[],e=[];return s.length=(0,a.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,s,0,e),new u(s,"XY",e)}getType(){return"MultiLineString"}intersectsExtent(t){return(0,g.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const e=(0,l._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===e.length?0:e[e.length-1],this.changed()}}const c=u},552329:(t,s,e)=>{"use strict";e.d(s,{Z:()=>f});var i=e(752043),n=e(432538),o=e(421915),r=e(438667),l=e(179682),a=e(686204),h=e(921882);class d extends n.ZP{constructor(t,s){super(),s&&!Array.isArray(t[0])?this.setFlatCoordinates(s,t):this.setCoordinates(t,s)}appendPoint(t){this.flatCoordinates?(0,l.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()}clone(){const t=new d(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,s,e,i){if(i<(0,o.qf)(this.getExtent(),t,s))return i;const n=this.flatCoordinates,r=this.stride;for(let o=0,l=n.length;o<l;o+=r){const l=(0,h.bI)(t,s,n[o],n[o+1]);if(l<i){i=l;for(let t=0;t<r;++t)e[t]=n[o+t];e.length=r}}return i}getCoordinates(){return(0,a.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const s=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||s<=t?null:new i.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,s=this.layout,e=this.stride,n=[];for(let o=0,r=t.length;o<r;o+=e){const r=new i.Z(t.slice(o,o+e),s);n.push(r)}return n}getType(){return"MultiPoint"}intersectsExtent(t){const s=this.flatCoordinates,e=this.stride;for(let i=0,n=s.length;i<n;i+=e){const e=s[i],n=s[i+1];if((0,o.jE)(t,e,n))return!0}return!1}setCoordinates(t,s){this.setLayout(s,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,r.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}const f=d},513987:(t,s,e)=>{"use strict";e.d(s,{Z:()=>v});var i=e(552329),n=e(15265),o=e(432538),r=e(583729),l=e(421915),a=e(438667),h=e(179682),d=e(538529),f=e(686204),g=e(260897),u=e(680793),c=e(832562),C=e(192526),_=e(430197),p=e(862418);class y extends o.ZP{constructor(t,s,e){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!e&&!Array.isArray(t[0])){let i=this.getLayout();const n=t,o=[],r=[];for(let t=0,s=n.length;t<s;++t){const s=n[t];0===t&&(i=s.getLayout());const e=o.length,l=s.getEnds();for(let t=0,s=l.length;t<s;++t)l[t]+=e;(0,h.l7)(o,s.getFlatCoordinates()),r.push(l)}s=i,t=o,e=r}void 0!==s&&e?(this.setFlatCoordinates(s,t),this.endss_=e):this.setCoordinates(t,s)}appendPolygon(t){let s;if(this.flatCoordinates){const e=this.flatCoordinates.length;(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates()),s=t.getEnds().slice();for(let t=0,i=s.length;t<i;++t)s[t]+=e}else this.flatCoordinates=t.getFlatCoordinates().slice(),s=t.getEnds().slice(),this.endss_.push();this.endss_.push(s),this.changed()}clone(){const t=this.endss_.length,s=new Array(t);for(let e=0;e<t;++e)s[e]=this.endss_[e].slice();const e=new y(this.flatCoordinates.slice(),this.layout,s);return e.applyProperties(this),e}closestPointXY(t,s,e,i){return i<(0,l.qf)(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,r.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,r.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,s,e,i))}containsXY(t,s){return(0,_.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,s)}getArea(){return(0,c.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let s;return void 0!==t?(s=this.getOrientedFlatCoordinates().slice(),(0,u.dL)(s,0,this.endss_,this.stride,t)):s=this.flatCoordinates,(0,f.ug)(s,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=(0,C.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,d.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new i.Z(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,u.Oj)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,u.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const s=[],e=[];return s.length=(0,p.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),s,0,e),new y(s,"XY",e)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let s;if(0===t)s=0;else{const e=this.endss_[t-1];s=e[e.length-1]}const e=this.endss_[t].slice(),i=e[e.length-1];if(0!==s)for(let t=0,i=e.length;t<i;++t)e[t]-=s;return new n.ZP(this.flatCoordinates.slice(s,i),this.layout,e)}getPolygons(){const t=this.layout,s=this.flatCoordinates,e=this.endss_,i=[];let o=0;for(let r=0,l=e.length;r<l;++r){const l=e[r].slice(),a=l[l.length-1];if(0!==o)for(let t=0,s=l.length;t<s;++t)l[t]-=o;const h=new n.ZP(s.slice(o,a),t,l);i.push(h),o=a}return i}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,g.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const e=(0,a.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===e.length)this.flatCoordinates.length=0;else{const t=e[e.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}const v=y},192526:(t,s,e)=>{"use strict";e.d(s,{E:()=>n});var i=e(421915);function n(t,s,e,n){const o=[];let r=(0,i.lJ)();for(let l=0,a=e.length;l<a;++l){const a=e[l];r=(0,i.GN)(t,s,a[0],n),o.push((r[0]+r[2])/2,(r[1]+r[3])/2),s=a[a.length-1]}return o}},321422:(t,s,e)=>{"use strict";e.d(s,{WW:()=>o,iJ:()=>r,dG:()=>l});var i=e(179682),n=e(921882);function o(t,s,e,o,r,l,a){let h,d;const f=(e-s)/o;if(1===f)h=s;else if(2===f)h=s,d=r;else if(0!==f){let n=t[s],l=t[s+1],a=0;const f=[0];for(let i=s+o;i<e;i+=o){const s=t[i],e=t[i+1];a+=Math.sqrt((s-n)*(s-n)+(e-l)*(e-l)),f.push(a),n=s,l=e}const g=r*a,u=(0,i.ry)(f,g);u<0?(d=(g-f[-u-2])/(f[-u-1]-f[-u-2]),h=s+(-u-2)*o):h=s+u*o}a=a>1?a:2,l=l||new Array(a);for(let s=0;s<a;++s)l[s]=void 0===h?NaN:void 0===d?t[h+s]:(0,n.t7)(t[h+s],t[h+o+s],d);return l}function r(t,s,e,i,o,r){if(e==s)return null;let l;if(o<t[s+i-1])return r?(l=t.slice(s,s+i),l[i-1]=o,l):null;if(t[e-1]<o)return r?(l=t.slice(e-i,e),l[i-1]=o,l):null;if(o==t[s+i-1])return t.slice(s,s+i);let a=s/i,h=e/i;for(;a<h;){const s=a+h>>1;o<t[(s+1)*i-1]?h=s:a=s+1}const d=t[a*i-1];if(o==d)return t.slice((a-1)*i,(a-1)*i+i);const f=(o-d)/(t[(a+1)*i-1]-d);l=[];for(let s=0;s<i-1;++s)l.push((0,n.t7)(t[(a-1)*i+s],t[a*i+s],f));return l.push(o),l}function l(t,s,e,i,n,o,l){if(l)return r(t,s,e[e.length-1],i,n,o);let a;if(n<t[i-1])return o?(a=t.slice(0,i),a[i-1]=n,a):null;if(t[t.length-1]<n)return o?(a=t.slice(t.length-i),a[i-1]=n,a):null;for(let o=0,l=e.length;o<l;++o){const l=e[o];if(s!=l){if(n<t[s+i-1])return null;if(n<=t[l-1])return r(t,s,l,i,n,!1);s=l}}return null}},804027:(t,s,e)=>{"use strict";function i(t,s,e,i){let n=t[s],o=t[s+1],r=0;for(let l=s+i;l<e;l+=i){const s=t[l],e=t[l+1];r+=Math.sqrt((s-n)*(s-n)+(e-o)*(e-o)),n=s,o=e}return r}e.d(s,{W:()=>i})}}]);