import{u as e,Z as F,Q as k,r as B,j as s,E as $,N as h,x as f,a7 as E,bb as I}from"./index-VVIvRZBh.js";import{e as u,a3 as o}from"./Learn-nfpDmxZa.js";const z=({title:l,actionContent:n,date:i,description:c,onExternalClick:r,additionalContent:d,tooltip:a})=>{const x=i!=null&&i.dateFrom?u(new Date(i.dateFrom),"standard"):null,p=i!=null&&i.dateTo?u(new Date(i.dateTo),"standard"):null,[A,j]=B.useState(!1);return s.jsxs(v,{children:[s.jsxs(b,{children:[s.jsx($,{disabled:!a,delay:0,interactive:!0,colorType:"light",content:a,children:s.jsx(L,{children:l})}),s.jsxs(T,{children:[d&&s.jsx(_,{children:s.jsx(C,{children:d})}),r&&s.jsx(y,{children:s.jsx(h,{buttonType:"icon",size:"100",onClick:r,icon:s.jsx(f,{icon:E}),"data-testid":"external-button"})}),n&&s.jsx(o,{closeByChildrenClick:!1,visible:A,tippy:{placement:"bottom-end",appendTo:document.body},items:n.map((D,m)=>s.jsxs(V,{children:[D.map(({content:g,action:t},w)=>s.jsx(o.Item,{onClick:()=>{t==null||t(),j(!1)},children:g},w)),m<(n==null?void 0:n.length)-1&&s.jsx(o.Divider,{})]},m)),children:s.jsx(y,{children:s.jsx(h,{onClick:()=>j(!0),buttonType:"icon",size:"100",icon:s.jsx(f,{icon:I})})})})]})]}),i&&s.jsx(N,{children:p?`${x} - ${p}`:x}),c&&s.jsx(H,{children:c})]})},v=e.div``,b=e.div`
  display: flex;
  justify-content: space-between;
`,L=e.div`
  ${F}
`,N=e.div`
  ${k};
`,T=e.div`
  display: flex;
  align-items: center;
`,y=e.div`
  margin-left: ${({theme:l})=>l.spacing.sp4};
`,V=e.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`,_=e.div`
  display: flex;
`,C=e.div`
  display: flex;
`,H=e.div``,Q=Object.assign(z,{Container:v,Header:b,Actions:T});export{Q as A,z as _};
//# sourceMappingURL=ActionTitle-Ux2Wbfo7.js.map
