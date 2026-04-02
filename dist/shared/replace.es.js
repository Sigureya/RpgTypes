import { aP as va, be as xa, bf as Na, aJ as Ta, b6 as w, aQ as Ba, b5 as wa, b0 as Q, b1 as ka, aT as Ia, aZ as Sa, aY as Aa, aV as Ca, ay as Ea, au as Ma, av as $a, b7 as Pa, b8 as Da } from "./commands.es.js";
import { b as X, q as Z, N as K, E as U, w as q, v as G, aS as S, P, Q as j, aP as A, aM as E, aO as z, az as W, ay as M, aR as aa, as as D } from "./eventCommandCodes.es.js";
import { JSONPathJS as ja } from "jsonpath-js";
import { parseDeepRecord as Ra } from "@sigureya/rmmz-plugin-schema";
import { m as ea } from "./mergeItemsSource.es.js";
const ta = (a, e, t) => a.filter(((s) => s.code === X || s.code === Z || s.code === K)).map(((s) => _a(s, e, t))), La = { [K]: "weapon", [X]: "armor", [Z]: "item" }, _a = (a, e, t) => {
  const s = va(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === xa ? e.gain : a.parameters[1] === Na ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: La[a.code], dataId: Ta(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, sa = (a) => !!a, at = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), Va = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), R = (a, e) => a.pages.map(((t, s) => e(t, s, a))), Fa = (a, e) => a.events.filter(sa).map(((t) => R(t, e))), ra = (a, e) => a.events.filter(sa).flatMap(((t) => R(t, e))), et = (a, e) => a.map(((t) => R(t, e))), Ja = (a, e) => a.flatMap(((t) => R(t, e))), tt = (a, e) => a.map(((t) => e(t, 0, t))), st = (a) => Fa(a, Va).flat(2), na = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, ma = (a, e) => ({ ...a, pages: a.pages.map(((t) => na(t, e))) }), rt = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? ma(t, e) : null))
}), nt = (a, e) => a.map(((t) => na(t, e))), mt = (a, e) => a.map(((t) => ma(t, e))), ot = (a, e, t) => ra(a.map, ((s, r, n) => ({
  ...Ua(s),
  commands: ta(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Ua = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, it = (a, e, t) => Ja(a, ((s, r, n) => ({
  commands: ta(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), qa = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ga = (a) => /^\s*\d+\.?\d*\s*$/.test(a), ct = (a, e, t) => {
  const s = za(a);
  return Array.from(s.entries()).map((([r, n]) => {
    const m = Oa(n, e, t);
    return { key: r, kinds: Ha(m), values: n.map(((o) => o.value)) };
  }));
}, za = (a) => a.reduce(((e, t) => (e.has(t.key) || e.set(t.key, a.filter(((s) => s.key === t.key))), e)), /* @__PURE__ */ new Map()), Ha = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "picture" : null, a.isCharacter ? "character" : null, a.isFaceset ? "faceset" : null, a.isBattler ? "battler" : null, a.isSvBattler ? "svBattler" : null, a.isEnemy ? "enemy" : null, a.isTileset ? "tileset" : null].filter(((e) => e !== null)), Oa = (a, e, t) => a.reduce(((s, r) => ({
  isBoolean: s.isBoolean && qa(r.value),
  isNumber: s.isNumber && Ga(r.value),
  isBgm: s.isBgm && e.bgm.has(r.value),
  isBgs: s.isBgs && e.bgs.has(r.value),
  isMe: s.isMe && e.me.has(r.value),
  isSe: s.isSe && e.se.has(r.value),
  isPicture: s.isPicture && t.picuture.has(r.value),
  isCharacter: s.isCharacter && t.character.has(r.value),
  isFaceset: s.isFaceset && t.faceset.has(r.value),
  isBattler: s.isBattler && t.battler.has(r.value),
  isSvBattler: s.isSvBattler && t.svBattler.has(r.value),
  isEnemy: s.isEnemy && t.enemy.has(r.value),
  isTileset: s.isTileset && t.tileset.has(r.value)
})), {
  isBoolean: !0,
  isNumber: !0,
  isBgm: !0,
  isBgs: !0,
  isMe: !0,
  isSe: !0,
  isBattler: !0,
  isCharacter: !0,
  isFaceset: !0,
  isSvBattler: !0,
  isEnemy: !0,
  isPicture: !0,
  isTileset: !0
}), Ya = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, l = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, g = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, dt = (a, e) => {
  const t = (o) => e.replaceText(o), s = w(a.note, e), r = l(a.name, t), n = l(a.nickname, t), m = l(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, lt = (a, e) => {
  const t = w(a.note, e), s = g(a.name, e);
  return { ...a, name: s, note: t };
}, pt = (a, e) => {
  const t = w(a.note, e), s = g(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, ut = (a, e) => {
  const t = w(a.note, e), s = g(a.name, e), r = g(a.description, e), n = g(a.message1, e), m = g(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, gt = (a, e) => {
  const t = w(a.note, e), s = g(a.name, e), r = g(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, ht = (a, e) => {
  const t = w(a.note, e), s = g(a.name, e), r = g(a.message1, e), n = g(a.message2, e), m = g(a.message3, e), o = g(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Qa = (a, e) => {
  switch (a.code) {
    case z:
      return Za(a, e);
    case E:
      return Wa(a, e);
    case A:
    case j:
    case P:
    case S:
      return Xa(a, e);
    case G:
    case q:
    case U:
      return Ka(a, e);
    default:
      return a;
  }
}, Xa = (a, e) => {
  const t = l(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Za = (a, e) => {
  const t = a.parameters[4] ? l(a.parameters[4], e) : "";
  return Ba({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Ka = (a, e) => {
  const t = l(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Wa = (a, e) => {
  const t = a.parameters[0].map(((s) => l(s, e)));
  return {
    code: E,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, yt = (a, e, t = `
`) => ae(a, ((s) => e.get(s)), t), ae = (a, e, t = `
`) => wa(a.note, ((s) => l(s.value, e)), t), bt = (a, e) => oa(a, ((t) => Ya(t, e))), oa = (a, e) => ({
  params: se(a.params, ((t) => l(t, e))),
  messages: re(a.messages, ((t) => l(t, e))),
  basic: ee(a.basic, ((t) => l(t, e))),
  commands: te(a.commands, ((t) => l(t, e)))
}), ee = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], te = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], se = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], re = (a, e) => ({
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
}), ft = (a, e) => ({
  ...a,
  gameTitle: l(a.gameTitle, e),
  currencyUnit: l(a.currencyUnit, e),
  elements: C(a.elements, e),
  skillTypes: C(a.skillTypes, e),
  weaponTypes: C(a.weaponTypes, e),
  armorTypes: C(a.armorTypes, e),
  equipTypes: C(a.equipTypes, e),
  terms: oa(a.terms, e)
}), C = (a, e) => a.map(((t) => l(t, e))), ia = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ca {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return ia(this.joinCommandBodies());
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
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return ia(this.bodies);
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
const L = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, ne = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => L(r, n, ((m) => m.code === j), ((m) => m.code === P)))(a, e);
  return me(s) ? new H(P, s, t) : new ca(s, t);
}, me = (a) => a.parameters[0] === "選択肢ヘルプ", oe = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => L(r, n, ((m) => m.code === z), ((m) => m.code === A)))(a, e);
  return new H(A, s, t);
}, ie = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => L(r, n, ((m) => m.code === M), ((m) => m.code === W)))(a, e);
  return new ca(s, t);
}, ce = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => L(r, n, ((m) => m.code === aa), ((m) => m.code === S)))(a, e);
  return new H(S, s, t);
}, de = {
  [z]: (a, e, t) => t.showMessage(oe(a, e), e, a),
  [M]: (a, e, t) => t.script(ie(a, e), e, a),
  [j]: (a, e, t) => t.comment(ne(a, e), e, a),
  [aa]: (a, e, t) => t.showScrollingText(ce(a, e), e, a)
}, da = (a) => de[a], le = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), vt = (a) => la(a, (() => [])), _ = (a, e) => la(a, e), la = (a, e) => a.flatMap(((t, s) => pe(t, s, a, e))).filter(((t) => t !== null)), pe = (a, e, t, s) => {
  if (a.code === E) return ((n) => n.parameters[0].map(((m, o) => ({ code: 102, paramIndex: o, value: m }))))(a);
  const r = da(a.code);
  if (r) {
    const n = r(t, e, ue);
    if (n !== void 0) return [n];
  }
  return a.code === q || a.code === G || a.code === U ? le(a) : a.code === D ? s(a) : null;
}, ue = {
  comment: (a) => ({ code: j, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return {
      code: A,
      paramIndex: 0,
      value: (e = a).getBodyText(),
      speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "")
    };
    var e, t;
  },
  script: (a) => ((e) => ({ code: M, paramIndex: 0, value: e.getBodyText() }))(a),
  showScrollingText: (a) => ((e) => ({ code: S, paramIndex: 0, value: e.getBodyText() }))(a)
}, ge = (a, e = () => []) => ({ eventId: a.id, commands: _(a.list, e) }), he = (a, e = () => []) => a.pages.map(((t, s) => ({
  eventId: a.id,
  pageIndex: s,
  commands: _(t.list, e)
}))), ye = (a, e = () => []) => ({ note: a.note, noteItems: Q(a.note), displayedName: a.displayName, events: be(a, e) }), be = (a, e) => ra(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: _(t.list, e),
  note: r.note,
  noteItems: Q(r.note),
  name: r.name
}))), pa = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), ua = (a) => a.kind === "struct", ga = (a) => a.attr.kind === "struct[]", fe = (a) => ha[a.kind.replace("[]", "")].type === "number", ve = (a) => ha[a.kind.replace("[]", "")].type === "string", I = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, y = { type: "number", hasText: !1 }, ha = {
  string: I,
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
function xe(a) {
  return Ne(a, ((e) => !0), ((e) => !0));
}
const Ne = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (ua(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (ga(o)) r.push(o);
    else if (pa(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Te(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const Be = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, we = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ya = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ba(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, v, x) {
    if (i.frames.length === 0) return i;
    const c = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (c.ancestry.includes(c.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: x.cyclicStruct, path: c.basePath }] };
    const p = v.get(c.schemaName);
    if (!p) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: x.undefinedStruct, path: c.basePath }]
    };
    const N = (function(h, u) {
      const d = h.ancestry.concat(h.schemaName), T = h.basePath;
      return [...u.structs.map(((B) => ({
        schemaName: B.attr.struct,
        basePath: `${T}["${B.name}"]`,
        ancestry: d
      }))), ...u.structArrays.map(((B) => ({ schemaName: B.attr.struct, basePath: `${T}["${B.name}"][*]`, ancestry: d })))].reverse();
    })(c, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const h = (function(u, { path: d, structName: T }) {
        return {
          category: "struct",
          objectSchema: Te(u.scalars),
          name: T,
          scalarArrays: we(u.scalarArrays, d),
          scalarsPath: u.scalars.length > 0 ? Be(u.scalars, d) : void 0
        };
      })(p, { path: c.basePath, structName: c.schemaName });
      return f.push(...N), {
        frames: f,
        items: [...i.items, h],
        errs: i.errs
      };
    }
    return f.push(...N), { frames: f, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const ke = (a, e, t, s = ya) => ba(a.attr.struct, `${e}["${a.name}"]`, t, s), Ie = (a, e, t, s = ya) => ba(a.attr.struct, `${e}["${a.name}"][*]`, t, s), Se = (a, e, t, s) => ((r) => ua(r.attr))(t) ? Ee(a, t, s) : ga(t) ? Me(a, t, s) : pa(t) ? Ae(a, e, t) : Ce(a, e, t), Ae = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ce = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Ee = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ke(e, "$", t)
}), Me = (a, e, t) => ({
  structArrays: Ie(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), $e = (a, e) => e.map(((t) => Pe(a, t))).flat(3), Pe = (a, e) => [e.top ? V(e, a, e.top, "") : [], e.structs.map(((t) => V(e, a, t))), e.structArrays.map(((t) => V(e, a, t)))], V = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, v, x) => v.pathSegments(i).map((({ value: c, segments: f }) => ((p, N, h, u, d) => {
    if (typeof h == "object" || h === null) return null;
    const T = u[u.length - 1];
    if (typeof T == "number") return null;
    const B = d[T];
    return B ? { rootName: p.rootName, rootType: p.rootCategory, structName: N, value: h, param: { name: T, attr: B } } : null;
  })(m, o, c, f, x))).filter(((c) => c !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, v, x) => {
    const c = x.jsonPathJS.find(v);
    if (!Array.isArray(c)) return [];
    const f = x.schema.attr;
    return ve(f) ? ((p, N, h, u) => N.filter(((d) => typeof d == "string")).map(((d) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: d,
      structName: h,
      param: u
    }))))(o, c, i, x.schema) : fe(f) ? ((p, N, h, u) => N.filter(((d) => typeof d == "number")).map(((d) => ({ rootName: p.rootName, rootType: p.rootCategory, value: d, structName: h, param: u }))))(o, c, i, x.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, F = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: Y(a.scalarArrays, a.name, e), scalar: De(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: Y(a.scalarArrays, a.name, e)
}, Y = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), De = (a, e, t) => ({ jsonPathJS: t(a), record: e }), je = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Re(e, t, s)
}), Re = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? F(r.scalars, n) : void 0, o = r.structs.items.map(((v) => F(v, n))), i = r.structArrays.items.map(((v) => F(v, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Se("args", a.command, s, e), t))), Le = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, xe(r.params)]))))(a.schema.structs);
  return _e(a.pluginName, a.schema.commands, t, e);
}, _e = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, je(a, r, t, s)])), Ve = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: $e(m, o.extractors) }))(Ra(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, xt = (a) => {
  const e = new Map(a);
  return new O(e);
}, Nt = () => new O(/* @__PURE__ */ new Map()), Tt = (a) => {
  const e = a.flatMap(((t) => Le(t, ((s) => new ja(s)))));
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
    return ye(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return he(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return ge(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Ve(e, this._commandMap);
    return t.args.filter(Fe).map(((s) => ({
      code: D,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return _(e, ((t) => this.extractArgs(t)));
  }
}
const Fe = (a) => typeof a.value == "string", Bt = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), J = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), wt = (a) => [J(a, "faceName", "faces"), J(a, "characterName", "characters"), J(a, "battlerName", "sv_actors")], k = (a, e) => ({
  note: Je(a),
  main: e.map(((t) => ({ key: t, text: a[t], id: a.id })))
}), Je = (a) => ka(a.note, ((e, t) => ({
  key: e,
  text: t,
  id: a.id
}))), kt = (a) => k(a, ["name", "nickname", "profile"]), It = (a) => k(a, ["name"]), St = (a) => k(a, ["name"]), At = (a) => k(a, ["name", "description", "message1", "message2"]), Ct = (a) => k(a, ["name", "description"]), Et = (a) => k(a, ["name", "description"]), Mt = (a) => k(a, ["name", "description"]), $t = (a) => k(a, ["name", "message1", "message2", "message3", "message4"]), Pt = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Ca(a.terms.basic),
    commands: Aa(a.terms.commands),
    messages: Sa(a.terms.messages),
    params: Ia(a.terms.params)
  }
}), Dt = (a, e, t, s, r, n) => [...Ea(t, s), ...Ma(a, e), ...$a(r, n)], jt = (a, e) => ea(Da(e), a), Rt = (a, e, t) => {
  const s = Pa(e);
  return ea(t ? [...s, ...t] : s, a);
}, Ue = (a, e, t, s) => {
  if (a.code === A || a.code === S || a.code === P) return;
  const r = da(a.code);
  return r ? r(t, e, s) : a.code === E ? qe(a) : a.code === G || a.code === q || a.code === U ? Ge(a) : a.code !== W ? a : void 0;
}, qe = (a) => ({
  code: E,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ge = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ze = (a) => ({ code: M, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), He = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: A,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Ye(a.header), t];
}, Oe = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: S, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, Ye = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, $ = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ze, showMessage: He, showScrollingText: Oe };
    return s.map(((n, m) => n.code === D ? n : Ue(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === D ? e.pluginCommand(s) : s.code === M ? e.scriptCommand(s) : Qa(s, t)));
}, Lt = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: $(t.list, e) })))
}), _t = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: $(s.list, t) }))) };
}, Vt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: $(a.list, e)
}), Ft = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: $(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), Jt = (a, e) => fa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Ut = (a, e) => fa(a, e), fa = (a, e) => ({
  note: w(a.note, e),
  displayName: g(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: w(s.note, r), pages: s.pages.map(((n) => ({
    ...n,
    list: $(n.list, r)
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
  Jt as $,
  It as A,
  vt as B,
  _ as C,
  Ct as D,
  At as E,
  $t as F,
  Pt as G,
  Et as H,
  st as I,
  qa as J,
  Ga as K,
  tt as L,
  R as M,
  Fa as N,
  et as O,
  dt as P,
  gt as Q,
  Qa as R,
  pt as S,
  Vt as T,
  Ft as U,
  nt as V,
  lt as W,
  $ as X,
  na as Y,
  Ut as Z,
  rt as _,
  ra as a,
  ae as a0,
  yt as a1,
  ma as a2,
  ut as a3,
  ht as a4,
  bt as a5,
  ft as a6,
  Ya as a7,
  Lt as a8,
  _t as a9,
  mt as aa,
  ct as ab,
  Dt as b,
  za as c,
  Rt as d,
  jt as e,
  Ja as f,
  Va as g,
  at as h,
  Nt as i,
  xt as j,
  Tt as k,
  he as l,
  ge as m,
  wt as n,
  Bt as o,
  _a as p,
  ta as q,
  ot as r,
  it as s,
  ye as t,
  Je as u,
  Ve as v,
  k as w,
  kt as x,
  Mt as y,
  St as z
};
