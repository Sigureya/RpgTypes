import { cZ as ie, cY as ce, c$ as me, B as R, z as _, A as V, cF as de, aK as U, aJ as L, aF as O, i as h, j, C as I, c as T, d as F, S, m as pe, b as le, a_ as ue, aZ as C, h as G, cB as z, cC as ye, cR as ge, cX as fe, cW as xe, cT as be, b2 as he, b1 as Te, cP as ke, r as ve, cl as Ie } from "../shared/make.es2.js";
import { m as Z } from "../shared/mergeItemsSource.es.js";
import { l as Ne } from "../shared/lookup.es.js";
const H = (e, a, t) => e.reduce((s, n) => (n.code !== R && n.code !== _ && n.code !== V || s.push(we(n, a, t)), s), []), $e = { [V]: "weapon", [R]: "armor", [_]: "item" }, we = (e, a, t) => {
  const s = e.parameters[3] === ie ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === ce ? a.gain : e.parameters[0] === me ? a.lose : a.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: $e[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: t(e.code), operation: n, ...o, ...s };
}, je = (e) => !!e, D = (e, a) => e.pages.map((t, s) => a(t, s, e)), W = (e, a) => e.events.filter(je).flatMap((t) => D(t, a)), va = (e, a, t) => W(e.map, (s, n, o) => ({
  ...Fe(s),
  commands: H(s.list, a, t),
  eventName: o.name,
  pageIndex: n
})), Fe = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Ia = (e, a, t) => {
  return s = (n, o, i) => ({
    commands: H(n.list, a, t),
    eventName: i.name,
    troopId: i.id,
    pageIndex: o
  }), e.flatMap((n) => D(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, g = (e, a, t = `
`) => de(e.note, (s) => r(s.value, a), t), Na = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.nickname, a), o = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: o, note: t };
}, $a = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, wa = (e, a) => {
  const t = g(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, ja = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a), o = r(e.message1, a), i = r(e.message2, a);
  return { ...e, name: s, description: n, message1: o, message2: i, note: t };
}, Fa = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, Sa = (e, a) => {
  const t = g(e, a), s = r(e.name, a), n = r(e.message1, a), o = r(e.message2, a), i = r(e.message3, a), p = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: o, message3: i, message4: p, note: t };
}, A = (e, a) => e.map((t) => {
  switch (t.code) {
    case S:
      return Ce(t, a);
    case F:
      return Ae(t, a);
    case T:
    case I:
    case j:
    case h:
      return Se(t, a);
    case O:
    case L:
    case U:
      return De(t, a);
    default:
      return t;
  }
}), Se = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, Ce = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return pe({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, De = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Ae = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: F,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ca = (e, a) => {
  const t = e.pages.map((s) => ({ list: A(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, Da = (e, a) => ({ ...e, list: A(e.list, a) }), Aa = (e, a) => {
  const t = r(e.displayName, a), s = g(e, a), n = { displayName: t, events: le(e, (o) => A(o, a)), note: s };
  return { ...e, ...n };
}, Ee = (e, a) => ({
  params: Be(e.params, a),
  messages: Me(e.messages, a),
  commands: qe(e.commands, a),
  basic: Pe(e.basic, a)
}), Pe = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], qe = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], Be = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Me = (e, a) => ({
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
  terms: Ee(e.terms, a)
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
class E {
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
const N = (e, a, t, s) => {
  const n = e[a];
  if (!t(n)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(n)}`);
  const o = [];
  for (let i = a + 1; i < e.length; i++) {
    const p = e[i];
    if (!s(p)) break;
    o.push(p);
  }
  return { header: n, bodies: o };
}, Re = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => N(n, o, (i) => i.code === I, (i) => i.code === j))(e, a);
  return _e(s) ? new E(j, s, t) : new K(s, t);
}, _e = (e) => e.parameters[0] === "選択肢ヘルプ", Ve = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => N(n, o, (i) => i.code === S, (i) => i.code === T))(e, a);
  return new E(T, s, t);
}, Ue = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => N(n, o, (i) => i.code === C, (i) => i.code === ue))(e, a);
  return new K(s, t);
}, Le = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => N(n, o, (i) => i.code === G, (i) => i.code === h))(e, a);
  return new E(h, s, t);
}, Oe = {
  [S]: (e, a, t) => t.showMessage(Ve(e, a), a, e),
  [C]: (e, a, t) => t.script(Ue(e, a), a, e),
  [I]: (e, a, t) => t.comment(Re(e, a), a, e),
  [G]: (e, a, t) => t.showScrollingText(Le(e, a), a, e)
}, Ge = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), ze = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), P = (e) => e.reduce((a, t, s) => {
  if (t.code === F) return [...a, ...ze(t)];
  const n = (o = t.code, Oe[o]);
  var o;
  if (n) {
    const i = n(e, s, Ze);
    if (i !== void 0) return [...a, i];
  }
  return t.code === L || t.code === O || t.code === U ? [...a, Ge(t)] : a;
}, []), Ze = {
  comment: (e) => ({ code: I, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: T, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({
    code: C,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e),
  showScrollingText: (e) => ((a) => ({ code: h, paramIndex: 0, value: a.getBodyText() }))(e)
}, Pa = (e) => {
  return a = (t, s, { id: n }) => ({
    eventId: n,
    commands: P(t.list)
  }), e.map((t) => a(t, 0, t));
  var a;
}, qa = (e) => ((a, t) => a.map((s) => D(s, t)))(e, (a, t, { id: s }) => ({ eventId: s, pageIndex: t, commands: P(a.list) })), Ba = (e) => ({
  note: e.note,
  noteItems: z(e.note),
  displayedName: e.displayName,
  events: He(e)
}), He = (e) => W(e, (a, t, s) => ({ eventId: s.id, pageIndex: t, commands: P(a.list), note: s.note, noteItems: z(s.note), name: s.name })), Ma = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), w = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), Ra = (e) => [w(e, "faceName", "faces"), w(e, "characterName", "characters"), w(e, "battlerName", "sv_actors")], u = (e, a) => ({
  note: We(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), We = (e) => ye(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), _a = (e) => u(e, ["name", "nickname", "profile"]), Va = (e) => u(e, ["name"]), Ua = (e) => u(e, ["name"]), La = (e) => u(e, ["name", "description", "message1", "message2"]), Oa = (e) => u(e, ["name", "description"]), Ga = (e) => u(e, ["name", "description"]), za = (e) => u(e, ["name", "description"]), Za = (e) => u(e, ["name", "message1", "message2", "message3", "message4"]), Ha = (e) => ({
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
}), Wa = (e, a, t, s, n, o) => [...he(t, s), ...Te(e, a), ...ke(n, o)], Ja = (e, a) => Z(ve(a), e), Ka = (e, a, t) => {
  const s = Ie(a);
  return Z(t ? [...s, ...t] : s, e);
};
function Je(e, a) {
  return e.map((t) => ({ parent: a, param: t, path: `${a}.${t.name}` }));
}
function Ke(e, a) {
  return e.map((t) => ({
    parent: a,
    param: t,
    path: `${a}.${t.name}[*]`
  }));
}
function Xe(e, a, t) {
  return e.reduce((s, n) => {
    const o = t.get(n.attr.struct);
    return o && (s.push(...(o.scalas ?? []).map((i) => ({
      parent: a,
      param: i,
      path: `${a}.${n.name}.${i.name}`
    }))), s.push(...(o.structs ?? []).map((i) => ({ parent: a, param: i, path: `${a}.${n.name}.${i.name}` })))), s;
  }, []);
}
function Ye(e, a, t) {
  return e.reduce((s, n) => {
    const o = t.get(n.attr.struct);
    return o && (s.push(...(o.scalas ?? []).map((i) => ({ parent: a, param: i, path: `${a}.${n.name}[*].${i.name}` }))), s.push(...(o.structArrays ?? []).flatMap((i) => {
      const p = t.get(i.attr.struct);
      return p ? (p.scalas ?? []).map((x) => ({ parent: a, param: x, path: `${a}.${n.name}[*].${i.name}[*].${x.name}` })) : [];
    }))), s;
  }, []);
}
const Xa = (e, a, t) => ({
  scalas: Je(e.scalas ?? [], a),
  scalaArrays: Ke(e.scalaArrays ?? [], a),
  structs: Xe(e.structs ?? [], a, t),
  structArrays: Ye(e.structArrays ?? [], a, t)
}), Ya = (e) => e.filter((a) => Qe(a)).reduce((a, t) => ({ ...a, [t.structName]: t.schema }), {}), Qe = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, X = (e, a) => ({
  type: "array",
  items: a,
  ...m(e),
  ...d(e.default)
}), m = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), d = (e) => e !== void 0 ? {
  default: e
} : {}, ea = "x-rpg-param", y = (e, a) => ({ [ea]: { kind: e.kind, ...e.parent ? { parent: e.parent } : {}, data: a } }), aa = (e) => y(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), k = (e) => e === void 0 || e === 0, M = (e) => y(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), Y = (e) => ({
  $ref: `#/definitions/${e.struct}`,
  ...m(e)
}), Q = (e) => X(e, { type: "string" }), ee = (e) => X(e, { type: "integer" }), ae = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...m(a),
        ...d(a.default)
      }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), ...a.options ? {
        enum: a.options.map((t) => t.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Q(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: k(a.decimals) ? "integer" : "number"
      }, ...d(a.default), ...m(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ee(e);
    case "number":
      return ((a) => ({ type: k(a.decimals) ? "integer" : "number", ...d(a.default), ...m(a) }))(e);
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
      return ((a) => ({
        type: "boolean",
        ...d(a.default),
        ...m(a)
      }))(e);
    case "struct":
      return Y(e);
    default:
      return {};
  }
}, ta = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...m(a),
        ...d(a.default),
        ...y(a, {})
      }))(e);
    case "file":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), ...y(a, { dir: a.dir }) }))(e);
    case "combo":
      return ((a) => ({
        type: "string",
        ...d(a.default),
        ...m(a),
        ...y(a, { options: [...a.options] })
      }))(e);
    case "select":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), enum: a.options.map((t) => t.value), ...y(a, {
        options: a.options.map((t) => ({ value: t.value, option: t.option }))
      }) }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Q(e);
    case "number[]":
      return ((a) => ({
        type: "array",
        items: { type: k(a.decimals) ? "integer" : "number" },
        ...d(a.default),
        ...m(a),
        ...M(a)
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
      return ee(e);
    case "number":
      return ((a) => ({ type: k(a.decimals) ? "integer" : "number", ...d(a.default), ...m(a), ...M(a) }))(e);
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
      return ((a) => ({ type: "boolean", ...d(a.default), ...m(a), ...aa(a) }))(e);
    case "struct":
      return Y(e);
    default:
      return {};
  }
}, ra = (e) => {
  const a = Object.entries(e).reduce((t, [s, n]) => {
    const o = ae(n);
    return { ...t, [s]: o };
  }, {});
  return { type: "object", properties: a, required: Object.keys(a), additionalProperties: !1 };
}, q = (e, a, t, s) => {
  const { properties: n, logs: o } = sa(t, e, s);
  return { schema: { type: "object", title: a, properties: n, required: Object.keys(t), additionalProperties: !1 }, logs: o };
}, te = (e) => e.kind === "struct_def", re = (e) => e.kind === "struct_def[]", sa = (e, a, t) => Object.entries(e).reduce((s, n) => ((o, [i, p], x, oe) => {
  const B = `${x}.${i}`, $ = na(B, p, oe);
  return { properties: {
    ...o.properties,
    [i]: $.schema
  }, logs: [...o.logs, ...$.logs, { structName: (b = p, re(b) || te(b) ? b.struct : ""), path: B, data: p, schema: $.schema }] };
  var b;
})(s, n, a, t), {
  properties: {},
  logs: []
}), na = (e, a, t) => te(a) ? se(e, a, t) : re(a) ? oa(e, a, t) : { schema: t.options.kindData ? ta(a) : ae(a), logs: [] }, se = (e, a, t) => q(e, a.struct, a.params, t), oa = (e, a, t) => {
  const s = se(`${e}[]`, {
    params: a.params,
    struct: a.struct
  }, t);
  return { schema: { type: "array", ...s.schema ? { items: s.schema } : {}, ...d(a.default) }, logs: s.logs };
}, Qa = (e, { args: a, command: t }, s) => q(`${e.moduleName}.command.${t}`, t, a, { options: s }), et = (e, { params: a, struct: t }, s) => q(`${e.moduleName}.${t}`, t, a, { options: s }), c = {
  type: "string",
  nullable: !0,
  maxLength: 100
}, l = { type: "string", default: "", nullable: !1 }, v = { type: "number", nullable: !0 }, at = () => ({
  type: "object",
  discriminator: { propertyName: "kind" },
  oneOf: [ia, ua, la, ya, ga, ca, ma, ba, fa, xa, da, pa]
}), ia = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: { type: "string", const: "boolean" }, default: {
  type: "boolean",
  default: !0
}, on: c, off: c, desc: c, text: c, parent: c } }, ca = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: v, max: v, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: c, text: c, parent: c } }, ma = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: v, max: v, desc: c, text: c, parent: c }
}, da = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: l, desc: c, text: c, parent: c } }, pa = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: {
  kind: { type: "string", const: "string[]" },
  default: { type: "array", items: l, default: [] },
  desc: c,
  text: c,
  parent: c
} }, la = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: c, text: c, parent: c } }, ua = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: {
    kind: { type: "string", const: "combo" },
    default: l,
    options: { type: "array", items: { type: "string" }, default: [] },
    desc: c,
    text: c,
    parent: c
  }
}, ya = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: l,
  dir: l,
  desc: c,
  text: c,
  parent: c
} }, ga = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: l, desc: c, text: c, parent: c } }, ne = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, fa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: c, text: c, parent: c, struct: ne }
}, xa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: ne, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: c, text: c, parent: c }
}, ba = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: l,
  options: { type: "array", items: { type: "object", properties: { value: l, option: l }, required: ["value", "option"] }, default: [] },
  desc: c,
  text: c,
  parent: c
} }, tt = (e) => ra(e);
export {
  Wa as buildReferenceItemSources,
  ra as compileFlatStruct,
  Ka as compileItemEffectDisplayData,
  Qa as compilePluginCommand,
  et as compilePluginStruct,
  ae as compilePrimitiveField,
  ta as compilePrimitiveFieldWithXParam,
  q as compileStructDetail,
  Ja as compileTraitDisplayData,
  Xa as createPathFromSchema,
  Ya as defineStructs,
  qa as extractBattleEventTexts,
  Pa as extractCommonEventTexts,
  Ra as extractImageFromActor,
  Ma as extractImageFromEnemy,
  we as extractItemChangeData,
  H as extractItemCommands,
  va as extractItemFromMap,
  Ia as extractItemFromTroop,
  Ba as extractMapText,
  We as extractNoteText,
  u as extractTextData,
  _a as extractTextFromActor,
  za as extractTextFromArmor,
  Ua as extractTextFromClass,
  Va as extractTextFromEnemy,
  P as extractTextFromEventCommands,
  Oa as extractTextFromItem,
  La as extractTextFromSkill,
  Za as extractTextFromState,
  Ha as extractTextFromSystem,
  Ga as extractTextFromWeapon,
  at as makePluginParamSchema,
  Na as replaceActorText,
  Fa as replaceArmorText,
  wa as replaceClassText,
  Da as replaceCommonEventTexts,
  $a as replaceEnemyText,
  A as replaceEventCommandTexts,
  Fa as replaceItemText,
  Aa as replaceMapDataTexts,
  g as replaceNoteTextByMap,
  ja as replaceSkillText,
  Sa as replaceStateText,
  Ee as replaceSystemTerms,
  Ea as replaceSystemText,
  r as replaceTextByMap,
  Se as replaceTextForCommand,
  De as replaceTextForCommandActor,
  Ae as replaceTextForCommandShowChoices,
  Ce as replaceTextForCommandShowMessage,
  Ca as replaceTroopTexts,
  Fa as replaceWeaponText,
  tt as structToJSONSchema
};
