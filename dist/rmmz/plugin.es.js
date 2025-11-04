import { h as L, a as v, i as U, b as Y, c as $, d as V, e as q, f as G, g as Q } from "../shared/lookupRpgDataKind.es.js";
import { l as Bt, k as Tt, w as Et, o as Ft, p as _t, x as Lt, u as Vt, v as Dt, n as It, q as Mt, y as zt, s as Jt, m as Wt, r as Zt, j as Kt, t as Rt } from "../shared/lookupRpgDataKind.es.js";
const X = (t, e) => {
  const r = function(a) {
    return Object.fromEntries(a.map((n) => [n.struct, n.params.filter(L)]));
  }(t);
  return function(a, n, s) {
    return a.reduce((m) => {
      if (!m.changed) return m;
      const o = a.filter((f) => !m.names.has(f) && n[f].some((u) => m.names.has(u.attr.struct)));
      return o.length === 0 ? { names: m.names, changed: !1 } : { names: /* @__PURE__ */ new Set([...m.names, ...o]), changed: !0 };
    }, {
      names: s,
      changed: !0
    }).names;
  }(Object.keys(r), r, new Set(e));
}, O = (t, e) => {
  const r = t.structs.filter((s) => s.params.some((m) => e(m))), a = new Set(r.map((s) => s.struct)), n = X(t.structs, a);
  return {
    structs: tt(t.structs, n, e),
    commands: et(t.commands, n, e),
    params: k(t.params, n, e)
  };
}, k = (t, e, r) => t.filter((a) => L(a) ? e.has(a.attr.struct) : r(a)), tt = (t, e, r) => t.reduce((a, n) => {
  const s = k(n.params, e, r);
  return s.length === 0 || a.push({ struct: n.struct, params: s }), a;
}, []), et = (t, e, r) => t.reduce((a, n) => {
  const s = k(n.args, e, r);
  return s.length === 0 || a.push({ ...n.desc ? {
    desc: n.desc
  } : {}, ...n.text ? { text: n.text } : {}, command: n.command, args: s }), a;
}, []), gt = (t) => O(t, v), yt = (t) => O(t, U), xt = (t) => O(t, Y), Ot = (t) => O(t, $), At = (t) => j(t, (e) => !0, (e) => !0), Ct = (t) => j(t, (e) => e.attr.kind === "file", (e) => e.attr.kind === "file[]"), vt = (t) => j(t, (e) => v(e), (e) => v(e)), j = (t, e, r) => {
  const a = [], n = [], s = [], m = [];
  return t.forEach((o) => {
    if (V(o.attr)) a.push({ name: o.name, attr: o.attr });
    else if (q(o)) n.push(o);
    else if (G(o)) {
      if (r(o)) return void m.push(o);
    } else e(o) && s.push(o);
  }), { structs: a, structArrays: n, scalas: s, scalaArrays: m };
}, D = (t, e, r) => {
  const a = e.get(t);
  return a ? a.filter((n) => ((s, m) => !(!V(s) && !Q(s) || !s.struct || m.has(s.struct)))(n, r)).flatMap((n) => {
    const s = n.struct;
    return r.add(s), [s, ...D(s, e, r)];
  }) : [];
}, St = (t, e) => D(t, e, /* @__PURE__ */ new Set()), I = (t, e) => Object.entries(e).reduce((r, [a, n]) => {
  if (a in t) {
    const s = t[a];
    if (typeof s == "string") return { ...r, [a]: n(s) };
  }
  return r;
}, {}), p = (t, e, r, a) => ({
  default: e,
  ...I(r, a),
  kind: t
}), g = (t, e, r) => ({ default: [], ...I(e, r), kind: t }), M = "BODY", z = "STRUCT", P = "NONE", rt = (t, e) => {
  const r = t.lines.length > 0 ? w(t) : t, a = e[1] || void 0;
  return {
    ...r,
    structName: a,
    blockType: a ? z : "INVALID",
    locale: e[2],
    lines: []
  };
}, at = (t) => ({ ...t.lines.length > 0 ? w(t) : t, blockType: M, structName: void 0, locale: void 0, lines: [] }), w = (t) => t.blockType === M ? {
  ...t,
  bodies: t.bodies.concat([{ lines: [...t.lines] }]),
  lines: [],
  blockType: P
} : t.structName && t.blockType === z ? { ...t, structs: t.structs.concat([{
  struct: t.structName,
  locale: t.locale,
  lines: [...t.lines]
}]), blockType: P, structName: void 0, locale: void 0, lines: [] } : { ...t, blockType: P, structName: void 0, lines: [] }, nt = (t) => t.currentOption ? { items: t.items.concat({
  option: t.currentOption,
  value: t.currentOption
}) } : t, J = "help", S = "kind", A = "text", E = "struct", W = (t) => {
  const e = JSON.parse(t);
  return Array.isArray(e) ? e.map(y) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([r, a]) => [r, y(a)])) : e;
}, y = (t) => {
  if (typeof t != "string") return t;
  try {
    const e = JSON.parse(t);
    return Array.isArray(e) ? e.map(y) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([r, a]) => [r, y(a)])) : e;
  } catch {
    return t;
  }
}, st = (t) => {
  if (S in t.attr) {
    const e = ct[t.attr.kind];
    if (e) return e(t);
  }
  return p("any", "", t.attr, x);
}, c = (t) => t, Z = (t) => t.replace("[", "").replace("]", "").split(",").map((e) => parseFloat(e.replaceAll('"', "").trim())).filter((e) => !isNaN(e)), x = {
  default: c,
  text: c,
  desc: c,
  parent: c
}, F = (t) => p("string", "", t.attr, x), _ = (t) => {
  const e = { default: (r) => W(r), text: c, desc: c, parent: c };
  return g("string[]", t.attr, e);
}, i = (t, e) => {
  const r = {
    default: Z,
    text: c,
    desc: c,
    parent: c
  };
  return g(e, t.attr, r);
}, l = (t, e) => {
  const r = { default: (a) => parseInt(a, 10), text: c, desc: c, parent: c };
  return p(e, 0, t.attr, r);
}, ct = {
  number: (t) => ((e) => {
    const r = {
      default: (a) => parseFloat(a),
      text: c,
      desc: c,
      decimals: (a) => parseInt(a, 10),
      min: (a) => parseFloat(a),
      max: (a) => parseFloat(a),
      parent: c
    };
    return p("number", 0, e.attr, r);
  })(t),
  "number[]": (t) => {
    const e = {
      default: Z,
      text: c,
      desc: c,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: c
    };
    return g("number[]", t.attr, e);
  },
  string: F,
  "string[]": _,
  multiline_string: F,
  "multiline_string[]": _,
  combo: (t) => {
    var r;
    const e = ((r = t.options) == null ? void 0 : r.map((a) => a.option)) ?? [];
    return { ...p("combo", "", t.attr, x), options: e };
  },
  select: (t) => {
    var r;
    const e = ((r = t.options) == null ? void 0 : r.map((a) => ({
      option: a.option,
      value: a.value
    }))) ?? [];
    return { ...p("select", "", t.attr, x), options: e };
  },
  actor: (t) => l(t, "actor"),
  "actor[]": (t) => i(t, "actor[]"),
  class: (t) => l(t, "class"),
  "class[]": (t) => i(t, "class[]"),
  skill: (t) => l(t, "skill"),
  "skill[]": (t) => i(t, "skill[]"),
  item: (t) => l(t, "item"),
  "item[]": (t) => i(t, "item[]"),
  weapon: (t) => l(t, "weapon"),
  "weapon[]": (t) => i(t, "weapon[]"),
  armor: (t) => l(t, "armor"),
  "armor[]": (t) => i(t, "armor[]"),
  state: (t) => l(t, "state"),
  "state[]": (t) => i(t, "state[]"),
  enemy: (t) => l(t, "enemy"),
  "enemy[]": (t) => i(t, "enemy[]"),
  common_event: (t) => l(t, "common_event"),
  "common_event[]": (t) => i(t, "common_event[]"),
  switch: (t) => l(t, "switch"),
  "switch[]": (t) => i(t, "switch[]"),
  variable: (t) => l(t, "variable"),
  "variable[]": (t) => i(t, "variable[]"),
  troop: (t) => l(t, "troop"),
  "troop[]": (t) => i(t, "troop[]"),
  boolean: (t) => {
    const e = { default: (r) => r === "true", text: c, desc: c, on: c, off: c, parent: c };
    return p("boolean", !0, t.attr, e);
  },
  file: (t) => {
    const e = { default: c, text: c, desc: c, parent: c, dir: c };
    return { dir: "", ...p("file", "", t.attr, e) };
  },
  "file[]": (t) => {
    const e = { default: (r) => W(r), text: c, desc: c, parent: c, dir: c };
    return {
      dir: "",
      ...g("file[]", t.attr, e)
    };
  }
}, Nt = (t) => new Map(t.map((e) => [e.struct, e.params.map((r) => r.attr)])), N = (t) => ({ ...typeof t.desc == "string" ? { desc: t.desc } : {}, ...typeof t.text == "string" ? {
  text: t.text
} : {} }), h = (t) => {
  const e = mt(t), r = ut(e);
  return ot(r);
}, mt = (t) => {
  if (t.currentParam && t.currentOption) {
    const e = t.currentParam.attr.kind;
    if (e === "select" || e === "combo") return {
      ...t,
      currentParam: { ...t.currentParam, options: nt(t.currentOption).items }
    };
  }
  return t;
}, ot = (t) => t.currentParam ? {
  ...t,
  params: [...t.params, t.currentParam],
  currentParam: null,
  currentContext: null
} : t, ut = (t) => {
  if (!t.currentCommand) return t;
  const e = t.currentParam ? [...t.currentCommand.args, t.currentParam] : t.currentCommand.args, r = {
    ...N(t.currentCommand),
    command: t.currentCommand.command,
    args: e
  };
  return { ...t, commands: [...t.commands, r], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, it = (t) => {
  const e = ((s) => {
    const m = s.split(`
`), o = { structs: [], bodies: [], structName: void 0, locale: void 0, lines: [], blockType: P }, f = m.reduce((u, H) => {
      const b = H.trim(), T = b.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return T ? rt(u, T) : b === "/*:" ? at(u) : b === "*/" ? u.lines.length > 0 ? w(u) : u : { ...u, lines: u.lines.concat([b]) };
    }, o);
    return { structs: f.structs, bodies: f.bodies };
  })(t), r = e.structs.map((s) => lt(s)), a = dt(e);
  if (!a) return { params: [], commands: [], meta: {}, helpLines: [], structs: r };
  const n = K(a, R);
  return {
    params: n.params,
    commands: n.commands,
    meta: n.meta,
    helpLines: n.helpLines,
    structs: r
  };
}, lt = (t) => {
  const e = K(t, R);
  return { name: t.struct, params: e.params };
}, dt = (t) => {
  if (t.bodies.length !== 0) return t.bodies[0];
}, K = (t, e) => {
  const r = t.lines.reduce((a, n) => {
    const s = n.trimEnd().replace(/^[\*\s]*/, "");
    if (!s.startsWith("@")) return a.currentContext === J ? {
      ...a,
      helpLines: a.helpLines.concat(s)
    } : a;
    const m = s.match(/^@(\S+)\s*(.*)$/);
    if (!m) return a;
    const [, o, f] = m, u = e[o];
    return u ? u(a, f.trim()) : a;
  }, pt());
  return h(r);
}, pt = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), d = (t, e, r) => t.currentParam && !(e in t.currentParam.attr) ? { ...t, currentParam: { ...t.currentParam, attr: { ...t.currentParam.attr, [e]: r } } } : t, C = (t, e, r) => ({
  ...t,
  meta: { [e]: r, ...t.meta }
}), R = {
  param: (t, e) => {
    const r = h(t);
    return r.params.some((a) => a.name === e) ? r : { ...r, currentContext: "param", currentParam: { name: e, attr: {} } };
  },
  text: (t, e) => t.currentParam ? d(t, A, e) : t.currentCommand && !(A in t.currentCommand) ? { ...t, currentCommand: {
    ...N(t.currentCommand),
    command: t.currentCommand.command,
    args: t.currentCommand.args,
    [A]: e
  } } : t,
  desc: (t, e) => t.currentParam ? d(t, "desc", e) : t.currentCommand ? { ...t, currentCommand: { ...t.currentCommand, desc: e } } : t,
  command: (t, e) => {
    const r = h(t);
    return r.commands.some((a) => a.command === e) ? r : { ...r, currentCommand: { command: e, args: [] }, currentParam: null };
  },
  arg: (t, e) => {
    if (!t.currentCommand) return t;
    if (!t.currentParam) return {
      ...t,
      currentParam: { name: e, attr: {} }
    };
    const r = { ...N(t.currentCommand), command: t.currentCommand.command, args: t.currentCommand.args.concat(t.currentParam) };
    return {
      ...t,
      commands: t.commands,
      currentCommand: r,
      currentContext: "arg",
      currentParam: { name: e, attr: {} }
    };
  },
  help: (t) => ({ ...h(t), currentContext: J }),
  option: (t, e) => {
    if (!t.currentParam) return t;
    const r = ((a, n) => a.currentOption ? { items: a.items.concat({ option: a.currentOption, value: a.currentOption }), currentOption: n } : { items: a.items, currentOption: n })(t.currentOption ?? {
      items: []
    }, e);
    return { ...t, currentOption: r };
  },
  value: (t, e) => {
    if (!t.currentOption) return t;
    const r = ((a, n) => a.currentOption ? { items: a.items.concat({ option: a.currentOption, value: n }) } : {
      items: a.items
    })(t.currentOption, e);
    return { ...t, currentOption: r };
  },
  type: (t, e) => {
    if (((r) => r.endsWith(">") && r.startsWith("struct<"))(e)) {
      const r = e.slice(7, -1), a = d(t, E, r);
      return d(a, S, E);
    }
    return t.currentParam ? d(t, S, e) : t;
  },
  default: (t, e) => d(t, "default", e),
  on: (t, e) => d(t, "on", e),
  off: (t, e) => d(t, "off", e),
  min: (t, e) => d(t, "min", e),
  max: (t, e) => d(t, "max", e),
  base: (t, e) => {
    return { ...t, dependencies: (r = t.dependencies, a = e, { orderAfter: r.orderAfter, orderBefore: r.orderBefore, base: r.base.concat(a) }) };
    var r, a;
  },
  orderAfter: (t, e) => {
    return { ...t, dependencies: (r = t.dependencies, a = e, { base: r.base, orderBefore: r.orderBefore, orderAfter: r.orderAfter.concat(a) }) };
    var r, a;
  },
  orderBefore: (t, e) => {
    return {
      ...t,
      dependencies: (r = t.dependencies, a = e, { base: r.base, orderAfter: r.orderAfter, orderBefore: r.orderBefore.concat(a) })
    };
    var r, a;
  },
  author: (t, e) => C(t, "author", e),
  plugindesc: (t, e) => C(t, "plugindesc", e),
  url: (t, e) => C(t, "url", e)
}, ft = (t) => ({
  target: "MZ",
  meta: t.meta,
  commands: bt(t.commands),
  params: B(t.params),
  structs: Pt(t.structs)
}), B = (t) => Object.fromEntries(t.map((e) => [e.name, st(e)])), bt = (t) => Object.fromEntries(t.map((e) => [e.command, {
  desc: e.desc,
  text: e.text,
  args: B(e.args)
}])), Pt = (t) => Object.fromEntries(t.map((e) => [e.name, { params: B(e.params) }])), kt = (t) => ((e) => ft(it(e)))(t);
export {
  Ct as classifyFileParams,
  At as classifyPluginParams,
  vt as classifyTextParams,
  X as collectDependentStructNames,
  st as compileAttributes,
  Bt as convertPluginCommandSchema,
  Tt as convertStructSchema,
  Nt as createStructMap,
  Ot as filterPluginSchemaByFileParam,
  yt as filterPluginSchemaByNumberParam,
  O as filterPluginSchemaByParam,
  gt as filterPluginSchemaByStringParam,
  xt as filterPluginSchemaByVariableParam,
  Et as hasNumberValueParam,
  L as hasStructAttr,
  v as hasTextAttr,
  G as isArrayAttr,
  Ft as isArrayParam,
  _t as isArrayParamEx,
  $ as isFileAttr,
  Lt as isNumberArrayParam,
  U as isNumberAttr,
  Vt as isNumberValueParam,
  Dt as isNumberValueParamEx,
  It as isRmmzDataKind,
  Mt as isScalarParam,
  zt as isStringArrayParam,
  Jt as isStringValueParam,
  q as isStructArrayAttr,
  Q as isStructArrayParam,
  V as isStructParam,
  Y as isVariableAttr,
  Wt as lookupKind,
  Zt as paramHasText,
  kt as pluginSourceToJSON,
  et as rebuildCommands,
  St as structDependencies,
  Kt as toArrayPluginParam,
  Rt as toObjectPluginParams
};
