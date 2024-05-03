import { r as Gt, j as q, K as Zt, g as Jt } from "./_JqgLpqe.js";
import { r as f, b as xt } from "./react-D5yUVy0K.js";
import { r as Et } from "./react-dom-CwZtGxo1.js";
import { z as Qt } from "./DYjKt7w-.js";
import { U as en } from "./BBNzmKg6.js";
import { e as tn, a as $e, u as nn } from "./styled-components-sg3HbxYZ.js";
import { y as rn, w as on } from "./BsRJmYuf.js";
import { b as sn, a as cn } from "./Dj4cxZ3D.js";
var ln = "[object Number]";
function Rt(e) {
  return typeof e == "number" || rn(e) && on(e) == ln;
}
function re(e) {
  return Ct(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Q(e) {
  var t;
  return (t = (Ct(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ct(e) {
  return e instanceof Node || e instanceof K(e).Node;
}
function $(e) {
  return e instanceof Element || e instanceof K(e).Element;
}
function Y(e) {
  return e instanceof HTMLElement || e instanceof K(e).HTMLElement;
}
function He(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
function we(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = X(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function an(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Ue(e) {
  const t = ze(), n = X(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function un(e) {
  let t = ae(e);
  for (; Y(t) && !ve(t); ) {
    if (Ue(t))
      return t;
    t = ae(t);
  }
  return null;
}
function ze() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ve(e) {
  return ["html", "body", "#document"].includes(re(e));
}
function X(e) {
  return K(e).getComputedStyle(e);
}
function Fe(e) {
  return $(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ae(e) {
  if (re(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    He(e) && e.host || // Fallback.
    Q(e)
  );
  return He(t) ? t.host : t;
}
function Tt(e) {
  const t = ae(e);
  return ve(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Y(t) && we(t) ? t : Tt(t);
}
function ne(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tt(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = K(o);
  return s ? t.concat(i, i.visualViewport || [], we(o) ? o : [], i.frameElement && n ? ne(i.frameElement) : []) : t.concat(o, ne(o, [], n));
}
function Ke(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function J(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && He(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function St() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Pt() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function fn(e) {
  return mn() ? !1 : !tt() && e.width === 0 && e.height === 0 || tt() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Ot() {
  return /apple/i.test(navigator.vendor);
}
function tt() {
  const e = /android/i;
  return e.test(St()) || e.test(Pt());
}
function dn() {
  return St().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function mn() {
  return Pt().includes("jsdom/");
}
function Pe(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function gn(e) {
  return "nativeEvent" in e;
}
function pn(e) {
  return e.matches("html,body");
}
function te(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function We(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ce(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const hn = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function At(e) {
  return Y(e) && e.matches(hn);
}
const be = Math.min, le = Math.max, Oe = Math.round, Ce = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), vn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bn = {
  start: "end",
  end: "start"
};
function Ye(e, t, n) {
  return le(e, be(t, n));
}
function xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ue(e) {
  return e.split("-")[0];
}
function Ee(e) {
  return e.split("-")[1];
}
function kt(e) {
  return e === "x" ? "y" : "x";
}
function Ge(e) {
  return e === "y" ? "height" : "width";
}
function Ne(e) {
  return ["top", "bottom"].includes(ue(e)) ? "y" : "x";
}
function Ze(e) {
  return kt(Ne(e));
}
function yn(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ee(e), o = Ze(e), s = Ge(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ae(i)), [i, Ae(i)];
}
function wn(e) {
  const t = Ae(e);
  return [Xe(e), t, Xe(t)];
}
function Xe(e) {
  return e.replace(/start|end/g, (t) => bn[t]);
}
function xn(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function En(e, t, n, r) {
  const o = Ee(e);
  let s = xn(ue(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Xe)))), s;
}
function Ae(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vn[t]);
}
function Rn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lt(e) {
  return typeof e != "number" ? Rn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ke(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function nt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ne(t), i = Ze(t), c = Ge(i), a = ue(t), l = s === "y", p = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, v = r[c] / 2 - o[c] / 2;
  let u;
  switch (a) {
    case "top":
      u = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      u = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      u = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      u = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ee(t)) {
    case "start":
      u[i] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      u[i] += v * (n && l ? -1 : 1);
      break;
  }
  return u;
}
const Cn = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: m
  } = nt(l, r, a), v = r, u = {}, g = 0;
  for (let d = 0; d < c.length; d++) {
    const {
      name: C,
      fn: R
    } = c[d], {
      x: T,
      y: P,
      data: x,
      reset: y
    } = await R({
      x: p,
      y: m,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: u,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (p = T ?? p, m = P ?? m, u = {
      ...u,
      [C]: {
        ...u[C],
        ...x
      }
    }, y && g <= 50) {
      g++, typeof y == "object" && (y.placement && (v = y.placement), y.rects && (l = y.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : y.rects), {
        x: p,
        y: m
      } = nt(l, v, a)), d = -1;
      continue;
    }
  }
  return {
    x: p,
    y: m,
    placement: v,
    strategy: o,
    middlewareData: u
  };
};
async function Dt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: c,
    strategy: a
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: u = 0
  } = xe(t, e), g = Lt(u), C = c[v ? m === "floating" ? "reference" : "floating" : m], R = ke(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(C))) == null || n ? C : C.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: p,
    strategy: a
  })), T = m === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), x = await (s.isElement == null ? void 0 : s.isElement(P)) ? await (s.getScale == null ? void 0 : s.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = ke(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: T,
    offsetParent: P,
    strategy: a
  }) : T);
  return {
    top: (R.top - y.top + g.top) / x.y,
    bottom: (y.bottom - R.bottom + g.bottom) / x.y,
    left: (R.left - y.left + g.left) / x.x,
    right: (y.right - R.right + g.right) / x.x
  };
}
const Tn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: a
    } = t, {
      element: l,
      padding: p = 0
    } = xe(e, t) || {};
    if (l == null)
      return {};
    const m = Lt(p), v = {
      x: n,
      y: r
    }, u = Ze(o), g = Ge(u), d = await i.getDimensions(l), C = u === "y", R = C ? "top" : "left", T = C ? "bottom" : "right", P = C ? "clientHeight" : "clientWidth", x = s.reference[g] + s.reference[u] - v[u] - s.floating[g], y = v[u] - s.reference[u], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let A = O ? O[P] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(O))) && (A = c.floating[P] || s.floating[g]);
    const F = x / 2 - y / 2, M = A / 2 - d[g] / 2 - 1, L = be(m[R], M), N = be(m[T], M), D = L, k = A - d[g] - N, h = A / 2 - d[g] / 2 + F, b = Ye(D, h, k), S = !a.arrow && Ee(o) != null && h != b && s.reference[g] / 2 - (h < D ? L : N) - d[g] / 2 < 0, E = S ? h < D ? h - D : h - k : 0;
    return {
      [u]: v[u] + E,
      data: {
        [u]: b,
        centerOffset: h - b - E,
        ...S && {
          alignmentOffset: E
        }
      },
      reset: S
    };
  }
}), Sn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: a,
        elements: l
      } = t, {
        mainAxis: p = !0,
        crossAxis: m = !0,
        fallbackPlacements: v,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: d = !0,
        ...C
      } = xe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const R = ue(o), T = ue(c) === c, P = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = v || (T || !d ? [Ae(c)] : wn(c));
      !v && g !== "none" && x.push(...En(c, d, g, P));
      const y = [c, ...x], O = await Dt(t, C), A = [];
      let F = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (p && A.push(O[R]), m) {
        const D = yn(o, i, P);
        A.push(O[D[0]], O[D[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var M, L;
        const D = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, k = y[D];
        if (k)
          return {
            data: {
              index: D,
              overflows: F
            },
            reset: {
              placement: k
            }
          };
        let h = (L = F.filter((b) => b.overflows[0] <= 0).sort((b, S) => b.overflows[1] - S.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!h)
          switch (u) {
            case "bestFit": {
              var N;
              const b = (N = F.map((S) => [S.placement, S.overflows.filter((E) => E > 0).reduce((E, w) => E + w, 0)]).sort((S, E) => S[1] - E[1])[0]) == null ? void 0 : N[0];
              b && (h = b);
              break;
            }
            case "initialPlacement":
              h = c;
              break;
          }
        if (o !== h)
          return {
            reset: {
              placement: h
            }
          };
      }
      return {};
    }
  };
};
async function Pn(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = ue(n), c = Ee(n), a = Ne(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, p = s && a ? -1 : 1, m = xe(t, e);
  let {
    mainAxis: v,
    crossAxis: u,
    alignmentAxis: g
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return c && typeof g == "number" && (u = c === "end" ? g * -1 : g), a ? {
    x: u * p,
    y: v * l
  } : {
    x: v * l,
    y: u * p
  };
}
const On = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: c
      } = t, a = await Pn(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: i
        }
      };
    }
  };
}, An = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (C) => {
            let {
              x: R,
              y: T
            } = C;
            return {
              x: R,
              y: T
            };
          }
        },
        ...a
      } = xe(e, t), l = {
        x: n,
        y: r
      }, p = await Dt(t, a), m = Ne(ue(o)), v = kt(m);
      let u = l[v], g = l[m];
      if (s) {
        const C = v === "y" ? "top" : "left", R = v === "y" ? "bottom" : "right", T = u + p[C], P = u - p[R];
        u = Ye(T, u, P);
      }
      if (i) {
        const C = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", T = g + p[C], P = g - p[R];
        g = Ye(T, g, P);
      }
      const d = c.fn({
        ...t,
        [v]: u,
        [m]: g
      });
      return {
        ...d,
        data: {
          x: d.x - n,
          y: d.y - r
        }
      };
    }
  };
};
function It(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Y(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, c = Oe(n) !== s || Oe(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function Je(e) {
  return $(e) ? e : e.contextElement;
}
function he(e) {
  const t = Je(e);
  if (!Y(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = It(t);
  let i = (s ? Oe(n.width) : n.width) / r, c = (s ? Oe(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const kn = /* @__PURE__ */ oe(0);
function Mt(e) {
  const t = K(e);
  return !ze() || !t.visualViewport ? kn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ln(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== K(e) ? !1 : t;
}
function fe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Je(e);
  let i = oe(1);
  t && (r ? $(r) && (i = he(r)) : i = he(e));
  const c = Ln(s, n, r) ? Mt(s) : oe(0);
  let a = (o.left + c.x) / i.x, l = (o.top + c.y) / i.y, p = o.width / i.x, m = o.height / i.y;
  if (s) {
    const v = K(s), u = r && $(r) ? K(r) : r;
    let g = v.frameElement;
    for (; g && r && u !== v; ) {
      const d = he(g), C = g.getBoundingClientRect(), R = X(g), T = C.left + (g.clientLeft + parseFloat(R.paddingLeft)) * d.x, P = C.top + (g.clientTop + parseFloat(R.paddingTop)) * d.y;
      a *= d.x, l *= d.y, p *= d.x, m *= d.y, a += T, l += P, g = K(g).frameElement;
    }
  }
  return ke({
    width: p,
    height: m,
    x: a,
    y: l
  });
}
function Dn(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Y(n), s = Q(n);
  if (n === s)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = oe(1);
  const a = oe(0);
  if ((o || !o && r !== "fixed") && ((re(n) !== "body" || we(s)) && (i = Fe(n)), Y(n))) {
    const l = fe(n);
    c = he(n), a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - i.scrollLeft * c.x + a.x,
    y: t.y * c.y - i.scrollTop * c.y + a.y
  };
}
function In(e) {
  return Array.from(e.getClientRects());
}
function Ft(e) {
  return fe(Q(e)).left + Fe(e).scrollLeft;
}
function Mn(e) {
  const t = Q(e), n = Fe(e), r = e.ownerDocument.body, o = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ft(e);
  const c = -n.scrollTop;
  return X(r).direction === "rtl" && (i += le(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
function Fn(e, t) {
  const n = K(e), r = Q(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, a = 0;
  if (o) {
    s = o.width, i = o.height;
    const l = ze();
    (!l || l && t === "fixed") && (c = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: a
  };
}
function Nn(e, t) {
  const n = fe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Y(e) ? he(e) : oe(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, a = o * s.x, l = r * s.y;
  return {
    width: i,
    height: c,
    x: a,
    y: l
  };
}
function rt(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fn(e, n);
  else if (t === "document")
    r = Mn(Q(e));
  else if ($(t))
    r = Nn(t, n);
  else {
    const o = Mt(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return ke(r);
}
function Nt(e, t) {
  const n = ae(e);
  return n === t || !$(n) || ve(n) ? !1 : X(n).position === "fixed" || Nt(n, t);
}
function $n(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ne(e, [], !1).filter((c) => $(c) && re(c) !== "body"), o = null;
  const s = X(e).position === "fixed";
  let i = s ? ae(e) : e;
  for (; $(i) && !ve(i); ) {
    const c = X(i), a = Ue(i);
    !a && c.position === "fixed" && (o = null), (s ? !a && !o : !a && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || we(i) && !a && Nt(e, i)) ? r = r.filter((p) => p !== i) : o = c, i = ae(i);
  }
  return t.set(e, r), r;
}
function Wn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? $n(t, this._c) : [].concat(n), r], c = i[0], a = i.reduce((l, p) => {
    const m = rt(t, p, o);
    return l.top = le(m.top, l.top), l.right = be(m.right, l.right), l.bottom = be(m.bottom, l.bottom), l.left = le(m.left, l.left), l;
  }, rt(t, c, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Bn(e) {
  const {
    width: t,
    height: n
  } = It(e);
  return {
    width: t,
    height: n
  };
}
function Vn(e, t, n) {
  const r = Y(t), o = Q(t), s = n === "fixed", i = fe(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = oe(0);
  if (r || !r && !s)
    if ((re(t) !== "body" || we(o)) && (c = Fe(t)), r) {
      const l = fe(t, !0, s, t);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      o && (a.x = Ft(o));
  return {
    x: i.left + c.scrollLeft - a.x,
    y: i.top + c.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function ot(e, t) {
  return !Y(e) || X(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $t(e, t) {
  const n = K(e);
  if (!Y(e))
    return n;
  let r = ot(e, t);
  for (; r && an(r) && X(r).position === "static"; )
    r = ot(r, t);
  return r && (re(r) === "html" || re(r) === "body" && X(r).position === "static" && !Ue(r)) ? n : r || un(e) || n;
}
const _n = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || $t, s = this.getDimensions;
  return {
    reference: Vn(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function jn(e) {
  return X(e).direction === "rtl";
}
const Wt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dn,
  getDocumentElement: Q,
  getClippingRect: Wn,
  getOffsetParent: $t,
  getElementRects: _n,
  getClientRects: In,
  getDimensions: Bn,
  getScale: he,
  isElement: $,
  isRTL: jn
};
function Hn(e, t) {
  let n = null, r;
  const o = Q(e);
  function s() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function i(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), s();
    const {
      left: l,
      top: p,
      width: m,
      height: v
    } = e.getBoundingClientRect();
    if (c || t(), !m || !v)
      return;
    const u = Ce(p), g = Ce(o.clientWidth - (l + m)), d = Ce(o.clientHeight - (p + v)), C = Ce(l), T = {
      rootMargin: -u + "px " + -g + "px " + -d + "px " + -C + "px",
      threshold: le(0, be(1, a)) || 1
    };
    let P = !0;
    function x(y) {
      const O = y[0].intersectionRatio;
      if (O !== a) {
        if (!P)
          return i();
        O ? i(!1, O) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      P = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...T,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, T);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Kn(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, l = Je(e), p = o || s ? [...l ? ne(l) : [], ...ne(t)] : [];
  p.forEach((R) => {
    o && R.addEventListener("scroll", n, {
      passive: !0
    }), s && R.addEventListener("resize", n);
  });
  const m = l && c ? Hn(l, n) : null;
  let v = -1, u = null;
  i && (u = new ResizeObserver((R) => {
    let [T] = R;
    T && T.target === l && u && (u.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      u && u.observe(t);
    })), n();
  }), l && !a && u.observe(l), u.observe(t));
  let g, d = a ? fe(e) : null;
  a && C();
  function C() {
    const R = fe(e);
    d && (R.x !== d.x || R.y !== d.y || R.width !== d.width || R.height !== d.height) && n(), d = R, g = requestAnimationFrame(C);
  }
  return n(), () => {
    p.forEach((R) => {
      o && R.removeEventListener("scroll", n), s && R.removeEventListener("resize", n);
    }), m && m(), u && u.disconnect(), u = null, a && cancelAnimationFrame(g);
  };
}
const Yn = An, Xn = Sn, it = Tn, qn = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Wt,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Cn(e, t, {
    ...o,
    platform: s
  });
}, Un = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? it({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? it({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Te = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function Le(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Le(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Le(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Bt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function st(e, t) {
  const n = Bt(e);
  return Math.round(t * n) / n;
}
function ct(e) {
  const t = f.useRef(e);
  return Te(() => {
    t.current = e;
  }), t;
}
function zn(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: a,
    open: l
  } = e, [p, m] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, u] = f.useState(r);
  Le(v, r) || u(r);
  const [g, d] = f.useState(null), [C, R] = f.useState(null), T = f.useCallback((E) => {
    E !== O.current && (O.current = E, d(E));
  }, []), P = f.useCallback((E) => {
    E !== A.current && (A.current = E, R(E));
  }, []), x = s || g, y = i || C, O = f.useRef(null), A = f.useRef(null), F = f.useRef(p), M = a != null, L = ct(a), N = ct(o), D = f.useCallback(() => {
    if (!O.current || !A.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: v
    };
    N.current && (E.platform = N.current), qn(O.current, A.current, E).then((w) => {
      const I = {
        ...w,
        isPositioned: !0
      };
      k.current && !Le(F.current, I) && (F.current = I, Et.flushSync(() => {
        m(I);
      }));
    });
  }, [v, t, n, N]);
  Te(() => {
    l === !1 && F.current.isPositioned && (F.current.isPositioned = !1, m((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [l]);
  const k = f.useRef(!1);
  Te(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Te(() => {
    if (x && (O.current = x), y && (A.current = y), x && y) {
      if (L.current)
        return L.current(x, y, D);
      D();
    }
  }, [x, y, D, L, M]);
  const h = f.useMemo(() => ({
    reference: O,
    floating: A,
    setReference: T,
    setFloating: P
  }), [T, P]), b = f.useMemo(() => ({
    reference: x,
    floating: y
  }), [x, y]), S = f.useMemo(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!b.floating)
      return E;
    const w = st(b.floating, p.x), I = st(b.floating, p.y);
    return c ? {
      ...E,
      transform: "translate(" + w + "px, " + I + "px)",
      ...Bt(b.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: w,
      top: I
    };
  }, [n, c, b.floating, p.x, p.y]);
  return f.useMemo(() => ({
    ...p,
    update: D,
    refs: h,
    elements: b,
    floatingStyles: S
  }), [p, D, h, b, S]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Gn = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], qe = /* @__PURE__ */ Gn.join(","), Vt = typeof Element > "u", ye = Vt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, De = !Vt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Ie = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = o === "" || o === "true", i = s || n && t && e(t.parentNode);
  return i;
}, Zn = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Jn = function(t, n, r) {
  if (Ie(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(qe));
  return n && ye.call(t, qe) && o.unshift(t), o = o.filter(r), o;
}, Qn = function e(t, n, r) {
  for (var o = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!Ie(i, !1))
      if (i.tagName === "SLOT") {
        var c = i.assignedElements(), a = c.length ? c : i.children, l = e(a, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var p = ye.call(i, qe);
        p && r.filter(i) && (n || !t.includes(i)) && o.push(i);
        var m = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), v = !Ie(m, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (m && v) {
          var u = e(m === !0 ? i.children : m.children, !0, r);
          r.flatten ? o.push.apply(o, u) : o.push({
            scopeParent: i,
            candidates: u
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return o;
}, _t = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, jt = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Zn(t)) && !_t(t) ? 0 : t.tabIndex;
}, er = function(t, n) {
  var r = jt(t);
  return r < 0 && n && !_t(t) ? 0 : r;
}, tr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Ht = function(t) {
  return t.tagName === "INPUT";
}, nr = function(t) {
  return Ht(t) && t.type === "hidden";
}, rr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, or = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, ir = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || De(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = or(o, t.form);
  return !s || s === t;
}, sr = function(t) {
  return Ht(t) && t.type === "radio";
}, cr = function(t) {
  return sr(t) && !ir(t);
}, lr = function(t) {
  var n, r = t && De(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var i, c, a;
    for (s = !!((i = o) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !s && o; ) {
      var l, p, m;
      r = De(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, s = !!((p = o) !== null && p !== void 0 && (m = p.ownerDocument) !== null && m !== void 0 && m.contains(o));
    }
  }
  return s;
}, lt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, ar = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = ye.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (ye.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var a = t.parentElement, l = De(t);
        if (a && !a.shadowRoot && o(a) === !0)
          return lt(t);
        t.assignedSlot ? t = t.assignedSlot : !a && l !== t.ownerDocument ? t = l.host : t = a;
      }
      t = c;
    }
    if (lr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return lt(t);
  return !1;
}, ur = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return ye.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, fr = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Ie(n) || nr(n) || ar(n, t) || // For a details element with a summary, the summary element gets the focus
  rr(n) || ur(n));
}, at = function(t, n) {
  return !(cr(n) || jt(n) < 0 || !fr(t, n));
}, dr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, mr = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, s) {
    var i = !!o.scopeParent, c = i ? o.scopeParent : o, a = er(c, i), l = i ? e(o.candidates) : c;
    a === 0 ? i ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: s,
      tabIndex: a,
      item: o,
      isScope: i,
      content: l
    });
  }), r.sort(tr).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, Kt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Qn([t], n.includeContainer, {
    filter: at.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: dr
  }) : r = Jn(t, n.includeContainer, at.bind(null, n)), mr(r);
};
const gr = xt.useInsertionEffect, pr = gr || ((e) => e());
function ge(e) {
  const t = f.useRef(() => {
  });
  return pr(() => {
    t.current = e;
  }), f.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var U = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function Me() {
  return Me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Me.apply(this, arguments);
}
let Be = !1, hr = 0;
const ut = () => "floating-ui-" + hr++;
function vr() {
  const [e, t] = f.useState(() => Be ? ut() : void 0);
  return U(() => {
    e == null && t(ut());
  }, []), f.useEffect(() => {
    Be || (Be = !0);
  }, []), e;
}
const br = xt.useId, Qe = br || vr, yr = /* @__PURE__ */ f.forwardRef(function(t, n) {
  let {
    context: {
      placement: r,
      elements: {
        floating: o
      },
      middlewareData: {
        arrow: s
      }
    },
    width: i = 14,
    height: c = 7,
    tipRadius: a = 0,
    strokeWidth: l = 0,
    staticOffset: p,
    stroke: m,
    d: v,
    style: {
      transform: u,
      ...g
    } = {},
    ...d
  } = t;
  const C = Qe();
  if (!o)
    return null;
  l *= 2;
  const R = l / 2, T = i / 2 * (a / -8 + 1), P = c / 2 * a / 4, [x, y] = r.split("-"), O = Wt.isRTL(o), A = !!v, F = x === "top" || x === "bottom", M = p && y === "end" ? "bottom" : "top";
  let L = p && y === "end" ? "right" : "left";
  p && O && (L = y === "end" ? "left" : "right");
  const N = (s == null ? void 0 : s.x) != null ? p || s.x : "", D = (s == null ? void 0 : s.y) != null ? p || s.y : "", k = v || // biome-ignore lint/style/useTemplate: readability
  "M0,0" + (" H" + i) + (" L" + (i - T) + "," + (c - P)) + (" Q" + i / 2 + "," + c + " " + T + "," + (c - P)) + " Z", h = {
    top: A ? "rotate(180deg)" : "",
    left: A ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: A ? "" : "rotate(180deg)",
    right: A ? "rotate(-90deg)" : "rotate(90deg)"
  }[x];
  return /* @__PURE__ */ f.createElement("svg", Me({}, d, {
    "aria-hidden": !0,
    ref: n,
    width: A ? i : i + l,
    height: i,
    viewBox: "0 0 " + i + " " + (c > i ? c : i),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [L]: N,
      [M]: D,
      [x]: F || A ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + h + (u ?? ""),
      ...g
    }
  }), l > 0 && /* @__PURE__ */ f.createElement("path", {
    clipPath: "url(#" + C + ")",
    fill: "none",
    stroke: m,
    strokeWidth: l + (v ? 0 : 1),
    d: k
  }), /* @__PURE__ */ f.createElement("path", {
    stroke: l && !v ? d.fill : "none",
    d: k
  }), /* @__PURE__ */ f.createElement("clipPath", {
    id: C
  }, /* @__PURE__ */ f.createElement("rect", {
    x: -R,
    y: R * (A ? -1 : 1),
    width: i + l,
    height: i
  })));
});
function wr() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const xr = /* @__PURE__ */ f.createContext(null), Er = /* @__PURE__ */ f.createContext(null), Yt = () => {
  var e;
  return ((e = f.useContext(xr)) == null ? void 0 : e.id) || null;
}, et = () => f.useContext(Er);
function Re(e) {
  return "data-floating-ui-" + e;
}
function pe(e) {
  const t = f.useRef(e);
  return U(() => {
    t.current = e;
  }), t;
}
const ft = /* @__PURE__ */ Re("safe-polygon");
function Ve(e, t, n) {
  return n && !Pe(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Rr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: s,
    elements: {
      domReference: i,
      floating: c
    },
    refs: a
  } = e, {
    enabled: l = !0,
    delay: p = 0,
    handleClose: m = null,
    mouseOnly: v = !1,
    restMs: u = 0,
    move: g = !0
  } = t, d = et(), C = Yt(), R = pe(m), T = pe(p), P = f.useRef(), x = f.useRef(), y = f.useRef(), O = f.useRef(), A = f.useRef(!0), F = f.useRef(!1), M = f.useRef(() => {
  }), L = f.useCallback(() => {
    var h;
    const b = (h = o.current.openEvent) == null ? void 0 : h.type;
    return (b == null ? void 0 : b.includes("mouse")) && b !== "mousedown";
  }, [o]);
  f.useEffect(() => {
    if (!l)
      return;
    function h(b) {
      let {
        open: S
      } = b;
      S || (clearTimeout(x.current), clearTimeout(O.current), A.current = !0);
    }
    return s.on("openchange", h), () => {
      s.off("openchange", h);
    };
  }, [l, s]), f.useEffect(() => {
    if (!l || !R.current || !n)
      return;
    function h(S) {
      L() && r(!1, S, "hover");
    }
    const b = te(c).documentElement;
    return b.addEventListener("mouseleave", h), () => {
      b.removeEventListener("mouseleave", h);
    };
  }, [c, n, r, l, R, L]);
  const N = f.useCallback(function(h, b, S) {
    b === void 0 && (b = !0), S === void 0 && (S = "hover");
    const E = Ve(T.current, "close", P.current);
    E && !y.current ? (clearTimeout(x.current), x.current = setTimeout(() => r(!1, h, S), E)) : b && (clearTimeout(x.current), r(!1, h, S));
  }, [T, r]), D = f.useCallback(() => {
    M.current(), y.current = void 0;
  }, []), k = f.useCallback(() => {
    if (F.current) {
      const h = te(a.floating.current).body;
      h.style.pointerEvents = "", h.removeAttribute(ft), F.current = !1;
    }
  }, [a]);
  return f.useEffect(() => {
    if (!l)
      return;
    function h() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function b(w) {
      if (clearTimeout(x.current), A.current = !1, v && !Pe(P.current) || u > 0 && Ve(T.current, "open") === 0)
        return;
      const I = Ve(T.current, "open", P.current);
      I ? x.current = setTimeout(() => {
        r(!0, w, "hover");
      }, I) : r(!0, w, "hover");
    }
    function S(w) {
      if (h())
        return;
      M.current();
      const I = te(c);
      if (clearTimeout(O.current), R.current) {
        n || clearTimeout(x.current), y.current = R.current({
          ...e,
          tree: d,
          x: w.clientX,
          y: w.clientY,
          onClose() {
            k(), D(), N(w, !0, "safe-polygon");
          }
        });
        const j = y.current;
        I.addEventListener("mousemove", j), M.current = () => {
          I.removeEventListener("mousemove", j);
        };
        return;
      }
      (P.current === "touch" ? !J(c, w.relatedTarget) : !0) && N(w);
    }
    function E(w) {
      h() || R.current == null || R.current({
        ...e,
        tree: d,
        x: w.clientX,
        y: w.clientY,
        onClose() {
          k(), D(), N(w);
        }
      })(w);
    }
    if ($(i)) {
      const w = i;
      return n && w.addEventListener("mouseleave", E), c == null || c.addEventListener("mouseleave", E), g && w.addEventListener("mousemove", b, {
        once: !0
      }), w.addEventListener("mouseenter", b), w.addEventListener("mouseleave", S), () => {
        n && w.removeEventListener("mouseleave", E), c == null || c.removeEventListener("mouseleave", E), g && w.removeEventListener("mousemove", b), w.removeEventListener("mouseenter", b), w.removeEventListener("mouseleave", S);
      };
    }
  }, [i, c, l, e, v, u, g, N, D, k, r, n, d, T, R, o]), U(() => {
    var h;
    if (l && n && (h = R.current) != null && h.__options.blockPointerEvents && L()) {
      const S = te(c).body;
      if (S.setAttribute(ft, ""), S.style.pointerEvents = "none", F.current = !0, $(i) && c) {
        var b;
        const E = i, w = d == null || (b = d.nodesRef.current.find((I) => I.id === C)) == null || (b = b.context) == null ? void 0 : b.elements.floating;
        return w && (w.style.pointerEvents = ""), E.style.pointerEvents = "auto", c.style.pointerEvents = "auto", () => {
          E.style.pointerEvents = "", c.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, C, c, i, d, R, L]), U(() => {
    n || (P.current = void 0, D(), k());
  }, [n, D, k]), f.useEffect(() => () => {
    D(), clearTimeout(x.current), clearTimeout(O.current), k();
  }, [l, i, D, k]), f.useMemo(() => {
    if (!l)
      return {};
    function h(b) {
      P.current = b.pointerType;
    }
    return {
      reference: {
        onPointerDown: h,
        onPointerEnter: h,
        onMouseMove(b) {
          n || u === 0 || (clearTimeout(O.current), O.current = setTimeout(() => {
            A.current || r(!0, b.nativeEvent, "hover");
          }, u));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(x.current);
        },
        onMouseLeave(b) {
          N(b.nativeEvent, !1);
        }
      }
    };
  }, [l, u, n, r, N]);
}
function Se(e, t) {
  let n = e.filter((o) => {
    var s;
    return o.parentId === t && ((s = o.context) == null ? void 0 : s.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var s;
      return (s = r) == null ? void 0 : s.some((i) => {
        var c;
        return o.parentId === i.id && ((c = o.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(r);
  return n;
}
const Xt = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function qt(e, t) {
  const n = Kt(e, Xt());
  t === "prev" && n.reverse();
  const r = n.indexOf(Ke(te(e)));
  return n.slice(r + 1)[0];
}
function Cr() {
  return qt(document.body, "next");
}
function Tr() {
  return qt(document.body, "prev");
}
function _e(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !J(n, r);
}
function Sr(e) {
  Kt(e, Xt()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Pr(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
const Ut = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
let Or;
function dt(e) {
  e.key === "Tab" && (e.target, clearTimeout(Or));
}
const mt = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const [r, o] = f.useState();
  U(() => (Ot() && o("button"), document.addEventListener("keydown", dt), () => {
    document.removeEventListener("keydown", dt);
  }), []);
  const s = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Re("focus-guard")]: "",
    style: Ut
  };
  return /* @__PURE__ */ f.createElement("span", Me({}, t, s));
}), zt = /* @__PURE__ */ f.createContext(null);
function Ar(e) {
  let {
    id: t,
    root: n
  } = e === void 0 ? {} : e;
  const [r, o] = f.useState(null), s = Qe(), i = Lr(), c = f.useMemo(() => ({
    id: t,
    root: n,
    portalContext: i,
    uniqueId: s
  }), [t, n, i, s]), a = f.useRef();
  return U(() => () => {
    r == null || r.remove();
  }, [r, c]), U(() => {
    if (a.current === c)
      return;
    a.current = c;
    const {
      id: l,
      root: p,
      portalContext: m,
      uniqueId: v
    } = c, u = l ? document.getElementById(l) : null, g = Re("portal");
    if (u) {
      const d = document.createElement("div");
      d.id = v, d.setAttribute(g, ""), u.appendChild(d), o(d);
    } else {
      let d = p || (m == null ? void 0 : m.portalNode);
      d && !$(d) && (d = d.current), d = d || document.body;
      let C = null;
      l && (C = document.createElement("div"), C.id = l, d.appendChild(C));
      const R = document.createElement("div");
      R.id = v, R.setAttribute(g, ""), d = C || d, d.appendChild(R), o(R);
    }
  }, [c]), r;
}
function kr(e) {
  let {
    children: t,
    id: n,
    root: r = null,
    preserveTabOrder: o = !0
  } = e;
  const s = Ar({
    id: n,
    root: r
  }), [i, c] = f.useState(null), a = f.useRef(null), l = f.useRef(null), p = f.useRef(null), m = f.useRef(null), v = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!i && // Guards are only for non-modal focus management.
    !i.modal && // Don't render if unmount is transitioning.
    i.open && o && !!(r || s)
  );
  return f.useEffect(() => {
    if (!s || !o || i != null && i.modal)
      return;
    function u(g) {
      s && _e(g) && (g.type === "focusin" ? Pr : Sr)(s);
    }
    return s.addEventListener("focusin", u, !0), s.addEventListener("focusout", u, !0), () => {
      s.removeEventListener("focusin", u, !0), s.removeEventListener("focusout", u, !0);
    };
  }, [s, o, i == null ? void 0 : i.modal]), /* @__PURE__ */ f.createElement(zt.Provider, {
    value: f.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: a,
      afterOutsideRef: l,
      beforeInsideRef: p,
      afterInsideRef: m,
      portalNode: s,
      setFocusManagerState: c
    }), [o, s])
  }, v && s && /* @__PURE__ */ f.createElement(mt, {
    "data-type": "outside",
    ref: a,
    onFocus: (u) => {
      if (_e(u, s)) {
        var g;
        (g = p.current) == null || g.focus();
      } else {
        const d = Tr() || (i == null ? void 0 : i.refs.domReference.current);
        d == null || d.focus();
      }
    }
  }), v && s && /* @__PURE__ */ f.createElement("span", {
    "aria-owns": s.id,
    style: Ut
  }), s && /* @__PURE__ */ Et.createPortal(t, s), v && s && /* @__PURE__ */ f.createElement(mt, {
    "data-type": "outside",
    ref: l,
    onFocus: (u) => {
      if (_e(u, s)) {
        var g;
        (g = m.current) == null || g.focus();
      } else {
        const d = Cr() || (i == null ? void 0 : i.refs.domReference.current);
        d == null || d.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, u.nativeEvent));
      }
    }
  }));
}
const Lr = () => f.useContext(zt);
function gt(e) {
  return Y(e.target) && e.target.tagName === "BUTTON";
}
function pt(e) {
  return At(e);
}
function Dr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    elements: {
      domReference: s
    }
  } = e, {
    enabled: i = !0,
    event: c = "click",
    toggle: a = !0,
    ignoreMouse: l = !1,
    keyboardHandlers: p = !0
  } = t, m = f.useRef(), v = f.useRef(!1);
  return f.useMemo(() => i ? {
    reference: {
      onPointerDown(u) {
        m.current = u.pointerType;
      },
      onMouseDown(u) {
        u.button === 0 && (Pe(m.current, !0) && l || c !== "click" && (n && a && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, u.nativeEvent, "click") : (u.preventDefault(), r(!0, u.nativeEvent, "click"))));
      },
      onClick(u) {
        if (c === "mousedown" && m.current) {
          m.current = void 0;
          return;
        }
        Pe(m.current, !0) && l || (n && a && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, u.nativeEvent, "click") : r(!0, u.nativeEvent, "click"));
      },
      onKeyDown(u) {
        m.current = void 0, !(u.defaultPrevented || !p || gt(u)) && (u.key === " " && !pt(s) && (u.preventDefault(), v.current = !0), u.key === "Enter" && r(!(n && a), u.nativeEvent, "click"));
      },
      onKeyUp(u) {
        u.defaultPrevented || !p || gt(u) || pt(s) || u.key === " " && v.current && (v.current = !1, r(!(n && a), u.nativeEvent, "click"));
      }
    }
  } : {}, [i, o, c, l, p, s, a, n, r]);
}
const Ir = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Mr = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ht = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Fr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    nodeId: o,
    elements: {
      reference: s,
      domReference: i,
      floating: c
    },
    dataRef: a
  } = e, {
    enabled: l = !0,
    escapeKey: p = !0,
    outsidePress: m = !0,
    outsidePressEvent: v = "pointerdown",
    referencePress: u = !1,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: d = !1,
    bubbles: C,
    capture: R
  } = t, T = et(), P = ge(typeof m == "function" ? m : () => !1), x = typeof m == "function" ? P : m, y = f.useRef(!1), O = f.useRef(!1), {
    escapeKey: A,
    outsidePress: F
  } = ht(C), {
    escapeKey: M,
    outsidePress: L
  } = ht(R), N = ge((b) => {
    if (!n || !l || !p || b.key !== "Escape")
      return;
    const S = T ? Se(T.nodesRef.current, o) : [];
    if (!A && (b.stopPropagation(), S.length > 0)) {
      let E = !0;
      if (S.forEach((w) => {
        var I;
        if ((I = w.context) != null && I.open && !w.context.dataRef.current.__escapeKeyBubbles) {
          E = !1;
          return;
        }
      }), !E)
        return;
    }
    r(!1, gn(b) ? b.nativeEvent : b, "escape-key");
  }), D = ge((b) => {
    var S;
    const E = () => {
      var w;
      N(b), (w = ce(b)) == null || w.removeEventListener("keydown", E);
    };
    (S = ce(b)) == null || S.addEventListener("keydown", E);
  }), k = ge((b) => {
    const S = y.current;
    y.current = !1;
    const E = O.current;
    if (O.current = !1, v === "click" && E || S || typeof x == "function" && !x(b))
      return;
    const w = ce(b), I = "[" + Re("inert") + "]", _ = te(c).querySelectorAll(I);
    let j = $(w) ? w : null;
    for (; j && !ve(j); ) {
      const W = ae(j);
      if (ve(W) || !$(W))
        break;
      j = W;
    }
    if (_.length && $(w) && !pn(w) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !J(w, c) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(_).every((W) => !J(j, W)))
      return;
    if (Y(w) && c) {
      const W = w.clientWidth > 0 && w.scrollWidth > w.clientWidth, V = w.clientHeight > 0 && w.scrollHeight > w.clientHeight;
      let G = V && b.offsetX > w.clientWidth;
      if (V && X(w).direction === "rtl" && (G = b.offsetX <= w.offsetWidth - w.clientWidth), G || W && b.offsetY > w.clientHeight)
        return;
    }
    const ee = T && Se(T.nodesRef.current, o).some((W) => {
      var V;
      return We(b, (V = W.context) == null ? void 0 : V.elements.floating);
    });
    if (We(b, c) || We(b, i) || ee)
      return;
    const z = T ? Se(T.nodesRef.current, o) : [];
    if (z.length > 0) {
      let W = !0;
      if (z.forEach((V) => {
        var G;
        if ((G = V.context) != null && G.open && !V.context.dataRef.current.__outsidePressBubbles) {
          W = !1;
          return;
        }
      }), !W)
        return;
    }
    r(!1, b, "outside-press");
  }), h = ge((b) => {
    var S;
    const E = () => {
      var w;
      k(b), (w = ce(b)) == null || w.removeEventListener(v, E);
    };
    (S = ce(b)) == null || S.addEventListener(v, E);
  });
  return f.useEffect(() => {
    if (!n || !l)
      return;
    a.current.__escapeKeyBubbles = A, a.current.__outsidePressBubbles = F;
    function b(w) {
      r(!1, w, "ancestor-scroll");
    }
    const S = te(c);
    p && S.addEventListener("keydown", M ? D : N, M), x && S.addEventListener(v, L ? h : k, L);
    let E = [];
    return d && ($(i) && (E = ne(i)), $(c) && (E = E.concat(ne(c))), !$(s) && s && s.contextElement && (E = E.concat(ne(s.contextElement)))), E = E.filter((w) => {
      var I;
      return w !== ((I = S.defaultView) == null ? void 0 : I.visualViewport);
    }), E.forEach((w) => {
      w.addEventListener("scroll", b, {
        passive: !0
      });
    }), () => {
      p && S.removeEventListener("keydown", M ? D : N, M), x && S.removeEventListener(v, L ? h : k, L), E.forEach((w) => {
        w.removeEventListener("scroll", b);
      });
    };
  }, [a, c, i, s, p, x, v, n, r, d, l, A, F, N, M, D, k, L, h]), f.useEffect(() => {
    y.current = !1;
  }, [x, v]), f.useMemo(() => l ? {
    reference: {
      onKeyDown: N,
      [Ir[g]]: (b) => {
        u && r(!1, b.nativeEvent, "reference-press");
      }
    },
    floating: {
      onKeyDown: N,
      onMouseDown() {
        O.current = !0;
      },
      onMouseUp() {
        O.current = !0;
      },
      [Mr[v]]: () => {
        y.current = !0;
      }
    }
  } : {}, [l, u, v, g, r, N]);
}
function Nr(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [s, i] = f.useState(null), c = ((t = e.elements) == null ? void 0 : t.reference) || s, a = zn(e), l = et(), p = Yt() != null, m = ge((y, O, A) => {
    y && (u.current.openEvent = O), g.emit("openchange", {
      open: y,
      event: O,
      reason: A,
      nested: p
    }), r == null || r(y, O, A);
  }), v = f.useRef(null), u = f.useRef({}), g = f.useState(() => wr())[0], d = Qe(), C = f.useCallback((y) => {
    const O = $(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    a.refs.setReference(O);
  }, [a.refs]), R = f.useCallback((y) => {
    ($(y) || y === null) && (v.current = y, i(y)), ($(a.refs.reference.current) || a.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !$(y)) && a.refs.setReference(y);
  }, [a.refs]), T = f.useMemo(() => ({
    ...a.refs,
    setReference: R,
    setPositionReference: C,
    domReference: v
  }), [a.refs, R, C]), P = f.useMemo(() => ({
    ...a.elements,
    domReference: c
  }), [a.elements, c]), x = f.useMemo(() => ({
    ...a,
    refs: T,
    elements: P,
    dataRef: u,
    nodeId: o,
    floatingId: d,
    events: g,
    open: n,
    onOpenChange: m
  }), [a, o, d, g, n, m, T, P]);
  return U(() => {
    const y = l == null ? void 0 : l.nodesRef.current.find((O) => O.id === o);
    y && (y.context = x);
  }), f.useMemo(() => ({
    ...a,
    context: x,
    refs: T,
    elements: P
  }), [a, T, P, x]);
}
function $r(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    refs: s,
    elements: {
      floating: i,
      domReference: c
    }
  } = e, {
    enabled: a = !0,
    visibleOnly: l = !0
  } = t, p = f.useRef(!1), m = f.useRef(), v = f.useRef(!0);
  return f.useEffect(() => {
    if (!a)
      return;
    const u = K(c);
    function g() {
      !n && Y(c) && c === Ke(te(c)) && (p.current = !0);
    }
    function d() {
      v.current = !0;
    }
    return u.addEventListener("blur", g), u.addEventListener("keydown", d, !0), () => {
      u.removeEventListener("blur", g), u.removeEventListener("keydown", d, !0);
    };
  }, [c, n, a]), f.useEffect(() => {
    if (!a)
      return;
    function u(g) {
      let {
        reason: d
      } = g;
      (d === "reference-press" || d === "escape-key") && (p.current = !0);
    }
    return o.on("openchange", u), () => {
      o.off("openchange", u);
    };
  }, [o, a]), f.useEffect(() => () => {
    clearTimeout(m.current);
  }, []), f.useMemo(() => a ? {
    reference: {
      onPointerDown(u) {
        fn(u.nativeEvent) || (v.current = !1);
      },
      onMouseLeave() {
        p.current = !1;
      },
      onFocus(u) {
        if (p.current)
          return;
        const g = ce(u.nativeEvent);
        if (l && $(g))
          try {
            if (Ot() && dn())
              throw Error();
            if (!g.matches(":focus-visible"))
              return;
          } catch {
            if (!v.current && !At(g))
              return;
          }
        r(!0, u.nativeEvent, "focus");
      },
      onBlur(u) {
        p.current = !1;
        const g = u.relatedTarget, d = $(g) && g.hasAttribute(Re("focus-guard")) && g.getAttribute("data-type") === "outside";
        m.current = window.setTimeout(() => {
          const C = Ke(c ? c.ownerDocument : document);
          !g && C === c || J(s.floating.current, g) || J(c, g) || d || r(!1, u.nativeEvent, "focus");
        });
      }
    }
  } : {}, [a, l, c, s, r]);
}
const vt = "active", bt = "selected";
function je(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let s = e;
  if (o && e) {
    const {
      [vt]: i,
      [bt]: c,
      ...a
    } = e;
    s = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((a) => {
      let [l, p] = a;
      if (!(o && [vt, bt].includes(l)))
        if (l.indexOf("on") === 0) {
          if (r.has(l) || r.set(l, []), typeof p == "function") {
            var m;
            (m = r.get(l)) == null || m.push(p), i[l] = function() {
              for (var v, u = arguments.length, g = new Array(u), d = 0; d < u; d++)
                g[d] = arguments[d];
              return (v = r.get(l)) == null ? void 0 : v.map((C) => C(...g)).find((C) => C !== void 0);
            };
          }
        } else
          i[l] = p;
    }), i), {})
  };
}
function Wr(e) {
  e === void 0 && (e = []);
  const t = e, n = f.useCallback((s) => je(s, e, "reference"), t), r = f.useCallback((s) => je(s, e, "floating"), t), o = f.useCallback(
    (s) => je(s, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    e.map((s) => s == null ? void 0 : s.item)
  );
  return f.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
const yt = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Br(e, t) {
  const [n, r] = f.useState(e);
  return e && !n && r(!0), f.useEffect(() => {
    if (!e) {
      const o = setTimeout(() => r(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, t]), n;
}
function Vr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, i = (typeof o == "number" ? o : o.close) || 0, [c, a] = f.useState(!1), [l, p] = f.useState("unmounted"), m = Br(n, i);
  return U(() => {
    c && !m && p("unmounted");
  }, [c, m]), U(() => {
    if (r) {
      if (n) {
        p("initial");
        const v = requestAnimationFrame(() => {
          p("open");
        });
        return () => {
          cancelAnimationFrame(v);
        };
      }
      a(!0), p("close");
    }
  }, [n, r]), {
    isMounted: m,
    status: l
  };
}
function _r(e, t) {
  t === void 0 && (t = {});
  const {
    initial: n = {
      opacity: 0
    },
    open: r,
    close: o,
    common: s,
    duration: i = 250
  } = t, c = e.placement, a = c.split("-")[0], l = f.useMemo(() => ({
    side: a,
    placement: c
  }), [a, c]), p = typeof i == "number", m = (p ? i : i.open) || 0, v = (p ? i : i.close) || 0, [u, g] = f.useState(() => ({
    ...me(s, l),
    ...me(n, l)
  })), {
    isMounted: d,
    status: C
  } = Vr(e, {
    duration: i
  }), R = pe(n), T = pe(r), P = pe(o), x = pe(s);
  return U(() => {
    const y = me(R.current, l), O = me(P.current, l), A = me(x.current, l), F = me(T.current, l) || Object.keys(y).reduce((M, L) => (M[L] = "", M), {});
    if (C === "initial" && g((M) => ({
      transitionProperty: M.transitionProperty,
      ...A,
      ...y
    })), C === "open" && g({
      transitionProperty: Object.keys(F).map(yt).join(","),
      transitionDuration: m + "ms",
      ...A,
      ...F
    }), C === "close") {
      const M = O || y;
      g({
        transitionProperty: Object.keys(M).map(yt).join(","),
        transitionDuration: v + "ms",
        ...A,
        ...M
      });
    }
  }, [v, P, R, T, x, m, C, l]), {
    isMounted: d,
    styles: u
  };
}
function wt(e, t) {
  const [n, r] = e;
  let o = !1;
  const s = t.length;
  for (let i = 0, c = s - 1; i < s; c = i++) {
    const [a, l] = t[i] || [0, 0], [p, m] = t[c] || [0, 0];
    l >= r != m >= r && n <= (p - a) * (r - l) / (m - l) + a && (o = !o);
  }
  return o;
}
function jr(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Hr(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e;
  let o, s = !1, i = null, c = null, a = performance.now();
  function l(m, v) {
    const u = performance.now(), g = u - a;
    if (i === null || c === null || g === 0)
      return i = m, c = v, a = u, null;
    const d = m - i, C = v - c, T = Math.sqrt(d * d + C * C) / g;
    return i = m, c = v, a = u, T;
  }
  const p = (m) => {
    let {
      x: v,
      y: u,
      placement: g,
      elements: d,
      onClose: C,
      nodeId: R,
      tree: T
    } = m;
    return function(x) {
      function y() {
        clearTimeout(o), C();
      }
      if (clearTimeout(o), !d.domReference || !d.floating || g == null || v == null || u == null)
        return;
      const {
        clientX: O,
        clientY: A
      } = x, F = [O, A], M = ce(x), L = x.type === "mouseleave", N = J(d.floating, M), D = J(d.domReference, M), k = d.domReference.getBoundingClientRect(), h = d.floating.getBoundingClientRect(), b = g.split("-")[0], S = v > h.right - h.width / 2, E = u > h.bottom - h.height / 2, w = jr(F, k), I = h.width > k.width, _ = h.height > k.height, j = (I ? k : h).left, ee = (I ? k : h).right, z = (_ ? k : h).top, W = (_ ? k : h).bottom;
      if (N && (s = !0, !L))
        return;
      if (D && (s = !1), D && !L) {
        s = !0;
        return;
      }
      if (L && $(x.relatedTarget) && J(d.floating, x.relatedTarget) || T && Se(T.nodesRef.current, R).some((Z) => {
        let {
          context: B
        } = Z;
        return B == null ? void 0 : B.open;
      }))
        return;
      if (b === "top" && u >= k.bottom - 1 || b === "bottom" && u <= k.top + 1 || b === "left" && v >= k.right - 1 || b === "right" && v <= k.left + 1)
        return y();
      let V = [];
      switch (b) {
        case "top":
          V = [[j, k.top + 1], [j, h.bottom - 1], [ee, h.bottom - 1], [ee, k.top + 1]];
          break;
        case "bottom":
          V = [[j, h.top + 1], [j, k.bottom - 1], [ee, k.bottom - 1], [ee, h.top + 1]];
          break;
        case "left":
          V = [[h.right - 1, W], [h.right - 1, z], [k.left + 1, z], [k.left + 1, W]];
          break;
        case "right":
          V = [[k.right - 1, W], [k.right - 1, z], [h.left + 1, z], [h.left + 1, W]];
          break;
      }
      function G(Z) {
        let [B, H] = Z;
        switch (b) {
          case "top": {
            const ie = [I ? B + t / 2 : S ? B + t * 4 : B - t * 4, H + t + 1], se = [I ? B - t / 2 : S ? B + t * 4 : B - t * 4, H + t + 1], de = [[h.left, S || I ? h.bottom - t : h.top], [h.right, S ? I ? h.bottom - t : h.top : h.bottom - t]];
            return [ie, se, ...de];
          }
          case "bottom": {
            const ie = [I ? B + t / 2 : S ? B + t * 4 : B - t * 4, H - t], se = [I ? B - t / 2 : S ? B + t * 4 : B - t * 4, H - t], de = [[h.left, S || I ? h.top + t : h.bottom], [h.right, S ? I ? h.top + t : h.bottom : h.top + t]];
            return [ie, se, ...de];
          }
          case "left": {
            const ie = [B + t + 1, _ ? H + t / 2 : E ? H + t * 4 : H - t * 4], se = [B + t + 1, _ ? H - t / 2 : E ? H + t * 4 : H - t * 4];
            return [...[[E || _ ? h.right - t : h.left, h.top], [E ? _ ? h.right - t : h.left : h.right - t, h.bottom]], ie, se];
          }
          case "right": {
            const ie = [B - t, _ ? H + t / 2 : E ? H + t * 4 : H - t * 4], se = [B - t, _ ? H - t / 2 : E ? H + t * 4 : H - t * 4], de = [[E || _ ? h.left + t : h.right, h.top], [E ? _ ? h.left + t : h.right : h.left + t, h.bottom]];
            return [ie, se, ...de];
          }
        }
      }
      if (!wt([O, A], V)) {
        if (s && !w)
          return y();
        if (!L && r) {
          const Z = l(x.clientX, x.clientY);
          if (Z !== null && Z < 0.1)
            return y();
        }
        wt([O, A], G([v, u])) ? !s && r && (o = window.setTimeout(y, 40)) : y();
      }
    };
  };
  return p.__options = {
    blockPointerEvents: n
  }, p;
}
const Kr = ({ defaultValue: e, onChange: t, value: n }) => {
  const [r, o] = f.useState(n ?? e);
  return [n ?? r, t || o];
}, Yr = ({ context: e, delay: t, hoverable: n, interactive: r }) => {
  const o = f.useMemo(() => Rt(t) ? t : Gt(t) ? {
    close: t.at(0),
    open: t.at(1)
  } : 500, [t]);
  return Rr(e, {
    enabled: n,
    delay: o,
    handleClose: r ? Hr() : void 0
  });
}, Xr = (e) => {
  const t = e.displayName || e.name, n = (r) => {
    const { children: o, disabled: s, content: i } = r;
    return !f.isValidElement(o) || f.isValidElement(o) && o.type === f.Fragment ? (console.error(`Invalid child element: ${t}`, o), q.jsx(q.Fragment, { children: o })) : s || typeof i > "u" || i === null ? q.jsx(q.Fragment, { children: o }) : q.jsx(e, { ...r });
  };
  return n.displayName = `withValidation(${t})`, n;
}, qr = 5, Ur = 10, zr = (e = "dark") => {
  const t = tn();
  return f.useMemo(() => {
    const n = {
      height: qr,
      width: Ur
    };
    return e === "dark" ? { ...n, fill: t.systemColors.grey800 } : e === "light" ? {
      ...n,
      fill: t.systemColors.white,
      stroke: t.systemColors.grey300,
      strokeWidth: 1,
      style: {
        transform: "translateY(-1px)"
      }
    } : e === "grey" ? { ...n, fill: Zt.grey100 } : n;
  }, [e, t.systemColors]);
}, Gr = (e) => _r(e, {
  duration: {
    open: 200,
    close: 200
  },
  initial: {
    opacity: 0
  }
}), Zr = {
  dark: $e`
    padding: ${(e) => e.theme.spacing.sp8};
    background-color: ${(e) => e.theme.systemColors.grey800};
    color: ${(e) => e.theme.systemColors.white};
  `,
  light: $e`
    padding: ${(e) => e.theme.spacing.sp16};
    background-color: ${(e) => e.theme.systemColors.white};
    color: ${(e) => e.theme.systemColors.grey600};

    border: solid 1px ${(e) => e.theme.systemColors.grey300};
    ${sn};
  `,
  grey: $e`
    padding: ${(e) => e.theme.spacing.sp16};
    background-color: ${(e) => e.theme.systemColors.grey100};
    color: ${(e) => e.theme.systemColors.grey600};

    ${cn};
  `
}, Jr = nn.div`
  border-radius: 6px;

  max-width: ${(e) => Rt(e.$maxWidth) && e.$maxWidth > 0 ? e.$maxWidth + "px" : "auto"};
  transition: opacity 0.2s ease;

  ${Jt};

  ${(e) => Zr[e.$colorType || "dark"]};

  ${(e) => e.$small && `padding: ${e.theme.spacing.sp8}`};
`, Qr = ({ children: e, content: t, offset: n, delay: r, placement: o = "top", strategy: s, small: i, maxWidth: c = 290, colorType: a = "dark", hideArrow: l, interactive: p, open: m, onOpenChange: v, clickable: u = !1, focusable: g = !0, hoverable: d = !0, hideOnClick: C = !1, hideOnClickOutside: R = !0, appendTo: T, zIndex: P = Qt.tooltip }) => {
  var W, V, G, Z;
  const x = f.useContext(en), [y, O] = Kr({
    defaultValue: !1,
    value: m,
    onChange: v
  }), A = f.useRef(null), { refs: F, floatingStyles: M, context: L } = Nr({
    open: y,
    onOpenChange: O,
    placement: o || ((W = x == null ? void 0 : x.tooltips) == null ? void 0 : W.placement),
    strategy: s || ((G = (V = x == null ? void 0 : x.tooltips) == null ? void 0 : V.popperOptions) == null ? void 0 : G.strategy),
    whileElementsMounted: Kn,
    middleware: [
      On(n ?? 10),
      Xn(),
      Yn(),
      !l && Un({
        element: A
      })
    ]
  }), N = zr(a), D = Yr({ context: L, hoverable: d, delay: r, interactive: p }), k = Fr(L, { enabled: R }), h = $r(L, { enabled: g }), b = Dr(L, { enabled: u }), { getReferenceProps: S, getFloatingProps: E } = Wr([D, b, k, h]), { isMounted: w, styles: I } = Gr(L), _ = f.useMemo(() => ({
    ...M,
    ...I,
    ...p ? {} : { pointerEvents: "none", userSelect: "none" },
    zIndex: P
  }), [M, p, I, P]), j = q.jsx("div", { ref: F.setFloating, ...E(), style: _, children: q.jsxs(Jr, { $small: i, $colorType: a, $maxWidth: c, onClick: C ? () => O(!1) : void 0, children: [!l && q.jsx(yr, { ref: A, context: L, ...N }), t] }) }), ee = f.useMemo(() => f.cloneElement(e, {
    ...S(),
    ref: F.setReference
  }), [e, S, F.setReference]), z = T || ((Z = x == null ? void 0 : x.tooltips) == null ? void 0 : Z.appendTo);
  return q.jsxs(q.Fragment, { children: [ee, w && (z === "parent" ? j : q.jsx(kr, { root: z, children: j }))] });
}, lo = Xr(Qr);
export {
  kr as F,
  lo as T,
  Kn as a,
  Fr as b,
  Wr as c,
  Kr as d,
  Yr as e,
  Xn as f,
  $r as g,
  Dr as h,
  Rt as i,
  On as o,
  Nr as u,
  Xr as w
};
