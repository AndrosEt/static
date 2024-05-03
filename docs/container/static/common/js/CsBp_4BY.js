import { j as m } from "./_JqgLpqe.js";
import { r as u } from "./react-D5yUVy0K.js";
import { u as a, a as e } from "./styled-components-sg3HbxYZ.js";
import { d as s } from "./Dj4cxZ3D.js";
import { k as $, o as p, c as t } from "./DXDnZb_T.js";
import { D as f } from "./ChoeoyII.js";
const y = ({ children: o, active: r, disabled: i, padding: l, dataTestId: c, ...n }) => {
  const d = u.useRef(null);
  return m.jsx(C, { tabIndex: 0, ...n, ref: d, padding: l, "data-testid": c, $active: r, $disabled: i, children: o });
}, j = a(y)``, C = a(f)`
  transition: all 0.2s ease-in-out;

  ${$};
  ${p};

  ${({ $disabled: o }) => !o && e`
      &:hover,
      &:focus {
        border-color: ${({ theme: r }) => r.systemColors.grey400};
      }

      &:active {
        ${t};
        ${s}
      }

      &:focus-visible {
        border-color: ${({ theme: r }) => r.systemColors.grey400};
      }
    `};

  ${({ $active: o }) => o && e`
      ${t};
      ${s}
    `};

  ${({ $disabled: o }) => o && e`
      background-color: ${(r) => r.theme.systemColors.grey200};
      cursor: not-allowed;

      & > * {
        opacity: 0.5;
      }
    `};
`;
export {
  j as S
};
