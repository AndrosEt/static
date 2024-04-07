import{j as e,cn as c,u as n,r as x,eF as m,bd as l,c9 as d,cq as g,eG as j}from"./index-VVIvRZBh.js";import{a1 as p}from"./Learn-nfpDmxZa.js";const o={amazonGroup:e.jsx(p,{}),walmartGroup:e.jsx(c,{})},u=({label:a="",group:s=""})=>e.jsxs(h,{children:[o[s]&&e.jsx(f,{children:o[s]}),l[a]&&e.jsx(d,{children:l[a]})]}),h=n.div`
  display: flex;
  align-items: center;
`,f=n.div`
  font-size: 16px;
  width: 20px;
  display: flex;
  align-items: center;
`,b=x.memo(({value:a,group:s,label:t})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{label:a,group:s}),e.jsx(L,{children:t})]})),L=n.span`
  margin-left: 8px;
`,G=({value:a,placeholder:s,error:t})=>{const r=a==null?void 0:a[0];return r?e.jsx(b,{value:r==null?void 0:r.value,label:r==null?void 0:r.label,group:r==null?void 0:r.group}):e.jsx(g,{$error:t,children:s})},M=a=>e.jsx(j,{...a}),i=n.div`
  height: 100%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
`,k=[{id:"amazonGroup",label:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(p,{})}),"Amazon Marketplace"]})},{id:"walmartGroup",label:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(c,{})}),"Walmart Marketplace"]})}],F=({groupOptions:a,...s})=>e.jsx(m,{renderValue:G,renderOption:M,groups:a?k:void 0,...s});export{F as M,b as a,k as p};
//# sourceMappingURL=MarketplaceSingleSelect-4raCX1Al.js.map
