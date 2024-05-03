import { n as F } from "./D527xXcp.js";
import { F as q } from "./_JqgLpqe.js";
function I(A, n) {
  const f = { current: null };
  return { action: (l, s) => {
    var b;
    const u = (s == null ? void 0 : s.requestId) || F();
    let d = new AbortController();
    (b = n == null ? void 0 : n.action) == null || b.call(n, l, s == null ? void 0 : s.status, u), A(l, { signal: d.signal }).then((c) => {
      var i;
      (i = n == null ? void 0 : n.fulfilled) == null || i.call(n, c, l, u);
    }).catch((c) => {
      var i, g, h, j;
      c instanceof q && c.message === "The user aborted a request." ? (i = n == null ? void 0 : n.abort) == null || i.call(n, l, u) : c instanceof q ? (g = n == null ? void 0 : n.rejected) == null || g.call(n, l, c.message, c, u) : c instanceof Error ? (h = n == null ? void 0 : n.rejected) == null || h.call(n, l, c.message, void 0, u) : (j = n == null ? void 0 : n.rejected) == null || j.call(n, l, "Unknown Failure", void 0, u);
    }).finally(() => {
      var c;
      d = null, f.current = null, n != null && n.resolved && ((c = n == null ? void 0 : n.resolved) == null || c.call(n, l, u));
    });
    const o = () => {
      d && d.abort(), d = null;
    };
    return f.current = o, o;
  }, abort: () => {
    var l;
    (l = f.current) == null || l.call(f);
  } };
}
export {
  I as c
};
