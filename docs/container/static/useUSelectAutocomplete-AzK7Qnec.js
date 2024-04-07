import{r as u,j as r,E as f,u as n,Y as j,a as l,Q as b,$ as w,aP as T}from"./index-VVIvRZBh.js";import{N as v,s as h}from"./NumberIndicator-LlwH8j2G.js";const C=({active:e,disabled:t,complete:s,error:o})=>e?"active":t?"disabled":o?"error":s?"completed":"incomplete",z=({$active:e,$disabled:t,theme:s})=>e?s.systemColors.blue600:t?s.systemColors.grey400:s.systemColors.grey800,S=u.memo(({disabled:e,step:t,active:s,onClick:o,title:x,subtitle:m,firstItem:c,errorSteps:d,completeSteps:a,size:i,tooltip:$})=>{const p=C({complete:!!(a!=null&&a.includes(t)),error:!!(d!=null&&d.includes(t)),active:s,disabled:e});return r.jsxs(E,{$size:i||"100",$firstItem:c,children:[!c&&r.jsx(D,{$stateType:p,$size:i||"100"}),r.jsx(f,{content:r.jsx("div",{dangerouslySetInnerHTML:{__html:$||""}}),disabled:!$,children:r.jsx("div",{children:r.jsx(B,{$size:i,$stateType:p,onClick:()=>!e&&(o==null?void 0:o(t)),children:r.jsxs(g,{children:[r.jsx(v,{size:i,stateType:p,step:t}),i!=="50"&&r.jsxs(L,{children:[r.jsx(y,{$stateType:p,children:x}),r.jsx(I,{$stateType:p,children:m})]})]})})})})]})}),g=n.span`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`,L=n.div`
  width: 100%;
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,y=n.span`
  font-size: 14px;
  width: fit-content;
  white-space: nowrap;
  ${({$stateType:e})=>h[e].title}
`,I=n(y)`
  ${j};
  display: block;
  ${({theme:e,$stateType:t})=>["disabled"].includes(t)&&l`
      color: ${e.systemColors.grey300};
    `}
`,B=n.li`
  display: flex;
  align-items: center;
  font-weight: ${({$stateType:e})=>["active","complete"].includes(e)?"bold":"normal"};

  ${({$stateType:e})=>e==="disabled"&&l`
      ${g} {
        cursor: not-allowed;
      }
    `}
`,D=n.div`
  height: 2px;
  ${({theme:e,$stateType:t,$size:s})=>s==="100"?l`
          width: 100%;
          background: ${e.systemColors.shadow200};
          border-radius: 2px;
        `:l`
          width: 100%;
          ${h[t].separator}
        `}
`,E=n.div`
  display: grid;
  align-items: center;
  width: fit-content;
  ${({$size:e})=>e==="100"?l`
          gap: 16px;
          grid-template-columns: ${({$firstItem:t})=>t?"1fr":"minmax(2px,64px) 1fr"};
        `:l`
          gap: 0;
          grid-template-columns: ${({$firstItem:t})=>t?"1fr":"minmax(24px,50px) 1fr"};
        `};
`,H=n(({currentStep:e,size:t,steps:s,onChange:o,disabledNextStep:x,columnLayout:m,...c})=>{const d=u.useMemo(()=>s[e-1||0],[e,s]);return r.jsxs(M,{...c,children:[r.jsx(A,{$size:t||"100",$columnLayout:m,children:s.map((a,i)=>r.jsx(u.Fragment,{children:r.jsx(S,{size:t||"100",firstItem:m||i===0,active:i+1===e,step:i+1,onClick:o,tooltip:a.tooltip,title:a.title,subtitle:a==null?void 0:a.subtitle,disabled:!!(x?i+1>e:a.disabled),...c})},i))}),t==="50"&&r.jsx(F,{currentStepData:d,step:e,stepsLength:s.length})]})})``,M=n.div`
  padding: ${e=>e.theme.spacing.sp12} 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:e})=>e.systemColors.shadow200};
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.shadow200};
`,A=n.nav`
  display: flex;
  align-items: center;
  justify-content: start;

  ${e=>e.$columnLayout&&l`
      align-items: flex-start;
      flex-direction: column;
    `}

  ${({$size:e})=>e==="100"?l`
          gap: 16px;
        `:l``}
`,F=({step:e,stepsLength:t,currentStepData:s})=>{const{t:o}=T();return r.jsxs("div",{children:[r.jsx(N,{children:o("stepper.description",{current:e,stepsLength:t})}),r.jsx(U,{children:s.title})]})},N=n.span`
  ${b};
`,U=n.span`
  ${w};
  color: ${({theme:e})=>e.systemColors.grey800};
`,W=(e,t)=>t?e.filter(s=>{var o;return(o=s.searchString)==null?void 0:o.toLowerCase().includes(t.toLowerCase())}):e,P=(e,t=W)=>{const[s,o]=u.useState("");return{options:u.useMemo(()=>t(e,s),[t,e,s]),onSearch:o}};export{H as S,W as d,z as g,P as u};
//# sourceMappingURL=useUSelectAutocomplete-AzK7Qnec.js.map
