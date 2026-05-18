const C = 0, M = 1, w = 0, E = 1, I = (a) => a.parameters[2] === 1, N = (a) => a.parameters[0], i = (a, e) => `\\${a}[${e}]`, g = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: i(a, s)
}))), b = (a) => g("N", a), P = (a) => g("V", a), V = (a) => a.map(((e) => ({ text: e.name, controlChar: i("N", e.id) }))), j = (a) => a.variables.map(((e, t) => ({
  text: e || "",
  controlChar: i("V", t)
}))).filter(((e) => e.text !== "")), p = (a) => !!a, q = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), v = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), o = (a, e) => a.pages.map(((t, s) => e(t, s, a))), y = (a, e) => a.events.filter(p).map(((t) => o(t, e))), z = (a, e) => a.events.filter(p).flatMap(((t) => o(t, e))), B = (a, e) => a.map(((t) => o(t, e))), D = (a, e) => a.flatMap(((t) => o(t, e))), F = (a, e) => a.map(((t) => e(t, 0, t))), G = (a) => y(a, v).flat(2), H = (a, e) => d(a.note, ((t, s) => e(t, s, a))), f = (a) => d(a, ((e, t) => ({
  key: e,
  value: t
}))), d = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((s) => e(s[1], s[2])));
}, c = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), h = (a) => ({ note: A(a), items: f(a) }), A = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, x = (a, e) => `<${a}:${e}>`, K = (a, e, t = `
`) => {
  const s = h(a), m = s.items.map(((r) => ({ key: r.key, value: e(r) })));
  return c({ note: s.note, items: m }, t);
}, O = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, s = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return s ? s[2] : void 0;
}, R = (a, e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(s, ((m, r) => r === e ? x(r, t) : m));
}, W = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({
    key: t[1],
    value: t[2],
    id: a.id,
    name: a.name
  })));
}, J = (a, e, t = `
`) => {
  const s = h(a), m = s.items.reduce(((r, n) => {
    const $ = e.isReplaceTargetNote(n), u = $ ? { key: n.key, value: e.replaceText(n.value) ?? n.value } : n;
    return r.items.push(u), r.hasTarget = r.hasTarget || $, r;
  }), { hasTarget: !1, items: [] });
  return m.hasTarget ? c({ note: s.note, items: m.items }, t) : a;
}, T = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer"], k = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], S = ["Math.max", "Math.min"], L = (a) => l(a, T) || l(a, k) || l(a, S), l = (a, e) => e.some(((t) => a.includes(t)));
export {
  H as A,
  K as B,
  J as C,
  R as D,
  P as E,
  E as F,
  C as G,
  M as H,
  k as K,
  w as O,
  T as a,
  S as b,
  b as c,
  c as d,
  z as e,
  D as f,
  V as g,
  v as h,
  i,
  q as j,
  x as k,
  j as l,
  g as m,
  G as n,
  N as o,
  O as p,
  L as q,
  I as r,
  h as s,
  F as t,
  o as u,
  y as v,
  B as w,
  f as x,
  d as y,
  W as z
};
