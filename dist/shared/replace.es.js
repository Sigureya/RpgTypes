import { v as q, E as V, w as J, as as K, b as oa, q as ia, N as ca, aS as $, P as L, Q as G, aP as F, aM as R, aO as aa, az as la, ay as j, aR as da } from "./makeAudio.es.js";
import { n as z, m as pa } from "./normalText.es.js";
import { av as ea, b1 as te, b4 as se, b6 as re, aZ as ne, ax as me, a_ as oe, bj as ie, bk as ce, aT as le, aw as de, bc as C, bb as pe, b5 as ua, aH as ue, aD as ye, aE as ge, bd as he, be as fe } from "./namedItems.es.js";
import { l as _, a as ya, i as ga, f as ha, c as fa, e as va, d as xa, j as ba, b as Na, h as ve, g as xe } from "./constants.es.js";
import { JSONPathJS as be } from "jsonpath-js";
import { parseDeepRecord as Ne } from "@sigureya/rmmz-plugin-schema";
import { a as Te, r as Ta } from "./writeData.es.js";
import { k as ke, v as we, u as Se, r as Ie, a as Me } from "./makeSystem.es.js";
const Be = (a) => ((e, t) => ({ code: e.code, paramIndex: t, value: e.parameters[t] }))(a, 1), Ce = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), Ee = (a, e, t, s, r) => {
  const n = Array.from(De(a, e, t, s)).map(((o) => ({ key: o, value: r.hashText(o) }))), m = n.map(((o) => {
    const i = r.newText(o.key);
    return { key: i, value: r.hashText(i) };
  }));
  return [...n, ...m];
}, De = (a, e, t, s) => {
  const r = Ae(a), n = s.map($e), m = Fe(e), o = Pe(t);
  return new Set([r, m, o, n].flat(4));
}, Ae = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), $e = (a) => ea(a, ta), Fe = (a) => te(a, ta), Pe = (a) => se(a, ta), ta = ({ list: a }) => a.filter(Ke).map(((e) => e.parameters[1])), Ke = (a) => a.code === q || a.code === V || a.code === J, E = (a, e) => ({
  id: a.id,
  name: a.name,
  note: Re(a),
  main: e.map(((t) => ({ key: t, value: a[t], id: a.id })))
}), Re = (a) => re(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), je = (a) => E(a, ["name", "nickname", "profile"]), Ue = (a) => E(a, ["name"]), _e = (a) => E(a, ["name"]), Le = (a) => E(a, ["name", "description", "message1", "message2"]), qe = (a) => E(a, ["name", "description"]), Ve = (a) => E(a, ["name", "description"]), Je = (a) => E(a, ["name", "description"]), Ge = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), ze = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => He(r, e, t, s))), He = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = z(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: Oe(a.note, e, t, s) }), Oe = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Xe = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: Ie(a.terms.basic),
  commands: Se(a.terms.commands),
  messages: we(a.terms.messages),
  params: ke(a.terms.params)
} }), ka = (a, e) => {
  const t = N(a.actors, je), s = We(a.armors), r = N(a.classes, _e), n = N(a.enemies, Ue), m = N(a.items, qe), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, Le), d = N(a.states, Ge), c = N(a.weapons, Ve), l = at(a.commonEvents, e), f = et(a.troops, e), p = tt(a.mapFiles, e), T = Ye(a.system), y = Ze([t, s, r, n, m, o, i, d, c, f, l]).concat(Qe(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: l.data, troops: f.data.flat() }, mapFiles: p, system: T, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: d.data,
    weapons: c.data
  } }, errors: y };
}, Ye = (a) => ({ message: a.message, system: a.system ? Xe(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), Ze = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), Qe = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: _,
  error: e.message
}] : []], We = (a) => N(a, Je), at = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), et = (a, e) => N(a, ((t) => e.extractBattleText(t))), tt = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, sa = (a, e, t, s, r, n) => {
  if (a.code === K) return rt(a, e, t, r, n);
  const m = z(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: st(a) };
}, st = (a) => `code:${a.code}`, rt = (a, e, t, s, r) => {
  const n = z(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: s(n),
    kind: `${nt(a)}`,
    baseText: n,
    filename: t,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, nt = (a) => `${a.commandName}.${a.argTitle}`, mt = (a, e, t, s) => e.flatMap(((r) => ot(a, r, t, s))), ot = (a, e, t, s) => e.commands.filter(wa).map(((r) => sa(r, e.eventId, a, s, t, [e.name]))), it = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => sa(m, r.eventId, e, t, s, [n])));
})), wa = (a) => a.value.length > 0, ct = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, lt = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, dt = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, U = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, Sa = (a, e) => {
  const t = pt(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = gt(r, e);
    return {
      key: s,
      kinds: yt(n),
      values: r.map(ut)
    };
  }));
}, pt = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: s.name, soruce: t.source })))));
  return Map.groupBy(e, ((t) => t.key));
}, ut = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), yt = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), gt = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && lt(n.value),
  isNumber: r.isNumber && dt(n.value),
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
  isMovie: r.isMovie && s.movies.has(n.value),
  isScript: r.isScript && ne(n.value)
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
  isMovie: !0,
  isScript: !0
}), ht = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(vt), ...a.map.events.map(ft).flat()]
}), ft = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), vt = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), xt = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), I = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(bt), bt = (a) => a.note.length > 0 || a.main.length > 0, Ia = (a, e) => {
  const t = kt(a.value.mainData, e), s = wt(a.value.mapFiles.validMaps, e);
  return { nonTextNoteKeys: t.nonTextNoteKeys, dataNoteSummary: t.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: a.errors,
    value: {
      mainData: t.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, Ma = (a, e) => {
  const t = (s) => e.has(s.key);
  return {
    actors: I(a.actors, t),
    enemies: I(a.enemies, t),
    weapons: I(a.weapons, t),
    armors: I(a.armors, t),
    skills: I(a.skills, t),
    states: I(a.states, t),
    items: I(a.items, t),
    classes: I(a.classes, t)
  };
}, Xs = (a, e) => {
  const t = Ea(a, e), s = U(t);
  return Ba(a, s);
}, Nt = (a, e) => {
  const t = Ca(a, e);
  return U(t);
}, Ys = (a, e) => {
  const t = Nt(a, e);
  return Ma(a, t);
}, Ba = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => xt(n, r)))
  }) };
  var s, r;
})), Ca = (a, e) => {
  const t = Tt(a);
  return Sa(t, e);
}, Tt = (a) => [M(ya, a.actors), M(ga, a.skills), M(ha, a.items), M(fa, a.weapons), M(va, a.armors), M(xa, a.classes), M(ba, a.states), M(Na, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ea = (a, e) => {
  const t = a.map(ht);
  return Sa(t, e);
}, kt = (a, e) => {
  const t = Ca(a, e), s = U(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ma(a, s)
  };
}, wt = (a, e) => {
  const t = Ea(a, e), s = U(t);
  return { noteSummary: t, validMaps: Ba(a, s) };
}, St = (a, e, t, s) => [{
  filename: e,
  id: 0,
  baseText: a.gameTitle,
  uuid: s(a.gameTitle),
  kind: t.gameTitle,
  dataKey: "gameTitle"
}, {
  filename: e,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Y(e, a.equipTypes, "equipTypes", t.equipTypes, s), ...Y(e, a.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Y(e, a.armorTypes, "armorTypes", t.armorTypes, s)], Y = (a, e, t, s, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = z(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Zs = (a, e, t, s, r, n) => {
  const m = ka(a.data, n), o = Ia(m, a);
  return Mt(a.data.actors.data, o, e, t, s, r);
}, It = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], Mt = (a, e, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = e.data.value;
  return {
    noteSummaries: It(e),
    pluginParams: [],
    map: Bt(i, r, n),
    commonEvents: mt(ve, m.commonEvents, r, n),
    troops: it(m.troops, xe, n, r),
    armors: B(o.armors, va, s, r),
    system: Et(d, r, t),
    actors: { texts: B(o.actors, ya, s, r), controlChars: me(a) },
    classes: B(o.classes, xa, s, r),
    enemies: B(o.enemies, Na, s, r),
    items: B(o.items, ha, s, r),
    skills: B(o.skills, ga, s, r),
    states: ze(o.states, ba, s, r),
    weapons: B(o.weapons, fa, s, r)
  };
}, Bt = (a, e, t) => a.validMaps.map(((s) => Ct(s, e, t))).flat(3), Ct = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = ct(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(wa).map(((c) => sa(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(s, a, e, t))), Et = (a, e, t) => a.system === null ? { gameTitle: "", filename: _, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: _,
  texts: St(a.system, _, t, e)
}, Qs = (a, e) => {
  const t = e.actorTextDictionary.get(a);
  return t ? e.textDictionary.get(t) ?? a : a;
}, Ws = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: e, value: t }) => [e, t]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), Dt = (a) => [{ data: a, filename: Te }], At = (a, e, t, s, r, n, m) => {
  const o = { hashText: m, newText: (i) => n.get(i) ?? i };
  return {
    textDictionary: $t(n, m),
    targetNoteKeys: Ft(r),
    actorTexts: Ee(a, e, t, s, o)
  };
}, $t = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s }))), Ft = (a) => {
  const e = U(a);
  return Array.from(e);
}, Da = (a, e, t) => a.filter(((s) => s.code === oa || s.code === ia || s.code === ca)).map(((s) => Kt(s, e, t))), Pt = { [ca]: "weapon", [oa]: "armor", [ia]: "item" }, Kt = (a, e, t) => {
  const s = oe(a) ? {
    direct: !1,
    variableId: a.parameters[3]
  } : { direct: !0, value: a.parameters[3] }, r = a.parameters[1] === ie ? e.gain : a.parameters[1] === ce ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? {
    includesEquip: a.parameters[4]
  } : {};
  return { itemKind: Pt[a.code], dataId: le(a), code: a.code, commandNameMZ: t(a.code), operation: r, ...n, ...s };
}, ar = (a, e, t) => ea(a.map, ((s, r, n) => ({
  ...Rt(s),
  commands: Da(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Rt = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? {
  pageCondition: { itemId: a.conditions.itemId }
} : {}, er = (a, e, t) => de(a, ((s, r, n) => ({ commands: Da(s.list, e, t), eventName: n.name, troopId: n.id, pageIndex: r }))), jt = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Aa = (a, e) => {
  const t = (o) => e.replaceText(o), s = C(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return { ...a, name: r, nickname: n, profile: m, note: s };
}, $a = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Fa = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Pa = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, A = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, Ka = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.message1, e), n = v(a.message2, e), m = v(a.message3, e), o = v(a.message4, e);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Ut = (a, e) => {
  switch (a.code) {
    case aa:
      return Lt(a, e);
    case R:
      return Vt(a, e);
    case F:
    case G:
    case L:
    case $:
      return _t(a, e);
    case q:
    case J:
    case V:
      return qt(a, e);
    default:
      return a;
  }
}, _t = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Lt = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return Me({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, qt = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Vt = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: R,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, tr = (a, e, t = `
`) => Jt(a, ((s) => e.get(s)), t), Jt = (a, e, t = `
`) => pe(a.note, ((s) => h(s.value, e)), t), sr = (a, e) => Ra(a, ((t) => jt(t, e))), Ra = (a, e) => ({
  params: Ht(a.params, ((t) => h(t, e))),
  messages: Ot(a.messages, ((t) => h(t, e))),
  basic: Gt(a.basic, ((t) => h(t, e))),
  commands: zt(a.commands, ((t) => h(t, e)))
}), Gt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], zt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Ht = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ot = (a, e) => ({
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
}), ja = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: P(a.elements, e),
  skillTypes: P(a.skillTypes, e),
  weaponTypes: P(a.weaponTypes, e),
  armorTypes: P(a.armorTypes, e),
  equipTypes: P(a.equipTypes, e),
  terms: Ra(a.terms, e)
}), P = (a, e) => a.map(((t) => h(t, e))), Ua = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class _a {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return Ua(this.joinCommandBodies());
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
class ra {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return Ua(this.bodies);
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
const H = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Xt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === G), ((m) => m.code === L)))(a, e);
  return Yt(s) ? new ra(L, s, t) : new _a(s, t);
}, Yt = (a) => a.parameters[0] === "選択肢ヘルプ", Zt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === aa), ((m) => m.code === F)))(a, e);
  return new ra(F, s, t);
}, Qt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === j), ((m) => m.code === la)))(a, e);
  return new _a(s, t);
}, Wt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === da), ((m) => m.code === $)))(a, e);
  return new ra($, s, t);
}, as = {
  [aa]: (a, e, t) => t.showMessage(Zt(a, e), e, a),
  [j]: (a, e, t) => t.script(Qt(a, e), e, a),
  [G]: (a, e, t) => t.comment(Xt(a, e), e, a),
  [da]: (a, e, t) => t.showScrollingText(Wt(a, e), e, a)
}, La = (a) => as[a], es = (a, e, t, s) => {
  if (a.code === F || a.code === $ || a.code === L) return;
  const r = La(a.code);
  return r ? r(t, e, s) : a.code === R ? ts(a) : a.code === q || a.code === J || a.code === V ? ss(a) : a.code !== la ? a : void 0;
}, ts = (a) => ({
  code: R,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), ss = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), rs = (a) => ({ code: j, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), ns = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: F,
    indent: a.header.indent,
    parameters: [e]
  };
  return [os(a.header), t];
}, ms = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: $, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, os = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, O = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: rs, showMessage: ns, showScrollingText: ms };
    return s.map(((n, m) => n.code === K ? n : es(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === K ? e.pluginCommand(s) : s.code === j ? e.scriptCommand(s) : Ut(s, t)));
}, qa = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: O(t.list, e) })))
}), Va = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: O(a.list, e)
}), rr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: O(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), nr = (a, e) => Ga(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Ja = (a, e) => Ga(a, e), Ga = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: O(n.list, r) }))) }))(t, e) : null)),
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
}), za = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Ha = (a, e) => ({ ...a, pages: a.pages.map(((t) => za(t, e))) }), mr = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Ha(t, e) : null))
}), or = (a, e) => a.map(((t) => za(t, e))), ir = (a, e) => a.map(((t) => Ha(t, e))), cr = (a) => Oa(a, (() => [])), X = (a, e) => Oa(a, e), Oa = (a, e) => a.flatMap(((t, s) => is(t, s, a, e))).filter(((t) => t !== null)), is = (a, e, t, s) => {
  if (a.code === K) return s(a);
  if (a.code === R) return Ce(a);
  const r = La(a.code);
  if (r) {
    const n = r(t, e, cs);
    if (n !== void 0) return [n];
  }
  return a.code === J || a.code === q || a.code === V ? Be(a) : null;
}, cs = {
  comment: (a) => ({ code: G, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return { code: F, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var e, t;
  },
  script: (a) => ((e) => ({ code: j, paramIndex: 0, value: e.getBodyText() }))(a),
  showScrollingText: (a) => ((e) => ({
    code: $,
    paramIndex: 0,
    value: e.getBodyText()
  }))(a)
}, ls = (a, e = () => []) => ({ eventId: a.id, name: a.name, commands: X(a.list, e) }), ds = (a, e = () => []) => a.pages.map(((t, s) => ({
  eventId: a.id,
  pageIndex: s,
  commands: X(t.list, e)
}))), ps = (a, e = () => []) => ({ note: a.note, noteItems: ua(a.note), displayedName: a.displayName, events: us(a, e) }), us = (a, e) => ea(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, e),
  note: r.note,
  noteItems: ua(r.note),
  name: r.name
}))), Xa = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Ya = (a) => a.kind === "struct", Za = (a) => a.attr.kind === "struct[]", ys = (a) => Qa[a.kind.replace("[]", "")].type === "number", gs = (a) => Qa[a.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Qa = {
  string: D,
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
  multiline_string: D,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": D,
  "string[]": D,
  combo: D,
  select: D,
  any: D,
  struct: { type: "struct" },
  "actor[]": x,
  "enemy[]": x,
  "class[]": x,
  "skill[]": x,
  "state[]": x,
  "item[]": x,
  "weapon[]": x,
  "common_event[]": x,
  "troop[]": x,
  "armor[]": x,
  "switch[]": x,
  "variable[]": x,
  "number[]": x
};
function hs(a) {
  return fs(a, ((e) => !0), ((e) => !0));
}
const fs = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Ya(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Za(o)) r.push(o);
    else if (Xa(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function vs(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const xs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, bs = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Wa = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ae(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
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
    const T = (function(y, u) {
      const g = y.ancestry.concat(y.schemaName), w = y.basePath;
      return [...u.structs.map(((S) => ({
        schemaName: S.attr.struct,
        basePath: `${w}["${S.name}"]`,
        ancestry: g
      }))), ...u.structArrays.map(((S) => ({ schemaName: S.attr.struct, basePath: `${w}["${S.name}"][*]`, ancestry: g })))].reverse();
    })(l, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const y = (function(u, { path: g, structName: w }) {
        return {
          category: "struct",
          objectSchema: vs(u.scalars),
          name: w,
          scalarArrays: bs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? xs(u.scalars, g) : void 0
        };
      })(p, { path: l.basePath, structName: l.schemaName });
      return f.push(...T), {
        frames: f,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return f.push(...T), { frames: f, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const Ns = (a, e, t, s = Wa) => ae(a.attr.struct, `${e}["${a.name}"]`, t, s), Ts = (a, e, t, s = Wa) => ae(a.attr.struct, `${e}["${a.name}"][*]`, t, s), ks = (a, e, t, s) => ((r) => Ya(r.attr))(t) ? Is(a, t, s) : Za(t) ? Ms(a, t, s) : Xa(t) ? ws(a, e, t) : Ss(a, e, t), ws = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ss = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Is = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ns(e, "$", t)
}), Ms = (a, e, t) => ({
  structArrays: Ts(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Bs = (a, e) => e.map(((t) => Cs(a, t))).flat(3), Cs = (a, e) => [e.top ? Z(e, a, e.top, "") : [], e.structs.map(((t) => Z(e, a, t))), e.structArrays.map(((t) => Z(e, a, t)))], Z = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, d, c) => d.pathSegments(i).map((({ value: l, segments: f }) => ((p, T, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const S = g[w];
    return S ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: y, param: { name: w, attr: S } } : null;
  })(m, o, l, f, c))).filter(((l) => l !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, d, c) => {
    const l = c.jsonPathJS.find(d);
    if (!Array.isArray(l)) return [];
    const f = c.schema.attr;
    return gs(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, l, i, c.schema) : ys(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, l, i, c.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, Q = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: ma(a.scalarArrays, a.name, e), scalar: Es(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: ma(a.scalarArrays, a.name, e)
}, ma = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), Es = (a, e, t) => ({ jsonPathJS: t(a), record: e }), Ds = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: As(e, t, s)
}), As = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? Q(r.scalars, n) : void 0, o = r.structs.items.map(((d) => Q(d, n))), i = r.structArrays.items.map(((d) => Q(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(ks("args", a.command, s, e), t))), $s = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, hs(r.params)]))))(a.schema.structs);
  return Fs(a.pluginName, a.schema.commands, t, e);
}, Fs = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, Ds(a, r, t, s)])), Ps = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Bs(m, o.extractors) }))(Ne(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, lr = (a) => {
  const e = new Map(a);
  return new na(e);
}, dr = () => new na(/* @__PURE__ */ new Map()), pr = (a) => {
  const e = a.flatMap(((t) => $s(t, ((s) => new be(s)))));
  return new na(new Map(e));
};
class na {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return ps(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return ds(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return ls(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Ps(e, this._commandMap);
    return t.args.filter(Ks).map(((s) => ({
      code: K,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return X(e, ((t) => this.extractArgs(t)));
  }
}
const Ks = (a) => typeof a.value == "string", ur = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), W = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), yr = (a) => [W(a, "faceName", "faces"), W(a, "characterName", "characters"), W(a, "battlerName", "sv_actors")], gr = (a, e, t, s, r, n) => [...ue(t, s), ...ye(a, e), ...ge(r, n)], hr = (a, e) => pa(fe(e), a), fr = (a, e, t) => {
  const s = he(e);
  return pa(t ? [...s, ...t] : s, a);
}, Rs = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => Aa(t, e))),
  armors: k(a.armors, ((t) => A(t, e))),
  classes: k(a.classes, ((t) => Fa(t, e))),
  commonEvents: k(a.commonEvents, ((t) => Va(t, e))),
  enemies: k(a.enemies, ((t) => $a(t, e))),
  items: k(a.items, ((t) => A(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => Pa(t, e))),
  states: k(a.states, ((t) => Ka(t, e))),
  system: { message: a.system.message, system: a.system.system ? ja(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((t) => qa(t, e))),
  weapons: k(a.weapons, ((t) => A(t, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: Ja(t.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), ee = (a, e, t, s) => {
  const r = ka(a, t), n = Ia(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = js(n.nonTextNoteKeys, s);
  return { data: Rs(a, m), note: n };
}, js = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), vr = (a, e) => Ja(a, {
  replaceText: (t) => e.textDictionary.get(t),
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  isReplaceTargetNote: (t) => e.targetNoteKeys.has(t.key)
}), xr = (a, e) => {
  const t = {
    replaceText: (s) => e.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.targetNoteKeys.has(s.key)
  };
  return {
    actors: a.actors.map(((s) => Aa(s, t))),
    armors: a.armors.map(((s) => A(s, t))),
    classes: a.classes.map(((s) => Fa(s, t))),
    enemies: a.enemies.map(((s) => $a(s, t))),
    items: a.items.map(((s) => A(s, t))),
    skills: a.skills.map(((s) => Pa(s, t))),
    states: a.states.map(((s) => Ka(s, t))),
    troops: a.troops.map(((s) => qa(s, t))),
    weapons: a.weapons.map(((s) => A(s, t))),
    system: ja(a.system, ((s) => e.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => Va(s, t)))
  };
}, br = (a, e) => {
  const t = Us(a, e);
  return Ta(t);
}, Us = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r) => ee(e, a, r, {
  replaceText: (n) => t.get(n),
  pluginCommand: (n) => n,
  scriptCommand: (n) => n,
  isReplaceTargetNote: (n) => s.has(n.key)
}).data, Nr = (a, e, t) => {
  const s = _s(a, e, t);
  return [...Ta(s.main), ...Dt(s.aux)];
}, _s = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r, n) => {
  const m = ee(e, a, r, {
    replaceText: (o) => n(o),
    pluginCommand: (o) => o,
    scriptCommand: (o) => o,
    isReplaceTargetNote: (o) => s.has(o.key)
  });
  return {
    main: m.data,
    aux: At(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((o) => o.map)), m.note.dataNoteSummary, t, n)
  };
};
export {
  rr as $,
  E as A,
  je as B,
  Be as C,
  Je as D,
  _e as E,
  Ue as F,
  cr as G,
  X as H,
  qe as I,
  ka as J,
  Le as K,
  Ge as L,
  Xe as M,
  Ve as N,
  Ce as O,
  Dt as P,
  Qs as Q,
  lt as R,
  dt as S,
  Nt as T,
  Ys as U,
  Xs as V,
  Aa as W,
  A as X,
  Ut as Y,
  Fa as Z,
  Va as _,
  Ia as a,
  or as a0,
  Us as a1,
  br as a2,
  _s as a3,
  Nr as a4,
  $a as a5,
  O as a6,
  za as a7,
  Ja as a8,
  mr as a9,
  nr as aa,
  Jt as ab,
  tr as ac,
  Ha as ad,
  Rs as ae,
  ee as af,
  xr as ag,
  vr as ah,
  Pa as ai,
  Ka as aj,
  sr as ak,
  ja as al,
  jt as am,
  qa as an,
  ir as ao,
  U as ap,
  Sa as aq,
  Ea as ar,
  Zs as b,
  gr as c,
  Ws as d,
  fr as e,
  hr as f,
  He as g,
  B as h,
  ze as i,
  Ee as j,
  At as k,
  dr as l,
  lr as m,
  pr as n,
  De as o,
  ds as p,
  ls as q,
  yr as r,
  ur as s,
  Kt as t,
  Da as u,
  ar as v,
  er as w,
  ps as x,
  Re as y,
  Ps as z
};
