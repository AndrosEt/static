import { j as g, c as st } from "./_JqgLpqe.js";
import { a as lt, u as X } from "./styled-components-sg3HbxYZ.js";
import { e as pt } from "./DXDnZb_T.js";
import { r as b } from "./react-D5yUVy0K.js";
import { o as ut, c as ft } from "./Bod6Edm1.js";
import { m as mt } from "./BsRJmYuf.js";
const gt = ({ className: t, maxWidth: e, value: o, placeholder: i, children: r }) => g.jsx(ct, { "data-value": o || 0, "data-placeholder": i, $maxWidth: e, className: t, children: r }), at = lt`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, ct = X.div`
  position: relative;
  min-width: 2px;
  display: inline-block;

  max-width: ${(t) => t.$maxWidth ? t.$maxWidth + "px" : "100%"};

  &:after {
    height: 0;
    display: block;
    max-width: 100%;
    overflow: hidden;
    content: attr(data-value) " ";
    visibility: hidden;
    white-space: nowrap;
  }

  &:before {
    height: 0;
    display: block;
    content: attr(data-placeholder) " ";
    visibility: hidden;
    white-space: nowrap;
  }

  ${pt} {
    ${at};
  }
`, Ht = Object.assign(gt, {
  Wrapper: ct,
  ContentStyles: at
}), xt = b.createContext(null), bt = () => {
}, It = ({ children: t, onSearch: e = bt, onDropdownHidden: o, onDropdownShow: i }) => {
  const [r, l] = b.useState(!1), [a, s] = b.useState("");
  b.useEffect(() => {
    r ? i == null || i() : o == null || o();
  }, [r]);
  const [p] = ut(a || "", 800), y = ft(e, 800), P = b.useCallback((u) => {
    s(u), y(u);
  }, [y]), Y = b.useCallback((u) => {
    s(u), e(u);
  }, [e]), C = {
    showDropdown: r,
    setShowDropdown: l,
    search: a,
    debounceSearch: p,
    immediatelySetSearch: Y,
    setSearch: P
  };
  return g.jsx(xt.Provider, { value: C, children: t });
}, it = (t) => typeof t == "object" && t != null && t.nodeType === 1, rt = (t, e) => (!e || t !== "hidden") && t !== "visible" && t !== "clip", K = (t, e) => {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    const o = getComputedStyle(t, null);
    return rt(o.overflowY, e) || rt(o.overflowX, e) || ((i) => {
      const r = ((l) => {
        if (!l.ownerDocument || !l.ownerDocument.defaultView)
          return null;
        try {
          return l.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!r && (r.clientHeight < i.scrollHeight || r.clientWidth < i.scrollWidth);
    })(t);
  }
  return !1;
}, U = (t, e, o, i, r, l, a, s) => l < t && a > e || l > t && a < e ? 0 : l <= t && s <= o || a >= e && s >= o ? l - t - i : a > e && s < o || l < t && s > o ? a - e + r : 0, yt = (t) => {
  const e = t.parentElement;
  return e ?? (t.getRootNode().host || null);
}, wt = (t, e) => {
  var o, i, r, l;
  if (typeof document > "u")
    return [];
  const { scrollMode: a, block: s, inline: p, boundary: y, skipOverflowHiddenElements: P } = e, Y = typeof y == "function" ? y : (x) => x !== y;
  if (!it(t))
    throw new TypeError("Invalid target");
  const C = document.scrollingElement || document.documentElement, u = [];
  let c = t;
  for (; it(c) && Y(c); ) {
    if (c = yt(c), c === C) {
      u.push(c);
      break;
    }
    c != null && c === document.body && K(c) && !K(document.documentElement) || c != null && K(c, P) && u.push(c);
  }
  const w = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, W = (l = (r = window.visualViewport) == null ? void 0 : r.height) != null ? l : innerHeight, { scrollX: v, scrollY: $ } = window, { height: k, width: S, top: j, right: _, bottom: q, left: E } = t.getBoundingClientRect(), { top: Q, right: Z, bottom: tt, left: et } = ((x) => {
    const n = window.getComputedStyle(x);
    return { top: parseFloat(n.scrollMarginTop) || 0, right: parseFloat(n.scrollMarginRight) || 0, bottom: parseFloat(n.scrollMarginBottom) || 0, left: parseFloat(n.scrollMarginLeft) || 0 };
  })(t);
  let d = s === "start" || s === "nearest" ? j - Q : s === "end" ? q + tt : j + k / 2 - Q + tt, h = p === "center" ? E + S / 2 - et + Z : p === "end" ? _ + Z : E - et;
  const D = [];
  for (let x = 0; x < u.length; x++) {
    const n = u[x], { height: M, width: T, top: F, right: z, bottom: A, left: H } = n.getBoundingClientRect();
    if (a === "if-needed" && j >= 0 && E >= 0 && q <= W && _ <= w && j >= F && q <= A && E >= H && _ <= z)
      return D;
    const I = getComputedStyle(n), O = parseInt(I.borderLeftWidth, 10), B = parseInt(I.borderTopWidth, 10), N = parseInt(I.borderRightWidth, 10), R = parseInt(I.borderBottomWidth, 10);
    let f = 0, m = 0;
    const V = "offsetWidth" in n ? n.offsetWidth - n.clientWidth - O - N : 0, L = "offsetHeight" in n ? n.offsetHeight - n.clientHeight - B - R : 0, G = "offsetWidth" in n ? n.offsetWidth === 0 ? 0 : T / n.offsetWidth : 0, J = "offsetHeight" in n ? n.offsetHeight === 0 ? 0 : M / n.offsetHeight : 0;
    if (C === n)
      f = s === "start" ? d : s === "end" ? d - W : s === "nearest" ? U($, $ + W, W, B, R, $ + d, $ + d + k, k) : d - W / 2, m = p === "start" ? h : p === "center" ? h - w / 2 : p === "end" ? h - w : U(v, v + w, w, O, N, v + h, v + h + S, S), f = Math.max(0, f + $), m = Math.max(0, m + v);
    else {
      f = s === "start" ? d - F - B : s === "end" ? d - A + R + L : s === "nearest" ? U(F, A, M, B, R + L, d, d + k, k) : d - (F + M / 2) + L / 2, m = p === "start" ? h - H - O : p === "center" ? h - (H + T / 2) + V / 2 : p === "end" ? h - z + N + V : U(H, z, T, O, N + V, h, h + S, S);
      const { scrollLeft: ot, scrollTop: nt } = n;
      f = J === 0 ? 0 : Math.max(0, Math.min(nt + f / J, n.scrollHeight - M / J + L)), m = G === 0 ? 0 : Math.max(0, Math.min(ot + m / G, n.scrollWidth - T / G + V)), d += nt - f, h += ot - m;
    }
    D.push({ el: n, top: f, left: m });
  }
  return D;
}, Ot = (t, e = "data-index") => b.useCallback((o) => {
  const i = t == null ? void 0 : t.querySelector(`[role="option"][${e}="${o}"]`);
  i && t && Wt(i, t);
}, [e, t]), Wt = (t, e) => {
  wt(t, {
    boundary: e,
    block: "nearest",
    scrollMode: "if-needed"
  }).forEach((i) => {
    const { el: r, top: l, left: a } = i;
    r.scrollTop = l, r.scrollLeft = a;
  });
}, dt = X.div`
  padding: 8px 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`, vt = ({ className: t }) => {
  const { t: e } = mt();
  return g.jsx(dt, { className: t, children: e("common.noOptions") });
}, $t = Object.assign(vt, { Wrapper: dt }), Bt = () => g.jsx($t, {}), kt = -1, Nt = ({ value: t, highlighted: e, onCreate: o }) => g.jsxs(ht, { $highlighted: e, role: "option", "data-index": kt, onClick: () => o == null ? void 0 : o(t), children: ["Create ", g.jsx("span", { children: t })] }), Rt = ({ option: t, onSelect: e, highlighted: o }) => g.jsx(ht, { onClick: () => e(t), $highlighted: o, role: "option", "data-index": t.index, children: g.jsx(St, { children: t.label }) }), ht = X.div`
  ${st};
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #000;

  span {
    font-weight: 700;
    margin-left: 4px;
  }

  &:hover {
    background-color: ${(t) => t.theme.systemColors.grey100};
  }

  ${(t) => t.$highlighted && lt`
      background-color: ${(e) => e.theme.systemColors.grey100};
    `}
`, St = X.div`
  ${st};
  font-weight: 700;
  color: #fff;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${(t) => t.theme.systemColors.grey800};
`;
export {
  Ht as F,
  $t as N,
  xt as U,
  It as a,
  Rt as b,
  Nt as c,
  kt as d,
  Bt as r,
  Wt as s,
  Ot as u
};
