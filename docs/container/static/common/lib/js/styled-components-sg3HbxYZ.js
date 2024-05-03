import { g as Wt, R as T, r as xe } from "./react-D5yUVy0K.js";
var R = function() {
  return R = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, R.apply(this, arguments);
};
function U(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var qt = function(t, r, n, o) {
  var i = n ? n.call(o, t, r) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var s = Object.keys(t), u = Object.keys(r);
  if (s.length !== u.length)
    return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(r), c = 0; c < s.length; c++) {
    var l = s[c];
    if (!a(l))
      return !1;
    var p = t[l], h = r[l];
    if (i = n ? n.call(o, p, h, l) : void 0, i === !1 || i === void 0 && p !== h)
      return !1;
  }
  return !0;
};
const Vr = /* @__PURE__ */ Wt(qt);
var v = "-ms-", ie = "-moz-", m = "-webkit-", dt = "comm", Ce = "rule", We = "decl", Ut = "@import", ht = "@keyframes", Vt = "@layer", gt = Math.abs, qe = String.fromCharCode, Me = Object.assign;
function Xt(e, t) {
  return P(e, 0) ^ 45 ? (((t << 2 ^ P(e, 0)) << 2 ^ P(e, 1)) << 2 ^ P(e, 2)) << 2 ^ P(e, 3) : 0;
}
function mt(e) {
  return e.trim();
}
function D(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function f(e, t, r) {
  return e.replace(t, r);
}
function he(e, t, r) {
  return e.indexOf(t, r);
}
function P(e, t) {
  return e.charCodeAt(t) | 0;
}
function V(e, t, r) {
  return e.slice(t, r);
}
function _(e) {
  return e.length;
}
function yt(e) {
  return e.length;
}
function oe(e, t) {
  return t.push(e), e;
}
function Kt(e, t) {
  return e.map(t).join("");
}
function tt(e, t) {
  return e.filter(function(r) {
    return !D(r, t);
  });
}
var Ae = 1, X = 1, vt = 0, O = 0, A = 0, Q = "";
function Ie(e, t, r, n, o, i, s, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ae, column: X, length: s, return: "", siblings: u };
}
function L(e, t) {
  return Me(Ie("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function W(e) {
  for (; e.root; )
    e = L(e.root, { children: [e] });
  oe(e, e.siblings);
}
function Zt() {
  return A;
}
function Jt() {
  return A = O > 0 ? P(Q, --O) : 0, X--, A === 10 && (X = 1, Ae--), A;
}
function $() {
  return A = O < vt ? P(Q, O++) : 0, X++, A === 10 && (X = 1, Ae++), A;
}
function B() {
  return P(Q, O);
}
function ge() {
  return O;
}
function Pe(e, t) {
  return V(Q, e, t);
}
function Le(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qt(e) {
  return Ae = X = 1, vt = _(Q = e), O = 0, [];
}
function er(e) {
  return Q = "", e;
}
function _e(e) {
  return mt(Pe(O - 1, Fe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tr(e) {
  for (; (A = B()) && A < 33; )
    $();
  return Le(e) > 2 || Le(A) > 3 ? "" : " ";
}
function rr(e, t) {
  for (; --t && $() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return Pe(e, ge() + (t < 6 && B() == 32 && $() == 32));
}
function Fe(e) {
  for (; $(); )
    switch (A) {
      case e:
        return O;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fe(A);
        break;
      case 40:
        e === 41 && Fe(e);
        break;
      case 92:
        $();
        break;
    }
  return O;
}
function nr(e, t) {
  for (; $() && e + A !== 57; )
    if (e + A === 84 && B() === 47)
      break;
  return "/*" + Pe(t, O - 1) + "*" + qe(e === 47 ? e : $());
}
function or(e) {
  for (; !Le(B()); )
    $();
  return Pe(e, O);
}
function ir(e) {
  return er(me("", null, null, null, [""], e = Qt(e), 0, [0], e));
}
function me(e, t, r, n, o, i, s, u, a) {
  for (var c = 0, l = 0, p = s, h = 0, g = 0, b = 0, x = 1, E = 1, C = 1, w = 0, S = "", k = o, I = i, y = n, d = S; E; )
    switch (b = w, w = $()) {
      case 40:
        if (b != 108 && P(d, p - 1) == 58) {
          he(d += f(_e(w), "&", "&\f"), "&\f", gt(c ? u[c - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += _e(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += tr(b);
        break;
      case 92:
        d += rr(ge() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            oe(sr(nr($(), ge()), t, r, a), a);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * x:
        u[c++] = _(d) * C;
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            E = 0;
          case 59 + l:
            C == -1 && (d = f(d, /\f/g, "")), g > 0 && _(d) - p && oe(g > 32 ? nt(d + ";", n, r, p - 1, a) : nt(f(d, " ", "") + ";", n, r, p - 2, a), a);
            break;
          case 59:
            d += ";";
          default:
            if (oe(y = rt(d, t, r, c, l, o, u, S, k = [], I = [], p, i), i), w === 123)
              if (l === 0)
                me(d, t, y, y, k, i, p, u, I);
              else
                switch (h === 99 && P(d, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    me(e, y, y, n && oe(rt(e, y, y, 0, 0, o, u, S, o, k = [], p, I), I), o, I, p, u, n ? k : I);
                    break;
                  default:
                    me(d, y, y, y, [""], I, 0, u, I);
                }
        }
        c = l = g = 0, x = C = 1, S = d = "", p = s;
        break;
      case 58:
        p = 1 + _(d), g = b;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && Jt() == 125)
            continue;
        }
        switch (d += qe(w), w * x) {
          case 38:
            C = l > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            u[c++] = (_(d) - 1) * C, C = 1;
            break;
          case 64:
            B() === 45 && (d += _e($())), h = B(), l = p = _(S = d += or(ge())), w++;
            break;
          case 45:
            b === 45 && _(d) == 2 && (x = 0);
        }
    }
  return i;
}
function rt(e, t, r, n, o, i, s, u, a, c, l, p) {
  for (var h = o - 1, g = o === 0 ? i : [""], b = yt(g), x = 0, E = 0, C = 0; x < n; ++x)
    for (var w = 0, S = V(e, h + 1, h = gt(E = s[x])), k = e; w < b; ++w)
      (k = mt(E > 0 ? g[w] + " " + S : f(S, /&\f/g, g[w]))) && (a[C++] = k);
  return Ie(e, t, r, o === 0 ? Ce : u, a, c, l, p);
}
function sr(e, t, r, n) {
  return Ie(e, t, r, dt, qe(Zt()), V(e, 2, -2), 0, n);
}
function nt(e, t, r, n, o) {
  return Ie(e, t, r, We, V(e, 0, n), V(e, n + 1, -1), n, o);
}
function St(e, t, r) {
  switch (Xt(e, t)) {
    case 5103:
      return m + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return m + e + e;
    case 4789:
      return ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + e + ie + e + v + e + e;
    case 5936:
      switch (P(e, t + 11)) {
        case 114:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return m + e + v + e + e;
    case 6165:
      return m + e + v + "flex-" + e + e;
    case 5187:
      return m + e + f(e, /(\w+).+(:[^]+)/, m + "box-$1$2" + v + "flex-$1$2") + e;
    case 5443:
      return m + e + v + "flex-item-" + f(e, /flex-|-self/g, "") + (D(e, /flex-|baseline/) ? "" : v + "grid-row-" + f(e, /flex-|-self/g, "")) + e;
    case 4675:
      return m + e + v + "flex-line-pack" + f(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return m + e + v + f(e, "shrink", "negative") + e;
    case 5292:
      return m + e + v + f(e, "basis", "preferred-size") + e;
    case 6060:
      return m + "box-" + f(e, "-grow", "") + m + e + v + f(e, "grow", "positive") + e;
    case 4554:
      return m + f(e, /([^-])(transform)/g, "$1" + m + "$2") + e;
    case 6187:
      return f(f(f(e, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return f(e, /(image-set\([^]*)/, m + "$1$`$1");
    case 4968:
      return f(f(e, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + v + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + e + e;
    case 4200:
      if (!D(e, /flex-|baseline/))
        return v + "grid-column-align" + V(e, t) + e;
      break;
    case 2592:
    case 3360:
      return v + f(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, D(n.props, /grid-\w+-end/);
      }) ? ~he(e + (r = r[t].value), "span", 0) ? e : v + f(e, "-start", "") + e + v + "grid-row-span:" + (~he(r, "span", 0) ? D(r, /\d+/) : +D(r, /\d+/) - +D(e, /\d+/)) + ";" : v + f(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return D(n.props, /grid-\w+-start/);
      }) ? e : v + f(f(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(e, /(.+)-inline(.+)/, m + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (_(e) - 1 - t > 6)
        switch (P(e, t + 1)) {
          case 109:
            if (P(e, t + 4) !== 45)
              break;
          case 102:
            return f(e, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + ie + (P(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~he(e, "stretch", 0) ? St(f(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return f(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, u, a, c) {
        return v + o + ":" + i + c + (s ? v + o + "-span:" + (u ? a : +a - +i) + c : "") + e;
      });
    case 4949:
      if (P(e, t + 6) === 121)
        return f(e, ":", ":" + m) + e;
      break;
    case 6444:
      switch (P(e, P(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return f(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + m + (P(e, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + v + "$2box$3") + e;
        case 100:
          return f(e, ":", ":" + v) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Se(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function ar(e, t, r, n) {
  switch (e.type) {
    case Vt:
      if (e.children.length)
        break;
    case Ut:
    case We:
      return e.return = e.return || e.value;
    case dt:
      return "";
    case ht:
      return e.return = e.value + "{" + Se(e.children, n) + "}";
    case Ce:
      if (!_(e.value = e.props.join(",")))
        return "";
  }
  return _(r = Se(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function cr(e) {
  var t = yt(e);
  return function(r, n, o, i) {
    for (var s = "", u = 0; u < t; u++)
      s += e[u](r, n, o, i) || "";
    return s;
  };
}
function ur(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function lr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case We:
        e.return = St(e.value, e.length, r);
        return;
      case ht:
        return Se([L(e, { value: f(e.value, "@", "@" + m) })], n);
      case Ce:
        if (e.length)
          return Kt(r = e.props, function(o) {
            switch (D(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                W(L(e, { props: [f(o, /:(read-\w+)/, ":" + ie + "$1")] })), W(L(e, { props: [o] })), Me(e, { props: tt(r, n) });
                break;
              case "::placeholder":
                W(L(e, { props: [f(o, /:(plac\w+)/, ":" + m + "input-$1")] })), W(L(e, { props: [f(o, /:(plac\w+)/, ":" + ie + "$1")] })), W(L(e, { props: [f(o, /:(plac\w+)/, v + "input-$1")] })), W(L(e, { props: [o] })), Me(e, { props: tt(r, n) });
                break;
            }
            return "";
          });
    }
}
var fr = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, K = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bt = "active", wt = "data-styled-version", Re = "6.1.8", Ue = `/*!sc*/
`, Ve = typeof window < "u" && "HTMLElement" in window, pr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), dr = {}, Ee = Object.freeze([]), Z = Object.freeze({});
function kt(e, t, r) {
  return r === void 0 && (r = Z), e.theme !== r.theme && e.theme || t || r.theme;
}
var xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), hr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, gr = /(^-|-$)/g;
function ot(e) {
  return e.replace(hr, "-").replace(gr, "");
}
var mr = /(a)(d)/gi, pe = 52, it = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function je(e) {
  var t, r = "";
  for (t = Math.abs(e); t > pe; t = t / pe | 0)
    r = it(t % pe) + r;
  return (it(t % pe) + r).replace(mr, "$1-$2");
}
var Ne, Ct = 5381, q = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, At = function(e) {
  return q(Ct, e);
};
function Xe(e) {
  return je(At(e) >>> 0);
}
function yr(e) {
  return e.displayName || e.name || "Component";
}
function De(e) {
  return typeof e == "string" && !0;
}
var It = typeof Symbol == "function" && Symbol.for, Pt = It ? Symbol.for("react.memo") : 60115, vr = It ? Symbol.for("react.forward_ref") : 60112, Sr = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, br = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Rt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, wr = ((Ne = {})[vr] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ne[Pt] = Rt, Ne);
function st(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Pt ? Rt : "$$typeof" in e ? wr[e.$$typeof] : Sr;
  var t;
}
var kr = Object.defineProperty, xr = Object.getOwnPropertyNames, at = Object.getOwnPropertySymbols, Cr = Object.getOwnPropertyDescriptor, Ar = Object.getPrototypeOf, ct = Object.prototype;
function Et(e, t, r) {
  if (typeof t != "string") {
    if (ct) {
      var n = Ar(t);
      n && n !== ct && Et(e, n, r);
    }
    var o = xr(t);
    at && (o = o.concat(at(t)));
    for (var i = st(e), s = st(t), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!(a in br || r && r[a] || s && a in s || i && a in i)) {
        var c = Cr(t, a);
        try {
          kr(e, a, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function Y(e) {
  return typeof e == "function";
}
function Ke(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function H(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function be(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += t ? t + e[n] : e[n];
  return r;
}
function se(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ge(e, t, r) {
  if (r === void 0 && (r = !1), !r && !se(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = Ge(e[n], t[n]);
  else if (se(t))
    for (var n in t)
      e[n] = Ge(e[n], t[n]);
  return e;
}
function Ze(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function j(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""));
}
var Ir = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw j(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), a = (s = 0, r.length); s < a; s++)
      this.tag.insertRule(u, r[s]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++)
      r += "".concat(this.tag.getRule(s)).concat(Ue);
    return r;
  }, e;
}(), ye = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ve = 1, de = function(e) {
  if (ye.has(e))
    return ye.get(e);
  for (; we.has(ve); )
    ve++;
  var t = ve++;
  return ye.set(e, t), we.set(t, e), t;
}, Pr = function(e, t) {
  ve = t + 1, ye.set(e, t), we.set(t, e);
}, Rr = "style[".concat(K, "][").concat(wt, '="').concat(Re, '"]'), Er = new RegExp("^".concat(K, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Or = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++)
    (n = o[i]) && e.registerName(t, n);
}, Tr = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ue), o = [], i = 0, s = n.length; i < s; i++) {
    var u = n[i].trim();
    if (u) {
      var a = u.match(Er);
      if (a) {
        var c = 0 | parseInt(a[1], 10), l = a[2];
        c !== 0 && (Pr(l, c), Or(e, l, a[3]), e.getTag().insertRules(c, o)), o.length = 0;
      } else
        o.push(u);
    }
  }
};
function $r() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ot = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    var a = Array.from(u.querySelectorAll("style[".concat(K, "]")));
    return a[a.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(K, bt), n.setAttribute(wt, Re);
  var s = $r();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, _r = function() {
  function e(t) {
    this.element = Ot(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r)
          return s;
      }
      throw j(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Nr = function() {
  function e(t) {
    this.element = Ot(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Dr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ut = Ve, zr = { isServer: !Ve, useCSSOMInjection: !pr }, ke = function() {
  function e(t, r, n) {
    t === void 0 && (t = Z), r === void 0 && (r = {});
    var o = this;
    this.options = R(R({}, zr), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Ve && ut && (ut = !1, function(i) {
      for (var s = document.querySelectorAll(Rr), u = 0, a = s.length; u < a; u++) {
        var c = s[u];
        c && c.getAttribute(K) !== bt && (Tr(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), Ze(this, function() {
      return function(i) {
        for (var s = i.getTag(), u = s.length, a = "", c = function(p) {
          var h = function(C) {
            return we.get(C);
          }(p);
          if (h === void 0)
            return "continue";
          var g = i.names.get(h), b = s.getGroup(p);
          if (g === void 0 || b.length === 0)
            return "continue";
          var x = "".concat(K, ".g").concat(p, '[id="').concat(h, '"]'), E = "";
          g !== void 0 && g.forEach(function(C) {
            C.length > 0 && (E += "".concat(C, ","));
          }), a += "".concat(b).concat(x, '{content:"').concat(E, '"}').concat(Ue);
        }, l = 0; l < u; l++)
          c(l);
        return a;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return de(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(R(R({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Dr(o) : n ? new _r(o) : new Nr(o);
    }(this.options), new Ir(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (de(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(de(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(de(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Mr = /&/g, Lr = /^\s*\/\/.*$/gm;
function Tt(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Tt(r.children, t)), r;
  });
}
function Fr(e) {
  var t, r, n, o = e === void 0 ? Z : e, i = o.options, s = i === void 0 ? Z : i, u = o.plugins, a = u === void 0 ? Ee : u, c = function(h, g, b) {
    return b.startsWith(r) && b.endsWith(r) && b.replaceAll(r, "").length > 0 ? ".".concat(t) : h;
  }, l = a.slice();
  l.push(function(h) {
    h.type === Ce && h.value.includes("&") && (h.props[0] = h.props[0].replace(Mr, r).replace(n, c));
  }), s.prefix && l.push(lr), l.push(ar);
  var p = function(h, g, b, x) {
    g === void 0 && (g = ""), b === void 0 && (b = ""), x === void 0 && (x = "&"), t = x, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var E = h.replace(Lr, ""), C = ir(b || g ? "".concat(b, " ").concat(g, " { ").concat(E, " }") : E);
    s.namespace && (C = Tt(C, s.namespace));
    var w = [];
    return Se(C, cr(l.concat(ur(function(S) {
      return w.push(S);
    })))), w;
  };
  return p.hash = a.length ? a.reduce(function(h, g) {
    return g.name || j(15), q(h, g.name);
  }, Ct).toString() : "", p;
}
var jr = new ke(), He = Fr(), $t = T.createContext({ shouldForwardProp: void 0, styleSheet: jr, stylis: He });
$t.Consumer;
T.createContext(void 0);
function Be() {
  return xe.useContext($t);
}
var _t = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = He);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Ze(this, function() {
      throw j(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = He), this.name + t.hash;
  }, e;
}(), Gr = function(e) {
  return e >= "A" && e <= "Z";
};
function lt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    Gr(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Nt = function(e) {
  return e == null || e === !1 || e === "";
}, Dt = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Nt(i) && (Array.isArray(i) && i.isCss || Y(i) ? n.push("".concat(lt(o), ":"), i, ";") : se(i) ? n.push.apply(n, U(U(["".concat(o, " {")], Dt(i), !1), ["}"], !1)) : n.push("".concat(lt(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in fr || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function F(e, t, r, n) {
  if (Nt(e))
    return [];
  if (Ke(e))
    return [".".concat(e.styledComponentId)];
  if (Y(e)) {
    if (!Y(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return F(o, t, r, n);
  }
  var i;
  return e instanceof _t ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : se(e) ? Dt(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ee, e.map(function(s) {
    return F(s, t, r, n);
  })) : [e.toString()];
}
function zt(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Y(r) && !Ke(r))
      return !1;
  }
  return !0;
}
var Hr = At(Re), Br = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && zt(t), this.componentId = r, this.baseHash = q(Hr, r), this.baseStyle = n, ke.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = H(o, this.staticRulesId);
      else {
        var i = be(F(this.rules, t, r, n)), s = je(q(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, s)) {
          var u = n(i, ".".concat(s), void 0, this.componentId);
          r.insertRules(this.componentId, s, u);
        }
        o = H(o, s), this.staticRulesId = s;
      }
    else {
      for (var a = q(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
        var p = this.rules[l];
        if (typeof p == "string")
          c += p;
        else if (p) {
          var h = be(F(p, t, r, n));
          a = q(a, h + l), c += h;
        }
      }
      if (c) {
        var g = je(a >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(c, ".".concat(g), void 0, this.componentId)), o = H(o, g);
      }
    }
    return o;
  }, e;
}(), J = T.createContext(void 0);
J.Consumer;
function Xr() {
  var e = xe.useContext(J);
  if (!e)
    throw j(18);
  return e;
}
function Kr(e) {
  var t = T.useContext(J), r = xe.useMemo(function() {
    return function(n, o) {
      if (!n)
        throw j(14);
      if (Y(n)) {
        var i = n(o);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw j(8);
      return o ? R(R({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? T.createElement(J.Provider, { value: r }, e.children) : null;
}
var ze = {};
function Yr(e, t, r) {
  var n = Ke(e), o = e, i = !De(e), s = t.attrs, u = s === void 0 ? Ee : s, a = t.componentId, c = a === void 0 ? function(k, I) {
    var y = typeof k != "string" ? "sc" : ot(k);
    ze[y] = (ze[y] || 0) + 1;
    var d = "".concat(y, "-").concat(Xe(Re + y + ze[y]));
    return I ? "".concat(I, "-").concat(d) : d;
  }(t.displayName, t.parentComponentId) : a, l = t.displayName, p = l === void 0 ? function(k) {
    return De(k) ? "styled.".concat(k) : "Styled(".concat(yr(k), ")");
  }(e) : l, h = t.displayName && t.componentId ? "".concat(ot(t.displayName), "-").concat(t.componentId) : t.componentId || c, g = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, b = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      b = function(k, I) {
        return x(k, I) && E(k, I);
      };
    } else
      b = x;
  }
  var C = new Br(r, h, n ? o.componentStyle : void 0);
  function w(k, I) {
    return function(y, d, ee) {
      var ae = y.attrs, Lt = y.componentStyle, Ft = y.defaultProps, jt = y.foldedComponentIds, Gt = y.styledComponentId, Ht = y.target, Bt = T.useContext(J), Yt = Be(), Oe = y.shouldForwardProp || Yt.shouldForwardProp, Qe = kt(d, Bt, Ft) || Z, N = function(ue, re, le) {
        for (var ne, G = R(R({}, re), { className: void 0, theme: le }), $e = 0; $e < ue.length; $e += 1) {
          var fe = Y(ne = ue[$e]) ? ne(G) : ne;
          for (var M in fe)
            G[M] = M === "className" ? H(G[M], fe[M]) : M === "style" ? R(R({}, G[M]), fe[M]) : fe[M];
        }
        return re.className && (G.className = H(G.className, re.className)), G;
      }(ae, d, Qe), ce = N.as || Ht, te = {};
      for (var z in N)
        N[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && N.theme === Qe || (z === "forwardedAs" ? te.as = N.forwardedAs : Oe && !Oe(z, ce) || (te[z] = N[z]));
      var et = function(ue, re) {
        var le = Be(), ne = ue.generateAndInjectStyles(re, le.styleSheet, le.stylis);
        return ne;
      }(Lt, N), Te = H(jt, Gt);
      return et && (Te += " " + et), N.className && (Te += " " + N.className), te[De(ce) && !xt.has(ce) ? "class" : "className"] = Te, te.ref = ee, xe.createElement(ce, te);
    }(S, k, I);
  }
  w.displayName = p;
  var S = T.forwardRef(w);
  return S.attrs = g, S.componentStyle = C, S.displayName = p, S.shouldForwardProp = b, S.foldedComponentIds = n ? H(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = h, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? function(I) {
      for (var y = [], d = 1; d < arguments.length; d++)
        y[d - 1] = arguments[d];
      for (var ee = 0, ae = y; ee < ae.length; ee++)
        Ge(I, ae[ee], !0);
      return I;
    }({}, o.defaultProps, k) : k;
  } }), Ze(S, function() {
    return ".".concat(S.styledComponentId);
  }), i && Et(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function ft(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var pt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Je(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Y(e) || se(e))
    return pt(F(ft(Ee, U([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? F(n) : pt(F(ft(n, t)));
}
function Ye(e, t, r) {
  if (r === void 0 && (r = Z), !t)
    throw j(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return e(t, r, Je.apply(void 0, U([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Ye(e, t, R(R({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Ye(e, t, R(R({}, r), o));
  }, n;
}
var Mt = function(e) {
  return Ye(Yr, e);
}, Wr = Mt;
xt.forEach(function(e) {
  Wr[e] = Mt(e);
});
var qr = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = zt(t), ke.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, o) {
    var i = o(be(F(this.rules, r, n, o)), ""), s = this.componentId + t;
    n.insertRules(s, s, i);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, o) {
    t > 2 && ke.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
  }, e;
}();
function Zr(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Je.apply(void 0, U([e], t, !1)), o = "sc-global-".concat(Xe(JSON.stringify(n))), i = new qr(n, o), s = function(a) {
    var c = Be(), l = T.useContext(J), p = T.useRef(c.styleSheet.allocateGSInstance(o)).current;
    return c.styleSheet.server && u(p, a, c.styleSheet, l, c.stylis), T.useLayoutEffect(function() {
      if (!c.styleSheet.server)
        return u(p, a, c.styleSheet, l, c.stylis), function() {
          return i.removeStyles(p, c.styleSheet);
        };
    }, [p, a, c.styleSheet, l, c.stylis]), null;
  };
  function u(a, c, l, p, h) {
    if (i.isStatic)
      i.renderStyles(a, dr, l, h);
    else {
      var g = R(R({}, c), { theme: kt(c, p, s.defaultProps) });
      i.renderStyles(a, g, l, h);
    }
  }
  return T.memo(s);
}
function Jr(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = be(Je.apply(void 0, U([e], t, !1))), o = Xe(n);
  return new _t(o, n);
}
export {
  Je as a,
  Zr as d,
  Xr as e,
  Jr as h,
  Vr as s,
  Kr as t,
  Wr as u
};
