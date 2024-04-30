import{ac as $,ae as C,av as j,au as $e,bb as Z,a8 as Q,a9 as Ie,aa as ke,a5 as Te,bf as je}from"./Learn-iEpSD2rS.js";import{r as g,j as d,bg as le,bh as W,cq as Me,u as y,hu as De,a as k,a1 as U,y as V,g0 as Le,bj as Ee,x as L,hv as Re,hw as ze,aP as Ae,g8 as Ne,hx as He,bc as O,cp as Fe,bz as _e,dt as Be,cj as We,ck as Oe,Q as Pe,d0 as Ye,K as de,N as Ue,du as Je,fZ as Ke,cC as ue,bt as qe,bl as Ge,bp as Xe,hy as Ze,f as Qe,hz as Ve,gs as et,a6 as z,P as K}from"./index-3WWdADc-.js";import{u as tt}from"./use-latest.esm-1HraH-At.js";import{f as ee}from"./useAutoPlay-ceAGW3YF.js";function rt(e,t){$(2,arguments);var r=C(e),n=j(t);return isNaN(n)?new Date(NaN):(n&&r.setDate(r.getDate()+n),r)}function nt(e,t){$(2,arguments);var r=C(e),n=j(t);if(isNaN(n))return new Date(NaN);if(!n)return r;var s=r.getDate(),o=new Date(r.getTime());o.setMonth(r.getMonth()+n+1,0);var i=o.getDate();return s>=i?o:(r.setFullYear(o.getFullYear(),o.getMonth(),s),r)}function N(e,t){if($(2,arguments),!t||$e(t)!=="object")return new Date(NaN);var r=t.years?j(t.years):0,n=t.months?j(t.months):0,s=t.weeks?j(t.weeks):0,o=t.days?j(t.days):0,i=t.hours?j(t.hours):0,c=t.minutes?j(t.minutes):0,f=t.seconds?j(t.seconds):0,m=C(e),l=n||r?nt(m,n+r*12):m,b=o||s?rt(l,o+s*7):l,x=c+i*60,v=f+x*60,S=v*1e3,a=new Date(b.getTime()+S);return a}function te(e){$(1,arguments);var t=C(e);return t.setHours(0,0,0,0),t}var st=864e5;function ot(e,t){$(2,arguments);var r=te(e),n=te(t),s=r.getTime()-Z(r),o=n.getTime()-Z(n);return Math.round((s-o)/st)}function R(e,t){$(2,arguments);var r=C(e),n=C(t),s=r.getTime()-n.getTime();return s<0?-1:s>0?1:s}var at=6e4,it=36e5,jr=1e3;function ct(e,t){$(2,arguments);var r=C(e),n=C(t),s=r.getFullYear()-n.getFullYear(),o=r.getMonth()-n.getMonth();return s*12+o}function lt(e,t){$(2,arguments);var r=C(e),n=C(t);return r.getFullYear()-n.getFullYear()}function re(e,t){var r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function dt(e,t){$(2,arguments);var r=C(e),n=C(t),s=re(r,n),o=Math.abs(ot(r,n));r.setDate(r.getDate()-s*o);var i=+(re(r,n)===-s),c=s*(o-i);return c===0?0:c}function q(e,t){return $(2,arguments),C(e).getTime()-C(t).getTime()}var ne={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ut="trunc";function G(e){return e?ne[e]:ne[ut]}function ht(e,t,r){$(2,arguments);var n=q(e,t)/it;return G(r==null?void 0:r.roundingMethod)(n)}function mt(e,t,r){$(2,arguments);var n=q(e,t)/at;return G(r==null?void 0:r.roundingMethod)(n)}function pt(e){$(1,arguments);var t=C(e);return t.setHours(23,59,59,999),t}function ft(e){$(1,arguments);var t=C(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function gt(e){$(1,arguments);var t=C(e);return pt(t).getTime()===ft(t).getTime()}function vt(e,t){$(2,arguments);var r=C(e),n=C(t),s=R(r,n),o=Math.abs(ct(r,n)),i;if(o<1)i=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*o);var c=R(r,n)===-s;gt(C(e))&&o===1&&R(e,n)===1&&(c=!1),i=s*(o-Number(c))}return i===0?0:i}function yt(e,t,r){$(2,arguments);var n=q(e,t)/1e3;return G(r==null?void 0:r.roundingMethod)(n)}function bt(e,t){$(2,arguments);var r=C(e),n=C(t),s=R(r,n),o=Math.abs(lt(r,n));r.setFullYear(1584),n.setFullYear(1584);var i=R(r,n)===-s,c=s*(o-Number(i));return c===0?0:c}function Mr(e){$(1,arguments);var t=C(e.start),r=C(e.end);if(isNaN(t.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(r.getTime()))throw new RangeError("End Date is invalid");var n={};n.years=Math.abs(bt(r,t));var s=R(r,t),o=N(t,{years:s*n.years});n.months=Math.abs(vt(r,o));var i=N(o,{months:s*n.months});n.days=Math.abs(dt(r,i));var c=N(i,{days:s*n.days});n.hours=Math.abs(ht(r,c));var f=N(c,{hours:s*n.hours});n.minutes=Math.abs(mt(r,f));var m=N(f,{minutes:s*n.minutes});return n.seconds=Math.abs(yt(r,m)),n}const xt=g.forwardRef(({defaultValue:e="",size:t=Me,className:r,onChange:n,onRemove:s,children:o,colorType:i="dark",disabled:c,icon:f,checkOverflown:m,onMouseEnter:l,onClick:b,...x},v)=>{var D;const S=g.useRef(null),[a,u]=g.useState(e),p=g.useCallback(T=>{l==null||l(T),S.current&&(m==null||m({currentTarget:S.current}))},[m,l]),h=g.useCallback(()=>{a&&e!==a?n==null||n(a,e):u(e)},[e,n,a]),w=g.useCallback(T=>{T.preventDefault(),a&&e!==a&&(n==null||n(a,e))},[e,n,a]),A=Ee({Enter:w}),F=g.useCallback(T=>u(T.currentTarget.value),[]);return d.jsxs(pe,{tabIndex:1,$colorType:i,$size:t,onClick:b,className:r,$editable:x.editable,$readonly:!s,$disabled:c,ref:v,"data-chip":!0,onMouseEnter:p,...x,children:[f&&d.jsx(he,{children:f}),x.editable?d.jsx(le,{value:a==null?void 0:a.toString(),children:d.jsx(W,{value:a,size:(D=a==null?void 0:a.toString())==null?void 0:D.length,onBlur:h,onKeyDown:A,onChange:F})}):d.jsx($t,{ref:S,children:o||a}),s&&d.jsx(M,{onClick:T=>{c||(T.stopPropagation(),s==null||s(a))},"data-testid":"remove-button",$disabled:c,children:d.jsx(St,{})})]})}),he=y.div`
  width: 18px;
  height: 18px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  flex-shrink: 0;
  margin-left: -6px;
  margin-right: 4px;
`,St=y(L).attrs({icon:De})`
  font-size: 13px;
  width: 13px !important;
  height: 13px !important;
`,M=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${e=>e.theme.systemColors.grey300};
  flex-shrink: 0;
  height: 100%;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,me={50:k`
    ${U};
    height: 20px;
    padding: 0 ${e=>e.theme.spacing.sp8};

    ${M} {
      padding: 0 ${e=>e.theme.spacing.sp8};
    }
  `,100:k`
    ${U};
    height: 24px;
    padding: 0 ${e=>e.theme.spacing.sp8};

    ${M} {
      padding: 0 ${e=>e.theme.spacing.sp8};
    }
  `,200:k`
    ${V};
    height: 32px;
    padding: 0 ${e=>e.theme.spacing.sp16};

    ${M} {
      padding-left: ${e=>e.theme.spacing.sp16};
      padding-right: ${e=>e.theme.spacing.sp16};
    }
  `,400:k`
    ${V};
    height: 32px;
    padding: 0 ${e=>e.theme.spacing.sp16};

    ${M} {
      padding-left: ${e=>e.theme.spacing.sp12};
      padding-right: ${e=>e.theme.spacing.sp16};
    }
  `},wt={dark:k`
    color: ${e=>e.theme.systemColors.white};
    background-color: ${e=>e.theme.systemColors.grey800};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    ${M} {
      color: ${e=>e.theme.systemColors.grey300};

      &:hover {
        color: ${e=>e.theme.systemColors.grey200};
      }
    }

    ${W} {
      color: ${e=>e.theme.systemColors.white};
    }
  `,light:k`
    color: ${e=>e.theme.systemColors.grey800};
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    ${M} {
      color: ${e=>e.theme.systemColors.grey600};

      &:hover {
        color: ${e=>e.theme.systemColors.grey800};
      }
    }

    ${W} {
      color: ${e=>e.theme.systemColors.grey800};
    }
  `},Ct={dark:k`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.grey100};
    border: 1px solid ${e=>e.theme.systemColors.grey100};
    cursor: not-allowed;
  `,light:k`
    color: ${e=>e.theme.systemColors.grey300};
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey200};
    cursor: not-allowed;
  `},$t=y.span`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`,pe=y.div`
  transition: box-shadow 0.2s ease;
  ${e=>me[e.$size]};
  ${e=>e.$disabled?Ct[e.$colorType]:wt[e.$colorType]};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ${Le};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  user-select: none;
  max-width: 100%;
  overflow: hidden;

  ${le.Wrapper} {
    height: 100%;
  }

  ${e=>!e.$readonly&&k`
      padding-right: 0;
    `}
`,Dr=Object.assign(xt,{Wrapper:pe,ImageWrapper:he,Icon:M});var se=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},It=function(t,r){var n=g.useRef();return g.useCallback(function(s){t.current=s,n.current&&se(n.current,null),n.current=r,r&&se(r,s)},[r])},oe={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},kt=function(t){Object.keys(oe).forEach(function(r){t.style.setProperty(r,oe[r],"important")})},ae=kt,I=null,ie=function(t,r){var n=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?n+r.borderSize:n-r.paddingSize};function Tt(e,t,r,n){r===void 0&&(r=1),n===void 0&&(n=1/0),I||(I=document.createElement("textarea"),I.setAttribute("tabindex","-1"),I.setAttribute("aria-hidden","true"),ae(I)),I.parentNode===null&&document.body.appendChild(I);var s=e.paddingSize,o=e.borderSize,i=e.sizingStyle,c=i.boxSizing;Object.keys(i).forEach(function(x){var v=x;I.style[v]=i[v]}),ae(I),I.value=t;var f=ie(I,e);I.value=t,f=ie(I,e),I.value="x";var m=I.scrollHeight-s,l=m*r;c==="border-box"&&(l=l+s+o),f=Math.max(l,f);var b=m*n;return c==="border-box"&&(b=b+s+o),f=Math.min(b,f),[f,m]}var ce=function(){},jt=function(t,r){return t.reduce(function(n,s){return n[s]=r[s],n},{})},Mt=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Dt=!!document.documentElement.currentStyle,Lt=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var n=jt(Mt,r),s=n.boxSizing;if(s==="")return null;Dt&&s==="border-box"&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:i}},Et=Lt;function fe(e,t,r){var n=tt(r);g.useLayoutEffect(function(){var s=function(i){return n.current(i)};if(e)return e.addEventListener(t,s),function(){return e.removeEventListener(t,s)}},[])}var Rt=function(t){fe(window,"resize",t)},zt=function(t){fe(document.fonts,"loadingdone",t)},At=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Nt=function(t,r){var n=t.cacheMeasurements,s=t.maxRows,o=t.minRows,i=t.onChange,c=i===void 0?ce:i,f=t.onHeightChange,m=f===void 0?ce:f,l=Re(t,At),b=l.value!==void 0,x=g.useRef(null),v=It(x,r),S=g.useRef(0),a=g.useRef(),u=function(){var w=x.current,A=n&&a.current?a.current:Et(w);if(A){a.current=A;var F=Tt(A,w.value||w.placeholder||"x",o,s),D=F[0],T=F[1];S.current!==D&&(S.current=D,w.style.setProperty("height",D+"px","important"),m(D,{rowHeight:T}))}},p=function(w){b||u(),c(w)};return g.useLayoutEffect(u),Rt(u),zt(u),g.createElement("textarea",ze({},l,{onChange:p,ref:v}))},Ht=g.forwardRef(Nt);const Ft=g.forwardRef(({edited:e,error:t,className:r,hideErrorMessage:n,...s},o)=>d.jsxs(ge,{className:r,children:[d.jsx(ve,{$invalid:!!t,$disabled:s.disabled,$edited:!t&&e,children:d.jsx(Ht,{...s,ref:o})}),t&&!n&&d.jsx(Ae,{children:t})]})),ge=y.div``,ve=y.div`
  ${Ne};

  textarea {
    ${He};
    min-height: 32px;
    padding: 4px 12px;

    ${({$disabled:e})=>e&&k`
        cursor: not-allowed;
      `}
  }
`,Lr=Object.assign(Ft,{Container:ge,Wrapper:ve}),_t=({data:{asin:e,marketplace:t,isMine:r,isNew:n,showCopyButton:s=!0},size:o,className:i})=>d.jsxs(ye,{className:i,children:[r&&d.jsx(Bt,{}),n&&d.jsx(Wt,{}),d.jsx(Ot,{marketplace:t}),d.jsx(Pt,{size:o,asin:e,showCopyButton:s})]}),Bt=g.memo(()=>{const{t:e}=O();return d.jsx(be,{type:"success",children:e("productSummary.myProduct")})}),Wt=g.memo(()=>{const{t:e}=O();return d.jsx(be,{type:"icon",children:e("productSummary.new")})}),Ot=g.memo(({marketplace:e})=>e!=null?d.jsx(Fe,{children:_e[e]}):null),Pt=g.memo(({size:e,asin:t,showCopyButton:r})=>d.jsxs(X,{"data-testid":"asin-label",children:[d.jsx("span",{children:t}),r&&d.jsx(Ut,{size:e,copyContent:t,contentLabel:"ASIN"})]})),X=y.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp4};
`,Yt=y.span``,Ut=g.memo(({size:e,copyContent:t,contentLabel:r})=>{const{t:n}=O();return d.jsx(Be,{size:e!=="400"?"50":void 0,copyContent:t,beforeCopyContent:d.jsx(We,{label:n("productSummary.copy",{label:r})}),afterCopyContent:d.jsx(Oe,{label:n("productSummary.copied",{label:r})})})}),ye=y(X)`
  ${Pe};
  gap: 8px;
`,be=y(Q)`
  ${Q.StatusTitle} {
    white-space: nowrap;
  }
`,Er=Object.assign(_t,{Wrapper:ye,AsinWrapper:X,Asin:Yt}),Rr=g.memo(({value:e,text:t,numberOfReviews:r,showInline:n=!0,noText:s=!1,link:o})=>d.jsxs(qt,{$inline:n,children:[d.jsx(xe,{children:Jt.map(i=>d.jsx(Gt,{children:Kt(e,i)},i))}),d.jsxs(Zt,{children:[!s&&d.jsx(Qt,{children:t||ee({value:e,minimumFractionDigits:1,maximumFractionDigits:1})}),r&&d.jsxs(Vt,{children:["(",ee({value:r}),")"]}),!!o&&d.jsx(er,{buttonType:"icon",size:"50",as:"a",href:o,target:"_blank",rel:"noreferrer",children:d.jsx(tr,{})})]})]})),Jt=[1,2,3,4,5],Kt=(e,t)=>e>=t-.75&&e<t-.25?d.jsx(L,{icon:Ie}):e>=t-.25?d.jsx(L,{icon:ke}):d.jsx(Xt,{icon:Ye}),xe=y.div`
  display: flex;
  align-items: center;
`,qt=y.div`
  display: flex;
  flex-direction: ${e=>e.$inline?"row":"column"};

  & > ${xe} {
    ${({$inline:e})=>!e&&k`
        margin-left: ${({theme:t})=>t.spacing.sp12};
      `}
  }
`,Gt=y.div`
  color: ${({theme:e})=>e.systemColors.yellow400};

  & > svg {
    font-size: 16px;
  }

  &:not(:first-child) {
    margin-left: 1px;
  }
`,Xt=y(L)`
  color: ${({theme:e})=>e.systemColors.grey300};
`,Zt=y.div`
  display: inline-flex;
  align-items: center;
`,Qt=y.div`
  /* ${de}; */
  color: ${({theme:e})=>e.systemColors.grey800};
  margin-left: ${e=>e.theme.spacing.sp8};
`,Vt=y.div`
  /* ${de}; */
  color: ${e=>e.theme.systemColors.grey600};
  margin-left: ${e=>e.theme.spacing.sp8};
`,er=y(Ue)`
  margin-left: ${({theme:e})=>e.spacing.sp4};
  text-decoration: none;
`,tr=y(L).attrs({icon:Je})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.systemColors.grey600};
`,rr=({items:e,className:t,renderHidden:r,renderAfterItems:n})=>{var m;const s=g.useRef(null),o=g.useRef(null),[i,c]=g.useState({}),f=g.useMemo(()=>r?e.filter(l=>!i[l.id]):[],[e,r,i]);return e.length===0?null:d.jsxs(we,{className:t,ref:s,style:{paddingRight:(((m=o.current)==null?void 0:m.offsetWidth)||0)+"px"},children:[e.map(l=>d.jsx(nr,{root:s,id:l.id,setVisibility:c,visible:i[l.id],children:l.component},l.id)),f.length>0&&d.jsx(sr,{ref:o,children:r==null?void 0:r(f)}),n]})},nr=g.memo(({children:e,root:t,id:r,setVisibility:n,visible:s})=>{const{ref:o}=Ke({root:t.current,threshold:.999,initialInView:!1,onChange:i=>n(c=>({...c,[r]:i}))});return d.jsx(Se,{$ivView:s,ref:o,children:e})}),sr=y.div`
  position: sticky;
`,Se=y.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${e=>e.$ivView?k`
          order: 0;
          opacity: 1;
        `:k`
          visibility: hidden;
          pointer-events: none;
          order: 100;
          opacity: 0;
        `}
`,we=y.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`,zr=Object.assign(rr,{Root:we,Item:Se}),or={offset:[0,12],placement:"bottom",appendTo:"parent",zIndex:Ge.dropdown,popperOptions:{strategy:"fixed"}},Ar=({items:e,count:t,disabled:r,size:n="100",trigger:s="click",className:o,tippy:i,onClick:c})=>{const f=g.useMemo(()=>({...or,...i||{},disabled:r}),[r,i]),m=g.useContext(ue),[l,b]=g.useState(void 0),x=()=>{s==="hover"&&b(!0)},v=()=>{s==="hover"&&b(!1)};return d.jsx("div",{onClick:S=>{c==null||c(S),S.stopPropagation(),m==null||m.setShowDropdown(!1)},className:o,children:d.jsx(Te,{closeByChildrenClick:!1,tippy:f,items:d.jsx(ar,{children:e}),visible:l,children:d.jsx(ir,{$size:n,$disabled:r,onMouseEnter:x,onMouseLeave:v,children:t})})})},ar=y.div`
  ${qe};
  overflow: auto;
  max-height: 220px;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  gap: ${e=>e.theme.spacing.sp4};
`,ir=y.div`
  cursor: pointer;
  ${U};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  align-self: center;
  background: ${e=>e.theme.systemColors.grey100};

  ${e=>me[e.$size]};

  ${e=>e.$disabled&&k`
      color: ${e.theme.systemColors.grey300};
      cursor: auto;
    `}
`,cr=()=>{const{setSearch:e,search:t}=g.useContext(ue);return d.jsx(lr,{value:t,onChange:e})},lr=({value:e,onChange:t})=>{const r=g.useRef(null),{t:n}=O();Ze(r);const s=g.useCallback(()=>{var o;t==null||t(""),(o=r==null?void 0:r.current)==null||o.focus()},[t]);return d.jsxs(mr,{children:[d.jsx(pr,{ref:r,value:e,onChange:o=>t==null?void 0:t(o.target.value),placeholder:n("placeholders.search")}),e?d.jsx(hr,{onClick:s,children:d.jsx(ur,{})}):d.jsx(Ce,{children:d.jsx(dr,{})})]})},Nr=e=>e.autocomplete?d.jsx(cr,{}):null,dr=y(L).attrs({icon:Xe})`
  width: 20px !important;
  font-size: 14px;
`,ur=y(L).attrs({icon:je})`
  width: 20px !important;
  font-size: 14px;
`,Ce=y.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.systemColors.grey600};
  padding-right: 8px;
`,hr=y(Ce)`
  cursor: pointer;
`,mr=y.div`
  height: 32px;
  display: flex;
  border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
  margin-bottom: 8px;
  padding-bottom: 4px;

  &:hover {
    border-color: ${e=>e.theme.systemColors.grey300};
  }

  &:focus-within {
    border-color: ${e=>e.theme.systemColors.blue600};
  }
`,pr=y(W)`
  height: 100%;
  flex: 1;
  padding: 0 8px;

  &::placeholder {
    color: ${e=>e.theme.systemColors.grey300};
  }
`,fr={feedback:"Extension Feedback",connectMWSToken:"Extension MWS Button Clicked",widgetButtonClicked:"Extension Widget Button Clicked",languageSwitched:"Extension Language Switched",tokenFlow:"Extension Token Flow Started",cerebroExportToKeywordTrackerButtonClicked:"Cerebro Export to Keyword Tracker button clicked",cerebroExportedToKeywordTracker:"Cerebro Exported to Keyword Tracker",chatAIHelpfulEvent:"AI chatbot was this answer helpful",aiChatBotOpen:"AI chatbot open",aiChatBotClose:"AI chatbot close",aiChatBotRetryClicked:"AI chatbot retry button clicked",aiChatBotRetryInputSubmitted:"AI chatbot input submitted",aiChatBotHelpArticleClicked:"AI chatbot help article clicked",aiChatBotHelpToolClicked:"AI chatbot tool link clicked",aiChatBotHelpfulAnswerClicked:"AI chatbot helpful answer clicked",aiChatBotUnhelpfulAnswerClicked:"AI chatbot unhelpful answer clicked",aiChatBotContactSupportClicked:"AI chatbot contact support clicked",aiChatBotSubmitIdeaClicked:"AI chatbot submit idea clicked",ProductSummaryASINHoverView:"ASIN Hover View",keywordHoverProductViewed:"Keyword Hover Product Viewed"},Hr=({url:e=Ve})=>{const[t,r]=g.useState(null);return g.useEffect(()=>{var s,o;(o=(s=window==null?void 0:window.chrome)==null?void 0:s.storage)==null||o.sync.get("settings",({settings:i})=>{r((i==null?void 0:i.language)||"en")})},[]),{sendSegmentEvent:g.useCallback(async({name:s,properties:o})=>{await Qe({method:"POST",headers:{"Content-Type":"application/json"},url:e,params:{name:s,properties:{language:t,...o}},withCredentials:!0})},[t,e]),segmentEventType:fr}},Fr=e=>"/?accountId="+e,gr=et,P=z("https://www.helium10.com"),E=gr()?"":K,_r=E+"/api/v1/customers/me",Br=K+"/images/avatars/profile-default.svg",Wr=E+"/site/get-search-bar-autocomplete",Or=E+"/site/search-bar-chosen-result",Pr=P+"/support",Yr=z("https://kb.helium10.com/hc/en-us/requests/new"),Ur="https://www.facebook.com/groups/Helium10Users/",Jr=E+"/alerts",Kr=E+"/subscribe",qr="https://members.helium10elite.com",Gr=e=>z("https://adtomic.helium10.com/assets/images/flags/"+e.toUpperCase()+".svg"),Xr=z(P+"/privacy-policy"),Zr=z(P+"/terms-and-conditions"),Qr="https://www.g2.com/products/helium-10/reviews#reviews",Vr=K+"/sitemap",en=P+"/walmart",tn=z("https://pages.helium10.com/customer-success-webinars"),rn=E+"/api/v1/product/data",nn=E+"/api/v1/product/organic-top";var B={BASE_URL:"https://re-cdn.helium10.com/container/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const J=new Map,_=e=>{const t=J.get(e);return t?Object.fromEntries(Object.entries(t.stores).map(([r,n])=>[r,n.getState()])):{}},vr=(e,t,r)=>{if(e===void 0)return{type:"untracked",connection:t.connect(r)};const n=J.get(r.name);if(n)return{type:"tracked",store:e,...n};const s={connection:t.connect(r),stores:{}};return J.set(r.name,s),{type:"tracked",store:e,...s}},yr=(e,t={})=>(r,n,s)=>{const{enabled:o,anonymousActionType:i,store:c,...f}=t;let m;try{m=(o??(B?"production":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!m)return(B?"production":void 0)!=="production"&&o&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(r,n,s);const{connection:l,...b}=vr(c,m,f);let x=!0;s.setState=(a,u,p)=>{const h=r(a,u);if(!x)return h;const w=p===void 0?{type:i||"anonymous"}:typeof p=="string"?{type:p}:p;return c===void 0?(l==null||l.send(w,n()),h):(l==null||l.send({...w,type:`${c}/${w.type}`},{..._(f.name),[c]:s.getState()}),h)};const v=(...a)=>{const u=x;x=!1,r(...a),x=u},S=e(s.setState,n,s);if(b.type==="untracked"?l==null||l.init(S):(b.stores[b.store]=s,l==null||l.init(Object.fromEntries(Object.entries(b.stores).map(([a,u])=>[a,a===b.store?S:u.getState()])))),s.dispatchFromDevtools&&typeof s.dispatch=="function"){let a=!1;const u=s.dispatch;s.dispatch=(...p)=>{(B?"production":void 0)!=="production"&&p[0].type==="__setState"&&!a&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),a=!0),u(...p)}}return l.subscribe(a=>{var u;switch(a.type){case"ACTION":if(typeof a.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return Y(a.payload,p=>{if(p.type==="__setState"){if(c===void 0){v(p.state);return}Object.keys(p.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const h=p.state[c];if(h==null)return;JSON.stringify(s.getState())!==JSON.stringify(h)&&v(h);return}s.dispatchFromDevtools&&typeof s.dispatch=="function"&&s.dispatch(p)});case"DISPATCH":switch(a.payload.type){case"RESET":return v(S),c===void 0?l==null?void 0:l.init(s.getState()):l==null?void 0:l.init(_(f.name));case"COMMIT":if(c===void 0){l==null||l.init(s.getState());return}return l==null?void 0:l.init(_(f.name));case"ROLLBACK":return Y(a.state,p=>{if(c===void 0){v(p),l==null||l.init(s.getState());return}v(p[c]),l==null||l.init(_(f.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return Y(a.state,p=>{if(c===void 0){v(p);return}JSON.stringify(s.getState())!==JSON.stringify(p[c])&&v(p[c])});case"IMPORT_STATE":{const{nextLiftedState:p}=a.payload,h=(u=p.computedStates.slice(-1)[0])==null?void 0:u.state;if(!h)return;v(c===void 0?h:h[c]),l==null||l.send(null,p);return}case"PAUSE_RECORDING":return x=!x}return}}),S},sn=yr,Y=(e,t)=>{let r;try{r=JSON.parse(e)}catch(n){console.error("[zustand devtools middleware] Could not parse the received json",n)}r!==void 0&&t(r)},br=e=>(t,r,n)=>{const s=n.subscribe;return n.subscribe=(i,c,f)=>{let m=i;if(c){const l=(f==null?void 0:f.equalityFn)||Object.is;let b=i(n.getState());m=x=>{const v=i(x);if(!l(b,v)){const S=b;c(b=v,S)}},f!=null&&f.fireImmediately&&c(b,b)}return s(m)},e(t,r,n)},on=br;function xr(e,t){let r;try{r=e()}catch{return}return{getItem:s=>{var o;const i=f=>f===null?null:JSON.parse(f,t==null?void 0:t.reviver),c=(o=r.getItem(s))!=null?o:null;return c instanceof Promise?c.then(i):i(c)},setItem:(s,o)=>r.setItem(s,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:s=>r.removeItem(s)}}const H=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return H(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return H(n)(r)}}}},Sr=(e,t)=>(r,n,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:u=>u,version:0,merge:(u,p)=>({...p,...u}),...t},i=!1;const c=new Set,f=new Set;let m;try{m=o.getStorage()}catch{}if(!m)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...u)},n,s);const l=H(o.serialize),b=()=>{const u=o.partialize({...n()});let p;const h=l({state:u,version:o.version}).then(w=>m.setItem(o.name,w)).catch(w=>{p=w});if(p)throw p;return h},x=s.setState;s.setState=(u,p)=>{x(u,p),b()};const v=e((...u)=>{r(...u),b()},n,s);let S;const a=()=>{var u;if(!m)return;i=!1,c.forEach(h=>h(n()));const p=((u=o.onRehydrateStorage)==null?void 0:u.call(o,n()))||void 0;return H(m.getItem.bind(m))(o.name).then(h=>{if(h)return o.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==o.version){if(o.migrate)return o.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return S=o.merge(h,(w=n())!=null?w:v),r(S,!0),b()}).then(()=>{p==null||p(S,void 0),i=!0,f.forEach(h=>h(S))}).catch(h=>{p==null||p(void 0,h)})};return s.persist={setOptions:u=>{o={...o,...u},u.getStorage&&(m=u.getStorage())},clearStorage:()=>{m==null||m.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>a(),hasHydrated:()=>i,onHydrate:u=>(c.add(u),()=>{c.delete(u)}),onFinishHydration:u=>(f.add(u),()=>{f.delete(u)})},a(),S||v},wr=(e,t)=>(r,n,s)=>{let o={storage:xr(()=>localStorage),partialize:a=>a,version:0,merge:(a,u)=>({...u,...a}),...t},i=!1;const c=new Set,f=new Set;let m=o.storage;if(!m)return e((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...a)},n,s);const l=()=>{const a=o.partialize({...n()});return m.setItem(o.name,{state:a,version:o.version})},b=s.setState;s.setState=(a,u)=>{b(a,u),l()};const x=e((...a)=>{r(...a),l()},n,s);s.getInitialState=()=>x;let v;const S=()=>{var a,u;if(!m)return;i=!1,c.forEach(h=>{var w;return h((w=n())!=null?w:x)});const p=((u=o.onRehydrateStorage)==null?void 0:u.call(o,(a=n())!=null?a:x))||void 0;return H(m.getItem.bind(m))(o.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==o.version){if(o.migrate)return o.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return v=o.merge(h,(w=n())!=null?w:x),r(v,!0),l()}).then(()=>{p==null||p(v,void 0),v=n(),i=!0,f.forEach(h=>h(v))}).catch(h=>{p==null||p(void 0,h)})};return s.persist={setOptions:a=>{o={...o,...a},a.storage&&(m=a.storage)},clearStorage:()=>{m==null||m.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>S(),hasHydrated:()=>i,onHydrate:a=>(c.add(a),()=>{c.delete(a)}),onFinishHydration:a=>(f.add(a),()=>{f.delete(a)})},o.skipHydration||S(),v||x},Cr=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((B?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Sr(e,t)):wr(e,t),an=Cr;export{G as $,Pr as A,tn as B,cr as C,_r as D,$t as E,E as F,gr as G,Ar as H,Gr as I,Jr as J,Ur as K,Br as L,Fr as M,Lr as N,Kr as O,Pt as P,qr as Q,Rr as R,Xr as S,Zr as T,Qr as U,Vr as V,zr as W,it as X,at as Y,jr as Z,Nr as _,rt as a,en as a0,me as a1,lr as a2,N as b,dt as c,vt as d,pt as e,Dr as f,ft as g,nt as h,Mr as i,sn as j,Ot as k,Ut as l,on as m,Er as n,gt as o,an as p,q,ot as r,te as s,nn as t,Hr as u,rn as v,Wr as w,Or as x,ht as y,Yr as z};
//# sourceMappingURL=middleware-lPGLX8nq.js.map
