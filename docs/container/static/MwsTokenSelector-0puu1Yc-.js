import{j as e,cn as c,dq as d,bd as t,u as a,c9 as g,b8 as x,d6 as f}from"./index-VVIvRZBh.js";import{a1 as w}from"./Learn-nfpDmxZa.js";const l={amazon:e.jsx(w,{}),walmart:e.jsx(c,{})},m=s=>s?{options:j(s),groups:u(s)}:{options:[],groups:[]},u=s=>s.map(n=>({id:i(n),label:e.jsxs(M,{children:[l[n.platform],n.alias||n.seller]},n.alias)})),j=s=>s.reduce((n,r)=>[...n,...r.marketplaces.map(o=>({seller:r.seller,platform:r.platform,alias:r.alias,name:o.name,domain:o.domain,accountId:d()||"",label:h(o.domain),value:S({...r,...o}),group:i(r),disabled:o.disabled}))],[]);function h(s){return e.jsxs(b,{children:[e.jsx(k,{children:t[String(s).replace("www.","")]}),s]})}function i(s){return s.seller+s.alias+s.platform+s.region}function S(s){return`${s==null?void 0:s.name}|${s==null?void 0:s.seller}|${s==null?void 0:s.domain}|${s==null?void 0:s.alias}`.trim()}const k=a(g)`
  display: inline;
`,b=a.div`
  display: flex;
  gap: ${({theme:s})=>s.spacing.sp8};
`,M=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sp8};
`,V=({items:s,...n})=>{const{groups:r,options:o}=m(s);return e.jsx(x,{...n,options:o,groups:r,renderValue:p=>e.jsx(T,{...p})})},T=({value:s})=>{const n=s[0];return n?e.jsxs(y,{children:[e.jsx($,{children:l[n.platform]}),e.jsx(L,{children:t[String(n==null?void 0:n.domain).replace("www.","")]}),e.jsx(F,{id:n.domain,children:n.alias||n.seller})]}):null},$=a.div`
  display: flex;
  margin-right: ${({theme:s})=>s.spacing.sp8};
`,y=a.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`,L=a.div`
  ${f};
  margin-right: 6px;
  display: flex;
`,F=a.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;export{L as F,V as M,i as a,h as c,S as g,l as p,m as u};
//# sourceMappingURL=MwsTokenSelector-0puu1Yc-.js.map
