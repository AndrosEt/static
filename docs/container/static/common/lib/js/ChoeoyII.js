import { j as e } from "./_JqgLpqe.js";
import { r as n } from "./react-D5yUVy0K.js";
import { u as s } from "./styled-components-sg3HbxYZ.js";
const i = n.forwardRef(({ children: r, padding: o = "normal", ...t }, a) => e.jsx(m, { ...t, ref: a, $padding: o || "normal", children: r })), u = s(i)``, p = {
  normal: "sp24",
  small: "sp16",
  empty: "sp4"
}, m = s.div`
  padding: ${({ $padding: r, theme: o }) => r === "empty" ? "0" : o.spacing[p[r]]};
  background: ${({ theme: r }) => r.systemColors.white};
  border: 1px solid ${({ theme: r }) => r.systemColors.grey200};
  border-radius: 6px;
  outline: none;
  position: relative;
`;
export {
  u as D
};
