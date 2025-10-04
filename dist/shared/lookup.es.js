const t = { variable: 1, switch: 2, actor: 0, item: 0, weapon: 0, armor: 0, skill: 0, class: 0, state: 0, troop: 0, enemy: 0, common_event: 0 }, e = ["data", "system", "system"], n = (o) => {
  const r = t[o];
  return r === void 0 ? { author: "rmmz", module: "unknown", kind: o } : { author: "rmmz", module: e[r], kind: [o, "variable", "switch"][r] };
}, a = (o) => {
  const r = n(o.kind);
  return r.author === o.author && r.module === o.module && r.kind === o.kind;
};
export {
  a as i,
  n as l
};
