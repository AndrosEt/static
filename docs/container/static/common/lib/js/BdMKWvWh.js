import { y as f, w as _, r as A, z as I, b as z, L as b, M as E, A as O } from "./BsRJmYuf.js";
import { r as B } from "./_JqgLpqe.js";
import { i as P, b as U } from "./C44CHjOW.js";
var M = Object.prototype;
function zt(t) {
  var a = t && t.constructor, r = typeof a == "function" && a.prototype || M;
  return t === r;
}
function L(t, a) {
  for (var r = -1, o = Array(t); ++r < t; )
    o[r] = a(r);
  return o;
}
var S = "[object Arguments]";
function d(t) {
  return f(t) && _(t) == S;
}
var m = Object.prototype, $ = m.hasOwnProperty, C = m.propertyIsEnumerable, F = d(/* @__PURE__ */ function() {
  return arguments;
}()) ? d : function(t) {
  return f(t) && $.call(t, "callee") && !C.call(t, "callee");
};
function G() {
  return !1;
}
var v = typeof exports == "object" && exports && !exports.nodeType && exports, l = v && typeof module == "object" && module && !module.nodeType && module, R = l && l.exports === v, j = R ? A.Buffer : void 0, D = j ? j.isBuffer : void 0, k = D || G, q = "[object Arguments]", V = "[object Array]", H = "[object Boolean]", K = "[object Date]", N = "[object Error]", W = "[object Function]", Y = "[object Map]", Z = "[object Number]", J = "[object Object]", Q = "[object RegExp]", X = "[object Set]", tt = "[object String]", et = "[object WeakMap]", rt = "[object ArrayBuffer]", at = "[object DataView]", ot = "[object Float32Array]", st = "[object Float64Array]", nt = "[object Int8Array]", it = "[object Int16Array]", ct = "[object Int32Array]", pt = "[object Uint8Array]", ut = "[object Uint8ClampedArray]", ft = "[object Uint16Array]", bt = "[object Uint32Array]", e = {};
e[ot] = e[st] = e[nt] = e[it] = e[ct] = e[pt] = e[ut] = e[ft] = e[bt] = !0;
e[q] = e[V] = e[rt] = e[H] = e[at] = e[K] = e[N] = e[W] = e[Y] = e[Z] = e[J] = e[Q] = e[X] = e[tt] = e[et] = !1;
function gt(t) {
  return f(t) && P(t.length) && !!e[_(t)];
}
var x = typeof exports == "object" && exports && !exports.nodeType && exports, n = x && typeof module == "object" && module && !module.nodeType && module, yt = n && n.exports === x, u = yt && I.process, T = function() {
  try {
    var t = n && n.require && n.require("util").types;
    return t || u && u.binding && u.binding("util");
  } catch {
  }
}(), h = T && T.isTypedArray, dt = h ? U(h) : gt, lt = Object.prototype, jt = lt.hasOwnProperty;
function Et(t, a) {
  var r = B(t), o = !r && F(t), c = !r && !o && k(t), g = !r && !o && !c && dt(t), y = r || o || c || g, p = y ? L(t.length, String) : [], w = p.length;
  for (var s in t)
    (a || jt.call(t, s)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    g && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    z(s, w))) && p.push(s);
  return p;
}
function Ot(t, a) {
  return function(r) {
    return t(a(r));
  };
}
function Tt() {
  this.__data__ = new b(), this.size = 0;
}
function ht(t) {
  var a = this.__data__, r = a.delete(t);
  return this.size = a.size, r;
}
function _t(t) {
  return this.__data__.get(t);
}
function At(t) {
  return this.__data__.has(t);
}
var mt = 200;
function vt(t, a) {
  var r = this.__data__;
  if (r instanceof b) {
    var o = r.__data__;
    if (!E || o.length < mt - 1)
      return o.push([t, a]), this.size = ++r.size, this;
    r = this.__data__ = new O(o);
  }
  return r.set(t, a), this.size = r.size, this;
}
function i(t) {
  var a = this.__data__ = new b(t);
  this.size = a.size;
}
i.prototype.clear = Tt;
i.prototype.delete = ht;
i.prototype.get = _t;
i.prototype.has = At;
i.prototype.set = vt;
var Bt = A.Uint8Array;
export {
  i as S,
  Bt as U,
  zt as a,
  Et as b,
  k as c,
  dt as d,
  F as i,
  Ot as o
};
