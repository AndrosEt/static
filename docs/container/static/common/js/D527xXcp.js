let o = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((r, e) => (e &= 63, e < 36 ? r += e.toString(36) : e < 62 ? r += (e - 26).toString(36).toUpperCase() : e > 62 ? r += "-" : r += "_", r), "");
export {
  o as n
};
