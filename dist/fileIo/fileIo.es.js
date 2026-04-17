import { d as o, h as _, b as c, f as I, F as l, i as M, j as A, m as S, g as F, c as L, a as N, e as p, k as D } from "../shared/system.es.js";
import { l as Sa, r as Fa } from "../shared/system.es.js";
import { a as d } from "../shared/make.es3.js";
const b = "bgm", k = "se", w = "me", B = "bgs", E = async (a, s, e, t) => e(s).then(((r) => T(r, s, a, t))).catch((() => ({ succcess: !1, fileName: s, data: [], error: a.jsonParseError }))), T = (a, s, e, t) => {
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
}, j = (a, s, e) => E(a, N, s, e), U = (a, s, e) => E(a, o, s, e), x = (a, s, e) => E(a, M, s, e), J = (a, s, e) => E(a, I, s, e), K = (a, s, e) => E(a, L, s, e), V = (a, s, e) => E(a, p, s, e), W = (a, s, e) => E(a, c, s, e), Y = (a, s, e) => E(a, F, s, e), $ = (a, s, e) => E(a, A, s, e), H = (a, s, e) => E(a, D, s, e), q = (a, s, e) => E(a, S, s, e), z = (a, s, e) => E(a, _, s, e), Q = (a, s, e) => E(a, l, s, e), m = (a, s, e) => e(a, JSON.stringify(s)), X = (a, s) => Promise.all([m(N, a.actors, s), m(o, a.classes, s), m(M, a.skills, s), m(I, a.items, s), m(L, a.weapons, s), m(p, a.armors, s), m(c, a.enemies, s), m(F, a.troops, s), m(A, a.states, s), m(D, a.animations, s), m(S, a.tilesets, s), m(_, a.commonEvents, s), m(l, a.mapInfos, s)]), Z = (a) => ({
  main: u(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), u = (a) => {
  const s = [a.actor, a.armor, a.classes, a.commonEvent, a.enemies, a.item, a.skill, a.state, a.troop, a.weapon, a.mapInfo].filter(((e) => !e.succcess)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, R = (a, s, e, t) => e(g(a)).then(((r) => y(r, a, s, t))).catch((() => n(a, s.fileNotFound))), y = (a, s, e, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? {
      map: r,
      filename: f(s),
      editingName: s.name
    } : n(s, e.invalidStructure);
  } catch {
    return n(s, e.jsonParseError);
  }
}, g = (a) => `Map${d(a.id)}.json`, f = (a) => `Map${d(a.id)}`, n = (a, s) => ({
  map: null,
  message: s,
  filename: f(a),
  editingName: a.name
}), aa = (a, s, e, t) => G(a, s, e, t, ((r) => r.map)), G = async (a, s, e, t, r) => {
  const i = await Promise.all(a.map((async (O) => C(O, s, e, r, t))));
  return P(i);
}, C = async (a, s, e, t, r) => {
  const i = await R(a, s, e, r);
  return i.map === null ? i : { editingName: i.editingName, filename: i.filename, map: t(i) };
}, P = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({ filename: s.filename, message: s.message, map: null, editingName: s.editingName })))
}), sa = "battlebacks1", ea = "battlebacks2", ra = "characters", ta = "enemies", ma = "faces", Ea = "parallaxes", ia = "pictures", na = "sv_actors", oa = "sv_enemies", _a = "system", ca = "tilesets", Ia = "titles1", la = "titles2";
export {
  N as FILENAME_ACTORS,
  D as FILENAME_ANIMATIONS,
  p as FILENAME_ARMORS,
  o as FILENAME_CLASSES,
  _ as FILENAME_COMMON_EVENTS,
  c as FILENAME_ENEMIES,
  I as FILENAME_ITEMS,
  l as FILENAME_MAP_INFOS,
  M as FILENAME_SKILLS,
  A as FILENAME_STATES,
  Sa as FILENAME_SYSTEM,
  S as FILENAME_TILESET,
  F as FILENAME_TROOPS,
  L as FILENAME_WEAPONS,
  b as FOLDER_AUDIO_BGM,
  B as FOLDER_AUDIO_BGS,
  w as FOLDER_AUDIO_ME,
  k as FOLDER_AUDIO_SE,
  sa as FOLDER_IMG_BATTLEBACK1,
  ea as FOLDER_IMG_BATTLEBACK2,
  ra as FOLDER_IMG_CHACTERS,
  ta as FOLDER_IMG_ENEMIES,
  ma as FOLDER_IMG_FACES,
  Ea as FOLDER_IMG_PARALLACES,
  ia as FOLDER_IMG_PICTURES,
  na as FOLDER_IMG_SV_ACTORS,
  oa as FOLDER_IMG_SV_ENEMIES,
  _a as FOLDER_IMG_SYSTEM,
  ca as FOLDER_IMG_TILESETS,
  Ia as FOLDER_IMG_TITLES1,
  la as FOLDER_IMG_TITLES2,
  Z as correctError,
  j as readActorData,
  H as readAnimationData,
  V as readArmorData,
  E as readArrayData,
  U as readClassData,
  z as readCommonEventData,
  W as readEnemyData,
  J as readItemData,
  R as readMapFileFromInfo,
  aa as readMapFilesFromInfo,
  G as readMapFilesFromInfoEx,
  Q as readMapInfoData,
  x as readSkillData,
  $ as readStateData,
  Fa as readSystemData,
  q as readTilesetData,
  Y as readTroopData,
  K as readWeaponData,
  m as writeData,
  X as writeMainData
};
