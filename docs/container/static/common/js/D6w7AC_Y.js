import { j as a } from "./_JqgLpqe.js";
import { r as h } from "./react-D5yUVy0K.js";
import { u as t, a as m } from "./styled-components-sg3HbxYZ.js";
import { a as d } from "./ayMNZ6b_.js";
const g = h.forwardRef(({ className: e, children: c, category: n, crossedOut: p, ...s }, l) => a.jsx(i, { category: n, forwardRef: l, className: e, size: "50", ...s, children: a.jsx(r, { children: a.jsx(o, { $crossedOut: p, children: s.defaultValue || c }) }) })), i = t(d)``, r = t.div`
  display: flex;
  align-items: center;
`, o = t.div`
  display: flex;
  font-size: ${(e) => e.theme.spacing.sp12};
  line-height: ${(e) => e.theme.spacing.sp16};
  align-items: center;
  white-space: nowrap;
  ${(e) => e.$crossedOut && m`
      text-decoration: line-through;
    `}
`, j = Object.assign(g, {
  CategoricalBaseChip: i,
  CategoricalWrapper: r,
  CategoricalTitle: o
});
export {
  j as C
};
