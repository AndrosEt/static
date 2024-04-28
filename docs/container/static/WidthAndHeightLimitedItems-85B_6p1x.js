import{r as a,fY as $,j as n,u as g,a as x}from"./index-tEWTe_cM.js";const j=({items:t,className:r,renderHidden:i,gap:l=4})=>{const c=a.useRef(null),p=a.useRef(null),[e,h]=a.useState({}),u=a.useMemo(()=>t.reduce((s,f,y)=>e[f.id]?y:s,0),[t,e]),o=a.useMemo(()=>i?t.filter(s=>!e[s.id]):[],[t,i,e]);return t.length===0?null:n.jsxs(w,{className:r,ref:c,$gap:l,children:[t.map((s,f)=>n.jsx(I,{root:c,id:s.id,setVisibility:h,visible:e[s.id],gap:l,addition:o.length>0&&f>=u?n.jsx(m,{ref:p,children:i==null?void 0:i(o)}):null,children:s.component},s.id)),o.length===t.length&&n.jsx(m,{ref:p,children:i==null?void 0:i(o)})]})},I=a.memo(({children:t,root:r,gap:i,id:l,setVisibility:c,visible:p,addition:e})=>{const{ref:h}=$({root:r.current,threshold:.999,initialInView:!1,onChange:u=>c(o=>({...o,[l]:u}))});return n.jsxs(v,{ref:h,$ivView:p,$gap:i,children:[t,e]})}),m=g.div`
  position: sticky;
`,v=g.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${t=>t.$gap}px;
  ${t=>t.$ivView?x`
          order: 0;
          opacity: 1;
        `:x`
          visibility: hidden;
          pointer-events: none;
          order: 100;
          opacity: 0;
        `};
`,w=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.$gap}px;
  align-items: center;
  overflow: hidden;
  position: relative;
`,V=Object.assign(j,{Root:w,Item:v});export{V as W};
//# sourceMappingURL=WidthAndHeightLimitedItems-85B_6p1x.js.map
