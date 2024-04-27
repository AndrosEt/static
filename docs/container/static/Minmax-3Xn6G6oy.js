import{ac as T,av as q}from"./Learn-ZI4QJ8Ms.js";import{a as F}from"./index-ECFt0NIj.js";import{r as O,bc as Y,j as i,aj as $,aP as z,u as l,ak as y}from"./index-tEWTe_cM.js";function _(e,n){T(2,arguments);var a=q(n);return F(e,-a)}const C=e=>{var a;return(a=new Intl.NumberFormat(void 0,{style:"currency",currency:e}).formatToParts(0).find(t=>t.type==="currency"))==null?void 0:a.value},v=e=>typeof e=="number"||typeof e=="string",j=(e,n,a)=>{const t=parseFloat(e),r=Number(n),s=Number(a);return!isNaN(t)&&!isNaN(r)&&t<r?r:!isNaN(t)&&!isNaN(s)&&t>s?s:t},A=O.memo(({value:e=[void 0,void 0],onChange:n,minPlaceholder:a,maxPlaceholder:t,min:r,max:s,className:I,error:o,hideErrorMessage:w,errorType:f="both",locked:x,lockedTooltip:N,onClickMin:V,onClickMax:E,...u})=>{const{t:g}=Y(),[c,m]=e,W=p=>{const d=j(p.target.value,r,s);n==null||n([d,m])},S=p=>{const d=j(p.target.value,r,s);n==null||n([c,d])};return i.jsxs(M,{className:I,children:[i.jsx($,{label:u.label,tooltipContent:u.tooltipContent,tooltipSettings:u.tooltipSettings}),i.jsxs(h,{children:[i.jsx(b,{...u,error:["both","min"].includes(f)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(c)?c:"",placeholder:a||g("minmax.min"),onChange:W,min:r,max:s,locked:x,lockedTooltip:N,onClickWrapper:V}),i.jsx(k,{...u,error:["both","max"].includes(f)?o:void 0,label:void 0,hideErrorMessage:!0,type:"number",value:v(m)?m:"",placeholder:t||g("minmax.max"),onChange:S,min:r,max:s,locked:x,lockedTooltip:N,onClickWrapper:E})]}),o&&!w&&i.jsx(z,{children:o})]})}),D=(e,n)=>{const[a,t]=e;return n&&(!Number(a)||!Number(t))?"required":(Number(a)||a===0)&&(Number(t)||t===0)&&a>t?"minBiggest":!0},M=l.div``,h=l.div`
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
`,k=l(b)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,G=Object.assign(A,{Wrapper:M,InputsWrapper:h,MinInput:b,MaxInput:k});export{G as M,C as g,D as m,_ as s};
//# sourceMappingURL=Minmax-3Xn6G6oy.js.map
