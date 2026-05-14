import { d as N, h as D, b as f, f as A, F as S, i as _, j as v, m as F, g as y, c as g, a as L, e as O, k as u, r as q, l as k } from "../shared/system.es.js";
import { m as Q, a as aa } from "../shared/make.es.js";
import { k as sa, l as ea, n as ta, v as ra, L as ma, P as w, Y as ia, C as na, Z as oa, X as la, V as da, H as ca, K as Ea, a1 as pa, d as Ia, i as Ma, a as Na, S as G } from "../shared/makeTestData.es.js";
import { G as Da } from "../shared/makeSystemEx.es.js";
const as = "bgm", ss = "se", es = "me", ts = "bgs", rs = "img", ms = "audio", is = (a) => [...I(a.bgm, { asset: "audio", subDir: "bgm" }), ...I(a.bgs, {
  asset: "audio",
  subDir: "bgs"
}), ...I(a.me, { asset: "audio", subDir: "me" }), ...I(a.se, { asset: "audio", subDir: "se" })], ns = (a) => [...I(a.characters, { asset: "img", subDir: "characters" }), ...I(a.faces, {
  asset: "img",
  subDir: "faces"
}), ...I(a.svEnemy, { asset: "img", subDir: "sv_enemies" }), ...I(a.svActors, { asset: "img", subDir: "sv_actors" }), ...I(a.enemies, {
  asset: "img",
  subDir: "enemies"
})], I = (a, s) => Array.from(a).sort().map(((e) => ({
  asset: s.asset,
  subDir: s.subDir,
  symbol: e
}))), os = "battlebacks1", ls = "battlebacks2", ds = "characters", cs = "enemies", Es = "faces", ps = "parallaxes", Is = "pictures", Ms = "sv_actors", Ns = "sv_enemies", Ds = "system", fs = "tilesets", As = "titles1", Ss = "titles2", c = async (a, s, e, t) => e(s).then(((r) => fa(r, s, a, t))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), fa = (a, s, e, t) => {
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
}, Aa = (a, s, e) => c(a, L, s, e), Sa = (a, s, e) => c(a, N, s, e), _a = (a, s, e) => c(a, _, s, e), va = (a, s, e) => c(a, A, s, e), Fa = (a, s, e) => c(a, g, s, e), ya = (a, s, e) => c(a, O, s, e), ga = (a, s, e) => c(a, f, s, e), La = (a, s, e) => c(a, y, s, e), Oa = (a, s, e) => c(a, v, s, e), ua = (a, s, e) => c(a, u, s, e), Ta = (a, s, e) => c(a, F, s, e), Ra = (a, s, e) => c(a, D, s, e), ba = (a, s, e) => c(a, S, s, e), o = (a, s, e) => e(a, JSON.stringify(s)), C = (a, s) => Promise.all([o(L, a.actors, s), o(N, a.classes, s), o(_, a.skills, s), o(A, a.items, s), o(g, a.weapons, s), o(O, a.armors, s), o(f, a.enemies, s), o(y, a.troops, s), o(v, a.states, s), o(u, a.animations, s), o(F, a.tilesets, s), o(D, a.commonEvents, s), o(S, a.mapInfos, s)]), _s = (a) => ({
  main: ha(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), ha = (a) => {
  const s = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, ka = (a) => [Q({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), aa(a.text), sa({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), ea({ name: a.text, actorId: 1 }), ta({
  nickname: a.text,
  actorId: 1
}), ra(a.text)], wa = (a) => ma({
  note: a.note,
  displayName: a.text,
  bgm: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  bgs: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  battleback1Name: a.image,
  battleback2Name: a.image,
  parallaxName: a.image,
  events: [null, { id: 1, name: "", note: a.note, x: 0, y: 0, pages: [Ga(a), Ca(a)] }]
}), Ga = (a) => w({ image: {
  characterName: a.image,
  tileId: 0,
  characterIndex: 0,
  direction: 2,
  pattern: 0
}, list: ia(a) }), Ca = (a) => w({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: ka(a) }), vs = (a) => {
  const { message: s } = a;
  return {
    actors: p(Na(a), s, L),
    classes: p(Ma(a), s, N),
    armors: p(Ia(a), s, O),
    weapons: p(pa(a), s, g),
    items: p(Ea(a), s, A),
    enemies: p(ca(a), s, f),
    skills: p(da(a), s, _),
    states: p(la(a), s, v),
    troops: p(oa({
      id: 1,
      name: a.nonReplaceableText
    }), s, y),
    commonEvents: p(na({ id: 1, name: a.nonReplaceableText }), s, D),
    mapInfos: R(s, S),
    animations: R(s, u),
    tilesets: R(s, F),
    system: { system: Da(a), message: s },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [xa(a)] }
  };
}, xa = (a) => ({ filename: "Map001", editingName: "Test Map", map: wa(a) }), R = (a, s) => ({
  data: [],
  error: a,
  fileName: s,
  success: !0
}), p = (a, s, e) => ({ data: [a], error: s, fileName: e, success: !0 }), Pa = (a, s, e, t) => e(ja(a)).then(((r) => Ba(r, a, s, t))).catch((() => b(a, s.fileNotFound))), Ba = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: x(s), editingName: s.name } : b(s, e.invalidStructure);
  } catch {
    return b(s, e.jsonParseError);
  }
}, ja = (a) => `Map${G(a.id)}.json`, x = (a) => `Map${G(a.id)}`, b = (a, s) => ({ map: null, message: s, filename: x(a), editingName: a.name }), Fs = (a, s, e, t) => P(a, s, e, t, ((r) => r.map)), P = async (a, s, e, t, r) => {
  const n = await Promise.all(a.map((async (T) => Wa(T, s, e, r, t))));
  return Ja(n);
}, Wa = async (a, s, e, t, r) => {
  const n = await Pa(a, s, e, r);
  return n.map === null ? n : {
    editingName: n.editingName,
    filename: n.filename,
    map: t(n)
  };
}, Ja = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({
    filename: s.filename,
    message: s.message,
    map: null,
    editingName: s.editingName
  })))
}), Ua = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), B = (a, s) => Promise.all(a.map(((e) => Ua(e, s)))), ys = async (a, s, e) => h(a, s, {
  readMap: Va,
  readActors: l,
  readArmors: l,
  readClasses: l,
  readCommonEvents: l,
  readEnemies: l,
  readItems: l,
  readSkills: l,
  readStates: l,
  readSystem: l,
  readTroops: l,
  readWeapons: l,
  readAnimations: l,
  readTilesets: l
}, e, (() => [])), Va = (a) => a.map, l = (a) => a, gs = (a, s, e, t) => h(a, s, t, e, (() => [])), Ls = (a, s, e, t) => h(a, s, t, e, (() => null)), h = async (a, s, e, t, r) => {
  const [n, T, W, J, U, V, K, H, Y, $, z, X, M, Z] = await Promise.all([Ra(a, s, ((m) => t.validateCommonEvent(m))), La(a, s, ((m) => t.validateTroop(m))), ga(a, s, ((m) => t.validateEnemy(m))), Sa(a, s, ((m) => t.validateClass(m))), _a(a, s, ((m) => t.validateSkill(m))), va(a, s, ((m) => t.validateItem(m))), Fa(a, s, ((m) => t.validateWeapon(m))), ya(a, s, ((m) => t.validateArmor(m))), Oa(a, s, ((m) => t.validateState(m))), Aa(a, s, ((m) => t.validateActor(m))), ua(a, s, ((m) => t.validateAnimation(m))), Ta(a, s, ((m) => t.validateTileset(m))), ba(a, s, ((m) => t.validateMapInfo(m))), q(a, s, {
    validateSystemMz: (m) => t.validateSystem(m),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: M.success ? await Ha(M.data, a, e, s, t.validateMap) : Ka(M),
    actors: E($, a, e.readActors, r),
    armors: E(H, a, e.readArmors, r),
    classes: E(J, a, e.readClasses, r),
    commonEvents: E(n, a, e.readCommonEvents, r),
    enemies: E(W, a, e.readEnemies, r),
    items: E(V, a, e.readItems, r),
    mapInfos: M,
    skills: E(U, a, e.readSkills, r),
    states: E(Y, a, e.readStates, r),
    system: Ya(Z, a, e.readSystem),
    troops: E(T, a, e.readTroops, r),
    weapons: E(K, a, e.readWeapons, r),
    animations: E(z, a, e.readAnimations, r),
    tilesets: E(X, a, e.readTilesets, r)
  };
}, Ka = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Ha = async (a, s, e, t, r) => await P(a, s, (async (n) => t(n)), r, ((n) => e.readMap(n))), Ya = (a, s, e) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: e(a.system, k)
    };
  } catch {
    return { message: s.dataConvertError, system: null };
  }
}, E = (a, s, e, t) => {
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
}, Os = (a) => a, us = (a) => [d(L, a.actors.data), d(N, a.classes.data), d(_, a.skills.data), d(A, a.items.data), d(g, a.weapons.data), d(O, a.armors.data), d(f, a.enemies.data), d(y, a.troops.data), d(v, a.states.data), d(u, a.animations.data), d(F, a.tilesets.data), d(D, a.commonEvents.data), d(S, a.mapInfos.data)], d = (a, s) => ({
  filename: a,
  data: [null, ...s]
}), j = (a, s) => s(k, JSON.stringify(a)), Ts = (a, s, e) => Promise.all([C($a(a), e), j(a.system, e), B(s.validMaps, e)]).then((() => {
})), Rs = (a, s) => {
  const e = [C(za(a), s), B(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(j(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, i = (a) => [null, ...a], $a = (a) => ({
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
}), za = (a) => ({
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
}), bs = "data", hs = "js";
export {
  L as FILENAME_ACTORS,
  u as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  N as FILENAME_CLASSES,
  D as FILENAME_COMMON_EVENTS,
  f as FILENAME_ENEMIES,
  A as FILENAME_ITEMS,
  S as FILENAME_MAP_INFOS,
  _ as FILENAME_SKILLS,
  v as FILENAME_STATES,
  k as FILENAME_SYSTEM,
  F as FILENAME_TILESET,
  y as FILENAME_TROOPS,
  g as FILENAME_WEAPONS,
  ms as FOLDER_AUDIO,
  as as FOLDER_AUDIO_BGM,
  ts as FOLDER_AUDIO_BGS,
  es as FOLDER_AUDIO_ME,
  ss as FOLDER_AUDIO_SE,
  bs as FOLDER_DATA,
  rs as FOLDER_IMG,
  os as FOLDER_IMG_BATTLEBACK1,
  ls as FOLDER_IMG_BATTLEBACK2,
  ds as FOLDER_IMG_CHACTERS,
  cs as FOLDER_IMG_ENEMIES,
  Es as FOLDER_IMG_FACES,
  ps as FOLDER_IMG_PARALLACES,
  Is as FOLDER_IMG_PICTURES,
  Ms as FOLDER_IMG_SV_ACTORS,
  Ns as FOLDER_IMG_SV_ENEMIES,
  Ds as FOLDER_IMG_SYSTEM,
  fs as FOLDER_IMG_TILESETS,
  As as FOLDER_IMG_TITLES1,
  Ss as FOLDER_IMG_TITLES2,
  hs as FOLDER_JS,
  Os as defineGameDataReadHandlers,
  is as flattenAudioFiles,
  ns as flattenImageFiles,
  vs as makeRawTestDataBundle,
  us as rawGameDataToMainDataFileEntries,
  Aa as readActorData,
  gs as readAllGameDataWithArrayFallback,
  Ls as readAllGameDataWithNullFallback,
  ys as readAllRawGameData,
  ua as readAnimationData,
  ya as readArmorData,
  c as readArrayData,
  Sa as readClassData,
  Ra as readCommonEventData,
  ga as readEnemyData,
  va as readItemData,
  Pa as readMapFileFromInfo,
  Fs as readMapFilesFromInfo,
  P as readMapFilesFromInfoEx,
  ba as readMapInfoData,
  _a as readSkillData,
  Oa as readStateData,
  q as readSystemData,
  Ta as readTilesetData,
  La as readTroopData,
  Fa as readWeaponData,
  _s as summarizeReadErrors,
  Ts as writeBundleData,
  C as writeMainData,
  Ua as writeMapData,
  B as writeMapFiles,
  Rs as writeRawGameData,
  j as writeSystemData
};
