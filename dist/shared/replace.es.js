import { as as P, b as ia, q as ca, N as la, v as _, E as q, w as V, aS as A, P as L, Q as J, aP as D, aM as j, aO as ea, az as da, ay as R, aR as pa } from "./eventCommandCodes.es.js";
import { n as z, m as ua } from "./normalText.es.js";
import { aZ as Oa, aU as Ha, av as Ya, aV as Xa, ba as Za, bb as Qa, aO as Wa, b3 as C, b2 as ae, aY as ga, aD as ee, az as se, aA as te, b4 as re, b5 as ne } from "./namedItems.es.js";
import { l as U, a as ya, i as ha, f as fa, c as va, e as ba, d as xa, j as Na, b as Ta, h as me, g as oe } from "./system.es.js";
import { JSONPathJS as ie } from "jsonpath-js";
import { parseDeepRecord as ce } from "@sigureya/rmmz-plugin-schema";
import { m as le } from "./make.es.js";
import { t as de, F as pe, E as ue, B as ge } from "./makeSystemEx.es.js";
const ye = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), he = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), E = (a, e) => ({
  id: a.id,
  name: a.name,
  note: fe(a),
  main: e.map(((s) => ({ key: s, value: a[s], id: a.id })))
}), fe = (a) => Oa(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), ve = (a) => E(a, ["name", "nickname", "profile"]), be = (a) => E(a, ["name"]), xe = (a) => E(a, ["name"]), Ne = (a) => E(a, ["name", "description", "message1", "message2"]), Te = (a) => E(a, ["name", "description"]), ke = (a) => E(a, ["name", "description"]), Ie = (a) => E(a, ["name", "description"]), we = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), Se = (a, e, s, t) => B(a, e, {
  message1: s.state.message1,
  message2: s.state.message2,
  message3: s.state.message3,
  message4: s.state.message4,
  name: s.name,
  note: s.note
}, t), B = (a, e, s, t) => a.map(((r) => Me(r, e, s, t))), Me = (a, e, s, t) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = z(r.value);
  return {
    kind: s[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: t(n)
  };
})), note: Be(a.note, e, s, t) }), Be = (a, e, s, t) => a.map(((r) => ({
  kind: `${s.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: t(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Ce = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: ge(a.terms.basic),
  commands: ue(a.terms.commands),
  messages: pe(a.terms.messages),
  params: de(a.terms.params)
} }), ka = (a, e) => {
  const s = N(a.actors, ve), t = De(a.armors), r = N(a.classes, xe), n = N(a.enemies, be), m = N(a.items, Te), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, Ne), d = N(a.states, we), c = N(a.weapons, ke), l = Fe(a.commonEvents, e), f = Pe(a.troops, e), p = je(a.mapFiles, e), T = Ee(a.system), g = $e([s, t, r, n, m, o, i, d, c, f, l]).concat(Ae(a.mapFiles, a.system));
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
}, Ee = (a) => ({ message: a.message, system: a.system ? Ce(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), $e = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), Ae = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: U,
  error: e.message
}] : []], De = (a) => N(a, Ie), Fe = (a, e) => N(a, ((s) => e.extractCommonEventText(s))), Pe = (a, e) => N(a, ((s) => e.extractBattleText(s))), je = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, sa = (a, e, s, t, r, n) => {
  if (a.code === P) return Ke(a, e, s, r, n);
  const m = z(a.value);
  return { otherData: n, uuid: r(m), kind: t(a), baseText: m, filename: s, id: e, speaker: a.speaker ?? "", dataKey: Re(a) };
}, Re = (a) => `code:${a.code}`, Ke = (a, e, s, t, r) => {
  const n = z(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: t(n),
    kind: `${Ue(a)}`,
    baseText: n,
    filename: s,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Ue = (a) => `${a.commandName}.${a.argTitle}`, Le = (a, e, s, t) => e.flatMap(((r) => _e(a, r, s, t))), _e = (a, e, s, t) => e.commands.filter(Ia).map(((r) => sa(r, e.eventId, a, t, s, [e.name]))), qe = (a, e, s, t) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => sa(m, r.eventId, e, s, t, [n])));
})), Ia = (a) => a.value.length > 0, Ve = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, Je = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, ze = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, G = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, wa = (a, e) => {
  const s = Ge(a);
  return Array.from(s.entries()).map((([t, r]) => {
    const n = Ye(r, e);
    return {
      key: t,
      kinds: He(n),
      values: r.map(Oe)
    };
  }));
}, Ge = (a) => {
  const e = a.flatMap(((s) => s.notes.map(((t) => ({ key: t.key, value: t.value, id: t.id, name: t.name, soruce: s.source })))));
  return Map.groupBy(e, ((s) => s.key));
}, Oe = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), He = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), Ye = (a, { audioFiles: e, imageFiles: s, otherFiles: t }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && Je(n.value),
  isNumber: r.isNumber && ze(n.value),
  isBgm: r.isBgm && e.bgm.has(n.value),
  isBgs: r.isBgs && e.bgs.has(n.value),
  isMe: r.isMe && e.me.has(n.value),
  isSe: r.isSe && e.se.has(n.value),
  isPicture: r.isPicture && s.picutures.has(n.value),
  isCharacter: r.isCharacter && s.characters.has(n.value),
  isFaceset: r.isFaceset && s.faces.has(n.value),
  isBattler: r.isBattler && s.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && s.svActors.has(n.value),
  isEnemy: r.isEnemy && s.enemies.has(n.value),
  isTileset: r.isTileset && s.tilesets.has(n.value),
  isMovie: r.isMovie && t.movies.has(n.value),
  isScript: r.isScript && Ha(n.value)
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
}), Xe = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Qe), ...a.map.events.map(Ze).flat()]
}), Ze = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), Qe = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), We = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return { main: s.main, note: t, id: s.id, name: s.name };
})).filter(as), as = (a) => a.note.length > 0 || a.main.length > 0, Sa = (a, e) => {
  const s = ts(a.value.mainData, e), t = rs(a.value.mapFiles.validMaps, e);
  return { nonTextNoteKeys: s.nonTextNoteKeys, dataNoteSummary: s.noteSummary, mapNoteSummary: t.noteSummary, data: {
    errors: a.errors,
    value: {
      mainData: s.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: t.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, Ma = (a, e) => {
  const s = (t) => e.has(t.key);
  return {
    actors: S(a.actors, s),
    enemies: S(a.enemies, s),
    weapons: S(a.weapons, s),
    armors: S(a.armors, s),
    skills: S(a.skills, s),
    states: S(a.states, s),
    items: S(a.items, s),
    classes: S(a.classes, s)
  };
}, qt = (a, e) => {
  const s = Ea(a, e), t = G(s);
  return Ba(a, t);
}, es = (a, e) => {
  const s = Ca(a, e);
  return G(s);
}, Vt = (a, e) => {
  const s = es(a, e);
  return Ma(a, s);
}, Ba = (a, e) => a.map(((s) => {
  return { filename: s.filename, editingName: s.editingName, map: (t = s.map, r = (n) => e.has(n.key), {
    displayedName: t.displayedName,
    note: t.note,
    noteItems: t.noteItems.filter(r),
    events: t.events.map(((n) => We(n, r)))
  }) };
  var t, r;
})), Ca = (a, e) => {
  const s = ss(a);
  return wa(s, e);
}, ss = (a) => [M(ya, a.actors), M(ha, a.skills), M(fa, a.items), M(va, a.weapons), M(ba, a.armors), M(xa, a.classes), M(Na, a.states), M(Ta, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((s) => s.note.map(((t) => ({ key: t.key, value: t.value, id: t.id, name: s.name })))))
}), Ea = (a, e) => {
  const s = a.map(Xe);
  return wa(s, e);
}, ts = (a, e) => {
  const s = Ca(a, e), t = G(s);
  return {
    noteSummary: s,
    nonTextNoteKeys: t,
    mainData: Ma(a, t)
  };
}, rs = (a, e) => {
  const s = Ea(a, e), t = G(s);
  return { noteSummary: s, validMaps: Ba(a, t) };
}, ns = (a, e, s, t) => [{
  filename: e,
  id: 0,
  baseText: a.gameTitle,
  uuid: t(a.gameTitle),
  kind: s.gameTitle,
  dataKey: "gameTitle"
}, {
  filename: e,
  id: 0,
  baseText: a.currencyUnit,
  uuid: t(a.currencyUnit),
  kind: s.currencyUnit,
  dataKey: "currencyUnit"
}, ...X(e, a.equipTypes, "equipTypes", s.equipTypes, t), ...X(e, a.weaponTypes, "weaponTypes", s.weaponTypes, t), ...X(e, a.armorTypes, "armorTypes", s.armorTypes, t)], X = (a, e, s, t, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = z(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: t, dataKey: s };
})), Jt = (a, e, s, t, r, n) => {
  const m = ka(a.data, n), o = Sa(m, a);
  return os(a.data.actors.data, o, e, s, t, r);
}, ms = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], os = (a, e, s, t, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = e.data.value;
  return {
    noteSummaries: ms(e),
    pluginParams: [],
    map: is(i, r, n),
    commonEvents: Le(me, m.commonEvents, r, n),
    troops: qe(m.troops, oe, n, r),
    armors: B(o.armors, ba, t, r),
    system: ls(d, r, s),
    actors: { texts: B(o.actors, ya, t, r), controlChars: Ya(a) },
    classes: B(o.classes, xa, t, r),
    enemies: B(o.enemies, Ta, t, r),
    items: B(o.items, fa, t, r),
    skills: B(o.skills, ha, t, r),
    states: Se(o.states, Na, t, r),
    weapons: B(o.weapons, va, t, r)
  };
}, is = (a, e, s) => a.validMaps.map(((t) => cs(t, e, s))).flat(3), cs = (a, e, s) => a.map.events.map(((t) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = Ve(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(Ia).map(((c) => sa(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(t, a, e, s))), ls = (a, e, s) => a.system === null ? { gameTitle: "", filename: U, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: U,
  texts: ns(a.system, U, s, e)
}, $a = (a, e, s) => a.filter(((t) => t.code === ia || t.code === ca || t.code === la)).map(((t) => ps(t, e, s))), ds = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, ps = (a, e, s) => {
  const t = Xa(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === Za ? e.gain : a.parameters[1] === Qa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: ds[a.code],
    dataId: Wa(a),
    code: a.code,
    commandNameMZ: s(a.code),
    operation: r,
    ...n,
    ...t
  };
}, Aa = (a) => !!a, zt = (a, e, s) => ({ data: a, eventId: e, pageIndex: s }), us = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), O = (a, e) => a.pages.map(((s, t) => e(s, t, a))), gs = (a, e) => a.events.filter(Aa).map(((s) => O(s, e))), ta = (a, e) => a.events.filter(Aa).flatMap(((s) => O(s, e))), ys = (a, e) => a.map(((s) => O(s, e))), hs = (a, e) => a.flatMap(((s) => O(s, e))), fs = (a, e) => a.map(((s) => e(s, 0, s))), Gt = (a) => gs(a, us).flat(2), Ot = (a, e, s, t) => {
  const r = vs(a), n = e.map(bs), m = xs(s), o = Ns(t);
  return new Set([r, m, o, n].flat(4));
}, vs = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), bs = (a) => ta(a, ra), xs = (a) => fs(a, ra), Ns = (a) => ys(a, ra), ra = ({ list: a }) => a.filter(Ts).map(((e) => e.parameters[1])), Ts = (a) => a.code === _ || a.code === q || a.code === V, Da = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, Fa = (a, e) => ({ ...a, pages: a.pages.map(((s) => Da(s, e))) }), Ht = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? Fa(s, e) : null))
}), Yt = (a, e) => a.map(((s) => Da(s, e))), Xt = (a, e) => a.map(((s) => Fa(s, e))), Zt = (a, e, s) => ta(a.map, ((t, r, n) => ({
  ...ks(t),
  commands: $a(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), ks = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Qt = (a, e, s) => hs(a, ((t, r, n) => ({
  commands: $a(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Is = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, h = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, v = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, ws = (a, e) => {
  const s = (o) => e.replaceText(o), t = C(a.note, e), r = h(a.name, s), n = h(a.nickname, s), m = h(a.profile, s);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: t
  };
}, Ss = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e);
  return { ...a, name: t, note: s };
}, Ms = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e);
  return {
    ...a,
    name: t,
    note: s
  };
}, Bs = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, Z = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e), r = v(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, Cs = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e), r = v(a.message1, e), n = v(a.message2, e), m = v(a.message3, e), o = v(a.message4, e);
  return {
    ...a,
    name: t,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: s
  };
}, Es = (a, e) => {
  switch (a.code) {
    case ea:
      return As(a, e);
    case j:
      return Fs(a, e);
    case D:
    case J:
    case L:
    case A:
      return $s(a, e);
    case _:
    case V:
    case q:
      return Ds(a, e);
    default:
      return a;
  }
}, $s = (a, e) => {
  const s = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, As = (a, e) => {
  const s = a.parameters[4] ? h(a.parameters[4], e) : "";
  return le({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, Ds = (a, e) => {
  const s = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, Fs = (a, e) => {
  const s = a.parameters[0].map(((t) => h(t, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Wt = (a, e, s = `
`) => Ps(a, ((t) => e.get(t)), s), Ps = (a, e, s = `
`) => ae(a.note, ((t) => h(t.value, e)), s), ar = (a, e) => Pa(a, ((s) => Is(s, e))), Pa = (a, e) => ({
  params: Ks(a.params, ((s) => h(s, e))),
  messages: Us(a.messages, ((s) => h(s, e))),
  basic: js(a.basic, ((s) => h(s, e))),
  commands: Rs(a.commands, ((s) => h(s, e)))
}), js = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Rs = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Ks = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Us = (a, e) => ({
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
}), Ls = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: F(a.elements, e),
  skillTypes: F(a.skillTypes, e),
  weaponTypes: F(a.weaponTypes, e),
  armorTypes: F(a.armorTypes, e),
  equipTypes: F(a.equipTypes, e),
  terms: Pa(a.terms, e)
}), F = (a, e) => a.map(((s) => h(s, e))), ja = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ra {
  constructor(e, s) {
    this.header = e, this.bodies = s;
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
  constructor(e, s, t) {
    this.bodyCode = e, this.header = s, this.bodies = t;
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
const H = (a, e, s, t) => {
  const r = a[e];
  if (!s(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!t(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, _s = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => H(r, n, ((m) => m.code === J), ((m) => m.code === L)))(a, e);
  return qs(t) ? new na(L, t, s) : new Ra(t, s);
}, qs = (a) => a.parameters[0] === "選択肢ヘルプ", Vs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => H(r, n, ((m) => m.code === ea), ((m) => m.code === D)))(a, e);
  return new na(D, t, s);
}, Js = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => H(r, n, ((m) => m.code === R), ((m) => m.code === da)))(a, e);
  return new Ra(t, s);
}, zs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => H(r, n, ((m) => m.code === pa), ((m) => m.code === A)))(a, e);
  return new na(A, t, s);
}, Gs = {
  [ea]: (a, e, s) => s.showMessage(Vs(a, e), e, a),
  [R]: (a, e, s) => s.script(Js(a, e), e, a),
  [J]: (a, e, s) => s.comment(_s(a, e), e, a),
  [pa]: (a, e, s) => s.showScrollingText(zs(a, e), e, a)
}, Ka = (a) => Gs[a], er = (a) => Ua(a, (() => [])), Y = (a, e) => Ua(a, e), Ua = (a, e) => a.flatMap(((s, t) => Os(s, t, a, e))).filter(((s) => s !== null)), Os = (a, e, s, t) => {
  if (a.code === P) return t(a);
  if (a.code === j) return he(a);
  const r = Ka(a.code);
  if (r) {
    const n = r(s, e, Hs);
    if (n !== void 0) return [n];
  }
  return a.code === V || a.code === _ || a.code === q ? ye(a) : null;
}, Hs = { comment: (a) => ({
  code: J,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: D, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({ code: R, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, Ys = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, e)
}), Xs = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: Y(s.list, e) }))), Zs = (a, e = () => []) => ({
  note: a.note,
  noteItems: ga(a.note),
  displayedName: a.displayName,
  events: Qs(a, e)
}), Qs = (a, e) => ta(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: Y(s.list, e),
  note: r.note,
  noteItems: ga(r.note),
  name: r.name
}))), La = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), _a = (a) => a.kind === "struct", qa = (a) => a.attr.kind === "struct[]", Ws = (a) => Va[a.kind.replace("[]", "")].type === "number", at = (a) => Va[a.kind.replace("[]", "")].type === "string", $ = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, b = { type: "number", hasText: !1 }, Va = {
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
function et(a) {
  return st(a, ((e) => !0), ((e) => !0));
}
const st = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (_a(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (qa(o)) r.push(o);
    else if (La(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function tt(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const rt = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, nt = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), Ja = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function za(a, e, s, t) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * s.size + 5), m = Array.from({
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
          objectSchema: tt(u.scalars),
          name: I,
          scalarArrays: nt(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? rt(u.scalars, y) : void 0
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
const mt = (a, e, s, t = Ja) => za(a.attr.struct, `${e}["${a.name}"]`, s, t), ot = (a, e, s, t = Ja) => za(a.attr.struct, `${e}["${a.name}"][*]`, s, t), it = (a, e, s, t) => ((r) => _a(r.attr))(s) ? dt(a, s, t) : qa(s) ? pt(a, s, t) : La(s) ? ct(a, e, s) : lt(a, e, s), ct = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), lt = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), dt = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: mt(e, "$", s)
}), pt = (a, e, s) => ({
  structArrays: ot(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), ut = (a, e) => e.map(((s) => gt(a, s))).flat(3), gt = (a, e) => [e.top ? Q(e, a, e.top, "") : [], e.structs.map(((s) => Q(e, a, s))), e.structArrays.map(((s) => Q(e, a, s)))], Q = (a, e, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, d, c) => d.pathSegments(i).map((({ value: l, segments: f }) => ((p, T, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const I = u[u.length - 1];
    if (typeof I == "number") return null;
    const w = y[I];
    return w ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: g, param: { name: I, attr: w } } : null;
  })(m, o, l, f, c))).filter(((l) => l !== null)))(a, t, e, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, d, c) => {
    const l = c.jsonPathJS.find(d);
    if (!Array.isArray(l)) return [];
    const f = c.schema.attr;
    return at(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, l, i, c.schema) : Ws(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: p.rootName, rootType: p.rootCategory, value: y, structName: g, param: u }))))(o, l, i, c.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, W = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: oa(a.scalarArrays, a.name, e), scalar: yt(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: oa(a.scalarArrays, a.name, e)
}, oa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), yt = (a, e, s) => ({ jsonPathJS: s(a), record: e }), ht = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: ft(e, s, t)
}), ft = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? W(r.scalars, n) : void 0, o = r.structs.items.map(((d) => W(d, n))), i = r.structArrays.items.map(((d) => W(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(it("args", a.command, t, e), s))), vt = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, et(r.params)]))))(a.schema.structs);
  return bt(a.pluginName, a.schema.commands, s, e);
}, bt = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, ht(a, r, s, t)])), xt = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: ut(m, o.extractors) }))(ce(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, sr = (a) => {
  const e = new Map(a);
  return new ma(e);
}, tr = () => new ma(/* @__PURE__ */ new Map()), rr = (a) => {
  const e = a.flatMap(((s) => vt(s, ((t) => new ie(t)))));
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
    return Zs(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return Xs(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return Ys(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = xt(e, this._commandMap);
    return s.args.filter(Nt).map(((t) => ({
      code: P,
      value: t.value,
      paramIndex: 3,
      argName: t.param.name,
      argTitle: t.param.attr.text ?? t.param.name,
      commandName: s.commandName,
      pluginName: s.pluginName
    })));
  }
  extractCommandTexts(e) {
    return Y(e, ((s) => this.extractArgs(s)));
  }
}
const Nt = (a) => typeof a.value == "string", nr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), mr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], or = (a, e, s, t, r, n) => [...ee(s, t), ...se(a, e), ...te(r, n)], ir = (a, e) => ua(ne(e), a), cr = (a, e, s) => {
  const t = re(e);
  return ua(s ? [...t, ...s] : t, a);
}, Tt = (a, e, s, t) => {
  if (a.code === D || a.code === A || a.code === L) return;
  const r = Ka(a.code);
  return r ? r(s, e, t) : a.code === j ? kt(a) : a.code === _ || a.code === V || a.code === q ? It(a) : a.code !== da ? a : void 0;
}, kt = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), It = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), wt = (a) => ({ code: R, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), St = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: D,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Bt(a.header), s];
}, Mt = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, Bt = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, K = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: wt, showMessage: St, showScrollingText: Mt };
    return t.map(((n, m) => n.code === P ? n : Tt(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === P ? e.pluginCommand(t) : t.code === R ? e.scriptCommand(t) : Es(t, s)));
}, Ct = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: K(s.list, e) })))
}), lr = (a, e) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: K(t.list, s) }))) };
}, Et = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: K(a.list, e)
}), dr = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: K(a.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: e
}) }), pr = (a, e) => Ga(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), $t = (a, e) => Ga(a, e), Ga = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((s) => s ? ((t, r) => ({ id: t.id, name: t.name, x: t.x, y: t.y, note: C(t.note, r), pages: t.pages.map(((n) => ({
    ...n,
    list: K(n.list, r)
  }))) }))(s, e) : null)),
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
}), At = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((s) => ws(s, e))),
  armors: k(a.armors, ((s) => Z(s, e))),
  classes: k(a.classes, ((s) => Ms(s, e))),
  commonEvents: k(a.commonEvents, ((s) => Et(s, e))),
  enemies: k(a.enemies, ((s) => Ss(s, e))),
  items: k(a.items, ((s) => Z(s, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((s) => Bs(s, e))),
  states: k(a.states, ((s) => Cs(s, e))),
  system: { message: a.system.message, system: a.system.system ? Ls(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((s) => Ct(s, e))),
  weapons: k(a.weapons, ((s) => Z(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: $t(s.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), ur = (a, e, s, t) => {
  const r = ka(a, s), n = Sa(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = Dt(n.nonTextNoteKeys, t);
  return At(a, m);
}, Dt = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Z as $,
  xt as A,
  E as B,
  ve as C,
  ye as D,
  Ie as E,
  xe as F,
  be as G,
  er as H,
  Y as I,
  Te as J,
  ka as K,
  Ne as L,
  we as M,
  Ce as N,
  ke as O,
  he as P,
  Gt as Q,
  Je as R,
  ze as S,
  es as T,
  Vt as U,
  qt as V,
  fs as W,
  O as X,
  gs as Y,
  ys as Z,
  ws as _,
  Sa as a,
  Es as a0,
  Ms as a1,
  Et as a2,
  dr as a3,
  Yt as a4,
  Ss as a5,
  K as a6,
  Da as a7,
  $t as a8,
  Ht as a9,
  pr as aa,
  Ps as ab,
  Wt as ac,
  Fa as ad,
  At as ae,
  ur as af,
  Bs as ag,
  Cs as ah,
  ar as ai,
  Ls as aj,
  Is as ak,
  Ct as al,
  lr as am,
  Xt as an,
  G as ao,
  wa as ap,
  Ea as aq,
  Jt as b,
  or as c,
  ta as d,
  cr as e,
  ir as f,
  Me as g,
  B as h,
  Se as i,
  hs as j,
  us as k,
  zt as l,
  tr as m,
  sr as n,
  rr as o,
  Ot as p,
  Xs as q,
  Ys as r,
  mr as s,
  nr as t,
  ps as u,
  $a as v,
  Zt as w,
  Qt as x,
  Zs as y,
  fe as z
};
