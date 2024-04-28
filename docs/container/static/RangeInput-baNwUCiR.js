import{r as a,j as u,bi as T,u as h,I as H,K,a as C,y as L,cK as O}from"./index-tEWTe_cM.js";const U=a.memo(({title:e,sections:t,offsetTop:o,offsetBottom:n,children:i,scrollRef:s,behavior:l,className:g,onClick:b})=>{const p=a.useCallback(()=>s?{scrollNode:s==null?void 0:s.current,innerHeight:()=>{var r;return(r=s==null?void 0:s.current)==null?void 0:r.clientHeight},scrollY:()=>{var r;return(r=s==null?void 0:s.current)==null?void 0:r.scrollTop},scrollHeight:()=>{var r;return(r=s==null?void 0:s.current)==null?void 0:r.scrollHeight},node:s==null?void 0:s.current}:{scrollNode:window,innerHeight:()=>window.innerHeight,scrollY:()=>window.scrollY,scrollHeight:()=>document.body.scrollHeight,node:document},[s]),{current:d,setCurrent:x,refSections:v}=V(t,p,o,n),f=a.useCallback(r=>{var c,$,k,m;(c=r.ref)!=null&&c.current&&(x(r.value),(m=($=p().scrollNode)==null?void 0:$.scrollTo)==null||m.call($,{top:((k=r.ref.current)==null?void 0:k.offsetTop)-(o||0),behavior:l}))},[o,x,p,l]);return u.jsxs(E,{className:g,children:[u.jsxs(B,{$top:o,children:[e,v.map((r,c)=>u.jsx(I,{onClick:()=>{b==null||b(r.value),f(r)},$active:d===r.value,children:u.jsx(j,{children:r.label??r.value})},c))]}),u.jsx(Y,{children:a.Children.map(i,(r,c)=>v[c]?u.jsx(_,{ref:v[c].ref,children:r}):r)})]})}),S=e=>e.map(({value:t,label:o})=>({value:t,ref:a.createRef(),label:o})),V=(e,t,o,n)=>{const[i,s]=a.useState(()=>S(e));a.useEffect(()=>{s(S(e))},[e]);const[l,g]=a.useState(i[0].value),b=a.useCallback(()=>{t().innerHeight()+t().scrollY()>=t().scrollHeight()?g(i[i.length-1].value??""):[...i].reverse().find(d=>d.ref.current&&t().scrollY()+(n||0)+(o||0)>=d.ref.current.offsetTop?(g(d.value),!0):!1)},[n,o,i,t]),p=T(b,200);return a.useEffect(()=>{var d;return(d=t().node)==null||d.addEventListener("scroll",p),()=>{var x;(x=t().node)==null||x.removeEventListener("scroll",p)}},[p,t]),{current:l,refSections:i,setCurrent:g}},E=h.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sp24};

  ${H.mobileBefore} {
    flex-direction: column;
  }
`,B=h.div`
  display: flex;
  flex-direction: column;
  width: 204px;
  position: sticky;
  top: ${({$top:e})=>e??0}px;
  flex: 0 0 auto;

  ${H.mobileBefore} {
    width: 100%;
    position: initial;
  }
`,Y=h.div`
  flex-grow: 1;
`,_=h.div``,j=h.span`
  ${K};
  transition: all 0.2s ease-in-out;
  flex-grow: 1;
`,I=h.div`
  display: flex;
  cursor: pointer;
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
  color: ${({theme:e})=>e.systemColors.grey800};
  padding: ${({theme:e})=>`${e.spacing.sp8} ${e.spacing.sp16}`};
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.blue50};
    border-radius: ${({theme:e})=>e.spacing.sp4};
  }

  ${e=>e.$active&&C`
      background-color: ${({theme:t})=>t.systemColors.blue50};
      border-radius: ${({theme:t})=>t.spacing.sp4};

      & > ${j} {
        ${L};
        color: ${({theme:t})=>t.systemColors.blue800};
      }
    `}
`,J=Object.assign(U,{Value:j,Container:E,Navigation:B,Section:I,Content:Y}),D="50",z=(e,t,o)=>{const n=(Number(e||0)-t)/(o-t)*100;return n>100?100:n<0?0:n},W=(e,t,o)=>{var n;return(n=o||[])==null?void 0:n.map(i=>({percent:(i-e)/(t-e)*100,point:i}))},X=a.forwardRef(({size:e="50",disabled:t,min:o=0,max:n=1,value:i,breakPoints:s,onSticky:l,step:g,onChange:b,...p},d)=>{const[x,v]=a.useState(()=>z(i,o,n)),f=W(o,n,s),[r,c]=a.useState(!1);a.useEffect(()=>{v(z(i,o,n))},[i,n,o]);const $=a.useCallback(()=>{if(l&&(s!=null&&s.length)){const m=(n-o)/20;let w=Number(i);s.forEach(y=>{w<y+m&&w>y-m&&(w=y)}),w!==i&&(l==null||l(w))}},[s,n,o,l,i]),k=a.useCallback(()=>{c(!1),$()},[$]);return u.jsxs(q,{children:[f==null?void 0:f.map(({percent:m,point:w},y)=>u.jsx(M,{$light:w<Number(i),$left:m},y)),u.jsx(A,{$percent:x,$disabled:t}),u.jsx(F,{...p,disabled:t,onChange:b,onMouseDown:()=>c(!0),onMouseUp:k,value:i,max:n,min:o,$size:e,$active:r,ref:d,step:g,type:"range"})]})}),M=h.div`
  position: absolute;
  left: ${({$left:e})=>e+"%"};
  width: 4px;
  height: 4px;
  background-color: ${e=>e.$light?e.theme.systemColors.grey200:e.theme.systemColors.grey400};
  top: 6px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 3;
`,q=h.div`
  position: relative;
  line-height: 1;
  font-size: 0;
  flex-grow: 1;

  &:before {
    content: "";
    position: absolute;
    height: 4px;
    top: 6px;
    left: 0;
    right: 0;
    border-radius: 20px;
    background-color: ${e=>e.theme.systemColors.grey200};
    z-index: 1;
  }
`,A=h.div.attrs(e=>({style:{width:`${e.$percent||0}%`,backgroundColor:e.$disabled?e.theme.systemColors.grey300:e.theme.systemColors.blue600}}))`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 4px;
  z-index: 2;
  left: 0;
  position: absolute;
  top: 6px;
  overflow: hidden;

  ${M} {
    top: 0;
  }
`,F=h.input`
  -webkit-appearance: none;
  cursor: pointer;
  margin: 0;
  z-index: 4;
  width: 100%;
  position: relative;
  background: transparent;

  ${e=>e.disabled&&"cursor: not-allowed;"};

  &:focus {
    outline: none;
  }

  &:focus-visible::-webkit-slider-thumb {
    outline: 2px solid ${e=>e.theme.systemColors.blue600};
    outline-offset: 2px;
  }

  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    ${e=>!e.disabled&&O};
    height: 24px;
    width: 24px;
    background: ${e=>e.disabled?e.theme.systemColors.grey300:e.theme.systemColors.blue600};
    border-radius: 50%;

    &:hover {
      background: ${e=>!e.disabled&&e.theme.systemColors.blue800};
      transition: background 0.25s ease-out;
    }

    &:active {
      background: ${e=>!e.disabled&&e.theme.systemColors.blue900};
    }
  }

  ${e=>e.$size?N[e.$size]:N[D]};
  ${e=>e.$active&&e.$size==="50"&&C`
      &::-webkit-slider-thumb {
        height: 24px;
        width: 24px;
      }
    `};
  ${e=>e.$active&&e.$size==="200"&&C`
      &::-webkit-slider-thumb {
        height: 32px;
        width: 32px;
      }
    `};
`,N={50:C`
    height: 16px;

    &::-webkit-slider-thumb {
      height: 16px;
      width: 16px;

      &:active {
        height: 24px;
        width: 24px;
      }
    }
  `,200:C`
    height: 16px;

    &::-webkit-slider-thumb {
      height: 24px;
      width: 24px;

      &:active {
        height: 32px;
        width: 32px;
      }
    }
  `},Q=Object.assign(X,{});export{Q as R,J as S};
//# sourceMappingURL=RangeInput-baNwUCiR.js.map
