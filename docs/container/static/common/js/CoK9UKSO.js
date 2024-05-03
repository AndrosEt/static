import { q as n, t as o, m as a } from "./_JqgLpqe.js";
import { a as c, g as u } from "./CxU1FO_U.js";
import { b as m } from "./VvgyOqy6.js";
const b = ({ key: r, action: t, queryStringParameters: e = null, additionalParameters: s = {} }) => {
  const i = l({
    action: t,
    key: r,
    queryStringParameters: e,
    additionalParameters: s
  });
  window.location.assign(i);
}, l = ({ action: r, key: t, queryStringParameters: e = {}, additionalParameters: s = {} }) => n.stringifyUrl({
  url: `${o(a)}/subscribe`,
  query: {
    accountId: c(),
    ...r !== void 0 && { action: r },
    ...t !== void 0 && { offer: t },
    ...e,
    ...s
  }
}), p = async (r, t) => await m({
  url: u(a + "/api/v1/customers/subscription/data", { ...r }),
  withCredentials: !0,
  signal: t
});
export {
  p as g,
  b as r
};
