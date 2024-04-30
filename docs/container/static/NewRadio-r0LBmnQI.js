import{gh as m,r as t,j as r,a as c,b6 as u,gi as N,gj as M,gk as z,gl as B,gm as D,u as l,x as L,a1 as O,gn as Q}from"./index-3WWdADc-.js";import{f as g,i as x,n as W}from"./useAutoPlay-ceAGW3YF.js";const X=(e,o)=>{const s=e.getState();return e.setState({_resettableLifeCycle:m()}),({children:i})=>(t.useEffect(()=>()=>{e.setState({...(o==null?void 0:o())||s,_resettableLifeCycle:m()},!0)},[]),r.jsx(r.Fragment,{children:i}))},Y=({rang:e})=>{const o=t.useMemo(()=>Number(e.toFixed(1)),[e]),s=t.useMemo(()=>A(o),[o]),i=t.useMemo(()=>e>=9.95?g({value:e>10?10:e,maximumFractionDigits:0,minimumFractionDigits:0}):g({value:e,maximumFractionDigits:1,minimumFractionDigits:1}),[e]);return r.jsxs(T,{children:[r.jsx(P,{$color:p[s],size:"xs",icon:G[s]}),r.jsx(q,{$color:p[s],children:i})]})},A=e=>e>=0&&e<=2?"weak":e>=2.1&&e<=4?"fair":e>4&&e<7?"good":e>=7&&e<9?"strong":"full",p={weak:c`
    color: ${u.tomato500};
  `,fair:c`
    color: ${u.orange500};
  `,good:c`
    color: ${u.yellow500};
  `,strong:c`
    color: ${u.celery500};
  `,full:c`
    color: ${u.green500};
  `},G={weak:N,fair:M,good:z,strong:B,full:D},P=l(L)`
  ${({$color:e})=>e}
`,T=l.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  background: transparent;
  gap: 4px;
  height: 24px;
  width: fit-content;
  border: ${({theme:e})=>`1px solid ${e.systemColors.grey200}`};
  border-radius: 12px;
`,q=l.div`
  ${O};
  ${({$color:e})=>e}
  line-height: 16px;
`;var H=x?t.useLayoutEffect:t.useEffect,Z=function(e){t.useEffect(e,[])},h={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function J(){var e=t.useState(null),o=e[0],s=e[1],i=t.useState(h),w=i[0],v=i[1],d=t.useMemo(function(){return new window.ResizeObserver(function(f){if(f[0]){var n=f[0].contentRect,C=n.x,j=n.y,k=n.width,E=n.height,F=n.top,R=n.left,S=n.bottom,I=n.right;v({x:C,y:j,width:k,height:E,top:F,left:R,bottom:S,right:I})}})},[]);return H(function(){if(o)return d.observe(o),function(){d.disconnect()}},[o]),[s,w]}const _=x&&typeof window.ResizeObserver<"u"?J:function(){return[W,h]},K=t.forwardRef(({children:e,className:o,...s},i)=>r.jsxs($,{className:o,children:[r.jsx(b,{...s,type:"radio",role:"radio",ref:i}),r.jsx(a,{}),e&&r.jsx(y,{children:e})]})),a=l.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.systemColors.grey400};
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
`,b=l.input`
  position: absolute;
  left: 0;
  opacity: 0;
  outline: none;
  z-index: -1;

  &:disabled + ${a} {
    border-color: ${e=>e.theme.systemColors.grey200};
    background: ${e=>e.theme.systemColors.grey200};
    cursor: not-allowed;
  }

  &:checked {
    & + ${a} {
      border: 6px solid ${e=>e.theme.systemColors.blue600};
    }

    &:disabled + ${a} {
      border-color: ${e=>e.theme.systemColors.grey200};
      background: ${e=>e.theme.systemColors.grey300};
    }
  }

  &:focus-visible + ${a} {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow:
      0 0 0 2px ${({theme:e})=>e.systemColors.white},
      0 0 0 4px ${({theme:e})=>e.systemColors.blue600};
  }
`,y=l.span`
  ${Q};
  padding-left: 10px;
`,$=l.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  /* &:hover {
    ${a} {
      border-color: ${e=>e.theme.systemColors.grey600};
    }
  } */
`,ee=Object.assign(K,{Input:b,Wrapper:$,Icon:a,Text:y});export{ee as N,Y as Q,Z as a,X as l,_ as u};
//# sourceMappingURL=NewRadio-r0LBmnQI.js.map
