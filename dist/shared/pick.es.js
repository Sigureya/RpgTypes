const s = (e) => `${e.author}.${e.module}.${e.kind}`, m = (e, r) => {
  const t = c(r);
  return e.reduce((a, n) => {
    const o = u(n, t);
    return a.set(n.kindId, o), a;
  }, /* @__PURE__ */ new Map());
}, u = (e, r) => {
  const t = d(e.dataSource, r);
  return { patternCompiled: e.pattern, label: e.label, data: t ? t.items : void 0 };
}, d = (e, r) => {
  if (e) return r.get(s(e));
}, c = (e) => e.reduce((r, t) => {
  const a = {
    items: i(t.items),
    source: t.source,
    label: t.label
  };
  return r.set(s(t.source), a), r;
}, /* @__PURE__ */ new Map()), i = (e) => e.map((r) => ({
  id: r.id,
  name: r.name
})), l = (e, r, t) => r.map((a) => t(a, e[a], e)), p = (e, r, t) => l(e, r, t);
export {
  p as a,
  m,
  l as p
};
