import{j as o,u as i,I,H as me,V as Z,N as x,A as J,a8 as ge,ah as ee,aB as he,G as T,d8 as xe,d9 as fe,da as be,db as ye,c3 as Se,w as h,r as m,x as C,$ as Pe,bc as $e,aM as Ie,Q as ke,aW as E,bi as je,Z as te,ba as Ce,S as Ae,K as se,g as L,P as oe,M as ne,dc as ae,b9 as ve,a as y,c as ce,e as j,E as Te,a6 as we,a4 as Be,f as Re,ap as De,ch as Ee,a3 as Le}from"./index-tEWTe_cM.js";import{U as Ue,g as ze}from"./getUpsellData-siUtjfVt.js";import{r as ie}from"./redirectToSubscribe-S6QlkQEz.js";import{L as Me}from"./useAutoPlay-8WOcIzK4.js";import{L as _e}from"./ExtendedProductSummary-Rm3yeme_.js";import{c as Ne,b as g,p as B,A as Fe,a as Oe,E as We}from"./EditProductIdeaName-KItQ9rLb.js";import{l as He,S as Ge}from"./StatusChip-EV3h8ZPz.js";import{l as qe,N as Ve}from"./NewRadio-DIL_Ez7J.js";import{t as Ke,e as V,ab as Ye,E as Qe,C as Xe,P as Ze}from"./Learn-ZI4QJ8Ms.js";import{t as Je}from"./IDASHUpsellModal-9iMRBwwd.js";import{d as re,L as et,l as tt,U as st,m as ot,s as nt}from"./SearchGraphModal-8Lh4F5Sv.js";import{a as at}from"./use-onclickoutside.browser.esm-BisD5Fdu.js";const _s=({data:e,onUpgrade:t})=>{const s=()=>{t&&t(),ie({})};return o.jsxs(ct,{children:[o.jsxs(it,{children:[o.jsx(lt,{children:e.title}),e.subtitle&&o.jsx(dt,{children:e.subtitle}),o.jsx(pt,{buttonType:"primary",size:"200",onClick:s,children:e.upgradeButton})]}),o.jsx(rt,{children:o.jsx(Ue,{plans:e.plans,features:e.features})})]})},ct=i.div`
  width: 100%;
  max-width: 1117px;
  display: grid;
  grid-template-columns: 1fr;

  ${I.largeDesktop} {
    grid-template-columns: 1fr 664px;
    grid-column-gap: 64px;
  }
`,it=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${I.largeDesktop} {
    max-width: 324px;
  }
`,rt=i.div`
  border-radius: 6px;
  border: solid 1px #d9e0e8;
  padding: ${({theme:{spacing:e}})=>`${e.sp32} ${e.sp32} ${e.sp48}`};
`,lt=i.h2`
  ${me};
  text-align: center;

  ${I.largeDesktop} {
    text-align: left;
  }
`,dt=i.p`
  ${Z};
  color: ${({theme:e})=>e.systemColors.grey600};
  margin-top: ${({theme:e})=>e.spacing.sp16};
  text-align: center;

  ${I.largeDesktop} {
    text-align: left;
  }
`,pt=i(x)`
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  align-self: center;

  ${I.largeDesktop} {
    margin-top: ${({theme:e})=>e.spacing.sp32};
    align-self: flex-start;
    margin-bottom: 0;
  }
`,U=[5,10,25,50],ut={page:1,count:U[0],search:"",sortDirection:"DESC",sortField:"updatedAt"},mt="add-product-idea",gt=(e,t)=>{t&&Ke.warning(o.jsx(Ne,{count:t,eventType:"duplicates",itemType:e}))},ht={props:null,step:"list",checks:null,table:null,tableFilter:ut,successData:null,selected:null,createProductIdea:null,addKeywordsOrCompetitors:null},r=J(()=>ht),xt=qe(r),f=ge(r,"props",{reaction:async({type:e})=>{e==="OPEN"&&de.action()}}),le=ee(r,"selected"),z=ee(r,"step",{patchEffect:e=>e==="list"?{selected:null}:{}}),ft=()=>{var t;((t=r.getState().checks)==null?void 0:t.hasActiveIdeas)??!1?z.set("list"):f.close()},K=he(r,"successData"),bt=({id:e,name:t,added:s,duplicates:n})=>{const c=r.getState().props;c&&(s&&s>0?c.type==="competitors"?K.set({id:e,name:t,count:s??0}):K.set({id:e,name:t,count:s??0}):f.close(),gt(c.type,n)),z.set("success")},de=T(r,"checks",async e=>{var l;const{page:t,sortField:s,sortDirection:n}=r.getState().tableFilter,a=(l=r.getState().props)==null?void 0:l.marketplace,c=`${n==="DESC"?"-":""}${s}`,[p,d]=await Promise.all([g.getList({page:1,perPage:1,"filter[name]":"",sort:c}),g.getList({page:t,perPage:1,sort:c,"filter[name]":"","filter[marketplace]":a,"filter[statuses]":[g.IDEA_STATUS.IN_PROGRESS,g.IDEA_STATUS.IN_REVIEW,g.IDEA_STATUS.BLOCKED]})]);return{hasIdeas:!!p.meta.totalItems,hasActiveIdeas:!!d.meta.totalItems}},{fulfilled:({result:e})=>{e.hasActiveIdeas&&A.action()}}),A=He(r,"table",async e=>{var l;const{page:t,search:s,count:n,sortField:a,sortDirection:c}=r.getState().tableFilter,p=`${c==="DESC"?"-":""}${a}`,d=(l=r.getState().props)==null?void 0:l.marketplace;return g.getList({page:t,perPage:n,"filter[name]":s,"filter[marketplace]":d,sort:p})},{fulfilled:({result:e})=>{const t=r.getState().selected;t&&!e.data.map(s=>s.id).includes(t.id)&&le.set(null)}}),v=A.createFilter("tableFilter",{patchEffect:e=>{const t=r.getState().tableFilter;return e.search!==""&&e.search.length<3?{tableFilter:t}:t.search!==e.search||t.count!==e.count?{tableFilter:{...e,page:1}}:{tableFilter:e}}}),Y=T(r,"createProductIdea",async({name:e})=>{var s;const t=(s=r.getState().props)==null?void 0:s.marketplace;return t?g.create({name:e,marketplace:t}):null},{fulfilled:({payload:e,result:t})=>{var a;const s=t==null?void 0:t.data.id;s&&R.action({id:s,name:e.name});const n=(a=r.getState().props)==null?void 0:a.seSource;s&&n&&Je({eventName:"PID_Create",eventProperties:{from:n}})},rejected:({fetchError:e})=>{var t;((t=e==null?void 0:e.result)==null?void 0:t.message)==="This action is unauthorized."&&B({type:"ideas"})}}),R=T(r,"addKeywordsOrCompetitors",async({id:e})=>{var n;const t=r.getState().props,s=e??((n=r.getState().selected)==null?void 0:n.id);return!t||!s?null:t.type==="competitors"?Fe.batchAdd({ideaId:s,asins:t.competitors,source:t.source}):Oe.batchAdd({ideaId:s,phrases:t.keywords,source:t.source})},{fulfilled:({payload:{id:e,name:t},result:s})=>{const n=r.getState().selected,a=e??(n==null?void 0:n.id),c=t??(n==null?void 0:n.name);a!=null&&c!=null&&bt({id:a,name:c,added:s==null?void 0:s.data.new,duplicates:s==null?void 0:s.data.duplicates})},rejected:({fetchError:e})=>{var n;const t=r.getState().props,s=(n=e==null?void 0:e.result)==null?void 0:n.message;(t==null?void 0:t.type)==="keywords"&&s&&s.includes("You exceeded keywords ideas limit")&&B({type:"keywords"}),(t==null?void 0:t.type)==="competitors"&&s&&s.includes("You exceeded products ideas limit")&&B({type:"competitors"})}}),yt=()=>o.jsx(St,{children:o.jsx(Me,{})}),St=i.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${e=>e.theme.spacing.sp24};
`,Pt={[g.IDEA_STATUS.ARCHIVED]:{type:"disabled",icon:xe},[g.IDEA_STATUS.BLOCKED]:{type:"error",icon:fe},[g.IDEA_STATUS.IN_PROGRESS]:{type:"enabled",icon:be},[g.IDEA_STATUS.IN_REVIEW]:{type:"paused",icon:ye},[g.IDEA_STATUS.DONE]:{type:"success",icon:Se}},$t=()=>{const{t:e}=h();return m.useMemo(()=>[{field:"select",title:"",noHeader:!0,static:40,render:t=>o.jsx(It,{data:t}),contentPosition:"center"},{field:"name",title:e("addProductIdea.list.columns.ideaName"),static:220,responsive:!0,sortable:!0,render:t=>o.jsx(kt,{text:t.name})},{field:"status",title:e("addProductIdea.list.columns.status"),responsive:!0,sortable:!0,render:({status:t})=>{const s=Pt[t];return o.jsx(Ge,{type:s==null?void 0:s.type,icon:o.jsx(C,{icon:s==null?void 0:s.icon}),children:e(`addProductIdea.statuses.${t}.title`)})}},{field:"updatedAt",title:e("addProductIdea.list.columns.lastUpdated"),responsive:!0,sortable:!0,contentPosition:"right",render:({updatedAt:t})=>`${V(new Date(t),"standard")} ${V(new Date(t),"time")}`}],[e])},It=({data:e})=>{const t=r(s=>s.selected);return o.jsx(Ve,{checked:(t==null?void 0:t.id)===e.id,onClick:()=>le.set(e)})},kt=i(_e)`
  ${Pe};
  color: ${e=>e.theme.systemColors.black};
`,jt=({options:e,value:t,onChange:s,status:n})=>{const{t:a}=$e();return n==="loading"?o.jsx(At,{}):o.jsxs(pe,{children:[o.jsx(Ct,{children:a("table.rowLimit")}),o.jsx(Ie,{size:"100",value:{value:t,label:String(t)},options:e.map(c=>({value:c,label:c.toString()})),onChange:c=>{s(c.value)},appendTo:void 0})]})},pe=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Ct=i.span`
  ${ke}
`,At=()=>o.jsxs(pe,{children:[o.jsx(vt,{}),o.jsx(Tt,{})]}),vt=i(E)`
  width: 98px;
  height: 14px;
`,Tt=i(E)`
  width: 70px;
  height: 32px;
`,wt=()=>{const e=r(a=>{var c;return((c=a.table)==null?void 0:c.meta.totalItems)??0}),t=A(a=>a.status),s=r(a=>a.tableFilter.count),n=r(a=>a.tableFilter.page);return m.useCallback(()=>o.jsxs(Bt,{children:[t!=="loading"?o.jsx(Ye,{size:"100",pageCount:Math.ceil(e/s),onPageChange:a=>{v.patch({page:a.selected+1})},status:t,locked:!1,forcePage:n-1}):o.jsx(Dt,{}),o.jsx(jt,{options:U,value:s,onChange:a=>v.patch({count:a}),status:t})]}),[n,s,t,e])},Bt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp16};
  padding: ${e=>e.theme.spacing.sp12} ${e=>e.theme.spacing.sp24};
`,Rt=[...new Array(3)].map((e,t)=>t),Dt=()=>o.jsx(Lt,{children:Rt.map(e=>o.jsx(Et,{},e))}),Et=i(E)`
  width: 32px;
  height: 32px;
`,Lt=i.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
  justify-content: center;
  text-size-adjust: 100%;
`,Ut=()=>{const e=$t(),t=r(d=>{var l;return((l=d.table)==null?void 0:l.data)??[]}),s=r(d=>{var l;return((l=d.table)==null?void 0:l.meta.totalItems)??0}),n=A(d=>d.status),a=r(d=>d.tableFilter),c=m.useMemo(()=>({value:a}),[a]),p=wt();return o.jsx(Qe,{name:mt,columns:e,status:n,data:t,total:s,dimensions:zt,behavior:Mt,selected:_t,filter:c,onFilter:v.set,footer:p})},zt={minHeight:240,maxHeight:550},Mt={searchVisible:!1,noHeader:!0,itemsPerPage:U},_t={haveCheckbox:!1},Nt=()=>{const{t:e}=h(),t=r(d=>d.tableFilter.search??""),s=A(d=>d.status==="loading"),[n,a]=m.useState(t),c=je(d=>v.patch({search:d}),500),p=d=>{const l=d.target.value;a(d.target.value),c(l)};return o.jsx(Xe,{value:n,onChange:p,placeholder:e("addProductIdea.list.searchPlaceholder"),disabled:s})},Ft=()=>{const{t:e}=h();return o.jsxs(Ot,{children:[o.jsxs(Wt,{children:[e("addProductIdea.list.ideasInProgress"),o.jsx(Nt,{})]}),o.jsx(Ut,{})]})},Ot=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
`,Wt=i.div`
  ${te};
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp8};
`,Ht=()=>{const{t:e}=h(),t=r(n=>n.selected!=null),s=R(n=>n.status==="loading");return o.jsxs(Gt,{children:[o.jsx(Vt,{type:"button",buttonType:"cancel",size:"200",onClick:f.close,children:e("common.cancel")}),o.jsxs(qt,{children:[o.jsx(x,{type:"button",buttonType:"secondary",size:"200",onClick:()=>z.set("addNew"),icon:o.jsx(C,{icon:Ce}),children:e("addProductIdea.list.newProductIdea")}),o.jsx(x,{type:"button",size:"200",disabled:!t||s,onClick:()=>R.action({}),loading:s,children:e("common.save")})]})]})},Gt=i.div`
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp24};
`,qt=i.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
`,Vt=i(x)`
  padding-left: 0;
  padding-right: 0;
`,Kt=()=>{const{t:e}=h();return o.jsxs(Yt,{children:[o.jsx(Qt,{children:e("addProductIdea.list.title")}),o.jsx(Xt,{children:e("addProductIdea.list.subtitle")})]})},Yt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,Qt=i.div`
  ${Ae};
`,Xt=i.div`
  ${se};
`,Zt=`${oe}/dashboard`,Jt="product-ideas",es=`${Zt}/${Jt}`,ts=e=>L(`${es}/${e}/keywords`,{}),ss=()=>{const{t:e}=h(),t=r(n=>{var a;return((a=n.props)==null?void 0:a.type)==="competitors"}),s=r(n=>n.successData);return o.jsxs(os,{children:[o.jsxs(ns,{children:[o.jsx(as,{children:e(`addProductIdea.success.${t?"competitors":"keywords"}`,{count:(s==null?void 0:s.count)??0,number:(s==null?void 0:s.count)??0})}),o.jsxs(cs,{children:["‘",s==null?void 0:s.name,"’"]})]}),o.jsxs(is,{children:[o.jsx(x,{type:"button",buttonType:"text",size:"200",onClick:f.close,children:e("common.dismiss")}),o.jsx(rs,{href:ts((s==null?void 0:s.id)??0),children:o.jsx(x,{type:"button",size:"200",onClick:f.close,children:e("addProductIdea.success.openProductIdea")})})]})]})},os=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp32};
`,ns=i.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,as=i.div`
  ${Z};
  color: ${e=>e.theme.systemColors.grey600};
  text-align: center;
`,cs=i.div`
  ${te};
  text-align: center;
`,is=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sp24};
`,rs=i.a`
  text-decoration: none;
`,Ns=()=>{const[e]=f(),t=de(u=>u.status!=="loading"),s=r(u=>u.step),n=r(u=>{var S;return!((S=u.checks)!=null&&S.hasIdeas)}),a=t?s:"loading",c=m.useMemo(()=>ls[a],[a]),p=m.useMemo(()=>ds[a],[a]),d=m.useMemo(()=>ps[a],[a]),l=Y(u=>u.status),b=m.useMemo(()=>({list:o.jsx(Ft,{}),addNew:o.jsx(We,{onCancel:ft,onChange:u=>Y.action({name:u}),status:l,isFirst:n}),success:o.jsx(ss,{}),loading:o.jsx(yt,{})}),[l,n]),$=m.useMemo(()=>b[a],[b,a]);return o.jsxs(ne,{isOpen:e,onClose:c,title:p,footer:d,children:[$,e&&o.jsx(xt,{})]})},ls={list:f.close,loading:f.close},ds={list:o.jsx(Kt,{})},ps={list:o.jsx(Ht,{})},Fs=({params:e,onClick:t,...s})=>{const{t:n}=h();return o.jsx(x,{onClick:a=>{t==null||t(a),f.open(e)},icon:o.jsx(us,{icon:ae}),buttonType:"secondary",...s,children:n("addProductIdea.button.text")})},us=i(C)``,Os=i(({params:e,className:t,...s})=>{const{t:n}=h();return o.jsxs(ms,{onClick:a=>{var c;(c=s.onClick)==null||c.call(s,a),f.open(e)},className:t,children:[o.jsx(gs,{icon:ae}),n("addProductIdea.button.text")]})})``,ms=i(Ze.Item)`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  color: ${e=>e.theme.systemColors.grey600};
`,gs=i(C)`
  font-size: 16px;
`,hs=({onClick:e,disabled:t,locked:s,buttonType:n})=>{const{t:a}=h(),c=n==="listingAnalyzerOld";return o.jsxs(bs,{onClick:e,disabled:t,big:c,children:[s&&o.jsx(fs,{$type:"tertiary",$disabled:t,big:c,children:o.jsx(C,{icon:ve})}),a("bulkReport.button")]})},xs={primary:y`
    color: ${({theme:e})=>e.systemColors.blue600};
    background-color: ${({theme:e})=>e.systemColors.white};
  `,secondary:y`
    color: ${({theme:e})=>e.systemColors.white};
    background-color: ${({theme:e})=>e.systemColors.blue600};
  `,tertiary:y`
    color: ${({theme:e})=>e.systemColors.white};
    background-color: ${({theme:e})=>e.systemColors.grey400};
  `,text:y`
    color: ${({theme:e})=>e.systemColors.blue600};
    background-color: ${({theme:e})=>e.systemColors.white};
  `,icon:y`
    color: ${({theme:e})=>e.systemColors.grey600};
    background-color: transparent;
  `,cancel:y`
    color: ${({theme:e})=>e.systemColors.black};
    background-color: transparent;
  `},fs=i.div`
  margin-right: 6px;
  margin-left: ${e=>e.big?4:0}px;
  width: 22px;
  height: 22px;
  border-radius: 22px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  ${e=>xs[e.$type]}

  ${e=>e.$disabled&&y`
      color: ${({theme:t})=>t.systemColors.white};
      background-color: ${({theme:t})=>t.systemColors.grey300};
    `}
`,bs=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  transition: all 0.2s ease-in-out;
  border-width: 1px;
  border-style: solid;
  line-height: 1.2;
  border-radius: 4px;
  font-weight: 400;
  outline: none;
  cursor: pointer;

  &:active,
  :disabled {
    cursor: auto;
  }

  &:active {
    opacity: 0.8;
  }

  > svg {
    margin-right: 8px;
  }

  background-color: #ffffff;
  border-color: rgb(221, 221, 221);

  :disabled {
    opacity: 0.5;
  }

  ${({big:e})=>e?y`
          height: 36px;
          padding: 7px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #6a6c6f;
        `:y`
          height: 34px;
          font-weight: 700;
          font-size: 13px;
          line-height: 18px;
          padding: 5px;
          color: #343a40;
        `}
`,w=re("bulkReportModal",void 0),ys=L(`${oe}/cerebro-old/cerebro-bulk-export/cerebro-bulk-export`,{}),Ws=({link:e=ys,disabled:t,locked:s,anythingElseText:n,buttonProps:a={},buttonType:c="cerebro",project:p="cerebro",restrictedActionsStatus:d="init"})=>{const{t:l}=h(),{sendSegmentEvent:b}=tt(),{isOpen:$}=ce(w.atom),u=j(()=>(b({eventName:"Bulk Report button clicked",eventProperties:{tool:Q[p]}}),w.open()),[b,p]),S=j(w.close),k=m.useCallback(()=>{var P;s||(P=window.open(e,"_blank"))==null||P.focus()},[e,s]);return p==="cerebro"||d==="loaded"&&s?o.jsxs(o.Fragment,{children:[o.jsx("div",{children:o.jsx(Te,{content:l("bulkReport.tooltip"),delay:[500,0],appendTo:document.body,zIndex:1001,children:o.jsx("div",{onClick:s?u:void 0,children:c==="cerebro"?o.jsx(et,{size:"100",onClick:k,disabled:t,locked:s,buttonType:s?"tertiary":"primary",...a,children:l("bulkReport.button")}):o.jsx(hs,{onClick:k,disabled:t,locked:s,buttonType:c})})})}),s&&o.jsx(ne,{size:"50",zIndex:1e4,isOpen:$,onClose:S,title:l(`bulkReport.modal.${p}.title`),subtitle:o.jsx(Ss,{dangerouslySetInnerHTML:{__html:l(`bulkReport.modal.${p}.text`)}}),children:o.jsxs(Ps,{children:[o.jsx(x,{buttonType:"secondary",size:"200",onClick:S,children:l("bulkReport.modal.notRightNow")}),o.jsx(x,{size:"200",onClick:()=>{var P;b({eventName:"Bulk Report Contact Us button clicked",eventProperties:{tool:Q[p]}}),(P=window.open(we("https://www.helium10.com/pricing/contact-enterprise/"+(n?"?":"")+Be.stringify({...n?{anythingElse:n}:{}})),"_blank"))==null||P.focus()},children:l("bulkReport.modal.contactUs")})]})})]}):null},Q={cerebro:"cerebro",blackBox:"blackbox",listingAnalyzer:"listing-analyzer"},Ss=i.div``,Ps=i.div`
  padding-top: ${({theme:e})=>e.spacing.sp16};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp8};
  }
`,D=re("listingAnalyzerLimitUpsellModal",{planGroup:"free",isChinesePlans:!1}),Hs=()=>{const{isOpen:e}=ce(D.atom),t=j(D.close);return o.jsx(st,{data:{type:"usesLimitReached",toolTitle:"Listing Analyzer"},modalProps:{isOpen:e},onDecline:t})},$s=async()=>Re({url:L("/listing-analyzer/la-api/balance",{}),method:"GET",withCredentials:0}),Is=at("getListingAnalyzerBalance",async({onSuccess:e})=>$s(),{fulfilledReaction:({result:{left:e},params:{onSuccess:t}})=>{t(e)}}),Gs=({isChinesePlans:e,onOpen:t,onAccept:s})=>{const n=De(Ee),a=j(Is.pending);return{openUpsellModal:j(()=>D.open({planGroup:n,isChinesePlans:e,onOpen:t,onAccept:s}),[n]),getBalance:a}},ue=J(()=>({currentAndRecommended:null})),X=T(ue,"currentAndRecommended",(e,t)=>ze(e,t==null?void 0:t.signal)),ks=({data:e,onClick:t})=>{const{t:s}=h(),[n,a,c,p]=ue(l=>{var b,$,u,S,k,P,M,_,N,F,O,W,H,G,q;return[(S=(u=($=(b=l.currentAndRecommended)==null?void 0:b.data)==null?void 0:$.recommendation)==null?void 0:u.offer)==null?void 0:S.key,(_=(M=(P=(k=l.currentAndRecommended)==null?void 0:k.data)==null?void 0:P.recommendation)==null?void 0:M.offer)==null?void 0:_.action,(W=(O=(F=(N=l.currentAndRecommended)==null?void 0:N.data)==null?void 0:F.recommendation)==null?void 0:O.plan)==null?void 0:W.title,(q=(G=(H=l.currentAndRecommended)==null?void 0:H.data)==null?void 0:G.recommendation)==null?void 0:q.queryStringParameters]});m.useEffect(()=>(e!=null&&e.tool&&X.action({location:ot[e==null?void 0:e.tool]??(e==null?void 0:e.tool),isButton:!0}),()=>{X.clear()}),[e==null?void 0:e.tool]);const d=m.useCallback(()=>{Promise.all([t==null?void 0:t()]).finally(()=>{ie({key:n,action:a,queryStringParameters:p})})},[t,n,a,p]);return o.jsx(x,{loading:!c,disabled:!c,onClick:d,children:s("currentAndRecommended.upsellButton.title",{recommendedPlanTitle:c||""})})},qs=m.memo(({uses:e})=>{const{t}=h(),s="blackBoxProducts";return o.jsxs(js,{children:[o.jsx(Cs,{dangerouslySetInnerHTML:{__html:t("currentAndRecommended.upsellBanner.experimentText",{uses:e})}}),o.jsx(ks,{data:{tool:s},onClick:()=>Le({name:"Upsell Banner Clicked",properties:{tool:nt[s]}})})]})}),js=i.div`
  background-color: ${({theme:e})=>e.systemColors.blue50};
  padding: ${({theme:e})=>e.spacing.sp12};
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 -16px;

  ${I.desktop} {
    margin: 0 -40px;
  }
`,Cs=i.div`
  ${se};
  margin-right: ${({theme:e})=>e.spacing.sp24};
  color: ${({theme:e})=>e.systemColors.black};
`;export{Ns as A,Ws as B,Hs as L,ks as R,Fs as S,_s as U,Os as a,f as b,qs as c,js as d,Cs as e,D as l,Pt as p,Q as r,Gs as u};
//# sourceMappingURL=RecommendedPlanUpsellButton-l-ByuByL.js.map
