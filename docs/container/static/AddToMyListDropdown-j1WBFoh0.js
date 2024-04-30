import{r as o,bi as Ht,j as s,c8 as Kt,u as f,g6 as qt,g7 as Gt,bo as Qt,bt as _t,bg as rt,a as F,g8 as Jt,g9 as Xt,ga as Yt,gb as Zt,cq as es,gc as he,gd as ts,bj as ss,ge as as,N as M,x as ie,aA as ns,aP as os,cL as rs,bh as ls,f as ye,g as we,P as be,as as xe,d as lt,ad as Ie,b as it,m as je,h as is,aF as ds,c as C,e as I,aG as cs,w as A,aK as us,aH as dt,ak as ct,aL as ps,aj as fs,fx as ms,M as Je,cJ as gs,y as ut,K as hs,Q as xs,a1 as ys,bz as ws,gf as bs}from"./index-3WWdADc-.js";import{a as js}from"./NewRadio-r0LBmnQI.js";import{i as Ne,p as Cs,q as $s}from"./useAutoPlay-ceAGW3YF.js";import{f as ee,H as ks}from"./middleware-lPGLX8nq.js";import{q as vs,S as Fs,P as Ss,a0 as Xe,C as Ts}from"./Learn-iEpSD2rS.js";import{d as Ce,u as Ns}from"./use-onclickoutside.browser.esm-FI41Hp9Z.js";import{M as Ms}from"./MarketplaceSingleSelect-pf9DJN8d.js";var Is=function(e){var t=o.useRef(e);t.current=e,js(function(){return function(){return t.current()}})},Rs=function(e){var t=o.useRef(0),a=o.useState(e),n=a[0],i=a[1],l=o.useCallback(function(u){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){i(u)})},[]);return Is(function(){cancelAnimationFrame(t.current)}),[n,l]},Aa=function(e,t){e===void 0&&(e=1/0),t===void 0&&(t=1/0);var a=Rs({width:Ne?window.innerWidth:e,height:Ne?window.innerHeight:t}),n=a[0],i=a[1];return o.useEffect(function(){if(Ne){var l=function(){i({width:window.innerWidth,height:window.innerHeight})};return Cs(window,"resize",l),function(){$s(window,"resize",l)}}},[]),n};const Vs=1500,Ls=({deleteOnBackspace:e,inputValue:t,value:a,onChange:n})=>{const[i,l]=o.useState(null),u=o.useCallback(()=>{e&&!t&&a.length>0&&(i?(n==null||n({type:"remove",oldValue:a[a.length-1],newValue:""}),clearTimeout(i),l(null)):l(setTimeout(()=>{i&&clearTimeout(i),l(null)},Vs)))},[e,t,n,i,a]);return{preRemove:i,onBackspace:u}},Me=async(e,t,a,n)=>{const i=await Promise.all(t.map(l=>a(l).catch()));return[...new Set(t.filter((l,u)=>i[u]))].slice(0,n-e.length)},zs=({clearOnBlur:e,creatable:t,onChange:a,validateAddTag:n,blockInput:i,tagsLimited:l,onSearch:u,onSearchImmediately:d,onSeparate:x,maxTags:c,value:h})=>{const[w,k]=o.useState(""),R=Ht(u,800);o.useEffect(()=>{d==null||d(w),R(w)},[R,w,d]),o.useEffect(()=>{l&&w&&k("")},[w,l]);const V=o.useCallback(v=>{v.preventDefault();const m=v.clipboardData.getData("text").trim();(async()=>{const b=await Me(h,x(m),n,c);a({type:"paste",oldValue:[],newValue:b}),w&&k("")})()},[h,x,c,n,w,a]),L=o.useCallback(v=>{if(!i){const m=v.currentTarget.value;k(m)}},[i]),z=o.useCallback(v=>{v.preventDefault(),(async()=>{const m=v.currentTarget.value;if(!t&&m){const b=await Me(h,x(m),n,c);a({type:"add",oldValue:[],newValue:b}),m&&k("")}e&&m&&k("")})()},[e,t,c,a,x,n,h]);return{handlePaste:V,handleInputChange:L,handleBlur:z,inputValue:w,setInputValue:k}},Os=(e,t,a)=>{const n=a.toLowerCase();return n?e.filter(i=>!t.includes(i.value)&&i.value.toLowerCase().includes(n)):e.filter(i=>!t.includes(i.value))},Bs=({options:e,optionsFilter:t=Os,searchString:a,value:n})=>{const i=o.useMemo(()=>(e==null?void 0:e.map((u,d)=>({...u,index:d})))||[],[e]),l=o.useMemo(()=>t(i,n,a),[t,i,n,a]);return{options:i,filtered:l}},Ps=({allowDuplicates:e,disabled:t,tagsLimited:a,value:n,validation:i})=>{const[l,u]=o.useState(!1),d=o.useRef(new Set);return{validateAddTag:o.useCallback(async c=>{d.current.add(c),d.current.size===1&&u(!0);let h=!0;switch(!0){case!c:h=!1;break;case(!e&&n.includes(c)):h=!1;break;case t:h=!1;break;case a:h=!1;break;default:try{h=await i(c)}catch(w){console.error(w),h=!1}break}return d.current.delete(c),d.current.size===0&&u(!1),h},[e,t,a,i,n]),blockInput:l}},Ds=o.memo(({getTooltipContent:e,tooltipOptions:t,...a})=>{const n=o.useMemo(()=>e==null?void 0:e((a==null?void 0:a.defaultValue)||""),[e,a.defaultValue]);return s.jsx(Kt,{disabled:!n,content:n,colorType:"light",delay:[200,0],...t,children:s.jsx(ee,{...a})})}),Es=e=>e.split(",").map(t=>t.trim()).filter(t=>!!t),Ye=he,Ze=()=>null,As=()=>!0,Ws=(e,t)=>{const{value:a,onChange:n,onSeparate:i=Es,inputProps:l,maxTags:u=1/0,disabled:d=!1,loading:x=!1,error:c=!1,validation:h=As,deleteOnBackspace:w=!0,allowEditTags:k,clearOnBlur:R=!0,clearOnError:V=!1,className:L,expanded:z,expandedDisabled:v,hideInputOnLimit:m,findSuggestionsMode:b=!1,getTooltipContent:D=Ze,tooltipOptions:O,renderOption:de=Xt,renderCreate:$e=Yt,renderTagIcon:S,renderNoOptions:yt=s.jsx(Zt,{}),creatable:ke=!1,optionsFilter:wt,hasDropdown:se=!1,allowDuplicates:bt=!1,onCreate:W,options:ae,renderHeader:jt=null,readonly:B=!1,onSearch:Ct=Ze,onSearchImmediately:$t,onEditToggle:ce,allowOnlyOptions:Be=!1,size:K=es,locked:ve=!1,lockedMessage:kt="",addTagsOnPressKeys:Fe,renderOptions:vt,onKeyDown:Ft,onEnter:Se,onChangeInput:ue,maxRenderTags:ne=100,dropdownAppendTo:St="parent",onClickOutside:pe,...Tt}=e,g=o.useMemo(()=>a||[],[a]),$=o.useMemo(()=>d||x,[d,x]),[fe,Pe]=o.useState(!1),[oe,q]=o.useState(!1),[P,De]=o.useState(Ye),[Nt,Ee]=o.useState(!0),G=o.useRef(null),me=o.useRef(null),Ae=o.useRef(null);o.useEffect(()=>{g.length===0&&Pe(!1)},[g.length]);const re=o.useMemo(()=>u<=g.length,[u,g.length]),Mt=o.useCallback(r=>Be?ae!=null&&ae.find(p=>p.searchString===r)?h(r):!1:h(r),[h,Be,ae]),T=o.useCallback(r=>{if(r.type==="remove")return n==null?void 0:n(g.filter(p=>p!==r.oldValue),r);if(!$){if(r.type==="add"&&r.newValue.length>0)return n==null?void 0:n([...g,...r.newValue],r);if(r.type==="paste"&&r.newValue.length>0)return n==null?void 0:n([...g,...r.newValue],r);if(r.type==="select")return n==null?void 0:n([...g,r.newValue],r);if(r.type==="edit")return n==null?void 0:n(Object.assign([],g,{[g.indexOf(r.oldValue)]:r.newValue}),r)}},[$,n,g]),{validateAddTag:Q,blockInput:We}=Ps({allowDuplicates:bt,disabled:$,tagsLimited:re,value:g,validation:Mt}),{handlePaste:It,handleInputChange:Rt,handleBlur:Vt,inputValue:j,setInputValue:N}=zs({value:g,blockInput:We,clearOnBlur:R,creatable:ke,onChange:T,tagsLimited:re,validateAddTag:Q,onSearch:Ct,onSearchImmediately:$t,onSeparate:i,maxTags:u});o.useEffect(()=>{ue==null||ue(j)},[j,ue]),o.useEffect(()=>{j&&q(!0)},[j]),o.useImperativeHandle(t,()=>({clearInput:()=>{N("")},focus:()=>{G.current&&(G.current.focus(),q(!0))}}));const{options:le,filtered:_}=Bs({options:ae,searchString:j,value:g,optionsFilter:wt}),J=o.useMemo(()=>{if(!ke)return!1;const r=j.toLowerCase();return j&&le.every(p=>p.value.toLowerCase()!==r)},[ke,j,le]);o.useEffect(()=>{De(Ye)},[le]);const{onBackspace:Lt,preRemove:zt}=Ls({deleteOnBackspace:w,inputValue:j,value:g,onChange:T}),Ue=o.useCallback(r=>{T({type:"remove",oldValue:r.toString(),newValue:""})},[T]),Ot=o.useCallback(r=>{W&&(W(r),N(""))},[W,N]),He=o.useCallback(()=>{if(J&&P===he)return{type:"create",value:j};const r=typeof P<"u"&&le[P];return r?{type:"option",value:r.value}:{type:"none",value:j}},[P,j,le,J]),Ke=o.useCallback(r=>{r.preventDefault(),(async()=>{const{type:p,value:y}=He();if(oe&&p!=="none"){p==="create"?(W==null||W(y),y&&N("")):p==="option"&&(await Q(y)?(T({type:"select",oldValue:"",newValue:y}),N("")):V&&y&&N(""));return}if(y){const Y=await Me(g,[y],Q,u);if(Y.length){T({type:"add",oldValue:[],newValue:Y}),y&&N("");return}V&&y&&N("")}r.key==="Enter"&&Se&&(Se(),q(!1))})()},[V,He,T,u,W,Se,N,oe,Q,g]),qe=o.useCallback(r=>{Ee(!0),De(p=>{const y=(J?[he]:[]).concat(_.map(Y=>Y.index));if(typeof p>"u")return y[0];{const Y=y.indexOf(p);return y[Y+(r==="next"?1:r==="prev"?-1:0)]}})},[_,J]),Ge=ts(me==null?void 0:me.current);o.useEffect(()=>{typeof P<"u"&&Ge(P)},[P,Ge]);const X=o.useCallback(r=>{r.preventDefault();const p=["ArrowUp","PageUp","Home"].includes(r.code)?"prev":["ArrowDown","PageDown","End"].includes(r.code)?"next":null;$||(oe&&p?qe(p):q(!0))},[$,qe,oe]),Te=o.useCallback(()=>{q(!1),pe==null||pe()},[pe]),Bt=ss({Enter:Ke,Backspace:Lt,...se?{ArrowUp:X,ArrowDown:X,PageUp:X,PageDown:X,Home:X,End:X,Escape:Te,Tab:Te}:void 0,...Fe==null?void 0:Fe.reduce((r,p)=>({...r,[p]:Ke}),{}),...Ft}),Pt=o.useCallback(()=>{Ee(!1)},[]),Dt=o.useCallback(()=>{var r;!$&&!B&&((r=G.current)==null||r.focus(),se&&q(p=>!p))},[$,se,B]),Et=o.useCallback(r=>{r.preventDefault(),r.stopPropagation(),Pe(p=>!p)},[]),At=o.useCallback(r=>{T({type:"select",oldValue:"",newValue:r.value}),N("")},[T,N]),Qe=o.useCallback((r,p)=>{(async()=>{var y;await Q(r.toString())&&(T({type:"edit",oldValue:(p==null?void 0:p.toString())||"",newValue:r.toString()}),(y=G.current)==null||y.focus())})()},[Q,T]),ge=o.useCallback(r=>{const p={tooltipOptions:O,getTooltipContent:D,defaultValue:r,size:K,disabled:$};return B||(p.editable=k&&!$,p.onChange=Qe,p.onRemove=Ue),S&&(p.icon=S({value:r})),s.jsx(E,{"data-value":r,onClick:y=>y.stopPropagation(),children:s.jsx(Ds,{...p})},r)},[O,D,K,$,B,k,Qe,Ue,S]),Wt=o.useCallback(()=>fe?g.map(ge):s.jsxs(s.Fragment,{children:[g.slice(0,ne).map(ge),g.length>ne?s.jsx(E,{children:s.jsx(ks,{size:K,disabled:$,count:`+${g.length-ne}`,items:g.slice(ne).map(ge)})}):null]}),[g,fe,ne,K,$,ge]),Ut=o.useMemo(()=>re&&m||B||ve,[m,B,re,ve]),_e=o.useMemo(()=>b==="always"?!0:b&&g.length>0,[b,g]);return s.jsx(vs,{appendTo:St,animation:!1,delay:[0,0],offset:[0,4],interactive:!0,placement:"bottom-start",disabled:!se,visible:oe,onClickOutside:Te,render:r=>{var p;return s.jsx("div",{...r,className:L,children:!re&&s.jsx(pt,{ref:me,$width:(p=Ae.current)==null?void 0:p.clientWidth,onMouseMove:Pt,children:s.jsxs(ft,{children:[_.length>0&&jt,vt||s.jsxs(s.Fragment,{children:[J&&$e({value:j,onCreate:Ot,highlighted:P===he}),_.length>0&&s.jsx(s.Fragment,{children:_.map(y=>s.jsx(o.Fragment,{children:de({option:y,onSelect:At,highlighted:Nt&&y.index===P})},y.value))}),!J&&_.length===0&&yt]})]})})})},children:s.jsxs("div",{children:[s.jsxs(gt,{ref:Ae,onClick:Dt,$disabled:$,$findSuggestionsMode:_e,$loading:x,$invalid:!!c,$hasPadding:z,$readonly:B,className:L,$size:K,...Tt,children:[s.jsxs(ht,{$removeChip:!!zt,$expanded:fe,children:[e.renderBeforeTags,Wt(),We&&s.jsx(xt,{children:s.jsx(as,{})}),ve&&s.jsx(Us,{children:kt}),_e||Ut?null:s.jsx(Z,{value:j,placeholder:l==null?void 0:l.placeholder,children:s.jsx(mt,{ref:G,disabled:$,value:j,onChange:Rt,onKeyDown:Bt,onPaste:It,onBlur:se?void 0:Vt,...l})}),B&&ce&&s.jsx(Qs,{children:s.jsx(M,{size:K,buttonType:"icon",icon:s.jsx(ie,{icon:ns}),onClick:r=>{var p;B||(p=G.current)==null||p.focus(),ce==null||ce(r)}})})]}),z&&s.jsx(_s,{children:s.jsx(M,{size:"100",buttonType:"icon",icon:fe?s.jsx(Ks,{}):s.jsx(Hs,{}),onClick:Et,disabled:v})})]}),c&&typeof c=="string"&&s.jsx(os,{children:c})]})})},Us=({children:e})=>s.jsxs(Gs,{children:[s.jsx(rs,{type:"tertiary"}),e&&s.jsx(qs,{children:e})]}),Hs=f(ie).attrs({icon:qt})``,Ks=f(ie).attrs({icon:Gt})``,pt=f.div`
  ${Qt};
  ${_t};

  width: ${e=>e.$width?e.$width+"px":"100%"};
  max-height: 320px;
  background: #fff;
  overflow: auto;

  border: 1px solid ${e=>e.theme.systemColors.grey200};
  border-radius: 6px;
  padding: 8px 0;
`,qs=f.div`
  margin-left: 8px;
`,Gs=f.div`
  margin-left: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${e=>e.theme.systemColors.grey300};
  padding-right: 8px;
`,ft=f.div``,Qs=f.div`
  display: inline-block;
  padding: 1px;
`,_s=f.div`
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 0;
  right: 0;
`,Z=f(rt)`
  margin-left: 12px;
  margin-right: 12px;
  max-width: 100%;
  overflow: hidden;
`,mt=f(ls)`
  ${rt.ContentStyles};
`,E=f.span`
  display: flex;
  max-width: 100%;
`,Js={50:F`
    ${E} {
      padding: 2px;
    }

    ${Z} {
      min-height: 24px;
    }
  `,100:F`
    ${E} {
      padding: 3px;
    }

    ${Z} {
      min-height: 30px;
    }
  `,200:F`
    ${E} {
      padding: 4px;
    }

    ${Z} {
      min-height: 38px;
    }
  `,400:F`
    ${E} {
      padding: 4px;
    }

    ${Z} {
      min-height: 38px;
    }
  `},gt=f.div`
  ${Jt};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${e=>Js[e.$size]};

  padding-right: ${e=>e.$hasPadding?"24px":"0"};

  ${e=>e.$disabled&&F`
      border-color: ${e.theme.systemColors.grey200} !important;
      cursor: not-allowed;
    `}

  ${e=>e.$loading&&F`
      ${ee.Wrapper} {
        background: ${e.theme.systemColors.grey300};
        border-color: ${e.theme.systemColors.grey300};
        color: ${e.theme.systemColors.grey400};

        &:hover {
          ${ee.Icon} {
            color: ${e.theme.systemColors.grey400};
          }
        }
      }

      ${ee.Icon} {
        cursor: auto;
        color: ${e.theme.systemColors.grey400};
      }
    `}

  ${e=>e.$readonly&&F`
      border-color: ${e.theme.systemColors.white} !important;
    `}

  ${e=>e.$findSuggestionsMode&&F`
      background-color: ${e.theme.systemColors.grey200};
      border-color: ${e.theme.systemColors.grey200} !important;
    `}
`,ht=f.div`
  display: flex;
  flex-wrap: wrap;

  ${e=>e.$removeChip&&F`
      ${E}:last-of-type ${ee.Wrapper} {
        background-color: ${t=>t.theme.systemColors.red400};
        border-color: ${t=>t.theme.systemColors.red400};

        ${ee.Icon} {
          color: ${({theme:t})=>t.systemColors.white};
        }
      }
    `}

  ${e=>e.$expanded&&F`
      align-items: flex-start;
      flex-direction: column;
    `};
`,Xs=f.div`
  padding: 3px 0;
`,xt=f.span`
  margin-left: ${e=>e.theme.spacing.sp8};
  display: flex;
  align-self: center;
`,Ys=o.forwardRef(Ws),Wa=Object.assign(Ys,{Wrapper:gt,InputWrapper:Z,Input:mt,Tag:E,Tags:ht,StartContent:Xs,OptionsList:ft,DropdownWrapper:pt,SpinnerWrapper:xt}),Zs={white:"#fff",blue:"#0081ff",intenseBlue:"#d4e9ff",opacityBlue:"#e5f2ff",lightGrayBackground:"#e4e5e7",darkBlue:"#003873",middleBlue:"#0150a4",primaryBlue:"#0a6fe8",dirtyBlue:"#485e75",darkGrey:"#343a40",black:"#000",grey:"#646464",defaultGrey:"#f2f5f7",lightGrey:"#ebf0f2",beige:"#ede8e4",middleBeige:"#cbcbcb",lightBlue:"#f7f9fa",middleGrey:"#a8aab7",mediumGrey:"#d1d4d8",lightOpacityGrey:"#8c8c8c",lightRed:"#e74c3c",green:"#35a854",oceanGreen:"#33cc99",yellow:"#eba646",asphalt:"#313a47",greyBorder:"#d9e0e8",tableText:"#13191f",borderGrey:"#dddddd",shuttleGrey:"#6a6c6f",placeholderGrey:"rgba(106, 108, 111, 0.5)"},ea=async e=>ye({url:we(`${be}/keyword-manager/upload/upload-folder`,{}),method:"POST",params:{...e,limit:200},withCredentials:!0}),ta=async e=>ye({url:we(`${be}/keyword-manager/upload/get-upload-folders`,{}),method:"POST",params:e,withCredentials:!0}),sa=async e=>ye({url:we(`${be}/keyword-manager/upload/pull-keywords`,{}),method:"POST",params:e,withCredentials:!0}),U=Ce("getUploadFoldersLib",async({marketplace:e,marketplaceType:t})=>{var a,n;return ta({marketplace:e?(a=xe("AM","TLDomain",e))==null?void 0:a.store:t?(n=xe(t.startsWith("walmart")?"WM":"AM","domain",t))==null?void 0:n.store:""})},{rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")}}),Re=lt("setSearchValue"),et=Ce("pullKeywordsRequest",async({targetFolderId:e,getSelectedKeywords:t,onSuccess:a})=>{const n=t(),i=await sa({targetFolderId:e,keywords:n});return a==null||a(),i},{fulfilledReaction:({result:{status:e,message:t},params:{targetFolderName:a,notification:n,getSelectedKeywords:i}})=>{const l=Ie.getState().translation,u=i();e==="success"&&l?n.success(l.t("addToMyList.addedToMyFolderSuccess",{count:u.length,targetFolderName:a}),{closeButton:s.jsx(s.Fragment,{})}):l&&t==="All phrases already exist in this folder"?n.warning(l.t("createNewFolder.allPhrasesAlreadyExist")):n.warning(t)},rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")},initialStatus:"init"}),aa=Ce("getUploadFolderData",async({targetFolderId:e,marketplace:t,onSuccess:a,notification:n})=>{const i=Ie.getState().translation,l=await ea({targetFolderId:e,marketplace:t});return a==null||a((l==null?void 0:l.keywords)||[]),l.message==="No phrases in folder"&&i&&n.error(i.t("addToMyList.errors.noPhrasesInFolder")),l},{rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")},initialStatus:"init"}),Ve=it("addToMyListAtom",{data:null,searchValue:""},e=>{e(U.actions.fulfilled,(t,{result:a})=>({...t,data:a})),e(Re,(t,a)=>({...t,searchValue:a}))}),na=je("foldersSelector",Ve,e=>{var t;return((t=e.data)==null?void 0:t.folders)||null}),Le=je("foldersListSelector",na,e=>e?Object.values(e):[]),oa=je(Ve,e=>e.searchValue),ra=je("filteredFoldersSelector",is([Le,oa]),([e,t])=>e?e.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())):[]),la=f(ie).attrs({icon:ds,spin:!0})`
  font-size: 24px;
  position: relative;
  margin: 10px;
`,ia=({marketplace:e,marketplaceType:t,getSelectedKeywords:a,notification:n,uncheckAll:i,onSuccess:l,isOpen:u,onClose:d,direction:x="to",onAddFromMyList:c})=>{const h=C(U.atom,m=>m.status==="loading",[]),w=C(et.atom,m=>m.status,[]),k=C(Le,m=>m.length,[]),R=C(U.atom,m=>m.status,[]),V=C(U.atom,m=>m.error,[]),L=I(U.actions.pending),z=I(m=>{const b=m.target.value||"";return Re(b)});o.useEffect(()=>{u&&L({marketplaceType:t,notification:n})},[u,L,e,n,t]);const v=I(m=>{const b=Number(m.currentTarget.dataset.id),D=O=>{d==null||d(),i==null||i(),l==null||l(),O&&x==="from"&&(c==null||c(O))};if(b){if(x==="to")return et.actions.pending({getSelectedKeywords:a,targetFolderId:b,targetFolderName:m.currentTarget.dataset.name||"",onSuccess:D,notification:n});if(t)return aa.actions.pending({targetFolderId:b,targetFolderName:m.currentTarget.dataset.name||"",onSuccess:D,notification:n,marketplace:t})}},[e,a]);return{onClose:d,foldersLength:k,loading:h,status:R,error:V,handleSearchChange:z,pullKeywordLoading:w,pullKeywords:v}},Ua=e=>{const[t,a]=o.useState(!1),n=o.useRef(null);return Ns(n,()=>{e||a(!1)}),{isOpen:t,setIsOpen:a,ref:n}},H=lt("setIsFolderCreatingNow",(e,{dispatch:t})=>{t(Re(""))}),te=it("addToMyListAtom",!1,e=>{e(H,(t,a)=>a)}),da=({defaultMarketplace:e})=>{const t=cs({defaultValues:{marketplace:e,name:""},mode:"all"}),a=C(te);return o.useEffect(()=>{a||t.reset()},[t,a]),t},ca=async e=>ye({url:we(`${be}/keyword-manager/upload/add-folder`,{}),method:"POST",params:e,withCredentials:!0}),ua=Ce("createNewFolder",async({data:e})=>await ca(e),{fulfilledReaction:({params:{data:{marketplaceId:e},notification:t}},{dispatch:a})=>{const n=e?xe(e===101?"WM":"AM","id",e).domain:"amazon.com";a(U.actions.pending({notification:t,marketplaceType:n}))},rejectedReaction:({fetchError:e,params:{notification:t}})=>{const a=Ie.getState().translation;(e==null?void 0:e.responseStatus)===400&&a&&t.error(a.t("createNewFolder.folderAlreadyExist"))}}),ze=({notification:e})=>{const{t}=A(),a=us(),n=I(H),i=I(ua.actions.pending),l=a.handleSubmit(({name:d,marketplace:x})=>{var c;n(!1),i({data:{name:d.trim(),marketplaceId:(c=xe(x.startsWith("walmart")?"WM":"AM","domain",x))==null?void 0:c.id},notification:e})}),u=o.useMemo(()=>({required:t("createNewFolder.folderNameRequired"),pattern:{value:/([^\s])/,message:t("createNewFolder.folderNameRequired")}}),[t]);return{onSubmit:l,folderNameRules:u,form:a}},pa=({notification:e})=>{var d;const{t}=A(),a=C(te),n=I(H),{folderNameRules:i,form:l,onSubmit:u}=ze({notification:e});return s.jsx(ma,{isOpen:a,onClose:()=>n(!1),size:"50",title:t("createNewFolder.title"),subtitle:t("createNewFolder.text"),footer:s.jsxs(xa,{children:[s.jsx(M,{buttonType:"cancel",size:"200",onClick:()=>n(!1),type:"button",children:t("common.cancel")}),s.jsx(M,{buttonType:"primary",size:"200",onClick:u,type:"submit",children:t("createNewFolder.save")})]}),children:s.jsx(dt,{...l,children:s.jsx(ha,{onSubmit:u,children:s.jsxs(ya,{children:[s.jsx(ct,{label:t("createNewFolder.folderName"),placeholder:t("createNewFolder.folderNamePlaceholder"),...l.register("name",i),error:(d=l.formState.errors.name)==null?void 0:d.message}),s.jsx(ps,{name:"marketplace",control:l.control,render:({field:x})=>s.jsxs("div",{children:[s.jsx(fs,{label:t("createNewFolder.marketplace")}),s.jsx(ms,{children:s.jsx(Ms,{value:x.value,onChange:c=>x.onChange(c.value),groupOptions:!0,options:ga})})]})})]})})})})},fa=["amazon.com","amazon.ca","amazon.com.mx","amazon.de","amazon.es","amazon.it","amazon.fr","amazon.co.uk","amazon.in","amazon.nl","amazon.com.au","amazon.co.jp","amazon.ae","amazon.com.br","walmart.com"],ma=f(Je)`
  ${Je.Children} {
    overflow: initial;
  }
`,ga=fa.map(e=>gs.find(({value:t})=>t===e)),ha=f.form`
  display: flex;
  flex-direction: column;
  overflow: auto;
`,xa=f.div`
  margin-top: ${({theme:e})=>e.spacing.sp48};
  display: flex;
  justify-content: space-between;
  padding-top: ${({theme:e})=>e.spacing.sp16};
`,ya=f.div`
  max-width: 300px;
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing.sp32};
`,wa=()=>{const{t:e}=A(),t=I(H);return s.jsx(s.Fragment,{children:s.jsx(M,{buttonType:"secondary",size:"100",onClick:a=>{a.stopPropagation(),t(!0)},type:"button",children:e("createNewFolder.button")})})},ba=o.memo(({notification:e})=>{const{t}=A(),a=C(te),n=I(H),{onSubmit:i}=ze({notification:e});return s.jsx(s.Fragment,{children:a?s.jsxs(ja,{children:[s.jsx(M,{buttonType:"cancel",size:"100",type:"button",onClick:()=>n(!1),children:t("createNewFolder.cancel")}),s.jsx(M,{buttonType:"secondary",size:"100",type:"button",onClick:()=>i(),children:t("createNewFolder.confirm")})]}):s.jsx(M,{buttonType:"secondary",size:"100",type:"button",onClick:()=>n(!0),children:t("createNewFolder.button")})})}),ja=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,tt="https://re-cdn.helium10.com/container/static/empty-list-l2VRWXOB.svg",Ca=({direction:e,createFolderType:t="modal"})=>{const{t:a}=A(),n=C(U.atom,c=>c.status,[]),i=C(Le,c=>c.length,[]),l=C(te),u=I(H),d=i===0,x=o.useMemo(()=>({modal:s.jsxs(ot,{children:[s.jsx(st,{src:tt}),s.jsx(at,{children:a("addToMyList.emptyTitle")}),s.jsx(nt,{children:a("addToMyList.emptyText")}),e!=="from"&&s.jsx(M,{buttonType:"secondary",size:"100",onClick:c=>{c.stopPropagation(),u(!0)},type:"button",children:a("addToMyList.emptyButton")})]}),table:l?null:s.jsxs(ot,{children:[s.jsx(st,{src:tt}),s.jsx(at,{children:a("addToMyList.emptyTitle")}),s.jsx(nt,{children:a("addToMyList.emptyText")}),e!=="from"&&s.jsx(M,{buttonType:"secondary",size:"100",onClick:c=>{c.stopPropagation(),u(!0)},type:"button",children:a("addToMyList.emptyButton")})]})}),[e,l,u,a]);return n!=="loaded"||!d?null:x[t]},st=f.img`
  width: 77px;
  height: 72px;
`,at=f.div`
  ${ut};
  color: ${({theme:e})=>e.systemColors.black};
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,nt=f.div`
  ${hs};
  margin-top: ${({theme:e})=>e.spacing.sp4};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  text-align: center;
`,ot=f.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$a=o.memo(({notification:e})=>{var l;const{t}=A(),{folderNameRules:a,form:n,onSubmit:i}=ze({notification:e});return o.useEffect(()=>{n.setFocus("name")},[n]),s.jsx(Oe,{isRow:!0,children:s.jsx("form",{onSubmit:i,children:s.jsx(ct,{size:"50",placeholder:t("createNewFolder.folderNameShortPlaceholder"),...n.register("name",a),error:(l=n.formState.errors.name)==null?void 0:l.message})})})}),ka=({pullKeywords:e,visibleItemsCount:t=5,notification:a,createFolderType:n})=>{const{t:i}=A(),l=C(ra),u=C(te);return s.jsxs(va,{visibleItemsCount:t,children:[l.map(d=>s.jsx(Fa,{pullKeywords:e,id:d.id,name:d.name,phrasesQty:d.phrasesQty},d.id)),u&&n==="table"&&s.jsx($a,{notification:a}),l.length===0&&!u&&s.jsx(Sa,{children:i("addToMyList.noFolders")})]})},va=f(Fs)`
  overflow-y: auto;
  min-height: 20px;
  max-height: ${({visibleItemsCount:e})=>35*(e||5)}px;
`,Fa=o.memo(({pullKeywords:e,id:t,name:a,phrasesQty:n})=>s.jsxs(Oe,{"data-id":t,"data-name":a,onClick:e,isRow:!0,children:[s.jsx("span",{children:a}),s.jsx("span",{children:n})]})),Oe=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > {
    :first-child {
      max-width: 130px;
      min-width: 130px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  ${({isRow:e})=>e?F`
          ${xs};
          cursor: pointer;
          border-bottom: solid 1px #d9e0e8;

          &:hover {
            background-color: ${Zs.defaultGrey};
          }
        `:F`
          ${ys};
          margin-top: 10px;
          background-color: #f2f5f7;
          border-top: solid 1px #d9e0e8;
        `}

  padding: ${({theme:e})=>e.spacing.sp8};
`,Sa=f.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.sp8};
`,Ha=({CustomButton:e,marketplace:t,type:a="dropdown",onClick:n,visibleItemsCount:i,createFolderType:l="modal",appendTo:u,...d})=>{const x=C(Ve,S=>S.searchValue,[]),{t:c}=A(),[h,w]=o.useState(!1),k=da({defaultMarketplace:t,notification:d.notification}),{foldersLength:R,handleSearchChange:V,loading:L,status:z,error:v,pullKeywordLoading:m,pullKeywords:b}=ia({marketplaceType:t,type:a,...d,isOpen:h,onClose:()=>w(!1)}),D=()=>{n?n(()=>w(S=>!S)):w(S=>!S)},O=C(te),de=I(H),$e=O&&l==="modal";return o.useEffect(()=>{h||de(!1)},[h,de]),s.jsx(Ss,{open:h,appendTo:u,hideOnClickOutside:!$e,strategy:"fixed",zIndex:1e6,onOpenChange:w,disabled:d.disabled,content:s.jsx("div",{children:s.jsxs(dt,{...k,children:[s.jsx(Ra,{minHeight:d.direction!=="from"?260:240,children:s.jsxs(Xe,{status:z,error:v,children:[z==="loaded"&&(R>0||O&&l==="table")&&s.jsxs(s.Fragment,{children:[s.jsxs(Ta,{children:[s.jsx(Ia,{children:c("addToMyList.chooseFolder")}),s.jsx(Va,{children:ws[t]})]}),s.jsxs(Na,{children:[s.jsx(Xe,{status:m}),s.jsx(Ts,{disabled:O,value:x,onChange:V,placeholder:c("addToMyList.searchPlaceholder"),size:"100",onClick:S=>S.stopPropagation()}),s.jsxs(Oe,{children:[s.jsx("span",{children:c("addToMyList.folder")}),s.jsx("span",{children:c("addToMyList.countOfKeywords")})]}),!L||R>0?s.jsx(ka,{createFolderType:l,pullKeywords:b,visibleItemsCount:i,notification:d.notification}):s.jsx(la,{})]}),d.direction!=="from"&&s.jsxs(Ma,{children:[l==="modal"&&s.jsx(wa,{}),l==="table"&&s.jsx(ba,{notification:d.notification})]})]}),s.jsx(Ca,{direction:d.direction,createFolderType:l})]})}),l==="modal"&&s.jsx(pa,{notification:d.notification})]})}),children:s.jsx("div",{children:e?s.jsx(e,{onClick:D}):s.jsxs(M,{icon:s.jsx(ie,{icon:bs}),buttonType:"tertiary",onClick:D,children:[" ",c("addToMyList.button")]})})})},Ta=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Na=f.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
  position: relative;
`,Ma=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,Ia=f.div`
  white-space: nowrap;
  ${ut};
  margin-right: ${({theme:e})=>e.spacing.sp16};
  color: ${({theme:e})=>e.systemColors.black};
`,Ra=f.div`
  min-height: ${({minHeight:e})=>e}px;
  width: 270px;
  padding: 8px 16px;
`,Va=f.div`
  width: 27px;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
  }
`;export{Ha as A,Wa as N,la as S,Aa as a,Rs as b,ia as c,ra as f,Zs as o,Ua as u};
//# sourceMappingURL=AddToMyListDropdown-j1WBFoh0.js.map
