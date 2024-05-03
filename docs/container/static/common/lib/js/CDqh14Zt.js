import { A as y } from "./EsICsu8T.js";
import { b as U } from "./VvgyOqy6.js";
import { g as _ } from "./CxU1FO_U.js";
import { I as F, m as N } from "./_JqgLpqe.js";
import { r as P, i as R } from "./BsRJmYuf.js";
import { t as C } from "./B_eLob6i.js";
var b = function() {
  return P.Date.now();
}, D = "Expected a function", O = Math.max, j = Math.min;
function p(n, i, r) {
  var a, l, d, f, e, m, o = 0, E = !1, c = !1, v = !0;
  if (typeof n != "function")
    throw new TypeError(D);
  i = C(i) || 0, R(r) && (E = !!r.leading, c = "maxWait" in r, d = c ? O(C(r.maxWait) || 0, i) : d, v = "trailing" in r ? !!r.trailing : v);
  function h(t) {
    var u = a, s = l;
    return a = l = void 0, o = t, f = n.apply(s, u), f;
  }
  function L(t) {
    return o = t, e = setTimeout(g, i), E ? h(t) : f;
  }
  function W(t) {
    var u = t - m, s = t - o, A = i - u;
    return c ? j(A, d - s) : A;
  }
  function k(t) {
    var u = t - m, s = t - o;
    return m === void 0 || u >= i || u < 0 || c && s >= d;
  }
  function g() {
    var t = b();
    if (k(t))
      return I(t);
    e = setTimeout(g, W(t));
  }
  function I(t) {
    return e = void 0, v && a ? h(t) : (a = l = void 0, f);
  }
  function M() {
    e !== void 0 && clearTimeout(e), o = 0, a = m = l = e = void 0;
  }
  function S() {
    return e === void 0 ? f : I(b());
  }
  function T() {
    var t = b(), u = k(t);
    if (a = arguments, l = this, m = t, u) {
      if (e === void 0)
        return L(m);
      if (c)
        return clearTimeout(e), e = setTimeout(g, i), h(m);
    }
    return e === void 0 && (e = setTimeout(g, i)), f;
  }
  return T.cancel = M, T.flush = S, T;
}
var x;
(function(n) {
  const r = (F() ? "" : N) + "/api/v1/customers/me", a = async () => U({
    url: _(r, {}),
    withCredentials: !0
  });
  n.get = p(a, 3600, { leading: !0, trailing: !1 });
})(x || (x = {}));
const J = x.get;
y.get;
const K = (n) => {
  var i, r;
  return {
    ...n == null ? void 0 : n.results,
    userName: (i = n == null ? void 0 : n.results) == null ? void 0 : i.full_name.split(" ")[0],
    mfaEnablingPrompts: (r = n == null ? void 0 : n.results) == null ? void 0 : r.mfaEnablingPrompts
  };
};
export {
  x as A,
  p as d,
  J as g,
  K as t
};
