import { t as Ma, F as Aa, E as Ea, B as Ca } from "./makeSystem.es.js";
import { aU as $a, aO as Da, b5 as Pa, b6 as Fa, aI as ja, aZ as S, aP as Ra, aY as _a, aT as W, ax as La, at as Ua, au as Va, a_ as Ja, a$ as qa } from "./namedItems.es.js";
import { F as Ga } from "./system.es.js";
import { b as aa, q as ea, N as ta, E as K, w as O, v as H, aS as E, P as j, Q as _, aP as C, aM as D, aO as Y, az as sa, ay as P, aR as ra, as as R } from "./eventCommandCodes.es.js";
import { JSONPathJS as za } from "jsonpath-js";
import { parseDeepRecord as Ka } from "@sigureya/rmmz-plugin-schema";
import { m as na } from "./mergeItemsSource.es.js";
const Oa = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Ha = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), M = (a, e) => ({ note: Ya(a), main: e.map(((t) => ({
  key: t,
  value: a[t],
  id: a.id
}))) }), Ya = (a) => $a(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Xa = (a) => M(a, ["name", "nickname", "profile"]), Za = (a) => M(a, ["name"]), Qa = (a) => M(a, ["name"]), Wa = (a) => M(a, ["name", "description", "message1", "message2"]), ae = (a) => M(a, ["name", "description"]), ee = (a) => M(a, ["name", "description"]), te = (a) => M(a, ["name", "description"]), se = (a) => M(a, ["name", "message1", "message2", "message3", "message4"]), re = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Ca(a.terms.basic),
    commands: Ea(a.terms.commands),
    messages: Aa(a.terms.messages),
    params: Ma(a.terms.params)
  }
}), jt = (a, e) => {
  const t = N(a.actors, Xa), s = ie(a.armors), r = N(a.classes, Qa), n = N(a.enemies, Za), m = N(a.items, ae), o = N(a.mapInfos, ((d) => d)), i = N(a.skills, Wa), v = N(a.states, se), b = N(a.weapons, ee), c = ce(a.commonEvents, e), y = le(a.troops, e), l = de(a.mapFiles, e), T = ne(a.system), p = me([t, s, r, n, m, o, i, v, b, y, c]).concat(oe(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: c.data, troops: y.data.flat() }, mapFiles: l, system: T, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: v.data,
    weapons: b.data
  } }, errors: p };
}, ne = (a) => ({ message: a.message, system: a.system ? re(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), me = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), oe = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: Ga,
  error: e.message
}] : []], ie = (a) => N(a, te), ce = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), le = (a, e) => N(a, ((t) => e.extractBattleText(t))), de = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ma = (a, e, t) => a.filter(((s) => s.code === aa || s.code === ea || s.code === ta)).map(((s) => ue(s, e, t))), pe = { [ta]: "weapon", [aa]: "armor", [ea]: "item" }, ue = (a, e, t) => {
  const s = Da(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === Pa ? e.gain : a.parameters[1] === Fa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: pe[a.code], dataId: ja(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, oa = (a) => !!a, Rt = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), ge = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), L = (a, e) => a.pages.map(((t, s) => e(t, s, a))), ye = (a, e) => a.events.filter(oa).map(((t) => L(t, e))), ia = (a, e) => a.events.filter(oa).flatMap(((t) => L(t, e))), _t = (a, e) => a.map(((t) => L(t, e))), he = (a, e) => a.flatMap(((t) => L(t, e))), Lt = (a, e) => a.map(((t) => e(t, 0, t))), Ut = (a) => ye(a, ge).flat(2), ca = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, la = (a, e) => ({ ...a, pages: a.pages.map(((t) => ca(t, e))) }), Vt = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? la(t, e) : null))
}), Jt = (a, e) => a.map(((t) => ca(t, e))), qt = (a, e) => a.map(((t) => la(t, e))), Gt = (a, e, t) => ia(a.map, ((s, r, n) => ({
  ...fe(s),
  commands: ma(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), fe = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, zt = (a, e, t) => he(a, ((s, r, n) => ({
  commands: ma(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ve = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, be = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, U = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, da = (a, e, t, s, r = xe(a)) => Array.from(r.entries()).map((([n, m]) => {
  const o = Te(m, e, t, s);
  return {
    key: n,
    kinds: Ne(o),
    values: m.map(((i) => i.value))
  };
})), xe = (a) => a.reduce(((e, t) => (e.has(t.key) || e.set(t.key, a.filter(((s) => s.key === t.key))), e)), /* @__PURE__ */ new Map()), Ne = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), Te = (a, e, t, s) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ve(n.value),
  isNumber: r.isNumber && be(n.value),
  isBgm: r.isBgm && e.bgm.has(n.value),
  isBgs: r.isBgs && e.bgs.has(n.value),
  isMe: r.isMe && e.me.has(n.value),
  isSe: r.isSe && e.se.has(n.value),
  isPicture: r.isPicture && t.picutures.has(n.value),
  isCharacter: r.isCharacter && t.characters.has(n.value),
  isFaceset: r.isFaceset && t.faces.has(n.value),
  isBattler: r.isBattler && t.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && t.svActors.has(n.value),
  isEnemy: r.isEnemy && t.enemies.has(n.value),
  isTileset: r.isTileset && t.tilesets.has(n.value),
  isMovie: r.isMovie && s.movies.has(n.value)
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
}), Ie = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], we = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), k = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s };
})).filter(ke), ke = (a) => a.note.length > 0 || a.main.length > 0, Kt = (a, e, t, s) => {
  const r = Me(a.value.mainData, e, t, s), n = Ae(a.value.mapFiles.validMaps, e, t, s);
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
}, pa = (a, e, t, s) => {
  const r = (n = (m) => m.map, a.map(((m) => {
    const o = n(m);
    return Ie(o);
  })).flat(4));
  var n;
  return da(r, e, t, s);
}, Ot = (a, e, t, s) => {
  const r = pa(a, e, t, s), n = U(r);
  return ga(a, n);
}, Be = (a, e, t, s) => {
  const r = ya(a, e, t, s);
  return U(r);
}, Ht = (a, e, t, s) => {
  const r = Be(a, e, t, s);
  return ua(a, r);
}, ua = (a, e) => {
  const t = (s) => e.has(s.key);
  return {
    actors: k(a.actors, t),
    enemies: k(a.enemies, t),
    weapons: k(a.weapons, t),
    armors: k(a.armors, t),
    skills: k(a.skills, t),
    states: k(a.states, t),
    items: k(a.items, t),
    classes: k(a.classes, t)
  };
}, ga = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), { displayedName: s.displayedName, note: s.note, noteItems: s.noteItems.filter(r), events: s.events.map(((n) => we(n, r))) }) };
  var s, r;
})), ya = (a, e, t, s) => {
  const r = Se(a);
  return da(r, e, t, s);
}, Se = (a) => [B(a.actors), B(a.skills), B(a.items), B(a.weapons), B(a.armors), B(a.classes), B(a.states), B(a.enemies)].flat(3), B = (a) => a.map(((e) => e.note)), Me = (a, e, t, s) => {
  const r = ya(a, e, t, s), n = U(r);
  return { noteSummary: r, nonTextNoteKeys: n, mainData: ua(a, n) };
}, Ae = (a, e, t, s) => {
  const r = pa(a, e, t, s), n = U(r);
  return { noteSummary: r, validMaps: ga(a, n) };
}, Ee = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, g = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Yt = (a, e) => {
  const t = (o) => e.replaceText(o), s = S(a.note, e), r = g(a.name, t), n = g(a.nickname, t), m = g(a.profile, t);
  return { ...a, name: r, nickname: n, profile: m, note: s };
}, Xt = (a, e) => {
  const t = S(a.note, e), s = h(a.name, e);
  return { ...a, name: s, note: t };
}, Zt = (a, e) => {
  const t = S(a.note, e), s = h(a.name, e);
  return { ...a, name: s, note: t };
}, Qt = (a, e) => {
  const t = S(a.note, e), s = h(a.name, e), r = h(a.description, e), n = h(a.message1, e), m = h(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, Wt = (a, e) => {
  const t = S(a.note, e), s = h(a.name, e), r = h(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, as = (a, e) => {
  const t = S(a.note, e), s = h(a.name, e), r = h(a.message1, e), n = h(a.message2, e), m = h(a.message3, e), o = h(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Ce = (a, e) => {
  switch (a.code) {
    case Y:
      return De(a, e);
    case D:
      return Fe(a, e);
    case C:
    case _:
    case j:
    case E:
      return $e(a, e);
    case H:
    case O:
    case K:
      return Pe(a, e);
    default:
      return a;
  }
}, $e = (a, e) => {
  const t = g(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, De = (a, e) => {
  const t = a.parameters[4] ? g(a.parameters[4], e) : "";
  return Ra({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Pe = (a, e) => {
  const t = g(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Fe = (a, e) => {
  const t = a.parameters[0].map(((s) => g(s, e)));
  return {
    code: D,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, es = (a, e, t = `
`) => je(a, ((s) => e.get(s)), t), je = (a, e, t = `
`) => _a(a.note, ((s) => g(s.value, e)), t), ts = (a, e) => ha(a, ((t) => Ee(t, e))), ha = (a, e) => ({
  params: Le(a.params, ((t) => g(t, e))),
  messages: Ue(a.messages, ((t) => g(t, e))),
  basic: Re(a.basic, ((t) => g(t, e))),
  commands: _e(a.commands, ((t) => g(t, e)))
}), Re = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], _e = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Le = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ue = (a, e) => ({
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
}), ss = (a, e) => ({
  ...a,
  gameTitle: g(a.gameTitle, e),
  currencyUnit: g(a.currencyUnit, e),
  elements: $(a.elements, e),
  skillTypes: $(a.skillTypes, e),
  weaponTypes: $(a.weaponTypes, e),
  armorTypes: $(a.armorTypes, e),
  equipTypes: $(a.equipTypes, e),
  terms: ha(a.terms, e)
}), $ = (a, e) => a.map(((t) => g(t, e))), fa = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class va {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return fa(this.joinCommandBodies());
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
class X {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return fa(this.bodies);
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
const V = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Ve = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === _), ((m) => m.code === j)))(a, e);
  return Je(s) ? new X(j, s, t) : new va(s, t);
}, Je = (a) => a.parameters[0] === "選択肢ヘルプ", qe = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === Y), ((m) => m.code === C)))(a, e);
  return new X(C, s, t);
}, Ge = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === P), ((m) => m.code === sa)))(a, e);
  return new va(s, t);
}, ze = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === ra), ((m) => m.code === E)))(a, e);
  return new X(E, s, t);
}, Ke = {
  [Y]: (a, e, t) => t.showMessage(qe(a, e), e, a),
  [P]: (a, e, t) => t.script(Ge(a, e), e, a),
  [_]: (a, e, t) => t.comment(Ve(a, e), e, a),
  [ra]: (a, e, t) => t.showScrollingText(ze(a, e), e, a)
}, ba = (a) => Ke[a], rs = (a) => xa(a, (() => [])), J = (a, e) => xa(a, e), xa = (a, e) => a.flatMap(((t, s) => Oe(t, s, a, e))).filter(((t) => t !== null)), Oe = (a, e, t, s) => {
  if (a.code === R) return s(a);
  if (a.code === D) return Ha(a);
  const r = ba(a.code);
  if (r) {
    const n = r(t, e, He);
    if (n !== void 0) return [n];
  }
  return a.code === O || a.code === H || a.code === K ? Oa(a) : null;
}, He = { comment: (a) => ({
  code: _,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: C, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: E, paramIndex: 0, value: e.getBodyText() }))(a) }, Ye = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: J(a.list, e)
}), Xe = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: J(t.list, e) }))), Ze = (a, e = () => []) => ({
  note: a.note,
  noteItems: W(a.note),
  displayedName: a.displayName,
  events: Qe(a, e)
}), Qe = (a, e) => ia(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: J(t.list, e),
  note: r.note,
  noteItems: W(r.note),
  name: r.name
}))), Na = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Ta = (a) => a.kind === "struct", Ia = (a) => a.attr.kind === "struct[]", We = (a) => wa[a.kind.replace("[]", "")].type === "number", at = (a) => wa[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, f = { type: "number", hasText: !1 }, wa = {
  string: A,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: x,
  actor: x,
  class: x,
  enemy: x,
  skill: x,
  state: x,
  item: x,
  weapon: x,
  common_event: x,
  switch: x,
  variable: x,
  troop: x,
  multiline_string: A,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": A,
  "string[]": A,
  combo: A,
  select: A,
  any: A,
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
function et(a) {
  return tt(a, ((e) => !0), ((e) => !0));
}
const tt = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Ta(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Ia(o)) r.push(o);
    else if (Na(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function st(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const rt = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, nt = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ka = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ba(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
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
      const u = p.ancestry.concat(p.schemaName), I = p.basePath;
      return [...d.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${I}["${w.name}"]`,
        ancestry: u
      }))), ...d.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${I}["${w.name}"][*]`, ancestry: u })))].reverse();
    })(c, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const p = (function(d, { path: u, structName: I }) {
        return {
          category: "struct",
          objectSchema: st(d.scalars),
          name: I,
          scalarArrays: nt(d.scalarArrays, u),
          scalarsPath: d.scalars.length > 0 ? rt(d.scalars, u) : void 0
        };
      })(l, { path: c.basePath, structName: c.schemaName });
      return y.push(...T), {
        frames: y,
        items: [...i.items, p],
        errs: i.errs
      };
    }
    return y.push(...T), { frames: y, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const mt = (a, e, t, s = ka) => Ba(a.attr.struct, `${e}["${a.name}"]`, t, s), ot = (a, e, t, s = ka) => Ba(a.attr.struct, `${e}["${a.name}"][*]`, t, s), it = (a, e, t, s) => ((r) => Ta(r.attr))(t) ? dt(a, t, s) : Ia(t) ? pt(a, t, s) : Na(t) ? ct(a, e, t) : lt(a, e, t), ct = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), lt = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), dt = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: mt(e, "$", t)
}), pt = (a, e, t) => ({
  structArrays: ot(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), ut = (a, e) => e.map(((t) => gt(a, t))).flat(3), gt = (a, e) => [e.top ? q(e, a, e.top, "") : [], e.structs.map(((t) => q(e, a, t))), e.structArrays.map(((t) => q(e, a, t)))], q = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, v, b) => v.pathSegments(i).map((({ value: c, segments: y }) => ((l, T, p, d, u) => {
    if (typeof p == "object" || p === null) return null;
    const I = d[d.length - 1];
    if (typeof I == "number") return null;
    const w = u[I];
    return w ? { rootName: l.rootName, rootType: l.rootCategory, structName: T, value: p, param: { name: I, attr: w } } : null;
  })(m, o, c, y, b))).filter(((c) => c !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, v, b) => {
    const c = b.jsonPathJS.find(v);
    if (!Array.isArray(c)) return [];
    const y = b.schema.attr;
    return at(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "string")).map(((u) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: u,
      structName: p,
      param: d
    }))))(o, c, i, b.schema) : We(y) ? ((l, T, p, d) => T.filter(((u) => typeof u == "number")).map(((u) => ({ rootName: l.rootName, rootType: l.rootCategory, value: u, structName: p, param: d }))))(o, c, i, b.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, G = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: Q(a.scalarArrays, a.name, e), scalar: yt(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: Q(a.scalarArrays, a.name, e)
}, Q = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), yt = (a, e, t) => ({ jsonPathJS: t(a), record: e }), ht = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: ft(e, t, s)
}), ft = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? G(r.scalars, n) : void 0, o = r.structs.items.map(((v) => G(v, n))), i = r.structArrays.items.map(((v) => G(v, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(it("args", a.command, s, e), t))), vt = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, et(r.params)]))))(a.schema.structs);
  return bt(a.pluginName, a.schema.commands, t, e);
}, bt = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, ht(a, r, t, s)])), xt = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: ut(m, o.extractors) }))(Ka(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, ns = (a) => {
  const e = new Map(a);
  return new Z(e);
}, ms = () => new Z(/* @__PURE__ */ new Map()), os = (a) => {
  const e = a.flatMap(((t) => vt(t, ((s) => new za(s)))));
  return new Z(new Map(e));
};
class Z {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return Ze(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return Xe(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return Ye(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = xt(e, this._commandMap);
    return t.args.filter(Nt).map(((s) => ({
      code: R,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return J(e, ((t) => this.extractArgs(t)));
  }
}
const Nt = (a) => typeof a.value == "string", is = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), z = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), cs = (a) => [z(a, "faceName", "faces"), z(a, "characterName", "characters"), z(a, "battlerName", "sv_actors")], ls = (a, e, t, s, r, n) => [...La(t, s), ...Ua(a, e), ...Va(r, n)], ds = (a, e) => na(qa(e), a), ps = (a, e, t) => {
  const s = Ja(e);
  return na(t ? [...s, ...t] : s, a);
}, Tt = (a, e, t, s) => {
  if (a.code === C || a.code === E || a.code === j) return;
  const r = ba(a.code);
  return r ? r(t, e, s) : a.code === D ? It(a) : a.code === H || a.code === O || a.code === K ? wt(a) : a.code !== sa ? a : void 0;
}, It = (a) => ({
  code: D,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), wt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), kt = (a) => ({ code: P, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Bt = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: C,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Mt(a.header), t];
}, St = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: E, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, Mt = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, F = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: kt, showMessage: Bt, showScrollingText: St };
    return s.map(((n, m) => n.code === R ? n : Tt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === R ? e.pluginCommand(s) : s.code === P ? e.scriptCommand(s) : Ce(s, t)));
}, us = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: F(t.list, e) })))
}), gs = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: F(s.list, t) }))) };
}, ys = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: F(a.list, e)
}), hs = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: F(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), fs = (a, e) => Sa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), vs = (a, e) => Sa(a, e), Sa = (a, e) => ({
  note: S(a.note, e),
  displayName: h(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: S(s.note, r), pages: s.pages.map(((n) => ({
    ...n,
    list: F(n.list, r)
  }))) }))(t, e) : null)),
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
});
export {
  hs as $,
  te as A,
  Qa as B,
  Za as C,
  rs as D,
  J as E,
  ae as F,
  jt as G,
  Wa as H,
  se as I,
  re as J,
  ee as K,
  Ha as L,
  Ut as M,
  ve as N,
  be as O,
  Be as P,
  Ht as Q,
  Ot as R,
  Lt as S,
  L as T,
  ye as U,
  _t as V,
  Yt as W,
  Wt as X,
  Ce as Y,
  Zt as Z,
  ys as _,
  ls as a,
  Jt as a0,
  Xt as a1,
  F as a2,
  ca as a3,
  vs as a4,
  Vt as a5,
  fs as a6,
  je as a7,
  es as a8,
  la as a9,
  Qt as aa,
  as as ab,
  ts as ac,
  ss as ad,
  Ee as ae,
  us as af,
  gs as ag,
  qt as ah,
  U as ai,
  da as aj,
  pa as ak,
  Kt as b,
  xe as c,
  ia as d,
  ps as e,
  ds as f,
  he as g,
  ge as h,
  Rt as i,
  ms as j,
  ns as k,
  os as l,
  Xe as m,
  Ye as n,
  cs as o,
  is as p,
  ue as q,
  ma as r,
  Gt as s,
  zt as t,
  Ze as u,
  Ya as v,
  xt as w,
  M as x,
  Xa as y,
  Oa as z
};
