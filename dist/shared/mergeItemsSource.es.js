const e = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, t = (e2, t2) => {
  const n2 = a(t2);
  return e2.reduce((e3, t3) => {
    const a2 = r(t3, n2);
    return e3.set(t3.kindId, a2), e3;
  }, /* @__PURE__ */ new Map());
}, r = (e2, t2) => {
  const r2 = n(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: r2 ? r2.items : void 0 };
}, n = (t2, r2) => {
  if (t2) return r2.get(e(t2));
}, a = (t2) => t2.reduce((t3, r2) => {
  const n2 = {
    items: o(r2.items),
    source: r2.source,
    label: r2.label
  };
  return t3.set(e(r2.source), n2), t3;
}, /* @__PURE__ */ new Map()), o = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name }));
export {
  t as m
};
//# sourceMappingURL=mergeItemsSource.es.js.map
