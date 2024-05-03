import { v as l, h as j, g as D, j as r } from "./_JqgLpqe.js";
import { K as E, C as O } from "./CZVHOlcu.js";
import { F as b } from "./Cg-oD5Fc.js";
import { r as p } from "./react-D5yUVy0K.js";
import { u as c, a as s } from "./styled-components-sg3HbxYZ.js";
import { u as Q } from "./Bj_KaQdV.js";
import { M as N } from "./C-2cHjbs.js";
import { k as U, e as W, N as K } from "./DXDnZb_T.js";
const X = "100", Y = c.div`
  ${(e) => e.$size && V[e.$size]};
  ${(e) => e.$colorType && (e.$disabled ? oe[e.$colorType] : ee[e.$colorType])};
  ${(e) => e.$textRichChipColorType && (e.$disabled ? te[e.$textRichChipColorType] : se[e.$textRichChipColorType])};
  ${(e) => e.$onRemove && s`
      // ${n} {
      //   padding: ${(o) => o.theme.spacing.sp8} 0 ${(o) => o.theme.spacing.sp8}
      //     ${(o) => o.theme.spacing.sp24};
      // }
    `}
  ${(e) => e.$actionContent && s`
      ${n} {
        padding: ${(o) => o.theme.spacing.sp8} 0 ${(o) => o.theme.spacing.sp8}
          ${(o) => o.theme.spacing.sp24};
      }

      ${$} {
        padding-left: ${(o) => o.theme.spacing.sp16};
        padding-right: ${(o) => o.theme.spacing.sp16};
      }
    `};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ${U};
  display: flex;
  align-items: center;
  border-radius: 28px;
  user-select: none;
  max-width: 100%;
  overflow: hidden;
  ${(e) => e.$chipType && _[e.$chipType]};
  ${(e) => e.$categoryType && re(e.$categoryType)};
  ${(e) => !e.$readonly && s`
      padding-right: 0;
    `}
`, Z = c(b).attrs({ icon: E })`
  font-size: 12px;
  width: 12px;
  height: 12px;
`, v = c.div`
  width: 100%;
  display: block;
  ${l};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: initial;
  overflow: hidden;
`, n = c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`, $ = c.div`
  display: flex;
`, t = c.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: initial;
  overflow: hidden;
`, a = c.div`
  display: flex;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ theme: e }) => e.systemColors.grey300};
`, _ = {
  success: s`
    background-color: ${({ theme: e }) => e.systemColors.green100};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.green800} !important;
    }
  `,
  error: s`
    background-color: ${({ theme: e }) => e.systemColors.red100};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.red400};
    }
  `,
  disabled: s`
    background-color: ${({ theme: e }) => e.systemColors.grey100};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.grey600};
    }
  `,
  paused: s`
    background-color: ${({ theme: e }) => e.systemColors.yellow200};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.yellow800};
    }
  `,
  enabled: s`
    background-color: ${({ theme: e }) => e.systemColors.blue100};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.blue800};
    }
  `,
  beta: s`
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

    ${t} {
      ${l};
    }
  `,
  icon: s`
    background-color: ${({ theme: e }) => e.systemColors.blue100};

    ${t} {
      ${l};
      color: ${({ theme: e }) => e.systemColors.blue800};
    }
  `,
  info: s`
    background-color: #e3d6f5;

    ${t} {
      ${l};
      color: #51228f;
    }
  `,
  new: s``,
  pending: s``
}, V = {
  50: s`
    ${n} {
      padding: ${(e) => e.theme.spacing.sp4} ${(e) => e.theme.spacing.sp8};

      ${t} {
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
      }
    }

    ${t} {
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
    }

    ${$} {
      padding-right: ${(e) => e.theme.spacing.sp8} ${(e) => e.theme.spacing.sp16};

      ${a} {
        padding: ${(e) => e.theme.spacing.sp8};
      }
    }
  `,
  100: s`
    ${n} {
      padding: ${(e) => e.theme.spacing.sp8};

      ${t} {
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
      }
    }

    ${t} {
      ${j};
    }

    ${$} {
      padding-right: ${(e) => e.theme.spacing.sp16};

      ${a} {
        padding: ${(e) => e.theme.spacing.sp8};
      }
    }
  `
}, ee = {
  dark: s`
    background-color: ${(e) => e.theme.systemColors.grey800};
    border: 1px solid ${(e) => e.theme.systemColors.grey800};

    ${t} {
      color: ${(e) => e.theme.systemColors.white};
    }

    ${a} {
      color: ${(e) => e.theme.systemColors.grey300};

      &:hover {
        color: ${(e) => e.theme.systemColors.grey200};
      }
    }
  `,
  light: s`
    background-color: ${(e) => e.theme.systemColors.white};
    border: 1px solid ${(e) => e.theme.systemColors.grey800};

    ${t} {
      color: ${(e) => e.theme.systemColors.grey800};
    }

    ${a} {
      color: ${(e) => e.theme.systemColors.grey600};

      &:hover {
        color: ${(e) => e.theme.systemColors.grey800};
      }
    }
  `
}, oe = {
  dark: s`
    background-color: ${(e) => e.theme.systemColors.grey100};
    border: 1px solid ${(e) => e.theme.systemColors.grey100};
    cursor: not-allowed;

    ${n} {
      color: ${(e) => e.theme.systemColors.grey300};

      ${t} {
        color: ${(e) => e.theme.systemColors.grey300};
      }
    }

    ${$} {
      ${a} {
        color: ${(e) => e.theme.systemColors.grey300};
      }
    }
  `,
  light: s`
    background-color: ${(e) => e.theme.systemColors.white};
    border: 1px solid ${(e) => e.theme.systemColors.grey200};
    cursor: not-allowed;

    ${n} {
      color: ${(e) => e.theme.systemColors.grey300};

      ${t} {
        color: ${(e) => e.theme.systemColors.grey300};
      }
    }

    ${$} {
      ${a} {
        color: ${(e) => e.theme.systemColors.grey300};
      }
    }
  `
}, se = {
  secondary: s`
    max-height: 58px;
    background-color: ${(e) => e.theme.systemColors.white};
    border: 1px solid ${(e) => e.theme.systemColors.grey800};

    &:focus-visible {
      button {
        background: ${({ theme: e }) => e.systemColors.grey200};
        border-color: ${({ theme: e }) => e.systemColors.grey200};
      }
    }

    ${n} {
      min-height: 58px;
      padding: ${(e) => e.theme.spacing.sp8} ${(e) => e.theme.spacing.sp24}
        ${(e) => e.theme.spacing.sp8} ${(e) => e.theme.spacing.sp24};

      ${t} {
        ${j};
        color: ${(e) => e.theme.systemColors.black};
      }

      ${v} {
        ${D};
      }
    }

    ${$} {
      padding-left: ${(e) => e.theme.spacing.sp16};
    }
  `
}, te = {
  secondary: s`
    max-height: 58px;
    background-color: ${(e) => e.theme.systemColors.white};
    border: 1px solid ${(e) => e.theme.systemColors.grey200};
    cursor: not-allowed;

    ${n} {
      min-height: 58px;
      color: ${(e) => e.theme.systemColors.grey300};
      padding: ${(e) => e.theme.spacing.sp8} ${(e) => e.theme.spacing.sp24} ${(e) => e.theme.spacing.sp8} ${(e) => e.theme.spacing.sp24};
    }

    ${$} {
      padding-left: ${(e) => e.theme.spacing.sp16};
    }

    ${t} {
      ${j};
      color: ${(e) => e.theme.systemColors.grey300};
    }

    ${v} {
      ${D};
      color: ${(e) => e.theme.dataVisualizationColors.lightPurple};
    }
  }
  `
}, re = (e) => s`
  background-color: ${({ theme: o }) => o.twoToneColors[e].background};

  ${t} {
    ${l};
    color: ${({ theme: o }) => o.twoToneColors[e].text} !important;
  }
`, xe = ({ defaultValue: e = "", defaultDescription: o = "", type: C, category: u, size: w = X, colorType: g, textRichColorType: z, actionContent: f, onChange: d, children: A, onRemove: h, disabled: k, forwardRef: F, className: R, dataTestId: L, ...y }) => {
  var S;
  const [i, x] = p.useState(e), [B, I] = p.useState(o);
  p.useEffect(() => {
    x(e), I(o);
  }, [o, I, e, x]);
  const M = p.useCallback(() => {
    i && e !== i ? d == null || d(i, e) : x(e);
  }, [e, d, i]), P = p.useCallback((m) => {
    m.preventDefault(), i && e !== i && (d == null || d(i, e));
  }, [e, d, i]), q = Q({
    Enter: P
  }), G = p.useCallback((m) => x(m.currentTarget.value), []);
  return r.jsxs(Y, { ref: F, ...y, $chipType: C, $categoryType: u, $size: w, $colorType: g, $textRichChipColorType: z, $disabled: k, $readonly: !h, $actionContent: !!f, $onRemove: !!h, "data-testid": L, className: R, children: [r.jsxs(n, { children: [y.editable ? r.jsx(t, { children: r.jsx(W, { placeholder: y.placeholder, value: i, size: (S = i == null ? void 0 : i.toString()) == null ? void 0 : S.length, onBlur: M, onKeyDown: q, onChange: G }) }) : r.jsx(t, { children: A || i || y.placeholder }), B && r.jsx(v, { children: B })] }), r.jsx(ne, { onRemove: h ? () => h(i) : void 0, disabled: k, colorType: g, textRichColorType: z }), f && !h && r.jsx($, { children: r.jsx(N, { items: f.map((m, H) => r.jsx(ie, { children: m.map((T, J) => r.jsxs(ce, { onClick: T.nodeAction, children: [r.jsx(le, { children: r.jsx(b, { icon: T.nodeIcon }) }), T.nodeText] }, J)) }, H)), children: r.jsx(K, { disabled: k, buttonType: "icon", size: "100", icon: r.jsx(b, { icon: O, size: "lg" }) }) }) })] });
}, ie = c.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`, le = c.div`
  padding-right: ${(e) => e.theme.spacing.sp16};
`, ce = c(N.Item)`
  min-width: 111px;
  min-height: 40px;
`, ne = ({ onRemove: e, disabled: o, colorType: C, textRichColorType: u, className: w }) => e == null ? null : r.jsx($, { className: w, children: r.jsxs(a, { onClick: (g) => {
  g.stopPropagation(), e == null || e();
}, "data-testid": "remove-button", disabled: o, children: [C && r.jsx(Z, {}), u && r.jsx(K, { disabled: o, buttonType: "icon", size: "100", icon: r.jsx(b, { icon: E }) })] }) });
export {
  ne as B,
  a as I,
  xe as a
};
