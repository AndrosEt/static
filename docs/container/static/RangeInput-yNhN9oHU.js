import{u as c,N as E,a as d,r as l,j as i,cx as N}from"./index-VVIvRZBh.js";import{B as M}from"./Learn-nfpDmxZa.js";const T=({checked:e,noBlur:o,...r})=>{const t=l.useRef(null);return l.useEffect(()=>{o&&!e&&t.current&&(t==null||t.current.blur())},[e,o,t]),i.jsx(y,{...r,buttonType:"icon",size:"50",$checked:e,ref:t})},y=c(E)(({theme:{systemColors:e},$checked:o})=>d`
    font-size: 16px;
    background-color: transparent;
    border: transparent;
    color: ${e.grey600};

    &:focus {
      background-color: ${e.blue100};
      border: 1px solid ${e.blue600};
      color: ${e.blue600};
    }

    &:hover {
      background-color: ${e.blue100};
      border: 1px solid ${e.blue600};
      color: ${e.blue600};
    }

    ${o&&d`
      background-color: ${e.blue200};
      border: 1px solid ${e.blue600};
      color: ${e.blue600};

      &:focus {
        background-color: ${e.blue200};
        border: 1px solid ${e.blue800};
        color: ${e.blue800};
      }

      &:hover {
        background-color: ${e.blue200};
        border: 1px solid ${e.blue800};
        color: ${e.blue800};
      }
    `}
  `),V=c(T)``,W=e=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512",...e,children:[i.jsx("title",{}),i.jsx("path",{d:"M202.33,53.44a80.7,80.7,0,0,0-18.8,22.06L22.29,353.58A81.62,81.62,0,0,0,51.87,464.8h0a81.62,81.62,0,0,0,111.22-29.58l138.59-239C271.1,152.32,226.49,88.29,202.33,53.44Z",fill:"#febd00"}),i.jsx("circle",{fill:"#25a84a",cx:"92.69",cy:"394.4",r:"81.38"}),i.jsx("rect",{fill:"#2e8add",height:"484.21",rx:"81.38",ry:"81.38",transform:"translate(751.31 309.71) rotate(150)",width:"162.76",x:"252.78",y:"13.4"})]}),X=l.forwardRef(({tabIndex:e=1,size:o="50",colorType:r="light",...t},s)=>i.jsx(M,{tabIndex:e,size:o,colorType:r,forwardRef:s,...t})),C="50",$=(e,o,r)=>{const t=(Number(e||0)-o)/(r-o)*100;return t>100?100:t<0?0:t},A=(e,o,r)=>{var t;return(t=r||[])==null?void 0:t.map(s=>({percent:(s-e)/(o-e)*100,point:s}))},G=l.forwardRef(({size:e="50",disabled:o,min:r=0,max:t=1,value:s,breakPoints:a,onSticky:u,step:m,onChange:k,...v},z)=>{const[j,R]=l.useState(()=>$(s,r,t)),p=A(r,t,a),[B,x]=l.useState(!1);l.useEffect(()=>{R($(s,r,t))},[s,t,r]);const g=l.useCallback(()=>{if(u&&(a!=null&&a.length)){const b=(t-r)/20;let n=Number(s);a.forEach(h=>{n<h+b&&n>h-b&&(n=h)}),n!==s&&(u==null||u(n))}},[a,t,r,u,s]),I=l.useCallback(()=>{x(!1),g()},[g]);return i.jsxs(L,{children:[p==null?void 0:p.map(({percent:b,point:n},h)=>i.jsx(w,{$light:n<Number(s),$left:b},h)),i.jsx(U,{$percent:j,$disabled:o}),i.jsx(_,{...v,disabled:o,onChange:k,onMouseDown:()=>x(!0),onMouseUp:I,value:s,max:t,min:r,$size:e,$active:B,ref:z,step:m,type:"range"})]})}),w=c.div`
  position: absolute;
  left: ${({$left:e})=>e+"%"};
  width: 4px;
  height: 4px;
  background-color: ${e=>e.$light?e.theme.systemColors.grey200:e.theme.systemColors.grey400};
  top: 6px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 3;
`,L=c.div`
  position: relative;
  line-height: 1;
  font-size: 0;
  flex-grow: 1;

  &:before {
    content: "";
    position: absolute;
    height: 4px;
    top: 6px;
    left: 0;
    right: 0;
    border-radius: 20px;
    background-color: ${e=>e.theme.systemColors.grey200};
    z-index: 1;
  }
`,U=c.div.attrs(e=>({style:{width:`${e.$percent||0}%`,backgroundColor:e.$disabled?e.theme.systemColors.grey300:e.theme.systemColors.blue600}}))`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 4px;
  z-index: 2;
  left: 0;
  position: absolute;
  top: 6px;
  overflow: hidden;

  ${w} {
    top: 0;
  }
`,_=c.input`
  -webkit-appearance: none;
  cursor: pointer;
  margin: 0;
  z-index: 4;
  width: 100%;
  position: relative;
  background: transparent;

  ${e=>e.disabled&&"cursor: not-allowed;"};

  &:focus {
    outline: none;
  }

  &:focus-visible::-webkit-slider-thumb {
    outline: 2px solid ${e=>e.theme.systemColors.blue600};
    outline-offset: 2px;
  }

  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    ${e=>!e.disabled&&N};
    height: 24px;
    width: 24px;
    background: ${e=>e.disabled?e.theme.systemColors.grey300:e.theme.systemColors.blue600};
    border-radius: 50%;

    &:hover {
      background: ${e=>!e.disabled&&e.theme.systemColors.blue800};
      transition: background 0.25s ease-out;
    }

    &:active {
      background: ${e=>!e.disabled&&e.theme.systemColors.blue900};
    }
  }

  ${e=>e.$size?f[e.$size]:f[C]};
  ${e=>e.$active&&e.$size==="50"&&d`
      &::-webkit-slider-thumb {
        height: 24px;
        width: 24px;
      }
    `};
  ${e=>e.$active&&e.$size==="200"&&d`
      &::-webkit-slider-thumb {
        height: 32px;
        width: 32px;
      }
    `};
`,f={50:d`
    height: 16px;

    &::-webkit-slider-thumb {
      height: 16px;
      width: 16px;

      &:active {
        height: 24px;
        width: 24px;
      }
    }
  `,200:d`
    height: 16px;

    &::-webkit-slider-thumb {
      height: 24px;
      width: 24px;

      &:active {
        height: 32px;
        width: 32px;
      }
    }
  `},Z=Object.assign(G,{});export{W as G,X as I,Z as R,V as a};
//# sourceMappingURL=RangeInput-yNhN9oHU.js.map
