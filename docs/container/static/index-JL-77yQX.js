import{c as g}from"./index-7v7JHEmS.js";function m(c){return typeof c=="string"||typeof c=="number"}var S=function(){function c(){this._cache={}}var e=c.prototype;return e.set=function(r,s){this._cache[r]=s},e.get=function(r){return this._cache[r]},e.remove=function(r){delete this._cache[r]},e.clear=function(){this._cache={}},e.isValidCacheKey=function(r){return m(r)},c}(),C=S,k=function(){return!0};function K(){for(var c=arguments.length,e=new Array(c),n=0;n<c;n++)e[n]=arguments[n];return function(r,s){if(s)throw new Error('[re-reselect] "options" as second argument is not supported anymore. Please provide an option object as single argument.');var t=typeof r=="function"?{keySelector:r}:Object.assign({},r),y=0,h=e.pop(),f=Array.isArray(e[0])?e[0]:[].concat(e),p=function(){return y++,h.apply(void 0,arguments)};e.push(p);var o=t.cacheObject||new C,d=t.selectorCreator||g,v=o.isValidCacheKey||k;t.keySelectorCreator&&(t.keySelector=t.keySelectorCreator({keySelector:t.keySelector,inputSelectors:f,resultFunc:h}));var a=function(){var u=t.keySelector.apply(t,arguments);if(v(u)){var l=o.get(u);return l===void 0&&(l=d.apply(void 0,e),o.set(u,l)),l.apply(void 0,arguments)}console.warn('[re-reselect] Invalid cache key "'+u+'" has been returned by keySelector function.')};return a.getMatchingSelector=function(){var i=t.keySelector.apply(t,arguments);return o.get(i)},a.removeMatchingSelector=function(){var i=t.keySelector.apply(t,arguments);o.remove(i)},a.clearCache=function(){o.clear()},a.resultFunc=h,a.dependencies=f,a.cache=o,a.recomputations=function(){return y},a.resetRecomputations=function(){return y=0},a.keySelector=t.keySelector,a}}export{K as c};
//# sourceMappingURL=index-JL-77yQX.js.map