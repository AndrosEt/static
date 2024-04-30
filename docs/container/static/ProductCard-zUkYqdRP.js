import{j as e,b1 as g,u as r,eo as d,a1 as y,Q as j,a as u}from"./index-3WWdADc-.js";import{n as h}from"./middleware-lPGLX8nq.js";import{T as $}from"./getMarketplaceLinkForProduct-A-zEKrnh.js";const I=({product:s,imageSize:o,titleLineClamp:t,marketplace:l,tableData:a,frame:p,checkbox:i,footer:m,openTitleLinkInNewTab:c,customSummary:x})=>e.jsxs(w,{$frame:p,children:[e.jsxs(v,{children:[x||e.jsx(k,{product:s,imageSize:o,titleLineClamp:t,renderBlocks:e.jsx(C,{data:{asin:(s==null?void 0:s.asin)||"",marketplace:l}}),openTitleLinkInNewTab:c}),i&&e.jsx($,{...i.tooltip,children:e.jsx("div",{children:e.jsx(g,{...i})})})]}),e.jsx(B,{children:a==null?void 0:a.map((n,f)=>e.jsxs(S,{children:[e.jsx(b,{children:n[0]}),e.jsx(T,{children:n[1]})]},f))}),m]}),C=r(h)`
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
  ${s=>s.$frame&&u`
      background: #ffffff;
      padding: 16px;
      border: 1px solid ${o=>o.theme.systemColors.grey200};
      border-radius: 6px;
    `}
`;export{I as P};
//# sourceMappingURL=ProductCard-zUkYqdRP.js.map
