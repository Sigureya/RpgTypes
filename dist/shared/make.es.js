const e = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), a = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: {
    author: e2.sourceId.author,
    kind: e2.sourceId.kind,
    module: e2.sourceId.module
  }
}), r = (e2) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ new Set([...((_a = e2.placeHolder) == null ? void 0 : _a.numbers) ?? [], ...e2.itemMapper ? [e2.itemMapper.placeHolder] : [], ...((_b = e2.itemMappers) == null ? void 0 : _b.map((e3) => e3.placeHolder)) ?? [], ...((_c = e2.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d = e2.arrayIndex) == null ? void 0 : _d.map((e3) => e3.dataIdKey)) ?? []]);
}, t = (e2) => {
  const a2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...a2, e2.itemMapper] : [...a2];
}, l = (r2, l2 = []) => {
  return {
    itemMappers: [...t(r2), ...l2].map(n),
    fallbackFormat: { text: d(r2), label: o(r2) },
    properties: (p2 = r2.placeHolder ?? {}, { numbers: p2.numbers ? e(p2.numbers) : [], strings: p2.strings ? e(p2.strings) : [] }),
    arrayIndex: r2.arrayIndex ? r2.arrayIndex.map(a) : []
  };
  var p2;
}, n = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), d = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const a2 = ((e3) => {
    var _a, _b, _c;
    return /* @__PURE__ */ new Set([...((_a = e3.placeHolder) == null ? void 0 : _a.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === a2.size ? "value not found" : Array.from(a2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, o = (e2) => {
  var _a;
  return void 0 !== ((_a = e2.fallbackFormat) == null ? void 0 : _a.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, p = (e2, a2, r2) => {
  const t2 = a2[r2.dataKey];
  return null == t2 ? e2 : e2.replaceAll(r2.placeHolder, String(t2));
}, s = (e2, a2, r2, t2, l2) => {
  const n2 = ((e3, a3, r3) => {
    const t3 = r3.properties.numbers.reduce((e4, r4) => p(e4, a3, r4), e3);
    return r3.properties.strings.reduce((e4, r4) => p(e4, a3, r4), t3);
  })(t2, e2, r2);
  return a2 ? c(n2, e2, r2, a2, l2) : n2;
}, c = (e2, a2, r2, t2, l2) => {
  const n2 = ((e3, a3) => {
    const r3 = ((e4, a4) => {
      const r4 = a4[e4];
      return r4 && r4.id === e4 ? r4 : a4.find((a5) => a5.id === e4);
    })(a3, e3);
    return r3 ? r3.name : `?data[${a3}]`;
  })(t2, l2(a2));
  return r2.itemMappers.reduce((e3, a3) => e3.replaceAll(a3.placeHolder, n2), e2);
}, m = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
});
export {
  s as a,
  t as b,
  l as c,
  r as g,
  m
};
//# sourceMappingURL=make.es.js.map
