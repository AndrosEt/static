import { I as s } from "./_JqgLpqe.js";
function c(t) {
  return t.endsWith("/") ? t.slice(0, -1) : t;
}
const e = (t, n) => {
  const a = t.location, o = new URL(a.pathname + a.search, window.location.origin);
  o.searchParams.set("accountId", n.toString()), o.protocol = "https", t.navigate({
    ...a,
    pathname: c(a.pathname),
    search: o.search
  }, { replace: !0 });
}, r = s;
export {
  r as i,
  e as s
};
