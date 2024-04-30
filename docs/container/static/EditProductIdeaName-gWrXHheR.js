import{f as a,g as c,w as E,j as o,u as i,P as $,N as L,ch as D,ap as g,r as A,aG as O,S as j,K as v,ak as w}from"./index-3WWdADc-.js";import{c as G}from"./configuration-HeGlZf9h.js";import{g as f,T as M,t as B}from"./Learn-iEpSD2rS.js";import{f as P}from"./useAutoPlay-ceAGW3YF.js";import{m as p}from"./mergeRefs-97mQYrgp.js";var h;(function(t){t.link=G+"/api/v1/ideas",function(e){e[e.IN_PROGRESS=0]="IN_PROGRESS",e[e.IN_REVIEW=1]="IN_REVIEW",e[e.DONE=2]="DONE",e[e.BLOCKED=3]="BLOCKED",e[e.ARCHIVED=4]="ARCHIVED"}(t.IDEA_STATUS||(t.IDEA_STATUS={})),t.chartCategories=["marketResearchAndTrends","marketSize","competition","logisticsAndProfitability","businessBiasesAndIntuition","futureMarketPredictions"],function(e){e[e.SUITABLE_SUPPLIER=1]="SUITABLE_SUPPLIER",e[e.MANUFACTURER=2]="MANUFACTURER"}(t.SuitableSupplierType||(t.SuitableSupplierType={})),function(e){e[e.DATA_DRIVEN=1]="DATA_DRIVEN",e[e.BALANCED_WITH_A_LEAN_TOWARDS_DATA=2]="BALANCED_WITH_A_LEAN_TOWARDS_DATA",e[e.BALANCED_WITH_A_LEAN_TOWARDS_INTUITION=3]="BALANCED_WITH_A_LEAN_TOWARDS_INTUITION",e[e.INTUITION_LEARNING=4]="INTUITION_LEARNING",e[e.INTUITION_DEPENDENT=5]="INTUITION_DEPENDENT"}(t.BalancingDataWithHumanIntuition||(t.BalancingDataWithHumanIntuition={})),function(e){e[e.LESS_THAN_ONE=1]="LESS_THAN_ONE",e[e.TWO=2]="TWO",e[e.THREE=3]="THREE",e[e.FOUR=4]="FOUR",e[e.MORE_THAN_FIVE=5]="MORE_THAN_FIVE"}(t.AreasForImprovement||(t.AreasForImprovement={})),t.getList=async e=>a({url:c(t.link,{...e},{arrayFormat:"index"}),method:"GET",useSessionAccountId:!0}),t.get=async({id:e})=>a({url:c(`${t.link}/${e}`,{}),method:"GET",useSessionAccountId:!0}),t.create=async e=>a({url:c(t.link,{}),method:"POST",params:e,useSessionAccountId:!0}),t.update=async({id:e,...s})=>a({url:c(`${t.link}/${e}`,{}),method:"PATCH",params:s,useSessionAccountId:!0}),t.deleteItem=async e=>a({url:c(t.link,{}),method:"DELETE",params:e,useSessionAccountId:!0}),t.getLimits=async()=>a({url:c(`${t.link}/limits`,{}),method:"GET",useSessionAccountId:!0})})(h||(h={}));var b;(function(t){const s=`${h.link}/products`,r={get:s,batchAdd:s,batchDelete:`${s}/batch-delete`,getChart:`${s}/overview-chart`};(function(n){n[n.IDASH_MANUAL=1]="IDASH_MANUAL",n[n.BLACKBOX=2]="BLACKBOX",n[n.LISTING_ANALYZER=3]="LISTING_ANALYZER",n[n.MY_LIST=4]="MY_LIST",n[n.EXTENSION=5]="EXTENSION"})(t.SOURCE||(t.SOURCE={})),t.batchAdd=async n=>a({url:c(r.batchAdd,{},{arrayFormat:"index"}),method:"POST",params:n,useSessionAccountId:!0}),t.batchDelete=async n=>a({url:c(r.batchDelete,{},{arrayFormat:"index"}),method:"POST",params:n,useSessionAccountId:!0}),t.get=async n=>a({url:c(r.get,{...n}),method:"GET",params:n,useSessionAccountId:!0}),t.getChart=async n=>a({url:c(r.getChart,{...n}),method:"GET",params:n,useSessionAccountId:!0})})(b||(b={}));var y;(function(t){const s=`${h.link}/keywords`,r={get:s,batchAdd:s,batchDelete:`${s}/batch-delete`,getChart:`${s}/overview-chart`};(function(n){n[n.IDASH_MANUAL=1]="IDASH_MANUAL",n[n.CEREBRO=2]="CEREBRO",n[n.MAGNET=3]="MAGNET",n[n.KEYWORD_TRACKER=4]="KEYWORD_TRACKER",n[n.MY_LIST=5]="MY_LIST"})(t.SOURCE||(t.SOURCE={})),t.batchAdd=async n=>{const{phrases:T,...d}=n,l={...d,phrases:T.map(_=>_.toLowerCase())};return a({url:c(r.batchAdd,{},{arrayFormat:"index"}),method:"POST",params:l,useSessionAccountId:!0})},t.batchDelete=async n=>a({url:c(r.batchDelete,{},{arrayFormat:"index"}),method:"POST",params:n,useSessionAccountId:!0}),t.get=async n=>a({url:c(r.get,{...n}),method:"GET",params:n,useSessionAccountId:!0}),t.getChart=async n=>a({url:c(r.getChart,{...n}),method:"GET",params:n,useSessionAccountId:!0})})(y||(y={}));const re=({eventType:t,itemType:e,count:s})=>{const{t:r}=E();return o.jsx(f,{dangerouslySetInnerHTML:{__html:r(`addProductIdea.notifications.${t}.${e}`,{count:s,value:P({value:s})})}})},C=({type:t})=>{const{t:e}=E();return o.jsx(f,{dangerouslySetInnerHTML:{__html:e(`addProductIdea.notifications.limitExceeded.${t}`)}})},H=({isChinese:t})=>{const{t:e}=E(),s=()=>{const r=c(`${$}/subscribe`,{action:"checkout",offer:"start_your_business"});window.open(r,"__target")};return o.jsxs(V,{children:[o.jsx(M,{children:e("addProductIdea.notifications.limitExceededLowPlan.title")}),o.jsx(W,{children:o.jsx(Y,{buttonType:"text",size:"200",onClick:s,children:e("addProductIdea.notifications.limitExceededLowPlan.upgradeTo",{plan:e(`addProductIdea.notifications.limitExceededLowPlan.${t?"entrepreneur":"platinum"}`)})})}),o.jsxs(F,{children:[" ",e("addProductIdea.notifications.limitExceededLowPlan.text")]})]})},V=i.div``,W=i.a`
  text-decoration: none;
  display: inline;
`,Y=i(L)`
  display: inline-block;
  min-height: 18px;
`,F=i(f)`
  display: inline;
`,oe=({type:t})=>{var n;const e=D(g.getState())??"free",s=((n=g.getState().upsellInfo)==null?void 0:n.isChinesePlans)??!1,r=K.includes(e);B.error(r?o.jsx(H,{isChinese:s}):o.jsx(C,{type:t}))},K=["free","starter","alacarte"],ce=({id:t,currentName:e,onCancel:s,onChange:r,isFirst:n,status:T})=>{var I;const{t:d}=E(),l=A.useRef(null),u=t==null?n?"newFirst":"new":"edit",m=T==="loading",{register:x,handleSubmit:k,formState:S}=O({defaultValues:{name:e??""}}),R=k(({name:N})=>{r(N)});return A.useEffect(()=>{var N;(N=l.current)==null||N.focus()},[]),o.jsxs(z,{onSubmit:R,children:[o.jsxs(U,{children:[o.jsx(X,{children:d(`addProductIdea.${u}.title`)}),o.jsx(Z,{children:d(`addProductIdea.${u}.subtitle`)})]}),o.jsx(q,{...x("name",{required:d("addProductIdea.formErrors.minLengthIs",{count:3,value:3}),minLength:{value:3,message:d("addProductIdea.formErrors.minLengthIs",{count:3,value:3})},maxLength:{value:255,message:d("addProductIdea.formErrors.maxLengthIs",{count:255,value:255})}}),ref:p(x("name").ref,l),error:(I=S.errors.name)==null?void 0:I.message,size:"400"}),o.jsxs(J,{children:[o.jsx(L,{type:"button",buttonType:n?"cancel":"secondary",size:"200",onClick:s,disabled:m,children:d(`addProductIdea.${u}.backButton`)}),o.jsx(L,{type:"submit",size:"200",disabled:m,loading:m,children:d(`addProductIdea.${u}.nextButton`)})]})]})},z=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp24};
`,U=i.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.sp4};
  align-items: center;
`,X=i.div`
  ${j};
  text-align: center;
`,Z=i.div`
  ${v};
`,q=i(w)`
  width: 100%;
  max-width: 320px;
`,J=i.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp8};
  margin-top: ${t=>t.theme.spacing.sp16};
`;export{b as A,ce as E,y as a,h as b,re as c,oe as p};
//# sourceMappingURL=EditProductIdeaName-gWrXHheR.js.map
