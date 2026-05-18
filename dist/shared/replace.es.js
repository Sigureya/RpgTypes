import { as as R, v as V, E as z, w as J, b as ie, q as ce, N as le, aS as F, P as _, Q as G, aP as P, aM as j, aO as ae, az as de, ay as U, aR as pe } from "./makeAudio.es.js";
import { n as O } from "./normalText.es.js";
import { d as te, s as ta, v as sa, x as ra, p as na, f as ma, q as oa, O as ia, D as ca, n as la, e as da, B as C, A as pa, w as ue } from "./isScript.es.js";
import { l as L, a as ye, i as ge, f as he, c as fe, e as ve, d as xe, j as Ne, b as Te, h as ua, g as ya } from "./constants.es.js";
import { JSONPathJS as ga } from "jsonpath-js";
import { parseDeepRecord as ha } from "@sigureya/rmmz-plugin-schema";
import { k as fa, v as va, u as xa, r as Na, a as Ta } from "./makeSystem.es.js";
import { a as ba, r as be } from "./writeData.es.js";
const se = (e, a, t, s, r, n) => {
  if (e.code === R) return wa(e, a, t, r, n);
  const m = O(e.value);
  return { otherData: n, uuid: r(m), kind: s(e), baseText: m, filename: t, id: a, speaker: e.speaker ?? "", dataKey: ka(e) };
}, ka = (e) => `code:${e.code}`, wa = (e, a, t, s, r) => {
  const n = O(e.value);
  return {
    otherData: [e.pluginName, ...r],
    uuid: s(n),
    kind: `${Ia(e)}`,
    baseText: n,
    filename: t,
    id: a,
    dataKey: `code:${e.code}-${e.argName}`
  };
}, Ia = (e) => `${e.commandName}.${e.argTitle}`, Sa = (e, a, t, s) => a.flatMap(((r) => Ma(e, r, t, s))), Ma = (e, a, t, s) => a.commands.filter(ke).map(((r) => se(r, a.eventId, e, s, t, [a.name]))), Ea = (e, a, t, s) => e.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => se(m, r.eventId, a, t, s, [n])));
})), ke = (e) => e.value.length > 0, Ba = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), Ca = (e) => e.parameters[0].map(((a, t) => ({ code: 102, paramIndex: t, value: a }))), Da = (e, a, t, s, r) => {
  const n = Array.from($a(e, a, t, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter(Aa);
}, Aa = (e) => e !== null && e.key.length > 0, $a = (e, a, t, s) => {
  const r = Fa(e), n = s.map(Pa), m = Ka(a), o = Ra(t);
  return new Set([r, m, o, n].flat(4));
}, Fa = (e) => e.map(((a) => [a.name, a.nickname, a.profile])), Pa = (e) => te(e, re), Ka = (e) => ta(e, re), Ra = (e) => sa(e, re), re = ({ list: e }) => e.filter(ja).map(((a) => a.parameters[1])), ja = (e) => e.code === V || e.code === z || e.code === J, D = (e, a) => ({
  id: e.id,
  name: e.name,
  note: Ua(e),
  main: a.map(((t) => ({ key: t, value: e[t], id: e.id })))
}), Ua = (e) => ra(e.note, ((a, t) => ({
  key: a,
  value: t,
  id: e.id
}))), qa = (e) => D(e, ["name", "nickname", "profile"]), La = (e) => D(e, ["name"]), _a = (e) => D(e, ["name"]), Va = (e) => D(e, ["name", "description", "message1", "message2"]), za = (e) => D(e, ["name", "description"]), Ja = (e) => D(e, ["name", "description"]), Ga = (e) => D(e, ["name", "description"]), Oa = (e) => D(e, ["name", "message1", "message2", "message3", "message4"]), Ha = (e, a, t, s) => B(e, a, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (e, a, t, s) => e.map(((r) => Xa(r, a, t, s))), Xa = (e, a, t, s) => ({ main: e.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = O(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: a,
    uuid: s(n)
  };
})), note: Ya(e.note, a, t, s) }), Ya = (e, a, t, s) => e.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: a,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Qa = (e, a, t, s) => [{ filename: a, id: 0, baseText: e.gameTitle, uuid: s(e.gameTitle), kind: t.gameTitle, dataKey: "gameTitle" }, {
  filename: a,
  id: 0,
  baseText: e.currencyUnit,
  uuid: s(e.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Q(a, e.equipTypes, "equipTypes", t.equipTypes, s), ...Q(a, e.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Q(a, e.armorTypes, "armorTypes", t.armorTypes, s)], Q = (e, a, t, s, r) => a.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = O(n);
  return { filename: e, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Wa = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: { basic: Na(e.terms.basic), commands: xa(e.terms.commands), messages: va(e.terms.messages), params: fa(e.terms.params) }
}), we = (e, a) => {
  const t = T(e.actors, qa), s = tt(e.armors), r = T(e.classes, _a), n = T(e.enemies, La), m = T(e.items, za), o = T(e.mapInfos, ((u) => u)), i = T(e.skills, Va), d = T(e.states, Oa), c = T(e.weapons, Ja), l = st(e.commonEvents, a), f = rt(e.troops, a), p = nt(e.mapFiles, a), b = Za(e.system), y = et([t, s, r, n, m, o, i, d, c, f, l]).concat(at(e.mapFiles, e.system));
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
}, Za = (e) => ({ message: e.message, system: e.system ? Wa(e.system) : null }), T = (e, a) => ({
  error: e.error,
  fileName: e.fileName,
  success: e.success,
  data: e.success ? e.data.map(a) : []
}), et = (e) => e.filter(((a) => !a.success)).map(((a) => ({ fileName: a.fileName, error: a.error }))), at = (e, a) => [...e.info.success === !1 ? [{
  fileName: e.info.filename,
  error: e.info.message
}] : [], ...e.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...a.system === null ? [{
  fileName: L,
  error: a.message
}] : []], tt = (e) => T(e, Ga), st = (e, a) => T(e, ((t) => a.extractCommonEventText(t))), rt = (e, a) => T(e, ((t) => a.extractBattleText(t))), nt = (e, a) => {
  const t = e.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: a.extractMapTexts(s.map)
  })));
  return { info: e.info, invalidMaps: e.invalidMaps, validMaps: t };
}, mt = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, ot = (e) => {
  const a = e.trim().toLowerCase();
  return a === "true" || a === "false";
}, it = (e) => {
  const a = e.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(a);
}, q = (e) => {
  const a = e.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(a);
}, Ie = (e, a) => {
  const t = ct(e);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = pt(r, a);
    return { key: s, kinds: dt(n), values: r.map(lt) };
  }));
}, ct = (e) => {
  const a = e.flatMap(((t) => t.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: t.source
  })))));
  return Map.groupBy(a, ((t) => t.key));
}, lt = (e) => ({
  value: e.value,
  id: e.id,
  soruce: e.soruce,
  name: e.name
}), dt = (e) => [e.isBoolean ? "boolean" : null, e.isNumber ? "number" : null, e.isBgm ? "bgm" : null, e.isBgs ? "bgs" : null, e.isMe ? "me" : null, e.isSe ? "se" : null, e.isPicture ? "pictures" : null, e.isCharacter ? "characters" : null, e.isFaceset ? "faces" : null, e.isBattler ? "battlers" : null, e.isSvBattler ? "svBattlers" : null, e.isEnemy ? "enemies" : null, e.isTileset ? "tilesets" : null, e.isMovie ? "movies" : null, e.isScript ? "script" : null].filter(((a) => a !== null)), pt = (e, { audioFiles: a, imageFiles: t, otherFiles: s }) => e.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ot(n.value),
  isNumber: r.isNumber && it(n.value),
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
  isScript: r.isScript && na(n.value)
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
}), ut = (e) => ({
  source: e.filename,
  notes: [...e.map.noteItems.map(gt), ...e.map.events.map(yt).flat()]
}), yt = (e) => e.noteItems.map(((a) => ({ id: e.eventId, key: a.key, value: a.value, name: e.name }))), gt = (e) => ({
  id: 0,
  key: e.key,
  value: e.value,
  name: ""
}), ht = (e, a) => ({ eventId: e.eventId, name: e.name, pageIndex: e.pageIndex, commands: e.commands, note: e.note, noteItems: e.noteItems.filter(a) }), S = (e, a) => e.map(((t) => {
  const s = t.note.filter(a);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(ft), ft = (e) => e.note.length > 0 || e.main.length > 0, Se = (e, a) => {
  const t = Nt(e.value.mainData, a), s = Tt(e.value.mapFiles.validMaps, a);
  return { nonTextNoteKeys: t.nonTextNoteKeys, dataNoteSummary: t.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: e.errors,
    value: {
      mainData: t.mainData,
      mapFiles: { info: e.value.mapFiles.info, invalidMaps: e.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: e.value.eventData,
      system: e.value.system
    }
  } };
}, Me = (e, a) => {
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
}, Hs = (e, a) => {
  const t = Ce(e, a), s = q(t);
  return Ee(e, s);
}, vt = (e, a) => {
  const t = Be(e, a);
  return q(t);
}, Xs = (e, a) => {
  const t = vt(e, a);
  return Me(e, t);
}, Ee = (e, a) => e.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => a.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => ht(n, r)))
  }) };
  var s, r;
})), Be = (e, a) => {
  const t = xt(e);
  return Ie(t, a);
}, xt = (e) => [M(ye, e.actors), M(ge, e.skills), M(he, e.items), M(fe, e.weapons), M(ve, e.armors), M(xe, e.classes), M(Ne, e.states), M(Te, e.enemies)], M = (e, a) => ({
  source: e,
  notes: a.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ce = (e, a) => {
  const t = e.map(ut);
  return Ie(t, a);
}, Nt = (e, a) => {
  const t = Be(e, a), s = q(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Me(e, s)
  };
}, Tt = (e, a) => {
  const t = Ce(e, a), s = q(t);
  return { noteSummary: t, validMaps: Ee(e, s) };
}, Ys = (e, a, t, s, r, n) => {
  const m = we(e.data, n), o = Se(m, e);
  return kt(e.data.actors.data, o, a, t, s, r);
}, bt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], kt = (e, a, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: d } = a.data.value;
  return {
    noteSummaries: bt(a),
    pluginParams: [],
    map: wt(i, r, n),
    commonEvents: Sa(ua, m.commonEvents, r, n),
    troops: Ea(m.troops, ya, n, r),
    armors: B(o.armors, ve, s, r),
    system: St(d, r, t),
    actors: {
      texts: B(o.actors, ye, s, r),
      controlChars: ma(e)
    },
    classes: B(o.classes, xe, s, r),
    enemies: B(o.enemies, Te, s, r),
    items: B(o.items, he, s, r),
    skills: B(o.skills, ge, s, r),
    states: Ha(o.states, Ne, s, r),
    weapons: B(o.weapons, fe, s, r)
  };
}, wt = (e, a, t) => e.validMaps.map(((s) => It(s, a, t))).flat(3), It = (e, a, t) => e.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, d = mt(r);
  return [r.noteItems.map(((c) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: c.value,
    kind: `note:${c.key}`,
    uuid: m(c.value),
    dataKey: "note",
    otherData: [n.editingName, d, c.key]
  }))), r.commands.filter(ke).map(((c) => se(c, r.eventId, n.filename, o, m, [n.editingName, d, i])))];
})(s, e, a, t))), St = (e, a, t) => e.system === null ? { gameTitle: "", filename: L, texts: [] } : {
  gameTitle: e.system.gameTitle,
  filename: L,
  texts: Qa(e.system, L, t, a)
}, Mt = (e, a, t, s, r, n, m) => {
  const o = { hashText: m, newText: (i) => n.get(i) ?? i };
  return {
    textDictionary: Et(n, m),
    targetNoteKeys: Bt(r),
    actorTexts: Da(e, a, t, s, o)
  };
}, Et = (e, a) => Array.from(e.entries()).map((([t, s]) => ({ key: a(t), value: s }))), Bt = (e) => {
  const a = q(e);
  return Array.from(a);
}, Qs = (e, a) => {
  const t = a.actorTextDictionary.get(e);
  if (t)
    return a.textDictionary.get(t);
}, Ws = (e) => ({
  targetNoteKeys: new Set(e.targetNoteKeys),
  textDictionary: new Map(e.textDictionary.map((({ key: a, value: t }) => [a, t]))),
  actorTextDictionary: new Map(e.actorTexts.map((({ key: a, value: t }) => [a, t])))
}), Ct = (e) => [{
  data: e,
  filename: ba
}], Zs = (e) => {
  const a = Dt(e);
  return At(a);
}, Dt = (e) => e.reduce(((a, t) => {
  const s = $t(t);
  return s.key.length === 0 || s.value.length === 0 || (a.validEntries.push({ source: t, normalized: s }), a.rawKeys.add(t.key)), a;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), At = (e) => e.validEntries.reduce(((a, t) => (/\s$/.test(t.source.key) && e.rawKeys.has(t.normalized.key) ? a.errorItems.push(t.source) : a.items.push(t.normalized), a)), {
  errorItems: [],
  items: []
}), $t = (e) => ({ key: e.key.trimEnd(), value: e.value.trimEnd() }), er = (e) => {
  const a = /* @__PURE__ */ new Map();
  return e.forEach(((t, s) => {
    a.has(t.baseText) || a.set(t.baseText, s);
  })), a;
}, ar = (e) => {
  const a = [E(e.actors.texts), E(e.skills), E(e.items), E(e.weapons), E(e.armors), E(e.classes), E(e.states), E(e.enemies)];
  return [...e.system.texts, ...a.flat(3), ...e.commonEvents, ...e.map, ...e.troops, ...e.pluginParams.flat()];
}, E = (e) => e.map(((a) => [a.main, a.note])), De = (e, a, t) => e.filter(((s) => s.code === ie || s.code === ce || s.code === le)).map(((s) => Pt(s, a, t))), Ft = { [le]: "weapon", [ie]: "armor", [ce]: "item" }, Pt = (e, a, t) => {
  const s = oa(e) ? { direct: !1, variableId: e.parameters[3] } : {
    direct: !0,
    value: e.parameters[3]
  }, r = e.parameters[1] === ia ? a.gain : e.parameters[1] === ca ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: Ft[e.code],
    dataId: la(e),
    code: e.code,
    commandNameMZ: t(e.code),
    operation: r,
    ...n,
    ...s
  };
}, tr = (e, a, t) => te(e.map, ((s, r, n) => ({
  ...Kt(s),
  commands: De(s.list, a, t),
  eventName: n.name,
  pageIndex: r
}))), Kt = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, sr = (e, a, t) => da(e, ((s, r, n) => ({
  commands: De(s.list, a, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Rt = (e, a) => {
  const t = e.trimEnd(), s = a.get(t);
  return s ? s.trimEnd() : t;
}, h = (e, a) => {
  const t = e.trimEnd(), s = a(t);
  return s ? s.trimEnd() : t;
}, v = (e, a) => {
  const t = e.trimEnd(), s = a.replaceText(t);
  return s ? s.trimEnd() : t;
}, Ae = (e, a) => {
  const t = (o) => a.replaceText(o), s = C(e.note, a), r = h(e.name, t), n = h(e.nickname, t), m = h(e.profile, t);
  return {
    ...e,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, $e = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a);
  return { ...e, name: s, note: t };
}, Fe = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a);
  return {
    ...e,
    name: s,
    note: t
  };
}, Pe = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a), r = v(e.description, a), n = v(e.message1, a), m = v(e.message2, a);
  return { ...e, name: s, description: r, message1: n, message2: m, note: t };
}, $ = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a), r = v(e.description, a);
  return { ...e, name: s, description: r, note: t };
}, Ke = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a), r = v(e.message1, a), n = v(e.message2, a), m = v(e.message3, a), o = v(e.message4, a);
  return {
    ...e,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: t
  };
}, jt = (e, a) => {
  switch (e.code) {
    case ae:
      return qt(e, a);
    case j:
      return _t(e, a);
    case P:
    case G:
    case _:
    case F:
      return Ut(e, a);
    case V:
    case J:
    case z:
      return Lt(e, a);
    default:
      return e;
  }
}, Ut = (e, a) => {
  const t = h(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, qt = (e, a) => {
  const t = e.parameters[4] ? h(e.parameters[4], a) : "";
  return Ta({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Lt = (e, a) => {
  const t = h(e.parameters[1], a);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], t] };
}, _t = (e, a) => {
  const t = e.parameters[0].map(((s) => h(s, a)));
  return {
    code: j,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, rr = (e, a, t = `
`) => Vt(e, ((s) => a.get(s)), t), Vt = (e, a, t = `
`) => pa(e.note, ((s) => h(s.value, a)), t), nr = (e, a) => Re(e, ((t) => Rt(t, a))), Re = (e, a) => ({
  params: Gt(e.params, ((t) => h(t, a))),
  messages: Ot(e.messages, ((t) => h(t, a))),
  basic: zt(e.basic, ((t) => h(t, a))),
  commands: Jt(e.commands, ((t) => h(t, a)))
}), zt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Jt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Gt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Ot = (e, a) => ({
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
}), je = (e, a) => ({
  ...e,
  gameTitle: h(e.gameTitle, a),
  currencyUnit: h(e.currencyUnit, a),
  elements: K(e.elements, a),
  skillTypes: K(e.skillTypes, a),
  weaponTypes: K(e.weaponTypes, a),
  armorTypes: K(e.armorTypes, a),
  equipTypes: K(e.equipTypes, a),
  terms: Re(e.terms, a)
}), K = (e, a) => e.map(((t) => h(t, a))), Ue = (e) => e.map(((a) => a.parameters[0].trimEnd())).join(`
`).trimEnd();
class qe {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText() {
    return Ue(this.joinCommandBodies());
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
  constructor(a, t, s) {
    this.bodyCode = a, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return Ue(this.bodies);
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
const H = (e, a, t, s) => {
  const r = e[a];
  if (!t(r)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = a + 1; m < e.length; m++) {
    const o = e[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, Ht = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === G), ((m) => m.code === _)))(e, a);
  return Xt(s) ? new ne(_, s, t) : new qe(s, t);
}, Xt = (e) => e.parameters[0] === "選択肢ヘルプ", Yt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === ae), ((m) => m.code === P)))(e, a);
  return new ne(P, s, t);
}, Qt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === U), ((m) => m.code === de)))(e, a);
  return new qe(s, t);
}, Wt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === pe), ((m) => m.code === F)))(e, a);
  return new ne(F, s, t);
}, Zt = {
  [ae]: (e, a, t) => t.showMessage(Yt(e, a), a, e),
  [U]: (e, a, t) => t.script(Qt(e, a), a, e),
  [G]: (e, a, t) => t.comment(Ht(e, a), a, e),
  [pe]: (e, a, t) => t.showScrollingText(Wt(e, a), a, e)
}, Le = (e) => Zt[e], es = (e, a, t, s) => {
  if (e.code === P || e.code === F || e.code === _) return;
  const r = Le(e.code);
  return r ? r(t, a, s) : e.code === j ? as(e) : e.code === V || e.code === J || e.code === z ? ts(e) : e.code !== de ? e : void 0;
}, as = (e) => ({
  code: j,
  indent: e.indent,
  parameters: [e.parameters[0].map(((a) => a.trimEnd())), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), ts = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), ss = (e) => ({ code: U, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), rs = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: P,
    indent: e.header.indent,
    parameters: [a]
  };
  return [ms(e.header), t];
}, ns = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: F, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, ms = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, X = (e, a) => {
  const t = (s) => a.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ss, showMessage: rs, showScrollingText: ns };
    return s.map(((n, m) => n.code === R ? n : es(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(e).map(((s) => s.code === R ? a.pluginCommand(s) : s.code === U ? a.scriptCommand(s) : jt(s, t)));
}, _e = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: X(t.list, a) })))
}), Ve = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: X(e.list, a)
}), mr = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: X(e.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a })
}), or = (e, a) => Je(e, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a, isReplaceTargetNote: () => !1 }), ze = (e, a) => Je(e, a), Je = (e, a) => ({
  note: C(e.note, a),
  displayName: v(e.displayName, a),
  events: e.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: X(n.list, r) }))) }))(t, a) : null)),
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
}), Ge = (e, a) => {
  const t = a(e.list);
  return { ...e, list: t };
}, Oe = (e, a) => ({ ...e, pages: e.pages.map(((t) => Ge(t, a))) }), ir = (e, a) => ({
  ...e,
  events: e.events.map(((t) => t ? Oe(t, a) : null))
}), cr = (e, a) => e.map(((t) => Ge(t, a))), lr = (e, a) => e.map(((t) => Oe(t, a))), dr = (e) => He(e, (() => [])), Y = (e, a) => He(e, a), He = (e, a) => e.flatMap(((t, s) => os(t, s, e, a))).filter(((t) => t !== null)), os = (e, a, t, s) => {
  if (e.code === R) return s(e);
  if (e.code === j) return Ca(e);
  const r = Le(e.code);
  if (r) {
    const n = r(t, a, is);
    if (n !== void 0) return [n];
  }
  return e.code === J || e.code === V || e.code === z ? Ba(e) : null;
}, is = {
  comment: (e) => ({ code: G, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: P, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  script: (e) => ((a) => ({ code: U, paramIndex: 0, value: a.getBodyText() }))(e),
  showScrollingText: (e) => ((a) => ({
    code: F,
    paramIndex: 0,
    value: a.getBodyText()
  }))(e)
}, cs = (e, a = () => []) => ({ eventId: e.id, name: e.name, commands: Y(e.list, a) }), ls = (e, a = () => []) => e.pages.map(((t, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: Y(t.list, a)
}))), ds = (e, a = () => []) => ({ note: e.note, noteItems: ue(e.note), displayedName: e.displayName, events: ps(e, a) }), ps = (e, a) => te(e, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(t.list, a),
  note: r.note,
  noteItems: ue(r.note),
  name: r.name
}))), Xe = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), Ye = (e) => e.kind === "struct", Qe = (e) => e.attr.kind === "struct[]", us = (e) => We[e.kind.replace("[]", "")].type === "number", ys = (e) => We[e.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, We = {
  string: A,
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
function gs(e) {
  return hs(e, ((a) => !0), ((a) => !0));
}
const hs = (e, a, t) => {
  const s = [], r = [], n = [], m = [];
  return e.forEach(((o) => {
    if (Ye(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Qe(o)) r.push(o);
    else if (Xe(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function fs(e) {
  const a = e.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(a);
}
const vs = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map(((t) => `"${t.name}"`)).join(",")}]`;
}, xs = (e, a) => e.map(((t) => ({ path: `${a}["${t.name}"][*]`, param: t }))), Ze = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ea(e, a, t, s) {
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
          objectSchema: fs(u.scalars),
          name: w,
          scalarArrays: xs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? vs(u.scalars, g) : void 0
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
const Ns = (e, a, t, s = Ze) => ea(e.attr.struct, `${a}["${e.name}"]`, t, s), Ts = (e, a, t, s = Ze) => ea(e.attr.struct, `${a}["${e.name}"][*]`, t, s), bs = (e, a, t, s) => ((r) => Ye(r.attr))(t) ? Is(e, t, s) : Qe(t) ? Ss(e, t, s) : Xe(t) ? ks(e, a, t) : ws(e, a, t), ks = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), ws = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Is = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ns(a, "$", t)
}), Ss = (e, a, t) => ({
  structArrays: Ts(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Ms = (e, a) => a.map(((t) => Es(e, t))).flat(3), Es = (e, a) => [a.top ? W(a, e, a.top, "") : [], a.structs.map(((t) => W(a, e, t))), a.structArrays.map(((t) => W(a, e, t)))], W = (e, a, t, s = t.bundleName) => {
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
    return ys(f) ? ((p, b, y, u) => b.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, l, i, c.schema) : us(f) ? ((p, b, y, u) => b.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: p.rootName, rootType: p.rootCategory, value: g, structName: y, param: u }))))(o, l, i, c.schema) : [];
  })(e, s, a, m)));
  return [r, n].flat(2);
}, Z = (e, a) => e.scalarsPath ? { bundleName: e.name, arrays: oe(e.scalarArrays, e.name, a), scalar: Bs(e.scalarsPath, e.objectSchema, a) } : {
  bundleName: e.name,
  arrays: oe(e.scalarArrays, e.name, a)
}, oe = (e, a, t) => e.map(((s) => ({ jsonPathJS: t(s.path), schema: s.param, parentType: a }))), Bs = (e, a, t) => ({ jsonPathJS: t(e), record: a }), Cs = (e, a, t, s) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Ds(a, t, s)
}), Ds = (e, a, t) => e.args.map(((s) => ((r, n) => {
  const m = r.scalars ? Z(r.scalars, n) : void 0, o = r.structs.items.map(((d) => Z(d, n))), i = r.structArrays.items.map(((d) => Z(d, n)));
  return {
    rootCategory: r.rootCategory,
    rootName: r.rootName,
    top: m,
    structs: o,
    structArrays: i
  };
})(bs("args", e.command, s, a), t))), As = (e, a) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, gs(r.params)]))))(e.schema.structs);
  return $s(e.pluginName, e.schema.commands, t, a);
}, $s = (e, a, t, s) => a.map(((r) => [`${e}:${r.command}`, Cs(e, r, t, s)])), Fs = (e, a) => {
  const [t, s] = e.parameters, r = `${t}:${s}`, n = a.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Ms(m, o.extractors) }))(ha(e.parameters[3]), n) : { pluginName: t, commandName: s, args: [] };
}, pr = (e) => {
  const a = new Map(e);
  return new me(a);
}, ur = () => new me(/* @__PURE__ */ new Map()), yr = (e) => {
  const a = e.flatMap(((t) => As(t, ((s) => new ga(s)))));
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
    return ds(a, ((t) => this.extractArgs(t)));
  }
  extractBattleText(a) {
    return ls(a, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(a) {
    return cs(a, ((t) => this.extractArgs(t)));
  }
  extractArgs(a) {
    const t = Fs(a, this._commandMap);
    return t.args.filter(Ps).map(((s) => ({
      code: R,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: t.commandName,
      pluginName: t.pluginName
    })));
  }
  extractCommandTexts(a) {
    return Y(a, ((t) => this.extractArgs(t)));
  }
}
const Ps = (e) => typeof e.value == "string", gr = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), ee = (e, a, t) => ({ folder: t, key: a, image: e[a], id: e.id }), hr = (e) => [ee(e, "faceName", "faces"), ee(e, "characterName", "characters"), ee(e, "battlerName", "sv_actors")], Ks = (e, a) => ({
  tilesets: e.tilesets,
  animations: e.animations,
  actors: k(e.actors, ((t) => Ae(t, a))),
  armors: k(e.armors, ((t) => $(t, a))),
  classes: k(e.classes, ((t) => Fe(t, a))),
  commonEvents: k(e.commonEvents, ((t) => Ve(t, a))),
  enemies: k(e.enemies, ((t) => $e(t, a))),
  items: k(e.items, ((t) => $(t, a))),
  mapInfos: e.mapInfos,
  skills: k(e.skills, ((t) => Pe(t, a))),
  states: k(e.states, ((t) => Ke(t, a))),
  system: { message: e.system.message, system: e.system.system ? je(e.system.system, a.replaceText) : null },
  troops: k(e.troops, ((t) => _e(t, a))),
  weapons: k(e.weapons, ((t) => $(t, a))),
  mapFiles: { info: e.mapFiles.info, invalidMaps: e.mapFiles.invalidMaps, validMaps: e.mapFiles.validMaps.map(((t) => ({
    filename: t.filename,
    editingName: t.editingName,
    map: ze(t.map, a)
  }))) }
}), k = (e, a) => ({ success: e.success, fileName: e.fileName, error: e.error, data: e.success ? e.data.map(a) : [] }), aa = (e, a, t, s) => {
  const r = we(e, t), n = Se(r, { audioFiles: a.audioFiles, imageFiles: a.imageFiles, otherFiles: a.otherFiles }), m = Rs(n.nonTextNoteKeys, s);
  return { data: Ks(e, m), note: n };
}, Rs = (e, a) => ({
  pluginCommand: (t) => a.pluginCommand(t),
  scriptCommand: (t) => a.scriptCommand(t),
  replaceText: (t) => a.replaceText(t),
  isReplaceTargetNote: (t) => !!e.has(t.key) && a.isReplaceTargetNote(t)
}), fr = (e, a) => ze(e, { replaceText: (t) => a.textDictionary.get(t), pluginCommand: (t) => t, scriptCommand: (t) => t, isReplaceTargetNote: (t) => a.targetNoteKeys.has(t.key) }), vr = (e, a) => {
  const t = {
    replaceText: (s) => a.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => a.targetNoteKeys.has(s.key)
  };
  return {
    actors: e.actors.map(((s) => Ae(s, t))),
    armors: e.armors.map(((s) => $(s, t))),
    classes: e.classes.map(((s) => Fe(s, t))),
    enemies: e.enemies.map(((s) => $e(s, t))),
    items: e.items.map(((s) => $(s, t))),
    skills: e.skills.map(((s) => Pe(s, t))),
    states: e.states.map(((s) => Ke(s, t))),
    troops: e.troops.map(((s) => _e(s, t))),
    weapons: e.weapons.map(((s) => $(s, t))),
    system: je(e.system, ((s) => a.textDictionary.get(s))),
    commonEvents: e.commonEvents.map(((s) => Ve(s, t)))
  };
}, xr = (e, a) => {
  const t = js(e, a);
  return be(t);
}, js = (e, a) => {
  const t = {
    replaceText: (s) => e.dictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.textKeys.has(s.key)
  };
  return aa(e.data, e.assetBundle, a, t).data;
}, Nr = (e, a, t) => {
  const s = Us(e, a, t);
  return [...be(s.main), ...Ct(s.aux)];
}, Us = ({ assetBundle: e, data: a, dictionary: t, textKeys: s }, r, n) => {
  const m = aa(a, e, r, { replaceText: (o) => n(o), pluginCommand: (o) => o, scriptCommand: (o) => o, isReplaceTargetNote: (o) => s.has(o.key) });
  return { main: m.data, aux: Mt(a.actors.data, a.commonEvents.data, a.troops.data, a.mapFiles.validMaps.map(((o) => o.map)), m.note.dataNoteSummary, t, n) };
};
export {
  $,
  Fs as A,
  D as B,
  qa as C,
  Ba as D,
  Ga as E,
  _a as F,
  La as G,
  dr as H,
  Y as I,
  za as J,
  we as K,
  Va as L,
  Oa as M,
  Wa as N,
  Ja as O,
  Ca as P,
  Ct as Q,
  Qs as R,
  ar as S,
  ot as T,
  it as U,
  ke as V,
  vt as W,
  Xs as X,
  Zs as Y,
  Hs as Z,
  Ae as _,
  Se as a,
  jt as a0,
  Fe as a1,
  Ve as a2,
  mr as a3,
  cr as a4,
  js as a5,
  xr as a6,
  Us as a7,
  Nr as a8,
  $e as a9,
  X as aa,
  Ge as ab,
  ze as ac,
  ir as ad,
  or as ae,
  Vt as af,
  rr as ag,
  Oe as ah,
  Ks as ai,
  aa as aj,
  vr as ak,
  fr as al,
  Pe as am,
  Ke as an,
  nr as ao,
  je as ap,
  Rt as aq,
  _e as ar,
  lr as as,
  q as at,
  Ie as au,
  Ce as av,
  Ys as b,
  Ws as c,
  Ea as d,
  Sa as e,
  Xa as f,
  B as g,
  Ha as h,
  Qa as i,
  Da as j,
  er as k,
  Mt as l,
  ur as m,
  pr as n,
  yr as o,
  $a as p,
  ls as q,
  cs as r,
  hr as s,
  gr as t,
  Pt as u,
  De as v,
  tr as w,
  sr as x,
  ds as y,
  Ua as z
};
