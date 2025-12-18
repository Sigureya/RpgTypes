var ue = Object.defineProperty;
var le = (e, t, a) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var G = (e, t, a) => le(e, typeof t != "symbol" ? t + "" : t, a);
import { cY as ye, cZ as ge, c_ as he, B as z, z as H, A as L, cF as fe, aK as O, aJ as K, aF as Z, i as $, j as D, C, c as S, d as R, S as _, m as be, b as Ne, a_ as ve, aZ as J, h as W, b0 as Q, cB as X, cC as xe, cR as Te, cX as Ae, cW as we, cT as Ie, b2 as ke, b1 as $e, cP as Se, r as Ce, cl as Me } from "./make.es2.js";
import { JSONPathJS as Be } from "jsonpath-js";
import { parseDeepRecord as Pe } from "@sigureya/rmmz-plugin-schema";
import { m as Y } from "./mergeItemsSource.es.js";
const ee = (e, t, a) => e.reduce((s, n) => (n.code !== z && n.code !== H && n.code !== L || s.push(Ee(n, t, a)), s), []), je = { [L]: "weapon", [z]: "armor", [H]: "item" }, Ee = (e, t, a) => {
  const s = e.parameters[3] === ye ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === ge ? t.gain : e.parameters[0] === he ? t.lose : t.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: je[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: n, ...o, ...s };
}, De = (e) => !!e, te = (e, t) => e.pages.map((a, s) => t(a, s, e)), ae = (e, t) => e.events.filter(De).flatMap((a) => te(a, t)), Et = (e, t, a) => ae(e.map, (s, n, o) => ({
  ...Re(s),
  commands: ee(s.list, t, a),
  eventName: o.name,
  pageIndex: n
})), Re = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Dt = (e, t, a) => {
  return s = (n, o, m) => ({
    commands: ee(n.list, t, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: o
  }), e.flatMap((n) => te(n, s));
  var s;
}, r = (e, t) => {
  const a = e.trimEnd(), s = t.get(a);
  return s ? s.trimEnd() : a;
}, I = (e, t, a = `
`) => fe(e.note, (s) => r(s.value, t), a), Rt = (e, t) => {
  const a = I(e, t), s = r(e.name, t), n = r(e.nickname, t), o = r(e.profile, t);
  return { ...e, name: s, nickname: n, profile: o, note: a };
}, _t = (e, t) => {
  const a = I(e, t), s = r(e.name, t);
  return { ...e, name: s, note: a };
}, Jt = (e, t) => {
  const a = I(e, t), s = r(e.name, t);
  return { ...e, name: s, note: a };
}, Ut = (e, t) => {
  const a = I(e, t), s = r(e.name, t), n = r(e.description, t), o = r(e.message1, t), m = r(e.message2, t);
  return { ...e, name: s, description: n, message1: o, message2: m, note: a };
}, Vt = (e, t) => {
  const a = I(e, t), s = r(e.name, t), n = r(e.description, t);
  return { ...e, name: s, description: n, note: a };
}, Ft = (e, t) => {
  const a = I(e, t), s = r(e.name, t), n = r(e.message1, t), o = r(e.message2, t), m = r(e.message3, t), c = r(e.message4, t);
  return { ...e, name: s, message1: n, message2: o, message3: m, message4: c, note: a };
}, U = (e, t) => e.map((a) => {
  switch (a.code) {
    case _:
      return Je(a, t);
    case R:
      return Ve(a, t);
    case S:
    case C:
    case D:
    case $:
      return _e(a, t);
    case Z:
    case K:
    case O:
      return Ue(a, t);
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
}, Ue = (e, t) => {
  const a = r(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, Ve = (e, t) => {
  const a = e.parameters[0].map((s) => r(s, t));
  return {
    code: R,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Gt = (e, t) => {
  const a = e.pages.map((s) => ({ list: U(s.list, t), conditions: s.conditions, span: s.span }));
  return { ...e, pages: a };
}, qt = (e, t) => ({ ...e, list: U(e.list, t) }), zt = (e, t) => {
  const a = r(e.displayName, t), s = I(e, t), n = { displayName: a, events: Ne(e, (o) => U(o, t)), note: s };
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
}), Ht = (e, t) => ({
  ...e,
  gameTitle: r(e.gameTitle, t),
  currencyUnit: r(e.currencyUnit, t),
  elements: k(e.elements, t),
  skillTypes: k(e.skillTypes, t),
  weaponTypes: k(e.weaponTypes, t),
  armorTypes: k(e.armorTypes, t),
  equipTypes: k(e.equipTypes, t),
  terms: Fe(e.terms, t)
}), k = (e, t) => e.map((a) => r(a, t)), re = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class se {
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
const M = (e, t, a, s) => {
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
  const { bodies: a, header: s } = ((n, o) => M(n, o, (m) => m.code === C, (m) => m.code === D))(e, t);
  return Oe(s) ? new V(D, s, a) : new se(s, a);
}, Oe = (e) => e.parameters[0] === "選択肢ヘルプ", Ke = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => M(n, o, (m) => m.code === _, (m) => m.code === S))(e, t);
  return new V(S, s, a);
}, Ze = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => M(n, o, (m) => m.code === J, (m) => m.code === ve))(e, t);
  return new se(s, a);
}, We = (e, t) => {
  const { bodies: a, header: s } = ((n, o) => M(n, o, (m) => m.code === W, (m) => m.code === $))(e, t);
  return new V($, s, a);
}, Qe = {
  [_]: (e, t, a) => a.showMessage(Ke(e, t), t, e),
  [J]: (e, t, a) => a.script(Ze(e, t), t, e),
  [C]: (e, t, a) => a.comment(Le(e, t), t, e),
  [W]: (e, t, a) => a.showScrollingText(We(e, t), t, e)
}, Xe = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Lt = (e) => ne(e, () => []), B = (e, t) => ne(e, t), ne = (e, t) => e.flatMap((a, s) => Ye(a, s, e, t)).filter((a) => a !== null), Ye = (e, t, a, s) => {
  if (e.code === R) return ((m) => m.parameters[0].map((c, i) => ({ code: 102, paramIndex: i, value: c })))(e);
  const n = (o = e.code, Qe[o]);
  var o;
  if (n) {
    const m = n(a, t, et);
    if (m !== void 0) return [m];
  }
  return e.code === K || e.code === Z || e.code === O ? Xe(e) : e.code === Q ? s(e) : null;
}, et = {
  comment: (e) => ({ code: C, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return {
      code: S,
      paramIndex: 0,
      value: (t = e).getBodyText(),
      speaker: (a = t.header, a.parameters[4] ? a.parameters[4].trimEnd() : "")
    };
    var t, a;
  },
  script: (e) => ((t) => ({ code: J, paramIndex: 0, value: t.getBodyText() }))(e),
  showScrollingText: (e) => ((t) => ({ code: $, paramIndex: 0, value: t.getBodyText() }))(e)
}, tt = (e, t = () => []) => ({ eventId: e.id, commands: B(e.list, t) }), at = (e, t = () => []) => e.pages.map((a, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: B(a.list, t)
})), rt = (e, t = () => []) => ({ note: e.note, noteItems: X(e.note), displayedName: e.displayName, events: st(e, t) }), st = (e, t) => ae(e, (a, s, n) => ({
  eventId: n.id,
  pageIndex: s,
  commands: B(a.list, t),
  note: n.note,
  noteItems: X(n.note),
  name: n.name
})), me = (e) => ((t) => t.kind.endsWith("[]"))(e.attr), oe = (e) => e.kind === "struct", ce = (e) => e.attr.kind === "struct[]", nt = (e) => ie[e.kind.replace("[]", "")].type === "number", mt = (e) => ie[e.kind.replace("[]", "")].type === "string", w = {
  type: "string",
  hasText: !0
}, h = { type: "number", hasText: !1 }, g = { type: "number", hasText: !1 }, ie = {
  string: w,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: h,
  actor: h,
  class: h,
  enemy: h,
  skill: h,
  state: h,
  item: h,
  weapon: h,
  common_event: h,
  switch: h,
  variable: h,
  troop: h,
  multiline_string: w,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": w,
  "string[]": w,
  combo: w,
  select: w,
  any: w,
  struct: { type: "struct" },
  "actor[]": g,
  "enemy[]": g,
  "class[]": g,
  "skill[]": g,
  "state[]": g,
  "item[]": g,
  "weapon[]": g,
  "common_event[]": g,
  "troop[]": g,
  "armor[]": g,
  "switch[]": g,
  "variable[]": g,
  "number[]": g
};
function ot(e) {
  return ct(e, (t) => !0, (t) => !0);
}
const ct = (e, t, a) => {
  const s = [], n = [], o = [], m = [];
  return e.forEach((c) => {
    if (oe(c.attr)) s.push({ name: c.name, attr: c.attr });
    else if (ce(c)) n.push(c);
    else if (me(c)) {
      if (a(c)) return void m.push(c);
    } else t(c) && o.push(c);
  }), { structs: s, structArrays: n, scalars: o, scalarArrays: m };
};
function it(e) {
  const t = e.map((a) => [a.name, a.attr]);
  return Object.fromEntries(t);
}
const dt = (e, t) => {
  if (e.length !== 0) return `${t}[${e.map((a) => `"${a.name}"`).join(",")}]`;
}, pt = (e, t) => e.map((a) => ({ path: `${t}.${a.name}[*]`, param: a })), de = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function pe(e, t, a, s) {
  const n = { items: [], errs: [], frames: [{ schemaName: e, basePath: t, ancestry: [] }] }, o = Math.max(1, 3 * a.size + 5), m = Array.from({
    length: o
  }).reduce((c) => c.frames.length === 0 ? c : function(i, b, N) {
    if (i.frames.length === 0) return i;
    const d = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (d.ancestry.includes(d.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: N.cyclicStruct, path: d.basePath }] };
    const u = b.get(d.schemaName);
    if (!u) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: N.undefinedStruct, path: d.basePath }]
    };
    const v = function(y, l) {
      const p = y.ancestry.concat(y.schemaName), x = y.basePath;
      return [...l.structs.map((T) => ({
        schemaName: T.attr.struct,
        basePath: `${x}.${T.name}`,
        ancestry: p
      })), ...l.structArrays.map((T) => ({ schemaName: T.attr.struct, basePath: `${x}.${T.name}[*]`, ancestry: p }))].reverse();
    }(d, u);
    if (u.scalars.length > 0 || u.scalarArrays.length > 0) {
      const y = function(l, { path: p, structName: x }) {
        return {
          category: "struct",
          objectSchema: it(l.scalars),
          name: x,
          scalarArrays: pt(l.scalarArrays, p),
          scalarsPath: l.scalars.length > 0 ? dt(l.scalars, p) : void 0
        };
      }(u, { path: d.basePath, structName: d.schemaName });
      return f.push(...v), {
        frames: f,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return f.push(...v), { frames: f, items: i.items, errs: i.errs };
  }(c, a, s), n);
  return { items: m.items, errors: m.errs };
}
const ut = (e, t, a, s = de) => pe(e.attr.struct, `${t}.${e.name}`, a, s), lt = (e, t, a, s = de) => pe(e.attr.struct, `${t}.${e.name}[*]`, a, s), yt = (e, t, a, s) => ((n) => oe(n.attr))(a) ? ft(e, a, s) : ce(a) ? bt(e, a, s) : me(a) ? gt(e, t, a) : ht(e, t, a), gt = (e, t, a) => ({
  rootCategory: e,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$.${a.name}[*]`, param: a }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), ht = (e, t, a) => ({ rootCategory: e, rootName: t, scalars: { name: a.attr.kind, objectSchema: { [a.name]: a.attr }, scalarsPath: `$.${a.name}`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ft = (e, t, a) => ({ rootName: t.name, rootCategory: e, scalars: void 0, structArrays: { items: [], errors: [] }, structs: ut(t, "$", a) }), bt = (e, t, a) => ({
  structArrays: lt(t, "$", a),
  rootName: t.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Nt = (e, t) => t.map((a) => vt(e, a)).flat(3), vt = (e, t) => [t.top ? P(t, e, t.top, "") : [], t.structs.map((a) => P(t, e, a)), t.structArrays.map((a) => P(t, e, a))], P = (e, t, a, s = a.bundleName) => {
  const n = a.scalar ? ((m, c, i, b, N) => b.pathSegments(i).map(({ value: d, segments: f }) => ((u, v, y, l, p) => {
    if (typeof y == "object" || y === null) return null;
    const x = l[l.length - 1];
    if (typeof x == "number") return null;
    const T = p[x];
    return T ? { rootName: u.rootName, rootType: u.rootCategory, structName: v, value: y, param: { name: x, attr: T } } : null;
  })(m, c, d, f, N)).filter((d) => d !== null))(e, s, t, a.scalar.jsonPathJS, a.scalar.record) : [], o = a.arrays.map((m) => ((c, i, b, N) => {
    const d = N.jsonPathJS.find(b);
    if (!Array.isArray(d)) return [];
    const f = N.schema.attr;
    return mt(f) ? ((u, v, y, l) => v.filter((p) => typeof p == "string").map((p) => ({
      rootName: u.rootName,
      rootType: u.rootCategory,
      value: p,
      structName: y,
      param: l
    })))(c, d, i, N.schema) : nt(f) ? ((u, v, y, l) => v.filter((p) => typeof p == "number").map((p) => ({ rootName: u.rootName, rootType: u.rootCategory, value: p, structName: y, param: l })))(c, d, i, N.schema) : [];
  })(e, s, t, m));
  return [n, o].flat(2);
}, j = (e, t) => e.scalarsPath ? { bundleName: e.name, arrays: q(e.scalarArrays, e.name, t), scalar: xt(e.scalarsPath, e.objectSchema, t) } : {
  bundleName: e.name,
  arrays: q(e.scalarArrays, e.name, t)
}, q = (e, t, a) => e.map((s) => ({ jsonPathJS: a(s.path), schema: s.param, parentType: t })), xt = (e, t, a) => ({ jsonPathJS: a(e), record: t }), Tt = (e, t, a, s) => ({
  pluginName: e,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: At(t, a, s)
}), At = (e, t, a) => e.args.map((s) => ((n, o) => {
  const m = n.scalars ? j(n.scalars, o) : void 0, c = n.structs.items.map((b) => j(b, o)), i = n.structArrays.items.map((b) => j(b, o));
  return {
    rootCategory: n.rootCategory,
    rootName: n.rootName,
    top: m,
    structs: c,
    structArrays: i
  };
})(yt("args", e.command, s, t), a)), wt = (e, t) => {
  const a = ((s) => new Map(s.map((n) => [n.struct, ot(n.params)])))(e.schema.structs);
  return It(e.pluginName, e.schema.commands, a, t);
}, It = (e, t, a, s) => t.map((n) => [`${e}:${n.command}`, Tt(e, n, a, s)]), kt = (e, t) => {
  const [a, s] = e.parameters, n = `${a}:${s}`, o = t.get(n);
  if (!o) return { pluginName: a, commandName: s, args: [] };
  return c = Pe(e.parameters[3]), { pluginName: (i = o).pluginName, commandName: i.commandName, args: Nt(c, i.extractors) };
  var c, i;
}, Ot = (e) => {
  const t = new Map(e);
  return new F(t);
}, Kt = () => new F(/* @__PURE__ */ new Map()), Zt = (e) => {
  const t = e.flatMap((a) => wt(a, (s) => new Be(s)));
  return new F(new Map(t));
};
class F {
  constructor(t) {
    G(this, "_commandMap");
    this._commandMap = t;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return rt(t, (a) => this.extractArgs(a));
  }
  extractBattleText(t) {
    return at(t, (a) => this.extractArgs(a));
  }
  extractCommonEventText(t) {
    return tt(t, (a) => this.extractArgs(a));
  }
  extractArgs(t) {
    const a = kt(t, this._commandMap);
    return a.args.filter($t).map((s) => ({
      code: Q,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: a.commandName,
      pluginName: a.pluginName
    }));
  }
  extractCommandTexts(t) {
    return B(t, (a) => this.extractArgs(a));
  }
}
const $t = (e) => typeof e.value == "string", Wt = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), E = (e, t, a) => ({ folder: a, key: t, image: e[t], id: e.id }), Qt = (e) => [E(e, "faceName", "faces"), E(e, "characterName", "characters"), E(e, "battlerName", "sv_actors")], A = (e, t) => ({
  note: St(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), St = (e) => xe(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), Xt = (e) => A(e, ["name", "nickname", "profile"]), Yt = (e) => A(e, ["name"]), ea = (e) => A(e, ["name"]), ta = (e) => A(e, ["name", "description", "message1", "message2"]), aa = (e) => A(e, ["name", "description"]), ra = (e) => A(e, ["name", "description"]), sa = (e) => A(e, ["name", "description"]), na = (e) => A(e, ["name", "message1", "message2", "message3", "message4"]), ma = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Ie(e.terms.basic),
    commands: we(e.terms.commands),
    messages: Ae(e.terms.messages),
    params: Te(e.terms.params)
  }
}), oa = (e, t, a, s, n, o) => [...ke(a, s), ...$e(e, t), ...Se(n, o)], ca = (e, t) => Y(Ce(t), e), ia = (e, t, a) => {
  const s = Me(t);
  return Y(a ? [...s, ...a] : s, e);
};
export {
  Lt as A,
  B,
  Zt as C,
  Ot as D,
  Kt as E,
  Qt as F,
  Wt as G,
  St as H,
  A as I,
  Xt as J,
  sa as K,
  ea as L,
  Yt as M,
  aa as N,
  ta as O,
  na as P,
  ra as Q,
  ma as R,
  oa as S,
  ca as T,
  ia as U,
  Ee as a,
  ee as b,
  Et as c,
  Dt as d,
  kt as e,
  Vt as f,
  Jt as g,
  _t as h,
  Ut as i,
  Ft as j,
  qt as k,
  Gt as l,
  U as m,
  _e as n,
  Ue as o,
  Ve as p,
  Je as q,
  Rt as r,
  zt as s,
  I as t,
  r as u,
  Fe as v,
  Ht as w,
  at as x,
  tt as y,
  rt as z
};
