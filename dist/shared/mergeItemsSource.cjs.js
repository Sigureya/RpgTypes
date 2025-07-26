"use strict";
const e = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, t = (e2, t2) => {
  const n2 = r(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: n2 ? n2.items : void 0 };
}, r = (t2, r2) => {
  if (t2) return r2.get(e(t2));
}, n = (t2) => t2.reduce((t3, r2) => {
  const n2 = { items: s(r2.items), source: r2.source, label: r2.label };
  return t3.set(e(r2.source), n2), t3;
}, /* @__PURE__ */ new Map()), s = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
}));
exports.mergeItemsSource = (e2, r2) => {
  const s2 = n(r2);
  return e2.reduce((e3, r3) => {
    const n2 = t(r3, s2);
    return e3.set(r3.kindId, n2), e3;
  }, /* @__PURE__ */ new Map());
};
//# sourceMappingURL=mergeItemsSource.cjs.js.map
