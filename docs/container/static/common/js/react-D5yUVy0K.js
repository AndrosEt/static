function Q(c, h) {
  for (var y = 0; y < h.length; y++) {
    const p = h[y];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const _ in p)
        if (_ !== "default" && !(_ in c)) {
          const v = Object.getOwnPropertyDescriptor(p, _);
          v && Object.defineProperty(c, _, v.get ? v : {
            enumerable: !0,
            get: () => p[_]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Y(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
function te(c) {
  if (c.__esModule)
    return c;
  var h = c.default;
  if (typeof h == "function") {
    var y = function p() {
      return this instanceof p ? Reflect.construct(h, arguments, this.constructor) : h.apply(this, arguments);
    };
    y.prototype = h.prototype;
  } else
    y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(c).forEach(function(p) {
    var _ = Object.getOwnPropertyDescriptor(c, p);
    Object.defineProperty(y, p, _.get ? _ : {
      enumerable: !0,
      get: function() {
        return c[p];
      }
    });
  }), y;
}
var V = { exports: {} }, r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function X() {
  if (q)
    return r;
  q = 1;
  var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), N = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), k = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, P = {};
  function m(e, t, n) {
    this.props = e, this.context = t, this.refs = P, this.updater = n || $;
  }
  m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  }, m.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function x() {
  }
  x.prototype = m.prototype;
  function w(e, t, n) {
    this.props = e, this.context = t, this.refs = P, this.updater = n || $;
  }
  var R = w.prototype = new x();
  R.constructor = w, C(R, m.prototype), R.isPureReactComponent = !0;
  var I = Array.isArray, T = Object.prototype.hasOwnProperty, E = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(e, t, n) {
    var u, o = {}, f = null, l = null;
    if (t != null)
      for (u in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (f = "" + t.key), t)
        T.call(t, u) && !A.hasOwnProperty(u) && (o[u] = t[u]);
    var s = arguments.length - 2;
    if (s === 1)
      o.children = n;
    else if (1 < s) {
      for (var i = Array(s), d = 0; d < s; d++)
        i[d] = arguments[d + 2];
      o.children = i;
    }
    if (e && e.defaultProps)
      for (u in s = e.defaultProps, s)
        o[u] === void 0 && (o[u] = s[u]);
    return { $$typeof: c, type: e, key: f, ref: l, props: o, _owner: E.current };
  }
  function G(e, t) {
    return { $$typeof: c, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function j(e) {
    return typeof e == "object" && e !== null && e.$$typeof === c;
  }
  function W(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var M = /\/+/g;
  function O(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? W("" + e.key) : t.toString(36);
  }
  function b(e, t, n, u, o) {
    var f = typeof e;
    (f === "undefined" || f === "boolean") && (e = null);
    var l = !1;
    if (e === null)
      l = !0;
    else
      switch (f) {
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case c:
            case h:
              l = !0;
          }
      }
    if (l)
      return l = e, o = o(l), e = u === "" ? "." + O(l, 0) : u, I(o) ? (n = "", e != null && (n = e.replace(M, "$&/") + "/"), b(o, t, n, "", function(d) {
        return d;
      })) : o != null && (j(o) && (o = G(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(M, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, u = u === "" ? "." : u + ":", I(e))
      for (var s = 0; s < e.length; s++) {
        f = e[s];
        var i = u + O(f, s);
        l += b(f, t, n, i, o);
      }
    else if (i = H(e), typeof i == "function")
      for (e = i.call(e), s = 0; !(f = e.next()).done; )
        f = f.value, i = u + O(f, s++), l += b(f, t, n, i, o);
    else if (f === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l;
  }
  function S(e, t, n) {
    if (e == null)
      return e;
    var u = [], o = 0;
    return b(e, u, "", "", function(f) {
      return t.call(n, f, o++);
    }), u;
  }
  function J(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var a = { current: null }, g = { transition: null }, K = { ReactCurrentDispatcher: a, ReactCurrentBatchConfig: g, ReactCurrentOwner: E };
  return r.Children = { map: S, forEach: function(e, t, n) {
    S(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return S(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return S(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!j(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } }, r.Component = m, r.Fragment = y, r.Profiler = _, r.PureComponent = w, r.StrictMode = p, r.Suspense = L, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, r.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u = C({}, e.props), o = e.key, f = e.ref, l = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (f = t.ref, l = E.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
      for (i in t)
        T.call(t, i) && !A.hasOwnProperty(i) && (u[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
    }
    var i = arguments.length - 2;
    if (i === 1)
      u.children = n;
    else if (1 < i) {
      s = Array(i);
      for (var d = 0; d < i; d++)
        s[d] = arguments[d + 2];
      u.children = s;
    }
    return { $$typeof: c, type: e.type, key: o, ref: f, props: u, _owner: l };
  }, r.createContext = function(e) {
    return e = { $$typeof: N, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: v, _context: e }, e.Consumer = e;
  }, r.createElement = D, r.createFactory = function(e) {
    var t = D.bind(null, e);
    return t.type = e, t;
  }, r.createRef = function() {
    return { current: null };
  }, r.forwardRef = function(e) {
    return { $$typeof: U, render: e };
  }, r.isValidElement = j, r.lazy = function(e) {
    return { $$typeof: B, _payload: { _status: -1, _result: e }, _init: J };
  }, r.memo = function(e, t) {
    return { $$typeof: z, type: e, compare: t === void 0 ? null : t };
  }, r.startTransition = function(e) {
    var t = g.transition;
    g.transition = {};
    try {
      e();
    } finally {
      g.transition = t;
    }
  }, r.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, r.useCallback = function(e, t) {
    return a.current.useCallback(e, t);
  }, r.useContext = function(e) {
    return a.current.useContext(e);
  }, r.useDebugValue = function() {
  }, r.useDeferredValue = function(e) {
    return a.current.useDeferredValue(e);
  }, r.useEffect = function(e, t) {
    return a.current.useEffect(e, t);
  }, r.useId = function() {
    return a.current.useId();
  }, r.useImperativeHandle = function(e, t, n) {
    return a.current.useImperativeHandle(e, t, n);
  }, r.useInsertionEffect = function(e, t) {
    return a.current.useInsertionEffect(e, t);
  }, r.useLayoutEffect = function(e, t) {
    return a.current.useLayoutEffect(e, t);
  }, r.useMemo = function(e, t) {
    return a.current.useMemo(e, t);
  }, r.useReducer = function(e, t, n) {
    return a.current.useReducer(e, t, n);
  }, r.useRef = function(e) {
    return a.current.useRef(e);
  }, r.useState = function(e) {
    return a.current.useState(e);
  }, r.useSyncExternalStore = function(e, t, n) {
    return a.current.useSyncExternalStore(e, t, n);
  }, r.useTransition = function() {
    return a.current.useTransition();
  }, r.version = "18.2.0", r;
}
V.exports = X();
var F = V.exports;
const Z = /* @__PURE__ */ Y(F), re = /* @__PURE__ */ Q({
  __proto__: null,
  default: Z
}, [F]);
export {
  Z as R,
  te as a,
  re as b,
  ee as c,
  Y as g,
  F as r
};
