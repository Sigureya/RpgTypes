const u = (a) => a.map((e) => ({ dataKey: e, placeHolder: `{${e}}` })), b = (a) => ({
  dataKey: a.dataIdKey,
  placeHolder: `{${a.dataIdKey}}`,
  sourceId: {
    author: a.sourceId.author,
    kind: a.sourceId.kind,
    module: a.sourceId.module
  }
}), x = (a) => {
  var e, r, t, l;
  return /* @__PURE__ */ new Set([...((e = a.placeHolder) == null ? void 0 : e.numbers) ?? [], ...a.itemMapper ? [a.itemMapper.placeHolder] : [], ...((r = a.itemMappers) == null ? void 0 : r.map((n) => n.placeHolder)) ?? [], ...((t = a.placeHolder) == null ? void 0 : t.strings) ?? [], ...((l = a.arrayIndex) == null ? void 0 : l.map((n) => n.dataIdKey)) ?? []]);
}, I = (a) => {
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
  const e = ((r) => {
    var t, l, n;
    return /* @__PURE__ */ new Set([...((t = r.placeHolder) == null ? void 0 : t.numbers) ?? [], ...((l = r.placeHolder) == null ? void 0 : l.strings) ?? [], ...((n = r.arrayIndex) == null ? void 0 : n.map((d) => d.dataIdKey)) ?? []]);
  })(a);
  return e.size === 0 ? "value not found" : Array.from(e).map((r) => `${r}:{${r}}`).join(", ");
}, K = (a) => {
  var e;
  return ((e = a.fallbackFormat) == null ? void 0 : e.label) !== void 0 ? a.fallbackFormat.label : "unknown key:{key}";
}, i = (a, e, r) => {
  const t = e[r.dataKey];
  return t == null ? a : a.replaceAll(r.placeHolder, String(t));
}, M = (a, e, r, t, l) => {
  const n = ((d, p, c) => {
    const m = c.properties.numbers.reduce((s, o) => i(s, p, o), d);
    return c.properties.strings.reduce((s, o) => i(s, p, o), m);
  })(t, a, r);
  return e ? f(n, a, r, e, l) : n;
}, f = (a, e, r, t, l) => {
  const n = ((d, p) => {
    const c = ((m, s) => {
      const o = s[m];
      return o && o.id === m ? o : s.find((y) => y.id === m);
    })(p, d);
    return c ? c.name : `?data[${p}]`;
  })(t, l(e));
  return r.itemMappers.reduce((d, p) => d.replaceAll(p.placeHolder, n), a);
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
