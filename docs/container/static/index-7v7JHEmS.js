var g="NOT_FOUND";function q(n){var t;return{get:function(r){return t&&n(t.key,r)?t.value:g},put:function(r,c){t={key:r,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function R(n,t){var e=[];function r(a){var u=e.findIndex(function(s){return t(a,s.key)});if(u>-1){var o=e[u];return u>0&&(e.splice(u,1),e.unshift(o)),o.value}return g}function c(a,u){r(a)===g&&(e.unshift({key:a,value:u}),e.length>n&&e.pop())}function i(){return e}function p(){e=[]}return{get:r,put:c,getEntries:i,clear:p}}var b=function(t,e){return t===e};function x(n){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var c=e.length,i=0;i<c;i++)if(!n(e[i],r[i]))return!1;return!0}}function A(n,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,c=r===void 0?b:r,i=e.maxSize,p=i===void 0?1:i,a=e.resultEqualityCheck,u=x(c),o=p===1?q(u):R(p,u);function s(){var l=o.get(arguments);if(l===g){if(l=n.apply(null,arguments),a){var f=o.getEntries(),v=f.find(function(d){return a(d.value,l)});v&&(l=v.value)}o.put(arguments,l)}return l}return s.clearCache=function(){return o.clear()},s}function F(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function j(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var c=function(){for(var p=arguments.length,a=new Array(p),u=0;u<p;u++)a[u]=arguments[u];var o=0,s,l={memoizeOptions:void 0},f=a.pop();if(typeof f=="object"&&(l=f,f=a.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var v=l,d=v.memoizeOptions,h=d===void 0?e:d,w=Array.isArray(h)?h:[h],y=F(a),E=n.apply(void 0,[function(){return o++,f.apply(null,arguments)}].concat(w)),S=n(function(){for(var O=[],z=y.length,C=0;C<z;C++)O.push(y[C].apply(null,arguments));return s=E.apply(null,O),s});return Object.assign(S,{resultFunc:f,memoizedResultFunc:E,dependencies:y,lastResult:function(){return s},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),S};return c}var N=j(A);export{N as c};
//# sourceMappingURL=index-7v7JHEmS.js.map
