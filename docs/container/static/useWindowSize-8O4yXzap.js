import{r as d,ea as u}from"./index-VVIvRZBh.js";function h(t,i,n){var o=-1,e=t.length;i<0&&(i=-i>e?0:e+i),n=n>e?e:n,n<0&&(n+=e),e=i>n?0:n-i>>>0,i>>>=0;for(var r=Array(e);++o<e;)r[o]=t[o+i];return r}const w=!!(typeof window<"u"&&window.document&&window.document.createElement),s=800,l=(t=s)=>{const[i,n]=d.useState({width:w?window.innerWidth:0,height:w?window==null?void 0:window.innerHeight:0}),[o]=u(i,t||0),e=d.useCallback(()=>{n({width:window.innerWidth,height:window.innerHeight})},[]);return d.useEffect(()=>(w&&window.addEventListener("resize",e),()=>{w&&window.removeEventListener("resize",e)}),[e]),o};export{h as b,l as u};
//# sourceMappingURL=useWindowSize-8O4yXzap.js.map