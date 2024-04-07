import{j as t,cm as ve,bk as v,u as i,I as U,a2 as Z,r as s,E as we,aP as De,al as Se,x as b,aI as _,i4 as Ce,i5 as q,i6 as Ae,Q as Ve,a as Te}from"./index-VVIvRZBh.js";import{r as Fe}from"./server.browser-VH3XJs1z.js";import{A as Pe}from"./ActionTitle-Ux2Wbfo7.js";import{C as ke,L as Le}from"./Chart-iYK8HCkW.js";import{C as Me}from"./highcharts-react.min-Kl4Av0LS.js";import{f as ee}from"./useAutoPlay-JZxKBgmm.js";import{L as Ee}from"./LineGraphSkeleton-4rFP-rW5.js";import{e as Q}from"./Learn-nfpDmxZa.js";const x=[38,65,75,61,52,87,75,13,62,79],Ne=({numberOfRow:e=5,numberOfColumns:r=9,legendWidth:n=187,legendCount:l=2})=>{const p=x==null?void 0:x.slice(0,r<=(x==null?void 0:x.length)&&r>=1?r:x==null?void 0:x.length);return t.jsxs(t.Fragment,{children:[l>0&&t.jsx(We,{children:t.jsx(ve,{builder:[{size:"medium",width:n,direction:"row",count:l}]})}),t.jsxs(Oe,{children:[[...new Array(e)].map((c,u)=>t.jsxs(ze,{children:[t.jsx(Ge,{}),t.jsx(Be,{})]},`${c} ${u}`)),t.jsx(Ie,{children:p==null?void 0:p.map((c,u)=>t.jsx(He,{$height:c,$index:u},`${c} ${u}`))})]}),t.jsx(Re,{children:t.jsx(v,{})})]})},Oe=i.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,We=i.div`
  display: flex;
  margin-top: ${({theme:e})=>e.spacing.sp16};

  > div {
    justify-content: center;
  }
`,ze=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,Be=i(v)`
  width: 100%;
  height: 1px;
`,Ge=i(v)`
  width: 22px;
  height: 16px;
  margin-right: ${({theme:e})=>e.spacing.sp16};
`,Ie=i.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 10px 48px 10px 78px;

  ${U.mobileBefore} {
    padding: 10px 18px 10px 48px;
  }
`,He=i(v)`
  width: 32px;
  height: ${({$height:e})=>e}%;

  ${U.mobileBefore} {
    display: ${({$index:e})=>e>3?"none":"block"};
  }
`,Re=i.div`
  display: flex;
  margin-left: 42px;
  margin-right: 42px;
`,Ye=e=>{const r=[{id:"currency",title:{text:null},labels:{formatter:({value:n})=>Z({amount:Number(n),currency:e}),style:{fontSize:"12px"}}},{id:"number",title:{text:null},labels:{style:{fontSize:"12px"}}},{id:"percent",title:{text:null},labels:{formatter:({value:n})=>ee({value:typeof n=="number"&&n||0,style:"percent"}),style:{fontSize:"12px"}}}];return[...r,...r.map(n=>({...n,id:n.id+"_right",opposite:!0}))]},_e=(e,r,n)=>{if(r.includes("currency"))return Z({amount:e,currency:n});const l=r.includes("percent")?"percent":void 0;return ee({value:e,style:l})},qe=e=>{const[r,n]=s.useState(!1),[l,p]=s.useState([]),c=s.useMemo(()=>(e||[]).map((o,a)=>o===null||!l.length?null:t.jsx(we,{open:r,onOpenChange:m=>{var y;n(m),m&&((y=o.onShow)==null||y.call(o))},colorType:"light",content:o.content,interactive:!0,delay:[200,0],disabled:o.disabled,children:t.jsx(Qe,{$x:l[a].x,$y:l[a].y,children:t.jsx(Xe,{$color:o.color,$disabled:o.disabled})},a)},a)).filter(o=>o!==null),[l,e,r]),u=s.useCallback(()=>{const o=document.querySelector(".highcharts-xaxis-labels");o&&p(Array.from(o.children).map(a=>({x:Number(a.getAttribute("x")??0),y:Number(a.getAttribute("y")??20)-20})))},[]);return{eventPoints:c,handleRender:u}},Qe=i.div.attrs(e=>({style:{left:e.$x-6,top:e.$y-6}}))`
  position: absolute;
  padding: 2px;
  background-color: ${({theme:e})=>e.systemColors.white};
  border-radius: 6px;
`,Xe=i.div`
  background: ${({theme:e,$color:r})=>r??e.systemColors.blue600};
  border-radius: 50%;
  height: 8px;
  width: 8px;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Je=["loading","waiting","progress","init"],pt=({watermark:e,above:r,header:n,lines:l,eventPoints:p,currency:c,categories:u,status:o,height:a=300,noDataState:m,errorState:y,tooltipTitleFormatter:re,categoriesHoverMarketRadius:w,yAxis:se,xAxis:ne,tooltip:oe,plotOptions:ie,chart:ae,time:le,skeleton:S,exporting:de,...ce})=>{const{t:C}=De(),A=Se(),j=s.useDeferredValue(r),V=s.useDeferredValue(oe),h=s.useDeferredValue(l),f=s.useDeferredValue(n),T=s.useDeferredValue(y),$=s.useDeferredValue(u),pe=s.useDeferredValue(o),D=s.useDeferredValue(re),F=s.useDeferredValue(ae),P=s.useDeferredValue(ie),k=s.useDeferredValue(le),L=s.useDeferredValue(se),M=s.useDeferredValue(ne),E=s.useDeferredValue(de),{eventPoints:N,handleRender:O}=qe(p),ue=s.useMemo(()=>({exporting:E,legend:{enabled:!1},tooltip:V||{formatter(){var d;return Fe(t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:D?D(String(this.x)):Q(this.x!=null?new Date(this.x):new Date,"standardShort")}),(d=this.points)==null?void 0:d.map(({key:g,series:xe,y:fe})=>{var Y;const{color:he,opacity:ge,name:H,yAxis:ye}=xe,R=ye.userOptions.id,je=R&&_e(Number(fe),R,c),$e=((Y=h.find(be=>be.name===H))==null?void 0:Y.color)||he;return t.jsx(ke,{color:$e,opacity:ge,name:H,value:je},g)})]}))}},yAxis:L||Ye(c),xAxis:{categories:$,labels:{formatter:({value:d})=>{const g=d||new Date;return Q(new Date(g),"standardShort")}},...M},chart:F,time:k,plotOptions:P,series:h.map(d=>({...d,name:d.name,data:d.data,type:d.type||"spline",color:d.color||A.systemColors.blue600,yAxis:d.yAxis??(d.format||"number"),dashStyle:d.dashStyle,enableMouseTracking:!d.hideMouseTracking,...d.type!=="column"&&w?{marker:{states:{hover:{radius:w}}}}:{}}))}),[V,L,c,$,M,F,k,P,h,E,D,A.systemColors.blue600,w]),W=s.useDeferredValue(ue),z=s.useMemo(()=>t.jsxs(t.Fragment,{children:[j,f&&t.jsx(J,{children:f}),t.jsx(X,{$height:a,children:t.jsx(K,{children:T})})]}),[j,T,f,a]),B=s.useMemo(()=>t.jsx(Le,{options:W,height:a,watermark:e,onRender:O}),[W,a,e,O]),G=s.useMemo(()=>t.jsxs(t.Fragment,{children:[j,f&&t.jsx(J,{children:f}),t.jsx(X,{$height:a,children:$.length?t.jsxs(t.Fragment,{children:[B,N]}):t.jsx(K,{children:m||C("charts.noData")})})]}),[j,f,a,$.length,B,N,m,C]),I=s.useMemo(()=>Je.reduce((d,g)=>({...d,[g]:t.jsx(Ke,{skeleton:S,lines:h,header:f,height:a})}),{}),[f,a,h,S]),me=s.useMemo(()=>({...I,error:z,loaded:G}),[I,z,G]);return t.jsx(Ze,{...ce,children:me[pe||"loaded"]})},Ke=({skeleton:e,lines:r,height:n=300,header:l})=>t.jsx(t.Fragment,{children:e||t.jsx(Ue,{$height:l?n+48:n,children:r.some(p=>p.type==="column")?t.jsx(Ne,{legendCount:l?Math.min(r.length,4):0}):t.jsx(Ee,{legendCount:l?Math.min(r.length,4):0})})}),Ue=i.div`
  height: ${({$height:e})=>e}px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`,X=i.div`
  position: relative;
  height: ${({$height:e})=>e}px;
`,Ze=i.div`
  position: relative;

  ${Pe.Container} {
    margin-bottom: ${({theme:e})=>e.spacing.sp16};
  }
`,J=i.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,K=i.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ut=({legends:e,onClick:r})=>t.jsx(et,{children:e.map(({type:n,color:l,name:p,field:c,disabled:u,switchedOff:o=!1},a)=>{const m=o?_.grey100:l;return t.jsxs(tt,{$disabled:u,$switchedOff:o,$pointer:!!r,onClick:()=>!u&&(r==null?void 0:r(c)),children:[n==="solid"&&t.jsx(b,{color:o?_.grey100:m,icon:Ce}),n==="dash"&&t.jsxs(rt,{children:[t.jsx(b,{color:m,icon:q}),t.jsx(b,{color:m,icon:q})]}),n==="dot"&&t.jsx(b,{color:m,icon:Ae}),t.jsx(te,{children:p})]},a)})}),et=i.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp24};
`,te=i.span``,tt=i.div`
  display: flex;
  align-items: center;
  ${Ve};
  gap: ${e=>e.theme.spacing.sp8};
  user-select: none;
  ${e=>e.$disabled?"opacity: 0.7;":e.$pointer&&"cursor: pointer;"}
  ${e=>e.$switchedOff&&Te`
      & > ${te} {
        opacity: 0.7;
      }
    `}
`,rt=i.div`
  gap: ${e=>e.theme.spacing.sp4};
  display: flex;
  align-items: center;
`;export{pt as C,Ne as D,ut as u};
//# sourceMappingURL=useChartLegend-rqFsBLfq.js.map
