import{r as i,u as r,aP as y,j as e,N,x as z,a as R,aC as T,Z as C}from"./index-VVIvRZBh.js";import{ai as S}from"./Learn-nfpDmxZa.js";function G(t){var o=t==null?0:t.length;return o?t[o-1]:void 0}const I=({showMeasurer:t})=>{var a;const o=i.useRef(null),[u,n]=i.useState(((a=o.current)==null?void 0:a.scrollHeight)||0),s=i.useCallback(()=>{var l;t&&n(((l=o.current)==null?void 0:l.scrollHeight)||0)},[t]);i.useLayoutEffect(s,[s]),i.useEffect(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[s]);const c=i.useCallback(()=>{var l,h;return n(((l=o.current)==null?void 0:l.scrollHeight)||0),((h=o.current)==null?void 0:h.scrollHeight)||0},[]);return{ref:o,height:u,updateHeight:c}},j=r(({showMore:t,onClick:o,text:u,size:n,rightIcon:s,className:c})=>{const{t:a}=y();return e.jsx(M,{size:n||"100",buttonType:"text",icon:s?"":e.jsx(v,{$showMore:t,icon:S}),rightIcon:s?e.jsx(v,{$showMore:t,icon:S}):"",onClick:o,type:"button","data-testid":"showMoreButton",className:c,children:u||a(`showMore.${t?"less":"more"}`)})})``,M=r(N)`
  flex-grow: 1;
  justify-content: flex-start;
`,v=r(z)`
  height: 18px;
  transition: 200ms all ease-in-out;

  ${({$showMore:t})=>t&&R`
      transform: rotate(180deg);
    `}
`,A=({children:t,buttons:o,buttonText:u,position:n="top",canMeasure:s=!0,buttonSize:c,onOpen:a,initialIsOpen:l=!1,className:h,rightIcon:f=!1,isOpen:x})=>{const{current:d}=i.useRef({isOpen:x??l}),[m,p]=i.useState(x??d.isOpen),w=x??m,H=()=>p(k=>(a==null||a(!k),!w));return e.jsxs("div",{className:h,children:[s&&n==="bottom"&&e.jsx(g,{showMore:w,children:t}),e.jsxs($,{children:[e.jsx(j,{showMore:w,onClick:H,size:c,text:u,rightIcon:f}),o&&e.jsx(b,{children:o})]}),s&&n==="top"&&e.jsx(g,{showMore:w,children:t})]})},$=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:t})=>t.spacing.sp16};
  align-items: center;
`,b=r.div`
  display: flex;

  & > :not(:first-child) {
    margin-left: ${({theme:t})=>t.spacing.sp8};
  }
`,J=Object.assign(A,{ButtonsRow:$,AdditionalButtons:b,ShowMoreButton:j}),D=({title:t,buttonText:o,children:u,open:n=!1,opened:s,onOpenChange:c,dataTestId:a,rightIcon:l=!1,rightNode:h,className:f})=>{const{t:x}=y(),[d,m]=i.useState(s??n);return i.useEffect(()=>{c==null||c(d)},[c,d]),i.useEffect(()=>{s!=null&&m(s)},[s]),e.jsxs(F,{"data-testid":a,className:f,children:[e.jsxs(E,{children:[e.jsx(B,{children:t||x("buttons.filters")}),e.jsxs(P,{children:[e.jsx(j,{rightIcon:l,size:"100",showMore:d,onClick:()=>m(p=>!p),text:o||x("showMore.filters."+(d?"hide":"show"))}),h&&e.jsx(W,{children:h})]})]}),e.jsx(g,{showMore:d,children:u})]})},g=r(({showMore:t,children:o,className:u})=>{const[n,s]=i.useState(!1),{ref:c,height:a,updateHeight:l}=I({showMeasurer:n}),[h,f]=i.useState(t);return i.useEffect(()=>{t?(s(!0),setTimeout(()=>{f(!0)},316)):(f(!1),setTimeout(()=>{s(!1)},160),l())},[t,l]),e.jsx(e.Fragment,{children:e.jsx(_,{$height:n?a:0,$done:h,className:u,children:e.jsx(T,{in:t,timeout:300,classNames:"more",unmountOnExit:!0,children:t||n?e.jsx(L,{ref:c,children:o}):e.jsx(e.Fragment,{})})})})})``,F=r.div`
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.systemColors.grey200};
  padding: ${({theme:t})=>t.spacing.sp16} ${({theme:t})=>t.spacing.sp24};
`,E=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${M} {
    justify-content: flex-end;

    &:focus-visible {
      box-shadow: none;
    }
  }
`,B=r.div`
  ${C};
`,K=Object.assign(D,{Title:B,Action:E,ShowMoreInner:g,ShowMoreButton:j}),L=r.div``,_=r.div`
  height: ${({$height:t,$done:o})=>o?"auto":`${t}px`};
  transition: height 0.2s ease-in;
  overflow: hidden;

  .more-enter {
    opacity: 0;
  }

  .more-enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }

  .more-exit {
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }

  .more-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`,P=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`,W=r.div``;export{K as S,J as a,G as l,I as u};
//# sourceMappingURL=ShowMore-ZqkZ70xv.js.map
