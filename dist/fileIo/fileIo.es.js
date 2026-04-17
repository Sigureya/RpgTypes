import { d as I, h as A, b as S, f as _, F as N, i as D, j as F, m as y, g as L, c as f, a as v, e as O, k as u, r as $, l as R } from "../shared/system.es.js";
import { a as T } from "../shared/make.es3.js";
const ya = "bgm", La = "se", fa = "me", va = "bgs", o = async (a, s, e, t) => e(s).then(((r) => z(r, s, a, t))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), z = (a, s, e, t) => {
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
}, H = (a, s, e) => o(a, v, s, e), Y = (a, s, e) => o(a, I, s, e), q = (a, s, e) => o(a, D, s, e), Q = (a, s, e) => o(a, _, s, e), X = (a, s, e) => o(a, f, s, e), Z = (a, s, e) => o(a, O, s, e), aa = (a, s, e) => o(a, S, s, e), sa = (a, s, e) => o(a, L, s, e), ea = (a, s, e) => o(a, F, s, e), ta = (a, s, e) => o(a, u, s, e), ra = (a, s, e) => o(a, y, s, e), ma = (a, s, e) => o(a, A, s, e), ia = (a, s, e) => o(a, N, s, e), n = (a, s, e) => e(a, JSON.stringify(s)), g = (a, s) => Promise.all([n(v, a.actors, s), n(I, a.classes, s), n(D, a.skills, s), n(_, a.items, s), n(f, a.weapons, s), n(O, a.armors, s), n(S, a.enemies, s), n(L, a.troops, s), n(F, a.states, s), n(u, a.animations, s), n(y, a.tilesets, s), n(A, a.commonEvents, s), n(N, a.mapInfos, s)]), Oa = (a) => ({
  main: na(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), na = (a) => {
  const s = [a.actor, a.armor, a.classes, a.commonEvent, a.enemies, a.item, a.skill, a.state, a.troop, a.weapon, a.mapInfo].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, la = (a, s, e, t) => e(da(a)).then(((r) => oa(r, a, s, t))).catch((() => p(a, s.fileNotFound))), oa = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? {
      map: r,
      filename: C(s),
      editingName: s.name
    } : p(s, e.invalidStructure);
  } catch {
    return p(s, e.jsonParseError);
  }
}, da = (a) => `Map${T(a.id)}.json`, C = (a) => `Map${T(a.id)}`, p = (a, s) => ({
  map: null,
  message: s,
  filename: C(a),
  editingName: a.name
}), ua = (a, s, e, t) => w(a, s, e, t, ((r) => r.map)), w = async (a, s, e, t, r) => {
  const i = await Promise.all(a.map((async (c) => Ea(c, s, e, r, t))));
  return ca(i);
}, Ea = async (a, s, e, t, r) => {
  const i = await la(a, s, e, r);
  return i.map === null ? i : { editingName: i.editingName, filename: i.filename, map: t(i) };
}, ca = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({ filename: s.filename, message: s.message, map: null, editingName: s.editingName })))
}), pa = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), G = (a, s) => Promise.all(a.map(((e) => pa(e, s)))), Ra = async (a, s, e) => M(e, a, {
  readMap: Ma,
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
}, s, (() => [])), Ma = (a) => a.map, l = (a) => a, Ta = (a, s, e, t) => M(a, s, t, e, (() => [])), ga = (a, s, e, t) => M(a, s, t, e, (() => null)), M = async (a, s, e, t, r) => {
  const [i, c, h, P, b, j, B, W, J, U, V, x, E, K] = await Promise.all([ma(a, s, t.validateCommonEvent), sa(a, s, t.validateTroop), aa(a, s, t.validateEnemy), Y(a, s, t.validateClass), q(a, s, t.validateSkill), Q(a, s, t.validateItem), X(a, s, t.validateWeapon), Z(a, s, t.validateArmor), ea(a, s, t.validateState), H(a, s, t.validateActor), ta(a, s, t.validateAnimation), ra(a, s, t.validateTileset), ia(a, s, t.validateMapInfo), $(a, s, {
    validateSystemMz: t.validateSystem,
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: E.success ? await Aa(E.data, a, e, s, t.validateMap) : Ia(E),
    actor: d(U, a, e.readActors, r),
    armor: d(W, a, e.readArmors, r),
    classes: d(P, a, e.readClasses, r),
    commonEvent: d(i, a, e.readCommonEvents, r),
    enemies: d(h, a, e.readEnemies, r),
    item: d(j, a, e.readItems, r),
    mapInfo: E,
    skill: d(b, a, e.readSkills, r),
    state: d(J, a, e.readStates, r),
    system: Sa(K, a, e.readSystem),
    troop: d(c, a, e.readTroops, r),
    weapon: d(B, a, e.readWeapons, r),
    animations: d(V, a, e.readAnimations, r),
    tilesets: d(x, a, e.readTilesets, r)
  };
}, Ia = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Aa = async (a, s, e, t, r) => await w(a, s, (async (i) => t(i)), r, ((i) => e.readMap(i))), Sa = (a, s, e) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: e(a.system, R)
    };
  } catch {
    return { message: s.dataConvertError, system: null };
  }
}, d = (a, s, e, t) => {
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
}, Ca = (a) => a, k = (a, s) => s(R, JSON.stringify(a)), wa = (a, s, e) => Promise.all([g(_a(a), e), k(a.system, e), G(s.validMaps, e)]).then((() => {
})), Ga = (a, s) => {
  const e = [g(Na(a), s), G(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(k(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, m = (a) => [null, ...a], _a = (a) => ({
  actors: m(a.actors),
  classes: m(a.classes),
  skills: m(a.skills),
  items: m(a.items),
  weapons: m(a.weapons),
  armors: m(a.armors),
  enemies: m(a.enemies),
  troops: m(a.troops),
  states: m(a.states),
  animations: m(a.animations),
  tilesets: m(a.tilesets),
  commonEvents: m(a.commonEvents),
  mapInfos: m(a.mapInfos)
}), Na = (a) => ({
  actors: m(a.actor.data),
  classes: m(a.classes.data),
  skills: m(a.skill.data),
  items: m(a.item.data),
  weapons: m(a.weapon.data),
  armors: m(a.armor.data),
  enemies: m(a.enemies.data),
  troops: m(a.troop.data),
  states: m(a.state.data),
  animations: m(a.animations.data),
  tilesets: m(a.tilesets.data),
  commonEvents: m(a.commonEvent.data),
  mapInfos: m(a.mapInfo.data)
}), ka = "data", ha = "img", Pa = "audio", ba = "js", ja = "battlebacks1", Ba = "battlebacks2", Wa = "characters", Ja = "enemies", Ua = "faces", Va = "parallaxes", xa = "pictures", Ka = "sv_actors", $a = "sv_enemies", za = "system", Ha = "tilesets", Ya = "titles1", qa = "titles2";
export {
  v as FILENAME_ACTORS,
  u as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  I as FILENAME_CLASSES,
  A as FILENAME_COMMON_EVENTS,
  S as FILENAME_ENEMIES,
  _ as FILENAME_ITEMS,
  N as FILENAME_MAP_INFOS,
  D as FILENAME_SKILLS,
  F as FILENAME_STATES,
  R as FILENAME_SYSTEM,
  y as FILENAME_TILESET,
  L as FILENAME_TROOPS,
  f as FILENAME_WEAPONS,
  Pa as FOLDER_AUDIO,
  ya as FOLDER_AUDIO_BGM,
  va as FOLDER_AUDIO_BGS,
  fa as FOLDER_AUDIO_ME,
  La as FOLDER_AUDIO_SE,
  ka as FOLDER_DATA,
  ha as FOLDER_IMG,
  ja as FOLDER_IMG_BATTLEBACK1,
  Ba as FOLDER_IMG_BATTLEBACK2,
  Wa as FOLDER_IMG_CHACTERS,
  Ja as FOLDER_IMG_ENEMIES,
  Ua as FOLDER_IMG_FACES,
  Va as FOLDER_IMG_PARALLACES,
  xa as FOLDER_IMG_PICTURES,
  Ka as FOLDER_IMG_SV_ACTORS,
  $a as FOLDER_IMG_SV_ENEMIES,
  za as FOLDER_IMG_SYSTEM,
  Ha as FOLDER_IMG_TILESETS,
  Ya as FOLDER_IMG_TITLES1,
  qa as FOLDER_IMG_TITLES2,
  ba as FOLDER_JS,
  Ca as defineGameDataReadHandlers,
  H as readActorData,
  Ta as readAllGameDataWithArrayFallback,
  ga as readAllGameDataWithNullFallback,
  Ra as readAllRawGameData,
  ta as readAnimationData,
  Z as readArmorData,
  o as readArrayData,
  Y as readClassData,
  ma as readCommonEventData,
  aa as readEnemyData,
  Q as readItemData,
  la as readMapFileFromInfo,
  ua as readMapFilesFromInfo,
  w as readMapFilesFromInfoEx,
  ia as readMapInfoData,
  q as readSkillData,
  ea as readStateData,
  $ as readSystemData,
  ra as readTilesetData,
  sa as readTroopData,
  X as readWeaponData,
  Oa as summarizeReadErrors,
  wa as writeBundleData,
  g as writeMainData,
  pa as writeMapData,
  G as writeMapFiles,
  Ga as writeRawGameData,
  k as writeSystemData
};
