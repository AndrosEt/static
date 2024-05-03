import { r as m } from "./react-D5yUVy0K.js";
import { j as n } from "./_JqgLpqe.js";
import { r as W } from "./react-dom-CwZtGxo1.js";
import { a as r, u as x } from "./styled-components-sg3HbxYZ.js";
import { z as R } from "./DYjKt7w-.js";
import { L as O } from "./NPT98Mse.js";
import { m as d } from "./ESx2WVJg.js";
import { C as X } from "./BwdTACk8.js";
const V = ({ ref: t, footer: i, children: s, isOpen: e }) => {
  const [a, c] = m.useState(!1), [l, u] = m.useState(14);
  return m.useLayoutEffect(() => {
    var f;
    t && t.current && (c(t.current.clientHeight < ((f = t.current) == null ? void 0 : f.scrollHeight)), u(t.current.offsetWidth - t.current.clientWidth));
  }, [t, e, i, s]), {
    isScrollable: a,
    scrollWidth: l
  };
}, Z = ({ isActive: t, ref: i, handler: s }) => {
  m.useEffect(() => {
    if (!t)
      return;
    const e = (a) => {
      var c, l;
      a == null || a.stopPropagation(), !(!i.current || (l = i.current) != null && l.contains(((c = a.path) == null ? void 0 : c[0]) || a.target)) && (s == null || s(a));
    };
    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
      document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
    };
  }, [i, s, t]);
}, M = ({ isActive: t, handler: i }) => {
  m.useEffect(() => {
    if (!t)
      return;
    const s = (e) => {
      e == null || e.stopPropagation(), (e.key === "Escape" || e.key === "Esc") && (i == null || i(e));
    };
    return document.addEventListener("keyup", s), () => document.removeEventListener("keyup", s);
  }, [i, t]);
}, H = {
  50: r`
    max-width: min(504px, 96vw);
  `,
  100: r`
    max-width: min(504px, 96vw);

    ${d.laptop} {
      max-width: min(648px, 96vw);
    }
  `,
  200: r`
    max-width: min(504px, 96vw);

    ${d.laptop} {
      max-width: min(648px, 96vw);
    }

    ${d.desktop} {
      max-width: min(864px, 96vw);
    }
  `,
  400: r`
    max-width: min(504px, 96vw);

    ${d.laptop} {
      max-width: min(648px, 96vw);
    }

    ${d.desktop} {
      max-width: min(864px, 96vw);
    }

    ${d.extraDesktop} {
      max-width: min(1152px, 96vw);
    }
  `
}, y = {
  center: ["center", "center"],
  top: ["flex-start", "center"],
  "top-right": ["flex-start", "flex-end"],
  right: ["center", "flex-end"],
  "bottom-right": ["flex-end", "flex-end"],
  bottom: ["flex-end", "center"],
  "bottom-left": ["flex-end", "flex-start"],
  left: ["center", "flex-start"],
  "top-left": ["flex-start", "flex-start"]
}, o = x.div`
  z-index: 100;
  flex-grow: 1;
  display: flex;
  max-height: 100%;
  transition: all 300ms ease;

  ${(t) => t.$fullSize ? `
          width: 100%;
          height: 100%;
        ` : t.$maxWidth ? r`
            max-width: ${t.$maxWidth};
          ` : t.$size ? H[t.$size] : ""}

  ${(t) => y[t.$position || "center"]};
`, I = r`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.fade-enter-done {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0ms;
  }

  &.fade-exit-done {
    display: none;
    opacity: 0;
  }
`, P = r`
  &.slideRight-enter {
    opacity: 0;

    ${o} {
      transform: translateX(100%);
    }
  }

  &.slideRight-enter-active {
    opacity: 1;

    ${o} {
      transform: translateX(0);
    }
  }

  &.slideRight-exit {
    opacity: 1;

    ${o} {
      transform: translateX(0);
    }
  }

  &.slideRight-exit-done {
    display: none;
  }

  &.slideRight-exit-active {
    opacity: 0;

    ${o} {
      transform: translateX(100%);
    }
  }
`, Y = r`
  &.slideLeft-enter {
    opacity: 0;

    ${o} {
      transform: translateX(-100%);
    }
  }

  &.slideLeft-enter-active {
    opacity: 1;

    ${o} {
      transform: translateX(0);
    }
  }

  &.slideLeft-exit {
    opacity: 1;

    ${o} {
      transform: translateX(0);
    }
  }

  &.slideLeft-exit-done {
    display: none;
  }

  &.slideLeft-exit-active {
    opacity: 0;

    ${o} {
      transform: translateX(-100%);
    }
  }
`, A = r`
  &.slideBottom-enter {
    opacity: 0;

    ${o} {
      transform: translateY(100%);
    }
  }

  &.slideBottom-enter-active {
    opacity: 1;

    ${o} {
      transform: translateY(0);
    }
  }

  &.slideBottom-exit {
    opacity: 1;

    ${o} {
      transform: translateY(0);
    }
  }

  &.slideBottom-exit-done {
    display: none;
  }

  &.slideBottom-exit-active {
    opacity: 0;

    ${o} {
      transform: translateY(100%);
    }
  }
`, F = {
  fade: I,
  slideRight: P,
  slideLeft: Y,
  slideBottom: A
}, N = (t) => {
  const { isOpen: i, disabled: s, onClickOutside: e = t.onClose, onClickEscape: a = t.onClose, hasOverlay: c = !0, position: l = "center", container: u = document.body, children: f, lockBody: L = !0, zIndex: S = R.modal, animation: $ = "fade", unmountOnExit: k = !0, fullSize: z, maxWidth: j, size: B, hidden: h } = t, C = m.useRef(null);
  return M({
    isActive: !s && i && !h,
    handler: typeof a == "function" && !h ? a : () => {
    }
  }), W.createPortal(n.jsxs(n.Fragment, { children: [i && L ? n.jsx(D, {}) : null, n.jsx(X, { in: i, timeout: 300, classNames: $, unmountOnExit: k, mountOnEnter: !0, children: n.jsxs(w, { className: t.className, $zIndex: S, $animation: $, onClick: () => e == null ? void 0 : e(), children: [c && n.jsx(E, { $hidden: h, "aria-label": "Overlay" }), n.jsx(v, { children: n.jsx(b, { position: l, children: n.jsx(o, { $position: l, $maxWidth: j, ref: C, $fullSize: z, $size: B, onClick: (p) => {
    var g;
    return (g = p == null ? void 0 : p.stopPropagation) == null ? void 0 : g.call(p);
  }, children: f }) }) })] }) })] }), u);
}, w = x.div`
  z-index: ${({ $zIndex: t }) => t};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  transition: opacity 300ms;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${({ $animation: t }) => F[t]};
`, v = x.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 16px;
  overflow: hidden;
  height: 100%;
`, b = x.div`
  min-height: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;

  ${(t) => r`
    align-items: ${y[t.position][0]};
    justify-content: ${y[t.position][1]};
  `}
`, E = x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $hidden: t }) => t ? 0 : 0.3};
  transition: opacity 0.3s ease;
  background-color: ${(t) => t.theme.systemColors.grey400};
`, D = () => !!(document.body.scrollHeight - document.body.clientHeight) ? n.jsx(O, {}) : n.jsx(n.Fragment, {}), tt = Object.assign(N, {
  Overlay: E,
  Content: o,
  Wrapper: w,
  SubWrapper: v,
  Flex: b
});
export {
  tt as M,
  Z as a,
  V as u
};
