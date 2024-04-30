import{a as Ae,I as c,j as e,u as l,aW as p,A as Ce,G as Ke,w as Ne,cS as Ee,r as ke,a2 as Ge,H as Oe,V as Ie,N as Me}from"./index-3WWdADc-.js";import{r as ze}from"./redirectToSubscribe-18BB2MSS.js";import{g as He,U as Le}from"./getMarketplaceLinkForProduct-A-zEKrnh.js";const Te=Ae`
  align-self: center;
  margin-top: ${t=>t.theme.spacing.sp16};
  margin-bottom: ${t=>t.theme.spacing.sp16};

  ${c.largeDesktop} {
    margin-top: ${t=>t.theme.spacing.sp32};
    align-self: flex-start;
    margin-bottom: 0;
  }
`,Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(_e,{}),e.jsx(Qe,{})]}),We=()=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx($,{children:e.jsx(Xe,{$width:"64px"})}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs(b,{children:[e.jsx($,{children:e.jsx(k,{})}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs(b,{children:[e.jsx($,{children:e.jsx(k,{})}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs(b,{children:[e.jsx($,{children:e.jsx(k,{})}),e.jsx(a,{}),e.jsx(a,{})]})]}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(Se,{}),e.jsx(Se,{})]}),Je=l(p)`
  align-self: center;
  width: 200px;
  height: 36px;

  ${c.largeDesktop} {
    align-self: flex-start;
    width: 240px;
  }
`,Se=l(p)`
  align-self: center;
  width: 100%;
  height: ${t=>t.theme.spacing.sp24};
  margin-top: ${t=>t.theme.spacing.sp24};

  ${c.largeDesktop} {
    align-self: flex-start;
  }

  & + & {
    margin-top: ${t=>t.theme.spacing.sp12};
  }
`,Qe=l(p)`
  ${Te};
  width: 162px;
  height: 54px;
`,b=l.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 64px;

  &:first-child {
    margin: 0 0 ${t=>t.theme.spacing.sp32};
  }

  &:not(:first-child) {
    border-bottom: 1px solid ${t=>t.theme.systemColors.grey200};
    padding: 0 0 ${t=>t.theme.spacing.sp16};
    margin: ${t=>t.theme.spacing.sp16} 0 0;
  }
`,$=l.div`
  display: flex;
  align-items: center;
  flex: 1;
`,Xe=l(p)`
  width: ${t=>t.theme.spacing.sp64};
`,k=l(p)`
  flex: 1;
`,a=l(p)`
  display: none;
  width: 120px;
  height: ${t=>t.theme.spacing.sp32};

  ${c.laptop} {
    display: flex;
  }
`,we=Ce(()=>({upsellGrid:null})),g=Ke(we,"upsellGrid",(t,n)=>He({...t,isPage:!0},n==null?void 0:n.signal)),Ye=()=>{const{t}=Ne(),n=we(Ee(r=>r)),u=g(r=>r.status!=="loaded");return ke.useMemo(()=>{var U,v,B,F,q,R,A,C,K,N,E,O,I,M,z,H,L,V,W,_,J,Q,X,Y,Z,ee,te,se,ne,le,ie,re,oe,ae,ce,de,pe,ue,me,ge,xe,he,fe,je,be;if(u||Object.keys((n==null?void 0:n.upsellGrid)||{}).length===0)return null;const r=i=>{if(i){const{amount:f,interval:j,discountedAmount:$e}=i,ye=t(`intervalShort.${j}`),qe=f?`${Ge({amount:Number(f),isRounded:!0})}/${ye}`:"",Re=$e?`${Ge({amount:Number($e),isRounded:!0})}/${ye}`:"";return{amount:qe,discountedAmount:Re}}return null},m=(B=(v=(U=n.upsellGrid)==null?void 0:U.data)==null?void 0:v.recommendation)==null?void 0:B.plan.period,o=r((R=(q=(F=n.upsellGrid)==null?void 0:F.data)==null?void 0:q.recommendation)==null?void 0:R.plan),s=(K=(C=(A=n.upsellGrid)==null?void 0:A.data)==null?void 0:C.recommendation)==null?void 0:K.plan.key,y=(O=(E=(N=n.upsellGrid)==null?void 0:N.data)==null?void 0:E.recommendation)==null?void 0:O.plan.title,x=((z=(M=(I=n.upsellGrid)==null?void 0:I.data)==null?void 0:M.recommendation)==null?void 0:z.bulletPoints)||[],G=(L=(H=n.upsellGrid)==null?void 0:H.data)==null?void 0:L.subscription.plan.period,d=r((W=(V=n.upsellGrid)==null?void 0:V.data)==null?void 0:W.subscription.plan),P=(J=(_=n.upsellGrid)==null?void 0:_.data)==null?void 0:J.subscription.plan.key,ve=(X=(Q=n.upsellGrid)==null?void 0:Q.data)==null?void 0:X.subscription.plan.title,h=(ee=(Z=(Y=n.upsellGrid)==null?void 0:Y.data)==null?void 0:Z.subscription)==null?void 0:ee.bulletPoints,Be=x.map((i,f)=>{var j;return{title:i.title,subtitle:(i==null?void 0:i.subTitle)||null,values:{[s]:i==null?void 0:i.specialText,[P]:(j=h==null?void 0:h[f])==null?void 0:j.specialText}}}),Fe={isBest:!1,id:P,label:ve,price:d==null?void 0:d.amount,period:G,discountedPrice:d==null?void 0:d.discountedAmount};let S=[{isBest:!0,id:s,label:y,price:o==null?void 0:o.amount,period:m,discountedPrice:o==null?void 0:o.discountedAmount}];return h&&(S=[Fe,...S]),{ctaTitle:(se=(te=n.upsellGrid)==null?void 0:te.data)==null?void 0:se.ctaTitle,title:(ie=(le=(ne=n.upsellGrid)==null?void 0:ne.data)==null?void 0:le.recommendation)==null?void 0:ie.title,subtitle:(ae=(oe=(re=n.upsellGrid)==null?void 0:re.data)==null?void 0:oe.recommendation)==null?void 0:ae.subtitle,offerKey:(ue=(pe=(de=(ce=n.upsellGrid)==null?void 0:ce.data)==null?void 0:de.recommendation)==null?void 0:pe.offer)==null?void 0:ue.key,offerAction:(he=(xe=(ge=(me=n.upsellGrid)==null?void 0:me.data)==null?void 0:ge.recommendation)==null?void 0:xe.offer)==null?void 0:he.action,queryStringParameters:(be=(je=(fe=n.upsellGrid)==null?void 0:fe.data)==null?void 0:je.recommendation)==null?void 0:be.queryStringParameters,features:Be,plans:S}},[u,n.upsellGrid,t])},Ze=({withSkeleton:t=!0,title:n,subtitle:u,location:r,onUpgrade:m})=>{var x;const o=g(G=>G.status),s=Ye();ke.useEffect(()=>{g==null||g.action({location:r})},[r]);const y=()=>{Promise.all([m==null?void 0:m()]).finally(()=>{ze({key:s==null?void 0:s.offerKey,action:s==null?void 0:s.offerAction,queryStringParameters:s==null?void 0:s.queryStringParameters})})};return!t&&o!=="loaded"?null:o!=="loaded"?e.jsxs(T,{children:[e.jsx(w,{children:e.jsx(Ve,{})}),e.jsx(D,{children:e.jsx(We,{})})]}):e.jsx(e.Fragment,{children:s&&e.jsxs(T,{children:[e.jsx(w,{children:e.jsxs(e.Fragment,{children:[e.jsx(De,{children:n??s.title}),(u||(s==null?void 0:s.subtitle))&&e.jsx(Pe,{children:u??(s==null?void 0:s.subtitle)}),(s==null?void 0:s.ctaTitle)&&e.jsx(Ue,{size:"400",onClick:y,children:s.ctaTitle})]})}),(s==null?void 0:s.plans)&&((x=s==null?void 0:s.features)==null?void 0:x.length)>0&&e.jsx(D,{children:e.jsx(Le,{plans:s.plans,features:s.features})})]})})},T=l.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  ${c.largeDesktop} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 64px;
  }
`,w=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,De=l.h2`
  ${Oe};
  text-align: center;

  ${c.largeDesktop} {
    text-align: left;
  }
`,Pe=l.p`
  ${Ie};
  text-align: center;
  color: ${t=>t.theme.systemColors.grey600};
  margin-top: ${t=>t.theme.spacing.sp16};

  ${c.largeDesktop} {
    text-align: left;
  }
`,Ue=l(Me)`
  ${Te};
`,D=l.div`
  border-radius: 6px;
  border: solid 1px ${t=>t.theme.systemColors.grey200};
  padding: ${({theme:{spacing:t}})=>`${t.sp32} ${t.sp32} ${t.sp48}`};
`,nt=Object.assign(Ze,{Container:T,Description:w,Title:De,Subtitle:Pe,UpgradeButton:Ue,Table:D});export{nt as U};
//# sourceMappingURL=UpsellGrid-qzSEBuDx.js.map
