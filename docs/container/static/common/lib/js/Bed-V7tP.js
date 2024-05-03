import { j as e } from "./_JqgLpqe.js";
import { r as c } from "./react-D5yUVy0K.js";
import { h as l, u as n } from "./styled-components-sg3HbxYZ.js";
const y = c.memo(({ builder: o }) => e.jsx(e.Fragment, { children: o == null ? void 0 : o.map((t, r) => {
  const s = [...new Array(t.count || 1)].map((h, a) => e.jsx(m, { $size: t.size || "medium" }, a));
  return t.direction === "column" ? e.jsx(p, { $bottom: t.bottom, $width: t.width, children: s }, r) : e.jsx(i, { $bottom: t.bottom, $width: t.width, children: s }, r);
}) })), d = l`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`, x = {
  small: "10px",
  medium: "14px",
  normal: "20px",
  large: "32px"
}, m = n.div`
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    ${(o) => o.$colorOne || o.theme.systemColors.grey200} 35%,
    ${(o) => o.$colorTwo || o.theme.systemColors.grey100} 60%,
    ${(o) => o.$colorOne || o.theme.systemColors.grey200} 80%
  );
  background-size: 400% 100%;
  animation: ${d} 1.5s infinite;
  height: ${({ $size: o }) => x[o || "medium"]};
  width: ${({ $width: o }) => o ? typeof o == "number" ? `${o}px` : o : "100%"};
`, i = n.div`
  display: flex;
  width: 100%;
  gap: 8px;
  margin-bottom: ${({ $bottom: o }) => (o ?? 8) + "px"};

  ${m} {
    width: 100%;
    max-width: ${({ $width: o }) => o ? o + "px" : "100%"};
  }
`, p = n(i)`
  flex-direction: column;
`;
export {
  m as S,
  y as a
};
