import { a as f, d, aQ as p, r as N, av as g } from "../shared/namedItems.es.js";
import { m as c } from "../shared/mergeItemsSource.es.js";
const b = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), m = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), n = (a) => [m(a, "faceName", "faces"), m(a, "characterName", "characters"), m(a, "battlerName", "sv_actors")], s = (a, e) => ({
  folder: "characters",
  key: e,
  image: a[e].characterName
}), i = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e]
}), I = (a) => [i(a, "title1Name", "titles1"), i(a, "title2Name", "titles2"), s(a, "boat"), s(a, "ship"), s(a, "airship")], k = (a, e, t, r, o, l) => [...f(t, r), ...d(a, e), ...p(o, l)], x = (a, e) => c(N(e), a), D = (a, e, t) => {
  const r = g(e);
  return c(t ? [...r, ...t] : r, a);
};
export {
  k as buildReferenceItemSources,
  D as compileItemEffectDisplayData,
  x as compileTraitDisplayData,
  n as extractImageFromActor,
  b as extractImageFromEnemy,
  I as extractImageFromSystem
};
