const rt = 0, it = 101, ot = 401, mt = 102, nt = 402, lt = 103, ct = 104, dt = 105, ut = 405, pt = 108, bt = 408, kt = 109, ft = 111, yt = 411, gt = 112, ht = 113, vt = 115, Rt = 117, zt = 118, St = 119, wt = 121, It = 122, Tt = 123, At = 124, Et = 125, xt = 126, Pt = 127, Dt = 128, Nt = 129, qt = 132, Gt = 133, Ht = 134, Ct = 135, Mt = 136, Ft = 137, Vt = 138, $t = 139, Lt = 140, _t = 201, Bt = 202, Ut = 203, Xt = 204, jt = 205, Ot = 206, Wt = 211, Kt = 212, Jt = 213, Qt = 214, Yt = 216, Zt = 217, ea = 221, ta = 222, aa = 223, sa = 224, ra = 225, ia = 230, oa = 231, ma = 232, na = 233, la = 234, ca = 235, da = 236, ua = 241, pa = 242, ba = 243, ka = 244, fa = 245, ya = 246, ga = 249, ha = 250, va = 251, Ra = 261, za = 281, Sa = 282, wa = 283, Ia = 284, Ta = 285, Aa = 301, Ea = 302, xa = 605, Pa = 303, Da = 311, Na = 312, qa = 326, Ga = 314, Ha = 315, Ca = 313, Ma = 317, Fa = 318, Va = 320, $a = 321, La = 322, _a = 323, Ba = 324, Ua = 325, Xa = 331, ja = 332, Oa = 333, Wa = 334, Ka = 335, Ja = 336, Qa = 337, Ya = 339, Za = 340, es = 351, ts = 342, as = 352, ss = 353, rs = 354, is = 355, os = 655, ms = 356, ns = 357, ls = (e, t) => e.events.map((s) => s ? {
  ...s,
  pages: w(s, t)
} : null), w = (e, t) => e.pages.map((s) => ({
  ...s,
  list: t(s.list)
})), cs = (e, t) => [I(e.skills, t), T(e.actors, t), A(e.states, t), E(e.armors, t), x(e.classes, t), P(e.enemies, t), D(e.items, t), N(e.weapons, t), q(e.commonEvents, t)], I = (e, t) => ({
  label: t.skill.title,
  items: e,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), T = (e, t) => ({
  items: e,
  label: t.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), A = (e, t) => ({ items: e, label: t.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), E = (e, t) => ({ items: e, label: t.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), x = (e, t) => ({ items: e, label: t.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), P = (e, t) => ({ items: e, label: t.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), D = (e, t) => ({ items: e, label: t.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), N = (e, t) => ({ items: e, label: t.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), q = (e, t) => ({
  items: e,
  label: t.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), ds = 11, us = 12, ps = 13, bs = 14, ks = 21, fs = 22, ys = 23, gs = 31, hs = 32, vs = 33, Rs = 34, zs = 35, Ss = 41, ws = 42, Is = 43, Ts = 44, As = 51, Es = 52, xs = 53, Ps = 54, Ds = 55, Ns = 61, qs = 62, Gs = 63, Hs = 64, Cs = 0, Ms = 1, Fs = 2, Vs = 3, G = (e, t) => ({
  items: H(e.options, t),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), H = (e, t) => [{ id: 0, name: t.normal }, { id: 1, name: e.bossCollaps }, { id: 2, name: e.instantCollaps }, {
  id: 3,
  name: e.noneCollaps
}], $s = 0, Ls = 1, _s = 2, Bs = 3, Us = 4, Xs = 5, js = 6, Os = 7, Ws = 8, Ks = 9, C = (e) => ({
  items: M(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), M = (e) => [{ id: 0, name: e.hitRate }, { id: 1, name: e.evasionRate }, { id: 2, name: e.criticalRate }, { id: 3, name: e.criticalEvasionRate }, { id: 4, name: e.magicEvasionRate }, {
  id: 5,
  name: e.magicReflectionRate
}, { id: 6, name: e.counterAttackRate }, { id: 7, name: e.hpRegenerationRate }, { id: 8, name: e.mpRegenerationRate }, { id: 9, name: e.tpRegenerationRate }], Js = (e, t) => {
  switch (e) {
    case 3:
      return t.criticalEvasionRate;
    case 1:
      return t.evasionRate;
    case 6:
      return t.counterAttackRate;
    case 2:
      return t.criticalRate;
    case 0:
      return t.hitRate;
    case 7:
      return t.hpRegenerationRate;
    case 4:
      return t.magicEvasionRate;
    case 5:
      return t.magicReflectionRate;
    case 8:
      return t.mpRegenerationRate;
    case 9:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Qs = 0, Ys = 1, Zs = 2, er = 3, tr = 4, ar = 5, sr = 6, rr = 7, F = (e) => ({ items: V(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "params" } }), V = (e) => [{
  id: 0,
  name: e.maxHp
}, { id: 1, name: e.maxMp }, { id: 2, name: e.atk }, { id: 3, name: e.def }, { id: 4, name: e.matk }, { id: 5, name: e.mdef }, { id: 6, name: e.agi }, { id: 7, name: e.luk }], ir = (e, t) => {
  switch (e) {
    case 0:
      return t.maxHp;
    case 1:
      return t.maxMp;
    case 2:
      return t.atk;
    case 3:
      return t.def;
    case 4:
      return t.matk;
    case 5:
      return t.mdef;
    case 6:
      return t.agi;
    case 7:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, or = 0, mr = 1, nr = 2, lr = 3, cr = 4, dr = 5, ur = 6, pr = 7, br = 8, kr = 9, $ = (e) => ({ items: L(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), L = (e) => [{
  id: 0,
  name: e.targetRate
}, { id: 1, name: e.guardEffectRate }, { id: 2, name: e.recoveryEffectRate }, { id: 3, name: e.pharmacology }, { id: 4, name: e.mpCostRate }, { id: 5, name: e.tpChargeRate }, {
  id: 6,
  name: e.physicalDamageRate
}, { id: 7, name: e.magicDamageRate }, { id: 8, name: e.floorDamageRate }, { id: 9, name: e.experienceRate }], fr = (e, t) => {
  switch (e) {
    case 9:
      return t.experienceRate;
    case 0:
      return t.targetRate;
    case 8:
      return t.floorDamageRate;
    case 1:
      return t.guardEffectRate;
    case 4:
      return t.mpCostRate;
    case 5:
      return t.tpChargeRate;
    case 6:
      return t.physicalDamageRate;
    case 7:
      return t.magicDamageRate;
    case 3:
      return t.pharmacology;
    case 2:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, yr = 0, gr = 1, hr = 2, vr = 3, Rr = 4, zr = 5, _ = (e) => ({
  items: B(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), B = (e) => [{ id: 0, name: e.encounterHalf }, { id: 1, name: e.encounterNone }, { id: 2, name: e.cancelSurprise }, {
  id: 3,
  name: e.raisePreemptive
}, { id: 4, name: e.goldDouble }, { id: 5, name: e.dropItemDouble }], Sr = 0, wr = 1, Ir = 2, Tr = 3, U = (e) => ({ items: X(e.options), label: e.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), X = (e) => [{ id: 0, name: e.autoBattle }, { id: 1, name: e.guard }, { id: 2, name: e.substitute }, {
  id: 3,
  name: e.preventEscape
}], Ar = (e, t) => [F(e.regularParam), C(e.extraParam), $(e.specialParam), G(e.collaps, t), U(e.specialFlag), _(e.partyAbility)], Er = 11, xr = 12, Pr = 13, Dr = 21, Nr = 22, qr = 31, Gr = 32, Hr = 33, Cr = 34, Mr = 41, Fr = 42, Vr = 43, $r = 44, Lr = (e) => [O(e), W(e), K(e), J(e), Q(e), Y(e), Z(e), ee(e), te(e), j(e), ae(e), se(e), re(e)], m = (e, t, s) => ({
  kindId: e,
  label: t.domainName,
  pattern: t.format,
  description: t.desc,
  dataSource: s
}), j = (e) => m(41, e.special), O = (e) => m(11, e.recoverHp), W = (e) => m(12, e.recoverMp), K = (e) => m(13, e.gainTp), J = (e) => m(21, e.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Q = (e) => m(22, e.removeState, { author: "rmmz", module: "data", kind: "state" }), Y = (e) => m(31, e.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Z = (e) => m(32, e.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), ee = (e) => m(33, e.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), te = (e) => m(34, e.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), ae = (e) => m(42, e.grow, { author: "rmmz", module: "trait", kind: "params" }), se = (e) => m(43, e.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), re = (e) => m(44, e.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), _r = (e, t) => y(e.note, (s, o) => t(s, o, e)), ie = (e) => y(e, (t, s) => ({ key: t, value: s })), y = (e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(s), (o) => t(o[1], o[2]));
}, oe = (e, t = `
`) => [...e.items.map((s) => `<${s.key}:${s.value}>`), e.note].join(t).trim(), me = (e) => ({ note: ne(e), items: ie(e) }), ne = (e) => {
  if (e.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, le = (e, t) => `<${e}:${t}>`, Br = (e, t, s = `
`) => {
  const o = me(e), n = o.items.map((l) => ({ key: l.key, value: t(l) }));
  return oe({ note: o.note, items: n }, s);
}, Ur = (e, t) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, o = Array.from(e.matchAll(s)).find((n) => n[1] === t);
  return o ? o[2] : void 0;
}, Xr = (e, t, s) => {
  const o = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(o, (n, l) => l === t ? le(l, s) : n);
}, jr = (e) => [ce(e.elementRate), de(e.debuffRate), ue(e.stateRate), pe(e.stateResist), be(e.regularParam), ke(e.extraParam), fe(e.specialParam), ye(e.attackElement), ge(e.attackState), he(e.attackSpeed), ve(e.attackTimes), Re(e.attackSkill), ze(e.skillTypeAdd), Se(e.skillTypeSeal), we(e.skillAdd), Ie(e.skillSeal), Te(e.equipWeaponType), Ae(e.equipArmorType), Ee(e.equipLock), xe(e.equipSeal), Pe(e.slotType), De(e.actionPlus), Ne(e.specialFlag), qe(e.collaps), Ge(e.partyAbility)], ce = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 11,
  dataSource: g()
}), de = (e) => ({ pattern: e.format, label: e.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ue = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 13,
  dataSource: p()
}), pe = (e) => ({ pattern: e.format, label: e.title, kindId: 14, dataSource: p() }), be = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), ke = (e) => ({ pattern: e.format, label: e.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), fe = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ye = (e) => ({ pattern: e.format, label: e.title, kindId: 31, dataSource: g() }), ge = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 32,
  dataSource: p()
}), he = (e) => ({ pattern: e.format, label: e.title, kindId: 33 }), ve = (e) => ({ pattern: e.format, label: e.title, kindId: 34 }), Re = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 35,
  dataSource: b()
}), ze = (e) => ({ pattern: e.format, label: e.title, kindId: 41, dataSource: h() }), Se = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 42,
  dataSource: h()
}), we = (e) => ({ pattern: e.format, label: e.title, kindId: 43, dataSource: b() }), Ie = (e) => ({ pattern: e.format, label: e.title, kindId: 44, dataSource: b() }), Te = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 51,
  dataSource: He()
}), Ae = (e) => ({ pattern: e.format, label: e.title, kindId: 52, dataSource: Ce() }), Ee = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 53,
  dataSource: k()
}), xe = (e) => ({ pattern: e.format, label: e.title, kindId: 54, dataSource: k() }), Pe = (e) => ({ pattern: e.format, label: e.title, kindId: 55, dataSource: k() }), De = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 61
}), Ne = (e) => ({ pattern: e.format, label: e.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), qe = (e) => ({ pattern: e.format, label: e.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ge = (e) => ({ pattern: e.format, label: e.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), p = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), b = () => ({ author: "rmmz", module: "data", kind: "skill" }), g = () => ({ author: "rmmz", module: "system", kind: "elements" }), h = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), He = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ce = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Or = 0, Wr = 1, Kr = 0, Jr = 1, Qr = (e, t = 0) => ({
  code: 101,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Yr = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4] ?? ""
}), Zr = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], ei = (e, t = 0) => ({ code: 401, indent: t, parameters: [e] }), v = (e, t) => ({
  type: "array",
  items: t,
  ...r(e),
  ...i(e.default)
}), r = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), i = (e) => e !== void 0 ? {
  default: e
} : {}, Me = "x-rpg-param", c = (e, t) => ({ [Me]: { kind: e.kind, ...e.parent ? { parent: e.parent } : {}, data: t } }), Fe = (e) => c(e, { ...typeof e.on == "string" ? { on: e.on } : {}, ...typeof e.off == "string" ? {
  off: e.off
} : {} }), u = (e) => e === void 0 || e === 0, f = (e) => c(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), Ve = {
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
}, $e = ["data", "system", "system"], Le = (e) => {
  const t = Ve[e];
  return t === void 0 ? { author: "rmmz", module: "unknown", kind: e } : {
    author: "rmmz",
    module: $e[t],
    kind: [e, "variable", "switch"][t]
  };
}, R = (e) => ({ $ref: `#/definitions/${e.struct}`, ...r(e) }), z = (e) => v(e, { type: "string" }), S = (e) => v(e, { type: "integer" }), _e = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((t) => ({ type: "string", ...r(t), ...i(t.default) }))(e);
    case "file":
    case "combo":
      return ((t) => ({ type: "string", ...i(t.default), ...r(t) }))(e);
    case "select":
      return ((t) => ({ type: "string", ...i(t.default), ...r(t), ...t.options ? { enum: t.options.map((s) => s.value) } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return z(e);
    case "number[]":
      return ((t) => ({ type: "array", items: { type: u(t.decimals) ? "integer" : "number" }, ...i(t.default), ...r(t) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return S(e);
    case "number":
      return ((t) => ({
        type: u(t.decimals) ? "integer" : "number",
        ...i(t.default),
        ...r(t)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((t) => ({
        type: "integer",
        ...i(t.default),
        ...r(t)
      }))(e);
    case "boolean":
      return ((t) => ({ type: "boolean", ...i(t.default), ...r(t) }))(e);
    case "struct":
      return R(e);
    default:
      return {};
  }
}, ti = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((t) => ({ type: "string", ...r(t), ...i(t.default), ...c(t, {}) }))(e);
    case "file":
      return ((t) => ({
        type: "string",
        ...i(t.default),
        ...r(t),
        ...c(t, { dir: t.dir })
      }))(e);
    case "combo":
      return ((t) => ({ type: "string", ...i(t.default), ...r(t), ...c(t, { options: [...t.options] }) }))(e);
    case "select":
      return ((t) => ({
        type: "string",
        ...i(t.default),
        ...r(t),
        enum: t.options.map((s) => s.value),
        ...c(t, { options: t.options.map((s) => ({ value: s.value, option: s.option })) })
      }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return z(e);
    case "number[]":
      return ((t) => ({ type: "array", items: { type: u(t.decimals) ? "integer" : "number" }, ...i(t.default), ...r(t), ...f(t) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return S(e);
    case "number":
      return ((t) => ({
        type: u(t.decimals) ? "integer" : "number",
        ...i(t.default),
        ...r(t),
        ...f(t)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((t) => ({
        type: "integer",
        ...i(t.default),
        ...r(t),
        ...c(t, Le(t.kind))
      }))(e);
    case "boolean":
      return ((t) => ({ type: "boolean", ...i(t.default), ...r(t), ...Fe(t) }))(e);
    case "struct":
      return R(e);
    default:
      return {};
  }
}, ai = (e) => {
  const t = Object.entries(e).reduce((s, [o, n]) => {
    const l = _e(n);
    return { ...s, [o]: l };
  }, {});
  return { type: "object", properties: t, required: Object.keys(t), additionalProperties: !1 };
}, d = (e, t) => ({
  name: e,
  id: t
}), Be = (e) => e.variables.map(d), Ue = (e) => e.elements.map(d), Xe = (e) => e.equipTypes.map(d), je = (e) => e.skillTypes.map(d), Oe = (e) => e.weaponTypes.map(d), We = (e) => e.armorTypes.map(d), Ke = (e) => e.switches.map(d), si = (e, t) => [Qe(e, t), Ye(e, t), at(e, t), Ze(e, t), Je(e, t), et(e, t), tt(e, t)], Je = (e, t) => ({
  items: We(e),
  label: t.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Qe = (e, t) => ({ items: Ue(e), label: t.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ye = (e, t) => ({ items: Xe(e), label: t.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Ze = (e, t) => ({
  items: je(e),
  label: t.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), et = (e, t) => ({ items: Be(e), label: t.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), tt = (e, t) => ({ items: Ke(e), label: t.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), at = (e, t) => ({
  items: Oe(e),
  label: t.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), ri = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], ii = (e) => ({
  mhp: e[0],
  mmp: e[1],
  atk: e[2],
  def: e[3],
  mat: e[4],
  mdf: e[5],
  agi: e[6],
  luk: e[7],
  hit: e[8],
  eva: e[9]
}), oi = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], mi = (e) => ({
  level: e[0],
  levelA: e[1],
  hp: e[2],
  hpA: e[3],
  mp: e[4],
  mpA: e[5],
  tp: e[6],
  tpA: e[7],
  experience: e[8],
  exp: e[9]
}), ni = (e) => st(e, ""), st = (e, t) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continueGame ?? "Continue", t, e.toTitle ?? "To Title", e.cancel ?? "Cancel", t, e.buy ?? "Buy", e.sell ?? "Sell"], li = (e) => ({
  fight: e[0],
  escape: e[1],
  attack: e[2],
  guard: e[3],
  item: e[4],
  skill: e[5],
  equip: e[6],
  status: e[7],
  formation: e[8],
  save: e[9],
  gameEnd: e[10],
  options: e[11],
  weapon: e[12],
  armor: e[13],
  keyItem: e[14],
  equip2: e[15],
  optimize: e[16],
  clear: e[17],
  newGame: e[18],
  continueGame: e[19],
  toTitle: e[21],
  cancel: e[22],
  buy: e[24],
  sell: e[25]
}), a = (e, t) => typeof e == "string" ? e : t, ci = (e) => ({
  actionFailure: a(e.actionFailure, "Action failed."),
  actorDamage: a(e.actorDamage, "%1 took %2 damage."),
  actorRecovery: a(e.actorRecovery, "%1 recovered %2 HP."),
  actorGain: a(e.actorGain, "%1 gained %2."),
  actorLoss: a(e.actorLoss, "%1 lost %2."),
  actorDrain: a(e.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: a(e.actorNoDamage, "%1 was not damaged."),
  actorNoHit: a(e.actorNoHit, "%1 was not hit."),
  alwaysDash: a(e.alwaysDash, "Always dash."),
  bgmVolume: a(e.bgmVolume, "BGM volume"),
  bgsVolume: a(e.bgsVolume, "BGS volume"),
  commandRemember: a(e.commandRemember, "Command remember."),
  criticalToActor: a(e.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: a(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: a(e.counterAttack, "%1 countered!"),
  debuffAdd: a(e.debuffAdd, "%1's %2 was lowered."),
  defeat: a(e.defeat, "Defeat."),
  enemyDamage: a(e.enemyDamage, "%1 took %2 damage."),
  enemyDrain: a(e.enemyDrain, "%1 drained %2 HP."),
  enemyGain: a(e.enemyGain, "%1 gained %2."),
  enemyLoss: a(e.enemyLoss, "%1 lost %2."),
  enemyNoDamage: a(e.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: a(e.enemyNoHit, "%1 was not hit."),
  enemyRecovery: a(e.enemyRecovery, "%1 recovered %2 HP."),
  evasion: a(e.evasion, "%1 evaded the attack!"),
  autosave: a(e.autosave, "Autosave"),
  escapeFailure: a(e.escapeFailure, "Escape failed."),
  escapeStart: a(e.escapeStart, "%1 started to escape!"),
  emerge: a(e.emerge, "%1 appeared!"),
  expNext: a(e.expNext, "Next level in %1 EXP."),
  expTotal: a(e.expTotal, "Total EXP: %1"),
  file: a(e.file, "File"),
  buffAdd: a(e.buffAdd, "%1's %2 was raised."),
  buffRemove: a(e.buffRemove, "%1's %2 was lowered."),
  obtainExp: a(e.obtainExp, "%1 EXP obtained."),
  obtainGold: a(e.obtainGold, "%1 gold obtained."),
  obtainItem: a(e.obtainItem, "%1 obtained %2."),
  obtainSkill: a(e.obtainSkill, "%1 learned %2."),
  levelUp: a(e.levelUp, "%1 leveled up!"),
  partyName: a(e.partyName, "Party"),
  loadMessage: a(e.loadMessage, "Load %1?"),
  meVolume: a(e.meVolume, "ME volume"),
  possession: a(e.possession, "Possession"),
  preemptive: a(e.preemptive, "%1 attacked first!"),
  saveMessage: a(e.saveMessage, "Save %1?"),
  seVolume: a(e.seVolume, "SE volume"),
  magicEvasion: a(e.magicEvasion, "%1 evaded the magic!"),
  magicReflection: a(e.magicReflection, "%1 reflected the magic!"),
  substitute: a(e.substitute, "%1 took the hit!"),
  surprise: a(e.surprise, "%1 surprised the enemy!"),
  touchUI: a(e.touchUI, "Touch UI"),
  useItem: a(e.useItem, "%1 used %2."),
  victory: a(e.victory, "Victory!")
});
export {
  Wt as $,
  At as A,
  Et as B,
  pt as C,
  xt as D,
  vt as E,
  Pt as F,
  Dt as G,
  Nt as H,
  lt as I,
  qt as J,
  Gt as K,
  gt as L,
  Ht as M,
  rt as N,
  Ct as O,
  Mt as P,
  Ft as Q,
  Vt as R,
  it as S,
  $t as T,
  Lt as U,
  _t as V,
  Bt as W,
  Ut as X,
  Xt as Y,
  jt as Z,
  Ot as _,
  _e as a,
  rs as a$,
  Kt as a0,
  Jt as a1,
  Qt as a2,
  Yt as a3,
  Zt as a4,
  ea as a5,
  ta as a6,
  aa as a7,
  sa as a8,
  ra as a9,
  Da as aA,
  Na as aB,
  qa as aC,
  Ga as aD,
  Ha as aE,
  Ca as aF,
  Ma as aG,
  Fa as aH,
  Va as aI,
  $a as aJ,
  La as aK,
  _a as aL,
  Ba as aM,
  Ua as aN,
  Xa as aO,
  ja as aP,
  Oa as aQ,
  Wa as aR,
  Ka as aS,
  Ja as aT,
  Qa as aU,
  Ya as aV,
  Za as aW,
  es as aX,
  ts as aY,
  as as aZ,
  ss as a_,
  ia as aa,
  oa as ab,
  ma as ac,
  na as ad,
  la as ae,
  ca as af,
  da as ag,
  ua as ah,
  pa as ai,
  ba as aj,
  ka as ak,
  fa as al,
  ya as am,
  ga as an,
  ha as ao,
  va as ap,
  Ra as aq,
  za as ar,
  Sa as as,
  wa as at,
  Ia as au,
  Ta as av,
  Aa as aw,
  Ea as ax,
  xa as ay,
  Pa as az,
  ti as b,
  nr as b$,
  is as b0,
  os as b1,
  ms as b2,
  ns as b3,
  cs as b4,
  Ar as b5,
  ds as b6,
  us as b7,
  ps as b8,
  bs as b9,
  Vs as bA,
  $s as bB,
  Ls as bC,
  _s as bD,
  Bs as bE,
  Us as bF,
  Xs as bG,
  js as bH,
  Os as bI,
  Ws as bJ,
  Ks as bK,
  C as bL,
  M as bM,
  Js as bN,
  Qs as bO,
  Ys as bP,
  Zs as bQ,
  er as bR,
  tr as bS,
  ar as bT,
  sr as bU,
  rr as bV,
  F as bW,
  V as bX,
  ir as bY,
  or as bZ,
  mr as b_,
  ks as ba,
  fs as bb,
  ys as bc,
  gs as bd,
  hs as be,
  vs as bf,
  Rs as bg,
  zs as bh,
  Ss as bi,
  ws as bj,
  Is as bk,
  Ts as bl,
  As as bm,
  Es as bn,
  xs as bo,
  Ps as bp,
  Ds as bq,
  Ns as br,
  qs as bs,
  Gs as bt,
  Hs as bu,
  G as bv,
  H as bw,
  Cs as bx,
  Ms as by,
  Fs as bz,
  ai as c,
  Kr as c$,
  lr as c0,
  cr as c1,
  dr as c2,
  ur as c3,
  pr as c4,
  br as c5,
  kr as c6,
  $ as c7,
  L as c8,
  fr as c9,
  Vr as cA,
  $r as cB,
  oe as cC,
  me as cD,
  ie as cE,
  y as cF,
  _r as cG,
  le as cH,
  Br as cI,
  Ur as cJ,
  Xr as cK,
  Be as cL,
  Ue as cM,
  Xe as cN,
  je as cO,
  Oe as cP,
  We as cQ,
  Ke as cR,
  si as cS,
  ri as cT,
  ii as cU,
  oi as cV,
  mi as cW,
  ni as cX,
  st as cY,
  li as cZ,
  ci as c_,
  yr as ca,
  gr as cb,
  hr as cc,
  vr as cd,
  Rr as ce,
  zr as cf,
  _ as cg,
  B as ch,
  Sr as ci,
  wr as cj,
  Ir as ck,
  Tr as cl,
  U as cm,
  X as cn,
  Lr as co,
  Er as cp,
  xr as cq,
  Pr as cr,
  Dr as cs,
  Nr as ct,
  qr as cu,
  Gr as cv,
  Hr as cw,
  Cr as cx,
  Mr as cy,
  Fr as cz,
  ei as d,
  Or as d0,
  Wr as d1,
  Jr as d2,
  i as d3,
  ls as e,
  Yr as f,
  ot as g,
  mt as h,
  nt as i,
  ct as j,
  dt as k,
  ut as l,
  Qr as m,
  bt as n,
  kt as o,
  ft as p,
  yt as q,
  jr as r,
  ht as s,
  Zr as t,
  Rt as u,
  zt as v,
  St as w,
  wt as x,
  It as y,
  Tt as z
};
