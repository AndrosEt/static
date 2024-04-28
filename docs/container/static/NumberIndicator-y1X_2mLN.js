import{a as o,j as s,u as a,bW as y,x as g}from"./index-tEWTe_cM.js";var b={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r="fas",t="check",i=448,n=512,l=[10003,10004],d="f00c",m="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";e.definition={prefix:r,iconName:t,icon:[i,n,l,d,m]},e.faCheck=e.definition,e.prefix=r,e.iconName=t,e.width=i,e.height=n,e.ligatures=l,e.unicode=d,e.svgPathData=m,e.aliases=l})(b);const c={active:{title:o`
      color: ${e=>e.theme.systemColors.blue600};
      font-weight: 700;
    `,border:o`
      border-color: ${({theme:e})=>e.systemColors.blue600};
    `,background:o`
      background-color: ${({theme:e})=>e.systemColors.blue100};
    `,step:o`
      color: ${({theme:e})=>e.systemColors.blue600};
    `,separator:o`
      background-color: ${({theme:e})=>e.systemColors.blue600};
    `},error:{title:o`
      color: ${e=>e.theme.systemColors.red400};
    `,border:o`
      border-color: ${({theme:e})=>e.systemColors.red400};
    `,background:o`
      background-color: ${({theme:e})=>e.systemColors.red400};
    `,step:o`
      color: ${({theme:e})=>e.systemColors.white};
    `,separator:o`
      background-color: ${({theme:e})=>e.systemColors.grey400};
    `},disabled:{title:o`
      color: ${e=>e.theme.systemColors.grey300};
    `,border:o`
      border-color: ${({theme:e})=>e.systemColors.grey300};
    `,background:o`
      background: none;
    `,step:o`
      color: ${({theme:e})=>e.systemColors.grey300};
    `,separator:o`
      background-color: ${({theme:e})=>e.systemColors.grey300};
    `},completed:{title:o`
      font-weight: 700;
      color: ${e=>e.theme.systemColors.grey800};
    `,border:o`
      border-color: ${({theme:e})=>e.systemColors.blue600};
    `,background:o`
      background-color: ${({theme:e})=>e.systemColors.blue600};
    `,step:o`
      color: ${({theme:e})=>e.systemColors.white};
    `,separator:o`
      background-color: ${({theme:e})=>e.systemColors.blue600};
    `},incomplete:{title:o`
      color: ${e=>e.theme.systemColors.grey600};
    `,border:o`
      border-color: ${({theme:e})=>e.systemColors.grey600};
    `,background:o`
      background: none;
    `,step:o`
      color: ${({theme:e})=>e.systemColors.grey600};
    `,separator:o`
      background-color: ${({theme:e})=>e.systemColors.grey400};
    `}},h={50:o`
    width: 20px;
    height: 20px;
    min-width: 20px;
  `,100:o`
    width: 24px;
    height: 24px;
    min-width: 24px;
  `},k=({stateType:e,size:r,step:t})=>s.jsx($,{$size:r,$stateType:e,children:s.jsx(p,{currentState:e,step:t,size:r})}),$=a.span`
  border-style: solid;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  display: flex;
  border-width: ${({$stateType:e,$size:r})=>e==="active"||r==="50"?"2px":"1px"};
  ${({$stateType:e})=>c[e].border}
  ${({$stateType:e})=>c[e].background}
  ${({$stateType:e})=>c[e].step}
  ${({$size:e})=>h[e]}
`,p=({currentState:e,step:r,size:t})=>e==="error"?s.jsx(u,{icon:y,size:"xs"}):e==="completed"?s.jsx(u,{icon:b.faCheck,size:"xs"}):t==="50"?s.jsx(s.Fragment,{}):s.jsx(C,{children:r}),C=a.span`
  font-size: 14px;
`,u=a(g)`
  color: ${({theme:e})=>e.systemColors.white};
`;export{k as N,$ as W,p as a,c as s};
//# sourceMappingURL=NumberIndicator-y1X_2mLN.js.map
