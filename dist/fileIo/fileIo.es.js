import { F as Le, a as Te, r as Oe, w as Re, b as be, c as he, d as Ge, e as Ce, f as we } from "../shared/writeData.es.js";
import { d as N, h as D, b as f, f as _, F as S, i as y, j as F, m as v, g, c as L, a as T, e as O, k as R, l as b } from "../shared/constants.es.js";
import { w as X, x as Y, y as H, G as $, W as q, _ as h, a9 as Q, aa as Z, N as aa, ab as ea, a6 as sa, a4 as ta, S as ra, V as ia, af as ma, p as na, u as la, n as oa, a1 as G, a7 as da } from "../shared/makeSystemEx.es.js";
import { a as ca, b as Ea } from "../shared/makeSystem.es.js";
const Ya = "bgm", Ha = "se", $a = "me", qa = "bgs", Qa = "img", Za = "audio", ae = (a) => [...c(a.bgm, { asset: "audio", subDir: "bgm" }), ...c(a.bgs, {
  asset: "audio",
  subDir: "bgs"
}), ...c(a.me, { asset: "audio", subDir: "me" }), ...c(a.se, { asset: "audio", subDir: "se" })], ee = (a) => [...c(a.characters, {
  asset: "img",
  subDir: "characters"
}), ...c(a.faces, { asset: "img", subDir: "faces" }), ...c(a.svEnemy, { asset: "img", subDir: "sv_enemies" }), ...c(a.svActors, { asset: "img", subDir: "sv_actors" }), ...c(a.enemies, {
  asset: "img",
  subDir: "enemies"
})], c = (a, e) => Array.from(a).sort().map(((s) => ({
  asset: e.asset,
  subDir: e.subDir,
  symbol: s
}))), se = "battlebacks1", te = "battlebacks2", re = "characters", ie = "enemies", me = "faces", ne = "parallaxes", le = "pictures", oe = "sv_actors", de = "sv_enemies", ce = "system", Ee = "tilesets", ue = "titles1", pe = "titles2", l = async (a, e, s, t) => s(e).then(((r) => ua(r, e, a, t))).catch((() => ({
  success: !1,
  fileName: e,
  data: [],
  error: a.jsonParseError
}))), ua = (a, e, s, t) => {
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? { success: !0, fileName: e, data: r.filter(t), error: "" } : {
      success: !1,
      fileName: e,
      data: [],
      error: s.notArray
    };
  } catch {
    return { success: !1, fileName: e, data: [], error: s.jsonParseError };
  }
}, pa = (a, e, s) => l(a, T, e, s), Ia = (a, e, s) => l(a, N, e, s), Ma = (a, e, s) => l(a, y, e, s), Aa = (a, e, s) => l(a, _, e, s), Na = (a, e, s) => l(a, L, e, s), Da = (a, e, s) => l(a, O, e, s), fa = (a, e, s) => l(a, f, e, s), _a = (a, e, s) => l(a, g, e, s), Sa = (a, e, s) => l(a, F, e, s), ya = (a, e, s) => l(a, R, e, s), Fa = (a, e, s) => l(a, v, e, s), va = (a, e, s) => l(a, D, e, s), ga = (a, e, s) => l(a, S, e, s), Ie = (a) => ({
  main: La(a),
  map: a.mapFiles.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message })))
}), La = (a) => {
  const e = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((s) => !s.success)).map(((s) => ({
    fileName: s.fileName,
    error: s.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...e] : e;
}, Ta = (a) => [ca({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), Ea(a.text), X({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), Y({ name: a.text, actorId: 1 }), H({
  nickname: a.text,
  actorId: 1
}), $(a.text)], Oa = (a) => q({
  note: a.note,
  displayName: a.text,
  bgm: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  bgs: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  battleback1Name: a.image,
  battleback2Name: a.image,
  parallaxName: a.image,
  events: [null, { id: 1, name: "", note: a.note, x: 0, y: 0, pages: [Ra(a), ba(a)] }]
}), Ra = (a) => h({ image: {
  characterName: a.image,
  tileId: 0,
  characterIndex: 0,
  direction: 2,
  pattern: 0
}, list: Q(a) }), ba = (a) => h({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: Ta(a) }), Me = (a) => {
  const { message: e } = a;
  return {
    actors: d(oa(a), e, T),
    classes: d(la(a), e, N),
    armors: d(na(a), e, O),
    weapons: d(ma(a), e, L),
    items: d(ia(a), e, _),
    enemies: d(ra(a), e, f),
    skills: d(ta(a), e, y),
    states: d(sa(a), e, F),
    troops: d(ea({
      id: 1,
      name: a.nonReplaceableText
    }), e, g),
    commonEvents: d(aa({ id: 1, name: a.nonReplaceableText }), e, D),
    mapInfos: I(e, S),
    animations: I(e, R),
    tilesets: I(e, v),
    system: { system: Z(a), message: e },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [ha(a)] }
  };
}, ha = (a) => ({ filename: "Map001", editingName: "Test Map", map: Oa(a) }), I = (a, e) => ({
  data: [],
  error: a,
  fileName: e,
  success: !0
}), d = (a, e, s) => ({ data: [a], error: e, fileName: s, success: !0 }), Ga = (a, e, s, t) => s(wa(a)).then(((r) => Ca(r, a, e, t))).catch((() => M(a, e.fileNotFound))), Ca = (a, e, s, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: C(e), editingName: e.name } : M(e, s.invalidStructure);
  } catch {
    return M(e, s.jsonParseError);
  }
}, wa = (a) => `Map${G(a.id)}.json`, C = (a) => `Map${G(a.id)}`, M = (a, e) => ({ map: null, message: e, filename: C(a), editingName: a.name }), Ae = (a, e, s, t) => w(a, e, s, t, ((r) => r.map)), w = async (a, e, s, t, r) => {
  const m = await Promise.all(a.map((async (p) => xa(p, e, s, r, t))));
  return ka(m);
}, xa = async (a, e, s, t, r) => {
  const m = await Ga(a, e, s, r);
  return m.map === null ? m : {
    editingName: m.editingName,
    filename: m.filename,
    map: t(m)
  };
}, ka = (a) => ({ info: { success: !0 }, validMaps: a.filter(((e) => e.map !== null)), invalidMaps: a.filter(((e) => e.map === null)).map(((e) => ({
  filename: e.filename,
  message: e.message,
  map: null,
  editingName: e.editingName
}))) }), Pa = async (a, e, s) => {
  try {
    const t = await e(b);
    return Ba(t, a, s);
  } catch {
    return u(a.fileNotFound);
  }
}, u = (a) => ({
  system: null,
  message: a
}), Ba = (a, e, s) => {
  try {
    const t = JSON.parse(a);
    return Ua(t, e, s);
  } catch {
    return u(e.jsonParseError);
  }
}, Ua = (a, e, s) => {
  try {
    return s.validateSystemMz(a) ? {
      system: a,
      message: ""
    } : s.validateSystemMv && s.validateSystemMv(a) ? { system: da(a), message: e.mvAsMz } : u(e.invalidStructure);
  } catch {
    return u(e.validateFunctionError);
  }
}, Ne = (a) => a.system.system !== null, De = async (a, e, s) => A(a, e, {
  readMap: Wa,
  readActors: n,
  readArmors: n,
  readClasses: n,
  readCommonEvents: n,
  readEnemies: n,
  readItems: n,
  readSkills: n,
  readStates: n,
  readSystem: n,
  readTroops: n,
  readWeapons: n,
  readAnimations: n,
  readTilesets: n
}, s, (() => [])), Wa = (a) => a.map, n = (a) => a, fe = (a, e, s, t) => A(a, e, t, s, (() => [])), _e = (a, e, s, t) => A(a, e, t, s, (() => null)), A = async (a, e, s, t, r) => {
  const [m, p, x, k, P, B, U, W, j, V, z, J, E, K] = await Promise.all([va(a, e, ((i) => t.validateCommonEvent(i))), _a(a, e, ((i) => t.validateTroop(i))), fa(a, e, ((i) => t.validateEnemy(i))), Ia(a, e, ((i) => t.validateClass(i))), Ma(a, e, ((i) => t.validateSkill(i))), Aa(a, e, ((i) => t.validateItem(i))), Na(a, e, ((i) => t.validateWeapon(i))), Da(a, e, ((i) => t.validateArmor(i))), Sa(a, e, ((i) => t.validateState(i))), pa(a, e, ((i) => t.validateActor(i))), ya(a, e, ((i) => t.validateAnimation(i))), Fa(a, e, ((i) => t.validateTileset(i))), ga(a, e, ((i) => t.validateMapInfo(i))), Pa(a, e, {
    validateSystemMz: (i) => t.validateSystem(i),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: E.success ? await Va(E.data, a, s, e, t.validateMap) : ja(E),
    actors: o(V, a, s.readActors, r),
    armors: o(W, a, s.readArmors, r),
    classes: o(k, a, s.readClasses, r),
    commonEvents: o(m, a, s.readCommonEvents, r),
    enemies: o(x, a, s.readEnemies, r),
    items: o(B, a, s.readItems, r),
    mapInfos: E,
    skills: o(P, a, s.readSkills, r),
    states: o(j, a, s.readStates, r),
    system: za(K, a, s.readSystem),
    troops: o(p, a, s.readTroops, r),
    weapons: o(U, a, s.readWeapons, r),
    animations: o(z, a, s.readAnimations, r),
    tilesets: o(J, a, s.readTilesets, r)
  };
}, ja = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Va = async (a, e, s, t, r) => await w(a, e, (async (m) => t(m)), r, ((m) => s.readMap(m))), za = (a, e, s) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: s(a.system, b)
    };
  } catch {
    return { message: e.dataConvertError, system: null };
  }
}, o = (a, e, s, t) => {
  if (!a.success) return { fileName: a.fileName, success: !1, error: a.error, data: t() };
  try {
    return {
      fileName: a.fileName,
      success: !0,
      error: "",
      data: s(a.data, a.fileName)
    };
  } catch {
    return { fileName: a.fileName, success: !1, error: e.dataConvertError, data: t() };
  }
}, Se = (a) => a, ye = "data", Fe = "js";
export {
  Le as FILANEME_AUX_ACTOR_TEXTS,
  T as FILENAME_ACTORS,
  R as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  Te as FILENAME_AUX_DICTIONARY,
  N as FILENAME_CLASSES,
  D as FILENAME_COMMON_EVENTS,
  f as FILENAME_ENEMIES,
  _ as FILENAME_ITEMS,
  S as FILENAME_MAP_INFOS,
  y as FILENAME_SKILLS,
  F as FILENAME_STATES,
  b as FILENAME_SYSTEM,
  v as FILENAME_TILESET,
  g as FILENAME_TROOPS,
  L as FILENAME_WEAPONS,
  Za as FOLDER_AUDIO,
  Ya as FOLDER_AUDIO_BGM,
  qa as FOLDER_AUDIO_BGS,
  $a as FOLDER_AUDIO_ME,
  Ha as FOLDER_AUDIO_SE,
  ye as FOLDER_DATA,
  Qa as FOLDER_IMG,
  se as FOLDER_IMG_BATTLEBACK1,
  te as FOLDER_IMG_BATTLEBACK2,
  re as FOLDER_IMG_CHACTERS,
  ie as FOLDER_IMG_ENEMIES,
  me as FOLDER_IMG_FACES,
  ne as FOLDER_IMG_PARALLACES,
  le as FOLDER_IMG_PICTURES,
  oe as FOLDER_IMG_SV_ACTORS,
  de as FOLDER_IMG_SV_ENEMIES,
  ce as FOLDER_IMG_SYSTEM,
  Ee as FOLDER_IMG_TILESETS,
  ue as FOLDER_IMG_TITLES1,
  pe as FOLDER_IMG_TITLES2,
  Fe as FOLDER_JS,
  Se as defineGameDataReadHandlers,
  ae as flattenAudioFiles,
  ee as flattenImageFiles,
  Ne as isRawGameDataStrict,
  Me as makeRawTestDataBundle,
  Oe as rawGameDataToMainDataFileEntries,
  pa as readActorData,
  fe as readAllGameDataWithArrayFallback,
  _e as readAllGameDataWithNullFallback,
  De as readAllRawGameData,
  ya as readAnimationData,
  Da as readArmorData,
  l as readArrayData,
  Ia as readClassData,
  va as readCommonEventData,
  fa as readEnemyData,
  Aa as readItemData,
  Ga as readMapFileFromInfo,
  Ae as readMapFilesFromInfo,
  w as readMapFilesFromInfoEx,
  ga as readMapInfoData,
  Ma as readSkillData,
  Sa as readStateData,
  Pa as readSystemData,
  Fa as readTilesetData,
  _a as readTroopData,
  Na as readWeaponData,
  Ie as summarizeReadErrors,
  Re as writeBundleData,
  be as writeMainData,
  he as writeMapData,
  Ge as writeMapFiles,
  Ce as writeRawGameData,
  we as writeSystemData
};
