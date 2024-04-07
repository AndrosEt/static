import{a6 as q,f as L,g as U,A as Y,aE as ne,G as E,ag as ae,w as M,cI as D,j as o,N as x,x as B,aH as ie,bo as re,c4 as le,c5 as ce,u as d,r as m,aV as de,cW as pe,P as ue,ab as me,ac as w,ay as he,M as ye,a2 as fe,au as ge,I as xe,V as be,J as Se,K as je,Y as Ce,U as Ae,Q as ke,O as Pe}from"./index-VVIvRZBh.js";import{t as De,aB as ve,e as Te,y as Be,S as we,K as G}from"./Learn-nfpDmxZa.js";import{t as $e,U as Me}from"./SearchGraphModal-EAp81elq.js";import{E as Ie}from"./ExtendedProductSummary-2sO78FPU.js";const He=q("https://control-center.helium10.com"),V=async e=>{const{eventName:s}=e,t=e.eventProperties||{};return L({url:U(`${He}/api/site/track-event`,{}),method:"POST",params:{eventName:s,eventProperties:t},useSessionAccountId:!0})},Ne=async(e,s)=>await L({url:U(e,s),method:"GET",useSessionAccountId:!0}),y=Y(()=>({props:null,history:null,deleteHistory:null,bulkDeleteHistory:null})),Ue=ne(y,"props"),v=E(y,"history",async e=>{const s=y.getState().props;if(s){const t=await Ne(s.requestUrls.getHistory,e),n=s.prepareData?s.prepareData(t).data:t.data,i=s.prepareMeta?s.prepareMeta(t).meta:t.meta;return{data:n,meta:i}}}),N=E(y,"deleteHistory",async({tableData:e,...s})=>{const t=y.getState().props;if(t&&t.deleteHistory)return await t.deleteHistory(s)},{fulfilled:({payload:{tableData:e,onSuccess:s}})=>{s();const t=y.getState().props;if(t&&t.prepareRequestData){const n=t.prepareRequestData(e);v.action(n)}},rejected:()=>{const e=ae.getState().translation;if(e){const{t:s}=e;De.error(s("history.errors.cantDeleteEntry"))}}}),Ee=E(y,"bulkDeleteHistory",async({tableData:e,...s})=>{const t=y.getState().props;if(y.setState(n=>n.history?{...n,history:{...n.history,data:n.history.data.filter(i=>!s.ids.includes(i.id))}}:n),t&&t.bulkDeleteHistory)return await t.bulkDeleteHistory(t.prepareRequestBulkDelete?t.prepareRequestBulkDelete(s):s)},{fulfilled:({payload:{tableData:e}})=>{const s=y.getState().props;if(s&&s.prepareRequestData){const t=s.prepareRequestData(e);v.action(t)}}}),Re=({onClose:e,hasCheckbox:s,tableData:t,onDelete:n,ref:i})=>{const{t:r}=M(),[p,u,c,b]=y(D(a=>{var h,g,C,P;return[(h=a.props)==null?void 0:h.hideDelete,(g=a.props)==null?void 0:g.hideDate,(C=a.props)==null?void 0:C.openCallback,(P=a.props)==null?void 0:P.columns]})),S=y(D(a=>{var h;return((h=a.props)==null?void 0:h.tool)||"cerebro"})),j=a=>N.action({searchId:a,tableData:t,onSuccess:n}),A=N(D(a=>{var h;return a.status==="loading"?(h=a.payload)==null?void 0:h.searchId:0})),k=s?_:Fe;return[...p?[]:[{title:"",field:"pinned",static:24,noHeader:!0,render:a=>o.jsx(k,{children:o.jsx(x,{onClick:()=>{j(a.id.toString()),n()},buttonType:"icon",size:"50",icon:A===String(a.id)?o.jsx(B,{icon:ie,spin:!0,style:{fontSize:24}}):o.jsx(B,{icon:re}),disabled:A===String(a.id)})})}],...b||[{title:r("history.product"),field:"product",sortable:!0,static:332,render:a=>{var T;const h=a.productId||"",g=(T=a.marketplace)==null?void 0:T.includes("WALMART"),C=r("copyButton.copy",{name:g?"Walmart Id":"ASIN"}),P=r("copyButton.copied",{name:g?"Walmart Id":"ASIN"});return o.jsx(Ie,{product:{title:$e(a.title||""),imageSrc:a.imageUrl||"",href:ve(g?"WM":"AM",a.marketplace,a.productId),asin:a.productId},imageTooltipOptions:{appendTo:i||"parent"},market:g?"w":"a",marketplace:a.marketplace,blocks:[{text:`${h}`,copyContent:h,beforeCopyContent:o.jsx(le,{label:C}),afterCopyContent:o.jsx(ce,{label:P})}],tooltipOptions:{appendTo:document.body},tool:S})},exportTitle:r("history.product")},{title:r("history.searchtype"),field:"searchtype",width:140,render:a=>o.jsx("div",{children:a.historyType!==1?r("history.multiSearch"):r("history.singleSearch")})}],...u?[]:[{title:r("history.date"),field:"date",sortable:!0,render:a=>o.jsx("div",{children:Te(new Date(a.createdAt*1e3),"completeLong")})}],{title:"",field:"open",width:84,render:a=>o.jsx(x,{buttonType:"primary",onClick:()=>{var h;c==null||c({id:a.id.toString(),isSingleSearch:a.historyType===1,isAmazon:!((h=a.marketplace)!=null&&h.includes("WALMART")),createdAt:a.createdAt}),e()},children:r("common.open")})}]},_=d.div`
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
`,Fe=d(_)``,We={page:1,sortField:"id",sortDirection:"ASC",count:5,search:""},ze=({onClose:e,initialSearchString:s,searchVisible:t,tableSettings:n})=>{var F;const{t:i}=M(),[r,p]=m.useState(We),[u,c]=m.useState([]),b=m.useRef(null),{status:S,error:j}=v(l=>l),A=y(D(l=>{var f;return(f=l.props)==null?void 0:f.prepareRequestData})),{onFilter:k,marketplace:a,...h}=n||{},[g,C]=y(D(l=>{var f,W,z;return[((f=l.history)==null?void 0:f.data)??[],((z=(W=l.history)==null?void 0:W.meta)==null?void 0:z.total)??0]})),T=de(l=>(k==null||k(l,"initial"),p(l),v.action(A?A(l):Oe(l))),100),Q=N(l=>{var f;return l.status==="loading"?(f=l.payload)==null?void 0:f.searchId:null}),R=m.useCallback(l=>Ee.action({ids:l,tableData:r}),[r]),X=m.useCallback(()=>c([]),[]),Z=Re({onClose:e,hasCheckbox:(F=h.selected)==null?void 0:F.haveCheckbox,tableData:r,onDelete:X,ref:b}),ee=m.useMemo(()=>({getTitleText:({items:l,selected:f})=>f?i("history.titleTableSelected",{count:f}):i("history.titleTable",{count:l}),onChange:l=>c(l),value:u}),[u,i]),te=m.useMemo(()=>({errorState:j,searchVisible:t}),[j,t]),se=m.useCallback(l=>l.length?o.jsx(x,{onClick:()=>{R(l),c([])},buttonType:"secondary",children:i("common.delete")}):o.jsx(o.Fragment,{}),[R,i]),oe=m.useMemo(()=>({defaultValue:{sortField:"date",sortDirection:"DESC",count:5,search:s||"",page:1},haveInitial:!0}),[s]);return o.jsx(qe,{ref:b,children:o.jsx(Be,{name:"historyTable",marketplace:a,status:Q!=null||S==="loading"?"waiting":S,behavior:te,columns:Z,data:g,total:C,dimensions:Ge,selected:ee,leftActions:se,onFilter:T,filter:oe,...h})})},Ge={minHeight:300},Oe=({page:e,count:s,search:t,sortDirection:n,sortField:i})=>({...e?{page:e}:{},...s?{count:s}:{},...t?{search:t}:{},...n||i?{sort:`${n==="ASC"?"+":"-"}${i}`}:{}}),qe=d(we)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  min-height: 300px;
  width: 100%;
  margin-top: 32px;
  max-width: 100%;
  min-width: 0;
`,Dt=m.memo(({description:e,CustomButton:s,disabled:t,initialSearchString:n,searchVisible:i=!0,...r})=>{const{t:p}=M(),[u,c]=m.useState(!1),b=y(j=>j.props!==null),S=m.useCallback(()=>{c(!1)},[]);return m.useEffect(()=>{Ue.set(r)},[...Object.values(r)]),m.useEffect(()=>{u||v.clear()},[u]),o.jsxs(o.Fragment,{children:[s?o.jsx(s,{onClick:()=>c(!0)}):o.jsx(x,{buttonType:"tertiary",icon:o.jsx(B,{icon:pe}),onClick:()=>c(!0),disabled:t,children:p("history.title")}),o.jsx(Le,{isOpen:u,onClose:()=>c(!1),header:p("history.title"),size:"400",zIndex:1000001,footer:o.jsx(Ye,{children:o.jsx(x,{buttonType:"secondary",size:"200",onClick:()=>{c(!1)},children:p("common.close")})}),lockBody:!0,children:o.jsxs(o.Fragment,{children:[e&&o.jsx(Ve,{children:e}),b&&o.jsx(ze,{onClose:S,initialSearchString:n,searchVisible:i,tableSettings:r.tableSettings})]})})]})}),Le=d(G)`
  & > div > div > div {
    min-width: 0;
  }

  & header h2 {
    margin-bottom: 0;
  }

  & ${G.Wrapper} {
    position: relative;
    min-width: 0;
  }
`,Ye=d.div`
  display: flex;
  justify-content: flex-end;
`,Ve=d.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
`,_e=e=>({Adtomic:{title:"idashUpsellModal.addons.Adtomic.title",subtitle:"idashUpsellModal.addons.Adtomic.subtitle",pricePrefix:"idashUpsellModal.addons.startingAt",price:199,priceDetails:["idashUpsellModal.addons.Adtomic.priceDetails.adSpend"],featuresTitle:"idashUpsellModal.addons.Adtomic.featuresTitle",features:["idashUpsellModal.addons.Adtomic.features.maximizeROI","idashUpsellModal.addons.Adtomic.features.opportunities","idashUpsellModal.addons.Adtomic.features.improveACos","idashUpsellModal.addons.Adtomic.features.saveTime"]}});q("https://pzn-ads-ui.pacvue.com");const Ke="https://pages.helium10.com/adtomic-demo",Je=`${ue}/subscribe/edit-subscription`,$=Y(()=>({modal:null})),I=me($,"modal",{reaction:e=>{var s,t,n,i;if(e.type==="OPEN"){const{currentPlan:r,upsellPlan:p}=J((s=e.payload)==null?void 0:s.plan,(t=e.payload)==null?void 0:t.isChinese),u=(n=e.payload)==null?void 0:n.addon,c=(i=e.payload)==null?void 0:i.segmentEventProperties;V({eventName:"Upsell Modal Fired",eventProperties:{CurrentPlan:r,UpsellPlan:p,Addon:u,...c}})}}}),Qe=[w.SuperchargeYourBrand,w.SuperchargeYourBrandAnnual],Xe=[w.AdtomicScaleYourBusinessBundle,w.AdtomicScaleYourBusinessBundleAnnual],Ze={alacarte:"diamond",diamond:"elite",elite:"elite",enterprise:"enterprise",free:"diamond",gold:"diamond",platinum:"diamond",starter:"diamond"},K=e=>e?he[e]:"free",et=e=>e?Qe.includes(e):!1,tt=e=>{const s=K(e);return Ze[s]||"diamond"},st=e=>e?Xe.includes(e):!1,O=(e,s,t,n)=>{let i;return s?i=nt[e]:i=n?at[e]:ot[e],t?`Adtomic & ${i} Bundle`:i},ot={alacarte:"Alacarte",diamond:"Diamond",elite:"Elite",enterprise:"Enterprise",free:"Free",gold:"Gold",platinum:"Platinum",starter:"Starter"},nt={alacarte:"Alacarte",diamond:"Scale Your Business",elite:"Supercharge Your Brand",enterprise:"Enterprise",free:"Free",gold:"Start Your Business",platinum:"Start Your Business",starter:"Starter"},at={alacarte:"Alacarte",diamond:"Professional",elite:"Elite",enterprise:"Enterprise",free:"Free",gold:"Gold",platinum:"Entrepreneur",starter:"Explorer"},J=(e,s)=>{const t=K(e),n=et(e),i=tt(e),r=st(e),p=O(t,n,r,!!s),u=O(i,i==="elite",!1,!1);return{currentPlan:p,upsellPlan:u}},it=()=>m.useCallback((e,s)=>{var u;const t=$.getState().modal,{currentPlan:n,upsellPlan:i}=J(t==null?void 0:t.plan,t==null?void 0:t.isChinese),r=t==null?void 0:t.addon,p=t==null?void 0:t.segmentEventProperties;V({eventName:"Upsell Modal Addon Clicked",eventProperties:{CurrentPlan:n,UpsellPlan:i,Addon:r,"Button clicked":e,...p}}),(u=window.open(U(s,{}),"_blank"))==null||u.focus()},[]),rt=({addon:e="Adtomic",modalProps:s})=>{const{t}=M(),n=m.useMemo(()=>_e()[e],[e]),i=it();return o.jsxs(ye,{size:"100",lockBody:!0,...s,title:t(n.title),footer:o.jsxs(St,{children:[o.jsx(x,{type:"button",buttonType:"text",size:"200",nonce:"",onClick:s==null?void 0:s.onClose,children:t("idashUpsellModal.buttons.dismiss")}),o.jsxs(jt,{children:[o.jsx(x,{type:"button",buttonType:"secondary",size:"200",nonce:"",onClick:()=>i("Book a Demo",Ke),children:t("idashUpsellModal.buttons.bookDemo")}),o.jsx(x,{type:"button",size:"200",nonce:"",onClick:()=>i("Buy Now",Je),children:t("idashUpsellModal.buttons.buyNow")})]})]}),children:[o.jsx(ct,{children:t(n.subtitle)}),o.jsxs(lt,{padding:"normal",children:[o.jsxs(dt,{children:[o.jsxs(pt,{children:[n.pricePrefix!=null&&o.jsx(H,{children:t(n.pricePrefix)}),o.jsxs(ut,{children:[o.jsx(mt,{children:fe({amount:n.price,isRounded:!0})}),o.jsx(ht,{children:t("idashUpsellModal.prices.monthly")})]}),n.priceSuffix!=null&&o.jsx(H,{children:t(n.priceSuffix)})]}),n.priceDetails.map((r,p)=>o.jsx(H,{children:t(r)},p))]}),o.jsxs(yt,{children:[o.jsx(ft,{children:t(n.featuresTitle)}),o.jsx(gt,{children:n.features.map((r,p)=>o.jsxs(xt,{children:[o.jsx(bt,{icon:ge}),t(r)]},p))})]})]})]})},lt=d(Pe)`
  margin-top: ${e=>e.theme.spacing.sp24};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${e=>e.theme.spacing.sp16};

  ${xe.mobile} {
    grid-template-columns: 156px 1fr;
    grid-gap: ${e=>e.theme.spacing.sp32};
  }
`,ct=d.div`
  ${be};
  color: ${e=>e.theme.systemColors.grey600};
`,dt=d.div`
  border-radius: 6px;
  background-color: ${e=>e.theme.systemColors.blue50};
  padding: ${e=>e.theme.spacing.sp12};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp24};
  min-height: 156px;
`,pt=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ut=d.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
`,mt=d.div`
  ${Se};
`,ht=d.div`
  ${je};
  color: ${e=>e.theme.systemColors.black};
`,H=d.div`
  ${Ce};
`,yt=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,ft=d.div`
  ${Ae};
`,gt=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
`,xt=d.div`
  ${ke};
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.sp8};
`,bt=d(B)`
  color: ${e=>e.theme.systemColors.green600};
  font-size: 16px;
`,St=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp24};
`,jt=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.sp8};
  padding-top: ${e=>e.theme.spacing.sp8};
`,vt=()=>{const e=$(u=>{var c;return(c=u.modal)==null?void 0:c.addon}),s=$(u=>{var c;return(c=u.modal)==null?void 0:c.segmentEventProperties}),[t,n]=I(),i=m.useMemo(()=>({isOpen:t&&e==null}),[e,t]),r=m.useMemo(()=>({isOpen:t&&e!=null,onClose:I.close,lockBody:!0}),[e,t]);let p;return(s==null?void 0:s.tool)==="cerebro"&&(p={location:s==null?void 0:s.Location,trigger:s==null?void 0:s.Trigger}),o.jsxs(o.Fragment,{children:[o.jsx(Me,{data:{tool:"insightsDashboard"},modalProps:i,onDecline:I.close,segmentProps:p}),o.jsx(rt,{addon:e,modalProps:r})]})};export{Dt as H,vt as I,$ as a,J as g,V as t,I as u};
//# sourceMappingURL=IDASHUpsellModal-aeZozMyz.js.map
