const x = 0, g = 1, M = 2, v = 3, F = 4, $ = 5, i = (a) => a.map(((r) => ({ dataKey: r, placeHolder: `{${r}}` }))), b = (a) => ({
  dataKey: a.dataIdKey,
  placeHolder: `{${a.dataIdKey}}`,
  sourceId: {
    author: a.sourceId.author,
    kind: a.sourceId.kind,
    module: a.sourceId.module
  }
}), h = (a) => /* @__PURE__ */ new Set([...a.placeHolder?.numbers ?? [], ...a.itemMapper ? [a.itemMapper.placeHolder] : [], ...a.itemMappers?.map(((r) => r.placeHolder)) ?? [], ...a.placeHolder?.strings ?? [], ...a.arrayIndex?.map(((r) => r.dataIdKey)) ?? []]), I = (a) => {
  const r = a.itemMappers ?? [];
  return a.itemMapper ? [...r, a.itemMapper] : [...r];
}, w = (a, r = []) => {
  return {
    itemMappers: [...I(a), ...r].map(k),
    fallbackFormat: { text: H(a), label: f(a) },
    properties: (e = a.placeHolder ?? {}, { numbers: e.numbers ? i(e.numbers) : [], strings: e.strings ? i(e.strings) : [] }),
    arrayIndex: a.arrayIndex ? a.arrayIndex.map(b) : []
  };
  var e;
}, k = (a) => ({
  placeHolder: `{${a.placeHolder}}`,
  kindKey: a.kindKey,
  dataIdKey: a.dataIdKey
}), H = (a) => {
  if (a.fallbackFormat && a.fallbackFormat.text !== void 0) return a.fallbackFormat.text;
  const r = ((e) => /* @__PURE__ */ new Set([...e.placeHolder?.numbers ?? [], ...e.placeHolder?.strings ?? [], ...e.arrayIndex?.map(((t) => t.dataIdKey)) ?? []]))(a);
  return r.size === 0 ? "value not found" : Array.from(r).map(((e) => `${e}:{${e}}`)).join(", ");
}, f = (a) => a.fallbackFormat?.label !== void 0 ? a.fallbackFormat.label : "unknown key:{key}", u = (a, r, e) => {
  const t = r[e.dataKey];
  return t == null ? a : a.replaceAll(e.placeHolder, String(t));
}, A = (a, r, e, t, m) => {
  const c = ((s, n, o) => {
    const p = o.properties.numbers.reduce(((d, l) => u(d, n, l)), s);
    return o.properties.strings.reduce(((d, l) => u(d, n, l)), p);
  })(t, a, e);
  return r ? K(c, a, e, r, m) : c;
}, K = (a, r, e, t, m) => {
  const c = ((s, n) => {
    const o = ((p, d) => {
      const l = d[p];
      return l && l.id === p ? l : d.find(((y) => y.id === p));
    })(n, s);
    return o ? o.name : `?data[${n}]`;
  })(t, m(r));
  return e.itemMappers.reduce(((s, n) => s.replaceAll(n.placeHolder, c)), a);
}, S = (a = {}) => ({
  name: a.name ?? "",
  volume: a.volume ?? 100,
  pitch: a.pitch ?? 100,
  pan: a.pan ?? 0
});
export {
  g as O,
  F as a,
  $ as b,
  v as c,
  x as d,
  M as e,
  A as f,
  w as g,
  h,
  I as i,
  S as m
};
