import { r as a } from "./react-D5yUVy0K.js";
function W(e, r, n) {
  var m = this, t = a.useRef(null), f = a.useRef(0), u = a.useRef(null), o = a.useRef([]), l = a.useRef(), s = a.useRef(), F = a.useRef(e), v = a.useRef(!0);
  F.current = e;
  var x = typeof window < "u", g = !r && r !== 0 && x;
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  r = +r || 0;
  var E = !!(n = n || {}).leading, b = !("trailing" in n) || !!n.trailing, d = "maxWait" in n, D = "debounceOnServer" in n && !!n.debounceOnServer, h = d ? Math.max(+n.maxWait || 0, r) : null;
  a.useEffect(function() {
    return v.current = !0, function() {
      v.current = !1;
    };
  }, []);
  var q = a.useMemo(function() {
    var y = function(c) {
      var i = o.current, w = l.current;
      return o.current = l.current = null, f.current = c, s.current = F.current.apply(w, i);
    }, p = function(c, i) {
      g && cancelAnimationFrame(u.current), u.current = g ? requestAnimationFrame(c) : setTimeout(c, i);
    }, M = function(c) {
      if (!v.current)
        return !1;
      var i = c - t.current;
      return !t.current || i >= r || i < 0 || d && c - f.current >= h;
    }, T = function(c) {
      return u.current = null, b && o.current ? y(c) : (o.current = l.current = null, s.current);
    }, A = function c() {
      var i = Date.now();
      if (M(i))
        return T(i);
      if (v.current) {
        var w = r - (i - t.current), O = d ? Math.min(w, h - (i - f.current)) : w;
        p(c, O);
      }
    }, R = function() {
      if (x || D) {
        var c = Date.now(), i = M(c);
        if (o.current = [].slice.call(arguments), l.current = m, t.current = c, i) {
          if (!u.current && v.current)
            return f.current = t.current, p(A, r), E ? y(t.current) : s.current;
          if (d)
            return p(A, r), y(t.current);
        }
        return u.current || p(A, r), s.current;
      }
    };
    return R.cancel = function() {
      u.current && (g ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), f.current = 0, o.current = t.current = l.current = u.current = null;
    }, R.isPending = function() {
      return !!u.current;
    }, R.flush = function() {
      return u.current ? T(Date.now()) : s.current;
    }, R;
  }, [E, d, r, h, b, g, x, D]);
  return q;
}
function S(e, r) {
  return e === r;
}
function k(e, r) {
  return r;
}
function P(e, r, n) {
  var m = n && n.equalityFn || S, t = a.useReducer(k, e), f = t[0], u = t[1], o = W(a.useCallback(function(s) {
    return u(s);
  }, [u]), r, n), l = a.useRef(e);
  return m(l.current, e) || (o(e), l.current = e), [f, o];
}
function j(e, r, n) {
  var m = n === void 0 ? {} : n, t = m.leading, f = m.trailing;
  return W(e, r, { maxWait: r, leading: t === void 0 || t, trailing: f === void 0 || f });
}
export {
  W as c,
  j as f,
  P as o
};
