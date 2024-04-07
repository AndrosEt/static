import{cD as g,u as o,K as u,a as n,r as k,j as s,ca as _,w as X,bH as K,au as Q,I as l,y,Q as m,$ as Y,Y as F,bN as w,x as I}from"./index-VVIvRZBh.js";import{o as B}from"./useAutoPlay-JZxKBgmm.js";import{a8 as q,a4 as G}from"./Learn-nfpDmxZa.js";const M=[g.blue600,g.green600,g.orange600,g.yellow600,g.grey600],x=(e,t)=>e*100/t,J=({total:e=100,progress:t=[],size:$=_,title:c,className:h})=>{const p=k.useMemo(()=>t.sort((a,r)=>x(r.value,r.total||e)-x(a.value,a.total||e)),[t,e]);return s.jsxs(D,{className:h,children:[c?s.jsx(O,{children:c}):null,s.jsx(S,{$size:$,children:p==null?void 0:p.map((a,r)=>s.jsx(A,{$value:a.value,$total:a.total||e,$color:a.color||M[r%M.length]},a.value))})]})},D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`,O=o.div`
  ${u};
  margin-bottom: 8px;
`,U={50:n`
    height: 4px;
  `,100:n`
    height: 4px;
  `,200:n`
    height: 8px;
  `,400:n`
    height: 8px;
  `},S=o.div`
  ${e=>U[e.$size]};
  background: ${e=>e.theme.systemColors.blue100};
  border-radius: 4px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`,A=o.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: ${e=>e.$color};
  width: ${e=>x(e.$value,e.$total)+"%"};
  transition: width 0.2s ease;
  border-radius: 4px;
`,fe=Object.assign(J,{Wrapper:D,Title:O,ProgressWrapper:S,Line:A}),je=({plans:e,features:t,featuresTitle:$,tableOnMobile:c=!1,enableToggle:h=!1,aboveCurrentPlan:p,bestLabel:a})=>{const{t:r}=X(),f=B(w.mobile)||c,R=B(w.mobileBefore),j=e.map(i=>({children:i.label,value:i.id})),[b,V]=k.useState(j[0].value||""),E=h&&R&&c;return s.jsxs(Z,{children:[E&&s.jsx(be,{buttons:j,value:b,onChange:V}),s.jsxs(ee,{children:[s.jsx("thead",{children:s.jsxs(P,{children:[e.length!==0&&s.jsx(z,{$tableOnMobile:c,children:s.jsx(ie,{$tableOnMobile:c,children:$??r("upsellModal.featuresTitle")})}),f&&e.map(i=>s.jsxs(z,{$highlight:i.isBest,$tableOnMobile:c,$enableToggle:h,"data-toggle":b===i.id,children:[i.isBest?s.jsxs(s.Fragment,{children:[s.jsx(se,{children:s.jsx(q,{type:"enabled",children:a??r("upsellModal.bestLabel")})}),s.jsx(T,{children:i.label})]}):s.jsxs(s.Fragment,{children:[s.jsx(oe,{children:p!==null&&(p??r("upsellModal.currentPlan"))}),s.jsx(T,{children:i.label})]}),s.jsxs(ne,{children:[i.price&&s.jsx(le,{stroked:!!i.discountedPrice,children:i.price}),i.discountedPrice&&s.jsx(re,{children:i.discountedPrice})]}),i.period&&i.price&&s.jsx(ae,{children:i.period==="year"?r("currentAndRecommended.upsellModal.billPeriodAnnually"):r("currentAndRecommended.upsellModal.billPeriodMonthly")})]},i.id))]})}),s.jsx(te,{children:t.map((i,L)=>s.jsxs(P,{children:[s.jsxs(ce,{children:[s.jsx(de,{children:i.title}),i.subtitle&&s.jsx(pe,{dangerouslySetInnerHTML:{__html:i.subtitle}})]}),f&&e.map(d=>{var v,C;return s.jsx(H,{$highlight:d.isBest,"data-highlight":d.isBest,$enableToggle:h,"data-toggle":b===d.id,children:d.isBest?s.jsx(me,{children:((C=i.values)==null?void 0:C[d.id])||s.jsx($e,{children:s.jsx(N,{icon:Q})})}):s.jsx(he,{children:((v=i.values)==null?void 0:v[d.id])||s.jsx(ge,{icon:K})})},d.id)})]},L))})]})]})},Z=o.div``,W=n`
  ${l.mobileBefore} {
    ${e=>e.$enableToggle===!0&&n`
        & {
          display: none;
        }

        &[data-toggle="true"] {
          display: table-cell;
        }
      `}
  }
`,ee=o.table`
  width: 100%;
  border-collapse: collapse;
`,te=o.tbody`
  & > tr:last-of-type > td {
    border-bottom: none;
  }
`,P=o.tr`
  vertical-align: middle;

  &:last-child {
    [data-highlight="true"] {
      ${l.mobile} {
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
`,z=o.th`
  vertical-align: top;

  ${e=>e.$tableOnMobile&&n`
      padding-top: 0;
    `}
  ${l.mobile} {
    padding-top: 0;
  }

  ${e=>e.$highlight&&n`
      position: relative;
      ${l.mobile} {
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
          ${u};
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

      ${l.mobileBefore} {
        &:before {
          background: ${({theme:t})=>t.systemColors.white};
        }
      }
    `}

  &:first-of-type {
    padding-top: ${e=>e.theme.spacing.sp48};
  }

  ${l.mobileBefore} {
    ${e=>!e.$tableOnMobile&&n`
        &:first-of-type {
          padding-top: 0;
        }
      `}
  }

  ${W};
`,se=o.div`
  display: flex;
  justify-content: center;
  margin: ${e=>`${e.theme.spacing.sp12} 0 ${e.theme.spacing.sp8}`};
`,oe=o.div`
  ${y};
  color: ${e=>e.theme.systemColors.grey600};
  margin: ${e=>`${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};
  text-align: center;
  height: 22px;
`,ie=o.div`
  ${m};

  text-align: ${e=>e.$tableOnMobile?"left":"center"};

  ${l.mobile} {
    text-align: left;
  }
`,T=o.div`
  ${Y};
  color: ${({theme:e})=>e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: ${e=>`0 ${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};

  ${l.mobile} {
    ${y};
    white-space: nowrap;
    padding: ${e=>`0 ${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};
    color: ${({theme:e})=>e.systemColors.black};
  }
`,ne=o.div`
  ${m};
  color: ${({theme:e})=>e.systemColors.grey800};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,le=o.div`
  ${({stroked:e,theme:t})=>e&&n`
      color: ${t.systemColors.grey300};
      text-decoration: line-through;
      margin-right: ${t.spacing.sp4};
      font-size: 12px;
    `}
`,re=o.div``,ae=o.div`
  ${F};
  text-align: center;
`,H=o.td`
  padding: ${e=>`${e.theme.spacing.sp16} 0`};
  border-bottom: ${e=>`1px solid ${e.theme.systemColors.grey200}`};

  ${e=>e.$highlight&&n`
      position: relative;
      padding: ${t=>`${t.theme.spacing.sp16} 0 ${t.theme.spacing.sp16} ${t.theme.spacing.sp6}`};
      ${l.mobile} {
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

      ${l.mobileBefore} {
        &:before {
          display: none;
        }
      }
    `}

  ${W};
`,ce=o(H)`
  width: 100%;
`,de=o.div`
  ${y};
  color: ${({theme:e})=>e.systemColors.black};
`,pe=o.div`
  ${F};
  margin-top: ${e=>e.theme.spacing.sp4};

  ${l.mobile} {
    ${m};
    margin-top: ${e=>e.theme.spacing.sp4};
  }

  max-width: 380px;
`,he=o.div`
  ${m};
  color: ${({theme:e})=>e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${l.mobile} {
    min-width: 160px;
  }
`,ge=o(I)`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey300};
`,me=o.div`
  ${u};

  min-width: 120px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: ${e=>`0 ${e.theme.spacing.sp6}`};
  justify-content: center;

  ${l.mobile} {
    min-width: 160px;
  }
`,N=o(I)`
  font-size: 20px;
`,$e=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.systemColors.blue600};

  ${N} {
    color: ${e=>e.theme.systemColors.white};
  }
`,be=o(G)`
  margin-bottom: ${e=>e.theme.spacing.sp16};
`;export{je as O,fe as P};
//# sourceMappingURL=OptimalData-ecRxYfRx.js.map
