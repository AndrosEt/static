import{ae as T,as as q}from"./Learn-nfpDmxZa.js";import{a as F}from"./index-xyGS0OnY.js";import{r as O,aP as Y,j as i,am as $,bf as z,u as l,an as y}from"./index-VVIvRZBh.js";function _(e,n){T(2,arguments);var a=q(n);return F(e,-a)}const C=e=>{var a;return(a=new Intl.NumberFormat(void 0,{style:"currency",currency:e}).formatToParts(0).find(t=>t.type==="currency"))==null?void 0:a.value},v=e=>typeof e=="number"||typeof e=="string",M=(e,n,a)=>{const t=parseFloat(e),r=Number(n),s=Number(a);return!isNaN(t)&&!isNaN(r)&&t<r?r:!isNaN(t)&&!isNaN(s)&&t>s?s:t},A=O.memo(({value:e=[void 0,void 0],onChange:n,minPlaceholder:a,maxPlaceholder:t,min:r,max:s,className:k,error:o,hideErrorMessage:w,errorType:f="both",locked:x,lockedTooltip:N,onClickMin:V,onClickMax:E,...u})=>{const{t:g}=Y(),[c,m]=e,W=p=>{const d=M(p.target.value,r,s);n==null||n([d,m])},S=p=>{const d=M(p.target.value,r,s);n==null||n([c,d])};return i.jsxs(h,{className:k,children:[i.jsx($,{label:u.label,tooltipContent:u.tooltipContent,tooltipSettings:u.tooltipSettings}),i.jsxs(j,{children:[i.jsx(b,{...u,error:["both","min"].includes(f)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(c)?c:"",placeholder:a||g("minmax.min"),onChange:W,min:r,max:s,locked:x,lockedTooltip:N,onClickWrapper:V}),i.jsx(I,{...u,error:["both","max"].includes(f)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(m)?m:"",placeholder:t||g("minmax.max"),onChange:S,min:r,max:s,locked:x,lockedTooltip:N,onClickWrapper:E})]}),o&&!w&&i.jsx(z,{children:o})]})}),D=(e,n)=>{const[a,t]=e;return n&&(!Number(a)||!Number(t))?"required":(Number(a)||a===0)&&(Number(t)||t===0)&&a>t?"minBiggest":!0},h=l.div``,j=l.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`,b=l(y)`
  flex: 1;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ${y.Input}:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`,I=l(b)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,G=Object.assign(A,{Wrapper:h,InputsWrapper:j,MinInput:b,MaxInput:I});export{G as M,C as g,D as m,_ as s};
//# sourceMappingURL=Minmax-7OYP5BGn.js.map
