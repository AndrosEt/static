function _(a) {
  "@babel/helpers - typeof";
  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _(a);
}
function O(a) {
  if (a === null || a === !0 || a === !1)
    return NaN;
  var t = Number(a);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function h(a, t) {
  if (t.length < a)
    throw new TypeError(a + " argument" + (a > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function b(a) {
  h(1, arguments);
  var t = Object.prototype.toString.call(a);
  return a instanceof Date || _(a) === "object" && t === "[object Date]" ? new Date(a.getTime()) : typeof a == "number" || t === "[object Number]" ? new Date(a) : ((typeof a == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function te(a, t) {
  h(2, arguments);
  var e = b(a).getTime(), r = O(t);
  return new Date(e + r);
}
var ae = {};
function $() {
  return ae;
}
function re(a) {
  var t = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
  return t.setUTCFullYear(a.getFullYear()), a.getTime() - t.getTime();
}
function ne(a) {
  return h(1, arguments), a instanceof Date || _(a) === "object" && Object.prototype.toString.call(a) === "[object Date]";
}
function ie(a) {
  if (h(1, arguments), !ne(a) && typeof a != "number")
    return !1;
  var t = b(a);
  return !isNaN(Number(t));
}
function oe(a, t) {
  h(2, arguments);
  var e = O(t);
  return te(a, -e);
}
var ue = 864e5;
function se(a) {
  h(1, arguments);
  var t = b(a), e = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), n = e - r;
  return Math.floor(n / ue) + 1;
}
function E(a) {
  h(1, arguments);
  var t = 1, e = b(a), r = e.getUTCDay(), n = (r < t ? 7 : 0) + r - t;
  return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e;
}
function A(a) {
  h(1, arguments);
  var t = b(a), e = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = E(r), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = E(i);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= o.getTime() ? e : e - 1;
}
function de(a) {
  h(1, arguments);
  var t = A(a), e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
  var r = E(e);
  return r;
}
var le = 6048e5;
function ce(a) {
  h(1, arguments);
  var t = b(a), e = E(t).getTime() - de(t).getTime();
  return Math.round(e / le) + 1;
}
function N(a, t) {
  var e, r, n, i, o, s, l, d;
  h(1, arguments);
  var f = $(), c = O((e = (r = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : f.weekStartsOn) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = b(a), m = v.getUTCDay(), w = (m < c ? 7 : 0) + m - c;
  return v.setUTCDate(v.getUTCDate() - w), v.setUTCHours(0, 0, 0, 0), v;
}
function B(a, t) {
  var e, r, n, i, o, s, l, d;
  h(1, arguments);
  var f = b(a), c = f.getUTCFullYear(), v = $(), m = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(c + 1, 0, m), w.setUTCHours(0, 0, 0, 0);
  var M = N(w, t), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(c, 0, m), p.setUTCHours(0, 0, 0, 0);
  var P = N(p, t);
  return f.getTime() >= M.getTime() ? c + 1 : f.getTime() >= P.getTime() ? c : c - 1;
}
function fe(a, t) {
  var e, r, n, i, o, s, l, d;
  h(1, arguments);
  var f = $(), c = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), v = B(a, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(v, 0, c), m.setUTCHours(0, 0, 0, 0);
  var w = N(m, t);
  return w;
}
var me = 6048e5;
function he(a, t) {
  h(1, arguments);
  var e = b(a), r = N(e, t).getTime() - fe(e, t).getTime();
  return Math.round(r / me) + 1;
}
function u(a, t) {
  for (var e = a < 0 ? "-" : "", r = Math.abs(a).toString(); r.length < t; )
    r = "0" + r;
  return e + r;
}
var ve = {
  // Year
  y: function(t, e) {
    var r = t.getUTCFullYear(), n = r > 0 ? r : 1 - r;
    return u(e === "yy" ? n % 100 : n, e.length);
  },
  // Month
  M: function(t, e) {
    var r = t.getUTCMonth();
    return e === "M" ? String(r + 1) : u(r + 1, 2);
  },
  // Day of the month
  d: function(t, e) {
    return u(t.getUTCDate(), e.length);
  },
  // AM or PM
  a: function(t, e) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, e) {
    return u(t.getUTCHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H: function(t, e) {
    return u(t.getUTCHours(), e.length);
  },
  // Minute
  m: function(t, e) {
    return u(t.getUTCMinutes(), e.length);
  },
  // Second
  s: function(t, e) {
    return u(t.getUTCSeconds(), e.length);
  },
  // Fraction of second
  S: function(t, e) {
    var r = e.length, n = t.getUTCMilliseconds(), i = Math.floor(n * Math.pow(10, r - 3));
    return u(i, e.length);
  }
};
const T = ve;
var D = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ge = {
  // Era
  G: function(t, e, r) {
    var n = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(n, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, e, r) {
    if (e === "yo") {
      var n = t.getUTCFullYear(), i = n > 0 ? n : 1 - n;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return T.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, r, n) {
    var i = B(t, n), o = i > 0 ? i : 1 - i;
    if (e === "YY") {
      var s = o % 100;
      return u(s, 2);
    }
    return e === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : u(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    var r = A(t);
    return u(r, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    var r = t.getUTCFullYear();
    return u(r, e.length);
  },
  // Quarter
  Q: function(t, e, r) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(n);
      case "QQ":
        return u(n, 2);
      case "Qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, r) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(n);
      case "qq":
        return u(n, 2);
      case "qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, r) {
    var n = t.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return T.M(t, e);
      case "Mo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, e, r) {
    var n = t.getUTCMonth();
    switch (e) {
      case "L":
        return String(n + 1);
      case "LL":
        return u(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, e, r, n) {
    var i = he(t, n);
    return e === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : u(i, e.length);
  },
  // ISO week of year
  I: function(t, e, r) {
    var n = ce(t);
    return e === "Io" ? r.ordinalNumber(n, {
      unit: "week"
    }) : u(n, e.length);
  },
  // Day of the month
  d: function(t, e, r) {
    return e === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : T.d(t, e);
  },
  // Day of year
  D: function(t, e, r) {
    var n = se(t);
    return e === "Do" ? r.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : u(n, e.length);
  },
  // Day of week
  E: function(t, e, r) {
    var n = t.getUTCDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, r, n) {
    var i = t.getUTCDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(o);
      case "ee":
        return u(o, 2);
      case "eo":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, r, n) {
    var i = t.getUTCDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(o);
      case "cc":
        return u(o, e.length);
      case "co":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, r) {
    var n = t.getUTCDay(), i = n === 0 ? 7 : n;
    switch (e) {
      case "i":
        return String(i);
      case "ii":
        return u(i, e.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, r) {
    var n = t.getUTCHours(), i = n / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, r) {
    var n = t.getUTCHours(), i;
    switch (n === 12 ? i = D.noon : n === 0 ? i = D.midnight : i = n / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, r) {
    var n = t.getUTCHours(), i;
    switch (n >= 17 ? i = D.evening : n >= 12 ? i = D.afternoon : n >= 4 ? i = D.morning : i = D.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, r) {
    if (e === "ho") {
      var n = t.getUTCHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return T.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, r) {
    return e === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : T.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, r) {
    var n = t.getUTCHours() % 12;
    return e === "Ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : u(n, e.length);
  },
  // Hour [1-24]
  k: function(t, e, r) {
    var n = t.getUTCHours();
    return n === 0 && (n = 24), e === "ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : u(n, e.length);
  },
  // Minute
  m: function(t, e, r) {
    return e === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : T.m(t, e);
  },
  // Second
  s: function(t, e, r) {
    return e === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : T.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return T.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, r, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (e) {
      case "X":
        return j(o);
      case "XXXX":
      case "XX":
        return C(o);
      case "XXXXX":
      case "XXX":
      default:
        return C(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, r, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "x":
        return j(o);
      case "xxxx":
      case "xx":
        return C(o);
      case "xxxxx":
      case "xxx":
      default:
        return C(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, r, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + X(o, ":");
      case "OOOO":
      default:
        return "GMT" + C(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, r, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + X(o, ":");
      case "zzzz":
      default:
        return "GMT" + C(o, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, r, n) {
    var i = n._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return u(o, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, r, n) {
    var i = n._originalDate || t, o = i.getTime();
    return u(o, e.length);
  }
};
function X(a, t) {
  var e = a > 0 ? "-" : "+", r = Math.abs(a), n = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return e + String(n);
  var o = t || "";
  return e + String(n) + o + u(i, 2);
}
function j(a, t) {
  if (a % 60 === 0) {
    var e = a > 0 ? "-" : "+";
    return e + u(Math.abs(a) / 60, 2);
  }
  return C(a, t);
}
function C(a, t) {
  var e = t || "", r = a > 0 ? "-" : "+", n = Math.abs(a), i = u(Math.floor(n / 60), 2), o = u(n % 60, 2);
  return r + i + e + o;
}
var G = function(t, e) {
  switch (t) {
    case "P":
      return e.date({
        width: "short"
      });
    case "PP":
      return e.date({
        width: "medium"
      });
    case "PPP":
      return e.date({
        width: "long"
      });
    case "PPPP":
    default:
      return e.date({
        width: "full"
      });
  }
}, V = function(t, e) {
  switch (t) {
    case "p":
      return e.time({
        width: "short"
      });
    case "pp":
      return e.time({
        width: "medium"
      });
    case "ppp":
      return e.time({
        width: "long"
      });
    case "pppp":
    default:
      return e.time({
        width: "full"
      });
  }
}, we = function(t, e) {
  var r = t.match(/(P+)(p+)?/) || [], n = r[1], i = r[2];
  if (!i)
    return G(t, e);
  var o;
  switch (n) {
    case "P":
      o = e.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = e.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = e.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = e.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", G(n, e)).replace("{{time}}", V(i, e));
}, be = {
  p: V,
  P: we
}, ye = ["D", "DD"], Te = ["YY", "YYYY"];
function pe(a) {
  return ye.indexOf(a) !== -1;
}
function Ce(a) {
  return Te.indexOf(a) !== -1;
}
function I(a, t, e) {
  if (a === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (a === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Oe = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, De = function(t, e, r) {
  var n, i = Oe[t];
  return typeof i == "string" ? n = i : e === 1 ? n = i.one : n = i.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
const Me = De;
function Q(a) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.width ? String(t.width) : a.defaultWidth, r = a.formats[e] || a.formats[a.defaultWidth];
    return r;
  };
}
var Pe = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ke = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Se = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, We = {
  date: Q({
    formats: Pe,
    defaultWidth: "full"
  }),
  time: Q({
    formats: ke,
    defaultWidth: "full"
  }),
  dateTime: Q({
    formats: Se,
    defaultWidth: "full"
  })
};
const xe = We;
var Ue = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ye = function(t, e, r, n) {
  return Ue[t];
};
const _e = Ye;
function W(a) {
  return function(t, e) {
    var r = e != null && e.context ? String(e.context) : "standalone", n;
    if (r === "formatting" && a.formattingValues) {
      var i = a.defaultFormattingWidth || a.defaultWidth, o = e != null && e.width ? String(e.width) : i;
      n = a.formattingValues[o] || a.formattingValues[i];
    } else {
      var s = a.defaultWidth, l = e != null && e.width ? String(e.width) : a.defaultWidth;
      n = a.values[l] || a.values[s];
    }
    var d = a.argumentCallback ? a.argumentCallback(t) : t;
    return n[d];
  };
}
var Ee = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ne = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, $e = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Fe = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, qe = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Le = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, He = function(t, e) {
  var r = Number(t), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Re = {
  ordinalNumber: He,
  era: W({
    values: Ee,
    defaultWidth: "wide"
  }),
  quarter: W({
    values: Ne,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: W({
    values: $e,
    defaultWidth: "wide"
  }),
  day: W({
    values: Fe,
    defaultWidth: "wide"
  }),
  dayPeriod: W({
    values: qe,
    defaultWidth: "wide",
    formattingValues: Le,
    defaultFormattingWidth: "wide"
  })
};
const Qe = Re;
function x(a) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.width, n = r && a.matchPatterns[r] || a.matchPatterns[a.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    var o = i[0], s = r && a.parsePatterns[r] || a.parsePatterns[a.defaultParseWidth], l = Array.isArray(s) ? je(s, function(c) {
      return c.test(o);
    }) : Xe(s, function(c) {
      return c.test(o);
    }), d;
    d = a.valueCallback ? a.valueCallback(l) : l, d = e.valueCallback ? e.valueCallback(d) : d;
    var f = t.slice(o.length);
    return {
      value: d,
      rest: f
    };
  };
}
function Xe(a, t) {
  for (var e in a)
    if (a.hasOwnProperty(e) && t(a[e]))
      return e;
}
function je(a, t) {
  for (var e = 0; e < a.length; e++)
    if (t(a[e]))
      return e;
}
function Ge(a) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(a.matchPattern);
    if (!r)
      return null;
    var n = r[0], i = t.match(a.parsePattern);
    if (!i)
      return null;
    var o = a.valueCallback ? a.valueCallback(i[0]) : i[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    var s = t.slice(n.length);
    return {
      value: o,
      rest: s
    };
  };
}
var Ie = /^(\d+)(th|st|nd|rd)?/i, Ae = /\d+/i, Be = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ve = {
  any: [/^b/i, /^(a|c)/i]
}, Je = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ze = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ke = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ze = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, et = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, at = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, nt = {
  ordinalNumber: Ge({
    matchPattern: Ie,
    parsePattern: Ae,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: x({
    matchPatterns: Be,
    defaultMatchWidth: "wide",
    parsePatterns: Ve,
    defaultParseWidth: "any"
  }),
  quarter: x({
    matchPatterns: Je,
    defaultMatchWidth: "wide",
    parsePatterns: ze,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: x({
    matchPatterns: Ke,
    defaultMatchWidth: "wide",
    parsePatterns: Ze,
    defaultParseWidth: "any"
  }),
  day: x({
    matchPatterns: et,
    defaultMatchWidth: "wide",
    parsePatterns: tt,
    defaultParseWidth: "any"
  }),
  dayPeriod: x({
    matchPatterns: at,
    defaultMatchWidth: "any",
    parsePatterns: rt,
    defaultParseWidth: "any"
  })
};
const it = nt;
var ot = {
  code: "en-US",
  formatDistance: Me,
  formatLong: xe,
  formatRelative: _e,
  localize: Qe,
  match: it,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ut = ot;
var st = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, dt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lt = /^'([^]*?)'?$/, ct = /''/g, ft = /[a-zA-Z]/;
function ht(a, t, e) {
  var r, n, i, o, s, l, d, f, c, v, m, w, M, p, P, F, q, L;
  h(2, arguments);
  var J = String(t), k = $(), S = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : k.locale) !== null && r !== void 0 ? r : ut, H = O((i = (o = (s = (l = e == null ? void 0 : e.firstWeekContainsDate) !== null && l !== void 0 ? l : e == null || (d = e.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : k.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = k.locale) === null || c === void 0 || (v = c.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = O((m = (w = (M = (p = e == null ? void 0 : e.weekStartsOn) !== null && p !== void 0 ? p : e == null || (P = e.locale) === null || P === void 0 || (F = P.options) === null || F === void 0 ? void 0 : F.weekStartsOn) !== null && M !== void 0 ? M : k.weekStartsOn) !== null && w !== void 0 ? w : (q = k.locale) === null || q === void 0 || (L = q.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var U = b(a);
  if (!ie(U))
    throw new RangeError("Invalid time value");
  var z = re(U), K = oe(U, z), Z = {
    firstWeekContainsDate: H,
    weekStartsOn: R,
    locale: S,
    _originalDate: U
  }, ee = J.match(dt).map(function(g) {
    var y = g[0];
    if (y === "p" || y === "P") {
      var Y = be[y];
      return Y(g, S.formatLong);
    }
    return g;
  }).join("").match(st).map(function(g) {
    if (g === "''")
      return "'";
    var y = g[0];
    if (y === "'")
      return mt(g);
    var Y = ge[y];
    if (Y)
      return !(e != null && e.useAdditionalWeekYearTokens) && Ce(g) && I(g, t, String(a)), !(e != null && e.useAdditionalDayOfYearTokens) && pe(g) && I(g, t, String(a)), Y(K, g, S.localize, Z);
    if (y.match(ft))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + y + "`");
    return g;
  }).join("");
  return ee;
}
function mt(a) {
  var t = a.match(lt);
  return t ? t[1].replace(ct, "'") : a;
}
export {
  _,
  te as a,
  b,
  T as c,
  $ as d,
  ut as e,
  ht as f,
  re as g,
  B as h,
  ie as i,
  N as j,
  E as k,
  he as l,
  ce as m,
  be as n,
  Ce as o,
  I as p,
  pe as q,
  h as r,
  oe as s,
  O as t,
  Q as u,
  W as v,
  Ge as w,
  x
};
