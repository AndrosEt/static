const n = (...i) => {
  const r = i.flat();
  return r.includes("error") ? "error" : i.every((e) => e === "loaded") ? "loaded" : i.every((e) => e === "init") ? "init" : r.includes("waiting") ? "waiting" : r.includes("progress") ? "progress" : r.includes("loading") ? "loading" : r.every((e) => e === "init" || e === "loaded") ? "loaded" : "init";
};
export {
  n as c
};
