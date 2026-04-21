import { t as ka, F as Ba, E as Ma, B as Sa } from "./makeSystem.es.js";
import { aU as Aa, aO as Ea, b5 as Ca, b6 as $a, aI as Da, aZ as M, aP as Pa, aY as Fa, aT as Q, ax as ja, at as Ra, au as _a, a_ as La, a$ as Ua } from "./namedItems.es.js";
import { F as Va } from "./system.es.js";
import { b as W, q as aa, N as ea, E as z, w as O, v as H, aS as E, P as j, Q as _, aP as C, aM as D, aO as K, az as ta, ay as P, aR as sa, as as R } from "./eventCommandCodes.es.js";
import { JSONPathJS as Ja } from "jsonpath-js";
import { parseDeepRecord as qa } from "@sigureya/rmmz-plugin-schema";
import { m as ra } from "./mergeItemsSource.es.js";
const Ga = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), za = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), S = (a, e) => ({ note: Oa(a), main: e.map(((t) => ({
  key: t,
  value: a[t],
  id: a.id
}))) }), Oa = (a) => Aa(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Ha = (a) => S(a, ["name", "nickname", "profile"]), Ka = (a) => S(a, ["name"]), Ya = (a) => S(a, ["name"]), Xa = (a) => S(a, ["name", "description", "message1", "message2"]), Za = (a) => S(a, ["name", "description"]), Qa = (a) => S(a, ["name", "description"]), Wa = (a) => S(a, ["name", "description"]), ae = (a) => S(a, ["name", "message1", "message2", "message3", "message4"]), ee = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Sa(a.terms.basic),
    commands: Ma(a.terms.commands),
    messages: Ba(a.terms.messages),
    params: ka(a.terms.params)
  }
}), Dt = (a, e) => {
  const t = N(a.actors, Ha), s = ne(a.armors), r = N(a.classes, Ya), n = N(a.enemies, Ka), m = N(a.items, Za), o = N(a.mapInfos, ((p) => p)), i = N(a.skills, Xa), l = N(a.states, ae), b = N(a.weapons, Qa), c = me(a.commonEvents, e), h = oe(a.troops, e), d = ie(a.mapFiles, e), T = te(a.system), u = se([t, s, r, n, m, o, i, l, b, h, c]).concat(re(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: c.data, troops: h.data.flat() }, mapFiles: d, system: T, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: l.data,
    weapons: b.data
  } }, errors: u };
}, te = (a) => ({ message: a.message, system: a.system ? ee(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), se = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), re = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: Va,
  error: e.message
}] : []], ne = (a) => N(a, Wa), me = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), oe = (a, e) => N(a, ((t) => e.extractBattleText(t))), ie = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, na = (a, e, t) => a.filter(((s) => s.code === W || s.code === aa || s.code === ea)).map(((s) => le(s, e, t))), ce = { [ea]: "weapon", [W]: "armor", [aa]: "item" }, le = (a, e, t) => {
  const s = Ea(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === Ca ? e.gain : a.parameters[1] === $a ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: ce[a.code], dataId: Da(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, ma = (a) => !!a, Pt = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), de = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), L = (a, e) => a.pages.map(((t, s) => e(t, s, a))), pe = (a, e) => a.events.filter(ma).map(((t) => L(t, e))), oa = (a, e) => a.events.filter(ma).flatMap(((t) => L(t, e))), Ft = (a, e) => a.map(((t) => L(t, e))), ue = (a, e) => a.flatMap(((t) => L(t, e))), jt = (a, e) => a.map(((t) => e(t, 0, t))), Rt = (a) => pe(a, de).flat(2), ia = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, ca = (a, e) => ({ ...a, pages: a.pages.map(((t) => ia(t, e))) }), _t = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? ca(t, e) : null))
}), Lt = (a, e) => a.map(((t) => ia(t, e))), Ut = (a, e) => a.map(((t) => ca(t, e))), Vt = (a, e, t) => oa(a.map, ((s, r, n) => ({
  ...ge(s),
  commands: na(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), ge = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Jt = (a, e, t) => ue(a, ((s, r, n) => ({
  commands: na(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ye = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, he = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, la = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, da = (a, e, t, s) => {
  const r = fe(a);
  return Array.from(r.entries()).map((([n, m]) => {
    const o = be(m, e, t, s);
    return {
      key: n,
      kinds: ve(o),
      values: m.map(((i) => i.value))
    };
  }));
}, fe = (a) => a.reduce(((e, t) => (e.has(t.key) || e.set(t.key, a.filter(((s) => s.key === t.key))), e)), /* @__PURE__ */ new Map()), ve = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), be = (a, e, t, s) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ye(n.value),
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
}), xe = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], Ne = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), k = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s };
})).filter(Te), Te = (a) => a.note.length > 0 || a.main.length > 0, qt = (a, e, t, s) => {
  const r = we(a.value.mapFiles.validMaps, e, t, s), n = ke(a.value.mainData, e, t, s);
  return {
    nonTextNoteKeys: pa(a.value.mainData, e, t, s),
    data: { errors: a.errors, value: {
      mainData: n,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: r },
      eventData: a.value.eventData,
      system: a.value.system
    } }
  };
}, Ie = (a, e, t, s) => {
  const r = (n = (m) => m.map, a.map(((m) => {
    const o = n(m);
    return xe(o);
  })).flat(4));
  var n;
  return da(r, e, t, s);
}, we = (a, e, t, s) => {
  const r = Ie(a, e, t, s), n = la(r);
  return a.map(((m) => {
    return { filename: m.filename, editingName: m.editingName, map: (o = m.map, i = (l) => n.has(l.key), {
      displayedName: o.displayedName,
      note: o.note,
      noteItems: o.noteItems.filter(i),
      events: o.events.map(((l) => Ne(l, i)))
    }) };
    var o, i;
  }));
}, pa = (a, e, t, s) => {
  const r = Be(a), n = da(r, e, t, s);
  return la(n);
}, ke = (a, e, t, s) => {
  const r = pa(a, e, t, s), n = (m) => r.has(m.key);
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
}, Be = (a) => [B(a.actors), B(a.skills), B(a.items), B(a.weapons), B(a.armors), B(a.classes), B(a.states), B(a.enemies)].flat(3), B = (a) => a.map(((e) => e.note)), Me = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, y = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, f = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Gt = (a, e) => {
  const t = (o) => e.replaceText(o), s = M(a.note, e), r = y(a.name, t), n = y(a.nickname, t), m = y(a.profile, t);
  return { ...a, name: r, nickname: n, profile: m, note: s };
}, zt = (a, e) => {
  const t = M(a.note, e), s = f(a.name, e);
  return { ...a, name: s, note: t };
}, Ot = (a, e) => {
  const t = M(a.note, e), s = f(a.name, e);
  return { ...a, name: s, note: t };
}, Ht = (a, e) => {
  const t = M(a.note, e), s = f(a.name, e), r = f(a.description, e), n = f(a.message1, e), m = f(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, Kt = (a, e) => {
  const t = M(a.note, e), s = f(a.name, e), r = f(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, Yt = (a, e) => {
  const t = M(a.note, e), s = f(a.name, e), r = f(a.message1, e), n = f(a.message2, e), m = f(a.message3, e), o = f(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Se = (a, e) => {
  switch (a.code) {
    case K:
      return Ee(a, e);
    case D:
      return $e(a, e);
    case C:
    case _:
    case j:
    case E:
      return Ae(a, e);
    case H:
    case O:
    case z:
      return Ce(a, e);
    default:
      return a;
  }
}, Ae = (a, e) => {
  const t = y(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Ee = (a, e) => {
  const t = a.parameters[4] ? y(a.parameters[4], e) : "";
  return Pa({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Ce = (a, e) => {
  const t = y(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, $e = (a, e) => {
  const t = a.parameters[0].map(((s) => y(s, e)));
  return {
    code: D,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Xt = (a, e, t = `
`) => De(a, ((s) => e.get(s)), t), De = (a, e, t = `
`) => Fa(a.note, ((s) => y(s.value, e)), t), Zt = (a, e) => ua(a, ((t) => Me(t, e))), ua = (a, e) => ({
  params: je(a.params, ((t) => y(t, e))),
  messages: Re(a.messages, ((t) => y(t, e))),
  basic: Pe(a.basic, ((t) => y(t, e))),
  commands: Fe(a.commands, ((t) => y(t, e)))
}), Pe = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Fe = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], je = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Re = (a, e) => ({
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
}), Qt = (a, e) => ({
  ...a,
  gameTitle: y(a.gameTitle, e),
  currencyUnit: y(a.currencyUnit, e),
  elements: $(a.elements, e),
  skillTypes: $(a.skillTypes, e),
  weaponTypes: $(a.weaponTypes, e),
  armorTypes: $(a.armorTypes, e),
  equipTypes: $(a.equipTypes, e),
  terms: ua(a.terms, e)
}), $ = (a, e) => a.map(((t) => y(t, e))), ga = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ya {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return ga(this.joinCommandBodies());
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
class Y {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return ga(this.bodies);
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
}, _e = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === _), ((m) => m.code === j)))(a, e);
  return Le(s) ? new Y(j, s, t) : new ya(s, t);
}, Le = (a) => a.parameters[0] === "選択肢ヘルプ", Ue = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === K), ((m) => m.code === C)))(a, e);
  return new Y(C, s, t);
}, Ve = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === P), ((m) => m.code === ta)))(a, e);
  return new ya(s, t);
}, Je = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => U(r, n, ((m) => m.code === sa), ((m) => m.code === E)))(a, e);
  return new Y(E, s, t);
}, qe = {
  [K]: (a, e, t) => t.showMessage(Ue(a, e), e, a),
  [P]: (a, e, t) => t.script(Ve(a, e), e, a),
  [_]: (a, e, t) => t.comment(_e(a, e), e, a),
  [sa]: (a, e, t) => t.showScrollingText(Je(a, e), e, a)
}, ha = (a) => qe[a], Wt = (a) => fa(a, (() => [])), V = (a, e) => fa(a, e), fa = (a, e) => a.flatMap(((t, s) => Ge(t, s, a, e))).filter(((t) => t !== null)), Ge = (a, e, t, s) => {
  if (a.code === R) return s(a);
  if (a.code === D) return za(a);
  const r = ha(a.code);
  if (r) {
    const n = r(t, e, ze);
    if (n !== void 0) return [n];
  }
  return a.code === O || a.code === H || a.code === z ? Ga(a) : null;
}, ze = { comment: (a) => ({
  code: _,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: C, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: E, paramIndex: 0, value: e.getBodyText() }))(a) }, Oe = (a, e = () => []) => ({
  eventId: a.id,
  commands: V(a.list, e)
}), He = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: V(t.list, e) }))), Ke = (a, e = () => []) => ({
  note: a.note,
  noteItems: Q(a.note),
  displayedName: a.displayName,
  events: Ye(a, e)
}), Ye = (a, e) => oa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: V(t.list, e),
  note: r.note,
  noteItems: Q(r.note),
  name: r.name
}))), va = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), ba = (a) => a.kind === "struct", xa = (a) => a.attr.kind === "struct[]", Xe = (a) => Na[a.kind.replace("[]", "")].type === "number", Ze = (a) => Na[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, v = { type: "number", hasText: !1 }, Na = {
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
function Qe(a) {
  return We(a, ((e) => !0), ((e) => !0));
}
const We = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (ba(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (xa(o)) r.push(o);
    else if (va(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function at(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const et = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, tt = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Ta = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ia(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
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
          objectSchema: at(p.scalars),
          name: I,
          scalarArrays: tt(p.scalarArrays, g),
          scalarsPath: p.scalars.length > 0 ? et(p.scalars, g) : void 0
        };
      })(d, { path: c.basePath, structName: c.schemaName });
      return h.push(...T), {
        frames: h,
        items: [...i.items, u],
        errs: i.errs
      };
    }
    return h.push(...T), { frames: h, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const st = (a, e, t, s = Ta) => Ia(a.attr.struct, `${e}["${a.name}"]`, t, s), rt = (a, e, t, s = Ta) => Ia(a.attr.struct, `${e}["${a.name}"][*]`, t, s), nt = (a, e, t, s) => ((r) => ba(r.attr))(t) ? it(a, t, s) : xa(t) ? ct(a, t, s) : va(t) ? mt(a, e, t) : ot(a, e, t), mt = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), ot = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), it = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: st(e, "$", t)
}), ct = (a, e, t) => ({
  structArrays: rt(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), lt = (a, e) => e.map(((t) => dt(a, t))).flat(3), dt = (a, e) => [e.top ? J(e, a, e.top, "") : [], e.structs.map(((t) => J(e, a, t))), e.structArrays.map(((t) => J(e, a, t)))], J = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, l, b) => l.pathSegments(i).map((({ value: c, segments: h }) => ((d, T, u, p, g) => {
    if (typeof u == "object" || u === null) return null;
    const I = p[p.length - 1];
    if (typeof I == "number") return null;
    const w = g[I];
    return w ? { rootName: d.rootName, rootType: d.rootCategory, structName: T, value: u, param: { name: I, attr: w } } : null;
  })(m, o, c, h, b))).filter(((c) => c !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, l, b) => {
    const c = b.jsonPathJS.find(l);
    if (!Array.isArray(c)) return [];
    const h = b.schema.attr;
    return Ze(h) ? ((d, T, u, p) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: g,
      structName: u,
      param: p
    }))))(o, c, i, b.schema) : Xe(h) ? ((d, T, u, p) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: d.rootName, rootType: d.rootCategory, value: g, structName: u, param: p }))))(o, c, i, b.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, q = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: Z(a.scalarArrays, a.name, e), scalar: pt(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: Z(a.scalarArrays, a.name, e)
}, Z = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), pt = (a, e, t) => ({ jsonPathJS: t(a), record: e }), ut = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: gt(e, t, s)
}), gt = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? q(r.scalars, n) : void 0, o = r.structs.items.map(((l) => q(l, n))), i = r.structArrays.items.map(((l) => q(l, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(nt("args", a.command, s, e), t))), yt = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, Qe(r.params)]))))(a.schema.structs);
  return ht(a.pluginName, a.schema.commands, t, e);
}, ht = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, ut(a, r, t, s)])), ft = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: lt(m, o.extractors) }))(qa(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, as = (a) => {
  const e = new Map(a);
  return new X(e);
}, es = () => new X(/* @__PURE__ */ new Map()), ts = (a) => {
  const e = a.flatMap(((t) => yt(t, ((s) => new Ja(s)))));
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
    return Ke(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return He(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return Oe(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = ft(e, this._commandMap);
    return t.args.filter(vt).map(((s) => ({
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
const vt = (a) => typeof a.value == "string", ss = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), G = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), rs = (a) => [G(a, "faceName", "faces"), G(a, "characterName", "characters"), G(a, "battlerName", "sv_actors")], ns = (a, e, t, s, r, n) => [...ja(t, s), ...Ra(a, e), ..._a(r, n)], ms = (a, e) => ra(Ua(e), a), os = (a, e, t) => {
  const s = La(e);
  return ra(t ? [...s, ...t] : s, a);
}, bt = (a, e, t, s) => {
  if (a.code === C || a.code === E || a.code === j) return;
  const r = ha(a.code);
  return r ? r(t, e, s) : a.code === D ? xt(a) : a.code === H || a.code === O || a.code === z ? Nt(a) : a.code !== ta ? a : void 0;
}, xt = (a) => ({
  code: D,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Nt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Tt = (a) => ({ code: P, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), It = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: C,
    indent: a.header.indent,
    parameters: [e]
  };
  return [kt(a.header), t];
}, wt = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: E, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, kt = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, F = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Tt, showMessage: It, showScrollingText: wt };
    return s.map(((n, m) => n.code === R ? n : bt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === R ? e.pluginCommand(s) : s.code === P ? e.scriptCommand(s) : Se(s, t)));
}, is = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: F(t.list, e) })))
}), cs = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: F(s.list, t) }))) };
}, ls = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: F(a.list, e)
}), ds = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: F(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), ps = (a, e) => wa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), us = (a, e) => wa(a, e), wa = (a, e) => ({
  note: M(a.note, e),
  displayName: f(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: M(s.note, r), pages: s.pages.map(((n) => ({
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
  ds as $,
  Ya as A,
  Ka as B,
  Wt as C,
  V as D,
  Za as E,
  Dt as F,
  Xa as G,
  ae as H,
  ee as I,
  Qa as J,
  za as K,
  Rt as L,
  ye as M,
  he as N,
  pa as O,
  ke as P,
  we as Q,
  qt as R,
  jt as S,
  L as T,
  pe as U,
  Ft as V,
  Gt as W,
  Kt as X,
  Se as Y,
  Ot as Z,
  ls as _,
  oa as a,
  Lt as a0,
  zt as a1,
  F as a2,
  ia as a3,
  us as a4,
  _t as a5,
  ps as a6,
  De as a7,
  Xt as a8,
  ca as a9,
  Ht as aa,
  Yt as ab,
  Zt as ac,
  Qt as ad,
  Me as ae,
  is as af,
  cs as ag,
  Ut as ah,
  la as ai,
  da as aj,
  Ie as ak,
  ns as b,
  fe as c,
  os as d,
  ms as e,
  ue as f,
  de as g,
  Pt as h,
  es as i,
  as as j,
  ts as k,
  He as l,
  Oe as m,
  rs as n,
  ss as o,
  le as p,
  na as q,
  Vt as r,
  Jt as s,
  Ke as t,
  Oa as u,
  ft as v,
  S as w,
  Ha as x,
  Ga as y,
  Wa as z
};
