import { c as r } from "./BsRJmYuf.js";
import { l as a } from "./DzGyC9Eu.js";
import { c as u } from "./BEdGjagK.js";
import { m as n } from "./_JqgLpqe.js";
var s;
(function(t) {
  t.get = () => u({
    url: n + "/api/v1/customers/accounts",
    withCredentials: !0
  });
})(s || (s = {}));
const i = r(() => ({
  accounts: {}
})), A = a(i, "accounts", async (t) => {
  var c, o, e;
  return t || ((o = (c = window.__REACT_MENU__) == null ? void 0 : c.accounts) == null ? void 0 : o.results) || ((e = await s.get()) == null ? void 0 : e.results);
});
export {
  A as a,
  i as u
};
