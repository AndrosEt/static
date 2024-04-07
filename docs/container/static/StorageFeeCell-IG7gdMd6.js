import{a as m,u as i,K as z,aP as x,j as e,bk as R,N as k,x as N,bI as E,cg as M,ch as I,E as c,a2 as C,Q as j,bc as f,Y as _,r as L}from"./index-VVIvRZBh.js";import{T as g}from"./SearchGraphModal-EAp81elq.js";import{f as d}from"./useAutoPlay-JZxKBgmm.js";import{R as Y}from"./middleware-KgP9JdWn.js";const J={1:m`
    background-color: ${t=>t.theme.systemColors.green100};
  `,2:m`
    background-color: ${t=>t.theme.systemColors.green400};
  `,3:m`
    background-color: ${t=>t.theme.systemColors.green600};
  `,4:m`
    background-color: ${t=>t.theme.systemColors.green800};
  `},K=i.div`
  width: 16px;
  height: 10px;
  border-radius: 6px;
  ${t=>J[t.percentile]}
`,Q=({leastTitle:t,leastTooltip:n,mostTitle:s,mostTooltip:o,useDefaultTitles:r=!1,useDefaultTooltips:l=!1})=>{const{t:a}=x(),h=r?a("opportunity.least"):t,u=l?a("opportunity.leastTooltip"):n,$=r?a("opportunity.most"):s,W=l?a("opportunity.mostTooltip"):o;return e.jsxs(D,{children:[!!h&&e.jsx(g,{appendTo:document.body,content:u||a("opportunity.leastTooltip"),children:e.jsx(T,{children:h})}),e.jsx(A,{children:U.map(S=>e.jsx(K,{percentile:S},S))}),!!W&&e.jsx("div",{children:e.jsx(g,{appendTo:document.body,content:W,children:e.jsx(T,{children:$})})})]})},U=[1,2,3,4],D=i.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp16};
`,T=i.div`
  ${z};
`,A=i.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp4};
`,je=Object.assign(Q,{Wrapper:D,ChipsWrapper:A,Text:T}),y=({firstWidth:t,secondWidth:n,contentPosition:s="left"})=>e.jsxs(q,{contentPosition:s,children:[e.jsx(G,{$width:t}),n!=null&&e.jsx(H,{$width:n})]}),q=i.div`
  display: flex;
  flex-direction: column;
  align-items: ${t=>t.contentPosition==="left"?"flex-start":"flex-end"};
`,G=i(R)`
  height: 14px;
`,H=i(R)`
  height: 14px;
  margin-top: ${t=>t.theme.spacing.sp8};
`,v=({onClick:t,disabled:n})=>e.jsx(k,{type:"button",buttonType:"icon",size:"50",icon:e.jsx(N,{icon:E}),onClick:t,disabled:n}),b=({value:t})=>t!=null&&t!==0?e.jsx(V,{rise:t>0,children:e.jsx(N,{icon:t>0?M:I})}):null,V=i.div`
  font-size: 14px;
  display: flex;
  align-items: center;

  svg {
    color: ${t=>t.rise?t.theme.systemColors.green400:t.theme.systemColors.orange400};
  }
`;i.div`
  line-height: 14px;
`;const ge=({price:t,priceChange:n,currency:s,advanced:o=!0,onClickChart:r,status:l="loaded"})=>{const{t:a}=x();return l==="loading"?e.jsx(y,{firstWidth:52,secondWidth:o?32:void 0,contentPosition:"right"}):t!=null&&s!=null?e.jsxs(X,{children:[e.jsxs(w,{children:[e.jsx(c,{content:a("cells.price.priceTooltip"),maxWidth:500,delay:0,children:e.jsx("div",{children:C({amount:s!=="JPY"?t/100:t,currency:s})})}),e.jsx(v,{onClick:r})]}),o&&e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{content:a("cells.price.priceTrendTooltip"),maxWidth:500,delay:0,children:n!=null?e.jsxs("div",{children:[d({value:n,maximumFractionDigits:0}),"%"]}):e.jsx(F,{children:"-"})}),n!=null&&e.jsx(b,{value:n})]})})]}):e.jsx(e.Fragment,{children:"-"})},X=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,fe=m`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`,B=i.div`
  display: flex;
  align-items: center;
`,w=i(B)`
  ${j};
  color: ${({theme:t})=>t.systemColors.grey800};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  gap: ${({theme:t})=>t.spacing.sp8};
`,p=i(B)`
  ${j};
  margin-top: 2px;
  gap: ${({theme:t})=>t.spacing.sp8};
`,F=i.div`
  line-height: 14px;
`,ye=({category:t,bestSellersUrl:n,salesRank:s,subcategories:o,advanced:r=!0,onClickChart:l,status:a="loaded"})=>{const{t:h}=x(),{isOverflown:u,checkOverflown:$}=f();return a==="loading"?e.jsx(y,{firstWidth:150,secondWidth:r?100:void 0}):e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(g,{content:u?void 0:t,placement:"top",appendTo:document.body,maxWidth:500,delay:0,zIndex:1e3,children:e.jsx(O,{buttonType:"text",size:"100",type:"button",onMouseEnter:$,as:"a",href:n,disabled:n==null,target:"_blank",rel:"noreferrer",children:t})}),e.jsx(c,{content:h("cells.categoryBSR.mainCategoryTooltip"),maxWidth:500,delay:0,children:e.jsx(se,{children:s!=null?`#${d({value:s})}`:"N/A"})}),e.jsx(v,{onClick:l,disabled:s==null})]}),e.jsx(Z,{subcategories:o,advanced:r})]})},Z=({advanced:t,subcategories:n})=>{const{t:s}=x(),{isOverflown:o,checkOverflown:r}=f(),l=n[0]||{};return t?e.jsx(ne,{children:l.nodeName?e.jsxs(e.Fragment,{children:[e.jsx(g,{content:o?void 0:l.nodeName,children:e.jsx(le,{$buttonType:"text",size:"50",type:"button",href:l.subcategoryUrl,target:"_blank",rel:"noreferrer",onMouseEnter:r,as:"a",children:l.nodeName})}),e.jsx(c,{content:s("cells.categoryBSR.subcategoryTooltip"),maxWidth:500,delay:0,children:e.jsxs(ie,{children:["#",d({value:l.subcategoryBsr})]})})]}):e.jsx("div",{children:"N/A"})}):null},ee=i.div`
  max-width: 100%;
`,te=i(w)`
  display: flex;
  justify-content: flex-end;
`,ne=i(p)`
  display: flex;
  justify-content: flex-end;
`,O=i(k)`
  min-width: 0;
  padding: 0;
  min-height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
  flex-grow: 0;
  flex-shrink: 1;
`,se=i.div`
  color: ${({theme:t})=>t.systemColors.grey800};
`,ie=i.div`
  ${_};
  color: ${({theme:t})=>t.systemColors.grey800};
  min-width: 0;
`,le=i(O)`
  font-size: 12px;
  min-height: 14px;
  line-height: 14px;
`,ve=({yearSales:t,salesYearOverYear:n,advanced:s})=>{const{t:o}=x();return e.jsxs(e.Fragment,{children:[e.jsx(c,{content:o("cells.lastYearSales.salesTooltip"),maxWidth:500,delay:0,children:e.jsx(w,{children:t!=null?t!==-1?d({value:t,maximumFractionDigits:2}):"N/A":"-"})}),s&&e.jsx(c,{content:o("cells.lastYearSales.salesYearOverYearTooltip"),maxWidth:500,delay:0,children:e.jsx(p,{children:n!=null?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:d({value:n,maximumFractionDigits:2})+"%"}),e.jsx(b,{value:n})]}):"-"})})]})},we=({monthlySales:t,monthlySalesChange:n,advanced:s=!0,onClickChart:o,status:r="loaded"})=>{const{t:l}=x();return r==="loading"?e.jsx(y,{firstWidth:100,secondWidth:s?80:void 0,contentPosition:"right"}):t!=null?e.jsxs(oe,{children:[e.jsxs(w,{children:[e.jsx(c,{content:l("cells.monthlySales.salesTooltip"),maxWidth:500,delay:0,children:e.jsx("div",{children:d({value:t})})}),e.jsx(v,{onClick:o})]}),s&&e.jsx(p,{children:n!=null?e.jsxs(e.Fragment,{children:[e.jsx(c,{content:l("cells.monthlySales.salesTrendTooltip"),maxWidth:500,delay:0,children:e.jsxs("div",{children:[d({value:n,maximumFractionDigits:0}),"%"]})}),e.jsx(b,{value:n})]}):e.jsx(F,{children:"-"})})]}):e.jsx(e.Fragment,{children:"-"})},oe=i.div``,$e=({reviewCount:t,rating:n,advanced:s=!0,onClickChart:o,status:r="loaded"})=>{const{t:l}=x();return r==="loading"?e.jsx(y,{firstWidth:120,secondWidth:s?100:void 0}):e.jsxs(re,{children:[e.jsx(c,{content:l("cells.reviews.reviewRatingTooltip"),maxWidth:500,delay:0,children:e.jsx(p,{children:n!=null&&n!==-1?e.jsx(Y,{value:n,noText:!0}):e.jsx(F,{children:"-"})})}),s&&e.jsxs(ce,{children:[e.jsx(ae,{children:n!=null&&n!==-1?d({value:n,minimumFractionDigits:1,maximumFractionDigits:1}):"N/A"}),e.jsx(c,{content:l("cells.reviews.numberOfReviewTooltip"),maxWidth:500,delay:0,children:e.jsxs(de,{children:["(",t!=null&&t!==-1?d({value:t,maximumFractionDigits:0}):"N/A",")"]})}),t!=null&&t!==-1&&e.jsx(v,{onClick:o})]})]})},re=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,ce=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sp4};
`,ae=i.div`
  ${j};
  color: ${({theme:t})=>t.systemColors.grey800};
`,de=i.div`
  ${j};
  color: ${({theme:t})=>t.systemColors.grey600};
`,Ce=({seller:t,numberOfSellers:n,advanced:s})=>{const{t:o}=x(),{isOverflown:r,checkOverflown:l}=f();return e.jsxs(e.Fragment,{children:[e.jsx(c,{content:e.jsxs(e.Fragment,{children:[o("cells.seller.sellerNameTooltip"),r?void 0:e.jsxs(e.Fragment,{children:[e.jsx("br",{}),t]})]}),maxWidth:500,delay:0,children:e.jsx(P,{onMouseEnter:l,children:t})}),s&&e.jsx(c,{content:o("cells.seller.numberOfSellersTooltip"),maxWidth:500,delay:0,children:e.jsx(p,{children:n!=null&&n!==-1?n:"-"})})]})},P=i.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Te=m`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,be=({sizeTier:t,width:n,height:s,length:o,advanced:r})=>{const{t:l}=x(),{isOverflown:a,checkOverflown:h}=f(),u=t!=null?l(`sizeTier.${t}`):"-";return e.jsxs(e.Fragment,{children:[e.jsx(c,{content:e.jsxs(e.Fragment,{children:[l("cells.shippingDetails.productSizeTooltip"),a?void 0:e.jsxs(e.Fragment,{children:[e.jsx("br",{}),u]})]}),maxWidth:500,delay:0,children:e.jsx(P,{onMouseEnter:h,children:u})}),r&&e.jsx(c,{content:l("cells.shippingDetails.dimensionsTooltip"),maxWidth:500,delay:0,children:e.jsx(p,{children:`${n!=null&&n!==-1?d({value:n,minimumFractionDigits:2,maximumFractionDigits:2}):"N/A"}" x ${s!=null&&s!==-1?d({value:s,minimumFractionDigits:2,maximumFractionDigits:2}):"N/A"}" x ${o!=null&&o!==-1?d({value:o,minimumFractionDigits:2,maximumFractionDigits:2}):"N/A"}"`})})]})},xe=[-1,...[...new Array(23)].map((t,n)=>n+1)],Fe=()=>{const{t}=x();return L.useMemo(()=>xe.reduce((n,s)=>({...n,[s]:t(`sizeTier.${s}`)}),{}),[t])},We=({storageFee:t,currency:n})=>{const{t:s}=x();return t!=null?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[C({amount:t.janSept||0,currency:n})," ","(",s("storageFee.janSept"),")"]}),e.jsxs("div",{children:["",C({amount:t.octDec||0,currency:n})," ","(",s("storageFee.octDec"),")"]})]}):e.jsx(e.Fragment,{children:"N/A"})},Se=m`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${j};
  color: ${({theme:t})=>t.systemColors.black};
  padding: 8px 16px;
`;export{ye as C,F as E,ve as L,we as M,K as O,ge as P,$e as R,be as S,We as a,je as b,w as c,p as d,Ce as e,P as f,Se as g,J as o,fe as p,Te as s,Fe as u};
//# sourceMappingURL=StorageFeeCell-IG7gdMd6.js.map
