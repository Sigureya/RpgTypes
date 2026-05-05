import { d as f, h as A, b as S, f as _, F as v, i as y, j as F, m as g, g as u, c as L, a as O, e as T, k as R, r as Z, l as h } from "../shared/system.es.js";
import { m as q, a as Q } from "../shared/make.es.js";
import { k as aa, l as sa, n as ea, v as ta, L as ra, P as k, Y as ma, C as ia, Z as na, X as la, V as oa, H as da, K as ca, a1 as Ea, d as pa, i as Ia, a as Ma, S as w } from "../shared/makeTestData.es.js";
import { G as Na } from "../shared/makeSystemEx.es.js";
const Qa = "bgm", as = "se", ss = "me", es = "bgs", ts = "img", rs = "audio", ms = (a) => [...p(a.bgm, { asset: "audio", subDir: "bgm" }), ...p(a.bgs, {
  asset: "audio",
  subDir: "bgs"
}), ...p(a.me, { asset: "audio", subDir: "me" }), ...p(a.se, { asset: "audio", subDir: "se" })], is = (a) => [...p(a.characters, { asset: "img", subDir: "characters" }), ...p(a.faces, {
  asset: "img",
  subDir: "faces"
}), ...p(a.svEnemy, { asset: "img", subDir: "sv_enemies" }), ...p(a.svActors, { asset: "img", subDir: "sv_actors" }), ...p(a.enemies, {
  asset: "img",
  subDir: "enemies"
})], p = (a, s) => Array.from(a).sort().map(((e) => ({
  asset: s.asset,
  subDir: s.subDir,
  symbol: e
}))), ns = "battlebacks1", ls = "battlebacks2", os = "characters", ds = "enemies", cs = "faces", Es = "parallaxes", ps = "pictures", Is = "sv_actors", Ms = "sv_enemies", Ns = "system", Ds = "tilesets", fs = "titles1", As = "titles2", d = async (a, s, e, t) => e(s).then(((r) => Da(r, s, a, t))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), Da = (a, s, e, t) => {
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
}, fa = (a, s, e) => d(a, O, s, e), Aa = (a, s, e) => d(a, f, s, e), Sa = (a, s, e) => d(a, y, s, e), _a = (a, s, e) => d(a, _, s, e), va = (a, s, e) => d(a, L, s, e), ya = (a, s, e) => d(a, T, s, e), Fa = (a, s, e) => d(a, S, s, e), ga = (a, s, e) => d(a, u, s, e), ua = (a, s, e) => d(a, F, s, e), La = (a, s, e) => d(a, R, s, e), Oa = (a, s, e) => d(a, g, s, e), Ta = (a, s, e) => d(a, A, s, e), Ra = (a, s, e) => d(a, v, s, e), l = (a, s, e) => e(a, JSON.stringify(s)), C = (a, s) => Promise.all([l(O, a.actors, s), l(f, a.classes, s), l(y, a.skills, s), l(_, a.items, s), l(L, a.weapons, s), l(T, a.armors, s), l(S, a.enemies, s), l(u, a.troops, s), l(F, a.states, s), l(R, a.animations, s), l(g, a.tilesets, s), l(A, a.commonEvents, s), l(v, a.mapInfos, s)]), Ss = (a) => ({
  main: ba(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), ba = (a) => {
  const s = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, ha = (a) => [q({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), Q(a.text), aa({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), sa({ name: a.text, actorId: 1 }), ea({
  nickname: a.text,
  actorId: 1
}), ta(a.text)], ka = (a) => ra({
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
}, list: ma(a) }), Ca = (a) => k({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: ha(a) }), _s = (a) => {
  const { message: s } = a;
  return {
    actors: E(Ma(a), s, O),
    classes: E(Ia(a), s, f),
    armors: E(pa(a), s, T),
    weapons: E(Ea(a), s, L),
    items: E(ca(a), s, _),
    enemies: E(da(a), s, S),
    skills: E(oa(a), s, y),
    states: E(la(a), s, F),
    troops: E(na({
      id: 1,
      name: a.nonReplaceableText
    }), s, u),
    commonEvents: E(ia({ id: 1, name: a.nonReplaceableText }), s, A),
    mapInfos: N(s, v),
    animations: N(s, R),
    tilesets: N(s, g),
    system: { system: Na(a), message: s },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [Ga(a)] }
  };
}, Ga = (a) => ({ filename: "Map001", editingName: "Test Map", map: ka(a) }), N = (a, s) => ({
  data: [],
  error: a,
  fileName: s,
  success: !0
}), E = (a, s, e) => ({ data: [a], error: s, fileName: e, success: !0 }), xa = (a, s, e, t) => e(Ba(a)).then(((r) => Pa(r, a, s, t))).catch((() => D(a, s.fileNotFound))), Pa = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: G(s), editingName: s.name } : D(s, e.invalidStructure);
  } catch {
    return D(s, e.jsonParseError);
  }
}, Ba = (a) => `Map${w(a.id)}.json`, G = (a) => `Map${w(a.id)}`, D = (a, s) => ({ map: null, message: s, filename: G(a), editingName: a.name }), vs = (a, s, e, t) => x(a, s, e, t, ((r) => r.map)), x = async (a, s, e, t, r) => {
  const n = await Promise.all(a.map((async (M) => ja(M, s, e, r, t))));
  return Wa(n);
}, ja = async (a, s, e, t, r) => {
  const n = await xa(a, s, e, r);
  return n.map === null ? n : {
    editingName: n.editingName,
    filename: n.filename,
    map: t(n)
  };
}, Wa = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({
    filename: s.filename,
    message: s.message,
    map: null,
    editingName: s.editingName
  })))
}), Ja = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), P = (a, s) => Promise.all(a.map(((e) => Ja(e, s)))), ys = async (a, s, e) => b(a, s, {
  readMap: Ua,
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
}, e, (() => [])), Ua = (a) => a.map, o = (a) => a, Fs = (a, s, e, t) => b(a, s, t, e, (() => [])), gs = (a, s, e, t) => b(a, s, t, e, (() => null)), b = async (a, s, e, t, r) => {
  const [n, M, j, W, J, U, V, K, H, Y, $, z, I, X] = await Promise.all([Ta(a, s, ((m) => t.validateCommonEvent(m))), ga(a, s, ((m) => t.validateTroop(m))), Fa(a, s, ((m) => t.validateEnemy(m))), Aa(a, s, ((m) => t.validateClass(m))), Sa(a, s, ((m) => t.validateSkill(m))), _a(a, s, ((m) => t.validateItem(m))), va(a, s, ((m) => t.validateWeapon(m))), ya(a, s, ((m) => t.validateArmor(m))), ua(a, s, ((m) => t.validateState(m))), fa(a, s, ((m) => t.validateActor(m))), La(a, s, ((m) => t.validateAnimation(m))), Oa(a, s, ((m) => t.validateTileset(m))), Ra(a, s, ((m) => t.validateMapInfo(m))), Z(a, s, {
    validateSystemMz: (m) => t.validateSystem(m),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: I.success ? await Ka(I.data, a, e, s, t.validateMap) : Va(I),
    actors: c(Y, a, e.readActors, r),
    armors: c(K, a, e.readArmors, r),
    classes: c(W, a, e.readClasses, r),
    commonEvents: c(n, a, e.readCommonEvents, r),
    enemies: c(j, a, e.readEnemies, r),
    items: c(U, a, e.readItems, r),
    mapInfos: I,
    skills: c(J, a, e.readSkills, r),
    states: c(H, a, e.readStates, r),
    system: Ha(X, a, e.readSystem),
    troops: c(M, a, e.readTroops, r),
    weapons: c(V, a, e.readWeapons, r),
    animations: c($, a, e.readAnimations, r),
    tilesets: c(z, a, e.readTilesets, r)
  };
}, Va = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Ka = async (a, s, e, t, r) => await x(a, s, (async (n) => t(n)), r, ((n) => e.readMap(n))), Ha = (a, s, e) => {
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
}, us = (a) => a, B = (a, s) => s(h, JSON.stringify(a)), Ls = (a, s, e) => Promise.all([C(Ya(a), e), B(a.system, e), P(s.validMaps, e)]).then((() => {
})), Os = (a, s) => {
  const e = [C($a(a), s), P(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(B(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, i = (a) => [null, ...a], Ya = (a) => ({
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
}), $a = (a) => ({
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
}), Ts = "data", Rs = "js";
export {
  O as FILENAME_ACTORS,
  R as FILENAME_ANIMATIONS,
  T as FILENAME_ARMORS,
  f as FILENAME_CLASSES,
  A as FILENAME_COMMON_EVENTS,
  S as FILENAME_ENEMIES,
  _ as FILENAME_ITEMS,
  v as FILENAME_MAP_INFOS,
  y as FILENAME_SKILLS,
  F as FILENAME_STATES,
  h as FILENAME_SYSTEM,
  g as FILENAME_TILESET,
  u as FILENAME_TROOPS,
  L as FILENAME_WEAPONS,
  rs as FOLDER_AUDIO,
  Qa as FOLDER_AUDIO_BGM,
  es as FOLDER_AUDIO_BGS,
  ss as FOLDER_AUDIO_ME,
  as as FOLDER_AUDIO_SE,
  Ts as FOLDER_DATA,
  ts as FOLDER_IMG,
  ns as FOLDER_IMG_BATTLEBACK1,
  ls as FOLDER_IMG_BATTLEBACK2,
  os as FOLDER_IMG_CHACTERS,
  ds as FOLDER_IMG_ENEMIES,
  cs as FOLDER_IMG_FACES,
  Es as FOLDER_IMG_PARALLACES,
  ps as FOLDER_IMG_PICTURES,
  Is as FOLDER_IMG_SV_ACTORS,
  Ms as FOLDER_IMG_SV_ENEMIES,
  Ns as FOLDER_IMG_SYSTEM,
  Ds as FOLDER_IMG_TILESETS,
  fs as FOLDER_IMG_TITLES1,
  As as FOLDER_IMG_TITLES2,
  Rs as FOLDER_JS,
  us as defineGameDataReadHandlers,
  ms as flattenAudioFiles,
  is as flattenImageFiles,
  _s as makeRawTestDataBundle,
  fa as readActorData,
  Fs as readAllGameDataWithArrayFallback,
  gs as readAllGameDataWithNullFallback,
  ys as readAllRawGameData,
  La as readAnimationData,
  ya as readArmorData,
  d as readArrayData,
  Aa as readClassData,
  Ta as readCommonEventData,
  Fa as readEnemyData,
  _a as readItemData,
  xa as readMapFileFromInfo,
  vs as readMapFilesFromInfo,
  x as readMapFilesFromInfoEx,
  Ra as readMapInfoData,
  Sa as readSkillData,
  ua as readStateData,
  Z as readSystemData,
  Oa as readTilesetData,
  ga as readTroopData,
  va as readWeaponData,
  Ss as summarizeReadErrors,
  Ls as writeBundleData,
  C as writeMainData,
  Ja as writeMapData,
  P as writeMapFiles,
  Os as writeRawGameData,
  B as writeSystemData
};
