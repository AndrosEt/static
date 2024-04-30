import{w as q,r as p,j as t,ar as G,bW as J,u as o,a as r,I as d,y as u,Q as g,$ as U,Y as Z,K as _,c0 as H,x as I}from"./index-3WWdADc-.js";import{o as F}from"./useAutoPlay-ceAGW3YF.js";import{a8 as ee,a6 as te}from"./Learn-iEpSD2rS.js";const fe=({plans:e,features:l,featuresTitle:W,tableOnMobile:c,enableToggle:$,aboveCurrentPlan:f,bestLabel:N,onChangePlan:m})=>{const{t:b}=q(),y=F(H.laptop)||c,R=F(H.laptopBefore),X=e.map(s=>({children:s.label,value:s.id})),A=e.filter(s=>s.isBest===!0)[0],K=$&&R&&c,[a,v]=p.useState(A.id),[n,x]=p.useState(),[j,h]=p.useState(),Q=s=>{a&&v(null),x(s)};return p.useEffect(()=>{n&&(a&&v(null),m==null||m(n))},[n]),t.jsxs(se,{children:[K&&t.jsx($e,{children:t.jsx(me,{buttons:X,value:n??a,onChange:Q})}),t.jsxs(oe,{children:[t.jsx("thead",{children:t.jsxs(L,{children:[e.length!==0&&t.jsx(P,{$tableOnMobile:c??!1,children:t.jsx(le,{$tableOnMobile:c??!1,children:W??b("upsellModal.featuresTitle")})}),y&&e.map(s=>t.jsxs(P,{$highlight:s.id===n||s.id===a,$highlightHover:j===s.id,$tableOnMobile:c??!1,$enableToggle:$??!1,"data-toggle":s.id===n||s.id===a,onClick:()=>x(s.id),onMouseEnter:()=>h(s.id),onMouseLeave:()=>h(void 0),children:[s.isBest?t.jsxs(t.Fragment,{children:[t.jsx(ie,{children:t.jsx(ee,{type:"enabled",children:N??b("upsellModal.bestLabel")})}),t.jsx(z,{children:s.label})]}):t.jsxs(t.Fragment,{children:[t.jsx(re,{children:f!==null&&(f??b("upsellModal.currentPlan"))}),t.jsx(z,{children:s.label})]}),s.price?t.jsx(ne,{children:s.price}):null]},s.id))]})}),t.jsx("tbody",{children:l.map((s,C,Y)=>t.jsxs(L,{children:[t.jsxs(ae,{children:[t.jsx(de,{children:s.title}),s.subtitle&&t.jsx(ce,{children:s.subtitle})]}),y&&e.map(i=>{var w,B,M,T,k,S;return t.jsxs(D,{$highlight:i.id===n||i.id===a,$highlightHover:j===i.id,"data-highlight":i.id===n||i.id===a,$enableToggle:$??!1,"data-toggle":i.id===n||i.id===a,onClick:()=>x(i.id),onMouseEnter:()=>h(i.id),onMouseLeave:()=>h(void 0),$isLast:C===Y.length-1,children:[typeof((w=s.values)==null?void 0:w[i.id])=="string"&&t.jsx(E,{children:(B=s.values)==null?void 0:B[i.id]}),typeof((M=s.values)==null?void 0:M[i.id])=="boolean"&&((T=s.values)==null?void 0:T[i.id])===!0&&t.jsx(pe,{children:t.jsx(ge,{children:t.jsx(V,{icon:G})})}),typeof((k=s.values)==null?void 0:k[i.id])=="boolean"&&((S=s.values)==null?void 0:S[i.id])===!1&&t.jsx(E,{children:t.jsx(he,{icon:J})})]},i.id)})]},C))})]})]})},se=o.div``,O=r`
  ${d.laptopBefore} {
    ${e=>e.$enableToggle===!0&&r`
        & {
          display: none;
        }

        &[data-toggle="true"] {
          display: table-cell;
          min-width: 120px;
        }
      `}
  }
`,oe=o.table`
  width: 100%;
  border-collapse: collapse;
`,L=o.tr`
  vertical-align: middle;
`,P=o.th`
  vertical-align: top;

  ${e=>e.$tableOnMobile&&r`
      padding-top: 0;
    `}
  ${d.laptop} {
    padding-top: 0;
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: ${e=>e.theme.spacing.sp6};
    bottom: -1px;
    left: ${e=>e.theme.spacing.sp6};
    right: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    pointer-events: none;
    transition: border-color 0.3s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    left: ${e=>e.theme.spacing.sp6};
    right: 0;
    top: 0;
    height: ${e=>e.theme.spacing.sp6};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    border-radius: ${e=>`${e.theme.spacing.sp6} ${e.theme.spacing.sp6} 0 0`};
    border-bottom: none;
    transition: border-color 0.3s ease-in-out;
  }

  ${e=>e.$highlightHover&&r`
      position: relative;
      &::after {
        border-color: ${e.theme.systemColors.blue200};
      }
      &:before {
        border-color: ${e.theme.systemColors.blue200};
        border-color: ${e.theme.systemColors.blue200};
      }
    `}

  ${e=>e.$highlight&&r`
      position: relative;
      &:before {
        border-left: 3px solid ${e.theme.systemColors.blue600};
        border-right: 3px solid ${e.theme.systemColors.blue600};
      }
      &::after {
        border-color: ${e.theme.systemColors.blue600};
      }
    `}

  ${e=>e.$highlight===!1&&r`
      position: relative;
    `}

  &:first-of-type {
    padding-top: ${e=>e.theme.spacing.sp48};
  }

  ${d.laptopBefore} {
    ${e=>!e.$tableOnMobile&&r`
        &:first-of-type {
          padding-top: 0;
        }
      `}
  }

  ${O};
`,ie=o.div`
  display: flex;
  justify-content: center;
  margin: ${e=>`${e.theme.spacing.sp12} 0 ${e.theme.spacing.sp8}`};
`,re=o.div`
  ${u};
  color: ${e=>e.theme.systemColors.grey600};
  margin: ${e=>`${e.theme.spacing.sp8} 0 ${e.theme.spacing.sp12}`};
  text-align: center;
  height: 22px;
`,le=o.div`
  ${g};

  text-align: ${e=>e.$tableOnMobile?"left":"center"};

  ${d.laptop} {
    text-align: left;
  }
`,z=o.div`
  ${U};
  color: ${({theme:e})=>e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: 0 ${e=>e.theme.spacing.sp8};

  ${d.laptop} {
    ${u};
    white-space: nowrap;
    padding: 0 ${e=>e.theme.spacing.sp8};
    color: ${({theme:e})=>e.systemColors.black};
  }
`,ne=o.div`
  ${g};
  color: ${({theme:e})=>e.systemColors.grey800};
  text-align: center;
`,D=o.td`
  padding: ${e=>`${e.theme.spacing.sp16} 0`};
  border-bottom: ${e=>`1px solid ${e.theme.systemColors.grey200}`};

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: -1px;
    bottom: -1px;
    left: ${e=>e.theme.spacing.sp6};
    right: 0;
    pointer-events: none;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    transition: border-color 0.3s ease-in-out;
  }

  ${e=>e.$highlightHover&&r`
      &:before {
        border-left: 3px solid ${e.theme.systemColors.blue200};
        border-right: 3px solid ${e.theme.systemColors.blue200};
      }
    `}

  ${e=>e.$highlight&&r`
      position: relative;
      &:before {
        border-left: 3px solid ${e.theme.systemColors.blue600};
        border-right: 3px solid ${e.theme.systemColors.blue600};
      }
    `}

  ${e=>e.$highlight===!1&&r`
      position: relative;
    `}

  ${e=>e.$isLast&&r`
      &[data-highlight] {
        :before {
          content: "";
          position: absolute;
          z-index: 1;
          top: -1px;
          bottom: -8px;
          left: ${l=>l.theme.spacing.sp6};
          right: 0;
          pointer-events: none;
          border: 3px solid transparent;
          border-top: none;
          border-radius: ${l=>`0 0 ${l.theme.spacing.sp6} ${l.theme.spacing.sp6}`};
          transition: border-color 0.3s ease-in-out;
        }
      }
    `}

  ${e=>e.$isLast&&e.$highlightHover&&r`
      &[data-highlight] {
        :before {
          border-color: ${({theme:l})=>l.systemColors.blue200};
        }
      }
    `} 

  ${e=>e.$isLast&&r`
      &[data-highlight="true"] {
        :before {
          border-color: ${({theme:l})=>l.systemColors.blue600};
        }
      }
    `} 

  ${O};
`,ae=o(D)`
  width: 100%;
`,de=o.div`
  ${u};
  color: ${({theme:e})=>e.systemColors.black};
`,ce=o.div`
  ${Z};
  margin-top: ${e=>e.theme.spacing.sp4};

  ${d.laptop} {
    ${g};
    margin-top: ${e=>e.theme.spacing.sp4};
  }

  max-width: 380px;
`,E=o.div`
  ${g};
  color: ${({theme:e})=>e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${d.laptop} {
    min-width: 160px;
  }
`,he=o(I)`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey300};
`,pe=o.div`
  ${_};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;

  ${d.laptop} {
    min-width: 160px;
  }
`,V=o(I)`
  font-size: 20px;
`,ge=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.systemColors.blue600};

  ${V} {
    color: ${e=>e.theme.systemColors.white};
  }
`,$e=o.div`
  display: flex;
  justify-content: center;
`,me=o(te)`
  margin-bottom: ${e=>e.theme.spacing.sp16};
  max-width: 346px;
`;export{fe as O};
//# sourceMappingURL=OptimalDataVariant-vc1oVeeP.js.map
