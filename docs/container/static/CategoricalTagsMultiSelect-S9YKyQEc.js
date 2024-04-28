import{r as u,j as t,u as o,aT as x,a as g,cC as C,cE as w,N as j,x as f,aA as y,aN as S,bW as $}from"./index-tEWTe_cM.js";import{_ as b,H as v}from"./middleware-6VZ1FcKb.js";import{T as I}from"./getUpsellData-siUtjfVt.js";import{W as T}from"./WidthAndHeightLimitedItems-85B_6p1x.js";import{C as h}from"./CategoricalChip-xPMVgK7q.js";const B=e=>{const n=u.useCallback(r=>t.jsx(H,{...r}),[]);return t.jsx(W,{...e,hideArrow:e.lock,hideDropdown:e.lock,renderValue:n,renderHeader:b})},W=o(x)`
  ${x.Control} {
    padding-left: 4px;
  }

  ${e=>e.lock&&g`
      ${x.Control} {
        border: none;
        padding: 0;
        outline: none;
      }
    `}
`,A=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`,H=({value:e,placeholder:n,error:r,handleChange:i,lock:d,lockTitle:l,onLock:s})=>{const c=u.useMemo(()=>(e==null?void 0:e.map(a=>{const{value:p}=a;return{component:t.jsx(O,{data:a,handleChange:i}),id:p}}))||[],[i,e]),m=u.useContext(C);return t.jsxs(A,{children:[c.length?t.jsx(P,{items:c,renderHidden:a=>t.jsx(k,{count:"+"+a.length,items:a.map(p=>p.component)})}):t.jsx(w,{$error:r,children:n}),d&&t.jsx(j,{buttonType:l?"tertiary":"icon",icon:t.jsx(f,{icon:y}),onClick:()=>{s==null||s(),m.setShowDropdown(!0)},children:l})]})},O=({data:e,handleChange:n})=>{const{label:r,category:i,crossedOut:d,dataTestId:l}=e,{isOverflown:s,checkOverflown:c}=S();return t.jsx(I,{content:s?void 0:r,children:t.jsxs(R,{category:i,crossedOut:d,dataTestId:l,children:[t.jsx(V,{onMouseEnter:c,children:r}),t.jsx(E,{onClick:m=>{m.stopPropagation(),n({type:"remove",oldValue:e})}})]})})},k=o(v)`
  margin-left: 4px;
`,E=o(f).attrs({icon:$})`
  color: ${e=>e.theme.systemColors.grey800};
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    color: ${e=>e.theme.systemColors.black};
  }
`,P=o(T)`
  max-height: 25px;
`,R=o(h)`
  align-self: flex-start;
  width: 100%;
  ${h.CategoricalWrapper} {
    width: 100%;
  }
  ${h.CategoricalTitle} {
    min-width: 0;
    width: 100%;
  }
`,V=o.div`
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;export{B as C};
//# sourceMappingURL=CategoricalTagsMultiSelect-S9YKyQEc.js.map
