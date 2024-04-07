import{r as l,j as r,x as v,bK as w,u as c,N as C,a as m,a1 as j,fP as I}from"./index-VVIvRZBh.js";const B=l.forwardRef(({changesCount:s,icon:o,...t},n)=>r.jsx(k,{...t,ref:n,buttonType:"tertiary",$changes:s>0,icon:s>0?r.jsx($,{children:s}):o??r.jsx(v,{icon:w})})),k=c(C)`
  ${({$changes:s})=>s&&m`
      background: ${({theme:o})=>o.systemColors.blue50};
      color: ${({theme:o})=>o.systemColors.blue600};

      &:hover,
      &:focus {
        background: ${({theme:o})=>o.systemColors.blue100};
        border-color: ${({theme:o})=>o.systemColors.blue100};
      }

      //State: pressed
      &:active {
        background: ${({theme:o})=>o.systemColors.blue200};
        border-color: ${({theme:o})=>o.systemColors.blue200};
      }

      //State: keyboard focus
      &:focus-visible {
        background: ${({theme:o})=>o.systemColors.blue100};
        border-color: ${({theme:o})=>o.systemColors.blue100};
      }

      &:disabled {
        background: ${({theme:o})=>o.systemColors.grey200};
        border-color: ${({theme:o})=>o.systemColors.grey200};
        color: ${({theme:o})=>o.systemColors.grey300};

        ${$} {
          background-color: ${({theme:o})=>o.systemColors.grey300};
          color: ${({theme:o})=>o.systemColors.grey400};
        }
      }
    `};
`,$=c.div`
  ${j};
  background-color: ${({theme:s})=>s.systemColors.blue600};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 18px;
  min-width: 18px;
  border-radius: 18px;
  padding: 0 5px;
  color: ${({theme:s})=>s.systemColors.white};
`,R=({items:s,className:o,renderHidden:t,gap:n=4})=>{const u=l.useRef(null),y=l.useRef(null),[i,b]=l.useState({}),p=l.useMemo(()=>s.reduce((e,d,x)=>i[d.id]?x:e,0),[s,i]),a=l.useMemo(()=>t?s.filter(e=>!i[e.id]):[],[s,t,i]);return s.length===0?null:r.jsxs(h,{className:o,ref:u,$gap:n,children:[s.map((e,d)=>r.jsx(V,{root:u,id:e.id,setVisibility:b,visible:i[e.id],gap:n,addition:a.length>0&&d>=p?r.jsx(g,{ref:y,children:t==null?void 0:t(a)}):null,children:e.component},e.id)),a.length===s.length&&r.jsx(g,{ref:y,children:t==null?void 0:t(a)})]})},V=l.memo(({children:s,root:o,gap:t,id:n,setVisibility:u,visible:y,addition:i})=>{const{ref:b}=I({root:o.current,threshold:.999,initialInView:!1,onChange:p=>u(a=>({...a,[n]:p}))});return r.jsxs(f,{ref:b,$ivView:y,$gap:t,children:[s,i]})}),g=c.div`
  position: sticky;
`,f=c.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${s=>s.$gap}px;
  ${s=>s.$ivView?m`
          order: 0;
          opacity: 1;
        `:m`
          visibility: hidden;
          pointer-events: none;
          order: 100;
          opacity: 0;
        `};
`,h=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s=>s.$gap}px;
  align-items: center;
  overflow: hidden;
  position: relative;
`,S=Object.assign(R,{Root:h,Item:f});export{B as F,S as W};
//# sourceMappingURL=WidthAndHeightLimitedItems-YjkDoD57.js.map
