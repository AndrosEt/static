import { b as R, a as $ } from "./T2z8X-I8.js";
import { R as h } from "./react-D5yUVy0K.js";
import { R as g } from "./react-dom-CwZtGxo1.js";
function D(r, l) {
  if (r == null)
    return {};
  var p = {}, t = Object.keys(r), n, e;
  for (e = 0; e < t.length; e++)
    n = t[e], !(l.indexOf(n) >= 0) && (p[n] = r[n]);
  return p;
}
function L(r, l) {
  return r.classList ? !!l && r.classList.contains(l) : (" " + (r.className.baseVal || r.className) + " ").indexOf(" " + l + " ") !== -1;
}
function M(r, l) {
  r.classList ? r.classList.add(l) : L(r, l) || (typeof r.className == "string" ? r.className = r.className + " " + l : r.setAttribute("class", (r.className && r.className.baseVal || "") + " " + l));
}
function b(r, l) {
  return r.replace(new RegExp("(^|\\s)" + l + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function I(r, l) {
  r.classList ? r.classList.remove(l) : typeof r.className == "string" ? r.className = b(r.className, l) : r.setAttribute("class", b(r.className && r.className.baseVal || "", l));
}
const O = {
  disabled: !1
}, k = h.createContext(null);
var A = function(l) {
  return l.scrollTop;
}, C = "unmounted", E = "exited", v = "entering", m = "entered", S = "exiting", c = /* @__PURE__ */ function(r) {
  R(l, r);
  function l(t, n) {
    var e;
    e = r.call(this, t, n) || this;
    var i = n, s = i && !i.isMounting ? t.enter : t.appear, a;
    return e.appearStatus = null, t.in ? s ? (a = E, e.appearStatus = v) : a = m : t.unmountOnExit || t.mountOnEnter ? a = C : a = E, e.state = {
      status: a
    }, e.nextCallback = null, e;
  }
  l.getDerivedStateFromProps = function(n, e) {
    var i = n.in;
    return i && e.status === C ? {
      status: E
    } : null;
  };
  var p = l.prototype;
  return p.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, p.componentDidUpdate = function(n) {
    var e = null;
    if (n !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== v && i !== m && (e = v) : (i === v || i === m) && (e = S);
    }
    this.updateStatus(!1, e);
  }, p.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, p.getTimeouts = function() {
    var n = this.props.timeout, e, i, s;
    return e = i = s = n, n != null && typeof n != "number" && (e = n.exit, i = n.enter, s = n.appear !== void 0 ? n.appear : i), {
      exit: e,
      enter: i,
      appear: s
    };
  }, p.updateStatus = function(n, e) {
    if (n === void 0 && (n = !1), e !== null)
      if (this.cancelNextCallback(), e === v) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this);
          i && A(i);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === E && this.setState({
        status: C
      });
  }, p.performEnter = function(n) {
    var e = this, i = this.props.enter, s = this.context ? this.context.isMounting : n, a = this.props.nodeRef ? [s] : [g.findDOMNode(this), s], o = a[0], u = a[1], f = this.getTimeouts(), d = s ? f.appear : f.enter;
    if (!n && !i || O.disabled) {
      this.safeSetState({
        status: m
      }, function() {
        e.props.onEntered(o);
      });
      return;
    }
    this.props.onEnter(o, u), this.safeSetState({
      status: v
    }, function() {
      e.props.onEntering(o, u), e.onTransitionEnd(d, function() {
        e.safeSetState({
          status: m
        }, function() {
          e.props.onEntered(o, u);
        });
      });
    });
  }, p.performExit = function() {
    var n = this, e = this.props.exit, i = this.getTimeouts(), s = this.props.nodeRef ? void 0 : g.findDOMNode(this);
    if (!e || O.disabled) {
      this.safeSetState({
        status: E
      }, function() {
        n.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: S
    }, function() {
      n.props.onExiting(s), n.onTransitionEnd(i.exit, function() {
        n.safeSetState({
          status: E
        }, function() {
          n.props.onExited(s);
        });
      });
    });
  }, p.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, p.safeSetState = function(n, e) {
    e = this.setNextCallback(e), this.setState(n, e);
  }, p.setNextCallback = function(n) {
    var e = this, i = !0;
    return this.nextCallback = function(s) {
      i && (i = !1, e.nextCallback = null, n(s));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, p.onTransitionEnd = function(n, e) {
    this.setNextCallback(e);
    var i = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this), s = n == null && !this.props.addEndListener;
    if (!i || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], o = a[0], u = a[1];
      this.props.addEndListener(o, u);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, p.render = function() {
    var n = this.state.status;
    if (n === C)
      return null;
    var e = this.props, i = e.children;
    e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef;
    var s = D(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ h.createElement(k.Provider, {
        value: null
      }, typeof i == "function" ? i(n, s) : h.cloneElement(h.Children.only(i), s))
    );
  }, l;
}(h.Component);
c.contextType = k;
c.propTypes = {};
function x() {
}
c.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: x,
  onEntering: x,
  onEntered: x,
  onExit: x,
  onExiting: x,
  onExited: x
};
c.UNMOUNTED = C;
c.EXITED = E;
c.ENTERING = v;
c.ENTERED = m;
c.EXITING = S;
const U = c;
var P = function(l, p) {
  return l && p && p.split(" ").forEach(function(t) {
    return M(l, t);
  });
}, N = function(l, p) {
  return l && p && p.split(" ").forEach(function(t) {
    return I(l, t);
  });
}, T = /* @__PURE__ */ function(r) {
  R(l, r);
  function l() {
    for (var t, n = arguments.length, e = new Array(n), i = 0; i < n; i++)
      e[i] = arguments[i];
    return t = r.call.apply(r, [this].concat(e)) || this, t.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, t.onEnter = function(s, a) {
      var o = t.resolveArguments(s, a), u = o[0], f = o[1];
      t.removeClasses(u, "exit"), t.addClass(u, f ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(s, a);
    }, t.onEntering = function(s, a) {
      var o = t.resolveArguments(s, a), u = o[0], f = o[1], d = f ? "appear" : "enter";
      t.addClass(u, d, "active"), t.props.onEntering && t.props.onEntering(s, a);
    }, t.onEntered = function(s, a) {
      var o = t.resolveArguments(s, a), u = o[0], f = o[1], d = f ? "appear" : "enter";
      t.removeClasses(u, d), t.addClass(u, d, "done"), t.props.onEntered && t.props.onEntered(s, a);
    }, t.onExit = function(s) {
      var a = t.resolveArguments(s), o = a[0];
      t.removeClasses(o, "appear"), t.removeClasses(o, "enter"), t.addClass(o, "exit", "base"), t.props.onExit && t.props.onExit(s);
    }, t.onExiting = function(s) {
      var a = t.resolveArguments(s), o = a[0];
      t.addClass(o, "exit", "active"), t.props.onExiting && t.props.onExiting(s);
    }, t.onExited = function(s) {
      var a = t.resolveArguments(s), o = a[0];
      t.removeClasses(o, "exit"), t.addClass(o, "exit", "done"), t.props.onExited && t.props.onExited(s);
    }, t.resolveArguments = function(s, a) {
      return t.props.nodeRef ? [t.props.nodeRef.current, s] : [s, a];
    }, t.getClassNames = function(s) {
      var a = t.props.classNames, o = typeof a == "string", u = o && a ? a + "-" : "", f = o ? "" + u + s : a[s], d = o ? f + "-active" : a[s + "Active"], _ = o ? f + "-done" : a[s + "Done"];
      return {
        baseClassName: f,
        activeClassName: d,
        doneClassName: _
      };
    }, t;
  }
  var p = l.prototype;
  return p.addClass = function(n, e, i) {
    var s = this.getClassNames(e)[i + "ClassName"], a = this.getClassNames("enter"), o = a.doneClassName;
    e === "appear" && i === "done" && o && (s += " " + o), i === "active" && n && A(n), s && (this.appliedClasses[e][i] = s, P(n, s));
  }, p.removeClasses = function(n, e) {
    var i = this.appliedClasses[e], s = i.base, a = i.active, o = i.done;
    this.appliedClasses[e] = {}, s && N(n, s), a && N(n, a), o && N(n, o);
  }, p.render = function() {
    var n = this.props;
    n.classNames;
    var e = D(n, ["classNames"]);
    return /* @__PURE__ */ h.createElement(U, $({}, e, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, l;
}(h.Component);
T.defaultProps = {
  classNames: ""
};
T.propTypes = {};
const V = T;
export {
  V as C,
  U as T,
  D as _
};
