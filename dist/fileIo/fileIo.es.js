import { d as A, h as S, b as _, f as N, F as D, i as F, j as y, m as L, g as f, c as v, a as O, e as u, k as R, r as z, l as T } from "../shared/system.es.js";
import { a as g } from "../shared/make.es3.js";
const La = "bgm", fa = "se", va = "me", Oa = "bgs", d = async (a, s, e, t) => e(s).then(((r) => H(r, s, a, t))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), H = (a, s, e, t) => {
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
}, Y = (a, s, e) => d(a, O, s, e), q = (a, s, e) => d(a, A, s, e), Q = (a, s, e) => d(a, F, s, e), X = (a, s, e) => d(a, N, s, e), Z = (a, s, e) => d(a, v, s, e), aa = (a, s, e) => d(a, u, s, e), sa = (a, s, e) => d(a, _, s, e), ea = (a, s, e) => d(a, f, s, e), ta = (a, s, e) => d(a, y, s, e), ra = (a, s, e) => d(a, R, s, e), ma = (a, s, e) => d(a, L, s, e), ia = (a, s, e) => d(a, S, s, e), na = (a, s, e) => d(a, D, s, e), l = (a, s, e) => e(a, JSON.stringify(s)), C = (a, s) => Promise.all([l(O, a.actors, s), l(A, a.classes, s), l(F, a.skills, s), l(N, a.items, s), l(v, a.weapons, s), l(u, a.armors, s), l(_, a.enemies, s), l(f, a.troops, s), l(y, a.states, s), l(R, a.animations, s), l(L, a.tilesets, s), l(S, a.commonEvents, s), l(D, a.mapInfos, s)]), ua = (a) => ({
  main: la(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), la = (a) => {
  const s = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, oa = (a, s, e, t) => e(Ea(a)).then(((r) => da(r, a, s, t))).catch((() => M(a, s.fileNotFound))), da = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? {
      map: r,
      filename: w(s),
      editingName: s.name
    } : M(s, e.invalidStructure);
  } catch {
    return M(s, e.jsonParseError);
  }
}, Ea = (a) => `Map${g(a.id)}.json`, w = (a) => `Map${g(a.id)}`, M = (a, s) => ({
  map: null,
  message: s,
  filename: w(a),
  editingName: a.name
}), Ra = (a, s, e, t) => G(a, s, e, t, ((r) => r.map)), G = async (a, s, e, t, r) => {
  const n = await Promise.all(a.map((async (p) => ca(p, s, e, r, t))));
  return pa(n);
}, ca = async (a, s, e, t, r) => {
  const n = await oa(a, s, e, r);
  return n.map === null ? n : { editingName: n.editingName, filename: n.filename, map: t(n) };
}, pa = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({ filename: s.filename, message: s.message, map: null, editingName: s.editingName })))
}), Ma = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), k = (a, s) => Promise.all(a.map(((e) => Ma(e, s)))), Ta = async (a, s, e) => I(a, s, {
  readMap: Ia,
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
}, e, (() => [])), Ia = (a) => a.map, o = (a) => a, ga = (a, s, e, t) => I(a, s, t, e, (() => [])), Ca = (a, s, e, t) => I(a, s, t, e, (() => null)), I = async (a, s, e, t, r) => {
  const [n, p, P, b, j, B, W, J, U, V, x, K, c, $] = await Promise.all([ia(a, s, ((m) => t.validateCommonEvent(m))), ea(a, s, ((m) => t.validateTroop(m))), sa(a, s, ((m) => t.validateEnemy(m))), q(a, s, ((m) => t.validateClass(m))), Q(a, s, ((m) => t.validateSkill(m))), X(a, s, ((m) => t.validateItem(m))), Z(a, s, ((m) => t.validateWeapon(m))), aa(a, s, ((m) => t.validateArmor(m))), ta(a, s, ((m) => t.validateState(m))), Y(a, s, ((m) => t.validateActor(m))), ra(a, s, ((m) => t.validateAnimation(m))), ma(a, s, ((m) => t.validateTileset(m))), na(a, s, ((m) => t.validateMapInfo(m))), z(a, s, {
    validateSystemMz: (m) => t.validateSystem(m),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: c.success ? await Sa(c.data, a, e, s, t.validateMap) : Aa(c),
    actors: E(V, a, e.readActors, r),
    armors: E(J, a, e.readArmors, r),
    classes: E(b, a, e.readClasses, r),
    commonEvents: E(n, a, e.readCommonEvents, r),
    enemies: E(P, a, e.readEnemies, r),
    items: E(B, a, e.readItems, r),
    mapInfos: c,
    skills: E(j, a, e.readSkills, r),
    states: E(U, a, e.readStates, r),
    system: _a($, a, e.readSystem),
    troops: E(p, a, e.readTroops, r),
    weapons: E(W, a, e.readWeapons, r),
    animations: E(x, a, e.readAnimations, r),
    tilesets: E(K, a, e.readTilesets, r)
  };
}, Aa = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Sa = async (a, s, e, t, r) => await G(a, s, (async (n) => t(n)), r, ((n) => e.readMap(n))), _a = (a, s, e) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: e(a.system, T)
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
}, wa = (a) => a, h = (a, s) => s(T, JSON.stringify(a)), Ga = (a, s, e) => Promise.all([C(Na(a), e), h(a.system, e), k(s.validMaps, e)]).then((() => {
})), ka = (a, s) => {
  const e = [C(Da(a), s), k(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(h(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, i = (a) => [null, ...a], Na = (a) => ({
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
}), Da = (a) => ({
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
}), ha = "data", Pa = "img", ba = "audio", ja = "js", Ba = "battlebacks1", Wa = "battlebacks2", Ja = "characters", Ua = "enemies", Va = "faces", xa = "parallaxes", Ka = "pictures", $a = "sv_actors", za = "sv_enemies", Ha = "system", Ya = "tilesets", qa = "titles1", Qa = "titles2";
export {
  O as FILENAME_ACTORS,
  R as FILENAME_ANIMATIONS,
  u as FILENAME_ARMORS,
  A as FILENAME_CLASSES,
  S as FILENAME_COMMON_EVENTS,
  _ as FILENAME_ENEMIES,
  N as FILENAME_ITEMS,
  D as FILENAME_MAP_INFOS,
  F as FILENAME_SKILLS,
  y as FILENAME_STATES,
  T as FILENAME_SYSTEM,
  L as FILENAME_TILESET,
  f as FILENAME_TROOPS,
  v as FILENAME_WEAPONS,
  ba as FOLDER_AUDIO,
  La as FOLDER_AUDIO_BGM,
  Oa as FOLDER_AUDIO_BGS,
  va as FOLDER_AUDIO_ME,
  fa as FOLDER_AUDIO_SE,
  ha as FOLDER_DATA,
  Pa as FOLDER_IMG,
  Ba as FOLDER_IMG_BATTLEBACK1,
  Wa as FOLDER_IMG_BATTLEBACK2,
  Ja as FOLDER_IMG_CHACTERS,
  Ua as FOLDER_IMG_ENEMIES,
  Va as FOLDER_IMG_FACES,
  xa as FOLDER_IMG_PARALLACES,
  Ka as FOLDER_IMG_PICTURES,
  $a as FOLDER_IMG_SV_ACTORS,
  za as FOLDER_IMG_SV_ENEMIES,
  Ha as FOLDER_IMG_SYSTEM,
  Ya as FOLDER_IMG_TILESETS,
  qa as FOLDER_IMG_TITLES1,
  Qa as FOLDER_IMG_TITLES2,
  ja as FOLDER_JS,
  wa as defineGameDataReadHandlers,
  Y as readActorData,
  ga as readAllGameDataWithArrayFallback,
  Ca as readAllGameDataWithNullFallback,
  Ta as readAllRawGameData,
  ra as readAnimationData,
  aa as readArmorData,
  d as readArrayData,
  q as readClassData,
  ia as readCommonEventData,
  sa as readEnemyData,
  X as readItemData,
  oa as readMapFileFromInfo,
  Ra as readMapFilesFromInfo,
  G as readMapFilesFromInfoEx,
  na as readMapInfoData,
  Q as readSkillData,
  ta as readStateData,
  z as readSystemData,
  ma as readTilesetData,
  ea as readTroopData,
  Z as readWeaponData,
  ua as summarizeReadErrors,
  Ga as writeBundleData,
  C as writeMainData,
  Ma as writeMapData,
  k as writeMapFiles,
  ka as writeRawGameData,
  h as writeSystemData
};
