import { d as u, e as f } from "./B5xUyCsU.js";
function C(...[p, e, o]) {
  const c = u(`${p}Modal/Action`, ...o != null && o.reaction ? [o.reaction] : []), O = {
    data: e,
    isOpen: !1
  };
  return {
    atom: f(`${p}Modal/Atom`, O, (l) => {
      var y;
      l(c, (d, n) => n.type === "CLOSE" ? { ...d, isOpen: !1, data: o != null && o.doNotClearOnClose ? d.data : e } : n.type === "OPEN" ? {
        ...d,
        isOpen: !0,
        ...n.payload ? { data: n.payload } : { data: e }
      } : n.type === "TOGGLE" ? { ...d, isOpen: !d.isOpen } : n.type === "SET_DATA" ? { ...d, data: n.payload } : d), (y = o == null ? void 0 : o.reducers) == null || y.call(o, l);
    }),
    open: (...l) => c(e || e === null ? { type: "OPEN", payload: l[0], meta: l[1] } : { type: "OPEN", payload: e, meta: l[0] }),
    close: (...l) => c({ type: "CLOSE", meta: l == null ? void 0 : l[0] }),
    action: c
  };
}
export {
  C as d
};
