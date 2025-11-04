import { g as c, b as p } from "../shared/make.es2.js";
import { a as R, c as A, m as E } from "../shared/make.es2.js";
import { m as F } from "../shared/mergeItemsSource.es.js";
const f = "rmmz", x = "colors", b = (e, a, r, s = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e.pattern.length >= s.formatMaxLength ? { formatLabel: e.label, syntaxErrors: [{ message: r.formatVeryLong, reason: e.pattern.slice(0, s.formatMaxLength) }], semanticErrors: [] } : {
  formatLabel: e.label,
  semanticErrors: g(e, a, r),
  syntaxErrors: i(e.pattern, a, r, s.placeHolderMaxLength)
}, i = (e, a, r, s) => {
  const t = Array.from(e.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n = c(a);
  return t.reduce((o, l) => {
    const m = l[1];
    return m.length === 0 ? o : m.length > s ? (o.push({ message: r.longPlaceHolder, reason: m.slice(0, s) }), o) : (n.has(m) || o.push({
      message: r.extraPlaceHolder,
      reason: m
    }), o);
  }, []);
}, g = (e, a, r) => p(a).reduce((s, t) => {
  const n = u(e, t, r);
  return n && s.push(n), s;
}, []), u = (e, a, r) => {
  const s = e.pattern.includes(a.placeHolder), t = !!e.dataSource;
  return !s && t ? { message: r.missingName, reason: a.placeHolder } : s && !t ? { message: r.missingSourceId, reason: a.placeHolder } : void 0;
}, L = (e) => Object.entries(e).map(([, a]) => a.title), d = (e, a, r) => a.map((s) => r(s, e[s], e)), H = (e, a, r) => d(e, a, r), y = (e) => typeof e == "number" && !Number.isNaN(e);
export {
  f as AUTHOR_RMMZ,
  x as SRC_COLOR,
  R as applyFormatRule,
  A as compileFormatRule,
  b as detectFormatErrors,
  L as domainNames,
  y as isValidNumber,
  E as makeAudioFileParams,
  F as mergeItemsSource,
  d as pickPropertys,
  H as pickString
};
