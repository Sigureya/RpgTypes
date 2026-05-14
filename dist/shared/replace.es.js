import { as as P, b as ia, q as ca, N as la, v as L, E as _, w as q, aS as A, P as U, Q as V, aP as D, aM as j, aO as ea, az as da, ay as R, aR as pa } from "./eventCommandCodes.es.js";
import { n as J, m as ua } from "./normalText.es.js";
import { aZ as Ha, aU as Ya, av as Xa, aV as Za, ba as Wa, bb as Qa, aO as ae, b3 as E, b2 as ee, aY as ga, aD as se, az as te, aA as re, b4 as ne, b5 as me } from "./namedItems.es.js";
import { l as K, a as ya, i as ha, f as fa, c as va, e as ba, d as xa, j as Na, b as Ta, h as oe, g as ie } from "./system.es.js";
import { JSONPathJS as ce } from "jsonpath-js";
import { parseDeepRecord as le } from "@sigureya/rmmz-plugin-schema";
import { m as de } from "./make.es.js";
import { t as pe, F as ue, E as ge, B as ye } from "./makeSystemEx.es.js";
const he = (a) => ((e, s) => ({
  code: e.code,
  paramIndex: s,
  value: e.parameters[s]
}))(a, 1), fe = (a) => a.parameters[0].map(((e, s) => ({ code: 102, paramIndex: s, value: e }))), C = (a, e) => ({
  id: a.id,
  name: a.name,
  note: ve(a),
  main: e.map(((s) => ({ key: s, value: a[s], id: a.id })))
}), ve = (a) => Ha(a.note, ((e, s) => ({
  key: e,
  value: s,
  id: a.id
}))), be = (a) => C(a, ["name", "nickname", "profile"]), xe = (a) => C(a, ["name"]), Ne = (a) => C(a, ["name"]), Te = (a) => C(a, ["name", "description", "message1", "message2"]), ke = (a) => C(a, ["name", "description"]), Ie = (a) => C(a, ["name", "description"]), we = (a) => C(a, ["name", "description"]), Se = (a) => C(a, ["name", "message1", "message2", "message3", "message4"]), Me = (a, e, s, t) => B(a, e, {
  message1: s.state.message1,
  message2: s.state.message2,
  message3: s.state.message3,
  message4: s.state.message4,
  name: s.name,
  note: s.note
}, t), B = (a, e, s, t) => a.map(((r) => Be(r, e, s, t))), Be = (a, e, s, t) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = J(r.value);
  return {
    kind: s[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: t(n)
  };
})), note: Ee(a.note, e, s, t) }), Ee = (a, e, s, t) => a.map(((r) => ({
  kind: `${s.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: t(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Ce = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: ye(a.terms.basic),
  commands: ge(a.terms.commands),
  messages: ue(a.terms.messages),
  params: pe(a.terms.params)
} }), ka = (a, e) => {
  const s = N(a.actors, be), t = Fe(a.armors), r = N(a.classes, Ne), n = N(a.enemies, xe), m = N(a.items, ke), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, Te), c = N(a.states, Se), l = N(a.weapons, Ie), d = Pe(a.commonEvents, e), f = je(a.troops, e), p = Re(a.mapFiles, e), T = $e(a.system), g = Ae([s, t, r, n, m, o, i, c, l, f, d]).concat(De(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: d.data, troops: f.data.flat() }, mapFiles: p, system: T, mainData: {
    actors: s.data,
    armors: t.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: g };
}, $e = (a) => ({ message: a.message, system: a.system ? Ce(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), Ae = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), De = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message }))), ...e.system === null ? [{
  fileName: K,
  error: e.message
}] : []], Fe = (a) => N(a, we), Pe = (a, e) => N(a, ((s) => e.extractCommonEventText(s))), je = (a, e) => N(a, ((s) => e.extractBattleText(s))), Re = (a, e) => {
  const s = a.validMaps.map(((t) => ({
    editingName: t.editingName,
    filename: t.filename,
    map: e.extractMapTexts(t.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: s };
}, sa = (a, e, s, t, r, n) => {
  if (a.code === P) return Ue(a, e, s, r, n);
  const m = J(a.value);
  return { otherData: n, uuid: r(m), kind: t(a), baseText: m, filename: s, id: e, speaker: a.speaker ?? "", dataKey: Ke(a) };
}, Ke = (a) => `code:${a.code}`, Ue = (a, e, s, t, r) => {
  const n = J(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: t(n),
    kind: `${Le(a)}`,
    baseText: n,
    filename: s,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Le = (a) => `${a.commandName}.${a.argTitle}`, _e = (a, e, s, t) => e.flatMap(((r) => qe(a, r, s, t))), qe = (a, e, s, t) => e.commands.filter(Ia).map(((r) => sa(r, e.eventId, a, t, s, [e.name]))), Ve = (a, e, s, t) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => sa(m, r.eventId, e, s, t, [n])));
})), Ia = (a) => a.value.length > 0, Je = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, ze = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, Ge = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, z = (a) => {
  const e = a.filter(((s) => s.kinds.length === 0)).map(((s) => s.key));
  return new Set(e);
}, wa = (a, e) => {
  const s = Oe(a);
  return Array.from(s.entries()).map((([t, r]) => {
    const n = Xe(r, e);
    return {
      key: t,
      kinds: Ye(n),
      values: r.map(He)
    };
  }));
}, Oe = (a) => {
  const e = a.flatMap(((s) => s.notes.map(((t) => ({ key: t.key, value: t.value, id: t.id, name: t.name, soruce: s.source })))));
  return Map.groupBy(e, ((s) => s.key));
}, He = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), Ye = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), Xe = (a, { audioFiles: e, imageFiles: s, otherFiles: t }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ze(n.value),
  isNumber: r.isNumber && Ge(n.value),
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
}), as = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((s) => {
  const t = s.note.filter(e);
  return { main: s.main, note: t, id: s.id, name: s.name };
})).filter(es), es = (a) => a.note.length > 0 || a.main.length > 0, Sa = (a, e) => {
  const s = rs(a.value.mainData, e), t = ns(a.value.mapFiles.validMaps, e);
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
}, zt = (a, e) => {
  const s = Ca(a, e), t = z(s);
  return Ba(a, t);
}, ss = (a, e) => {
  const s = Ea(a, e);
  return z(s);
}, Gt = (a, e) => {
  const s = ss(a, e);
  return Ma(a, s);
}, Ba = (a, e) => a.map(((s) => {
  return { filename: s.filename, editingName: s.editingName, map: (t = s.map, r = (n) => e.has(n.key), {
    displayedName: t.displayedName,
    note: t.note,
    noteItems: t.noteItems.filter(r),
    events: t.events.map(((n) => as(n, r)))
  }) };
  var t, r;
})), Ea = (a, e) => {
  const s = ts(a);
  return wa(s, e);
}, ts = (a) => [M(ya, a.actors), M(ha, a.skills), M(fa, a.items), M(va, a.weapons), M(ba, a.armors), M(xa, a.classes), M(Na, a.states), M(Ta, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((s) => s.note.map(((t) => ({ key: t.key, value: t.value, id: t.id, name: s.name })))))
}), Ca = (a, e) => {
  const s = a.map(Ze);
  return wa(s, e);
}, rs = (a, e) => {
  const s = Ea(a, e), t = z(s);
  return {
    noteSummary: s,
    nonTextNoteKeys: t,
    mainData: Ma(a, t)
  };
}, ns = (a, e) => {
  const s = Ca(a, e), t = z(s);
  return { noteSummary: s, validMaps: Ba(a, t) };
}, ms = (a, e, s, t) => [{
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
  const o = J(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: t, dataKey: s };
})), Ot = (a, e, s, t, r, n) => {
  const m = ka(a.data, n), o = Sa(m, a);
  return is(a.data.actors.data, o, e, s, t, r);
}, os = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], is = (a, e, s, t, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: c } = e.data.value;
  return {
    noteSummaries: os(e),
    pluginParams: [],
    map: cs(i, r, n),
    commonEvents: _e(oe, m.commonEvents, r, n),
    troops: Ve(m.troops, ie, n, r),
    armors: B(o.armors, ba, t, r),
    system: ds(c, r, s),
    actors: { texts: B(o.actors, ya, t, r), controlChars: Xa(a) },
    classes: B(o.classes, xa, t, r),
    enemies: B(o.enemies, Ta, t, r),
    items: B(o.items, fa, t, r),
    skills: B(o.skills, ha, t, r),
    states: Me(o.states, Na, t, r),
    weapons: B(o.weapons, va, t, r)
  };
}, cs = (a, e, s) => a.validMaps.map(((t) => ls(t, e, s))).flat(3), ls = (a, e, s) => a.map.events.map(((t) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = Je(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => sa(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(t, a, e, s))), ds = (a, e, s) => a.system === null ? { gameTitle: "", filename: K, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: K,
  texts: ms(a.system, K, s, e)
}, $a = (a, e, s) => a.filter(((t) => t.code === ia || t.code === ca || t.code === la)).map(((t) => us(t, e, s))), ps = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, us = (a, e, s) => {
  const t = Za(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === Wa ? e.gain : a.parameters[1] === Qa ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: ps[a.code],
    dataId: ae(a),
    code: a.code,
    commandNameMZ: s(a.code),
    operation: r,
    ...n,
    ...t
  };
}, Aa = (a) => !!a, Ht = (a, e, s) => ({ data: a, eventId: e, pageIndex: s }), gs = (a, e, s) => a.list.map(((t) => ({
  data: t,
  eventId: s.id,
  pageIndex: e
}))), G = (a, e) => a.pages.map(((s, t) => e(s, t, a))), ys = (a, e) => a.events.filter(Aa).map(((s) => G(s, e))), ta = (a, e) => a.events.filter(Aa).flatMap(((s) => G(s, e))), hs = (a, e) => a.map(((s) => G(s, e))), fs = (a, e) => a.flatMap(((s) => G(s, e))), vs = (a, e) => a.map(((s) => e(s, 0, s))), Yt = (a) => ys(a, gs).flat(2), bs = (a, e, s, t, r) => {
  const n = xs(a, e, s, t), m = Array.from(n).map(((i) => ({ key: r.hashText(i), value: i }))), o = m.map(((i) => {
    const c = r.newText(i.value);
    return { key: r.hashText(c), value: c };
  }));
  return [...m, ...o];
}, xs = (a, e, s, t) => {
  const r = Ns(a), n = t.map(Ts), m = ks(e), o = Is(s);
  return new Set([r, m, o, n].flat(4));
}, Ns = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), Ts = (a) => ta(a, ra), ks = (a) => vs(a, ra), Is = (a) => hs(a, ra), ra = ({ list: a }) => a.filter(ws).map(((e) => e.parameters[1])), ws = (a) => a.code === L || a.code === _ || a.code === q, Da = (a, e) => {
  const s = e(a.list);
  return { ...a, list: s };
}, Fa = (a, e) => ({ ...a, pages: a.pages.map(((s) => Da(s, e))) }), Xt = (a, e) => ({
  ...a,
  events: a.events.map(((s) => s ? Fa(s, e) : null))
}), Zt = (a, e) => a.map(((s) => Da(s, e))), Wt = (a, e) => a.map(((s) => Fa(s, e))), Qt = (a, e, s) => ta(a.map, ((t, r, n) => ({
  ...Ss(t),
  commands: $a(t.list, e, s),
  eventName: n.name,
  pageIndex: r
}))), Ss = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, ar = (a, e, s) => fs(a, ((t, r, n) => ({
  commands: $a(t.list, e, s),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Ms = (a, e) => {
  const s = a.trimEnd(), t = e.get(s);
  return t ? t.trimEnd() : s;
}, h = (a, e) => {
  const s = a.trimEnd(), t = e(s);
  return t ? t.trimEnd() : s;
}, v = (a, e) => {
  const s = a.trimEnd(), t = e.replaceText(s);
  return t ? t.trimEnd() : s;
}, Bs = (a, e) => {
  const s = (o) => e.replaceText(o), t = E(a.note, e), r = h(a.name, s), n = h(a.nickname, s), m = h(a.profile, s);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: t
  };
}, Es = (a, e) => {
  const s = E(a.note, e), t = v(a.name, e);
  return { ...a, name: t, note: s };
}, Cs = (a, e) => {
  const s = E(a.note, e), t = v(a.name, e);
  return {
    ...a,
    name: t,
    note: s
  };
}, $s = (a, e) => {
  const s = E(a.note, e), t = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: t, description: r, message1: n, message2: m, note: s };
}, Z = (a, e) => {
  const s = E(a.note, e), t = v(a.name, e), r = v(a.description, e);
  return { ...a, name: t, description: r, note: s };
}, As = (a, e) => {
  const s = E(a.note, e), t = v(a.name, e), r = v(a.message1, e), n = v(a.message2, e), m = v(a.message3, e), o = v(a.message4, e);
  return {
    ...a,
    name: t,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: s
  };
}, Ds = (a, e) => {
  switch (a.code) {
    case ea:
      return Ps(a, e);
    case j:
      return Rs(a, e);
    case D:
    case V:
    case U:
    case A:
      return Fs(a, e);
    case L:
    case q:
    case _:
      return js(a, e);
    default:
      return a;
  }
}, Fs = (a, e) => {
  const s = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [s] };
}, Ps = (a, e) => {
  const s = a.parameters[4] ? h(a.parameters[4], e) : "";
  return de({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: s
  }, a.indent);
}, js = (a, e) => {
  const s = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], s] };
}, Rs = (a, e) => {
  const s = a.parameters[0].map(((t) => h(t, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [s, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, er = (a, e, s = `
`) => Ks(a, ((t) => e.get(t)), s), Ks = (a, e, s = `
`) => ee(a.note, ((t) => h(t.value, e)), s), sr = (a, e) => Pa(a, ((s) => Ms(s, e))), Pa = (a, e) => ({
  params: _s(a.params, ((s) => h(s, e))),
  messages: qs(a.messages, ((s) => h(s, e))),
  basic: Us(a.basic, ((s) => h(s, e))),
  commands: Ls(a.commands, ((s) => h(s, e)))
}), Us = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ls = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], _s = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], qs = (a, e) => ({
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
}), Vs = (a, e) => ({
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
}, Js = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === V), ((m) => m.code === U)))(a, e);
  return zs(t) ? new na(U, t, s) : new Ra(t, s);
}, zs = (a) => a.parameters[0] === "選択肢ヘルプ", Gs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === ea), ((m) => m.code === D)))(a, e);
  return new na(D, t, s);
}, Os = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === R), ((m) => m.code === da)))(a, e);
  return new Ra(t, s);
}, Hs = (a, e) => {
  const { bodies: s, header: t } = ((r, n) => O(r, n, ((m) => m.code === pa), ((m) => m.code === A)))(a, e);
  return new na(A, t, s);
}, Ys = {
  [ea]: (a, e, s) => s.showMessage(Gs(a, e), e, a),
  [R]: (a, e, s) => s.script(Os(a, e), e, a),
  [V]: (a, e, s) => s.comment(Js(a, e), e, a),
  [pa]: (a, e, s) => s.showScrollingText(Hs(a, e), e, a)
}, Ka = (a) => Ys[a], Xs = (a, e, s, t) => {
  if (a.code === D || a.code === A || a.code === U) return;
  const r = Ka(a.code);
  return r ? r(s, e, t) : a.code === j ? Zs(a) : a.code === L || a.code === q || a.code === _ ? Ws(a) : a.code !== da ? a : void 0;
}, Zs = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ws = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Qs = (a) => ({ code: R, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), at = (a) => {
  const e = a.getBodyText().trimEnd(), s = {
    code: D,
    indent: a.header.indent,
    parameters: [e]
  };
  return [st(a.header), s];
}, et = (a) => {
  const e = a.getBodyText().trimEnd(), s = { code: A, indent: a.header.indent, parameters: [e] };
  return [a.header, s];
}, st = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, H = (a, e) => {
  const s = (t) => e.replaceText(t);
  return ((t) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Qs, showMessage: at, showScrollingText: et };
    return t.map(((n, m) => n.code === P ? n : Xs(n, m, t, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((t) => t.code === P ? e.pluginCommand(t) : t.code === R ? e.scriptCommand(t) : Ds(t, s)));
}, tt = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((s) => ({ conditions: s.conditions, span: s.span, list: H(s.list, e) })))
}), rt = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, e)
}), tr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: H(a.list, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e })
}), rr = (a, e) => Ua(a, { pluginCommand: (s) => s, scriptCommand: (s) => s, replaceText: e, isReplaceTargetNote: () => !1 }), nt = (a, e) => Ua(a, e), Ua = (a, e) => ({
  note: E(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((s) => s ? ((t, r) => ({ id: t.id, name: t.name, x: t.x, y: t.y, note: E(t.note, r), pages: t.pages.map(((n) => ({ ...n, list: H(n.list, r) }))) }))(s, e) : null)),
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
}), nr = (a) => La(a, (() => [])), Y = (a, e) => La(a, e), La = (a, e) => a.flatMap(((s, t) => mt(s, t, a, e))).filter(((s) => s !== null)), mt = (a, e, s, t) => {
  if (a.code === P) return t(a);
  if (a.code === j) return fe(a);
  const r = Ka(a.code);
  if (r) {
    const n = r(s, e, ot);
    if (n !== void 0) return [n];
  }
  return a.code === q || a.code === L || a.code === _ ? he(a) : null;
}, ot = { comment: (a) => ({
  code: V,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: D, paramIndex: 0, value: (e = a).getBodyText(), speaker: (s = e.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var e, s;
}, script: (a) => ((e) => ({
  code: R,
  paramIndex: 0,
  value: e.getBodyText()
}))(a), showScrollingText: (a) => ((e) => ({ code: A, paramIndex: 0, value: e.getBodyText() }))(a) }, it = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, e)
}), ct = (a, e = () => []) => a.pages.map(((s, t) => ({ eventId: a.id, pageIndex: t, commands: Y(s.list, e) }))), lt = (a, e = () => []) => ({
  note: a.note,
  noteItems: ga(a.note),
  displayedName: a.displayName,
  events: dt(a, e)
}), dt = (a, e) => ta(a, ((s, t, r) => ({
  eventId: r.id,
  pageIndex: t,
  commands: Y(s.list, e),
  note: r.note,
  noteItems: ga(r.note),
  name: r.name
}))), _a = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), qa = (a) => a.kind === "struct", Va = (a) => a.attr.kind === "struct[]", pt = (a) => Ja[a.kind.replace("[]", "")].type === "number", ut = (a) => Ja[a.kind.replace("[]", "")].type === "string", $ = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, b = { type: "number", hasText: !1 }, Ja = {
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
function gt(a) {
  return yt(a, ((e) => !0), ((e) => !0));
}
const yt = (a, e, s) => {
  const t = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (qa(o.attr)) t.push({ name: o.name, attr: o.attr });
    else if (Va(o)) r.push(o);
    else if (_a(o)) {
      if (s(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: t, structArrays: r, scalars: n, scalarArrays: m };
};
function ht(a) {
  const e = a.map(((s) => [s.name, s.attr]));
  return Object.fromEntries(e);
}
const ft = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((s) => `"${s.name}"`)).join(",")}]`;
}, vt = (a, e) => a.map(((s) => ({ path: `${e}["${s.name}"][*]`, param: s }))), za = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ga(a, e, s, t) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * s.size + 5), m = Array.from({
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
    const T = (function(g, u) {
      const y = g.ancestry.concat(g.schemaName), I = g.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${I}["${w.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${I}["${w.name}"][*]`, ancestry: y })))].reverse();
    })(d, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: I }) {
        return {
          category: "struct",
          objectSchema: ht(u.scalars),
          name: I,
          scalarArrays: vt(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? ft(u.scalars, y) : void 0
        };
      })(p, { path: d.basePath, structName: d.schemaName });
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
const bt = (a, e, s, t = za) => Ga(a.attr.struct, `${e}["${a.name}"]`, s, t), xt = (a, e, s, t = za) => Ga(a.attr.struct, `${e}["${a.name}"][*]`, s, t), Nt = (a, e, s, t) => ((r) => qa(r.attr))(s) ? It(a, s, t) : Va(s) ? wt(a, s, t) : _a(s) ? Tt(a, e, s) : kt(a, e, s), Tt = (a, e, s) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${s.name}"][*]`, param: s }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), kt = (a, e, s) => ({ rootCategory: a, rootName: e, scalars: { name: s.attr.kind, objectSchema: { [s.name]: s.attr }, scalarsPath: `$["${s.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), It = (a, e, s) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: bt(e, "$", s)
}), wt = (a, e, s) => ({
  structArrays: xt(e, "$", s),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), St = (a, e) => e.map(((s) => Mt(a, s))).flat(3), Mt = (a, e) => [e.top ? W(e, a, e.top, "") : [], e.structs.map(((s) => W(e, a, s))), e.structArrays.map(((s) => W(e, a, s)))], W = (a, e, s, t = s.bundleName) => {
  const r = s.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: f }) => ((p, T, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const I = u[u.length - 1];
    if (typeof I == "number") return null;
    const w = y[I];
    return w ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: g, param: { name: I, attr: w } } : null;
  })(m, o, d, f, l))).filter(((d) => d !== null)))(a, t, e, s.scalar.jsonPathJS, s.scalar.record) : [], n = s.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const f = l.schema.attr;
    return ut(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, d, i, l.schema) : pt(f) ? ((p, T, g, u) => T.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: p.rootName, rootType: p.rootCategory, value: y, structName: g, param: u }))))(o, d, i, l.schema) : [];
  })(a, t, e, m)));
  return [r, n].flat(2);
}, Q = (a, e) => a.scalarsPath ? { bundleName: a.name, arrays: oa(a.scalarArrays, a.name, e), scalar: Bt(a.scalarsPath, a.objectSchema, e) } : {
  bundleName: a.name,
  arrays: oa(a.scalarArrays, a.name, e)
}, oa = (a, e, s) => a.map(((t) => ({ jsonPathJS: s(t.path), schema: t.param, parentType: e }))), Bt = (a, e, s) => ({ jsonPathJS: s(a), record: e }), Et = (a, e, s, t) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Ct(e, s, t)
}), Ct = (a, e, s) => a.args.map(((t) => ((r, n) => {
  const m = r.scalars ? Q(r.scalars, n) : void 0, o = r.structs.items.map(((c) => Q(c, n))), i = r.structArrays.items.map(((c) => Q(c, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Nt("args", a.command, t, e), s))), $t = (a, e) => {
  const s = ((t) => new Map(t.map(((r) => [r.struct, gt(r.params)]))))(a.schema.structs);
  return At(a.pluginName, a.schema.commands, s, e);
}, At = (a, e, s, t) => e.map(((r) => [`${a}:${r.command}`, Et(a, r, s, t)])), Dt = (a, e) => {
  const [s, t] = a.parameters, r = `${s}:${t}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: St(m, o.extractors) }))(le(a.parameters[3]), n) : { pluginName: s, commandName: t, args: [] };
}, mr = (a) => {
  const e = new Map(a);
  return new ma(e);
}, or = () => new ma(/* @__PURE__ */ new Map()), ir = (a) => {
  const e = a.flatMap(((s) => $t(s, ((t) => new ce(t)))));
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
    return lt(e, ((s) => this.extractArgs(s)));
  }
  extractBattleText(e) {
    return ct(e, ((s) => this.extractArgs(s)));
  }
  extractCommonEventText(e) {
    return it(e, ((s) => this.extractArgs(s)));
  }
  extractArgs(e) {
    const s = Dt(e, this._commandMap);
    return s.args.filter(Ft).map(((t) => ({
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
const Ft = (a) => typeof a.value == "string", cr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, s) => ({
  folder: s,
  key: e,
  image: a[e],
  id: a.id
}), lr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], dr = (a, e, s, t, r, n) => [...se(s, t), ...te(a, e), ...re(r, n)], pr = (a, e) => ua(me(e), a), ur = (a, e, s) => {
  const t = ne(e);
  return ua(s ? [...t, ...s] : t, a);
}, gr = (a, e, s, t, r) => ({ main: Oa(a, e, s, t), aux: {
  actorTextDictionary: bs(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((n) => n.map)), { newText: (n) => t.replaceText(n) ?? n, hashText: (n) => r(n) })
} }), Pt = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((s) => Bs(s, e))),
  armors: k(a.armors, ((s) => Z(s, e))),
  classes: k(a.classes, ((s) => Cs(s, e))),
  commonEvents: k(a.commonEvents, ((s) => rt(s, e))),
  enemies: k(a.enemies, ((s) => Es(s, e))),
  items: k(a.items, ((s) => Z(s, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((s) => $s(s, e))),
  states: k(a.states, ((s) => As(s, e))),
  system: { message: a.system.message, system: a.system.system ? Vs(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((s) => tt(s, e))),
  weapons: k(a.weapons, ((s) => Z(s, e))),
  mapFiles: { info: a.mapFiles.info, invalidMaps: a.mapFiles.invalidMaps, validMaps: a.mapFiles.validMaps.map(((s) => ({
    filename: s.filename,
    editingName: s.editingName,
    map: nt(s.map, e)
  }))) }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), yr = ({ assetBundle: a, data: e, dictionary: s, textKeys: t }, r) => Oa(e, a, r, {
  replaceText: (n) => s.get(n),
  pluginCommand: (n) => n,
  scriptCommand: (n) => n,
  isReplaceTargetNote: (n) => t.has(n.key)
}), Oa = (a, e, s, t) => {
  const r = ka(a, s), n = Sa(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = jt(n.nonTextNoteKeys, t);
  return Pt(a, m);
}, jt = (a, e) => ({
  pluginCommand: (s) => e.pluginCommand(s),
  scriptCommand: (s) => e.scriptCommand(s),
  replaceText: (s) => e.replaceText(s),
  isReplaceTargetNote: (s) => !!a.has(s.key) && e.isReplaceTargetNote(s)
});
export {
  Bs as $,
  ve as A,
  Dt as B,
  C,
  be as D,
  he as E,
  we as F,
  Ne as G,
  xe as H,
  nr as I,
  Y as J,
  ke as K,
  ka as L,
  Te as M,
  Se as N,
  Ce as O,
  Ie as P,
  fe as Q,
  Yt as R,
  ze as S,
  Ge as T,
  ss as U,
  Gt as V,
  zt as W,
  vs as X,
  G as Y,
  ys as Z,
  hs as _,
  Sa as a,
  Z as a0,
  Ds as a1,
  Cs as a2,
  rt as a3,
  tr as a4,
  Zt as a5,
  Es as a6,
  H as a7,
  Da as a8,
  gr as a9,
  nt as aa,
  Xt as ab,
  rr as ac,
  Ks as ad,
  er as ae,
  Fa as af,
  Pt as ag,
  Oa as ah,
  yr as ai,
  $s as aj,
  As as ak,
  sr as al,
  Vs as am,
  Ms as an,
  tt as ao,
  Wt as ap,
  z as aq,
  wa as ar,
  Ca as as,
  Ot as b,
  dr as c,
  ta as d,
  ur as e,
  pr as f,
  Be as g,
  B as h,
  Me as i,
  fs as j,
  bs as k,
  gs as l,
  Ht as m,
  or as n,
  mr as o,
  ir as p,
  xs as q,
  ct as r,
  it as s,
  lr as t,
  cr as u,
  us as v,
  $a as w,
  Qt as x,
  ar as y,
  lt as z
};
