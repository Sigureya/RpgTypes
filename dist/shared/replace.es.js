import { t as wa, F as ka, E as Ba, B as Sa } from "./make.es.js";
import { aU as Ma, aO as Aa, b5 as Ea, b6 as Ca, aI as $a, aZ as S, aP as Pa, aY as Da, aT as Q, ax as ja, at as Fa, au as Ra, a_ as _a, a$ as La } from "./namedItems.es.js";
import { F as Ua } from "./system.es.js";
import { b as W, q as aa, N as ea, E as z, w as O, v as H, aS as E, P as F, Q as _, aP as C, aM as P, aO as Y, az as ta, ay as D, aR as sa, as as R } from "./eventCommandCodes.es.js";
import { JSONPathJS as Va } from "jsonpath-js";
import { parseDeepRecord as Ja } from "@sigureya/rmmz-plugin-schema";
import { m as ra } from "./mergeItemsSource.es.js";
const qa = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Ga = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), M = (a, e) => ({ note: za(a), main: e.map(((t) => ({
  key: t,
  value: a[t],
  id: a.id
}))) }), za = (a) => Ma(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Oa = (a) => M(a, ["name", "nickname", "profile"]), Ha = (a) => M(a, ["name"]), Ya = (a) => M(a, ["name"]), Ka = (a) => M(a, ["name", "description", "message1", "message2"]), Xa = (a) => M(a, ["name", "description"]), Za = (a) => M(a, ["name", "description"]), Qa = (a) => M(a, ["name", "description"]), Wa = (a) => M(a, ["name", "message1", "message2", "message3", "message4"]), ae = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Sa(a.terms.basic),
    commands: Ba(a.terms.commands),
    messages: ka(a.terms.messages),
    params: wa(a.terms.params)
  }
}), Ct = (a, e) => {
  const t = N(a.actors, Oa), s = re(a.armors), r = N(a.classes, Ya), n = N(a.enemies, Ha), m = N(a.items, Xa), o = N(a.mapInfos, ((p) => p)), i = N(a.skills, Ka), l = N(a.states, Wa), b = N(a.weapons, Za), c = ne(a.commonEvents, e), y = me(a.troops, e), d = oe(a.mapFiles, e), T = ee(a.system), u = te([t, s, r, n, m, o, i, l, b, y, c]).concat(se(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: c.data, troops: y.data.flat() }, mapFiles: d, system: T, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: l.data,
    weapons: b.data
  } }, errors: u };
}, ee = (a) => ({ message: a.message, system: a.system ? ae(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), te = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), se = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: Ua,
  error: e.message
}] : []], re = (a) => N(a, Qa), ne = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), me = (a, e) => N(a, ((t) => e.extractBattleText(t))), oe = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, na = (a, e, t) => a.filter(((s) => s.code === W || s.code === aa || s.code === ea)).map(((s) => ce(s, e, t))), ie = { [ea]: "weapon", [W]: "armor", [aa]: "item" }, ce = (a, e, t) => {
  const s = Aa(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === Ea ? e.gain : a.parameters[1] === Ca ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: ie[a.code], dataId: $a(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, ma = (a) => !!a, $t = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), le = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), L = (a, e) => a.pages.map(((t, s) => e(t, s, a))), de = (a, e) => a.events.filter(ma).map(((t) => L(t, e))), oa = (a, e) => a.events.filter(ma).flatMap(((t) => L(t, e))), Pt = (a, e) => a.map(((t) => L(t, e))), pe = (a, e) => a.flatMap(((t) => L(t, e))), Dt = (a, e) => a.map(((t) => e(t, 0, t))), jt = (a) => de(a, le).flat(2), ia = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, ca = (a, e) => ({ ...a, pages: a.pages.map(((t) => ia(t, e))) }), Ft = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? ca(t, e) : null))
}), Rt = (a, e) => a.map(((t) => ia(t, e))), _t = (a, e) => a.map(((t) => ca(t, e))), Lt = (a, e, t) => oa(a.map, ((s, r, n) => ({
  ...ue(s),
  commands: na(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), ue = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Ut = (a, e, t) => pe(a, ((s, r, n) => ({
  commands: na(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ge = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, he = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, la = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, da = (a, e, t, s) => {
  const r = ye(a);
  return Array.from(r.entries()).map((([n, m]) => {
    const o = ve(m, e, t, s);
    return {
      key: n,
      kinds: fe(o),
      values: m.map(((i) => i.value))
    };
  }));
}, ye = (a) => a.reduce(((e, t) => (e.has(t.key) || e.set(t.key, a.filter(((s) => s.key === t.key))), e)), /* @__PURE__ */ new Map()), fe = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), ve = (a, e, t, s) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ge(n.value),
  isNumber: r.isNumber && he(n.value),
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
}), be = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], xe = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), k = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s };
})).filter(Ne), Ne = (a) => a.note.length > 0 || a.main.length > 0, Te = (a, e, t, s) => {
  const r = (n = (m) => m.map, a.map(((m) => {
    const o = n(m);
    return be(o);
  })).flat(4));
  var n;
  return da(r, e, t, s);
}, Vt = (a, e, t, s) => {
  const r = Te(a, e, t, s), n = la(r);
  return a.map(((m) => {
    return { filename: m.filename, editingName: m.editingName, map: (o = m.map, i = (l) => n.has(l.key), {
      displayedName: o.displayedName,
      note: o.note,
      noteItems: o.noteItems.filter(i),
      events: o.events.map(((l) => xe(l, i)))
    }) };
    var o, i;
  }));
}, Ie = (a, e, t, s) => {
  const r = we(a), n = da(r, e, t, s);
  return la(n);
}, Jt = (a, e, t, s) => {
  const r = Ie(a, e, t, s), n = (m) => r.has(m.key);
  return {
    actors: k(a.actors, n),
    enemies: k(a.enemies, n),
    weapons: k(a.weapons, n),
    armors: k(a.armors, n),
    skills: k(a.skills, n),
    states: k(a.states, n),
    items: k(a.items, n),
    classes: k(a.classes, n)
  };
}, we = (a) => [B(a.actors), B(a.skills), B(a.items), B(a.weapons), B(a.armors), B(a.classes), B(a.states), B(a.enemies)].flat(3), B = (a) => a.map(((e) => e.note)), ke = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, f = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, qt = (a, e) => {
  const t = (o) => e.replaceText(o), s = S(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return { ...a, name: r, nickname: n, profile: m, note: s };
}, Gt = (a, e) => {
  const t = S(a.note, e), s = f(a.name, e);
  return { ...a, name: s, note: t };
}, zt = (a, e) => {
  const t = S(a.note, e), s = f(a.name, e);
  return { ...a, name: s, note: t };
}, Ot = (a, e) => {
  const t = S(a.note, e), s = f(a.name, e), r = f(a.description, e), n = f(a.message1, e), m = f(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, Ht = (a, e) => {
  const t = S(a.note, e), s = f(a.name, e), r = f(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, Yt = (a, e) => {
  const t = S(a.note, e), s = f(a.name, e), r = f(a.message1, e), n = f(a.message2, e), m = f(a.message3, e), o = f(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Be = (a, e) => {
  switch (a.code) {
    case Y:
      return Me(a, e);
    case P:
      return Ee(a, e);
    case C:
    case _:
    case F:
    case E:
      return Se(a, e);
    case H:
    case O:
    case z:
      return Ae(a, e);
    default:
      return a;
  }
}, Se = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Me = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return Pa({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Ae = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Ee = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: P,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Kt = (a, e, t = `
`) => Ce(a, ((s) => e.get(s)), t), Ce = (a, e, t = `
`) => Da(a.note, ((s) => h(s.value, e)), t), Xt = (a, e) => pa(a, ((t) => ke(t, e))), pa = (a, e) => ({
  params: De(a.params, ((t) => h(t, e))),
  messages: je(a.messages, ((t) => h(t, e))),
  basic: $e(a.basic, ((t) => h(t, e))),
  commands: Pe(a.commands, ((t) => h(t, e)))
}), $e = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Pe = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], De = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], je = (a, e) => ({
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
}), Zt = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: $(a.elements, e),
  skillTypes: $(a.skillTypes, e),
  weaponTypes: $(a.weaponTypes, e),
  armorTypes: $(a.armorTypes, e),
  equipTypes: $(a.equipTypes, e),
  terms: pa(a.terms, e)
}), $ = (a, e) => a.map(((t) => h(t, e))), ua = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ga {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return ua(this.joinCommandBodies());
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
class K {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return ua(this.bodies);
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
const U = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Fe = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === _), ((m) => m.code === F)))(a, e);
  return Re(s) ? new K(F, s, t) : new ga(s, t);
}, Re = (a) => a.parameters[0] === "選択肢ヘルプ", _e = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === Y), ((m) => m.code === C)))(a, e);
  return new K(C, s, t);
}, Le = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === D), ((m) => m.code === ta)))(a, e);
  return new ga(s, t);
}, Ue = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === sa), ((m) => m.code === E)))(a, e);
  return new K(E, s, t);
}, Ve = {
  [Y]: (a, e, t) => t.showMessage(_e(a, e), e, a),
  [D]: (a, e, t) => t.script(Le(a, e), e, a),
  [_]: (a, e, t) => t.comment(Fe(a, e), e, a),
  [sa]: (a, e, t) => t.showScrollingText(Ue(a, e), e, a)
}, ha = (a) => Ve[a], Qt = (a) => ya(a, (() => [])), V = (a, e) => ya(a, e), ya = (a, e) => a.flatMap(((t, s) => Je(t, s, a, e))).filter(((t) => t !== null)), Je = (a, e, t, s) => {
  if (a.code === R) return s(a);
  if (a.code === P) return Ga(a);
  const r = ha(a.code);
  if (r) {
    const n = r(t, e, qe);
    if (n !== void 0) return [n];
  }
  return a.code === O || a.code === H || a.code === z ? qa(a) : null;
}, qe = { comment: (a) => ({
  code: _,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: C, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({ code: D, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: E, paramIndex: 0, value: e.getBodyText() }))(a) }, Ge = (a, e = () => []) => ({
  eventId: a.id,
  commands: V(a.list, e)
}), ze = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: V(t.list, e) }))), Oe = (a, e = () => []) => ({
  note: a.note,
  noteItems: Q(a.note),
  displayedName: a.displayName,
  events: He(a, e)
}), He = (a, e) => oa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: V(t.list, e),
  note: r.note,
  noteItems: Q(r.note),
  name: r.name
}))), fa = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), va = (a) => a.kind === "struct", ba = (a) => a.attr.kind === "struct[]", Ye = (a) => xa[a.kind.replace("[]", "")].type === "number", Ke = (a) => xa[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, v = { type: "number", hasText: !1 }, xa = {
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
function Xe(a) {
  return Ze(a, ((e) => !0), ((e) => !0));
}
const Ze = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (va(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (ba(o)) r.push(o);
    else if (fa(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Qe(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const We = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, at = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Na = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ta(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, l, b) {
    if (i.frames.length === 0) return i;
    const c = i.frames[i.frames.length - 1], y = i.frames.slice(0, -1);
    if (c.ancestry.includes(c.schemaName)) return { frames: y, items: i.items, errs: [...i.errs, { code: b.cyclicStruct, path: c.basePath }] };
    const d = l.get(c.schemaName);
    if (!d) return {
      frames: y,
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
          objectSchema: Qe(p.scalars),
          name: I,
          scalarArrays: at(p.scalarArrays, g),
          scalarsPath: p.scalars.length > 0 ? We(p.scalars, g) : void 0
        };
      })(d, { path: c.basePath, structName: c.schemaName });
      return y.push(...T), {
        frames: y,
        items: [...i.items, u],
        errs: i.errs
      };
    }
    return y.push(...T), { frames: y, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const et = (a, e, t, s = Na) => Ta(a.attr.struct, `${e}["${a.name}"]`, t, s), tt = (a, e, t, s = Na) => Ta(a.attr.struct, `${e}["${a.name}"][*]`, t, s), st = (a, e, t, s) => ((r) => va(r.attr))(t) ? mt(a, t, s) : ba(t) ? ot(a, t, s) : fa(t) ? rt(a, e, t) : nt(a, e, t), rt = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), nt = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), mt = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: et(e, "$", t)
}), ot = (a, e, t) => ({
  structArrays: tt(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), it = (a, e) => e.map(((t) => ct(a, t))).flat(3), ct = (a, e) => [e.top ? J(e, a, e.top, "") : [], e.structs.map(((t) => J(e, a, t))), e.structArrays.map(((t) => J(e, a, t)))], J = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, l, b) => l.pathSegments(i).map((({ value: c, segments: y }) => ((d, T, u, p, g) => {
    if (typeof u == "object" || u === null) return null;
    const I = p[p.length - 1];
    if (typeof I == "number") return null;
    const w = g[I];
    return w ? { rootName: d.rootName, rootType: d.rootCategory, structName: T, value: u, param: { name: I, attr: w } } : null;
  })(m, o, c, y, b))).filter(((c) => c !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, l, b) => {
    const c = b.jsonPathJS.find(l);
    if (!Array.isArray(c)) return [];
    const y = b.schema.attr;
    return Ke(y) ? ((d, T, u, p) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: g,
      structName: u,
      param: p
    }))))(o, c, i, b.schema) : Ye(y) ? ((d, T, u, p) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: d.rootName, rootType: d.rootCategory, value: g, structName: u, param: p }))))(o, c, i, b.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, q = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: Z(a.scalarArrays, a.name, e), scalar: lt(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: Z(a.scalarArrays, a.name, e)
}, Z = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), lt = (a, e, t) => ({ jsonPathJS: t(a), record: e }), dt = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: pt(e, t, s)
}), pt = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? q(r.scalars, n) : void 0, o = r.structs.items.map(((l) => q(l, n))), i = r.structArrays.items.map(((l) => q(l, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(st("args", a.command, s, e), t))), ut = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, Xe(r.params)]))))(a.schema.structs);
  return gt(a.pluginName, a.schema.commands, t, e);
}, gt = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, dt(a, r, t, s)])), ht = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: it(m, o.extractors) }))(Ja(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, Wt = (a) => {
  const e = new Map(a);
  return new X(e);
}, as = () => new X(/* @__PURE__ */ new Map()), es = (a) => {
  const e = a.flatMap(((t) => ut(t, ((s) => new Va(s)))));
  return new X(new Map(e));
};
class X {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return Oe(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return ze(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return Ge(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = ht(e, this._commandMap);
    return t.args.filter(yt).map(((s) => ({
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
    return V(e, ((t) => this.extractArgs(t)));
  }
}
const yt = (a) => typeof a.value == "string", ts = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), G = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), ss = (a) => [G(a, "faceName", "faces"), G(a, "characterName", "characters"), G(a, "battlerName", "sv_actors")], rs = (a, e, t, s, r, n) => [...ja(t, s), ...Fa(a, e), ...Ra(r, n)], ns = (a, e) => ra(La(e), a), ms = (a, e, t) => {
  const s = _a(e);
  return ra(t ? [...s, ...t] : s, a);
}, ft = (a, e, t, s) => {
  if (a.code === C || a.code === E || a.code === F) return;
  const r = ha(a.code);
  return r ? r(t, e, s) : a.code === P ? vt(a) : a.code === H || a.code === O || a.code === z ? bt(a) : a.code !== ta ? a : void 0;
}, vt = (a) => ({
  code: P,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), bt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), xt = (a) => ({ code: D, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Nt = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: C,
    indent: a.header.indent,
    parameters: [e]
  };
  return [It(a.header), t];
}, Tt = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: E, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, It = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, j = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: xt, showMessage: Nt, showScrollingText: Tt };
    return s.map(((n, m) => n.code === R ? n : ft(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === R ? e.pluginCommand(s) : s.code === D ? e.scriptCommand(s) : Be(s, t)));
}, os = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: j(t.list, e) })))
}), is = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: j(s.list, t) }))) };
}, cs = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: j(a.list, e)
}), ls = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: j(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), ds = (a, e) => Ia(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), ps = (a, e) => Ia(a, e), Ia = (a, e) => ({
  note: S(a.note, e),
  displayName: f(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: S(s.note, r), pages: s.pages.map(((n) => ({
    ...n,
    list: j(n.list, r)
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
  Rt as $,
  Ya as A,
  Ha as B,
  Qt as C,
  V as D,
  Xa as E,
  Ct as F,
  Ka as G,
  Wa as H,
  ae as I,
  Za as J,
  Ga as K,
  jt as L,
  ge as M,
  he as N,
  Ie as O,
  Jt as P,
  Vt as Q,
  Dt as R,
  L as S,
  de as T,
  Pt as U,
  qt as V,
  Ht as W,
  Be as X,
  zt as Y,
  cs as Z,
  ls as _,
  oa as a,
  Gt as a0,
  j as a1,
  ia as a2,
  ps as a3,
  Ft as a4,
  ds as a5,
  Ce as a6,
  Kt as a7,
  ca as a8,
  Ot as a9,
  Yt as aa,
  Xt as ab,
  Zt as ac,
  ke as ad,
  os as ae,
  is as af,
  _t as ag,
  la as ah,
  da as ai,
  Te as aj,
  rs as b,
  ye as c,
  ms as d,
  ns as e,
  pe as f,
  le as g,
  $t as h,
  as as i,
  Wt as j,
  es as k,
  ze as l,
  Ge as m,
  ss as n,
  ts as o,
  ce as p,
  na as q,
  Lt as r,
  Ut as s,
  Oe as t,
  za as u,
  ht as v,
  M as w,
  Oa as x,
  qa as y,
  Qa as z
};
