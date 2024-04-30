import{r as m,P as v,f as L,g as Q,A as se,G as J,aB as ne,u as a,$ as oe,dl as I,j as s,x as w,b3 as ie,b4 as ce,N as $,cm as re,a as x,Z as ae,Q as le,bi as de,c1 as me,S as he,K as pe,I as C,c5 as ue,D as xe,y as ge}from"./index-3WWdADc-.js";import{P as fe}from"./OptimalData-it69sBiU.js";import{N as be}from"./NumberIndicator-vcbzcNgG.js";const ke=(e,t,i={})=>{i={path:"/",...i},i.expires instanceof Date&&(i.expires=i.expires.toUTCString());let l=encodeURIComponent(e)+"="+encodeURIComponent(t),o;for(o in i){l+="; "+o;const r=i[o];r!==!0&&(l+="="+r)}document.cookie=l},F=e=>{var t;return(t=document.cookie.split(";").find(i=>i.trim().startsWith(`${e}=`)))==null?void 0:t.split("=")[1]},H=()=>!window.chrome||!!document.body.getAttribute("data-helium10-main-tool-id"),we=()=>{const[e,t]=m.useState(H());return m.useEffect(()=>{const i=setInterval(()=>{H()?t(!0):e&&t(!1)},2e3);return()=>clearInterval(i)},[e]),e},$e=v+"/api/v1/customers/segment-track",K=e=>L({method:"POST",headers:{"Content-Type":"application/json"},url:$e,params:e,withCredentials:!0}),j="chrome-extension",ye="https://www.amazon.com/s?k=egg+tray&crid=QJQJGJ2QF7MN&open-xray=true&sprefix=egg+tray%2Caps%2C122&ref=nb_sb_noss_1",A=()=>new URL(window.location.href,window.location.origin),mt=e=>{const t=A(),i=t.pathname.lastIndexOf("/",t.pathname.lastIndexOf("/")-1);return t.pathname=t.pathname.slice(0,i),(t.pathname==="/"?"":t.pathname)+`/${e}`+t.search},ht=()=>{const e=A(),t=e.pathname.lastIndexOf("/");return e.pathname=`${e.pathname.slice(0,t)}/tokens-manager/add`,e.pathname+e.search},pt="https://developer.walmart.com/account/generateKey",ut="https://helium10.zendesk.com/knowledge/articles/4404261329819/en-us?brand_id=1135248",xt="https://members.helium10.com/subscribe",gt="https://adtomic.helium10.com/",Ce=v+"/new-account/tokens-manager-list",G="isRecommendedToolsBlockDismissed",je=v+"/api/v1/customers/recommended-tools",ve=v+"/api/v1/customers/one-time-action",Pe=async e=>await L({url:Q(je,{}),withCredentials:!0,signal:e}).then(Te),Te=e=>e==null?void 0:e.data,Ee=async e=>await L({method:"POST",url:Q(ve,{}),params:{key:G},signal:e}).then(Le),Le=e=>e==null?void 0:e.results,p=se(()=>({data:null,close:null,slider:{breakPoints:[],scrollWidth:0,childSize:0}})),T=J(p,"data",(e,t)=>Pe(t==null?void 0:t.signal)),q=J(p,"close",(e,t)=>Ee(t==null?void 0:t.signal),{rejected:()=>{q.set({key:G,seen:!0})}}),E=ne(p,"slider"),Ie=()=>{var o;const{t:e}=I(),t=p(r=>{var d;return(d=r.data)==null?void 0:d.recommendedTools}),i=((o=t==null?void 0:t.filter(r=>r==null?void 0:r.wasUsed))==null?void 0:o.length)||0,l=(t==null?void 0:t.length)||0;return s.jsxs(V,{children:[s.jsx(X,{children:e("recommendedTools.steps",{items:`${i}/${l}`})}),s.jsx(Z,{children:s.jsx(fe,{size:"200",total:l,progress:[{value:i}]})})]})},V=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,X=a.div`
  ${oe};
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  color: ${e=>e.theme.systemColors.grey400};
`,Z=a.div`
  max-width: 275px;
  flex-grow: 1;
`,Se=Object.assign(Ie,{Wrapper:V,Label:X,Progress:Z}),Be=m.forwardRef(({children:e},t)=>s.jsx(_e,{children:s.jsx(De,{ref:t,children:e})})),Re=({slideLeft:e,slideRight:t})=>{const i=p(n=>n.slider.breakPoints),l=m.useRef(null),o=m.useRef(null),r=()=>{var n,h;(h=(n=l==null?void 0:l.current)==null?void 0:n.blur)==null||h.call(n),e==null||e()},d=()=>{var n,h;(h=(n=o==null?void 0:o.current)==null?void 0:n.blur)==null||h.call(n),t==null||t()};return s.jsxs(Oe,{children:[s.jsx(We,{size:"200",buttonType:"icon",ref:l,disabled:i.length===0,icon:s.jsx(w,{icon:ie}),onClick:r}),s.jsx(ze,{size:"200",buttonType:"icon",ref:o,disabled:i.length===0,icon:s.jsx(w,{icon:ce}),onClick:d})]})},_e=a.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`,De=a.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background-color: transparent;
  }
`,Oe=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${e=>`0 ${e.theme.spacing.sp12} 0`};
`,We=a($)`
  margin-right: ${e=>e.theme.spacing.sp8};
`,ze=a($)``,Ne=(e,t)=>{K({name:"Tool Link Clicked",properties:{location:"dashboardRecommendationsBlock",tool:e}}).finally(()=>{window.open(t,e===j?"_blank":"_self")})},Ue=({id:e,number:t,title:i,description:l,actionTitle:o,url:r,stateType:d})=>s.jsxs(Me,{children:[s.jsxs(Fe,{children:[s.jsxs(He,{children:[s.jsx(be,{size:"100",stateType:d,step:t}),s.jsx(Qe,{$stateType:d,children:i})]}),s.jsx(Je,{$stateType:d,children:l})]}),s.jsx(Ke,{children:s.jsx($,{$size:"200",buttonType:d==="completed"?"tertiary":"secondary",icon:e===j||r.startsWith("http")?s.jsx(w,{icon:re}):null,onClick:()=>Ne(e,r),children:o})})]}),Y={incomplete:{text:x`
      color: ${e=>e.theme.systemColors.black};
    `},completed:{text:x`
      color: ${e=>e.theme.systemColors.grey400};
    `},active:{text:x`
      color: ${e=>e.theme.systemColors.black};
    `},error:{text:x`
      color: ${e=>e.theme.systemColors.black};
    `},disabled:{text:x`
      color: ${e=>e.theme.systemColors.black};
    `}},Me=a.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.systemColors.grey200};
  background: ${e=>e.theme.systemColors.white};
  padding: ${e=>`${e.theme.spacing.sp16} ${e.theme.spacing.sp24}`};
`,Fe=a.div`
  min-height: 146px;
`,He=a.div`
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Qe=a.h3`
  ${ae};
  font-size: 20px;
  margin: ${e=>e.theme.spacing.sp8} 0;
  ${({$stateType:e})=>Y[e].text}
`,Je=a.div`
  ${le};
  margin-bottom: ${e=>e.theme.spacing.sp8};
  ${({$stateType:e})=>Y[e].text}
`,Ke=a.div`
  margin-top: auto;
`,Ae=()=>{const e=m.useRef(null),t=m.useCallback(()=>{var d;const{breakPoints:o}=E.get();let r=0;for(let n=o.length;n>=0;n--)if(e!=null&&e.current&&((d=e==null?void 0:e.current)==null?void 0:d.scrollLeft)>o[n]+10){r=o[n];break}e&&e.current&&(e.current.scrollLeft=r)},[]),i=m.useCallback(()=>{var d;const{breakPoints:o}=E.get();let r=0;for(let n=0;n<=o.length;n++)if(e!=null&&e.current&&((d=e==null?void 0:e.current)==null?void 0:d.scrollLeft)<o[n]-10){r=o[n];break}e&&e.current&&(e.current.scrollLeft=r)},[]),l=de(()=>{var S,B,R,_,D,O,W,z,N,U,M;const o=(B=(S=p==null?void 0:p.getState())==null?void 0:S.slider)==null?void 0:B.scrollWidth,r=(_=(R=p==null?void 0:p.getState())==null?void 0:R.data)==null?void 0:_.recommendedTools,d=((D=e==null?void 0:e.current)==null?void 0:D.scrollLeft)||0,n=((O=e==null?void 0:e.current)==null?void 0:O.scrollWidth)||0,h=((z=(W=e==null?void 0:e.current)==null?void 0:W.children)==null?void 0:z.length)||0,g=((M=(U=(N=e==null?void 0:e.current)==null?void 0:N.children)==null?void 0:U[0])==null?void 0:M.scrollWidth)||0,P=(n-g*h)/h,y=g+P,u=[];let c=0;for(;c<n;)u.push(c),c=c+y;const f=(r==null?void 0:r.findIndex(te=>!te.wasUsed))||0,b=(u==null?void 0:u[f])||0,ee=d/o*100/100*n;e&&e.current&&(e.current.scrollLeft=ee||b),E.patch({scrollWidth:n,childSize:y,breakPoints:u})},300);return m.useEffect(()=>{const o=setInterval(()=>{e.current&&(clearInterval(o),l())},1e3);return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[l]),{ref:e,slideLeft:t,slideRight:i}},ft=()=>{var u;const{t:e}=I(),t=we(),{ref:i,slideLeft:l,slideRight:o}=Ae(),[r,d,n,h]=p(c=>{var f,b,k;return[(f=c.data)==null?void 0:f.isSeller,(b=c.data)==null?void 0:b.seesRecommendations,(k=c.data)==null?void 0:k.recommendedTools,c.close]}),g=n!=null&&n.every(c=>c.wasUsed)?"completed":"initial",P=((n==null?void 0:n.findIndex(c=>!c.wasUsed))||0)+1,y=m.useCallback(()=>{q.action()},[]);return m.useEffect(()=>{T==null||T.action()},[]),h!=null&&h.seen?null:s.jsx(Ge,{children:d&&s.jsxs(qe,{children:[s.jsxs(Ve,{children:[s.jsxs(Xe,{children:[e(r?"recommendedTools.seller.title":`recommendedTools.${g}.title`),g==="completed"&&s.jsx($,{buttonType:"icon",icon:s.jsx(w,{size:"xl",icon:me}),onClick:y})]}),s.jsx(Ze,{children:e(r?"recommendedTools.seller.description":`recommendedTools.${g}.description`)})]}),s.jsx(Be,{ref:i,children:(u=n==null?void 0:n.map)==null?void 0:u.call(n,(c,f)=>{const b=c!=null&&c.wasUsed?"completed":"incomplete",k=f+1;return s.jsx(Ye,{children:s.jsx(Ue,{id:c.id,number:k,title:c.title||c.name,description:c.description,stateType:k===P?"active":b,url:c.id===j&&t?ye:c.link,actionTitle:c.id===j?e(`recommendedTools.buttons.${t?"openExtension":"installExtension"}`):c.cta??e("recommendedTools.buttons.open",{tool:c.name})})},c.id)})}),s.jsxs(et,{children:[s.jsx(tt,{children:s.jsx(Se,{})}),s.jsx(Re,{slideLeft:l,slideRight:o})]})]})})},Ge=a.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 24px;
`,qe=a.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.systemColors.grey220};
  background: ${e=>e.theme.systemColors.white};
  padding: ${e=>e.theme.spacing.sp24};
`,Ve=a.header`
  margin-bottom: ${e=>e.theme.spacing.sp24};
`,Xe=a.h1`
  ${he};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${e=>e.theme.spacing.sp8};
`,Ze=a.p`
  ${pe}
`,Ye=a.div`
  display: inline-block;
  min-width: 270px;
  width: 270px;
  margin-right: ${e=>e.theme.spacing.sp16};

  ${C.mobile} {
    min-width: 360px;
    width: 360px;
  }

  ${C.laptop} {
    min-width: 378px;
    width: 378px;
  }
`,et=a.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.sp24};
`,tt=a.div`
  width: 483px;
`,st=()=>{const{t:e}=I(),[t,i]=m.useState(!0);m.useEffect(()=>{F("tokenButtonClicked")&&i(!1)},[]);const l=m.useCallback(()=>{F("tokenButtonClicked")||(ke("tokenButtonClicked","true"),i(!1)),K({name:"Connect Token CTA Clicked",properties:{location:"recommendedToolsBlockDashboard"}}).finally(()=>{window.open(Ce,"_self")})},[]);return s.jsxs(it,{children:[s.jsx(rt,{children:e("recommendedTools.tokenConnection.title")}),s.jsx(ct,{buttonType:"primary",icon:s.jsx(w,{icon:ue}),onClick:l,$isPulsed:t,children:e("recommendedTools.buttons.connect")})]})},nt=xe`
  0% {
    box-shadow: 0 0 0 0 rgba(10, 111, 232, 0.5);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(10, 111, 232, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(10, 111, 232, 0);
  }
`,ot=e=>x`
  animation: ${e} 1.5s linear infinite;
`,it=a.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme:e})=>e.systemColors.blue50};
  padding: ${e=>`${e.theme.spacing.sp12} ${e.theme.spacing.sp24}`};

  ${C.laptop} {
    flex-direction: row;
    gap: 24px;
  }
`,ct=a($)`
  ${e=>e.$isPulsed&&x`
      overflow: visible;
      box-shadow: 0 0 0 0 rgba(10, 111, 232, 0.5);
      ${ot(nt)};
    `}
`,rt=a.div`
  ${ge};
  line-height: ${e=>e.theme.spacing.sp32};
  color: ${e=>e.theme.systemColors.grey800};
  margin: ${e=>`0 0 ${e.theme.spacing.sp8}`};

  ${C.laptop} {
    margin: 0;
  }
`,bt=({isTokenConnected:e})=>e===!1?s.jsx(st,{}):null;export{ft as N,j as R,$e as a,xt as b,ye as c,ut as d,gt as e,ht as f,mt as g,bt as h,K as s,Ce as t,we as u,pt as w};
//# sourceMappingURL=NewRecommendedToken-KFmJ8xQW.js.map
