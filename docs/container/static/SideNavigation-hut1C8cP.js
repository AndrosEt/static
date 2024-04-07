import{r as i,j as d,aV as Y,u as l,I as H,K as k,a as L,y as V}from"./index-VVIvRZBh.js";const I=i.memo(({title:e,sections:r,offsetTop:s,offsetBottom:$,children:o,scrollRef:t,behavior:x,className:p,onClick:g})=>{const c=i.useCallback(()=>t?{scrollNode:t==null?void 0:t.current,innerHeight:()=>{var n;return(n=t==null?void 0:t.current)==null?void 0:n.clientHeight},scrollY:()=>{var n;return(n=t==null?void 0:t.current)==null?void 0:n.scrollTop},scrollHeight:()=>{var n;return(n=t==null?void 0:t.current)==null?void 0:n.scrollHeight},node:t==null?void 0:t.current}:{scrollNode:window,innerHeight:()=>window.innerHeight,scrollY:()=>window.scrollY,scrollHeight:()=>document.body.scrollHeight,node:document},[t]),{current:a,setCurrent:v,refSections:m}=K(r,c,s,$),B=i.useCallback(n=>{var u,h,S,y;(u=n.ref)!=null&&u.current&&(v(n.value),(y=(h=c().scrollNode)==null?void 0:h.scrollTo)==null||y.call(h,{top:((S=n.ref.current)==null?void 0:S.offsetTop)-(s||0),behavior:x}))},[s,v,c,x]);return d.jsxs(j,{className:p,children:[d.jsxs(C,{$top:s,children:[e,m.map((n,u)=>d.jsx(E,{onClick:()=>{g==null||g(n.value),B(n)},$active:a===n.value,children:d.jsx(b,{children:n.label??n.value})},u))]}),d.jsx(N,{children:i.Children.map(o,(n,u)=>m[u]?d.jsx(O,{ref:m[u].ref,children:n}):n)})]})}),w=e=>e.map(({value:r,label:s})=>({value:r,ref:i.createRef(),label:s})),K=(e,r,s,$)=>{const[o,t]=i.useState(()=>w(e));i.useEffect(()=>{t(w(e))},[e]);const[x,p]=i.useState(o[0].value),g=i.useCallback(()=>{r().innerHeight()+r().scrollY()>=r().scrollHeight()?p(o[o.length-1].value??""):[...o].reverse().find(a=>a.ref.current&&r().scrollY()+($||0)+(s||0)>=a.ref.current.offsetTop?(p(a.value),!0):!1)},[$,s,o,r]),c=Y(g,200);return i.useEffect(()=>{var a;return(a=r().node)==null||a.addEventListener("scroll",c),()=>{var v;(v=r().node)==null||v.removeEventListener("scroll",c)}},[c,r]),{current:x,refSections:o,setCurrent:p}},j=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sp24};

  ${H.mobileBefore} {
    flex-direction: column;
  }
`,C=l.div`
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
`,N=l.div`
  flex-grow: 1;
`,O=l.div``,b=l.span`
  ${k};
  transition: all 0.2s ease-in-out;
  flex-grow: 1;
`,E=l.div`
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

  ${e=>e.$active&&L`
      background-color: ${({theme:r})=>r.systemColors.blue50};
      border-radius: ${({theme:r})=>r.spacing.sp4};

      & > ${b} {
        ${V};
        color: ${({theme:r})=>r.systemColors.blue800};
      }
    `}
`,_=Object.assign(I,{Value:b,Container:j,Navigation:C,Section:E,Content:N});export{_ as S};
//# sourceMappingURL=SideNavigation-hut1C8cP.js.map
