import { j as s, g as c, h as m, v as j, a as L, c as B, k as E } from "./_JqgLpqe.js";
import { aS as F, i as P, n as g } from "./CZVHOlcu.js";
import { F as x } from "./Cg-oD5Fc.js";
import { u as t, a as d } from "./styled-components-sg3HbxYZ.js";
import { u as A } from "./BATov6ge.js";
import { u as R } from "./DWlRc17i.js";
import { a as T, m as n } from "./ESx2WVJg.js";
const oe = ({ isNewUi: e, plans: i, features: k, featuresTitle: M, hideBestLabel: S = !1, bestLabel: z, tableOnMobile: a = !1 }) => {
  const { t: r } = A(), b = R(T.mobile) || a;
  return s.jsxs(D, { children: [s.jsx("thead", { children: s.jsxs(y, { children: [i.length !== 0 && s.jsx(f, { $tableOnMobile: a, children: s.jsx(q, { $tableOnMobile: a, children: M || r("upsellModal.featuresTitle") }) }), b && i.map((o, h) => s.jsxs(f, { $highlight: o.isBest, $hideBestLabel: S, $bestLabel: o.discount ? r("upsellModal.discount", { discount: o.discount }) : z || r("upsellModal.bestLabel"), $tableOnMobile: a, $isEstablishedSellers: o.isEstablishedSellers, children: [o.isBest ? s.jsxs(s.Fragment, { children: [s.jsxs(v, { children: [" ", s.jsx(W, { children: r("upsellModal.establishedSellers") })] }), s.jsx(C, { children: o.label })] }) : s.jsx(C, { children: o.label }), o.price ? s.jsx(K, { children: o.price }) : null, o.period && o.price && s.jsx(N, { children: o.period === "year" ? r("currentAndRecommended.upsellModal.billPeriodAnnually") : r("currentAndRecommended.upsellModal.billPeriodMonthly") })] }, h))] }) }), s.jsx("tbody", { children: k.map((o, h) => s.jsxs(y, { children: [s.jsxs(X, { children: [s.jsx(G, { children: o.title }), o.subtitle && s.jsx(J, { children: o.subtitle })] }), b && i.map((l) => {
    var $, u;
    return s.jsx(w, { $highlight: l.isBest, "data-highlight": l.isBest, children: l.isBest ? s.jsx(O, { children: ((u = o.values) == null ? void 0 : u[l.id]) || (e ? s.jsx(p, { icon: g }) : s.jsx(U, { isControlCenter: l.isEstablishedSellers, children: s.jsx(p, { icon: g }) })) }) : s.jsx(I, { children: (($ = o.values) == null ? void 0 : $[l.id]) || (e ? s.jsx(V, { icon: F }) : s.jsx(H, { icon: P })) }) }, l.id);
  })] }, h)) })] });
}, D = t.table`
  width: 100%;
  border-collapse: collapse;
`, I = t.div`
  ${c};
  color: ${({ theme: e }) => e.systemColors.grey600};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${n.mobile} {
    min-width: 160px;
  }
`, V = t(x)`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(e) => e.theme.systemColors.grey600};
`, H = t(x)`
  font-size: 20px;
  color: ${(e) => e.theme.systemColors.grey300};
`, O = t.div`
  ${m};
  color: ${(e) => e.theme.systemColors.black};

  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${n.mobile} {
    min-width: 160px;
  }
`, p = t(x)`
  font-size: 20px;
`, U = t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(e) => e.isControlCenter ? e.theme.systemColors.blue600 : e.theme.systemColors.blue100};

  ${p} {
    color: ${({ isControlCenter: e, theme: i }) => e ? i.systemColors.white : i.systemColors.blue600};
  }
`, y = t.tr`
  vertical-align: middle;

  &:last-child {
    [data-highlight="true"] {
      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: -1px;
        bottom: -8px;
        left: -1px;
        right: -1px;
        pointer-events: none;

        border-left: 2px solid ${({ theme: e }) => e.systemColors.blue600};
        border-right: 2px solid ${({ theme: e }) => e.systemColors.blue600};
        border-bottom: 2px solid ${({ theme: e }) => e.systemColors.blue600};
        border-top: none;
        border-radius: 0 0 6px 6px;
      }
    }
  }
`, v = t.div`
  display: none;
  justify-content: center;
  position: relative;
  height: 0;
  top: -32px;
  z-index: 100;
`, W = t.div`
  ${j};
  color: ${(e) => e.theme.systemColors.blue800};
  padding: 4px 8px;
  background: ${(e) => e.theme.systemColors.blue100};
  border-radius: 12px;
  display: flex;
  min-height: 24px;
`, f = t.th`
  vertical-align: top;

  ${(e) => e.$tableOnMobile && d`
      padding-top: ${e.$hideBestLabel ? "0" : "40px"};
    `}
  ${n.mobile} {
    padding-top: ${(e) => e.$hideBestLabel ? "0" : "40px"};
  }

  ${(e) => e.$highlight && d`
      position: relative;

      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: 6px;
        bottom: -1px;
        left: -1px;
        right: -1px;

        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        pointer-events: none;
      }

      &::after {
        content: "${e.$bestLabel}";
        position: absolute;
        z-index: 1;
        left: -1px;
        right: -1px;
        top: 0;

        ${L};
        color: #fff;

        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        background: ${({ theme: i }) => i.systemColors.blue600};

        ${e.$hideBestLabel && d`
          content: "";
          height: 6px;
          border: 2px solid ${e.theme.systemColors.blue600};
          border-bottom: none;
          background: none;
        `}
      }
    `}
  ${(e) => e.$isEstablishedSellers && d`
      ${v} {
        display: flex;
      }

      &::after {
        ${j};
        background-color: ${e.theme.systemColors.white};
        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        border-top: 2px solid ${e.theme.systemColors.blue600};
        content: "";
      }
    `}
`, w = t.td`
  padding: 16px 0;
  border-bottom: 1px solid #d9e0e8;

  ${(e) => e.$highlight && d`
      position: relative;

      &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;

        border-left: 2px solid ${e.theme.systemColors.blue600};
        border-right: 2px solid ${e.theme.systemColors.blue600};
        pointer-events: none;
      }
    `}
`, X = t(w)`
  width: 100%;
`, q = t.div`
  ${c};

  text-align: ${(e) => e.$tableOnMobile ? "left" : "center"};

  ${n.mobile} {
    text-align: left;
  }
`, G = t.div`
  ${m};
  color: ${({ theme: e }) => e.systemColors.black};
`, J = t.div`
  ${B};
  margin-top: ${(e) => e.theme.spacing.sp4};

  ${n.mobile} {
    ${c};
    margin-top: ${(e) => e.theme.spacing.sp4};
  }

  max-width: 250px;
`, C = t.div`
  ${E};
  color: ${({ theme: e }) => e.systemColors.black};
  text-align: center;
  white-space: nowrap;
  padding: 0 ${(e) => e.theme.spacing.sp8};

  ${n.mobile} {
    ${m};
    white-space: nowrap;
    padding: 0 ${(e) => e.theme.spacing.sp8};
    color: ${({ theme: e }) => e.systemColors.black};
  }
`, K = t.div`
  ${c};
  color: ${({ theme: e }) => e.systemColors.grey800};
  text-align: center;
`, N = t.div`
  ${B};
  text-align: center;
`;
export {
  oe as U
};
