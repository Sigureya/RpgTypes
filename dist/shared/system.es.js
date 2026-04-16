import { v as o } from "./make.es.js";
const c = "Actors.json", l = "Classes.json", u = "Skills.json", y = "Items.json", v = "Weapons.json", S = "Armors.json", d = "Enemies.json", p = "Troops.json", M = "States.json", f = "Animations.json", g = "Tilesets.json", h = "CommonEvents.json", A = "MapInfos.json", r = "System.json", E = async (s, t, n) => {
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
  A as F,
  c as a,
  d as b,
  v as c,
  l as d,
  S as e,
  y as f,
  p as g,
  h,
  u as i,
  M as j,
  f as k,
  r as l,
  g as m,
  E as r
};
