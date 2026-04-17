import { d as o, h as _, b as c, f as I, F as l, i as M, j as A, m as F, g as L, c as D, a as S, e as N, k as p } from "../shared/system.es.js";
import { l as Na, r as pa } from "../shared/system.es.js";
import { a as O } from "../shared/make.es3.js";
const b = "bgm", j = "se", k = "me", w = "bgs", m = async (a, s, e, t) => e(s).then(((r) => R(r, s, a, t))).catch((() => ({ succcess: !1, fileName: s, data: [], error: a.jsonParseError }))), R = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? { succcess: !0, fileName: s, data: r.filter(t), error: "" } : { succcess: !1, fileName: s, data: [], error: e.notArray };
  } catch {
    return {
      succcess: !1,
      fileName: s,
      data: [],
      error: e.jsonParseError
    };
  }
}, B = (a, s, e) => m(a, S, s, e), U = (a, s, e) => m(a, o, s, e), x = (a, s, e) => m(a, M, s, e), J = (a, s, e) => m(a, I, s, e), K = (a, s, e) => m(a, D, s, e), V = (a, s, e) => m(a, N, s, e), W = (a, s, e) => m(a, c, s, e), Y = (a, s, e) => m(a, L, s, e), $ = (a, s, e) => m(a, A, s, e), H = (a, s, e) => m(a, p, s, e), q = (a, s, e) => m(a, F, s, e), z = (a, s, e) => m(a, _, s, e), Q = (a, s, e) => m(a, l, s, e), E = (a, s, e) => e(a, JSON.stringify(s)), X = (a, s) => Promise.all([E(S, a.actors, s), E(o, a.classes, s), E(M, a.skills, s), E(I, a.items, s), E(D, a.weapons, s), E(N, a.armors, s), E(c, a.enemies, s), E(L, a.troops, s), E(A, a.states, s), E(p, a.animations, s), E(F, a.tilesets, s), E(_, a.commonEvents, s), E(l, a.mapInfos, s)]), Z = (a) => ({
  main: T(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), T = (a) => {
  const s = [a.actor, a.armor, a.classes, a.commonEvent, a.enemies, a.item, a.skill, a.state, a.troop, a.weapon, a.mapInfo].filter(((e) => !e.succcess)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, u = (a, s, e, t) => e(g(a)).then(((r) => y(r, a, s, t))).catch((() => n(a, s.fileNotFound))), y = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? {
      map: r,
      filename: d(s),
      editingName: s.name
    } : n(s, e.invalidStructure);
  } catch {
    return n(s, e.jsonParseError);
  }
}, g = (a) => `Map${O(a.id)}.json`, d = (a) => `Map${O(a.id)}`, n = (a, s) => ({
  map: null,
  message: s,
  filename: d(a),
  editingName: a.name
}), aa = (a, s, e, t) => G(a, s, e, t, ((r) => r.map)), G = async (a, s, e, t, r) => {
  const i = await Promise.all(a.map((async (f) => C(f, s, e, r, t))));
  return P(i);
}, C = async (a, s, e, t, r) => {
  const i = await u(a, s, e, r);
  return i.map === null ? i : { editingName: i.editingName, filename: i.filename, map: t(i) };
}, P = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({ filename: s.filename, message: s.message, map: null, editingName: s.editingName })))
}), sa = "data", ea = "img", ra = "audio", ta = "js", Ea = "battlebacks1", ma = "battlebacks2", ia = "characters", na = "enemies", oa = "faces", _a = "parallaxes", ca = "pictures", Ia = "sv_actors", la = "sv_enemies", Ma = "system", Aa = "tilesets", Fa = "titles1", La = "titles2";
export {
  S as FILENAME_ACTORS,
  p as FILENAME_ANIMATIONS,
  N as FILENAME_ARMORS,
  o as FILENAME_CLASSES,
  _ as FILENAME_COMMON_EVENTS,
  c as FILENAME_ENEMIES,
  I as FILENAME_ITEMS,
  l as FILENAME_MAP_INFOS,
  M as FILENAME_SKILLS,
  A as FILENAME_STATES,
  Na as FILENAME_SYSTEM,
  F as FILENAME_TILESET,
  L as FILENAME_TROOPS,
  D as FILENAME_WEAPONS,
  ra as FOLDER_AUDIO,
  b as FOLDER_AUDIO_BGM,
  w as FOLDER_AUDIO_BGS,
  k as FOLDER_AUDIO_ME,
  j as FOLDER_AUDIO_SE,
  sa as FOLDER_DATA,
  ea as FOLDER_IMG,
  Ea as FOLDER_IMG_BATTLEBACK1,
  ma as FOLDER_IMG_BATTLEBACK2,
  ia as FOLDER_IMG_CHACTERS,
  na as FOLDER_IMG_ENEMIES,
  oa as FOLDER_IMG_FACES,
  _a as FOLDER_IMG_PARALLACES,
  ca as FOLDER_IMG_PICTURES,
  Ia as FOLDER_IMG_SV_ACTORS,
  la as FOLDER_IMG_SV_ENEMIES,
  Ma as FOLDER_IMG_SYSTEM,
  Aa as FOLDER_IMG_TILESETS,
  Fa as FOLDER_IMG_TITLES1,
  La as FOLDER_IMG_TITLES2,
  ta as FOLDER_JS,
  Z as correctError,
  B as readActorData,
  H as readAnimationData,
  V as readArmorData,
  m as readArrayData,
  U as readClassData,
  z as readCommonEventData,
  W as readEnemyData,
  J as readItemData,
  u as readMapFileFromInfo,
  aa as readMapFilesFromInfo,
  G as readMapFilesFromInfoEx,
  Q as readMapInfoData,
  x as readSkillData,
  $ as readStateData,
  pa as readSystemData,
  q as readTilesetData,
  Y as readTroopData,
  K as readWeaponData,
  E as writeData,
  X as writeMainData
};
