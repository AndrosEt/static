import{dU as D,hA as Y,hB as B,ee as R,fU as p,eg as E,eh as G,el as V,fR as W,hC as H,d$ as J,hD as Q,hE as X,G as Z,ea as u,f1 as z,am as O,ah as ee,aB as re,r as te,j as L,u as I,a1 as ae,a as y}from"./index-3WWdADc-.js";import{a as w,b as N,d as ne,c as ce,e as se,i as oe}from"./_initCloneObject-fWvGzI93.js";import{bh as k,bi as le,a1 as ie}from"./Learn-iEpSD2rS.js";function ge(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}function be(e,r){return e&&w(r,D(r),e)}function fe(e,r){return e&&w(r,k(r),e)}function ue(e,r){return w(e,Y(e),r)}function ye(e,r){return w(e,le(e),r)}var de=Object.prototype,je=de.hasOwnProperty;function Te(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&je.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function me(e,r){var t=r?N(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var $e=/\w*$/;function Ae(e){var r=new e.constructor(e.source,$e.exec(e));return r.lastIndex=e.lastIndex,r}var _=B?B.prototype:void 0,P=_?_.valueOf:void 0;function he(e){return P?Object(P.call(e)):{}}var Ce="[object Boolean]",Se="[object Date]",Ee="[object Map]",Oe="[object Number]",we="[object RegExp]",xe="[object Set]",Fe="[object String]",pe="[object Symbol]",Ie="[object ArrayBuffer]",Be="[object DataView]",Le="[object Float32Array]",_e="[object Float64Array]",Pe="[object Int8Array]",Ue="[object Int16Array]",Me="[object Int32Array]",De="[object Uint8Array]",Re="[object Uint8ClampedArray]",Ge="[object Uint16Array]",Ne="[object Uint32Array]";function ke(e,r,t){var n=e.constructor;switch(r){case Ie:return N(e);case Ce:case Se:return new n(+e);case Be:return me(e,t);case Le:case _e:case Pe:case Ue:case Me:case De:case Re:case Ge:case Ne:return ne(e,t);case Ee:return new n;case Oe:case Fe:return new n(e);case we:return Ae(e);case xe:return new n;case pe:return he(e)}}var ve="[object Map]";function qe(e){return R(e)&&p(e)==ve}var U=E&&E.isMap,Ke=U?G(U):qe,Ye="[object Set]";function Ve(e){return R(e)&&p(e)==Ye}var M=E&&E.isSet,We=M?G(M):Ve,He=1,Je=2,Qe=4,v="[object Arguments]",Xe="[object Array]",Ze="[object Boolean]",ze="[object Date]",er="[object Error]",q="[object Function]",rr="[object GeneratorFunction]",tr="[object Map]",ar="[object Number]",K="[object Object]",nr="[object RegExp]",cr="[object Set]",sr="[object String]",or="[object Symbol]",lr="[object WeakMap]",ir="[object ArrayBuffer]",gr="[object DataView]",br="[object Float32Array]",fr="[object Float64Array]",ur="[object Int8Array]",yr="[object Int16Array]",dr="[object Int32Array]",jr="[object Uint8Array]",Tr="[object Uint8ClampedArray]",mr="[object Uint16Array]",$r="[object Uint32Array]",a={};a[v]=a[Xe]=a[ir]=a[gr]=a[Ze]=a[ze]=a[br]=a[fr]=a[ur]=a[yr]=a[dr]=a[tr]=a[ar]=a[K]=a[nr]=a[cr]=a[sr]=a[or]=a[jr]=a[Tr]=a[mr]=a[$r]=!0;a[er]=a[q]=a[lr]=!1;function S(e,r,t,n,g,b){var o,T=r&He,m=r&Je,x=r&Qe;if(t&&(o=g?t(e,n,g,b):t(e)),o!==void 0)return o;if(!V(e))return e;var C=J(e);if(C){if(o=Te(e),!T)return ce(e,o)}else{var d=p(e),F=d==q||d==rr;if(W(e))return se(e,T);if(d==K||d==v||F&&!g){if(o=m||F?{}:oe(e),!T)return m?ye(e,fe(o,e)):ue(e,be(o,e))}else{if(!a[d])return g?e:{};o=ke(e,d,T)}}b||(b=new H);var l=b.get(e);if(l)return l;b.set(e,o),We(e)?e.forEach(function(f){o.add(S(f,r,t,f,e,b))}):Ke(e)&&e.forEach(function(f,i){o.set(i,S(f,r,t,i,e,b))});var c=x?m?ie:Q:m?k:D,s=C?void 0:c(e);return ge(s||e,function(f,i){s&&(i=f,f=e[i]),X(o,i,S(f,r,t,i,e,b))}),o}var Ar=1,hr=4;function Cr(e){return S(e,Ar|hr)}const Br=(e,r,t,n)=>{const g=Z(e,r,t,{...n,action:l=>{var c;return d(),(c=n==null?void 0:n.action)==null?void 0:c.call(n,l)}}),b={};let o={};const T={},m=(l,c)=>{const s=u(e.getState(),l,void 0);function f($){return e(A=>Sr(u(A,l,$||s),$||s))}const j=(typeof s!="object"?ee:re)(e,l,{sideEffect:$=>{var h;(h=c==null?void 0:c.sideEffect)==null||h.call(c,$);const A=u(e.getState(),l);O(A,o[l])||g.action()},patchEffect:c==null?void 0:c.patchEffect});return o[l]=j.get(),b[l]=j,T[l]=j.get(),Object.assign(f,j)},x=(l,c,s)=>{const f=()=>!!Object.values(g._usages||{}).filter(i=>i).length;return l.subscribe((i,j)=>{var h;const $=s!=null&&s.comparePatch?s.comparePatch(u(j,c)):u(j,c),A=s!=null&&s.comparePatch?s.comparePatch(u(i,c)):u(i,c);f()&&!O($,A)&&((h=s==null?void 0:s.sideEffect)==null||h.call(s,{prev:u(j,c),next:u(i,c)}),C())})},C=async()=>{d(),g.action()},d=()=>{o=Object.keys(b).reduce((l,c)=>({...l,[c]:u(e.getState(),c)}),{})};return z(e,()=>{o=Cr(T)}),Object.assign(g,{createFilter:m,clearAll:()=>{g.clear(),Object.keys(b).forEach(l=>b[l].clear()),g.action()},listen:x})},Sr=(e,r)=>typeof e!="object"?O(e,r)?[]:[{field:"_",prev:r,next:e}]:Object.keys(e).reduce((t,n)=>(O(e[n],r[n])||t.push({field:n,prev:r[n],next:e[n]}),t),[]),Er=te.forwardRef(({type:e="success",children:r,icon:t,...n},g)=>L.jsxs(wr,{...n,$chipType:e,ref:g,children:[t?L.jsx(Or,{children:t}):null,r]})),Or=I.div`
  margin-right: 4px;
  font-size: 12px;
`,Lr=I(Er)``,wr=I.div`
  ${ae};
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  min-height: 24px;
  border-radius: 24px;
  ${e=>xr[e.$chipType]};
`,xr={success:y`
    background-color: ${({theme:e})=>e.systemColors.green100};
    color: ${({theme:e})=>e.systemColors.green800};
  `,error:y`
    background-color: ${({theme:e})=>e.systemColors.red100};
    color: ${({theme:e})=>e.systemColors.red400};
  `,disabled:y`
    background-color: ${({theme:e})=>e.systemColors.grey100};
    color: ${({theme:e})=>e.systemColors.grey600};
  `,paused:y`
    background-color: ${({theme:e})=>e.systemColors.yellow200};
    color: ${({theme:e})=>e.systemColors.yellow800};
  `,enabled:y`
    background-color: ${({theme:e})=>e.systemColors.blue100};
    color: ${({theme:e})=>e.systemColors.blue800};
  `,beta:y`
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(
          180deg,
          #c91309 0%,
          #f78527 23.44%,
          #efce1a 46.35%,
          #9bbd02 70.83%,
          #36c9e2 94.79%
        )
        border-box;
    border: 2px solid transparent;
  `,new:y`
    background-color: ${({theme:e})=>e.systemColors.blue100};
    color: ${({theme:e})=>e.systemColors.blue800};
  `,icon:y``,info:y``,pending:y`
    background-color: ${({theme:e})=>e.systemColors.green100};
    color: ${({theme:e})=>e.systemColors.green800};
  `};export{Lr as S,S as b,Cr as c,Sr as g,Br as l};
//# sourceMappingURL=StatusChip-FrPKlZU9.js.map
