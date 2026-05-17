import { v as q, E as V, w as z, as as P, b as oe, q as ie, N as ce, aS as $, P as _, Q as J, aP as F, aM as R, aO as ee, az as le, ay as j, aR as de } from "./makeAudio.es.js";
import { n as G } from "./normalText.es.js";
import { d as ae, s as aa, v as ta, x as sa, p as ra, f as na, q as ma, O as oa, D as ia, n as ca, e as la, B as E, A as da, w as pe } from "./isScript.es.js";
import { l as L, a as ue, i as ye, f as ge, c as he, e as ve, d as fe, j as xe, b as Ne, h as pa, g as ua } from "./constants.es.js";
import { JSONPathJS as ya } from "jsonpath-js";
import { parseDeepRecord as ga } from "@sigureya/rmmz-plugin-schema";
import { k as ha, v as va, u as fa, r as xa, a as Na } from "./makeSystem.es.js";
import { a as Ta, r as Te } from "./writeData.es.js";
const ba = (e) => ((a, t) => ({ code: a.code, paramIndex: t, value: a.parameters[t] }))(e, 1), ka = (e) => e.parameters[0].map(((a, t) => ({ code: 102, paramIndex: t, value: a }))), wa = (e, a, t, s, r) => {
  const n = Array.from(Ia(e, a, t, s)).map(((o) => {
    const i = o.trimEnd();
    return { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => {
    const i = r.newText(o.key);
    return { key: i, value: r.hashText(i.trimEnd()) };
  }));
  return [...n, ...m];
}, Ia = (e, a, t, s) => {
  const r = Sa(e), n = s.map(Ma), m = Ba(a), o = Ea(t);
  return new Set([r, m, o, n].flat(4));
}, Sa = (e) => e.map(((a) => [a.name, a.nickname, a.profile])), Ma = (e) => ae(e, te), Ba = (e) => aa(e, te), Ea = (e) => ta(e, te), te = ({ list: e }) => e.filter(Ca).map(((a) => a.parameters[1])), Ca = (e) => e.code === q || e.code === V || e.code === z, C = (e, a) => ({
  id: e.id,
  name: e.name,
  note: Da(e),
  main: a.map(((t) => ({ key: t, value: e[t], id: e.id })))
}), Da = (e) => sa(e.note, ((a, t) => ({
  key: a,
  value: t,
  id: e.id
}))), Aa = (e) => C(e, ["name", "nickname", "profile"]), $a = (e) => C(e, ["name"]), Fa = (e) => C(e, ["name"]), Ka = (e) => C(e, ["name", "description", "message1", "message2"]), Pa = (e) => C(e, ["name", "description"]), Ra = (e) => C(e, ["name", "description"]), ja = (e) => C(e, ["name", "description"]), Ua = (e) => C(e, ["name", "message1", "message2", "message3", "message4"]), La = (e, a, t, s) => B(e, a, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (e, a, t, s) => e.map(((r) => _a(r, a, t, s))), _a = (e, a, t, s) => ({ main: e.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = G(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: a,
    uuid: s(n)
  };
})), note: qa(e.note, a, t, s) }), qa = (e, a, t, s) => e.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: a,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Va = (e) => ({ gameTitle: e.gameTitle, currencyUnit: e.currencyUnit, equipTypes: [...e.equipTypes], armorTypes: [...e.armorTypes], weaponTypes: [...e.weaponTypes], terms: {
  basic: xa(e.terms.basic),
  commands: fa(e.terms.commands),
  messages: va(e.terms.messages),
  params: ha(e.terms.params)
} }), be = (e, a) => {
  const t = T(e.actors, Aa), s = Oa(e.armors), r = T(e.classes, Fa), n = T(e.enemies, $a), m = T(e.items, Pa), o = T(e.mapInfos, ((u) => u)), i = T(e.skills, Ka), d = T(e.states, Ua), c = T(e.weapons, Ra), l = Ha(e.commonEvents, a), v = Xa(e.troops, a), p = Ya(e.mapFiles, a), b = za(e.system), y = Ja([t, s, r, n, m, o, i, d, c, v, l]).concat(Ga(e.mapFiles, e.system));
  return { value: { eventData: { commonEvents: l.data, troops: v.data.flat() }, mapFiles: p, system: b, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: d.data,
    weapons: c.data
  } }, errors: y };
}, za = (e) => ({ message: e.message, system: e.system ? Va(e.system) : null }), T = (e, a) => ({
  error: e.error,
  fileName: e.fileName,
  success: e.success,
  data: e.success ? e.data.map(a) : []
}), Ja = (e) => e.filter(((a) => !a.success)).map(((a) => ({ fileName: a.fileName, error: a.error }))), Ga = (e, a) => [...e.info.success === !1 ? [{
  fileName: e.info.filename,
  error: e.info.message
}] : [], ...e.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...a.system === null ? [{
  fileName: L,
  error: a.message
}] : []], Oa = (e) => T(e, ja), Ha = (e, a) => T(e, ((t) => a.extractCommonEventText(t))), Xa = (e, a) => T(e, ((t) => a.extractBattleText(t))), Ya = (e, a) => {
  const t = e.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: a.extractMapTexts(s.map)
  })));
  return { info: e.info, invalidMaps: e.invalidMaps, validMaps: t };
}, se = (e, a, t, s, r, n) => {
  if (e.code === P) return Wa(e, a, t, r, n);
  const m = G(e.value);
  return { otherData: n, uuid: r(m), kind: s(e), baseText: m, filename: t, id: a, speaker: e.speaker ?? "", dataKey: Qa(e) };
}, Qa = (e) => `code:${e.code}`, Wa = (e, a, t, s, r) => {
  const n = G(e.value);
  return {
    otherData: [e.pluginName, ...r],
    uuid: s(n),
    kind: `${Za(e)}`,
    baseText: n,
    filename: t,
    id: a,
    dataKey: `code:${e.code}-${e.argName}`
  };
}, Za = (e) => `${e.commandName}.${e.argTitle}`, et = (e, a, t, s) => a.flatMap(((r) => at(e, r, t, s))), at = (e, a, t, s) => a.commands.filter(ke).map(((r) => se(r, a.eventId, e, s, t, [a.name]))), tt = (e, a, t, s) => e.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => se(m, r.eventId, a, t, s, [n])));
})), ke = (e) => e.value.length > 0, st = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, rt = (e) => {
  const a = e.trim().toLowerCase();
  return a === "true" || a === "false";
}, nt = (e) => {
  const a = e.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(a);
}, U = (e) => {
  const a = e.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(a);
}, we = (e, a) => {
  const t = mt(e);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = ct(r, a);
    return {
      key: s,
      kinds: it(n),
      values: r.map(ot)
    };
  }));
}, mt = (e) => {
  const a = e.flatMap(((t) => t.notes.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: s.name, soruce: t.source })))));
  return Map.groupBy(a, ((t) => t.key));
}, ot = (e) => ({
  value: e.value,
  id: e.id,
  soruce: e.soruce,
  name: e.name
}), it = (e) => [e.isBoolean ? "boolean" : null, e.isNumber ? "number" : null, e.isBgm ? "bgm" : null, e.isBgs ? "bgs" : null, e.isMe ? "me" : null, e.isSe ? "se" : null, e.isPicture ? "pictures" : null, e.isCharacter ? "characters" : null, e.isFaceset ? "faces" : null, e.isBattler ? "battlers" : null, e.isSvBattler ? "svBattlers" : null, e.isEnemy ? "enemies" : null, e.isTileset ? "tilesets" : null, e.isMovie ? "movies" : null, e.isScript ? "script" : null].filter(((a) => a !== null)), ct = (e, { audioFiles: a, imageFiles: t, otherFiles: s }) => e.reduce(((r, n) => ({
  isBoolean: r.isBoolean && rt(n.value),
  isNumber: r.isNumber && nt(n.value),
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
}), lt = (e) => ({
  source: e.filename,
  notes: [...e.map.noteItems.map(pt), ...e.map.events.map(dt).flat()]
}), dt = (e) => e.noteItems.map(((a) => ({ id: e.eventId, key: a.key, value: a.value, name: e.name }))), pt = (e) => ({
  id: 0,
  key: e.key,
  value: e.value,
  name: ""
}), ut = (e, a) => ({ eventId: e.eventId, name: e.name, pageIndex: e.pageIndex, commands: e.commands, note: e.note, noteItems: e.noteItems.filter(a) }), S = (e, a) => e.map(((t) => {
  const s = t.note.filter(a);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(yt), yt = (e) => e.note.length > 0 || e.main.length > 0, Ie = (e, a) => {
  const t = vt(e.value.mainData, a), s = ft(e.value.mapFiles.validMaps, a);
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
}, Gs = (e, a) => {
  const t = Ee(e, a), s = U(t);
  return Me(e, s);
}, gt = (e, a) => {
  const t = Be(e, a);
  return U(t);
}, Os = (e, a) => {
  const t = gt(e, a);
  return Se(e, t);
}, Me = (e, a) => e.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => a.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => ut(n, r)))
  }) };
  var s, r;
})), Be = (e, a) => {
  const t = ht(e);
  return we(t, a);
}, ht = (e) => [M(ue, e.actors), M(ye, e.skills), M(ge, e.items), M(he, e.weapons), M(ve, e.armors), M(fe, e.classes), M(xe, e.states), M(Ne, e.enemies)], M = (e, a) => ({
  source: e,
  notes: a.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ee = (e, a) => {
  const t = e.map(lt);
  return we(t, a);
}, vt = (e, a) => {
  const t = Be(e, a), s = U(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Se(e, s)
  };
}, ft = (e, a) => {
  const t = Ee(e, a), s = U(t);
  return { noteSummary: t, validMaps: Me(e, s) };
}, xt = (e, a, t, s) => [{
  filename: a,
  id: 0,
  baseText: e.gameTitle,
  uuid: s(e.gameTitle),
  kind: t.gameTitle,
  dataKey: "gameTitle"
}, {
  filename: a,
  id: 0,
  baseText: e.currencyUnit,
  uuid: s(e.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Y(a, e.equipTypes, "equipTypes", t.equipTypes, s), ...Y(a, e.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Y(a, e.armorTypes, "armorTypes", t.armorTypes, s)], Y = (e, a, t, s, r) => a.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = G(n);
  return { filename: e, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Hs = (e, a, t, s, r, n) => {
  const m = be(e.data, n), o = Ie(m, e);
  return Tt(e.data.actors.data, o, a, t, s, r);
}, Nt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Tt = (e, a, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = a.data.value;
  return {
    noteSummaries: Nt(a),
    pluginParams: [],
    map: bt(i, r, n),
    commonEvents: et(pa, m.commonEvents, r, n),
    troops: tt(m.troops, ua, n, r),
    armors: B(o.armors, ve, s, r),
    system: wt(d, r, t),
    actors: { texts: B(o.actors, ue, s, r), controlChars: na(e) },
    classes: B(o.classes, fe, s, r),
    enemies: B(o.enemies, Ne, s, r),
    items: B(o.items, ge, s, r),
    skills: B(o.skills, ye, s, r),
    states: La(o.states, xe, s, r),
    weapons: B(o.weapons, he, s, r)
  };
}, bt = (e, a, t) => e.validMaps.map(((s) => kt(s, a, t))).flat(3), kt = (e, a, t) => e.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = st(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(ke).map(((c) => se(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(s, e, a, t))), wt = (e, a, t) => e.system === null ? { gameTitle: "", filename: L, texts: [] } : {
  gameTitle: e.system.gameTitle,
  filename: L,
  texts: xt(e.system, L, t, a)
}, It = (e, a, t, s, r, n, m) => {
  const o = { hashText: m, newText: (i) => n.get(i) ?? i };
  return {
    textDictionary: St(n, m),
    targetNoteKeys: Mt(r),
    actorTexts: wa(e, a, t, s, o)
  };
}, St = (e, a) => Array.from(e.entries()).map((([t, s]) => ({ key: a(t), value: s }))), Mt = (e) => {
  const a = U(e);
  return Array.from(a);
}, Xs = (e, a) => {
  const t = a.actorTextDictionary.get(e);
  if (t)
    return a.textDictionary.get(t);
}, Ys = (e) => ({
  targetNoteKeys: new Set(e.targetNoteKeys),
  textDictionary: new Map(e.textDictionary.map((({ key: a, value: t }) => [a, t]))),
  actorTextDictionary: new Map(e.actorTexts.map((({ key: a, value: t }) => [a, t])))
}), Bt = (e) => [{
  data: e,
  filename: Ta
}], Qs = (e) => {
  const a = Et(e);
  return Ct(a);
}, Et = (e) => e.reduce(((a, t) => {
  const s = Dt(t);
  return s.key.length === 0 || s.value.length === 0 || (a.validEntries.push({ source: t, normalized: s }), a.rawKeys.add(t.key)), a;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), Ct = (e) => e.validEntries.reduce(((a, t) => (/\s$/.test(t.source.key) && e.rawKeys.has(t.normalized.key) ? a.errorItems.push(t.source) : a.items.push(t.normalized), a)), {
  errorItems: [],
  items: []
}), Dt = (e) => ({ key: e.key.trimEnd(), value: e.value.trimEnd() }), Ce = (e, a, t) => e.filter(((s) => s.code === oe || s.code === ie || s.code === ce)).map(((s) => $t(s, a, t))), At = {
  [ce]: "weapon",
  [oe]: "armor",
  [ie]: "item"
}, $t = (e, a, t) => {
  const s = ma(e) ? { direct: !1, variableId: e.parameters[3] } : {
    direct: !0,
    value: e.parameters[3]
  }, r = e.parameters[1] === oa ? a.gain : e.parameters[1] === ia ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: At[e.code],
    dataId: ca(e),
    code: e.code,
    commandNameMZ: t(e.code),
    operation: r,
    ...n,
    ...s
  };
}, Ws = (e, a, t) => ae(e.map, ((s, r, n) => ({
  ...Ft(s),
  commands: Ce(s.list, a, t),
  eventName: n.name,
  pageIndex: r
}))), Ft = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Zs = (e, a, t) => la(e, ((s, r, n) => ({
  commands: Ce(s.list, a, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Kt = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, h = (e, a) => {
  const t = e.trimEnd(), s = a(t);
  return s ? s.trimEnd() : t;
}, f = (e, a) => {
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
  const t = E(e.note, a), s = f(e.name, a);
  return { ...e, name: s, note: t };
}, $e = (e, a) => {
  const t = E(e.note, a), s = f(e.name, a);
  return {
    ...e,
    name: s,
    note: t
  };
}, Fe = (e, a) => {
  const t = E(e.note, a), s = f(e.name, a), r = f(e.description, a), n = f(e.message1, a), m = f(e.message2, a);
  return { ...e, name: s, description: r, message1: n, message2: m, note: t };
}, A = (e, a) => {
  const t = E(e.note, a), s = f(e.name, a), r = f(e.description, a);
  return { ...e, name: s, description: r, note: t };
}, Ke = (e, a) => {
  const t = E(e.note, a), s = f(e.name, a), r = f(e.message1, a), n = f(e.message2, a), m = f(e.message3, a), o = f(e.message4, a);
  return {
    ...e,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, Pt = (e, a) => {
  switch (e.code) {
    case ee:
      return jt(e, a);
    case R:
      return Lt(e, a);
    case F:
    case J:
    case _:
    case $:
      return Rt(e, a);
    case q:
    case z:
    case V:
      return Ut(e, a);
    default:
      return e;
  }
}, Rt = (e, a) => {
  const t = h(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, jt = (e, a) => {
  const t = e.parameters[4] ? h(e.parameters[4], a) : "";
  return Na({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Ut = (e, a) => {
  const t = h(e.parameters[1], a);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], t] };
}, Lt = (e, a) => {
  const t = e.parameters[0].map(((s) => h(s, a)));
  return {
    code: R,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, er = (e, a, t = `
`) => _t(e, ((s) => a.get(s)), t), _t = (e, a, t = `
`) => da(e.note, ((s) => h(s.value, a)), t), ar = (e, a) => Pe(e, ((t) => Kt(t, a))), Pe = (e, a) => ({
  params: zt(e.params, ((t) => h(t, a))),
  messages: Jt(e.messages, ((t) => h(t, a))),
  basic: qt(e.basic, ((t) => h(t, a))),
  commands: Vt(e.commands, ((t) => h(t, a)))
}), qt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Vt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], zt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Jt = (e, a) => ({
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
}, Gt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === J), ((m) => m.code === _)))(e, a);
  return Ot(s) ? new re(_, s, t) : new Ue(s, t);
}, Ot = (e) => e.parameters[0] === "選択肢ヘルプ", Ht = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === ee), ((m) => m.code === F)))(e, a);
  return new re(F, s, t);
}, Xt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === j), ((m) => m.code === le)))(e, a);
  return new Ue(s, t);
}, Yt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => O(r, n, ((m) => m.code === de), ((m) => m.code === $)))(e, a);
  return new re($, s, t);
}, Qt = {
  [ee]: (e, a, t) => t.showMessage(Ht(e, a), a, e),
  [j]: (e, a, t) => t.script(Xt(e, a), a, e),
  [J]: (e, a, t) => t.comment(Gt(e, a), a, e),
  [de]: (e, a, t) => t.showScrollingText(Yt(e, a), a, e)
}, Le = (e) => Qt[e], Wt = (e, a, t, s) => {
  if (e.code === F || e.code === $ || e.code === _) return;
  const r = Le(e.code);
  return r ? r(t, a, s) : e.code === R ? Zt(e) : e.code === q || e.code === z || e.code === V ? es(e) : e.code !== le ? e : void 0;
}, Zt = (e) => ({
  code: R,
  indent: e.indent,
  parameters: [e.parameters[0].map(((a) => a.trimEnd())), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), es = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), as = (e) => ({ code: j, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), ts = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: F,
    indent: e.header.indent,
    parameters: [a]
  };
  return [rs(e.header), t];
}, ss = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: $, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, rs = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, H = (e, a) => {
  const t = (s) => a.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: as, showMessage: ts, showScrollingText: ss };
    return s.map(((n, m) => n.code === P ? n : Wt(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(e).map(((s) => s.code === P ? a.pluginCommand(s) : s.code === j ? a.scriptCommand(s) : Pt(s, t)));
}, _e = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: H(t.list, a) })))
}), qe = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: H(e.list, a)
}), tr = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: H(e.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a })
}), sr = (e, a) => ze(e, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a, isReplaceTargetNote: () => !1 }), Ve = (e, a) => ze(e, a), ze = (e, a) => ({
  note: E(e.note, a),
  displayName: f(e.displayName, a),
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
}, Ge = (e, a) => ({ ...e, pages: e.pages.map(((t) => Je(t, a))) }), rr = (e, a) => ({
  ...e,
  events: e.events.map(((t) => t ? Ge(t, a) : null))
}), nr = (e, a) => e.map(((t) => Je(t, a))), mr = (e, a) => e.map(((t) => Ge(t, a))), or = (e) => Oe(e, (() => [])), X = (e, a) => Oe(e, a), Oe = (e, a) => e.flatMap(((t, s) => ns(t, s, e, a))).filter(((t) => t !== null)), ns = (e, a, t, s) => {
  if (e.code === P) return s(e);
  if (e.code === R) return ka(e);
  const r = Le(e.code);
  if (r) {
    const n = r(t, a, ms);
    if (n !== void 0) return [n];
  }
  return e.code === z || e.code === q || e.code === V ? ba(e) : null;
}, ms = {
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
}, os = (e, a = () => []) => ({ eventId: e.id, name: e.name, commands: X(e.list, a) }), is = (e, a = () => []) => e.pages.map(((t, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: X(t.list, a)
}))), cs = (e, a = () => []) => ({ note: e.note, noteItems: pe(e.note), displayedName: e.displayName, events: ls(e, a) }), ls = (e, a) => ae(e, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, a),
  note: r.note,
  noteItems: pe(r.note),
  name: r.name
}))), He = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), Xe = (e) => e.kind === "struct", Ye = (e) => e.attr.kind === "struct[]", ds = (e) => Qe[e.kind.replace("[]", "")].type === "number", ps = (e) => Qe[e.kind.replace("[]", "")].type === "string", D = {
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
function us(e) {
  return ys(e, ((a) => !0), ((a) => !0));
}
const ys = (e, a, t) => {
  const s = [], r = [], n = [], m = [];
  return e.forEach(((o) => {
    if (Xe(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Ye(o)) r.push(o);
    else if (He(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function gs(e) {
  const a = e.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(a);
}
const hs = (e, a) => {
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
    const l = i.frames[i.frames.length - 1], v = i.frames.slice(0, -1);
    if (l.ancestry.includes(l.schemaName)) return { frames: v, items: i.items, errs: [...i.errs, { code: c.cyclicStruct, path: l.basePath }] };
    const p = d.get(l.schemaName);
    if (!p) return {
      frames: v,
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
          objectSchema: gs(u.scalars),
          name: w,
          scalarArrays: vs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? hs(u.scalars, g) : void 0
        };
      })(p, { path: l.basePath, structName: l.schemaName });
      return v.push(...b), {
        frames: v,
        items: [...i.items, y],
        errs: i.errs
      };
    }
    return v.push(...b), { frames: v, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const fs = (e, a, t, s = We) => Ze(e.attr.struct, `${a}["${e.name}"]`, t, s), xs = (e, a, t, s = We) => Ze(e.attr.struct, `${a}["${e.name}"][*]`, t, s), Ns = (e, a, t, s) => ((r) => Xe(r.attr))(t) ? ks(e, t, s) : Ye(t) ? ws(e, t, s) : He(t) ? Ts(e, a, t) : bs(e, a, t), Ts = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), bs = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ks = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: fs(a, "$", t)
}), ws = (e, a, t) => ({
  structArrays: xs(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Is = (e, a) => a.map(((t) => Ss(e, t))).flat(3), Ss = (e, a) => [a.top ? Q(a, e, a.top, "") : [], a.structs.map(((t) => Q(a, e, t))), a.structArrays.map(((t) => Q(a, e, t)))], Q = (e, a, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, d, c) => d.pathSegments(i).map((({ value: l, segments: v }) => ((p, b, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: p.rootName, rootType: p.rootCategory, structName: b, value: y, param: { name: w, attr: I } } : null;
  })(m, o, l, v, c))).filter(((l) => l !== null)))(e, s, a, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, d, c) => {
    const l = c.jsonPathJS.find(d);
    if (!Array.isArray(l)) return [];
    const v = c.schema.attr;
    return ps(v) ? ((p, b, y, u) => b.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, l, i, c.schema) : ds(v) ? ((p, b, y, u) => b.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, l, i, c.schema) : [];
  })(e, s, a, m)));
  return [r, n].flat(2);
}, W = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: me(e.scalarArrays, e.name, a), scalar: Ms(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: me(e.scalarArrays, e.name, a)
}, me = (e, a, t) => e.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: a }))), Ms = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Bs = (e, a, t, s) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Es(a, t, s)
}), Es = (e, a, t) => e.args.map(((s) => ((r, n) => {
  const m = r.scalars ? W(r.scalars, n) : void 0, o = r.structs.items.map(((d) => W(d, n))), i = r.structArrays.items.map(((d) => W(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(Ns("args", e.command, s, a), t))), Cs = (e, a) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, us(r.params)]))))(e.schema.structs);
  return Ds(e.pluginName, e.schema.commands, t, a);
}, Ds = (e, a, t, s) => a.map(((r) => [`${e}:${r.command}`, Bs(e, r, t, s)])), As = (e, a) => {
  const [t, s] = e.parameters, r = `${t}:${s}`, n = a.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Is(m, o.extractors) }))(ga(e.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, ir = (e) => {
  const a = new Map(e);
  return new ne(a);
}, cr = () => new ne(/* @__PURE__ */ new Map()), lr = (e) => {
  const a = e.flatMap(((t) => Cs(t, ((s) => new ya(s)))));
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
    return cs(a, ((t) => this.extractArgs(t)));
  }
  extractBattleText(a) {
    return is(a, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(a) {
    return os(a, ((t) => this.extractArgs(t)));
  }
  extractArgs(a) {
    const t = As(a, this._commandMap);
    return t.args.filter($s).map(((s) => ({
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
const $s = (e) => typeof e.value == "string", dr = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), Z = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), pr = (e) => [Z(e, "faceName", "faces"), Z(e, "characterName", "characters"), Z(e, "battlerName", "sv_actors")], Fs = (e, a) => ({
  tilesets: e.tilesets,
  animations: e.animations,
  actors: k(e.actors, ((t) => De(t, a))),
  armors: k(e.armors, ((t) => A(t, a))),
  classes: k(e.classes, ((t) => $e(t, a))),
  commonEvents: k(e.commonEvents, ((t) => qe(t, a))),
  enemies: k(e.enemies, ((t) => Ae(t, a))),
  items: k(e.items, ((t) => A(t, a))),
  mapInfos: e.mapInfos,
  skills: k(e.skills, ((t) => Fe(t, a))),
  states: k(e.states, ((t) => Ke(t, a))),
  system: { message: e.system.message, system: e.system.system ? Re(e.system.system, a.replaceText) : null },
  troops: k(e.troops, ((t) => _e(t, a))),
  weapons: k(e.weapons, ((t) => A(t, a))),
  mapFiles: { info: e.mapFiles.info, invalidMaps: e.mapFiles.invalidMaps, validMaps: e.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: Ve(t.map, a)
  }))) }
}), k = (e, a) => ({ success: e.success, fileName: e.fileName, error: e.error, data: e.success ? e.data.map(a) : [] }), ea = (e, a, t, s) => {
  const r = be(e, t), n = Ie(r, { audioFiles: a.audioFiles, imageFiles: a.imageFiles, otherFiles: a.otherFiles }), m = Ks(n.nonTextNoteKeys, s);
  return { data: Fs(e, m), note: n };
}, Ks = (e, a) => ({
  pluginCommand: (t) => a.pluginCommand(t),
  scriptCommand: (t) => a.scriptCommand(t),
  replaceText: (t) => a.replaceText(t),
  isReplaceTargetNote: (t) => !!e.has(t.key) && a.isReplaceTargetNote(t)
}), ur = (e, a) => Ve(e, { replaceText: (t) => a.textDictionary.get(t), pluginCommand: (t) => t, scriptCommand: (t) => t, isReplaceTargetNote: (t) => a.targetNoteKeys.has(t.key) }), yr = (e, a) => {
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
    troops: e.troops.map(((s) => _e(s, t))),
    weapons: e.weapons.map(((s) => A(s, t))),
    system: Re(e.system, ((s) => a.textDictionary.get(s))),
    commonEvents: e.commonEvents.map(((s) => qe(s, t)))
  };
}, gr = (e, a) => {
  const t = Ps(e, a);
  return Te(t);
}, Ps = (e, a) => {
  const t = {
    replaceText: (s) => e.dictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.textKeys.has(s.key)
  };
  return ea(e.data, e.assetBundle, a, t).data;
}, hr = (e, a, t) => {
  const s = Rs(e, a, t);
  return [...Te(s.main), ...Bt(s.aux)];
}, Rs = ({ assetBundle: e, data: a, dictionary: t, textKeys: s }, r, n) => {
  const m = ea(a, e, r, { replaceText: (o) => n(o), pluginCommand: (o) => o, scriptCommand: (o) => o, isReplaceTargetNote: (o) => s.has(o.key) });
  return { main: m.data, aux: It(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((o) => o.map)), m.note.dataNoteSummary, t, n) };
};
export {
  Ps as $,
  ja as A,
  Fa as B,
  $a as C,
  or as D,
  X as E,
  Pa as F,
  be as G,
  Ka as H,
  Ua as I,
  Va as J,
  Ra as K,
  ka as L,
  Bt as M,
  Xs as N,
  rt as O,
  nt as P,
  gt as Q,
  Os as R,
  Qs as S,
  Gs as T,
  De as U,
  A as V,
  Pt as W,
  $e as X,
  qe as Y,
  tr as Z,
  nr as _,
  Ie as a,
  gr as a0,
  Rs as a1,
  hr as a2,
  Ae as a3,
  H as a4,
  Je as a5,
  Ve as a6,
  rr as a7,
  sr as a8,
  _t as a9,
  er as aa,
  Ge as ab,
  Fs as ac,
  ea as ad,
  yr as ae,
  ur as af,
  Fe as ag,
  Ke as ah,
  ar as ai,
  Re as aj,
  Kt as ak,
  _e as al,
  mr as am,
  U as an,
  we as ao,
  Ee as ap,
  Hs as b,
  Ys as c,
  _a as d,
  B as e,
  La as f,
  wa as g,
  It as h,
  cr as i,
  ir as j,
  lr as k,
  Ia as l,
  is as m,
  os as n,
  pr as o,
  dr as p,
  $t as q,
  Ce as r,
  Ws as s,
  Zs as t,
  cs as u,
  Da as v,
  As as w,
  C as x,
  Aa as y,
  ba as z
};
