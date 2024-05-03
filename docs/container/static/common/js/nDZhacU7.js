import { w as c, L as s } from "./_JqgLpqe.js";
const u = ({ amount: t, currency: e, locale: n, isRounded: i = !1, invalidValue: m = "n/a", options: o }) => {
  const r = Number(t);
  if (t === null || isNaN(r))
    return m;
  const a = new Intl.NumberFormat(n || c.get()[s], {
    maximumFractionDigits: i ? 0 : 2,
    minimumFractionDigits: i ? 0 : void 0,
    style: "currency",
    currency: e || "USD",
    currencyDisplay: "symbol",
    ...o
  });
  return e === "CDN" ? a.format(r).replace("$", "CDN$") : a.format(r);
};
export {
  u as f
};
