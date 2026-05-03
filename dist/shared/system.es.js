import { y as o } from "./makeSystemEx.es.js";
const c = "Actors.json", l = "Classes.json", y = "Skills.json", u = "Items.json", v = "Weapons.json", S = "Armors.json", d = "Enemies.json", p = "Troops.json", E = "States.json", M = "Animations.json", f = "Tilesets.json", g = "CommonEvents.json", h = "MapInfos.json", r = "System.json", A = async (s, t, n) => {
  try {
    const e = await t(r);
    return m(e, s, n);
  } catch {
    return a(s.fileNotFound);
  }
}, a = (s) => ({ system: null, message: s }), m = (s, t, n) => {
  try {
    const e = JSON.parse(s);
    return i(e, t, n);
  } catch {
    return a(t.jsonParseError);
  }
}, i = (s, t, n) => {
  try {
    return n.validateSystemMz(s) ? { system: s, message: "" } : n.validateSystemMv && n.validateSystemMv(s) ? {
      system: o(s),
      message: t.mvAsMz
    } : a(t.invalidStructure);
  } catch {
    return a(t.validateFunctionError);
  }
};
export {
  h as F,
  c as a,
  d as b,
  v as c,
  l as d,
  S as e,
  u as f,
  p as g,
  g as h,
  y as i,
  E as j,
  M as k,
  r as l,
  f as m,
  A as r
};
