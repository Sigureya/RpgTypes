import { createCommandExtractorMapFromPipeline as pt, extractPluginCommandWithExtractor as dt, generatePluginAnnotationLines as ut, generatePluginAnnotationText as gt, createPluginParamDictionary as yt, filterPluginSchemaStringParams as ht, filterPluginSchemaByFn as ft, parseDeepRecord as vt } from "@sigureya/rmmz-plugin-schema";
import { as as F, v as V, E as G, w as H, b as da, q as ua, N as ga, aS as K, P as z, Q, aP as R, aM as _, aO as sa, az as ya, ay as O, aR as ha } from "./makeAudio.es.js";
import { n as L } from "./normalText.es.js";
import { f as ra, u as Nt, x as xt, z as Tt, r as fa, h as bt, s as kt, O as St, G as wt, p as Mt, g as It, D as C, C as Et, y as va, w as Bt } from "./isScript.es.js";
import { l as q, a as Na, i as xa, f as Ta, c as ba, e as ka, d as Sa, j as wa, b as Ma, h as Ct, g as $t } from "./constants.es.js";
import { JSONPathJS as Dt } from "jsonpath-js";
import { k as At, v as Pt, u as Ft, r as Kt, a as Rt } from "./makeSystem.es.js";
import { a as jt, r as na } from "./writeData.es.js";
const ma = (a, t, e, s, r, n) => {
  if (a.code === F) return _t(a, t, e, r, n);
  const m = L(a.value);
  return { otherData: n, uuid: r(m), kind: s(a), baseText: m, filename: e, id: t, speaker: a.speaker ?? "", dataKey: Jt(a) };
}, Jt = (a) => `code:${a.code}`, _t = (a, t, e, s, r) => {
  const n = L(a.value);
  return { otherData: [a.pluginName, ...r], uuid: s(n), kind: `${Ot(a)}`, baseText: n, filename: e, id: t, dataKey: `code:${a.code}-${a.argName}` };
}, Ot = (a) => `${a.commandName}.${a.argTitle}`, Lt = (a, t, e, s) => t.flatMap(((r) => Ut(a, r, e, s))), Ut = (a, t, e, s) => t.commands.filter(Ia).map(((r) => ma(r, t.eventId, a, s, e, [t.name]))), qt = (a, t, e, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ma(m, r.eventId, t, e, s, [n])));
})), Ia = (a) => a.value.length > 0, zt = (a) => ((t, e) => ({
  code: t.code,
  paramIndex: e,
  value: t.parameters[e]
}))(a, 1), Vt = (a) => a.parameters[0].map(((t, e) => ({ code: 102, paramIndex: e, value: t }))), Gt = (a, t, e, s, r) => {
  const n = Array.from(Qt(a, t, e, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter(Ht);
}, Ht = (a) => a !== null && a.key.length > 0, Qt = (a, t, e, s) => {
  const r = Wt(a), n = s.map(Xt), m = Yt(t), o = Zt(e);
  return new Set([r, m, o, n].flat(4));
}, Wt = (a) => a.map(((t) => [t.name, t.nickname, t.profile])), Xt = (a) => ra(a, oa), Yt = (a) => Nt(a, oa), Zt = (a) => xt(a, oa), oa = ({ list: a }) => a.filter(ae).map(((t) => t.parameters[1])), ae = (a) => a.code === V || a.code === G || a.code === H, $ = (a, t) => ({
  id: a.id,
  name: a.name,
  note: te(a),
  main: t.map(((e) => ({ key: e, value: a[e], id: a.id })))
}), te = (a) => Tt(a.note, ((t, e) => ({
  key: t,
  value: e,
  id: a.id
}))), ee = (a) => $(a, ["name", "nickname", "profile"]), se = (a) => $(a, ["name"]), re = (a) => $(a, ["name"]), ne = (a) => $(a, ["name", "description", "message1", "message2"]), me = (a) => $(a, ["name", "description"]), oe = (a) => $(a, ["name", "description"]), ie = (a) => $(a, ["name", "description"]), ce = (a) => $(a, ["name", "message1", "message2", "message3", "message4"]), le = (a, t, e, s) => B(a, t, {
  message1: e.state.message1,
  message2: e.state.message2,
  message3: e.state.message3,
  message4: e.state.message4,
  name: e.name,
  note: e.note
}, s), B = (a, t, e, s) => a.map(((r) => pe(r, t, e, s))), pe = (a, t, e, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = L(r.value);
  return {
    kind: e[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: t,
    uuid: s(n)
  };
})), note: de(a.note, t, e, s) }), de = (a, t, e, s) => a.map(((r) => ({
  kind: `${e.note}:${r.key}`,
  baseText: r.value,
  filename: t,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), ue = (a, t, e, s) => [{ filename: t, id: 0, baseText: a.gameTitle, uuid: s(a.gameTitle), kind: e.gameTitle, dataKey: "gameTitle" }, {
  filename: t,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: e.currencyUnit,
  dataKey: "currencyUnit"
}, ...Z(t, a.equipTypes, "equipTypes", e.equipTypes, s), ...Z(t, a.weaponTypes, "weaponTypes", e.weaponTypes, s), ...Z(t, a.armorTypes, "armorTypes", e.armorTypes, s)], Z = (a, t, e, s, r) => t.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = L(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: e };
})), ge = (a) => ({
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  equipTypes: [...a.equipTypes],
  armorTypes: [...a.armorTypes],
  weaponTypes: [...a.weaponTypes],
  elements: [...a.elements],
  skillTypes: [...a.skillTypes],
  terms: {
    basic: Kt(a.terms.basic),
    commands: Ft(a.terms.commands),
    messages: Pt(a.terms.messages),
    params: At(a.terms.params)
  }
}), Ea = (a, t) => {
  const e = T(a.actors, ee), s = ve(a.armors), r = T(a.classes, re), n = T(a.enemies, se), m = T(a.items, me), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, ne), c = T(a.states, ce), l = T(a.weapons, oe), p = Ne(a.commonEvents, t), f = xe(a.troops, t), d = Te(a.mapFiles, t), b = ye(a.system), g = he([e, s, r, n, m, o, i, c, l, f, p]).concat(fe(a.mapFiles, a.system));
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
}, ye = (a) => ({ message: a.message, system: a.system ? ge(a.system) : null }), T = (a, t) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(t) : []
}), he = (a) => a.filter(((t) => !t.success)).map(((t) => ({ fileName: t.fileName, error: t.error }))), fe = (a, t) => [...a.info.success === !1 ? [{
  fileName: a.info.filename,
  error: a.info.message
}] : [], ...a.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message }))), ...t.system === null ? [{
  fileName: q,
  error: t.message
}] : []], ve = (a) => T(a, ie), Ne = (a, t) => T(a, ((e) => t.extractCommonEventText(e))), xe = (a, t) => T(a, ((e) => t.extractBattleText(e))), Te = (a, t) => {
  const e = a.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: t.extractMapTexts(s.map)
  })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: e };
}, be = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, ke = (a) => {
  const t = a.trim().toLowerCase();
  return t === "true" || t === "false";
}, Se = (a) => {
  const t = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, U = (a) => {
  const t = a.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
  return new Set(t);
}, Ba = (a, t) => {
  const e = we(a);
  return Array.from(e.entries()).map((([s, r]) => {
    const n = Ee(r, t);
    return { key: s, kinds: Ie(n), values: r.map(Me) };
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
}, Me = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), Ie = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((t) => t !== null)), Ee = (a, { audioFiles: t, imageFiles: e, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ke(n.value),
  isNumber: r.isNumber && Se(n.value),
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
}), Be = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map($e), ...a.map.events.map(Ce).flat()]
}), Ce = (a) => a.noteItems.map(((t) => ({ id: a.eventId, key: t.key, value: t.value, name: a.name }))), $e = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), De = (a, t) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(t) }), M = (a, t) => a.map(((e) => {
  const s = e.note.filter(t);
  return { main: e.main, note: s, id: e.id, name: e.name };
})).filter(Ae), Ae = (a) => a.note.length > 0 || a.main.length > 0, Ca = (a, t) => {
  const e = Ke(a.value.mainData, t), s = Re(a.value.mapFiles.validMaps, t);
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
}, Cr = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return Da(a, s);
}, Pe = (a, t) => {
  const e = Aa(a, t);
  return U(e);
}, $r = (a, t) => {
  const e = Pe(a, t);
  return $a(a, e);
}, Da = (a, t) => a.map(((e) => {
  return { filename: e.filename, editingName: e.editingName, map: (s = e.map, r = (n) => t.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => De(n, r)))
  }) };
  var s, r;
})), Aa = (a, t) => {
  const e = Fe(a);
  return Ba(e, t);
}, Fe = (a) => [I(Na, a.actors), I(xa, a.skills), I(Ta, a.items), I(ba, a.weapons), I(ka, a.armors), I(Sa, a.classes), I(wa, a.states), I(Ma, a.enemies)], I = (a, t) => ({
  source: a,
  notes: t.flatMap(((e) => e.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: e.name })))))
}), Pa = (a, t) => {
  const e = a.map(Be);
  return Ba(e, t);
}, Ke = (a, t) => {
  const e = Aa(a, t), s = U(e);
  return {
    noteSummary: e,
    nonTextNoteKeys: s,
    mainData: $a(a, s)
  };
}, Re = (a, t) => {
  const e = Pa(a, t), s = U(e);
  return { noteSummary: e, validMaps: Da(a, s) };
}, je = (a, t) => a.params.filter(Je).map(((e) => Oe(a.pluginName, e, t))).filter(((e) => e !== void 0)), Fa = (a) => a.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(a) && !(!/["`']/.test(a) && fa(a)), Je = (a) => typeof a.value == "string" && a.value.length !== 0 && !!_e(a) && !!Fa(a.value), _e = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", Oe = (a, t, e) => {
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
}, Le = (a, t) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: t.param.name,
  value: typeof t.value == "string" ? t.value : "",
  argTitle: t.param.attr.text || t.param.name,
  paramIndex: 3
}), Dr = (a) => {
  const t = pt(a);
  return { extractArgs(e, s) {
    const r = dt(e, t, s);
    return r.args.map(((n) => Le(r, n)));
  } };
}, Ar = (a, t, e, s, r, n, m) => {
  const o = Ea(a.data, m), i = Ca(o, a);
  return qe(a.data.actors.data, t, i, e, s, r, n);
}, Ue = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], qe = (a, t, e, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = e.data.value;
  return {
    noteSummaries: Ue(e),
    pluginParams: t.flatMap(((p) => je(p, n))),
    map: ze(c, n, m),
    commonEvents: Lt(Ct, o.commonEvents, n, m),
    troops: qt(o.troops, $t, m, n),
    armors: B(i.armors, ka, r, n),
    system: Ge(l, n, s),
    actors: {
      texts: B(i.actors, Na, r, n),
      controlChars: bt(a)
    },
    classes: B(i.classes, Sa, r, n),
    enemies: B(i.enemies, Ma, r, n),
    items: B(i.items, Ta, r, n),
    skills: B(i.skills, xa, r, n),
    states: le(i.states, wa, r, n),
    weapons: B(i.weapons, ba, r, n)
  };
}, ze = (a, t, e) => a.validMaps.map(((s) => Ve(s, t, e))).flat(3), Ve = (a, t, e) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = be(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ia).map(((l) => ma(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, t, e))), Ge = (a, t, e) => a.system === null ? { gameTitle: "", filename: q, texts: [] } : {
  gameTitle: a.system.gameTitle,
  filename: q,
  texts: ue(a.system, q, e, t)
}, He = (a, t, e, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return {
    textDictionary: Qe(r, n),
    actorTexts: Gt(a, t, e, s, m)
  };
}, Qe = (a, t) => Array.from(a.entries()).map((([e, s]) => ({ key: t(e), value: s }))), We = (a) => {
  const t = U(a);
  return Array.from(t);
}, J = "HonyakuEx", Xe = "Setup", Ye = "ReadPlugins", Ze = (a, t = {
  description: "書き換え用辞書データ",
  outputDirectory: "translation",
  dictionaryName: "TranslationDictionary",
  pluginSnapshotName: "pluginSnapshot"
}) => ({
  filename: `${t.outputDirectory}/${t.dictionaryName}.js`,
  text: as(a)
}), as = (a) => [Ka("辞書データプラグイン。JSONの代わりです。"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", J, Xe, "data", ");", "})();"].join(`
`), Pr = (a) => [Ka("プラグインコマンド書き換えプラグイン"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", J, Ye, "data", ");", "})()"].join(`
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
  const t = ut({
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
  return gt(t);
}, Kr = (a, t) => {
  const e = t.actorTextDictionary.get(a);
  if (e)
    return t.textDictionary.get(e);
}, Rr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: t, value: e }) => [t, e]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: t, value: e }) => [t, e])))
}), ts = (a) => [{ data: a, filename: jt }], jr = (a) => {
  const t = es(a);
  return ss(t);
}, es = (a) => a.reduce(((t, e) => {
  const s = rs(e);
  return s.key.length === 0 || s.value.length === 0 || (t.validEntries.push({ source: e, normalized: s }), t.rawKeys.add(e.key)), t;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), ss = (a) => a.validEntries.reduce(((t, e) => (/\s$/.test(e.source.key) && a.rawKeys.has(e.normalized.key) ? t.errorItems.push(e.source) : t.items.push(e.normalized), t)), {
  errorItems: [],
  items: []
}), rs = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), Jr = (a) => {
  const t = /* @__PURE__ */ new Map();
  return a.forEach(((e, s) => {
    t.has(e.baseText) || t.set(e.baseText, s);
  })), t;
}, _r = (a) => {
  const t = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...t.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((t) => [t.main, t.note])), Ra = (a, t, e) => a.filter(((s) => s.code === da || s.code === ua || s.code === ga)).map(((s) => ms(s, t, e))), ns = { [ga]: "weapon", [da]: "armor", [ua]: "item" }, ms = (a, t, e) => {
  const s = kt(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === St ? t.gain : a.parameters[1] === wt ? t.lose : t.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: ns[a.code],
    dataId: Mt(a),
    code: a.code,
    commandNameMZ: e(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Or = (a, t, e) => ra(a.map, ((s, r, n) => ({
  ...os(s),
  commands: Ra(s.list, t, e),
  eventName: n.name,
  pageIndex: r
}))), os = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Lr = (a, t, e) => It(a, ((s, r, n) => ({
  commands: Ra(s.list, t, e),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), is = (a, t) => {
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
}, Oa = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t), r = v(a.description, t), n = v(a.message1, t), m = v(a.message2, t);
  return { ...a, name: s, description: r, message1: n, message2: m, note: e };
}, P = (a, t) => {
  const e = C(a.note, t), s = v(a.name, t), r = v(a.description, t);
  return { ...a, name: s, description: r, note: e };
}, La = (a, t) => {
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
}, cs = (a, t) => {
  switch (a.code) {
    case sa:
      return ps(a, t);
    case _:
      return us(a, t);
    case R:
    case Q:
    case z:
    case K:
      return ls(a, t);
    case V:
    case H:
    case G:
      return ds(a, t);
    default:
      return a;
  }
}, ls = (a, t) => {
  const e = h(a.parameters[0], t);
  return { code: a.code, indent: a.indent, parameters: [e] };
}, ps = (a, t) => {
  const e = a.parameters[4] ? h(a.parameters[4], t) : "";
  return Rt({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: e
  }, a.indent);
}, ds = (a, t) => {
  const e = h(a.parameters[1], t);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], e] };
}, us = (a, t) => {
  const e = a.parameters[0].map(((s) => h(s, t)));
  return {
    code: _,
    indent: a.indent,
    parameters: [e, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, Ur = (a, t, e = `
`) => gs(a, ((s) => t.get(s)), e), gs = (a, t, e = `
`) => Et(a.note, ((s) => h(s.value, t)), e), qr = (a, t) => Ua(a, ((e) => is(e, t))), Ua = (a, t) => ({
  params: fs(a.params, ((e) => h(e, t))),
  messages: vs(a.messages, ((e) => h(e, t))),
  basic: ys(a.basic, ((e) => h(e, t))),
  commands: hs(a.commands, ((e) => h(e, t)))
}), ys = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], hs = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9]), t(a[10]), t(a[11]), t(a[12]), t(a[13]), t(a[14]), t(a[15]), t(a[16]), t(a[17]), t(a[18]), t(a[19]), "", t(a[21]), t(a[22]), "", t(a[24]), t(a[25])], fs = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], vs = (a, t) => ({
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
}, Ns = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === Q), ((m) => m.code === z)))(a, t);
  return xs(s) ? new ia(z, s, e) : new Va(s, e);
}, xs = (a) => a.parameters[0] === "選択肢ヘルプ", Ts = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === sa), ((m) => m.code === R)))(a, t);
  return new ia(R, s, e);
}, bs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === O), ((m) => m.code === ya)))(a, t);
  return new Va(s, e);
}, ks = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === ha), ((m) => m.code === K)))(a, t);
  return new ia(K, s, e);
}, Ss = {
  [sa]: (a, t, e) => e.showMessage(Ts(a, t), t, a),
  [O]: (a, t, e) => e.script(bs(a, t), t, a),
  [Q]: (a, t, e) => e.comment(Ns(a, t), t, a),
  [ha]: (a, t, e) => e.showScrollingText(ks(a, t), t, a)
}, Ga = (a) => Ss[a], ws = (a, t, e, s) => {
  if (a.code === R || a.code === K || a.code === z) return;
  const r = Ga(a.code);
  return r ? r(e, t, s) : a.code === _ ? Ms(a) : a.code === V || a.code === H || a.code === G ? Is(a) : a.code !== ya ? a : void 0;
}, Ms = (a) => ({
  code: _,
  indent: a.indent,
  parameters: [a.parameters[0].map(((t) => t.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Is = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), Es = (a) => ({ code: O, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Bs = (a) => {
  const t = a.getBodyText().trimEnd(), e = {
    code: R,
    indent: a.header.indent,
    parameters: [t]
  };
  return [$s(a.header), e];
}, Cs = (a) => {
  const t = a.getBodyText().trimEnd(), e = { code: K, indent: a.header.indent, parameters: [t] };
  return [a.header, e];
}, $s = (a) => {
  const t = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], t] };
}, X = (a, t) => {
  const e = (s) => t.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: Es, showMessage: Bs, showScrollingText: Cs };
    return s.map(((n, m) => n.code === F ? n : ws(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === F ? t.pluginCommand(s) : s.code === O ? t.scriptCommand(s) : cs(s, e)));
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
}), Hr = (a, t) => a.map(((e) => Ya(e, t))), Qr = (a, t) => a.map(((e) => Za(e, t))), Wr = (a) => at(a, (() => [])), Y = (a, t) => at(a, t), at = (a, t) => a.flatMap(((e, s) => Ds(e, s, a, t))).filter(((e) => e !== null)), Ds = (a, t, e, s) => {
  if (a.code === F) return s(a);
  if (a.code === _) return Vt(a);
  const r = Ga(a.code);
  if (r) {
    const n = r(e, t, As);
    if (n !== void 0) return [n];
  }
  return a.code === H || a.code === V || a.code === G ? zt(a) : null;
}, As = {
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
}, Ps = (a) => a.list.filter(ca), Fs = (a) => a.pages.flatMap(((t) => t.list.filter(ca))), ca = (a) => a.code === F, Ks = (a, t = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, t)
}), Rs = (a, t = () => []) => a.pages.map(((e, s) => ({ eventId: a.id, pageIndex: s, commands: Y(e.list, t) }))), js = (a, t = () => []) => ({
  note: a.note,
  noteItems: va(a.note),
  displayedName: a.displayName,
  events: Js(a, t)
}), Js = (a, t) => ra(a, ((e, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(e.list, t),
  note: r.note,
  noteItems: va(r.note),
  name: r.name
}))), la = (a, t) => `${a}:${t}`, _s = (a) => la(a.parameters[0], a.parameters[1]), Os = (a) => [...a.commonEvents.data.flatMap(Ps), ...a.troops.data.flatMap(Fs), ...a.mapFiles.validMaps.flatMap(((t) => ((e) => Bt(e, ((s) => s.list.filter(ca))))(t.map).flat(2)))], Ls = (a) => {
  const t = /* @__PURE__ */ new Map();
  for (const e of a) {
    const s = _s(e), r = t.get(s);
    r ? r.push(e) : t.set(s, [e]);
  }
  return t;
}, A = (a, t) => Fa(a.default), Us = (a, t, e = A) => {
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
}, qs = (a, t = A) => {
  const e = ht(a);
  return ft(e, ((s, r) => Us(s, r, t)));
}, zs = (a, t, e = A) => {
  const s = qs(t, e);
  return yt(a, s);
}, Vs = (a, t = A) => a.map(((e) => zs(e.pluginName, e.schema, t))), tt = (a, t = A) => Vs(a, t), Xr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a);
  return s.flatMap(((n) => n.commands.map(((m) => {
    const o = la(n.pluginName, m.commandName);
    return { key: o, pluginName: n.pluginName, commandName: m.commandName, argsPath: m.argsPath, commands: r.get(o) ?? [] };
  })))).filter(((n) => n.commands.length > 0));
}, et = (a) => {
  const t = Os(a);
  return Ls(t);
}, Yr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a), n = s.flatMap(((m) => m.commands.map(((o) => {
    const i = la(m.pluginName, o.commandName);
    return { key: i, pluginName: m.pluginName, commandName: o.commandName, argsPath: o.argsPath, commands: r.get(i) ?? [] };
  })))).filter(((m) => m.commands.length > 0));
  return { params: s, commandPaths: n, groupedCommands: r };
}, st = (a) => ((t) => t.kind.endsWith("[]"))(a.attr), rt = (a) => a.kind === "struct", nt = (a) => a.attr.kind === "struct[]", Gs = (a) => mt[a.kind.replace("[]", "")].type === "number", Hs = (a) => mt[a.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, x = { type: "number", hasText: !1 }, N = { type: "number", hasText: !1 }, mt = {
  string: D,
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
function Qs(a) {
  return Ws(a, ((t) => !0), ((t) => !0));
}
const Ws = (a, t, e) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (rt(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (nt(o)) r.push(o);
    else if (st(o)) {
      if (e(o)) return void m.push(o);
    } else t(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Xs(a) {
  const t = a.map(((e) => [e.name, e.attr]));
  return Object.fromEntries(t);
}
const Ys = (a, t) => {
  if (a.length !== 0) return `${t}[${a.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Zs = (a, t) => a.map(((e) => ({ path: `${t}["${e.name}"][*]`, param: e }))), ot = {
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
          objectSchema: Xs(u.scalars),
          name: S,
          scalarArrays: Zs(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? Ys(u.scalars, y) : void 0
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
const ar = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"]`, e, s), tr = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"][*]`, e, s), er = (a, t, e, s) => ((r) => rt(r.attr))(e) ? nr(a, e, s) : nt(e) ? mr(a, e, s) : st(e) ? sr(a, t, e) : rr(a, t, e), sr = (a, t, e) => ({
  rootCategory: a,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${e.name}"][*]`, param: e }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), rr = (a, t, e) => ({ rootCategory: a, rootName: t, scalars: { name: e.attr.kind, objectSchema: { [e.name]: e.attr }, scalarsPath: `$["${e.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), nr = (a, t, e) => ({
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ar(t, "$", e)
}), mr = (a, t, e) => ({
  structArrays: tr(t, "$", e),
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), or = (a, t) => t.map(((e) => ir(a, e))).flat(3), ir = (a, t) => [t.top ? aa(t, a, t.top, "") : [], t.structs.map(((e) => aa(t, a, e))), t.structArrays.map(((e) => aa(t, a, e)))], aa = (a, t, e, s = e.bundleName) => {
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
    return Hs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, p, i, l.schema) : Gs(f) ? ((d, b, g, u) => b.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: d.rootName, rootType: d.rootCategory, value: y, structName: g, param: u }))))(o, p, i, l.schema) : [];
  })(a, s, t, m)));
  return [r, n].flat(2);
}, cr = (a, t) => {
  const e = [], s = a.scalars ? ta(a.scalars, "scalar", t, e) : void 0, r = a.structs.items.map(((m) => ta(m, "struct", t, e))), n = a.structArrays.items.map(((m) => ta(m, "structArray", t, e)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: e };
}, ta = (a, t, e, s) => {
  const r = lr(a.scalarArrays, a.name, t, e, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: pr(a.scalarsPath, a.objectSchema, t, e, s)
  } : { bundleName: a.name, arrays: r };
}, lr = (a, t, e, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: t
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: e, error: m, handledInfo: s.errorAtPath(n.path, e, m) }), [];
  }
})), pr = (a, t, e, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: t };
  } catch (n) {
    return void r.push({ path: a, valType: e, error: n, handledInfo: s.errorAtPath(a, e, n) });
  }
}, dr = (a, t, e, s) => ({
  pluginName: a,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: ur(t, e, s)
}), ur = (a, t, e) => a.args.map(((s) => ((r, n) => {
  const m = cr(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(er("args", a.command, s, t), e))), gr = (a, t) => {
  const e = ((s) => new Map(s.map(((r) => [r.struct, Qs(r.params)]))))(a.schema.structs);
  return yr(a.pluginName, a.schema.commands, e, t);
}, yr = (a, t, e, s) => t.map(((r) => [hr(a, r.command), dr(a, r, e, s)])), hr = (a, t) => `${a}:${t}`, fr = (a, t) => {
  const [e, s] = a.parameters, r = `${e}:${s}`, n = t.get(r);
  if (!n) return {
    pluginName: e,
    commandName: s,
    args: []
  };
  return o = vt(a.parameters[3]), { pluginName: (i = n).pluginName, commandName: i.commandName, args: or(o, i.extractors) };
  var o, i;
}, Zr = (a) => {
  const t = new Map(a);
  return new pa(t);
}, an = () => new pa(/* @__PURE__ */ new Map()), tn = (a) => {
  const t = a.flatMap(((e) => gr(e, ((s) => new Dt(s)))));
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
    return js(t, ((e) => this.extractArgs(e)));
  }
  extractBattleText(t) {
    return Rs(t, ((e) => this.extractArgs(e)));
  }
  extractCommonEventText(t) {
    return Ks(t, ((e) => this.extractArgs(e)));
  }
  extractArgs(t) {
    const e = fr(t, this._commandMap);
    return e.args.filter(vr).map(((s) => ({
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
const vr = (a) => typeof a.value == "string", en = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), ea = (a, t, e) => ({
  folder: e,
  key: t,
  image: a[t],
  id: a.id
}), sn = (a) => [ea(a, "faceName", "faces"), ea(a, "characterName", "characters"), ea(a, "battlerName", "sv_actors")], Nr = (a, t) => ({
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
  const r = Ea(a, e), n = Ca(r, {
    audioFiles: t.audioFiles,
    imageFiles: t.imageFiles,
    otherFiles: t.otherFiles
  }), m = xr(n.nonTextNoteKeys, s);
  return { data: Nr(a, m), note: n };
}, xr = (a, t) => ({
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
    skills: a.skills.map(((s) => Oa(s, e))),
    states: a.states.map(((s) => La(s, e))),
    troops: a.troops.map(((s) => Ha(s, e))),
    weapons: a.weapons.map(((s) => P(s, e))),
    system: qa(a.system, ((s) => t.textDictionary.get(s))),
    commonEvents: a.commonEvents.map(((s) => Qa(s, e)))
  };
}, mn = (a, t) => {
  const e = Tr(a, t);
  return na(e);
}, Tr = (a, t) => {
  const e = { replaceText: (s) => a.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => a.textKeys.has(s.key) };
  return ct(a.data, a.assetBundle, t, e).data;
}, on = (a, t, e) => {
  const s = lt(a, t, e);
  return { dataJSON: na(s.main), scriptJS: [Ze(s.aux)] };
}, cn = (a, t, e) => {
  const s = lt(a, t, e);
  return [...na(s.main), ...ts(s.aux)];
}, lt = (a, t, e) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = a, o = ct(s, r, t, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : e(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }), i = He(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => e(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: We([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary
  } };
};
export {
  ge as $,
  an as A,
  Zr as B,
  tn as C,
  Qt as D,
  Rs as E,
  Ks as F,
  sn as G,
  en as H,
  ms as I,
  Ra as J,
  Or as K,
  Lr as L,
  js as M,
  te as N,
  fr as O,
  $ as P,
  ee as Q,
  zt as R,
  ie as S,
  re as T,
  se as U,
  Wr as V,
  Y as W,
  me as X,
  Ea as Y,
  ne as Z,
  ce as _,
  Le as a,
  oe as a0,
  Vt as a1,
  ts as a2,
  qs as a3,
  Kr as a4,
  _r as a5,
  Ls as a6,
  ke as a7,
  Se as a8,
  A as a9,
  Vr as aA,
  gs as aB,
  Ur as aC,
  Za as aD,
  Nr as aE,
  ct as aF,
  nn as aG,
  rn as aH,
  Oa as aI,
  La as aJ,
  qr as aK,
  qa as aL,
  is as aM,
  Ha as aN,
  Qr as aO,
  U as aP,
  Ba as aQ,
  Pa as aR,
  We as aS,
  Je as aa,
  Fa as ab,
  Us as ac,
  Ia as ad,
  Pe as ae,
  $r as af,
  jr as ag,
  Cr as ah,
  Ze as ai,
  ja as aj,
  P as ak,
  cs as al,
  _a as am,
  Qa as an,
  zr as ao,
  Hr as ap,
  Tr as aq,
  mn as ar,
  lt as as,
  cn as at,
  Ja as au,
  X as av,
  Ya as aw,
  on as ax,
  Wa as ay,
  Gr as az,
  Ar as b,
  Xr as c,
  tt as d,
  Yr as e,
  Ca as f,
  Rr as g,
  et as h,
  Os as i,
  qt as j,
  Lt as k,
  pe as l,
  B as m,
  je as n,
  le as o,
  ue as p,
  Gt as q,
  Jr as r,
  Dr as s,
  la as t,
  _s as u,
  Fr as v,
  Pr as w,
  Vs as x,
  zs as y,
  He as z
};
