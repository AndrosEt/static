import { r as ae, R as pt } from "./react-D5yUVy0K.js";
import { r as dr } from "./react-dom-CwZtGxo1.js";
var U = "top", X = "bottom", K = "right", q = "left", mt = "auto", Ne = [U, X, K, q], Ae = "start", ke = "end", vr = "clippingParents", Ut = "viewport", je = "popper", mr = "reference", At = /* @__PURE__ */ Ne.reduce(function(e, t) {
  return e.concat([t + "-" + Ae, t + "-" + ke]);
}, []), qt = /* @__PURE__ */ [].concat(Ne, [mt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ae, t + "-" + ke]);
}, []), hr = "beforeRead", gr = "read", yr = "afterRead", br = "beforeMain", wr = "main", Or = "afterMain", xr = "beforeWrite", Er = "write", Ar = "afterWrite", Tr = [hr, gr, yr, br, wr, Or, xr, Er, Ar];
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function z(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ge(e) {
  var t = z(e).Element;
  return e instanceof t || e instanceof Element;
}
function _(e) {
  var t = z(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ht(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, s = t.elements[r];
    !_(s) || !te(s) || (Object.assign(s.style, n), Object.keys(o).forEach(function(f) {
      var u = o[f];
      u === !1 ? s.removeAttribute(f) : s.setAttribute(f, u === !0 ? "" : u);
    }));
  });
}
function Pr(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], s = t.attributes[n] || {}, f = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = f.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !_(o) || !te(o) || (Object.assign(o.style, u), Object.keys(s).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const zt = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Dr,
  effect: Pr,
  requires: ["computeStyles"]
};
function ee(e) {
  return e.split("-")[0];
}
var he = Math.max, tt = Math.min, Te = Math.round;
function lt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Yt() {
  return !/^((?!chrome|android).)*safari/i.test(lt());
}
function De(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, s = 1;
  t && _(e) && (o = e.offsetWidth > 0 && Te(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Te(n.height) / e.offsetHeight || 1);
  var f = ge(e) ? z(e) : window, u = f.visualViewport, c = !Yt() && r, d = (n.left + (c && u ? u.offsetLeft : 0)) / o, p = (n.top + (c && u ? u.offsetTop : 0)) / s, b = n.width / o, x = n.height / s;
  return {
    width: b,
    height: x,
    top: p,
    right: d + b,
    bottom: p + x,
    left: d,
    x: d,
    y: p
  };
}
function gt(e) {
  var t = De(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function _t(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ht(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function se(e) {
  return z(e).getComputedStyle(e);
}
function Cr(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function fe(e) {
  return ((ge(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function nt(e) {
  return te(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ht(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fe(e)
  );
}
function Tt(e) {
  return !_(e) || // https://github.com/popperjs/popper-core/issues/837
  se(e).position === "fixed" ? null : e.offsetParent;
}
function Sr(e) {
  var t = /firefox/i.test(lt()), r = /Trident/i.test(lt());
  if (r && _(e)) {
    var n = se(e);
    if (n.position === "fixed")
      return null;
  }
  var o = nt(e);
  for (ht(o) && (o = o.host); _(o) && ["html", "body"].indexOf(te(o)) < 0; ) {
    var s = se(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ve(e) {
  for (var t = z(e), r = Tt(e); r && Cr(r) && se(r).position === "static"; )
    r = Tt(r);
  return r && (te(r) === "html" || te(r) === "body" && se(r).position === "static") ? t : r || Sr(e) || t;
}
function yt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Be(e, t, r) {
  return he(e, tt(t, r));
}
function Rr(e, t, r) {
  var n = Be(e, t, r);
  return n > r ? r : n;
}
function Xt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kt(e) {
  return Object.assign({}, Xt(), e);
}
function Gt(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Lr = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Kt(typeof t != "number" ? t : Gt(t, Ne));
};
function $r(e) {
  var t, r = e.state, n = e.name, o = e.options, s = r.elements.arrow, f = r.modifiersData.popperOffsets, u = ee(r.placement), c = yt(u), d = [q, K].indexOf(u) >= 0, p = d ? "height" : "width";
  if (!(!s || !f)) {
    var b = Lr(o.padding, r), x = gt(s), m = c === "y" ? U : q, w = c === "y" ? X : K, g = r.rects.reference[p] + r.rects.reference[c] - f[c] - r.rects.popper[p], y = f[c] - r.rects.reference[c], D = Ve(s), S = D ? c === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0, L = g / 2 - y / 2, i = b[m], E = S - x[p] - b[w], l = S / 2 - x[p] / 2 + L, R = Be(i, l, E), k = c;
    r.modifiersData[n] = (t = {}, t[k] = R, t.centerOffset = R - l, t);
  }
}
function jr(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || _t(t.elements.popper, o) && (t.elements.arrow = o));
}
const Br = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $r,
  effect: jr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pe(e) {
  return e.split("-")[1];
}
var Mr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kr(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Te(r * o) / o || 0,
    y: Te(n * o) / o || 0
  };
}
function Dt(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, s = e.variation, f = e.offsets, u = e.position, c = e.gpuAcceleration, d = e.adaptive, p = e.roundOffsets, b = e.isFixed, x = f.x, m = x === void 0 ? 0 : x, w = f.y, g = w === void 0 ? 0 : w, y = typeof p == "function" ? p({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = y.x, g = y.y;
  var D = f.hasOwnProperty("x"), S = f.hasOwnProperty("y"), L = q, i = U, E = window;
  if (d) {
    var l = Ve(r), R = "clientHeight", k = "clientWidth";
    if (l === z(r) && (l = fe(r), se(l).position !== "static" && u === "absolute" && (R = "scrollHeight", k = "scrollWidth")), l = l, o === U || (o === q || o === K) && s === ke) {
      i = X;
      var T = b && l === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        l[R]
      );
      g -= T - n.height, g *= c ? 1 : -1;
    }
    if (o === q || (o === U || o === X) && s === ke) {
      L = K;
      var P = b && l === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        l[k]
      );
      m -= P - n.width, m *= c ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: u
  }, d && Mr), B = p === !0 ? kr({
    x: m,
    y: g
  }, z(r)) : {
    x: m,
    y: g
  };
  if (m = B.x, g = B.y, c) {
    var $;
    return Object.assign({}, j, ($ = {}, $[i] = S ? "0" : "", $[L] = D ? "0" : "", $.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", $));
  }
  return Object.assign({}, j, (t = {}, t[i] = S ? g + "px" : "", t[L] = D ? m + "px" : "", t.transform = "", t));
}
function Ir(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, s = r.adaptive, f = s === void 0 ? !0 : s, u = r.roundOffsets, c = u === void 0 ? !0 : u, d = {
    placement: ee(t.placement),
    variation: Pe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dt(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: f,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dt(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Nr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ir,
  data: {}
};
var Qe = {
  passive: !0
};
function Vr(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, s = o === void 0 ? !0 : o, f = n.resize, u = f === void 0 ? !0 : f, c = z(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && d.forEach(function(p) {
    p.addEventListener("scroll", r.update, Qe);
  }), u && c.addEventListener("resize", r.update, Qe), function() {
    s && d.forEach(function(p) {
      p.removeEventListener("scroll", r.update, Qe);
    }), u && c.removeEventListener("resize", r.update, Qe);
  };
}
const Hr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Vr,
  data: {}
};
var Wr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function et(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Wr[t];
  });
}
var Fr = {
  start: "end",
  end: "start"
};
function Pt(e) {
  return e.replace(/start|end/g, function(t) {
    return Fr[t];
  });
}
function bt(e) {
  var t = z(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function wt(e) {
  return De(fe(e)).left + bt(e).scrollLeft;
}
function Ur(e, t) {
  var r = z(e), n = fe(e), o = r.visualViewport, s = n.clientWidth, f = n.clientHeight, u = 0, c = 0;
  if (o) {
    s = o.width, f = o.height;
    var d = Yt();
    (d || !d && t === "fixed") && (u = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: f,
    x: u + wt(e),
    y: c
  };
}
function qr(e) {
  var t, r = fe(e), n = bt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = he(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), f = he(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + wt(e), c = -n.scrollTop;
  return se(o || r).direction === "rtl" && (u += he(r.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: f,
    x: u,
    y: c
  };
}
function Ot(e) {
  var t = se(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Jt(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : _(e) && Ot(e) ? e : Jt(nt(e));
}
function Me(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Jt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = z(n), f = o ? [s].concat(s.visualViewport || [], Ot(n) ? n : []) : n, u = t.concat(f);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(Me(nt(f)))
  );
}
function dt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zr(e, t) {
  var r = De(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ct(e, t, r) {
  return t === Ut ? dt(Ur(e, r)) : ge(t) ? zr(t, r) : dt(qr(fe(e)));
}
function Yr(e) {
  var t = Me(nt(e)), r = ["absolute", "fixed"].indexOf(se(e).position) >= 0, n = r && _(e) ? Ve(e) : e;
  return ge(n) ? t.filter(function(o) {
    return ge(o) && _t(o, n) && te(o) !== "body";
  }) : [];
}
function _r(e, t, r, n) {
  var o = t === "clippingParents" ? Yr(e) : [].concat(t), s = [].concat(o, [r]), f = s[0], u = s.reduce(function(c, d) {
    var p = Ct(e, d, n);
    return c.top = he(p.top, c.top), c.right = tt(p.right, c.right), c.bottom = tt(p.bottom, c.bottom), c.left = he(p.left, c.left), c;
  }, Ct(e, f, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function Qt(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ee(n) : null, s = n ? Pe(n) : null, f = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case U:
      c = {
        x: f,
        y: t.y - r.height
      };
      break;
    case X:
      c = {
        x: f,
        y: t.y + t.height
      };
      break;
    case K:
      c = {
        x: t.x + t.width,
        y: u
      };
      break;
    case q:
      c = {
        x: t.x - r.width,
        y: u
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? yt(o) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (s) {
      case Ae:
        c[d] = c[d] - (t[p] / 2 - r[p] / 2);
        break;
      case ke:
        c[d] = c[d] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return c;
}
function Ie(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, s = r.strategy, f = s === void 0 ? e.strategy : s, u = r.boundary, c = u === void 0 ? vr : u, d = r.rootBoundary, p = d === void 0 ? Ut : d, b = r.elementContext, x = b === void 0 ? je : b, m = r.altBoundary, w = m === void 0 ? !1 : m, g = r.padding, y = g === void 0 ? 0 : g, D = Kt(typeof y != "number" ? y : Gt(y, Ne)), S = x === je ? mr : je, L = e.rects.popper, i = e.elements[w ? S : x], E = _r(ge(i) ? i : i.contextElement || fe(e.elements.popper), c, p, f), l = De(e.elements.reference), R = Qt({
    reference: l,
    element: L,
    strategy: "absolute",
    placement: o
  }), k = dt(Object.assign({}, L, R)), T = x === je ? k : l, P = {
    top: E.top - T.top + D.top,
    bottom: T.bottom - E.bottom + D.bottom,
    left: E.left - T.left + D.left,
    right: T.right - E.right + D.right
  }, j = e.modifiersData.offset;
  if (x === je && j) {
    var B = j[o];
    Object.keys(P).forEach(function($) {
      var M = [K, X].indexOf($) >= 0 ? 1 : -1, O = [U, X].indexOf($) >= 0 ? "y" : "x";
      P[$] += B[O] * M;
    });
  }
  return P;
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, s = r.rootBoundary, f = r.padding, u = r.flipVariations, c = r.allowedAutoPlacements, d = c === void 0 ? qt : c, p = Pe(n), b = p ? u ? At : At.filter(function(w) {
    return Pe(w) === p;
  }) : Ne, x = b.filter(function(w) {
    return d.indexOf(w) >= 0;
  });
  x.length === 0 && (x = b);
  var m = x.reduce(function(w, g) {
    return w[g] = Ie(e, {
      placement: g,
      boundary: o,
      rootBoundary: s,
      padding: f
    })[ee(g)], w;
  }, {});
  return Object.keys(m).sort(function(w, g) {
    return m[w] - m[g];
  });
}
function Kr(e) {
  if (ee(e) === mt)
    return [];
  var t = et(e);
  return [Pt(e), t, Pt(t)];
}
function Gr(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, s = o === void 0 ? !0 : o, f = r.altAxis, u = f === void 0 ? !0 : f, c = r.fallbackPlacements, d = r.padding, p = r.boundary, b = r.rootBoundary, x = r.altBoundary, m = r.flipVariations, w = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, y = t.options.placement, D = ee(y), S = D === y, L = c || (S || !w ? [et(y)] : Kr(y)), i = [y].concat(L).reduce(function(re, G) {
      return re.concat(ee(G) === mt ? Xr(t, {
        placement: G,
        boundary: p,
        rootBoundary: b,
        padding: d,
        flipVariations: w,
        allowedAutoPlacements: g
      }) : G);
    }, []), E = t.rects.reference, l = t.rects.popper, R = /* @__PURE__ */ new Map(), k = !0, T = i[0], P = 0; P < i.length; P++) {
      var j = i[P], B = ee(j), $ = Pe(j) === Ae, M = [U, X].indexOf(B) >= 0, O = M ? "width" : "height", V = Ie(t, {
        placement: j,
        boundary: p,
        rootBoundary: b,
        altBoundary: x,
        padding: d
      }), N = M ? $ ? K : q : $ ? X : U;
      E[O] > l[O] && (N = et(N));
      var I = et(N), W = [];
      if (s && W.push(V[B] <= 0), u && W.push(V[N] <= 0, V[I] <= 0), W.every(function(re) {
        return re;
      })) {
        T = j, k = !1;
        break;
      }
      R.set(j, W);
    }
    if (k)
      for (var H = w ? 3 : 1, pe = function(G) {
        var ne = i.find(function(ye) {
          var ie = R.get(ye);
          if (ie)
            return ie.slice(0, G).every(function(be) {
              return be;
            });
        });
        if (ne)
          return T = ne, "break";
      }, Q = H; Q > 0; Q--) {
        var le = pe(Q);
        if (le === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0);
  }
}
const Jr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Gr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function St(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Rt(e) {
  return [U, K, X, q].some(function(t) {
    return e[t] >= 0;
  });
}
function Qr(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, f = Ie(t, {
    elementContext: "reference"
  }), u = Ie(t, {
    altBoundary: !0
  }), c = St(f, n), d = St(u, o, s), p = Rt(c), b = Rt(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: b
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": b
  });
}
const Zr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Qr
};
function en(e, t, r) {
  var n = ee(e), o = [q, U].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, f = s[0], u = s[1];
  return f = f || 0, u = (u || 0) * o, [q, K].indexOf(n) >= 0 ? {
    x: u,
    y: f
  } : {
    x: f,
    y: u
  };
}
function tn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, s = o === void 0 ? [0, 0] : o, f = qt.reduce(function(p, b) {
    return p[b] = en(b, t.rects, s), p;
  }, {}), u = f[t.placement], c = u.x, d = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = f;
}
const rn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tn
};
function nn(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Qt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const on = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nn,
  data: {}
};
function an(e) {
  return e === "x" ? "y" : "x";
}
function sn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, s = o === void 0 ? !0 : o, f = r.altAxis, u = f === void 0 ? !1 : f, c = r.boundary, d = r.rootBoundary, p = r.altBoundary, b = r.padding, x = r.tether, m = x === void 0 ? !0 : x, w = r.tetherOffset, g = w === void 0 ? 0 : w, y = Ie(t, {
    boundary: c,
    rootBoundary: d,
    padding: b,
    altBoundary: p
  }), D = ee(t.placement), S = Pe(t.placement), L = !S, i = yt(D), E = an(i), l = t.modifiersData.popperOffsets, R = t.rects.reference, k = t.rects.popper, T = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, P = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (l) {
    if (s) {
      var $, M = i === "y" ? U : q, O = i === "y" ? X : K, V = i === "y" ? "height" : "width", N = l[i], I = N + y[M], W = N - y[O], H = m ? -k[V] / 2 : 0, pe = S === Ae ? R[V] : k[V], Q = S === Ae ? -k[V] : -R[V], le = t.elements.arrow, re = m && le ? gt(le) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xt(), ne = G[M], ye = G[O], ie = Be(0, R[V], re[V]), be = L ? R[V] / 2 - H - ie - ne - P.mainAxis : pe - ie - ne - P.mainAxis, ue = L ? -R[V] / 2 + H + ie + ye + P.mainAxis : Q + ie + ye + P.mainAxis, we = t.elements.arrow && Ve(t.elements.arrow), We = we ? i === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, Ce = ($ = j == null ? void 0 : j[i]) != null ? $ : 0, Fe = N + be - Ce - We, Ue = N + ue - Ce, Se = Be(m ? tt(I, Fe) : I, N, m ? he(W, Ue) : W);
      l[i] = Se, B[i] = Se - N;
    }
    if (u) {
      var Re, qe = i === "x" ? U : q, ze = i === "x" ? X : K, oe = l[E], ce = E === "y" ? "height" : "width", Le = oe + y[qe], de = oe - y[ze], $e = [U, q].indexOf(D) !== -1, Ye = (Re = j == null ? void 0 : j[E]) != null ? Re : 0, _e = $e ? Le : oe - R[ce] - k[ce] - Ye + P.altAxis, Xe = $e ? oe + R[ce] + k[ce] - Ye - P.altAxis : de, Ke = m && $e ? Rr(_e, oe, Xe) : Be(m ? _e : Le, oe, m ? Xe : de);
      l[E] = Ke, B[E] = Ke - oe;
    }
    t.modifiersData[n] = B;
  }
}
const un = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sn,
  requiresIfExists: ["offset"]
};
function cn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function fn(e) {
  return e === z(e) || !_(e) ? bt(e) : cn(e);
}
function pn(e) {
  var t = e.getBoundingClientRect(), r = Te(t.width) / e.offsetWidth || 1, n = Te(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ln(e, t, r) {
  r === void 0 && (r = !1);
  var n = _(t), o = _(t) && pn(t), s = fe(t), f = De(e, o, r), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ot(s)) && (u = fn(t)), _(t) ? (c = De(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = wt(s))), {
    x: f.left + u.scrollLeft - c.x,
    y: f.top + u.scrollTop - c.y,
    width: f.width,
    height: f.height
  };
}
function dn(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var f = [].concat(s.requires || [], s.requiresIfExists || []);
    f.forEach(function(u) {
      if (!r.has(u)) {
        var c = t.get(u);
        c && o(c);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || o(s);
  }), n;
}
function vn(e) {
  var t = dn(e);
  return Tr.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function mn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function hn(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Lt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $t() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function gn(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, s = o === void 0 ? Lt : o;
  return function(u, c, d) {
    d === void 0 && (d = s);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Lt, s),
      modifiersData: {},
      elements: {
        reference: u,
        popper: c
      },
      attributes: {},
      styles: {}
    }, b = [], x = !1, m = {
      state: p,
      setOptions: function(D) {
        var S = typeof D == "function" ? D(p.options) : D;
        g(), p.options = Object.assign({}, s, p.options, S), p.scrollParents = {
          reference: ge(u) ? Me(u) : u.contextElement ? Me(u.contextElement) : [],
          popper: Me(c)
        };
        var L = vn(hn([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = L.filter(function(i) {
          return i.enabled;
        }), w(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var D = p.elements, S = D.reference, L = D.popper;
          if ($t(S, L)) {
            p.rects = {
              reference: ln(S, Ve(L), p.options.strategy === "fixed"),
              popper: gt(L)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(P) {
              return p.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var i = 0; i < p.orderedModifiers.length; i++) {
              if (p.reset === !0) {
                p.reset = !1, i = -1;
                continue;
              }
              var E = p.orderedModifiers[i], l = E.fn, R = E.options, k = R === void 0 ? {} : R, T = E.name;
              typeof l == "function" && (p = l({
                state: p,
                options: k,
                name: T,
                instance: m
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: mn(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(p);
        });
      }),
      destroy: function() {
        g(), x = !0;
      }
    };
    if (!$t(u, c))
      return m;
    m.setOptions(d).then(function(y) {
      !x && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function w() {
      p.orderedModifiers.forEach(function(y) {
        var D = y.name, S = y.options, L = S === void 0 ? {} : S, i = y.effect;
        if (typeof i == "function") {
          var E = i({
            state: p,
            name: D,
            instance: m,
            options: L
          }), l = function() {
          };
          b.push(E || l);
        }
      });
    }
    function g() {
      b.forEach(function(y) {
        return y();
      }), b = [];
    }
    return m;
  };
}
var yn = [Hr, on, Nr, zt, rn, Jr, un, Br, Zr], bn = /* @__PURE__ */ gn({
  defaultModifiers: yn
}), wn = "tippy-content", On = "tippy-backdrop", xn = "tippy-arrow", En = "tippy-svg-arrow", me = {
  passive: !0,
  capture: !0
}, Zt = function() {
  return document.body;
};
function at(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function xt(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1;
}
function er(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function jt(e, t) {
  if (t === 0)
    return e;
  var r;
  return function(n) {
    clearTimeout(r), r = setTimeout(function() {
      e(n);
    }, t);
  };
}
function An(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Ee(e) {
  return [].concat(e);
}
function Bt(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Tn(e) {
  return e.filter(function(t, r) {
    return e.indexOf(t) === r;
  });
}
function Dn(e) {
  return e.split("-")[0];
}
function rt(e) {
  return [].slice.call(e);
}
function Mt(e) {
  return Object.keys(e).reduce(function(t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function Pn() {
  return document.createElement("div");
}
function tr(e) {
  return ["Element", "Fragment"].some(function(t) {
    return xt(e, t);
  });
}
function Cn(e) {
  return xt(e, "NodeList");
}
function Sn(e) {
  return xt(e, "MouseEvent");
}
function Rn(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Ln(e) {
  return tr(e) ? [e] : Cn(e) ? rt(e) : Array.isArray(e) ? e : rt(document.querySelectorAll(e));
}
function st(e, t) {
  e.forEach(function(r) {
    r && (r.style.transitionDuration = t + "ms");
  });
}
function kt(e, t) {
  e.forEach(function(r) {
    r && r.setAttribute("data-state", t);
  });
}
function $n(e) {
  var t, r = Ee(e), n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function jn(e, t) {
  var r = t.clientX, n = t.clientY;
  return e.every(function(o) {
    var s = o.popperRect, f = o.popperState, u = o.props, c = u.interactiveBorder, d = Dn(f.placement), p = f.modifiersData.offset;
    if (!p)
      return !0;
    var b = d === "bottom" ? p.top.y : 0, x = d === "top" ? p.bottom.y : 0, m = d === "right" ? p.left.x : 0, w = d === "left" ? p.right.x : 0, g = s.top - n + b > c, y = n - s.bottom - x > c, D = s.left - r + m > c, S = r - s.right - w > c;
    return g || y || D || S;
  });
}
function ut(e, t, r) {
  var n = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[n](o, r);
  });
}
function It(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r))
      return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var Z = {
  isTouch: !1
}, Nt = 0;
function Bn() {
  Z.isTouch || (Z.isTouch = !0, window.performance && document.addEventListener("mousemove", rr));
}
function rr() {
  var e = performance.now();
  e - Nt < 20 && (Z.isTouch = !1, document.removeEventListener("mousemove", rr)), Nt = e;
}
function Mn() {
  var e = document.activeElement;
  if (Rn(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function kn() {
  document.addEventListener("touchstart", Bn, me), window.addEventListener("blur", Mn);
}
var In = typeof window < "u" && typeof document < "u", Nn = In ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, Vn = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Hn = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, J = Object.assign({
  appendTo: Zt,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Vn, Hn), Wn = Object.keys(J), Fn = function(t) {
  var r = Object.keys(t);
  r.forEach(function(n) {
    J[n] = t[n];
  });
};
function nr(e) {
  var t = e.plugins || [], r = t.reduce(function(n, o) {
    var s = o.name, f = o.defaultValue;
    if (s) {
      var u;
      n[s] = e[s] !== void 0 ? e[s] : (u = J[s]) != null ? u : f;
    }
    return n;
  }, {});
  return Object.assign({}, e, r);
}
function Un(e, t) {
  var r = t ? Object.keys(nr(Object.assign({}, J, {
    plugins: t
  }))) : Wn, n = r.reduce(function(o, s) {
    var f = (e.getAttribute("data-tippy-" + s) || "").trim();
    if (!f)
      return o;
    if (s === "content")
      o[s] = f;
    else
      try {
        o[s] = JSON.parse(f);
      } catch {
        o[s] = f;
      }
    return o;
  }, {});
  return n;
}
function Vt(e, t) {
  var r = Object.assign({}, t, {
    content: er(t.content, [e])
  }, t.ignoreAttributes ? {} : Un(e, t.plugins));
  return r.aria = Object.assign({}, J.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? t.interactive ? null : "describedby" : r.aria.content
  }, r;
}
function Ht(e) {
  var t = e.firstElementChild, r = rt(t.children);
  return {
    box: t,
    content: r.find(function(n) {
      return n.classList.contains(wn);
    }),
    arrow: r.find(function(n) {
      return n.classList.contains(xn) || n.classList.contains(En);
    }),
    backdrop: r.find(function(n) {
      return n.classList.contains(On);
    })
  };
}
var qn = 1, Ze = [], ct = [];
function zn(e, t) {
  var r = Vt(e, Object.assign({}, J, nr(Mt(t)))), n, o, s, f = !1, u = !1, c = !1, d = !1, p, b, x, m = [], w = jt(Fe, r.interactiveDebounce), g, y = qn++, D = null, S = Tn(r.plugins), L = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, i = {
    // properties
    id: y,
    reference: e,
    popper: Pn(),
    popperInstance: D,
    props: r,
    state: L,
    plugins: S,
    // methods
    clearDelayTimeouts: _e,
    setProps: Xe,
    setContent: Ke,
    show: sr,
    hide: ur,
    hideWithInteractivity: cr,
    enable: $e,
    disable: Ye,
    unmount: fr,
    destroy: pr
  };
  if (!r.render)
    return i;
  var E = r.render(i), l = E.popper, R = E.onUpdate;
  l.setAttribute("data-tippy-root", ""), l.id = "tippy-" + i.id, i.popper = l, e._tippy = i, l._tippy = i;
  var k = S.map(function(a) {
    return a.fn(i);
  }), T = e.hasAttribute("aria-expanded");
  return we(), H(), N(), I("onCreate", [i]), r.showOnCreate && Le(), l.addEventListener("mouseenter", function() {
    i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
  }), l.addEventListener("mouseleave", function() {
    i.props.interactive && i.props.trigger.indexOf("mouseenter") >= 0 && M().addEventListener("mousemove", w);
  }), i;
  function P() {
    var a = i.props.touch;
    return Array.isArray(a) ? a : [a, 0];
  }
  function j() {
    return P()[0] === "hold";
  }
  function B() {
    var a;
    return !!((a = i.props.render) != null && a.$$tippy);
  }
  function $() {
    return g || e;
  }
  function M() {
    var a = $().parentNode;
    return a ? $n(a) : document;
  }
  function O() {
    return Ht(l);
  }
  function V(a) {
    return i.state.isMounted && !i.state.isVisible || Z.isTouch || p && p.type === "focus" ? 0 : at(i.props.delay, a ? 0 : 1, J.delay);
  }
  function N(a) {
    a === void 0 && (a = !1), l.style.pointerEvents = i.props.interactive && !a ? "" : "none", l.style.zIndex = "" + i.props.zIndex;
  }
  function I(a, v, h) {
    if (h === void 0 && (h = !0), k.forEach(function(A) {
      A[a] && A[a].apply(A, v);
    }), h) {
      var C;
      (C = i.props)[a].apply(C, v);
    }
  }
  function W() {
    var a = i.props.aria;
    if (a.content) {
      var v = "aria-" + a.content, h = l.id, C = Ee(i.props.triggerTarget || e);
      C.forEach(function(A) {
        var F = A.getAttribute(v);
        if (i.state.isVisible)
          A.setAttribute(v, F ? F + " " + h : h);
        else {
          var Y = F && F.replace(h, "").trim();
          Y ? A.setAttribute(v, Y) : A.removeAttribute(v);
        }
      });
    }
  }
  function H() {
    if (!(T || !i.props.aria.expanded)) {
      var a = Ee(i.props.triggerTarget || e);
      a.forEach(function(v) {
        i.props.interactive ? v.setAttribute("aria-expanded", i.state.isVisible && v === $() ? "true" : "false") : v.removeAttribute("aria-expanded");
      });
    }
  }
  function pe() {
    M().removeEventListener("mousemove", w), Ze = Ze.filter(function(a) {
      return a !== w;
    });
  }
  function Q(a) {
    if (!(Z.isTouch && (c || a.type === "mousedown"))) {
      var v = a.composedPath && a.composedPath()[0] || a.target;
      if (!(i.props.interactive && It(l, v))) {
        if (Ee(i.props.triggerTarget || e).some(function(h) {
          return It(h, v);
        })) {
          if (Z.isTouch || i.state.isVisible && i.props.trigger.indexOf("click") >= 0)
            return;
        } else
          I("onClickOutside", [i, a]);
        i.props.hideOnClick === !0 && (i.clearDelayTimeouts(), i.hide(), u = !0, setTimeout(function() {
          u = !1;
        }), i.state.isMounted || ne());
      }
    }
  }
  function le() {
    c = !0;
  }
  function re() {
    c = !1;
  }
  function G() {
    var a = M();
    a.addEventListener("mousedown", Q, !0), a.addEventListener("touchend", Q, me), a.addEventListener("touchstart", re, me), a.addEventListener("touchmove", le, me);
  }
  function ne() {
    var a = M();
    a.removeEventListener("mousedown", Q, !0), a.removeEventListener("touchend", Q, me), a.removeEventListener("touchstart", re, me), a.removeEventListener("touchmove", le, me);
  }
  function ye(a, v) {
    be(a, function() {
      !i.state.isVisible && l.parentNode && l.parentNode.contains(l) && v();
    });
  }
  function ie(a, v) {
    be(a, v);
  }
  function be(a, v) {
    var h = O().box;
    function C(A) {
      A.target === h && (ut(h, "remove", C), v());
    }
    if (a === 0)
      return v();
    ut(h, "remove", b), ut(h, "add", C), b = C;
  }
  function ue(a, v, h) {
    h === void 0 && (h = !1);
    var C = Ee(i.props.triggerTarget || e);
    C.forEach(function(A) {
      A.addEventListener(a, v, h), m.push({
        node: A,
        eventType: a,
        handler: v,
        options: h
      });
    });
  }
  function we() {
    j() && (ue("touchstart", Ce, {
      passive: !0
    }), ue("touchend", Ue, {
      passive: !0
    })), An(i.props.trigger).forEach(function(a) {
      if (a !== "manual")
        switch (ue(a, Ce), a) {
          case "mouseenter":
            ue("mouseleave", Ue);
            break;
          case "focus":
            ue(Nn ? "focusout" : "blur", Se);
            break;
          case "focusin":
            ue("focusout", Se);
            break;
        }
    });
  }
  function We() {
    m.forEach(function(a) {
      var v = a.node, h = a.eventType, C = a.handler, A = a.options;
      v.removeEventListener(h, C, A);
    }), m = [];
  }
  function Ce(a) {
    var v, h = !1;
    if (!(!i.state.isEnabled || Re(a) || u)) {
      var C = ((v = p) == null ? void 0 : v.type) === "focus";
      p = a, g = a.currentTarget, H(), !i.state.isVisible && Sn(a) && Ze.forEach(function(A) {
        return A(a);
      }), a.type === "click" && (i.props.trigger.indexOf("mouseenter") < 0 || f) && i.props.hideOnClick !== !1 && i.state.isVisible ? h = !0 : Le(a), a.type === "click" && (f = !h), h && !C && de(a);
    }
  }
  function Fe(a) {
    var v = a.target, h = $().contains(v) || l.contains(v);
    if (!(a.type === "mousemove" && h)) {
      var C = ce().concat(l).map(function(A) {
        var F, Y = A._tippy, Oe = (F = Y.popperInstance) == null ? void 0 : F.state;
        return Oe ? {
          popperRect: A.getBoundingClientRect(),
          popperState: Oe,
          props: r
        } : null;
      }).filter(Boolean);
      jn(C, a) && (pe(), de(a));
    }
  }
  function Ue(a) {
    var v = Re(a) || i.props.trigger.indexOf("click") >= 0 && f;
    if (!v) {
      if (i.props.interactive) {
        i.hideWithInteractivity(a);
        return;
      }
      de(a);
    }
  }
  function Se(a) {
    i.props.trigger.indexOf("focusin") < 0 && a.target !== $() || i.props.interactive && a.relatedTarget && l.contains(a.relatedTarget) || de(a);
  }
  function Re(a) {
    return Z.isTouch ? j() !== a.type.indexOf("touch") >= 0 : !1;
  }
  function qe() {
    ze();
    var a = i.props, v = a.popperOptions, h = a.placement, C = a.offset, A = a.getReferenceClientRect, F = a.moveTransition, Y = B() ? Ht(l).arrow : null, Oe = A ? {
      getBoundingClientRect: A,
      contextElement: A.contextElement || $()
    } : e, Et = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ge) {
        var xe = Ge.state;
        if (B()) {
          var lr = O(), ot = lr.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Je) {
            Je === "placement" ? ot.setAttribute("data-placement", xe.placement) : xe.attributes.popper["data-popper-" + Je] ? ot.setAttribute("data-" + Je, "") : ot.removeAttribute("data-" + Je);
          }), xe.attributes.popper = {};
        }
      }
    }, ve = [{
      name: "offset",
      options: {
        offset: C
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !F
      }
    }, Et];
    B() && Y && ve.push({
      name: "arrow",
      options: {
        element: Y,
        padding: 3
      }
    }), ve.push.apply(ve, (v == null ? void 0 : v.modifiers) || []), i.popperInstance = bn(Oe, l, Object.assign({}, v, {
      placement: h,
      onFirstUpdate: x,
      modifiers: ve
    }));
  }
  function ze() {
    i.popperInstance && (i.popperInstance.destroy(), i.popperInstance = null);
  }
  function oe() {
    var a = i.props.appendTo, v, h = $();
    i.props.interactive && a === Zt || a === "parent" ? v = h.parentNode : v = er(a, [h]), v.contains(l) || v.appendChild(l), i.state.isMounted = !0, qe();
  }
  function ce() {
    return rt(l.querySelectorAll("[data-tippy-root]"));
  }
  function Le(a) {
    i.clearDelayTimeouts(), a && I("onTrigger", [i, a]), G();
    var v = V(!0), h = P(), C = h[0], A = h[1];
    Z.isTouch && C === "hold" && A && (v = A), v ? n = setTimeout(function() {
      i.show();
    }, v) : i.show();
  }
  function de(a) {
    if (i.clearDelayTimeouts(), I("onUntrigger", [i, a]), !i.state.isVisible) {
      ne();
      return;
    }
    if (!(i.props.trigger.indexOf("mouseenter") >= 0 && i.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(a.type) >= 0 && f)) {
      var v = V(!1);
      v ? o = setTimeout(function() {
        i.state.isVisible && i.hide();
      }, v) : s = requestAnimationFrame(function() {
        i.hide();
      });
    }
  }
  function $e() {
    i.state.isEnabled = !0;
  }
  function Ye() {
    i.hide(), i.state.isEnabled = !1;
  }
  function _e() {
    clearTimeout(n), clearTimeout(o), cancelAnimationFrame(s);
  }
  function Xe(a) {
    if (!i.state.isDestroyed) {
      I("onBeforeUpdate", [i, a]), We();
      var v = i.props, h = Vt(e, Object.assign({}, v, Mt(a), {
        ignoreAttributes: !0
      }));
      i.props = h, we(), v.interactiveDebounce !== h.interactiveDebounce && (pe(), w = jt(Fe, h.interactiveDebounce)), v.triggerTarget && !h.triggerTarget ? Ee(v.triggerTarget).forEach(function(C) {
        C.removeAttribute("aria-expanded");
      }) : h.triggerTarget && e.removeAttribute("aria-expanded"), H(), N(), R && R(v, h), i.popperInstance && (qe(), ce().forEach(function(C) {
        requestAnimationFrame(C._tippy.popperInstance.forceUpdate);
      })), I("onAfterUpdate", [i, a]);
    }
  }
  function Ke(a) {
    i.setProps({
      content: a
    });
  }
  function sr() {
    var a = i.state.isVisible, v = i.state.isDestroyed, h = !i.state.isEnabled, C = Z.isTouch && !i.props.touch, A = at(i.props.duration, 0, J.duration);
    if (!(a || v || h || C) && !$().hasAttribute("disabled") && (I("onShow", [i], !1), i.props.onShow(i) !== !1)) {
      if (i.state.isVisible = !0, B() && (l.style.visibility = "visible"), N(), G(), i.state.isMounted || (l.style.transition = "none"), B()) {
        var F = O(), Y = F.box, Oe = F.content;
        st([Y, Oe], 0);
      }
      x = function() {
        var ve;
        if (!(!i.state.isVisible || d)) {
          if (d = !0, l.offsetHeight, l.style.transition = i.props.moveTransition, B() && i.props.animation) {
            var it = O(), Ge = it.box, xe = it.content;
            st([Ge, xe], A), kt([Ge, xe], "visible");
          }
          W(), H(), Bt(ct, i), (ve = i.popperInstance) == null || ve.forceUpdate(), I("onMount", [i]), i.props.animation && B() && ie(A, function() {
            i.state.isShown = !0, I("onShown", [i]);
          });
        }
      }, oe();
    }
  }
  function ur() {
    var a = !i.state.isVisible, v = i.state.isDestroyed, h = !i.state.isEnabled, C = at(i.props.duration, 1, J.duration);
    if (!(a || v || h) && (I("onHide", [i], !1), i.props.onHide(i) !== !1)) {
      if (i.state.isVisible = !1, i.state.isShown = !1, d = !1, f = !1, B() && (l.style.visibility = "hidden"), pe(), ne(), N(!0), B()) {
        var A = O(), F = A.box, Y = A.content;
        i.props.animation && (st([F, Y], C), kt([F, Y], "hidden"));
      }
      W(), H(), i.props.animation ? B() && ye(C, i.unmount) : i.unmount();
    }
  }
  function cr(a) {
    M().addEventListener("mousemove", w), Bt(Ze, w), w(a);
  }
  function fr() {
    i.state.isVisible && i.hide(), i.state.isMounted && (ze(), ce().forEach(function(a) {
      a._tippy.unmount();
    }), l.parentNode && l.parentNode.removeChild(l), ct = ct.filter(function(a) {
      return a !== i;
    }), i.state.isMounted = !1, I("onHidden", [i]));
  }
  function pr() {
    i.state.isDestroyed || (i.clearDelayTimeouts(), i.unmount(), We(), delete e._tippy, i.state.isDestroyed = !0, I("onDestroy", [i]));
  }
}
function He(e, t) {
  t === void 0 && (t = {});
  var r = J.plugins.concat(t.plugins || []);
  kn();
  var n = Object.assign({}, t, {
    plugins: r
  }), o = Ln(e), s = o.reduce(function(f, u) {
    var c = u && zn(u, n);
    return c && f.push(c), f;
  }, []);
  return tr(e) ? s[0] : s;
}
He.defaultProps = J;
He.setDefaultProps = Fn;
He.currentInput = Z;
Object.assign({}, zt, {
  effect: function(t) {
    var r = t.state, n = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  }
});
He.setDefaultProps({
  animation: !1
});
function ir(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var or = typeof window < "u" && typeof document < "u";
function vt(e, t) {
  e && (typeof e == "function" && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t));
}
function Wt() {
  return or && document.createElement("div");
}
function Yn(e) {
  var t = {
    "data-placement": e.placement
  };
  return e.referenceHidden && (t["data-reference-hidden"] = ""), e.escaped && (t["data-escaped"] = ""), t;
}
function ar(e, t) {
  if (e === t)
    return !0;
  if (typeof e == "object" && e != null && typeof t == "object" && t != null) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (var r in e)
      if (t.hasOwnProperty(r)) {
        if (!ar(e[r], t[r]))
          return !1;
      } else
        return !1;
    return !0;
  } else
    return !1;
}
function _n(e) {
  var t = [];
  return e.forEach(function(r) {
    t.find(function(n) {
      return ar(r, n);
    }) || t.push(r);
  }), t;
}
function Xn(e, t) {
  var r, n;
  return Object.assign({}, t, {
    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
      modifiers: _n([].concat(((r = e.popperOptions) == null ? void 0 : r.modifiers) || [], ((n = t.popperOptions) == null ? void 0 : n.modifiers) || []))
    })
  });
}
var ft = or ? ae.useLayoutEffect : ae.useEffect;
function Kn(e) {
  var t = ae.useRef();
  return t.current || (t.current = typeof e == "function" ? e() : e), t.current;
}
function Ft(e, t, r) {
  r.split(/\s+/).forEach(function(n) {
    n && e.classList[t](n);
  });
}
var Gn = {
  name: "className",
  defaultValue: "",
  fn: function(t) {
    var r = t.popper.firstElementChild, n = function() {
      var u;
      return !!((u = t.props.render) != null && u.$$tippy);
    };
    function o() {
      t.props.className && !n() || Ft(r, "add", t.props.className);
    }
    function s() {
      n() && Ft(r, "remove", t.props.className);
    }
    return {
      onCreate: o,
      onBeforeUpdate: s,
      onAfterUpdate: o
    };
  }
};
function Jn(e) {
  function t(r) {
    var n = r.children, o = r.content, s = r.visible, f = r.singleton, u = r.render, c = r.reference, d = r.disabled, p = d === void 0 ? !1 : d, b = r.ignoreAttributes, x = b === void 0 ? !0 : b;
    r.__source, r.__self;
    var m = ir(r, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]), w = s !== void 0, g = f !== void 0, y = ae.useState(!1), D = y[0], S = y[1], L = ae.useState({}), i = L[0], E = L[1], l = ae.useState(), R = l[0], k = l[1], T = Kn(function() {
      return {
        container: Wt(),
        renders: 1
      };
    }), P = Object.assign({
      ignoreAttributes: x
    }, m, {
      content: T.container
    });
    w && (P.trigger = "manual", P.hideOnClick = !1), g && (p = !0);
    var j = P, B = P.plugins || [];
    u && (j = Object.assign({}, P, {
      plugins: g && f.data != null ? [].concat(B, [{
        fn: function() {
          return {
            onTrigger: function(V, N) {
              var I = f.data.children.find(function(W) {
                var H = W.instance;
                return H.reference === N.currentTarget;
              });
              V.state.$$activeSingletonInstance = I.instance, k(I.content);
            }
          };
        }
      }]) : B,
      render: function() {
        return {
          popper: T.container
        };
      }
    }));
    var $ = [c].concat(n ? [n.type] : []);
    return ft(function() {
      var M = c;
      c && c.hasOwnProperty("current") && (M = c.current);
      var O = e(M || T.ref || Wt(), Object.assign({}, j, {
        plugins: [Gn].concat(P.plugins || [])
      }));
      return T.instance = O, p && O.disable(), s && O.show(), g && f.hook({
        instance: O,
        content: o,
        props: j,
        setSingletonContent: k
      }), S(!0), function() {
        O.destroy(), f == null || f.cleanup(O);
      };
    }, $), ft(function() {
      var M;
      if (T.renders === 1) {
        T.renders++;
        return;
      }
      var O = T.instance;
      O.setProps(Xn(O.props, j)), (M = O.popperInstance) == null || M.forceUpdate(), p ? O.disable() : O.enable(), w && (s ? O.show() : O.hide()), g && f.hook({
        instance: O,
        content: o,
        props: j,
        setSingletonContent: k
      });
    }), ft(function() {
      var M;
      if (u) {
        var O = T.instance;
        O.setProps({
          popperOptions: Object.assign({}, O.props.popperOptions, {
            modifiers: [].concat((((M = O.props.popperOptions) == null ? void 0 : M.modifiers) || []).filter(function(V) {
              var N = V.name;
              return N !== "$$tippyReact";
            }), [{
              name: "$$tippyReact",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function(N) {
                var I, W = N.state, H = (I = W.modifiersData) == null ? void 0 : I.hide;
                (i.placement !== W.placement || i.referenceHidden !== (H == null ? void 0 : H.isReferenceHidden) || i.escaped !== (H == null ? void 0 : H.hasPopperEscaped)) && E({
                  placement: W.placement,
                  referenceHidden: H == null ? void 0 : H.isReferenceHidden,
                  escaped: H == null ? void 0 : H.hasPopperEscaped
                }), W.attributes.popper = {};
              }
            }])
          })
        });
      }
    }, [i.placement, i.referenceHidden, i.escaped].concat($)), /* @__PURE__ */ pt.createElement(pt.Fragment, null, n ? /* @__PURE__ */ ae.cloneElement(n, {
      ref: function(O) {
        T.ref = O, vt(n.ref, O);
      }
    }) : null, D && /* @__PURE__ */ dr.createPortal(u ? u(Yn(i), R, T.instance) : o, T.container));
  }
  return t;
}
var Qn = function(e, t) {
  return /* @__PURE__ */ ae.forwardRef(function(n, o) {
    var s = n.children, f = ir(n, ["children"]);
    return (
      // If I spread them separately here, Babel adds the _extends ponyfill for
      // some reason
      /* @__PURE__ */ pt.createElement(e, Object.assign({}, t, f), s ? /* @__PURE__ */ ae.cloneElement(s, {
        ref: function(c) {
          vt(o, c), vt(s.ref, c);
        }
      }) : null)
    );
  });
}, Zn = /* @__PURE__ */ Qn(/* @__PURE__ */ Jn(He), {
  render: function() {
    return "";
  }
});
const ri = Zn, ni = (e) => (t) => {
  const r = e[t.code];
  typeof r == "function" && r(t);
};
export {
  ri as T,
  ni as u
};
