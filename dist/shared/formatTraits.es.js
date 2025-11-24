var ue = Object.defineProperty;
var le = (e, t, a) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var q = (e, t, a) => le(e, typeof t != "symbol" ? t + "" : t, a);
import { cY as ye, cZ as ge, c_ as he, B as L, z as O, A as K, cF as fe, aK as Z, aJ as W, aF as Q, i as w, j, C as $, c as k, d as E, S as D, m as be, b as ve, a_ as Ne, aZ as R, h as X, b0 as Y, cB as ee, cC as xe, cR as Te, cX as Ae, cW as Ie, cT as we, b2 as ke, b1 as $e, cP as Se, r as Me, cl as Ce } from "./make.es2.js";
import { JSONPathJS as Be } from "jsonpath-js";
import { parseDeepRecord as Pe } from "@sigureya/rmmz-plugin-schema";
import { m as te } from "./mergeItemsSource.es.js";
const ae = (e, t, a) => e.reduce((s, n) => (n.code !== L && n.code !== O && n.code !== K || s.push(Ee(n, t, a)), s), []), je = { [K]: "weapon", [L]: "armor", [O]: "item" }, Ee = (e, t, a) => {
  const s = e.parameters[3] === ye ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === ge ? t.gain : e.parameters[0] === he ? t.lose : t.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: je[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: n, ...o, ...s };
}, De = (e) => !!e, _ = (e, t) => e.pages.map((a, s) => t(a, s, e)), se = (e, t) => e.events.filter(De).flatMap((a) => _(a, t)), jt = (e, t, a) => se(e.map, (s, n, o) => ({
  ...Re(s),
  commands: ae(s.list, t, a),
  eventName: o.name,
  pageIndex: n
})), Re = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Et = (e, t, a) => {
  return s = (n, o, m) => ({
    commands: ae(n.list, t, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: o
  }), e.flatMap((n) => _(n, s));
  var s;
}, r = (e, t) => {
  const a = e.trimEnd(), s = t.get(a);
  return s ? s.trimEnd() : a;
}, f = (e, t, a = `
`) => fe(e.note, (s) => r(s.value, t), a), Dt = (e, t) => {
  const a = f(e, t), s = r(e.name, t), n = r(e.nickname, t), o = r(e.profile, t);
  return { ...e, name: s, nickname: n, profile: o, note: a };
}, Rt = (e, t) => {
  const a = f(e, t), s = r(e.name, t);
  return { ...e, name: s, note: a };
}, _t = (e, t) => {
  const a = f(e, t), s = r(e.name, t);
  return { ...e, name: s, note: a };
}, Jt = (e, t) => {
  const a = f(e, t), s = r(e.name, t), n = r(e.description, t), o = r(e.message1, t), m = r(e.message2, t);
  return { ...e, name: s, description: n, message1: o, message2: m, note: a };
}, Vt = (e, t) => {
  const a = f(e, t), s = r(e.name, t), n = r(e.description, t);
  return { ...e, name: s, description: n, note: a };
}, Ut = (e, t) => {
  const a = f(e, t), s = r(e.name, t), n = r(e.message1, t), o = r(e.message2, t), m = r(e.message3, t), c = r(e.message4, t);
  return { ...e, name: s, message1: n, message2: o, message3: m, message4: c, note: a };
}, J = (e, t) => e.map((a) => {
  switch (a.code) {
    case D:
      return Je(a, t);
    case E:
      return Ue(a, t);
    case k:
    case $:
    case j:
    case w:
      return _e(a, t);
    case Q:
    case W:
    case Z:
      return Ve(a, t);
    default:
      return a;
  }
}), _e = (e, t) => {
  const a = r(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, Je = (e, t) => {
  const a = e.parameters[4] ? r(e.parameters[4], t) : "";
  return be({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, Ve = (e, t) => {
  const a = r(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, Ue = (e, t) => {
  const a = e.parameters[0].map((s) => r(s, t));
  return {
    code: E,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ft = (e, t) => {
  const a = e.pages.map((s) => ({ list: J(s.list, t), conditions: s.conditions, span: s.span }));
  return { ...e, pages: a };
}, Gt = (e, t) => ({ ...e, list: J(e.list, t) }), qt = (e, t) => {
  const a = r(e.displayName, t), s = f(e, t), n = { displayName: a, events: ve(e, (o) => J(o, t)), note: s };
  return { ...e, ...n };
}, Fe = (e, t) => ({
  params: ze(e.params, t),
  messages: He(e.messages, t),
  commands: qe(e.commands, t),
  basic: Ge(e.basic, t)
}), Ge = (e, t) => [r(e[0], t), r(e[1], t), r(e[2], t), r(e[3], t), r(e[4], t), r(e[5], t), r(e[6], t), r(e[7], t), r(e[8], t), r(e[9], t)], qe = (e, t) => [r(e[0], t), r(e[1], t), r(e[2], t), r(e[3], t), r(e[4], t), r(e[5], t), r(e[6], t), r(e[7], t), r(e[8], t), r(e[9], t), r(e[10], t), r(e[11], t), r(e[12], t), r(e[13], t), r(e[14], t), r(e[15], t), r(e[16], t), r(e[17], t), r(e[18], t), r(e[19], t), "", r(e[21], t), r(e[22], t), "", r(e[24], t), r(e[25], t)], ze = (e, t) => [r(e[0], t), r(e[1], t), r(e[2], t), r(e[3], t), r(e[4], t), r(e[5], t), r(e[6], t), r(e[7], t), r(e[8], t), r(e[9], t)], He = (e, t) => ({
  actionFailure: r(e.actionFailure, t),
  actorDamage: r(e.actorDamage, t),
  actorDrain: r(e.actorDrain, t),
  actorGain: r(e.actorGain, t),
  actorLoss: r(e.actorLoss, t),
  actorNoDamage: r(e.actorNoDamage, t),
  actorNoHit: r(e.actorNoHit, t),
  actorRecovery: r(e.actorRecovery, t),
  alwaysDash: r(e.alwaysDash, t),
  autosave: r(e.autosave, t),
  bgmVolume: r(e.bgmVolume, t),
  bgsVolume: r(e.bgsVolume, t),
  buffAdd: r(e.buffAdd, t),
  buffRemove: r(e.buffRemove, t),
  commandRemember: r(e.commandRemember, t),
  counterAttack: r(e.counterAttack, t),
  criticalToActor: r(e.criticalToActor, t),
  criticalToEnemy: r(e.criticalToEnemy, t),
  defeat: r(e.defeat, t),
  debuffAdd: r(e.debuffAdd, t),
  emerge: r(e.emerge, t),
  enemyDamage: r(e.enemyDamage, t),
  enemyDrain: r(e.enemyDrain, t),
  enemyGain: r(e.enemyGain, t),
  enemyLoss: r(e.enemyLoss, t),
  enemyNoDamage: r(e.enemyNoDamage, t),
  enemyNoHit: r(e.enemyNoHit, t),
  enemyRecovery: r(e.enemyRecovery, t),
  escapeFailure: r(e.escapeFailure, t),
  escapeStart: r(e.escapeStart, t),
  evasion: r(e.evasion, t),
  expNext: r(e.expNext, t),
  expTotal: r(e.expTotal, t),
  file: r(e.file, t),
  loadMessage: r(e.loadMessage, t),
  levelUp: r(e.levelUp, t),
  magicEvasion: r(e.magicEvasion, t),
  magicReflection: r(e.magicReflection, t),
  meVolume: r(e.meVolume, t),
  obtainExp: r(e.obtainExp, t),
  obtainGold: r(e.obtainGold, t),
  obtainItem: r(e.obtainItem, t),
  obtainSkill: r(e.obtainSkill, t),
  partyName: r(e.partyName, t),
  possession: r(e.possession, t),
  preemptive: r(e.preemptive, t),
  saveMessage: r(e.saveMessage, t),
  seVolume: r(e.seVolume, t),
  substitute: r(e.substitute, t),
  surprise: r(e.surprise, t),
  touchUI: r(e.touchUI, t),
  useItem: r(e.useItem, t),
  victory: r(e.victory, t)
}), zt = (e, t) => ({
  ...e,
  gameTitle: r(e.gameTitle, t),
  currencyUnit: r(e.currencyUnit, t),
  elements: A(e.elements, t),
  skillTypes: A(e.skillTypes, t),
  weaponTypes: A(e.weaponTypes, t),
  armorTypes: A(e.armorTypes, t),
  equipTypes: A(e.equipTypes, t),
  terms: Fe(e.terms, t)
}), A = (e, t) => e.map((a) => r(a, t)), re = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class ne {
  constructor(t, a) {
    this.header = t, this.bodies = a;
  }
  getBodyText() {
    return re(this.joinCommandBodies());
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
class V {
  constructor(t, a, s) {
    this.bodyCode = t, this.header = a, this.bodies = s;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return re(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const S = (e, t, a, s) => {
  const n = e[t];
  if (!a(n)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(n)}`);
  const o = [];
  for (let m = t + 1; m < e.length; m++) {
    const c = e[m];
    if (!s(c)) break;
    o.push(c);
  }
  return { header: n, bodies: o };
}, Le = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => S(n, o, (m) => m.code === $, (m) => m.code === j))(e, t);
  return Oe(s) ? new V(j, s, a) : new ne(s, a);
}, Oe = (e) => e.parameters[0] === "選択肢ヘルプ", Ke = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => S(n, o, (m) => m.code === D, (m) => m.code === k))(e, t);
  return new V(k, s, a);
}, Ze = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => S(n, o, (m) => m.code === R, (m) => m.code === Ne))(e, t);
  return new ne(s, a);
}, We = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => S(n, o, (m) => m.code === X, (m) => m.code === w))(e, t);
  return new V(w, s, a);
}, Qe = {
  [D]: (e, t, a) => a.showMessage(Ke(e, t), t, e),
  [R]: (e, t, a) => a.script(Ze(e, t), t, e),
  [$]: (e, t, a) => a.comment(Le(e, t), t, e),
  [X]: (e, t, a) => a.showScrollingText(We(e, t), t, e)
}, M = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Xe = (e) => e.parameters[0].map((t, a) => ({ code: 102, paramIndex: a, value: t })), Ht = (e) => oe(e, () => []), U = (e, t) => oe(e, t), oe = (e, t) => e.reduce((a, s, n) => {
  if (s.code === E) return [...a, ...Xe(s)];
  const o = (m = s.code, Qe[m]);
  var m;
  if (o) {
    const c = o(e, n, Ye);
    if (c !== void 0) return [...a, c];
  }
  if (s.code === W) return [...a, M(s)];
  if (s.code === Q) return [...a, M(s)];
  if (s.code === Z) return [...a, M(s)];
  if (s.code === Y) {
    const c = t(s);
    return c.length === 0 ? a : [...a, ...c];
  }
  return a;
}, []), Ye = { comment: (e) => ({
  code: $,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: k, paramIndex: 0, value: (t = e).getBodyText(), speaker: (a = t.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var t, a;
}, script: (e) => ((t) => ({ code: R, paramIndex: 0, value: t.getBodyText() }))(e), showScrollingText: (e) => ((t) => ({ code: w, paramIndex: 0, value: t.getBodyText() }))(e) }, et = (e, t = () => []) => {
  return a = (s, n, { id: o }) => ({ eventId: o, commands: U(s.list, t) }), e.map((s) => a(s, 0, s));
  var a;
}, tt = (e, t = () => []) => ((a, s) => a.map((n) => _(n, s)))(e, (a, s, { id: n }) => ({
  eventId: n,
  pageIndex: s,
  commands: U(a.list, t)
})), at = (e, t = () => []) => ({ note: e.note, noteItems: ee(e.note), displayedName: e.displayName, events: st(e, t) }), st = (e, t) => se(e, (a, s, n) => ({
  eventId: n.id,
  pageIndex: s,
  commands: U(a.list, t),
  note: n.note,
  noteItems: ee(n.note),
  name: n.name
})), me = (e) => ((t) => t.kind.endsWith("[]"))(e.attr), ce = (e) => e.kind === "struct", ie = (e) => e.attr.kind === "struct[]", h = {
  type: "string",
  hasText: !0
}, p = { type: "number", hasText: !1 }, d = { type: "number", hasText: !1 }, z = {
  string: h,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: p,
  actor: p,
  class: p,
  enemy: p,
  skill: p,
  state: p,
  item: p,
  weapon: p,
  common_event: p,
  switch: p,
  variable: p,
  troop: p,
  multiline_string: h,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": h,
  "string[]": h,
  combo: h,
  select: h,
  any: h,
  struct: { type: "struct" },
  "actor[]": d,
  "enemy[]": d,
  "class[]": d,
  "skill[]": d,
  "state[]": d,
  "item[]": d,
  "weapon[]": d,
  "common_event[]": d,
  "troop[]": d,
  "armor[]": d,
  "switch[]": d,
  "variable[]": d,
  "number[]": d
}, rt = (e) => nt(e, (t) => !0, (t) => !0), nt = (e, t, a) => {
  const s = [], n = [], o = [], m = [];
  return e.forEach((c) => {
    if (ce(c.attr)) s.push({ name: c.name, attr: c.attr });
    else if (ie(c)) n.push(c);
    else if (me(c)) {
      if (a(c)) return void m.push(c);
    } else t(c) && o.push(c);
  }), {
    structs: s,
    structArrays: n,
    scalars: o,
    scalarArrays: m
  };
};
function ot(e) {
  const t = e.map((a) => [a.name, a.attr]);
  return Object.fromEntries(t);
}
const mt = (e, t) => {
  if (e.length !== 0) return `${t}[${e.map((a) => `"${a.name}"`).join(",")}]`;
}, ct = (e, t) => e.map((a) => ({ path: `${t}.${a.name}[*]`, param: a })), de = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function pe(e, t, a, s) {
  const n = { items: [], errs: [], frames: [{ schemaName: e, basePath: t, ancestry: [] }] }, o = Math.max(1, 3 * a.size + 5), m = Array.from({
    length: o
  }).reduce((c) => c.frames.length === 0 ? c : function(i, u, F) {
    if (i.frames.length === 0) return i;
    const l = i.frames[i.frames.length - 1], b = i.frames.slice(0, -1);
    if (l.ancestry.includes(l.schemaName)) return { frames: b, items: i.items, errs: [...i.errs, { code: F.cyclicStruct, path: l.basePath }] };
    const v = u.get(l.schemaName);
    if (!v) return {
      frames: b,
      items: i.items,
      errs: [...i.errs, { code: F.undefinedStruct, path: l.basePath }]
    };
    const G = function(N, g) {
      const x = N.ancestry.concat(N.schemaName), I = N.basePath;
      return [...g.structs.map((T) => ({
        schemaName: T.attr.struct,
        basePath: `${I}.${T.name}`,
        ancestry: x
      })), ...g.structArrays.map((T) => ({ schemaName: T.attr.struct, basePath: `${I}.${T.name}[*]`, ancestry: x }))].reverse();
    }(l, v);
    if (v.scalars.length > 0 || v.scalarArrays.length > 0) {
      const N = function(g, { path: x, structName: I }) {
        return {
          category: "struct",
          objectSchema: ot(g.scalars),
          name: I,
          scalarArrays: ct(g.scalarArrays, x),
          scalarsPath: g.scalars.length > 0 ? mt(g.scalars, x) : void 0
        };
      }(v, { path: l.basePath, structName: l.schemaName });
      return b.push(...G), {
        frames: b,
        items: [...i.items, N],
        errs: i.errs
      };
    }
    return b.push(...G), { frames: b, items: i.items, errs: i.errs };
  }(c, a, s), n);
  return { items: m.items, errors: m.errs };
}
const it = (e, t, a, s = de) => {
  const n = e.map((o) => pe(o.attr.struct, `${t}.${o.name}`, a, s));
  return { items: n.flatMap((o) => o.items), errors: n.flatMap((o) => o.errors) };
}, dt = (e, t, a, s = de) => {
  const n = e.map((o) => pe(o.attr.struct, `${t}.${o.name}[*]`, a, s));
  return { items: n.flatMap((o) => o.items), errors: n.flatMap((o) => o.errors) };
}, pt = (e, t, a, s) => ((n) => ce(n.attr))(a) ? yt(e, a, s) : ie(a) ? gt(e, a, s) : me(a) ? ut(e, t, a) : lt(e, t, a), ut = (e, t, a) => ({ rootCategory: e, rootName: t, scalars: {
  category: e,
  name: "array",
  objectSchema: {},
  scalarsPath: void 0,
  scalarArrays: [{ path: `$.${a.name}[*]`, param: a }]
}, structs: { items: [], errors: [] }, structArrays: { items: [], errors: [] } }), lt = (e, t, a) => ({
  rootCategory: e,
  rootName: t,
  scalars: { category: "primitive", name: a.attr.kind, objectSchema: { [a.name]: a.attr }, scalarsPath: `$.${a.name}`, scalarArrays: [] },
  structArrays: { items: [], errors: [] },
  structs: {
    items: [],
    errors: []
  }
}), yt = (e, t, a) => ({ rootName: t.name, rootCategory: e, scalars: void 0, structArrays: { items: [], errors: [] }, structs: it([t], "$", a) }), gt = (e, t, a) => ({
  structArrays: dt([t], "$", a),
  rootName: t.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), ht = (e, t) => t.map((a) => ft(e, a)).flat(3), ft = (e, t) => [t.top ? C(t, e, t.top) : [], t.structs.map((a) => C(t, e, a)), t.structArrays.map((a) => C(t, e, a))], C = (e, t, a) => {
  const s = a.bundleName;
  return [a.scalar ? bt(e, s, t, a.scalar.jsonPathJS, a.scalar.record) : [], a.arrays.map((n) => vt(e, s, t, n))].flat(2);
}, bt = (e, t, a, s, n) => s.pathSegments(a).reduce((o, { value: m, segments: c }) => {
  if (typeof m == "object") return o;
  const i = c[c.length - 1];
  if (typeof i == "number") return o;
  const u = n[i];
  return u && o.push({
    roootName: e.rootName,
    rootType: e.rootCategory,
    category: "struct",
    name: t,
    value: m,
    param: { name: i, attr: u }
  }), o;
}, []), vt = (e, t, a, s) => {
  const n = s.jsonPathJS.find(a);
  if (!Array.isArray(n)) return [];
  const o = s.schema.attr;
  return ((m) => z[m.kind.replace("[]", "")].type === "string")(o) ? n.filter((m) => typeof m == "string").map((m) => ({
    value: m,
    category: "struct",
    rootType: e.rootCategory,
    roootName: e.rootName,
    name: t,
    param: s.schema
  })) : ((m) => z[m.kind.replace("[]", "")].type === "number")(o) ? n.filter((m) => typeof m == "number").map((m) => ({
    roootName: e.rootName,
    rootType: e.rootCategory,
    value: m,
    category: "struct",
    name: t,
    param: s.schema
  })) : [];
}, B = (e, t) => e.scalarsPath ? { bundleName: e.name, arrays: H(e.scalarArrays, e.name, t), scalar: Nt(e.scalarsPath, e.objectSchema, t) } : {
  bundleName: e.name,
  arrays: H(e.scalarArrays, e.name, t)
}, H = (e, t, a) => e.map((s) => ({ jsonPathJS: a(s.path), schema: s.param, parentType: t })), Nt = (e, t, a) => ({
  jsonPathJS: a(e),
  record: t
}), xt = (e, t, a, s) => ({ pluginName: e, commandName: t.command, desc: t.desc ?? "", text: t.text ?? "", extractors: Tt(t, a, s) }), Tt = (e, t, a) => e.args.map((s) => ((n, o) => {
  const m = n.scalars ? B(n.scalars, o) : void 0, c = n.structs.items.map((u) => B(u, o)), i = n.structArrays.items.map((u) => B(u, o));
  return {
    rootCategory: n.rootCategory,
    rootName: n.rootName,
    top: m,
    structs: c,
    structArrays: i
  };
})(pt("args", e.command, s, t), a)), At = (e, t) => {
  const a = ((s) => new Map(s.map((n) => [n.struct, rt(n.params)])))(e.schema.structs);
  return e.schema.commands.map((s) => [`${e.pluginName}:${s.command}`, xt(e.pluginName, s, a, t)]);
}, It = (e, t) => {
  const [a, s] = e.parameters, n = `${a}:${s}`, o = t.get(n);
  if (!o) return {
    pluginName: a,
    commandName: s,
    values: []
  };
  return c = Pe(e.parameters[3]), { pluginName: (i = o).pluginName, commandName: i.commandName, values: ht(c, i.extractors) };
  var c, i;
}, Lt = (e) => {
  const t = (a = (s) => new Be(s), new Map(e.flatMap((s) => At(s, a))));
  var a;
  return new wt(t);
};
class wt {
  constructor(t) {
    q(this, "_commandMap");
    this._commandMap = t;
  }
  extractMapTexts(t) {
    return at(t, (a) => this.extractArgs(a));
  }
  extractBattleText(t) {
    return tt(t, (a) => this.extractArgs(a));
  }
  extractCommonEventText(t) {
    return et(t, (a) => this.extractArgs(a));
  }
  extractArgs(t) {
    const a = It(t, this._commandMap);
    return a.values.filter(kt).map((s) => ({ code: Y, value: s.value, paramIndex: 3, commandName: a.commandName, pluginName: a.pluginName }));
  }
}
const kt = (e) => typeof e.value == "string", Ot = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), P = (e, t, a) => ({
  folder: a,
  key: t,
  image: e[t],
  id: e.id
}), Kt = (e) => [P(e, "faceName", "faces"), P(e, "characterName", "characters"), P(e, "battlerName", "sv_actors")], y = (e, t) => ({
  note: $t(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), $t = (e) => xe(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), Zt = (e) => y(e, ["name", "nickname", "profile"]), Wt = (e) => y(e, ["name"]), Qt = (e) => y(e, ["name"]), Xt = (e) => y(e, ["name", "description", "message1", "message2"]), Yt = (e) => y(e, ["name", "description"]), ea = (e) => y(e, ["name", "description"]), ta = (e) => y(e, ["name", "description"]), aa = (e) => y(e, ["name", "message1", "message2", "message3", "message4"]), sa = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: we(e.terms.basic),
    commands: Ie(e.terms.commands),
    messages: Ae(e.terms.messages),
    params: Te(e.terms.params)
  }
}), ra = (e, t, a, s, n, o) => [...ke(a, s), ...$e(e, t), ...Se(n, o)], na = (e, t) => te(Me(t), e), oa = (e, t, a) => {
  const s = Ce(t);
  return te(a ? [...s, ...a] : s, e);
};
export {
  Ht as A,
  Lt as B,
  Kt as C,
  Ot as D,
  $t as E,
  y as F,
  Zt as G,
  ta as H,
  Qt as I,
  Wt as J,
  Yt as K,
  Xt as L,
  aa as M,
  ea as N,
  sa as O,
  ra as P,
  na as Q,
  oa as R,
  Ee as a,
  ae as b,
  jt as c,
  Et as d,
  It as e,
  Vt as f,
  _t as g,
  Rt as h,
  Jt as i,
  Ut as j,
  Gt as k,
  Ft as l,
  J as m,
  _e as n,
  Ve as o,
  Ue as p,
  Je as q,
  Dt as r,
  qt as s,
  f as t,
  r as u,
  Fe as v,
  zt as w,
  tt as x,
  et as y,
  at as z
};
