import { r as t, b as e } from "./CwRJyjkV.js";
var s = 6e4, u = 36e5, c = 1e3;
function d(n, r) {
  return t(2, arguments), e(n).getTime() - e(r).getTime();
}
var o = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(r) {
    return r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  // Math.trunc is not supported by IE
}, i = "trunc";
function l(n) {
  return n ? o[n] : o[i];
}
export {
  u as a,
  c as b,
  d,
  l as g,
  s as m
};
