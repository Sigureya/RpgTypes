var le = Object.defineProperty;
var ge = (e, t, a) => t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var G = (e, t, a) => ge(e, typeof t != "symbol" ? t + "" : t, a);
import { cY as ye, cZ as he, c_ as fe, B as z, z as H, A as L, cF as be, aK as O, aJ as K, aF as Z, i as $, j as R, C, c as S, d as _, S as J, m as Ne, b as ve, a_ as xe, aZ as V, h as W, b0 as Q, cB as X, cC as Te, cR as Ae, cX as we, cW as Ie, cT as ke, b2 as $e, b1 as Se, cP as Ce, r as Me, cl as Be } from "./make.es2.js";
import { JSONPathJS as Pe } from "jsonpath-js";
import { parseDeepRecord as je } from "@sigureya/rmmz-plugin-schema";
import { m as Y } from "./mergeItemsSource.es.js";
const ee = (e, t, a) => e.reduce((r, n) => (n.code !== z && n.code !== H && n.code !== L || r.push(De(n, t, a)), r), []), Ee = { [L]: "weapon", [z]: "armor", [H]: "item" }, De = (e, t, a) => {
  const r = e.parameters[3] === ye ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === he ? t.gain : e.parameters[0] === fe ? t.lose : t.unknown, m = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Ee[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: n, ...m, ...r };
}, Re = (e) => !!e, te = (e, t) => e.pages.map((a, r) => t(a, r, e)), ae = (e, t) => e.events.filter(Re).flatMap((a) => te(a, t)), jt = (e, t, a) => ae(e.map, (r, n, m) => ({
  ..._e(r),
  commands: ee(r.list, t, a),
  eventName: m.name,
  pageIndex: n
})), _e = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Et = (e, t, a) => {
  return r = (n, m, o) => ({
    commands: ee(n.list, t, a),
    eventName: o.name,
    troopId: o.id,
    pageIndex: m
  }), e.flatMap((n) => te(n, r));
  var r;
}, s = (e, t) => {
  const a = e.trimEnd(), r = t.get(a);
  return r ? r.trimEnd() : a;
}, I = (e, t, a = `
`) => be(e.note, (r) => s(r.value, t), a), Dt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.nickname, t), m = s(e.profile, t);
  return { ...e, name: r, nickname: n, profile: m, note: a };
}, Rt = (e, t) => {
  const a = I(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, _t = (e, t) => {
  const a = I(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Jt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.description, t), m = s(e.message1, t), o = s(e.message2, t);
  return { ...e, name: r, description: n, message1: m, message2: o, note: a };
}, Vt = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.description, t);
  return { ...e, name: r, description: n, note: a };
}, Ut = (e, t) => {
  const a = I(e, t), r = s(e.name, t), n = s(e.message1, t), m = s(e.message2, t), o = s(e.message3, t), c = s(e.message4, t);
  return { ...e, name: r, message1: n, message2: m, message3: o, message4: c, note: a };
}, U = (e, t) => e.map((a) => {
  switch (a.code) {
    case J:
      return Ve(a, t);
    case _:
      return Fe(a, t);
    case S:
    case C:
    case R:
    case $:
      return Je(a, t);
    case Z:
    case K:
    case O:
      return Ue(a, t);
    default:
      return a;
  }
}), Je = (e, t) => {
  const a = s(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, Ve = (e, t) => {
  const a = e.parameters[4] ? s(e.parameters[4], t) : "";
  return Ne({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, Ue = (e, t) => {
  const a = s(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, Fe = (e, t) => {
  const a = e.parameters[0].map((r) => s(r, t));
  return {
    code: _,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ft = (e, t) => {
  const a = e.pages.map((r) => ({ list: U(r.list, t), conditions: r.conditions, span: r.span }));
  return { ...e, pages: a };
}, Gt = (e, t) => ({ ...e, list: U(e.list, t) }), qt = (e, t) => {
  const a = s(e.displayName, t), r = I(e, t), n = { displayName: a, events: ve(e, (m) => U(m, t)), note: r };
  return { ...e, ...n };
}, Ge = (e, t) => ({
  params: He(e.params, t),
  messages: Le(e.messages, t),
  commands: ze(e.commands, t),
  basic: qe(e.basic, t)
}), qe = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], ze = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t), s(e[10], t), s(e[11], t), s(e[12], t), s(e[13], t), s(e[14], t), s(e[15], t), s(e[16], t), s(e[17], t), s(e[18], t), s(e[19], t), "", s(e[21], t), s(e[22], t), "", s(e[24], t), s(e[25], t)], He = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], Le = (e, t) => ({
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
  terms: Ge(e.terms, t)
}), k = (e, t) => e.map((a) => s(a, t)), se = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class re {
  constructor(t, a) {
    this.header = t, this.bodies = a;
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
class F {
  constructor(t, a, r) {
    this.bodyCode = t, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
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
const M = (e, t, a, r) => {
  const n = e[t];
  if (!a(n)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(n)}`);
  const m = [];
  for (let o = t + 1; o < e.length; o++) {
    const c = e[o];
    if (!r(c)) break;
    m.push(c);
  }
  return { header: n, bodies: m };
}, Oe = (e, t) => {
  const { bodies: a, header: r } = ((n, m) => M(n, m, (o) => o.code === C, (o) => o.code === R))(e, t);
  return Ke(r) ? new F(R, r, a) : new re(r, a);
}, Ke = (e) => e.parameters[0] === "選択肢ヘルプ", Ze = (e, t) => {
  const { bodies: a, header: r } = ((n, m) => M(n, m, (o) => o.code === J, (o) => o.code === S))(e, t);
  return new F(S, r, a);
}, We = (e, t) => {
  const { bodies: a, header: r } = ((n, m) => M(n, m, (o) => o.code === V, (o) => o.code === xe))(e, t);
  return new re(r, a);
}, Qe = (e, t) => {
  const { bodies: a, header: r } = ((n, m) => M(n, m, (o) => o.code === W, (o) => o.code === $))(e, t);
  return new F($, r, a);
}, Xe = {
  [J]: (e, t, a) => a.showMessage(Ze(e, t), t, e),
  [V]: (e, t, a) => a.script(We(e, t), t, e),
  [C]: (e, t, a) => a.comment(Oe(e, t), t, e),
  [W]: (e, t, a) => a.showScrollingText(Qe(e, t), t, e)
}, P = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Ye = (e) => e.parameters[0].map((t, a) => ({ code: 102, paramIndex: a, value: t })), Ht = (e) => ne(e, () => []), B = (e, t) => ne(e, t), ne = (e, t) => e.reduce((a, r, n) => {
  if (r.code === _) return [...a, ...Ye(r)];
  const m = (o = r.code, Xe[o]);
  var o;
  if (m) {
    const c = m(e, n, et);
    if (c !== void 0) return [...a, c];
  }
  if (r.code === K) return [...a, P(r)];
  if (r.code === Z) return [...a, P(r)];
  if (r.code === O) return [...a, P(r)];
  if (r.code === Q) {
    const c = t(r);
    return c.length === 0 ? a : [...a, ...c];
  }
  return a;
}, []), et = { comment: (e) => ({
  code: C,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: S, paramIndex: 0, value: (t = e).getBodyText(), speaker: (a = t.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var t, a;
}, script: (e) => ((t) => ({ code: V, paramIndex: 0, value: t.getBodyText() }))(e), showScrollingText: (e) => ((t) => ({ code: $, paramIndex: 0, value: t.getBodyText() }))(e) }, tt = (e, t = () => []) => ({
  eventId: e.id,
  commands: B(e.list, t)
}), at = (e, t = () => []) => e.pages.map((a, r) => ({ eventId: e.id, pageIndex: r, commands: B(a.list, t) })), st = (e, t = () => []) => ({
  note: e.note,
  noteItems: X(e.note),
  displayedName: e.displayName,
  events: rt(e, t)
}), rt = (e, t) => ae(e, (a, r, n) => ({
  eventId: n.id,
  pageIndex: r,
  commands: B(a.list, t),
  note: n.note,
  noteItems: X(n.note),
  name: n.name
})), me = (e) => ((t) => t.kind.endsWith("[]"))(e.attr), oe = (e) => e.kind === "struct", ce = (e) => e.attr.kind === "struct[]", nt = (e) => ie[e.kind.replace("[]", "")].type === "number", mt = (e) => ie[e.kind.replace("[]", "")].type === "string", w = {
  type: "string",
  hasText: !0
}, h = { type: "number", hasText: !1 }, y = { type: "number", hasText: !1 }, ie = {
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
  "actor[]": y,
  "enemy[]": y,
  "class[]": y,
  "skill[]": y,
  "state[]": y,
  "item[]": y,
  "weapon[]": y,
  "common_event[]": y,
  "troop[]": y,
  "armor[]": y,
  "switch[]": y,
  "variable[]": y,
  "number[]": y
};
function ot(e) {
  return ct(e, (t) => !0, (t) => !0);
}
const ct = (e, t, a) => {
  const r = [], n = [], m = [], o = [];
  return e.forEach((c) => {
    if (oe(c.attr)) r.push({ name: c.name, attr: c.attr });
    else if (ce(c)) n.push(c);
    else if (me(c)) {
      if (a(c)) return void o.push(c);
    } else t(c) && m.push(c);
  }), { structs: r, structArrays: n, scalars: m, scalarArrays: o };
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
function pe(e, t, a, r) {
  const n = { items: [], errs: [], frames: [{ schemaName: e, basePath: t, ancestry: [] }] }, m = Math.max(1, 3 * a.size + 5), o = Array.from({
    length: m
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
    const v = function(g, l) {
      const p = g.ancestry.concat(g.schemaName), x = g.basePath;
      return [...l.structs.map((T) => ({
        schemaName: T.attr.struct,
        basePath: `${x}.${T.name}`,
        ancestry: p
      })), ...l.structArrays.map((T) => ({ schemaName: T.attr.struct, basePath: `${x}.${T.name}[*]`, ancestry: p }))].reverse();
    }(d, u);
    if (u.scalars.length > 0 || u.scalarArrays.length > 0) {
      const g = function(l, { path: p, structName: x }) {
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
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return f.push(...v), { frames: f, items: i.items, errs: i.errs };
  }(c, a, r), n);
  return { items: o.items, errors: o.errs };
}
const ut = (e, t, a, r = de) => pe(e.attr.struct, `${t}.${e.name}`, a, r), lt = (e, t, a, r = de) => pe(e.attr.struct, `${t}.${e.name}[*]`, a, r), gt = (e, t, a, r) => ((n) => oe(n.attr))(a) ? ft(e, a, r) : ce(a) ? bt(e, a, r) : me(a) ? yt(e, t, a) : ht(e, t, a), yt = (e, t, a) => ({
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
}), Nt = (e, t) => t.map((a) => vt(e, a)).flat(3), vt = (e, t) => [t.top ? j(t, e, t.top, "") : [], t.structs.map((a) => j(t, e, a)), t.structArrays.map((a) => j(t, e, a))], j = (e, t, a, r = a.bundleName) => {
  const n = a.scalar ? ((o, c, i, b, N) => b.pathSegments(i).map(({ value: d, segments: f }) => ((u, v, g, l, p) => {
    if (typeof g == "object" || g === null) return null;
    const x = l[l.length - 1];
    if (typeof x == "number") return null;
    const T = p[x];
    return T ? { rootName: u.rootName, rootType: u.rootCategory, structName: v, value: g, param: { name: x, attr: T } } : null;
  })(o, c, d, f, N)).filter((d) => d !== null))(e, r, t, a.scalar.jsonPathJS, a.scalar.record) : [], m = a.arrays.map((o) => ((c, i, b, N) => {
    const d = N.jsonPathJS.find(b);
    if (!Array.isArray(d)) return [];
    const f = N.schema.attr;
    return mt(f) ? ((u, v, g, l) => v.filter((p) => typeof p == "string").map((p) => ({
      rootName: u.rootName,
      rootType: u.rootCategory,
      value: p,
      structName: g,
      param: l
    })))(c, d, i, N.schema) : nt(f) ? ((u, v, g, l) => v.filter((p) => typeof p == "number").map((p) => ({ rootName: u.rootName, rootType: u.rootCategory, value: p, structName: g, param: l })))(c, d, i, N.schema) : [];
  })(e, r, t, o));
  return [n, m].flat(2);
}, E = (e, t) => e.scalarsPath ? { bundleName: e.name, arrays: q(e.scalarArrays, e.name, t), scalar: xt(e.scalarsPath, e.objectSchema, t) } : {
  bundleName: e.name,
  arrays: q(e.scalarArrays, e.name, t)
}, q = (e, t, a) => e.map((r) => ({ jsonPathJS: a(r.path), schema: r.param, parentType: t })), xt = (e, t, a) => ({ jsonPathJS: a(e), record: t }), Tt = (e, t, a, r) => ({
  pluginName: e,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: At(t, a, r)
}), At = (e, t, a) => e.args.map((r) => ((n, m) => {
  const o = n.scalars ? E(n.scalars, m) : void 0, c = n.structs.items.map((b) => E(b, m)), i = n.structArrays.items.map((b) => E(b, m));
  return {
    rootCategory: n.rootCategory,
    rootName: n.rootName,
    top: o,
    structs: c,
    structArrays: i
  };
})(gt("args", e.command, r, t), a)), wt = (e, t) => {
  const a = ((r) => new Map(r.map((n) => [n.struct, ot(n.params)])))(e.schema.structs);
  return e.schema.commands.map((r) => [`${e.pluginName}:${r.command}`, Tt(e.pluginName, r, a, t)]);
}, It = (e, t) => {
  const [a, r] = e.parameters, n = `${a}:${r}`, m = t.get(n);
  if (!m) return {
    pluginName: a,
    commandName: r,
    args: []
  };
  return c = je(e.parameters[3]), { pluginName: (i = m).pluginName, commandName: i.commandName, args: Nt(c, i.extractors) };
  var c, i;
}, Lt = (e) => {
  const t = new Map(e);
  return new ue(t);
}, Ot = (e) => {
  const t = (a = (r) => new Pe(r), new Map(e.flatMap((r) => wt(r, a))));
  var a;
  return new ue(t);
};
class ue {
  constructor(t) {
    G(this, "_commandMap");
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
      code: Q,
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
const kt = (e) => typeof e.value == "string", Kt = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), D = (e, t, a) => ({
  folder: a,
  key: t,
  image: e[t],
  id: e.id
}), Zt = (e) => [D(e, "faceName", "faces"), D(e, "characterName", "characters"), D(e, "battlerName", "sv_actors")], A = (e, t) => ({
  note: $t(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), $t = (e) => Te(e.note, (t, a) => ({
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
    basic: ke(e.terms.basic),
    commands: Ie(e.terms.commands),
    messages: we(e.terms.messages),
    params: Ae(e.terms.params)
  }
}), na = (e, t, a, r, n, m) => [...$e(a, r), ...Se(e, t), ...Ce(n, m)], ma = (e, t) => Y(Me(t), e), oa = (e, t, a) => {
  const r = Be(t);
  return Y(a ? [...r, ...a] : r, e);
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
  De as a,
  ee as b,
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
  U as m,
  Je as n,
  Ue as o,
  Fe as p,
  Ve as q,
  Dt as r,
  qt as s,
  I as t,
  s as u,
  Ge as v,
  zt as w,
  at as x,
  tt as y,
  st as z
};
