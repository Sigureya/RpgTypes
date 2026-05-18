import { as as P, v as _, E as z, w as V, b as oe, q as ie, N as ce, aS as $, P as L, Q as J, aP as F, aM as R, aO as ee, az as le, ay as j, aR as de } from "./makeAudio.es.js";
import { n as G } from "./normalText.es.js";
import { d as ae, s as aa, v as ta, x as sa, p as ra, f as na, q as ma, O as oa, D as ia, n as ca, e as la, B as E, A as da, w as pe } from "./isScript.es.js";
import { l as q, a as ue, i as ye, f as ge, c as he, e as fe, d as ve, j as xe, b as Ne, h as pa, g as ua } from "./constants.es.js";
import { JSONPathJS as ya } from "jsonpath-js";
import { parseDeepRecord as ga } from "@sigureya/rmmz-plugin-schema";
import { k as ha, v as fa, u as va, r as xa, a as Na } from "./makeSystem.es.js";
import { a as Ta, r as Te } from "./writeData.es.js";
const te = (e, a, t, s, r, n) => {
  if (e.code === P) return ka(e, a, t, r, n);
  const m = G(e.value);
  return { otherData: n, uuid: r(m), kind: s(e), baseText: m, filename: t, id: a, speaker: e.speaker ?? "", dataKey: ba(e) };
}, ba = (e) => `code:${e.code}`, ka = (e, a, t, s, r) => {
  const n = G(e.value);
  return {
    otherData: [e.pluginName, ...r],
    uuid: s(n),
    kind: `${wa(e)}`,
    baseText: n,
    filename: t,
    id: a,
    dataKey: `code:${e.code}-${e.argName}`
  };
}, wa = (e) => `${e.commandName}.${e.argTitle}`, Ia = (e, a, t, s) => a.flatMap(((r) => Sa(e, r, t, s))), Sa = (e, a, t, s) => a.commands.filter(be).map(((r) => te(r, a.eventId, e, s, t, [a.name]))), Ma = (e, a, t, s) => e.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => te(m, r.eventId, a, t, s, [n])));
})), be = (e) => e.value.length > 0, Ba = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), Ea = (e) => e.parameters[0].map(((a, t) => ({ code: 102, paramIndex: t, value: a }))), Ca = (e, a, t, s, r) => {
  const n = Array.from(Aa(e, a, t, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => {
    if (o === null) return null;
    const i = r.newText(o.key).trimEnd();
    return { key: i, value: r.hashText(i) };
  }));
  return [...n, ...m].filter(Da);
}, Da = (e) => e !== null && e.key.length > 0, Aa = (e, a, t, s) => {
  const r = $a(e), n = s.map(Fa), m = Ka(a), o = Pa(t);
  return new Set([r, m, o, n].flat(4));
}, $a = (e) => e.map(((a) => [a.name, a.nickname, a.profile])), Fa = (e) => ae(e, se), Ka = (e) => aa(e, se), Pa = (e) => ta(e, se), se = ({ list: e }) => e.filter(Ra).map(((a) => a.parameters[1])), Ra = (e) => e.code === _ || e.code === z || e.code === V, C = (e, a) => ({
  id: e.id,
  name: e.name,
  note: ja(e),
  main: a.map(((t) => ({ key: t, value: e[t], id: e.id })))
}), ja = (e) => sa(e.note, ((a, t) => ({
  key: a,
  value: t,
  id: e.id
}))), Ua = (e) => C(e, ["name", "nickname", "profile"]), qa = (e) => C(e, ["name"]), La = (e) => C(e, ["name"]), _a = (e) => C(e, ["name", "description", "message1", "message2"]), za = (e) => C(e, ["name", "description"]), Va = (e) => C(e, ["name", "description"]), Ja = (e) => C(e, ["name", "description"]), Ga = (e) => C(e, ["name", "message1", "message2", "message3", "message4"]), Oa = (e, a, t, s) => B(e, a, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (e, a, t, s) => e.map(((r) => Ha(r, a, t, s))), Ha = (e, a, t, s) => ({ main: e.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = G(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: a,
    uuid: s(n)
  };
})), note: Xa(e.note, a, t, s) }), Xa = (e, a, t, s) => e.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: a,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Ya = (e, a, t, s) => [{ filename: a, id: 0, baseText: e.gameTitle, uuid: s(e.gameTitle), kind: t.gameTitle, dataKey: "gameTitle" }, {
  filename: a,
  id: 0,
  baseText: e.currencyUnit,
  uuid: s(e.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Y(a, e.equipTypes, "equipTypes", t.equipTypes, s), ...Y(a, e.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Y(a, e.armorTypes, "armorTypes", t.armorTypes, s)], Y = (e, a, t, s, r) => a.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = G(n);
  return { filename: e, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Qa = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: { basic: xa(e.terms.basic), commands: va(e.terms.commands), messages: fa(e.terms.messages), params: ha(e.terms.params) }
}), ke = (e, a) => {
  const t = T(e.actors, Ua), s = at(e.armors), r = T(e.classes, La), n = T(e.enemies, qa), m = T(e.items, za), o = T(e.mapInfos, ((u) => u)), i = T(e.skills, _a), d = T(e.states, Ga), c = T(e.weapons, Va), l = tt(e.commonEvents, a), f = st(e.troops, a), p = rt(e.mapFiles, a), b = Wa(e.system), y = Za([t, s, r, n, m, o, i, d, c, f, l]).concat(et(e.mapFiles, e.system));
  return { value: { eventData: { commonEvents: l.data, troops: f.data.flat() }, mapFiles: p, system: b, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: d.data,
    weapons: c.data
  } }, errors: y };
}, Wa = (e) => ({ message: e.message, system: e.system ? Qa(e.system) : null }), T = (e, a) => ({
  error: e.error,
  fileName: e.fileName,
  success: e.success,
  data: e.success ? e.data.map(a) : []
}), Za = (e) => e.filter(((a) => !a.success)).map(((a) => ({ fileName: a.fileName, error: a.error }))), et = (e, a) => [...e.info.success === !1 ? [{
  fileName: e.info.filename,
  error: e.info.message
}] : [], ...e.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...a.system === null ? [{
  fileName: q,
  error: a.message
}] : []], at = (e) => T(e, Ja), tt = (e, a) => T(e, ((t) => a.extractCommonEventText(t))), st = (e, a) => T(e, ((t) => a.extractBattleText(t))), rt = (e, a) => {
  const t = e.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: a.extractMapTexts(s.map)
  })));
  return { info: e.info, invalidMaps: e.invalidMaps, validMaps: t };
}, nt = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, mt = (e) => {
  const a = e.trim().toLowerCase();
  return a === "true" || a === "false";
}, ot = (e) => {
  const a = e.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(a);
}, U = (e) => {
  const a = e.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(a);
}, we = (e, a) => {
  const t = it(e);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = dt(r, a);
    return { key: s, kinds: lt(n), values: r.map(ct) };
  }));
}, it = (e) => {
  const a = e.flatMap(((t) => t.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: t.source
  })))));
  return Map.groupBy(a, ((t) => t.key));
}, ct = (e) => ({
  value: e.value,
  id: e.id,
  soruce: e.soruce,
  name: e.name
}), lt = (e) => [e.isBoolean ? "boolean" : null, e.isNumber ? "number" : null, e.isBgm ? "bgm" : null, e.isBgs ? "bgs" : null, e.isMe ? "me" : null, e.isSe ? "se" : null, e.isPicture ? "pictures" : null, e.isCharacter ? "characters" : null, e.isFaceset ? "faces" : null, e.isBattler ? "battlers" : null, e.isSvBattler ? "svBattlers" : null, e.isEnemy ? "enemies" : null, e.isTileset ? "tilesets" : null, e.isMovie ? "movies" : null, e.isScript ? "script" : null].filter(((a) => a !== null)), dt = (e, { audioFiles: a, imageFiles: t, otherFiles: s }) => e.reduce(((r, n) => ({
  isBoolean: r.isBoolean && mt(n.value),
  isNumber: r.isNumber && ot(n.value),
  isBgm: r.isBgm && a.bgm.has(n.value),
  isBgs: r.isBgs && a.bgs.has(n.value),
  isMe: r.isMe && a.me.has(n.value),
  isSe: r.isSe && a.se.has(n.value),
  isPicture: r.isPicture && t.picutures.has(n.value),
  isCharacter: r.isCharacter && t.characters.has(n.value),
  isFaceset: r.isFaceset && t.faces.has(n.value),
  isBattler: r.isBattler && t.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && t.svActors.has(n.value),
  isEnemy: r.isEnemy && t.enemies.has(n.value),
  isTileset: r.isTileset && t.tilesets.has(n.value),
  isMovie: r.isMovie && s.movies.has(n.value),
  isScript: r.isScript && ra(n.value)
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
}), pt = (e) => ({
  source: e.filename,
  notes: [...e.map.noteItems.map(yt), ...e.map.events.map(ut).flat()]
}), ut = (e) => e.noteItems.map(((a) => ({ id: e.eventId, key: a.key, value: a.value, name: e.name }))), yt = (e) => ({
  id: 0,
  key: e.key,
  value: e.value,
  name: ""
}), gt = (e, a) => ({ eventId: e.eventId, name: e.name, pageIndex: e.pageIndex, commands: e.commands, note: e.note, noteItems: e.noteItems.filter(a) }), S = (e, a) => e.map(((t) => {
  const s = t.note.filter(a);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(ht), ht = (e) => e.note.length > 0 || e.main.length > 0, Ie = (e, a) => {
  const t = xt(e.value.mainData, a), s = Nt(e.value.mapFiles.validMaps, a);
  return { nonTextNoteKeys: t.nonTextNoteKeys, dataNoteSummary: t.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: e.errors,
    value: {
      mainData: t.mainData,
      mapFiles: { info: e.value.mapFiles.info, invalidMaps: e.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: e.value.eventData,
      system: e.value.system
    }
  } };
}, Se = (e, a) => {
  const t = (s) => a.has(s.key);
  return {
    actors: S(e.actors, t),
    enemies: S(e.enemies, t),
    weapons: S(e.weapons, t),
    armors: S(e.armors, t),
    skills: S(e.skills, t),
    states: S(e.states, t),
    items: S(e.items, t),
    classes: S(e.classes, t)
  };
}, Os = (e, a) => {
  const t = Ee(e, a), s = U(t);
  return Me(e, s);
}, ft = (e, a) => {
  const t = Be(e, a);
  return U(t);
}, Hs = (e, a) => {
  const t = ft(e, a);
  return Se(e, t);
}, Me = (e, a) => e.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => a.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => gt(n, r)))
  }) };
  var s, r;
})), Be = (e, a) => {
  const t = vt(e);
  return we(t, a);
}, vt = (e) => [M(ue, e.actors), M(ye, e.skills), M(ge, e.items), M(he, e.weapons), M(fe, e.armors), M(ve, e.classes), M(xe, e.states), M(Ne, e.enemies)], M = (e, a) => ({
  source: e,
  notes: a.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ee = (e, a) => {
  const t = e.map(pt);
  return we(t, a);
}, xt = (e, a) => {
  const t = Be(e, a), s = U(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Se(e, s)
  };
}, Nt = (e, a) => {
  const t = Ee(e, a), s = U(t);
  return { noteSummary: t, validMaps: Me(e, s) };
}, Xs = (e, a, t, s, r, n) => {
  const m = ke(e.data, n), o = Ie(m, e);
  return bt(e.data.actors.data, o, a, t, s, r);
}, Tt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], bt = (e, a, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = a.data.value;
  return {
    noteSummaries: Tt(a),
    pluginParams: [],
    map: kt(i, r, n),
    commonEvents: Ia(pa, m.commonEvents, r, n),
    troops: Ma(m.troops, ua, n, r),
    armors: B(o.armors, fe, s, r),
    system: It(d, r, t),
    actors: {
      texts: B(o.actors, ue, s, r),
      controlChars: na(e)
    },
    classes: B(o.classes, ve, s, r),
    enemies: B(o.enemies, Ne, s, r),
    items: B(o.items, ge, s, r),
    skills: B(o.skills, ye, s, r),
    states: Oa(o.states, xe, s, r),
    weapons: B(o.weapons, he, s, r)
  };
}, kt = (e, a, t) => e.validMaps.map(((s) => wt(s, a, t))).flat(3), wt = (e, a, t) => e.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = nt(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(be).map(((c) => te(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(s, e, a, t))), It = (e, a, t) => e.system === null ? { gameTitle: "", filename: q, texts: [] } : {
  gameTitle: e.system.gameTitle,
  filename: q,
  texts: Ya(e.system, q, t, a)
}, St = (e, a, t, s, r, n, m) => {
  const o = { hashText: m, newText: (i) => n.get(i) ?? i };
  return {
    textDictionary: Mt(n, m),
    targetNoteKeys: Bt(r),
    actorTexts: Ca(e, a, t, s, o)
  };
}, Mt = (e, a) => Array.from(e.entries()).map((([t, s]) => ({ key: a(t), value: s }))), Bt = (e) => {
  const a = U(e);
  return Array.from(a);
}, Ys = (e, a) => {
  const t = a.actorTextDictionary.get(e);
  if (t)
    return a.textDictionary.get(t);
}, Qs = (e) => ({
  targetNoteKeys: new Set(e.targetNoteKeys),
  textDictionary: new Map(e.textDictionary.map((({ key: a, value: t }) => [a, t]))),
  actorTextDictionary: new Map(e.actorTexts.map((({ key: a, value: t }) => [a, t])))
}), Et = (e) => [{
  data: e,
  filename: Ta
}], Ws = (e) => {
  const a = Ct(e);
  return Dt(a);
}, Ct = (e) => e.reduce(((a, t) => {
  const s = At(t);
  return s.key.length === 0 || s.value.length === 0 || (a.validEntries.push({ source: t, normalized: s }), a.rawKeys.add(t.key)), a;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), Dt = (e) => e.validEntries.reduce(((a, t) => (/\s$/.test(t.source.key) && e.rawKeys.has(t.normalized.key) ? a.errorItems.push(t.source) : a.items.push(t.normalized), a)), {
  errorItems: [],
  items: []
}), At = (e) => ({ key: e.key.trimEnd(), value: e.value.trimEnd() }), Ce = (e, a, t) => e.filter(((s) => s.code === oe || s.code === ie || s.code === ce)).map(((s) => Ft(s, a, t))), $t = {
  [ce]: "weapon",
  [oe]: "armor",
  [ie]: "item"
}, Ft = (e, a, t) => {
  const s = ma(e) ? { direct: !1, variableId: e.parameters[3] } : {
    direct: !0,
    value: e.parameters[3]
  }, r = e.parameters[1] === oa ? a.gain : e.parameters[1] === ia ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: $t[e.code],
    dataId: ca(e),
    code: e.code,
    commandNameMZ: t(e.code),
    operation: r,
    ...n,
    ...s
  };
}, Zs = (e, a, t) => ae(e.map, ((s, r, n) => ({
  ...Kt(s),
  commands: Ce(s.list, a, t),
  eventName: n.name,
  pageIndex: r
}))), Kt = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, er = (e, a, t) => la(e, ((s, r, n) => ({
  commands: Ce(s.list, a, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Pt = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, h = (e, a) => {
  const t = e.trimEnd(), s = a(t);
  return s ? s.trimEnd() : t;
}, v = (e, a) => {
  const t = e.trimEnd(), s = a.replaceText(t);
  return s ? s.trimEnd() : t;
}, De = (e, a) => {
  const t = (o) => a.replaceText(o), s = E(e.note, a), r = h(e.name, t), n = h(e.nickname, t), m = h(e.profile, t);
  return {
    ...e,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Ae = (e, a) => {
  const t = E(e.note, a), s = v(e.name, a);
  return { ...e, name: s, note: t };
}, $e = (e, a) => {
  const t = E(e.note, a), s = v(e.name, a);
  return {
    ...e,
    name: s,
    note: t
  };
}, Fe = (e, a) => {
  const t = E(e.note, a), s = v(e.name, a), r = v(e.description, a), n = v(e.message1, a), m = v(e.message2, a);
  return { ...e, name: s, description: r, message1: n, message2: m, note: t };
}, A = (e, a) => {
  const t = E(e.note, a), s = v(e.name, a), r = v(e.description, a);
  return { ...e, name: s, description: r, note: t };
}, Ke = (e, a) => {
  const t = E(e.note, a), s = v(e.name, a), r = v(e.message1, a), n = v(e.message2, a), m = v(e.message3, a), o = v(e.message4, a);
  return {
    ...e,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Rt = (e, a) => {
  switch (e.code) {
    case ee:
      return Ut(e, a);
    case R:
      return Lt(e, a);
    case F:
    case J:
    case L:
    case $:
      return jt(e, a);
    case _:
    case V:
    case z:
      return qt(e, a);
    default:
      return e;
  }
}, jt = (e, a) => {
  const t = h(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, Ut = (e, a) => {
  const t = e.parameters[4] ? h(e.parameters[4], a) : "";
  return Na({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, qt = (e, a) => {
  const t = h(e.parameters[1], a);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], t] };
}, Lt = (e, a) => {
  const t = e.parameters[0].map(((s) => h(s, a)));
  return {
    code: R,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, ar = (e, a, t = `
`) => _t(e, ((s) => a.get(s)), t), _t = (e, a, t = `
`) => da(e.note, ((s) => h(s.value, a)), t), tr = (e, a) => Pe(e, ((t) => Pt(t, a))), Pe = (e, a) => ({
  params: Jt(e.params, ((t) => h(t, a))),
  messages: Gt(e.messages, ((t) => h(t, a))),
  basic: zt(e.basic, ((t) => h(t, a))),
  commands: Vt(e.commands, ((t) => h(t, a)))
}), zt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Vt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Jt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Gt = (e, a) => ({
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
}), Re = (e, a) => ({
  ...e,
  gameTitle: h(e.gameTitle, a),
  currencyUnit: h(e.currencyUnit, a),
  elements: K(e.elements, a),
  skillTypes: K(e.skillTypes, a),
  weaponTypes: K(e.weaponTypes, a),
  armorTypes: K(e.armorTypes, a),
  equipTypes: K(e.equipTypes, a),
  terms: Pe(e.terms, a)
}), K = (e, a) => e.map(((t) => h(t, a))), je = (e) => e.map(((a) => a.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ue {
  constructor(a, t) {
    this.header = a, this.bodies = t;
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
class re {
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
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
const O = (e, a, t, s) => {
  const r = e[a];
  if (!t(r)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Ot = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === J), ((m) => m.code === L)))(e, a);
  return Ht(s) ? new re(L, s, t) : new Ue(s, t);
}, Ht = (e) => e.parameters[0] === "選択肢ヘルプ", Xt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === ee), ((m) => m.code === F)))(e, a);
  return new re(F, s, t);
}, Yt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === j), ((m) => m.code === le)))(e, a);
  return new Ue(s, t);
}, Qt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === de), ((m) => m.code === $)))(e, a);
  return new re($, s, t);
}, Wt = {
  [ee]: (e, a, t) => t.showMessage(Xt(e, a), a, e),
  [j]: (e, a, t) => t.script(Yt(e, a), a, e),
  [J]: (e, a, t) => t.comment(Ot(e, a), a, e),
  [de]: (e, a, t) => t.showScrollingText(Qt(e, a), a, e)
}, qe = (e) => Wt[e], Zt = (e, a, t, s) => {
  if (e.code === F || e.code === $ || e.code === L) return;
  const r = qe(e.code);
  return r ? r(t, a, s) : e.code === R ? es(e) : e.code === _ || e.code === V || e.code === z ? as(e) : e.code !== le ? e : void 0;
}, es = (e) => ({
  code: R,
  indent: e.indent,
  parameters: [e.parameters[0].map(((a) => a.trimEnd())), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), as = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), ts = (e) => ({ code: j, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), ss = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: F,
    indent: e.header.indent,
    parameters: [a]
  };
  return [ns(e.header), t];
}, rs = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: $, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, ns = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, H = (e, a) => {
  const t = (s) => a.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ts, showMessage: ss, showScrollingText: rs };
    return s.map(((n, m) => n.code === P ? n : Zt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(e).map(((s) => s.code === P ? a.pluginCommand(s) : s.code === j ? a.scriptCommand(s) : Rt(s, t)));
}, Le = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: H(t.list, a) })))
}), _e = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: H(e.list, a)
}), sr = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: H(e.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a })
}), rr = (e, a) => Ve(e, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a, isReplaceTargetNote: () => !1 }), ze = (e, a) => Ve(e, a), Ve = (e, a) => ({
  note: E(e.note, a),
  displayName: v(e.displayName, a),
  events: e.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: E(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: H(n.list, r) }))) }))(t, a) : null)),
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
}), Je = (e, a) => {
  const t = a(e.list);
  return { ...e, list: t };
}, Ge = (e, a) => ({ ...e, pages: e.pages.map(((t) => Je(t, a))) }), nr = (e, a) => ({
  ...e,
  events: e.events.map(((t) => t ? Ge(t, a) : null))
}), mr = (e, a) => e.map(((t) => Je(t, a))), or = (e, a) => e.map(((t) => Ge(t, a))), ir = (e) => Oe(e, (() => [])), X = (e, a) => Oe(e, a), Oe = (e, a) => e.flatMap(((t, s) => ms(t, s, e, a))).filter(((t) => t !== null)), ms = (e, a, t, s) => {
  if (e.code === P) return s(e);
  if (e.code === R) return Ea(e);
  const r = qe(e.code);
  if (r) {
    const n = r(t, a, os);
    if (n !== void 0) return [n];
  }
  return e.code === V || e.code === _ || e.code === z ? Ba(e) : null;
}, os = {
  comment: (e) => ({ code: J, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: F, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({ code: j, paramIndex: 0, value: a.getBodyText() }))(e),
  showScrollingText: (e) => ((a) => ({
    code: $,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e)
}, is = (e, a = () => []) => ({ eventId: e.id, name: e.name, commands: X(e.list, a) }), cs = (e, a = () => []) => e.pages.map(((t, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: X(t.list, a)
}))), ls = (e, a = () => []) => ({ note: e.note, noteItems: pe(e.note), displayedName: e.displayName, events: ds(e, a) }), ds = (e, a) => ae(e, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, a),
  note: r.note,
  noteItems: pe(r.note),
  name: r.name
}))), He = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), Xe = (e) => e.kind === "struct", Ye = (e) => e.attr.kind === "struct[]", ps = (e) => Qe[e.kind.replace("[]", "")].type === "number", us = (e) => Qe[e.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Qe = {
  string: D,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: N,
  actor: N,
  class: N,
  enemy: N,
  skill: N,
  state: N,
  item: N,
  weapon: N,
  common_event: N,
  switch: N,
  variable: N,
  troop: N,
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
function ys(e) {
  return gs(e, ((a) => !0), ((a) => !0));
}
const gs = (e, a, t) => {
  const s = [], r = [], n = [], m = [];
  return e.forEach(((o) => {
    if (Xe(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Ye(o)) r.push(o);
    else if (He(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function hs(e) {
  const a = e.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(a);
}
const fs = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map(((t) => `"${t.name}"`)).join(",")}]`;
}, vs = (e, a) => e.map(((t) => ({ path: `${a}["${t.name}"][*]`, param: t }))), We = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ze(e, a, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
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
    const b = (function(y, u) {
      const g = y.ancestry.concat(y.schemaName), w = y.basePath;
      return [...u.structs.map(((I) => ({
        schemaName: I.attr.struct,
        basePath: `${w}["${I.name}"]`,
        ancestry: g
      }))), ...u.structArrays.map(((I) => ({ schemaName: I.attr.struct, basePath: `${w}["${I.name}"][*]`, ancestry: g })))].reverse();
    })(l, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const y = (function(u, { path: g, structName: w }) {
        return {
          category: "struct",
          objectSchema: hs(u.scalars),
          name: w,
          scalarArrays: vs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? fs(u.scalars, g) : void 0
        };
      })(p, { path: l.basePath, structName: l.schemaName });
      return f.push(...b), {
        frames: f,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return f.push(...b), { frames: f, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const xs = (e, a, t, s = We) => Ze(e.attr.struct, `${a}["${e.name}"]`, t, s), Ns = (e, a, t, s = We) => Ze(e.attr.struct, `${a}["${e.name}"][*]`, t, s), Ts = (e, a, t, s) => ((r) => Xe(r.attr))(t) ? ws(e, t, s) : Ye(t) ? Is(e, t, s) : He(t) ? bs(e, a, t) : ks(e, a, t), bs = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), ks = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ws = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: xs(a, "$", t)
}), Is = (e, a, t) => ({
  structArrays: Ns(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Ss = (e, a) => a.map(((t) => Ms(e, t))).flat(3), Ms = (e, a) => [a.top ? Q(a, e, a.top, "") : [], a.structs.map(((t) => Q(a, e, t))), a.structArrays.map(((t) => Q(a, e, t)))], Q = (e, a, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, d, c) => d.pathSegments(i).map((({ value: l, segments: f }) => ((p, b, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: p.rootName, rootType: p.rootCategory, structName: b, value: y, param: { name: w, attr: I } } : null;
  })(m, o, l, f, c))).filter(((l) => l !== null)))(e, s, a, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, d, c) => {
    const l = c.jsonPathJS.find(d);
    if (!Array.isArray(l)) return [];
    const f = c.schema.attr;
    return us(f) ? ((p, b, y, u) => b.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, l, i, c.schema) : ps(f) ? ((p, b, y, u) => b.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, l, i, c.schema) : [];
  })(e, s, a, m)));
  return [r, n].flat(2);
}, W = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: me(e.scalarArrays, e.name, a), scalar: Bs(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: me(e.scalarArrays, e.name, a)
}, me = (e, a, t) => e.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: a }))), Bs = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Es = (e, a, t, s) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Cs(a, t, s)
}), Cs = (e, a, t) => e.args.map(((s) => ((r, n) => {
  const m = r.scalars ? W(r.scalars, n) : void 0, o = r.structs.items.map(((d) => W(d, n))), i = r.structArrays.items.map(((d) => W(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Ts("args", e.command, s, a), t))), Ds = (e, a) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, ys(r.params)]))))(e.schema.structs);
  return As(e.pluginName, e.schema.commands, t, a);
}, As = (e, a, t, s) => a.map(((r) => [`${e}:${r.command}`, Es(e, r, t, s)])), $s = (e, a) => {
  const [t, s] = e.parameters, r = `${t}:${s}`, n = a.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Ss(m, o.extractors) }))(ga(e.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, cr = (e) => {
  const a = new Map(e);
  return new ne(a);
}, lr = () => new ne(/* @__PURE__ */ new Map()), dr = (e) => {
  const a = e.flatMap(((t) => Ds(t, ((s) => new ya(s)))));
  return new ne(new Map(a));
};
class ne {
  _commandMap;
  constructor(a) {
    this._commandMap = a;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(a) {
    return ls(a, ((t) => this.extractArgs(t)));
  }
  extractBattleText(a) {
    return cs(a, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(a) {
    return is(a, ((t) => this.extractArgs(t)));
  }
  extractArgs(a) {
    const t = $s(a, this._commandMap);
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
  extractCommandTexts(a) {
    return X(a, ((t) => this.extractArgs(t)));
  }
}
const Fs = (e) => typeof e.value == "string", pr = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), Z = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), ur = (e) => [Z(e, "faceName", "faces"), Z(e, "characterName", "characters"), Z(e, "battlerName", "sv_actors")], Ks = (e, a) => ({
  tilesets: e.tilesets,
  animations: e.animations,
  actors: k(e.actors, ((t) => De(t, a))),
  armors: k(e.armors, ((t) => A(t, a))),
  classes: k(e.classes, ((t) => $e(t, a))),
  commonEvents: k(e.commonEvents, ((t) => _e(t, a))),
  enemies: k(e.enemies, ((t) => Ae(t, a))),
  items: k(e.items, ((t) => A(t, a))),
  mapInfos: e.mapInfos,
  skills: k(e.skills, ((t) => Fe(t, a))),
  states: k(e.states, ((t) => Ke(t, a))),
  system: { message: e.system.message, system: e.system.system ? Re(e.system.system, a.replaceText) : null },
  troops: k(e.troops, ((t) => Le(t, a))),
  weapons: k(e.weapons, ((t) => A(t, a))),
  mapFiles: { info: e.mapFiles.info, invalidMaps: e.mapFiles.invalidMaps, validMaps: e.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: ze(t.map, a)
  }))) }
}), k = (e, a) => ({ success: e.success, fileName: e.fileName, error: e.error, data: e.success ? e.data.map(a) : [] }), ea = (e, a, t, s) => {
  const r = ke(e, t), n = Ie(r, { audioFiles: a.audioFiles, imageFiles: a.imageFiles, otherFiles: a.otherFiles }), m = Ps(n.nonTextNoteKeys, s);
  return { data: Ks(e, m), note: n };
}, Ps = (e, a) => ({
  pluginCommand: (t) => a.pluginCommand(t),
  scriptCommand: (t) => a.scriptCommand(t),
  replaceText: (t) => a.replaceText(t),
  isReplaceTargetNote: (t) => !!e.has(t.key) && a.isReplaceTargetNote(t)
}), yr = (e, a) => ze(e, { replaceText: (t) => a.textDictionary.get(t), pluginCommand: (t) => t, scriptCommand: (t) => t, isReplaceTargetNote: (t) => a.targetNoteKeys.has(t.key) }), gr = (e, a) => {
  const t = {
    replaceText: (s) => a.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => a.targetNoteKeys.has(s.key)
  };
  return {
    actors: e.actors.map(((s) => De(s, t))),
    armors: e.armors.map(((s) => A(s, t))),
    classes: e.classes.map(((s) => $e(s, t))),
    enemies: e.enemies.map(((s) => Ae(s, t))),
    items: e.items.map(((s) => A(s, t))),
    skills: e.skills.map(((s) => Fe(s, t))),
    states: e.states.map(((s) => Ke(s, t))),
    troops: e.troops.map(((s) => Le(s, t))),
    weapons: e.weapons.map(((s) => A(s, t))),
    system: Re(e.system, ((s) => a.textDictionary.get(s))),
    commonEvents: e.commonEvents.map(((s) => _e(s, t)))
  };
}, hr = (e, a) => {
  const t = Rs(e, a);
  return Te(t);
}, Rs = (e, a) => {
  const t = {
    replaceText: (s) => e.dictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.textKeys.has(s.key)
  };
  return ea(e.data, e.assetBundle, a, t).data;
}, fr = (e, a, t) => {
  const s = js(e, a, t);
  return [...Te(s.main), ...Et(s.aux)];
}, js = ({ assetBundle: e, data: a, dictionary: t, textKeys: s }, r, n) => {
  const m = ea(a, e, r, { replaceText: (o) => n(o), pluginCommand: (o) => o, scriptCommand: (o) => o, isReplaceTargetNote: (o) => s.has(o.key) });
  return { main: m.data, aux: St(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((o) => o.map)), m.note.dataNoteSummary, t, n) };
};
export {
  $e as $,
  C as A,
  Ua as B,
  Ba as C,
  Ja as D,
  La as E,
  qa as F,
  ir as G,
  X as H,
  za as I,
  ke as J,
  _a as K,
  Ga as L,
  Qa as M,
  Va as N,
  Ea as O,
  Et as P,
  Ys as Q,
  mt as R,
  ot as S,
  be as T,
  ft as U,
  Hs as V,
  Ws as W,
  Os as X,
  De as Y,
  A as Z,
  Rt as _,
  Ie as a,
  _e as a0,
  sr as a1,
  mr as a2,
  Rs as a3,
  hr as a4,
  js as a5,
  fr as a6,
  Ae as a7,
  H as a8,
  Je as a9,
  ze as aa,
  nr as ab,
  rr as ac,
  _t as ad,
  ar as ae,
  Ge as af,
  Ks as ag,
  ea as ah,
  gr as ai,
  yr as aj,
  Fe as ak,
  Ke as al,
  tr as am,
  Re as an,
  Pt as ao,
  Le as ap,
  or as aq,
  U as ar,
  we as as,
  Ee as at,
  Xs as b,
  Qs as c,
  Ma as d,
  Ia as e,
  Ha as f,
  B as g,
  Oa as h,
  Ya as i,
  Ca as j,
  St as k,
  lr as l,
  cr as m,
  dr as n,
  Aa as o,
  cs as p,
  is as q,
  ur as r,
  pr as s,
  Ft as t,
  Ce as u,
  Zs as v,
  er as w,
  ls as x,
  ja as y,
  $s as z
};
