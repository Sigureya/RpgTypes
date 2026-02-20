import { aP as ha, be as ba, bf as fa, aJ as xa, b6 as I, aQ as Na, b5 as va, b0 as Q, b1 as Ta, aT as wa, aZ as Ia, aY as ka, aV as Aa, ay as Sa, au as Ca, av as Ea, b7 as Ba, b8 as $a } from "./commands.es.js";
import { b as Y, q as K, N as X, E as U, w as q, v as G, aS as S, P, Q as j, aP as C, aM as B, aO as z, az as Z, ay as $, aR as W, as as D } from "./eventCommandCodes.es.js";
import { JSONPathJS as Ma } from "jsonpath-js";
import { parseDeepRecord as Pa } from "@sigureya/rmmz-plugin-schema";
import { m as aa } from "./mergeItemsSource.es.js";
const ea = (a, e, t) => a.filter(((r) => r.code === Y || r.code === K || r.code === X)).map(((r) => ja(r, e, t))), Da = { [X]: "weapon", [Y]: "armor", [K]: "item" }, ja = (a, e, t) => {
  const r = ha(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, s = a.parameters[1] === ba ? e.gain : a.parameters[1] === fa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: Da[a.code], dataId: xa(a), code: a.code, commandNameMZ: t(a.code), operation: s, ...n, ...r };
}, Ra = (a) => !!a, ta = (a, e) => a.pages.map(((t, r) => e(t, r, a))), ra = (a, e) => a.events.filter(Ra).flatMap(((t) => ta(t, e))), ze = (a, e, t) => ra(a.map, ((r, s, n) => ({
  ...La(r),
  commands: ea(r.list, e, t),
  eventName: n.name,
  pageIndex: s
}))), La = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Fe = (a, e, t) => {
  return r = (s, n, m) => ({
    commands: ea(s.list, e, t),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), a.flatMap(((s) => ta(s, r)));
  var r;
}, Va = (a, e) => {
  const t = a.trimEnd(), r = e.get(t);
  return r ? r.trimEnd() : t;
}, p = (a, e) => {
  const t = a.trimEnd(), r = e(t);
  return r ? r.trimEnd() : t;
}, g = (a, e) => {
  const t = a.trimEnd(), r = e.replaceText(t);
  return r ? r.trimEnd() : t;
}, He = (a, e) => {
  const t = (o) => e.replaceText(o), r = I(a.note, e), s = p(a.name, t), n = p(a.nickname, t), m = p(a.profile, t);
  return { ...a, name: s, nickname: n, profile: m, note: r };
}, Oe = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e);
  return { ...a, name: r, note: t };
}, Qe = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e);
  return { ...a, name: r, note: t };
}, Ye = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.description, e), n = g(a.message1, e), m = g(a.message2, e);
  return { ...a, name: r, description: s, message1: n, message2: m, note: t };
}, Ke = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.description, e);
  return { ...a, name: r, description: s, note: t };
}, Xe = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.message1, e), n = g(a.message2, e), m = g(a.message3, e), o = g(a.message4, e);
  return { ...a, name: r, message1: s, message2: n, message3: m, message4: o, note: t };
}, _a = (a, e) => {
  switch (a.code) {
    case z:
      return Ua(a, e);
    case B:
      return Ga(a, e);
    case C:
    case j:
    case P:
    case S:
      return Ja(a, e);
    case G:
    case q:
    case U:
      return qa(a, e);
    default:
      return a;
  }
}, Ja = (a, e) => {
  const t = p(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Ua = (a, e) => {
  const t = a.parameters[4] ? p(a.parameters[4], e) : "";
  return Na({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, qa = (a, e) => {
  const t = p(a.parameters[1], e);
  return {
    code: a.code,
    indent: a.indent,
    parameters: [a.parameters[0], t]
  };
}, Ga = (a, e) => {
  const t = a.parameters[0].map(((r) => p(r, e)));
  return {
    code: B,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Ze = (a, e, t = `
`) => za(a, ((r) => e.get(r)), t), za = (a, e, t = `
`) => va(a.note, ((r) => p(r.value, e)), t), We = (a, e) => sa(a, ((t) => Va(t, e))), sa = (a, e) => ({
  params: Oa(a.params, ((t) => p(t, e))),
  messages: Qa(a.messages, ((t) => p(t, e))),
  basic: Fa(a.basic, ((t) => p(t, e))),
  commands: Ha(a.commands, ((t) => p(t, e)))
}), Fa = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ha = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Oa = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Qa = (a, e) => ({
  actionFailure: e(a.actionFailure),
  actorDamage: e(a.actorDamage),
  actorDrain: e(a.actorDrain),
  actorGain: e(a.actorGain),
  actorLoss: e(a.actorLoss),
  actorNoDamage: e(a.actorNoDamage),
  actorNoHit: e(a.actorNoHit),
  actorRecovery: e(a.actorRecovery),
  alwaysDash: e(a.alwaysDash),
  autosave: e(a.autosave),
  bgmVolume: e(a.bgmVolume),
  bgsVolume: e(a.bgsVolume),
  buffAdd: e(a.buffAdd),
  buffRemove: e(a.buffRemove),
  commandRemember: e(a.commandRemember),
  counterAttack: e(a.counterAttack),
  criticalToActor: e(a.criticalToActor),
  criticalToEnemy: e(a.criticalToEnemy),
  defeat: e(a.defeat),
  debuffAdd: e(a.debuffAdd),
  emerge: e(a.emerge),
  enemyDamage: e(a.enemyDamage),
  enemyDrain: e(a.enemyDrain),
  enemyGain: e(a.enemyGain),
  enemyLoss: e(a.enemyLoss),
  enemyNoDamage: e(a.enemyNoDamage),
  enemyNoHit: e(a.enemyNoHit),
  enemyRecovery: e(a.enemyRecovery),
  escapeFailure: e(a.escapeFailure),
  escapeStart: e(a.escapeStart),
  evasion: e(a.evasion),
  expNext: e(a.expNext),
  expTotal: e(a.expTotal),
  file: e(a.file),
  loadMessage: e(a.loadMessage),
  levelUp: e(a.levelUp),
  magicEvasion: e(a.magicEvasion),
  magicReflection: e(a.magicReflection),
  meVolume: e(a.meVolume),
  obtainExp: e(a.obtainExp),
  obtainGold: e(a.obtainGold),
  obtainItem: e(a.obtainItem),
  obtainSkill: e(a.obtainSkill),
  partyName: e(a.partyName),
  possession: e(a.possession),
  preemptive: e(a.preemptive),
  saveMessage: e(a.saveMessage),
  seVolume: e(a.seVolume),
  substitute: e(a.substitute),
  surprise: e(a.surprise),
  touchUI: e(a.touchUI),
  useItem: e(a.useItem),
  victory: e(a.victory)
}), at = (a, e) => ({
  ...a,
  gameTitle: p(a.gameTitle, e),
  currencyUnit: p(a.currencyUnit, e),
  elements: E(a.elements, e),
  skillTypes: E(a.skillTypes, e),
  weaponTypes: E(a.weaponTypes, e),
  armorTypes: E(a.armorTypes, e),
  equipTypes: E(a.equipTypes, e),
  terms: sa(a.terms, e)
}), E = (a, e) => a.map(((t) => p(t, e))), na = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ma {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return na(this.joinCommandBodies());
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
  constructor(e, t, r) {
    this.bodyCode = e, this.header = t, this.bodies = r;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return na(this.bodies);
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
const R = (a, e, t, r) => {
  const s = a[e];
  if (!t(s)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(s)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!r(o)) break;
    n.push(o);
  }
  return { header: s, bodies: n };
}, Ya = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, ((m) => m.code === j), ((m) => m.code === P)))(a, e);
  return Ka(r) ? new F(P, r, t) : new ma(r, t);
}, Ka = (a) => a.parameters[0] === "選択肢ヘルプ", Xa = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, ((m) => m.code === z), ((m) => m.code === C)))(a, e);
  return new F(C, r, t);
}, Za = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, ((m) => m.code === $), ((m) => m.code === Z)))(a, e);
  return new ma(r, t);
}, Wa = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => R(s, n, ((m) => m.code === W), ((m) => m.code === S)))(a, e);
  return new F(S, r, t);
}, ae = {
  [z]: (a, e, t) => t.showMessage(Xa(a, e), e, a),
  [$]: (a, e, t) => t.script(Za(a, e), e, a),
  [j]: (a, e, t) => t.comment(Ya(a, e), e, a),
  [W]: (a, e, t) => t.showScrollingText(Wa(a, e), e, a)
}, oa = (a) => ae[a], ee = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), et = (a) => ca(a, (() => [])), L = (a, e) => ca(a, e), ca = (a, e) => a.flatMap(((t, r) => te(t, r, a, e))).filter(((t) => t !== null)), te = (a, e, t, r) => {
  if (a.code === B) return ((n) => n.parameters[0].map(((m, o) => ({ code: 102, paramIndex: o, value: m }))))(a);
  const s = oa(a.code);
  if (s) {
    const n = s(t, e, re);
    if (n !== void 0) return [n];
  }
  return a.code === q || a.code === G || a.code === U ? ee(a) : a.code === D ? r(a) : null;
}, re = {
  comment: (a) => ({ code: j, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return {
      code: C,
      paramIndex: 0,
      value: (e = a).getBodyText(),
      speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "")
    };
    var e, t;
  },
  script: (a) => ((e) => ({ code: $, paramIndex: 0, value: e.getBodyText() }))(a),
  showScrollingText: (a) => ((e) => ({ code: S, paramIndex: 0, value: e.getBodyText() }))(a)
}, se = (a, e = () => []) => ({ eventId: a.id, commands: L(a.list, e) }), ne = (a, e = () => []) => a.pages.map(((t, r) => ({
  eventId: a.id,
  pageIndex: r,
  commands: L(t.list, e)
}))), me = (a, e = () => []) => ({ note: a.note, noteItems: Q(a.note), displayedName: a.displayName, events: oe(a, e) }), oe = (a, e) => ra(a, ((t, r, s) => ({
  eventId: s.id,
  pageIndex: r,
  commands: L(t.list, e),
  note: s.note,
  noteItems: Q(s.note),
  name: s.name
}))), ia = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), da = (a) => a.kind === "struct", pa = (a) => a.attr.kind === "struct[]", ce = (a) => la[a.kind.replace("[]", "")].type === "number", ie = (a) => la[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, h = { type: "number", hasText: !1 }, la = {
  string: A,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: b,
  actor: b,
  class: b,
  enemy: b,
  skill: b,
  state: b,
  item: b,
  weapon: b,
  common_event: b,
  switch: b,
  variable: b,
  troop: b,
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
function de(a) {
  return pe(a, ((e) => !0), ((e) => !0));
}
const pe = (a, e, t) => {
  const r = [], s = [], n = [], m = [];
  return a.forEach(((o) => {
    if (da(o.attr)) r.push({ name: o.name, attr: o.attr });
    else if (pa(o)) s.push(o);
    else if (ia(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: r, structArrays: s, scalars: n, scalarArrays: m };
};
function le(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const ue = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, ge = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ua = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ga(a, e, t, r) {
  const s = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(c, x, N) {
    if (c.frames.length === 0) return c;
    const i = c.frames[c.frames.length - 1], f = c.frames.slice(0, -1);
    if (i.ancestry.includes(i.schemaName)) return { frames: f, items: c.items, errs: [...c.errs, { code: N.cyclicStruct, path: i.basePath }] };
    const l = x.get(i.schemaName);
    if (!l) return {
      frames: f,
      items: c.items,
      errs: [...c.errs, { code: N.undefinedStruct, path: i.basePath }]
    };
    const v = (function(y, u) {
      const d = y.ancestry.concat(y.schemaName), T = y.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${T}["${w.name}"]`,
        ancestry: d
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${T}["${w.name}"][*]`, ancestry: d })))].reverse();
    })(i, l);
    if (l.scalars.length > 0 || l.scalarArrays.length > 0) {
      const y = (function(u, { path: d, structName: T }) {
        return {
          category: "struct",
          objectSchema: le(u.scalars),
          name: T,
          scalarArrays: ge(u.scalarArrays, d),
          scalarsPath: u.scalars.length > 0 ? ue(u.scalars, d) : void 0
        };
      })(l, { path: i.basePath, structName: i.schemaName });
      return f.push(...v), {
        frames: f,
        items: [...c.items, y],
        errs: c.errs
      };
    }
    return f.push(...v), { frames: f, items: c.items, errs: c.errs };
  })(o, t, r)), s);
  return { items: m.items, errors: m.errs };
}
const ye = (a, e, t, r = ua) => ga(a.attr.struct, `${e}["${a.name}"]`, t, r), he = (a, e, t, r = ua) => ga(a.attr.struct, `${e}["${a.name}"][*]`, t, r), be = (a, e, t, r) => ((s) => da(s.attr))(t) ? Ne(a, t, r) : pa(t) ? ve(a, t, r) : ia(t) ? fe(a, e, t) : xe(a, e, t), fe = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), xe = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Ne = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ye(e, "$", t)
}), ve = (a, e, t) => ({
  structArrays: he(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Te = (a, e) => e.map(((t) => we(a, t))).flat(3), we = (a, e) => [e.top ? V(e, a, e.top, "") : [], e.structs.map(((t) => V(e, a, t))), e.structArrays.map(((t) => V(e, a, t)))], V = (a, e, t, r = t.bundleName) => {
  const s = t.scalar ? ((m, o, c, x, N) => x.pathSegments(c).map((({ value: i, segments: f }) => ((l, v, y, u, d) => {
    if (typeof y == "object" || y === null) return null;
    const T = u[u.length - 1];
    if (typeof T == "number") return null;
    const w = d[T];
    return w ? { rootName: l.rootName, rootType: l.rootCategory, structName: v, value: y, param: { name: T, attr: w } } : null;
  })(m, o, i, f, N))).filter(((i) => i !== null)))(a, r, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, c, x, N) => {
    const i = N.jsonPathJS.find(x);
    if (!Array.isArray(i)) return [];
    const f = N.schema.attr;
    return ie(f) ? ((l, v, y, u) => v.filter(((d) => typeof d == "string")).map(((d) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: d,
      structName: y,
      param: u
    }))))(o, i, c, N.schema) : ce(f) ? ((l, v, y, u) => v.filter(((d) => typeof d == "number")).map(((d) => ({ rootName: l.rootName, rootType: l.rootCategory, value: d, structName: y, param: u }))))(o, i, c, N.schema) : [];
  })(a, r, e, m)));
  return [s, n].flat(2);
}, _ = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: O(a.scalarArrays, a.name, e), scalar: Ie(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: O(a.scalarArrays, a.name, e)
}, O = (a, e, t) => a.map(((r) => ({ jsonPathJS: t(r.path), schema: r.param, parentType: e }))), Ie = (a, e, t) => ({ jsonPathJS: t(a), record: e }), ke = (a, e, t, r) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ae(e, t, r)
}), Ae = (a, e, t) => a.args.map(((r) => ((s, n) => {
  const m = s.scalars ? _(s.scalars, n) : void 0, o = s.structs.items.map(((x) => _(x, n))), c = s.structArrays.items.map(((x) => _(x, n)));
  return {
    rootCategory: s.rootCategory,
    rootName: s.rootName,
    top: m,
    structs: o,
    structArrays: c
  };
})(be("args", a.command, r, e), t))), Se = (a, e) => {
  const t = ((r) => new Map(r.map(((s) => [s.struct, de(s.params)]))))(a.schema.structs);
  return Ce(a.pluginName, a.schema.commands, t, e);
}, Ce = (a, e, t, r) => e.map(((s) => [`${a}:${s.command}`, ke(a, s, t, r)])), Ee = (a, e) => {
  const [t, r] = a.parameters, s = `${t}:${r}`, n = e.get(s);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Te(m, o.extractors) }))(Pa(a.parameters[3]), n) : { pluginName: t, commandName: r, args: [] };
}, tt = (a) => {
  const e = new Map(a);
  return new H(e);
}, rt = () => new H(/* @__PURE__ */ new Map()), st = (a) => {
  const e = a.flatMap(((t) => Se(t, ((r) => new Ma(r)))));
  return new H(new Map(e));
};
class H {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return me(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return ne(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return se(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Ee(e, this._commandMap);
    return t.args.filter(Be).map(((r) => ({
      code: D,
      value: r.value,
      paramIndex: 3,
      argName: r.param.name,
      argTitle: r.param.attr.text ?? r.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return L(e, ((t) => this.extractArgs(t)));
  }
}
const Be = (a) => typeof a.value == "string", nt = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), J = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), mt = (a) => [J(a, "faceName", "faces"), J(a, "characterName", "characters"), J(a, "battlerName", "sv_actors")], k = (a, e) => ({
  note: $e(a),
  main: e.map(((t) => ({ key: t, text: a[t], id: a.id })))
}), $e = (a) => Ta(a.note, ((e, t) => ({
  key: e,
  text: t,
  id: a.id
}))), ot = (a) => k(a, ["name", "nickname", "profile"]), ct = (a) => k(a, ["name"]), it = (a) => k(a, ["name"]), dt = (a) => k(a, ["name", "description", "message1", "message2"]), pt = (a) => k(a, ["name", "description"]), lt = (a) => k(a, ["name", "description"]), ut = (a) => k(a, ["name", "description"]), gt = (a) => k(a, ["name", "message1", "message2", "message3", "message4"]), yt = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Aa(a.terms.basic),
    commands: ka(a.terms.commands),
    messages: Ia(a.terms.messages),
    params: wa(a.terms.params)
  }
}), ht = (a, e, t, r, s, n) => [...Sa(t, r), ...Ca(a, e), ...Ea(s, n)], bt = (a, e) => aa($a(e), a), ft = (a, e, t) => {
  const r = Ba(e);
  return aa(t ? [...r, ...t] : r, a);
}, Me = (a, e, t, r) => {
  if (a.code === C || a.code === S || a.code === P) return;
  const s = oa(a.code);
  return s ? s(t, e, r) : a.code === B ? Pe(a) : a.code === G || a.code === q || a.code === U ? De(a) : a.code !== Z ? a : void 0;
}, Pe = (a) => ({
  code: B,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), De = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), je = (a) => ({ code: $, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Re = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: C,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Ve(a.header), t];
}, Le = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: S, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, Ve = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, M = (a, e) => {
  const t = (r) => e.replaceText(r);
  return ((r) => {
    const s = { comment: (n) => n.normalizedCommands(), script: je, showMessage: Re, showScrollingText: Le };
    return r.map(((n, m) => n.code === D ? n : Me(n, m, r, s))).filter(((n) => n !== void 0)).flat();
  })(a).map(((r) => r.code === D ? e.pluginCommand(r) : r.code === $ ? e.scriptCommand(r) : _a(r, t)));
}, xt = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: M(t.list, e) })))
}), Nt = (a, e) => {
  const t = {
    pluginCommand: (r) => r,
    scriptCommand: (r) => r,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((r) => ({ conditions: r.conditions, span: r.span, list: M(r.list, t) }))) };
}, vt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: M(a.list, e)
}), Tt = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: M(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), wt = (a, e) => ya(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), It = (a, e) => ya(a, e), ya = (a, e) => ({
  note: I(a.note, e),
  displayName: g(a.displayName, e),
  events: a.events.map(((t) => t ? ((r, s) => ({ id: r.id, name: r.name, x: r.x, y: r.y, note: I(r.note, s), pages: r.pages.map(((n) => ({
    ...n,
    list: M(n.list, s)
  }))) }))(t, e) : null)),
  data: a.data,
  tilesetId: a.tilesetId,
  encounterStep: a.encounterStep,
  scrollType: a.scrollType,
  specifyBattleback: a.specifyBattleback,
  autoplayBgm: a.autoplayBgm,
  autoplayBgs: a.autoplayBgs,
  battleback1Name: a.battleback1Name,
  battleback2Name: a.battleback2Name,
  bgm: a.bgm,
  bgs: a.bgs,
  disableDashing: a.disableDashing,
  encounterList: a.encounterList,
  height: a.height,
  width: a.width,
  parallaxLoopX: a.parallaxLoopX,
  parallaxLoopY: a.parallaxLoopY,
  parallaxName: a.parallaxName,
  parallaxShow: a.parallaxShow,
  parallaxSx: a.parallaxSx,
  parallaxSy: a.parallaxSy
});
export {
  gt as A,
  yt as B,
  lt as C,
  He as D,
  Ke as E,
  _a as F,
  Qe as G,
  vt as H,
  Tt as I,
  Oe as J,
  M as K,
  It as L,
  wt as M,
  za as N,
  Ze as O,
  Ye as P,
  Xe as Q,
  We as R,
  at as S,
  Va as T,
  xt as U,
  Nt as V,
  bt as a,
  ht as b,
  ft as c,
  rt as d,
  tt as e,
  st as f,
  ne as g,
  se as h,
  mt as i,
  nt as j,
  ja as k,
  ea as l,
  ze as m,
  Fe as n,
  me as o,
  $e as p,
  Ee as q,
  k as r,
  ot as s,
  ut as t,
  it as u,
  ct as v,
  et as w,
  L as x,
  pt as y,
  dt as z
};
