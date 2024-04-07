import{dI as D,ht as Y,hu as L,f_ as R,fL as F,hv as E,hw as k,hx as V,fI as W,hy as Z,dP as H,hz as J,hA as Q,G as X,dZ as u,eO as z,ap as O,ak as ee,aE as re,r as te,j as _,u as I,a1 as ae,a as y}from"./index-VVIvRZBh.js";import{a as w,b as G,d as ne,c as ce,e as se,i as oe}from"./_initCloneObject-ZEvi6ADI.js";import{bk as N,bl as le,_ as ie}from"./Learn-nfpDmxZa.js";function be(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}function fe(e,r){return e&&w(r,D(r),e)}function ge(e,r){return e&&w(r,N(r),e)}function ue(e,r){return w(e,Y(e),r)}function ye(e,r){return w(e,le(e),r)}var de=Object.prototype,je=de.hasOwnProperty;function Te(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&je.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function me(e,r){var t=r?G(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var $e=/\w*$/;function Ae(e){var r=new e.constructor(e.source,$e.exec(e));return r.lastIndex=e.lastIndex,r}var B=L?L.prototype:void 0,P=B?B.valueOf:void 0;function he(e){return P?Object(P.call(e)):{}}var Ce="[object Boolean]",Se="[object Date]",Ee="[object Map]",Oe="[object Number]",we="[object RegExp]",xe="[object Set]",pe="[object String]",Fe="[object Symbol]",Ie="[object ArrayBuffer]",Le="[object DataView]",_e="[object Float32Array]",Be="[object Float64Array]",Pe="[object Int8Array]",Me="[object Int16Array]",Ue="[object Int32Array]",De="[object Uint8Array]",Re="[object Uint8ClampedArray]",ke="[object Uint16Array]",Ge="[object Uint32Array]";function Ne(e,r,t){var n=e.constructor;switch(r){case Ie:return G(e);case Ce:case Se:return new n(+e);case Le:return me(e,t);case _e:case Be:case Pe:case Me:case Ue:case De:case Re:case ke:case Ge:return ne(e,t);case Ee:return new n;case Oe:case pe:return new n(e);case we:return Ae(e);case xe:return new n;case Fe:return he(e)}}var ve="[object Map]";function qe(e){return R(e)&&F(e)==ve}var M=E&&E.isMap,Ke=M?k(M):qe,Ye="[object Set]";function Ve(e){return R(e)&&F(e)==Ye}var U=E&&E.isSet,We=U?k(U):Ve,Ze=1,He=2,Je=4,v="[object Arguments]",Qe="[object Array]",Xe="[object Boolean]",ze="[object Date]",er="[object Error]",q="[object Function]",rr="[object GeneratorFunction]",tr="[object Map]",ar="[object Number]",K="[object Object]",nr="[object RegExp]",cr="[object Set]",sr="[object String]",or="[object Symbol]",lr="[object WeakMap]",ir="[object ArrayBuffer]",br="[object DataView]",fr="[object Float32Array]",gr="[object Float64Array]",ur="[object Int8Array]",yr="[object Int16Array]",dr="[object Int32Array]",jr="[object Uint8Array]",Tr="[object Uint8ClampedArray]",mr="[object Uint16Array]",$r="[object Uint32Array]",a={};a[v]=a[Qe]=a[ir]=a[br]=a[Xe]=a[ze]=a[fr]=a[gr]=a[ur]=a[yr]=a[dr]=a[tr]=a[ar]=a[K]=a[nr]=a[cr]=a[sr]=a[or]=a[jr]=a[Tr]=a[mr]=a[$r]=!0;a[er]=a[q]=a[lr]=!1;function S(e,r,t,n,b,f){var o,T=r&Ze,m=r&He,x=r&Je;if(t&&(o=b?t(e,n,b,f):t(e)),o!==void 0)return o;if(!V(e))return e;var C=H(e);if(C){if(o=Te(e),!T)return ce(e,o)}else{var d=F(e),p=d==q||d==rr;if(W(e))return se(e,T);if(d==K||d==v||p&&!b){if(o=m||p?{}:oe(e),!T)return m?ye(e,ge(o,e)):ue(e,fe(o,e))}else{if(!a[d])return b?e:{};o=Ne(e,d,T)}}f||(f=new Z);var l=f.get(e);if(l)return l;f.set(e,o),We(e)?e.forEach(function(g){o.add(S(g,r,t,g,e,f))}):Ke(e)&&e.forEach(function(g,i){o.set(i,S(g,r,t,i,e,f))});var c=x?m?ie:J:m?N:D,s=C?void 0:c(e);return be(s||e,function(g,i){s&&(i=g,g=e[i]),Q(o,i,S(g,r,t,i,e,f))}),o}var Ar=1,hr=4;function Cr(e){return S(e,Ar|hr)}const Lr=(e,r,t,n)=>{const b=X(e,r,t,{...n,action:l=>{var c;return d(),(c=n==null?void 0:n.action)==null?void 0:c.call(n,l)}}),f={};let o={};const T={},m=(l,c)=>{const s=u(e.getState(),l,void 0);function g($){return e(A=>Sr(u(A,l,$||s),$||s))}const j=(typeof s!="object"?ee:re)(e,l,{sideEffect:$=>{var h;(h=c==null?void 0:c.sideEffect)==null||h.call(c,$);const A=u(e.getState(),l);O(A,o[l])||b.action()},patchEffect:c==null?void 0:c.patchEffect});return o[l]=j.get(),f[l]=j,T[l]=j.get(),Object.assign(g,j)},x=(l,c,s)=>{const g=()=>!!Object.values(b._usages||{}).filter(i=>i).length;return l.subscribe((i,j)=>{var h;const $=s!=null&&s.comparePatch?s.comparePatch(u(j,c)):u(j,c),A=s!=null&&s.comparePatch?s.comparePatch(u(i,c)):u(i,c);g()&&!O($,A)&&((h=s==null?void 0:s.sideEffect)==null||h.call(s,{prev:u(j,c),next:u(i,c)}),C())})},C=async()=>{d(),b.action()},d=()=>{o=Object.keys(f).reduce((l,c)=>({...l,[c]:u(e.getState(),c)}),{})};return z(e,()=>{o=Cr(T)}),Object.assign(b,{createFilter:m,clearAll:()=>{b.clear(),Object.keys(f).forEach(l=>f[l].clear()),b.action()},listen:x})},Sr=(e,r)=>typeof e!="object"?O(e,r)?[]:[{field:"_",prev:r,next:e}]:Object.keys(e).reduce((t,n)=>(O(e[n],r[n])||t.push({field:n,prev:r[n],next:e[n]}),t),[]),Er=te.forwardRef(({type:e="success",children:r,icon:t,...n},b)=>_.jsxs(wr,{...n,$chipType:e,ref:b,children:[t?_.jsx(Or,{children:t}):null,r]})),Or=I.div`
  margin-right: 4px;
  font-size: 12px;
`,_r=I(Er)``,wr=I.div`
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
  `};export{_r as S,S as b,Cr as c,Sr as g,Lr as l};
//# sourceMappingURL=StatusChip-96oyOgD5.js.map
