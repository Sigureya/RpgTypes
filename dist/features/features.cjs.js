"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("../shared/namedItems.cjs.js"), t = require("../shared/mergeItemsSource.cjs.js");
exports.buildReferenceItemSources = (t2, r, s, a, o, m) => [...e.defineTraitItems(s, a), ...e.defineGameDataSources(t2, r), ...e.defineSystemItems(o, m)], exports.compileItemEffectDisplayData = (r, s, a) => {
  const o = e.resolveItemEffectLabels(s);
  return t.mergeItemsSource(a ? [...o, ...a] : o, r);
}, exports.compileTraitDisplayData = (r, s) => t.mergeItemsSource(e.resolveTraitLabels(s), r);
//# sourceMappingURL=features.cjs.js.map
