const S = 0, C = 1, M = 0, w = 1, E = (a) => a.parameters[2] === 1, I = (a) => a.parameters[0], i = (a, e) => `\\${a}[${e}]`, b = (a, e) => e.map(((t, s) => ({ text: t, controlChar: i(a, s) }))), N = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: i("N", e.id)
}))), P = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: i("V", t) }))).filter(((e) => e.text !== "")), g = (a) => !!a, j = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), u = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), o = (a, e) => a.pages.map(((t, s) => e(t, s, a))), v = (a, e) => a.events.filter(g).map(((t) => o(t, e))), V = (a, e) => a.events.filter(g).flatMap(((t) => o(t, e))), q = (a, e) => a.map(((t) => o(t, e))), z = (a, e) => a.flatMap(((t) => o(t, e))), B = (a, e) => a.map(((t) => e(t, 0, t))), D = (a) => v(a, u).flat(2), F = (a, e) => p(a.note, ((t, s) => e(t, s, a))), y = (a) => p(a, ((e, t) => ({
  key: e,
  value: t
}))), p = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((s) => e(s[1], s[2])));
}, d = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), c = (a) => ({ note: f(a), items: y(a) }), f = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, A = (a, e) => `<${a}:${e}>`, K = (a, e, t = `
`) => {
  const s = c(a), m = s.items.map(((r) => ({ key: r.key, value: e(r) })));
  return d({ note: s.note, items: m }, t);
}, O = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, s = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return s ? s[2] : void 0;
}, R = (a, e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(s, ((m, r) => r === e ? A(r, t) : m));
}, W = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({
    key: t[1],
    value: t[2],
    id: a.id,
    name: a.name
  })));
}, G = (a, e, t = `
`) => {
  const s = c(a), m = s.items.reduce(((r, n) => {
    const $ = e.isReplaceTargetNote(n), h = $ ? { key: n.key, value: e.replaceText(n.value) ?? n.value } : n;
    return r.items.push(h), r.hasTarget = r.hasTarget || $, r;
  }), { hasTarget: !1, items: [] });
  return m.hasTarget ? d({ note: s.note, items: m.items }, t) : a;
}, x = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer"], T = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], k = ["Math.max", "Math.min"], H = (a) => l(a, x) || l(a, T) || l(a, k), l = (a, e) => e.some(((t) => a.includes(t)));
export {
  K as A,
  G as B,
  R as C,
  w as D,
  S as E,
  C as F,
  T as K,
  M as O,
  x as a,
  k as b,
  d as c,
  V as d,
  z as e,
  N as f,
  u as g,
  i as h,
  j as i,
  A as j,
  P as k,
  b as l,
  D as m,
  I as n,
  O as o,
  H as p,
  E as q,
  c as r,
  B as s,
  o as t,
  v as u,
  q as v,
  y as w,
  p as x,
  W as y,
  F as z
};
