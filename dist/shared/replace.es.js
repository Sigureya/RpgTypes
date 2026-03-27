import { aP as xa, be as Na, bf as va, aJ as Ta, b6 as I, aQ as wa, b5 as Ia, b0 as Q, b1 as ka, aT as Aa, aZ as Sa, aY as Ca, aV as Ea, ay as Ba, au as $a, av as Ma, b7 as Pa, b8 as Da } from "./commands.es.js";
import { b as X, q as Z, N as K, E as q, w as G, v as z, aS as S, P, Q as j, aP as C, aM as B, aO as F, az as W, ay as $, aR as aa, as as D } from "./eventCommandCodes.es.js";
import { JSONPathJS as ja } from "jsonpath-js";
import { parseDeepRecord as Ra } from "@sigureya/rmmz-plugin-schema";
import { m as ea } from "./mergeItemsSource.es.js";
const ta = (a, e, t) => a.filter(((r) => r.code === X || r.code === Z || r.code === K)).map(((r) => La(r, e, t))), _a = { [K]: "weapon", [X]: "armor", [Z]: "item" }, La = (a, e, t) => {
  const r = xa(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, s = a.parameters[1] === Na ? e.gain : a.parameters[1] === va ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: _a[a.code], dataId: Ta(a), code: a.code, commandNameMZ: t(a.code), operation: s, ...n, ...r };
}, ra = (a) => !!a, Qe = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), Va = (a, e, t) => a.list.map(((r) => ({
  data: r,
  eventId: t.id,
  pageIndex: e
}))), R = (a, e) => a.pages.map(((t, r) => e(t, r, a))), Ja = (a, e) => a.events.filter(ra).map(((t) => R(t, e))), sa = (a, e) => a.events.filter(ra).flatMap(((t) => R(t, e))), Xe = (a, e) => a.map(((t) => R(t, e))), Ua = (a, e) => a.flatMap(((t) => R(t, e))), Ze = (a, e) => a.map(((t) => e(t, 0, t))), Ke = (a) => Ja(a, Va).flat(2), na = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, ma = (a, e) => ({ ...a, pages: a.pages.map(((t) => na(t, e))) }), We = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? ma(t, e) : null))
}), at = (a, e) => a.map(((t) => na(t, e))), et = (a, e) => a.map(((t) => ma(t, e))), tt = (a, e, t) => sa(a.map, ((r, s, n) => ({
  ...qa(r),
  commands: ta(r.list, e, t),
  eventName: n.name,
  pageIndex: s
}))), qa = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, rt = (a, e, t) => Ua(a, ((r, s, n) => ({
  commands: ta(r.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: s
}))), Ga = (a, e) => {
  const t = a.trimEnd(), r = e.get(t);
  return r ? r.trimEnd() : t;
}, p = (a, e) => {
  const t = a.trimEnd(), r = e(t);
  return r ? r.trimEnd() : t;
}, g = (a, e) => {
  const t = a.trimEnd(), r = e.replaceText(t);
  return r ? r.trimEnd() : t;
}, st = (a, e) => {
  const t = (o) => e.replaceText(o), r = I(a.note, e), s = p(a.name, t), n = p(a.nickname, t), m = p(a.profile, t);
  return {
    ...a,
    name: s,
    nickname: n,
    profile: m,
    note: r
  };
}, nt = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e);
  return { ...a, name: r, note: t };
}, mt = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e);
  return {
    ...a,
    name: r,
    note: t
  };
}, ot = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.description, e), n = g(a.message1, e), m = g(a.message2, e);
  return { ...a, name: r, description: s, message1: n, message2: m, note: t };
}, ct = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.description, e);
  return { ...a, name: r, description: s, note: t };
}, it = (a, e) => {
  const t = I(a.note, e), r = g(a.name, e), s = g(a.message1, e), n = g(a.message2, e), m = g(a.message3, e), o = g(a.message4, e);
  return {
    ...a,
    name: r,
    message1: s,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, za = (a, e) => {
  switch (a.code) {
    case F:
      return Ha(a, e);
    case B:
      return Ya(a, e);
    case C:
    case j:
    case P:
    case S:
      return Fa(a, e);
    case z:
    case G:
    case q:
      return Oa(a, e);
    default:
      return a;
  }
}, Fa = (a, e) => {
  const t = p(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Ha = (a, e) => {
  const t = a.parameters[4] ? p(a.parameters[4], e) : "";
  return wa({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Oa = (a, e) => {
  const t = p(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Ya = (a, e) => {
  const t = a.parameters[0].map(((r) => p(r, e)));
  return {
    code: B,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, dt = (a, e, t = `
`) => Qa(a, ((r) => e.get(r)), t), Qa = (a, e, t = `
`) => Ia(a.note, ((r) => p(r.value, e)), t), pt = (a, e) => oa(a, ((t) => Ga(t, e))), oa = (a, e) => ({
  params: Ka(a.params, ((t) => p(t, e))),
  messages: Wa(a.messages, ((t) => p(t, e))),
  basic: Xa(a.basic, ((t) => p(t, e))),
  commands: Za(a.commands, ((t) => p(t, e)))
}), Xa = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Za = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Ka = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Wa = (a, e) => ({
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
}), lt = (a, e) => ({
  ...a,
  gameTitle: p(a.gameTitle, e),
  currencyUnit: p(a.currencyUnit, e),
  elements: E(a.elements, e),
  skillTypes: E(a.skillTypes, e),
  weaponTypes: E(a.weaponTypes, e),
  armorTypes: E(a.armorTypes, e),
  equipTypes: E(a.equipTypes, e),
  terms: oa(a.terms, e)
}), E = (a, e) => a.map(((t) => p(t, e))), ca = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ia {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return ca(this.joinCommandBodies());
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
  constructor(e, t, r) {
    this.bodyCode = e, this.header = t, this.bodies = r;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return ca(this.bodies);
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
const _ = (a, e, t, r) => {
  const s = a[e];
  if (!t(s)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(s)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!r(o)) break;
    n.push(o);
  }
  return { header: s, bodies: n };
}, ae = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => _(s, n, ((m) => m.code === j), ((m) => m.code === P)))(a, e);
  return ee(r) ? new H(P, r, t) : new ia(r, t);
}, ee = (a) => a.parameters[0] === "選択肢ヘルプ", te = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => _(s, n, ((m) => m.code === F), ((m) => m.code === C)))(a, e);
  return new H(C, r, t);
}, re = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => _(s, n, ((m) => m.code === $), ((m) => m.code === W)))(a, e);
  return new ia(r, t);
}, se = (a, e) => {
  const { bodies: t, header: r } = ((s, n) => _(s, n, ((m) => m.code === aa), ((m) => m.code === S)))(a, e);
  return new H(S, r, t);
}, ne = {
  [F]: (a, e, t) => t.showMessage(te(a, e), e, a),
  [$]: (a, e, t) => t.script(re(a, e), e, a),
  [j]: (a, e, t) => t.comment(ae(a, e), e, a),
  [aa]: (a, e, t) => t.showScrollingText(se(a, e), e, a)
}, da = (a) => ne[a], me = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), ut = (a) => pa(a, (() => [])), L = (a, e) => pa(a, e), pa = (a, e) => a.flatMap(((t, r) => oe(t, r, a, e))).filter(((t) => t !== null)), oe = (a, e, t, r) => {
  if (a.code === B) return ((n) => n.parameters[0].map(((m, o) => ({ code: 102, paramIndex: o, value: m }))))(a);
  const s = da(a.code);
  if (s) {
    const n = s(t, e, ce);
    if (n !== void 0) return [n];
  }
  return a.code === G || a.code === z || a.code === q ? me(a) : a.code === D ? r(a) : null;
}, ce = {
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
}, ie = (a, e = () => []) => ({ eventId: a.id, commands: L(a.list, e) }), de = (a, e = () => []) => a.pages.map(((t, r) => ({
  eventId: a.id,
  pageIndex: r,
  commands: L(t.list, e)
}))), pe = (a, e = () => []) => ({ note: a.note, noteItems: Q(a.note), displayedName: a.displayName, events: le(a, e) }), le = (a, e) => sa(a, ((t, r, s) => ({
  eventId: s.id,
  pageIndex: r,
  commands: L(t.list, e),
  note: s.note,
  noteItems: Q(s.note),
  name: s.name
}))), la = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), ua = (a) => a.kind === "struct", ga = (a) => a.attr.kind === "struct[]", ue = (a) => ya[a.kind.replace("[]", "")].type === "number", ge = (a) => ya[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, f = { type: "number", hasText: !1 }, h = { type: "number", hasText: !1 }, ya = {
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
function ye(a) {
  return he(a, ((e) => !0), ((e) => !0));
}
const he = (a, e, t) => {
  const r = [], s = [], n = [], m = [];
  return a.forEach(((o) => {
    if (ua(o.attr)) r.push({ name: o.name, attr: o.attr });
    else if (ga(o)) s.push(o);
    else if (la(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: r, structArrays: s, scalars: n, scalarArrays: m };
};
function fe(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const be = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, xe = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ha = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function fa(a, e, t, r) {
  const s = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(c, x, N) {
    if (c.frames.length === 0) return c;
    const i = c.frames[c.frames.length - 1], b = c.frames.slice(0, -1);
    if (i.ancestry.includes(i.schemaName)) return { frames: b, items: c.items, errs: [...c.errs, { code: N.cyclicStruct, path: i.basePath }] };
    const l = x.get(i.schemaName);
    if (!l) return {
      frames: b,
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
          objectSchema: fe(u.scalars),
          name: T,
          scalarArrays: xe(u.scalarArrays, d),
          scalarsPath: u.scalars.length > 0 ? be(u.scalars, d) : void 0
        };
      })(l, { path: i.basePath, structName: i.schemaName });
      return b.push(...v), {
        frames: b,
        items: [...c.items, y],
        errs: c.errs
      };
    }
    return b.push(...v), { frames: b, items: c.items, errs: c.errs };
  })(o, t, r)), s);
  return { items: m.items, errors: m.errs };
}
const Ne = (a, e, t, r = ha) => fa(a.attr.struct, `${e}["${a.name}"]`, t, r), ve = (a, e, t, r = ha) => fa(a.attr.struct, `${e}["${a.name}"][*]`, t, r), Te = (a, e, t, r) => ((s) => ua(s.attr))(t) ? ke(a, t, r) : ga(t) ? Ae(a, t, r) : la(t) ? we(a, e, t) : Ie(a, e, t), we = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ie = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ke = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ne(e, "$", t)
}), Ae = (a, e, t) => ({
  structArrays: ve(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Se = (a, e) => e.map(((t) => Ce(a, t))).flat(3), Ce = (a, e) => [e.top ? V(e, a, e.top, "") : [], e.structs.map(((t) => V(e, a, t))), e.structArrays.map(((t) => V(e, a, t)))], V = (a, e, t, r = t.bundleName) => {
  const s = t.scalar ? ((m, o, c, x, N) => x.pathSegments(c).map((({ value: i, segments: b }) => ((l, v, y, u, d) => {
    if (typeof y == "object" || y === null) return null;
    const T = u[u.length - 1];
    if (typeof T == "number") return null;
    const w = d[T];
    return w ? { rootName: l.rootName, rootType: l.rootCategory, structName: v, value: y, param: { name: T, attr: w } } : null;
  })(m, o, i, b, N))).filter(((i) => i !== null)))(a, r, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, c, x, N) => {
    const i = N.jsonPathJS.find(x);
    if (!Array.isArray(i)) return [];
    const b = N.schema.attr;
    return ge(b) ? ((l, v, y, u) => v.filter(((d) => typeof d == "string")).map(((d) => ({
      rootName: l.rootName,
      rootType: l.rootCategory,
      value: d,
      structName: y,
      param: u
    }))))(o, i, c, N.schema) : ue(b) ? ((l, v, y, u) => v.filter(((d) => typeof d == "number")).map(((d) => ({ rootName: l.rootName, rootType: l.rootCategory, value: d, structName: y, param: u }))))(o, i, c, N.schema) : [];
  })(a, r, e, m)));
  return [s, n].flat(2);
}, J = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: Y(a.scalarArrays, a.name, e), scalar: Ee(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: Y(a.scalarArrays, a.name, e)
}, Y = (a, e, t) => a.map(((r) => ({ jsonPathJS: t(r.path), schema: r.param, parentType: e }))), Ee = (a, e, t) => ({ jsonPathJS: t(a), record: e }), Be = (a, e, t, r) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: $e(e, t, r)
}), $e = (a, e, t) => a.args.map(((r) => ((s, n) => {
  const m = s.scalars ? J(s.scalars, n) : void 0, o = s.structs.items.map(((x) => J(x, n))), c = s.structArrays.items.map(((x) => J(x, n)));
  return {
    rootCategory: s.rootCategory,
    rootName: s.rootName,
    top: m,
    structs: o,
    structArrays: c
  };
})(Te("args", a.command, r, e), t))), Me = (a, e) => {
  const t = ((r) => new Map(r.map(((s) => [s.struct, ye(s.params)]))))(a.schema.structs);
  return Pe(a.pluginName, a.schema.commands, t, e);
}, Pe = (a, e, t, r) => e.map(((s) => [`${a}:${s.command}`, Be(a, s, t, r)])), De = (a, e) => {
  const [t, r] = a.parameters, s = `${t}:${r}`, n = e.get(s);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Se(m, o.extractors) }))(Ra(a.parameters[3]), n) : { pluginName: t, commandName: r, args: [] };
}, gt = (a) => {
  const e = new Map(a);
  return new O(e);
}, yt = () => new O(/* @__PURE__ */ new Map()), ht = (a) => {
  const e = a.flatMap(((t) => Me(t, ((r) => new ja(r)))));
  return new O(new Map(e));
};
class O {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return pe(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return de(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return ie(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = De(e, this._commandMap);
    return t.args.filter(je).map(((r) => ({
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
const je = (a) => typeof a.value == "string", ft = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), U = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), bt = (a) => [U(a, "faceName", "faces"), U(a, "characterName", "characters"), U(a, "battlerName", "sv_actors")], k = (a, e) => ({
  note: Re(a),
  main: e.map(((t) => ({ key: t, text: a[t], id: a.id })))
}), Re = (a) => ka(a.note, ((e, t) => ({
  key: e,
  text: t,
  id: a.id
}))), xt = (a) => k(a, ["name", "nickname", "profile"]), Nt = (a) => k(a, ["name"]), vt = (a) => k(a, ["name"]), Tt = (a) => k(a, ["name", "description", "message1", "message2"]), wt = (a) => k(a, ["name", "description"]), It = (a) => k(a, ["name", "description"]), kt = (a) => k(a, ["name", "description"]), At = (a) => k(a, ["name", "message1", "message2", "message3", "message4"]), St = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Ea(a.terms.basic),
    commands: Ca(a.terms.commands),
    messages: Sa(a.terms.messages),
    params: Aa(a.terms.params)
  }
}), Ct = (a, e, t, r, s, n) => [...Ba(t, r), ...$a(a, e), ...Ma(s, n)], Et = (a, e) => ea(Da(e), a), Bt = (a, e, t) => {
  const r = Pa(e);
  return ea(t ? [...r, ...t] : r, a);
}, _e = (a, e, t, r) => {
  if (a.code === C || a.code === S || a.code === P) return;
  const s = da(a.code);
  return s ? s(t, e, r) : a.code === B ? Le(a) : a.code === z || a.code === G || a.code === q ? Ve(a) : a.code !== W ? a : void 0;
}, Le = (a) => ({
  code: B,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ve = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Je = (a) => ({ code: $, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Ue = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: C,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Ge(a.header), t];
}, qe = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: S, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, Ge = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, M = (a, e) => {
  const t = (r) => e.replaceText(r);
  return ((r) => {
    const s = { comment: (n) => n.normalizedCommands(), script: Je, showMessage: Ue, showScrollingText: qe };
    return r.map(((n, m) => n.code === D ? n : _e(n, m, r, s))).filter(((n) => n !== void 0)).flat();
  })(a).map(((r) => r.code === D ? e.pluginCommand(r) : r.code === $ ? e.scriptCommand(r) : za(r, t)));
}, $t = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: M(t.list, e) })))
}), Mt = (a, e) => {
  const t = {
    pluginCommand: (r) => r,
    scriptCommand: (r) => r,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((r) => ({ conditions: r.conditions, span: r.span, list: M(r.list, t) }))) };
}, Pt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: M(a.list, e)
}), Dt = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: M(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), jt = (a, e) => ba(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Rt = (a, e) => ba(a, e), ba = (a, e) => ({
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
  ma as $,
  ut as A,
  L as B,
  wt as C,
  Tt as D,
  At as E,
  St as F,
  It as G,
  Ke as H,
  Ze as I,
  R as J,
  Ja as K,
  Xe as L,
  st as M,
  ct as N,
  za as O,
  mt as P,
  Pt as Q,
  Dt as R,
  at as S,
  nt as T,
  M as U,
  na as V,
  Rt as W,
  We as X,
  jt as Y,
  Qa as Z,
  dt as _,
  Bt as a,
  ot as a0,
  it as a1,
  pt as a2,
  lt as a3,
  Ga as a4,
  $t as a5,
  Mt as a6,
  et as a7,
  Ct as b,
  sa as c,
  Et as d,
  Ua as e,
  Va as f,
  Qe as g,
  yt as h,
  gt as i,
  ht as j,
  de as k,
  ie as l,
  bt as m,
  ft as n,
  La as o,
  ta as p,
  tt as q,
  rt as r,
  pe as s,
  Re as t,
  De as u,
  k as v,
  xt as w,
  kt as x,
  vt as y,
  Nt as z
};
