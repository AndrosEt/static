import{d as B,b as $e,j as o,cz as ne,a as Y,u as c,N as f,r as h,bV as ro,ec as ao,f as v,g as P,P as Z,ag as re,e as w,c as L,m as so,av as Se,w as b,cc as io,cd as Yt,e7 as hn,bh as gn,S as ze,K as N,$ as he,aV as co,bd as lo,aF as V,x as xn,b0 as uo,c4 as mo,c5 as po,an as ho,bk as U,M as ie,O as yn,F as go,A as ge,G as Ve,ab as Cn,ak as _e,bp as xo,y as yo,bl as Co,a2 as le,Q as Me,cI as fn,U as fo,bc as ko,E as Ke,I as ae,C as bo,a3 as Qt,ck as wo,by as To,b8 as kn,a5 as vo,bI as jo}from"./index-VVIvRZBh.js";import{aA as de,a5 as oe,a6 as Te,y as Ao,aB as ve,aL as $o,t as Ie,J as en,Z as So,e as tn}from"./Learn-nfpDmxZa.js";import{d as Ue}from"./use-onclickoutside.browser.esm-zvXz2-0x.js";import{N as pe}from"./AddToMyListDropdown-EN5Nh0z5.js";import{r as Mo,f as nn,L as Po}from"./useAutoPlay-JZxKBgmm.js";import{u as Lo,a as Ze,U as Oo,g as Ro}from"./getUpsellData--u-Ov2M_.js";import{P as Fo,E as bn}from"./ExtendedProductSummary-2sO78FPU.js";import{l as Eo}from"./NewRadio-yIsEqEsT.js";import{p as wn,t as Wo,u as Tn}from"./middleware-KgP9JdWn.js";import{r as vn}from"./redirectToSubscribe-QIEYx7Fc.js";import{O as Ko}from"./OptimalData-ecRxYfRx.js";function Io(...[e,t,n]){const r=B(`${e}Modal/Action`,...n!=null&&n.reaction?[n.reaction]:[]),i={data:t,isOpen:!1};return{atom:$e(`${e}Modal/Atom`,i,d=>{var l;d(r,(m,p)=>p.type==="CLOSE"?{...m,isOpen:!1,data:n!=null&&n.doNotClearOnClose?m.data:t}:p.type==="OPEN"?{...m,isOpen:!0,...p.payload?{data:p.payload}:{data:t}}:p.type==="TOGGLE"?{...m,isOpen:!m.isOpen}:p.type==="SET_DATA"?{...m,data:p.payload}:m),(l=n==null?void 0:n.reducers)==null||l.call(n,d)}),open:(...d)=>r(t||t===null?{type:"OPEN",payload:d[0],meta:d[1]}:{type:"OPEN",payload:t,meta:d[0]}),close:(...d)=>r({type:"CLOSE",meta:d==null?void 0:d[0]}),action:r}}const ms=({buttonType:e,locked:t,disabled:n,icon:r,onLockedClick:i,onClick:a,...s})=>o.jsx(Bo,{icon:t?o.jsx(ne,{type:e,disabled:n}):r,onClick:t?i:a,disabled:n,buttonType:e,...s}),Go={primary:Y`
    &:hover,
    &:focus,
    &:focus-visible {
      ${ne.Wrapper} {
        color: ${e=>e.theme.systemColors.blue800};
      }
    }

    //State: pressed
    &:active {
      ${ne.Wrapper} {
        color: ${e=>e.theme.systemColors.blue900};
      }
    }
  `,secondary:Y`
    &:hover,
    &:focus,
    &:focus-visible {
      ${ne.Wrapper} {
        background-color: ${e=>e.theme.systemColors.blue800};
      }
    }

    //State: pressed
    &:active {
      ${ne.Wrapper} {
        background-color: ${e=>e.theme.systemColors.blue900};
      }
    }
  `},Bo=c(f)`
  ${e=>e.disabled?"":Go[e.buttonType]};

  ${ne.Wrapper} {
    margin-top: -2px;
    margin-bottom: -2px;
  }
`,ps=({children:e,content:t,...n})=>{const r=h.useDeferredValue(e);return t?o.jsx(ro,{content:t,...n,children:r}):o.jsx(o.Fragment,{children:r})},jn=({product:e,tooltipContent:t,marketplace:n,asin:r,tool:i,tooltipOptions:a,disableExtendedProductSummary:s,onChangeProductDetailsType:u,...d})=>o.jsx(ao,{tooltipContent:t??o.jsx(Fo,{asin:r||"",marketplace:n,defaultImageSrc:e==null?void 0:e.imageSrc,tool:i,disableExtendedProductSummary:s,onChangeProductDetailsType:u}),tooltipOptions:{interactive:!0,maxWidth:605,placement:"top-start",...a},product:e,...d}),hs=jn,An=async e=>v({url:P(`${de}/api/site/track-event`,{}),method:"POST",params:e,useSessionAccountId:!0}),He=()=>({sendSegmentEvent:An}),Je=async e=>v({url:P(`${Z}/api/v1/keywordtracker/products`,{}),method:"GET",params:e,withCredentials:0}),$n=({error:e,params:{notification:t}})=>{const n=re.getState().translation;n&&t.error(o.jsxs("div",{children:[o.jsx(oe,{children:n.t("addToKeywordTracker.notification.error.title")}),o.jsx(Te,{children:e||"Server error"})]}))},Ae=Ue("ktGetProduct",async({marketplace:e},{getState:t})=>{const{page:n,count:r,search:i}=t(Ln);return Je({marketplace:e,page:n,perPage:r,searchString:i})},{rejectedReaction:$n}),on={search:"",page:1,count:3,sortField:"id",sortDirection:"ASC"},Sn=B("ktAddSetSearch",({marketplace:e,notification:t},{dispatch:n})=>{n(Ae.actions.pending({marketplace:e,notification:t}))}),Mn=B("ktSetTableFilter",({marketplace:e,notification:t},{dispatch:n})=>{n(Ae.actions.pending({marketplace:e,notification:t}))}),Pn=B("resetTableFilter"),Ln=$e("ktTableFilter",on,e=>{e(Mn,(t,{filter:n})=>({...n,search:t.search})),e(Sn,(t,{search:n})=>({...t,page:1,search:n})),e(Pn,()=>on)}),Xe=B("setAddToKeyworTdrackerStep"),On=B("resetAddToKeyworTdrackerStep"),No=$e("addToKeywordTrackerStep",0,e=>{e(Xe,(t,n)=>n),e(On,()=>0)}),E=Io("addToKeywordTracker",{asin:"",marketplace:"",phrases:[],moduleId:"cerebro"},{reaction:({type:e},{dispatch:t})=>{e==="CLOSE"&&setTimeout(()=>{t(On())},100)}}),Do=()=>{const e=w(Pn),t=w(E.close);return{onClose:h.useCallback(()=>{t(),setTimeout(e,0)},[t,e])}},zo={"cerebro-historical":"Cerebro Export to Keyword Tracker button clicked","cerebro-walmart":"Cerebro Export to Keyword Tracker button clicked",cerebro:"Cerebro Export to Keyword Tracker button clicked","keywordresearch-walmart":"Magnet Export to Keyword Tracker button clicked",keywordresearch:"Magnet Export to Keyword Tracker button clicked"},Rn={"cerebro-historical":"Cerebro Exported to Keyword Tracker","cerebro-walmart":"Cerebro Exported to Keyword Tracker",cerebro:"Cerebro Exported to Keyword Tracker","keywordresearch-walmart":"Magnet Exported to Keyword Tracker",keywordresearch:"Magnet Exported to Keyword Tracker"},Vo={"cerebro-historical":"description","cerebro-walmart":"description",cerebro:"description",keywordresearch:"descriptionMagnet","keywordresearch-walmart":"descriptionMagnet","opportunity-finder":"descriptionCommon",blackbox:"descriptionCommon","blackbox-aba":"descriptionCommon","listing-builder":"descriptionCommon"},_o={"cerebro-historical":"Cerebro ASIN","cerebro-walmart":"Cerebro ASIN",cerebro:"Cerebro ASIN",keywordresearch:"Magnet","keywordresearch-walmart":"Magnet","opportunity-finder":"Elite Analytics",blackbox:"Black Box","blackbox-aba":"Black Box ABA","listing-builder":"Listing Builder"},Uo=async e=>v({url:P(`${Z}/keyword-tracker/validate-asin`,{}),params:e,method:"POST",withCredentials:0}),rn={status:"init",content:null},Fn=B("validateAsinPending"),En=B("validateAsinFulfilled"),Wn=B("validateAsinRejected"),Kn=B("resetValidateAsin"),In=$e("validateAsinAtom",rn,e=>{e(Fn,t=>({...t,status:"loading",content:null,error:void 0})),e(En,(t,n)=>({...t,status:"loaded",content:n,error:void 0})),e(Wn,(t,n)=>({...t,status:"error",content:null,error:n})),e(Kn,()=>rn)}),Gn=()=>{const e=w(Fn),t=w(En),n=w(Wn),{data:{marketplace:r}}=L(E.atom);return async i=>{try{const a={marketplace:r,asin:i,toolPlatform:r==="WALMART_US"?"walmart":"amazon"};e(a);const s=await Uo(a);if(t(s),!s.asin)throw new Error("Wrong asin");return!!s.asin}catch{return n("error"),!1}}},Zo=async e=>v({url:P(`${Z}/api/v1/keywordtracker/keywords`,{}),method:"POST",params:{...e,specialChars:!0},withCredentials:0}),Ho=async e=>v({url:P(`${Z}/api/v1/keywordtracker/product`,{}),method:"POST",params:{...e,copyTrackedHistory:!0,specialChars:!0},withCredentials:0}),Bn=Ue("ktAddProduct",async({data:e})=>{var r,i;const t=await Je({searchString:e.asin,marketplace:e.marketplace,page:1,perPage:20}),n=(i=(r=t==null?void 0:t.results)==null?void 0:r.models[0])==null?void 0:i.id;return n!=null?Zo({productId:n,phrases:e.phrases,marketplace:e.marketplace,moduleId:e.moduleId}):Ho(e)},{fulfilledReaction:({params:{notification:e,onSuccess:t},result:n})=>{var i,a,s,u,d,l,m;const r=re.getState().translation;r&&((i=n.results)!=null&&i.saved&&(t==null||t((a=n.results)==null?void 0:a.saved),e.success(o.jsxs("div",{children:[o.jsx(oe,{children:r.t("addToKeywordTracker.notification.success.title",{count:(s=n.results)==null?void 0:s.saved})}),o.jsx(Te,{children:r.t("addToKeywordTracker.notification.success.text",{count:(u=n.results)==null?void 0:u.saved})})]}))),(d=n.results)!=null&&d.duplicates&&e.warning(o.jsxs("div",{children:[o.jsx(oe,{children:r.t("addToKeywordTracker.notification.duplicates.title",{count:(l=n.results)==null?void 0:l.duplicates})}),o.jsx(Te,{children:r.t("addToKeywordTracker.notification.duplicates.text",{count:(m=n.results)==null?void 0:m.duplicates})})]})))},rejectedReaction:({error:e,params:{notification:t},fetchError:n})=>{var i;const r=re.getState().translation;if(r){const a=(i=n==null?void 0:n.result)==null?void 0:i.errorCode;t.error(o.jsxs("div",{children:[o.jsx(oe,{children:r.t("addToKeywordTracker.notification.error.title")}),o.jsx(Te,{children:a?r.t(`addToKeywordTracker.notification.error.codes.${a}`):e||"Server error"})]}))}}}),Jo=so("addToKTMarketplaceSelector",E.atom,e=>Se(e.data.marketplace==="WALMART_US"?"WM":"AM","store",e.data.marketplace)),Xo=({notification:e})=>{const{t}=b(),{data:{asin:n,title:r,imageSrc:i,phrases:a,moduleId:s,marketplace:u,onSuccess:d}}=L(E.atom),{content:l,status:m}=L(In),p=L(Jo),g=_o[s],{register:T,control:x,handleSubmit:K,setValue:W,watch:H}=io({defaultValues:{asin:n,phrases:[],variations:!0}}),[I,y]=H(["asin","phrases"]);h.useEffect(()=>W("phrases",a),[a,W]);const k=w(E.close),{sendSegmentEvent:j}=He(),A=w(C=>{k();const M=Rn[s];return M&&j({eventName:M,eventProperties:{trackParentAndVariations:C.variations}}),Bn.actions.pending({data:{...C,marketplace:u,moduleId:s},notification:e,onSuccess:d})},[e,u,s]),$=K(A),S=Gn();return o.jsxs(o.Fragment,{children:[o.jsx(Yo,{children:t("addToKeywordTracker.modal.title")}),o.jsx(Qo,{children:t(`addToKeywordTracker.modal.${Vo[s]}`)}),o.jsxs(er,{onSubmit:$,children:[o.jsx(tr,{children:o.jsx(Yt,{name:"asin",control:x,render:({field:C})=>{const M=I?[I]:[],O=G=>{C.onChange(G.length>0?G[0].toLocaleUpperCase().replace("‎",""):void 0)};return o.jsx(qo,{...C,value:M,onChange:O,inputProps:{placeholder:I?"":t("history.asinSearchPlaceholder")},getTooltipContent:()=>o.jsx(cr,{children:o.jsx(hn,{market:p.platform,product:{asin:(l==null?void 0:l.asin)||n,title:(l==null?void 0:l.title)||r,imageSrc:(l==null?void 0:l.imageUrl)||i},blocks:[{text:(l==null?void 0:l.asin)||n}]})}),size:"100",findSuggestionsMode:!0,clearOnError:!0,addTagsOnPressKeys:[","," "],onSeparate:an,maxTags:1,validation:S,loading:m==="loading",error:m==="error"})}})}),o.jsx(nr,{children:o.jsx(Yt,{name:"phrases",control:x,render:({field:C})=>o.jsx(pe,{...C,inputProps:{placeholder:t("addToKeywordTracker.modal.placeholder")},size:"200",clearOnError:!0,addTagsOnPressKeys:[","," "],onSeparate:an,maxTags:1e3,renderBeforeTags:o.jsxs(or,{children:[o.jsx(ar,{}),o.jsx(rr,{children:t("addToKeywordTracker.modal.inputPlaceholderNew",{toolText:g})})]})})})}),o.jsx(sr,{children:o.jsx(gn,{...T("variations"),children:t("addToKeywordTracker.modal.checkbox")})}),o.jsxs(ir,{children:[o.jsx(f,{buttonType:"cancel",size:"200",onClick:k,type:"button",children:t("common.cancel")}),o.jsx(f,{buttonType:"primary",size:"200",disabled:y.length===0||!I,children:t("addToKeywordTracker.modal.startButton")})]})]})]})},an=e=>e.split(/[\x09 ,;\n]+/).map(t=>t.trim()).filter(t=>!!t).slice(0,1),qo=c(pe)`
  width: 285px;

  ${pe.Input} {
    width: 260px;
  }
`,Yo=c.div`
  ${ze};
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
`,Qo=c.div`
  ${N};
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,er=c.form``,tr=c.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,nr=c.div`
  ${pe.Wrapper} {
    padding: 0 8px 12px 8px;
  }

  ${pe.Tags} {
    width: 100%;
  }
`,or=c.div`
  width: 100%;
  display: flex;
  padding: 16px 4px 12px 4px;
`,rr=c.div`
  ${he};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,ar=c(Mo)`
  width: 15px;
  flex: 0 0 auto;
`,sr=c.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacing.sp8};
`,ir=c.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 1fr auto auto;

  & > :first-child {
    margin-right: auto;
  }

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }
`,cr=c.div`
  max-width: 383px;
`,lr=e=>{const t=new RegExp(" ","g");return e.replace(t," ")},dr=({notification:e})=>{const{t}=b();L(Ln,()=>null,[]);const{data:{marketplace:n}}=L(E.atom),{data:r,total:i,status:a}=L(Ae.atom,g=>{var T,x;return{data:((T=g.content)==null?void 0:T.results.models)||[],total:((x=g.content)==null?void 0:x.meta.totalCount)||0,status:g.status}},[]),s=hr({notification:e}),u=w(g=>Mn({filter:g,marketplace:n,notification:e}),[n,e]),d=w(Sn),l=w(Ae.actions.pending),p=co(g=>d({search:g.target.value,marketplace:n,notification:e}),800);return h.useEffect(()=>{n&&l({marketplace:n,notification:e})},[l,n,e]),o.jsxs(gr,{children:[o.jsxs(yr,{children:[o.jsxs(Cr,{children:[t("addToKeywordTracker.productsModal.title"),o.jsx(fr,{children:lo[V("store",n).domain]})]}),o.jsx(br,{onChange:p,rightElement:o.jsx(xn,{icon:uo})})]}),o.jsx(xr,{children:t("addToKeywordTracker.productsModal.description")}),o.jsx(kr,{children:o.jsx(Ao,{name:"addToKTProducts",columns:s,data:r,total:i,status:a,behavior:mr,onFilter:u,filter:ur,selected:pr})})]})},ur={haveInitial:!1},mr={itemsPerPage:[3,10,50],noPagination:!0},pr={haveCheckbox:!1},hr=({notification:e})=>{const{t}=b(),{data:{phrases:n,marketplace:r,moduleId:i,onSuccess:a}}=L(E.atom),s=w(E.close),{sendSegmentEvent:u}=He(),d=w(l=>{s();const m=Rn[i];return m&&u({eventName:m,eventProperties:{trackParentAndVariations:!0}}),Bn.actions.pending({data:{asin:l,marketplace:r,phrases:n,variations:!0,moduleId:i},notification:e,onSuccess:a})},[e]);return h.useMemo(()=>[{field:"product",title:t("addToKeywordTracker.productsModal.table.product"),render:l=>{var x;const m=l.asin||"",p=(x=l.marketplace)==null?void 0:x.includes("WALMART"),g=t("copyButton.copy",{name:p?"Walmart Id":"ASIN"}),T=t("copyButton.copied",{name:p?"Walmart Id":"ASIN"});return o.jsx(sn,{onClick:()=>d(l.asin),children:o.jsx(hn,{product:{title:lr(l.title||""),imageSrc:l.imageUrl||"",href:ve(p?"WM":"AM",l.marketplace,l.asin)},market:p?"w":"a",marketplace:l.marketplace,blocks:[{text:`${m}`,copyContent:m,beforeCopyContent:o.jsx(mo,{label:g}),afterCopyContent:o.jsx(po,{label:T})}],tooltipOptions:{appendTo:document.body}})})}},{field:"trackedKeywords",title:t("addToKeywordTracker.productsModal.table.trackedKeywords"),width:137,render:l=>o.jsx(sn,{onClick:()=>d(l.asin),children:l.keywords})}],[d,t])},gr=c.div``,xr=c.div`
  ${N};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,yr=c.div`
  ${ze};
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Cr=c.div`
  display: flex;
  align-items: center;
`,fr=c.div`
  display: flex;
  width: 27px;
  margin-left: ${({theme:e})=>e.spacing.sp16};
`,kr=c.div`
  max-height: 402px;
  overflow: scroll;
  max-width: 600px;
  margin-right: -12px;
`,sn=c.div`
  cursor: pointer;
  margin: -8px -16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex: 1;
  align-self: stretch;
`,br=c(ho)`
  max-width: 188px;
  margin-left: ${({theme:e})=>e.spacing.sp16};
`,wr=Ue("checkProductsRequest",async({marketplace:e})=>Je({marketplace:e,page:1,perPage:1,searchString:""}),{fulfilledReaction:({result:e},{dispatch:t})=>{t(Xe(e.meta.totalCount!==0?1:2))},rejectedReaction:$n}),Tr=({notification:e})=>{const{isOpen:t,data:{marketplace:n}}=L(E.atom),r=w(()=>t?wr.actions.pending({marketplace:n,notification:e}):void 0,[n,e,t]);return h.useEffect(()=>{r()},[r]),o.jsxs(vr,{children:[o.jsxs(jr,{children:[o.jsx(U,{$size:"small"}),o.jsx(U,{$size:"small"})]}),o.jsx(Ar,{$size:"large"}),o.jsx($r,{}),o.jsxs(Sr,{children:[o.jsx(Re,{}),o.jsxs(Nn,{children:[o.jsx(Re,{}),o.jsx(Re,{})]})]})]})},vr=c.div``,jr=c.div`
  ${N};
  display: flex;
  flex-direction: column;

  & > :not(:first-child) {
    margin-top: ${({theme:e})=>e.spacing.sp4};
  }
`,Ar=c(U)`
  margin-top: ${({theme:e})=>e.spacing.sp16};
  min-height: 100px;
`,$r=c(U)`
  max-width: 256px;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-left: auto;
`,Nn=c.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }
`,Sr=c(Nn)`
  margin-top: ${({theme:e})=>e.spacing.sp32};
  justify-content: space-between;
`,Re=c(U)`
  min-height: 40px;
  width: 84px;
`,Mr=({step:e,notification:t})=>h.useMemo(()=>({0:o.jsx(Tr,{notification:t}),1:o.jsx(dr,{notification:t}),2:o.jsx(Xo,{notification:t})}),[t])[e],Pr=()=>{const{t:e}=b(),t=w(()=>Xe(2),[]);return o.jsx(Lr,{children:o.jsx(f,{buttonType:"secondary",size:"200",onClick:t,children:e("addToKeywordTracker.productsModal.trackNewProduct")})})},Lr=c.div`
  display: flex;
  justify-content: flex-end;
`,Or=({step:e})=>h.useMemo(()=>({1:o.jsx(Pr,{})}),[])[e],Rr=({notification:e})=>{const t=L(No),{isOpen:n}=L(E.atom),r=Mr({step:t,notification:e}),i=Or({step:t}),{onClose:a}=Do();return o.jsx(Fr,{children:o.jsx(ie,{size:"100",zIndex:1e4,isOpen:n,onClose:a,footer:i,children:r})})},Fr=c.div`
  display: contents;

  ${ie.Footer} {
    border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
  }
`,gs=({data:e,moduleId:t,CustomButton:n,notification:r,onSuccess:i})=>{const{t:a}=b(),{sendSegmentEvent:s}=He();L(In);const{isOpen:u,data:{asin:d}}=L(E.atom),l=w(Kn),m=w(()=>{const g=zo[t];return g&&s({eventName:g,eventProperties:void 0}),E.open({...e,asin:e.asin?e.asin:"",title:e.title,imageSrc:e.imageSrc,onSuccess:i})},[e,t]),p=Gn();return h.useEffect(()=>{u&&d&&p(d),u||l()},[d,u]),o.jsxs(o.Fragment,{children:[n?o.jsx(n,{onClick:m}):o.jsx(f,{onClick:m,buttonType:"secondary",size:"100",children:a("addToKeywordTracker.button")}),o.jsx(Rr,{notification:r})]})},xs=({item:e,isWalmart:t,asins:n,onClick:r,maxLength:i,marketType:a,tool:s})=>{var m;const u=h.useMemo(()=>n.indexOf(e.id)!==-1,[n,e.id]),d=h.useMemo(()=>u||i>n.length,[n.length,i,u]),l=Lo({data:{marketplace:a,asin:(e==null?void 0:e.id)||""}});return o.jsx(Er,{onClick:d?r:void 0,padding:"small",$active:u,$selectable:d,children:o.jsx(bn,{market:t?"WALMART":"AMAZON",product:{...e,asin:e.id},renderBlocks:l,marketplace:((m=Se(a!=null&&a.startsWith("amazon")?"AM":"WM","domain",a))==null?void 0:m.store)||"",tool:s||"listingAnalyzer"},e.id)})},Er=c(yn)`
  min-width: 0;
  ${({$active:e})=>e&&Y`
      border-color: ${t=>t.theme.systemColors.blue600};
      box-shadow: inset 0 0 0 1px ${t=>t.theme.systemColors.blue600};
    `}
  ${({$selectable:e})=>e&&Y`
      cursor: pointer;
    `}
`;var ue;(function(e){const t={cerebro:de+"/api/cerebro/v1/amazon/competitors",walmart:de+"/api/cerebro/v1/walmart/competitors-action",other:de+"/api/v1/amazon/competitors",dashboard:$o+"/api/v1/competitors"};e.getAmazon=async n=>{const{type:r,...i}=n,a=r==="cerebro"?t.cerebro:t.other,{data:s,...u}=await v({url:P(a,{}),method:"POST",params:i,useSessionAccountId:!0}),d=V("store",i.marketplace).domain;return{data:(s==null?void 0:s.map(l=>({href:ve("AM",i.marketplace,l.productId),title:l.title,imageSrc:l.imageUrl,id:l.productId,marketType:d})))??[],...u}},e.getWalmart=async n=>{const{data:r,...i}=await v({url:P(t.walmart,{}),method:"POST",params:n,useSessionAccountId:!0}),a=V("store",n.marketplace).domain;return{data:(r==null?void 0:r.map(s=>({href:ve("WM",n.marketplace,s.productId),title:s.title,imageSrc:s.imageUrl,id:s.productId,marketType:a})))??[],...i}},e.getDashboard=async n=>{const{results:r,...i}=await v({url:P(t.dashboard,{...n},{arrayFormat:"bracket"}),method:"GET",params:n,useSessionAccountId:!0});return{...i,data:r.map(a=>({href:ve("AM",n.marketplace,a.asin),title:a.title,imageSrc:a.imageUrl,id:a.asin,asin:a.asin,marketType:V("store",a.marketplace).domain}))}}})(ue||(ue={}));var Ge;(function(e){const t=Z+"/api/v1/product/my-list";e.get=async n=>{try{const{data:r}=await v({url:P(t,{pageSize:100}),method:"GET",params:{marketplace:n.marketplace},useSessionAccountId:!0}),i=V("store",n.marketplace).domain;return{data:Object.values(r).map(a=>({href:Ze(n.marketplace,a.asin),title:a.title,imageSrc:a.imageUrl,id:a.asin,marketType:i})),errorCode:NaN,errors:{},message:""}}catch(r){const{message:i,responseStatus:a,result:s}=r;throw new go(i,a,{data:[],errorCode:(s==null?void 0:s.code)||NaN,errors:{},message:(s==null?void 0:s.message)||""})}}})(Ge||(Ge={}));const qe=ge(()=>({competitors:{data:[]},modal:null})),Wr=Ve(qe,"competitors",async e=>{const t=V("store",e.marketplace).platform;if(e.type==="my-list")return await Ge.get({marketplace:e.marketplace});if(e.type==="dashboard")return e.seller!=null?await ue.getDashboard({marketplace:e.marketplace,seller:e.seller,asin:e.productId}):null;if(t==="AMAZON")return await ue.getAmazon({marketplace:e.marketplace,productId:e.productId,type:e.type});if(t==="WALMART")return await ue.getWalmart({marketplace:e.marketplace,productId:e.productId})},{initialStatus:"loading",rejected:({fetchError:e})=>{var n,r;const t=(n=re.getState().translation)==null?void 0:n.t;if(t){const i=t(`errorCodes.${(r=e==null?void 0:e.result)==null?void 0:r.errorCode}`)||t(`errors.common.${e==null?void 0:e.responseStatus}`)||t("errorCodes.unknown");Ie.error(i)}}}),ys=Cn(qe,"modal",{reaction:({type:e,payload:t})=>{e==="OPEN"&&t&&Wr.action({marketplace:t.marketplace,productId:t.productId,type:t.type})}}),Cs=Eo(qe),Ye=ge()(wn((e,t)=>({top10RankedProductsForKeyword:!0,asinDetails:!0}),{name:"UIExtraTableSettings"})),Kr=_e(Ye,"top10RankedProductsForKeyword"),Ir=_e(Ye,"asinDetails"),fs=({showTop10RankedProductsForKeyword:e,showAsinDetails:t})=>{const{t:n}=b(),{top10RankedProductsForKeyword:r,asinDetails:i}=Ye();return o.jsxs(o.Fragment,{children:[o.jsxs(Gr,{children:[n("extraTableSettings.title"),o.jsx(xo,{content:n("extraTableSettings.titleTooltip"),colorType:"light"})]}),o.jsxs(Br,{children:[e&&o.jsx(cn,{checked:r,onChange:a=>Kr.set(a.target.checked),children:n("extraTableSettings.top10RankedProductsForKeyword")}),t&&o.jsx(cn,{checked:i,onChange:a=>Ir.set(a.target.checked),children:n("extraTableSettings.asinDetails")})]})]})},Gr=c.p`
  ${yo};
  color: ${({theme:e})=>e.systemColors.black};
  padding-bottom: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp24};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Br=c.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp12};
`,cn=c(gn)`
  align-items: center;
`,Nr=async e=>{const t=await v({method:"GET",url:P(Wo,{...e,advancedView:1}),withCredentials:0,useSessionAccountId:!0});return Object.keys(t.data).map(n=>({...t.data[n],asin:n}))},Dr="UI_TOP10_PRODUCTS_FOR_KEYWORD",Q=ge()(wn((e,t)=>({advancedView:!0,productData:{}}),{name:Dr,partialize:e=>({advancedView:e.advancedView})})),Pe=Co(Q,"productData",async({key:e,params:t})=>{const n=t.phraseId;return Nr({...n&&n>0?{phraseId:n.toString()}:{keyword:e},marketplaceId:V("store",t.marketplace).id})},{rejected:({fetchError:e})=>{if((e==null?void 0:e.responseStatus)===429){const t=re.getState().translation;Ie.message(o.jsx(oe,{children:t==null?void 0:t.t("keywordWithTop10Products.error")}))}},fulfilled:({result:e})=>{if((e==null?void 0:e.length)===0){const t=re.getState().translation;Ie.message(o.jsx(oe,{children:t==null?void 0:t.t("keywordWithTop10Products.noProducts")}))}}}),zr=_e(Q,"advancedView"),Dn=e=>{var r;const t=(r=Pe(i=>i[e]))==null?void 0:r.status,n=Q(i=>i.productData[e]);return h.useMemo(()=>t==="error"||t==="loaded"&&(n==null?void 0:n.length)===0,[n,t])},Vr=({keyword:e,marketplace:t,tool:n,disableExtendedProductSummary:r,onChangeProductDetailsType:i})=>{const a=Q(d=>d.productData[e]),s=Pe(d=>{var l;return(l=d[e])==null?void 0:l.status}),{platform:u}=V("store",t);return o.jsx(Jr,{children:s==="loading"?o.jsx(Ur,{}):a==null?void 0:a.map((d,l)=>o.jsxs(zn,{children:[o.jsxs(Vn,{children:[l+1,"."]}),o.jsx(bn,{imageSize:"50",imageTooltipOptions:{appendTo:"parent"},market:u,marketplace:t,tool:n,titleLineClamp:1,product:{title:d.title,asin:d.asin,imageSrc:d.imageUrl,href:Ze(t,d.asin)},renderBlocks:o.jsx(_r,{product:d,marketplace:t}),disableExtendedProductSummary:r,onChangeProductDetailsType:i})]},l))})},_r=({product:e,marketplace:t})=>{const{t:n}=b(),{currency:r}=V("store",t);return o.jsxs(Zr,{children:[o.jsx(be,{children:(e==null?void 0:e.price)>=0?le({amount:r==="JPY"?e==null?void 0:e.price:(e==null?void 0:e.price)/100,currency:r}):"-"}),o.jsx(be,{children:n("keywordWithTop10Products.variations",{value:nn({value:e.variationCount})})}),o.jsx(be,{children:n("keywordWithTop10Products.reviews",{value:nn({value:e.reviewCount})})}),o.jsx(be,{children:n("keywordWithTop10Products.rating",{value:e.reviewsRating})})]})},Ur=()=>o.jsx(o.Fragment,{children:new Array(10).fill(void 0).map((e,t)=>o.jsxs(zn,{children:[o.jsxs(Vn,{children:[t+1,"."]}),o.jsxs(Hr,{children:[o.jsx(Fe,{$size:"large",$width:42,$height:42}),o.jsx(Fe,{$size:"medium",$width:340,$height:18}),o.jsx(Fe,{$size:"small",$width:260,$height:16})]})]},t))}),Zr=c.div`
  ${Me};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp4};
  margin-top: ${({theme:e})=>e.spacing.sp4};
  white-space: nowrap;
`,be=c.div`
  ${Me};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp4};

  &:not(:last-child):after {
    content: "·";
  }
`,Hr=c.div`
  display: grid;
  grid-template:
    "a b" 16px
    "a c" 16px / 40px 1fr;
  gap: ${({theme:e})=>e.spacing.sp8};

  ${U}:first-child {
    grid-area: a;
  }
`,zn=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Vn=c.div`
  ${he};
  width: ${({theme:e})=>e.spacing.sp20};
  text-align: right;
`,Fe=c(U)`
  height: ${({$height:e})=>e}px;
`,Jr=c.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 450px));
  gap: ${({theme:e})=>e.spacing.sp32};
`,Xr=({keyword:e,marketplace:t,tool:n,disableExtendedProductSummary:r,onChangeProductDetailsType:i})=>{const a=Q(fn(u=>u.productData[e])),s=Pe(u=>{var d;return(d=u[e])==null?void 0:d.status});return o.jsx(Yr,{children:s==="loading"?o.jsx(qr,{}):a==null?void 0:a.map((u,d)=>o.jsxs(Un,{children:[o.jsxs(_n,{children:[d+1,"."]}),o.jsx(jn,{size:"400",product:{imageSrc:u.imageUrl,href:Ze(t,u.asin)},marketplace:t,asin:u.asin,tool:n,tooltipOptions:{appendTo:"parent"},disableExtendedProductSummary:r,onChangeProductDetailsType:i})]},d))})},qr=()=>o.jsx(o.Fragment,{children:new Array(10).fill(void 0).map((e,t)=>o.jsxs(Un,{children:[o.jsxs(_n,{children:[t+1,"."]}),o.jsx(Qr,{$size:"large",$width:76,$height:96})]},t))}),Yr=c.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({theme:e})=>e.spacing.sp24};
`,_n=c.div`
  ${he};
  width: ${({theme:e})=>e.spacing.sp20};
  text-align: right;
`,Un=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Qr=c(U)`
  height: ${({$height:e})=>e}px;
`,ea=({keyword:e,phraseId:t,marketplace:n,tool:r,...i})=>{const{t:a}=b(),{sendSegmentEvent:s}=Tn({}),[u]=Q(l=>[l.advancedView]),d=Dn(e);return h.useEffect(()=>{Pe.action([{key:e,params:{marketplace:n,phraseId:t}}]),s({name:"Keyword Hover Product Viewed",properties:{tool:r,view:u?"advanced":"simple",display:"show"}}).then()},[e,n,t,s,r]),o.jsx(o.Fragment,{children:d?o.jsx(Zn,{keyword:e,tool:r,disableSegmentEvent:!0}):o.jsxs(na,{$advancedView:u,children:[o.jsxs(oa,{children:[o.jsx(ta,{children:a("keywordWithTop10Products.title",{keyword:e})}),o.jsx(ra,{checked:u,onChange:l=>zr.set(l.target.checked),children:a("keywordWithTop10Products.advancedView")})]}),u?o.jsx(Vr,{keyword:e,marketplace:n,tool:r,...i}):o.jsx(Xr,{tool:r,keyword:e,marketplace:n,...i})]})})},Zn=({keyword:e,tool:t,disableSegmentEvent:n})=>{const{sendSegmentEvent:r}=Tn({}),[i]=Q(a=>[a.advancedView]);return h.useEffect(()=>{n||r({name:"Keyword Hover Product Viewed",properties:{tool:t,view:i?"advanced":"simple",display:"hide"}}).then()},[n,e,r,t]),e},ta=c.div`
  ${fo}
`,na=c.div`
  width: ${({$advancedView:e})=>e?"930px":"640px"};
`,oa=c.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,ra=c(en)`
  ${en.Text} {
    white-space: nowrap;
  }
`,ks=({keywordNode:e,disableExtendedTooltip:t,keyword:n,tool:r,simpleTooltip:i,...a})=>{const{isOverflown:s,checkOverflown:u}=ko(),d=Dn(n);return o.jsx(o.Fragment,{children:t||i?o.jsx(Ke,{content:o.jsx(Zn,{keyword:n,tool:r,disableSegmentEvent:i}),disabled:s,children:o.jsx(ln,{onMouseEnter:u,children:e||n})}):o.jsx(Ke,{content:o.jsx(ea,{keyword:n,tool:r,...a}),interactive:!0,colorType:d?"dark":"light",maxWidth:964,children:o.jsx(ln,{children:e||n})})})},ln=c.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.systemColors.black};
`,Hn=({coupon:e,label:t,data:n})=>o.jsxs(aa,{children:[e&&o.jsx(sa,{dangerouslySetInnerHTML:{__html:e}}),t&&o.jsx(ca,{$small:!!e,$data:n,children:t}),(n==null?void 0:n.proration)&&o.jsx(ia,{children:n==null?void 0:n.proration})]}),aa=c.div`
  margin-top: ${e=>e.theme.spacing.sp16};
  gap: ${e=>e.theme.spacing.sp4};
`,sa=c.div`
  ${N};
  color: ${e=>e.theme.systemColors.black};
  text-align: center;

  span {
    font-weight: bold;
  }
`,ia=c.div`
  ${N};
  text-align: center;
  padding-top: ${e=>e.theme.spacing.sp16};
`,ca=c.div`
  ${N};
  text-align: center;
  margin-bottom: ${e=>{var t;return(t=e.$data)!=null&&t.proration?"0":"18px"}};

  ${e=>e.$small&&Y`
      ${Me};
      margin-bottom: ${t=>t.theme.spacing.sp32};
    `}
`,Jn="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116878)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M79.0841%2078.3335C91.9714%2065.4462%2091.9714%2044.5518%2079.0841%2031.6645C66.1968%2018.7772%2045.3024%2018.7772%2032.4151%2031.6645C19.5278%2044.5518%2019.5278%2065.4462%2032.4151%2078.3335C45.3024%2091.2208%2066.1968%2091.2208%2079.0841%2078.3335Z'%20fill='%236784A2'/%3e%3cpath%20d='M55.7478%2083.116C71.2759%2083.116%2083.8638%2070.5281%2083.8638%2055C83.8638%2039.472%2071.2759%2026.884%2055.7478%2026.884C40.2198%2026.884%2027.6318%2039.472%2027.6318%2055C27.6318%2070.5281%2040.2198%2083.116%2055.7478%2083.116Z'%20fill='%23F2F5F7'/%3e%3cpath%20d='M71.3458%2058.729L55.9459%2053.427L54.9229%2058.234L71.1589%2059.609C71.7639%2059.686%2071.9179%2058.905%2071.3458%2058.74V58.729Z'%20fill='%236784A2'/%3e%3cpath%20d='M55.7918%2059.62C57.8817%2059.62%2059.5758%2057.9258%2059.5758%2055.836C59.5758%2053.7462%2057.8817%2052.052%2055.7918%2052.052C53.702%2052.052%2052.0078%2053.7462%2052.0078%2055.836C52.0078%2057.9258%2053.702%2059.62%2055.7918%2059.62Z'%20fill='%23485E75'/%3e%3cpath%20d='M41.5248%2070.1912C40.5788%2071.2142%2038.9398%2071.1812%2038.0268%2070.1252C34.3968%2065.9012%2032.3618%2060.4782%2032.3618%2054.8792C32.3618%2048.6422%2034.7928%2042.7682%2039.2148%2038.3462C43.6368%2033.9242%2049.5108%2031.4932%2055.7478%2031.4932C61.9848%2031.4932%2067.8588%2033.9242%2072.2808%2038.3462C76.7028%2042.7682%2079.1338%2048.6422%2079.1338%2054.8792C79.1338%2060.2142%2077.3518%2065.2962%2074.0518%2069.4212C73.1718%2070.5212%2071.5438%2070.6312%2070.5538%2069.6412C69.7178%2068.8052%2069.6188%2067.4742%2070.3668%2066.5502C73.0178%2063.2392%2074.4588%2059.1692%2074.4588%2054.8902C74.4588%2049.9072%2072.5118%2045.2102%2068.9698%2041.6682C65.4278%2038.1262%2060.7308%2036.1792%2055.7478%2036.1792C50.7648%2036.1792%2046.0678%2038.1262%2042.5258%2041.6682C38.9838%2045.2102%2037.0368%2049.8962%2037.0368%2054.8902C37.0368%2059.3892%2038.6868%2063.7452%2041.6128%2067.1222C42.3828%2068.0132%2042.3278%2069.3442%2041.5248%2070.2022V70.1912Z'%20fill='%2333CC99'/%3e%3cpath%20d='M70.5651%2069.6302C69.7291%2068.7942%2069.6301%2067.4632%2070.3781%2066.5392C73.0291%2063.2282%2074.4701%2059.1582%2074.4701%2054.8792C74.4701%2049.8962%2072.5231%2045.1992%2068.9811%2041.6572C65.4391%2038.1152%2060.7421%2036.1682%2055.7591%2036.1682C50.7761%2036.1682%2046.0791%2038.1152%2042.5371%2041.6572L39.2261%2038.3462C43.6481%2033.9242%2049.5221%2031.4932%2055.7591%2031.4932C61.9961%2031.4932%2067.8701%2033.9242%2072.2921%2038.3462C76.7141%2042.7682%2079.1451%2048.6422%2079.1451%2054.8792C79.1451%2060.2142%2077.3631%2065.2962%2074.0631%2069.4212C73.1831%2070.5212%2071.5551%2070.6312%2070.5651%2069.6412V69.6302Z'%20fill='%23EFCF1A'/%3e%3cpath%20d='M70.565%2069.6299C69.729%2068.7939%2069.63%2067.4629%2070.378%2066.5389C73.029%2063.2279%2074.47%2059.1579%2074.47%2054.8789C74.47%2049.8959%2072.523%2045.1989%2068.981%2041.6569L72.292%2038.3459C76.714%2042.7679%2079.145%2048.6419%2079.145%2054.8789C79.145%2060.2139%2077.363%2065.2959%2074.063%2069.4209C73.183%2070.5209%2071.555%2070.6309%2070.565%2069.6409V69.6299Z'%20fill='%23F64F45'/%3e%3cpath%20d='M55.7478%2077.8801C56.8231%2077.8801%2057.6948%2077.0084%2057.6948%2075.9331C57.6948%2074.8578%2056.8231%2073.9861%2055.7478%2073.9861C54.6725%2073.9861%2053.8008%2074.8578%2053.8008%2075.9331C53.8008%2077.0084%2054.6725%2077.8801%2055.7478%2077.8801Z'%20fill='%236784A2'/%3e%3cpath%20d='M63.9319%2076.164C65.0072%2076.164%2065.8789%2075.2923%2065.8789%2074.217C65.8789%2073.1417%2065.0072%2072.27%2063.9319%2072.27C62.8566%2072.27%2061.9849%2073.1417%2061.9849%2074.217C61.9849%2075.2923%2062.8566%2076.164%2063.9319%2076.164Z'%20fill='%236784A2'/%3e%3cpath%20d='M47.5642%2076.1311C48.6395%2076.1311%2049.5112%2075.2594%2049.5112%2074.1841C49.5112%2073.1088%2048.6395%2072.2371%2047.5642%2072.2371C46.4889%2072.2371%2045.6172%2073.1088%2045.6172%2074.1841C45.6172%2075.2594%2046.4889%2076.1311%2047.5642%2076.1311Z'%20fill='%236784A2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116878'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",dn=({data:e,modalProps:t,footerJustifyContent:n,onAccept:r,onDecline:i,queryStringParameters:a,coupon:s,type:u})=>{const{t:d}=b(),l=u==="postPurchaseModal",m=a!=null&&a.source?`&source=${a==null?void 0:a.source}`:"",p=`${Z}/subscribe?trigger=upsellModalPricingPageCta${m}`,g=s?e==null?void 0:e.footer.labelWithCoupon:e==null?void 0:e.footer.label;return o.jsx(ie,{...t,size:"100",titleAlign:"center",title:o.jsxs(o.Fragment,{children:[(e==null?void 0:e.hasHeadingPicture)&&o.jsx(da,{src:Jn}),o.jsx(ua,{$isPostPurchase:l,children:e==null?void 0:e.title})]}),subtitle:o.jsx(ma,{children:e==null?void 0:e.subtitle}),footer:o.jsx(o.Fragment,{children:e&&o.jsxs(ha,{$isPostPurchase:l,children:[o.jsxs(la,{$footerJustifyContent:n,children:[o.jsx(f,{buttonType:"secondary",size:"200",onClick:i,children:e.footer.declineButton}),o.jsx(f,{buttonType:"primary","data-testid":"acceptButtonOptimal",size:"200",onClick:()=>r==null?void 0:r({trigger:"upsellModalUpgradeButton"}),children:e.footer.acceptButton})]}),!l&&o.jsxs(ga,{children:[o.jsx(xa,{children:d("upsellModal.moreDetails")}),o.jsx(ya,{href:p,children:d("upsellModal.pricingPage")})]})]})}),children:e&&o.jsxs(pa,{children:[o.jsx(Ko,{plans:e.plans,features:e.features,featuresTitle:e.featuresTitle,tableOnMobile:!0,enableToggle:!0}),o.jsx(Hn,{label:g,coupon:s,data:e})]})})},la=c.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$footerJustifyContent?e.$footerJustifyContent:"center"};
  gap: ${e=>e.theme.spacing.sp16};

  & > ${f} {
    margin: 0 !important;
  }

  ${ae.mobileBefore} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    gap: ${e=>e.theme.spacing.sp16};
  }
`,da=c.img`
  margin-bottom: ${e=>e.theme.spacing.sp16};
`,ua=c.div`
  ${ze};

  ${e=>e.$isPostPurchase&&Y`
      padding-bottom: ${t=>t.theme.spacing.sp4};
    `}
`,ma=c.div`
  ${N};
  margin-top: ${e=>e.theme.spacing.sp4};
`,pa=c.div`
  max-width: calc(100% - 1px);
  padding: ${e=>e.theme.spacing.sp8};
`,ha=c.div`
  padding: ${e=>`0 ${e.theme.spacing.sp8}`};

  ${e=>e.$isPostPurchase&&Y`
      padding-bottom: ${t=>t.theme.spacing.sp8};
    `}
`,ga=c.div`
  text-align: center;
  margin-top: ${e=>e.theme.spacing.sp16};
`,xa=c.span`
  ${Me};
  margin-right: ${e=>e.theme.spacing.sp4};
`,ya=c.a`
  ${he};
  color: ${e=>e.theme.systemColors.blue600};
  text-decoration: none;

  &:hover {
    color: ${e=>e.theme.systemColors.blue700};
  }
`,Ca="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116925)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M74.8881%2049.5549H35.0131C34.2902%2049.5549%2033.7041%2050.141%2033.7041%2050.8639V80.1899C33.7041%2080.9129%2034.2902%2081.4989%2035.0131%2081.4989H74.8881C75.611%2081.4989%2076.1971%2080.9129%2076.1971%2080.1899V50.8639C76.1971%2050.141%2075.611%2049.5549%2074.8881%2049.5549Z'%20fill='%23EDCD1C'/%3e%3cpath%20d='M41.7561%2049.555V34.914C41.7561%2029.854%2045.8811%2025.729%2050.9411%2025.729H59.0151C64.0751%2025.729%2068.2001%2029.854%2068.2001%2034.914V36.432C68.2001%2036.652%2068.0241%2036.828%2067.8041%2036.828H67.5071V39.93H67.9691C68.1011%2039.93%2068.2001%2040.04%2068.2001%2040.161V40.491C68.2001%2041.459%2067.4081%2042.251%2066.4401%2042.251H65.4391C64.4711%2042.251%2063.6791%2041.459%2063.6791%2040.491V40.161C63.6791%2040.029%2063.7891%2039.93%2063.9101%2039.93H64.4051V36.828H64.1631C63.8441%2036.828%2063.6681%2036.652%2063.6681%2036.432V34.914C63.6681%2032.34%2061.5781%2030.25%2059.0041%2030.25H50.9301C48.3561%2030.25%2046.2661%2032.34%2046.2661%2034.914V49.544H41.7451L41.7561%2049.555Z'%20fill='%23A6B7C9'/%3e%3cpath%20d='M59.4769%2061.017C59.4769%2058.366%2057.1779%2056.243%2054.4719%2056.551C52.4699%2056.771%2050.8199%2058.355%2050.5339%2060.357C50.2699%2062.194%2051.1169%2063.855%2052.5029%2064.779C52.9319%2065.065%2053.1739%2065.571%2053.0859%2066.077L52.0409%2072.347C51.9639%2072.82%2052.3269%2073.249%2052.8109%2073.249H57.1449C57.6289%2073.249%2057.9919%2072.82%2057.9149%2072.347L56.8699%2066.077C56.7819%2065.56%2057.0239%2065.065%2057.4529%2064.779C58.6739%2063.976%2059.4769%2062.59%2059.4769%2061.028V61.017Z'%20fill='%23485E75'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116925'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fa="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116902)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M62.1939%2085.5912L63.5249%2080.7072C63.7229%2079.9812%2063.6789%2079.2332%2063.4039%2078.5512L56.0889%2060.5662C58.7069%2057.5302%2059.5649%2053.1742%2057.9589%2049.2032C55.6599%2043.5492%2049.2249%2040.8322%2043.5709%2043.1312C37.9169%2045.4302%2035.1999%2051.8652%2037.4989%2057.5192C39.1159%2061.4902%2042.7679%2063.9982%2046.7609%2064.3502L48.0259%2067.4522L50.8529%2068.6512L49.6539%2071.4782L49.8189%2071.8852L52.6459%2073.0842L51.4469%2075.9112L51.6119%2076.3182L54.4389%2077.5172L53.2399%2080.3442L54.0539%2082.3572C54.3289%2083.0282%2054.8239%2083.6002%2055.4729%2083.9852L59.8289%2086.5592C60.6979%2087.0762%2061.8969%2086.5812%2062.1719%2085.6132L62.1939%2085.5912Z'%20fill='%23A4B5C7'/%3e%3cpath%20d='M59.6422%2076.7522L54.7215%2064.646C54.6002%2064.3478%2054.2602%2064.2042%2053.9619%2064.3255L53.5237%2064.5036C53.2254%2064.6248%2053.0819%2064.9649%2053.2031%2065.2632L58.1238%2077.3694C58.2451%2077.6677%2058.5852%2077.8112%2058.8835%2077.6899L59.3216%2077.5118C59.6199%2077.3906%2059.7634%2077.0505%2059.6422%2076.7522Z'%20fill='%236783A0'/%3e%3cpath%20d='M48.6529%2051.2713C47.8169%2052.4483%2046.1999%2052.7233%2045.0229%2051.8873C43.8459%2051.0513%2043.5709%2049.4343%2044.4069%2048.2573C45.2429%2047.0803%2046.8599%2046.8053%2048.0369%2047.6413C49.2139%2048.4773%2049.4889%2050.0943%2048.6529%2051.2713Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M86.8446%2068.8821L85.3486%2064.0531C85.1286%2063.3381%2084.6886%2062.7221%2084.0946%2062.2931L68.2656%2051.0401C68.8376%2047.0691%2067.2316%2042.9331%2063.7446%2040.4581C58.7726%2036.9271%2051.8756%2038.0931%2048.3446%2043.0651C44.8136%2048.0371%2045.9796%2054.9341%2050.9516%2058.4651C54.4386%2060.9511%2058.8826%2061.1051%2062.4356%2059.2571L65.1636%2061.1931L68.1886%2060.6761L68.7056%2063.7011L69.0576%2063.9541L72.0826%2063.4371L72.5996%2066.4621L72.9516%2066.7151L75.9766%2066.1981L76.4936%2069.2231L78.2646%2070.4771C78.8586%2070.8951%2079.5846%2071.1151%2080.3326%2071.0931L85.3926%2070.9171C86.4046%2070.8841%2087.1526%2069.8281%2086.8556%2068.8601L86.8446%2068.8821Z'%20fill='%23EDCD1C'/%3e%3cpath%20d='M79.9501%2062.7967L69.298%2055.2266C69.0355%2055.0401%2068.6715%2055.1017%2068.485%2055.3641L68.211%2055.7497C68.0245%2056.0122%2068.0861%2056.3761%2068.3485%2056.5626L79.0006%2064.1327C79.2631%2064.3192%2079.627%2064.2576%2079.8136%2063.9952L80.0876%2063.6096C80.2741%2063.3472%2080.2125%2062.9832%2079.9501%2062.7967Z'%20fill='%23B39A0D'/%3e%3cpath%20d='M56.0777%2048.6751C55.2417%2049.8521%2053.6247%2050.1271%2052.4477%2049.2911C51.2707%2048.4551%2050.9957%2046.8381%2051.8317%2045.6611C52.6677%2044.4841%2054.2847%2044.2091%2055.4617%2045.0451C56.6387%2045.8811%2056.9137%2047.4981%2056.0777%2048.6751Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M36.8388%2051.5901C37.0588%2050.2371%2037.5428%2048.9391%2038.2358%2047.7621C36.3328%2046.5301%2034.8918%2044.7811%2034.0338%2042.7021C32.9228%2039.9741%2032.9448%2036.9711%2034.0998%2034.2431C35.2438%2031.5151%2037.3888%2029.4031%2040.1168%2028.2921C41.4478%2027.7531%2042.8448%2027.4781%2044.2638%2027.4781C48.7958%2027.4781%2052.8218%2030.1841%2054.5268%2034.3751C55.6928%2037.2351%2055.5498%2040.4141%2054.3178%2043.1311C54.2188%2043.4171%2053.8558%2044.0441%2053.6468%2044.3741C53.6138%2044.4181%2053.5918%2044.4621%2053.5588%2044.5061C53.5258%2044.5611%2053.5038%2044.5941%2053.5038%2044.5941C53.5038%2044.5941%2053.4928%2044.5941%2053.4818%2044.5941C52.8988%2045.4961%2052.1728%2046.3101%2051.3258%2047.0251C51.2818%2047.8831%2051.6558%2048.7411%2052.4148%2049.2801C52.9758%2049.6871%2053.6468%2049.8191%2054.2848%2049.7311C58.9708%2045.5291%2060.5988%2038.7311%2058.2118%2032.8571C55.8908%2027.1591%2050.4128%2023.4741%2044.2528%2023.4741C42.3168%2023.4741%2040.4138%2023.8481%2038.5988%2024.5851C34.8808%2026.0921%2031.9658%2028.9741%2030.4038%2032.6811C28.8418%2036.3881%2028.8088%2040.4801%2030.3268%2044.1981C31.5808%2047.3001%2033.7918%2049.8301%2036.7068%2051.5241L36.8168%2051.5901H36.8388Z'%20fill='%236783A0'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116902'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Xn=({data:e,modalProps:t,onDecline:n,onBeforeAccept:r,onAccept:i,onCustomAccept:a,ctaTitle:s,offer:u})=>{const{t:d}=b(),l={trialEnded:{image:fa,title:e!=null&&e.toolTitle?d("upsellGeneralModal.types.trialEnded.title",{tool:e==null?void 0:e.toolTitle}):d("upsellGeneralModal.types.trialEnded.titleWithoutTool"),description:d("upsellGeneralModal.types.trialEnded.description")},usesLimitReached:{image:Jn,title:e!=null&&e.toolTitle?d("upsellGeneralModal.types.usesLimitReached.title",{tool:e==null?void 0:e.toolTitle}):d("upsellGeneralModal.types.usesLimitReached.titleWithoutTool"),description:d("upsellGeneralModal.types.usesLimitReached.description")},featureLocked:{image:Ca,title:d("upsellGeneralModal.types.featureLocked.titleWithoutTool"),description:d("upsellGeneralModal.types.featureLocked.description")}},m=p=>{p.preventDefault(),a?a():(r&&r(),i&&i(),vn({key:u==null?void 0:u.offerKey,action:u==null?void 0:u.offerAction}))};return o.jsx(ie,{...t,size:"100",onClose:n,title:e.type&&l[e.type].title,footer:o.jsxs(va,{children:[o.jsx(f,{buttonType:"secondary",size:"200",onClick:n,children:d("upsellGeneralModal.buttons.decline")}),o.jsx(f,{"data-testid":"acceptButton",buttonType:"primary",size:"200",onClick:m,children:s||d("upsellGeneralModal.buttons.accept")})]}),children:o.jsx(ka,{children:e.type&&o.jsxs(ba,{children:[o.jsx(wa,{src:l[e.type].image}),o.jsx(Ta,{children:l[e.type].description})]})})})},ka=c.div``,ba=c(yn)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${e=>`${e.theme.spacing.sp8} 0 0`};
  padding: ${e=>e.theme.spacing.sp24};

  ${ae.laptop} {
    justify-content: space-between;
    flex-direction: row;
  }
`,wa=c.img``,Ta=c.div`
  font-size: 18px;
  margin: ${e=>`${e.theme.spacing.sp32} 0 0 0`};

  ${ae.laptop} {
    margin: ${e=>`0 0 0 ${e.theme.spacing.sp24}`};
  }
`,va=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -${e=>e.theme.spacing.sp8};

  ${ae.laptop} {
    flex-direction: row;
    justify-content: right;
  }

  ${f} + ${f} {
    margin-left: 0;
    margin-top: ${e=>e.theme.spacing.sp8};

    ${ae.laptop} {
      margin-left: ${e=>e.theme.spacing.sp8};
      margin-top: 0;
    }
  }
`,ja=({isNewUi:e,coupon:t,data:n,modalProps:r,footerJustifyContent:i,onAccept:a,onDecline:s})=>{const u=t?n==null?void 0:n.footer.labelWithCoupon:n==null?void 0:n.footer.label;return o.jsx(ie,{...r,size:"100",title:n==null?void 0:n.title,titleAlign:"center",footer:o.jsx(o.Fragment,{children:n&&o.jsxs(Sa,{$footerJustifyContent:i,$data:n,children:[o.jsx(f,{buttonType:n.proration?"secondary":"text",size:"200",onClick:s,children:n.footer.declineButton}),o.jsx(f,{"data-testid":"acceptButton",buttonType:"primary",size:"200",onClick:()=>a==null?void 0:a({}),children:n.footer.acceptButton})]})}),children:n&&o.jsxs(o.Fragment,{children:[n.subtitle&&o.jsx($a,{noFeatures:n.plans.length===0,children:n.subtitle}),o.jsx(Aa,{children:o.jsx(Oo,{isNewUi:e,plans:n.plans,features:n.features,featuresTitle:n.featuresTitle})}),o.jsx(Hn,{label:u,coupon:t,data:n})]})})},Aa=c.div`
  margin-bottom: ${e=>e.theme.spacing.sp8};
  max-width: calc(100% - 1px);
`,$a=c.p`
  ${N};
  text-align: center;
  color: ${({theme:e})=>e.systemColors.grey600};
  margin-bottom: ${e=>e.noFeatures?0:e.theme.spacing.sp24};
  margin-top: ${e=>e.theme.spacing.sp8};
`,Sa=c.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$footerJustifyContent?e.$footerJustifyContent:"center"};
  margin-top: ${e=>e.theme.spacing.sp8};
  gap: ${e=>{var t;return(t=e.$data)!=null&&t.proration?e.theme.spacing.sp16:e.theme.spacing.sp24}};

  & > ${f} {
    margin: 0 !important;
  }

  ${ae.mobileBefore} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    gap: ${e=>e.theme.spacing.sp16};
  }
`,Qe=ge(()=>({currentAndRecommended:null})),we=Ve(Qe,"currentAndRecommended",(e,t)=>Ro(e,t==null?void 0:t.signal)),Ma=()=>{var n,r,i,a,s,u,d,l,m,p,g,T,x,K,W,H,I,y,k,j,A,$,S,C,M;const{t:e}=b(),t=Qe(O=>O,bo);return h.useMemo(()=>{var tt,nt,ot,rt,at,st,it,ct,lt,dt,ut,mt,pt,ht,gt,xt,yt,Ct,ft,kt,bt,wt,Tt,vt,jt,At,$t,St,Mt,Pt,Lt,Ot,Rt,Ft,Et,Wt,Kt,It,Gt,Bt,Nt,Dt,zt,Vt,_t,Ut,Zt,Ht,Jt,Xt,qt;const O=F=>{if(F){const{amount:ee,interval:te,discountedAmount:fe}=F,ke=e(`intervalShort.${te}`),Oe=ee?`${le({amount:Number(ee),isRounded:!0})}/${ke}`:"",oo=fe?`${le({amount:Number(fe),isRounded:!0})}/${ke}`:"";return{amount:Oe,discountedAmount:oo}}return null},G=(nt=(tt=t.currentAndRecommended)==null?void 0:tt.data)==null?void 0:nt.ctaTitle,J=(at=(rt=(ot=t.currentAndRecommended)==null?void 0:ot.data)==null?void 0:rt.recommendation)==null?void 0:at.plan.period,R=O((ct=(it=(st=t.currentAndRecommended)==null?void 0:st.data)==null?void 0:it.recommendation)==null?void 0:ct.plan),_=(ut=(dt=(lt=t.currentAndRecommended)==null?void 0:lt.data)==null?void 0:dt.recommendation)==null?void 0:ut.plan.key,X=(ht=(pt=(mt=t.currentAndRecommended)==null?void 0:mt.data)==null?void 0:pt.recommendation)==null?void 0:ht.plan.title,D=((yt=(xt=(gt=t.currentAndRecommended)==null?void 0:gt.data)==null?void 0:xt.recommendation)==null?void 0:yt.bulletPoints)||[],xe=(ft=(Ct=t.currentAndRecommended)==null?void 0:Ct.data)==null?void 0:ft.subscription.plan.period,z=O((bt=(kt=t.currentAndRecommended)==null?void 0:kt.data)==null?void 0:bt.subscription.plan),ce=(Tt=(wt=t.currentAndRecommended)==null?void 0:wt.data)==null?void 0:Tt.subscription.plan.key,ye=(jt=(vt=t.currentAndRecommended)==null?void 0:vt.data)==null?void 0:jt.subscription.plan.title,q=(St=($t=(At=t.currentAndRecommended)==null?void 0:At.data)==null?void 0:$t.subscription)==null?void 0:St.bulletPoints,Ce=(Lt=(Pt=(Mt=t.currentAndRecommended)==null?void 0:Mt.data)==null?void 0:Pt.recommendation)==null?void 0:Lt.proration;let et=null;if(Ce){const F=(Et=(Ft=(Rt=(Ot=t.currentAndRecommended)==null?void 0:Ot.data)==null?void 0:Rt.recommendation)==null?void 0:Ft.proration)==null?void 0:Et.amount,ee=(Gt=(It=(Kt=(Wt=t.currentAndRecommended)==null?void 0:Wt.data)==null?void 0:Kt.recommendation)==null?void 0:It.proration)==null?void 0:Gt.dailyAmount,te=(zt=(Dt=(Nt=(Bt=t.currentAndRecommended)==null?void 0:Bt.data)==null?void 0:Nt.recommendation)==null?void 0:Dt.proration)==null?void 0:zt.interval,fe=e(`currentAndRecommended.upsellModal.intervalShort.${te}`),ke=le({amount:Number(ee)}),Oe=le({amount:Number(F),isRounded:!0});et=e("currentAndRecommended.upsellModal.prorated",{dailyPrice:ke,price:Oe,interval:fe})}const to=D.map((F,ee)=>{var te;return{title:F.title,subtitle:(F==null?void 0:F.subTitle)||null,values:{[_]:F==null?void 0:F.specialText,[ce]:(te=q==null?void 0:q[ee])==null?void 0:te.specialText}}}),no={id:ce,label:ye,isBest:!1,price:z==null?void 0:z.amount,period:xe,discountedPrice:z==null?void 0:z.discountedAmount};let Le=[{id:_,label:X,isBest:!0,price:R==null?void 0:R.amount,period:J,discountedPrice:R==null?void 0:R.discountedAmount}];return q&&(Le=[no,...Le]),{title:(Ut=(_t=(Vt=t.currentAndRecommended)==null?void 0:Vt.data)==null?void 0:_t.recommendation)==null?void 0:Ut.title,subtitle:(Jt=(Ht=(Zt=t.currentAndRecommended)==null?void 0:Zt.data)==null?void 0:Ht.recommendation)==null?void 0:Jt.subtitle,features:to,plans:Le,proration:et,hasHeadingPicture:((qt=(Xt=t.currentAndRecommended)==null?void 0:Xt.data)==null?void 0:qt.hasHeadingPicture)??!0,footer:{label:null,labelWithCoupon:null,acceptButton:G||e("currentAndRecommended.upsellModal.footer.acceptButton"),declineButton:e("currentAndRecommended.upsellModal.footer.declineButton")}}},[(r=(n=t.currentAndRecommended)==null?void 0:n.data)==null?void 0:r.ctaTitle,(a=(i=t.currentAndRecommended)==null?void 0:i.data)==null?void 0:a.hasHeadingPicture,(d=(u=(s=t.currentAndRecommended)==null?void 0:s.data)==null?void 0:u.recommendation)==null?void 0:d.bulletPoints,(p=(m=(l=t.currentAndRecommended)==null?void 0:l.data)==null?void 0:m.recommendation)==null?void 0:p.plan,(x=(T=(g=t.currentAndRecommended)==null?void 0:g.data)==null?void 0:T.recommendation)==null?void 0:x.proration,(H=(W=(K=t.currentAndRecommended)==null?void 0:K.data)==null?void 0:W.recommendation)==null?void 0:H.subtitle,(k=(y=(I=t.currentAndRecommended)==null?void 0:I.data)==null?void 0:y.recommendation)==null?void 0:k.title,($=(A=(j=t.currentAndRecommended)==null?void 0:j.data)==null?void 0:A.subscription)==null?void 0:$.bulletPoints,(M=(C=(S=t.currentAndRecommended)==null?void 0:S.data)==null?void 0:C.subscription)==null?void 0:M.plan,e])},Pa=e=>{var g,T,x,K,W,H,I;const t=Ma(),[n,r]=h.useState(!1),[i,a,s,u,d,l]=Qe(y=>{var k,j,A,$,S,C,M,O,G,J,R,_,X,D,xe,z,ce,ye,q,Ce;return[(A=(j=(k=y.currentAndRecommended)==null?void 0:k.data)==null?void 0:j.recommendation)==null?void 0:A.isShown,(M=(C=(S=($=y.currentAndRecommended)==null?void 0:$.data)==null?void 0:S.recommendation)==null?void 0:C.offer)==null?void 0:M.key,(R=(J=(G=(O=y.currentAndRecommended)==null?void 0:O.data)==null?void 0:G.recommendation)==null?void 0:J.offer)==null?void 0:R.action,(xe=(D=(X=(_=y.currentAndRecommended)==null?void 0:_.data)==null?void 0:X.recommendation)==null?void 0:D.plan)==null?void 0:xe.key,(ye=(ce=(z=y.currentAndRecommended)==null?void 0:z.data)==null?void 0:ce.recommendation)==null?void 0:ye.queryStringParameters,(Ce=(q=y.currentAndRecommended)==null?void 0:q.data)==null?void 0:Ce.version]});h.useEffect(()=>{i&&r(!0)},[i]);const m=h.useCallback(()=>{var y;we.clear(),(y=e==null?void 0:e.onDecline)==null||y.call(e)},[e.onDecline]),p=h.useCallback(({trigger:y})=>{var k;e.onCustomAccept?e.onCustomAccept():s==="modal"?(k=e==null?void 0:e.onDecline)==null||k.call(e):(e!=null&&e.onBeforeAccept&&e.onBeforeAccept(),e!=null&&e.onAccept&&e.onAccept(),vn({key:a,action:s,queryStringParameters:d,additionalParameters:{...y!==void 0&&{trigger:y}}}))},[e,a,s,d]);return h.useEffect(()=>{var y,k,j,A,$;if(((y=e.modalProps)==null?void 0:y.isOpen)===!0){const S={location:La[(k=e.data)==null?void 0:k.tool],coupon:(j=e.data)==null?void 0:j.coupon};($=(A=e==null?void 0:e.getCustomAction)==null?void 0:A.call(e,S))!=null&&$.then(C=>we.set(C))||we.action(S)}else we.clear()},[(g=e.modalProps)==null?void 0:g.isOpen,e==null?void 0:e.getCustomAction]),h.useEffect(()=>{var y,k,j,A,$,S,C,M,O,G,J,R,_,X;if((y=e.data)!=null&&y.tool&&((k=e.data)==null?void 0:k.tool)in Ee&&((j=e.modalProps)!=null&&j.isOpen)){const D=((A=e==null?void 0:e.segmentProps)==null?void 0:A.type)||(e==null?void 0:e.type);(l==="currentAndRecommended"||l==="proratedCurrentAndRecommended"||l==="currentAndOptimalRecommended")&&u&&Qt({name:"Upsell Modal Viewed",properties:{newPlan:u,tool:Ee[($=e.data)==null?void 0:$.tool],...D&&{type:D},...((S=e==null?void 0:e.segmentProps)==null?void 0:S.location)&&{location:(C=e==null?void 0:e.segmentProps)==null?void 0:C.location},...((M=e==null?void 0:e.segmentProps)==null?void 0:M.trigger)&&{trigger:(O=e==null?void 0:e.segmentProps)==null?void 0:O.trigger}}}),l==="generic"&&Qt({name:"Upsell Modal Viewed",properties:{tool:Ee[(G=e.data)==null?void 0:G.tool],...D&&{type:D},...((J=e==null?void 0:e.segmentProps)==null?void 0:J.location)&&{location:(R=e==null?void 0:e.segmentProps)==null?void 0:R.location},...((_=e==null?void 0:e.segmentProps)==null?void 0:_.trigger)&&{trigger:(X=e==null?void 0:e.segmentProps)==null?void 0:X.trigger}}})}},[(T=e.modalProps)==null?void 0:T.isOpen,l,u]),o.jsxs(o.Fragment,{children:[o.jsx(ja,{...e,isNewUi:!0,modalProps:{...e.modalProps,size:"100",isOpen:((x=e.modalProps)==null?void 0:x.isOpen)&&n&&l==="currentAndRecommended",onClose:m},data:t,footerJustifyContent:"space-between",onAccept:p}),o.jsx(dn,{...e,isNewUi:!0,modalProps:{...e.modalProps,size:"100",isOpen:((K=e.modalProps)==null?void 0:K.isOpen)&&n&&l==="proratedCurrentAndRecommended",onClose:m},data:t,onAccept:p}),o.jsx(dn,{...e,modalProps:{...e.modalProps,size:"100",isOpen:((W=e.modalProps)==null?void 0:W.isOpen)&&n&&l==="currentAndOptimalRecommended",onClose:m},data:t,onAccept:p,queryStringParameters:d}),o.jsx(Xn,{...e,modalProps:{...e.modalProps,isOpen:((H=e.modalProps)==null?void 0:H.isOpen)&&n&&l==="generic",onClose:m},ctaTitle:(I=t==null?void 0:t.footer)==null?void 0:I.acceptButton,offer:{offerKey:a,offerAction:s}})]})},La={blackBoxProducts:"blackbox",pricingPage:"pricingPage",cerebro:"cerebro",cerebroWalmart:"cerebroWalmart",keywordTracker:"keywordTracker",keywordTrackerWalmart:"keywordTrackerWalmart",magnet:"magnet",magnetWalmart:"magnetWalmart",listingAnalyzer:"listingAnalyzer",trendster:"trendster",inventoryManagement:"inventoryManagement",inventoryManagementWalmart:"inventoryManagementWalmart",profits:"profits",profitsWalmart:"profitsWalmart",userAccounts:"userAccounts",listingBuilder:"listingBuilder",marketTracker:"marketTracker",alerts:"alerts",insightsDashboard:"insightsDashboard",misspellinator:"misspellinator",frankenstein:"frankenstein",scribbles:"scribbles",ce_Xray:"xray",ce_XrayKeywords:"xrayApi",ce_SearchExpander:"searchExpander",portals:"portals",indexChecker:"indexChecker",historicalTrends:"historicalTrends",refundGenie:"refundGenie",blackboxAba:"blackboxAba",followUp:"followUp",bsrWidget:"bsrWidget",productLaunchpad:"productLaunchpad"},Ee={blackBoxProducts:"blackBox",pricingPage:"pricingPage",cerebro:"cerebro",cerebroWalmart:"cerebroWalmart",keywordTracker:"keywordTracker",keywordTrackerWalmart:"keywordTrackerWalmart",magnet:"magnet",magnetWalmart:"magnetWalmart",listingAnalyzer:"listingAnalyzer",trendster:"trendster",inventoryManagement:"inventoryManagement",inventoryManagementWalmart:"inventoryManagementWalmart",profits:"profits",profitsWalmart:"profitsWalmart",userAccounts:"userAccounts",listingBuilder:"listingBuilder",marketTracker:"marketTracker",alerts:"alerts",insightsDashboard:"insightsDashboard",misspellinator:"misspellinator",frankenstein:"frankenstein",scribbles:"scribbles",ce_Xray:"xray",ce_XrayKeywords:"xrayApi",ce_SearchExpander:"searchExpander",portals:"portals",indexChecker:"indexChecker",historicalTrends:"cerebro",refundGenie:"refundGenie",blackboxAba:"blackboxAba",followUp:"followUp",bsrWidget:"bsrWidget",productLaunchpad:"productLaunchpad"},bs=e=>{var t;return h.useEffect(()=>{var n;(n=e==null?void 0:e.onLoaded)==null||n.call(e)},[]),o.jsxs(o.Fragment,{children:[(t=e.data)!=null&&t.tool?o.jsx(Pa,{...e}):o.jsx(Xn,{...e}),o.jsx(wo,{})]})},Oa=[{days:30,label:"day",countLabel:30},{days:90,label:"day",countLabel:90},{days:365,label:"year",countLabel:1},{days:0,label:"allTime",countLabel:0}],Ra=()=>{const{t:e}=b();return h.useMemo(()=>[{value:30,label:`30 ${e("day",{count:30})}`},{value:90,label:`90 ${e("day",{count:90})}`},{value:365,label:`1 ${e("year",{count:1})}`},{value:0,label:e("allTime")}],[e])},We=({title:e,color:t,disabled:n})=>o.jsxs(Fa,{color:t,disabled:n,children:[o.jsx(qn,{}),o.jsx(Yn,{children:e})]}),qn=c.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,Yn=c.div`
  ${N};
`,Fa=c.div`
  display: flex;
  align-items: center;
  min-width: 160px;

  ${qn} {
    background-color: ${({disabled:e,color:t,theme:n})=>e?n.systemColors.grey300:t};
  }

  ${Yn} {
    color: ${({disabled:e,theme:t})=>e?t.systemColors.grey300:"initial"};
  }
`,Ea=h.lazy(()=>To(()=>import("./SearchVolumeGraph-o0SQ5X3e.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(e=>({default:e.SearchVolumeGraph}))),je={AMAZON:"#0A6FE8",GOOGLE:"#F78527",WALMART:"#EFCF1A"},Qn=({platform:e,disabledPlatforms:t})=>{const{t:n}=b(),r=h.useMemo(()=>[{value:"AMAZON",label:o.jsx(We,{color:je.AMAZON,title:n("searchGraphNew.options.AMAZON.title"),disabled:t==null?void 0:t.AMAZON})},{value:"GOOGLE",label:o.jsx(We,{color:je.GOOGLE,title:n("searchGraphNew.options.GOOGLE.title"),disabled:t==null?void 0:t.GOOGLE})},{value:"WALMART",label:o.jsx(We,{color:je.WALMART,title:n("searchGraphNew.options.WALMART.title"),disabled:t==null?void 0:t.WALMART})}],[t,n]);return{value:r.find(a=>a.value===e),platformOptions:r}},Wa=e=>{const{value:t,platformOptions:n}=Qn(e);return o.jsx(kn,{options:n,value:t,onChange:r=>{var i;return(i=e.onPlatformChange)==null?void 0:i.call(e,r.value)}})},Ka=e=>{const{t}=b(),{value:n}=Qn(e);return o.jsx(Ke,{delay:[500,0],content:t(`searchGraphNew.options.${n.value}.tooltip`),appendTo:document.body,zIndex:999999,children:o.jsx(Da,{children:n.label})})},Ia=({start:e,end:t})=>o.jsxs(Va,{children:[e&&tn(e,"standardNumeric")," – ",t&&tn(t,"standardNumeric")]}),Ga=({status:e,searchData:t,days:n,onDaysChange:r,onReload:i,platformProps:a})=>{const{t:s}=b(),u=Ra();return o.jsxs(o.Fragment,{children:[o.jsx(Ia,{start:t&&t.length>0?t[0][0]:void 0,end:t&&t.length>0?t[t.length-1][0]:void 0}),o.jsxs(Na,{children:[o.jsx(kn,{placeholder:"Range",options:u,size:"100",value:n,onChange:({value:d})=>r==null?void 0:r(d)}),a&&o.jsx(Wa,{...a})]}),o.jsx(h.Suspense,{fallback:Ha,children:o.jsx(Ba,{children:o.jsx(So,{status:e,error:o.jsxs(un,{children:[o.jsx(za,{children:s("searchGraph.error")}),o.jsx(_a,{buttonType:"primary",size:"200",onClick:i,children:s("common.reload")})]}),children:t&&t.length>0?o.jsx(Ea,{volume:t||[],height:400,days:n,color:je[(a==null?void 0:a.platform)||"AMAZON"],seriesLegend:s((a==null?void 0:a.platform)!=="GOOGLE"?"searchGraph.legend":"searchGraph.googleTrend")}):o.jsx(un,{children:"N/A"})})})}),a&&o.jsx(Ka,{...a})]})},Ba=c.div`
  min-height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
`,Na=c.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,Da=c.div`
  ${he};
  color: ${({theme:e})=>e.systemColors.black};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  * {
    min-width: initial;
  }
`,un=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`,za=c.div``,Va=c.div`
  ${N};
`,_a=c(f)`
  margin-top: ${({theme:e})=>e.spacing.sp24};
`,Ua=c.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Za=c(Po)`
  width: 40px;
  height: 40px;
`,Ha=o.jsx(Ua,{children:o.jsx(Za,{})});var Be;(function(e){const t=de+"/api/trends/get-google-trends";e.get=async n=>v({url:P(t,{period:"year",keywords:[n.keyword]},{arrayFormat:"bracket"}),method:"GET",useSessionAccountId:!0})})(Be||(Be={}));var Ne;(function(e){const t=Z+"/api/v1/keywords/search-volume",n={chart:`${t}/chart`,chartBatch:`${t}/chart-batch`};e.get=async r=>v({url:n.chart,method:"GET",params:r,withCredentials:0}),e.getBatch=async r=>v({url:P(n.chartBatch,{...r},{arrayFormat:"bracket"}),method:"GET",withCredentials:0})})(Ne||(Ne={}));var De;(function(e){const t=Z+"/api/v1/walmart/search-volume",n={chart:`${t}/chart`,chartBatch:`${t}/chart-batch`};e.get=async r=>v({url:n.chart,method:"GET",params:r,withCredentials:0}),e.getBatch=async r=>v({url:P(n.chartBatch,{...r},{arrayFormat:"bracket"}),method:"GET",withCredentials:0})})(De||(De={}));const se=ge(()=>({searchData:null,graphModal:{keyword:"",marketplace:"com"}})),eo=(e,t,n)=>e+`_source_${n==="AMAZON"?t:n}`,mn=Ve(se,"searchData",async({keyword:e,phraseId:t,marketplace:n,moduleId:r="xray",selectedPlatform:i="AMAZON"})=>{var d;const a=vo();let s=null;if(i==="AMAZON"){const l=(d=Se("AM","TLDomain",n))==null?void 0:d.store;s=await Ne.get({keyword:e,marketplace:l,moduleId:r,accountId:a})}else i==="WALMART"?s=await De.get({keyword:e,moduleId:r,accountId:a}):i==="GOOGLE"&&(s={results:{history:(await Be.get({keyword:e})).data,keyword:e,marketplace:n}});const u=se.getState().searchData??{};return s?{...u,[eo((s==null?void 0:s.results.keyword)??e,n,i)]:{history:(s==null?void 0:s.results.history.map(l=>[l.timestamp*1e3,l.exact]))??[],marketplace:s==null?void 0:s.results.marketplace,keyword:s==null?void 0:s.results.keyword}}:u}),me=Cn(se,"graphModal"),Ja=(e,t)=>(e||[]).filter(n=>t===0?!0:new Date(n[0]).getTime()>Date.now()-t*3600*1e3*24),pn=({selectedPlatform:e,marketplace:t,moduleId:n})=>{var s;const r=e==="GOOGLE"&&"GOOGLE",i=e==="WALMART"&&"WALMART_US",a=(s=Se("AM","TLDomain",t))==null?void 0:s.store;An({eventName:"Search Volume chart viewed",eventProperties:{marketplace:r||i||a,type:e.toLocaleLowerCase(),moduleId:n}})},ws=({buttonProps:e={},...t})=>{const n=()=>{t.onClick?t.onClick(()=>me.open(t)):me.open(t)};return o.jsx(Xa,{buttonType:"icon",size:"50",icon:o.jsx(xn,{icon:jo}),onClick:n,...e})},Xa=c(f)`
  margin: -4px 0;
`,Ts=()=>{const{t:e}=b(),[t]=me();return o.jsx(ie,{isOpen:t,onClose:me.close,size:"100",lockBody:!0,title:o.jsx(qa,{}),footer:o.jsx(es,{children:o.jsx(f,{size:"200",onClick:me.close,children:e("common.close")})}),children:t&&o.jsx(Ya,{})})},qa=()=>{const{t:e}=b(),t=se(n=>n.graphModal);return o.jsx(o.Fragment,{children:e("searchGraphNew.title",{keyword:t.keyword})})},Ya=h.memo(()=>{var p,g,T;const[e,t]=h.useState(Oa[2].days),n=se(x=>x.graphModal),[r,i]=h.useState(((p=n==null?void 0:n.platformOptions)==null?void 0:p.platform)??"AMAZON"),a=se(fn(x=>x.searchData)),s=Ja((g=a==null?void 0:a[eo(n.keyword,n.marketplace,r)])==null?void 0:g.history,e),u=s?s.length:0,d=()=>{if(u===0)return mn.action({...n,selectedPlatform:r})};h.useEffect(d,[n,r,u]),h.useEffect(()=>{pn({selectedPlatform:r,marketplace:n.marketplace,moduleId:n.moduleId})},[]);const l=mn(x=>s.length>0?"loaded":x.status),m=n.platformOptions?{platform:r,onPlatformChange:x=>{var K,W;(W=(K=n.platformOptions)==null?void 0:K.disabledPlatforms)!=null&&W[x]||(pn({selectedPlatform:x,marketplace:n.marketplace,moduleId:n.moduleId}),i(x))},disabledPlatforms:(T=n.platformOptions)==null?void 0:T.disabledPlatforms}:void 0;return o.jsx(Qa,{children:o.jsx(Ga,{status:l,searchData:s,days:e,onDaysChange:t,onReload:d,platformProps:m})})}),Qa=c.div`
  display: flex;
  flex-direction: column;
`,es=c.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;export{Ne as A,jn as E,xs as G,ks as K,ms as L,hs as N,dn as O,ps as T,bs as U,ja as a,De as b,gs as c,Io as d,fs as e,Ye as f,Kr as g,Ir as h,Ga as i,ws as j,Ts as k,He as l,La as m,qe as n,Wr as o,ys as p,Cs as q,Ho as r,Ee as s,lr as t,me as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/SearchVolumeGraph-o0SQ5X3e.js","static/index-VVIvRZBh.js","static/AddToMyListDropdown-EN5Nh0z5.js","static/NewRadio-yIsEqEsT.js","static/useAutoPlay-JZxKBgmm.js","static/middleware-KgP9JdWn.js","static/Learn-nfpDmxZa.js","static/use-latest.esm-ABeUYwlj.js","static/use-onclickoutside.browser.esm-zvXz2-0x.js","static/MarketplaceSingleSelect-4raCX1Al.js","static/ChartExport-2jItu5Oi.js","static/LineGraphSkeleton-4rFP-rW5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SearchGraphModal-EAp81elq.js.map
