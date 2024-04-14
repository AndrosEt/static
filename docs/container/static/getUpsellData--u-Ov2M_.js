import{r as w,j as o,u as s,a as c,a1 as k,y as g,x as y,eZ as A,fU as G,E as X,c7 as Z,w as _,fV as Y,bH as q,au as B,Q as f,I as b,K as J,Y as z,$ as ee,bN as oe,aF as te,f as se,g as le,P as re}from"./index-VVIvRZBh.js";import{a3 as I}from"./Learn-nfpDmxZa.js";import{m as D,P as F,n as M,R as P,W as O}from"./middleware-KgP9JdWn.js";import{Q as S}from"./NewRadio-yIsEqEsT.js";import{o as ie}from"./useAutoPlay-JZxKBgmm.js";const ne=(e,t,r,i)=>{const a=l=>{var x;l.type==="CLOSE"?t({isOpen:!1,data:i!=null&&i.doNotClearOnClose?r().data:e}):l.type==="OPEN"?t({isOpen:!0,...l.payload?{data:l.payload}:{data:e}}):l.type==="TOGGLE"?t({isOpen:!r().isOpen,data:r().isOpen||i!=null&&i.doNotClearOnClose?r().data:e}):l.type==="SET_DATA"&&t({isOpen:r().isOpen,data:l.payload}),(x=i==null?void 0:i.reaction)==null||x.call(i,l)};return{atom:{data:e,isOpen:!1},open:(...l)=>a(e!==void 0?{type:"OPEN",payload:l[0],meta:l[1]}:{type:"OPEN",payload:e,meta:l[0]}),close:(...l)=>a({type:"CLOSE",meta:l==null?void 0:l[0]}),action:a}},We=(e,t,r,i,a)=>({[r]:ne(i,d=>{e(m=>({[r]:{...m[r],atom:d}}))},()=>t()[r].atom,a)}),de=w.forwardRef(({content:e="",size:t="50",className:r,children:i,active:a=!1,disabled:d,onClick:m,additionalActions:l,...x},n)=>{const[u,p]=w.useState(!1);return o.jsx(W,{tabIndex:1,$colorType:a?"dark":"light",$size:t,className:r,$disabled:d,ref:n,"data-chip":!0,$active:a,...x,children:o.jsx(I,{tippy:{onClickOutside:()=>p(!1),visible:u,appendTo:document.body},items:l==null?void 0:l.map((h,$)=>o.jsx(he,{$last:$===l.length-1,children:h.map(({content:Q,action:C},K)=>o.jsx(xe,{onClick:()=>{p(!1),C==null||C()},children:Q},K))},$)),children:o.jsxs(N,{$size:t,onClick:h=>{m==null||m(),h.preventDefault(),h.stopPropagation()},children:[o.jsx(pe,{children:i||e}),l&&o.jsx(R,{$active:a,onClick:h=>{h.preventDefault(),h.stopPropagation(),!d&&p(!u)},$disabled:d,"data-testid":"open-actions"})]})})})}),N=s.div`
  display: flex;
  align-items: center;
  gap: ${({$size:e,theme:{spacing:t}})=>e==="50"?t.sp8:t.sp16};
  padding: 0
    ${e=>e.$size==="50"?e.theme.spacing.sp8:e.theme.spacing.sp16};
`,ae={dark:c`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.grey100};
    border: 1px solid ${e=>e.theme.systemColors.grey100};
  `,light:c`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey200};
  `},ce={50:c`
    ${k};
    height: 24px;
  `,100:c`
    ${g};
    height: 32px;
  `},me={dark:c`
    color: ${e=>e.theme.systemColors.white};
    background-color: ${e=>e.theme.systemColors.grey800};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    &:hover,
    &:focus {
      background-color: ${e=>e.theme.systemColors.black};
      border-color: ${e=>e.theme.systemColors.black};
    }
  `,light:c`
    color: ${e=>e.theme.systemColors.grey800};
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey800};
  `},pe=s.span`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`,R=s(y).attrs({icon:A})`
  font-size: 20px;

  &:hover,
  &:focus,
  &:focus-visible {
    background: unset;
    box-shadow: unset;
  }

  color: ${e=>!e.$disabled&&!e.$active?e.theme.systemColors.grey600:e.theme.systemColors.grey300};

  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,W=s.div`
  transition:
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
  ${e=>ce[e.$size]};
  ${e=>e.$disabled?ae[e.$colorType]:me[e.$colorType]};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover {
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};

    ${R} {
      ${({$disabled:e,$active:t,theme:r})=>!e&&`
        color: ${t?r.systemColors.grey200:r.systemColors.grey800};
      `};
    }
  }

  ${G};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  user-select: none;
  max-width: 100%;
  overflow: hidden;
`,Ue=Object.assign(de,{Wrapper:W,Block:N}),he=s.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  border-bottom: ${e=>e.$last?void 0:`1px solid ${e.theme.systemColors.grey100}`};
`,xe=s(I.Item)`
  min-width: 111px;
  min-height: 40px;
`,ue=[e=>({component:o.jsx(D,{...e})}),({data:{sku:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["SKU:",o.jsx(j,{children:e})]})}:void 0,({data:{outerAsin:e},size:t})=>e?{component:o.jsxs(o.Fragment,{children:[o.jsx(F,{asin:e,size:t}),o.jsx(M,{copyContent:e,contentLabel:"ASIN"})]}),tooltipComponent:o.jsxs(o.Fragment,{children:["ASIN:",o.jsx(j,{children:e})]})}:void 0,({data:{parentAsin:e},size:t})=>e?{component:o.jsxs(be,{children:["Parent:",o.jsx(F,{asin:e,size:t}),o.jsx(M,{copyContent:e,contentLabel:"Parent"})]}),tooltipComponent:o.jsxs(o.Fragment,{children:["Parent:",o.jsx(j,{children:e})]})}:void 0,({data:{fulfillmentType:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["Fulfillment:",o.jsx("b",{children:e})]})}:void 0,({data:{numberOfVariations:e}})=>e?{component:e+" Variations",tooltipComponent:o.jsxs(o.Fragment,{children:["Variations:",o.jsx("b",{children:e})]})}:void 0,({data:{brand:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["Brand:",o.jsx("b",{children:e})]})}:void 0,({data:{rating:e,numberOfReviews:t}})=>e?{component:o.jsx(P,{value:e,numberOfReviews:t}),tooltipComponent:o.jsxs(o.Fragment,{children:["Rating:",o.jsx(P,{value:e,numberOfReviews:t})]})}:void 0,({data:{listingScore:e}})=>e?{component:o.jsx(S,{rang:e}),tooltipComponent:o.jsxs(o.Fragment,{children:["LQS:",o.jsx(S,{rang:e})]})}:void 0],j=s.b`
  word-break: break-word;
`,be=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
`,He=e=>{const t=w.useMemo(()=>{const r=[];return ue.slice(1).forEach((i,a)=>{const d=i(e);d!=null&&d.component&&r.push({component:d.component,tooltipComponent:d.tooltipComponent||d.component,id:a.toString()})}),r},[e]);return o.jsxs($e,{children:[e.customMainBlock?e.customMainBlock:o.jsx(D,{...e}),o.jsx(Ce,{items:t,renderHidden:r=>o.jsx(fe,{$allHidden:t.length===r.length,children:o.jsx(X,{interactive:!0,colorType:"light",content:o.jsx(ye,{children:r.map(i=>o.jsx(ge,{children:i.tooltipComponent||i.component},i.id))}),children:o.jsx(y,{icon:Z})})})})]})},$e=s.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  color: ${e=>e.theme.systemColors.grey600};
`,ye=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ge=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,U=c`
  content: "";
  width: 2px;
  border-radius: 2px;
  background: ${e=>e.theme.systemColors.grey400};
  position: absolute;
  top: 50%;
  height: 2px;
`,fe=s.div`
  display: flex;
  align-items: center;
  position: relative;
  color: ${e=>e.theme.systemColors.grey600};
  margin-left: 16px;

  &::after {
    ${U};
    left: -8px;
  }
`,Ce=s(O)`
  flex: 1;
  overflow: hidden;
  min-width: 0;

  ${O.Item} {
    padding-left: 16px;
    position: relative;

    &::after {
      ${U};
      left: 8px;
    }
  }
`,Ve=({isNewUi:e,plans:t,features:r,featuresTitle:i,hideBestLabel:a=!1,bestLabel:d,tableOnMobile:m=!1})=>{const{t:l}=_(),x=ie(oe.mobile)||m;return o.jsxs(je,{children:[o.jsx("thead",{children:o.jsxs(E,{children:[t.length!==0&&o.jsx(L,{$tableOnMobile:m,children:o.jsx(Oe,{$tableOnMobile:m,children:i||l("upsellModal.featuresTitle")})}),x&&t.map((n,u)=>o.jsxs(L,{$highlight:n.isBest,$hideBestLabel:a,$bestLabel:n.discount?l("upsellModal.discount",{discount:n.discount}):d||l("upsellModal.bestLabel"),$tableOnMobile:m,$isEstablishedSellers:n.isEstablishedSellers,children:[n.isBest?o.jsxs(o.Fragment,{children:[o.jsxs(H,{children:[" ",o.jsx(Me,{children:l("upsellModal.establishedSellers")})]}),o.jsx(T,{children:n.label})]}):o.jsx(T,{children:n.label}),n.price?o.jsx(Le,{children:n.price}):null,n.period&&n.price&&o.jsx(Te,{children:n.period==="year"?l("currentAndRecommended.upsellModal.billPeriodAnnually"):l("currentAndRecommended.upsellModal.billPeriodMonthly")})]},u))]})}),o.jsx("tbody",{children:r.map((n,u)=>o.jsxs(E,{children:[o.jsxs(Pe,{children:[o.jsx(Se,{children:n.title}),n.subtitle&&o.jsx(Ee,{children:n.subtitle})]}),x&&t.map(p=>{var h,$;return o.jsx(V,{$highlight:p.isBest,"data-highlight":p.isBest,children:p.isBest?o.jsx(Be,{children:(($=n.values)==null?void 0:$[p.id])||(e?o.jsx(v,{icon:B}):o.jsx(Fe,{isControlCenter:p.isEstablishedSellers,children:o.jsx(v,{icon:B})}))}):o.jsx(we,{children:((h=n.values)==null?void 0:h[p.id])||(e?o.jsx(ve,{icon:Y}):o.jsx(ke,{icon:q}))})},p.id)})]},u))})]})},je=s.table`
  width: 100%;
  border-collapse: collapse;
`,we=s.div`
  ${f};
  color: ${({theme:e})=>e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${b.mobile} {
    min-width: 160px;
  }
`,ve=s(y)`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${e=>e.theme.systemColors.grey600};
`,ke=s(y)`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey300};
`,Be=s.div`
  ${g};
  color: ${e=>e.theme.systemColors.black};

  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${b.mobile} {
    min-width: 160px;
  }
`,v=s(y)`
  font-size: 20px;
`,Fe=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${e=>e.isControlCenter?e.theme.systemColors.blue600:e.theme.systemColors.blue100};

  ${v} {
    color: ${({isControlCenter:e,theme:t})=>e?t.systemColors.white:t.systemColors.blue600};
  }
`,E=s.tr`
  vertical-align: middle;

  &:last-child {
    [data-highlight="true"] {
      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: -1px;
        bottom: -8px;
        left: -1px;
        right: -1px;
        pointer-events: none;

        border-left: 2px solid ${({theme:e})=>e.systemColors.blue600};
        border-right: 2px solid ${({theme:e})=>e.systemColors.blue600};
        border-bottom: 2px solid ${({theme:e})=>e.systemColors.blue600};
        border-top: none;
        border-radius: 0 0 6px 6px;
      }
    }
  }
`,H=s.div`
  display: none;
  justify-content: center;
  position: relative;
  height: 0;
  top: -32px;
  z-index: 100;
`,Me=s.div`
  ${k};
  color: ${e=>e.theme.systemColors.blue800};
  padding: 4px 8px;
  background: ${e=>e.theme.systemColors.blue100};
  border-radius: 12px;
  display: flex;
  min-height: 24px;
`,L=s.th`
  vertical-align: top;

  ${e=>e.$tableOnMobile&&c`
      padding-top: ${e.$hideBestLabel?"0":"40px"};
    `}
  ${b.mobile} {
    padding-top: ${e=>e.$hideBestLabel?"0":"40px"};
  }

  ${e=>e.$highlight&&c`
      position: relative;

      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: 6px;
        bottom: -1px;
        left: -1px;
        right: -1px;

        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        pointer-events: none;
      }

      &::after {
        content: "${e.$bestLabel}";
        position: absolute;
        z-index: 1;
        left: -1px;
        right: -1px;
        top: 0;

        ${J};
        color: #fff;

        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        background: ${({theme:t})=>t.systemColors.blue600};

        ${e.$hideBestLabel&&c`
          content: "";
          height: 6px;
          border: 2px solid ${e.theme.systemColors.blue600};
          border-bottom: none;
          background: none;
        `}
      }
    `}
  ${e=>e.$isEstablishedSellers&&c`
      ${H} {
        display: flex;
      }

      &::after {
        ${k};
        background-color: ${e.theme.systemColors.white};
        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        border-top: 2px solid ${e.theme.systemColors.blue600};
        content: "";
      }
    `}
`,V=s.td`
  padding: 16px 0;
  border-bottom: 1px solid #d9e0e8;

  ${e=>e.$highlight&&c`
      position: relative;

      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;

        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        pointer-events: none;
      }
    `}
`,Pe=s(V)`
  width: 100%;
`,Oe=s.div`
  ${f};

  text-align: ${e=>e.$tableOnMobile?"left":"center"};

  ${b.mobile} {
    text-align: left;
  }
`,Se=s.div`
  ${g};
  color: ${({theme:e})=>e.systemColors.black};
`,Ee=s.div`
  ${z};
  margin-top: ${e=>e.theme.spacing.sp4};

  ${b.mobile} {
    ${f};
    margin-top: ${e=>e.theme.spacing.sp4};
  }

  max-width: 250px;
`,T=s.div`
  ${ee};
  color: ${({theme:e})=>e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: 0 ${e=>e.theme.spacing.sp8};

  ${b.mobile} {
    ${g};
    white-space: nowrap;
    padding: 0 ${e=>e.theme.spacing.sp8};
    color: ${({theme:e})=>e.systemColors.black};
  }
`,Le=s.div`
  ${f};
  color: ${({theme:e})=>e.systemColors.grey800};
  text-align: center;
`,Te=s.div`
  ${z};
  text-align: center;
`,Qe=(e,t)=>{const{platform:r,domain:i}=te("store",e);return r==="AMAZON"?`https://${i}/dp/${t}`:`https://www.walmart.com/ip/name/${t}`},Ke=async(e,t)=>await se({url:le(re+"/api/v1/customers/subscription/data",{...e}),withCredentials:!0,signal:t});export{Ue as F,Ve as U,Qe as a,We as c,ue as d,Ke as g,He as u};
//# sourceMappingURL=getUpsellData--u-Ov2M_.js.map
