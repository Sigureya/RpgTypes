import { b as ta, q as ra, N as na, v as _, E as V, w as U, aS as A, P as R, Q as J, aP as $, aM as F, aO as Q, az as ma, ay as P, aR as oa, as as L } from "./eventCommandCodes.es.js";
import { aR as Aa, aN as $a, b1 as Da, b2 as Fa, aH as Pa, aW as S, aV as ja, aQ as ia, ax as Ra, at as La, au as _a, aX as Va, aY as Ua } from "./namedItems.es.js";
import { JSONPathJS as Ja } from "jsonpath-js";
import { parseDeepRecord as qa } from "@sigureya/rmmz-plugin-schema";
import { m as ca } from "./mergeItemsSource.es.js";
import { m as Ga } from "./make.es.js";
import { t as Ka, F as za, E as Ha, B as Oa } from "./makeSystemEx.es.js";
import { F as Xa } from "./system.es.js";
const Ya = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), Qa = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), C = (a, e) => ({ note: Wa(a), main: e.map(((s) => ({ key: s, value: a[s], id: a.id }))) }), Wa = (a) => Aa(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), Za = (a) => C(a, ["name", "nickname", "profile"]), ae = (a) => C(a, ["name"]), ee = (a) => C(a, ["name"]), se = (a) => C(a, ["name", "description", "message1", "message2"]), te = (a) => C(a, ["name", "description"]), re = (a) => C(a, ["name", "description"]), ne = (a) => C(a, ["name", "description"]), me = (a) => C(a, ["name", "message1", "message2", "message3", "message4"]), oe = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Oa(a.terms.basic),
    commands: Ha(a.terms.commands),
    messages: za(a.terms.messages),
    params: Ka(a.terms.params)
  }
}), ie = (a, e) => {
  const s = x(a.actors, Za), t = pe(a.armors), r = x(a.classes, ee), n = x(a.enemies, ae), m = x(a.items, te), o = x(a.mapInfos, ((d) => d)), i = x(a.skills, se), v = x(a.states, me), b = x(a.weapons, re), c = ue(a.commonEvents, e), y = ge(a.troops, e), l = ye(a.mapFiles, e), T = ce(a.system), p = le([s, t, r, n, m, o, i, v, b, y, c]).concat(de(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: c.data, troops: y.data.flat() }, mapFiles: l, system: T, mainData: {
    actors: s.data,
    armors: t.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: v.data,
    weapons: b.data
  } }, errors: p };
}, ce = (a) => ({ message: a.message, system: a.system ? oe(a.system) : null }), x = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), le = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), de = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: Xa,
  error: e.message
}] : []], pe = (a) => x(a, ne), ue = (a, e) => x(a, ((s) => e.extractCommonEventText(s))), ge = (a, e) => x(a, ((s) => e.extractBattleText(s))), ye = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, la = (a, e, s) => a.filter(((t) => t.code === ta || t.code === ra || t.code === na)).map(((t) => fe(t, e, s))), he = { [na]: "weapon", [ta]: "armor", [ra]: "item" }, fe = (a, e, s) => {
  const t = $a(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === Da ? e.gain : a.parameters[1] === Fa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: he[a.code], dataId: Pa(a), code: a.code, commandNameMZ: s(a.code), operation: r, ...n, ...t };
}, da = (a) => !!a, mt = (a, e, s) => ({
  data: a,
  eventId: e,
  pageIndex: s
}), ve = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), q = (a, e) => a.pages.map(((s, t) => e(s, t, a))), be = (a, e) => a.events.filter(da).map(((s) => q(s, e))), W = (a, e) => a.events.filter(da).flatMap(((s) => q(s, e))), Ne = (a, e) => a.map(((s) => q(s, e))), xe = (a, e) => a.flatMap(((s) => q(s, e))), Te = (a, e) => a.map(((s) => e(s, 0, s))), ot = (a) => be(a, ve).flat(2), it = (a, e, s, t) => {
  const r = we(a), n = e.map(ke), m = Ie(s), o = Be(t);
  return new Set([r, m, o, n].flat(4));
}, we = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), ke = (a) => W(a, Z), Ie = (a) => Te(a, Z), Be = (a) => Ne(a, Z), Z = ({ list: a }) => a.filter(Me).map(((e) => e.parameters[1])), Me = (a) => a.code === _ || a.code === V || a.code === U, pa = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, ua = (a, e) => ({ ...a, pages: a.pages.map(((s) => pa(s, e))) }), ct = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? ua(s, e) : null))
}), lt = (a, e) => a.map(((s) => pa(s, e))), dt = (a, e) => a.map(((s) => ua(s, e))), pt = (a, e, s) => W(a.map, ((t, r, n) => ({
  ...Se(t),
  commands: la(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), Se = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, ut = (a, e, s) => xe(a, ((t, r, n) => ({
  commands: la(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Ce = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ee = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, G = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, ga = (a, e, s, t, r = Ae(a)) => Array.from(r.entries()).map((([n, m]) => {
  const o = De(m, e, s, t);
  return {
    key: n,
    kinds: $e(o),
    values: m.map(((i) => i.value))
  };
})), Ae = (a) => a.reduce(((e, s) => (e.has(s.key) || e.set(s.key, a.filter(((t) => t.key === s.key))), e)), /* @__PURE__ */ new Map()), $e = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), De = (a, e, s, t) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && Ce(n.value),
  isNumber: r.isNumber && Ee(n.value),
  isBgm: r.isBgm && e.bgm.has(n.value),
  isBgs: r.isBgs && e.bgs.has(n.value),
  isMe: r.isMe && e.me.has(n.value),
  isSe: r.isSe && e.se.has(n.value),
  isPicture: r.isPicture && s.picutures.has(n.value),
  isCharacter: r.isCharacter && s.characters.has(n.value),
  isFaceset: r.isFaceset && s.faces.has(n.value),
  isBattler: r.isBattler && s.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && s.svActors.has(n.value),
  isEnemy: r.isEnemy && s.enemies.has(n.value),
  isTileset: r.isTileset && s.tilesets.has(n.value),
  isMovie: r.isMovie && t.movies.has(n.value)
})), {
  isBoolean: !0,
  isNumber: !0,
  isBgm: !0,
  isBgs: !0,
  isMe: !0,
  isSe: !0,
  isBattler: !0,
  isCharacter: !0,
  isFaceset: !0,
  isSvBattler: !0,
  isEnemy: !0,
  isPicture: !0,
  isTileset: !0,
  isMovie: !0
}), Fe = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], Pe = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), B = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return { main: s.main, note: t };
})).filter(je), je = (a) => a.note.length > 0 || a.main.length > 0, Re = (a, e, s, t) => {
  const r = Ve(a.value.mainData, e, s, t), n = Ue(a.value.mapFiles.validMaps, e, s, t);
  return {
    dataNoteSummary: r.noteSummary,
    mapNoteSummary: n.noteSummary,
    nonTextNoteKeys: r.nonTextNoteKeys,
    data: { errors: a.errors, value: { mainData: r.mainData, mapFiles: {
      info: a.value.mapFiles.info,
      invalidMaps: a.value.mapFiles.invalidMaps,
      validMaps: n.validMaps
    }, eventData: a.value.eventData, system: a.value.system } }
  };
}, ya = (a, e, s, t) => {
  const r = (n = (m) => m.map, a.map(((m) => {
    const o = n(m);
    return Fe(o);
  })).flat(4));
  var n;
  return ga(r, e, s, t);
}, gt = (a, e, s, t) => {
  const r = ya(a, e, s, t), n = G(r);
  return fa(a, n);
}, Le = (a, e, s, t) => {
  const r = va(a, e, s, t);
  return G(r);
}, yt = (a, e, s, t) => {
  const r = Le(a, e, s, t);
  return ha(a, r);
}, ha = (a, e) => {
  const s = (t) => e.has(t.key);
  return {
    actors: B(a.actors, s),
    enemies: B(a.enemies, s),
    weapons: B(a.weapons, s),
    armors: B(a.armors, s),
    skills: B(a.skills, s),
    states: B(a.states, s),
    items: B(a.items, s),
    classes: B(a.classes, s)
  };
}, fa = (a, e) => a.map(((s) => {
  return { filename: s.filename, editingName: s.editingName, map: (t = s.map, r = (n) => e.has(n.key), { displayedName: t.displayedName, note: t.note, noteItems: t.noteItems.filter(r), events: t.events.map(((n) => Pe(n, r))) }) };
  var t, r;
})), va = (a, e, s, t) => {
  const r = _e(a);
  return ga(r, e, s, t);
}, _e = (a) => [M(a.actors), M(a.skills), M(a.items), M(a.weapons), M(a.armors), M(a.classes), M(a.states), M(a.enemies)].flat(3), M = (a) => a.map(((e) => e.note)), Ve = (a, e, s, t) => {
  const r = va(a, e, s, t), n = G(r);
  return { noteSummary: r, nonTextNoteKeys: n, mainData: ha(a, n) };
}, Ue = (a, e, s, t) => {
  const r = ya(a, e, s, t), n = G(r);
  return { noteSummary: r, validMaps: fa(a, n) };
}, Je = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, g = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, h = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, qe = (a, e) => {
  const s = (o) => e.replaceText(o), t = S(a.note, e), r = g(a.name, s), n = g(a.nickname, s), m = g(a.profile, s);
  return { ...a, name: r, nickname: n, profile: m, note: t };
}, Ge = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e);
  return { ...a, name: t, note: s };
}, Ke = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e);
  return { ...a, name: t, note: s };
}, ze = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e), r = h(a.description, e), n = h(a.message1, e), m = h(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, H = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e), r = h(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, He = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e), r = h(a.message1, e), n = h(a.message2, e), m = h(a.message3, e), o = h(a.message4, e);
  return {
    ...a,
    name: t,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: s
  };
}, Oe = (a, e) => {
  switch (a.code) {
    case Q:
      return Ye(a, e);
    case F:
      return We(a, e);
    case $:
    case J:
    case R:
    case A:
      return Xe(a, e);
    case _:
    case U:
    case V:
      return Qe(a, e);
    default:
      return a;
  }
}, Xe = (a, e) => {
  const s = g(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, Ye = (a, e) => {
  const s = a.parameters[4] ? g(a.parameters[4], e) : "";
  return Ga({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, Qe = (a, e) => {
  const s = g(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, We = (a, e) => {
  const s = a.parameters[0].map(((t) => g(t, e)));
  return {
    code: F,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, ht = (a, e, s = `
`) => Ze(a, ((t) => e.get(t)), s), Ze = (a, e, s = `
`) => ja(a.note, ((t) => g(t.value, e)), s), ft = (a, e) => ba(a, ((s) => Je(s, e))), ba = (a, e) => ({
  params: ss(a.params, ((s) => g(s, e))),
  messages: ts(a.messages, ((s) => g(s, e))),
  basic: as(a.basic, ((s) => g(s, e))),
  commands: es(a.commands, ((s) => g(s, e)))
}), as = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], es = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], ss = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], ts = (a, e) => ({
  actionFailure: e(a.actionFailure),
  actorDamage: e(a.actorDamage),
  actorDrain: e(a.actorDrain),
  actorGain: e(a.actorGain),
  actorLoss: e(a.actorLoss),
  actorNoDamage: e(a.actorNoDamage),
  actorNoHit: e(a.actorNoHit),
  actorRecovery: e(a.actorRecovery),
  alwaysDash: e(a.alwaysDash),
  autosave: e(a.autosave),
  bgmVolume: e(a.bgmVolume),
  bgsVolume: e(a.bgsVolume),
  buffAdd: e(a.buffAdd),
  buffRemove: e(a.buffRemove),
  commandRemember: e(a.commandRemember),
  counterAttack: e(a.counterAttack),
  criticalToActor: e(a.criticalToActor),
  criticalToEnemy: e(a.criticalToEnemy),
  defeat: e(a.defeat),
  debuffAdd: e(a.debuffAdd),
  emerge: e(a.emerge),
  enemyDamage: e(a.enemyDamage),
  enemyDrain: e(a.enemyDrain),
  enemyGain: e(a.enemyGain),
  enemyLoss: e(a.enemyLoss),
  enemyNoDamage: e(a.enemyNoDamage),
  enemyNoHit: e(a.enemyNoHit),
  enemyRecovery: e(a.enemyRecovery),
  escapeFailure: e(a.escapeFailure),
  escapeStart: e(a.escapeStart),
  evasion: e(a.evasion),
  expNext: e(a.expNext),
  expTotal: e(a.expTotal),
  file: e(a.file),
  loadMessage: e(a.loadMessage),
  levelUp: e(a.levelUp),
  magicEvasion: e(a.magicEvasion),
  magicReflection: e(a.magicReflection),
  meVolume: e(a.meVolume),
  obtainExp: e(a.obtainExp),
  obtainGold: e(a.obtainGold),
  obtainItem: e(a.obtainItem),
  obtainSkill: e(a.obtainSkill),
  partyName: e(a.partyName),
  possession: e(a.possession),
  preemptive: e(a.preemptive),
  saveMessage: e(a.saveMessage),
  seVolume: e(a.seVolume),
  substitute: e(a.substitute),
  surprise: e(a.surprise),
  touchUI: e(a.touchUI),
  useItem: e(a.useItem),
  victory: e(a.victory)
}), rs = (a, e) => ({
  ...a,
  gameTitle: g(a.gameTitle, e),
  currencyUnit: g(a.currencyUnit, e),
  elements: D(a.elements, e),
  skillTypes: D(a.skillTypes, e),
  weaponTypes: D(a.weaponTypes, e),
  armorTypes: D(a.armorTypes, e),
  equipTypes: D(a.equipTypes, e),
  terms: ba(a.terms, e)
}), D = (a, e) => a.map(((s) => g(s, e))), Na = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class xa {
  constructor(e, s) {
    this.header = e, this.bodies = s;
  }
  getBodyText() {
    return Na(this.joinCommandBodies());
  }
  mergedBody() {
    return { code: this.header.code, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
  joinCommandBodies() {
    return [this.header, ...this.bodies];
  }
  normalizedCommands() {
    return [this.mergedBody()];
  }
}
class aa {
  constructor(e, s, t) {
    this.bodyCode = e, this.header = s, this.bodies = t;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return Na(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()]
    };
  }
}
const K = (a, e, s, t) => {
  const r = a[e];
  if (!s(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!t(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, ns = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === J), ((m) => m.code === R)))(a, e);
  return ms(t) ? new aa(R, t, s) : new xa(t, s);
}, ms = (a) => a.parameters[0] === "選択肢ヘルプ", os = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === Q), ((m) => m.code === $)))(a, e);
  return new aa($, t, s);
}, is = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === P), ((m) => m.code === ma)))(a, e);
  return new xa(t, s);
}, cs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === oa), ((m) => m.code === A)))(a, e);
  return new aa(A, t, s);
}, ls = {
  [Q]: (a, e, s) => s.showMessage(os(a, e), e, a),
  [P]: (a, e, s) => s.script(is(a, e), e, a),
  [J]: (a, e, s) => s.comment(ns(a, e), e, a),
  [oa]: (a, e, s) => s.showScrollingText(cs(a, e), e, a)
}, Ta = (a) => ls[a], vt = (a) => wa(a, (() => [])), z = (a, e) => wa(a, e), wa = (a, e) => a.flatMap(((s, t) => ds(s, t, a, e))).filter(((s) => s !== null)), ds = (a, e, s, t) => {
  if (a.code === L) return t(a);
  if (a.code === F) return Qa(a);
  const r = Ta(a.code);
  if (r) {
    const n = r(s, e, ps);
    if (n !== void 0) return [n];
  }
  return a.code === U || a.code === _ || a.code === V ? Ya(a) : null;
}, ps = { comment: (a) => ({
  code: J,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: $, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, us = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: z(a.list, e)
}), gs = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: z(s.list, e) }))), ys = (a, e = () => []) => ({
  note: a.note,
  noteItems: ia(a.note),
  displayedName: a.displayName,
  events: hs(a, e)
}), hs = (a, e) => W(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: z(s.list, e),
  note: r.note,
  noteItems: ia(r.note),
  name: r.name
}))), ka = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Ia = (a) => a.kind === "struct", Ba = (a) => a.attr.kind === "struct[]", fs = (a) => Ma[a.kind.replace("[]", "")].type === "number", vs = (a) => Ma[a.kind.replace("[]", "")].type === "string", E = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, f = { type: "number", hasText: !1 }, Ma = {
  string: E,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: N,
  actor: N,
  class: N,
  enemy: N,
  skill: N,
  state: N,
  item: N,
  weapon: N,
  common_event: N,
  switch: N,
  variable: N,
  troop: N,
  multiline_string: E,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": E,
  "string[]": E,
  combo: E,
  select: E,
  any: E,
  struct: { type: "struct" },
  "actor[]": f,
  "enemy[]": f,
  "class[]": f,
  "skill[]": f,
  "state[]": f,
  "item[]": f,
  "weapon[]": f,
  "common_event[]": f,
  "troop[]": f,
  "armor[]": f,
  "switch[]": f,
  "variable[]": f,
  "number[]": f
};
function bs(a) {
  return Ns(a, ((e) => !0), ((e) => !0));
}
const Ns = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Ia(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (Ba(o)) r.push(o);
    else if (ka(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function xs(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const Ts = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, ws = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), Sa = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ca(a, e, s, t) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * s.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, v, b) {
    if (i.frames.length === 0) return i;
    const c = i.frames[i.frames.length - 1], y = i.frames.slice(0, -1);
    if (c.ancestry.includes(c.schemaName)) return { frames: y, items: i.items, errs: [...i.errs, { code: b.cyclicStruct, path: c.basePath }] };
    const l = v.get(c.schemaName);
    if (!l) return {
      frames: y,
      items: i.items,
      errs: [...i.errs, { code: b.undefinedStruct, path: c.basePath }]
    };
    const T = (function(p, d) {
      const u = p.ancestry.concat(p.schemaName), k = p.basePath;
      return [...d.structs.map(((I) => ({
        schemaName: I.attr.struct,
        basePath: `${k}["${I.name}"]`,
        ancestry: u
      }))), ...d.structArrays.map(((I) => ({ schemaName: I.attr.struct, basePath: `${k}["${I.name}"][*]`, ancestry: u })))].reverse();
    })(c, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const p = (function(d, { path: u, structName: k }) {
        return {
          category: "struct",
          objectSchema: xs(d.scalars),
          name: k,
          scalarArrays: ws(d.scalarArrays, u),
          scalarsPath: d.scalars.length > 0 ? Ts(d.scalars, u) : void 0
        };
      })(l, { path: c.basePath, structName: c.schemaName });
      return y.push(...T), {
        frames: y,
        items: [...i.items, p],
        errs: i.errs
      };
    }
    return y.push(...T), { frames: y, items: i.items, errs: i.errs };
  })(o, s, t)), r);
  return { items: m.items, errors: m.errs };
}
const ks = (a, e, s, t = Sa) => Ca(a.attr.struct, `${e}["${a.name}"]`, s, t), Is = (a, e, s, t = Sa) => Ca(a.attr.struct, `${e}["${a.name}"][*]`, s, t), Bs = (a, e, s, t) => ((r) => Ia(r.attr))(s) ? Cs(a, s, t) : Ba(s) ? Es(a, s, t) : ka(s) ? Ms(a, e, s) : Ss(a, e, s), Ms = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ss = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Cs = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ks(e, "$", s)
}), Es = (a, e, s) => ({
  structArrays: Is(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), As = (a, e) => e.map(((s) => $s(a, s))).flat(3), $s = (a, e) => [e.top ? O(e, a, e.top, "") : [], e.structs.map(((s) => O(e, a, s))), e.structArrays.map(((s) => O(e, a, s)))], O = (a, e, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, v, b) => v.pathSegments(i).map((({ value: c, segments: y }) => ((l, T, p, d, u) => {
    if (typeof p == "object" || p === null) return null;
    const k = d[d.length - 1];
    if (typeof k == "number") return null;
    const I = u[k];
    return I ? { rootName: l.rootName, rootType: l.rootCategory, structName: T, value: p, param: { name: k, attr: I } } : null;
  })(m, o, c, y, b))).filter(((c) => c !== null)))(a, t, e, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, v, b) => {
    const c = b.jsonPathJS.find(v);
    if (!Array.isArray(c)) return [];
    const y = b.schema.attr;
    return vs(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "string")).map(((u) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: u,
      structName: p,
      param: d
    }))))(o, c, i, b.schema) : fs(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "number")).map(((u) => ({ rootName: l.rootName, rootType: l.rootCategory, value: u, structName: p, param: d }))))(o, c, i, b.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, X = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: sa(a.scalarArrays, a.name, e), scalar: Ds(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: sa(a.scalarArrays, a.name, e)
}, sa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), Ds = (a, e, s) => ({ jsonPathJS: s(a), record: e }), Fs = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ps(e, s, t)
}), Ps = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? X(r.scalars, n) : void 0, o = r.structs.items.map(((v) => X(v, n))), i = r.structArrays.items.map(((v) => X(v, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Bs("args", a.command, t, e), s))), js = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, bs(r.params)]))))(a.schema.structs);
  return Rs(a.pluginName, a.schema.commands, s, e);
}, Rs = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, Fs(a, r, s, t)])), Ls = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: As(m, o.extractors) }))(qa(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, bt = (a) => {
  const e = new Map(a);
  return new ea(e);
}, Nt = () => new ea(/* @__PURE__ */ new Map()), xt = (a) => {
  const e = a.flatMap(((s) => js(s, ((t) => new Ja(t)))));
  return new ea(new Map(e));
};
class ea {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return ys(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return gs(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return us(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = Ls(e, this._commandMap);
    return s.args.filter(_s).map(((t) => ({
      code: L,
      value: t.value,
      paramIndex: 3,
      argName: t.param.name,
      argTitle: t.param.attr.text ?? t.param.name,
      commandName: s.commandName,
      pluginName: s.pluginName
    })));
  }
  extractCommandTexts(e) {
    return z(e, ((s) => this.extractArgs(s)));
  }
}
const _s = (a) => typeof a.value == "string", Tt = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), Y = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), wt = (a) => [Y(a, "faceName", "faces"), Y(a, "characterName", "characters"), Y(a, "battlerName", "sv_actors")], kt = (a, e, s, t, r, n) => [...Ra(s, t), ...La(a, e), ..._a(r, n)], It = (a, e) => ca(Ua(e), a), Bt = (a, e, s) => {
  const t = Va(e);
  return ca(s ? [...t, ...s] : t, a);
}, Vs = (a, e, s, t) => {
  if (a.code === $ || a.code === A || a.code === R) return;
  const r = Ta(a.code);
  return r ? r(s, e, t) : a.code === F ? Us(a) : a.code === _ || a.code === U || a.code === V ? Js(a) : a.code !== ma ? a : void 0;
}, Us = (a) => ({
  code: F,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Js = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), qs = (a) => ({ code: P, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Gs = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: $,
    indent: a.header.indent,
    parameters: [e]
  };
  return [zs(a.header), s];
}, Ks = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, zs = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, j = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: qs, showMessage: Gs, showScrollingText: Ks };
    return t.map(((n, m) => n.code === L ? n : Vs(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === L ? e.pluginCommand(t) : t.code === P ? e.scriptCommand(t) : Oe(t, s)));
}, Hs = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: j(s.list, e) })))
}), Mt = (a, e) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: j(t.list, s) }))) };
}, Os = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: j(a.list, e)
}), St = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: j(a.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: e
}) }), Ct = (a, e) => Ea(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), Xs = (a, e) => Ea(a, e), Ea = (a, e) => ({
  note: S(a.note, e),
  displayName: h(a.displayName, e),
  events: a.events.map(((s) => s ? ((t, r) => ({ id: t.id, name: t.name, x: t.x, y: t.y, note: S(t.note, r), pages: t.pages.map(((n) => ({
    ...n,
    list: j(n.list, r)
  }))) }))(s, e) : null)),
  data: a.data,
  tilesetId: a.tilesetId,
  encounterStep: a.encounterStep,
  scrollType: a.scrollType,
  specifyBattleback: a.specifyBattleback,
  autoplayBgm: a.autoplayBgm,
  autoplayBgs: a.autoplayBgs,
  battleback1Name: a.battleback1Name,
  battleback2Name: a.battleback2Name,
  bgm: a.bgm,
  bgs: a.bgs,
  disableDashing: a.disableDashing,
  encounterList: a.encounterList,
  height: a.height,
  width: a.width,
  parallaxLoopX: a.parallaxLoopX,
  parallaxLoopY: a.parallaxLoopY,
  parallaxName: a.parallaxName,
  parallaxShow: a.parallaxShow,
  parallaxSx: a.parallaxSx,
  parallaxSy: a.parallaxSy
}), Ys = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: w(a.actors, ((s) => qe(s, e))),
  armors: w(a.armors, ((s) => H(s, e))),
  classes: w(a.classes, ((s) => Ke(s, e))),
  commonEvents: w(a.commonEvents, ((s) => Os(s, e))),
  enemies: w(a.enemies, ((s) => Ge(s, e))),
  items: w(a.items, ((s) => H(s, e))),
  mapInfos: a.mapInfos,
  skills: w(a.skills, ((s) => ze(s, e))),
  states: w(a.states, ((s) => He(s, e))),
  system: { message: a.system.message, system: a.system.system ? rs(a.system.system, e.replaceText) : null },
  troops: w(a.troops, ((s) => Hs(s, e))),
  weapons: w(a.weapons, ((s) => H(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: Xs(s.map, e)
  }))) }
}), w = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), Et = (a, e, s, t) => {
  const r = ie(a, s), n = Re(r, e.audioFiles, e.imageFiles, e.otherFiles), m = Qs(n.nonTextNoteKeys, t);
  return Ys(a, m);
}, Qs = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Os as $,
  Ya as A,
  ne as B,
  ee as C,
  ae as D,
  vt as E,
  z as F,
  te as G,
  ie as H,
  se as I,
  me as J,
  oe as K,
  re as L,
  Qa as M,
  ot as N,
  Ce as O,
  Ee as P,
  Le as Q,
  yt as R,
  gt as S,
  Te as T,
  q as U,
  be as V,
  Ne as W,
  qe as X,
  H as Y,
  Oe as Z,
  Ke as _,
  kt as a,
  St as a0,
  lt as a1,
  Ge as a2,
  j as a3,
  pa as a4,
  Xs as a5,
  ct as a6,
  Ct as a7,
  Ze as a8,
  ht as a9,
  ua as aa,
  Ys as ab,
  Et as ac,
  ze as ad,
  He as ae,
  ft as af,
  rs as ag,
  Je as ah,
  Hs as ai,
  Mt as aj,
  dt as ak,
  G as al,
  ga as am,
  ya as an,
  Re as b,
  Ae as c,
  W as d,
  Bt as e,
  It as f,
  xe as g,
  ve as h,
  mt as i,
  Nt as j,
  bt as k,
  xt as l,
  it as m,
  gs as n,
  us as o,
  wt as p,
  Tt as q,
  fe as r,
  la as s,
  pt as t,
  ut as u,
  ys as v,
  Wa as w,
  Ls as x,
  C as y,
  Za as z
};
