import { p as P } from "./makeSystem.es.js";
import { a as n, d as i, i as l, f as r, c as d, e as p, b as c, g as f, j as k, k as w, m as E, h as I, F as j, l as g } from "./constants.es.js";
const x = "ActorTexts.json", y = "Dictionary.json", e = (a, s, o) => o(a, JSON.stringify(s)), h = (a, s) => Promise.all([e(n, a.actors, s), e(i, a.classes, s), e(l, a.skills, s), e(r, a.items, s), e(d, a.weapons, s), e(p, a.armors, s), e(c, a.enemies, s), e(f, a.troops, s), e(k, a.states, s), e(w, a.animations, s), e(E, a.tilesets, s), e(I, a.commonEvents, s), e(j, a.mapInfos, s)]), J = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), u = (a, s) => Promise.all(a.map(((o) => J(o, s)))), $ = (a, s = () => P({})) => [{
  filename: g,
  data: a.system.system ? a.system.system : s()
}, m(n, a.actors.data), m(i, a.classes.data), m(l, a.skills.data), m(r, a.items.data), m(d, a.weapons.data), m(p, a.armors.data), m(c, a.enemies.data), m(f, a.troops.data), m(k, a.states.data), m(w, a.animations.data), m(E, a.tilesets.data), m(I, a.commonEvents.data), m(j, a.mapInfos.data), ...M(a.mapFiles.validMaps)], M = (a) => a.map(((s) => ({
  filename: `${s.filename}.json`,
  data: s.map
}))), m = (a, s) => ({
  filename: a,
  data: [null, ...s]
}), F = (a, s) => s(g, JSON.stringify(a)), A = (a, s, o) => Promise.all([h(N(a), o), F(a.system, o), u(s.validMaps, o)]).then((() => {
})), D = (a, s) => {
  const o = [h(S(a), s), u(a.mapFiles.validMaps, s)];
  return a.system.system && o.push(F(a.system.system, s)), Promise.all(o).then((() => {
  }));
}, t = (a) => [null, ...a], N = (a) => ({
  actors: t(a.actors),
  classes: t(a.classes),
  skills: t(a.skills),
  items: t(a.items),
  weapons: t(a.weapons),
  armors: t(a.armors),
  enemies: t(a.enemies),
  troops: t(a.troops),
  states: t(a.states),
  animations: t(a.animations),
  tilesets: t(a.tilesets),
  commonEvents: t(a.commonEvents),
  mapInfos: t(a.mapInfos)
}), S = (a) => ({
  actors: t(a.actors.data),
  classes: t(a.classes.data),
  skills: t(a.skills.data),
  items: t(a.items.data),
  weapons: t(a.weapons.data),
  armors: t(a.armors.data),
  enemies: t(a.enemies.data),
  troops: t(a.troops.data),
  states: t(a.states.data),
  animations: t(a.animations.data),
  tilesets: t(a.tilesets.data),
  commonEvents: t(a.commonEvents.data),
  mapInfos: t(a.mapInfos.data)
});
export {
  x as F,
  y as a,
  h as b,
  J as c,
  u as d,
  D as e,
  F as f,
  $ as r,
  A as w
};
