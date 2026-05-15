import { d as f, h as y, b as D, f as v, F as S, i as A, j as _, m as F, g, c as u, a as L, e as O, k as T, l as w } from "../shared/constants.es.js";
import { m as X, a as aa } from "../shared/commands.es.js";
import { x as ea, y as sa, z as ta, H as ra, _ as ma, a2 as G, aj as ia, ak as na, O as la, am as oa, ae as da, aa as ca, U as pa, Z as Ea, ar as Ia, p as Ma, v as Na, n as fa, a5 as C, ah as ya } from "../shared/makeSystemEx.es.js";
const re = "bgm", me = "se", ie = "me", ne = "bgs", le = "img", oe = "audio", de = (a) => [...I(a.bgm, { asset: "audio", subDir: "bgm" }), ...I(a.bgs, { asset: "audio", subDir: "bgs" }), ...I(a.me, {
  asset: "audio",
  subDir: "me"
}), ...I(a.se, { asset: "audio", subDir: "se" })], ce = (a) => [...I(a.characters, { asset: "img", subDir: "characters" }), ...I(a.faces, { asset: "img", subDir: "faces" }), ...I(a.svEnemy, {
  asset: "img",
  subDir: "sv_enemies"
}), ...I(a.svActors, { asset: "img", subDir: "sv_actors" }), ...I(a.enemies, { asset: "img", subDir: "enemies" })], I = (a, e) => Array.from(a).sort().map(((s) => ({
  asset: e.asset,
  subDir: e.subDir,
  symbol: s
}))), pe = "battlebacks1", Ee = "battlebacks2", Ie = "characters", Me = "enemies", Ne = "faces", fe = "parallaxes", ye = "pictures", De = "sv_actors", ve = "sv_enemies", Se = "system", Ae = "tilesets", _e = "titles1", Fe = "titles2", c = async (a, e, s, t) => s(e).then(((r) => Da(r, e, a, t))).catch((() => ({
  success: !1,
  fileName: e,
  data: [],
  error: a.jsonParseError
}))), Da = (a, e, s, t) => {
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
}, va = (a, e, s) => c(a, L, e, s), Sa = (a, e, s) => c(a, f, e, s), Aa = (a, e, s) => c(a, A, e, s), _a = (a, e, s) => c(a, v, e, s), Fa = (a, e, s) => c(a, u, e, s), ga = (a, e, s) => c(a, O, e, s), ua = (a, e, s) => c(a, D, e, s), La = (a, e, s) => c(a, g, e, s), Oa = (a, e, s) => c(a, _, e, s), Ta = (a, e, s) => c(a, T, e, s), Ra = (a, e, s) => c(a, F, e, s), ba = (a, e, s) => c(a, y, e, s), ha = (a, e, s) => c(a, S, e, s), l = (a, e, s) => s(a, JSON.stringify(e)), x = (a, e) => Promise.all([l(L, a.actors, e), l(f, a.classes, e), l(A, a.skills, e), l(v, a.items, e), l(u, a.weapons, e), l(O, a.armors, e), l(D, a.enemies, e), l(g, a.troops, e), l(_, a.states, e), l(T, a.animations, e), l(F, a.tilesets, e), l(y, a.commonEvents, e), l(S, a.mapInfos, e)]), ge = (a) => ({
  main: wa(a),
  map: a.mapFiles.invalidMaps.map(((e) => ({ fileName: e.filename, error: e.message })))
}), wa = (a) => {
  const e = [a.actors, a.armors, a.classes, a.commonEvents, a.enemies, a.items, a.skills, a.states, a.troops, a.weapons, a.mapInfos].filter(((s) => !s.success)).map(((s) => ({
    fileName: s.fileName,
    error: s.error
  })));
  return a.system.system === null ? [{ fileName: a.system.message, error: a.system.message }, ...e] : e;
}, ka = (a) => [X({
  facename: a.image,
  faceIndex: 0,
  speakerName: a.text
}), aa(a.text), ea({ actorId: 1, characterName: a.image, characterIndex: 0, battlerName: a.image, faceName: a.image, faceIndex: 0 }), sa({ name: a.text, actorId: 1 }), ta({
  nickname: a.text,
  actorId: 1
}), ra(a.text)], Ga = (a) => ma({
  note: a.note,
  displayName: a.text,
  bgm: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  bgs: { name: a.audio, pan: 0, pitch: 100, volume: 100 },
  battleback1Name: a.image,
  battleback2Name: a.image,
  parallaxName: a.image,
  events: [null, { id: 1, name: "", note: a.note, x: 0, y: 0, pages: [Ca(a), xa(a)] }]
}), Ca = (a) => G({ image: {
  characterName: a.image,
  tileId: 0,
  characterIndex: 0,
  direction: 2,
  pattern: 0
}, list: ia(a) }), xa = (a) => G({ image: { characterIndex: 0, characterName: a.image, tileId: 0, direction: 4, pattern: 0 }, list: ka(a) }), ue = (a) => {
  const { message: e } = a;
  return {
    actors: E(fa(a), e, L),
    classes: E(Na(a), e, f),
    armors: E(Ma(a), e, O),
    weapons: E(Ia(a), e, u),
    items: E(Ea(a), e, v),
    enemies: E(pa(a), e, D),
    skills: E(ca(a), e, A),
    states: E(da(a), e, _),
    troops: E(oa({
      id: 1,
      name: a.nonReplaceableText
    }), e, g),
    commonEvents: E(la({ id: 1, name: a.nonReplaceableText }), e, y),
    mapInfos: b(e, S),
    animations: b(e, T),
    tilesets: b(e, F),
    system: { system: na(a), message: e },
    mapFiles: { info: { success: !0 }, invalidMaps: [], validMaps: [Pa(a)] }
  };
}, Pa = (a) => ({ filename: "Map001", editingName: "Test Map", map: Ga(a) }), b = (a, e) => ({
  data: [],
  error: a,
  fileName: e,
  success: !0
}), E = (a, e, s) => ({ data: [a], error: e, fileName: s, success: !0 }), ja = (a, e, s, t) => s(Ja(a)).then(((r) => Ba(r, a, e, t))).catch((() => h(a, e.fileNotFound))), Ba = (a, e, s, t) => {
  try {
    const r = JSON.parse(a);
    return t(r) ? { map: r, filename: P(e), editingName: e.name } : h(e, s.invalidStructure);
  } catch {
    return h(e, s.jsonParseError);
  }
}, Ja = (a) => `Map${C(a.id)}.json`, P = (a) => `Map${C(a.id)}`, h = (a, e) => ({ map: null, message: e, filename: P(a), editingName: a.name }), Le = (a, e, s, t) => j(a, e, s, t, ((r) => r.map)), j = async (a, e, s, t, r) => {
  const n = await Promise.all(a.map((async (R) => Ua(R, e, s, r, t))));
  return Wa(n);
}, Ua = async (a, e, s, t, r) => {
  const n = await ja(a, e, s, r);
  return n.map === null ? n : {
    editingName: n.editingName,
    filename: n.filename,
    map: t(n)
  };
}, Wa = (a) => ({ info: { success: !0 }, validMaps: a.filter(((e) => e.map !== null)), invalidMaps: a.filter(((e) => e.map === null)).map(((e) => ({
  filename: e.filename,
  message: e.message,
  map: null,
  editingName: e.editingName
}))) }), za = (a, e) => e(`${a.filename}.json`, JSON.stringify(a.map)), B = (a, e) => Promise.all(a.map(((s) => za(s, e)))), Va = async (a, e, s) => {
  try {
    const t = await e(w);
    return $a(t, a, s);
  } catch {
    return N(a.fileNotFound);
  }
}, N = (a) => ({ system: null, message: a }), $a = (a, e, s) => {
  try {
    const t = JSON.parse(a);
    return Ha(t, e, s);
  } catch {
    return N(e.jsonParseError);
  }
}, Ha = (a, e, s) => {
  try {
    return s.validateSystemMz(a) ? { system: a, message: "" } : s.validateSystemMv && s.validateSystemMv(a) ? {
      system: ya(a),
      message: e.mvAsMz
    } : N(e.invalidStructure);
  } catch {
    return N(e.validateFunctionError);
  }
}, Oe = async (a, e, s) => k(a, e, {
  readMap: Ka,
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
}, s, (() => [])), Ka = (a) => a.map, o = (a) => a, Te = (a, e, s, t) => k(a, e, t, s, (() => [])), Re = (a, e, s, t) => k(a, e, t, s, (() => null)), k = async (a, e, s, t, r) => {
  const [n, R, U, W, z, V, $, H, K, Y, Z, q, M, Q] = await Promise.all([ba(a, e, ((m) => t.validateCommonEvent(m))), La(a, e, ((m) => t.validateTroop(m))), ua(a, e, ((m) => t.validateEnemy(m))), Sa(a, e, ((m) => t.validateClass(m))), Aa(a, e, ((m) => t.validateSkill(m))), _a(a, e, ((m) => t.validateItem(m))), Fa(a, e, ((m) => t.validateWeapon(m))), ga(a, e, ((m) => t.validateArmor(m))), Oa(a, e, ((m) => t.validateState(m))), va(a, e, ((m) => t.validateActor(m))), Ta(a, e, ((m) => t.validateAnimation(m))), Ra(a, e, ((m) => t.validateTileset(m))), ha(a, e, ((m) => t.validateMapInfo(m))), Va(a, e, {
    validateSystemMz: (m) => t.validateSystem(m),
    validateSystemMv: t.validateSystemMV
  })]);
  return {
    mapFiles: M.success ? await Za(M.data, a, s, e, t.validateMap) : Ya(M),
    actors: p(Y, a, s.readActors, r),
    armors: p(H, a, s.readArmors, r),
    classes: p(W, a, s.readClasses, r),
    commonEvents: p(n, a, s.readCommonEvents, r),
    enemies: p(U, a, s.readEnemies, r),
    items: p(V, a, s.readItems, r),
    mapInfos: M,
    skills: p(z, a, s.readSkills, r),
    states: p(K, a, s.readStates, r),
    system: qa(Q, a, s.readSystem),
    troops: p(R, a, s.readTroops, r),
    weapons: p($, a, s.readWeapons, r),
    animations: p(Z, a, s.readAnimations, r),
    tilesets: p(q, a, s.readTilesets, r)
  };
}, Ya = (a) => ({
  info: { filename: a.fileName, message: a.error, success: !1 },
  validMaps: [],
  invalidMaps: []
}), Za = async (a, e, s, t, r) => await j(a, e, (async (n) => t(n)), r, ((n) => s.readMap(n))), qa = (a, e, s) => {
  if (a.system === null) return { message: a.message, system: null };
  try {
    return {
      message: a.message,
      system: s(a.system, w)
    };
  } catch {
    return { message: e.dataConvertError, system: null };
  }
}, p = (a, e, s, t) => {
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
}, be = (a) => a, he = (a) => [d(L, a.actors.data), d(f, a.classes.data), d(A, a.skills.data), d(v, a.items.data), d(u, a.weapons.data), d(O, a.armors.data), d(D, a.enemies.data), d(g, a.troops.data), d(_, a.states.data), d(T, a.animations.data), d(F, a.tilesets.data), d(y, a.commonEvents.data), d(S, a.mapInfos.data), ...Qa(a.mapFiles.validMaps)], Qa = (a) => a.map(((e) => ({
  filename: `${e.filename}.json`,
  data: e.map
}))), d = (a, e) => ({
  filename: a,
  data: [null, ...e]
}), J = (a, e) => e(w, JSON.stringify(a)), we = (a, e, s) => Promise.all([x(Xa(a), s), J(a.system, s), B(e.validMaps, s)]).then((() => {
})), ke = (a, e) => {
  const s = [x(ae(a), e), B(a.mapFiles.validMaps, e)];
  return a.system.system && s.push(J(a.system.system, e)), Promise.all(s).then((() => {
  }));
}, i = (a) => [null, ...a], Xa = (a) => ({
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
}), ae = (a) => ({
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
}), Ge = "data", Ce = "js";
export {
  L as FILENAME_ACTORS,
  T as FILENAME_ANIMATIONS,
  O as FILENAME_ARMORS,
  f as FILENAME_CLASSES,
  y as FILENAME_COMMON_EVENTS,
  D as FILENAME_ENEMIES,
  v as FILENAME_ITEMS,
  S as FILENAME_MAP_INFOS,
  A as FILENAME_SKILLS,
  _ as FILENAME_STATES,
  w as FILENAME_SYSTEM,
  F as FILENAME_TILESET,
  g as FILENAME_TROOPS,
  u as FILENAME_WEAPONS,
  oe as FOLDER_AUDIO,
  re as FOLDER_AUDIO_BGM,
  ne as FOLDER_AUDIO_BGS,
  ie as FOLDER_AUDIO_ME,
  me as FOLDER_AUDIO_SE,
  Ge as FOLDER_DATA,
  le as FOLDER_IMG,
  pe as FOLDER_IMG_BATTLEBACK1,
  Ee as FOLDER_IMG_BATTLEBACK2,
  Ie as FOLDER_IMG_CHACTERS,
  Me as FOLDER_IMG_ENEMIES,
  Ne as FOLDER_IMG_FACES,
  fe as FOLDER_IMG_PARALLACES,
  ye as FOLDER_IMG_PICTURES,
  De as FOLDER_IMG_SV_ACTORS,
  ve as FOLDER_IMG_SV_ENEMIES,
  Se as FOLDER_IMG_SYSTEM,
  Ae as FOLDER_IMG_TILESETS,
  _e as FOLDER_IMG_TITLES1,
  Fe as FOLDER_IMG_TITLES2,
  Ce as FOLDER_JS,
  be as defineGameDataReadHandlers,
  de as flattenAudioFiles,
  ce as flattenImageFiles,
  ue as makeRawTestDataBundle,
  he as rawGameDataToMainDataFileEntries,
  va as readActorData,
  Te as readAllGameDataWithArrayFallback,
  Re as readAllGameDataWithNullFallback,
  Oe as readAllRawGameData,
  Ta as readAnimationData,
  ga as readArmorData,
  c as readArrayData,
  Sa as readClassData,
  ba as readCommonEventData,
  ua as readEnemyData,
  _a as readItemData,
  ja as readMapFileFromInfo,
  Le as readMapFilesFromInfo,
  j as readMapFilesFromInfoEx,
  ha as readMapInfoData,
  Aa as readSkillData,
  Oa as readStateData,
  Va as readSystemData,
  Ra as readTilesetData,
  La as readTroopData,
  Fa as readWeaponData,
  ge as summarizeReadErrors,
  we as writeBundleData,
  x as writeMainData,
  za as writeMapData,
  B as writeMapFiles,
  ke as writeRawGameData,
  J as writeSystemData
};
