import{g as C,f as g,B as j,w as k,r as i,j as n,u,a as b,aT as f,bi as R}from"./index-3WWdADc-.js";import{l as T}from"./CustomerEventsComponent-YmM_p4Tw.js";import{P as U}from"./TagsMultiSelect-PKy7h-4F.js";const w=async(e,t)=>{const s=C("https://profits-tools.helium10.com/api/v2/products",{...e});return g({url:s,useSessionAccountId:!0,signal:t})},[d,y]=T((e,t)=>({...j(e,t,"productsRequest",(s,r)=>{const c={term:t().term,...t().params};return w(c,r==null?void 0:r.signal)},{rejectedReaction:()=>{t().productsRequest.setAtom({results:[]})}}),options:{clearOnClickSelected:!0,clearOptionText:void 0,renderControl:void 0,type:"dropdown"},updateOptions:s=>e(({options:r})=>({options:{...r,...s}})),term:"",setTerm:s=>e({term:s}),params:{marketplace:"",seller:"",fulfillmentChannel:void 0},setParams:s=>e({params:s})})),$=e=>{var t;return{productsSelectOptions:((t=e.productsRequest.atom.content)==null?void 0:t.results.map(s=>({...s,sku:s.sellerSku,imageSrc:s.imageUrl,label:s.asin,value:s.id.toString(),market:"a",searchString:s.title,href:`https://amazon.com/dp/${s.asin}`})))||[]}},q=({onChange:e,value:t,className:s,...r})=>{const{t:c}=k(),[l,a,m,P]=d(o=>[o.options.renderControl,o.options.clearOnClickSelected,o.options.clearOptionText,o.setTerm]),{productsSelectOptions:p}=d($),S=l?{renderValue:o=>n.jsx(z,{children:l})}:{},h=i.useMemo(()=>t&&!p.some(o=>o.value===(t==null?void 0:t.value))?[...p,t]:p,[p,t]),x=i.useCallback(o=>e(o||(a?null:t)),[e,a,t]),O=i.useMemo(()=>m||c("common.none"),[c,m]);return n.jsx(N,{$customRenderControl:!!l,className:s,hideArrow:!0,dropdownPlacement:"bottom-end",appendTo:document.body,autocomplete:!0,onSearch:P,value:t,options:h,onChange:x,placeholder:O,clearOption:m,...S,...r,getBlocks:o=>[{text:n.jsxs(B,{children:[n.jsx(D,{children:o.asin}),n.jsx(E,{children:"•"}),n.jsx(M,{children:o.sku})]})}]})},E=u.span`
  color: ${({theme:e})=>e.systemColors.grey600};
  font-size: 6px;
  padding-left: ${({theme:e})=>e.spacing.sp4};
`,B=u.div`
  display: flex;
  flex-wrap: wrap;
`,D=u.div``,M=u.div``,N=u(U)`
  ${({$customRenderControl:e})=>e&&b`
      ${f.Control} {
        outline: unset;
        border: unset;
        margin: 0;
        padding: 0;
      }

      ${f.Dropdown} {
        border: unset;
      }
    `}
`,z=u.div`
  margin-left: auto;
`,G=()=>{const e=d(a=>a.params),t=d(a=>a.term),[s,r]=d(a=>[a.productsRequest.action,a.productsRequest.abort]),c=R(s,500),l=i.useMemo(()=>e.marketplace?JSON.stringify({dependencies:e,term:t}):"",[e,t]);i.useEffect(()=>(c(),()=>{r()}),[r,c,l])},I=()=>(G(),null),W=e=>{const t=d(s=>s.setParams);i.useEffect(()=>t(e),[e,t])},_=({params:e})=>(W(e),null),A=e=>{const t=d(s=>s.updateOptions);i.useEffect(()=>e&&t(e),[e,t])},F=e=>(A({...e}),null),H=({updateOptions:e,params:t,onChange:s,value:r,className:c,...l})=>n.jsxs(y,{children:[n.jsx(F,{...e}),n.jsx(_,{params:t}),n.jsx(I,{}),n.jsx(q,{onChange:s,value:r,className:c,...l})]});export{H as P,w as g};
//# sourceMappingURL=ProfitsProductSelect-F627cyUH.js.map
