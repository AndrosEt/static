import{dn as b,r as y,j as n,u as c,Q as te,$ as Ke,bk as C,aF as Ie,A as ve,a2 as dt,ce as Ln,a as k,I as le,N as V,as as Xe,c2 as Rt,cI as _n,a7 as wt,x as z,bc as At,a1 as Gn,Y as Ct,g as zn,df as Un,bb as Vn,Z as Fr,au as Qn,bH as Kn,U as Hn,E as Ee,O as He,y as Ye,al as Yn,d6 as qn,bv as Jn,bw as Zn,M as Xn,fE as eo,aj as to,C as ro,ba as Br,by as no,cH as oo,br as io,fF as so}from"./index-VVIvRZBh.js";import{T as Q,s as ao,g as jt,i as Rr}from"./TitleWithTooltip-fUxfpTI3.js";import{t as Nr,P as Wr,y as Ce,a0 as lo}from"./Learn-nfpDmxZa.js";import{c as U}from"./zustandPrimitive-JpIny_aS.js";import{T as Me,e as co,f as po,K as uo,h as fo,j as mo,c as yo,L as Lr,k as ho}from"./SearchGraphModal-EAp81elq.js";import{f as M}from"./useAutoPlay-JZxKBgmm.js";import{C as Nt}from"./ChoiceBadge-C44HKhSL.js";import{L as go}from"./LockedTitle-8GqE8_9_.js";import{A as xo}from"./AddToMyListDropdown-EN5Nh0z5.js";import{O as vo,b as _r,C as bo,P as So,M as wo,R as Ao,L as Co,S as jo,a as $o}from"./StorageFeeCell-IG7gdMd6.js";import{A as Gr}from"./AboveTable-RQptzNj3.js";import{g as ko}from"./groupBy-CPP6D356.js";import{b as Po,u as zr}from"./dateRanges-7tA5n6Zh.js";import{u as $t,c as Eo}from"./getUpsellData--u-Ov2M_.js";import{P as Io}from"./OptimalData-ecRxYfRx.js";import{E as kt}from"./ExtendedProductSummary-2sO78FPU.js";import{P as Mo}from"./WidthLimitedTagsValue-v2a_4qBm.js";import{A as Oo}from"./react-alice-carousel-eSREBW2I.js";import{u as Do}from"./hooks-yjvr3WH0.js";import{u as To}from"./getListingAnalyzerKeywordsSection-1A2LzZSf.js";import{Q as Fo}from"./NewRadio-yIsEqEsT.js";function Ur(e){return Object.keys(e).map(t=>({key:t,value:e[t]}))}const Bo=({text:e,value:t,percents:r,color:o,isHighlighted:s,details:i})=>{const{t:l}=b(),p=o||s?"#1295ED":"#D9E0E8",[a,u]=y.useState(0);return y.useEffect(()=>{u(r)},[r]),n.jsxs(Ro,{children:[n.jsx(Lo,{children:e?l(e):void 0}),n.jsxs(No,{children:[n.jsx("div",{id:"bar-container",children:n.jsx(Wo,{percents:a,barColor:p})}),i?n.jsx(Me,{content:i&&Object.keys(i).length>0?n.jsx(n.Fragment,{children:Ur(i).map(({key:d,value:m})=>n.jsxs("div",{children:[d," - ",typeof m=="number"?M({value:m}):m]},d))}):void 0,children:n.jsx(Wt,{children:t})}):n.jsx(Wt,{children:t})]})]})},Ro=c.div`
  display: flex;
  //flex-direction: row;
  align-items: center;
`,No=c.div`
  height: 32px;
  border-left: solid #dddddd 1px;
  flex: 1.6;
  display: flex;
  flex-direction: row;
  align-items: center;
  #bar-container {
    width: 60%;
    padding-right: 8px;
  }
`,Wo=c.div`
  margin-right: 8px;
  width: ${({percents:e})=>e}%;
  height: 16px;
  background-color: ${({barColor:e})=>e};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 1s width;
`,Lo=c.div`
  ${te};
  min-width: 156px;
  margin-right: 16px;
  text-align: right;
  flex: 1;
`,Wt=c.div`
  ${Ke};
  color: ${e=>e.theme.systemColors.black};
`,_o=({title:e,tooltip:t,charts:r})=>{const{t:o}=b();return n.jsxs(Vr,{children:[n.jsx(Qr,{children:n.jsx(Q,{title:o(e),tooltip:t?o(t):void 0,size:"200"})}),r.map((s,i)=>n.jsx(Bo,{...s},i))]})},Vr=c.div`
  padding: 32px;
  @media (max-width: 420px) {
    padding: 10px;
  }
  background-color: white;
`,Qr=c.div`
  padding: 0 6px;
  margin-bottom: 16px;
`,Go=({title:e,titleTooltip:t,metrics:r})=>{const{t:o}=b();return n.jsxs(Kr,{children:[n.jsx(Yr,{children:n.jsx(Q,{title:e,tooltip:t,size:"400"})}),r==null&&n.jsx("p",{children:o("competitorAnalysis.metrics.noData")}),r!=null&&n.jsx(Hr,{children:r.map((s,i)=>n.jsx(_o,{...s},i))})]})},Kr=c.div`
  width: 100%;
  color: ${e=>e.theme.systemColors.grey200};
`,Hr=c.div`
  width: 100%;
  max-width: 1235px;
  margin: auto;
  display: grid;
  background-color: ${e=>e.theme.systemColors.grey200};
  grid-gap: 1px;
  @media (min-width: ${577}px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  @media (max-width: ${576}px) {
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`,Yr=c.div`
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,zo=()=>n.jsxs(Kr,{children:[n.jsx(Yr,{children:n.jsx(Uo,{})}),n.jsx(Hr,{children:[...new Array(6)].map((e,t)=>n.jsxs(Vr,{children:[n.jsx(Qr,{children:n.jsx(Vo,{})}),n.jsx(Qo,{})]},t))})]}),Uo=c(C)`
  width: 100%;
  max-width: 440px;
  height: 32px;
`,Vo=c(C)`
  width: 45%;
`,Qo=c(C)`
  height: 32px;
  width: 100%;
`,Ko={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null,selectedProduct:null},_e=ve((e,t)=>({...U(e,t,"props",Ko)})),Ho=()=>{y.useEffect(()=>()=>{_e.getState().props.clear()},[])},Yo=e=>{y.useEffect(()=>{_e.getState().props.set(e)},[e])};function qr(e,t){for(const r in e){if(t!=null&&t.includes(r))continue;const o=e[r];if(o&&typeof o!="object")return!1;if(!qr(o,t))return!1}return!0}const Lt={monthlySales:{title:"Sales",tooltip:"Estimated monthly sales"},monthlyRevenue:{title:"Revenue",isPrice:!0,tooltip:"Estimated monthly revenue"},price:{title:"Price",isPrice:!0},salesRank:{title:"BSR",tooltip:"Amazon's best seller rank"},reviewCount:{title:"Number of Reviews"},reviewsRating:{title:"Rating"}},qo=({isPrice:e,currency:t})=>r=>e&&r&&r>0?dt({amount:t!=="JPY"?r/100:r,currency:t}):r&&r>0?M({value:r}):"N/A",Jo=e=>{var p;const t=e.props.value.data,r=e.props.value.marketplace.currency;if(t==null||qr(t,["asin"]))return null;const s=(p=e.props.value.selectedProduct)==null?void 0:p.asin,i=s?t.singleResponses[s]:null;return Object.keys(Lt).map(a=>{var h,v,S,A,T,F;const u=Lt[a],d=qo({isPrice:!!u.isPrice,currency:r}),m=Math.max(((h=i==null?void 0:i.seedSalesData)==null?void 0:h[a])||0,((v=i==null?void 0:i.avgCompetitorsSalesData)==null?void 0:v[a])||0,((S=t==null?void 0:t.avgSeedSalesData)==null?void 0:S[a])||0)||1,f=Object.entries(t.singleResponses).reduce((g,[R,I])=>{var K;return I&&(g||(g={}),g[R]=d(((K=I==null?void 0:I.seedSalesData)==null?void 0:K[a])||void 0)),g},void 0);return{title:`competitorAnalysis.metrics.${a}.title`,tooltip:`competitorAnalysis.metrics.${a}.tooltip`,charts:[...i&&s?[{text:s,value:d(((A=i==null?void 0:i.seedSalesData)==null?void 0:A[a])||void 0),percents:(((T=i==null?void 0:i.seedSalesData)==null?void 0:T[a])||0)>0?100*(((F=i==null?void 0:i.seedSalesData)==null?void 0:F[a])||0)/m:0,isHighlighted:!0},{text:"competitorAnalysis.metrics.text.marketNew",value:d(i.avgCompetitorsSalesData[a]||void 0),percents:(i.avgCompetitorsSalesData[a]||0)>0?100*(i.avgCompetitorsSalesData[a]||0)/m:0}]:[],...t.avgSeedSalesData?[{text:"competitorAnalysis.metrics.text.groupNew",value:d(t.avgSeedSalesData[a]||void 0),percents:(t.avgSeedSalesData[a]||0)>0?100*(t.avgSeedSalesData[a]||0)/m:0,details:f}]:[]]}})},Zo=e=>{Ho(),Yo(e);const{t}=b(),[r,o]=_e(i=>{var l,p;return[i.props.value.status,(p=(l=i.props.value)==null?void 0:l.selectedProduct)==null?void 0:p.asin]}),s=_e(Jo);return r==="loaded"?n.jsx(Go,{title:t("competitorAnalysis.title"),subtitle:o?void 0:t("competitorAnalysis.subtitle"),titleTooltip:t("competitorAnalysis.titleTooltip"),metrics:s}):n.jsx(zo,{})},Xo={marketplace:Ie("domain","amazon.com"),isSingleSearch:!0,status:"loading",data:[],products:[],metrics:[],onClickBlurredMonthlySales:()=>{},enabledWalmartSearchVolumeChart:!1,enabledGoogleSearchVolumeChart:!1,monthlySalesLocked:!0,addToMyListLocked:!0,planGroup:"free",openUpgradeModalForBanner:()=>{},openUpgradeModalForSearchGraph:()=>{},onClickExternalLink:()=>{},notification:Nr,seeFullListInCerebro:()=>{}},P=ve((e,t)=>({...U(e,t,"props",Xo),...U(e,t,"selected",[])})),_=({value:e,notNumberResult:t="N/A",...r})=>{if(e==null)return t;const o=Number(e);return isNaN(o)?t:M({value:o,...r})},ei=y.memo(({isSingleSearch:e,...t})=>{const{t:r}=b(),o=e?"metricsSingle":"metricsMulti";return n.jsxs(ti,{children:[n.jsx(Q,{title:r(`keywordAnalysis.metricsData.${o}.${t.id}.title`),tooltip:r(`keywordAnalysis.metricsData.${o}.${t.id}.tooltip`),size:"300"}),t.hover&&Object.keys(t.hover).length>0?n.jsx(Me,{content:t.hover&&Object.keys(t.hover).length>0?n.jsx(n.Fragment,{children:Ur(t.hover).map(({key:s,value:i})=>n.jsxs("div",{children:[s," - ",typeof i=="number"?M({value:i}):i]},s))}):void 0,children:n.jsx(_t,{children:_({value:Math.round(t.value||0)})})}):n.jsx(_t,{children:_({value:Math.round(t.value||0)})})]})}),ti=c.div`
  padding: 0 40px;
  background-color: ${e=>e.theme.systemColors.white};
`,_t=c.div`
  ${Ln};
  color: ${e=>e.theme.systemColors.black};
  margin-top: ${e=>e.theme.spacing.sp4};
`,ri=()=>{const{t:e}=b(),[t,r,o]=P(s=>[s.props.value.isSingleSearch,s.props.value.status,s.props.value.metrics]);return r==="loaded"?n.jsx(Qt,{children:o.length===0?n.jsx("div",{children:e("keywordAnalysis.metricsData.noKeyword")}):n.jsxs(n.Fragment,{children:[n.jsx(Gt,{children:n.jsx(Q,{title:e("keywordAnalysis.metricsData.tooltip"),tooltip:e(t?"keywordAnalysis.metricsData.searchTrue":"keywordAnalysis.metricsData.searchFalse"),size:"400"})}),n.jsx(zt,{children:n.jsx(Ut,{children:o.map(s=>n.jsx(ei,{...s,isSingleSearch:t},s.id))})})]})}):n.jsxs(Qt,{children:[n.jsx(Gt,{children:n.jsx(ii,{})}),n.jsx(zt,{children:n.jsx(Ut,{children:[...new Array(4)].map((s,i)=>n.jsx(li,{},i))})})]})},ni=k`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Gt=c.div`
  ${ni};
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,oi=c.div`
  padding-top: 16px;
  padding-bottom: 8px;
  min-width: 266px;
  background-color: ${e=>e.theme.systemColors.white};
`,zt=c.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,Ut=c.div`
  display: grid;
  grid-gap: 1px;
  background-color: ${e=>e.theme.systemColors.grey200};
  grid-template-columns: auto;
  width: 100%;

  ${le.laptop} {
    grid-template-columns: auto auto;
    width: auto;
  }

  ${le.largeDesktop} {
    grid-template-columns: auto auto auto auto;
  }

  ${Q.Title} {
    white-space: nowrap;
    overflow: hidden;
  }
`,Vt={sm:576,md:750,lg:1280,xl:1300},Qt=c.div`
  background-color: #ffffff;
  @media (max-width: ${Vt.md}px) {
    padding: 24px 16px;
  }
  @media (min-width: ${Vt.md+1}px) {
    padding: 24px 24px 16px;
    border-left: solid 1px #d9e0e8;
    border-right: solid 1px #d9e0e8;
    border-top: solid 1px #d9e0e8;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`,ii=c(C)`
  min-width: 254px;
  height: 26px;
`,si=c(C)`
  height: 24px;
  max-width: 180px;
  width: 100%;
`,ai=c(C)`
  height: 40px;
  margin-top: 4px;
  width: 100%;
  max-width: 120px;
`,li=()=>n.jsxs(oi,{children:[n.jsx(si,{}),n.jsx(ai,{})]}),ci=()=>{const[e,t]=P(r=>[r.props.value.status,r.props.value.planGroup]);return y.useMemo(()=>({itemsPerPage:e!=="loading"?[1e3]:[10],noFooter:!0,searchVisible:!0,columnVisible:!0,extraSettings:()=>t!=="free"&&t!=="starter"&&n.jsx(co,{showTop10RankedProductsForKeyword:!0})}),[t,e])},Z=k`
  justify-content: flex-end;
  color: ${e=>e.theme.systemColors.grey600};
`,pi=k`
  filter: blur(5px);
`,ui=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pu=c.div`
  white-space: nowrap;

  & + & {
    margin-top: ${({theme:e})=>e.spacing.sp8};
  }
`,Eu=c.span`
  ${Ke};
  margin-right: ${({theme:e})=>e.spacing.sp4};
  color: ${({theme:e})=>e.systemColors.black};
`,Iu=c(ui)`
  color: ${({theme:e})=>e.systemColors.black};
  text-transform: capitalize;
`,Ge=0,Mu=c(V)`
  max-width: ${({$level:e=Ge})=>`calc(100% - ${e*32}px)`};
  margin-left: ${({$level:e=Ge})=>`${e*32}px`};
  justify-content: flex-start;
  padding: 0;
  border-width: 0;
  min-height: ${({theme:e})=>e.spacing.sp24};
  gap: ${({theme:e})=>e.spacing.sp8};
`,Ou=c.div`
  max-width: ${({level:e=Ge})=>`calc(100% - ${e*32}px)`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp6};
  margin-left: ${({level:e=Ge})=>`${e*32}px`};
  overflow: hidden;
  width: 100%;
`,Kt={phrase:"#6784A2",auto:"#0253B6",broad:"#0C7E7D",exact:"#0B4745",category:"#6A2AC0",asin:"#0253B6",negativeExact:"#A70045",negativePhrase:"#A70045",negativeAsin:"#A70045",negativeBroad:"#A70045",manual:"#A70045"},Du=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing.sp24};
  min-width: ${({theme:e})=>e.spacing.sp24};
  height: ${({theme:e})=>e.spacing.sp24};
  border-radius: 50%;
  background-color: ${({$matchType:e,$isCategory:t})=>t?Kt.category:Kt[e]};
  color: ${({theme:e})=>e.systemColors.white};
  font-size: 12px;
`,di=()=>{const e=Xe(Rt)!=null,t=Xe(Rt)||"free",r=Xe(i=>{var l;return(l=i.checkLogin)==null?void 0:l.hasEliteAccess});return{planGroup:t,notFreeAndStarter:t!=="free"&&t!=="starter",isElite:r||t==="elite"||t==="enterprise",hasPlanGroup:e}},fi=({phrase:e,amazonChoice:t,marketplaceFull:r,phraseId:o,tool:s,planGroup:i})=>{const l=di(),[p,a]=po(_n(u=>[u.top10RankedProductsForKeyword,u.asinDetails]));return n.jsxs(mi,{children:[n.jsx(uo,{keyword:e,phraseId:o,marketplace:(r==null?void 0:r.store)||"",tool:s,disableExtendedTooltip:!p,disableExtendedProductSummary:!a,onChangeProductDetailsType:u=>fo.set(u),simpleTooltip:(i||l.planGroup)==="free"||(i||l.planGroup)==="starter"}),n.jsx(yi,{href:r?ao(r.domain,e):"",target:"_blank",rel:"noreferrer",children:n.jsx(V,{size:"50",buttonType:"icon",icon:n.jsx(hi,{icon:wt})})}),t==="analyzed"&&n.jsx(Nt.Dark,{tooltipContent:void 0}),t==="other"&&n.jsx(Nt.Light,{tooltipContent:void 0})]})},mi=c.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,yi=c.a`
  text-decoration: none;

  svg {
    color: ${e=>e.theme.systemColors.grey600};
  }
`,hi=c(z)`
  font-size: 16px;
`,je=({value:e,percent:t,percentile:r,showPercent:o=!1,blurred:s=!1,revert:i=!1})=>{const{t:l}=b(),p=Math.round(t||0),a=i?gi(r):r;return n.jsxs(vi,{blurred:s,children:[s&&l("getPlan"),!s&&(e!=null&&!isNaN(e)?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[s?l("getPlan"):M({value:e}),!s&&o?` (${Math.round(p)}%)`:""]}),n.jsx(vo,{percentile:s?Math.floor(Math.random()*4)+1:a})]}):"-")]})},Ht=[1,2,3,4],gi=e=>{const t=Ht.indexOf(e);return Ht.reverse()[t]},xi=c.div`
  ${({blurred:e})=>e&&k`
      ${pi}
    `}
`,vi=c(xi)`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${e=>e.theme.spacing.sp4};
  }
`,bi=({value:e,phrase:t,phraseId:r,marketplace:o,displayValue:s,enabledGoogleSearchVolumeChart:i,enabledWalmartSearchVolumeChart:l})=>{const p=e!==-1?e:null,a=p?M({value:p,maximumFractionDigits:0}):"-",[u,d]=P(h=>[h.props.value.planGroup,h.props.value.openUpgradeModalForSearchGraph]),m=y.useCallback(h=>{Si.includes(u)?d==null||d():h()},[d,u]),f={platform:"AMAZON",disabledPlatforms:{GOOGLE:!i,WALMART:!l||(o==null?void 0:o.domain)!=="amazon.com"}};return n.jsxs(Ai,{children:[n.jsx(wi,{children:s??a}),p&&t?n.jsx(mo,{keyword:t,phraseId:r,marketplace:(o==null?void 0:o.TLDomain)||"com",onClick:m,moduleId:"",platformOptions:f}):null]})},Si=["free","starter"],wi=c.div``,Ai=c.div`
  ${Z};
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.sp8};
`,Yt=k`
  ${Z};
`,qt=({asin:e,title:t,imageUrl:r,link:o=!1,TLDomain:s})=>{const{isOverflown:i,checkOverflown:l}=At(),p=y.useMemo(()=>jt("AM",s||"com",e||""),[s,e]);return n.jsxs(Ci,{children:[n.jsxs(ji,{children:[n.jsx($i,{src:r}),n.jsx(ki,{href:p,target:"_blank",rel:"noreferrer",children:n.jsx(Pi,{icon:wt})})]}),n.jsxs(Ei,{children:[n.jsx(Me,{content:!i&&t?n.jsx("div",{dangerouslySetInnerHTML:{__html:t}}):void 0,children:t?n.jsx(Ii,{onMouseEnter:l,dangerouslySetInnerHTML:{__html:t}}):n.jsx(n.Fragment,{})}),!o&&n.jsx(Mi,{children:e}),o&&e&&n.jsx(Oi,{onClick:a=>a.stopPropagation(),href:p,target:"_blank",rel:"noreferrer",children:e})]})]})},Ci=c.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,ji=c.div`
  border: 1px solid #d9e0e8;
  border-radius: 4px;
  overflow: hidden;
  width: 32px;
  height: 32px;
  position: relative;
`,$i=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 4px;
  background-color: white;
`,ki=c.a`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 300ms;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
  z-index: 1;

  :hover {
    opacity: 1;
  }
`,Pi=c(z)`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.systemColors.blue600};
`,Ei=c.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`,Ii=c.div`
  ${Gn};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
`,Mi=c.div`
  ${Ct}
`,Oi=c.a`
  ${Ct};
  color: ${e=>e.theme.systemColors.blue600};
  cursor: pointer;
  text-align: start;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,Di=({phrase:e})=>{const{t}=b(),[r,o]=P(s=>[s.props.value.marketplace,s.props.value.onClickExternalLink]);return n.jsx(Wr,{content:[n.jsxs(Fi,{onClick:()=>{var s;o==null||o(),(s=window.open(zn("/magnet",{keywords:[e],marketplace:r==null?void 0:r.store},{arrayFormat:"index"}),"_blank"))==null||s.focus()},children:[t("keywordAnalysis.buttons.runMagnet"),n.jsx(z,{icon:Un})]},1)],appendTo:document.body,children:n.jsx(Ti,{buttonType:"icon",size:"50",icon:n.jsx(z,{icon:Vn})})})},Ti=c(V)`
  margin-left: -${e=>e.theme.spacing.sp12};
`,Fi=c(Wr.Item)`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,Bi=()=>{const{t:e}=b(),t=P(r=>r.props.value.onClickBlurredMonthlySales);return n.jsx(Ri,{onClick:t,children:n.jsx(Ni,{children:e("getPlan")})})},Ri=c.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  margin: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`-${e} -${t}`};
  padding: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`${e} ${t}`};
`,Ni=c.div`
  filter: blur(4px);
`,Wi=({locked:e})=>{const{t}=b(),r=P(o=>o.props.value.onClickBlurredMonthlySales);return n.jsx(go,{title:t("keywordAnalysis.columns.monthlySales.title"),tooltip:t("keywordAnalysis.columns.monthlySales.tooltip"),locked:e,onClick:e?r:void 0,minWidth:112})},Li=()=>{const{t:e,language:t}=b(),{marketplace:r,isSingleSearch:o,products:s,enabledGoogleSearchVolumeChart:i,enabledWalmartSearchVolumeChart:l,monthlySalesLocked:p,planGroup:a}=P(u=>u.props.value);return y.useMemo(()=>{var u,d,m;return[{field:"controls",static:24,responsive:!0,render:f=>n.jsx(Di,{phrase:f.phrase})},{field:"phrase",title:e("keywordAnalysis.columns.phrase.title"),tooltip:e("keywordAnalysis.columns.phrase.tooltip"),sortable:!0,defaultSortDirection:"ASC",static:240,responsive:!0,render:f=>n.jsx(fi,{phrase:f.phrase,phraseId:f.id,amazonChoice:f.amazonChoice,marketplaceFull:r,tool:"listingAnalyzer",planGroup:a})},...r.TLDomain==="com"?[{field:"monthlySales",title:n.jsx(Wi,{locked:p}),tooltip:e("keywordAnalysis.columns.monthlySales.tooltip"),sortable:!p,sorter:"number",defaultSortDirection:"DESC",customCss:Yt,responsive:!1,width:t==="de"||t==="it"||t==="es"?160:136,contentPosition:"right",render:f=>p?n.jsx(Bi,{}):f.monthlySales!=null?M({value:f.monthlySales,maximumFractionDigits:0}):"N/A"}]:[],{field:"searchVolume",title:n.jsx(_i,{children:e("keywordAnalysis.columns.searchVolume.title")}),tooltip:e("keywordAnalysis.columns.searchVolume.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Yt,responsive:!1,width:140,type:"number",contentPosition:"right",render:f=>n.jsx(bi,{value:f.searchVolume,phrase:f.phrase,moduleId:"keywordresearch",marketplace:r,enabledWalmartSearchVolumeChart:l,enabledGoogleSearchVolumeChart:i})},...o?[{field:"newCprExact",title:e("keywordAnalysis.columns.newCprExact.title"),tooltip:e("keywordAnalysis.columns.newCprExact.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:80,type:"number",contentPosition:"right",render:f=>f.newCprExact!=null?M({value:f.newCprExact,maximumFractionDigits:0}):"N/A"},{field:"organicPosition",title:n.jsx(qt,{asin:(u=s[0])==null?void 0:u.asin,title:(d=s[0])==null?void 0:d.title,imageUrl:(m=s[0])==null?void 0:m.imageUrl,TLDomain:r.TLDomain}),tooltip:e("keywordAnalysis.columns.asin.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",type:"number",contentPosition:"right",width:180,render:f=>{var h;return f.organicPosition!=null&&!isNaN(f.organicPosition)?n.jsx(je,{value:f.organicPosition,percentile:f[((h=s[0])==null?void 0:h.asin)+"_percentile"]}):"-"}}]:[{field:"performanceScore",title:n.jsx(Gi,{children:e("keywordAnalysis.columns.performanceScore.title")}),tooltip:e("keywordAnalysis.columns.performanceScore.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:130,type:"number",contentPosition:"right"},{field:"newCprExact",title:e("keywordAnalysis.columns.newCprExact.title"),tooltip:e("keywordAnalysis.columns.newCprExact.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:80,type:"number",contentPosition:"right",render:f=>f.newCprExact!=null?M({value:f.newCprExact,maximumFractionDigits:0}):"N/A"},{field:"organicPosition",title:n.jsx(zi,{children:e("keywordAnalysis.columns.organicPosition.title")}),tooltip:e("keywordAnalysis.columns.organicPosition.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",responsive:!1,width:130,type:"number",contentPosition:"right"}],...(o?[]:s).map(({asin:f,imageUrl:h,title:v})=>({field:f,title:n.jsx(qt,{asin:f,title:v,imageUrl:h,TLDomain:r.TLDomain}),tooltip:e("keywordAnalysis.columns.asin.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",type:"number",contentPosition:"right",render:S=>{const A=S[f];return A!=null&&!isNaN(A)?n.jsx(je,{value:A,percentile:S[f+"_percentile"]}):"-"}})),{title:"",field:"_",responsive:!0,noHeader:!0,noHover:!0}]},[e,r,p,t,o,s,a,l,i])},_i=c.div`
  min-width: 100px;
  display: flex;
  justify-content: flex-end;
`,Gi=c.div`
  min-width: 86px;
  display: flex;
  justify-content: flex-end;
`,zi=c.div`
  min-width: 74px;
  display: flex;
  justify-content: flex-end;
`,Ui=({marketplace:e})=>{const[t,r]=P(l=>[l.props.value.data,l.selected.value]),o=y.useMemo(()=>t.filter(l=>r.includes(l.id)).map(l=>l.phrase),[t,r]),s=P(l=>l.props.value.products[0].asin),i=y.useMemo(()=>({marketplace:e,asin:s,phrases:o,moduleId:"keywordresearch"}),[o,e,s]);return s?n.jsx(yo,{notification:Nr,data:i,moduleId:"keywordresearch"}):null},Vi=()=>{const{t:e}=b(),[t,r,o,s,i,l]=P(a=>[a.props.value.marketplace,a.props.value.addToMyListLocked,a.props.value.openUpgradeModalForBanner,a.props.value.notification,a.props.value.data,a.selected.value]),p=y.useCallback(()=>i.filter(a=>l.includes(a.id)).map(a=>a.phrase),[i,l]);return y.useCallback(a=>a.length?n.jsxs(n.Fragment,{children:[n.jsx(xo,{marketplace:t.domain||"amazon.com",notification:s,getSelectedKeywords:p,type:"dropdown",visibleItemsCount:3,CustomButton:({onClick:u})=>n.jsx(Lr,{onClick:u,size:"100",buttonType:"secondary",locked:r,onLockedClick:o,children:e("keywordAnalysis.buttons.addToMyList")})}),n.jsx(Ui,{marketplace:t==null?void 0:t.store})]}):n.jsx(n.Fragment,{}),[r,p,t.domain,t==null?void 0:t.store,s,o,e])},Qi=()=>{const{t:e}=b();return y.useMemo(()=>({getTitleText:()=>e("keywordAnalysis.tableHeader.title"),haveCheckbox:!0,onChange:P.getState().selected.set}),[e])},Ki=({status:e})=>{const[t,r]=P(a=>[a.props.value.searchId,a.props.value.data]),o=Li(),s=ci(),i=Qi(),l=Vi(),p=y.useCallback(()=>n.jsx(_r,{useDefaultTitles:!0,useDefaultTooltips:!0}),[]);return n.jsx(Ce,{name:`keywords-table-${t}`,status:e,columns:o,data:r,filter:Yi,behavior:s,export:Hi,leftActions:l,rightActions:p,selected:i,footer:qi,searchFunction:Ji})},Hi={exportable:!1},Yi={defaultValue:{count:1e3,sortField:"default",sortDirection:"DESC",search:"",page:1}},qi=()=>n.jsx("div",{id:"keywords-table-footer"}),Ji=e=>t=>((t==null?void 0:t.phrase)||"").toLowerCase().includes(e),Zi=()=>{y.useEffect(()=>()=>{P.getState().props.clear(),P.getState().selected.clear()},[])},Xi=e=>{y.useEffect(()=>{P.getState().props.set(e)},[e])},es=y.memo(e=>{Xi(e),Zi();const{t}=b(),[r,o,s,i]=P(l=>[l.props.value.status,l.props.value.isSingleSearch,l.props.value.data.length,l.props.value.seeFullListInCerebro]);return n.jsxs(Jr,{children:[n.jsx(Zr,{children:n.jsx(ri,{})}),s===0&&r==="loaded"?n.jsx(Xr,{children:t(`keywordAnalysis.emptyData.${o?"single":"multi"}`)}):n.jsx(Ki,{status:e.status}),n.jsx(en,{notEmpty:s!==0,children:n.jsx(V,{size:"200",buttonType:"secondary",onClick:i,disabled:r!=="loaded",children:t("keywordAnalysis.buttons.seeInCerebro")})}),n.jsx(ho,{})]})}),Jr=c.div`
  display: block;
  width: 100%;

  #keywords-table-footer {
    padding-bottom: 70px;
  }
`,Zr=c(Gr)`
  padding: 0;

  & > div {
    border: none;
  }
`,Xr=c.div`
  ${Fr};
  text-align: center;
  padding: 32px 32px 70px;
  border: solid 1px ${e=>e.theme.systemColors.grey200};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,en=c.div`
  display: flex;
  justify-content: center;

  max-height: 0;
  position: relative;
  top: -56px;
`,Tu=Object.assign(es,{Wrapper:Jr,AboveTable:Zr,EmptyResult:Xr,UnderTable:en}),ts=e=>{var s;const t=e.props.value.selectedProduct,r=t==null?void 0:t.asin,o=e.props.value.data;return{product:t,score:(r==null?o==null?void 0:o.scoreData.overall.overallScore:(s=o==null?void 0:o.scoreData.data[r])==null?void 0:s.totalScore)||0,showSelectedProduct:e.props.value.showSelectedProductInLQS,marketplace:e.props.value.marketplace}},tn=e=>{var r;const t=(r=e.props.value.data)==null?void 0:r.scoreData.overall.metricData;if(t!=null){const o=Object.keys(t);return ko(o,s=>{var i;return((i=t[s])==null?void 0:i.metricCategory)||""})}else return null},rs=e=>{const t=tn(e);return t!=null?Object.keys(t):[]},ns=e=>{var o,s,i,l;const t=(s=(o=e.props.value)==null?void 0:o.selectedProduct)==null?void 0:s.asin,r=(i=e.props.value.data)==null?void 0:i.scoreData;return t&&r&&((l=r==null?void 0:r.data[t])==null?void 0:l.metricData)||null},os={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null,showImproveYourScore:!1,onClickImproveYourScoreLink:()=>{},showSelectedProductInLQS:!0,selectedProduct:null},O=ve((e,t)=>({...U(e,t,"props",os)})),ft=({count:e,type:t})=>n.jsxs(is,{children:[e!=null&&n.jsx("div",{children:M({value:e})}),n.jsx(ss,{type:t,children:n.jsx(z,{icon:t==="pass"?Qn:Kn,fontSize:14})})]}),is=c.div`
  ${te};
  color: ${e=>e.theme.systemColors.grey800};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
  cursor: pointer;
`,ss=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  flex: 0 0 auto;
  background-color: ${({type:e,theme:t})=>e==="pass"?t.systemColors.green100:t.systemColors.grey100};

  svg {
    color: ${({type:e,theme:t})=>e==="pass"?t.systemColors.green600:t.systemColors.grey600};
  }
`,as=()=>{const e=O(rs);return n.jsx(ls,{children:n.jsx(hs,{children:e.map(t=>n.jsx(cs,{category:t},t))})})},ls=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,cs=({category:e})=>{const t=O(p=>{var a;return(a=p.props.value.selectedProduct)==null?void 0:a.asin}),r=O(p=>p.props.value.selectedProduct!=null),o=O(tn),s=o!=null?o[e]:[],i=r?us:ps,l=Po(e);return n.jsxs(nn,{children:[n.jsxs(ds,{children:[l,r&&!!t&&n.jsxs("span",{children:[" (",t,")"]})]}),n.jsx(ys,{children:s.map(p=>n.jsx(i,{metricId:p},p))})]})},ps=y.memo(({metricId:e})=>{const t=O(o=>{var s;return(s=o.props.value.data)==null?void 0:s.scoreData.overall.metricData[e]}),r=zr({key:e,data:t});return r?n.jsx(fs,{...r}):null}),us=y.memo(({metricId:e})=>{var o;const t=(o=O(ns))==null?void 0:o[e],r=zr({key:e,data:t});return r?n.jsx(ms,{metricTitle:r.metricTitle,metricTooltip:r.metricTooltip,passed:r.passed}):null}),ds=c.h3`
  ${Hn};
  color: ${e=>e.theme.systemColors.black};
  margin-bottom: ${e=>e.theme.spacing.sp8};

  span {
    color: ${e=>e.theme.systemColors.grey600};
    font-weight: normal;
  }
`,fs=({metricTitle:e,metricTooltip:t,asinsPassed:r=[],asinsFailed:o=[]})=>{const{t:s}=b();return n.jsxs(rn,{children:[n.jsx(Q,{title:e,tooltip:t,size:"100"}),n.jsx(Ee,{content:n.jsxs(n.Fragment,{children:[n.jsx(Jt,{children:s("listingQualityScore.listingQualityScore.breakdowns.passed")}),r.map(i=>n.jsx(Zt,{children:i},i))]}),children:n.jsx("div",{children:n.jsx(ft,{count:r.length,type:"pass"})})}),n.jsx(Ee,{content:n.jsxs(n.Fragment,{children:[n.jsx(Jt,{children:s("listingQualityScore.listingQualityScore.breakdowns.passed")}),o.map(i=>n.jsx(Zt,{children:i},i))]}),children:n.jsx("div",{children:n.jsx(ft,{count:o.length,type:"fail"})})})]})},ms=({metricTitle:e,metricTooltip:t,passed:r})=>n.jsxs(rn,{children:[n.jsx(Q,{title:e,tooltip:t,size:"100"}),n.jsx(ft,{type:r?"pass":"fail"})]}),ys=c.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`,rn=c.li`
  ${te};
  color: ${e=>e.theme.systemColors.grey800};
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: ${e=>e.theme.spacing.sp16};
  padding: ${e=>e.theme.spacing.sp12} 0;
  border-bottom: solid 1px ${e=>e.theme.systemColors.grey200};

  & > div {
    display: flex;
    flex-direction: row;
  }
`,nn=c.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 32px !important;

  ${le.laptop} {
    padding-left: 40px !important;
  }
`,hs=c.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${le.desktop} {
    flex-wrap: wrap;
    max-height: 464px;

    ${nn} {
      width: 50%;
    }
  }
`,Jt=c.div`
  font-weight: 700;
  margin-bottom: 4px;
`,Zt=c.div``,gs="https://re-cdn.helium10.com/container/static/improve-your-score-BkCceDp4.svg",xs=()=>{const{t:e}=b(),[t,r]=O(o=>[o.props.value.showImproveYourScore,o.props.value.onClickImproveYourScoreLink]);return t?n.jsxs(vs,{children:[n.jsx(bs,{src:gs}),n.jsx(Ss,{children:e("listingQualityScore.improveYourScore.title")}),n.jsx(ws,{children:e("listingQualityScore.improveYourScore.text")}),n.jsx(As,{href:"https://hub.helium10.com/categories/listing-optimization-services",target:"_blank",rel:"noreferrer",onClick:r,children:n.jsx(V,{buttonType:"text",type:"button",rightIcon:n.jsx(z,{icon:wt}),children:e("listingQualityScore.improveYourScore.button")})})]}):null},vs=c(He)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: ${e=>e.theme.systemColors.grey100};
  border-radius: 6px;
  padding: ${e=>e.theme.spacing.sp16};

  & > :not(:first-child) {
    margin-top: ${e=>e.theme.spacing.sp8};
  }
`,bs=c.img`
  width: 80px;
`,Ss=c.div`
  ${Ye};
  color: ${e=>e.theme.systemColors.black};
  text-align: center;
`,ws=c.div`
  ${te};
  text-align: center;
`,As=c.a`
  text-decoration: none;
`,Cs=e=>e<5?"bad":e<7?"good":"excellent",js=e=>({bad:e.dataVisualizationColors.tomato500,good:e.dataVisualizationColors.yellow500,excellent:e.dataVisualizationColors.green500}),$s=(e,t)=>{const{t:r}=b(),o=Yn();return y.useMemo(()=>{const s=t?"single":"multi",i=Cs(e);return{description:r(`listingQualityScore.listingQualityScore.descriptionMap.${s}.${i}`),color:js(o)[i]}},[t,r,o,e])},ks=({marketplace:e,score:t,product:r,showSelectedProduct:o,tool:s})=>{const{t:i}=b(),l=r==null?"multi":"single",{description:p,color:a}=$s(t,r!=null),u=$t({data:{asin:(r==null?void 0:r.asin)||""}});return n.jsxs(Ps,{children:[n.jsxs(Es,{children:[i(`listingQualityScore.listingQualityScore.title.${l}`),n.jsx(Rr,{content:i(`listingQualityScore.listingQualityScore.tooltip.${l}`)})]}),n.jsxs(Is,{children:[n.jsxs(Ms,{children:[n.jsx(Os,{children:M({value:t,maximumFractionDigits:1,minimumFractionDigits:1})}),n.jsx(Ds,{children:"/10"})]}),n.jsx(Io,{progress:[{value:t,color:a}],total:10,size:"200"})]}),n.jsx(Ts,{children:p}),o&&r!=null&&n.jsx(Fs,{children:n.jsx(kt,{imageSize:"50",titleLineClamp:1,market:"AMAZON",renderBlocks:u,marketplace:e.store,tool:s||"listingAnalyzer",product:{asin:r.asin,title:r.title,imageSrc:r.imageSrc||"",href:jt("AM",e.store,(r==null?void 0:r.asin)||"")}})})]})},Ps=c(He)`
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.spacing.sp16};
`,Es=c.div`
  ${Ke};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Is=c.div`
  display: flex;
  flex-direction: column;
`,Ms=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${e=>e.theme.spacing.sp16};
`,Os=c.div`
  ${qn};
  color: ${e=>e.theme.systemColors.grey800};
`,Ds=c.div`
  ${te};
  margin-bottom: ${e=>e.theme.spacing.sp4};
`,Ts=c.div`
  ${te};
  margin-top: ${e=>e.theme.spacing.sp16};
  text-align: center;
`,Fs=c.div`
  margin-top: ${e=>e.theme.spacing.sp16};
  padding-top: ${e=>e.theme.spacing.sp16};
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
`,Bs=()=>{const e=O(ts);return n.jsx(ks,{...e})},G=ve((e,t)=>({...U(e,t,"productSelectOptions",[],{sideEffect:()=>{const r=G.getState().productSelectOptions.value;r.length===1&&G.getState().selectedProduct.set(r[0])}}),...U(e,t,"selectedProduct",null)})),Rs=e=>[{text:e==null?void 0:e.asin}],Ns=y.memo(()=>{const{t:e}=b(),[t,r,o]=G(s=>[s.productSelectOptions.value,s.selectedProduct.value,s.selectedProduct.set]);return n.jsx(Ws,{children:n.jsx(Mo,{value:r,onChange:o,options:t,placeholder:e("listingQualityScore.title.select.placeholder"),getBlocks:Rs,clearOption:e("listingQualityScore.title.select.placeholder"),disabled:t.length===1})})}),Ws=c.div`
  max-width: 236px;
  min-width: 236px;
`,Ls=()=>{const{t:e}=b(),t=O(r=>r.props.value.isSingleSearch);return n.jsxs(_s,{children:[n.jsx(Q,{title:e(`listingQualityScore.title.text.${t?"single":"multi"}`),tooltip:e("listingQualityScore.title.tooltip"),size:"400"}),n.jsx(Ns,{})]})},_s=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp16};
`,Gs=()=>n.jsxs(n.Fragment,{children:[n.jsxs(zs,{children:[n.jsx(Us,{}),n.jsx(Vs,{})]}),n.jsxs(Ks,{children:[n.jsxs("div",{children:[n.jsx(Hs,{}),n.jsx(Ys,{})]}),n.jsxs(Qs,{children:[n.jsx(Xt,{gridColumn:2,children:n.jsx(et,{rowsCount:7})}),n.jsxs(Xt,{gridColumn:3,children:[n.jsx(et,{rowsCount:4}),n.jsx(et,{rowsCount:2})]})]})]})]}),zs=c.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: ${e=>e.theme.spacing.sp16};
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,Us=c(C)`
  width: 100%;
  max-width: 440px;
  height: 32px;
`,Vs=c(C)`
  min-width: 236px;
  height: 32px;
`,Qs=c.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`,Xt=c.div``,Ks=c.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 225px 1fr;
`,Hs=c(C)`
  min-height: 226px;
`,Ys=c(C)`
  min-height: 220px;
  margin-top: 24px;
  margin-bottom: 16px;
`,et=({rowsCount:e})=>n.jsxs(qs,{children:[n.jsx(Js,{}),n.jsx(Zs,{children:[...new Array(e)].map((t,r)=>n.jsxs(Xs,{children:[n.jsx(ea,{}),n.jsx(ta,{})]},r))})]}),qs=c.div`
  margin-bottom: 40px;
`,Js=c(C)`
  height: 26px;
  max-width: 200px;
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Zs=c.div`
  & > :not(:first-child) {
    border-top: 1px solid rgb(217, 224, 232);
  }
`,Xs=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
`,ea=c(C)`
  height: 34px;
  width: 100%;
  max-width: 240px;
`,ta=c(C)`
  height: 34px;
  width: 50px;
`,ra=()=>{y.useEffect(()=>()=>{O.getState().props.clear()},[])},na=e=>{y.useEffect(()=>{O.getState().props.set(e)},[e])},oa=y.memo(e=>{ra(),na(e);const t=O(r=>r.props.value.status);return n.jsxs(ia,{children:[t==="loaded"&&n.jsxs(n.Fragment,{children:[n.jsx(Ls,{}),n.jsxs(sa,{children:[n.jsxs(aa,{children:[n.jsx(Bs,{}),n.jsx(xs,{})]}),n.jsx(as,{})]})]}),t!=="loaded"&&n.jsx(Gs,{})]})}),ia=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp24};
`,sa=c.div`
  display: grid;
  grid-template-columns: 1fr;

  ${le.desktop} {
    grid-template-columns: 224px 1fr;
  }
`,aa=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp24};
`,la=e=>{y.useEffect(()=>()=>{G.getState().productSelectOptions.clear(),G.getState().selectedProduct.clear()},[e]),y.useEffect(()=>{G.getState().productSelectOptions.clear(),G.getState().selectedProduct.clear()},[e])},ca=e=>{var t;y.useEffect(()=>{var o;const r=Object.values(((o=e.listingQualityScoreProps.data)==null?void 0:o.scoreData.data)||{}).filter(s=>s&&s.title).map(s=>({...s,title:s.title?n.jsx("div",{dangerouslySetInnerHTML:{__html:s.title}}):void 0,label:s.asin,imageSrc:s.imageUrl,href:s.productUrl,value:s.asin,market:"a"}));G.getState().productSelectOptions.set(r)},[(t=e.listingQualityScoreProps.data)==null?void 0:t.scoreData])},Fu=e=>{la(e.searchId),ca(e);const t=G(s=>s.selectedProduct.value),r=y.useMemo(()=>({...e.listingQualityScoreProps,selectedProduct:t}),[e.listingQualityScoreProps,t]),o=y.useMemo(()=>({...e.competitorAnalysisProps,selectedProduct:t}),[e.competitorAnalysisProps,t]);return n.jsxs(pa,{children:[n.jsx(oa,{...r}),n.jsx(ua,{}),n.jsx(Zo,{...o})]})},pa=c(He)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${e=>e.theme.spacing.sp24};
  padding: ${e=>e.theme.spacing.sp24};
`,ua=c.div`
  height: 1px;
  align-self: stretch;
  background-color: ${e=>e.theme.systemColors.grey200};
`,qe=e=>{var t,r;return Object.entries(((r=(t=e.props.value.data)==null?void 0:t.scoreData)==null?void 0:r.data)||{}).map(([o,s])=>s).filter(o=>o!=null).map(o=>o)},da=e=>qe(e).map(r=>({...r,images:r.images.map(o=>o.large),hiresImages:r.images.map(o=>o.hiRes)})),fa={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null},D=ve((e,t)=>({...U(e,t,"props",fa),...Eo(e,t,"modal",{currentIndex:0}),...U(e,t,"showMore",!1)})),ma=e=>{var u;const t=e.items?e.items.length:0,r=y.useRef(null),[o,s]=y.useState(e.activeIndex||0),[i,l]=y.useState(!1),p=y.useCallback(()=>{l(!0)},[]),a=y.useCallback(d=>{l(!1),s(d.item)},[]);return n.jsx(ya,{children:n.jsxs(Sa,{tabIndex:-1,children:[n.jsx(Oo,{ref:r,...e,animationDuration:500,disableButtonsControls:!0,disableDotsControls:!0,autoWidth:!0,infinite:!0,onSlideChange:p,onSlideChanged:a}),n.jsxs(ga,{children:[n.jsx(xa,{buttonType:"icon",size:"100",icon:n.jsx(er,{icon:Jn}),onClick:d=>{var m;return!i&&((m=r.current)==null?void 0:m.slidePrev(d))},disabled:o===0}),n.jsxs(ha,{children:[o+1," of ",(u=e.items)==null?void 0:u.length," images"]}),n.jsx(va,{buttonType:"icon",size:"100",icon:n.jsx(er,{icon:Zn}),onClick:d=>{var m;return!i&&((m=r.current)==null?void 0:m.slideNext(d))},disabled:o===t-1})]})]})})},ya=c.div``,ha=c.span`
  ${Ye};
`,ga=c.div`
  padding: 10px 24px;
  border-top: ${({theme:e})=>e.systemColors.grey300} solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,on=k`
  min-width: 32px;

  & > svg {
    font-size: 24px;
  }
`,xa=c(V)`
  ${on};
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,va=c(V)`
  ${on};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,er=c(z)`
  font-size: 24px;
`,ba=c.div`
  .alice-carousel .animated {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .alice-carousel .animated-out {
    z-index: 1;
  }

  .alice-carousel .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  .alice-carousel {
    position: relative;
    width: 100%;
    margin: auto;
    direction: ltr;
  }

  .alice-carousel__wrapper {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    width: 100%;
    height: auto;
  }

  .alice-carousel__stage {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    transform-style: flat;
    -webkit-transform-style: flat;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .alice-carousel__stage-item {
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: normal;
    line-height: 0;
  }

  .alice-carousel__stage-item * {
    line-height: initial;
  }

  .alice-carousel__stage-item.__hidden {
    opacity: 0;
    overflow: hidden;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: inline-block;
    box-sizing: border-box;
    width: 50%;
    padding: ${({theme:e})=>`${e.spacing.sp12} ${e.spacing.sp6}`};
  }

  .alice-carousel__prev-btn [data-area]::after,
  .alice-carousel__next-btn [data-area]::after {
    position: relative;
    content: attr(data-area);
    text-transform: capitalize;
  }

  .alice-carousel__prev-btn {
    text-align: right;
  }

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    display: inline-block;
    cursor: pointer;
    padding: ${({theme:e})=>e.spacing.sp6};
    margin: 0;
    color: #465798;
  }

  .alice-carousel__prev-btn-item:hover,
  .alice-carousel__next-btn-item:hover {
    color: darkred;
  }

  .alice-carousel__prev-btn-item.__inactive,
  .alice-carousel__next-btn-item.__inactive {
    opacity: 0.4;
    pointer-events: none;
  }

  .alice-carousel__play-btn {
    position: absolute;
    top: 30px;
    left: 20px;
    display: inline-block;
  }

  .alice-carousel__play-btn:hover {
    cursor: pointer;
  }

  .alice-carousel__play-btn-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 50%;
    background-color: #fff;
  }

  .alice-carousel__play-btn-item {
    position: absolute;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: 0;
    outline: none;
    background: transparent;
  }

  .alice-carousel__play-btn-item::before,
  .alice-carousel__play-btn-item::after {
    position: absolute;
    pointer-events: none;
    display: block;
    width: 0;
    height: 0;
    content: "";
    transition: all 0.4s linear;
    border-width: 8px 0 8px 15px;
    border-style: solid;
    border-color: transparent;
    border-left-color: #465798;
  }

  .alice-carousel__play-btn-item::before {
    left: 5px;
    height: 14px;
  }

  .alice-carousel__play-btn-item::after {
    top: 7px;
    left: 18px;
  }

  .alice-carousel__play-btn-item.__pause::before,
  .alice-carousel__play-btn-item.__pause::after {
    height: 30px;
    border-width: 0 0 0 10px;
  }

  .alice-carousel__play-btn-item.__pause::after {
    top: 0;
    left: 18px;
  }
`,Sa=c(ba)`
  display: block;
  align-items: center;
  border-radius: 6px;
  border: ${({theme:e})=>e.systemColors.grey300} solid 1px;
`,wa=y.memo(()=>{const[e,t,r]=D(i=>[i.modal.atom.isOpen,i.modal.atom.data,i.modal.close]),o=D(qe),s=y.useMemo(()=>{const i=o.find(l=>l.asin===(t==null?void 0:t.asin));if(i)return i.images.map((l,p)=>n.jsx(Aa,{width:"100%",height:"100%",src:l.hiRes,alt:`${p}`},`${p}`))},[o,t==null?void 0:t.asin]);return n.jsx(Xn,{isOpen:e,onClose:r,children:n.jsx(ma,{items:s,activeIndex:t==null?void 0:t.currentIndex})})}),Aa=c.img`
  height: 100%;
  width: 100%;
  max-height: calc(90vh - 140px);
  object-fit: contain;
`,tr=({count:e,type:t})=>n.jsxs(mt,{children:[n.jsx(z,{icon:t==="image"?eo:to}),n.jsx("div",{children:M({value:e})})]}),mt=c.div`
  ${Ke};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};

  svg {
    font-size: 16px;
  }
`,Ca=y.memo(({data:e,asin:t,index:r})=>{const o=y.useCallback(()=>D.getState().modal.open({asin:t,currentIndex:r}),[t,r]);return n.jsx(Pt,{onClick:o,children:n.jsx(Ee,{colorType:"light",content:e.large&&n.jsx(ja,{alt:t,src:e.large}),small:!0,maxWidth:450,delay:200,children:n.jsx(sn,{src:e.large||e.thumb||e.hiRes})})})}),Pt=c.div`
  border: 1px solid ${e=>e.theme.systemColors.grey200};
  border-radius: 6px;
  overflow: hidden;
  width: 170px;
  height: 170px;
  flex: 0 0 auto;
  position: relative;
  cursor: pointer;
`,sn=c.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
`,ja=c.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
`,$a=({data:e})=>{const{t}=b();return n.jsxs(Pt,{children:[n.jsx(sn,{src:e}),n.jsx(ka,{children:t("Video")})]})},ka=c.div`
  ${Ct};
  position: absolute;
  bottom: ${e=>e.theme.spacing.sp8};
  left: 50%;
  transform: translateX(-50%);
  background: #f2f5f7;
  border-radius: 12px;
  padding: ${({theme:{spacing:{sp4:e,sp8:t}}})=>`${e} ${t}`};
`,Pa=({data:e})=>{const{asin:t,title:r,productUrl:o,images:s,totalScore:i,videos:l}=e,[p,a]=D(m=>[m.props.value.marketplace,m.props.value.tool],ro),u=$t({data:{asin:t||"",marketplace:p.domain,listingScore:i}}),d=y.useMemo(()=>{var m;return{asin:t,title:r,imageSrc:(m=s[0])==null?void 0:m.thumb,href:o}},[t,s,o,r]);return n.jsxs(an,{children:[n.jsxs(ln,{children:[n.jsxs(cn,{children:[n.jsx(kt,{market:"AMAZON",product:d,marketplace:p.store,tool:a||"listingAnalyzer",renderBlocks:u,tooltipOptions:{appendTo:document.body},...Ea}),n.jsxs(un,{children:[n.jsx(tr,{type:"image",count:(s==null?void 0:s.length)||0}),n.jsx(tr,{type:"video",count:(l==null?void 0:l.length)||0})]})]}),n.jsx(pn,{})]}),n.jsxs(dn,{children:[(s||[]).map((m,f)=>n.jsx(Ca,{data:m,asin:t,index:f},`image-${f}`)),(l||[]).map((m,f)=>n.jsx($a,{data:m},`video-${f}`))]})]})},Ea=Br[50],an=c.div`
  justify-self: stretch;
`,ln=c.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
  padding: ${e=>e.theme.spacing.sp20} ${e=>e.theme.spacing.sp24} 0;
`,cn=c.div`
  display: grid;
  justify-items: center;
  grid-gap: ${e=>e.theme.spacing.sp16};

  grid-template-columns: 1fr;

  ${le.laptop} {
    justify-items: flex-start;
    grid-template-columns: 1fr auto;
  }
`,pn=c.div`
  margin-top: ${e=>e.theme.spacing.sp20};
  border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
`,un=c.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
`,dn=c.div`
  max-height: 210px;
  display: flex;
  width: 0;
  min-width: 100%;
  overflow: auto;
  overflow-y: hidden;
  padding: ${({theme:{spacing:{sp16:e,sp24:t}}})=>`${e} ${t} ${t}`};
  gap: ${e=>e.theme.spacing.sp16};
`,Ia=()=>n.jsxs(an,{children:[n.jsxs(ln,{children:[n.jsxs(cn,{children:[n.jsxs(Da,{children:[n.jsx(Ta,{}),n.jsxs(Fa,{children:[n.jsx(Ba,{}),n.jsxs(Ra,{children:[n.jsx(tt,{}),n.jsx(or,{}),n.jsx(tt,{}),n.jsx(or,{}),n.jsx(tt,{})]})]})]}),n.jsxs(un,{children:[n.jsxs(mt,{children:[n.jsx(rr,{}),n.jsx(nr,{})]}),n.jsxs(mt,{children:[n.jsx(rr,{}),n.jsx(nr,{})]})]})]}),n.jsx(pn,{})]}),n.jsx(dn,{children:Ma.map((e,t)=>n.jsx(Pt,{children:n.jsx(Oa,{})},t))})]}),Ma=[...new Array(5)],rr=c(C)`
  width: 18px;
  height: 12px;
`,nr=c(C)`
  width: 10px;
  height: 14px;
`,Oa=c(C)`
  width: 100%;
  height: 100%;
`,Da=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  justify-self: stretch;
`,Ta=c(C)`
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
`,Fa=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Ba=c(C)`
  height: 14px;
  max-width: 900px;
`,Ra=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
  margin-top: ${e=>e.theme.spacing.sp4};
`,tt=c(C)`
  width: 24px;
  height: 16px;
`,or=c(C)`
  width: 80px;
  height: 12px;
`,Na=()=>{const e=D(qe),[t,r,o]=D(i=>[i.props.value.status==="loaded",i.props.value.showByDefault,i.showMore.value]),s=y.useMemo(()=>{if(r!=null)return o?e.length:r},[e.length,r,o]);return n.jsx(La,{clampRows:s,children:t?e.map(i=>n.jsx(Pa,{data:i},i.asin)):Wa.map((i,l)=>n.jsx(Ia,{},l))})},Wa=[...new Array(5)],La=c.div`
  display: grid;
  grid-template-columns: 1fr;
  align-self: stretch;

  ${e=>e.clampRows!=null&&k`
      max-height: ${e.clampRows*328}px;

      ${le.laptop} {
        max-height: ${e.clampRows*294}px;
      }

      overflow: hidden;
      transition: max-height 500ms;
    `}
`,fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABuCAYAAAANrABAAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAudEVYdENyZWF0aW9uIFRpbWUAVHVlIDE2IEF1ZyAyMDIyIDA1OjMwOjQ0IFBNIEVFU1TRaC5cAAAGS0lEQVR4nO2d7W6jPBBGx8Z8hJCq93+XSUMIAez98WoobzcOH7XBZJ8jrbRSgrHKyWA8HiOMMYYAeILcugMgXCAHsAI5gBXIAaxADmAFcgArkANYgRzAilp6oDGGMH8WPkIIEkIsOnaWHMYY0lqT1pratqWmaSBIoAghSEpJSZKQlLL/N4fJcmitqWkaqqqK7vc7pNgJQghSSlGe55SmKUkpJ0cSMSW30rYtVVVFZVlCip0ihKAkSagoCorjeJIgo3K0bUvX65WqqnLWUbANHEWOxyNlWTYqyMubUNd1VJYlxHgTjDHUNA2VZUmPx2P0LmCVwxhDdV3T7XZz3kmwLW3bUlmWpLV++b2ncrBhEOM9McZQ27aj19caOZqmoaZpnHcMhEHXdfR4PF5Gj6dy8IHgvdFaU9d11s+tcrRt661TIAwWyWGMeXkQeA/GUiBWOTDZ9f6MBQFkZYGVxVnZJXCGkBNAw/+zwZzcQ+TanlXkEEJQFEWklKIkSShNU1Lq/6dmKeq6psfjQU3TUNd1kGRDvMvBaWPOCtpggfI8p8Ph0GeA67rG4HgjvMqhlKIsy6goilkLTjiDGMcx1XVNl8sFt5oN8DYgjeOYiqKg0+m0eCWSEILSNKXPz8+/bkPAP17kkFJSlmV0OBx+3ZYQguI4po+PDwiyMs7lkFLS4XCgoiictcmCHI/H2UvdwHKc/6WVUk4ixk/4FpNlmfO2wXOcyhFFEaVpSnEcu2y2R0rZr4ME/vEihy94mVuSJN7OAb5xKoeU0lvUGJ4DcqyDMznWEIPPo5Ra/HgMpuNMjmGexDc8mwr84lQO/JrfCwz7V4Cj6t5+PM6mHLFA6G+GT1dSSmrblh6Px24Sic7kGFuP6JI9LGPk5OHpdOoH6lprut/vdL1eg+8/kePbyhrrL1iMkKPUMzGIvlMLHx8fuxhQO5ODL5rvXwRX+4eKTYzh52ma7kIQ55Gjrmuvv+q2bamua2/t/4YxMYbf24MgTuXgZX5jNZhLYflCvF9PFWP4/dAFcSoH12BWVeU8enD97v1+d9quC+aKMTwuZEGcz3N0Xedl9x/eOiC0qLFUjOHxoQriZRKs6zq63W5O9gwbVvyHVr/7WzGG7YQoiBc5+IJeLhe63++LFwfzk0mIOwu5EmPYXmiCeJs+Z0G+vr6oqirqum6yJMOxy/l8Dm6c4VqMYbshCeJ9xW7Xdb0geZ73m5UNq96IvqffeRtLrlkJDV9iDNtnQS6Xy6ZjrFWWc3MUOZ/P/boPpVS/NyZHCq316IYiW+JbjOF5QhBk9bX+PBcSYlR4xVpiDM+3tSBI2U9gbTGG591yDAI5RthKjOH5txIEcrxgazGG/dhCEMhhIRQxhv1ZW5Dg5dhiaV1oYjBrCxKsHFwglaZpv8xuDUIVg1lTkCDL1rlommtuOVdzu928zoGELgaz1mNucJHjpxhE/0WR4/FIRVF4iyB7EYNhQU6nk7e/SVByPBODGW7t4PqPsTcxGO53nude2g9GjldiMD4E2asYjM9isiDkmCIG41KQvYvhm83lmCMG40IQiDHOpnIsEYP5jSAQYxqbyfEbMZglgkCM6WwihwsxmDmCQIx5rC6HSzGYKYJAjPmsKocPMZhXgkCMZawmh08xmGeCQIzlrJJbWUMMhgUhIirLkpRSEGMh3uVYUwyGBYmiiKIoghgL8SrHFmIwvP86WI7XtyZsJQZwgxc5IMZ74FyOKIrocDhAjDfAuRxrblYL/IKrCKxADmAFcgArkANYgRzACuQAViAHsAI5gBXIAax4ycqu+XqNfx3epdEHzuUYFj2DddiNHLwzINg/GHMAK5ADWIEcwMpTOfBS33+Dsev8VA7edhq8N2PX+eknURRRkiTeOgXCQEq5LHIkSbK7NyiDeXBdjw3rmEMpRWmaeusY2BalFGVZ9jIAWG84URRRnucYmL4hXD88ViFglUMI0defYHD6PvAWlUVRjH735fT5z6JkJNP2jRCCsiyj4/E46Y4gzISXrhljqK5rKsuyf6MS2A/8yMpiTN4ia4ocjNa6f2es1rqXxOfrycF8eJDJBWZxHPfv15vVzhw5GM68Nk3TS4JoEgYcJXgOI47j5dtxLpED/BvgMQRYgRzACuQAViAHsAI5gBXIAaz8ATLGxnvqsRQyAAAAAElFTkSuQmCC",_a="https://re-cdn.helium10.com/container/static/helium10-logo-9FQo6Tjn.png",Ga=e=>{const t=document.getElementById(e);t&&no(()=>import("./html2pdf.es-f4sjvCzR.js"),__vite__mapDeps([0,1])).then(r=>{r.default(t,{margin:5,image:{type:"jpeg",quality:1},html2canvas:{useCORS:!0,scale:2},pagebreak:{after:"#page-break"}})})},mn=132,yn=114,za=[...new Array(9)].map((e,t)=>t),Ua=y.memo(()=>{const e=D(da);return n.jsxs(n.Fragment,{children:[n.jsx(Qa,{}),n.jsx(Xa,{children:n.jsx("div",{id:"pdf-export",children:e.map((t,r)=>n.jsx(Va,{...t,pageBreak:!((r+1)%3)&&r!==0,watermark:!((r-1)%3)||r===e.length-1&&(r+1)%3<2},r))})})]})}),Va=({images:e,title:t,asin:r,productUrl:o,videos:s,pageBreak:i,watermark:l})=>n.jsxs(n.Fragment,{children:[n.jsx(ir,{}),n.jsxs(qa,{children:[n.jsxs(el,{children:[t,n.jsxs(tl,{children:["ASIN: ",n.jsx("a",{href:o,children:r})," | Image: ",e.length," | Video: ",s.length]})]}),n.jsxs(Ya,{children:[l&&n.jsx(Ja,{src:_a}),za.map(p=>{const a=e[p];return n.jsx(Za,{isEmpty:!a,children:n.jsx(Ka,{src:a||fn,width:a?mn:50,height:a?yn:50})},p)})]})]}),i&&n.jsx(ir,{}),i&&n.jsx("div",{id:"page-break"})]}),Qa=y.memo(()=>{const{t:e}=b(),t=()=>{Ga("pdf-export")},r=D(o=>o.props.value.status!=="loaded");return n.jsx(V,{buttonType:"tertiary",size:"100",onClick:t,icon:n.jsx(z,{icon:oo}),disabled:r,children:e("mediaComparison.exportButton")})}),Ka=y.memo(({src:e,width:t,height:r})=>{const[o,s]=y.useState(t),[i,l]=y.useState(r);return n.jsx(Ha,{src:e||fn,alt:"pdf",width:e?o:50,height:e?i:40,onLoad:p=>{const{naturalWidth:a,naturalHeight:u}=p.currentTarget;a>u?l(u/a*r):s(a/u*t)}})}),Ha=c.img``,Ya=c.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -5px;
`,qa=c.div`
  position: relative;
`,Ja=c.img`
  position: absolute;
  width: 45%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0.2;
`,ir=c.div`
  width: 100%;
  height: 5px;
  background-color: ${e=>e.theme.systemColors.blue400};
  margin: 16px 0;
`,Za=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${yn+10}px;
  width: ${mn+10}px;
  margin: 5px;
  border: solid 1px ${({isEmpty:e})=>e?"#DDD":"#777"};
`,Xa=c.div`
  display: none;
`,el=c.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 7.5px;
  font-size: 10px;
  color: black;
`,tl=c.div`
  font-size: 10px;

  a {
    color: ${e=>e.theme.systemColors.blue600};
    font-weight: bold;
    text-decoration: none;
  }

  color: black;
`,rl=({learnButton:e})=>{const{t}=b();return n.jsxs(nl,{children:[n.jsx(Q,{title:t("mediaComparison.title"),tooltip:t("mediaComparison.tooltip"),size:"400"}),n.jsxs(ol,{children:[n.jsx(Ua,{}),e]})]})},nl=c.div`
  padding: ${e=>e.theme.spacing.sp20} ${e=>e.theme.spacing.sp24};
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp16};
`,ol=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,il=()=>{const{t:e}=b(),[t,r,o]=D(i=>[i.props.value.showByDefault,i.showMore.value,i.showMore.set]),s=D(qe);return t==null||t>=s.length?null:n.jsx(sl,{children:n.jsx(V,{type:"button",buttonType:"text",size:"100",onClick:()=>o(!r),children:e(`mediaComparison.expandButton.${r?"shown":"hidden"}`)})})},sl=c.div`
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
  padding: ${e=>e.theme.spacing.sp16} ${e=>e.theme.spacing.sp24};
  background-color: ${e=>e.theme.systemColors.white};
`,al=()=>{y.useEffect(()=>()=>{D.getState().props.clear()},[])},ll=e=>{y.useEffect(()=>{D.getState().props.set(e)},[e])},cl=({learnButton:e,...t})=>(al(),ll(t),n.jsxs(hn,{children:[n.jsx(rl,{learnButton:e}),n.jsx(Na,{}),n.jsx(il,{}),n.jsx(wa,{})]})),hn=c(He)`
  width: 100%;
  padding: 0;
`,Bu=Object.assign(cl,{Wrapper:hn}),pl={marketplace:Ie("domain","amazon.com"),data:[],status:"loading",planGroup:"free",blurred:!0,openUpgradeModal:()=>{},mediaComparisonLocked:!0},ce=ve((e,t)=>({...U(e,t,"props",pl)})),ul=({period:e,additionTitle:t,size:r="big"})=>{const[o,s]=ce(i=>[i.props.value.tableTitle,i.props.value.tableTitleTooltip]);return n.jsxs(ml,{children:[n.jsxs(dl,{children:[n.jsxs(gl,{children:[n.jsx(yl,{$size:r,children:o}),t,s&&n.jsx(xl,{content:s})]}),e&&n.jsx(hl,{children:e})]}),n.jsx(fl,{children:n.jsx(_r,{useDefaultTitles:!0,useDefaultTooltips:!0})})]})},dl=c.div``,fl=c.div``,ml=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,yl=c.div`
  ${({$size:e})=>e==="big"&&k`
      ${Fr};
    `}
  ${({$size:e})=>e==="medium"&&k`
      ${Ye};
      color: ${t=>t.theme.systemColors.black};
    `}
`,hl=c.div`
  ${te};
  margin-top: ${e=>e.theme.spacing.sp4};
`,gl=c.div`
  display: flex;
  align-items: center;
`,xl=c(Rr)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,sr=({content:e})=>{const{isOverflown:t,checkOverflown:r}=At();return n.jsx(Me,{content:t?void 0:e,children:n.jsx(vl,{onMouseEnter:r,children:e})})},vl=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,bl=e=>{const t=new RegExp(" ","g");return e.replace(t," ")},Sl=({product:e,marketplace:t,sellerType:r,size:o,tool:s})=>{const i=$t({data:{asin:e.asin||"",fulfillmentType:wl[r],marketplace:t.domain}});return n.jsx(kt,{market:"AMAZON",product:e,renderBlocks:i,marketplace:t.store,tool:s||"listingAnalyzer",tooltipOptions:{appendTo:document.body},...Br[o]})};k`
  align-items: flex-start;
`;const wl={1:"Amazon",2:"FBA",3:"FBM"},Al=({sellerName:e,numberOfSellers:t=0})=>{const{t:r}=b(),{isOverflown:o,checkOverflown:s}=At();return n.jsxs(Cl,{children:[n.jsx(Me,{content:n.jsxs(n.Fragment,{children:[r("metricsAcrossAsins.columns.seller.sellerNameTooltip"),o?void 0:n.jsxs(n.Fragment,{children:[n.jsx("br",{}),e]})]}),children:n.jsx(jl,{onMouseEnter:s,children:e})}),n.jsx(Ee,{content:r("metricsAcrossAsins.columns.seller.numberOfSellersTooltip"),delay:[0,0],children:n.jsxs($l,{children:["(",t||0,")"]})})]})},Cl=c.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`,jl=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,$l=c.div`
  margin-left: 4px;
`,kl=()=>{const{t:e}=b(),t=Do(),{open:r}=To(),[o,s,i,l,p]=ce(({props:{value:a}})=>[a.marketplace,a.planGroup,a.blurred,a.openUpgradeModal,a.tool]);return y.useMemo(()=>[{field:"product",title:e("metricsAcrossAsins.columns.product.title"),sortable:!1,static:352,responsive:!0,render:(a,{size:u})=>n.jsx(Sl,{product:{asin:a.asin,imageSrc:a.imageSrc,title:n.jsx("div",{dangerouslySetInnerHTML:{__html:bl(a.title||"")}}),href:jt("AM",o.store,a.asin)},sellerType:a.sellerType||1,size:u,marketplace:o,tool:p})},{field:"listingQualityScore",title:e("metricsAcrossAsins.columns.listingQualityScore.title"),tooltip:e("metricsAcrossAsins.columns.listingQualityScore.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.listingQualityScore!=null?n.jsx(Fo,{rang:a.listingQualityScore}):"N/A",maxWidth:80},{field:"sellerRegion",title:e("metricsAcrossAsins.columns.sellerRegion.title"),tooltip:e("metricsAcrossAsins.columns.sellerRegion.tooltip"),sortable:!0,sorter:"string",render:a=>{var u;return n.jsx(sr,{content:a.sellerCountry!=null&&((u=t==null?void 0:t[a.sellerCountry])==null?void 0:u.label)||"N/A"})},maxWidth:200},{field:"salesRank",title:e("metricsAcrossAsins.columns.categoryBSR.title"),tooltip:e("metricsAcrossAsins.columns.categoryBSR.tooltip"),sortable:!0,sorter:"number",customCSS:J,maxWidth:240,render:a=>n.jsx(bo,{category:a.categoryTitle||"",bestSellersUrl:a.bestSellersUrl||"",salesRank:a.salesRank||0,subcategories:a.subcategories||[],asin:a.asin,marketplace:o,advanced:!0,onClickChart:()=>r(a.asin,"bsr")})},{field:"price",title:e("metricsAcrossAsins.columns.price.title"),tooltip:e("metricsAcrossAsins.columns.price.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(So,{price:a.price||0,priceChange:a.priceChange||0,currency:o.currency,onClickChart:()=>r(a.asin,"price"),advanced:!0}),maxWidth:200},{field:"monthlySales",title:e("metricsAcrossAsins.columns.monthlySales.title"),tooltip:e("metricsAcrossAsins.columns.monthlySales.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(wo,{monthlySales:a.monthlySales||0,monthlySalesChange:a.salesChange||0,advanced:!0,onClickChart:()=>s!=="free"?r(a.asin,"sales"):l()}),maxWidth:200},{field:"monthlyRevenue",title:e("metricsAcrossAsins.columns.monthlyRevenue.title"),tooltip:e("metricsAcrossAsins.columns.monthlyRevenue.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.monthlyRevenue?dt({amount:o.currency!=="JPY"?a.monthlyRevenue/100:a.monthlyRevenue,currency:o.currency}):"-",maxWidth:200},{field:"stock",title:e("metricsAcrossAsins.columns.stock.title"),tooltip:e("metricsAcrossAsins.columns.stock.tooltip"),sortable:!0,sorter:"number",customCSS:J,maxWidth:200,render:a=>n.jsx(sr,{content:a.stock!=null?a.stockHasLimit?e("metricsAcrossAsins.columns.stock.value",{number:_({value:a.stock})}):_({value:a.stock}):"N/A"})},{field:"coupon",title:e("metricsAcrossAsins.columns.coupon.title"),tooltip:e("metricsAcrossAsins.columns.coupon.tooltip"),sortable:!1,customCSS:oe,render:a=>a.couponType!=null&&a.couponValue!==null?a.couponType==="currency"?dt({amount:a.couponValue,currency:o.currency}):_({value:a.couponValue})+"%":"-",maxWidth:200},{field:"reviewsRating",title:e("metricsAcrossAsins.columns.reviewsCount.title"),tooltip:e("metricsAcrossAsins.columns.reviewsCount.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(Ao,{reviewCount:a.reviewCount||0,rating:isNaN(Number(a.reviewsRating))?void 0:Number(a.reviewsRating),advanced:!0,onClickChart:()=>r(a.asin,"review")}),maxWidth:200},{field:"bbSeller",title:e("metricsAcrossAsins.columns.seller.title"),tooltip:e("metricsAcrossAsins.columns.seller.tooltip"),sortable:!0,sorter:"string",customCSS:oe,maxWidth:150,render:a=>n.jsx(Al,{sellerName:a.bbSeller||"N/A",numberOfSellers:a.numberOfSellers})},{field:"yearSales",title:e("metricsAcrossAsins.columns.lastYearSales.title"),tooltip:e("metricsAcrossAsins.columns.lastYearSales.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(Co,{yearSales:a.yearSales||0,salesYearOverYear:a.salesYearOverYear||0,advanced:!0}),maxWidth:200},{field:"shippingDetails",title:n.jsx(cr,{children:e("metricsAcrossAsins.columns.shippingDetails.title")}),tooltip:e("metricsAcrossAsins.columns.shippingDetails.tooltip"),sortable:!1,customCSS:Dl,render:a=>n.jsx(jo,{sizeTier:a.sizeTier!=null?a.sizeTier:void 0,width:isNaN(Number(a.width))?void 0:Number(a.width),height:isNaN(Number(a.height))?void 0:Number(a.height),length:isNaN(Number(a.length))?void 0:Number(a.length),advanced:!0})},{field:"weight",title:e("metricsAcrossAsins.columns.weight.title"),tooltip:e("metricsAcrossAsins.columns.weight.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.weight!=null&&a.weight!=="-1"&&!isNaN(Number(a.weight))?_({value:Number(a.weight),maximumFractionDigits:2}):"-",maxWidth:200},{field:"storageFee",title:e("metricsAcrossAsins.columns.storageFee.title"),tooltip:e("metricsAcrossAsins.columns.storageFee.tooltip"),sortable:!1,customCSS:J,render:a=>n.jsx($o,{storageFee:a.storageFee,currency:o.currency}),maxWidth:200},{field:"bestSalesPeriod",title:e("metricsAcrossAsins.columns.bestSalesPeriod.title"),tooltip:e("metricsAcrossAsins.columns.bestSalesPeriod.tooltip"),sortable:!1,customCSS:oe,render:a=>a.bestMonth?lo(new Date(a.bestMonth),"MMM, yyyy"):"-",maxWidth:200},{field:"age",title:e("metricsAcrossAsins.columns.age.title"),tooltip:e("metricsAcrossAsins.columns.age.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.age,percentile:a.agePercentile,blurred:i,revert:!0}),maxWidth:200},{field:"numberOfImages",title:e("metricsAcrossAsins.columns.numberOfImages.title"),tooltip:e("metricsAcrossAsins.columns.numberOfImages.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.numberOfImages!=null?_({value:a.numberOfImages}):"-",maxWidth:200},{field:"variationCount",title:e("metricsAcrossAsins.columns.variationCount.title"),tooltip:e("metricsAcrossAsins.columns.variationCount.tooltip"),sortable:!0,sorter:"number",render:a=>a.variationCount!=null?_({value:a.variationCount}):"-",maxWidth:200},{field:"salesToReviews",title:e("metricsAcrossAsins.columns.salesToReviews.title"),tooltip:e("metricsAcrossAsins.columns.salesToReviews.tooltip"),sortable:!0,sorter:"number",render:a=>a.salesToReviews!=null&&!isNaN(Number(a.salesToReviews))?Number(a.salesToReviews)!==-1?_({value:Number(a.salesToReviews)}):"N/A":"-",maxWidth:200},{field:"top10Keywords",title:e("metricsAcrossAsins.columns.top10Keywords.title"),tooltip:e("metricsAcrossAsins.columns.top10Keywords.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.top10Keywords,percentile:a.top10KeywordsPercentile,blurred:i,revert:!0}),maxWidth:200},{field:"top10SearchVolume",title:e("metricsAcrossAsins.columns.top10SearchVolume.title"),tooltip:e("metricsAcrossAsins.columns.top10SearchVolume.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.top10SearchVolume,percentile:a.top10SearchVolumePercentile,blurred:i,revert:!0}),maxWidth:200},{title:"",field:"_",responsive:!0,noHeader:!0,noHover:!0}].map(a=>({...a,title:n.jsx(cr,{children:a.title}),...i&&!lr.includes(a.field)?{render:()=>n.jsx(n.Fragment,{children:e("getPlan")}),customCSS:ar.includes(a.field)?Ol:Ml}:{},contentPosition:ar.includes(a.field)?"left":"right",sortable:i&&!lr.includes(a.field)?!1:a.sortable})),[i,t,o,r,l,s,e,p])},ar=["product","sellerRegion","seller","shippingDetails"],lr=["product","listingQualityScore"],oe=k`
  ${te};
  color: ${e=>e.theme.systemColors.grey800};
  padding: 8px 16px;
`,Pl=k`
  justify-content: flex-end;
  color: ${e=>e.theme.systemColors.grey600};
`,El=k`
  ${Pl};
  min-height: 42px;
`,Il=k`
  filter: blur(5px);
`,gn=k`
  ${El};
  ${Il};
`,Ml=gn,Ol=k`
  ${gn};
  justify-content: flex-start;
`,J=k`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`,Dl=k`
  ${J};
  align-items: flex-start;
`,cr=c.div`
  white-space: nowrap;
`,Tl=()=>{const{t:e}=b(),t=ce(r=>r.props.value.data.length);return y.useCallback(r=>{const o=r.length;return n.jsxs(Bl,{children:[!o&&n.jsx(pr,{children:e("metricsAcrossAsins.leftActions.unselected",{products:t})}),!!o&&n.jsx(pr,{children:n.jsx(Fl,{children:e("metricsAcrossAsins.leftActions.selected",{products:o})})})]})},[t,e])},Fl=c.div`
  ${Ye};
`,pr=c.div``,Bl=c.div`
  padding-left: ${({theme:e})=>e.spacing.sp8};
`,Rl=()=>{y.useEffect(()=>()=>ce.getState().props.clear(),[])},Nl=e=>{y.useEffect(()=>{ce.getState().props.set(e)},Object.values(e))},Wl=()=>{const{t:e}=b(),[t,r]=ce(o=>[o.props.value.handleOpenMediaComparison,o.props.value.mediaComparisonLocked]);return y.useCallback(()=>n.jsx(Ll,{children:t&&n.jsx(Ee,{appendTo:document.body,content:e("metricsAcrossAsins.buttons.mediaComparison.tooltip"),children:n.jsx("div",{children:n.jsx(Lr,{buttonType:"secondary",type:"button",locked:r,onClick:t,onLockedClick:t,children:e("metricsAcrossAsins.buttons.mediaComparison.title")})})})}),[e,r,t])},Ll=c.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) > * {
    margin-left: ${e=>e.theme.spacing.sp16};
  }
`,_l=()=>{const e=y.useMemo(()=>({value:zl}),[]),t=y.useMemo(()=>({itemsPerPage:Ul,noPagination:!0,noFooter:!0,columnDraggable:!0,columnVisible:!0,contentSizeVisible:!0}),[]),r=y.useMemo(()=>({exportable:!1}),[]),o=y.useMemo(()=>({minHeight:100}),[]);return{filter:e,behavior:t,exportable:r,footer:Gl,dimensions:o}},Gl=()=>n.jsx("div",{id:"metrics-across-asins-footer"}),zl={count:10,page:1,search:"",sortField:"id",sortDirection:"ASC"},Ul=[11],Vl=({aboveTableComponent:e,selected:t=Ql,leftActions:r,...o})=>{Nl(o),Rl();const[s,i]=ce(d=>[d.props.value.data,d.props.value.status]),l=kl(),p=Wl(),a=Tl(),u=_l();return n.jsxs(xn,{children:[n.jsx(Gr,{children:e||n.jsx(ul,{})}),n.jsx(Ce,{name:"metrics-across-asins-widget",data:s,status:o.status,total:i==="loaded"?s.length:5,columns:l,leftActions:r||a,rightActions:p,...u,selected:t})]})},xn=c.div`
  max-width: 100%;
  min-width: 100%;

  #metrics-across-asins-footer {
    padding-bottom: ${e=>e.theme.spacing.sp24};
  }

  ${Ce.ActionPlaceWrapper} {
    align-items: center;
  }

  ${Ce.Wrapper}, ${Ce.ActionPlaceWrapper} {
    border-radius: 0 0 6px 6px;
  }
`,Ru=Object.assign(Vl,{Wrapper:xn}),Ql={haveCheckbox:!1};var Kl=Error,Hl=EvalError,Yl=RangeError,ql=ReferenceError,vn=SyntaxError,Oe=TypeError,Jl=URIError,Zl=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},r=Symbol("test"),o=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var s=42;t[r]=s;for(r in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var i=Object.getOwnPropertySymbols(t);if(i.length!==1||i[0]!==r||!Object.prototype.propertyIsEnumerable.call(t,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==s||l.enumerable!==!0)return!1}return!0},ur=typeof Symbol<"u"&&Symbol,Xl=Zl,ec=function(){return typeof ur!="function"||typeof Symbol!="function"||typeof ur("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Xl()},dr={foo:{}},tc=Object,rc=function(){return{__proto__:dr}.foo===dr.foo&&!({__proto__:null}instanceof tc)},nc="Function.prototype.bind called on incompatible ",oc=Object.prototype.toString,ic=Math.max,sc="[object Function]",fr=function(t,r){for(var o=[],s=0;s<t.length;s+=1)o[s]=t[s];for(var i=0;i<r.length;i+=1)o[i+t.length]=r[i];return o},ac=function(t,r){for(var o=[],s=r||0,i=0;s<t.length;s+=1,i+=1)o[i]=t[s];return o},lc=function(e,t){for(var r="",o=0;o<e.length;o+=1)r+=e[o],o+1<e.length&&(r+=t);return r},cc=function(t){var r=this;if(typeof r!="function"||oc.apply(r)!==sc)throw new TypeError(nc+r);for(var o=ac(arguments,1),s,i=function(){if(this instanceof s){var d=r.apply(this,fr(o,arguments));return Object(d)===d?d:this}return r.apply(t,fr(o,arguments))},l=ic(0,r.length-o.length),p=[],a=0;a<l;a++)p[a]="$"+a;if(s=Function("binder","return function ("+lc(p,",")+"){ return binder.apply(this,arguments); }")(i),r.prototype){var u=function(){};u.prototype=r.prototype,s.prototype=new u,u.prototype=null}return s},pc=cc,Et=Function.prototype.bind||pc,uc=Function.prototype.call,dc=Object.prototype.hasOwnProperty,fc=Et,mc=fc.call(uc,dc),x,yc=Kl,hc=Hl,gc=Yl,xc=ql,he=vn,ye=Oe,vc=Jl,bn=Function,rt=function(e){try{return bn('"use strict"; return ('+e+").constructor;")()}catch{}},se=Object.getOwnPropertyDescriptor;if(se)try{se({},"")}catch{se=null}var nt=function(){throw new ye},bc=se?function(){try{return arguments.callee,nt}catch{try{return se(arguments,"callee").get}catch{return nt}}}():nt,de=ec(),Sc=rc(),$=Object.getPrototypeOf||(Sc?function(e){return e.__proto__}:null),me={},wc=typeof Uint8Array>"u"||!$?x:$(Uint8Array),ae={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?x:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?x:ArrayBuffer,"%ArrayIteratorPrototype%":de&&$?$([][Symbol.iterator]()):x,"%AsyncFromSyncIteratorPrototype%":x,"%AsyncFunction%":me,"%AsyncGenerator%":me,"%AsyncGeneratorFunction%":me,"%AsyncIteratorPrototype%":me,"%Atomics%":typeof Atomics>"u"?x:Atomics,"%BigInt%":typeof BigInt>"u"?x:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?x:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?x:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?x:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":yc,"%eval%":eval,"%EvalError%":hc,"%Float32Array%":typeof Float32Array>"u"?x:Float32Array,"%Float64Array%":typeof Float64Array>"u"?x:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?x:FinalizationRegistry,"%Function%":bn,"%GeneratorFunction%":me,"%Int8Array%":typeof Int8Array>"u"?x:Int8Array,"%Int16Array%":typeof Int16Array>"u"?x:Int16Array,"%Int32Array%":typeof Int32Array>"u"?x:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":de&&$?$($([][Symbol.iterator]())):x,"%JSON%":typeof JSON=="object"?JSON:x,"%Map%":typeof Map>"u"?x:Map,"%MapIteratorPrototype%":typeof Map>"u"||!de||!$?x:$(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?x:Promise,"%Proxy%":typeof Proxy>"u"?x:Proxy,"%RangeError%":gc,"%ReferenceError%":xc,"%Reflect%":typeof Reflect>"u"?x:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?x:Set,"%SetIteratorPrototype%":typeof Set>"u"||!de||!$?x:$(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?x:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":de&&$?$(""[Symbol.iterator]()):x,"%Symbol%":de?Symbol:x,"%SyntaxError%":he,"%ThrowTypeError%":bc,"%TypedArray%":wc,"%TypeError%":ye,"%Uint8Array%":typeof Uint8Array>"u"?x:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?x:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?x:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?x:Uint32Array,"%URIError%":vc,"%WeakMap%":typeof WeakMap>"u"?x:WeakMap,"%WeakRef%":typeof WeakRef>"u"?x:WeakRef,"%WeakSet%":typeof WeakSet>"u"?x:WeakSet};if($)try{null.error}catch(e){var Ac=$($(e));ae["%Error.prototype%"]=Ac}var Cc=function e(t){var r;if(t==="%AsyncFunction%")r=rt("async function () {}");else if(t==="%GeneratorFunction%")r=rt("function* () {}");else if(t==="%AsyncGeneratorFunction%")r=rt("async function* () {}");else if(t==="%AsyncGenerator%"){var o=e("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if(t==="%AsyncIteratorPrototype%"){var s=e("%AsyncGenerator%");s&&$&&(r=$(s.prototype))}return ae[t]=r,r},mr={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},De=Et,ze=mc,jc=De.call(Function.call,Array.prototype.concat),$c=De.call(Function.apply,Array.prototype.splice),yr=De.call(Function.call,String.prototype.replace),Ue=De.call(Function.call,String.prototype.slice),kc=De.call(Function.call,RegExp.prototype.exec),Pc=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Ec=/\\(\\)?/g,Ic=function(t){var r=Ue(t,0,1),o=Ue(t,-1);if(r==="%"&&o!=="%")throw new he("invalid intrinsic syntax, expected closing `%`");if(o==="%"&&r!=="%")throw new he("invalid intrinsic syntax, expected opening `%`");var s=[];return yr(t,Pc,function(i,l,p,a){s[s.length]=p?yr(a,Ec,"$1"):l||i}),s},Mc=function(t,r){var o=t,s;if(ze(mr,o)&&(s=mr[o],o="%"+s[0]+"%"),ze(ae,o)){var i=ae[o];if(i===me&&(i=Cc(o)),typeof i>"u"&&!r)throw new ye("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:s,name:o,value:i}}throw new he("intrinsic "+t+" does not exist!")},be=function(t,r){if(typeof t!="string"||t.length===0)throw new ye("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new ye('"allowMissing" argument must be a boolean');if(kc(/^%?[^%]*%?$/,t)===null)throw new he("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var o=Ic(t),s=o.length>0?o[0]:"",i=Mc("%"+s+"%",r),l=i.name,p=i.value,a=!1,u=i.alias;u&&(s=u[0],$c(o,jc([0,1],u)));for(var d=1,m=!0;d<o.length;d+=1){var f=o[d],h=Ue(f,0,1),v=Ue(f,-1);if((h==='"'||h==="'"||h==="`"||v==='"'||v==="'"||v==="`")&&h!==v)throw new he("property names with quotes must have matching quotes");if((f==="constructor"||!m)&&(a=!0),s+="."+f,l="%"+s+"%",ze(ae,l))p=ae[l];else if(p!=null){if(!(f in p)){if(!r)throw new ye("base intrinsic for "+t+" exists, but the property is not available.");return}if(se&&d+1>=o.length){var S=se(p,f);m=!!S,m&&"get"in S&&!("originalValue"in S.get)?p=S.get:p=p[f]}else m=ze(p,f),p=p[f];m&&!a&&(ae[l]=p)}}return p},Sn={exports:{}},ot,hr;function It(){if(hr)return ot;hr=1;var e=be,t=e("%Object.defineProperty%",!0)||!1;if(t)try{t({},"a",{value:1})}catch{t=!1}return ot=t,ot}var Oc=be,We=Oc("%Object.getOwnPropertyDescriptor%",!0);if(We)try{We([],"length")}catch{We=null}var wn=We,gr=It(),Dc=vn,fe=Oe,xr=wn,Tc=function(t,r,o){if(!t||typeof t!="object"&&typeof t!="function")throw new fe("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new fe("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new fe("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new fe("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new fe("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new fe("`loose`, if provided, must be a boolean");var s=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,p=arguments.length>6?arguments[6]:!1,a=!!xr&&xr(t,r);if(gr)gr(t,r,{configurable:l===null&&a?a.configurable:!l,enumerable:s===null&&a?a.enumerable:!s,value:o,writable:i===null&&a?a.writable:!i});else if(p||!s&&!i&&!l)t[r]=o;else throw new Dc("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},yt=It(),An=function(){return!!yt};An.hasArrayLengthDefineBug=function(){if(!yt)return null;try{return yt([],"length",{value:1}).length!==1}catch{return!0}};var Fc=An,Bc=be,vr=Tc,Rc=Fc(),br=wn,Sr=Oe,Nc=Bc("%Math.floor%"),Wc=function(t,r){if(typeof t!="function")throw new Sr("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||Nc(r)!==r)throw new Sr("`length` must be a positive 32-bit integer");var o=arguments.length>2&&!!arguments[2],s=!0,i=!0;if("length"in t&&br){var l=br(t,"length");l&&!l.configurable&&(s=!1),l&&!l.writable&&(i=!1)}return(s||i||!o)&&(Rc?vr(t,"length",r,!0,!0):vr(t,"length",r)),t};(function(e){var t=Et,r=be,o=Wc,s=Oe,i=r("%Function.prototype.apply%"),l=r("%Function.prototype.call%"),p=r("%Reflect.apply%",!0)||t.call(l,i),a=It(),u=r("%Math.max%");e.exports=function(f){if(typeof f!="function")throw new s("a function is required");var h=p(t,l,arguments);return o(h,1+u(0,f.length-(arguments.length-1)),!0)};var d=function(){return p(t,i,arguments)};a?a(e.exports,"apply",{value:d}):e.exports.apply=d})(Sn);var Lc=Sn.exports,Cn=be,jn=Lc,_c=jn(Cn("String.prototype.indexOf")),Gc=function(t,r){var o=Cn(t,!!r);return typeof o=="function"&&_c(t,".prototype.")>-1?jn(o):o},Mt=typeof Map=="function"&&Map.prototype,it=Object.getOwnPropertyDescriptor&&Mt?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ve=Mt&&it&&typeof it.get=="function"?it.get:null,wr=Mt&&Map.prototype.forEach,Ot=typeof Set=="function"&&Set.prototype,st=Object.getOwnPropertyDescriptor&&Ot?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Qe=Ot&&st&&typeof st.get=="function"?st.get:null,Ar=Ot&&Set.prototype.forEach,zc=typeof WeakMap=="function"&&WeakMap.prototype,$e=zc?WeakMap.prototype.has:null,Uc=typeof WeakSet=="function"&&WeakSet.prototype,ke=Uc?WeakSet.prototype.has:null,Vc=typeof WeakRef=="function"&&WeakRef.prototype,Cr=Vc?WeakRef.prototype.deref:null,Qc=Boolean.prototype.valueOf,Kc=Object.prototype.toString,Hc=Function.prototype.toString,Yc=String.prototype.match,Dt=String.prototype.slice,ee=String.prototype.replace,qc=String.prototype.toUpperCase,jr=String.prototype.toLowerCase,$n=RegExp.prototype.test,$r=Array.prototype.concat,L=Array.prototype.join,Jc=Array.prototype.slice,kr=Math.floor,ht=typeof BigInt=="function"?BigInt.prototype.valueOf:null,at=Object.getOwnPropertySymbols,gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,ge=typeof Symbol=="function"&&typeof Symbol.iterator=="object",E=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===ge||!0)?Symbol.toStringTag:null,kn=Object.prototype.propertyIsEnumerable,Pr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Er(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||$n.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var o=e<0?-kr(-e):kr(e);if(o!==e){var s=String(o),i=Dt.call(t,s.length+1);return ee.call(s,r,"$&_")+"."+ee.call(ee.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ee.call(t,r,"$&_")}var xt=so,Ir=xt.custom,Mr=En(Ir)?Ir:null,Zc=function e(t,r,o,s){var i=r||{};if(X(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(X(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=X(i,"customInspect")?i.customInspect:!0;if(typeof l!="boolean"&&l!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(X(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(X(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var p=i.numericSeparator;if(typeof t>"u")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return Mn(t,i);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var a=String(t);return p?Er(t,a):a}if(typeof t=="bigint"){var u=String(t)+"n";return p?Er(t,u):u}var d=typeof i.depth>"u"?5:i.depth;if(typeof o>"u"&&(o=0),o>=d&&d>0&&typeof t=="object")return vt(t)?"[Array]":"[Object]";var m=hp(i,o);if(typeof s>"u")s=[];else if(In(s,t)>=0)return"[Circular]";function f(B,Y,q){if(Y&&(s=Jc.call(s),s.push(Y)),q){var we={depth:i.depth};return X(i,"quoteStyle")&&(we.quoteStyle=i.quoteStyle),e(B,we,o+1,s)}return e(B,i,o+1,s)}if(typeof t=="function"&&!Or(t)){var h=ap(t),v=Be(t,f);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(v.length>0?" { "+L.call(v,", ")+" }":"")}if(En(t)){var S=ge?ee.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):gt.call(t);return typeof t=="object"&&!ge?Ae(S):S}if(fp(t)){for(var A="<"+jr.call(String(t.nodeName)),T=t.attributes||[],F=0;F<T.length;F++)A+=" "+T[F].name+"="+Pn(Xc(T[F].value),"double",i);return A+=">",t.childNodes&&t.childNodes.length&&(A+="..."),A+="</"+jr.call(String(t.nodeName))+">",A}if(vt(t)){if(t.length===0)return"[]";var g=Be(t,f);return m&&!yp(g)?"["+bt(g,m)+"]":"[ "+L.call(g,", ")+" ]"}if(tp(t)){var R=Be(t,f);return!("cause"in Error.prototype)&&"cause"in t&&!kn.call(t,"cause")?"{ ["+String(t)+"] "+L.call($r.call("[cause]: "+f(t.cause),R),", ")+" }":R.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+L.call(R,", ")+" }"}if(typeof t=="object"&&l){if(Mr&&typeof t[Mr]=="function"&&xt)return xt(t,{depth:d-o});if(l!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(lp(t)){var I=[];return wr&&wr.call(t,function(B,Y){I.push(f(Y,t,!0)+" => "+f(B,t))}),Dr("Map",Ve.call(t),I,m)}if(up(t)){var K=[];return Ar&&Ar.call(t,function(B){K.push(f(B,t))}),Dr("Set",Qe.call(t),K,m)}if(cp(t))return lt("WeakMap");if(dp(t))return lt("WeakSet");if(pp(t))return lt("WeakRef");if(np(t))return Ae(f(Number(t)));if(ip(t))return Ae(f(ht.call(t)));if(op(t))return Ae(Qc.call(t));if(rp(t))return Ae(f(String(t)));if(typeof window<"u"&&t===window)return"{ [object Window] }";if(t===io)return"{ [object globalThis] }";if(!ep(t)&&!Or(t)){var pe=Be(t,f),Te=Pr?Pr(t)===Object.prototype:t instanceof Object||t.constructor===Object,ne=t instanceof Object?"":"null prototype",H=!Te&&E&&Object(t)===t&&E in t?Dt.call(re(t),8,-1):ne?"Object":"",Fe=Te||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",ue=Fe+(H||ne?"["+L.call($r.call([],H||[],ne||[]),": ")+"] ":"");return pe.length===0?ue+"{}":m?ue+"{"+bt(pe,m)+"}":ue+"{ "+L.call(pe,", ")+" }"}return String(t)};function Pn(e,t,r){var o=(r.quoteStyle||t)==="double"?'"':"'";return o+e+o}function Xc(e){return ee.call(String(e),/"/g,"&quot;")}function vt(e){return re(e)==="[object Array]"&&(!E||!(typeof e=="object"&&E in e))}function ep(e){return re(e)==="[object Date]"&&(!E||!(typeof e=="object"&&E in e))}function Or(e){return re(e)==="[object RegExp]"&&(!E||!(typeof e=="object"&&E in e))}function tp(e){return re(e)==="[object Error]"&&(!E||!(typeof e=="object"&&E in e))}function rp(e){return re(e)==="[object String]"&&(!E||!(typeof e=="object"&&E in e))}function np(e){return re(e)==="[object Number]"&&(!E||!(typeof e=="object"&&E in e))}function op(e){return re(e)==="[object Boolean]"&&(!E||!(typeof e=="object"&&E in e))}function En(e){if(ge)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!gt)return!1;try{return gt.call(e),!0}catch{}return!1}function ip(e){if(!e||typeof e!="object"||!ht)return!1;try{return ht.call(e),!0}catch{}return!1}var sp=Object.prototype.hasOwnProperty||function(e){return e in this};function X(e,t){return sp.call(e,t)}function re(e){return Kc.call(e)}function ap(e){if(e.name)return e.name;var t=Yc.call(Hc.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function In(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1}function lp(e){if(!Ve||!e||typeof e!="object")return!1;try{Ve.call(e);try{Qe.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function cp(e){if(!$e||!e||typeof e!="object")return!1;try{$e.call(e,$e);try{ke.call(e,ke)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function pp(e){if(!Cr||!e||typeof e!="object")return!1;try{return Cr.call(e),!0}catch{}return!1}function up(e){if(!Qe||!e||typeof e!="object")return!1;try{Qe.call(e);try{Ve.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function dp(e){if(!ke||!e||typeof e!="object")return!1;try{ke.call(e,ke);try{$e.call(e,$e)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function fp(e){return!e||typeof e!="object"?!1:typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function Mn(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return Mn(Dt.call(e,0,t.maxStringLength),t)+o}var s=ee.call(ee.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,mp);return Pn(s,"single",t)}function mp(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+qc.call(t.toString(16))}function Ae(e){return"Object("+e+")"}function lt(e){return e+" { ? }"}function Dr(e,t,r,o){var s=o?bt(r,o):L.call(r,", ");return e+" ("+t+") {"+s+"}"}function yp(e){for(var t=0;t<e.length;t++)if(In(e[t],`
`)>=0)return!1;return!0}function hp(e,t){var r;if(e.indent==="	")r="	";else if(typeof e.indent=="number"&&e.indent>0)r=L.call(Array(e.indent+1)," ");else return null;return{base:r,prev:L.call(Array(t+1),r)}}function bt(e,t){if(e.length===0)return"";var r=`
`+t.prev+t.base;return r+L.call(e,","+r)+`
`+t.prev}function Be(e,t){var r=vt(e),o=[];if(r){o.length=e.length;for(var s=0;s<e.length;s++)o[s]=X(e,s)?t(e[s],e):""}var i=typeof at=="function"?at(e):[],l;if(ge){l={};for(var p=0;p<i.length;p++)l["$"+i[p]]=i[p]}for(var a in e)X(e,a)&&(r&&String(Number(a))===a&&a<e.length||ge&&l["$"+a]instanceof Symbol||($n.call(/[^\w$]/,a)?o.push(t(a,e)+": "+t(e[a],e)):o.push(a+": "+t(e[a],e))));if(typeof at=="function")for(var u=0;u<i.length;u++)kn.call(e,i[u])&&o.push("["+t(i[u])+"]: "+t(e[i[u]],e));return o}var On=be,Se=Gc,gp=Zc,xp=Oe,Re=On("%WeakMap%",!0),Ne=On("%Map%",!0),vp=Se("WeakMap.prototype.get",!0),bp=Se("WeakMap.prototype.set",!0),Sp=Se("WeakMap.prototype.has",!0),wp=Se("Map.prototype.get",!0),Ap=Se("Map.prototype.set",!0),Cp=Se("Map.prototype.has",!0),Tt=function(e,t){for(var r=e,o;(o=r.next)!==null;r=o)if(o.key===t)return r.next=o.next,o.next=e.next,e.next=o,o},jp=function(e,t){var r=Tt(e,t);return r&&r.value},$p=function(e,t,r){var o=Tt(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}},kp=function(e,t){return!!Tt(e,t)},Pp=function(){var t,r,o,s={assert:function(i){if(!s.has(i))throw new xp("Side channel does not contain "+gp(i))},get:function(i){if(Re&&i&&(typeof i=="object"||typeof i=="function")){if(t)return vp(t,i)}else if(Ne){if(r)return wp(r,i)}else if(o)return jp(o,i)},has:function(i){if(Re&&i&&(typeof i=="object"||typeof i=="function")){if(t)return Sp(t,i)}else if(Ne){if(r)return Cp(r,i)}else if(o)return kp(o,i);return!1},set:function(i,l){Re&&i&&(typeof i=="object"||typeof i=="function")?(t||(t=new Re),bp(t,i,l)):Ne?(r||(r=new Ne),Ap(r,i,l)):(o||(o={key:{},next:null}),$p(o,i,l))}};return s},Ep=String.prototype.replace,Ip=/%20/g,ct={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ft={default:ct.RFC3986,formatters:{RFC1738:function(e){return Ep.call(e,Ip,"+")},RFC3986:function(e){return String(e)}},RFC1738:ct.RFC1738,RFC3986:ct.RFC3986},Mp=Ft,pt=Object.prototype.hasOwnProperty,ie=Array.isArray,N=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Op=function(t){for(;t.length>1;){var r=t.pop(),o=r.obj[r.prop];if(ie(o)){for(var s=[],i=0;i<o.length;++i)typeof o[i]<"u"&&s.push(o[i]);r.obj[r.prop]=s}}},Dn=function(t,r){for(var o=r&&r.plainObjects?Object.create(null):{},s=0;s<t.length;++s)typeof t[s]<"u"&&(o[s]=t[s]);return o},Dp=function e(t,r,o){if(!r)return t;if(typeof r!="object"){if(ie(t))t.push(r);else if(t&&typeof t=="object")(o&&(o.plainObjects||o.allowPrototypes)||!pt.call(Object.prototype,r))&&(t[r]=!0);else return[t,r];return t}if(!t||typeof t!="object")return[t].concat(r);var s=t;return ie(t)&&!ie(r)&&(s=Dn(t,o)),ie(t)&&ie(r)?(r.forEach(function(i,l){if(pt.call(t,l)){var p=t[l];p&&typeof p=="object"&&i&&typeof i=="object"?t[l]=e(p,i,o):t.push(i)}else t[l]=i}),t):Object.keys(r).reduce(function(i,l){var p=r[l];return pt.call(i,l)?i[l]=e(i[l],p,o):i[l]=p,i},s)},Tp=function(t,r){return Object.keys(r).reduce(function(o,s){return o[s]=r[s],o},t)},Fp=function(e,t,r){var o=e.replace(/\+/g," ");if(r==="iso-8859-1")return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch{return o}},Bp=function(t,r,o,s,i){if(t.length===0)return t;var l=t;if(typeof t=="symbol"?l=Symbol.prototype.toString.call(t):typeof t!="string"&&(l=String(t)),o==="iso-8859-1")return escape(l).replace(/%u[0-9a-f]{4}/gi,function(d){return"%26%23"+parseInt(d.slice(2),16)+"%3B"});for(var p="",a=0;a<l.length;++a){var u=l.charCodeAt(a);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||i===Mp.RFC1738&&(u===40||u===41)){p+=l.charAt(a);continue}if(u<128){p=p+N[u];continue}if(u<2048){p=p+(N[192|u>>6]+N[128|u&63]);continue}if(u<55296||u>=57344){p=p+(N[224|u>>12]+N[128|u>>6&63]+N[128|u&63]);continue}a+=1,u=65536+((u&1023)<<10|l.charCodeAt(a)&1023),p+=N[240|u>>18]+N[128|u>>12&63]+N[128|u>>6&63]+N[128|u&63]}return p},Rp=function(t){for(var r=[{obj:{o:t},prop:"o"}],o=[],s=0;s<r.length;++s)for(var i=r[s],l=i.obj[i.prop],p=Object.keys(l),a=0;a<p.length;++a){var u=p[a],d=l[u];typeof d=="object"&&d!==null&&o.indexOf(d)===-1&&(r.push({obj:l,prop:u}),o.push(d))}return Op(r),t},Np=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},Wp=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},Lp=function(t,r){return[].concat(t,r)},_p=function(t,r){if(ie(t)){for(var o=[],s=0;s<t.length;s+=1)o.push(r(t[s]));return o}return r(t)},Tn={arrayToObject:Dn,assign:Tp,combine:Lp,compact:Rp,decode:Fp,encode:Bp,isBuffer:Wp,isRegExp:Np,maybeMap:_p,merge:Dp},Fn=Pp,Le=Tn,Pe=Ft,Gp=Object.prototype.hasOwnProperty,Bn={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},W=Array.isArray,zp=Array.prototype.push,Rn=function(e,t){zp.apply(e,W(t)?t:[t])},Up=Date.prototype.toISOString,Tr=Pe.default,j={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:Le.encode,encodeValuesOnly:!1,format:Tr,formatter:Pe.formatters[Tr],indices:!1,serializeDate:function(t){return Up.call(t)},skipNulls:!1,strictNullHandling:!1},Vp=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},ut={},Qp=function e(t,r,o,s,i,l,p,a,u,d,m,f,h,v,S,A,T,F){for(var g=t,R=F,I=0,K=!1;(R=R.get(ut))!==void 0&&!K;){var pe=R.get(t);if(I+=1,typeof pe<"u"){if(pe===I)throw new RangeError("Cyclic object value");K=!0}typeof R.get(ut)>"u"&&(I=0)}if(typeof d=="function"?g=d(r,g):g instanceof Date?g=h(g):o==="comma"&&W(g)&&(g=Le.maybeMap(g,function(Ze){return Ze instanceof Date?h(Ze):Ze})),g===null){if(l)return u&&!A?u(r,j.encoder,T,"key",v):r;g=""}if(Vp(g)||Le.isBuffer(g)){if(u){var Te=A?r:u(r,j.encoder,T,"key",v);return[S(Te)+"="+S(u(g,j.encoder,T,"value",v))]}return[S(r)+"="+S(String(g))]}var ne=[];if(typeof g>"u")return ne;var H;if(o==="comma"&&W(g))A&&u&&(g=Le.maybeMap(g,u)),H=[{value:g.length>0?g.join(",")||null:void 0}];else if(W(d))H=d;else{var Fe=Object.keys(g);H=m?Fe.sort(m):Fe}var ue=a?r.replace(/\./g,"%2E"):r,B=s&&W(g)&&g.length===1?ue+"[]":ue;if(i&&W(g)&&g.length===0)return B+"[]";for(var Y=0;Y<H.length;++Y){var q=H[Y],we=typeof q=="object"&&typeof q.value<"u"?q.value:g[q];if(!(p&&we===null)){var Je=f&&a?q.replace(/\./g,"%2E"):q,Wn=W(g)?typeof o=="function"?o(B,Je):B:B+(f?"."+Je:"["+Je+"]");F.set(t,I);var Bt=Fn();Bt.set(ut,F),Rn(ne,e(we,Wn,o,s,i,l,p,a,o==="comma"&&A&&W(g)?null:u,d,m,f,h,v,S,A,T,Bt))}}return ne},Kp=function(t){if(!t)return j;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.encodeDotInKeys<"u"&&typeof t.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(t.encoder!==null&&typeof t.encoder<"u"&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=t.charset||j.charset;if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=Pe.default;if(typeof t.format<"u"){if(!Gp.call(Pe.formatters,t.format))throw new TypeError("Unknown format option provided.");o=t.format}var s=Pe.formatters[o],i=j.filter;(typeof t.filter=="function"||W(t.filter))&&(i=t.filter);var l;if(t.arrayFormat in Bn?l=t.arrayFormat:"indices"in t?l=t.indices?"indices":"repeat":l=j.arrayFormat,"commaRoundTrip"in t&&typeof t.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var p=typeof t.allowDots>"u"?t.encodeDotInKeys===!0?!0:j.allowDots:!!t.allowDots;return{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:j.addQueryPrefix,allowDots:p,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:j.allowEmptyArrays,arrayFormat:l,charset:r,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:j.charsetSentinel,commaRoundTrip:t.commaRoundTrip,delimiter:typeof t.delimiter>"u"?j.delimiter:t.delimiter,encode:typeof t.encode=="boolean"?t.encode:j.encode,encodeDotInKeys:typeof t.encodeDotInKeys=="boolean"?t.encodeDotInKeys:j.encodeDotInKeys,encoder:typeof t.encoder=="function"?t.encoder:j.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:j.encodeValuesOnly,filter:i,format:o,formatter:s,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:j.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:j.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:j.strictNullHandling}},Hp=function(e,t){var r=e,o=Kp(t),s,i;typeof o.filter=="function"?(i=o.filter,r=i("",r)):W(o.filter)&&(i=o.filter,s=i);var l=[];if(typeof r!="object"||r===null)return"";var p=Bn[o.arrayFormat],a=p==="comma"&&o.commaRoundTrip;s||(s=Object.keys(r)),o.sort&&s.sort(o.sort);for(var u=Fn(),d=0;d<s.length;++d){var m=s[d];o.skipNulls&&r[m]===null||Rn(l,Qp(r[m],m,p,a,o.allowEmptyArrays,o.strictNullHandling,o.skipNulls,o.encodeDotInKeys,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,u))}var f=l.join(o.delimiter),h=o.addQueryPrefix===!0?"?":"";return o.charsetSentinel&&(o.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),f.length>0?h+f:""},xe=Tn,St=Object.prototype.hasOwnProperty,Yp=Array.isArray,w={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!0,decoder:xe.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},qp=function(e){return e.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},Nn=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},Jp="utf8=%26%2310003%3B",Zp="utf8=%E2%9C%93",Xp=function(t,r){var o={__proto__:null},s=r.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=r.parameterLimit===1/0?void 0:r.parameterLimit,l=s.split(r.delimiter,i),p=-1,a,u=r.charset;if(r.charsetSentinel)for(a=0;a<l.length;++a)l[a].indexOf("utf8=")===0&&(l[a]===Zp?u="utf-8":l[a]===Jp&&(u="iso-8859-1"),p=a,a=l.length);for(a=0;a<l.length;++a)if(a!==p){var d=l[a],m=d.indexOf("]="),f=m===-1?d.indexOf("="):m+1,h,v;f===-1?(h=r.decoder(d,w.decoder,u,"key"),v=r.strictNullHandling?null:""):(h=r.decoder(d.slice(0,f),w.decoder,u,"key"),v=xe.maybeMap(Nn(d.slice(f+1),r),function(A){return r.decoder(A,w.decoder,u,"value")})),v&&r.interpretNumericEntities&&u==="iso-8859-1"&&(v=qp(v)),d.indexOf("[]=")>-1&&(v=Yp(v)?[v]:v);var S=St.call(o,h);S&&r.duplicates==="combine"?o[h]=xe.combine(o[h],v):(!S||r.duplicates==="last")&&(o[h]=v)}return o},eu=function(e,t,r,o){for(var s=o?t:Nn(t,r),i=e.length-1;i>=0;--i){var l,p=e[i];if(p==="[]"&&r.parseArrays)l=r.allowEmptyArrays&&s===""?[]:[].concat(s);else{l=r.plainObjects?Object.create(null):{};var a=p.charAt(0)==="["&&p.charAt(p.length-1)==="]"?p.slice(1,-1):p,u=r.decodeDotInKeys?a.replace(/%2E/g,"."):a,d=parseInt(u,10);!r.parseArrays&&u===""?l={0:s}:!isNaN(d)&&p!==u&&String(d)===u&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(l=[],l[d]=s):u!=="__proto__"&&(l[u]=s)}s=l}return s},tu=function(t,r,o,s){if(t){var i=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,l=/(\[[^[\]]*])/,p=/(\[[^[\]]*])/g,a=o.depth>0&&l.exec(i),u=a?i.slice(0,a.index):i,d=[];if(u){if(!o.plainObjects&&St.call(Object.prototype,u)&&!o.allowPrototypes)return;d.push(u)}for(var m=0;o.depth>0&&(a=p.exec(i))!==null&&m<o.depth;){if(m+=1,!o.plainObjects&&St.call(Object.prototype,a[1].slice(1,-1))&&!o.allowPrototypes)return;d.push(a[1])}return a&&d.push("["+i.slice(a.index)+"]"),eu(d,r,o,s)}},ru=function(t){if(!t)return w;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.decodeDotInKeys<"u"&&typeof t.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(t.decoder!==null&&typeof t.decoder<"u"&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof t.charset>"u"?w.charset:t.charset,o=typeof t.duplicates>"u"?w.duplicates:t.duplicates;if(o!=="combine"&&o!=="first"&&o!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var s=typeof t.allowDots>"u"?t.decodeDotInKeys===!0?!0:w.allowDots:!!t.allowDots;return{allowDots:s,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:w.allowEmptyArrays,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:w.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:w.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:w.arrayLimit,charset:r,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:w.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:w.comma,decodeDotInKeys:typeof t.decodeDotInKeys=="boolean"?t.decodeDotInKeys:w.decodeDotInKeys,decoder:typeof t.decoder=="function"?t.decoder:w.decoder,delimiter:typeof t.delimiter=="string"||xe.isRegExp(t.delimiter)?t.delimiter:w.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:w.depth,duplicates:o,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:w.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:w.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:w.plainObjects,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:w.strictNullHandling}},nu=function(e,t){var r=ru(t);if(e===""||e===null||typeof e>"u")return r.plainObjects?Object.create(null):{};for(var o=typeof e=="string"?Xp(e,r):e,s=r.plainObjects?Object.create(null):{},i=Object.keys(o),l=0;l<i.length;++l){var p=i[l],a=tu(p,o[p],r,typeof e=="string");s=xe.merge(s,a,r)}return r.allowSparse===!0?s:xe.compact(s)},ou=Hp,iu=nu,su=Ft,Nu={formats:su,parse:iu,stringify:ou};export{Mu as C,ui as E,Tu as K,Fu as L,Bu as M,Iu as S,Pu as T,Ru as a,Eu as b,Du as c,Ou as d,Ge as e,Nu as l};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/html2pdf.es-f4sjvCzR.js","static/index-VVIvRZBh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-WzyuyKv8.js.map
