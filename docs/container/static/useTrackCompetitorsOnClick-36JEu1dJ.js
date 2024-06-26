import{j as e,cm as M,u as n,bk as E,w as k,cI as R,K as H,U as L,I as q,r as i,E as P,N as j,aF as J,a as K,x as U,cS as Y,y as Q,aM as V,g as X}from"./index-VVIvRZBh.js";import{n as I,o as N,G as Z,p as C,q as tt,L as F}from"./SearchGraphModal-EAp81elq.js";import{K as et,a8 as ot}from"./Learn-nfpDmxZa.js";const st=[...new Array(20)].map((t,o)=>o),nt=()=>e.jsx(e.Fragment,{children:st.map(t=>e.jsxs(ct,{children:[e.jsx(it,{}),e.jsx(rt,{children:e.jsx(M,{builder:[{width:340,size:"small",direction:"column",bottom:4},{width:300,size:"small",direction:"column",bottom:8},{size:"normal",width:200,bottom:0}]})})]},t))}),it=n(E)`
  width: 40px;
  height: 53px;
  margin-right: ${({theme:t})=>t.spacing.sp16};
`,rt=n.div`
  flex: 1;
`,ct=n.div`
  display: flex;
  border: solid 1px ${({theme:t})=>t.systemColors.grey200};
  border-radius: 6px;
  min-height: 94px;
  padding: ${({theme:{spacing:{sp16:t,sp24:o}}})=>`${t} ${o}`};
`,at=({maxLength:t=10,asins:o,setAsins:s,marketplace:r,description:l,tool:p})=>{const{t:d}=k(),c=I(R(a=>a.competitors.data)),{status:m}=N(),f=a=>()=>{o.indexOf(a)===-1?s([...o,a]):s(o.filter(y=>y!==a))},u=r==="walmart.com";return e.jsx(lt,{children:e.jsxs(dt,{children:[e.jsx(mt,{children:l||d("getCompetitors.description")}),e.jsx(ut,{children:d("getCompetitors.count",{canMoreSelect:t-o.length})}),e.jsx(xt,{children:m==="loaded"?c.length!==0?c.map(a=>e.jsx(Z,{item:a,isWalmart:u,asins:o,onClick:f(a.id),maxLength:t,marketType:a.marketType,tool:p},a.id)):e.jsx(ht,{children:e.jsx(Ct,{children:d("getCompetitors.noData")})}):e.jsx(nt,{})})]})})},lt=n.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`,pt=n.div`
  flex: 1;
`,dt=n(pt)``,mt=n.div`
  ${H};
  margin-top: ${({theme:t})=>t.spacing.sp12};
`,ut=n.div`
  ${L};
  margin: ${({theme:t})=>`${t.spacing.sp32} 0 ${t.spacing.sp24}`};
`,xt=n.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({theme:t})=>t.spacing.sp16};
  position: relative;

  ${q.laptop} {
    grid-template-columns: 1fr 1fr;
    min-height: 80%;
  }

  margin-bottom: ${({theme:t})=>t.spacing.sp16};
`,ht=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Ct=n.p`
  ${L};
`,It=({onAddAsins:t,disabled:o,asins:s,maxAsins:r,children:l,marketplace:p,isDemo:d,locked:c,openUpgradeModal:m,description:f,onToggle:u,tool:a,type:y})=>{const{t:b}=k(),[h,S]=i.useState(s),[T]=C(),B=I(x=>(x.competitors.data??[]).map(({id:_})=>_)),z=N(x=>x.status!=="loaded");i.useEffect(()=>{S(s)},[s]);const G=x=>{x.preventDefault(),c?m==null||m():C.open({marketplace:J("domain",p).store,type:y,productId:h[0]})},A=i.useMemo(()=>h.filter(x=>B.indexOf(x)!==-1).length===0,[B,h]),W=i.useMemo(()=>JSON.stringify([...h].sort())===JSON.stringify([...s].sort()),[h,s]);return i.useEffect(()=>{u==null||u(T)},[T,u]),e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(P,{content:b("getCompetitors.tooltip"),children:e.jsx("div",{children:e.jsxs(ft,{buttonType:"secondary",size:"200",onClick:G,onLockedClick:G,disabled:o||d,locked:c&&!d,type:"button","data-testid":"getcompetitors",children:[b("getCompetitors.button"),l]})})})}),e.jsx(et,{position:"right",animation:"slideRight",isOpen:T,onClose:C.close,onClickOutside:C.close,onClickEscape:C.close,lockBody:!0,header:b("getCompetitors.button"),size:"400",zIndex:1e3,footer:e.jsxs(gt,{children:[e.jsx(j,{onClick:C.close,buttonType:"cancel",size:"200",type:"button","data-testid":"cancel",children:b("common.cancel")}),e.jsx(j,{onClick:x=>{x.preventDefault(),t(h),C.close()},buttonType:"primary",size:"200",disabled:A||z||W,"data-testid":"addcompetitors",children:b("getCompetitors.addCompetitors")})]}),children:e.jsx(tt,{children:e.jsx(at,{asins:h,setAsins:S,maxLength:r,marketplace:p,description:f,tool:a})})})]})},gt=n.div`
  display: flex;
  justify-content: space-between;

  ${j} + ${j} {
    margin-left: ${({theme:t})=>t.spacing.sp16};
  }
`,ft=n(F)`
  position: relative;
`,g=i.createContext({tool:"cerebro",isChinese:!1,selected:[],planGroup:"free",limit:5}),jt=()=>{const t=i.useContext(g);return t.selected.length>t.limit},bt=["free","starter","gold","platinum"],v=()=>{const{planGroup:t}=i.useContext(g);return bt.includes(t)},O=()=>{const t=i.useContext(g),o=v(),s=()=>{window.open("http://localhost:3060/subscribe?action=checkout&offer=scale_your_business","__target")},r=o?t.onUpgradePlan:void 0;return{onUpgradeNow:s,onLock:r}},w=K`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sp8};
`,kt=()=>{const{t}=k(),o=i.useContext(g),{onUpgradeNow:s}=O();return e.jsxs($,{children:[e.jsxs(yt,{children:[e.jsx(vt,{children:t("tooltip.trackCompetitorsUpgradePlan.header.title")}),e.jsx(ot,{type:"enabled",children:e.jsxs($t,{children:[e.jsx($,{children:t("tooltip.trackCompetitorsUpgradePlan.header.chip")}),e.jsx(U,{icon:Y})]})})]}),e.jsx($,{children:t("tooltip.trackCompetitorsUpgradePlan.body.text")}),e.jsxs(Tt,{children:[e.jsx(j,{buttonType:"text",onClick:o.onLearnMore,children:t("buttons.learnMore")}),e.jsx(j,{onClick:s,children:t("buttons.upgradeNow")})]})]})},yt=n.div`
  ${w};
  margin-bottom: ${({theme:t})=>t.spacing.sp8};
`,Tt=n.div`
  ${w};
  justify-content: space-between;
  margin-top: ${({theme:t})=>t.spacing.sp16};
`,$t=n.div`
  ${w};
`,vt=n.div`
  ${Q};
`,$=n.div``,wt=({isAboveLimit:t})=>{const{limit:o,tool:s}=i.useContext(g),{t:r}=k(),[l,p]=i.useState(),[d,c]=i.useState("light"),m=v();return i.useEffect(()=>{if(m){p(e.jsx(kt,{})),c("light");return}if(t){p(e.jsx("div",{dangerouslySetInnerHTML:{__html:r("tooltip.stayUpToDateWithYourCompetitorsLimit",{limit:o})}})),c("dark");return}p(e.jsx("div",{style:{textAlign:"center"},dangerouslySetInnerHTML:{__html:r(`tooltip.stayUpToDateWithYourCompetitors.${s}`)}})),c("light")},[t,m,o,r,s]),{tooltip:l,colorType:d}},St=i.memo(t=>e.jsx(g.Provider,{value:t,children:e.jsx(Bt,{})})),Bt=()=>{var f,u;const t=i.useContext(g),{t:o}=k(),s=jt(),r=v(),{tooltip:l,colorType:p}=wt({isAboveLimit:s}),{onLock:d}=O(),c=r||((f=t.button)==null?void 0:f.locked),m=s||((u=t.button)==null?void 0:u.disabled);return t.isChinese?null:e.jsx(P,{content:l,appendTo:"parent",interactive:!0,colorType:p,...t.tooltip,children:e.jsx(Gt,{className:t.className,children:e.jsx(D,{icon:e.jsx(U,{icon:V}),buttonType:"secondary",type:"button",disabled:!c&&m,locked:c,onClick:t.onClick,onLockedClick:d,className:t.className,...t.button,children:o("buttons.trackCompetitors")})})})},D=n(F)``,Nt=Object.assign(St,{Button:D}),Gt=n.div`
  width: fit-content;
`,Ft=({selected:t,marketplace:o,trackEvent:s,tool:r})=>i.useCallback(()=>{s==null||s();const l=X("http://localhost:3060/dashboard",{marketplace:o,competitors:t,tool:r},{arrayFormat:"index"});window.open(l,"_blank")},[o,t,r,s]);export{It as G,Nt as T,Ft as u};
//# sourceMappingURL=useTrackCompetitorsOnClick-36JEu1dJ.js.map
