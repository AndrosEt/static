const r = (e, c) => {
  const t = document.createElement("script");
  return t.src = e, t.async = !0, t.onload = () => c == null ? void 0 : c(), document.body.appendChild(t), t;
};
export {
  r as i
};
