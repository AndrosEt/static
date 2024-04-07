import{av as l,a6 as c,P as p,aF as d,g as h,j as e,E as u,x as g,c7 as $,a as o,K as i,y as k,Z as x,u as r}from"./index-VVIvRZBh.js";const b=(t,s,a)=>{var n;return t==="AMAZON"||t==="AM"?`https://${(s?(n=l(t,"store",s))==null?void 0:n.domain:"amazon.com")||"amazon.com"}/dp/${a}`:`https://www.walmart.com/ip/name/${a}`},A=(t,s)=>{const a=d("domain",t);return a.platform==="AMAZON"?`https://www.${a.domain}/s?k=${s.split(" ").join("+")}`:`https://www.${a.domain}/search?query=${s.split(" ").join("+")}`},f="/cerebro",T=({marketplace:t,productIds:s})=>h(f,{marketplace:t,productIds:s},{arrayFormat:"index"}),L=p+"/api/v1/customers/segment-track",I=c("https://pzn-ads-ui.pacvue.com"),M="https://adtomic.helium10.com/panel/:accountId/campaigns/:campaign/details",C="https://adtomic.helium10.com/panel/:accountId/analytics/search-terms",D="https://adtomic.helium10.com/panel/:accountId/analytics/adgroups",R="https://adtomic.helium10.com/panel/:accountId/dashboard",S=c("https://profits-tools.helium10.com"),B=(t,s)=>`https://${t||"amazon.com"}/stores/node/${s}`,y=({content:t,className:s,fontSize:a})=>e.jsx(u,{content:t,children:e.jsx("div",{className:s,children:e.jsx(g,{icon:$,fontSize:a})})}),j=({title:t,tooltip:s,size:a})=>e.jsxs(w,{children:[e.jsx(m,{size:a,children:t}),e.jsx(y,{content:s})]}),v={100:{title:o`
      ${i};
    `,icon:o`
      svg {
        font-size: 16px;
      }
    `},200:{title:o`
      ${k};
      color: ${t=>t.theme.systemColors.black};
    `,icon:o`
      svg {
        font-size: 16px;
      }
    `},300:{title:o`
      ${i};
    `,icon:o`
      svg {
        font-size: 16px;
      }
    `},400:{title:o`
      ${x};
      color: ${t=>t.theme.systemColors.black};
    `,icon:o`
      svg {
        font-size: 20px;
      }
    `}},w=r.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp8};

  svg {
    color: ${t=>t.theme.systemColors.grey600} !important;
  }
`,m=r.div`
  ${({size:t})=>v[t].title}
`,F=Object.assign(j,{Title:m});export{F as T,I as a,B as b,C as c,D as d,M as e,R as f,b as g,T as h,y as i,L as j,S as p,A as s};
//# sourceMappingURL=TitleWithTooltip-fUxfpTI3.js.map
