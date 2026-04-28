import { d as S, h as A, b as _, f as F, F as D, i as y, j as v, l as u, g as L, c as f, a as g, e as O, k as T } from "../shared/fileNames.es.js";
import { r as X, F as h } from "../shared/system.es.js";
import { m as Z, a as q } from "../shared/make.es.js";
import { k as Q, l as aa, n as sa, v as ea, L as ta, P as k, Y as ra, C as ma, Z as ia, X as na, V as la, H as oa, K as da, a1 as ca, d as Ea, i as pa, a as Ia, S as w } from "../shared/makeTestData.es.js";
import { G as Ma } from "../shared/makeSystemEx.es.js";
const Qa = "bgm", as = "se", ss = "me", es = "bgs", d = async (a, s, e, t) => e(s).then(((r) => Na(r, s, a, t))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), Na = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? { success: !0, fileName: s, data: r.filter(t), error: "" } : {
      success: !1,
      fileName: s,
      data: [],
      error: e.notArray
    };
  } catch {
    return { success: !1, fileName: s, data: [], error: e.jsonParseError };
  }
}, Sa = (a, s, e) => d(a, g, s, e), Aa = (a, s, e) => d(a, S, s, e), _a = (a, s, e) => d(a, y, s, e), Fa = (a, s, e) => d(a, F, s, e), Da = (a, s, e) => d(a, f, s, e), ya = (a, s, e) => d(a, O, s, e), va = (a, s, e) => d(a, _, s, e), ua = (a, s, e) => d(a, L, s, e), La = (a, s, e) => d(a, v, s, e), fa = (a, s, e) => d(a, T, s, e), ga = (a, s, e) => d(a, u, s, e), Oa = (a, s, e) => d(a, A, s, e), Ta = (a, s, e) => d(a, D, s, e), l = (a, s, e) => e(a, JSON.stringify(s)), C = (a, s) => Promise.all([l(g, a.actors, s), l(S, a.classes, s), l(y, a.skills, s), l(F, a.items, s), l(f, a.weapons, s), l(O, a.armors, s), l(_, a.enemies, s), l(L, a.troops, s), l(v, a.states, s), l(T, a.animations, s), l(u, a.tilesets, s), l(A, a.commonEvents, s), l(D, a.mapInfos, s)]), ts = (a) => ({
  main: Ra(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), Ra = (a) => {
  const s = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, ha = (a) => [Z({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), q(a.text), Q({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), aa({ name: a.text, actorId: 1 }), sa({
  nickname: a.text,
  actorId: 1
}), ea(a.text)], ka = (a) => ta({
  note: a.note,
  displayName: a.text,
  bgm: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  bgs: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  battleback1Name: a.image,
  battleback2Name: a.image,
  parallaxName: a.image,
  events: [null, { id: 1, name: "", note: a.note, x: 0, y: 0, pages: [wa(a), Ca(a)] }]
}), wa = (a) => k({ image: {
  characterName: a.image,
  tileId: 0,
  characterIndex: 0,
  direction: 2,
  pattern: 0
}, list: ra(a) }), Ca = (a) => k({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: ha(a) }), rs = (a) => {
  const { message: s } = a;
  return {
    actors: E(Ia(a), s, g),
    classes: E(pa(a), s, S),
    armors: E(Ea(a), s, O),
    weapons: E(ca(a), s, f),
    items: E(da(a), s, F),
    enemies: E(oa(a), s, _),
    skills: E(la(a), s, y),
    states: E(na(a), s, v),
    troops: E(ia({
      id: 1,
      name: a.nonReplaceableText
    }), s, L),
    commonEvents: E(ma({ id: 1, name: a.nonReplaceableText }), s, A),
    mapInfos: M(s, D),
    animations: M(s, T),
    tilesets: M(s, u),
    system: { system: Ma(a), message: s },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [Ga(a)] }
  };
}, Ga = (a) => ({ filename: "Map001", editingName: "Test Map", map: ka(a) }), M = (a, s) => ({
  data: [],
  error: a,
  fileName: s,
  success: !0
}), E = (a, s, e) => ({ data: [a], error: s, fileName: e, success: !0 }), ba = (a, s, e, t) => e(Pa(a)).then(((r) => xa(r, a, s, t))).catch((() => N(a, s.fileNotFound))), xa = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: G(s), editingName: s.name } : N(s, e.invalidStructure);
  } catch {
    return N(s, e.jsonParseError);
  }
}, Pa = (a) => `Map${w(a.id)}.json`, G = (a) => `Map${w(a.id)}`, N = (a, s) => ({ map: null, message: s, filename: G(a), editingName: a.name }), ms = (a, s, e, t) => b(a, s, e, t, ((r) => r.map)), b = async (a, s, e, t, r) => {
  const n = await Promise.all(a.map((async (I) => Ba(I, s, e, r, t))));
  return ja(n);
}, Ba = async (a, s, e, t, r) => {
  const n = await ba(a, s, e, r);
  return n.map === null ? n : {
    editingName: n.editingName,
    filename: n.filename,
    map: t(n)
  };
}, ja = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({
    filename: s.filename,
    message: s.message,
    map: null,
    editingName: s.editingName
  })))
}), Wa = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), x = (a, s) => Promise.all(a.map(((e) => Wa(e, s)))), is = async (a, s, e) => R(a, s, {
  readMap: Ja,
  readActors: o,
  readArmors: o,
  readClasses: o,
  readCommonEvents: o,
  readEnemies: o,
  readItems: o,
  readSkills: o,
  readStates: o,
  readSystem: o,
  readTroops: o,
  readWeapons: o,
  readAnimations: o,
  readTilesets: o
}, e, (() => [])), Ja = (a) => a.map, o = (a) => a, ns = (a, s, e, t) => R(a, s, t, e, (() => [])), ls = (a, s, e, t) => R(a, s, t, e, (() => null)), R = async (a, s, e, t, r) => {
  const [n, I, B, j, W, J, U, V, K, H, Y, $, p, z] = await Promise.all([Oa(a, s, ((m) => t.validateCommonEvent(m))), ua(a, s, ((m) => t.validateTroop(m))), va(a, s, ((m) => t.validateEnemy(m))), Aa(a, s, ((m) => t.validateClass(m))), _a(a, s, ((m) => t.validateSkill(m))), Fa(a, s, ((m) => t.validateItem(m))), Da(a, s, ((m) => t.validateWeapon(m))), ya(a, s, ((m) => t.validateArmor(m))), La(a, s, ((m) => t.validateState(m))), Sa(a, s, ((m) => t.validateActor(m))), fa(a, s, ((m) => t.validateAnimation(m))), ga(a, s, ((m) => t.validateTileset(m))), Ta(a, s, ((m) => t.validateMapInfo(m))), X(a, s, {
    validateSystemMz: (m) => t.validateSystem(m),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: p.success ? await Va(p.data, a, e, s, t.validateMap) : Ua(p),
    actors: c(H, a, e.readActors, r),
    armors: c(V, a, e.readArmors, r),
    classes: c(j, a, e.readClasses, r),
    commonEvents: c(n, a, e.readCommonEvents, r),
    enemies: c(B, a, e.readEnemies, r),
    items: c(J, a, e.readItems, r),
    mapInfos: p,
    skills: c(W, a, e.readSkills, r),
    states: c(K, a, e.readStates, r),
    system: Ka(z, a, e.readSystem),
    troops: c(I, a, e.readTroops, r),
    weapons: c(U, a, e.readWeapons, r),
    animations: c(Y, a, e.readAnimations, r),
    tilesets: c($, a, e.readTilesets, r)
  };
}, Ua = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Va = async (a, s, e, t, r) => await b(a, s, (async (n) => t(n)), r, ((n) => e.readMap(n))), Ka = (a, s, e) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: e(a.system, h)
    };
  } catch {
    return { message: s.dataConvertError, system: null };
  }
}, c = (a, s, e, t) => {
  if (!a.success) return { fileName: a.fileName, success: !1, error: a.error, data: t() };
  try {
    return {
      fileName: a.fileName,
      success: !0,
      error: "",
      data: e(a.data, a.fileName)
    };
  } catch {
    return { fileName: a.fileName, success: !1, error: s.dataConvertError, data: t() };
  }
}, os = (a) => a, P = (a, s) => s(h, JSON.stringify(a)), ds = (a, s, e) => Promise.all([C(Ha(a), e), P(a.system, e), x(s.validMaps, e)]).then((() => {
})), cs = (a, s) => {
  const e = [C(Ya(a), s), x(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(P(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, i = (a) => [null, ...a], Ha = (a) => ({
  actors: i(a.actors),
  classes: i(a.classes),
  skills: i(a.skills),
  items: i(a.items),
  weapons: i(a.weapons),
  armors: i(a.armors),
  enemies: i(a.enemies),
  troops: i(a.troops),
  states: i(a.states),
  animations: i(a.animations),
  tilesets: i(a.tilesets),
  commonEvents: i(a.commonEvents),
  mapInfos: i(a.mapInfos)
}), Ya = (a) => ({
  actors: i(a.actors.data),
  classes: i(a.classes.data),
  skills: i(a.skills.data),
  items: i(a.items.data),
  weapons: i(a.weapons.data),
  armors: i(a.armors.data),
  enemies: i(a.enemies.data),
  troops: i(a.troops.data),
  states: i(a.states.data),
  animations: i(a.animations.data),
  tilesets: i(a.tilesets.data),
  commonEvents: i(a.commonEvents.data),
  mapInfos: i(a.mapInfos.data)
}), Es = "data", ps = "img", Is = "audio", Ms = "js", Ns = "battlebacks1", Ss = "battlebacks2", As = "characters", _s = "enemies", Fs = "faces", Ds = "parallaxes", ys = "pictures", vs = "sv_actors", us = "sv_enemies", Ls = "system", fs = "tilesets", gs = "titles1", Os = "titles2";
export {
  g as FILENAME_ACTORS,
  T as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  S as FILENAME_CLASSES,
  A as FILENAME_COMMON_EVENTS,
  _ as FILENAME_ENEMIES,
  F as FILENAME_ITEMS,
  D as FILENAME_MAP_INFOS,
  y as FILENAME_SKILLS,
  v as FILENAME_STATES,
  h as FILENAME_SYSTEM,
  u as FILENAME_TILESET,
  L as FILENAME_TROOPS,
  f as FILENAME_WEAPONS,
  Is as FOLDER_AUDIO,
  Qa as FOLDER_AUDIO_BGM,
  es as FOLDER_AUDIO_BGS,
  ss as FOLDER_AUDIO_ME,
  as as FOLDER_AUDIO_SE,
  Es as FOLDER_DATA,
  ps as FOLDER_IMG,
  Ns as FOLDER_IMG_BATTLEBACK1,
  Ss as FOLDER_IMG_BATTLEBACK2,
  As as FOLDER_IMG_CHACTERS,
  _s as FOLDER_IMG_ENEMIES,
  Fs as FOLDER_IMG_FACES,
  Ds as FOLDER_IMG_PARALLACES,
  ys as FOLDER_IMG_PICTURES,
  vs as FOLDER_IMG_SV_ACTORS,
  us as FOLDER_IMG_SV_ENEMIES,
  Ls as FOLDER_IMG_SYSTEM,
  fs as FOLDER_IMG_TILESETS,
  gs as FOLDER_IMG_TITLES1,
  Os as FOLDER_IMG_TITLES2,
  Ms as FOLDER_JS,
  os as defineGameDataReadHandlers,
  rs as makeRawTestDataBundle,
  Sa as readActorData,
  ns as readAllGameDataWithArrayFallback,
  ls as readAllGameDataWithNullFallback,
  is as readAllRawGameData,
  fa as readAnimationData,
  ya as readArmorData,
  d as readArrayData,
  Aa as readClassData,
  Oa as readCommonEventData,
  va as readEnemyData,
  Fa as readItemData,
  ba as readMapFileFromInfo,
  ms as readMapFilesFromInfo,
  b as readMapFilesFromInfoEx,
  Ta as readMapInfoData,
  _a as readSkillData,
  La as readStateData,
  X as readSystemData,
  ga as readTilesetData,
  ua as readTroopData,
  Da as readWeaponData,
  ts as summarizeReadErrors,
  ds as writeBundleData,
  C as writeMainData,
  Wa as writeMapData,
  x as writeMapFiles,
  cs as writeRawGameData,
  P as writeSystemData
};
