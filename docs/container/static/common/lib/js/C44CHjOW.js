import { B as t } from "./BsRJmYuf.js";
var i = 9007199254740991;
function o(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= i;
}
function e(n) {
  return n != null && o(n.length) && !t(n);
}
function f(n) {
  return function(r) {
    return n(r);
  };
}
export {
  e as a,
  f as b,
  o as i
};
