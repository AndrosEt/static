import { j as i, g as k } from "./_JqgLpqe.js";
import { r as g } from "./react-D5yUVy0K.js";
import { a as t, u as x } from "./styled-components-sg3HbxYZ.js";
import { L as m } from "./DLMIu_Fz.js";
import { N as v } from "./Dm30pzho.js";
import { N as w } from "./DXDnZb_T.js";
const j = g.forwardRef(({ children: e, checked: n, tooltip: o, tooltipProps: c, toggleSize: p = "50", lock: u, onLock: s, ...a }, h) => {
  const r = u ? s : a.onClick, d = u ? i.jsx(m, { type: "tertiary" }) : a.icon, l = e ? "tertiary" : "icon";
  return i.jsx(y, { content: o, ...c, children: i.jsx(B, { ...a, onClick: r, icon: d, ref: h, size: "100", $toggleSize: p, buttonType: l, $checked: n, type: "button", children: e }) });
}), y = ({ children: e, content: n, ...o }) => n ? i.jsx("div", { children: i.jsx(v, { placement: "top", maxWidth: 500, content: n, ...o, children: e }) }) : i.jsx(i.Fragment, { children: e }), z = {
  50: t`
    padding: 4px 6px;
    min-height: 26px;
    min-width: 26px;
  `,
  100: t`
    padding: 7px 16px;
    min-height: 32px;
    min-width: 32px;
  `
}, B = x(w)(({ theme: { systemColors: e }, $checked: n, buttonType: o, $toggleSize: c }) => t`
    ${k};
    border: none;
    color: ${e.grey800};
    border-radius: 40px;
    z-index: 1;
    background-color: transparent;
    transition-duration: 0s;
    ${z[c]};

    ${o === "icon" && t`
      height: 26px;
      &&& {
        width: 26px;
      }
    `}

    //State: keyboard focus
    &:focus-visible {
      box-shadow: 0 0 0 3px transparent;
    }

    &:hover {
      background-color: ${e.grey300};
      transition: all 0.2s ease-in-out;
    }

    &:focus,
    &:focus-visible {
      background-color: ${e.grey300};
      transition-duration: 0s;
    }

    &:active {
      background-color: ${e.grey400};
      transition: 0s;
    }

    &:disabled {
      background-color: ${e.grey200};
    }

    ${n && t`
      font-weight: 700;
      background-color: transparent;
      color: ${e.black};

      &:focus,
      &:hover {
        background-color: transparent;
        color: ${e.black};
        z-index: 1;
      }

      &:disabled {
        background-color: ${e.grey300};
        color: ${e.grey400};
      }
    `}
  `), $ = x(j)``, T = (e) => {
  const { value: n, buttons: o = [], onChange: c, disabled: p, className: u, size: s = "50" } = e, [a, h] = g.useState(void 0);
  return g.useEffect(() => {
    const r = o == null ? void 0 : o.reduce((d, l, f) => l.value === n ? f : d, void 0);
    h(r);
  }, [o, n]), i.jsxs(b, { $disabled: p, className: u, $size: s, children: [o.map((r) => {
    const d = n === r.value, l = d ? void 0 : () => c == null ? void 0 : c(r.value);
    return g.createElement($, { disabled: p, ...r, toggleSize: s, key: r.value, onClick: l, checked: d });
  }), a !== void 0 && i.jsx(E, { active: a, count: o == null ? void 0 : o.length, padding: N[s] })] });
}, N = {
  50: 3,
  100: 4
}, S = {
  50: t`
    padding: 3px;
  `,
  100: t`
    padding: 4px;
  `
}, b = x.div(({ theme: { systemColors: e }, $disabled: n, $size: o }) => t`
    position: relative;
    width: 100%;
    display: inline-grid;
    grid-auto-columns: 1fr;
    background-color: ${e.grey200};
    border-radius: 40px;
    ${S[o]};

    & > * {
      grid-row: 1;
    }

    &:active {
      box-shadow: none;
    }

    ${n && t`
      background-color: ${e.grey200};
    `}
    ${$} {
      width: 100%;
    }
  `), E = x.div`
  background-color: white;
  position: absolute;
  z-index: 0;
  width: 0;
  top: 0;
  border-radius: 40px;
  transition: left 0.4s ease;
  bottom: ${({ padding: e }) => `${e}px`};

  ${({ count: e, active: n, padding: o }) => e && n !== void 0 && t`
      width: calc((100% - ${o * 2}px) / ${e});
      left: calc(${o}px + ((100% - ${o * 2}px) / ${e}) * ${n});
    `};
`, F = Object.assign(T, {
  Wrapper: b,
  Button: $
});
export {
  F as T
};
