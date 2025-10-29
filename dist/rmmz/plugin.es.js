import { i as hr, l as Cr } from "../shared/lookup.es.js";
const w = (r) => r.kind.endsWith("[]"), ur = (r, e) => !!w(r) && r.kind === `${e}[]`, H = (r) => !w(r) && r.kind !== "struct", F = (r) => r.kind === "struct", I = (r) => r.kind === "struct[]", U = ["string", "multiline_string", "select", "combo", "any"], ir = (r) => U.includes(r.kind), C = {
  string: { type: "string" },
  number: { type: "number" },
  boolean: { type: "boolean" },
  armor: { type: "number" },
  actor: { type: "number" },
  class: { type: "number" },
  enemy: { type: "number" },
  skill: {
    type: "number"
  },
  state: { type: "number" },
  item: { type: "number" },
  weapon: { type: "number" },
  common_event: { type: "number" },
  switch: { type: "number" },
  variable: { type: "number" },
  troop: { type: "number" },
  multiline_string: { type: "string" },
  file: { type: "string" },
  combo: { type: "string" },
  select: { type: "string" },
  any: { type: "string" },
  struct: { type: "struct" }
}, lr = (r) => C[r.kind].type === "string", pr = (r) => H(r) && Y(r), Y = (r) => C[r.kind].type === "number", dr = (r) => C[r.kind.replace("[]", "")].type === "number", fr = (r) => C[r.kind.replace("[]", "")].type === "string", D = (r, e) => Object.entries(e).reduce((t, [n, c]) => {
  if (n in r) {
    const s = r[n];
    if (typeof s == "string") return { ...t, [n]: c(s) };
  }
  return t;
}, {}), l = (r, e, t, n) => ({ default: e, ...D(t, n), kind: r }), x = (r, e, t) => ({
  default: [],
  ...D(e, t),
  kind: r
}), M = "help", A = "kind", k = "text", _ = "struct", V = (r) => {
  const e = JSON.parse(r);
  return Array.isArray(e) ? e.map(O) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, O(n)])) : e;
}, O = (r) => {
  if (typeof r != "string") return r;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.map(O) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, O(n)])) : e;
  } catch {
    return r;
  }
}, $ = (r) => {
  if (A in r.attr) {
    const e = q[r.attr.kind];
    if (e) return e(r);
  }
  return l("any", "", r.attr, h);
}, a = (r) => r, W = (r) => r.replace("[", "").replace("]", "").split(",").map((e) => parseFloat(e.replaceAll('"', "").trim())).filter((e) => !isNaN(e)), h = {
  default: a,
  text: a,
  desc: a,
  parent: a
}, B = (r) => l("string", "", r.attr, h), E = (r) => {
  const e = { default: (t) => V(t), text: a, desc: a, parent: a };
  return x("string[]", r.attr, e);
}, o = (r, e) => {
  const t = { default: W, text: a, desc: a, parent: a };
  return x(e, r.attr, t);
}, m = (r, e) => {
  const t = { default: (n) => parseInt(n, 10), text: a, desc: a, parent: a };
  return l(e, 0, r.attr, t);
}, q = {
  number: (r) => ((e) => {
    const t = {
      default: (n) => parseFloat(n),
      text: a,
      desc: a,
      decimals: (n) => parseInt(n, 10),
      min: (n) => parseFloat(n),
      max: (n) => parseFloat(n),
      parent: a
    };
    return l("number", 0, e.attr, t);
  })(r),
  "number[]": (r) => {
    const e = {
      default: W,
      text: a,
      desc: a,
      decimals: (t) => parseInt(t, 10),
      min: (t) => parseFloat(t),
      max: (t) => parseFloat(t),
      parent: a
    };
    return x("number[]", r.attr, e);
  },
  string: B,
  "string[]": E,
  multiline_string: B,
  "multiline_string[]": E,
  combo: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((n) => n.option)) ?? [];
    return { ...l("combo", "", r.attr, h), options: e };
  },
  select: (r) => {
    var t;
    const e = ((t = r.options) == null ? void 0 : t.map((n) => ({ option: n.option, value: n.value }))) ?? [];
    return { ...l("select", "", r.attr, h), options: e };
  },
  actor: (r) => m(r, "actor"),
  "actor[]": (r) => o(r, "actor[]"),
  class: (r) => m(r, "class"),
  "class[]": (r) => o(r, "class[]"),
  skill: (r) => m(r, "skill"),
  "skill[]": (r) => o(r, "skill[]"),
  item: (r) => m(r, "item"),
  "item[]": (r) => o(r, "item[]"),
  weapon: (r) => m(r, "weapon"),
  "weapon[]": (r) => o(r, "weapon[]"),
  armor: (r) => m(r, "armor"),
  "armor[]": (r) => o(r, "armor[]"),
  state: (r) => m(r, "state"),
  "state[]": (r) => o(r, "state[]"),
  enemy: (r) => m(r, "enemy"),
  "enemy[]": (r) => o(r, "enemy[]"),
  common_event: (r) => m(r, "common_event"),
  "common_event[]": (r) => o(r, "common_event[]"),
  switch: (r) => m(r, "switch"),
  "switch[]": (r) => o(r, "switch[]"),
  variable: (r) => m(r, "variable"),
  "variable[]": (r) => o(r, "variable[]"),
  troop: (r) => m(r, "troop"),
  "troop[]": (r) => o(r, "troop[]"),
  boolean: (r) => {
    const e = { default: (t) => t === "true", text: a, desc: a, on: a, off: a, parent: a };
    return l("boolean", !0, r.attr, e);
  },
  file: (r) => {
    const e = { default: a, text: a, desc: a, parent: a, dir: a };
    return {
      dir: "",
      ...l("file", "", r.attr, e)
    };
  },
  "file[]": (r) => {
    const e = { default: (t) => V(t), text: a, desc: a, parent: a, dir: a };
    return { dir: "", ...x("file[]", r.attr, e) };
  }
}, br = (r) => new Map(r.map((e) => [e.struct, e.params.map((t) => t.attr)])), z = (r, e, t) => {
  const n = e.get(r);
  return n ? n.filter((c) => ((s, u) => !(!F(s) && !I(s) || !s.struct || u.has(s.struct)))(c, t)).flatMap((c) => {
    const s = c.struct;
    return t.add(s), [s, ...z(s, e, t)];
  }) : [];
}, yr = (r, e) => z(r, e, /* @__PURE__ */ new Set()), gr = (r) => {
  const e = [], t = [], n = [], c = [];
  return r.params.forEach((s) => {
    F(s.attr) ? e.push({ name: s.name, attr: s.attr }) : I(s.attr) ? t.push({
      name: s.name,
      attr: s.attr
    }) : w(s.attr) ? c.push({ name: s.name, attr: s.attr }) : n.push({ name: s.name, attr: s.attr });
  }), { structs: e, structArrays: t, scalas: n, scalaArrays: c };
}, J = "BODY", Z = "STRUCT", g = "NONE", G = (r, e) => {
  const t = r.lines.length > 0 ? S(r) : r, n = e[1] || void 0;
  return { ...t, structName: n, blockType: n ? Z : "INVALID", locale: e[2], lines: [] };
}, Q = (r) => ({
  ...r.lines.length > 0 ? S(r) : r,
  blockType: J,
  structName: void 0,
  locale: void 0,
  lines: []
}), S = (r) => r.blockType === J ? { ...r, bodies: r.bodies.concat([{ lines: [...r.lines] }]), lines: [], blockType: g } : r.structName && r.blockType === Z ? {
  ...r,
  structs: r.structs.concat([{ struct: r.structName, locale: r.locale, lines: [...r.lines] }]),
  blockType: g,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...r,
  blockType: g,
  structName: void 0,
  lines: []
}, X = (r) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }) } : r, N = (r) => ({
  ...typeof r.desc == "string" ? { desc: r.desc } : {},
  ...typeof r.text == "string" ? { text: r.text } : {}
}), P = (r) => {
  const e = rr(r), t = tr(e);
  return er(t);
}, rr = (r) => {
  if (r.currentParam && r.currentOption) {
    const e = r.currentParam.attr.kind;
    if (e === "select" || e === "combo") return { ...r, currentParam: { ...r.currentParam, options: X(r.currentOption).items } };
  }
  return r;
}, er = (r) => r.currentParam ? {
  ...r,
  params: [...r.params, r.currentParam],
  currentParam: null,
  currentContext: null
} : r, tr = (r) => {
  if (!r.currentCommand) return r;
  const e = r.currentParam ? [...r.currentCommand.args, r.currentParam] : r.currentCommand.args, t = { ...N(r.currentCommand), command: r.currentCommand.command, args: e };
  return {
    ...r,
    commands: [...r.commands, t],
    currentCommand: null,
    currentParam: null,
    currentContext: null,
    currentOption: null
  };
}, L = (r, e) => {
  const t = r.lines.reduce((n, c) => {
    const s = c.trim().replace(/^\*\s?/, "");
    if (!s.startsWith("@")) return n.currentContext === M ? { ...n, helpLines: n.helpLines.concat(s) } : n;
    const [u, ...d] = s.slice(1).split(" "), f = d.join(" ").trim(), b = e[u];
    return b ? b(n, f) : n;
  }, ar());
  return P(t);
}, nr = (r, e) => {
  const t = ((u) => {
    const d = u.split(`
`), f = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: g
    }, b = d.reduce((p, R) => {
      const y = R.trim(), j = y.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return j ? G(p, j) : y === "/*:" ? Q(p) : y === "*/" ? p.lines.length > 0 ? S(p) : p : { ...p, lines: p.lines.concat([y]) };
    }, f);
    return { structs: b.structs, bodies: b.bodies };
  })(r), n = t.structs.map((u) => ((d) => {
    const f = L(d, K);
    return { name: d.struct, params: f.params };
  })(u)), c = ((u) => {
    if (u.bodies.length !== 0) return u.bodies[0];
  })(t);
  if (!c) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: n
  };
  const s = L(c, e);
  return { params: s.params, commands: s.commands, meta: s.meta, helpLines: s.helpLines, structs: n };
}, ar = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), i = (r, e, t) => r.currentParam && !(e in r.currentParam.attr) ? {
  ...r,
  currentParam: { ...r.currentParam, attr: { ...r.currentParam.attr, [e]: t } }
} : r, v = (r, e, t) => ({ ...r, meta: { [e]: t, ...r.meta } }), K = {
  param: (r, e) => {
    const t = P(r);
    return t.params.some((n) => n.name === e) ? t : { ...t, currentContext: "param", currentParam: { name: e, attr: {} } };
  },
  text: (r, e) => r.currentParam ? i(r, k, e) : r.currentCommand && !(k in r.currentCommand) ? { ...r, currentCommand: {
    ...N(r.currentCommand),
    command: r.currentCommand.command,
    args: r.currentCommand.args,
    [k]: e
  } } : r,
  desc: (r, e) => r.currentParam ? i(r, "desc", e) : r.currentCommand ? { ...r, currentCommand: { ...r.currentCommand, desc: e } } : r,
  command: (r, e) => {
    const t = P(r);
    return t.commands.some((n) => n.command === e) ? t : { ...t, currentCommand: { command: e, args: [] }, currentParam: null };
  },
  arg: (r, e) => {
    if (!r.currentCommand) return r;
    if (r.currentParam) {
      const t = {
        ...N(r.currentCommand),
        command: r.currentCommand.command,
        args: r.currentCommand.args.concat(r.currentParam)
      };
      return {
        ...r,
        commands: r.commands,
        currentCommand: t,
        currentContext: "arg",
        currentParam: { name: e, attr: {} }
      };
    }
    return { ...r, currentParam: { name: e, attr: {} } };
  },
  help: (r) => ({ ...P(r), currentContext: M }),
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
      const t = e.slice(7, -1), n = i(r, _, t);
      return i(n, A, _);
    }
    return r.currentParam ? i(r, A, e) : r;
  },
  default: (r, e) => i(r, "default", e),
  on: (r, e) => i(r, "on", e),
  off: (r, e) => i(r, "off", e),
  min: (r, e) => i(r, "min", e),
  max: (r, e) => i(r, "max", e),
  base: (r, e) => {
    return {
      ...r,
      dependencies: (t = r.dependencies, n = e, { orderAfter: t.orderAfter, orderBefore: t.orderBefore, base: t.base.concat(n) })
    };
    var t, n;
  },
  orderAfter: (r, e) => {
    return {
      ...r,
      dependencies: (t = r.dependencies, n = e, { base: t.base, orderBefore: t.orderBefore, orderAfter: t.orderAfter.concat(n) })
    };
    var t, n;
  },
  orderBefore: (r, e) => {
    return {
      ...r,
      dependencies: (t = r.dependencies, n = e, { base: t.base, orderAfter: t.orderAfter, orderBefore: t.orderBefore.concat(n) })
    };
    var t, n;
  },
  author: (r, e) => v(r, "author", e),
  plugindesc: (r, e) => v(r, "plugindesc", e),
  url: (r, e) => v(r, "url", e)
}, sr = (r) => cr(((e) => nr(e, K))(r)), cr = (r) => ({
  target: "MZ",
  meta: r.meta,
  commands: or(r.commands),
  params: T(r.params),
  structs: mr(r.structs)
}), T = (r) => Object.fromEntries(r.map((e) => [e.name, $(e)])), or = (r) => Object.fromEntries(r.map((e) => [e.command, {
  desc: e.desc,
  text: e.text,
  args: T(e.args)
}])), mr = (r) => Object.fromEntries(r.map((e) => [e.name, { params: T(e.params) }])), Pr = (r) => sr(r);
export {
  gr as classifyPluginParams,
  $ as compileAttributes,
  br as createStructMap,
  w as isArrayParam,
  ur as isArrayParamEx,
  dr as isNumberArrayParam,
  pr as isNumberValueParam,
  Y as isNumberValueParamEx,
  hr as isRmmzDataKind,
  H as isScalarParam,
  fr as isStringArrayParam,
  lr as isStringValueParam,
  I as isStructArrayParam,
  F as isStructParam,
  Cr as lookupKind,
  ir as paramHasText,
  Pr as pluginSourceToJSON,
  yr as structDependencies
};
