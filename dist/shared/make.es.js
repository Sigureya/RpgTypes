const u = (a) => a.map(((e) => ({ dataKey: e, placeHolder: `{${e}}` }))), b = (a) => ({
  dataKey: a.dataIdKey,
  placeHolder: `{${a.dataIdKey}}`,
  sourceId: {
    author: a.sourceId.author,
    kind: a.sourceId.kind,
    module: a.sourceId.module
  }
}), x = (a) => /* @__PURE__ */ new Set([...a.placeHolder?.numbers ?? [], ...a.itemMapper ? [a.itemMapper.placeHolder] : [], ...a.itemMappers?.map(((e) => e.placeHolder)) ?? [], ...a.placeHolder?.strings ?? [], ...a.arrayIndex?.map(((e) => e.dataIdKey)) ?? []]), I = (a) => {
  const e = a.itemMappers ?? [];
  return a.itemMapper ? [...e, a.itemMapper] : [...e];
}, g = (a, e = []) => {
  return {
    itemMappers: [...I(a), ...e].map(k),
    fallbackFormat: { text: H(a), label: K(a) },
    properties: (r = a.placeHolder ?? {}, { numbers: r.numbers ? u(r.numbers) : [], strings: r.strings ? u(r.strings) : [] }),
    arrayIndex: a.arrayIndex ? a.arrayIndex.map(b) : []
  };
  var r;
}, k = (a) => ({
  placeHolder: `{${a.placeHolder}}`,
  kindKey: a.kindKey,
  dataIdKey: a.dataIdKey
}), H = (a) => {
  if (a.fallbackFormat && a.fallbackFormat.text !== void 0) return a.fallbackFormat.text;
  const e = ((r) => /* @__PURE__ */ new Set([...r.placeHolder?.numbers ?? [], ...r.placeHolder?.strings ?? [], ...r.arrayIndex?.map(((t) => t.dataIdKey)) ?? []]))(a);
  return e.size === 0 ? "value not found" : Array.from(e).map(((r) => `${r}:{${r}}`)).join(", ");
}, K = (a) => a.fallbackFormat?.label !== void 0 ? a.fallbackFormat.label : "unknown key:{key}", i = (a, e, r) => {
  const t = e[r.dataKey];
  return t == null ? a : a.replaceAll(r.placeHolder, String(t));
}, M = (a, e, r, t, m) => {
  const c = ((p, n, o) => {
    const s = o.properties.numbers.reduce(((d, l) => i(d, n, l)), p);
    return o.properties.strings.reduce(((d, l) => i(d, n, l)), s);
  })(t, a, r);
  return e ? f(c, a, r, e, m) : c;
}, f = (a, e, r, t, m) => {
  const c = ((p, n) => {
    const o = ((s, d) => {
      const l = d[s];
      return l && l.id === s ? l : d.find(((y) => y.id === s));
    })(n, p);
    return o ? o.name : `?data[${n}]`;
  })(t, m(e));
  return r.itemMappers.reduce(((p, n) => p.replaceAll(n.placeHolder, c)), a);
}, v = (a = {}) => ({
  name: a.name ?? "",
  volume: a.volume ?? 100,
  pitch: a.pitch ?? 100,
  pan: a.pan ?? 0
});
export {
  M as a,
  I as b,
  g as c,
  x as g,
  v as m
};
