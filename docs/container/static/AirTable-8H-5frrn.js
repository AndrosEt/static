import{u as o,r as p,j as r,a as v,$ as w,Q as k,a2 as N}from"./index-3WWdADc-.js";import{al as S,aj as T,ak as A,a0 as B}from"./Learn-iEpSD2rS.js";import{f as D}from"./useAutoPlay-ceAGW3YF.js";const R=({column:e,row:t,width:a,currencyFormat:i})=>{const l=p.useMemo(()=>{var c;if(e.render)return(c=e.render)==null?void 0:c.call(e,t);const n=t[e.field],s=e.type||typeof n;return s==="text"||s==="string"?n:s==="number"?D({value:n}):s==="percent"?S(n):s==="currency"?i(n):e.type==="date"?T(n):e.type==="datetime"?A(n):null},[e,i,t]);return r.jsx(d,{width:a,children:r.jsx(f,{$align:e.align,children:l||"-"})})},E={left:"flex-start",center:"center",right:"flex-end"},f=o.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>E[e.$align||"left"]};
`,d=o.td`
  padding: 8px;
`,H=({columns:e,data:t,currency:a,status:i="loaded",noDataContent:l="No Data",rowKey:n,className:s,hideZebra:c,errorContent:$,loadingContent:C})=>{const F=p.useCallback(h=>N({amount:h,currency:a}),[a]),m=p.useMemo(()=>e.filter(h=>!h.hidden),[e]);return r.jsxs(y,{className:s,children:[r.jsxs(u,{children:[r.jsx(M,{columns:m}),i==="loaded"&&r.jsx(Z,{columns:m,currencyFormat:F,data:t,hideZebra:c,rowKey:n})]}),i==="loaded"&&(t==null?void 0:t.length)===0&&r.jsx(r.Fragment,{children:l||r.jsx(x,{children:"No Data"})}),i==="error"&&r.jsx(r.Fragment,{children:$||r.jsx(x,{children:"Oops. Error!"})}),i==="loading"&&r.jsx(r.Fragment,{children:C||r.jsx(O,{children:r.jsx(B,{status:i})})})]})},Z=({columns:e,data:t,hideZebra:a,rowKey:i,currencyFormat:l})=>r.jsx("tbody",{children:t==null?void 0:t.map(n=>r.jsx(b,{$hideZebra:a,children:e.map(s=>r.jsx(R,{column:s,currencyFormat:l,row:n,width:s.width},s.field.toString()))},n[i||e[0].field]))}),M=({columns:e})=>r.jsx("thead",{children:r.jsx(g,{children:e.map(t=>r.jsx(j,{as:"th",children:r.jsx(f,{$align:t.align,children:t.header})},t.field.toString()))})}),g=o.tr`
  border: none;
`,b=o.tr`
  border: none;
  ${e=>!e.$hideZebra&&v`
      &:nth-child(odd) {
        ${d} {
          background-color: ${t=>t.theme.systemColors.grey100};
        }

        ${d}:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        ${d}:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }
    `}
`,j=o(d)`
  ${w};
  padding: 8px;
  color: ${e=>e.theme.systemColors.black};
`,u=o.table`
  ${k};
  border-collapse: collapse;
  width: 100%;
`,y=o.div`
  position: relative;
`,x=o.div`
  padding: 24px;
  text-align: center;
  background-color: ${e=>e.theme.systemColors.grey100};
  border-radius: 6px;
`,O=o.div`
  min-height: 100px;
  position: relative;
`,P=Object.assign(H,{Wrapper:y,Row:b,HeaderRow:g,Header:j,Cell:d,Table:u,NoData:x});export{P as A};
//# sourceMappingURL=AirTable-8H-5frrn.js.map
