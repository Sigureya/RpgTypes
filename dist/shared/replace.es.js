import { as as K, b as ia, q as ca, N as la, v as q, E as V, w as J, aS as D, P as _, Q as z, aP as F, aM as R, aO as ea, az as da, ay as j, aR as pa } from "./makeAudio.es.js";
import { n as G, m as ua } from "./normalText.es.js";
import { aZ as te, aU as se, av as re, aV as ne, ba as me, bb as oe, aO as ie, b3 as C, b2 as ce, aY as ya, aD as le, az as de, aA as pe, b4 as ue, b5 as ye } from "./namedItems.es.js";
import { l as L, a as ga, i as ha, f as fa, c as va, e as xa, d as ba, j as Na, b as Ta, h as ge, g as he } from "./constants.es.js";
import { JSONPathJS as fe } from "jsonpath-js";
import { parseDeepRecord as ve } from "@sigureya/rmmz-plugin-schema";
import { k as xe, v as be, u as Ne, r as Te, a as ke } from "./makeSystem.es.js";
import { r as ka, F as we, a as Ie } from "./writeData.es.js";
const Se = (a) => ((e, t) => ({ code: e.code, paramIndex: t, value: e.parameters[t] }))(a, 1), Me = (a) => a.parameters[0].map(((e, t) => ({
  code: 102,
  paramIndex: t,
  value: e
}))), E = (a, e) => ({ id: a.id, name: a.name, note: Be(a), main: e.map(((t) => ({ key: t, value: a[t], id: a.id }))) }), Be = (a) => te(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Ce = (a) => E(a, ["name", "nickname", "profile"]), Ee = (a) => E(a, ["name"]), Ae = (a) => E(a, ["name"]), $e = (a) => E(a, ["name", "description", "message1", "message2"]), De = (a) => E(a, ["name", "description"]), Fe = (a) => E(a, ["name", "description"]), Pe = (a) => E(a, ["name", "description"]), Ke = (a) => E(a, ["name", "message1", "message2", "message3", "message4"]), Re = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => je(r, e, t, s))), je = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = G(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: Ue(a.note, e, t, s) }), Ue = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Le = (a) => ({ gameTitle: a.gameTitle, currencyUnit: a.currencyUnit, equipTypes: [...a.equipTypes], armorTypes: [...a.armorTypes], weaponTypes: [...a.weaponTypes], terms: {
  basic: Te(a.terms.basic),
  commands: Ne(a.terms.commands),
  messages: be(a.terms.messages),
  params: xe(a.terms.params)
} }), wa = (a, e) => {
  const t = N(a.actors, Ce), s = Je(a.armors), r = N(a.classes, Ae), n = N(a.enemies, Ee), m = N(a.items, De), o = N(a.mapInfos, ((u) => u)), i = N(a.skills, $e), c = N(a.states, Ke), l = N(a.weapons, Fe), d = ze(a.commonEvents, e), f = Ge(a.troops, e), p = Oe(a.mapFiles, e), T = _e(a.system), y = qe([t, s, r, n, m, o, i, c, l, f, d]).concat(Ve(a.mapFiles, a.system));
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
}, _e = (a) => ({ message: a.message, system: a.system ? Le(a.system) : null }), N = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), qe = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), Ve = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: L,
  error: e.message
}] : []], Je = (a) => N(a, Pe), ze = (a, e) => N(a, ((t) => e.extractCommonEventText(t))), Ge = (a, e) => N(a, ((t) => e.extractBattleText(t))), Oe = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ta = (a, e, t, s, r, n) => {
  if (a.code === K) return Ye(a, e, t, r, n);
  const m = G(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: He(a) };
}, He = (a) => `code:${a.code}`, Ye = (a, e, t, s, r) => {
  const n = G(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: s(n),
    kind: `${Xe(a)}`,
    baseText: n,
    filename: t,
    id: e,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Xe = (a) => `${a.commandName}.${a.argTitle}`, Ze = (a, e, t, s) => e.flatMap(((r) => Qe(a, r, t, s))), Qe = (a, e, t, s) => e.commands.filter(Ia).map(((r) => ta(r, e.eventId, a, s, t, [e.name]))), We = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ta(m, r.eventId, e, t, s, [n])));
})), Ia = (a) => a.value.length > 0, at = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, et = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, tt = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, U = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, Sa = (a, e) => {
  const t = st(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = mt(r, e);
    return {
      key: s,
      kinds: nt(n),
      values: r.map(rt)
    };
  }));
}, st = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: s.name, soruce: t.source })))));
  return Map.groupBy(e, ((t) => t.key));
}, rt = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), nt = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), mt = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && et(n.value),
  isNumber: r.isNumber && tt(n.value),
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
  isScript: r.isScript && se(n.value)
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
}), ot = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(ct), ...a.map.events.map(it).flat()]
}), it = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), ct = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), lt = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(dt), dt = (a) => a.note.length > 0 || a.main.length > 0, Ma = (a, e) => {
  const t = yt(a.value.mainData, e), s = gt(a.value.mapFiles.validMaps, e);
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
}, er = (a, e) => {
  const t = Aa(a, e), s = U(t);
  return Ca(a, s);
}, pt = (a, e) => {
  const t = Ea(a, e);
  return U(t);
}, tr = (a, e) => {
  const t = pt(a, e);
  return Ba(a, t);
}, Ca = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => lt(n, r)))
  }) };
  var s, r;
})), Ea = (a, e) => {
  const t = ut(a);
  return Sa(t, e);
}, ut = (a) => [M(ga, a.actors), M(ha, a.skills), M(fa, a.items), M(va, a.weapons), M(xa, a.armors), M(ba, a.classes), M(Na, a.states), M(Ta, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Aa = (a, e) => {
  const t = a.map(ot);
  return Sa(t, e);
}, yt = (a, e) => {
  const t = Ea(a, e), s = U(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ba(a, s)
  };
}, gt = (a, e) => {
  const t = Aa(a, e), s = U(t);
  return { noteSummary: t, validMaps: Ca(a, s) };
}, ht = (a, e, t, s) => [{
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
}, ...Z(e, a.equipTypes, "equipTypes", t.equipTypes, s), ...Z(e, a.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Z(e, a.armorTypes, "armorTypes", t.armorTypes, s)], Z = (a, e, t, s, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = G(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), sr = (a, e, t, s, r, n) => {
  const m = wa(a.data, n), o = Ma(m, a);
  return vt(a.data.actors.data, o, e, t, s, r);
}, ft = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], vt = (a, e, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: c } = e.data.value;
  return {
    noteSummaries: ft(e),
    pluginParams: [],
    map: xt(i, r, n),
    commonEvents: Ze(ge, m.commonEvents, r, n),
    troops: We(m.troops, he, n, r),
    armors: B(o.armors, xa, s, r),
    system: Nt(c, r, t),
    actors: { texts: B(o.actors, ga, s, r), controlChars: re(a) },
    classes: B(o.classes, ba, s, r),
    enemies: B(o.enemies, Ta, s, r),
    items: B(o.items, fa, s, r),
    skills: B(o.skills, ha, s, r),
    states: Re(o.states, Na, s, r),
    weapons: B(o.weapons, va, s, r)
  };
}, xt = (a, e, t) => a.validMaps.map(((s) => bt(s, e, t))).flat(3), bt = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = at(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => ta(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, e, t))), Nt = (a, e, t) => a.system === null ? { gameTitle: "", filename: L, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: L,
  texts: ht(a.system, L, t, e)
}, $a = (a, e, t) => a.filter(((s) => s.code === ia || s.code === ca || s.code === la)).map(((s) => kt(s, e, t))), Tt = {
  [la]: "weapon",
  [ia]: "armor",
  [ca]: "item"
}, kt = (a, e, t) => {
  const s = ne(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === me ? e.gain : a.parameters[1] === oe ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: Tt[a.code],
    dataId: ie(a),
    code: a.code,
    commandNameMZ: t(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Da = (a) => !!a, rr = (a, e, t) => ({ data: a, eventId: e, pageIndex: t }), wt = (a, e, t) => a.list.map(((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: e
}))), O = (a, e) => a.pages.map(((t, s) => e(t, s, a))), It = (a, e) => a.events.filter(Da).map(((t) => O(t, e))), sa = (a, e) => a.events.filter(Da).flatMap(((t) => O(t, e))), St = (a, e) => a.map(((t) => O(t, e))), Mt = (a, e) => a.flatMap(((t) => O(t, e))), Bt = (a, e) => a.map(((t) => e(t, 0, t))), nr = (a) => It(a, wt).flat(2), Ct = (a, e, t, s, r) => {
  const n = Et(a, e, t, s), m = Array.from(n).map(((i) => ({ key: r.hashText(i), value: i }))), o = m.map(((i) => {
    const c = r.newText(i.value);
    return { key: r.hashText(c), value: c };
  }));
  return [...m, ...o];
}, Et = (a, e, t, s) => {
  const r = At(a), n = s.map($t), m = Dt(e), o = Ft(t);
  return new Set([r, m, o, n].flat(4));
}, At = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), $t = (a) => sa(a, ra), Dt = (a) => Bt(a, ra), Ft = (a) => St(a, ra), ra = ({ list: a }) => a.filter(Pt).map(((e) => e.parameters[1])), Pt = (a) => a.code === q || a.code === V || a.code === J, Fa = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Pa = (a, e) => ({ ...a, pages: a.pages.map(((t) => Fa(t, e))) }), mr = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Pa(t, e) : null))
}), or = (a, e) => a.map(((t) => Fa(t, e))), ir = (a, e) => a.map(((t) => Pa(t, e))), cr = (a, e, t) => sa(a.map, ((s, r, n) => ({
  ...Kt(s),
  commands: $a(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Kt = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, lr = (a, e, t) => Mt(a, ((s, r, n) => ({
  commands: $a(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Rt = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Ka = (a, e) => {
  const t = (o) => e.replaceText(o), s = C(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Ra = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, ja = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, Ua = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, $ = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e);
  return { ...a, name: s, description: r, note: t };
}, La = (a, e) => {
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
      return Lt(a, e);
    case R:
      return qt(a, e);
    case F:
    case z:
    case _:
    case D:
      return Ut(a, e);
    case q:
    case J:
    case V:
      return _t(a, e);
    default:
      return a;
  }
}, Ut = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Lt = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return ke({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, _t = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, qt = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: R,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, dr = (a, e, t = `
`) => Vt(a, ((s) => e.get(s)), t), Vt = (a, e, t = `
`) => ce(a.note, ((s) => h(s.value, e)), t), pr = (a, e) => _a(a, ((t) => Rt(t, e))), _a = (a, e) => ({
  params: Gt(a.params, ((t) => h(t, e))),
  messages: Ot(a.messages, ((t) => h(t, e))),
  basic: Jt(a.basic, ((t) => h(t, e))),
  commands: zt(a.commands, ((t) => h(t, e)))
}), Jt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], zt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Gt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Ot = (a, e) => ({
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
}), qa = (a, e) => ({
  ...a,
  gameTitle: h(a.gameTitle, e),
  currencyUnit: h(a.currencyUnit, e),
  elements: P(a.elements, e),
  skillTypes: P(a.skillTypes, e),
  weaponTypes: P(a.weaponTypes, e),
  armorTypes: P(a.armorTypes, e),
  equipTypes: P(a.equipTypes, e),
  terms: _a(a.terms, e)
}), P = (a, e) => a.map(((t) => h(t, e))), Va = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ja {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return Va(this.joinCommandBodies());
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
    return Va(this.bodies);
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
}, Ht = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === z), ((m) => m.code === _)))(a, e);
  return Yt(s) ? new na(_, s, t) : new Ja(s, t);
}, Yt = (a) => a.parameters[0] === "選択肢ヘルプ", Xt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === ea), ((m) => m.code === F)))(a, e);
  return new na(F, s, t);
}, Zt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === j), ((m) => m.code === da)))(a, e);
  return new Ja(s, t);
}, Qt = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === pa), ((m) => m.code === D)))(a, e);
  return new na(D, s, t);
}, Wt = {
  [ea]: (a, e, t) => t.showMessage(Xt(a, e), e, a),
  [j]: (a, e, t) => t.script(Zt(a, e), e, a),
  [z]: (a, e, t) => t.comment(Ht(a, e), e, a),
  [pa]: (a, e, t) => t.showScrollingText(Qt(a, e), e, a)
}, za = (a) => Wt[a], as = (a, e, t, s) => {
  if (a.code === F || a.code === D || a.code === _) return;
  const r = za(a.code);
  return r ? r(t, e, s) : a.code === R ? es(a) : a.code === q || a.code === J || a.code === V ? ts(a) : a.code !== da ? a : void 0;
}, es = (a) => ({
  code: R,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), ts = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ss = (a) => ({ code: j, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), rs = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: F,
    indent: a.header.indent,
    parameters: [e]
  };
  return [ms(a.header), t];
}, ns = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: D, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, ms = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, Y = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ss, showMessage: rs, showScrollingText: ns };
    return s.map(((n, m) => n.code === K ? n : as(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === K ? e.pluginCommand(s) : s.code === j ? e.scriptCommand(s) : jt(s, t)));
}, os = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: Y(t.list, e) })))
}), Ga = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: Y(a.list, e)
}), ur = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: Y(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), yr = (a, e) => Oa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), is = (a, e) => Oa(a, e), Oa = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: Y(n.list, r) }))) }))(t, e) : null)),
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
}), gr = (a) => Ha(a, (() => [])), X = (a, e) => Ha(a, e), Ha = (a, e) => a.flatMap(((t, s) => cs(t, s, a, e))).filter(((t) => t !== null)), cs = (a, e, t, s) => {
  if (a.code === K) return s(a);
  if (a.code === R) return Me(a);
  const r = za(a.code);
  if (r) {
    const n = r(t, e, ls);
    if (n !== void 0) return [n];
  }
  return a.code === J || a.code === q || a.code === V ? Se(a) : null;
}, ls = { comment: (a) => ({
  code: z,
  paramIndex: 0,
  value: a.getBodyText()
}), showMessage: (a) => {
  return { code: F, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
  var e, t;
}, script: (a) => ((e) => ({
  code: j,
  paramIndex: 0,
  value: e.getBodyText()
}))(a), showScrollingText: (a) => ((e) => ({ code: D, paramIndex: 0, value: e.getBodyText() }))(a) }, ds = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: X(a.list, e)
}), ps = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: X(t.list, e) }))), us = (a, e = () => []) => ({
  note: a.note,
  noteItems: ya(a.note),
  displayedName: a.displayName,
  events: ys(a, e)
}), ys = (a, e) => sa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, e),
  note: r.note,
  noteItems: ya(r.note),
  name: r.name
}))), Ya = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Xa = (a) => a.kind === "struct", Za = (a) => a.attr.kind === "struct[]", gs = (a) => Qa[a.kind.replace("[]", "")].type === "number", hs = (a) => Qa[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, b = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Qa = {
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
    if (Xa(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Za(o)) r.push(o);
    else if (Ya(o)) {
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
}, Ns = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Wa = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ae(a, e, t, s) {
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
          scalarArrays: Ns(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? bs(u.scalars, g) : void 0
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
const Ts = (a, e, t, s = Wa) => ae(a.attr.struct, `${e}["${a.name}"]`, t, s), ks = (a, e, t, s = Wa) => ae(a.attr.struct, `${e}["${a.name}"][*]`, t, s), ws = (a, e, t, s) => ((r) => Xa(r.attr))(t) ? Ms(a, t, s) : Za(t) ? Bs(a, t, s) : Ya(t) ? Is(a, e, t) : Ss(a, e, t), Is = (a, e, t) => ({
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
  structs: Ts(e, "$", t)
}), Bs = (a, e, t) => ({
  structArrays: ks(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Cs = (a, e) => e.map(((t) => Es(a, t))).flat(3), Es = (a, e) => [e.top ? Q(e, a, e.top, "") : [], e.structs.map(((t) => Q(e, a, t))), e.structArrays.map(((t) => Q(e, a, t)))], Q = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: f }) => ((p, T, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: p.rootName, rootType: p.rootCategory, structName: T, value: y, param: { name: w, attr: I } } : null;
  })(m, o, d, f, l))).filter(((d) => d !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const f = l.schema.attr;
    return hs(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, d, i, l.schema) : gs(f) ? ((p, T, y, u) => T.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, d, i, l.schema) : [];
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
}, Ps = (a, e, t, s) => e.map(((r) => [`${a}:${r.command}`, $s(a, r, t, s)])), Ks = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Cs(m, o.extractors) }))(ve(a.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, hr = (a) => {
  const e = new Map(a);
  return new ma(e);
}, fr = () => new ma(/* @__PURE__ */ new Map()), vr = (a) => {
  const e = a.flatMap(((t) => Fs(t, ((s) => new fe(s)))));
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
    const t = Ks(e, this._commandMap);
    return t.args.filter(Rs).map(((s) => ({
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
const Rs = (a) => typeof a.value == "string", xr = (a) => ({
  key: "battlerName",
  image: a.battlerName,
  id: a.id
}), aa = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), br = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], Nr = (a, e, t, s, r, n) => [...le(t, s), ...de(a, e), ...pe(r, n)], Tr = (a, e) => ua(ye(e), a), kr = (a, e, t) => {
  const s = ue(e);
  return ua(t ? [...s, ...t] : s, a);
}, js = (a, e, t) => ({ dictionary: Us(e, t), targetNoteKeys: Ls(a) }), Us = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s }))), Ls = (a) => {
  const e = U(a);
  return Array.from(e);
}, _s = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => Ka(t, e))),
  armors: k(a.armors, ((t) => $(t, e))),
  classes: k(a.classes, ((t) => ja(t, e))),
  commonEvents: k(a.commonEvents, ((t) => Ga(t, e))),
  enemies: k(a.enemies, ((t) => Ra(t, e))),
  items: k(a.items, ((t) => $(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => Ua(t, e))),
  states: k(a.states, ((t) => La(t, e))),
  system: { message: a.system.message, system: a.system.system ? qa(a.system.system, e.replaceText) : null },
  troops: k(a.troops, ((t) => os(t, e))),
  weapons: k(a.weapons, ((t) => $(t, e))),
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
}), ee = (a, e, t, s) => {
  const r = wa(a, t), n = Ma(r, { audioFiles: e.audioFiles, imageFiles: e.imageFiles, otherFiles: e.otherFiles }), m = qs(n.nonTextNoteKeys, s);
  return { data: _s(a, m), note: n };
}, qs = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), wr = (a, e) => {
  const t = new Map(e.dictionary.map((({ key: n, value: m }) => [n, m]))), s = new Set(e.targetNoteKeys), r = {
    replaceText: (n) => t.get(n),
    pluginCommand: (n) => n,
    scriptCommand: (n) => n,
    isReplaceTargetNote: (n) => s.has(n.key)
  };
  return {
    actors: a.actors.map(((n) => Ka(n, r))),
    armors: a.armors.map(((n) => $(n, r))),
    classes: a.classes.map(((n) => ja(n, r))),
    enemies: a.enemies.map(((n) => Ra(n, r))),
    items: a.items.map(((n) => $(n, r))),
    skills: a.skills.map(((n) => Ua(n, r))),
    states: a.states.map(((n) => La(n, r))),
    troops: a.troops.map(((n) => n)),
    weapons: a.weapons.map(((n) => $(n, r))),
    system: qa(a.system, ((n) => t.get(n))),
    commonEvents: a.commonEvents.map(((n) => Ga(n, r)))
  };
}, Ir = (a, e) => {
  const t = Vs(a, e);
  return ka(t);
}, Vs = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r) => ee(e, a, r, {
  replaceText: (n) => t.get(n),
  pluginCommand: (n) => n,
  scriptCommand: (n) => n,
  isReplaceTargetNote: (n) => s.has(n.key)
}).data, Sr = (a, e, t) => {
  const s = Js(a, e, t);
  return [...ka(s.main), ...zs(s.aux)];
}, Js = ({ assetBundle: a, data: e, dictionary: t, textKeys: s }, r, n) => {
  const m = ee(e, a, r, {
    replaceText: (o) => n(o),
    pluginCommand: (o) => o,
    scriptCommand: (o) => o,
    isReplaceTargetNote: (o) => s.has(o.key)
  });
  return { main: m.data, aux: {
    actorTextDictionary: Gs(e, t, n),
    dictionary: js([...m.note.dataNoteSummary, ...m.note.mapNoteSummary], t, n)
  } };
}, zs = (a) => [{ data: a.actorTextDictionary, filename: we }, {
  data: a.dictionary,
  filename: Ie
}], Gs = (a, e, t) => Ct(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((s) => s.map)), { newText: (s) => e.get(s) ?? s, hashText: (s) => t(s) });
export {
  Ka as $,
  Be as A,
  Ks as B,
  E as C,
  Ce as D,
  Se as E,
  Pe as F,
  Ae as G,
  Ee as H,
  gr as I,
  X as J,
  De as K,
  wa as L,
  $e as M,
  Ke as N,
  Le as O,
  Fe as P,
  Me as Q,
  nr as R,
  et as S,
  tt as T,
  pt as U,
  tr as V,
  er as W,
  Bt as X,
  O as Y,
  It as Z,
  St as _,
  Ma as a,
  $ as a0,
  jt as a1,
  ja as a2,
  Ga as a3,
  ur as a4,
  or as a5,
  Vs as a6,
  Ir as a7,
  Js as a8,
  Sr as a9,
  Ra as aa,
  Y as ab,
  Fa as ac,
  is as ad,
  mr as ae,
  yr as af,
  Vt as ag,
  dr as ah,
  Pa as ai,
  _s as aj,
  ee as ak,
  wr as al,
  Ua as am,
  La as an,
  pr as ao,
  qa as ap,
  Rt as aq,
  os as ar,
  ir as as,
  U as at,
  Sa as au,
  Aa as av,
  sr as b,
  Nr as c,
  sa as d,
  kr as e,
  Tr as f,
  je as g,
  B as h,
  Re as i,
  Mt as j,
  Ct as k,
  wt as l,
  rr as m,
  fr as n,
  hr as o,
  vr as p,
  Et as q,
  ps as r,
  ds as s,
  br as t,
  xr as u,
  kt as v,
  $a as w,
  cr as x,
  lr as y,
  us as z
};
