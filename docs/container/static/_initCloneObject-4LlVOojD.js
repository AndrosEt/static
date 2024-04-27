import {eg as g, eR as h, hD as x, g4 as m, ib as i, fU as b} from "./index-tEWTe_cM.js";
import {bm as w} from "./Learn-ZI4QJ8Ms.js";
var u = Object.create
    , O = function() {
    function e() {}
    return function(t) {
        if (!g(t))
            return {};
        if (u)
            return u(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0,
            n
    }
}();
function A(e, t) {
    var n = -1
        , r = e.length;
    for (t || (t = Array(r)); ++n < r; )
        t[n] = e[n];
    return t
}
function B(e, t, n, r) {
    var p = !n;
    n || (n = {});
    for (var f = -1, v = t.length; ++f < v; ) {
        var o = t[f]
            , s = r ? r(n[o], e[o], o, n, e) : void 0;
        s === void 0 && (s = e[o]),
            p ? h(n, o, s) : x(n, o, s)
    }
    return n
}
var d = typeof exports == "object" && exports && !exports.nodeType && exports
    , a = d && typeof module == "object" && module && !module.nodeType && module
    , U = a && a.exports === d
    , l = U ? m.Buffer : void 0
    , c = l ? l.allocUnsafe : void 0;
function E(e, t) {
    if (t)
        return e.slice();
    var n = e.length
        , r = c ? c(n) : new e.constructor(n);
    return e.copy(r),
        r
}
function C(e) {
    var t = new e.constructor(e.byteLength);
    return new i(t).set(new i(e)),
        t
}
function P(e, t) {
    var n = t ? C(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.length)
}
function D(e) {
    return typeof e.constructor == "function" && !b(e) ? O(w(e)) : {}
}
export {B as a, C as b, A as c, P as d, E as e, D as i};
//# sourceMappingURL=_initCloneObject-4LlVOojD.js.map
