import { j as s } from "./_JqgLpqe.js";
import { b as l } from "./CZVHOlcu.js";
import { F as a } from "./Cg-oD5Fc.js";
import { a as e, u as m } from "./styled-components-sg3HbxYZ.js";
import { h as n } from "./DXDnZb_T.js";
const i = ({ type: o = n, disabled: r, ...c }) => s.jsx(t, { ...c, $type: o, $disabled: r, children: s.jsx(a, { icon: l }) }), d = {
  primary: e`
    color: ${(o) => o.theme.systemColors.blue600};
    background-color: ${(o) => o.theme.systemColors.white};
  `,
  secondary: e`
    color: ${(o) => o.theme.systemColors.white};
    background-color: ${(o) => o.theme.systemColors.blue600};
  `,
  tertiary: e`
    color: ${(o) => o.theme.systemColors.white};
    background-color: ${(o) => o.theme.systemColors.grey400};
  `,
  text: e`
    color: ${(o) => o.theme.systemColors.blue600};
    background-color: ${(o) => o.theme.systemColors.white};
  `,
  icon: e`
    color: ${(o) => o.theme.systemColors.grey600};
    background-color: transparent;
  `,
  cancel: e`
    color: ${(o) => o.theme.systemColors.black};
    background-color: transparent;
  `
}, t = m.div`
  width: 22px;
  height: 22px;
  border-radius: 22px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  ${(o) => d[o.$type]}

  ${(o) => o.$disabled && e`
      color: ${(r) => r.theme.systemColors.white};
      background-color: ${(r) => r.theme.systemColors.grey300};
    `}
`, b = Object.assign(i, {
  Wrapper: t
});
export {
  b as L
};
