import { d as y, h as O, b as v, f as T, F as R, i as C, j as g, m as G, g as h, c as k, a as P, e as b, k as w, r as B, l as j } from "../shared/system.es.js";
import { a as M } from "../shared/make.es3.js";
const Ea = "bgm", da = "se", oa = "me", ca = "bgs", l = async (a, e, s, r) => s(e).then(((t) => U(t, e, a, r))).catch((() => ({ succcess: !1, fileName: e, data: [], error: a.jsonParseError }))), U = (a, e, s, r) => {
  try {
    const t = JSON.parse(a);
    return Array.isArray(t) ? { succcess: !0, fileName: e, data: t.filter(r), error: "" } : { succcess: !1, fileName: e, data: [], error: s.notArray };
  } catch {
    return {
      succcess: !1,
      fileName: e,
      data: [],
      error: s.jsonParseError
    };
  }
}, W = (a, e, s) => l(a, P, e, s), V = (a, e, s) => l(a, y, e, s), x = (a, e, s) => l(a, C, e, s), K = (a, e, s) => l(a, T, e, s), J = (a, e, s) => l(a, k, e, s), Y = (a, e, s) => l(a, b, e, s), $ = (a, e, s) => l(a, v, e, s), z = (a, e, s) => l(a, h, e, s), H = (a, e, s) => l(a, g, e, s), Ma = (a, e, s) => l(a, w, e, s), Aa = (a, e, s) => l(a, G, e, s), q = (a, e, s) => l(a, O, e, s), Q = (a, e, s) => l(a, R, e, s), X = (a, e, s, r) => s(aa(a)).then(((t) => Z(t, a, e, r))).catch((() => o(a, e.fileNotFound))), Z = (a, e, s, r) => {
  try {
    const t = JSON.parse(a);
    return r(t) ? { map: t, filename: A(e), editingName: e.name } : o(e, s.invalidStructure);
  } catch {
    return o(e, s.jsonParseError);
  }
}, aa = (a) => `Map${M(a.id)}.json`, A = (a) => `Map${M(a.id)}`, o = (a, e) => ({ map: null, message: e, filename: A(a), editingName: a.name }), Ia = (a, e, s, r) => I(a, e, s, r, ((t) => t.map)), I = async (a, e, s, r, t) => {
  const m = await Promise.all(a.map((async (d) => ea(d, e, s, t, r))));
  return sa(m);
}, ea = async (a, e, s, r, t) => {
  const m = await X(a, e, s, t);
  return m.map === null ? m : {
    editingName: m.editingName,
    filename: m.filename,
    map: r(m)
  };
}, sa = (a) => ({ info: { success: !0 }, validMaps: a.filter(((e) => e.map !== null)), invalidMaps: a.filter(((e) => e.map === null)).map(((e) => ({
  filename: e.filename,
  message: e.message,
  map: null,
  editingName: e.editingName
}))) }), Sa = async (a, e, s) => c(s, a, {
  readMap: ra,
  readActors: i,
  readArmors: i,
  readClasss: i,
  readCommonEvents: i,
  readEnemys: i,
  readItems: i,
  readSkills: i,
  readStates: i,
  readSystem: i,
  readTroops: i,
  readWeapons: i
}, e, (() => [])), ra = (a) => a.map, i = (a) => a, _a = (a, e, s, r) => c(a, e, r, s, (() => [])), pa = (a, e, s, r) => c(a, e, r, s, (() => null)), c = async (a, e, s, r, t) => {
  const [m, d, S, _, p, N, F, L, f, u, E, D] = await Promise.all([W(a, e, r.validateActor), V(a, e, r.validateClass), x(a, e, r.validateSkill), K(a, e, r.validateItem), J(a, e, r.validateWeapon), Y(a, e, r.validateArmor), $(a, e, r.validateEnemy), z(a, e, r.validateTroop), H(a, e, r.validateState), q(a, e, r.validateCommonEvent), Q(a, e, r.validateMapInfo), B(a, e, {
    validateSystemMz: r.validateSystem,
    validateSystemMv: r.validateSystemMV
  })]);
  return {
    mapFiles: E.succcess ? await ma(E.data, a, s, e, r.validateMap) : ta(E),
    actor: n(m, a, s.readActors, t),
    armor: n(N, a, s.readArmors, t),
    classes: n(d, a, s.readClasss, t),
    commonEvent: n(u, a, s.readCommonEvents, t),
    enemies: n(F, a, s.readEnemys, t),
    item: n(_, a, s.readItems, t),
    mapInfo: E,
    skill: n(S, a, s.readSkills, t),
    state: n(f, a, s.readStates, t),
    system: la(D, a, s.readSystem),
    troop: n(L, a, s.readTroops, t),
    weapon: n(p, a, s.readWeapons, t)
  };
}, ta = (a) => ({ info: {
  filename: a.fileName,
  message: a.error,
  success: !1
}, validMaps: [], invalidMaps: [] }), ma = async (a, e, s, r, t) => await I(a, e, (async (m) => r(m)), t, ((m) => s.readMap(m))), la = (a, e, s) => {
  if (a.system === null) return {
    message: a.message,
    system: null
  };
  try {
    return { message: a.message, system: s(a.system, j) };
  } catch {
    return { message: e.dataConvertError, system: null };
  }
}, n = (a, e, s, r) => {
  if (!a.succcess) return {
    fileName: a.fileName,
    succcess: !1,
    error: a.error,
    data: r()
  };
  try {
    return { fileName: a.fileName, succcess: !0, error: "", data: s(a.data, a.fileName) };
  } catch {
    return {
      fileName: a.fileName,
      succcess: !1,
      error: e.dataConvertError,
      data: r()
    };
  }
}, Na = "battlebacks1", Fa = "battlebacks2", La = "characters", fa = "enemies", ua = "faces", Da = "parallaxes", ya = "pictures", Oa = "sv_actors", va = "sv_enemies", Ta = "system", Ra = "tilesets", Ca = "titles1", ga = "titles2";
export {
  P as FILENAME_ACTORS,
  w as FILENAME_ANIMATIONS,
  b as FILENAME_ARMORS,
  y as FILENAME_CLASSES,
  O as FILENAME_COMMON_EVENTS,
  v as FILENAME_ENEMIES,
  T as FILENAME_ITEMS,
  R as FILENAME_MAP_INFOS,
  C as FILENAME_SKILLS,
  g as FILENAME_STATES,
  j as FILENAME_SYSTEM,
  G as FILENAME_TILESET,
  h as FILENAME_TROOPS,
  k as FILENAME_WEAPONS,
  Ea as FOLDER_AUDIO_BGM,
  ca as FOLDER_AUDIO_BGS,
  oa as FOLDER_AUDIO_ME,
  da as FOLDER_AUDIO_SE,
  Na as FOLDER_IMG_BATTLEBACK1,
  Fa as FOLDER_IMG_BATTLEBACK2,
  La as FOLDER_IMG_CHACTERS,
  fa as FOLDER_IMG_ENEMIES,
  ua as FOLDER_IMG_FACES,
  Da as FOLDER_IMG_PARALLACES,
  ya as FOLDER_IMG_PICTURES,
  Oa as FOLDER_IMG_SV_ACTORS,
  va as FOLDER_IMG_SV_ENEMIES,
  Ta as FOLDER_IMG_SYSTEM,
  Ra as FOLDER_IMG_TILESETS,
  Ca as FOLDER_IMG_TITLES1,
  ga as FOLDER_IMG_TITLES2,
  W as readActorData,
  _a as readAllGameDataAsArrayFallback,
  pa as readAllGameDataAsNullFallback,
  Sa as readAllRowGameData,
  Ma as readAnimationData,
  Y as readArmorData,
  l as readArrayData,
  V as readClassData,
  q as readCommonEventData,
  $ as readEnemyData,
  K as readItemData,
  X as readMapFileFromInfo,
  Ia as readMapFilesFromInfo,
  I as readMapFilesFromInfoEx,
  Q as readMapInfoData,
  x as readSkillData,
  H as readStateData,
  B as readSystemData,
  Aa as readTilesetData,
  z as readTroopData,
  J as readWeaponData
};
