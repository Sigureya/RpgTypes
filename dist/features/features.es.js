import { c$ as ie, c_ as ce, d1 as me, F as $, B as R, D as _, cH as de, aM as V, aL as L, aH as U, j as b, k as j, C as v, c as h, d as D, S as F, m as pe, b as le, b0 as ue, a$ as S, h as O, cD as G, cE as ye, cT as ge, cZ as fe, cY as xe, cV as be, b4 as he, b3 as Te, cR as ke, r as ve, cn as Ie, l as Ne } from "../shared/make.es2.js";
import { m as H } from "../shared/mergeItemsSource.es.js";
const z = (e, a, t) => e.reduce((s, n) => (n.code !== $ && n.code !== R && n.code !== _ || s.push(je(n, a, t)), s), []), we = {
  [_]: "weapon",
  [$]: "armor",
  [R]: "item"
}, je = (e, a, t) => {
  const s = e.parameters[3] === ie ? { direct: !0, value: e.parameters[2] } : {
    direct: !1,
    variableId: e.parameters[2]
  }, n = e.parameters[0] === ce ? a.gain : e.parameters[0] === me ? a.lose : a.unknown, i = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: we[e.code],
    dataId: e.parameters[1],
    code: e.code,
    commandNameMZ: t(e.code),
    operation: n,
    ...i,
    ...s
  };
}, De = (e) => !!e, E = (e, a) => e.pages.map((t, s) => a(t, s, e)), Z = (e, a) => e.events.filter(De).flatMap((t) => E(t, a)), xa = (e, a, t) => Z(e.map, (s, n, i) => ({
  ...Fe(s),
  commands: z(s.list, a, t),
  eventName: i.name,
  pageIndex: n
})), Fe = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, ba = (e, a, t) => {
  return s = (n, i, c) => ({
    commands: z(n.list, a, t),
    eventName: c.name,
    troopId: c.id,
    pageIndex: i
  }), e.flatMap((n) => E(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, g = (e, a, t = `
`) => de(e.note, (s) => r(s.value, a), t), ha = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.nickname, a), i = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: i, note: t };
}, Ta = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, ka = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, va = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a), i = r(e.message1, a), c = r(e.message2, a);
  return { ...e, name: s, description: n, message1: i, message2: c, note: t };
}, Ia = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, Na = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.message1, a), i = r(e.message2, a), c = r(e.message3, a), l = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: i, message3: c, message4: l, note: t };
}, C = (e, a) => e.map((t) => {
  switch (t.code) {
    case F:
      return Ee(t, a);
    case D:
      return qe(t, a);
    case h:
    case v:
    case j:
    case b:
      return Se(t, a);
    case U:
    case L:
    case V:
      return Ce(t, a);
    default:
      return t;
  }
}), Se = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, Ee = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return pe({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Ce = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, qe = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: D,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, wa = (e, a) => {
  const t = e.pages.map((s) => ({ list: C(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, ja = (e, a) => ({ ...e, list: C(e.list, a) }), Da = (e, a) => {
  const t = r(e.displayName, a), s = g(e, a), n = { displayName: t, events: le(e, (i) => C(i, a)), note: s };
  return { ...e, ...n };
}, Pe = (e, a) => ({
  params: Me(e.params, a),
  messages: $e(e.messages, a),
  commands: Ae(e.commands, a),
  basic: Be(e.basic, a)
}), Be = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Ae = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], Me = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], $e = (e, a) => ({
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
}), Fa = (e, a) => ({
  ...e,
  gameTitle: r(e.gameTitle, a),
  currencyUnit: r(e.currencyUnit, a),
  elements: f(e.elements, a),
  skillTypes: f(e.skillTypes, a),
  weaponTypes: f(e.weaponTypes, a),
  armorTypes: f(e.armorTypes, a),
  equipTypes: f(e.equipTypes, a),
  terms: Pe(e.terms, a)
}), f = (e, a) => e.map((t) => r(t, a)), W = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class J {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return W(this.joinCommandBodies());
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
    return W(this.bodies);
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
  const i = [];
  for (let c = a + 1; c < e.length; c++) {
    const l = e[c];
    if (!s(l)) break;
    i.push(l);
  }
  return { header: n, bodies: i };
}, Re = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => I(n, i, (c) => c.code === v, (c) => c.code === j))(e, a);
  return _e(s) ? new q(j, s, t) : new J(s, t);
}, _e = (e) => e.parameters[0] === "選択肢ヘルプ", Ve = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => I(n, i, (c) => c.code === F, (c) => c.code === h))(e, a);
  return new q(h, s, t);
}, Le = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => I(n, i, (c) => c.code === S, (c) => c.code === ue))(e, a);
  return new J(s, t);
}, Ue = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => I(n, i, (c) => c.code === O, (c) => c.code === b))(e, a);
  return new q(b, s, t);
}, Oe = {
  [F]: (e, a, t) => t.showMessage(Ve(e, a), a, e),
  [S]: (e, a, t) => t.script(Le(e, a), a, e),
  [v]: (e, a, t) => t.comment(Re(e, a), a, e),
  [O]: (e, a, t) => t.showScrollingText(Ue(e, a), a, e)
}, Ge = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), He = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), P = (e) => e.reduce((a, t, s) => {
  if (t.code === D) return [...a, ...He(t)];
  const n = (i = t.code, Oe[i]);
  var i;
  if (n) {
    const c = n(e, s, ze);
    if (c !== void 0) return [...a, c];
  }
  return t.code === L || t.code === U || t.code === V ? [...a, Ge(t)] : a;
}, []), ze = {
  comment: (e) => ({ code: v, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: h, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({
    code: S,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e),
  showScrollingText: (e) => ((a) => ({ code: b, paramIndex: 0, value: a.getBodyText() }))(e)
}, Sa = (e) => {
  return a = (t, s, { id: n }) => ({
    eventId: n,
    commands: P(t.list)
  }), e.map((t) => a(t, 0, t));
  var a;
}, Ea = (e) => ((a, t) => a.map((s) => E(s, t)))(e, (a, t, { id: s }) => ({ eventId: s, pageIndex: t, commands: P(a.list) })), Ca = (e) => ({
  note: e.note,
  noteItems: G(e.note),
  displayedName: e.displayName,
  events: Ze(e)
}), Ze = (e) => Z(e, (a, t, s) => ({ eventId: s.id, pageIndex: t, commands: P(a.list), note: s.note, noteItems: G(s.note), name: s.name })), qa = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), w = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), Pa = (e) => [w(e, "faceName", "faces"), w(e, "characterName", "characters"), w(e, "battlerName", "sv_actors")], u = (e, a) => ({
  note: We(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), We = (e) => ye(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), Ba = (e) => u(e, ["name", "nickname", "profile"]), Aa = (e) => u(e, ["name"]), Ma = (e) => u(e, ["name"]), $a = (e) => u(e, ["name", "description", "message1", "message2"]), Ra = (e) => u(e, ["name", "description"]), _a = (e) => u(e, ["name", "description"]), Va = (e) => u(e, ["name", "description"]), La = (e) => u(e, ["name", "message1", "message2", "message3", "message4"]), Ua = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: be(e.terms.basic),
    commands: xe(e.terms.commands),
    messages: fe(e.terms.messages),
    params: ge(e.terms.params)
  }
}), Oa = (e, a, t, s, n, i) => [...he(t, s), ...Te(e, a), ...ke(n, i)], Ga = (e, a) => H(ve(a), e), Ha = (e, a, t) => {
  const s = Ie(a);
  return H(t ? [...s, ...t] : s, e);
}, za = (e) => e.filter((a) => Je(a)).reduce((a, t) => ({
  ...a,
  [t.structName]: t.schema
}), {}), Je = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, K = (e, a) => ({ type: "array", items: a, ...m(e), ...d(e.default) }), m = (e) => ({
  ...typeof e.text == "string" ? { title: e.text } : {},
  ...typeof e.desc == "string" ? { description: e.desc } : {}
}), d = (e) => e !== void 0 ? { default: e } : {}, Ke = "x-rpg-param", y = (e, a) => ({ [Ke]: {
  kind: e.kind,
  ...e.parent ? { parent: e.parent } : {},
  data: a
} }), Xe = (e) => y(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), T = (e) => e === void 0 || e === 0, M = (e) => y(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), X = (e) => ({ $ref: `#/definitions/${e.struct}`, ...m(e) }), Y = (e) => K(e, {
  type: "string"
}), Q = (e) => K(e, { type: "integer" }), ee = (e) => {
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
      return Y(e);
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
      return Q(e);
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
      return X(e);
    default:
      return {};
  }
}, Ye = (e) => {
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
      return Y(e);
    case "number[]":
      return ((a) => ({ type: "array", items: { type: T(a.decimals) ? "integer" : "number" }, ...d(a.default), ...m(a), ...M(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return Q(e);
    case "number":
      return ((a) => ({
        type: T(a.decimals) ? "integer" : "number",
        ...d(a.default),
        ...m(a),
        ...M(a)
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
      return ((a) => ({ type: "integer", ...d(a.default), ...m(a), ...y(a, Ne(a.kind)) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...d(a.default), ...m(a), ...Xe(a) }))(e);
    case "struct":
      return X(e);
    default:
      return {};
  }
}, Qe = (e) => {
  const a = Object.entries(e).reduce((t, [s, n]) => {
    const i = ee(n);
    return { ...t, [s]: i };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
}, B = (e, a, t, s) => {
  const { properties: n, logs: i } = ea(t, e, s);
  return { schema: {
    type: "object",
    title: a,
    properties: n,
    required: Object.keys(t),
    additionalProperties: !1
  }, logs: i };
}, ae = (e) => e.kind === "struct_def", te = (e) => e.kind === "struct_def[]", ea = (e, a, t) => Object.entries(e).reduce((s, n) => ((i, [c, l], ne, oe) => {
  const A = `${ne}.${c}`, N = aa(A, l, oe);
  return { properties: { ...i.properties, [c]: N.schema }, logs: [...i.logs, ...N.logs, {
    structName: (x = l, te(x) || ae(x) ? x.struct : ""),
    path: A,
    data: l,
    schema: N.schema
  }] };
  var x;
})(s, n, a, t), { properties: {}, logs: [] }), aa = (e, a, t) => ae(a) ? re(e, a, t) : te(a) ? ta(e, a, t) : {
  schema: t.options.kindData ? Ye(a) : ee(a),
  logs: []
}, re = (e, a, t) => B(e, a.struct, a.params, t), ta = (e, a, t) => {
  const s = re(`${e}[]`, { params: a.params, struct: a.struct }, t);
  return { schema: {
    type: "array",
    ...s.schema ? { items: s.schema } : {},
    ...d(a.default)
  }, logs: s.logs };
}, Za = (e, { args: a, command: t }, s) => B(`${e.moduleName}.command.${t}`, t, a, { options: s }), Wa = (e, { params: a, struct: t }, s) => B(`${e.moduleName}.${t}`, t, a, {
  options: s
}), o = { type: "string", nullable: !0, maxLength: 100 }, p = { type: "string", default: "", nullable: !1 }, k = { type: "number", nullable: !0 }, Ja = () => ({ type: "object", discriminator: {
  propertyName: "kind"
}, oneOf: [ra, ma, ca, da, pa, sa, na, ya, la, ua, oa, ia] }), ra = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "boolean"
}, default: { type: "boolean", default: !0 }, on: o, off: o, desc: o, text: o, parent: o } }, sa = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: k, max: k, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: o, text: o, parent: o } }, na = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: k, max: k, desc: o, text: o, parent: o }
}, oa = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: p, desc: o, text: o, parent: o } }, ia = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string[]"
}, default: { type: "array", items: p, default: [] }, desc: o, text: o, parent: o } }, ca = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: o, text: o, parent: o } }, ma = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: { kind: { type: "string", const: "combo" }, default: p, options: {
    type: "array",
    items: { type: "string" },
    default: []
  }, desc: o, text: o, parent: o }
}, da = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: p,
  dir: p,
  desc: o,
  text: o,
  parent: o
} }, pa = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: p, desc: o, text: o, parent: o } }, se = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, la = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: o, text: o, parent: o, struct: se }
}, ua = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: se, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: o, text: o, parent: o }
}, ya = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: p,
  options: { type: "array", items: { type: "object", properties: { value: p, option: p }, required: ["value", "option"] }, default: [] },
  desc: o,
  text: o,
  parent: o
} }, Ka = (e) => Qe(e);
export {
  Oa as buildReferenceItemSources,
  Qe as compileFlatStruct,
  Ha as compileItemEffectDisplayData,
  Za as compilePluginCommand,
  Wa as compilePluginStruct,
  ee as compilePrimitiveField,
  Ye as compilePrimitiveFieldWithXParam,
  B as compileStructDetail,
  Ga as compileTraitDisplayData,
  za as defineStructs,
  Ea as extractBattleEventTexts,
  Sa as extractCommonEventTexts,
  Pa as extractImageFromActor,
  qa as extractImageFromEnemy,
  je as extractItemChangeData,
  z as extractItemCommands,
  xa as extractItemFromMap,
  ba as extractItemFromTroop,
  Ca as extractMapText,
  We as extractNoteText,
  u as extractTextData,
  Ba as extractTextFromActor,
  Va as extractTextFromArmor,
  Ma as extractTextFromClass,
  Aa as extractTextFromEnemy,
  P as extractTextFromEventCommands,
  Ra as extractTextFromItem,
  $a as extractTextFromSkill,
  La as extractTextFromState,
  Ua as extractTextFromSystem,
  _a as extractTextFromWeapon,
  Ja as makePluginParamSchema,
  ha as replaceActorText,
  Ia as replaceArmorText,
  ka as replaceClassText,
  ja as replaceCommonEventTexts,
  Ta as replaceEnemyText,
  C as replaceEventCommandTexts,
  Ia as replaceItemText,
  Da as replaceMapDataTexts,
  g as replaceNoteTextByMap,
  va as replaceSkillText,
  Na as replaceStateText,
  Pe as replaceSystemTerms,
  Fa as replaceSystemText,
  r as replaceTextByMap,
  Se as replaceTextForCommand,
  Ce as replaceTextForCommandActor,
  qe as replaceTextForCommandShowChoices,
  Ee as replaceTextForCommandShowMessage,
  wa as replaceTroopTexts,
  Ia as replaceWeaponText,
  Ka as structToJSONSchema
};
