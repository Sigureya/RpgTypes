import { as as P, b as ie, q as ce, N as le, v as _, E as V, w as q, aS as A, P as L, Q as J, aP as D, aM as j, aO as ae, az as de, ay as R, aR as pe } from "./eventCommandCodes.es.js";
import { n as G, m as ue } from "./normalText.es.js";
import { aV as He, as as Oe, aR as Xe, b6 as Ye, b7 as Qe, aL as We, a$ as C, a_ as Ze, aU as ge, aA as ea, aw as aa, ax as sa, b0 as ta, b1 as ra } from "./namedItems.es.js";
import { l as U, a as ye, i as he, f as fe, c as ve, e as be, d as xe, j as Ne, b as Te, h as na, g as ma } from "./system.es.js";
import { JSONPathJS as oa } from "jsonpath-js";
import { parseDeepRecord as ia } from "@sigureya/rmmz-plugin-schema";
import { m as ca } from "./make.es.js";
import { t as la, F as da, E as pa, B as ua } from "./makeSystemEx.es.js";
const ga = (e) => ((a, s) => ({
  code: a.code,
  paramIndex: s,
  value: a.parameters[s]
}))(e, 1), ya = (e) => e.parameters[0].map(((a, s) => ({ code: 102, paramIndex: s, value: a }))), E = (e, a) => ({
  id: e.id,
  name: e.name,
  note: ha(e),
  main: a.map(((s) => ({ key: s, value: e[s], id: e.id })))
}), ha = (e) => He(e.note, ((a, s) => ({
  key: a,
  value: s,
  id: e.id
}))), fa = (e) => E(e, ["name", "nickname", "profile"]), va = (e) => E(e, ["name"]), ba = (e) => E(e, ["name"]), xa = (e) => E(e, ["name", "description", "message1", "message2"]), Na = (e) => E(e, ["name", "description"]), Ta = (e) => E(e, ["name", "description"]), ka = (e) => E(e, ["name", "description"]), Ia = (e) => E(e, ["name", "message1", "message2", "message3", "message4"]), wa = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: ua(e.terms.basic),
    commands: pa(e.terms.commands),
    messages: da(e.terms.messages),
    params: la(e.terms.params)
  }
}), ke = (e, a) => {
  const s = N(e.actors, fa), t = Ca(e.armors), r = N(e.classes, ba), n = N(e.enemies, va), m = N(e.items, Na), o = N(e.mapInfos, ((u) => u)), i = N(e.skills, xa), d = N(e.states, Ia), c = N(e.weapons, Ta), l = Ea(e.commonEvents, a), f = $a(e.troops, a), p = Aa(e.mapFiles, a), T = Ma(e.system), g = Sa([s, t, r, n, m, o, i, d, c, f, l]).concat(Ba(e.mapFiles, e.system));
  return { value: { eventData: { commonEvents: l.data, troops: f.data.flat() }, mapFiles: p, system: T, mainData: {
    actors: s.data,
    armors: t.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: d.data,
    weapons: c.data
  } }, errors: g };
}, Ma = (e) => ({ message: e.message, system: e.system ? wa(e.system) : null }), N = (e, a) => ({
  error: e.error,
  fileName: e.fileName,
  success: e.success,
  data: e.success ? e.data.map(a) : []
}), Sa = (e) => e.filter(((a) => !a.success)).map(((a) => ({ fileName: a.fileName, error: a.error }))), Ba = (e, a) => [...e.info.success === !1 ? [{
  fileName: e.info.filename,
  error: e.info.message
}] : [], ...e.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...a.system === null ? [{
  fileName: U,
  error: a.message
}] : []], Ca = (e) => N(e, ka), Ea = (e, a) => N(e, ((s) => a.extractCommonEventText(s))), $a = (e, a) => N(e, ((s) => a.extractBattleText(s))), Aa = (e, a) => {
  const s = e.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: a.extractMapTexts(t.map)
  })));
  return { info: e.info, invalidMaps: e.invalidMaps, validMaps: s };
}, se = (e, a, s, t, r, n) => {
  if (e.code === P) return Fa(e, a, s, r, n);
  const m = G(e.value);
  return { otherData: n, uuid: r(m), kind: t(e), baseText: m, filename: s, id: a, speaker: e.speaker ?? "", dataKey: Da(e) };
}, Da = (e) => `code:${e.code}`, Fa = (e, a, s, t, r) => {
  const n = G(e.value);
  return {
    otherData: [e.pluginName, ...r],
    uuid: t(n),
    kind: `${Pa(e)}`,
    baseText: n,
    filename: s,
    id: a,
    dataKey: `code:${e.code}-${e.argName}`
  };
}, Pa = (e) => `${e.commandName}.${e.argTitle}`, ja = (e, a, s, t) => a.flatMap(((r) => Ra(e, r, s, t))), Ra = (e, a, s, t) => a.commands.filter(Ie).map(((r) => se(r, a.eventId, e, t, s, [a.name]))), Ka = (e, a, s, t) => e.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => se(m, r.eventId, a, s, t, [n])));
})), Ie = (e) => e.value.length > 0, Ua = (e, a, s, t) => B(e, a, {
  message1: s.state.message1,
  message2: s.state.message2,
  message3: s.state.message3,
  message4: s.state.message4,
  name: s.name,
  note: s.note
}, t), B = (e, a, s, t) => e.map(((r) => La(r, a, s, t))), La = (e, a, s, t) => ({
  main: e.main.filter(((r) => r.value !== "")).map(((r) => {
    const n = G(r.value);
    return { kind: s[r.key], baseText: n, id: r.id, dataKey: r.key, filename: a, uuid: t(n) };
  })),
  note: _a(e.note, a, s, t)
}), _a = (e, a, s, t) => e.map(((r) => ({
  kind: `${s.note}:${r.key}`,
  baseText: r.value,
  filename: a,
  id: r.id,
  uuid: t(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Va = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, qa = (e) => {
  const a = e.trim().toLowerCase();
  return a === "true" || a === "false";
}, Ja = (e) => {
  const a = e.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(a);
}, z = (e) => {
  const a = e.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(a);
}, we = (e, a) => {
  const s = e.flatMap(((r) => r.notes.map(((n) => ({
    ...n,
    soruce: r.source
  }))))), t = Ga(s);
  return Array.from(t.entries()).map((([r, n]) => {
    const m = Ha(n, a);
    return { key: r, kinds: za(m), values: n.map(((o) => ({
      value: o.value,
      dataId: o.dataId,
      soruce: o.soruce,
      name: o.name
    }))) };
  }));
}, Ga = (e) => e.reduce(((a, s) => (a.has(s.key) || a.set(s.key, e.filter(((t) => t.key === s.key))), a)), /* @__PURE__ */ new Map()), za = (e) => [e.isBoolean ? "boolean" : null, e.isNumber ? "number" : null, e.isBgm ? "bgm" : null, e.isBgs ? "bgs" : null, e.isMe ? "me" : null, e.isSe ? "se" : null, e.isPicture ? "pictures" : null, e.isCharacter ? "characters" : null, e.isFaceset ? "faces" : null, e.isBattler ? "battlers" : null, e.isSvBattler ? "svBattlers" : null, e.isEnemy ? "enemies" : null, e.isTileset ? "tilesets" : null, e.isMovie ? "movies" : null].filter(((a) => a !== null)), Ha = (e, { audioFiles: a, imageFiles: s, otherFiles: t }) => e.reduce(((r, n) => ({
  isBoolean: r.isBoolean && qa(n.value),
  isNumber: r.isNumber && Ja(n.value),
  isBgm: r.isBgm && a.bgm.has(n.value),
  isBgs: r.isBgs && a.bgs.has(n.value),
  isMe: r.isMe && a.me.has(n.value),
  isSe: r.isSe && a.se.has(n.value),
  isPicture: r.isPicture && s.picutures.has(n.value),
  isCharacter: r.isCharacter && s.characters.has(n.value),
  isFaceset: r.isFaceset && s.faces.has(n.value),
  isBattler: r.isBattler && s.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && s.svActors.has(n.value),
  isEnemy: r.isEnemy && s.enemies.has(n.value),
  isTileset: r.isTileset && s.tilesets.has(n.value),
  isMovie: r.isMovie && t.movies.has(n.value)
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
}), Oa = (e) => ({
  source: e.filename,
  notes: [...e.map.noteItems.map(Ya), ...e.map.events.map(Xa).flat()]
}), Xa = (e) => e.noteItems.map(((a) => ({ dataId: e.eventId, key: a.key, value: a.value, name: e.name }))), Ya = (e) => ({ dataId: 0, key: e.key, value: e.value, name: "" }), Qa = (e, a) => ({
  eventId: e.eventId,
  name: e.name,
  pageIndex: e.pageIndex,
  commands: e.commands,
  note: e.note,
  noteItems: e.noteItems.filter(a)
}), M = (e, a) => e.map(((s) => {
  const t = s.note.filter(a);
  return {
    main: s.main,
    note: t,
    id: s.id,
    name: s.name
  };
})).filter(Wa), Wa = (e) => e.note.length > 0 || e.main.length > 0, Me = (e, a) => {
  const s = as(e.value.mainData, a), t = ss(e.value.mapFiles.validMaps, a);
  return {
    nonTextNoteKeys: s.nonTextNoteKeys,
    dataNoteSummary: s.noteSummary,
    mapNoteSummary: t.noteSummary,
    data: { errors: e.errors, value: { mainData: s.mainData, mapFiles: {
      info: e.value.mapFiles.info,
      invalidMaps: e.value.mapFiles.invalidMaps,
      validMaps: t.validMaps
    }, eventData: e.value.eventData, system: e.value.system } }
  };
}, Se = (e, a) => {
  const s = (t) => a.has(t.key);
  return {
    actors: M(e.actors, s),
    enemies: M(e.enemies, s),
    weapons: M(e.weapons, s),
    armors: M(e.armors, s),
    skills: M(e.skills, s),
    states: M(e.states, s),
    items: M(e.items, s),
    classes: M(e.classes, s)
  };
}, Lt = (e, a) => {
  const s = Ee(e, a), t = z(s);
  return Be(e, t);
}, Za = (e, a) => {
  const s = Ce(e, a);
  return z(s);
}, _t = (e, a) => {
  const s = Za(e, a);
  return Se(e, s);
}, Be = (e, a) => e.map(((s) => {
  return {
    filename: s.filename,
    editingName: s.editingName,
    map: (t = s.map, r = (n) => a.has(n.key), {
      displayedName: t.displayedName,
      note: t.note,
      noteItems: t.noteItems.filter(r),
      events: t.events.map(((n) => Qa(n, r)))
    })
  };
  var t, r;
})), Ce = (e, a) => {
  const s = es(e);
  return we(s, a);
}, es = (e) => [S(ye, e.actors), S(he, e.skills), S(fe, e.items), S(ve, e.weapons), S(be, e.armors), S(xe, e.classes), S(Ne, e.states), S(Te, e.enemies)], S = (e, a) => ({
  source: e,
  notes: a.flatMap(((s) => s.note.map(((t) => ({ key: t.key, value: t.value, dataId: t.id, name: s.name })))))
}), Ee = (e, a) => {
  const s = e.map(Oa);
  return we(s, a);
}, as = (e, a) => {
  const s = Ce(e, a), t = z(s);
  return {
    noteSummary: s,
    nonTextNoteKeys: t,
    mainData: Se(e, t)
  };
}, ss = (e, a) => {
  const s = Ee(e, a), t = z(s);
  return { noteSummary: s, validMaps: Be(e, t) };
}, ts = (e, a, s, t) => [{
  filename: a,
  id: 0,
  baseText: e.gameTitle,
  uuid: t(e.gameTitle),
  kind: s.gameTitle,
  dataKey: "gameTitle"
}, {
  filename: a,
  id: 0,
  baseText: e.currencyUnit,
  uuid: t(e.currencyUnit),
  kind: s.currencyUnit,
  dataKey: "currencyUnit"
}, ...Y(a, e.equipTypes, "equipTypes", s.equipTypes, t), ...Y(a, e.weaponTypes, "weaponTypes", s.weaponTypes, t), ...Y(a, e.armorTypes, "armorTypes", s.armorTypes, t)], Y = (e, a, s, t, r) => a.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = G(n);
  return { filename: e, id: m, baseText: o, uuid: r(o), kind: t, dataKey: s };
})), Vt = (e, a, s, t, r, n) => {
  const m = ke(a.data, n), o = Me(m, a);
  return ns(a.data.actors.data, o, e, s, t, r);
}, rs = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], ns = (e, a, s, t, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = a.data.value;
  return {
    noteX: rs(a),
    pluginParams: [],
    map: ms(i, r, n),
    commonEvents: ja(na, m.commonEvents, r, n),
    troops: Ka(m.troops, ma, n, r),
    armors: B(o.armors, be, t, r),
    system: is(d, r, s),
    actors: { texts: B(o.actors, ye, t, r), controlChars: Oe(e) },
    classes: B(o.classes, xe, t, r),
    enemies: B(o.enemies, Te, t, r),
    items: B(o.items, fe, t, r),
    skills: B(o.skills, he, t, r),
    states: Ua(o.states, Ne, t, r),
    weapons: B(o.weapons, ve, t, r)
  };
}, ms = (e, a, s) => e.validMaps.map(((t) => os(t, a, s))).flat(3), os = (e, a, s) => e.map.events.map(((t) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = Va(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(Ie).map(((c) => se(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(t, e, a, s))), is = (e, a, s) => e.system === null ? { gameTitle: "", filename: U, texts: [] } : {
  gameTitle: e.system.gameTitle,
  filename: U,
  texts: ts(e.system, U, s, a)
}, $e = (e, a, s) => e.filter(((t) => t.code === ie || t.code === ce || t.code === le)).map(((t) => ls(t, a, s))), cs = {
  [le]: "weapon",
  [ie]: "armor",
  [ce]: "item"
}, ls = (e, a, s) => {
  const t = Xe(e) ? { direct: !1, variableId: e.parameters[3] } : {
    direct: !0,
    value: e.parameters[3]
  }, r = e.parameters[1] === Ye ? a.gain : e.parameters[1] === Qe ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: cs[e.code],
    dataId: We(e),
    code: e.code,
    commandNameMZ: s(e.code),
    operation: r,
    ...n,
    ...t
  };
}, Ae = (e) => !!e, qt = (e, a, s) => ({ data: e, eventId: a, pageIndex: s }), ds = (e, a, s) => e.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: a
}))), H = (e, a) => e.pages.map(((s, t) => a(s, t, e))), ps = (e, a) => e.events.filter(Ae).map(((s) => H(s, a))), te = (e, a) => e.events.filter(Ae).flatMap(((s) => H(s, a))), us = (e, a) => e.map(((s) => H(s, a))), gs = (e, a) => e.flatMap(((s) => H(s, a))), ys = (e, a) => e.map(((s) => a(s, 0, s))), Jt = (e) => ps(e, ds).flat(2), Gt = (e, a, s, t) => {
  const r = hs(e), n = a.map(fs), m = vs(s), o = bs(t);
  return new Set([r, m, o, n].flat(4));
}, hs = (e) => e.map(((a) => [a.name, a.nickname, a.profile])), fs = (e) => te(e, re), vs = (e) => ys(e, re), bs = (e) => us(e, re), re = ({ list: e }) => e.filter(xs).map(((a) => a.parameters[1])), xs = (e) => e.code === _ || e.code === V || e.code === q, De = (e, a) => {
  const s = a(e.list);
  return { ...e, list: s };
}, Fe = (e, a) => ({ ...e, pages: e.pages.map(((s) => De(s, a))) }), zt = (e, a) => ({
  ...e,
  events: e.events.map(((s) => s ? Fe(s, a) : null))
}), Ht = (e, a) => e.map(((s) => De(s, a))), Ot = (e, a) => e.map(((s) => Fe(s, a))), Xt = (e, a, s) => te(e.map, ((t, r, n) => ({
  ...Ns(t),
  commands: $e(t.list, a, s),
  eventName: n.name,
  pageIndex: r
}))), Ns = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Yt = (e, a, s) => gs(e, ((t, r, n) => ({
  commands: $e(t.list, a, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Ts = (e, a) => {
  const s = e.trimEnd(), t = a.get(s);
  return t ? t.trimEnd() : s;
}, h = (e, a) => {
  const s = e.trimEnd(), t = a(s);
  return t ? t.trimEnd() : s;
}, v = (e, a) => {
  const s = e.trimEnd(), t = a.replaceText(s);
  return t ? t.trimEnd() : s;
}, ks = (e, a) => {
  const s = (o) => a.replaceText(o), t = C(e.note, a), r = h(e.name, s), n = h(e.nickname, s), m = h(e.profile, s);
  return {
    ...e,
    name: r,
    nickname: n,
    profile: m,
    note: t
  };
}, Is = (e, a) => {
  const s = C(e.note, a), t = v(e.name, a);
  return { ...e, name: t, note: s };
}, ws = (e, a) => {
  const s = C(e.note, a), t = v(e.name, a);
  return {
    ...e,
    name: t,
    note: s
  };
}, Ms = (e, a) => {
  const s = C(e.note, a), t = v(e.name, a), r = v(e.description, a), n = v(e.message1, a), m = v(e.message2, a);
  return { ...e, name: t, description: r, message1: n, message2: m, note: s };
}, Q = (e, a) => {
  const s = C(e.note, a), t = v(e.name, a), r = v(e.description, a);
  return { ...e, name: t, description: r, note: s };
}, Ss = (e, a) => {
  const s = C(e.note, a), t = v(e.name, a), r = v(e.message1, a), n = v(e.message2, a), m = v(e.message3, a), o = v(e.message4, a);
  return {
    ...e,
    name: t,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: s
  };
}, Bs = (e, a) => {
  switch (e.code) {
    case ae:
      return Es(e, a);
    case j:
      return As(e, a);
    case D:
    case J:
    case L:
    case A:
      return Cs(e, a);
    case _:
    case q:
    case V:
      return $s(e, a);
    default:
      return e;
  }
}, Cs = (e, a) => {
  const s = h(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [s] };
}, Es = (e, a) => {
  const s = e.parameters[4] ? h(e.parameters[4], a) : "";
  return ca({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: s
  }, e.indent);
}, $s = (e, a) => {
  const s = h(e.parameters[1], a);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], s] };
}, As = (e, a) => {
  const s = e.parameters[0].map(((t) => h(t, a)));
  return {
    code: j,
    indent: e.indent,
    parameters: [s, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Qt = (e, a, s = `
`) => Ds(e, ((t) => a.get(t)), s), Ds = (e, a, s = `
`) => Ze(e.note, ((t) => h(t.value, a)), s), Wt = (e, a) => Pe(e, ((s) => Ts(s, a))), Pe = (e, a) => ({
  params: js(e.params, ((s) => h(s, a))),
  messages: Rs(e.messages, ((s) => h(s, a))),
  basic: Fs(e.basic, ((s) => h(s, a))),
  commands: Ps(e.commands, ((s) => h(s, a)))
}), Fs = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Ps = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], js = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Rs = (e, a) => ({
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
}), Ks = (e, a) => ({
  ...e,
  gameTitle: h(e.gameTitle, a),
  currencyUnit: h(e.currencyUnit, a),
  elements: F(e.elements, a),
  skillTypes: F(e.skillTypes, a),
  weaponTypes: F(e.weaponTypes, a),
  armorTypes: F(e.armorTypes, a),
  equipTypes: F(e.equipTypes, a),
  terms: Pe(e.terms, a)
}), F = (e, a) => e.map(((s) => h(s, a))), je = (e) => e.map(((a) => a.parameters[0].trimEnd())).join(`
`).trimEnd();
class Re {
  constructor(a, s) {
    this.header = a, this.bodies = s;
  }
  getBodyText() {
    return je(this.joinCommandBodies());
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
class ne {
  constructor(a, s, t) {
    this.bodyCode = a, this.header = s, this.bodies = t;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return je(this.bodies);
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
const O = (e, a, s, t) => {
  const r = e[a];
  if (!s(r)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!t(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Us = (e, a) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === J), ((m) => m.code === L)))(e, a);
  return Ls(t) ? new ne(L, t, s) : new Re(t, s);
}, Ls = (e) => e.parameters[0] === "選択肢ヘルプ", _s = (e, a) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === ae), ((m) => m.code === D)))(e, a);
  return new ne(D, t, s);
}, Vs = (e, a) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === R), ((m) => m.code === de)))(e, a);
  return new Re(t, s);
}, qs = (e, a) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === pe), ((m) => m.code === A)))(e, a);
  return new ne(A, t, s);
}, Js = {
  [ae]: (e, a, s) => s.showMessage(_s(e, a), a, e),
  [R]: (e, a, s) => s.script(Vs(e, a), a, e),
  [J]: (e, a, s) => s.comment(Us(e, a), a, e),
  [pe]: (e, a, s) => s.showScrollingText(qs(e, a), a, e)
}, Ke = (e) => Js[e], Zt = (e) => Ue(e, (() => [])), X = (e, a) => Ue(e, a), Ue = (e, a) => e.flatMap(((s, t) => Gs(s, t, e, a))).filter(((s) => s !== null)), Gs = (e, a, s, t) => {
  if (e.code === P) return t(e);
  if (e.code === j) return ya(e);
  const r = Ke(e.code);
  if (r) {
    const n = r(s, a, zs);
    if (n !== void 0) return [n];
  }
  return e.code === q || e.code === _ || e.code === V ? ga(e) : null;
}, zs = { comment: (e) => ({
  code: J,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: D, paramIndex: 0, value: (a = e).getBodyText(), speaker: (s = a.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var a, s;
}, script: (e) => ((a) => ({ code: R, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({ code: A, paramIndex: 0, value: a.getBodyText() }))(e) }, Hs = (e, a = () => []) => ({
  eventId: e.id,
  name: e.name,
  commands: X(e.list, a)
}), Os = (e, a = () => []) => e.pages.map(((s, t) => ({ eventId: e.id, pageIndex: t, commands: X(s.list, a) }))), Xs = (e, a = () => []) => ({
  note: e.note,
  noteItems: ge(e.note),
  displayedName: e.displayName,
  events: Ys(e, a)
}), Ys = (e, a) => te(e, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: X(s.list, a),
  note: r.note,
  noteItems: ge(r.note),
  name: r.name
}))), Le = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), _e = (e) => e.kind === "struct", Ve = (e) => e.attr.kind === "struct[]", Qs = (e) => qe[e.kind.replace("[]", "")].type === "number", Ws = (e) => qe[e.kind.replace("[]", "")].type === "string", $ = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, b = { type: "number", hasText: !1 }, qe = {
  string: $,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: x,
  actor: x,
  class: x,
  enemy: x,
  skill: x,
  state: x,
  item: x,
  weapon: x,
  common_event: x,
  switch: x,
  variable: x,
  troop: x,
  multiline_string: $,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": $,
  "string[]": $,
  combo: $,
  select: $,
  any: $,
  struct: { type: "struct" },
  "actor[]": b,
  "enemy[]": b,
  "class[]": b,
  "skill[]": b,
  "state[]": b,
  "item[]": b,
  "weapon[]": b,
  "common_event[]": b,
  "troop[]": b,
  "armor[]": b,
  "switch[]": b,
  "variable[]": b,
  "number[]": b
};
function Zs(e) {
  return et(e, ((a) => !0), ((a) => !0));
}
const et = (e, a, s) => {
  const t = [], r = [], n = [], m = [];
  return e.forEach(((o) => {
    if (_e(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (Ve(o)) r.push(o);
    else if (Le(o)) {
      if (s(o)) return void m.push(o);
    } else a(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function at(e) {
  const a = e.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(a);
}
const st = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map(((s) => `"${s.name}"`)).join(",")}]`;
}, tt = (e, a) => e.map(((s) => ({ path: `${a}["${s.name}"][*]`, param: s }))), Je = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ge(e, a, s, t) {
  const r = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, n = Math.max(1, 3 * s.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, d, c) {
    if (i.frames.length === 0) return i;
    const l = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (l.ancestry.includes(l.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: c.cyclicStruct, path: l.basePath }] };
    const p = d.get(l.schemaName);
    if (!p) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: c.undefinedStruct, path: l.basePath }]
    };
    const T = (function(g, u) {
      const y = g.ancestry.concat(g.schemaName), I = g.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${I}["${w.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${I}["${w.name}"][*]`, ancestry: y })))].reverse();
    })(l, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: I }) {
        return {
          category: "struct",
          objectSchema: at(u.scalars),
          name: I,
          scalarArrays: tt(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? st(u.scalars, y) : void 0
        };
      })(p, { path: l.basePath, structName: l.schemaName });
      return f.push(...T), {
        frames: f,
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return f.push(...T), { frames: f, items: i.items, errs: i.errs };
  })(o, s, t)), r);
  return { items: m.items, errors: m.errs };
}
const rt = (e, a, s, t = Je) => Ge(e.attr.struct, `${a}["${e.name}"]`, s, t), nt = (e, a, s, t = Je) => Ge(e.attr.struct, `${a}["${e.name}"][*]`, s, t), mt = (e, a, s, t) => ((r) => _e(r.attr))(s) ? ct(e, s, t) : Ve(s) ? lt(e, s, t) : Le(s) ? ot(e, a, s) : it(e, a, s), ot = (e, a, s) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), it = (e, a, s) => ({ rootCategory: e, rootName: a, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ct = (e, a, s) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: rt(a, "$", s)
}), lt = (e, a, s) => ({
  structArrays: nt(a, "$", s),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), dt = (e, a) => a.map(((s) => pt(e, s))).flat(3), pt = (e, a) => [a.top ? W(a, e, a.top, "") : [], a.structs.map(((s) => W(a, e, s))), a.structArrays.map(((s) => W(a, e, s)))], W = (e, a, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, d, c) => d.pathSegments(i).map((({ value: l, segments: f }) => ((p, T, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const I = u[u.length - 1];
    if (typeof I == "number") return null;
    const w = y[I];
    return w ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: g, param: { name: I, attr: w } } : null;
  })(m, o, l, f, c))).filter(((l) => l !== null)))(e, t, a, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, d, c) => {
    const l = c.jsonPathJS.find(d);
    if (!Array.isArray(l)) return [];
    const f = c.schema.attr;
    return Ws(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, l, i, c.schema) : Qs(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: p.rootName, rootType: p.rootCategory, value: y, structName: g, param: u }))))(o, l, i, c.schema) : [];
  })(e, t, a, m)));
  return [r, n].flat(2);
}, Z = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: oe(e.scalarArrays, e.name, a), scalar: ut(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: oe(e.scalarArrays, e.name, a)
}, oe = (e, a, s) => e.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: a }))), ut = (e, a, s) => ({ jsonPathJS: s(e), record: a }), gt = (e, a, s, t) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: yt(a, s, t)
}), yt = (e, a, s) => e.args.map(((t) => ((r, n) => {
  const m = r.scalars ? Z(r.scalars, n) : void 0, o = r.structs.items.map(((d) => Z(d, n))), i = r.structArrays.items.map(((d) => Z(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(mt("args", e.command, t, a), s))), ht = (e, a) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, Zs(r.params)]))))(e.schema.structs);
  return ft(e.pluginName, e.schema.commands, s, a);
}, ft = (e, a, s, t) => a.map(((r) => [`${e}:${r.command}`, gt(e, r, s, t)])), vt = (e, a) => {
  const [s, t] = e.parameters, r = `${s}:${t}`, n = a.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: dt(m, o.extractors) }))(ia(e.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, er = (e) => {
  const a = new Map(e);
  return new me(a);
}, ar = () => new me(/* @__PURE__ */ new Map()), sr = (e) => {
  const a = e.flatMap(((s) => ht(s, ((t) => new oa(t)))));
  return new me(new Map(a));
};
class me {
  _commandMap;
  constructor(a) {
    this._commandMap = a;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(a) {
    return Xs(a, ((s) => this.extractArgs(s)));
  }
  extractBattleText(a) {
    return Os(a, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(a) {
    return Hs(a, ((s) => this.extractArgs(s)));
  }
  extractArgs(a) {
    const s = vt(a, this._commandMap);
    return s.args.filter(bt).map(((t) => ({
      code: P,
      value: t.value,
      paramIndex: 3,
      argName: t.param.name,
      argTitle: t.param.attr.text ?? t.param.name,
      commandName: s.commandName,
      pluginName: s.pluginName
    })));
  }
  extractCommandTexts(a) {
    return X(a, ((s) => this.extractArgs(s)));
  }
}
const bt = (e) => typeof e.value == "string", tr = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), ee = (e, a, s) => ({
  folder: s,
  key: a,
  image: e[a],
  id: e.id
}), rr = (e) => [ee(e, "faceName", "faces"), ee(e, "characterName", "characters"), ee(e, "battlerName", "sv_actors")], nr = (e, a, s, t, r, n) => [...ea(s, t), ...aa(e, a), ...sa(r, n)], mr = (e, a) => ue(ra(a), e), or = (e, a, s) => {
  const t = ta(a);
  return ue(s ? [...t, ...s] : t, e);
}, xt = (e, a, s, t) => {
  if (e.code === D || e.code === A || e.code === L) return;
  const r = Ke(e.code);
  return r ? r(s, a, t) : e.code === j ? Nt(e) : e.code === _ || e.code === q || e.code === V ? Tt(e) : e.code !== de ? e : void 0;
}, Nt = (e) => ({
  code: j,
  indent: e.indent,
  parameters: [e.parameters[0].map(((a) => a.trimEnd())), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Tt = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), kt = (e) => ({ code: R, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), It = (e) => {
  const a = e.getBodyText().trimEnd(), s = {
    code: D,
    indent: e.header.indent,
    parameters: [a]
  };
  return [Mt(e.header), s];
}, wt = (e) => {
  const a = e.getBodyText().trimEnd(), s = { code: A, indent: e.header.indent, parameters: [a] };
  return [e.header, s];
}, Mt = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, K = (e, a) => {
  const s = (t) => a.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: kt, showMessage: It, showScrollingText: wt };
    return t.map(((n, m) => n.code === P ? n : xt(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(e).map(((t) => t.code === P ? a.pluginCommand(t) : t.code === R ? a.scriptCommand(t) : Bs(t, s)));
}, St = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: K(s.list, a) })))
}), ir = (e, a) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: a
  };
  return { members: e.members, id: e.id, name: e.name, pages: e.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: K(t.list, s) }))) };
}, Bt = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: K(e.list, a)
}), cr = (e, a) => ({ id: e.id, name: e.name, trigger: e.trigger, switchId: e.switchId, list: K(e.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: a
}) }), lr = (e, a) => ze(e, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: a, isReplaceTargetNote: () => !1 }), Ct = (e, a) => ze(e, a), ze = (e, a) => ({
  note: C(e.note, a),
  displayName: v(e.displayName, a),
  events: e.events.map(((s) => s ? ((t, r) => ({ id: t.id, name: t.name, x: t.x, y: t.y, note: C(t.note, r), pages: t.pages.map(((n) => ({
    ...n,
    list: K(n.list, r)
  }))) }))(s, a) : null)),
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
}), Et = (e, a) => ({
  tilesets: e.tilesets,
  animations: e.animations,
  actors: k(e.actors, ((s) => ks(s, a))),
  armors: k(e.armors, ((s) => Q(s, a))),
  classes: k(e.classes, ((s) => ws(s, a))),
  commonEvents: k(e.commonEvents, ((s) => Bt(s, a))),
  enemies: k(e.enemies, ((s) => Is(s, a))),
  items: k(e.items, ((s) => Q(s, a))),
  mapInfos: e.mapInfos,
  skills: k(e.skills, ((s) => Ms(s, a))),
  states: k(e.states, ((s) => Ss(s, a))),
  system: { message: e.system.message, system: e.system.system ? Ks(e.system.system, a.replaceText) : null },
  troops: k(e.troops, ((s) => St(s, a))),
  weapons: k(e.weapons, ((s) => Q(s, a))),
  mapFiles: { info: e.mapFiles.info, invalidMaps: e.mapFiles.invalidMaps, validMaps: e.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: Ct(s.map, a)
  }))) }
}), k = (e, a) => ({
  success: e.success,
  fileName: e.fileName,
  error: e.error,
  data: e.success ? e.data.map(a) : []
}), dr = (e, a, s, t) => {
  const r = ke(e, s), n = Me(r, { audioFiles: a.audioFiles, imageFiles: a.imageFiles, otherFiles: a.otherFiles }), m = $t(n.nonTextNoteKeys, t);
  return Et(e, m);
}, $t = (e, a) => ({
  pluginCommand: (s) => a.pluginCommand(s),
  scriptCommand: (s) => a.scriptCommand(s),
  replaceText: (s) => a.replaceText(s),
  isReplaceTargetNote: (s) => !!e.has(s.key) && a.isReplaceTargetNote(s)
});
export {
  Bt as $,
  ga as A,
  ka as B,
  ba as C,
  va as D,
  Zt as E,
  X as F,
  Na as G,
  ke as H,
  xa as I,
  Ia as J,
  wa as K,
  Ta as L,
  ya as M,
  Jt as N,
  qa as O,
  Ja as P,
  Za as Q,
  _t as R,
  Lt as S,
  ys as T,
  H as U,
  ps as V,
  us as W,
  ks as X,
  Q as Y,
  Bs as Z,
  ws as _,
  Me as a,
  cr as a0,
  Ht as a1,
  Is as a2,
  K as a3,
  De as a4,
  Ct as a5,
  zt as a6,
  lr as a7,
  Ds as a8,
  Qt as a9,
  Fe as aa,
  Et as ab,
  dr as ac,
  Ms as ad,
  Ss as ae,
  Wt as af,
  Ks as ag,
  Ts as ah,
  St as ai,
  ir as aj,
  Ot as ak,
  z as al,
  we as am,
  Ee as an,
  Vt as b,
  nr as c,
  te as d,
  or as e,
  mr as f,
  gs as g,
  ds as h,
  qt as i,
  ar as j,
  er as k,
  sr as l,
  Gt as m,
  Os as n,
  Hs as o,
  rr as p,
  tr as q,
  ls as r,
  $e as s,
  Xt as t,
  Yt as u,
  Xs as v,
  ha as w,
  vt as x,
  E as y,
  fa as z
};
