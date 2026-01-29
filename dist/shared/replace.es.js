var he = Object.defineProperty;
var ye = (e, a, t) => a in e ? he(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var z = (e, a, t) => ye(e, typeof a != "symbol" ? a + "" : a, t);
import { i as fe, c_ as be, c$ as xe, g as Ne, F as Y, B as K, D as X, cH as ve, aM as V, aL as J, aH as U, k as I, l as C, C as D, c as S, d as $, S as G, m as Te, b0 as Z, a$ as E, j as Q, b2 as M, cD as W, cE as we, cT as ke, cZ as Ae, cY as Ie, cV as Se, b4 as Be, b3 as $e, cR as Ee, r as Ce, cn as Me, b as De } from "./make.es2.js";
import { JSONPathJS as Pe } from "jsonpath-js";
import { parseDeepRecord as je } from "@sigureya/rmmz-plugin-schema";
import { m as ee } from "./mergeItemsSource.es.js";
const ae = (e, a, t) => e.filter((r) => r.code === Y || r.code === K || r.code === X).map((r) => Le(r, a, t)), Re = { [X]: "weapon", [Y]: "armor", [K]: "item" }, Le = (e, a, t) => {
  const r = fe(e) ? {
    direct: !1,
    variableId: e.parameters[3]
  } : { direct: !0, value: e.parameters[3] }, s = e.parameters[1] === be ? a.gain : e.parameters[1] === xe ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Re[e.code], dataId: Ne(e), code: e.code, commandNameMZ: t(e.code), operation: s, ...n, ...r };
}, _e = (e) => !!e, te = (e, a) => e.pages.map((t, r) => a(t, r, e)), re = (e, a) => e.events.filter(_e).flatMap((t) => te(t, a)), za = (e, a, t) => re(e.map, (r, s, n) => ({
  ...Ve(r),
  commands: ae(r.list, a, t),
  eventName: n.name,
  pageIndex: s
})), Ve = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Oa = (e, a, t) => {
  return r = (s, n, m) => ({
    commands: ae(s.list, a, t),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((s) => te(s, r));
  var r;
}, Je = (e, a) => {
  const t = e.trimEnd(), r = a.get(t);
  return r ? r.trimEnd() : t;
}, c = (e, a) => {
  const t = e.trimEnd(), r = a(t);
  return r ? r.trimEnd() : t;
}, Ya = (e, a, t = `
`) => w(e, (r) => a.get(r), t), w = (e, a, t = `
`) => ve(e.note, (r) => c(r.value, a), t), Ka = (e, a) => {
  const t = w(e, a), r = c(e.name, a), s = c(e.nickname, a), n = c(e.profile, a);
  return { ...e, name: r, nickname: s, profile: n, note: t };
}, Xa = (e, a) => {
  const t = w(e, a), r = c(e.name, a);
  return { ...e, name: r, note: t };
}, Za = (e, a) => {
  const t = w(e, a), r = c(e.name, a);
  return { ...e, name: r, note: t };
}, Qa = (e, a) => {
  const t = w(e, a), r = c(e.name, a), s = c(e.description, a), n = c(e.message1, a), m = c(e.message2, a);
  return {
    ...e,
    name: r,
    description: s,
    message1: n,
    message2: m,
    note: t
  };
}, Wa = (e, a) => {
  const t = w(e, a), r = c(e.name, a), s = c(e.description, a);
  return { ...e, name: r, description: s, note: t };
}, et = (e, a) => {
  const t = w(e, a), r = c(e.name, a), s = c(e.message1, a), n = c(e.message2, a), m = c(e.message3, a), o = c(e.message4, a);
  return { ...e, name: r, message1: s, message2: n, message3: m, message4: o, note: t };
}, Ue = (e, a) => {
  switch (e.code) {
    case G:
      return He(e, a);
    case $:
      return Fe(e, a);
    case S:
    case D:
    case C:
    case I:
      return Ge(e, a);
    case U:
    case J:
    case V:
      return qe(e, a);
    default:
      return e;
  }
}, Ge = (e, a) => {
  const t = c(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, He = (e, a) => {
  const t = e.parameters[4] ? c(e.parameters[4], a) : "";
  return Te({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, qe = (e, a) => {
  const t = c(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Fe = (e, a) => {
  const t = e.parameters[0].map((r) => c(r, a));
  return {
    code: $,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, at = (e, a) => se(e, (t) => Je(t, a)), se = (e, a) => ({
  params: Ye(e.params, (t) => c(t, a)),
  messages: Ke(e.messages, (t) => c(t, a)),
  basic: ze(e.basic, (t) => c(t, a)),
  commands: Oe(e.commands, (t) => c(t, a))
}), ze = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Oe = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Ye = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Ke = (e, a) => ({
  actionFailure: a(e.actionFailure),
  actorDamage: a(e.actorDamage),
  actorDrain: a(e.actorDrain),
  actorGain: a(e.actorGain),
  actorLoss: a(e.actorLoss),
  actorNoDamage: a(e.actorNoDamage),
  actorNoHit: a(e.actorNoHit),
  actorRecovery: a(e.actorRecovery),
  alwaysDash: a(e.alwaysDash),
  autosave: a(e.autosave),
  bgmVolume: a(e.bgmVolume),
  bgsVolume: a(e.bgsVolume),
  buffAdd: a(e.buffAdd),
  buffRemove: a(e.buffRemove),
  commandRemember: a(e.commandRemember),
  counterAttack: a(e.counterAttack),
  criticalToActor: a(e.criticalToActor),
  criticalToEnemy: a(e.criticalToEnemy),
  defeat: a(e.defeat),
  debuffAdd: a(e.debuffAdd),
  emerge: a(e.emerge),
  enemyDamage: a(e.enemyDamage),
  enemyDrain: a(e.enemyDrain),
  enemyGain: a(e.enemyGain),
  enemyLoss: a(e.enemyLoss),
  enemyNoDamage: a(e.enemyNoDamage),
  enemyNoHit: a(e.enemyNoHit),
  enemyRecovery: a(e.enemyRecovery),
  escapeFailure: a(e.escapeFailure),
  escapeStart: a(e.escapeStart),
  evasion: a(e.evasion),
  expNext: a(e.expNext),
  expTotal: a(e.expTotal),
  file: a(e.file),
  loadMessage: a(e.loadMessage),
  levelUp: a(e.levelUp),
  magicEvasion: a(e.magicEvasion),
  magicReflection: a(e.magicReflection),
  meVolume: a(e.meVolume),
  obtainExp: a(e.obtainExp),
  obtainGold: a(e.obtainGold),
  obtainItem: a(e.obtainItem),
  obtainSkill: a(e.obtainSkill),
  partyName: a(e.partyName),
  possession: a(e.possession),
  preemptive: a(e.preemptive),
  saveMessage: a(e.saveMessage),
  seVolume: a(e.seVolume),
  substitute: a(e.substitute),
  surprise: a(e.surprise),
  touchUI: a(e.touchUI),
  useItem: a(e.useItem),
  victory: a(e.victory)
}), tt = (e, a) => ({
  ...e,
  gameTitle: c(e.gameTitle, a),
  currencyUnit: c(e.currencyUnit, a),
  elements: B(e.elements, a),
  skillTypes: B(e.skillTypes, a),
  weaponTypes: B(e.weaponTypes, a),
  armorTypes: B(e.armorTypes, a),
  equipTypes: B(e.equipTypes, a),
  terms: se(e.terms, a)
}), B = (e, a) => e.map((t) => c(t, a)), ne = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class me {
  constructor(a, t) {
    this.header = a, this.bodies = t;
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
class H {
  constructor(a, t, r) {
    this.bodyCode = a, this.header = t, this.bodies = r;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
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
const P = (e, a, t, r) => {
  const s = e[a];
  if (!t(s)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(s)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!r(o)) break;
    n.push(o);
  }
  return { header: s, bodies: n };
}, Xe = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => P(s, n, (m) => m.code === D, (m) => m.code === C))(e, a);
  return Ze(r) ? new H(C, r, t) : new me(r, t);
}, Ze = (e) => e.parameters[0] === "選択肢ヘルプ", Qe = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => P(s, n, (m) => m.code === G, (m) => m.code === S))(e, a);
  return new H(S, r, t);
}, We = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => P(s, n, (m) => m.code === E, (m) => m.code === Z))(e, a);
  return new me(r, t);
}, ea = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => P(s, n, (m) => m.code === Q, (m) => m.code === I))(e, a);
  return new H(I, r, t);
}, aa = {
  [G]: (e, a, t) => t.showMessage(Qe(e, a), a, e),
  [E]: (e, a, t) => t.script(We(e, a), a, e),
  [D]: (e, a, t) => t.comment(Xe(e, a), a, e),
  [Q]: (e, a, t) => t.showScrollingText(ea(e, a), a, e)
}, oe = (e) => aa[e], ta = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), rt = (e) => ce(e, () => []), j = (e, a) => ce(e, a), ce = (e, a) => e.flatMap((t, r) => ra(t, r, e, a)).filter((t) => t !== null), ra = (e, a, t, r) => {
  if (e.code === $) return ((n) => n.parameters[0].map((m, o) => ({ code: 102, paramIndex: o, value: m })))(e);
  const s = oe(e.code);
  if (s) {
    const n = s(t, a, sa);
    if (n !== void 0) return [n];
  }
  return e.code === J || e.code === U || e.code === V ? ta(e) : e.code === M ? r(e) : null;
}, sa = {
  comment: (e) => ({ code: D, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return {
      code: S,
      paramIndex: 0,
      value: (a = e).getBodyText(),
      speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "")
    };
    var a, t;
  },
  script: (e) => ((a) => ({ code: E, paramIndex: 0, value: a.getBodyText() }))(e),
  showScrollingText: (e) => ((a) => ({ code: I, paramIndex: 0, value: a.getBodyText() }))(e)
}, na = (e, a = () => []) => ({ eventId: e.id, commands: j(e.list, a) }), ma = (e, a = () => []) => e.pages.map((t, r) => ({
  eventId: e.id,
  pageIndex: r,
  commands: j(t.list, a)
})), oa = (e, a = () => []) => ({ note: e.note, noteItems: W(e.note), displayedName: e.displayName, events: ca(e, a) }), ca = (e, a) => re(e, (t, r, s) => ({
  eventId: s.id,
  pageIndex: r,
  commands: j(t.list, a),
  note: s.note,
  noteItems: W(s.note),
  name: s.name
})), ie = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), de = (e) => e.kind === "struct", pe = (e) => e.attr.kind === "struct[]", ia = (e) => le[e.kind.replace("[]", "")].type === "number", da = (e) => le[e.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, y = { type: "number", hasText: !1 }, h = { type: "number", hasText: !1 }, le = {
  string: A,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: y,
  actor: y,
  class: y,
  enemy: y,
  skill: y,
  state: y,
  item: y,
  weapon: y,
  common_event: y,
  switch: y,
  variable: y,
  troop: y,
  multiline_string: A,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": A,
  "string[]": A,
  combo: A,
  select: A,
  any: A,
  struct: { type: "struct" },
  "actor[]": h,
  "enemy[]": h,
  "class[]": h,
  "skill[]": h,
  "state[]": h,
  "item[]": h,
  "weapon[]": h,
  "common_event[]": h,
  "troop[]": h,
  "armor[]": h,
  "switch[]": h,
  "variable[]": h,
  "number[]": h
};
function pa(e) {
  return la(e, (a) => !0, (a) => !0);
}
const la = (e, a, t) => {
  const r = [], s = [], n = [], m = [];
  return e.forEach((o) => {
    if (de(o.attr)) r.push({ name: o.name, attr: o.attr });
    else if (pe(o)) s.push(o);
    else if (ie(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  }), { structs: r, structArrays: s, scalars: n, scalarArrays: m };
};
function ua(e) {
  const a = e.map((t) => [t.name, t.attr]);
  return Object.fromEntries(a);
}
const ga = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map((t) => `"${t.name}"`).join(",")}]`;
}, ha = (e, a) => e.map((t) => ({ path: `${a}["${t.name}"][*]`, param: t })), ue = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ge(e, a, t, r) {
  const s = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce((o) => o.frames.length === 0 ? o : function(i, b, x) {
    if (i.frames.length === 0) return i;
    const d = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (d.ancestry.includes(d.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: x.cyclicStruct, path: d.basePath }] };
    const l = b.get(d.schemaName);
    if (!l) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: x.undefinedStruct, path: d.basePath }]
    };
    const N = function(g, u) {
      const p = g.ancestry.concat(g.schemaName), v = g.basePath;
      return [...u.structs.map((T) => ({
        schemaName: T.attr.struct,
        basePath: `${v}["${T.name}"]`,
        ancestry: p
      })), ...u.structArrays.map((T) => ({ schemaName: T.attr.struct, basePath: `${v}["${T.name}"][*]`, ancestry: p }))].reverse();
    }(d, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const g = function(u, { path: p, structName: v }) {
        return {
          category: "struct",
          objectSchema: ua(u.scalars),
          name: v,
          scalarArrays: ha(u.scalarArrays, p),
          scalarsPath: u.scalars.length > 0 ? ga(u.scalars, p) : void 0
        };
      }(l, { path: d.basePath, structName: d.schemaName });
      return f.push(...N), {
        frames: f,
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return f.push(...N), { frames: f, items: i.items, errs: i.errs };
  }(o, t, r), s);
  return { items: m.items, errors: m.errs };
}
const ya = (e, a, t, r = ue) => ge(e.attr.struct, `${a}["${e.name}"]`, t, r), fa = (e, a, t, r = ue) => ge(e.attr.struct, `${a}["${e.name}"][*]`, t, r), ba = (e, a, t, r) => ((s) => de(s.attr))(t) ? va(e, t, r) : pe(t) ? Ta(e, t, r) : ie(t) ? xa(e, a, t) : Na(e, a, t), xa = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Na = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), va = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ya(a, "$", t)
}), Ta = (e, a, t) => ({
  structArrays: fa(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), wa = (e, a) => a.map((t) => ka(e, t)).flat(3), ka = (e, a) => [a.top ? R(a, e, a.top, "") : [], a.structs.map((t) => R(a, e, t)), a.structArrays.map((t) => R(a, e, t))], R = (e, a, t, r = t.bundleName) => {
  const s = t.scalar ? ((m, o, i, b, x) => b.pathSegments(i).map(({ value: d, segments: f }) => ((l, N, g, u, p) => {
    if (typeof g == "object" || g === null) return null;
    const v = u[u.length - 1];
    if (typeof v == "number") return null;
    const T = p[v];
    return T ? { rootName: l.rootName, rootType: l.rootCategory, structName: N, value: g, param: { name: v, attr: T } } : null;
  })(m, o, d, f, x)).filter((d) => d !== null))(e, r, a, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map((m) => ((o, i, b, x) => {
    const d = x.jsonPathJS.find(b);
    if (!Array.isArray(d)) return [];
    const f = x.schema.attr;
    return da(f) ? ((l, N, g, u) => N.filter((p) => typeof p == "string").map((p) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: p,
      structName: g,
      param: u
    })))(o, d, i, x.schema) : ia(f) ? ((l, N, g, u) => N.filter((p) => typeof p == "number").map((p) => ({ rootName: l.rootName, rootType: l.rootCategory, value: p, structName: g, param: u })))(o, d, i, x.schema) : [];
  })(e, r, a, m));
  return [s, n].flat(2);
}, L = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: O(e.scalarArrays, e.name, a), scalar: Aa(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: O(e.scalarArrays, e.name, a)
}, O = (e, a, t) => e.map((r) => ({ jsonPathJS: t(r.path), schema: r.param, parentType: a })), Aa = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Ia = (e, a, t, r) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Sa(a, t, r)
}), Sa = (e, a, t) => e.args.map((r) => ((s, n) => {
  const m = s.scalars ? L(s.scalars, n) : void 0, o = s.structs.items.map((b) => L(b, n)), i = s.structArrays.items.map((b) => L(b, n));
  return {
    rootCategory: s.rootCategory,
    rootName: s.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(ba("args", e.command, r, a), t)), Ba = (e, a) => {
  const t = ((r) => new Map(r.map((s) => [s.struct, pa(s.params)])))(e.schema.structs);
  return $a(e.pluginName, e.schema.commands, t, a);
}, $a = (e, a, t, r) => a.map((s) => [`${e}:${s.command}`, Ia(e, s, t, r)]), Ea = (e, a) => {
  const [t, r] = e.parameters, s = `${t}:${r}`, n = a.get(s);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: wa(m, o.extractors) }))(je(e.parameters[3]), n) : { pluginName: t, commandName: r, args: [] };
}, st = (e) => {
  const a = new Map(e);
  return new q(a);
}, nt = () => new q(/* @__PURE__ */ new Map()), mt = (e) => {
  const a = e.flatMap((t) => Ba(t, (r) => new Pe(r)));
  return new q(new Map(a));
};
class q {
  constructor(a) {
    z(this, "_commandMap");
    this._commandMap = a;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(a) {
    return oa(a, (t) => this.extractArgs(t));
  }
  extractBattleText(a) {
    return ma(a, (t) => this.extractArgs(t));
  }
  extractCommonEventText(a) {
    return na(a, (t) => this.extractArgs(t));
  }
  extractArgs(a) {
    const t = Ea(a, this._commandMap);
    return t.args.filter(Ca).map((r) => ({
      code: M,
      value: r.value,
      paramIndex: 3,
      argName: r.param.name,
      argTitle: r.param.attr.text ?? r.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    }));
  }
  extractCommandTexts(a) {
    return j(a, (t) => this.extractArgs(t));
  }
}
const Ca = (e) => typeof e.value == "string", ot = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), _ = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), ct = (e) => [_(e, "faceName", "faces"), _(e, "characterName", "characters"), _(e, "battlerName", "sv_actors")], k = (e, a) => ({
  note: Ma(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), Ma = (e) => we(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), it = (e) => k(e, ["name", "nickname", "profile"]), dt = (e) => k(e, ["name"]), pt = (e) => k(e, ["name"]), lt = (e) => k(e, ["name", "description", "message1", "message2"]), ut = (e) => k(e, ["name", "description"]), gt = (e) => k(e, ["name", "description"]), ht = (e) => k(e, ["name", "description"]), yt = (e) => k(e, ["name", "message1", "message2", "message3", "message4"]), ft = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Se(e.terms.basic),
    commands: Ie(e.terms.commands),
    messages: Ae(e.terms.messages),
    params: ke(e.terms.params)
  }
}), bt = (e, a, t, r, s, n) => [...Be(t, r), ...$e(e, a), ...Ee(s, n)], xt = (e, a) => ee(Ce(a), e), Nt = (e, a, t) => {
  const r = Me(a);
  return ee(t ? [...r, ...t] : r, e);
}, Da = (e, a, t, r) => {
  if (e.code === S || e.code === I || e.code === C) return;
  const s = oe(e.code);
  return s ? s(t, a, r) : e.code === $ ? Pa(e) : e.code === U || e.code === J || e.code === V ? ja(e) : e.code !== Z ? e : void 0;
}, Pa = (e) => ({
  code: $,
  indent: e.indent,
  parameters: [e.parameters[0].map((a) => a.trimEnd()), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), ja = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), Ra = (e) => ({ code: E, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), La = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: S,
    indent: e.header.indent,
    parameters: [a]
  };
  return [Va(e.header), t];
}, _a = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: I, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, Va = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, F = (e, a) => {
  const t = (r) => a.text(r);
  return ((r) => {
    const s = { comment: (n) => n.normalizedCommands(), script: Ra, showMessage: La, showScrollingText: _a };
    return r.map((n, m) => n.code === M ? n : Da(n, m, r, s)).filter((n) => n !== void 0).flat();
  })(e).map((r) => r.code === M ? a.pluginCommand(r) : r.code === E ? a.scriptCommand(r) : Ue(r, t));
}, vt = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map((t) => ({ conditions: t.conditions, span: t.span, list: F(t.list, a) }))
}), Tt = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: F(e.list, a)
}), wt = (e, a) => Ja(e, (t) => a.text(t), (t) => F(t, a)), Ja = (e, a, t) => ({
  note: w(e, a),
  displayName: c(e.displayName, a),
  events: De(e.events, t),
  data: e.data,
  tilesetId: e.tilesetId,
  encounterStep: e.encounterStep,
  scrollType: e.scrollType,
  specifyBattleback: e.specifyBattleback,
  autoplayBgm: e.autoplayBgm,
  autoplayBgs: e.autoplayBgs,
  battleback1Name: e.battleback1Name,
  battleback2Name: e.battleback2Name,
  bgm: e.bgm,
  bgs: e.bgs,
  disableDashing: e.disableDashing,
  encounterList: e.encounterList,
  height: e.height,
  width: e.width,
  parallaxLoopX: e.parallaxLoopX,
  parallaxLoopY: e.parallaxLoopY,
  parallaxName: e.parallaxName,
  parallaxShow: e.parallaxShow,
  parallaxSx: e.parallaxSx,
  parallaxSy: e.parallaxSy
});
export {
  ot as A,
  Ma as B,
  k as C,
  it as D,
  ht as E,
  pt as F,
  dt as G,
  ut as H,
  lt as I,
  yt as J,
  gt as K,
  ft as L,
  bt as M,
  xt as N,
  Nt as O,
  F as P,
  vt as Q,
  Tt as R,
  wt as S,
  Le as a,
  ae as b,
  za as c,
  Oa as d,
  Ea as e,
  Wa as f,
  Za as g,
  Xa as h,
  Qa as i,
  et as j,
  Ue as k,
  w as l,
  Ya as m,
  at as n,
  tt as o,
  Je as p,
  ma as q,
  Ka as r,
  na as s,
  oa as t,
  rt as u,
  j as v,
  mt as w,
  st as x,
  nt as y,
  ct as z
};
