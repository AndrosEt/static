import{j as i,cz as r,u as s}from"./index-VVIvRZBh.js";import{T as t}from"./SearchGraphModal-EAp81elq.js";const f=({locked:e,onClick:n,onLockClick:d,title:o,tooltip:a,tooltipProps:c,lockedTooltip:p,lockedTooltipProps:l,minWidth:m,className:x})=>i.jsxs(h,{onClick:n,minWidth:m,className:x,children:[e&&i.jsx(g,{children:i.jsx(t,{content:p,appendTo:document.body,delay:[0,0],zIndex:1e8,...l,children:i.jsx("div",{children:i.jsx(r,{type:"tertiary",onClick:d})})})}),i.jsx(t,{content:a,colorType:"light",offset:[0,16],zIndex:1e8,...c,children:i.jsx("div",{children:o})})]}),h=s.div`
  min-width: ${e=>e.minWidth||80}px;
  display: flex;
  align-items: center;

  ${r.Wrapper} {
    flex: 0 0 auto;
  }

  margin: ${({theme:{spacing:{sp8:e,sp16:n}}})=>`-${e} -${n}`};
  padding: ${({theme:{spacing:{sp8:e,sp16:n}}})=>`${e} ${n}`};
`,g=s.div`
  margin-right: ${({theme:e})=>e.spacing.sp8};
`;export{f as L};
//# sourceMappingURL=LockedTitle-8GqE8_9_.js.map
