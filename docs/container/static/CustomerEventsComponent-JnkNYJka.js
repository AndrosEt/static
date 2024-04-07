import{r as m,fS as le,j as s,fT as ke,u as i,f as v,g as A,P as Z,A as Q,ak as b,G,ab as M,w as h,N as D,x as R,aM as Le,bL as Fe,aF as Be,bd as Pe,E as he,f1 as We,f2 as Ue,a as y,a2 as ze,e7 as Ye,Q as ee,Y as _e,aB as qe,K as L,O as te,bc as Ce,cF as Xe,a1 as Te,M as H,cm as Ke,aq as ce,C as se,bh as k,dZ as Je,aE as Ze,bl as Qe,cy as F,am as B,cd as ne,B as et,cc as tt,cL as st,dv as nt}from"./index-VVIvRZBh.js";import{ae as ot,ag as rt,a0 as xe,J as P,e as oe,ay as X}from"./Learn-nfpDmxZa.js";import{j as at,b as Se,D as it}from"./WidthLimitedTagsValue-v2a_4qBm.js";import{u as lt,a as W}from"./getUpsellData--u-Ov2M_.js";import{c as U}from"./index-7v7JHEmS.js";import{f as fe}from"./useAutoPlay-JZxKBgmm.js";import{C as K}from"./CategoricalChip-FObKkzKw.js";import{C as ct}from"./Collapse-wvXOjCKb.js";import{P as dt}from"./ProductChip-swqSSqla.js";import{g as Et,s as re,e as Ae,N as ut}from"./middleware-KgP9JdWn.js";import{l as pt}from"./NewRadio-yIsEqEsT.js";import{a as gt,c as mt}from"./configuration-qUZ7dDqV.js";import{l as De}from"./leitenList-G2zkImOB.js";import{P as Nt}from"./ProductMultiSelect-rF6KDBVq.js";import{T as ht}from"./TagsMultiSelect-D_WMtxSh.js";function _t(e){ot(1,arguments);var t=rt(e);return t.setMinutes(0,0,0),t}function Ct(e,{jsonStringType:t,typeGuard:n}={jsonStringType:"json"}){const o=c=>{try{const l=JSON.parse(c);return n&&!n(l)?void 0:l}catch{return}};return t==="jsonl"?(c=>{const l=c.split(/\n|\n\r/).filter(Boolean),d=[];for(const E of l){const u=o(E);if(u===void 0)return;d.push(u)}return d})(e):o(e)}const Tt=(e,t)=>{const n=m.createContext({store:null,withStore:null}),o=d=>{const{store:E}=m.useContext(n);if(!E)throw new Error("[leitenContext] The provider is not defined");return le(E,d)},r=d=>{const{withStore:E}=m.useContext(n);if(!E)throw new Error("[ZustandContextStore] The provider is not defined");return d(E)},c=()=>ke(e);return[o,({children:d})=>{const[E]=m.useState(c),[u]=m.useState(()=>Object.assign(N=>le(E,N),E)),[x]=m.useState(()=>(t==null?void 0:t(u))||null);return s.jsx(n.Provider,{value:{store:E,withStore:x},children:d})},r]},ae=i.div`
  background: ${({pointType:e,theme:t})=>xt(t)[e]};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,xt=e=>({alert:e.systemColors.blue600,note:e.dataVisualizationColors.green500,insight:e.dataVisualizationColors.tomato500});var a;(function(e){e[e.EVENT_TITLE_CHANGED=1]="EVENT_TITLE_CHANGED",e[e.EVENT_CATEGORY_CHANGED=2]="EVENT_CATEGORY_CHANGED",e[e.EVENT_SUBCATEGORY_CHANGED=3]="EVENT_SUBCATEGORY_CHANGED",e[e.EVENT_MAIN_IMAGE_CHANGED=4]="EVENT_MAIN_IMAGE_CHANGED",e[e.EVENT_SELLERS_COUNT_CHANGED=5]="EVENT_SELLERS_COUNT_CHANGED",e[e.EVENT_BUYBOX_CHANGED=6]="EVENT_BUYBOX_CHANGED",e[e.EVENT_PRICE_CHANGED=7]="EVENT_PRICE_CHANGED",e[e.EVENT_WIDTH_CHANGED=8]="EVENT_WIDTH_CHANGED",e[e.EVENT_HEIGHT_CHANGED=9]="EVENT_HEIGHT_CHANGED",e[e.EVENT_LENGTH_CHANGED=10]="EVENT_LENGTH_CHANGED",e[e.EVENT_WEIGHT_CHANGED=11]="EVENT_WEIGHT_CHANGED",e[e.EVENT_BSR_CHANGED=12]="EVENT_BSR_CHANGED",e[e.EVENT_SCREENSHOTS_CREATED=13]="EVENT_SCREENSHOTS_CREATED",e[e.EVENT_BUYBOX_LOST=14]="EVENT_BUYBOX_LOST",e[e.EVENT_BUYBOX_WON=15]="EVENT_BUYBOX_WON",e[e.EVENT_DIMENSIONS_CHANGED=16]="EVENT_DIMENSIONS_CHANGED",e[e.EVENT_5_STAR_REVIEW_CHANGED=17]="EVENT_5_STAR_REVIEW_CHANGED",e[e.EVENT_4_STAR_REVIEW_CHANGED=18]="EVENT_4_STAR_REVIEW_CHANGED",e[e.EVENT_3_STAR_REVIEW_CHANGED=19]="EVENT_3_STAR_REVIEW_CHANGED",e[e.EVENT_2_STAR_REVIEW_CHANGED=20]="EVENT_2_STAR_REVIEW_CHANGED",e[e.EVENT_1_STAR_REVIEW_CHANGED=21]="EVENT_1_STAR_REVIEW_CHANGED",e[e.EVENT_1_2_3_STAR_REVIEW_CHANGED=22]="EVENT_1_2_3_STAR_REVIEW_CHANGED",e[e.EVENT_DEFECT_CHANGED=23]="EVENT_DEFECT_CHANGED",e[e.EVENT_NO_DEFECT_CHANGED=24]="EVENT_NO_DEFECT_CHANGED",e[e.EVENT_MARKED_ADULT=25]="EVENT_MARKED_ADULT",e[e.EVENT_MARKED_NO_ADULT=26]="EVENT_MARKED_NO_ADULT",e[e.EVENT_FBA_FULFILLMENT_CHANGED=27]="EVENT_FBA_FULFILLMENT_CHANGED",e[e.EVENT_REORDER_STATUS_CHANGED=28]="EVENT_REORDER_STATUS_CHANGED",e[e.EVENT_TRANSFER_STATUS_CHANGED=29]="EVENT_TRANSFER_STATUS_CHANGED",e[e.EVENT_DESCRIPTION_CHANGED=30]="EVENT_DESCRIPTION_CHANGED",e[e.EVENT_BULLET_POINTS_CHANGED=31]="EVENT_BULLET_POINTS_CHANGED",e[e.EVENT_BRAND_CHANGED=32]="EVENT_BRAND_CHANGED"})(a||(a={}));const ie={[a.EVENT_TITLE_CHANGED]:!0,[a.EVENT_CATEGORY_CHANGED]:!0,[a.EVENT_SUBCATEGORY_CHANGED]:!0,[a.EVENT_MAIN_IMAGE_CHANGED]:!0,[a.EVENT_SELLERS_COUNT_CHANGED]:!0,[a.EVENT_BUYBOX_CHANGED]:!0,[a.EVENT_PRICE_CHANGED]:!0,[a.EVENT_WIDTH_CHANGED]:!0,[a.EVENT_HEIGHT_CHANGED]:!0,[a.EVENT_LENGTH_CHANGED]:!0,[a.EVENT_WEIGHT_CHANGED]:!0,[a.EVENT_BSR_CHANGED]:!0,[a.EVENT_SCREENSHOTS_CREATED]:!0,[a.EVENT_BUYBOX_LOST]:!0,[a.EVENT_BUYBOX_WON]:!0,[a.EVENT_DIMENSIONS_CHANGED]:!0,[a.EVENT_5_STAR_REVIEW_CHANGED]:!0,[a.EVENT_4_STAR_REVIEW_CHANGED]:!0,[a.EVENT_3_STAR_REVIEW_CHANGED]:!0,[a.EVENT_2_STAR_REVIEW_CHANGED]:!0,[a.EVENT_1_STAR_REVIEW_CHANGED]:!0,[a.EVENT_1_2_3_STAR_REVIEW_CHANGED]:!0,[a.EVENT_DEFECT_CHANGED]:!0,[a.EVENT_NO_DEFECT_CHANGED]:!0,[a.EVENT_MARKED_ADULT]:!0,[a.EVENT_MARKED_NO_ADULT]:!0,[a.EVENT_FBA_FULFILLMENT_CHANGED]:!0,[a.EVENT_REORDER_STATUS_CHANGED]:!0,[a.EVENT_TRANSFER_STATUS_CHANGED]:!0,[a.EVENT_DESCRIPTION_CHANGED]:!0,[a.EVENT_BULLET_POINTS_CHANGED]:!0,[a.EVENT_BRAND_CHANGED]:!0},z=([e,t])=>{const n={start:{hours:0,minutes:0,seconds:0},end:{hours:23,minutes:59,seconds:59}},o="yyyy-MM-dd HH:mm:ss",r=(c,l)=>xe(at(c,n[l]),o);return{dateFrom:r(e,"start"),dateTo:r(t,"end")}},St=async e=>v({url:A(`${Z}/api/v1/alerts/events`,{}),method:"GET",params:e,withCredentials:!0}),ft=e=>JSON.stringify(e,(t,n)=>n===!0?void 0:n),At=e=>{const t=Ct(e);return J(t)},J=e=>({showAlerts:e.showAlerts??!0,showNotes:e.showNotes??!0,showInsights:e.showInsights??!0,alertFilters:{...ie,...e.alertFilters}}),p=Q(()=>({notes:{},alertsAggregated:{},urgentInsights:{},customerEvents:{},notesTypes:null,toolId:"NOT_SET",reactions:{},properties:{marketplace:"",seller:""},note:null})),Dt="CUSTOMER_EVENTS_COMPONENT_SETTINGS",de=e=>{const t=p.getState().toolId;return`${Dt}_${t}_${e}`},[j,vt,C]=Tt(()=>({name:"",settings:{showAlerts:!0,alertFilters:ie,showNotes:!0,showInsights:!0},events:[],alerts:[],eventsModal:null,noteModal:null,expandableImageModal:null,eventsSettingsModal:null}),e=>{const t=b(e,"name"),n=b(e,"settings",{sideEffect:()=>{var S;const N=e.getState().name,_=e.getState().settings;localStorage.setItem(de(N),ft(_)),(S=p.getState().eventsSettings)==null||S.onSave(N,_)}}),o=b(e,"events"),r=G(e,"alerts",async({period:N,asin:_})=>{const S=p.getState().properties,g=z(N);return St({...S,...g,asin:_,limit:100}).then(({results:f})=>f.data??[])}),c=G(e,"settings",async N=>{var f;const _=e.getState().name,S=(f=p.getState().eventsSettings)==null?void 0:f.onInit,g=e.getState().settings;if(S){const I=await S(_);return{...g,...J(I)}}else{const I=localStorage.getItem(de(_));if(I)return At(I)}return g}),l=M(e,"eventsModal"),d=M(e,"expandableImageModal"),E=M(e,"eventsSettingsModal"),u=M(e,"noteModal",{clearOnClose:!0,reaction:N=>{var _,S;N.payload&&N.type==="OPEN"&&((S=(_=p.getState().reactions).onNoteModalOpened)==null||S.call(_,e.getState().name,N.payload))}});return{nameController:t,settingsController:n,useSettingsRequest:c,eventsController:o,useAlertsRequest:r,eventsModalController:l,expandableImageModalController:d,eventsSettingsModalController:E,noteModalController:u,initSettings:N=>{N?e.setState({settings:{...e.getState().settings,...J(N)}}):c.action()}}}),jt=({className:e})=>{const{t}=h(),n=C(c=>c.noteModalController.open),o=j(c=>c.settings.showNotes),r=()=>n(null);return o?s.jsx(D,{onClick:r,className:e,buttonType:"tertiary",type:"button",icon:s.jsx(R,{icon:Le}),children:t("customerEvents.actions.addNote")}):s.jsx(s.Fragment,{})},It=({className:e})=>{const t=C(o=>o.eventsSettingsModalController.open),n=()=>t(null);return s.jsx(D,{className:e,buttonType:"icon",icon:s.jsx(R,{icon:Fe}),onClick:n})},Vt=({className:e})=>{const{t}=h(),n=j(l=>l.settings),o=C(l=>l.settingsController.set),r=n.showNotes||n.showAlerts||n.showInsights,c=m.useCallback(()=>{o({...n,showAlerts:!r,showInsights:!r,showNotes:!r})},[r,o,n]);return s.jsx(P,{checked:r,onChange:c,className:e,children:t("customerEvents.actions.toggleEvents")})},bt=U(e=>e.properties,e=>({...e,marketplaceData:Be("store",e.marketplace)})),ve=()=>p(bt),Gt=({value:e})=>{const t=e.match(/[^\r\n]+/g)||[];return s.jsx(Rt,{children:t.map((n,o)=>s.jsx(wt,{children:n},o))})},Rt=i.ul``,wt=i.li`
  white-space: normal;
`,yt=({data:e,marketplace:t})=>e.sellerId==="N/A"?s.jsx(s.Fragment,{children:"N/A"}):s.jsxs(Ht,{children:[s.jsx(Mt,{children:Pe[t.domain]}),e.sellerName]}),Ht=i.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,Mt=i.div`
  width: 27px;
  display: flex;

  img {
    font-size: 27px;
  }
`,Ot=({data:e})=>s.jsx($t,{children:e.map(t=>s.jsx("li",{children:t.title},t.id))}),$t=i.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`,je=({data:e})=>{const{t}=h(),n=isNaN(Number(e.value))?0:Number(e.value),o=e.units;return s.jsx(s.Fragment,{children:t(`units.${o}`,{count:n,value:fe({value:n})})})},kt=({data:e})=>{const{t}=h();return s.jsx(Lt,{children:e.map(n=>s.jsxs("li",{children:[t(`dimensions.${n.params}`),": ",s.jsx(je,{data:n})]},n.params))})},Lt=i.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`,Ft=e=>e.stopPropagation(),Bt=({imageSrc:e,hasTooltip:t=!1,onImageClick:n=Ft,tooltipContent:o,size:r="100"})=>{const c=l=>{l.stopPropagation(),n(l)};return s.jsx(he,{colorType:"light",content:o??s.jsx(Ut,{children:s.jsx(zt,{src:e})}),disabled:!t||!o&&!e,small:!0,children:s.jsx(qt,{$size:r,target:"_blank",onClick:c,children:s.jsxs(V,{$emptyBadge:!0,children:[s.jsx(Ie,{icon:We}),e?s.jsx(Wt,{src:e}):s.jsx(Pt,{})]})})})},Ie=i(R)`
  font-size: 16px;
  color: ${e=>e.theme.systemColors.blue600};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 1;
`,Pt=i(R).attrs({icon:Ue})`
  font-size: 20px;
  color: ${e=>e.theme.systemColors.grey200};
`,V=i.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  border: 1px solid ${e=>e.theme.systemColors.grey200};
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #fff;

  ${e=>e.$emptyBadge&&y`
      border-radius: 4px;
      border-bottom: 1px solid ${t=>t.theme.systemColors.grey200};
    `}
  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.systemColors.white};
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
  }
`,Wt=i.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  user-select: none;
`,Ut=i.div`
  width: 182px;
  height: 182px;
  display: flex;
  align-items: center;
  justify-content: center;
`,zt=i.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`,Yt={50:y`
    ${V} {
      width: 42px;
      height: 42px;
    }
  `,100:y`
    ${V} {
      width: 40px;
      height: 40px;
    }
  `,150:y`
    ${V} {
      width: 44px;
      height: 44px;
    }
  `,200:y`
    ${V} {
      padding: 2px;
      width: 60px;
      height: 64px;
    }
  `,400:y`
    ${V} {
      padding: 2px;
      width: 76px;
      height: 80px;
    }
  `},qt=i.a`
  position: relative;
  display: inline-block;

  ${e=>Yt[e.$size]};

  &:focus {
    outline: none;
  }

  &:before {
    box-sizing: border-box;
    position: absolute;
    display: none;
    content: "";
    top: -4px;
    left: -4px;
    right: 0;
    bottom: 0;
    height: calc(8px + 100%);
    width: calc(8px + 100%);
    border-radius: 8px;
    border: 2px solid ${e=>e.theme.systemColors.blue600};
  }

  cursor: pointer;

  &:hover {
    ${Ie} {
      opacity: 1;
    }

    ${V}:before {
      opacity: 0.8;
    }
  }

  &:active {
    ${V}:before {
      opacity: 1;
    }
  }

  &:focus-visible {
    &:before {
      display: block;
    }
  }
`,Xt=({imageSrc:e})=>{const t=C(r=>r.expandableImageModalController.open),n=m.useMemo(()=>e&&e.replace(/._SY120_/g,""),[e]),o=m.useCallback(()=>{t({imageSrc:n})},[n,t]);return e?s.jsx(Bt,{imageSrc:e,hasTooltip:!1,size:"200",onImageClick:o}):s.jsx(s.Fragment,{children:"N/A"})},Kt=({value:e})=>{const{t}=h(),n=`customerEvents.orderAndTransferStatuses.${e}`;return s.jsx(s.Fragment,{children:n!==t(n)?t(n):e})},Ee=({eventType:e,value:t,marketplace:n})=>{if(t==null||t==="N/A")return s.jsx(s.Fragment,{children:t});switch(e){case a.EVENT_1_2_3_STAR_REVIEW_CHANGED:case a.EVENT_BRAND_CHANGED:case a.EVENT_TITLE_CHANGED:case a.EVENT_DESCRIPTION_CHANGED:case a.EVENT_DEFECT_CHANGED:case a.EVENT_NO_DEFECT_CHANGED:return s.jsx(Jt,{children:t.toString()});case a.EVENT_TRANSFER_STATUS_CHANGED:case a.EVENT_REORDER_STATUS_CHANGED:return s.jsx(Kt,{value:t});case a.EVENT_BULLET_POINTS_CHANGED:return s.jsx(Gt,{value:t});case a.EVENT_BSR_CHANGED:case a.EVENT_1_STAR_REVIEW_CHANGED:case a.EVENT_2_STAR_REVIEW_CHANGED:case a.EVENT_3_STAR_REVIEW_CHANGED:case a.EVENT_4_STAR_REVIEW_CHANGED:case a.EVENT_5_STAR_REVIEW_CHANGED:case a.EVENT_SELLERS_COUNT_CHANGED:return s.jsx(s.Fragment,{children:fe({value:Number(t)})});case a.EVENT_FBA_FULFILLMENT_CHANGED:case a.EVENT_PRICE_CHANGED:{const{price:o,currency:r}=t;return s.jsx(s.Fragment,{children:ze({amount:o,currency:r})})}case a.EVENT_LENGTH_CHANGED:case a.EVENT_WIDTH_CHANGED:case a.EVENT_HEIGHT_CHANGED:case a.EVENT_WEIGHT_CHANGED:return s.jsx(je,{data:t});case a.EVENT_DIMENSIONS_CHANGED:return s.jsx(kt,{data:t});case a.EVENT_CATEGORY_CHANGED:case a.EVENT_SUBCATEGORY_CHANGED:return s.jsx(Ot,{data:t});case a.EVENT_BUYBOX_CHANGED:case a.EVENT_BUYBOX_WON:case a.EVENT_BUYBOX_LOST:return s.jsx(yt,{data:t,marketplace:n});case a.EVENT_MAIN_IMAGE_CHANGED:case a.EVENT_SCREENSHOTS_CREATED:return s.jsx(Xt,{imageSrc:t});default:return s.jsx(s.Fragment,{children:JSON.stringify(t)})}},Jt=i.span`
  white-space: normal;
`,Zt=({alert:e})=>{const{t}=h(),{seller:n,marketplaceData:o}=ve(),r=lt({data:{asin:e.asin||"",sku:e.sellerSku||""}});return s.jsxs(Qt,{children:[s.jsx(Ye,{market:o.platform,size:"100",imageSize:"50",titleLineClamp:1,product:{title:e.title,asin:e.asin,imageSrc:e.imageUrl,href:W(o.store,e.asin)},renderBlocks:r}),s.jsxs(Ve,{children:[s.jsxs("b",{children:[t("customerEvents.eventsModal.alertItem.oldValue"),":"]}),s.jsx(Ee,{eventType:e.eventType,marketplace:o,value:e.oldValue})]}),s.jsxs(es,{children:[s.jsxs("b",{children:[t("customerEvents.eventsModal.alertItem.newValue"),":"]}),s.jsx(Ee,{eventType:e.eventType,marketplace:o,value:e.newValue})]}),s.jsx(ts,{href:A(`${Z}/alerts`,{filterAsin:e.asin,filterSku:e.sellerSku,filterMarketplace:o.store,sellerName:n}),target:"_blank",rel:"noreferrer",children:s.jsx(D,{type:"button",buttonType:"text",children:t("customerEvents.eventsModal.alertItem.viewInAlerts")})})]})},Qt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp16};
`,Ve=i.div`
  display: flex;
  align-items: flex-start;
  ${ee};

  & > b {
    margin-right: ${({theme:e})=>e.spacing.sp4};
  }
`,es=i(Ve)`
  color: ${({theme:e})=>e.systemColors.black};
`,ts=i.a`
  text-decoration: none;
`,ss=({eventType:e})=>{const{t}=h();return s.jsx(s.Fragment,{children:e?t(`customerEvents.alertEventType.${a[e]}`):"-"})},ns=({alert:e})=>s.jsxs(os,{children:[s.jsx(K,{category:"orange",children:s.jsx(ss,{eventType:e.eventType})}),s.jsx(rs,{children:oe(new Date(e.eventDate.slice(0,10)+" 00:00:00"),"standard")})]}),os=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.sp24};
`,rs=i.div`
  ${_e};
`,be=({open:e,onChange:t,renderTitle:n,renderContent:o})=>{const[r,c]=m.useState(!!e),l=m.useCallback(()=>{t?t():c(d=>!d)},[t]);return m.useEffect(()=>{c(!!e)},[e]),s.jsxs(as,{onClick:l,children:[s.jsxs(ds,{$status:r,children:[s.jsx(is,{children:n(r)}),s.jsx(ls,{children:s.jsx(cs,{$status:r,icon:qe})})]}),s.jsx(Es,{$status:r,children:s.jsx(ct,{isOpen:r,children:s.jsx(us,{children:o(r)})})})]})},as=i.div`
  cursor: pointer;
`,is=i.div`
  ${L};

  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({theme:e})=>e.systemColors.black};
  max-width: calc(100% - 24px);
`,ls=i.div`
  flex: 0 0 auto;
`,cs=i(R)`
  color: ${({theme:e})=>e.systemColors.grey600};
  font-size: 16px;
  transform: rotate(${({$status:e})=>e?"180deg":"0deg"});
  transition: 0.2s transform ease-in-out;
`,ds=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
  font-weight: ${({$status:e})=>e?"700":"500"};
`,Es=i.div`
  ${L};

  position: relative;
  transition: 0.2s all ease-in-out;
`,us=i.div``,ue=e=>s.jsx(ps,{children:s.jsx(be,{...e})}),ps=i(te)`
  padding: ${({theme:e})=>e.spacing.sp16};
`,pe=["violet","cyan","teal","pink","magenta","purple","celery","dataBlue","orange"],Ge=e=>pe[e%pe.length],Re=({children:e,tooltip:t,zIndex:n=1e3,...o})=>t?s.jsx(he,{content:t,placement:"top",appendTo:document.body,maxWidth:500,delay:0,zIndex:n,...o,children:e}):s.jsx(s.Fragment,{children:e}),we=({noteType:e})=>{const{isOverflown:t,checkOverflown:n}=Ce();return s.jsx(gs,{category:Ge(e.id),children:s.jsx(Re,{tooltip:t?void 0:e.name,zIndex:Number.MAX_SAFE_INTEGER,children:s.jsx(ms,{onMouseEnter:n,children:e.name})})})},gs=i(K)`
  margin: 0 !important;

  ${K.CategoricalTitle} {
    max-width: 100%;
  }
`,ms=i.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin: -${({theme:e})=>e.spacing.sp8};
  padding: ${({theme:e})=>e.spacing.sp8};
`,Ns=({note:e})=>{const{t}=h(),n=C(r=>r.noteModalController.open),o=r=>{r.stopPropagation(),n(e)};return s.jsxs(hs,{children:[s.jsxs(_s,{children:[e.types.map(r=>s.jsx(we,{noteType:r},r.id)),e.asins.map(({asin:r,imageUrl:c,marketplace:l})=>s.jsx(Ts,{asin:r,imageSrc:c,href:W(l,r),active:!0},r))]}),s.jsx(Cs,{children:e.description}),s.jsx(xs,{type:"button",buttonType:"text",onClick:o,children:t("customerEvents.eventsModal.noteItem.editNote")})]})},hs=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp16};
`,_s=i.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Cs=i.div`
  ${ee};

  color: ${({theme:e})=>e.systemColors.black};
`,Ts=i(dt)`
  flex-shrink: 0;
`,xs=i(D)`
  align-self: flex-start;
`,Ss=({note:e})=>{const{isOverflown:t,checkOverflown:n}=Ce();return s.jsxs(fs,{children:[s.jsxs(As,{children:[s.jsx(Ds,{children:s.jsx(vs,{})}),s.jsx(Re,{tooltip:t?void 0:e.description,zIndex:Number.MAX_SAFE_INTEGER,children:s.jsx(js,{onMouseEnter:n,children:e.description})})]}),s.jsx(Is,{children:oe(new Date(e.eventDate),"standard")})]})},fs=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.sp24};
  flex: 1;
`,As=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
  min-width: 0;
`,Ds=i.div`
  flex: 0 0 auto;
`,vs=i(R).attrs({icon:Xe})`
  font-size: 14px;
  color: ${({theme:e})=>e.systemColors.grey600};
`,js=i.div`
  ${Te};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 300px;
  flex: 1;
`,Is=i.div`
  ${_e};

  white-space: nowrap;
  flex: 0 0 auto;
`,Vs=()=>{const{t:e}=h(),[t,n,o]=j(g=>[g.eventsModal,g.events,g.alerts]),[r,c,l]=C(g=>{const[f]=g.noteModalController(),[I]=g.eventsModalController(),[$e]=g.expandableImageModalController();return[f,I,$e]}),[d,E]=C(g=>{const f=g.useAlertsRequest,I=g.eventsModalController.close;return[f,I]}),[u,x,N]=m.useMemo(()=>[n.find(g=>g.timestamp===(t==null?void 0:t.timestamp)),t!=null&&t.timestamp?new Date(t.timestamp):new Date,(t==null?void 0:t.meta.groupBy)==="month"?"completeShort":"completeStandard"],[n,t]),_=oe(x,N),S=r||l?X:E;return m.useEffect(()=>{if(!c||(u==null?void 0:u.alertsAggregated.length)===0)return;const g=(t==null?void 0:t.meta.groupBy)==="month"?[Se(x),Et(x)]:[re(x),Ae(x)];return d.clear(),d.action({period:g,asin:t==null?void 0:t.asin}),()=>{d.abort()}},[t,u,x,c,d]),s.jsx(H,{isOpen:c,onClose:S,onClickOutside:X,size:"100",title:e("customerEvents.eventsModal.title",{date:_}),footer:s.jsx(Gs,{children:s.jsx(D,{onClick:S,size:"200",children:e("common.close")})}),lockBody:!0,children:s.jsxs(Rs,{children:[t&&t.renderInsightsEvents&&(u!=null&&u.insights)?t.renderInsightsEvents(u==null?void 0:u.insights,!(u!=null&&u.notes.length)&&!(u!=null&&u.alertsAggregated.length)):null,u==null?void 0:u.notes.map((g,f)=>s.jsx(ue,{renderTitle:()=>s.jsx(Ss,{note:g}),renderContent:()=>s.jsx(Ns,{note:g})},`note:${f}`)),o.map((g,f)=>s.jsx(ue,{renderTitle:()=>s.jsx(ns,{alert:g}),renderContent:()=>s.jsx(Zt,{alert:g})},`alert:${f}`)),d().status==="loading"?s.jsx(bs,{}):s.jsx(s.Fragment,{})]})})},bs=()=>s.jsx(Ke,{builder:[{size:"large"},{size:"large"},{size:"large"}]}),Gs=i.div`
  display: flex;
  justify-content: flex-end;
`,Rs=i.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${({theme:e})=>e.spacing.sp8};
  padding-bottom: ${({theme:e})=>e.spacing.sp8};
`,T=Q(e=>({activeAlertsItem:"none",showNotes:!0,showAlerts:!0,isInitialized:!1,showInsights:!0,alertFilters:ie,toggleAlertFilter:t=>e(ce(({alertFilters:n})=>{n[t]=!n[t]})),setAlertFilters:(t,n)=>e(ce(({alertFilters:o})=>{t.forEach(r=>{o[r]=n})})),initializeSettings:t=>{ye.set(t.showNotes),He.set(t.showAlerts),Me.set(t.showInsights),e({alertFilters:{...t.alertFilters}}),ys.set(!0)}})),ws=b(T,"activeAlertsItem"),ye=b(T,"showNotes"),He=b(T,"showAlerts"),Me=b(T,"showInsights"),ys=b(T,"isInitialized"),Hs=pt(T),Ms=e=>({showNotes:e.showNotes,showAlerts:e.showAlerts,showInsights:e.showInsights,alertFilters:e.alertFilters}),Y=({itemType:e,title:t,options:n})=>{const o=T(r=>r.activeAlertsItem);return s.jsx(te,{padding:"small",children:s.jsx(be,{open:o===e,onChange:()=>ws.set(o!==e?e:"none"),renderTitle:()=>s.jsx(Os,{title:t,alertEventTypes:n.map(r=>r.value)}),renderContent:()=>s.jsx($s,{options:n})})})},Os=({title:e,alertEventTypes:t})=>{const[n,o,r]=T(d=>[d.showAlerts,d.alertFilters,d.setAlertFilters],se),c=t.some(d=>o[d]),l=t.every(d=>o[d]);return s.jsx(ks,{children:s.jsx(Ls,{children:s.jsx(k,{checked:c,indeterminate:!l,onChange:()=>r(t,!c),disabled:!n,children:e})})})},$s=({options:e})=>{const[t,n,o]=T(r=>[r.showAlerts,r.alertFilters,r.toggleAlertFilter],se);return s.jsxs(Fs,{children:[s.jsx(Bs,{}),s.jsx(Ps,{children:e.map((r,c)=>s.jsx(k,{checked:n[r.value],onChange:()=>o(r.value),disabled:!t,children:r.label},c))})]})},ks=i.div`
  display: flex;
`,Ls=i(k.Container)`
  ${k.Text} {
    font-weight: 700;
  }
`,Fs=i.div`
  display: flex;
  flex-direction: column;
`,Bs=i.div`
  border-top: 1px solid;
  border-color: ${({theme:e})=>e.systemColors.grey200};
  margin: ${({theme:e})=>e.spacing.sp16} 0;
`,Ps=i.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing.sp8};
  grid-template-columns: 1fr 1fr;
`,Ws=()=>{const{t:e}=h();return s.jsx(Y,{itemType:"buyBox",title:e("customerEvents.eventsSettingsModal.buyBox.label"),options:[{label:e("customerEvents.eventsSettingsModal.buyBox.buyBoxLost"),value:a.EVENT_BUYBOX_LOST},{label:e("customerEvents.eventsSettingsModal.buyBox.buyBoxWon"),value:a.EVENT_BUYBOX_WON}]})},Us=()=>{const{t:e}=h();return s.jsx(Y,{itemType:"listingChanges",title:e("customerEvents.eventsSettingsModal.listingChanges.label"),options:[{label:e("customerEvents.eventsSettingsModal.listingChanges.listingSuppressed"),value:a.EVENT_DEFECT_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.category"),value:a.EVENT_CATEGORY_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.mainImage"),value:a.EVENT_MAIN_IMAGE_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.description"),value:a.EVENT_DESCRIPTION_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.price"),value:a.EVENT_PRICE_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.bulletPoints"),value:a.EVENT_BULLET_POINTS_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.dimensions"),value:a.EVENT_DIMENSIONS_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.brand"),value:a.EVENT_BRAND_CHANGED},{label:e("customerEvents.eventsSettingsModal.listingChanges.title"),value:a.EVENT_TITLE_CHANGED}]})},zs=()=>{const{t:e}=h();return s.jsx(Y,{itemType:"newReviews",title:e("customerEvents.eventsSettingsModal.newReviews.label"),options:[{label:e("customerEvents.eventsSettingsModal.newReviews.fiveStarReview"),value:a.EVENT_5_STAR_REVIEW_CHANGED},{label:e("customerEvents.eventsSettingsModal.newReviews.fourStarReview"),value:a.EVENT_4_STAR_REVIEW_CHANGED},{label:e("customerEvents.eventsSettingsModal.newReviews.oneToThreeStarReview"),value:a.EVENT_1_2_3_STAR_REVIEW_CHANGED}]})},Ys=()=>{const{t:e}=h();return s.jsx(Y,{itemType:"other",title:e("customerEvents.eventsSettingsModal.other.label"),options:[{label:e("customerEvents.eventsSettingsModal.other.numberOfSellersChanged"),value:a.EVENT_SELLERS_COUNT_CHANGED},{label:e("customerEvents.eventsSettingsModal.other.reorderStatusChanged"),value:a.EVENT_REORDER_STATUS_CHANGED},{label:e("customerEvents.eventsSettingsModal.other.transferStatusChanged"),value:a.EVENT_TRANSFER_STATUS_CHANGED}]})},qs=()=>{const{t:e}=h(),t=T(n=>n.showAlerts);return s.jsxs(Ks,{children:[s.jsx(Xs,{children:s.jsx(P,{checked:t,onChange:n=>He.set(n.target.checked),children:s.jsxs(Js,{children:[e("customerEvents.eventsSettingsModal.showAlertsOnGraph"),s.jsx(ae,{pointType:"alert"})]})})}),s.jsxs(Zs,{children:[s.jsx(Ws,{}),s.jsx(Us,{}),s.jsx(zs,{}),s.jsx(Ys,{})]})]})},Xs=i.div`
  display: flex;
`,Ks=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp16};
`,Js=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Zs=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp12};
`,Qs=()=>{const{t:e}=h(),t=T(n=>n.showInsights);return s.jsx(tn,{children:s.jsx(en,{children:s.jsx(P,{checked:t,onChange:n=>Me.set(n.target.checked),children:s.jsxs(sn,{children:[e("customerEvents.eventsSettingsModal.showInsightsOnGraph"),s.jsx(ae,{pointType:"insight"})]})})})})},en=i.div`
  display: flex;
`,tn=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp16};
`,sn=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,nn=U(e=>{var t;return((t=e.notesTypes)==null?void 0:t.results)||[]},e=>e.map(t=>({...t,label:t.name,value:t.id,searchString:t.name}))),on=U(e=>{var t;return((t=e.notesTypes)==null?void 0:t.results)||[]},e=>e.slice(0,8)),rn=()=>{const{t:e}=h(),t=p(on),n=T(o=>o.showNotes);return s.jsxs(ln,{children:[s.jsx(an,{children:s.jsx(P,{checked:n,onChange:o=>ye.set(o.target.checked),children:s.jsxs(cn,{children:[e("customerEvents.eventsSettingsModal.showNotesOnGraph"),s.jsx(ae,{pointType:"note"})]})})}),s.jsxs(te,{children:[s.jsx(dn,{children:e("customerEvents.eventsSettingsModal.noteTypes")}),s.jsx(En,{children:t.map(o=>s.jsx(we,{noteType:o},o.id))})]})]})},an=i.div`
  display: flex;
`,ln=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp16};
`,cn=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,dn=i.div`
  ${Te};

  margin-top: -${({theme:e})=>e.spacing.sp8};
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,En=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sp8};
`,un=()=>{const{t:e}=h(),t=p(E=>E.properties.skipInsights),n=T(E=>E.isInitialized),o=j(E=>E.settings),[r]=C(E=>E.eventsSettingsModalController()),c=C(E=>E.eventsSettingsModalController.close),l=C(E=>E.settingsController.set);m.useEffect(()=>{r&&T.getState().initializeSettings(o)},[r,o]);const d=m.useCallback(()=>{const E=Ms(T.getState());l(E),c()},[l,c]);return s.jsx(H,{size:"50",isOpen:r&&n,onClose:c,title:e("customerEvents.eventsSettingsModal.title"),footer:s.jsxs(Nn,{children:[s.jsx(D,{size:"200",buttonType:"cancel",onClick:c,children:e("common.cancel")}),s.jsx(D,{size:"200",buttonType:"primary",onClick:d,children:e("customerEvents.eventsSettingsModal.buttons.saveChanges")})]}),lockBody:!0,children:s.jsx(Hs,{children:s.jsxs(pn,{children:[s.jsx(gn,{children:e("customerEvents.eventsSettingsModal.description")}),s.jsxs(mn,{children:[!t&&s.jsx(Qs,{}),s.jsx(rn,{}),s.jsx(qs,{})]})]})})})},pn=i.div``,gn=i.div`
  ${L};

  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,mn=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp32};
`,Nn=i.div`
  display: flex;
  justify-content: space-between;
`,hn=()=>{const e=j(({expandableImageModal:o})=>o==null?void 0:o.imageSrc),[t]=C(o=>o.expandableImageModalController()),n=C(o=>o.expandableImageModalController.close);return s.jsx(Cn,{children:s.jsx(H,{isOpen:t,onClose:n,children:s.jsx(_n,{src:e??""})})})},_n=i.img`
  height: 100%;
  width: 100%;
  max-height: calc(100% - 6px);
  object-fit: contain;
`,Cn=i.div`
  ${H.Content} {
    border-bottom: none;
  }
`,Tn=(e,t,n)=>v({method:"POST",url:A(e,{}),params:t,useSessionAccountId:!0,signal:n}),xn=(e,t)=>v({method:"DELETE",url:A(e,{}),useSessionAccountId:!0,signal:t}),Sn=(e,t,n)=>v({method:"PUT",url:A(e,{}),params:t,useSessionAccountId:!0,signal:n}),w=e=>{const t=p.getState().toolId;if(t==="NOT_SET")throw new Error("ToolId is not set");return Je(gt[t],"urls."+e)},fn=async(e,t)=>{const{data:n}=await v({method:"POST",url:A(e,{}),params:t,useSessionAccountId:!0});return n},An=async e=>v({url:A(`${Z}/api/v1/alerts/events-aggregated`,{}),method:"GET",params:e,withCredentials:!0}),Dn=async(e,t)=>v({method:"GET",url:A(e,{...t}),useSessionAccountId:!0}),vn=async e=>({results:(await v({method:"GET",url:A(e,{}),useSessionAccountId:!0})).results.sort((n,o)=>o.id-n.id)}),jn=async e=>v({url:A(`${mt}/api/v1/insights/only-urgent`,e,{arrayFormat:"bracket"}),method:"GET",useSessionAccountId:!0}),q=De(p,"notes",{getKey:e=>String(e.id)}),In=Ze(p,"alertsAggregated"),Vn=De(p,"urgentInsights",{getKey:e=>String(e.id)}),ge=Qe(p,"customerEvents",async({params:{period:e,asin:t}})=>{const n=w("notesList"),o=wn(e),r=yn(e),c=Hn(e),l=p.getState().properties.skipInsights,[d,E,u]=await Promise.allSettled([Dn(n,c),l?Promise.reject():jn({...r,asin:t}),An({...o,asin:t})]);return{alerts:u.status==="fulfilled"?u.value.results:{},notes:d.status==="fulfilled"?d.value.results:[],insights:E.status==="fulfilled"?E.value.results:[]}},{initialStatus:"init",fulfilled:({result:{alerts:e,notes:t,insights:n}})=>{In.set(e),q.add(t),Vn.add(n)}}),bn=G(p,"notesTypes",async e=>{const t=w("noteTypeList");return vn(t)}),Gn=G(p,"notesTypes",async({fakeId:e,...t})=>{var c;const n=w("noteTypeList"),o=((c=p.getState().notesTypes)==null?void 0:c.results)||[],r=[...o,{id:e,name:t.name}];p.setState({notesTypes:{results:r}});try{const l=await fn(n,t);p.setState({notesTypes:{results:r.map(d=>d.id===e?l:d)}})}catch(l){throw p.setState({notesTypes:{results:o}}),l}}),Rn=new Set(["loading","loaded"]),Io=(e,t,n)=>{var l;const o=On(e),r=((l=ge.requests[o])==null?void 0:l.get().status)||"init";Rn.has(r)||ge.action([{key:o,params:{period:e,name:t,asin:n}}])},wn=e=>({...p.getState().properties,...z(e)}),yn=e=>{const t=p.getState().properties,n=z(e);return{...t,"dateRange[from]":n.dateFrom,"dateRange[to]":n.dateTo}},Hn=e=>{const{dateFrom:t,dateTo:n}=z(e);return{"dateRange[from]":t,"dateRange[to]":n}},Mn=([e,t])=>{const n=new Date().getTimezoneOffset()*60*1e3,o=re(e).valueOf()-n,r=Ae(t).valueOf()-n;return[o,r]},On=e=>{const[t,n]=Mn(e);return`${t}::${n}`},Vo=e=>{const[t,n]=e.split("::").map(Number);return{from:t,to:n}},$n=G(p,"note",async({params:e},t)=>{const n=w("createNote");return Tn(n,e,t==null?void 0:t.signal)},{fulfilled:({result:{data:e},payload:{componentName:t}})=>{var n,o;q.add(e),(o=(n=p.getState().reactions)==null?void 0:n.onCreateNote)==null||o.call(n,t,e)}}),kn=G(p,"note",async({noteId:e,params:t},n)=>{const o=w("getUpdateNote")(e);return Sn(o,t,n==null?void 0:n.signal)},{fulfilled:({result:{data:e},payload:{componentName:t}})=>{var n,o;q.add(e),(o=(n=p.getState().reactions)==null?void 0:n.onUpdateNote)==null||o.call(n,t,e)}}),Ln=G(p,"note",async({noteId:e},t)=>{const n=w("getDeleteNote")(e);return xn(n,t==null?void 0:t.signal)},{fulfilled:({payload:{noteId:e,componentName:t}})=>{var o,r;const n=p.getState().notes[e];q.remove(String(e)),n&&((r=(o=p.getState().reactions)==null?void 0:o.onDeleteNote)==null||r.call(o,t,n))}}),bo=(e,t="UTC")=>{const n=e-(Fn[t]-O()),o=_t(n).getTime()-O(),r=re(n).getTime()-O(),c=Se(n).getTime()-O();return{hour:o,day:r,month:c}},O=()=>new Date().getTimezoneOffset()*6e4,Oe=(e=new Date)=>{const t=new Date(e.toLocaleString("en-US",{timeZone:"America/Los_Angeles"})).getTime();return(new Date(e.toLocaleString("en-US",{timeZone:"GMT"})).getTime()-t)/6e4},Fn={LA:Oe()*6e4,UTC:0},Bn=e=>new Date(new Date(e).getTime()+Oe()*6e4),Pn=()=>{const{t:e}=h(),{control:t,formState:n}=F();return s.jsxs(Wn,{children:[s.jsx(B,{label:e("customerEvents.noteModal.formFields.date.title"),required:!0}),s.jsx(ne,{name:"date",control:t,rules:{required:!0},render:o=>{var r,c;return s.jsx(it,{appendTo:document.body,showCalendar:!0,mode:"date",value:o.field.value?[o.field.value]:void 0,onChange:l=>o.field.onChange(l[0]),placeholder:e("customerEvents.noteModal.formFields.date.placeholder"),timezone:"America/Los_Angeles",error:(r=n.errors.date)!=null&&r.type?e(`customerEvents.noteModal.formErrors.${(c=n.errors.date)==null?void 0:c.type}`):void 0})}})]})},Wn=i.div``,$=500,Un=()=>{var c,l;const{t:e}=h(),{register:t,getValues:n,formState:o,watch:r}=F();return r("description"),s.jsxs(zn,{children:[s.jsxs(Yn,{children:[s.jsx(B,{label:e("customerEvents.noteModal.formFields.description.title"),required:!0}),s.jsx(qn,{children:`${n("description").length}/${$}`})]}),s.jsx(ut,{...t("description",{required:!0,maxLength:$}),minRows:3,maxLength:$,error:(c=o.errors.description)!=null&&c.type?e(`customerEvents.noteModal.formErrors.${(l=o.errors.description)==null?void 0:l.type}`,{maxLength:$}):void 0,placeholder:e("customerEvents.noteModal.formFields.description.placeholder")})]})},zn=i.div``,Yn=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,qn=i.div`
  ${ee};

  color: ${({theme:e})=>e.systemColors.grey600};
`,Xn=async(e,t)=>v({method:"GET",url:A(e,t),useSessionAccountId:!0}),me=Q((e,t)=>({...et(e,t,"productList",n=>{const o=w("productList");return Xn(o,n)})})),Kn=U(e=>{var t;return((t=e.productList.atom.content)==null?void 0:t.results)||[]},e=>{var t;return((t=e.productList.atom.payload)==null?void 0:t.marketplace)||""},(e,t)=>e.map(n=>({...n,label:n.asin,value:n.asin,imageSrc:n.imageUrl,title:n.title,href:W(t,n.asin)}))),Jn=e=>{const t=JSON.stringify(e),n=me(Kn),[o,r]=me(l=>[l.productList.atom.status==="loading",l.productList.action],se);m.useEffect(()=>{e.seller&&r(e)},[t]);const c=m.useCallback(l=>r({...e,term:l}),[r,e]);return[n,o,c]},Zn=()=>{const{t:e}=h(),{control:t}=F(),{seller:n,marketplace:o}=ve(),[r,c,l]=Jn({page:1,perPage:5,marketplace:o,seller:n});return s.jsxs(Qn,{children:[s.jsx(B,{label:e("customerEvents.noteModal.formFields.product.title")}),s.jsx(ne,{name:"products",control:t,render:d=>s.jsx(Nt,{...d.field,options:r,onSearch:l,getBlocks:E=>[{text:E.asin}],loading:c,placeholder:e("customerEvents.noteModal.formFields.product.placeholder"),autocomplete:!0,appendTo:document.body})})]})},Qn=i.div``,eo=()=>{const{t:e}=h(),{control:t}=F(),n=bn(d=>d.status!=="loaded"),o=p(nn),[r,c]=m.useState(""),l=m.useMemo(()=>o.filter(d=>d.searchString.toLowerCase().includes(r.toLowerCase())),[o,r]);return s.jsxs(to,{children:[s.jsx(B,{label:e("customerEvents.noteModal.formFields.type.title")}),s.jsx(ne,{name:"eventTypes",control:t,render:d=>s.jsx(ht,{...d.field,appendTo:document.body,options:l,loading:n,onSearch:c,onCreate:E=>{var N,_;const u=Date.now(),x={id:u,title:E,name:E,searchString:E,value:u,label:E,color:Ge(o.length)};(_=(N=d.field).onChange)==null||_.call(N,[...d.field.value,x]),Gn.action({name:E,fakeId:u})},autocomplete:!0,placeholder:e("customerEvents.noteModal.formFields.type.placeholder")})})]})},to=i.div``,so=m.memo(()=>{const e=p(l=>l.properties.marketplace),t=j(l=>l.name),n=j(({noteModal:l})=>l),o=C(l=>l.noteModalController.close),r=tt({defaultValues:no(n,e)}),c=r.handleSubmit(({date:l,description:d,products:E,eventTypes:u})=>{const x=n==null?void 0:n.id,N={eventDate:xe(l||new Date,"yyyy-MM-dd"),asins:(E==null?void 0:E.map(({value:_})=>({asin:_,marketplace:e})))||[],types:(u==null?void 0:u.map(({value:_})=>_))||[],description:d};x?kn.action({noteId:x,componentName:t,params:N}):$n.action({componentName:t,params:N}),o()});return s.jsx(st,{...r,children:s.jsxs(oo,{onSubmit:c,id:"addEditNoteModalForm",children:[s.jsxs(ro,{children:[s.jsx(Pn,{}),s.jsx(eo,{}),s.jsx(Zn,{})]}),s.jsx(Un,{})]})})}),no=(e,t)=>{var n;return{date:e!=null&&e.eventDate?Bn(e.eventDate):void 0,description:(e==null?void 0:e.description)||"",products:((n=e==null?void 0:e.asins)==null?void 0:n.map(o=>({label:o.asin,value:o.asin,imageSrc:o.imageUrl,title:o.title,href:W(t,o.asin),asin:o.asin})))||[],eventTypes:(e==null?void 0:e.types.map(o=>({value:o.id,searchString:o.name,label:o.name})))||[]}},oo=i.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp16};
`,ro=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp16};
  max-width: 250px;
`,ao=()=>{const{t:e}=h(),t=j(l=>l.name),n=j(({noteModal:l})=>l==null?void 0:l.id),[o]=C(l=>l.noteModalController()),r=C(l=>l.noteModalController.close),c=m.useCallback(()=>{n&&Ln.action({noteId:n,componentName:t}),r()},[t,n,r]);return s.jsx(H,{isOpen:o,onClose:r,onClickOutside:X,size:"50",title:s.jsxs(s.Fragment,{children:[s.jsx(io,{children:e(`customerEvents.noteModal.${n!=null?"editTitle":"addTitle"}`)}),s.jsx(lo,{children:e("customerEvents.noteModal.subtitle")})]}),footer:s.jsxs(co,{children:[s.jsx(Ne,{children:s.jsx(D,{type:"button",buttonType:"cancel",size:"200",onClick:r,children:e("common.cancel")})}),s.jsxs(Ne,{children:[n?s.jsx(D,{size:"200",buttonType:"text",type:"button",icon:s.jsx(R,{icon:nt}),onClick:c,children:e("customerEvents.noteModal.buttons.deleteNote")}):null,s.jsx(D,{size:"200",type:"submit",form:"addEditNoteModalForm",children:e("customerEvents.noteModal.buttons.saveNote")})]})]}),lockBody:!0,children:s.jsx(so,{})})},io=i.div``,lo=i.div`
  ${L};
`,co=i.div`
  display: flex;
  justify-content: space-between;
`,Ne=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Eo=({name:e,defaultSettings:t,children:n})=>(m.useEffect(()=>{if(!(p.getState().toolId!=="NOT_SET"))throw new Error("Customer events not initialized")},[]),s.jsxs(vt,{children:[s.jsx(uo,{name:e,defaultSettings:t}),n,s.jsx(ao,{}),s.jsx(Vs,{}),s.jsx(un,{}),s.jsx(hn,{})]})),uo=({name:e,defaultSettings:t})=>{const n=C(r=>r.nameController.set),o=C(r=>r.initSettings);return m.useEffect(()=>{n(e),o(t)},[]),null},Go=Object.assign(Eo,{AddNote:jt,Toggle:Vt,Settings:It});export{ss as A,Go as C,ae as E,we as N,Re as T,Ct as a,q as b,ge as c,In as d,Vn as e,bn as f,bo as g,At as h,Vo as i,ft as j,On as k,Tt as l,j as m,z as n,Io as o,C as p,_t as s,p as u};
//# sourceMappingURL=CustomerEventsComponent-JnkNYJka.js.map
