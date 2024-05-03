import { a as d, j as t } from "./_JqgLpqe.js";
import { r as g } from "./react-D5yUVy0K.js";
import { u as e } from "./styled-components-sg3HbxYZ.js";
import { L as h } from "./88GS_Ft0.js";
const l = ({ status: r, error: n, centerContent: a, children: c }) => {
  const p = a ? o : g.Fragment;
  return t.jsxs(t.Fragment, { children: [m.includes(r) && t.jsx(i, { children: t.jsx(u, {}) }), r === "error" && t.jsx(o, { children: n }), x.includes(r) && t.jsx(p, { children: c })] });
}, m = ["loading", "waiting"], x = ["init", "loaded", "waiting", "progress"], s = e.div`
  ${d};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`, i = e(s)`
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.6);
`, u = e(h)`
  width: 40px;
  height: 40px;
`, o = e(s)`
  min-height: 40px;
  padding: ${({ theme: { spacing: { sp8: r, sp16: n } } }) => `${r} ${n}`};
`, b = Object.assign(l, {
  LoaderWrapper: i,
  ErrorWrapper: o
});
export {
  b as S
};
