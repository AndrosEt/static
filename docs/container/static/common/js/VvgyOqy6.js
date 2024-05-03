import { a as ht, c as ft } from "./react-D5yUVy0K.js";
import { M as tt, N as et, q as ut, F as lt, O as dt } from "./_JqgLpqe.js";
var rt = { exports: {} };
const xt = {}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), H = /* @__PURE__ */ ht(yt);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(i) {
  (function() {
    var s = "input is invalid type", o = "finalize already called", l = typeof window == "object", u = l ? window : {};
    u.JS_MD5_NO_WINDOW && (l = !1);
    var x = !l && typeof self == "object", y = !u.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    y ? u = ft : x && (u = self);
    var F = !u.JS_MD5_NO_COMMON_JS && !0 && i.exports, p = !u.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", d = "0123456789abcdef".split(""), it = [128, 32768, 8388608, -2147483648], D = [0, 8, 16, 24], S = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), b = [], U;
    if (p) {
      var L = new ArrayBuffer(68);
      U = new Uint8Array(L), b = new Uint32Array(L);
    }
    var _ = Array.isArray;
    (u.JS_MD5_NO_NODE_JS || !_) && (_ = function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    });
    var I = ArrayBuffer.isView;
    p && (u.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !I) && (I = function(t) {
      return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
    });
    var W = function(t) {
      var r = typeof t;
      if (r === "string")
        return [t, !0];
      if (r !== "object" || t === null)
        throw new Error(s);
      if (p && t.constructor === ArrayBuffer)
        return [new Uint8Array(t), !1];
      if (!_(t) && !I(t))
        throw new Error(s);
      return [t, !1];
    }, J = function(t) {
      return function(r) {
        return new w(!0).update(r)[t]();
      };
    }, ot = function() {
      var t = J("hex");
      y && (t = at(t)), t.create = function() {
        return new w();
      }, t.update = function(e) {
        return t.create().update(e);
      };
      for (var r = 0; r < S.length; ++r) {
        var n = S[r];
        t[n] = J(n);
      }
      return t;
    }, at = function(t) {
      var r = H, n = H.Buffer, e;
      n.from && !u.JS_MD5_NO_BUFFER_FROM ? e = n.from : e = function(c) {
        return new n(c);
      };
      var h = function(c) {
        if (typeof c == "string")
          return r.createHash("md5").update(c, "utf8").digest("hex");
        if (c == null)
          throw new Error(s);
        return c.constructor === ArrayBuffer && (c = new Uint8Array(c)), _(c) || I(c) || c.constructor === n ? r.createHash("md5").update(e(c)).digest("hex") : t(c);
      };
      return h;
    }, z = function(t) {
      return function(r, n) {
        return new O(r, !0).update(n)[t]();
      };
    }, ct = function() {
      var t = z("hex");
      t.create = function(e) {
        return new O(e);
      }, t.update = function(e, h) {
        return t.create(e).update(h);
      };
      for (var r = 0; r < S.length; ++r) {
        var n = S[r];
        t[n] = z(n);
      }
      return t;
    };
    function w(t) {
      if (t)
        b[0] = b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0, this.blocks = b, this.buffer8 = U;
      else if (p) {
        var r = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    w.prototype.update = function(t) {
      if (this.finalized)
        throw new Error(o);
      var r = W(t);
      t = r[0];
      for (var n = r[1], e, h = 0, c, a = t.length, f = this.blocks, v = this.buffer8; h < a; ) {
        if (this.hashed && (this.hashed = !1, f[0] = f[16], f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0), n)
          if (p)
            for (c = this.start; h < a && c < 64; ++h)
              e = t.charCodeAt(h), e < 128 ? v[c++] = e : e < 2048 ? (v[c++] = 192 | e >>> 6, v[c++] = 128 | e & 63) : e < 55296 || e >= 57344 ? (v[c++] = 224 | e >>> 12, v[c++] = 128 | e >>> 6 & 63, v[c++] = 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | t.charCodeAt(++h) & 1023), v[c++] = 240 | e >>> 18, v[c++] = 128 | e >>> 12 & 63, v[c++] = 128 | e >>> 6 & 63, v[c++] = 128 | e & 63);
          else
            for (c = this.start; h < a && c < 64; ++h)
              e = t.charCodeAt(h), e < 128 ? f[c >>> 2] |= e << D[c++ & 3] : e < 2048 ? (f[c >>> 2] |= (192 | e >>> 6) << D[c++ & 3], f[c >>> 2] |= (128 | e & 63) << D[c++ & 3]) : e < 55296 || e >= 57344 ? (f[c >>> 2] |= (224 | e >>> 12) << D[c++ & 3], f[c >>> 2] |= (128 | e >>> 6 & 63) << D[c++ & 3], f[c >>> 2] |= (128 | e & 63) << D[c++ & 3]) : (e = 65536 + ((e & 1023) << 10 | t.charCodeAt(++h) & 1023), f[c >>> 2] |= (240 | e >>> 18) << D[c++ & 3], f[c >>> 2] |= (128 | e >>> 12 & 63) << D[c++ & 3], f[c >>> 2] |= (128 | e >>> 6 & 63) << D[c++ & 3], f[c >>> 2] |= (128 | e & 63) << D[c++ & 3]);
        else if (p)
          for (c = this.start; h < a && c < 64; ++h)
            v[c++] = t[h];
        else
          for (c = this.start; h < a && c < 64; ++h)
            f[c >>> 2] |= t[h] << D[c++ & 3];
        this.lastByteIndex = c, this.bytes += c - this.start, c >= 64 ? (this.start = c - 64, this.hash(), this.hashed = !0) : this.start = c;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, w.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var t = this.blocks, r = this.lastByteIndex;
        t[r >>> 2] |= it[r & 3], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, w.prototype.hash = function() {
      var t, r, n, e, h, c, a = this.blocks;
      this.first ? (t = a[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, e = (-1732584194 ^ t & 2004318071) + a[1] - 117830708, e = (e << 12 | e >>> 20) + t << 0, n = (-271733879 ^ e & (t ^ -271733879)) + a[2] - 1126478375, n = (n << 17 | n >>> 15) + e << 0, r = (t ^ n & (e ^ t)) + a[3] - 1316259209, r = (r << 22 | r >>> 10) + n << 0) : (t = this.h0, r = this.h1, n = this.h2, e = this.h3, t += (e ^ r & (n ^ e)) + a[0] - 680876936, t = (t << 7 | t >>> 25) + r << 0, e += (n ^ t & (r ^ n)) + a[1] - 389564586, e = (e << 12 | e >>> 20) + t << 0, n += (r ^ e & (t ^ r)) + a[2] + 606105819, n = (n << 17 | n >>> 15) + e << 0, r += (t ^ n & (e ^ t)) + a[3] - 1044525330, r = (r << 22 | r >>> 10) + n << 0), t += (e ^ r & (n ^ e)) + a[4] - 176418897, t = (t << 7 | t >>> 25) + r << 0, e += (n ^ t & (r ^ n)) + a[5] + 1200080426, e = (e << 12 | e >>> 20) + t << 0, n += (r ^ e & (t ^ r)) + a[6] - 1473231341, n = (n << 17 | n >>> 15) + e << 0, r += (t ^ n & (e ^ t)) + a[7] - 45705983, r = (r << 22 | r >>> 10) + n << 0, t += (e ^ r & (n ^ e)) + a[8] + 1770035416, t = (t << 7 | t >>> 25) + r << 0, e += (n ^ t & (r ^ n)) + a[9] - 1958414417, e = (e << 12 | e >>> 20) + t << 0, n += (r ^ e & (t ^ r)) + a[10] - 42063, n = (n << 17 | n >>> 15) + e << 0, r += (t ^ n & (e ^ t)) + a[11] - 1990404162, r = (r << 22 | r >>> 10) + n << 0, t += (e ^ r & (n ^ e)) + a[12] + 1804603682, t = (t << 7 | t >>> 25) + r << 0, e += (n ^ t & (r ^ n)) + a[13] - 40341101, e = (e << 12 | e >>> 20) + t << 0, n += (r ^ e & (t ^ r)) + a[14] - 1502002290, n = (n << 17 | n >>> 15) + e << 0, r += (t ^ n & (e ^ t)) + a[15] + 1236535329, r = (r << 22 | r >>> 10) + n << 0, t += (n ^ e & (r ^ n)) + a[1] - 165796510, t = (t << 5 | t >>> 27) + r << 0, e += (r ^ n & (t ^ r)) + a[6] - 1069501632, e = (e << 9 | e >>> 23) + t << 0, n += (t ^ r & (e ^ t)) + a[11] + 643717713, n = (n << 14 | n >>> 18) + e << 0, r += (e ^ t & (n ^ e)) + a[0] - 373897302, r = (r << 20 | r >>> 12) + n << 0, t += (n ^ e & (r ^ n)) + a[5] - 701558691, t = (t << 5 | t >>> 27) + r << 0, e += (r ^ n & (t ^ r)) + a[10] + 38016083, e = (e << 9 | e >>> 23) + t << 0, n += (t ^ r & (e ^ t)) + a[15] - 660478335, n = (n << 14 | n >>> 18) + e << 0, r += (e ^ t & (n ^ e)) + a[4] - 405537848, r = (r << 20 | r >>> 12) + n << 0, t += (n ^ e & (r ^ n)) + a[9] + 568446438, t = (t << 5 | t >>> 27) + r << 0, e += (r ^ n & (t ^ r)) + a[14] - 1019803690, e = (e << 9 | e >>> 23) + t << 0, n += (t ^ r & (e ^ t)) + a[3] - 187363961, n = (n << 14 | n >>> 18) + e << 0, r += (e ^ t & (n ^ e)) + a[8] + 1163531501, r = (r << 20 | r >>> 12) + n << 0, t += (n ^ e & (r ^ n)) + a[13] - 1444681467, t = (t << 5 | t >>> 27) + r << 0, e += (r ^ n & (t ^ r)) + a[2] - 51403784, e = (e << 9 | e >>> 23) + t << 0, n += (t ^ r & (e ^ t)) + a[7] + 1735328473, n = (n << 14 | n >>> 18) + e << 0, r += (e ^ t & (n ^ e)) + a[12] - 1926607734, r = (r << 20 | r >>> 12) + n << 0, h = r ^ n, t += (h ^ e) + a[5] - 378558, t = (t << 4 | t >>> 28) + r << 0, e += (h ^ t) + a[8] - 2022574463, e = (e << 11 | e >>> 21) + t << 0, c = e ^ t, n += (c ^ r) + a[11] + 1839030562, n = (n << 16 | n >>> 16) + e << 0, r += (c ^ n) + a[14] - 35309556, r = (r << 23 | r >>> 9) + n << 0, h = r ^ n, t += (h ^ e) + a[1] - 1530992060, t = (t << 4 | t >>> 28) + r << 0, e += (h ^ t) + a[4] + 1272893353, e = (e << 11 | e >>> 21) + t << 0, c = e ^ t, n += (c ^ r) + a[7] - 155497632, n = (n << 16 | n >>> 16) + e << 0, r += (c ^ n) + a[10] - 1094730640, r = (r << 23 | r >>> 9) + n << 0, h = r ^ n, t += (h ^ e) + a[13] + 681279174, t = (t << 4 | t >>> 28) + r << 0, e += (h ^ t) + a[0] - 358537222, e = (e << 11 | e >>> 21) + t << 0, c = e ^ t, n += (c ^ r) + a[3] - 722521979, n = (n << 16 | n >>> 16) + e << 0, r += (c ^ n) + a[6] + 76029189, r = (r << 23 | r >>> 9) + n << 0, h = r ^ n, t += (h ^ e) + a[9] - 640364487, t = (t << 4 | t >>> 28) + r << 0, e += (h ^ t) + a[12] - 421815835, e = (e << 11 | e >>> 21) + t << 0, c = e ^ t, n += (c ^ r) + a[15] + 530742520, n = (n << 16 | n >>> 16) + e << 0, r += (c ^ n) + a[2] - 995338651, r = (r << 23 | r >>> 9) + n << 0, t += (n ^ (r | ~e)) + a[0] - 198630844, t = (t << 6 | t >>> 26) + r << 0, e += (r ^ (t | ~n)) + a[7] + 1126891415, e = (e << 10 | e >>> 22) + t << 0, n += (t ^ (e | ~r)) + a[14] - 1416354905, n = (n << 15 | n >>> 17) + e << 0, r += (e ^ (n | ~t)) + a[5] - 57434055, r = (r << 21 | r >>> 11) + n << 0, t += (n ^ (r | ~e)) + a[12] + 1700485571, t = (t << 6 | t >>> 26) + r << 0, e += (r ^ (t | ~n)) + a[3] - 1894986606, e = (e << 10 | e >>> 22) + t << 0, n += (t ^ (e | ~r)) + a[10] - 1051523, n = (n << 15 | n >>> 17) + e << 0, r += (e ^ (n | ~t)) + a[1] - 2054922799, r = (r << 21 | r >>> 11) + n << 0, t += (n ^ (r | ~e)) + a[8] + 1873313359, t = (t << 6 | t >>> 26) + r << 0, e += (r ^ (t | ~n)) + a[15] - 30611744, e = (e << 10 | e >>> 22) + t << 0, n += (t ^ (e | ~r)) + a[6] - 1560198380, n = (n << 15 | n >>> 17) + e << 0, r += (e ^ (n | ~t)) + a[13] + 1309151649, r = (r << 21 | r >>> 11) + n << 0, t += (n ^ (r | ~e)) + a[4] - 145523070, t = (t << 6 | t >>> 26) + r << 0, e += (r ^ (t | ~n)) + a[11] - 1120210379, e = (e << 10 | e >>> 22) + t << 0, n += (t ^ (e | ~r)) + a[2] + 718787259, n = (n << 15 | n >>> 17) + e << 0, r += (e ^ (n | ~t)) + a[9] - 343485551, r = (r << 21 | r >>> 11) + n << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = e + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + e << 0);
    }, w.prototype.hex = function() {
      this.finalize();
      var t = this.h0, r = this.h1, n = this.h2, e = this.h3;
      return d[t >>> 4 & 15] + d[t & 15] + d[t >>> 12 & 15] + d[t >>> 8 & 15] + d[t >>> 20 & 15] + d[t >>> 16 & 15] + d[t >>> 28 & 15] + d[t >>> 24 & 15] + d[r >>> 4 & 15] + d[r & 15] + d[r >>> 12 & 15] + d[r >>> 8 & 15] + d[r >>> 20 & 15] + d[r >>> 16 & 15] + d[r >>> 28 & 15] + d[r >>> 24 & 15] + d[n >>> 4 & 15] + d[n & 15] + d[n >>> 12 & 15] + d[n >>> 8 & 15] + d[n >>> 20 & 15] + d[n >>> 16 & 15] + d[n >>> 28 & 15] + d[n >>> 24 & 15] + d[e >>> 4 & 15] + d[e & 15] + d[e >>> 12 & 15] + d[e >>> 8 & 15] + d[e >>> 20 & 15] + d[e >>> 16 & 15] + d[e >>> 28 & 15] + d[e >>> 24 & 15];
    }, w.prototype.toString = w.prototype.hex, w.prototype.digest = function() {
      this.finalize();
      var t = this.h0, r = this.h1, n = this.h2, e = this.h3;
      return [
        t & 255,
        t >>> 8 & 255,
        t >>> 16 & 255,
        t >>> 24 & 255,
        r & 255,
        r >>> 8 & 255,
        r >>> 16 & 255,
        r >>> 24 & 255,
        n & 255,
        n >>> 8 & 255,
        n >>> 16 & 255,
        n >>> 24 & 255,
        e & 255,
        e >>> 8 & 255,
        e >>> 16 & 255,
        e >>> 24 & 255
      ];
    }, w.prototype.array = w.prototype.digest, w.prototype.arrayBuffer = function() {
      this.finalize();
      var t = new ArrayBuffer(16), r = new Uint32Array(t);
      return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t;
    }, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.base64 = function() {
      for (var t, r, n, e = "", h = this.array(), c = 0; c < 15; )
        t = h[c++], r = h[c++], n = h[c++], e += B[t >>> 2] + B[(t << 4 | r >>> 4) & 63] + B[(r << 2 | n >>> 6) & 63] + B[n & 63];
      return t = h[c], e += B[t >>> 2] + B[t << 4 & 63] + "==", e;
    };
    function O(t, r) {
      var n, e = W(t);
      if (t = e[0], e[1]) {
        var h = [], c = t.length, a = 0, f;
        for (n = 0; n < c; ++n)
          f = t.charCodeAt(n), f < 128 ? h[a++] = f : f < 2048 ? (h[a++] = 192 | f >>> 6, h[a++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (h[a++] = 224 | f >>> 12, h[a++] = 128 | f >>> 6 & 63, h[a++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | t.charCodeAt(++n) & 1023), h[a++] = 240 | f >>> 18, h[a++] = 128 | f >>> 12 & 63, h[a++] = 128 | f >>> 6 & 63, h[a++] = 128 | f & 63);
        t = h;
      }
      t.length > 64 && (t = new w(!0).update(t).array());
      var v = [], k = [];
      for (n = 0; n < 64; ++n) {
        var K = t[n] || 0;
        v[n] = 92 ^ K, k[n] = 54 ^ K;
      }
      w.call(this, r), this.update(k), this.oKeyPad = v, this.inner = !0, this.sharedMemory = r;
    }
    O.prototype = new w(), O.prototype.finalize = function() {
      if (w.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var t = this.array();
        w.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(t), w.prototype.finalize.call(this);
      }
    };
    var A = ot();
    A.md5 = A, A.md5.hmac = ct(), F ? i.exports = A : u.md5 = A;
  })();
})(rt);
var pt = rt.exports;
const Y = {
  get: async (i, s) => {
    if (s) {
      const o = "cacheRequest-" + i, l = (await chrome.storage.local.get(o))[o];
      if (l) {
        const u = typeof s == "number" ? s : 24, { requestDate: x, value: y } = l;
        if (x > Date.now() - u * 36e5)
          return y;
      }
    }
    return null;
  },
  set: async (i, s) => {
    const o = {
      value: s,
      id: i,
      requestDate: Date.now()
    }, l = "cacheRequest-" + i;
    await chrome.storage.local.set({ [l]: o });
  }
}, wt = "background-request", bt = async (i) => {
  const { url: s, body: o } = await tt(i), l = pt.md5(JSON.stringify({ url: s, body: o == null ? void 0 : o.body })), u = await Y.get(l, i.cache);
  return u ? new Promise((x) => {
    x(u);
  }) : new Promise((x, y) => {
    chrome.runtime.sendMessage({ type: i.type || wt, url: s, params: o, cache: i.cache }, async (F) => {
      try {
        const { result: p } = await et(F, i);
        i.cache && Y.set(l, p).then(), x(p);
      } catch (p) {
        y(p);
      }
    });
  });
}, C = (i, s) => s.some((o) => i instanceof o);
let $, G;
function Ft() {
  return $ || ($ = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function vt() {
  return G || (G = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const j = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
function Dt(i) {
  const s = new Promise((o, l) => {
    const u = () => {
      i.removeEventListener("success", x), i.removeEventListener("error", y);
    }, x = () => {
      o(E(i.result)), u();
    }, y = () => {
      l(i.error), u();
    };
    i.addEventListener("success", x), i.addEventListener("error", y);
  });
  return g.set(s, i), s;
}
function Et(i) {
  if (j.has(i))
    return;
  const s = new Promise((o, l) => {
    const u = () => {
      i.removeEventListener("complete", x), i.removeEventListener("error", y), i.removeEventListener("abort", y);
    }, x = () => {
      o(), u();
    }, y = () => {
      l(i.error || new DOMException("AbortError", "AbortError")), u();
    };
    i.addEventListener("complete", x), i.addEventListener("error", y), i.addEventListener("abort", y);
  });
  j.set(i, s);
}
let N = {
  get(i, s, o) {
    if (i instanceof IDBTransaction) {
      if (s === "done")
        return j.get(i);
      if (s === "store")
        return o.objectStoreNames[1] ? void 0 : o.objectStore(o.objectStoreNames[0]);
    }
    return E(i[s]);
  },
  set(i, s, o) {
    return i[s] = o, !0;
  },
  has(i, s) {
    return i instanceof IDBTransaction && (s === "done" || s === "store") ? !0 : s in i;
  }
};
function nt(i) {
  N = i(N);
}
function Bt(i) {
  return vt().includes(i) ? function(...s) {
    return i.apply(V(this), s), E(this.request);
  } : function(...s) {
    return E(i.apply(V(this), s));
  };
}
function At(i) {
  return typeof i == "function" ? Bt(i) : (i instanceof IDBTransaction && Et(i), C(i, Ft()) ? new Proxy(i, N) : i);
}
function E(i) {
  if (i instanceof IDBRequest)
    return Dt(i);
  if (m.has(i))
    return m.get(i);
  const s = At(i);
  return s !== i && (m.set(i, s), g.set(s, i)), s;
}
const V = (i) => g.get(i);
function R(i, s, { blocked: o, upgrade: l, blocking: u, terminated: x } = {}) {
  const y = indexedDB.open(i, s), F = E(y);
  return l && y.addEventListener("upgradeneeded", (p) => {
    l(E(y.result), p.oldVersion, p.newVersion, E(y.transaction), p);
  }), o && y.addEventListener("blocked", (p) => o(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    p.oldVersion,
    p.newVersion,
    p
  )), F.then((p) => {
    x && p.addEventListener("close", () => x()), u && p.addEventListener("versionchange", (d) => u(d.oldVersion, d.newVersion, d));
  }).catch(() => {
  }), F;
}
const St = ["get", "getKey", "getAll", "getAllKeys", "count"], _t = ["put", "add", "delete", "clear"], P = /* @__PURE__ */ new Map();
function Q(i, s) {
  if (!(i instanceof IDBDatabase && !(s in i) && typeof s == "string"))
    return;
  if (P.get(s))
    return P.get(s);
  const o = s.replace(/FromIndex$/, ""), l = s !== o, u = _t.includes(o);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(o in (l ? IDBIndex : IDBObjectStore).prototype) || !(u || St.includes(o))
  )
    return;
  const x = async function(y, ...F) {
    const p = this.transaction(y, u ? "readwrite" : "readonly");
    let d = p.store;
    return l && (d = d.index(F.shift())), (await Promise.all([
      d[o](...F),
      u && p.done
    ]))[0];
  };
  return P.set(s, x), x;
}
nt((i) => ({
  ...i,
  get: (s, o, l) => Q(s, o) || i.get(s, o, l),
  has: (s, o) => !!Q(s, o) || i.has(s, o)
}));
const It = ["continue", "continuePrimaryKey", "advance"], X = {}, T = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), Ot = {
  get(i, s) {
    if (!It.includes(s))
      return i[s];
    let o = X[s];
    return o || (o = X[s] = function(...l) {
      T.set(this, st.get(this)[s](...l));
    }), o;
  }
};
async function* Mt(...i) {
  let s = this;
  if (s instanceof IDBCursor || (s = await s.openCursor(...i)), !s)
    return;
  s = s;
  const o = new Proxy(s, Ot);
  for (st.set(o, s), g.set(o, V(s)); s; )
    yield o, s = await (T.get(o) || s.continue()), T.delete(o);
}
function q(i, s) {
  return s === Symbol.asyncIterator && C(i, [IDBIndex, IDBObjectStore, IDBCursor]) || s === "iterate" && C(i, [IDBIndex, IDBObjectStore]);
}
nt((i) => ({
  ...i,
  get(s, o, l) {
    return q(s, o) ? Mt : i.get(s, o, l);
  },
  has(s, o) {
    return q(s, o) || i.has(s, o);
  }
}));
class gt {
  constructor(s, o) {
    this.database = s, this.initDatabase(o).then();
  }
  async createObjectStore(s) {
    var o, l;
    try {
      const u = [];
      this.db || (this.db = await R(this.database));
      for (const x of s)
        this.db.objectStoreNames.contains(x) || u.push(x);
      if (u.length) {
        (o = this.db) == null || o.close();
        const x = ((l = this.db) == null ? void 0 : l.version) + 1;
        this.db = await R(this.database, x, {
          upgrade(y) {
            u.forEach((F) => {
              y.createObjectStore(F, { keyPath: "id" });
            });
          }
        });
      }
    } catch {
      return !1;
    }
  }
  async getValue(s, o) {
    return this.db ? await this.db.transaction(s, "readonly").objectStore(s).get(o) : null;
  }
  async getAllValue(s) {
    return this.db ? await this.db.transaction(s, "readonly").objectStore(s).getAll() : null;
  }
  async putValue(s, o) {
    return this.db ? await this.db.transaction(s, "readwrite").objectStore(s).put(o) : null;
  }
  async putBulkValue(s, o) {
    if (this.db) {
      const u = this.db.transaction(s, "readwrite").objectStore(s);
      for (const x of o)
        await u.put(x);
      return this.getAllValue(s);
    } else
      return null;
  }
  async deleteValue(s, o) {
    if (this.db) {
      const u = this.db.transaction(s, "readwrite").objectStore(s), x = await u.get(o);
      return x && (await u.delete(o), o);
    } else
      return null;
  }
  async initDatabase(s) {
    try {
      this.db = await R(this.database, void 0, {
        upgrade: (o) => {
          s && o.createObjectStore(s, { keyPath: "id" });
        }
      });
    } catch (o) {
      localStorage.setItem("IndexedDBErrors", String(o));
    }
  }
}
const M = "requests";
class mt {
  constructor() {
    this.get = async (s, o) => {
      if (this.indexedDb)
        if (o) {
          const l = await this.indexedDb.getValue(M, s);
          if (l) {
            const u = typeof o == "number" ? o : 24, { requestDate: x, value: y } = l;
            if (x > Date.now() - u * 36e5)
              return y;
          }
        } else
          this.indexedDb.deleteValue(M, s).then();
      return null;
    }, this.set = async (s, o) => {
      if (this.indexedDb) {
        const l = {
          value: o,
          id: s,
          requestDate: Date.now()
        };
        await this.indexedDb.putValue(M, l);
      }
    }, this.indexedDb = new gt("cacheRequests", M);
  }
}
const Rt = async (i) => {
  var s;
  try {
    const o = ut.stringify({ url: i.url, query: JSON.stringify(i.params) }), l = await Z.get(o, i.cache);
    if (l)
      return l;
    const { url: u, body: x } = await tt(i), y = await fetch(u, x), { result: F } = await et(y, i);
    return i.cache && await Z.set(o, F), F;
  } catch (o) {
    throw i.showError && ((s = window.setError) == null || s.call(window, {
      code: o.responseStatus ?? 0,
      message: o.message,
      ...typeof i.showError != "boolean" ? i.showError : {}
    })), new lt(o.message, o.responseStatus ?? 0, o.result);
  }
}, Z = new mt(), jt = (i) => dt() ? bt(i) : Rt(i);
export {
  gt as I,
  jt as b,
  H as r
};
