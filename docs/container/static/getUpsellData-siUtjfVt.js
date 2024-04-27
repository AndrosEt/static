import{r as g,j as o,u as s,a as c,a1 as k,y as f,x as y,f9 as A,f$ as G,c8 as X,E as _,cn as Y,w as Z,g0 as q,bW as J,ar as B,Q as C,I as b,K as ee,Y as z,$ as oe,c0 as te,aC as se,f as le,g as re,P as ne}from"./index-tEWTe_cM.js";import{a5 as I}from"./Learn-ZI4QJ8Ms.js";import{n as D,P as F,l as M,R as P,W as O}from"./middleware-6VZ1FcKb.js";import{Q as S}from"./NewRadio-DIL_Ez7J.js";import{o as ie}from"./useAutoPlay-8WOcIzK4.js";const de=(e,t,r,n)=>{const a=l=>{var x;l.type==="CLOSE"?t({isOpen:!1,data:n!=null&&n.doNotClearOnClose?r().data:e}):l.type==="OPEN"?t({isOpen:!0,...l.payload?{data:l.payload}:{data:e}}):l.type==="TOGGLE"?t({isOpen:!r().isOpen,data:r().isOpen||n!=null&&n.doNotClearOnClose?r().data:e}):l.type==="SET_DATA"&&t({isOpen:r().isOpen,data:l.payload}),(x=n==null?void 0:n.reaction)==null||x.call(n,l)};return{atom:{data:e,isOpen:!1},open:(...l)=>a(e!==void 0?{type:"OPEN",payload:l[0],meta:l[1]}:{type:"OPEN",payload:e,meta:l[0]}),close:(...l)=>a({type:"CLOSE",meta:l==null?void 0:l[0]}),action:a}},Ue=(e,t,r,n,a)=>({[r]:de(n,d=>{e(p=>({[r]:{...p[r],atom:d}}))},()=>t()[r].atom,a)}),ae=g.forwardRef(({content:e="",size:t="50",className:r,children:n,active:a=!1,disabled:d,onClick:p,additionalActions:l,...x},i)=>{const[u,m]=g.useState(!1);return o.jsx(R,{tabIndex:1,$colorType:a?"dark":"light",$size:t,className:r,$disabled:d,ref:i,"data-chip":!0,$active:a,...x,children:o.jsx(I,{tippy:{onClickOutside:()=>m(!1),visible:u,appendTo:document.body},items:l==null?void 0:l.map((h,$)=>o.jsx(xe,{$last:$===l.length-1,children:h.map(({content:Q,action:j},K)=>o.jsx(ue,{onClick:()=>{m(!1),j==null||j()},children:Q},K))},$)),children:o.jsxs(W,{$size:t,onClick:h=>{p==null||p(),h.preventDefault(),h.stopPropagation()},children:[o.jsx(he,{children:n||e}),l&&o.jsx(N,{$active:a,onClick:h=>{h.preventDefault(),h.stopPropagation(),!d&&m(!u)},$disabled:d,"data-testid":"open-actions"})]})})})}),W=s.div`
  display: flex;
  align-items: center;
  gap: ${({$size:e,theme:{spacing:t}})=>e==="50"?t.sp8:t.sp16};
  padding: 0
    ${e=>e.$size==="50"?e.theme.spacing.sp8:e.theme.spacing.sp16};
`,ce={dark:c`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.grey100};
    border: 1px solid ${e=>e.theme.systemColors.grey100};
  `,light:c`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey200};
  `},pe={50:c`
    ${k};
    height: 24px;
  `,100:c`
    ${f};
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
  `},he=s.span`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`,N=s(y).attrs({icon:A})`
  font-size: 20px;

  &:hover,
  &:focus,
  &:focus-visible {
    background: unset;
    box-shadow: unset;
  }

  color: ${e=>!e.$disabled&&!e.$active?e.theme.systemColors.grey600:e.theme.systemColors.grey300};

  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,R=s.div`
  transition:
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
  ${e=>pe[e.$size]};
  ${e=>e.$disabled?ce[e.$colorType]:me[e.$colorType]};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover {
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};

    ${N} {
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
`,He=Object.assign(ae,{Wrapper:R,Block:W}),xe=s.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  border-bottom: ${e=>e.$last?void 0:`1px solid ${e.theme.systemColors.grey100}`};
`,ue=s(I.Item)`
  min-width: 111px;
  min-height: 40px;
`,Ve=({children:e,content:t,...r})=>{const n=g.useDeferredValue(e);return t?o.jsx(X,{content:t,...r,children:n}):o.jsx(o.Fragment,{children:n})},be=[e=>({component:o.jsx(D,{...e})}),({data:{sku:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["SKU:",o.jsx(w,{children:e})]})}:void 0,({data:{outerAsin:e},size:t})=>e?{component:o.jsxs(o.Fragment,{children:[o.jsx(F,{asin:e,size:t}),o.jsx(M,{copyContent:e,contentLabel:"ASIN"})]}),tooltipComponent:o.jsxs(o.Fragment,{children:["ASIN:",o.jsx(w,{children:e})]})}:void 0,({data:{parentAsin:e},size:t})=>e?{component:o.jsxs($e,{children:["Parent:",o.jsx(F,{asin:e,size:t}),o.jsx(M,{copyContent:e,contentLabel:"Parent"})]}),tooltipComponent:o.jsxs(o.Fragment,{children:["Parent:",o.jsx(w,{children:e})]})}:void 0,({data:{fulfillmentType:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["Fulfillment:",o.jsx("b",{children:e})]})}:void 0,({data:{numberOfVariations:e}})=>e?{component:e+" Variations",tooltipComponent:o.jsxs(o.Fragment,{children:["Variations:",o.jsx("b",{children:e})]})}:void 0,({data:{brand:e}})=>e?{component:e,tooltipComponent:o.jsxs(o.Fragment,{children:["Brand:",o.jsx("b",{children:e})]})}:void 0,({data:{rating:e,numberOfReviews:t}})=>e?{component:o.jsx(P,{value:e,numberOfReviews:t}),tooltipComponent:o.jsxs(o.Fragment,{children:["Rating:",o.jsx(P,{value:e,numberOfReviews:t})]})}:void 0,({data:{listingScore:e}})=>e?{component:o.jsx(S,{rang:e}),tooltipComponent:o.jsxs(o.Fragment,{children:["LQS:",o.jsx(S,{rang:e})]})}:void 0],w=s.b`
  word-break: break-word;
`,$e=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
`,Qe=e=>{const t=g.useMemo(()=>{const r=[];return be.slice(1).forEach((n,a)=>{const d=n(e);d!=null&&d.component&&r.push({component:d.component,tooltipComponent:d.tooltipComponent||d.component,id:a.toString()})}),r},[e]);return o.jsxs(ye,{children:[e.customMainBlock?e.customMainBlock:o.jsx(D,{...e}),o.jsx(je,{items:t,renderHidden:r=>o.jsx(Ce,{$allHidden:t.length===r.length,children:o.jsx(_,{interactive:!0,colorType:"light",content:o.jsx(ge,{children:r.map(n=>o.jsx(fe,{children:n.tooltipComponent||n.component},n.id))}),children:o.jsx(y,{icon:Y})})})})]})},ye=s.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  color: ${e=>e.theme.systemColors.grey600};
`,ge=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fe=s.div`
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
`,Ce=s.div`
  display: flex;
  align-items: center;
  position: relative;
  color: ${e=>e.theme.systemColors.grey600};
  margin-left: 16px;

  &::after {
    ${U};
    left: -8px;
  }
`,je=s(O)`
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
`,Ke=({isNewUi:e,plans:t,features:r,featuresTitle:n,hideBestLabel:a=!1,bestLabel:d,tableOnMobile:p=!1})=>{const{t:l}=Z(),x=ie(te.mobile)||p;return o.jsxs(we,{children:[o.jsx("thead",{children:o.jsxs(E,{children:[t.length!==0&&o.jsx(L,{$tableOnMobile:p,children:o.jsx(Se,{$tableOnMobile:p,children:n||l("upsellModal.featuresTitle")})}),x&&t.map((i,u)=>o.jsxs(L,{$highlight:i.isBest,$hideBestLabel:a,$bestLabel:i.discount?l("upsellModal.discount",{discount:i.discount}):d||l("upsellModal.bestLabel"),$tableOnMobile:p,$isEstablishedSellers:i.isEstablishedSellers,children:[i.isBest?o.jsxs(o.Fragment,{children:[o.jsxs(H,{children:[" ",o.jsx(Pe,{children:l("upsellModal.establishedSellers")})]}),o.jsx(T,{children:i.label})]}):o.jsx(T,{children:i.label}),i.price?o.jsx(Te,{children:i.price}):null,i.period&&i.price&&o.jsx(ze,{children:i.period==="year"?l("currentAndRecommended.upsellModal.billPeriodAnnually"):l("currentAndRecommended.upsellModal.billPeriodMonthly")})]},u))]})}),o.jsx("tbody",{children:r.map((i,u)=>o.jsxs(E,{children:[o.jsxs(Oe,{children:[o.jsx(Ee,{children:i.title}),i.subtitle&&o.jsx(Le,{children:i.subtitle})]}),x&&t.map(m=>{var h,$;return o.jsx(V,{$highlight:m.isBest,"data-highlight":m.isBest,children:m.isBest?o.jsx(Fe,{children:(($=i.values)==null?void 0:$[m.id])||(e?o.jsx(v,{icon:B}):o.jsx(Me,{isControlCenter:m.isEstablishedSellers,children:o.jsx(v,{icon:B})}))}):o.jsx(ve,{children:((h=i.values)==null?void 0:h[m.id])||(e?o.jsx(ke,{icon:q}):o.jsx(Be,{icon:J}))})},m.id)})]},u))})]})},we=s.table`
  width: 100%;
  border-collapse: collapse;
`,ve=s.div`
  ${C};
  color: ${({theme:e})=>e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${b.mobile} {
    min-width: 160px;
  }
`,ke=s(y)`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${e=>e.theme.systemColors.grey600};
`,Be=s(y)`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey300};
`,Fe=s.div`
  ${f};
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
`,Me=s.div`
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
`,Pe=s.div`
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

        ${ee};
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
`,Oe=s(V)`
  width: 100%;
`,Se=s.div`
  ${C};

  text-align: ${e=>e.$tableOnMobile?"left":"center"};

  ${b.mobile} {
    text-align: left;
  }
`,Ee=s.div`
  ${f};
  color: ${({theme:e})=>e.systemColors.black};
`,Le=s.div`
  ${z};
  margin-top: ${e=>e.theme.spacing.sp4};

  ${b.mobile} {
    ${C};
    margin-top: ${e=>e.theme.spacing.sp4};
  }

  max-width: 250px;
`,T=s.div`
  ${oe};
  color: ${({theme:e})=>e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: 0 ${e=>e.theme.spacing.sp8};

  ${b.mobile} {
    ${f};
    white-space: nowrap;
    padding: 0 ${e=>e.theme.spacing.sp8};
    color: ${({theme:e})=>e.systemColors.black};
  }
`,Te=s.div`
  ${C};
  color: ${({theme:e})=>e.systemColors.grey800};
  text-align: center;
`,ze=s.div`
  ${z};
  text-align: center;
`,Ae=(e,t)=>{const{platform:r,domain:n}=se("store",e);return r==="AMAZON"?`https://${n}/dp/${t}`:`https://www.walmart.com/ip/name/${t}`},Ge=async(e,t)=>await le({url:re(ne+"/api/v1/customers/subscription/data",{...e}),withCredentials:0,signal:t});export{He as F,Ve as T,Ke as U,Ae as a,Ue as c,be as d,Ge as g,Qe as u};
//# sourceMappingURL=getUpsellData-siUtjfVt.js.map
