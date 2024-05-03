import { j as o, g as S } from "./_JqgLpqe.js";
import { T as M } from "./Bj_KaQdV.js";
import { r as a } from "./react-D5yUVy0K.js";
import { u as m, a as n } from "./styled-components-sg3HbxYZ.js";
import { b as y, a as z } from "./Dj4cxZ3D.js";
import { z as E } from "./DYjKt7w-.js";
import { U as I } from "./BBNzmKg6.js";
const e = 10, B = (t = 0, p = e) => [0, t + p / 2], D = B(4), N = (t) => o.jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t, children: [o.jsx("path", { "data-triangle": "", d: "M9 0L1 -6.99382e-07L5 6.5L9 0Z" }), o.jsx("path", { "data-border": "", d: "M4.15261 6.53L0.118405 -8.53632e-07L1.29385 -7.50871e-07L5.00061 6L8.70737 -1.02761e-07L9.88281 0L5.84861 6.53C5.45694 7.15667 4.54428 7.15667 4.15261 6.53Z" })] }), F = ({ colorType: t = "dark", content: p, children: u, maxWidth: x = 290, hideArrow: w, appendTo: b, immediatelyMount: C = !1, small: T, ...l }) => {
  var c;
  const [h, $] = a.useState(l.visible || !1), [j, L] = a.useState(!1), d = a.useContext(I), g = a.useDeferredValue(u), v = a.useDeferredValue(p);
  return o.jsx("div", { onMouseEnter: () => L(!0), style: { display: "contents" }, children: !j && !l.singleton && !C ? g : o.jsx(M, { delay: [500, 500], zIndex: E.tooltip, offset: D, ...d, ...l, appendTo: b || ((c = d == null ? void 0 : d.tooltips) == null ? void 0 : c.appendTo) || document.body, animation: !0, onMount: () => $(!0), onHide: () => $(!1), render: (k, Z, s) => o.jsxs(V, { ...k, $small: T, $show: h, $maxWidth: x, $colorType: t, onTransitionEnd: () => {
    var f;
    h || (f = s == null ? void 0 : s.unmount) == null || f.call(s);
  }, children: [v, !w && o.jsx(i, { "data-popper-arrow": "", children: o.jsx(r, {}) })] }), children: g }) });
}, i = m.div`
  width: ${e}px !important;
  height: ${e}px !important;
  text-align: initial;
`, r = m(N)`
  width: ${e}px !important;
  height: ${e}px !important;
  position: absolute;
`, U = {
  dark: n`
    padding: ${(t) => t.theme.spacing.sp8};
    background-color: ${(t) => t.theme.systemColors.grey800};
    border-radius: 6px;

    color: ${(t) => t.theme.systemColors.white};

    ${r} {
      path[data-triangle=""],
      path[data-border=""] {
        fill: ${(t) => t.theme.systemColors.grey800} !important;
      }
    }
  `,
  light: n`
    ${y};
    padding: ${(t) => t.theme.spacing.sp16};
    background-color: ${(t) => t.theme.systemColors.white};
    border-radius: 6px;
    border: solid 1px ${(t) => t.theme.systemColors.grey300};
    color: ${(t) => t.theme.systemColors.grey600};

    ${r} {
      path[data-triangle=""] {
        fill: ${(t) => t.theme.systemColors.white} !important;
      }

      path[data-border=""] {
        fill: ${(t) => t.theme.systemColors.grey300} !important;
      }
    }
  `,
  grey: n`
    ${y};
    padding: ${(t) => t.theme.spacing.sp16};
    background-color: ${(t) => t.theme.systemColors.grey100};
    border-radius: 6px;
    border: none;
    color: ${(t) => t.theme.systemColors.grey600};
    ${z};

    ${r} {
      path[data-triangle=""] {
        fill: ${(t) => t.theme.systemColors.grey100} !important;
      }
    }
  `
}, V = m.div`
  max-width: ${({ $maxWidth: t }) => t && typeof t == "number" ? t + "px" : t || "auto"};
  transition: opacity 0.2s ease;

  ${S};

  ${(t) => U[t.$colorType || "dark"]};

  ${(t) => t.$small && `padding: ${t.theme.spacing.sp8}`};

  ${(t) => t.$show ? n`
          opacity: 1;
        ` : n`
          opacity: 0;
        `}
  &[data-placement^="top"] {
    ${i} {
      bottom: 0;
    }

    ${r} {
      top: ${e - 1}px;
    }
  }

  &[data-placement^="bottom"] {
    ${i} {
      top: 0;
    }

    ${r} {
      bottom: ${e - 1}px;
      transform: rotate(180deg);
    }
  }

  &[data-placement^="left"] {
    ${i} {
      right: 0;
    }

    ${r} {
      transform: rotate(-90deg);
      left: ${e - 1}px;
    }
  }

  &[data-placement^="right"] {
    ${i} {
      left: 0;
    }

    ${r} {
      transform: rotate(90deg);
      right: ${e - 1}px;
    }
  }
`;
export {
  F as N,
  B as g
};
