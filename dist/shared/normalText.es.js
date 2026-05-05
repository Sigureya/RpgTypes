const s = (e) => `${e.author}.${e.module}.${e.kind}`, l = (e, n) => {
  const t = c(n);
  return e.reduce(((a, r) => {
    const o = d(r, t);
    return a.set(r.kindId, o), a;
  }), /* @__PURE__ */ new Map());
}, d = (e, n) => {
  const t = u(e.dataSource, n);
  return { patternCompiled: e.pattern, label: e.label, data: t ? t.items : void 0 };
}, u = (e, n) => {
  if (e) return n.get(s(e));
}, c = (e) => e.reduce(((n, t) => {
  const a = {
    items: i(t.items),
    source: t.source,
    label: t.label
  };
  return n.set(s(t.source), a), n;
}), /* @__PURE__ */ new Map()), i = (e) => e.map(((n) => ({ id: n.id, name: n.name }))), m = (e) => e.trimEnd();
export {
  l as m,
  m as n
};
