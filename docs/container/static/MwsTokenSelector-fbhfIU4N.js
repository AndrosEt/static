import{j as e,cB as c,dE as d,bz as t,u as o,cp as g,aM as x,dc as f}from"./index-3WWdADc-.js";import{a3 as w}from"./Learn-iEpSD2rS.js";const l={amazon:e.jsx(w,{}),walmart:e.jsx(c,{})},m=s=>s?{options:j(s),groups:u(s)}:{options:[],groups:[]},u=s=>s.map(n=>({id:i(n),label:e.jsxs(T,{children:[l[n.platform],n.alias||n.seller]},n.alias)})),j=s=>s.reduce((n,r)=>[...n,...r.marketplaces.map(a=>({seller:r.seller,platform:r.platform,alias:r.alias,name:a.name,domain:a.domain,accountId:d()||"",label:h(a.domain),value:S({...r,...a}),group:i(r),disabled:a.disabled}))],[]);function h(s){return e.jsxs(M,{children:[e.jsx(k,{children:t[String(s).replace("www.","")]}),s]})}function i(s){return s.seller+s.alias+s.platform+s.region}function S(s){return`${s==null?void 0:s.name}|${s==null?void 0:s.seller}|${s==null?void 0:s.domain}|${s==null?void 0:s.alias}`.trim()}const k=o(g)`
  display: inline;
`,M=o.div`
  display: flex;
  gap: ${({theme:s})=>s.spacing.sp8};
`,T=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sp8};
`,V=({items:s,...n})=>{const{groups:r,options:a}=m(s);return e.jsx(x,{...n,options:a,groups:r,renderValue:p=>e.jsx($,{...p})})},$=({value:s})=>{const n=s[0];return n?e.jsxs(y,{children:[e.jsx(b,{children:l[n.platform]}),e.jsx(L,{children:t[String(n==null?void 0:n.domain).replace("www.","")]}),e.jsx(F,{id:n.domain,children:n.alias||n.seller})]}):null},b=o.div`
  display: flex;
  margin-right: ${({theme:s})=>s.spacing.sp8};
`,y=o.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`,L=o.div`
  ${f};
  margin-right: 6px;
  display: flex;
`,F=o.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;export{L as F,V as M,i as a,h as c,S as g,l as p,m as u};
//# sourceMappingURL=MwsTokenSelector-fbhfIU4N.js.map
