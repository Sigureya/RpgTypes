import { d6 as q, d7 as G, d8 as j, V as I, T as N, U as w, cP as F, aU as k, aT as B, aP as D, z as g, A as y, C as p, u as c, v as E, S as h, m as H, s as L, q as z, p as $, l as J, b as P, y as Z, b7 as A, cL as C, cM as K, c$ as O, d5 as _, d4 as Q, d1 as W, bc as X, bb as Y, cZ as ee, r as se, cv as te } from "./make.es3.js";
import { m as M } from "./mergeItemsSource.es.js";
const R = (e, s, a) => e.reduce((r, o) => (o.code !== I && o.code !== N && o.code !== w || r.push(re(o, s, a)), r), []), ae = {
  [w]: "weapon",
  [I]: "armor",
  [N]: "item"
}, re = (e, s, a) => {
  const r = e.parameters[3] === q ? { direct: !0, value: e.parameters[2] } : { direct: !1, variableId: e.parameters[2] }, o = e.parameters[0] === G ? s.gain : e.parameters[0] === j ? s.lose : s.unknown;
  return { itemKind: ae[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: o, includesEquip: e.parameters[4], ...r };
}, oe = (e) => !!e, b = (e, s) => e.pages.map((a, r) => s(a, r, e)), U = (e, s) => e.events.filter(oe).flatMap((a) => b(a, s)), Ce = (e, s, a) => U(e.map, (r, o, n) => ({
  ...ne(r),
  commands: R(r.list, s, a),
  eventName: n.name,
  pageIndex: o
})), ne = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Me = (e, s, a) => {
  return r = (o, n, m) => ({
    commands: R(o.list, s, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((o) => b(o, r));
  var r;
}, t = (e, s) => {
  const a = e.trimEnd(), r = s.get(a);
  return r !== void 0 ? r.trimEnd() : a;
}, me = (e, s, a = `
`) => F(e.note, (r) => t(r.value, s), a), v = (e, s) => e.map((a) => {
  switch (a.code) {
    case h:
      return de(a, s);
    case E:
      return pe(a, s);
    case c:
    case p:
    case y:
    case g:
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
  return H({ facename: e.parameters[0], faceIndex: e.parameters[1], background: e.parameters[2], positionType: e.parameters[3], speakerName: a }, e.indent);
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
}, Re = (e, s) => {
  const a = e.pages.map((r) => ({
    list: v(r.list, s),
    conditions: r.conditions,
    span: r.span
  }));
  return { ...e, pages: a };
}, Ue = (e, s) => ({ ...e, list: v(e.list, s) }), Ve = (e, s) => {
  const a = t(e.displayName, s), r = me(e, s), o = { displayName: a, events: L(e, (n) => v(n, s)), note: r };
  return {
    ...e,
    ...o
  };
}, le = (e, s) => ({
  params: ge(e.params, s),
  messages: he(e.messages, s),
  commands: ye(e.commands, s),
  basic: ue(e.basic, s)
}), ue = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], ye = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s), t(e[10], s), t(e[11], s), t(e[12], s), t(e[13], s), t(e[14], s), t(e[15], s), t(e[16], s), t(e[17], s), t(e[18], s), t(e[19], s), "", t(e[21], s), t(e[22], s), "", t(e[24], s), t(e[25], s)], ge = (e, s) => [t(e[0], s), t(e[1], s), t(e[2], s), t(e[3], s), t(e[4], s), t(e[5], s), t(e[6], s), t(e[7], s), t(e[8], s), t(e[9], s)], he = (e, s) => ({
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
}), d = (e, s) => e.map((a) => t(a, s)), V = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class S {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return V(this.joinCommandBodies());
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
    return V(this.bodies);
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
  const { bodies: a, header: r } = ((o, n) => l(o, n, (m) => m.code === p, (m) => m.code === y))(e, s);
  return ve(r) ? new f(y, r, a) : new S(r, a);
}, ve = (e) => e.parameters[0] === "選択肢ヘルプ", fe = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, (m) => m.code === h, (m) => m.code === c))(e, s);
  return new f(c, r, a);
}, Te = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, $, z))(e, s);
  return new S(r, a);
}, xe = (e, s) => {
  const { bodies: a, header: r } = ((o, n) => l(o, n, P, J))(e, s);
  return new f(g, r, a);
}, Ie = {
  [h]: (e, s, a) => a.showMessage(fe(e, s), s, e),
  [A]: (e, s, a) => a.script(Te(e, s), s, e),
  [p]: (e, s, a) => a.comment(be(e, s), s, e),
  [Z]: (e, s, a) => a.showScrollingText(xe(e, s), s, e)
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
  code: g,
  paramIndex: 0,
  value: s.getBodyText()
}))(e) }, qe = (e) => {
  return s = (a, r, { id: o }) => ({ eventId: o, commands: T(a.list) }), e.map((a) => s(a, 0, a));
  var s;
}, Ge = (e) => ((s, a) => s.map((r) => b(r, a)))(e, (s, a, { id: r }) => ({
  eventId: r,
  pageIndex: a,
  commands: T(s.list)
})), je = (e) => ({ note: e.note, noteItems: C(e.note), displayedName: e.displayName, events: Be(e) }), Be = (e) => U(e, (s, a, r) => ({
  eventId: r.id,
  pageIndex: a,
  commands: T(s.list),
  note: r.note,
  noteItems: C(r.note),
  name: r.name
})), Fe = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), u = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), He = (e) => [u(e, "faceName", "faces"), u(e, "characterName", "characters"), u(e, "battlerName", "sv_actors")], i = (e, s) => ({
  note: De(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), De = (e) => K(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), Le = (e) => i(e, ["name", "nickname", "profile"]), ze = (e) => i(e, ["name"]), $e = (e) => i(e, ["name"]), Je = (e) => i(e, ["name", "description", "message1", "message2"]), Pe = (e) => i(e, ["name", "description"]), Ze = (e) => i(e, ["name", "description"]), Ke = (e) => i(e, ["name", "description"]), Oe = (e) => i(e, ["name", "message1", "message2", "message3", "message4"]), _e = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: W(e.terms.basic),
    commands: Q(e.terms.commands),
    messages: _(e.terms.messages),
    params: O(e.terms.params)
  }
}), Qe = (e, s, a, r, o, n) => [...X(a, r), ...Y(e, s), ...ee(o, n)], We = (e, s) => M(se(s), e), Xe = (e, s, a) => {
  const r = te(s);
  return M(a ? [...r, ...a] : r, e);
};
export {
  $e as A,
  ze as B,
  Pe as C,
  Je as D,
  Oe as E,
  Ze as F,
  _e as G,
  Qe as H,
  We as I,
  Xe as J,
  R as a,
  Ce as b,
  Me as c,
  Re as d,
  re as e,
  v as f,
  ie as g,
  ce as h,
  pe as i,
  de as j,
  Ve as k,
  me as l,
  t as m,
  le as n,
  Se as o,
  Ge as p,
  qe as q,
  Ue as r,
  T as s,
  je as t,
  He as u,
  Fe as v,
  De as w,
  i as x,
  Le as y,
  Ke as z
};
