import{dx as b,r as y,j as n,u as c,Q as te,$ as Ke,aW as C,aC as Ie,A as ve,a2 as ft,cs as _n,a as k,I as le,N as V,ap as Xe,ch as Nt,cS as Gn,cm as At,x as z,aN as Ct,a1 as zn,Y as jt,g as Un,dp as Vn,by as Qn,Z as Br,ar as Kn,bW as Hn,U as Yn,E as Ee,O as He,y as Ye,ai as qn,df as Jn,b3 as Zn,b4 as Xn,M as eo,aR as to,ag as ro,C as no,bx as Rr,bO as oo,cR as io,bJ as so,fN as ao}from"./index-tEWTe_cM.js";import{T as Q,s as lo,g as $t,i as Nr}from"./TitleWithTooltip-wulykel9.js";import{t as Wr,P as Lr,E as Ce,h as co}from"./Learn-ZI4QJ8Ms.js";import{c as U}from"./zustandPrimitive-JpIny_aS.js";import{T as Me,u as kt,c as po}from"./getUpsellData-siUtjfVt.js";import{f as M}from"./useAutoPlay-8WOcIzK4.js";import{e as uo,f as fo,K as mo,h as yo,j as ho,c as go,L as _r,k as xo}from"./SearchGraphModal-8Lh4F5Sv.js";import{C as Wt}from"./ChoiceBadge-QiiTIx6Y.js";import{L as vo}from"./LockedTitle-zD5OrXLs.js";import{A as bo}from"./AddToMyListDropdown-lgmjWp6o.js";import{O as So,b as Gr,C as wo,P as Ao,M as Co,R as jo,L as $o,S as ko,a as Po}from"./StorageFeeCell-r2gKXA5Z.js";import{A as zr}from"./AboveTable-n7zPUc2F.js";import{g as Eo}from"./groupBy-7ZtSo7lr.js";import{b as Io,u as Ur}from"./dateRanges-ZXIy3dZA.js";import{P as Mo}from"./OptimalData-cuY_CBe9.js";import{E as Pt}from"./ExtendedProductSummary-Rm3yeme_.js";import{P as Oo}from"./WidthLimitedTagsValue-Gph_9FLc.js";import{A as Do}from"./react-alice-carousel-QMWN8gi9.js";import{u as To}from"./hooks-dSElEgEV.js";import{u as Fo}from"./getListingAnalyzerKeywordsSection-CrrIvoLZ.js";import{Q as Bo}from"./NewRadio-DIL_Ez7J.js";function Vr(e){return Object.keys(e).map(t=>({key:t,value:e[t]}))}const Ro=({text:e,value:t,percents:r,color:o,isHighlighted:s,details:i})=>{const{t:l}=b(),p=o||s?"#1295ED":"#D9E0E8",[a,d]=y.useState(0);return y.useEffect(()=>{d(r)},[r]),n.jsxs(No,{children:[n.jsx(_o,{children:e?l(e):void 0}),n.jsxs(Wo,{children:[n.jsx("div",{id:"bar-container",children:n.jsx(Lo,{percents:a,barColor:p})}),i?n.jsx(Me,{content:i&&Object.keys(i).length>0?n.jsx(n.Fragment,{children:Vr(i).map(({key:f,value:m})=>n.jsxs("div",{children:[f," - ",typeof m=="number"?M({value:m}):m]},f))}):void 0,children:n.jsx(Lt,{children:t})}):n.jsx(Lt,{children:t})]})]})},No=c.div`
  display: flex;
  //flex-direction: row;
  align-items: center;
`,Wo=c.div`
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
`,Lo=c.div`
  margin-right: 8px;
  width: ${({percents:e})=>e}%;
  height: 16px;
  background-color: ${({barColor:e})=>e};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 1s width;
`,_o=c.div`
  ${te};
  min-width: 156px;
  margin-right: 16px;
  text-align: right;
  flex: 1;
`,Lt=c.div`
  ${Ke};
  color: ${e=>e.theme.systemColors.black};
`,Go=({title:e,tooltip:t,charts:r})=>{const{t:o}=b();return n.jsxs(Qr,{children:[n.jsx(Kr,{children:n.jsx(Q,{title:o(e),tooltip:t?o(t):void 0,size:"200"})}),r.map((s,i)=>n.jsx(Ro,{...s},i))]})},Qr=c.div`
  padding: 32px;
  @media (max-width: 420px) {
    padding: 10px;
  }
  background-color: white;
`,Kr=c.div`
  padding: 0 6px;
  margin-bottom: 16px;
`,zo=({title:e,titleTooltip:t,metrics:r})=>{const{t:o}=b();return n.jsxs(Hr,{children:[n.jsx(qr,{children:n.jsx(Q,{title:e,tooltip:t,size:"400"})}),r==null&&n.jsx("p",{children:o("competitorAnalysis.metrics.noData")}),r!=null&&n.jsx(Yr,{children:r.map((s,i)=>n.jsx(Go,{...s},i))})]})},Hr=c.div`
  width: 100%;
  color: ${e=>e.theme.systemColors.grey200};
`,Yr=c.div`
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
`,qr=c.div`
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,Uo=()=>n.jsxs(Hr,{children:[n.jsx(qr,{children:n.jsx(Vo,{})}),n.jsx(Yr,{children:[...new Array(6)].map((e,t)=>n.jsxs(Qr,{children:[n.jsx(Kr,{children:n.jsx(Qo,{})}),n.jsx(Ko,{})]},t))})]}),Vo=c(C)`
  width: 100%;
  max-width: 440px;
  height: 32px;
`,Qo=c(C)`
  width: 45%;
`,Ko=c(C)`
  height: 32px;
  width: 100%;
`,Ho={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null,selectedProduct:null},_e=ve((e,t)=>({...U(e,t,"props",Ho)})),Yo=()=>{y.useEffect(()=>()=>{_e.getState().props.clear()},[])},qo=e=>{y.useEffect(()=>{_e.getState().props.set(e)},[e])};function Jr(e,t){for(const r in e){if(t!=null&&t.includes(r))continue;const o=e[r];if(o&&typeof o!="object")return!1;if(!Jr(o,t))return!1}return!0}const _t={monthlySales:{title:"Sales",tooltip:"Estimated monthly sales"},monthlyRevenue:{title:"Revenue",isPrice:!0,tooltip:"Estimated monthly revenue"},price:{title:"Price",isPrice:!0},salesRank:{title:"BSR",tooltip:"Amazon's best seller rank"},reviewCount:{title:"Number of Reviews"},reviewsRating:{title:"Rating"}},Jo=({isPrice:e,currency:t})=>r=>e&&r&&r>0?ft({amount:t!=="JPY"?r/100:r,currency:t}):r&&r>0?M({value:r}):"N/A",Zo=e=>{var p;const t=e.props.value.data,r=e.props.value.marketplace.currency;if(t==null||Jr(t,["asin"]))return null;const s=(p=e.props.value.selectedProduct)==null?void 0:p.asin,i=s?t.singleResponses[s]:null;return Object.keys(_t).map(a=>{var h,v,S,A,T,F;const d=_t[a],f=Jo({isPrice:!!d.isPrice,currency:r}),m=Math.max(((h=i==null?void 0:i.seedSalesData)==null?void 0:h[a])||0,((v=i==null?void 0:i.avgCompetitorsSalesData)==null?void 0:v[a])||0,((S=t==null?void 0:t.avgSeedSalesData)==null?void 0:S[a])||0)||1,u=Object.entries(t.singleResponses).reduce((g,[R,I])=>{var K;return I&&(g||(g={}),g[R]=f(((K=I==null?void 0:I.seedSalesData)==null?void 0:K[a])||void 0)),g},void 0);return{title:`competitorAnalysis.metrics.${a}.title`,tooltip:`competitorAnalysis.metrics.${a}.tooltip`,charts:[...i&&s?[{text:s,value:f(((A=i==null?void 0:i.seedSalesData)==null?void 0:A[a])||void 0),percents:(((T=i==null?void 0:i.seedSalesData)==null?void 0:T[a])||0)>0?100*(((F=i==null?void 0:i.seedSalesData)==null?void 0:F[a])||0)/m:0,isHighlighted:!0},{text:"competitorAnalysis.metrics.text.marketNew",value:f(i.avgCompetitorsSalesData[a]||void 0),percents:(i.avgCompetitorsSalesData[a]||0)>0?100*(i.avgCompetitorsSalesData[a]||0)/m:0}]:[],...t.avgSeedSalesData?[{text:"competitorAnalysis.metrics.text.groupNew",value:f(t.avgSeedSalesData[a]||void 0),percents:(t.avgSeedSalesData[a]||0)>0?100*(t.avgSeedSalesData[a]||0)/m:0,details:u}]:[]]}})},Xo=e=>{Yo(),qo(e);const{t}=b(),[r,o]=_e(i=>{var l,p;return[i.props.value.status,(p=(l=i.props.value)==null?void 0:l.selectedProduct)==null?void 0:p.asin]}),s=_e(Zo);return r==="loaded"?n.jsx(zo,{title:t("competitorAnalysis.title"),subtitle:o?void 0:t("competitorAnalysis.subtitle"),titleTooltip:t("competitorAnalysis.titleTooltip"),metrics:s}):n.jsx(Uo,{})},ei={marketplace:Ie("domain","amazon.com"),isSingleSearch:!0,status:"loading",data:[],products:[],metrics:[],onClickBlurredMonthlySales:()=>{},enabledWalmartSearchVolumeChart:!1,enabledGoogleSearchVolumeChart:!1,monthlySalesLocked:!0,addToMyListLocked:!0,planGroup:"free",openUpgradeModalForBanner:()=>{},openUpgradeModalForSearchGraph:()=>{},onClickExternalLink:()=>{},notification:Wr,seeFullListInCerebro:()=>{}},P=ve((e,t)=>({...U(e,t,"props",ei),...U(e,t,"selected",[])})),_=({value:e,notNumberResult:t="N/A",...r})=>{if(e==null)return t;const o=Number(e);return isNaN(o)?t:M({value:o,...r})},ti=y.memo(({isSingleSearch:e,...t})=>{const{t:r}=b(),o=e?"metricsSingle":"metricsMulti";return n.jsxs(ri,{children:[n.jsx(Q,{title:r(`keywordAnalysis.metricsData.${o}.${t.id}.title`),tooltip:r(`keywordAnalysis.metricsData.${o}.${t.id}.tooltip`),size:"300"}),t.hover&&Object.keys(t.hover).length>0?n.jsx(Me,{content:t.hover&&Object.keys(t.hover).length>0?n.jsx(n.Fragment,{children:Vr(t.hover).map(({key:s,value:i})=>n.jsxs("div",{children:[s," - ",typeof i=="number"?M({value:i}):i]},s))}):void 0,children:n.jsx(Gt,{children:_({value:Math.round(t.value||0)})})}):n.jsx(Gt,{children:_({value:Math.round(t.value||0)})})]})}),ri=c.div`
  padding: 0 40px;
  background-color: ${e=>e.theme.systemColors.white};
`,Gt=c.div`
  ${_n};
  color: ${e=>e.theme.systemColors.black};
  margin-top: ${e=>e.theme.spacing.sp4};
`,ni=()=>{const{t:e}=b(),[t,r,o]=P(s=>[s.props.value.isSingleSearch,s.props.value.status,s.props.value.metrics]);return r==="loaded"?n.jsx(Kt,{children:o.length===0?n.jsx("div",{children:e("keywordAnalysis.metricsData.noKeyword")}):n.jsxs(n.Fragment,{children:[n.jsx(zt,{children:n.jsx(Q,{title:e("keywordAnalysis.metricsData.tooltip"),tooltip:e(t?"keywordAnalysis.metricsData.searchTrue":"keywordAnalysis.metricsData.searchFalse"),size:"400"})}),n.jsx(Ut,{children:n.jsx(Vt,{children:o.map(s=>n.jsx(ti,{...s,isSingleSearch:t},s.id))})})]})}):n.jsxs(Kt,{children:[n.jsx(zt,{children:n.jsx(si,{})}),n.jsx(Ut,{children:n.jsx(Vt,{children:[...new Array(4)].map((s,i)=>n.jsx(ci,{},i))})})]})},oi=k`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,zt=c.div`
  ${oi};
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,ii=c.div`
  padding-top: 16px;
  padding-bottom: 8px;
  min-width: 266px;
  background-color: ${e=>e.theme.systemColors.white};
`,Ut=c.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,Vt=c.div`
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
`,Qt={sm:576,md:750,lg:1280,xl:1300},Kt=c.div`
  background-color: #ffffff;
  @media (max-width: ${Qt.md}px) {
    padding: 24px 16px;
  }
  @media (min-width: ${Qt.md+1}px) {
    padding: 24px 24px 16px;
    border-left: solid 1px #d9e0e8;
    border-right: solid 1px #d9e0e8;
    border-top: solid 1px #d9e0e8;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`,si=c(C)`
  min-width: 254px;
  height: 26px;
`,ai=c(C)`
  height: 24px;
  max-width: 180px;
  width: 100%;
`,li=c(C)`
  height: 40px;
  margin-top: 4px;
  width: 100%;
  max-width: 120px;
`,ci=()=>n.jsxs(ii,{children:[n.jsx(ai,{}),n.jsx(li,{})]}),pi=()=>{const[e,t]=P(r=>[r.props.value.status,r.props.value.planGroup]);return y.useMemo(()=>({itemsPerPage:e!=="loading"?[1e3]:[10],noFooter:!0,searchVisible:!0,columnVisible:!0,extraSettings:()=>t!=="free"&&t!=="starter"&&n.jsx(uo,{showTop10RankedProductsForKeyword:!0})}),[t,e])},Z=k`
  justify-content: flex-end;
  color: ${e=>e.theme.systemColors.grey600};
`,ui=k`
  filter: blur(5px);
`,di=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,Eu=c.div`
  white-space: nowrap;

  & + & {
    margin-top: ${({theme:e})=>e.spacing.sp8};
  }
`,Iu=c.span`
  ${Ke};
  margin-right: ${({theme:e})=>e.spacing.sp4};
  color: ${({theme:e})=>e.systemColors.black};
`,Mu=c(di)`
  color: ${({theme:e})=>e.systemColors.black};
  text-transform: capitalize;
`,Ge=0,Ou=c(V)`
  max-width: ${({$level:e=Ge})=>`calc(100% - ${e*32}px)`};
  margin-left: ${({$level:e=Ge})=>`${e*32}px`};
  justify-content: flex-start;
  padding: 0;
  border-width: 0;
  min-height: ${({theme:e})=>e.spacing.sp24};
  gap: ${({theme:e})=>e.spacing.sp8};
`,Du=c.div`
  max-width: ${({level:e=Ge})=>`calc(100% - ${e*32}px)`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp6};
  margin-left: ${({level:e=Ge})=>`${e*32}px`};
  overflow: hidden;
  width: 100%;
`,Ht={phrase:"#6784A2",auto:"#0253B6",broad:"#0C7E7D",exact:"#0B4745",category:"#6A2AC0",asin:"#0253B6",negativeExact:"#A70045",negativePhrase:"#A70045",negativeAsin:"#A70045",negativeBroad:"#A70045",manual:"#A70045"},Tu=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing.sp24};
  min-width: ${({theme:e})=>e.spacing.sp24};
  height: ${({theme:e})=>e.spacing.sp24};
  border-radius: 50%;
  background-color: ${({$matchType:e,$isCategory:t})=>t?Ht.category:Ht[e]};
  color: ${({theme:e})=>e.systemColors.white};
  font-size: 12px;
`,fi=()=>{const e=Xe(Nt)!=null,t=Xe(Nt)||"free",r=Xe(i=>{var l;return(l=i.checkLogin)==null?void 0:l.hasEliteAccess});return{planGroup:t,notFreeAndStarter:t!=="free"&&t!=="starter",isElite:r||t==="elite"||t==="enterprise",hasPlanGroup:e}},mi=({phrase:e,amazonChoice:t,marketplaceFull:r,phraseId:o,tool:s,planGroup:i})=>{const l=fi(),[p,a]=fo(Gn(d=>[d.top10RankedProductsForKeyword,d.asinDetails]));return n.jsxs(yi,{children:[n.jsx(mo,{keyword:e,phraseId:o,marketplace:(r==null?void 0:r.store)||"",tool:s,disableExtendedTooltip:!p,disableExtendedProductSummary:!a,onChangeProductDetailsType:d=>yo.set(d),simpleTooltip:(i||l.planGroup)==="free"||(i||l.planGroup)==="starter"}),n.jsx(hi,{href:r?lo(r.domain,e):"",target:"_blank",rel:"noreferrer",children:n.jsx(V,{size:"50",buttonType:"icon",icon:n.jsx(gi,{icon:At})})}),t==="analyzed"&&n.jsx(Wt.Dark,{tooltipContent:void 0}),t==="other"&&n.jsx(Wt.Light,{tooltipContent:void 0})]})},yi=c.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,hi=c.a`
  text-decoration: none;

  svg {
    color: ${e=>e.theme.systemColors.grey600};
  }
`,gi=c(z)`
  font-size: 16px;
`,je=({value:e,percent:t,percentile:r,showPercent:o=!1,blurred:s=!1,revert:i=!1})=>{const{t:l}=b(),p=Math.round(t||0),a=i?xi(r):r;return n.jsxs(bi,{blurred:s,children:[s&&l("getPlan"),!s&&(e!=null&&!isNaN(e)?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[s?l("getPlan"):M({value:e}),!s&&o?` (${Math.round(p)}%)`:""]}),n.jsx(So,{percentile:s?Math.floor(Math.random()*4)+1:a})]}):"-")]})},Yt=[1,2,3,4],xi=e=>{const t=Yt.indexOf(e);return Yt.reverse()[t]},vi=c.div`
  ${({blurred:e})=>e&&k`
      ${ui}
    `}
`,bi=c(vi)`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${e=>e.theme.spacing.sp4};
  }
`,Si=({value:e,phrase:t,phraseId:r,marketplace:o,displayValue:s,enabledGoogleSearchVolumeChart:i,enabledWalmartSearchVolumeChart:l})=>{const p=e!==-1?e:null,a=p?M({value:p,maximumFractionDigits:0}):"-",[d,f]=P(h=>[h.props.value.planGroup,h.props.value.openUpgradeModalForSearchGraph]),m=y.useCallback(h=>{wi.includes(d)?f==null||f():h()},[f,d]),u={platform:"AMAZON",disabledPlatforms:{GOOGLE:!i,WALMART:!l||(o==null?void 0:o.domain)!=="amazon.com"}};return n.jsxs(Ci,{children:[n.jsx(Ai,{children:s??a}),p&&t?n.jsx(ho,{keyword:t,phraseId:r,marketplace:(o==null?void 0:o.TLDomain)||"com",onClick:m,moduleId:"",platformOptions:u}):null]})},wi=["free","starter"],Ai=c.div``,Ci=c.div`
  ${Z};
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.sp8};
`,qt=k`
  ${Z};
`,Jt=({asin:e,title:t,imageUrl:r,link:o=!1,TLDomain:s})=>{const{isOverflown:i,checkOverflown:l}=Ct(),p=y.useMemo(()=>$t("AM",s||"com",e||""),[s,e]);return n.jsxs(ji,{children:[n.jsxs($i,{children:[n.jsx(ki,{src:r}),n.jsx(Pi,{href:p,target:"_blank",rel:"noreferrer",children:n.jsx(Ei,{icon:At})})]}),n.jsxs(Ii,{children:[n.jsx(Me,{content:!i&&t?n.jsx("div",{dangerouslySetInnerHTML:{__html:t}}):void 0,children:t?n.jsx(Mi,{onMouseEnter:l,dangerouslySetInnerHTML:{__html:t}}):n.jsx(n.Fragment,{})}),!o&&n.jsx(Oi,{children:e}),o&&e&&n.jsx(Di,{onClick:a=>a.stopPropagation(),href:p,target:"_blank",rel:"noreferrer",children:e})]})]})},ji=c.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,$i=c.div`
  border: 1px solid #d9e0e8;
  border-radius: 4px;
  overflow: hidden;
  width: 32px;
  height: 32px;
  position: relative;
`,ki=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 4px;
  background-color: white;
`,Pi=c.a`
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
`,Ei=c(z)`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.systemColors.blue600};
`,Ii=c.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`,Mi=c.div`
  ${zn};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
`,Oi=c.div`
  ${jt}
`,Di=c.a`
  ${jt};
  color: ${e=>e.theme.systemColors.blue600};
  cursor: pointer;
  text-align: start;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,Ti=({phrase:e})=>{const{t}=b(),[r,o]=P(s=>[s.props.value.marketplace,s.props.value.onClickExternalLink]);return n.jsx(Lr,{content:[n.jsxs(Bi,{onClick:()=>{var s;o==null||o(),(s=window.open(Un("/magnet",{keywords:[e],marketplace:r==null?void 0:r.store},{arrayFormat:"index"}),"_blank"))==null||s.focus()},children:[t("keywordAnalysis.buttons.runMagnet"),n.jsx(z,{icon:Vn})]},1)],appendTo:document.body,children:n.jsx(Fi,{buttonType:"icon",size:"50",icon:n.jsx(z,{icon:Qn})})})},Fi=c(V)`
  margin-left: -${e=>e.theme.spacing.sp12};
`,Bi=c(Lr.Item)`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,Ri=()=>{const{t:e}=b(),t=P(r=>r.props.value.onClickBlurredMonthlySales);return n.jsx(Ni,{onClick:t,children:n.jsx(Wi,{children:e("getPlan")})})},Ni=c.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  margin: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`-${e} -${t}`};
  padding: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`${e} ${t}`};
`,Wi=c.div`
  filter: blur(4px);
`,Li=({locked:e})=>{const{t}=b(),r=P(o=>o.props.value.onClickBlurredMonthlySales);return n.jsx(vo,{title:t("keywordAnalysis.columns.monthlySales.title"),tooltip:t("keywordAnalysis.columns.monthlySales.tooltip"),locked:e,onClick:e?r:void 0,minWidth:112})},_i=()=>{const{t:e,language:t}=b(),{marketplace:r,isSingleSearch:o,products:s,enabledGoogleSearchVolumeChart:i,enabledWalmartSearchVolumeChart:l,monthlySalesLocked:p,planGroup:a}=P(d=>d.props.value);return y.useMemo(()=>{var d,f,m;return[{field:"controls",static:24,responsive:!0,render:u=>n.jsx(Ti,{phrase:u.phrase})},{field:"phrase",title:e("keywordAnalysis.columns.phrase.title"),tooltip:e("keywordAnalysis.columns.phrase.tooltip"),sortable:!0,defaultSortDirection:"ASC",static:240,responsive:!0,render:u=>n.jsx(mi,{phrase:u.phrase,phraseId:u.id,amazonChoice:u.amazonChoice,marketplaceFull:r,tool:"listingAnalyzer",planGroup:a})},...r.TLDomain==="com"?[{field:"monthlySales",title:n.jsx(Li,{locked:p}),tooltip:e("keywordAnalysis.columns.monthlySales.tooltip"),sortable:!p,sorter:"number",defaultSortDirection:"DESC",customCss:qt,responsive:!1,width:t==="de"||t==="it"||t==="es"?160:136,contentPosition:"right",render:u=>p?n.jsx(Ri,{}):u.monthlySales!=null?M({value:u.monthlySales,maximumFractionDigits:0}):"N/A"}]:[],{field:"searchVolume",title:n.jsx(Gi,{children:e("keywordAnalysis.columns.searchVolume.title")}),tooltip:e("keywordAnalysis.columns.searchVolume.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:qt,responsive:!1,width:140,type:"number",contentPosition:"right",render:u=>n.jsx(Si,{value:u.searchVolume,phrase:u.phrase,moduleId:"keywordresearch",marketplace:r,enabledWalmartSearchVolumeChart:l,enabledGoogleSearchVolumeChart:i})},...o?[{field:"newCprExact",title:e("keywordAnalysis.columns.newCprExact.title"),tooltip:e("keywordAnalysis.columns.newCprExact.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:80,type:"number",contentPosition:"right",render:u=>u.newCprExact!=null?M({value:u.newCprExact,maximumFractionDigits:0}):"N/A"},{field:"organicPosition",title:n.jsx(Jt,{asin:(d=s[0])==null?void 0:d.asin,title:(f=s[0])==null?void 0:f.title,imageUrl:(m=s[0])==null?void 0:m.imageUrl,TLDomain:r.TLDomain}),tooltip:e("keywordAnalysis.columns.asin.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",type:"number",contentPosition:"right",width:180,render:u=>{var h;return u.organicPosition!=null&&!isNaN(u.organicPosition)?n.jsx(je,{value:u.organicPosition,percentile:u[((h=s[0])==null?void 0:h.asin)+"_percentile"]}):"-"}}]:[{field:"performanceScore",title:n.jsx(zi,{children:e("keywordAnalysis.columns.performanceScore.title")}),tooltip:e("keywordAnalysis.columns.performanceScore.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:130,type:"number",contentPosition:"right"},{field:"newCprExact",title:e("keywordAnalysis.columns.newCprExact.title"),tooltip:e("keywordAnalysis.columns.newCprExact.tooltip"),sortable:!0,sorter:"number",defaultSortDirection:"DESC",customCss:Z,responsive:!1,width:80,type:"number",contentPosition:"right",render:u=>u.newCprExact!=null?M({value:u.newCprExact,maximumFractionDigits:0}):"N/A"},{field:"organicPosition",title:n.jsx(Ui,{children:e("keywordAnalysis.columns.organicPosition.title")}),tooltip:e("keywordAnalysis.columns.organicPosition.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",responsive:!1,width:130,type:"number",contentPosition:"right"}],...(o?[]:s).map(({asin:u,imageUrl:h,title:v})=>({field:u,title:n.jsx(Jt,{asin:u,title:v,imageUrl:h,TLDomain:r.TLDomain}),tooltip:e("keywordAnalysis.columns.asin.tooltip"),sortable:!0,sorter:"number",customCss:Z,defaultSortDirection:"DESC",type:"number",contentPosition:"right",render:S=>{const A=S[u];return A!=null&&!isNaN(A)?n.jsx(je,{value:A,percentile:S[u+"_percentile"]}):"-"}})),{title:"",field:"_",responsive:!0,noHeader:!0,noHover:!0}]},[e,r,p,t,o,s,a,l,i])},Gi=c.div`
  min-width: 100px;
  display: flex;
  justify-content: flex-end;
`,zi=c.div`
  min-width: 86px;
  display: flex;
  justify-content: flex-end;
`,Ui=c.div`
  min-width: 74px;
  display: flex;
  justify-content: flex-end;
`,Vi=({marketplace:e})=>{const[t,r]=P(l=>[l.props.value.data,l.selected.value]),o=y.useMemo(()=>t.filter(l=>r.includes(l.id)).map(l=>l.phrase),[t,r]),s=P(l=>l.props.value.products[0].asin),i=y.useMemo(()=>({marketplace:e,asin:s,phrases:o,moduleId:"keywordresearch"}),[o,e,s]);return s?n.jsx(go,{notification:Wr,data:i,moduleId:"keywordresearch"}):null},Qi=()=>{const{t:e}=b(),[t,r,o,s,i,l]=P(a=>[a.props.value.marketplace,a.props.value.addToMyListLocked,a.props.value.openUpgradeModalForBanner,a.props.value.notification,a.props.value.data,a.selected.value]),p=y.useCallback(()=>i.filter(a=>l.includes(a.id)).map(a=>a.phrase),[i,l]);return y.useCallback(a=>a.length?n.jsxs(n.Fragment,{children:[n.jsx(bo,{marketplace:t.domain||"amazon.com",notification:s,getSelectedKeywords:p,type:"dropdown",visibleItemsCount:3,CustomButton:({onClick:d})=>n.jsx(_r,{onClick:d,size:"100",buttonType:"secondary",locked:r,onLockedClick:o,children:e("keywordAnalysis.buttons.addToMyList")})}),n.jsx(Vi,{marketplace:t==null?void 0:t.store})]}):n.jsx(n.Fragment,{}),[r,p,t.domain,t==null?void 0:t.store,s,o,e])},Ki=()=>{const{t:e}=b();return y.useMemo(()=>({getTitleText:()=>e("keywordAnalysis.tableHeader.title"),haveCheckbox:!0,onChange:P.getState().selected.set}),[e])},Hi=({status:e})=>{const[t,r]=P(a=>[a.props.value.searchId,a.props.value.data]),o=_i(),s=pi(),i=Ki(),l=Qi(),p=y.useCallback(()=>n.jsx(Gr,{useDefaultTitles:!0,useDefaultTooltips:!0}),[]);return n.jsx(Ce,{name:`keywords-table-${t}`,status:e,columns:o,data:r,filter:qi,behavior:s,export:Yi,leftActions:l,rightActions:p,selected:i,footer:Ji,searchFunction:Zi})},Yi={exportable:!1},qi={defaultValue:{count:1e3,sortField:"default",sortDirection:"DESC",search:"",page:1}},Ji=()=>n.jsx("div",{id:"keywords-table-footer"}),Zi=e=>t=>((t==null?void 0:t.phrase)||"").toLowerCase().includes(e),Xi=()=>{y.useEffect(()=>()=>{P.getState().props.clear(),P.getState().selected.clear()},[])},es=e=>{y.useEffect(()=>{P.getState().props.set(e)},[e])},ts=y.memo(e=>{es(e),Xi();const{t}=b(),[r,o,s,i]=P(l=>[l.props.value.status,l.props.value.isSingleSearch,l.props.value.data.length,l.props.value.seeFullListInCerebro]);return n.jsxs(Zr,{children:[n.jsx(Xr,{children:n.jsx(ni,{})}),s===0&&r==="loaded"?n.jsx(en,{children:t(`keywordAnalysis.emptyData.${o?"single":"multi"}`)}):n.jsx(Hi,{status:e.status}),n.jsx(tn,{notEmpty:s!==0,children:n.jsx(V,{size:"200",buttonType:"secondary",onClick:i,disabled:r!=="loaded",children:t("keywordAnalysis.buttons.seeInCerebro")})}),n.jsx(xo,{})]})}),Zr=c.div`
  display: block;
  width: 100%;

  #keywords-table-footer {
    padding-bottom: 70px;
  }
`,Xr=c(zr)`
  padding: 0;

  & > div {
    border: none;
  }
`,en=c.div`
  ${Br};
  text-align: center;
  padding: 32px 32px 70px;
  border: solid 1px ${e=>e.theme.systemColors.grey200};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,tn=c.div`
  display: flex;
  justify-content: center;

  max-height: 0;
  position: relative;
  top: -56px;
`,Fu=Object.assign(ts,{Wrapper:Zr,AboveTable:Xr,EmptyResult:en,UnderTable:tn}),rs=e=>{var s;const t=e.props.value.selectedProduct,r=t==null?void 0:t.asin,o=e.props.value.data;return{product:t,score:(r==null?o==null?void 0:o.scoreData.overall.overallScore:(s=o==null?void 0:o.scoreData.data[r])==null?void 0:s.totalScore)||0,showSelectedProduct:e.props.value.showSelectedProductInLQS,marketplace:e.props.value.marketplace}},rn=e=>{var r;const t=(r=e.props.value.data)==null?void 0:r.scoreData.overall.metricData;if(t!=null){const o=Object.keys(t);return Eo(o,s=>{var i;return((i=t[s])==null?void 0:i.metricCategory)||""})}else return null},ns=e=>{const t=rn(e);return t!=null?Object.keys(t):[]},os=e=>{var o,s,i,l;const t=(s=(o=e.props.value)==null?void 0:o.selectedProduct)==null?void 0:s.asin,r=(i=e.props.value.data)==null?void 0:i.scoreData;return t&&r&&((l=r==null?void 0:r.data[t])==null?void 0:l.metricData)||null},is={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null,showImproveYourScore:!1,onClickImproveYourScoreLink:()=>{},showSelectedProductInLQS:!0,selectedProduct:null},O=ve((e,t)=>({...U(e,t,"props",is)})),mt=({count:e,type:t})=>n.jsxs(ss,{children:[e!=null&&n.jsx("div",{children:M({value:e})}),n.jsx(as,{type:t,children:n.jsx(z,{icon:t==="pass"?Kn:Hn,fontSize:14})})]}),ss=c.div`
  ${te};
  color: ${e=>e.theme.systemColors.grey800};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
  cursor: pointer;
`,as=c.div`
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
`,ls=()=>{const e=O(ns);return n.jsx(cs,{children:n.jsx(gs,{children:e.map(t=>n.jsx(ps,{category:t},t))})})},cs=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,ps=({category:e})=>{const t=O(p=>{var a;return(a=p.props.value.selectedProduct)==null?void 0:a.asin}),r=O(p=>p.props.value.selectedProduct!=null),o=O(rn),s=o!=null?o[e]:[],i=r?ds:us,l=Io(e);return n.jsxs(on,{children:[n.jsxs(fs,{children:[l,r&&!!t&&n.jsxs("span",{children:[" (",t,")"]})]}),n.jsx(hs,{children:s.map(p=>n.jsx(i,{metricId:p},p))})]})},us=y.memo(({metricId:e})=>{const t=O(o=>{var s;return(s=o.props.value.data)==null?void 0:s.scoreData.overall.metricData[e]}),r=Ur({key:e,data:t});return r?n.jsx(ms,{...r}):null}),ds=y.memo(({metricId:e})=>{var o;const t=(o=O(os))==null?void 0:o[e],r=Ur({key:e,data:t});return r?n.jsx(ys,{metricTitle:r.metricTitle,metricTooltip:r.metricTooltip,passed:r.passed}):null}),fs=c.h3`
  ${Yn};
  color: ${e=>e.theme.systemColors.black};
  margin-bottom: ${e=>e.theme.spacing.sp8};

  span {
    color: ${e=>e.theme.systemColors.grey600};
    font-weight: normal;
  }
`,ms=({metricTitle:e,metricTooltip:t,asinsPassed:r=[],asinsFailed:o=[]})=>{const{t:s}=b();return n.jsxs(nn,{children:[n.jsx(Q,{title:e,tooltip:t,size:"100"}),n.jsx(Ee,{content:n.jsxs(n.Fragment,{children:[n.jsx(Zt,{children:s("listingQualityScore.listingQualityScore.breakdowns.passed")}),r.map(i=>n.jsx(Xt,{children:i},i))]}),children:n.jsx("div",{children:n.jsx(mt,{count:r.length,type:"pass"})})}),n.jsx(Ee,{content:n.jsxs(n.Fragment,{children:[n.jsx(Zt,{children:s("listingQualityScore.listingQualityScore.breakdowns.passed")}),o.map(i=>n.jsx(Xt,{children:i},i))]}),children:n.jsx("div",{children:n.jsx(mt,{count:o.length,type:"fail"})})})]})},ys=({metricTitle:e,metricTooltip:t,passed:r})=>n.jsxs(nn,{children:[n.jsx(Q,{title:e,tooltip:t,size:"100"}),n.jsx(mt,{type:r?"pass":"fail"})]}),hs=c.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`,nn=c.li`
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
`,on=c.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 32px !important;

  ${le.laptop} {
    padding-left: 40px !important;
  }
`,gs=c.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${le.desktop} {
    flex-wrap: wrap;
    max-height: 464px;

    ${on} {
      width: 50%;
    }
  }
`,Zt=c.div`
  font-weight: 700;
  margin-bottom: 4px;
`,Xt=c.div``,xs="https://re-cdn.helium10.com/container/static/improve-your-score-BkCceDp4.svg",vs=()=>{const{t:e}=b(),[t,r]=O(o=>[o.props.value.showImproveYourScore,o.props.value.onClickImproveYourScoreLink]);return t?n.jsxs(bs,{children:[n.jsx(Ss,{src:xs}),n.jsx(ws,{children:e("listingQualityScore.improveYourScore.title")}),n.jsx(As,{children:e("listingQualityScore.improveYourScore.text")}),n.jsx(Cs,{href:"https://hub.helium10.com/categories/listing-optimization-services",target:"_blank",rel:"noreferrer",onClick:r,children:n.jsx(V,{buttonType:"text",type:"button",rightIcon:n.jsx(z,{icon:At}),children:e("listingQualityScore.improveYourScore.button")})})]}):null},bs=c(He)`
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
`,Ss=c.img`
  width: 80px;
`,ws=c.div`
  ${Ye};
  color: ${e=>e.theme.systemColors.black};
  text-align: center;
`,As=c.div`
  ${te};
  text-align: center;
`,Cs=c.a`
  text-decoration: none;
`,js=e=>e<5?"bad":e<7?"good":"excellent",$s=e=>({bad:e.dataVisualizationColors.tomato500,good:e.dataVisualizationColors.yellow500,excellent:e.dataVisualizationColors.green500}),ks=(e,t)=>{const{t:r}=b(),o=qn();return y.useMemo(()=>{const s=t?"single":"multi",i=js(e);return{description:r(`listingQualityScore.listingQualityScore.descriptionMap.${s}.${i}`),color:$s(o)[i]}},[t,r,o,e])},Ps=({marketplace:e,score:t,product:r,showSelectedProduct:o,tool:s})=>{const{t:i}=b(),l=r==null?"multi":"single",{description:p,color:a}=ks(t,r!=null),d=kt({data:{asin:(r==null?void 0:r.asin)||""}});return n.jsxs(Es,{children:[n.jsxs(Is,{children:[i(`listingQualityScore.listingQualityScore.title.${l}`),n.jsx(Nr,{content:i(`listingQualityScore.listingQualityScore.tooltip.${l}`)})]}),n.jsxs(Ms,{children:[n.jsxs(Os,{children:[n.jsx(Ds,{children:M({value:t,maximumFractionDigits:1,minimumFractionDigits:1})}),n.jsx(Ts,{children:"/10"})]}),n.jsx(Mo,{progress:[{value:t,color:a}],total:10,size:"200"})]}),n.jsx(Fs,{children:p}),o&&r!=null&&n.jsx(Bs,{children:n.jsx(Pt,{imageSize:"50",titleLineClamp:1,market:"AMAZON",renderBlocks:d,marketplace:e.store,tool:s||"listingAnalyzer",product:{asin:r.asin,title:r.title,imageSrc:r.imageSrc||"",href:$t("AM",e.store,(r==null?void 0:r.asin)||"")}})})]})},Es=c(He)`
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.spacing.sp16};
`,Is=c.div`
  ${Ke};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Ms=c.div`
  display: flex;
  flex-direction: column;
`,Os=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${e=>e.theme.spacing.sp16};
`,Ds=c.div`
  ${Jn};
  color: ${e=>e.theme.systemColors.grey800};
`,Ts=c.div`
  ${te};
  margin-bottom: ${e=>e.theme.spacing.sp4};
`,Fs=c.div`
  ${te};
  margin-top: ${e=>e.theme.spacing.sp16};
  text-align: center;
`,Bs=c.div`
  margin-top: ${e=>e.theme.spacing.sp16};
  padding-top: ${e=>e.theme.spacing.sp16};
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
`,Rs=()=>{const e=O(rs);return n.jsx(Ps,{...e})},G=ve((e,t)=>({...U(e,t,"productSelectOptions",[],{sideEffect:()=>{const r=G.getState().productSelectOptions.value;r.length===1&&G.getState().selectedProduct.set(r[0])}}),...U(e,t,"selectedProduct",null)})),Ns=e=>[{text:e==null?void 0:e.asin}],Ws=y.memo(()=>{const{t:e}=b(),[t,r,o]=G(s=>[s.productSelectOptions.value,s.selectedProduct.value,s.selectedProduct.set]);return n.jsx(Ls,{children:n.jsx(Oo,{value:r,onChange:o,options:t,placeholder:e("listingQualityScore.title.select.placeholder"),getBlocks:Ns,clearOption:e("listingQualityScore.title.select.placeholder"),disabled:t.length===1})})}),Ls=c.div`
  max-width: 236px;
  min-width: 236px;
`,_s=()=>{const{t:e}=b(),t=O(r=>r.props.value.isSingleSearch);return n.jsxs(Gs,{children:[n.jsx(Q,{title:e(`listingQualityScore.title.text.${t?"single":"multi"}`),tooltip:e("listingQualityScore.title.tooltip"),size:"400"}),n.jsx(Ws,{})]})},Gs=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp16};
`,zs=()=>n.jsxs(n.Fragment,{children:[n.jsxs(Us,{children:[n.jsx(Vs,{}),n.jsx(Qs,{})]}),n.jsxs(Hs,{children:[n.jsxs("div",{children:[n.jsx(Ys,{}),n.jsx(qs,{})]}),n.jsxs(Ks,{children:[n.jsx(er,{gridColumn:2,children:n.jsx(et,{rowsCount:7})}),n.jsxs(er,{gridColumn:3,children:[n.jsx(et,{rowsCount:4}),n.jsx(et,{rowsCount:2})]})]})]})]}),Us=c.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: ${e=>e.theme.spacing.sp16};
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,Vs=c(C)`
  width: 100%;
  max-width: 440px;
  height: 32px;
`,Qs=c(C)`
  min-width: 236px;
  height: 32px;
`,Ks=c.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`,er=c.div``,Hs=c.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 225px 1fr;
`,Ys=c(C)`
  min-height: 226px;
`,qs=c(C)`
  min-height: 220px;
  margin-top: 24px;
  margin-bottom: 16px;
`,et=({rowsCount:e})=>n.jsxs(Js,{children:[n.jsx(Zs,{}),n.jsx(Xs,{children:[...new Array(e)].map((t,r)=>n.jsxs(ea,{children:[n.jsx(ta,{}),n.jsx(ra,{})]},r))})]}),Js=c.div`
  margin-bottom: 40px;
`,Zs=c(C)`
  height: 26px;
  max-width: 200px;
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Xs=c.div`
  & > :not(:first-child) {
    border-top: 1px solid rgb(217, 224, 232);
  }
`,ea=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
`,ta=c(C)`
  height: 34px;
  width: 100%;
  max-width: 240px;
`,ra=c(C)`
  height: 34px;
  width: 50px;
`,na=()=>{y.useEffect(()=>()=>{O.getState().props.clear()},[])},oa=e=>{y.useEffect(()=>{O.getState().props.set(e)},[e])},ia=y.memo(e=>{na(),oa(e);const t=O(r=>r.props.value.status);return n.jsxs(sa,{children:[t==="loaded"&&n.jsxs(n.Fragment,{children:[n.jsx(_s,{}),n.jsxs(aa,{children:[n.jsxs(la,{children:[n.jsx(Rs,{}),n.jsx(vs,{})]}),n.jsx(ls,{})]})]}),t!=="loaded"&&n.jsx(zs,{})]})}),sa=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp24};
`,aa=c.div`
  display: grid;
  grid-template-columns: 1fr;

  ${le.desktop} {
    grid-template-columns: 224px 1fr;
  }
`,la=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp24};
`,ca=e=>{y.useEffect(()=>()=>{G.getState().productSelectOptions.clear(),G.getState().selectedProduct.clear()},[e]),y.useEffect(()=>{G.getState().productSelectOptions.clear(),G.getState().selectedProduct.clear()},[e])},pa=e=>{var t;y.useEffect(()=>{var o;const r=Object.values(((o=e.listingQualityScoreProps.data)==null?void 0:o.scoreData.data)||{}).filter(s=>s&&s.title).map(s=>({...s,title:s.title?n.jsx("div",{dangerouslySetInnerHTML:{__html:s.title}}):void 0,label:s.asin,imageSrc:s.imageUrl,href:s.productUrl,value:s.asin,market:"a"}));G.getState().productSelectOptions.set(r)},[(t=e.listingQualityScoreProps.data)==null?void 0:t.scoreData])},Bu=e=>{ca(e.searchId),pa(e);const t=G(s=>s.selectedProduct.value),r=y.useMemo(()=>({...e.listingQualityScoreProps,selectedProduct:t}),[e.listingQualityScoreProps,t]),o=y.useMemo(()=>({...e.competitorAnalysisProps,selectedProduct:t}),[e.competitorAnalysisProps,t]);return n.jsxs(ua,{children:[n.jsx(ia,{...r}),n.jsx(da,{}),n.jsx(Xo,{...o})]})},ua=c(He)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${e=>e.theme.spacing.sp24};
  padding: ${e=>e.theme.spacing.sp24};
`,da=c.div`
  height: 1px;
  align-self: stretch;
  background-color: ${e=>e.theme.systemColors.grey200};
`,qe=e=>{var t,r;return Object.entries(((r=(t=e.props.value.data)==null?void 0:t.scoreData)==null?void 0:r.data)||{}).map(([o,s])=>s).filter(o=>o!=null).map(o=>o)},fa=e=>qe(e).map(r=>({...r,images:r.images.map(o=>o.large),hiresImages:r.images.map(o=>o.hiRes)})),ma={isSingleSearch:!0,marketplace:Ie("domain","amazon.com"),status:"loading",data:null},D=ve((e,t)=>({...U(e,t,"props",ma),...po(e,t,"modal",{currentIndex:0}),...U(e,t,"showMore",!1)})),ya=e=>{var d;const t=e.items?e.items.length:0,r=y.useRef(null),[o,s]=y.useState(e.activeIndex||0),[i,l]=y.useState(!1),p=y.useCallback(()=>{l(!0)},[]),a=y.useCallback(f=>{l(!1),s(f.item)},[]);return n.jsx(ha,{children:n.jsxs(wa,{tabIndex:-1,children:[n.jsx(Do,{ref:r,...e,animationDuration:500,disableButtonsControls:!0,disableDotsControls:!0,autoWidth:!0,infinite:!0,onSlideChange:p,onSlideChanged:a}),n.jsxs(xa,{children:[n.jsx(va,{buttonType:"icon",size:"100",icon:n.jsx(tr,{icon:Zn}),onClick:f=>{var m;return!i&&((m=r.current)==null?void 0:m.slidePrev(f))},disabled:o===0}),n.jsxs(ga,{children:[o+1," of ",(d=e.items)==null?void 0:d.length," images"]}),n.jsx(ba,{buttonType:"icon",size:"100",icon:n.jsx(tr,{icon:Xn}),onClick:f=>{var m;return!i&&((m=r.current)==null?void 0:m.slideNext(f))},disabled:o===t-1})]})]})})},ha=c.div``,ga=c.span`
  ${Ye};
`,xa=c.div`
  padding: 10px 24px;
  border-top: ${({theme:e})=>e.systemColors.grey300} solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,sn=k`
  min-width: 32px;

  & > svg {
    font-size: 24px;
  }
`,va=c(V)`
  ${sn};
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,ba=c(V)`
  ${sn};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,tr=c(z)`
  font-size: 24px;
`,Sa=c.div`
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
`,wa=c(Sa)`
  display: block;
  align-items: center;
  border-radius: 6px;
  border: ${({theme:e})=>e.systemColors.grey300} solid 1px;
`,Aa=y.memo(()=>{const[e,t,r]=D(i=>[i.modal.atom.isOpen,i.modal.atom.data,i.modal.close]),o=D(qe),s=y.useMemo(()=>{const i=o.find(l=>l.asin===(t==null?void 0:t.asin));if(i)return i.images.map((l,p)=>n.jsx(Ca,{width:"100%",height:"100%",src:l.hiRes,alt:`${p}`},`${p}`))},[o,t==null?void 0:t.asin]);return n.jsx(eo,{isOpen:e,onClose:r,children:n.jsx(ya,{items:s,activeIndex:t==null?void 0:t.currentIndex})})}),Ca=c.img`
  height: 100%;
  width: 100%;
  max-height: calc(90vh - 140px);
  object-fit: contain;
`,rr=({count:e,type:t})=>n.jsxs(yt,{children:[n.jsx(z,{icon:t==="image"?to:ro}),n.jsx("div",{children:M({value:e})})]}),yt=c.div`
  ${Ke};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};

  svg {
    font-size: 16px;
  }
`,ja=y.memo(({data:e,asin:t,index:r})=>{const o=y.useCallback(()=>D.getState().modal.open({asin:t,currentIndex:r}),[t,r]);return n.jsx(Et,{onClick:o,children:n.jsx(Ee,{colorType:"light",content:e.large&&n.jsx($a,{alt:t,src:e.large}),small:!0,maxWidth:450,delay:200,children:n.jsx(an,{src:e.large||e.thumb||e.hiRes})})})}),Et=c.div`
  border: 1px solid ${e=>e.theme.systemColors.grey200};
  border-radius: 6px;
  overflow: hidden;
  width: 170px;
  height: 170px;
  flex: 0 0 auto;
  position: relative;
  cursor: pointer;
`,an=c.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
`,$a=c.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
`,ka=({data:e})=>{const{t}=b();return n.jsxs(Et,{children:[n.jsx(an,{src:e}),n.jsx(Pa,{children:t("Video")})]})},Pa=c.div`
  ${jt};
  position: absolute;
  bottom: ${e=>e.theme.spacing.sp8};
  left: 50%;
  transform: translateX(-50%);
  background: #f2f5f7;
  border-radius: 12px;
  padding: ${({theme:{spacing:{sp4:e,sp8:t}}})=>`${e} ${t}`};
`,Ea=({data:e})=>{const{asin:t,title:r,productUrl:o,images:s,totalScore:i,videos:l}=e,[p,a]=D(m=>[m.props.value.marketplace,m.props.value.tool],no),d=kt({data:{asin:t||"",marketplace:p.domain,listingScore:i}}),f=y.useMemo(()=>{var m;return{asin:t,title:r,imageSrc:(m=s[0])==null?void 0:m.thumb,href:o}},[t,s,o,r]);return n.jsxs(ln,{children:[n.jsxs(cn,{children:[n.jsxs(pn,{children:[n.jsx(Pt,{market:"AMAZON",product:f,marketplace:p.store,tool:a||"listingAnalyzer",renderBlocks:d,tooltipOptions:{appendTo:document.body},...Ia}),n.jsxs(dn,{children:[n.jsx(rr,{type:"image",count:(s==null?void 0:s.length)||0}),n.jsx(rr,{type:"video",count:(l==null?void 0:l.length)||0})]})]}),n.jsx(un,{})]}),n.jsxs(fn,{children:[(s||[]).map((m,u)=>n.jsx(ja,{data:m,asin:t,index:u},`image-${u}`)),(l||[]).map((m,u)=>n.jsx(ka,{data:m},`video-${u}`))]})]})},Ia=Rr[50],ln=c.div`
  justify-self: stretch;
`,cn=c.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
  padding: ${e=>e.theme.spacing.sp20} ${e=>e.theme.spacing.sp24} 0;
`,pn=c.div`
  display: grid;
  justify-items: center;
  grid-gap: ${e=>e.theme.spacing.sp16};

  grid-template-columns: 1fr;

  ${le.laptop} {
    justify-items: flex-start;
    grid-template-columns: 1fr auto;
  }
`,un=c.div`
  margin-top: ${e=>e.theme.spacing.sp20};
  border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
`,dn=c.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp8};
`,fn=c.div`
  max-height: 210px;
  display: flex;
  width: 0;
  min-width: 100%;
  overflow: auto;
  overflow-y: hidden;
  padding: ${({theme:{spacing:{sp16:e,sp24:t}}})=>`${e} ${t} ${t}`};
  gap: ${e=>e.theme.spacing.sp16};
`,Ma=()=>n.jsxs(ln,{children:[n.jsxs(cn,{children:[n.jsxs(pn,{children:[n.jsxs(Ta,{children:[n.jsx(Fa,{}),n.jsxs(Ba,{children:[n.jsx(Ra,{}),n.jsxs(Na,{children:[n.jsx(tt,{}),n.jsx(ir,{}),n.jsx(tt,{}),n.jsx(ir,{}),n.jsx(tt,{})]})]})]}),n.jsxs(dn,{children:[n.jsxs(yt,{children:[n.jsx(nr,{}),n.jsx(or,{})]}),n.jsxs(yt,{children:[n.jsx(nr,{}),n.jsx(or,{})]})]})]}),n.jsx(un,{})]}),n.jsx(fn,{children:Oa.map((e,t)=>n.jsx(Et,{children:n.jsx(Da,{})},t))})]}),Oa=[...new Array(5)],nr=c(C)`
  width: 18px;
  height: 12px;
`,or=c(C)`
  width: 10px;
  height: 14px;
`,Da=c(C)`
  width: 100%;
  height: 100%;
`,Ta=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
  justify-self: stretch;
`,Fa=c(C)`
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
`,Ba=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Ra=c(C)`
  height: 14px;
  max-width: 900px;
`,Na=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
  margin-top: ${e=>e.theme.spacing.sp4};
`,tt=c(C)`
  width: 24px;
  height: 16px;
`,ir=c(C)`
  width: 80px;
  height: 12px;
`,Wa=()=>{const e=D(qe),[t,r,o]=D(i=>[i.props.value.status==="loaded",i.props.value.showByDefault,i.showMore.value]),s=y.useMemo(()=>{if(r!=null)return o?e.length:r},[e.length,r,o]);return n.jsx(_a,{clampRows:s,children:t?e.map(i=>n.jsx(Ea,{data:i},i.asin)):La.map((i,l)=>n.jsx(Ma,{},l))})},La=[...new Array(5)],_a=c.div`
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
`,mn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABuCAYAAAANrABAAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAudEVYdENyZWF0aW9uIFRpbWUAVHVlIDE2IEF1ZyAyMDIyIDA1OjMwOjQ0IFBNIEVFU1TRaC5cAAAGS0lEQVR4nO2d7W6jPBBGx8Z8hJCq93+XSUMIAez98WoobzcOH7XBZJ8jrbRSgrHKyWA8HiOMMYYAeILcugMgXCAHsAI5gBXIAaxADmAFcgArkANYgRzAilp6oDGGMH8WPkIIEkIsOnaWHMYY0lqT1pratqWmaSBIoAghSEpJSZKQlLL/N4fJcmitqWkaqqqK7vc7pNgJQghSSlGe55SmKUkpJ0cSMSW30rYtVVVFZVlCip0ihKAkSagoCorjeJIgo3K0bUvX65WqqnLWUbANHEWOxyNlWTYqyMubUNd1VJYlxHgTjDHUNA2VZUmPx2P0LmCVwxhDdV3T7XZz3kmwLW3bUlmWpLV++b2ncrBhEOM9McZQ27aj19caOZqmoaZpnHcMhEHXdfR4PF5Gj6dy8IHgvdFaU9d11s+tcrRt661TIAwWyWGMeXkQeA/GUiBWOTDZ9f6MBQFkZYGVxVnZJXCGkBNAw/+zwZzcQ+TanlXkEEJQFEWklKIkSShNU1Lq/6dmKeq6psfjQU3TUNd1kGRDvMvBaWPOCtpggfI8p8Ph0GeA67rG4HgjvMqhlKIsy6goilkLTjiDGMcx1XVNl8sFt5oN8DYgjeOYiqKg0+m0eCWSEILSNKXPz8+/bkPAP17kkFJSlmV0OBx+3ZYQguI4po+PDwiyMs7lkFLS4XCgoiictcmCHI/H2UvdwHKc/6WVUk4ixk/4FpNlmfO2wXOcyhFFEaVpSnEcu2y2R0rZr4ME/vEihy94mVuSJN7OAb5xKoeU0lvUGJ4DcqyDMznWEIPPo5Ra/HgMpuNMjmGexDc8mwr84lQO/JrfCwz7V4Cj6t5+PM6mHLFA6G+GT1dSSmrblh6Px24Sic7kGFuP6JI9LGPk5OHpdOoH6lprut/vdL1eg+8/kePbyhrrL1iMkKPUMzGIvlMLHx8fuxhQO5ODL5rvXwRX+4eKTYzh52ma7kIQ55Gjrmuvv+q2bamua2/t/4YxMYbf24MgTuXgZX5jNZhLYflCvF9PFWP4/dAFcSoH12BWVeU8enD97v1+d9quC+aKMTwuZEGcz3N0Xedl9x/eOiC0qLFUjOHxoQriZRKs6zq63W5O9gwbVvyHVr/7WzGG7YQoiBc5+IJeLhe63++LFwfzk0mIOwu5EmPYXmiCeJs+Z0G+vr6oqirqum6yJMOxy/l8Dm6c4VqMYbshCeJ9xW7Xdb0geZ73m5UNq96IvqffeRtLrlkJDV9iDNtnQS6Xy6ZjrFWWc3MUOZ/P/boPpVS/NyZHCq316IYiW+JbjOF5QhBk9bX+PBcSYlR4xVpiDM+3tSBI2U9gbTGG591yDAI5RthKjOH5txIEcrxgazGG/dhCEMhhIRQxhv1ZW5Dg5dhiaV1oYjBrCxKsHFwglaZpv8xuDUIVg1lTkCDL1rlommtuOVdzu928zoGELgaz1mNucJHjpxhE/0WR4/FIRVF4iyB7EYNhQU6nk7e/SVByPBODGW7t4PqPsTcxGO53nude2g9GjldiMD4E2asYjM9isiDkmCIG41KQvYvhm83lmCMG40IQiDHOpnIsEYP5jSAQYxqbyfEbMZglgkCM6WwihwsxmDmCQIx5rC6HSzGYKYJAjPmsKocPMZhXgkCMZawmh08xmGeCQIzlrJJbWUMMhgUhIirLkpRSEGMh3uVYUwyGBYmiiKIoghgL8SrHFmIwvP86WI7XtyZsJQZwgxc5IMZ74FyOKIrocDhAjDfAuRxrblYL/IKrCKxADmAFcgArkANYgRzACuQAViAHsAI5gBXIAax4ycqu+XqNfx3epdEHzuUYFj2DddiNHLwzINg/GHMAK5ADWIEcwMpTOfBS33+Dsev8VA7edhq8N2PX+eknURRRkiTeOgXCQEq5LHIkSbK7NyiDeXBdjw3rmEMpRWmaeusY2BalFGVZ9jIAWG84URRRnucYmL4hXD88ViFglUMI0defYHD6PvAWlUVRjH735fT5z6JkJNP2jRCCsiyj4/E46Y4gzISXrhljqK5rKsuyf6MS2A/8yMpiTN4ia4ocjNa6f2es1rqXxOfrycF8eJDJBWZxHPfv15vVzhw5GM68Nk3TS4JoEgYcJXgOI47j5dtxLpED/BvgMQRYgRzACuQAViAHsAI5gBXIAaz8ATLGxnvqsRQyAAAAAElFTkSuQmCC",Ga="https://re-cdn.helium10.com/container/static/helium10-logo-9FQo6Tjn.png",za=e=>{const t=document.getElementById(e);t&&oo(()=>import("./html2pdf.es-XOAB1vFe.js"),__vite__mapDeps([0,1])).then(r=>{r.default(t,{margin:5,image:{type:"jpeg",quality:1},html2canvas:{useCORS:!0,scale:2},pagebreak:{after:"#page-break"}})})},yn=132,hn=114,Ua=[...new Array(9)].map((e,t)=>t),Va=y.memo(()=>{const e=D(fa);return n.jsxs(n.Fragment,{children:[n.jsx(Ka,{}),n.jsx(el,{children:n.jsx("div",{id:"pdf-export",children:e.map((t,r)=>n.jsx(Qa,{...t,pageBreak:!((r+1)%3)&&r!==0,watermark:!((r-1)%3)||r===e.length-1&&(r+1)%3<2},r))})})]})}),Qa=({images:e,title:t,asin:r,productUrl:o,videos:s,pageBreak:i,watermark:l})=>n.jsxs(n.Fragment,{children:[n.jsx(sr,{}),n.jsxs(Ja,{children:[n.jsxs(tl,{children:[t,n.jsxs(rl,{children:["ASIN: ",n.jsx("a",{href:o,children:r})," | Image: ",e.length," | Video: ",s.length]})]}),n.jsxs(qa,{children:[l&&n.jsx(Za,{src:Ga}),Ua.map(p=>{const a=e[p];return n.jsx(Xa,{isEmpty:!a,children:n.jsx(Ha,{src:a||mn,width:a?yn:50,height:a?hn:50})},p)})]})]}),i&&n.jsx(sr,{}),i&&n.jsx("div",{id:"page-break"})]}),Ka=y.memo(()=>{const{t:e}=b(),t=()=>{za("pdf-export")},r=D(o=>o.props.value.status!=="loaded");return n.jsx(V,{buttonType:"tertiary",size:"100",onClick:t,icon:n.jsx(z,{icon:io}),disabled:r,children:e("mediaComparison.exportButton")})}),Ha=y.memo(({src:e,width:t,height:r})=>{const[o,s]=y.useState(t),[i,l]=y.useState(r);return n.jsx(Ya,{src:e||mn,alt:"pdf",width:e?o:50,height:e?i:40,onLoad:p=>{const{naturalWidth:a,naturalHeight:d}=p.currentTarget;a>d?l(d/a*r):s(a/d*t)}})}),Ya=c.img``,qa=c.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -5px;
`,Ja=c.div`
  position: relative;
`,Za=c.img`
  position: absolute;
  width: 45%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0.2;
`,sr=c.div`
  width: 100%;
  height: 5px;
  background-color: ${e=>e.theme.systemColors.blue400};
  margin: 16px 0;
`,Xa=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${hn+10}px;
  width: ${yn+10}px;
  margin: 5px;
  border: solid 1px ${({isEmpty:e})=>e?"#DDD":"#777"};
`,el=c.div`
  display: none;
`,tl=c.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 7.5px;
  font-size: 10px;
  color: black;
`,rl=c.div`
  font-size: 10px;

  a {
    color: ${e=>e.theme.systemColors.blue600};
    font-weight: bold;
    text-decoration: none;
  }

  color: black;
`,nl=({learnButton:e})=>{const{t}=b();return n.jsxs(ol,{children:[n.jsx(Q,{title:t("mediaComparison.title"),tooltip:t("mediaComparison.tooltip"),size:"400"}),n.jsxs(il,{children:[n.jsx(Va,{}),e]})]})},ol=c.div`
  padding: ${e=>e.theme.spacing.sp20} ${e=>e.theme.spacing.sp24};
  display: flex;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp16};
`,il=c.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,sl=()=>{const{t:e}=b(),[t,r,o]=D(i=>[i.props.value.showByDefault,i.showMore.value,i.showMore.set]),s=D(qe);return t==null||t>=s.length?null:n.jsx(al,{children:n.jsx(V,{type:"button",buttonType:"text",size:"100",onClick:()=>o(!r),children:e(`mediaComparison.expandButton.${r?"shown":"hidden"}`)})})},al=c.div`
  border-top: 1px solid ${e=>e.theme.systemColors.grey200};
  padding: ${e=>e.theme.spacing.sp16} ${e=>e.theme.spacing.sp24};
  background-color: ${e=>e.theme.systemColors.white};
`,ll=()=>{y.useEffect(()=>()=>{D.getState().props.clear()},[])},cl=e=>{y.useEffect(()=>{D.getState().props.set(e)},[e])},pl=({learnButton:e,...t})=>(ll(),cl(t),n.jsxs(gn,{children:[n.jsx(nl,{learnButton:e}),n.jsx(Wa,{}),n.jsx(sl,{}),n.jsx(Aa,{})]})),gn=c(He)`
  width: 100%;
  padding: 0;
`,Ru=Object.assign(pl,{Wrapper:gn}),ul={marketplace:Ie("domain","amazon.com"),data:[],status:"loading",planGroup:"free",blurred:!0,openUpgradeModal:()=>{},mediaComparisonLocked:!0},ce=ve((e,t)=>({...U(e,t,"props",ul)})),dl=({period:e,additionTitle:t,size:r="big"})=>{const[o,s]=ce(i=>[i.props.value.tableTitle,i.props.value.tableTitleTooltip]);return n.jsxs(yl,{children:[n.jsxs(fl,{children:[n.jsxs(xl,{children:[n.jsx(hl,{$size:r,children:o}),t,s&&n.jsx(vl,{content:s})]}),e&&n.jsx(gl,{children:e})]}),n.jsx(ml,{children:n.jsx(Gr,{useDefaultTitles:!0,useDefaultTooltips:!0})})]})},fl=c.div``,ml=c.div``,yl=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,hl=c.div`
  ${({$size:e})=>e==="big"&&k`
      ${Br};
    `}
  ${({$size:e})=>e==="medium"&&k`
      ${Ye};
      color: ${t=>t.theme.systemColors.black};
    `}
`,gl=c.div`
  ${te};
  margin-top: ${e=>e.theme.spacing.sp4};
`,xl=c.div`
  display: flex;
  align-items: center;
`,vl=c(Nr)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,ar=({content:e})=>{const{isOverflown:t,checkOverflown:r}=Ct();return n.jsx(Me,{content:t?void 0:e,children:n.jsx(bl,{onMouseEnter:r,children:e})})},bl=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,Sl=e=>{const t=new RegExp(" ","g");return e.replace(t," ")},wl=({product:e,marketplace:t,sellerType:r,size:o,tool:s})=>{const i=kt({data:{asin:e.asin||"",fulfillmentType:Al[r],marketplace:t.domain}});return n.jsx(Pt,{market:"AMAZON",product:e,renderBlocks:i,marketplace:t.store,tool:s||"listingAnalyzer",tooltipOptions:{appendTo:document.body},...Rr[o]})};k`
  align-items: flex-start;
`;const Al={1:"Amazon",2:"FBA",3:"FBM"},Cl=({sellerName:e,numberOfSellers:t=0})=>{const{t:r}=b(),{isOverflown:o,checkOverflown:s}=Ct();return n.jsxs(jl,{children:[n.jsx(Me,{content:n.jsxs(n.Fragment,{children:[r("metricsAcrossAsins.columns.seller.sellerNameTooltip"),o?void 0:n.jsxs(n.Fragment,{children:[n.jsx("br",{}),e]})]}),children:n.jsx($l,{onMouseEnter:s,children:e})}),n.jsx(Ee,{content:r("metricsAcrossAsins.columns.seller.numberOfSellersTooltip"),delay:[0,0],children:n.jsxs(kl,{children:["(",t||0,")"]})})]})},jl=c.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`,$l=c.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,kl=c.div`
  margin-left: 4px;
`,Pl=()=>{const{t:e}=b(),t=To(),{open:r}=Fo(),[o,s,i,l,p]=ce(({props:{value:a}})=>[a.marketplace,a.planGroup,a.blurred,a.openUpgradeModal,a.tool]);return y.useMemo(()=>[{field:"product",title:e("metricsAcrossAsins.columns.product.title"),sortable:!1,static:352,responsive:!0,render:(a,{size:d})=>n.jsx(wl,{product:{asin:a.asin,imageSrc:a.imageSrc,title:n.jsx("div",{dangerouslySetInnerHTML:{__html:Sl(a.title||"")}}),href:$t("AM",o.store,a.asin)},sellerType:a.sellerType||1,size:d,marketplace:o,tool:p})},{field:"listingQualityScore",title:e("metricsAcrossAsins.columns.listingQualityScore.title"),tooltip:e("metricsAcrossAsins.columns.listingQualityScore.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.listingQualityScore!=null?n.jsx(Bo,{rang:a.listingQualityScore}):"N/A",maxWidth:80},{field:"sellerRegion",title:e("metricsAcrossAsins.columns.sellerRegion.title"),tooltip:e("metricsAcrossAsins.columns.sellerRegion.tooltip"),sortable:!0,sorter:"string",render:a=>{var d;return n.jsx(ar,{content:a.sellerCountry!=null&&((d=t==null?void 0:t[a.sellerCountry])==null?void 0:d.label)||"N/A"})},maxWidth:200},{field:"salesRank",title:e("metricsAcrossAsins.columns.categoryBSR.title"),tooltip:e("metricsAcrossAsins.columns.categoryBSR.tooltip"),sortable:!0,sorter:"number",customCSS:J,maxWidth:240,render:a=>n.jsx(wo,{category:a.categoryTitle||"",bestSellersUrl:a.bestSellersUrl||"",salesRank:a.salesRank||0,subcategories:a.subcategories||[],asin:a.asin,marketplace:o,advanced:!0,onClickChart:()=>r(a.asin,"bsr")})},{field:"price",title:e("metricsAcrossAsins.columns.price.title"),tooltip:e("metricsAcrossAsins.columns.price.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(Ao,{price:a.price||0,priceChange:a.priceChange||0,currency:o.currency,onClickChart:()=>r(a.asin,"price"),advanced:!0}),maxWidth:200},{field:"monthlySales",title:e("metricsAcrossAsins.columns.monthlySales.title"),tooltip:e("metricsAcrossAsins.columns.monthlySales.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(Co,{monthlySales:a.monthlySales||0,monthlySalesChange:a.salesChange||0,advanced:!0,onClickChart:()=>s!=="free"?r(a.asin,"sales"):l()}),maxWidth:200},{field:"monthlyRevenue",title:e("metricsAcrossAsins.columns.monthlyRevenue.title"),tooltip:e("metricsAcrossAsins.columns.monthlyRevenue.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.monthlyRevenue?ft({amount:o.currency!=="JPY"?a.monthlyRevenue/100:a.monthlyRevenue,currency:o.currency}):"-",maxWidth:200},{field:"stock",title:e("metricsAcrossAsins.columns.stock.title"),tooltip:e("metricsAcrossAsins.columns.stock.tooltip"),sortable:!0,sorter:"number",customCSS:J,maxWidth:200,render:a=>n.jsx(ar,{content:a.stock!=null?a.stockHasLimit?e("metricsAcrossAsins.columns.stock.value",{number:_({value:a.stock})}):_({value:a.stock}):"N/A"})},{field:"coupon",title:e("metricsAcrossAsins.columns.coupon.title"),tooltip:e("metricsAcrossAsins.columns.coupon.tooltip"),sortable:!1,customCSS:oe,render:a=>a.couponType!=null&&a.couponValue!==null?a.couponType==="currency"?ft({amount:a.couponValue,currency:o.currency}):_({value:a.couponValue})+"%":"-",maxWidth:200},{field:"reviewsRating",title:e("metricsAcrossAsins.columns.reviewsCount.title"),tooltip:e("metricsAcrossAsins.columns.reviewsCount.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx(jo,{reviewCount:a.reviewCount||0,rating:isNaN(Number(a.reviewsRating))?void 0:Number(a.reviewsRating),advanced:!0,onClickChart:()=>r(a.asin,"review")}),maxWidth:200},{field:"bbSeller",title:e("metricsAcrossAsins.columns.seller.title"),tooltip:e("metricsAcrossAsins.columns.seller.tooltip"),sortable:!0,sorter:"string",customCSS:oe,maxWidth:150,render:a=>n.jsx(Cl,{sellerName:a.bbSeller||"N/A",numberOfSellers:a.numberOfSellers})},{field:"yearSales",title:e("metricsAcrossAsins.columns.lastYearSales.title"),tooltip:e("metricsAcrossAsins.columns.lastYearSales.tooltip"),sortable:!0,sorter:"number",customCSS:J,render:a=>n.jsx($o,{yearSales:a.yearSales||0,salesYearOverYear:a.salesYearOverYear||0,advanced:!0}),maxWidth:200},{field:"shippingDetails",title:n.jsx(pr,{children:e("metricsAcrossAsins.columns.shippingDetails.title")}),tooltip:e("metricsAcrossAsins.columns.shippingDetails.tooltip"),sortable:!1,customCSS:Tl,render:a=>n.jsx(ko,{sizeTier:a.sizeTier!=null?a.sizeTier:void 0,width:isNaN(Number(a.width))?void 0:Number(a.width),height:isNaN(Number(a.height))?void 0:Number(a.height),length:isNaN(Number(a.length))?void 0:Number(a.length),advanced:!0})},{field:"weight",title:e("metricsAcrossAsins.columns.weight.title"),tooltip:e("metricsAcrossAsins.columns.weight.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.weight!=null&&a.weight!=="-1"&&!isNaN(Number(a.weight))?_({value:Number(a.weight),maximumFractionDigits:2}):"-",maxWidth:200},{field:"storageFee",title:e("metricsAcrossAsins.columns.storageFee.title"),tooltip:e("metricsAcrossAsins.columns.storageFee.tooltip"),sortable:!1,customCSS:J,render:a=>n.jsx(Po,{storageFee:a.storageFee,currency:o.currency}),maxWidth:200},{field:"bestSalesPeriod",title:e("metricsAcrossAsins.columns.bestSalesPeriod.title"),tooltip:e("metricsAcrossAsins.columns.bestSalesPeriod.tooltip"),sortable:!1,customCSS:oe,render:a=>a.bestMonth?co(new Date(a.bestMonth),"MMM, yyyy"):"-",maxWidth:200},{field:"age",title:e("metricsAcrossAsins.columns.age.title"),tooltip:e("metricsAcrossAsins.columns.age.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.age,percentile:a.agePercentile,blurred:i,revert:!0}),maxWidth:200},{field:"numberOfImages",title:e("metricsAcrossAsins.columns.numberOfImages.title"),tooltip:e("metricsAcrossAsins.columns.numberOfImages.tooltip"),sortable:!0,sorter:"number",customCSS:oe,render:a=>a.numberOfImages!=null?_({value:a.numberOfImages}):"-",maxWidth:200},{field:"variationCount",title:e("metricsAcrossAsins.columns.variationCount.title"),tooltip:e("metricsAcrossAsins.columns.variationCount.tooltip"),sortable:!0,sorter:"number",render:a=>a.variationCount!=null?_({value:a.variationCount}):"-",maxWidth:200},{field:"salesToReviews",title:e("metricsAcrossAsins.columns.salesToReviews.title"),tooltip:e("metricsAcrossAsins.columns.salesToReviews.tooltip"),sortable:!0,sorter:"number",render:a=>a.salesToReviews!=null&&!isNaN(Number(a.salesToReviews))?Number(a.salesToReviews)!==-1?_({value:Number(a.salesToReviews)}):"N/A":"-",maxWidth:200},{field:"top10Keywords",title:e("metricsAcrossAsins.columns.top10Keywords.title"),tooltip:e("metricsAcrossAsins.columns.top10Keywords.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.top10Keywords,percentile:a.top10KeywordsPercentile,blurred:i,revert:!0}),maxWidth:200},{field:"top10SearchVolume",title:e("metricsAcrossAsins.columns.top10SearchVolume.title"),tooltip:e("metricsAcrossAsins.columns.top10SearchVolume.tooltip"),sortable:!0,sorter:"number",render:a=>n.jsx(je,{value:a.top10SearchVolume,percentile:a.top10SearchVolumePercentile,blurred:i,revert:!0}),maxWidth:200},{title:"",field:"_",responsive:!0,noHeader:!0,noHover:!0}].map(a=>({...a,title:n.jsx(pr,{children:a.title}),...i&&!cr.includes(a.field)?{render:()=>n.jsx(n.Fragment,{children:e("getPlan")}),customCSS:lr.includes(a.field)?Dl:Ol}:{},contentPosition:lr.includes(a.field)?"left":"right",sortable:i&&!cr.includes(a.field)?!1:a.sortable})),[i,t,o,r,l,s,e,p])},lr=["product","sellerRegion","seller","shippingDetails"],cr=["product","listingQualityScore"],oe=k`
  ${te};
  color: ${e=>e.theme.systemColors.grey800};
  padding: 8px 16px;
`,El=k`
  justify-content: flex-end;
  color: ${e=>e.theme.systemColors.grey600};
`,Il=k`
  ${El};
  min-height: 42px;
`,Ml=k`
  filter: blur(5px);
`,xn=k`
  ${Il};
  ${Ml};
`,Ol=xn,Dl=k`
  ${xn};
  justify-content: flex-start;
`,J=k`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`,Tl=k`
  ${J};
  align-items: flex-start;
`,pr=c.div`
  white-space: nowrap;
`,Fl=()=>{const{t:e}=b(),t=ce(r=>r.props.value.data.length);return y.useCallback(r=>{const o=r.length;return n.jsxs(Rl,{children:[!o&&n.jsx(ur,{children:e("metricsAcrossAsins.leftActions.unselected",{products:t})}),!!o&&n.jsx(ur,{children:n.jsx(Bl,{children:e("metricsAcrossAsins.leftActions.selected",{products:o})})})]})},[t,e])},Bl=c.div`
  ${Ye};
`,ur=c.div``,Rl=c.div`
  padding-left: ${({theme:e})=>e.spacing.sp8};
`,Nl=()=>{y.useEffect(()=>()=>ce.getState().props.clear(),[])},Wl=e=>{y.useEffect(()=>{ce.getState().props.set(e)},Object.values(e))},Ll=()=>{const{t:e}=b(),[t,r]=ce(o=>[o.props.value.handleOpenMediaComparison,o.props.value.mediaComparisonLocked]);return y.useCallback(()=>n.jsx(_l,{children:t&&n.jsx(Ee,{appendTo:document.body,content:e("metricsAcrossAsins.buttons.mediaComparison.tooltip"),children:n.jsx("div",{children:n.jsx(_r,{buttonType:"secondary",type:"button",locked:r,onClick:t,onLockedClick:t,children:e("metricsAcrossAsins.buttons.mediaComparison.title")})})})}),[e,r,t])},_l=c.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) > * {
    margin-left: ${e=>e.theme.spacing.sp16};
  }
`,Gl=()=>{const e=y.useMemo(()=>({value:Ul}),[]),t=y.useMemo(()=>({itemsPerPage:Vl,noPagination:!0,noFooter:!0,columnDraggable:!0,columnVisible:!0,contentSizeVisible:!0}),[]),r=y.useMemo(()=>({exportable:!1}),[]),o=y.useMemo(()=>({minHeight:100}),[]);return{filter:e,behavior:t,exportable:r,footer:zl,dimensions:o}},zl=()=>n.jsx("div",{id:"metrics-across-asins-footer"}),Ul={count:10,page:1,search:"",sortField:"id",sortDirection:"ASC"},Vl=[11],Ql=({aboveTableComponent:e,selected:t=Kl,leftActions:r,...o})=>{Wl(o),Nl();const[s,i]=ce(f=>[f.props.value.data,f.props.value.status]),l=Pl(),p=Ll(),a=Fl(),d=Gl();return n.jsxs(vn,{children:[n.jsx(zr,{children:e||n.jsx(dl,{})}),n.jsx(Ce,{name:"metrics-across-asins-widget",data:s,status:o.status,total:i==="loaded"?s.length:5,columns:l,leftActions:r||a,rightActions:p,...d,selected:t})]})},vn=c.div`
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
`,Nu=Object.assign(Ql,{Wrapper:vn}),Kl={haveCheckbox:!1};var Hl=Error,Yl=EvalError,ql=RangeError,Jl=ReferenceError,bn=SyntaxError,Oe=TypeError,Zl=URIError,Xl=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},r=Symbol("test"),o=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var s=42;t[r]=s;for(r in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var i=Object.getOwnPropertySymbols(t);if(i.length!==1||i[0]!==r||!Object.prototype.propertyIsEnumerable.call(t,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==s||l.enumerable!==!0)return!1}return!0},dr=typeof Symbol<"u"&&Symbol,ec=Xl,tc=function(){return typeof dr!="function"||typeof Symbol!="function"||typeof dr("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:ec()},fr={foo:{}},rc=Object,nc=function(){return{__proto__:fr}.foo===fr.foo&&!({__proto__:null}instanceof rc)},oc="Function.prototype.bind called on incompatible ",ic=Object.prototype.toString,sc=Math.max,ac="[object Function]",mr=function(t,r){for(var o=[],s=0;s<t.length;s+=1)o[s]=t[s];for(var i=0;i<r.length;i+=1)o[i+t.length]=r[i];return o},lc=function(t,r){for(var o=[],s=r||0,i=0;s<t.length;s+=1,i+=1)o[i]=t[s];return o},cc=function(e,t){for(var r="",o=0;o<e.length;o+=1)r+=e[o],o+1<e.length&&(r+=t);return r},pc=function(t){var r=this;if(typeof r!="function"||ic.apply(r)!==ac)throw new TypeError(oc+r);for(var o=lc(arguments,1),s,i=function(){if(this instanceof s){var f=r.apply(this,mr(o,arguments));return Object(f)===f?f:this}return r.apply(t,mr(o,arguments))},l=sc(0,r.length-o.length),p=[],a=0;a<l;a++)p[a]="$"+a;if(s=Function("binder","return function ("+cc(p,",")+"){ return binder.apply(this,arguments); }")(i),r.prototype){var d=function(){};d.prototype=r.prototype,s.prototype=new d,d.prototype=null}return s},uc=pc,It=Function.prototype.bind||uc,dc=Function.prototype.call,fc=Object.prototype.hasOwnProperty,mc=It,yc=mc.call(dc,fc),x,hc=Hl,gc=Yl,xc=ql,vc=Jl,he=bn,ye=Oe,bc=Zl,Sn=Function,rt=function(e){try{return Sn('"use strict"; return ('+e+").constructor;")()}catch{}},se=Object.getOwnPropertyDescriptor;if(se)try{se({},"")}catch{se=null}var nt=function(){throw new ye},Sc=se?function(){try{return arguments.callee,nt}catch{try{return se(arguments,"callee").get}catch{return nt}}}():nt,de=tc(),wc=nc(),$=Object.getPrototypeOf||(wc?function(e){return e.__proto__}:null),me={},Ac=typeof Uint8Array>"u"||!$?x:$(Uint8Array),ae={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?x:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?x:ArrayBuffer,"%ArrayIteratorPrototype%":de&&$?$([][Symbol.iterator]()):x,"%AsyncFromSyncIteratorPrototype%":x,"%AsyncFunction%":me,"%AsyncGenerator%":me,"%AsyncGeneratorFunction%":me,"%AsyncIteratorPrototype%":me,"%Atomics%":typeof Atomics>"u"?x:Atomics,"%BigInt%":typeof BigInt>"u"?x:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?x:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?x:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?x:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":hc,"%eval%":eval,"%EvalError%":gc,"%Float32Array%":typeof Float32Array>"u"?x:Float32Array,"%Float64Array%":typeof Float64Array>"u"?x:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?x:FinalizationRegistry,"%Function%":Sn,"%GeneratorFunction%":me,"%Int8Array%":typeof Int8Array>"u"?x:Int8Array,"%Int16Array%":typeof Int16Array>"u"?x:Int16Array,"%Int32Array%":typeof Int32Array>"u"?x:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":de&&$?$($([][Symbol.iterator]())):x,"%JSON%":typeof JSON=="object"?JSON:x,"%Map%":typeof Map>"u"?x:Map,"%MapIteratorPrototype%":typeof Map>"u"||!de||!$?x:$(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?x:Promise,"%Proxy%":typeof Proxy>"u"?x:Proxy,"%RangeError%":xc,"%ReferenceError%":vc,"%Reflect%":typeof Reflect>"u"?x:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?x:Set,"%SetIteratorPrototype%":typeof Set>"u"||!de||!$?x:$(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?x:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":de&&$?$(""[Symbol.iterator]()):x,"%Symbol%":de?Symbol:x,"%SyntaxError%":he,"%ThrowTypeError%":Sc,"%TypedArray%":Ac,"%TypeError%":ye,"%Uint8Array%":typeof Uint8Array>"u"?x:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?x:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?x:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?x:Uint32Array,"%URIError%":bc,"%WeakMap%":typeof WeakMap>"u"?x:WeakMap,"%WeakRef%":typeof WeakRef>"u"?x:WeakRef,"%WeakSet%":typeof WeakSet>"u"?x:WeakSet};if($)try{null.error}catch(e){var Cc=$($(e));ae["%Error.prototype%"]=Cc}var jc=function e(t){var r;if(t==="%AsyncFunction%")r=rt("async function () {}");else if(t==="%GeneratorFunction%")r=rt("function* () {}");else if(t==="%AsyncGeneratorFunction%")r=rt("async function* () {}");else if(t==="%AsyncGenerator%"){var o=e("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if(t==="%AsyncIteratorPrototype%"){var s=e("%AsyncGenerator%");s&&$&&(r=$(s.prototype))}return ae[t]=r,r},yr={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},De=It,ze=yc,$c=De.call(Function.call,Array.prototype.concat),kc=De.call(Function.apply,Array.prototype.splice),hr=De.call(Function.call,String.prototype.replace),Ue=De.call(Function.call,String.prototype.slice),Pc=De.call(Function.call,RegExp.prototype.exec),Ec=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Ic=/\\(\\)?/g,Mc=function(t){var r=Ue(t,0,1),o=Ue(t,-1);if(r==="%"&&o!=="%")throw new he("invalid intrinsic syntax, expected closing `%`");if(o==="%"&&r!=="%")throw new he("invalid intrinsic syntax, expected opening `%`");var s=[];return hr(t,Ec,function(i,l,p,a){s[s.length]=p?hr(a,Ic,"$1"):l||i}),s},Oc=function(t,r){var o=t,s;if(ze(yr,o)&&(s=yr[o],o="%"+s[0]+"%"),ze(ae,o)){var i=ae[o];if(i===me&&(i=jc(o)),typeof i>"u"&&!r)throw new ye("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:s,name:o,value:i}}throw new he("intrinsic "+t+" does not exist!")},be=function(t,r){if(typeof t!="string"||t.length===0)throw new ye("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new ye('"allowMissing" argument must be a boolean');if(Pc(/^%?[^%]*%?$/,t)===null)throw new he("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var o=Mc(t),s=o.length>0?o[0]:"",i=Oc("%"+s+"%",r),l=i.name,p=i.value,a=!1,d=i.alias;d&&(s=d[0],kc(o,$c([0,1],d)));for(var f=1,m=!0;f<o.length;f+=1){var u=o[f],h=Ue(u,0,1),v=Ue(u,-1);if((h==='"'||h==="'"||h==="`"||v==='"'||v==="'"||v==="`")&&h!==v)throw new he("property names with quotes must have matching quotes");if((u==="constructor"||!m)&&(a=!0),s+="."+u,l="%"+s+"%",ze(ae,l))p=ae[l];else if(p!=null){if(!(u in p)){if(!r)throw new ye("base intrinsic for "+t+" exists, but the property is not available.");return}if(se&&f+1>=o.length){var S=se(p,u);m=!!S,m&&"get"in S&&!("originalValue"in S.get)?p=S.get:p=p[u]}else m=ze(p,u),p=p[u];m&&!a&&(ae[l]=p)}}return p},wn={exports:{}},ot,gr;function Mt(){if(gr)return ot;gr=1;var e=be,t=e("%Object.defineProperty%",!0)||!1;if(t)try{t({},"a",{value:1})}catch{t=!1}return ot=t,ot}var Dc=be,We=Dc("%Object.getOwnPropertyDescriptor%",!0);if(We)try{We([],"length")}catch{We=null}var An=We,xr=Mt(),Tc=bn,fe=Oe,vr=An,Fc=function(t,r,o){if(!t||typeof t!="object"&&typeof t!="function")throw new fe("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new fe("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new fe("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new fe("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new fe("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new fe("`loose`, if provided, must be a boolean");var s=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,p=arguments.length>6?arguments[6]:!1,a=!!vr&&vr(t,r);if(xr)xr(t,r,{configurable:l===null&&a?a.configurable:!l,enumerable:s===null&&a?a.enumerable:!s,value:o,writable:i===null&&a?a.writable:!i});else if(p||!s&&!i&&!l)t[r]=o;else throw new Tc("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},ht=Mt(),Cn=function(){return!!ht};Cn.hasArrayLengthDefineBug=function(){if(!ht)return null;try{return ht([],"length",{value:1}).length!==1}catch{return!0}};var Bc=Cn,Rc=be,br=Fc,Nc=Bc(),Sr=An,wr=Oe,Wc=Rc("%Math.floor%"),Lc=function(t,r){if(typeof t!="function")throw new wr("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||Wc(r)!==r)throw new wr("`length` must be a positive 32-bit integer");var o=arguments.length>2&&!!arguments[2],s=!0,i=!0;if("length"in t&&Sr){var l=Sr(t,"length");l&&!l.configurable&&(s=!1),l&&!l.writable&&(i=!1)}return(s||i||!o)&&(Nc?br(t,"length",r,!0,!0):br(t,"length",r)),t};(function(e){var t=It,r=be,o=Lc,s=Oe,i=r("%Function.prototype.apply%"),l=r("%Function.prototype.call%"),p=r("%Reflect.apply%",!0)||t.call(l,i),a=Mt(),d=r("%Math.max%");e.exports=function(u){if(typeof u!="function")throw new s("a function is required");var h=p(t,l,arguments);return o(h,1+d(0,u.length-(arguments.length-1)),!0)};var f=function(){return p(t,i,arguments)};a?a(e.exports,"apply",{value:f}):e.exports.apply=f})(wn);var _c=wn.exports,jn=be,$n=_c,Gc=$n(jn("String.prototype.indexOf")),zc=function(t,r){var o=jn(t,!!r);return typeof o=="function"&&Gc(t,".prototype.")>-1?$n(o):o},Ot=typeof Map=="function"&&Map.prototype,it=Object.getOwnPropertyDescriptor&&Ot?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ve=Ot&&it&&typeof it.get=="function"?it.get:null,Ar=Ot&&Map.prototype.forEach,Dt=typeof Set=="function"&&Set.prototype,st=Object.getOwnPropertyDescriptor&&Dt?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Qe=Dt&&st&&typeof st.get=="function"?st.get:null,Cr=Dt&&Set.prototype.forEach,Uc=typeof WeakMap=="function"&&WeakMap.prototype,$e=Uc?WeakMap.prototype.has:null,Vc=typeof WeakSet=="function"&&WeakSet.prototype,ke=Vc?WeakSet.prototype.has:null,Qc=typeof WeakRef=="function"&&WeakRef.prototype,jr=Qc?WeakRef.prototype.deref:null,Kc=Boolean.prototype.valueOf,Hc=Object.prototype.toString,Yc=Function.prototype.toString,qc=String.prototype.match,Tt=String.prototype.slice,ee=String.prototype.replace,Jc=String.prototype.toUpperCase,$r=String.prototype.toLowerCase,kn=RegExp.prototype.test,kr=Array.prototype.concat,L=Array.prototype.join,Zc=Array.prototype.slice,Pr=Math.floor,gt=typeof BigInt=="function"?BigInt.prototype.valueOf:null,at=Object.getOwnPropertySymbols,xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,ge=typeof Symbol=="function"&&typeof Symbol.iterator=="object",E=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===ge||!0)?Symbol.toStringTag:null,Pn=Object.prototype.propertyIsEnumerable,Er=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Ir(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||kn.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var o=e<0?-Pr(-e):Pr(e);if(o!==e){var s=String(o),i=Tt.call(t,s.length+1);return ee.call(s,r,"$&_")+"."+ee.call(ee.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ee.call(t,r,"$&_")}var vt=ao,Mr=vt.custom,Or=In(Mr)?Mr:null,Xc=function e(t,r,o,s){var i=r||{};if(X(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(X(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=X(i,"customInspect")?i.customInspect:!0;if(typeof l!="boolean"&&l!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(X(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(X(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var p=i.numericSeparator;if(typeof t>"u")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return On(t,i);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var a=String(t);return p?Ir(t,a):a}if(typeof t=="bigint"){var d=String(t)+"n";return p?Ir(t,d):d}var f=typeof i.depth>"u"?5:i.depth;if(typeof o>"u"&&(o=0),o>=f&&f>0&&typeof t=="object")return bt(t)?"[Array]":"[Object]";var m=gp(i,o);if(typeof s>"u")s=[];else if(Mn(s,t)>=0)return"[Circular]";function u(B,Y,q){if(Y&&(s=Zc.call(s),s.push(Y)),q){var we={depth:i.depth};return X(i,"quoteStyle")&&(we.quoteStyle=i.quoteStyle),e(B,we,o+1,s)}return e(B,i,o+1,s)}if(typeof t=="function"&&!Dr(t)){var h=lp(t),v=Be(t,u);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(v.length>0?" { "+L.call(v,", ")+" }":"")}if(In(t)){var S=ge?ee.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):xt.call(t);return typeof t=="object"&&!ge?Ae(S):S}if(mp(t)){for(var A="<"+$r.call(String(t.nodeName)),T=t.attributes||[],F=0;F<T.length;F++)A+=" "+T[F].name+"="+En(ep(T[F].value),"double",i);return A+=">",t.childNodes&&t.childNodes.length&&(A+="..."),A+="</"+$r.call(String(t.nodeName))+">",A}if(bt(t)){if(t.length===0)return"[]";var g=Be(t,u);return m&&!hp(g)?"["+St(g,m)+"]":"[ "+L.call(g,", ")+" ]"}if(rp(t)){var R=Be(t,u);return!("cause"in Error.prototype)&&"cause"in t&&!Pn.call(t,"cause")?"{ ["+String(t)+"] "+L.call(kr.call("[cause]: "+u(t.cause),R),", ")+" }":R.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+L.call(R,", ")+" }"}if(typeof t=="object"&&l){if(Or&&typeof t[Or]=="function"&&vt)return vt(t,{depth:f-o});if(l!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(cp(t)){var I=[];return Ar&&Ar.call(t,function(B,Y){I.push(u(Y,t,!0)+" => "+u(B,t))}),Tr("Map",Ve.call(t),I,m)}if(dp(t)){var K=[];return Cr&&Cr.call(t,function(B){K.push(u(B,t))}),Tr("Set",Qe.call(t),K,m)}if(pp(t))return lt("WeakMap");if(fp(t))return lt("WeakSet");if(up(t))return lt("WeakRef");if(op(t))return Ae(u(Number(t)));if(sp(t))return Ae(u(gt.call(t)));if(ip(t))return Ae(Kc.call(t));if(np(t))return Ae(u(String(t)));if(typeof window<"u"&&t===window)return"{ [object Window] }";if(t===so)return"{ [object globalThis] }";if(!tp(t)&&!Dr(t)){var pe=Be(t,u),Te=Er?Er(t)===Object.prototype:t instanceof Object||t.constructor===Object,ne=t instanceof Object?"":"null prototype",H=!Te&&E&&Object(t)===t&&E in t?Tt.call(re(t),8,-1):ne?"Object":"",Fe=Te||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",ue=Fe+(H||ne?"["+L.call(kr.call([],H||[],ne||[]),": ")+"] ":"");return pe.length===0?ue+"{}":m?ue+"{"+St(pe,m)+"}":ue+"{ "+L.call(pe,", ")+" }"}return String(t)};function En(e,t,r){var o=(r.quoteStyle||t)==="double"?'"':"'";return o+e+o}function ep(e){return ee.call(String(e),/"/g,"&quot;")}function bt(e){return re(e)==="[object Array]"&&(!E||!(typeof e=="object"&&E in e))}function tp(e){return re(e)==="[object Date]"&&(!E||!(typeof e=="object"&&E in e))}function Dr(e){return re(e)==="[object RegExp]"&&(!E||!(typeof e=="object"&&E in e))}function rp(e){return re(e)==="[object Error]"&&(!E||!(typeof e=="object"&&E in e))}function np(e){return re(e)==="[object String]"&&(!E||!(typeof e=="object"&&E in e))}function op(e){return re(e)==="[object Number]"&&(!E||!(typeof e=="object"&&E in e))}function ip(e){return re(e)==="[object Boolean]"&&(!E||!(typeof e=="object"&&E in e))}function In(e){if(ge)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!xt)return!1;try{return xt.call(e),!0}catch{}return!1}function sp(e){if(!e||typeof e!="object"||!gt)return!1;try{return gt.call(e),!0}catch{}return!1}var ap=Object.prototype.hasOwnProperty||function(e){return e in this};function X(e,t){return ap.call(e,t)}function re(e){return Hc.call(e)}function lp(e){if(e.name)return e.name;var t=qc.call(Yc.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function Mn(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1}function cp(e){if(!Ve||!e||typeof e!="object")return!1;try{Ve.call(e);try{Qe.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function pp(e){if(!$e||!e||typeof e!="object")return!1;try{$e.call(e,$e);try{ke.call(e,ke)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function up(e){if(!jr||!e||typeof e!="object")return!1;try{return jr.call(e),!0}catch{}return!1}function dp(e){if(!Qe||!e||typeof e!="object")return!1;try{Qe.call(e);try{Ve.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function fp(e){if(!ke||!e||typeof e!="object")return!1;try{ke.call(e,ke);try{$e.call(e,$e)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function mp(e){return!e||typeof e!="object"?!1:typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function On(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return On(Tt.call(e,0,t.maxStringLength),t)+o}var s=ee.call(ee.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,yp);return En(s,"single",t)}function yp(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+Jc.call(t.toString(16))}function Ae(e){return"Object("+e+")"}function lt(e){return e+" { ? }"}function Tr(e,t,r,o){var s=o?St(r,o):L.call(r,", ");return e+" ("+t+") {"+s+"}"}function hp(e){for(var t=0;t<e.length;t++)if(Mn(e[t],`
`)>=0)return!1;return!0}function gp(e,t){var r;if(e.indent==="	")r="	";else if(typeof e.indent=="number"&&e.indent>0)r=L.call(Array(e.indent+1)," ");else return null;return{base:r,prev:L.call(Array(t+1),r)}}function St(e,t){if(e.length===0)return"";var r=`
`+t.prev+t.base;return r+L.call(e,","+r)+`
`+t.prev}function Be(e,t){var r=bt(e),o=[];if(r){o.length=e.length;for(var s=0;s<e.length;s++)o[s]=X(e,s)?t(e[s],e):""}var i=typeof at=="function"?at(e):[],l;if(ge){l={};for(var p=0;p<i.length;p++)l["$"+i[p]]=i[p]}for(var a in e)X(e,a)&&(r&&String(Number(a))===a&&a<e.length||ge&&l["$"+a]instanceof Symbol||(kn.call(/[^\w$]/,a)?o.push(t(a,e)+": "+t(e[a],e)):o.push(a+": "+t(e[a],e))));if(typeof at=="function")for(var d=0;d<i.length;d++)Pn.call(e,i[d])&&o.push("["+t(i[d])+"]: "+t(e[i[d]],e));return o}var Dn=be,Se=zc,xp=Xc,vp=Oe,Re=Dn("%WeakMap%",!0),Ne=Dn("%Map%",!0),bp=Se("WeakMap.prototype.get",!0),Sp=Se("WeakMap.prototype.set",!0),wp=Se("WeakMap.prototype.has",!0),Ap=Se("Map.prototype.get",!0),Cp=Se("Map.prototype.set",!0),jp=Se("Map.prototype.has",!0),Ft=function(e,t){for(var r=e,o;(o=r.next)!==null;r=o)if(o.key===t)return r.next=o.next,o.next=e.next,e.next=o,o},$p=function(e,t){var r=Ft(e,t);return r&&r.value},kp=function(e,t,r){var o=Ft(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}},Pp=function(e,t){return!!Ft(e,t)},Ep=function(){var t,r,o,s={assert:function(i){if(!s.has(i))throw new vp("Side channel does not contain "+xp(i))},get:function(i){if(Re&&i&&(typeof i=="object"||typeof i=="function")){if(t)return bp(t,i)}else if(Ne){if(r)return Ap(r,i)}else if(o)return $p(o,i)},has:function(i){if(Re&&i&&(typeof i=="object"||typeof i=="function")){if(t)return wp(t,i)}else if(Ne){if(r)return jp(r,i)}else if(o)return Pp(o,i);return!1},set:function(i,l){Re&&i&&(typeof i=="object"||typeof i=="function")?(t||(t=new Re),Sp(t,i,l)):Ne?(r||(r=new Ne),Cp(r,i,l)):(o||(o={key:{},next:null}),kp(o,i,l))}};return s},Ip=String.prototype.replace,Mp=/%20/g,ct={RFC1738:"RFC1738",RFC3986:"RFC3986"},Bt={default:ct.RFC3986,formatters:{RFC1738:function(e){return Ip.call(e,Mp,"+")},RFC3986:function(e){return String(e)}},RFC1738:ct.RFC1738,RFC3986:ct.RFC3986},Op=Bt,pt=Object.prototype.hasOwnProperty,ie=Array.isArray,N=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Dp=function(t){for(;t.length>1;){var r=t.pop(),o=r.obj[r.prop];if(ie(o)){for(var s=[],i=0;i<o.length;++i)typeof o[i]<"u"&&s.push(o[i]);r.obj[r.prop]=s}}},Tn=function(t,r){for(var o=r&&r.plainObjects?Object.create(null):{},s=0;s<t.length;++s)typeof t[s]<"u"&&(o[s]=t[s]);return o},Tp=function e(t,r,o){if(!r)return t;if(typeof r!="object"){if(ie(t))t.push(r);else if(t&&typeof t=="object")(o&&(o.plainObjects||o.allowPrototypes)||!pt.call(Object.prototype,r))&&(t[r]=!0);else return[t,r];return t}if(!t||typeof t!="object")return[t].concat(r);var s=t;return ie(t)&&!ie(r)&&(s=Tn(t,o)),ie(t)&&ie(r)?(r.forEach(function(i,l){if(pt.call(t,l)){var p=t[l];p&&typeof p=="object"&&i&&typeof i=="object"?t[l]=e(p,i,o):t.push(i)}else t[l]=i}),t):Object.keys(r).reduce(function(i,l){var p=r[l];return pt.call(i,l)?i[l]=e(i[l],p,o):i[l]=p,i},s)},Fp=function(t,r){return Object.keys(r).reduce(function(o,s){return o[s]=r[s],o},t)},Bp=function(e,t,r){var o=e.replace(/\+/g," ");if(r==="iso-8859-1")return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch{return o}},ut=1024,Rp=function(t,r,o,s,i){if(t.length===0)return t;var l=t;if(typeof t=="symbol"?l=Symbol.prototype.toString.call(t):typeof t!="string"&&(l=String(t)),o==="iso-8859-1")return escape(l).replace(/%u[0-9a-f]{4}/gi,function(h){return"%26%23"+parseInt(h.slice(2),16)+"%3B"});for(var p="",a=0;a<l.length;a+=ut){for(var d=l.length>=ut?l.slice(a,a+ut):l,f=[],m=0;m<d.length;++m){var u=d.charCodeAt(m);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||i===Op.RFC1738&&(u===40||u===41)){f[f.length]=d.charAt(m);continue}if(u<128){f[f.length]=N[u];continue}if(u<2048){f[f.length]=N[192|u>>6]+N[128|u&63];continue}if(u<55296||u>=57344){f[f.length]=N[224|u>>12]+N[128|u>>6&63]+N[128|u&63];continue}m+=1,u=65536+((u&1023)<<10|d.charCodeAt(m)&1023),f[f.length]=N[240|u>>18]+N[128|u>>12&63]+N[128|u>>6&63]+N[128|u&63]}p+=f.join("")}return p},Np=function(t){for(var r=[{obj:{o:t},prop:"o"}],o=[],s=0;s<r.length;++s)for(var i=r[s],l=i.obj[i.prop],p=Object.keys(l),a=0;a<p.length;++a){var d=p[a],f=l[d];typeof f=="object"&&f!==null&&o.indexOf(f)===-1&&(r.push({obj:l,prop:d}),o.push(f))}return Dp(r),t},Wp=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},Lp=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},_p=function(t,r){return[].concat(t,r)},Gp=function(t,r){if(ie(t)){for(var o=[],s=0;s<t.length;s+=1)o.push(r(t[s]));return o}return r(t)},Fn={arrayToObject:Tn,assign:Fp,combine:_p,compact:Np,decode:Bp,encode:Rp,isBuffer:Lp,isRegExp:Wp,maybeMap:Gp,merge:Tp},Bn=Ep,Le=Fn,Pe=Bt,zp=Object.prototype.hasOwnProperty,Rn={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},W=Array.isArray,Up=Array.prototype.push,Nn=function(e,t){Up.apply(e,W(t)?t:[t])},Vp=Date.prototype.toISOString,Fr=Pe.default,j={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:Le.encode,encodeValuesOnly:!1,format:Fr,formatter:Pe.formatters[Fr],indices:!1,serializeDate:function(t){return Vp.call(t)},skipNulls:!1,strictNullHandling:!1},Qp=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},dt={},Kp=function e(t,r,o,s,i,l,p,a,d,f,m,u,h,v,S,A,T,F){for(var g=t,R=F,I=0,K=!1;(R=R.get(dt))!==void 0&&!K;){var pe=R.get(t);if(I+=1,typeof pe<"u"){if(pe===I)throw new RangeError("Cyclic object value");K=!0}typeof R.get(dt)>"u"&&(I=0)}if(typeof f=="function"?g=f(r,g):g instanceof Date?g=h(g):o==="comma"&&W(g)&&(g=Le.maybeMap(g,function(Ze){return Ze instanceof Date?h(Ze):Ze})),g===null){if(l)return d&&!A?d(r,j.encoder,T,"key",v):r;g=""}if(Qp(g)||Le.isBuffer(g)){if(d){var Te=A?r:d(r,j.encoder,T,"key",v);return[S(Te)+"="+S(d(g,j.encoder,T,"value",v))]}return[S(r)+"="+S(String(g))]}var ne=[];if(typeof g>"u")return ne;var H;if(o==="comma"&&W(g))A&&d&&(g=Le.maybeMap(g,d)),H=[{value:g.length>0?g.join(",")||null:void 0}];else if(W(f))H=f;else{var Fe=Object.keys(g);H=m?Fe.sort(m):Fe}var ue=a?r.replace(/\./g,"%2E"):r,B=s&&W(g)&&g.length===1?ue+"[]":ue;if(i&&W(g)&&g.length===0)return B+"[]";for(var Y=0;Y<H.length;++Y){var q=H[Y],we=typeof q=="object"&&typeof q.value<"u"?q.value:g[q];if(!(p&&we===null)){var Je=u&&a?q.replace(/\./g,"%2E"):q,Ln=W(g)?typeof o=="function"?o(B,Je):B:B+(u?"."+Je:"["+Je+"]");F.set(t,I);var Rt=Bn();Rt.set(dt,F),Nn(ne,e(we,Ln,o,s,i,l,p,a,o==="comma"&&A&&W(g)?null:d,f,m,u,h,v,S,A,T,Rt))}}return ne},Hp=function(t){if(!t)return j;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.encodeDotInKeys<"u"&&typeof t.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(t.encoder!==null&&typeof t.encoder<"u"&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=t.charset||j.charset;if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=Pe.default;if(typeof t.format<"u"){if(!zp.call(Pe.formatters,t.format))throw new TypeError("Unknown format option provided.");o=t.format}var s=Pe.formatters[o],i=j.filter;(typeof t.filter=="function"||W(t.filter))&&(i=t.filter);var l;if(t.arrayFormat in Rn?l=t.arrayFormat:"indices"in t?l=t.indices?"indices":"repeat":l=j.arrayFormat,"commaRoundTrip"in t&&typeof t.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var p=typeof t.allowDots>"u"?t.encodeDotInKeys===!0?!0:j.allowDots:!!t.allowDots;return{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:j.addQueryPrefix,allowDots:p,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:j.allowEmptyArrays,arrayFormat:l,charset:r,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:j.charsetSentinel,commaRoundTrip:t.commaRoundTrip,delimiter:typeof t.delimiter>"u"?j.delimiter:t.delimiter,encode:typeof t.encode=="boolean"?t.encode:j.encode,encodeDotInKeys:typeof t.encodeDotInKeys=="boolean"?t.encodeDotInKeys:j.encodeDotInKeys,encoder:typeof t.encoder=="function"?t.encoder:j.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:j.encodeValuesOnly,filter:i,format:o,formatter:s,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:j.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:j.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:j.strictNullHandling}},Yp=function(e,t){var r=e,o=Hp(t),s,i;typeof o.filter=="function"?(i=o.filter,r=i("",r)):W(o.filter)&&(i=o.filter,s=i);var l=[];if(typeof r!="object"||r===null)return"";var p=Rn[o.arrayFormat],a=p==="comma"&&o.commaRoundTrip;s||(s=Object.keys(r)),o.sort&&s.sort(o.sort);for(var d=Bn(),f=0;f<s.length;++f){var m=s[f];o.skipNulls&&r[m]===null||Nn(l,Kp(r[m],m,p,a,o.allowEmptyArrays,o.strictNullHandling,o.skipNulls,o.encodeDotInKeys,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,d))}var u=l.join(o.delimiter),h=o.addQueryPrefix===!0?"?":"";return o.charsetSentinel&&(o.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),u.length>0?h+u:""},xe=Fn,wt=Object.prototype.hasOwnProperty,qp=Array.isArray,w={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:xe.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Jp=function(e){return e.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},Wn=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},Zp="utf8=%26%2310003%3B",Xp="utf8=%E2%9C%93",eu=function(t,r){var o={__proto__:null},s=r.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=r.parameterLimit===1/0?void 0:r.parameterLimit,l=s.split(r.delimiter,i),p=-1,a,d=r.charset;if(r.charsetSentinel)for(a=0;a<l.length;++a)l[a].indexOf("utf8=")===0&&(l[a]===Xp?d="utf-8":l[a]===Zp&&(d="iso-8859-1"),p=a,a=l.length);for(a=0;a<l.length;++a)if(a!==p){var f=l[a],m=f.indexOf("]="),u=m===-1?f.indexOf("="):m+1,h,v;u===-1?(h=r.decoder(f,w.decoder,d,"key"),v=r.strictNullHandling?null:""):(h=r.decoder(f.slice(0,u),w.decoder,d,"key"),v=xe.maybeMap(Wn(f.slice(u+1),r),function(A){return r.decoder(A,w.decoder,d,"value")})),v&&r.interpretNumericEntities&&d==="iso-8859-1"&&(v=Jp(v)),f.indexOf("[]=")>-1&&(v=qp(v)?[v]:v);var S=wt.call(o,h);S&&r.duplicates==="combine"?o[h]=xe.combine(o[h],v):(!S||r.duplicates==="last")&&(o[h]=v)}return o},tu=function(e,t,r,o){for(var s=o?t:Wn(t,r),i=e.length-1;i>=0;--i){var l,p=e[i];if(p==="[]"&&r.parseArrays)l=r.allowEmptyArrays&&s===""?[]:[].concat(s);else{l=r.plainObjects?Object.create(null):{};var a=p.charAt(0)==="["&&p.charAt(p.length-1)==="]"?p.slice(1,-1):p,d=r.decodeDotInKeys?a.replace(/%2E/g,"."):a,f=parseInt(d,10);!r.parseArrays&&d===""?l={0:s}:!isNaN(f)&&p!==d&&String(f)===d&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(l=[],l[f]=s):d!=="__proto__"&&(l[d]=s)}s=l}return s},ru=function(t,r,o,s){if(t){var i=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,l=/(\[[^[\]]*])/,p=/(\[[^[\]]*])/g,a=o.depth>0&&l.exec(i),d=a?i.slice(0,a.index):i,f=[];if(d){if(!o.plainObjects&&wt.call(Object.prototype,d)&&!o.allowPrototypes)return;f.push(d)}for(var m=0;o.depth>0&&(a=p.exec(i))!==null&&m<o.depth;){if(m+=1,!o.plainObjects&&wt.call(Object.prototype,a[1].slice(1,-1))&&!o.allowPrototypes)return;f.push(a[1])}return a&&f.push("["+i.slice(a.index)+"]"),tu(f,r,o,s)}},nu=function(t){if(!t)return w;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.decodeDotInKeys<"u"&&typeof t.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(t.decoder!==null&&typeof t.decoder<"u"&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof t.charset>"u"?w.charset:t.charset,o=typeof t.duplicates>"u"?w.duplicates:t.duplicates;if(o!=="combine"&&o!=="first"&&o!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var s=typeof t.allowDots>"u"?t.decodeDotInKeys===!0?!0:w.allowDots:!!t.allowDots;return{allowDots:s,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:w.allowEmptyArrays,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:w.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:w.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:w.arrayLimit,charset:r,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:w.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:w.comma,decodeDotInKeys:typeof t.decodeDotInKeys=="boolean"?t.decodeDotInKeys:w.decodeDotInKeys,decoder:typeof t.decoder=="function"?t.decoder:w.decoder,delimiter:typeof t.delimiter=="string"||xe.isRegExp(t.delimiter)?t.delimiter:w.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:w.depth,duplicates:o,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:w.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:w.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:w.plainObjects,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:w.strictNullHandling}},ou=function(e,t){var r=nu(t);if(e===""||e===null||typeof e>"u")return r.plainObjects?Object.create(null):{};for(var o=typeof e=="string"?eu(e,r):e,s=r.plainObjects?Object.create(null):{},i=Object.keys(o),l=0;l<i.length;++l){var p=i[l],a=ru(p,o[p],r,typeof e=="string");s=xe.merge(s,a,r)}return r.allowSparse===!0?s:xe.compact(s)},iu=Yp,su=ou,au=Bt,Wu={formats:au,parse:su,stringify:iu};export{Ou as C,di as E,Fu as K,Bu as L,Ru as M,Mu as S,Eu as T,Nu as a,Iu as b,Tu as c,Du as d,Ge as e,Wu as l};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/html2pdf.es-XOAB1vFe.js","static/index-tEWTe_cM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-LVl8fC0e.js.map
