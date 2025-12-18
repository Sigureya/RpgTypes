var ue = Object.defineProperty;
var le = (e, t, a) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var F = (e, t, a) => le(e, typeof t != "symbol" ? t + "" : t, a);
import { cY as ye, cZ as ge, c_ as he, B as q, z, A as H, cF as fe, aK as L, aJ as O, aF as K, i as $, j as D, C, c as S, d as R, S as _, m as be, b as Ne, a_ as ve, aZ as J, h as Z, b0 as W, cB as Q, cC as xe, cR as Te, cX as Ae, cW as we, cT as Ie, b2 as ke, b1 as $e, cP as Se, r as Ce, cl as Me } from "./make.es2.js";
import { JSONPathJS as Be } from "jsonpath-js";
import { parseDeepRecord as Pe } from "@sigureya/rmmz-plugin-schema";
import { m as X } from "./mergeItemsSource.es.js";
const Y = (e, t, a) => e.reduce((r, n) => (n.code !== q && n.code !== z && n.code !== H || r.push(Ee(n, t, a)), r), []), je = { [H]: "weapon", [q]: "armor", [z]: "item" }, Ee = (e, t, a) => {
  const r = e.parameters[3] === ye ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === ge ? t.gain : e.parameters[0] === he ? t.lose : t.unknown, o = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: je[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: n, ...o, ...r };
}, De = (e) => !!e, ee = (e, t) => e.pages.map((a, r) => t(a, r, e)), te = (e, t) => e.events.filter(De).flatMap((a) => ee(a, t)), jt = (e, t, a) => te(e.map, (r, n, o) => ({
  ...Re(r),
  commands: Y(r.list, t, a),
  eventName: o.name,
  pageIndex: n
})), Re = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Et = (e, t, a) => {
  return r = (n, o, m) => ({
    commands: Y(n.list, t, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: o
  }), e.flatMap((n) => ee(n, r));
  var r;
}, s = (e, t) => {
  const a = e.trimEnd(), r = t.get(a);
  return r ? r.trimEnd() : a;
}, I = (e, t, a = `
`) => fe(e.note, (r) => s(r.value, t), a), Dt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.nickname, t), o = s(e.profile, t);
  return { ...e, name: r, nickname: n, profile: o, note: a };
}, Rt = (e, t) => {
  const a = I(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, _t = (e, t) => {
  const a = I(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Jt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.description, t), o = s(e.message1, t), m = s(e.message2, t);
  return { ...e, name: r, description: n, message1: o, message2: m, note: a };
}, Vt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.description, t);
  return { ...e, name: r, description: n, note: a };
}, Ut = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.message1, t), o = s(e.message2, t), m = s(e.message3, t), c = s(e.message4, t);
  return { ...e, name: r, message1: n, message2: o, message3: m, message4: c, note: a };
}, V = (e, t) => e.map((a) => {
  switch (a.code) {
    case _:
      return Je(a, t);
    case R:
      return Ue(a, t);
    case S:
    case C:
    case D:
    case $:
      return _e(a, t);
    case K:
    case O:
    case L:
      return Ve(a, t);
    default:
      return a;
  }
}), _e = (e, t) => {
  const a = s(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, Je = (e, t) => {
  const a = e.parameters[4] ? s(e.parameters[4], t) : "";
  return be({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, Ve = (e, t) => {
  const a = s(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, Ue = (e, t) => {
  const a = e.parameters[0].map((r) => s(r, t));
  return {
    code: R,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ft = (e, t) => {
  const a = e.pages.map((r) => ({ list: V(r.list, t), conditions: r.conditions, span: r.span }));
  return { ...e, pages: a };
}, Gt = (e, t) => ({ ...e, list: V(e.list, t) }), qt = (e, t) => {
  const a = s(e.displayName, t), r = I(e, t), n = { displayName: a, events: Ne(e, (o) => V(o, t)), note: r };
  return { ...e, ...n };
}, Fe = (e, t) => ({
  params: ze(e.params, t),
  messages: He(e.messages, t),
  commands: qe(e.commands, t),
  basic: Ge(e.basic, t)
}), Ge = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], qe = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t), s(e[10], t), s(e[11], t), s(e[12], t), s(e[13], t), s(e[14], t), s(e[15], t), s(e[16], t), s(e[17], t), s(e[18], t), s(e[19], t), "", s(e[21], t), s(e[22], t), "", s(e[24], t), s(e[25], t)], ze = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], He = (e, t) => ({
  actionFailure: s(e.actionFailure, t),
  actorDamage: s(e.actorDamage, t),
  actorDrain: s(e.actorDrain, t),
  actorGain: s(e.actorGain, t),
  actorLoss: s(e.actorLoss, t),
  actorNoDamage: s(e.actorNoDamage, t),
  actorNoHit: s(e.actorNoHit, t),
  actorRecovery: s(e.actorRecovery, t),
  alwaysDash: s(e.alwaysDash, t),
  autosave: s(e.autosave, t),
  bgmVolume: s(e.bgmVolume, t),
  bgsVolume: s(e.bgsVolume, t),
  buffAdd: s(e.buffAdd, t),
  buffRemove: s(e.buffRemove, t),
  commandRemember: s(e.commandRemember, t),
  counterAttack: s(e.counterAttack, t),
  criticalToActor: s(e.criticalToActor, t),
  criticalToEnemy: s(e.criticalToEnemy, t),
  defeat: s(e.defeat, t),
  debuffAdd: s(e.debuffAdd, t),
  emerge: s(e.emerge, t),
  enemyDamage: s(e.enemyDamage, t),
  enemyDrain: s(e.enemyDrain, t),
  enemyGain: s(e.enemyGain, t),
  enemyLoss: s(e.enemyLoss, t),
  enemyNoDamage: s(e.enemyNoDamage, t),
  enemyNoHit: s(e.enemyNoHit, t),
  enemyRecovery: s(e.enemyRecovery, t),
  escapeFailure: s(e.escapeFailure, t),
  escapeStart: s(e.escapeStart, t),
  evasion: s(e.evasion, t),
  expNext: s(e.expNext, t),
  expTotal: s(e.expTotal, t),
  file: s(e.file, t),
  loadMessage: s(e.loadMessage, t),
  levelUp: s(e.levelUp, t),
  magicEvasion: s(e.magicEvasion, t),
  magicReflection: s(e.magicReflection, t),
  meVolume: s(e.meVolume, t),
  obtainExp: s(e.obtainExp, t),
  obtainGold: s(e.obtainGold, t),
  obtainItem: s(e.obtainItem, t),
  obtainSkill: s(e.obtainSkill, t),
  partyName: s(e.partyName, t),
  possession: s(e.possession, t),
  preemptive: s(e.preemptive, t),
  saveMessage: s(e.saveMessage, t),
  seVolume: s(e.seVolume, t),
  substitute: s(e.substitute, t),
  surprise: s(e.surprise, t),
  touchUI: s(e.touchUI, t),
  useItem: s(e.useItem, t),
  victory: s(e.victory, t)
}), zt = (e, t) => ({
  ...e,
  gameTitle: s(e.gameTitle, t),
  currencyUnit: s(e.currencyUnit, t),
  elements: k(e.elements, t),
  skillTypes: k(e.skillTypes, t),
  weaponTypes: k(e.weaponTypes, t),
  armorTypes: k(e.armorTypes, t),
  equipTypes: k(e.equipTypes, t),
  terms: Fe(e.terms, t)
}), k = (e, t) => e.map((a) => s(a, t)), ae = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class se {
  constructor(t, a) {
    this.header = t, this.bodies = a;
  }
  getBodyText() {
    return ae(this.joinCommandBodies());
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
class U {
  constructor(t, a, r) {
    this.bodyCode = t, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return ae(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const M = (e, t, a, r) => {
  const n = e[t];
  if (!a(n)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(n)}`);
  const o = [];
  for (let m = t + 1; m < e.length; m++) {
    const c = e[m];
    if (!r(c)) break;
    o.push(c);
  }
  return { header: n, bodies: o };
}, Le = (e, t) => {
  const { bodies: a, header: r } = ((n, o) => M(n, o, (m) => m.code === C, (m) => m.code === D))(e, t);
  return Oe(r) ? new U(D, r, a) : new se(r, a);
}, Oe = (e) => e.parameters[0] === "選択肢ヘルプ", Ke = (e, t) => {
  const { bodies: a, header: r } = ((n, o) => M(n, o, (m) => m.code === _, (m) => m.code === S))(e, t);
  return new U(S, r, a);
}, Ze = (e, t) => {
  const { bodies: a, header: r } = ((n, o) => M(n, o, (m) => m.code === J, (m) => m.code === ve))(e, t);
  return new se(r, a);
}, We = (e, t) => {
  const { bodies: a, header: r } = ((n, o) => M(n, o, (m) => m.code === Z, (m) => m.code === $))(e, t);
  return new U($, r, a);
}, Qe = {
  [_]: (e, t, a) => a.showMessage(Ke(e, t), t, e),
  [J]: (e, t, a) => a.script(Ze(e, t), t, e),
  [C]: (e, t, a) => a.comment(Le(e, t), t, e),
  [Z]: (e, t, a) => a.showScrollingText(We(e, t), t, e)
}, Xe = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Ht = (e) => re(e, () => []), B = (e, t) => re(e, t), re = (e, t) => e.flatMap((a, r) => Ye(a, r, e, t)).filter((a) => a !== null), Ye = (e, t, a, r) => {
  if (e.code === R) return ((m) => m.parameters[0].map((c, i) => ({ code: 102, paramIndex: i, value: c })))(e);
  const n = (o = e.code, Qe[o]);
  var o;
  if (n) {
    const m = n(a, t, et);
    if (m !== void 0) return [m];
  }
  return e.code === O || e.code === K || e.code === L ? Xe(e) : e.code === W ? r(e) : null;
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
}, tt = (e, t = () => []) => ({ eventId: e.id, commands: B(e.list, t) }), at = (e, t = () => []) => e.pages.map((a, r) => ({
  eventId: e.id,
  pageIndex: r,
  commands: B(a.list, t)
})), st = (e, t = () => []) => ({ note: e.note, noteItems: Q(e.note), displayedName: e.displayName, events: rt(e, t) }), rt = (e, t) => te(e, (a, r, n) => ({
  eventId: n.id,
  pageIndex: r,
  commands: B(a.list, t),
  note: n.note,
  noteItems: Q(n.note),
  name: n.name
})), ne = (e) => ((t) => t.kind.endsWith("[]"))(e.attr), me = (e) => e.kind === "struct", oe = (e) => e.attr.kind === "struct[]", nt = (e) => ce[e.kind.replace("[]", "")].type === "number", mt = (e) => ce[e.kind.replace("[]", "")].type === "string", w = {
  type: "string",
  hasText: !0
}, h = { type: "number", hasText: !1 }, g = { type: "number", hasText: !1 }, ce = {
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
  const r = [], n = [], o = [], m = [];
  return e.forEach((c) => {
    if (me(c.attr)) r.push({ name: c.name, attr: c.attr });
    else if (oe(c)) n.push(c);
    else if (ne(c)) {
      if (a(c)) return void m.push(c);
    } else t(c) && o.push(c);
  }), { structs: r, structArrays: n, scalars: o, scalarArrays: m };
};
function it(e) {
  const t = e.map((a) => [a.name, a.attr]);
  return Object.fromEntries(t);
}
const dt = (e, t) => {
  if (e.length !== 0) return `${t}[${e.map((a) => `"${a.name}"`).join(",")}]`;
}, pt = (e, t) => e.map((a) => ({ path: `${t}.${a.name}[*]`, param: a })), ie = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function de(e, t, a, r) {
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
  }(c, a, r), n);
  return { items: m.items, errors: m.errs };
}
const ut = (e, t, a, r = ie) => de(e.attr.struct, `${t}.${e.name}`, a, r), lt = (e, t, a, r = ie) => de(e.attr.struct, `${t}.${e.name}[*]`, a, r), yt = (e, t, a, r) => ((n) => me(n.attr))(a) ? ft(e, a, r) : oe(a) ? bt(e, a, r) : ne(a) ? gt(e, t, a) : ht(e, t, a), gt = (e, t, a) => ({
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
}), Nt = (e, t) => t.map((a) => vt(e, a)).flat(3), vt = (e, t) => [t.top ? P(t, e, t.top, "") : [], t.structs.map((a) => P(t, e, a)), t.structArrays.map((a) => P(t, e, a))], P = (e, t, a, r = a.bundleName) => {
  const n = a.scalar ? ((m, c, i, b, N) => b.pathSegments(i).map(({ value: d, segments: f }) => ((u, v, y, l, p) => {
    if (typeof y == "object" || y === null) return null;
    const x = l[l.length - 1];
    if (typeof x == "number") return null;
    const T = p[x];
    return T ? { rootName: u.rootName, rootType: u.rootCategory, structName: v, value: y, param: { name: x, attr: T } } : null;
  })(m, c, d, f, N)).filter((d) => d !== null))(e, r, t, a.scalar.jsonPathJS, a.scalar.record) : [], o = a.arrays.map((m) => ((c, i, b, N) => {
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
  })(e, r, t, m));
  return [n, o].flat(2);
}, j = (e, t) => e.scalarsPath ? { bundleName: e.name, arrays: G(e.scalarArrays, e.name, t), scalar: xt(e.scalarsPath, e.objectSchema, t) } : {
  bundleName: e.name,
  arrays: G(e.scalarArrays, e.name, t)
}, G = (e, t, a) => e.map((r) => ({ jsonPathJS: a(r.path), schema: r.param, parentType: t })), xt = (e, t, a) => ({ jsonPathJS: a(e), record: t }), Tt = (e, t, a, r) => ({
  pluginName: e,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: At(t, a, r)
}), At = (e, t, a) => e.args.map((r) => ((n, o) => {
  const m = n.scalars ? j(n.scalars, o) : void 0, c = n.structs.items.map((b) => j(b, o)), i = n.structArrays.items.map((b) => j(b, o));
  return {
    rootCategory: n.rootCategory,
    rootName: n.rootName,
    top: m,
    structs: c,
    structArrays: i
  };
})(yt("args", e.command, r, t), a)), wt = (e, t) => {
  const a = ((r) => new Map(r.map((n) => [n.struct, ot(n.params)])))(e.schema.structs);
  return e.schema.commands.map((r) => [`${e.pluginName}:${r.command}`, Tt(e.pluginName, r, a, t)]);
}, It = (e, t) => {
  const [a, r] = e.parameters, n = `${a}:${r}`, o = t.get(n);
  if (!o) return {
    pluginName: a,
    commandName: r,
    args: []
  };
  return c = Pe(e.parameters[3]), { pluginName: (i = o).pluginName, commandName: i.commandName, args: Nt(c, i.extractors) };
  var c, i;
}, Lt = (e) => {
  const t = new Map(e);
  return new pe(t);
}, Ot = (e) => {
  const t = (a = (r) => new Be(r), new Map(e.flatMap((r) => wt(r, a))));
  var a;
  return new pe(t);
};
class pe {
  constructor(t) {
    F(this, "_commandMap");
    this._commandMap = t;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return st(t, (a) => this.extractArgs(a));
  }
  extractBattleText(t) {
    return at(t, (a) => this.extractArgs(a));
  }
  extractCommonEventText(t) {
    return tt(t, (a) => this.extractArgs(a));
  }
  extractArgs(t) {
    const a = It(t, this._commandMap);
    return a.args.filter(kt).map((r) => ({
      code: W,
      value: r.value,
      paramIndex: 3,
      argName: r.param.name,
      argTitle: r.param.attr.text ?? r.param.name,
      commandName: a.commandName,
      pluginName: a.pluginName
    }));
  }
  extractCommandTexts(t) {
    return B(t, (a) => this.extractArgs(a));
  }
}
const kt = (e) => typeof e.value == "string", Kt = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), E = (e, t, a) => ({
  folder: a,
  key: t,
  image: e[t],
  id: e.id
}), Zt = (e) => [E(e, "faceName", "faces"), E(e, "characterName", "characters"), E(e, "battlerName", "sv_actors")], A = (e, t) => ({
  note: $t(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), $t = (e) => xe(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), Wt = (e) => A(e, ["name", "nickname", "profile"]), Qt = (e) => A(e, ["name"]), Xt = (e) => A(e, ["name"]), Yt = (e) => A(e, ["name", "description", "message1", "message2"]), ea = (e) => A(e, ["name", "description"]), ta = (e) => A(e, ["name", "description"]), aa = (e) => A(e, ["name", "description"]), sa = (e) => A(e, ["name", "message1", "message2", "message3", "message4"]), ra = (e) => ({
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
}), na = (e, t, a, r, n, o) => [...ke(a, r), ...$e(e, t), ...Se(n, o)], ma = (e, t) => X(Ce(t), e), oa = (e, t, a) => {
  const r = Me(t);
  return X(a ? [...r, ...a] : r, e);
};
export {
  Ht as A,
  B,
  Ot as C,
  Lt as D,
  Zt as E,
  Kt as F,
  $t as G,
  A as H,
  Wt as I,
  aa as J,
  Xt as K,
  Qt as L,
  ea as M,
  Yt as N,
  sa as O,
  ta as P,
  ra as Q,
  na as R,
  ma as S,
  oa as T,
  Ee as a,
  Y as b,
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
  V as m,
  _e as n,
  Ve as o,
  Ue as p,
  Je as q,
  Dt as r,
  qt as s,
  I as t,
  s as u,
  Fe as v,
  zt as w,
  at as x,
  tt as y,
  st as z
};
