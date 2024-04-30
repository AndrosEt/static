import{j as e,cB as c,u as t,r as x,eS as m,bz as l,cp as d,cE as g,eT as j}from"./index-3WWdADc-.js";import{a3 as p}from"./Learn-iEpSD2rS.js";const o={amazonGroup:e.jsx(p,{}),walmartGroup:e.jsx(c,{})},u=({label:a="",group:s=""})=>e.jsxs(h,{children:[o[s]&&e.jsx(f,{children:o[s]}),l[a]&&e.jsx(d,{children:l[a]})]}),h=t.div`
  display: flex;
  align-items: center;
`,f=t.div`
  font-size: 16px;
  width: 20px;
  display: flex;
  align-items: center;
`,b=x.memo(({value:a,group:s,label:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{label:a,group:s}),e.jsx(L,{children:n})]})),L=t.span`
  margin-left: 8px;
`,z=({value:a,placeholder:s,error:n})=>{const r=a==null?void 0:a[0];return r?e.jsx(b,{value:r==null?void 0:r.value,label:r==null?void 0:r.label,group:r==null?void 0:r.group}):e.jsx(g,{$error:n,children:s})},M=a=>e.jsx(j,{...a}),i=t.div`
  height: 100%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
`,S=[{id:"amazonGroup",label:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(p,{})}),"Amazon Marketplace"]})},{id:"walmartGroup",label:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(c,{})}),"Walmart Marketplace"]})}],y=({groupOptions:a,...s})=>e.jsx(m,{renderValue:z,renderOption:M,groups:a?S:void 0,...s});export{y as M,b as a,S as p};
//# sourceMappingURL=MarketplaceSingleSelect-pf9DJN8d.js.map
