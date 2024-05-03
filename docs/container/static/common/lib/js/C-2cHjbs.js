import { j as s, a as k } from "./_JqgLpqe.js";
import { K as D } from "./CZVHOlcu.js";
import { F as R } from "./Cg-oD5Fc.js";
import { r as t } from "./react-D5yUVy0K.js";
import { u as a } from "./styled-components-sg3HbxYZ.js";
import { z as T } from "./DYjKt7w-.js";
import { U as z } from "./BBNzmKg6.js";
import { T as I, u as N } from "./Bj_KaQdV.js";
import { b as O } from "./Dj4cxZ3D.js";
import { N as L } from "./DXDnZb_T.js";
const M = (e) => {
  const [c, l] = t.useState(!1), o = {
    fn: () => ({
      onMount: () => l(!0),
      onHidden: () => l(!1)
    })
  }, i = { ...e };
  if (i.plugins = [o, ...e.plugins || []], e.render) {
    const m = e.render;
    i.render = (...r) => c ? m(...r) : "";
  } else
    i.content = c ? e.content : "";
  return s.jsx(I, { ...i });
}, P = t.forwardRef(({ width: e, className: c, onClick: l, children: o }, i) => s.jsx(B, { className: c, onClick: l, ref: i, children: s.jsx(C, { $width: e, children: o }) })), B = a.div``, C = a.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  min-width: ${({ $width: e }) => e ? e + "px" : "100%"};

  padding: ${(e) => e.theme.spacing.sp8} 0;
  border-radius: 6px;
  ${O};
  border: solid 1px ${(e) => e.theme.systemColors.grey200};
  background-color: ${(e) => e.theme.systemColors.white};
`, E = ({ closeByChildrenClick: e = !0, closeButton: c = !1, imperativeRef: l, ...o }) => {
  const i = t.useRef(null), [m, r] = t.useState(!1), h = (d) => {
    d.stopPropagation(), r(!1);
  }, g = () => r((d) => !d), $ = N({
    Enter: g
  });
  t.useEffect(() => {
    o.visible !== void 0 && r(o.visible);
  }, [o.visible]), t.useImperativeHandle(l, () => ({
    open: () => r(!0),
    close: () => r(!1)
  }));
  const u = t.useContext(z), f = t.useRef(null), j = t.useCallback((d, n) => {
    var p, x, y, b, w;
    if (n == null || n.stopPropagation(), ((p = o.tippy) == null ? void 0 : p.appendTo) === "parent" && (!f.current || (y = f.current) != null && y.contains(((x = n.path) == null ? void 0 : x[0]) || n.target)))
      return !1;
    (b = o.tippy) != null && b.onClickOutside ? (w = o.tippy) == null || w.onClickOutside(d, n) : r(!1);
  }, [o.tippy]), v = t.useMemo(() => ({
    animation: !1,
    delay: [0, 0],
    zIndex: T.dropdown,
    interactive: !0,
    interactiveBorder: 20,
    appendTo: "parent",
    placement: "bottom-start",
    offset: [0, 8]
  }), []);
  return s.jsx(K, { className: o.className, ref: f, children: s.jsx(M, { visible: m, ...v, ...u == null ? void 0 : u.dropdowns, ...o.tippy, onClickOutside: j, render: (d) => {
    var n, p;
    return s.jsxs(P, { ...d, className: o.className, width: (n = o.dropdown) != null && n.autoWidth ? 0 : (p = i.current) == null ? void 0 : p.clientWidth, onClick: e ? h : () => {
    }, children: [s.jsx(S, { children: o.items }), c && s.jsx(U, { buttonType: "icon", size: "100", icon: s.jsx(R, { icon: D }), onClick: h })] });
  }, children: s.jsx(W, { onKeyDown: $, onClick: g, "data-testid": "open-button", children: o.children }) }) });
}, K = a.div``, W = a.div``, S = a.div``, F = a.div`
  ${k};
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.2s ease-in-out;

  padding: 0 ${(e) => e.theme.spacing.sp16};

  & > div,
  & > span {
    padding: 0 ${(e) => e.theme.spacing.sp16};
  }

  &:hover {
    background-color: ${(e) => e.theme.systemColors.grey100};
  }
`, H = a.div`
  height: 1px;
  margin: ${(e) => e.theme.spacing.sp8} -${(e) => e.theme.spacing.sp8};
  background-color: ${(e) => e.theme.systemColors.grey200};
`, U = a(L)`
  flex: 0 0 auto;
  position: absolute;
  right: ${({ theme: e }) => e.spacing.sp8};
  top: ${({ theme: e }) => e.spacing.sp8};
`, ee = Object.assign(E, {
  Item: F,
  Dropdown: C,
  Divider: H
});
export {
  M as L,
  ee as M
};
