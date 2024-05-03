import { c as y } from "./DRYgYZLM.js";
import { i as C } from "./Cb4pvjwo.js";
const p = (f, t, l, n) => {
  const R = C((n == null ? void 0 : n.initialContent) || null, n == null ? void 0 : n.initialStatus), b = {
    action: (o, i, c) => {
      var d, u;
      const s = l();
      t({
        ...s,
        content: (d = n == null ? void 0 : n.contentReducers) != null && d.pending ? n.contentReducers.pending(o) : s.content,
        status: i ?? "loading",
        payload: o,
        requestId: c
      }), (u = n == null ? void 0 : n.actionReaction) == null || u.call(n, o, i, s.requestId);
    },
    fulfilled: (o, i, c) => {
      var d, u;
      const s = l();
      c === s.requestId && (t({
        ...s,
        content: (d = n == null ? void 0 : n.contentReducers) != null && d.fulfilled ? n.contentReducers.fulfilled(o, i) : o,
        status: "loaded"
      }), (u = n == null ? void 0 : n.fulfilledReaction) == null || u.call(n, o, i, c));
    },
    rejected: (o, i, c, s) => {
      var u, A, S;
      const d = l();
      t({
        ...d,
        content: (u = n == null ? void 0 : n.contentReducers) != null && u.rejected ? (A = n.contentReducers) == null ? void 0 : A.rejected(o, i, c) : d.content,
        status: "error",
        error: i,
        fetchError: c
      }), (S = n == null ? void 0 : n.rejectedReaction) == null || S.call(n, o, i, c, s);
    },
    abort: (o, i) => {
      var s, d;
      const c = l();
      t({
        ...c,
        content: (s = n == null ? void 0 : n.contentReducers) != null && s.aborted ? n.contentReducers.aborted(o) : null,
        status: (n == null ? void 0 : n.initialStatus) || "loading",
        error: null,
        fetchError: void 0
      }), (d = n == null ? void 0 : n.abortReaction) == null || d.call(n, o, i);
    },
    resolved: (o, i) => {
      var c;
      (c = n == null ? void 0 : n.resolvedReaction) == null || c.call(n, o, i);
    }
  }, { action: j, abort: q } = y(f, b);
  return { abort: () => (t(R), q()), action: j, atom: R, clear: () => {
    t(R);
  }, setAtom: (o, i = !1) => {
    const c = l(), s = i ? { ...o } : { ...c.content, ...o };
    t({ ...c, content: typeof o == "object" ? s : o });
  } };
}, w = (f, t, l, n, R) => ({
  [l]: p(n, (b) => {
    f((j) => ({ [l]: { ...j[l], atom: b } }));
  }, () => t()[l].atom, R)
});
export {
  w as a,
  p as c
};
