import { createCommandExtractorMapFromPipeline as pt, extractPluginCommandWithExtractor as dt, generatePluginAnnotationText as ut, createPluginParamDictionary as gt, filterPluginSchemaStringParams as yt, filterPluginSchemaByFn as ht, parseDeepRecord as ft } from "@sigureya/rmmz-plugin-schema";
import { as as F, v as V, E as G, w as H, b as da, q as ua, N as ga, aS as K, P as z, Q, aP as R, aM as _, aO as sa, az as ya, ay as O, aR as ha } from "./makeAudio.es.js";
import { n as L } from "./normalText.es.js";
import { f as ra, u as vt, x as Nt, z as xt, r as fa, h as Tt, s as bt, O as kt, G as St, p as wt, g as Mt, D as B, C as It, y as va, w as Et } from "./isScript.es.js";
import { l as q, a as Na, i as xa, f as Ta, c as ba, e as ka, d as Sa, j as wa, b as Ma, h as $t, g as Bt } from "./constants.es.js";
import { JSONPathJS as Dt } from "jsonpath-js";
import { k as Ct, v as At, u as Pt, r as Ft, a as Kt } from "./makeSystem.es.js";
import { a as Rt, r as na } from "./writeData.es.js";
const ma = (a, t, e, s, r, n) => {
  if (a.code === F) return Jt(a, t, e, r, n);
  const m = L(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: e, id: t, speaker: a.speaker ?? "", dataKey: jt(a) };
}, jt = (a) => `code:${a.code}`, Jt = (a, t, e, s, r) => {
  const n = L(a.value);
  return { otherData: [a.pluginName, ...r], uuid: s(n), kind: `${_t(a)}`, baseText: n, filename: e, id: t, dataKey: `code:${a.code}-${a.argName}` };
}, _t = (a) => `${a.commandName}.${a.argTitle}`, Ot = (a, t, e, s) => t.flatMap(((r) => Lt(a, r, e, s))), Lt = (a, t, e, s) => t.commands.filter(Ia).map(((r) => ma(r, t.eventId, a, s, e, [t.name]))), Ut = (a, t, e, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ma(m, r.eventId, t, e, s, [n])));
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
}, Qt = (a) => a.map(((t) => [t.name, t.nickname, t.profile])), Wt = (a) => ra(a, oa), Xt = (a) => vt(a, oa), Yt = (a) => Nt(a, oa), oa = ({ list: a }) => a.filter(Zt).map(((t) => t.parameters[1])), Zt = (a) => a.code === V || a.code === G || a.code === H, D = (a, t) => ({
  id: a.id,
  name: a.name,
  note: ae(a),
  main: t.map(((e) => ({ key: e, value: a[e], id: a.id })))
}), ae = (a) => xt(a.note, ((t, e) => ({
  key: t,
  value: e,
  id: a.id
}))), te = (a) => D(a, ["name", "nickname", "profile"]), ee = (a) => D(a, ["name"]), se = (a) => D(a, ["name"]), re = (a) => D(a, ["name", "description", "message1", "message2"]), ne = (a) => D(a, ["name", "description"]), me = (a) => D(a, ["name", "description"]), oe = (a) => D(a, ["name", "description"]), ie = (a) => D(a, ["name", "message1", "message2", "message3", "message4"]), ce = (a, t, e, s) => $(a, t, {
  message1: e.state.message1,
  message2: e.state.message2,
  message3: e.state.message3,
  message4: e.state.message4,
  name: e.name,
  note: e.note
}, s), $ = (a, t, e, s) => a.map(((r) => le(r, t, e, s))), le = (a, t, e, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = L(r.value);
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
  const o = L(n);
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
    messages: At(a.terms.messages),
    params: Ct(a.terms.params)
  }
}), Ea = (a, t) => {
  const e = T(a.actors, te), s = fe(a.armors), r = T(a.classes, se), n = T(a.enemies, ee), m = T(a.items, ne), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, re), c = T(a.states, ie), l = T(a.weapons, me), p = ve(a.commonEvents, t), f = Ne(a.troops, t), d = xe(a.mapFiles, t), b = ge(a.system), g = ye([e, s, r, n, m, o, i, c, l, f, p]).concat(he(a.mapFiles, a.system));
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
}] : []], fe = (a) => T(a, oe), ve = (a, t) => T(a, ((e) => t.extractCommonEventText(e))), Ne = (a, t) => T(a, ((e) => t.extractBattleText(e))), xe = (a, t) => {
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
}, $a = (a, t) => {
  const e = Se(a);
  return Array.from(e.entries()).map((([s, r]) => {
    const n = Ie(r, t);
    return { key: s, kinds: Me(n), values: r.map(we) };
  }));
}, Se = (a) => {
  const t = a.flatMap(((e) => e.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: e.source
  })))));
  return Map.groupBy(t, ((e) => e.key));
}, we = (a) => ({
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
  isScript: r.isScript && fa(n.value)
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
  notes: [...a.map.noteItems.map(Be), ...a.map.events.map($e).flat()]
}), $e = (a) => a.noteItems.map(((t) => ({ id: a.eventId, key: t.key, value: t.value, name: a.name }))), Be = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), De = (a, t) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(t) }), M = (a, t) => a.map(((e) => {
  const s = e.note.filter(t);
  return { main: e.main, note: s, id: e.id, name: e.name };
})).filter(Ce), Ce = (a) => a.note.length > 0 || a.main.length > 0, Ba = (a, t) => {
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
}, Da = (a, t) => {
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
}, Ir = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return Ca(a, s);
}, Ae = (a, t) => {
  const e = Aa(a, t);
  return U(e);
}, Er = (a, t) => {
  const e = Ae(a, t);
  return Da(a, e);
}, Ca = (a, t) => a.map(((e) => {
  return { filename: e.filename, editingName: e.editingName, map: (s = e.map, r = (n) => t.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => De(n, r)))
  }) };
  var s, r;
})), Aa = (a, t) => {
  const e = Pe(a);
  return $a(e, t);
}, Pe = (a) => [I(Na, a.actors), I(xa, a.skills), I(Ta, a.items), I(ba, a.weapons), I(ka, a.armors), I(Sa, a.classes), I(wa, a.states), I(Ma, a.enemies)], I = (a, t) => ({
  source: a,
  notes: t.flatMap(((e) => e.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: e.name })))))
}), Pa = (a, t) => {
  const e = a.map(Ee);
  return $a(e, t);
}, Fe = (a, t) => {
  const e = Aa(a, t), s = U(e);
  return {
    noteSummary: e,
    nonTextNoteKeys: s,
    mainData: Da(a, s)
  };
}, Ke = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return { noteSummary: e, validMaps: Ca(a, s) };
}, Re = (a, t) => a.params.filter(je).map(((e) => _e(a.pluginName, e, t))).filter(((e) => e !== void 0)), Fa = (a) => a.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(a) && !(!/["`']/.test(a) && fa(a)), je = (a) => typeof a.value == "string" && a.value.length !== 0 && !!Je(a) && !!Fa(a.value), Je = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", _e = (a, t, e) => {
  const s = L(t.value);
  if (s.length !== 0) return {
    filename: a,
    id: 0,
    uuid: e(s),
    baseText: s,
    kind: t.param.attr.text || t.param.name,
    dataKey: t.param.name,
    otherData: [t.rootName, t.param.attr.kind, t.param.attr.desc || ""]
  };
}, Oe = (a, t) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: t.param.name,
  value: typeof t.value == "string" ? t.value : "",
  argTitle: t.param.attr.text || t.param.name,
  paramIndex: 3
}), $r = (a) => {
  const t = pt(a);
  return { extractArgs(e, s) {
    const r = dt(e, t, s);
    return r.args.map(((n) => Oe(r, n)));
  } };
}, Br = (a, t, e, s, r, n, m) => {
  const o = Ea(a.data, m), i = Ba(o, a);
  return Ue(a.data.actors.data, t, i, e, s, r, n);
}, Le = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], Ue = (a, t, e, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = e.data.value;
  return {
    noteSummaries: Le(e),
    pluginParams: t.flatMap(((p) => Re(p, n))),
    map: qe(c, n, m),
    commonEvents: Ot($t, o.commonEvents, n, m),
    troops: Ut(o.troops, Bt, m, n),
    armors: $(i.armors, ka, r, n),
    system: Ve(l, n, s),
    actors: {
      texts: $(i.actors, Na, r, n),
      controlChars: Tt(a)
    },
    classes: $(i.classes, Sa, r, n),
    enemies: $(i.enemies, Ma, r, n),
    items: $(i.items, Ta, r, n),
    skills: $(i.skills, xa, r, n),
    states: ce(i.states, wa, r, n),
    weapons: $(i.weapons, ba, r, n)
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
  }))), r.commands.filter(Ia).map(((l) => ma(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
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
}, J = "HonyakuEx", We = (a, t = {
  description: "書き換え用辞書データ",
  outputDirectory: "translation",
  dictionaryName: "TranslationDictionary",
  pluginSnapshotName: "pluginSnapshot"
}) => ({
  dir: "js/plugins",
  subDir: t.outputDirectory,
  filename: `${t.dictionaryName}.js`,
  text: Xe(a)
}), Xe = (a) => [Ka("辞書データプラグイン。JSONの代わりです。"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a, null, 2)};`, "PluginManager.callCommand(null,", `"${J}",`, '"Setup",', "data", ");", "})();"].join(`
`), Dr = (a) => [Ka("プラグインコマンド書き換えプラグイン"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", `"${J}",`, '"ReadPlugins",', "data", ");", "})()"].join(`
`), Cr = (a) => [{
  name: `${a.outputDirectory}/${J}`,
  description: a.description,
  status: !0,
  parameters: {}
}, {
  name: `${a.outputDirectory}/${a.dictionaryName}`,
  description: a.description,
  status: !0,
  parameters: {}
}, { name: `${a.outputDirectory}/${a.pluginSnapshotName}`, description: a.description, status: !0, parameters: {} }], Ka = (a) => ut({ pluginName: "", locale: "", target: "MZ", dependencies: {
  base: [J],
  orderAfter: [J],
  orderBefore: []
}, schema: { commands: [], params: [], structs: [] }, meta: { plugindesc: a } }, {
  structArray: (t) => JSON.stringify(t),
  struct: (t) => JSON.stringify(t),
  numberArray: (t) => JSON.stringify(t),
  stringArray: (t) => JSON.stringify(t)
}), Ar = (a, t) => {
  const e = t.actorTextDictionary.get(a);
  if (e)
    return t.textDictionary.get(e);
}, Pr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: t, value: e }) => [t, e]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: t, value: e }) => [t, e])))
}), Ye = (a) => [{ data: a, filename: Rt }], Fr = (a) => {
  const t = Ze(a);
  return as(t);
}, Ze = (a) => a.reduce(((t, e) => {
  const s = ts(e);
  return s.key.length === 0 || s.value.length === 0 || (t.validEntries.push({ source: e, normalized: s }), t.rawKeys.add(e.key)), t;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), as = (a) => a.validEntries.reduce(((t, e) => (/\s$/.test(e.source.key) && a.rawKeys.has(e.normalized.key) ? t.errorItems.push(e.source) : t.items.push(e.normalized), t)), {
  errorItems: [],
  items: []
}), ts = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), Kr = (a) => {
  const t = /* @__PURE__ */ new Map();
  return a.forEach(((e, s) => {
    t.has(e.baseText) || t.set(e.baseText, s);
  })), t;
}, Rr = (a) => {
  const t = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...t.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((t) => [t.main, t.note])), Ra = (a, t, e) => a.filter(((s) => s.code === da || s.code === ua || s.code === ga)).map(((s) => ss(s, t, e))), es = { [ga]: "weapon", [da]: "armor", [ua]: "item" }, ss = (a, t, e) => {
  const s = bt(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === kt ? t.gain : a.parameters[1] === St ? t.lose : t.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: es[a.code],
    dataId: wt(a),
    code: a.code,
    commandNameMZ: e(a.code),
    operation: r,
    ...n,
    ...s
  };
}, jr = (a, t, e) => ra(a.map, ((s, r, n) => ({
  ...rs(s),
  commands: Ra(s.list, t, e),
  eventName: n.name,
  pageIndex: r
}))), rs = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Jr = (a, t, e) => Mt(a, ((s, r, n) => ({
  commands: Ra(s.list, t, e),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), ns = (a, t) => {
  const e = a.trimEnd(), s = t.get(e);
  return s ? s.trimEnd() : e;
}, h = (a, t) => {
  const e = a.trimEnd(), s = t(e);
  return s ? s.trimEnd() : e;
}, v = (a, t) => {
  const e = a.trimEnd(), s = t.replaceText(e);
  return s ? s.trimEnd() : e;
}, ja = (a, t) => {
  const e = (o) => t.replaceText(o), s = B(a.note, t), r = h(a.name, e), n = h(a.nickname, e), m = h(a.profile, e);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, Ja = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t);
  return { ...a, name: s, note: e };
}, _a = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t);
  return {
    ...a,
    name: s,
    note: e
  };
}, Oa = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t), r = v(a.description, t), n = v(a.message1, t), m = v(a.message2, t);
  return { ...a, name: s, description: r, message1: n, message2: m, note: e };
}, P = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t), r = v(a.description, t);
  return { ...a, name: s, description: r, note: e };
}, La = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t), r = v(a.message1, t), n = v(a.message2, t), m = v(a.message3, t), o = v(a.message4, t);
  return {
    ...a,
    name: s,
    message1: r,
    message2: n,
    message3: m,
    message4: o,
    note: e
  };
}, ms = (a, t) => {
  switch (a.code) {
    case sa:
      return is(a, t);
    case _:
      return ls(a, t);
    case R:
    case Q:
    case z:
    case K:
      return os(a, t);
    case V:
    case H:
    case G:
      return cs(a, t);
    default:
      return a;
  }
}, os = (a, t) => {
  const e = h(a.parameters[0], t);
  return { code: a.code, indent: a.indent, parameters: [e] };
}, is = (a, t) => {
  const e = a.parameters[4] ? h(a.parameters[4], t) : "";
  return Kt({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: e
  }, a.indent);
}, cs = (a, t) => {
  const e = h(a.parameters[1], t);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], e] };
}, ls = (a, t) => {
  const e = a.parameters[0].map(((s) => h(s, t)));
  return {
    code: _,
    indent: a.indent,
    parameters: [e, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, _r = (a, t, e = `
`) => ps(a, ((s) => t.get(s)), e), ps = (a, t, e = `
`) => It(a.note, ((s) => h(s.value, t)), e), Or = (a, t) => Ua(a, ((e) => ns(e, t))), Ua = (a, t) => ({
  params: gs(a.params, ((e) => h(e, t))),
  messages: ys(a.messages, ((e) => h(e, t))),
  basic: ds(a.basic, ((e) => h(e, t))),
  commands: us(a.commands, ((e) => h(e, t)))
}), ds = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], us = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9]), t(a[10]), t(a[11]), t(a[12]), t(a[13]), t(a[14]), t(a[15]), t(a[16]), t(a[17]), t(a[18]), t(a[19]), "", t(a[21]), t(a[22]), "", t(a[24]), t(a[25])], gs = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], ys = (a, t) => ({
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
class ia {
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
}, hs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === Q), ((m) => m.code === z)))(a, t);
  return fs(s) ? new ia(z, s, e) : new Va(s, e);
}, fs = (a) => a.parameters[0] === "選択肢ヘルプ", vs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === sa), ((m) => m.code === R)))(a, t);
  return new ia(R, s, e);
}, Ns = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === O), ((m) => m.code === ya)))(a, t);
  return new Va(s, e);
}, xs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === ha), ((m) => m.code === K)))(a, t);
  return new ia(K, s, e);
}, Ts = {
  [sa]: (a, t, e) => e.showMessage(vs(a, t), t, a),
  [O]: (a, t, e) => e.script(Ns(a, t), t, a),
  [Q]: (a, t, e) => e.comment(hs(a, t), t, a),
  [ha]: (a, t, e) => e.showScrollingText(xs(a, t), t, a)
}, Ga = (a) => Ts[a], bs = (a, t, e, s) => {
  if (a.code === R || a.code === K || a.code === z) return;
  const r = Ga(a.code);
  return r ? r(e, t, s) : a.code === _ ? ks(a) : a.code === V || a.code === H || a.code === G ? Ss(a) : a.code !== ya ? a : void 0;
}, ks = (a) => ({
  code: _,
  indent: a.indent,
  parameters: [a.parameters[0].map(((t) => t.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ss = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ws = (a) => ({ code: O, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Ms = (a) => {
  const t = a.getBodyText().trimEnd(), e = {
    code: R,
    indent: a.header.indent,
    parameters: [t]
  };
  return [Es(a.header), e];
}, Is = (a) => {
  const t = a.getBodyText().trimEnd(), e = { code: K, indent: a.header.indent, parameters: [t] };
  return [a.header, e];
}, Es = (a) => {
  const t = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], t] };
}, X = (a, t) => {
  const e = (s) => t.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ws, showMessage: Ms, showScrollingText: Is };
    return s.map(((n, m) => n.code === F ? n : bs(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === F ? t.pluginCommand(s) : s.code === O ? t.scriptCommand(s) : ms(s, e)));
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
}), Lr = (a, t) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t })
}), Ur = (a, t) => Xa(a, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t, isReplaceTargetNote: () => !1 }), Wa = (a, t) => Xa(a, t), Xa = (a, t) => ({
  note: B(a.note, t),
  displayName: v(a.displayName, t),
  events: a.events.map(((e) => e ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: B(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: X(n.list, r) }))) }))(e, t) : null)),
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
}, Za = (a, t) => ({ ...a, pages: a.pages.map(((e) => Ya(e, t))) }), qr = (a, t) => ({
  ...a,
  events: a.events.map(((e) => e ? Za(e, t) : null))
}), zr = (a, t) => a.map(((e) => Ya(e, t))), Vr = (a, t) => a.map(((e) => Za(e, t))), Gr = (a) => at(a, (() => [])), Y = (a, t) => at(a, t), at = (a, t) => a.flatMap(((e, s) => $s(e, s, a, t))).filter(((e) => e !== null)), $s = (a, t, e, s) => {
  if (a.code === F) return s(a);
  if (a.code === _) return zt(a);
  const r = Ga(a.code);
  if (r) {
    const n = r(e, t, Bs);
    if (n !== void 0) return [n];
  }
  return a.code === H || a.code === V || a.code === G ? qt(a) : null;
}, Bs = {
  comment: (a) => ({ code: Q, paramIndex: 0, value: a.getBodyText() }),
  showMessage: (a) => {
    return { code: R, paramIndex: 0, value: (t = a).getBodyText(), speaker: (e = t.header, e.parameters[4] ? e.parameters[4].trimEnd() : "") };
    var t, e;
  },
  showScrollingText: (a) => ((t) => ({ code: K, paramIndex: 0, value: t.getBodyText() }))(a),
  script: (a) => {
    const t = ((e) => ({
      code: O,
      paramIndex: 0,
      value: e.getBodyText()
    }))(a);
    if (/["`']/.test(t.value)) return t;
  }
}, Ds = (a) => a.list.filter(ca), Cs = (a) => a.pages.flatMap(((t) => t.list.filter(ca))), ca = (a) => a.code === F, As = (a, t = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, t)
}), Ps = (a, t = () => []) => a.pages.map(((e, s) => ({ eventId: a.id, pageIndex: s, commands: Y(e.list, t) }))), Fs = (a, t = () => []) => ({
  note: a.note,
  noteItems: va(a.note),
  displayedName: a.displayName,
  events: Ks(a, t)
}), Ks = (a, t) => ra(a, ((e, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(e.list, t),
  note: r.note,
  noteItems: va(r.note),
  name: r.name
}))), la = (a, t) => `${a}:${t}`, Rs = (a) => la(a.parameters[0], a.parameters[1]), js = (a) => [...a.commonEvents.data.flatMap(Ds), ...a.troops.data.flatMap(Cs), ...a.mapFiles.validMaps.flatMap(((t) => ((e) => Et(e, ((s) => s.list.filter(ca))))(t.map).flat(2)))], Js = (a) => {
  const t = /* @__PURE__ */ new Map();
  for (const e of a) {
    const s = Rs(e), r = t.get(s);
    r ? r.push(e) : t.set(s, [e]);
  }
  return t;
}, A = (a, t) => Fa(a.default), _s = (a, t, e = A) => {
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
}, Os = (a, t = A) => {
  const e = yt(a);
  return ht(e, ((s, r) => _s(s, r, t)));
}, Ls = (a, t, e = A) => {
  const s = Os(t, e);
  return gt(a, s);
}, Us = (a, t = A) => a.map(((e) => Ls(e.pluginName, e.schema, t))), tt = (a, t = A) => Us(a, t), Hr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a);
  return s.flatMap(((n) => n.commands.map(((m) => {
    const o = la(n.pluginName, m.commandName);
    return { key: o, pluginName: n.pluginName, commandName: m.commandName, argsPath: m.argsPath, commands: r.get(o) ?? [] };
  })))).filter(((n) => n.commands.length > 0));
}, et = (a) => {
  const t = js(a);
  return Js(t);
}, Qr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a), n = s.flatMap(((m) => m.commands.map(((o) => {
    const i = la(m.pluginName, o.commandName);
    return { key: i, pluginName: m.pluginName, commandName: o.commandName, argsPath: o.argsPath, commands: r.get(i) ?? [] };
  })))).filter(((m) => m.commands.length > 0));
  return { params: s, commandPaths: n, groupedCommands: r };
}, st = (a) => ((t) => t.kind.endsWith("[]"))(a.attr), rt = (a) => a.kind === "struct", nt = (a) => a.attr.kind === "struct[]", qs = (a) => mt[a.kind.replace("[]", "")].type === "number", zs = (a) => mt[a.kind.replace("[]", "")].type === "string", C = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, N = { type: "number", hasText: !1 }, mt = {
  string: C,
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
  multiline_string: C,
  file: { type: "string", hasText: !1 },
  "file[]": {
    type: "string",
    hasText: !1
  },
  "multiline_string[]": C,
  "string[]": C,
  combo: C,
  select: C,
  any: C,
  struct: { type: "struct" },
  "actor[]": N,
  "enemy[]": N,
  "class[]": N,
  "skill[]": N,
  "state[]": N,
  "item[]": N,
  "weapon[]": N,
  "common_event[]": N,
  "troop[]": N,
  "armor[]": N,
  "switch[]": N,
  "variable[]": N,
  "number[]": N
};
function Vs(a) {
  return Gs(a, ((t) => !0), ((t) => !0));
}
const Gs = (a, t, e) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (rt(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (nt(o)) r.push(o);
    else if (st(o)) {
      if (e(o)) return void m.push(o);
    } else t(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Hs(a) {
  const t = a.map(((e) => [e.name, e.attr]));
  return Object.fromEntries(t);
}
const Qs = (a, t) => {
  if (a.length !== 0) return `${t}[${a.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Ws = (a, t) => a.map(((e) => ({ path: `${t}["${e.name}"][*]`, param: e }))), ot = {
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
      const y = g.ancestry.concat(g.schemaName), S = g.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${S}["${w.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${S}["${w.name}"][*]`, ancestry: y })))].reverse();
    })(p, d);
    if (d.scalars.length > 0 || d.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: S }) {
        return {
          category: "struct",
          objectSchema: Hs(u.scalars),
          name: S,
          scalarArrays: Ws(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? Qs(u.scalars, y) : void 0
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
const Xs = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"]`, e, s), Ys = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"][*]`, e, s), Zs = (a, t, e, s) => ((r) => rt(r.attr))(e) ? er(a, e, s) : nt(e) ? sr(a, e, s) : st(e) ? ar(a, t, e) : tr(a, t, e), ar = (a, t, e) => ({
  rootCategory: a,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${e.name}"][*]`, param: e }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), tr = (a, t, e) => ({ rootCategory: a, rootName: t, scalars: { name: e.attr.kind, objectSchema: { [e.name]: e.attr }, scalarsPath: `$["${e.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), er = (a, t, e) => ({
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Xs(t, "$", e)
}), sr = (a, t, e) => ({
  structArrays: Ys(t, "$", e),
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), rr = (a, t) => t.map(((e) => nr(a, e))).flat(3), nr = (a, t) => [t.top ? aa(t, a, t.top, "") : [], t.structs.map(((e) => aa(t, a, e))), t.structArrays.map(((e) => aa(t, a, e)))], aa = (a, t, e, s = e.bundleName) => {
  const r = e.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: p, segments: f }) => ((d, b, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const S = u[u.length - 1];
    if (typeof S == "number") return null;
    const w = y[S];
    return w ? { rootName: d.rootName, rootType: d.rootCategory, structName: b, value: g, param: { name: S, attr: w } } : null;
  })(m, o, p, f, l))).filter(((p) => p !== null)))(a, s, t, e.scalar.jsonPathJS, e.scalar.record) : [], n = e.arrays.map(((m) => ((o, i, c, l) => {
    const p = l.jsonPathJS.find(c);
    if (!Array.isArray(p)) return [];
    const f = l.schema.attr;
    return zs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, p, i, l.schema) : qs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: d.rootName, rootType: d.rootCategory, value: y, structName: g, param: u }))))(o, p, i, l.schema) : [];
  })(a, s, t, m)));
  return [r, n].flat(2);
}, mr = (a, t) => {
  const e = [], s = a.scalars ? ta(a.scalars, "scalar", t, e) : void 0, r = a.structs.items.map(((m) => ta(m, "struct", t, e))), n = a.structArrays.items.map(((m) => ta(m, "structArray", t, e)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: e };
}, ta = (a, t, e, s) => {
  const r = or(a.scalarArrays, a.name, t, e, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: ir(a.scalarsPath, a.objectSchema, t, e, s)
  } : { bundleName: a.name, arrays: r };
}, or = (a, t, e, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: t
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: e, error: m, handledInfo: s.errorAtPath(n.path, e, m) }), [];
  }
})), ir = (a, t, e, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: t };
  } catch (n) {
    return void r.push({ path: a, valType: e, error: n, handledInfo: s.errorAtPath(a, e, n) });
  }
}, cr = (a, t, e, s) => ({
  pluginName: a,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: lr(t, e, s)
}), lr = (a, t, e) => a.args.map(((s) => ((r, n) => {
  const m = mr(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(Zs("args", a.command, s, t), e))), pr = (a, t) => {
  const e = ((s) => new Map(s.map(((r) => [r.struct, Vs(r.params)]))))(a.schema.structs);
  return dr(a.pluginName, a.schema.commands, e, t);
}, dr = (a, t, e, s) => t.map(((r) => [ur(a, r.command), cr(a, r, e, s)])), ur = (a, t) => `${a}:${t}`, gr = (a, t) => {
  const [e, s] = a.parameters, r = `${e}:${s}`, n = t.get(r);
  if (!n) return {
    pluginName: e,
    commandName: s,
    args: []
  };
  return o = ft(a.parameters[3]), { pluginName: (i = n).pluginName, commandName: i.commandName, args: rr(o, i.extractors) };
  var o, i;
}, Wr = (a) => {
  const t = new Map(a);
  return new pa(t);
}, Xr = () => new pa(/* @__PURE__ */ new Map()), Yr = (a) => {
  const t = a.flatMap(((e) => pr(e, ((s) => new Dt(s)))));
  return new pa(new Map(t));
};
class pa {
  _commandMap;
  constructor(t) {
    this._commandMap = t;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return Fs(t, ((e) => this.extractArgs(e)));
  }
  extractBattleText(t) {
    return Ps(t, ((e) => this.extractArgs(e)));
  }
  extractCommonEventText(t) {
    return As(t, ((e) => this.extractArgs(e)));
  }
  extractArgs(t) {
    const e = gr(t, this._commandMap);
    return e.args.filter(yr).map(((s) => ({
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
const yr = (a) => typeof a.value == "string", Zr = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), ea = (a, t, e) => ({
  folder: e,
  key: t,
  image: a[t],
  id: a.id
}), an = (a) => [ea(a, "faceName", "faces"), ea(a, "characterName", "characters"), ea(a, "battlerName", "sv_actors")], hr = (a, t) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((e) => ja(e, t))),
  armors: k(a.armors, ((e) => P(e, t))),
  classes: k(a.classes, ((e) => _a(e, t))),
  commonEvents: k(a.commonEvents, ((e) => Qa(e, t))),
  enemies: k(a.enemies, ((e) => Ja(e, t))),
  items: k(a.items, ((e) => P(e, t))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((e) => Oa(e, t))),
  states: k(a.states, ((e) => La(e, t))),
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
  const r = Ea(a, e), n = Ba(r, {
    audioFiles: t.audioFiles,
    imageFiles: t.imageFiles,
    otherFiles: t.otherFiles
  }), m = fr(n.nonTextNoteKeys, s);
  return { data: hr(a, m), note: n };
}, fr = (a, t) => ({
  pluginCommand: (e) => t.pluginCommand(e),
  scriptCommand: (e) => t.scriptCommand(e),
  replaceText: (e) => t.replaceText(e),
  isReplaceTargetNote: (e) => !!a.has(e.key) && t.isReplaceTargetNote(e)
}), tn = (a, t) => Wa(a, {
  replaceText: (e) => t.textDictionary.get(e),
  pluginCommand: (e) => e,
  scriptCommand: (e) => e,
  isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), en = (a, t) => {
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
    skills: a.skills.map(((s) => Oa(s, e))),
    states: a.states.map(((s) => La(s, e))),
    troops: a.troops.map(((s) => Ha(s, e))),
    weapons: a.weapons.map(((s) => P(s, e))),
    system: qa(a.system, ((s) => t.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => Qa(s, e)))
  };
}, sn = (a, t) => {
  const e = vr(a, t);
  return na(e);
}, vr = (a, t) => {
  const e = { replaceText: (s) => a.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => a.textKeys.has(s.key) };
  return ct(a.data, a.assetBundle, t, e).data;
}, rn = (a, t, e) => {
  const s = lt(a, t, e);
  return { dataJSON: na(s.main), scriptJS: [We(s.aux)] };
}, nn = (a, t, e) => {
  const s = lt(a, t, e);
  return [...na(s.main), ...Ye(s.aux)];
}, lt = (a, t, e) => {
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
  Xr as A,
  Wr as B,
  Yr as C,
  Ht as D,
  Ps as E,
  As as F,
  an as G,
  Zr as H,
  ss as I,
  Ra as J,
  jr as K,
  Jr as L,
  Fs as M,
  ae as N,
  gr as O,
  D as P,
  te as Q,
  qt as R,
  oe as S,
  se as T,
  ee as U,
  Gr as V,
  Y as W,
  ne as X,
  Ea as Y,
  re as Z,
  ie as _,
  Oe as a,
  me as a0,
  zt as a1,
  Ye as a2,
  Os as a3,
  Ar as a4,
  Rr as a5,
  Js as a6,
  be as a7,
  ke as a8,
  A as a9,
  Ur as aA,
  ps as aB,
  _r as aC,
  Za as aD,
  hr as aE,
  ct as aF,
  en as aG,
  tn as aH,
  Oa as aI,
  La as aJ,
  Or as aK,
  qa as aL,
  ns as aM,
  Ha as aN,
  Vr as aO,
  U as aP,
  $a as aQ,
  Pa as aR,
  Qe as aS,
  je as aa,
  Fa as ab,
  _s as ac,
  Ia as ad,
  Ae as ae,
  Er as af,
  Fr as ag,
  Ir as ah,
  We as ai,
  ja as aj,
  P as ak,
  ms as al,
  _a as am,
  Qa as an,
  Lr as ao,
  zr as ap,
  vr as aq,
  sn as ar,
  lt as as,
  nn as at,
  Ja as au,
  X as av,
  Ya as aw,
  rn as ax,
  Wa as ay,
  qr as az,
  Br as b,
  Hr as c,
  tt as d,
  Qr as e,
  Ba as f,
  Pr as g,
  et as h,
  js as i,
  Ut as j,
  Ot as k,
  le as l,
  $ as m,
  Re as n,
  ce as o,
  de as p,
  Vt as q,
  Kr as r,
  $r as s,
  la as t,
  Rs as u,
  Cr as v,
  Dr as w,
  Us as x,
  Ls as y,
  Ge as z
};
