(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[70260],{292521:(e,t,n)=>{"use strict";function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;for(;o>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const l=e.slice();for(let t=0;t<i;++t)for(let r=0;r<n;++r)e[n*t+r]=l[(n-r-1)*i+t]}n.d(t,{Z:()=>i});class i{async decode(e,t){const n=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,n,i,l,s){if(!t||1===t)return e;for(let e=0;e<l.length;++e){if(l[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[e]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const c=l[0]/8,f=2===s?1:l.length;for(let s=0;s<i&&!(s*f*n*c>=e.byteLength);++s){let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,s*f*n*c,f*n*c);break;case 16:i=new Uint16Array(e,s*f*n*c,f*n*c/2);break;case 32:i=new Uint32Array(e,s*f*n*c,f*n*c/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}r(i,f)}else 3===t&&(i=new Uint8Array(e,s*f*n*c,f*n*c),o(i,f,c))}return e}(n,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},970260:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(292521);function o(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}class i extends r.Z{decodeBlock(e){return function(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)t[e]=4096,n[e]=e;let r=258,i=9,l=0;function s(){r=258,i=9}function c(e){const t=function(e,t,n){const r=t%8,o=Math.floor(t/8),i=8-r,l=t+n-8*(o+1);let s=8*(o+2)-(t+n);const c=8*(o+2)-t;if(s=Math.max(0,s),o>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;let f=e[o]&2**(8-r)-1;f<<=n-i;let a=f;if(o+1<e.length){let t=e[o+1]>>>s;t<<=Math.max(0,n-c),a+=t}if(l>8&&o+2<e.length){const r=8*(o+3)-(t+n);a+=e[o+2]>>>r}return a}(e,l,i);return l+=i,t}function f(e,o){return n[r]=o,t[r]=e,r++,r-1}function a(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const h=[];s();const u=new Uint8Array(e);let d,w=c(u);for(;257!==w;){if(256===w){for(s(),w=c(u);256===w;)w=c(u);if(257===w)break;if(w>256)throw new Error(`corrupted code at scanline ${w}`);o(h,a(w)),d=w}else if(w<r){const e=a(w);o(h,e),f(d,e[e.length-1]),d=w}else{const e=a(d);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${d} / ${r}, position: ${l}`);o(h,e),h.push(e[e.length-1]),f(d,e[e.length-1]),d=w}r+1>=2**i&&(12===i?d=void 0:i++),w=c(u)}return new Uint8Array(h)}(e).buffer}}}}]);