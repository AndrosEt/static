import { p as M, a as B, j as s } from "./_JqgLpqe.js";
import { r as w } from "./react-D5yUVy0K.js";
import { u as o, a as r } from "./styled-components-sg3HbxYZ.js";
import { u as T, M as F } from "./Bk310EGg.js";
import { aO as W, aP as k, i as D } from "./CZVHOlcu.js";
import { F as b } from "./Cg-oD5Fc.js";
import { N as g } from "./DXDnZb_T.js";
const O = ({ fullSize: t, hideCloseButton: n, onClose: e, resizable: a, onFullSizeClick: j, title: c, subtitle: $, titleAlign: i, size: p, className: y }) => {
  const l = e && !n, h = l || a, m = w.useMemo(() => i !== "center" ? "20%" : [a, l].reduce((d, A) => (d > 0 && (d += 8), A && (d += 32), d), 0) + "px", [l, a, i]);
  return s.jsxs(S, { $size: p, className: y, children: [h && i === "center" && s.jsx(z, { $width: m }), (c || $) && s.jsxs(C, { $textAlign: i, $hasButtons: h, children: [c, !!$ && s.jsx(R, { children: $ })] }), h && s.jsxs(z, { $width: m, children: [a && s.jsx(g, { "data-testid": "resize-button", buttonType: "icon", size: "100", icon: s.jsx(b, { icon: t ? W : k }), onClick: j }), e && !n && s.jsx(g, { "data-testid": "close-button", buttonType: "icon", size: "100", icon: s.jsx(b, { icon: D }), onClick: e })] })] });
}, C = o.h2`
  ${M};
  margin: 0;
  flex: 1;
  text-align: ${(t) => t.$textAlign || "left"};

  ${(t) => r`
    color: ${t.theme.systemColors.black};
  `};

  ${(t) => t.$textAlign === "center" && t.$hasButtons && r`
      padding-left: ${t.theme.spacing.sp16};
      padding-right: ${t.theme.spacing.sp16};
    `}
`, R = o.div`
  ${B};
  ${(t) => r`
    color: ${t.theme.systemColors.grey600};
    padding-top: ${t.theme.spacing.sp4};
  `};
`, S = o.div`
  display: flex;
`, z = o.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: ${(t) => t.$width};
`, N = Object.assign(O, {
  Wrapper: S,
  Title: C
}), E = ({ hideCloseButton: t, resizable: n, size: e = "100", maxWidth: a, title: j, titleAlign: c, subtitle: $, ...i }) => {
  const [p, y] = w.useState(!1), l = w.useRef(null), { isScrollable: h, scrollWidth: m } = T({
    ref: l,
    isOpen: i.isOpen,
    footer: i.footer,
    children: i.children
  });
  return s.jsx(L, { ...i, size: e, fullSize: p, maxWidth: a, children: s.jsxs(v, { $size: e, $scrollWidth: m, $textAlign: c, children: [s.jsx(f, { title: j, subtitle: $, titleAlign: c, fullSize: p, hideCloseButton: t, onClose: i.onClose, onFullSizeClick: () => y((d) => !d), resizable: n, size: e }), s.jsx(u, { ref: l, children: i.children }), i.footer && s.jsx(s.Fragment, { children: s.jsx(x, { $isScrollable: h, children: i.footer }) })] }) });
}, f = o(N)``, x = o.div`
  ${(t) => r`
    padding-top: ${t.theme.spacing.sp16};

    ${g} + ${g} {
      margin-left: ${t.theme.spacing.sp8};
    }
  `};

  ${({ $isScrollable: t }) => t && r`
      border-top: 1px solid ${(n) => n.theme.systemColors.grey200};
    `}
`, u = o.div`
  flex: 1;
  position: relative;
  overflow-y: auto;
`, L = o(F)`
  opacity: 0;
`, v = o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(t) => t.theme.spacing.sp16};
  background: ${(t) => t.theme.systemColors.white};
  border-radius: 6px;
  position: relative;
  max-width: 100%;
  max-height: 100%;

  ${(t) => {
  const e = {
    50: t.theme.spacing.sp16,
    100: t.theme.spacing.sp24,
    200: t.theme.spacing.sp32,
    400: t.theme.spacing.sp32
  }[t.$size || "100"];
  return t.$size === "50" ? r`
          padding-top: ${e};
          padding-bottom: ${e};

          ${f.Wrapper}, ${u}, ${x} {
            padding-left: ${e};
            padding-right: ${e};
          }
        ` : r`
          padding-top: ${e};
          padding-bottom: ${e};

          ${u}, ${x} {
            padding-left: ${e};
            padding-right: ${e};
          }

          ${f.Wrapper} {
            padding-left: ${t.$textAlign === "center" ? t.theme.spacing.sp16 : e};
            padding-right: ${t.theme.spacing.sp16};
          }
        `;
}}
`, H = Object.assign(E, {
  Title: f,
  Content: v,
  Footer: x,
  Children: u
});
export {
  H as D
};
