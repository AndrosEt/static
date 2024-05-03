import { j as s, a as i, g as $ } from "./_JqgLpqe.js";
import { u as n, a } from "./styled-components-sg3HbxYZ.js";
import { U as f } from "./CgjLaZSK.js";
import { D as h } from "./DgjXrPJs.js";
import { N as l } from "./DXDnZb_T.js";
import { m as x } from "./ESx2WVJg.js";
const u = ({ coupon: e, label: o, data: t }) => s.jsxs(j, { children: [e && s.jsx(b, { dangerouslySetInnerHTML: { __html: e } }), o && s.jsx(C, { $small: !!e, $data: t, children: o }), (t == null ? void 0 : t.proration) && s.jsx(y, { children: t == null ? void 0 : t.proration })] }), j = n.div`
  margin-top: ${(e) => e.theme.spacing.sp16};
  gap: ${(e) => e.theme.spacing.sp4};
`, b = n.div`
  ${i};
  color: ${(e) => e.theme.systemColors.black};
  text-align: center;

  span {
    font-weight: bold;
  }
`, y = n.div`
  ${i};
  text-align: center;
  padding-top: ${(e) => e.theme.spacing.sp16};
`, C = n.div`
  ${i};
  text-align: center;
  margin-bottom: ${(e) => {
  var o;
  return (o = e.$data) != null && o.proration ? "0" : "18px";
}};

  ${(e) => e.$small && a`
      ${$};
      margin-bottom: ${(o) => o.theme.spacing.sp32};
    `}
`, z = ({ isNewUi: e, coupon: o, data: t, modalProps: p, footerJustifyContent: m, onAccept: r, onDecline: c }) => {
  const g = o ? t == null ? void 0 : t.footer.labelWithCoupon : t == null ? void 0 : t.footer.label;
  return s.jsx(h, { ...p, size: "100", title: t == null ? void 0 : t.title, titleAlign: "center", footer: s.jsx(s.Fragment, { children: t && s.jsxs(D, { $footerJustifyContent: m, $data: t, children: [s.jsx(l, { buttonType: t.proration ? "secondary" : "text", size: "200", onClick: c, children: t.footer.declineButton }), s.jsx(l, { "data-testid": "acceptButton", buttonType: "primary", size: "200", onClick: () => r == null ? void 0 : r({}), children: t.footer.acceptButton })] }) }), children: t && s.jsxs(s.Fragment, { children: [t.subtitle && s.jsx(v, { noFeatures: t.plans.length === 0, children: t.subtitle }), s.jsx(B, { children: s.jsx(f, { isNewUi: e, plans: t.plans, features: t.features, featuresTitle: t.featuresTitle }) }), s.jsx(u, { label: g, coupon: o, data: t })] }) });
}, B = n.div`
  margin-bottom: ${(e) => e.theme.spacing.sp8};
  max-width: calc(100% - 1px);
`, v = n.p`
  ${i};
  text-align: center;
  color: ${({ theme: e }) => e.systemColors.grey600};
  margin-bottom: ${(e) => e.noFeatures ? 0 : e.theme.spacing.sp24};
  margin-top: ${(e) => e.theme.spacing.sp8};
`, D = n.div`
  display: flex;
  align-items: center;
  justify-content: ${(e) => e.$footerJustifyContent ? e.$footerJustifyContent : "center"};
  margin-top: ${(e) => e.theme.spacing.sp8};
  gap: ${(e) => {
  var o;
  return (o = e.$data) != null && o.proration ? e.theme.spacing.sp16 : e.theme.spacing.sp24;
}};

  & > ${l} {
    margin: 0 !important;
  }

  ${x.mobileBefore} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    gap: ${(e) => e.theme.spacing.sp16};
  }
`;
export {
  u as A,
  z as U
};
