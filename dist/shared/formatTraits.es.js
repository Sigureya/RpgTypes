var ye = Object.defineProperty;
var ge = (e, t, a) => t in e ? ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var F = (e, t, a) => ge(e, typeof t != "symbol" ? t + "" : t, a);
import { cY as he, cZ as fe, c_ as be, B as q, z, A as H, cF as Ne, aK as L, aJ as O, aF as K, i as $, j as D, C, c as S, d as R, S as _, m as ve, b as xe, a_ as Te, aZ as V, h as Z, b0 as W, cB as Q, cC as Ae, cR as we, cX as Ie, cW as ke, cT as $e, b2 as Se, b1 as Ce, cP as Me, r as Be, cl as Ee } from "./make.es2.js";
import { JSONPathJS as Pe } from "jsonpath-js";
import { parseDeepRecord as je } from "@sigureya/rmmz-plugin-schema";
import { m as X } from "./mergeItemsSource.es.js";
const Y = (e, t, a) => e.reduce((s, r) => (r.code !== q && r.code !== z && r.code !== H || s.push(Re(r, t, a)), s), []), De = { [H]: "weapon", [q]: "armor", [z]: "item" }, Re = (e, t, a) => {
  const s = e.parameters[3] === he ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, r = e.parameters[0] === fe ? t.gain : e.parameters[0] === be ? t.lose : t.unknown, m = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: De[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: r, ...m, ...s };
}, _e = (e) => !!e, ee = (e, t) => e.pages.map((a, s) => t(a, s, e)), te = (e, t) => e.events.filter(_e).flatMap((a) => ee(a, t)), Rt = (e, t, a) => te(e.map, (s, r, m) => ({
  ...Ve(s),
  commands: Y(s.list, t, a),
  eventName: m.name,
  pageIndex: r
})), Ve = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, _t = (e, t, a) => {
  return s = (r, m, n) => ({
    commands: Y(r.list, t, a),
    eventName: n.name,
    troopId: n.id,
    pageIndex: m
  }), e.flatMap((r) => ee(r, s));
  var s;
}, Je = (e, t) => {
  const a = e.trimEnd(), s = t.get(a);
  return s ? s.trimEnd() : a;
}, c = (e, t) => {
  const a = e.trimEnd(), s = t(a);
  return s ? s.trimEnd() : a;
}, Vt = (e, t, a = `
`) => A(e, (s) => t.get(s), a), A = (e, t, a = `
`) => Ne(e.note, (s) => c(s.value, t), a), Jt = (e, t) => {
  const a = A(e, t), s = c(e.name, t), r = c(e.nickname, t), m = c(e.profile, t);
  return { ...e, name: s, nickname: r, profile: m, note: a };
}, Ut = (e, t) => {
  const a = A(e, t), s = c(e.name, t);
  return { ...e, name: s, note: a };
}, Ft = (e, t) => {
  const a = A(e, t), s = c(e.name, t);
  return { ...e, name: s, note: a };
}, Gt = (e, t) => {
  const a = A(e, t), s = c(e.name, t), r = c(e.description, t), m = c(e.message1, t), n = c(e.message2, t);
  return {
    ...e,
    name: s,
    description: r,
    message1: m,
    message2: n,
    note: a
  };
}, qt = (e, t) => {
  const a = A(e, t), s = c(e.name, t), r = c(e.description, t);
  return { ...e, name: s, description: r, note: a };
}, zt = (e, t) => {
  const a = A(e, t), s = c(e.name, t), r = c(e.message1, t), m = c(e.message2, t), n = c(e.message3, t), o = c(e.message4, t);
  return { ...e, name: s, message1: r, message2: m, message3: n, message4: o, note: a };
}, ae = (e, t) => {
  switch (e.code) {
    case _:
      return Fe(e, t);
    case R:
      return qe(e, t);
    case S:
    case C:
    case D:
    case $:
      return Ue(e, t);
    case K:
    case O:
    case L:
      return Ge(e, t);
    default:
      return e;
  }
}, Ue = (e, t) => {
  const a = c(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, Fe = (e, t) => {
  const a = e.parameters[4] ? c(e.parameters[4], t) : "";
  return ve({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, Ge = (e, t) => {
  const a = c(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, qe = (e, t) => {
  const a = e.parameters[0].map((s) => c(s, t));
  return {
    code: R,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ht = (e, t) => {
  const a = e.pages.map((s) => ({ conditions: s.conditions, span: s.span, list: se(s.list, t) }));
  return { ...e, pages: a };
}, Lt = (e, t) => ({ ...e, list: se(e.list, t) }), se = (e, t) => e.map((a) => ae(a, t)), Ot = (e, t) => {
  const a = c(e.displayName, t), s = A(e, t), r = {
    displayName: a,
    events: xe(e, (m) => m.map((n) => ae(n, t))),
    note: s
  };
  return { ...e, ...r };
}, Kt = (e, t) => re(e, (a) => Je(a, t)), re = (e, t) => ({
  params: Le(e.params, (a) => c(a, t)),
  messages: Oe(e.messages, (a) => c(a, t)),
  basic: ze(e.basic, (a) => c(a, t)),
  commands: He(e.commands, (a) => c(a, t))
}), ze = (e, t) => [t(e[0]), t(e[1]), t(e[2]), t(e[3]), t(e[4]), t(e[5]), t(e[6]), t(e[7]), t(e[8]), t(e[9])], He = (e, t) => [t(e[0]), t(e[1]), t(e[2]), t(e[3]), t(e[4]), t(e[5]), t(e[6]), t(e[7]), t(e[8]), t(e[9]), t(e[10]), t(e[11]), t(e[12]), t(e[13]), t(e[14]), t(e[15]), t(e[16]), t(e[17]), t(e[18]), t(e[19]), "", t(e[21]), t(e[22]), "", t(e[24]), t(e[25])], Le = (e, t) => [t(e[0]), t(e[1]), t(e[2]), t(e[3]), t(e[4]), t(e[5]), t(e[6]), t(e[7]), t(e[8]), t(e[9])], Oe = (e, t) => ({
  actionFailure: t(e.actionFailure),
  actorDamage: t(e.actorDamage),
  actorDrain: t(e.actorDrain),
  actorGain: t(e.actorGain),
  actorLoss: t(e.actorLoss),
  actorNoDamage: t(e.actorNoDamage),
  actorNoHit: t(e.actorNoHit),
  actorRecovery: t(e.actorRecovery),
  alwaysDash: t(e.alwaysDash),
  autosave: t(e.autosave),
  bgmVolume: t(e.bgmVolume),
  bgsVolume: t(e.bgsVolume),
  buffAdd: t(e.buffAdd),
  buffRemove: t(e.buffRemove),
  commandRemember: t(e.commandRemember),
  counterAttack: t(e.counterAttack),
  criticalToActor: t(e.criticalToActor),
  criticalToEnemy: t(e.criticalToEnemy),
  defeat: t(e.defeat),
  debuffAdd: t(e.debuffAdd),
  emerge: t(e.emerge),
  enemyDamage: t(e.enemyDamage),
  enemyDrain: t(e.enemyDrain),
  enemyGain: t(e.enemyGain),
  enemyLoss: t(e.enemyLoss),
  enemyNoDamage: t(e.enemyNoDamage),
  enemyNoHit: t(e.enemyNoHit),
  enemyRecovery: t(e.enemyRecovery),
  escapeFailure: t(e.escapeFailure),
  escapeStart: t(e.escapeStart),
  evasion: t(e.evasion),
  expNext: t(e.expNext),
  expTotal: t(e.expTotal),
  file: t(e.file),
  loadMessage: t(e.loadMessage),
  levelUp: t(e.levelUp),
  magicEvasion: t(e.magicEvasion),
  magicReflection: t(e.magicReflection),
  meVolume: t(e.meVolume),
  obtainExp: t(e.obtainExp),
  obtainGold: t(e.obtainGold),
  obtainItem: t(e.obtainItem),
  obtainSkill: t(e.obtainSkill),
  partyName: t(e.partyName),
  possession: t(e.possession),
  preemptive: t(e.preemptive),
  saveMessage: t(e.saveMessage),
  seVolume: t(e.seVolume),
  substitute: t(e.substitute),
  surprise: t(e.surprise),
  touchUI: t(e.touchUI),
  useItem: t(e.useItem),
  victory: t(e.victory)
}), Zt = (e, t) => ({
  ...e,
  gameTitle: c(e.gameTitle, t),
  currencyUnit: c(e.currencyUnit, t),
  elements: k(e.elements, t),
  skillTypes: k(e.skillTypes, t),
  weaponTypes: k(e.weaponTypes, t),
  armorTypes: k(e.armorTypes, t),
  equipTypes: k(e.equipTypes, t),
  terms: re(e.terms, t)
}), k = (e, t) => e.map((a) => c(a, t)), ne = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class me {
  constructor(t, a) {
    this.header = t, this.bodies = a;
  }
  getBodyText() {
    return ne(this.joinCommandBodies());
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
class J {
  constructor(t, a, s) {
    this.bodyCode = t, this.header = a, this.bodies = s;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return ne(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()]
    };
  }
}
const M = (e, t, a, s) => {
  const r = e[t];
  if (!a(r)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(r)}`);
  const m = [];
  for (let n = t + 1; n < e.length; n++) {
    const o = e[n];
    if (!s(o)) break;
    m.push(o);
  }
  return { header: r, bodies: m };
}, Ke = (e, t) => {
  const { bodies: a, header: s } = ((r, m) => M(r, m, (n) => n.code === C, (n) => n.code === D))(e, t);
  return Ze(s) ? new J(D, s, a) : new me(s, a);
}, Ze = (e) => e.parameters[0] === "選択肢ヘルプ", We = (e, t) => {
  const { bodies: a, header: s } = ((r, m) => M(r, m, (n) => n.code === _, (n) => n.code === S))(e, t);
  return new J(S, s, a);
}, Qe = (e, t) => {
  const { bodies: a, header: s } = ((r, m) => M(r, m, (n) => n.code === V, (n) => n.code === Te))(e, t);
  return new me(s, a);
}, Xe = (e, t) => {
  const { bodies: a, header: s } = ((r, m) => M(r, m, (n) => n.code === Z, (n) => n.code === $))(e, t);
  return new J($, s, a);
}, Ye = {
  [_]: (e, t, a) => a.showMessage(We(e, t), t, e),
  [V]: (e, t, a) => a.script(Qe(e, t), t, e),
  [C]: (e, t, a) => a.comment(Ke(e, t), t, e),
  [Z]: (e, t, a) => a.showScrollingText(Xe(e, t), t, e)
}, et = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Wt = (e) => oe(e, () => []), B = (e, t) => oe(e, t), oe = (e, t) => e.flatMap((a, s) => tt(a, s, e, t)).filter((a) => a !== null), tt = (e, t, a, s) => {
  if (e.code === R) return ((n) => n.parameters[0].map((o, i) => ({ code: 102, paramIndex: i, value: o })))(e);
  const r = (m = e.code, Ye[m]);
  var m;
  if (r) {
    const n = r(a, t, at);
    if (n !== void 0) return [n];
  }
  return e.code === O || e.code === K || e.code === L ? et(e) : e.code === W ? s(e) : null;
}, at = {
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
  script: (e) => ((t) => ({ code: V, paramIndex: 0, value: t.getBodyText() }))(e),
  showScrollingText: (e) => ((t) => ({ code: $, paramIndex: 0, value: t.getBodyText() }))(e)
}, st = (e, t = () => []) => ({ eventId: e.id, commands: B(e.list, t) }), rt = (e, t = () => []) => e.pages.map((a, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: B(a.list, t)
})), nt = (e, t = () => []) => ({ note: e.note, noteItems: Q(e.note), displayedName: e.displayName, events: mt(e, t) }), mt = (e, t) => te(e, (a, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: B(a.list, t),
  note: r.note,
  noteItems: Q(r.note),
  name: r.name
})), ce = (e) => ((t) => t.kind.endsWith("[]"))(e.attr), ie = (e) => e.kind === "struct", de = (e) => e.attr.kind === "struct[]", ot = (e) => pe[e.kind.replace("[]", "")].type === "number", ct = (e) => pe[e.kind.replace("[]", "")].type === "string", I = {
  type: "string",
  hasText: !0
}, h = { type: "number", hasText: !1 }, g = { type: "number", hasText: !1 }, pe = {
  string: I,
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
  multiline_string: I,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": I,
  "string[]": I,
  combo: I,
  select: I,
  any: I,
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
function it(e) {
  return dt(e, (t) => !0, (t) => !0);
}
const dt = (e, t, a) => {
  const s = [], r = [], m = [], n = [];
  return e.forEach((o) => {
    if (ie(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (de(o)) r.push(o);
    else if (ce(o)) {
      if (a(o)) return void n.push(o);
    } else t(o) && m.push(o);
  }), { structs: s, structArrays: r, scalars: m, scalarArrays: n };
};
function pt(e) {
  const t = e.map((a) => [a.name, a.attr]);
  return Object.fromEntries(t);
}
const ut = (e, t) => {
  if (e.length !== 0) return `${t}[${e.map((a) => `"${a.name}"`).join(",")}]`;
}, lt = (e, t) => e.map((a) => ({ path: `${t}["${a.name}"][*]`, param: a })), ue = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function le(e, t, a, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: e, basePath: t, ancestry: [] }] }, m = Math.max(1, 3 * a.size + 5), n = Array.from({
    length: m
  }).reduce((o) => o.frames.length === 0 ? o : function(i, b, N) {
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
        basePath: `${x}["${T.name}"]`,
        ancestry: p
      })), ...l.structArrays.map((T) => ({ schemaName: T.attr.struct, basePath: `${x}["${T.name}"][*]`, ancestry: p }))].reverse();
    }(d, u);
    if (u.scalars.length > 0 || u.scalarArrays.length > 0) {
      const y = function(l, { path: p, structName: x }) {
        return {
          category: "struct",
          objectSchema: pt(l.scalars),
          name: x,
          scalarArrays: lt(l.scalarArrays, p),
          scalarsPath: l.scalars.length > 0 ? ut(l.scalars, p) : void 0
        };
      }(u, { path: d.basePath, structName: d.schemaName });
      return f.push(...v), {
        frames: f,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return f.push(...v), { frames: f, items: i.items, errs: i.errs };
  }(o, a, s), r);
  return { items: n.items, errors: n.errs };
}
const yt = (e, t, a, s = ue) => le(e.attr.struct, `${t}["${e.name}"]`, a, s), gt = (e, t, a, s = ue) => le(e.attr.struct, `${t}["${e.name}"][*]`, a, s), ht = (e, t, a, s) => ((r) => ie(r.attr))(a) ? Nt(e, a, s) : de(a) ? vt(e, a, s) : ce(a) ? ft(e, t, a) : bt(e, t, a), ft = (e, t, a) => ({
  rootCategory: e,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${a.name}"][*]`, param: a }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), bt = (e, t, a) => ({ rootCategory: e, rootName: t, scalars: { name: a.attr.kind, objectSchema: { [a.name]: a.attr }, scalarsPath: `$["${a.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Nt = (e, t, a) => ({
  rootName: t.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: yt(t, "$", a)
}), vt = (e, t, a) => ({
  structArrays: gt(t, "$", a),
  rootName: t.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), xt = (e, t) => t.map((a) => Tt(e, a)).flat(3), Tt = (e, t) => [t.top ? E(t, e, t.top, "") : [], t.structs.map((a) => E(t, e, a)), t.structArrays.map((a) => E(t, e, a))], E = (e, t, a, s = a.bundleName) => {
  const r = a.scalar ? ((n, o, i, b, N) => b.pathSegments(i).map(({ value: d, segments: f }) => ((u, v, y, l, p) => {
    if (typeof y == "object" || y === null) return null;
    const x = l[l.length - 1];
    if (typeof x == "number") return null;
    const T = p[x];
    return T ? { rootName: u.rootName, rootType: u.rootCategory, structName: v, value: y, param: { name: x, attr: T } } : null;
  })(n, o, d, f, N)).filter((d) => d !== null))(e, s, t, a.scalar.jsonPathJS, a.scalar.record) : [], m = a.arrays.map((n) => ((o, i, b, N) => {
    const d = N.jsonPathJS.find(b);
    if (!Array.isArray(d)) return [];
    const f = N.schema.attr;
    return ct(f) ? ((u, v, y, l) => v.filter((p) => typeof p == "string").map((p) => ({
      rootName: u.rootName,
      rootType: u.rootCategory,
      value: p,
      structName: y,
      param: l
    })))(o, d, i, N.schema) : ot(f) ? ((u, v, y, l) => v.filter((p) => typeof p == "number").map((p) => ({ rootName: u.rootName, rootType: u.rootCategory, value: p, structName: y, param: l })))(o, d, i, N.schema) : [];
  })(e, s, t, n));
  return [r, m].flat(2);
}, P = (e, t) => e.scalarsPath ? { bundleName: e.name, arrays: G(e.scalarArrays, e.name, t), scalar: At(e.scalarsPath, e.objectSchema, t) } : {
  bundleName: e.name,
  arrays: G(e.scalarArrays, e.name, t)
}, G = (e, t, a) => e.map((s) => ({ jsonPathJS: a(s.path), schema: s.param, parentType: t })), At = (e, t, a) => ({ jsonPathJS: a(e), record: t }), wt = (e, t, a, s) => ({
  pluginName: e,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: It(t, a, s)
}), It = (e, t, a) => e.args.map((s) => ((r, m) => {
  const n = r.scalars ? P(r.scalars, m) : void 0, o = r.structs.items.map((b) => P(b, m)), i = r.structArrays.items.map((b) => P(b, m));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: n,
    structs: o,
    structArrays: i
  };
})(ht("args", e.command, s, t), a)), kt = (e, t) => {
  const a = ((s) => new Map(s.map((r) => [r.struct, it(r.params)])))(e.schema.structs);
  return $t(e.pluginName, e.schema.commands, a, t);
}, $t = (e, t, a, s) => t.map((r) => [`${e}:${r.command}`, wt(e, r, a, s)]), St = (e, t) => {
  const [a, s] = e.parameters, r = `${a}:${s}`, m = t.get(r);
  return m ? ((n, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: xt(n, o.extractors) }))(je(e.parameters[3]), m) : { pluginName: a, commandName: s, args: [] };
}, Qt = (e) => {
  const t = new Map(e);
  return new U(t);
}, Xt = () => new U(/* @__PURE__ */ new Map()), Yt = (e) => {
  const t = e.flatMap((a) => kt(a, (s) => new Pe(s)));
  return new U(new Map(t));
};
class U {
  constructor(t) {
    F(this, "_commandMap");
    this._commandMap = t;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return nt(t, (a) => this.extractArgs(a));
  }
  extractBattleText(t) {
    return rt(t, (a) => this.extractArgs(a));
  }
  extractCommonEventText(t) {
    return st(t, (a) => this.extractArgs(a));
  }
  extractArgs(t) {
    const a = St(t, this._commandMap);
    return a.args.filter(Ct).map((s) => ({
      code: W,
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
const Ct = (e) => typeof e.value == "string", ea = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), j = (e, t, a) => ({ folder: a, key: t, image: e[t], id: e.id }), ta = (e) => [j(e, "faceName", "faces"), j(e, "characterName", "characters"), j(e, "battlerName", "sv_actors")], w = (e, t) => ({
  note: Mt(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), Mt = (e) => Ae(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), aa = (e) => w(e, ["name", "nickname", "profile"]), sa = (e) => w(e, ["name"]), ra = (e) => w(e, ["name"]), na = (e) => w(e, ["name", "description", "message1", "message2"]), ma = (e) => w(e, ["name", "description"]), oa = (e) => w(e, ["name", "description"]), ca = (e) => w(e, ["name", "description"]), ia = (e) => w(e, ["name", "message1", "message2", "message3", "message4"]), da = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: $e(e.terms.basic),
    commands: ke(e.terms.commands),
    messages: Ie(e.terms.messages),
    params: we(e.terms.params)
  }
}), pa = (e, t, a, s, r, m) => [...Se(a, s), ...Ce(e, t), ...Me(r, m)], ua = (e, t) => X(Be(t), e), la = (e, t, a) => {
  const s = Ee(t);
  return X(a ? [...s, ...a] : s, e);
};
export {
  Qt as A,
  Xt as B,
  ta as C,
  ea as D,
  Mt as E,
  w as F,
  aa as G,
  ca as H,
  ra as I,
  sa as J,
  ma as K,
  na as L,
  ia as M,
  oa as N,
  da as O,
  pa as P,
  ua as Q,
  la as R,
  Re as a,
  Y as b,
  Rt as c,
  _t as d,
  St as e,
  qt as f,
  Ft as g,
  Ut as h,
  Gt as i,
  zt as j,
  Lt as k,
  Ht as l,
  ae as m,
  Ot as n,
  A as o,
  Vt as p,
  Kt as q,
  Jt as r,
  Zt as s,
  Je as t,
  rt as u,
  st as v,
  nt as w,
  Wt as x,
  B as y,
  Yt as z
};
