function n(t, e) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, c) {
    return o.__proto__ = c, o;
  }, n(t, e);
}
function p() {
  return p = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, p.apply(this, arguments);
}
function f(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e);
}
export {
  n as _,
  p as a,
  f as b
};
