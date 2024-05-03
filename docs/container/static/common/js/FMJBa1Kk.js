import { j as t, a as A } from "./_JqgLpqe.js";
import { r as m } from "./react-D5yUVy0K.js";
import { u as E } from "./styled-components-sg3HbxYZ.js";
import { g as v, r as C } from "./CoK9UKSO.js";
import { s as q } from "./4hWQfquz.js";
import { u as S } from "./BATov6ge.js";
import { l as M, s as N } from "./CAsXS06k.js";
import { c as _ } from "./BsRJmYuf.js";
import { l as w } from "./DzGyC9Eu.js";
import { m as D } from "./ESx2WVJg.js";
import { N as H } from "./DXDnZb_T.js";
const $ = _(() => ({
    currentAndRecommended: null
})), T = w($, "currentAndRecommended", (e, n) => v(e, n == null ? void 0 : n.signal)), I = ({ data: e, onClick: n }) => {
    const { t: o } = S(), [l, c, s, i] = $((r) => {
        var a, d, p, u, f, g, B, x, R, y, P, U, b, j, k;
        return [
            (u = (p = (d = (a = r.currentAndRecommended) == null ? void 0 : a.data) == null ? void 0 : d.recommendation) == null ? void 0 : p.offer) == null ? void 0 : u.key,
            (x = (B = (g = (f = r.currentAndRecommended) == null ? void 0 : f.data) == null ? void 0 : g.recommendation) == null ? void 0 : B.offer) == null ? void 0 : x.action,
            (U = (P = (y = (R = r.currentAndRecommended) == null ? void 0 : R.data) == null ? void 0 : y.recommendation) == null ? void 0 : P.plan) == null ? void 0 : U.title,
            (k = (j = (b = r.currentAndRecommended) == null ? void 0 : b.data) == null ? void 0 : j.recommendation) == null ? void 0 : k.queryStringParameters
        ];
    });
    m.useEffect(() => (e != null && e.tool && T.action({
        location: M[e == null ? void 0 : e.tool] ?? (e == null ? void 0 : e.tool),
        isButton: !0
    }), () => {
        T.clear();
    }), [e == null ? void 0 : e.tool]);
    const h = m.useCallback(() => {
        Promise.all([n == null ? void 0 : n()]).finally(() => {
            C({
                key: l,
                action: c,
                queryStringParameters: i
            });
        });
    }, [n, l, c, i]);
    return t.jsx(H, { loading: !s, disabled: !s, onClick: h, children: o("currentAndRecommended.upsellButton.title", {
            recommendedPlanTitle: s || ""
        }) });
}, ee = m.memo(({ uses: e }) => {
    const { t: n } = S(), o = "blackBoxProducts";
    return t.jsxs(K, { children: [t.jsx(L, { dangerouslySetInnerHTML: {
                __html: n("currentAndRecommended.upsellBanner.experimentText", {
                    uses: e
                })
            } }), t.jsx(I, { data: { tool: o }, onClick: () => q({
                name: "Upsell Banner Clicked",
                properties: {
                    tool: N[o]
                }
            }) })] });
}), K = E.div`
  background-color: ${({ theme: e }) => e.systemColors.blue50};
  padding: ${({ theme: e }) => e.spacing.sp12};
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 -16px;

  ${D.desktop} {
    margin: 0 -40px;
  }
`, L = E.div`
  ${A};
  margin-right: ${({ theme: e }) => e.spacing.sp24};
  color: ${({ theme: e }) => e.systemColors.black};
`;
export {
    I as R,
    ee as U
};
