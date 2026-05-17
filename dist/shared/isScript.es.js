const C = 0, M = 1, T = 0, w = 1, E = (a) => a.parameters[2] === 1, I = (a) => a.parameters[0], i = (a, e) => `\\${a}[${e}]`, b = (a, e) => e.map(((t, s) => ({ text: t, controlChar: i(a, s) }))), N = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: i("N", e.id)
}))), P = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: i("V", t) }))).filter(((e) => e.text !== "")), p = (a) => !!a, j = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), f = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), o = (a, e) => a.pages.map(((t, s) => e(t, s, a))), h = (a, e) => a.events.filter(p).map(((t) => o(t, e))), V = (a, e) => a.events.filter(p).flatMap(((t) => o(t, e))), q = (a, e) => a.map(((t) => o(t, e))), z = (a, e) => a.flatMap(((t) => o(t, e))), B = (a, e) => a.map(((t) => e(t, 0, t))), D = (a) => h(a, f).flat(2), F = (a, e) => d(a.note, ((t, s) => e(t, s, a))), v = (a) => d(a, ((e, t) => ({
  key: e,
  value: t
}))), d = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((s) => e(s[1], s[2])));
}, c = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), g = (a) => ({ note: y(a), items: v(a) }), y = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, A = (a, e) => `<${a}:${e}>`, K = (a, e, t = `
`) => {
  const s = g(a), r = s.items.map(((n) => ({ key: n.key, value: e(n) })));
  return c({ note: s.note, items: r }, t);
}, O = (a, e, t = `
`) => {
  const s = g(a), r = s.items.map(((n) => ((m, $) => {
    if ($.isReplaceTargetNote(m)) {
      const u = $.replaceText(m.value);
      return { key: m.key, value: u ?? m.value };
    }
    return m;
  })(n, e)));
  return c({ note: s.note, items: r }, t);
}, R = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, s = Array.from(a.matchAll(t)).find(((r) => r[1] === e));
  return s ? s[2] : void 0;
}, W = (a, e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(s, ((r, n) => n === e ? A(n, t) : r));
}, G = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({
    key: t[1],
    value: t[2],
    id: a.id,
    name: a.name
  })));
}, x = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer"], k = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], S = ["Math.max", "Math.min"], H = (a) => l(a, x) || l(a, k) || l(a, S), l = (a, e) => e.some(((t) => a.includes(t)));
export {
  K as A,
  O as B,
  W as C,
  w as D,
  C as E,
  M as F,
  k as K,
  T as O,
  x as a,
  S as b,
  c,
  V as d,
  z as e,
  N as f,
  f as g,
  i as h,
  j as i,
  A as j,
  P as k,
  b as l,
  D as m,
  I as n,
  R as o,
  H as p,
  E as q,
  g as r,
  B as s,
  o as t,
  h as u,
  q as v,
  v as w,
  d as x,
  G as y,
  F as z
};
