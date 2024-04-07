import{u as o,a1 as f,j as a,bc as M,E as G,w as k,de as Q,au as V,x as F,f as Z,A as K,bl as X,ak as ee,a5 as te,aF as C,r as v,c9 as ae,bd as re,df as W,a2 as E,cI as se,N as le,$ as oe,a as O,Q as q,e7 as ce}from"./index-VVIvRZBh.js";import{v as ne,p as ie,i as de,R as ue,u as pe}from"./middleware-KgP9JdWn.js";import{aR as me,aS as ge,Z as xe,J as R}from"./Learn-nfpDmxZa.js";import{f as y}from"./useAutoPlay-JZxKBgmm.js";var he=["years","months","weeks","days","hours","minutes","seconds"];function ve(t,r){var e,c,i,s,d;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var m=ge(),p=(e=(c=r==null?void 0:r.locale)!==null&&c!==void 0?c:m.locale)!==null&&e!==void 0?e:me,g=(i=r==null?void 0:r.format)!==null&&i!==void 0?i:he,h=(s=r==null?void 0:r.zero)!==null&&s!==void 0?s:!1,l=(d=r==null?void 0:r.delimiter)!==null&&d!==void 0?d:" ";if(!p.formatDistance)return"";var u=g.reduce(function(x,b){var I="x".concat(b.replace(/(^.)/,function(j){return j.toUpperCase()})),w=t[b];return typeof w=="number"&&(h||t[b])?x.concat(p.formatDistance(I,w)):x},[]).join(l);return u}const T=({text:t,link:r,rightIcon:e})=>a.jsxs(be,{href:r,target:"_blank",rel:"noreferrer",children:[a.jsx(J,{text:t}),e]}),J=({text:t,className:r})=>{const{isOverflown:e,checkOverflown:c}=M();return a.jsx(G,{content:t,disabled:e,children:a.jsx(Y,{onMouseEnter:c,className:r,children:t})})},Y=o.div`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`,be=o.a`
  ${f};
  overflow: visible;
  display: inline-flex;
  gap: ${({theme:t})=>t.spacing.sp4};
  color: ${({theme:t})=>t.systemColors.blue600};
  line-height: 1.29;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({theme:t})=>t.systemColors.blue800};
  }
`,ye=({asin:t})=>{const{t:r}=k();return a.jsxs(we,{children:[t,a.jsx(Q,{size:"50",beforeCopyContent:r("productSummary.copy",{label:"ASIN"}),afterCopyContent:a.jsxs(je,{children:[a.jsx(Se,{}),r("productSummary.copied",{label:"ASIN"})]}),copyContent:t})]})},we=o.div`
  margin-bottom: ${({theme:t})=>t.spacing.sp4};
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sp4};
`,je=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`,Se=o(F).attrs({icon:V})`
  margin-right: 8px;
  font-size: 16px;
  height: 16px;
  color: ${({theme:t})=>t.systemColors.green400};
`,Ie=async t=>(await Z({method:"GET",url:ne,useSessionAccountId:!0,params:t})).data[t.asin],$e={1:"Amazon",2:"FBA",3:"FBM"},Te="UI_PRODUCT_IMAGE_TOOLTIP",S=K()(ie((t,r)=>({productData:{},tooltipEnabled:!0}),{name:Te,partialize:t=>({tooltipEnabled:t.tooltipEnabled})})),A=X(S,"productData",async({key:t,params:r})=>Ie({asin:t,accountId:te()||"",marketplaceId:C("store",r.marketplace||"").id})),N=ee(S,"tooltipEnabled"),ke=(t,r)=>{const e=S(p=>p.productData[t]),{currency:c,domain:i}=C("store",r),{t:s}=k(),d=v.useMemo(()=>{var p,g,h,l,u,x;return[{field:a.jsx(T,{text:(e==null?void 0:e.categoryTitle)||"",link:(e==null?void 0:e.bestSellersUrl)||""}),value:`#${e==null?void 0:e.salesRank}`},{field:a.jsx(T,{text:((g=(p=e==null?void 0:e.subcategories)==null?void 0:p[0])==null?void 0:g.nodeName)||"",link:((l=(h=e==null?void 0:e.subcategories)==null?void 0:h[0])==null?void 0:l.subcategoryUrl)||""}),value:`#${(x=(u=e==null?void 0:e.subcategories)==null?void 0:u[0])==null?void 0:x.subcategoryBsr}`},{field:s("productSummary.productImageTooltip.fulfilment"),value:$e[e==null?void 0:e.sellerType]||"N/A"},{field:s("productSummary.productImageTooltip.sellerCount"),value:y({value:e==null?void 0:e.numberOfSellers})},{field:s("productSummary.productImageTooltip.variations"),value:y({value:e==null?void 0:e.variationCount})},{field:s("productSummary.productImageTooltip.listingAge"),value:ve(de({start:e!=null&&e.age?(e==null?void 0:e.age)*1e3:new Date,end:new Date}),{format:["years","months"]})},{field:s("productSummary.productImageTooltip.listingImages"),value:y({value:e==null?void 0:e.numberOfImages})}]},[e==null?void 0:e.age,e==null?void 0:e.bestSellersUrl,e==null?void 0:e.categoryTitle,e==null?void 0:e.numberOfImages,e==null?void 0:e.numberOfSellers,e==null?void 0:e.salesRank,e==null?void 0:e.sellerType,e==null?void 0:e.subcategories,e==null?void 0:e.variationCount,s]),m=v.useMemo(()=>[{field:s("productSummary.productImageTooltip.brand"),value:a.jsx(J,{text:(e==null?void 0:e.brand)||""})},{field:s("productSummary.productImageTooltip.seller"),value:a.jsx(T,{text:(e==null?void 0:e.bbSeller)||"",link:e!=null&&e.sellerUrl?`https://${e==null?void 0:e.sellerUrl}`:"",rightIcon:a.jsxs(Fe,{children:[a.jsx(ae,{children:re[i]}),a.jsx(F,{icon:W})]})})},{field:s("productSummary.productImageTooltip.monthlyUnitSales"),value:(e==null?void 0:e.monthlySales)>=0?y({value:e==null?void 0:e.monthlySales}):"-"},{field:s("productSummary.productImageTooltip.price"),value:(e==null?void 0:e.price)>=0?E({amount:c==="JPY"?e==null?void 0:e.price:(e==null?void 0:e.price)/100,currency:c}):"-"},{field:s("productSummary.productImageTooltip.FBAFee"),value:(e==null?void 0:e.fbaFee)>=0?E({amount:c==="JPY"?e==null?void 0:e.fbaFee:(e==null?void 0:e.fbaFee)/100,currency:c}):"-"},{field:s("productSummary.productImageTooltip.rating"),value:a.jsx(ue,{noText:!0,numberOfReviews:Number.parseFloat(e==null?void 0:e.reviewsRating),showInline:!0,value:Number.parseFloat(e==null?void 0:e.reviewsRating)})},{field:s("productSummary.productImageTooltip.reviewCount"),value:y({value:e==null?void 0:e.reviewCount})}],[c,i,e==null?void 0:e.bbSeller,e==null?void 0:e.brand,e==null?void 0:e.fbaFee,e==null?void 0:e.monthlySales,e==null?void 0:e.price,e==null?void 0:e.reviewCount,e==null?void 0:e.reviewsRating,e==null?void 0:e.sellerUrl,s]);return{leftFields:d,rightFields:m}},Fe=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sp4};
  font-size: ${({theme:t})=>t.spacing.sp16};
`,Ce=({asin:t,marketplace:r,defaultImageSrc:e,tool:c,disableExtendedProductSummary:i,onChangeProductDetailsType:s})=>{const{t:d}=k(),{isOverflown:m,checkOverflown:p}=M(),{sendSegmentEvent:g}=pe({}),{domain:h}=C("store",r),[l,u]=S(se(n=>[n.productData[t],n.tooltipEnabled])),x=A(t,n=>n.status),{leftFields:b,rightFields:I}=ke(t,r),w=`https://${h}/dp/${t}`;v.useEffect(()=>{typeof i=="boolean"&&!i!==u&&N.set(!i)},[i,u]),v.useEffect(()=>{A.action([{key:t,params:{marketplace:r}}]),g({name:"ASIN Hover View",properties:{tool:c,state:u?"show":"hide"}}).then()},[t,r,g,c]);const j=v.useCallback(n=>{N.set(n),s==null||s(n)},[s]);return a.jsx(Oe,{$size:u&&l?"big":"small",children:a.jsxs(xe,{status:x,error:a.jsx(a.Fragment,{children:a.jsx(L,{children:a.jsx(P,{src:e})})}),children:[u&&l&&a.jsxs(a.Fragment,{children:[a.jsx(G,{content:l==null?void 0:l.title,disabled:m,children:a.jsx(Ee,{onMouseEnter:p,children:l==null?void 0:l.title})}),a.jsxs(Re,{children:[a.jsxs(Ne,{children:[a.jsx(ye,{asin:t}),a.jsx(De,{src:l==null?void 0:l.imageUrl})]}),a.jsx(U,{children:b.map(({field:n,value:$},H)=>a.jsxs(_,{children:[a.jsx(z,{children:n}),a.jsx(B,{children:$})]},"leftFields"+H))}),a.jsx(U,{children:I.map(({field:n,value:$})=>a.jsxs(_,{children:[a.jsx(z,{children:n}),a.jsx(B,{children:$})]},n))})]}),a.jsxs(Ae,{children:[a.jsx(R,{checked:u,onChange:n=>j(n.target.checked),children:a.jsx(D,{children:d("productSummary.productImageTooltip.showListing")})}),a.jsx(Ue,{href:w,target:"_blank",rel:"noreferrer",children:a.jsx(le,{nonce:"link",$size:"100",$buttonType:"text",rightIcon:a.jsx(F,{icon:W}),children:d("productSummary.productImageTooltip.openOnAmazon")})})]})]}),(!u||!l)&&a.jsxs(a.Fragment,{children:[a.jsx(L,{children:a.jsx(P,{src:(l==null?void 0:l.imageUrl)||e})}),l&&a.jsx(R,{checked:u,onChange:n=>j(n.target.checked),children:a.jsx(D,{children:d("productSummary.productImageTooltip.showListing")})})]})]})})},Ee=o.div`
  ${oe};
  margin-bottom: ${({theme:t})=>t.spacing.sp8};
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Oe=o.div`
  ${({$size:t,theme:r})=>t==="big"?O`
          padding: ${r.spacing.sp8} ${r.spacing.sp8} 0 ${r.spacing.sp8};
          min-width: 589px;
          min-height: 250px;
        `:O`
          min-width: 172px;
          min-height: 172px;
        `};
`,D=o.span`
  ${q};
`,Re=o.div`
  display: grid;
  grid-template-columns: 125px 200px 200px;
  gap: ${({theme:t})=>t.spacing.sp24};
`,Ae=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:t})=>t.spacing.sp8};
`,Ne=o.div``,U=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sp4};
`,_=o.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.sp16};
`,z=o.div`
  ${f};

  ${Y} {
    text-align: left;
  }
`,B=o.div`
  ${q};
`,De=o.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`,Ue=o.a`
  align-items: center;
  text-decoration: none;
  display: block;
  margin-left: ${({theme:t})=>t.spacing.sp4};
`,L=o.div`
  width: 171px;
  height: 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:t})=>t.spacing.sp8};
`,P=o.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`,_e=v.memo(({marketplace:t,imageTooltipContent:r,tool:e,imageTooltipOptions:c,disableExtendedProductSummary:i,onChangeProductDetailsType:s,...d})=>{var m,p;return a.jsx(ce,{imageTooltipContent:r??a.jsx(Ce,{asin:((m=d.product)==null?void 0:m.asin)||"",marketplace:t,defaultImageSrc:(p=d.product)==null?void 0:p.imageSrc,disableExtendedProductSummary:i,onChangeProductDetailsType:s,tool:e}),imageTooltipOptions:{interactive:!0,maxWidth:605,placement:"top-start",...c},marketplace:t,...d})}),ze=Object.assign(_e,{}),Me=ze;export{ze as E,J as L,Me as N,Ce as P};
//# sourceMappingURL=ExtendedProductSummary-2sO78FPU.js.map
