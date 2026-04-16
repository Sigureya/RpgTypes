import { d as _, h as L, b as O, f as g, F as T, i as C, j as h, m as R, g as k, c as P, a as w, e as b, k as j, r as G, l as W } from "../shared/system.es.js";
import { a as A } from "../shared/make.es3.js";
const da = "bgm", oa = "se", ca = "me", Ea = "bgs", l = async (a, e, s, r) => s(e).then(((t) => U(t, e, a, r))).catch((() => ({
  succcess: !1,
  fileName: e,
  data: [],
  error: a.jsonParseError
}))), U = (a, e, s, r) => {
  try {
    const t = JSON.parse(a);
    return Array.isArray(t) ? { succcess: !0, fileName: e, data: t.filter(r), error: "" } : {
      succcess: !1,
      fileName: e,
      data: [],
      error: s.notArray
    };
  } catch {
    return { succcess: !1, fileName: e, data: [], error: s.jsonParseError };
  }
}, x = (a, e, s) => l(a, w, e, s), B = (a, e, s) => l(a, _, e, s), J = (a, e, s) => l(a, C, e, s), V = (a, e, s) => l(a, g, e, s), $ = (a, e, s) => l(a, P, e, s), z = (a, e, s) => l(a, b, e, s), K = (a, e, s) => l(a, O, e, s), Y = (a, e, s) => l(a, k, e, s), q = (a, e, s) => l(a, h, e, s), Aa = (a, e, s) => l(a, j, e, s), Na = (a, e, s) => l(a, R, e, s), H = (a, e, s) => l(a, L, e, s), Q = (a, e, s) => l(a, T, e, s), X = (a, e, s, r) => s(aa(a)).then(((t) => Z(t, a, e, r))).catch((() => c(a, e.fileNotFound))), Z = (a, e, s, r) => {
  try {
    const t = JSON.parse(a);
    return r(t) ? { map: t, filename: N(e), editingName: e.name } : c(e, s.invalidStructure);
  } catch {
    return c(e, s.jsonParseError);
  }
}, aa = (a) => `Map${A(a.id)}.json`, N = (a) => `Map${A(a.id)}`, c = (a, e) => ({ map: null, message: e, filename: N(a), editingName: a.name }), pa = (a, e, s, r) => p(a, e, s, r, ((t) => t.map)), p = async (a, e, s, r, t) => {
  const m = await Promise.all(a.map((async (o) => ea(o, e, s, t, r))));
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
}))) }), Ma = async (a, e, s) => E(s, a, {
  readMap: ra,
  readActors: n,
  readArmors: n,
  readClasss: n,
  readCommonEvents: n,
  readEnemys: n,
  readItems: n,
  readSkills: n,
  readStates: n,
  readSystem: n,
  readTroops: n,
  readWeapons: n
}, e, (() => [])), ra = (a) => a.map, n = (a) => a, ua = (a, e, s, r) => E(a, e, r, s, (() => [])), Sa = (a, e, s, r) => E(a, e, r, s, (() => null)), E = async (a, e, s, r, t) => {
  const [m, o, M, u, S, f, y, I, v, F, d, D] = await Promise.all([x(a, e, r.validateActor), B(a, e, r.validateClass), J(a, e, r.validateSkill), V(a, e, r.validateItem), $(a, e, r.validateWeapon), z(a, e, r.validateArmor), K(a, e, r.validateEnemy), Y(a, e, r.validateTroop), q(a, e, r.validateState), H(a, e, r.validateCommonEvent), Q(a, e, r.validateMapInfo), G(a, e, {
    validateSystemMz: r.validateSystem,
    validateSystemMv: r.validateSystemMV
  })]);
  return {
    mapFiles: d.succcess ? await ma(d.data, a, s, e, r.validateMap) : ta(d),
    actor: i(m, a, s.readActors, t),
    armor: i(f, a, s.readArmors, t),
    classes: i(o, a, s.readClasss, t),
    commonEvent: i(F, a, s.readCommonEvents, t),
    enemies: i(y, a, s.readEnemys, t),
    item: i(u, a, s.readItems, t),
    mapInfo: d,
    skill: i(M, a, s.readSkills, t),
    state: i(v, a, s.readStates, t),
    system: la(D, a, s.readSystem),
    troop: i(I, a, s.readTroops, t),
    weapon: i(S, a, s.readWeapons, t)
  };
}, ta = (a) => ({ info: {
  filename: a.fileName,
  message: a.error,
  success: !1
}, validMaps: [], invalidMaps: [] }), ma = async (a, e, s, r, t) => await p(a, e, (async (m) => r(m)), t, ((m) => s.readMap(m))), la = (a, e, s) => {
  if (a.system === null) return {
    message: a.message,
    system: null
  };
  try {
    return { message: a.message, system: s(a.system, W) };
  } catch {
    return { message: e.dataConvertError, system: null };
  }
}, i = (a, e, s, r) => {
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
};
export {
  w as FILENAME_ACTORS,
  j as FILENAME_ANIMATIONS,
  b as FILENAME_ARMORS,
  _ as FILENAME_CLASSES,
  L as FILENAME_COMMON_EVENTS,
  O as FILENAME_ENEMIES,
  g as FILENAME_ITEMS,
  T as FILENAME_MAP_INFOS,
  C as FILENAME_SKILLS,
  h as FILENAME_STATES,
  W as FILENAME_SYSTEM,
  R as FILENAME_TILESET,
  k as FILENAME_TROOPS,
  P as FILENAME_WEAPONS,
  da as FOLDER_AUDIO_BGM,
  Ea as FOLDER_AUDIO_BGS,
  ca as FOLDER_AUDIO_ME,
  oa as FOLDER_AUDIO_SE,
  x as readActorData,
  ua as readAllGameDataAsArrayFallback,
  Sa as readAllGameDataAsNullFallback,
  Ma as readAllRowGameData,
  Aa as readAnimationData,
  z as readArmorData,
  l as readArrayData,
  B as readClassData,
  H as readCommonEventData,
  K as readEnemyData,
  V as readItemData,
  X as readMapFileFromInfo,
  pa as readMapFilesFromInfo,
  p as readMapFilesFromInfoEx,
  Q as readMapInfoData,
  J as readSkillData,
  q as readStateData,
  G as readSystemData,
  Na as readTilesetData,
  Y as readTroopData,
  $ as readWeaponData
};
