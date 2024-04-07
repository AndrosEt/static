import{r as l,by as T,j as t,u as m,a as S,aP as j}from"./index-VVIvRZBh.js";import{l as v,bR as w,u as d,bS as C,bT as g,bU as k,bV as R,bW as $,bX as _,bY as p,bZ as x,b_ as f,b$ as y,c0 as M,c1 as A,c2 as E,c3 as H,c4 as z,c5 as N,c6 as D,c7 as W,c8 as L,c9 as P,ca as I,q as O}from"./Learn-nfpDmxZa.js";const V=l.lazy(()=>T(()=>import("./MapChartModule-UD9prBNo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(e=>({default:e.MapChartModule}))),oe=l.forwardRef((e,o)=>t.jsx(l.Suspense,{fallback:null,children:t.jsx(V,{ref:o,...e})})),q=l.memo(()=>{const e=v(w),{sticky:o,draggable:s,hidden:n,rightSticky:i}=d(C),c=d(g);l.useEffect(()=>{let a=0,r=a;c.forEach(u=>{a=a+(u.static||0),r=r+(u.static?u.minWidth||u.static:0)}),a&&c.some(u=>u.static)&&(a=a+3,r=r+3),e({width:a,initialWidth:a,minWidth:r})},[c,e]);const h=s.filter(a=>!n.includes(a)),b=l.useCallback(a=>a.map(r=>t.jsx(k,{field:r,fixed:!0},r)),[]);return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:b(o)}),t.jsx(R,{columns:h,fixed:!0}),t.jsx(F,{children:b(i)})]})}),B=m($)`
  position: sticky;
  z-index: 11;
`,F=m(_)`
  position: sticky;
  z-index: 11;
`,U=({border:e,className:o})=>{const s=d(M),{footer:n,header:i}=d(A),c=l.useRef(null);return E(c),s?t.jsxs(Z,{className:o,ref:c,children:[i==null?void 0:i([]),t.jsx(G,{children:t.jsx(Y,{border:e})}),n==null?void 0:n()]}):null},X=l.memo(U),Y=({border:e})=>{const{t:o}=j(),s=d(H),{noDataState:n,errorState:i}=d(z),{data:c,status:h}=d(N),b=d(D);return t.jsxs(K,{$columnsStyle:s.style,$columnsCount:s.count,$border:e,children:[t.jsx(q,{}),t.jsx(W,{status:h,error:i||o("table.error"),children:c.length?t.jsx(L,{count:s.count,rows:b}):t.jsx(J,{children:n||o("table.noData")})})]})},Z=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,G=m.div`
  position: relative;
  display: flex;
  overflow: auto;
  flex-grow: 1;

  ${p}:last-child {
    ${x} {
      border-bottom: none;
    }
  }
`,J=m.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  padding-top: ${({theme:e})=>e.spacing.sp64};
`,K=m(f)`
  border-radius: initial;
  border: none;

  ${y} {
    background-color: ${({theme:e})=>e.systemColors.white};

    ${({$border:e})=>e&&S`
        border-bottom: 2px solid ${({theme:o})=>o.systemColors.grey200};
      `}
    div {
      color: ${({theme:e})=>e.systemColors.black};
    }
  }

  ${x} {
    ${({$border:e})=>!e&&S`
        border-bottom: none;
      `}
  }
`,Q={haveCheckbox:!1},ee=({className:e,border:o,...s})=>{const n=l.useMemo(()=>({noRowHover:!0,...s.behavior}),[s.behavior]),i=l.useMemo(()=>s.columns.map(b=>({...b,noHover:!0,sortable:!1})),[s.columns]),c=l.useMemo(()=>({...s,columns:i,selected:Q,behavior:n}),[n,i,s]),h=I(c);return t.jsx(O.Provider,{value:h,children:t.jsx(X,{className:e,border:o})})},ae=Object.assign(ee,{Cell:x,TableRowContents:p,Header:y,EmptyCell:P,StyledTable:f});export{oe as M,ae as N};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/MapChartModule-UD9prBNo.js","static/index-VVIvRZBh.js","static/highcharts-RNwAsTZN.js","static/highcharts-react.min-Kl4Av0LS.js","static/server.browser-VH3XJs1z.js","static/mergeRefs-97mQYrgp.js","static/merge-0SZDn_cq.js","static/Learn-nfpDmxZa.js","static/useAutoPlay-JZxKBgmm.js","static/_initCloneObject-ZEvi6ADI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=NewSimpleTable-7wAI-h_n.js.map
