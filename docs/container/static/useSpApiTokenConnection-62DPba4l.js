import{r as s,g as v}from"./index-VVIvRZBh.js";import{ac as g,ad as I}from"./Learn-nfpDmxZa.js";const B=({region:r,accountType:n,alias:a,marketplace:t,popUp:o})=>{const l=v(n==="vendor"?g:I,{marketplace:t,region:r,alias:a});return o?window.open(l,"_blank","toolbar=1, scrollbars=1, resizable=1, width=1015, height=800"):window.open(l,"_blank")},M=({onSuccess:r,onError:n,onClose:a})=>{const t=s.useRef(null),o=s.useRef(null);return s.useEffect(()=>()=>{t.current&&clearInterval(t.current),o.current&&o.current.close()},[]),{openTokenConnection:s.useCallback(({region:l,accountType:i,marketplace:C,alias:b,popUp:m=!0})=>{var p;t.current&&clearInterval(t.current),(p=o.current)==null||p.close();const e=B({region:l,accountType:i,marketplace:C,alias:b,popUp:m});o.current=e,e==null||e.focus();let c=!1;const u=setInterval(function(){var d,f;try{if(c)clearInterval(u);else{if((e==null?void 0:e.dataStatus)==="spPopupCloseSuccess"&&(c=!0,e==null||e.close(),r==null||r()),(e==null?void 0:e.dataStatus)==="spPopupCloseError"){c=!0;const T=(f=(d=e==null?void 0:e.dataErrorCode)==null?void 0:d.split(":"))==null?void 0:f[2],h=e==null?void 0:e.dataFallbackMessage;e==null||e.close(),n==null||n({errorCode:T,fallbackMessage:h})}e!=null&&e.closed&&!c&&(c=!0,a==null||a())}}catch{return}},1e3);t.current=u},[a,n,r])}};export{M as u};
//# sourceMappingURL=useSpApiTokenConnection-62DPba4l.js.map
