var fe = Object.defineProperty;
var be = (e, a, t) => a in e ? fe(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var O = (e, a, t) => be(e, typeof a != "symbol" ? a + "" : a, t);
import { i as xe, c$ as Ne, d0 as ve, g as Te, D as X, A as Y, B as Q, cH as I, aL as U, aK as J, aG as q, j as S, k as D, C as j, b as C, c as E, S as H, m as we, cG as Ie, a$ as W, a_ as $, h as Z, b1 as P, cC as ee, cD as ke, cV as Ae, cT as Se, c_ as Ce, cX as Be, b3 as Ee, b2 as $e, cR as Me, r as De, cm as Pe } from "./commands.es.js";
import { JSONPathJS as je } from "jsonpath-js";
import { parseDeepRecord as Re } from "@sigureya/rmmz-plugin-schema";
import { m as ae } from "./mergeItemsSource.es.js";
const te = (e, a, t) => e.filter((r) => r.code === X || r.code === Y || r.code === Q).map((r) => Le(r, a, t)), _e = { [Q]: "weapon", [X]: "armor", [Y]: "item" }, Le = (e, a, t) => {
  const r = xe(e) ? {
    direct: !1,
    variableId: e.parameters[3]
  } : { direct: !0, value: e.parameters[3] }, s = e.parameters[1] === Ne ? a.gain : e.parameters[1] === ve ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: _e[e.code], dataId: Te(e), code: e.code, commandNameMZ: t(e.code), operation: s, ...n, ...r };
}, Ve = (e) => !!e, re = (e, a) => e.pages.map((t, r) => a(t, r, e)), se = (e, a) => e.events.filter(Ve).flatMap((t) => re(t, a)), Oa = (e, a, t) => se(e.map, (r, s, n) => ({
  ...Ge(r),
  commands: te(r.list, a, t),
  eventName: n.name,
  pageIndex: s
})), Ge = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Ka = (e, a, t) => {
  return r = (s, n, m) => ({
    commands: te(s.list, a, t),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((s) => re(s, r));
  var r;
}, Ue = (e, a) => {
  const t = e.trimEnd(), r = a.get(t);
  return r ? r.trimEnd() : t;
}, p = (e, a) => {
  const t = e.trimEnd(), r = a(t);
  return r ? r.trimEnd() : t;
}, g = (e, a) => {
  const t = e.trimEnd(), r = a.replaceText(t);
  return r ? r.trimEnd() : t;
}, Xa = (e, a) => {
  const t = (o) => a.replaceText(o), r = I(e.note, a), s = p(e.name, t), n = p(e.nickname, t), m = p(e.profile, t);
  return { ...e, name: s, nickname: n, profile: m, note: r };
}, Ya = (e, a) => {
  const t = I(e.note, a), r = g(e.name, a);
  return { ...e, name: r, note: t };
}, Qa = (e, a) => {
  const t = I(e.note, a), r = g(e.name, a);
  return { ...e, name: r, note: t };
}, Wa = (e, a) => {
  const t = I(e.note, a), r = g(e.name, a), s = g(e.description, a), n = g(e.message1, a), m = g(e.message2, a);
  return { ...e, name: r, description: s, message1: n, message2: m, note: t };
}, Za = (e, a) => {
  const t = I(e.note, a), r = g(e.name, a), s = g(e.description, a);
  return { ...e, name: r, description: s, note: t };
}, et = (e, a) => {
  const t = I(e.note, a), r = g(e.name, a), s = g(e.message1, a), n = g(e.message2, a), m = g(e.message3, a), o = g(e.message4, a);
  return { ...e, name: r, message1: s, message2: n, message3: m, message4: o, note: t };
}, Je = (e, a) => {
  switch (e.code) {
    case H:
      return He(e, a);
    case E:
      return Fe(e, a);
    case C:
    case j:
    case D:
    case S:
      return qe(e, a);
    case q:
    case J:
    case U:
      return ze(e, a);
    default:
      return e;
  }
}, qe = (e, a) => {
  const t = p(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, He = (e, a) => {
  const t = e.parameters[4] ? p(e.parameters[4], a) : "";
  return we({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, ze = (e, a) => {
  const t = p(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, Fe = (e, a) => {
  const t = e.parameters[0].map((r) => p(r, a));
  return {
    code: E,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, at = (e, a, t = `
`) => Oe(e, (r) => a.get(r), t), Oe = (e, a, t = `
`) => Ie(e.note, (r) => p(r.value, a), t), tt = (e, a) => ne(e, (t) => Ue(t, a)), ne = (e, a) => ({
  params: Ye(e.params, (t) => p(t, a)),
  messages: Qe(e.messages, (t) => p(t, a)),
  basic: Ke(e.basic, (t) => p(t, a)),
  commands: Xe(e.commands, (t) => p(t, a))
}), Ke = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Xe = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Ye = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Qe = (e, a) => ({
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
}), rt = (e, a) => ({
  ...e,
  gameTitle: p(e.gameTitle, a),
  currencyUnit: p(e.currencyUnit, a),
  elements: B(e.elements, a),
  skillTypes: B(e.skillTypes, a),
  weaponTypes: B(e.weaponTypes, a),
  armorTypes: B(e.armorTypes, a),
  equipTypes: B(e.equipTypes, a),
  terms: ne(e.terms, a)
}), B = (e, a) => e.map((t) => p(t, a)), me = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class oe {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return me(this.joinCommandBodies());
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
class z {
  constructor(a, t, r) {
    this.bodyCode = a, this.header = t, this.bodies = r;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return me(this.bodies);
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
const R = (e, a, t, r) => {
  const s = e[a];
  if (!t(s)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(s)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!r(o)) break;
    n.push(o);
  }
  return { header: s, bodies: n };
}, We = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, (m) => m.code === j, (m) => m.code === D))(e, a);
  return Ze(r) ? new z(D, r, t) : new oe(r, t);
}, Ze = (e) => e.parameters[0] === "選択肢ヘルプ", ea = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, (m) => m.code === H, (m) => m.code === C))(e, a);
  return new z(C, r, t);
}, aa = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, (m) => m.code === $, (m) => m.code === W))(e, a);
  return new oe(r, t);
}, ta = (e, a) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, (m) => m.code === Z, (m) => m.code === S))(e, a);
  return new z(S, r, t);
}, ra = {
  [H]: (e, a, t) => t.showMessage(ea(e, a), a, e),
  [$]: (e, a, t) => t.script(aa(e, a), a, e),
  [j]: (e, a, t) => t.comment(We(e, a), a, e),
  [Z]: (e, a, t) => t.showScrollingText(ta(e, a), a, e)
}, ce = (e) => ra[e], sa = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), st = (e) => ie(e, () => []), _ = (e, a) => ie(e, a), ie = (e, a) => e.flatMap((t, r) => na(t, r, e, a)).filter((t) => t !== null), na = (e, a, t, r) => {
  if (e.code === E) return ((n) => n.parameters[0].map((m, o) => ({ code: 102, paramIndex: o, value: m })))(e);
  const s = ce(e.code);
  if (s) {
    const n = s(t, a, ma);
    if (n !== void 0) return [n];
  }
  return e.code === J || e.code === q || e.code === U ? sa(e) : e.code === P ? r(e) : null;
}, ma = {
  comment: (e) => ({ code: j, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return {
      code: C,
      paramIndex: 0,
      value: (a = e).getBodyText(),
      speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "")
    };
    var a, t;
  },
  script: (e) => ((a) => ({ code: $, paramIndex: 0, value: a.getBodyText() }))(e),
  showScrollingText: (e) => ((a) => ({ code: S, paramIndex: 0, value: a.getBodyText() }))(e)
}, oa = (e, a = () => []) => ({ eventId: e.id, commands: _(e.list, a) }), ca = (e, a = () => []) => e.pages.map((t, r) => ({
  eventId: e.id,
  pageIndex: r,
  commands: _(t.list, a)
})), ia = (e, a = () => []) => ({ note: e.note, noteItems: ee(e.note), displayedName: e.displayName, events: da(e, a) }), da = (e, a) => se(e, (t, r, s) => ({
  eventId: s.id,
  pageIndex: r,
  commands: _(t.list, a),
  note: s.note,
  noteItems: ee(s.note),
  name: s.name
})), de = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), pe = (e) => e.kind === "struct", le = (e) => e.attr.kind === "struct[]", pa = (e) => ue[e.kind.replace("[]", "")].type === "number", la = (e) => ue[e.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, f = { type: "number", hasText: !1 }, y = { type: "number", hasText: !1 }, ue = {
  string: A,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: f,
  actor: f,
  class: f,
  enemy: f,
  skill: f,
  state: f,
  item: f,
  weapon: f,
  common_event: f,
  switch: f,
  variable: f,
  troop: f,
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
function ua(e) {
  return ga(e, (a) => !0, (a) => !0);
}
const ga = (e, a, t) => {
  const r = [], s = [], n = [], m = [];
  return e.forEach((o) => {
    if (pe(o.attr)) r.push({ name: o.name, attr: o.attr });
    else if (le(o)) s.push(o);
    else if (de(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  }), { structs: r, structArrays: s, scalars: n, scalarArrays: m };
};
function ha(e) {
  const a = e.map((t) => [t.name, t.attr]);
  return Object.fromEntries(a);
}
const ya = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map((t) => `"${t.name}"`).join(",")}]`;
}, fa = (e, a) => e.map((t) => ({ path: `${a}["${t.name}"][*]`, param: t })), ge = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function he(e, a, t, r) {
  const s = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce((o) => o.frames.length === 0 ? o : function(c, x, N) {
    if (c.frames.length === 0) return c;
    const i = c.frames[c.frames.length - 1], b = c.frames.slice(0, -1);
    if (i.ancestry.includes(i.schemaName)) return { frames: b, items: c.items, errs: [...c.errs, { code: N.cyclicStruct, path: i.basePath }] };
    const l = x.get(i.schemaName);
    if (!l) return {
      frames: b,
      items: c.items,
      errs: [...c.errs, { code: N.undefinedStruct, path: i.basePath }]
    };
    const v = function(h, u) {
      const d = h.ancestry.concat(h.schemaName), T = h.basePath;
      return [...u.structs.map((w) => ({
        schemaName: w.attr.struct,
        basePath: `${T}["${w.name}"]`,
        ancestry: d
      })), ...u.structArrays.map((w) => ({ schemaName: w.attr.struct, basePath: `${T}["${w.name}"][*]`, ancestry: d }))].reverse();
    }(i, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const h = function(u, { path: d, structName: T }) {
        return {
          category: "struct",
          objectSchema: ha(u.scalars),
          name: T,
          scalarArrays: fa(u.scalarArrays, d),
          scalarsPath: u.scalars.length > 0 ? ya(u.scalars, d) : void 0
        };
      }(l, { path: i.basePath, structName: i.schemaName });
      return b.push(...v), {
        frames: b,
        items: [...c.items, h],
        errs: c.errs
      };
    }
    return b.push(...v), { frames: b, items: c.items, errs: c.errs };
  }(o, t, r), s);
  return { items: m.items, errors: m.errs };
}
const ba = (e, a, t, r = ge) => he(e.attr.struct, `${a}["${e.name}"]`, t, r), xa = (e, a, t, r = ge) => he(e.attr.struct, `${a}["${e.name}"][*]`, t, r), Na = (e, a, t, r) => ((s) => pe(s.attr))(t) ? wa(e, t, r) : le(t) ? Ia(e, t, r) : de(t) ? va(e, a, t) : Ta(e, a, t), va = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ta = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), wa = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ba(a, "$", t)
}), Ia = (e, a, t) => ({
  structArrays: xa(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), ka = (e, a) => a.map((t) => Aa(e, t)).flat(3), Aa = (e, a) => [a.top ? L(a, e, a.top, "") : [], a.structs.map((t) => L(a, e, t)), a.structArrays.map((t) => L(a, e, t))], L = (e, a, t, r = t.bundleName) => {
  const s = t.scalar ? ((m, o, c, x, N) => x.pathSegments(c).map(({ value: i, segments: b }) => ((l, v, h, u, d) => {
    if (typeof h == "object" || h === null) return null;
    const T = u[u.length - 1];
    if (typeof T == "number") return null;
    const w = d[T];
    return w ? { rootName: l.rootName, rootType: l.rootCategory, structName: v, value: h, param: { name: T, attr: w } } : null;
  })(m, o, i, b, N)).filter((i) => i !== null))(e, r, a, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map((m) => ((o, c, x, N) => {
    const i = N.jsonPathJS.find(x);
    if (!Array.isArray(i)) return [];
    const b = N.schema.attr;
    return la(b) ? ((l, v, h, u) => v.filter((d) => typeof d == "string").map((d) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: d,
      structName: h,
      param: u
    })))(o, i, c, N.schema) : pa(b) ? ((l, v, h, u) => v.filter((d) => typeof d == "number").map((d) => ({ rootName: l.rootName, rootType: l.rootCategory, value: d, structName: h, param: u })))(o, i, c, N.schema) : [];
  })(e, r, a, m));
  return [s, n].flat(2);
}, V = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: K(e.scalarArrays, e.name, a), scalar: Sa(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: K(e.scalarArrays, e.name, a)
}, K = (e, a, t) => e.map((r) => ({ jsonPathJS: t(r.path), schema: r.param, parentType: a })), Sa = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Ca = (e, a, t, r) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Ba(a, t, r)
}), Ba = (e, a, t) => e.args.map((r) => ((s, n) => {
  const m = s.scalars ? V(s.scalars, n) : void 0, o = s.structs.items.map((x) => V(x, n)), c = s.structArrays.items.map((x) => V(x, n));
  return {
    rootCategory: s.rootCategory,
    rootName: s.rootName,
    top: m,
    structs: o,
    structArrays: c
  };
})(Na("args", e.command, r, a), t)), Ea = (e, a) => {
  const t = ((r) => new Map(r.map((s) => [s.struct, ua(s.params)])))(e.schema.structs);
  return $a(e.pluginName, e.schema.commands, t, a);
}, $a = (e, a, t, r) => a.map((s) => [`${e}:${s.command}`, Ca(e, s, t, r)]), Ma = (e, a) => {
  const [t, r] = e.parameters, s = `${t}:${r}`, n = a.get(s);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: ka(m, o.extractors) }))(Re(e.parameters[3]), n) : { pluginName: t, commandName: r, args: [] };
}, nt = (e) => {
  const a = new Map(e);
  return new F(a);
}, mt = () => new F(/* @__PURE__ */ new Map()), ot = (e) => {
  const a = e.flatMap((t) => Ea(t, (r) => new je(r)));
  return new F(new Map(a));
};
class F {
  constructor(a) {
    O(this, "_commandMap");
    this._commandMap = a;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(a) {
    return ia(a, (t) => this.extractArgs(t));
  }
  extractBattleText(a) {
    return ca(a, (t) => this.extractArgs(t));
  }
  extractCommonEventText(a) {
    return oa(a, (t) => this.extractArgs(t));
  }
  extractArgs(a) {
    const t = Ma(a, this._commandMap);
    return t.args.filter(Da).map((r) => ({
      code: P,
      value: r.value,
      paramIndex: 3,
      argName: r.param.name,
      argTitle: r.param.attr.text ?? r.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    }));
  }
  extractCommandTexts(a) {
    return _(a, (t) => this.extractArgs(t));
  }
}
const Da = (e) => typeof e.value == "string", ct = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), G = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), it = (e) => [G(e, "faceName", "faces"), G(e, "characterName", "characters"), G(e, "battlerName", "sv_actors")], k = (e, a) => ({
  note: Pa(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), Pa = (e) => ke(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), dt = (e) => k(e, ["name", "nickname", "profile"]), pt = (e) => k(e, ["name"]), lt = (e) => k(e, ["name"]), ut = (e) => k(e, ["name", "description", "message1", "message2"]), gt = (e) => k(e, ["name", "description"]), ht = (e) => k(e, ["name", "description"]), yt = (e) => k(e, ["name", "description"]), ft = (e) => k(e, ["name", "message1", "message2", "message3", "message4"]), bt = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Be(e.terms.basic),
    commands: Ce(e.terms.commands),
    messages: Se(e.terms.messages),
    params: Ae(e.terms.params)
  }
}), xt = (e, a, t, r, s, n) => [...Ee(t, r), ...$e(e, a), ...Me(s, n)], Nt = (e, a) => ae(De(a), e), vt = (e, a, t) => {
  const r = Pe(a);
  return ae(t ? [...r, ...t] : r, e);
}, ja = (e, a, t, r) => {
  if (e.code === C || e.code === S || e.code === D) return;
  const s = ce(e.code);
  return s ? s(t, a, r) : e.code === E ? Ra(e) : e.code === q || e.code === J || e.code === U ? _a(e) : e.code !== W ? e : void 0;
}, Ra = (e) => ({
  code: E,
  indent: e.indent,
  parameters: [e.parameters[0].map((a) => a.trimEnd()), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), _a = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), La = (e) => ({ code: $, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), Va = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: C,
    indent: e.header.indent,
    parameters: [a]
  };
  return [Ua(e.header), t];
}, Ga = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: S, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, Ua = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, M = (e, a) => {
  const t = (r) => a.replaceText(r);
  return ((r) => {
    const s = { comment: (n) => n.normalizedCommands(), script: La, showMessage: Va, showScrollingText: Ga };
    return r.map((n, m) => n.code === P ? n : ja(n, m, r, s)).filter((n) => n !== void 0).flat();
  })(e).map((r) => r.code === P ? a.pluginCommand(r) : r.code === $ ? a.scriptCommand(r) : Je(r, t));
}, Tt = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map((t) => ({ conditions: t.conditions, span: t.span, list: M(t.list, a) }))
}), wt = (e, a) => {
  const t = {
    pluginCommand: (r) => r,
    scriptCommand: (r) => r,
    replaceText: a
  };
  return { members: e.members, id: e.id, name: e.name, pages: e.pages.map((r) => ({ conditions: r.conditions, span: r.span, list: M(r.list, t) })) };
}, It = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: M(e.list, a)
}), kt = (e, a) => ({ id: e.id, name: e.name, trigger: e.trigger, switchId: e.switchId, list: M(e.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: a
}) }), At = (e, a) => ye(e, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a, isReplaceTargetNote: () => !1 }), St = (e, a) => ye(e, a), ye = (e, a) => ({
  note: I(e.note, a),
  displayName: g(e.displayName, a),
  events: e.events.map((t) => t ? ((r, s) => ({ id: r.id, name: r.name, x: r.x, y: r.y, note: I(r.note, s), pages: r.pages.map((n) => ({
    ...n,
    list: M(n.list, s)
  })) }))(t, a) : null),
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
  ct as A,
  Pa as B,
  k as C,
  dt as D,
  yt as E,
  lt as F,
  pt as G,
  gt as H,
  ut as I,
  ft as J,
  ht as K,
  bt as L,
  xt as M,
  Nt as N,
  vt as O,
  M as P,
  Tt as Q,
  wt as R,
  It as S,
  kt as T,
  At as U,
  St as V,
  Le as a,
  te as b,
  Oa as c,
  Ka as d,
  Ma as e,
  Za as f,
  Qa as g,
  Ya as h,
  Wa as i,
  et as j,
  Je as k,
  Oe as l,
  at as m,
  tt as n,
  rt as o,
  Ue as p,
  ca as q,
  Xa as r,
  oa as s,
  ia as t,
  st as u,
  _ as v,
  ot as w,
  nt as x,
  mt as y,
  it as z
};
