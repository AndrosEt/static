import{r as x,j as r,bh as y,ju as D,u as e,x as b,a as p,a1 as u,b7 as H,iz as N,id as P,iq as I,ih as _,dj as U,il as G,iv as R,ik as O,im as W,io as J,ir as S,ip as X,ig as q,ix as K,ii as Y,iu as Z,iy as Q,it as V,iw as oo,is as no,ij as so,ie as ro,$ as io,aP as eo,N as ao,bH as lo,dJ as to,Z as po,be as j,I as f,aY as ho,b9 as xo}from"./index-VVIvRZBh.js";import{bx as c}from"./Learn-nfpDmxZa.js";import{r as co,f as go}from"./useAutoPlay-JZxKBgmm.js";const $o=o=>o.id,Po=({selected:o,setSelected:n,getId:s=$o,data:i,disableHeader:h})=>{const a=x.useMemo(()=>i==null?void 0:i.every(t=>o==null?void 0:o.includes(s(t))),[i,s,o]),l=x.useMemo(()=>i==null?void 0:i.some(t=>o==null?void 0:o.includes(s(t))),[i,s,o]);return x.useEffect(()=>{n==null||n([])},[i]),{selectColumn:x.useMemo(()=>({field:"__checkbox__",header:i!=null&&i.length?r.jsx(y,{readOnly:!0,disabled:h,checked:l,indeterminate:l&&!a,onChange:()=>{l?n==null||n([]):n==null||n((i==null?void 0:i.map(s))||[])}}):null,render:t=>{const $=s(t),C=o==null?void 0:o.includes($);return r.jsx(y,{checked:C,onChange:()=>{C?n==null||n((o==null?void 0:o.filter(m=>m!==$))||[]):n==null||n([...o||[],$])}})}}),[a,i,h,s,l,o,n])}},uo=x.forwardRef(({categoryColor:o,value:n,folderChipType:s="filter",icon:i,folderName:h,children:a,selected:l,onClick:d,onRemove:t,$isHovered:$=!1},C)=>r.jsxs(k,{$categoryColor:o,$selected:l,$folderChipType:s,ref:C,onClick:()=>d&&d(n),$isHovered:$,children:[i||r.jsx(g,{icon:D,size:"xs"}),r.jsx(c,{children:h||a}),t&&r.jsx(w,{onClick:m=>{m.stopPropagation(),t==null||t(n)},"data-testid":"remove-icon",size:"xs"})]})),k=e.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px ${o=>o.theme.spacing.sp8};
  min-height: 24px;
  border-radius: 24px;
  cursor: ${o=>o.$folderChipType==="filter"?"pointer":"default"};

  ${({$categoryColor:o,$selected:n,$folderChipType:s})=>n?mo(o):Co(o,s)}
  :hover {
    ${({$categoryColor:o,$selected:n,$folderChipType:s})=>n?T(o):F(o,s)}
  }

  ${({$isHovered:o,$categoryColor:n,$selected:s,$folderChipType:i})=>o&&!s&&F(n,i)}

  ${({$isHovered:o,$categoryColor:n,$selected:s})=>o&&s&&T(n)}
`,g=e(b)``,Co=(o,n)=>n==="filter"?p`
        border: 1px solid ${({theme:s})=>s.threeToneColors[o].tone100};

        ${c} {
          ${u};
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }

        ${g} {
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }
      `:p`
        background-color: ${({theme:s})=>s.threeToneColors[o].tone100};

        ${c} {
          ${u};
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }

        ${g} {
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }
      `,mo=o=>p`
  background-color: ${({theme:n})=>n.threeToneColors[o].tone600};
  border: 1px solid ${({theme:n})=>n.threeToneColors[o].tone600};

  ${c} {
    ${u};
    color: ${({theme:n})=>n.threeToneColors[o].tone100} !important;
  }

  ${g} {
    color: ${({theme:n})=>n.threeToneColors[o].tone100} !important;
  }
`,F=(o,n)=>n==="filter"?p`
        border: 1px solid ${({theme:s})=>s.threeToneColors[o].tone600};

        ${c} {
          ${u};
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }

        ${g} {
          color: ${({theme:s})=>s.threeToneColors[o].tone600} !important;
        }
      `:p``,T=o=>p`
  background-color: ${({theme:n})=>n.threeToneColors[o].tone700};
  border: 1px solid ${({theme:n})=>n.threeToneColors[o].tone700};

  ${c} {
    ${u};
    color: ${({theme:n})=>n.threeToneColors[o].tone100} !important;
  }

  ${g} {
    color: ${({theme:n})=>n.threeToneColors[o].tone100} !important;
  }
`,w=e(b).attrs({icon:H})`
  color: ${({theme:o})=>o.systemColors.grey600};
  cursor: pointer;

  &:hover {
    color: ${o=>o.theme.systemColors.black};
  }
`,Io=Object.assign(uo,{FolderChipWrapper:k,FoldersIcon:g,ChipTitle:c,RemoveIcon:w}),jo={GB:r.jsx(N,{}),AU:r.jsx(P,{}),MX:r.jsx(I,{}),CA:r.jsx(_,{}),US:r.jsx(U,{}),DE:r.jsx(G,{}),ES:r.jsx(R,{}),FR:r.jsx(O,{}),IN:r.jsx(W,{}),IT:r.jsx(J,{}),NL:r.jsx(S,{}),JP:r.jsx(X,{}),BR:r.jsx(q,{}),TR:r.jsx(K,{}),CN:r.jsx(Y,{}),SG:r.jsx(Z,{}),AE:r.jsx(Q,{}),SA:r.jsx(V,{}),SE:r.jsx(oo,{}),PL:r.jsx(no,{}),EG:r.jsx(so,{}),BE:r.jsx(ro,{})},fo=({code:o,flag:n=!0,label:s=!0})=>{const{t:i}=eo();return r.jsxs(v,{children:[n&&r.jsx(A,{children:jo[o]}),s&&r.jsx(B,{children:i(`countries.${o}`)})]})},v=e.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sp8};
`,A=e.div`
  font-size: 27px;
  width: 27px;
  display: flex;
  align-items: center;
`,B=e.div`
  ${io};
  color: ${o=>o.theme.systemColors.grey800};
`,_o=Object.assign(fo,{Wrapper:v,Flag:A,Label:B}),Uo=({layout:o,defaultComponents:n,custom:s})=>{const i=x.useMemo(()=>o.lg.filter(a=>(n||[]).every(l=>l.i!==a.i)).map(a=>a.i),[n,o]),h=x.useMemo(()=>[...n||[],...i.map(a=>{var l,d;return{i:a,component:s.component,autoHeight:typeof s.autoHeight=="function"?(l=s.autoHeight)==null?void 0:l.call(s,a):s.autoHeight,autoDelay:typeof s.autoDelay=="function"?(d=s.autoDelay)==null?void 0:d.call(s,a):s.autoDelay}})],[n,i,s.component,s.autoHeight,s.autoDelay]);return{keys:i,components:h}},bo=({title:o,onClose:n})=>r.jsxs(yo,{children:[r.jsx(ao,{buttonType:"icon",onClick:n,icon:r.jsx(b,{icon:lo}),size:"200"}),r.jsxs(Fo,{children:[r.jsx(To,{href:to("/dashboard"),children:r.jsx(ko,{})}),r.jsx(wo,{children:o})]})]}),yo=e.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: ${({theme:o})=>o.spacing.sp12};
  padding: ${({theme:o})=>o.spacing.sp12};
  background-color: ${({theme:o})=>o.systemColors.white};
  box-shadow:
    0 4px 16px -8px rgba(103, 132, 162, 0.32),
    0 1px 4px 0 rgba(103, 132, 162, 0.16);
  z-index: 100;
`,Fo=e.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sp32};
`,To=e.a`
  text-decoration: none;
`,ko=e(co)`
  width: 20px;
  height: auto;
`,wo=e.p`
  ${po}
`,vo=o=>r.jsx(Ao,{...o,lockBody:!0,zIndex:o.zIndex||ho.modal,children:r.jsxs(M,{children:[r.jsx(bo,{title:o.title,onClose:o.onClose}),r.jsx(z,{children:o.children}),o.footer&&r.jsx(r.Fragment,{children:r.jsx(L,{children:o.footer})})]})}),Ao=e(j)`
  ${j.SubWrapper} {
    padding: 0;
  }

  ${j.Content} {
    width: 100%;
    height: 100%;
  }
`,M=e.div`
  display: flex;
  flex-direction: column;
  background: ${o=>o.theme.systemColors.white};
  width: 100%;
  height: 100%;
`,E=e.div`
  ${f.laptop} {
    padding: ${o=>`${o.theme.spacing.sp12} ${o.theme.spacing.sp24}`};
  }

  ${f.desktop} {
    padding: ${o=>`${o.theme.spacing.sp16} ${o.theme.spacing.sp32}`};
  }

  ${f.extraDesktop} {
    padding: ${o=>`${o.theme.spacing.sp24} ${o.theme.spacing.sp48}`};
  }
`,z=e(E)`
  flex-grow: 1;
  overflow-y: auto;
  flex-basis: 0;
`,L=e(E)`
  border-top: 1px solid ${({theme:o})=>o.systemColors.grey200};
  flex: 0 0 auto;
`,Go=Object.assign(vo,{Content:M,Footer:L,Children:z}),Bo=(o,n)=>{if(o||o===0){if(o<=n)return"low";if(o>n&&o<=n*2)return"middle";if(o>n*2)return"high"}return"unknown"},Ro=({acos:o,target:n=30,type:s="normal",className:i})=>{const h=Bo(o,n);return r.jsxs(Mo,{className:i,children:[r.jsx(Eo,{type:s,children:typeof o!="number"?"-%":go({value:o,style:"percent"})}),r.jsx(zo,{level:h})]})},Mo=e.div`
  display: flex;
  align-items: center;
`,Eo=e.div`
  font-weight: ${o=>o.type};
`,zo=e.div`
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  //top: -2px;
  ${o=>Lo[o.level]}
`,Lo={high:p`
    background-color: ${({theme:o})=>o.systemColors.orange400};
  `,middle:p`
    background-color: ${({theme:o})=>o.systemColors.yellow400};
  `,low:p`
    background-color: ${({theme:o})=>o.systemColors.green600};
  `,unknown:p`
    background-color: ${({theme:o})=>o.systemColors.grey300};
  `},Oo=o=>r.jsx(xo,{...o});export{Ro as A,_o as C,Io as F,Go as P,zo as R,bo as S,Oo as a,Uo as b,k as c,jo as f,Po as u};
//# sourceMappingURL=CounterMultiSelect-umjphkvh.js.map
