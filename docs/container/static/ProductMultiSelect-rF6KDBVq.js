import{j as e,jo as g,r as s,N as y,x as S,bH as v,u as n,cq as I,cr as P,e7 as b,b9 as x,je as w}from"./index-VVIvRZBh.js";import{_ as M,f as V,H,W as p}from"./middleware-KgP9JdWn.js";const O=({getBlocks:o,...i})=>e.jsx($,{renderValue:r=>e.jsx(T,{...r,getBlocks:o}),renderOption:r=>e.jsx(g,{...r,getBlocks:o}),renderHeader:M,...i}),T=s.memo(({getBlocks:o,placeholder:i,value:r,disabled:l,size:d,handleChange:m,error:j,removeIcon:u,hiddenPopoverProps:h,...c})=>{const f=s.useMemo(()=>r.map(t=>({component:e.jsx(V,{defaultValue:t.value,"data-tag":!0,size:d,disabled:l,onRemove:a=>{m({type:"remove",oldValue:c.optionsMap[a]})},icon:e.jsx(z,{imageSrc:t.imageSrc}),children:t.label},t.value),id:t.value,tooltip:e.jsxs(A,{children:[e.jsx(R,{size:"dropdown",market:t.market,product:t,overflowTitleTooltip:!1,blocks:o==null?void 0:o(t)},t.value),u&&e.jsx(y,{buttonType:"icon",icon:e.jsx(S,{icon:v}),size:"50",onClick:()=>{m({type:"remove",oldValue:c.optionsMap[t.value]})}})]})})),[l,o,m,c.optionsMap,d,r,u]);return r.length===0?e.jsx(N,{$error:j,children:i}):e.jsx(F,{items:f,renderHidden:t=>e.jsx(H,{tippy:h,count:"+"+t.length,items:e.jsx(e.Fragment,{children:t.map(a=>e.jsx(s.Fragment,{children:a.tooltip||a.component},a.id))}),disabled:l,size:d})})}),A=n.div`
  display: flex;
  align-items: center;
`,F=n(p)`
  position: relative;
  width: 100%;
  min-height: 100%;
  max-width: 100%;
  gap: 4px;

  ${p.Item} {
    gap: 4px;
  }
`,N=n(I)`
  ${P};
  left: 5px;
`,R=n(b)`
  padding: 14px 8px;
`,$=n(x)`
  ${x.Control} {
    padding-left: 3px;
  }
`,z=s.memo(({imageSrc:o})=>o?e.jsx(W,{src:o}):e.jsx(C,{})),W=n.img`
  max-width: 18px;
  max-height: 18px;
  border-radius: 100px;
`,C=n(w)`
  font-size: 12px;
`;export{O as P};
//# sourceMappingURL=ProductMultiSelect-rF6KDBVq.js.map
