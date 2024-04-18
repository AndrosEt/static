import{r as o,aV as Ut,j as s,bV as Ht,u as f,g0 as Kt,g1 as Gt,a$ as qt,b4 as Qt,aT as ot,a as F,g2 as _t,g3 as Xt,g4 as Zt,g5 as Jt,ca as Yt,g6 as he,g7 as es,aW as ts,N as M,x as ie,aD as ss,bf as as,cz as ns,aU as os,f as ye,g as we,P as be,av as xe,d as rt,ag as Ie,b as lt,m as je,h as rs,aH as ls,c as C,e as I,cc as is,w as A,cy as ds,cL as it,an as dt,cd as cs,am as us,fl as ps,M as _e,cw as fs,y as ct,K as ms,Q as gs,a1 as hs,bd as xs,g8 as ys}from"./index-VVIvRZBh.js";import{a as ws}from"./NewRadio-yIsEqEsT.js";import{i as Ne,p as bs,q as js}from"./useAutoPlay-JZxKBgmm.js";import{f as ee,H as Cs}from"./middleware-KgP9JdWn.js";import{m as $s,S as ks,P as vs,Z as Xe,N as Fs}from"./Learn-nfpDmxZa.js";import{d as Ce,u as Ss}from"./use-onclickoutside.browser.esm-zvXz2-0x.js";import{M as Ts}from"./MarketplaceSingleSelect-4raCX1Al.js";var Ns=function(e){var t=o.useRef(e);t.current=e,ws(function(){return function(){return t.current()}})},Ms=function(e){var t=o.useRef(0),a=o.useState(e),n=a[0],i=a[1],l=o.useCallback(function(c){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){i(c)})},[]);return Ns(function(){cancelAnimationFrame(t.current)}),[n,l]},Pa=function(e,t){e===void 0&&(e=1/0),t===void 0&&(t=1/0);var a=Ms({width:Ne?window.innerWidth:e,height:Ne?window.innerHeight:t}),n=a[0],i=a[1];return o.useEffect(function(){if(Ne){var l=function(){i({width:window.innerWidth,height:window.innerHeight})};return bs(window,"resize",l),function(){js(window,"resize",l)}}},[]),n};const Is=1500,Vs=({deleteOnBackspace:e,inputValue:t,value:a,onChange:n})=>{const[i,l]=o.useState(null),c=o.useCallback(()=>{e&&!t&&a.length>0&&(i?(n==null||n({type:"remove",oldValue:a[a.length-1],newValue:""}),clearTimeout(i),l(null)):l(setTimeout(()=>{i&&clearTimeout(i),l(null)},Is)))},[e,t,n,i,a]);return{preRemove:i,onBackspace:c}},Me=async(e,t,a,n)=>{const i=await Promise.all(t.map(l=>a(l).catch()));return[...new Set(t.filter((l,c)=>i[c]))].slice(0,n-e.length)},Rs=({clearOnBlur:e,creatable:t,onChange:a,validateAddTag:n,blockInput:i,tagsLimited:l,onSearch:c,onSearchImmediately:u,onSeparate:g,maxTags:d,value:y})=>{const[w,k]=o.useState(""),V=Ut(c,800);o.useEffect(()=>{u==null||u(w),V(w)},[V,w,u]),o.useEffect(()=>{l&&w&&k("")},[w,l]);const R=o.useCallback(v=>{v.preventDefault();const m=v.clipboardData.getData("text").trim();(async()=>{const b=await Me(y,g(m),n,d);a({type:"paste",oldValue:[],newValue:b}),w&&k("")})()},[y,g,d,n,w,a]),L=o.useCallback(v=>{if(!i){const m=v.currentTarget.value;k(m)}},[i]),z=o.useCallback(v=>{v.preventDefault(),(async()=>{const m=v.currentTarget.value;if(!t&&m){const b=await Me(y,g(m),n,d);a({type:"add",oldValue:[],newValue:b}),m&&k("")}e&&m&&k("")})()},[e,t,d,a,g,n,y]);return{handlePaste:R,handleInputChange:L,handleBlur:z,inputValue:w,setInputValue:k}},Ls=(e,t,a)=>{const n=a.toLowerCase();return n?e.filter(i=>!t.includes(i.value)&&i.value.toLowerCase().includes(n)):e.filter(i=>!t.includes(i.value))},zs=({options:e,optionsFilter:t=Ls,searchString:a,value:n})=>{const i=o.useMemo(()=>(e==null?void 0:e.map((c,u)=>({...c,index:u})))||[],[e]),l=o.useMemo(()=>t(i,n,a),[t,i,n,a]);return{options:i,filtered:l}},Os=({allowDuplicates:e,disabled:t,tagsLimited:a,value:n,validation:i})=>{const[l,c]=o.useState(!1);return{validateAddTag:o.useCallback(async g=>{c(!0);let d=!0;switch(!0){case!g:d=!1;break;case(!e&&n.includes(g)):d=!1;break;case t:d=!1;break;case a:d=!1;break;default:try{d=await i(g)}catch(y){console.log(y),d=!1}break}return c(!1),d},[e,t,a,i,n]),blockInput:l}},Bs=o.memo(({getTooltipContent:e,tooltipOptions:t,...a})=>{const n=o.useMemo(()=>e==null?void 0:e((a==null?void 0:a.defaultValue)||""),[e,a.defaultValue]);return s.jsx(Ht,{disabled:!n,content:n,colorType:"light",delay:[200,0],...t,children:s.jsx(ee,{...a})})}),Ds=e=>e.split(",").map(t=>t.trim()).filter(t=>!!t),Ze=he,Je=()=>null,Ps=()=>!0,Es=(e,t)=>{const{value:a,onChange:n,onSeparate:i=Ds,inputProps:l,maxTags:c=1/0,disabled:u=!1,loading:g=!1,error:d=!1,validation:y=Ps,deleteOnBackspace:w=!0,allowEditTags:k,clearOnBlur:V=!0,clearOnError:R=!1,className:L,expanded:z,expandedDisabled:v,hideInputOnLimit:m,findSuggestionsMode:b=!1,getTooltipContent:P=Je,tooltipOptions:O,renderOption:de=Xt,renderCreate:$e=Zt,renderTagIcon:S,renderNoOptions:ht=s.jsx(Jt,{}),creatable:ke=!1,optionsFilter:xt,hasDropdown:se=!1,allowDuplicates:yt=!1,onCreate:W,options:ae,renderHeader:wt=null,readonly:B=!1,onSearch:bt=Je,onSearchImmediately:jt,onEditToggle:ce,allowOnlyOptions:Be=!1,size:K=Yt,locked:ve=!1,lockedMessage:Ct="",addTagsOnPressKeys:Fe,renderOptions:$t,onKeyDown:kt,onEnter:Se,onChangeInput:ue,maxRenderTags:ne=100,dropdownAppendTo:vt="parent",onClickOutside:pe,...Ft}=e,h=o.useMemo(()=>a||[],[a]),$=o.useMemo(()=>u||g,[u,g]),[fe,De]=o.useState(!1),[oe,G]=o.useState(!1),[D,Pe]=o.useState(Ze),[St,Ee]=o.useState(!0),q=o.useRef(null),me=o.useRef(null),Ae=o.useRef(null);o.useEffect(()=>{h.length===0&&De(!1)},[h.length]);const re=o.useMemo(()=>c<=h.length,[c,h.length]),Tt=o.useCallback(r=>Be?ae!=null&&ae.find(p=>p.searchString===r)?y(r):!1:y(r),[y,Be,ae]),T=o.useCallback(r=>{if(r.type==="remove")return n==null?void 0:n(h.filter(p=>p!==r.oldValue),r);if(!$){if(r.type==="add"&&r.newValue.length>0)return n==null?void 0:n([...h,...r.newValue],r);if(r.type==="paste"&&r.newValue.length>0)return n==null?void 0:n([...h,...r.newValue],r);if(r.type==="select")return n==null?void 0:n([...h,r.newValue],r);if(r.type==="edit")return n==null?void 0:n(Object.assign([],h,{[h.indexOf(r.oldValue)]:r.newValue}),r)}},[$,n,h]),{validateAddTag:Q,blockInput:Nt}=Os({allowDuplicates:yt,disabled:$,tagsLimited:re,value:h,validation:Tt}),{handlePaste:Mt,handleInputChange:It,handleBlur:Vt,inputValue:j,setInputValue:N}=Rs({value:h,blockInput:Nt,clearOnBlur:V,creatable:ke,onChange:T,tagsLimited:re,validateAddTag:Q,onSearch:bt,onSearchImmediately:jt,onSeparate:i,maxTags:c});o.useEffect(()=>{ue==null||ue(j)},[j,ue]),o.useEffect(()=>{j&&G(!0)},[j]),o.useImperativeHandle(t,()=>({clearInput:()=>{N("")},focus:()=>{q.current&&(q.current.focus(),G(!0))}}));const{options:le,filtered:_}=zs({options:ae,searchString:j,value:h,optionsFilter:xt}),X=o.useMemo(()=>{if(!ke)return!1;const r=j.toLowerCase();return j&&le.every(p=>p.value.toLowerCase()!==r)},[ke,j,le]);o.useEffect(()=>{Pe(Ze)},[le]);const{onBackspace:Rt,preRemove:Lt}=Vs({deleteOnBackspace:w,inputValue:j,value:h,onChange:T}),We=o.useCallback(r=>{T({type:"remove",oldValue:r.toString(),newValue:""})},[T]),zt=o.useCallback(r=>{W&&(W(r),N(""))},[W,N]),Ue=o.useCallback(()=>{if(X&&D===he)return{type:"create",value:j};const r=typeof D<"u"&&le[D];return r?{type:"option",value:r.value}:{type:"none",value:j}},[D,j,le,X]),He=o.useCallback(r=>{r.preventDefault(),(async()=>{const{type:p,value:x}=Ue();if(oe&&p!=="none"){p==="create"?(W==null||W(x),x&&N("")):p==="option"&&(await Q(x)?(T({type:"select",oldValue:"",newValue:x}),N("")):R&&x&&N(""));return}if(x){const J=await Me(h,[x],Q,c);if(J.length){T({type:"add",oldValue:[],newValue:J}),x&&N("");return}R&&x&&N("")}r.key==="Enter"&&Se&&(Se(),G(!1))})()},[R,Ue,T,c,W,Se,N,oe,Q,h]),Ke=o.useCallback(r=>{Ee(!0),Pe(p=>{const x=(X?[he]:[]).concat(_.map(J=>J.index));if(typeof p>"u")return x[0];{const J=x.indexOf(p);return x[J+(r==="next"?1:r==="prev"?-1:0)]}})},[_,X]),Ge=es(me==null?void 0:me.current);o.useEffect(()=>{typeof D<"u"&&Ge(D)},[D,Ge]);const Z=o.useCallback(r=>{r.preventDefault();const p=["ArrowUp","PageUp","Home"].includes(r.code)?"prev":["ArrowDown","PageDown","End"].includes(r.code)?"next":null;$||(oe&&p?Ke(p):G(!0))},[$,Ke,oe]),Te=o.useCallback(()=>{G(!1),pe==null||pe()},[pe]),Ot=ts({Enter:He,Backspace:Rt,...se?{ArrowUp:Z,ArrowDown:Z,PageUp:Z,PageDown:Z,Home:Z,End:Z,Escape:Te,Tab:Te}:void 0,...Fe==null?void 0:Fe.reduce((r,p)=>({...r,[p]:He}),{}),...kt}),Bt=o.useCallback(()=>{Ee(!1)},[]),Dt=o.useCallback(()=>{var r;!$&&!B&&((r=q.current)==null||r.focus(),se&&G(p=>!p))},[$,se,B]),Pt=o.useCallback(r=>{r.preventDefault(),r.stopPropagation(),De(p=>!p)},[]),Et=o.useCallback(r=>{T({type:"select",oldValue:"",newValue:r.value}),N("")},[T,N]),qe=o.useCallback((r,p)=>{(async()=>{var x;await Q(r.toString())&&(T({type:"edit",oldValue:(p==null?void 0:p.toString())||"",newValue:r.toString()}),(x=q.current)==null||x.focus())})()},[Q,T]),ge=o.useCallback(r=>{const p={tooltipOptions:O,getTooltipContent:P,defaultValue:r,size:K,disabled:$};return B||(p.editable=k&&!$,p.onChange=qe,p.onRemove=We),S&&(p.icon=S({value:r})),s.jsx(E,{"data-value":r,onClick:x=>x.stopPropagation(),children:s.jsx(Bs,{...p})},r)},[O,P,K,$,B,k,qe,We,S]),At=o.useCallback(()=>fe?h.map(ge):s.jsxs(s.Fragment,{children:[h.slice(0,ne).map(ge),h.length>ne?s.jsx(E,{children:s.jsx(Cs,{size:K,disabled:$,count:`+${h.length-ne}`,items:h.slice(ne).map(ge)})}):null]}),[h,fe,ne,K,$,ge]),Wt=o.useMemo(()=>re&&m||B||ve,[m,B,re,ve]),Qe=o.useMemo(()=>b==="always"?!0:b&&h.length>0,[b,h]);return s.jsx($s,{appendTo:vt,animation:!1,delay:[0,0],offset:[0,4],interactive:!0,placement:"bottom-start",disabled:!se,visible:oe,onClickOutside:Te,render:r=>{var p;return s.jsx("div",{...r,className:L,children:!re&&s.jsx(ut,{ref:me,$width:(p=Ae.current)==null?void 0:p.clientWidth,onMouseMove:Bt,children:s.jsxs(pt,{children:[_.length>0&&wt,$t||s.jsxs(s.Fragment,{children:[X&&$e({value:j,onCreate:zt,highlighted:D===he}),_.length>0&&s.jsx(s.Fragment,{children:_.map(x=>s.jsx(o.Fragment,{children:de({option:x,onSelect:Et,highlighted:St&&x.index===D})},x.value))}),!X&&_.length===0&&ht]})]})})})},children:s.jsxs("div",{children:[s.jsxs(mt,{ref:Ae,onClick:Dt,$disabled:$,$findSuggestionsMode:Qe,$loading:g,$invalid:!!d,$hasPadding:z,$readonly:B,className:L,$size:K,...Ft,children:[s.jsxs(gt,{$removeChip:!!Lt,$expanded:fe,children:[e.renderBeforeTags,At(),ve&&s.jsx(As,{children:Ct}),Qe||Wt?null:s.jsx(Y,{value:j,placeholder:l==null?void 0:l.placeholder,children:s.jsx(ft,{ref:q,disabled:$,value:j,onChange:It,onKeyDown:Ot,onPaste:Mt,onBlur:se?void 0:Vt,...l})}),B&&ce&&s.jsx(Gs,{children:s.jsx(M,{size:K,buttonType:"icon",icon:s.jsx(ie,{icon:ss}),onClick:r=>{var p;B||(p=q.current)==null||p.focus(),ce==null||ce(r)}})})]}),z&&s.jsx(qs,{children:s.jsx(M,{size:"100",buttonType:"icon",icon:fe?s.jsx(Us,{}):s.jsx(Ws,{}),onClick:Pt,disabled:v})})]}),d&&typeof d=="string"&&s.jsx(as,{children:d})]})})},As=({children:e})=>s.jsxs(Ks,{children:[s.jsx(ns,{type:"tertiary"}),e&&s.jsx(Hs,{children:e})]}),Ws=f(ie).attrs({icon:Kt})``,Us=f(ie).attrs({icon:Gt})``,ut=f.div`
  ${qt};
  ${Qt};

  width: ${e=>e.$width?e.$width+"px":"100%"};
  max-height: 320px;
  background: #fff;
  overflow: auto;

  border: 1px solid ${e=>e.theme.systemColors.grey200};
  border-radius: 6px;
  padding: 8px 0;
`,Hs=f.div`
  margin-left: 8px;
`,Ks=f.div`
  margin-left: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${e=>e.theme.systemColors.grey300};
  padding-right: 8px;
`,pt=f.div``,Gs=f.div`
  display: inline-block;
  padding: 1px;
`,qs=f.div`
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 0;
  right: 0;
`,Y=f(ot)`
  margin-left: 12px;
  margin-right: 12px;
  max-width: 100%;
  overflow: hidden;
`,ft=f(os)`
  ${ot.ContentStyles};
`,E=f.span`
  display: flex;
  max-width: 100%;
`,Qs={50:F`
    ${E} {
      padding: 2px;
    }

    ${Y} {
      min-height: 24px;
    }
  `,100:F`
    ${E} {
      padding: 3px;
    }

    ${Y} {
      min-height: 30px;
    }
  `,200:F`
    ${E} {
      padding: 4px;
    }

    ${Y} {
      min-height: 38px;
    }
  `,400:F`
    ${E} {
      padding: 4px;
    }

    ${Y} {
      min-height: 38px;
    }
  `},mt=f.div`
  ${_t};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${e=>Qs[e.$size]};

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
`,gt=f.div`
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
`,_s=f.div`
  padding: 3px 0;
`,Xs=o.forwardRef(Es),Ea=Object.assign(Xs,{Wrapper:mt,InputWrapper:Y,Input:ft,Tag:E,Tags:gt,StartContent:_s,OptionsList:pt,DropdownWrapper:ut}),Zs={white:"#fff",blue:"#0081ff",intenseBlue:"#d4e9ff",opacityBlue:"#e5f2ff",lightGrayBackground:"#e4e5e7",darkBlue:"#003873",middleBlue:"#0150a4",primaryBlue:"#0a6fe8",dirtyBlue:"#485e75",darkGrey:"#343a40",black:"#000",grey:"#646464",defaultGrey:"#f2f5f7",lightGrey:"#ebf0f2",beige:"#ede8e4",middleBeige:"#cbcbcb",lightBlue:"#f7f9fa",middleGrey:"#a8aab7",mediumGrey:"#d1d4d8",lightOpacityGrey:"#8c8c8c",lightRed:"#e74c3c",green:"#35a854",oceanGreen:"#33cc99",yellow:"#eba646",asphalt:"#313a47",greyBorder:"#d9e0e8",tableText:"#13191f",borderGrey:"#dddddd",shuttleGrey:"#6a6c6f",placeholderGrey:"rgba(106, 108, 111, 0.5)"},Js=async e=>ye({url:we(`${be}/keyword-manager/upload/upload-folder`,{}),method:"POST",params:{...e,limit:200},withCredentials:0}),Ys=async e=>ye({url:we(`${be}/keyword-manager/upload/get-upload-folders`,{}),method:"POST",params:e,withCredentials:0}),ea=async e=>ye({url:we(`${be}/keyword-manager/upload/pull-keywords`,{}),method:"POST",params:e,withCredentials:0}),U=Ce("getUploadFoldersLib",async({marketplace:e,marketplaceType:t})=>{var a,n;return Ys({marketplace:e?(a=xe("AM","TLDomain",e))==null?void 0:a.store:t?(n=xe(t.startsWith("walmart")?"WM":"AM","domain",t))==null?void 0:n.store:""})},{rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")}}),Ve=rt("setSearchValue"),Ye=Ce("pullKeywordsRequest",async({targetFolderId:e,getSelectedKeywords:t,onSuccess:a})=>{const n=t(),i=await ea({targetFolderId:e,keywords:n});return a==null||a(),i},{fulfilledReaction:({result:{status:e,message:t},params:{targetFolderName:a,notification:n,getSelectedKeywords:i}})=>{const l=Ie.getState().translation,c=i();e==="success"&&l?n.success(l.t("addToMyList.addedToMyFolderSuccess",{count:c.length,targetFolderName:a}),{closeButton:s.jsx(s.Fragment,{})}):l&&t==="All phrases already exist in this folder"?n.warning(l.t("createNewFolder.allPhrasesAlreadyExist")):n.warning(t)},rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")},initialStatus:"init"}),ta=Ce("getUploadFolderData",async({targetFolderId:e,marketplace:t,onSuccess:a,notification:n})=>{const i=Ie.getState().translation,l=await Js({targetFolderId:e,marketplace:t});return a==null||a((l==null?void 0:l.keywords)||[]),l.message==="No phrases in folder"&&i&&n.error(i.t("addToMyList.errors.noPhrasesInFolder")),l},{rejectedReaction:({error:e,params:{notification:t}})=>{t.error(e||"Server error")},initialStatus:"init"}),Re=lt("addToMyListAtom",{data:null,searchValue:""},e=>{e(U.actions.fulfilled,(t,{result:a})=>({...t,data:a})),e(Ve,(t,a)=>({...t,searchValue:a}))}),sa=je("foldersSelector",Re,e=>{var t;return((t=e.data)==null?void 0:t.folders)||null}),Le=je("foldersListSelector",sa,e=>e?Object.values(e):[]),aa=je(Re,e=>e.searchValue),na=je("filteredFoldersSelector",rs([Le,aa]),([e,t])=>e?e.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())):[]),oa=f(ie).attrs({icon:ls,spin:!0})`
  font-size: 24px;
  position: relative;
  margin: 10px;
`,ra=({marketplace:e,marketplaceType:t,getSelectedKeywords:a,notification:n,uncheckAll:i,onSuccess:l,isOpen:c,onClose:u,direction:g="to",onAddFromMyList:d})=>{const y=C(U.atom,m=>m.status==="loading",[]),w=C(Ye.atom,m=>m.status,[]),k=C(Le,m=>m.length,[]),V=C(U.atom,m=>m.status,[]),R=C(U.atom,m=>m.error,[]),L=I(U.actions.pending),z=I(m=>{const b=m.target.value||"";return Ve(b)});o.useEffect(()=>{c&&L({marketplaceType:t,notification:n})},[c,L,e,n,t]);const v=I(m=>{const b=Number(m.currentTarget.dataset.id),P=O=>{u==null||u(),i==null||i(),l==null||l(),O&&g==="from"&&(d==null||d(O))};if(b){if(g==="to")return Ye.actions.pending({getSelectedKeywords:a,targetFolderId:b,targetFolderName:m.currentTarget.dataset.name||"",onSuccess:P,notification:n});if(t)return ta.actions.pending({targetFolderId:b,targetFolderName:m.currentTarget.dataset.name||"",onSuccess:P,notification:n,marketplace:t})}},[e,a]);return{onClose:u,foldersLength:k,loading:y,status:V,error:R,handleSearchChange:z,pullKeywordLoading:w,pullKeywords:v}},Aa=e=>{const[t,a]=o.useState(!1),n=o.useRef(null);return Ss(n,()=>{e||a(!1)}),{isOpen:t,setIsOpen:a,ref:n}},H=rt("setIsFolderCreatingNow",(e,{dispatch:t})=>{t(Ve(""))}),te=lt("addToMyListAtom",!1,e=>{e(H,(t,a)=>a)}),la=({defaultMarketplace:e})=>{const t=is({defaultValues:{marketplace:e,name:""},mode:"all"}),a=C(te);return o.useEffect(()=>{a||t.reset()},[t,a]),t},ia=async e=>ye({url:we(`${be}/keyword-manager/upload/add-folder`,{}),method:"POST",params:e,withCredentials:0}),da=Ce("createNewFolder",async({data:e})=>await ia(e),{fulfilledReaction:({params:{data:{marketplaceId:e},notification:t}},{dispatch:a})=>{const n=e?xe(e===101?"WM":"AM","id",e).domain:"amazon.com";a(U.actions.pending({notification:t,marketplaceType:n}))},rejectedReaction:({fetchError:e,params:{notification:t}})=>{const a=Ie.getState().translation;(e==null?void 0:e.responseStatus)===400&&a&&t.error(a.t("createNewFolder.folderAlreadyExist"))}}),ze=({notification:e})=>{const{t}=A(),a=ds(),n=I(H),i=I(da.actions.pending),l=a.handleSubmit(({name:u,marketplace:g})=>{var d;n(!1),i({data:{name:u.trim(),marketplaceId:(d=xe(g.startsWith("walmart")?"WM":"AM","domain",g))==null?void 0:d.id},notification:e})}),c=o.useMemo(()=>({required:t("createNewFolder.folderNameRequired"),pattern:{value:/([^\s])/,message:t("createNewFolder.folderNameRequired")}}),[t]);return{onSubmit:l,folderNameRules:c,form:a}},ca=({notification:e})=>{var u;const{t}=A(),a=C(te),n=I(H),{folderNameRules:i,form:l,onSubmit:c}=ze({notification:e});return s.jsx(pa,{isOpen:a,onClose:()=>n(!1),size:"50",title:t("createNewFolder.title"),subtitle:t("createNewFolder.text"),footer:s.jsxs(ga,{children:[s.jsx(M,{buttonType:"cancel",size:"200",onClick:()=>n(!1),type:"button",children:t("common.cancel")}),s.jsx(M,{buttonType:"primary",size:"200",onClick:c,type:"submit",children:t("createNewFolder.save")})]}),children:s.jsx(it,{...l,children:s.jsx(ma,{onSubmit:c,children:s.jsxs(ha,{children:[s.jsx(dt,{label:t("createNewFolder.folderName"),placeholder:t("createNewFolder.folderNamePlaceholder"),...l.register("name",i),error:(u=l.formState.errors.name)==null?void 0:u.message}),s.jsx(cs,{name:"marketplace",control:l.control,render:({field:g})=>s.jsxs("div",{children:[s.jsx(us,{label:t("createNewFolder.marketplace")}),s.jsx(ps,{children:s.jsx(Ts,{value:g.value,onChange:d=>g.onChange(d.value),groupOptions:!0,options:fa})})]})})]})})})})},ua=["amazon.com","amazon.ca","amazon.com.mx","amazon.de","amazon.es","amazon.it","amazon.fr","amazon.co.uk","amazon.in","amazon.nl","amazon.com.au","amazon.co.jp","amazon.ae","amazon.com.br","walmart.com"],pa=f(_e)`
  ${_e.Children} {
    overflow: initial;
  }
`,fa=ua.map(e=>fs.find(({value:t})=>t===e)),ma=f.form`
  display: flex;
  flex-direction: column;
  overflow: auto;
`,ga=f.div`
  margin-top: ${({theme:e})=>e.spacing.sp48};
  display: flex;
  justify-content: space-between;
  padding-top: ${({theme:e})=>e.spacing.sp16};
`,ha=f.div`
  max-width: 300px;
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing.sp32};
`,xa=()=>{const{t:e}=A(),t=I(H);return s.jsx(s.Fragment,{children:s.jsx(M,{buttonType:"secondary",size:"100",onClick:a=>{a.stopPropagation(),t(!0)},type:"button",children:e("createNewFolder.button")})})},ya=o.memo(({notification:e})=>{const{t}=A(),a=C(te),n=I(H),{onSubmit:i}=ze({notification:e});return s.jsx(s.Fragment,{children:a?s.jsxs(wa,{children:[s.jsx(M,{buttonType:"cancel",size:"100",type:"button",onClick:()=>n(!1),children:t("createNewFolder.cancel")}),s.jsx(M,{buttonType:"secondary",size:"100",type:"button",onClick:()=>i(),children:t("createNewFolder.confirm")})]}):s.jsx(M,{buttonType:"secondary",size:"100",type:"button",onClick:()=>n(!0),children:t("createNewFolder.button")})})}),wa=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,et="https://re-cdn.helium10.com/container/static/empty-list-l2VRWXOB.svg",ba=({direction:e,createFolderType:t="modal"})=>{const{t:a}=A(),n=C(U.atom,d=>d.status,[]),i=C(Le,d=>d.length,[]),l=C(te),c=I(H),u=i===0,g=o.useMemo(()=>({modal:s.jsxs(nt,{children:[s.jsx(tt,{src:et}),s.jsx(st,{children:a("addToMyList.emptyTitle")}),s.jsx(at,{children:a("addToMyList.emptyText")}),e!=="from"&&s.jsx(M,{buttonType:"secondary",size:"100",onClick:d=>{d.stopPropagation(),c(!0)},type:"button",children:a("addToMyList.emptyButton")})]}),table:l?null:s.jsxs(nt,{children:[s.jsx(tt,{src:et}),s.jsx(st,{children:a("addToMyList.emptyTitle")}),s.jsx(at,{children:a("addToMyList.emptyText")}),e!=="from"&&s.jsx(M,{buttonType:"secondary",size:"100",onClick:d=>{d.stopPropagation(),c(!0)},type:"button",children:a("addToMyList.emptyButton")})]})}),[e,l,c,a]);return n!=="loaded"||!u?null:g[t]},tt=f.img`
  width: 77px;
  height: 72px;
`,st=f.div`
  ${ct};
  color: ${({theme:e})=>e.systemColors.black};
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,at=f.div`
  ${ms};
  margin-top: ${({theme:e})=>e.spacing.sp4};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  text-align: center;
`,nt=f.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ja=o.memo(({notification:e})=>{var l;const{t}=A(),{folderNameRules:a,form:n,onSubmit:i}=ze({notification:e});return o.useEffect(()=>{n.setFocus("name")},[n]),s.jsx(Oe,{isRow:!0,children:s.jsx("form",{onSubmit:i,children:s.jsx(dt,{size:"50",placeholder:t("createNewFolder.folderNameShortPlaceholder"),...n.register("name",a),error:(l=n.formState.errors.name)==null?void 0:l.message})})})}),Ca=({pullKeywords:e,visibleItemsCount:t=5,notification:a,createFolderType:n})=>{const{t:i}=A(),l=C(na),c=C(te);return s.jsxs($a,{visibleItemsCount:t,children:[l.map(u=>s.jsx(ka,{pullKeywords:e,id:u.id,name:u.name,phrasesQty:u.phrasesQty},u.id)),c&&n==="table"&&s.jsx(ja,{notification:a}),l.length===0&&!c&&s.jsx(va,{children:i("addToMyList.noFolders")})]})},$a=f(ks)`
  overflow-y: auto;
  min-height: 20px;
  max-height: ${({visibleItemsCount:e})=>35*(e||5)}px;
`,ka=o.memo(({pullKeywords:e,id:t,name:a,phrasesQty:n})=>s.jsxs(Oe,{"data-id":t,"data-name":a,onClick:e,isRow:!0,children:[s.jsx("span",{children:a}),s.jsx("span",{children:n})]})),Oe=f.div`
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
          ${gs};
          cursor: pointer;
          border-bottom: solid 1px #d9e0e8;

          &:hover {
            background-color: ${Zs.defaultGrey};
          }
        `:F`
          ${hs};
          margin-top: 10px;
          background-color: #f2f5f7;
          border-top: solid 1px #d9e0e8;
        `}

  padding: ${({theme:e})=>e.spacing.sp8};
`,va=f.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.sp8};
`,Wa=({CustomButton:e,marketplace:t,type:a="dropdown",onClick:n,visibleItemsCount:i,createFolderType:l="modal",appendTo:c,...u})=>{const g=C(Re,S=>S.searchValue,[]),{t:d}=A(),[y,w]=o.useState(!1),k=la({defaultMarketplace:t,notification:u.notification}),{foldersLength:V,handleSearchChange:R,loading:L,status:z,error:v,pullKeywordLoading:m,pullKeywords:b}=ra({marketplaceType:t,type:a,...u,isOpen:y,onClose:()=>w(!1)}),P=()=>{n?n(()=>w(S=>!S)):w(S=>!S)},O=C(te),de=I(H),$e=O&&l==="modal";return o.useEffect(()=>{y||de(!1)},[y,de]),s.jsx(vs,{open:y,appendTo:c,hideOnClickOutside:!$e,strategy:"fixed",zIndex:1e6,onOpenChange:w,disabled:u.disabled,content:s.jsx("div",{children:s.jsxs(it,{...k,children:[s.jsx(Ma,{minHeight:u.direction!=="from"?260:240,children:s.jsxs(Xe,{status:z,error:v,children:[z==="loaded"&&(V>0||O&&l==="table")&&s.jsxs(s.Fragment,{children:[s.jsxs(Fa,{children:[s.jsx(Na,{children:d("addToMyList.chooseFolder")}),s.jsx(Ia,{children:xs[t]})]}),s.jsxs(Sa,{children:[s.jsx(Xe,{status:m}),s.jsx(Fs,{disabled:O,value:g,onChange:R,placeholder:d("addToMyList.searchPlaceholder"),size:"100",onClick:S=>S.stopPropagation()}),s.jsxs(Oe,{children:[s.jsx("span",{children:d("addToMyList.folder")}),s.jsx("span",{children:d("addToMyList.countOfKeywords")})]}),!L||V>0?s.jsx(Ca,{createFolderType:l,pullKeywords:b,visibleItemsCount:i,notification:u.notification}):s.jsx(oa,{})]}),u.direction!=="from"&&s.jsxs(Ta,{children:[l==="modal"&&s.jsx(xa,{}),l==="table"&&s.jsx(ya,{notification:u.notification})]})]}),s.jsx(ba,{direction:u.direction,createFolderType:l})]})}),l==="modal"&&s.jsx(ca,{notification:u.notification})]})}),children:s.jsx("div",{children:e?s.jsx(e,{onClick:P}):s.jsxs(M,{icon:s.jsx(ie,{icon:ys}),buttonType:"tertiary",onClick:P,children:[" ",d("addToMyList.button")]})})})},Fa=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sa=f.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
  position: relative;
`,Ta=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,Na=f.div`
  white-space: nowrap;
  ${ct};
  margin-right: ${({theme:e})=>e.spacing.sp16};
  color: ${({theme:e})=>e.systemColors.black};
`,Ma=f.div`
  min-height: ${({minHeight:e})=>e}px;
  width: 270px;
  padding: 8px 16px;
`,Ia=f.div`
  width: 27px;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
  }
`;export{Wa as A,Ea as N,oa as S,Pa as a,Ms as b,ra as c,na as f,Zs as o,Aa as u};
//# sourceMappingURL=AddToMyListDropdown-EN5Nh0z5.js.map
