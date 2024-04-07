const _=(c,o)=>({value:o,set:e=>{c(e)},clear:()=>{c(o)}}),d=(c,o,t,u,e)=>({[t]:_(f=>{var i,n;const E=(i=o()[t])==null?void 0:i.value;c(v=>{var l;return{...v,...(l=e==null?void 0:e.patchEffect)==null?void 0:l.call(e,f),[t]:{...v[t],value:f}}}),(n=e==null?void 0:e.sideEffect)==null||n.call(e,E)},u)});export{d as c};
//# sourceMappingURL=zustandPrimitive-JpIny_aS.js.map
