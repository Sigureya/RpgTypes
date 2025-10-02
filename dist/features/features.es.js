import { d0 as X, c$ as Q, d2 as Y, G as q, D as P, F as B, cI as ee, aN as A, aM as M, aI as R, l as g, n as k, C as b, g as x, h as I, S as N, m as ae, e as te, b1 as re, b0 as F, k as $, cE as U, cF as se, cU as ne, c_ as oe, cZ as ie, cW as me, b5 as de, b4 as ce, cS as pe, r as le, co as ue, b as ye, a as ge, d3 as xe } from "../shared/make.es.js";
import { c as Va } from "../shared/make.es.js";
import { m as V } from "../shared/mergeItemsSource.es.js";
const G = (e, a, t) => e.reduce((s, n) => (n.code !== q && n.code !== P && n.code !== B || s.push(be(n, a, t)), s), []), fe = { [B]: "weapon", [q]: "armor", [P]: "item" }, be = (e, a, t) => {
  const s = e.parameters[3] === X ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === Q ? a.gain : e.parameters[0] === Y ? a.lose : a.unknown, i = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: fe[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: t(e.code), operation: n, ...i, ...s };
}, he = (e) => !!e, D = (e, a) => e.pages.map((t, s) => a(t, s, e)), L = (e, a) => e.events.filter(he).flatMap((t) => D(t, a)), na = (e, a, t) => L(e.map, (s, n, i) => ({
  ...Te(s),
  commands: G(s.list, a, t),
  eventName: i.name,
  pageIndex: n
})), Te = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, oa = (e, a, t) => {
  return s = (n, i, m) => ({
    commands: G(n.list, a, t),
    eventName: m.name,
    troopId: m.id,
    pageIndex: i
  }), e.flatMap((n) => D(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, l = (e, a, t = `
`) => ee(e.note, (s) => r(s.value, a), t), ia = (e, a) => {
  const t = l(e, a), s = r(e.name, a), n = r(e.nickname, a), i = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: i, note: t };
}, ma = (e, a) => {
  const t = l(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, da = (e, a) => {
  const t = l(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, ca = (e, a) => {
  const t = l(e, a), s = r(e.name, a), n = r(e.description, a), i = r(e.message1, a), m = r(e.message2, a);
  return { ...e, name: s, description: n, message1: i, message2: m, note: t };
}, pa = (e, a) => {
  const t = l(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, la = (e, a) => {
  const t = l(e, a), s = r(e.name, a), n = r(e.message1, a), i = r(e.message2, a), m = r(e.message3, a), c = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: i, message3: m, message4: c, note: t };
}, S = (e, a) => e.map((t) => {
  switch (t.code) {
    case N:
      return ke(t, a);
    case I:
      return Ne(t, a);
    case x:
    case b:
    case k:
    case g:
      return ve(t, a);
    case R:
    case M:
    case A:
      return Ie(t, a);
    default:
      return t;
  }
}), ve = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, ke = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return ae({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Ie = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Ne = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: I,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, ua = (e, a) => {
  const t = e.pages.map((s) => ({ list: S(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, ya = (e, a) => ({ ...e, list: S(e.list, a) }), ga = (e, a) => {
  const t = r(e.displayName, a), s = l(e, a), n = { displayName: t, events: te(e, (i) => S(i, a)), note: s };
  return { ...e, ...n };
}, Fe = (e, a) => ({
  params: je(e.params, a),
  messages: we(e.messages, a),
  commands: Se(e.commands, a),
  basic: De(e.basic, a)
}), De = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Se = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], je = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], we = (e, a) => ({
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
}), xa = (e, a) => ({
  ...e,
  gameTitle: r(e.gameTitle, a),
  currencyUnit: r(e.currencyUnit, a),
  elements: u(e.elements, a),
  skillTypes: u(e.skillTypes, a),
  weaponTypes: u(e.weaponTypes, a),
  armorTypes: u(e.armorTypes, a),
  equipTypes: u(e.equipTypes, a),
  terms: Fe(e.terms, a)
}), u = (e, a) => e.map((t) => r(t, a)), _ = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class z {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return _(this.joinCommandBodies());
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
class j {
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return _(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const h = (e, a, t, s) => {
  const n = e[a];
  if (!t(n)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(n)}`);
  const i = [];
  for (let m = a + 1; m < e.length; m++) {
    const c = e[m];
    if (!s(c)) break;
    i.push(c);
  }
  return { header: n, bodies: i };
}, Ce = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => h(n, i, (m) => m.code === b, (m) => m.code === k))(e, a);
  return Ee(s) ? new j(k, s, t) : new z(s, t);
}, Ee = (e) => e.parameters[0] === "選択肢ヘルプ", qe = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => h(n, i, (m) => m.code === N, (m) => m.code === x))(e, a);
  return new j(x, s, t);
}, Pe = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => h(n, i, (m) => m.code === F, (m) => m.code === re))(e, a);
  return new z(s, t);
}, Be = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => h(n, i, (m) => m.code === $, (m) => m.code === g))(e, a);
  return new j(g, s, t);
}, Ae = {
  [N]: (e, a, t) => t.showMessage(qe(e, a), a, e),
  [F]: (e, a, t) => t.script(Pe(e, a), a, e),
  [b]: (e, a, t) => t.comment(Ce(e, a), a, e),
  [$]: (e, a, t) => t.showScrollingText(Be(e, a), a, e)
}, Me = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), Re = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), w = (e) => e.reduce((a, t, s) => {
  if (t.code === I) return [...a, ...Re(t)];
  const n = (i = t.code, Ae[i]);
  var i;
  if (n) {
    const m = n(e, s, $e);
    if (m !== void 0) return [...a, m];
  }
  return t.code === M || t.code === R || t.code === A ? [...a, Me(t)] : a;
}, []), $e = {
  comment: (e) => ({ code: b, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: x, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({
    code: F,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e),
  showScrollingText: (e) => ((a) => ({ code: g, paramIndex: 0, value: a.getBodyText() }))(e)
}, fa = (e) => {
  return a = (t, s, { id: n }) => ({
    eventId: n,
    commands: w(t.list)
  }), e.map((t) => a(t, 0, t));
  var a;
}, ba = (e) => ((a, t) => a.map((s) => D(s, t)))(e, (a, t, { id: s }) => ({ eventId: s, pageIndex: t, commands: w(a.list) })), ha = (e) => ({
  note: e.note,
  noteItems: U(e.note),
  displayedName: e.displayName,
  events: Ue(e)
}), Ue = (e) => L(e, (a, t, s) => ({ eventId: s.id, pageIndex: t, commands: w(a.list), note: s.note, noteItems: U(s.note), name: s.name })), Ta = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), v = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), va = (e) => [v(e, "faceName", "faces"), v(e, "characterName", "characters"), v(e, "battlerName", "sv_actors")], p = (e, a) => ({
  note: Ve(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), Ve = (e) => se(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), ka = (e) => p(e, ["name", "nickname", "profile"]), Ia = (e) => p(e, ["name"]), Na = (e) => p(e, ["name"]), Fa = (e) => p(e, ["name", "description", "message1", "message2"]), Da = (e) => p(e, ["name", "description"]), Sa = (e) => p(e, ["name", "description"]), ja = (e) => p(e, ["name", "description"]), wa = (e) => p(e, ["name", "message1", "message2", "message3", "message4"]), Ca = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: me(e.terms.basic),
    commands: ie(e.terms.commands),
    messages: oe(e.terms.messages),
    params: ne(e.terms.params)
  }
}), Ea = (e, a, t, s, n, i) => [...de(t, s), ...ce(e, a), ...pe(n, i)], qa = (e, a) => V(le(a), e), Pa = (e, a, t) => {
  const s = ue(a);
  return V(t ? [...s, ...t] : s, e);
}, Ba = (e) => e.filter((a) => Ge(a)).reduce((a, t) => ({
  ...a,
  [t.structName]: t.schema
}), {}), Ge = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, C = (e, a, t, s) => {
  const { properties: n, logs: i } = Le(t, e, s);
  return { schema: {
    type: "object",
    title: a,
    properties: n,
    required: Object.keys(t),
    additionalProperties: !1
  }, logs: i };
}, H = (e) => e.kind === "struct_def", O = (e) => e.kind === "struct_def[]", Le = (e, a, t) => Object.entries(e).reduce((s, n) => ((i, [m, c], J, K) => {
  const E = `${J}.${m}`, T = _e(E, c, K);
  return { properties: {
    ...i.properties,
    [m]: T.schema
  }, logs: [...i.logs, ...T.logs, { structName: (y = c, O(y) || H(y) ? y.struct : ""), path: E, data: c, schema: T.schema }] };
  var y;
})(s, n, a, t), {
  properties: {},
  logs: []
}), _e = (e, a, t) => H(a) ? W(e, a, t) : O(a) ? ze(e, a, t) : { schema: t.options.kindData ? ye(a) : ge(a), logs: [] }, W = (e, a, t) => C(e, a.struct, a.params, t), ze = (e, a, t) => {
  const s = W(`${e}[]`, {
    params: a.params,
    struct: a.struct
  }, t);
  return { schema: { type: "array", ...s.schema ? { items: s.schema } : {}, ...xe(a.default) }, logs: s.logs };
}, Aa = (e, { args: a, command: t }, s) => C(`${e.moduleName}.command.${t}`, t, a, { options: s }), Ma = (e, { params: a, struct: t }, s) => C(`${e.moduleName}.${t}`, t, a, { options: s }), o = {
  type: "string",
  nullable: !0,
  maxLength: 100
}, d = { type: "string", default: "", nullable: !1 }, f = { type: "number", nullable: !0 }, Ra = () => ({
  type: "object",
  discriminator: { propertyName: "kind" },
  oneOf: [He, Xe, Ke, Qe, Ye, Oe, We, ta, ea, aa, Ze, Je]
}), He = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: { type: "string", const: "boolean" }, default: {
  type: "boolean",
  default: !0
}, on: o, off: o, desc: o, text: o, parent: o } }, Oe = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: f, max: f, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: o, text: o, parent: o } }, We = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: f, max: f, desc: o, text: o, parent: o }
}, Ze = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: d, desc: o, text: o, parent: o } }, Je = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: {
  kind: { type: "string", const: "string[]" },
  default: { type: "array", items: d, default: [] },
  desc: o,
  text: o,
  parent: o
} }, Ke = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: o, text: o, parent: o } }, Xe = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: {
    kind: { type: "string", const: "combo" },
    default: d,
    options: { type: "array", items: { type: "string" }, default: [] },
    desc: o,
    text: o,
    parent: o
  }
}, Qe = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: d,
  dir: d,
  desc: o,
  text: o,
  parent: o
} }, Ye = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: d, desc: o, text: o, parent: o } }, Z = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, ea = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: o, text: o, parent: o, struct: Z }
}, aa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: Z, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: o, text: o, parent: o }
}, ta = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: d,
  options: { type: "array", items: { type: "object", properties: { value: d, option: d }, required: ["value", "option"] }, default: [] },
  desc: o,
  text: o,
  parent: o
} };
export {
  Ea as buildReferenceItemSources,
  Va as compileFlatStruct,
  Pa as compileItemEffectDisplayData,
  Aa as compilePluginCommand,
  Ma as compilePluginStruct,
  ge as compilePrimitiveField,
  ye as compilePrimitiveFieldWithXParam,
  C as compileStructDetail,
  qa as compileTraitDisplayData,
  Ba as defineStructs,
  ba as extractBattleEventTexts,
  fa as extractCommonEventTexts,
  va as extractImageFromActor,
  Ta as extractImageFromEnemy,
  be as extractItemChangeData,
  G as extractItemCommands,
  na as extractItemFromMap,
  oa as extractItemFromTroop,
  ha as extractMapText,
  Ve as extractNoteText,
  p as extractTextData,
  ka as extractTextFromActor,
  ja as extractTextFromArmor,
  Na as extractTextFromClass,
  Ia as extractTextFromEnemy,
  w as extractTextFromEventCommands,
  Da as extractTextFromItem,
  Fa as extractTextFromSkill,
  wa as extractTextFromState,
  Ca as extractTextFromSystem,
  Sa as extractTextFromWeapon,
  Ra as makePluginParamSchema,
  ia as replaceActorText,
  pa as replaceArmorText,
  da as replaceClassText,
  ya as replaceCommonEventTexts,
  ma as replaceEnemyText,
  S as replaceEventCommandTexts,
  pa as replaceItemText,
  ga as replaceMapDataTexts,
  l as replaceNoteTextByMap,
  ca as replaceSkillText,
  la as replaceStateText,
  Fe as replaceSystemTerms,
  xa as replaceSystemText,
  r as replaceTextByMap,
  ve as replaceTextForCommand,
  Ie as replaceTextForCommandActor,
  Ne as replaceTextForCommandShowChoices,
  ke as replaceTextForCommandShowMessage,
  ua as replaceTroopTexts,
  pa as replaceWeaponText
};
