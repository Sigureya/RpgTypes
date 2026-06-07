import { createCommandExtractorMapFromPipeline as ie, extractPluginCommandWithExtractor as ce, createPluginParamDictionary as le, filterPluginSchemaStringParams as pe, filterPluginSchemaByFn as de, parseDeepRecord as ue } from "@sigureya/rmmz-plugin-schema";
import { as as F, v as G, E as J, w as O, b as la, q as pa, N as da, aS as K, P as V, Q as H, aP as R, aM as _, aO as ta, az as ua, ay as L, aR as ga } from "./makeAudio.es.js";
import { n as U } from "./normalText.es.js";
import { f as sa, u as ge, x as ye, z as he, r as ya, h as fe, s as ve, O as xe, G as Ne, p as Te, g as be, D as C, C as ke, y as ha, w as we } from "./isScript.es.js";
import { l as z, a as fa, i as va, f as xa, c as Na, e as Ta, d as ba, j as ka, b as wa, h as Me, g as Ie } from "./constants.es.js";
import { JSONPathJS as Se } from "jsonpath-js";
import { k as Ee, v as Be, u as Ce, r as De, a as Ae } from "./makeSystem.es.js";
import { a as $e, r as Ma } from "./writeData.es.js";
const ra = (a, e, t, s, r, n) => {
  if (a.code === F) return Fe(a, e, t, r, n);
  const m = U(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: t, id: e, speaker: a.speaker ?? "", dataKey: Pe(a) };
}, Pe = (a) => `code:${a.code}`, Fe = (a, e, t, s, r) => {
  const n = U(a.value);
  return { otherData: [a.pluginName, ...r], uuid: s(n), kind: `${Ke(a)}`, baseText: n, filename: t, id: e, dataKey: `code:${a.code}-${a.argName}` };
}, Ke = (a) => `${a.commandName}.${a.argTitle}`, Re = (a, e, t, s) => e.flatMap(((r) => je(a, r, t, s))), je = (a, e, t, s) => e.commands.filter(Ia).map(((r) => ra(r, e.eventId, a, s, t, [e.name]))), _e = (a, e, t, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ra(m, r.eventId, e, t, s, [n])));
})), Ia = (a) => a.value.length > 0, Le = (a) => ((e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}))(a, 1), Ue = (a) => a.parameters[0].map(((e, t) => ({ code: 102, paramIndex: t, value: e }))), qe = (a, e, t, s, r) => {
  const n = Array.from(Ve(a, e, t, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter(ze);
}, ze = (a) => a !== null && a.key.length > 0, Ve = (a, e, t, s) => {
  const r = Ge(a), n = s.map(Je), m = Oe(e), o = He(t);
  return new Set([r, m, o, n].flat(4));
}, Ge = (a) => a.map(((e) => [e.name, e.nickname, e.profile])), Je = (a) => sa(a, na), Oe = (a) => ge(a, na), He = (a) => ye(a, na), na = ({ list: a }) => a.filter(We).map(((e) => e.parameters[1])), We = (a) => a.code === G || a.code === J || a.code === O, D = (a, e) => ({
  id: a.id,
  name: a.name,
  note: Xe(a),
  main: e.map(((t) => ({ key: t, value: a[t], id: a.id })))
}), Xe = (a) => he(a.note, ((e, t) => ({
  key: e,
  value: t,
  id: a.id
}))), Ye = (a) => D(a, ["name", "nickname", "profile"]), Qe = (a) => D(a, ["name"]), Ze = (a) => D(a, ["name"]), at = (a) => D(a, ["name", "description", "message1", "message2"]), et = (a) => D(a, ["name", "description"]), tt = (a) => D(a, ["name", "description"]), st = (a) => D(a, ["name", "description"]), rt = (a) => D(a, ["name", "message1", "message2", "message3", "message4"]), nt = (a, e, t, s) => B(a, e, {
  message1: t.state.message1,
  message2: t.state.message2,
  message3: t.state.message3,
  message4: t.state.message4,
  name: t.name,
  note: t.note
}, s), B = (a, e, t, s) => a.map(((r) => mt(r, e, t, s))), mt = (a, e, t, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = U(r.value);
  return {
    kind: t[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: e,
    uuid: s(n)
  };
})), note: ot(a.note, e, t, s) }), ot = (a, e, t, s) => a.map(((r) => ({
  kind: `${t.note}:${r.key}`,
  baseText: r.value,
  filename: e,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), it = (a, e, t, s) => [{ filename: e, id: 0, baseText: a.gameTitle, uuid: s(a.gameTitle), kind: t.gameTitle, dataKey: "gameTitle" }, {
  filename: e,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: t.currencyUnit,
  dataKey: "currencyUnit"
}, ...Q(e, a.equipTypes, "equipTypes", t.equipTypes, s), ...Q(e, a.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Q(e, a.armorTypes, "armorTypes", t.armorTypes, s)], Q = (a, e, t, s, r) => e.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = U(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), ct = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  elements: [...a.elements],
  skillTypes: [...a.skillTypes],
  terms: {
    basic: De(a.terms.basic),
    commands: Ce(a.terms.commands),
    messages: Be(a.terms.messages),
    params: Ee(a.terms.params)
  }
}), Sa = (a, e) => {
  const t = T(a.actors, Ye), s = ut(a.armors), r = T(a.classes, Ze), n = T(a.enemies, Qe), m = T(a.items, et), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, at), c = T(a.states, rt), l = T(a.weapons, tt), p = gt(a.commonEvents, e), f = yt(a.troops, e), d = ht(a.mapFiles, e), b = lt(a.system), g = pt([t, s, r, n, m, o, i, c, l, f, p]).concat(dt(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: p.data, troops: f.data.flat() }, mapFiles: d, system: b, mainData: {
    actors: t.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: g };
}, lt = (a) => ({ message: a.message, system: a.system ? ct(a.system) : null }), T = (a, e) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(e) : []
}), pt = (a) => a.filter(((e) => !e.success)).map(((e) => ({ fileName: e.fileName, error: e.error }))), dt = (a, e) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...e.system === null ? [{
  fileName: z,
  error: e.message
}] : []], ut = (a) => T(a, st), gt = (a, e) => T(a, ((t) => e.extractCommonEventText(t))), yt = (a, e) => T(a, ((t) => e.extractBattleText(t))), ht = (a, e) => {
  const t = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: e.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: t };
}, ft = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, vt = (a) => {
  const e = a.trim().toLowerCase();
  return e === "true" || e === "false";
}, xt = (a) => {
  const e = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(e);
}, q = (a) => {
  const e = a.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(e);
}, Ea = (a, e) => {
  const t = Nt(a);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = kt(r, e);
    return { key: s, kinds: bt(n), values: r.map(Tt) };
  }));
}, Nt = (a) => {
  const e = a.flatMap(((t) => t.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: t.source
  })))));
  return Map.groupBy(e, ((t) => t.key));
}, Tt = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), bt = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((e) => e !== null)), kt = (a, { audioFiles: e, imageFiles: t, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && vt(n.value),
  isNumber: r.isNumber && xt(n.value),
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
  isScript: r.isScript && ya(n.value)
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
}), wt = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(It), ...a.map.events.map(Mt).flat()]
}), Mt = (a) => a.noteItems.map(((e) => ({ id: a.eventId, key: e.key, value: e.value, name: a.name }))), It = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), St = (a, e) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(e) }), I = (a, e) => a.map(((t) => {
  const s = t.note.filter(e);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(Et), Et = (a) => a.note.length > 0 || a.main.length > 0, Ba = (a, e) => {
  const t = Dt(a.value.mainData, e), s = At(a.value.mapFiles.validMaps, e);
  return { nonTextNoteKeys: t.nonTextNoteKeys, dataNoteSummary: t.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: a.errors,
    value: {
      mainData: t.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, Ca = (a, e) => {
  const t = (s) => e.has(s.key);
  return {
    actors: I(a.actors, t),
    enemies: I(a.enemies, t),
    weapons: I(a.weapons, t),
    armors: I(a.armors, t),
    skills: I(a.skills, t),
    states: I(a.states, t),
    items: I(a.items, t),
    classes: I(a.classes, t)
  };
}, br = (a, e) => {
  const t = $a(a, e), s = q(t);
  return Da(a, s);
}, Bt = (a, e) => {
  const t = Aa(a, e);
  return q(t);
}, kr = (a, e) => {
  const t = Bt(a, e);
  return Ca(a, t);
}, Da = (a, e) => a.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => e.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => St(n, r)))
  }) };
  var s, r;
})), Aa = (a, e) => {
  const t = Ct(a);
  return Ea(t, e);
}, Ct = (a) => [S(fa, a.actors), S(va, a.skills), S(xa, a.items), S(Na, a.weapons), S(Ta, a.armors), S(ba, a.classes), S(ka, a.states), S(wa, a.enemies)], S = (a, e) => ({
  source: a,
  notes: e.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), $a = (a, e) => {
  const t = a.map(wt);
  return Ea(t, e);
}, Dt = (a, e) => {
  const t = Aa(a, e), s = q(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Ca(a, s)
  };
}, At = (a, e) => {
  const t = $a(a, e), s = q(t);
  return { noteSummary: t, validMaps: Da(a, s) };
}, $t = (a, e) => a.params.filter(Pt).map(((t) => Kt(a.pluginName, t, e))).filter(((t) => t !== void 0)), Pa = (a) => a.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(a) && !(!/["`']/.test(a) && ya(a)), Pt = (a) => typeof a.value == "string" && a.value.length !== 0 && !!Ft(a) && !!Pa(a.value), Ft = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", Kt = (a, e, t) => {
  const s = U(e.value);
  if (s.length !== 0) return {
    filename: a,
    id: 0,
    uuid: t(s),
    baseText: s,
    kind: e.param.attr.text || e.param.name,
    dataKey: e.param.name,
    otherData: [e.rootName, e.param.attr.kind, e.param.attr.desc || ""]
  };
}, Rt = (a, e) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: e.param.name,
  value: typeof e.value == "string" ? e.value : "",
  argTitle: e.param.attr.text || e.param.name,
  paramIndex: 3
}), wr = (a) => {
  const e = ie(a);
  return { extractArgs(t, s) {
    const r = ce(t, e, s);
    return r.args.map(((n) => Rt(r, n)));
  } };
}, Mr = (a, e, t, s, r, n, m) => {
  const o = Sa(a.data, m), i = Ba(o, a);
  return _t(a.data.actors.data, e, i, t, s, r, n);
}, jt = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], _t = (a, e, t, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = t.data.value;
  return {
    noteSummaries: jt(t),
    pluginParams: e.flatMap(((p) => $t(p, n))),
    map: Lt(c, n, m),
    commonEvents: Re(Me, o.commonEvents, n, m),
    troops: _e(o.troops, Ie, m, n),
    armors: B(i.armors, Ta, r, n),
    system: qt(l, n, s),
    actors: {
      texts: B(i.actors, fa, r, n),
      controlChars: fe(a)
    },
    classes: B(i.classes, ba, r, n),
    enemies: B(i.enemies, wa, r, n),
    items: B(i.items, xa, r, n),
    skills: B(i.skills, va, r, n),
    states: nt(i.states, ka, r, n),
    weapons: B(i.weapons, Na, r, n)
  };
}, Lt = (a, e, t) => a.validMaps.map(((s) => Ut(s, e, t))).flat(3), Ut = (a, e, t) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = ft(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => ra(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, e, t))), qt = (a, e, t) => a.system === null ? { gameTitle: "", filename: z, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: z,
  texts: it(a.system, z, t, e)
}, zt = (a, e, t, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return {
    textDictionary: Vt(r, n),
    actorTexts: qe(a, e, t, s, m)
  };
}, Vt = (a, e) => Array.from(a.entries()).map((([t, s]) => ({ key: e(t), value: s }))), Gt = (a) => {
  const e = q(a);
  return Array.from(e);
}, Ir = (a, e) => {
  const t = e.actorTextDictionary.get(a);
  if (t)
    return e.textDictionary.get(t);
}, Sr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: e, value: t }) => [e, t]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), Jt = (a) => [{
  data: a,
  filename: $e
}], Er = (a) => {
  const e = Ot(a);
  return Ht(e);
}, Ot = (a) => a.reduce(((e, t) => {
  const s = Wt(t);
  return s.key.length === 0 || s.value.length === 0 || (e.validEntries.push({ source: t, normalized: s }), e.rawKeys.add(t.key)), e;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), Ht = (a) => a.validEntries.reduce(((e, t) => (/\s$/.test(t.source.key) && a.rawKeys.has(t.normalized.key) ? e.errorItems.push(t.source) : e.items.push(t.normalized), e)), {
  errorItems: [],
  items: []
}), Wt = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), Br = (a) => {
  const e = /* @__PURE__ */ new Map();
  return a.forEach(((t, s) => {
    e.has(t.baseText) || e.set(t.baseText, s);
  })), e;
}, Cr = (a) => {
  const e = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...e.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((e) => [e.main, e.note])), Fa = (a, e, t) => a.filter(((s) => s.code === la || s.code === pa || s.code === da)).map(((s) => Yt(s, e, t))), Xt = { [da]: "weapon", [la]: "armor", [pa]: "item" }, Yt = (a, e, t) => {
  const s = ve(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === xe ? e.gain : a.parameters[1] === Ne ? e.lose : e.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: Xt[a.code],
    dataId: Te(a),
    code: a.code,
    commandNameMZ: t(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Dr = (a, e, t) => sa(a.map, ((s, r, n) => ({
  ...Qt(s),
  commands: Fa(s.list, e, t),
  eventName: n.name,
  pageIndex: r
}))), Qt = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Ar = (a, e, t) => be(a, ((s, r, n) => ({
  commands: Fa(s.list, e, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), Zt = (a, e) => {
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
}, _a = (a, e) => {
  const t = C(a.note, e), s = v(a.name, e), r = v(a.description, e), n = v(a.message1, e), m = v(a.message2, e);
  return { ...a, name: s, description: r, message1: n, message2: m, note: t };
}, P = (a, e) => {
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
}, as = (a, e) => {
  switch (a.code) {
    case ta:
      return ts(a, e);
    case _:
      return rs(a, e);
    case R:
    case H:
    case V:
    case K:
      return es(a, e);
    case G:
    case O:
    case J:
      return ss(a, e);
    default:
      return a;
  }
}, es = (a, e) => {
  const t = h(a.parameters[0], e);
  return { code: a.code, indent: a.indent, parameters: [t] };
}, ts = (a, e) => {
  const t = a.parameters[4] ? h(a.parameters[4], e) : "";
  return Ae({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: t
  }, a.indent);
}, ss = (a, e) => {
  const t = h(a.parameters[1], e);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], t] };
}, rs = (a, e) => {
  const t = a.parameters[0].map(((s) => h(s, e)));
  return {
    code: _,
    indent: a.indent,
    parameters: [t, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, $r = (a, e, t = `
`) => ns(a, ((s) => e.get(s)), t), ns = (a, e, t = `
`) => ke(a.note, ((s) => h(s.value, e)), t), Pr = (a, e) => Ua(a, ((t) => Zt(t, e))), Ua = (a, e) => ({
  params: is(a.params, ((t) => h(t, e))),
  messages: cs(a.messages, ((t) => h(t, e))),
  basic: ms(a.basic, ((t) => h(t, e))),
  commands: os(a.commands, ((t) => h(t, e)))
}), ms = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], os = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9]), e(a[10]), e(a[11]), e(a[12]), e(a[13]), e(a[14]), e(a[15]), e(a[16]), e(a[17]), e(a[18]), e(a[19]), "", e(a[21]), e(a[22]), "", e(a[24]), e(a[25])], is = (a, e) => [e(a[0]), e(a[1]), e(a[2]), e(a[3]), e(a[4]), e(a[5]), e(a[6]), e(a[7]), e(a[8]), e(a[9])], cs = (a, e) => ({
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
  elements: j(a.elements, e),
  skillTypes: j(a.skillTypes, e),
  weaponTypes: j(a.weaponTypes, e),
  armorTypes: j(a.armorTypes, e),
  equipTypes: j(a.equipTypes, e),
  terms: Ua(a.terms, e)
}), j = (a, e) => a.map(((t) => h(t, e))), za = (a) => a.map(((e) => e.parameters[0].trimEnd())).join(`
`).trimEnd();
class Va {
  constructor(e, t) {
    this.header = e, this.bodies = t;
  }
  getBodyText() {
    return za(this.joinCommandBodies());
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
class ma {
  constructor(e, t, s) {
    this.bodyCode = e, this.header = t, this.bodies = s;
  }
  normalizedCommands() {
    const e = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
  }
  getBodyText() {
    return za(this.bodies);
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
const W = (a, e, t, s) => {
  const r = a[e];
  if (!t(r)) throw new Error(`Invalid head at index ${e}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = e + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, ls = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => W(r, n, ((m) => m.code === H), ((m) => m.code === V)))(a, e);
  return ps(s) ? new ma(V, s, t) : new Va(s, t);
}, ps = (a) => a.parameters[0] === "選択肢ヘルプ", ds = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => W(r, n, ((m) => m.code === ta), ((m) => m.code === R)))(a, e);
  return new ma(R, s, t);
}, us = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => W(r, n, ((m) => m.code === L), ((m) => m.code === ua)))(a, e);
  return new Va(s, t);
}, gs = (a, e) => {
  const { bodies: t, header: s } = ((r, n) => W(r, n, ((m) => m.code === ga), ((m) => m.code === K)))(a, e);
  return new ma(K, s, t);
}, ys = {
  [ta]: (a, e, t) => t.showMessage(ds(a, e), e, a),
  [L]: (a, e, t) => t.script(us(a, e), e, a),
  [H]: (a, e, t) => t.comment(ls(a, e), e, a),
  [ga]: (a, e, t) => t.showScrollingText(gs(a, e), e, a)
}, Ga = (a) => ys[a], hs = (a, e, t, s) => {
  if (a.code === R || a.code === K || a.code === V) return;
  const r = Ga(a.code);
  return r ? r(t, e, s) : a.code === _ ? fs(a) : a.code === G || a.code === O || a.code === J ? vs(a) : a.code !== ua ? a : void 0;
}, fs = (a) => ({
  code: _,
  indent: a.indent,
  parameters: [a.parameters[0].map(((e) => e.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), vs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), xs = (a) => ({ code: L, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Ns = (a) => {
  const e = a.getBodyText().trimEnd(), t = {
    code: R,
    indent: a.header.indent,
    parameters: [e]
  };
  return [bs(a.header), t];
}, Ts = (a) => {
  const e = a.getBodyText().trimEnd(), t = { code: K, indent: a.header.indent, parameters: [e] };
  return [a.header, t];
}, bs = (a) => {
  const e = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], e] };
}, X = (a, e) => {
  const t = (s) => e.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: xs, showMessage: Ns, showScrollingText: Ts };
    return s.map(((n, m) => n.code === F ? n : hs(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === F ? e.pluginCommand(s) : s.code === L ? e.scriptCommand(s) : as(s, t)));
}, Ja = (a, e) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: X(t.list, e) })))
}), Oa = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, e)
}), Fr = (a, e) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e })
}), Kr = (a, e) => Wa(a, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: e, isReplaceTargetNote: () => !1 }), Ha = (a, e) => Wa(a, e), Wa = (a, e) => ({
  note: C(a.note, e),
  displayName: v(a.displayName, e),
  events: a.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: X(n.list, r) }))) }))(t, e) : null)),
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
}), Xa = (a, e) => {
  const t = e(a.list);
  return { ...a, list: t };
}, Ya = (a, e) => ({ ...a, pages: a.pages.map(((t) => Xa(t, e))) }), Rr = (a, e) => ({
  ...a,
  events: a.events.map(((t) => t ? Ya(t, e) : null))
}), jr = (a, e) => a.map(((t) => Xa(t, e))), _r = (a, e) => a.map(((t) => Ya(t, e))), Lr = (a) => Qa(a, (() => [])), Y = (a, e) => Qa(a, e), Qa = (a, e) => a.flatMap(((t, s) => ks(t, s, a, e))).filter(((t) => t !== null)), ks = (a, e, t, s) => {
  if (a.code === F) return s(a);
  if (a.code === _) return Ue(a);
  const r = Ga(a.code);
  if (r) {
    const n = r(t, e, ws);
    if (n !== void 0) return [n];
  }
  return a.code === O || a.code === G || a.code === J ? Le(a) : null;
}, ws = {
  comment: (a) => ({ code: H, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return { code: R, paramIndex: 0, value: (e = a).getBodyText(), speaker: (t = e.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var e, t;
  },
  showScrollingText: (a) => ((e) => ({ code: K, paramIndex: 0, value: e.getBodyText() }))(a),
  script: (a) => {
    const e = ((t) => ({
      code: L,
      paramIndex: 0,
      value: t.getBodyText()
    }))(a);
    if (/["`']/.test(e.value)) return e;
  }
}, Ms = (a) => a.list.filter(oa), Is = (a) => a.pages.flatMap(((e) => e.list.filter(oa))), oa = (a) => a.code === F, Ss = (a, e = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, e)
}), Es = (a, e = () => []) => a.pages.map(((t, s) => ({ eventId: a.id, pageIndex: s, commands: Y(t.list, e) }))), Bs = (a, e = () => []) => ({
  note: a.note,
  noteItems: ha(a.note),
  displayedName: a.displayName,
  events: Cs(a, e)
}), Cs = (a, e) => sa(a, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(t.list, e),
  note: r.note,
  noteItems: ha(r.note),
  name: r.name
}))), ia = (a, e) => `${a}:${e}`, Ds = (a) => ia(a.parameters[0], a.parameters[1]), As = (a) => [...a.commonEvents.data.flatMap(Ms), ...a.troops.data.flatMap(Is), ...a.mapFiles.validMaps.flatMap(((e) => ((t) => we(t, ((s) => s.list.filter(oa))))(e.map).flat(2)))], $s = (a) => {
  const e = /* @__PURE__ */ new Map();
  for (const t of a) {
    const s = Ds(t), r = e.get(s);
    r ? r.push(t) : e.set(s, [t]);
  }
  return e;
}, $ = (a, e) => Pa(a.default), Ps = (a, e, t = $) => {
  switch (a.kind) {
    case "string":
    case "multiline_string":
    case "string[]":
    case "multiline_string[]":
    case "combo":
    case "struct":
    case "struct[]":
      return !0;
    case "any":
      return t(a, e);
    default:
      return !1;
  }
}, Fs = (a, e = $) => {
  const t = pe(a);
  return de(t, ((s, r) => Ps(s, r, e)));
}, Ks = (a, e, t = $) => {
  const s = Fs(e, t);
  return le(a, s);
}, Rs = (a, e = $) => a.map(((t) => Ks(t.pluginName, t.schema, e))), Za = (a, e = $) => Rs(a, e), Ur = (a, e, t = $) => {
  const s = Za(e, t), r = ae(a);
  return s.flatMap(((n) => n.commands.map(((m) => {
    const o = ia(n.pluginName, m.commandName);
    return { key: o, pluginName: n.pluginName, commandName: m.commandName, argsPath: m.argsPath, commands: r.get(o) ?? [] };
  })))).filter(((n) => n.commands.length > 0));
}, ae = (a) => {
  const e = As(a);
  return $s(e);
}, qr = (a, e, t = $) => {
  const s = Za(e, t), r = ae(a), n = s.flatMap(((m) => m.commands.map(((o) => {
    const i = ia(m.pluginName, o.commandName);
    return { key: i, pluginName: m.pluginName, commandName: o.commandName, argsPath: o.argsPath, commands: r.get(i) ?? [] };
  })))).filter(((m) => m.commands.length > 0));
  return { params: s, commandPaths: n, groupedCommands: r };
}, ee = (a) => ((e) => e.kind.endsWith("[]"))(a.attr), te = (a) => a.kind === "struct", se = (a) => a.attr.kind === "struct[]", js = (a) => re[a.kind.replace("[]", "")].type === "number", _s = (a) => re[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, re = {
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
function Ls(a) {
  return Us(a, ((e) => !0), ((e) => !0));
}
const Us = (a, e, t) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (te(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (se(o)) r.push(o);
    else if (ee(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function qs(a) {
  const e = a.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(e);
}
const zs = (a, e) => {
  if (a.length !== 0) return `${e}[${a.map(((t) => `"${t.name}"`)).join(",")}]`;
}, Vs = (a, e) => a.map(((t) => ({ path: `${e}["${t.name}"][*]`, param: t }))), ne = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function me(a, e, t, s) {
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
    const b = (function(g, u) {
      const y = g.ancestry.concat(g.schemaName), w = g.basePath;
      return [...u.structs.map(((M) => ({
        schemaName: M.attr.struct,
        basePath: `${w}["${M.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((M) => ({ schemaName: M.attr.struct, basePath: `${w}["${M.name}"][*]`, ancestry: y })))].reverse();
    })(p, d);
    if (d.scalars.length > 0 || d.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: w }) {
        return {
          category: "struct",
          objectSchema: qs(u.scalars),
          name: w,
          scalarArrays: Vs(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? zs(u.scalars, y) : void 0
        };
      })(d, { path: p.basePath, structName: p.schemaName });
      return f.push(...b), {
        frames: f,
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return f.push(...b), { frames: f, items: i.items, errs: i.errs };
  })(o, t, s)), r);
  return { items: m.items, errors: m.errs };
}
const Gs = (a, e, t, s = ne) => me(a.attr.struct, `${e}["${a.name}"]`, t, s), Js = (a, e, t, s = ne) => me(a.attr.struct, `${e}["${a.name}"][*]`, t, s), Os = (a, e, t, s) => ((r) => te(r.attr))(t) ? Xs(a, t, s) : se(t) ? Ys(a, t, s) : ee(t) ? Hs(a, e, t) : Ws(a, e, t), Hs = (a, e, t) => ({
  rootCategory: a,
  rootName: e,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ws = (a, e, t) => ({ rootCategory: a, rootName: e, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Xs = (a, e, t) => ({
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Gs(e, "$", t)
}), Ys = (a, e, t) => ({
  structArrays: Js(e, "$", t),
  rootName: e.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Qs = (a, e) => e.map(((t) => Zs(a, t))).flat(3), Zs = (a, e) => [e.top ? Z(e, a, e.top, "") : [], e.structs.map(((t) => Z(e, a, t))), e.structArrays.map(((t) => Z(e, a, t)))], Z = (a, e, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: p, segments: f }) => ((d, b, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const M = y[w];
    return M ? { rootName: d.rootName, rootType: d.rootCategory, structName: b, value: g, param: { name: w, attr: M } } : null;
  })(m, o, p, f, l))).filter(((p) => p !== null)))(a, s, e, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const p = l.jsonPathJS.find(c);
    if (!Array.isArray(p)) return [];
    const f = l.schema.attr;
    return _s(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, p, i, l.schema) : js(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: d.rootName, rootType: d.rootCategory, value: y, structName: g, param: u }))))(o, p, i, l.schema) : [];
  })(a, s, e, m)));
  return [r, n].flat(2);
}, ar = (a, e) => {
  const t = [], s = a.scalars ? aa(a.scalars, "scalar", e, t) : void 0, r = a.structs.items.map(((m) => aa(m, "struct", e, t))), n = a.structArrays.items.map(((m) => aa(m, "structArray", e, t)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: t };
}, aa = (a, e, t, s) => {
  const r = er(a.scalarArrays, a.name, e, t, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: tr(a.scalarsPath, a.objectSchema, e, t, s)
  } : { bundleName: a.name, arrays: r };
}, er = (a, e, t, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: e
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: t, error: m, handledInfo: s.errorAtPath(n.path, t, m) }), [];
  }
})), tr = (a, e, t, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: e };
  } catch (n) {
    return void r.push({ path: a, valType: t, error: n, handledInfo: s.errorAtPath(a, t, n) });
  }
}, sr = (a, e, t, s) => ({
  pluginName: a,
  commandName: e.command,
  desc: e.desc ?? "",
  text: e.text ?? "",
  extractors: rr(e, t, s)
}), rr = (a, e, t) => a.args.map(((s) => ((r, n) => {
  const m = ar(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(Os("args", a.command, s, e), t))), nr = (a, e) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, Ls(r.params)]))))(a.schema.structs);
  return mr(a.pluginName, a.schema.commands, t, e);
}, mr = (a, e, t, s) => e.map(((r) => [or(a, r.command), sr(a, r, t, s)])), or = (a, e) => `${a}:${e}`, ir = (a, e) => {
  const [t, s] = a.parameters, r = `${t}:${s}`, n = e.get(r);
  if (!n) return {
    pluginName: t,
    commandName: s,
    args: []
  };
  return o = ue(a.parameters[3]), { pluginName: (i = n).pluginName, commandName: i.commandName, args: Qs(o, i.extractors) };
  var o, i;
}, zr = (a) => {
  const e = new Map(a);
  return new ca(e);
}, Vr = () => new ca(/* @__PURE__ */ new Map()), Gr = (a) => {
  const e = a.flatMap(((t) => nr(t, ((s) => new Se(s)))));
  return new ca(new Map(e));
};
class ca {
  _commandMap;
  constructor(e) {
    this._commandMap = e;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(e) {
    return Bs(e, ((t) => this.extractArgs(t)));
  }
  extractBattleText(e) {
    return Es(e, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(e) {
    return Ss(e, ((t) => this.extractArgs(t)));
  }
  extractArgs(e) {
    const t = ir(e, this._commandMap);
    return t.args.filter(cr).map(((s) => ({
      code: F,
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
const cr = (a) => typeof a.value == "string", Jr = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), ea = (a, e, t) => ({
  folder: t,
  key: e,
  image: a[e],
  id: a.id
}), Or = (a) => [ea(a, "faceName", "faces"), ea(a, "characterName", "characters"), ea(a, "battlerName", "sv_actors")], lr = (a, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((t) => Ka(t, e))),
  armors: k(a.armors, ((t) => P(t, e))),
  classes: k(a.classes, ((t) => ja(t, e))),
  commonEvents: k(a.commonEvents, ((t) => Oa(t, e))),
  enemies: k(a.enemies, ((t) => Ra(t, e))),
  items: k(a.items, ((t) => P(t, e))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((t) => _a(t, e))),
  states: k(a.states, ((t) => La(t, e))),
  system: {
    message: a.system.message,
    system: a.system.system ? qa(a.system.system, e.replaceText) : null
  },
  troops: k(a.troops, ((t) => Ja(t, e))),
  weapons: k(a.weapons, ((t) => P(t, e))),
  mapFiles: {
    info: a.mapFiles.info,
    invalidMaps: a.mapFiles.invalidMaps,
    validMaps: a.mapFiles.validMaps.map(((t) => ({ filename: t.filename, editingName: t.editingName, map: Ha(t.map, e) })))
  }
}), k = (a, e) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(e) : []
}), oe = (a, e, t, s) => {
  const r = Sa(a, t), n = Ba(r, {
    audioFiles: e.audioFiles,
    imageFiles: e.imageFiles,
    otherFiles: e.otherFiles
  }), m = pr(n.nonTextNoteKeys, s);
  return { data: lr(a, m), note: n };
}, pr = (a, e) => ({
  pluginCommand: (t) => e.pluginCommand(t),
  scriptCommand: (t) => e.scriptCommand(t),
  replaceText: (t) => e.replaceText(t),
  isReplaceTargetNote: (t) => !!a.has(t.key) && e.isReplaceTargetNote(t)
}), Hr = (a, e) => Ha(a, {
  replaceText: (t) => e.textDictionary.get(t),
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  isReplaceTargetNote: (t) => e.targetNoteKeys.has(t.key)
}), Wr = (a, e) => {
  const t = {
    replaceText: (s) => e.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => e.targetNoteKeys.has(s.key)
  };
  return {
    actors: a.actors.map(((s) => Ka(s, t))),
    armors: a.armors.map(((s) => P(s, t))),
    classes: a.classes.map(((s) => ja(s, t))),
    enemies: a.enemies.map(((s) => Ra(s, t))),
    items: a.items.map(((s) => P(s, t))),
    skills: a.skills.map(((s) => _a(s, t))),
    states: a.states.map(((s) => La(s, t))),
    troops: a.troops.map(((s) => Ja(s, t))),
    weapons: a.weapons.map(((s) => P(s, t))),
    system: qa(a.system, ((s) => e.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => Oa(s, t)))
  };
}, Xr = (a, e) => {
  const t = dr(a, e);
  return Ma(t);
}, dr = (a, e) => {
  const t = { replaceText: (s) => a.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => a.textKeys.has(s.key) };
  return oe(a.data, a.assetBundle, e, t).data;
}, Yr = (a, e, t) => {
  const s = ur(a, e, t);
  return [...Ma(s.main), ...Jt(s.aux)];
}, ur = (a, e, t) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = a, o = oe(s, r, e, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : t(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }), i = zt(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => t(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: Gt([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary
  } };
};
export {
  Ue as $,
  Gr as A,
  Ve as B,
  Es as C,
  Ss as D,
  Or as E,
  Jr as F,
  Yt as G,
  Fa as H,
  Dr as I,
  Ar as J,
  Bs as K,
  Xe as L,
  ir as M,
  D as N,
  Ye as O,
  Le as P,
  st as Q,
  Ze as R,
  Qe as S,
  Lr as T,
  Y as U,
  et as V,
  Sa as W,
  at as X,
  rt as Y,
  ct as Z,
  tt as _,
  Rt as a,
  Jt as a0,
  Fs as a1,
  Ir as a2,
  Cr as a3,
  $s as a4,
  vt as a5,
  xt as a6,
  $ as a7,
  Pt as a8,
  Pa as a9,
  lr as aA,
  oe as aB,
  Wr as aC,
  Hr as aD,
  _a as aE,
  La as aF,
  Pr as aG,
  qa as aH,
  Zt as aI,
  Ja as aJ,
  _r as aK,
  q as aL,
  Ea as aM,
  $a as aN,
  Gt as aO,
  Ps as aa,
  Ia as ab,
  Bt as ac,
  kr as ad,
  Er as ae,
  br as af,
  Ka as ag,
  P as ah,
  as as ai,
  ja as aj,
  Oa as ak,
  Fr as al,
  jr as am,
  dr as an,
  Xr as ao,
  ur as ap,
  Yr as aq,
  Ra as ar,
  X as as,
  Xa as at,
  Ha as au,
  Rr as av,
  Kr as aw,
  ns as ax,
  $r as ay,
  Ya as az,
  Mr as b,
  Ur as c,
  Za as d,
  qr as e,
  Ba as f,
  Sr as g,
  ae as h,
  As as i,
  _e as j,
  Re as k,
  mt as l,
  B as m,
  $t as n,
  nt as o,
  it as p,
  qe as q,
  Br as r,
  wr as s,
  ia as t,
  Ds as u,
  Rs as v,
  Ks as w,
  zt as x,
  Vr as y,
  zr as z
};
