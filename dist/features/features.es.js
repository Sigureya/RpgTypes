import { cZ as me, cY as de, c$ as pe, B as R, z as _, A as V, cF as le, aK as U, aJ as L, aF as O, i as b, j as F, C as v, c as h, d as S, S as C, m as ue, b as ye, a_ as ge, aZ as D, h as G, b0 as fe, cB as z, cC as xe, cR as be, cX as he, cW as Te, cT as ke, b2 as ve, b1 as Ie, cP as Ne, r as we, cl as je } from "../shared/make.es3.js";
import { m as Z } from "../shared/mergeItemsSource.es.js";
import { l as Fe } from "../shared/lookupRpgDataKind.es.js";
const H = (e, a, t) => e.reduce((s, n) => (n.code !== R && n.code !== _ && n.code !== V || s.push(Ce(n, a, t)), s), []), Se = { [V]: "weapon", [R]: "armor", [_]: "item" }, Ce = (e, a, t) => {
  const s = e.parameters[3] === me ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === de ? a.gain : e.parameters[0] === pe ? a.lose : a.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Se[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: t(e.code), operation: n, ...o, ...s };
}, De = (e) => !!e, E = (e, a) => e.pages.map((t, s) => a(t, s, e)), W = (e, a) => e.events.filter(De).flatMap((t) => E(t, a)), Ta = (e, a, t) => W(e.map, (s, n, o) => ({
  ...Ee(s),
  commands: H(s.list, a, t),
  eventName: o.name,
  pageIndex: n
})), Ee = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, ka = (e, a, t) => {
  return s = (n, o, c) => ({
    commands: H(n.list, a, t),
    eventName: c.name,
    troopId: c.id,
    pageIndex: o
  }), e.flatMap((n) => E(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, g = (e, a, t = `
`) => le(e.note, (s) => r(s.value, a), t), va = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.nickname, a), o = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: o, note: t };
}, Ia = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, Na = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, wa = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a), o = r(e.message1, a), c = r(e.message2, a);
  return { ...e, name: s, description: n, message1: o, message2: c, note: t };
}, ja = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, Fa = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.message1, a), o = r(e.message2, a), c = r(e.message3, a), p = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: o, message3: c, message4: p, note: t };
}, P = (e, a) => e.map((t) => {
  switch (t.code) {
    case C:
      return qe(t, a);
    case S:
      return Ae(t, a);
    case h:
    case v:
    case F:
    case b:
      return Pe(t, a);
    case O:
    case L:
    case U:
      return Be(t, a);
    default:
      return t;
  }
}), Pe = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, qe = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return ue({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Be = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Ae = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: S,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Sa = (e, a) => {
  const t = e.pages.map((s) => ({ list: P(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, Ca = (e, a) => ({ ...e, list: P(e.list, a) }), Da = (e, a) => {
  const t = r(e.displayName, a), s = g(e, a), n = { displayName: t, events: ye(e, (o) => P(o, a)), note: s };
  return { ...e, ...n };
}, Me = (e, a) => ({
  params: _e(e.params, a),
  messages: Ve(e.messages, a),
  commands: Re(e.commands, a),
  basic: $e(e.basic, a)
}), $e = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Re = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], _e = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Ve = (e, a) => ({
  actionFailure: r(e.actionFailure, a),
  actorDamage: r(e.actorDamage, a),
  actorDrain: r(e.actorDrain, a),
  actorGain: r(e.actorGain, a),
  actorLoss: r(e.actorLoss, a),
  actorNoDamage: r(e.actorNoDamage, a),
  actorNoHit: r(e.actorNoHit, a),
  actorRecovery: r(e.actorRecovery, a),
  alwaysDash: r(e.alwaysDash, a),
  autosave: r(e.autosave, a),
  bgmVolume: r(e.bgmVolume, a),
  bgsVolume: r(e.bgsVolume, a),
  buffAdd: r(e.buffAdd, a),
  buffRemove: r(e.buffRemove, a),
  commandRemember: r(e.commandRemember, a),
  counterAttack: r(e.counterAttack, a),
  criticalToActor: r(e.criticalToActor, a),
  criticalToEnemy: r(e.criticalToEnemy, a),
  defeat: r(e.defeat, a),
  debuffAdd: r(e.debuffAdd, a),
  emerge: r(e.emerge, a),
  enemyDamage: r(e.enemyDamage, a),
  enemyDrain: r(e.enemyDrain, a),
  enemyGain: r(e.enemyGain, a),
  enemyLoss: r(e.enemyLoss, a),
  enemyNoDamage: r(e.enemyNoDamage, a),
  enemyNoHit: r(e.enemyNoHit, a),
  enemyRecovery: r(e.enemyRecovery, a),
  escapeFailure: r(e.escapeFailure, a),
  escapeStart: r(e.escapeStart, a),
  evasion: r(e.evasion, a),
  expNext: r(e.expNext, a),
  expTotal: r(e.expTotal, a),
  file: r(e.file, a),
  loadMessage: r(e.loadMessage, a),
  levelUp: r(e.levelUp, a),
  magicEvasion: r(e.magicEvasion, a),
  magicReflection: r(e.magicReflection, a),
  meVolume: r(e.meVolume, a),
  obtainExp: r(e.obtainExp, a),
  obtainGold: r(e.obtainGold, a),
  obtainItem: r(e.obtainItem, a),
  obtainSkill: r(e.obtainSkill, a),
  partyName: r(e.partyName, a),
  possession: r(e.possession, a),
  preemptive: r(e.preemptive, a),
  saveMessage: r(e.saveMessage, a),
  seVolume: r(e.seVolume, a),
  substitute: r(e.substitute, a),
  surprise: r(e.surprise, a),
  touchUI: r(e.touchUI, a),
  useItem: r(e.useItem, a),
  victory: r(e.victory, a)
}), Ea = (e, a) => ({
  ...e,
  gameTitle: r(e.gameTitle, a),
  currencyUnit: r(e.currencyUnit, a),
  elements: f(e.elements, a),
  skillTypes: f(e.skillTypes, a),
  weaponTypes: f(e.weaponTypes, a),
  armorTypes: f(e.armorTypes, a),
  equipTypes: f(e.equipTypes, a),
  terms: Me(e.terms, a)
}), f = (e, a) => e.map((t) => r(t, a)), J = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class K {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return J(this.joinCommandBodies());
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
class q {
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return J(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const I = (e, a, t, s) => {
  const n = e[a];
  if (!t(n)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(n)}`);
  const o = [];
  for (let c = a + 1; c < e.length; c++) {
    const p = e[c];
    if (!s(p)) break;
    o.push(p);
  }
  return { header: n, bodies: o };
}, Ue = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => I(n, o, (c) => c.code === v, (c) => c.code === F))(e, a);
  return Le(s) ? new q(F, s, t) : new K(s, t);
}, Le = (e) => e.parameters[0] === "選択肢ヘルプ", Oe = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => I(n, o, (c) => c.code === C, (c) => c.code === h))(e, a);
  return new q(h, s, t);
}, Ge = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => I(n, o, (c) => c.code === D, (c) => c.code === ge))(e, a);
  return new K(s, t);
}, ze = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => I(n, o, (c) => c.code === G, (c) => c.code === b))(e, a);
  return new q(b, s, t);
}, Ze = {
  [C]: (e, a, t) => t.showMessage(Oe(e, a), a, e),
  [D]: (e, a, t) => t.script(Ge(e, a), a, e),
  [v]: (e, a, t) => t.comment(Ue(e, a), a, e),
  [G]: (e, a, t) => t.showScrollingText(ze(e, a), a, e)
}, w = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), He = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), Pa = (e) => X(e, () => []), B = (e, a) => X(e, a), X = (e, a) => e.reduce((t, s, n) => {
  if (s.code === S) return [...t, ...He(s)];
  const o = (c = s.code, Ze[c]);
  var c;
  if (o) {
    const p = o(e, n, We);
    if (p !== void 0) return [...t, p];
  }
  if (s.code === L) return [...t, w(s)];
  if (s.code === O) return [...t, w(s)];
  if (s.code === U) return [...t, w(s)];
  if (s.code === fe) {
    const p = a(s);
    return p.length === 0 ? t : [...t, ...p];
  }
  return t;
}, []), We = { comment: (e) => ({
  code: v,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: h, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var a, t;
}, script: (e) => ((a) => ({ code: D, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({ code: b, paramIndex: 0, value: a.getBodyText() }))(e) }, qa = (e, a = () => []) => {
  return t = (s, n, { id: o }) => ({ eventId: o, commands: B(s.list, a) }), e.map((s) => t(s, 0, s));
  var t;
}, Ba = (e, a = () => []) => ((t, s) => t.map((n) => E(n, s)))(e, (t, s, { id: n }) => ({
  eventId: n,
  pageIndex: s,
  commands: B(t.list, a)
})), Aa = (e, a = () => []) => ({ note: e.note, noteItems: z(e.note), displayedName: e.displayName, events: Je(e, a) }), Je = (e, a) => W(e, (t, s, n) => ({
  eventId: n.id,
  pageIndex: s,
  commands: B(t.list, a),
  note: n.note,
  noteItems: z(n.note),
  name: n.name
})), Ma = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), j = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), $a = (e) => [j(e, "faceName", "faces"), j(e, "characterName", "characters"), j(e, "battlerName", "sv_actors")], u = (e, a) => ({
  note: Ke(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), Ke = (e) => xe(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), Ra = (e) => u(e, ["name", "nickname", "profile"]), _a = (e) => u(e, ["name"]), Va = (e) => u(e, ["name"]), Ua = (e) => u(e, ["name", "description", "message1", "message2"]), La = (e) => u(e, ["name", "description"]), Oa = (e) => u(e, ["name", "description"]), Ga = (e) => u(e, ["name", "description"]), za = (e) => u(e, ["name", "message1", "message2", "message3", "message4"]), Za = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: ke(e.terms.basic),
    commands: Te(e.terms.commands),
    messages: he(e.terms.messages),
    params: be(e.terms.params)
  }
}), Ha = (e, a, t, s, n, o) => [...ve(t, s), ...Ie(e, a), ...Ne(n, o)], Wa = (e, a) => Z(we(a), e), Ja = (e, a, t) => {
  const s = je(a);
  return Z(t ? [...s, ...t] : s, e);
}, Ka = (e) => e.filter((a) => Xe(a)).reduce((a, t) => ({
  ...a,
  [t.structName]: t.schema
}), {}), Xe = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, Y = (e, a) => ({ type: "array", items: a, ...m(e), ...d(e.default) }), m = (e) => ({
  ...typeof e.text == "string" ? { title: e.text } : {},
  ...typeof e.desc == "string" ? { description: e.desc } : {}
}), d = (e) => e !== void 0 ? { default: e } : {}, Ye = "x-rpg-param", y = (e, a) => ({ [Ye]: {
  kind: e.kind,
  ...e.parent ? { parent: e.parent } : {},
  data: a
} }), Qe = (e) => y(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), T = (e) => e === void 0 || e === 0, $ = (e) => y(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), Q = (e) => ({ $ref: `#/definitions/${e.struct}`, ...m(e) }), ee = (e) => Y(e, {
  type: "string"
}), ae = (e) => Y(e, { type: "integer" }), te = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({ type: "string", ...m(a), ...d(a.default) }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), ...a.options ? { enum: a.options.map((t) => t.value) } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return ee(e);
    case "number[]":
      return ((a) => ({
        type: "array",
        items: { type: T(a.decimals) ? "integer" : "number" },
        ...d(a.default),
        ...m(a)
      }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ae(e);
    case "number":
      return ((a) => ({
        type: T(a.decimals) ? "integer" : "number",
        ...d(a.default),
        ...m(a)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...d(a.default), ...m(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...d(a.default), ...m(a) }))(e);
    case "struct":
      return Q(e);
    default:
      return {};
  }
}, ea = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({ type: "string", ...m(a), ...d(a.default), ...y(a, {}) }))(e);
    case "file":
      return ((a) => ({
        type: "string",
        ...d(a.default),
        ...m(a),
        ...y(a, { dir: a.dir })
      }))(e);
    case "combo":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), ...y(a, { options: [...a.options] }) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), enum: a.options.map((t) => t.value), ...y(a, { options: a.options.map((t) => ({ value: t.value, option: t.option })) }) }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return ee(e);
    case "number[]":
      return ((a) => ({ type: "array", items: { type: T(a.decimals) ? "integer" : "number" }, ...d(a.default), ...m(a), ...$(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ae(e);
    case "number":
      return ((a) => ({
        type: T(a.decimals) ? "integer" : "number",
        ...d(a.default),
        ...m(a),
        ...$(a)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...d(a.default), ...m(a), ...y(a, Fe(a.kind)) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...d(a.default), ...m(a), ...Qe(a) }))(e);
    case "struct":
      return Q(e);
    default:
      return {};
  }
}, aa = (e) => {
  const a = Object.entries(e).reduce((t, [s, n]) => {
    const o = te(n);
    return { ...t, [s]: o };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
}, A = (e, a, t, s) => {
  const { properties: n, logs: o } = ta(t, e, s);
  return { schema: {
    type: "object",
    title: a,
    properties: n,
    required: Object.keys(t),
    additionalProperties: !1
  }, logs: o };
}, re = (e) => e.kind === "struct_def", se = (e) => e.kind === "struct_def[]", ta = (e, a, t) => Object.entries(e).reduce((s, n) => ((o, [c, p], ie, ce) => {
  const M = `${ie}.${c}`, N = ra(M, p, ce);
  return { properties: { ...o.properties, [c]: N.schema }, logs: [...o.logs, ...N.logs, {
    structName: (x = p, se(x) || re(x) ? x.struct : ""),
    path: M,
    data: p,
    schema: N.schema
  }] };
  var x;
})(s, n, a, t), { properties: {}, logs: [] }), ra = (e, a, t) => re(a) ? ne(e, a, t) : se(a) ? sa(e, a, t) : {
  schema: t.options.kindData ? ea(a) : te(a),
  logs: []
}, ne = (e, a, t) => A(e, a.struct, a.params, t), sa = (e, a, t) => {
  const s = ne(`${e}[]`, { params: a.params, struct: a.struct }, t);
  return { schema: {
    type: "array",
    ...s.schema ? { items: s.schema } : {},
    ...d(a.default)
  }, logs: s.logs };
}, Xa = (e, { args: a, command: t }, s) => A(`${e.moduleName}.command.${t}`, t, a, { options: s }), Ya = (e, { params: a, struct: t }, s) => A(`${e.moduleName}.${t}`, t, a, {
  options: s
}), i = { type: "string", nullable: !0, maxLength: 100 }, l = { type: "string", default: "", nullable: !1 }, k = { type: "number", nullable: !0 }, Qa = () => ({ type: "object", discriminator: {
  propertyName: "kind"
}, oneOf: [na, pa, da, la, ua, oa, ia, fa, ya, ga, ca, ma] }), na = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "boolean"
}, default: { type: "boolean", default: !0 }, on: i, off: i, desc: i, text: i, parent: i } }, oa = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: k, max: k, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: i, text: i, parent: i } }, ia = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: k, max: k, desc: i, text: i, parent: i }
}, ca = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: l, desc: i, text: i, parent: i } }, ma = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string[]"
}, default: { type: "array", items: l, default: [] }, desc: i, text: i, parent: i } }, da = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: i, text: i, parent: i } }, pa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: { kind: { type: "string", const: "combo" }, default: l, options: {
    type: "array",
    items: { type: "string" },
    default: []
  }, desc: i, text: i, parent: i }
}, la = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: l,
  dir: l,
  desc: i,
  text: i,
  parent: i
} }, ua = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: l, desc: i, text: i, parent: i } }, oe = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, ya = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: i, text: i, parent: i, struct: oe }
}, ga = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: oe, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: i, text: i, parent: i }
}, fa = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: l,
  options: { type: "array", items: { type: "object", properties: { value: l, option: l }, required: ["value", "option"] }, default: [] },
  desc: i,
  text: i,
  parent: i
} }, et = (e) => aa(e);
export {
  Ha as buildReferenceItemSources,
  aa as compileFlatStruct,
  Ja as compileItemEffectDisplayData,
  Xa as compilePluginCommand,
  Ya as compilePluginStruct,
  te as compilePrimitiveField,
  ea as compilePrimitiveFieldWithXParam,
  A as compileStructDetail,
  Wa as compileTraitDisplayData,
  Ka as defineStructs,
  Ba as extractBattleEventTexts,
  qa as extractCommonEventTexts,
  $a as extractImageFromActor,
  Ma as extractImageFromEnemy,
  Ce as extractItemChangeData,
  H as extractItemCommands,
  Ta as extractItemFromMap,
  ka as extractItemFromTroop,
  Aa as extractMapText,
  Ke as extractNoteText,
  u as extractTextData,
  Ra as extractTextFromActor,
  Ga as extractTextFromArmor,
  Va as extractTextFromClass,
  _a as extractTextFromEnemy,
  Pa as extractTextFromEventCommands,
  La as extractTextFromItem,
  Ua as extractTextFromSkill,
  za as extractTextFromState,
  Za as extractTextFromSystem,
  Oa as extractTextFromWeapon,
  Qa as makePluginParamSchema,
  va as replaceActorText,
  ja as replaceArmorText,
  Na as replaceClassText,
  Ca as replaceCommonEventTexts,
  Ia as replaceEnemyText,
  P as replaceEventCommandTexts,
  ja as replaceItemText,
  Da as replaceMapDataTexts,
  g as replaceNoteTextByMap,
  wa as replaceSkillText,
  Fa as replaceStateText,
  Me as replaceSystemTerms,
  Ea as replaceSystemText,
  r as replaceTextByMap,
  Pe as replaceTextForCommand,
  Be as replaceTextForCommandActor,
  Ae as replaceTextForCommandShowChoices,
  qe as replaceTextForCommandShowMessage,
  Sa as replaceTroopTexts,
  ja as replaceWeaponText,
  et as structToJSONSchema
};
