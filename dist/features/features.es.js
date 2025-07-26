import { a as s, d as a, aQ as e, r, av as m } from "../shared/namedItems.es.js";
import { m as o } from "../shared/mergeItemsSource.es.js";
const t = (r2, m2, o2, t2, d2, n2) => [...s(o2, t2), ...a(r2, m2), ...e(d2, n2)], d = (s2, a2) => o(r(a2), s2), n = (s2, a2, e2) => {
  const r2 = m(a2);
  return o(e2 ? [...r2, ...e2] : r2, s2);
};
export {
  t as buildReferenceItemSources,
  n as compileItemEffectDisplayData,
  d as compileTraitDisplayData
};
//# sourceMappingURL=features.es.js.map
