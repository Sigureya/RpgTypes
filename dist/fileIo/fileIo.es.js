import { d as E, h as p, b as c, f as _, F as I, i as d, j as M, m as F, g as D, c as S, a as A, e as L, k as N, l as u } from "../shared/system.es.js";
import { r as ua } from "../shared/system.es.js";
import { a as f } from "../shared/make.es3.js";
const K = "bgm", V = "se", $ = "me", W = "bgs", n = async (a, s, e, m) => e(s).then(((r) => G(r, s, a, m))).catch((() => ({
  success: !1,
  fileName: s,
  data: [],
  error: a.jsonParseError
}))), G = (a, s, e, m) => {
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? { success: !0, fileName: s, data: r.filter(m), error: "" } : {
      success: !1,
      fileName: s,
      data: [],
      error: e.notArray
    };
  } catch {
    return { success: !1, fileName: s, data: [], error: e.jsonParseError };
  }
}, Y = (a, s, e) => n(a, A, s, e), z = (a, s, e) => n(a, E, s, e), H = (a, s, e) => n(a, d, s, e), q = (a, s, e) => n(a, _, s, e), Q = (a, s, e) => n(a, S, s, e), X = (a, s, e) => n(a, L, s, e), Z = (a, s, e) => n(a, c, s, e), aa = (a, s, e) => n(a, D, s, e), sa = (a, s, e) => n(a, M, s, e), ea = (a, s, e) => n(a, N, s, e), ta = (a, s, e) => n(a, F, s, e), ra = (a, s, e) => n(a, p, s, e), ma = (a, s, e) => n(a, I, s, e), i = (a, s, e) => e(a, JSON.stringify(s)), O = (a, s) => Promise.all([i(A, a.actors, s), i(E, a.classes, s), i(d, a.skills, s), i(_, a.items, s), i(S, a.weapons, s), i(L, a.armors, s), i(c, a.enemies, s), i(D, a.troops, s), i(M, a.states, s), i(N, a.animations, s), i(F, a.tilesets, s), i(p, a.commonEvents, s), i(I, a.mapInfos, s)]), ia = (a) => ({
  main: v(a),
  map: a.mapFiles.invalidMaps.map(((s) => ({ fileName: s.filename, error: s.message })))
}), v = (a) => {
  const s = [a.actor, a.armor, a.classes, a.commonEvent, a.enemies, a.item, a.skill, a.state, a.troop, a.weapon, a.mapInfo].filter(((e) => !e.success)).map(((e) => ({
    fileName: e.fileName,
    error: e.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...s] : s;
}, w = (a, s, e, m) => e(P(a)).then(((r) => C(r, a, s, m))).catch((() => l(a, s.fileNotFound))), C = (a, s, e, m) => {
  try {
    const r = JSON.parse(a);
    return m(r) ? {
      map: r,
      filename: R(s),
      editingName: s.name
    } : l(s, e.invalidStructure);
  } catch {
    return l(s, e.jsonParseError);
  }
}, P = (a) => `Map${f(a.id)}.json`, R = (a) => `Map${f(a.id)}`, l = (a, s) => ({
  map: null,
  message: s,
  filename: R(a),
  editingName: a.name
}), na = (a, s, e, m) => h(a, s, e, m, ((r) => r.map)), h = async (a, s, e, m, r) => {
  const o = await Promise.all(a.map((async (g) => k(g, s, e, r, m))));
  return b(o);
}, k = async (a, s, e, m, r) => {
  const o = await w(a, s, e, r);
  return o.map === null ? o : { editingName: o.editingName, filename: o.filename, map: m(o) };
}, b = (a) => ({
  info: { success: !0 },
  validMaps: a.filter(((s) => s.map !== null)),
  invalidMaps: a.filter(((s) => s.map === null)).map(((s) => ({ filename: s.filename, message: s.message, map: null, editingName: s.editingName })))
}), j = (a, s) => s(`${a.filename}.json`, JSON.stringify(a.map)), y = (a, s) => Promise.all(a.map(((e) => j(e, s)))), T = (a, s) => s(u, JSON.stringify(a)), oa = (a, s, e) => Promise.all([O(B(a), e), T(a.system, e), y(s.validMaps, e)]).then((() => {
})), la = (a, s) => {
  const e = [O(J(a), s), y(a.mapFiles.validMaps, s)];
  return a.system.system && e.push(T(a.system.system, s)), Promise.all(e).then((() => {
  }));
}, t = (a) => [null, ...a], B = (a) => ({
  actors: t(a.actors),
  classes: t(a.classes),
  skills: t(a.skills),
  items: t(a.items),
  weapons: t(a.weapons),
  armors: t(a.armors),
  enemies: t(a.enemies),
  troops: t(a.troops),
  states: t(a.states),
  animations: t(a.animations),
  tilesets: t(a.tilesets),
  commonEvents: t(a.commonEvents),
  mapInfos: t(a.mapInfos)
}), J = (a) => ({
  actors: t(a.actor.data),
  classes: t(a.classes.data),
  skills: t(a.skill.data),
  items: t(a.item.data),
  weapons: t(a.weapon.data),
  armors: t(a.armor.data),
  enemies: t(a.enemies.data),
  troops: t(a.troop.data),
  states: t(a.state.data),
  animations: t(a.animations.data),
  tilesets: t(a.tilesets.data),
  commonEvents: t(a.commonEvent.data),
  mapInfos: t(a.mapInfo.data)
}), Ea = "data", pa = "img", ca = "audio", _a = "js", Ia = "battlebacks1", da = "battlebacks2", Ma = "characters", Fa = "enemies", Da = "faces", Sa = "parallaxes", Aa = "pictures", La = "sv_actors", Na = "sv_enemies", fa = "system", Oa = "tilesets", Ra = "titles1", ya = "titles2";
export {
  A as FILENAME_ACTORS,
  N as FILENAME_ANIMATIONS,
  L as FILENAME_ARMORS,
  E as FILENAME_CLASSES,
  p as FILENAME_COMMON_EVENTS,
  c as FILENAME_ENEMIES,
  _ as FILENAME_ITEMS,
  I as FILENAME_MAP_INFOS,
  d as FILENAME_SKILLS,
  M as FILENAME_STATES,
  u as FILENAME_SYSTEM,
  F as FILENAME_TILESET,
  D as FILENAME_TROOPS,
  S as FILENAME_WEAPONS,
  ca as FOLDER_AUDIO,
  K as FOLDER_AUDIO_BGM,
  W as FOLDER_AUDIO_BGS,
  $ as FOLDER_AUDIO_ME,
  V as FOLDER_AUDIO_SE,
  Ea as FOLDER_DATA,
  pa as FOLDER_IMG,
  Ia as FOLDER_IMG_BATTLEBACK1,
  da as FOLDER_IMG_BATTLEBACK2,
  Ma as FOLDER_IMG_CHACTERS,
  Fa as FOLDER_IMG_ENEMIES,
  Da as FOLDER_IMG_FACES,
  Sa as FOLDER_IMG_PARALLACES,
  Aa as FOLDER_IMG_PICTURES,
  La as FOLDER_IMG_SV_ACTORS,
  Na as FOLDER_IMG_SV_ENEMIES,
  fa as FOLDER_IMG_SYSTEM,
  Oa as FOLDER_IMG_TILESETS,
  Ra as FOLDER_IMG_TITLES1,
  ya as FOLDER_IMG_TITLES2,
  _a as FOLDER_JS,
  Y as readActorData,
  ea as readAnimationData,
  X as readArmorData,
  n as readArrayData,
  z as readClassData,
  ra as readCommonEventData,
  Z as readEnemyData,
  q as readItemData,
  w as readMapFileFromInfo,
  na as readMapFilesFromInfo,
  h as readMapFilesFromInfoEx,
  ma as readMapInfoData,
  H as readSkillData,
  sa as readStateData,
  ua as readSystemData,
  ta as readTilesetData,
  aa as readTroopData,
  Q as readWeaponData,
  ia as summarizeReadErrors,
  oa as writeBundleData,
  O as writeMainData,
  j as writeMapData,
  y as writeMapFiles,
  la as writeRawGameData,
  T as writeSystemData
};
