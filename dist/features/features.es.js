import { a as l, d as p, aQ as x, r as f, av as g } from "../shared/namedItems.es.js";
import { m as o } from "../shared/mergeItemsSource.es.js";
const h = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), m = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), N = (a) => [m(a, "faceName", "faces"), m(a, "characterName", "characters"), m(a, "battlerName", "sv_actors")], s = (a, e) => ({
  folder: "characters",
  key: e,
  image: a[e].characterName
}), c = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e]
}), I = (a) => [c(a, "title1Name", "titles1"), c(a, "title2Name", "titles2"), s(a, "boat"), s(a, "ship"), s(a, "airship")], b = (a) => {
  return {
    code: a.bodyCode,
    paramIndex: 0,
    value: a.getBodyText(),
    speaker: (e = a.header, e.parameters[4] ? e.parameters[4].trimEnd() : "")
  };
  var e;
}, u = (a) => ({
  code: a.header.code,
  paramIndex: 0,
  value: a.getBodyText()
}), k = (a, e, t, r, i, d) => [...l(t, r), ...p(a, e), ...x(i, d)], v = (a, e) => o(f(e), a), F = (a, e, t) => {
  const r = g(e);
  return o(t ? [...r, ...t] : r, a);
};
export {
  k as buildReferenceItemSources,
  F as compileItemEffectDisplayData,
  v as compileTraitDisplayData,
  N as extractImageFromActor,
  h as extractImageFromEnemy,
  I as extractImageFromSystem,
  b as extractTextParamFromMessage,
  u as extractTextParamFromScript
};
