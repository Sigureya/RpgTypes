import { da as q, db as G, dc as j, V as I, T as N, U as w, cT as z, aY as k, aX as B, aT as D, z as y, A as g, C as p, u as c, v as E, S as h, m as F, s as H, q as L, p as J, l as $, b as K, y as O, bb as A, cP as C, cQ as P, d3 as Q, d9 as X, d8 as Y, d5 as Z, bg as _, bf as W, d1 as ee, r as se, cz as te } from "./make.es3.js";
import { m as R } from "./mergeItemsSource.es.js";
const V = (e, s, a) => e.reduce((r, o) => (o.code !== I && o.code !== N && o.code !== w || r.push(re(o, s, a)), r), []), ae = {
  [w]: "weapon",
  [I]: "armor",
  [N]: "item"
}, re = (e, s, a) => {
  const r = e.parameters[3] === q ? { direct: !0, value: e.parameters[2] } : { direct: !1, variableId: e.parameters[2] }, o = e.parameters[0] === G ? s.gain : e.parameters[0] === j ? s.lose : s.unknown;
  return { itemKind: ae[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: o, includesEquip: e.parameters[4], ...r };
}, oe = (e) => !!e, b = (e, s) => e.pages.map((a, r) => s(a, r, e)), M = (e, s) => e.events.filter(oe).flatMap((a) => b(a, s)), Ce = (e, s, a) => M(e.map, (r, o, n) => ({
  ...ne(r),
  commands: V(r.list, s, a),
  eventName: n.name,
  pageIndex: o
})), ne = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Re = (e, s, a) => {
  return r = (o, n, m) => ({
    commands: V(o.list, s, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((o) => b(o, r));
  var r;
}, t = (e, s) => {
  const a = e.trimEnd(), r = s.get(a);
  return r !== void 0 ? r.trimEnd() : a;
}, me = (e, s, a = `
`) => z(e.note, (r) => t(r.value, s), a), v = (e, s) => e.map((a) => {
  switch (a.code) {
    case h:
      return de(a, s);
    case E:
      return pe(a, s);
    case c:
    case p:
    case g:
    case y:
      return ie(a, s);
    case D:
    case B:
    case k:
      return ce(a, s);
    default:
      return a;
  }
}), ie = (e, s) => {
  const a = t(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, de = (e, s) => {
  const a = t(e.parameters[4], s);
  return F({ facename: e.parameters[0], faceIndex: e.parameters[1], background: e.parameters[2], positionType: e.parameters[3], speakerName: a }, e.indent);
}, ce = (e, s) => {
  const a = t(e.parameters[1], s);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], a] };
}, pe = (e, s) => {
  const a = e.parameters[0].map((r) => t(r, s));
  return {
    code: e.code,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ve = (e, s) => {
  const a = e.pages.map((r) => ({
    list: v(r.list, s),
    conditions: r.conditions,
    span: r.span
  }));
  return { ...e, pages: a };
}, Me = (e, s) => ({ ...e, list: v(e.list, s) }), Ue = (e, s) => {
  const a = t(e.displayName, s), r = me(e, s), o = { displayName: a, events: H(e, (n) => v(n, s)), note: r };
  return {
    ...e,
    ...o
  };
}, le = (e, s) => ({
  params: ye(e.params, s),
  messages: he(e.messages, s),
  commands: ge(e.commands, s),
  basic: ue(e.basic, s)
}), ue = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], ge = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s), t(e[10], s), t(e[11], s), t(e[12], s), t(e[13], s), t(e[14], s), t(e[15], s), t(e[16], s), t(e[17], s), t(e[18], s), t(e[19], s), "", t(e[21], s), t(e[22], s), "", t(e[24], s), t(e[25], s)], ye = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], he = (e, s) => ({
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
}), Se = (e, s) => ({
  ...e,
  gameTitle: t(e.gameTitle, s),
  currencyUnit: t(e.currencyUnit, s),
  elements: d(e.elements, s),
  skillTypes: d(e.skillTypes, s),
  weaponTypes: d(e.weaponTypes, s),
  armorTypes: d(e.armorTypes, s),
  equipTypes: d(e.equipTypes, s),
  terms: le(e.terms, s)
}), d = (e, s) => e.map((a) => t(a, s)), U = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class S {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return U(this.joinCommandBodies());
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
class f {
  constructor(s, a, r) {
    this.bodyCode = s, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const s = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [s] : [s, this.mergedBody()];
  }
  getBodyText() {
    return U(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const l = (e, s, a, r) => {
  const o = e[s];
  if (!a(o)) throw new Error(`Invalid head at index ${s}: ${JSON.stringify(o)}`);
  const n = [];
  for (let m = s + 1; m < e.length; m++) {
    const x = e[m];
    if (!r(x)) break;
    n.push(x);
  }
  return { header: o, bodies: n };
}, be = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, (m) => m.code === p, (m) => m.code === g))(e, s);
  return ve(r) ? new f(g, r, a) : new S(r, a);
}, ve = (e) => e.parameters[0] === "選択肢ヘルプ", fe = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, (m) => m.code === h, (m) => m.code === c))(e, s);
  return new f(c, r, a);
}, Te = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, J, L))(e, s);
  return new S(r, a);
}, xe = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, K, $))(e, s);
  return new f(y, r, a);
}, Ie = {
  [h]: (e, s, a) => a.showMessage(fe(e, s), s, e),
  [A]: (e, s, a) => a.script(Te(e, s), s, e),
  [p]: (e, s, a) => a.comment(be(e, s), s, e),
  [O]: (e, s, a) => a.showScrollingText(xe(e, s), s, e)
}, Ne = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), we = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), T = (e) => e.reduce((s, a, r) => {
  if (a.code === E) return [...s, ...we(a)];
  const o = (n = a.code, Ie[n]);
  var n;
  if (o) {
    const m = o(e, r, ke);
    if (m !== void 0) return [...s, m];
  }
  return a.code === B || a.code === D || a.code === k ? [...s, Ne(a)] : s;
}, []), ke = { comment: (e) => ({ code: p, paramIndex: 0, value: e.getBodyText() }), showMessage: (e) => {
  return { code: c, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var s, a;
}, script: (e) => ((s) => ({ code: A, paramIndex: 0, value: s.getBodyText() }))(e), showScrollingText: (e) => ((s) => ({
  code: y,
  paramIndex: 0,
  value: s.getBodyText()
}))(e) }, qe = (e) => {
  return s = (a, r, { id: o }) => ({ eventId: o, commands: T(a.list) }), e.map((a) => s(a, 0, a));
  var s;
}, Ge = (e) => ((s, a) => s.map((r) => b(r, a)))(e, (s, a, { id: r }) => ({
  eventId: r,
  pageIndex: a,
  commands: T(s.list)
})), je = (e) => ({ note: e.note, noteItems: C(e.note), displayedName: e.displayName, events: Be(e) }), Be = (e) => M(e, (s, a, r) => ({
  eventId: r.id,
  pageIndex: a,
  commands: T(s.list),
  note: r.note,
  noteItems: C(r.note),
  name: r.name
})), ze = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), u = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), Fe = (e) => [u(e, "faceName", "faces"), u(e, "characterName", "characters"), u(e, "battlerName", "sv_actors")], i = (e, s) => ({
  note: De(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), De = (e) => P(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), He = (e) => i(e, ["name", "nickname", "profile"]), Le = (e) => i(e, ["name"]), Je = (e) => i(e, ["name"]), $e = (e) => i(e, ["name", "description", "message1", "message2"]), Ke = (e) => i(e, ["name", "description"]), Oe = (e) => i(e, ["name", "description"]), Pe = (e) => i(e, ["name", "description"]), Qe = (e) => i(e, ["name", "message1", "message2", "message3", "message4"]), Xe = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Z(e.terms.basic),
    commands: Y(e.terms.commands),
    messages: X(e.terms.messages),
    params: Q(e.terms.params)
  }
}), Ye = (e, s, a, r, o, n) => [..._(a, r), ...W(e, s), ...ee(o, n)], Ze = (e, s) => R(se(s), e), _e = (e, s, a) => {
  const r = te(s);
  return R(a ? [...r, ...a] : r, e);
};
export {
  Je as A,
  Le as B,
  Ke as C,
  $e as D,
  Qe as E,
  Oe as F,
  Xe as G,
  Ye as H,
  Ze as I,
  _e as J,
  V as a,
  Ce as b,
  Re as c,
  Ve as d,
  re as e,
  v as f,
  ie as g,
  ce as h,
  pe as i,
  de as j,
  Ue as k,
  me as l,
  t as m,
  le as n,
  Se as o,
  Ge as p,
  qe as q,
  Me as r,
  T as s,
  je as t,
  Fe as u,
  ze as v,
  De as w,
  i as x,
  He as y,
  Pe as z
};
