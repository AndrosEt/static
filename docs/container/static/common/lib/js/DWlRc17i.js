import { r as f } from "./react-D5yUVy0K.js";
var d = function() {
};
function m(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  e && e.addEventListener && e.addEventListener.apply(e, t);
}
function g(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  e && e.removeEventListener && e.removeEventListener.apply(e, t);
}
var u = typeof window < "u", v = function(e, t) {
  return t !== void 0 ? t : u ? window.matchMedia(e).matches : !1;
}, h = function(e, t) {
  var n = f.useState(v(e, t)), o = n[0], r = n[1];
  return f.useEffect(function() {
    var s = !0, a = window.matchMedia(e), i = function() {
      s && r(!!a.matches);
    };
    return a.addEventListener("change", i), r(a.matches), function() {
      s = !1, a.removeEventListener("change", i);
    };
  }, [e]), o;
};
export {
  g as a,
  u as i,
  d as n,
  m as o,
  h as u
};
