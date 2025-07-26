"use strict";
const e = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), r = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
  author: e2.sourceId.author,
  kind: e2.sourceId.kind,
  module: e2.sourceId.module
} }), a = (e2) => {
  const r2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...r2, e2.itemMapper] : [...r2];
}, t = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), l = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const r2 = ((e3) => {
    var _a, _b, _c;
    return /* @__PURE__ */ new Set([...((_a = e3.placeHolder) == null ? void 0 : _a.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === r2.size ? "value not found" : Array.from(r2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, o = (e2) => {
  var _a;
  return void 0 !== ((_a = e2.fallbackFormat) == null ? void 0 : _a.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, p = (e2, r2, a2) => {
  const t2 = r2[a2.dataKey];
  return null == t2 ? e2 : e2.replaceAll(a2.placeHolder, String(t2));
}, n = (e2, r2, a2, t2, l2) => {
  const o2 = ((e3, r3) => {
    const a3 = ((e4, r4) => {
      const a4 = r4[e4];
      return a4 && a4.id === e4 ? a4 : r4.find((r5) => r5.id === e4);
    })(r3, e3);
    return a3 ? a3.name : `?data[${r3}]`;
  })(t2, l2(r2));
  return a2.itemMappers.reduce((e3, r3) => e3.replaceAll(r3.placeHolder, o2), e2);
};
exports.applyFormatRule = (e2, r2, a2, t2, l2) => {
  const o2 = ((e3, r3, a3) => {
    const t3 = a3.properties.numbers.reduce((e4, a4) => p(e4, r3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => p(e4, r3, a4), t3);
  })(t2, e2, a2);
  return r2 ? n(o2, e2, a2, r2, l2) : o2;
}, exports.compileFormatRule = (p2, n2 = []) => {
  return { itemMappers: [...a(p2), ...n2].map(t), fallbackFormat: { text: l(p2), label: o(p2) }, properties: (d = p2.placeHolder ?? {}, {
    numbers: d.numbers ? e(d.numbers) : [],
    strings: d.strings ? e(d.strings) : []
  }), arrayIndex: p2.arrayIndex ? p2.arrayIndex.map(r) : [] };
  var d;
}, exports.getItemMappersFromRule = a, exports.getPlaceHolderKeys = (e2) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ new Set([...((_a = e2.placeHolder) == null ? void 0 : _a.numbers) ?? [], ...e2.itemMapper ? [e2.itemMapper.placeHolder] : [], ...((_b = e2.itemMappers) == null ? void 0 : _b.map((e3) => e3.placeHolder)) ?? [], ...((_c = e2.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d = e2.arrayIndex) == null ? void 0 : _d.map((e3) => e3.dataIdKey)) ?? []]);
}, exports.makeAudioFileParams = (e2 = {}) => ({ name: e2.name ?? "", volume: e2.volume ?? 100, pitch: e2.pitch ?? 100, pan: e2.pan ?? 0 });
//# sourceMappingURL=make.cjs.js.map
