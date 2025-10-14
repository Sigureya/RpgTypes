import { i as fr, l as br } from "../shared/lookup.es.js";
const E = (r, e) => Object.entries(e).reduce((n, [t, c]) => {
  if (t in r) {
    const s = r[t];
    if (typeof s == "string") return {
      ...n,
      [t]: c(s)
    };
  }
  return n;
}, {}), l = (r, e, n, t) => ({ default: e, ...E(n, t), kind: r }), x = (r, e, n) => ({ default: [], ...E(e, n), kind: r }), L = "help", k = "kind", C = "text", w = "struct", F = (r) => {
  const e = JSON.parse(r);
  return Array.isArray(e) ? e.map(y) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([n, t]) => [n, y(t)])) : e;
}, y = (r) => {
  if (typeof r != "string") return r;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.map(y) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([n, t]) => [n, y(t)])) : e;
  } catch {
    return r;
  }
}, H = (r) => {
  if (k in r.attr) {
    const e = U[r.attr.kind];
    if (e) return e(r);
  }
  return l("any", "", r.attr, h);
}, a = (r) => r, I = (r) => r.replace("[", "").replace("]", "").split(",").map((e) => parseFloat(e.replaceAll('"', "").trim())).filter((e) => !isNaN(e)), h = {
  default: a,
  text: a,
  desc: a,
  parent: a
}, B = (r) => l("string", "", r.attr, h), S = (r) => {
  const e = { default: (n) => F(n), text: a, desc: a, parent: a };
  return x("string[]", r.attr, e);
}, o = (r, e) => {
  const n = { default: I, text: a, desc: a, parent: a };
  return x(e, r.attr, n);
}, m = (r, e) => {
  const n = { default: (t) => parseInt(t, 10), text: a, desc: a, parent: a };
  return l(e, 0, r.attr, n);
}, U = {
  number: (r) => ((e) => {
    const n = {
      default: (t) => parseFloat(t),
      text: a,
      desc: a,
      decimals: (t) => parseInt(t, 10),
      min: (t) => parseFloat(t),
      max: (t) => parseFloat(t),
      parent: a
    };
    return l("number", 0, e.attr, n);
  })(r),
  "number[]": (r) => {
    const e = {
      default: I,
      text: a,
      desc: a,
      decimals: (n) => parseInt(n, 10),
      min: (n) => parseFloat(n),
      max: (n) => parseFloat(n),
      parent: a
    };
    return x("number[]", r.attr, e);
  },
  string: B,
  "string[]": S,
  multiline_string: B,
  "multiline_string[]": S,
  combo: (r) => {
    var n;
    const e = ((n = r.options) == null ? void 0 : n.map((t) => t.option)) ?? [];
    return { ...l("combo", "", r.attr, h), options: e };
  },
  select: (r) => {
    var n;
    const e = ((n = r.options) == null ? void 0 : n.map((t) => ({ option: t.option, value: t.value }))) ?? [];
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
    const e = { default: (n) => n === "true", text: a, desc: a, on: a, off: a, parent: a };
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
    const e = { default: (n) => F(n), text: a, desc: a, parent: a, dir: a };
    return { dir: "", ...x("file[]", r.attr, e) };
  }
}, D = (r) => r.kind.endsWith("[]"), cr = (r, e) => !!D(r) && r.kind === `${e}[]`, M = (r) => r.kind === "struct", W = (r) => r.kind === "struct[]", V = ["string", "multiline_string", "select"], or = (r) => V.includes(r.kind), mr = (r) => {
  const e = [], n = [], t = [], c = [];
  return r.params.forEach((s) => {
    M(s.attr) ? e.push({ name: s.name, attr: s.attr }) : W(s.attr) ? n.push({ name: s.name, attr: s.attr }) : D(s.attr) ? c.push({
      name: s.name,
      attr: s.attr
    }) : t.push({ name: s.name, attr: s.attr });
  }), { structs: e, structArrays: n, scalas: t, scalaArrays: c };
}, z = (r, e, n) => {
  const t = e.get(r);
  return t ? t.filter((c) => ((s, u) => !(!M(s) && !W(s) || !s.struct || u.has(s.struct)))(c, n)).flatMap((c) => {
    const s = c.struct;
    return n.add(s), [s, ...z(s, e, n)];
  }) : [];
}, ur = (r, e) => z(r, e, /* @__PURE__ */ new Set()), ir = (r) => new Map(r.map((e) => [e.struct, e.params.map((n) => n.attr)])), J = "BODY", Z = "STRUCT", O = "NONE", Y = (r, e) => {
  const n = r.lines.length > 0 ? N(r) : r, t = e[1] || void 0;
  return { ...n, structName: t, blockType: t ? Z : "INVALID", locale: e[2], lines: [] };
}, $ = (r) => ({
  ...r.lines.length > 0 ? N(r) : r,
  blockType: J,
  structName: void 0,
  locale: void 0,
  lines: []
}), N = (r) => r.blockType === J ? { ...r, bodies: r.bodies.concat([{ lines: [...r.lines] }]), lines: [], blockType: O } : r.structName && r.blockType === Z ? { ...r, structs: r.structs.concat([{
  struct: r.structName,
  locale: r.locale,
  lines: [...r.lines]
}]), blockType: O, structName: void 0, locale: void 0, lines: [] } : { ...r, blockType: O, structName: void 0, lines: [] }, q = (r) => r.currentOption ? {
  items: r.items.concat({ option: r.currentOption, value: r.currentOption })
} : r, A = (r) => ({ ...typeof r.desc == "string" ? { desc: r.desc } : {}, ...typeof r.text == "string" ? { text: r.text } : {} }), P = (r) => {
  const e = G(r), n = X(e);
  return Q(n);
}, G = (r) => {
  if (r.currentParam && r.currentOption) {
    const e = r.currentParam.attr.kind;
    if (e === "select" || e === "combo") return { ...r, currentParam: {
      ...r.currentParam,
      options: q(r.currentOption).items
    } };
  }
  return r;
}, Q = (r) => r.currentParam ? { ...r, params: [...r.params, r.currentParam], currentParam: null, currentContext: null } : r, X = (r) => {
  if (!r.currentCommand) return r;
  const e = r.currentParam ? [...r.currentCommand.args, r.currentParam] : r.currentCommand.args, n = {
    ...A(r.currentCommand),
    command: r.currentCommand.command,
    args: e
  };
  return { ...r, commands: [...r.commands, n], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, _ = (r, e) => {
  const n = r.lines.reduce((t, c) => {
    const s = c.trim().replace(/^\*\s?/, "");
    if (!s.startsWith("@")) return t.currentContext === L ? { ...t, helpLines: t.helpLines.concat(s) } : t;
    const [u, ...p] = s.slice(1).split(" "), f = p.join(" ").trim(), b = e[u];
    return b ? b(t, f) : t;
  }, er());
  return P(n);
}, rr = (r, e) => {
  const n = ((u) => {
    const p = u.split(`
`), f = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: O
    }, b = p.reduce((d, R) => {
      const g = R.trim(), j = g.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return j ? Y(d, j) : g === "/*:" ? $(d) : g === "*/" ? d.lines.length > 0 ? N(d) : d : { ...d, lines: d.lines.concat([g]) };
    }, f);
    return { structs: b.structs, bodies: b.bodies };
  })(r), t = n.structs.map((u) => ((p) => {
    const f = _(p, K);
    return { name: p.struct, params: f.params };
  })(u)), c = ((u) => {
    if (u.bodies.length !== 0) return u.bodies[0];
  })(n);
  if (!c) return { params: [], commands: [], meta: {}, helpLines: [], structs: t };
  const s = _(c, e);
  return { params: s.params, commands: s.commands, meta: s.meta, helpLines: s.helpLines, structs: t };
}, er = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), i = (r, e, n) => r.currentParam && !(e in r.currentParam.attr) ? {
  ...r,
  currentParam: { ...r.currentParam, attr: { ...r.currentParam.attr, [e]: n } }
} : r, v = (r, e, n) => ({ ...r, meta: { [e]: n, ...r.meta } }), K = {
  param: (r, e) => {
    const n = P(r);
    return n.params.some((t) => t.name === e) ? n : { ...n, currentContext: "param", currentParam: { name: e, attr: {} } };
  },
  text: (r, e) => r.currentParam ? i(r, C, e) : r.currentCommand && !(C in r.currentCommand) ? { ...r, currentCommand: {
    ...A(r.currentCommand),
    command: r.currentCommand.command,
    args: r.currentCommand.args,
    [C]: e
  } } : r,
  desc: (r, e) => r.currentParam ? i(r, "desc", e) : r.currentCommand ? { ...r, currentCommand: { ...r.currentCommand, desc: e } } : r,
  command: (r, e) => {
    const n = P(r);
    return n.commands.some((t) => t.command === e) ? n : { ...n, currentCommand: { command: e, args: [] }, currentParam: null };
  },
  arg: (r, e) => {
    if (!r.currentCommand) return r;
    if (r.currentParam) {
      const n = {
        ...A(r.currentCommand),
        command: r.currentCommand.command,
        args: r.currentCommand.args.concat(r.currentParam)
      };
      return {
        ...r,
        commands: r.commands,
        currentCommand: n,
        currentContext: "arg",
        currentParam: { name: e, attr: {} }
      };
    }
    return { ...r, currentParam: { name: e, attr: {} } };
  },
  help: (r) => ({ ...P(r), currentContext: L }),
  option: (r, e) => {
    if (!r.currentParam) return r;
    const n = ((t, c) => t.currentOption ? { items: t.items.concat({ option: t.currentOption, value: t.currentOption }), currentOption: c } : { items: t.items, currentOption: c })(r.currentOption ?? {
      items: []
    }, e);
    return { ...r, currentOption: n };
  },
  value: (r, e) => {
    if (!r.currentOption) return r;
    const n = ((t, c) => t.currentOption ? { items: t.items.concat({ option: t.currentOption, value: c }) } : {
      items: t.items
    })(r.currentOption, e);
    return { ...r, currentOption: n };
  },
  type: (r, e) => {
    if (((n) => n.endsWith(">") && n.startsWith("struct<"))(e)) {
      const n = e.slice(7, -1), t = i(r, w, n);
      return i(t, k, w);
    }
    return r.currentParam ? i(r, k, e) : r;
  },
  default: (r, e) => i(r, "default", e),
  on: (r, e) => i(r, "on", e),
  off: (r, e) => i(r, "off", e),
  min: (r, e) => i(r, "min", e),
  max: (r, e) => i(r, "max", e),
  base: (r, e) => {
    return {
      ...r,
      dependencies: (n = r.dependencies, t = e, { orderAfter: n.orderAfter, orderBefore: n.orderBefore, base: n.base.concat(t) })
    };
    var n, t;
  },
  orderAfter: (r, e) => {
    return {
      ...r,
      dependencies: (n = r.dependencies, t = e, { base: n.base, orderBefore: n.orderBefore, orderAfter: n.orderAfter.concat(t) })
    };
    var n, t;
  },
  orderBefore: (r, e) => {
    return {
      ...r,
      dependencies: (n = r.dependencies, t = e, { base: n.base, orderAfter: n.orderAfter, orderBefore: n.orderBefore.concat(t) })
    };
    var n, t;
  },
  author: (r, e) => v(r, "author", e),
  plugindesc: (r, e) => v(r, "plugindesc", e),
  url: (r, e) => v(r, "url", e)
}, nr = (r) => tr(((e) => rr(e, K))(r)), tr = (r) => ({
  target: "MZ",
  meta: r.meta,
  commands: ar(r.commands),
  params: T(r.params),
  structs: sr(r.structs)
}), T = (r) => Object.fromEntries(r.map((e) => [e.name, H(e)])), ar = (r) => Object.fromEntries(r.map((e) => [e.command, {
  desc: e.desc,
  text: e.text,
  args: T(e.args)
}])), sr = (r) => Object.fromEntries(r.map((e) => [e.name, { params: T(e.params) }])), lr = (r) => nr(r);
export {
  mr as classifyPluginParams,
  H as compileAttributes,
  ir as createStructMap,
  D as isArrayParam,
  cr as isArrayParamEx,
  fr as isRmmzDataKind,
  W as isStructArrayParam,
  M as isStructParam,
  br as lookupKind,
  or as paramHasText,
  lr as pluginSourceToJSON,
  ur as structDependencies
};
