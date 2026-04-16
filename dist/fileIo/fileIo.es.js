import { a as N, d as I } from "../shared/fileNames.es.js";
import { k as D, e as T, h as n, b as f, f as i, F as R, i as d, j as l, l as u, m as y, g as P, c as h } from "../shared/fileNames.es.js";
const L = "bgm", S = "se", c = "me", t = "bgs", A = async (a, E, s, e) => s(E).then(((r) => M(r, E, a, e))).catch((() => ({ succcess: !1, fileName: E, data: [], error: a.jsonParseError }))), M = (a, E, s, e) => {
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? { succcess: !0, fileName: E, data: r.filter(e), error: "" } : { succcess: !1, fileName: E, data: [], error: s.notArray };
  } catch {
    return {
      succcess: !1,
      fileName: E,
      data: [],
      error: s.jsonParseError
    };
  }
}, F = (a, E, s) => A(a, N, E, s), o = (a, E, s) => A(a, I, E, s);
export {
  N as FILENAME_ACTORS,
  D as FILENAME_ANIMATIONS,
  T as FILENAME_ARMORS,
  I as FILENAME_CLASSES,
  n as FILENAME_COMMON_EVENTS,
  f as FILENAME_ENEMIES,
  i as FILENAME_ITEMS,
  R as FILENAME_MAP_INFOS,
  d as FILENAME_SKILLS,
  l as FILENAME_STATES,
  u as FILENAME_SYSTEM,
  y as FILENAME_TILESET,
  P as FILENAME_TROOPS,
  h as FILENAME_WEAPONS,
  L as FOLDER_AUDIO_BGM,
  t as FOLDER_AUDIO_BGS,
  c as FOLDER_AUDIO_ME,
  S as FOLDER_AUDIO_SE,
  F as readActorData,
  o as readClassData
};
