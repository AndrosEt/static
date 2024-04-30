import{j as o,u as r,I as R,H as lt,V as Ne,N as $,f as D,g as _,a5 as Le,ch as Ee,ap as K,w as f,ad as dt,aJ as De,A as G,a8 as Re,G as q,aC as W,aN as pt,E as fe,a2 as ut,d8 as mt,x as C,Q as J,$ as z,a as S,r as h,cr as gt,cD as ht,cq as xt,b1 as ft,d9 as yt,aK as F,aU as E,aj as P,aL as Q,da as ze,ak as ae,aM as ye,bd as bt,bz as Fe,db as Ue,cB as jt,dc as St,P as be,aq as $t,dd as vt,aG as kt,aH as Tt,de as At,a9 as wt,ah as Ke,aB as Ct,df as It,dg as Pt,dh as _t,di as Bt,c3 as Mt,bc as Nt,aW as je,bi as Lt,Z as Oe,ba as Et,S as Dt,K as Ge,M as qe,dj as We,b9 as Rt,c as Ve,e as O,a6 as zt,a4 as Ft,a3 as Ut}from"./index-3WWdADc-.js";import{U as Kt,T as Ot,g as Gt}from"./getMarketplaceLinkForProduct-A-zEKrnh.js";import{r as He}from"./redirectToSubscribe-18BB2MSS.js";import{b as Se,I as qt,u as Wt,t as Vt}from"./HistoryButton-38bzMA4-.js";import{s as Ht,L as Ze,d as Ye,l as Zt,U as Yt,m as Jt,n as Qt}from"./SearchGraphModal-Qx3Zfqc8.js";import{t as ie,T as Xt,g as es,a3 as ts,C as Je,P as Qe,e as Ae,ab as ss,E as os}from"./Learn-iEpSD2rS.js";import{l as H,S as ns}from"./StatusChip-FrPKlZU9.js";import{T as as}from"./TagsMultiSelect-PKy7h-4F.js";import{g as is}from"./getCurrencySymbol-f-JVoba0.js";import{N as Xe,l as rs}from"./NewRadio-r0LBmnQI.js";import{G as cs}from"./GoogleAdsLogo-aN0nJl0u.js";import{L as ls}from"./useAutoPlay-ceAGW3YF.js";import{L as ds}from"./ExtendedProductSummary-BHNYmxm-.js";import{c as ps,b as k,p as re,A as us,a as ms,E as gs}from"./EditProductIdeaName-gWrXHheR.js";import{a as hs}from"./use-onclickoutside.browser.esm-FI41Hp9Z.js";const pa=({data:e,onUpgrade:t})=>{const s=()=>{t&&t(),He({})};return o.jsxs(xs,{children:[o.jsxs(fs,{children:[o.jsx(bs,{children:e.title}),e.subtitle&&o.jsx(js,{children:e.subtitle}),o.jsx(Ss,{buttonType:"primary",size:"200",onClick:s,children:e.upgradeButton})]}),o.jsx(ys,{children:o.jsx(Kt,{plans:e.plans,features:e.features})})]})},xs=r.div`
  width: 100%;
  max-width: 1117px;
  display: grid;
  grid-template-columns: 1fr;

  ${R.largeDesktop} {
    grid-template-columns: 1fr 664px;
    grid-column-gap: 64px;
  }
`,fs=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${R.largeDesktop} {
    max-width: 324px;
  }
`,ys=r.div`
  border-radius: 6px;
  border: solid 1px #d9e0e8;
  padding: ${({theme:{spacing:e}})=>`${e.sp32} ${e.sp32} ${e.sp48}`};
`,bs=r.h2`
  ${lt};
  text-align: center;

  ${R.largeDesktop} {
    text-align: left;
  }
`,js=r.p`
  ${Ne};
  color: ${({theme:e})=>e.systemColors.grey600};
  margin-top: ${({theme:e})=>e.spacing.sp16};
  text-align: center;

  ${R.largeDesktop} {
    text-align: left;
  }
`,Ss=r($)`
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  align-self: center;

  ${R.largeDesktop} {
    margin-top: ${({theme:e})=>e.spacing.sp32};
    align-self: flex-start;
    margin-bottom: 0;
  }
`;var A;(function(e){const t=Se+"/v1/keywords";e.matchTypes=["broad","exact","phrase"],e.negativeMatchTypes=["negativeExact","negativePhrase"],e.isNegative=s=>s==="negativeAsin"||e.negativeMatchTypes.includes(s),e.addTargetKeywords=({params:s,urlParams:n},a)=>D({method:"POST",url:_(t,n),useSessionAccountId:!0,signal:a,params:s}),e.addNegativeKeywords=({params:s,urlParams:n},a)=>D({method:"POST",url:_(`${t}/adgroup-negative`,n),useSessionAccountId:!0,signal:a,params:s})})(A||(A={}));const $s=e=>vs[e],vs={broad:"Broad",exact:"Exact",phrase:"Phrase",negativeExact:"Negative_Exact",negativePhrase:"Negative_Phrase"},ce=({eventName:e,eventProperties:t})=>{const s=Le(),n=Ee(K.getState());Ht({eventName:e,eventProperties:{userID:String(s),plan:n,...t}})},ks=()=>{const{t:e}=f(),t=Le();return o.jsx($,{disabled:t==null,type:"button",buttonType:"text",onClick:()=>{window.open(`https://adtomic.helium10.com/panel/${t}/changelog?engine=pvu`,"_blank")},children:e("addKeywordsToAdtomic.toastMessage.changeLog")})},we=(e,t)=>{var n;const s=(n=dt.getState().translation)==null?void 0:n.t;s&&(e==="error"?ie.error:ie.success)(o.jsxs("div",{children:[o.jsx(Xt,{children:s(`addKeywordsToAdtomic.toastMessage.${e}.title.${t}`)}),o.jsx(es,{children:s(`addKeywordsToAdtomic.toastMessage.${e}.text.${t}`,{nodes:e==="success"?[o.jsx(ks,{},"1")]:[]})})]}))},[U,Ts]=De(({useProps:e})=>{const t=G(()=>({modal:null,request:null})),s=Re(t,"modal"),n=q(t,"request",async({profileId:a,adgroupIds:i,matchType:c,useSuggestedBid:l,bid:d})=>{const p=A.isNegative(c),x=e.getState().keywords,u={params:(i??[]).map(b=>x.map(I=>({keyword_text:I,adgroup_id:b,match_type:c,...p?{}:{bid:l==="true"?null:Number(d)}}))).flat(),urlParams:{profile_id:(a==null?void 0:a.value)??""}};return(p?A.addNegativeKeywords:A.addTargetKeywords)(u)},{fulfilled:({payload:a})=>{var d,p,x;const i=A.isNegative(a.matchType);we("success",i?"negativeKeywords":"keywords");const{segmentEvents:c,profilesData:l}=e.getState();if(c.type!="custom"){const g=a.profileId,u=(d=l==null?void 0:l.data.accounts.map(b=>b.profiles).flat().filter(b=>b.id===(g==null?void 0:g.id)))==null?void 0:d[0],y=(p=a.adgroupIds)==null?void 0:p[0];u&&y&&ce({eventName:c.type==="cerebro"?"Cerebro Keyword to Adtomic Added":"My List Keyword to Adtomic Added",eventProperties:{marketplace:W("store",u.marketplace_string_id).domain??c.marketplace??"amazon.com",matchType:$s(a.matchType),...a.bid!==void 0?{bid:a.bid!=null?Number(a.bid):"suggested"}:{}}})}else(x=c.onAdd)==null||x.call(c);s.close()},rejected:({payload:a})=>{const i=A.isNegative(a.matchType);we("error",i?"negativeKeywords":"keywords")}});return{useProps:e,useStore:t,useModal:s,useRequest:n}});var Z;(function(e){const t=Se+"/v1/adgroups";e.getAdGroupsTitles=s=>D({method:"GET",url:_(`${t}/titles`,{...s},{arrayFormat:"index"}),useSessionAccountId:!0}),e.getAdGroupWithCampaign=s=>({campaign:{name:s.campaign_name,campaignType:s.campaign_type,targetingType:s.targeting_type,dailyBudget:0,id:s.campaign_id,campaignState:s.state},adgroup:{name:s.name,state:s.state,campaign_name:s.campaign_name,campaign_id:s.campaign_id,default_bid:s.default_bid,id:s.id}})})(Z||(Z={}));const et=r(({children:e,className:t})=>{const{isOverflown:s,checkOverflown:n}=pt();return o.jsx(Ot,{content:s?void 0:e,children:o.jsx(As,{onMouseEnter:n,className:t,children:e})})})``,As=r.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
`,[tt,ws]=De(({useProps:e,mount:t})=>{const s=G(()=>({search:"",data:null,meta:null})),n=H(s,"data",async()=>{s.setState({data:null,meta:null});const i=e.getState(),{profileId:c,isNegative:l=!1}=i;if(c==null)return null;const d=s.getState().search,p=await Z.getAdGroupsTitles({limit:20,page:0,name:d,profile_id:c,...l?{}:{targetType:"keyword",targetingType:"manual"}});return s.setState({meta:p.meta}),p.data});return t(()=>e.subscribe((i,c)=>{i.profileId!==c.profileId&&s.setState({search:""})})),t(()=>n.listen(e,"profileId")),t(()=>n.listen(e,"isNegative")),{useProps:e,useStore:s,useRequest:n,onSearch:i=>{s.setState({search:i}),n.action()}}}),Cs=({info:e,tooltipRef:t,disableTooltip:s,marketData:n,className:a})=>{const{t:i}=f(),c=document.getElementById("tooltipContainer"),l=(n??W("domain","amazon.com")).currency;return o.jsx(fe,{placement:"top",content:o.jsxs(Ce,{children:[o.jsxs(X,{children:[o.jsxs(ee,{children:[i("adtomic.analytics.cellTooltip.status.name"),":"]}),i(`adtomic.analytics.cellTooltip.status.${e.state}`)]}),o.jsxs(X,{children:[o.jsxs(ee,{children:[i("adtomic.analytics.cellTooltip.campaign"),":"]}),o.jsx(Ps,{children:e.campaign_name})]}),o.jsxs(X,{children:[o.jsxs(ee,{children:[i("adtomic.analytics.cellTooltip.defaultBid"),":"]}),ut({amount:e.default_bid,currency:l})]})]}),colorType:"light",interactive:!0,appendTo:(t==null?void 0:t.current)||c||"parent",maxWidth:500,delay:0,disabled:s,children:o.jsx(Ce,{className:a,children:o.jsx(Is,{icon:mt})})})},Ce=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
`,Is=r(C)`
  font-size: 18px;
  color: ${e=>e.theme.systemColors.black};
`,X=r.div`
  ${J};
  display: flex;
  align-items: flex-start;
  row-gap: ${e=>e.theme.spacing.sp8};
`,ee=r.span`
  ${z};
  margin-right: ${({theme:e})=>e.spacing.sp4};
  color: ${({theme:e})=>e.systemColors.black};
`,Ps=r.div`
  white-space: normal;
  word-break: break-all;
`,_s=({campaignType:e,size:t=24})=>o.jsx(Ms,{$size:t,children:Bs[e]}),Bs={sponsoredProducts:"SP",sponsoredBrands:"SB",sponsoredDisplay:"SD",generic:"G"},Ms=r.div`
  ${z};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: ${({theme:e})=>e.spacing.sp4};
  border: ${({theme:e})=>`1px solid ${e.systemColors.grey600}`};
  color: ${({theme:e})=>e.systemColors.grey600};
`,Ns=({info:e,tooltipRef:t,disableTooltip:s,size:n=24})=>{const{t:a}=f(),i=document.getElementById("tooltipContainer");return o.jsx(fe,{placement:"top",content:o.jsxs(Es,{children:[o.jsxs(te,{children:[o.jsxs(se,{children:[a("adtomic.analytics.cellTooltip.status.name"),":"]}),a(`adtomic.analytics.cellTooltip.status.${e.campaignState}`)]}),o.jsxs(te,{children:[o.jsxs(se,{children:[a("adtomic.analytics.cellTooltip.targetingType.name"),":"]}),a(`adtomic.analytics.cellTooltip.targetingType.${e.targetingType}`)]}),o.jsxs(te,{children:[o.jsxs(se,{children:[a("adtomic.analytics.cellTooltip.campaignType.name"),":"]}),a(`adtomic.analytics.cellTooltip.campaignType.${e.campaignType}`)]})]}),colorType:"light",appendTo:(t==null?void 0:t.current)||i||"parent",maxWidth:500,delay:0,disabled:s,children:o.jsx(Ds,{$targetingType:e.targetingType,$size:n})})},Ls={manual:S`
    background: #8700c0;

    &::after {
      content: "M";
    }
  `,auto:S`
    background: #0253b6;

    &::after {
      content: "A";
    }
  `,exact:S`
    background: #0d3d55;

    &::after {
      content: "E";
    }
  `,phrase:S`
    background: #3f6199;

    &::after {
      content: "P";
    }
  `,broad:S`
    background: #107995;

    &::after {
      content: "B";
    }
  `},Es=r.div``,te=r.div`
  white-space: nowrap;

  & + & {
    margin-top: ${({theme:e})=>e.spacing.sp8};
  }
`,se=r.span`
  ${z};
  margin-right: ${({theme:e})=>e.spacing.sp4};
  color: ${({theme:e})=>e.systemColors.black};
`,Ds=r.div`
  ${z};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme:e,$targetingType:t,$size:s})=>S`
    width: ${s}px;
    height: ${s}px;
    border-radius: ${e.spacing.sp4};
    color: ${e.systemColors.white};

    ${Ls[t||""]}
  `}
`,Rs=({campaign:e,adgroup:t})=>{const{useProps:s}=tt(),n=s(a=>a.marketData??W("domain","amazon.com"));return o.jsxs(zs,{children:[o.jsxs(Fs,{children:[o.jsx(Ns,{info:e,marketData:n,size:20,disableTooltip:!0}),o.jsx(_s,{campaignType:e.campaignType,size:20})]}),o.jsx(Us,{children:e.name}),o.jsx(Os,{info:t,marketData:n}),o.jsx(Ks,{children:t.name})]})},zs=r.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${e=>e.theme.spacing.sp8};
`,Fs=r.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  padding-top: ${e=>e.theme.spacing.sp4};
`,Us=r(et)`
  ${z};
  color: ${e=>e.theme.systemColors.black};
  padding-top: ${e=>e.theme.spacing.sp4};
`,Ks=r(et)`
  ${J};
  color: ${e=>e.theme.systemColors.black};
`,Os=r(Cs)`
  justify-self: flex-end;
`,Gs=({selected:e,onChange:t,error:s,placeholder:n})=>{const{useStore:a,useRequest:i,onSearch:c,useProps:l}=tt(),d=l(u=>u.profileId),p=a(u=>u.data??[]),x=i(u=>u.status),g=h.useMemo(()=>p.map(u=>({render:y=>o.jsx(qs,{...y,children:o.jsx(Rs,{...Z.getAdGroupWithCampaign(u)})}),value:u.id,label:u.name}))||[],[p]);return o.jsx(as,{autocomplete:!0,appendTo:document.body,placeholder:n,options:g,error:s,onSearch:c,renderNoOptions:()=>o.jsx(Vs,{status:x,count:x==="loading"?1:0}),value:e,onChange:u=>t(u.map(y=>y.value))},d)},qs=h.memo(({option:e,size:t=xt,active:s,hover:n,disabled:a,onClick:i,onMouseEnter:c,children:l})=>o.jsx(gt,{$size:t,$active:s,$hover:n,$disabled:a,role:"option","data-value":e.value,onClick:i,onMouseEnter:c,children:o.jsxs(Ws,{children:[o.jsx(ht,{active:s,disabled:a}),l]})})),Ws=r.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.sp8};
  overflow: hidden;
  min-width: 0;
  max-width: 100%;

  ${ft.Box} {
    position: relative;
    top: 2px;
  }
`,Vs=({status:e,count:t})=>{const{t:s}=f();return(e==="init"||e==="loaded")&&t===0?o.jsx(Ie,{children:s("common.nothing")}):o.jsx(Ie,{children:o.jsx(C,{icon:yt,spin:!0})})},Ie=r.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,Hs=()=>{const{t:e}=f(),{control:t}=F(),s=E({control:t,name:"profileId"}),n=E({control:t,name:"matchType"}),a=A.isNegative(n),i=s==null?void 0:s.value,c=s!=null&&s.marketplace_string_id?W("store",s==null?void 0:s.marketplace_string_id):void 0;return o.jsxs(Zs,{children:[o.jsx(P,{label:e("addKeywordsToAdtomic.form.fields.campaign.label")}),o.jsx(ws,{value:{profileId:i,isNegative:a,marketData:c},children:o.jsx(Q,{control:t,name:"adgroupIds",rules:{required:e("formErrors.required")},render:({field:l,formState:d})=>{var p;return o.jsx(Gs,{selected:l.value??[],onChange:l.onChange,placeholder:e("addKeywordsToAdtomic.form.fields.campaign.placeholder"),error:!!((p=d.errors.adgroupIds)!=null&&p.message)})}})})]})},Zs=r.div`
  z-index: 1;
`,Ys=h.forwardRef(({currency:e,...t},s)=>o.jsx(eo,{ref:s,maskType:"custom",maskOptions:e==="JPY"?Xs:Qs,placeholder:e==="JPY"?"0":"0.00",leftLabel:is(e),...t}));function Js(){const e=ze.createNumberMask({prefix:"",suffix:"",includeThousandsSeparator:!1,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:null,requireDecimal:!0,allowNegative:!1,allowLeadingZeroes:!1});return(t,{currentCaretPosition:s})=>{const n=t.replace(/[^\d.]/g,""),a=e(n);return n==="."?[/\d/,".","[]","0","0"]:n===".0"?["0",".",/\d/,"[]","0"]:((/\.\./.test(n)||/\.0$/.test(n))&&a.pop(),/^\./.test(n)&&a[0]==="[]"&&a.unshift("0"),/\.\d{2,}$/.test(n)||(a.push("0"),/\.[1-9]$/.test(n)||(/\d$/.test(n)&&a.push("[]"),a.push("0"))),/\.\d{3}$/.test(n)&&n.substr(s-1,2)==="00"&&(a.splice(a.lastIndexOf("[]"),1),a.splice(s,2,"0","[]",/\d/)),a)}}const Qs=Js(),Xs=ze.createNumberMask({prefix:"",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!1,integerLimit:14,allowNegative:!1,allowLeadingZeroes:!1,requireDecimals:!0}),eo=r(ae)`
  ${ae.Input} {
    text-align: right;
  }
`,oe=.02,to=()=>{const{t:e}=f(),{control:t,register:s,setError:n}=F(),a=E({control:t,name:"useSuggestedBid"}),i=E({control:t,name:"matchType"}),c=A.negativeMatchTypes.includes(i),l=a==="false",d=E({control:t,name:"profileId"}),p=h.useMemo(()=>{const g=d==null?void 0:d.marketplace_string_id;return g!=null?W("store",g).currency:"USD"},[d]);if(c)return null;const x=s("useSuggestedBid");return o.jsxs(so,{role:"radiogroup",children:[o.jsx(P,{label:e("addKeywordsToAdtomic.form.fields.bid.label")}),o.jsx(le,{...x,onChange:g=>{x.onChange(g),n("bid",{message:void 0,type:"required"}),n("bid",{message:void 0,type:"min"})},value:"true",id:"true",children:o.jsx(P,{label:e("addKeywordsToAdtomic.form.fields.bid.suggested.label"),tooltipContent:e("addKeywordsToAdtomic.form.fields.bid.suggested.tooltip"),tooltipSettings:{colorType:"light"}})}),o.jsx(oo,{...x,onChange:g=>{x.onChange(g)},value:"false",id:"false",children:o.jsxs(no,{children:[o.jsx(P,{label:e("addKeywordsToAdtomic.form.fields.bid.custom.label")}),o.jsx(Q,{name:"bid",control:t,shouldUnregister:!0,rules:l?{required:e("formErrors.min",{value:oe}),min:{message:e("formErrors.min",{value:oe}),value:oe}}:{},render:({field:g,formState:u})=>{var y;return o.jsx(ao,{...g,value:g.value??"",size:"50",currency:p,error:(y=u.errors.bid)==null?void 0:y.message,disabled:!l})}})]},String(l))})]})},so=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
  ${P.Wrapper} {
    margin: 0;
  }
`,le=r(Xe)`
  ${P.Label} {
    ${J}
  }
`,oo=r(le)`
  align-items: flex-start;
  ${P.Label} {
    line-height: 24px;
  }
  ${le.Icon} {
    margin-top: 2px;
  }
`,no=r.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.sp8};
`,ao=r(Ys)`
  width: 100px;
`,io=()=>{const{t:e}=f(),{useModal:t}=U();return o.jsx($,{type:"button",buttonType:"cancel",onClick:t.close,children:e("addKeywordsToAdtomic.form.buttons.cancel")})},ro=()=>{const{t:e}=f(),{control:t,getValues:s,setValue:n}=F(),a=h.useMemo(()=>co.map(i=>({value:i,label:e(`addKeywordsToAdtomic.matchTypes.${i}`)})),[e]);return o.jsxs("div",{children:[o.jsx(P,{label:e("addKeywordsToAdtomic.form.fields.matchType.label")}),o.jsx(Q,{control:t,name:"matchType",render:({field:i})=>o.jsx(ye,{value:i.value,onChange:c=>{const l=s("matchType"),d=A.isNegative(l),p=A.isNegative(c.value);!p&&d&&n("adgroupIds",[]),p&&(n("useSuggestedBid","true"),n("bid","")),i.onChange(c.value)},options:a})})]})},co=["broad","phrase","exact","negativePhrase","negativeExact"];var de;(function(e){e.initialProfile={account_sub_type:null,account_type:"seller",added_at:"",brand_name:"",country_code:"US",currency_code:"",custom_name:"",daily_budget:0,domain:"",handling_policy:0,has_mws:!1,id:"",id_raw:"",is_disabled:!1,is_valid:!1,marketplace_string_id:"",ppc_token_id:0,profits_enabled:0,seller_custom_name:"",seller_string_id:"",site:"",sync_state:"none",target_acos:null,timezone:"",user_id:0,account_id:"",created_date:"",external_id:"",seller_account_id:"",sync_event_id:"",data_provider_type:"AMAZON"}})(de||(de={}));const lo=de.initialProfile,po=({profiles:e,subscriptionStatuses:t,onChange:s,value:n,onOpenSettings:a,className:i,placeholder:c,size:l,error:d,appendTo:p="parent",status:x})=>{const{t:g}=f(),[u,y]=h.useState(""),b=h.useMemo(()=>e.filter(v=>{var M,N,L;return!u||((M=v.brand_name)==null?void 0:M.toLowerCase().includes(u.toLowerCase()))||((N=v.seller_string_id)==null?void 0:N.toLowerCase().includes(u.toLowerCase()))||((L=v.profiles)==null?void 0:L.find(j=>j.id===(n==null?void 0:n.id)))}),[u,e,n]),{options:I,groups:B}=go(b,a);return o.jsx(fo,{appendTo:p,className:i,options:I,groups:B,value:n,onChange:s,placeholder:c,size:l,error:d,renderValue:v=>o.jsx(ho,{...v,profiles:e,subscriptions:t}),renderHeader:()=>o.jsx(So,{placeholder:g("common.search"),value:u,onChange:v=>y(v.target.value)}),loading:x==="loading"})},uo=(e,t)=>{let s=lo;return t.forEach(n=>{const a=n.profiles.find(i=>i.id===e);a&&(s=a)}),s},mo=(e,t,s)=>{const n=uo(e,t??[]),a=s==null?void 0:s[e];return{profile:n,subscribed:a}},go=(e,t)=>{const s=[],n=[];return e.forEach((a,i)=>{n.push({id:a.seller_string_id,label:o.jsxs(yo,{children:[o.jsxs(ue,{children:[o.jsx(jo,{children:st[a.data_provider_type]}),o.jsx(pe,{children:a.brand_name||a.seller_string_id})]}),i===0&&!!t&&o.jsx($,{size:"50",buttonType:"icon",onClick:t,icon:o.jsx(C,{icon:bt})})]},a.seller_string_id+i)}),a.profiles.forEach((c,l)=>{s.push({label:o.jsxs(ue,{children:[c.domain?o.jsx(ot,{children:Fe[String(c.domain).replace("www.","")]}):c.brand_name&&o.jsx(nt,{icon:Ue}),o.jsx(pe,{children:c.domain||c.brand_name})]},c.id+l),value:c.id,group:c.seller_string_id})})}),{options:s,groups:n}},st={WALMART:o.jsx(jt,{}),AMAZON:o.jsx(ts,{}),GOOGLE:o.jsx(cs,{})},ho=({value:e,placeholder:t,profiles:s,subscriptions:n})=>{const{profile:a}=h.useMemo(()=>{var i;return mo(((i=e==null?void 0:e[0])==null?void 0:i.value)??"",s,n)},[s,n,e]);return a.id?o.jsx(xo,{current:a}):o.jsx($o,{children:t})},xo=({current:e})=>{var t;return o.jsxs(ue,{children:[o.jsx(bo,{children:st[e.data_provider_type]}),e.data_provider_type!=="GOOGLE"?o.jsx(o.Fragment,{children:o.jsx(ot,{children:Fe[(t=e==null?void 0:e.domain)==null?void 0:t.replace("www.","")]})}):o.jsx(nt,{icon:Ue}),o.jsx(pe,{id:e.id,children:(e==null?void 0:e.brand_name)||(e==null?void 0:e.seller_string_id)})]})},fo=r(ye)`
  width: 300px;
`,yo=r.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`,bo=r.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-right: ${e=>e.theme.spacing.sp8};
`,pe=r.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,ue=r.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  min-width: 0;
`,ot=r.div`
  ${St};
  margin-right: 6px;
  display: flex;
`,nt=r(C)`
  margin-right: 6px;
`,jo=r.div`
  height: 100%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
`,So=r(Je)`
  ${ae.InputWrapper} {
    border: none;
    border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
    border-radius: 0;
    outline: none;
    margin-bottom: ${e=>e.theme.spacing.sp8};
  }
`,$o=r.div``;var me;(function(e){const t=Se+"/v1/profiles";e.getSubscriptionStatus=async()=>D({url:_(`${t}/subscription-status`,{}),method:"GET",useSessionAccountId:!0})})(me||(me={}));var ge;(function(e){const t=be+"/api/v1/customers/me/ads";e.get=()=>D({method:"GET",url:_(t,{}),withCredentials:!0})})(ge||(ge={}));const $e=$t(()=>{const e=G(()=>({data:null,customerMe:null})),t=H(e,"data",async()=>me.getSubscriptionStatus()),s=H(e,"customerMe",async()=>ge.get());return{useStore:e,initialize:()=>{e.getState().data==null&&t.action(),e.getState().customerMe==null&&s.action(),K.getState().upsellInfo==null&&vt.action("cerebro")},useGetProfilesRequest:t,useCustomerMeRequest:s}}),vo=()=>{const{control:e}=F(),{useProps:t}=U(),s=t(c=>{var l;return((l=c.profilesData)==null?void 0:l.data.accounts)??[]}),n=t(c=>{var l;return((l=c.profilesData)==null?void 0:l.data.subscription_statuses)??{}}),{useGetProfilesRequest:a}=$e.useSingleton(),i=a(c=>c.status);return o.jsx(Q,{control:e,name:"profileId",render:({field:c})=>o.jsx(ko,{value:c.value,onChange:l=>{const d=s.map(p=>p.profiles).flat().find(p=>p.id===l.value)??{};c.onChange({...l,...d})},profiles:s,subscriptionStatuses:n,status:i})})},ko=r(po)`
  width: 100%;
`,To=()=>{const{t:e}=f(),{control:t}=F(),s=E({control:t,name:"profileId"}),{useRequest:n}=U(),a=n(c=>c.status==="loading"),i=s==null||a;return o.jsx($,{type:"submit",disabled:i,onClick:c=>c.stopPropagation(),loading:a,children:e("addKeywordsToAdtomic.form.buttons.add")})},Ao=h.memo(()=>{const{handleSubmit:e}=F(),{useRequest:t}=U(),s=e(n=>{t.action(n)});return o.jsxs(wo,{onSubmit:s,onClick:n=>n.stopPropagation(),children:[o.jsxs(Co,{children:[o.jsx(vo,{}),o.jsx(Hs,{}),o.jsx(ro,{}),o.jsx(to,{})]}),o.jsxs(Io,{children:[o.jsx(io,{}),o.jsx(To,{})]})]})}),wo=r.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp24};
  padding: ${e=>e.theme.spacing.sp16};
  width: 360px;
`,Co=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp16};
`,Io=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp16};
`,Po=({children:e})=>{const t=kt({defaultValues:_o()}),{useProps:s}=U(),{profilesData:n}=s(),a=h.useMemo(()=>{var c,l,d;const i=(d=(l=(c=n==null?void 0:n.data.accounts)==null?void 0:c[0])==null?void 0:l.profiles)==null?void 0:d[0];return i!=null?{...i,value:i.id,label:i.id}:null},[n]);return h.useEffect(()=>{a!=null&&t.setValue("profileId",a)},[a,t]),o.jsx(Tt,{...t,children:e})},_o=()=>({matchType:"broad",useSuggestedBid:"true",adgroupIds:[],bid:null}),ua=h.memo(({upsellProps:e,...t})=>{const{useStore:s,initialize:n}=$e.useSingleton(),a=s(i=>i.data);return h.useEffect(n,[n]),o.jsxs(o.Fragment,{children:[o.jsx(Ts,{value:{...t,profilesData:a},children:o.jsx(Bo,{place:e==null?void 0:e.place})}),(e==null?void 0:e.includeUpsellModalComponent)&&o.jsx(qt,{})]})}),Bo=h.memo(({place:e})=>{const{t}=f(),{useProps:s,useModal:n}=U(),{keywords:a,segmentEvents:i}=s(),[c]=n(),{useGetProfilesRequest:l,useCustomerMeRequest:d,useStore:p}=$e.useSingleton(),x=l(j=>j.status),g=d(j=>j.status),u=At(x,g),y=p(j=>{var T;return(T=j.customerMe)==null?void 0:T.results.hasAccess}),b=u==="loaded",I=u==="error",B=!y,v=!b,M=!b,N=K(j=>{var T;return(T=j.checkLogin)==null?void 0:T.basePlan})??wt.Free,L=K(j=>{var T;return((T=j.upsellInfo)==null?void 0:T.isChinesePlans)??!1});return a.length===0||I?null:o.jsx(Qe,{open:c,onOpenChange:j=>!B&&(j?n.open():n.close()),hideOnClickOutside:!0,content:o.jsx(Po,{children:o.jsx(Ao,{})}),children:o.jsx("div",{children:o.jsx(Ze,{type:"button",buttonType:"secondary",disabled:v,loading:M,locked:B,onClick:()=>{Mo(i),n.open()},onLockedClick:()=>Wt.open({isChinese:L,plan:N,addon:"Adtomic",segmentEventProperties:{place:e,trigger:"addKeywordToAdtomic"}}),children:t("addKeywordsToAdtomic.button.title")})})})}),Mo=e=>{var t;switch(e.type){case"cerebro":{ce({eventName:"Cerebro Add Keyword To Adtomic Campaign Clicked",eventProperties:{marketplace:e.marketplace??"amazon.com"}});break}case"myList":{ce({eventName:"My List Add Keyword To Adtomic Campaign Clicked",eventProperties:{marketplace:e.marketplace??"amazon.com"}});break}case"custom":(t=e.onClick)==null||t.call(e)}},ve=[5,10,25,50],No={page:1,count:ve[0],search:"",sortDirection:"DESC",sortField:"updatedAt"},Lo="add-product-idea",Eo=(e,t)=>{t&&ie.warning(o.jsx(ps,{count:t,eventType:"duplicates",itemType:e}))},Do={props:null,step:"list",checks:null,table:null,tableFilter:No,successData:null,selected:null,createProductIdea:null,addKeywordsOrCompetitors:null},m=G(()=>Do),Ro=rs(m),w=Re(m,"props",{reaction:async({type:e})=>{e==="OPEN"&&it.action()}}),at=Ke(m,"selected"),ke=Ke(m,"step",{patchEffect:e=>e==="list"?{selected:null}:{}}),zo=()=>{var t;((t=m.getState().checks)==null?void 0:t.hasActiveIdeas)??!1?ke.set("list"):w.close()},Pe=Ct(m,"successData"),Fo=({id:e,name:t,added:s,duplicates:n})=>{const i=m.getState().props;i&&(s&&s>0?i.type==="competitors"?Pe.set({id:e,name:t,count:s??0}):Pe.set({id:e,name:t,count:s??0}):w.close(),Eo(i.type,n)),ke.set("success")},it=q(m,"checks",async e=>{var d;const{page:t,sortField:s,sortDirection:n}=m.getState().tableFilter,a=(d=m.getState().props)==null?void 0:d.marketplace,i=`${n==="DESC"?"-":""}${s}`,[c,l]=await Promise.all([k.getList({page:1,perPage:1,"filter[name]":"",sort:i}),k.getList({page:t,perPage:1,sort:i,"filter[name]":"","filter[marketplace]":a,"filter[statuses]":[k.IDEA_STATUS.IN_PROGRESS,k.IDEA_STATUS.IN_REVIEW,k.IDEA_STATUS.BLOCKED]})]);return{hasIdeas:!!c.meta.totalItems,hasActiveIdeas:!!l.meta.totalItems}},{fulfilled:({result:e})=>{e.hasActiveIdeas&&V.action()}}),V=H(m,"table",async e=>{var d;const{page:t,search:s,count:n,sortField:a,sortDirection:i}=m.getState().tableFilter,c=`${i==="DESC"?"-":""}${a}`,l=(d=m.getState().props)==null?void 0:d.marketplace;return k.getList({page:t,perPage:n,"filter[name]":s,"filter[marketplace]":l,sort:c})},{fulfilled:({result:e})=>{const t=m.getState().selected;t&&!e.data.map(s=>s.id).includes(t.id)&&at.set(null)}}),Y=V.createFilter("tableFilter",{patchEffect:e=>{const t=m.getState().tableFilter;return e.search!==""&&e.search.length<3?{tableFilter:t}:t.search!==e.search||t.count!==e.count?{tableFilter:{...e,page:1}}:{tableFilter:e}}}),_e=q(m,"createProductIdea",async({name:e})=>{var s;const t=(s=m.getState().props)==null?void 0:s.marketplace;return t?k.create({name:e,marketplace:t}):null},{fulfilled:({payload:e,result:t})=>{var a;const s=t==null?void 0:t.data.id;s&&he.action({id:s,name:e.name});const n=(a=m.getState().props)==null?void 0:a.seSource;s&&n&&Vt({eventName:"PID_Create",eventProperties:{from:n}})},rejected:({fetchError:e})=>{var t;((t=e==null?void 0:e.result)==null?void 0:t.message)==="This action is unauthorized."&&re({type:"ideas"})}}),he=q(m,"addKeywordsOrCompetitors",async({id:e})=>{var n;const t=m.getState().props,s=e??((n=m.getState().selected)==null?void 0:n.id);return!t||!s?null:t.type==="competitors"?us.batchAdd({ideaId:s,asins:t.competitors,source:t.source}):ms.batchAdd({ideaId:s,phrases:t.keywords,source:t.source})},{fulfilled:({payload:{id:e,name:t},result:s})=>{const n=m.getState().selected,a=e??(n==null?void 0:n.id),i=t??(n==null?void 0:n.name);a!=null&&i!=null&&Fo({id:a,name:i,added:s==null?void 0:s.data.new,duplicates:s==null?void 0:s.data.duplicates})},rejected:({fetchError:e})=>{var n;const t=m.getState().props,s=(n=e==null?void 0:e.result)==null?void 0:n.message;(t==null?void 0:t.type)==="keywords"&&s&&s.includes("You exceeded keywords ideas limit")&&re({type:"keywords"}),(t==null?void 0:t.type)==="competitors"&&s&&s.includes("You exceeded products ideas limit")&&re({type:"competitors"})}}),Uo=()=>o.jsx(Ko,{children:o.jsx(ls,{})}),Ko=r.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${e=>e.theme.spacing.sp24};
`,Oo={[k.IDEA_STATUS.ARCHIVED]:{type:"disabled",icon:It},[k.IDEA_STATUS.BLOCKED]:{type:"error",icon:Pt},[k.IDEA_STATUS.IN_PROGRESS]:{type:"enabled",icon:_t},[k.IDEA_STATUS.IN_REVIEW]:{type:"paused",icon:Bt},[k.IDEA_STATUS.DONE]:{type:"success",icon:Mt}},Go=()=>{const{t:e}=f();return h.useMemo(()=>[{field:"select",title:"",noHeader:!0,static:40,render:t=>o.jsx(qo,{data:t}),contentPosition:"center"},{field:"name",title:e("addProductIdea.list.columns.ideaName"),static:220,responsive:!0,sortable:!0,render:t=>o.jsx(Wo,{text:t.name})},{field:"status",title:e("addProductIdea.list.columns.status"),responsive:!0,sortable:!0,render:({status:t})=>{const s=Oo[t];return o.jsx(ns,{type:s==null?void 0:s.type,icon:o.jsx(C,{icon:s==null?void 0:s.icon}),children:e(`addProductIdea.statuses.${t}.title`)})}},{field:"updatedAt",title:e("addProductIdea.list.columns.lastUpdated"),responsive:!0,sortable:!0,contentPosition:"right",render:({updatedAt:t})=>`${Ae(new Date(t),"standard")} ${Ae(new Date(t),"time")}`}],[e])},qo=({data:e})=>{const t=m(s=>s.selected);return o.jsx(Xe,{checked:(t==null?void 0:t.id)===e.id,onClick:()=>at.set(e)})},Wo=r(ds)`
  ${z};
  color: ${e=>e.theme.systemColors.black};
`,Vo=({options:e,value:t,onChange:s,status:n})=>{const{t:a}=Nt();return n==="loading"?o.jsx(Zo,{}):o.jsxs(rt,{children:[o.jsx(Ho,{children:a("table.rowLimit")}),o.jsx(ye,{size:"100",value:{value:t,label:String(t)},options:e.map(i=>({value:i,label:i.toString()})),onChange:i=>{s(i.value)},appendTo:void 0})]})},rt=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Ho=r.span`
  ${J}
`,Zo=()=>o.jsxs(rt,{children:[o.jsx(Yo,{}),o.jsx(Jo,{})]}),Yo=r(je)`
  width: 98px;
  height: 14px;
`,Jo=r(je)`
  width: 70px;
  height: 32px;
`,Qo=()=>{const e=m(a=>{var i;return((i=a.table)==null?void 0:i.meta.totalItems)??0}),t=V(a=>a.status),s=m(a=>a.tableFilter.count),n=m(a=>a.tableFilter.page);return h.useCallback(()=>o.jsxs(Xo,{children:[t!=="loading"?o.jsx(ss,{size:"100",pageCount:Math.ceil(e/s),onPageChange:a=>{Y.patch({page:a.selected+1})},status:t,locked:!1,forcePage:n-1}):o.jsx(tn,{}),o.jsx(Vo,{options:ve,value:s,onChange:a=>Y.patch({count:a}),status:t})]}),[n,s,t,e])},Xo=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp16};
  padding: ${e=>e.theme.spacing.sp12} ${e=>e.theme.spacing.sp24};
`,en=[...new Array(3)].map((e,t)=>t),tn=()=>o.jsx(on,{children:en.map(e=>o.jsx(sn,{},e))}),sn=r(je)`
  width: 32px;
  height: 32px;
`,on=r.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
  justify-content: center;
  text-size-adjust: 100%;
`,nn=()=>{const e=Go(),t=m(l=>{var d;return((d=l.table)==null?void 0:d.data)??[]}),s=m(l=>{var d;return((d=l.table)==null?void 0:d.meta.totalItems)??0}),n=V(l=>l.status),a=m(l=>l.tableFilter),i=h.useMemo(()=>({value:a}),[a]),c=Qo();return o.jsx(os,{name:Lo,columns:e,status:n,data:t,total:s,dimensions:an,behavior:rn,selected:cn,filter:i,onFilter:Y.set,footer:c})},an={minHeight:240,maxHeight:550},rn={searchVisible:!1,noHeader:!0,itemsPerPage:ve},cn={haveCheckbox:!1},ln=()=>{const{t:e}=f(),t=m(l=>l.tableFilter.search??""),s=V(l=>l.status==="loading"),[n,a]=h.useState(t),i=Lt(l=>Y.patch({search:l}),500),c=l=>{const d=l.target.value;a(l.target.value),i(d)};return o.jsx(Je,{value:n,onChange:c,placeholder:e("addProductIdea.list.searchPlaceholder"),disabled:s})},dn=()=>{const{t:e}=f();return o.jsxs(pn,{children:[o.jsxs(un,{children:[e("addProductIdea.list.ideasInProgress"),o.jsx(ln,{})]}),o.jsx(nn,{})]})},pn=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp8};
`,un=r.div`
  ${Oe};
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp8};
`,mn=()=>{const{t:e}=f(),t=m(n=>n.selected!=null),s=he(n=>n.status==="loading");return o.jsxs(gn,{children:[o.jsx(xn,{type:"button",buttonType:"cancel",size:"200",onClick:w.close,children:e("common.cancel")}),o.jsxs(hn,{children:[o.jsx($,{type:"button",buttonType:"secondary",size:"200",onClick:()=>ke.set("addNew"),icon:o.jsx(C,{icon:Et}),children:e("addProductIdea.list.newProductIdea")}),o.jsx($,{type:"button",size:"200",disabled:!t||s,onClick:()=>he.action({}),loading:s,children:e("common.save")})]})]})},gn=r.div`
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp24};
`,hn=r.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
`,xn=r($)`
  padding-left: 0;
  padding-right: 0;
`,fn=()=>{const{t:e}=f();return o.jsxs(yn,{children:[o.jsx(bn,{children:e("addProductIdea.list.title")}),o.jsx(jn,{children:e("addProductIdea.list.subtitle")})]})},yn=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,bn=r.div`
  ${Dt};
`,jn=r.div`
  ${Ge};
`,Sn=`${be}/dashboard`,$n="product-ideas",vn=`${Sn}/${$n}`,kn=e=>_(`${vn}/${e}/keywords`,{}),Tn=()=>{const{t:e}=f(),t=m(n=>{var a;return((a=n.props)==null?void 0:a.type)==="competitors"}),s=m(n=>n.successData);return o.jsxs(An,{children:[o.jsxs(wn,{children:[o.jsx(Cn,{children:e(`addProductIdea.success.${t?"competitors":"keywords"}`,{count:(s==null?void 0:s.count)??0,number:(s==null?void 0:s.count)??0})}),o.jsxs(In,{children:["‘",s==null?void 0:s.name,"’"]})]}),o.jsxs(Pn,{children:[o.jsx($,{type:"button",buttonType:"text",size:"200",onClick:w.close,children:e("common.dismiss")}),o.jsx(_n,{href:kn((s==null?void 0:s.id)??0),children:o.jsx($,{type:"button",size:"200",onClick:w.close,children:e("addProductIdea.success.openProductIdea")})})]})]})},An=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp32};
`,wn=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,Cn=r.div`
  ${Ne};
  color: ${e=>e.theme.systemColors.grey600};
  text-align: center;
`,In=r.div`
  ${Oe};
  text-align: center;
`,Pn=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sp24};
`,_n=r.a`
  text-decoration: none;
`,ma=()=>{const[e]=w(),t=it(g=>g.status!=="loading"),s=m(g=>g.step),n=m(g=>{var u;return!((u=g.checks)!=null&&u.hasIdeas)}),a=t?s:"loading",i=h.useMemo(()=>Bn[a],[a]),c=h.useMemo(()=>Mn[a],[a]),l=h.useMemo(()=>Nn[a],[a]),d=_e(g=>g.status),p=h.useMemo(()=>({list:o.jsx(dn,{}),addNew:o.jsx(gs,{onCancel:zo,onChange:g=>_e.action({name:g}),status:d,isFirst:n}),success:o.jsx(Tn,{}),loading:o.jsx(Uo,{})}),[d,n]),x=h.useMemo(()=>p[a],[p,a]);return o.jsxs(qe,{isOpen:e,onClose:i,title:c,footer:l,children:[x,e&&o.jsx(Ro,{})]})},Bn={list:w.close,loading:w.close},Mn={list:o.jsx(fn,{})},Nn={list:o.jsx(mn,{})},ga=({params:e,onClick:t,...s})=>{const{t:n}=f();return o.jsx($,{onClick:a=>{t==null||t(a),w.open(e)},icon:o.jsx(Ln,{icon:We}),buttonType:"secondary",...s,children:n("addProductIdea.button.text")})},Ln=r(C)``,ha=r(({params:e,className:t,...s})=>{const{t:n}=f();return o.jsxs(En,{onClick:a=>{var i;(i=s.onClick)==null||i.call(s,a),w.open(e)},className:t,children:[o.jsx(Dn,{icon:We}),n("addProductIdea.button.text")]})})``,En=r(Qe.Item)`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  color: ${e=>e.theme.systemColors.grey600};
`,Dn=r(C)`
  font-size: 16px;
`,Rn=({onClick:e,disabled:t,locked:s,buttonType:n})=>{const{t:a}=f(),i=n==="listingAnalyzerOld";return o.jsxs(Un,{onClick:e,disabled:t,big:i,children:[s&&o.jsx(Fn,{$type:"tertiary",$disabled:t,big:i,children:o.jsx(C,{icon:Rt})}),a("bulkReport.button")]})},zn={primary:S`
    color: ${({theme:e})=>e.systemColors.blue600};
    background-color: ${({theme:e})=>e.systemColors.white};
  `,secondary:S`
    color: ${({theme:e})=>e.systemColors.white};
    background-color: ${({theme:e})=>e.systemColors.blue600};
  `,tertiary:S`
    color: ${({theme:e})=>e.systemColors.white};
    background-color: ${({theme:e})=>e.systemColors.grey400};
  `,text:S`
    color: ${({theme:e})=>e.systemColors.blue600};
    background-color: ${({theme:e})=>e.systemColors.white};
  `,icon:S`
    color: ${({theme:e})=>e.systemColors.grey600};
    background-color: transparent;
  `,cancel:S`
    color: ${({theme:e})=>e.systemColors.black};
    background-color: transparent;
  `},Fn=r.div`
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

  ${e=>zn[e.$type]}

  ${e=>e.$disabled&&S`
      color: ${({theme:t})=>t.systemColors.white};
      background-color: ${({theme:t})=>t.systemColors.grey300};
    `}
`,Un=r.button`
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

  ${({big:e})=>e?S`
          height: 36px;
          padding: 7px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #6a6c6f;
        `:S`
          height: 34px;
          font-weight: 700;
          font-size: 13px;
          line-height: 18px;
          padding: 5px;
          color: #343a40;
        `}
`,ne=Ye("bulkReportModal",void 0),Kn=_(`${be}/cerebro-old/cerebro-bulk-export/cerebro-bulk-export`,{}),xa=({link:e=Kn,disabled:t,locked:s,anythingElseText:n,buttonProps:a={},buttonType:i="cerebro",project:c="cerebro",restrictedActionsStatus:l="init"})=>{const{t:d}=f(),{sendSegmentEvent:p}=Zt(),{isOpen:x}=Ve(ne.atom),g=O(()=>(p({eventName:"Bulk Report button clicked",eventProperties:{tool:Be[c]}}),ne.open()),[p,c]),u=O(ne.close),y=h.useCallback(()=>{var b;s||(b=window.open(e,"_blank"))==null||b.focus()},[e,s]);return c==="cerebro"||l==="loaded"&&s?o.jsxs(o.Fragment,{children:[o.jsx("div",{children:o.jsx(fe,{content:d("bulkReport.tooltip"),delay:[500,0],appendTo:document.body,zIndex:1001,children:o.jsx("div",{onClick:s?g:void 0,children:i==="cerebro"?o.jsx(Ze,{size:"100",onClick:y,disabled:t,locked:s,buttonType:s?"tertiary":"primary",...a,children:d("bulkReport.button")}):o.jsx(Rn,{onClick:y,disabled:t,locked:s,buttonType:i})})})}),s&&o.jsx(qe,{size:"50",zIndex:1e4,isOpen:x,onClose:u,title:d(`bulkReport.modal.${c}.title`),subtitle:o.jsx(On,{dangerouslySetInnerHTML:{__html:d(`bulkReport.modal.${c}.text`)}}),children:o.jsxs(Gn,{children:[o.jsx($,{buttonType:"secondary",size:"200",onClick:u,children:d("bulkReport.modal.notRightNow")}),o.jsx($,{size:"200",onClick:()=>{var b;p({eventName:"Bulk Report Contact Us button clicked",eventProperties:{tool:Be[c]}}),(b=window.open(zt("https://www.helium10.com/pricing/contact-enterprise/"+(n?"?":"")+Ft.stringify({...n?{anythingElse:n}:{}})),"_blank"))==null||b.focus()},children:d("bulkReport.modal.contactUs")})]})})]}):null},Be={cerebro:"cerebro",blackBox:"blackbox",listingAnalyzer:"listing-analyzer"},On=r.div``,Gn=r.div`
  padding-top: ${({theme:e})=>e.spacing.sp16};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp8};
  }
`,xe=Ye("listingAnalyzerLimitUpsellModal",{planGroup:"free",isChinesePlans:!1}),fa=()=>{const{isOpen:e}=Ve(xe.atom),t=O(xe.close);return o.jsx(Yt,{data:{type:"usesLimitReached",toolTitle:"Listing Analyzer"},modalProps:{isOpen:e},onDecline:t})},qn=async()=>D({url:_("/listing-analyzer/la-api/balance",{}),method:"GET",withCredentials:!0}),Wn=hs("getListingAnalyzerBalance",async({onSuccess:e})=>qn(),{fulfilledReaction:({result:{left:e},params:{onSuccess:t}})=>{t(e)}}),ya=({isChinesePlans:e,onOpen:t,onAccept:s})=>{const n=K(Ee),a=O(Wn.pending);return{openUpsellModal:O(()=>xe.open({planGroup:n,isChinesePlans:e,onOpen:t,onAccept:s}),[n]),getBalance:a}},ct=G(()=>({currentAndRecommended:null})),Me=q(ct,"currentAndRecommended",(e,t)=>Gt(e,t==null?void 0:t.signal)),Vn=({data:e,onClick:t})=>{const{t:s}=f(),[n,a,i,c]=ct(d=>{var p,x,g,u,y,b,I,B,v,M,N,L,j,T,Te;return[(u=(g=(x=(p=d.currentAndRecommended)==null?void 0:p.data)==null?void 0:x.recommendation)==null?void 0:g.offer)==null?void 0:u.key,(B=(I=(b=(y=d.currentAndRecommended)==null?void 0:y.data)==null?void 0:b.recommendation)==null?void 0:I.offer)==null?void 0:B.action,(L=(N=(M=(v=d.currentAndRecommended)==null?void 0:v.data)==null?void 0:M.recommendation)==null?void 0:N.plan)==null?void 0:L.title,(Te=(T=(j=d.currentAndRecommended)==null?void 0:j.data)==null?void 0:T.recommendation)==null?void 0:Te.queryStringParameters]});h.useEffect(()=>(e!=null&&e.tool&&Me.action({location:Jt[e==null?void 0:e.tool]??(e==null?void 0:e.tool),isButton:!0}),()=>{Me.clear()}),[e==null?void 0:e.tool]);const l=h.useCallback(()=>{Promise.all([t==null?void 0:t()]).finally(()=>{He({key:n,action:a,queryStringParameters:c})})},[t,n,a,c]);return o.jsx($,{loading:!i,disabled:!i,onClick:l,children:s("currentAndRecommended.upsellButton.title",{recommendedPlanTitle:i||""})})},ba=h.memo(({uses:e})=>{const{t}=f(),s="blackBoxProducts";return o.jsxs(Hn,{children:[o.jsx(Zn,{dangerouslySetInnerHTML:{__html:t("currentAndRecommended.upsellBanner.experimentText",{uses:e})}}),o.jsx(Vn,{data:{tool:s},onClick:()=>Ut({name:"Upsell Banner Clicked",properties:{tool:Qt[s]}})})]})}),Hn=r.div`
  background-color: ${({theme:e})=>e.systemColors.blue50};
  padding: ${({theme:e})=>e.spacing.sp12};
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 -16px;

  ${R.desktop} {
    margin: 0 -40px;
  }
`,Zn=r.div`
  ${Ge};
  margin-right: ${({theme:e})=>e.spacing.sp24};
  color: ${({theme:e})=>e.systemColors.black};
`;export{ua as A,xa as B,fa as L,Vn as R,ga as S,pa as U,U as a,Ts as b,ma as c,ha as d,w as e,ba as f,Hn as g,Zn as h,$e as k,xe as l,Oo as p,Be as r,ya as u};
//# sourceMappingURL=RecommendedPlanUpsellButton-P37AsoV_.js.map
