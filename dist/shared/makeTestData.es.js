import { v, w as u, E as f, d as b, f as k, M as N, am as w, an as T, ao as B, aq as S, P as L, Q as R } from "./eventCommandCodes.es.js";
import { m as d } from "./makeAudio.es.js";
const na = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), ma = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), ra = ({ actorId: a = 1, faceIndex: e = 0, faceName: i = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, r = 0) => ({ code: 322, indent: r, parameters: [a, m, s, i, e, n] }), da = (a, e = 0) => ({
  code: v,
  parameters: [a.actorId, a.name],
  indent: e
}), oa = (a, e = 0) => ({ code: u, parameters: [a.actorId, a.nickname], indent: e }), pa = (a, e = 0) => ({
  code: f,
  parameters: [a.actorId, a.profile],
  indent: e
}), ca = ({ audio: a }) => [V(d({ name: a })), q(d({ name: a })), P(d({ name: a })), D(d({ name: a })), A(d({ name: a })), C(d({ name: a })), W(d({ name: a }))], la = (a, e) => o(a, d({ name: e })), o = (a, e, i = 0) => ({
  code: a,
  parameters: [d(e)],
  indent: i
}), V = (a, e = 0) => o(w, a, e), q = (a, e = 0) => o(T, a, e), P = (a, e = 0) => o(B, a, e), D = (a, e = 0) => o(S, a, e), A = (a, e = 0) => o(b, a, e), C = (a, e = 0) => o(N, a, e), W = (a, e = 0) => o(k, a, e), l = (a) => [a], Ia = (a) => ({
  comment: a[0]
}), E = (a, e = 0) => ({ code: R, indent: e, parameters: l(a) }), F = (a, e = 0) => ({ code: L, indent: e, parameters: l(a) }), ga = (a, e = 0) => a.map(((i, s) => s === 0 ? E(i, e) : F(i, e))), xa = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), ya = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), ha = (a) => ({
  span: a.span ?? 0,
  conditions: G(a.conditions ?? {}),
  list: a.list ?? []
}), va = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), G = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), H = (a = {}) => ({
  switch1Id: a.switch1Id ?? 0,
  switch1Valid: a.switch1Id !== void 0,
  switch2Id: a.switch2Id ?? 0,
  switch2Valid: a.switch2Id !== void 0,
  variableId: a.variableId ?? 0,
  variableValid: a.variableId !== void 0,
  variableValue: a.variableValue ?? 0,
  selfSwitchCh: a.selfSwitchCh ?? "A",
  selfSwitchValid: a.selfSwitchCh !== void 0,
  itemId: a.itemId ?? 0,
  itemValid: a.itemId !== void 0,
  actorId: a.actorId ?? 0,
  actorValid: a.actorId !== void 0
}), X = ({ id: a = 1, name: e = "", pages: i = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: i,
  note: s,
  x: m,
  y: n
}), Y = ({ characterIndex: a = 0, characterName: e = "", direction: i = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: i,
  pattern: s,
  tileId: m
}), M = ({ list: a = [], conditions: e = H(), image: i = Y(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: r = 1, stepAnime: t = !1, through: p = !1, walkAnime: g = !1, moveSpeed: x = 3, moveType: y = 0, trigger: h = 0 } = {}) => ({
  walkAnime: g,
  stepAnime: t,
  through: p,
  conditions: e,
  list: a,
  directionFix: m,
  image: i,
  priorityType: r,
  moveFrequency: s,
  moveSpeed: x,
  moveType: y,
  trigger: h,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), ua = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), fa = (a) => Q({ events: [X({ pages: [M({ list: a })] })] }), Q = (a = {}) => ({
  tilesetId: a.tilesetId ?? 1,
  data: a.data ?? [],
  battleback1Name: a.battleback1Name ?? "",
  battleback2Name: a.battleback2Name ?? "",
  autoplayBgm: a.autoplayBgm ?? !1,
  autoplayBgs: a.autoplayBgs ?? !1,
  parallaxLoopX: a.parallaxLoopX ?? !1,
  parallaxLoopY: a.parallaxLoopY ?? !1,
  parallaxName: a.parallaxName ?? "",
  parallaxShow: a.parallaxShow ?? !1,
  parallaxSx: a.parallaxSx ?? 0,
  parallaxSy: a.parallaxSy ?? 0,
  encounterStep: a.encounterStep ?? 30,
  scrollType: a.scrollType ?? 0,
  specifyBattleback: a.specifyBattleback ?? !1,
  width: a.width ?? 0,
  height: a.height ?? 0,
  note: a.note ?? "",
  bgm: a.bgm ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  bgs: a.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), $ = (a) => a.toString().padStart(3, "0"), ba = (a = { id: 0 }) => ({
  name: a.name ?? $(a.id),
  id: a.id,
  expanded: a.expanded ?? !1,
  order: a.order ?? 0,
  parentId: a.parentId ?? 0,
  scrollX: a.scrollX ?? 0,
  scrollY: a.scrollY ?? 0
}), j = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), ka = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), z = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  atypeId: a.atypeId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0
}), J = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ?? I(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Na = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? K(a.params) : I(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), I = () => [[0], [0], [0], [0], [0], [0], [0], [0]], K = (a) => {
  const e = a.map(((t) => t.atk)), i = a.map(((t) => t.def)), s = a.map(((t) => t.mat)), m = a.map(((t) => t.mdf)), n = a.map(((t) => t.agi)), r = a.map(((t) => t.luk));
  return [a.map(((t) => t.mhp)), a.map(((t) => t.mmp)), e, i, s, m, n, r];
}, O = ({ mhp: a = 0, mmp: e = 0, atk: i = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: r = 0, luk: t = 0 }) => [a, e, i, s, m, n, r, t], wa = (a) => {
  const [e, i, s, m, n, r, t, p] = a;
  return { mhp: e, mmp: i, atk: s, def: m, mat: n, mdf: r, agi: t, luk: p };
}, U = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Ta = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Z = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => U())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : O({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), _ = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  iconIndex: a.iconIndex ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  message3: a.message3 ?? "",
  message4: a.message4 ?? "",
  traits: [],
  note: a.note ?? "",
  messageType: a.messageType ?? 0,
  releaseByDamage: a.releaseByDamage ?? !1,
  restriction: a.restriction ?? 0,
  priority: a.priority ?? 0,
  motion: a.motion ?? 0,
  overlay: a.overlay ?? 0,
  removeAtBattleEnd: a.removeAtBattleEnd ?? !1,
  removeByRestriction: a.removeByRestriction ?? !1,
  autoRemovalTiming: a.autoRemovalTiming ?? 0,
  minTurns: a.minTurns ?? 0,
  maxTurns: a.maxTurns ?? 0,
  removeByDamage: a.removeByDamage ?? !1,
  chanceByDamage: a.chanceByDamage ?? 0,
  removeByWalking: a.removeByWalking ?? !1,
  stepsToRemove: a.stepsToRemove ?? 0
}), c = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), aa = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  animationId: a.animationId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0,
  damage: c(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), ea = (a = {}) => ({
  animationId: a.animationId ?? 0,
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  itypeId: a.itypeId ?? 0,
  note: a.note ?? "",
  consumable: a.consumable ?? !1,
  scope: a.scope ?? 0,
  occasion: a.occasion ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  repeats: a.repeats ?? 0,
  tpGain: a.tpGain ?? 0,
  hitType: a.hitType ?? 0,
  damage: c(a.damage ?? {}),
  effects: [],
  price: 0
}), ta = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: c(a.damage ?? {}),
  description: a.description ?? "",
  effects: [],
  hitType: a.hitType ?? 0,
  iconIndex: a.iconIndex ?? 0,
  id: a.id ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  messageType: a.messageType ?? 0,
  name: a.name ?? "",
  note: a.note ?? "",
  mpCost: a.mpCost ?? 0,
  occasion: a.occasion ?? 0,
  repeats: a.repeats ?? 0,
  scope: a.scope ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  tpCost: a.tpCost ?? 0,
  tpGain: a.tpGain ?? 0
}), Ba = (a) => j({
  battlerName: a.image,
  characterName: a.image,
  faceName: a.image,
  name: a.text,
  profile: a.text,
  nickname: a.text,
  note: a.note
}), Sa = (a) => J({ name: a.text, note: a.note }), La = (a) => aa({ name: a.text, note: a.note, description: a.text }), Ra = (a) => z({
  name: a.text,
  note: a.note,
  description: a.text
}), Va = (a) => Z({ name: a.text, note: a.note, battlerName: a.image }), qa = (a) => _({
  name: a.text,
  note: a.note,
  message1: a.text,
  message2: a.text,
  message3: a.text,
  message4: a.text
}), Pa = (a) => ta({ name: a.text, note: a.note, iconIndex: 0, description: a.text, message1: a.text, message2: a.text }), Da = (a) => ea({ name: a.text, note: a.note, iconIndex: 0, description: a.text });
export {
  va as $,
  l as A,
  ga as B,
  xa as C,
  c as D,
  U as E,
  Ta as F,
  Z as G,
  Va as H,
  H as I,
  ea as J,
  Da as K,
  Q as L,
  fa as M,
  X as N,
  Y as O,
  M as P,
  ua as Q,
  ba as R,
  $ as S,
  O as T,
  ta as U,
  Pa as V,
  _ as W,
  qa as X,
  ca as Y,
  ya as Z,
  G as _,
  Ba as a,
  aa as a0,
  La as a1,
  ka as a2,
  wa as a3,
  z as b,
  Ia as c,
  Ra as d,
  la as e,
  ha as f,
  J as g,
  Na as h,
  Sa as i,
  o as j,
  ra as k,
  da as l,
  j as m,
  oa as n,
  pa as o,
  A as p,
  na as q,
  W as r,
  ma as s,
  C as t,
  F as u,
  E as v,
  V as w,
  q as x,
  P as y,
  D as z
};
