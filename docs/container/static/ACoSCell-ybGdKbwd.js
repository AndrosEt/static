import{r as g,j as i,b1 as m,iD as v,ii as A,iu as B,il as E,dy as M,iq as D,iz as L,ip as N,ir as z,is as R,iv as P,it as T,ik as H,iB as I,im as _,iy as G,iC as U,ix as W,iA as O,iw as J,io as X,ij as q,u as r,$ as K,bc as V,N as Z,x as Q,bW as Y,dV as S,Z as nn,bA as c,I as j,bl as on,a as p}from"./index-3WWdADc-.js";import{r as sn,f as an}from"./useAutoPlay-ceAGW3YF.js";const rn=n=>n.id,Fn=({selected:n,setSelected:o,getId:s=rn,data:a,disableHeader:x})=>{const l=g.useMemo(()=>a==null?void 0:a.every(t=>n==null?void 0:n.includes(s(t))),[a,s,n]),e=g.useMemo(()=>a==null?void 0:a.some(t=>n==null?void 0:n.includes(s(t))),[a,s,n]);return g.useEffect(()=>{o==null||o([])},[a]),{selectColumn:g.useMemo(()=>({field:"__checkbox__",header:a!=null&&a.length?i.jsx(m,{readOnly:!0,disabled:x,checked:e,indeterminate:e&&!l,onChange:()=>{e?o==null||o([]):o==null||o((a==null?void 0:a.map(s))||[])}}):null,render:t=>{const u=s(t),y=n==null?void 0:n.includes(u);return i.jsx(m,{checked:y,onChange:()=>{y?o==null||o((n==null?void 0:n.filter(w=>w!==u))||[]):o==null||o([...n||[],u])}})}}),[l,a,x,s,e,n,o])}},ln={GB:i.jsx(v,{}),AU:i.jsx(A,{}),MX:i.jsx(B,{}),CA:i.jsx(E,{}),US:i.jsx(M,{}),DE:i.jsx(D,{}),ES:i.jsx(L,{}),FR:i.jsx(N,{}),IN:i.jsx(z,{}),IT:i.jsx(R,{}),NL:i.jsx(P,{}),JP:i.jsx(T,{}),BR:i.jsx(H,{}),TR:i.jsx(I,{}),CN:i.jsx(_,{}),SG:i.jsx(G,{}),AE:i.jsx(U,{}),SA:i.jsx(W,{}),SE:i.jsx(O,{}),PL:i.jsx(J,{}),EG:i.jsx(X,{}),BE:i.jsx(q,{})},en=({code:n,flag:o=!0,label:s=!0})=>{const{t:a}=V();return i.jsxs(d,{children:[o&&i.jsx(f,{children:ln[n]}),s&&i.jsx(C,{children:a(`countries.${n}`)})]})},d=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing.sp8};
`,f=r.div`
  font-size: 27px;
  width: 27px;
  display: flex;
  align-items: center;
`,C=r.div`
  ${K};
  color: ${n=>n.theme.systemColors.grey800};
`,kn=Object.assign(en,{Wrapper:d,Flag:f,Label:C}),wn=({layout:n,defaultComponents:o,custom:s})=>{const a=g.useMemo(()=>n.lg.filter(l=>(o||[]).every(e=>e.i!==l.i)).map(l=>l.i),[o,n]),x=g.useMemo(()=>[...o||[],...a.map(l=>{var e,h;return{i:l,component:s.component,autoHeight:typeof s.autoHeight=="function"?(e=s.autoHeight)==null?void 0:e.call(s,l):s.autoHeight,autoDelay:typeof s.autoDelay=="function"?(h=s.autoDelay)==null?void 0:h.call(s,l):s.autoDelay}})],[o,a,s.component,s.autoHeight,s.autoDelay]);return{keys:a,components:x}},xn=({title:n,onClose:o})=>i.jsxs(gn,{children:[i.jsx(Z,{buttonType:"icon",onClick:o,icon:i.jsx(Q,{icon:Y}),size:"200"}),i.jsxs(tn,{children:[i.jsx(pn,{href:S("/dashboard"),children:i.jsx(hn,{})}),i.jsx(un,{children:n})]})]}),gn=r.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: ${({theme:n})=>n.spacing.sp12};
  padding: ${({theme:n})=>n.spacing.sp12};
  background-color: ${({theme:n})=>n.systemColors.white};
  box-shadow:
    0 4px 16px -8px rgba(103, 132, 162, 0.32),
    0 1px 4px 0 rgba(103, 132, 162, 0.16);
  z-index: 100;
`,tn=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing.sp32};
`,pn=r.a`
  text-decoration: none;
`,hn=r(sn)`
  width: 20px;
  height: auto;
`,un=r.p`
  ${nn}
`,cn=n=>i.jsx(jn,{...n,lockBody:!0,zIndex:n.zIndex||on.modal,children:i.jsxs($,{children:[i.jsx(xn,{title:n.title,onClose:n.onClose}),i.jsx(F,{children:n.children}),n.footer&&i.jsx(i.Fragment,{children:i.jsx(k,{children:n.footer})})]})}),jn=r(c)`
  ${c.SubWrapper} {
    padding: 0;
  }

  ${c.Content} {
    width: 100%;
    height: 100%;
  }
`,$=r.div`
  display: flex;
  flex-direction: column;
  background: ${n=>n.theme.systemColors.white};
  width: 100%;
  height: 100%;
`,b=r.div`
  ${j.laptop} {
    padding: ${n=>`${n.theme.spacing.sp12} ${n.theme.spacing.sp24}`};
  }

  ${j.desktop} {
    padding: ${n=>`${n.theme.spacing.sp16} ${n.theme.spacing.sp32}`};
  }

  ${j.extraDesktop} {
    padding: ${n=>`${n.theme.spacing.sp24} ${n.theme.spacing.sp48}`};
  }
`,F=r(b)`
  flex-grow: 1;
  overflow-y: auto;
  flex-basis: 0;
`,k=r(b)`
  border-top: 1px solid ${({theme:n})=>n.systemColors.grey200};
  flex: 0 0 auto;
`,vn=Object.assign(cn,{Content:$,Footer:k,Children:F}),yn=(n,o)=>{if(n||n===0){if(n<=o)return"low";if(n>o&&n<=o*2)return"middle";if(n>o*2)return"high"}return"unknown"},An=({acos:n,target:o=30,type:s="normal",className:a})=>{const x=yn(n,o);return i.jsxs(mn,{className:a,children:[i.jsx(dn,{type:s,children:typeof n!="number"?"-%":an({value:n,style:"percent"})}),i.jsx(fn,{level:x})]})},mn=r.div`
  display: flex;
  align-items: center;
`,dn=r.div`
  font-weight: ${n=>n.type};
`,fn=r.div`
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  //top: -2px;
  ${n=>Cn[n.level]}
`,Cn={high:p`
    background-color: ${({theme:n})=>n.systemColors.orange400};
  `,middle:p`
    background-color: ${({theme:n})=>n.systemColors.yellow400};
  `,low:p`
    background-color: ${({theme:n})=>n.systemColors.green600};
  `,unknown:p`
    background-color: ${({theme:n})=>n.systemColors.grey300};
  `};export{An as A,kn as C,vn as P,fn as R,xn as S,wn as a,ln as f,Fn as u};
//# sourceMappingURL=ACoSCell-ybGdKbwd.js.map
