import{r as i,bO as _,j as s,jy as H,u as b,x as j,a as p,a1 as x,bw as M,bc as z}from"./index-3WWdADc-.js";import{bu as $,p as A,bO as F,u as m,bP as E,bQ as I,bR as N,bS as O,bT as W,bU as D,bV as w,bW as T,bX as k,bY as v,bZ as P,b_ as L,b$ as B,c0 as V,c1 as Q,c2 as U,c3 as X,c4 as Y,c5 as Z,c6 as q,c7 as G,x as J}from"./Learn-iEpSD2rS.js";const K=i.lazy(()=>_(()=>import("./MapChartModule-EQq7sL--.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(e=>({default:e.MapChartModule}))),Ce=i.forwardRef((e,o)=>s.jsx(i.Suspense,{fallback:null,children:s.jsx(K,{ref:o,...e})})),ee=i.forwardRef(({categoryColor:e,value:o,folderChipType:t="filter",icon:n,folderName:l,children:a,selected:u,onClick:d,onRemove:r,$isHovered:c=!1},h)=>s.jsxs(y,{$categoryColor:e,$selected:u,$folderChipType:t,ref:h,onClick:()=>d&&d(o),$isHovered:c,children:[n||s.jsx(C,{icon:H,size:"xs"}),s.jsx($,{children:l||a}),r&&s.jsx(g,{onClick:R=>{R.stopPropagation(),r==null||r(o)},"data-testid":"remove-icon",size:"xs"})]})),y=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px ${e=>e.theme.spacing.sp8};
  min-height: 24px;
  border-radius: 24px;
  cursor: ${e=>e.$folderChipType==="filter"?"pointer":"default"};

  ${({$categoryColor:e,$selected:o,$folderChipType:t})=>o?te(e):oe(e,t)}
  &:hover {
    ${({$categoryColor:e,$selected:o,$folderChipType:t})=>o?S(e):f(e,t)}
  }

  ${({$isHovered:e,$categoryColor:o,$selected:t,$folderChipType:n})=>e&&!t&&f(o,n)}

  ${({$isHovered:e,$categoryColor:o,$selected:t})=>e&&t&&S(o)}
`,C=b(j)``,oe=(e,o)=>o==="filter"?p`
        border: 1px solid ${({theme:t})=>t.threeToneColors[e].tone100};

        ${$} {
          ${x};
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }

        ${C} {
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }
      `:p`
        background-color: ${({theme:t})=>t.threeToneColors[e].tone100};

        ${$} {
          ${x};
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }

        ${C} {
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }
      `,te=e=>p`
  background-color: ${({theme:o})=>o.threeToneColors[e].tone600};
  border: 1px solid ${({theme:o})=>o.threeToneColors[e].tone600};

  ${$} {
    ${x};
    color: ${({theme:o})=>o.threeToneColors[e].tone100} !important;
  }

  ${C} {
    color: ${({theme:o})=>o.threeToneColors[e].tone100} !important;
  }
`,f=(e,o)=>o==="filter"?p`
        border: 1px solid ${({theme:t})=>t.threeToneColors[e].tone600};

        ${$} {
          ${x};
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }

        ${C} {
          color: ${({theme:t})=>t.threeToneColors[e].tone600} !important;
        }
      `:p``,S=e=>p`
  background-color: ${({theme:o})=>o.threeToneColors[e].tone700};
  border: 1px solid ${({theme:o})=>o.threeToneColors[e].tone700};

  ${$} {
    ${x};
    color: ${({theme:o})=>o.threeToneColors[e].tone100} !important;
  }

  ${C} {
    color: ${({theme:o})=>o.threeToneColors[e].tone100} !important;
  }
`,g=b(j).attrs({icon:M})`
  color: ${({theme:e})=>e.systemColors.grey600};
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.systemColors.black};
  }
`,xe=Object.assign(ee,{FolderChipWrapper:y,FoldersIcon:C,ChipTitle:$,RemoveIcon:g}),se=i.memo(()=>{const e=A(F),{sticky:o,draggable:t,hidden:n,rightSticky:l}=m(E),a=m(I);i.useEffect(()=>{let r=0,c=r;a.forEach(h=>{r=r+(h.static||0),c=c+(h.static?h.minWidth||h.static:0)}),r&&a.some(h=>h.static)&&(r=r+3,c=c+3),e({width:r,initialWidth:r,minWidth:c})},[a,e]);const u=t.filter(r=>!n.includes(r)),d=i.useCallback(r=>r.map(c=>s.jsx(N,{field:c,fixed:!0},c)),[]);return s.jsxs(s.Fragment,{children:[s.jsx(re,{children:d(o)}),s.jsx(O,{columns:u,fixed:!0}),s.jsx(ne,{children:d(l)})]})}),re=b(W)`
  position: sticky;
  z-index: 11;
`,ne=b(D)`
  position: sticky;
  z-index: 11;
`,le=({border:e,className:o})=>{const t=m(P),{footer:n,header:l}=m(L),a=i.useRef(null);return B(a),t?s.jsxs(ce,{className:o,ref:a,children:[l==null?void 0:l([]),s.jsx(de,{children:s.jsx(ie,{border:e})}),n==null?void 0:n()]}):null},ae=i.memo(le),ie=({border:e})=>{const{t:o}=z(),t=m(V),{noDataState:n,errorState:l}=m(Q),{data:a,status:u}=m(U),d=m(X);return s.jsxs(he,{$columnsStyle:t.style,$columnsCount:t.count,$border:e,children:[s.jsx(se,{}),s.jsx(Y,{status:u,error:l||o("table.error"),children:a.length?s.jsx(Z,{count:t.count,rows:d}):s.jsx(be,{children:n||o("table.noData")})})]})},ce=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,de=b.div`
  position: relative;
  display: flex;
  overflow: auto;
  flex-grow: 1;

  ${w}:last-child {
    ${T} {
      border-bottom: none;
    }
  }
`,be=b.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  padding-top: ${({theme:e})=>e.spacing.sp64};
`,he=b(k)`
  border-radius: initial;
  border: none;

  ${v} {
    background-color: ${({theme:e})=>e.systemColors.white};

    ${({$border:e})=>e&&p`
        border-bottom: 2px solid ${({theme:o})=>o.systemColors.grey200};
      `}
    div {
      color: ${({theme:e})=>e.systemColors.black};
    }
  }

  ${T} {
    ${({$border:e})=>!e&&p`
        border-bottom: none;
      `}
  }
`,me={haveCheckbox:!1},pe=({className:e,border:o,...t})=>{const n=i.useMemo(()=>({noRowHover:!0,...t.behavior}),[t.behavior]),l=i.useMemo(()=>t.columns.map(d=>({...d,noHover:!0,sortable:!1})),[t.columns]),a=i.useMemo(()=>({...t,columns:l,selected:me,behavior:n}),[n,l,t]),u=G(a);return s.jsx(J.Provider,{value:u,children:s.jsx(ae,{className:e,border:o})})},Te=Object.assign(pe,{Cell:T,TableRowContents:w,Header:v,EmptyCell:q,StyledTable:k});export{xe as F,Ce as M,Te as N,y as a};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/MapChartModule-EQq7sL--.js","static/index-3WWdADc-.js","static/highcharts-3nykS9Sh.js","static/highcharts-react.min-km6L4za6.js","static/server.browser-XcXyx2ie.js","static/mergeRefs-97mQYrgp.js","static/merge-q4iB0WCC.js","static/Learn-iEpSD2rS.js","static/useAutoPlay-ceAGW3YF.js","static/_initCloneObject-fWvGzI93.js","static/isPlainObject-fpFAdWHq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=NewSimpleTable-66rkfBtT.js.map
