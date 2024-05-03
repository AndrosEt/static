import { g as s, a as o } from "./CxU1FO_U.js";
import { b as u } from "./VvgyOqy6.js";
const m = () => {
  var e, r;
  const t = ((e = document.querySelector("meta[name=csrf-param]")) == null ? void 0 : e.content) || "", c = ((r = document.querySelector("meta[name=csrf-token]")) == null ? void 0 : r.content) || "";
  return t ? { key: t, value: c } : null;
}, a = m(), f = ({ logoutToken: t, accountId: c, ...e }) => {
  const r = {
    ...a ? { "x-csrf-token": a.value, "X-Requested-With": "XMLHttpRequest" } : {},
    ...t ? { Authorization: "Bearer " + t } : {}
  }, n = s(e.url, { accountId: c || o() || window.__ACCOUNT_ID__ }, { hasAccountId: !1 });
  return u({ ...e, url: n, withCredentials: !0, headers: r });
};
export {
  f as c,
  m as g
};
