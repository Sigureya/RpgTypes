import { as as P, b as ia, q as ca, N as la, v as L, E as _, w as q, aS as $, P as U, Q as V, aP as D, aM as j, aO as ea, az as da, ay as R, aR as pa } from "./eventCommandCodes.es.js";
import { n as J, m as ua } from "./normalText.es.js";
import { aZ as Ha, aU as Ya, av as Xa, aV as Za, ba as Wa, bb as Qa, aO as ae, b3 as C, b2 as ee, aY as ya, aD as te, az as se, aA as re, b4 as ne, b5 as me } from "./namedItems.es.js";
import { l as K, a as ga, i as ha, f as fa, c as va, e as xa, d as ba, j as Na, b as Ta, h as oe, g as ie } from "./system.es.js";
import { JSONPathJS as ce } from "jsonpath-js";
import { parseDeepRecord as le } from "@sigureya/rmmz-plugin-schema";
import { m as de } from "./make.es.js";
import { t as pe, F as ue, E as ye, B as ge } from "./makeSystemEx.es.js";
const he = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), fe = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), E = (a, e) => ({
  id: a.id,
  name: a.name,
  note: ve(a),
  main: e.map(((t) => ({ key: t, value: a[t], id: a.id })))
}), ve = (a) => Ha(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), xe = (a) => E(a, ["name", "nickname", "profile"]), be = (a) => E(a, ["name"]), Ne = (a) => E(a, ["name"]), Te = (a) => E(a, ["name", "description", "message1", "message2"]), ke = (a) => E(a, ["name", "description"]), Ie = (a) => E(a, ["name", "description"]), we = (a) => E(a, ["name", "description"]), Se = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), Me = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => Be(r, e, t, s))), Be = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = J(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: Ce(a.note, e, t, s) }), Ce = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Ee = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: ge(a.terms.basic),
  commands: ye(a.terms.commands),
  messages: ue(a.terms.messages),
  params: pe(a.terms.params)
} }), ka = (a, e) => {
  const t = N(a.actors, xe), s = Fe(a.armors), r = N(a.classes, Ne), n = N(a.enemies, be), m = N(a.items, ke), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, Te), c = N(a.states, Se), l = N(a.weapons, Ie), d = Pe(a.commonEvents, e), f = je(a.troops, e), p = Re(a.mapFiles, e), T = Ae(a.system), y = $e([t, s, r, n, m, o, i, c, l, f, d]).concat(De(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: d.data, troops: f.data.flat() }, mapFiles: p, system: T, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: y };
}, Ae = (a) => ({ message: a.message, system: a.system ? Ee(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), $e = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), De = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: K,
  error: e.message
}] : []], Fe = (a) => N(a, we), Pe = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), je = (a, e) => N(a, ((t) => e.extractBattleText(t))), Re = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ta = (a, e, t, s, r, n) => {
  if (a.code === P) return Ue(a, e, t, r, n);
  const m = J(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: Ke(a) };
}, Ke = (a) => `code:${a.code}`, Ue = (a, e, t, s, r) => {
  const n = J(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: s(n),
    kind: `${Le(a)}`,
    baseText: n,
    filename: t,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Le = (a) => `${a.commandName}.${a.argTitle}`, _e = (a, e, t, s) => e.flatMap(((r) => qe(a, r, t, s))), qe = (a, e, t, s) => e.commands.filter(Ia).map(((r) => ta(r, e.eventId, a, s, t, [e.name]))), Ve = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ta(m, r.eventId, e, t, s, [n])));
})), Ia = (a) => a.value.length > 0, Je = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, ze = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ge = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, z = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, wa = (a, e) => {
  const t = Oe(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = Xe(r, e);
    return {
      key: s,
      kinds: Ye(n),
      values: r.map(He)
    };
  }));
}, Oe = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: s.name, soruce: t.source })))));
  return Map.groupBy(e, ((t) => t.key));
}, He = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), Ye = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), Xe = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ze(n.value),
  isNumber: r.isNumber && Ge(n.value),
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
  isScript: r.isScript && Ya(n.value)
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
}), Ze = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Qe), ...a.map.events.map(We).flat()]
}), We = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), Qe = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), at = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(et), et = (a) => a.note.length > 0 || a.main.length > 0, Sa = (a, e) => {
  const t = rt(a.value.mainData, e), s = nt(a.value.mapFiles.validMaps, e);
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
    actors: S(a.actors, t),
    enemies: S(a.enemies, t),
    weapons: S(a.weapons, t),
    armors: S(a.armors, t),
    skills: S(a.skills, t),
    states: S(a.states, t),
    items: S(a.items, t),
    classes: S(a.classes, t)
  };
}, Os = (a, e) => {
  const t = Ea(a, e), s = z(t);
  return Ba(a, s);
}, tt = (a, e) => {
  const t = Ca(a, e);
  return z(t);
}, Hs = (a, e) => {
  const t = tt(a, e);
  return Ma(a, t);
}, Ba = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => at(n, r)))
  }) };
  var s, r;
})), Ca = (a, e) => {
  const t = st(a);
  return wa(t, e);
}, st = (a) => [M(ga, a.actors), M(ha, a.skills), M(fa, a.items), M(va, a.weapons), M(xa, a.armors), M(ba, a.classes), M(Na, a.states), M(Ta, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ea = (a, e) => {
  const t = a.map(Ze);
  return wa(t, e);
}, rt = (a, e) => {
  const t = Ca(a, e), s = z(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ma(a, s)
  };
}, nt = (a, e) => {
  const t = Ea(a, e), s = z(t);
  return { noteSummary: t, validMaps: Ba(a, s) };
}, mt = (a, e, t, s) => [{
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
})), Ys = (a, e, t, s, r, n) => {
  const m = ka(a.data, n), o = Sa(m, a);
  return it(a.data.actors.data, o, e, t, s, r);
}, ot = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], it = (a, e, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: c } = e.data.value;
  return {
    noteSummaries: ot(e),
    pluginParams: [],
    map: ct(i, r, n),
    commonEvents: _e(oe, m.commonEvents, r, n),
    troops: Ve(m.troops, ie, n, r),
    armors: B(o.armors, xa, s, r),
    system: dt(c, r, t),
    actors: { texts: B(o.actors, ga, s, r), controlChars: Xa(a) },
    classes: B(o.classes, ba, s, r),
    enemies: B(o.enemies, Ta, s, r),
    items: B(o.items, fa, s, r),
    skills: B(o.skills, ha, s, r),
    states: Me(o.states, Na, s, r),
    weapons: B(o.weapons, va, s, r)
  };
}, ct = (a, e, t) => a.validMaps.map(((s) => lt(s, e, t))).flat(3), lt = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = Je(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => ta(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, e, t))), dt = (a, e, t) => a.system === null ? { gameTitle: "", filename: K, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: K,
  texts: mt(a.system, K, t, e)
}, Aa = (a, e, t) => a.filter(((s) => s.code === ia || s.code === ca || s.code === la)).map(((s) => ut(s, e, t))), pt = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, ut = (a, e, t) => {
  const s = Za(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === Wa ? e.gain : a.parameters[1] === Qa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: pt[a.code],
    dataId: ae(a),
    code: a.code,
    commandNameMZ: t(a.code),
    operation: r,
    ...n,
    ...s
  };
}, $a = (a) => !!a, Xs = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), yt = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), G = (a, e) => a.pages.map(((t, s) => e(t, s, a))), gt = (a, e) => a.events.filter($a).map(((t) => G(t, e))), sa = (a, e) => a.events.filter($a).flatMap(((t) => G(t, e))), ht = (a, e) => a.map(((t) => G(t, e))), ft = (a, e) => a.flatMap(((t) => G(t, e))), vt = (a, e) => a.map(((t) => e(t, 0, t))), Zs = (a) => gt(a, yt).flat(2), xt = (a, e, t, s, r) => {
  const n = bt(a, e, t, s), m = Array.from(n).map(((i) => ({ key: r.hashText(i), value: i }))), o = m.map(((i) => {
    const c = r.newText(i.value);
    return { key: r.hashText(c), value: c };
  }));
  return [...m, ...o];
}, bt = (a, e, t, s) => {
  const r = Nt(a), n = s.map(Tt), m = kt(e), o = It(t);
  return new Set([r, m, o, n].flat(4));
}, Nt = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), Tt = (a) => sa(a, ra), kt = (a) => vt(a, ra), It = (a) => ht(a, ra), ra = ({ list: a }) => a.filter(wt).map(((e) => e.parameters[1])), wt = (a) => a.code === L || a.code === _ || a.code === q, Da = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Fa = (a, e) => ({ ...a, pages: a.pages.map(((t) => Da(t, e))) }), Ws = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Fa(t, e) : null))
}), Qs = (a, e) => a.map(((t) => Da(t, e))), ar = (a, e) => a.map(((t) => Fa(t, e))), er = (a, e, t) => sa(a.map, ((s, r, n) => ({
  ...St(s),
  commands: Aa(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), St = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, tr = (a, e, t) => ft(a, ((s, r, n) => ({
  commands: Aa(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Mt = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Bt = (a, e) => {
  const t = (o) => e.replaceText(o), s = C(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Ct = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Et = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, At = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, Z = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, $t = (a, e) => {
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
}, Dt = (a, e) => {
  switch (a.code) {
    case ea:
      return Pt(a, e);
    case j:
      return Rt(a, e);
    case D:
    case V:
    case U:
    case $:
      return Ft(a, e);
    case L:
    case q:
    case _:
      return jt(a, e);
    default:
      return a;
  }
}, Ft = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Pt = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return de({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, jt = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Rt = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, sr = (a, e, t = `
`) => Kt(a, ((s) => e.get(s)), t), Kt = (a, e, t = `
`) => ee(a.note, ((s) => h(s.value, e)), t), rr = (a, e) => Pa(a, ((t) => Mt(t, e))), Pa = (a, e) => ({
  params: _t(a.params, ((t) => h(t, e))),
  messages: qt(a.messages, ((t) => h(t, e))),
  basic: Ut(a.basic, ((t) => h(t, e))),
  commands: Lt(a.commands, ((t) => h(t, e)))
}), Ut = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Lt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], _t = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], qt = (a, e) => ({
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
}), Vt = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: F(a.elements, e),
  skillTypes: F(a.skillTypes, e),
  weaponTypes: F(a.weaponTypes, e),
  armorTypes: F(a.armorTypes, e),
  equipTypes: F(a.equipTypes, e),
  terms: Pa(a.terms, e)
}), F = (a, e) => a.map(((t) => h(t, e))), ja = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ra {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return ja(this.joinCommandBodies());
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
    return ja(this.bodies);
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
}, Jt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === V), ((m) => m.code === U)))(a, e);
  return zt(s) ? new na(U, s, t) : new Ra(s, t);
}, zt = (a) => a.parameters[0] === "選択肢ヘルプ", Gt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === ea), ((m) => m.code === D)))(a, e);
  return new na(D, s, t);
}, Ot = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === R), ((m) => m.code === da)))(a, e);
  return new Ra(s, t);
}, Ht = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === pa), ((m) => m.code === $)))(a, e);
  return new na($, s, t);
}, Yt = {
  [ea]: (a, e, t) => t.showMessage(Gt(a, e), e, a),
  [R]: (a, e, t) => t.script(Ot(a, e), e, a),
  [V]: (a, e, t) => t.comment(Jt(a, e), e, a),
  [pa]: (a, e, t) => t.showScrollingText(Ht(a, e), e, a)
}, Ka = (a) => Yt[a], Xt = (a, e, t, s) => {
  if (a.code === D || a.code === $ || a.code === U) return;
  const r = Ka(a.code);
  return r ? r(t, e, s) : a.code === j ? Zt(a) : a.code === L || a.code === q || a.code === _ ? Wt(a) : a.code !== da ? a : void 0;
}, Zt = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Wt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Qt = (a) => ({ code: R, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), as = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: D,
    indent: a.header.indent,
    parameters: [e]
  };
  return [ts(a.header), t];
}, es = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: $, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, ts = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, H = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Qt, showMessage: as, showScrollingText: es };
    return s.map(((n, m) => n.code === P ? n : Xt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === P ? e.pluginCommand(s) : s.code === R ? e.scriptCommand(s) : Dt(s, t)));
}, ss = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: H(t.list, e) })))
}), rs = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, e)
}), nr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), mr = (a, e) => Ua(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), ns = (a, e) => Ua(a, e), Ua = (a, e) => ({
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
}), or = (a) => La(a, (() => [])), Y = (a, e) => La(a, e), La = (a, e) => a.flatMap(((t, s) => ms(t, s, a, e))).filter(((t) => t !== null)), ms = (a, e, t, s) => {
  if (a.code === P) return s(a);
  if (a.code === j) return fe(a);
  const r = Ka(a.code);
  if (r) {
    const n = r(t, e, os);
    if (n !== void 0) return [n];
  }
  return a.code === q || a.code === L || a.code === _ ? he(a) : null;
}, os = { comment: (a) => ({
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
}))(a), showScrollingText: (a) => ((e) => ({ code: $, paramIndex: 0, value: e.getBodyText() }))(a) }, is = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, e)
}), cs = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: Y(t.list, e) }))), ls = (a, e = () => []) => ({
  note: a.note,
  noteItems: ya(a.note),
  displayedName: a.displayName,
  events: ds(a, e)
}), ds = (a, e) => sa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(t.list, e),
  note: r.note,
  noteItems: ya(r.note),
  name: r.name
}))), _a = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), qa = (a) => a.kind === "struct", Va = (a) => a.attr.kind === "struct[]", ps = (a) => Ja[a.kind.replace("[]", "")].type === "number", us = (a) => Ja[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Ja = {
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
function ys(a) {
  return gs(a, ((e) => !0), ((e) => !0));
}
const gs = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (qa(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Va(o)) r.push(o);
    else if (_a(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function hs(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const fs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, vs = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), za = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ga(a, e, t, s) {
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
    const T = (function(y, u) {
      const g = y.ancestry.concat(y.schemaName), I = y.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${I}["${w.name}"]`,
        ancestry: g
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${I}["${w.name}"][*]`, ancestry: g })))].reverse();
    })(d, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const y = (function(u, { path: g, structName: I }) {
        return {
          category: "struct",
          objectSchema: hs(u.scalars),
          name: I,
          scalarArrays: vs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? fs(u.scalars, g) : void 0
        };
      })(p, { path: d.basePath, structName: d.schemaName });
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
const xs = (a, e, t, s = za) => Ga(a.attr.struct, `${e}["${a.name}"]`, t, s), bs = (a, e, t, s = za) => Ga(a.attr.struct, `${e}["${a.name}"][*]`, t, s), Ns = (a, e, t, s) => ((r) => qa(r.attr))(t) ? Is(a, t, s) : Va(t) ? ws(a, t, s) : _a(t) ? Ts(a, e, t) : ks(a, e, t), Ts = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), ks = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Is = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: xs(e, "$", t)
}), ws = (a, e, t) => ({
  structArrays: bs(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Ss = (a, e) => e.map(((t) => Ms(a, t))).flat(3), Ms = (a, e) => [e.top ? W(e, a, e.top, "") : [], e.structs.map(((t) => W(e, a, t))), e.structArrays.map(((t) => W(e, a, t)))], W = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: f }) => ((p, T, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const I = u[u.length - 1];
    if (typeof I == "number") return null;
    const w = g[I];
    return w ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: y, param: { name: I, attr: w } } : null;
  })(m, o, d, f, l))).filter(((d) => d !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const f = l.schema.attr;
    return us(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, d, i, l.schema) : ps(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, d, i, l.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, Q = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: oa(a.scalarArrays, a.name, e), scalar: Bs(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: oa(a.scalarArrays, a.name, e)
}, oa = (a, e, t) => a.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: e }))), Bs = (a, e, t) => ({ jsonPathJS: t(a), record: e }), Cs = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Es(e, t, s)
}), Es = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = r.scalars ? Q(r.scalars, n) : void 0, o = r.structs.items.map(((c) => Q(c, n))), i = r.structArrays.items.map(((c) => Q(c, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Ns("args", a.command, s, e), t))), As = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, ys(r.params)]))))(a.schema.structs);
  return $s(a.pluginName, a.schema.commands, t, e);
}, $s = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, Cs(a, r, t, s)])), Ds = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Ss(m, o.extractors) }))(le(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, ir = (a) => {
  const e = new Map(a);
  return new ma(e);
}, cr = () => new ma(/* @__PURE__ */ new Map()), lr = (a) => {
  const e = a.flatMap(((t) => As(t, ((s) => new ce(s)))));
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
    return ls(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return cs(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return is(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Ds(e, this._commandMap);
    return t.args.filter(Fs).map(((s) => ({
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
const Fs = (a) => typeof a.value == "string", dr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), pr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], ur = (a, e, t, s, r, n) => [...te(t, s), ...se(a, e), ...re(r, n)], yr = (a, e) => ua(me(e), a), gr = (a, e, t) => {
  const s = ne(e);
  return ua(t ? [...s, ...t] : s, a);
}, Ps = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => Bt(t, e))),
  armors: k(a.armors, ((t) => Z(t, e))),
  classes: k(a.classes, ((t) => Et(t, e))),
  commonEvents: k(a.commonEvents, ((t) => rs(t, e))),
  enemies: k(a.enemies, ((t) => Ct(t, e))),
  items: k(a.items, ((t) => Z(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => At(t, e))),
  states: k(a.states, ((t) => $t(t, e))),
  system: { message: a.system.message, system: a.system.system ? Vt(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((t) => ss(t, e))),
  weapons: k(a.weapons, ((t) => Z(t, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: ns(t.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), Oa = (a, e, t, s) => {
  const r = ka(a, t), n = Sa(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = js(n.nonTextNoteKeys, s);
  return Ps(a, m);
}, js = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), hr = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r) => Oa(e, a, r, {
  replaceText: (n) => t.get(n),
  pluginCommand: (n) => n,
  scriptCommand: (n) => n,
  isReplaceTargetNote: (n) => s.has(n.key)
}), fr = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r, n) => ({ main: Oa(e, a, r, { replaceText: (m) => n(m), pluginCommand: (m) => m, scriptCommand: (m) => m, isReplaceTargetNote: (m) => s.has(m.key) }), aux: {
  actorTextDictionary: Rs(e, t, n),
  newTextDictionary: Ks(t, n)
} }), Rs = (a, e, t) => xt(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((s) => s.map)), {
  newText: (s) => e.get(s) ?? s,
  hashText: (s) => t(s)
}), Ks = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s })));
export {
  Bt as $,
  ve as A,
  Ds as B,
  E as C,
  xe as D,
  he as E,
  we as F,
  Ne as G,
  be as H,
  or as I,
  Y as J,
  ke as K,
  ka as L,
  Te as M,
  Se as N,
  Ee as O,
  Ie as P,
  fe as Q,
  Zs as R,
  ze as S,
  Ge as T,
  tt as U,
  Hs as V,
  Os as W,
  vt as X,
  G as Y,
  gt as Z,
  ht as _,
  Sa as a,
  Z as a0,
  Dt as a1,
  Et as a2,
  rs as a3,
  nr as a4,
  Qs as a5,
  hr as a6,
  fr as a7,
  Ct as a8,
  H as a9,
  Da as aa,
  ns as ab,
  Ws as ac,
  mr as ad,
  Kt as ae,
  sr as af,
  Fa as ag,
  Ps as ah,
  At as ai,
  $t as aj,
  rr as ak,
  Vt as al,
  Mt as am,
  ss as an,
  ar as ao,
  z as ap,
  wa as aq,
  Ea as ar,
  Ys as b,
  ur as c,
  sa as d,
  gr as e,
  yr as f,
  Be as g,
  B as h,
  Me as i,
  ft as j,
  xt as k,
  yt as l,
  Xs as m,
  cr as n,
  ir as o,
  lr as p,
  bt as q,
  cs as r,
  is as s,
  pr as t,
  dr as u,
  ut as v,
  Aa as w,
  er as x,
  tr as y,
  ls as z
};
