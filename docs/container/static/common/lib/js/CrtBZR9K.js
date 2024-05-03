import { j as E, k as we, s as ce } from "./_JqgLpqe.js";
import { r as ue, c as ye, g as Se } from "./react-D5yUVy0K.js";
import { u as ee, a as re } from "./styled-components-sg3HbxYZ.js";
import { L as je } from "./DLMIu_Fz.js";
import { e as le, I as Te, d as me, f as Pe, i as _e } from "./DXDnZb_T.js";
import { a as Ee } from "./CZVHOlcu.js";
import { F as Ie } from "./Cg-oD5Fc.js";
import { T as ve } from "./DqlOkTnW.js";
const Ne = ({ icon: o, className: U, ...P }) => E.jsx(ve, { offset: 8, interactive: !0, ...P, children: E.jsx(Ve, { icon: o || Ee, className: U }) }), Ve = ee(Ie)`
  color: ${(o) => o.theme.systemColors.grey600};
  font-size: 16px;
  width: 16px;
  height: 16px;
`, de = ee(le)``, be = ee.div`
  ${we};
  color: ${(o) => o.theme.systemColors.grey600};
`, Ae = ({ label: o, tooltipContent: U, className: P, tooltipSettings: u, required: i }) => o ? E.jsxs(xe, { className: P, children: [o && E.jsxs(be, { children: [o, i && E.jsx(ke, { children: "*" })] }), U && E.jsx(Ne, { content: U, ...u })] }) : null, xe = ee.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme: o }) => o.spacing.sp4};
  margin-bottom: ${(o) => o.theme.spacing.sp4};
`, ke = ee.span`
  color: ${({ theme: o }) => o.systemColors.red400};
  margin-left: ${(o) => o.theme.spacing.sp4};
`, Le = Object.assign(Ae, {
  Wrapper: xe,
  Label: be,
  Required: ke
});
var Ce = { exports: {} };
(function(o, U) {
  (function(P, u) {
    o.exports = u(ue);
  })(ye, function(P) {
    return function(u) {
      function i(c) {
        if (s[c])
          return s[c].exports;
        var l = s[c] = { exports: {}, id: c, loaded: !1 };
        return u[c].call(l.exports, l, l.exports, i), l.loaded = !0, l.exports;
      }
      var s = {};
      return i.m = u, i.c = s, i.p = "", i(0);
    }([function(u, i, s) {
      function c(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function l(h, t) {
        var e = {};
        for (var r in h)
          t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(h, r) && (e[r] = h[r]);
        return e;
      }
      function m(h, t) {
        if (!(h instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(h, t) {
        if (!h)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || typeof t != "object" && typeof t != "function" ? h : t;
      }
      function w(h, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        h.prototype = Object.create(t && t.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(h, t) : h.__proto__ = t);
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.conformToMask = void 0;
      var x = Object.assign || function(h) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (h[r] = e[r]);
        }
        return h;
      }, k = /* @__PURE__ */ function() {
        function h(t, e) {
          for (var r = 0; r < e.length; r++) {
            var g = e[r];
            g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(t, g.key, g);
          }
        }
        return function(t, e, r) {
          return e && h(t.prototype, e), r && h(t, r), t;
        };
      }(), v = s(3);
      Object.defineProperty(i, "conformToMask", { enumerable: !0, get: function() {
        return c(v).default;
      } });
      var O = s(11), n = c(O), p = s(9), a = c(p), b = s(5), $ = c(b), C = s(2), M = function(h) {
        function t() {
          var e;
          m(this, t);
          for (var r = arguments.length, g = Array(r), y = 0; y < r; y++)
            g[y] = arguments[y];
          var d = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(g)));
          return d.setRef = d.setRef.bind(d), d.onBlur = d.onBlur.bind(d), d.onChange = d.onChange.bind(d), d;
        }
        return w(t, h), k(t, [{ key: "setRef", value: function(e) {
          this.inputElement = e;
        } }, { key: "initTextMask", value: function() {
          var e = this.props, r = this.props.value;
          this.textMaskInputElement = (0, $.default)(x({ inputElement: this.inputElement }, e)), this.textMaskInputElement.update(r);
        } }, { key: "componentDidMount", value: function() {
          this.initTextMask();
        } }, { key: "componentDidUpdate", value: function(e) {
          var r = this.props, g = r.value, y = r.pipe, d = r.mask, K = r.guide, L = r.placeholderChar, R = r.showMask, T = { guide: K, placeholderChar: L, showMask: R }, H = typeof y == "function" && typeof e.pipe == "function" ? y.toString() !== e.pipe.toString() : (0, C.isNil)(y) && !(0, C.isNil)(e.pipe) || !(0, C.isNil)(y) && (0, C.isNil)(e.pipe), N = d.toString() !== e.mask.toString(), D = Object.keys(T).some(function(V) {
            return T[V] !== e[V];
          }) || N || H, B = g !== this.inputElement.value;
          (B || D) && this.initTextMask();
        } }, { key: "render", value: function() {
          var r = this.props, g = r.render, y = l(r, ["render"]);
          return delete y.mask, delete y.guide, delete y.pipe, delete y.placeholderChar, delete y.keepCharPositions, delete y.value, delete y.onBlur, delete y.onChange, delete y.showMask, g(this.setRef, x({ onBlur: this.onBlur, onChange: this.onChange, defaultValue: this.props.value }, y));
        } }, { key: "onChange", value: function(e) {
          this.textMaskInputElement.update(), typeof this.props.onChange == "function" && this.props.onChange(e);
        } }, { key: "onBlur", value: function(e) {
          typeof this.props.onBlur == "function" && this.props.onBlur(e);
        } }]), t;
      }(n.default.PureComponent);
      i.default = M, M.propTypes = { mask: a.default.oneOfType([a.default.array, a.default.func, a.default.bool, a.default.shape({ mask: a.default.oneOfType([a.default.array, a.default.func]), pipe: a.default.func })]).isRequired, guide: a.default.bool, value: a.default.oneOfType([a.default.string, a.default.number]), pipe: a.default.func, placeholderChar: a.default.string, keepCharPositions: a.default.bool, showMask: a.default.bool }, M.defaultProps = { render: function(h, t) {
        return n.default.createElement("input", x({ ref: h }, t));
      } };
    }, function(u, i) {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.placeholderChar = "_", i.strFunction = "function";
    }, function(u, i, s) {
      function c() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.placeholderChar;
        if (!l(n))
          throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
        if (n.indexOf(p) !== -1)
          throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

` + ("The placeholder character that was received is: " + JSON.stringify(p) + `

`) + ("The mask that was received is: " + JSON.stringify(n)));
        return n.map(function(a) {
          return a instanceof RegExp ? p : a;
        }).join("");
      }
      function l(n) {
        return Array.isArray && Array.isArray(n) || n instanceof Array;
      }
      function m(n) {
        return typeof n == "string" || n instanceof String;
      }
      function f(n) {
        return typeof n == "number" && n.length === void 0 && !isNaN(n);
      }
      function w(n) {
        return typeof n > "u" || n === null;
      }
      function x(n) {
        for (var p = [], a = void 0; a = n.indexOf(O), a !== -1; )
          p.push(a), n.splice(a, 1);
        return { maskWithoutCaretTraps: n, indexes: p };
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.convertMaskToPlaceholder = c, i.isArray = l, i.isString = m, i.isNumber = f, i.isNil = w, i.processCaretTraps = x;
      var k = s(1), v = [], O = "[]";
    }, function(u, i, s) {
      function c() {
        var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!(0, m.isArray)(v)) {
          if ((typeof v > "u" ? "undefined" : l(v)) !== f.strFunction)
            throw new Error("Text-mask:conformToMask; The mask property must be an array.");
          v = v(k, O), v = (0, m.processCaretTraps)(v).maskWithoutCaretTraps;
        }
        var n = O.guide, p = n === void 0 || n, a = O.previousConformedValue, b = a === void 0 ? x : a, $ = O.placeholderChar, C = $ === void 0 ? f.placeholderChar : $, M = O.placeholder, h = M === void 0 ? (0, m.convertMaskToPlaceholder)(v, C) : M, t = O.currentCaretPosition, e = O.keepCharPositions, r = p === !1 && b !== void 0, g = k.length, y = b.length, d = h.length, K = v.length, L = g - y, R = L > 0, T = t + (R ? -L : 0), H = T + Math.abs(L);
        if (e === !0 && !R) {
          for (var N = x, D = T; D < H; D++)
            h[D] === C && (N += C);
          k = k.slice(0, T) + N + k.slice(T, g);
        }
        for (var B = k.split(x).map(function(G, J) {
          return { char: G, isNew: J >= T && J < H };
        }), V = g - 1; V >= 0; V--) {
          var _ = B[V].char;
          if (_ !== C) {
            var F = V >= T && y === K;
            _ === h[F ? V - L : V] && B.splice(V, 1);
          }
        }
        var z = x, Q = !1;
        e:
          for (var q = 0; q < d; q++) {
            var Y = h[q];
            if (Y === C) {
              if (B.length > 0)
                for (; B.length > 0; ) {
                  var te = B.shift(), j = te.char, oe = te.isNew;
                  if (j === C && r !== !0) {
                    z += C;
                    continue e;
                  }
                  if (v[q].test(j)) {
                    if (e === !0 && oe !== !1 && b !== x && p !== !1 && R) {
                      for (var ne = B.length, X = null, Z = 0; Z < ne; Z++) {
                        var A = B[Z];
                        if (A.char !== C && A.isNew === !1)
                          break;
                        if (A.char === C) {
                          X = Z;
                          break;
                        }
                      }
                      X !== null ? (z += j, B.splice(X, 1)) : q--;
                    } else
                      z += j;
                    continue e;
                  }
                  Q = !0;
                }
              r === !1 && (z += h.substr(q, d));
              break;
            }
            z += Y;
          }
        if (r && R === !1) {
          for (var I = null, S = 0; S < z.length; S++)
            h[S] === C && (I = S);
          z = I !== null ? z.substr(0, I + 1) : x;
        }
        return { conformedValue: z, meta: { someCharsRejected: Q } };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
        return typeof k;
      } : function(k) {
        return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
      };
      i.default = c;
      var m = s(2), f = s(1), w = [], x = "";
    }, function(u, i) {
      function s(m) {
        var f = m.previousConformedValue, w = f === void 0 ? l : f, x = m.previousPlaceholder, k = x === void 0 ? l : x, v = m.currentCaretPosition, O = v === void 0 ? 0 : v, n = m.conformedValue, p = m.rawValue, a = m.placeholderChar, b = m.placeholder, $ = m.indexesOfPipedChars, C = $ === void 0 ? c : $, M = m.caretTrapIndexes, h = M === void 0 ? c : M;
        if (O === 0 || !p.length)
          return 0;
        var t = p.length, e = w.length, r = b.length, g = n.length, y = t - e, d = y > 0, K = e === 0, L = y > 1 && !d && !K;
        if (L)
          return O;
        var R = d && (w === n || n === b), T = 0, H = void 0, N = void 0;
        if (R)
          T = O - y;
        else {
          var D = n.toLowerCase(), B = p.toLowerCase(), V = B.substr(0, O).split(l), _ = V.filter(function(W) {
            return D.indexOf(W) !== -1;
          });
          N = _[_.length - 1];
          var F = k.substr(0, _.length).split(l).filter(function(W) {
            return W !== a;
          }).length, z = b.substr(0, _.length).split(l).filter(function(W) {
            return W !== a;
          }).length, Q = z !== F, q = k[_.length - 1] !== void 0 && b[_.length - 2] !== void 0 && k[_.length - 1] !== a && k[_.length - 1] !== b[_.length - 1] && k[_.length - 1] === b[_.length - 2];
          !d && (Q || q) && F > 0 && b.indexOf(N) > -1 && p[O] !== void 0 && (H = !0, N = p[O]);
          for (var Y = C.map(function(W) {
            return D[W];
          }), te = Y.filter(function(W) {
            return W === N;
          }).length, j = _.filter(function(W) {
            return W === N;
          }).length, oe = b.substr(0, b.indexOf(a)).split(l).filter(function(W, se) {
            return W === N && p[se] !== W;
          }).length, ne = oe + j + te + (H ? 1 : 0), X = 0, Z = 0; Z < g; Z++) {
            var A = D[Z];
            if (T = Z + 1, A === N && X++, X >= ne)
              break;
          }
        }
        if (d) {
          for (var I = T, S = T; S <= r; S++)
            if (b[S] === a && (I = S), b[S] === a || h.indexOf(S) !== -1 || S === r)
              return I;
        } else if (H) {
          for (var G = T - 1; G >= 0; G--)
            if (n[G] === N || h.indexOf(G) !== -1 || G === 0)
              return G;
        } else
          for (var J = T; J >= 0; J--)
            if (b[J - 1] === a || h.indexOf(J) !== -1 || J === 0)
              return J;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.default = s;
      var c = [], l = "";
    }, function(u, i, s) {
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t) {
        var e = { previousConformedValue: void 0, previousPlaceholder: void 0 };
        return { state: e, update: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, y = g.inputElement, d = g.mask, K = g.guide, L = g.pipe, R = g.placeholderChar, T = R === void 0 ? a.placeholderChar : R, H = g.keepCharPositions, N = H !== void 0 && H, D = g.showMask, B = D !== void 0 && D;
          if (typeof r > "u" && (r = y.value), r !== e.previousConformedValue) {
            (typeof d > "u" ? "undefined" : x(d)) === C && d.pipe !== void 0 && d.mask !== void 0 && (L = d.pipe, d = d.mask);
            var V = void 0, _ = void 0;
            if (d instanceof Array && (V = (0, p.convertMaskToPlaceholder)(d, T)), d !== !1) {
              var F = f(r), z = y.selectionEnd, Q = e.previousConformedValue, q = e.previousPlaceholder, Y = void 0;
              if ((typeof d > "u" ? "undefined" : x(d)) === a.strFunction) {
                if (_ = d(F, { currentCaretPosition: z, previousConformedValue: Q, placeholderChar: T }), _ === !1)
                  return;
                var te = (0, p.processCaretTraps)(_), j = te.maskWithoutCaretTraps, oe = te.indexes;
                _ = j, Y = oe, V = (0, p.convertMaskToPlaceholder)(_, T);
              } else
                _ = d;
              var ne = { previousConformedValue: Q, guide: K, placeholderChar: T, pipe: L, placeholder: V, currentCaretPosition: z, keepCharPositions: N }, X = (0, n.default)(F, _, ne), Z = X.conformedValue, A = (typeof L > "u" ? "undefined" : x(L)) === a.strFunction, I = {};
              A && (I = L(Z, w({ rawValue: F }, ne)), I === !1 ? I = { value: Q, rejected: !0 } : (0, p.isString)(I) && (I = { value: I }));
              var S = A ? I.value : Z, G = (0, v.default)({ previousConformedValue: Q, previousPlaceholder: q, conformedValue: S, placeholder: V, rawValue: F, currentCaretPosition: z, placeholderChar: T, indexesOfPipedChars: I.indexesOfPipedChars, caretTrapIndexes: Y }), J = S === V && G === 0, W = B ? V : b, se = J ? W : S;
              e.previousConformedValue = se, e.previousPlaceholder = V, y.value !== se && (y.value = se, m(y, G));
            }
          }
        } };
      }
      function m(t, e) {
        document.activeElement === t && (M ? h(function() {
          return t.setSelectionRange(e, e, $);
        }, 0) : t.setSelectionRange(e, e, $));
      }
      function f(t) {
        if ((0, p.isString)(t))
          return t;
        if ((0, p.isNumber)(t))
          return String(t);
        if (t == null)
          return b;
        throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 ` + JSON.stringify(t));
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var w = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var g in r)
            Object.prototype.hasOwnProperty.call(r, g) && (t[g] = r[g]);
        }
        return t;
      }, x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      i.default = l;
      var k = s(4), v = c(k), O = s(3), n = c(O), p = s(2), a = s(1), b = "", $ = "none", C = "object", M = typeof navigator < "u" && /Android/i.test(navigator.userAgent), h = typeof requestAnimationFrame < "u" ? requestAnimationFrame : setTimeout;
    }, function(u, i) {
      function s(l) {
        return function() {
          return l;
        };
      }
      var c = function() {
      };
      c.thatReturns = s, c.thatReturnsFalse = s(!1), c.thatReturnsTrue = s(!0), c.thatReturnsNull = s(null), c.thatReturnsThis = function() {
        return this;
      }, c.thatReturnsArgument = function(l) {
        return l;
      }, u.exports = c;
    }, function(u, i, s) {
      function c(l, m, f, w, x, k, v, O) {
        if (!l) {
          var n;
          if (m === void 0)
            n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          else {
            var p = [f, w, x, k, v, O], a = 0;
            n = new Error(m.replace(/%s/g, function() {
              return p[a++];
            })), n.name = "Invariant Violation";
          }
          throw n.framesToPop = 1, n;
        }
      }
      u.exports = c;
    }, function(u, i, s) {
      var c = s(6), l = s(7), m = s(10);
      u.exports = function() {
        function f(k, v, O, n, p, a) {
          a !== m && l(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        }
        function w() {
          return f;
        }
        f.isRequired = f;
        var x = { array: f, bool: f, func: f, number: f, object: f, string: f, symbol: f, any: f, arrayOf: w, element: f, instanceOf: w, node: f, objectOf: w, oneOf: w, oneOfType: w, shape: w, exact: w };
        return x.checkPropTypes = c, x.PropTypes = x, x;
      };
    }, function(u, i, s) {
      u.exports = s(8)();
    }, function(u, i) {
      var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      u.exports = s;
    }, function(u, i) {
      u.exports = P;
    }]);
  });
})(Ce);
var Re = Ce.exports;
const De = /* @__PURE__ */ Se(Re);
var Oe = { exports: {} };
(function(o, U) {
  (function(P, u) {
    o.exports = u();
  })(ye, function() {
    return function(P) {
      function u(s) {
        if (i[s])
          return i[s].exports;
        var c = i[s] = { exports: {}, id: s, loaded: !1 };
        return P[s].call(c.exports, c, c.exports, u), c.loaded = !0, c.exports;
      }
      var i = {};
      return u.m = P, u.c = i, u.p = "", u(0);
    }([function(P, u, i) {
      function s(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(u, "__esModule", { value: !0 });
      var c = i(1);
      Object.defineProperty(u, "createAutoCorrectedDatePipe", { enumerable: !0, get: function() {
        return s(c).default;
      } });
      var l = i(2);
      Object.defineProperty(u, "createNumberMask", { enumerable: !0, get: function() {
        return s(l).default;
      } });
      var m = i(3);
      Object.defineProperty(u, "emailMask", { enumerable: !0, get: function() {
        return s(m).default;
      } });
    }, function(P, u) {
      function i() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "mm dd yyyy", m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = m.minYear, w = f === void 0 ? 1 : f, x = m.maxYear, k = x === void 0 ? 9999 : x, v = l.split(/[^dmyHMS]+/).sort(function(O, n) {
          return c.indexOf(O) - c.indexOf(n);
        });
        return function(O) {
          var n = [], p = { dd: 31, mm: 12, yy: 99, yyyy: k, HH: 23, MM: 59, SS: 59 }, a = { dd: 1, mm: 1, yy: 0, yyyy: w, HH: 0, MM: 0, SS: 0 }, b = O.split("");
          v.forEach(function(M) {
            var h = l.indexOf(M), t = parseInt(p[M].toString().substr(0, 1), 10);
            parseInt(b[h], 10) > t && (b[h + 1] = b[h], b[h] = 0, n.push(h));
          });
          var $ = 0, C = v.some(function(M) {
            var h = l.indexOf(M), t = M.length, e = O.substr(h, t).replace(/\D/g, ""), r = parseInt(e, 10);
            M === "mm" && ($ = r || 0);
            var g = M === "dd" ? s[$] : p[M];
            if (M === "yyyy" && (w !== 1 || k !== 9999)) {
              var y = parseInt(p[M].toString().substring(0, e.length), 10), d = parseInt(a[M].toString().substring(0, e.length), 10);
              return r < d || r > y;
            }
            return r > g || e.length === t && r < a[M];
          });
          return !C && { value: b.join(""), indexesOfPipedChars: n };
        };
      }
      Object.defineProperty(u, "__esModule", { value: !0 }), u.default = i;
      var s = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], c = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"];
    }, function(P, u) {
      function i() {
        function b() {
          var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, oe = j.length;
          if (j === f || j[0] === M[0] && oe === 1)
            return M.split(f).concat([p]).concat(t.split(f));
          if (j === R && K)
            return M.split(f).concat(["0", R, p]).concat(t.split(f));
          var ne = j[0] === k && V;
          ne && (j = j.toString().substr(1));
          var X = j.lastIndexOf(R), Z = X !== -1, A = void 0, I = void 0, S = void 0;
          if (j.slice(Y * -1) === t && (j = j.slice(0, Y * -1)), Z && (K || D) ? (A = j.slice(j.slice(0, q) === M ? q : 0, X), I = j.slice(X + 1, oe), I = s(I.replace(O, f))) : A = j.slice(0, q) === M ? j.slice(q) : j, Q && (typeof Q > "u" ? "undefined" : l(Q)) === n) {
            var G = y === "." ? "[.]" : "" + y, J = (A.match(new RegExp(G, "g")) || []).length;
            A = A.slice(0, Q + J * te);
          }
          return A = A.replace(O, f), F || (A = A.replace(/^0+(0$|[^0])/, "$1")), A = r ? c(A, y) : A, S = s(A), (Z && K || D === !0) && (j[X - 1] !== R && S.push(a), S.push(R, a), I && ((typeof H > "u" ? "undefined" : l(H)) === n && (I = I.slice(0, H)), S = S.concat(I)), D === !0 && j[X - 1] === R && S.push(p)), q > 0 && (S = M.split(f).concat(S)), ne && (S.length === q && S.push(p), S = [v].concat(S)), t.length > 0 && (S = S.concat(t.split(f))), S;
        }
        var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, C = $.prefix, M = C === void 0 ? m : C, h = $.suffix, t = h === void 0 ? f : h, e = $.includeThousandsSeparator, r = e === void 0 || e, g = $.thousandsSeparatorSymbol, y = g === void 0 ? w : g, d = $.allowDecimal, K = d !== void 0 && d, L = $.decimalSymbol, R = L === void 0 ? x : L, T = $.decimalLimit, H = T === void 0 ? 2 : T, N = $.requireDecimal, D = N !== void 0 && N, B = $.allowNegative, V = B !== void 0 && B, _ = $.allowLeadingZeroes, F = _ !== void 0 && _, z = $.integerLimit, Q = z === void 0 ? null : z, q = M && M.length || 0, Y = t && t.length || 0, te = y && y.length || 0;
        return b.instanceOf = "createNumberMask", b;
      }
      function s(b) {
        return b.split(f).map(function($) {
          return p.test($) ? p : $;
        });
      }
      function c(b, $) {
        return b.replace(/\B(?=(\d{3})+(?!\d))/g, $);
      }
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
        return typeof b;
      } : function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      };
      u.default = i;
      var m = "$", f = "", w = ",", x = ".", k = "-", v = /-/, O = /\D+/g, n = "number", p = /\d/, a = "[]";
    }, function(P, u, i) {
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, r) {
        e = e.replace(t, p);
        var g = r.placeholderChar, y = r.currentCaretPosition, d = e.indexOf(a), K = e.lastIndexOf(n), L = K < d ? -1 : K, R = l(e, d + 1, a), T = l(e, L - 1, n), H = m(e, d), N = f(e, d, L, g), D = w(e, L, g, y);
        H = x(H), N = x(N), D = x(D, !0);
        var B = H.concat(R).concat(N).concat(T).concat(D);
        return B;
      }
      function l(e, r, g) {
        var y = [];
        return e[r] === g ? y.push(g) : y.push(b, g), y.push(b), y;
      }
      function m(e, r) {
        return r === -1 ? e : e.slice(0, r);
      }
      function f(e, r, g, y) {
        var d = p;
        return r !== -1 && (d = g === -1 ? e.slice(r + 1, e.length) : e.slice(r + 1, g)), d = d.replace(new RegExp("[\\s" + y + "]", C), p), d === a ? O : d.length < 1 ? $ : d[d.length - 1] === n ? d.slice(0, d.length - 1) : d;
      }
      function w(e, r, g, y) {
        var d = p;
        return r !== -1 && (d = e.slice(r + 1, e.length)), d = d.replace(new RegExp("[\\s" + g + ".]", C), p), d.length === 0 ? e[r - 1] === n && y !== e.length ? O : p : d;
      }
      function x(e, r) {
        return e.split(p).map(function(g) {
          return g === $ ? g : r ? h : M;
        });
      }
      Object.defineProperty(u, "__esModule", { value: !0 });
      var k = i(4), v = s(k), O = "*", n = ".", p = "", a = "@", b = "[]", $ = " ", C = "g", M = /[^\s]/, h = /[^.\s]/, t = /\s/g;
      u.default = { mask: c, pipe: v.default };
    }, function(P, u) {
      function i(O, n) {
        var p = n.currentCaretPosition, a = n.rawValue, b = n.previousConformedValue, $ = n.placeholderChar, C = O;
        C = s(C);
        var M = C.indexOf(f), h = a.match(new RegExp("[^@\\s." + $ + "]")) === null;
        if (h)
          return m;
        if (C.indexOf(x) !== -1 || M !== -1 && p !== M + 1 || a.indexOf(c) === -1 && b !== m && a.indexOf(w) !== -1)
          return !1;
        var t = C.indexOf(c), e = C.slice(t + 1, C.length);
        return (e.match(v) || k).length > 1 && C.substr(-1) === w && p !== a.length && (C = C.slice(0, C.length - 1)), C;
      }
      function s(O) {
        var n = 0;
        return O.replace(l, function() {
          return n++, n === 1 ? c : m;
        });
      }
      Object.defineProperty(u, "__esModule", { value: !0 }), u.default = i;
      var c = "@", l = /@/g, m = "", f = "@.", w = ".", x = "..", k = [], v = /\./g;
    }]);
  });
})(Oe);
var fe = Oe.exports;
const He = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: !0,
  thousandsSeparatorSymbol: ",",
  allowDecimal: !0,
  decimalSymbol: ".",
  decimalLimit: 2,
  // how many digits allowed after the decimal
  integerLimit: 12,
  // limit length of integer numbers
  allowNegative: !1,
  allowLeadingZeroes: !1
}, Be = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ge = [
  "yyyy",
  "yyy",
  "yy",
  "y",
  "mmmm",
  "mmm",
  "mm",
  "m",
  "dd",
  "d",
  "HH",
  "MM",
  "SS"
], ze = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/], it = [/\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/], at = [/\d/, /\d/, /\d/, /\d/], qe = [
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  "-",
  " ",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/
], st = [
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  "-",
  " ",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/
], lt = [/\d/, /\d/, /\d/, /\d/, " ", "-", " ", /\d/, /\d/, /\d/, /\d/], We = (o = "mm dd yyyy", { minYear: U = 1, maxYear: P = 9999 } = {}) => {
  const u = o.split(/[^dmyHMS]+/).sort((i, s) => ge.indexOf(i) - ge.indexOf(s));
  return function(i) {
    const s = [], c = {
      d: 31,
      dd: 31,
      m: 12,
      mm: 12,
      mmm: 12,
      mmmm: 12,
      y: 99,
      yy: 99,
      yyy: P,
      yyyy: P,
      HH: 23,
      MM: 59,
      SS: 59
    }, l = {
      d: 1,
      dd: 1,
      m: 1,
      mm: 1,
      mmm: 1,
      mmmm: 1,
      y: 0,
      yy: 0,
      yyy: 0,
      yyyy: U,
      HH: 0,
      MM: 0,
      SS: 0
    }, m = i.split(" - ").map((w, x) => {
      const k = w.split("");
      u.forEach((n) => {
        const p = o.indexOf(n), a = parseInt(c[n].toString().substr(0, 1), 10);
        parseInt(k[p + x * 13], 10) > a && (k[p + 1 + x * 13] = k[p + x * 13], k[p + x * 13] = "0", s.push(p + x * 13));
      });
      let v = 0;
      return u.some((n) => {
        const p = o.indexOf(n), a = n.length, b = i.substr(p + x * 13, a).replace(/\D/g, ""), $ = parseInt(b, 10);
        n === "mm" && (v = $ || 0);
        const C = n === "dd" ? Be[v] : c[n];
        if (n === "yyyy" && (U !== 1 || P !== 9999)) {
          const M = parseInt(c[n].toString().substring(0, b.length), 10), h = parseInt(l[n].toString().substring(0, b.length), 10);
          return $ < h || $ > M;
        }
        return $ > C || b.length === a && $ < l[n];
      }) ? !1 : k;
    });
    return typeof m[0] == "boolean" ? m[0] : typeof m[1] == "boolean" ? m[1] : {
      value: m[0] && m[1] ? [...m[0], " ", "-", " ", ...m[1]].join("") : "",
      indexesOfPipedChars: s
    };
  };
}, Ze = ({ maskOptions: o, maskType: U, size: P, dateFormat: u, maskProps: i, ...s }) => {
  const c = ue.useMemo(() => {
    if (i)
      return i;
    const l = {
      mask: []
    };
    switch (U) {
      case "currency":
        l.mask = fe.createNumberMask(He);
        break;
      case "email":
        l.mask = fe.emailMask;
        break;
      case "date":
        l.mask = ze, l.pipe = fe.createAutoCorrectedDatePipe((u == null ? void 0 : u.toLowerCase()) || "mm/dd/yyyy"), l.guide = !0, l.keepCharPositions = !0, l.placeholderChar = "_";
        break;
      case "range":
        l.mask = qe, l.pipe = We((u == null ? void 0 : u.toLowerCase()) || "mm/dd/yyyy"), l.guide = !0, l.keepCharPositions = !0, l.placeholderChar = "_";
        break;
      case "custom":
        l.mask = o || [];
    }
    return l;
  }, [u, o, i, U]);
  return E.jsx(De, { ...c, ...s, render: (l, { defaultValue: m, ...f }) => E.jsx(de, { ref: l, ...s, ...f }) });
}, Ue = ue.forwardRef(({ className: o, tooltipContent: U, error: P, hideErrorMessage: u, rightElement: i, leftElement: s, rightLabel: c, leftLabel: l, size: m = me, locked: f, lockedTooltip: w, edited: x, onClickWrapper: k, ...v }, O) => {
  const n = v.placeholder ? v.required && !v.label ? `${v.placeholder} *` : v.placeholder : void 0, p = ue.useCallback(({ children: a }) => w ? E.jsx(ve, { content: w, delay: 0, children: a }) : E.jsx(E.Fragment, { children: a }), [w]);
  return E.jsxs($e, { className: o, $disabled: v.disabled, $size: m, $invalid: !!P, children: [typeof v.label == "string" ? E.jsx(Le, { label: v.label, tooltipContent: U, required: v.required }) : v.label, E.jsxs(Me, { $disabled: v.disabled, $size: m, $invalid: !!P, $edited: !P && x, $locked: f, "data-disabled": v.disabled, onClick: k, children: [l && E.jsx(ae, { $size: m, "data-align": "left", children: l }), s && E.jsx(pe, { $size: m, $align: "left", "data-align": "left", children: s }), v.maskType ? E.jsx(Ze, { ...v, placeholder: n }) : E.jsx(de, { ...v, placeholder: n, ref: O, disabled: v.disabled || f, isClickable: f && !!k }), i && E.jsx(pe, { $size: m, $align: "right", "data-align": "right", children: i }), c && E.jsx(ae, { $size: m, "data-align": "right", children: c }), f && E.jsx(ie, { children: E.jsx(p, { children: E.jsx("div", { children: E.jsx(je, { type: "tertiary" }) }) }) })] }), P && !u && E.jsx(Te, { children: P })] });
}), $e = ee.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${de} {
    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }
`, pe = ee.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  ${(o) => o.$align === "left" ? re`
          padding-left: ${he[o.$size]};
        ` : o.$align === "right" ? re`
            padding-right: ${he[o.$size]};
          ` : ""};
`, he = {
  50: "3px",
  100: ce.spacing.sp4,
  200: ce.spacing.sp4,
  400: ce.spacing.sp16
}, Ke = {
  50: "18px",
  100: "24px",
  200: "24px",
  400: "24px"
}, Qe = {
  50: "2px 0 2px 2px",
  100: "3px 0 3px 3px",
  200: "3px 0 3px 3px",
  400: "4px 0 4px 4px"
}, Xe = {
  50: "2px 2px 2px 0",
  100: "3px 3px 3px 0",
  200: "3px 3px 3px 0",
  400: "4px 4px 4px 0"
}, ae = ee.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(o) => Pe[o.$size || me]};
  color: ${(o) => o.theme.systemColors.grey800};

  border-radius: 4px;

  &[data-align="left"] {
    margin: ${({ $size: o }) => Qe[o]};
  }

  &[data-align="right"] {
    margin: ${({ $size: o }) => Xe[o]};
  }

  padding: ${(o) => "0 " + he[o.$size]};

  min-width: ${(o) => Ke[o.$size]};

  background: ${(o) => o.theme.systemColors.grey100};
`, ie = ee.div`
  display: flex;
  align-items: center;
`, Ge = {
  50: re`
    ${le} {
      min-height: 22px;
      padding: 0 8px;
    }

    ${ie} {
      padding-right: ${(o) => o.theme.spacing.sp8};
    }
  `,
  100: re`
    ${le} {
      min-height: 30px;
      padding: 0 8px;
    }

    ${ie} {
      padding-right: ${(o) => o.theme.spacing.sp8};
    }
  `,
  200: re`
    ${le} {
      min-height: 38px;
      padding: 0 8px;
    }

    ${ie} {
      padding-right: ${(o) => o.theme.spacing.sp12};
    }
  `,
  400: re`
    ${le} {
      min-height: 54px;
      padding: 0 16px;
    }

    ${ie} {
      padding-right: ${(o) => o.theme.spacing.sp12};
    }
  `
}, Me = ee(_e)`
  position: relative;
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;

  ${(o) => Ge[o.$size || me]}

  ${(o) => o.$disabled && re`
      ${ae} {
        background-color: ${o.theme.systemColors.grey300};
      }
    `}

  ${(o) => o.$invalid && re`
      ${ae} {
        background-color: ${o.theme.systemColors.red400};
        color: #fff;
      }
    `}

  ${(o) => o.$edited && re`
      ${ae} {
        background-color: ${o.theme.systemColors.blue100};
      }
    `}
`, ut = Object.assign(Ue, {
  InputWrapper: Me,
  Input: de,
  Element: pe,
  Label: ae,
  Root: $e,
  LockedContainer: ie
});
export {
  Ne as I,
  Le as L,
  ut as N,
  st as a,
  lt as b,
  We as c,
  ze as d,
  it as m,
  qe as r,
  fe as t,
  at as y
};
