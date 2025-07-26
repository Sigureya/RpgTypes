"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("../shared/make.cjs.js"), r = require("../shared/mergeItemsSource.cjs.js"), a = (r2, a2, t2, s2) => {
  const o = Array.from(r2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), l = e.getPlaceHolderKeys(a2);
  return o.reduce((e2, r3) => {
    const a3 = r3[1];
    return 0 === a3.length ? e2 : a3.length > s2 ? (e2.push({
      message: t2.longPlaceHolder,
      reason: a3.slice(0, s2)
    }), e2) : (l.has(a3) || e2.push({ message: t2.extraPlaceHolder, reason: a3 }), e2);
  }, []);
}, t = (r2, a2, t2) => e.getItemMappersFromRule(a2).reduce((e2, a3) => {
  const o = s(r2, a3, t2);
  return o && e2.push(o), e2;
}, []), s = (e2, r2, a2) => {
  const t2 = e2.pattern.includes(r2.placeHolder), s2 = !!e2.dataSource;
  return !t2 && s2 ? { message: a2.missingName, reason: r2.placeHolder } : t2 && !s2 ? {
    message: a2.missingSourceId,
    reason: r2.placeHolder
  } : void 0;
};
exports.applyFormatRule = e.applyFormatRule, exports.compileFormatRule = e.compileFormatRule, exports.makeAudioFileParams = e.makeAudioFileParams, exports.mergeItemsSource = r.mergeItemsSource, exports.AUTHOR_RMMZ = "rmmz", exports.SRC_COLOR = "colors", exports.detectFormatErrors = (e2, r2, s2, o = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= o.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: s2.formatVeryLong,
  reason: e2.pattern.slice(0, o.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: t(e2, r2, s2),
  syntaxErrors: a(e2.pattern, r2, s2, o.placeHolderMaxLength)
}, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.title), exports.isValidNumber = (e2) => "number" == typeof e2 && !Number.isNaN(e2);
//# sourceMappingURL=libs.cjs.js.map
