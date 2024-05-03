import { q as t, t as n, P as s } from "./_JqgLpqe.js";
const g = (e, c, r) => {
  const u = (r == null ? void 0 : r.hasAccountId) ?? !0;
  r == null || delete r.hasAccountId;
  const a = t.stringifyUrl({ url: e, query: c }, { skipEmptyString: !0, skipNull: !0, ...r });
  return n(u ? d(a) : a);
}, l = () => t.parse(window.location.search).accountId || sessionStorage.getItem(s) || window.accountId, d = (e) => {
  const { url: c, query: r } = t.parseUrl(e), u = {
    ...r,
    accountId: l()
  };
  return t.stringifyUrl({ url: c, query: u });
};
export {
  l as a,
  g
};
