import { r as oe, _ as Xe, j as fe, T as Qe } from "./_JqgLpqe.js";
import { r as L, g as ea, R as aa } from "./react-D5yUVy0K.js";
var ta = typeof global == "object" && global && global.Object === Object && global, na = typeof self == "object" && self && self.Object === Object && self, se = ta || na || Function("return this")(), I = se.Symbol, ke = Object.prototype, ia = ke.hasOwnProperty, ra = ke.toString, E = I ? I.toStringTag : void 0;
function oa(e) {
  var a = ia.call(e, E), t = e[E];
  try {
    e[E] = void 0;
    var n = !0;
  } catch {
  }
  var i = ra.call(e);
  return n && (a ? e[E] = t : delete e[E]), i;
}
var sa = Object.prototype, la = sa.toString;
function ca(e) {
  return la.call(e);
}
var ua = "[object Null]", da = "[object Undefined]", be = I ? I.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? da : ua : be && be in Object(e) ? oa(e) : ca(e);
}
function ma(e) {
  return e != null && typeof e == "object";
}
var pa = "[object Symbol]";
function le(e) {
  return typeof e == "symbol" || ma(e) && Oe(e) == pa;
}
function ga(e, a) {
  for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; )
    i[t] = a(e[t], t, e);
  return i;
}
var Sa = 1 / 0, Te = I ? I.prototype : void 0, Ae = Te ? Te.toString : void 0;
function Fe(e) {
  if (typeof e == "string")
    return e;
  if (oe(e))
    return ga(e, Fe) + "";
  if (le(e))
    return Ae ? Ae.call(e) : "";
  var a = e + "";
  return a == "0" && 1 / e == -Sa ? "-0" : a;
}
function O(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
var ha = "[object AsyncFunction]", fa = "[object Function]", ba = "[object GeneratorFunction]", Ta = "[object Proxy]";
function Aa(e) {
  if (!O(e))
    return !1;
  var a = Oe(e);
  return a == fa || a == ba || a == ha || a == Ta;
}
var Y = se["__core-js_shared__"], ye = function() {
  var e = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ya(e) {
  return !!ye && ye in e;
}
var Ma = Function.prototype, Pa = Ma.toString;
function Ca(e) {
  if (e != null) {
    try {
      return Pa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var va = /[\\^$.*+?()[\]{}|]/g, za = /^\[object .+?Constructor\]$/, Ia = Function.prototype, wa = Object.prototype, _a = Ia.toString, Ga = wa.hasOwnProperty, Ea = RegExp(
  "^" + _a.call(Ga).replace(va, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ba(e) {
  if (!O(e) || ya(e))
    return !1;
  var a = Aa(e) ? Ea : za;
  return a.test(Ca(e));
}
function Na(e, a) {
  return e == null ? void 0 : e[a];
}
function ce(e, a) {
  var t = Na(e, a);
  return Ba(t) ? t : void 0;
}
var Me = function() {
  try {
    var e = ce(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ra = 9007199254740991, Da = /^(?:0|[1-9]\d*)$/;
function La(e, a) {
  var t = typeof e;
  return a = a ?? Ra, !!a && (t == "number" || t != "symbol" && Da.test(e)) && e > -1 && e % 1 == 0 && e < a;
}
function ka(e, a, t) {
  a == "__proto__" && Me ? Me(e, a, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[a] = t;
}
function He(e, a) {
  return e === a || e !== e && a !== a;
}
var Oa = Object.prototype, Fa = Oa.hasOwnProperty;
function Ha(e, a, t) {
  var n = e[a];
  (!(Fa.call(e, a) && He(n, t)) || t === void 0 && !(a in e)) && ka(e, a, t);
}
var Ka = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xa = /^\w*$/;
function Va(e, a) {
  if (oe(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || le(e) ? !0 : xa.test(e) || !Ka.test(e) || a != null && e in Object(a);
}
var B = ce(Object, "create");
function Ua() {
  this.__data__ = B ? B(null) : {}, this.size = 0;
}
function $a(e) {
  var a = this.has(e) && delete this.__data__[e];
  return this.size -= a ? 1 : 0, a;
}
var Wa = "__lodash_hash_undefined__", Za = Object.prototype, Ya = Za.hasOwnProperty;
function Ja(e) {
  var a = this.__data__;
  if (B) {
    var t = a[e];
    return t === Wa ? void 0 : t;
  }
  return Ya.call(a, e) ? a[e] : void 0;
}
var qa = Object.prototype, ja = qa.hasOwnProperty;
function Xa(e) {
  var a = this.__data__;
  return B ? a[e] !== void 0 : ja.call(a, e);
}
var Qa = "__lodash_hash_undefined__";
function et(e, a) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = B && a === void 0 ? Qa : a, this;
}
function M(e) {
  var a = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
M.prototype.clear = Ua;
M.prototype.delete = $a;
M.prototype.get = Ja;
M.prototype.has = Xa;
M.prototype.set = et;
function at() {
  this.__data__ = [], this.size = 0;
}
function K(e, a) {
  for (var t = e.length; t--; )
    if (He(e[t][0], a))
      return t;
  return -1;
}
var tt = Array.prototype, nt = tt.splice;
function it(e) {
  var a = this.__data__, t = K(a, e);
  if (t < 0)
    return !1;
  var n = a.length - 1;
  return t == n ? a.pop() : nt.call(a, t, 1), --this.size, !0;
}
function rt(e) {
  var a = this.__data__, t = K(a, e);
  return t < 0 ? void 0 : a[t][1];
}
function ot(e) {
  return K(this.__data__, e) > -1;
}
function st(e, a) {
  var t = this.__data__, n = K(t, e);
  return n < 0 ? (++this.size, t.push([e, a])) : t[n][1] = a, this;
}
function G(e) {
  var a = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
G.prototype.clear = at;
G.prototype.delete = it;
G.prototype.get = rt;
G.prototype.has = ot;
G.prototype.set = st;
var lt = ce(se, "Map");
function ct() {
  this.size = 0, this.__data__ = {
    hash: new M(),
    map: new (lt || G)(),
    string: new M()
  };
}
function ut(e) {
  var a = typeof e;
  return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? e !== "__proto__" : e === null;
}
function x(e, a) {
  var t = e.__data__;
  return ut(a) ? t[typeof a == "string" ? "string" : "hash"] : t.map;
}
function dt(e) {
  var a = x(this, e).delete(e);
  return this.size -= a ? 1 : 0, a;
}
function mt(e) {
  return x(this, e).get(e);
}
function pt(e) {
  return x(this, e).has(e);
}
function gt(e, a) {
  var t = x(this, e), n = t.size;
  return t.set(e, a), this.size += t.size == n ? 0 : 1, this;
}
function v(e) {
  var a = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++a < t; ) {
    var n = e[a];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = ct;
v.prototype.delete = dt;
v.prototype.get = mt;
v.prototype.has = pt;
v.prototype.set = gt;
var St = "Expected a function";
function ue(e, a) {
  if (typeof e != "function" || a != null && typeof a != "function")
    throw new TypeError(St);
  var t = function() {
    var n = arguments, i = a ? a.apply(this, n) : n[0], r = t.cache;
    if (r.has(i))
      return r.get(i);
    var o = e.apply(this, n);
    return t.cache = r.set(i, o) || r, o;
  };
  return t.cache = new (ue.Cache || v)(), t;
}
ue.Cache = v;
var ht = 500;
function ft(e) {
  var a = ue(e, function(n) {
    return t.size === ht && t.clear(), n;
  }), t = a.cache;
  return a;
}
var bt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tt = /\\(\\)?/g, At = ft(function(e) {
  var a = [];
  return e.charCodeAt(0) === 46 && a.push(""), e.replace(bt, function(t, n, i, r) {
    a.push(i ? r.replace(Tt, "$1") : n || t);
  }), a;
});
function yt(e) {
  return e == null ? "" : Fe(e);
}
function Ke(e, a) {
  return oe(e) ? e : Va(e, a) ? [e] : At(yt(e));
}
var Mt = 1 / 0;
function xe(e) {
  if (typeof e == "string" || le(e))
    return e;
  var a = e + "";
  return a == "0" && 1 / e == -Mt ? "-0" : a;
}
function Pt(e, a) {
  a = Ke(a, e);
  for (var t = 0, n = a.length; e != null && t < n; )
    e = e[xe(a[t++])];
  return t && t == n ? e : void 0;
}
function Pe(e, a, t) {
  var n = e == null ? void 0 : Pt(e, a);
  return n === void 0 ? t : n;
}
function Ct(e, a, t, n) {
  if (!O(e))
    return e;
  a = Ke(a, e);
  for (var i = -1, r = a.length, o = r - 1, s = e; s != null && ++i < r; ) {
    var l = xe(a[i]), m = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var d = s[l];
      m = n ? n(d, l, s) : void 0, m === void 0 && (m = O(d) ? d : La(a[i + 1]) ? [] : {});
    }
    Ha(s, l, m), s = s[l];
  }
  return e;
}
function Ce(e, a, t) {
  return e == null ? e : Ct(e, a, t);
}
var vt = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ve = (e) => {
  let a;
  const t = /* @__PURE__ */ new Set(), n = (d, c) => {
    const u = typeof d == "function" ? d(a) : d;
    if (!Object.is(u, a)) {
      const p = a;
      a = c ?? (typeof u != "object" || u === null) ? u : Object.assign({}, a, u), t.forEach((f) => f(a, p));
    }
  }, i = () => a, l = { setState: n, getState: i, getInitialState: () => m, subscribe: (d) => (t.add(d), () => t.delete(d)), destroy: () => {
    (vt ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, m = a = e(n, i, l);
  return l;
}, zt = (e) => e ? ve(e) : ve;
var Ve = { exports: {} }, J = {}, q = { exports: {} }, j = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function It() {
  if (ze)
    return j;
  ze = 1;
  var e = L;
  function a(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var t = typeof Object.is == "function" ? Object.is : a, n = e.useState, i = e.useEffect, r = e.useLayoutEffect, o = e.useDebugValue;
  function s(c, u) {
    var p = u(), f = n({ inst: { value: p, getSnapshot: u } }), g = f[0].inst, T = f[1];
    return r(function() {
      g.value = p, g.getSnapshot = u, l(g) && T({ inst: g });
    }, [c, p, u]), i(function() {
      return l(g) && T({ inst: g }), c(function() {
        l(g) && T({ inst: g });
      });
    }, [c]), o(p), p;
  }
  function l(c) {
    var u = c.getSnapshot;
    c = c.value;
    try {
      var p = u();
      return !t(c, p);
    } catch {
      return !0;
    }
  }
  function m(c, u) {
    return u();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : s;
  return j.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, j;
}
var Ie;
function wt() {
  return Ie || (Ie = 1, q.exports = It()), q.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function _t() {
  if (we)
    return J;
  we = 1;
  var e = L, a = wt();
  function t(m, d) {
    return m === d && (m !== 0 || 1 / m === 1 / d) || m !== m && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, i = a.useSyncExternalStore, r = e.useRef, o = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return J.useSyncExternalStoreWithSelector = function(m, d, c, u, p) {
    var f = r(null);
    if (f.current === null) {
      var g = { hasValue: !1, value: null };
      f.current = g;
    } else
      g = f.current;
    f = s(function() {
      function pe(A) {
        if (!ge) {
          if (ge = !0, Z = A, A = u(A), p !== void 0 && g.hasValue) {
            var z = g.value;
            if (p(z, A))
              return k = z;
          }
          return k = A;
        }
        if (z = k, n(Z, A))
          return z;
        var he = u(A);
        return p !== void 0 && p(z, he) ? z : (Z = A, k = he);
      }
      var ge = !1, Z, k, Se = c === void 0 ? null : c;
      return [function() {
        return pe(d());
      }, Se === null ? void 0 : function() {
        return pe(Se());
      }];
    }, [d, c, u, p]);
    var T = i(m, f[0], f[1]);
    return o(function() {
      g.hasValue = !0, g.value = T;
    }, [T]), l(T), T;
  }, J;
}
Ve.exports = _t();
var Gt = Ve.exports;
const Et = /* @__PURE__ */ ea(Gt);
var Ue = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Bt } = aa, { useSyncExternalStoreWithSelector: Nt } = Et;
let _e = !1;
const Rt = (e) => e;
function Dt(e, a = Rt, t) {
  (Ue ? "production" : void 0) !== "production" && t && !_e && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), _e = !0);
  const n = Nt(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    a,
    t
  );
  return Bt(n), n;
}
const Ge = (e) => {
  (Ue ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const a = typeof e == "function" ? zt(e) : e, t = (n, i) => Dt(a, n, i);
  return Object.assign(t, a), t;
}, Lt = (e) => e ? Ge(e) : Ge;
var $e = Symbol.for("immer-nothing"), Ee = Symbol.for("immer-draftable"), S = Symbol.for("immer-state");
function b(e, ...a) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var w = Object.getPrototypeOf;
function _(e) {
  return !!e && !!e[S];
}
function P(e) {
  var a;
  return e ? We(e) || Array.isArray(e) || !!e[Ee] || !!((a = e.constructor) != null && a[Ee]) || U(e) || $(e) : !1;
}
var kt = Object.prototype.constructor.toString();
function We(e) {
  if (!e || typeof e != "object")
    return !1;
  const a = w(e);
  if (a === null)
    return !0;
  const t = Object.hasOwnProperty.call(a, "constructor") && a.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === kt;
}
function N(e, a) {
  V(e) === 0 ? Object.entries(e).forEach(([t, n]) => {
    a(t, n, e);
  }) : e.forEach((t, n) => a(n, t, e));
}
function V(e) {
  const a = e[S];
  return a ? a.type_ : Array.isArray(e) ? 1 : U(e) ? 2 : $(e) ? 3 : 0;
}
function ee(e, a) {
  return V(e) === 2 ? e.has(a) : Object.prototype.hasOwnProperty.call(e, a);
}
function Ze(e, a, t) {
  const n = V(e);
  n === 2 ? e.set(a, t) : n === 3 ? e.add(t) : e[a] = t;
}
function Ot(e, a) {
  return e === a ? e !== 0 || 1 / e === 1 / a : e !== e && a !== a;
}
function U(e) {
  return e instanceof Map;
}
function $(e) {
  return e instanceof Set;
}
function y(e) {
  return e.copy_ || e.base_;
}
function ae(e, a) {
  if (U(e))
    return new Map(e);
  if ($(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!a && We(e))
    return w(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const t = Object.getOwnPropertyDescriptors(e);
  delete t[S];
  let n = Reflect.ownKeys(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], o = t[r];
    o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[r] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: o.enumerable,
      value: e[r]
    });
  }
  return Object.create(w(e), t);
}
function de(e, a = !1) {
  return W(e) || _(e) || !P(e) || (V(e) > 1 && (e.set = e.add = e.clear = e.delete = Ft), Object.freeze(e), a && N(e, (t, n) => de(n, !0))), e;
}
function Ft() {
  b(2);
}
function W(e) {
  return Object.isFrozen(e);
}
var Ht = {};
function C(e) {
  const a = Ht[e];
  return a || b(0, e), a;
}
var R;
function Ye() {
  return R;
}
function Kt(e, a) {
  return {
    drafts_: [],
    parent_: e,
    immer_: a,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Be(e, a) {
  a && (C("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = a);
}
function te(e) {
  ne(e), e.drafts_.forEach(xt), e.drafts_ = null;
}
function ne(e) {
  e === R && (R = e.parent_);
}
function Ne(e) {
  return R = Kt(R, e);
}
function xt(e) {
  const a = e[S];
  a.type_ === 0 || a.type_ === 1 ? a.revoke_() : a.revoked_ = !0;
}
function Re(e, a) {
  a.unfinalizedDrafts_ = a.drafts_.length;
  const t = a.drafts_[0];
  return e !== void 0 && e !== t ? (t[S].modified_ && (te(a), b(4)), P(e) && (e = F(a, e), a.parent_ || H(a, e)), a.patches_ && C("Patches").generateReplacementPatches_(
    t[S].base_,
    e,
    a.patches_,
    a.inversePatches_
  )) : e = F(a, t, []), te(a), a.patches_ && a.patchListener_(a.patches_, a.inversePatches_), e !== $e ? e : void 0;
}
function F(e, a, t) {
  if (W(a))
    return a;
  const n = a[S];
  if (!n)
    return N(
      a,
      (i, r) => De(e, n, a, i, r, t)
    ), a;
  if (n.scope_ !== e)
    return a;
  if (!n.modified_)
    return H(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let r = i, o = !1;
    n.type_ === 3 && (r = new Set(i), i.clear(), o = !0), N(
      r,
      (s, l) => De(e, n, i, s, l, t, o)
    ), H(e, i, !1), t && e.patches_ && C("Patches").generatePatches_(
      n,
      t,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function De(e, a, t, n, i, r, o) {
  if (_(i)) {
    const s = r && a && a.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ee(a.assigned_, n) ? r.concat(n) : void 0, l = F(e, i, s);
    if (Ze(t, n, l), _(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    o && t.add(i);
  if (P(i) && !W(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    F(e, i), (!a || !a.scope_.parent_) && H(e, i);
  }
}
function H(e, a, t = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && de(a, t);
}
function Vt(e, a) {
  const t = Array.isArray(e), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: a ? a.scope_ : Ye(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: a,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, r = me;
  t && (i = [n], r = D);
  const { revoke: o, proxy: s } = Proxy.revocable(i, r);
  return n.draft_ = s, n.revoke_ = o, s;
}
var me = {
  get(e, a) {
    if (a === S)
      return e;
    const t = y(e);
    if (!ee(t, a))
      return Ut(e, t, a);
    const n = t[a];
    return e.finalized_ || !P(n) ? n : n === X(e.base_, a) ? (Q(e), e.copy_[a] = re(n, e)) : n;
  },
  has(e, a) {
    return a in y(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(y(e));
  },
  set(e, a, t) {
    const n = Je(y(e), a);
    if (n != null && n.set)
      return n.set.call(e.draft_, t), !0;
    if (!e.modified_) {
      const i = X(y(e), a), r = i == null ? void 0 : i[S];
      if (r && r.base_ === t)
        return e.copy_[a] = t, e.assigned_[a] = !1, !0;
      if (Ot(t, i) && (t !== void 0 || ee(e.base_, a)))
        return !0;
      Q(e), ie(e);
    }
    return e.copy_[a] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || a in e.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(e.copy_[a]) || (e.copy_[a] = t, e.assigned_[a] = !0), !0;
  },
  deleteProperty(e, a) {
    return X(e.base_, a) !== void 0 || a in e.base_ ? (e.assigned_[a] = !1, Q(e), ie(e)) : delete e.assigned_[a], e.copy_ && delete e.copy_[a], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, a) {
    const t = y(e), n = Reflect.getOwnPropertyDescriptor(t, a);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || a !== "length",
      enumerable: n.enumerable,
      value: t[a]
    };
  },
  defineProperty() {
    b(11);
  },
  getPrototypeOf(e) {
    return w(e.base_);
  },
  setPrototypeOf() {
    b(12);
  }
}, D = {};
N(me, (e, a) => {
  D[e] = function() {
    return arguments[0] = arguments[0][0], a.apply(this, arguments);
  };
});
D.deleteProperty = function(e, a) {
  return D.set.call(this, e, a, void 0);
};
D.set = function(e, a, t) {
  return me.set.call(this, e[0], a, t, e[0]);
};
function X(e, a) {
  const t = e[S];
  return (t ? y(t) : e)[a];
}
function Ut(e, a, t) {
  var i;
  const n = Je(a, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Je(e, a) {
  if (!(a in e))
    return;
  let t = w(e);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, a);
    if (n)
      return n;
    t = w(t);
  }
}
function ie(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ie(e.parent_));
}
function Q(e) {
  e.copy_ || (e.copy_ = ae(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var $t = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (a, t, n) => {
      if (typeof a == "function" && typeof t != "function") {
        const r = t;
        t = a;
        const o = this;
        return function(l = r, ...m) {
          return o.produce(l, (d) => t.call(this, d, ...m));
        };
      }
      typeof t != "function" && b(6), n !== void 0 && typeof n != "function" && b(7);
      let i;
      if (P(a)) {
        const r = Ne(this), o = re(a, void 0);
        let s = !0;
        try {
          i = t(o), s = !1;
        } finally {
          s ? te(r) : ne(r);
        }
        return Be(r, n), Re(i, r);
      } else if (!a || typeof a != "object") {
        if (i = t(a), i === void 0 && (i = a), i === $e && (i = void 0), this.autoFreeze_ && de(i, !0), n) {
          const r = [], o = [];
          C("Patches").generateReplacementPatches_(a, i, r, o), n(r, o);
        }
        return i;
      } else
        b(1, a);
    }, this.produceWithPatches = (a, t) => {
      if (typeof a == "function")
        return (o, ...s) => this.produceWithPatches(o, (l) => a(l, ...s));
      let n, i;
      return [this.produce(a, t, (o, s) => {
        n = o, i = s;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    P(e) || b(8), _(e) && (e = Wt(e));
    const a = Ne(this), t = re(e, void 0);
    return t[S].isManual_ = !0, ne(a), t;
  }
  finishDraft(e, a) {
    const t = e && e[S];
    (!t || !t.isManual_) && b(9);
    const { scope_: n } = t;
    return Be(n, a), Re(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, a) {
    let t;
    for (t = a.length - 1; t >= 0; t--) {
      const i = a[t];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    t > -1 && (a = a.slice(t + 1));
    const n = C("Patches").applyPatches_;
    return _(e) ? n(e, a) : this.produce(
      e,
      (i) => n(i, a)
    );
  }
};
function re(e, a) {
  const t = U(e) ? C("MapSet").proxyMap_(e, a) : $(e) ? C("MapSet").proxySet_(e, a) : Vt(e, a);
  return (a ? a.scope_ : Ye()).drafts_.push(t), t;
}
function Wt(e) {
  return _(e) || b(10, e), qe(e);
}
function qe(e) {
  if (!P(e) || W(e))
    return e;
  const a = e[S];
  let t;
  if (a) {
    if (!a.modified_)
      return a.base_;
    a.finalized_ = !0, t = ae(e, a.scope_.immer_.useStrictShallowCopy_);
  } else
    t = ae(e, !0);
  return N(t, (n, i) => {
    Ze(t, n, qe(i));
  }), a && (a.finalized_ = !1), t;
}
var h = new $t(), Le = h.produce;
h.produceWithPatches.bind(
  h
);
h.setAutoFreeze.bind(h);
h.setUseStrictShallowCopy.bind(h);
h.applyPatches.bind(h);
h.createDraft.bind(h);
h.finishDraft.bind(h);
const Zt = (e, a, t) => {
  const n = Pe(e.getState(), a, "_empty");
  if (n === "_empty")
    throw new Error("[leitenPrimitive] The defined path does not exist");
  const i = () => {
    const s = Pe(e.getState(), a, "_empty");
    return s !== "_empty" ? s : n;
  };
  return { set: (s) => {
    var c;
    const l = i(), m = Le(e.getState(), (u) => {
      Ce(u, a, s);
    }), d = t != null && t.patchEffect ? { ...m, ...t.patchEffect(s) } : m;
    e.setState(d), (c = t == null ? void 0 : t.sideEffect) == null || c.call(t, { prev: l, next: s });
  }, get: i, clear: () => {
    const s = Le(e.getState(), (l) => {
      Ce(l, a, n);
    });
    e.setState(s);
  } };
}, Yt = {
  Helium10_ALaCarte: "A La Carte",
  Helium10_ALaCarteAnnual: "A La Carte",
  Helium10_Diamond: "Diamond",
  Helium10_DiamondAnnual: "Diamond",
  Helium10_Elite: "Elite",
  Helium10_Free: "Free",
  Helium10_Gold: "Gold",
  Helium10_GoldAnnual: "Gold",
  Helium10_Platinum: "Platinum",
  Helium10_PlatinumAnnual: "Platinum",
  Helium10_Platinum_FastAction: "Platinum",
  Helium10_Starter: "Starter",
  Helium10_StarterAnnual: "Starter",
  Helium10_Enterprise: "Enterprise"
}, Jt = {
  month: "Mon",
  freeLaunchesLeft: "Verbleibende kostenlose Suchanfragen:",
  pleaseWait: "Bitte, warten Sie...",
  selected: "Ausgewählt",
  copyToClipboard: "ASIN {asin} wurde erfolgreich in die Zwischenablage kopiert",
  item_one: "Artikel",
  item_other: "Artikel",
  noOptions: "Keine Optionen"
}, qt = {
  min: "Min",
  max: "Max",
  anyKeyword: "Geben Sie ein beliebiges Keyword ein …",
  search: "Suchen",
  selectOrCreateOption: "Wähle oder erstelle eine Option"
}, jt = {
  upgrade: "Upgrade",
  noThanks: "Nein, danke",
  upgradeForUnlimited: "Upgrade auf Unbegrenzt",
  seeAnalysis: "Analyse ansehen",
  show: "Anzeigen",
  hide: "Ausblenden",
  clipboardCopy: "In die Zwischenablage kopiert",
  undo: "Aufmachen",
  filters: "Filter",
  upload: "Hochladen",
  customize: "Anpassen",
  backToTop: "Zurück nach oben"
}, Xt = {
  fullAccess: "Erwerben Sie jetzt ein Upgrade für vollen Zugriff auf die Chrome-Erweiterung",
  unlimitedLaunches: "Erhalten Sie unbegrenzten Zugriff auf Xray, Demand Analyzer und vieles mehr",
  essentialFeatures: "Voller Zugriff auf diese wesentlichen Funktionen:",
  proposals: {
    chromeExtension: "Unbegrenzter Zugriff auf die Chrome-Erweiterung",
    freedomTicket: "Freedom Ticket Amazon-Trainingskurs",
    blackBox: "Black Box Produktrecherche",
    trendster: "Trendster Amazon Trend-Recherche",
    magnet: "Magnet<sup>2</sup> &nbsp; Keyword-Recherche",
    scribbles: "Scribbles Listing-Optimierer",
    indexChecker: "Index-Prüfer"
  }
}, Qt = {
  title: "Abonnement erforderlich",
  text: "Suchvolumen-Verlauf ist nur für Helium 10 Mitglieder im Abonnement verfügbar. Bitte upgraden Sie auf einen unserer Tarife für unbegrenzten Zugriff"
}, en = {
  title: "Keine Ergebnisse gefunden",
  text: "Bitte gehen Sie zurück und versuchen Sie es mit einem anderen Keyword",
  buttonText: "Zurück zu Alibaba"
}, an = {
  exportTable: "Tabelle exportieren",
  exportData: "Daten exportieren…",
  columnCustomization: "Anpassung der Spalten",
  restoreDefaults: "Standardeinstellungen wiederherstellen",
  selectAll: "Alle auswählen",
  itemsPerPage: "Artikel pro Seite:",
  rowLimit: "Zeilen pro Seite:",
  countViewingItems: "Sie sehen {range} von {total} {items}",
  countSelectedItems: "{count} {items} ausgewählt",
  error: "Ups. Fehler!",
  noData: "Keine Daten",
  products: {
    one: "{count} Produkt",
    other: "{count} Produkten"
  },
  keywords: {
    one: "Keyword",
    other: "Keywords"
  },
  selected: "ausgewählt",
  export: {
    csv: "… als CSV-Datei",
    xlsx: "… als XLSX-Datei"
  },
  delete: "Löschen",
  compactMode: "Kompaktmodus",
  columns: "Spalten",
  contentSize: "Inhaltsgröße",
  productImageSize: "Produktbildgröße",
  tableCustomization: "Tabellenanpassung",
  backToTop: "Zurück nach oben",
  additionalInformation: {
    title: "Zusätzliche Informationen zu Hover",
    titleTooltip: "Diese Einstellungen gelten für alle Tabellen in Helium 10.",
    top10RankedProductsForKeyword: "Die 10 am besten bewerteten Produkte für Keyword",
    asinDetails: "ASIN-Details"
  }
}, tn = {
  showTips: "Tipps einblenden",
  hideTips: "Tipps ausblenden"
}, nn = {
  asin: "ASIN:",
  sku: "SKU:",
  price: "Preis: {price}",
  quantity: "Menge: {quantity}"
}, rn = {
  orders: "Aufträge",
  grossSales: "Bruttoabsatz",
  today: "Heute, {date}",
  yesterday: "Gestern",
  change: "Veränderung über 1 Tag"
}, on = {
  amazon: "Das Produkt, das Sie gerade analysieren, wird als Amazon’s Choice für dieses Keyword angezeigt.",
  amazonDifferent: "Es wird ein anderes Produkt als Amazon’s Choice für dieses Keyword angezeigt.",
  walmart: "Es wird ein anderes Produkt als Walmart’s Choice für dieses Keyword angezeigt.",
  walmartDifferent: "Es wird ein anderes Produkt als Walmart’s Choice für dieses Keyword angezeigt."
}, sn = {
  min: "Min",
  max: "Max"
}, ln = {
  copy: "{label} kopieren",
  copied: "{label} kopiert",
  myProduct: "Mein Produkt",
  new: "Neu"
}, cn = {
  more: "Mehr anzeigen",
  less: "Weniger anzeigen",
  filters: {
    show: "Filter einblenden",
    hide: "Filter ausblenden"
  }
}, un = {
  time: "Zeit",
  price: "Preis",
  rank: "Rang",
  rating: "Bewertung",
  salesRank: "Verkaufsrang",
  newPrice: "Neuer Preis",
  listPrice: "List-Preis",
  values: "Werte",
  sales: "Absatz",
  trendLine: "Trendlinie",
  movingAverage: "Gleitender 7-Tage-Durchschnitt",
  reviews: "Bewertungen",
  numberOfReviews: "Anzahl der Bewertungen",
  searchVolume: "Suchvolumen",
  reviewCount: "Bewertungsanzahl",
  downloads: {
    csv: "CSV-Bericht herunterladen",
    xls: "XLS herunterladen",
    png: "PNG-Bild herunterladen",
    jpeg: "JPEG-Bild herunterladen"
  },
  resetZoom: "Zoom zurücksetzen",
  progress: "Progress",
  timetable: "Zeit",
  noData: "Keine Daten"
}, dn = {
  week: "Letzte 7 Tage",
  twoWeek: "Letzte 15 Tage",
  month: "Letzter Monat",
  custom: "Benutzerdefinierter Bereich",
  preset: "Voreingestellt",
  minRangeInDays: "Du kannst den Mindestbereich von {minRangeInDays} Tagen auswählen"
}, mn = {
  AF: "Afghanistan",
  AX: "Åland-Inseln",
  AL: "Albanien",
  DZ: "Algerien",
  AS: "Amerikanischen Samoa-Inseln",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarktis",
  AG: "Antigua und Barbuda",
  AR: "Argentinien",
  AM: "Armenien",
  AW: "Aruba",
  AU: "Australien",
  AT: "Österreich",
  AZ: "Aserbaidschan",
  BS: "Bahamas",
  BH: "Bahrein",
  BD: "Bangladesch",
  BB: "Barbados",
  BY: "Weißrussland",
  BE: "Belgien",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermudas",
  BT: "Bhutan",
  BO: "Bolivien",
  BQ: "Karibische Niederlande",
  BA: "Bosnien und Herzegowina",
  BW: "Botswana",
  BV: "Bouvet-Insel",
  BR: "Brasilien",
  IO: "Britisches Territorium des Indischen Ozeans",
  BN: "Brunei Darussalam",
  BG: "Bulgarien",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Kambodscha",
  CM: "Kamerun",
  CA: "Kanada",
  KY: "Cayman Inseln",
  CF: "Zentralafrikanische Republik",
  TD: "Tschad",
  CL: "Chile",
  CN: "China",
  CX: "Weihnachtsinsel",
  CC: "Kokosinseln (Keelinginseln)",
  CO: "Kolumbien",
  KM: "Komoren",
  CG: "Kongo",
  CD: "Kongo",
  CK: "Cookinseln",
  CR: "Costa Rica",
  CI: "Elfenbeinküste",
  HR: "Kroatien",
  CU: "Kuba",
  CW: "Curacao",
  CY: "Zypern",
  CZ: "Tschechien",
  DK: "Dänemark",
  DJ: "Dschibuti",
  DM: "Dominika",
  DO: "Dominikanische Republik",
  EC: "Ecuador",
  EG: "Ägypten",
  SV: "El Salvador",
  GQ: "Äquatorialguinea",
  ER: "Eritrea",
  EE: "Estland",
  SZ: "Eswatini",
  ET: "Äthiopien",
  FK: "Falklandinseln (Malvinas)",
  FO: "Färöer Inseln",
  FJ: "Fidschi",
  FI: "Finnland",
  FR: "Frankreich",
  GF: "Französisch-Guayana",
  PF: "Französisch Polynesien",
  TF: "Südfranzösische Territorien",
  GA: "Gabun",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Deutschland",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Griechenland",
  GL: "Grönland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard-Insel und McDonald-Inseln",
  VA: "Heiliger Stuhl",
  HN: "Honduras",
  HK: "Hongkong",
  HU: "Ungarn",
  IS: "Island",
  IN: "Indien",
  ID: "Indonesien",
  IR: "Iran",
  IQ: "Irak",
  IE: "Irland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italien",
  JM: "Jamaika",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordanien",
  KZ: "Kasachstan",
  KE: "Kenia",
  KI: "Kiribati",
  KP: "Korea",
  KR: "Korea, Republik von",
  KW: "Kuwait",
  KG: "Kirgistan",
  LA: "Demokratische Volksrepublik Laos",
  LV: "Lettland",
  LB: "Libanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyen",
  LI: "Liechtenstein",
  LT: "Litauen",
  LU: "Luxemburg",
  MO: "Macau",
  MG: "Madagaskar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Malediven",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshallinseln",
  MQ: "Martinique",
  MR: "Mauretanien",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexiko",
  FM: "Mikronesien",
  MD: "Moldau, Republik",
  MC: "Monaco",
  MN: "Mongolei",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Marokko",
  MZ: "Mosambik",
  MM: "Burma",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Niederlande",
  NC: "Neu-Kaledonien",
  NZ: "Neuseeland",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolkinsel",
  MK: "Nordmazedonien",
  MP: "Nördliche Marianneninseln",
  NO: "Norwegen",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palästina, Staat",
  PA: "Panama",
  PG: "Papua Neu-Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippinen",
  PN: "Pitcairn",
  PL: "Polen",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Katar",
  RE: "Réunion",
  RO: "Rumänien",
  RU: "Russische Föderation",
  RW: "Ruanda",
  BL: "Sankt Barthélemy",
  SH: "St. Helena, Himmelfahrt und Tristan da Cunha",
  KN: "St. Kitts und Nevis",
  LC: "St. Lucia",
  MF: "Saint Martin (französischer Teil)",
  PM: "St. Pierre und Miquelon",
  VC: "St. Vincent und die Grenadinen",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome und Principe",
  SA: "Saudi-Arabien",
  SN: "Senegal",
  RS: "Serbien",
  SC: "Seychellen",
  SL: "Sierra Leone",
  SG: "Singapur",
  SX: "Sint Maarten (niederländischer Teil)",
  SK: "Slowakei",
  SI: "Slowenien",
  SB: "Salomon-Inseln",
  SO: "Somalia",
  ZA: "Südafrika",
  GS: "Süd-Georgien und die südlichen Sandwich-Inseln",
  SS: "Südsudan",
  ES: "Spanien",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Surinam",
  SJ: "Spitzbergen und Jan Mayen",
  SE: "Schweden",
  CH: "Schweiz",
  SY: "Syrische Arabische Republik",
  TW: "Taiwan, Provinz Chinas",
  TJ: "Tadschikistan",
  TZ: "Tansania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad und Tobago",
  TN: "Tunesien",
  TR: "Türkei",
  TM: "Turkmenistan",
  TC: "Turks- und Caicosinseln",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "Vereinigte Arabische Emirate",
  GB: "Vereinigtes Königreich Großbritannien und Nordirland",
  US: "Vereinigte Staaten von Amerika",
  UM: "Kleinere abgelegene Inseln der Vereinigten Staaten",
  UY: "Uruguay",
  UZ: "Usbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Jungferninseln",
  VI: "Jungferninseln",
  WF: "Wallis und Futuna",
  EH: "Westsahara",
  YE: "Jemen",
  ZM: "Sambia",
  ZW: "Zimbabwe"
}, pn = {
  active: "Aktiv",
  amazonSellerAccount: "Amazon-Verkäuferkonto",
  showAuthToken: "Authentifizierungstoken anzeigen",
  addNickname: "Spitznamen hinzufügen",
  editNickname: "Spitznamen bearbeiten",
  inactive: "Inaktiv",
  walmartSellerAccount: "Walmart-Konto",
  update: "Aktualisieren",
  googleAds: "Google Ads"
}, gn = {
  small: "Klein",
  medium: "Mittel",
  large: "Groß",
  extraLarge: "Extra groß"
}, Sn = {
  selectAllOption: "Alle auswählen",
  noneOption: "Keine"
}, hn = {
  description: "Schritt {current} von {stepsLength}: "
}, fn = {
  categoryBSR: {
    mainCategoryTooltip: "Hauptkategorie BSR",
    subcategoryTooltip: "Unterkategorie BSR",
    subcategoryTemporaryTooltip: "Unterkategorie"
  },
  price: {
    priceTooltip: "Aktueller Preis",
    priceTrendTooltip: "90 Tage Preistrend"
  },
  reviews: {
    numberOfReviewTooltip: "Gesamtzahl der Kundenbewertungen für ein Produkt",
    reviewRatingTooltip: "Bewertungsdurchschnitt"
  },
  lastYearSales: {
    salesTooltip: "Absatz des Vorjahres (Einheiten)",
    salesYearOverYearTooltip: "Umsatz Jahr für Jahr"
  },
  monthlySales: {
    salesTooltip: "Monatliche Verkäufe (Einheiten)",
    salesTrendTooltip: "90-Tage-Verkaufstrend"
  },
  seller: {
    sellerNameTooltip: "Verkäufername",
    numberOfSellersTooltip: "Anzahl der aktiven Verkäufer"
  },
  shippingDetails: {
    productSizeTooltip: "Die Produktgröße bestimmt die FBA-Versandkosten",
    dimensionsTooltip: "Paketabmessungen (Zoll)"
  }
}, bn = {
  description: "Dateiformat: JPG oder PNG",
  note: "Maximale Größe: 200 KB",
  deleteImage: "Bild löschen"
}, Tn = {
  most: "Größte Opportunity",
  mostTooltip: "Einfacheres Vordringen in die Nische aufgrund der Marktreife des Wettbewerbs",
  least: "Geringste Opportunity",
  leastTooltip: "Schwierigeres Vordringen in die Nische aufgrund der Marktreife des Wettbewerbs"
}, An = {
  janSept: "Jan-Sep",
  octDec: "Okt-Dez"
}, yn = {
  1: "Kleine Standardgröße",
  2: "Große Standardgröße",
  3: "Kleine Übergröße",
  4: "Mittlere Übergröße",
  5: "Große Übergröße",
  6: "Sonderübergröße",
  7: "Umschlag",
  8: "Klein und leicht",
  9: "Kleiner Brief",
  10: "Großer Brief",
  11: "Extragroßer Brief",
  12: "Kleiner Umschlag",
  13: "Standard-Umschlag",
  14: "Großer Umschlag",
  15: "Standard-Paket",
  16: "Klein",
  17: "Standardgröße",
  18: "Übergröße",
  19: "Standard-Übergröße",
  20: "Schwer und sperrig",
  21: "Übergröße",
  22: "Extra großer Umschlag",
  23: "Kleines Paket",
  "-1": "N/A"
}, Mn = "You do not have access to this tool. Please contact your plan administrator for access.", Pn = {
  plans: Yt,
  common: Jt,
  placeholders: qt,
  buttons: jt,
  upgrade: Xt,
  subscriptionRequired: Qt,
  notFoundResult: en,
  table: an,
  tips: tn,
  orderListItem: nn,
  businessOverview: rn,
  choiceBadge: on,
  minmax: sn,
  productSummary: ln,
  showMore: cn,
  charts: un,
  calendar: dn,
  switch: {
    edited: "Bearbeitet"
  },
  countries: mn,
  token: pn,
  size: gn,
  ultraSelect: Sn,
  stepper: hn,
  cells: fn,
  uploadImage: bn,
  opportunity: Tn,
  storageFee: An,
  sizeTier: yn,
  subAccountDoNotHaveAccess: Mn
}, Cn = {
  Helium10_ALaCarte: "A La Carte",
  Helium10_ALaCarteAnnual: "A La Carte",
  Helium10_Diamond: "Diamond",
  Helium10_DiamondAnnual: "Diamond",
  Helium10_Elite: "Elite",
  Helium10_Free: "Free",
  Helium10_Gold: "Gold",
  Helium10_GoldAnnual: "Gold",
  Helium10_Platinum: "Platinum",
  Helium10_PlatinumAnnual: "Platinum",
  Helium10_Platinum_FastAction: "Platinum",
  Helium10_Starter: "Starter",
  Helium10_StarterAnnual: "Starter",
  Helium10_Enterprise: "Enterprise"
}, vn = {
  month: "mo",
  freeLaunchesLeft: "Free launches left:",
  pleaseWait: "Please, wait...",
  selected: "Selected",
  copyToClipboard: "ASIN {asin} is copied to clipboard successfully",
  item_one: "item",
  item_other: "items",
  noOptions: "No options"
}, zn = {
  min: "Min",
  max: "Max",
  anyKeyword: "Enter in any keyword...",
  search: "Search",
  selectOrCreateOption: "Select or create an option"
}, In = {
  upgrade: "Upgrade",
  noThanks: "No, thanks",
  upgradeForUnlimited: "Upgrade for unlimited",
  seeAnalysis: "See analysis",
  show: "Show",
  hide: "Hide",
  clipboardCopy: "Copied to clipboard",
  undo: "Undo",
  filters: "Filters",
  upload: "Upload",
  customize: "Customize",
  backToTop: "Back to Top"
}, wn = {
  fullAccess: "Upgrade now for full access to the Chrome Extension",
  unlimitedLaunches: "Get unlimited launches for Xray, Demand Analyzer, and much more",
  essentialFeatures: "Full access to these essential features:",
  proposals: {
    chromeExtension: "Unlimited Access to the Chrome Extension",
    freedomTicket: "Freedom Ticket Amazon Training Course",
    blackBox: "Black Box Product Research",
    trendster: "Trendster Amazon Trends Finder",
    magnet: "Magnet<sup>2</sup> &nbsp; Keyword Research",
    scribbles: "Scribbles Listing Optimizer",
    indexChecker: "Index Checker"
  }
}, _n = {
  title: "Subscription required",
  text: "Historical Search Volume is only available to subscribed Helium 10 members. Please upgrade to the one of our plans for unlimited access"
}, Gn = {
  title: "No results found",
  text: "Please go back and try searching with another keyword",
  buttonText: "Back to Alibaba"
}, En = {
  exportTable: "Export table",
  exportData: "Export Data...",
  columnCustomization: "Column Customization",
  restoreDefaults: "Restore Defaults",
  selectAll: "Select All",
  itemsPerPage: "Items per page:",
  rowLimit: "Rows per page:",
  countViewingItems: "Viewing {range} of {total} {items}",
  countSelectedItems: "{count} {items} selected",
  error: "Ooops. Error!",
  noData: "No data",
  products: {
    one: "{count} product",
    other: "{count} products"
  },
  keywords: {
    one: "{count} keyword",
    other: "{count} keywords"
  },
  selected: "selected",
  export: {
    csv: "...as a CSV file",
    xlsx: "...as a XLSX file"
  },
  delete: "Delete",
  compactMode: "Compact mode",
  columns: "Columns",
  contentSize: "Content Size",
  productImageSize: "Product Image Size",
  tableCustomization: "Table Customization",
  backToTop: "Back to Top"
}, Bn = {
  showTips: "Show Tips",
  hideTips: "Hide Tips"
}, Nn = {
  asin: "ASIN:",
  sku: "SKU:",
  price: "Price: {price}",
  quantity: "Quantity: {quantity}"
}, Rn = {
  orders: "Orders",
  grossSales: "Gross Sales",
  today: "Today, {date}",
  yesterday: "Yesterday",
  change: "1 Day Change"
}, Dn = {
  amazon: "The product you are analyzing shows up as Amazon’s Choice for this keyword.",
  amazonDifferent: "A different product shows up as Amazon’s Choice for this keyword.",
  walmart: "A different product shows up as Walmart’s Choice for this keyword.",
  walmartDifferent: "A different product shows up as Walmart’s Choice for this keyword."
}, Ln = {
  min: "Min",
  max: "Max"
}, kn = {
  copy: "Copy {label}",
  copied: "{label} Copied",
  myProduct: "My Product",
  new: "New"
}, On = {
  more: "Show More",
  less: "Show Less",
  filters: {
    show: "Show Filters",
    hide: "Hide Filters"
  }
}, Fn = {
  time: "Time",
  price: "Price",
  rank: "Rank",
  rating: "Rating",
  salesRank: "Sales Rank",
  newPrice: "New Price",
  listPrice: "List Price",
  values: "Values",
  sales: "Sales",
  trendLine: "Trend Line",
  movingAverage: "7-Day Moving Average",
  reviews: "Reviews",
  numberOfReviews: "Number of Reviews",
  searchVolume: "Search Volume",
  reviewCount: "Review Count",
  downloads: {
    csv: "Download CSV",
    xls: "Download XLS",
    png: "Download PNG image",
    jpeg: "Download JPEG image"
  },
  resetZoom: "Reset Zoom",
  progress: "Progress",
  timetable: "Time",
  noData: "No data"
}, Hn = {
  week: "Last 7 Days",
  twoWeek: "Last 15 Days",
  month: "Last Month",
  custom: "Custom Range",
  preset: "Preset",
  minRangeInDays: "You can select the minimum range of {minRangeInDays} days",
  timezone: "Marketplace Timezone: "
}, Kn = {
  AF: "Afghanistan",
  AX: "Åland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AN: "Netherlands Antilles",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea",
  KR: "Korea, Republic of",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MK: "North Macedonia",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan, Province of China",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  TP: "East Timor",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom of Great Britain and Northern Ireland",
  US: "USA",
  UK: "United Kingdom",
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Virgin Islands",
  VI: "Virgin Islands",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  ZR: "Zaire"
}, xn = {
  active: "Active",
  amazonSellerAccount: "Amazon Seller Account",
  showAuthToken: "Show Auth Token",
  addNickname: "Add Nickname",
  editNickname: "Edit Nickname",
  inactive: "Inactive",
  walmartSellerAccount: "Walmart Account",
  update: "Update",
  googleAds: "Google Ads"
}, Vn = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  extraLarge: "Extra Large"
}, Un = {
  selectAllOption: "Select All",
  noneOption: "None"
}, $n = {
  description: "Step {current} of {stepsLength}: "
}, Wn = {
  categoryBSR: {
    mainCategoryTooltip: "Main Category BSR",
    subcategoryTooltip: "Subcategory BSR",
    subcategoryTemporaryTooltip: "Subcategory"
  },
  price: {
    priceTooltip: "Current Price",
    priceTrendTooltip: "90 Days Price Trend"
  },
  reviews: {
    numberOfReviewTooltip: "Total Number of Customer Reviews for a Product",
    reviewRatingTooltip: "Review Rating"
  },
  lastYearSales: {
    salesTooltip: "Last Year Sales (Units)",
    salesYearOverYearTooltip: "Sales Year Over Year"
  },
  monthlySales: {
    salesTooltip: "Monthly Sales (Units)",
    salesTrendTooltip: "90 Days Sales Trend"
  },
  seller: {
    sellerNameTooltip: "Seller Name",
    numberOfSellersTooltip: "Number of Active Sellers"
  },
  shippingDetails: {
    productSizeTooltip: "Product Size Determining FBA Shipping Fees",
    dimensionsTooltip: "Package Dimensions (Inch)"
  }
}, Zn = {
  description: "File format: JPG or PNG",
  note: "Maximum Size: 200 KB",
  deleteImage: "Delete Image"
}, Yn = {
  most: "Most Opportunity",
  mostTooltip: "Easier to break into the niche based on maturity of competition",
  least: "Least Opportunity",
  leastTooltip: "More difficult to break into the niche based on maturity of competition"
}, Jn = {
  janSept: "Jan - Sep",
  octDec: "Oct - Dec"
}, qn = {
  1: "Small Standard-Size",
  2: "Large Standard-Size",
  3: "Small Oversize",
  4: "Medium Oversize",
  5: "Large Oversize",
  6: "Special Oversize",
  7: "Envelope",
  8: "Small and Light",
  9: "Small Letter",
  10: "Large Letter",
  11: "Extra Large Letter",
  12: "Small Envelope",
  13: "Standard Envelope",
  14: "Large Envelope",
  15: "Standard Parcel",
  16: "Small",
  17: "Standard Size",
  18: "Oversize",
  19: "Standard Oversize",
  20: "Heavy and bulky",
  21: "Supersize",
  22: "Extra Large Envelope",
  23: "Small Parcel",
  "-1": "N/A"
}, jn = "You do not have access to this tool. Please contact your plan administrator for access.", Xn = {
  plans: Cn,
  common: vn,
  placeholders: zn,
  buttons: In,
  upgrade: wn,
  subscriptionRequired: _n,
  notFoundResult: Gn,
  table: En,
  tips: Bn,
  orderListItem: Nn,
  businessOverview: Rn,
  choiceBadge: Dn,
  minmax: Ln,
  productSummary: kn,
  showMore: On,
  charts: Fn,
  calendar: Hn,
  switch: {
    edited: "Edited"
  },
  countries: Kn,
  token: xn,
  size: Vn,
  ultraSelect: Un,
  stepper: $n,
  cells: Wn,
  uploadImage: Zn,
  opportunity: Yn,
  storageFee: Jn,
  sizeTier: qn,
  subAccountDoNotHaveAccess: jn
}, Qn = {
  Helium10_ALaCarte: "A La Carte",
  Helium10_ALaCarteAnnual: "A La Carte",
  Helium10_Diamond: "Diamond",
  Helium10_DiamondAnnual: "Diamond",
  Helium10_Elite: "Elite",
  Helium10_Free: "Free",
  Helium10_Gold: "Gold",
  Helium10_GoldAnnual: "Gold",
  Helium10_Platinum: "Platinum",
  Helium10_PlatinumAnnual: "Platinum",
  Helium10_Platinum_FastAction: "Platinum",
  Helium10_Starter: "Starter",
  Helium10_StarterAnnual: "Starter",
  Helium10_Enterprise: "Enterprise"
}, ei = {
  month: "me",
  freeLaunchesLeft: "Usos libres restantes:",
  pleaseWait: "Espere por favor...",
  selected: "Seleccionado",
  copyToClipboard: "El ASIN {asin} se copió con éxito al portapapeles",
  item_one: "elemento",
  item_other: "elementos",
  noOptions: "Sin opciones"
}, ai = {
  min: "Mín",
  max: "Máx",
  anyKeyword: "Ingresa cualquier palabra clave...",
  search: "Buscar",
  selectOrCreateOption: "Seleccione o cree una opción"
}, ti = {
  upgrade: "Ampliar",
  noThanks: "No, gracias",
  upgradeForUnlimited: "Ampliar al plan ilimitado",
  seeAnalysis: "Ver análisis",
  show: "Mostrar",
  hide: "Ocultar",
  clipboardCopy: "Copiado en el portapapeles",
  undo: "Deshacer",
  filters: "Filtros",
  upload: "Cargar",
  customize: "Personalizar",
  backToTop: "Volver arriba"
}, ni = {
  fullAccess: "Ampliar ahora para tener acceso total a la extensión de Chrome",
  unlimitedLaunches: "Obtén usos ilimitados a Xray, Demand Analyzer y mucho más",
  essentialFeatures: "Acceso total a estas funciones esenciales:",
  proposals: {
    chromeExtension: "Acceso ilimitado a la extensión de Chrome",
    freedomTicket: "Acceso libre al curso de capacitación de Amazon",
    blackBox: "Búsqueda de productos con Black Box",
    trendster: "Búsqueda de tendencias con Amazon Trendster",
    magnet: "Magnet<sup>2</sup> &nbsp; Búsqueda de palabras clave",
    scribbles: "Optimización de listings con Scribbles",
    indexChecker: "Verificación con Index Checker"
  }
}, ii = {
  title: "Se necesita suscripción",
  text: "El historial de volumen de búsqueda está disponible solo para miembros suscritos de Helium 10. Por favor, amplia a uno de nuestros planes para tener acceso ilimitado"
}, ri = {
  title: "No se hallaron resultados",
  text: "Por favor, regresa e intenta buscar con otra palabra clave",
  buttonText: "Volver a Alibaba"
}, oi = {
  exportTable: "Exportar tabla",
  exportData: "Exportar datos...",
  columnCustomization: "Personalización de columnas",
  restoreDefaults: "Restaurar valores predeterminados",
  selectAll: "Seleccionar todo",
  itemsPerPage: "Elementos por página:",
  rowLimit: "Filas por página:",
  countViewingItems: "Ver {range} de {total} {items}",
  countSelectedItems: "{count} {items} seleccionados",
  error: "¡Vaya! Se ha producido un error.",
  noData: "Sin datos",
  products: {
    one: "{count} Producto",
    other: "{count} Productos"
  },
  keywords: {
    one: "Palabra clave",
    other: "Palabras clave"
  },
  selected: "seleccionado",
  export: {
    csv: "... como archivo CSV",
    xlsx: "... como archivo XLSX"
  },
  delete: "Borrar",
  compactMode: "Modo compacto",
  columns: "Columnas",
  contentSize: "Tamaño del conten.",
  productImageSize: "Tamaño de la imagen del prod.",
  tableCustomization: "Personalización de tablas",
  backToTop: "Volver arriba",
  additionalInformation: {
    title: "Información adicional sobre Hover",
    titleTooltip: "Esta configuración se aplicará a todas las mesas de Helium 10.",
    top10RankedProductsForKeyword: "Los 10 productos mejor clasificados por palabra clave",
    asinDetails: "Detalles del ASIN"
  }
}, si = {
  showTips: "Mostrar consejos",
  hideTips: "Ocultar consejos"
}, li = {
  asin: "ASIN:",
  sku: "SKU:",
  price: "Precio: {price}",
  quantity: "Cantidad: {quantity}"
}, ci = {
  orders: "Pedidos",
  grossSales: "Ventas brutas",
  today: "Hoy, {date}",
  yesterday: "Ayer",
  change: "Cambio de 1 día"
}, ui = {
  amazon: "El producto que estás analizando aparece como Elección de Amazon para esta palabra clave.",
  amazonDifferent: "Aparece un producto diferente como Elección de Amazon para esta palabra clave.",
  walmart: "Aparece un producto diferente como Elección de Walmart para esta palabra clave.",
  walmartDifferent: "Aparece un producto diferente como Elección de Walmart para esta palabra clave."
}, di = {
  min: "Mín",
  max: "Máx"
}, mi = {
  copy: "Copiar {label}",
  copied: "{label} copiado",
  myProduct: "Mi producto",
  new: "Nuevo"
}, pi = {
  more: "Mostrar más",
  less: "Mostrar menos",
  filters: {
    show: "Mostrar filtros",
    hide: "Ocultar filtros"
  }
}, gi = {
  time: "Tiempo",
  price: "Precio",
  rank: "Rango",
  rating: "Clasificación",
  salesRank: "Rango de ventas",
  newPrice: "Nuevo precio",
  listPrice: "Precio de lista",
  values: "Valores",
  sales: "Ventas",
  trendLine: "Línea de tendencia",
  movingAverage: "Media móvil de 7 días",
  reviews: "Reseñas",
  numberOfReviews: "Número de reseñas",
  searchVolume: "Volumen de búsqueda",
  reviewCount: "Cuenta de reseñas",
  downloads: {
    csv: "Descargar informe CSV",
    xls: "Descarga XLS",
    png: "Descargar imagen PNG",
    jpeg: "Descargar imagen JPEG"
  },
  resetZoom: "Restablecer zoom",
  progress: "Progreso",
  timetable: "Tiempo",
  noData: "Sin datos"
}, Si = {
  week: "Últimos 7 días",
  twoWeek: "Últimos 15 días",
  month: "Mes pasado",
  custom: "Personalizar intervalo",
  preset: "Predeterminado",
  minRangeInDays: "Puede seleccionar el rango mínimo de {minRangeInDays} días."
}, hi = {
  AF: "Afganistán",
  AX: "Islas Aland",
  AL: "Albania",
  DZ: "Argelia",
  AS: "Samoa Americana",
  AD: "Andorra",
  AO: "Angola",
  AI: "anguila",
  AQ: "Antártida",
  AG: "Antigua y Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaiyán",
  BS: "Bahamas",
  BH: "Baréin",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Bielorrusia",
  BE: "Bélgica",
  BZ: "Belice",
  BJ: "Benín",
  BM: "islas Bermudas",
  BT: "Bután",
  BO: "Bolivia",
  BQ: "Caribe Neerlandés",
  BA: "Bosnia y Herzegovina",
  BW: "Botsuana",
  BV: "Isla Bouvet",
  BR: "Brasil",
  IO: "Territorio Británico del Océano Índico",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Camboya",
  CM: "Camerún",
  CA: "Canadá",
  KY: "Islas Caimán",
  CF: "República Centroafricana",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Isla de Navidad",
  CC: "Islas Cocos (Keeling)",
  CO: "Colombia",
  KM: "Comoras",
  CG: "Congo",
  CD: "Congo",
  CK: "Islas Cook",
  CR: "Costa Rica",
  CI: "Costa de Marfil",
  HR: "Croacia",
  CU: "Cuba",
  CW: "curazao",
  CY: "Chipre",
  CZ: "Chequia",
  DK: "Dinamarca",
  DJ: "Yibuti",
  DM: "Dominica",
  DO: "República Dominicana",
  EC: "Ecuador",
  EG: "Egipto",
  SV: "El Salvador",
  GQ: "Guinea Ecuatorial",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Esuatini",
  ET: "Etiopía",
  FK: "Islas Malvinas (Malvinas)",
  FO: "Islas Faroe",
  FJ: "Fiyi",
  FI: "Finlandia",
  FR: "Francia",
  GF: "Guayana Francesa",
  PF: "Polinesia francés",
  TF: "Territorios Franceses del Sur",
  GA: "Gabón",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Alemania",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Grecia",
  GL: "Groenlandia",
  GD: "Granada",
  GP: "Guadalupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guinea",
  GW: "Guinea-Bisáu",
  GY: "Guayana",
  HT: "Haití",
  HM: "Islas Heard y McDonald",
  VA: "Santa Sede",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungría",
  IS: "Islandia",
  IN: "India",
  ID: "Indonesia",
  IR: "Irán",
  IQ: "Irak",
  IE: "Irlanda",
  IM: "Isla del hombre",
  IL: "Israel",
  IT: "Italia",
  JM: "Jamaica",
  JP: "Japón",
  JE: "Jersey",
  JO: "Jordán",
  KZ: "Kazajstán",
  KE: "Kenia",
  KI: "Kiribati",
  KP: "Corea",
  KR: "Corea, república de",
  KW: "Kuwait",
  KG: "Kirguistán",
  LA: "República Democrática Popular Lao",
  LV: "Letonia",
  LB: "Líbano",
  LS: "Lesoto",
  LR: "Liberia",
  LY: "Libia",
  LI: "Liechtenstein",
  LT: "Lituania",
  LU: "Luxemburgo",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malaui",
  MY: "Malasia",
  MV: "Maldivas",
  ML: "Malí",
  MT: "Malta",
  MH: "Islas Marshall",
  MQ: "Martinica",
  MR: "Mauritania",
  MU: "Mauricio",
  YT: "Mayotte",
  MX: "México",
  FM: "Micronesia",
  MD: "Moldavia",
  MC: "Mónaco",
  MN: "Mongolia",
  ME: "montenegro",
  MS: "Montserrat",
  MA: "Marruecos",
  MZ: "Mozambique",
  MM: "Birmania",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Países Bajos",
  NC: "Nueva Caledonia",
  NZ: "Nueva Zelanda",
  NI: "Nicaragua",
  NE: "Níger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Isla Norfolk",
  MK: "macedonia del norte",
  MP: "Islas Marianas del Norte",
  NO: "Noruega",
  OM: "Omán",
  PK: "Pakistán",
  PW: "Palaos",
  PS: "Palestina, Estado de",
  PA: "Panamá",
  PG: "Papúa Nueva Guinea",
  PY: "Paraguay",
  PE: "Perú",
  PH: "Filipinas",
  PN: "Pitcairn",
  PL: "Polonia",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Katar",
  RE: "Reunión",
  RO: "Rumania",
  RU: "Federación Rusa",
  RW: "Ruanda",
  BL: "San Bartolomé",
  SH: "Santa Elena, Ascensión y Tristan da Cunha",
  KN: "San Cristóbal y Nieves",
  LC: "Santa Lucía",
  MF: "San Martín (parte francesa)",
  PM: "San Pedro y Miquelón",
  VC: "San Vicente y las Granadinas",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Santo Tomé y Príncipe",
  SA: "Arabia Saudita",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leona",
  SG: "Singapur",
  SX: "Sint Maarten (parte holandesa)",
  SK: "Eslovaquia",
  SI: "Eslovenia",
  SB: "Islas Salomón",
  SO: "Somalia",
  ZA: "Sudáfrica",
  GS: "Georgia del sur y las islas Sandwich del sur",
  SS: "Sudán del Sur",
  ES: "España",
  LK: "Sri Lanka",
  SD: "Sudán",
  SR: "Surinam",
  SJ: "Svalbard y Jan Mayen",
  SE: "Suecia",
  CH: "Suiza",
  SY: "República Árabe Siria",
  TW: "Taiwan, provincia de China",
  TJ: "Tayikistán",
  TZ: "Tanzania",
  TH: "Tailandia",
  TL: "Timor Oriental",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad y Tobago",
  TN: "Túnez",
  TR: "Turquía",
  TM: "turkmenistán",
  TC: "Islas Turcas y Caicos",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ucrania",
  AE: "Emiratos Árabes Unidos",
  GB: "Reino Unido de Gran Bretaña e Irlanda del Norte",
  US: "EE.UU.",
  UM: "Islas Ultramarinas Menores de los Estados Unidos",
  UY: "Uruguay",
  UZ: "Uzbekistán",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Islas Virgenes",
  VI: "Islas Virgenes",
  WF: "Wallis y Futuna",
  EH: "Sahara Occidental",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabue"
}, fi = {
  active: "Activo",
  amazonSellerAccount: "Cuenta de vendedor de Amazon",
  showAuthToken: "Mostrar token de autenticación",
  addNickname: "Añadir apodo",
  editNickname: "Editar apodo",
  inactive: "Inactivo",
  walmartSellerAccount: "Cuenta Walmart",
  update: "Actualizar",
  googleAds: "Google Ads"
}, bi = {
  small: "Pequeño",
  medium: "Medio",
  large: "Largo",
  extraLarge: "Extra Largo"
}, Ti = {
  selectAllOption: "Seleccionar todo",
  noneOption: "Ninguna"
}, Ai = {
  description: "Paso {current} de {stepsLength}: "
}, yi = {
  categoryBSR: {
    mainCategoryTooltip: "Categoría principal BSR",
    subcategoryTooltip: "Subcategoría BSR",
    subcategoryTemporaryTooltip: "Subcategoría"
  },
  price: {
    priceTooltip: "Precio actual",
    priceTrendTooltip: "Tendencia de precios de 90 días"
  },
  reviews: {
    numberOfReviewTooltip: "Número total de reseñas de clientes para un producto",
    reviewRatingTooltip: "Calificación del producto"
  },
  lastYearSales: {
    salesTooltip: "Ventas del año pasado (unidades)",
    salesYearOverYearTooltip: "Ventas año tras año"
  },
  monthlySales: {
    salesTooltip: "Ventas Mensuales (Unidades)",
    salesTrendTooltip: "Tendencia de ventas de 90 días"
  },
  seller: {
    sellerNameTooltip: "Nombre del vendedor",
    numberOfSellersTooltip: "Número de vendedores activos"
  },
  shippingDetails: {
    productSizeTooltip: "Tamaño del producto que determina las tarifas de envío de Logística de Amazon",
    dimensionsTooltip: "Dimensiones del paquete (pulgadas)"
  }
}, Mi = {
  description: "Formato de archivo: JPG o PNG",
  note: "Tamaño máximo: 200 KB",
  deleteImage: "Borrar imagen"
}, Pi = {
  most: "Mayor oportunidad",
  mostTooltip: "Es más fácil entrar en el nicho en función de la madurez de la competencia",
  least: "Menor oportunidad",
  leastTooltip: "Es más difícil entrar en el nicho en función de la madurez de la competencia"
}, Ci = {
  janSept: "ene-sep",
  octDec: "oct-dic"
}, vi = {
  1: "Tamaño estándar pequeño",
  2: "Tamaño estándar grande",
  3: "Tamaño sobredimensionado pequeño",
  4: "Prodotti medi fuori misura",
  5: "Tamaño sobredimensionado grande",
  6: "Tamaño sobredimensionado especial",
  7: "Sobre",
  8: "Pequeño y ligero",
  9: "Carta pequeña",
  10: "Carta grande",
  11: "Carta extragrande",
  12: "Sobre pequeño",
  13: "Sobre estándar",
  14: "Sobre grande",
  15: "Paquete estándar",
  16: "Pequeño",
  17: "Tamaño estándar",
  18: "Tamaño sobredimensionado",
  19: "Tamaño sobredimensionado estándar",
  20: "Pesado y voluminoso",
  21: "Supersize",
  22: "Sobre extragrande",
  23: "Paquete pequeño",
  "-1": "N/D"
}, zi = "You do not have access to this tool. Please contact your plan administrator for access.", Ii = {
  plans: Qn,
  common: ei,
  placeholders: ai,
  buttons: ti,
  upgrade: ni,
  subscriptionRequired: ii,
  notFoundResult: ri,
  table: oi,
  tips: si,
  orderListItem: li,
  businessOverview: ci,
  choiceBadge: ui,
  minmax: di,
  productSummary: mi,
  showMore: pi,
  charts: gi,
  calendar: Si,
  switch: {
    edited: "Editado"
  },
  countries: hi,
  token: fi,
  size: bi,
  ultraSelect: Ti,
  stepper: Ai,
  cells: yi,
  uploadImage: Mi,
  opportunity: Pi,
  storageFee: Ci,
  sizeTier: vi,
  subAccountDoNotHaveAccess: zi
}, wi = {
  Helium10_ALaCarte: "A La Carte",
  Helium10_ALaCarteAnnual: "A La Carte",
  Helium10_Diamond: "Diamond",
  Helium10_DiamondAnnual: "Diamond",
  Helium10_Elite: "Elite",
  Helium10_Free: "Free",
  Helium10_Gold: "Gold",
  Helium10_GoldAnnual: "Gold",
  Helium10_Platinum: "Platinum",
  Helium10_PlatinumAnnual: "Platinum",
  Helium10_Platinum_FastAction: "Platinum",
  Helium10_Starter: "Starter",
  Helium10_StarterAnnual: "Starter",
  Helium10_Enterprise: "Enterprise"
}, _i = {
  month: "m",
  freeLaunchesLeft: "Lanci gratuiti rimasti:",
  pleaseWait: "Attendere prego...",
  selected: "Selezionato",
  copyToClipboard: "L'ASIN {asin} è stato copiato negli appunti",
  item_one: "articolo",
  item_other: "articoli",
  noOptions: "Nessuna opzione"
}, Gi = {
  min: "Min",
  max: "Max",
  anyKeyword: "Inserisci una parola chiave...",
  search: "Cerca",
  selectOrCreateOption: "Seleziona o crea un'opzione"
}, Ei = {
  upgrade: "Esegui l'upgrade",
  noThanks: "No, grazie",
  upgradeForUnlimited: "Esegui l'upgrade per avere accesso illimitato",
  seeAnalysis: "Visualizza analisi",
  show: "Mostra",
  hide: "Nascondi",
  clipboardCopy: "Copiato negli appunti",
  undo: "Annullare",
  filters: "Filtri",
  upload: "Carica",
  customize: "Personalizza",
  backToTop: "Torna all'inizio"
}, Bi = {
  fullAccess: "Esegui l'upgrade ora per l'accesso completo all'estensione di Chrome",
  unlimitedLaunches: "Ottieni lanci illimitati per Xray, Demand Analyzer e tanto altro",
  essentialFeatures: "Accesso completo a questi strumenti indispensabili:",
  proposals: {
    chromeExtension: "Accesso illimitato all'estensione di Chrome",
    freedomTicket: "Corso di formazione Amazon Freedom Ticket",
    blackBox: "Ricerca dei prodotti con Black Box",
    trendster: "Ricerca degli Amazon Trends con Trendster",
    magnet: "Ricerca di parole chiave via Magnet<sup>2</sup> &nbsp;",
    scribbles: "Ottimizzazione dei listing con Scribbles",
    indexChecker: "Index Checker"
  }
}, Ni = {
  title: "Accesso richiesto",
  text: "La cronologia del volume di ricerca è disponibile solo per gli abbonati ad Helium 10. Passa ad uno dei nostri piani per un accesso senza restrizioni"
}, Ri = {
  title: "Nessun risultato trovato",
  text: "Torna indietro e prova a cercare con un'altra parola chiave",
  buttonText: "Torna ad Alibaba"
}, Di = {
  exportTable: "Esporta la tabella",
  exportData: "Esporta i dati...",
  columnCustomization: "Personalizzazione della colonna",
  restoreDefaults: "Ripristina predefiniti",
  selectAll: "Seleziona tutto",
  itemsPerPage: "Articoli per pagina:",
  rowLimit: "Righe per pagina:",
  countViewingItems: "Visualizzazione {range} di {total} {items}",
  countSelectedItems: "{count} {items} selezionati",
  error: "Ops. Errore!",
  noData: "Nessun dato",
  products: {
    one: "{count} Prodotto",
    other: "{count} Prodotti"
  },
  keywords: {
    one: "Parola chiave",
    other: "Parole chiave"
  },
  selected: "selezionato",
  export: {
    csv: "...come file CSV",
    xlsx: "...come file XLSX"
  },
  delete: "Eliminare",
  compactMode: "Modalità compatta",
  columns: "Colonne",
  contentSize: "Dimens. del conten.",
  productImageSize: "Dimens. dell'immag. del prod.",
  tableCustomization: "Personalizzazione della tabella",
  backToTop: "Torna all'inizio",
  additionalInformation: {
    title: "Ulteriori informazioni su Hover",
    titleTooltip: "Queste impostazioni verranno applicate a tutti i tavoli di Helium 10.",
    top10RankedProductsForKeyword: "I 10 migliori prodotti classificati per parole chiave",
    asinDetails: "Dettagli ASIN"
  }
}, Li = {
  showTips: "Mostra suggerimenti",
  hideTips: "Nascondi suggerimenti"
}, ki = {
  asin: "ASIN:",
  sku: "SKU:",
  price: "Prezzo: {price}",
  quantity: "Quantità: {quantity}"
}, Oi = {
  orders: "Ordini",
  grossSales: "Vendite lorde",
  today: "Oggi, {date}",
  yesterday: "Ieri",
  change: "Modifica di 1 giorno"
}, Fi = {
  amazon: "Il prodotto che stai analizzando viene visualizzato come Amazon’s Choice per questa parola chiave.",
  amazonDifferent: "Viene visualizzato un altro prodotto come Amazon’s Choice per questa parola chiave.",
  walmart: "Viene visualizzato un altro prodotto come Walmart's Choice per questa parola chiave.",
  walmartDifferent: "Viene visualizzato un altro prodotto come Walmart's Choice per questa parola chiave."
}, Hi = {
  min: "Min",
  max: "Max"
}, Ki = {
  copy: "Copia {label}",
  copied: "{label} copiato",
  myProduct: "Il mio prodotto",
  new: "Nuovo"
}, xi = {
  more: "Mostra altro",
  less: "Mostra meno",
  filters: {
    show: "Mostra filtri",
    hide: "Nascondi filtri"
  }
}, Vi = {
  time: "Tempo",
  price: "Prezzo",
  rank: "Classifica",
  rating: "Valutazioni",
  salesRank: "Classifica delle vendite",
  newPrice: "Nuovo prezzo",
  listPrice: "Prezzo di listino",
  values: "Valori",
  sales: "Vendite",
  trendLine: "Linea di tendenza",
  movingAverage: "Media mobile di 7 giorni",
  reviews: "Recensioni",
  numberOfReviews: "Numero di recensioni",
  searchVolume: "Volume di ricerca",
  reviewCount: "Numero di recensioni",
  downloads: {
    csv: "Scarica il rapporto in CSV",
    xls: "Scarica XLS",
    png: "Scarica l'immagine PNG",
    jpeg: "Scarica l'immagine JPEG"
  },
  resetZoom: "Ripristina zoom",
  progress: "Progresso",
  timetable: "Tempo",
  noData: "Nessun dato"
}, Ui = {
  week: "Ultimi 7 giorni",
  twoWeek: "Ultimi 15 giorni",
  month: "Ultimo mese",
  custom: "Intervallo personalizzato",
  preset: "Predefinito",
  minRangeInDays: "Puoi selezionare l'intervallo minimo di {minRangeInDays} giorni"
}, $i = {
  AF: "Afghanistan",
  AX: "Isole Aland",
  AL: "Albania",
  DZ: "Algeria",
  AS: "Samoa americane",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antartide",
  AG: "Antigua e Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaigian",
  BS: "Bahamas",
  BH: "Bahrein",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Bielorussia",
  BE: "Belgio",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Paesi Bassi caraibici",
  BA: "Bosnia Erzegovina",
  BW: "Botswana",
  BV: "Isola Bouvet",
  BR: "Brasile",
  IO: "Territorio britannico dell'Oceano Indiano",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Capo Verde",
  KH: "Cambogia",
  CM: "Camerun",
  CA: "Canada",
  KY: "Isole Cayman",
  CF: "Repubblica Centrafricana",
  TD: "Chad",
  CL: "Chile",
  CN: "Cina",
  CX: "Isola di Natale",
  CC: "Isole Cocos (Keeling)",
  CO: "Colombia",
  KM: "Comore",
  CG: "Congo",
  CD: "Congo",
  CK: "Isole Cook",
  CR: "Costa Rica",
  CI: "Costa d'Avorio",
  HR: "Croazia",
  CU: "Cuba",
  CW: "Curacao",
  CY: "Cipro",
  CZ: "Cechia",
  DK: "Danimarca",
  DJ: "Gibuti",
  DM: "Dominica",
  DO: "Repubblica Dominicana",
  EC: "Ecuador",
  EG: "Egitto",
  SV: "El Salvador",
  GQ: "Guinea Equatoriale",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Etiopia",
  FK: "Isole Falkland (Malvinas)",
  FO: "Isole Faroe",
  FJ: "Figi",
  FI: "Finlandia",
  FR: "Francia",
  GF: "Guiana francese",
  PF: "Polinesia francese",
  TF: "Territori della Francia del sud",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germania",
  GH: "Ghana",
  GI: "Gibilterra",
  GR: "Grecia",
  GL: "Groenlandia",
  GD: "Granata",
  GP: "Guadalupa",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Isole Heard e McDonald",
  VA: "Santa Sede",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Ungheria",
  IS: "Islanda",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Irlanda",
  IM: "Isola di Man",
  IL: "Israele",
  IT: "Italia",
  JM: "Giamaica",
  JP: "Giappone",
  JE: "Maglia",
  JO: "Giordania",
  KZ: "Kazakistan",
  KE: "Kenia",
  KI: "Kiribati",
  KP: "Corea",
  KR: "Corea, Repubblica di",
  KW: "Kuwait",
  KG: "Kirghizistan",
  LA: "Repubblica Democratica Popolare del Laos",
  LV: "Lettonia",
  LB: "Libano",
  LS: "Lesoto",
  LR: "Liberia",
  LY: "Libia",
  LI: "Liechtenstein",
  LT: "Lituania",
  LU: "Lussemburgo",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldive",
  ML: "Mali",
  MT: "Malta",
  MH: "Isole Marshall",
  MQ: "Martinica",
  MR: "Mauritania",
  MU: "Maurizio",
  YT: "Mayotte",
  MX: "Messico",
  FM: "Micronesia",
  MD: "Moldavia",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Marocco",
  MZ: "Mozambico",
  MM: "Birmania",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Olanda",
  NC: "Nuova Caledonia",
  NZ: "Nuova Zelanda",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Isola Norfolk",
  MK: "Macedonia del Nord",
  MP: "Isole Marianne settentrionali",
  NO: "Norvegia",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestina,Stato di",
  PA: "Panama",
  PG: "Papua Nuova Guinea",
  PY: "Paraguay",
  PE: "Perù",
  PH: "Filippine",
  PN: "Pitcairn",
  PL: "Polonia",
  PT: "Portogallo",
  PR: "Portorico",
  QA: "Qatar",
  RE: "La Riunione",
  RO: "Romania",
  RU: "Federazione Russa",
  RW: "Ruanda",
  BL: "San Bartolomeo",
  SH: "Sant'Elena, Ascensione e Tristano da Cunha",
  KN: "Saint Kitts e Nevis",
  LC: "Santa Lucia",
  MF: "Saint Martin (parte francese)",
  PM: "Saint Pierre e Miquelon",
  VC: "Saint Vincent e Grenadine",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tomé e Principe",
  SA: "Arabia Saudita",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (parte olandese)",
  SK: "Slovacchia",
  SI: "Slovenia",
  SB: "Isole Salomone",
  SO: "Somalia",
  ZA: "Sud Africa",
  GS: "Georgia del Sud e Isole Sandwich meridionali",
  SS: "Sudan del Sud",
  ES: "Spagna",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard e Jan Mayen",
  SE: "Svezia",
  CH: "Svizzera",
  SY: "Repubblica Araba Siriana",
  TW: "Taiwan, provincia della Cina",
  TJ: "Tagikistan",
  TZ: "Tanzania",
  TH: "Thailandia",
  TL: "Timor Est",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad e Tobago",
  TN: "Tunisia",
  TR: "Turchia",
  TM: "Turkmenistan",
  TC: "Isole Turks e Caicos",
  TV: "Tuvalù",
  UG: "Uganda",
  UA: "Ucraina",
  AE: "Emirati Arabi Uniti",
  GB: "Regno Unito di Gran Bretagna e Irlanda del Nord",
  US: "Stati Uniti d'America",
  UM: "Isole minori esterne degli Stati Uniti d'America",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Isole Vergini",
  VI: "Isole Vergini",
  WF: "Wallis e Futuna",
  EH: "Sahara occidentale",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}, Wi = {
  active: "Attivi",
  amazonSellerAccount: "Account Seller Amazon",
  showAuthToken: "Mostra token di autorizzazione",
  addNickname: "Aggiungi soprannome",
  editNickname: "Modifica soprannome",
  inactive: "Inattivo",
  walmartSellerAccount: "Conto Walmart",
  update: "Aggiornare",
  googleAds: "Google Ads"
}, Zi = {
  small: "Piccolo",
  medium: "Medio",
  large: "Larga",
  extraLarge: "Extra Larga"
}, Yi = {
  selectAllOption: "Seleziona tutto",
  noneOption: "Nessuno"
}, Ji = {
  description: "Fase {current} di {stepsLength}: "
}, qi = {
  categoryBSR: {
    mainCategoryTooltip: "Categoria principale BSR",
    subcategoryTooltip: "Sottocategoria BSR",
    subcategoryTemporaryTooltip: "Sottocategoria"
  },
  price: {
    priceTooltip: "Prezzo attuale",
    priceTrendTooltip: "Andamento dei prezzi a 90 giorni"
  },
  reviews: {
    numberOfReviewTooltip: "Numero totale di recensioni dei clienti per un prodotto",
    reviewRatingTooltip: "Valutazione della recensione"
  },
  lastYearSales: {
    salesTooltip: "Vendite dello scorso anno (unità)",
    salesYearOverYearTooltip: "Vendite anno dopo anno"
  },
  monthlySales: {
    salesTooltip: "Vendite mensili (unità)",
    salesTrendTooltip: "Andamento delle vendite a 90 giorni"
  },
  seller: {
    sellerNameTooltip: "Nome del venditore",
    numberOfSellersTooltip: "Numero di sellers attivi"
  },
  shippingDetails: {
    productSizeTooltip: "Dimensioni del prodotto che determinano le spese di spedizione di Logistica di Amazon",
    dimensionsTooltip: "Dimensioni della spedizione (in pollici)"
  }
}, ji = {
  description: "Formato file: JPG o PNG",
  note: "Dimensione massima: 200 KB",
  deleteImage: "Elimina immagine"
}, Xi = {
  most: "Maggiori opportunità",
  mostTooltip: "Più facile penetrare nella nicchia in base alla maturità della concorrenza",
  least: "Minori opportunità",
  leastTooltip: "Più difficile penetrare nella nicchia in base alla maturità della concorrenza"
}, Qi = {
  janSept: "gen-set",
  octDec: "ott-dic"
}, er = {
  1: "Piccolo (dimensioni standard)",
  2: "Grande (dimensioni standard)",
  3: "Piccolo (oversize)",
  4: "Medio (oversize)",
  5: "Grande (oversize)",
  6: "Speciale (oversize)",
  7: "Busta",
  8: "Piccolo e leggero",
  9: "Lettera piccola",
  10: "Lettera grande",
  11: "Lettera extra large",
  12: "Busta piccola",
  13: "Busta standard",
  14: "Busta grande",
  15: "Pacco standard",
  16: "Piccolo",
  17: "Dimensioni standard",
  18: "Oversize",
  19: "Standard Oversize",
  20: "Pesante e ingombrante",
  21: "Supersize",
  22: "Busta extra grande",
  23: "Pacco piccolo",
  "-1": "N/A"
}, ar = "You do not have access to this tool. Please contact your plan administrator for access.", tr = {
  plans: wi,
  common: _i,
  placeholders: Gi,
  buttons: Ei,
  upgrade: Bi,
  subscriptionRequired: Ni,
  notFoundResult: Ri,
  table: Di,
  tips: Li,
  orderListItem: ki,
  businessOverview: Oi,
  choiceBadge: Fi,
  minmax: Hi,
  productSummary: Ki,
  showMore: xi,
  charts: Vi,
  calendar: Ui,
  switch: {
    edited: "Modificato"
  },
  countries: $i,
  token: Wi,
  size: Zi,
  ultraSelect: Yi,
  stepper: Ji,
  cells: qi,
  uploadImage: ji,
  opportunity: Xi,
  storageFee: Qi,
  sizeTier: er,
  subAccountDoNotHaveAccess: ar
}, nr = {
  Helium10_ALaCarte: "自定义套餐",
  Helium10_ALaCarteAnnual: "自定义套餐",
  Helium10_Diamond: "精英版",
  Helium10_DiamondAnnual: "精英版",
  Helium10_Elite: "企业版",
  Helium10_Free: "免费",
  Helium10_Gold: "Gold",
  Helium10_GoldAnnual: "Gold",
  Helium10_Platinum: "创业版",
  Helium10_PlatinumAnnual: "创业版",
  Helium10_Platinum_FastAction: "创业版",
  Helium10_Starter: "探索版",
  Helium10_StarterAnnual: "探索版",
  Helium10_Enterprise: "定制版"
}, ir = {
  month: "月",
  freeLaunchesLeft: "剩余免费使用次数：",
  pleaseWait: "请稍等...",
  selected: "已选中",
  copyToClipboard: "ASIN {asin} 已成功复制到剪贴板",
  item_one: "项",
  item_other: "项",
  noOptions: "没有选项"
}, rr = {
  min: "最小值",
  max: "最大值",
  anyKeyword: "输入任何关键词...",
  search: "搜索",
  selectOrCreateOption: "创建或选择一个选项"
}, or = {
  upgrade: "升级",
  noThanks: "不，谢谢",
  upgradeForUnlimited: "升级到无限制套餐",
  seeAnalysis: "查看分析",
  show: "显示",
  hide: "隐藏",
  clipboardCopy: "已复制到剪贴板",
  undo: "撤消",
  filters: "筛选器",
  upload: "上传",
  customize: "自定义",
  backToTop: "返回顶部"
}, sr = {
  fullAccess: "立即升级，获取 Chrome 插件的无限制访问权限",
  unlimitedLaunches: "Xray、Demand Analyzer 等无限制使用次数",
  essentialFeatures: "这些基本功能的访问权限：",
  proposals: {
    chromeExtension: "无限次使用 Chrome插件",
    freedomTicket: "Freedom Ticket Amazon 培训课程",
    blackBox: "Black Box选品数据库",
    trendster: "Trendster Amazon Trends Finder",
    magnet: "Magnet<sup>2</sup> &nbsp; 关键词挖掘",
    scribbles: "Scribbles Listing Optimizer",
    indexChecker: "Index Checker"
  }
}, lr = {
  title: "需要成为付费用户",
  text: "历史搜索量仅供 Helium 10 付费用户使用。请升级到我们的无限制套餐"
}, cr = {
  title: "找不到结果",
  text: "请返回，尝试使用其他关键词搜索",
  buttonText: "返回Alibaba"
}, ur = {
  exportTable: "导出表",
  exportData: "导出数据...",
  columnCustomization: "列自定义",
  restoreDefaults: "恢复默认值",
  selectAll: "选择所有",
  itemsPerPage: "每页项数：",
  rowLimit: "每页行数：",
  countViewingItems: "正在查看 {range}（共计 {total}）的 {items}",
  countSelectedItems: "已选中 {count} 个 {items}",
  error: "糟糕。出错了！",
  noData: "无数据",
  products: {
    other: "{count} 产品"
  },
  keywords: {
    other: "关键词"
  },
  selected: "已选中",
  export: {
    csv: "...到一个CSV文件",
    xlsx: "...到一个XLSX文件"
  },
  delete: "删除",
  compactMode: "紧凑模式",
  columns: "栏",
  contentSize: "内容大小",
  productImageSize: "产品图片尺寸",
  tableCustomization: "表格自定义",
  backToTop: "返回顶部",
  additionalInformation: {
    title: "Additional Information on Hover",
    titleTooltip: "These settings will apply to all tables across Helium 10.",
    top10RankedProductsForKeyword: "Top 10 Ranked Products for Keyword",
    asinDetails: "ASIN Details"
  }
}, dr = {
  showTips: "显示提示",
  hideTips: "隐藏提示"
}, mr = {
  asin: "ASIN:",
  sku: "SKU:",
  price: "价格: {price}",
  quantity: "数量：{quantity}"
}, pr = {
  orders: "订单",
  grossSales: "总销量",
  today: "今天， {date}",
  yesterday: "昨天",
  change: "1天的变化"
}, gr = {
  amazon: "您正在分析的产品显示为该关键词的 Amazon’s Choice。",
  amazonDifferent: "其它产品显示为该关键词的 Amazon’s Choice。",
  walmart: "其它产品显示为该关键词的 Walmart’s Choice。",
  walmartDifferent: "其它产品显示为该关键词的 Walmart’s Choice。"
}, Sr = {
  min: "最小值",
  max: "最大值"
}, hr = {
  copy: "复制 {label}",
  copied: "{label} 已复制",
  myProduct: "我的产品",
  new: "新"
}, fr = {
  more: "显示更多",
  less: "显示更少",
  filters: {
    show: "显示筛选器",
    hide: "隐藏筛选器"
  }
}, br = {
  time: "时间",
  price: "价格",
  rank: "排名",
  rating: "评分",
  salesRank: "销量排名",
  newPrice: "新价格",
  listPrice: "定价",
  values: "数值",
  sales: "销量",
  trendLine: "趋势线",
  movingAverage: "7天平均走势图",
  reviews: "评论",
  numberOfReviews: "评论数量",
  searchVolume: "搜索量",
  reviewCount: "评论数量",
  downloads: {
    csv: "下载CSV文件",
    xls: "下载XLS文件",
    png: "下载PNG图像",
    jpeg: "下载JPEG图像"
  },
  resetZoom: "重置缩放",
  progress: "进展",
  timetable: "时间",
  noData: "无数据"
}, Tr = {
  week: "过去7天",
  twoWeek: "过去15天",
  month: "上个月",
  custom: "自定义范围",
  preset: "预设",
  minRangeInDays: "您可选的最小日期范围是 {minRangeInDays} 天"
}, Ar = {
  AF: "阿富汗",
  AX: "奥兰群岛",
  AL: "阿尔巴尼亚",
  DZ: "阿尔及利亚",
  AS: "美属萨摩亚",
  AD: "安道尔",
  AO: "安哥拉",
  AI: "安圭拉",
  AQ: "南极洲",
  AG: "安提瓜和巴布达",
  AR: "阿根廷",
  AM: "亚美尼亚",
  AW: "阿鲁巴岛",
  AU: "澳大利亚",
  AT: "奥地利",
  AZ: "阿塞拜疆",
  BS: "巴哈马",
  BH: "巴林",
  BD: "孟加拉国",
  BB: "巴巴多斯",
  BY: "白俄罗斯",
  BE: "比利时",
  BZ: "伯利兹",
  BJ: "贝宁",
  BM: "百慕大",
  BT: "不丹",
  BO: "玻利维亚",
  BQ: "荷属博内尔岛、圣尤斯特歇斯圣和萨巴岛",
  BA: "波斯尼亚和黑塞哥维那（简称：波黑）",
  BW: "博茨瓦纳",
  BV: "布维岛",
  BR: "巴西",
  IO: "英属印度洋领地",
  BN: "文莱达鲁萨兰国",
  BG: "保加利亚",
  BF: "布基纳法索",
  BI: "布隆迪",
  CV: "佛得角",
  KH: "柬埔寨",
  CM: "喀麦隆",
  CA: "加拿大",
  KY: "开曼群岛",
  CF: "中非共和国",
  TD: "乍得",
  CL: "智利",
  CN: "中国",
  CX: "圣诞岛",
  CC: "科科斯（基林）群岛",
  CO: "哥伦比亚",
  KM: "科摩罗",
  CG: "刚果",
  CD: "刚果",
  CK: "库克群岛",
  CR: "哥斯达黎加",
  CI: "科特迪瓦",
  HR: "克罗地亚",
  CU: "古巴",
  CW: "库拉索",
  CY: "塞浦路斯",
  CZ: "捷克",
  DK: "丹麦",
  DJ: "吉布提",
  DM: "多米尼克",
  DO: "多明尼加共和国",
  EC: "厄瓜多尔",
  EG: "埃及",
  SV: "萨尔瓦多",
  GQ: "赤道几内亚",
  ER: "厄立特里亚",
  EE: "爱沙尼亚",
  SZ: "斯威士兰",
  ET: "埃塞俄比亚",
  FK: "福克兰群岛（马尔维纳斯）",
  FO: "法罗群岛",
  FJ: "斐济",
  FI: "芬兰",
  FR: "法国",
  GF: "法属圭亚那",
  PF: "法属波利尼西亚",
  TF: "法属南部领地",
  GA: "加蓬",
  GM: "冈比亚",
  GE: "乔治亚州",
  DE: "德国",
  GH: "加纳",
  GI: "直布罗陀",
  GR: "希腊",
  GL: "格陵兰",
  GD: "格林纳达",
  GP: "瓜德罗普",
  GU: "关岛",
  GT: "危地马拉",
  GG: "根西岛",
  GN: "几内亚",
  GW: "几内亚比绍",
  GY: "圭亚那",
  HT: "海地",
  HM: "赫德岛和麦克唐纳群岛",
  VA: "教廷",
  HN: "洪都拉斯",
  HK: "香港",
  HU: "匈牙利",
  IS: "冰岛",
  IN: "印度",
  ID: "印度尼西亚",
  IR: "伊朗",
  IQ: "伊拉克",
  IE: "爱尔兰",
  IM: "马恩岛",
  IL: "以色列",
  IT: "意大利",
  JM: "牙买加",
  JP: "日本",
  JE: "泽西岛",
  JO: "约旦",
  KZ: "哈萨克斯坦",
  KE: "肯尼亚",
  KI: "基里巴斯",
  KP: "韩国",
  KR: "大韩民国",
  KW: "科威特",
  KG: "吉尔吉斯斯坦",
  LA: "老挝人民民主共和国",
  LV: "拉脱维亚",
  LB: "黎巴嫩",
  LS: "莱索托",
  LR: "利比里亚",
  LY: "利比亚",
  LI: "列支敦士登",
  LT: "立陶宛",
  LU: "卢森堡",
  MO: "澳门",
  MG: "马达加斯加",
  MW: "马拉维",
  MY: "马来西亚",
  MV: "马尔代夫",
  ML: "马里",
  MT: "马耳他",
  MH: "马绍尔群岛",
  MQ: "马提尼克岛",
  MR: "毛里塔尼亚",
  MU: "毛里求斯",
  YT: "马约特岛",
  MX: "墨西哥",
  FM: "密克罗尼西亚",
  MD: "摩尔多瓦",
  MC: "摩纳哥",
  MN: "蒙古",
  ME: "黑山",
  MS: "蒙特塞拉特",
  MA: "摩洛哥",
  MZ: "莫桑比克",
  MM: "缅甸",
  NA: "纳米比亚",
  NR: "瑙鲁",
  NP: "尼泊尔",
  NL: "荷兰",
  NC: "新喀里多尼亚",
  NZ: "新西兰",
  NI: "尼加拉瓜",
  NE: "尼日尔",
  NG: "尼日利亚",
  NU: "纽埃",
  NF: "诺福克岛",
  MK: "北马其顿",
  MP: "北马里亚纳群岛",
  NO: "挪威",
  OM: "阿曼",
  PK: "巴基斯坦",
  PW: "帕劳",
  PS: "巴勒斯坦国",
  PA: "巴拿马",
  PG: "巴布亚新几内亚",
  PY: "巴拉圭",
  PE: "秘鲁",
  PH: "菲律宾",
  PN: "皮特凯恩",
  PL: "波兰",
  PT: "葡萄牙",
  PR: "波多黎各",
  QA: "卡塔尔",
  RE: "留尼汪",
  RO: "罗马尼亚",
  RU: "俄罗斯联邦",
  RW: "卢旺达",
  BL: "圣巴泰勒米",
  SH: "圣赫勒拿、阿森松和特里斯坦达库尼亚",
  KN: "圣基茨和尼维斯",
  LC: "圣卢西亚",
  MF: "圣马丁（法属）",
  PM: "圣皮埃尔和密克隆",
  VC: "圣文森特和格林纳丁斯",
  WS: "萨摩亚",
  SM: "圣马力诺",
  ST: "圣多美和普林西比",
  SA: "沙特阿拉伯",
  SN: "塞内加尔",
  RS: "塞尔维亚",
  SC: "塞舌尔",
  SL: "塞拉利昂",
  SG: "新加坡",
  SX: "圣马丁（荷兰部分）",
  SK: "斯洛伐克",
  SI: "斯洛文尼亚",
  SB: "所罗门群岛",
  SO: "索马里",
  ZA: "南非",
  GS: "南乔治亚岛和南桑威奇群岛",
  SS: "南苏丹",
  ES: "西班牙",
  LK: "斯里兰卡",
  SD: "苏丹",
  SR: "苏里南",
  SJ: "斯瓦尔巴和扬马延",
  SE: "瑞典",
  CH: "瑞士",
  SY: "阿拉伯叙利亚共和国",
  TW: "中国台湾省",
  TJ: "塔吉克斯坦",
  TZ: "坦桑尼亚",
  TH: "泰国",
  TL: "东帝汶",
  TG: "多哥",
  TK: "托克劳",
  TO: "汤加",
  TT: "特立尼达和多巴哥",
  TN: "突尼斯",
  TR: "土耳其",
  TM: "土库曼斯坦",
  TC: "特克斯和凯科斯群岛",
  TV: "图瓦卢",
  UG: "乌干达",
  UA: "乌克兰",
  AE: "阿拉伯联合酋长国",
  GB: "大不列颠及北爱尔兰联合王国",
  US: "美国",
  UM: "美国本土外小岛屿",
  UY: "乌拉圭",
  UZ: "乌兹别克斯坦",
  VU: "瓦努阿图",
  VE: "委内瑞拉",
  VN: "越南",
  VG: "维尔京群岛",
  VI: "维尔京群岛",
  WF: "瓦利斯和富图纳",
  EH: "撒哈拉沙漠西部",
  YE: "也门",
  ZM: "赞比亚",
  ZW: "津巴布韦"
}, yr = {
  active: "活跃的",
  amazonSellerAccount: "亚马逊卖家账户",
  showAuthToken: "显示身份验证令牌",
  addNickname: "添加昵称",
  editNickname: "修改昵称",
  inactive: "不活跃",
  walmartSellerAccount: "Walmart帐户",
  update: "更新",
  googleAds: "Google Ads"
}, Mr = {
  small: "小件",
  medium: "中",
  large: "大号",
  extraLarge: "加大码"
}, Pr = {
  selectAllOption: "选择所有",
  noneOption: "无"
}, Cr = {
  description: "第 {current} 步（共 {stepsLength} 步）："
}, vr = {
  categoryBSR: {
    mainCategoryTooltip: "主类目 BSR",
    subcategoryTooltip: "子类目BSR",
    subcategoryTemporaryTooltip: "子类目"
  },
  price: {
    priceTooltip: "当前价格",
    priceTrendTooltip: "90 天价格趋势"
  },
  reviews: {
    numberOfReviewTooltip: "产品的客户评论总数",
    reviewRatingTooltip: "评论评分"
  },
  lastYearSales: {
    salesTooltip: "去年销量（单位）",
    salesYearOverYearTooltip: "销量年同比"
  },
  monthlySales: {
    salesTooltip: "月销量（单位）",
    salesTrendTooltip: "90 天销量趋势"
  },
  seller: {
    sellerNameTooltip: "卖家姓名",
    numberOfSellersTooltip: "活跃卖家数量"
  },
  shippingDetails: {
    productSizeTooltip: "产品尺寸决定 FBA 运费",
    dimensionsTooltip: "包装尺寸（英寸）"
  }
}, zr = {
  description: "文件格式：JPG 或 PNG",
  note: "最大尺寸：200 KB",
  deleteImage: "删除图像"
}, Ir = {
  most: "最大机会",
  mostTooltip: "基于竞争成熟度更容易打入利基市场",
  least: "最少的机会",
  leastTooltip: "基于竞争成熟度更难打入利基市场"
}, wr = {
  janSept: "1 月 - 9 月",
  octDec: "10 月 - 12 月"
}, _r = {
  1: "小型标准大小",
  2: "大型标件",
  3: "小型超大",
  4: "中等超大",
  5: "大型超大件",
  6: "特殊超大",
  7: "信封",
  8: "小型轻件",
  9: "小信纸",
  10: "大信纸",
  11: "加大信纸",
  12: "小信封",
  13: "标准信封",
  14: "大信封",
  15: "标准包裹",
  16: "小件",
  17: "标准大小",
  18: "超大",
  19: "标准超大",
  20: "重物大件",
  21: "超大号",
  22: "超大信封",
  23: "小包裹",
  "-1": "不适用"
}, Gr = "You do not have access to this tool. Please contact your plan administrator for access.", Er = {
  plans: nr,
  common: ir,
  placeholders: rr,
  buttons: or,
  upgrade: sr,
  subscriptionRequired: lr,
  notFoundResult: cr,
  table: ur,
  tips: dr,
  orderListItem: mr,
  businessOverview: pr,
  choiceBadge: gr,
  minmax: Sr,
  productSummary: hr,
  showMore: fr,
  charts: br,
  calendar: Tr,
  switch: {
    edited: "已编辑"
  },
  countries: Ar,
  token: yr,
  size: Mr,
  ultraSelect: Pr,
  stepper: Cr,
  cells: vr,
  uploadImage: zr,
  opportunity: Ir,
  storageFee: wr,
  sizeTier: _r,
  subAccountDoNotHaveAccess: Gr
}, Br = new Xe({ en: Xn, de: Pn, es: Ii, it: tr, zh: Er }, {
  logsEnabled: !1
}), Fr = ({ children: e, forceLang: a }) => fe.jsxs(Qe, { strings: Br, TranslateContext: je, forceLang: a, children: [fe.jsx(Rr, {}), e] }), je = L.createContext(null), Nr = () => {
  const e = L.useContext(je);
  if (!e)
    throw new Error("[Translation] The provider is not defined");
  return e;
}, Rr = () => {
  const e = Nr();
  return L.useEffect(() => {
    Lr.set(e);
  }, [e]), null;
}, Dr = Lt(() => ({
  translation: null
})), Lr = Zt(Dr, "translation");
export {
  v as A,
  Aa as B,
  Me as C,
  Ha as D,
  G as L,
  lt as M,
  I as S,
  Fr as U,
  Ke as a,
  La as b,
  Lt as c,
  Va as d,
  Pt as e,
  ka as f,
  Pe as g,
  Ct as h,
  O as i,
  ga as j,
  zt as k,
  Zt as l,
  Nr as m,
  yt as n,
  le as o,
  Le as p,
  ce as q,
  se as r,
  Ce as s,
  xe as t,
  Dt as u,
  Ca as v,
  Oe as w,
  He as x,
  ma as y,
  ta as z
};
