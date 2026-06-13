import { k as $, v as b, u as v, r as M, p as h, i as k, g as f, n as S } from "./makeSystem.es.js";
const P = 0, U = 1, V = 0, W = 1, j = (a) => a.parameters[2] === 1, D = (a) => a.parameters[0], l = (a, e) => `\\${a}[${e}]`, c = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: l(a, s)
}))), X = (a) => c("N", a), Y = (a) => c("V", a), F = (a) => a.map(((e) => ({ text: e.name, controlChar: l("N", e.id) }))), G = (a) => a.variables.map(((e, t) => ({
  text: e || "",
  controlChar: l("V", t)
}))).filter(((e) => e.text !== "")), d = (a) => !!a, H = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), I = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), o = (a, e) => a.pages.map(((t, s) => e(t, s, a))), N = (a, e) => a.events.filter(d).map(((t) => o(t, e))), J = (a, e) => a.events.filter(d).flatMap(((t) => o(t, e))), K = (a, e) => a.map(((t) => o(t, e))), L = (a, e) => a.flatMap(((t) => o(t, e))), O = (a, e) => a.map(((t) => e(t, 0, t))), R = (a) => N(a, I).flat(2), Q = (a, e) => g(a.note, ((t, s) => e(t, s, a))), w = (a) => g(a, ((e, t) => ({
  key: e,
  value: t
}))), g = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((s) => e(s[1], s[2])));
}, y = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), T = (a) => ({ note: A(a), items: w(a) }), A = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, x = (a, e) => `<${a}:${e}>`, Z = (a, e, t = `
`) => {
  const s = T(a), m = s.items.map(((r) => ({ key: r.key, value: e(r) })));
  return y({ note: s.note, items: m }, t);
}, _ = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, s = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return s ? s[2] : void 0;
}, aa = (a, e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(s, ((m, r) => r === e ? x(r, t) : m));
}, ea = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({
    key: t[1],
    value: t[2],
    id: a.id,
    name: a.name
  })));
}, ta = (a, e, t = `
`) => {
  const s = T(a), m = s.items.reduce(((r, i) => {
    const p = e.isReplaceTargetNote(i), u = p ? { key: i.key, value: e.replaceText(i.value) ?? i.value } : i;
    return r.items.push(u), r.hasTarget = r.hasTarget || p, r;
  }), { hasTarget: !1, items: [] });
  return m.hasTarget ? y({ note: s.note, items: m.items }, t) : a;
}, C = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer", "$gameTemp"], z = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], B = ["SceneManager", "AudioManager", "ImageManager", "DataManager", "PluginManager"], q = ["Math.max", "Math.min"], sa = (a) => n(a, C) || n(a, z) || n(a, B) || n(a, q), n = (a, e) => e.some(((t) => a.includes(t))), ra = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  elements: [...a.elements],
  skillTypes: [...a.skillTypes],
  terms: { basic: M(a.terms.basic), commands: v(a.terms.commands), messages: b(a.terms.messages), params: $(a.terms.params) }
}), ma = (a, e) => h({
  locale: a.locale,
  versionId: a.versionId,
  options: a,
  advanced: a.advanced,
  vehicles: a,
  editing: a.editor,
  sounds: S(a.sounds),
  images: { title1Name: a.title1Name, title2Name: a.title2Name },
  bgm: {
    titleBgm: a.titleBgm,
    battleBgm: a.battleBgm
  },
  me: { defeatMe: a.defeatMe, gameoverMe: a.gameoverMe, victoryMe: a.victoryMe },
  texts: { gameTitle: e.gameTitle, currencyUnit: e.currencyUnit },
  dataNames: { variables: a.variables, switches: a.switches, armorTypes: e.armorTypes, elements: e.elements, equipTypes: e.equipTypes, weaponTypes: e.weaponTypes, skillTypes: e.skillTypes },
  terms: {
    basic: e.terms.basic,
    commands: e.terms.commands,
    messages: e.terms.messages,
    params: e.terms.params
  },
  itemCategories: f(a.itemCategories),
  menuCommands: k(a.menuCommands),
  titleCommandWindow: a.titleCommandWindow,
  size: { tileSize: a.tileSize, faceSize: a.faceSize, iconSize: a.iconSize },
  gameInit: {
    startMapId: a.startMapId,
    startX: a.startX,
    startY: a.startY,
    partyMembers: a.partyMembers
  },
  editorTemporary: { editMapId: a.editMapId, battlerName: a.battlerName },
  attackMotion: a.attackMotions,
  battle: {
    battleSystem: a.battleSystem,
    magicSkills: a.magicSkills
  },
  battleTest: { battleback1Name: a.battleback1Name, battleback2Name: a.battleback2Name, testBattlers: a.testBattlers, testTroopId: a.testTroopId }
});
export {
  g as A,
  ea as B,
  Q as C,
  Z as D,
  ta as E,
  ma as F,
  aa as G,
  Y as H,
  W as I,
  P as J,
  z as K,
  U as L,
  V as O,
  C as a,
  B as b,
  q as c,
  X as d,
  y as e,
  J as f,
  L as g,
  F as h,
  I as i,
  l as j,
  H as k,
  x as l,
  G as m,
  ra as n,
  c as o,
  R as p,
  D as q,
  _ as r,
  sa as s,
  j as t,
  T as u,
  O as v,
  o as w,
  N as x,
  K as y,
  w as z
};
