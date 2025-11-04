import { cY as ve, cZ as ke, c_ as xe, B as Z, z as H, A as J, cF as Ne, aK as K, aJ as W, aF as X, i as T, j as B, C as $, c as j, d as D, S as _, m as Te, b as je, a_ as we, aZ as E, h as Y, b0 as Ie, cB as Q, cC as $e, cR as Pe, cX as qe, cW as Ae, cT as Se, b2 as Be, b1 as De, cP as _e, r as Ee, cl as Me } from "./make.es3.js";
import { m as ee } from "./mergeItemsSource.es.js";
import { t as F, y as Re, x as Ce, m as Ve } from "./lookupRpgDataKind.es.js";
import { JSONPathJS as ae } from "jsonpath-js";
const te = (e, a, t) => e.reduce((s, n) => (n.code !== Z && n.code !== H && n.code !== J || s.push(Le(n, a, t)), s), []), Ue = { [J]: "weapon", [Z]: "armor", [H]: "item" }, Le = (e, a, t) => {
  const s = e.parameters[3] === ve ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, n = e.parameters[0] === ke ? a.gain : e.parameters[0] === xe ? a.lose : a.unknown, i = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: Ue[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: t(e.code), operation: n, ...i, ...s };
}, Oe = (e) => !!e, M = (e, a) => e.pages.map((t, s) => a(t, s, e)), re = (e, a) => e.events.filter(Oe).flatMap((t) => M(t, a)), Ma = (e, a, t) => re(e.map, (s, n, i) => ({
  ...ze(s),
  commands: te(s.list, a, t),
  eventName: i.name,
  pageIndex: n
})), ze = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Ra = (e, a, t) => {
  return s = (n, i, o) => ({
    commands: te(n.list, a, t),
    eventName: o.name,
    troopId: o.id,
    pageIndex: i
  }), e.flatMap((n) => M(n, s));
  var s;
}, r = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, v = (e, a, t = `
`) => Ne(e.note, (s) => r(s.value, a), t), Ca = (e, a) => {
  const t = v(e, a), s = r(e.name, a), n = r(e.nickname, a), i = r(e.profile, a);
  return { ...e, name: s, nickname: n, profile: i, note: t };
}, Va = (e, a) => {
  const t = v(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, Ua = (e, a) => {
  const t = v(e, a), s = r(e.name, a);
  return { ...e, name: s, note: t };
}, La = (e, a) => {
  const t = v(e, a), s = r(e.name, a), n = r(e.description, a), i = r(e.message1, a), o = r(e.message2, a);
  return { ...e, name: s, description: n, message1: i, message2: o, note: t };
}, Oa = (e, a) => {
  const t = v(e, a), s = r(e.name, a), n = r(e.description, a);
  return { ...e, name: s, description: n, note: t };
}, za = (e, a) => {
  const t = v(e, a), s = r(e.name, a), n = r(e.message1, a), i = r(e.message2, a), o = r(e.message3, a), m = r(e.message4, a);
  return { ...e, name: s, message1: n, message2: i, message3: o, message4: m, note: t };
}, R = (e, a) => e.map((t) => {
  switch (t.code) {
    case _:
      return Ge(t, a);
    case D:
      return He(t, a);
    case j:
    case $:
    case B:
    case T:
      return Fe(t, a);
    case X:
    case W:
    case K:
      return Ze(t, a);
    default:
      return t;
  }
}), Fe = (e, a) => {
  const t = r(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, Ge = (e, a) => {
  const t = e.parameters[4] ? r(e.parameters[4], a) : "";
  return Te({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Ze = (e, a) => {
  const t = r(e.parameters[1], a);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], t]
  };
}, He = (e, a) => {
  const t = e.parameters[0].map((s) => r(s, a));
  return {
    code: D,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Fa = (e, a) => {
  const t = e.pages.map((s) => ({ list: R(s.list, a), conditions: s.conditions, span: s.span }));
  return { ...e, pages: t };
}, Ga = (e, a) => ({ ...e, list: R(e.list, a) }), Za = (e, a) => {
  const t = r(e.displayName, a), s = v(e, a), n = { displayName: t, events: je(e, (i) => R(i, a)), note: s };
  return { ...e, ...n };
}, Je = (e, a) => ({
  params: Xe(e.params, a),
  messages: Ye(e.messages, a),
  commands: We(e.commands, a),
  basic: Ke(e.basic, a)
}), Ke = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], We = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a), r(e[10], a), r(e[11], a), r(e[12], a), r(e[13], a), r(e[14], a), r(e[15], a), r(e[16], a), r(e[17], a), r(e[18], a), r(e[19], a), "", r(e[21], a), r(e[22], a), "", r(e[24], a), r(e[25], a)], Xe = (e, a) => [r(e[0], a), r(e[1], a), r(e[2], a), r(e[3], a), r(e[4], a), r(e[5], a), r(e[6], a), r(e[7], a), r(e[8], a), r(e[9], a)], Ye = (e, a) => ({
  actionFailure: r(e.actionFailure, a),
  actorDamage: r(e.actorDamage, a),
  actorDrain: r(e.actorDrain, a),
  actorGain: r(e.actorGain, a),
  actorLoss: r(e.actorLoss, a),
  actorNoDamage: r(e.actorNoDamage, a),
  actorNoHit: r(e.actorNoHit, a),
  actorRecovery: r(e.actorRecovery, a),
  alwaysDash: r(e.alwaysDash, a),
  autosave: r(e.autosave, a),
  bgmVolume: r(e.bgmVolume, a),
  bgsVolume: r(e.bgsVolume, a),
  buffAdd: r(e.buffAdd, a),
  buffRemove: r(e.buffRemove, a),
  commandRemember: r(e.commandRemember, a),
  counterAttack: r(e.counterAttack, a),
  criticalToActor: r(e.criticalToActor, a),
  criticalToEnemy: r(e.criticalToEnemy, a),
  defeat: r(e.defeat, a),
  debuffAdd: r(e.debuffAdd, a),
  emerge: r(e.emerge, a),
  enemyDamage: r(e.enemyDamage, a),
  enemyDrain: r(e.enemyDrain, a),
  enemyGain: r(e.enemyGain, a),
  enemyLoss: r(e.enemyLoss, a),
  enemyNoDamage: r(e.enemyNoDamage, a),
  enemyNoHit: r(e.enemyNoHit, a),
  enemyRecovery: r(e.enemyRecovery, a),
  escapeFailure: r(e.escapeFailure, a),
  escapeStart: r(e.escapeStart, a),
  evasion: r(e.evasion, a),
  expNext: r(e.expNext, a),
  expTotal: r(e.expTotal, a),
  file: r(e.file, a),
  loadMessage: r(e.loadMessage, a),
  levelUp: r(e.levelUp, a),
  magicEvasion: r(e.magicEvasion, a),
  magicReflection: r(e.magicReflection, a),
  meVolume: r(e.meVolume, a),
  obtainExp: r(e.obtainExp, a),
  obtainGold: r(e.obtainGold, a),
  obtainItem: r(e.obtainItem, a),
  obtainSkill: r(e.obtainSkill, a),
  partyName: r(e.partyName, a),
  possession: r(e.possession, a),
  preemptive: r(e.preemptive, a),
  saveMessage: r(e.saveMessage, a),
  seVolume: r(e.seVolume, a),
  substitute: r(e.substitute, a),
  surprise: r(e.surprise, a),
  touchUI: r(e.touchUI, a),
  useItem: r(e.useItem, a),
  victory: r(e.victory, a)
}), Ha = (e, a) => ({
  ...e,
  gameTitle: r(e.gameTitle, a),
  currencyUnit: r(e.currencyUnit, a),
  elements: N(e.elements, a),
  skillTypes: N(e.skillTypes, a),
  weaponTypes: N(e.weaponTypes, a),
  armorTypes: N(e.armorTypes, a),
  equipTypes: N(e.equipTypes, a),
  terms: Je(e.terms, a)
}), N = (e, a) => e.map((t) => r(t, a)), se = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class ne {
  constructor(a, t) {
    this.header = a, this.bodies = t;
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
class C {
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
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
const P = (e, a, t, s) => {
  const n = e[a];
  if (!t(n)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(n)}`);
  const i = [];
  for (let o = a + 1; o < e.length; o++) {
    const m = e[o];
    if (!s(m)) break;
    i.push(m);
  }
  return { header: n, bodies: i };
}, Qe = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => P(n, i, (o) => o.code === $, (o) => o.code === B))(e, a);
  return ea(s) ? new C(B, s, t) : new ne(s, t);
}, ea = (e) => e.parameters[0] === "選択肢ヘルプ", aa = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => P(n, i, (o) => o.code === _, (o) => o.code === j))(e, a);
  return new C(j, s, t);
}, ta = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => P(n, i, (o) => o.code === E, (o) => o.code === we))(e, a);
  return new ne(s, t);
}, ra = (e, a) => {
  const { bodies: t, header: s } = ((n, i) => P(n, i, (o) => o.code === Y, (o) => o.code === T))(e, a);
  return new C(T, s, t);
}, sa = {
  [_]: (e, a, t) => t.showMessage(aa(e, a), a, e),
  [E]: (e, a, t) => t.script(ta(e, a), a, e),
  [$]: (e, a, t) => t.comment(Qe(e, a), a, e),
  [Y]: (e, a, t) => t.showScrollingText(ra(e, a), a, e)
}, A = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), na = (e) => e.parameters[0].map((a, t) => ({ code: 102, paramIndex: t, value: a })), Ja = (e) => ie(e, () => []), V = (e, a) => ie(e, a), ie = (e, a) => e.reduce((t, s, n) => {
  if (s.code === D) return [...t, ...na(s)];
  const i = (o = s.code, sa[o]);
  var o;
  if (i) {
    const m = i(e, n, ia);
    if (m !== void 0) return [...t, m];
  }
  if (s.code === W) return [...t, A(s)];
  if (s.code === X) return [...t, A(s)];
  if (s.code === K) return [...t, A(s)];
  if (s.code === Ie) {
    const m = a(s);
    return m.length === 0 ? t : [...t, ...m];
  }
  return t;
}, []), ia = { comment: (e) => ({
  code: $,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: j, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var a, t;
}, script: (e) => ((a) => ({ code: E, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({ code: T, paramIndex: 0, value: a.getBodyText() }))(e) }, Ka = (e, a = () => []) => {
  return t = (s, n, { id: i }) => ({ eventId: i, commands: V(s.list, a) }), e.map((s) => t(s, 0, s));
  var t;
}, Wa = (e, a = () => []) => ((t, s) => t.map((n) => M(n, s)))(e, (t, s, { id: n }) => ({
  eventId: n,
  pageIndex: s,
  commands: V(t.list, a)
})), Xa = (e, a = () => []) => ({ note: e.note, noteItems: Q(e.note), displayedName: e.displayName, events: oa(e, a) }), oa = (e, a) => re(e, (t, s, n) => ({
  eventId: n.id,
  pageIndex: s,
  commands: V(t.list, a),
  note: n.note,
  noteItems: Q(n.note),
  name: n.name
})), Ya = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), S = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), Qa = (e) => [S(e, "faceName", "faces"), S(e, "characterName", "characters"), S(e, "battlerName", "sv_actors")], b = (e, a) => ({
  note: ca(e),
  main: a.map((t) => ({ key: t, text: e[t], id: e.id }))
}), ca = (e) => $e(e.note, (a, t) => ({
  key: a,
  text: t,
  id: e.id
})), et = (e) => b(e, ["name", "nickname", "profile"]), at = (e) => b(e, ["name"]), tt = (e) => b(e, ["name"]), rt = (e) => b(e, ["name", "description", "message1", "message2"]), st = (e) => b(e, ["name", "description"]), nt = (e) => b(e, ["name", "description"]), it = (e) => b(e, ["name", "description"]), ot = (e) => b(e, ["name", "message1", "message2", "message3", "message4"]), ct = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Se(e.terms.basic),
    commands: Ae(e.terms.commands),
    messages: qe(e.terms.messages),
    params: Pe(e.terms.params)
  }
}), mt = (e, a, t, s, n, i) => [...Be(t, s), ...De(e, a), ..._e(n, i)], dt = (e, a) => ee(Ee(a), e), pt = (e, a, t) => {
  const s = Me(a);
  return ee(t ? [...s, ...t] : s, e);
}, ma = (e, a) => `${a}[${e.map((t) => `"${t.name}"`).join(",")}]`, oe = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
}, da = (e, a, t, s) => {
  if (t.scalas.length > 0 || t.scalaArrays.length > 0) {
    const n = ((i, { path: o, structName: m }) => {
      return {
        arraySchema: F(i.scalaArrays),
        objectSchema: F(i.scalas),
        structName: m,
        scalaArrays: (d = i.scalaArrays, k = o, d.map((f) => ({ path: `${k}.${f.name}[*]`, param: f }))),
        scalas: i.scalas.length > 0 ? ma(i.scalas, o) : void 0
      };
      var d, k;
    })(t, {
      path: a.basePath,
      structName: a.schemaName
    });
    return { frames: [...e.frames, ...s], items: [...e.items, n], errs: e.errs };
  }
  return s.length > 0 ? { frames: [...e.frames, ...s], items: e.items, errs: e.errs } : e;
};
function ce(e, a, t, s) {
  const n = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, i = Math.max(1, 3 * t.size + 5), o = Array.from({
    length: i
  }).reduce((m) => m.frames.length === 0 ? m : ((d, k, f) => {
    if (d.frames.length === 0) return d;
    const l = d.frames.pop();
    if (l.ancestry.includes(l.schemaName)) return {
      frames: d.frames,
      items: d.items,
      errs: [...d.errs, { code: f.cyclicStruct, path: l.basePath }]
    };
    const g = k.get(l.schemaName);
    if (!g) return { frames: d.frames, items: d.items, errs: [...d.errs, {
      code: f.undefinedStruct,
      path: l.basePath
    }] };
    const he = ((q, L) => {
      const O = q.ancestry.concat(q.schemaName), z = q.basePath;
      return [...L.structs.map((x) => ({
        schemaName: x.attr.struct,
        basePath: `${z}.${x.name}`,
        ancestry: O
      })), ...L.structArrays.map((x) => ({ schemaName: x.attr.struct, basePath: `${z}.${x.name}[*]`, ancestry: O }))].reverse();
    })(l, g);
    return da(d, l, g, he);
  })(m, t, s), n);
  return {
    items: o.items,
    errors: o.errs
  };
}
function ut(e, a, t, s = oe) {
  const n = e.map((i) => ce(i.attr.struct, `${a}.${i.name}`, t, s));
  return { items: n.flatMap((i) => i.items), errors: n.flatMap((i) => i.errors) };
}
function lt(e, a, t, s = oe) {
  return ce(e, a, t, s);
}
const yt = (e, a) => {
  if (!a.scalas) return [];
  const t = new ae(a.scalas).pathSegments(e);
  return pa(t, a, a.structName);
}, pa = (e, a, t) => e.reduce((s, { segments: n, value: i }) => {
  if (typeof i == "object") return s;
  const o = n[n.length - 1];
  if (typeof o == "number") return s;
  const m = a.objectSchema[o];
  if (!m) return s;
  const d = { value: i, structName: t, param: { name: o, attr: m } };
  return [...s, d];
}, []), ft = (e, a) => a.scalaArrays.map((t) => ((s, n) => {
  const i = new ae(n.path).find(s);
  if (!Array.isArray(i)) return null;
  const o = n.param.attr;
  return Re(o) ? { values: i.filter((m) => typeof m == "string"), valueKind: "string", param: { name: n.param.name, attr: o } } : Ce(o) ? {
    values: i.filter((m) => typeof m == "number"),
    valueKind: "number",
    param: { name: n.param.name, attr: o }
  } : null;
})(e, t)).filter((t) => t !== null), gt = (e) => e.filter((a) => ua(a)).reduce((a, t) => ({
  ...a,
  [t.structName]: t.schema
}), {}), ua = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, me = (e, a) => ({ type: "array", items: a, ...p(e), ...u(e.default) }), p = (e) => ({
  ...typeof e.text == "string" ? { title: e.text } : {},
  ...typeof e.desc == "string" ? { description: e.desc } : {}
}), u = (e) => e !== void 0 ? { default: e } : {}, la = "x-rpg-param", h = (e, a) => ({ [la]: {
  kind: e.kind,
  ...e.parent ? { parent: e.parent } : {},
  data: a
} }), ya = (e) => h(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), w = (e) => e === void 0 || e === 0, G = (e) => h(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), de = (e) => ({ $ref: `#/definitions/${e.struct}`, ...p(e) }), pe = (e) => me(e, {
  type: "string"
}), ue = (e) => me(e, { type: "integer" }), le = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({ type: "string", ...p(a), ...u(a.default) }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...u(a.default), ...p(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...u(a.default), ...p(a), ...a.options ? { enum: a.options.map((t) => t.value) } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return pe(e);
    case "number[]":
      return ((a) => ({
        type: "array",
        items: { type: w(a.decimals) ? "integer" : "number" },
        ...u(a.default),
        ...p(a)
      }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ue(e);
    case "number":
      return ((a) => ({
        type: w(a.decimals) ? "integer" : "number",
        ...u(a.default),
        ...p(a)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...u(a.default), ...p(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...u(a.default), ...p(a) }))(e);
    case "struct":
      return de(e);
    default:
      return {};
  }
}, fa = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({ type: "string", ...p(a), ...u(a.default), ...h(a, {}) }))(e);
    case "file":
      return ((a) => ({
        type: "string",
        ...u(a.default),
        ...p(a),
        ...h(a, { dir: a.dir })
      }))(e);
    case "combo":
      return ((a) => ({ type: "string", ...u(a.default), ...p(a), ...h(a, { options: [...a.options] }) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...u(a.default), ...p(a), enum: a.options.map((t) => t.value), ...h(a, { options: a.options.map((t) => ({ value: t.value, option: t.option })) }) }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return pe(e);
    case "number[]":
      return ((a) => ({ type: "array", items: { type: w(a.decimals) ? "integer" : "number" }, ...u(a.default), ...p(a), ...G(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ue(e);
    case "number":
      return ((a) => ({
        type: w(a.decimals) ? "integer" : "number",
        ...u(a.default),
        ...p(a),
        ...G(a)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...u(a.default), ...p(a), ...h(a, Ve(a.kind)) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...u(a.default), ...p(a), ...ya(a) }))(e);
    case "struct":
      return de(e);
    default:
      return {};
  }
}, ga = (e) => {
  const a = Object.entries(e).reduce((t, [s, n]) => {
    const i = le(n);
    return { ...t, [s]: i };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
}, U = (e, a, t, s) => {
  const { properties: n, logs: i } = ba(t, e, s);
  return { schema: {
    type: "object",
    title: a,
    properties: n,
    required: Object.keys(t),
    additionalProperties: !1
  }, logs: i };
}, ye = (e) => e.kind === "struct_def", fe = (e) => e.kind === "struct_def[]", ba = (e, a, t) => Object.entries(e).reduce((s, n) => ((i, [o, m], d, k) => {
  const f = `${d}.${o}`, l = ha(f, m, k);
  return { properties: { ...i.properties, [o]: l.schema }, logs: [...i.logs, ...l.logs, {
    structName: (g = m, fe(g) || ye(g) ? g.struct : ""),
    path: f,
    data: m,
    schema: l.schema
  }] };
  var g;
})(s, n, a, t), { properties: {}, logs: [] }), ha = (e, a, t) => ye(a) ? ge(e, a, t) : fe(a) ? va(e, a, t) : {
  schema: t.options.kindData ? fa(a) : le(a),
  logs: []
}, ge = (e, a, t) => U(e, a.struct, a.params, t), va = (e, a, t) => {
  const s = ge(`${e}[]`, { params: a.params, struct: a.struct }, t);
  return { schema: {
    type: "array",
    ...s.schema ? { items: s.schema } : {},
    ...u(a.default)
  }, logs: s.logs };
}, bt = (e, { args: a, command: t }, s) => U(`${e.moduleName}.command.${t}`, t, a, { options: s }), ht = (e, { params: a, struct: t }, s) => U(`${e.moduleName}.${t}`, t, a, {
  options: s
}), c = { type: "string", nullable: !0, maxLength: 100 }, y = { type: "string", default: "", nullable: !1 }, I = { type: "number", nullable: !0 }, vt = () => ({ type: "object", discriminator: {
  propertyName: "kind"
}, oneOf: [ka, Ia, wa, $a, Pa, xa, Na, Sa, qa, Aa, Ta, ja] }), ka = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "boolean"
}, default: { type: "boolean", default: !0 }, on: c, off: c, desc: c, text: c, parent: c } }, xa = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: I, max: I, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: c, text: c, parent: c } }, Na = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: I, max: I, desc: c, text: c, parent: c }
}, Ta = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: y, desc: c, text: c, parent: c } }, ja = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string[]"
}, default: { type: "array", items: y, default: [] }, desc: c, text: c, parent: c } }, wa = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: c, text: c, parent: c } }, Ia = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: { kind: { type: "string", const: "combo" }, default: y, options: {
    type: "array",
    items: { type: "string" },
    default: []
  }, desc: c, text: c, parent: c }
}, $a = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: y,
  dir: y,
  desc: c,
  text: c,
  parent: c
} }, Pa = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: y, desc: c, text: c, parent: c } }, be = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, qa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: c, text: c, parent: c, struct: be }
}, Aa = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: be, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: c, text: c, parent: c }
}, Sa = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: y,
  options: { type: "array", items: { type: "object", properties: { value: y, option: y }, required: ["value", "option"] }, default: [] },
  desc: c,
  text: c,
  parent: c
} }, kt = (e) => ga(e);
export {
  kt as $,
  Qa as A,
  Ya as B,
  ca as C,
  b as D,
  et as E,
  it as F,
  tt as G,
  at as H,
  st as I,
  rt as J,
  ot as K,
  nt as L,
  ct as M,
  mt as N,
  dt as O,
  pt as P,
  ut as Q,
  lt as R,
  yt as S,
  ft as T,
  ga as U,
  bt as V,
  ht as W,
  le as X,
  fa as Y,
  U as Z,
  vt as _,
  te as a,
  gt as a0,
  Ma as b,
  Ra as c,
  Oa as d,
  Le as e,
  Ua as f,
  Va as g,
  La as h,
  za as i,
  Ga as j,
  Fa as k,
  R as l,
  Fe as m,
  Ze as n,
  He as o,
  Ge as p,
  Za as q,
  Ca as r,
  v as s,
  r as t,
  Je as u,
  Ha as v,
  Wa as w,
  Ka as x,
  Xa as y,
  Ja as z
};
