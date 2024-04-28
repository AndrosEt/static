import{r as a,j as r,x as n,bZ as b,u as e,N as d,a as u,a1 as y}from"./index-tEWTe_cM.js";const $=a.forwardRef(({changesCount:s,icon:o,...l},c)=>r.jsx(i,{...l,ref:c,buttonType:"tertiary",$changes:s>0,icon:s>0?r.jsx(t,{children:s}):o??r.jsx(n,{icon:b})})),i=e(d)`
  ${({$changes:s})=>s&&u`
      background: ${({theme:o})=>o.systemColors.blue50};
      color: ${({theme:o})=>o.systemColors.blue600};

      &:hover,
      &:focus {
        background: ${({theme:o})=>o.systemColors.blue100};
        border-color: ${({theme:o})=>o.systemColors.blue100};
      }

      //State: pressed
      &:active {
        background: ${({theme:o})=>o.systemColors.blue200};
        border-color: ${({theme:o})=>o.systemColors.blue200};
      }

      //State: keyboard focus
      &:focus-visible {
        background: ${({theme:o})=>o.systemColors.blue100};
        border-color: ${({theme:o})=>o.systemColors.blue100};
      }

      &:disabled {
        background: ${({theme:o})=>o.systemColors.grey200};
        border-color: ${({theme:o})=>o.systemColors.grey200};
        color: ${({theme:o})=>o.systemColors.grey300};

        ${t} {
          background-color: ${({theme:o})=>o.systemColors.grey300};
          color: ${({theme:o})=>o.systemColors.grey400};
        }
      }
    `};
`,t=e.div`
  ${y};
  background-color: ${({theme:s})=>s.systemColors.blue600};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 18px;
  min-width: 18px;
  border-radius: 18px;
  padding: 0 5px;
  color: ${({theme:s})=>s.systemColors.white};
`;export{$ as F};
//# sourceMappingURL=FilterButton-NLqylZQe.js.map
