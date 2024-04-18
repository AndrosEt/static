import{f as z,g as O,P,A as R,aF as F,ak as w,aE as L,ag as C,F as U,w as _,r as S,j as d,u as h,cm as $,bk as q,O as J}from"./index-VVIvRZBh.js";import{t as B}from"./Learn-nfpDmxZa.js";import{N as k}from"./AddToMyListDropdown-EN5Nh0z5.js";import{f as K}from"./middleware-KgP9JdWn.js";import{n as M,o as E,G as V}from"./SearchGraphModal-EAp81elq.js";const Y=["Comma","Space"],H=e=>(t,...a)=>e(t.map(s=>s.toLocaleUpperCase().replace("‎","")),a),Q=e=>e.split(/[\x09 ,;\n]+/).map(t=>t.trim()).filter(t=>!!t),X=async e=>await z({url:O(`${P}/api/v1/product/validate-asin`,e),method:"GET",withCredentials:0}),u=R(()=>({props:{marketplace:F("domain","amazon.com")},validatedAsins:{},validationError:""})),Z=w(u,"props",{sideEffect:({prev:e,next:t})=>{var a;if(x.clear(),(t.marketplace!==e.marketplace||t.mainAsin!==e.mainAsin)&&y.clear(),t.value&&JSON.stringify(t.value)!==JSON.stringify(e.value)){const s=[...new Set(t.value)];(a=t.onChange)==null||a.call(t,s),tt(t.value,t.onChange,t.onAsinsValidation)}}}),y=L(u,"validatedAsins"),x=w(u,"validationError",{sideEffect:({next:e})=>j(e)}),tt=async(e,t,a)=>{var l;const s=(l=C.getState().translation)==null?void 0:l.t,r=(await Promise.all(e.map(i=>b(i,{skipSameAsinValidation:!0},t)))).filter(i=>i!==null),c=r.reduce((i,p)=>(i[p.asin]=p,i),{});y.patch(c),r.map(i=>i.asin).forEach((i,p,o)=>{o.indexOf(i)!==p&&j(s==null?void 0:s("competitorsTagInput.errors.asinAlreadyAdded",{asin:i}))});const f=[...new Set(e)];return a==null||a(f.map(i=>c[i])),f},b=async(e,t,a)=>{var i,p;const s=(i=C.getState().translation)==null?void 0:i.t,r=e.trim(),c=u.getState().props.value||[],g=u.getState().validatedAsins,{marketplace:f,mainAsin:l}=u.getState().props;if((l==null?void 0:l.trim())===r||!t.skipSameAsinValidation&&c.includes(r))return s&&x.set(s("competitorsTagInput.errors.asinAlreadyAdded",{asin:r})),null;if(g[e])return g[e];try{const o=await X({asinOrUrl:e,marketplaceId:String(f.id)});return o.isParent&&!o.isStandalone?(a==null||a(c.filter(n=>n!==r)),s&&x.set(s("competitorsTagInput.errors.invalidChildAsin",{asin:r})),null):(y.patch({[o.asin]:o}),o)}catch(o){return a==null||a(c.filter(n=>n!==r)),o instanceof U&&s&&x.set(s(`competitorsTagInput.errors.${(p=o==null?void 0:o.result)==null?void 0:p.errorCode}`,{asin:r})),null}},j=e=>{e&&u.getState().props.showToastError&&B.error(e)},ft=({mainAsin:e,value:t,onChange:a,onAsinsValidation:s,maxTags:r=10,disabled:c,marketplace:g,clearOnError:f=!0,showProductIcon:l=!1,showInputError:i=!1,showToastError:p=!0,getPlaceholder:o,...n})=>{const{t:T}=_(),v=u(m=>m.validatedAsins),N=u(m=>m.validationError);S.useEffect(()=>{Z.set({mainAsin:e,marketplace:g,value:t,onChange:a,onAsinsValidation:s,showToastError:p})},[JSON.stringify(t),e,g]);const D=S.useCallback(async m=>await b(m,{})!=null,[]),G=S.useCallback(({value:m})=>{var I;const A=(I=v[m])==null?void 0:I.imageUrl;return l&&A?d.jsx(at,{src:A}):null},[l,v]),W=S.useCallback(m=>{var I;const A=(I=v[m])==null?void 0:I.imageUrl;return l&&A?d.jsx(st,{children:d.jsx(it,{src:A})}):null},[l,v]);return d.jsx(et,{value:t,inputProps:{placeholder:o==null?T("competitorsTagInput.placeholder",{maxAsins:r-((t==null?void 0:t.length)||0)}):o((t==null?void 0:t.length)??0,r)},size:"200",allowDuplicates:!0,onChange:a?H(a):void 0,addTagsOnPressKeys:Y,onSeparate:Q,maxTags:r,validation:D,disabled:c,renderTagIcon:G,getTooltipContent:W,error:i&&N,clearOnError:f,...n})},et=h(k)`
  ${k.InputWrapper} {
    min-height: 40px;
  }

  ${K.ImageWrapper} {
    height: 24px;
    width: 24px;
    margin-left: -12px;
  }
`,at=h.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: contain;
`,st=h.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,it=h.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`,rt=()=>d.jsxs(lt,{padding:"small",children:[d.jsx(ot,{}),d.jsx(nt,{children:d.jsx($,{builder:[{width:340,size:"small",direction:"column",bottom:4},{width:300,size:"small",direction:"column",bottom:8},{size:"normal",width:200,bottom:0}]})})]}),ot=h(q)`
  width: 40px;
  height: 53px;
  margin-right: ${({theme:e})=>e.spacing.sp16};
`,nt=h.div`
  flex: 1;
`,lt=h(J)`
  display: flex;
`,ht=({asin:e,asins:t,setAsins:a,marketplace:s,seller:r,type:c,maxAsins:g,emptyState:f,tool:l})=>{const i=M(n=>n.competitors.data),{status:p}=E();S.useEffect(()=>{(e||c==="my-list")&&E.action({marketplace:s.store,productId:e,type:c,seller:r})},[e,s.domain,s.store,r,c]);const o=S.useCallback(n=>()=>{t.indexOf(n)===-1?a([...t,n]):a(t.filter(T=>T!==n))},[t,a]);return d.jsx(d.Fragment,{children:p==="loaded"?i.length===0?f:i.map(n=>d.jsx(V,{asins:t,isWalmart:s.platform==="WALMART",item:n,maxLength:g,onClick:o(n.id),marketType:s.domain,tool:l},n.id)):ct.map((n,T)=>d.jsx(rt,{},T))})},ct=[...new Array(20)];export{ft as C,ht as a,X as v};
//# sourceMappingURL=Competitors-gx8iH-sJ.js.map
