import{ac as q,av as O}from"./Learn-iEpSD2rS.js";import{a as T}from"./index-IyiqQa2_.js";import{r as Y,bc as $,j as i,aj as z,aP as A,u as l,ak as j}from"./index-3WWdADc-.js";function _(e,t){q(2,arguments);var a=O(t);return T(e,-a)}const v=e=>typeof e=="number"||typeof e=="string",M=(e,t,a)=>{const n=parseFloat(e),s=Number(t),r=Number(a);return!isNaN(n)&&!isNaN(s)&&n<s?s:!isNaN(n)&&!isNaN(r)&&n>r?r:n},B=Y.memo(({value:e=[void 0,void 0],onChange:t,minPlaceholder:a,maxPlaceholder:n,min:s,max:r,className:I,error:o,hideErrorMessage:V,errorType:x="both",locked:f,lockedTooltip:N,onClickMin:w,onClickMax:E,...u})=>{const{t:g}=$(),[c,m]=e,W=p=>{const d=M(p.target.value,s,r);t==null||t([d,m])},S=p=>{const d=M(p.target.value,s,r);t==null||t([c,d])};return i.jsxs(h,{className:I,children:[i.jsx(z,{label:u.label,tooltipContent:u.tooltipContent,tooltipSettings:u.tooltipSettings}),i.jsxs(k,{children:[i.jsx(b,{...u,error:["both","min"].includes(x)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(c)?c:"",placeholder:a||g("minmax.min"),onChange:W,min:s,max:r,locked:f,lockedTooltip:N,onClickWrapper:w}),i.jsx(y,{...u,error:["both","max"].includes(x)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(m)?m:"",placeholder:n||g("minmax.max"),onChange:S,min:s,max:r,locked:f,lockedTooltip:N,onClickWrapper:E})]}),o&&!V&&i.jsx(A,{children:o})]})}),D=(e,t)=>{const[a,n]=e;return t&&(!Number(a)||!Number(n))?"required":(Number(a)||a===0)&&(Number(n)||n===0)&&a>n?"minBiggest":!0},h=l.div``,k=l.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`,b=l(j)`
  flex: 1;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ${j.Input}:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`,y=l(b)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,G=Object.assign(B,{Wrapper:h,InputsWrapper:k,MinInput:b,MaxInput:y});export{G as M,D as m,_ as s};
//# sourceMappingURL=Minmax-CRxFfvVO.js.map
