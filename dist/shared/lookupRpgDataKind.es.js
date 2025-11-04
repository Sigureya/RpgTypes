import { t as c } from "./textAndDesc.es.js";
const m = (t) => t.kind.endsWith("[]"), x = (t) => m(t.attr), f = (t, a) => !!m(t) && t.kind === `${a}[]`, l = (t) => t.kind !== "struct" && !m(t), d = (t) => t.kind === "struct", w = (t) => d(t.attr) || u(t.attr), u = (t) => t.kind === "struct[]", T = (t) => t.attr.kind === "struct[]", _ = (t) => {
  var a;
  return ((a = n[t.kind]) == null ? void 0 : a.hasText) === !0;
}, j = (t) => {
  var a;
  return ((a = n[t.attr.kind]) == null ? void 0 : a.hasText) === !0;
}, z = (t) => n[t.kind].type === "string", p = (t) => l(t) && k(t), k = (t) => n[t.kind].type === "number", O = (t) => m(t) ? b(t) : p(t), b = (t) => n[t.kind.replace("[]", "")].type === "number", q = (t) => {
  var a;
  return ((a = n[t.attr.kind]) == null ? void 0 : a.type) === "number";
}, E = (t) => n[t.kind.replace("[]", "")].type === "string", A = (t) => t.attr.kind === "variable" || t.attr.kind === "variable[]", D = (t) => t.attr.kind === "file" || t.attr.kind === "file[]", s = {
  type: "string",
  hasText: !0
}, r = { type: "number", hasText: !1 }, e = { type: "number", hasText: !1 }, n = {
  string: s,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: r,
  actor: r,
  class: r,
  enemy: r,
  skill: r,
  state: r,
  item: r,
  weapon: r,
  common_event: r,
  switch: r,
  variable: r,
  troop: r,
  multiline_string: s,
  file: { type: "string", hasText: !1 },
  "file[]": { type: "string", hasText: !1 },
  "multiline_string[]": s,
  "string[]": s,
  combo: s,
  select: s,
  any: s,
  struct: { type: "struct" },
  "actor[]": e,
  "enemy[]": e,
  "class[]": e,
  "skill[]": e,
  "state[]": e,
  "item[]": e,
  "weapon[]": e,
  "common_event[]": e,
  "troop[]": e,
  "armor[]": e,
  "switch[]": e,
  "variable[]": e,
  "number[]": e
};
function o(t) {
  const a = t.map((i) => [i.name, i.attr]);
  return Object.fromEntries(a);
}
const W = (t) => Object.entries(t).map(([a, i]) => ({ name: a, attr: i })), $ = (t) => ({ struct: t.struct, params: o(t.params) }), B = (t) => ({ ...c(t), command: t.command, args: o(t.args) }), y = {
  variable: 1,
  switch: 2,
  actor: 0,
  item: 0,
  weapon: 0,
  armor: 0,
  skill: 0,
  class: 0,
  state: 0,
  troop: 0,
  enemy: 0,
  common_event: 0
}, h = ["data", "system", "system"], g = (t) => {
  const a = y[t];
  return a === void 0 ? {
    author: "rmmz",
    module: "unknown",
    kind: t
  } : { author: "rmmz", module: h[a], kind: [t, "variable", "switch"][a] };
}, C = (t) => {
  const a = g(t.kind);
  return a.author === t.author && a.module === t.module && a.kind === t.kind;
};
export {
  j as a,
  A as b,
  D as c,
  d,
  T as e,
  x as f,
  u as g,
  w as h,
  q as i,
  W as j,
  $ as k,
  B as l,
  g as m,
  C as n,
  m as o,
  f as p,
  l as q,
  _ as r,
  z as s,
  o as t,
  p as u,
  k as v,
  O as w,
  b as x,
  E as y
};
