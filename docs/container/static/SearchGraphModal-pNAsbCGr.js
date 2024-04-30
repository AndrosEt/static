import{w as E,j as t,u as i,K as R,r as p,q as B,a4 as M,bO as A,e as v,aM as P,$ as F,N as D,x as V,bX as _,c as x,M as q}from"./index-3WWdADc-.js";import{l as S}from"./lodash-EELJ18yH.js";import{C as N,a as W}from"./Competitors-H9fPwkOM.js";import{J as H,a0 as J}from"./Learn-iEpSD2rS.js";import{s as $,b as f,a as K,g as X}from"./store-YbjsNhqJ.js";import{c as Q,d as I}from"./dateRanges-u9-eXTpH.js";import{L as U}from"./useAutoPlay-ceAGW3YF.js";const Y="data:image/svg+xml,%3csvg%20width='214'%20height='46'%20viewBox='0%200%20214%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.125'%20y='0.5'%20width='33'%20height='45'%20rx='4.5'%20fill='%23D9E0E8'/%3e%3crect%20x='45.125'%20y='0.5'%20width='168.75'%20height='13.5'%20rx='4.5'%20fill='%23D9E0E8'/%3e%3crect%20x='45.125'%20y='23'%20width='66'%20height='10.5'%20rx='4.5'%20fill='%23D9E0E8'/%3e%3crect%20x='117.125'%20y='23'%20width='33'%20height='10.5'%20rx='4.5'%20fill='%23D9E0E8'/%3e%3crect%20x='156.125'%20y='23'%20width='18'%20height='10.5'%20rx='4.5'%20fill='%23D9E0E8'/%3e%3c/svg%3e",Z=({type:e})=>{const{t:s}=E();return t.jsxs(te,{children:[t.jsx(ee,{children:s(`editCompetitors.tabs.${e}.empty`)}),t.jsx(k,{}),t.jsx(k,{}),t.jsx(k,{})]})},k=i.img.attrs({src:Y})``,ee=i.div`
  ${R};
`,te=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sp16};
  grid-column: span 2;
  min-height: 40vh;
`,se=["suggestedCompetitors","myList","insightsDashboard"],oe=se.map(e=>({tabId:e})),ae={suggestedCompetitors:"listing-analyzer",myList:"my-list",insightsDashboard:"dashboard"},Ge=({marketplace:e,seller:s,mainAsin:a,asins:c,onChangeAsins:d,onValidateAsins:h,limit:l,tabs:r=oe,defaultTab:m="suggestedCompetitors",maxRenderTags:u,expanded:j})=>{const{t:b}=E(),[o,y]=p.useState(r.filter(n=>!n.disabled).map(n=>n.tabId).includes(m)?m:r.filter(n=>!n.disabled).map(n=>n.tabId)[0]);p.useEffect(()=>{const n=r.filter(g=>!g.disabled).map(g=>g.tabId);n.includes(o)||y(n[0])},[r,o]);const L=p.useMemo(()=>r.map(n=>({title:b(`editCompetitors.tabs.${n.tabId}.title`),...n})),[r,b]),[w,C]=p.useState({});p.useEffect(()=>()=>C({}),[]);const O=p.useCallback(n=>{const g=T({sources:w,source:o,asins:c,newAsins:n});C(g),d(n,g)},[c,d,w,o]),z=p.useCallback(n=>{const g=T({sources:w,source:"input",asins:c,newAsins:n});C(g),d(n,g)},[c,d,w]);return t.jsxs(ne,{children:[t.jsxs(ie,{children:[t.jsx(N,{marketplace:e,mainAsin:a,onChange:z,onAsinsValidation:h,maxTags:l,value:c,showProductIcon:!0,showInputError:!0,showToastError:!1,clearOnError:!1,maxRenderTags:u,expanded:j}),t.jsx(H,{clickable:!0,activeTab:o??void 0,tabs:L,onTabChange:y})]}),t.jsx(ce,{children:t.jsx(W,{type:ae[o],marketplace:e,asin:a,asins:c,setAsins:O,maxAsins:l,emptyState:t.jsx(Z,{type:o}),seller:s})})]})},T=({sources:e,source:s,newAsins:a,asins:c})=>{const d=S.difference(a,c),h=S.difference(c,a),l={...e};return d.length>0&&(l[s]=[...l[s]??[],...d]),h.length>0&&Object.keys(e).forEach(r=>{const m=e[r];m&&(l[r]=S.difference(m,h))}),l},ne=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp24};
  position: relative;
`,ie=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp24};
  position: sticky;
  background-color: ${({theme:e})=>e.systemColors.white};
  padding-bottom: 1px;
  top: 0;
  z-index: 2; // z-index 1 is competitor product image
`,ce=i.div`
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing.sp16};
  grid-template-columns: 1fr 1fr;
  padding: 0 1px;
`,G=()=>{const e=B(),a=M.parse(e.search).accountId;return a||void 0},re=p.lazy(()=>A(()=>import("./SearchVolumeGraph-y5YHIfhh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(e=>({default:e.SearchVolumeGraph}))),de=({status:e,keyword:s,searchData:a,days:c,onDaysChange:d})=>{const{t:h}=E(),l=Q(),r=G(),m=v(()=>$.actions.pending({keyword:s,accountId:r}),[s,r]);return t.jsxs(t.Fragment,{children:[t.jsxs(he,{children:[t.jsx(le,{children:t.jsx(P,{placeholder:"Range",options:l,size:"100",value:c,onChange:({value:u})=>d==null?void 0:d(u)})}),t.jsxs(me,{children:[t.jsx(ge,{}),h("searchGraph.legend")]})]}),t.jsx(p.Suspense,{fallback:be,children:t.jsx(pe,{children:t.jsx(J,{status:e,error:t.jsxs(ue,{children:[t.jsx(xe,{children:h("searchGraph.error")}),t.jsx(fe,{buttonType:"primary",size:"200",onClick:m,children:h("common.reload")})]}),children:t.jsx(re,{volume:a||[],height:400,days:c})})})})]})},le=i.div`
  div[role="option"] {
    white-space: nowrap;
  }
`,pe=i.div`
  min-height: 400px;
  position: relative;
`,he=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,me=i.div`
  ${F};
  color: ${({theme:e})=>e.systemColors.black};
  display: flex;
  align-items: center;
`,ge=i.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: ${({theme:e})=>`${e.spacing.sp4} ${e.spacing.sp4} ${e.spacing.sp4} 0`};
  background-color: #0a6fe8;
`,ue=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,xe=i.div``,fe=i(D)`
  margin-top: ${({theme:e})=>e.spacing.sp24};
`,ye=i.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,je=i(U)`
  width: 40px;
  height: 40px;
`,be=t.jsx(ye,{children:t.jsx(je,{})}),Le=({buttonProps:e={},...s})=>{const a=v(()=>f.open(s),[s.keyword,s.marketplace,s.onError]),c=()=>{s.onClick?s.onClick(()=>a()):a()};return t.jsx(we,{buttonType:"icon",size:"50",icon:t.jsx(V,{icon:_}),onClick:c,...e})},we=i(D)`
  margin: -4px 0;
`,ve=()=>{const{t:e}=E(),s=x(f.atom,o=>o.isOpen,[]),a=x(f.atom,o=>o.data.keyword,[]),c=x(f.atom,o=>o.data.phraseId,[]),d=x(f.atom,o=>o.data.isWalmart,[]),h=v(f.close),[l,r]=p.useState(I[2].days),m=v($.actions.pending);p.useEffect(()=>{s||r(I[2].days)},[s]);const u=x(K,o=>{var y;return X((y=o==null?void 0:o[a+`_isWalmart_${d||!1}`])==null?void 0:y.history,l)},[a,l]),j=G();p.useEffect(()=>{s&&m({keyword:a,phraseId:c,accountId:j})},[s,m,a,j,c]);const b=x($.atom,o=>u.length>0?"loaded":o.status,[u]);return t.jsx(q,{isOpen:s,onClose:h,size:"100",title:e("searchGraph.title",{keyword:a}),footer:t.jsx(Ee,{children:t.jsx(D,{size:"200",onClick:h,children:e("common.close")})}),children:t.jsx(de,{status:b,keyword:a,searchData:u,days:l,onDaysChange:r})})},Ee=i.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,Oe=ve;export{Z as E,de as S,Ge as a,Le as b,ve as c,Oe as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/SearchVolumeGraph-y5YHIfhh.js","static/index-3WWdADc-.js","static/AddToMyListDropdown-j1WBFoh0.js","static/NewRadio-r0LBmnQI.js","static/useAutoPlay-ceAGW3YF.js","static/middleware-lPGLX8nq.js","static/Learn-iEpSD2rS.js","static/use-latest.esm-1HraH-At.js","static/use-onclickoutside.browser.esm-FI41Hp9Z.js","static/MarketplaceSingleSelect-pf9DJN8d.js","static/ChartExport-xG8FR1Rx.js","static/LineGraphSkeleton-eFZ_jC28.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SearchGraphModal-pNAsbCGr.js.map
