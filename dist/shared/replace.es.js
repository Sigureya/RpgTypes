import { createCommandExtractorMapFromPipeline as dt, extractPluginCommandWithExtractor as pt, generatePluginAnnotationText as ut, createPluginParamDictionary as gt, filterPluginSchemaStringParams as yt, filterPluginSchemaByFn as ht, parseDeepRecord as ft } from "@sigureya/rmmz-plugin-schema";
import { as as F, v as V, E as G, w as H, b as pa, q as ua, N as ga, aS as K, P as q, Q, aP as R, aM as _, aO as sa, az as ya, ay as O, aR as ha } from "./makeAudio.es.js";
import { n as L } from "./normalText.es.js";
import { f as ra, v as vt, y as xt, A as Nt, n as fa, s as va, h as Tt, t as bt, O as kt, I as St, q as wt, g as Mt, E as B, D as It, z as xa, x as Et, F as $t } from "./terms.es.js";
import { l as U, a as Na, i as Ta, f as ba, c as ka, e as Sa, d as wa, j as Ma, b as Ia, h as Bt, g as Ct } from "./constants.es.js";
import { JSONPathJS as Dt } from "jsonpath-js";
import { a as At } from "./makeSystem.es.js";
import { a as Pt, r as na } from "./writeData.es.js";
const ma = (a, t, e, s, r, n) => {
  if (a.code === F) return Kt(a, t, e, r, n);
  const m = L(a.value);
  return {
    otherData: n,
    uuid: r(m),
    kind: s(a),
    baseText: m,
    filename: e,
    id: t,
    speaker: a.speaker ?? "",
    dataKey: Ft(a)
  };
}, Ft = (a) => `code:${a.code}`, Kt = (a, t, e, s, r) => {
  const n = L(a.value);
  return {
    otherData: [a.pluginName, ...r],
    uuid: s(n),
    kind: `${Rt(a)}`,
    baseText: n,
    filename: e,
    id: t,
    dataKey: `code:${a.code}-${a.argName}`
  };
}, Rt = (a) => `${a.commandName}.${a.argTitle}`, jt = (a, t, e, s) => t.flatMap(((r) => Jt(a, r, e, s))), Jt = (a, t, e, s) => t.commands.filter(Ea).map(((r) => ma(r, t.eventId, a, s, e, [t.name]))), _t = (a, t, e, s) => a.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => ma(m, r.eventId, t, e, s, [n])));
})), Ea = (a) => a.value.length > 0, Ot = (a) => ((t, e) => ({
  code: t.code,
  paramIndex: e,
  value: t.parameters[e]
}))(a, 1), Lt = (a) => a.parameters[0].map(((t, e) => ({ code: 102, paramIndex: e, value: t }))), zt = (a, t, e, s, r) => {
  const n = Array.from(qt(a, t, e, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter(Ut);
}, Ut = (a) => a !== null && a.key.length > 0, qt = (a, t, e, s) => {
  const r = Vt(a), n = s.map(Gt), m = Ht(t), o = Qt(e);
  return new Set([r, m, o, n].flat(4));
}, Vt = (a) => a.map(((t) => [t.name, t.nickname, t.profile])), Gt = (a) => ra(a, oa), Ht = (a) => vt(a, oa), Qt = (a) => xt(a, oa), oa = ({ list: a }) => a.filter(Wt).map(((t) => t.parameters[1])), Wt = (a) => a.code === V || a.code === G || a.code === H, C = (a, t) => ({
  id: a.id,
  name: a.name,
  note: Xt(a),
  main: t.map(((e) => ({ key: e, value: a[e], id: a.id })))
}), Xt = (a) => Nt(a.note, ((t, e) => ({
  key: t,
  value: e,
  id: a.id
}))), Yt = (a) => C(a, ["name", "nickname", "profile"]), Zt = (a) => C(a, ["name"]), ae = (a) => C(a, ["name"]), te = (a) => C(a, ["name", "description", "message1", "message2"]), ee = (a) => C(a, ["name", "description"]), se = (a) => C(a, ["name", "description"]), re = (a) => C(a, ["name", "description"]), ne = (a) => C(a, ["name", "message1", "message2", "message3", "message4"]), me = (a, t, e, s) => $(a, t, {
  message1: e.state.message1,
  message2: e.state.message2,
  message3: e.state.message3,
  message4: e.state.message4,
  name: e.name,
  note: e.note
}, s), $ = (a, t, e, s) => a.map(((r) => oe(r, t, e, s))), oe = (a, t, e, s) => ({ main: a.main.filter(((r) => r.value !== "")).map(((r) => {
  const n = L(r.value);
  return {
    kind: e[r.key],
    baseText: n,
    id: r.id,
    dataKey: r.key,
    filename: t,
    uuid: s(n)
  };
})), note: ie(a.note, t, e, s) }), ie = (a, t, e, s) => a.map(((r) => ({
  kind: `${e.note}:${r.key}`,
  baseText: r.value,
  filename: t,
  id: r.id,
  uuid: s(r.value),
  dataKey: "note",
  otherData: [r.key]
}))), ce = (a, t, e, s) => [{ filename: t, id: 0, baseText: a.gameTitle, uuid: s(a.gameTitle), kind: e.gameTitle, dataKey: "gameTitle" }, {
  filename: t,
  id: 0,
  baseText: a.currencyUnit,
  uuid: s(a.currencyUnit),
  kind: e.currencyUnit,
  dataKey: "currencyUnit"
}, ...Z(t, a.equipTypes, "equipTypes", e.equipTypes, s), ...Z(t, a.weaponTypes, "weaponTypes", e.weaponTypes, s), ...Z(t, a.armorTypes, "armorTypes", e.armorTypes, s)], Z = (a, t, e, s, r) => t.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = L(n);
  return { filename: a, id: m, baseText: o, uuid: r(o), kind: s, dataKey: e };
})), $a = (a, t) => {
  const e = T(a.actors, Yt), s = ue(a.armors), r = T(a.classes, ae), n = T(a.enemies, Zt), m = T(a.items, ee), o = T(a.mapInfos, ((u) => u)), i = T(a.skills, te), c = T(a.states, ne), l = T(a.weapons, se), d = ge(a.commonEvents, t), f = ye(a.troops, t), p = he(a.mapFiles, t), b = le(a.system), g = de([e, s, r, n, m, o, i, c, l, f, d]).concat(pe(a.mapFiles, a.system));
  return { value: { eventData: { commonEvents: d.data, troops: f.data.flat() }, mapFiles: p, system: b, mainData: {
    actors: e.data,
    armors: s.data,
    classes: r.data,
    enemies: n.data,
    items: m.data,
    skills: i.data,
    states: c.data,
    weapons: l.data
  } }, errors: g };
}, le = (a) => a.system === null ? { message: a.message, system: null } : { message: a.message, system: fa(a.system) }, T = (a, t) => ({
  error: a.error,
  fileName: a.fileName,
  success: a.success,
  data: a.success ? a.data.map(t) : []
}), de = (a) => a.filter(((t) => !t.success)).map(((t) => ({
  fileName: t.fileName,
  error: t.error
}))), pe = (a, t) => [...a.info.success === !1 ? [{ fileName: a.info.filename, error: a.info.message }] : [], ...a.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message }))), ...t.system === null ? [{
  fileName: U,
  error: t.message
}] : []], ue = (a) => T(a, re), ge = (a, t) => T(a, ((e) => t.extractCommonEventText(e))), ye = (a, t) => T(a, ((e) => t.extractBattleText(e))), he = (a, t) => {
  const e = a.validMaps.map(((s) => ({ editingName: s.editingName, filename: s.filename, map: t.extractMapTexts(s.map) })));
  return { info: a.info, invalidMaps: a.invalidMaps, validMaps: e };
}, fe = (a) => `${a.eventId.toString().padStart(3, "0")}:${a.name}`, ve = (a) => {
  const t = a.trim().toLowerCase();
  return t === "true" || t === "false";
}, xe = (a) => {
  const t = a.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, z = (a) => {
  const t = a.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
  return new Set(t);
}, Ba = (a, t) => {
  const e = Ne(a);
  return Array.from(e.entries()).map((([s, r]) => {
    const n = ke(r, t);
    return { key: s, kinds: be(n), values: r.map(Te) };
  }));
}, Ne = (a) => {
  const t = a.flatMap(((e) => e.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: e.source
  })))));
  return Map.groupBy(t, ((e) => e.key));
}, Te = (a) => ({
  value: a.value,
  id: a.id,
  soruce: a.soruce,
  name: a.name
}), be = (a) => [a.isBoolean ? "boolean" : null, a.isNumber ? "number" : null, a.isBgm ? "bgm" : null, a.isBgs ? "bgs" : null, a.isMe ? "me" : null, a.isSe ? "se" : null, a.isPicture ? "pictures" : null, a.isCharacter ? "characters" : null, a.isFaceset ? "faces" : null, a.isBattler ? "battlers" : null, a.isSvBattler ? "svBattlers" : null, a.isEnemy ? "enemies" : null, a.isTileset ? "tilesets" : null, a.isMovie ? "movies" : null, a.isScript ? "script" : null].filter(((t) => t !== null)), ke = (a, { audioFiles: t, imageFiles: e, otherFiles: s }) => a.reduce(((r, n) => ({
  isBoolean: r.isBoolean && ve(n.value),
  isNumber: r.isNumber && xe(n.value),
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
  isScript: r.isScript && va(n.value)
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
}), Se = (a) => ({
  source: a.filename,
  notes: [...a.map.noteItems.map(Me), ...a.map.events.map(we).flat()]
}), we = (a) => a.noteItems.map(((t) => ({ id: a.eventId, key: t.key, value: t.value, name: a.name }))), Me = (a) => ({
  id: 0,
  key: a.key,
  value: a.value,
  name: ""
}), Ie = (a, t) => ({ eventId: a.eventId, name: a.name, pageIndex: a.pageIndex, commands: a.commands, note: a.note, noteItems: a.noteItems.filter(t) }), M = (a, t) => a.map(((e) => {
  const s = e.note.filter(t);
  return { main: e.main, note: s, id: e.id, name: e.name };
})).filter(Ee), Ee = (a) => a.note.length > 0 || a.main.length > 0, Ca = (a, t) => {
  const e = Ce(a.value.mainData, t), s = De(a.value.mapFiles.validMaps, t);
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
}, wr = (a, t) => {
  const e = Fa(a, t), s = z(e);
  return Aa(a, s);
}, $e = (a, t) => {
  const e = Pa(a, t);
  return z(e);
}, Mr = (a, t) => {
  const e = $e(a, t);
  return Da(a, e);
}, Aa = (a, t) => a.map(((e) => {
  return { filename: e.filename, editingName: e.editingName, map: (s = e.map, r = (n) => t.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => Ie(n, r)))
  }) };
  var s, r;
})), Pa = (a, t) => {
  const e = Be(a);
  return Ba(e, t);
}, Be = (a) => [I(Na, a.actors), I(Ta, a.skills), I(ba, a.items), I(ka, a.weapons), I(Sa, a.armors), I(wa, a.classes), I(Ma, a.states), I(Ia, a.enemies)], I = (a, t) => ({
  source: a,
  notes: t.flatMap(((e) => e.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: e.name })))))
}), Fa = (a, t) => {
  const e = a.map(Se);
  return Ba(e, t);
}, Ce = (a, t) => {
  const e = Pa(a, t), s = z(e);
  return {
    noteSummary: e,
    nonTextNoteKeys: s,
    mainData: Da(a, s)
  };
}, De = (a, t) => {
  const e = Fa(a, t), s = z(e);
  return { noteSummary: e, validMaps: Aa(a, s) };
}, Ae = (a, t) => a.params.filter(Pe).map(((e) => Ke(a.pluginName, e, t))).filter(((e) => e !== void 0)), Ka = (a) => a.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(a) && !(!/["`']/.test(a) && va(a)), Pe = (a) => typeof a.value == "string" && a.value.length !== 0 && !!Fe(a) && !!Ka(a.value), Fe = (a) => a.param.attr.kind === "string" || a.param.attr.kind === "string[]" || a.param.attr.kind === "multiline_string" || a.param.attr.kind === "multiline_string[]" || a.param.attr.kind === "combo" || a.param.attr.kind === "any", Ke = (a, t, e) => {
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
}, Re = (a, t) => ({
  code: 357,
  pluginName: a.pluginName,
  commandName: a.commandName,
  argName: t.param.name,
  value: typeof t.value == "string" ? t.value : "",
  argTitle: t.param.attr.text || t.param.name,
  paramIndex: 3
}), Ir = (a) => {
  const t = dt(a);
  return { extractArgs(e, s) {
    const r = pt(e, t, s);
    return r.args.map(((n) => Re(r, n)));
  } };
}, je = (a, t, e, s, r, n, m) => {
  const o = $a(a.data, m), i = Ca(o, a);
  return _e(a.data.actors.data, t, i, e, s, r, n);
}, Er = je, Je = (a) => [...a.dataNoteSummary, ...a.mapNoteSummary], _e = (a, t, e, s, r, n, m) => {
  const { eventData: o, mainData: i, mapFiles: c, system: l } = e.data.value;
  return {
    noteSummaries: Je(e),
    pluginParams: t.flatMap(((d) => Ae(d, n))),
    map: Oe(c, n, m),
    commonEvents: jt(Bt, o.commonEvents, n, m),
    troops: _t(o.troops, Ct, m, n),
    armors: $(i.armors, Sa, r, n),
    system: ze(l, n, s),
    actors: {
      texts: $(i.actors, Na, r, n),
      controlChars: Tt(a)
    },
    classes: $(i.classes, wa, r, n),
    enemies: $(i.enemies, Ia, r, n),
    items: $(i.items, ba, r, n),
    skills: $(i.skills, Ta, r, n),
    states: me(i.states, Ma, r, n),
    weapons: $(i.weapons, ka, r, n)
  };
}, Oe = (a, t, e) => a.validMaps.map(((s) => Le(s, t, e))).flat(3), Le = (a, t, e) => a.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = fe(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(Ea).map(((l) => ma(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, a, t, e))), ze = (a, t, e) => a.system ? {
  gameTitle: a.system.gameTitle,
  filename: U,
  texts: ce(a.system, U, e, t)
} : { gameTitle: "", filename: U, texts: [] }, Ue = (a, t, e, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return { textDictionary: qe(r, n), actorTexts: zt(a, t, e, s, m) };
}, qe = (a, t) => Array.from(a.entries()).map((([e, s]) => ({ key: t(e), value: s }))), Ve = (a) => {
  const t = z(a);
  return Array.from(t);
}, J = "HonyakuEx", Ge = (a, t = {
  description: "書き換え用辞書データ",
  outputDirectory: "translation",
  dictionaryName: "TranslationDictionary",
  pluginSnapshotName: "pluginSnapshot"
}) => ({
  dir: "js/plugins",
  subDir: t.outputDirectory,
  filename: `${t.dictionaryName}.js`,
  text: He(a)
}), He = (a) => [Ra("辞書データプラグイン。JSONの代わりです。"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a, null, 2)};`, "PluginManager.callCommand(null,", `"${J}",`, '"Setup",', "data", ");", "})();"].join(`
`), $r = (a) => [Ra("プラグインコマンド書き換えプラグイン"), "(function(){", '"use strict";', "const data = ", `${JSON.stringify(a)};`, "PluginManager.callCommand(null,", `"${J}",`, '"ReadPlugins",', "data", ");", "})()"].join(`
`), Br = (a) => [{
  name: `${a.outputDirectory}/${J}`,
  description: a.description,
  status: !0,
  parameters: {}
}, {
  name: `${a.outputDirectory}/${a.dictionaryName}`,
  description: a.description,
  status: !0,
  parameters: {}
}, { name: `${a.outputDirectory}/${a.pluginSnapshotName}`, description: a.description, status: !0, parameters: {} }], Ra = (a) => ut({ pluginName: "", locale: "", target: "MZ", dependencies: {
  base: [J],
  orderAfter: [J],
  orderBefore: []
}, schema: { commands: [], params: [], structs: [] }, meta: { plugindesc: a } }, {
  structArray: (t) => JSON.stringify(t),
  struct: (t) => JSON.stringify(t),
  numberArray: (t) => JSON.stringify(t),
  stringArray: (t) => JSON.stringify(t)
}), Cr = (a, t) => {
  const e = t.actorTextDictionary.get(a);
  if (e)
    return t.textDictionary.get(e);
}, Dr = (a) => ({
  targetNoteKeys: new Set(a.targetNoteKeys),
  textDictionary: new Map(a.textDictionary.map((({ key: t, value: e }) => [t, e]))),
  actorTextDictionary: new Map(a.actorTexts.map((({ key: t, value: e }) => [t, e]))),
  systemTexts: a.systemTexts
}), Qe = (a) => [{ data: a, filename: Pt }], Ar = (a) => {
  const t = We(a);
  return Xe(t);
}, We = (a) => a.reduce(((t, e) => {
  const s = Ye(e);
  return s.key.length === 0 || s.value.length === 0 || (t.validEntries.push({ source: e, normalized: s }), t.rawKeys.add(e.key)), t;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), Xe = (a) => a.validEntries.reduce(((t, e) => (/\s$/.test(e.source.key) && a.rawKeys.has(e.normalized.key) ? t.errorItems.push(e.source) : t.items.push(e.normalized), t)), {
  errorItems: [],
  items: []
}), Ye = (a) => ({ key: a.key.trimEnd(), value: a.value.trimEnd() }), Pr = (a) => {
  const t = /* @__PURE__ */ new Map();
  return a.forEach(((e, s) => {
    t.has(e.baseText) || t.set(e.baseText, s);
  })), t;
}, Fr = (a) => {
  const t = [E(a.actors.texts), E(a.skills), E(a.items), E(a.weapons), E(a.armors), E(a.classes), E(a.states), E(a.enemies)];
  return [...a.system.texts, ...t.flat(3), ...a.commonEvents, ...a.map, ...a.troops, ...a.pluginParams];
}, E = (a) => a.map(((t) => [t.main, t.note])), ja = (a, t, e) => a.filter(((s) => s.code === pa || s.code === ua || s.code === ga)).map(((s) => as(s, t, e))), Ze = { [ga]: "weapon", [pa]: "armor", [ua]: "item" }, as = (a, t, e) => {
  const s = bt(a) ? { direct: !1, variableId: a.parameters[3] } : {
    direct: !0,
    value: a.parameters[3]
  }, r = a.parameters[1] === kt ? t.gain : a.parameters[1] === St ? t.lose : t.unknown, n = typeof a.parameters[4] == "boolean" ? { includesEquip: a.parameters[4] } : {};
  return {
    itemKind: Ze[a.code],
    dataId: wt(a),
    code: a.code,
    commandNameMZ: e(a.code),
    operation: r,
    ...n,
    ...s
  };
}, Kr = (a, t, e) => ra(a.map, ((s, r, n) => ({
  ...ts(s),
  commands: ja(s.list, t, e),
  eventName: n.name,
  pageIndex: r
}))), ts = (a) => a.conditions.itemId > 0 && a.conditions.itemValid ? { pageCondition: { itemId: a.conditions.itemId } } : {}, Rr = (a, t, e) => Mt(a, ((s, r, n) => ({
  commands: ja(s.list, t, e),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), es = (a, t) => {
  const e = a.trimEnd(), s = t.get(e);
  return s ? s.trimEnd() : e;
}, h = (a, t) => {
  const e = a.trimEnd(), s = t(e);
  return s ? s.trimEnd() : e;
}, v = (a, t) => {
  const e = a.trimEnd(), s = t.replaceText(e);
  return s ? s.trimEnd() : e;
}, Ja = (a, t) => {
  const e = (o) => t.replaceText(o), s = B(a.note, t), r = h(a.name, e), n = h(a.nickname, e), m = h(a.profile, e);
  return {
    ...a,
    name: r,
    nickname: n,
    profile: m,
    note: s
  };
}, _a = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t);
  return { ...a, name: s, note: e };
}, Oa = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t);
  return {
    ...a,
    name: s,
    note: e
  };
}, La = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t), r = v(a.description, t), n = v(a.message1, t), m = v(a.message2, t);
  return { ...a, name: s, description: r, message1: n, message2: m, note: e };
}, P = (a, t) => {
  const e = B(a.note, t), s = v(a.name, t), r = v(a.description, t);
  return { ...a, name: s, description: r, note: e };
}, za = (a, t) => {
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
}, ss = (a, t) => {
  switch (a.code) {
    case sa:
      return ns(a, t);
    case _:
      return os(a, t);
    case R:
    case Q:
    case q:
    case K:
      return rs(a, t);
    case V:
    case H:
    case G:
      return ms(a, t);
    default:
      return a;
  }
}, rs = (a, t) => {
  const e = h(a.parameters[0], t);
  return { code: a.code, indent: a.indent, parameters: [e] };
}, ns = (a, t) => {
  const e = a.parameters[4] ? h(a.parameters[4], t) : "";
  return At({
    facename: a.parameters[0],
    faceIndex: a.parameters[1],
    background: a.parameters[2],
    positionType: a.parameters[3],
    speakerName: e
  }, a.indent);
}, ms = (a, t) => {
  const e = h(a.parameters[1], t);
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], e] };
}, os = (a, t) => {
  const e = a.parameters[0].map(((s) => h(s, t)));
  return {
    code: _,
    indent: a.indent,
    parameters: [e, a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
  };
}, jr = (a, t, e = `
`) => is(a, ((s) => t.get(s)), e), is = (a, t, e = `
`) => It(a.note, ((s) => h(s.value, t)), e), Jr = (a, t) => Ua(a, ((e) => es(e, t))), Ua = (a, t) => ({
  params: ds(a.params, ((e) => h(e, t))),
  messages: ps(a.messages, ((e) => h(e, t))),
  basic: cs(a.basic, ((e) => h(e, t))),
  commands: ls(a.commands, ((e) => h(e, t)))
}), cs = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], ls = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9]), t(a[10]), t(a[11]), t(a[12]), t(a[13]), t(a[14]), t(a[15]), t(a[16]), t(a[17]), t(a[18]), t(a[19]), "", t(a[21]), t(a[22]), "", t(a[24]), t(a[25])], ds = (a, t) => [t(a[0]), t(a[1]), t(a[2]), t(a[3]), t(a[4]), t(a[5]), t(a[6]), t(a[7]), t(a[8]), t(a[9])], ps = (a, t) => ({
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
}), us = (a, t) => ({
  ...a,
  gameTitle: h(a.gameTitle, t),
  currencyUnit: h(a.currencyUnit, t),
  elements: j(a.elements, t),
  skillTypes: j(a.skillTypes, t),
  weaponTypes: j(a.weaponTypes, t),
  armorTypes: j(a.armorTypes, t),
  equipTypes: j(a.equipTypes, t),
  terms: Ua(a.terms, t)
}), j = (a, t) => a.map(((e) => h(e, t))), qa = (a) => a.map(((t) => t.parameters[0].trimEnd())).join(`
`).trimEnd();
class Va {
  constructor(t, e) {
    this.header = t, this.bodies = e;
  }
  getBodyText() {
    return qa(this.joinCommandBodies());
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
    return qa(this.bodies);
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
}, gs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === Q), ((m) => m.code === q)))(a, t);
  return ys(s) ? new ia(q, s, e) : new Va(s, e);
}, ys = (a) => a.parameters[0] === "選択肢ヘルプ", hs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === sa), ((m) => m.code === R)))(a, t);
  return new ia(R, s, e);
}, fs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === O), ((m) => m.code === ya)))(a, t);
  return new Va(s, e);
}, vs = (a, t) => {
  const { bodies: e, header: s } = ((r, n) => W(r, n, ((m) => m.code === ha), ((m) => m.code === K)))(a, t);
  return new ia(K, s, e);
}, xs = {
  [sa]: (a, t, e) => e.showMessage(hs(a, t), t, a),
  [O]: (a, t, e) => e.script(fs(a, t), t, a),
  [Q]: (a, t, e) => e.comment(gs(a, t), t, a),
  [ha]: (a, t, e) => e.showScrollingText(vs(a, t), t, a)
}, Ga = (a) => xs[a], Ns = (a, t, e, s) => {
  if (a.code === R || a.code === K || a.code === q) return;
  const r = Ga(a.code);
  return r ? r(e, t, s) : a.code === _ ? Ts(a) : a.code === V || a.code === H || a.code === G ? bs(a) : a.code !== ya ? a : void 0;
}, Ts = (a) => ({
  code: _,
  indent: a.indent,
  parameters: [a.parameters[0].map(((t) => t.trimEnd())), a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), bs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [a.parameters[0], a.parameters[1].trimEnd()]
}), ks = (a) => ({ code: O, indent: a.header.indent, parameters: [a.getBodyText().trimEnd()] }), Ss = (a) => {
  const t = a.getBodyText().trimEnd(), e = {
    code: R,
    indent: a.header.indent,
    parameters: [t]
  };
  return [Ms(a.header), e];
}, ws = (a) => {
  const t = a.getBodyText().trimEnd(), e = { code: K, indent: a.header.indent, parameters: [t] };
  return [a.header, e];
}, Ms = (a) => {
  const t = a.parameters[4] ? a.parameters[4].trimEnd() : "";
  return { code: a.code, indent: a.indent, parameters: [a.parameters[0], a.parameters[1], a.parameters[2], a.parameters[3], t] };
}, X = (a, t) => {
  const e = (s) => t.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ks, showMessage: Ss, showScrollingText: ws };
    return s.map(((n, m) => n.code === F ? n : Ns(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(a).map(((s) => s.code === F ? t.pluginCommand(s) : s.code === O ? t.scriptCommand(s) : ss(s, e)));
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
}), _r = (a, t) => ({
  id: a.id,
  name: a.name,
  trigger: a.trigger,
  switchId: a.switchId,
  list: X(a.list, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t })
}), Or = (a, t) => Xa(a, { pluginCommand: (e) => e, scriptCommand: (e) => e, replaceText: t, isReplaceTargetNote: () => !1 }), Wa = (a, t) => Xa(a, t), Xa = (a, t) => ({
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
}, Za = (a, t) => ({ ...a, pages: a.pages.map(((e) => Ya(e, t))) }), Lr = (a, t) => ({
  ...a,
  events: a.events.map(((e) => e ? Za(e, t) : null))
}), zr = (a, t) => a.map(((e) => Ya(e, t))), Ur = (a, t) => a.map(((e) => Za(e, t))), qr = (a) => at(a, (() => [])), Y = (a, t) => at(a, t), at = (a, t) => a.flatMap(((e, s) => Is(e, s, a, t))).filter(((e) => e !== null)), Is = (a, t, e, s) => {
  if (a.code === F) return s(a);
  if (a.code === _) return Lt(a);
  const r = Ga(a.code);
  if (r) {
    const n = r(e, t, Es);
    if (n !== void 0) return [n];
  }
  return a.code === H || a.code === V || a.code === G ? Ot(a) : null;
}, Es = {
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
}, $s = (a) => a.list.filter(ca), Bs = (a) => a.pages.flatMap(((t) => t.list.filter(ca))), ca = (a) => a.code === F, Cs = (a, t = () => []) => ({
  eventId: a.id,
  name: a.name,
  commands: Y(a.list, t)
}), Ds = (a, t = () => []) => a.pages.map(((e, s) => ({ eventId: a.id, pageIndex: s, commands: Y(e.list, t) }))), As = (a, t = () => []) => ({
  note: a.note,
  noteItems: xa(a.note),
  displayedName: a.displayName,
  events: Ps(a, t)
}), Ps = (a, t) => ra(a, ((e, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: Y(e.list, t),
  note: r.note,
  noteItems: xa(r.note),
  name: r.name
}))), la = (a, t) => `${a}:${t}`, Fs = (a) => la(a.parameters[0], a.parameters[1]), Ks = (a) => [...a.commonEvents.data.flatMap($s), ...a.troops.data.flatMap(Bs), ...a.mapFiles.validMaps.flatMap(((t) => ((e) => Et(e, ((s) => s.list.filter(ca))))(t.map).flat(2)))], Rs = (a) => {
  const t = /* @__PURE__ */ new Map();
  for (const e of a) {
    const s = Fs(e), r = t.get(s);
    r ? r.push(e) : t.set(s, [e]);
  }
  return t;
}, A = (a, t) => Ka(a.default), js = (a, t, e = A) => {
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
}, Js = (a, t = A) => {
  const e = yt(a);
  return ht(e, ((s, r) => js(s, r, t)));
}, _s = (a, t, e = A) => {
  const s = Js(t, e);
  return gt(a, s);
}, Os = (a, t = A) => a.map(((e) => _s(e.pluginName, e.schema, t))), tt = (a, t = A) => Os(a, t), Vr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a);
  return s.flatMap(((n) => n.commands.map(((m) => {
    const o = la(n.pluginName, m.commandName);
    return { key: o, pluginName: n.pluginName, commandName: m.commandName, argsPath: m.argsPath, commands: r.get(o) ?? [] };
  })))).filter(((n) => n.commands.length > 0));
}, et = (a) => {
  const t = Ks(a);
  return Rs(t);
}, Gr = (a, t, e = A) => {
  const s = tt(t, e), r = et(a), n = s.flatMap(((m) => m.commands.map(((o) => {
    const i = la(m.pluginName, o.commandName);
    return { key: i, pluginName: m.pluginName, commandName: o.commandName, argsPath: o.argsPath, commands: r.get(i) ?? [] };
  })))).filter(((m) => m.commands.length > 0));
  return { params: s, commandPaths: n, groupedCommands: r };
}, st = (a) => ((t) => t.kind.endsWith("[]"))(a.attr), rt = (a) => a.kind === "struct", nt = (a) => a.attr.kind === "struct[]", Ls = (a) => mt[a.kind.replace("[]", "")].type === "number", zs = (a) => mt[a.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, mt = {
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
function Us(a) {
  return qs(a, ((t) => !0), ((t) => !0));
}
const qs = (a, t, e) => {
  const s = [], r = [], n = [], m = [];
  return a.forEach(((o) => {
    if (rt(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (nt(o)) r.push(o);
    else if (st(o)) {
      if (e(o)) return void m.push(o);
    } else t(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Vs(a) {
  const t = a.map(((e) => [e.name, e.attr]));
  return Object.fromEntries(t);
}
const Gs = (a, t) => {
  if (a.length !== 0) return `${t}[${a.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Hs = (a, t) => a.map(((e) => ({ path: `${t}["${e.name}"][*]`, param: e }))), ot = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function it(a, t, e, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: a, basePath: t, ancestry: [] }] }, n = Math.max(1, 3 * e.size + 5), m = Array.from({
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
    const b = (function(g, u) {
      const y = g.ancestry.concat(g.schemaName), S = g.basePath;
      return [...u.structs.map(((w) => ({
        schemaName: w.attr.struct,
        basePath: `${S}["${w.name}"]`,
        ancestry: y
      }))), ...u.structArrays.map(((w) => ({ schemaName: w.attr.struct, basePath: `${S}["${w.name}"][*]`, ancestry: y })))].reverse();
    })(d, p);
    if (p.scalars.length > 0 || p.scalarArrays.length > 0) {
      const g = (function(u, { path: y, structName: S }) {
        return {
          category: "struct",
          objectSchema: Vs(u.scalars),
          name: S,
          scalarArrays: Hs(u.scalarArrays, y),
          scalarsPath: u.scalars.length > 0 ? Gs(u.scalars, y) : void 0
        };
      })(p, { path: d.basePath, structName: d.schemaName });
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
const Qs = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"]`, e, s), Ws = (a, t, e, s = ot) => it(a.attr.struct, `${t}["${a.name}"][*]`, e, s), Xs = (a, t, e, s) => ((r) => rt(r.attr))(e) ? ar(a, e, s) : nt(e) ? tr(a, e, s) : st(e) ? Ys(a, t, e) : Zs(a, t, e), Ys = (a, t, e) => ({
  rootCategory: a,
  rootName: t,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${e.name}"][*]`, param: e }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Zs = (a, t, e) => ({ rootCategory: a, rootName: t, scalars: { name: e.attr.kind, objectSchema: { [e.name]: e.attr }, scalarsPath: `$["${e.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), ar = (a, t, e) => ({
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: Qs(t, "$", e)
}), tr = (a, t, e) => ({
  structArrays: Ws(t, "$", e),
  rootName: t.name,
  rootCategory: a,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), er = (a, t) => t.map(((e) => sr(a, e))).flat(3), sr = (a, t) => [t.top ? aa(t, a, t.top, "") : [], t.structs.map(((e) => aa(t, a, e))), t.structArrays.map(((e) => aa(t, a, e)))], aa = (a, t, e, s = e.bundleName) => {
  const r = e.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: d, segments: f }) => ((p, b, g, u, y) => {
    if (typeof g == "object" || g === null) return null;
    const S = u[u.length - 1];
    if (typeof S == "number") return null;
    const w = y[S];
    return w ? { rootName: p.rootName, rootType: p.rootCategory, structName: b, value: g, param: { name: S, attr: w } } : null;
  })(m, o, d, f, l))).filter(((d) => d !== null)))(a, s, t, e.scalar.jsonPathJS, e.scalar.record) : [], n = e.arrays.map(((m) => ((o, i, c, l) => {
    const d = l.jsonPathJS.find(c);
    if (!Array.isArray(d)) return [];
    const f = l.schema.attr;
    return zs(f) ? ((p, b, g, u) => b.filter(((y) => typeof y == "string")).map(((y) => ({
      rootName: p.rootName,
      rootType: p.rootCategory,
      value: y,
      structName: g,
      param: u
    }))))(o, d, i, l.schema) : Ls(f) ? ((p, b, g, u) => b.filter(((y) => typeof y == "number")).map(((y) => ({ rootName: p.rootName, rootType: p.rootCategory, value: y, structName: g, param: u }))))(o, d, i, l.schema) : [];
  })(a, s, t, m)));
  return [r, n].flat(2);
}, rr = (a, t) => {
  const e = [], s = a.scalars ? ta(a.scalars, "scalar", t, e) : void 0, r = a.structs.items.map(((m) => ta(m, "struct", t, e))), n = a.structArrays.items.map(((m) => ta(m, "structArray", t, e)));
  return { extractor: {
    rootCategory: a.rootCategory,
    rootName: a.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: e };
}, ta = (a, t, e, s) => {
  const r = nr(a.scalarArrays, a.name, t, e, s);
  return a.scalarsPath ? {
    bundleName: a.name,
    arrays: r,
    scalar: mr(a.scalarsPath, a.objectSchema, t, e, s)
  } : { bundleName: a.name, arrays: r };
}, nr = (a, t, e, s, r) => a.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: t
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: e, error: m, handledInfo: s.errorAtPath(n.path, e, m) }), [];
  }
})), mr = (a, t, e, s, r) => {
  try {
    return { jsonPathJS: s.createReader(a), record: t };
  } catch (n) {
    return void r.push({ path: a, valType: e, error: n, handledInfo: s.errorAtPath(a, e, n) });
  }
}, or = (a, t, e, s) => ({
  pluginName: a,
  commandName: t.command,
  desc: t.desc ?? "",
  text: t.text ?? "",
  extractors: ir(t, e, s)
}), ir = (a, t, e) => a.args.map(((s) => ((r, n) => {
  const m = rr(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(Xs("args", a.command, s, t), e))), cr = (a, t) => {
  const e = ((s) => new Map(s.map(((r) => [r.struct, Us(r.params)]))))(a.schema.structs);
  return lr(a.pluginName, a.schema.commands, e, t);
}, lr = (a, t, e, s) => t.map(((r) => [dr(a, r.command), or(a, r, e, s)])), dr = (a, t) => `${a}:${t}`, pr = (a, t) => {
  const [e, s] = a.parameters, r = `${e}:${s}`, n = t.get(r);
  if (!n) return {
    pluginName: e,
    commandName: s,
    args: []
  };
  return o = ft(a.parameters[3]), { pluginName: (i = n).pluginName, commandName: i.commandName, args: er(o, i.extractors) };
  var o, i;
}, Hr = (a) => {
  const t = new Map(a);
  return new da(t);
}, Qr = () => new da(/* @__PURE__ */ new Map()), Wr = (a) => {
  const t = a.flatMap(((e) => cr(e, ((s) => new Dt(s)))));
  return new da(new Map(t));
};
class da {
  _commandMap;
  constructor(t) {
    this._commandMap = t;
  }
  pluginCommandKeys() {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(t) {
    return As(t, ((e) => this.extractArgs(e)));
  }
  extractBattleText(t) {
    return Ds(t, ((e) => this.extractArgs(e)));
  }
  extractCommonEventText(t) {
    return Cs(t, ((e) => this.extractArgs(e)));
  }
  extractArgs(t) {
    const e = pr(t, this._commandMap);
    return e.args.filter(ur).map(((s) => ({
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
const ur = (a) => typeof a.value == "string", Xr = (a) => ({ key: "battlerName", image: a.battlerName, id: a.id }), ea = (a, t, e) => ({
  folder: e,
  key: t,
  image: a[t],
  id: a.id
}), Yr = (a) => [ea(a, "faceName", "faces"), ea(a, "characterName", "characters"), ea(a, "battlerName", "sv_actors")], gr = (a, t, e) => ({
  tilesets: a.tilesets,
  animations: a.animations,
  actors: k(a.actors, ((s) => Ja(s, t))),
  armors: k(a.armors, ((s) => P(s, t))),
  classes: k(a.classes, ((s) => Oa(s, t))),
  commonEvents: k(a.commonEvents, ((s) => Qa(s, t))),
  enemies: k(a.enemies, ((s) => _a(s, t))),
  items: k(a.items, ((s) => P(s, t))),
  mapInfos: a.mapInfos,
  skills: k(a.skills, ((s) => La(s, t))),
  states: k(a.states, ((s) => za(s, t))),
  system: {
    message: a.system.message,
    system: us(a.system.system, e)
  },
  troops: k(a.troops, ((s) => Ha(s, t))),
  weapons: k(a.weapons, ((s) => P(s, t))),
  mapFiles: {
    info: a.mapFiles.info,
    invalidMaps: a.mapFiles.invalidMaps,
    validMaps: a.mapFiles.validMaps.map(((s) => ({ filename: s.filename, editingName: s.editingName, map: Wa(s.map, t) })))
  }
}), k = (a, t) => ({
  success: a.success,
  fileName: a.fileName,
  error: a.error,
  data: a.success ? a.data.map(t) : []
}), ct = (a, t, e, s, r) => {
  const n = $a(a, e), m = Ca(n, {
    audioFiles: t.audioFiles,
    imageFiles: t.imageFiles,
    otherFiles: t.otherFiles
  }), o = yr(m.nonTextNoteKeys, s);
  return { data: gr(a, o, r), note: m };
}, yr = (a, t) => ({
  pluginCommand: (e) => t.pluginCommand(e),
  scriptCommand: (e) => t.scriptCommand(e),
  replaceText: (e) => t.replaceText(e),
  isReplaceTargetNote: (e) => !!a.has(e.key) && t.isReplaceTargetNote(e)
}), Zr = (a, t) => Wa(a, {
  replaceText: (e) => t.textDictionary.get(e),
  pluginCommand: (e) => e,
  scriptCommand: (e) => e,
  isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), an = (a, t) => {
  const e = {
    replaceText: (s) => t.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => t.targetNoteKeys.has(s.key)
  };
  return {
    system: $t(a.system, t.systemTexts),
    actors: a.actors.map(((s) => Ja(s, e))),
    armors: a.armors.map(((s) => P(s, e))),
    classes: a.classes.map(((s) => Oa(s, e))),
    enemies: a.enemies.map(((s) => _a(s, e))),
    items: a.items.map(((s) => P(s, e))),
    skills: a.skills.map(((s) => La(s, e))),
    states: a.states.map(((s) => za(s, e))),
    troops: a.troops.map(((s) => Ha(s, e))),
    weapons: a.weapons.map(((s) => P(s, e))),
    commonEvents: a.commonEvents.map(((s) => Qa(s, e)))
  };
}, tn = (a, t) => {
  const e = hr(a, t);
  return na(e);
}, hr = (a, t) => {
  const e = {
    replaceText: (s) => a.dictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => a.textKeys.has(s.key)
  };
  return ct(a.data, a.assetBundle, t, e, ((s) => a.dictionary.get(s))).data;
}, en = (a, t, e) => {
  const s = lt(a, t, e);
  return { dataJSON: na(s.main), scriptJS: [Ge(s.aux)] };
}, sn = (a, t, e) => {
  const s = lt(a, t, e);
  return [...na(s.main), ...Qe(s.aux)];
}, lt = (a, t, e) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = a, o = ct(s, r, t, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : e(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }, ((c) => c.trimEnd())), i = Ue(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => e(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: Ve([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary,
    systemTexts: fa(s.system.system)
  } };
};
export {
  ne as $,
  Ue as A,
  Qr as B,
  Hr as C,
  Wr as D,
  qt as E,
  Ds as F,
  Cs as G,
  Yr as H,
  Xr as I,
  as as J,
  ja as K,
  Kr as L,
  Rr as M,
  As as N,
  Xt as O,
  pr as P,
  C as Q,
  Yt as R,
  Ot as S,
  re as T,
  ae as U,
  Zt as V,
  qr as W,
  Y as X,
  ee as Y,
  $a as Z,
  te as _,
  Er as a,
  se as a0,
  Lt as a1,
  Qe as a2,
  Js as a3,
  Cr as a4,
  Fr as a5,
  Rs as a6,
  ve as a7,
  xe as a8,
  A as a9,
  Or as aA,
  is as aB,
  jr as aC,
  Za as aD,
  gr as aE,
  ct as aF,
  an as aG,
  Zr as aH,
  La as aI,
  za as aJ,
  Jr as aK,
  us as aL,
  es as aM,
  Ha as aN,
  Ur as aO,
  z as aP,
  Ba as aQ,
  Fa as aR,
  Ve as aS,
  Pe as aa,
  Ka as ab,
  js as ac,
  Ea as ad,
  $e as ae,
  Mr as af,
  Ar as ag,
  wr as ah,
  Ge as ai,
  Ja as aj,
  P as ak,
  ss as al,
  Oa as am,
  Qa as an,
  _r as ao,
  zr as ap,
  hr as aq,
  tn as ar,
  lt as as,
  sn as at,
  _a as au,
  X as av,
  Ya as aw,
  en as ax,
  Wa as ay,
  Lr as az,
  je as b,
  Re as c,
  Vr as d,
  tt as e,
  Gr as f,
  Ca as g,
  Dr as h,
  et as i,
  Ks as j,
  _t as k,
  jt as l,
  oe as m,
  $ as n,
  Ae as o,
  me as p,
  ce as q,
  zt as r,
  Pr as s,
  Ir as t,
  la as u,
  Fs as v,
  Br as w,
  $r as x,
  Os as y,
  _s as z
};
