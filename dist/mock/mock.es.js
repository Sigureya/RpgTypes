import { F as e, a, b as r, c as o, d as f, e as m, f as d, g, h, i as y, j as J, k as W, l as S, m as c } from "../shared/fileNames.es.js";
const k = (i, s, t = /* @__PURE__ */ new Map()) => p(t, i) || (s.mapInfos && i.endsWith(e) ? JSON.stringify(s.mapInfos) : s.actors && i.endsWith(a) ? JSON.stringify(s.actors) : s.enemies && i.endsWith(r) ? JSON.stringify(s.enemies) : s.weapons && i.endsWith(o) ? JSON.stringify(s.weapons) : s.classes && i.endsWith(f) ? JSON.stringify(s.classes) : s.armors && i.endsWith(m) ? JSON.stringify(s.armors) : s.items && i.endsWith(d) ? JSON.stringify(s.items) : s.troops && i.endsWith(g) ? JSON.stringify(s.troops) : s.commonEvents && i.endsWith(h) ? JSON.stringify(s.commonEvents) : s.skills && i.endsWith(y) ? JSON.stringify(s.skills) : s.states && i.endsWith(J) ? JSON.stringify(s.states) : s.animations && i.endsWith(W) ? JSON.stringify(s.animations) : s.system && i.endsWith(S) ? JSON.stringify(s.system) : s.tilesets && i.endsWith(c) ? JSON.stringify(s.tilesets) : void 0), p = (i, s) => {
  if (i.size === 0) return;
  const t = s.match(/Map(\d{4}).json$/);
  if (t) {
    const n = Number.parseInt(t[1], 10);
    if (i.has(n)) return JSON.stringify(i.get(n));
  }
};
export {
  k as fakeFileRead
};
