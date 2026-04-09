import { aP as Ia, be as wa, bf as ka, aJ as Ba, b1 as Sa, b6 as B, aQ as Aa, b5 as Ca, b0 as Z, aT as Ea, aZ as Ma, aY as $a, aV as Pa, ay as Da, au as ja, av as Ra, b7 as La, b8 as _a } from "./commands.es.js";
import { b as K, q as W, N as aa, E as G, w as z, v as H, aS as C, P as j, Q as L, aP as E, aM as $, aO as O, az as ea, ay as P, aR as ta, as as R } from "./eventCommandCodes.es.js";
import { JSONPathJS as Va } from "jsonpath-js";
import { parseDeepRecord as Fa } from "@sigureya/rmmz-plugin-schema";
import { m as sa } from "./mergeItemsSource.es.js";
const ra = (a, e, t) => a.filter(((s) => s.code === K || s.code === W || s.code === aa)).map(((s) => Ua(s, e, t))), Ja = { [aa]: "weapon", [K]: "armor", [W]: "item" }, Ua = (a, e, t) => {
  const s = Ia(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === wa ? e.gain : a.parameters[1] === ka ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: Ja[a.code], dataId: Ba(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, na = (a) => !!a, ct = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), qa = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), _ = (a, e) => a.pages.map(((t, s) => e(t, s, a))), Ga = (a, e) => a.events.filter(na).map(((t) => _(t, e))), ma = (a, e) => a.events.filter(na).flatMap(((t) => _(t, e))), lt = (a, e) => a.map(((t) => _(t, e))), za = (a, e) => a.flatMap(((t) => _(t, e))), dt = (a, e) => a.map(((t) => e(t, 0, t))), pt = (a) => Ga(a, qa).flat(2), oa = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, ia = (a, e) => ({ ...a, pages: a.pages.map(((t) => oa(t, e))) }), ut = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? ia(t, e) : null))
}), gt = (a, e) => a.map(((t) => oa(t, e))), ht = (a, e) => a.map(((t) => ia(t, e))), yt = (a, e, t) => ma(a.map, ((s, r, n) => ({
  ...Ha(s),
  commands: ra(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Ha = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, ft = (a, e, t) => za(a, ((s, r, n) => ({
  commands: ra(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Oa = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ya = (a) => {
  const e = a.trim();
  return /^\d{1,16}\.?\d{0,16}$/.test(e);
}, ca = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, la = (a, e, t, s) => {
  const r = Qa(a);
  return Array.from(r.entries()).map((([n, m]) => {
    const o = Za(m, e, t, s);
    return {
      key: n,
      kinds: Xa(o),
      values: m.map(((i) => i.value))
    };
  }));
}, Qa = (a) => a.reduce(((e, t) => (e.has(t.key) || e.set(t.key, a.filter(((s) => s.key === t.key))), e)), /* @__PURE__ */ new Map()), Xa = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), Za = (a, e, t, s) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && Oa(n.value),
  isNumber: r.isNumber && Ya(n.value),
  isBgm: r.isBgm && e.bgm.has(n.value),
  isBgs: r.isBgs && e.bgs.has(n.value),
  isMe: r.isMe && e.me.has(n.value),
  isSe: r.isSe && e.se.has(n.value),
  isPicture: r.isPicture && t.picutures.has(n.value),
  isCharacter: r.isCharacter && t.characters.has(n.value),
  isFaceset: r.isFaceset && t.faces.has(n.value),
  isBattler: r.isBattler && t.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && t.svActors.has(n.value),
  isEnemy: r.isEnemy && t.enemies.has(n.value),
  isTileset: r.isTileset && t.tilesets.has(n.value),
  isMovie: r.isMovie && s.movies.has(n.value)
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
  isTileset: !0,
  isMovie: !0
}), Ka = (a) => [a.noteItems, a.events.map(((e) => e.noteItems))], Wa = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), w = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s };
})).filter(ae), ae = (a) => a.note.length > 0 || a.main.length > 0, bt = (a, e, t, s) => {
  const r = ((o) => o.map(Ka).flat(4))(a), n = la(r, e, t, s), m = ca(n);
  return a.map(((o) => ((i, f) => ({
    displayedName: i.displayedName,
    note: i.note,
    noteItems: i.noteItems.filter(f),
    events: i.events.map(((v) => Wa(v, f)))
  }))(o, ((i) => m.has(i.key)))));
}, ee = (a, e, t, s) => {
  const r = te(a), n = la(r, e, t, s);
  return ca(n);
}, vt = (a, e, t, s) => {
  const r = ee(a, e, t, s), n = (m) => r.has(m.key);
  return {
    actors: w(a.actors, n),
    enemies: w(a.enemies, n),
    weapons: w(a.weapons, n),
    armors: w(a.armors, n),
    skills: w(a.skills, n),
    states: w(a.states, n),
    items: w(a.items, n),
    classes: w(a.classes, n)
  };
}, te = (a) => [k(a.actors), k(a.skills), k(a.items), k(a.weapons), k(a.armors), k(a.classes), k(a.states), k(a.enemies)].flat(3), k = (a) => a.map(((e) => e.note)), S = (a, e) => ({
  note: se(a),
  main: e.map(((t) => ({ key: t, value: a[t], id: a.id })))
}), se = (a) => Sa(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), xt = (a) => S(a, ["name", "nickname", "profile"]), Nt = (a) => S(a, ["name"]), Tt = (a) => S(a, ["name"]), It = (a) => S(a, ["name", "description", "message1", "message2"]), wt = (a) => S(a, ["name", "description"]), kt = (a) => S(a, ["name", "description"]), Bt = (a) => S(a, ["name", "description"]), St = (a) => S(a, ["name", "message1", "message2", "message3", "message4"]), re = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, d = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, g = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, At = (a, e) => {
  const t = (o) => e.replaceText(o), s = B(a.note, e), r = d(a.name, t), n = d(a.nickname, t), m = d(a.profile, t);
  return { ...a, name: r, nickname: n, profile: m, note: s };
}, Ct = (a, e) => {
  const t = B(a.note, e), s = g(a.name, e);
  return { ...a, name: s, note: t };
}, Et = (a, e) => {
  const t = B(a.note, e), s = g(a.name, e);
  return { ...a, name: s, note: t };
}, Mt = (a, e) => {
  const t = B(a.note, e), s = g(a.name, e), r = g(a.description, e), n = g(a.message1, e), m = g(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, $t = (a, e) => {
  const t = B(a.note, e), s = g(a.name, e), r = g(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, Pt = (a, e) => {
  const t = B(a.note, e), s = g(a.name, e), r = g(a.message1, e), n = g(a.message2, e), m = g(a.message3, e), o = g(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, ne = (a, e) => {
  switch (a.code) {
    case O:
      return oe(a, e);
    case $:
      return ce(a, e);
    case E:
    case L:
    case j:
    case C:
      return me(a, e);
    case H:
    case z:
    case G:
      return ie(a, e);
    default:
      return a;
  }
}, me = (a, e) => {
  const t = d(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, oe = (a, e) => {
  const t = a.parameters[4] ? d(a.parameters[4], e) : "";
  return Aa({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, ie = (a, e) => {
  const t = d(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, ce = (a, e) => {
  const t = a.parameters[0].map(((s) => d(s, e)));
  return {
    code: $,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Dt = (a, e, t = `
`) => le(a, ((s) => e.get(s)), t), le = (a, e, t = `
`) => Ca(a.note, ((s) => d(s.value, e)), t), jt = (a, e) => da(a, ((t) => re(t, e))), da = (a, e) => ({
  params: ue(a.params, ((t) => d(t, e))),
  messages: ge(a.messages, ((t) => d(t, e))),
  basic: de(a.basic, ((t) => d(t, e))),
  commands: pe(a.commands, ((t) => d(t, e)))
}), de = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], pe = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], ue = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], ge = (a, e) => ({
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
}), Rt = (a, e) => ({
  ...a,
  gameTitle: d(a.gameTitle, e),
  currencyUnit: d(a.currencyUnit, e),
  elements: M(a.elements, e),
  skillTypes: M(a.skillTypes, e),
  weaponTypes: M(a.weaponTypes, e),
  armorTypes: M(a.armorTypes, e),
  equipTypes: M(a.equipTypes, e),
  terms: da(a.terms, e)
}), M = (a, e) => a.map(((t) => d(t, e))), pa = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class ua {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return pa(this.joinCommandBodies());
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
class Y {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return pa(this.bodies);
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
const V = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, he = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === L), ((m) => m.code === j)))(a, e);
  return ye(s) ? new Y(j, s, t) : new ua(s, t);
}, ye = (a) => a.parameters[0] === "選択肢ヘルプ", fe = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === O), ((m) => m.code === E)))(a, e);
  return new Y(E, s, t);
}, be = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === P), ((m) => m.code === ea)))(a, e);
  return new ua(s, t);
}, ve = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => V(r, n, ((m) => m.code === ta), ((m) => m.code === C)))(a, e);
  return new Y(C, s, t);
}, xe = {
  [O]: (a, e, t) => t.showMessage(fe(a, e), e, a),
  [P]: (a, e, t) => t.script(be(a, e), e, a),
  [L]: (a, e, t) => t.comment(he(a, e), e, a),
  [ta]: (a, e, t) => t.showScrollingText(ve(a, e), e, a)
}, ga = (a) => xe[a], Ne = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Lt = (a) => ha(a, (() => [])), F = (a, e) => ha(a, e), ha = (a, e) => a.flatMap(((t, s) => Te(t, s, a, e))).filter(((t) => t !== null)), Te = (a, e, t, s) => {
  if (a.code === $) return ((n) => n.parameters[0].map(((m, o) => ({ code: 102, paramIndex: o, value: m }))))(a);
  const r = ga(a.code);
  if (r) {
    const n = r(t, e, Ie);
    if (n !== void 0) return [n];
  }
  return a.code === z || a.code === H || a.code === G ? Ne(a) : a.code === R ? s(a) : null;
}, Ie = {
  comment: (a) => ({ code: L, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return {
      code: E,
      paramIndex: 0,
      value: (e = a).getBodyText(),
      speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "")
    };
    var e, t;
  },
  script: (a) => ((e) => ({ code: P, paramIndex: 0, value: e.getBodyText() }))(a),
  showScrollingText: (a) => ((e) => ({ code: C, paramIndex: 0, value: e.getBodyText() }))(a)
}, we = (a, e = () => []) => ({ eventId: a.id, commands: F(a.list, e) }), ke = (a, e = () => []) => a.pages.map(((t, s) => ({
  eventId: a.id,
  pageIndex: s,
  commands: F(t.list, e)
}))), Be = (a, e = () => []) => ({ note: a.note, noteItems: Z(a.note), displayedName: a.displayName, events: Se(a, e) }), Se = (a, e) => ma(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: F(t.list, e),
  note: r.note,
  noteItems: Z(r.note),
  name: r.name
}))), ya = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), fa = (a) => a.kind === "struct", ba = (a) => a.attr.kind === "struct[]", Ae = (a) => va[a.kind.replace("[]", "")].type === "number", Ce = (a) => va[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, y = { type: "number", hasText: !1 }, va = {
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
function Ee(a) {
  return Me(a, ((e) => !0), ((e) => !0));
}
const Me = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (fa(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (ba(o)) r.push(o);
    else if (ya(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function $e(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const Pe = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, De = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), xa = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Na(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, f, v) {
    if (i.frames.length === 0) return i;
    const c = i.frames[i.frames.length - 1], x = i.frames.slice(0, -1);
    if (c.ancestry.includes(c.schemaName)) return { frames: x, items: i.items, errs: [...i.errs, { code: v.cyclicStruct, path: c.basePath }] };
    const p = f.get(c.schemaName);
    if (!p) return {
      frames: x,
      items: i.items,
      errs: [...i.errs, { code: v.undefinedStruct, path: c.basePath }]
    };
    const N = (function(h, u) {
      const l = h.ancestry.concat(h.schemaName), T = h.basePath;
      return [...u.structs.map(((I) => ({
        schemaName: I.attr.struct,
        basePath: `${T}["${I.name}"]`,
        ancestry: l
      }))), ...u.structArrays.map(((I) => ({ schemaName: I.attr.struct, basePath: `${T}["${I.name}"][*]`, ancestry: l })))].reverse();
    })(c, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const h = (function(u, { path: l, structName: T }) {
        return {
          category: "struct",
          objectSchema: $e(u.scalars),
          name: T,
          scalarArrays: De(u.scalarArrays, l),
          scalarsPath: u.scalars.length > 0 ? Pe(u.scalars, l) : void 0
        };
      })(p, { path: c.basePath, structName: c.schemaName });
      return x.push(...N), {
        frames: x,
        items: [...i.items, h],
        errs: i.errs
      };
    }
    return x.push(...N), { frames: x, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const je = (a, e, t, s = xa) => Na(a.attr.struct, `${e}["${a.name}"]`, t, s), Re = (a, e, t, s = xa) => Na(a.attr.struct, `${e}["${a.name}"][*]`, t, s), Le = (a, e, t, s) => ((r) => fa(r.attr))(t) ? Fe(a, t, s) : ba(t) ? Je(a, t, s) : ya(t) ? _e(a, e, t) : Ve(a, e, t), _e = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ve = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Fe = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: je(e, "$", t)
}), Je = (a, e, t) => ({
  structArrays: Re(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Ue = (a, e) => e.map(((t) => qe(a, t))).flat(3), qe = (a, e) => [e.top ? J(e, a, e.top, "") : [], e.structs.map(((t) => J(e, a, t))), e.structArrays.map(((t) => J(e, a, t)))], J = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, f, v) => f.pathSegments(i).map((({ value: c, segments: x }) => ((p, N, h, u, l) => {
    if (typeof h == "object" || h === null) return null;
    const T = u[u.length - 1];
    if (typeof T == "number") return null;
    const I = l[T];
    return I ? { rootName: p.rootName, rootType: p.rootCategory, structName: N, value: h, param: { name: T, attr: I } } : null;
  })(m, o, c, x, v))).filter(((c) => c !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, f, v) => {
    const c = v.jsonPathJS.find(f);
    if (!Array.isArray(c)) return [];
    const x = v.schema.attr;
    return Ce(x) ? ((p, N, h, u) => N.filter(((l) => typeof l == "string")).map(((l) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: l,
      structName: h,
      param: u
    }))))(o, c, i, v.schema) : Ae(x) ? ((p, N, h, u) => N.filter(((l) => typeof l == "number")).map(((l) => ({ rootName: p.rootName, rootType: p.rootCategory, value: l, structName: h, param: u }))))(o, c, i, v.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, U = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: X(a.scalarArrays, a.name, e), scalar: Ge(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: X(a.scalarArrays, a.name, e)
}, X = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), Ge = (a, e, t) => ({ jsonPathJS: t(a), record: e }), ze = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: He(e, t, s)
}), He = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? U(r.scalars, n) : void 0, o = r.structs.items.map(((f) => U(f, n))), i = r.structArrays.items.map(((f) => U(f, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Le("args", a.command, s, e), t))), Oe = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, Ee(r.params)]))))(a.schema.structs);
  return Ye(a.pluginName, a.schema.commands, t, e);
}, Ye = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, ze(a, r, t, s)])), Qe = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Ue(m, o.extractors) }))(Fa(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, _t = (a) => {
  const e = new Map(a);
  return new Q(e);
}, Vt = () => new Q(/* @__PURE__ */ new Map()), Ft = (a) => {
  const e = a.flatMap(((t) => Oe(t, ((s) => new Va(s)))));
  return new Q(new Map(e));
};
class Q {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  keys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return Be(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return ke(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return we(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Qe(e, this._commandMap);
    return t.args.filter(Xe).map(((s) => ({
      code: R,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return F(e, ((t) => this.extractArgs(t)));
  }
}
const Xe = (a) => typeof a.value == "string", Jt = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), q = (a, e, t) => ({ folder: t, key: e, image: a[e], id: a.id }), Ut = (a) => [q(a, "faceName", "faces"), q(a, "characterName", "characters"), q(a, "battlerName", "sv_actors")], qt = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  terms: {
    basic: Pa(a.terms.basic),
    commands: $a(a.terms.commands),
    messages: Ma(a.terms.messages),
    params: Ea(a.terms.params)
  }
}), Gt = (a, e, t, s, r, n) => [...Da(t, s), ...ja(a, e), ...Ra(r, n)], zt = (a, e) => sa(_a(e), a), Ht = (a, e, t) => {
  const s = La(e);
  return sa(t ? [...s, ...t] : s, a);
}, Ze = (a, e, t, s) => {
  if (a.code === E || a.code === C || a.code === j) return;
  const r = ga(a.code);
  return r ? r(t, e, s) : a.code === $ ? Ke(a) : a.code === H || a.code === z || a.code === G ? We(a) : a.code !== ea ? a : void 0;
}, Ke = (a) => ({
  code: $,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), We = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), at = (a) => ({ code: P, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), et = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: E,
    indent: a.header.indent,
    parameters: [e]
  };
  return [st(a.header), t];
}, tt = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: C, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, st = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, D = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: at, showMessage: et, showScrollingText: tt };
    return s.map(((n, m) => n.code === R ? n : Ze(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === R ? e.pluginCommand(s) : s.code === P ? e.scriptCommand(s) : ne(s, t)));
}, Ot = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: D(t.list, e) })))
}), Yt = (a, e) => {
  const t = {
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: D(s.list, t) }))) };
}, Qt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: D(a.list, e)
}), Xt = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: D(a.list, {
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  replaceText: e
}) }), Zt = (a, e) => Ta(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Kt = (a, e) => Ta(a, e), Ta = (a, e) => ({
  note: B(a.note, e),
  displayName: g(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: B(s.note, r), pages: s.pages.map(((n) => ({
    ...n,
    list: D(n.list, r)
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
  oa as $,
  Nt as A,
  Lt as B,
  F as C,
  wt as D,
  It as E,
  St as F,
  qt as G,
  kt as H,
  pt as I,
  Oa as J,
  Ya as K,
  ee as L,
  vt as M,
  bt as N,
  dt as O,
  _ as P,
  Ga as Q,
  lt as R,
  At as S,
  $t as T,
  ne as U,
  Et as V,
  Qt as W,
  Xt as X,
  gt as Y,
  Ct as Z,
  D as _,
  ma as a,
  Kt as a0,
  ut as a1,
  Zt as a2,
  le as a3,
  Dt as a4,
  ia as a5,
  Mt as a6,
  Pt as a7,
  jt as a8,
  Rt as a9,
  re as aa,
  Ot as ab,
  Yt as ac,
  ht as ad,
  ca as ae,
  la as af,
  Gt as b,
  Qa as c,
  Ht as d,
  zt as e,
  za as f,
  qa as g,
  ct as h,
  Vt as i,
  _t as j,
  Ft as k,
  ke as l,
  we as m,
  Ut as n,
  Jt as o,
  Ua as p,
  ra as q,
  yt as r,
  ft as s,
  Be as t,
  se as u,
  Qe as v,
  S as w,
  xt as x,
  Bt as y,
  Tt as z
};
