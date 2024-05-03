import { g as d, p as g, s as l } from "./BsRJmYuf.js";
const E = (e, n, a) => {
  const o = d(e.getState(), n, "_empty");
  if (o === "_empty" || typeof o != "object")
    throw new Error("[leitenRecord] The defined path does not match the required structure");
  const r = () => {
    const t = d(e.getState(), n, "_empty");
    return t !== "_empty" ? t : o;
  }, p = (t) => {
    var i;
    const c = r(), S = g(e.getState(), (m) => {
      l(m, n, t);
    }), u = a != null && a.patchEffect ? { ...S, ...a.patchEffect(t) } : S;
    e.setState(u), (i = a == null ? void 0 : a.sideEffect) == null || i.call(a, { prev: c, next: t });
  };
  return { clear: () => {
    const t = g(e.getState(), (c) => {
      l(c, n, o);
    });
    e.setState(t);
  }, set: p, get: r, patch: (t) => {
    p({ ...r(), ...t });
  } };
};
export {
  E as l
};
