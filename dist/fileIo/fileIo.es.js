import { F as ge, a as Le, r as Te, w as Oe, b as Re, c as be, d as he, e as Ce, f as Ge } from "../shared/writeData.es.js";
import { d as N, h as f, b as D, f as _, F as S, i as F, j as y, m as v, g, c as L, a as T, e as O, k as R, l as b } from "../shared/constants.es.js";
import { a as X, b as Y } from "../shared/makeSystem.es.js";
import { w as H, x as $, y as q, G as Q, W as Z, _ as h, a9 as aa, aa as ea, N as sa, ab as ta, a6 as ra, a4 as ia, S as ma, V as na, af as la, p as oa, u as da, n as ca, a1 as C, a7 as Ea } from "../shared/makeSystemEx.es.js";
const Ya = "bgm", Ha = "se", $a = "me", qa = "bgs", Qa = "img", Za = "audio", ae = (a) => [...c(a.bgm, { asset: "audio", subDir: "bgm" }), ...c(a.bgs, { asset: "audio", subDir: "bgs" }), ...c(a.me, {
  asset: "audio",
  subDir: "me"
}), ...c(a.se, { asset: "audio", subDir: "se" })], ee = (a) => [...c(a.characters, { asset: "img", subDir: "characters" }), ...c(a.faces, { asset: "img", subDir: "faces" }), ...c(a.svEnemy, {
  asset: "img",
  subDir: "sv_enemies"
}), ...c(a.svActors, { asset: "img", subDir: "sv_actors" }), ...c(a.enemies, { asset: "img", subDir: "enemies" })], c = (a, e) => Array.from(a).sort().map(((s) => ({
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
}, pa = (a, e, s) => l(a, T, e, s), Ia = (a, e, s) => l(a, N, e, s), Ma = (a, e, s) => l(a, F, e, s), Aa = (a, e, s) => l(a, _, e, s), Na = (a, e, s) => l(a, L, e, s), fa = (a, e, s) => l(a, O, e, s), Da = (a, e, s) => l(a, D, e, s), _a = (a, e, s) => l(a, g, e, s), Sa = (a, e, s) => l(a, y, e, s), Fa = (a, e, s) => l(a, R, e, s), ya = (a, e, s) => l(a, v, e, s), va = (a, e, s) => l(a, f, e, s), ga = (a, e, s) => l(a, S, e, s), Ie = (a) => ({
  main: La(a),
  map: a.mapFiles.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message })))
}), La = (a) => {
  const e = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((s) => !s.success)).map(((s) => ({
    fileName: s.fileName,
    error: s.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...e] : e;
}, Ta = (a) => [X({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), Y(a.text), H({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), $({ name: a.text, actorId: 1 }), q({
  nickname: a.text,
  actorId: 1
}), Q(a.text)], Oa = (a) => Z({
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
}, list: aa(a) }), ba = (a) => h({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: Ta(a) }), Me = (a) => {
  const { message: e } = a;
  return {
    actors: d(ca(a), e, T),
    classes: d(da(a), e, N),
    armors: d(oa(a), e, O),
    weapons: d(la(a), e, L),
    items: d(na(a), e, _),
    enemies: d(ma(a), e, D),
    skills: d(ia(a), e, F),
    states: d(ra(a), e, y),
    troops: d(ta({
      id: 1,
      name: a.nonReplaceableText
    }), e, g),
    commonEvents: d(sa({ id: 1, name: a.nonReplaceableText }), e, f),
    mapInfos: I(e, S),
    animations: I(e, R),
    tilesets: I(e, v),
    system: { system: ea(a), message: e },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [ha(a)] }
  };
}, ha = (a) => ({ filename: "Map001", editingName: "Test Map", map: Oa(a) }), I = (a, e) => ({
  data: [],
  error: a,
  fileName: e,
  success: !0
}), d = (a, e, s) => ({ data: [a], error: e, fileName: s, success: !0 }), Ca = (a, e, s, t) => s(wa(a)).then(((r) => Ga(r, a, e, t))).catch((() => M(a, e.fileNotFound))), Ga = (a, e, s, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: G(e), editingName: e.name } : M(e, s.invalidStructure);
  } catch {
    return M(e, s.jsonParseError);
  }
}, wa = (a) => `Map${C(a.id)}.json`, G = (a) => `Map${C(a.id)}`, M = (a, e) => ({ map: null, message: e, filename: G(a), editingName: a.name }), Ae = (a, e, s, t) => w(a, e, s, t, ((r) => r.map)), w = async (a, e, s, t, r) => {
  const m = await Promise.all(a.map((async (p) => xa(p, e, s, r, t))));
  return ka(m);
}, xa = async (a, e, s, t, r) => {
  const m = await Ca(a, e, s, r);
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
    } : s.validateSystemMv && s.validateSystemMv(a) ? { system: Ea(a), message: e.mvAsMz } : u(e.invalidStructure);
  } catch {
    return u(e.validateFunctionError);
  }
}, Ne = async (a, e, s) => A(a, e, {
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
}, s, (() => [])), Wa = (a) => a.map, n = (a) => a, fe = (a, e, s, t) => A(a, e, t, s, (() => [])), De = (a, e, s, t) => A(a, e, t, s, (() => null)), A = async (a, e, s, t, r) => {
  const [m, p, x, k, P, B, U, W, j, V, z, J, E, K] = await Promise.all([va(a, e, ((i) => t.validateCommonEvent(i))), _a(a, e, ((i) => t.validateTroop(i))), Da(a, e, ((i) => t.validateEnemy(i))), Ia(a, e, ((i) => t.validateClass(i))), Ma(a, e, ((i) => t.validateSkill(i))), Aa(a, e, ((i) => t.validateItem(i))), Na(a, e, ((i) => t.validateWeapon(i))), fa(a, e, ((i) => t.validateArmor(i))), Sa(a, e, ((i) => t.validateState(i))), pa(a, e, ((i) => t.validateActor(i))), Fa(a, e, ((i) => t.validateAnimation(i))), ya(a, e, ((i) => t.validateTileset(i))), ga(a, e, ((i) => t.validateMapInfo(i))), Pa(a, e, {
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
}, _e = (a) => a, Se = "data", Fe = "js";
export {
  ge as FILANEME_AUX_ACTOR_TEXTS,
  T as FILENAME_ACTORS,
  R as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  Le as FILENAME_AUX_DICTIONARY,
  N as FILENAME_CLASSES,
  f as FILENAME_COMMON_EVENTS,
  D as FILENAME_ENEMIES,
  _ as FILENAME_ITEMS,
  S as FILENAME_MAP_INFOS,
  F as FILENAME_SKILLS,
  y as FILENAME_STATES,
  b as FILENAME_SYSTEM,
  v as FILENAME_TILESET,
  g as FILENAME_TROOPS,
  L as FILENAME_WEAPONS,
  Za as FOLDER_AUDIO,
  Ya as FOLDER_AUDIO_BGM,
  qa as FOLDER_AUDIO_BGS,
  $a as FOLDER_AUDIO_ME,
  Ha as FOLDER_AUDIO_SE,
  Se as FOLDER_DATA,
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
  _e as defineGameDataReadHandlers,
  ae as flattenAudioFiles,
  ee as flattenImageFiles,
  Me as makeRawTestDataBundle,
  Te as rawGameDataToMainDataFileEntries,
  pa as readActorData,
  fe as readAllGameDataWithArrayFallback,
  De as readAllGameDataWithNullFallback,
  Ne as readAllRawGameData,
  Fa as readAnimationData,
  fa as readArmorData,
  l as readArrayData,
  Ia as readClassData,
  va as readCommonEventData,
  Da as readEnemyData,
  Aa as readItemData,
  Ca as readMapFileFromInfo,
  Ae as readMapFilesFromInfo,
  w as readMapFilesFromInfoEx,
  ga as readMapInfoData,
  Ma as readSkillData,
  Sa as readStateData,
  Pa as readSystemData,
  ya as readTilesetData,
  _a as readTroopData,
  Na as readWeaponData,
  Ie as summarizeReadErrors,
  Oe as writeBundleData,
  Re as writeMainData,
  be as writeMapData,
  he as writeMapFiles,
  Ce as writeRawGameData,
  Ge as writeSystemData
};
