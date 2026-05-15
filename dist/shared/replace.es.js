import { as as P, b as ia, q as ca, N as la, v as L, E as _, w as q, aS as $, P as U, Q as V, aP as D, aM as j, aO as ea, az as da, ay as R, aR as pa } from "./makeAudio.es.js";
import { n as J, m as ua } from "./normalText.es.js";
import { aZ as Ya, aU as Xa, av as Za, aV as Qa, ba as Wa, bb as ae, aO as ee, b3 as C, b2 as te, aY as ya, aD as se, az as re, aA as ne, b4 as me, b5 as oe } from "./namedItems.es.js";
import { l as K, a as ga, i as ha, f as fa, c as va, e as xa, d as ba, j as Ta, b as Na, h as ie, g as ce } from "./constants.es.js";
import { JSONPathJS as le } from "jsonpath-js";
import { parseDeepRecord as de } from "@sigureya/rmmz-plugin-schema";
import { k as pe, v as ue, u as ye, r as ge, a as he } from "./makeSystem.es.js";
import { r as ka, F as fe, a as ve } from "./writeData.es.js";
const xe = (a) => ((e, t) => ({ code: e.code, paramIndex: t, value: e.parameters[t] }))(a, 1), be = (a) => a.parameters[0].map(((e, t) => ({
  code: 102,
  paramIndex: t,
  value: e
}))), E = (a, e) => ({ id: a.id, name: a.name, note: Te(a), main: e.map(((t) => ({ key: t, value: a[t], id: a.id }))) }), Te = (a) => Ya(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Ne = (a) => E(a, ["name", "nickname", "profile"]), ke = (a) => E(a, ["name"]), we = (a) => E(a, ["name"]), Ie = (a) => E(a, ["name", "description", "message1", "message2"]), Se = (a) => E(a, ["name", "description"]), Me = (a) => E(a, ["name", "description"]), Be = (a) => E(a, ["name", "description"]), Ce = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), Ee = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => Ae(r, e, t, s))), Ae = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = J(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: $e(a.note, e, t, s) }), $e = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), De = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: ge(a.terms.basic),
  commands: ye(a.terms.commands),
  messages: ue(a.terms.messages),
  params: pe(a.terms.params)
} }), wa = (a, e) => {
  const t = T(a.actors, Ne), s = Re(a.armors), r = T(a.classes, we), n = T(a.enemies, ke), m = T(a.items, Se), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, Ie), c = T(a.states, Ce), l = T(a.weapons, Me), d = Ke(a.commonEvents, e), f = Ue(a.troops, e), p = Le(a.mapFiles, e), N = Fe(a.system), y = Pe([t, s, r, n, m, o, i, c, l, f, d]).concat(je(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: d.data, troops: f.data.flat() }, mapFiles: p, system: N, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: y };
}, Fe = (a) => ({ message: a.message, system: a.system ? De(a.system) : null }), T = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), Pe = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), je = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: K,
  error: e.message
}] : []], Re = (a) => T(a, Be), Ke = (a, e) => T(a, ((t) => e.extractCommonEventText(t))), Ue = (a, e) => T(a, ((t) => e.extractBattleText(t))), Le = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ta = (a, e, t, s, r, n) => {
  if (a.code === P) return qe(a, e, t, r, n);
  const m = J(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: _e(a) };
}, _e = (a) => `code:${a.code}`, qe = (a, e, t, s, r) => {
  const n = J(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: s(n),
    kind: `${Ve(a)}`,
    baseText: n,
    filename: t,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Ve = (a) => `${a.commandName}.${a.argTitle}`, Je = (a, e, t, s) => e.flatMap(((r) => ze(a, r, t, s))), ze = (a, e, t, s) => e.commands.filter(Ia).map(((r) => ta(r, e.eventId, a, s, t, [e.name]))), Ge = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ta(m, r.eventId, e, t, s, [n])));
})), Ia = (a) => a.value.length > 0, Oe = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, He = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ye = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, z = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, Sa = (a, e) => {
  const t = Xe(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = We(r, e);
    return {
      key: s,
      kinds: Qe(n),
      values: r.map(Ze)
    };
  }));
}, Xe = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: s.name, soruce: t.source })))));
  return Map.groupBy(e, ((t) => t.key));
}, Ze = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), Qe = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), We = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && He(n.value),
  isNumber: r.isNumber && Ye(n.value),
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
  isScript: r.isScript && Xa(n.value)
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
}), at = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(tt), ...a.map.events.map(et).flat()]
}), et = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), tt = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), st = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(rt), rt = (a) => a.note.length > 0 || a.main.length > 0, Ma = (a, e) => {
  const t = ot(a.value.mainData, e), s = it(a.value.mapFiles.validMaps, e);
  return { nonTextNoteKeys: t.nonTextNoteKeys, dataNoteSummary: t.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: a.errors,
    value: {
      mainData: t.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, Ba = (a, e) => {
  const t = (s) => e.has(s.key);
  return {
    actors: S(a.actors, t),
    enemies: S(a.enemies, t),
    weapons: S(a.weapons, t),
    armors: S(a.armors, t),
    skills: S(a.skills, t),
    states: S(a.states, t),
    items: S(a.items, t),
    classes: S(a.classes, t)
  };
}, Ws = (a, e) => {
  const t = Aa(a, e), s = z(t);
  return Ca(a, s);
}, nt = (a, e) => {
  const t = Ea(a, e);
  return z(t);
}, ar = (a, e) => {
  const t = nt(a, e);
  return Ba(a, t);
}, Ca = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => st(n, r)))
  }) };
  var s, r;
})), Ea = (a, e) => {
  const t = mt(a);
  return Sa(t, e);
}, mt = (a) => [M(ga, a.actors), M(ha, a.skills), M(fa, a.items), M(va, a.weapons), M(xa, a.armors), M(ba, a.classes), M(Ta, a.states), M(Na, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Aa = (a, e) => {
  const t = a.map(at);
  return Sa(t, e);
}, ot = (a, e) => {
  const t = Ea(a, e), s = z(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ba(a, s)
  };
}, it = (a, e) => {
  const t = Aa(a, e), s = z(t);
  return { noteSummary: t, validMaps: Ca(a, s) };
}, ct = (a, e, t, s) => [{
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
}, ...X(e, a.equipTypes, "equipTypes", t.equipTypes, s), ...X(e, a.weaponTypes, "weaponTypes", t.weaponTypes, s), ...X(e, a.armorTypes, "armorTypes", t.armorTypes, s)], X = (a, e, t, s, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = J(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), er = (a, e, t, s, r, n) => {
  const m = wa(a.data, n), o = Ma(m, a);
  return dt(a.data.actors.data, o, e, t, s, r);
}, lt = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], dt = (a, e, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: c } = e.data.value;
  return {
    noteSummaries: lt(e),
    pluginParams: [],
    map: pt(i, r, n),
    commonEvents: Je(ie, m.commonEvents, r, n),
    troops: Ge(m.troops, ce, n, r),
    armors: B(o.armors, xa, s, r),
    system: yt(c, r, t),
    actors: { texts: B(o.actors, ga, s, r), controlChars: Za(a) },
    classes: B(o.classes, ba, s, r),
    enemies: B(o.enemies, Na, s, r),
    items: B(o.items, fa, s, r),
    skills: B(o.skills, ha, s, r),
    states: Ee(o.states, Ta, s, r),
    weapons: B(o.weapons, va, s, r)
  };
}, pt = (a, e, t) => a.validMaps.map(((s) => ut(s, e, t))).flat(3), ut = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = Oe(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => ta(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, e, t))), yt = (a, e, t) => a.system === null ? { gameTitle: "", filename: K, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: K,
  texts: ct(a.system, K, t, e)
}, $a = (a, e, t) => a.filter(((s) => s.code === ia || s.code === ca || s.code === la)).map(((s) => ht(s, e, t))), gt = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, ht = (a, e, t) => {
  const s = Qa(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === Wa ? e.gain : a.parameters[1] === ae ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: gt[a.code],
    dataId: ee(a),
    code: a.code,
    commandNameMZ: t(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Da = (a) => !!a, tr = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), ft = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), G = (a, e) => a.pages.map(((t, s) => e(t, s, a))), vt = (a, e) => a.events.filter(Da).map(((t) => G(t, e))), sa = (a, e) => a.events.filter(Da).flatMap(((t) => G(t, e))), xt = (a, e) => a.map(((t) => G(t, e))), bt = (a, e) => a.flatMap(((t) => G(t, e))), Tt = (a, e) => a.map(((t) => e(t, 0, t))), sr = (a) => vt(a, ft).flat(2), Nt = (a, e, t, s, r) => {
  const n = kt(a, e, t, s), m = Array.from(n).map(((i) => ({ key: r.hashText(i), value: i }))), o = m.map(((i) => {
    const c = r.newText(i.value);
    return { key: r.hashText(c), value: c };
  }));
  return [...m, ...o];
}, kt = (a, e, t, s) => {
  const r = wt(a), n = s.map(It), m = St(e), o = Mt(t);
  return new Set([r, m, o, n].flat(4));
}, wt = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), It = (a) => sa(a, ra), St = (a) => Tt(a, ra), Mt = (a) => xt(a, ra), ra = ({ list: a }) => a.filter(Bt).map(((e) => e.parameters[1])), Bt = (a) => a.code === L || a.code === _ || a.code === q, Fa = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Pa = (a, e) => ({ ...a, pages: a.pages.map(((t) => Fa(t, e))) }), rr = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Pa(t, e) : null))
}), nr = (a, e) => a.map(((t) => Fa(t, e))), mr = (a, e) => a.map(((t) => Pa(t, e))), or = (a, e, t) => sa(a.map, ((s, r, n) => ({
  ...Ct(s),
  commands: $a(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Ct = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, ir = (a, e, t) => bt(a, ((s, r, n) => ({
  commands: $a(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Et = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, At = (a, e) => {
  const t = (o) => e.replaceText(o), s = C(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, $t = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Dt = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, Ft = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, Z = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, Pt = (a, e) => {
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
}, jt = (a, e) => {
  switch (a.code) {
    case ea:
      return Kt(a, e);
    case j:
      return Lt(a, e);
    case D:
    case V:
    case U:
    case $:
      return Rt(a, e);
    case L:
    case q:
    case _:
      return Ut(a, e);
    default:
      return a;
  }
}, Rt = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Kt = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return he({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Ut = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Lt = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, cr = (a, e, t = `
`) => _t(a, ((s) => e.get(s)), t), _t = (a, e, t = `
`) => te(a.note, ((s) => h(s.value, e)), t), lr = (a, e) => ja(a, ((t) => Et(t, e))), ja = (a, e) => ({
  params: Jt(a.params, ((t) => h(t, e))),
  messages: zt(a.messages, ((t) => h(t, e))),
  basic: qt(a.basic, ((t) => h(t, e))),
  commands: Vt(a.commands, ((t) => h(t, e)))
}), qt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Vt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Jt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], zt = (a, e) => ({
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
}), Gt = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: F(a.elements, e),
  skillTypes: F(a.skillTypes, e),
  weaponTypes: F(a.weaponTypes, e),
  armorTypes: F(a.armorTypes, e),
  equipTypes: F(a.equipTypes, e),
  terms: ja(a.terms, e)
}), F = (a, e) => a.map(((t) => h(t, e))), Ra = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ka {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return Ra(this.joinCommandBodies());
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
class na {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return Ra(this.bodies);
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
const O = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Ot = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === V), ((m) => m.code === U)))(a, e);
  return Ht(s) ? new na(U, s, t) : new Ka(s, t);
}, Ht = (a) => a.parameters[0] === "選択肢ヘルプ", Yt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === ea), ((m) => m.code === D)))(a, e);
  return new na(D, s, t);
}, Xt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === R), ((m) => m.code === da)))(a, e);
  return new Ka(s, t);
}, Zt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === pa), ((m) => m.code === $)))(a, e);
  return new na($, s, t);
}, Qt = {
  [ea]: (a, e, t) => t.showMessage(Yt(a, e), e, a),
  [R]: (a, e, t) => t.script(Xt(a, e), e, a),
  [V]: (a, e, t) => t.comment(Ot(a, e), e, a),
  [pa]: (a, e, t) => t.showScrollingText(Zt(a, e), e, a)
}, Ua = (a) => Qt[a], Wt = (a, e, t, s) => {
  if (a.code === D || a.code === $ || a.code === U) return;
  const r = Ua(a.code);
  return r ? r(t, e, s) : a.code === j ? as(a) : a.code === L || a.code === q || a.code === _ ? es(a) : a.code !== da ? a : void 0;
}, as = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), es = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ts = (a) => ({ code: R, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), ss = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: D,
    indent: a.header.indent,
    parameters: [e]
  };
  return [ns(a.header), t];
}, rs = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: $, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, ns = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, H = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ts, showMessage: ss, showScrollingText: rs };
    return s.map(((n, m) => n.code === P ? n : Wt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === P ? e.pluginCommand(s) : s.code === R ? e.scriptCommand(s) : jt(s, t)));
}, ms = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: H(t.list, e) })))
}), os = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, e)
}), dr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), pr = (a, e) => La(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), is = (a, e) => La(a, e), La = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: H(n.list, r) }))) }))(t, e) : null)),
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
}), ur = (a) => _a(a, (() => [])), Y = (a, e) => _a(a, e), _a = (a, e) => a.flatMap(((t, s) => cs(t, s, a, e))).filter(((t) => t !== null)), cs = (a, e, t, s) => {
  if (a.code === P) return s(a);
  if (a.code === j) return be(a);
  const r = Ua(a.code);
  if (r) {
    const n = r(t, e, ls);
    if (n !== void 0) return [n];
  }
  return a.code === q || a.code === L || a.code === _ ? xe(a) : null;
}, ls = { comment: (a) => ({
  code: V,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: D, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({
  code: R,
  paramIndex: 0,
  value: e.getBodyText()
}))(a), showScrollingText: (a) => ((e) => ({ code: $, paramIndex: 0, value: e.getBodyText() }))(a) }, ds = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, e)
}), ps = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: Y(t.list, e) }))), us = (a, e = () => []) => ({
  note: a.note,
  noteItems: ya(a.note),
  displayedName: a.displayName,
  events: ys(a, e)
}), ys = (a, e) => sa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(t.list, e),
  note: r.note,
  noteItems: ya(r.note),
  name: r.name
}))), qa = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Va = (a) => a.kind === "struct", Ja = (a) => a.attr.kind === "struct[]", gs = (a) => za[a.kind.replace("[]", "")].type === "number", hs = (a) => za[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, za = {
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
function fs(a) {
  return vs(a, ((e) => !0), ((e) => !0));
}
const vs = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Va(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Ja(o)) r.push(o);
    else if (qa(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function xs(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const bs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, Ts = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Ga = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Oa(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, c, l) {
    if (i.frames.length === 0) return i;
    const d = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (d.ancestry.includes(d.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: l.cyclicStruct, path: d.basePath }] };
    const p = c.get(d.schemaName);
    if (!p) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: l.undefinedStruct, path: d.basePath }]
    };
    const N = (function(y, u) {
      const g = y.ancestry.concat(y.schemaName), w = y.basePath;
      return [...u.structs.map(((I) => ({
        schemaName: I.attr.struct,
        basePath: `${w}["${I.name}"]`,
        ancestry: g
      }))), ...u.structArrays.map(((I) => ({ schemaName: I.attr.struct, basePath: `${w}["${I.name}"][*]`, ancestry: g })))].reverse();
    })(d, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const y = (function(u, { path: g, structName: w }) {
        return {
          category: "struct",
          objectSchema: xs(u.scalars),
          name: w,
          scalarArrays: Ts(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? bs(u.scalars, g) : void 0
        };
      })(p, { path: d.basePath, structName: d.schemaName });
      return f.push(...N), {
        frames: f,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return f.push(...N), { frames: f, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const Ns = (a, e, t, s = Ga) => Oa(a.attr.struct, `${e}["${a.name}"]`, t, s), ks = (a, e, t, s = Ga) => Oa(a.attr.struct, `${e}["${a.name}"][*]`, t, s), ws = (a, e, t, s) => ((r) => Va(r.attr))(t) ? Ms(a, t, s) : Ja(t) ? Bs(a, t, s) : qa(t) ? Is(a, e, t) : Ss(a, e, t), Is = (a, e, t) => ({
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
}, structs: { items: [], errors: [] } }), Ms = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ns(e, "$", t)
}), Bs = (a, e, t) => ({
  structArrays: ks(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Cs = (a, e) => e.map(((t) => Es(a, t))).flat(3), Es = (a, e) => [e.top ? Q(e, a, e.top, "") : [], e.structs.map(((t) => Q(e, a, t))), e.structArrays.map(((t) => Q(e, a, t)))], Q = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: f }) => ((p, N, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: p.rootName, rootType: p.rootCategory, structName: N, value: y, param: { name: w, attr: I } } : null;
  })(m, o, d, f, l))).filter(((d) => d !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const f = l.schema.attr;
    return hs(f) ? ((p, N, y, u) => N.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, d, i, l.schema) : gs(f) ? ((p, N, y, u) => N.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, d, i, l.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, W = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: oa(a.scalarArrays, a.name, e), scalar: As(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: oa(a.scalarArrays, a.name, e)
}, oa = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), As = (a, e, t) => ({ jsonPathJS: t(a), record: e }), $s = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ds(e, t, s)
}), Ds = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? W(r.scalars, n) : void 0, o = r.structs.items.map(((c) => W(c, n))), i = r.structArrays.items.map(((c) => W(c, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(ws("args", a.command, s, e), t))), Fs = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, fs(r.params)]))))(a.schema.structs);
  return Ps(a.pluginName, a.schema.commands, t, e);
}, Ps = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, $s(a, r, t, s)])), js = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Cs(m, o.extractors) }))(de(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, yr = (a) => {
  const e = new Map(a);
  return new ma(e);
}, gr = () => new ma(/* @__PURE__ */ new Map()), hr = (a) => {
  const e = a.flatMap(((t) => Fs(t, ((s) => new le(s)))));
  return new ma(new Map(e));
};
class ma {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return us(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return ps(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return ds(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = js(e, this._commandMap);
    return t.args.filter(Rs).map(((s) => ({
      code: P,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(e) {
    return Y(e, ((t) => this.extractArgs(t)));
  }
}
const Rs = (a) => typeof a.value == "string", fr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), vr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], xr = (a, e, t, s, r, n) => [...se(t, s), ...re(a, e), ...ne(r, n)], br = (a, e) => ua(oe(e), a), Tr = (a, e, t) => {
  const s = me(e);
  return ua(t ? [...s, ...t] : s, a);
}, Ks = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => At(t, e))),
  armors: k(a.armors, ((t) => Z(t, e))),
  classes: k(a.classes, ((t) => Dt(t, e))),
  commonEvents: k(a.commonEvents, ((t) => os(t, e))),
  enemies: k(a.enemies, ((t) => $t(t, e))),
  items: k(a.items, ((t) => Z(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => Ft(t, e))),
  states: k(a.states, ((t) => Pt(t, e))),
  system: { message: a.system.message, system: a.system.system ? Gt(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((t) => ms(t, e))),
  weapons: k(a.weapons, ((t) => Z(t, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: is(t.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), Ha = (a, e, t, s) => {
  const r = wa(a, t), n = Ma(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = Us(n.nonTextNoteKeys, s);
  return Ks(a, m);
}, Us = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), Nr = (a, e) => {
  const t = Ls(a, e);
  return ka(t);
}, Ls = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r) => Ha(e, a, r, {
  replaceText: (n) => t.get(n),
  pluginCommand: (n) => n,
  scriptCommand: (n) => n,
  isReplaceTargetNote: (n) => s.has(n.key)
}), kr = (a, e, t) => {
  const s = qs(a, e, t);
  return [...ka(s.main), ..._s(s.aux)];
}, _s = (a) => [{ data: a.actorTextDictionary, filename: fe }, {
  data: a.newTextDictionary,
  filename: ve
}], qs = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r, n) => ({ main: Ha(e, a, r, {
  replaceText: (m) => n(m),
  pluginCommand: (m) => m,
  scriptCommand: (m) => m,
  isReplaceTargetNote: (m) => s.has(m.key)
}), aux: { actorTextDictionary: Vs(e, t, n), newTextDictionary: Js(t, n) } }), Vs = (a, e, t) => Nt(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((s) => s.map)), {
  newText: (s) => e.get(s) ?? s,
  hashText: (s) => t(s)
}), Js = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s })));
export {
  At as $,
  Te as A,
  js as B,
  E as C,
  Ne as D,
  xe as E,
  Be as F,
  we as G,
  ke as H,
  ur as I,
  Y as J,
  Se as K,
  wa as L,
  Ie as M,
  Ce as N,
  De as O,
  Me as P,
  be as Q,
  sr as R,
  He as S,
  Ye as T,
  nt as U,
  ar as V,
  Ws as W,
  Tt as X,
  G as Y,
  vt as Z,
  xt as _,
  Ma as a,
  Z as a0,
  jt as a1,
  Dt as a2,
  os as a3,
  dr as a4,
  nr as a5,
  Ls as a6,
  Nr as a7,
  qs as a8,
  kr as a9,
  $t as aa,
  H as ab,
  Fa as ac,
  is as ad,
  rr as ae,
  pr as af,
  _t as ag,
  cr as ah,
  Pa as ai,
  Ks as aj,
  Ha as ak,
  Ft as al,
  Pt as am,
  lr as an,
  Gt as ao,
  Et as ap,
  ms as aq,
  mr as ar,
  z as as,
  Sa as at,
  Aa as au,
  er as b,
  xr as c,
  sa as d,
  Tr as e,
  br as f,
  Ae as g,
  B as h,
  Ee as i,
  bt as j,
  Nt as k,
  ft as l,
  tr as m,
  gr as n,
  yr as o,
  hr as p,
  kt as q,
  ps as r,
  ds as s,
  vr as t,
  fr as u,
  ht as v,
  $a as w,
  or as x,
  ir as y,
  us as z
};
