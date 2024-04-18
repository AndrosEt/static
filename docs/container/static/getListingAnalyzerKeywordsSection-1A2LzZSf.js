import{w as I,r as h,P as N,f as S,g as E,A as wt,d4 as W,by as Dt,j as n,b8 as jt,u,$ as _t,a as z,N as M,M as zt,Z as Ot,y as Pt,Q as Yt,av as yt,d as $t,b as Bt,a6 as Wt,m as O,h as K,e as U,c as B,x as Ht,a7 as Ut,K as Vt,as as Xt,c2 as Kt,a5 as Qt,E as Jt,Y as Zt,I as te}from"./index-VVIvRZBh.js";import{s as kt,f as ft,h as ee,i as se}from"./WidthLimitedTagsValue-v2a_4qBm.js";import{C as H}from"./CustomerEventsComponent-JnkNYJka.js";import{L as re}from"./useAutoPlay-JZxKBgmm.js";import{ay as ae,e as L,a0 as R}from"./Learn-nfpDmxZa.js";import{c as ne}from"./dateRanges-7tA5n6Zh.js";import{a as oe,g as ie,L as ce}from"./TrafficAndConversion-cz9DFyQl.js";import{a as At}from"./index-xyGS0OnY.js";import{h as V}from"./middleware-KgP9JdWn.js";import{d as Tt}from"./use-onclickoutside.browser.esm-zvXz2-0x.js";import{L as le}from"./LineGraphSkeleton-4rFP-rW5.js";const Ft=()=>{const{t}=I();return h.useMemo(()=>[{value:"30",label:`30 ${t("day",{count:30})}`},{value:"90",label:`90 ${t("day",{count:90})}`},{value:"365",label:`1 ${t("year",{count:1})}`},{value:"0",label:t("allTime")}],[t])},de=(t,s,e)=>{const r=e>0?kt(Date.now(),e).getTime():void 0,a=new Set([...t.map(l=>l[0]),...s.map(l=>l[0])]),c=Array.from(a).sort(),o=ue(c,s);return r?o.filter(([l])=>l>r):o},ue=(t,s)=>{const e=[];let r=NaN;return t.forEach((a,c)=>{const o=s.find(l=>l[0]===a);if(o){if(isNaN(r))for(let l=0;l<c;l++)e[l]=[e[l][0],o[1]];r=o[1],e.push(o)}else e.push([a,isNaN(r)?0:r])}),e},pe=t=>{const s=t.length;let e=0,r=0,a=0,c=0;t.forEach((D,j)=>{e+=j,r+=D[1],a+=j*D[1],c+=j*j});const o=e/s,l=r/s,d=a/s,p=c/s,f=o*o,x=d-o*l,b=p-f,C=b===0?0:x/b;return{a:l-C*o,b:C}},ge=t=>{const s=[];if(t.length){const e=pe(t);t.forEach((r,a)=>{if(a===0||a===t.length-1){let c=e.a+e.b*(a+1);c<0&&(c=0),s.push([r[0],c])}})}return s},me=N+"/api/v1/product/review-chart",he=N+"/api/v1/product/bsr-chart",fe=N+"/api/v1/product/sales-chart",xe=(t,s)=>S({method:"GET",url:E(he,{...t}),withCredentials:0,signal:s}),be=(t,s)=>S({method:"GET",url:E(me,{...t}),signal:s,withCredentials:0}),Ce=(t,s)=>S({method:"GET",url:E(fe,{...t}),withCredentials:0,signal:s}),ve=async(t,s)=>await S({method:"GET",url:E(N+"/api/v1/product/subcategories-bsr",{...t}),withCredentials:0,signal:s}),we=wt((t,s)=>({requests:{review:{},bsr:{},bsrSubcategories:{},sales:{}},getReviewChart:(e,r)=>{t(a=>({...a,requests:{...a.requests,review:{...a.requests.review,[e]:W(c=>be({asin:e,marketplace:r,days:0,timezoneOffset:0}),c=>{t(o=>({...o,requests:{...o.requests,review:{...o.requests.review,[e]:{...o.requests.review[e],atom:c}}}}))},()=>s().requests.review[e].atom,{initialStatus:"init"})}}}))},getBsrChart:(e,r)=>{t(a=>({...a,requests:{...a.requests,bsr:{...a.requests.bsr,[e]:W(c=>xe({asin:e,marketplace:r,allData:1,replace:0}),c=>{t(o=>({...o,requests:{...o.requests,bsr:{...o.requests.bsr,[e]:{...o.requests.bsr[e],atom:c}}}}))},()=>s().requests.bsr[e].atom,{initialStatus:"init"})}}}))},getBsrSubcategoriesChart:(e,r)=>{t(a=>({...a,requests:{...a.requests,bsrSubcategories:{...a.requests.bsrSubcategories,[e]:W(c=>ve({asin:e,marketplace:r,dateFrom:"2016-01-01"}),c=>{t(o=>({...o,requests:{...o.requests,bsrSubcategories:{...o.requests.bsrSubcategories,[e]:{...o.requests.bsrSubcategories[e],atom:c}}}}))},()=>s().requests.bsrSubcategories[e].atom,{initialStatus:"init"})}}}))},getSalesChart:(e,r)=>{t(a=>({...a,requests:{...a.requests,sales:{...a.requests.sales,[e]:W(c=>Ce({asin:e,marketplace:r,days:0,timezoneOffset:0}),c=>{t(o=>({...o,requests:{...o.requests,sales:{...o.requests.sales,[e]:{...o.requests.sales[e],atom:c}}}}))},()=>s().requests.sales[e].atom,{initialStatus:"init"})}}}))}})),St=wt(t=>({chartType:null,daysRange:30,setDayRange:s=>t(e=>({...e,daysRange:s})),isOpen:!1,asin:"",open:(s,e)=>t(r=>({...r,isOpen:!0,asin:s,chartType:e})),close:()=>t(s=>({...s,isOpen:!1,keyword:""}))})),xt=(t,s)=>(t||[]).filter(e=>s===0?!0:new Date(e.timestamp*1e3).getTime()>Date.now()-s*3600*1e3*24),bt=(t,s)=>(t||[]).filter(e=>s===0?!0:new Date(e.x*1e3).getTime()>Date.now()-s*3600*1e3*24),Z=(t,s)=>(t||[]).filter(e=>s===0?!0:new Date(e.end*1e3).getTime()>Date.now()-s*3600*1e3*24),De=(t,s)=>(t||[]).filter(e=>s===0?!0:new Date(e[0]).getTime()>Date.now()-s*3600*1e3*24),q=["#0a6fe8","#91ed7e","#434348"],Ct=["#69D698","#F78527","#36C9E2","#D57EBE","#51228F"],je=t=>{const{t:s}=I(),{daysRange:e,chartType:r}=St(),{status:a,addChart:c,getChart:o,data:l}=we(h.useCallback(d=>ye(r,t,e,d,s),[r,t,e,s]));return{status:a,addChart:c,getChart:o,data:l}},ye=(t,s,e,r,a)=>{var c,o,l,d,p,f,x,b,C,k,D,j,P,Y,Q,g,G,nt,ot,it,ct,lt,dt,ut,pt,gt,mt,ht;if(t==="review"){const i=r.requests.review[s],v=((l=(o=(c=i==null?void 0:i.atom)==null?void 0:c.content)==null?void 0:o.results)==null?void 0:l.reviews)||[],A=((f=(p=(d=i==null?void 0:i.atom)==null?void 0:d.content)==null?void 0:p.results)==null?void 0:f.rating)||[],T=xt(v,e).map(({timestamp:w,count:m})=>[w*1e3,m]),F=xt(A,e).map(({timestamp:w,rating:m})=>[w*1e3,m]);return{data:[{name:a("blackBoxCharts.chartAxis.reviewCount"),data:T,color:q[0]},{name:a("blackBoxCharts.chartAxis.rating"),data:F,color:q[1]}],getChart:i==null?void 0:i.action,status:((x=i==null?void 0:i.atom)==null?void 0:x.status)||"waiting",addChart:r.getReviewChart}}if(t==="bsr"){const i=r.requests.bsr[s],v=r.requests.bsrSubcategories[s],A=((k=(C=(b=i==null?void 0:i.atom)==null?void 0:b.content)==null?void 0:C.results)==null?void 0:k.bsrHistory)||[],T=Z(A,e).map(({start:w,value:m})=>[w*1e3,m]).sort((w,m)=>w[0]-m[0]),F=(((D=v==null?void 0:v.atom.content)==null?void 0:D.results)||[])[0]?(((j=v==null?void 0:v.atom.content)==null?void 0:j.results)||[])[0].subcategories.map((w,m)=>({name:w.subcategoryName,data:De(w.data.sort((y,J)=>y.createdAt-J.createdAt).map(({createdAt:y,salesRank:J})=>[y*1e3,J]),e),color:Ct[m+1],isLine:!0,yAxis:1})):[];return{data:[{name:((P=i==null?void 0:i.atom.content)==null?void 0:P.results.categoryName)||a("blackBoxCharts.chartAxis.bsr"),data:T,color:Ct[0],isLine:!0,yAxis:0},...F],getChart:()=>{i==null||i.action(),v==null||v.action()},status:((Y=i==null?void 0:i.atom)==null?void 0:Y.status)||"waiting",addChart:(w,m)=>{r.getBsrChart(w,m),r.getBsrSubcategoriesChart(w,m)}}}if(t==="price"){const i=r.requests.bsr[s],v=((G=(g=(Q=i==null?void 0:i.atom)==null?void 0:Q.content)==null?void 0:g.results)==null?void 0:G.newPriceHistory)||[],A=((it=(ot=(nt=i==null?void 0:i.atom)==null?void 0:nt.content)==null?void 0:ot.results)==null?void 0:it.bsrHistory)||[],T=Z(v,e).map(({start:m,value:y})=>[m*1e3,y]),F=Z(A,e).map(({start:m,value:y})=>[m*1e3,y]),_=de(F,T,e);return{data:[{name:a("blackBoxCharts.chartAxis.price"),data:_,color:q[0],isLine:!0}],getChart:i==null?void 0:i.action,status:((ct=i==null?void 0:i.atom)==null?void 0:ct.status)||"waiting",addChart:r.getBsrChart}}if(t==="sales"){const i=r.requests.sales[s],v=((ut=(dt=(lt=i==null?void 0:i.atom)==null?void 0:lt.content)==null?void 0:dt.results)==null?void 0:ut.sales)||[],A=bt(v,e).map(({x:m,y})=>[m*1e3,y]),T=((mt=(gt=(pt=i==null?void 0:i.atom)==null?void 0:pt.content)==null?void 0:gt.results)==null?void 0:mt.movAvg)||[],F=bt(T,e).map(({x:m,y})=>[m*1e3,y]),_=ge(A);return{data:[{name:a("blackBoxCharts.chartAxis.sales"),data:A,color:q[0],oneYAxis:!0},{name:a("blackBoxCharts.chartAxis.7DayMovingAverage"),data:F,color:q[1],oneYAxis:!0},{name:a("blackBoxCharts.chartAxis.trend"),data:_,color:q[2],hideMouseTracking:!0,oneYAxis:!0}],getChart:i==null?void 0:i.action,status:((ht=i==null?void 0:i.atom)==null?void 0:ht.status)||"waiting",addChart:r.getSalesChart}}return{data:[],addChart:()=>{},status:"waiting"}},$e=h.lazy(()=>Dt(()=>import("./Graph-XoqkuhLC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])).then(t=>({default:t.Graph}))),Be=({status:t,asin:s,data:e,days:r,onDaysChange:a,oneYAxis:c,chartType:o,currency:l,showCustomerEvents:d,renderTooltipInsights:p,renderInsightsEvents:f})=>{const x=Ft(),b=()=>s;return n.jsxs(ke,{name:d?o:null,children:[n.jsxs(Ne,{$showCustomerEvents:d,children:[n.jsx(Me,{children:n.jsx(jt,{appendTo:"parent",value:String(r),options:x,placeholder:"Range",size:"200",onChange:({value:C})=>a&&a(Number(C))})}),d?n.jsxs(Ge,{children:[n.jsx(H.AddNote,{}),n.jsx(H.Toggle,{}),n.jsx(H.Settings,{})]}):null,n.jsx(_e,{children:n.jsx(Te,{children:e.map(C=>n.jsxs(Fe,{children:[n.jsx(Se,{$color:C.color}),n.jsx(Ee,{children:C.name})]},C.name))})})]}),n.jsxs(h.Suspense,{fallback:vt,children:[t==="loaded"&&n.jsx(Ae,{children:n.jsx($e,{data:e||[],height:400,days:r,oneYAxis:c,chartType:o,currency:l,asin:s,showCustomerEvents:d,renderTooltipInsights:p,renderInsightsEvents:f})}),(t==="loading"||t==="init")&&vt,t==="error"&&n.jsxs(Le,{children:[n.jsx("div",{children:"Ooops. Error!"}),n.jsx(Re,{buttonType:"primary",size:"200",onClick:b,children:"Reload"})]})]})]})},ke=h.memo(({children:t,name:s})=>s?n.jsx(H,{name:s,children:t}):n.jsx(n.Fragment,{children:t})),Et=u.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ae=u.div`
  min-height: 400px;
`,Te=u.div`
  ${_t};
  color: ${({theme:t})=>t.systemColors.black};
  display: flex;
  align-items: center;
  min-width: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`,Fe=u.div`
  display: flex;
  align-items: center;
`,Se=u.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 4px 4px 4px 8px;
  background-color: ${({$color:t})=>t};
  margin-right: ${({theme:t})=>t.spacing.sp4};
  flex: 0 0 auto;
`,Ee=u.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,vt=n.jsx(Et,{children:n.jsx(re,{})}),Le=u(Et)`
  flex-direction: column;
`,Re=u(M)`
  margin-top: ${({theme:t})=>t.spacing.sp24};
`,qe=z`
  grid-template-areas:
    "select eventsActions"
    "legend legend";
`,Ie=z`
  grid-template-areas: "select legend";
`,Ne=u.div`
  display: grid;
  grid-gap: ${({theme:t})=>t.spacing.sp16};
  margin-bottom: ${({theme:t})=>t.spacing.sp24};
  ${({$showCustomerEvents:t})=>t?qe:Ie};
`,Me=u.div`
  grid-area: select;
  width: 144px;
`,Ge=u.div`
  grid-area: eventsActions;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:t})=>t.spacing.sp16};
`,_e=u.div`
  grid-area: legend;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Gs=({marketplace:t,showMarketplace:s=!1,showCustomerEvents:e=!1,renderTooltipInsights:r,renderInsightsEvents:a})=>{const{t:c}=I(),{asin:o,isOpen:l,close:d,setDayRange:p,daysRange:f,chartType:x}=St(),{status:b,data:C,addChart:k,getChart:D}=je(o),j=Ft();return h.useEffect(()=>{l&&(b==="waiting"?k(o,t.store):b==="init"&&(D==null||D()))},[k,D,o,b]),h.useEffect(()=>{l&&p(Number(j[0].value))},[l,j,p]),n.jsx(zt,{isOpen:l,onClose:d,onClickOutside:ae,size:"200",title:x&&`${c(`blackBoxCharts.titles.${x}`,{asin:o})}${s?` (${t.domain})`:""}`,footer:n.jsx(ze,{children:n.jsx(M,{size:"200",onClick:d,children:c("common.close")})}),children:n.jsx(Be,{days:f,status:b,asin:o,data:C,onDaysChange:p,oneYAxis:x!=="review",chartType:x,currency:t.currency,showCustomerEvents:e,renderTooltipInsights:r,renderInsightsEvents:a})})},ze=u.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,Oe=({title:t,tooltip:s,period:e,additionTitle:r,size:a="big"})=>n.jsxs("div",{children:[n.jsxs(We,{children:[n.jsx(Pe,{$size:a,children:t}),r,n.jsx(He,{content:s})]}),e??n.jsx(Ye,{children:e})]}),Pe=u.div`
  ${({$size:t})=>t==="big"&&z`
      ${Ot};
    `}
  ${({$size:t})=>t==="medium"&&z`
      ${Pt};
      color: ${({theme:s})=>s.systemColors.black};
    `}
`,Ye=u.div`
  ${Yt};
  margin-top: ${({theme:t})=>t.spacing.sp4};
`,We=u.div`
  display: flex;
  align-items: center;
`,He=u(oe)`
  margin-left: ${({theme:t})=>t.spacing.sp8};
`,Ue=({days:t,data:s,period:e})=>{const r=new Date,a=L(r,"standard"),c=h.useMemo(()=>Math.min(...s.map(o=>{var d;const l=(o.data||[]).filter(p=>p[1]!=null);return((d=l==null?void 0:l[0])==null?void 0:d[0])||Date.now()})),[s]);if(e)return e.map(o=>L(o,"standard")).join(" - ");switch(t){case 30:return`${L(V(r,-1),"standard")} – ${a}`;case 90:return`${L(V(r,-3),"standard")} – ${a}`;case 365:return`${L(At(r,-1),"standard")} – ${a}`;default:return`${L(new Date(c),"standard")} – ${a}`}},Ve=(t,s)=>{var e;return`https://${(e=yt("AM","TLDomain",t))==null?void 0:e.domain}/dp/${s}`},Xe={asin:"",marketplaceStore:""},Lt=$t("bsrGraph/set"),$=Bt("bsrGraphAtom",Xe,t=>[t(Lt,(s,e)=>({...s,...e}))]),Rt=["#69D698","#F78527","#36C9E2","#D57EBE","#51228F"],Ke=(t,s)=>t.filter(e=>Qe(new Date(e.end*1e3),s)),Qe=(t,s)=>(ft(t,s[0])||ee(t,s[0]))&&(ft(t,s[1])||se(t,s[1])),qt=N;Wt("https://research-tools.helium10.com");const Je=qt+"/api/v1/product/bsr-chart",Ze=qt+"/api/v1/product/subcategories-bsr",ts=({link:t,...s},e)=>S({method:"GET",url:E(t||Je,{...s}),signal:e,withCredentials:0}),It=$t("setRangeForBSR"),st=Bt("rangeForBSR",30,t=>{t(It,(s,e)=>e)}),es=O("rangeForBSRForAPISelector",K([st,$]),([t,{defaultPeriod:s}])=>{const e="yyyy-MM-dd",r=new Date,a=R(r,e);if(s)return{dateFrom:R(s[0],e),dateTo:R(s[1],e)};switch(t){case 30:return{dateFrom:R(V(r,-1),e),dateTo:a};case 90:return{dateFrom:R(V(r,-3),e),dateTo:a};case 365:return{dateFrom:R(At(r,-1),e),dateTo:a};default:return{}}}),ss=({link:t,...s},e)=>S({method:"GET",url:E(t||Ze,{...s}),withCredentials:0,signal:e}),rt=Tt("getBsrChartForSubcategories",async(t,{getState:s})=>{var e;return ss({...t,link:(e=s($).proxy)==null?void 0:e["/product/subcategories-bsr"]})}),rs=O(rt.atom,t=>{var e,r;return(((r=(e=t.content)==null?void 0:e.results[0])==null?void 0:r.subcategories)||[]).map(({subcategoryName:a,url:c,data:o,subcategoryId:l},d)=>({name:a,data:o.sort((p,f)=>p.createdAt-f.createdAt).map(({createdAt:p,salesRank:f})=>[p*1e3,f]),color:Rt[d+1],isLine:!0,bsrUrl:c,id:l}))}),at=Tt("getBsrChartForCategories",async(t,{getState:s})=>{var e;return ts({...t,link:(e=s($).proxy)==null?void 0:e["/product/bsr-chart"]})}),as=O(K([at.atom,st,$]),([t,s,{defaultPeriod:e}])=>{var l,d,p;const r=((l=t.content)==null?void 0:l.results.bsrHistory)||[],a=e||[kt(new Date,s),new Date],o=(e||s?Ke(r,a):r).map(({start:f,value:x})=>[f*1e3,x]);return[{name:((d=t.content)==null?void 0:d.results.categoryName)||"Category",data:o,color:Rt[0],isLine:!0,bsrUrl:((p=t.content)==null?void 0:p.results.categoryUrl)||null,id:"_Category"}]}),ns=O(K([as,rs,$]),([t,s,{groupBy:e,defaultPeriod:r}])=>{const a=[...t,...s];return e?a.map(c=>({...c,data:ie(c.data,e,r==null?void 0:r[0])})):a}),os=O(K([at.atom,rt.atom]),([t,s])=>t.status==="loading"||s.status==="loading"?"loading":"loaded"),Nt=()=>{const t=U(at.actions.pending),s=U(rt.actions.pending),{asin:e,marketplaceStore:r}=B($),{dateFrom:a,dateTo:c}=B(es);return h.useCallback(()=>{e&&r&&(t({allData:1,asin:e,marketplace:r,replace:0}),s({asin:e,marketplace:r,dateFrom:a||"2016-01-01",dateTo:c}))},[e,a,c,t,s,r])},is=({item:t,disabled:s,onClick:e})=>{const r=t.name==="N/A";return n.jsxs(Mt,{children:[n.jsxs(cs,{onClick:()=>e==null?void 0:e(t.id),$disabled:s,children:[n.jsx(ce,{$color:s?"#A6B7C9":t.color}),t.name]}),n.jsx(ds,{href:r?void 0:t.bsrUrl||"",target:"_blank",rel:"noreferrer",children:n.jsx(ls,{buttonType:"icon",type:"button",icon:n.jsx(Ht,{icon:Ut}),disabled:r})})]})},Mt=u.div`
  display: flex;
  align-items: center;
`,cs=u(Mt)`
  cursor: pointer;
  ${({$disabled:t,theme:s})=>t&&z`
      color: ${s.systemColors.grey300};

      & > :first-child {
        background-color: ${s.systemColors.grey300};
      }
    `}
`,ls=u(M)`
  margin-left: 6px;
`,ds=u.a`
  text-decoration: none;
`,us=({height:t,getChartData:s})=>{const{t:e}=I();return n.jsxs(ps,{height:t,children:[n.jsx(gs,{children:e("chartError.text")}),n.jsx(ms,{buttonType:"primary",size:"200",onClick:s,children:e("chartError.button")})]})},ps=u.div`
  width: 100%;
  height: ${({height:t})=>t||300}px;
`,gs=u.div`
  ${Vt};
`,ms=u(M)`
  margin-top: ${({theme:t})=>t.spacing.sp24};
`,hs=()=>{const{t}=I(),s=B($,o=>o.onImproveClick,[]),{isMine:e}=B($),r=Xt(Kt),c=`https://portals.helium10.com/${Qt()}/attributions`;return e&&!fs.includes(r)?n.jsx(xs,{onClick:s,href:c,target:"_blank",rel:"noreferrer",children:n.jsx(Jt,{content:t("bsrChart.improveInAmazonAttribution.tooltip"),children:n.jsx(M,{buttonType:"secondary",type:"button",children:t("bsrChart.improveInAmazonAttribution.button")})})}):null},fs=["free","starter"],xs=u.a`
  text-decoration: none;
`,bs=h.lazy(()=>Dt(()=>import("./Graph-09nc_Wu-.js"),__vite__mapDeps([30,1,2,31,32,18,6,7,8,9,10,33,34,15,12,35,25,26,27,28,29])).then(t=>({default:t.Graph}))),Cs=({status:t,data:s,days:e,onDaysChange:r})=>{const{t:a}=I(),c=ne(),o=B($,g=>g.groupBy,[]),l=B($,g=>g.defaultPeriod,[]),[d,p]=h.useState({}),f=h.useCallback(g=>{p(G=>({...G,[g]:!G[g]}))},[]),x=h.useMemo(()=>s.filter(g=>!d[g.id]),[s,d]),b=Nt(),C=h.useMemo(()=>({init:n.jsx(tt,{}),loaded:n.jsx(Gt,{children:n.jsx(bs,{data:x||[],height:400,days:e,groupBy:o})},JSON.stringify(d)),error:n.jsx(us,{height:400,getChartData:b}),progress:null,waiting:null,loading:n.jsx(tt,{})}),[e,d,x,b,o]),{asin:k,marketplaceStore:D,hideImproveButton:j,hidePeriodPicker:P}=B($),Y=yt("AM","store",D).TLDomain;return Ve(Y,k),n.jsxs(vs,{children:[n.jsxs(ws,{children:[n.jsx(Oe,{title:a("bsrChart.title"),additionTitle:!1,tooltip:a("bsrChart.tooltip"),period:Ue({days:e,data:s,period:l})}),n.jsxs($s,{children:[!j&&n.jsx(hs,{}),!P&&n.jsx(ys,{children:n.jsx(jt,{placeholder:"Range",options:c.map(g=>({...g,value:g.value.toString()})),size:"100",value:String(e),onChange:({value:g})=>r&&r(Number(g)),appendTo:document.body})})]})]}),n.jsxs(h.Suspense,{fallback:n.jsx(tt,{}),children:[C[t],t==="loaded"&&n.jsx(js,{children:s.map(g=>n.jsx(is,{item:g,disabled:d[g.id],onClick:f},g.id))})]})]})},tt=()=>n.jsx(Ds,{children:n.jsx(le,{legendCount:3})}),vs=u.div`
  background: #ffffff;
  border: 1px solid #d9e0e8;
  border-radius: 6px;
  padding: ${({theme:t})=>t.spacing.sp24};
  width: 100%;
`,ws=u.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:t})=>t.spacing.sp32};
  justify-content: space-between;
`,Gt=u.div`
  min-height: 400px;
`,Ds=u(Gt)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,js=u.div`
  color: ${({theme:t})=>t.systemColors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  ${Zt};

  & > :not(:first-child) {
    margin-left: ${({theme:t})=>t.spacing.sp16};
  }

  ${te.mobileBefore} {
    flex-direction: column;
  }
`,ys=u.div`
  width: 187px;
`;u.a`
  text-decoration: none;

  & > button > div {
    margin-right: 0 !important;
  }
`;u(M)`
  margin-left: ${({theme:t})=>t.spacing.sp8};
`;const $s=u.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${({theme:t})=>t.spacing.sp16};
  }
`,Bs=()=>{const t=B(st),s=B(os),e=B(ns),r=Nt();h.useEffect(r,[r]);const a=U(It);return n.jsx(Cs,{data:e,days:t,status:s,onDaysChange:a})},_s=t=>{const s=U(Lt);return h.useEffect(()=>s(t),[t,s]),n.jsx(Bs,{})};var X;(function(t){t[t.Single=1]="Single",t[t.Multi=2]="Multi"})(X||(X={}));const zs=async t=>{const s=t.sortName?{searchId:t.searchId,sort:t.asc?t.sortName:`-${t.sortName}`}:{searchId:t.searchId},e=await S({url:E(`${N}/listing-analyzer/la-api/get-keywords-section`,s),method:"GET",withCredentials:0}),{keywords:r,...a}=e,c=ks(r.map(d=>({...d,searchVolume:et(d.searchVolume),organicPosition:et(d.organicPosition,1),performanceScore:d.performanceScore?et(d.performanceScore||0,1):void 0}))),o=t.sortName&&t.asc!==void 0?{sortName:t.sortName,asc:t.asc}:{sortName:e.searchType===X.Single?"organicPosition":"performanceScore",asc:e.searchType===X.Single};return{...a,keywords:c,...o}};function ks(t){return t.reduce((s,e)=>(s.byId[e.id]=e,s.order.push(String(e.id)),s),{byId:{},order:[]})}function et(t,s=0){const e=10**s;return Math.round(t*e)/e}export{Gs as B,X as L,_s as a,zs as g,St as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/Graph-XoqkuhLC.js","static/index-VVIvRZBh.js","static/server.browser-VH3XJs1z.js","static/withCustomerEvents-XBG2BA9u.js","static/highcharts-RNwAsTZN.js","static/CustomerEventsComponent-JnkNYJka.js","static/Learn-nfpDmxZa.js","static/useAutoPlay-JZxKBgmm.js","static/WidthLimitedTagsValue-v2a_4qBm.js","static/middleware-KgP9JdWn.js","static/use-latest.esm-ABeUYwlj.js","static/getUpsellData--u-Ov2M_.js","static/NewRadio-yIsEqEsT.js","static/index-7v7JHEmS.js","static/CategoricalChip-FObKkzKw.js","static/Collapse-wvXOjCKb.js","static/ProductChip-swqSSqla.js","static/configuration-qUZ7dDqV.js","static/leitenList-G2zkImOB.js","static/ProductMultiSelect-rF6KDBVq.js","static/TagsMultiSelect-D_WMtxSh.js","static/index-JL-77yQX.js","static/orderBy-yhmyNAlV.js","static/_baseMap-8s9VLaf_.js","static/GraphTooltip-RxcyF24I.js","static/AddToMyListDropdown-EN5Nh0z5.js","static/use-onclickoutside.browser.esm-zvXz2-0x.js","static/MarketplaceSingleSelect-4raCX1Al.js","static/ChartExport-2jItu5Oi.js","static/LineGraphSkeleton-4rFP-rW5.js","static/Graph-09nc_Wu-.js","static/TrafficAndConversion-cz9DFyQl.js","static/groupBy-CPP6D356.js","static/index-brVtAN5y.js","static/index-xyGS0OnY.js","static/AirTable-W1eK4Y6W.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=getListingAnalyzerKeywordsSection-1A2LzZSf.js.map
