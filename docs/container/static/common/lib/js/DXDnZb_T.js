import { c as k, g as v, a, j as n } from "./_JqgLpqe.js";
import { r as S } from "./react-D5yUVy0K.js";
import { a as e, u as s, h as y } from "./styled-components-sg3HbxYZ.js";
const w = e`
  &:focus-visible {
    box-shadow:
      0 0 0 2px ${({ theme: o }) => o.systemColors.white},
      0 0 0 4px ${({ theme: o }) => o.systemColors.blue600};
  }
`, z = e`
  outline: 2px solid transparent;
  outline-offset: -2px;
`, $ = e`
  outline-color: ${({ theme: o }) => o.systemColors.blue600};
`, B = e`
  outline-color: ${({ theme: o }) => o.systemColors.red400};
`, U = a, b = "100", T = {
  50: e`
    min-height: 24px;
  `,
  100: e`
    min-height: 32px;
  `,
  200: e`
    min-height: 40px;
  `,
  400: e`
    min-height: 56px;
  `
}, j = {
  50: v,
  100: a,
  200: a,
  400: a
}, I = e`
  @supports (-moz-appearance: none) {
    scrollbar-color: ${({ theme: o }) => `${o.systemColors.grey400} "transparent"`};
    scrollbar-width: thin;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    &:not(.non-scroll-styles)::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }

    &:not(.non-scroll-styles)::-webkit-scrollbar-track {
      background: transparent;
      width: 100%;
    }

    &:not(.non-scroll-styles)::-webkit-scrollbar-thumb {
      border: ${(o) => o.theme.spacing.sp4} solid transparent;
      background-clip: padding-box;
      box-sizing: border-box;
      border-radius: 100px;
      background-color: rgba(103, 132, 162, 0.6);
      min-height: 50px;
    }

    &:not(.non-scroll-styles)::-webkit-scrollbar-thumb:hover {
      background-color: ${(o) => o.theme.systemColors.grey400};
    }

    &:not(.non-scroll-styles)::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
`, N = e`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 32px;

  ${(o) => T[o.$size || b]};
  ${(o) => j[o.$size || b]};
  color: ${(o) => o.theme.systemColors.grey800};

  border-radius: 6px;
  background-color: #fff;
  border: 1px solid ${(o) => o.theme.systemColors.grey400};

  ${z};
  transition:
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    outline-color 0.2s ease;

  ${(o) => !o.$disabled && !o.$edited && e`
      &:hover {
        border-color: ${(r) => r.theme.systemColors.grey600};
      }
    `}
  ${(o) => o.$active && e`
      ${$};

      &:hover {
        border-color: ${({ theme: r }) => r.systemColors.blue600};
      }
    `}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${({ $disabled: o, theme: r }) => o ? e`
          background: ${r.systemColors.grey200};
          border-color: ${r.systemColors.grey200};
          box-shadow: none;
        ` : e`
          &:focus,
          &:focus-within {
            ${$};
          }
        `}
  input, select, textarea {
    color: ${(o) => o.theme.systemColors.grey800};

    &::placeholder {
      color: ${(o) => o.theme.systemColors.grey300};
    }

    ${I};
  }

  ${({ $invalid: o, theme: r }) => o && e`
      background-color: ${r.systemColors.red100};
      border-color: ${r.systemColors.red400};

      &:hover {
        border-color: ${r.systemColors.red400};
      }

      &:focus,
      &:focus-within {
        border-color: ${(l) => l.theme.systemColors.red400};
        ${B};
      }

      input,
      select {
        ::placeholder {
          color: ${r.systemColors.red400};
        }
      }
    `}

  ${(o) => o.$edited && e`
      background-color: ${o.theme.systemColors.blue50};
      border-color: ${o.theme.systemColors.blue600};
    `}

  ${(o) => o.$locked && e`
      border-color: ${o.theme.systemColors.grey200};

      &:hover {
        border-color: ${o.theme.systemColors.grey200};
      }
    `}
`, V = s.div`
  ${N};
`, x = e`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  display: block;
  appearance: none;
  padding: 0;
  outline: none;
  font: inherit;
  min-width: 2px;
  color: currentColor;
  caret-color: currentColor;

  ::placeholder {
    font: inherit;
  }
`, X = s.input`
  ${x};

  ${({ isClickable: o }) => o && e`
      cursor: pointer;
    `}

  ${({ disabled: o, isClickable: r }) => o && !r && e`
      cursor: not-allowed;
    `}
`;
s.textarea`
  ${x};
`;
const Y = s.p`
  ${k};
  color: ${(o) => o.theme.systemColors.red400};
  margin: ${(o) => o.theme.spacing.sp8} 0 0;
  padding: 0;
`, R = y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, _ = y`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
`, u = s.span`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.15em solid currentColor;
  box-sizing: border-box;
  animation:
    ${_} 1s linear alternate infinite,
    ${R} 0.8s linear infinite;
`, E = "primary", F = S.forwardRef((o, r) => {
  const { icon: l, rightIcon: i, children: d, buttonType: G, size: H, loading: g, ...m } = o;
  return n.jsxs("button", { ...m, onClick: g ? void 0 : m.onClick, ref: r, children: [l ? n.jsx(t, { children: l }) : null, d, i ? n.jsx(p, { children: i }) : null, g && n.jsx(c, { children: n.jsx(u, {}) })] });
}), c = s.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  opacity: 1;
`, t = s.div``, O = s(t)``, p = s(t)``, W = s(F).attrs(({ buttonType: o, size: r, theme: l, loading: i, ...d }) => ({
  $buttonType: o || E,
  $size: r || b,
  $loading: i || !1,
  ...d
}))`
  font: inherit;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 700;
  border-width: 1px;
  border-style: solid;
  line-height: 1em;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  outline: none !important;
  ${w};
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  ${t} {
    flex-shrink: 0;
    margin-right: ${(o) => o.buttonType === "icon" ? "0" : o.theme.spacing.sp8};
    font-size: 16px;
  }

  ${p} {
    margin-left: ${(o) => o.buttonType === "icon" ? "0" : o.theme.spacing.sp8};
    margin-right: 0;
  }

  ${(o) => o.$buttonType === "icon" ? M[o.$size] : P[o.$size]};
  ${(o) => L[o.$buttonType]};
  ${(o) => q(o.$size)[o.$buttonType]};

  & ${c} {
    ${(o) => A[o.$buttonType]};
  }

  ${(o) => o.$loading && e`
      *:not(${c}, ${u}) {
        opacity: 0;
      }

      color: rgba(0, 0, 0, 0);

      &:hover,
      &:focus,
      &:active,
      &:focus-visible {
        color: rgba(0, 0, 0, 0);
      }
    `};

  ${(o) => o.disabled && e`
      cursor: not-allowed;
    `};

  ${(o) => o.$isPulsing && e`
      overflow: visible;
      box-shadow: 0 0 0 0 rgba(10, 111, 232, 0.5);
      animation: ${D} 1.5s linear infinite;
    `}
`, Z = Object.assign(W, {
  ButtonIcon: t,
  LeftIcon: O,
  RightIcon: p,
  LoaderWrapper: c,
  Spinner: u
}), h = e`
  color: ${({ theme: o }) => o.systemColors.grey600};

  &:hover,
  &:focus,
  &:active,
  &:focus-visible {
    color: ${({ theme: o }) => o.systemColors.grey600};
  }

  &:disabled {
    color: ${({ theme: o }) => o.systemColors.grey300};
  }
`, C = e`
  color: ${({ theme: o }) => o.systemColors.blue600};

  &:hover,
  &:focus,
  &:active,
  &:focus-visible {
    color: ${({ theme: o }) => o.systemColors.blue800};
  }

  &:disabled {
    color: ${({ theme: o }) => o.systemColors.grey300};
  }
`, A = {
  primary: e`
    color: ${({ theme: o }) => o.systemColors.white};

    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
      color: ${({ theme: o }) => o.systemColors.white};
    }

    &:disabled {
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  icon: h,
  cancel: e`
    color: ${({ theme: o }) => o.systemColors.black};

    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
      color: ${({ theme: o }) => o.systemColors.black};
    }

    &:disabled {
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  secondary: C,
  tertiary: h,
  text: C
}, L = {
  primary: e`
    //State: default
    background: ${({ theme: o }) => o.systemColors.blue600};
    border-color: ${({ theme: o }) => o.systemColors.blue600};
    color: ${({ theme: o }) => o.systemColors.white};
    //State: hover, focus
    &:hover,
    &:focus {
      background: ${({ theme: o }) => o.systemColors.blue800};
      border-color: ${({ theme: o }) => o.systemColors.blue800};
      color: ${({ theme: o }) => o.systemColors.white};
    }

    //State: pressed
    &:active {
      background: ${({ theme: o }) => o.systemColors.blue900};
      border-color: ${({ theme: o }) => o.systemColors.blue900};
    }

    //State: keyboard focus
    &:focus-visible {
      background: ${({ theme: o }) => o.systemColors.blue800};
      border-color: ${({ theme: o }) => o.systemColors.blue800};
      color: ${({ theme: o }) => o.systemColors.white};
    }

    //State: disabled
    &:disabled {
      background: ${({ theme: o }) => o.systemColors.grey200};
      border-color: ${({ theme: o }) => o.systemColors.grey200};
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  secondary: e`
    //State: default
    background: transparent;
    color: ${({ theme: o }) => o.systemColors.blue600};
    border-color: ${({ theme: o }) => o.systemColors.blue600};
    border-width: 1px;
    //State: hover, focus
    &:hover,
    &:focus {
      border-color: ${({ theme: o }) => o.systemColors.blue800};
      color: ${({ theme: o }) => o.systemColors.blue800};
    }

    //State: pressed
    &:active {
      border-color: ${({ theme: o }) => o.systemColors.blue900};
      color: ${({ theme: o }) => o.systemColors.blue900};
    }

    //State: keyboard focus
    &:focus-visible {
      border-color: ${({ theme: o }) => o.systemColors.blue800};
      color: ${({ theme: o }) => o.systemColors.blue800};
    }

    //State: disabled
    &:disabled {
      border-color: ${({ theme: o }) => o.systemColors.grey200};
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  tertiary: e`
    //State: default
    background: ${({ theme: o }) => o.systemColors.grey100};
    border-color: ${({ theme: o }) => o.systemColors.grey100};
    color: ${({ theme: o }) => o.systemColors.grey600};
    //State: hover, focus
    &:hover,
    &:focus {
      background: ${({ theme: o }) => o.systemColors.grey200};
      border-color: ${({ theme: o }) => o.systemColors.grey200};
    }

    //State: pressed
    &:active {
      background: ${({ theme: o }) => o.systemColors.grey300};
      border-color: ${({ theme: o }) => o.systemColors.grey300};
    }

    //State: keyboard focus
    &:focus-visible {
      background: ${({ theme: o }) => o.systemColors.grey200};
      border-color: ${({ theme: o }) => o.systemColors.grey200};
    }

    //State: disabled
    &:disabled {
      background: ${({ theme: o }) => o.systemColors.grey200};
      border-color: ${({ theme: o }) => o.systemColors.grey200};
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  cancel: e`
    //State: default
    background: transparent;
    border-color: transparent;
    color: ${({ theme: o }) => o.systemColors.black};
    //State: keyboard focus
    &:focus-visible {
      box-shadow: 0 0 0 2px ${({ theme: o }) => o.systemColors.blue600};
    }

    //State: disabled
    &:disabled {
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  text: e`
    //State: default
    background: transparent;
    border-color: transparent;
    color: ${({ theme: o }) => o.systemColors.blue600};
    //State: hover, focus
    &:hover,
    &:focus {
      color: ${({ theme: o }) => o.systemColors.blue800};
    }

    //State: pressed
    &:active {
      color: ${({ theme: o }) => o.systemColors.blue900};
    }

    //State: keyboard focus
    &:focus-visible {
      color: ${({ theme: o }) => o.systemColors.blue800};
      box-shadow: 0 0 0 2px ${({ theme: o }) => o.systemColors.blue600};
    }

    //State: disabled
    &:disabled {
      color: ${({ theme: o }) => o.systemColors.grey300};
    }
  `,
  icon: e`
    //State: default
    background: transparent;
    border-color: transparent;
    color: ${({ theme: o }) => o.systemColors.grey600};
    padding: 0;
    display: flex;
    //State: hover, focus
    &:hover,
    &:focus {
      background: ${({ theme: o }) => o.systemColors.grey200};
    }

    //State: pressed
    &:active {
      background: ${({ theme: o }) => o.systemColors.grey300};
    }

    //State: keyboard focus
    &:focus-visible {
      background: ${({ theme: o }) => o.systemColors.grey200};
    }

    //State: disabled
    &:disabled {
      color: ${({ theme: o }) => o.systemColors.grey300};
      background: transparent;
    }
  `
}, M = {
  50: e`
    height: 24px;
    width: 24px;
  `,
  100: e`
    height: 32px;
    width: 32px;
  `,
  200: e`
    height: 40px;
    width: 40px;

    ${t} {
      font-size: 20px;
    }
  `,
  400: e`
    height: 40px;
    width: 40px;

    ${t} {
      font-size: 20px;
    }
  `
}, P = {
  50: e`
    min-height: 24px;
    padding: 4px 6px;
    font-size: 12px;
  `,
  100: e`
    min-height: 32px;
    padding: 6px 8px;
    font-size: 14px;
  `,
  200: e`
    min-height: 40px;
    padding: 8px 16px;
    font-size: 16px;
  `,
  400: e`
    min-height: 56px;
    padding: 8px 24px;
    font-size: 18px;

    ${t} {
      font-size: 20px;
    }
  `
}, q = (o) => ({
  cancel: e`
    ${f[o]}
  `,
  text: e`
    ${f[o]}
    padding-left: 0;
    padding-right: 0;
  `,
  icon: e``,
  primary: e``,
  secondary: e``,
  tertiary: e``
}), f = {
  50: e`
    padding-left: 4px;
    padding-right: 4px;
  `,
  100: e`
    padding-left: 4px;
    padding-right: 4px;
  `,
  200: e`
    padding-left: 4px;
    padding-right: 4px;
  `,
  400: e`
    padding-left: 8px;
    padding-right: 8px;
  `
}, D = y`
  0% {
    box-shadow: 0 0 0 0 rgba(10, 111, 232, 0.5);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(10, 111, 232, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(10, 111, 232, 0);
  }
`;
export {
  Y as I,
  Z as N,
  U as a,
  x as b,
  $ as c,
  b as d,
  X as e,
  j as f,
  B as g,
  E as h,
  V as i,
  w as k,
  N as n,
  z as o,
  I as s
};
