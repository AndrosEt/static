import{j as e,bh as g,u as r,e7 as d,a1 as y,Q as j,a as h}from"./index-VVIvRZBh.js";import{m as u}from"./middleware-KgP9JdWn.js";import{T as $}from"./SearchGraphModal-EAp81elq.js";const I=({product:s,imageSize:a,titleLineClamp:t,marketplace:l,tableData:i,frame:p,checkbox:o,footer:m,openTitleLinkInNewTab:c,customSummary:x})=>e.jsxs(w,{$frame:p,children:[e.jsxs(v,{children:[x||e.jsx(k,{product:s,imageSize:a,titleLineClamp:t,renderBlocks:e.jsx(C,{data:{asin:(s==null?void 0:s.asin)||"",marketplace:l}}),openTitleLinkInNewTab:c}),o&&e.jsx($,{...o.tooltip,children:e.jsx("div",{children:e.jsx(g,{...o})})})]}),e.jsx(B,{children:i==null?void 0:i.map((n,f)=>e.jsxs(S,{children:[e.jsx(b,{children:n[0]}),e.jsx(T,{children:n[1]})]},f))}),m]}),C=r(u)`
  gap: 4px;
`,v=r.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:s})=>s.spacing.sp8};
`,k=r(d)`
  ${d.Info} {
    margin-left: 8px;
  }
`,B=r.div`
  margin-top: 16px;
`,S=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  gap: 8px;

  &:nth-child(odd) {
    background-color: ${s=>s.theme.systemColors.grey100};
    border-radius: 6px;
  }
`,b=r.div`
  ${y}
`,T=r.div`
  ${j};
  color: ${s=>s.theme.systemColors.black};
`,w=r.div`
  ${s=>s.$frame&&h`
      background: #ffffff;
      padding: 16px;
      border: 1px solid ${a=>a.theme.systemColors.grey200};
      border-radius: 6px;
    `}
`;export{I as P};
//# sourceMappingURL=ProductCard-35k-9HWM.js.map
