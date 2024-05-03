import { r as I } from "./react-D5yUVy0K.js";
import { r as et } from "./react-dom-CwZtGxo1.js";
function j(t, { type: e, payload: o }) {
  return {
    state: t,
    stateNew: {},
    type: e,
    payload: o,
    changedIds: []
  };
}
class nt {
  constructor() {
    this._counter = /* @__PURE__ */ new Map();
  }
  add(e) {
    this._counter.set(e, (this._counter.get(e) || 0) + 1);
  }
  delete(e) {
    const o = this._counter.get(e);
    return o === 1 ? this._counter.delete(e) : (o > 1 && this._counter.set(e, o - 1), !1);
  }
  forEach(e) {
    this._counter.forEach((o, s) => e(s));
  }
}
class H {
  constructor(e, o = !1) {
    this.id = e, this.isLeaf = o, this.fnsMap = /* @__PURE__ */ new Map();
  }
  _getFns(e) {
    return this.fnsMap.get(e) || this.fnsMap.set(e, new nt()).get(e);
  }
  addFn(e, o) {
    this._getFns(o).add(e);
  }
  union(e) {
    e.fnsMap.forEach((o, s) => {
      const i = this._getFns(s);
      o.forEach((r) => i.add(r));
    });
  }
  disunion(e, o) {
    e.fnsMap.forEach((s, i) => {
      const r = this._getFns(i);
      s.forEach((u) => r.delete(u) && o(u._ownerAtomId));
    });
  }
  forEach(e, o) {
    const s = this.fnsMap.get(e);
    s && s.forEach((i) => i(o));
  }
}
const N = Symbol("@@Reatom/TREE"), D = Object.assign, B = Object.is;
function T(t) {
  return t && t[N];
}
function L(t) {
  return typeof t == "symbol" ? t.description || t.toString().replace(/Symbol\((.*)\)/, "$1") : t;
}
function M(t) {
  const e = T(t);
  return !!(e && !e.isLeaf);
}
function P(t) {
  const e = T(t);
  return !!(e && e.isLeaf);
}
let ot = 0;
function st(t) {
  return typeof t == "symbol" ? (
    // TODO: https://github.com/microsoft/TypeScript/issues/1863
    t
  ) : Array.isArray(t) ? K(t[0], "name") : `${K(t, "name")} [${++ot}]`;
}
function J(t) {
  return st(t);
}
function b(t) {
  throw new Error(`[reatom] ${t}`);
}
function K(t, e) {
  return (typeof t != "string" || t.length === 0) && b(`Invalid ${e}`), t;
}
function U(t, e) {
  return typeof t != "function" && b(`Invalid ${e}`), t;
}
function Q(t) {
  const e = Object.keys(t);
  return e.push(...Object.getOwnPropertySymbols(t)), e;
}
function it(t = "action", ...e) {
  typeof t == "function" && (e.unshift(t), t = "action");
  const o = J(t), s = new H(o, !0), i = function(u) {
    return {
      type: o,
      payload: u,
      reactions: e
    };
  };
  return i[N] = s, i.getType = () => o, i;
}
const rt = Symbol("@@Reatom/DEPS"), ct = Symbol("@@Reatom/DEPS_SHAPE"), W = it(["@@Reatom/init"]), _ = W();
function X(t, e, o) {
  o || (o = e, e = t, t = "atom");
  const s = J(t), i = L(s);
  e === void 0 && b(`Atom "${i}". Initial state can't be undefined`);
  const r = new H(s), u = /* @__PURE__ */ new Set();
  let n = 0;
  function f(y, h) {
    U(h, "reducer");
    const C = n++, w = T(y);
    w || b("Invalid dependency");
    const x = w.id, A = P(y);
    r.union(w);
    const c = function({ state: a, stateNew: S, payload: O, changedIds: m, type: p }) {
      const E = a[s], g = E === void 0;
      if (!g && p === _.type && !O)
        return;
      const v = S[s], R = v !== void 0, k = R ? v : E, Z = a[x], q = S[x], z = q !== void 0, tt = A ? O : z ? q : Z;
      if (A || z || g) {
        const F = h(k, tt);
        if (F === void 0 && b(`Invalid state. Reducer number ${C} in "${i}" atom returns undefined`), R && B(E, F)) {
          m.splice(m.indexOf(s), 1), delete S[s];
          return;
        }
        B(k, F) || (R || m.push(s), S[s] = F);
      }
    };
    if (c._ownerAtomId = s, A)
      return r.addFn(c, x);
    u.has(x) && b("One of dependencies has the equal id"), u.add(x), w.fnsMap.forEach((d, a) => r.addFn(c, a));
  }
  f(W, (y, { [s]: h = e } = {}) => h), o(f);
  const l = function(h = {}, C = _) {
    const w = j(h, C);
    r.forEach(C.type, w);
    const { changedIds: x, stateNew: A } = w;
    return x.length > 0 ? D({}, h, A) : h;
  };
  return l[N] = r, l[rt] = u, l;
}
function G(t, e) {
  return t[e[N].id];
}
function gt(t, e, o) {
  return o || (o = e, e = t, t = Symbol(`${L(T(e).id)} [map]`)), U(o, "mapper"), X(
    t,
    // FIXME: initialState for `map` :thinking:
    null,
    (s) => (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      s(e, (i, r) => o(r))
    )
  );
}
function bt(t, e) {
  arguments.length === 1 && (e = t);
  const o = Array.isArray(e), s = Q(e);
  arguments.length === 1 && (t = Symbol(o ? `[${s.map((r) => L(T(e[r]).id)).join()}]` : `{${s.map(L).join()}}`));
  const i = X(t, o ? [] : {}, (r) => s.forEach((u) => r(e[u], (n, f) => {
    const l = o ? n.slice(0) : D({}, n);
    return l[u] = f, l;
  })));
  return i[ct] = e, i;
}
function yt(t, e) {
  let o = /* @__PURE__ */ new Map(), s = o, i = [], r = i, u = /* @__PURE__ */ new Set(), n = {};
  const f = new H("store");
  if (t !== void 0)
    if (typeof t == "object" && e === void 0)
      D(n, t);
    else {
      M(t) || b("Invalid atom"), typeof e == "object" && e !== null ? D(n, e) : e !== void 0 && b("Invalid initial state"), f.union(T(t));
      const c = j(n, _);
      f.forEach(_.type, c), D(n, c.stateNew), u = new Set(Q(c.stateNew));
    }
  function l() {
    r === i && (r = i.slice());
  }
  function y(c) {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((d, a) => s.set(a, c === a ? d.slice() : d)));
  }
  function h(c) {
    if (c === void 0)
      return D({}, n);
    M(c) || b("Invalid target");
    const d = G(n, c);
    if (d !== void 0)
      return d;
    const a = j(n, _);
    return T(c).forEach(_.type, a), G(a.stateNew, c);
  }
  function C(c, d) {
    const a = U(d || c, "listener");
    let S = !0;
    if (d === void 0)
      return (M(a) || P(a)) && b("Invalid listener"), l(), r.push(a), () => {
        S && (S = !1, l(), r.splice(r.indexOf(a), 1));
      };
    const O = P(c);
    !M(c) && !O && b("Invalid subscription target");
    const m = T(c), p = m.id, E = !O && !u.has(p);
    if (y(p), !s.has(p) && (s.set(p, []), E)) {
      f.union(m);
      const g = j(n, _);
      m.forEach(_.type, g), D(n, g.stateNew);
    }
    return s.get(p).push(a), () => {
      if (!S)
        return;
      S = !1, y(p);
      const g = s.get(p);
      g.splice(g.indexOf(a), 1), E && g.length === 0 && (s.delete(p), f.disunion(m, (v) => {
        delete n[v];
      }));
    };
  }
  function w(c) {
    const { type: d, payload: a, reactions: S } = c;
    (typeof c != "object" || c === null || typeof d != "string") && b("Invalid action");
    const O = j(n, c);
    f.forEach(d, O);
    const { changedIds: m, stateNew: p } = O;
    if (o = s, d === _.type && (n = a || {}), m.length > 0) {
      D(n, p);
      for (let E = 0; E < m.length; E++) {
        const g = m[E];
        $(o.get(g) || [], p[g]);
      }
    }
    $(S || [], a, A), $(o.get(d) || [], a), $(i = r, c, p);
  }
  const A = {
    getState: h,
    subscribe: C,
    dispatch: w,
    bind: (c) => (...d) => (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      A.dispatch(c(...d))
    )
  };
  return A;
}
function $(t, ...e) {
  let o = -1;
  for (; ++o < t.length; )
    t[o](...e);
}
function ut() {
}
const Y = I.createContext(null);
function at() {
  return I.useReducer((t) => t + 1, 0)[1];
}
const V = {
  init: "init",
  upToDate: "upToDate",
  outOfDate: "outOfDate"
}, ft = (t) => t;
function dt(t = Y) {
  function e(o, s = ft, i = []) {
    const r = at(), u = I.useContext(t);
    if (!u)
      throw new Error("[reatom] The provider is not defined");
    const { current: n } = I.useRef({
      store: u,
      atom: void 0,
      selector: s,
      deps: i,
      atomValue: void 0,
      selectorValue: void 0,
      unsubscribe: ut,
      mountStatus: V.init
    });
    if (n.selector = s, u !== n.store || o !== n.atom)
      n.store = u, n.atom = o, n.deps = i, n.unsubscribe(), n.unsubscribe = u.subscribe(n.atom, (f) => {
        if (Object.is(n.atomValue, f))
          return;
        n.atomValue = f;
        const l = n.selector(f);
        Object.is(l, n.selectorValue) || (n.selectorValue = l, n.mountStatus === V.init ? n.mountStatus = V.outOfDate : r());
      }), n.atomValue = n.store.getState(o), n.selectorValue = n.selector(n.atomValue);
    else {
      const f = n.store.getState(n.atom);
      (!Object.is(f, n.atomValue) || i.length !== n.deps.length || i.some((l, y) => !Object.is(l, n.deps[y]))) && (n.deps = i, n.atomValue = f, n.selectorValue = n.selector(n.atomValue));
    }
    return I.useEffect(() => (n.mountStatus === V.outOfDate && (n.mountStatus = V.upToDate, r()), n.mountStatus = V.upToDate, () => n.unsubscribe()), []), n.selectorValue;
  }
  return e;
}
const St = dt();
function lt(t = Y) {
  function e(o, s = []) {
    const i = I.useContext(t);
    if (!i)
      throw new Error("[reatom] The provider is not defined");
    if (typeof o != "function")
      throw new TypeError("[reatom] `useAction` argument must be a function");
    return I.useCallback((...r) => {
      const u = o(...r);
      if (u) {
        const n = Object.assign({}, i, {
          dispatch(f) {
            const l = Object.assign({}, f, {
              reactions: (f.reactions || []).map((y) => (h) => y(h, n))
            });
            et.unstable_batchedUpdates(() => i.dispatch(l));
          }
        });
        n.dispatch(u);
      }
    }, s.concat(i));
  }
  return e;
}
const Et = lt();
export {
  Et as a,
  Y as b,
  yt as c,
  it as d,
  X as e,
  bt as f,
  dt as g,
  lt as h,
  gt as m,
  St as u
};
