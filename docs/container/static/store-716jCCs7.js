import{c as f,j as a,u as r,r as k,K as j,a as T,w as M,M as v,bz as L,N as h,g as b,$,S as D,ak as S,as as C,f as u,m as F,P as g}from"./index-tEWTe_cM.js";import{f as R,o as G,c as W,S as A}from"./AddToMyListDropdown-lgmjWp6o.js";import{a0 as B}from"./Learn-ZI4QJ8Ms.js";import{d as E}from"./use-onclickoutside.browser.esm-BisD5Fdu.js";import{d as K}from"./SearchGraphModal-8Lh4F5Sv.js";const z=({pullKeywords:e})=>{const t=f(R);return a.jsx(I,{children:t.map(s=>a.jsx(N,{pullKeywords:e,id:s.id,name:s.name,phrasesQty:s.phrasesQty},s.id))})},I=r.div`
  overflow-y: auto;
  min-height: 20px;
  max-height: 276px;
`,N=k.memo(({pullKeywords:e,id:t,name:s,phrasesQty:n})=>a.jsxs(w,{"data-id":t,"data-name":s,onClick:e,isRow:!0,children:[a.jsx(x,{children:s}),a.jsx(x,{children:n})]})),x=r.span`
  ${j};
`,w=r.div(({theme:e,isRow:t})=>T`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e.spacing.sp6} 0;
    cursor: ${t?"pointer":"initial"};
    transition: background-color 0.3s;

    > * {
      margin: 0;
    }

    &:hover {
      background-color: ${t?G.defaultGrey:"none"};
    }
  `),re=({marketplace:e,type:t="modal",isOpen:s,onClose:n,...m})=>{const{t:o}=M(),{foldersLength:c,handleSearchChange:l,loading:d,pullKeywordLoading:i,pullKeywords:p}=W({marketplaceType:e,type:t,...m,isOpen:s,onClose:n});return a.jsx(v,{size:"50",zIndex:1e4,isOpen:s,onClose:n,title:a.jsxs(Q,{children:[a.jsx(J,{children:o("addToMyList.addToFolder")}),a.jsx(P,{children:L[e]})]}),footer:a.jsxs(H,{children:[a.jsx(h,{buttonType:"tertiary",onClick:n,children:o("common.cancel")}),a.jsx(_,{target:"_blank",rel:"noreferrer",href:b("/keyword-manager/my-list",{}),onClick:n,children:a.jsx(h,{buttonType:"secondary",children:o("addToMyList.createNewFolder")})})]}),children:a.jsxs(U,{children:[a.jsx(B,{status:i}),a.jsx(q,{onChange:l,placeholder:o("common.search")}),a.jsxs(w,{children:[a.jsx(y,{children:o("addToMyList.folder")}),a.jsx(y,{children:o("addToMyList.keywords")})]}),!d||c>0?a.jsx(z,{pullKeywords:p}):a.jsx(A,{})]})})},_=r.a`
  text-decoration: none;
`,y=r.span`
  ${$};
`,q=r(S)`
  margin-bottom: ${({theme:e})=>e.spacing.sp12};
`,P=r.div`
  font-size: 26px;
  width: 28px;
`,Q=r.div`
  ${D};
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.systemColors.grey800};

  & > :first-child {
    margin-right: ${({theme:e})=>e.spacing.sp16};
  }
`,U=r.div``,H=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,J=r.div`
  white-space: nowrap;
  margin-right: ${({theme:e})=>e.spacing.sp16};
`,O=g+"/api/v1/keywords/search-volume/chart",V=g+"/api/v1/walmart/search-volume/chart",X=E("searchData",async({keyword:e,phraseId:t,accountId:s},{getState:n})=>{var d;const{marketplace:m,moduleId:o="xray",isWalmart:c}=n(Y.atom).data,l=(d=C("AM","TLDomain",m))==null?void 0:d.store;if(l||c){const i=c?await u({url:V,method:"GET",params:{phraseId:t,moduleId:o,accountId:s},withCredentials:0}):await u({url:O,method:"GET",params:{keyword:e,marketplace:l,moduleId:o,accountId:s},withCredentials:0});return{[(i.results.keyword||e)+`_isWalmart_${c||!1}`]:{history:[...i.results.history.map(p=>[p.timestamp*1e3,p.exact])],marketplace:i.results.marketplace,keyword:i.results.keyword}}}else throw new Error("Unknown marketplace")},{contentReducers:{fulfilled:(e,t)=>({...e.content,...t.result})}}),oe=F(X.atom,e=>e.content),ne=(e,t)=>(e||[]).filter(s=>t===0?!0:new Date(s[0]).getTime()>Date.now()-t*3600*1e3*24),Y=K("searchGraphModal",{keyword:"",marketplace:"com"});export{re as A,oe as a,Y as b,ne as g,X as s};
//# sourceMappingURL=store-716jCCs7.js.map
