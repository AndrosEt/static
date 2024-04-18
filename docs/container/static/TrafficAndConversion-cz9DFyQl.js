import{j as s,E as q,x as Q,c7 as pe,u as p,f as Ce,g as ue,P as je,w as S,ag as ge,A as fe,G as me,aI as A,N as Z,r as b,b8 as De,I as m,Q as he,Z as $e,y as ke,$ as Pe,a as _,K as Oe,ce as Re,bk as J,b6 as W,bj as Ve}from"./index-VVIvRZBh.js";import{g as Be}from"./groupBy-CPP6D356.js";import{g as ze,c as Le,b as Ie,d as Me,h as Ne,s as te,D as _e}from"./WidthLimitedTagsValue-v2a_4qBm.js";import{g as Fe}from"./index-brVtAN5y.js";import{a as z,s as F,e as X,b as G,c as Ue}from"./middleware-KgP9JdWn.js";import{s as We}from"./index-xyGS0OnY.js";import{a0 as B,t as Ge,e as L}from"./Learn-nfpDmxZa.js";import{f as I,o as se}from"./useAutoPlay-JZxKBgmm.js";import{C as He}from"./Collapse-wvXOjCKb.js";import{A as Ke}from"./AirTable-W1eK4Y6W.js";import{r as Ye}from"./server.browser-VH3XJs1z.js";import{a as qe}from"./AddToMyListDropdown-EN5Nh0z5.js";import{C as Qe}from"./ChartExport-2jItu5Oi.js";import{L as Ze}from"./LineGraphSkeleton-4rFP-rW5.js";const ae=({content:e,className:t})=>s.jsx(q,{content:e,children:s.jsx("div",{className:t,children:s.jsx(Q,{icon:pe})})}),H=(e,t,a)=>{const n=Be(e,o=>{const i=new Date(o[0]),r=ze(i);return t==="week"?`${r}-${Fe(i)}`:t==="month"?`${r}-${Le(i)}`:t==="year"?r:""});return Object.entries(n).reduce((o,[i,r])=>{const d=r[0][0],u=t==="week"?z(We(d),1):t==="month"?z(Ie(d),1):t==="year"?z(Me(d),1):new Date(d);return(!a||Ne(u,a))&&o.push([u.getTime(),r.reduce((y,c)=>y+c[1],0)/r.length]),o},[])},M=p.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 4px;
  justify-content: center;
  background-color: ${({$color:e})=>e};
`;var N;(function(e){const t=je+"/api/v1/profits/research/traffic/conversion";e.get=async a=>Ce({url:ue(t,{}),method:"GET",params:a,withCredentials:0})})(N||(N={}));const Je=e=>{const t=new Date;return[...new Array(e)].map((a,n)=>B(z(t,-n),"yyyy-MM-dd"))},T=e=>e?Object.entries(e).map(([t,a])=>{const n=new Date(t),o=n.getTime(),i=n.getTimezoneOffset(),u=new Date(o+n.getTimezoneOffset()*6e4).getTimezoneOffset()-i;return[o+(i+u)*6e4,isNaN(Number(a))?0:Number(a)]}).sort((t,a)=>t[0]-a[0]):[],xe=e=>({...e,results:{...e.results,summaryData:{sessions:{total:e.results.summaryData.sessionsData.totalSessions,rate:e.results.summaryData.sessionsData.avgSessionsRate},view:{total:e.results.summaryData.pageViewsData.totalPageView,rate:e.results.summaryData.pageViewsData.avgPageViewRate},ordered:{total:e.results.summaryData.unitsOrderedData.totalUnitsOrdered,rate:e.results.summaryData.unitsOrderedData.avgUnitsOrderedRate}}}}),ye=e=>{const t=[...e].sort((a,n)=>a.getTime()-n.getTime());return{dateFrom:B(F(t[0]),"yyyy-MM-dd"),dateTo:B(X(t[1]),"yyyy-MM-dd")}},U=()=>{const e=F(new Date);return{Today:{value:[e,e],localizationKey:"today",days:1},Yesterday:{value:[te(e,1),te(e,1)],localizationKey:"yesterday",days:1},"Last 7 Days":{value:[G(e,{days:-6}),e],localizationKey:"lastNDays",days:7},"Last 30 Days":{value:[G(e,{days:-29}),e],localizationKey:"lastNDays",days:30},"Last 60 Days":{value:[G(e,{days:-59}),e],localizationKey:"lastNDays",days:60}}},Xe=()=>{const{t:e}=S();return Object.entries(U()).map(([t,{localizationKey:a,days:n,value:o}])=>({id:t,label:e(`salesChart.periods.${a}`,{N:n}),value:o}))},Ee=()=>Xe().filter(t=>t.id!=="Today"&&t.id!=="Yesterday"),ve=({fetchError:e})=>{var a,n;const t=ge.getState().translation;if(t){const{t:o}=t,i=(a=e==null?void 0:e.result)!=null&&a.message?o(`alertsErrors.${(n=e==null?void 0:e.result)==null?void 0:n.message}`):o(`errors.common.${e==null?void 0:e.responseStatus}`);Ge.error(i)}},l=fe(()=>({props:{},period:U()["Last 30 Days"].value,selectedSku:null,data:null,disabledCharts:{},tableData:null,tablePeriod:"Last 7 Days",tableVisibility:{ordered:!1,sessions:!1,view:!1}})),C=me(l,"data",async e=>{const t=await N.get(e);return xe(t)},{rejected:ve}),be=me(l,"tableData",async e=>{const t=await N.get(e);return xe(t)},{rejected:ve}),et=e=>{const{asin:t,marketplace:a,sellerId:n,defaultSku:o,hasTables:i}=e,r=l.getState().props,d=ee(l.getState().period),u=l.getState().selectedSku;if(l.setState(()=>({props:e})),t&&a&&n&&o!=null&&((u==null?void 0:u.value)!==o?Se({value:o,label:o}):(r.asin!==t||r.marketplace!==a||r.sellerId!==n)&&E({asin:t,marketplace:a,sellerId:n,sku:o,period:d}),i)){const y=l.getState().tablePeriod,c=U()[y].value,f=ye(c);be.action({asin:t,marketplace:a,sellerId:n,sku:o,...f})}},we=({period:e,isInitialization:t})=>{var d;const{asin:a,defaultSku:n,marketplace:o,sellerId:i}=l.getState().props,r=((d=l.getState().selectedSku)==null?void 0:d.value)||n;i&&a&&r&&o&&e&&!t&&e.length>0&&(l.setState(u=>({period:e.length>0?e:u.period})),E({sellerId:i,marketplace:o,period:ee(e),asin:a,sku:r})),it(["ordered","sessions","view"])},Se=e=>{const t=ee(l.getState().period),{asin:a,marketplace:n,sellerId:o}=l.getState().props;l.setState(()=>({selectedSku:e})),o&&a&&e.value&&n&&E({sellerId:o,marketplace:n,period:t,asin:a,sku:e.value})},E=({sellerId:e,marketplace:t,period:a,asin:n,sku:o})=>{e&&n&&o&&C.action({...a,sellerId:e,asin:n,marketplace:t,sku:o})},tt=e=>{l.setState(t=>({disabledCharts:{...t.disabledCharts,[e]:!t.disabledCharts[e]}}))},st=e=>{var r;const{asin:t,defaultSku:a,marketplace:n,sellerId:o}=l.getState().props,i=((r=l.getState().selectedSku)==null?void 0:r.value)||a;if(o&&t&&i&&n&&e){const d=U()[e].value,u=ye(d);be.action({sellerId:o,marketplace:n,...u,asin:t,sku:i})}l.setState(()=>({tablePeriod:e}))},at=()=>{const e=l.getState().tablePeriod;st(e==="Last 7 Days"?"Last 30 Days":"Last 7 Days")},nt=e=>{l.setState(t=>({tableVisibility:{...e.reduce((a,n)=>({...a,[n]:!t.tableVisibility[n]}),t.tableVisibility)}}))},it=e=>{l.setState(t=>({tableVisibility:{...e.reduce((a,n)=>({...a,[n]:!1}),t.tableVisibility)}}))},ot=e=>{var o;const t=e.tablePeriod==="Last 7 Days"?7:30,a=Je(t),n=(o=e.tableData)==null?void 0:o.results;return{sessions:n!=null?a.map(i=>({id:i,date:i,total:n.sessionsData.sessions[i],rate:n.sessionsData.sessionsRate[i]})):[],view:n!=null?a.map(i=>({id:i,date:i,total:n.pageViewsData.pageView[i],rate:n.pageViewsData.pageViewRate[i]})):[],ordered:n!=null?a.map(i=>({id:i,date:i,total:n.unitsOrderedData.unitsOrdered[i],rate:n.unitsOrderedData.unitsOrderedRate[i]})):[]}},rt=e=>{var t,a;return((a=(t=e.data)==null?void 0:t.results)==null?void 0:a.summaryData)||null},dt=e=>e.tablePeriod==="Last 7 Days"?30:7,lt=e=>{var t;return(((t=e.props)==null?void 0:t.skuOptions)||[]).map(a=>({value:a,label:a}))},ct=e=>{var t;return!((t=e.props)!=null&&t.skuOptions)},ee=e=>{const t=[...e].sort((a,n)=>a.getTime()-n.getTime());return{dateFrom:B(F(t[0]),"yyyy-MM-dd"),dateTo:B(X(t[1]),"yyyy-MM-dd")}},pt=e=>{const t=[...e.period].sort((o,i)=>o.getTime()-i.getTime()),a=F(t[0]),n=X(t[1]);return Ue(n,a)},ut=e=>{var a,n,o,i,r,d,u,y,c,f,g,x;const t=(a=ge.getState().translation)==null?void 0:a.t;return{sessions:[{field:"sessions",name:(t==null?void 0:t("trafficAndConversation.charts.sessionsAndSessionsRate.legend.sessions"))||"Sessions",tooltip:(t==null?void 0:t("trafficAndConversation.charts.sessionsAndSessionsRate.legend.sessionsTooltip"))||"",data:T((n=e.data)==null?void 0:n.results.sessionsData.sessions),color:A.teal500},{field:"sessionsRate",name:(t==null?void 0:t("trafficAndConversation.charts.sessionsAndSessionsRate.legend.sessionsRate"))||"Sessions Rate",tooltip:(t==null?void 0:t("trafficAndConversation.charts.sessionsAndSessionsRate.legend.sessionsRateTooltip"))||"",legendName:(t==null?void 0:t("trafficAndConversation.charts.sessionsAndSessionsRate.legend.sessionsRateAverage"))||"Average Session Rate",data:T((i=(o=e.data)==null?void 0:o.results)==null?void 0:i.sessionsData.sessionsRate),color:A.cyan900,isPercentage:!0}],pageView:[{field:"pageView",name:(t==null?void 0:t("trafficAndConversation.charts.pageViewAndPageViewRate.legend.pageView"))||"Page View",tooltip:(t==null?void 0:t("trafficAndConversation.charts.pageViewAndPageViewRate.legend.pageViewTooltip"))||"",data:T((d=(r=e.data)==null?void 0:r.results)==null?void 0:d.pageViewsData.pageView),color:A.orange500},{field:"pageViewRate",name:(t==null?void 0:t("trafficAndConversation.charts.pageViewAndPageViewRate.legend.pageViewRate"))||"Page View Rate",tooltip:(t==null?void 0:t("trafficAndConversation.charts.pageViewAndPageViewRate.legend.pageViewRateTooltip"))||"",legendName:(t==null?void 0:t("trafficAndConversation.charts.pageViewAndPageViewRate.legend.pageViewRateAverage"))||"Average Page View Rate",data:T((y=(u=e.data)==null?void 0:u.results)==null?void 0:y.pageViewsData.pageViewRate),color:A.cyan500,isPercentage:!0}],unitsOrdered:[{field:"unitsOrdered",name:(t==null?void 0:t("trafficAndConversation.charts.unitsOrderedAndUnitSessionRate.legend.unitsOrdered"))||"Units Ordered",tooltip:(t==null?void 0:t("trafficAndConversation.charts.unitsOrderedAndUnitSessionRate.legend.unitsOrderedTooltip"))||"",data:T((f=(c=e.data)==null?void 0:c.results)==null?void 0:f.unitsOrderedData.unitsOrdered),color:A.green500},{field:"unitSessionRate",name:(t==null?void 0:t("trafficAndConversation.charts.unitsOrderedAndUnitSessionRate.legend.unitSessionRate"))||"Unit Session Rate",tooltip:(t==null?void 0:t("trafficAndConversation.charts.unitsOrderedAndUnitSessionRate.legend.unitSessionRateTooltip"))||"",legendName:(t==null?void 0:t("trafficAndConversation.charts.unitsOrderedAndUnitSessionRate.legend.unitSessionRateAverage"))||"Average Order Session Rate",data:T((x=(g=e.data)==null?void 0:g.results)==null?void 0:x.unitsOrderedData.unitsOrderedRate),color:A.magenta600,isPercentage:!0}]}},gt=()=>{const{t:e}=S(),t=C(o=>o.status!=="loaded"),a=l(o=>o.props.onOptimizeClick),n=ue("https://members.helium10.com/listing-builder/landing",{});return s.jsx(ft,{onClick:a,href:n,target:"_blank",rel:"noreferrer",children:s.jsx(q,{content:e("trafficAndConversation.optimizeInListingBuilder.tooltip"),children:s.jsx(Z,{buttonType:"secondary",type:"button",disabled:t,children:e("trafficAndConversation.optimizeInListingBuilder.button")})})})},ft=p.a`
  text-decoration: none;
`,mt=()=>{const{t:e}=S(),t=l(i=>i.period),a=b.useCallback(i=>we({period:i}),[]),n=Ee(),o=C(i=>i.status!=="loaded");return s.jsx(ht,{children:s.jsx(_e,{onChange:a,value:t,placeholder:e("salesChart.periodsPlaceholder"),mode:"range",alwaysRange:!1,columns:2,periodPresets:n,showCalendar:!0,disabled:o,maxDate:new Date})})},ht=p.div`
  min-width: 240px;
  width: fit-content;
`,xt=()=>{const e=l(t=>t.period);return b.useMemo(()=>{const t=[...e].sort((a,n)=>a.getTime()-n.getTime());return`${L(t[0],"standard")} – ${L(t[1],"standard")}`},[e])},yt=()=>{const e=l(n=>n.selectedSku),t=l(lt),a=l(ct);return s.jsx(De,{options:t,value:e,onChange:Se,disabled:a})},vt=b.memo(()=>{const{t:e}=S(),t=xt(),a=l(d=>{var u;return(((u=d.props)==null?void 0:u.skuOptions)||[]).length>0}),n=l(d=>d.props.hideOptimizeButton),o=l(d=>d.props.hidePeriodPicker),i=l(d=>d.props.hidePeriod??!1),r=l(d=>d.props.title??e("trafficAndConversation.title"));return s.jsxs($t,{hidePeriod:i,children:[s.jsxs(Ct,{children:[s.jsx(Dt,{children:r}),s.jsx(q,{content:e("trafficAndConversation.tooltip"),children:s.jsx(jt,{children:s.jsx(Q,{icon:pe})})})]}),!i&&s.jsx(Tt,{children:t}),s.jsxs(At,{children:[!n&&s.jsx(wt,{children:s.jsx(gt,{})}),a&&s.jsx(St,{children:s.jsx(yt,{})}),!o&&s.jsx(bt,{children:s.jsx(mt,{})})]})]})}),bt=p.div`
  grid-area: calendar;
  display: flex;
  justify-content: right;

  ${m.largeDesktopBefore} {
    justify-content: left;
  }
`,wt=p.div`
  grid-area: optimize-button;
  text-align: right;
  align-self: center;
  margin-right: ${({theme:e})=>e.spacing.sp16};

  ${m.laptopBefore} {
    margin-right: 0;
    text-align: start;
  }

  ${m.mobileBefore} {
    text-align: left;
    margin-right: 0;
  }
`,St=p.div`
  grid-area: sku-select;
  min-width: 232px;
  margin-right: ${({theme:e})=>e.spacing.sp16};

  ${m.largeDesktopBefore} {
    margin-right: 0;
  }

  ${m.desktopBefore} {
    margin-right: ${({theme:e})=>e.spacing.sp16};
  }

  ${m.laptopBefore} {
    max-width: 400px;
  }
`,At=p.div`
  margin-left: ${({theme:e})=>e.spacing.sp16};

  grid-area: actions;
  display: flex;
  justify-content: right;

  ${m.largeDesktopBefore} {
    display: contents;
    margin-right: 0;
  }

  ${m.desktopBefore} {
    display: flex;
    margin-left: 0;
    justify-content: flex-start;
  }

  ${m.laptopBefore} {
    display: contents;
    margin-right: 0;
  }
`,Tt=p.div`
  ${he};
  ${({theme:e})=>e.systemColors.grey600};
  grid-area: period;
`,Ct=p.div`
  grid-area: title;
  white-space: nowrap;
`,jt=p.div`
  display: inline;
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,Dt=p.div`
  ${$e};
  display: inline;

  ${m.mobileBefore} {
    ${ke};
  }

  ${m.mobileSmallBefore} {
    ${Pe};
  }
`,$t=p.div`
  display: grid;
  grid-template-areas:
    "title actions"
    ${e=>!e.hidePeriod&&'"period period"'}
    "total total";
  grid-row-gap: ${({theme:e})=>e.spacing.sp8};

  ${m.largeDesktopBefore} {
    grid-template-areas:
      "title optimize-button sku-select"
      "calendar calendar calendar"
      ${e=>!e.hidePeriod&&'"period period period"'}
      "total total total";
  }

  ${m.desktopBefore} {
    grid-template-areas:
      "title"
      "actions"
      ${e=>!e.hidePeriod&&'"period"'}
      "total";
  }

  ${m.laptopBefore} {
    grid-template-areas:
      "title"
      "sku-select"
      "optimize-button"
      "calendar"
      ${e=>!e.hidePeriod&&'"period"'}
      "total";
  }
`,kt=({name:e,chartData:t,status:a})=>{const n=tt,o=l(u=>{var y;return(y=rt(u))==null?void 0:y[e]}),i=l(u=>u.disabledCharts),r=t[0],d=t[1];return a!=="loaded"?s.jsx(Ot,{}):s.jsxs(Ae,{children:[s.jsxs(ie,{children:[s.jsxs(ne,{onClick:()=>n(r.field),disabled:i[r.field],children:[s.jsx(M,{$color:r.color}),s.jsx(oe,{children:r.legendName||r.name})]}),s.jsx(ae,{content:s.jsx("div",{dangerouslySetInnerHTML:{__html:r.tooltip}})})]}),s.jsx(Pt,{children:(o==null?void 0:o.total)!=null?I({value:o.total}):"N/A"}),s.jsxs(ie,{children:[s.jsxs(ne,{onClick:()=>n(d.field),disabled:i[d.field],children:[s.jsx(M,{$color:d.color}),s.jsxs(oe,{children:[s.jsxs("b",{children:[(o==null?void 0:o.rate)!=null?Math.round(10*(o==null?void 0:o.rate)||0)/10:"N/A","%"]})," ",d.legendName||d.name]})]}),s.jsx(ae,{content:s.jsx("div",{dangerouslySetInnerHTML:{__html:d.tooltip}})})]})]})},Ae=p.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,ne=p.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${e=>e.theme.spacing.sp8};

  ${M} {
    margin: 0;
  }

  ${({disabled:e})=>e&&_`
      ${M} {
        background-color: ${({theme:t})=>t.systemColors.grey300};
      }
    `}
`,ie=p.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,oe=p.div`
  ${Oe};

  & > b {
    color: ${e=>e.theme.systemColors.black};
  }
`,Pt=p.div`
  ${Re};
  margin-left: ${e=>e.theme.spacing.sp16};
`,Ot=()=>s.jsxs(Ae,{children:[s.jsx(re,{width:80}),s.jsx(Rt,{}),s.jsx(re,{width:200})]}),re=p(J)`
  width: ${e=>e.width}px;
  height: 16px;
  margin: ${e=>e.theme.spacing.sp4};
`,Rt=p(J)`
  width: 74px;
  height: 28px;
  margin: ${e=>e.theme.spacing.sp4};
  margin-left: ${e=>e.theme.spacing.sp16};
`,Vt=({name:e})=>{const{t}=S(),a=b.useMemo(()=>[{field:"date",header:t("trafficAndConversation.table.fields.date.title"),render:({date:i})=>i},{field:"total",header:t(`trafficAndConversation.table.fields.${e}.total.title`),render:({total:i})=>i!=null?I({value:i}):"N/A",align:"right"},{field:"rate",header:t(`trafficAndConversation.table.fields.${e}.rate.title`),render:({rate:i})=>i!=null?I({value:i})+"%":"N/A",align:"right"}],[e,t]),n=l(i=>{var r;return(r=ot(i))==null?void 0:r[e]})||[],o=C(i=>i.status);return s.jsx(Ke,{status:o,columns:a,data:n})},Bt=({name:e})=>{const{t}=S(),a=l(g=>{var x;return(x=g.tableVisibility)==null?void 0:x[e]}),n=l(dt),o=at,i=se(`(min-width: ${W.largeDesktop}px)`),r=se(`(min-width: ${W.laptop}px) and (max-width: ${W.largeDesktop-1}px)`),d=i?e==="sessions":r?e==="sessions"||e==="ordered":!0,u=C(g=>g.status),y=l(g=>g.data),c=l(g=>g.props.hasTables),f=u==="loading"&&y===null;return c?f?d?s.jsx(de,{children:s.jsx(Mt,{})}):null:s.jsxs(de,{children:[s.jsx(He,{isOpen:a,children:s.jsx(Vt,{name:e})},e),d&&s.jsxs(zt,{children:[s.jsx(Z,{type:"button",buttonType:"text",icon:s.jsx(It,{icon:Ve,rotation:a?180:void 0}),onClick:()=>nt(i?["ordered","sessions","view"]:r?e==="sessions"?["sessions","view"]:["ordered"]:[e]),children:t(`trafficAndConversation.table.visibilityButton.${a?"hide":"show"}`)}),s.jsx(Lt,{type:"button",buttonType:"secondary",onClick:o,$visible:a,disabled:!a,children:t("trafficAndConversation.table.showLastNDays",{days:n})})]})]}):null},de=p.div`
  display: flex;
  flex-direction: column;
  margin-top: ${e=>e.theme.spacing.sp8};
`,zt=p.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp16};
`,Lt=p(Z)`
  ${({$visible:e})=>!e&&_`
      opacity: 0;
    `}
  transition: opacity 0.3s;
`,It=p(Q)`
  transition: all 0.3s;
`,Mt=p(J)`
  width: 90px;
  height: 14px;
  margin: ${e=>e.theme.spacing.sp8} 0;
`,Nt=({header:e,points:t})=>s.jsxs("table",{children:[s.jsx("tr",{children:s.jsx(_t,{colSpan:2,children:e})}),t.map(a=>s.jsx(Ft,{...a},a.name))]}),_t=p.th`
  text-align: start;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #13191f;
`,Ft=({name:e,label:t,color:a})=>s.jsxs(Ut,{children:[s.jsxs(Gt,{children:[s.jsx(Wt,{style:{background:a}}),e]}),s.jsx(Ht,{children:s.jsx("b",{children:t})})]}),Ut=p.tr`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  color: #485e75;
`,Wt=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`,Gt=p.td`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`,Ht=p.td`
  padding-left: 32px;
  color: #13191f;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`,Te=fe(()=>({tooltips:{}})),le=e=>{Te.setState(t=>({tooltips:{...t.tooltips,[e.name]:e}}))},K=({name:e,x:t,isHide:a})=>{const n=Te.getState().tooltips;Object.entries(n).forEach(([o,{show:i,hide:r}])=>{o!==e&&(a?r(t):i(t))})},ce={labels:{formatter:function({value:e}){return e.toLocaleString("en-US")},style:{fontSize:"12px",color:"#485e75"}},title:{text:void 0}},Kt=300,Yt=({name:e,data:t})=>{const{t:a}=S(),{width:n}=qe(),o=l(pt),i=l(c=>c.disabledCharts),r=b.useMemo(()=>t.reduce((c,f)=>f.data.length!==0?c:!0,!1),[t]),d=b.useRef(),u=b.useMemo(()=>({formatter:function(){const c=this,f=c.points.map(g=>{var x,v;return{value:new Date(g.y).toDateString(),name:g.series.name,label:I({value:g.y})+((x=g==null?void 0:g.point)!=null&&x.isPercentage?"%":""),color:((v=g==null?void 0:g.series)==null?void 0:v.color)||"black"}});return Ye(s.jsx(Nt,{points:f,header:L(new Date(c.x),"standard")}))}}),[]),y=b.useMemo(()=>({time:{getTimezoneOffset:c=>new Date(c).getTimezoneOffset()},chart:{height:Kt,zooming:{type:"x"},events:{load:c=>{d.current=c.target,le({name:e,show:x=>{var j,D,$,k,P,O,R,V;const v=($=(D=(j=d.current)==null?void 0:j.series)==null?void 0:D[0])==null?void 0:$.data[x],w=(O=(P=(k=d.current)==null?void 0:k.series)==null?void 0:P[1])==null?void 0:O.data[x];v&&v.setState("hover"),w&&w.setState("hover"),(v||w)&&((R=d.current)==null||R.xAxis[0].drawCrosshair(void 0,v||w),(V=d.current)==null||V.tooltip.refresh([...v?[v]:[],...w?[w]:[]]))},hide:x=>{var j,D,$,k,P,O,R,V;const v=($=(D=(j=d.current)==null?void 0:j.series)==null?void 0:D[0])==null?void 0:$.data[x],w=(O=(P=(k=d.current)==null?void 0:k.series)==null?void 0:P[1])==null?void 0:O.data[x];v&&v.setState(),w&&w.setState(),(v||w)&&((R=d.current)==null||R.xAxis[0].hideCrosshair(),(V=d.current)==null||V.tooltip.hide())}})}}},yAxis:[{...ce,opposite:!1},{...ce,opposite:!0}],xAxis:{type:"datetime",minTickInterval:o<=60?24*3600*1e3:28*24*3600*1e3,crosshair:{snap:!0},labels:{formatter:({value:c})=>L(new Date(c),o<=60?"standardShort":"short"),style:{fontSize:"12px",color:"#485e75",whiteSpace:"nowrap"}}},tooltip:u,series:t.filter(({field:c})=>!i[c]).map((c,f)=>({type:"line",showInLegend:!1,name:c.name,data:c.data.map(g=>({x:g[0],y:g[1],isPercentage:c.isPercentage,marker:{enabled:c.data.length===1,symbol:"circle",radius:c.data.length===1?3:2}})),color:c.color,yAxis:f,enableMouseTracking:!0,tooltip:{valueSuffix:c.isPercentage?"%":""}})),plotOptions:{series:{marker:{symbol:"circle",radius:0,lineColor:"transparent"},point:{events:{mouseOver:c=>{const f=c.target;f&&K({name:e,x:f.index})},mouseOut:function(c){const f=c.target;f&&K({name:e,x:f.index,isHide:!0})}}}},marker:{states:{hover:{radius:3}}}}}),[t,o,u,le,e,i,K]);return s.jsxs(qt,{children:[s.jsx(Qe,{options:y},n),r&&s.jsx(Qt,{children:a("salesChart.noData")})]})},qt=p.div`
  position: relative;
  margin-top: ${e=>e.theme.spacing.sp12};
  max-width: 100%;
`,Qt=p.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${he};
`,Y=({name:e,data:t,status:a})=>s.jsxs(Zt,{children:[s.jsx(kt,{chartData:t,name:e,status:a}),a==="loaded"?s.jsx(Yt,{name:e,data:t}):s.jsx(Ze,{legendCount:0}),s.jsx(Bt,{name:e})]}),Zt=p.div`
  display: flex;
  flex-direction: column;
`,ms=e=>s.jsxs(s.Fragment,{children:[s.jsx(Jt,{...e}),s.jsx(Xt,{})]}),Jt=e=>(b.useEffect(()=>{Array.isArray(e.defaultPeriod)&&e.defaultPeriod.length===2&&we({period:e.defaultPeriod,isInitialization:!0})},[e.defaultPeriod]),b.useEffect(()=>{et(e)},[e.asin,e.defaultPeriod,e.defaultSku,e.marketplace,e.sellerId,e.hideOptimizeButton,e.skuOptions,e.onOptimizeClick,e.hasTables]),null),h="trafficAndConversation.charts.",Xt=b.memo(()=>{const{t:e}=S(),t=l(r=>r.props.groupBy),a=l(r=>{var d;return(d=r.props.defaultPeriod)==null?void 0:d[0]}),n=l(ut),o=C(r=>r.status),i=b.useMemo(()=>t?{sessions:n.sessions.map(r=>({...r,data:H(r.data,t,a)})),pageView:n.pageView.map(r=>({...r,data:H(r.data,t,a)})),unitsOrdered:n.unitsOrdered.map(r=>({...r,data:H(r.data,t,a)}))}:n,[n,t,a]);return s.jsxs(Et,{children:[s.jsx(vt,{}),s.jsxs(es,{children:[s.jsx(Y,{name:"sessions",data:i.sessions,status:o,title:e(h+"sessionsAndSessionsRate.title"),tooltip:s.jsxs(s.Fragment,{children:[e(h+"sessionsAndSessionsRate.legend.sessions"),s.jsx("br",{}),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"sessionsAndSessionsRate.legend.sessionsTooltip")}}),s.jsx("br",{}),e(h+"sessionsAndSessionsRate.legend.sessionsRate"),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"sessionsAndSessionsRate.legend.sessionsRateTooltip")}})]})}),s.jsx(Y,{name:"view",data:i.pageView,status:o,title:e(h+"pageViewAndPageViewRate.title"),tooltip:s.jsxs(s.Fragment,{children:[e(h+"pageViewAndPageViewRate.legend.pageView"),s.jsx("br",{}),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"pageViewAndPageViewRate.legend.pageViewTooltip")}}),s.jsx("br",{}),e(h+"pageViewAndPageViewRate.legend.pageViewRate"),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"pageViewAndPageViewRate.legend.pageViewRateTooltip")}})]})}),s.jsx(Y,{name:"ordered",data:i.unitsOrdered,status:o,title:e(h+"unitsOrderedAndUnitSessionRate.title"),tooltip:s.jsxs(s.Fragment,{children:[e(h+"unitsOrderedAndUnitSessionRate.legend.unitsOrdered"),s.jsx("br",{}),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"unitsOrderedAndUnitSessionRate.legend.unitsOrderedTooltip")}}),s.jsx("br",{}),e(h+"unitsOrderedAndUnitSessionRate.legend.unitSessionRate"),s.jsx("div",{dangerouslySetInnerHTML:{__html:e(h+"unitsOrderedAndUnitSessionRate.legend.unitSessionRateTooltip")}})]})})]})]})}),Et=p.div`
  border: 1px solid #d9e0e8;
  border-radius: 6px;
  width: 100%;

  ${({theme:e})=>_`
    padding: ${e.spacing.sp24};
    margin-top: ${e.spacing.sp24};
  `}
`,es=p.div`
  width: 100%;
  display: grid;

  ${({theme:e})=>_`
    grid-gap: ${e.spacing.sp24};
    margin-top: ${e.spacing.sp8};
  `}

  grid-template-columns: 1fr;
  /* grid-template-rows: 1fr; */
  grid-template-areas: "a" "b" "c";

  ${m.laptop} {
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    grid-template-areas: "a b" "c c";
  }

  ${m.largeDesktop} {
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr; */
    grid-template-areas: "a b c";
  }

  > :nth-child(1) {
    grid-area: a;
  }

  > :nth-child(2) {
    grid-area: b;
  }

  > :nth-child(3) {
    grid-area: c;
  }
`;export{Nt as C,M as L,es as S,ms as T,ae as a,H as g};
//# sourceMappingURL=TrafficAndConversion-cz9DFyQl.js.map
