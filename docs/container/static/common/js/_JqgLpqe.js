import { r as Ue } from "./react-dom-CwZtGxo1.js";
import { r as E, R as V } from "./react-D5yUVy0K.js";
import { a as y, u as D } from "./styled-components-sg3HbxYZ.js";
var pe = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function Pe() {
  if (re)
    return T;
  re = 1;
  var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var f, h = {}, F = null, b = null;
    u !== void 0 && (F = "" + u), c.key !== void 0 && (F = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (f in c)
      r.call(c, f) && !i.hasOwnProperty(f) && (h[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        h[f] === void 0 && (h[f] = c[f]);
    return { $$typeof: t, type: l, key: F, ref: b, props: h, _owner: a.current };
  }
  return T.Fragment = n, T.jsx = s, T.jsxs = s, T;
}
pe.exports = Pe();
var Me = pe.exports, ze, ae = Ue;
ze = ae.createRoot, ae.hydrateRoot;
const he = "%[a-f0-9]{2}", oe = new RegExp("(" + he + ")|([^%]+?)", "gi"), ie = new RegExp("(" + he + ")+", "gi");
function Z(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  const n = e.slice(0, t), r = e.slice(t);
  return Array.prototype.concat.call([], Z(n), Z(r));
}
function Ke(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let t = e.match(oe) || [];
    for (let n = 1; n < t.length; n++)
      e = Z(t, n).join(""), t = e.match(oe) || [];
    return e;
  }
}
function Ve(e) {
  const t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let n = ie.exec(e);
  for (; n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      const a = Ke(n[0]);
      a !== n[0] && (t[n[0]] = a);
    }
    n = ie.exec(e);
  }
  t["%C2"] = "�";
  const r = Object.keys(t);
  for (const a of r)
    e = e.replace(new RegExp(a, "g"), t[a]);
  return e;
}
function He(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return decodeURIComponent(e);
  } catch {
    return Ve(e);
  }
}
function ye(e, t) {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || t === "")
    return [];
  const n = e.indexOf(t);
  return n === -1 ? [] : [
    e.slice(0, n),
    e.slice(n + t.length)
  ];
}
function Je(e, t) {
  const n = {};
  if (Array.isArray(t))
    for (const r of t) {
      const a = Object.getOwnPropertyDescriptor(e, r);
      a != null && a.enumerable && Object.defineProperty(n, r, a);
    }
  else
    for (const r of Reflect.ownKeys(e)) {
      const a = Object.getOwnPropertyDescriptor(e, r);
      if (a.enumerable) {
        const i = e[r];
        t(r, i, e) && Object.defineProperty(n, r, a);
      }
    }
  return n;
}
const Ge = (e) => e == null, We = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), q = Symbol("encodeFragmentIdentifier");
function Ye(e) {
  switch (e.arrayFormat) {
    case "index":
      return (t) => (n, r) => {
        const a = n.length;
        return r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [
          ...n,
          [p(t, e), "[", a, "]"].join("")
        ] : [
          ...n,
          [p(t, e), "[", p(a, e), "]=", p(r, e)].join("")
        ];
      };
    case "bracket":
      return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [
        ...n,
        [p(t, e), "[]"].join("")
      ] : [
        ...n,
        [p(t, e), "[]=", p(r, e)].join("")
      ];
    case "colon-list-separator":
      return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [
        ...n,
        [p(t, e), ":list="].join("")
      ] : [
        ...n,
        [p(t, e), ":list=", p(r, e)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (n) => (r, a) => a === void 0 || e.skipNull && a === null || e.skipEmptyString && a === "" ? r : (a = a === null ? "" : a, r.length === 0 ? [[p(n, e), t, p(a, e)].join("")] : [[r, p(a, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [
        ...n,
        p(t, e)
      ] : [
        ...n,
        [p(t, e), "=", p(r, e)].join("")
      ];
  }
}
function Qe(e) {
  let t;
  switch (e.arrayFormat) {
    case "index":
      return (n, r, a) => {
        if (t = /\[(\d*)]$/.exec(n), n = n.replace(/\[\d*]$/, ""), !t) {
          a[n] = r;
          return;
        }
        a[n] === void 0 && (a[n] = {}), a[n][t[1]] = r;
      };
    case "bracket":
      return (n, r, a) => {
        if (t = /(\[])$/.exec(n), n = n.replace(/\[]$/, ""), !t) {
          a[n] = r;
          return;
        }
        if (a[n] === void 0) {
          a[n] = [r];
          return;
        }
        a[n] = [...a[n], r];
      };
    case "colon-list-separator":
      return (n, r, a) => {
        if (t = /(:list)$/.exec(n), n = n.replace(/:list$/, ""), !t) {
          a[n] = r;
          return;
        }
        if (a[n] === void 0) {
          a[n] = [r];
          return;
        }
        a[n] = [...a[n], r];
      };
    case "comma":
    case "separator":
      return (n, r, a) => {
        const i = typeof r == "string" && r.includes(e.arrayFormatSeparator), s = typeof r == "string" && !i && A(r, e).includes(e.arrayFormatSeparator);
        r = s ? A(r, e) : r;
        const l = i || s ? r.split(e.arrayFormatSeparator).map((c) => A(c, e)) : r === null ? r : A(r, e);
        a[n] = l;
      };
    case "bracket-separator":
      return (n, r, a) => {
        const i = /(\[])$/.test(n);
        if (n = n.replace(/\[]$/, ""), !i) {
          a[n] = r && A(r, e);
          return;
        }
        const s = r === null ? [] : r.split(e.arrayFormatSeparator).map((l) => A(l, e));
        if (a[n] === void 0) {
          a[n] = s;
          return;
        }
        a[n] = [...a[n], ...s];
      };
    default:
      return (n, r, a) => {
        if (a[n] === void 0) {
          a[n] = r;
          return;
        }
        a[n] = [...[a[n]].flat(), r];
      };
  }
}
function me(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function p(e, t) {
  return t.encode ? t.strict ? We(e) : encodeURIComponent(e) : e;
}
function A(e, t) {
  return t.decode ? He(e) : e;
}
function Fe(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? Fe(Object.keys(e)).sort((t, n) => Number(t) - Number(n)).map((t) => e[t]) : e;
}
function be(e) {
  const t = e.indexOf("#");
  return t !== -1 && (e = e.slice(0, t)), e;
}
function Xe(e) {
  let t = "";
  const n = e.indexOf("#");
  return n !== -1 && (t = e.slice(n)), t;
}
function se(e, t) {
  return t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? e = Number(e) : t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") && (e = e.toLowerCase() === "true"), e;
}
function ee(e) {
  e = be(e);
  const t = e.indexOf("?");
  return t === -1 ? "" : e.slice(t + 1);
}
function te(e, t) {
  t = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...t
  }, me(t.arrayFormatSeparator);
  const n = Qe(t), r = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return r;
  for (const a of e.split("&")) {
    if (a === "")
      continue;
    const i = t.decode ? a.replaceAll("+", " ") : a;
    let [s, l] = ye(i, "=");
    s === void 0 && (s = i), l = l === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? l : A(l, t), n(A(s, t), l, r);
  }
  for (const [a, i] of Object.entries(r))
    if (typeof i == "object" && i !== null)
      for (const [s, l] of Object.entries(i))
        i[s] = se(l, t);
    else
      r[a] = se(i, t);
  return t.sort === !1 ? r : (t.sort === !0 ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((a, i) => {
    const s = r[i];
    return a[i] = s && typeof s == "object" && !Array.isArray(s) ? Fe(s) : s, a;
  }, /* @__PURE__ */ Object.create(null));
}
function we(e, t) {
  if (!e)
    return "";
  t = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...t
  }, me(t.arrayFormatSeparator);
  const n = (s) => t.skipNull && Ge(e[s]) || t.skipEmptyString && e[s] === "", r = Ye(t), a = {};
  for (const [s, l] of Object.entries(e))
    n(s) || (a[s] = l);
  const i = Object.keys(a);
  return t.sort !== !1 && i.sort(t.sort), i.map((s) => {
    const l = e[s];
    return l === void 0 ? "" : l === null ? p(s, t) : Array.isArray(l) ? l.length === 0 && t.arrayFormat === "bracket-separator" ? p(s, t) + "[]" : l.reduce(r(s), []).join("&") : p(s, t) + "=" + p(l, t);
  }).filter((s) => s.length > 0).join("&");
}
function Ee(e, t) {
  var a;
  t = {
    decode: !0,
    ...t
  };
  let [n, r] = ye(e, "#");
  return n === void 0 && (n = e), {
    url: ((a = n == null ? void 0 : n.split("?")) == null ? void 0 : a[0]) ?? "",
    query: te(ee(e), t),
    ...t && t.parseFragmentIdentifier && r ? { fragmentIdentifier: A(r, t) } : {}
  };
}
function Ce(e, t) {
  t = {
    encode: !0,
    strict: !0,
    [q]: !0,
    ...t
  };
  const n = be(e.url).split("?")[0] || "", r = ee(e.url), a = {
    ...te(r, { sort: !1 }),
    ...e.query
  };
  let i = we(a, t);
  i && (i = `?${i}`);
  let s = Xe(e.url);
  if (typeof e.fragmentIdentifier == "string") {
    const l = new URL(n);
    l.hash = e.fragmentIdentifier, s = t[q] ? l.hash : `#${e.fragmentIdentifier}`;
  }
  return `${n}${i}${s}`;
}
function _e(e, t, n) {
  n = {
    parseFragmentIdentifier: !0,
    [q]: !1,
    ...n
  };
  const { url: r, query: a, fragmentIdentifier: i } = Ee(e, n);
  return Ce({
    url: r,
    query: Je(a, t),
    fragmentIdentifier: i
  }, n);
}
function Ze(e, t, n) {
  const r = Array.isArray(t) ? (a) => !t.includes(a) : (a, i) => !t(a, i);
  return _e(e, r, n);
}
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: Ze,
  extract: ee,
  parse: te,
  parseUrl: Ee,
  pick: _e,
  stringify: we,
  stringifyUrl: Ce
}, Symbol.toStringTag, { value: "Module" }));
function qe(e, t) {
  const n = {};
  for (const r in e)
    t(e[r]) && (n[r] = e[r]);
  return n;
}
function Wt(e, t) {
  return e = { ...e }, t.forEach((n) => delete e[n]), e;
}
function Yt(e, t = 0) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function Qt(e) {
  return new DOMParser().parseFromString(e, "text/html").documentElement.textContent;
}
function le() {
  return new RegExp(/bot|crawler|spider|crawling/i, "i").test(navigator.userAgent);
}
const et = "helium10.com", ve = "h10.com.cn", Xt = () => window.location.hostname.includes("helium10-dev.com") || window.location.hostname.includes("helium-dev.com") || !(window.location.host.includes("adtomic.stg") || window.location.host.includes("native-re-adtomic-stg")) && window.location.host.includes(".stg.helium10.com") || window.location.host === "h10mail.com", tt = window.location.hostname.includes(ve), nt = (e) => tt ? e.replace(et, ve) : e, rt = window.location.hostname.includes("helium-dev.com") || window.location.hostname.includes("ci.helium10-dev.com"), ce = nt(rt ? window.location.origin : "http://localhost:3060"), at = "/api/v1/site/token", ot = "/user/signin", $ = "CORE_BEARER_TOKEN", L = "CURRENT_ACCOUNT_ID", xe = (e) => {
  B() ? chrome.storage.local.set({ [$]: e }) : localStorage.setItem($, e);
}, Ae = () => B() ? new Promise((e) => {
  var t, n;
  try {
    (n = (t = chrome == null ? void 0 : chrome.storage) == null ? void 0 : t.local) == null || n.get([$], (r) => {
      r[$] ? e(r[$]) : e(null);
    });
  } catch {
    e(null);
  }
}) : localStorage.getItem($), Zt = async (e, t) => {
  const n = JSON.parse(await Ae() || "{}");
  xe(JSON.stringify({ ...n, [e]: t }));
}, it = async (e) => e && JSON.parse(await Ae() || "{}")[e] || null, Be = async (e) => {
  const t = await it(e);
  return t ? { Authorization: `Bearer ${t}` } : {};
}, qt = (e) => {
  B() ? chrome.storage.local.set({ [L]: Number(e) }) : sessionStorage.setItem(L, e);
}, st = () => B() ? new Promise((e) => {
  var t, n;
  try {
    (n = (t = chrome == null ? void 0 : chrome.storage) == null ? void 0 : t.local) == null || n.get([L], (r) => {
      r[L] ? e(r[L]) : e(null);
    });
  } catch {
    e(null);
  }
}) : z.parse(window.location.search).accountId || sessionStorage.getItem(L) || window.accountId, en = () => z.parse(window.location.search).accountId || sessionStorage.getItem(L) || String(window.accountId || ""), lt = async () => {
  const e = await st() || null;
  return e ? await Be(e) : {};
}, ct = "TOKEN_EXPIRED", ut = new Event(ct);
class ft extends Error {
  constructor(t, n, r) {
    super(t), this.message = t, this.result = r, this.responseStatus = n;
  }
}
const gt = (e) => !!e.fileBlob, dt = (e) => Object.keys(e).reduce((t, n) => {
  const r = e[n];
  return r && gt(r) ? t.append(n, r.fileBlob, r.fileName) : t.append(n, String(r)), t;
}, new FormData()), pt = (e, t, n = !1) => e === "GET" ? {} : n ? { body: dt(t) } : { body: JSON.stringify(t) }, ht = (e, t, n) => {
  const r = `${window.REACT_APP_DOMAIN_URL || ""}${t}`;
  return e === "GET" && n ? z.stringifyUrl({ url: r, query: n }) : r;
}, tn = async (e) => {
  const t = {
    ...e.isFormData ? {} : { Accept: "application/json", "Content-Type": "application/json" },
    ...e.accountId ? await Be(e.accountId) : {},
    ...e.useSessionAccountId ? await lt() : {},
    ...e.headers
  }, { query: n } = z.parseUrl(window.location.href);
  e.url.includes("/api/v2/widgets/") && n.padp && (e.url = z.stringifyUrl({ url: e.url, query: { padp: n.padp } }));
  const r = ht(e.method || "GET", e.url, e.params && typeof e.params == "object" ? e.params : {}), a = {
    method: e.method,
    ...pt(e.method || "GET", e.params || {}, e.isFormData),
    credentials: e.withCredentials ? "include" : "same-origin",
    headers: qe(t, (i) => i !== void 0),
    signal: e.signal
  };
  return { url: r, body: a };
}, nn = async (e, t) => {
  var a, i;
  let n;
  if (B() ? n = e.data : n = await e[(a = e.headers.get("Content-Type")) != null && a.includes("application/json") ? "json" : "text"](), !e.ok)
    throw e.status === 401 && !t.ignore401 && t.url.includes(window.location.hostname) ? (xe(""), !B() && yt()) : e.status === 401 && !t.ignore401 && !t.url.includes(at) && window.dispatchEvent(ut), e.status === 401 && B() && ((i = chrome == null ? void 0 : chrome.storage) == null || i.sync.set({ isUserLogged: !1 })), new ft(n.message, e.status, n);
  return { result: t.showHttpData ? {
    data: n,
    __httpData: {
      status: e.status,
      statusText: e.statusText
    }
  } : n, data: n };
}, yt = () => {
  window.location.assign(`${ce}${ot}?re=${window.btoa(window.location.host.includes(":") || window.location.origin.includes(ce) ? window.location.pathname : window.location.href)}`);
}, B = () => {
  var e, t, n;
  return window.chrome && !!((n = (t = (e = window.chrome) == null ? void 0 : e.runtime) == null ? void 0 : t.getManifest) != null && n.call(t));
};
var ue = Array.isArray, mt = function() {
  function e() {
  }
  var t = e.prototype;
  return t.stringify = function(n, r, a) {
    return encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape) + "=" + G.write(r) + Ft(a ?? {});
  }, t.parse = function(n) {
    return n === "" ? {} : n.split("; ").map(function(r) {
      return r.split("=");
    }).reduce(function(r, a) {
      var i = a[0], s = a.slice(1);
      return r[G.read(i)] = G.read(s.join("=")), r;
    }, {});
  }, e;
}(), Ft = function(e) {
  var t = "";
  return e.maxAge && (t += "; max-age=" + e.maxAge), e.path && (t += "; path=" + e.path), e.expires && (t += "; expires=" + e.expires.toUTCString()), e.domain && (t += "; domain=" + e.domain), e.sameSite && (t += "; samesite=" + e.sameSite), e.secure && (t += "; secure"), e.httpOnly && (t += "; httponly"), t;
}, G = { read: function(e) {
  return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
}, write: function(e) {
  return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
} }, bt = 0;
function k(e) {
  return "__private_" + bt++ + "_" + e;
}
function g(e, t) {
  if (!Object.prototype.hasOwnProperty.call(e, t))
    throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var N = k("cookie"), wt = function() {
  function e() {
    Object.defineProperty(this, N, { writable: !0, value: new mt() });
  }
  var t = e.prototype;
  return t.get = function() {
    return g(this, N)[N].parse(document.cookie);
  }, t.set = function(n, r, a) {
    document.cookie = g(this, N)[N].stringify(n, r, a);
  }, t.remove = function(n) {
    this.set(n, "", { maxAge: -1 });
  }, e;
}(), Et = function() {
  return typeof window == "object";
}, fe = function(e) {
  return typeof e == "object" && e !== null;
}, Ct = function() {
  function e() {
    this.subscribers = [];
  }
  var t, n = e.prototype;
  return n.addListener = function(r) {
    this.subscribers.push(r);
  }, n.removeListener = function(r) {
    this.subscribers = this.subscribers.filter(function(a) {
      return a !== r;
    });
  }, n.emit = function(r) {
    this.subscribers.forEach(function(a) {
      return a(r);
    });
  }, (t = [{ key: "hasSubscribers", get: function() {
    return !!this.subscribers.length;
  } }]) && function(r, a) {
    for (var i = 0; i < a.length; i++) {
      var s = a[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(r, s.key, s);
    }
  }(e.prototype, t), e;
}(), O = k("cookie"), U = k("prevCookie"), P = k("task"), _ = k("isExecuting"), M = k("cancelId"), _t = function() {
  function e(n) {
    Object.defineProperty(this, O, { writable: !0, value: void 0 }), Object.defineProperty(this, U, { writable: !0, value: {} }), Object.defineProperty(this, P, { writable: !0, value: function() {
    } }), Object.defineProperty(this, _, { writable: !0, value: !1 }), Object.defineProperty(this, M, { writable: !0, value: 0 }), g(this, O)[O] = n;
  }
  var t = e.prototype;
  return t._task = function(n) {
    function r() {
      return n.apply(this, arguments);
    }
    return r.toString = function() {
      return n.toString();
    }, r;
  }(function() {
    var n = g(this, O)[O].get();
    (function(r, a) {
      if (Object.is(r, a))
        return !0;
      if (fe(r) && fe(a)) {
        var i = Object.keys(r), s = Object.keys(a);
        return i.length == s.length && i.every(function(l) {
          return Object.is(r[l], a[l]);
        });
      }
      return !1;
    })(n, g(this, U)[U]) || (g(this, P)[P](n), this.setCache(n)), g(this, _)[_] && this.execute();
  }), t.execute = function() {
    g(this, M)[M] = requestAnimationFrame(this._task.bind(this));
  }, t.setCache = function(n) {
    g(this, U)[U] = n;
  }, t.setTask = function(n) {
    g(this, P)[P] = n;
  }, t.stop = function() {
    g(this, _)[_] = !1, cancelAnimationFrame(g(this, M)[M]);
  }, t.start = function() {
    g(this, _)[_] || (this.execute(), g(this, _)[_] = !0, this.setCache(g(this, O)[O].get()));
  }, e;
}(), vt = function() {
  function e() {
  }
  var t = e.prototype;
  return t.addListener = function() {
    console.error("RealTimeCookie should not use in server render");
  }, t.removeListener = function() {
    console.error("RealTimeCookie should not use in server render");
  }, e;
}(), v = k("emitter"), x = k("task"), xt = function() {
  function e(n) {
    var r = this;
    Object.defineProperty(this, v, { writable: !0, value: new Ct() }), Object.defineProperty(this, x, { writable: !0, value: void 0 }), g(this, x)[x] = n, g(this, x)[x].setTask(function(a) {
      return g(r, v)[v].emit(a);
    });
  }
  var t = e.prototype;
  return t.addListener = function(n) {
    g(this, v)[v].addListener(n), g(this, x)[x].start();
  }, t.removeListener = function(n) {
    g(this, v)[v].removeListener(n), g(this, v)[v].hasSubscribers || g(this, x)[x].stop();
  }, e;
}(), At = function(e) {
  return Et() ? new xt(new _t(e)) : new vt();
}, ge = function(e) {
  return typeof e == "object" && e !== null;
}, Bt = function(e, t) {
  return function(n) {
    var r = n ?? function(u) {
      return u;
    }, a = V.useRef(r);
    a.current = r;
    var i = V.useState(function() {
      return a.current(e.get());
    }), s = i[0], l = i[1], c = V.useRef(s);
    return V.useEffect(function() {
      var u = function(f) {
        var h = a.current(f);
        (function(F, b) {
          if (Object.is(F, b))
            return !0;
          if (ge(F) && ge(b)) {
            var K = Object.keys(F), d = Object.keys(b);
            return K.length == d.length && K.every(function(w) {
              return Object.is(F[w], b[w]);
            });
          }
          return !1;
        })(c.current, h) || (l(h), c.current = h);
      };
      return t.addListener(u), function() {
        return t.removeListener(u);
      };
    }, []), s;
  };
};
const W = "helium10_app_language", Y = (e) => {
  const [t, n] = (e || "").split("-");
  return { language: t, region: n };
}, J = new wt(), Dt = At(J), kt = Bt(J, Dt);
function rn({ children: e, strings: t, TranslateContext: n, forceLang: r }) {
  const a = E.useRef(!1), { language: i, region: s } = E.useMemo(() => Y(J.get()[W]), [W, J, Y]), { language: l } = kt(({ [W]: d }) => Y(d)), [c, u] = E.useState(() => {
    if (!le() && navigator.userAgent.includes("Chrome") && B())
      return r || t.getLanguage();
    {
      const d = r || i || "en";
      return t.setLanguage(d), d;
    }
  }), f = E.useCallback((d) => {
    t.setLanguage(r || d), u(r || d);
  }, [r, t]), h = E.useCallback((d) => {
    t.setContent(d);
  }, [t]), F = E.useCallback(() => t.getAvailableLanguages(), [t]);
  E.useEffect(() => {
    !le() && navigator.userAgent.includes("Chrome") && B() ? chrome.storage.sync.get("settings", ({ settings: d }) => {
      f(r || (d == null ? void 0 : d.language) || "en");
    }) : a.current && f(i ? r || i : r || "en"), a.current = !0;
  }, [r, i, f, s]);
  const b = E.useCallback((d, { nodes: w, ...R } = {}) => {
    if (R.count !== void 0 && typeof R.count == "number") {
      const C = t.getLanguage();
      d += "." + new Intl.PluralRules(C).select(R.count);
    }
    w && ue(w) && w.forEach((C, j) => {
      R[`node_${j}`] = "__REACT_NODE__";
    });
    const I = t.getString(d) || t.getString(d, "en");
    if (typeof I == "string") {
      const C = t.formatString(t != null && t[I] ? I + "‎" : I, R);
      return w && ue(w) ? String(Array.isArray(C) ? C[0] : C).split("__REACT_NODE__").reduce((j, Ne, ne) => (j.push(Ne), w[ne] && j.push(w[ne]), j), []) : String(Array.isArray(C) ? C[0] : C);
    } else
      return I || d;
  }, [t, c, s]), K = E.useMemo(() => ({
    region: s,
    language: c,
    cookieLanguage: r || l || "en",
    getAvailableLanguages: F,
    changeLanguage: f,
    setContent: h,
    t: b
  }), [c, r, l, F, f, h, b]);
  return Me.jsx(n.Provider, { value: K, children: e });
}
var De = {}, S = {};
Object.defineProperty(S, "__esModule", {
  value: !0
});
S.getInterfaceLanguage = Ot;
S.getBestMatchingLanguage = Lt;
S.validateTranslationKeys = $t;
S.randomPseudo = St;
function Ot() {
  var e = "en-US";
  if (typeof navigator > "u")
    return e;
  var t = navigator;
  if (t) {
    if (t.language)
      return t.language;
    if (t.languages && t.languages[0])
      return t.languages[0];
    if (t.userLanguage)
      return t.userLanguage;
    if (t.browserLanguage)
      return t.browserLanguage;
  }
  return e;
}
function Lt(e, t) {
  if (t[e])
    return e;
  var n = e.indexOf("-"), r = n >= 0 ? e.substring(0, n) : e;
  return t[r] ? r : Object.keys(t)[0];
}
function $t(e) {
  var t = ["_interfaceLanguage", "_language", "_defaultLanguage", "_defaultLanguageFirstLevelKeys", "_props"];
  e.forEach(function(n) {
    if (t.indexOf(n) !== -1)
      throw new Error(n + " cannot be used as a key. It is a reserved word.");
  });
}
function St(e) {
  for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r += 1)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
Object.defineProperty(De, "__esModule", {
  value: !0
});
var Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, It = /* @__PURE__ */ function() {
  function e(t, n) {
    var r = [], a = !0, i = !1, s = void 0;
    try {
      for (var l = t[Symbol.iterator](), c; !(a = (c = l.next()).done) && (r.push(c.value), !(n && r.length === n)); a = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !a && l.return && l.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
  return function(t, n) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return e(t, n);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), de = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, jt = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), Tt = S, H = Nt(Tt);
function Nt(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function Ut(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Q = /(\{[\d|\w]+\})/, X = /(\$ref\{[\w|.]+\})/, Pt = function() {
  function e(t, n) {
    Ut(this, e), typeof n == "function" && (n = { customLanguageInterface: n }), this._opts = de({}, {
      customLanguageInterface: H.getInterfaceLanguage,
      pseudo: !1,
      pseudoMultipleLanguages: !1,
      logsEnabled: !0
    }, n), this._interfaceLanguage = this._opts.customLanguageInterface(), this._language = this._interfaceLanguage, this.setContent(t);
  }
  return jt(e, [{
    key: "setContent",
    value: function(n) {
      var r = this, a = Object.keys(n), i = It(a, 1), s = i[0];
      this._defaultLanguage = s, this._defaultLanguageFirstLevelKeys = [], this._props = n, H.validateTranslationKeys(Object.keys(n[this._defaultLanguage])), Object.keys(this._props[this._defaultLanguage]).forEach(function(l) {
        typeof r._props[r._defaultLanguage][l] == "string" && r._defaultLanguageFirstLevelKeys.push(l);
      }), this.setLanguage(this._interfaceLanguage), this._opts.pseudo && this._pseudoAllValues(this._props);
    }
    /**
     * Replace all strings to pseudo value
     * @param {Object} obj - Loopable object
     */
  }, {
    key: "_pseudoAllValues",
    value: function(n) {
      var r = this;
      Object.keys(n).forEach(function(a) {
        if (Rt(n[a]) === "object")
          r._pseudoAllValues(n[a]);
        else if (typeof n[a] == "string") {
          if (n[a].indexOf("[") === 0 && n[a].lastIndexOf("]") === n[a].length - 1)
            return;
          for (var i = n[a].split(" "), s = 0; s < i.length; s += 1)
            if (!i[s].match(Q)) {
              if (!i[s].match(X)) {
                var l = i[s].length;
                r._opts.pseudoMultipleLanguages && (l = parseInt(l * 1.4, 10)), i[s] = H.randomPseudo(l);
              }
            }
          n[a] = "[" + i.join(" ") + "]";
        }
      });
    }
    /**
     * Can be used from ouside the class to force a particular language
     * indipendently from the interface one
     * @param {*} language
     */
  }, {
    key: "setLanguage",
    value: function(n) {
      var r = this, a = H.getBestMatchingLanguage(n, this._props), i = Object.keys(this._props)[0];
      if (this._language = a, this._props[a]) {
        for (var s = 0; s < this._defaultLanguageFirstLevelKeys.length; s += 1)
          delete this[this._defaultLanguageFirstLevelKeys[s]];
        var l = de({}, this._props[this._language]);
        Object.keys(l).forEach(function(c) {
          r[c] = l[c];
        }), i !== this._language && (l = this._props[i], this._fallbackValues(l, this));
      }
    }
    /**
     * Load fallback values for missing translations
     * @param {*} defaultStrings
     * @param {*} strings
     */
  }, {
    key: "_fallbackValues",
    value: function(n, r) {
      var a = this;
      Object.keys(n).forEach(function(i) {
        Object.prototype.hasOwnProperty.call(n, i) && !r[i] && r[i] !== "" ? (r[i] = n[i], a._opts.logsEnabled && console.log("🚧 👷 key '" + i + "' not found in localizedStrings for language " + a._language + " 🚧")) : typeof r[i] != "string" && a._fallbackValues(n[i], r[i]);
      });
    }
    /**
     * The current language displayed (could differ from the interface language
     * if it has been forced manually and a matching translation has been found)
     */
  }, {
    key: "getLanguage",
    value: function() {
      return this._language;
    }
    /**
     * The current interface language (could differ from the language displayed)
     */
  }, {
    key: "getInterfaceLanguage",
    value: function() {
      return this._interfaceLanguage;
    }
    /**
     * Return an array containing the available languages passed as props in the constructor
     */
  }, {
    key: "getAvailableLanguages",
    value: function() {
      var n = this;
      return this._availableLanguages || (this._availableLanguages = [], Object.keys(this._props).forEach(function(r) {
        n._availableLanguages.push(r);
      })), this._availableLanguages;
    }
    // Format the passed string replacing the numbered or tokenized placeholders
    // eg. 1: I'd like some {0} and {1}, or just {0}
    // eg. 2: I'd like some {bread} and {butter}, or just {bread}
    // eg. 3: I'd like some $ref{bread} and $ref{butter}, or just $ref{bread}
    // Use example:
    // eg. 1: strings.formatString(strings.question, strings.bread, strings.butter)
    // eg. 2: strings.formatString(strings.question, { bread: strings.bread, butter: strings.butter })
    // eg. 3: strings.formatString(strings.question)
  }, {
    key: "formatString",
    value: function(n) {
      for (var r = this, a = arguments.length, i = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
        i[s - 1] = arguments[s];
      var l = n || "";
      typeof l == "string" && (l = this.getString(n, null, !0) || l);
      var c = l.split(X).filter(function(u) {
        return !!u;
      }).map(function(u) {
        if (u.match(X)) {
          var f = u.slice(5, -1), h = r.getString(f);
          return h || (r._opts.logsEnabled && console.log("No Localization ref found for '" + u + "' in string '" + n + "'"), "$ref(id:" + f + ")");
        }
        return u;
      }).join("");
      return c.split(Q).filter(function(u) {
        return !!u;
      }).map(function(u) {
        if (u.match(Q)) {
          var f = u.slice(1, -1), h = i[f];
          if (h === void 0) {
            var F = i[0][f];
            if (F !== void 0)
              h = F;
            else
              return h;
          }
          return h;
        }
        return u;
      }).join("");
    }
    // Return a string with the passed key in a different language or defalt if not set
    // We allow deep . notation for finding strings
  }, {
    key: "getString",
    value: function(n, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      try {
        for (var i = this._props[r || this._language], s = n.split("."), l = 0; l < s.length; l += 1) {
          if (i[s[l]] === void 0)
            throw Error(s[l]);
          i = i[s[l]];
        }
        return i;
      } catch (c) {
        !a && this._opts.logsEnabled && console.log("No localization found for key '" + n + "' and language '" + r + "', failed on " + c.message);
      }
      return null;
    }
    /**
     * The current props (locale object)
     */
  }, {
    key: "getContent",
    value: function() {
      return this._props;
    }
  }]), e;
}(), an = De.default = Pt;
const m = y`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-weight: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  text-transform: none;
`, ke = y`
  ${m};
  font-size: 40px;
  line-height: 48px;
  color: ${(e) => e.theme.systemColors.black};
`, Oe = y`
  ${m};
  font-size: 32px;
  line-height: 40px;
  color: ${(e) => e.theme.systemColors.black};
`, Le = y`
  ${m};
  font-size: 28px;
  line-height: 36px;
  color: ${(e) => e.theme.systemColors.black};
`, $e = y`
  ${m};
  font-size: 24px;
  line-height: 32px;
  color: ${(e) => e.theme.systemColors.black};
`, Se = y`
  ${m};
  font-size: 20px;
  line-height: 26px;
  color: ${(e) => e.theme.systemColors.black};
`, Re = y`
  ${m};
  font-size: 18px;
  line-height: 26px;
  color: ${(e) => e.theme.systemColors.black};
`, Ie = y`
  ${m};
  font-size: 16px;
  line-height: 24px;
  color: ${(e) => e.theme.systemColors.grey600};
`, je = y`
  ${m};
  font-size: 14px;
  line-height: 18px;
  color: ${(e) => e.theme.systemColors.grey600};
`, Te = y`
  ${m};
  font-size: 12px;
  line-height: 16px;
  color: ${(e) => e.theme.systemColors.grey600};
`, on = y`
  ${m};
  ${ke};
  font-weight: 800;
`, sn = y`
  ${m};
  ${Oe};
  color: ${(e) => e.theme.systemColors.black};
  font-weight: 800;
`, ln = y`
  ${m};
  ${Le};
  color: ${(e) => e.theme.systemColors.black};
  font-weight: 800;
`, cn = y`
  ${m};
  ${$e};
  color: ${(e) => e.theme.systemColors.black};
  font-weight: 800;
`, un = y`
  ${m};
  ${Se};
  font-weight: 800;
`, fn = y`
  ${m};
  ${Re};
  font-weight: 700;
`, gn = y`
  ${m};
  ${Ie};
  font-weight: 700;
`, dn = y`
  ${m};
  ${je};
  font-weight: 700;
`, pn = y`
  ${m};
  ${Te};
  font-weight: 700;
`;
D.h1`
  ${ke}
`;
D.h2`
  ${Oe}
`;
D.h3`
  ${Le}
`;
D.h4`
  ${$e}
`;
D.h5`
  ${Se}
`;
D.p`
  ${Re}
`;
D.p`
  ${Ie}
`;
const hn = D.p`
  ${je}
`;
D.p`
  ${Te}
`;
const o = {
  grey50: "#F8FAFB",
  grey100: "#F2F5F7",
  grey200: "#D9E0E8",
  grey220: "#CCD4DE",
  grey300: "#A6B7C9",
  grey400: "#6784A2",
  grey600: "#485E75",
  grey800: "#2B3948",
  blue20: "#F3FBFF",
  blue50: "#E8F6FF",
  blue100: "#D2EDFF",
  blue200: "#A5DBFF",
  blue400: "#5CB3FF",
  blue600: "#0A6FE8",
  blue700: "#0253B6",
  blue800: "#0253B6",
  blue900: "#003873",
  purple100: "#F1EDFB",
  purple200: "#E1D6FC",
  purple300: "#C9B9F0",
  purple400: "#B39DE4",
  purple500: "#9C7EDB",
  purple600: "#8053CE",
  purple700: "#6A2AC0",
  purple800: "#4D1F8C",
  purple900: "#31145A",
  purple1000: "#17092B",
  cyan100: "#E6F4FC",
  cyan200: "#C2E9FF",
  cyan300: "#85D0FF",
  cyan400: "#38B3FF",
  cyan500: "#1295ED",
  cyan600: "#006EBD",
  cyan700: "#004F94",
  cyan800: "#003666",
  cyan900: "#012646",
  cyan1000: "#130F2F",
  teal100: "#E4F5F5",
  teal200: "#C8F0EE",
  teal300: "#91DED8",
  teal400: "#61D6D0",
  teal500: "#1BA3A1",
  teal600: "#0C7E7D",
  teal700: "#0C6968",
  teal800: "#0B4745",
  teal900: "#083130",
  teal1000: "#041B1B",
  pink100: "#FEEBEF",
  pink200: "#FFD7DE",
  pink300: "#FDB0BF",
  pink400: "#FC849F",
  pink500: "#FB527E",
  pink600: "#D70059",
  pink700: "#A70045",
  pink800: "#7E0034",
  pink900: "#550023",
  pink1000: "#2D0013",
  tomato50: "#FEEEEE",
  tomato100: "#FDE5E5",
  tomato200: "#FFD2D0",
  tomato300: "#FAAFAC",
  tomato400: "#FC837E",
  tomato500: "#E72B2B",
  tomato600: "#D11A26",
  tomato700: "#B71520",
  tomato800: "#751A0F",
  tomato900: "#4C1109",
  tomato1000: "#280805",
  celery100: "#E5F8DE",
  celery200: "#CAF4B9",
  celery300: "#95DF70",
  celery400: "#6AC22A",
  celery500: "#5AA126",
  celery600: "#447A1D",
  celery700: "#345D16",
  celery800: "#254310",
  celery900: "#172A0A",
  celery1000: "#0B1304",
  dataBlue100: "#EBF1FC",
  dataBlue200: "#D1E1FF",
  dataBlue300: "#A9C7FE",
  dataBlue400: "#7BA7FE",
  dataBlue500: "#4985FD",
  dataBlue600: "#1360FB",
  dataBlue700: "#0248CA",
  dataBlue800: "#02359D",
  dataBlue900: "#01246A",
  dataBlue1000: "#011641",
  yellow100: "#FEF7D4",
  yellow200: "#FCE66A",
  yellow300: "#F1CD1B",
  yellow400: "#D4B804",
  yellow500: "#B29202",
  yellow600: "#8A6C01",
  yellow700: "#685501",
  yellow800: "#483B01",
  yellow900: "#2E2300",
  yellow1000: "#1A1501",
  orange100: "#FFF1E0",
  orange200: "#FFE4C4",
  orange300: "#FFC582",
  orange400: "#FF8F2E",
  orange500: "#EB6702",
  orange600: "#B25300",
  orange700: "#8B3F00",
  orange800: "#5F2B00",
  orange900: "#3F1B00",
  orange1000: "#230F00",
  green50: "#EAFBEF",
  green100: "#DEF8E6",
  green200: "#B9F4CC",
  green300: "#6EDF97",
  green400: "#2CCB71",
  green500: "#2CA460",
  green600: "#217C49",
  green700: "#1A5F38",
  green800: "#124428",
  green900: "#0C2B19",
  green1000: "#05140C",
  violet100: "#EAEAFE",
  violet200: "#D7D7FE",
  violet300: "#B4B5FA",
  violet400: "#9A9BEE",
  violet500: "#7E7EF1",
  violet600: "#5659DA",
  violet700: "#3F42B2",
  violet800: "#2C2F7E",
  violet900: "#1D1E52",
  violet1000: "#0E0F28",
  magenta100: "#F4EBFE",
  magenta200: "#EBD7FE",
  magenta300: "#D8B3FA",
  magenta400: "#C88DF8",
  magenta500: "#B86BEF",
  magenta600: "#A428E7",
  magenta700: "#8700C0",
  magenta800: "#64008F",
  magenta900: "#43005F",
  magenta1000: "#240033"
}, Mt = {
  grey50: o.grey50,
  grey100: o.grey100,
  grey200: o.grey200,
  grey220: o.grey220,
  grey300: o.grey300,
  grey400: o.grey400,
  grey600: o.grey600,
  grey800: o.grey800,
  blue50: o.blue50,
  blue100: o.blue100,
  blue200: o.blue200,
  blue400: o.blue400,
  blue600: o.blue600,
  // Sky Blue
  blue800: o.blue800,
  blue900: o.blue900,
  // Indigo Blue
  green100: "#D6F5EB",
  // Ocean Green Light
  green300: "#6CDAB6",
  // Ocean Green
  /**
   * @fires It is Illustration-Green-400
   * @see green800 for System-Green-400
   */
  green400: "#33CC99",
  // Ocean Green
  green600: "#29A67C",
  // Ocean Green Dark
  /** System Green 400 */
  green800: "#1E785A",
  // System Green 400
  orange100: "#FEEDEC",
  // Tart Orange Light
  orange200: "#FDD9D8",
  // Tart Orange
  orange300: "#F87E77",
  // Tart Orange
  orange400: "#F64F45",
  // Tart Orange
  orange600: "#C43E37",
  // Tart Orange Dark
  red100: "#FDDCDA",
  red400: "#C91309",
  /**
   * @fires It is Illustration-Yellow-100
   * @see yellow200 for System-Yellow-100
   */
  yellow100: "#FDFAE8",
  // Sunny Yellow Light
  /** System Yellow 100 */
  yellow200: "#FCF5D1",
  // System Yellow 100
  /**
   * @fires It is Illustration-Yellow-400
   * @see yellow800 for System-Yellow-400
   */
  yellow400: "#EFCF1A",
  // Sunny Yellow
  yellow600: "#D1B517",
  // Sunny Yellow Dark
  /** System Yellow 400 */
  yellow800: "#A15C0E",
  // System Yellow 600
  shadow100: "#2B394814",
  // 8%
  shadow200: "#2B394829",
  // 16%
  white: "#FFFFFF",
  // Paper
  black: "#13191F"
  //  Rich Black
}, zt = {
  darkPurple: o.purple700,
  lightPurple: o.purple500,
  pink: o.pink500,
  peach: o.pink700,
  orange: o.orange500,
  orange200: o.orange200,
  sunshineYellow: o.yellow500,
  mintGreen: o.green500,
  mossGreen: o.celery600,
  teal: o.teal500,
  violet: o.violet600,
  blue50: o.blue50,
  blue100: o.blue100,
  purple500: o.purple500,
  purple700: o.purple700,
  purple800: o.purple800,
  cyan500: o.cyan500,
  cyan900: o.cyan900,
  teal500: o.teal500,
  teal700: o.teal700,
  pink500: o.pink500,
  pink700: o.pink700,
  tomato50: o.tomato50,
  tomato100: o.tomato100,
  tomato400: o.tomato400,
  tomato500: o.tomato500,
  tomato600: o.tomato600,
  tomato900: o.tomato900,
  celery600: o.celery600,
  dataBlue800: o.dataBlue800,
  yellow100: o.yellow100,
  yellow200: o.yellow200,
  yellow500: o.yellow500,
  orange500: o.orange500,
  green50: o.green50,
  green100: o.green100,
  green400: o.green400,
  green500: o.green500,
  violet600: o.violet600,
  magenta600: o.magenta600,
  grey300: o.grey300
}, Kt = {
  purple: { background: o.purple100, text: o.purple600 },
  cyan: { background: o.cyan100, text: o.cyan600 },
  teal: { background: o.teal100, text: o.teal600 },
  pink: { background: o.pink100, text: o.pink600 },
  celery: { background: o.celery100, text: o.celery600 },
  dataBlue: { background: o.dataBlue100, text: o.dataBlue600 },
  orange: { background: o.orange100, text: o.orange600 },
  violet: { background: o.violet100, text: o.violet600 },
  magenta: { background: o.magenta100, text: o.magenta600 },
  yellow: { background: o.yellow100, text: o.yellow600 },
  grey: { background: o.grey100, text: o.grey600 }
}, Vt = {
  purple: {
    tone100: o.purple100,
    tone600: o.purple600,
    tone700: o.purple700
  },
  cyan: {
    tone100: o.cyan100,
    tone600: o.cyan600,
    tone700: o.cyan700
  },
  teal: {
    tone100: o.teal100,
    tone600: o.teal600,
    tone700: o.teal700
  },
  pink: {
    tone100: o.pink100,
    tone600: o.pink600,
    tone700: o.pink700
  },
  celery: {
    tone100: o.celery100,
    tone600: o.celery600,
    tone700: o.celery700
  },
  dataBlue: {
    tone100: o.dataBlue100,
    tone600: o.dataBlue600,
    tone700: o.dataBlue700
  },
  orange: {
    tone100: o.orange100,
    tone600: o.orange600,
    tone700: o.orange700
  },
  violet: {
    tone100: o.violet100,
    tone600: o.violet600,
    tone700: o.violet700
  },
  magenta: {
    tone100: o.magenta100,
    tone600: o.magenta600,
    tone700: o.magenta700
  },
  yellow: {
    tone100: o.yellow100,
    tone600: o.yellow600,
    tone700: o.yellow700
  },
  grey: {
    tone100: o.grey100,
    tone600: o.grey600,
    tone700: o.grey800
  }
}, yn = {
  fontSize: {
    headerBig: "34px",
    headerSmaller: "14px",
    h1: "40px",
    h2: "32px",
    h3: "28px",
    h4: "24px",
    h5: "20px",
    large: "18px",
    middle: "16px",
    small: "14px",
    extraSmall: "12px"
  },
  media: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1320px"
  },
  spacing: {
    sp4: "4px",
    sp6: "6px",
    sp8: "8px",
    sp12: "12px",
    sp16: "16px",
    sp20: "20px",
    sp24: "24px",
    sp32: "32px",
    sp48: "48px",
    sp64: "64px",
    sp80: "80px"
  },
  /** @mixes Illustration-Colors */
  systemColors: Mt,
  dataVisualizationColors: zt,
  twoToneColors: Kt,
  threeToneColors: Vt
};
export {
  Zt as A,
  qt as B,
  yt as C,
  it as D,
  rt as E,
  ft as F,
  ct as G,
  Qt as H,
  Xt as I,
  on as J,
  Mt as K,
  W as L,
  tn as M,
  nn as N,
  B as O,
  L as P,
  Oe as Q,
  en as R,
  hn as S,
  rn as T,
  Wt as U,
  an as _,
  Ie as a,
  ze as b,
  Te as c,
  Re as d,
  Le as e,
  fn as f,
  je as g,
  gn as h,
  ln as i,
  Me as j,
  dn as k,
  sn as l,
  ce as m,
  un as n,
  Se as o,
  cn as p,
  z as q,
  ue as r,
  yn as s,
  nt as t,
  o as u,
  pn as v,
  J as w,
  Yt as x,
  $e as y,
  at as z
};
