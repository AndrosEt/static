function s(t, e) {
  if (Object.is(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  if (t instanceof Map && e instanceof Map) {
    if (t.size !== e.size)
      return !1;
    for (const [r, n] of t)
      if (!Object.is(n, e.get(r)))
        return !1;
    return !0;
  }
  if (t instanceof Set && e instanceof Set) {
    if (t.size !== e.size)
      return !1;
    for (const r of t)
      if (!e.has(r))
        return !1;
    return !0;
  }
  const f = Object.keys(t);
  if (f.length !== Object.keys(e).length)
    return !1;
  for (const r of f)
    if (!Object.prototype.hasOwnProperty.call(e, r) || !Object.is(t[r], e[r]))
      return !1;
  return !0;
}
export {
  s
};
