import { aU as Ea, aO as Aa, b5 as $a, b6 as Da, aI as Pa, aZ as S, aP as Fa, aY as ja, aT as ea, ax as Ra, at as _a, au as La, a_ as Ua, a$ as Va } from "./namedItems.es.js";
import { b as sa, q as ta, N as ra, E as H, w as Y, v as X, aS as A, P as R, Q as L, aP as $, aM as P, aO as Z, az as na, ay as F, aR as ma, as as _ } from "./eventCommandCodes.es.js";
import { JSONPathJS as Ja } from "jsonpath-js";
import { parseDeepRecord as qa } from "@sigureya/rmmz-plugin-schema";
import { m as oa } from "./mergeItemsSource.es.js";
import { t as Ga, F as Ka, E as za, B as Oa } from "./makeSystemEx.es.js";
import { F as Ha } from "./system.es.js";
const Ya = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), Xa = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), C = (a, e) => ({ note: Za(a), main: e.map(((s) => ({ key: s, value: a[s], id: a.id }))) }), Za = (a) => Ea(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), Qa = (a) => C(a, ["name", "nickname", "profile"]), Wa = (a) => C(a, ["name"]), ae = (a) => C(a, ["name"]), ee = (a) => C(a, ["name", "description", "message1", "message2"]), se = (a) => C(a, ["name", "description"]), te = (a) => C(a, ["name", "description"]), re = (a) => C(a, ["name", "description"]), ne = (a) => C(a, ["name", "message1", "message2", "message3", "message4"]), me = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Oa(a.terms.basic),
    commands: za(a.terms.commands),
    messages: Ka(a.terms.messages),
    params: Ga(a.terms.params)
  }
}), oe = (a, e) => {
  const s = x(a.actors, Qa), t = de(a.armors), r = x(a.classes, ae), n = x(a.enemies, Wa), m = x(a.items, se), o = x(a.mapInfos, ((d) => d)), i = x(a.skills, ee), v = x(a.states, ne), b = x(a.weapons, te), c = pe(a.commonEvents, e), y = ue(a.troops, e), l = ge(a.mapFiles, e), T = ie(a.system), p = ce([s, t, r, n, m, o, i, v, b, y, c]).concat(le(a.mapFiles, a.system));
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
}, ie = (a) => ({ message: a.message, system: a.system ? me(a.system) : null }), x = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), ce = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), le = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: Ha,
  error: e.message
}] : []], de = (a) => x(a, re), pe = (a, e) => x(a, ((s) => e.extractCommonEventText(s))), ue = (a, e) => x(a, ((s) => e.extractBattleText(s))), ge = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, ia = (a, e, s) => a.filter(((t) => t.code === sa || t.code === ta || t.code === ra)).map(((t) => he(t, e, s))), ye = { [ra]: "weapon", [sa]: "armor", [ta]: "item" }, he = (a, e, s) => {
  const t = Aa(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === $a ? e.gain : a.parameters[1] === Da ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: ye[a.code], dataId: Pa(a), code: a.code, commandNameMZ: s(a.code), operation: r, ...n, ...t };
}, ca = (a) => !!a, Zs = (a, e, s) => ({
  data: a,
  eventId: e,
  pageIndex: s
}), fe = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), U = (a, e) => a.pages.map(((s, t) => e(s, t, a))), ve = (a, e) => a.events.filter(ca).map(((s) => U(s, e))), la = (a, e) => a.events.filter(ca).flatMap(((s) => U(s, e))), Qs = (a, e) => a.map(((s) => U(s, e))), be = (a, e) => a.flatMap(((s) => U(s, e))), Ws = (a, e) => a.map(((s) => e(s, 0, s))), at = (a) => ve(a, fe).flat(2), da = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, pa = (a, e) => ({ ...a, pages: a.pages.map(((s) => da(s, e))) }), et = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? pa(s, e) : null))
}), st = (a, e) => a.map(((s) => da(s, e))), tt = (a, e) => a.map(((s) => pa(s, e))), rt = (a, e, s) => la(a.map, ((t, r, n) => ({
  ...Ne(t),
  commands: ia(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), Ne = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, nt = (a, e, s) => be(a, ((t, r, n) => ({
  commands: ia(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), xe = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Te = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, V = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, ua = (a, e, s, t, r = Ie(a)) => Array.from(r.entries()).map((([n, m]) => {
  const o = ke(m, e, s, t);
  return {
    key: n,
    kinds: we(o),
    values: m.map(((i) => i.value))
  };
})), Ie = (a) => a.reduce(((e, s) => (e.has(s.key) || e.set(s.key, a.filter(((t) => t.key === s.key))), e)), /* @__PURE__ */ new Map()), we = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), ke = (a, e, s, t) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && xe(n.value),
  isNumber: r.isNumber && Te(n.value),
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
}), Be = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], Me = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), B = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return { main: s.main, note: t };
})).filter(Se), Se = (a) => a.note.length > 0 || a.main.length > 0, Ce = (a, e, s, t) => {
  const r = $e(a.value.mainData, e, s, t), n = De(a.value.mapFiles.validMaps, e, s, t);
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
}, ga = (a, e, s, t) => {
  const r = (n = (m) => m.map, a.map(((m) => {
    const o = n(m);
    return Be(o);
  })).flat(4));
  var n;
  return ua(r, e, s, t);
}, mt = (a, e, s, t) => {
  const r = ga(a, e, s, t), n = V(r);
  return ha(a, n);
}, Ee = (a, e, s, t) => {
  const r = fa(a, e, s, t);
  return V(r);
}, ot = (a, e, s, t) => {
  const r = Ee(a, e, s, t);
  return ya(a, r);
}, ya = (a, e) => {
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
}, ha = (a, e) => a.map(((s) => {
  return { filename: s.filename, editingName: s.editingName, map: (t = s.map, r = (n) => e.has(n.key), { displayedName: t.displayedName, note: t.note, noteItems: t.noteItems.filter(r), events: t.events.map(((n) => Me(n, r))) }) };
  var t, r;
})), fa = (a, e, s, t) => {
  const r = Ae(a);
  return ua(r, e, s, t);
}, Ae = (a) => [M(a.actors), M(a.skills), M(a.items), M(a.weapons), M(a.armors), M(a.classes), M(a.states), M(a.enemies)].flat(3), M = (a) => a.map(((e) => e.note)), $e = (a, e, s, t) => {
  const r = fa(a, e, s, t), n = V(r);
  return { noteSummary: r, nonTextNoteKeys: n, mainData: ya(a, n) };
}, De = (a, e, s, t) => {
  const r = ga(a, e, s, t), n = V(r);
  return { noteSummary: r, validMaps: ha(a, n) };
}, Pe = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, g = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, h = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, Fe = (a, e) => {
  const s = (o) => e.replaceText(o), t = S(a.note, e), r = g(a.name, s), n = g(a.nickname, s), m = g(a.profile, s);
  return { ...a, name: r, nickname: n, profile: m, note: t };
}, je = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e);
  return { ...a, name: t, note: s };
}, Re = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e);
  return { ...a, name: t, note: s };
}, _e = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e), r = h(a.description, e), n = h(a.message1, e), m = h(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, G = (a, e) => {
  const s = S(a.note, e), t = h(a.name, e), r = h(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, Le = (a, e) => {
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
}, Ue = (a, e) => {
  switch (a.code) {
    case Z:
      return Je(a, e);
    case P:
      return Ge(a, e);
    case $:
    case L:
    case R:
    case A:
      return Ve(a, e);
    case X:
    case Y:
    case H:
      return qe(a, e);
    default:
      return a;
  }
}, Ve = (a, e) => {
  const s = g(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, Je = (a, e) => {
  const s = a.parameters[4] ? g(a.parameters[4], e) : "";
  return Fa({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, qe = (a, e) => {
  const s = g(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, Ge = (a, e) => {
  const s = a.parameters[0].map(((t) => g(t, e)));
  return {
    code: P,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, it = (a, e, s = `
`) => Ke(a, ((t) => e.get(t)), s), Ke = (a, e, s = `
`) => ja(a.note, ((t) => g(t.value, e)), s), ct = (a, e) => va(a, ((s) => Pe(s, e))), va = (a, e) => ({
  params: He(a.params, ((s) => g(s, e))),
  messages: Ye(a.messages, ((s) => g(s, e))),
  basic: ze(a.basic, ((s) => g(s, e))),
  commands: Oe(a.commands, ((s) => g(s, e)))
}), ze = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Oe = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], He = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ye = (a, e) => ({
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
}), Xe = (a, e) => ({
  ...a,
  gameTitle: g(a.gameTitle, e),
  currencyUnit: g(a.currencyUnit, e),
  elements: D(a.elements, e),
  skillTypes: D(a.skillTypes, e),
  weaponTypes: D(a.weaponTypes, e),
  armorTypes: D(a.armorTypes, e),
  equipTypes: D(a.equipTypes, e),
  terms: va(a.terms, e)
}), D = (a, e) => a.map(((s) => g(s, e))), ba = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Na {
  constructor(e, s) {
    this.header = e, this.bodies = s;
  }
  getBodyText() {
    return ba(this.joinCommandBodies());
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
class Q {
  constructor(e, s, t) {
    this.bodyCode = e, this.header = s, this.bodies = t;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return ba(this.bodies);
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
const J = (a, e, s, t) => {
  const r = a[e];
  if (!s(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!t(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Ze = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => J(r, n, ((m) => m.code === L), ((m) => m.code === R)))(a, e);
  return Qe(t) ? new Q(R, t, s) : new Na(t, s);
}, Qe = (a) => a.parameters[0] === "選択肢ヘルプ", We = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => J(r, n, ((m) => m.code === Z), ((m) => m.code === $)))(a, e);
  return new Q($, t, s);
}, as = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => J(r, n, ((m) => m.code === F), ((m) => m.code === na)))(a, e);
  return new Na(t, s);
}, es = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => J(r, n, ((m) => m.code === ma), ((m) => m.code === A)))(a, e);
  return new Q(A, t, s);
}, ss = {
  [Z]: (a, e, s) => s.showMessage(We(a, e), e, a),
  [F]: (a, e, s) => s.script(as(a, e), e, a),
  [L]: (a, e, s) => s.comment(Ze(a, e), e, a),
  [ma]: (a, e, s) => s.showScrollingText(es(a, e), e, a)
}, xa = (a) => ss[a], lt = (a) => Ta(a, (() => [])), q = (a, e) => Ta(a, e), Ta = (a, e) => a.flatMap(((s, t) => ts(s, t, a, e))).filter(((s) => s !== null)), ts = (a, e, s, t) => {
  if (a.code === _) return t(a);
  if (a.code === P) return Xa(a);
  const r = xa(a.code);
  if (r) {
    const n = r(s, e, rs);
    if (n !== void 0) return [n];
  }
  return a.code === Y || a.code === X || a.code === H ? Ya(a) : null;
}, rs = { comment: (a) => ({
  code: L,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: $, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({ code: F, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, ns = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: q(a.list, e)
}), ms = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: q(s.list, e) }))), os = (a, e = () => []) => ({
  note: a.note,
  noteItems: ea(a.note),
  displayedName: a.displayName,
  events: is(a, e)
}), is = (a, e) => la(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: q(s.list, e),
  note: r.note,
  noteItems: ea(r.note),
  name: r.name
}))), Ia = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), wa = (a) => a.kind === "struct", ka = (a) => a.attr.kind === "struct[]", cs = (a) => Ba[a.kind.replace("[]", "")].type === "number", ls = (a) => Ba[a.kind.replace("[]", "")].type === "string", E = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, f = { type: "number", hasText: !1 }, Ba = {
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
function ds(a) {
  return ps(a, ((e) => !0), ((e) => !0));
}
const ps = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (wa(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (ka(o)) r.push(o);
    else if (Ia(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function us(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const gs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, ys = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), Ma = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Sa(a, e, s, t) {
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
      const u = p.ancestry.concat(p.schemaName), w = p.basePath;
      return [...d.structs.map(((k) => ({
        schemaName: k.attr.struct,
        basePath: `${w}["${k.name}"]`,
        ancestry: u
      }))), ...d.structArrays.map(((k) => ({ schemaName: k.attr.struct, basePath: `${w}["${k.name}"][*]`, ancestry: u })))].reverse();
    })(c, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const p = (function(d, { path: u, structName: w }) {
        return {
          category: "struct",
          objectSchema: us(d.scalars),
          name: w,
          scalarArrays: ys(d.scalarArrays, u),
          scalarsPath: d.scalars.length > 0 ? gs(d.scalars, u) : void 0
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
const hs = (a, e, s, t = Ma) => Sa(a.attr.struct, `${e}["${a.name}"]`, s, t), fs = (a, e, s, t = Ma) => Sa(a.attr.struct, `${e}["${a.name}"][*]`, s, t), vs = (a, e, s, t) => ((r) => wa(r.attr))(s) ? xs(a, s, t) : ka(s) ? Ts(a, s, t) : Ia(s) ? bs(a, e, s) : Ns(a, e, s), bs = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ns = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), xs = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: hs(e, "$", s)
}), Ts = (a, e, s) => ({
  structArrays: fs(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Is = (a, e) => e.map(((s) => ws(a, s))).flat(3), ws = (a, e) => [e.top ? K(e, a, e.top, "") : [], e.structs.map(((s) => K(e, a, s))), e.structArrays.map(((s) => K(e, a, s)))], K = (a, e, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, v, b) => v.pathSegments(i).map((({ value: c, segments: y }) => ((l, T, p, d, u) => {
    if (typeof p == "object" || p === null) return null;
    const w = d[d.length - 1];
    if (typeof w == "number") return null;
    const k = u[w];
    return k ? { rootName: l.rootName, rootType: l.rootCategory, structName: T, value: p, param: { name: w, attr: k } } : null;
  })(m, o, c, y, b))).filter(((c) => c !== null)))(a, t, e, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, v, b) => {
    const c = b.jsonPathJS.find(v);
    if (!Array.isArray(c)) return [];
    const y = b.schema.attr;
    return ls(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "string")).map(((u) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: u,
      structName: p,
      param: d
    }))))(o, c, i, b.schema) : cs(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "number")).map(((u) => ({ rootName: l.rootName, rootType: l.rootCategory, value: u, structName: p, param: d }))))(o, c, i, b.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, z = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: aa(a.scalarArrays, a.name, e), scalar: ks(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: aa(a.scalarArrays, a.name, e)
}, aa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), ks = (a, e, s) => ({ jsonPathJS: s(a), record: e }), Bs = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ms(e, s, t)
}), Ms = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? z(r.scalars, n) : void 0, o = r.structs.items.map(((v) => z(v, n))), i = r.structArrays.items.map(((v) => z(v, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(vs("args", a.command, t, e), s))), Ss = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, ds(r.params)]))))(a.schema.structs);
  return Cs(a.pluginName, a.schema.commands, s, e);
}, Cs = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, Bs(a, r, s, t)])), Es = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Is(m, o.extractors) }))(qa(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, dt = (a) => {
  const e = new Map(a);
  return new W(e);
}, pt = () => new W(/* @__PURE__ */ new Map()), ut = (a) => {
  const e = a.flatMap(((s) => Ss(s, ((t) => new Ja(t)))));
  return new W(new Map(e));
};
class W {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return os(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return ms(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return ns(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = Es(e, this._commandMap);
    return s.args.filter(As).map(((t) => ({
      code: _,
      value: t.value,
      paramIndex: 3,
      argName: t.param.name,
      argTitle: t.param.attr.text ?? t.param.name,
      commandName: s.commandName,
      pluginName: s.pluginName
    })));
  }
  extractCommandTexts(e) {
    return q(e, ((s) => this.extractArgs(s)));
  }
}
const As = (a) => typeof a.value == "string", gt = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), O = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), yt = (a) => [O(a, "faceName", "faces"), O(a, "characterName", "characters"), O(a, "battlerName", "sv_actors")], ht = (a, e, s, t, r, n) => [...Ra(s, t), ..._a(a, e), ...La(r, n)], ft = (a, e) => oa(Va(e), a), vt = (a, e, s) => {
  const t = Ua(e);
  return oa(s ? [...t, ...s] : t, a);
}, $s = (a, e, s, t) => {
  if (a.code === $ || a.code === A || a.code === R) return;
  const r = xa(a.code);
  return r ? r(s, e, t) : a.code === P ? Ds(a) : a.code === X || a.code === Y || a.code === H ? Ps(a) : a.code !== na ? a : void 0;
}, Ds = (a) => ({
  code: P,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ps = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Fs = (a) => ({ code: F, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), js = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: $,
    indent: a.header.indent,
    parameters: [e]
  };
  return [_s(a.header), s];
}, Rs = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, _s = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, j = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Fs, showMessage: js, showScrollingText: Rs };
    return t.map(((n, m) => n.code === _ ? n : $s(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === _ ? e.pluginCommand(t) : t.code === F ? e.scriptCommand(t) : Ue(t, s)));
}, Ls = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: j(s.list, e) })))
}), bt = (a, e) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: j(t.list, s) }))) };
}, Us = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: j(a.list, e)
}), Nt = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: j(a.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: e
}) }), xt = (a, e) => Ca(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), Vs = (a, e) => Ca(a, e), Ca = (a, e) => ({
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
}), Js = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: I(a.actors, ((s) => Fe(s, e))),
  armors: I(a.armors, ((s) => G(s, e))),
  classes: I(a.classes, ((s) => Re(s, e))),
  commonEvents: I(a.commonEvents, ((s) => Us(s, e))),
  enemies: I(a.enemies, ((s) => je(s, e))),
  items: I(a.items, ((s) => G(s, e))),
  mapInfos: a.mapInfos,
  skills: I(a.skills, ((s) => _e(s, e))),
  states: I(a.states, ((s) => Le(s, e))),
  system: { message: a.system.message, system: a.system.system ? Xe(a.system.system, e.replaceText) : null },
  troops: I(a.troops, ((s) => Ls(s, e))),
  weapons: I(a.weapons, ((s) => G(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: Vs(s.map, e)
  }))) }
}), I = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), Tt = (a, e, s, t) => {
  const r = oe(a, s), n = Ce(r, e.audioFiles, e.imageFiles, e.otherFiles), m = qs(n.nonTextNoteKeys, t);
  return Js(a, m);
}, qs = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Nt as $,
  re as A,
  ae as B,
  Wa as C,
  lt as D,
  q as E,
  se as F,
  oe as G,
  ee as H,
  ne as I,
  me as J,
  te as K,
  Xa as L,
  at as M,
  xe as N,
  Te as O,
  Ee as P,
  ot as Q,
  mt as R,
  Ws as S,
  U as T,
  ve as U,
  Qs as V,
  Fe as W,
  G as X,
  Ue as Y,
  Re as Z,
  Us as _,
  ht as a,
  st as a0,
  je as a1,
  j as a2,
  da as a3,
  Vs as a4,
  et as a5,
  xt as a6,
  Ke as a7,
  it as a8,
  pa as a9,
  Js as aa,
  Tt as ab,
  _e as ac,
  Le as ad,
  ct as ae,
  Xe as af,
  Pe as ag,
  Ls as ah,
  bt as ai,
  tt as aj,
  V as ak,
  ua as al,
  ga as am,
  Ce as b,
  Ie as c,
  la as d,
  vt as e,
  ft as f,
  be as g,
  fe as h,
  Zs as i,
  pt as j,
  dt as k,
  ut as l,
  ms as m,
  ns as n,
  yt as o,
  gt as p,
  he as q,
  ia as r,
  rt as s,
  nt as t,
  os as u,
  Za as v,
  Es as w,
  C as x,
  Qa as y,
  Ya as z
};
