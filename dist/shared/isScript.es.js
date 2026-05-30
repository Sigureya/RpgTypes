const I = 0, C = 1, w = 0, E = 1, N = (a) => a.parameters[2] === 1, P = (a) => a.parameters[0], i = (a, e) => `\\${a}[${e}]`, $ = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: i(a, s)
}))), b = (a) => $("N", a), V = (a) => $("V", a), j = (a) => a.map(((e) => ({ text: e.name, controlChar: i("N", e.id) }))), D = (a) => a.variables.map(((e, t) => ({
  text: e || "",
  controlChar: i("V", t)
}))).filter(((e) => e.text !== "")), p = (a) => !!a, q = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), v = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), l = (a, e) => a.pages.map(((t, s) => e(t, s, a))), y = (a, e) => a.events.filter(p).map(((t) => l(t, e))), z = (a, e) => a.events.filter(p).flatMap(((t) => l(t, e))), B = (a, e) => a.map(((t) => l(t, e))), F = (a, e) => a.flatMap(((t) => l(t, e))), G = (a, e) => a.map(((t) => e(t, 0, t))), H = (a) => y(a, v).flat(2), K = (a, e) => d(a.note, ((t, s) => e(t, s, a))), f = (a) => d(a, ((e, t) => ({
  key: e,
  value: t
}))), d = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((s) => e(s[1], s[2])));
}, c = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), u = (a) => ({ note: A(a), items: f(a) }), A = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, x = (a, e) => `<${a}:${e}>`, O = (a, e, t = `
`) => {
  const s = u(a), n = s.items.map(((r) => ({ key: r.key, value: e(r) })));
  return c({ note: s.note, items: n }, t);
}, R = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, s = Array.from(a.matchAll(t)).find(((n) => n[1] === e));
  return s ? s[2] : void 0;
}, W = (a, e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(s, ((n, r) => r === e ? x(r, t) : n));
}, J = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({
    key: t[1],
    value: t[2],
    id: a.id,
    name: a.name
  })));
}, L = (a, e, t = `
`) => {
  const s = u(a), n = s.items.reduce(((r, m) => {
    const g = e.isReplaceTargetNote(m), h = g ? { key: m.key, value: e.replaceText(m.value) ?? m.value } : m;
    return r.items.push(h), r.hasTarget = r.hasTarget || g, r;
  }), { hasTarget: !1, items: [] });
  return n.hasTarget ? c({ note: s.note, items: n.items }, t) : a;
}, M = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer", "$gameTemp"], T = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], k = ["SceneManager", "AudioManager", "ImageManager", "DataManager", "PluginManager"], S = ["Math.max", "Math.min"], Q = (a) => o(a, M) || o(a, T) || o(a, k) || o(a, S), o = (a, e) => e.some(((t) => a.includes(t)));
export {
  J as A,
  K as B,
  O as C,
  L as D,
  W as E,
  V as F,
  E as G,
  I as H,
  C as I,
  T as K,
  w as O,
  M as a,
  k as b,
  S as c,
  b as d,
  c as e,
  z as f,
  F as g,
  j as h,
  v as i,
  i as j,
  q as k,
  x as l,
  D as m,
  $ as n,
  H as o,
  P as p,
  R as q,
  Q as r,
  N as s,
  u as t,
  G as u,
  l as v,
  y as w,
  B as x,
  f as y,
  d as z
};
