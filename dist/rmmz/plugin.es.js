import { i as jr, l as _r } from "../shared/lookupRpgDataKind.es.js";
const A = (r) => r.kind.endsWith("[]"), fr = (r, e) => !!A(r) && r.kind === `${e}[]`, U = (r) => r.kind !== "struct" && !A(r), j = (r) => r.kind === "struct", Y = (r) => j(r.attr) || _(r.attr), _ = (r) => r.kind === "struct[]", br = (r) => {
  var e;
  return ((e = y[r.kind]) == null ? void 0 : e.hasText) === !0;
}, hr = (r) => {
  var e;
  return ((e = y[r.attr.kind]) == null ? void 0 : e.hasText) === !0;
}, yr = (r) => y[r.kind].type === "string", q = (r) => U(r) && G(r), G = (r) => y[r.kind].type === "number", gr = (r) => A(r) ? Q(r) : q(r), Q = (r) => y[r.kind.replace("[]", "")].type === "number", xr = (r) => {
  var e;
  return ((e = y[r.attr.kind]) == null ? void 0 : e.type) === "number";
}, Pr = (r) => y[r.kind.replace("[]", "")].type === "string", kr = (r) => r.attr.kind === "variable" || r.attr.kind === "variable[]", Or = (r) => r.attr.kind === "file" || r.attr.kind === "file[]", h = {
  type: "string",
  hasText: !0
}, u = { type: "number", hasText: !1 }, m = { type: "number", hasText: !1 }, y = {
  string: h,
  number: { type: "number", hasText: !1 },
  boolean: { type: "boolean" },
  armor: u,
  actor: u,
  class: u,
  enemy: u,
  skill: u,
  state: u,
  item: u,
  weapon: u,
  common_event: u,
  switch: u,
  variable: u,
  troop: u,
  multiline_string: h,
  file: { type: "string", hasText: !1 },
  "file[]": { type: "string", hasText: !1 },
  "multiline_string[]": h,
  "string[]": h,
  combo: h,
  select: h,
  any: h,
  struct: { type: "struct" },
  "actor[]": m,
  "enemy[]": m,
  "class[]": m,
  "skill[]": m,
  "state[]": m,
  "item[]": m,
  "weapon[]": m,
  "common_event[]": m,
  "troop[]": m,
  "armor[]": m,
  "switch[]": m,
  "variable[]": m,
  "number[]": m
}, vr = (r) => {
  const e = [], t = [], n = [], c = [];
  return r.params.forEach((a) => {
    j(a.attr) ? e.push({
      name: a.name,
      attr: a.attr
    }) : _(a.attr) ? t.push({ name: a.name, attr: a.attr }) : A(a.attr) ? c.push({ name: a.name, attr: a.attr }) : n.push({ name: a.name, attr: a.attr });
  }), {
    structs: e,
    structArrays: t,
    scalas: n,
    scalaArrays: c
  };
}, Cr = (r, e) => {
  const t = function(n) {
    return Object.fromEntries(n.map((c) => [c.struct, c.params.filter(Y)]));
  }(r);
  return function(n, c, a) {
    return n.reduce((o) => {
      if (!o.changed) return o;
      const g = n.filter((b) => !o.names.has(b) && c[b].some((i) => o.names.has(i.attr.struct)));
      return g.length === 0 ? { names: o.names, changed: !1 } : {
        names: /* @__PURE__ */ new Set([...o.names, ...g]),
        changed: !0
      };
    }, { names: a, changed: !0 }).names;
  }(Object.keys(t), t, new Set(e));
}, I = (r, e, t) => {
  const n = e.get(r);
  return n ? n.filter((c) => ((a, o) => !(!j(a) && !_(a) || !a.struct || o.has(a.struct)))(c, t)).flatMap((c) => {
    const a = c.struct;
    return t.add(a), [a, ...I(a, e, t)];
  }) : [];
}, Ar = (r, e) => I(r, e, /* @__PURE__ */ new Set()), M = (r, e) => Object.entries(e).reduce((t, [n, c]) => {
  if (n in r) {
    const a = r[n];
    if (typeof a == "string") return { ...t, [n]: c(a) };
  }
  return t;
}, {}), f = (r, e, t, n) => ({
  default: e,
  ...M(t, n),
  kind: r
}), O = (r, e, t) => ({ default: [], ...M(e, t), kind: r }), W = "BODY", z = "STRUCT", P = "NONE", X = (r, e) => {
  const t = r.lines.length > 0 ? E(r) : r, n = e[1] || void 0;
  return {
    ...t,
    structName: n,
    blockType: n ? z : "INVALID",
    locale: e[2],
    lines: []
  };
}, rr = (r) => ({ ...r.lines.length > 0 ? E(r) : r, blockType: W, structName: void 0, locale: void 0, lines: [] }), E = (r) => r.blockType === W ? {
  ...r,
  bodies: r.bodies.concat([{ lines: [...r.lines] }]),
  lines: [],
  blockType: P
} : r.structName && r.blockType === z ? { ...r, structs: r.structs.concat([{
  struct: r.structName,
  locale: r.locale,
  lines: [...r.lines]
}]), blockType: P, structName: void 0, locale: void 0, lines: [] } : { ...r, blockType: P, structName: void 0, lines: [] }, er = (r) => r.currentOption ? { items: r.items.concat({
  option: r.currentOption,
  value: r.currentOption
}) } : r, J = "help", S = "kind", N = "text", L = "struct", Z = (r) => {
  const e = JSON.parse(r);
  return Array.isArray(e) ? e.map(v) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, v(n)])) : e;
}, v = (r) => {
  if (typeof r != "string") return r;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.map(v) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, v(n)])) : e;
  } catch {
    return r;
  }
}, tr = (r) => {
  if (S in r.attr) {
    const e = nr[r.attr.kind];
    if (e) return e(r);
  }
  return f("any", "", r.attr, C);
}, s = (r) => r, K = (r) => r.replace("[", "").replace("]", "").split(",").map((e) => parseFloat(e.replaceAll('"', "").trim())).filter((e) => !isNaN(e)), C = {
  default: s,
  text: s,
  desc: s,
  parent: s
}, V = (r) => f("string", "", r.attr, C), D = (r) => {
  const e = { default: (t) => Z(t), text: s, desc: s, parent: s };
  return O("string[]", r.attr, e);
}, l = (r, e) => {
  const t = { default: K, text: s, desc: s, parent: s };
  return O(e, r.attr, t);
}, d = (r, e) => {
  const t = { default: (n) => parseInt(n, 10), text: s, desc: s, parent: s };
  return f(e, 0, r.attr, t);
}, nr = {
  number: (r) => ((e) => {
    const t = {
      default: (n) => parseFloat(n),
      text: s,
      desc: s,
      decimals: (n) => parseInt(n, 10),
      min: (n) => parseFloat(n),
      max: (n) => parseFloat(n),
      parent: s
    };
    return f("number", 0, e.attr, t);
  })(r),
  "number[]": (r) => {
    const e = {
      default: K,
      text: s,
      desc: s,
      decimals: (t) => parseInt(t, 10),
      min: (t) => parseFloat(t),
      max: (t) => parseFloat(t),
      parent: s
    };
    return O("number[]", r.attr, e);
  },
  string: V,
  "string[]": D,
  multiline_string: V,
  "multiline_string[]": D,
  combo: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((n) => n.option)) ?? [];
    return { ...f("combo", "", r.attr, C), options: e };
  },
  select: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((n) => ({ option: n.option, value: n.value }))) ?? [];
    return { ...f("select", "", r.attr, C), options: e };
  },
  actor: (r) => d(r, "actor"),
  "actor[]": (r) => l(r, "actor[]"),
  class: (r) => d(r, "class"),
  "class[]": (r) => l(r, "class[]"),
  skill: (r) => d(r, "skill"),
  "skill[]": (r) => l(r, "skill[]"),
  item: (r) => d(r, "item"),
  "item[]": (r) => l(r, "item[]"),
  weapon: (r) => d(r, "weapon"),
  "weapon[]": (r) => l(r, "weapon[]"),
  armor: (r) => d(r, "armor"),
  "armor[]": (r) => l(r, "armor[]"),
  state: (r) => d(r, "state"),
  "state[]": (r) => l(r, "state[]"),
  enemy: (r) => d(r, "enemy"),
  "enemy[]": (r) => l(r, "enemy[]"),
  common_event: (r) => d(r, "common_event"),
  "common_event[]": (r) => l(r, "common_event[]"),
  switch: (r) => d(r, "switch"),
  "switch[]": (r) => l(r, "switch[]"),
  variable: (r) => d(r, "variable"),
  "variable[]": (r) => l(r, "variable[]"),
  troop: (r) => d(r, "troop"),
  "troop[]": (r) => l(r, "troop[]"),
  boolean: (r) => {
    const e = { default: (t) => t === "true", text: s, desc: s, on: s, off: s, parent: s };
    return f("boolean", !0, r.attr, e);
  },
  file: (r) => {
    const e = { default: s, text: s, desc: s, parent: s, dir: s };
    return {
      dir: "",
      ...f("file", "", r.attr, e)
    };
  },
  "file[]": (r) => {
    const e = { default: (t) => Z(t), text: s, desc: s, parent: s, dir: s };
    return { dir: "", ...O("file[]", r.attr, e) };
  }
}, Nr = (r) => new Map(r.map((e) => [e.struct, e.params.map((t) => t.attr)])), w = (r) => ({ ...typeof r.desc == "string" ? { desc: r.desc } : {}, ...typeof r.text == "string" ? { text: r.text } : {} }), k = (r) => {
  const e = ar(r), t = cr(e);
  return sr(t);
}, ar = (r) => {
  if (r.currentParam && r.currentOption) {
    const e = r.currentParam.attr.kind;
    if (e === "select" || e === "combo") return { ...r, currentParam: {
      ...r.currentParam,
      options: er(r.currentOption).items
    } };
  }
  return r;
}, sr = (r) => r.currentParam ? { ...r, params: [...r.params, r.currentParam], currentParam: null, currentContext: null } : r, cr = (r) => {
  if (!r.currentCommand) return r;
  const e = r.currentParam ? [...r.currentCommand.args, r.currentParam] : r.currentCommand.args, t = {
    ...w(r.currentCommand),
    command: r.currentCommand.command,
    args: e
  };
  return { ...r, commands: [...r.commands, t], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, or = (r) => {
  const e = ((a) => {
    const o = a.split(`
`), g = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: P
    }, b = o.reduce((i, H) => {
      const x = H.trim(), F = x.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return F ? X(i, F) : x === "/*:" ? rr(i) : x === "*/" ? i.lines.length > 0 ? E(i) : i : { ...i, lines: i.lines.concat([x]) };
    }, g);
    return { structs: b.structs, bodies: b.bodies };
  })(r), t = e.structs.map((a) => mr(a)), n = ir(e);
  if (!n) return { params: [], commands: [], meta: {}, helpLines: [], structs: t };
  const c = R(n, $);
  return {
    params: c.params,
    commands: c.commands,
    meta: c.meta,
    helpLines: c.helpLines,
    structs: t
  };
}, mr = (r) => {
  const e = R(r, $);
  return { name: r.struct, params: e.params };
}, ir = (r) => {
  if (r.bodies.length !== 0) return r.bodies[0];
}, R = (r, e) => {
  const t = r.lines.reduce((n, c) => {
    const a = c.trimEnd().replace(/^[\*\s]*/, "");
    if (!a.startsWith("@")) return n.currentContext === J ? { ...n, helpLines: n.helpLines.concat(a) } : n;
    const o = a.match(/^@(\S+)\s*(.*)$/);
    if (!o) return n;
    const [, g, b] = o, i = e[g];
    return i ? i(n, b.trim()) : n;
  }, ur());
  return k(t);
}, ur = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), p = (r, e, t) => r.currentParam && !(e in r.currentParam.attr) ? { ...r, currentParam: { ...r.currentParam, attr: { ...r.currentParam.attr, [e]: t } } } : r, T = (r, e, t) => ({
  ...r,
  meta: { [e]: t, ...r.meta }
}), $ = {
  param: (r, e) => {
    const t = k(r);
    return t.params.some((n) => n.name === e) ? t : { ...t, currentContext: "param", currentParam: { name: e, attr: {} } };
  },
  text: (r, e) => r.currentParam ? p(r, N, e) : r.currentCommand && !(N in r.currentCommand) ? { ...r, currentCommand: {
    ...w(r.currentCommand),
    command: r.currentCommand.command,
    args: r.currentCommand.args,
    [N]: e
  } } : r,
  desc: (r, e) => r.currentParam ? p(r, "desc", e) : r.currentCommand ? { ...r, currentCommand: { ...r.currentCommand, desc: e } } : r,
  command: (r, e) => {
    const t = k(r);
    return t.commands.some((n) => n.command === e) ? t : { ...t, currentCommand: { command: e, args: [] }, currentParam: null };
  },
  arg: (r, e) => {
    if (!r.currentCommand) return r;
    if (!r.currentParam) return {
      ...r,
      currentParam: { name: e, attr: {} }
    };
    const t = { ...w(r.currentCommand), command: r.currentCommand.command, args: r.currentCommand.args.concat(r.currentParam) };
    return {
      ...r,
      commands: r.commands,
      currentCommand: t,
      currentContext: "arg",
      currentParam: { name: e, attr: {} }
    };
  },
  help: (r) => ({ ...k(r), currentContext: J }),
  option: (r, e) => {
    if (!r.currentParam) return r;
    const t = ((n, c) => n.currentOption ? { items: n.items.concat({ option: n.currentOption, value: n.currentOption }), currentOption: c } : { items: n.items, currentOption: c })(r.currentOption ?? {
      items: []
    }, e);
    return { ...r, currentOption: t };
  },
  value: (r, e) => {
    if (!r.currentOption) return r;
    const t = ((n, c) => n.currentOption ? { items: n.items.concat({ option: n.currentOption, value: c }) } : {
      items: n.items
    })(r.currentOption, e);
    return { ...r, currentOption: t };
  },
  type: (r, e) => {
    if (((t) => t.endsWith(">") && t.startsWith("struct<"))(e)) {
      const t = e.slice(7, -1), n = p(r, L, t);
      return p(n, S, L);
    }
    return r.currentParam ? p(r, S, e) : r;
  },
  default: (r, e) => p(r, "default", e),
  on: (r, e) => p(r, "on", e),
  off: (r, e) => p(r, "off", e),
  min: (r, e) => p(r, "min", e),
  max: (r, e) => p(r, "max", e),
  base: (r, e) => {
    return { ...r, dependencies: (t = r.dependencies, n = e, { orderAfter: t.orderAfter, orderBefore: t.orderBefore, base: t.base.concat(n) }) };
    var t, n;
  },
  orderAfter: (r, e) => {
    return { ...r, dependencies: (t = r.dependencies, n = e, { base: t.base, orderBefore: t.orderBefore, orderAfter: t.orderAfter.concat(n) }) };
    var t, n;
  },
  orderBefore: (r, e) => {
    return {
      ...r,
      dependencies: (t = r.dependencies, n = e, { base: t.base, orderAfter: t.orderAfter, orderBefore: t.orderBefore.concat(n) })
    };
    var t, n;
  },
  author: (r, e) => T(r, "author", e),
  plugindesc: (r, e) => T(r, "plugindesc", e),
  url: (r, e) => T(r, "url", e)
}, lr = (r) => ({
  target: "MZ",
  meta: r.meta,
  commands: dr(r.commands),
  params: B(r.params),
  structs: pr(r.structs)
}), B = (r) => Object.fromEntries(r.map((e) => [e.name, tr(e)])), dr = (r) => Object.fromEntries(r.map((e) => [e.command, {
  desc: e.desc,
  text: e.text,
  args: B(e.args)
}])), pr = (r) => Object.fromEntries(r.map((e) => [e.name, { params: B(e.params) }])), Tr = (r) => ((e) => lr(or(e)))(r);
export {
  vr as classifyPluginParams,
  Cr as collectDependentStructNames,
  tr as compileAttributes,
  Nr as createStructMap,
  gr as hasNumberValueParam,
  hr as hasTextAttr,
  A as isArrayParam,
  fr as isArrayParamEx,
  Or as isFileAttr,
  Q as isNumberArrayParam,
  xr as isNumberAttr,
  q as isNumberValueParam,
  G as isNumberValueParamEx,
  jr as isRmmzDataKind,
  U as isScalarParam,
  Pr as isStringArrayParam,
  yr as isStringValueParam,
  _ as isStructArrayParam,
  Y as isStructAttr,
  j as isStructParam,
  kr as isVariableAttr,
  _r as lookupKind,
  br as paramHasText,
  Tr as pluginSourceToJSON,
  Ar as structDependencies
};
