import { as as P, b as ia, q as ca, N as la, v as _, E as q, w as V, aS as A, P as L, Q as J, aP as D, aM as j, aO as ea, az as da, ay as R, aR as pa } from "./eventCommandCodes.es.js";
import { n as G, m as ua } from "./normalText.es.js";
import { aV as Ha, as as Oa, aR as Xa, b6 as Ya, b7 as Qa, aL as Wa, a$ as C, a_ as Za, aU as ga, aA as ae, aw as ee, ax as se, b0 as te, b1 as re } from "./namedItems.es.js";
import { l as U, a as ya, i as ha, f as fa, c as va, e as ba, d as xa, j as Na, b as Ta, h as ne, g as me } from "./system.es.js";
import { JSONPathJS as oe } from "jsonpath-js";
import { parseDeepRecord as ie } from "@sigureya/rmmz-plugin-schema";
import { m as ce } from "./make.es.js";
import { t as le, F as de, E as pe, B as ue } from "./makeSystemEx.es.js";
const ge = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), ye = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), E = (a, e) => ({
  id: a.id,
  name: a.name,
  note: he(a),
  main: e.map(((s) => ({ key: s, value: a[s], id: a.id })))
}), he = (a) => Ha(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), fe = (a) => E(a, ["name", "nickname", "profile"]), ve = (a) => E(a, ["name"]), be = (a) => E(a, ["name"]), xe = (a) => E(a, ["name", "description", "message1", "message2"]), Ne = (a) => E(a, ["name", "description"]), Te = (a) => E(a, ["name", "description"]), ke = (a) => E(a, ["name", "description"]), Ie = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), we = (a, e, s, t) => B(a, e, {
  message1: s.state.message1,
  message2: s.state.message2,
  message3: s.state.message3,
  message4: s.state.message4,
  name: s.name,
  note: s.note
}, t), B = (a, e, s, t) => a.map(((r) => Me(r, e, s, t))), Me = (a, e, s, t) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = G(r.value);
  return {
    kind: s[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: t(n)
  };
})), note: Se(a.note, e, s, t) }), Se = (a, e, s, t) => a.map(((r) => ({
  kind: `${s.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: t(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Be = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: ue(a.terms.basic),
  commands: pe(a.terms.commands),
  messages: de(a.terms.messages),
  params: le(a.terms.params)
} }), ka = (a, e) => {
  const s = N(a.actors, fe), t = Ae(a.armors), r = N(a.classes, be), n = N(a.enemies, ve), m = N(a.items, Ne), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, xe), d = N(a.states, Ie), c = N(a.weapons, Te), l = De(a.commonEvents, e), f = Fe(a.troops, e), p = Pe(a.mapFiles, e), T = Ce(a.system), g = Ee([s, t, r, n, m, o, i, d, c, f, l]).concat($e(a.mapFiles, a.system));
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
}, Ce = (a) => ({ message: a.message, system: a.system ? Be(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), Ee = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), $e = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: U,
  error: e.message
}] : []], Ae = (a) => N(a, ke), De = (a, e) => N(a, ((s) => e.extractCommonEventText(s))), Fe = (a, e) => N(a, ((s) => e.extractBattleText(s))), Pe = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, sa = (a, e, s, t, r, n) => {
  if (a.code === P) return Re(a, e, s, r, n);
  const m = G(a.value);
  return { otherData: n, uuid: r(m), kind: t(a), baseText: m, filename: s, id: e, speaker: a.speaker ?? "", dataKey: je(a) };
}, je = (a) => `code:${a.code}`, Re = (a, e, s, t, r) => {
  const n = G(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: t(n),
    kind: `${Ke(a)}`,
    baseText: n,
    filename: s,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Ke = (a) => `${a.commandName}.${a.argTitle}`, Ue = (a, e, s, t) => e.flatMap(((r) => Le(a, r, s, t))), Le = (a, e, s, t) => e.commands.filter(Ia).map(((r) => sa(r, e.eventId, a, t, s, [e.name]))), _e = (a, e, s, t) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => sa(m, r.eventId, e, s, t, [n])));
})), Ia = (a) => a.value.length > 0, qe = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, Ve = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Je = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, z = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, wa = (a, e) => {
  const s = a.flatMap(((r) => r.notes.map(((n) => ({ ...n, soruce: r.source }))))), t = Ge(s);
  return Array.from(t.entries()).map((([r, n]) => {
    const m = He(n, e);
    return { key: r, kinds: ze(m), values: n.map(((o) => ({ value: o.value, dataId: o.dataId, soruce: o.soruce, name: o.name }))) };
  }));
}, Ge = (a) => a.reduce(((e, s) => (e.has(s.key) || e.set(s.key, a.filter(((t) => t.key === s.key))), e)), /* @__PURE__ */ new Map()), ze = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null].filter(((e) => e !== null)), He = (a, { audioFiles: e, imageFiles: s, otherFiles: t }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && Ve(n.value),
  isNumber: r.isNumber && Je(n.value),
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
}), Oe = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Ye), ...a.map.events.map(Xe).flat()]
}), Xe = (a) => a.noteItems.map(((e) => ({ dataId: a.eventId, key: e.key, value: e.value, name: a.name }))), Ye = (a) => ({ dataId: 0, key: a.key, value: a.value, name: "" }), Qe = (a, e) => ({
  eventId: a.eventId,
  name: a.name,
  pageIndex: a.pageIndex,
  commands: a.commands,
  note: a.note,
  noteItems: a.noteItems.filter(e)
}), M = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return {
    main: s.main,
    note: t,
    id: s.id,
    name: s.name
  };
})).filter(We), We = (a) => a.note.length > 0 || a.main.length > 0, Ma = (a, e) => {
  const s = es(a.value.mainData, e), t = ss(a.value.mapFiles.validMaps, e);
  return {
    nonTextNoteKeys: s.nonTextNoteKeys,
    dataNoteSummary: s.noteSummary,
    mapNoteSummary: t.noteSummary,
    data: { errors: a.errors, value: { mainData: s.mainData, mapFiles: {
      info: a.value.mapFiles.info,
      invalidMaps: a.value.mapFiles.invalidMaps,
      validMaps: t.validMaps
    }, eventData: a.value.eventData, system: a.value.system } }
  };
}, Sa = (a, e) => {
  const s = (t) => e.has(t.key);
  return {
    actors: M(a.actors, s),
    enemies: M(a.enemies, s),
    weapons: M(a.weapons, s),
    armors: M(a.armors, s),
    skills: M(a.skills, s),
    states: M(a.states, s),
    items: M(a.items, s),
    classes: M(a.classes, s)
  };
}, Lt = (a, e) => {
  const s = Ea(a, e), t = z(s);
  return Ba(a, t);
}, Ze = (a, e) => {
  const s = Ca(a, e);
  return z(s);
}, _t = (a, e) => {
  const s = Ze(a, e);
  return Sa(a, s);
}, Ba = (a, e) => a.map(((s) => {
  return {
    filename: s.filename,
    editingName: s.editingName,
    map: (t = s.map, r = (n) => e.has(n.key), {
      displayedName: t.displayedName,
      note: t.note,
      noteItems: t.noteItems.filter(r),
      events: t.events.map(((n) => Qe(n, r)))
    })
  };
  var t, r;
})), Ca = (a, e) => {
  const s = as(a);
  return wa(s, e);
}, as = (a) => [S(ya, a.actors), S(ha, a.skills), S(fa, a.items), S(va, a.weapons), S(ba, a.armors), S(xa, a.classes), S(Na, a.states), S(Ta, a.enemies)], S = (a, e) => ({
  source: a,
  notes: e.flatMap(((s) => s.note.map(((t) => ({ key: t.key, value: t.value, dataId: t.id, name: s.name })))))
}), Ea = (a, e) => {
  const s = a.map(Oe);
  return wa(s, e);
}, es = (a, e) => {
  const s = Ca(a, e), t = z(s);
  return {
    noteSummary: s,
    nonTextNoteKeys: t,
    mainData: Sa(a, t)
  };
}, ss = (a, e) => {
  const s = Ea(a, e), t = z(s);
  return { noteSummary: s, validMaps: Ba(a, t) };
}, ts = (a, e, s, t) => [{
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
}, ...Y(e, a.equipTypes, "equipTypes", s.equipTypes, t), ...Y(e, a.weaponTypes, "weaponTypes", s.weaponTypes, t), ...Y(e, a.armorTypes, "armorTypes", s.armorTypes, t)], Y = (a, e, s, t, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = G(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: t, dataKey: s };
})), qt = (a, e, s, t, r, n) => {
  const m = ka(a.data, n), o = Ma(m, a);
  return ns(a.data.actors.data, o, e, s, t, r);
}, rs = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], ns = (a, e, s, t, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = e.data.value;
  return {
    noteSummaries: rs(e),
    pluginParams: [],
    map: ms(i, r, n),
    commonEvents: Ue(ne, m.commonEvents, r, n),
    troops: _e(m.troops, me, n, r),
    armors: B(o.armors, ba, t, r),
    system: is(d, r, s),
    actors: { texts: B(o.actors, ya, t, r), controlChars: Oa(a) },
    classes: B(o.classes, xa, t, r),
    enemies: B(o.enemies, Ta, t, r),
    items: B(o.items, fa, t, r),
    skills: B(o.skills, ha, t, r),
    states: we(o.states, Na, t, r),
    weapons: B(o.weapons, va, t, r)
  };
}, ms = (a, e, s) => a.validMaps.map(((t) => os(t, e, s))).flat(3), os = (a, e, s) => a.map.events.map(((t) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = qe(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(Ia).map(((c) => sa(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(t, a, e, s))), is = (a, e, s) => a.system === null ? { gameTitle: "", filename: U, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: U,
  texts: ts(a.system, U, s, e)
}, $a = (a, e, s) => a.filter(((t) => t.code === ia || t.code === ca || t.code === la)).map(((t) => ls(t, e, s))), cs = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, ls = (a, e, s) => {
  const t = Xa(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === Ya ? e.gain : a.parameters[1] === Qa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: cs[a.code],
    dataId: Wa(a),
    code: a.code,
    commandNameMZ: s(a.code),
    operation: r,
    ...n,
    ...t
  };
}, Aa = (a) => !!a, Vt = (a, e, s) => ({ data: a, eventId: e, pageIndex: s }), ds = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), H = (a, e) => a.pages.map(((s, t) => e(s, t, a))), ps = (a, e) => a.events.filter(Aa).map(((s) => H(s, e))), ta = (a, e) => a.events.filter(Aa).flatMap(((s) => H(s, e))), us = (a, e) => a.map(((s) => H(s, e))), gs = (a, e) => a.flatMap(((s) => H(s, e))), ys = (a, e) => a.map(((s) => e(s, 0, s))), Jt = (a) => ps(a, ds).flat(2), Gt = (a, e, s, t) => {
  const r = hs(a), n = e.map(fs), m = vs(s), o = bs(t);
  return new Set([r, m, o, n].flat(4));
}, hs = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), fs = (a) => ta(a, ra), vs = (a) => ys(a, ra), bs = (a) => us(a, ra), ra = ({ list: a }) => a.filter(xs).map(((e) => e.parameters[1])), xs = (a) => a.code === _ || a.code === q || a.code === V, Da = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, Fa = (a, e) => ({ ...a, pages: a.pages.map(((s) => Da(s, e))) }), zt = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? Fa(s, e) : null))
}), Ht = (a, e) => a.map(((s) => Da(s, e))), Ot = (a, e) => a.map(((s) => Fa(s, e))), Xt = (a, e, s) => ta(a.map, ((t, r, n) => ({
  ...Ns(t),
  commands: $a(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), Ns = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Yt = (a, e, s) => gs(a, ((t, r, n) => ({
  commands: $a(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Ts = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, h = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, v = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, ks = (a, e) => {
  const s = (o) => e.replaceText(o), t = C(a.note, e), r = h(a.name, s), n = h(a.nickname, s), m = h(a.profile, s);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: t
  };
}, Is = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e);
  return { ...a, name: t, note: s };
}, ws = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e);
  return {
    ...a,
    name: t,
    note: s
  };
}, Ms = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, Q = (a, e) => {
  const s = C(a.note, e), t = v(a.name, e), r = v(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, Ss = (a, e) => {
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
}, Bs = (a, e) => {
  switch (a.code) {
    case ea:
      return Es(a, e);
    case j:
      return As(a, e);
    case D:
    case J:
    case L:
    case A:
      return Cs(a, e);
    case _:
    case V:
    case q:
      return $s(a, e);
    default:
      return a;
  }
}, Cs = (a, e) => {
  const s = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, Es = (a, e) => {
  const s = a.parameters[4] ? h(a.parameters[4], e) : "";
  return ce({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, $s = (a, e) => {
  const s = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, As = (a, e) => {
  const s = a.parameters[0].map(((t) => h(t, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Qt = (a, e, s = `
`) => Ds(a, ((t) => e.get(t)), s), Ds = (a, e, s = `
`) => Za(a.note, ((t) => h(t.value, e)), s), Wt = (a, e) => Pa(a, ((s) => Ts(s, e))), Pa = (a, e) => ({
  params: js(a.params, ((s) => h(s, e))),
  messages: Rs(a.messages, ((s) => h(s, e))),
  basic: Fs(a.basic, ((s) => h(s, e))),
  commands: Ps(a.commands, ((s) => h(s, e)))
}), Fs = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ps = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], js = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Rs = (a, e) => ({
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
}), Ks = (a, e) => ({
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
const O = (a, e, s, t) => {
  const r = a[e];
  if (!s(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!t(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Us = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === J), ((m) => m.code === L)))(a, e);
  return Ls(t) ? new na(L, t, s) : new Ra(t, s);
}, Ls = (a) => a.parameters[0] === "選択肢ヘルプ", _s = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === ea), ((m) => m.code === D)))(a, e);
  return new na(D, t, s);
}, qs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === R), ((m) => m.code === da)))(a, e);
  return new Ra(t, s);
}, Vs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === pa), ((m) => m.code === A)))(a, e);
  return new na(A, t, s);
}, Js = {
  [ea]: (a, e, s) => s.showMessage(_s(a, e), e, a),
  [R]: (a, e, s) => s.script(qs(a, e), e, a),
  [J]: (a, e, s) => s.comment(Us(a, e), e, a),
  [pa]: (a, e, s) => s.showScrollingText(Vs(a, e), e, a)
}, Ka = (a) => Js[a], Zt = (a) => Ua(a, (() => [])), X = (a, e) => Ua(a, e), Ua = (a, e) => a.flatMap(((s, t) => Gs(s, t, a, e))).filter(((s) => s !== null)), Gs = (a, e, s, t) => {
  if (a.code === P) return t(a);
  if (a.code === j) return ye(a);
  const r = Ka(a.code);
  if (r) {
    const n = r(s, e, zs);
    if (n !== void 0) return [n];
  }
  return a.code === V || a.code === _ || a.code === q ? ge(a) : null;
}, zs = { comment: (a) => ({
  code: J,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: D, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({ code: R, paramIndex: 0, value: e.getBodyText() }))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, Hs = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: X(a.list, e)
}), Os = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: X(s.list, e) }))), Xs = (a, e = () => []) => ({
  note: a.note,
  noteItems: ga(a.note),
  displayedName: a.displayName,
  events: Ys(a, e)
}), Ys = (a, e) => ta(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: X(s.list, e),
  note: r.note,
  noteItems: ga(r.note),
  name: r.name
}))), La = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), _a = (a) => a.kind === "struct", qa = (a) => a.attr.kind === "struct[]", Qs = (a) => Va[a.kind.replace("[]", "")].type === "number", Ws = (a) => Va[a.kind.replace("[]", "")].type === "string", $ = {
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
function Zs(a) {
  return at(a, ((e) => !0), ((e) => !0));
}
const at = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (_a(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (qa(o)) r.push(o);
    else if (La(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function et(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const st = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, tt = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), Ja = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ga(a, e, s, t) {
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
          objectSchema: et(u.scalars),
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
const rt = (a, e, s, t = Ja) => Ga(a.attr.struct, `${e}["${a.name}"]`, s, t), nt = (a, e, s, t = Ja) => Ga(a.attr.struct, `${e}["${a.name}"][*]`, s, t), mt = (a, e, s, t) => ((r) => _a(r.attr))(s) ? ct(a, s, t) : qa(s) ? lt(a, s, t) : La(s) ? ot(a, e, s) : it(a, e, s), ot = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), it = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ct = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: rt(e, "$", s)
}), lt = (a, e, s) => ({
  structArrays: nt(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), dt = (a, e) => e.map(((s) => pt(a, s))).flat(3), pt = (a, e) => [e.top ? W(e, a, e.top, "") : [], e.structs.map(((s) => W(e, a, s))), e.structArrays.map(((s) => W(e, a, s)))], W = (a, e, s, t = s.bundleName) => {
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
    return Ws(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, l, i, c.schema) : Qs(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: p.rootName, rootType: p.rootCategory, value: y, structName: g, param: u }))))(o, l, i, c.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, Z = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: oa(a.scalarArrays, a.name, e), scalar: ut(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: oa(a.scalarArrays, a.name, e)
}, oa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), ut = (a, e, s) => ({ jsonPathJS: s(a), record: e }), gt = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: yt(e, s, t)
}), yt = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? Z(r.scalars, n) : void 0, o = r.structs.items.map(((d) => Z(d, n))), i = r.structArrays.items.map(((d) => Z(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(mt("args", a.command, t, e), s))), ht = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, Zs(r.params)]))))(a.schema.structs);
  return ft(a.pluginName, a.schema.commands, s, e);
}, ft = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, gt(a, r, s, t)])), vt = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: dt(m, o.extractors) }))(ie(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, ar = (a) => {
  const e = new Map(a);
  return new ma(e);
}, er = () => new ma(/* @__PURE__ */ new Map()), sr = (a) => {
  const e = a.flatMap(((s) => ht(s, ((t) => new oe(t)))));
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
    return Xs(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return Os(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return Hs(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = vt(e, this._commandMap);
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
  extractCommandTexts(e) {
    return X(e, ((s) => this.extractArgs(s)));
  }
}
const bt = (a) => typeof a.value == "string", tr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), rr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], nr = (a, e, s, t, r, n) => [...ae(s, t), ...ee(a, e), ...se(r, n)], mr = (a, e) => ua(re(e), a), or = (a, e, s) => {
  const t = te(e);
  return ua(s ? [...t, ...s] : t, a);
}, xt = (a, e, s, t) => {
  if (a.code === D || a.code === A || a.code === L) return;
  const r = Ka(a.code);
  return r ? r(s, e, t) : a.code === j ? Nt(a) : a.code === _ || a.code === V || a.code === q ? Tt(a) : a.code !== da ? a : void 0;
}, Nt = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Tt = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), kt = (a) => ({ code: R, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), It = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: D,
    indent: a.header.indent,
    parameters: [e]
  };
  return [Mt(a.header), s];
}, wt = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, Mt = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, K = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: kt, showMessage: It, showScrollingText: wt };
    return t.map(((n, m) => n.code === P ? n : xt(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === P ? e.pluginCommand(t) : t.code === R ? e.scriptCommand(t) : Bs(t, s)));
}, St = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: K(s.list, e) })))
}), ir = (a, e) => {
  const s = {
    pluginCommand: (t) => t,
    scriptCommand: (t) => t,
    replaceText: e
  };
  return { members: a.members, id: a.id, name: a.name, pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: K(t.list, s) }))) };
}, Bt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: K(a.list, e)
}), cr = (a, e) => ({ id: a.id, name: a.name, trigger: a.trigger, switchId: a.switchId, list: K(a.list, {
  pluginCommand: (s) => s,
  scriptCommand: (s) => s,
  replaceText: e
}) }), lr = (a, e) => za(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), Ct = (a, e) => za(a, e), za = (a, e) => ({
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
}), Et = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((s) => ks(s, e))),
  armors: k(a.armors, ((s) => Q(s, e))),
  classes: k(a.classes, ((s) => ws(s, e))),
  commonEvents: k(a.commonEvents, ((s) => Bt(s, e))),
  enemies: k(a.enemies, ((s) => Is(s, e))),
  items: k(a.items, ((s) => Q(s, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((s) => Ms(s, e))),
  states: k(a.states, ((s) => Ss(s, e))),
  system: { message: a.system.message, system: a.system.system ? Ks(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((s) => St(s, e))),
  weapons: k(a.weapons, ((s) => Q(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: Ct(s.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), dr = (a, e, s, t) => {
  const r = ka(a, s), n = Ma(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = $t(n.nonTextNoteKeys, t);
  return Et(a, m);
}, $t = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Q as $,
  vt as A,
  E as B,
  fe as C,
  ge as D,
  ke as E,
  be as F,
  ve as G,
  Zt as H,
  X as I,
  Ne as J,
  ka as K,
  xe as L,
  Ie as M,
  Be as N,
  Te as O,
  ye as P,
  Jt as Q,
  Ve as R,
  Je as S,
  Ze as T,
  _t as U,
  Lt as V,
  ys as W,
  H as X,
  ps as Y,
  us as Z,
  ks as _,
  Ma as a,
  Bs as a0,
  ws as a1,
  Bt as a2,
  cr as a3,
  Ht as a4,
  Is as a5,
  K as a6,
  Da as a7,
  Ct as a8,
  zt as a9,
  lr as aa,
  Ds as ab,
  Qt as ac,
  Fa as ad,
  Et as ae,
  dr as af,
  Ms as ag,
  Ss as ah,
  Wt as ai,
  Ks as aj,
  Ts as ak,
  St as al,
  ir as am,
  Ot as an,
  z as ao,
  wa as ap,
  Ea as aq,
  qt as b,
  nr as c,
  ta as d,
  or as e,
  mr as f,
  Me as g,
  B as h,
  we as i,
  gs as j,
  ds as k,
  Vt as l,
  er as m,
  ar as n,
  sr as o,
  Gt as p,
  Os as q,
  Hs as r,
  rr as s,
  tr as t,
  ls as u,
  $a as v,
  Xt as w,
  Yt as x,
  Xs as y,
  he as z
};
