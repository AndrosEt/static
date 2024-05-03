import { q as $, r as M, v as _, M as D, w as ne, S as F, x as ue, y as W, c as ie, g as j, p as le, s as ce } from "./BsRJmYuf.js";
import { n as p } from "./D527xXcp.js";
import { r as H } from "./react-D5yUVy0K.js";
import { c as ge } from "./DRYgYZLM.js";
import { o as de, a as ve, b as Se, U as J, c as Q, S as C, d as ye } from "./BdMKWvWh.js";
import { S as Ae, c as we } from "./B_pZSKjD.js";
import { r as q } from "./_JqgLpqe.js";
import { a as Te } from "./C44CHjOW.js";
var Oe = $(M, "WeakMap");
const G = Oe;
var be = de(Object.keys, Object), Pe = Object.prototype, me = Pe.hasOwnProperty;
function Le(e) {
  if (!ve(e))
    return be(e);
  var r = [];
  for (var a in Object(e))
    me.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
function _e(e) {
  return Te(e) ? Se(e) : Le(e);
}
function Ee(e, r) {
  for (var a = -1, t = r.length, u = e.length; ++a < t; )
    e[u + a] = r[a];
  return e;
}
function Re(e, r) {
  for (var a = -1, t = e == null ? 0 : e.length, u = 0, n = []; ++a < t; ) {
    var i = e[a];
    r(i, a, e) && (n[u++] = i);
  }
  return n;
}
function $e() {
  return [];
}
var Me = Object.prototype, Ce = Me.propertyIsEnumerable, X = Object.getOwnPropertySymbols, xe = X ? function(e) {
  return e == null ? [] : (e = Object(e), Re(X(e), function(r) {
    return Ce.call(e, r);
  }));
} : $e;
function Ie(e, r, a) {
  var t = r(e);
  return q(e) ? t : Ee(t, a(e));
}
function Y(e) {
  return Ie(e, _e, xe);
}
var De = $(M, "DataView");
const U = De;
var qe = $(M, "Promise");
const B = qe;
var Ge = $(M, "Set");
const K = Ge;
var Z = "[object Map]", Ue = "[object Object]", z = "[object Promise]", V = "[object Set]", h = "[object WeakMap]", k = "[object DataView]", Be = _(U), Ke = _(D), Ne = _(B), Fe = _(K), We = _(G), L = ne;
(U && L(new U(new ArrayBuffer(1))) != k || D && L(new D()) != Z || B && L(B.resolve()) != z || K && L(new K()) != V || G && L(new G()) != h) && (L = function(e) {
  var r = ne(e), a = r == Ue ? e.constructor : void 0, t = a ? _(a) : "";
  if (t)
    switch (t) {
      case Be:
        return k;
      case Ke:
        return Z;
      case Ne:
        return z;
      case Fe:
        return V;
      case We:
        return h;
    }
  return r;
});
const o = L;
function je(e, r) {
  for (var a = -1, t = e == null ? 0 : e.length; ++a < t; )
    if (r(e[a], a, e))
      return !0;
  return !1;
}
var pe = 1, He = 2;
function fe(e, r, a, t, u, n) {
  var i = a & pe, d = e.length, l = r.length;
  if (d != l && !(i && l > d))
    return !1;
  var v = n.get(e), S = n.get(r);
  if (v && S)
    return v == r && S == e;
  var y = -1, s = !0, O = a & He ? new Ae() : void 0;
  for (n.set(e, r), n.set(r, e); ++y < d; ) {
    var A = e[y], w = r[y];
    if (t)
      var P = i ? t(w, A, y, r, e, n) : t(A, w, y, e, r, n);
    if (P !== void 0) {
      if (P)
        continue;
      s = !1;
      break;
    }
    if (O) {
      if (!je(r, function(b, m) {
        if (!we(O, m) && (A === b || u(A, b, a, t, n)))
          return O.push(m);
      })) {
        s = !1;
        break;
      }
    } else if (!(A === w || u(A, w, a, t, n))) {
      s = !1;
      break;
    }
  }
  return n.delete(e), n.delete(r), s;
}
function Je(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(t, u) {
    a[++r] = [u, t];
  }), a;
}
function Qe(e) {
  var r = -1, a = Array(e.size);
  return e.forEach(function(t) {
    a[++r] = t;
  }), a;
}
var Xe = 1, Ye = 2, Ze = "[object Boolean]", ze = "[object Date]", Ve = "[object Error]", he = "[object Map]", ke = "[object Number]", oe = "[object RegExp]", er = "[object Set]", rr = "[object String]", tr = "[object Symbol]", ar = "[object ArrayBuffer]", nr = "[object DataView]", ee = F ? F.prototype : void 0, x = ee ? ee.valueOf : void 0;
function fr(e, r, a, t, u, n, i) {
  switch (a) {
    case nr:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case ar:
      return !(e.byteLength != r.byteLength || !n(new J(e), new J(r)));
    case Ze:
    case ze:
    case ke:
      return ue(+e, +r);
    case Ve:
      return e.name == r.name && e.message == r.message;
    case oe:
    case rr:
      return e == r + "";
    case he:
      var d = Je;
    case er:
      var l = t & Xe;
      if (d || (d = Qe), e.size != r.size && !l)
        return !1;
      var v = i.get(e);
      if (v)
        return v == r;
      t |= Ye, i.set(e, r);
      var S = fe(d(e), d(r), t, u, n, i);
      return i.delete(e), S;
    case tr:
      if (x)
        return x.call(e) == x.call(r);
  }
  return !1;
}
var sr = 1, ur = Object.prototype, ir = ur.hasOwnProperty;
function lr(e, r, a, t, u, n) {
  var i = a & sr, d = Y(e), l = d.length, v = Y(r), S = v.length;
  if (l != S && !i)
    return !1;
  for (var y = l; y--; ) {
    var s = d[y];
    if (!(i ? s in r : ir.call(r, s)))
      return !1;
  }
  var O = n.get(e), A = n.get(r);
  if (O && A)
    return O == r && A == e;
  var w = !0;
  n.set(e, r), n.set(r, e);
  for (var P = i; ++y < l; ) {
    s = d[y];
    var b = e[s], m = r[s];
    if (t)
      var f = i ? t(m, b, s, r, e, n) : t(b, m, s, e, r, n);
    if (!(f === void 0 ? b === m || u(b, m, a, t, n) : f)) {
      w = !1;
      break;
    }
    P || (P = s == "constructor");
  }
  if (w && !P) {
    var c = e.constructor, g = r.constructor;
    c != g && "constructor" in e && "constructor" in r && !(typeof c == "function" && c instanceof c && typeof g == "function" && g instanceof g) && (w = !1);
  }
  return n.delete(e), n.delete(r), w;
}
var cr = 1, re = "[object Arguments]", te = "[object Array]", R = "[object Object]", gr = Object.prototype, ae = gr.hasOwnProperty;
function dr(e, r, a, t, u, n) {
  var i = q(e), d = q(r), l = i ? te : o(e), v = d ? te : o(r);
  l = l == re ? R : l, v = v == re ? R : v;
  var S = l == R, y = v == R, s = l == v;
  if (s && Q(e)) {
    if (!Q(r))
      return !1;
    i = !0, S = !1;
  }
  if (s && !S)
    return n || (n = new C()), i || ye(e) ? fe(e, r, a, t, u, n) : fr(e, r, l, a, t, u, n);
  if (!(a & cr)) {
    var O = S && ae.call(e, "__wrapped__"), A = y && ae.call(r, "__wrapped__");
    if (O || A) {
      var w = O ? e.value() : e, P = A ? r.value() : r;
      return n || (n = new C()), u(w, P, a, t, n);
    }
  }
  return s ? (n || (n = new C()), lr(e, r, a, t, u, n)) : !1;
}
function se(e, r, a, t, u) {
  return e === r ? !0 : e == null || r == null || !W(e) && !W(r) ? e !== e && r !== r : dr(e, r, a, t, se, u);
}
function vr(e, r) {
  return se(e, r);
}
const Sr = (e) => ({
  status: e || "init",
  error: void 0,
  fetchError: void 0,
  payload: void 0,
  requestId: void 0
}), I = ie(() => ({})), Er = (e, r, a, t) => {
  const u = p(12), n = Sr(t == null ? void 0 : t.initialStatus), i = j(e.getState(), r, null), d = (f) => {
    I.setState({ [u]: f });
  };
  d(n);
  const l = (f) => {
    const c = le(e.getState(), (g) => {
      ce(g, r, f);
    });
    e.setState(c);
  }, v = () => I.getState()[u] || n, S = () => {
    const f = j(e.getState(), r, "_empty");
    return f !== "_empty" && f || i;
  }, y = (f, c = !1) => {
    if (typeof f == "object") {
      const g = S(), T = c ? { ...f } : { ...g, ...f };
      l(typeof f == "object" ? T : f);
    } else
      f != null && l(f);
  };
  let s = S();
  const O = {
    action: (f, c, g) => {
      var T;
      d({
        status: c ?? "loading",
        payload: f,
        error: null,
        fetchError: void 0,
        requestId: g
      }), (T = t == null ? void 0 : t.action) == null || T.call(t, { previousResult: s, requestId: g || "", payload: f }), s = S(), t != null && t.optimisticUpdate && l(t.optimisticUpdate(f));
    },
    fulfilled: (f, c, g) => {
      var E;
      const T = v();
      d({ ...T, status: "loaded" }), g === T.requestId && (f !== void 0 && (!(t != null && t.optimisticUpdate) || !vr(s, f)) && l(f), (E = t == null ? void 0 : t.fulfilled) == null || E.call(t, { previousResult: s, requestId: g, payload: c, result: f }));
    },
    rejected: (f, c, g, T) => {
      var N;
      const E = v();
      d({ ...E, status: "error", error: c, fetchError: g }), (N = t == null ? void 0 : t.rejected) == null || N.call(t, {
        previousResult: s,
        requestId: T || "",
        payload: f,
        error: c,
        fetchError: g
      }), t != null && t.optimisticUpdate && l(s);
    },
    abort: (f, c) => {
      var T;
      v().requestId === c && (d(n), (T = t == null ? void 0 : t.abort) == null || T.call(t, { previousResult: s, requestId: c, payload: f }), t != null && t.optimisticUpdate && l(s));
    },
    resolved: (f, c) => {
      var g;
      (g = t == null ? void 0 : t.resolved) == null || g.call(t, { previousResult: s, requestId: c, payload: f });
    }
  }, { action: A, abort: w } = ge(a, O), P = () => {
    d(n), l(i);
  }, b = {}, m = (f) => {
    const [c] = H.useState(() => p());
    return H.useEffect(() => (b[c] = !0, () => {
      b[c] = !1;
    }), []), I((g) => (f || yr)(g[u] || n));
  };
  return Ar(e, () => d(n)), Object.assign(m, {
    abort: w,
    action: A,
    clear: P,
    set: y,
    key: u,
    get: v,
    _usages: b
  });
}, yr = (e) => e, Ar = (e, r) => {
  setTimeout(() => {
    e.getState()._resettableLifeCycle !== void 0 && e.subscribe((t, u) => {
      t._resettableLifeCycle !== u._resettableLifeCycle && r();
    });
  }, 0);
};
export {
  K as S,
  Ee as a,
  Ie as b,
  se as c,
  Qe as d,
  vr as e,
  xe as g,
  Sr as i,
  _e as k,
  Er as l,
  Ar as r,
  $e as s,
  I as u
};
