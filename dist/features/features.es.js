import { cZ as be, cY as he, c$ as Te, B as H, z as W, A as J, cF as ve, aK as K, aJ as X, aF as Y, i as N, j as A, C as F, c as S, d as E, S as q, m as ke, b as Ie, a_ as Ne, aZ as B, h as Q, cB as ee, cC as Se, cR as we, cX as je, cW as Fe, cT as Pe, b2 as Ce, b1 as $e, cP as De, r as Ae, cl as Ee } from "../shared/make.es2.js";
import { m as ae } from "../shared/mergeItemsSource.es.js";
import { l as qe } from "../shared/lookup.es.js";
const te = (e, a, t) => e.reduce((s, n) => (n.code !== H && n.code !== W && n.code !== J || s.push(Me(n, a, t)), s), []), Be = { [J]: "weapon", [H]: "armor", [W]: "item" }, Me = (e, a, t) => {
  const s = e.parameters[3] === be ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === he ? a.gain : e.parameters[0] === Te ? a.lose : a.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Be[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: t(e.code), operation: n, ...o, ...s };
}, _e = (e) => !!e, M = (e, a) => e.pages.map((t, s) => a(t, s, e)), re = (e, a) => e.events.filter(_e).flatMap((t) => M(t, a)), Da = (e, a, t) => re(e.map, (s, n, o) => ({
  ...Re(s),
  commands: te(s.list, a, t),
  eventName: o.name,
  pageIndex: n
})), Re = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Aa = (e, a, t) => {
  return s = (n, o, i) => ({
    commands: te(n.list, a, t),
    eventName: i.name,
    troopId: i.id,
    pageIndex: o
  }), e.flatMap((n) => M(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, T = (e, a, t = `
`) => ve(e.note, (s) => r(s.value, a), t), Ea = (e, a) => {
  const t = T(e, a), s = r(e.name, a), n = r(e.nickname, a), o = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: o, note: t };
}, qa = (e, a) => {
  const t = T(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, Ba = (e, a) => {
  const t = T(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, Ma = (e, a) => {
  const t = T(e, a), s = r(e.name, a), n = r(e.description, a), o = r(e.message1, a), i = r(e.message2, a);
  return { ...e, name: s, description: n, message1: o, message2: i, note: t };
}, _a = (e, a) => {
  const t = T(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, Ra = (e, a) => {
  const t = T(e, a), s = r(e.name, a), n = r(e.message1, a), o = r(e.message2, a), i = r(e.message3, a), p = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: o, message3: i, message4: p, note: t };
}, _ = (e, a) => e.map((t) => {
  switch (t.code) {
    case q:
      return Ue(t, a);
    case E:
      return Oe(t, a);
    case S:
    case F:
    case A:
    case N:
      return Ve(t, a);
    case Y:
    case X:
    case K:
      return Le(t, a);
    default:
      return t;
  }
}), Ve = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, Ue = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return ke({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Le = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Oe = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: E,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Va = (e, a) => {
  const t = e.pages.map((s) => ({ list: _(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, Ua = (e, a) => ({ ...e, list: _(e.list, a) }), La = (e, a) => {
  const t = r(e.displayName, a), s = T(e, a), n = { displayName: t, events: Ie(e, (o) => _(o, a)), note: s };
  return { ...e, ...n };
}, ze = (e, a) => ({
  params: He(e.params, a),
  messages: We(e.messages, a),
  commands: Ze(e.commands, a),
  basic: Ge(e.basic, a)
}), Ge = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Ze = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], He = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], We = (e, a) => ({
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
}), Oa = (e, a) => ({
  ...e,
  gameTitle: r(e.gameTitle, a),
  currencyUnit: r(e.currencyUnit, a),
  elements: I(e.elements, a),
  skillTypes: I(e.skillTypes, a),
  weaponTypes: I(e.weaponTypes, a),
  armorTypes: I(e.armorTypes, a),
  equipTypes: I(e.equipTypes, a),
  terms: ze(e.terms, a)
}), I = (e, a) => e.map((t) => r(t, a)), se = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class ne {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return se(this.joinCommandBodies());
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
class R {
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return se(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const P = (e, a, t, s) => {
  const n = e[a];
  if (!t(n)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(n)}`);
  const o = [];
  for (let i = a + 1; i < e.length; i++) {
    const p = e[i];
    if (!s(p)) break;
    o.push(p);
  }
  return { header: n, bodies: o };
}, Je = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => P(n, o, (i) => i.code === F, (i) => i.code === A))(e, a);
  return Ke(s) ? new R(A, s, t) : new ne(s, t);
}, Ke = (e) => e.parameters[0] === "選択肢ヘルプ", Xe = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => P(n, o, (i) => i.code === q, (i) => i.code === S))(e, a);
  return new R(S, s, t);
}, Ye = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => P(n, o, (i) => i.code === B, (i) => i.code === Ne))(e, a);
  return new ne(s, t);
}, Qe = (e, a) => {
  const { bodies: t, header: s } = ((n, o) => P(n, o, (i) => i.code === Q, (i) => i.code === N))(e, a);
  return new R(N, s, t);
}, ea = {
  [q]: (e, a, t) => t.showMessage(Xe(e, a), a, e),
  [B]: (e, a, t) => t.script(Ye(e, a), a, e),
  [F]: (e, a, t) => t.comment(Je(e, a), a, e),
  [Q]: (e, a, t) => t.showScrollingText(Qe(e, a), a, e)
}, aa = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), ta = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), V = (e) => e.reduce((a, t, s) => {
  if (t.code === E) return [...a, ...ta(t)];
  const n = (o = t.code, ea[o]);
  var o;
  if (n) {
    const i = n(e, s, ra);
    if (i !== void 0) return [...a, i];
  }
  return t.code === X || t.code === Y || t.code === K ? [...a, aa(t)] : a;
}, []), ra = {
  comment: (e) => ({ code: F, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: S, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({
    code: B,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e),
  showScrollingText: (e) => ((a) => ({ code: N, paramIndex: 0, value: a.getBodyText() }))(e)
}, za = (e) => {
  return a = (t, s, { id: n }) => ({
    eventId: n,
    commands: V(t.list)
  }), e.map((t) => a(t, 0, t));
  var a;
}, Ga = (e) => ((a, t) => a.map((s) => M(s, t)))(e, (a, t, { id: s }) => ({ eventId: s, pageIndex: t, commands: V(a.list) })), Za = (e) => ({
  note: e.note,
  noteItems: ee(e.note),
  displayedName: e.displayName,
  events: sa(e)
}), sa = (e) => re(e, (a, t, s) => ({ eventId: s.id, pageIndex: t, commands: V(a.list), note: s.note, noteItems: ee(s.note), name: s.name })), Ha = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), D = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), Wa = (e) => [D(e, "faceName", "faces"), D(e, "characterName", "characters"), D(e, "battlerName", "sv_actors")], x = (e, a) => ({
  note: na(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), na = (e) => Se(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), Ja = (e) => x(e, ["name", "nickname", "profile"]), Ka = (e) => x(e, ["name"]), Xa = (e) => x(e, ["name"]), Ya = (e) => x(e, ["name", "description", "message1", "message2"]), Qa = (e) => x(e, ["name", "description"]), et = (e) => x(e, ["name", "description"]), at = (e) => x(e, ["name", "description"]), tt = (e) => x(e, ["name", "message1", "message2", "message3", "message4"]), rt = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Pe(e.terms.basic),
    commands: Fe(e.terms.commands),
    messages: je(e.terms.messages),
    params: we(e.terms.params)
  }
}), st = (e, a, t, s, n, o) => [...Ce(t, s), ...$e(e, a), ...De(n, o)], nt = (e, a) => ae(Ae(a), e), ot = (e, a, t) => {
  const s = Ee(a);
  return ae(t ? [...s, ...t] : s, e);
}, oa = (e, a) => `${a}[${e.map((t) => `"${t.name}"`).join(",")}]`, oe = { undefinedStruct: "undefined_struct", cyclicStruct: "cyclic_struct" };
function ia(e, a, t, s) {
  const n = { frames: [{ schemaName: e, basePath: a, ancestry: [] }], items: [], errs: [] }, o = Math.max(1, 3 * t.size + 5), i = Array.from({
    length: o
  }).reduce((p) => p.frames.length === 0 ? p : ((l, C, k) => {
    if (l.frames.length === 0) return l;
    const b = l.frames.pop(), u = b.schemaName, v = b.basePath, L = b.ancestry;
    if (L.includes(u)) return l.errs.push({
      code: k.cyclicStruct,
      path: v
    }), l;
    const f = C.get(u);
    if (!f) return l.errs.push({ code: k.undefinedStruct, path: v }), l;
    if (f.scalas.length > 0 || f.scalaArrays.length > 0) {
      const y = {
        structName: u,
        scalaArrays: (O = f.scalaArrays, z = v, O.map(($) => `${z}.${$.name}[*]`)),
        scalas: f.scalas.length > 0 ? oa(f.scalas, v) : void 0
      };
      l.items.push(y);
    }
    var O, z;
    const G = L.concat(u), fe = f.structs.map((y) => ({
      schemaName: y.attr.struct,
      basePath: `${v}.${y.name}`,
      ancestry: G
    })), xe = f.structArrays.map((y) => ({ schemaName: y.attr.struct, basePath: `${v}.${y.name}[*]`, ancestry: G }));
    return fe.concat(xe).slice().reverse().reduce((y, $) => (l.frames.push($), y), []), l;
  })(p, t, s), n);
  return { items: i.items, errors: i.errs };
}
function it(e, a, t, s = oe) {
  return e.reduce((n, o) => {
    const i = ca(o.attr.struct, `${a}.${o.name}`, t, s);
    return { items: n.items.concat(i.items), errors: n.errors.concat(i.errors) };
  }, { items: [], errors: [] });
}
function ca(e, a, t, s = oe) {
  return ia(e, a, t, s);
}
const ct = (e) => e.filter((a) => ma(a)).reduce((a, t) => ({
  ...a,
  [t.structName]: t.schema
}), {}), ma = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, ie = (e, a) => ({ type: "array", items: a, ...m(e), ...d(e.default) }), m = (e) => ({
  ...typeof e.text == "string" ? { title: e.text } : {},
  ...typeof e.desc == "string" ? { description: e.desc } : {}
}), d = (e) => e !== void 0 ? { default: e } : {}, da = "x-rpg-param", h = (e, a) => ({ [da]: {
  kind: e.kind,
  ...e.parent ? { parent: e.parent } : {},
  data: a
} }), pa = (e) => h(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), w = (e) => e === void 0 || e === 0, Z = (e) => h(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), ce = (e) => ({ $ref: `#/definitions/${e.struct}`, ...m(e) }), me = (e) => ie(e, {
  type: "string"
}), de = (e) => ie(e, { type: "integer" }), pe = (e) => {
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
      return me(e);
    case "number[]":
      return ((a) => ({
        type: "array",
        items: { type: w(a.decimals) ? "integer" : "number" },
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
      return de(e);
    case "number":
      return ((a) => ({
        type: w(a.decimals) ? "integer" : "number",
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
      return ce(e);
    default:
      return {};
  }
}, la = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({ type: "string", ...m(a), ...d(a.default), ...h(a, {}) }))(e);
    case "file":
      return ((a) => ({
        type: "string",
        ...d(a.default),
        ...m(a),
        ...h(a, { dir: a.dir })
      }))(e);
    case "combo":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), ...h(a, { options: [...a.options] }) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...d(a.default), ...m(a), enum: a.options.map((t) => t.value), ...h(a, { options: a.options.map((t) => ({ value: t.value, option: t.option })) }) }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return me(e);
    case "number[]":
      return ((a) => ({ type: "array", items: { type: w(a.decimals) ? "integer" : "number" }, ...d(a.default), ...m(a), ...Z(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return de(e);
    case "number":
      return ((a) => ({
        type: w(a.decimals) ? "integer" : "number",
        ...d(a.default),
        ...m(a),
        ...Z(a)
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
      return ((a) => ({ type: "integer", ...d(a.default), ...m(a), ...h(a, qe(a.kind)) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...d(a.default), ...m(a), ...pa(a) }))(e);
    case "struct":
      return ce(e);
    default:
      return {};
  }
}, ua = (e) => {
  const a = Object.entries(e).reduce((t, [s, n]) => {
    const o = pe(n);
    return { ...t, [s]: o };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
}, U = (e, a, t, s) => {
  const { properties: n, logs: o } = ya(t, e, s);
  return { schema: {
    type: "object",
    title: a,
    properties: n,
    required: Object.keys(t),
    additionalProperties: !1
  }, logs: o };
}, le = (e) => e.kind === "struct_def", ue = (e) => e.kind === "struct_def[]", ya = (e, a, t) => Object.entries(e).reduce((s, n) => ((o, [i, p], l, C) => {
  const k = `${l}.${i}`, b = ga(k, p, C);
  return { properties: { ...o.properties, [i]: b.schema }, logs: [...o.logs, ...b.logs, {
    structName: (u = p, ue(u) || le(u) ? u.struct : ""),
    path: k,
    data: p,
    schema: b.schema
  }] };
  var u;
})(s, n, a, t), { properties: {}, logs: [] }), ga = (e, a, t) => le(a) ? ye(e, a, t) : ue(a) ? fa(e, a, t) : {
  schema: t.options.kindData ? la(a) : pe(a),
  logs: []
}, ye = (e, a, t) => U(e, a.struct, a.params, t), fa = (e, a, t) => {
  const s = ye(`${e}[]`, { params: a.params, struct: a.struct }, t);
  return { schema: {
    type: "array",
    ...s.schema ? { items: s.schema } : {},
    ...d(a.default)
  }, logs: s.logs };
}, mt = (e, { args: a, command: t }, s) => U(`${e.moduleName}.command.${t}`, t, a, { options: s }), dt = (e, { params: a, struct: t }, s) => U(`${e.moduleName}.${t}`, t, a, {
  options: s
}), c = { type: "string", nullable: !0, maxLength: 100 }, g = { type: "string", default: "", nullable: !1 }, j = { type: "number", nullable: !0 }, pt = () => ({ type: "object", discriminator: {
  propertyName: "kind"
}, oneOf: [xa, Ia, ka, Na, Sa, ba, ha, Fa, wa, ja, Ta, va] }), xa = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "boolean"
}, default: { type: "boolean", default: !0 }, on: c, off: c, desc: c, text: c, parent: c } }, ba = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: j, max: j, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: c, text: c, parent: c } }, ha = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: j, max: j, desc: c, text: c, parent: c }
}, Ta = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: g, desc: c, text: c, parent: c } }, va = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string[]"
}, default: { type: "array", items: g, default: [] }, desc: c, text: c, parent: c } }, ka = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: c, text: c, parent: c } }, Ia = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: { kind: { type: "string", const: "combo" }, default: g, options: {
    type: "array",
    items: { type: "string" },
    default: []
  }, desc: c, text: c, parent: c }
}, Na = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: g,
  dir: g,
  desc: c,
  text: c,
  parent: c
} }, Sa = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: g, desc: c, text: c, parent: c } }, ge = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, wa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: c, text: c, parent: c, struct: ge }
}, ja = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: ge, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: c, text: c, parent: c }
}, Fa = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: g,
  options: { type: "array", items: { type: "object", properties: { value: g, option: g }, required: ["value", "option"] }, default: [] },
  desc: c,
  text: c,
  parent: c
} }, lt = (e) => ua(e);
export {
  st as buildReferenceItemSources,
  ua as compileFlatStruct,
  ot as compileItemEffectDisplayData,
  mt as compilePluginCommand,
  dt as compilePluginStruct,
  pe as compilePrimitiveField,
  la as compilePrimitiveFieldWithXParam,
  U as compileStructDetail,
  nt as compileTraitDisplayData,
  ct as defineStructs,
  Ga as extractBattleEventTexts,
  za as extractCommonEventTexts,
  Wa as extractImageFromActor,
  Ha as extractImageFromEnemy,
  Me as extractItemChangeData,
  te as extractItemCommands,
  Da as extractItemFromMap,
  Aa as extractItemFromTroop,
  Za as extractMapText,
  na as extractNoteText,
  x as extractTextData,
  Ja as extractTextFromActor,
  at as extractTextFromArmor,
  Xa as extractTextFromClass,
  Ka as extractTextFromEnemy,
  V as extractTextFromEventCommands,
  Qa as extractTextFromItem,
  Ya as extractTextFromSkill,
  tt as extractTextFromState,
  rt as extractTextFromSystem,
  et as extractTextFromWeapon,
  it as getPathFromStructParam,
  ca as getPathFromStructSchema,
  pt as makePluginParamSchema,
  Ea as replaceActorText,
  _a as replaceArmorText,
  Ba as replaceClassText,
  Ua as replaceCommonEventTexts,
  qa as replaceEnemyText,
  _ as replaceEventCommandTexts,
  _a as replaceItemText,
  La as replaceMapDataTexts,
  T as replaceNoteTextByMap,
  Ma as replaceSkillText,
  Ra as replaceStateText,
  ze as replaceSystemTerms,
  Oa as replaceSystemText,
  r as replaceTextByMap,
  Ve as replaceTextForCommand,
  Le as replaceTextForCommandActor,
  Oe as replaceTextForCommandShowChoices,
  Ue as replaceTextForCommandShowMessage,
  Va as replaceTroopTexts,
  _a as replaceWeaponText,
  lt as structToJSONSchema
};
