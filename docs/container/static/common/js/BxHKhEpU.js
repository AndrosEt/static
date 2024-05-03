import { d as G, a as Y, g as X } from "./B-wa5HSc.js";
import { r as Z } from "./CwRJyjkV.js";
import { g as z, p as A, s as E } from "./BsRJmYuf.js";
import { u as Q } from "./CaqTreju.js";
import { i as V, r as ee, l as te, u as N } from "./DzGyC9Eu.js";
import { j as H, I as re, t as I, m as F } from "./_JqgLpqe.js";
import { r as w } from "./react-D5yUVy0K.js";
import { a as ne } from "./T2z8X-I8.js";
import { _ as ae } from "./BwdTACk8.js";
import { u as D, a as oe } from "./styled-components-sg3HbxYZ.js";
import { I as ie, n as se, b as ce } from "./DXDnZb_T.js";
import { s as de } from "./DoStcFK3.js";
import { b as ue } from "./VvgyOqy6.js";
function Ye(a, n, r) {
  Z(2, arguments);
  var t = G(a, n) / Y;
  return X(r == null ? void 0 : r.roundingMethod)(t);
}
const Xe = (a, n, r, t) => {
  const c = V(t == null ? void 0 : t.initialStatus);
  let o = {};
  const l = Array.isArray(z(a.getState(), n)), g = (h) => {
    const d = z(a.getState(), n, []), e = Array.isArray(d) ? d : [], s = e.findIndex((x) => {
      var k;
      return ((k = t == null ? void 0 : t.getKey) == null ? void 0 : k.call(t, x)) === h;
    }), i = s !== -1 ? s : e.length;
    return { withKey: n + `["${i}"]`, isNew: s === -1 };
  }, f = (h) => {
    let d = "", e = r;
    if (l) {
      const s = g(h);
      d = s.withKey, e = async (i, u) => {
        const x = await r(i, u), k = g(h);
        if (s.isNew && k.isNew || !k.isNew) {
          const L = A(a.getState(), (_) => {
            E(_, k.withKey, x);
          });
          a.setState(L);
        }
      };
    } else if (d = n + `.${h}`, t != null && t.initialContent) {
      const s = le(t.initialContent) ? t.initialContent(h) : t.initialContent, i = A(a.getState(), (u) => {
        E(u, d, s);
      });
      a.setState(i);
    }
    o[h] = te(a, d, e, t);
  }, m = (h, d) => {
    h.forEach(({ key: e, params: s }) => {
      const i = o[e], u = { key: e, params: s };
      i && !l ? i.action(u, d) : (f(e), o[e].action(u));
    });
  }, v = (h) => {
    if (h)
      !l && o[h].clear(), delete o[h];
    else {
      const d = A(a.getState(), (e) => {
        E(e, n, {});
      });
      a.setState(d), o = {};
    }
  }, y = (h, d) => N((e) => {
    var i;
    const s = (i = o[h]) == null ? void 0 : i.key;
    return (d || j)(s && e[s] || c);
  }), p = (h) => N(Q((d) => {
    const e = Object.entries(o).map(([i, u]) => ({
      id: i,
      key: u.key
    })), s = {};
    return e.forEach(({ id: i, key: u }) => {
      s[i] = d[u];
    }), (h || j)(s);
  }));
  function S(h, d) {
    return h !== void 0 && typeof h == "string" ? y(h, d) : p(h);
  }
  return ee(a, () => v()), Object.assign(S, { clear: v, action: m, requests: o, call: m });
}, j = (a) => a, le = (a) => typeof a == "function", Ze = (a, n, r) => {
  const t = z(a.getState(), n, "_empty");
  if (t === "_empty" || typeof t != "object")
    throw new Error("[leitenList] The defined path does not match the required structure");
  const c = Array.isArray(t), o = (r == null ? void 0 : r.compare) || fe, l = r == null ? void 0 : r.getKey, g = (e) => {
    var u;
    const s = A(a.getState(), (x) => {
      E(x, n, e);
    }), i = r != null && r.patchEffect ? { ...s, ...r.patchEffect(e) } : s;
    a.setState(i), (u = r == null ? void 0 : r.sideEffect) == null || u.call(r);
  }, f = () => {
    const e = z(a.getState(), n, "_empty");
    return e !== "_empty" ? e : t;
  }, m = (e) => {
    g(c ? e : B(e, l));
  }, v = (e) => {
    if (c) {
      const s = Array.isArray(e) ? e.filter((i) => f().every((u) => !o(i, u))) : f().every((i) => !o(e, i)) ? [e] : [];
      g([...f(), ...s]);
    } else
      g({ ...f(), ...B(Array.isArray(e) ? e : [e], l) });
  }, y = () => {
    const e = A(a.getState(), (s) => {
      E(s, n, t);
    });
    a.setState(e);
  }, p = (e) => {
    if (c)
      g(f().filter((s) => !W(e, [typeof s == "string" ? s : l == null ? void 0 : l(s), s], o)));
    else {
      const s = {};
      for (const [i, u] of Object.entries(f()))
        W(e, [i, u], o) || (s[i] = u);
      g(s);
    }
  };
  return { set: m, get: f, clear: y, toggle: (e) => {
    (c ? !!f().find((i) => o(e, i)) : l(e) in f()) ? p(e) : v(e);
  }, update: (e) => {
    if (c)
      Array.isArray(e) ? g(f().map((s) => e.find((u) => o(s, u)) || s)) : g(f().map((s) => o(s, e) ? e : s));
    else {
      const s = B(Array.isArray(e) ? e : [e], l);
      g({ ...f(), ...s });
    }
  }, filter: (e) => {
    g(c ? f().filter(e) : Object.fromEntries(Object.entries(f()).filter(([s, i]) => e(i))));
  }, remove: p, add: v };
}, fe = (a, n) => a === n, B = (a, n) => a.reduce((r, t) => {
  const c = (n == null ? void 0 : n(t)) || String(t);
  return r[c] = t, r;
}, {}), W = (a, [n, r], t) => Array.isArray(a) ? a.some((c) => typeof c == "string" ? c === n : t(r, c)) : typeof a != "string" ? t(r, a) : a === n;
var he = w.useLayoutEffect, ge = function(n) {
  var r = w.useRef(n);
  return he(function() {
    r.current = n;
  }), r;
}, $ = function(n, r) {
  if (typeof n == "function") {
    n(r);
    return;
  }
  n.current = r;
}, me = function(n, r) {
  var t = w.useRef();
  return w.useCallback(function(c) {
    n.current = c, t.current && $(t.current, null), t.current = r, r && $(r, c);
  }, [r]);
}, O = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, ve = function(n) {
  Object.keys(O).forEach(function(r) {
    n.style.setProperty(r, O[r], "important");
  });
}, P = ve, b = null, q = function(n, r) {
  var t = n.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? t + r.borderSize : t - r.paddingSize;
};
function pe(a, n, r, t) {
  r === void 0 && (r = 1), t === void 0 && (t = 1 / 0), b || (b = document.createElement("textarea"), b.setAttribute("tabindex", "-1"), b.setAttribute("aria-hidden", "true"), P(b)), b.parentNode === null && document.body.appendChild(b);
  var c = a.paddingSize, o = a.borderSize, l = a.sizingStyle, g = l.boxSizing;
  Object.keys(l).forEach(function(p) {
    var S = p;
    b.style[S] = l[S];
  }), P(b), b.value = n;
  var f = q(b, a);
  b.value = n, f = q(b, a), b.value = "x";
  var m = b.scrollHeight - c, v = m * r;
  g === "border-box" && (v = v + c + o), f = Math.max(v, f);
  var y = m * t;
  return g === "border-box" && (y = y + c + o), f = Math.min(y, f), [f, m];
}
var M = function() {
}, Se = function(n, r) {
  return n.reduce(function(t, c) {
    return t[c] = r[c], t;
  }, {});
}, ye = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], be = !!document.documentElement.currentStyle, we = function(n) {
  var r = window.getComputedStyle(n);
  if (r === null)
    return null;
  var t = Se(ye, r), c = t.boxSizing;
  if (c === "")
    return null;
  be && c === "border-box" && (t.width = parseFloat(t.width) + parseFloat(t.borderRightWidth) + parseFloat(t.borderLeftWidth) + parseFloat(t.paddingRight) + parseFloat(t.paddingLeft) + "px");
  var o = parseFloat(t.paddingBottom) + parseFloat(t.paddingTop), l = parseFloat(t.borderBottomWidth) + parseFloat(t.borderTopWidth);
  return {
    sizingStyle: t,
    paddingSize: o,
    borderSize: l
  };
}, xe = we;
function U(a, n, r) {
  var t = ge(r);
  w.useLayoutEffect(function() {
    var c = function(l) {
      return t.current(l);
    };
    if (a)
      return a.addEventListener(n, c), function() {
        return a.removeEventListener(n, c);
      };
  }, []);
}
var ke = function(n) {
  U(window, "resize", n);
}, Ce = function(n) {
  U(document.fonts, "loadingdone", n);
}, Le = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], Ie = function(n, r) {
  var t = n.cacheMeasurements, c = n.maxRows, o = n.minRows, l = n.onChange, g = l === void 0 ? M : l, f = n.onHeightChange, m = f === void 0 ? M : f, v = ae(n, Le), y = v.value !== void 0, p = w.useRef(null), S = me(p, r), h = w.useRef(0), d = w.useRef(), e = function() {
    var u = p.current, x = t && d.current ? d.current : xe(u);
    if (x) {
      d.current = x;
      var k = pe(x, u.value || u.placeholder || "x", o, c), L = k[0], _ = k[1];
      h.current !== L && (h.current = L, u.style.setProperty("height", L + "px", "important"), m(L, {
        rowHeight: _
      }));
    }
  }, s = function(u) {
    y || e(), g(u);
  };
  return w.useLayoutEffect(e), ke(e), Ce(e), /* @__PURE__ */ w.createElement("textarea", ne({}, v, {
    onChange: s,
    ref: S
  }));
}, Ae = /* @__PURE__ */ w.forwardRef(Ie);
const Ee = w.forwardRef(({ edited: a, error: n, className: r, hideErrorMessage: t, ...c }, o) => H.jsxs(K, { className: r, children: [H.jsx(J, { $invalid: !!n, $disabled: c.disabled, $edited: !n && a, children: H.jsx(Ae, { ...c, ref: o }) }), n && !t && H.jsx(ie, { children: n })] })), K = D.div``, J = D.div`
  ${se};

  textarea {
    ${ce};
    min-height: 32px;
    padding: 4px 12px;

    ${({ $disabled: a }) => a && oe`
        cursor: not-allowed;
      `}
  }
`, Qe = Object.assign(Ee, { Container: K, Wrapper: J }), Re = {
  // extension
  feedback: "Extension Feedback",
  connectMWSToken: "Extension MWS Button Clicked",
  widgetButtonClicked: "Extension Widget Button Clicked",
  languageSwitched: "Extension Language Switched",
  tokenFlow: "Extension Token Flow Started",
  // cerebro
  cerebroExportToKeywordTrackerButtonClicked: "Cerebro Export to Keyword Tracker button clicked",
  cerebroExportedToKeywordTracker: "Cerebro Exported to Keyword Tracker",
  //ChatAI
  chatAIHelpfulEvent: "AI chatbot was this answer helpful",
  aiChatBotOpen: "AI chatbot open",
  aiChatBotClose: "AI chatbot close",
  aiChatBotRetryClicked: "AI chatbot retry button clicked",
  aiChatBotRetryInputSubmitted: "AI chatbot input submitted",
  aiChatBotHelpArticleClicked: "AI chatbot help article clicked",
  aiChatBotHelpToolClicked: "AI chatbot tool link clicked",
  aiChatBotHelpfulAnswerClicked: "AI chatbot helpful answer clicked",
  aiChatBotUnhelpfulAnswerClicked: "AI chatbot unhelpful answer clicked",
  aiChatBotContactSupportClicked: "AI chatbot contact support clicked",
  aiChatBotSubmitIdeaClicked: "AI chatbot submit idea clicked",
  //ProductSummary
  ProductSummaryASINHoverView: "ASIN Hover View",
  keywordHoverProductViewed: "Keyword Hover Product Viewed"
}, Ve = ({ url: a = de }) => {
  const [n, r] = w.useState(null);
  return w.useEffect(() => {
    var c, o;
    (o = (c = window == null ? void 0 : window.chrome) == null ? void 0 : c.storage) == null || o.sync.get("settings", ({ settings: l }) => {
      r((l == null ? void 0 : l.language) || "en");
    });
  }, []), { sendSegmentEvent: w.useCallback(async ({ name: c, properties: o }) => {
    await ue({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: a,
      params: { name: c, properties: { language: n, ...o } },
      withCredentials: !0
    });
  }, [n, a]), segmentEventType: Re };
}, et = (a) => "/?accountId=" + a, He = re, T = I("https://www.helium10.com"), C = He() ? "" : F, tt = C + "/api/v1/customers/me", rt = F + "/images/avatars/profile-default.svg", nt = C + "/site/get-search-bar-autocomplete", at = C + "/site/search-bar-chosen-result", ot = T + "/support", it = I("https://kb.helium10.com/hc/en-us/requests/new"), st = "https://www.facebook.com/groups/Helium10Users/", ct = C + "/alerts", dt = C + "/subscribe", ut = "https://members.helium10elite.com", lt = (a) => I("https://adtomic.helium10.com/assets/images/flags/" + a.toUpperCase() + ".svg"), ft = I(T + "/privacy-policy"), ht = I(T + "/terms-and-conditions"), gt = "https://www.g2.com/products/helium-10/reviews#reviews", mt = F + "/sitemap", vt = T + "/walmart", pt = I("https://pages.helium10.com/customer-success-webinars"), St = C + "/api/v1/product/data", yt = C + "/api/v1/product/organic-top";
var ze = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function Te(a, n) {
  let r;
  try {
    r = a();
  } catch {
    return;
  }
  return {
    getItem: (c) => {
      var o;
      const l = (f) => f === null ? null : JSON.parse(f, n == null ? void 0 : n.reviver), g = (o = r.getItem(c)) != null ? o : null;
      return g instanceof Promise ? g.then(l) : l(g);
    },
    setItem: (c, o) => r.setItem(
      c,
      JSON.stringify(o, n == null ? void 0 : n.replacer)
    ),
    removeItem: (c) => r.removeItem(c)
  };
}
const R = (a) => (n) => {
  try {
    const r = a(n);
    return r instanceof Promise ? r : {
      then(t) {
        return R(t)(r);
      },
      catch(t) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(t) {
        return this;
      },
      catch(t) {
        return R(t)(r);
      }
    };
  }
}, _e = (a, n) => (r, t, c) => {
  let o = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (e) => e,
    version: 0,
    merge: (e, s) => ({
      ...s,
      ...e
    }),
    ...n
  }, l = !1;
  const g = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  let m;
  try {
    m = o.getStorage();
  } catch {
  }
  if (!m)
    return a(
      (...e) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), r(...e);
      },
      t,
      c
    );
  const v = R(o.serialize), y = () => {
    const e = o.partialize({ ...t() });
    let s;
    const i = v({ state: e, version: o.version }).then(
      (u) => m.setItem(o.name, u)
    ).catch((u) => {
      s = u;
    });
    if (s)
      throw s;
    return i;
  }, p = c.setState;
  c.setState = (e, s) => {
    p(e, s), y();
  };
  const S = a(
    (...e) => {
      r(...e), y();
    },
    t,
    c
  );
  let h;
  const d = () => {
    var e;
    if (!m)
      return;
    l = !1, g.forEach((i) => i(t()));
    const s = ((e = o.onRehydrateStorage) == null ? void 0 : e.call(o, t())) || void 0;
    return R(m.getItem.bind(m))(o.name).then((i) => {
      if (i)
        return o.deserialize(i);
    }).then((i) => {
      if (i)
        if (typeof i.version == "number" && i.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              i.state,
              i.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return i.state;
    }).then((i) => {
      var u;
      return h = o.merge(
        i,
        (u = t()) != null ? u : S
      ), r(h, !0), y();
    }).then(() => {
      s == null || s(h, void 0), l = !0, f.forEach((i) => i(h));
    }).catch((i) => {
      s == null || s(void 0, i);
    });
  };
  return c.persist = {
    setOptions: (e) => {
      o = {
        ...o,
        ...e
      }, e.getStorage && (m = e.getStorage());
    },
    clearStorage: () => {
      m == null || m.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => d(),
    hasHydrated: () => l,
    onHydrate: (e) => (g.add(e), () => {
      g.delete(e);
    }),
    onFinishHydration: (e) => (f.add(e), () => {
      f.delete(e);
    })
  }, d(), h || S;
}, Be = (a, n) => (r, t, c) => {
  let o = {
    storage: Te(() => localStorage),
    partialize: (d) => d,
    version: 0,
    merge: (d, e) => ({
      ...e,
      ...d
    }),
    ...n
  }, l = !1;
  const g = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  let m = o.storage;
  if (!m)
    return a(
      (...d) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), r(...d);
      },
      t,
      c
    );
  const v = () => {
    const d = o.partialize({ ...t() });
    return m.setItem(o.name, {
      state: d,
      version: o.version
    });
  }, y = c.setState;
  c.setState = (d, e) => {
    y(d, e), v();
  };
  const p = a(
    (...d) => {
      r(...d), v();
    },
    t,
    c
  );
  c.getInitialState = () => p;
  let S;
  const h = () => {
    var d, e;
    if (!m)
      return;
    l = !1, g.forEach((i) => {
      var u;
      return i((u = t()) != null ? u : p);
    });
    const s = ((e = o.onRehydrateStorage) == null ? void 0 : e.call(o, (d = t()) != null ? d : p)) || void 0;
    return R(m.getItem.bind(m))(o.name).then((i) => {
      if (i)
        if (typeof i.version == "number" && i.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              i.state,
              i.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return i.state;
    }).then((i) => {
      var u;
      return S = o.merge(
        i,
        (u = t()) != null ? u : p
      ), r(S, !0), v();
    }).then(() => {
      s == null || s(S, void 0), S = t(), l = !0, f.forEach((i) => i(S));
    }).catch((i) => {
      s == null || s(void 0, i);
    });
  };
  return c.persist = {
    setOptions: (d) => {
      o = {
        ...o,
        ...d
      }, d.storage && (m = d.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => h(),
    hasHydrated: () => l,
    onHydrate: (d) => (g.add(d), () => {
      g.delete(d);
    }),
    onFinishHydration: (d) => (f.add(d), () => {
      f.delete(d);
    })
  }, o.skipHydration || h(), S || p;
}, Fe = (a, n) => "getStorage" in n || "serialize" in n || "deserialize" in n ? ((ze ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), _e(a, n)) : Be(a, n), bt = Fe;
export {
  vt as A,
  Qe as N,
  bt as a,
  Ze as b,
  at as c,
  Ye as d,
  it as e,
  ot as f,
  pt as g,
  tt as h,
  C as i,
  He as j,
  lt as k,
  Xe as l,
  st as m,
  ct as n,
  rt as o,
  St as p,
  dt as q,
  et as r,
  nt as s,
  yt as t,
  Ve as u,
  ut as v,
  ft as w,
  ht as x,
  gt as y,
  mt as z
};
