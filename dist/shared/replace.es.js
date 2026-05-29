import { as as R, v as z, E as V, w as J, b as oe, q as ie, N as ce, aS as F, P as _, Q as G, aP as P, aM as j, aO as ae, az as le, ay as U, aR as pe } from "./makeAudio.es.js";
import { n as O } from "./normalText.es.js";
import { e as te, t as aa, w as ta, y as sa, q as ra, g as na, r as ma, O as oa, F as ia, o as ca, f as la, C, B as pa, x as de } from "./isScript.es.js";
import { l as L, a as ue, i as ye, f as ge, c as he, e as fe, d as ve, j as xe, b as Ne, h as da, g as ua } from "./constants.es.js";
import { createCommandExtractorMapFromPipeline as ya, extractPluginCommandWithExtractor as ga, parseDeepRecord as ha } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as fa } from "jsonpath-js";
import { k as va, v as xa, u as Na, r as Ta, a as ba } from "./makeSystem.es.js";
import { a as ka, r as Te } from "./writeData.es.js";
const se = (e, a, t, s, r, n) => {
  if (e.code === R) return Ia(e, a, t, r, n);
  const m = O(e.value);
  return { otherData: n, uuid: r(m), kind: s(e), baseText: m, filename: t, id: a, speaker: e.speaker ?? "", dataKey: wa(e) };
}, wa = (e) => `code:${e.code}`, Ia = (e, a, t, s, r) => {
  const n = O(e.value);
  return {
    otherData: [e.pluginName, ...r],
    uuid: s(n),
    kind: `${Sa(e)}`,
    baseText: n,
    filename: t,
    id: a,
    dataKey: `code:${e.code}-${e.argName}`
  };
}, Sa = (e) => `${e.commandName}.${e.argTitle}`, Ma = (e, a, t, s) => a.flatMap(((r) => Ea(e, r, t, s))), Ea = (e, a, t, s) => a.commands.filter(be).map(((r) => se(r, a.eventId, e, s, t, [a.name]))), Ba = (e, a, t, s) => e.filter(((r) => r.commands.length > 0)).flatMap(((r) => {
  const n = `page:${r.pageIndex + 1}`;
  return r.commands.map(((m) => se(m, r.eventId, a, t, s, [n])));
})), be = (e) => e.value.length > 0, Ca = (e) => ((a, t) => ({
  code: a.code,
  paramIndex: t,
  value: a.parameters[t]
}))(e, 1), Aa = (e) => e.parameters[0].map(((a, t) => ({ code: 102, paramIndex: t, value: a }))), Da = (e, a, t, s, r) => {
  const n = Array.from(Fa(e, a, t, s)).map(((o) => {
    const i = o.trimEnd();
    return i.length === 0 ? null : { key: i, value: r.hashText(i) };
  })), m = n.map(((o) => o === null ? null : { key: r.newText(o.key).trimEnd(), value: o.value }));
  return [...n, ...m].filter($a);
}, $a = (e) => e !== null && e.key.length > 0, Fa = (e, a, t, s) => {
  const r = Pa(e), n = s.map(Ka), m = Ra(a), o = ja(t);
  return new Set([r, m, o, n].flat(4));
}, Pa = (e) => e.map(((a) => [a.name, a.nickname, a.profile])), Ka = (e) => te(e, re), Ra = (e) => aa(e, re), ja = (e) => ta(e, re), re = ({ list: e }) => e.filter(Ua).map(((a) => a.parameters[1])), Ua = (e) => e.code === z || e.code === V || e.code === J, A = (e, a) => ({
  id: e.id,
  name: e.name,
  note: qa(e),
  main: a.map(((t) => ({ key: t, value: e[t], id: e.id })))
}), qa = (e) => sa(e.note, ((a, t) => ({
  key: a,
  value: t,
  id: e.id
}))), La = (e) => A(e, ["name", "nickname", "profile"]), _a = (e) => A(e, ["name"]), za = (e) => A(e, ["name"]), Va = (e) => A(e, ["name", "description", "message1", "message2"]), Ja = (e) => A(e, ["name", "description"]), Ga = (e) => A(e, ["name", "description"]), Oa = (e) => A(e, ["name", "description"]), Ha = (e) => A(e, ["name", "message1", "message2", "message3", "message4"]), Wa = (e, a, t, s) => B(e, a, {
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
}, ...Y(a, e.equipTypes, "equipTypes", t.equipTypes, s), ...Y(a, e.weaponTypes, "weaponTypes", t.weaponTypes, s), ...Y(a, e.armorTypes, "armorTypes", t.armorTypes, s)], Y = (e, a, t, s, r) => a.filter(((n) => n.length > 0)).map(((n, m) => {
  const o = O(n);
  return { filename: e, id: m, baseText: o, uuid: r(o), kind: s, dataKey: t };
})), Za = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  elements: [...e.elements],
  skillTypes: [...e.skillTypes],
  terms: {
    basic: Ta(e.terms.basic),
    commands: Na(e.terms.commands),
    messages: xa(e.terms.messages),
    params: va(e.terms.params)
  }
}), ke = (e, a) => {
  const t = T(e.actors, La), s = st(e.armors), r = T(e.classes, za), n = T(e.enemies, _a), m = T(e.items, Ja), o = T(e.mapInfos, ((u) => u)), i = T(e.skills, Va), c = T(e.states, Ha), l = T(e.weapons, Ga), p = rt(e.commonEvents, a), f = nt(e.troops, a), d = mt(e.mapFiles, a), b = et(e.system), y = at([t, s, r, n, m, o, i, c, l, f, p]).concat(tt(e.mapFiles, e.system));
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
}, et = (e) => ({ message: e.message, system: e.system ? Za(e.system) : null }), T = (e, a) => ({
  error: e.error,
  fileName: e.fileName,
  success: e.success,
  data: e.success ? e.data.map(a) : []
}), at = (e) => e.filter(((a) => !a.success)).map(((a) => ({ fileName: a.fileName, error: a.error }))), tt = (e, a) => [...e.info.success === !1 ? [{
  fileName: e.info.filename,
  error: e.info.message
}] : [], ...e.invalidMaps.map(((t) => ({ fileName: t.filename, error: t.message }))), ...a.system === null ? [{
  fileName: L,
  error: a.message
}] : []], st = (e) => T(e, Oa), rt = (e, a) => T(e, ((t) => a.extractCommonEventText(t))), nt = (e, a) => T(e, ((t) => a.extractBattleText(t))), mt = (e, a) => {
  const t = e.validMaps.map(((s) => ({
    editingName: s.editingName,
    filename: s.filename,
    map: a.extractMapTexts(s.map)
  })));
  return { info: e.info, invalidMaps: e.invalidMaps, validMaps: t };
}, ot = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, it = (e) => {
  const a = e.trim().toLowerCase();
  return a === "true" || a === "false";
}, ct = (e) => {
  const a = e.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(a);
}, q = (e) => {
  const a = e.filter(((t) => t.kinds.length === 0)).map(((t) => t.key));
  return new Set(a);
}, we = (e, a) => {
  const t = lt(e);
  return Array.from(t.entries()).map((([s, r]) => {
    const n = ut(r, a);
    return { key: s, kinds: dt(n), values: r.map(pt) };
  }));
}, lt = (e) => {
  const a = e.flatMap(((t) => t.notes.map(((s) => ({
    key: s.key,
    value: s.value,
    id: s.id,
    name: s.name,
    soruce: t.source
  })))));
  return Map.groupBy(a, ((t) => t.key));
}, pt = (e) => ({
  value: e.value,
  id: e.id,
  soruce: e.soruce,
  name: e.name
}), dt = (e) => [e.isBoolean ? "boolean" : null, e.isNumber ? "number" : null, e.isBgm ? "bgm" : null, e.isBgs ? "bgs" : null, e.isMe ? "me" : null, e.isSe ? "se" : null, e.isPicture ? "pictures" : null, e.isCharacter ? "characters" : null, e.isFaceset ? "faces" : null, e.isBattler ? "battlers" : null, e.isSvBattler ? "svBattlers" : null, e.isEnemy ? "enemies" : null, e.isTileset ? "tilesets" : null, e.isMovie ? "movies" : null, e.isScript ? "script" : null].filter(((a) => a !== null)), ut = (e, { audioFiles: a, imageFiles: t, otherFiles: s }) => e.reduce(((r, n) => ({
  isBoolean: r.isBoolean && it(n.value),
  isNumber: r.isNumber && ct(n.value),
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
}), yt = (e) => ({
  source: e.filename,
  notes: [...e.map.noteItems.map(ht), ...e.map.events.map(gt).flat()]
}), gt = (e) => e.noteItems.map(((a) => ({ id: e.eventId, key: a.key, value: a.value, name: e.name }))), ht = (e) => ({
  id: 0,
  key: e.key,
  value: e.value,
  name: ""
}), ft = (e, a) => ({ eventId: e.eventId, name: e.name, pageIndex: e.pageIndex, commands: e.commands, note: e.note, noteItems: e.noteItems.filter(a) }), S = (e, a) => e.map(((t) => {
  const s = t.note.filter(a);
  return { main: t.main, note: s, id: t.id, name: t.name };
})).filter(vt), vt = (e) => e.note.length > 0 || e.main.length > 0, Ie = (e, a) => {
  const t = Tt(e.value.mainData, a), s = bt(e.value.mapFiles.validMaps, a);
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
}, er = (e, a) => {
  const t = Be(e, a), s = q(t);
  return Me(e, s);
}, xt = (e, a) => {
  const t = Ee(e, a);
  return q(t);
}, ar = (e, a) => {
  const t = xt(e, a);
  return Se(e, t);
}, Me = (e, a) => e.map(((t) => {
  return { filename: t.filename, editingName: t.editingName, map: (s = t.map, r = (n) => a.has(n.key), {
    displayedName: s.displayedName,
    note: s.note,
    noteItems: s.noteItems.filter(r),
    events: s.events.map(((n) => ft(n, r)))
  }) };
  var s, r;
})), Ee = (e, a) => {
  const t = Nt(e);
  return we(t, a);
}, Nt = (e) => [M(ue, e.actors), M(ye, e.skills), M(ge, e.items), M(he, e.weapons), M(fe, e.armors), M(ve, e.classes), M(xe, e.states), M(Ne, e.enemies)], M = (e, a) => ({
  source: e,
  notes: a.flatMap(((t) => t.note.map(((s) => ({ key: s.key, value: s.value, id: s.id, name: t.name })))))
}), Be = (e, a) => {
  const t = e.map(yt);
  return we(t, a);
}, Tt = (e, a) => {
  const t = Ee(e, a), s = q(t);
  return {
    noteSummary: t,
    nonTextNoteKeys: s,
    mainData: Se(e, s)
  };
}, bt = (e, a) => {
  const t = Be(e, a), s = q(t);
  return { noteSummary: t, validMaps: Me(e, s) };
}, tr = (e, a, t, s, r, n) => {
  const m = ke(e.data, n), o = Ie(m, e);
  return wt(e.data.actors.data, o, a, t, s, r);
}, kt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], wt = (e, a, t, s, r, n) => {
  const { eventData: m, mainData: o, mapFiles: i, system: c } = a.data.value;
  return {
    noteSummaries: kt(a),
    pluginParams: [],
    map: It(i, r, n),
    commonEvents: Ma(da, m.commonEvents, r, n),
    troops: Ba(m.troops, ua, n, r),
    armors: B(o.armors, fe, s, r),
    system: Mt(c, r, t),
    actors: {
      texts: B(o.actors, ue, s, r),
      controlChars: na(e)
    },
    classes: B(o.classes, ve, s, r),
    enemies: B(o.enemies, Ne, s, r),
    items: B(o.items, ge, s, r),
    skills: B(o.skills, ye, s, r),
    states: Wa(o.states, xe, s, r),
    weapons: B(o.weapons, he, s, r)
  };
}, It = (e, a, t) => e.validMaps.map(((s) => St(s, a, t))).flat(3), St = (e, a, t) => e.map.events.map(((s) => ((r, n, m, o) => {
  const i = `page:${r.pageIndex + 1}`, c = ot(r);
  return [r.noteItems.map(((l) => ({
    id: r.eventId,
    filename: n.filename,
    baseText: l.value,
    kind: `note:${l.key}`,
    uuid: m(l.value),
    dataKey: "note",
    otherData: [n.editingName, c, l.key]
  }))), r.commands.filter(be).map(((l) => se(l, r.eventId, n.filename, o, m, [n.editingName, c, i])))];
})(s, e, a, t))), Mt = (e, a, t) => e.system === null ? { gameTitle: "", filename: L, texts: [] } : {
  gameTitle: e.system.gameTitle,
  filename: L,
  texts: Qa(e.system, L, t, a)
}, Et = (e, a, t, s, r, n) => {
  const m = { hashText: n, newText: (o) => r.get(o) ?? o };
  return {
    textDictionary: Bt(r, n),
    actorTexts: Da(e, a, t, s, m)
  };
}, Bt = (e, a) => Array.from(e.entries()).map((([t, s]) => ({ key: a(t), value: s }))), Ct = (e) => {
  const a = q(e);
  return Array.from(a);
}, sr = (e, a) => {
  const t = a.actorTextDictionary.get(e);
  if (t)
    return a.textDictionary.get(t);
}, rr = (e) => ({
  targetNoteKeys: new Set(e.targetNoteKeys),
  textDictionary: new Map(e.textDictionary.map((({ key: a, value: t }) => [a, t]))),
  actorTextDictionary: new Map(e.actorTexts.map((({ key: a, value: t }) => [a, t])))
}), At = (e) => [{
  data: e,
  filename: ka
}], nr = (e) => {
  const a = Dt(e);
  return $t(a);
}, Dt = (e) => e.reduce(((a, t) => {
  const s = Ft(t);
  return s.key.length === 0 || s.value.length === 0 || (a.validEntries.push({ source: t, normalized: s }), a.rawKeys.add(t.key)), a;
}), {
  validEntries: [],
  rawKeys: /* @__PURE__ */ new Set()
}), $t = (e) => e.validEntries.reduce(((a, t) => (/\s$/.test(t.source.key) && e.rawKeys.has(t.normalized.key) ? a.errorItems.push(t.source) : a.items.push(t.normalized), a)), {
  errorItems: [],
  items: []
}), Ft = (e) => ({ key: e.key.trimEnd(), value: e.value.trimEnd() }), mr = (e) => {
  const a = /* @__PURE__ */ new Map();
  return e.forEach(((t, s) => {
    a.has(t.baseText) || a.set(t.baseText, s);
  })), a;
}, or = (e) => {
  const a = [E(e.actors.texts), E(e.skills), E(e.items), E(e.weapons), E(e.armors), E(e.classes), E(e.states), E(e.enemies)];
  return [...e.system.texts, ...a.flat(3), ...e.commonEvents, ...e.map, ...e.troops, ...e.pluginParams.flat()];
}, E = (e) => e.map(((a) => [a.main, a.note])), Ce = (e, a, t) => e.filter(((s) => s.code === oe || s.code === ie || s.code === ce)).map(((s) => Kt(s, a, t))), Pt = { [ce]: "weapon", [oe]: "armor", [ie]: "item" }, Kt = (e, a, t) => {
  const s = ma(e) ? { direct: !1, variableId: e.parameters[3] } : {
    direct: !0,
    value: e.parameters[3]
  }, r = e.parameters[1] === oa ? a.gain : e.parameters[1] === ia ? a.lose : a.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: Pt[e.code],
    dataId: ca(e),
    code: e.code,
    commandNameMZ: t(e.code),
    operation: r,
    ...n,
    ...s
  };
}, ir = (e, a, t) => te(e.map, ((s, r, n) => ({
  ...Rt(s),
  commands: Ce(s.list, a, t),
  eventName: n.name,
  pageIndex: r
}))), Rt = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, cr = (e, a, t) => la(e, ((s, r, n) => ({
  commands: Ce(s.list, a, t),
  eventName: n.name,
  troopId: n.id,
  pageIndex: r
}))), lr = (e, a) => e.params.filter(((t) => typeof t.value == "string")).map(((t) => jt(e.pluginName, t, a))), jt = (e, a, t) => ({
  filename: e,
  id: 0,
  uuid: t(a.value),
  baseText: a.value,
  kind: a.param.attr.text || a.param.name,
  dataKey: a.param.name,
  otherData: [a.rootName, a.param.attr.desc || ""]
}), Ut = (e, a) => ({
  code: 357,
  pluginName: e.pluginName,
  commandName: e.commandName,
  argName: a.param.name,
  value: typeof a.value == "string" ? a.value : "",
  argTitle: a.param.attr.text || a.param.name,
  paramIndex: 3
}), pr = (e) => {
  const a = ya(e);
  return { extractArgs(t, s) {
    const r = ga(t, a, s);
    return r.args.map(((n) => Ut(r, n)));
  } };
}, qt = (e, a) => {
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
}, De = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a);
  return { ...e, name: s, note: t };
}, $e = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a);
  return {
    ...e,
    name: s,
    note: t
  };
}, Fe = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a), r = v(e.description, a), n = v(e.message1, a), m = v(e.message2, a);
  return { ...e, name: s, description: r, message1: n, message2: m, note: t };
}, $ = (e, a) => {
  const t = C(e.note, a), s = v(e.name, a), r = v(e.description, a);
  return { ...e, name: s, description: r, note: t };
}, Pe = (e, a) => {
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
}, Lt = (e, a) => {
  switch (e.code) {
    case ae:
      return zt(e, a);
    case j:
      return Jt(e, a);
    case P:
    case G:
    case _:
    case F:
      return _t(e, a);
    case z:
    case J:
    case V:
      return Vt(e, a);
    default:
      return e;
  }
}, _t = (e, a) => {
  const t = h(e.parameters[0], a);
  return { code: e.code, indent: e.indent, parameters: [t] };
}, zt = (e, a) => {
  const t = e.parameters[4] ? h(e.parameters[4], a) : "";
  return ba({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: t
  }, e.indent);
}, Vt = (e, a) => {
  const t = h(e.parameters[1], a);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], t] };
}, Jt = (e, a) => {
  const t = e.parameters[0].map(((s) => h(s, a)));
  return {
    code: j,
    indent: e.indent,
    parameters: [t, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, dr = (e, a, t = `
`) => Gt(e, ((s) => a.get(s)), t), Gt = (e, a, t = `
`) => pa(e.note, ((s) => h(s.value, a)), t), ur = (e, a) => Ke(e, ((t) => qt(t, a))), Ke = (e, a) => ({
  params: Wt(e.params, ((t) => h(t, a))),
  messages: Xt(e.messages, ((t) => h(t, a))),
  basic: Ot(e.basic, ((t) => h(t, a))),
  commands: Ht(e.commands, ((t) => h(t, a)))
}), Ot = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Ht = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9]), a(e[10]), a(e[11]), a(e[12]), a(e[13]), a(e[14]), a(e[15]), a(e[16]), a(e[17]), a(e[18]), a(e[19]), "", a(e[21]), a(e[22]), "", a(e[24]), a(e[25])], Wt = (e, a) => [a(e[0]), a(e[1]), a(e[2]), a(e[3]), a(e[4]), a(e[5]), a(e[6]), a(e[7]), a(e[8]), a(e[9])], Xt = (e, a) => ({
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
  terms: Ke(e.terms, a)
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
class ne {
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
}, Yt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === G), ((m) => m.code === _)))(e, a);
  return Qt(s) ? new ne(_, s, t) : new Ue(s, t);
}, Qt = (e) => e.parameters[0] === "選択肢ヘルプ", Zt = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === ae), ((m) => m.code === P)))(e, a);
  return new ne(P, s, t);
}, es = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === U), ((m) => m.code === le)))(e, a);
  return new Ue(s, t);
}, as = (e, a) => {
  const { bodies: t, header: s } = ((r, n) => H(r, n, ((m) => m.code === pe), ((m) => m.code === F)))(e, a);
  return new ne(F, s, t);
}, ts = {
  [ae]: (e, a, t) => t.showMessage(Zt(e, a), a, e),
  [U]: (e, a, t) => t.script(es(e, a), a, e),
  [G]: (e, a, t) => t.comment(Yt(e, a), a, e),
  [pe]: (e, a, t) => t.showScrollingText(as(e, a), a, e)
}, qe = (e) => ts[e], ss = (e, a, t, s) => {
  if (e.code === P || e.code === F || e.code === _) return;
  const r = qe(e.code);
  return r ? r(t, a, s) : e.code === j ? rs(e) : e.code === z || e.code === J || e.code === V ? ns(e) : e.code !== le ? e : void 0;
}, rs = (e) => ({
  code: j,
  indent: e.indent,
  parameters: [e.parameters[0].map(((a) => a.trimEnd())), e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), ns = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), ms = (e) => ({ code: U, indent: e.header.indent, parameters: [e.getBodyText().trimEnd()] }), os = (e) => {
  const a = e.getBodyText().trimEnd(), t = {
    code: P,
    indent: e.header.indent,
    parameters: [a]
  };
  return [cs(e.header), t];
}, is = (e) => {
  const a = e.getBodyText().trimEnd(), t = { code: F, indent: e.header.indent, parameters: [a] };
  return [e.header, t];
}, cs = (e) => {
  const a = e.parameters[4] ? e.parameters[4].trimEnd() : "";
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], e.parameters[1], e.parameters[2], e.parameters[3], a] };
}, W = (e, a) => {
  const t = (s) => a.replaceText(s);
  return ((s) => {
    const r = { comment: (n) => n.normalizedCommands(), script: ms, showMessage: os, showScrollingText: is };
    return s.map(((n, m) => n.code === R ? n : ss(n, m, s, r))).filter(((n) => n !== void 0)).flat();
  })(e).map(((s) => s.code === R ? a.pluginCommand(s) : s.code === U ? a.scriptCommand(s) : Lt(s, t)));
}, Le = (e, a) => ({
  members: e.members,
  id: e.id,
  name: e.name,
  pages: e.pages.map(((t) => ({ conditions: t.conditions, span: t.span, list: W(t.list, a) })))
}), _e = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: W(e.list, a)
}), yr = (e, a) => ({
  id: e.id,
  name: e.name,
  trigger: e.trigger,
  switchId: e.switchId,
  list: W(e.list, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a })
}), gr = (e, a) => Ve(e, { pluginCommand: (t) => t, scriptCommand: (t) => t, replaceText: a, isReplaceTargetNote: () => !1 }), ze = (e, a) => Ve(e, a), Ve = (e, a) => ({
  note: C(e.note, a),
  displayName: v(e.displayName, a),
  events: e.events.map(((t) => t ? ((s, r) => ({ id: s.id, name: s.name, x: s.x, y: s.y, note: C(s.note, r), pages: s.pages.map(((n) => ({ ...n, list: W(n.list, r) }))) }))(t, a) : null)),
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
}, Ge = (e, a) => ({ ...e, pages: e.pages.map(((t) => Je(t, a))) }), hr = (e, a) => ({
  ...e,
  events: e.events.map(((t) => t ? Ge(t, a) : null))
}), fr = (e, a) => e.map(((t) => Je(t, a))), vr = (e, a) => e.map(((t) => Ge(t, a))), xr = (e) => Oe(e, (() => [])), X = (e, a) => Oe(e, a), Oe = (e, a) => e.flatMap(((t, s) => ls(t, s, e, a))).filter(((t) => t !== null)), ls = (e, a, t, s) => {
  if (e.code === R) return s(e);
  if (e.code === j) return Aa(e);
  const r = qe(e.code);
  if (r) {
    const n = r(t, a, ps);
    if (n !== void 0) return [n];
  }
  return e.code === J || e.code === z || e.code === V ? Ca(e) : null;
}, ps = {
  comment: (e) => ({ code: G, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: P, paramIndex: 0, value: (a = e).getBodyText(), speaker: (t = a.header, t.parameters[4] ? t.parameters[4].trimEnd() : "") };
    var a, t;
  },
  showScrollingText: (e) => ((a) => ({ code: F, paramIndex: 0, value: a.getBodyText() }))(e),
  script: (e) => {
    const a = ((t) => ({
      code: U,
      paramIndex: 0,
      value: t.getBodyText()
    }))(e);
    if (/["`']/.test(a.value)) return a;
  }
}, ds = (e, a = () => []) => ({ eventId: e.id, name: e.name, commands: X(e.list, a) }), us = (e, a = () => []) => e.pages.map(((t, s) => ({
  eventId: e.id,
  pageIndex: s,
  commands: X(t.list, a)
}))), ys = (e, a = () => []) => ({ note: e.note, noteItems: de(e.note), displayedName: e.displayName, events: gs(e, a) }), gs = (e, a) => te(e, ((t, s, r) => ({
  eventId: r.id,
  pageIndex: s,
  commands: X(t.list, a),
  note: r.note,
  noteItems: de(r.note),
  name: r.name
}))), He = (e) => ((a) => a.kind.endsWith("[]"))(e.attr), We = (e) => e.kind === "struct", Xe = (e) => e.attr.kind === "struct[]", hs = (e) => Ye[e.kind.replace("[]", "")].type === "number", fs = (e) => Ye[e.kind.replace("[]", "")].type === "string", D = {
  type: "string",
  hasText: !0
}, N = { type: "number", hasText: !1 }, x = { type: "number", hasText: !1 }, Ye = {
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
function vs(e) {
  return xs(e, ((a) => !0), ((a) => !0));
}
const xs = (e, a, t) => {
  const s = [], r = [], n = [], m = [];
  return e.forEach(((o) => {
    if (We(o.attr)) s.push({ name: o.name, attr: o.attr });
    else if (Xe(o)) r.push(o);
    else if (He(o)) {
      if (t(o)) return void m.push(o);
    } else a(o) && n.push(o);
  })), { structs: s, structArrays: r, scalars: n, scalarArrays: m };
};
function Ns(e) {
  const a = e.map(((t) => [t.name, t.attr]));
  return Object.fromEntries(a);
}
const Ts = (e, a) => {
  if (e.length !== 0) return `${a}[${e.map(((t) => `"${t.name}"`)).join(",")}]`;
}, bs = (e, a) => e.map(((t) => ({ path: `${a}["${t.name}"][*]`, param: t }))), Qe = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
};
function Ze(e, a, t, s) {
  const r = { items: [], errs: [], frames: [{ schemaName: e, basePath: a, ancestry: [] }] }, n = Math.max(1, 3 * t.size + 5), m = Array.from({
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
          objectSchema: Ns(u.scalars),
          name: w,
          scalarArrays: bs(u.scalarArrays, g),
          scalarsPath: u.scalars.length > 0 ? Ts(u.scalars, g) : void 0
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
const ks = (e, a, t, s = Qe) => Ze(e.attr.struct, `${a}["${e.name}"]`, t, s), ws = (e, a, t, s = Qe) => Ze(e.attr.struct, `${a}["${e.name}"][*]`, t, s), Is = (e, a, t, s) => ((r) => We(r.attr))(t) ? Es(e, t, s) : Xe(t) ? Bs(e, t, s) : He(t) ? Ss(e, a, t) : Ms(e, a, t), Ss = (e, a, t) => ({
  rootCategory: e,
  rootName: a,
  scalars: { name: "", objectSchema: {}, scalarsPath: void 0, scalarArrays: [{ path: `$["${t.name}"][*]`, param: t }] },
  structs: { items: [], errors: [] },
  structArrays: {
    items: [],
    errors: []
  }
}), Ms = (e, a, t) => ({ rootCategory: e, rootName: a, scalars: { name: t.attr.kind, objectSchema: { [t.name]: t.attr }, scalarsPath: `$["${t.name}"]`, scalarArrays: [] }, structArrays: {
  items: [],
  errors: []
}, structs: { items: [], errors: [] } }), Es = (e, a, t) => ({
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structArrays: { items: [], errors: [] },
  structs: ks(a, "$", t)
}), Bs = (e, a, t) => ({
  structArrays: ws(a, "$", t),
  rootName: a.name,
  rootCategory: e,
  scalars: void 0,
  structs: { items: [], errors: [] }
}), Cs = (e, a) => a.map(((t) => As(e, t))).flat(3), As = (e, a) => [a.top ? Q(a, e, a.top, "") : [], a.structs.map(((t) => Q(a, e, t))), a.structArrays.map(((t) => Q(a, e, t)))], Q = (e, a, t, s = t.bundleName) => {
  const r = t.scalar ? ((m, o, i, c, l) => c.pathSegments(i).map((({ value: p, segments: f }) => ((d, b, y, u, g) => {
    if (typeof y == "object" || y === null) return null;
    const w = u[u.length - 1];
    if (typeof w == "number") return null;
    const I = g[w];
    return I ? { rootName: d.rootName, rootType: d.rootCategory, structName: b, value: y, param: { name: w, attr: I } } : null;
  })(m, o, p, f, l))).filter(((p) => p !== null)))(e, s, a, t.scalar.jsonPathJS, t.scalar.record) : [], n = t.arrays.map(((m) => ((o, i, c, l) => {
    const p = l.jsonPathJS.find(c);
    if (!Array.isArray(p)) return [];
    const f = l.schema.attr;
    return fs(f) ? ((d, b, y, u) => b.filter(((g) => typeof g == "string")).map(((g) => ({
      rootName: d.rootName,
      rootType: d.rootCategory,
      value: g,
      structName: y,
      param: u
    }))))(o, p, i, l.schema) : hs(f) ? ((d, b, y, u) => b.filter(((g) => typeof g == "number")).map(((g) => ({ rootName: d.rootName, rootType: d.rootCategory, value: g, structName: y, param: u }))))(o, p, i, l.schema) : [];
  })(e, s, a, m)));
  return [r, n].flat(2);
}, Ds = (e, a) => {
  const t = [], s = e.scalars ? Z(e.scalars, "scalar", a, t) : void 0, r = e.structs.items.map(((m) => Z(m, "struct", a, t))), n = e.structArrays.items.map(((m) => Z(m, "structArray", a, t)));
  return { extractor: {
    rootCategory: e.rootCategory,
    rootName: e.rootName,
    top: s,
    structs: r,
    structArrays: n
  }, errors: t };
}, Z = (e, a, t, s) => {
  const r = $s(e.scalarArrays, e.name, a, t, s);
  return e.scalarsPath ? {
    bundleName: e.name,
    arrays: r,
    scalar: Fs(e.scalarsPath, e.objectSchema, a, t, s)
  } : { bundleName: e.name, arrays: r };
}, $s = (e, a, t, s, r) => e.flatMap(((n) => {
  try {
    return [{
      jsonPathJS: s.createReader(n.path),
      schema: n.param,
      parentType: a
    }];
  } catch (m) {
    return r.push({ path: n.path, valType: t, error: m, handledInfo: s.errorAtPath(n.path, t, m) }), [];
  }
})), Fs = (e, a, t, s, r) => {
  try {
    return { jsonPathJS: s.createReader(e), record: a };
  } catch (n) {
    return void r.push({ path: e, valType: t, error: n, handledInfo: s.errorAtPath(e, t, n) });
  }
}, Ps = (e, a, t, s) => ({
  pluginName: e,
  commandName: a.command,
  desc: a.desc ?? "",
  text: a.text ?? "",
  extractors: Ks(a, t, s)
}), Ks = (e, a, t) => e.args.map(((s) => ((r, n) => {
  const m = Ds(r, { createReader: (o) => n(o), errorAtPath() {
  } });
  if (m.errors.length > 0) throw m.errors[0].error;
  return m.extractor;
})(Is("args", e.command, s, a), t))), Rs = (e, a) => {
  const t = ((s) => new Map(s.map(((r) => [r.struct, vs(r.params)]))))(e.schema.structs);
  return js(e.pluginName, e.schema.commands, t, a);
}, js = (e, a, t, s) => a.map(((r) => [Us(e, r.command), Ps(e, r, t, s)])), Us = (e, a) => `${e}:${a}`, qs = (e, a) => {
  const [t, s] = e.parameters, r = `${t}:${s}`, n = a.get(r);
  return n ? ((m, o) => ({ pluginName: o.pluginName, commandName: o.commandName, args: Cs(m, o.extractors) }))(ha(e.parameters[3]), n) : {
    pluginName: t,
    commandName: s,
    args: []
  };
}, Nr = (e) => {
  const a = new Map(e);
  return new me(a);
}, Tr = () => new me(/* @__PURE__ */ new Map()), br = (e) => {
  const a = e.flatMap(((t) => Rs(t, ((s) => new fa(s)))));
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
    return ys(a, ((t) => this.extractArgs(t)));
  }
  extractBattleText(a) {
    return us(a, ((t) => this.extractArgs(t)));
  }
  extractCommonEventText(a) {
    return ds(a, ((t) => this.extractArgs(t)));
  }
  extractArgs(a) {
    const t = qs(a, this._commandMap);
    return t.args.filter(Ls).map(((s) => ({
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
    return X(a, ((t) => this.extractArgs(t)));
  }
}
const Ls = (e) => typeof e.value == "string", kr = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), ee = (e, a, t) => ({
  folder: t,
  key: a,
  image: e[a],
  id: e.id
}), wr = (e) => [ee(e, "faceName", "faces"), ee(e, "characterName", "characters"), ee(e, "battlerName", "sv_actors")], _s = (e, a) => ({
  tilesets: e.tilesets,
  animations: e.animations,
  actors: k(e.actors, ((t) => Ae(t, a))),
  armors: k(e.armors, ((t) => $(t, a))),
  classes: k(e.classes, ((t) => $e(t, a))),
  commonEvents: k(e.commonEvents, ((t) => _e(t, a))),
  enemies: k(e.enemies, ((t) => De(t, a))),
  items: k(e.items, ((t) => $(t, a))),
  mapInfos: e.mapInfos,
  skills: k(e.skills, ((t) => Fe(t, a))),
  states: k(e.states, ((t) => Pe(t, a))),
  system: {
    message: e.system.message,
    system: e.system.system ? Re(e.system.system, a.replaceText) : null
  },
  troops: k(e.troops, ((t) => Le(t, a))),
  weapons: k(e.weapons, ((t) => $(t, a))),
  mapFiles: {
    info: e.mapFiles.info,
    invalidMaps: e.mapFiles.invalidMaps,
    validMaps: e.mapFiles.validMaps.map(((t) => ({ filename: t.filename, editingName: t.editingName, map: ze(t.map, a) })))
  }
}), k = (e, a) => ({
  success: e.success,
  fileName: e.fileName,
  error: e.error,
  data: e.success ? e.data.map(a) : []
}), ea = (e, a, t, s) => {
  const r = ke(e, t), n = Ie(r, {
    audioFiles: a.audioFiles,
    imageFiles: a.imageFiles,
    otherFiles: a.otherFiles
  }), m = zs(n.nonTextNoteKeys, s);
  return { data: _s(e, m), note: n };
}, zs = (e, a) => ({
  pluginCommand: (t) => a.pluginCommand(t),
  scriptCommand: (t) => a.scriptCommand(t),
  replaceText: (t) => a.replaceText(t),
  isReplaceTargetNote: (t) => !!e.has(t.key) && a.isReplaceTargetNote(t)
}), Ir = (e, a) => ze(e, {
  replaceText: (t) => a.textDictionary.get(t),
  pluginCommand: (t) => t,
  scriptCommand: (t) => t,
  isReplaceTargetNote: (t) => a.targetNoteKeys.has(t.key)
}), Sr = (e, a) => {
  const t = {
    replaceText: (s) => a.textDictionary.get(s),
    pluginCommand: (s) => s,
    scriptCommand: (s) => s,
    isReplaceTargetNote: (s) => a.targetNoteKeys.has(s.key)
  };
  return {
    actors: e.actors.map(((s) => Ae(s, t))),
    armors: e.armors.map(((s) => $(s, t))),
    classes: e.classes.map(((s) => $e(s, t))),
    enemies: e.enemies.map(((s) => De(s, t))),
    items: e.items.map(((s) => $(s, t))),
    skills: e.skills.map(((s) => Fe(s, t))),
    states: e.states.map(((s) => Pe(s, t))),
    troops: e.troops.map(((s) => Le(s, t))),
    weapons: e.weapons.map(((s) => $(s, t))),
    system: Re(e.system, ((s) => a.textDictionary.get(s))),
    commonEvents: e.commonEvents.map(((s) => _e(s, t)))
  };
}, Mr = (e, a) => {
  const t = Vs(e, a);
  return Te(t);
}, Vs = (e, a) => {
  const t = { replaceText: (s) => e.dictionary.get(s), pluginCommand: (s) => s, scriptCommand: (s) => s, isReplaceTargetNote: (s) => e.textKeys.has(s.key) };
  return ea(e.data, e.assetBundle, a, t).data;
}, Er = (e, a, t) => {
  const s = Js(e, a, t);
  return [...Te(s.main), ...At(s.aux)];
}, Js = (e, a, t) => {
  const { data: s, assetBundle: r, dictionary: n, textKeys: m } = e, o = ea(s, r, a, {
    replaceText(c) {
      const l = c.trimEnd();
      return l.length === 0 ? "" : t(l);
    },
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    isReplaceTargetNote: (c) => m.has(c.key)
  }), i = Et(s.actors.data, s.commonEvents.data, s.troops.data, s.mapFiles.validMaps.map(((c) => c.map)), n, ((c) => t(c.trimEnd())));
  return { main: o.data, aux: {
    actorTexts: i.actorTexts,
    targetNoteKeys: Ct([...o.note.dataNoteSummary, ...o.note.mapNoteSummary]),
    textDictionary: i.textDictionary
  } };
};
export {
  ar as $,
  ir as A,
  cr as B,
  ys as C,
  qa as D,
  qs as E,
  A as F,
  La as G,
  Ca as H,
  Oa as I,
  za as J,
  _a as K,
  xr as L,
  X as M,
  Ja as N,
  ke as O,
  Va as P,
  Ha as Q,
  Za as R,
  Ga as S,
  Aa as T,
  At as U,
  sr as V,
  or as W,
  it as X,
  ct as Y,
  be as Z,
  xt as _,
  Ut as a,
  nr as a0,
  er as a1,
  Ae as a2,
  $ as a3,
  Lt as a4,
  $e as a5,
  _e as a6,
  yr as a7,
  fr as a8,
  Vs as a9,
  Ct as aA,
  Mr as aa,
  Js as ab,
  Er as ac,
  De as ad,
  W as ae,
  Je as af,
  ze as ag,
  hr as ah,
  gr as ai,
  Gt as aj,
  dr as ak,
  Ge as al,
  _s as am,
  ea as an,
  Sr as ao,
  Ir as ap,
  Fe as aq,
  Pe as ar,
  ur as as,
  Re as at,
  qt as au,
  Le as av,
  vr as aw,
  q as ax,
  we as ay,
  Be as az,
  tr as b,
  Ie as c,
  rr as d,
  Ba as e,
  Ma as f,
  Xa as g,
  B as h,
  jt as i,
  lr as j,
  Wa as k,
  Qa as l,
  Da as m,
  mr as n,
  pr as o,
  Et as p,
  Tr as q,
  Nr as r,
  br as s,
  Fa as t,
  us as u,
  ds as v,
  wr as w,
  kr as x,
  Kt as y,
  Ce as z
};
