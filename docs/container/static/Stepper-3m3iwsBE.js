import{r as $,j as e,E as f,u as n,Y as j,a as l,Q as b,$ as w,bc as T}from"./index-tEWTe_cM.js";import{N as v,s as g}from"./NumberIndicator-y1X_2mLN.js";const C=({active:s,disabled:t,complete:r,error:a})=>s?"active":t?"disabled":a?"error":r?"completed":"incomplete",H=({$active:s,$disabled:t,theme:r})=>s?r.systemColors.blue600:t?r.systemColors.grey400:r.systemColors.grey800,I=$.memo(({disabled:s,step:t,active:r,onClick:a,title:u,subtitle:x,firstItem:c,errorSteps:d,completeSteps:i,size:o,tooltip:m})=>{const p=C({complete:!!(i!=null&&i.includes(t)),error:!!(d!=null&&d.includes(t)),active:r,disabled:s});return e.jsxs(M,{$size:o||"100",$firstItem:c,children:[!c&&e.jsx(E,{$stateType:p,$size:o||"100"}),e.jsx(f,{content:e.jsx("div",{dangerouslySetInnerHTML:{__html:m||""}}),disabled:!m,children:e.jsx("div",{children:e.jsx(D,{$size:o,$stateType:p,onClick:()=>!s&&(a==null?void 0:a(t)),children:e.jsxs(h,{children:[e.jsx(v,{size:o,stateType:p,step:t}),o!=="50"&&e.jsxs(L,{children:[e.jsx(y,{$stateType:p,children:u}),e.jsx(B,{$stateType:p,children:x})]})]})})})})]})}),h=n.span`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`,L=n.div`
  width: 100%;
  margin-left: ${({theme:s})=>s.spacing.sp8};
`,y=n.span`
  font-size: 14px;
  width: fit-content;
  white-space: nowrap;
  ${({$stateType:s})=>g[s].title}
`,B=n(y)`
  ${j};
  display: block;
  ${({theme:s,$stateType:t})=>["disabled"].includes(t)&&l`
      color: ${s.systemColors.grey300};
    `}
`,D=n.li`
  display: flex;
  align-items: center;
  font-weight: ${({$stateType:s})=>["active","complete"].includes(s)?"bold":"normal"};

  ${({$stateType:s})=>s==="disabled"&&l`
      ${h} {
        cursor: not-allowed;
      }
    `}
`,E=n.div`
  height: 2px;
  ${({theme:s,$stateType:t,$size:r})=>r==="100"?l`
          width: 100%;
          background: ${s.systemColors.shadow200};
          border-radius: 2px;
        `:l`
          width: 100%;
          ${g[t].separator}
        `}
`,M=n.div`
  display: grid;
  align-items: center;
  width: fit-content;
  ${({$size:s})=>s==="100"?l`
          gap: 16px;
          grid-template-columns: ${({$firstItem:t})=>t?"1fr":"minmax(2px,64px) 1fr"};
        `:l`
          gap: 0;
          grid-template-columns: ${({$firstItem:t})=>t?"1fr":"minmax(24px,50px) 1fr"};
        `};
`,Q=n(({currentStep:s,size:t,steps:r,onChange:a,disabledNextStep:u,columnLayout:x,...c})=>{const d=$.useMemo(()=>r[s-1||0],[s,r]);return e.jsxs(N,{...c,children:[e.jsx(S,{$size:t||"100",$columnLayout:x,children:r.map((i,o)=>e.jsx($.Fragment,{children:e.jsx(I,{size:t||"100",firstItem:x||o===0,active:o+1===s,step:o+1,onClick:a,tooltip:i.tooltip,title:i.title,subtitle:i==null?void 0:i.subtitle,disabled:!!(u?o+1>s:i.disabled),...c})},o))}),t==="50"&&e.jsx(W,{currentStepData:d,step:s,stepsLength:r.length})]})})``,N=n.div`
  padding: ${s=>s.theme.spacing.sp12} 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:s})=>s.systemColors.shadow200};
  border-bottom: 1px solid ${({theme:s})=>s.systemColors.shadow200};
`,S=n.nav`
  display: flex;
  align-items: center;
  justify-content: start;

  ${s=>s.$columnLayout&&l`
      align-items: flex-start;
      flex-direction: column;
    `}

  ${({$size:s})=>s==="100"?l`
          gap: 16px;
        `:l``}
`,W=({step:s,stepsLength:t,currentStepData:r})=>{const{t:a}=T();return e.jsxs("div",{children:[e.jsx(_,{children:a("stepper.description",{current:s,stepsLength:t})}),e.jsx(k,{children:r.title})]})},_=n.span`
  ${b};
`,k=n.span`
  ${w};
  color: ${({theme:s})=>s.systemColors.grey800};
`;export{Q as S,H as g};
//# sourceMappingURL=Stepper-3m3iwsBE.js.map
