import { t as Ma, F as Aa, E as Ea, B as Ca } from "./makeSystem.es.js";
import { aU as $a, aO as Da, b5 as Pa, b6 as Fa, aI as ja, aZ as M, aP as Ra, aY as _a, aT as ea, ax as La, at as Ua, au as Va, a_ as Ja, a$ as qa } from "./namedItems.es.js";
import { F as Ga } from "./system.es.js";
import { b as ta, q as sa, N as ra, E as O, w as Y, v as X, aS as C, P as R, Q as L, aP as $, aM as P, aO as Z, az as na, ay as F, aR as ma, as as _ } from "./eventCommandCodes.es.js";
import { JSONPathJS as za } from "jsonpath-js";
import { parseDeepRecord as Ka } from "@sigureya/rmmz-plugin-schema";
import { m as oa } from "./mergeItemsSource.es.js";
const Ha = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Oa = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), A = (a, e) => ({ note: Ya(a), main: e.map(((t) => ({
  key: t,
  value: a[t],
  id: a.id
}))) }), Ya = (a) => $a(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Xa = (a) => A(a, ["name", "nickname", "profile"]), Za = (a) => A(a, ["name"]), Qa = (a) => A(a, ["name"]), Wa = (a) => A(a, ["name", "description", "message1", "message2"]), ae = (a) => A(a, ["name", "description"]), ee = (a) => A(a, ["name", "description"]), te = (a) => A(a, ["name", "description"]), se = (a) => A(a, ["name", "message1", "message2", "message3", "message4"]), re = (a) => ({
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
}), _t = (a, e) => {
  const t = T(a.actors, Xa), s = ie(a.armors), r = T(a.classes, Qa), n = T(a.enemies, Za), m = T(a.items, ae), o = T(a.mapInfos, ((y) => y)), i = T(a.skills, Wa), c = T(a.states, se), l = T(a.weapons, ee), d = ce(a.commonEvents, e), u = le(a.troops, e), p = de(a.mapFiles, e), x = ne(a.system), g = me([t, s, r, n, m, o, i, c, l, u, d]).concat(oe(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: d.data, troops: u.data.flat() }, mapFiles: p, system: x, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: g };
}, ne = (a) => ({ message: a.message, system: a.system ? re(a.system) : null }), T = (a, e) => ({
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
}] : []], ie = (a) => T(a, te), ce = (a, e) => T(a, ((t) => e.extractCommonEventText(t))), le = (a, e) => T(a, ((t) => e.extractBattleText(t))), de = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ia = (a, e, t) => a.filter(((s) => s.code === ta || s.code === sa || s.code === ra)).map(((s) => ue(s, e, t))), pe = { [ra]: "weapon", [ta]: "armor", [sa]: "item" }, ue = (a, e, t) => {
  const s = Da(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === Pa ? e.gain : a.parameters[1] === Fa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: pe[a.code], dataId: ja(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, ca = (a) => !!a, Lt = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), ge = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), U = (a, e) => a.pages.map(((t, s) => e(t, s, a))), ye = (a, e) => a.events.filter(ca).map(((t) => U(t, e))), la = (a, e) => a.events.filter(ca).flatMap(((t) => U(t, e))), Ut = (a, e) => a.map(((t) => U(t, e))), he = (a, e) => a.flatMap(((t) => U(t, e))), Vt = (a, e) => a.map(((t) => e(t, 0, t))), Jt = (a) => ye(a, ge).flat(2), da = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, pa = (a, e) => ({ ...a, pages: a.pages.map(((t) => da(t, e))) }), qt = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? pa(t, e) : null))
}), Gt = (a, e) => a.map(((t) => da(t, e))), zt = (a, e) => a.map(((t) => pa(t, e))), Kt = (a, e, t) => la(a.map, ((s, r, n) => ({
  ...fe(s),
  commands: ia(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), fe = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Ht = (a, e, t) => he(a, ((s, r, n) => ({
  commands: ia(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ve = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, be = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, V = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, J = (a, e, t, s, r = xe(a)) => Array.from(r.entries()).map((([n, m]) => {
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
}), ua = (a, e) => a.map(((t) => {
  const s = e(t);
  return we(s);
})).flat(4), we = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], Ie = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), B = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s };
})).filter(ke), ke = (a) => a.note.length > 0 || a.main.length > 0, Ot = (a, e, t, s) => {
  const r = Ee(a.value.mainData, e, t, s), n = Ce(a.value.mapFiles.validMaps, e, t, s);
  return { dataNoteSummary: r.noteSummary, mapNoteSummary: n.noteSummary, nonTextNoteKeys: r.nonTextNoteKeys, data: {
    errors: a.errors,
    value: {
      mainData: r.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: n.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, Be = (a, e, t, s) => {
  const r = ua(a, ((n) => n.map));
  return J(r, e, t, s);
}, Yt = (a, e, t, s) => {
  const r = Be(a, e, t, s), n = V(r);
  return ya(a, n);
}, Se = (a, e, t, s) => {
  const r = Me(a, e, t, s);
  return V(r);
}, Xt = (a, e, t, s) => {
  const r = Se(a, e, t, s);
  return ga(a, r);
}, ga = (a, e) => {
  const t = (s) => e.has(s.key);
  return {
    actors: B(a.actors, t),
    enemies: B(a.enemies, t),
    weapons: B(a.weapons, t),
    armors: B(a.armors, t),
    skills: B(a.skills, t),
    states: B(a.states, t),
    items: B(a.items, t),
    classes: B(a.classes, t)
  };
}, ya = (a, e) => a.map(((t) => {
  return {
    filename: t.filename,
    editingName: t.editingName,
    map: (s = t.map, r = (n) => e.has(n.key), { displayedName: s.displayedName, note: s.note, noteItems: s.noteItems.filter(r), events: s.events.map(((n) => Ie(n, r))) })
  };
  var s, r;
})), Me = (a, e, t, s) => {
  const r = Ae(a);
  return J(r, e, t, s);
}, S = (a, e, t, s) => {
  const r = w(a).flat(2);
  return J(r, e, t, s);
}, Ae = (a) => [w(a.actors), w(a.skills), w(a.items), w(a.weapons), w(a.armors), w(a.classes), w(a.states), w(a.enemies)].flat(3), w = (a) => a.map(((e) => e.note)), Ee = (a, e, t, s) => {
  const r = ((o, i, c, l) => {
    const d = [["actors", S(o.actors, i, c, l)], ["enemies", S(o.enemies, i, c, l)], ["weapons", S(o.weapons, i, c, l)], ["armors", S(o.armors, i, c, l)], ["skills", S(o.skills, i, c, l)], ["states", S(o.states, i, c, l)], ["items", S(o.items, i, c, l)], ["classes", S(o.classes, i, c, l)]];
    return new Map(d);
  })(a, e, t, s), n = Array.from(r.values()).flat(), m = V(n);
  return { noteSummary: r, nonTextNoteKeys: m, mainData: ga(a, m) };
}, Ce = (a, e, t, s) => {
  const r = ((o, i, c, l) => {
    const d = o.map(((u) => {
      const p = ua([u], ((g) => g.map)), x = J(p, i, c, l);
      return [u.filename, x];
    }));
    return new Map(d);
  })(a, e, t, s), n = Array.from(r.values()).flat(), m = V(n);
  return {
    noteSummary: r,
    validMaps: ya(a, m)
  };
}, $e = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, f = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Zt = (a, e) => {
  const t = (o) => e.replaceText(o), s = M(a.note, e), r = f(a.name, t), n = f(a.nickname, t), m = f(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Qt = (a, e) => {
  const t = M(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Wt = (a, e) => {
  const t = M(a.note, e), s = v(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, as = (a, e) => {
  const t = M(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, es = (a, e) => {
  const t = M(a.note, e), s = v(a.name, e), r = v(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, ts = (a, e) => {
  const t = M(a.note, e), s = v(a.name, e), r = v(a.message1, e), n = v(a.message2, e), m = v(a.message3, e), o = v(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, De = (a, e) => {
  switch (a.code) {
    case Z:
      return Fe(a, e);
    case P:
      return Re(a, e);
    case $:
    case L:
    case R:
    case C:
      return Pe(a, e);
    case X:
    case Y:
    case O:
      return je(a, e);
    default:
      return a;
  }
}, Pe = (a, e) => {
  const t = f(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Fe = (a, e) => {
  const t = a.parameters[4] ? f(a.parameters[4], e) : "";
  return Ra({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, je = (a, e) => {
  const t = f(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Re = (a, e) => {
  const t = a.parameters[0].map(((s) => f(s, e)));
  return {
    code: P,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, ss = (a, e, t = `
`) => _e(a, ((s) => e.get(s)), t), _e = (a, e, t = `
`) => _a(a.note, ((s) => f(s.value, e)), t), rs = (a, e) => ha(a, ((t) => $e(t, e))), ha = (a, e) => ({
  params: Ve(a.params, ((t) => f(t, e))),
  messages: Je(a.messages, ((t) => f(t, e))),
  basic: Le(a.basic, ((t) => f(t, e))),
  commands: Ue(a.commands, ((t) => f(t, e)))
}), Le = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ue = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Ve = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Je = (a, e) => ({
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
}), ns = (a, e) => ({
  ...a,
  gameTitle: f(a.gameTitle, e),
  currencyUnit: f(a.currencyUnit, e),
  elements: D(a.elements, e),
  skillTypes: D(a.skillTypes, e),
  weaponTypes: D(a.weaponTypes, e),
  armorTypes: D(a.armorTypes, e),
  equipTypes: D(a.equipTypes, e),
  terms: ha(a.terms, e)
}), D = (a, e) => a.map(((t) => f(t, e))), fa = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
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
class Q {
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
const q = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, qe = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => q(r, n, ((m) => m.code === L), ((m) => m.code === R)))(a, e);
  return Ge(s) ? new Q(R, s, t) : new va(s, t);
}, Ge = (a) => a.parameters[0] === "選択肢ヘルプ", ze = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => q(r, n, ((m) => m.code === Z), ((m) => m.code === $)))(a, e);
  return new Q($, s, t);
}, Ke = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => q(r, n, ((m) => m.code === F), ((m) => m.code === na)))(a, e);
  return new va(s, t);
}, He = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => q(r, n, ((m) => m.code === ma), ((m) => m.code === C)))(a, e);
  return new Q(C, s, t);
}, Oe = {
  [Z]: (a, e, t) => t.showMessage(ze(a, e), e, a),
  [F]: (a, e, t) => t.script(Ke(a, e), e, a),
  [L]: (a, e, t) => t.comment(qe(a, e), e, a),
  [ma]: (a, e, t) => t.showScrollingText(He(a, e), e, a)
}, ba = (a) => Oe[a], ms = (a) => xa(a, (() => [])), G = (a, e) => xa(a, e), xa = (a, e) => a.flatMap(((t, s) => Ye(t, s, a, e))).filter(((t) => t !== null)), Ye = (a, e, t, s) => {
  if (a.code === _) return s(a);
  if (a.code === P) return Oa(a);
  const r = ba(a.code);
  if (r) {
    const n = r(t, e, Xe);
    if (n !== void 0) return [n];
  }
  return a.code === Y || a.code === X || a.code === O ? Ha(a) : null;
}, Xe = { comment: (a) => ({
  code: L,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: $, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({ code: F, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: C, paramIndex: 0, value: e.getBodyText() }))(a) }, Ze = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: G(a.list, e)
}), Qe = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: G(t.list, e) }))), We = (a, e = () => []) => ({
  note: a.note,
  noteItems: ea(a.note),
  displayedName: a.displayName,
  events: at(a, e)
}), at = (a, e) => la(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: G(t.list, e),
  note: r.note,
  noteItems: ea(r.note),
  name: r.name
}))), Na = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Ta = (a) => a.kind === "struct", wa = (a) => a.attr.kind === "struct[]", et = (a) => Ia[a.kind.replace("[]", "")].type === "number", tt = (a) => Ia[a.kind.replace("[]", "")].type === "string", E = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, b = { type: "number", hasText: !1 }, Ia = {
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
  "actor[]": b,
  "enemy[]": b,
  "class[]": b,
  "skill[]": b,
  "state[]": b,
  "item[]": b,
  "weapon[]": b,
  "common_event[]": b,
  "troop[]": b,
  "armor[]": b,
  "switch[]": b,
  "variable[]": b,
  "number[]": b
};
function st(a) {
  return rt(a, ((e) => !0), ((e) => !0));
}
const rt = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Ta(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (wa(o)) r.push(o);
    else if (Na(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function nt(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const mt = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, ot = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ka = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ba(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, c, l) {
    if (i.frames.length === 0) return i;
    const d = i.frames[i.frames.length - 1], u = i.frames.slice(0, -1);
    if (d.ancestry.includes(d.schemaName)) return { frames: u, items: i.items, errs: [...i.errs, { code: l.cyclicStruct, path: d.basePath }] };
    const p = c.get(d.schemaName);
    if (!p) return {
      frames: u,
      items: i.items,
      errs: [...i.errs, { code: l.undefinedStruct, path: d.basePath }]
    };
    const x = (function(g, y) {
      const h = g.ancestry.concat(g.schemaName), I = g.basePath;
      return [...y.structs.map(((k) => ({
        schemaName: k.attr.struct,
        basePath: `${I}["${k.name}"]`,
        ancestry: h
      }))), ...y.structArrays.map(((k) => ({ schemaName: k.attr.struct, basePath: `${I}["${k.name}"][*]`, ancestry: h })))].reverse();
    })(d, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const g = (function(y, { path: h, structName: I }) {
        return {
          category: "struct",
          objectSchema: nt(y.scalars),
          name: I,
          scalarArrays: ot(y.scalarArrays, h),
          scalarsPath: y.scalars.length > 0 ? mt(y.scalars, h) : void 0
        };
      })(p, { path: d.basePath, structName: d.schemaName });
      return u.push(...x), {
        frames: u,
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return u.push(...x), { frames: u, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const it = (a, e, t, s = ka) => Ba(a.attr.struct, `${e}["${a.name}"]`, t, s), ct = (a, e, t, s = ka) => Ba(a.attr.struct, `${e}["${a.name}"][*]`, t, s), lt = (a, e, t, s) => ((r) => Ta(r.attr))(t) ? ut(a, t, s) : wa(t) ? gt(a, t, s) : Na(t) ? dt(a, e, t) : pt(a, e, t), dt = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), pt = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ut = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: it(e, "$", t)
}), gt = (a, e, t) => ({
  structArrays: ct(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), yt = (a, e) => e.map(((t) => ht(a, t))).flat(3), ht = (a, e) => [e.top ? z(e, a, e.top, "") : [], e.structs.map(((t) => z(e, a, t))), e.structArrays.map(((t) => z(e, a, t)))], z = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: u }) => ((p, x, g, y, h) => {
    if (typeof g == "object" || g === null) return null;
    const I = y[y.length - 1];
    if (typeof I == "number") return null;
    const k = h[I];
    return k ? { rootName: p.rootName, rootType: p.rootCategory, structName: x, value: g, param: { name: I, attr: k } } : null;
  })(m, o, d, u, l))).filter(((d) => d !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const u = l.schema.attr;
    return tt(u) ? ((p, x, g, y) => x.filter(((h) => typeof h == "string")).map(((h) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: h,
      structName: g,
      param: y
    }))))(o, d, i, l.schema) : et(u) ? ((p, x, g, y) => x.filter(((h) => typeof h == "number")).map(((h) => ({ rootName: p.rootName, rootType: p.rootCategory, value: h, structName: g, param: y }))))(o, d, i, l.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, K = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: aa(a.scalarArrays, a.name, e), scalar: ft(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: aa(a.scalarArrays, a.name, e)
}, aa = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), ft = (a, e, t) => ({ jsonPathJS: t(a), record: e }), vt = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: bt(e, t, s)
}), bt = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? K(r.scalars, n) : void 0, o = r.structs.items.map(((c) => K(c, n))), i = r.structArrays.items.map(((c) => K(c, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(lt("args", a.command, s, e), t))), xt = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, st(r.params)]))))(a.schema.structs);
  return Nt(a.pluginName, a.schema.commands, t, e);
}, Nt = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, vt(a, r, t, s)])), Tt = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: yt(m, o.extractors) }))(Ka(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, os = (a) => {
  const e = new Map(a);
  return new W(e);
}, is = () => new W(/* @__PURE__ */ new Map()), cs = (a) => {
  const e = a.flatMap(((t) => xt(t, ((s) => new za(s)))));
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
    return We(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return Qe(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return Ze(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Tt(e, this._commandMap);
    return t.args.filter(wt).map(((s) => ({
      code: _,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return G(e, ((t) => this.extractArgs(t)));
  }
}
const wt = (a) => typeof a.value == "string", ls = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), H = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), ds = (a) => [H(a, "faceName", "faces"), H(a, "characterName", "characters"), H(a, "battlerName", "sv_actors")], ps = (a, e, t, s, r, n) => [...La(t, s), ...Ua(a, e), ...Va(r, n)], us = (a, e) => oa(qa(e), a), gs = (a, e, t) => {
  const s = Ja(e);
  return oa(t ? [...s, ...t] : s, a);
}, It = (a, e, t, s) => {
  if (a.code === $ || a.code === C || a.code === R) return;
  const r = ba(a.code);
  return r ? r(t, e, s) : a.code === P ? kt(a) : a.code === X || a.code === Y || a.code === O ? Bt(a) : a.code !== na ? a : void 0;
}, kt = (a) => ({
  code: P,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Bt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), St = (a) => ({ code: F, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Mt = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: $,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Et(a.header), t];
}, At = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: C, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, Et = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, j = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: St, showMessage: Mt, showScrollingText: At };
    return s.map(((n, m) => n.code === _ ? n : It(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === _ ? e.pluginCommand(s) : s.code === F ? e.scriptCommand(s) : De(s, t)));
}, ys = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: j(t.list, e) })))
}), hs = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: j(s.list, t) }))) };
}, fs = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: j(a.list, e)
}), vs = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: j(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), bs = (a, e) => Sa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), xs = (a, e) => Sa(a, e), Sa = (a, e) => ({
  note: M(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: M(s.note, r), pages: s.pages.map(((n) => ({
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
  vs as $,
  te as A,
  Qa as B,
  Za as C,
  ms as D,
  G as E,
  ae as F,
  _t as G,
  Wa as H,
  se as I,
  re as J,
  ee as K,
  Oa as L,
  Jt as M,
  ve as N,
  be as O,
  Se as P,
  Xt as Q,
  Yt as R,
  Vt as S,
  U as T,
  ye as U,
  Ut as V,
  Zt as W,
  es as X,
  De as Y,
  Wt as Z,
  fs as _,
  ps as a,
  Gt as a0,
  Qt as a1,
  j as a2,
  da as a3,
  xs as a4,
  qt as a5,
  bs as a6,
  _e as a7,
  ss as a8,
  pa as a9,
  as as aa,
  ts as ab,
  rs as ac,
  ns as ad,
  $e as ae,
  ys as af,
  hs as ag,
  zt as ah,
  V as ai,
  J as aj,
  Be as ak,
  Ot as b,
  xe as c,
  la as d,
  gs as e,
  us as f,
  he as g,
  ge as h,
  Lt as i,
  is as j,
  os as k,
  cs as l,
  Qe as m,
  Ze as n,
  ds as o,
  ls as p,
  ue as q,
  ia as r,
  Kt as s,
  Ht as t,
  We as u,
  Ya as v,
  Tt as w,
  A as x,
  Xa as y,
  Ha as z
};
