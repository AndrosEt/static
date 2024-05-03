import { r as l } from "./react-D5yUVy0K.js";
import { c as k, l as f } from "./BsRJmYuf.js";
import { i as g } from "./D_xhgqBM.js";
import { m as p } from "./_JqgLpqe.js";
import { c } from "./BEdGjagK.js";
import { s as P } from "./BzsJhSng.js";
import { d as v } from "./DoStcFK3.js";
import { g as R, a as q } from "./CxU1FO_U.js";
import { a as y } from "./CjEUPi3A.js";
import { u as w } from "./DWlRc17i.js";
import { a as B } from "./ESx2WVJg.js";
const L = {
  open: !1,
  activeTab: "blog",
  defaultVideoHash: null
}, m = k(() => L), I = f(m, "open"), V = f(m, "activeTab"), b = f(m, "defaultVideoHash"), E = (t) => {
  t || b.set(null), I.set(t);
}, Z = (t) => {
  V.set(t);
}, _ = () => {
  const t = m((u) => u.open), [o, e] = l.useState(!1), [s, a] = l.useState(!1), n = s && o, r = E;
  return l.useEffect(() => {
    t && (window.Wistia ? (e(!0), a(!0)) : (g("https://fast.wistia.com/assets/external/E-v1.js", () => e(!0)), g("//fast.wistia.com/assets/external/playlist-v1.js", () => a(!0))));
  }, [t]), { loaded: n, open: t, setOpen: r };
}, O = `${p}/api/v1/customers/segment-track`, W = (t) => new Promise((o) => {
  c({
    method: "POST",
    url: O,
    ignore401: !0,
    params: t
  }).then((e) => o(e)).catch(() => {
  });
}), x = (t) => c({
  url: p + "/api/v1/customers/tooltip-impressions-counter",
  params: { tooltipId: t },
  withCredentials: !0
}), tt = (t) => c({
  url: p + "/api/v1/customers/tooltip-click-checker",
  params: { tooltipId: t },
  withCredentials: !0
}), et = "Learn Button Clicked", st = "Resources Column Clicked", ot = "Resources Item Clicked", at = "Resources Tool Tip Clicked", nt = "Learn Button Closed", rt = (t) => W(t), it = "learn-more-button", h = "last-auto-play-date", T = v + "/api/v1/customers/learn-video", $ = (t, o) => c({
  url: R(`${T}/${t.key}`, {}),
  withCredentials: !0,
  method: "GET",
  signal: o
}), j = (t) => ({ [t.results.key]: t.results.seen }), D = (t, o) => c({
  url: R(T, {}),
  params: { key: t.key },
  withCredentials: !0,
  method: "POST",
  signal: o
}), H = (t) => ({ [t.results.key]: t.results.seen }), C = k((t, o) => ({
  ...y(t, o, "getAutoPlayRequest", async (e, s) => {
    const a = Number(localStorage.getItem(h)), n = (/* @__PURE__ */ new Date()).getTime();
    if (!a || n - a > 3e3)
      return localStorage.setItem(h, String(n)), $(e, s == null ? void 0 : s.signal).then(j);
  }, {
    initialStatus: "init"
  }),
  ...y(t, o, "setAutoPlayRequest", (e, s) => D(e, s == null ? void 0 : s.signal).then(H)),
  setAutoPlayRequestSeenTrue: () => {
    t((e) => {
      var s;
      return {
        ...e,
        getAutoPlayRequest: {
          ...e.getAutoPlayRequest,
          atom: {
            ...e.getAutoPlayRequest.atom,
            content: {
              [((s = o().getAutoPlayRequest.atom.payload) == null ? void 0 : s.key) || ""]: !0
            }
          }
        }
      };
    });
  }
})), lt = (t, o) => {
  const e = q(), s = w(B.desktop), a = C((i) => i.setAutoPlayRequest.action, P), [n, r, u] = C((i) => {
    var S;
    return [
      (S = i.getAutoPlayRequest) == null ? void 0 : S.atom.status,
      i.getAutoPlayRequest.atom.content,
      i.getAutoPlayRequest.action
    ];
  }, P), A = n === "loading", d = (r == null ? void 0 : r[t]) === !1;
  return l.useEffect(() => {
    e && s && t && !o && u({ key: t });
  }, [s, e, t, u, o]), l.useEffect(() => {
    e && s && t && d && !o && a({ key: t });
  }, [s, e, t, d, a, o]), { isLoading: A, autoPlay: d };
};
export {
  _ as a,
  C as b,
  it as c,
  et as d,
  nt as e,
  b as f,
  x as g,
  at as h,
  ot as i,
  m as j,
  Z as k,
  rt as l,
  st as m,
  tt as s,
  lt as u
};
