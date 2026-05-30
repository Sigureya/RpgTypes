import { createCommandExtractorMapFromPipeline as te, extractPluginCommandWithExtractor as se, parseDeepRecord as re } from "@sigureya/rmmz-plugin-schema";
import { as as R, v as z, E as V, w as G, b as oa, q as ia, N as ca, aS as F, P as q, Q as J, aP as P, aM as j, aO as ea, az as la, ay as _, aR as pa } from "./makeAudio.es.js";
import { n as O } from "./normalText.es.js";
import { f as ta, u as ne, x as me, z as oe, r as da, h as ie, s as ce, O as le, G as pe, p as de, g as ue, D as C, C as ye, y as ua } from "./isScript.es.js";
import { l as L, a as ya, i as ga, f as ha, c as fa, e as va, d as xa, j as Na, b as Ta, h as ge, g as he } from "./constants.es.js";
import { JSONPathJS as fe } from "jsonpath-js";
import { k as ve, v as xe, u as Ne, r as Te, a as be } from "./makeSystem.es.js";
import { a as ke, r as ba } from "./writeData.es.js";
const sa = (a, e, t, s, r, n) => {
  if (a.code === R) return Ie(a, e, t, r, n);
  const m = O(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: we(a) };
}, we = (a) => `code:${a.code}`, Ie = (a, e, t, s, r) => {
  const n = O(a.value);
  return { otherData: [a.pluginName, ...r], uuid: s(n), kind: `${Se(a)}`, baseText: n, filename: t, id: e, dataKey: `code:${a.code}-${a.argName}` };
}, Se = (a) => `${a.commandName}.${a.argTitle}`, Me = (a, e, t, s) => e.flatMap(((r) => Ee(a, r, t, s))), Ee = (a, e, t, s) => e.commands.filter(ka).map(((r) => sa(r, e.eventId, a, s, t, [e.name]))), Be = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => sa(m, r.eventId, e, t, s, [n])));
})), ka = (a) => a.value.length > 0, Ce = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Ae = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), De = (a, e, t, s, r) => {
  const n = Array.from(Fe(a, e, t, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter($e);
}, $e = (a) => a !== null && a.key.length > 0, Fe = (a, e, t, s) => {
  const r = Pe(a), n = s.map(Ke), m = Re(e), o = je(t);
  return new Set([r, m, o, n].flat(4));
}, Pe = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), Ke = (a) => ta(a, ra), Re = (a) => ne(a, ra), je = (a) => me(a, ra), ra = ({ list: a }) => a.filter(_e).map(((e) => e.parameters[1])), _e = (a) => a.code === z || a.code === V || a.code === G, A = (a, e) => ({
  id: a.id,
  name: a.name,
  note: Ue(a),
  main: e.map(((t) => ({ key: t, value: a[t], id: a.id })))
}), Ue = (a) => oe(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Le = (a) => A(a, ["name", "nickname", "profile"]), qe = (a) => A(a, ["name"]), ze = (a) => A(a, ["name"]), Ve = (a) => A(a, ["name", "description", "message1", "message2"]), Ge = (a) => A(a, ["name", "description"]), Je = (a) => A(a, ["name", "description"]), Oe = (a) => A(a, ["name", "description"]), He = (a) => A(a, ["name", "message1", "message2", "message3", "message4"]), We = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => Xe(r, e, t, s))), Xe = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = O(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: Ye(a.note, e, t, s) }), Ye = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), Qe = (a, e, t, s) => [{ filename: e, id: 0, baseText: a.gameTitle, uuid: s(a.gameTitle), kind: t.gameTitle, dataKey: "gameTitle" }, {
  filename: e,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Y(e, a.equipTypes, "equipTypes", t.equipTypes, s), ...Y(e, a.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Y(e, a.armorTypes, "armorTypes", t.armorTypes, s)], Y = (a, e, t, s, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = O(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Ze = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  elements: [...a.elements],
  skillTypes: [...a.skillTypes],
  terms: {
    basic: Te(a.terms.basic),
    commands: Ne(a.terms.commands),
    messages: xe(a.terms.messages),
    params: ve(a.terms.params)
  }
}), wa = (a, e) => {
  const t = T(a.actors, Le), s = st(a.armors), r = T(a.classes, ze), n = T(a.enemies, qe), m = T(a.items, Ge), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, Ve), c = T(a.states, He), l = T(a.weapons, Je), p = rt(a.commonEvents, e), f = nt(a.troops, e), d = mt(a.mapFiles, e), b = at(a.system), y = et([t, s, r, n, m, o, i, c, l, f, p]).concat(tt(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: p.data, troops: f.data.flat() }, mapFiles: d, system: b, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: y };
}, at = (a) => ({ message: a.message, system: a.system ? Ze(a.system) : null }), T = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), et = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), tt = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: L,
  error: e.message
}] : []], st = (a) => T(a, Oe), rt = (a, e) => T(a, ((t) => e.extractCommonEventText(t))), nt = (a, e) => T(a, ((t) => e.extractBattleText(t))), mt = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ot = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, it = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, ct = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, U = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, Ia = (a, e) => {
  const t = lt(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = ut(r, e);
    return { key: s, kinds: dt(n), values: r.map(pt) };
  }));
}, lt = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: t.source
  })))));
  return Map.groupBy(e, ((t) => t.key));
}, pt = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), dt = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), ut = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && it(n.value),
  isNumber: r.isNumber && ct(n.value),
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
  isScript: r.isScript && da(n.value)
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
}), yt = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(ht), ...a.map.events.map(gt).flat()]
}), gt = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), ht = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), ft = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), S = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(vt), vt = (a) => a.note.length > 0 || a.main.length > 0, Sa = (a, e) => {
  const t = Tt(a.value.mainData, e), s = bt(a.value.mapFiles.validMaps, e);
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
}, rr = (a, e) => {
  const t = Ca(a, e), s = U(t);
  return Ea(a, s);
}, xt = (a, e) => {
  const t = Ba(a, e);
  return U(t);
}, nr = (a, e) => {
  const t = xt(a, e);
  return Ma(a, t);
}, Ea = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => ft(n, r)))
  }) };
  var s, r;
})), Ba = (a, e) => {
  const t = Nt(a);
  return Ia(t, e);
}, Nt = (a) => [M(ya, a.actors), M(ga, a.skills), M(ha, a.items), M(fa, a.weapons), M(va, a.armors), M(xa, a.classes), M(Na, a.states), M(Ta, a.enemies)], M = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Ca = (a, e) => {
  const t = a.map(yt);
  return Ia(t, e);
}, Tt = (a, e) => {
  const t = Ba(a, e), s = U(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ma(a, s)
  };
}, bt = (a, e) => {
  const t = Ca(a, e), s = U(t);
  return { noteSummary: t, validMaps: Ea(a, s) };
}, kt = (a, e) => a.params.filter(wt).map(((t) => Mt(a.pluginName, t, e))).filter(((t) => t !== void 0)), wt = (a) => typeof a.value == "string" && a.value.length !== 0 && !!It(a) && St(a.value), It = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", St = (a) => !!/["`']/.test(a) || !da(a), Mt = (a, e, t) => {
  const s = e.value.trimEnd();
  if (s.length !== 0 && !/\-*/.test(s)) return {
    filename: a,
    id: 0,
    uuid: t(s),
    baseText: s,
    kind: e.param.attr.text || e.param.name,
    dataKey: e.param.name,
    otherData: [e.rootName, e.param.attr.kind, e.param.attr.desc || ""]
  };
}, Et = (a, e) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: e.param.name,
  value: typeof e.value == "string" ? e.value : "",
  argTitle: e.param.attr.text || e.param.name,
  paramIndex: 3
}), mr = (a) => {
  const e = te(a);
  return { extractArgs(t, s) {
    const r = se(t, e, s);
    return r.args.map(((n) => Et(r, n)));
  } };
}, or = (a, e, t, s, r, n, m) => {
  const o = wa(a.data, m), i = Sa(o, a);
  return Ct(a.data.actors.data, e, i, t, s, r, n);
}, Bt = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], Ct = (a, e, t, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = t.data.value;
  return {
    noteSummaries: Bt(t),
    pluginParams: e.flatMap(((p) => kt(p, n))),
    map: At(c, n, m),
    commonEvents: Me(ge, o.commonEvents, n, m),
    troops: Be(o.troops, he, m, n),
    armors: B(i.armors, va, r, n),
    system: $t(l, n, s),
    actors: {
      texts: B(i.actors, ya, r, n),
      controlChars: ie(a)
    },
    classes: B(i.classes, xa, r, n),
    enemies: B(i.enemies, Ta, r, n),
    items: B(i.items, ha, r, n),
    skills: B(i.skills, ga, r, n),
    states: We(i.states, Na, r, n),
    weapons: B(i.weapons, fa, r, n)
  };
}, At = (a, e, t) => a.validMaps.map(((s) => Dt(s, e, t))).flat(3), Dt = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = ot(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(ka).map(((l) => sa(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, e, t))), $t = (a, e, t) => a.system === null ? { gameTitle: "", filename: L, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: L,
  texts: Qe(a.system, L, t, e)
}, Ft = (a, e, t, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return {
    textDictionary: Pt(r, n),
    actorTexts: De(a, e, t, s, m)
  };
}, Pt = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s }))), Kt = (a) => {
  const e = U(a);
  return Array.from(e);
}, ir = (a, e) => {
  const t = e.actorTextDictionary.get(a);
  if (t)
    return e.textDictionary.get(t);
}, cr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: e, value: t }) => [e, t]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), Rt = (a) => [{
  data: a,
  filename: ke
}], lr = (a) => {
  const e = jt(a);
  return _t(e);
}, jt = (a) => a.reduce(((e, t) => {
  const s = Ut(t);
  return s.key.length === 0 || s.value.length === 0 || (e.validEntries.push({ source: t, normalized: s }), e.rawKeys.add(t.key)), e;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), _t = (a) => a.validEntries.reduce(((e, t) => (/\s$/.test(t.source.key) && a.rawKeys.has(t.normalized.key) ? e.errorItems.push(t.source) : e.items.push(t.normalized), e)), {
  errorItems: [],
  items: []
}), Ut = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), pr = (a) => {
  const e = /* @__PURE__ */ new Map();
  return a.forEach(((t, s) => {
    e.has(t.baseText) || e.set(t.baseText, s);
  })), e;
}, dr = (a) => {
  const e = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...e.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((e) => [e.main, e.note])), Aa = (a, e, t) => a.filter(((s) => s.code === oa || s.code === ia || s.code === ca)).map(((s) => qt(s, e, t))), Lt = { [ca]: "weapon", [oa]: "armor", [ia]: "item" }, qt = (a, e, t) => {
  const s = ce(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === le ? e.gain : a.parameters[1] === pe ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: Lt[a.code],
    dataId: de(a),
    code: a.code,
    commandNameMZ: t(a.code),
    operation: r,
    ...n,
    ...s
  };
}, ur = (a, e, t) => ta(a.map, ((s, r, n) => ({
  ...zt(s),
  commands: Aa(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), zt = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, yr = (a, e, t) => ue(a, ((s, r, n) => ({
  commands: Aa(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Vt = (a, e) => {
  const t = a.trimEnd(), s = e.get(t);
  return s ? s.trimEnd() : t;
}, h = (a, e) => {
  const t = a.trimEnd(), s = e(t);
  return s ? s.trimEnd() : t;
}, v = (a, e) => {
  const t = a.trimEnd(), s = e.replaceText(t);
  return s ? s.trimEnd() : t;
}, Da = (a, e) => {
  const t = (o) => e.replaceText(o), s = C(a.note, e), r = h(a.name, t), n = h(a.nickname, t), m = h(a.profile, t);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, $a = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return { ...a, name: s, note: t };
}, Fa = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e);
  return {
    ...a,
    name: s,
    note: t
  };
}, Pa = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, $ = (a, e) => {
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
}, Gt = (a, e) => {
  switch (a.code) {
    case ea:
      return Ot(a, e);
    case j:
      return Wt(a, e);
    case P:
    case J:
    case q:
    case F:
      return Jt(a, e);
    case z:
    case G:
    case V:
      return Ht(a, e);
    default:
      return a;
  }
}, Jt = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, Ot = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return be({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, Ht = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, Wt = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: j,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, gr = (a, e, t = `
`) => Xt(a, ((s) => e.get(s)), t), Xt = (a, e, t = `
`) => ye(a.note, ((s) => h(s.value, e)), t), hr = (a, e) => Ra(a, ((t) => Vt(t, e))), Ra = (a, e) => ({
  params: Zt(a.params, ((t) => h(t, e))),
  messages: as(a.messages, ((t) => h(t, e))),
  basic: Yt(a.basic, ((t) => h(t, e))),
  commands: Qt(a.commands, ((t) => h(t, e)))
}), Yt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], Qt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], Zt = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], as = (a, e) => ({
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
  elements: K(a.elements, e),
  skillTypes: K(a.skillTypes, e),
  weaponTypes: K(a.weaponTypes, e),
  armorTypes: K(a.armorTypes, e),
  equipTypes: K(a.equipTypes, e),
  terms: Ra(a.terms, e)
}), K = (a, e) => a.map(((t) => h(t, e))), _a = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Ua {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return _a(this.joinCommandBodies());
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
    return _a(this.bodies);
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
}, es = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === J), ((m) => m.code === q)))(a, e);
  return ts(s) ? new na(q, s, t) : new Ua(s, t);
}, ts = (a) => a.parameters[0] === "選択肢ヘルプ", ss = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === ea), ((m) => m.code === P)))(a, e);
  return new na(P, s, t);
}, rs = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === _), ((m) => m.code === la)))(a, e);
  return new Ua(s, t);
}, ns = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === pa), ((m) => m.code === F)))(a, e);
  return new na(F, s, t);
}, ms = {
  [ea]: (a, e, t) => t.showMessage(ss(a, e), e, a),
  [_]: (a, e, t) => t.script(rs(a, e), e, a),
  [J]: (a, e, t) => t.comment(es(a, e), e, a),
  [pa]: (a, e, t) => t.showScrollingText(ns(a, e), e, a)
}, La = (a) => ms[a], os = (a, e, t, s) => {
  if (a.code === P || a.code === F || a.code === q) return;
  const r = La(a.code);
  return r ? r(t, e, s) : a.code === j ? is(a) : a.code === z || a.code === G || a.code === V ? cs(a) : a.code !== la ? a : void 0;
}, is = (a) => ({
  code: j,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), cs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ls = (a) => ({ code: _, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), ps = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: P,
    indent: a.header.indent,
    parameters: [e]
  };
  return [us(a.header), t];
}, ds = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: F, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, us = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, W = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ls, showMessage: ps, showScrollingText: ds };
    return s.map(((n, m) => n.code === R ? n : os(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === R ? e.pluginCommand(s) : s.code === _ ? e.scriptCommand(s) : Gt(s, t)));
}, qa = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: W(t.list, e) })))
}), za = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: W(a.list, e)
}), fr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: W(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), vr = (a, e) => Ga(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Va = (a, e) => Ga(a, e), Ga = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: W(n.list, r) }))) }))(t, e) : null)),
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
}), Ja = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Oa = (a, e) => ({ ...a, pages: a.pages.map(((t) => Ja(t, e))) }), xr = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Oa(t, e) : null))
}), Nr = (a, e) => a.map(((t) => Ja(t, e))), Tr = (a, e) => a.map(((t) => Oa(t, e))), br = (a) => Ha(a, (() => [])), X = (a, e) => Ha(a, e), Ha = (a, e) => a.flatMap(((t, s) => ys(t, s, a, e))).filter(((t) => t !== null)), ys = (a, e, t, s) => {
  if (a.code === R) return s(a);
  if (a.code === j) return Ae(a);
  const r = La(a.code);
  if (r) {
    const n = r(t, e, gs);
    if (n !== void 0) return [n];
  }
  return a.code === G || a.code === z || a.code === V ? Ce(a) : null;
}, gs = {
  comment: (a) => ({ code: J, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return { code: P, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var e, t;
  },
  showScrollingText: (a) => ((e) => ({ code: F, paramIndex: 0, value: e.getBodyText() }))(a),
  script: (a) => {
    const e = ((t) => ({
      code: _,
      paramIndex: 0,
      value: t.getBodyText()
    }))(a);
    if (/["`']/.test(e.value)) return e;
  }
}, hs = (a, e = () => []) => ({ eventId: a.id, name: a.name, commands: X(a.list, e) }), fs = (a, e = () => []) => a.pages.map(((t, s) => ({
  eventId: a.id,
  pageIndex: s,
  commands: X(t.list, e)
}))), vs = (a, e = () => []) => ({ note: a.note, noteItems: ua(a.note), displayedName: a.displayName, events: xs(a, e) }), xs = (a, e) => ta(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, e),
  note: r.note,
  noteItems: ua(r.note),
  name: r.name
}))), Wa = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), Xa = (a) => a.kind === "struct", Ya = (a) => a.attr.kind === "struct[]", Ns = (a) => Qa[a.kind.replace("[]", "")].type === "number", Ts = (a) => Qa[a.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Qa = {
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
function bs(a) {
  return ks(a, ((e) => !0), ((e) => !0));
}
const ks = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (Xa(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Ya(o)) r.push(o);
    else if (Wa(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function ws(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const Is = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, Ss = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), Za = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function ae(a, e, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: e, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
    length: n
  }).reduce(((o) => o.frames.length === 0 ? o : (function(i, c, l) {
    if (i.frames.length === 0) return i;
    const p = i.frames[i.frames.length - 1], f = i.frames.slice(0, -1);
    if (p.ancestry.includes(p.schemaName)) return { frames: f, items: i.items, errs: [...i.errs, { code: l.cyclicStruct, path: p.basePath }] };
    const d = c.get(p.schemaName);
    if (!d) return {
      frames: f,
      items: i.items,
      errs: [...i.errs, { code: l.undefinedStruct, path: p.basePath }]
    };
    const b = (function(y, u) {
      const g = y.ancestry.concat(y.schemaName), w = y.basePath;
      return [...u.structs.map(((I) => ({
        schemaName: I.attr.struct,
        basePath: `${w}["${I.name}"]`,
        ancestry: g
      }))), ...u.structArrays.map(((I) => ({ schemaName: I.attr.struct, basePath: `${w}["${I.name}"][*]`, ancestry: g })))].reverse();
    })(p, d);
    if (d.scalars.length > 0 || d.scalarArrays.length > 0) {
      const y = (function(u, { path: g, structName: w }) {
        return {
          category: "struct",
          objectSchema: ws(u.scalars),
          name: w,
          scalarArrays: Ss(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? Is(u.scalars, g) : void 0
        };
      })(d, { path: p.basePath, structName: p.schemaName });
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
const Ms = (a, e, t, s = Za) => ae(a.attr.struct, `${e}["${a.name}"]`, t, s), Es = (a, e, t, s = Za) => ae(a.attr.struct, `${e}["${a.name}"][*]`, t, s), Bs = (a, e, t, s) => ((r) => Xa(r.attr))(t) ? Ds(a, t, s) : Ya(t) ? $s(a, t, s) : Wa(t) ? Cs(a, e, t) : As(a, e, t), Cs = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), As = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Ds = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ms(e, "$", t)
}), $s = (a, e, t) => ({
  structArrays: Es(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Fs = (a, e) => e.map(((t) => Ps(a, t))).flat(3), Ps = (a, e) => [e.top ? Q(e, a, e.top, "") : [], e.structs.map(((t) => Q(e, a, t))), e.structArrays.map(((t) => Q(e, a, t)))], Q = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: p, segments: f }) => ((d, b, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: d.rootName, rootType: d.rootCategory, structName: b, value: y, param: { name: w, attr: I } } : null;
  })(m, o, p, f, l))).filter(((p) => p !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const p = l.jsonPathJS.find(c);
    if (!Array.isArray(p)) return [];
    const f = l.schema.attr;
    return Ts(f) ? ((d, b, y, u) => b.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, p, i, l.schema) : Ns(f) ? ((d, b, y, u) => b.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: d.rootName, rootType: d.rootCategory, value: g, structName: y, param: u }))))(o, p, i, l.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, Ks = (a, e) => {
  const t = [], s = a.scalars ? Z(a.scalars, "scalar", e, t) : void 0, r = a.structs.items.map(((m) => Z(m, "struct", e, t))), n = a.structArrays.items.map(((m) => Z(m, "structArray", e, t)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: t };
}, Z = (a, e, t, s) => {
  const r = Rs(a.scalarArrays, a.name, e, t, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: js(a.scalarsPath, a.objectSchema, e, t, s)
  } : { bundleName: a.name, arrays: r };
}, Rs = (a, e, t, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: e
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: t, error: m, handledInfo: s.errorAtPath(n.path, t, m) }), [];
  }
})), js = (a, e, t, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: e };
  } catch (n) {
    return void r.push({ path: a, valType: t, error: n, handledInfo: s.errorAtPath(a, t, n) });
  }
}, _s = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: Us(e, t, s)
}), Us = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = Ks(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(Bs("args", a.command, s, e), t))), Ls = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, bs(r.params)]))))(a.schema.structs);
  return qs(a.pluginName, a.schema.commands, t, e);
}, qs = (a, e, t, s) => e.map(((r) => [zs(a, r.command), _s(a, r, t, s)])), zs = (a, e) => `${a}:${e}`, Vs = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Fs(m, o.extractors) }))(re(a.parameters[3]), n) : {
    pluginName: t,
    commandName: s,
    args: []
  };
}, kr = (a) => {
  const e = new Map(a);
  return new ma(e);
}, wr = () => new ma(/* @__PURE__ */ new Map()), Ir = (a) => {
  const e = a.flatMap(((t) => Ls(t, ((s) => new fe(s)))));
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
    return vs(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return fs(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return hs(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = Vs(e, this._commandMap);
    return t.args.filter(Gs).map(((s) => ({
      code: R,
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
const Gs = (a) => typeof a.value == "string", Sr = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), aa = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), Mr = (a) => [aa(a, "faceName", "faces"), aa(a, "characterName", "characters"), aa(a, "battlerName", "sv_actors")], Js = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => Da(t, e))),
  armors: k(a.armors, ((t) => $(t, e))),
  classes: k(a.classes, ((t) => Fa(t, e))),
  commonEvents: k(a.commonEvents, ((t) => za(t, e))),
  enemies: k(a.enemies, ((t) => $a(t, e))),
  items: k(a.items, ((t) => $(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => Pa(t, e))),
  states: k(a.states, ((t) => Ka(t, e))),
  system: {
    message: a.system.message,
    system: a.system.system ? ja(a.system.system, e.replaceText) : null
  },
  troops: k(a.troops, ((t) => qa(t, e))),
  weapons: k(a.weapons, ((t) => $(t, e))),
  mapFiles: {
    info: a.mapFiles.info,
    invalidMaps: a.mapFiles.invalidMaps,
    validMaps: a.mapFiles.validMaps.map(((t) => ({ filename: t.filename, editingName: t.editingName, map: Va(t.map, e) })))
  }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), ee = (a, e, t, s) => {
  const r = wa(a, t), n = Sa(r, {
    audioFiles: e.audioFiles,
    imageFiles: e.imageFiles,
    otherFiles: e.otherFiles
  }), m = Os(n.nonTextNoteKeys, s);
  return { data: Js(a, m), note: n };
}, Os = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), Er = (a, e) => Va(a, {
  replaceText: (t) => e.textDictionary.get(t),
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  isReplaceTargetNote: (t) => e.targetNoteKeys.has(t.key)
}), Br = (a, e) => {
  const t = {
    replaceText: (s) => e.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.targetNoteKeys.has(s.key)
  };
  return {
    actors: a.actors.map(((s) => Da(s, t))),
    armors: a.armors.map(((s) => $(s, t))),
    classes: a.classes.map(((s) => Fa(s, t))),
    enemies: a.enemies.map(((s) => $a(s, t))),
    items: a.items.map(((s) => $(s, t))),
    skills: a.skills.map(((s) => Pa(s, t))),
    states: a.states.map(((s) => Ka(s, t))),
    troops: a.troops.map(((s) => qa(s, t))),
    weapons: a.weapons.map(((s) => $(s, t))),
    system: ja(a.system, ((s) => e.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => za(s, t)))
  };
}, Cr = (a, e) => {
  const t = Hs(a, e);
  return ba(t);
}, Hs = (a, e) => {
  const t = { replaceText: (s) => a.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => a.textKeys.has(s.key) };
  return ee(a.data, a.assetBundle, e, t).data;
}, Ar = (a, e, t) => {
  const s = Ws(a, e, t);
  return [...ba(s.main), ...Rt(s.aux)];
}, Ws = (a, e, t) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = a, o = ee(s, r, e, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : t(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }), i = Ft(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => t(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: Kt([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary
  } };
};
export {
  nr as $,
  ur as A,
  yr as B,
  vs as C,
  Ue as D,
  Vs as E,
  A as F,
  Le as G,
  Ce as H,
  Oe as I,
  ze as J,
  qe as K,
  br as L,
  X as M,
  Ge as N,
  wa as O,
  Ve as P,
  He as Q,
  Ze as R,
  Je as S,
  Ae as T,
  Rt as U,
  ir as V,
  dr as W,
  it as X,
  ct as Y,
  ka as Z,
  xt as _,
  Et as a,
  lr as a0,
  rr as a1,
  Da as a2,
  $ as a3,
  Gt as a4,
  Fa as a5,
  za as a6,
  fr as a7,
  Nr as a8,
  Hs as a9,
  Kt as aA,
  Cr as aa,
  Ws as ab,
  Ar as ac,
  $a as ad,
  W as ae,
  Ja as af,
  Va as ag,
  xr as ah,
  vr as ai,
  Xt as aj,
  gr as ak,
  Oa as al,
  Js as am,
  ee as an,
  Br as ao,
  Er as ap,
  Pa as aq,
  Ka as ar,
  hr as as,
  ja as at,
  Vt as au,
  qa as av,
  Tr as aw,
  U as ax,
  Ia as ay,
  Ca as az,
  or as b,
  Sa as c,
  cr as d,
  Be as e,
  Me as f,
  Xe as g,
  B as h,
  Mt as i,
  kt as j,
  We as k,
  Qe as l,
  De as m,
  pr as n,
  mr as o,
  Ft as p,
  wr as q,
  kr as r,
  Ir as s,
  Fe as t,
  fs as u,
  hs as v,
  Mr as w,
  Sr as x,
  qt as y,
  Aa as z
};
