import { createCommandExtractorMapFromPipeline as lt, extractPluginCommandWithExtractor as pt, generatePluginAnnotationLines as dt, generatePluginAnnotationText as ut, createPluginParamDictionary as gt, filterPluginSchemaStringParams as yt, filterPluginSchemaByFn as ht, parseDeepRecord as ft } from "@sigureya/rmmz-plugin-schema";
import { as as F, v as V, E as G, w as H, b as pa, q as da, N as ua, aS as K, P as z, Q, aP as R, aM as _, aO as sa, az as ga, ay as L, aR as ya } from "./makeAudio.es.js";
import { n as O } from "./normalText.es.js";
import { f as ra, u as vt, x as xt, z as Nt, r as ha, h as Tt, s as bt, O as kt, G as wt, p as St, g as Mt, D as C, C as It, y as fa, w as Et } from "./isScript.es.js";
import { l as q, a as va, i as xa, f as Na, c as Ta, e as ba, d as ka, j as wa, b as Sa, h as Bt, g as Ct } from "./constants.es.js";
import { JSONPathJS as $t } from "jsonpath-js";
import { k as At, v as Dt, u as Pt, r as Ft, a as Kt } from "./makeSystem.es.js";
import { a as Rt, r as Ma } from "./writeData.es.js";
const na = (a, t, e, s, r, n) => {
  if (a.code === F) return Jt(a, t, e, r, n);
  const m = O(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: e, id: t, speaker: a.speaker ?? "", dataKey: jt(a) };
}, jt = (a) => `code:${a.code}`, Jt = (a, t, e, s, r) => {
  const n = O(a.value);
  return { otherData: [a.pluginName, ...r], uuid: s(n), kind: `${_t(a)}`, baseText: n, filename: e, id: t, dataKey: `code:${a.code}-${a.argName}` };
}, _t = (a) => `${a.commandName}.${a.argTitle}`, Lt = (a, t, e, s) => t.flatMap(((r) => Ot(a, r, e, s))), Ot = (a, t, e, s) => t.commands.filter(Ia).map(((r) => na(r, t.eventId, a, s, e, [t.name]))), Ut = (a, t, e, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => na(m, r.eventId, t, e, s, [n])));
})), Ia = (a) => a.value.length > 0, qt = (a) => ((t, e) => ({
  code: t.code,
  paramIndex: e,
  value: t.parameters[e]
}))(a, 1), zt = (a) => a.parameters[0].map(((t, e) => ({ code: 102, paramIndex: e, value: t }))), Vt = (a, t, e, s, r) => {
  const n = Array.from(Ht(a, t, e, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter(Gt);
}, Gt = (a) => a !== null && a.key.length > 0, Ht = (a, t, e, s) => {
  const r = Qt(a), n = s.map(Wt), m = Xt(t), o = Yt(e);
  return new Set([r, m, o, n].flat(4));
}, Qt = (a) => a.map(((t) => [t.name, t.nickname, t.profile])), Wt = (a) => ra(a, ma), Xt = (a) => vt(a, ma), Yt = (a) => xt(a, ma), ma = ({ list: a }) => a.filter(Zt).map(((t) => t.parameters[1])), Zt = (a) => a.code === V || a.code === G || a.code === H, $ = (a, t) => ({
  id: a.id,
  name: a.name,
  note: ae(a),
  main: t.map(((e) => ({ key: e, value: a[e], id: a.id })))
}), ae = (a) => Nt(a.note, ((t, e) => ({
  key: t,
  value: e,
  id: a.id
}))), te = (a) => $(a, ["name", "nickname", "profile"]), ee = (a) => $(a, ["name"]), se = (a) => $(a, ["name"]), re = (a) => $(a, ["name", "description", "message1", "message2"]), ne = (a) => $(a, ["name", "description"]), me = (a) => $(a, ["name", "description"]), oe = (a) => $(a, ["name", "description"]), ie = (a) => $(a, ["name", "message1", "message2", "message3", "message4"]), ce = (a, t, e, s) => B(a, t, {
  message1: e.state.message1,
  message2: e.state.message2,
  message3: e.state.message3,
  message4: e.state.message4,
  name: e.name,
  note: e.note
}, s), B = (a, t, e, s) => a.map(((r) => le(r, t, e, s))), le = (a, t, e, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = O(r.value);
  return {
    kind: e[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: t,
    uuid: s(n)
  };
})), note: pe(a.note, t, e, s) }), pe = (a, t, e, s) => a.map(((r) => ({
  kind: `${e.note}:${r.key}`,
  baseText: r.value,
  filename: t,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), de = (a, t, e, s) => [{ filename: t, id: 0, baseText: a.gameTitle, uuid: s(a.gameTitle), kind: e.gameTitle, dataKey: "gameTitle" }, {
  filename: t,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: e.currencyUnit,
  dataKey: "currencyUnit"
}, ...Z(t, a.equipTypes, "equipTypes", e.equipTypes, s), ...Z(t, a.weaponTypes, "weaponTypes", e.weaponTypes, s), ...Z(t, a.armorTypes, "armorTypes", e.armorTypes, s)], Z = (a, t, e, s, r) => t.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = O(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: e };
})), ue = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  elements: [...a.elements],
  skillTypes: [...a.skillTypes],
  terms: {
    basic: Ft(a.terms.basic),
    commands: Pt(a.terms.commands),
    messages: Dt(a.terms.messages),
    params: At(a.terms.params)
  }
}), Ea = (a, t) => {
  const e = T(a.actors, te), s = fe(a.armors), r = T(a.classes, se), n = T(a.enemies, ee), m = T(a.items, ne), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, re), c = T(a.states, ie), l = T(a.weapons, me), p = ve(a.commonEvents, t), f = xe(a.troops, t), d = Ne(a.mapFiles, t), b = ge(a.system), g = ye([e, s, r, n, m, o, i, c, l, f, p]).concat(he(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: p.data, troops: f.data.flat() }, mapFiles: d, system: b, mainData: {
    actors: e.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: g };
}, ge = (a) => ({ message: a.message, system: a.system ? ue(a.system) : null }), T = (a, t) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(t) : []
}), ye = (a) => a.filter(((t) => !t.success)).map(((t) => ({ fileName: t.fileName, error: t.error }))), he = (a, t) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message }))), ...t.system === null ? [{
  fileName: q,
  error: t.message
}] : []], fe = (a) => T(a, oe), ve = (a, t) => T(a, ((e) => t.extractCommonEventText(e))), xe = (a, t) => T(a, ((e) => t.extractBattleText(e))), Ne = (a, t) => {
  const e = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: t.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: e };
}, Te = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, be = (a) => {
  const t = a.trim().toLowerCase();
  return t === "true" || t === "false";
}, ke = (a) => {
  const t = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, U = (a) => {
  const t = a.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
  return new Set(t);
}, Ba = (a, t) => {
  const e = we(a);
  return Array.from(e.entries()).map((([s, r]) => {
    const n = Ie(r, t);
    return { key: s, kinds: Me(n), values: r.map(Se) };
  }));
}, we = (a) => {
  const t = a.flatMap(((e) => e.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: e.source
  })))));
  return Map.groupBy(t, ((e) => e.key));
}, Se = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), Me = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((t) => t !== null)), Ie = (a, { audioFiles: t, imageFiles: e, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && be(n.value),
  isNumber: r.isNumber && ke(n.value),
  isBgm: r.isBgm && t.bgm.has(n.value),
  isBgs: r.isBgs && t.bgs.has(n.value),
  isMe: r.isMe && t.me.has(n.value),
  isSe: r.isSe && t.se.has(n.value),
  isPicture: r.isPicture && e.picutures.has(n.value),
  isCharacter: r.isCharacter && e.characters.has(n.value),
  isFaceset: r.isFaceset && e.faces.has(n.value),
  isBattler: r.isBattler && e.svEnemy.has(n.value),
  isSvBattler: r.isSvBattler && e.svActors.has(n.value),
  isEnemy: r.isEnemy && e.enemies.has(n.value),
  isTileset: r.isTileset && e.tilesets.has(n.value),
  isMovie: r.isMovie && s.movies.has(n.value),
  isScript: r.isScript && ha(n.value)
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
}), Ee = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Ce), ...a.map.events.map(Be).flat()]
}), Be = (a) => a.noteItems.map(((t) => ({ id: a.eventId, key: t.key, value: t.value, name: a.name }))), Ce = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), $e = (a, t) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(t) }), M = (a, t) => a.map(((e) => {
  const s = e.note.filter(t);
  return { main: e.main, note: s, id: e.id, name: e.name };
})).filter(Ae), Ae = (a) => a.note.length > 0 || a.main.length > 0, Ca = (a, t) => {
  const e = Fe(a.value.mainData, t), s = Ke(a.value.mapFiles.validMaps, t);
  return { nonTextNoteKeys: e.nonTextNoteKeys, dataNoteSummary: e.noteSummary, mapNoteSummary: s.noteSummary, data: {
    errors: a.errors,
    value: {
      mainData: e.mainData,
      mapFiles: { info: a.value.mapFiles.info, invalidMaps: a.value.mapFiles.invalidMaps, validMaps: s.validMaps },
      eventData: a.value.eventData,
      system: a.value.system
    }
  } };
}, $a = (a, t) => {
  const e = (s) => t.has(s.key);
  return {
    actors: M(a.actors, e),
    enemies: M(a.enemies, e),
    weapons: M(a.weapons, e),
    armors: M(a.armors, e),
    skills: M(a.skills, e),
    states: M(a.states, e),
    items: M(a.items, e),
    classes: M(a.classes, e)
  };
}, Br = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return Aa(a, s);
}, De = (a, t) => {
  const e = Da(a, t);
  return U(e);
}, Cr = (a, t) => {
  const e = De(a, t);
  return $a(a, e);
}, Aa = (a, t) => a.map(((e) => {
  return { filename: e.filename, editingName: e.editingName, map: (s = e.map, r = (n) => t.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => $e(n, r)))
  }) };
  var s, r;
})), Da = (a, t) => {
  const e = Pe(a);
  return Ba(e, t);
}, Pe = (a) => [I(va, a.actors), I(xa, a.skills), I(Na, a.items), I(Ta, a.weapons), I(ba, a.armors), I(ka, a.classes), I(wa, a.states), I(Sa, a.enemies)], I = (a, t) => ({
  source: a,
  notes: t.flatMap(((e) => e.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: e.name })))))
}), Pa = (a, t) => {
  const e = a.map(Ee);
  return Ba(e, t);
}, Fe = (a, t) => {
  const e = Da(a, t), s = U(e);
  return {
    noteSummary: e,
    nonTextNoteKeys: s,
    mainData: $a(a, s)
  };
}, Ke = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return { noteSummary: e, validMaps: Aa(a, s) };
}, Re = (a, t) => a.params.filter(je).map(((e) => _e(a.pluginName, e, t))).filter(((e) => e !== void 0)), Fa = (a) => a.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(a) && !(!/["`']/.test(a) && ha(a)), je = (a) => typeof a.value == "string" && a.value.length !== 0 && !!Je(a) && !!Fa(a.value), Je = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", _e = (a, t, e) => {
  const s = O(t.value);
  if (s.length !== 0) return {
    filename: a,
    id: 0,
    uuid: e(s),
    baseText: s,
    kind: t.param.attr.text || t.param.name,
    dataKey: t.param.name,
    otherData: [t.rootName, t.param.attr.kind, t.param.attr.desc || ""]
  };
}, Le = (a, t) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: t.param.name,
  value: typeof t.value == "string" ? t.value : "",
  argTitle: t.param.attr.text || t.param.name,
  paramIndex: 3
}), $r = (a) => {
  const t = lt(a);
  return { extractArgs(e, s) {
    const r = pt(e, t, s);
    return r.args.map(((n) => Le(r, n)));
  } };
}, Ar = (a, t, e, s, r, n, m) => {
  const o = Ea(a.data, m), i = Ca(o, a);
  return Ue(a.data.actors.data, t, i, e, s, r, n);
}, Oe = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], Ue = (a, t, e, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = e.data.value;
  return {
    noteSummaries: Oe(e),
    pluginParams: t.flatMap(((p) => Re(p, n))),
    map: qe(c, n, m),
    commonEvents: Lt(Bt, o.commonEvents, n, m),
    troops: Ut(o.troops, Ct, m, n),
    armors: B(i.armors, ba, r, n),
    system: Ve(l, n, s),
    actors: {
      texts: B(i.actors, va, r, n),
      controlChars: Tt(a)
    },
    classes: B(i.classes, ka, r, n),
    enemies: B(i.enemies, Sa, r, n),
    items: B(i.items, Na, r, n),
    skills: B(i.skills, xa, r, n),
    states: ce(i.states, wa, r, n),
    weapons: B(i.weapons, Ta, r, n)
  };
}, qe = (a, t, e) => a.validMaps.map(((s) => ze(s, t, e))).flat(3), ze = (a, t, e) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = Te(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => na(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, t, e))), Ve = (a, t, e) => a.system === null ? { gameTitle: "", filename: q, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: q,
  texts: de(a.system, q, e, t)
}, Ge = (a, t, e, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return {
    textDictionary: He(r, n),
    actorTexts: Vt(a, t, e, s, m)
  };
}, He = (a, t) => Array.from(a.entries()).map((([e, s]) => ({ key: t(e), value: s }))), Qe = (a) => {
  const t = U(a);
  return Array.from(t);
}, J = "HonyakuEx", We = "Setup", Xe = "ReadPlugins", Dr = (a, t) => ({
  filename: `${t.outputDirectory}/${t.dictionaryName}.js`,
  text: Ye(a)
}), Ye = (a) => [Ka("辞書データプラグイン。JSONの代わりです。"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", J, We, "data", ");", "})();"].join(`
`), Pr = (a) => [Ka("プラグインコマンド書き換えプラグイン"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", J, Xe, "data", ");", "})()"].join(`
`), Fr = (a) => [{
  name: `${a.outputDirectory}/${J}`,
  description: a.description,
  status: !0,
  parameters: {}
}, {
  name: `${a.outputDirectory}/${a.dictionaryName}`,
  description: a.description,
  status: !0,
  parameters: {}
}, { name: `${a.outputDirectory}/${a.pluginSnapshotName}`, description: a.description, status: !0, parameters: {} }], Ka = (a) => {
  const t = dt({
    pluginName: "",
    locale: "",
    target: "MZ",
    dependencies: { base: [J], orderAfter: [J], orderBefore: [] },
    schema: { commands: [], params: [], structs: [] },
    meta: { plugindesc: a }
  }, {
    structArray: (e) => JSON.stringify(e),
    struct: (e) => JSON.stringify(e),
    numberArray: (e) => JSON.stringify(e),
    stringArray: (e) => JSON.stringify(e)
  });
  return ut(t);
}, Kr = (a, t) => {
  const e = t.actorTextDictionary.get(a);
  if (e)
    return t.textDictionary.get(e);
}, Rr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: t, value: e }) => [t, e]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: t, value: e }) => [t, e])))
}), Ze = (a) => [{ data: a, filename: Rt }], jr = (a) => {
  const t = as(a);
  return ts(t);
}, as = (a) => a.reduce(((t, e) => {
  const s = es(e);
  return s.key.length === 0 || s.value.length === 0 || (t.validEntries.push({ source: e, normalized: s }), t.rawKeys.add(e.key)), t;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), ts = (a) => a.validEntries.reduce(((t, e) => (/\s$/.test(e.source.key) && a.rawKeys.has(e.normalized.key) ? t.errorItems.push(e.source) : t.items.push(e.normalized), t)), {
  errorItems: [],
  items: []
}), es = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), Jr = (a) => {
  const t = /* @__PURE__ */ new Map();
  return a.forEach(((e, s) => {
    t.has(e.baseText) || t.set(e.baseText, s);
  })), t;
}, _r = (a) => {
  const t = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...t.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((t) => [t.main, t.note])), Ra = (a, t, e) => a.filter(((s) => s.code === pa || s.code === da || s.code === ua)).map(((s) => rs(s, t, e))), ss = { [ua]: "weapon", [pa]: "armor", [da]: "item" }, rs = (a, t, e) => {
  const s = bt(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === kt ? t.gain : a.parameters[1] === wt ? t.lose : t.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: ss[a.code],
    dataId: St(a),
    code: a.code,
    commandNameMZ: e(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Lr = (a, t, e) => ra(a.map, ((s, r, n) => ({
  ...ns(s),
  commands: Ra(s.list, t, e),
  eventName: n.name,
  pageIndex: r
}))), ns = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Or = (a, t, e) => Mt(a, ((s, r, n) => ({
  commands: Ra(s.list, t, e),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ms = (a, t) => {
  const e = a.trimEnd(), s = t.get(e);
  return s ? s.trimEnd() : e;
}, h = (a, t) => {
  const e = a.trimEnd(), s = t(e);
  return s ? s.trimEnd() : e;
}, v = (a, t) => {
  const e = a.trimEnd(), s = t.replaceText(e);
  return s ? s.trimEnd() : e;
}, ja = (a, t) => {
  const e = (o) => t.replaceText(o), s = C(a.note, t), r = h(a.name, e), n = h(a.nickname, e), m = h(a.profile, e);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Ja = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t);
  return { ...a, name: s, note: e };
}, _a = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t);
  return {
    ...a,
    name: s,
    note: e
  };
}, La = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t), r = v(a.description, t), n = v(a.message1, t), m = v(a.message2, t);
  return { ...a, name: s, description: r, message1: n, message2: m, note: e };
}, P = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t), r = v(a.description, t);
  return { ...a, name: s, description: r, note: e };
}, Oa = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t), r = v(a.message1, t), n = v(a.message2, t), m = v(a.message3, t), o = v(a.message4, t);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: e
  };
}, os = (a, t) => {
  switch (a.code) {
    case sa:
      return cs(a, t);
    case _:
      return ps(a, t);
    case R:
    case Q:
    case z:
    case K:
      return is(a, t);
    case V:
    case H:
    case G:
      return ls(a, t);
    default:
      return a;
  }
}, is = (a, t) => {
  const e = h(a.parameters[0], t);
  return { code: a.code, indent: a.indent, parameters: [e] };
}, cs = (a, t) => {
  const e = a.parameters[4] ? h(a.parameters[4], t) : "";
  return Kt({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: e
  }, a.indent);
}, ls = (a, t) => {
  const e = h(a.parameters[1], t);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], e] };
}, ps = (a, t) => {
  const e = a.parameters[0].map(((s) => h(s, t)));
  return {
    code: _,
    indent: a.indent,
    parameters: [e, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Ur = (a, t, e = `
`) => ds(a, ((s) => t.get(s)), e), ds = (a, t, e = `
`) => It(a.note, ((s) => h(s.value, t)), e), qr = (a, t) => Ua(a, ((e) => ms(e, t))), Ua = (a, t) => ({
  params: ys(a.params, ((e) => h(e, t))),
  messages: hs(a.messages, ((e) => h(e, t))),
  basic: us(a.basic, ((e) => h(e, t))),
  commands: gs(a.commands, ((e) => h(e, t)))
}), us = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], gs = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9]), t(a[10]), t(a[11]), t(a[12]), t(a[13]), t(a[14]), t(a[15]), t(a[16]), t(a[17]), t(a[18]), t(a[19]), "", t(a[21]), t(a[22]), "", t(a[24]), t(a[25])], ys = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], hs = (a, t) => ({
  actionFailure: t(a.actionFailure),
  actorDamage: t(a.actorDamage),
  actorDrain: t(a.actorDrain),
  actorGain: t(a.actorGain),
  actorLoss: t(a.actorLoss),
  actorNoDamage: t(a.actorNoDamage),
  actorNoHit: t(a.actorNoHit),
  actorRecovery: t(a.actorRecovery),
  alwaysDash: t(a.alwaysDash),
  autosave: t(a.autosave),
  bgmVolume: t(a.bgmVolume),
  bgsVolume: t(a.bgsVolume),
  buffAdd: t(a.buffAdd),
  buffRemove: t(a.buffRemove),
  commandRemember: t(a.commandRemember),
  counterAttack: t(a.counterAttack),
  criticalToActor: t(a.criticalToActor),
  criticalToEnemy: t(a.criticalToEnemy),
  defeat: t(a.defeat),
  debuffAdd: t(a.debuffAdd),
  emerge: t(a.emerge),
  enemyDamage: t(a.enemyDamage),
  enemyDrain: t(a.enemyDrain),
  enemyGain: t(a.enemyGain),
  enemyLoss: t(a.enemyLoss),
  enemyNoDamage: t(a.enemyNoDamage),
  enemyNoHit: t(a.enemyNoHit),
  enemyRecovery: t(a.enemyRecovery),
  escapeFailure: t(a.escapeFailure),
  escapeStart: t(a.escapeStart),
  evasion: t(a.evasion),
  expNext: t(a.expNext),
  expTotal: t(a.expTotal),
  file: t(a.file),
  loadMessage: t(a.loadMessage),
  levelUp: t(a.levelUp),
  magicEvasion: t(a.magicEvasion),
  magicReflection: t(a.magicReflection),
  meVolume: t(a.meVolume),
  obtainExp: t(a.obtainExp),
  obtainGold: t(a.obtainGold),
  obtainItem: t(a.obtainItem),
  obtainSkill: t(a.obtainSkill),
  partyName: t(a.partyName),
  possession: t(a.possession),
  preemptive: t(a.preemptive),
  saveMessage: t(a.saveMessage),
  seVolume: t(a.seVolume),
  substitute: t(a.substitute),
  surprise: t(a.surprise),
  touchUI: t(a.touchUI),
  useItem: t(a.useItem),
  victory: t(a.victory)
}), qa = (a, t) => ({
  ...a,
  gameTitle: h(a.gameTitle, t),
  currencyUnit: h(a.currencyUnit, t),
  elements: j(a.elements, t),
  skillTypes: j(a.skillTypes, t),
  weaponTypes: j(a.weaponTypes, t),
  armorTypes: j(a.armorTypes, t),
  equipTypes: j(a.equipTypes, t),
  terms: Ua(a.terms, t)
}), j = (a, t) => a.map(((e) => h(e, t))), za = (a) => a.map(((t) => t.parameters[0].trimEnd())).join(`
`).trimEnd();
class Va {
  constructor(t, e) {
    this.header = t, this.bodies = e;
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
class oa {
  constructor(t, e, s) {
    this.bodyCode = t, this.header = e, this.bodies = s;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
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
const W = (a, t, e, s) => {
  const r = a[t];
  if (!e(r)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(r)}`);
  const n = [];
  for (let m = t + 1; m < a.length; m++) {
    const o = a[m];
    if (!s(o)) break;
    n.push(o);
  }
  return { header: r, bodies: n };
}, fs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === Q), ((m) => m.code === z)))(a, t);
  return vs(s) ? new oa(z, s, e) : new Va(s, e);
}, vs = (a) => a.parameters[0] === "選択肢ヘルプ", xs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === sa), ((m) => m.code === R)))(a, t);
  return new oa(R, s, e);
}, Ns = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === L), ((m) => m.code === ga)))(a, t);
  return new Va(s, e);
}, Ts = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === ya), ((m) => m.code === K)))(a, t);
  return new oa(K, s, e);
}, bs = {
  [sa]: (a, t, e) => e.showMessage(xs(a, t), t, a),
  [L]: (a, t, e) => e.script(Ns(a, t), t, a),
  [Q]: (a, t, e) => e.comment(fs(a, t), t, a),
  [ya]: (a, t, e) => e.showScrollingText(Ts(a, t), t, a)
}, Ga = (a) => bs[a], ks = (a, t, e, s) => {
  if (a.code === R || a.code === K || a.code === z) return;
  const r = Ga(a.code);
  return r ? r(e, t, s) : a.code === _ ? ws(a) : a.code === V || a.code === H || a.code === G ? Ss(a) : a.code !== ga ? a : void 0;
}, ws = (a) => ({
  code: _,
  indent: a.indent,
  parameters: [a.parameters[0].map(((t) => t.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ss = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Ms = (a) => ({ code: L, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Is = (a) => {
  const t = a.getBodyText().trimEnd(), e = {
    code: R,
    indent: a.header.indent,
    parameters: [t]
  };
  return [Bs(a.header), e];
}, Es = (a) => {
  const t = a.getBodyText().trimEnd(), e = { code: K, indent: a.header.indent, parameters: [t] };
  return [a.header, e];
}, Bs = (a) => {
  const t = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], t] };
}, X = (a, t) => {
  const e = (s) => t.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Ms, showMessage: Is, showScrollingText: Es };
    return s.map(((n, m) => n.code === F ? n : ks(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === F ? t.pluginCommand(s) : s.code === L ? t.scriptCommand(s) : os(s, e)));
}, Ha = (a, t) => ({
  members: a.members,
  id: a.id,
  name: a.name,
  pages: a.pages.map(((e) => ({ conditions: e.conditions, span: e.span, list: X(e.list, t) })))
}), Qa = (a, t) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, t)
}), zr = (a, t) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t })
}), Vr = (a, t) => Xa(a, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t, isReplaceTargetNote: () => !1 }), Wa = (a, t) => Xa(a, t), Xa = (a, t) => ({
  note: C(a.note, t),
  displayName: v(a.displayName, t),
  events: a.events.map(((e) => e ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: X(n.list, r) }))) }))(e, t) : null)),
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
}), Ya = (a, t) => {
  const e = t(a.list);
  return { ...a, list: e };
}, Za = (a, t) => ({ ...a, pages: a.pages.map(((e) => Ya(e, t))) }), Gr = (a, t) => ({
  ...a,
  events: a.events.map(((e) => e ? Za(e, t) : null))
}), Hr = (a, t) => a.map(((e) => Ya(e, t))), Qr = (a, t) => a.map(((e) => Za(e, t))), Wr = (a) => at(a, (() => [])), Y = (a, t) => at(a, t), at = (a, t) => a.flatMap(((e, s) => Cs(e, s, a, t))).filter(((e) => e !== null)), Cs = (a, t, e, s) => {
  if (a.code === F) return s(a);
  if (a.code === _) return zt(a);
  const r = Ga(a.code);
  if (r) {
    const n = r(e, t, $s);
    if (n !== void 0) return [n];
  }
  return a.code === H || a.code === V || a.code === G ? qt(a) : null;
}, $s = {
  comment: (a) => ({ code: Q, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return { code: R, paramIndex: 0, value: (t = a).getBodyText(), speaker: (e = t.header, e.parameters[4] ? e.parameters[4].trimEnd() : "") };
    var t, e;
  },
  showScrollingText: (a) => ((t) => ({ code: K, paramIndex: 0, value: t.getBodyText() }))(a),
  script: (a) => {
    const t = ((e) => ({
      code: L,
      paramIndex: 0,
      value: e.getBodyText()
    }))(a);
    if (/["`']/.test(t.value)) return t;
  }
}, As = (a) => a.list.filter(ia), Ds = (a) => a.pages.flatMap(((t) => t.list.filter(ia))), ia = (a) => a.code === F, Ps = (a, t = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, t)
}), Fs = (a, t = () => []) => a.pages.map(((e, s) => ({ eventId: a.id, pageIndex: s, commands: Y(e.list, t) }))), Ks = (a, t = () => []) => ({
  note: a.note,
  noteItems: fa(a.note),
  displayedName: a.displayName,
  events: Rs(a, t)
}), Rs = (a, t) => ra(a, ((e, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(e.list, t),
  note: r.note,
  noteItems: fa(r.note),
  name: r.name
}))), ca = (a, t) => `${a}:${t}`, js = (a) => ca(a.parameters[0], a.parameters[1]), Js = (a) => [...a.commonEvents.data.flatMap(As), ...a.troops.data.flatMap(Ds), ...a.mapFiles.validMaps.flatMap(((t) => ((e) => Et(e, ((s) => s.list.filter(ia))))(t.map).flat(2)))], _s = (a) => {
  const t = /* @__PURE__ */ new Map();
  for (const e of a) {
    const s = js(e), r = t.get(s);
    r ? r.push(e) : t.set(s, [e]);
  }
  return t;
}, D = (a, t) => Fa(a.default), Ls = (a, t, e = D) => {
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
      return e(a, t);
    default:
      return !1;
  }
}, Os = (a, t = D) => {
  const e = yt(a);
  return ht(e, ((s, r) => Ls(s, r, t)));
}, Us = (a, t, e = D) => {
  const s = Os(t, e);
  return gt(a, s);
}, qs = (a, t = D) => a.map(((e) => Us(e.pluginName, e.schema, t))), tt = (a, t = D) => qs(a, t), Xr = (a, t, e = D) => {
  const s = tt(t, e), r = et(a);
  return s.flatMap(((n) => n.commands.map(((m) => {
    const o = ca(n.pluginName, m.commandName);
    return { key: o, pluginName: n.pluginName, commandName: m.commandName, argsPath: m.argsPath, commands: r.get(o) ?? [] };
  })))).filter(((n) => n.commands.length > 0));
}, et = (a) => {
  const t = Js(a);
  return _s(t);
}, Yr = (a, t, e = D) => {
  const s = tt(t, e), r = et(a), n = s.flatMap(((m) => m.commands.map(((o) => {
    const i = ca(m.pluginName, o.commandName);
    return { key: i, pluginName: m.pluginName, commandName: o.commandName, argsPath: o.argsPath, commands: r.get(i) ?? [] };
  })))).filter(((m) => m.commands.length > 0));
  return { params: s, commandPaths: n, groupedCommands: r };
}, st = (a) => ((t) => t.kind.endsWith("[]"))(a.attr), rt = (a) => a.kind === "struct", nt = (a) => a.attr.kind === "struct[]", zs = (a) => mt[a.kind.replace("[]", "")].type === "number", Vs = (a) => mt[a.kind.replace("[]", "")].type === "string", A = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, mt = {
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
function Gs(a) {
  return Hs(a, ((t) => !0), ((t) => !0));
}
const Hs = (a, t, e) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (rt(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (nt(o)) r.push(o);
    else if (st(o)) {
      if (e(o)) return void m.push(o);
    } else t(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Qs(a) {
  const t = a.map(((e) => [e.name, e.attr]));
  return Object.fromEntries(t);
}
const Ws = (a, t) => {
  if (a.length !== 0) return `${t}[${a.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Xs = (a, t) => a.map(((e) => ({ path: `${t}["${e.name}"][*]`, param: e }))), ot = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function it(a, t, e, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: t, ancestry: [] }] }, n = Math.max(1, 3 * e.size + 5), m = Array.from({
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
      return [...u.structs.map(((S) => ({
        schemaName: S.attr.struct,
        basePath: `${w}["${S.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((S) => ({ schemaName: S.attr.struct, basePath: `${w}["${S.name}"][*]`, ancestry: y })))].reverse();
    })(p, d);
    if (d.scalars.length > 0 || d.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: w }) {
        return {
          category: "struct",
          objectSchema: Qs(u.scalars),
          name: w,
          scalarArrays: Xs(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? Ws(u.scalars, y) : void 0
        };
      })(d, { path: p.basePath, structName: p.schemaName });
      return f.push(...b), {
        frames: f,
        items: [...i.items, g],
        errs: i.errs
      };
    }
    return f.push(...b), { frames: f, items: i.items, errs: i.errs };
  })(o, e, s)), r);
  return { items: m.items, errors: m.errs };
}
const Ys = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"]`, e, s), Zs = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"][*]`, e, s), ar = (a, t, e, s) => ((r) => rt(r.attr))(e) ? sr(a, e, s) : nt(e) ? rr(a, e, s) : st(e) ? tr(a, t, e) : er(a, t, e), tr = (a, t, e) => ({
  rootCategory: a,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${e.name}"][*]`, param: e }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), er = (a, t, e) => ({ rootCategory: a, rootName: t, scalars: { name: e.attr.kind, objectSchema: { [e.name]: e.attr }, scalarsPath: `$["${e.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), sr = (a, t, e) => ({
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Ys(t, "$", e)
}), rr = (a, t, e) => ({
  structArrays: Zs(t, "$", e),
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), nr = (a, t) => t.map(((e) => mr(a, e))).flat(3), mr = (a, t) => [t.top ? aa(t, a, t.top, "") : [], t.structs.map(((e) => aa(t, a, e))), t.structArrays.map(((e) => aa(t, a, e)))], aa = (a, t, e, s = e.bundleName) => {
  const r = e.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: p, segments: f }) => ((d, b, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const S = y[w];
    return S ? { rootName: d.rootName, rootType: d.rootCategory, structName: b, value: g, param: { name: w, attr: S } } : null;
  })(m, o, p, f, l))).filter(((p) => p !== null)))(a, s, t, e.scalar.jsonPathJS, e.scalar.record) : [], n = e.arrays.map(((m) => ((o, i, c, l) => {
    const p = l.jsonPathJS.find(c);
    if (!Array.isArray(p)) return [];
    const f = l.schema.attr;
    return Vs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, p, i, l.schema) : zs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: d.rootName, rootType: d.rootCategory, value: y, structName: g, param: u }))))(o, p, i, l.schema) : [];
  })(a, s, t, m)));
  return [r, n].flat(2);
}, or = (a, t) => {
  const e = [], s = a.scalars ? ta(a.scalars, "scalar", t, e) : void 0, r = a.structs.items.map(((m) => ta(m, "struct", t, e))), n = a.structArrays.items.map(((m) => ta(m, "structArray", t, e)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: e };
}, ta = (a, t, e, s) => {
  const r = ir(a.scalarArrays, a.name, t, e, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: cr(a.scalarsPath, a.objectSchema, t, e, s)
  } : { bundleName: a.name, arrays: r };
}, ir = (a, t, e, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: t
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: e, error: m, handledInfo: s.errorAtPath(n.path, e, m) }), [];
  }
})), cr = (a, t, e, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: t };
  } catch (n) {
    return void r.push({ path: a, valType: e, error: n, handledInfo: s.errorAtPath(a, e, n) });
  }
}, lr = (a, t, e, s) => ({
  pluginName: a,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: pr(t, e, s)
}), pr = (a, t, e) => a.args.map(((s) => ((r, n) => {
  const m = or(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(ar("args", a.command, s, t), e))), dr = (a, t) => {
  const e = ((s) => new Map(s.map(((r) => [r.struct, Gs(r.params)]))))(a.schema.structs);
  return ur(a.pluginName, a.schema.commands, e, t);
}, ur = (a, t, e, s) => t.map(((r) => [gr(a, r.command), lr(a, r, e, s)])), gr = (a, t) => `${a}:${t}`, yr = (a, t) => {
  const [e, s] = a.parameters, r = `${e}:${s}`, n = t.get(r);
  if (!n) return {
    pluginName: e,
    commandName: s,
    args: []
  };
  return o = ft(a.parameters[3]), { pluginName: (i = n).pluginName, commandName: i.commandName, args: nr(o, i.extractors) };
  var o, i;
}, Zr = (a) => {
  const t = new Map(a);
  return new la(t);
}, an = () => new la(/* @__PURE__ */ new Map()), tn = (a) => {
  const t = a.flatMap(((e) => dr(e, ((s) => new $t(s)))));
  return new la(new Map(t));
};
class la {
  _commandMap;
  constructor(t) {
    this._commandMap = t;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return Ks(t, ((e) => this.extractArgs(e)));
  }
  extractBattleText(t) {
    return Fs(t, ((e) => this.extractArgs(e)));
  }
  extractCommonEventText(t) {
    return Ps(t, ((e) => this.extractArgs(e)));
  }
  extractArgs(t) {
    const e = yr(t, this._commandMap);
    return e.args.filter(hr).map(((s) => ({
      code: F,
      value: s.value,
      paramIndex: 3,
      argName: s.param.name,
      argTitle: s.param.attr.text ?? s.param.name,
      commandName: e.commandName,
      pluginName: e.pluginName
    })));
  }
  extractCommandTexts(t) {
    return Y(t, ((e) => this.extractArgs(e)));
  }
}
const hr = (a) => typeof a.value == "string", en = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), ea = (a, t, e) => ({
  folder: e,
  key: t,
  image: a[t],
  id: a.id
}), sn = (a) => [ea(a, "faceName", "faces"), ea(a, "characterName", "characters"), ea(a, "battlerName", "sv_actors")], fr = (a, t) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((e) => ja(e, t))),
  armors: k(a.armors, ((e) => P(e, t))),
  classes: k(a.classes, ((e) => _a(e, t))),
  commonEvents: k(a.commonEvents, ((e) => Qa(e, t))),
  enemies: k(a.enemies, ((e) => Ja(e, t))),
  items: k(a.items, ((e) => P(e, t))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((e) => La(e, t))),
  states: k(a.states, ((e) => Oa(e, t))),
  system: {
    message: a.system.message,
    system: a.system.system ? qa(a.system.system, t.replaceText) : null
  },
  troops: k(a.troops, ((e) => Ha(e, t))),
  weapons: k(a.weapons, ((e) => P(e, t))),
  mapFiles: {
    info: a.mapFiles.info,
    invalidMaps: a.mapFiles.invalidMaps,
    validMaps: a.mapFiles.validMaps.map(((e) => ({ filename: e.filename, editingName: e.editingName, map: Wa(e.map, t) })))
  }
}), k = (a, t) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(t) : []
}), ct = (a, t, e, s) => {
  const r = Ea(a, e), n = Ca(r, {
    audioFiles: t.audioFiles,
    imageFiles: t.imageFiles,
    otherFiles: t.otherFiles
  }), m = vr(n.nonTextNoteKeys, s);
  return { data: fr(a, m), note: n };
}, vr = (a, t) => ({
  pluginCommand: (e) => t.pluginCommand(e),
  scriptCommand: (e) => t.scriptCommand(e),
  replaceText: (e) => t.replaceText(e),
  isReplaceTargetNote: (e) => !!a.has(e.key) && t.isReplaceTargetNote(e)
}), rn = (a, t) => Wa(a, {
  replaceText: (e) => t.textDictionary.get(e),
  pluginCommand: (e) => e,
  scriptCommand: (e) => e,
  isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), nn = (a, t) => {
  const e = {
    replaceText: (s) => t.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => t.targetNoteKeys.has(s.key)
  };
  return {
    actors: a.actors.map(((s) => ja(s, e))),
    armors: a.armors.map(((s) => P(s, e))),
    classes: a.classes.map(((s) => _a(s, e))),
    enemies: a.enemies.map(((s) => Ja(s, e))),
    items: a.items.map(((s) => P(s, e))),
    skills: a.skills.map(((s) => La(s, e))),
    states: a.states.map(((s) => Oa(s, e))),
    troops: a.troops.map(((s) => Ha(s, e))),
    weapons: a.weapons.map(((s) => P(s, e))),
    system: qa(a.system, ((s) => t.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => Qa(s, e)))
  };
}, mn = (a, t) => {
  const e = xr(a, t);
  return Ma(e);
}, xr = (a, t) => {
  const e = { replaceText: (s) => a.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => a.textKeys.has(s.key) };
  return ct(a.data, a.assetBundle, t, e).data;
}, on = (a, t, e) => {
  const s = Nr(a, t, e);
  return [...Ma(s.main), ...Ze(s.aux)];
}, Nr = (a, t, e) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = a, o = ct(s, r, t, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : e(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }), i = Ge(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => e(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: Qe([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary
  } };
};
export {
  ue as $,
  an as A,
  Zr as B,
  tn as C,
  Ht as D,
  Fs as E,
  Ps as F,
  sn as G,
  en as H,
  rs as I,
  Ra as J,
  Lr as K,
  Or as L,
  Ks as M,
  ae as N,
  yr as O,
  $ as P,
  te as Q,
  qt as R,
  oe as S,
  se as T,
  ee as U,
  Wr as V,
  Y as W,
  ne as X,
  Ea as Y,
  re as Z,
  ie as _,
  Le as a,
  me as a0,
  zt as a1,
  Ze as a2,
  Os as a3,
  Kr as a4,
  _r as a5,
  _s as a6,
  be as a7,
  ke as a8,
  D as a9,
  ds as aA,
  Ur as aB,
  Za as aC,
  fr as aD,
  ct as aE,
  nn as aF,
  rn as aG,
  La as aH,
  Oa as aI,
  qr as aJ,
  qa as aK,
  ms as aL,
  Ha as aM,
  Qr as aN,
  U as aO,
  Ba as aP,
  Pa as aQ,
  Qe as aR,
  je as aa,
  Fa as ab,
  Ls as ac,
  Ia as ad,
  De as ae,
  Cr as af,
  jr as ag,
  Br as ah,
  Dr as ai,
  ja as aj,
  P as ak,
  os as al,
  _a as am,
  Qa as an,
  zr as ao,
  Hr as ap,
  xr as aq,
  mn as ar,
  Nr as as,
  on as at,
  Ja as au,
  X as av,
  Ya as aw,
  Wa as ax,
  Gr as ay,
  Vr as az,
  Ar as b,
  Xr as c,
  tt as d,
  Yr as e,
  Ca as f,
  Rr as g,
  et as h,
  Js as i,
  Ut as j,
  Lt as k,
  le as l,
  B as m,
  Re as n,
  ce as o,
  de as p,
  Vt as q,
  Jr as r,
  $r as s,
  ca as t,
  js as u,
  Fr as v,
  Pr as w,
  qs as x,
  Us as y,
  Ge as z
};
