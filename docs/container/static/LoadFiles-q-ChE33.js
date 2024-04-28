import{r,ax as O,iX as S,bN as D,j as t,j3 as I,az as M,bl as A,u as s,x as m,bw as N,I as H,bc as R,N as k,y as X,Q as U,$ as W,Y as _,jt as G,ju as K,jv as P,jw as Q}from"./index-tEWTe_cM.js";import{bK as B}from"./Learn-ZI4QJ8Ms.js";const Y=(e,o=2)=>{if(!+e)return"0 Bytes";const n=1024,d=o<0?0:o,i=["Bytes","KB","MB","GB"],c=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,c)).toFixed(d))} ${i[c]}`},q=()=>{const[e,o]=r.useState([]),n=r.useCallback(async i=>{const c=[];if(i!=null&&i.length)for(const p of i){const a=await J(p);c.push({metadata:p,blob:a})}o(c)},[]),d=r.useCallback(i=>{n(i.target.files)},[]);return{handleLoadFile:n,onChange:d,files:e}},J=async e=>new Blob([new Uint8Array(await e.arrayBuffer())],{type:e.type}),ke=({children:e,visible:o,onClose:n,zIndex:d=A.modal,lockBody:i=!1})=>{const c=r.useRef(null),[p,a]=r.useState(o);r.useEffect(()=>{a(o)},[o]);const u=r.useCallback(()=>{a(!1),setTimeout(()=>n(),200)},[n]);return O({isActive:o,ref:c,handler:u}),S({isActive:o,handler:u}),D.createPortal(t.jsxs(t.Fragment,{children:[o&&i?t.jsx(I,{}):null,t.jsx(M,{in:p,timeout:300,classNames:"fade",unmountOnExit:!0,mountOnEnter:!0,children:t.jsx(V,{"aria-label":"Overlay",zIndex:d,children:t.jsxs(h,{ref:c,zIndex:d,children:[t.jsx(ee,{onClick:u,children:t.jsx(Z,{})}),e]})})})]}),document.body)},Z=s(m).attrs({icon:N})`
  font-size: 16px;
`,h=s.div`
  z-index: ${({zIndex:e})=>e};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 463px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.systemColors.white};
  transition: transform 200ms ease-in-out;

  ${H.mobileBefore} {
    width: 100%;
  }
`,V=s.div`
  z-index: ${({zIndex:e})=>e};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;

  &.fade-enter {
    opacity: 0;

    ${h} {
      transform: translateX(100%);
    }
  }

  &.fade-enter-active {
    opacity: 1;

    ${h} {
      transform: translateX(0);
    }
  }

  &.fade-exit {
    opacity: 1;

    ${h} {
      transform: translateX(0);
    }
  }

  &.fade-exit-active {
    opacity: 0;
    transition-delay: 200ms;

    ${h} {
      transform: translateX(100%);
    }
  }
`,ee=s.div`
  font-size: 11px;
  position: absolute;
  top: 34px;
  right: 34px;
  cursor: pointer;
`,Te=({titleComponent:e,afterButtonComponent:o,tipsTitle:n,tips:d,className:i,onChangeVisibility:c})=>{const{t:p}=R(),a=r.useRef(null),[u,b]=r.useState(!1),[j,f]=r.useState(0),$=()=>{b(x=>(c==null||c(!x),!x))};return r.useLayoutEffect(()=>{a.current&&f(a.current.scrollHeight)},[]),t.jsxs(te,{className:i,children:[t.jsxs(se,{visible:u,children:[e,t.jsxs(oe,{children:[t.jsx(k,{type:"button",buttonType:"text",onClick:$,icon:t.jsx(m,{icon:B}),children:p(u?"tips.hideTips":"tips.showTips")}),o]})]}),t.jsx(ne,{ref:a,maxHeight:j,visible:u,children:t.jsxs(ae,{children:[t.jsxs(re,{children:[t.jsx(m,{icon:B}),n]}),t.jsx(ie,{children:d.map((x,v)=>t.jsx(ce,{children:x},v))})]})})]})},te=s.div``,se=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({visible:e,theme:o})=>e?o.spacing.sp16:0};
  transition: 300ms all ease-in-out;
`,oe=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sp16};
`,ne=s.div`
  transition: 300ms all ease-in-out;
  opacity: ${({visible:e})=>e?1:0};
  max-height: ${({visible:e,maxHeight:o})=>e?`${o}px`:0};
  overflow: hidden;
`,ae=s.div`
  padding: 24px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.systemColors.blue50};
  color: ${({theme:e})=>e.systemColors.grey800};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`,re=s.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  & > svg {
    color: ${({theme:e})=>e.systemColors.grey800};
    margin-right: 19px;
  }
`,ie=s.ul`
  margin-top: 16px;
  margin-left: 18px;
  margin-bottom: 0;
`,ce=s.li`
  padding-left: 8px;

  ::marker {
    color: ${({theme:e})=>e.systemColors.grey800};
  }
`,le={csv:"text/csv",xls:"text/xls",xlsx:"text/xlsx",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},de=new Intl.ListFormat("en-GB",{style:"long",type:"disjunction"}),pe=({types:e=["csv","xls"],multiple:o=!1,files:n,description:d,onChange:i,title:c,renderContent:p})=>{const a=r.useRef(null),u=r.useRef(null),b=`.${e==null?void 0:e.join(", .")}`,j=e.map(l=>le[l]),{files:f,onChange:$}=q();r.useEffect(()=>{const l=f.filter(C=>n.every(g=>g.metadata.name!==C.metadata.name));l.length&&i([...l,...n])},[f]),r.useEffect(()=>{f.length&&(a!=null&&a.current)&&(a.current.value="")},[n]);const x=r.useCallback(()=>{var l;(l=a==null?void 0:a.current)==null||l.click()},[]),v=r.useCallback(async l=>{l.preventDefault();const C=[...l.dataTransfer.items||l.dataTransfer.files],g=[];for(const T of C)if(T.kind==="file"){const y=T.getAsFile();if(y&&j.includes(y.type)&&n.every(w=>w.metadata.name!==y.name)){const w=await ue(y);g.push({metadata:y,blob:w})}}g.length&&i([...n,...g])},[n,j,i]),E=r.useCallback(l=>{l.preventDefault()},[]);return t.jsxs(L,{ref:u,onDrop:v,onDragOver:E,children:[t.jsx(F,{ref:a,type:"file",onChange:$,multiple:!!o,accept:b}),t.jsx(z,{children:p?p({onClick:x}):t.jsxs(t.Fragment,{children:[t.jsx(xe,{children:t.jsx(m,{icon:G})}),c&&a.current?c(a.current):t.jsxs(me,{children:["Drag & Drop or ",t.jsx(k,{type:"button",buttonType:"text",size:"200",onClick:x,children:"Choose file"})," to upload"]}),d||t.jsx(fe,{children:de.format(e.map(l=>l.toUpperCase()))})]})})]})},ue=async e=>new Blob([new Uint8Array(await e.arrayBuffer())],{type:e.type}),L=s.div`
  border-width: 1px;
  border-color: ${({theme:e})=>e.systemColors.grey300};
  border-style: dashed;
  border-radius: 6px;

  padding: ${({theme:e})=>`${e.spacing.sp48} ${e.spacing.sp24}`};
  position: relative;
  overflow: hidden;
  color: ${({theme:e})=>e.systemColors.grey600};
`,z=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,xe=s.div`
  color: ${({theme:e})=>e.systemColors.grey600};
  font-size: 16px;
`,me=s.div`
  ${X};
  color: ${({theme:e})=>e.systemColors.black};
`,fe=s.div`
  ${U};
  color: ${({theme:e})=>e.systemColors.grey600};
`,F=s.input`
  display: none;
`,ge=({file:e,icon:o,className:n,onRemove:d})=>t.jsxs(he,{className:n,children:[t.jsx(ve,{children:o||t.jsx(m,{icon:ye[e.type]||K})}),t.jsxs(je,{children:[t.jsx(be,{children:e.name}),t.jsx($e,{children:Y(e.size)})]}),t.jsx(k,{type:"button",buttonType:"icon",icon:t.jsx(m,{icon:P}),onClick:()=>d(e)})]}),ye={"text/csv":Q},Be=s(ge)``,he=s.div`
  background-color: ${({theme:e})=>e.systemColors.grey100};
  padding: ${({theme:e})=>e.spacing.sp16};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp16};
`,je=s.div`
  flex-grow: 1;
`,be=s.div`
  ${W};
  color: ${({theme:e})=>e.systemColors.grey600};
`,$e=s.div`
  ${_};
  color: ${({theme:e})=>e.systemColors.grey600};
`,ve=s.div`
  font-size: 20px;
  color: ${({theme:e})=>e.systemColors.blue600};
`,Le=Object.assign(pe,{Wrapper:L,Content:z,Input:F});export{Le as L,ke as S,Te as T,pe as _,Be as a,Y as f};
//# sourceMappingURL=LoadFiles-q--ChE33.js.map
