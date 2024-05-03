import { c as E, p as g, g as a, s as h } from "./BsRJmYuf.js";
import { n as C } from "./D527xXcp.js";
const p = E(() => ({
  queue: []
})), M = (c, d, t) => {
  const l = g(p.getState(), (s) => {
    let o = s.queue.filter((u) => u !== c);
    t && (o = []), d && o.push(c), s.queue = o;
  });
  p.setState(l);
}, _ = (c, d, t) => {
  const l = a(c.getState(), d, "_empty");
  if (l === "_empty")
    throw new Error("[leitenModal] The defined path does not exist");
  const s = C(10), o = (e) => {
    const n = g(c.getState(), (i) => {
      h(i, d, e);
    });
    c.setState(n);
  }, u = (e, n) => {
    M(s, e, n);
  }, S = (e) => {
    var n;
    if (e.type === "CLOSE")
      u(!1), t != null && t.clearOnClose && o(l);
    else if (e.type === "OPEN")
      u(!0, e.replace), e.payload && o(e.payload);
    else if (e.type === "TOGGLE") {
      const i = () => y()[0];
      u(!i()), !i() && (t != null && t.clearOnClose) && o(l);
    } else
      e.type === "SET_DATA" && e.payload && o(e.payload);
    (n = t == null ? void 0 : t.reaction) == null || n.call(t, e);
  }, O = (e, n) => {
    S({ type: "OPEN", payload: e, replace: n });
  }, q = () => S({ type: "CLOSE" }), f = (e) => {
    const n = e.queue.includes(s), i = n && e.queue[e.queue.length - 1] !== s;
    return [n, i];
  }, y = () => f(p.getState());
  return Object.assign(() => p(f), { action: S, close: q, open: O, get: y, key: s });
};
export {
  _ as l
};
