import{u as b,N as d,a as n,r as c,j as a}from"./index-3WWdADc-.js";import{B as l}from"./Learn-iEpSD2rS.js";const p=({checked:r,noBlur:u,...e})=>{const o=c.useRef(null);return c.useEffect(()=>{u&&!r&&o.current&&(o==null||o.current.blur())},[r,u,o]),a.jsx($,{...e,buttonType:"icon",size:"50",$checked:r,ref:o})},$=b(d)(({theme:{systemColors:r},$checked:u})=>n`
    font-size: 16px;
    background-color: transparent;
    border: transparent;
    color: ${r.grey600};

    &:focus {
      background-color: ${r.blue100};
      border: 1px solid ${r.blue600};
      color: ${r.blue600};
    }

    &:hover {
      background-color: ${r.blue100};
      border: 1px solid ${r.blue600};
      color: ${r.blue600};
    }

    ${u&&n`
      background-color: ${r.blue200};
      border: 1px solid ${r.blue600};
      color: ${r.blue600};

      &:focus {
        background-color: ${r.blue200};
        border: 1px solid ${r.blue800};
        color: ${r.blue800};
      }

      &:hover {
        background-color: ${r.blue200};
        border: 1px solid ${r.blue800};
        color: ${r.blue800};
      }
    `}
  `),f=b(p)``,g=c.forwardRef(({tabIndex:r=1,size:u="50",colorType:e="light",...o},t)=>a.jsx(l,{tabIndex:r,size:u,colorType:e,forwardRef:t,...o}));export{g as I,f as a};
//# sourceMappingURL=InputChip-MgUFoGrT.js.map
