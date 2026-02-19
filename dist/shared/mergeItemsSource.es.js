const o = (e) => `${e.author}.${e.module}.${e.kind}`, l = (e, t) => {
  const n = c(t);
  return e.reduce(((a, r) => {
    const s = u(r, n);
    return a.set(r.kindId, s), a;
  }), /* @__PURE__ */ new Map());
}, u = (e, t) => {
  const n = d(e.dataSource, t);
  return { patternCompiled: e.pattern, label: e.label, data: n ? n.items : void 0 };
}, d = (e, t) => {
  if (e) return t.get(o(e));
}, c = (e) => e.reduce(((t, n) => {
  const a = {
    items: i(n.items),
    source: n.source,
    label: n.label
  };
  return t.set(o(n.source), a), t;
}), /* @__PURE__ */ new Map()), i = (e) => e.map(((t) => ({ id: t.id, name: t.name })));
export {
  l as m
};
