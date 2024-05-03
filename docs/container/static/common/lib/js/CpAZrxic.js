import { j as l, v as a } from "./_JqgLpqe.js";
import { r as i } from "./react-D5yUVy0K.js";
import { u as s, a as r } from "./styled-components-sg3HbxYZ.js";
const d = i.forwardRef(({ type: o = "success", children: t, icon: e, ...c }, n) => l.jsxs(m, { ...c, $chipType: o, ref: n, children: [e ? l.jsx(p, { children: e }) : null, t] })), p = s.div`
  margin-right: 4px;
  font-size: 12px;
`, C = s(d)``, m = s.div`
  ${a};
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  min-height: 24px;
  border-radius: 24px;
  ${(o) => g[o.$chipType]};
`, g = {
  success: r`
    background-color: ${({ theme: o }) => o.systemColors.green100};
    color: ${({ theme: o }) => o.systemColors.green800};
  `,
  error: r`
    background-color: ${({ theme: o }) => o.systemColors.red100};
    color: ${({ theme: o }) => o.systemColors.red400};
  `,
  disabled: r`
    background-color: ${({ theme: o }) => o.systemColors.grey100};
    color: ${({ theme: o }) => o.systemColors.grey600};
  `,
  paused: r`
    background-color: ${({ theme: o }) => o.systemColors.yellow200};
    color: ${({ theme: o }) => o.systemColors.yellow800};
  `,
  enabled: r`
    background-color: ${({ theme: o }) => o.systemColors.blue100};
    color: ${({ theme: o }) => o.systemColors.blue800};
  `,
  beta: r`
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(
          180deg,
          #c91309 0%,
          #f78527 23.44%,
          #efce1a 46.35%,
          #9bbd02 70.83%,
          #36c9e2 94.79%
        )
        border-box;
    border: 2px solid transparent;
  `,
  new: r`
    background-color: ${({ theme: o }) => o.systemColors.blue100};
    color: ${({ theme: o }) => o.systemColors.blue800};
  `,
  icon: r``,
  info: r``,
  pending: r`
    background-color: ${({ theme: o }) => o.systemColors.green100};
    color: ${({ theme: o }) => o.systemColors.green800};
  `
};
export {
  C as S
};
