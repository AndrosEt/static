import{ah as k,b1 as z,b2 as N,ag as S}from"./Learn-ZI4QJ8Ms.js";import{r as n,u as r,bc as b,j as e,N as T,x as I,a as A,az as C,Z as D}from"./index-tEWTe_cM.js";function F(t){var s=t==null?0:t.length;return s?k(t,1):[]}function U(t){return z(N(t,void 0,F),t+"")}function V(t){var s=t==null?0:t.length;return s?t[s-1]:void 0}const L=({showMeasurer:t})=>{var a;const s=n.useRef(null),[u,i]=n.useState(((a=s.current)==null?void 0:a.scrollHeight)||0),o=n.useCallback(()=>{var l;t&&i(((l=s.current)==null?void 0:l.scrollHeight)||0)},[t]);n.useLayoutEffect(o,[o]),n.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[o]);const c=n.useCallback(()=>{var l,h;return i(((l=s.current)==null?void 0:l.scrollHeight)||0),((h=s.current)==null?void 0:h.scrollHeight)||0},[]);return{ref:s,height:u,updateHeight:c}},j=r(({showMore:t,onClick:s,text:u,size:i,rightIcon:o,className:c})=>{const{t:a}=b();return e.jsx(y,{size:i||"100",buttonType:"text",icon:o?"":e.jsx(v,{$showMore:t,icon:S}),rightIcon:o?e.jsx(v,{$showMore:t,icon:S}):"",onClick:s,type:"button","data-testid":"showMoreButton",className:c,children:u||a(`showMore.${t?"less":"more"}`)})})``,y=r(T)`
  flex-grow: 1;
  justify-content: flex-start;
`,v=r(I)`
  height: 18px;
  transition: 200ms all ease-in-out;

  ${({$showMore:t})=>t&&A`
      transform: rotate(180deg);
    `}
`,_=({children:t,buttons:s,buttonText:u,position:i="top",canMeasure:o=!0,buttonSize:c,onOpen:a,initialIsOpen:l=!1,className:h,rightIcon:f=!1,isOpen:x})=>{const{current:d}=n.useRef({isOpen:x??l}),[g,p]=n.useState(x??d.isOpen),m=x??g,H=()=>p(R=>(a==null||a(!R),!m));return e.jsxs("div",{className:h,children:[o&&i==="bottom"&&e.jsx(w,{showMore:m,children:t}),e.jsxs(M,{children:[e.jsx(j,{showMore:m,onClick:H,size:c,text:u,rightIcon:f}),s&&e.jsx($,{children:s})]}),o&&i==="top"&&e.jsx(w,{showMore:m,children:t})]})},M=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:t})=>t.spacing.sp16};
  align-items: center;
`,$=r.div`
  display: flex;

  & > :not(:first-child) {
    margin-left: ${({theme:t})=>t.spacing.sp8};
  }
`,X=Object.assign(_,{ButtonsRow:M,AdditionalButtons:$,ShowMoreButton:j}),W=({title:t,buttonText:s,children:u,open:i=!1,opened:o,onOpenChange:c,dataTestId:a,rightIcon:l=!1,rightNode:h,className:f})=>{const{t:x}=b(),[d,g]=n.useState(o??i);return n.useEffect(()=>{c==null||c(d)},[c,d]),n.useEffect(()=>{o!=null&&g(o)},[o]),e.jsxs(Z,{"data-testid":a,className:f,children:[e.jsxs(E,{children:[e.jsx(B,{children:t||x("buttons.filters")}),e.jsxs(J,{children:[e.jsx(j,{rightIcon:l,size:"100",showMore:d,onClick:()=>g(p=>!p),text:s||x("showMore.filters."+(d?"hide":"show"))}),h&&e.jsx(K,{children:h})]})]}),e.jsx(w,{showMore:d,children:u})]})},w=r(({showMore:t,children:s,className:u})=>{const[i,o]=n.useState(!1),{ref:c,height:a,updateHeight:l}=L({showMeasurer:i}),[h,f]=n.useState(t);return n.useEffect(()=>{t?(o(!0),setTimeout(()=>{f(!0)},316)):(f(!1),setTimeout(()=>{o(!1)},160),l())},[t,l]),e.jsx(e.Fragment,{children:e.jsx(G,{$height:i?a:0,$done:h,className:u,children:e.jsx(C,{in:t,timeout:300,classNames:"more",unmountOnExit:!0,children:t||i?e.jsx(q,{ref:c,children:s}):e.jsx(e.Fragment,{})})})})})``,Z=r.div`
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.systemColors.grey200};
  padding: ${({theme:t})=>t.spacing.sp16} ${({theme:t})=>t.spacing.sp24};
`,E=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${y} {
    justify-content: flex-end;

    &:focus-visible {
      box-shadow: none;
    }
  }
`,B=r.div`
  ${D};
`,Y=Object.assign(W,{Title:B,Action:E,ShowMoreInner:w,ShowMoreButton:j}),q=r.div``,G=r.div`
  height: ${({$height:t,$done:s})=>s?"auto":`${t}px`};
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
`,J=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`,K=r.div``;export{Y as S,X as a,U as b,F as f,V as l,L as u};
//# sourceMappingURL=ShowMore-8vjsJqT8.js.map
