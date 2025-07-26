import { g as e, b as r } from "../shared/make.es.js";
import { a, c, m } from "../shared/make.es.js";
import { m as m2 } from "../shared/mergeItemsSource.es.js";
const s = "rmmz", t = "colors", o = (e2, r2, a2, s2 = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e2.pattern.length >= s2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{ message: a2.formatVeryLong, reason: e2.pattern.slice(0, s2.formatMaxLength) }], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: l(e2, r2, a2),
  syntaxErrors: n(e2.pattern, r2, a2, s2.placeHolderMaxLength)
}, n = (r2, a2, s2, t2) => {
  const o2 = Array.from(r2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), m3 = e(a2);
  return o2.reduce((e2, r3) => {
    const a3 = r3[1];
    return 0 === a3.length ? e2 : a3.length > t2 ? (e2.push({ message: s2.longPlaceHolder, reason: a3.slice(0, t2) }), e2) : (m3.has(a3) || e2.push({
      message: s2.extraPlaceHolder,
      reason: a3
    }), e2);
  }, []);
}, l = (e2, a2, s2) => r(a2).reduce((r2, a3) => {
  const t2 = g(e2, a3, s2);
  return t2 && r2.push(t2), r2;
}, []), g = (e2, r2, a2) => {
  const s2 = e2.pattern.includes(r2.placeHolder), t2 = !!e2.dataSource;
  return !s2 && t2 ? { message: a2.missingName, reason: r2.placeHolder } : s2 && !t2 ? { message: a2.missingSourceId, reason: r2.placeHolder } : void 0;
}, p = (e2) => "number" == typeof e2 && !Number.isNaN(e2), u = (e2) => Object.entries(e2).map(([, e3]) => e3.title);
export {
  s as AUTHOR_RMMZ,
  t as SRC_COLOR,
  a as applyFormatRule,
  c as compileFormatRule,
  o as detectFormatErrors,
  u as domainNames,
  p as isValidNumber,
  m as makeAudioFileParams,
  m2 as mergeItemsSource
};
//# sourceMappingURL=libs.es.js.map
