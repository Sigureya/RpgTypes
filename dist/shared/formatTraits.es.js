import { da as G, db as j, dc as z, V as w, T as k, U as B, cT as F, aY as D, aX as E, aT as A, z as b, A as h, C as l, u, v, S as f, m as H, s as L, q as J, p as K, l as O, b as P, y as $, bb as C, cP as M, cQ as Q, d3 as X, d9 as Y, d8 as Z, d5 as _, bg as W, bf as ee, d1 as se, r as te, cz as ae } from "./make.es3.js";
import { m as R } from "./mergeItemsSource.es.js";
const V = (e, s, a) => e.reduce((r, n) => (n.code !== w && n.code !== k && n.code !== B || r.push(ne(n, s, a)), r), []), re = {
  [B]: "weapon",
  [w]: "armor",
  [k]: "item"
}, ne = (e, s, a) => {
  const r = e.parameters[3] === G ? { direct: !0, value: e.parameters[2] } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === j ? s.gain : e.parameters[0] === z ? s.lose : s.unknown;
  return { itemKind: re[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: n, includesEquip: e.parameters[4], ...r };
}, oe = (e) => !!e, T = (e, s) => e.pages.map((a, r) => s(a, r, e)), U = (e, s) => e.events.filter(oe).flatMap((a) => T(a, s)), Ce = (e, s, a) => U(e.map, (r, n, o) => ({
  ...me(r),
  commands: V(r.list, s, a),
  eventName: o.name,
  pageIndex: n
})), me = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Me = (e, s, a) => {
  return r = (n, o, m) => ({
    commands: V(n.list, s, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: o
  }), e.flatMap((n) => T(n, r));
  var r;
}, t = (e, s) => {
  const a = e.trimEnd(), r = s.get(a);
  return r !== void 0 ? r.trimEnd() : a;
}, d = (e, s, a = `
`) => F(e.note, (r) => t(r.value, s), a), Re = (e, s) => {
  const a = d(e, s), r = t(e.name, s), n = t(e.nickname, s), o = t(e.profile, s);
  return { ...e, name: r, nickname: n, profile: o, note: a };
}, Ve = (e, s) => {
  const a = d(e, s), r = t(e.name, s);
  return { ...e, name: r, note: a };
}, Ue = (e, s) => {
  const a = d(e, s), r = t(e.name, s);
  return { ...e, name: r, note: a };
}, Se = (e, s) => {
  const a = d(e, s), r = t(e.name, s), n = t(e.description, s), o = t(e.message1, s), m = t(e.message2, s);
  return { ...e, name: r, description: n, message1: o, message2: m, note: a };
}, qe = (e, s) => {
  const a = d(e, s), r = t(e.name, s), n = t(e.description, s);
  return { ...e, name: r, description: n, note: a };
}, Ge = (e, s) => {
  const a = d(e, s), r = t(e.name, s), n = t(e.message1, s), o = t(e.message2, s), m = t(e.message3, s), p = t(e.message4, s);
  return { ...e, name: r, message1: n, message2: o, message3: m, message4: p, note: a };
}, x = (e, s) => e.map((a) => {
  switch (a.code) {
    case f:
      return de(a, s);
    case v:
      return pe(a, s);
    case u:
    case l:
    case h:
    case b:
      return ie(a, s);
    case A:
    case E:
    case D:
      return ce(a, s);
    default:
      return a;
  }
}), ie = (e, s) => {
  const a = t(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, de = (e, s) => {
  const a = t(e.parameters[4], s);
  return H({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, ce = (e, s) => {
  const a = t(e.parameters[1], s);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, pe = (e, s) => {
  const a = e.parameters[0].map((r) => t(r, s));
  return {
    code: v,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, je = (e, s) => {
  const a = e.pages.map((r) => ({ list: x(r.list, s), conditions: r.conditions, span: r.span }));
  return { ...e, pages: a };
}, ze = (e, s) => ({ ...e, list: x(e.list, s) }), Fe = (e, s) => {
  const a = t(e.displayName, s), r = d(e, s), n = { displayName: a, events: L(e, (o) => x(o, s)), note: r };
  return { ...e, ...n };
}, ue = (e, s) => ({
  params: ye(e.params, s),
  messages: he(e.messages, s),
  commands: ge(e.commands, s),
  basic: le(e.basic, s)
}), le = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], ge = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s), t(e[10], s), t(e[11], s), t(e[12], s), t(e[13], s), t(e[14], s), t(e[15], s), t(e[16], s), t(e[17], s), t(e[18], s), t(e[19], s), "", t(e[21], s), t(e[22], s), "", t(e[24], s), t(e[25], s)], ye = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], he = (e, s) => ({
  actionFailure: t(e.actionFailure, s),
  actorDamage: t(e.actorDamage, s),
  actorDrain: t(e.actorDrain, s),
  actorGain: t(e.actorGain, s),
  actorLoss: t(e.actorLoss, s),
  actorNoDamage: t(e.actorNoDamage, s),
  actorNoHit: t(e.actorNoHit, s),
  actorRecovery: t(e.actorRecovery, s),
  alwaysDash: t(e.alwaysDash, s),
  autosave: t(e.autosave, s),
  bgmVolume: t(e.bgmVolume, s),
  bgsVolume: t(e.bgsVolume, s),
  buffAdd: t(e.buffAdd, s),
  buffRemove: t(e.buffRemove, s),
  commandRemember: t(e.commandRemember, s),
  counterAttack: t(e.counterAttack, s),
  criticalToActor: t(e.criticalToActor, s),
  criticalToEnemy: t(e.criticalToEnemy, s),
  defeat: t(e.defeat, s),
  debuffAdd: t(e.debuffAdd, s),
  emerge: t(e.emerge, s),
  enemyDamage: t(e.enemyDamage, s),
  enemyDrain: t(e.enemyDrain, s),
  enemyGain: t(e.enemyGain, s),
  enemyLoss: t(e.enemyLoss, s),
  enemyNoDamage: t(e.enemyNoDamage, s),
  enemyNoHit: t(e.enemyNoHit, s),
  enemyRecovery: t(e.enemyRecovery, s),
  escapeFailure: t(e.escapeFailure, s),
  escapeStart: t(e.escapeStart, s),
  evasion: t(e.evasion, s),
  expNext: t(e.expNext, s),
  expTotal: t(e.expTotal, s),
  file: t(e.file, s),
  loadMessage: t(e.loadMessage, s),
  levelUp: t(e.levelUp, s),
  magicEvasion: t(e.magicEvasion, s),
  magicReflection: t(e.magicReflection, s),
  meVolume: t(e.meVolume, s),
  obtainExp: t(e.obtainExp, s),
  obtainGold: t(e.obtainGold, s),
  obtainItem: t(e.obtainItem, s),
  obtainSkill: t(e.obtainSkill, s),
  partyName: t(e.partyName, s),
  possession: t(e.possession, s),
  preemptive: t(e.preemptive, s),
  saveMessage: t(e.saveMessage, s),
  seVolume: t(e.seVolume, s),
  substitute: t(e.substitute, s),
  surprise: t(e.surprise, s),
  touchUI: t(e.touchUI, s),
  useItem: t(e.useItem, s),
  victory: t(e.victory, s)
}), He = (e, s) => ({
  ...e,
  gameTitle: t(e.gameTitle, s),
  currencyUnit: t(e.currencyUnit, s),
  elements: c(e.elements, s),
  skillTypes: c(e.skillTypes, s),
  weaponTypes: c(e.weaponTypes, s),
  armorTypes: c(e.armorTypes, s),
  equipTypes: c(e.equipTypes, s),
  terms: ue(e.terms, s)
}), c = (e, s) => e.map((a) => t(a, s)), S = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class q {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return S(this.joinCommandBodies());
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
class I {
  constructor(s, a, r) {
    this.bodyCode = s, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const s = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [s] : [s, this.mergedBody()];
  }
  getBodyText() {
    return S(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const g = (e, s, a, r) => {
  const n = e[s];
  if (!a(n)) throw new Error(`Invalid head at index ${s}: ${JSON.stringify(n)}`);
  const o = [];
  for (let m = s + 1; m < e.length; m++) {
    const p = e[m];
    if (!r(p)) break;
    o.push(p);
  }
  return { header: n, bodies: o };
}, be = (e, s) => {
  const { bodies: a, header: r } = ((n, o) => g(n, o, (m) => m.code === l, (m) => m.code === h))(e, s);
  return ve(r) ? new I(h, r, a) : new q(r, a);
}, ve = (e) => e.parameters[0] === "選択肢ヘルプ", fe = (e, s) => {
  const { bodies: a, header: r } = ((n, o) => g(n, o, (m) => m.code === f, (m) => m.code === u))(e, s);
  return new I(u, r, a);
}, Te = (e, s) => {
  const { bodies: a, header: r } = ((n, o) => g(n, o, K, J))(e, s);
  return new q(r, a);
}, xe = (e, s) => {
  const { bodies: a, header: r } = ((n, o) => g(n, o, P, O))(e, s);
  return new I(b, r, a);
}, Ie = {
  [f]: (e, s, a) => a.showMessage(fe(e, s), s, e),
  [C]: (e, s, a) => a.script(Te(e, s), s, e),
  [l]: (e, s, a) => a.comment(be(e, s), s, e),
  [$]: (e, s, a) => a.showScrollingText(xe(e, s), s, e)
}, Ne = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), we = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), N = (e) => e.reduce((s, a, r) => {
  if (a.code === v) return [...s, ...we(a)];
  const n = (o = a.code, Ie[o]);
  var o;
  if (n) {
    const m = n(e, r, ke);
    if (m !== void 0) return [...s, m];
  }
  return a.code === E || a.code === A || a.code === D ? [...s, Ne(a)] : s;
}, []), ke = { comment: (e) => ({ code: l, paramIndex: 0, value: e.getBodyText() }), showMessage: (e) => {
  return { code: u, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var s, a;
}, script: (e) => ((s) => ({ code: C, paramIndex: 0, value: s.getBodyText() }))(e), showScrollingText: (e) => ((s) => ({
  code: b,
  paramIndex: 0,
  value: s.getBodyText()
}))(e) }, Le = (e) => {
  return s = (a, r, { id: n }) => ({ eventId: n, commands: N(a.list) }), e.map((a) => s(a, 0, a));
  var s;
}, Je = (e) => ((s, a) => s.map((r) => T(r, a)))(e, (s, a, { id: r }) => ({
  eventId: r,
  pageIndex: a,
  commands: N(s.list)
})), Ke = (e) => ({ note: e.note, noteItems: M(e.note), displayedName: e.displayName, events: Be(e) }), Be = (e) => U(e, (s, a, r) => ({
  eventId: r.id,
  pageIndex: a,
  commands: N(s.list),
  note: r.note,
  noteItems: M(r.note),
  name: r.name
})), Oe = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), y = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), Pe = (e) => [y(e, "faceName", "faces"), y(e, "characterName", "characters"), y(e, "battlerName", "sv_actors")], i = (e, s) => ({
  note: De(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), De = (e) => Q(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), $e = (e) => i(e, ["name", "nickname", "profile"]), Qe = (e) => i(e, ["name"]), Xe = (e) => i(e, ["name"]), Ye = (e) => i(e, ["name", "description", "message1", "message2"]), Ze = (e) => i(e, ["name", "description"]), _e = (e) => i(e, ["name", "description"]), We = (e) => i(e, ["name", "description"]), es = (e) => i(e, ["name", "message1", "message2", "message3", "message4"]), ss = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: _(e.terms.basic),
    commands: Z(e.terms.commands),
    messages: Y(e.terms.messages),
    params: X(e.terms.params)
  }
}), ts = (e, s, a, r, n, o) => [...W(a, r), ...ee(e, s), ...se(n, o)], as = (e, s) => R(te(s), e), rs = (e, s, a) => {
  const r = ae(s);
  return R(a ? [...r, ...a] : r, e);
};
export {
  Pe as A,
  Oe as B,
  De as C,
  i as D,
  $e as E,
  We as F,
  Xe as G,
  Qe as H,
  Ze as I,
  Ye as J,
  es as K,
  _e as L,
  ss as M,
  ts as N,
  as as O,
  rs as P,
  V as a,
  Ce as b,
  Me as c,
  qe as d,
  ne as e,
  Ue as f,
  Ve as g,
  Se as h,
  Ge as i,
  ze as j,
  je as k,
  x as l,
  ie as m,
  ce as n,
  pe as o,
  de as p,
  Fe as q,
  Re as r,
  d as s,
  t,
  ue as u,
  He as v,
  Je as w,
  Le as x,
  N as y,
  Ke as z
};
