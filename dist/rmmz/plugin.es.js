import { t as rr } from "../shared/textAndDesc.es.js";
import { i as Yr, l as qr } from "../shared/lookupRpgDataKind.es.js";
const C = (r) => r.kind.endsWith("[]"), er = (r) => C(r.attr), wr = (r, e) => !!C(r) && r.kind === `${e}[]`, tr = (r) => r.kind !== "struct" && !C(r), E = (r) => r.kind === "struct", z = (r) => E(r.attr) || J(r.attr), J = (r) => r.kind === "struct[]", ar = (r) => r.attr.kind === "struct[]", jr = (r) => {
  var e;
  return ((e = y[r.kind]) == null ? void 0 : e.hasText) === !0;
}, w = (r) => {
  var e;
  return ((e = y[r.attr.kind]) == null ? void 0 : e.hasText) === !0;
}, Br = (r) => y[r.kind].type === "string", nr = (r) => tr(r) && sr(r), sr = (r) => y[r.kind].type === "number", Er = (r) => C(r) ? cr(r) : nr(r), cr = (r) => y[r.kind.replace("[]", "")].type === "number", mr = (r) => {
  var e;
  return ((e = y[r.attr.kind]) == null ? void 0 : e.type) === "number";
}, _r = (r) => y[r.kind.replace("[]", "")].type === "string", or = (r) => r.attr.kind === "variable" || r.attr.kind === "variable[]", ir = (r) => r.attr.kind === "file" || r.attr.kind === "file[]", h = {
  type: "string",
  hasText: !0
}, l = { type: "number", hasText: !1 }, i = { type: "number", hasText: !1 }, y = {
  string: h,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: l,
  actor: l,
  class: l,
  enemy: l,
  skill: l,
  state: l,
  item: l,
  weapon: l,
  common_event: l,
  switch: l,
  variable: l,
  troop: l,
  multiline_string: h,
  file: { type: "string", hasText: !1 },
  "file[]": { type: "string", hasText: !1 },
  "multiline_string[]": h,
  "string[]": h,
  combo: h,
  select: h,
  any: h,
  struct: { type: "struct" },
  "actor[]": i,
  "enemy[]": i,
  "class[]": i,
  "skill[]": i,
  "state[]": i,
  "item[]": i,
  "weapon[]": i,
  "common_event[]": i,
  "troop[]": i,
  "armor[]": i,
  "switch[]": i,
  "variable[]": i,
  "number[]": i
}, ur = (r, e) => {
  const t = function(a) {
    return Object.fromEntries(a.map((n) => [n.struct, n.params.filter(z)]));
  }(r);
  return function(a, n, s) {
    return a.reduce((m) => {
      if (!m.changed) return m;
      const o = a.filter((g) => !m.names.has(g) && n[g].some((u) => m.names.has(u.attr.struct)));
      return o.length === 0 ? { names: m.names, changed: !1 } : { names: /* @__PURE__ */ new Set([...m.names, ...o]), changed: !0 };
    }, {
      names: s,
      changed: !0
    }).names;
  }(Object.keys(t), t, new Set(e));
}, S = (r, e) => {
  const t = r.structs.filter((s) => s.params.some((m) => e(m))), a = new Set(t.map((s) => s.struct)), n = ur(r.structs, a);
  return {
    structs: lr(r.structs, n, e),
    commands: dr(r.commands, n, e),
    params: _(r.params, n, e)
  };
}, _ = (r, e, t) => r.filter((a) => z(a) ? e.has(a.attr.struct) : t(a)), lr = (r, e, t) => r.reduce((a, n) => {
  const s = _(n.params, e, t);
  return s.length === 0 || a.push({ struct: n.struct, params: s }), a;
}, []), dr = (r, e, t) => r.reduce((a, n) => {
  const s = _(n.args, e, t);
  return s.length === 0 || a.push({ ...n.desc ? {
    desc: n.desc
  } : {}, ...n.text ? { text: n.text } : {}, command: n.command, args: s }), a;
}, []), Fr = (r) => S(r, w), Lr = (r) => S(r, mr), Vr = (r) => S(r, or), Dr = (r) => S(r, ir), Ir = (r) => F(r, (e) => !0, (e) => !0), Mr = (r) => F(r, (e) => e.attr.kind === "file", (e) => e.attr.kind === "file[]"), Wr = (r) => F(r, (e) => w(e), (e) => w(e)), F = (r, e, t) => {
  const a = [], n = [], s = [], m = [];
  return r.forEach((o) => {
    if (E(o.attr)) a.push({ name: o.name, attr: o.attr });
    else if (ar(o)) n.push(o);
    else if (er(o)) {
      if (t(o)) return void m.push(o);
    } else e(o) && s.push(o);
  }), { structs: a, structArrays: n, scalas: s, scalaArrays: m };
};
function Z(r) {
  const e = r.map((t) => [t.name, t.attr]);
  return Object.fromEntries(e);
}
const zr = (r) => Object.entries(r).map(([e, t]) => ({ name: e, attr: t })), Jr = (r) => ({ struct: r.struct, params: Z(r.params) }), Zr = (r) => ({ ...rr(r), command: r.command, args: Z(r.args) }), K = (r, e, t) => {
  const a = e.get(r);
  return a ? a.filter((n) => ((s, m) => !(!E(s) && !J(s) || !s.struct || m.has(s.struct)))(n, t)).flatMap((n) => {
    const s = n.struct;
    return t.add(s), [s, ...K(s, e, t)];
  }) : [];
}, Kr = (r, e) => K(r, e, /* @__PURE__ */ new Set()), R = (r, e) => Object.entries(e).reduce((t, [a, n]) => {
  if (a in r) {
    const s = r[a];
    if (typeof s == "string") return { ...t, [a]: n(s) };
  }
  return t;
}, {}), b = (r, e, t, a) => ({
  default: e,
  ...R(t, a),
  kind: r
}), O = (r, e, t) => ({ default: [], ...R(e, t), kind: r }), $ = "BODY", H = "STRUCT", x = "NONE", pr = (r, e) => {
  const t = r.lines.length > 0 ? L(r) : r, a = e[1] || void 0;
  return {
    ...t,
    structName: a,
    blockType: a ? H : "INVALID",
    locale: e[2],
    lines: []
  };
}, fr = (r) => ({ ...r.lines.length > 0 ? L(r) : r, blockType: $, structName: void 0, locale: void 0, lines: [] }), L = (r) => r.blockType === $ ? {
  ...r,
  bodies: r.bodies.concat([{ lines: [...r.lines] }]),
  lines: [],
  blockType: x
} : r.structName && r.blockType === H ? { ...r, structs: r.structs.concat([{
  struct: r.structName,
  locale: r.locale,
  lines: [...r.lines]
}]), blockType: x, structName: void 0, locale: void 0, lines: [] } : { ...r, blockType: x, structName: void 0, lines: [] }, br = (r) => r.currentOption ? { items: r.items.concat({
  option: r.currentOption,
  value: r.currentOption
}) } : r, U = "help", j = "kind", N = "text", I = "struct", Y = (r) => {
  const e = JSON.parse(r);
  return Array.isArray(e) ? e.map(v) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, a]) => [t, v(a)])) : e;
}, v = (r) => {
  if (typeof r != "string") return r;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.map(v) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, a]) => [t, v(a)])) : e;
  } catch {
    return r;
  }
}, gr = (r) => {
  if (j in r.attr) {
    const e = hr[r.attr.kind];
    if (e) return e(r);
  }
  return b("any", "", r.attr, A);
}, c = (r) => r, q = (r) => r.replace("[", "").replace("]", "").split(",").map((e) => parseFloat(e.replaceAll('"', "").trim())).filter((e) => !isNaN(e)), A = {
  default: c,
  text: c,
  desc: c,
  parent: c
}, M = (r) => b("string", "", r.attr, A), W = (r) => {
  const e = { default: (t) => Y(t), text: c, desc: c, parent: c };
  return O("string[]", r.attr, e);
}, d = (r, e) => {
  const t = {
    default: q,
    text: c,
    desc: c,
    parent: c
  };
  return O(e, r.attr, t);
}, p = (r, e) => {
  const t = { default: (a) => parseInt(a, 10), text: c, desc: c, parent: c };
  return b(e, 0, r.attr, t);
}, hr = {
  number: (r) => ((e) => {
    const t = {
      default: (a) => parseFloat(a),
      text: c,
      desc: c,
      decimals: (a) => parseInt(a, 10),
      min: (a) => parseFloat(a),
      max: (a) => parseFloat(a),
      parent: c
    };
    return b("number", 0, e.attr, t);
  })(r),
  "number[]": (r) => {
    const e = {
      default: q,
      text: c,
      desc: c,
      decimals: (t) => parseInt(t, 10),
      min: (t) => parseFloat(t),
      max: (t) => parseFloat(t),
      parent: c
    };
    return O("number[]", r.attr, e);
  },
  string: M,
  "string[]": W,
  multiline_string: M,
  "multiline_string[]": W,
  combo: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((a) => a.option)) ?? [];
    return { ...b("combo", "", r.attr, A), options: e };
  },
  select: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((a) => ({
      option: a.option,
      value: a.value
    }))) ?? [];
    return { ...b("select", "", r.attr, A), options: e };
  },
  actor: (r) => p(r, "actor"),
  "actor[]": (r) => d(r, "actor[]"),
  class: (r) => p(r, "class"),
  "class[]": (r) => d(r, "class[]"),
  skill: (r) => p(r, "skill"),
  "skill[]": (r) => d(r, "skill[]"),
  item: (r) => p(r, "item"),
  "item[]": (r) => d(r, "item[]"),
  weapon: (r) => p(r, "weapon"),
  "weapon[]": (r) => d(r, "weapon[]"),
  armor: (r) => p(r, "armor"),
  "armor[]": (r) => d(r, "armor[]"),
  state: (r) => p(r, "state"),
  "state[]": (r) => d(r, "state[]"),
  enemy: (r) => p(r, "enemy"),
  "enemy[]": (r) => d(r, "enemy[]"),
  common_event: (r) => p(r, "common_event"),
  "common_event[]": (r) => d(r, "common_event[]"),
  switch: (r) => p(r, "switch"),
  "switch[]": (r) => d(r, "switch[]"),
  variable: (r) => p(r, "variable"),
  "variable[]": (r) => d(r, "variable[]"),
  troop: (r) => p(r, "troop"),
  "troop[]": (r) => d(r, "troop[]"),
  boolean: (r) => {
    const e = { default: (t) => t === "true", text: c, desc: c, on: c, off: c, parent: c };
    return b("boolean", !0, r.attr, e);
  },
  file: (r) => {
    const e = { default: c, text: c, desc: c, parent: c, dir: c };
    return { dir: "", ...b("file", "", r.attr, e) };
  },
  "file[]": (r) => {
    const e = { default: (t) => Y(t), text: c, desc: c, parent: c, dir: c };
    return {
      dir: "",
      ...O("file[]", r.attr, e)
    };
  }
}, Rr = (r) => new Map(r.map((e) => [e.struct, e.params.map((t) => t.attr)])), B = (r) => ({ ...typeof r.desc == "string" ? { desc: r.desc } : {}, ...typeof r.text == "string" ? {
  text: r.text
} : {} }), k = (r) => {
  const e = yr(r), t = xr(e);
  return Pr(t);
}, yr = (r) => {
  if (r.currentParam && r.currentOption) {
    const e = r.currentParam.attr.kind;
    if (e === "select" || e === "combo") return {
      ...r,
      currentParam: { ...r.currentParam, options: br(r.currentOption).items }
    };
  }
  return r;
}, Pr = (r) => r.currentParam ? {
  ...r,
  params: [...r.params, r.currentParam],
  currentParam: null,
  currentContext: null
} : r, xr = (r) => {
  if (!r.currentCommand) return r;
  const e = r.currentParam ? [...r.currentCommand.args, r.currentParam] : r.currentCommand.args, t = {
    ...B(r.currentCommand),
    command: r.currentCommand.command,
    args: e
  };
  return { ...r, commands: [...r.commands, t], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, kr = (r) => {
  const e = ((s) => {
    const m = s.split(`
`), o = { structs: [], bodies: [], structName: void 0, locale: void 0, lines: [], blockType: x }, g = m.reduce((u, X) => {
      const P = X.trim(), D = P.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return D ? pr(u, D) : P === "/*:" ? fr(u) : P === "*/" ? u.lines.length > 0 ? L(u) : u : { ...u, lines: u.lines.concat([P]) };
    }, o);
    return { structs: g.structs, bodies: g.bodies };
  })(r), t = e.structs.map((s) => Or(s)), a = vr(e);
  if (!a) return { params: [], commands: [], meta: {}, helpLines: [], structs: t };
  const n = G(a, Q);
  return {
    params: n.params,
    commands: n.commands,
    meta: n.meta,
    helpLines: n.helpLines,
    structs: t
  };
}, Or = (r) => {
  const e = G(r, Q);
  return { name: r.struct, params: e.params };
}, vr = (r) => {
  if (r.bodies.length !== 0) return r.bodies[0];
}, G = (r, e) => {
  const t = r.lines.reduce((a, n) => {
    const s = n.trimEnd().replace(/^[\*\s]*/, "");
    if (!s.startsWith("@")) return a.currentContext === U ? { ...a, helpLines: a.helpLines.concat(s) } : a;
    const m = s.match(/^@(\S+)\s*(.*)$/);
    if (!m) return a;
    const [, o, g] = m, u = e[o];
    return u ? u(a, g.trim()) : a;
  }, Ar());
  return k(t);
}, Ar = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), f = (r, e, t) => r.currentParam && !(e in r.currentParam.attr) ? { ...r, currentParam: { ...r.currentParam, attr: {
  ...r.currentParam.attr,
  [e]: t
} } } : r, T = (r, e, t) => ({ ...r, meta: { [e]: t, ...r.meta } }), Q = {
  param: (r, e) => {
    const t = k(r);
    return t.params.some((a) => a.name === e) ? t : {
      ...t,
      currentContext: "param",
      currentParam: { name: e, attr: {} }
    };
  },
  text: (r, e) => r.currentParam ? f(r, N, e) : r.currentCommand && !(N in r.currentCommand) ? { ...r, currentCommand: {
    ...B(r.currentCommand),
    command: r.currentCommand.command,
    args: r.currentCommand.args,
    [N]: e
  } } : r,
  desc: (r, e) => r.currentParam ? f(r, "desc", e) : r.currentCommand ? {
    ...r,
    currentCommand: { ...r.currentCommand, desc: e }
  } : r,
  command: (r, e) => {
    const t = k(r);
    return t.commands.some((a) => a.command === e) ? t : { ...t, currentCommand: { command: e, args: [] }, currentParam: null };
  },
  arg: (r, e) => {
    if (!r.currentCommand) return r;
    if (!r.currentParam) return { ...r, currentParam: { name: e, attr: {} } };
    const t = {
      ...B(r.currentCommand),
      command: r.currentCommand.command,
      args: r.currentCommand.args.concat(r.currentParam)
    };
    return { ...r, commands: r.commands, currentCommand: t, currentContext: "arg", currentParam: { name: e, attr: {} } };
  },
  help: (r) => ({
    ...k(r),
    currentContext: U
  }),
  option: (r, e) => {
    if (!r.currentParam) return r;
    const t = ((a, n) => a.currentOption ? {
      items: a.items.concat({ option: a.currentOption, value: a.currentOption }),
      currentOption: n
    } : { items: a.items, currentOption: n })(r.currentOption ?? { items: [] }, e);
    return { ...r, currentOption: t };
  },
  value: (r, e) => {
    if (!r.currentOption) return r;
    const t = ((a, n) => a.currentOption ? {
      items: a.items.concat({ option: a.currentOption, value: n })
    } : { items: a.items })(r.currentOption, e);
    return { ...r, currentOption: t };
  },
  type: (r, e) => {
    if (((t) => t.endsWith(">") && t.startsWith("struct<"))(e)) {
      const t = e.slice(7, -1), a = f(r, I, t);
      return f(a, j, I);
    }
    return r.currentParam ? f(r, j, e) : r;
  },
  default: (r, e) => f(r, "default", e),
  on: (r, e) => f(r, "on", e),
  off: (r, e) => f(r, "off", e),
  min: (r, e) => f(r, "min", e),
  max: (r, e) => f(r, "max", e),
  base: (r, e) => {
    return { ...r, dependencies: (t = r.dependencies, a = e, {
      orderAfter: t.orderAfter,
      orderBefore: t.orderBefore,
      base: t.base.concat(a)
    }) };
    var t, a;
  },
  orderAfter: (r, e) => {
    return { ...r, dependencies: (t = r.dependencies, a = e, {
      base: t.base,
      orderBefore: t.orderBefore,
      orderAfter: t.orderAfter.concat(a)
    }) };
    var t, a;
  },
  orderBefore: (r, e) => {
    return { ...r, dependencies: (t = r.dependencies, a = e, {
      base: t.base,
      orderAfter: t.orderAfter,
      orderBefore: t.orderBefore.concat(a)
    }) };
    var t, a;
  },
  author: (r, e) => T(r, "author", e),
  plugindesc: (r, e) => T(r, "plugindesc", e),
  url: (r, e) => T(r, "url", e)
}, Cr = (r) => ({
  target: "MZ",
  meta: r.meta,
  commands: Sr(r.commands),
  params: V(r.params),
  structs: Nr(r.structs)
}), V = (r) => Object.fromEntries(r.map((e) => [e.name, gr(e)])), Sr = (r) => Object.fromEntries(r.map((e) => [e.command, {
  desc: e.desc,
  text: e.text,
  args: V(e.args)
}])), Nr = (r) => Object.fromEntries(r.map((e) => [e.name, { params: V(e.params) }])), $r = (r) => ((e) => Cr(kr(e)))(r);
export {
  Mr as classifyFileParams,
  Ir as classifyPluginParams,
  Wr as classifyTextParams,
  ur as collectDependentStructNames,
  gr as compileAttributes,
  Zr as convertPluginCommandSchema,
  Jr as convertStructSchema,
  Rr as createStructMap,
  Dr as filterPluginSchemaByFileParam,
  Lr as filterPluginSchemaByNumberParam,
  S as filterPluginSchemaByParam,
  Fr as filterPluginSchemaByStringParam,
  Vr as filterPluginSchemaByVariableParam,
  Er as hasNumberValueParam,
  z as hasStructAttr,
  w as hasTextAttr,
  er as isArrayAttr,
  C as isArrayParam,
  wr as isArrayParamEx,
  ir as isFileAttr,
  cr as isNumberArrayParam,
  mr as isNumberAttr,
  nr as isNumberValueParam,
  sr as isNumberValueParamEx,
  Yr as isRmmzDataKind,
  tr as isScalarParam,
  _r as isStringArrayParam,
  Br as isStringValueParam,
  ar as isStructArrayAttr,
  J as isStructArrayParam,
  E as isStructParam,
  or as isVariableAttr,
  qr as lookupKind,
  jr as paramHasText,
  $r as pluginSourceToJSON,
  dr as rebuildCommands,
  Kr as structDependencies,
  zr as toArrayPluginParam,
  Z as toObjectPluginParams
};
