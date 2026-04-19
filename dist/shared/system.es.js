import { y as n } from "./make.es.js";
const m = "System.json", u = async (t, r, s) => {
  try {
    const a = await r(m);
    return o(a, t, s);
  } catch {
    return e(t.fileNotFound);
  }
}, e = (t) => ({
  system: null,
  message: t
}), o = (t, r, s) => {
  try {
    const a = JSON.parse(t);
    return c(a, r, s);
  } catch {
    return e(r.jsonParseError);
  }
}, c = (t, r, s) => {
  try {
    return s.validateSystemMz(t) ? {
      system: t,
      message: ""
    } : s.validateSystemMv && s.validateSystemMv(t) ? { system: n(t), message: r.mvAsMz } : e(r.invalidStructure);
  } catch {
    return e(r.validateFunctionError);
  }
};
export {
  m as F,
  u as r
};
