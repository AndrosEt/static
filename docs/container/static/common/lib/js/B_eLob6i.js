import { o as s, i as e } from "./BsRJmYuf.js";
var f = /\s/;
function o(r) {
  for (var t = r.length; t-- && f.test(r.charAt(t)); )
    ;
  return t;
}
var c = /^\s+/;
function a(r) {
  return r && r.slice(0, o(r) + 1).replace(c, "");
}
var n = NaN, m = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, b = /^0o[0-7]+$/i, y = parseInt;
function d(r) {
  if (typeof r == "number")
    return r;
  if (s(r))
    return n;
  if (e(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = e(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = a(r);
  var i = p.test(r);
  return i || b.test(r) ? y(r.slice(2), i ? 2 : 8) : m.test(r) ? n : +r;
}
export {
  d as t
};
