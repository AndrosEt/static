import{j as i,c8 as $,u as n,eM as y,a as o,x as j}from"./index-3WWdADc-.js";import{c8 as u,bv as w}from"./Learn-iEpSD2rS.js";import{F as l}from"./getMarketplaceLinkForProduct-A-zEKrnh.js";const A=({asin:s,imageSrc:t,href:a,size:r,disabled:e,active:p,tooltipContent:g,tippy:h,onRemove:c,...x})=>{const m=()=>!e&&window.open(a,"_blank");return i.jsx($,{appendTo:"parent",colorType:"light",maxWidth:"auto",content:g||i.jsx(f,{children:i.jsx(C,{src:t})}),disabled:e,small:!0,...h,children:i.jsx(v,{$disabled:e,$active:p,$size:r,size:r,disabled:e,active:p,$hasRemove:!!c,...x,children:i.jsxs(I,{hasRemove:!!c,children:[i.jsx(b,{$size:r,$disabled:e,src:t,alt:s}),i.jsx(k,{children:s}),a&&i.jsx(d,{$disabled:e,$active:p,$size:r,onClick:m}),i.jsx(u,{onRemove:c,disabled:e,colorType:p?"dark":"light"})]})})})},f=n.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=n.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`,d=n(j).attrs({icon:y})`
  color: ${s=>!s.$disabled&&!s.$active?s.theme.systemColors.grey600:s.theme.systemColors.grey300};

  margin-left: ${({theme:s,$size:t})=>t==="100"?s.spacing.sp8:s.spacing.sp4};
  transition: color 0.2s ease;
`,v=n(l)`
  ${l.Block} {
    ${({$size:s})=>s==="100"?o`
            padding-left: 3px;
          `:o`
            padding-left: 2px;
          `};
    ${({$hasRemove:s})=>s&&o`
        padding-right: 2px;
      `};

    &:hover {
      ${d} {
        ${({$disabled:s,$active:t,theme:a})=>!s&&o`
            color: ${t?a.systemColors.white:a.systemColors.grey800};
          `};
      }
    }
  }
`,I=n.div`
  display: flex;
  align-items: center;
  ${({hasRemove:s,theme:t})=>s&&o`
      ${w} {
        padding: ${t.spacing.sp8} ${t.spacing.sp4};
      }
    `}
`,b=n.img`
  ${({$size:s})=>s==="100"?o`
          width: 24px;
          height: 24px;
          border-radius: 12px;
          margin-right: ${({theme:t})=>t.spacing.sp8};
        `:o`
          width: 18px;
          height: 18px;
          border-radius: 9px;
          margin-right: ${({theme:t})=>t.spacing.sp4};
        `};

  ${({$disabled:s})=>s&&o`
      opacity: 0.35;
    `}
`,k=n.span``;export{A as P};
//# sourceMappingURL=ProductChip-uftlxV5Z.js.map
