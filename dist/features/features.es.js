import { a as i, d as c, aQ as p, r as f, av as l } from "../shared/namedItems.es.js";
import { m as r } from "../shared/mergeItemsSource.es.js";
const d = (a, s, t, e, o, m) => [...i(t, e), ...c(a, s), ...p(o, m)], u = (a, s) => r(f(s), a), y = (a, s, t) => {
  const e = l(s);
  return r(t ? [...e, ...t] : e, a);
};
export {
  d as buildReferenceItemSources,
  y as compileItemEffectDisplayData,
  u as compileTraitDisplayData
};
