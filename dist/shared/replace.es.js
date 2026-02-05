var ye = Object.defineProperty;
var fe = (e, a, t) => a in e ? ye(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var z = (e, a, t) => fe(e, typeof a != "symbol" ? a + "" : a, t);
import { i as be, c_ as xe, c$ as Ne, g as ve, F as Y, B as K, D as X, cH as Te, aM as U, aL as J, aH as G, k as A, l as M, C as P, c as S, d as $, S as H, m as we, b0 as Z, a$ as E, j as Q, b2 as D, cD as W, cE as Ie, cT as ke, cZ as Ae, cY as Se, cV as Ce, b4 as Be, b3 as $e, cR as Ee, r as Me, cn as De, b as Pe } from "./make.es2.js";
import { JSONPathJS as je } from "jsonpath-js";
import { parseDeepRecord as Re } from "@sigureya/rmmz-plugin-schema";
import { m as ee } from "./mergeItemsSource.es.js";
const ae = (e, a, t) => e.filter((r) => r.code === Y || r.code === K || r.code === X).map((r) => _e(r, a, t)), Le = { [X]: "weapon", [Y]: "armor", [K]: "item" }, _e = (e, a, t) => {
  const r = be(e) ? {
    direct: !1,
    variableId: e.parameters[3]
  } : { direct: !0, value: e.parameters[3] }, s = e.parameters[1] === xe ? a.gain : e.parameters[1] === Ne ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Le[e.code], dataId: ve(e), code: e.code, commandNameMZ: t(e.code), operation: s, ...n, ...r };
}, Ve = (e) => !!e, te = (e, a) => e.pages.map((t, r) => a(t, r, e)), re = (e, a) => e.events.filter(Ve).flatMap((t) => te(t, a)), za = (e, a, t) => re(e.map, (r, s, n) => ({
  ...Ue(r),
  commands: ae(r.list, a, t),
  eventName: n.name,
  pageIndex: s
})), Ue = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Oa = (e, a, t) => {
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
`) => Te(e.note, (r) => c(r.value, a), t), Ka = (e, a) => {
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
}, Ge = (e, a) => {
  switch (e.code) {
    case H:
      return qe(e, a);
    case $:
      return ze(e, a);
    case S:
    case P:
    case M:
    case A:
      return He(e, a);
    case G:
    case J:
    case U:
      return Fe(e, a);
    default:
      return e;
  }
}, He = (e, a) => {
  const t = c(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, qe = (e, a) => {
  const t = e.parameters[4] ? c(e.parameters[4], a) : "";
  return we({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Fe = (e, a) => {
  const t = c(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, ze = (e, a) => {
  const t = e.parameters[0].map((r) => c(r, a));
  return {
    code: $,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, at = (e, a) => se(e, (t) => Je(t, a)), se = (e, a) => ({
  params: Ke(e.params, (t) => c(t, a)),
  messages: Xe(e.messages, (t) => c(t, a)),
  basic: Oe(e.basic, (t) => c(t, a)),
  commands: Ye(e.commands, (t) => c(t, a))
}), Oe = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Ye = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Ke = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Xe = (e, a) => ({
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
class q {
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
const j = (e, a, t, r) => {
  const s = e[a];
  if (!t(s)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(s)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!r(o)) break;
    n.push(o);
  }
  return { header: s, bodies: n };
}, Ze = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => j(s, n, (m) => m.code === P, (m) => m.code === M))(e, a);
  return Qe(r) ? new q(M, r, t) : new me(r, t);
}, Qe = (e) => e.parameters[0] === "選択肢ヘルプ", We = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => j(s, n, (m) => m.code === H, (m) => m.code === S))(e, a);
  return new q(S, r, t);
}, ea = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => j(s, n, (m) => m.code === E, (m) => m.code === Z))(e, a);
  return new me(r, t);
}, aa = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => j(s, n, (m) => m.code === Q, (m) => m.code === A))(e, a);
  return new q(A, r, t);
}, ta = {
  [H]: (e, a, t) => t.showMessage(We(e, a), a, e),
  [E]: (e, a, t) => t.script(ea(e, a), a, e),
  [P]: (e, a, t) => t.comment(Ze(e, a), a, e),
  [Q]: (e, a, t) => t.showScrollingText(aa(e, a), a, e)
}, oe = (e) => ta[e], ra = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), rt = (e) => ce(e, () => []), R = (e, a) => ce(e, a), ce = (e, a) => e.flatMap((t, r) => sa(t, r, e, a)).filter((t) => t !== null), sa = (e, a, t, r) => {
  if (e.code === $) return ((n) => n.parameters[0].map((m, o) => ({ code: 102, paramIndex: o, value: m })))(e);
  const s = oe(e.code);
  if (s) {
    const n = s(t, a, na);
    if (n !== void 0) return [n];
  }
  return e.code === J || e.code === G || e.code === U ? ra(e) : e.code === D ? r(e) : null;
}, na = {
  comment: (e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }),
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
  showScrollingText: (e) => ((a) => ({ code: A, paramIndex: 0, value: a.getBodyText() }))(e)
}, ma = (e, a = () => []) => ({ eventId: e.id, commands: R(e.list, a) }), oa = (e, a = () => []) => e.pages.map((t, r) => ({
  eventId: e.id,
  pageIndex: r,
  commands: R(t.list, a)
})), ca = (e, a = () => []) => ({ note: e.note, noteItems: W(e.note), displayedName: e.displayName, events: ia(e, a) }), ia = (e, a) => re(e, (t, r, s) => ({
  eventId: s.id,
  pageIndex: r,
  commands: R(t.list, a),
  note: s.note,
  noteItems: W(s.note),
  name: s.name
})), ie = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), de = (e) => e.kind === "struct", pe = (e) => e.attr.kind === "struct[]", da = (e) => le[e.kind.replace("[]", "")].type === "number", pa = (e) => le[e.kind.replace("[]", "")].type === "string", k = {
  type: "string",
  hasText: !0
}, y = { type: "number", hasText: !1 }, h = { type: "number", hasText: !1 }, le = {
  string: k,
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
  multiline_string: k,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": k,
  "string[]": k,
  combo: k,
  select: k,
  any: k,
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
function la(e) {
  return ua(e, (a) => !0, (a) => !0);
}
const ua = (e, a, t) => {
  const r = [], s = [], n = [], m = [];
  return e.forEach((o) => {
    if (de(o.attr)) r.push({ name: o.name, attr: o.attr });
    else if (pe(o)) s.push(o);
    else if (ie(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  }), { structs: r, structArrays: s, scalars: n, scalarArrays: m };
};
function ga(e) {
  const a = e.map((t) => [t.name, t.attr]);
  return Object.fromEntries(a);
}
const ha = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map((t) => `"${t.name}"`).join(",")}]`;
}, ya = (e, a) => e.map((t) => ({ path: `${a}["${t.name}"][*]`, param: t })), ue = {
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
          objectSchema: ga(u.scalars),
          name: v,
          scalarArrays: ya(u.scalarArrays, p),
          scalarsPath: u.scalars.length > 0 ? ha(u.scalars, p) : void 0
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
const fa = (e, a, t, r = ue) => ge(e.attr.struct, `${a}["${e.name}"]`, t, r), ba = (e, a, t, r = ue) => ge(e.attr.struct, `${a}["${e.name}"][*]`, t, r), xa = (e, a, t, r) => ((s) => de(s.attr))(t) ? Ta(e, t, r) : pe(t) ? wa(e, t, r) : ie(t) ? Na(e, a, t) : va(e, a, t), Na = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), va = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Ta = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: fa(a, "$", t)
}), wa = (e, a, t) => ({
  structArrays: ba(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Ia = (e, a) => a.map((t) => ka(e, t)).flat(3), ka = (e, a) => [a.top ? L(a, e, a.top, "") : [], a.structs.map((t) => L(a, e, t)), a.structArrays.map((t) => L(a, e, t))], L = (e, a, t, r = t.bundleName) => {
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
    return pa(f) ? ((l, N, g, u) => N.filter((p) => typeof p == "string").map((p) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: p,
      structName: g,
      param: u
    })))(o, d, i, x.schema) : da(f) ? ((l, N, g, u) => N.filter((p) => typeof p == "number").map((p) => ({ rootName: l.rootName, rootType: l.rootCategory, value: p, structName: g, param: u })))(o, d, i, x.schema) : [];
  })(e, r, a, m));
  return [s, n].flat(2);
}, _ = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: O(e.scalarArrays, e.name, a), scalar: Aa(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: O(e.scalarArrays, e.name, a)
}, O = (e, a, t) => e.map((r) => ({ jsonPathJS: t(r.path), schema: r.param, parentType: a })), Aa = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Sa = (e, a, t, r) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Ca(a, t, r)
}), Ca = (e, a, t) => e.args.map((r) => ((s, n) => {
  const m = s.scalars ? _(s.scalars, n) : void 0, o = s.structs.items.map((b) => _(b, n)), i = s.structArrays.items.map((b) => _(b, n));
  return {
    rootCategory: s.rootCategory,
    rootName: s.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(xa("args", e.command, r, a), t)), Ba = (e, a) => {
  const t = ((r) => new Map(r.map((s) => [s.struct, la(s.params)])))(e.schema.structs);
  return $a(e.pluginName, e.schema.commands, t, a);
}, $a = (e, a, t, r) => a.map((s) => [`${e}:${s.command}`, Sa(e, s, t, r)]), Ea = (e, a) => {
  const [t, r] = e.parameters, s = `${t}:${r}`, n = a.get(s);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Ia(m, o.extractors) }))(Re(e.parameters[3]), n) : { pluginName: t, commandName: r, args: [] };
}, st = (e) => {
  const a = new Map(e);
  return new F(a);
}, nt = () => new F(/* @__PURE__ */ new Map()), mt = (e) => {
  const a = e.flatMap((t) => Ba(t, (r) => new je(r)));
  return new F(new Map(a));
};
class F {
  constructor(a) {
    z(this, "_commandMap");
    this._commandMap = a;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(a) {
    return ca(a, (t) => this.extractArgs(t));
  }
  extractBattleText(a) {
    return oa(a, (t) => this.extractArgs(t));
  }
  extractCommonEventText(a) {
    return ma(a, (t) => this.extractArgs(t));
  }
  extractArgs(a) {
    const t = Ea(a, this._commandMap);
    return t.args.filter(Ma).map((r) => ({
      code: D,
      value: r.value,
      paramIndex: 3,
      argName: r.param.name,
      argTitle: r.param.attr.text ?? r.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    }));
  }
  extractCommandTexts(a) {
    return R(a, (t) => this.extractArgs(t));
  }
}
const Ma = (e) => typeof e.value == "string", ot = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), V = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), ct = (e) => [V(e, "faceName", "faces"), V(e, "characterName", "characters"), V(e, "battlerName", "sv_actors")], I = (e, a) => ({
  note: Da(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), Da = (e) => Ie(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), it = (e) => I(e, ["name", "nickname", "profile"]), dt = (e) => I(e, ["name"]), pt = (e) => I(e, ["name"]), lt = (e) => I(e, ["name", "description", "message1", "message2"]), ut = (e) => I(e, ["name", "description"]), gt = (e) => I(e, ["name", "description"]), ht = (e) => I(e, ["name", "description"]), yt = (e) => I(e, ["name", "message1", "message2", "message3", "message4"]), ft = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Ce(e.terms.basic),
    commands: Se(e.terms.commands),
    messages: Ae(e.terms.messages),
    params: ke(e.terms.params)
  }
}), bt = (e, a, t, r, s, n) => [...Be(t, r), ...$e(e, a), ...Ee(s, n)], xt = (e, a) => ee(Me(a), e), Nt = (e, a, t) => {
  const r = De(a);
  return ee(t ? [...r, ...t] : r, e);
}, Pa = (e, a, t, r) => {
  if (e.code === S || e.code === A || e.code === M) return;
  const s = oe(e.code);
  return s ? s(t, a, r) : e.code === $ ? ja(e) : e.code === G || e.code === J || e.code === U ? Ra(e) : e.code !== Z ? e : void 0;
}, ja = (e) => ({
  code: $,
  indent: e.indent,
  parameters: [e.parameters[0].map((a) => a.trimEnd()), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Ra = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), La = (e) => ({ code: E, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), _a = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: S,
    indent: e.header.indent,
    parameters: [a]
  };
  return [Ua(e.header), t];
}, Va = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: A, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, Ua = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, C = (e, a) => {
  const t = (r) => a.text(r);
  return ((r) => {
    const s = { comment: (n) => n.normalizedCommands(), script: La, showMessage: _a, showScrollingText: Va };
    return r.map((n, m) => n.code === D ? n : Pa(n, m, r, s)).filter((n) => n !== void 0).flat();
  })(e).map((r) => r.code === D ? a.pluginCommand(r) : r.code === E ? a.scriptCommand(r) : Ge(r, t));
}, vt = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map((t) => ({ conditions: t.conditions, span: t.span, list: C(t.list, a) }))
}), Tt = (e, a) => {
  const t = {
    pluginCommand: (r) => r,
    scriptCommand: (r) => r,
    text: a
  };
  return { members: e.members, id: e.id, name: c(e.name, a), pages: e.pages.map((r) => ({ conditions: r.conditions, span: r.span, list: C(r.list, t) })) };
}, wt = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: C(e.list, a)
}), It = (e, a) => ({ id: e.id, name: c(e.name, a), trigger: e.trigger, switchId: e.switchId, list: C(e.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  text: a
}) }), kt = (e, a) => he(e, a, (t) => C(t, { pluginCommand: (r) => r, scriptCommand: (r) => r, text: a })), At = (e, a) => he(e, (t) => a.text(t), (t) => C(t, a)), he = (e, a, t) => ({
  note: w(e, a),
  displayName: c(e.displayName, a),
  events: Pe(e.events, t),
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
  Da as B,
  I as C,
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
  C as P,
  vt as Q,
  Tt as R,
  wt as S,
  It as T,
  kt as U,
  At as V,
  _e as a,
  ae as b,
  za as c,
  Oa as d,
  Ea as e,
  Wa as f,
  Za as g,
  Xa as h,
  Qa as i,
  et as j,
  Ge as k,
  w as l,
  Ya as m,
  at as n,
  tt as o,
  Je as p,
  oa as q,
  Ka as r,
  ma as s,
  ca as t,
  rt as u,
  R as v,
  mt as w,
  st as x,
  nt as y,
  ct as z
};
