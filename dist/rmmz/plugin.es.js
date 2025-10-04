import { i as ce, l as se } from "../shared/lookup.es.js";
const E = (e, t) => Object.entries(t).reduce((n, [r, s]) => {
  if (r in e) {
    const m = e[r];
    if (typeof m == "string") return {
      ...n,
      [r]: s(m)
    };
  }
  return n;
}, {}), l = (e, t, n, r) => ({ default: t, ...E(n, r), kind: e }), C = (e, t, n) => ({ default: [], ...E(t, n), kind: e }), F = "help", k = "kind", y = "text", B = "struct", I = (e) => {
  const t = JSON.parse(e);
  return Array.isArray(t) ? t.map(P) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([n, r]) => [n, P(r)])) : t;
}, P = (e) => {
  if (typeof e != "string") return e;
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.map(P) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([n, r]) => [n, P(r)])) : t;
  } catch {
    return e;
  }
}, Z = (e) => {
  if (k in e.attr) {
    const t = K[e.attr.kind];
    if (t) return t(e);
  }
  return l("any", "", e.attr, v);
}, a = (e) => e, S = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), v = {
  default: a,
  text: a,
  desc: a,
  parent: a
}, _ = (e) => l("string", "", e.attr, v), w = (e) => {
  const t = { default: (n) => I(n), text: a, desc: a, parent: a };
  return C("string[]", e.attr, t);
}, o = (e, t) => {
  const n = { default: S, text: a, desc: a, parent: a };
  return C(t, e.attr, n);
}, c = (e, t) => {
  const n = { default: (r) => parseInt(r, 10), text: a, desc: a, parent: a };
  return l(t, 0, e.attr, n);
}, K = {
  number: (e) => ((t) => {
    const n = {
      default: (r) => parseFloat(r),
      text: a,
      desc: a,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: a
    };
    return l("number", 0, t.attr, n);
  })(e),
  "number[]": (e) => {
    const t = {
      default: S,
      text: a,
      desc: a,
      decimals: (n) => parseInt(n, 10),
      min: (n) => parseFloat(n),
      max: (n) => parseFloat(n),
      parent: a
    };
    return C("number[]", e.attr, t);
  },
  string: _,
  "string[]": w,
  multiline_string: _,
  "multiline_string[]": w,
  combo: (e) => {
    var n;
    const t = ((n = e.options) == null ? void 0 : n.map((r) => r.option)) ?? [];
    return { ...l("combo", "", e.attr, v), options: t };
  },
  select: (e) => {
    var n;
    const t = ((n = e.options) == null ? void 0 : n.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...l("select", "", e.attr, v), options: t };
  },
  actor: (e) => c(e, "actor"),
  "actor[]": (e) => o(e, "actor[]"),
  class: (e) => c(e, "class"),
  "class[]": (e) => o(e, "class[]"),
  skill: (e) => c(e, "skill"),
  "skill[]": (e) => o(e, "skill[]"),
  item: (e) => c(e, "item"),
  "item[]": (e) => o(e, "item[]"),
  weapon: (e) => c(e, "weapon"),
  "weapon[]": (e) => o(e, "weapon[]"),
  armor: (e) => c(e, "armor"),
  "armor[]": (e) => o(e, "armor[]"),
  state: (e) => c(e, "state"),
  "state[]": (e) => o(e, "state[]"),
  enemy: (e) => c(e, "enemy"),
  "enemy[]": (e) => o(e, "enemy[]"),
  common_event: (e) => c(e, "common_event"),
  "common_event[]": (e) => o(e, "common_event[]"),
  switch: (e) => c(e, "switch"),
  "switch[]": (e) => o(e, "switch[]"),
  variable: (e) => c(e, "variable"),
  "variable[]": (e) => o(e, "variable[]"),
  troop: (e) => c(e, "troop"),
  "troop[]": (e) => o(e, "troop[]"),
  boolean: (e) => {
    const t = { default: (n) => n === "true", text: a, desc: a, on: a, off: a, parent: a };
    return l("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: a, text: a, desc: a, parent: a, dir: a };
    return {
      dir: "",
      ...l("file", "", e.attr, t)
    };
  },
  "file[]": (e) => {
    const t = { default: (n) => I(n), text: a, desc: a, parent: a, dir: a };
    return { dir: "", ...C("file[]", e.attr, t) };
  }
}, R = ["string", "multiline_string", "select"], ne = (e) => R.includes(e.kind), z = "BODY", D = "STRUCT", O = "NONE", M = (e, t) => {
  const n = e.lines.length > 0 ? N(e) : e, r = t[1] || void 0;
  return {
    ...n,
    structName: r,
    blockType: r ? D : "INVALID",
    locale: t[2],
    lines: []
  };
}, U = (e) => ({ ...e.lines.length > 0 ? N(e) : e, blockType: z, structName: void 0, locale: void 0, lines: [] }), N = (e) => e.blockType === z ? {
  ...e,
  bodies: e.bodies.concat([{ lines: [...e.lines] }]),
  lines: [],
  blockType: O
} : e.structName && e.blockType === D ? { ...e, structs: e.structs.concat([{
  struct: e.structName,
  locale: e.locale,
  lines: [...e.lines]
}]), blockType: O, structName: void 0, locale: void 0, lines: [] } : { ...e, blockType: O, structName: void 0, lines: [] }, H = (e) => e.currentOption ? { items: e.items.concat({
  option: e.currentOption,
  value: e.currentOption
}) } : e, A = (e) => ({ ...typeof e.desc == "string" ? { desc: e.desc } : {}, ...typeof e.text == "string" ? { text: e.text } : {} }), x = (e) => {
  const t = V(e), n = q(t);
  return Y(n);
}, V = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: {
      ...e.currentParam,
      options: H(e.currentOption).items
    } };
  }
  return e;
}, Y = (e) => e.currentParam ? { ...e, params: [...e.params, e.currentParam], currentParam: null, currentContext: null } : e, q = (e) => {
  if (!e.currentCommand) return e;
  const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, n = {
    ...A(e.currentCommand),
    command: e.currentCommand.command,
    args: t
  };
  return { ...e, commands: [...e.commands, n], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, L = (e, t) => {
  const n = e.lines.reduce((r, s) => {
    const m = s.trim().replace(/^\*\s?/, "");
    if (!m.startsWith("@")) return r.currentContext === F ? { ...r, helpLines: r.helpLines.concat(m) } : r;
    const [i, ...p] = m.slice(1).split(" "), f = p.join(" ").trim(), b = t[i];
    return b ? b(r, f) : r;
  }, Q());
  return x(n);
}, G = (e, t) => {
  const n = ((i) => {
    const p = i.split(`
`), f = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: O
    }, b = p.reduce((d, W) => {
      const g = W.trim(), j = g.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return j ? M(d, j) : g === "/*:" ? U(d) : g === "*/" ? d.lines.length > 0 ? N(d) : d : { ...d, lines: d.lines.concat([g]) };
    }, f);
    return { structs: b.structs, bodies: b.bodies };
  })(e), r = n.structs.map((i) => ((p) => {
    const f = L(p, J);
    return { name: p.struct, params: f.params };
  })(i)), s = ((i) => {
    if (i.bodies.length !== 0) return i.bodies[0];
  })(n);
  if (!s) return { params: [], commands: [], meta: {}, helpLines: [], structs: r };
  const m = L(s, t);
  return { params: m.params, commands: m.commands, meta: m.meta, helpLines: m.helpLines, structs: r };
}, Q = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), u = (e, t, n) => e.currentParam && !(t in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [t]: n } }
} : e, h = (e, t, n) => ({ ...e, meta: { [t]: n, ...e.meta } }), J = {
  param: (e, t) => {
    const n = x(e);
    return n.params.some((r) => r.name === t) ? n : { ...n, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? u(e, y, t) : e.currentCommand && !(y in e.currentCommand) ? { ...e, currentCommand: {
    ...A(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [y]: t
  } } : e,
  desc: (e, t) => e.currentParam ? u(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const n = x(e);
    return n.commands.some((r) => r.command === t) ? n : { ...n, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const n = {
        ...A(e.currentCommand),
        command: e.currentCommand.command,
        args: e.currentCommand.args.concat(e.currentParam)
      };
      return {
        ...e,
        commands: e.commands,
        currentCommand: n,
        currentContext: "arg",
        currentParam: { name: t, attr: {} }
      };
    }
    return { ...e, currentParam: { name: t, attr: {} } };
  },
  help: (e) => ({ ...x(e), currentContext: F }),
  option: (e, t) => {
    if (!e.currentParam) return e;
    const n = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: s } : { items: r.items, currentOption: s })(e.currentOption ?? {
      items: []
    }, t);
    return { ...e, currentOption: n };
  },
  value: (e, t) => {
    if (!e.currentOption) return e;
    const n = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: s }) } : {
      items: r.items
    })(e.currentOption, t);
    return { ...e, currentOption: n };
  },
  type: (e, t) => {
    if (((n) => n.endsWith(">") && n.startsWith("struct<"))(t)) {
      const n = t.slice(7, -1), r = u(e, B, n);
      return u(r, k, B);
    }
    return e.currentParam ? u(e, k, t) : e;
  },
  default: (e, t) => u(e, "default", t),
  on: (e, t) => u(e, "on", t),
  off: (e, t) => u(e, "off", t),
  min: (e, t) => u(e, "min", t),
  max: (e, t) => u(e, "max", t),
  base: (e, t) => {
    return {
      ...e,
      dependencies: (n = e.dependencies, r = t, { orderAfter: n.orderAfter, orderBefore: n.orderBefore, base: n.base.concat(r) })
    };
    var n, r;
  },
  orderAfter: (e, t) => {
    return {
      ...e,
      dependencies: (n = e.dependencies, r = t, { base: n.base, orderBefore: n.orderBefore, orderAfter: n.orderAfter.concat(r) })
    };
    var n, r;
  },
  orderBefore: (e, t) => {
    return {
      ...e,
      dependencies: (n = e.dependencies, r = t, { base: n.base, orderAfter: n.orderAfter, orderBefore: n.orderBefore.concat(r) })
    };
    var n, r;
  },
  author: (e, t) => h(e, "author", t),
  plugindesc: (e, t) => h(e, "plugindesc", t),
  url: (e, t) => h(e, "url", t)
}, X = (e) => $(((t) => G(t, J))(e)), $ = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: ee(e.commands),
  params: T(e.params),
  structs: te(e.structs)
}), T = (e) => Object.fromEntries(e.map((t) => [t.name, Z(t)])), ee = (e) => Object.fromEntries(e.map((t) => [t.command, {
  desc: t.desc,
  text: t.text,
  args: T(t.args)
}])), te = (e) => Object.fromEntries(e.map((t) => [t.name, { params: T(t.params) }])), re = (e) => X(e);
export {
  Z as compileAttributes,
  ce as isRmmzDataKind,
  se as lookupKind,
  ne as paramHasText,
  re as pluginSourceToJSON
};
