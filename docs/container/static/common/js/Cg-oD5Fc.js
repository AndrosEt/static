import { g as we, R as Wn } from "./react-D5yUVy0K.js";
function dn(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function u(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dn(Object(e), !0).forEach(function(a) {
      O(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : dn(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
function xt(t) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xt(t);
}
function xe(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function vn(t, n) {
  for (var e = 0; e < n.length; e++) {
    var a = n[e];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function Ae(t, n, e) {
  return n && vn(t.prototype, n), e && vn(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function O(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function Zt(t, n) {
  return Se(t) || Ee(t, n) || Un(t, n) || Ce();
}
function ft(t) {
  return Oe(t) || Pe(t) || Un(t) || Ie();
}
function Oe(t) {
  if (Array.isArray(t))
    return Dt(t);
}
function Se(t) {
  if (Array.isArray(t))
    return t;
}
function Pe(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Ee(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a = [], r = !0, i = !1, o, s;
    try {
      for (e = e.call(t); !(r = (o = e.next()).done) && (a.push(o.value), !(n && a.length === n)); r = !0)
        ;
    } catch (f) {
      i = !0, s = f;
    } finally {
      try {
        !r && e.return != null && e.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Un(t, n) {
  if (t) {
    if (typeof t == "string")
      return Dt(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Dt(t, n);
  }
}
function Dt(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++)
    a[e] = t[e];
  return a;
}
function Ie() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ce() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pn = function() {
}, tn = {}, Hn = {}, Xn = null, Gn = {
  mark: pn,
  measure: pn
};
try {
  typeof window < "u" && (tn = window), typeof document < "u" && (Hn = document), typeof MutationObserver < "u" && (Xn = MutationObserver), typeof performance < "u" && (Gn = performance);
} catch {
}
var Te = tn.navigator || {}, bn = Te.userAgent, gn = bn === void 0 ? "" : bn, D = tn, h = Hn, hn = Xn, ut = Gn;
D.document;
var M = !!h.documentElement && !!h.head && typeof h.addEventListener == "function" && typeof h.createElement == "function", Bn = ~gn.indexOf("MSIE") || ~gn.indexOf("Trident/"), mt, dt, vt, pt, bt, _ = "___FONT_AWESOME___", Yt = 16, qn = "fa", Vn = "svg-inline--fa", G = "data-fa-i2svg", $t = "data-fa-pseudo-element", Ne = "data-fa-pseudo-element-pending", nn = "data-prefix", en = "data-icon", yn = "fontawesome-i2svg", _e = "async", Re = ["HTML", "HEAD", "STYLE", "SCRIPT"], Kn = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), g = "classic", y = "sharp", an = [g, y];
function lt(t) {
  return new Proxy(t, {
    get: function(e, a) {
      return a in e ? e[a] : e[g];
    }
  });
}
var at = lt((mt = {}, O(mt, g, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), O(mt, y, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), mt)), rt = lt((dt = {}, O(dt, g, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), O(dt, y, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), dt)), it = lt((vt = {}, O(vt, g, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), O(vt, y, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), vt)), Le = lt((pt = {}, O(pt, g, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), O(pt, y, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), pt)), Me = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Qn = "fa-layers-text", Fe = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, je = lt((bt = {}, O(bt, g, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), O(bt, y, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), bt)), Jn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ze = Jn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), De = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], H = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ot = /* @__PURE__ */ new Set();
Object.keys(rt[g]).map(ot.add.bind(ot));
Object.keys(rt[y]).map(ot.add.bind(ot));
var Ye = [].concat(an, ft(ot), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", H.GROUP, H.SWAP_OPACITY, H.PRIMARY, H.SECONDARY]).concat(Jn.map(function(t) {
  return "".concat(t, "x");
})).concat(ze.map(function(t) {
  return "w-".concat(t);
})), nt = D.FontAwesomeConfig || {};
function $e(t) {
  var n = h.querySelector("script[" + t + "]");
  if (n)
    return n.getAttribute(t);
}
function We(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (h && typeof h.querySelector == "function") {
  var Ue = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ue.forEach(function(t) {
    var n = Zt(t, 2), e = n[0], a = n[1], r = We($e(e));
    r != null && (nt[a] = r);
  });
}
var Zn = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: qn,
  replacementClass: Vn,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
nt.familyPrefix && (nt.cssPrefix = nt.familyPrefix);
var J = u(u({}, Zn), nt);
J.autoReplaceSvg || (J.observeMutations = !1);
var d = {};
Object.keys(Zn).forEach(function(t) {
  Object.defineProperty(d, t, {
    enumerable: !0,
    set: function(e) {
      J[t] = e, et.forEach(function(a) {
        return a(d);
      });
    },
    get: function() {
      return J[t];
    }
  });
});
Object.defineProperty(d, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    J.cssPrefix = n, et.forEach(function(e) {
      return e(d);
    });
  },
  get: function() {
    return J.cssPrefix;
  }
});
D.FontAwesomeConfig = d;
var et = [];
function He(t) {
  return et.push(t), function() {
    et.splice(et.indexOf(t), 1);
  };
}
var j = Yt, N = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Xe(t) {
  if (!(!t || !M)) {
    var n = h.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = t;
    for (var e = h.head.childNodes, a = null, r = e.length - 1; r > -1; r--) {
      var i = e[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
    }
    return h.head.insertBefore(n, a), t;
  }
}
var Ge = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function st() {
  for (var t = 12, n = ""; t-- > 0; )
    n += Ge[Math.random() * 62 | 0];
  return n;
}
function Z(t) {
  for (var n = [], e = (t || []).length >>> 0; e--; )
    n[e] = t[e];
  return n;
}
function rn(t) {
  return t.classList ? Z(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(n) {
    return n;
  });
}
function te(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Be(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, '="').concat(te(t[e]), '" ');
  }, "").trim();
}
function Pt(t) {
  return Object.keys(t || {}).reduce(function(n, e) {
    return n + "".concat(e, ": ").concat(t[e].trim(), ";");
  }, "");
}
function on(t) {
  return t.size !== N.size || t.x !== N.x || t.y !== N.y || t.rotate !== N.rotate || t.flipX || t.flipY;
}
function qe(t) {
  var n = t.transform, e = t.containerWidth, a = t.iconWidth, r = {
    transform: "translate(".concat(e / 2, " 256)")
  }, i = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), s = "rotate(".concat(n.rotate, " 0 0)"), f = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: f,
    path: c
  };
}
function Ve(t) {
  var n = t.transform, e = t.width, a = e === void 0 ? Yt : e, r = t.height, i = r === void 0 ? Yt : r, o = t.startCentered, s = o === void 0 ? !1 : o, f = "";
  return s && Bn ? f += "translate(".concat(n.x / j - a / 2, "em, ").concat(n.y / j - i / 2, "em) ") : s ? f += "translate(calc(-50% + ".concat(n.x / j, "em), calc(-50% + ").concat(n.y / j, "em)) ") : f += "translate(".concat(n.x / j, "em, ").concat(n.y / j, "em) "), f += "scale(".concat(n.size / j * (n.flipX ? -1 : 1), ", ").concat(n.size / j * (n.flipY ? -1 : 1), ") "), f += "rotate(".concat(n.rotate, "deg) "), f;
}
var Ke = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function ne() {
  var t = qn, n = Vn, e = d.cssPrefix, a = d.replacementClass, r = Ke;
  if (e !== t || a !== n) {
    var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(n), "g");
    r = r.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(s, ".".concat(a));
  }
  return r;
}
var kn = !1;
function _t() {
  d.autoAddCss && !kn && (Xe(ne()), kn = !0);
}
var Qe = {
  mixout: function() {
    return {
      dom: {
        css: ne,
        insertCss: _t
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        _t();
      },
      beforeI2svg: function() {
        _t();
      }
    };
  }
}, R = D || {};
R[_] || (R[_] = {});
R[_].styles || (R[_].styles = {});
R[_].hooks || (R[_].hooks = {});
R[_].shims || (R[_].shims = []);
var T = R[_], ee = [], Je = function t() {
  h.removeEventListener("DOMContentLoaded", t), At = 1, ee.map(function(n) {
    return n();
  });
}, At = !1;
M && (At = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState), At || h.addEventListener("DOMContentLoaded", Je));
function Ze(t) {
  M && (At ? setTimeout(t, 0) : ee.push(t));
}
function ct(t) {
  var n = t.tag, e = t.attributes, a = e === void 0 ? {} : e, r = t.children, i = r === void 0 ? [] : r;
  return typeof t == "string" ? te(t) : "<".concat(n, " ").concat(Be(a), ">").concat(i.map(ct).join(""), "</").concat(n, ">");
}
function wn(t, n, e) {
  if (t && t[n] && t[n][e])
    return {
      prefix: n,
      iconName: e,
      icon: t[n][e]
    };
}
var ta = function(n, e) {
  return function(a, r, i, o) {
    return n.call(e, a, r, i, o);
  };
}, Rt = function(n, e, a, r) {
  var i = Object.keys(n), o = i.length, s = r !== void 0 ? ta(e, r) : e, f, c, l;
  for (a === void 0 ? (f = 1, l = n[i[0]]) : (f = 0, l = a); f < o; f++)
    c = i[f], l = s(l, n[c], c, n);
  return l;
};
function na(t) {
  for (var n = [], e = 0, a = t.length; e < a; ) {
    var r = t.charCodeAt(e++);
    if (r >= 55296 && r <= 56319 && e < a) {
      var i = t.charCodeAt(e++);
      (i & 64512) == 56320 ? n.push(((r & 1023) << 10) + (i & 1023) + 65536) : (n.push(r), e--);
    } else
      n.push(r);
  }
  return n;
}
function Wt(t) {
  var n = na(t);
  return n.length === 1 ? n[0].toString(16) : null;
}
function ea(t, n) {
  var e = t.length, a = t.charCodeAt(n), r;
  return a >= 55296 && a <= 56319 && e > n + 1 && (r = t.charCodeAt(n + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function xn(t) {
  return Object.keys(t).reduce(function(n, e) {
    var a = t[e], r = !!a.icon;
    return r ? n[a.iconName] = a.icon : n[e] = a, n;
  }, {});
}
function Ut(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e.skipHooks, r = a === void 0 ? !1 : a, i = xn(n);
  typeof T.hooks.addPack == "function" && !r ? T.hooks.addPack(t, xn(n)) : T.styles[t] = u(u({}, T.styles[t] || {}), i), t === "fas" && Ut("fa", n);
}
var gt, ht, yt, q = T.styles, aa = T.shims, ra = (gt = {}, O(gt, g, Object.values(it[g])), O(gt, y, Object.values(it[y])), gt), sn = null, ae = {}, re = {}, ie = {}, oe = {}, se = {}, ia = (ht = {}, O(ht, g, Object.keys(at[g])), O(ht, y, Object.keys(at[y])), ht);
function oa(t) {
  return ~Ye.indexOf(t);
}
function sa(t, n) {
  var e = n.split("-"), a = e[0], r = e.slice(1).join("-");
  return a === t && r !== "" && !oa(r) ? r : null;
}
var fe = function() {
  var n = function(i) {
    return Rt(q, function(o, s, f) {
      return o[f] = Rt(s, i, {}), o;
    }, {});
  };
  ae = n(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "number";
      });
      s.forEach(function(f) {
        r[f.toString(16)] = o;
      });
    }
    return r;
  }), re = n(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "string";
      });
      s.forEach(function(f) {
        r[f] = o;
      });
    }
    return r;
  }), se = n(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(f) {
      r[f] = o;
    }), r;
  });
  var e = "far" in q || d.autoFetchSvg, a = Rt(aa, function(r, i) {
    var o = i[0], s = i[1], f = i[2];
    return s === "far" && !e && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: f
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: f
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  ie = a.names, oe = a.unicodes, sn = Et(d.styleDefault, {
    family: d.familyDefault
  });
};
He(function(t) {
  sn = Et(t.styleDefault, {
    family: d.familyDefault
  });
});
fe();
function fn(t, n) {
  return (ae[t] || {})[n];
}
function fa(t, n) {
  return (re[t] || {})[n];
}
function X(t, n) {
  return (se[t] || {})[n];
}
function le(t) {
  return ie[t] || {
    prefix: null,
    iconName: null
  };
}
function la(t) {
  var n = oe[t], e = fn("fas", t);
  return n || (e ? {
    prefix: "fas",
    iconName: e
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Y() {
  return sn;
}
var ln = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Et(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.family, a = e === void 0 ? g : e, r = at[a][t], i = rt[a][t] || rt[a][r], o = t in T.styles ? t : null;
  return i || o || null;
}
var An = (yt = {}, O(yt, g, Object.keys(it[g])), O(yt, y, Object.keys(it[y])), yt);
function It(t) {
  var n, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.skipLookups, r = a === void 0 ? !1 : a, i = (n = {}, O(n, g, "".concat(d.cssPrefix, "-").concat(g)), O(n, y, "".concat(d.cssPrefix, "-").concat(y)), n), o = null, s = g;
  (t.includes(i[g]) || t.some(function(c) {
    return An[g].includes(c);
  })) && (s = g), (t.includes(i[y]) || t.some(function(c) {
    return An[y].includes(c);
  })) && (s = y);
  var f = t.reduce(function(c, l) {
    var m = sa(d.cssPrefix, l);
    if (q[l] ? (l = ra[s].includes(l) ? Le[s][l] : l, o = l, c.prefix = l) : ia[s].indexOf(l) > -1 ? (o = l, c.prefix = Et(l, {
      family: s
    })) : m ? c.iconName = m : l !== d.replacementClass && l !== i[g] && l !== i[y] && c.rest.push(l), !r && c.prefix && c.iconName) {
      var v = o === "fa" ? le(c.iconName) : {}, b = X(c.prefix, c.iconName);
      v.prefix && (o = null), c.iconName = v.iconName || b || c.iconName, c.prefix = v.prefix || c.prefix, c.prefix === "far" && !q.far && q.fas && !d.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, ln());
  return (t.includes("fa-brands") || t.includes("fab")) && (f.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (f.prefix = "fad"), !f.prefix && s === y && (q.fass || d.autoFetchSvg) && (f.prefix = "fass", f.iconName = X(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = Y() || "fas"), f;
}
var ca = /* @__PURE__ */ function() {
  function t() {
    xe(this, t), this.definitions = {};
  }
  return Ae(t, [{
    key: "add",
    value: function() {
      for (var e = this, a = arguments.length, r = new Array(a), i = 0; i < a; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        e.definitions[s] = u(u({}, e.definitions[s] || {}), o[s]), Ut(s, o[s]);
        var f = it[g][s];
        f && Ut(f, o[s]), fe();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(e, a) {
      var r = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, f = o.iconName, c = o.icon, l = c[2];
        e[s] || (e[s] = {}), l.length > 0 && l.forEach(function(m) {
          typeof m == "string" && (e[s][m] = c);
        }), e[s][f] = c;
      }), e;
    }
  }]), t;
}(), On = [], V = {}, Q = {}, ua = Object.keys(Q);
function ma(t, n) {
  var e = n.mixoutsTo;
  return On = t, V = {}, Object.keys(Q).forEach(function(a) {
    ua.indexOf(a) === -1 && delete Q[a];
  }), On.forEach(function(a) {
    var r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (e[o] = r[o]), xt(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        e[o] || (e[o] = {}), e[o][s] = r[o][s];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(o) {
        V[o] || (V[o] = []), V[o].push(i[o]);
      });
    }
    a.provides && a.provides(Q);
  }), e;
}
function Ht(t, n) {
  for (var e = arguments.length, a = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
    a[r - 2] = arguments[r];
  var i = V[t] || [];
  return i.forEach(function(o) {
    n = o.apply(null, [n].concat(a));
  }), n;
}
function B(t) {
  for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    e[a - 1] = arguments[a];
  var r = V[t] || [];
  r.forEach(function(i) {
    i.apply(null, e);
  });
}
function L() {
  var t = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return Q[t] ? Q[t].apply(null, n) : void 0;
}
function Xt(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var n = t.iconName, e = t.prefix || Y();
  if (n)
    return n = X(e, n) || n, wn(ce.definitions, e, n) || wn(T.styles, e, n);
}
var ce = new ca(), da = function() {
  d.autoReplaceSvg = !1, d.observeMutations = !1, B("noAuto");
}, va = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return M ? (B("beforeI2svg", n), L("pseudoElements2svg", n), L("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot;
    d.autoReplaceSvg === !1 && (d.autoReplaceSvg = !0), d.observeMutations = !0, Ze(function() {
      ba({
        autoReplaceSvgRoot: e
      }), B("watch", n);
    });
  }
}, pa = {
  icon: function(n) {
    if (n === null)
      return null;
    if (xt(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: X(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var e = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], a = Et(n[0]);
      return {
        prefix: a,
        iconName: X(a, e) || e
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(d.cssPrefix, "-")) > -1 || n.match(Me))) {
      var r = It(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Y(),
        iconName: X(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof n == "string") {
      var i = Y();
      return {
        prefix: i,
        iconName: X(i, n) || n
      };
    }
  }
}, C = {
  noAuto: da,
  config: d,
  dom: va,
  parse: pa,
  library: ce,
  findIconDefinition: Xt,
  toHtml: ct
}, ba = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.autoReplaceSvgRoot, a = e === void 0 ? h : e;
  (Object.keys(T.styles).length > 0 || d.autoFetchSvg) && M && d.autoReplaceSvg && C.dom.i2svg({
    node: a
  });
};
function Ct(t, n) {
  return Object.defineProperty(t, "abstract", {
    get: n
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(a) {
        return ct(a);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (M) {
        var a = h.createElement("div");
        return a.innerHTML = t.html, a.children;
      }
    }
  }), t;
}
function ga(t) {
  var n = t.children, e = t.main, a = t.mask, r = t.attributes, i = t.styles, o = t.transform;
  if (on(o) && e.found && !a.found) {
    var s = e.width, f = e.height, c = {
      x: s / f / 2,
      y: 0.5
    };
    r.style = Pt(u(u({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: n
  }];
}
function ha(t) {
  var n = t.prefix, e = t.iconName, a = t.children, r = t.attributes, i = t.symbol, o = i === !0 ? "".concat(n, "-").concat(d.cssPrefix, "-").concat(e) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: u(u({}, r), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function cn(t) {
  var n = t.icons, e = n.main, a = n.mask, r = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, f = t.title, c = t.maskId, l = t.titleId, m = t.extra, v = t.watchable, b = v === void 0 ? !1 : v, x = a.found ? a : e, P = x.width, k = x.height, E = r === "fak", w = [d.replacementClass, i ? "".concat(d.cssPrefix, "-").concat(i) : ""].filter(function(F) {
    return m.classes.indexOf(F) === -1;
  }).filter(function(F) {
    return F !== "" || !!F;
  }).concat(m.classes).join(" "), A = {
    children: [],
    attributes: u(u({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: w,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(P, " ").concat(k)
    })
  }, I = E && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(P / k * 16 * 0.0625, "em")
  } : {};
  b && (A.attributes[G] = ""), f && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(l || st())
    },
    children: [f]
  }), delete A.attributes.title);
  var S = u(u({}, A), {}, {
    prefix: r,
    iconName: i,
    main: e,
    mask: a,
    maskId: c,
    transform: o,
    symbol: s,
    styles: u(u({}, I), m.styles)
  }), W = a.found && e.found ? L("generateAbstractMask", S) || {
    children: [],
    attributes: {}
  } : L("generateAbstractIcon", S) || {
    children: [],
    attributes: {}
  }, U = W.children, Nt = W.attributes;
  return S.children = U, S.attributes = Nt, s ? ha(S) : ga(S);
}
function Sn(t) {
  var n = t.content, e = t.width, a = t.height, r = t.transform, i = t.title, o = t.extra, s = t.watchable, f = s === void 0 ? !1 : s, c = u(u(u({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (c[G] = "");
  var l = u({}, o.styles);
  on(r) && (l.transform = Ve({
    transform: r,
    startCentered: !0,
    width: e,
    height: a
  }), l["-webkit-transform"] = l.transform);
  var m = Pt(l);
  m.length > 0 && (c.style = m);
  var v = [];
  return v.push({
    tag: "span",
    attributes: c,
    children: [n]
  }), i && v.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), v;
}
function ya(t) {
  var n = t.content, e = t.title, a = t.extra, r = u(u(u({}, a.attributes), e ? {
    title: e
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = Pt(a.styles);
  i.length > 0 && (r.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [n]
  }), e && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [e]
  }), o;
}
var Lt = T.styles;
function Gt(t) {
  var n = t[0], e = t[1], a = t.slice(4), r = Zt(a, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(d.cssPrefix, "-").concat(H.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(H.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(H.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: n,
    height: e,
    icon: o
  };
}
var ka = {
  found: !1,
  width: 512,
  height: 512
};
function wa(t, n) {
  !Kn && !d.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(n, '" is missing.'));
}
function Bt(t, n) {
  var e = n;
  return n === "fa" && d.styleDefault !== null && (n = Y()), new Promise(function(a, r) {
    if (L("missingIconAbstract"), e === "fa") {
      var i = le(t) || {};
      t = i.iconName || t, n = i.prefix || n;
    }
    if (t && n && Lt[n] && Lt[n][t]) {
      var o = Lt[n][t];
      return a(Gt(o));
    }
    wa(t, n), a(u(u({}, ka), {}, {
      icon: d.showMissingIcons && t ? L("missingIconAbstract") || {} : {}
    }));
  });
}
var Pn = function() {
}, qt = d.measurePerformance && ut && ut.mark && ut.measure ? ut : {
  mark: Pn,
  measure: Pn
}, tt = 'FA "6.5.1"', xa = function(n) {
  return qt.mark("".concat(tt, " ").concat(n, " begins")), function() {
    return ue(n);
  };
}, ue = function(n) {
  qt.mark("".concat(tt, " ").concat(n, " ends")), qt.measure("".concat(tt, " ").concat(n), "".concat(tt, " ").concat(n, " begins"), "".concat(tt, " ").concat(n, " ends"));
}, un = {
  begin: xa,
  end: ue
}, kt = function() {
};
function En(t) {
  var n = t.getAttribute ? t.getAttribute(G) : null;
  return typeof n == "string";
}
function Aa(t) {
  var n = t.getAttribute ? t.getAttribute(nn) : null, e = t.getAttribute ? t.getAttribute(en) : null;
  return n && e;
}
function Oa(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(d.replacementClass);
}
function Sa() {
  if (d.autoReplaceSvg === !0)
    return wt.replace;
  var t = wt[d.autoReplaceSvg];
  return t || wt.replace;
}
function Pa(t) {
  return h.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ea(t) {
  return h.createElement(t);
}
function me(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = n.ceFn, a = e === void 0 ? t.tag === "svg" ? Pa : Ea : e;
  if (typeof t == "string")
    return h.createTextNode(t);
  var r = a(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    r.setAttribute(o, t.attributes[o]);
  });
  var i = t.children || [];
  return i.forEach(function(o) {
    r.appendChild(me(o, {
      ceFn: a
    }));
  }), r;
}
function Ia(t) {
  var n = " ".concat(t.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var wt = {
  replace: function(n) {
    var e = n[0];
    if (e.parentNode)
      if (n[1].forEach(function(r) {
        e.parentNode.insertBefore(me(r), e);
      }), e.getAttribute(G) === null && d.keepOriginalSource) {
        var a = h.createComment(Ia(e));
        e.parentNode.replaceChild(a, e);
      } else
        e.remove();
  },
  nest: function(n) {
    var e = n[0], a = n[1];
    if (~rn(e).indexOf(d.replacementClass))
      return wt.replace(n);
    var r = new RegExp("".concat(d.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i = a[0].attributes.class.split(" ").reduce(function(s, f) {
        return f === d.replacementClass || f.match(r) ? s.toSvg.push(f) : s.toNode.push(f), s;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    var o = a.map(function(s) {
      return ct(s);
    }).join(`
`);
    e.setAttribute(G, ""), e.innerHTML = o;
  }
};
function In(t) {
  t();
}
function de(t, n) {
  var e = typeof n == "function" ? n : kt;
  if (t.length === 0)
    e();
  else {
    var a = In;
    d.mutateApproach === _e && (a = D.requestAnimationFrame || In), a(function() {
      var r = Sa(), i = un.begin("mutate");
      t.map(r), i(), e();
    });
  }
}
var mn = !1;
function ve() {
  mn = !0;
}
function Vt() {
  mn = !1;
}
var Ot = null;
function Cn(t) {
  if (hn && d.observeMutations) {
    var n = t.treeCallback, e = n === void 0 ? kt : n, a = t.nodeCallback, r = a === void 0 ? kt : a, i = t.pseudoElementsCallback, o = i === void 0 ? kt : i, s = t.observeMutationsRoot, f = s === void 0 ? h : s;
    Ot = new hn(function(c) {
      if (!mn) {
        var l = Y();
        Z(c).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !En(m.addedNodes[0]) && (d.searchPseudoElements && o(m.target), e(m.target)), m.type === "attributes" && m.target.parentNode && d.searchPseudoElements && o(m.target.parentNode), m.type === "attributes" && En(m.target) && ~De.indexOf(m.attributeName))
            if (m.attributeName === "class" && Aa(m.target)) {
              var v = It(rn(m.target)), b = v.prefix, x = v.iconName;
              m.target.setAttribute(nn, b || l), x && m.target.setAttribute(en, x);
            } else
              Oa(m.target) && r(m.target);
        });
      }
    }), M && Ot.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ca() {
  Ot && Ot.disconnect();
}
function Ta(t) {
  var n = t.getAttribute("style"), e = [];
  return n && (e = n.split(";").reduce(function(a, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), e;
}
function Na(t) {
  var n = t.getAttribute("data-prefix"), e = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "", r = It(rn(t));
  return r.prefix || (r.prefix = Y()), n && e && (r.prefix = n, r.iconName = e), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = fa(r.prefix, t.innerText) || fn(r.prefix, Wt(t.innerText))), !r.iconName && d.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function _a(t) {
  var n = Z(t.attributes).reduce(function(r, i) {
    return r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r;
  }, {}), e = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return d.autoA11y && (e ? n["aria-labelledby"] = "".concat(d.replacementClass, "-title-").concat(a || st()) : (n["aria-hidden"] = "true", n.focusable = "false")), n;
}
function Ra() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: N,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Tn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, e = Na(t), a = e.iconName, r = e.prefix, i = e.rest, o = _a(t), s = Ht("parseNodeAttributes", {}, t), f = n.styleParser ? Ta(t) : [];
  return u({
    iconName: a,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: N,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: f,
      attributes: o
    }
  }, s);
}
var La = T.styles;
function pe(t) {
  var n = d.autoReplaceSvg === "nest" ? Tn(t, {
    styleParser: !1
  }) : Tn(t);
  return ~n.extra.classes.indexOf(Qn) ? L("generateLayersText", t, n) : L("generateSvgReplacementMutation", t, n);
}
var $ = /* @__PURE__ */ new Set();
an.map(function(t) {
  $.add("fa-".concat(t));
});
Object.keys(at[g]).map($.add.bind($));
Object.keys(at[y]).map($.add.bind($));
$ = ft($);
function Nn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!M)
    return Promise.resolve();
  var e = h.documentElement.classList, a = function(m) {
    return e.add("".concat(yn, "-").concat(m));
  }, r = function(m) {
    return e.remove("".concat(yn, "-").concat(m));
  }, i = d.autoFetchSvg ? $ : an.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(La));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Qn, ":not([").concat(G, "])")].concat(i.map(function(l) {
    return ".".concat(l, ":not([").concat(G, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Z(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  var f = un.begin("onTree"), c = s.reduce(function(l, m) {
    try {
      var v = pe(m);
      v && l.push(v);
    } catch (b) {
      Kn || b.name === "MissingIcon" && console.error(b);
    }
    return l;
  }, []);
  return new Promise(function(l, m) {
    Promise.all(c).then(function(v) {
      de(v, function() {
        a("active"), a("complete"), r("pending"), typeof n == "function" && n(), f(), l();
      });
    }).catch(function(v) {
      f(), m(v);
    });
  });
}
function Ma(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pe(t).then(function(e) {
    e && de([e], n);
  });
}
function Fa(t) {
  return function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (n || {}).icon ? n : Xt(n || {}), r = e.mask;
    return r && (r = (r || {}).icon ? r : Xt(r || {})), t(a, u(u({}, e), {}, {
      mask: r
    }));
  };
}
var ja = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.transform, r = a === void 0 ? N : a, i = e.symbol, o = i === void 0 ? !1 : i, s = e.mask, f = s === void 0 ? null : s, c = e.maskId, l = c === void 0 ? null : c, m = e.title, v = m === void 0 ? null : m, b = e.titleId, x = b === void 0 ? null : b, P = e.classes, k = P === void 0 ? [] : P, E = e.attributes, w = E === void 0 ? {} : E, A = e.styles, I = A === void 0 ? {} : A;
  if (n) {
    var S = n.prefix, W = n.iconName, U = n.icon;
    return Ct(u({
      type: "icon"
    }, n), function() {
      return B("beforeDOMElementCreation", {
        iconDefinition: n,
        params: e
      }), d.autoA11y && (v ? w["aria-labelledby"] = "".concat(d.replacementClass, "-title-").concat(x || st()) : (w["aria-hidden"] = "true", w.focusable = "false")), cn({
        icons: {
          main: Gt(U),
          mask: f ? Gt(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: S,
        iconName: W,
        transform: u(u({}, N), r),
        symbol: o,
        title: v,
        maskId: l,
        titleId: x,
        extra: {
          attributes: w,
          styles: I,
          classes: k
        }
      });
    });
  }
}, za = {
  mixout: function() {
    return {
      icon: Fa(ja)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.treeCallback = Nn, e.nodeCallback = Ma, e;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(e) {
      var a = e.node, r = a === void 0 ? h : a, i = e.callback, o = i === void 0 ? function() {
      } : i;
      return Nn(r, o);
    }, n.generateSvgReplacementMutation = function(e, a) {
      var r = a.iconName, i = a.title, o = a.titleId, s = a.prefix, f = a.transform, c = a.symbol, l = a.mask, m = a.maskId, v = a.extra;
      return new Promise(function(b, x) {
        Promise.all([Bt(r, s), l.iconName ? Bt(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(P) {
          var k = Zt(P, 2), E = k[0], w = k[1];
          b([e, cn({
            icons: {
              main: E,
              mask: w
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: c,
            maskId: m,
            title: i,
            titleId: o,
            extra: v,
            watchable: !0
          })]);
        }).catch(x);
      });
    }, n.generateAbstractIcon = function(e) {
      var a = e.children, r = e.attributes, i = e.main, o = e.transform, s = e.styles, f = Pt(s);
      f.length > 0 && (r.style = f);
      var c;
      return on(o) && (c = L("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), a.push(c || i.icon), {
        children: a,
        attributes: r
      };
    };
  }
}, Da = {
  mixout: function() {
    return {
      layer: function(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.classes, i = r === void 0 ? [] : r;
        return Ct({
          type: "layer"
        }, function() {
          B("beforeDOMElementCreation", {
            assembler: e,
            params: a
          });
          var o = [];
          return e(function(s) {
            Array.isArray(s) ? s.map(function(f) {
              o = o.concat(f.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(d.cssPrefix, "-layers")].concat(ft(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Ya = {
  mixout: function() {
    return {
      counter: function(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.title, i = r === void 0 ? null : r, o = a.classes, s = o === void 0 ? [] : o, f = a.attributes, c = f === void 0 ? {} : f, l = a.styles, m = l === void 0 ? {} : l;
        return Ct({
          type: "counter",
          content: e
        }, function() {
          return B("beforeDOMElementCreation", {
            content: e,
            params: a
          }), ya({
            content: e.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: m,
              classes: ["".concat(d.cssPrefix, "-layers-counter")].concat(ft(s))
            }
          });
        });
      }
    };
  }
}, $a = {
  mixout: function() {
    return {
      text: function(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.transform, i = r === void 0 ? N : r, o = a.title, s = o === void 0 ? null : o, f = a.classes, c = f === void 0 ? [] : f, l = a.attributes, m = l === void 0 ? {} : l, v = a.styles, b = v === void 0 ? {} : v;
        return Ct({
          type: "text",
          content: e
        }, function() {
          return B("beforeDOMElementCreation", {
            content: e,
            params: a
          }), Sn({
            content: e,
            transform: u(u({}, N), i),
            title: s,
            extra: {
              attributes: m,
              styles: b,
              classes: ["".concat(d.cssPrefix, "-layers-text")].concat(ft(c))
            }
          });
        });
      }
    };
  },
  provides: function(n) {
    n.generateLayersText = function(e, a) {
      var r = a.title, i = a.transform, o = a.extra, s = null, f = null;
      if (Bn) {
        var c = parseInt(getComputedStyle(e).fontSize, 10), l = e.getBoundingClientRect();
        s = l.width / c, f = l.height / c;
      }
      return d.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([e, Sn({
        content: e.innerHTML,
        width: s,
        height: f,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Wa = new RegExp('"', "ug"), _n = [1105920, 1112319];
function Ua(t) {
  var n = t.replace(Wa, ""), e = ea(n, 0), a = e >= _n[0] && e <= _n[1], r = n.length === 2 ? n[0] === n[1] : !1;
  return {
    value: Wt(r ? n[0] : n),
    isSecondary: a || r
  };
}
function Rn(t, n) {
  var e = "".concat(Ne).concat(n.replace(":", "-"));
  return new Promise(function(a, r) {
    if (t.getAttribute(e) !== null)
      return a();
    var i = Z(t.children), o = i.filter(function(U) {
      return U.getAttribute($t) === n;
    })[0], s = D.getComputedStyle(t, n), f = s.getPropertyValue("font-family").match(Fe), c = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (o && !f)
      return t.removeChild(o), a();
    if (f && l !== "none" && l !== "") {
      var m = s.getPropertyValue("content"), v = ~["Sharp"].indexOf(f[2]) ? y : g, b = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? rt[v][f[2].toLowerCase()] : je[v][c], x = Ua(m), P = x.value, k = x.isSecondary, E = f[0].startsWith("FontAwesome"), w = fn(b, P), A = w;
      if (E) {
        var I = la(P);
        I.iconName && I.prefix && (w = I.iconName, b = I.prefix);
      }
      if (w && !k && (!o || o.getAttribute(nn) !== b || o.getAttribute(en) !== A)) {
        t.setAttribute(e, A), o && t.removeChild(o);
        var S = Ra(), W = S.extra;
        W.attributes[$t] = n, Bt(w, b).then(function(U) {
          var Nt = cn(u(u({}, S), {}, {
            icons: {
              main: U,
              mask: ln()
            },
            prefix: b,
            iconName: A,
            extra: W,
            watchable: !0
          })), F = h.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? t.insertBefore(F, t.firstChild) : t.appendChild(F), F.outerHTML = Nt.map(function(ke) {
            return ct(ke);
          }).join(`
`), t.removeAttribute(e), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Ha(t) {
  return Promise.all([Rn(t, "::before"), Rn(t, "::after")]);
}
function Xa(t) {
  return t.parentNode !== document.head && !~Re.indexOf(t.tagName.toUpperCase()) && !t.getAttribute($t) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ln(t) {
  if (M)
    return new Promise(function(n, e) {
      var a = Z(t.querySelectorAll("*")).filter(Xa).map(Ha), r = un.begin("searchPseudoElements");
      ve(), Promise.all(a).then(function() {
        r(), Vt(), n();
      }).catch(function() {
        r(), Vt(), e();
      });
    });
}
var Ga = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.pseudoElementsCallback = Ln, e;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(e) {
      var a = e.node, r = a === void 0 ? h : a;
      d.searchPseudoElements && Ln(r);
    };
  }
}, Mn = !1, Ba = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ve(), Mn = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Cn(Ht("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ca();
      },
      watch: function(e) {
        var a = e.observeMutationsRoot;
        Mn ? Vt() : Cn(Ht("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
}, Fn = function(n) {
  var e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce(function(a, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return a.flipX = !0, a;
    if (o && s === "v")
      return a.flipY = !0, a;
    if (s = parseFloat(s), isNaN(s))
      return a;
    switch (o) {
      case "grow":
        a.size = a.size + s;
        break;
      case "shrink":
        a.size = a.size - s;
        break;
      case "left":
        a.x = a.x - s;
        break;
      case "right":
        a.x = a.x + s;
        break;
      case "up":
        a.y = a.y - s;
        break;
      case "down":
        a.y = a.y + s;
        break;
      case "rotate":
        a.rotate = a.rotate + s;
        break;
    }
    return a;
  }, e);
}, qa = {
  mixout: function() {
    return {
      parse: {
        transform: function(e) {
          return Fn(e);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(e, a) {
        var r = a.getAttribute("data-fa-transform");
        return r && (e.transform = Fn(r)), e;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractTransformGrouping = function(e) {
      var a = e.main, r = e.transform, i = e.containerWidth, o = e.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(f, " ").concat(c, " ").concat(l)
      }, v = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: m,
        path: v
      };
      return {
        tag: "g",
        attributes: u({}, b.outer),
        children: [{
          tag: "g",
          attributes: u({}, b.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: u(u({}, a.icon.attributes), b.path)
          }]
        }]
      };
    };
  }
}, Mt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function jn(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"), t;
}
function Va(t) {
  return t.tag === "g" ? t.children : [t];
}
var Ka = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, a) {
        var r = a.getAttribute("data-fa-mask"), i = r ? It(r.split(" ").map(function(o) {
          return o.trim();
        })) : ln();
        return i.prefix || (i.prefix = Y()), e.mask = i, e.maskId = a.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(e) {
      var a = e.children, r = e.attributes, i = e.main, o = e.mask, s = e.maskId, f = e.transform, c = i.width, l = i.icon, m = o.width, v = o.icon, b = qe({
        transform: f,
        containerWidth: m,
        iconWidth: c
      }), x = {
        tag: "rect",
        attributes: u(u({}, Mt), {}, {
          fill: "white"
        })
      }, P = l.children ? {
        children: l.children.map(jn)
      } : {}, k = {
        tag: "g",
        attributes: u({}, b.inner),
        children: [jn(u({
          tag: l.tag,
          attributes: u(u({}, l.attributes), b.path)
        }, P))]
      }, E = {
        tag: "g",
        attributes: u({}, b.outer),
        children: [k]
      }, w = "mask-".concat(s || st()), A = "clip-".concat(s || st()), I = {
        tag: "mask",
        attributes: u(u({}, Mt), {}, {
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, E]
      }, S = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: Va(v)
        }, I]
      };
      return a.push(S, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(w, ")")
        }, Mt)
      }), {
        children: a,
        attributes: r
      };
    };
  }
}, Qa = {
  provides: function(n) {
    var e = !1;
    D.matchMedia && (e = D.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var a = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = u(u({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: u(u({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || s.children.push({
        tag: "animate",
        attributes: u(u({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: u(u({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(s), a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
}, Ja = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, a) {
        var r = a.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = i, e;
      }
    };
  }
}, Za = [Qe, za, Da, Ya, $a, Ga, Ba, qa, Ka, Qa, Ja];
ma(Za, {
  mixoutsTo: C
});
C.noAuto;
C.config;
C.library;
C.dom;
var Kt = C.parse;
C.findIconDefinition;
C.toHtml;
var tr = C.icon;
C.layer;
C.text;
C.counter;
var be = { exports: {} }, Ft, zn;
function nr() {
  if (zn)
    return Ft;
  zn = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ft = t, Ft;
}
var jt, Dn;
function er() {
  if (Dn)
    return jt;
  Dn = 1;
  var t = nr();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, jt = function() {
    function a(o, s, f, c, l, m) {
      if (m !== t) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    a.isRequired = a;
    function r() {
      return a;
    }
    var i = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: r,
      element: a,
      elementType: a,
      instanceOf: r,
      node: a,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: e,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, jt;
}
be.exports = er()();
var ar = be.exports;
const p = /* @__PURE__ */ we(ar);
function Yn(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function z(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Yn(Object(e), !0).forEach(function(a) {
      K(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Yn(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
function St(t) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, St(t);
}
function K(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function rr(t, n) {
  if (t == null)
    return {};
  var e = {}, a = Object.keys(t), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(n.indexOf(r) >= 0) && (e[r] = t[r]);
  return e;
}
function ir(t, n) {
  if (t == null)
    return {};
  var e = rr(t, n), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      a = i[r], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (e[a] = t[a]);
  }
  return e;
}
function Qt(t) {
  return or(t) || sr(t) || fr(t) || lr();
}
function or(t) {
  if (Array.isArray(t))
    return Jt(t);
}
function sr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function fr(t, n) {
  if (t) {
    if (typeof t == "string")
      return Jt(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Jt(t, n);
  }
}
function Jt(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++)
    a[e] = t[e];
  return a;
}
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cr(t) {
  var n, e = t.beat, a = t.fade, r = t.beatFade, i = t.bounce, o = t.shake, s = t.flash, f = t.spin, c = t.spinPulse, l = t.spinReverse, m = t.pulse, v = t.fixedWidth, b = t.inverse, x = t.border, P = t.listItem, k = t.flip, E = t.size, w = t.rotation, A = t.pull, I = (n = {
    "fa-beat": e,
    "fa-fade": a,
    "fa-beat-fade": r,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": f,
    "fa-spin-reverse": l,
    "fa-spin-pulse": c,
    "fa-pulse": m,
    "fa-fw": v,
    "fa-inverse": b,
    "fa-border": x,
    "fa-li": P,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, K(n, "fa-".concat(E), typeof E < "u" && E !== null), K(n, "fa-rotate-".concat(w), typeof w < "u" && w !== null && w !== 0), K(n, "fa-pull-".concat(A), typeof A < "u" && A !== null), K(n, "fa-swap-opacity", t.swapOpacity), n);
  return Object.keys(I).map(function(S) {
    return I[S] ? S : null;
  }).filter(function(S) {
    return S;
  });
}
function ur(t) {
  return t = t - 0, t === t;
}
function ge(t) {
  return ur(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(n, e) {
    return e ? e.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var mr = ["style"];
function dr(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function vr(t) {
  return t.split(";").map(function(n) {
    return n.trim();
  }).filter(function(n) {
    return n;
  }).reduce(function(n, e) {
    var a = e.indexOf(":"), r = ge(e.slice(0, a)), i = e.slice(a + 1).trim();
    return r.startsWith("webkit") ? n[dr(r)] = i : n[r] = i, n;
  }, {});
}
function he(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == "string")
    return n;
  var a = (n.children || []).map(function(f) {
    return he(t, f);
  }), r = Object.keys(n.attributes || {}).reduce(function(f, c) {
    var l = n.attributes[c];
    switch (c) {
      case "class":
        f.attrs.className = l, delete n.attributes.class;
        break;
      case "style":
        f.attrs.style = vr(l);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? f.attrs[c.toLowerCase()] = l : f.attrs[ge(c)] = l;
    }
    return f;
  }, {
    attrs: {}
  }), i = e.style, o = i === void 0 ? {} : i, s = ir(e, mr);
  return r.attrs.style = z(z({}, r.attrs.style), o), t.apply(void 0, [n.tag, z(z({}, r.attrs), s)].concat(Qt(a)));
}
var ye = !1;
try {
  ye = !0;
} catch {
}
function pr() {
  if (!ye && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function $n(t) {
  if (t && St(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (Kt.icon)
    return Kt.icon(t);
  if (t === null)
    return null;
  if (t && St(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
function zt(t, n) {
  return Array.isArray(n) && n.length > 0 || !Array.isArray(n) && n ? K({}, t, n) : {};
}
var Tt = /* @__PURE__ */ Wn.forwardRef(function(t, n) {
  var e = t.icon, a = t.mask, r = t.symbol, i = t.className, o = t.title, s = t.titleId, f = t.maskId, c = $n(e), l = zt("classes", [].concat(Qt(cr(t)), Qt(i.split(" ")))), m = zt("transform", typeof t.transform == "string" ? Kt.transform(t.transform) : t.transform), v = zt("mask", $n(a)), b = tr(c, z(z(z(z({}, l), m), v), {}, {
    symbol: r,
    title: o,
    titleId: s,
    maskId: f
  }));
  if (!b)
    return pr("Could not find icon", c), null;
  var x = b.abstract, P = {
    ref: n
  };
  return Object.keys(t).forEach(function(k) {
    Tt.defaultProps.hasOwnProperty(k) || (P[k] = t[k]);
  }), br(x[0], P);
});
Tt.displayName = "FontAwesomeIcon";
Tt.propTypes = {
  beat: p.bool,
  border: p.bool,
  beatFade: p.bool,
  bounce: p.bool,
  className: p.string,
  fade: p.bool,
  flash: p.bool,
  mask: p.oneOfType([p.object, p.array, p.string]),
  maskId: p.string,
  fixedWidth: p.bool,
  inverse: p.bool,
  flip: p.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: p.oneOfType([p.object, p.array, p.string]),
  listItem: p.bool,
  pull: p.oneOf(["right", "left"]),
  pulse: p.bool,
  rotation: p.oneOf([0, 90, 180, 270]),
  shake: p.bool,
  size: p.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: p.bool,
  spinPulse: p.bool,
  spinReverse: p.bool,
  symbol: p.oneOfType([p.bool, p.string]),
  title: p.string,
  titleId: p.string,
  transform: p.oneOfType([p.string, p.object]),
  swapOpacity: p.bool
};
Tt.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var br = he.bind(null, Wn.createElement);
export {
  Tt as F,
  p as P,
  ar as p
};
