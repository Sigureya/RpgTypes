import { g as c, b as p } from "../shared/make.es.js";
import { a as M, c as N, m as R } from "../shared/make.es.js";
import { m as E, p as S, a as F } from "../shared/pick.es.js";
const h = "rmmz", f = "colors", x = (e, a, s, r = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e.pattern.length >= r.formatMaxLength ? { formatLabel: e.label, syntaxErrors: [{ message: s.formatVeryLong, reason: e.pattern.slice(0, r.formatMaxLength) }], semanticErrors: [] } : {
  formatLabel: e.label,
  semanticErrors: g(e, a, s),
  syntaxErrors: i(e.pattern, a, s, r.placeHolderMaxLength)
}, i = (e, a, s, r) => {
  const t = Array.from(e.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n = c(a);
  return t.reduce((o, l) => {
    const m = l[1];
    return m.length === 0 ? o : m.length > r ? (o.push({ message: s.longPlaceHolder, reason: m.slice(0, r) }), o) : (n.has(m) || o.push({
      message: s.extraPlaceHolder,
      reason: m
    }), o);
  }, []);
}, g = (e, a, s) => p(a).reduce((r, t) => {
  const n = u(e, t, s);
  return n && r.push(n), r;
}, []), u = (e, a, s) => {
  const r = e.pattern.includes(a.placeHolder), t = !!e.dataSource;
  return !r && t ? { message: s.missingName, reason: a.placeHolder } : r && !t ? { message: s.missingSourceId, reason: a.placeHolder } : void 0;
}, b = (e) => Object.entries(e).map(([, a]) => a.title), L = (e) => typeof e == "number" && !Number.isNaN(e);
export {
  h as AUTHOR_RMMZ,
  f as SRC_COLOR,
  M as applyFormatRule,
  N as compileFormatRule,
  x as detectFormatErrors,
  b as domainNames,
  L as isValidNumber,
  R as makeAudioFileParams,
  E as mergeItemsSource,
  S as pickPropertys,
  F as pickString
};
