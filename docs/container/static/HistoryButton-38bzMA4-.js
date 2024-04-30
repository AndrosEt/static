import{a6 as q,P as ne,f as L,g as U,A as Y,a8 as ae,a9 as B,av as ie,r as m,w as M,j as o,M as re,N as x,a2 as le,ar as ce,u as d,I as de,V as pe,J as ue,K as me,Y as he,U as fe,Q as ye,O as ge,x as w,aB as xe,G as E,ad as be,cS as D,aF as Se,aO as je,cj as Ce,ck as ke,bi as Ae,d3 as Pe}from"./index-3WWdADc-.js";import{U as De,v as ve}from"./SearchGraphModal-Qx3Zfqc8.js";import{t as Te,e as Be,E as we,S as $e,Q as W}from"./Learn-iEpSD2rS.js";import{p as Me}from"./OptimalData-it69sBiU.js";import{E as Ie}from"./ExtendedProductSummary-BHNYmxm-.js";const He=e=>({Adtomic:{title:"idashUpsellModal.addons.Adtomic.title",subtitle:"idashUpsellModal.addons.Adtomic.subtitle",pricePrefix:"idashUpsellModal.addons.startingAt",price:199,priceDetails:["idashUpsellModal.addons.Adtomic.priceDetails.adSpend"],featuresTitle:"idashUpsellModal.addons.Adtomic.featuresTitle",features:["idashUpsellModal.addons.Adtomic.features.maximizeROI","idashUpsellModal.addons.Adtomic.features.opportunities","idashUpsellModal.addons.Adtomic.features.improveACos","idashUpsellModal.addons.Adtomic.features.saveTime"]}}),vt=q("https://pzn-ads-ui.pacvue.com"),Ne="https://pages.helium10.com/adtomic-demo",Ue=`${ne}/subscribe/edit-subscription`,Ee=q("https://control-center.helium10.com"),V=async e=>{const{eventName:s}=e,t=e.eventProperties||{};return L({url:U(`${Ee}/api/site/track-event`,{}),method:"POST",params:{eventName:s,eventProperties:t},useSessionAccountId:!0})},$=Y(()=>({modal:null})),I=ae($,"modal",{reaction:e=>{var s,t,n,i;if(e.type==="OPEN"){const{currentPlan:r,upsellPlan:p}=Q((s=e.payload)==null?void 0:s.plan,(t=e.payload)==null?void 0:t.isChinese),u=(n=e.payload)==null?void 0:n.addon,c=(i=e.payload)==null?void 0:i.segmentEventProperties;V({eventName:"Upsell Modal Fired",eventProperties:{CurrentPlan:r,UpsellPlan:p,Addon:u,...c}})}}}),Re=[B.SuperchargeYourBrand,B.SuperchargeYourBrandAnnual],Fe=[B.AdtomicScaleYourBusinessBundle,B.AdtomicScaleYourBusinessBundleAnnual],ze={alacarte:"diamond",diamond:"elite",elite:"elite",enterprise:"enterprise",free:"diamond",gold:"diamond",platinum:"diamond",starter:"diamond"},_=e=>e?ie[e]:"free",Ge=e=>e?Re.includes(e):!1,We=e=>{const s=_(e);return ze[s]||"diamond"},Oe=e=>e?Fe.includes(e):!1,O=(e,s,t,n)=>{let i;return s?i=Le[e]:i=n?Ye[e]:qe[e],t?`Adtomic & ${i} Bundle`:i},qe={alacarte:"Alacarte",diamond:"Diamond",elite:"Elite",enterprise:"Enterprise",free:"Free",gold:"Gold",platinum:"Platinum",starter:"Starter"},Le={alacarte:"Alacarte",diamond:"Scale Your Business",elite:"Supercharge Your Brand",enterprise:"Enterprise",free:"Free",gold:"Start Your Business",platinum:"Start Your Business",starter:"Starter"},Ye={alacarte:"Alacarte",diamond:"Professional",elite:"Elite",enterprise:"Enterprise",free:"Free",gold:"Gold",platinum:"Entrepreneur",starter:"Explorer"},Q=(e,s)=>{const t=_(e),n=Ge(e),i=We(e),r=Oe(e),p=O(t,n,r,!!s),u=O(i,i==="elite",!1,!1);return{currentPlan:p,upsellPlan:u}},Ve=()=>m.useCallback((e,s)=>{var u;const t=$.getState().modal,{currentPlan:n,upsellPlan:i}=Q(t==null?void 0:t.plan,t==null?void 0:t.isChinese),r=t==null?void 0:t.addon,p=t==null?void 0:t.segmentEventProperties;V({eventName:"Upsell Modal Addon Clicked",eventProperties:{CurrentPlan:n,UpsellPlan:i,Addon:r,"Button clicked":e,...p}}),(u=window.open(U(s,{}),"_blank"))==null||u.focus()},[]),_e=({addon:e="Adtomic",modalProps:s})=>{const{t}=M(),n=m.useMemo(()=>He()[e],[e]),i=Ve();return o.jsxs(re,{size:"100",lockBody:!0,...s,title:t(n.title),footer:o.jsxs(rt,{children:[o.jsx(x,{type:"button",buttonType:"text",size:"200",nonce:"",onClick:s==null?void 0:s.onClose,children:t("idashUpsellModal.buttons.dismiss")}),o.jsxs(lt,{children:[o.jsx(x,{type:"button",buttonType:"secondary",size:"200",nonce:"",onClick:()=>i("Book a Demo",Ne),children:t("idashUpsellModal.buttons.bookDemo")}),o.jsx(x,{type:"button",size:"200",nonce:"",onClick:()=>i("Buy Now",Ue),children:t("idashUpsellModal.buttons.buyNow")})]})]}),children:[o.jsx(Je,{children:t(n.subtitle)}),o.jsxs(Qe,{padding:"normal",children:[o.jsxs(Ke,{children:[o.jsxs(Xe,{children:[n.pricePrefix!=null&&o.jsx(H,{children:t(n.pricePrefix)}),o.jsxs(Ze,{children:[o.jsx(et,{children:le({amount:n.price,isRounded:!0})}),o.jsx(tt,{children:t("idashUpsellModal.prices.monthly")})]}),n.priceSuffix!=null&&o.jsx(H,{children:t(n.priceSuffix)})]}),n.priceDetails.map((r,p)=>o.jsx(H,{children:t(r)},p))]}),o.jsxs(st,{children:[o.jsx(ot,{children:t(n.featuresTitle)}),o.jsx(nt,{children:n.features.map((r,p)=>o.jsxs(at,{children:[o.jsx(it,{icon:ce}),t(r)]},p))})]})]})]})},Qe=d(ge)`
  margin-top: ${e=>e.theme.spacing.sp24};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${e=>e.theme.spacing.sp16};

  ${de.mobile} {
    grid-template-columns: 156px 1fr;
    grid-gap: ${e=>e.theme.spacing.sp32};
  }
`,Je=d.div`
  ${pe};
  color: ${e=>e.theme.systemColors.grey600};
`,Ke=d.div`
  border-radius: 6px;
  background-color: ${e=>e.theme.systemColors.blue50};
  padding: ${e=>e.theme.spacing.sp12};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp24};
  min-height: 156px;
`,Xe=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ze=d.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
`,et=d.div`
  ${ue};
`,tt=d.div`
  ${me};
  color: ${e=>e.theme.systemColors.black};
`,H=d.div`
  ${he};
`,st=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,ot=d.div`
  ${fe};
`,nt=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
`,at=d.div`
  ${ye};
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.sp8};
`,it=d(w)`
  color: ${e=>e.theme.systemColors.green600};
  font-size: 16px;
`,rt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp24};
`,lt=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.sp8};
  padding-top: ${e=>e.theme.spacing.sp8};
`,Tt=()=>{const e=$(u=>{var c;return(c=u.modal)==null?void 0:c.addon}),s=$(u=>{var c;return(c=u.modal)==null?void 0:c.segmentEventProperties}),[t,n]=I(),i=m.useMemo(()=>({isOpen:t&&e==null}),[e,t]),r=m.useMemo(()=>({isOpen:t&&e!=null,onClose:I.close,lockBody:!0}),[e,t]);let p;return(s==null?void 0:s.tool)==="cerebro"&&(p={location:s==null?void 0:s.Location,trigger:s==null?void 0:s.Trigger}),o.jsxs(o.Fragment,{children:[o.jsx(De,{data:{tool:"insightsDashboard"},modalProps:i,onDecline:I.close,segmentProps:p}),o.jsx(_e,{addon:e,modalProps:r})]})},ct=async(e,s)=>await L({url:U(e,s),method:"GET",useSessionAccountId:!0}),f=Y(()=>({props:null,history:null,deleteHistory:null,bulkDeleteHistory:null})),dt=xe(f,"props"),v=E(f,"history",async e=>{const s=f.getState().props;if(s){const t=await ct(s.requestUrls.getHistory,e),n=s.prepareData?s.prepareData(t).data:t.data,i=s.prepareMeta?s.prepareMeta(t).meta:t.meta;return{data:n,meta:i}}}),N=E(f,"deleteHistory",async({tableData:e,...s})=>{const t=f.getState().props;if(t&&t.deleteHistory)return await t.deleteHistory(s)},{fulfilled:({payload:{tableData:e,onSuccess:s}})=>{s();const t=f.getState().props;if(t&&t.prepareRequestData){const n=t.prepareRequestData(e);v.action(n)}},rejected:()=>{const e=be.getState().translation;if(e){const{t:s}=e;Te.error(s("history.errors.cantDeleteEntry"))}}}),pt=E(f,"bulkDeleteHistory",async({tableData:e,...s})=>{const t=f.getState().props;if(f.setState(n=>n.history?{...n,history:{...n.history,data:n.history.data.filter(i=>!s.ids.includes(i.id))}}:n),t&&t.bulkDeleteHistory)return await t.bulkDeleteHistory(t.prepareRequestBulkDelete?t.prepareRequestBulkDelete(s):s)},{fulfilled:({payload:{tableData:e}})=>{const s=f.getState().props;if(s&&s.prepareRequestData){const t=s.prepareRequestData(e);v.action(t)}}}),ut=({onClose:e,hasCheckbox:s,tableData:t,onDelete:n,ref:i})=>{const{t:r}=M(),[p,u,c,b]=f(D(a=>{var h,g,C,P;return[(h=a.props)==null?void 0:h.hideDelete,(g=a.props)==null?void 0:g.hideDate,(C=a.props)==null?void 0:C.openCallback,(P=a.props)==null?void 0:P.columns]})),S=f(D(a=>{var h;return((h=a.props)==null?void 0:h.tool)||"cerebro"})),j=a=>N.action({searchId:a,tableData:t,onSuccess:n}),k=N(D(a=>{var h;return a.status==="loading"?(h=a.payload)==null?void 0:h.searchId:0})),A=s?J:mt;return[...p?[]:[{title:"",field:"pinned",static:24,noHeader:!0,render:a=>o.jsx(A,{children:o.jsx(x,{onClick:()=>{j(a.id.toString()),n()},buttonType:"icon",size:"50",icon:k===String(a.id)?o.jsx(w,{icon:Se,spin:!0,style:{fontSize:24}}):o.jsx(w,{icon:je}),disabled:k===String(a.id)})})}],...b||[{title:r("history.product"),field:"product",sortable:!0,static:332,render:a=>{var T;const h=a.productId||"",g=(T=a.marketplace)==null?void 0:T.includes("WALMART"),C=r("copyButton.copy",{name:g?"Walmart Id":"ASIN"}),P=r("copyButton.copied",{name:g?"Walmart Id":"ASIN"});return o.jsx(Ie,{product:{title:ve(a.title||""),imageSrc:a.imageUrl||"",href:Me(g?"WM":"AM",a.marketplace,a.productId),asin:a.productId},imageTooltipOptions:{appendTo:i||"parent"},market:g?"w":"a",marketplace:a.marketplace,blocks:[{text:`${h}`,copyContent:h,beforeCopyContent:o.jsx(Ce,{label:C}),afterCopyContent:o.jsx(ke,{label:P})}],tooltipOptions:{appendTo:document.body},tool:S})},exportTitle:r("history.product")},{title:r("history.searchtype"),field:"searchtype",width:140,render:a=>o.jsx("div",{children:a.historyType!==1?r("history.multiSearch"):r("history.singleSearch")})}],...u?[]:[{title:r("history.date"),field:"date",sortable:!0,render:a=>o.jsx("div",{children:Be(new Date(a.createdAt*1e3),"completeLong")})}],{title:"",field:"open",width:84,render:a=>o.jsx(x,{buttonType:"primary",onClick:()=>{var h;c==null||c({id:a.id.toString(),isSingleSearch:a.historyType===1,isAmazon:!((h=a.marketplace)!=null&&h.includes("WALMART")),createdAt:a.createdAt}),e()},children:r("common.open")})}]},J=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${x} {
    div {
      height: initial;
      width: initial;
    }
  }
`,mt=d(J)``,ht={page:1,sortField:"id",sortDirection:"ASC",count:5,search:""},ft=({onClose:e,initialSearchString:s,searchVisible:t,tableSettings:n})=>{var F;const{t:i}=M(),[r,p]=m.useState(ht),[u,c]=m.useState([]),b=m.useRef(null),{status:S,error:j}=v(l=>l),k=f(D(l=>{var y;return(y=l.props)==null?void 0:y.prepareRequestData})),{onFilter:A,marketplace:a,...h}=n||{},[g,C]=f(D(l=>{var y,z,G;return[((y=l.history)==null?void 0:y.data)??[],((G=(z=l.history)==null?void 0:z.meta)==null?void 0:G.total)??0]})),T=Ae(l=>(A==null||A(l,"initial"),p(l),v.action(k?k(l):gt(l))),100),K=N(l=>{var y;return l.status==="loading"?(y=l.payload)==null?void 0:y.searchId:null}),R=m.useCallback(l=>pt.action({ids:l,tableData:r}),[r]),X=m.useCallback(()=>c([]),[]),Z=ut({onClose:e,hasCheckbox:(F=h.selected)==null?void 0:F.haveCheckbox,tableData:r,onDelete:X,ref:b}),ee=m.useMemo(()=>({getTitleText:({items:l,selected:y})=>y?i("history.titleTableSelected",{count:y}):i("history.titleTable",{count:l}),onChange:l=>c(l),value:u}),[u,i]),te=m.useMemo(()=>({errorState:j,searchVisible:t}),[j,t]),se=m.useCallback(l=>l.length?o.jsx(x,{onClick:()=>{R(l),c([])},buttonType:"secondary",children:i("common.delete")}):o.jsx(o.Fragment,{}),[R,i]),oe=m.useMemo(()=>({defaultValue:{sortField:"date",sortDirection:"DESC",count:5,search:s||"",page:1},haveInitial:!0}),[s]);return o.jsx(xt,{ref:b,children:o.jsx(we,{name:"historyTable",marketplace:a,status:K!=null||S==="loading"?"waiting":S,behavior:te,columns:Z,data:g,total:C,dimensions:yt,selected:ee,leftActions:se,onFilter:T,filter:oe,...h})})},yt={minHeight:300},gt=({page:e,count:s,search:t,sortDirection:n,sortField:i})=>({...e?{page:e}:{},...s?{count:s}:{},...t?{search:t}:{},...n||i?{sort:`${n==="ASC"?"+":"-"}${i}`}:{}}),xt=d($e)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  min-height: 300px;
  width: 100%;
  margin-top: 32px;
  max-width: 100%;
  min-width: 0;
`,Bt=m.memo(({description:e,CustomButton:s,disabled:t,initialSearchString:n,searchVisible:i=!0,...r})=>{const{t:p}=M(),[u,c]=m.useState(!1),b=f(j=>j.props!==null),S=m.useCallback(()=>{c(!1)},[]);return m.useEffect(()=>{dt.set(r)},[...Object.values(r)]),m.useEffect(()=>{u||v.clear()},[u]),o.jsxs(o.Fragment,{children:[s?o.jsx(s,{onClick:()=>c(!0)}):o.jsx(x,{buttonType:"tertiary",icon:o.jsx(w,{icon:Pe}),onClick:()=>c(!0),disabled:t,children:p("history.title")}),o.jsx(bt,{isOpen:u,onClose:()=>c(!1),header:p("history.title"),size:"400",zIndex:1000001,footer:o.jsx(St,{children:o.jsx(x,{buttonType:"secondary",size:"200",onClick:()=>{c(!1)},children:p("common.close")})}),lockBody:!0,children:o.jsxs(o.Fragment,{children:[e&&o.jsx(jt,{children:e}),b&&o.jsx(ft,{onClose:S,initialSearchString:n,searchVisible:i,tableSettings:r.tableSettings})]})})]})}),bt=d(W)`
  & > div > div > div {
    min-width: 0;
  }

  & header h2 {
    margin-bottom: 0;
  }

  & ${W.Wrapper} {
    position: relative;
    min-width: 0;
  }
`,St=d.div`
  display: flex;
  justify-content: flex-end;
`,jt=d.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
`;export{Bt as H,Tt as I,$ as a,vt as b,Q as g,V as t,I as u};
//# sourceMappingURL=HistoryButton-38bzMA4-.js.map
