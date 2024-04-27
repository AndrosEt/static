import{cP as g,u as o,K as x,a as n,r as T,j as s,cq as X,as as q,a6 as A,w as K,bW as Q,ar as Y,I as r,y,Q as $,$ as G,Y as I,c0 as w,x as L}from"./index-tEWTe_cM.js";import{o as B}from"./useAutoPlay-8WOcIzK4.js";import{a8 as J,a6 as U}from"./Learn-ZI4QJ8Ms.js";const k=[g.blue600,g.green600,g.orange600,g.yellow600,g.grey600],u=(e,t)=>e*100/t,Z=({total:e=100,progress:t=[],size:p=X,title:l,className:m})=>{const h=T.useMemo(()=>t.sort((c,a)=>u(a.value,a.total||e)-u(c.value,c.total||e)),[t,e]);return s.jsxs(F,{className:m,children:[l?s.jsx(S,{children:l}):null,s.jsx(D,{$size:p,children:h==null?void 0:h.map((c,a)=>s.jsx(O,{$value:c.value,$total:c.total||e,$color:c.color||k[a%k.length]},c.value))})]})},F=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`,S=o.div`
  ${x};
  margin-bottom: 8px;
`,ee={50:n`
    height: 4px;
  `,100:n`
    height: 4px;
  `,200:n`
    height: 8px;
  `,400:n`
    height: 8px;
  `},D=o.div`
  ${e=>ee[e.$size]};
  background: ${e=>e.theme.systemColors.blue100};
  border-radius: 4px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`,O=o.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: ${e=>e.$color};
  width: ${e=>u(e.$value,e.$total)+"%"};
  transition: width 0.2s ease;
  border-radius: 4px;
`,ve=Object.assign(Z,{Wrapper:F,Title:S,ProgressWrapper:D,Line:O}),Ce=(e,t,p)=>{var l;return e==="AM"?`https://${(t?(l=q(e,"store",t))==null?void 0:l.domain:"amazon.com")||"amazon.com"}/dp/${p}`:`https://www.walmart.com/ip/name/${p}`},we="/account/connect-sp-token",Be="/account/connect-vendor-sp-token",ke=A("https://research-tools.helium10.com"),Me=A("https://control-center.helium10.com"),Pe=({plans:e,features:t,featuresTitle:p,tableOnMobile:l=!1,enableToggle:m=!1,aboveCurrentPlan:h,bestLabel:c})=>{const{t:a}=K(),f=B(w.mobile)||l,R=B(w.mobileBefore),j=e.map(i=>({children:i.label,value:i.id})),[b,E]=T.useState(j[0].value||""),N=m&&R&&l;return s.jsxs(te,{children:[N&&s.jsx(xe,{buttons:j,value:b,onChange:E}),s.jsxs(se,{children:[s.jsx("thead",{children:s.jsxs(M,{children:[e.length!==0&&s.jsx(P,{$tableOnMobile:l,children:s.jsx(re,{$tableOnMobile:l,children:p??a("upsellModal.featuresTitle")})}),f&&e.map(i=>s.jsxs(P,{$highlight:i.isBest,$tableOnMobile:l,$enableToggle:m,"data-toggle":b===i.id,children:[i.isBest?s.jsxs(s.Fragment,{children:[s.jsx(ie,{children:s.jsx(J,{type:"enabled",children:c??a("upsellModal.bestLabel")})}),s.jsx(z,{children:i.label})]}):s.jsxs(s.Fragment,{children:[s.jsx(ne,{children:h!==null&&(h??a("upsellModal.currentPlan"))}),s.jsx(z,{children:i.label})]}),s.jsxs(le,{children:[i.price&&s.jsx(ae,{stroked:!!i.discountedPrice,children:i.price}),i.discountedPrice&&s.jsx(ce,{children:i.discountedPrice})]}),i.period&&i.price&&s.jsx(de,{children:i.period==="year"?a("currentAndRecommended.upsellModal.billPeriodAnnually"):a("currentAndRecommended.upsellModal.billPeriodMonthly")})]},i.id))]})}),s.jsx(oe,{children:t.map((i,_)=>s.jsxs(M,{children:[s.jsxs(pe,{children:[s.jsx(he,{children:i.title}),i.subtitle&&s.jsx(me,{dangerouslySetInnerHTML:{__html:i.subtitle}})]}),f&&e.map(d=>{var v,C;return s.jsx(V,{$highlight:d.isBest,"data-highlight":d.isBest,$enableToggle:m,"data-toggle":b===d.id,children:d.isBest?s.jsx(be,{children:((C=i.values)==null?void 0:C[d.id])||s.jsx(ue,{children:s.jsx(H,{icon:Y})})}):s.jsx(ge,{children:((v=i.values)==null?void 0:v[d.id])||s.jsx($e,{icon:Q})})},d.id)})]},_))})]})]})},te=o.div``,W=n`
  ${r.mobileBefore} {
    ${e=>e.$enableToggle===!0&&n`
        & {
          display: none;
        }

        &[data-toggle="true"] {
          display: table-cell;
        }
      `}
  }
`,se=o.table`
  width: 100%;
  border-collapse: collapse;
`,oe=o.tbody`
  & > tr:last-of-type > td {
    border-bottom: none;
  }
`,M=o.tr`
  vertical-align: middle;

  &:last-child {
    [data-highlight="true"] {
      ${r.mobile} {
        &:before {
          content: "";
          position: absolute;
          z-index: 1;
          top: -1px;
          bottom: -8px;
          left: ${e=>e.theme.spacing.sp6};
          right: 0;
          pointer-events: none;
          border-left: 3px solid ${({theme:e})=>e.systemColors.blue600};
          border-right: 3px solid ${({theme:e})=>e.systemColors.blue600};
          border-bottom: 3px solid ${({theme:e})=>e.systemColors.blue600};
          border-top: none;
          border-radius: ${e=>`0 0 ${e.theme.spacing.sp6} ${e.theme.spacing.sp6}`};
        }
      }
    }

    [data-highlight="false"] {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        height: 8px;
        bottom: -8px;
        left: ${e=>e.theme.spacing.sp6};
        right: ${e=>e.theme.spacing.sp6};
        pointer-events: none;
        border-radius: ${e=>`0 0 ${e.theme.spacing.sp6} ${e.theme.spacing.sp6}`};
      }
    }
  }
`,P=o.th`
  vertical-align: top;

  ${e=>e.$tableOnMobile&&n`
      padding-top: 0;
    `}
  ${r.mobile} {
    padding-top: 0;
  }

  ${e=>e.$highlight&&n`
      position: relative;
      ${r.mobile} {
        &:before {
          content: "";
          position: absolute;
          z-index: 1;
          top: ${t=>t.theme.spacing.sp6};
          bottom: -1px;
          left: ${t=>t.theme.spacing.sp6};
          right: 0;
          border-left: 3px solid ${e.theme.systemColors.blue600};
          border-right: 3px solid ${e.theme.systemColors.blue600};
          pointer-events: none;
        }
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          left: ${t=>t.theme.spacing.sp6};
          right: 0;
          top: 0;
          ${x};
          color: ${t=>t.theme.systemColors.white};
          height: ${t=>t.theme.spacing.sp6};
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid ${e.theme.systemColors.blue600};
          border-radius: ${t=>`${t.theme.spacing.sp6} ${t.theme.spacing.sp6} 0 0`};
          border-bottom: none;
        }
      }
    `}
  ${e=>e.$highlight===!1&&n`
      position: relative;
      padding: ${t=>`${t.theme.spacing.sp16} ${t.theme.spacing.sp6}`};

      &:before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: ${t=>t.theme.spacing.sp6};
        right: ${t=>t.theme.spacing.sp6};
        pointer-events: none;
        border-radius: ${t=>`${t.theme.spacing.sp6} ${t.theme.spacing.sp6} 0 0`};
      }

      ${r.mobileBefore} {
        &:before {
          background: ${({theme:t})=>t.systemColors.white};
        }
      }
    `}

  &:first-of-type {
    padding-top: ${e=>e.theme.spacing.sp48};
  }

  ${r.mobileBefore} {
    ${e=>!e.$tableOnMobile&&n`
        &:first-of-type {
          padding-top: 0;
        }
      `}
  }

  ${W};
`,ie=o.div`
  display: flex;
  justify-content: center;
  margin: ${e=>`${e.theme.spacing.sp12} 0 ${e.theme.spacing.sp8}`};
`,ne=o.div`
  ${y};
  color: ${e=>e.theme.systemColors.grey600};
  margin: ${e=>`${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};
  text-align: center;
  height: 22px;
`,re=o.div`
  ${$};

  text-align: ${e=>e.$tableOnMobile?"left":"center"};

  ${r.mobile} {
    text-align: left;
  }
`,z=o.div`
  ${G};
  color: ${({theme:e})=>e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: ${e=>`0 ${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};

  ${r.mobile} {
    ${y};
    white-space: nowrap;
    padding: ${e=>`0 ${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};
    color: ${({theme:e})=>e.systemColors.black};
  }
`,le=o.div`
  ${$};
  color: ${({theme:e})=>e.systemColors.grey800};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,ae=o.div`
  ${({stroked:e,theme:t})=>e&&n`
      color: ${t.systemColors.grey300};
      text-decoration: line-through;
      margin-right: ${t.spacing.sp4};
      font-size: 12px;
    `}
`,ce=o.div``,de=o.div`
  ${I};
  text-align: center;
`,V=o.td`
  padding: ${e=>`${e.theme.spacing.sp16} 0`};
  border-bottom: ${e=>`1px solid ${e.theme.systemColors.grey200}`};

  ${e=>e.$highlight&&n`
      position: relative;
      padding: ${t=>`${t.theme.spacing.sp16} 0 ${t.theme.spacing.sp16} ${t.theme.spacing.sp6}`};
      ${r.mobile} {
        &:before {
          content: "";
          position: absolute;
          z-index: 1;
          top: -1px;
          bottom: -1px;
          left: ${t=>t.theme.spacing.sp6};
          right: 0;
          border-left: 3px solid ${e.theme.systemColors.blue600};
          border-right: 3px solid ${e.theme.systemColors.blue600};
          pointer-events: none;
        }
      }
    `}

  ${e=>e.$highlight===!1&&n`
      position: relative;
      padding: ${t=>`${t.theme.spacing.sp16} ${t.theme.spacing.sp6}`};

      &:before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: ${t=>t.theme.spacing.sp6};
        right: ${t=>t.theme.spacing.sp6};
        pointer-events: none;
      }

      ${r.mobileBefore} {
        &:before {
          display: none;
        }
      }
    `}

  ${W};
`,pe=o(V)`
  width: 100%;
`,he=o.div`
  ${y};
  color: ${({theme:e})=>e.systemColors.black};
`,me=o.div`
  ${I};
  margin-top: ${e=>e.theme.spacing.sp4};

  ${r.mobile} {
    ${$};
    margin-top: ${e=>e.theme.spacing.sp4};
  }

  max-width: 380px;
`,ge=o.div`
  ${$};
  color: ${({theme:e})=>e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${r.mobile} {
    min-width: 160px;
  }
`,$e=o(L)`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey300};
`,be=o.div`
  ${x};

  min-width: 120px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: ${e=>`0 ${e.theme.spacing.sp6}`};
  justify-content: center;

  ${r.mobile} {
    min-width: 160px;
  }
`,H=o(L)`
  font-size: 20px;
`,ue=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.systemColors.blue600};

  ${H} {
    color: ${e=>e.theme.systemColors.white};
  }
`,xe=o(U)`
  margin-bottom: ${e=>e.theme.spacing.sp16};
`;export{Pe as O,ve as P,we as a,Be as c,Me as d,Ce as p,ke as r};
//# sourceMappingURL=OptimalData-cuY_CBe9.js.map
