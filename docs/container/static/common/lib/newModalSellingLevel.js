import { m as b, p as L, l as q, a as w, f as I, g as E, d as v, j as n, b as M } from "../js/_JqgLpqe.js";
import { P as T } from "../js/CiS8auFy.js";
import { d as V } from "../js/CZVHOlcu.js";
import { F as B } from "../js/Cg-oD5Fc.js";
import { r as S } from "../js/react-D5yUVy0K.js";
import { u as t, a as x } from "../js/styled-components-sg3HbxYZ.js";
import { s as r } from "../js/BzsJhSng.js";
import { u as z } from "../js/BATov6ge.js";
import { g as N, t as W } from "../js/CDqh14Zt.js";
import { c as _ } from "../js/BsRJmYuf.js";
import { b as u } from "../js/VvgyOqy6.js";
import { g as C } from "../js/CxU1FO_U.js";
import { a as m } from "../js/CjEUPi3A.js";
import { m as a } from "../js/ESx2WVJg.js";
import { N as j } from "../js/DXDnZb_T.js";
import { D as g } from "../js/DgjXrPJs.js";
import { S as H } from "../js/CsBp_4BY.js";
import { c as P } from "../js/B5xUyCsU.js";
const U = "https://re-cdn.helium10.com/common/lib/assets/xCqGPWVT.png", D = () => u({
  url: C(b + "/api/v1/customers/one-time-action/modalSellingLevel", {}),
  method: "GET",
  withCredentials: !0
}), y = (e) => e.results, O = "/api/v1/customers/segment-track", F = (e) => u({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  url: O,
  withCredentials: !0,
  params: {
    name: "Onboarding Step Completed",
    properties: {
      source: "modal",
      amazonSellerType: e
    }
  }
}), A = () => u({
  url: C(b + "/api/v1/customers/one-time-action", {}),
  method: "POST",
  withCredentials: !0,
  params: { key: "modalSellingLevel" }
}), l = _((e, s) => ({
  item: null,
  setItem: (i) => e({ item: i }),
  ...m(e, s, "getUserInfoRequest", async (i) => N().then(W)),
  ...m(e, s, "getVisibleRequest", async (i) => D().then(y)),
  ...m(e, s, "sendVisibleRequest", async (i) => A().then(y)),
  ...m(e, s, "sendSegmentEventRequest", async (i) => F(i), {
    initialStatus: "init",
    fulfilledReaction: () => {
      s().sendVisibleRequest.action();
    }
  })
})), G = () => {
  const [e, s, i] = l((p) => {
    var d;
    return [
      (d = p.getVisibleRequest) == null ? void 0 : d.atom.status,
      p.getVisibleRequest.atom.content,
      p.getVisibleRequest.action
    ];
  }, r), c = l((p) => {
    var d;
    return (d = p.sendVisibleRequest.atom.content) == null ? void 0 : d.seen;
  }, r);
  return S.useEffect(() => {
    i();
  }, [i]), {
    isLoaded: e === "loaded",
    isSeen: c ?? (s == null ? void 0 : s.seen) ?? !0
  };
};
t.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Q = t.div`
  display: flex;
  flex: 1;
`, J = t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;

  ${a.desktop} {
    background-position: ${(e) => `${e.theme.spacing.sp24} ${e.theme.spacing.sp24}`};
  }
`, K = t.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  padding: ${(e) => `${e.theme.spacing.sp32}`};
  box-sizing: initial;
`, X = t.div`
  display: none;

  ${a.desktop} {
    width: 440px;
    display: flex;
    justify-content: center;

    ${(e) => e.$image ? x`
            background: url(${e.$image}) no-repeat bottom left;
            background-size: cover;
          ` : x`
            background: ${(s) => s.theme.systemColors.grey100};
          `}
    ${a.largeDesktop} {
      width: 535px;
    }

`, k = t.h1`
  ${L};
  margin-bottom: ${(e) => e.theme.spacing.sp16};

  ${a.desktop} {
    ${q};
    margin-bottom: ${(e) => e.theme.spacing.sp16};
  }
`;
t(k)`
  ${a.desktop} {
    margin-bottom: ${(e) => e.theme.spacing.sp32};
  }
`;
const Y = t.p`
  ${w};
  margin-bottom: ${(e) => e.theme.spacing.sp24};

  ${a.desktop} {
    margin-bottom: ${(e) => e.theme.spacing.sp24};
  }
`, Z = t.p`
  ${I};
`, ee = t.div`
  margin-top: ${(e) => e.theme.spacing.sp24};
  max-width: 600px;

  ${a.desktop} {
    max-width: 460px;
  }
`;
t.div`
  cursor: pointer;

  & + & {
    margin-top: ${(e) => e.theme.spacing.sp16};
  }
`;
t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(e) => e.theme.spacing.sp16};
  border-top: ${(e) => `1px solid  ${e.theme.systemColors.grey200}`};

  ${a.desktop} {
    padding: ${(e) => `${e.theme.spacing.sp16} ${e.theme.spacing.sp32}`};
  }
`;
t.div`
  ${E};
  position: absolute;
  top: 29px;
  left: 52px;

  ${a.desktop} {
    ${v};
    color: ${(e) => e.theme.systemColors.grey600};
    margin-bottom: ${(e) => e.theme.spacing.sp12};
    position: relative;
    top: 0;
    left: 0;
  }
`;
t(j)`
  margin-bottom: ${(e) => e.theme.spacing.sp32};

  ${a.desktop} {
    display: none;
  }
`;
t.div`
  ${v};
  color: ${(e) => e.theme.systemColors.grey600};

  span:not([data-purpose="desktop"]) {
    font-weight: 800;
  }

  span[data-purpose="desktop"] {
    display: none;
  }

  ${a.desktop} {
    span[data-purpose="desktop"] {
      display: inline;
    }
  }
`;
t.div`
  border-radius: 6px;
  border: 1px solid ${({ theme: e }) => e.systemColors.grey200};
  padding: ${({ theme: e }) => `${e.spacing.sp16} ${e.spacing.sp24}`};
  margin: ${(e) => `${e.theme.spacing.sp24} 0 ${e.theme.spacing.sp16}`};

  ${a.laptop} {
    display: flex;
  }

  ${a.desktop} {
    margin-bottom: ${(e) => e.theme.spacing.sp64};
  }
`;
const te = t(k)`
  span {
    text-transform: capitalize;
  }
`, se = () => {
  const { isLoaded: e, isSeen: s } = G();
  return n.jsx(re, { lockBody: !0, hasOverlay: !0, zIndex: 1e3, position: "center", size: "400", isOpen: e && s === !1, children: n.jsx(oe, {}) });
}, ne = [
  "notSelling",
  "aggregator",
  "consultant",
  "agency",
  "brand",
  "seller"
], oe = () => {
  const { t: e } = z(), s = l((o) => o.getUserInfoRequest.action, r), i = l((o) => o.item, r), c = l((o) => o.setItem, r), p = l((o) => {
    var $, f;
    return (f = ($ = o.getUserInfoRequest.atom) == null ? void 0 : $.content) == null ? void 0 : f.userName;
  }, r), d = l((o) => o.sendSegmentEventRequest.action, r), h = l((o) => o.sendSegmentEventRequest.atom.status, r);
  return S.useEffect(() => {
    s();
  }, [s]), n.jsxs(Q, { children: [n.jsxs(J, { children: [n.jsxs(K, { children: [n.jsx(te, { dangerouslySetInnerHTML: {
    __html: e("modalSellingLevel.header", {
      name: p || ""
    })
  } }), n.jsx(Y, { children: e("modalSellingLevel.subHeader") }), n.jsx(le, { children: e("modalSellingLevel.question") }), n.jsx(ee, { children: n.jsx(ae, { children: ne.map((o) => n.jsx(R, { onClick: () => c(o), children: n.jsx(pe, { active: o === i, padding: "normal", dangerouslySetInnerHTML: {
    __html: e(`modalSellingLevel.experience.${o}`)
  } }, o) }, o)) }) })] }), n.jsx(ie, { children: n.jsx(j, { onClick: () => d(i), buttonType: "primary", size: "200", disabled: i === null || h === "loading", icon: h === "loading" && n.jsx(B, { spin: !0, icon: V }), children: e("common.submit") }) })] }), n.jsx(X, { $image: U })] });
}, R = t.div`
  cursor: pointer;

  & + & {
    margin-top: ${(e) => e.theme.spacing.sp16};
  }
`, ie = t.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${(e) => `${e.theme.spacing.sp16} ${e.theme.spacing.sp32}`};

  border-top: 1px solid ${(e) => e.theme.systemColors.grey200};
`, ae = t.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: ${({ theme: e }) => e.spacing.sp16};

  & > ${R} {
    margin: 0 0 ${({ theme: e }) => e.spacing.sp16} 0;
  }
`, re = t(g)`
  border-radius: 0;

  ${g.Children} {
    padding: 0;
  }

  ${g.Content} {
    padding: 0;
  }
`, le = t(Z)``, pe = t(H)`
  color: ${(e) => e.theme.systemColors.black};
  font-size: 16px;
`, de = P(), me = () => /* @__PURE__ */ n.jsx(se, {}), Ie = (e) => {
  var s;
  e && ((s = M(e)) == null || s.render(
    /* @__PURE__ */ n.jsx(T, { store: de, children: /* @__PURE__ */ n.jsx(me, {}) })
  ));
};
export {
  Ie as AppendNewModalSellingLevel,
  me as IndependentNewModalSellingLevel
};
