import{g5 as o,ed as v,ei as f,em as d}from"./index-3WWdADc-.js";import{aQ as h,ay as g,at as r,ax as b,ah as m,aq as F,as as c}from"./Learn-iEpSD2rS.js";function x(e){var i=h(e),t=i%1;return i===i?t?i-t:i:0}var q=o.isFinite,w=Math.min;function M(e){var i=Math[e];return function(t,n){if(t=v(t),n=n==null?0:w(x(n),292),n&&q(t)){var a=(f(t)+"e").split("e"),s=i(a[0]+"e"+(+a[1]+n));return a=(f(s)+"e").split("e"),+(a[0]+"e"+(+a[1]-n))}return i(t)}}function A(e,i){for(var t,n=-1,a=e.length;++n<a;){var s=i(e[n]);s!==void 0&&(t=t===void 0?s:t+s)}return t}var k=M("round");function D(e){return e&&e.length?A(e,g):0}function L(e){return e&&e.length?r(e):[]}function R(e,i,t){var n=e.length;if(n<2)return n?r(e[0]):[];for(var a=-1,s=Array(n);++a<n;)for(var l=e[a],u=-1;++u<n;)u!=a&&(s[a]=b(s[a]||l,e[u],i,t));return r(m(s,1),i,t)}var N=F(function(e){return R(d(e,c))});export{R as b,k as r,D as s,x as t,L as u,N as x};
//# sourceMappingURL=xor-VMbe2DzQ.js.map
