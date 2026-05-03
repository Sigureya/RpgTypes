import { b as ta, q as ra, N as na, v as _, E as V, w as U, aS as A, P as R, Q as J, aP as F, aM as D, aO as Q, az as ma, ay as P, aR as oa, as as L } from "./eventCommandCodes.es.js";
import { aR as Aa, aN as Fa, b2 as $a, b3 as Da, aH as Pa, aX as S, aW as ja, aQ as ia, ax as Ra, at as La, au as _a, aY as Va, aZ as Ua } from "./namedItems.es.js";
import { JSONPathJS as Ja } from "jsonpath-js";
import { parseDeepRecord as qa } from "@sigureya/rmmz-plugin-schema";
import { m as ca } from "./mergeItemsSource.es.js";
import { m as Ga } from "./make.es.js";
import { t as Ka, F as za, E as Ha, B as Oa } from "./makeSystemEx.es.js";
import { l as Xa, a as Ya, i as Qa, f as Wa, c as Za, e as ae, d as ee, j as se, b as te } from "./system.es.js";
const re = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), ne = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), C = (a, e) => ({ note: me(a), main: e.map(((s) => ({
  key: s,
  value: a[s],
  id: a.id
}))) }), me = (a) => Aa(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), oe = (a) => C(a, ["name", "nickname", "profile"]), ie = (a) => C(a, ["name"]), ce = (a) => C(a, ["name"]), le = (a) => C(a, ["name", "description", "message1", "message2"]), de = (a) => C(a, ["name", "description"]), pe = (a) => C(a, ["name", "description"]), ue = (a) => C(a, ["name", "description"]), ge = (a) => C(a, ["name", "message1", "message2", "message3", "message4"]), ye = (a) => ({
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
}), he = (a, e) => {
  const s = x(a.actors, oe), t = Ne(a.armors), r = x(a.classes, ce), n = x(a.enemies, ie), m = x(a.items, de), o = x(a.mapInfos, ((p) => p)), i = x(a.skills, le), l = x(a.states, ge), b = x(a.weapons, pe), c = xe(a.commonEvents, e), h = Te(a.troops, e), d = ke(a.mapFiles, e), T = fe(a.system), u = ve([s, t, r, n, m, o, i, l, b, h, c]).concat(be(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: c.data, troops: h.data.flat() }, mapFiles: d, system: T, mainData: {
    actors: s.data,
    armors: t.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: l.data,
    weapons: b.data
  } }, errors: u };
}, fe = (a) => ({ message: a.message, system: a.system ? ye(a.system) : null }), x = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), ve = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), be = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: Xa,
  error: e.message
}] : []], Ne = (a) => x(a, ue), xe = (a, e) => x(a, ((s) => e.extractCommonEventText(s))), Te = (a, e) => x(a, ((s) => e.extractBattleText(s))), ke = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, la = (a, e, s) => a.filter(((t) => t.code === ta || t.code === ra || t.code === na)).map(((t) => we(t, e, s))), Ie = { [na]: "weapon", [ta]: "armor", [ra]: "item" }, we = (a, e, s) => {
  const t = Fa(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === $a ? e.gain : a.parameters[1] === Da ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: Ie[a.code], dataId: Pa(a), code: a.code, commandNameMZ: s(a.code), operation: r, ...n, ...t };
}, da = (a) => !!a, ht = (a, e, s) => ({
  data: a,
  eventId: e,
  pageIndex: s
}), Me = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), q = (a, e) => a.pages.map(((s, t) => e(s, t, a))), Be = (a, e) => a.events.filter(da).map(((s) => q(s, e))), W = (a, e) => a.events.filter(da).flatMap(((s) => q(s, e))), Se = (a, e) => a.map(((s) => q(s, e))), Ce = (a, e) => a.flatMap(((s) => q(s, e))), Ee = (a, e) => a.map(((s) => e(s, 0, s))), ft = (a) => Be(a, Me).flat(2), vt = (a, e, s, t) => {
  const r = Ae(a), n = e.map(Fe), m = $e(s), o = De(t);
  return new Set([r, m, o, n].flat(4));
}, Ae = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), Fe = (a) => W(a, Z), $e = (a) => Ee(a, Z), De = (a) => Se(a, Z), Z = ({ list: a }) => a.filter(Pe).map(((e) => e.parameters[1])), Pe = (a) => a.code === _ || a.code === V || a.code === U, pa = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, ua = (a, e) => ({ ...a, pages: a.pages.map(((s) => pa(s, e))) }), bt = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? ua(s, e) : null))
}), Nt = (a, e) => a.map(((s) => pa(s, e))), xt = (a, e) => a.map(((s) => ua(s, e))), Tt = (a, e, s) => W(a.map, ((t, r, n) => ({
  ...je(t),
  commands: la(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), je = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, kt = (a, e, s) => Ce(a, ((t, r, n) => ({
  commands: la(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Re = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Le = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, G = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, ga = (a, { audioFiles: e, imageFiles: s, otherFiles: t }) => {
  const r = a.flatMap(((m) => m.notes.map(((o) => ({
    ...o,
    soruce: m.source
  }))))), n = _e(r);
  return Array.from(n.entries()).map((([m, o]) => {
    const i = Ue(o, e, s, t);
    return { key: m, kinds: Ve(i), values: o.map(((l) => ({
      value: l.value,
      dataId: l.dataId,
      soruce: l.soruce,
      name: l.name
    }))) };
  }));
}, _e = (a) => a.reduce(((e, s) => (e.has(s.key) || e.set(s.key, a.filter(((t) => t.key === s.key))), e)), /* @__PURE__ */ new Map()), Ve = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), Ue = (a, e, s, t) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && Re(n.value),
  isNumber: r.isNumber && Le(n.value),
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
}), Je = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Ge), ...a.map.events.map(qe).flat()]
}), qe = (a) => a.noteItems.map(((e) => ({ dataId: a.eventId, key: e.key, value: e.value, name: a.name }))), Ge = (a) => ({ dataId: 0, key: a.key, value: a.value, name: "" }), Ke = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), M = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return { main: s.main, note: t };
})).filter(ze), ze = (a) => a.note.length > 0 || a.main.length > 0, He = (a, e) => {
  const s = Ye(a.value.mainData, e), t = Qe(a.value.mapFiles.validMaps, e);
  return {
    nonTextNoteKeys: s.nonTextNoteKeys,
    dataNoteSummary: s.noteSummary,
    mapNoteSummary: t.noteSummary,
    data: { errors: a.errors, value: { mainData: s.mainData, mapFiles: {
      info: a.value.mapFiles.info,
      invalidMaps: a.value.mapFiles.invalidMaps,
      validMaps: t.validMaps
    }, eventData: a.value.eventData, system: a.value.system } }
  };
}, ya = (a, e) => {
  const s = (t) => e.has(t.key);
  return {
    actors: M(a.actors, s),
    enemies: M(a.enemies, s),
    weapons: M(a.weapons, s),
    armors: M(a.armors, s),
    skills: M(a.skills, s),
    states: M(a.states, s),
    items: M(a.items, s),
    classes: M(a.classes, s)
  };
}, It = (a, e) => {
  const s = va(a, e), t = G(s);
  return ha(a, t);
}, Oe = (a, e) => {
  const s = fa(a, e);
  return G(s);
}, wt = (a, e) => {
  const s = Oe(a, e);
  return ya(a, s);
}, ha = (a, e) => a.map(((s) => {
  return {
    filename: s.filename,
    editingName: s.editingName,
    map: (t = s.map, r = (n) => e.has(n.key), {
      displayedName: t.displayedName,
      note: t.note,
      noteItems: t.noteItems.filter(r),
      events: t.events.map(((n) => Ke(n, r)))
    })
  };
  var t, r;
})), fa = (a, e) => {
  const s = Xe(a);
  return ga(s, e);
}, Xe = (a) => [B(Ya, a.actors), B(Qa, a.skills), B(Wa, a.items), B(Za, a.weapons), B(ae, a.armors), B(ee, a.classes), B(se, a.states), B(te, a.enemies)], B = (a, e) => ({
  source: a,
  notes: e.flatMap(((s) => s.note.map(((t) => ({ key: t.key, value: t.value, dataId: t.id, name: "" })))))
}), va = (a, e) => {
  const s = a.map(Je);
  return ga(s, e);
}, Ye = (a, e) => {
  const s = fa(a, e), t = G(s);
  return {
    noteSummary: s,
    nonTextNoteKeys: t,
    mainData: ya(a, t)
  };
}, Qe = (a, e) => {
  const s = va(a, e), t = G(s);
  return { noteSummary: s, validMaps: ha(a, t) };
}, We = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, y = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, f = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, Ze = (a, e) => {
  const s = (o) => e.replaceText(o), t = S(a.note, e), r = y(a.name, s), n = y(a.nickname, s), m = y(a.profile, s);
  return { ...a, name: r, nickname: n, profile: m, note: t };
}, as = (a, e) => {
  const s = S(a.note, e), t = f(a.name, e);
  return { ...a, name: t, note: s };
}, es = (a, e) => {
  const s = S(a.note, e), t = f(a.name, e);
  return { ...a, name: t, note: s };
}, ss = (a, e) => {
  const s = S(a.note, e), t = f(a.name, e), r = f(a.description, e), n = f(a.message1, e), m = f(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, H = (a, e) => {
  const s = S(a.note, e), t = f(a.name, e), r = f(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, ts = (a, e) => {
  const s = S(a.note, e), t = f(a.name, e), r = f(a.message1, e), n = f(a.message2, e), m = f(a.message3, e), o = f(a.message4, e);
  return {
    ...a,
    name: t,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: s
  };
}, rs = (a, e) => {
  switch (a.code) {
    case Q:
      return ms(a, e);
    case D:
      return is(a, e);
    case F:
    case J:
    case R:
    case A:
      return ns(a, e);
    case _:
    case U:
    case V:
      return os(a, e);
    default:
      return a;
  }
}, ns = (a, e) => {
  const s = y(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, ms = (a, e) => {
  const s = a.parameters[4] ? y(a.parameters[4], e) : "";
  return Ga({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, os = (a, e) => {
  const s = y(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, is = (a, e) => {
  const s = a.parameters[0].map(((t) => y(t, e)));
  return {
    code: D,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Mt = (a, e, s = `
`) => cs(a, ((t) => e.get(t)), s), cs = (a, e, s = `
`) => ja(a.note, ((t) => y(t.value, e)), s), Bt = (a, e) => ba(a, ((s) => We(s, e))), ba = (a, e) => ({
  params: ps(a.params, ((s) => y(s, e))),
  messages: us(a.messages, ((s) => y(s, e))),
  basic: ls(a.basic, ((s) => y(s, e))),
  commands: ds(a.commands, ((s) => y(s, e)))
}), ls = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], ds = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], ps = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], us = (a, e) => ({
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
}), gs = (a, e) => ({
  ...a,
  gameTitle: y(a.gameTitle, e),
  currencyUnit: y(a.currencyUnit, e),
  elements: $(a.elements, e),
  skillTypes: $(a.skillTypes, e),
  weaponTypes: $(a.weaponTypes, e),
  armorTypes: $(a.armorTypes, e),
  equipTypes: $(a.equipTypes, e),
  terms: ba(a.terms, e)
}), $ = (a, e) => a.map(((s) => y(s, e))), Na = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
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
}, ys = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === J), ((m) => m.code === R)))(a, e);
  return hs(t) ? new aa(R, t, s) : new xa(t, s);
}, hs = (a) => a.parameters[0] === "選択肢ヘルプ", fs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === Q), ((m) => m.code === F)))(a, e);
  return new aa(F, t, s);
}, vs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === P), ((m) => m.code === ma)))(a, e);
  return new xa(t, s);
}, bs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => K(r, n, ((m) => m.code === oa), ((m) => m.code === A)))(a, e);
  return new aa(A, t, s);
}, Ns = {
  [Q]: (a, e, s) => s.showMessage(fs(a, e), e, a),
  [P]: (a, e, s) => s.script(vs(a, e), e, a),
  [J]: (a, e, s) => s.comment(ys(a, e), e, a),
  [oa]: (a, e, s) => s.showScrollingText(bs(a, e), e, a)
}, Ta = (a) => Ns[a], St = (a) => ka(a, (() => [])), z = (a, e) => ka(a, e), ka = (a, e) => a.flatMap(((s, t) => xs(s, t, a, e))).filter(((s) => s !== null)), xs = (a, e, s, t) => {
  if (a.code === L) return t(a);
  if (a.code === D) return ne(a);
  const r = Ta(a.code);
  if (r) {
    const n = r(s, e, Ts);
    if (n !== void 0) return [n];
  }
  return a.code === U || a.code === _ || a.code === V ? re(a) : null;
}, Ts = { comment: (a) => ({
  code: J,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: F, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, ks = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: z(a.list, e)
}), Is = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: z(s.list, e) }))), ws = (a, e = () => []) => ({
  note: a.note,
  noteItems: ia(a.note),
  displayedName: a.displayName,
  events: Ms(a, e)
}), Ms = (a, e) => W(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: z(s.list, e),
  note: r.note,
  noteItems: ia(r.note),
  name: r.name
}))), Ia = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), wa = (a) => a.kind === "struct", Ma = (a) => a.attr.kind === "struct[]", Bs = (a) => Ba[a.kind.replace("[]", "")].type === "number", Ss = (a) => Ba[a.kind.replace("[]", "")].type === "string", E = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, v = { type: "number", hasText: !1 }, Ba = {
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
  "actor[]": v,
  "enemy[]": v,
  "class[]": v,
  "skill[]": v,
  "state[]": v,
  "item[]": v,
  "weapon[]": v,
  "common_event[]": v,
  "troop[]": v,
  "armor[]": v,
  "switch[]": v,
  "variable[]": v,
  "number[]": v
};
function Cs(a) {
  return Es(a, ((e) => !0), ((e) => !0));
}
const Es = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (wa(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (Ma(o)) r.push(o);
    else if (Ia(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function As(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const Fs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, $s = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), Sa = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ca(a, e, s, t) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * s.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, l, b) {
    if (i.frames.length === 0) return i;
    const c = i.frames[i.frames.length - 1], h = i.frames.slice(0, -1);
    if (c.ancestry.includes(c.schemaName)) return { frames: h, items: i.items, errs: [...i.errs, { code: b.cyclicStruct, path: c.basePath }] };
    const d = l.get(c.schemaName);
    if (!d) return {
      frames: h,
      items: i.items,
      errs: [...i.errs, { code: b.undefinedStruct, path: c.basePath }]
    };
    const T = (function(u, p) {
      const g = u.ancestry.concat(u.schemaName), I = u.basePath;
      return [...p.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${I}["${w.name}"]`,
        ancestry: g
      }))), ...p.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${I}["${w.name}"][*]`, ancestry: g })))].reverse();
    })(c, d);
    if (d.scalars.length > 0 || d.scalarArrays.length > 0) {
      const u = (function(p, { path: g, structName: I }) {
        return {
          category: "struct",
          objectSchema: As(p.scalars),
          name: I,
          scalarArrays: $s(p.scalarArrays, g),
          scalarsPath: p.scalars.length > 0 ? Fs(p.scalars, g) : void 0
        };
      })(d, { path: c.basePath, structName: c.schemaName });
      return h.push(...T), {
        frames: h,
        items: [...i.items, u],
        errs: i.errs
      };
    }
    return h.push(...T), { frames: h, items: i.items, errs: i.errs };
  })(o, s, t)), r);
  return { items: m.items, errors: m.errs };
}
const Ds = (a, e, s, t = Sa) => Ca(a.attr.struct, `${e}["${a.name}"]`, s, t), Ps = (a, e, s, t = Sa) => Ca(a.attr.struct, `${e}["${a.name}"][*]`, s, t), js = (a, e, s, t) => ((r) => wa(r.attr))(s) ? _s(a, s, t) : Ma(s) ? Vs(a, s, t) : Ia(s) ? Rs(a, e, s) : Ls(a, e, s), Rs = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ls = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), _s = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ds(e, "$", s)
}), Vs = (a, e, s) => ({
  structArrays: Ps(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Us = (a, e) => e.map(((s) => Js(a, s))).flat(3), Js = (a, e) => [e.top ? O(e, a, e.top, "") : [], e.structs.map(((s) => O(e, a, s))), e.structArrays.map(((s) => O(e, a, s)))], O = (a, e, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, l, b) => l.pathSegments(i).map((({ value: c, segments: h }) => ((d, T, u, p, g) => {
    if (typeof u == "object" || u === null) return null;
    const I = p[p.length - 1];
    if (typeof I == "number") return null;
    const w = g[I];
    return w ? { rootName: d.rootName, rootType: d.rootCategory, structName: T, value: u, param: { name: I, attr: w } } : null;
  })(m, o, c, h, b))).filter(((c) => c !== null)))(a, t, e, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, l, b) => {
    const c = b.jsonPathJS.find(l);
    if (!Array.isArray(c)) return [];
    const h = b.schema.attr;
    return Ss(h) ? ((d, T, u, p) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: g,
      structName: u,
      param: p
    }))))(o, c, i, b.schema) : Bs(h) ? ((d, T, u, p) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: d.rootName, rootType: d.rootCategory, value: g, structName: u, param: p }))))(o, c, i, b.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, X = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: sa(a.scalarArrays, a.name, e), scalar: qs(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: sa(a.scalarArrays, a.name, e)
}, sa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), qs = (a, e, s) => ({ jsonPathJS: s(a), record: e }), Gs = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ks(e, s, t)
}), Ks = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? X(r.scalars, n) : void 0, o = r.structs.items.map(((l) => X(l, n))), i = r.structArrays.items.map(((l) => X(l, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(js("args", a.command, t, e), s))), zs = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, Cs(r.params)]))))(a.schema.structs);
  return Hs(a.pluginName, a.schema.commands, s, e);
}, Hs = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, Gs(a, r, s, t)])), Os = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Us(m, o.extractors) }))(qa(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, Ct = (a) => {
  const e = new Map(a);
  return new ea(e);
}, Et = () => new ea(/* @__PURE__ */ new Map()), At = (a) => {
  const e = a.flatMap(((s) => zs(s, ((t) => new Ja(t)))));
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
    return ws(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return Is(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return ks(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = Os(e, this._commandMap);
    return s.args.filter(Xs).map(((t) => ({
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
const Xs = (a) => typeof a.value == "string", Ft = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), Y = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), $t = (a) => [Y(a, "faceName", "faces"), Y(a, "characterName", "characters"), Y(a, "battlerName", "sv_actors")], Dt = (a, e, s, t, r, n) => [...Ra(s, t), ...La(a, e), ..._a(r, n)], Pt = (a, e) => ca(Ua(e), a), jt = (a, e, s) => {
  const t = Va(e);
  return ca(s ? [...t, ...s] : t, a);
}, Ys = (a, e, s, t) => {
  if (a.code === F || a.code === A || a.code === R) return;
  const r = Ta(a.code);
  return r ? r(s, e, t) : a.code === D ? Qs(a) : a.code === _ || a.code === U || a.code === V ? Ws(a) : a.code !== ma ? a : void 0;
}, Qs = (a) => ({
  code: D,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ws = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Zs = (a) => ({ code: P, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), at = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: F,
    indent: a.header.indent,
    parameters: [e]
  };
  return [st(a.header), s];
}, et = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, st = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, j = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Zs, showMessage: at, showScrollingText: et };
    return t.map(((n, m) => n.code === L ? n : Ys(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === L ? e.pluginCommand(t) : t.code === P ? e.scriptCommand(t) : rs(t, s)));
}, tt = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: j(s.list, e) })))
}), Rt = (a, e) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: j(t.list, s) }))) };
}, rt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: j(a.list, e)
}), Lt = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: j(a.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: e
}) }), _t = (a, e) => Ea(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), nt = (a, e) => Ea(a, e), Ea = (a, e) => ({
  note: S(a.note, e),
  displayName: f(a.displayName, e),
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
}), mt = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((s) => Ze(s, e))),
  armors: k(a.armors, ((s) => H(s, e))),
  classes: k(a.classes, ((s) => es(s, e))),
  commonEvents: k(a.commonEvents, ((s) => rt(s, e))),
  enemies: k(a.enemies, ((s) => as(s, e))),
  items: k(a.items, ((s) => H(s, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((s) => ss(s, e))),
  states: k(a.states, ((s) => ts(s, e))),
  system: { message: a.system.message, system: a.system.system ? gs(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((s) => tt(s, e))),
  weapons: k(a.weapons, ((s) => H(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: nt(s.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), Vt = (a, e, s, t) => {
  const r = he(a, s), n = He(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = ot(n.nonTextNoteKeys, t);
  return mt(a, m);
}, ot = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Lt as $,
  ue as A,
  ce as B,
  ie as C,
  St as D,
  z as E,
  de as F,
  he as G,
  le as H,
  ge as I,
  ye as J,
  pe as K,
  ne as L,
  ft as M,
  Re as N,
  Le as O,
  Oe as P,
  wt as Q,
  It as R,
  Ee as S,
  q as T,
  Be as U,
  Se as V,
  Ze as W,
  H as X,
  rs as Y,
  es as Z,
  rt as _,
  Dt as a,
  Nt as a0,
  as as a1,
  j as a2,
  pa as a3,
  nt as a4,
  bt as a5,
  _t as a6,
  cs as a7,
  Mt as a8,
  ua as a9,
  mt as aa,
  Vt as ab,
  ss as ac,
  ts as ad,
  Bt as ae,
  gs as af,
  We as ag,
  tt as ah,
  Rt as ai,
  xt as aj,
  G as ak,
  ga as al,
  va as am,
  He as b,
  W as c,
  jt as d,
  Pt as e,
  Ce as f,
  Me as g,
  ht as h,
  Et as i,
  Ct as j,
  At as k,
  vt as l,
  Is as m,
  ks as n,
  $t as o,
  Ft as p,
  we as q,
  la as r,
  Tt as s,
  kt as t,
  ws as u,
  me as v,
  Os as w,
  C as x,
  oe as y,
  re as z
};
