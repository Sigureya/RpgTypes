import g from "ajv";
const We = 0, Ve = 101, Xe = 401, Ye = 102, Ze = 402, ea = 103, aa = 104, ta = 105, sa = 405, ra = 108, ma = 408, ia = 109, na = 111, oa = 411, la = 112, da = 113, ca = 115, pa = 117, ua = 118, ba = 119, ya = 121, ka = 122, ga = 123, ha = 124, fa = 125, Ra = 126, za = 127, Ia = 128, Sa = 129, xa = 132, va = 133, Ta = 134, wa = 135, qa = 136, Ea = 137, Aa = 138, Pa = 139, Da = 140, ja = 201, Ca = 202, Ha = 203, Na = 204, $a = 205, Ba = 206, Ma = 211, Fa = 212, La = 213, _a = 214, Ga = 216, Ja = 217, Ka = 221, Oa = 222, Qa = 223, Ua = 224, Wa = 225, Va = 230, Xa = 231, Ya = 232, Za = 233, et = 234, at = 235, tt = 236, st = 241, rt = 242, mt = 243, it = 244, nt = 245, ot = 246, lt = 249, dt = 250, ct = 251, pt = 261, ut = 282, bt = 283, yt = 284, kt = 285, gt = 301, ht = 302, ft = 605, Rt = 303, zt = 311, It = 312, St = 313, xt = 314, vt = 315, Tt = 320, wt = 321, qt = 322, Et = 323, At = 324, Pt = 325, Dt = 331, jt = 332, Ct = 333, Ht = 334, Nt = 335, $t = 336, Bt = 337, Mt = 339, Ft = 340, Lt = 351, _t = 342, Gt = 352, Jt = 353, Kt = 354, Ot = 355, Qt = 655, Ut = 356, Wt = 357, Vt = (e, a) => [h(e.skills, a), f(e.actors, a), R(e.states, a), z(e.armors, a), I(e.classes, a), S(e.enemies, a), x(e.items, a), v(e.weapons, a), T(e.commonEvents, a)], h = (e, a) => ({
  label: a.skill.title,
  items: e,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), f = (e, a) => ({
  items: e,
  label: a.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), R = (e, a) => ({ items: e, label: a.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), z = (e, a) => ({ items: e, label: a.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), I = (e, a) => ({ items: e, label: a.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), S = (e, a) => ({ items: e, label: a.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), x = (e, a) => ({ items: e, label: a.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), v = (e, a) => ({ items: e, label: a.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), T = (e, a) => ({
  items: e,
  label: a.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Xt = 11, Yt = 12, Zt = 13, es = 14, as = 21, ts = 22, ss = 23, rs = 31, ms = 32, is = 33, ns = 34, os = 35, ls = 41, ds = 42, cs = 43, ps = 44, us = 51, bs = 52, ys = 53, ks = 54, gs = 55, hs = 61, fs = 62, Rs = 63, zs = 64, Is = 0, Ss = 1, xs = 2, vs = 3, w = (e, a) => ({
  items: q(e.options, a),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), q = (e, a) => [{ id: 0, name: a.normal }, { id: 1, name: e.bossCollaps }, { id: 2, name: e.instantCollaps }, {
  id: 3,
  name: e.noneCollaps
}], Ts = 0, ws = 1, qs = 2, Es = 3, As = 4, Ps = 5, Ds = 6, js = 7, Cs = 8, Hs = 9, E = (e) => ({
  items: A(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), A = (e) => [{ id: 0, name: e.hitRate }, { id: 1, name: e.evasionRate }, { id: 2, name: e.criticalRate }, { id: 3, name: e.criticalEvasionRate }, { id: 4, name: e.magicEvasionRate }, {
  id: 5,
  name: e.magicReflectionRate
}, { id: 6, name: e.counterAttackRate }, { id: 7, name: e.hpRegenerationRate }, { id: 8, name: e.mpRegenerationRate }, { id: 9, name: e.tpRegenerationRate }], Ns = (e, a) => {
  switch (e) {
    case 3:
      return a.criticalEvasionRate;
    case 1:
      return a.evasionRate;
    case 6:
      return a.counterAttackRate;
    case 2:
      return a.criticalRate;
    case 0:
      return a.hitRate;
    case 7:
      return a.hpRegenerationRate;
    case 4:
      return a.magicEvasionRate;
    case 5:
      return a.magicReflectionRate;
    case 8:
      return a.mpRegenerationRate;
    case 9:
      return a.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, $s = 0, Bs = 1, Ms = 2, Fs = 3, Ls = 4, _s = 5, Gs = 6, Js = 7, P = (e) => ({ items: D(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "params" } }), D = (e) => [{
  id: 0,
  name: e.maxHp
}, { id: 1, name: e.maxMp }, { id: 2, name: e.atk }, { id: 3, name: e.def }, { id: 4, name: e.matk }, { id: 5, name: e.mdef }, { id: 6, name: e.agi }, { id: 7, name: e.luk }], Ks = (e, a) => {
  switch (e) {
    case 0:
      return a.maxHp;
    case 1:
      return a.maxMp;
    case 2:
      return a.atk;
    case 3:
      return a.def;
    case 4:
      return a.matk;
    case 5:
      return a.mdef;
    case 6:
      return a.agi;
    case 7:
      return a.luk;
    default:
      return `?rparams[${e}]`;
  }
}, Os = 0, Qs = 1, Us = 2, Ws = 3, Vs = 4, Xs = 5, Ys = 6, Zs = 7, er = 8, ar = 9, j = (e) => ({ items: C(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), C = (e) => [{
  id: 0,
  name: e.targetRate
}, { id: 1, name: e.guardEffectRate }, { id: 2, name: e.recoveryEffectRate }, { id: 3, name: e.pharmacology }, { id: 4, name: e.mpCostRate }, { id: 5, name: e.tpChargeRate }, {
  id: 6,
  name: e.physicalDamageRate
}, { id: 7, name: e.magicDamageRate }, { id: 8, name: e.floorDamageRate }, { id: 9, name: e.experienceRate }], tr = (e, a) => {
  switch (e) {
    case 9:
      return a.experienceRate;
    case 0:
      return a.targetRate;
    case 8:
      return a.floorDamageRate;
    case 1:
      return a.guardEffectRate;
    case 4:
      return a.mpCostRate;
    case 5:
      return a.tpChargeRate;
    case 6:
      return a.physicalDamageRate;
    case 7:
      return a.magicDamageRate;
    case 3:
      return a.pharmacology;
    case 2:
      return a.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, sr = 0, rr = 1, mr = 2, ir = 3, nr = 4, or = 5, H = (e) => ({
  items: N(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), N = (e) => [{ id: 0, name: e.encounterHalf }, { id: 1, name: e.encounterNone }, { id: 2, name: e.cancelSurprise }, {
  id: 3,
  name: e.raisePreemptive
}, { id: 4, name: e.goldDouble }, { id: 5, name: e.dropItemDouble }], lr = 0, dr = 1, cr = 2, pr = 3, $ = (e) => ({ items: B(e.options), label: e.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), B = (e) => [{ id: 0, name: e.autoBattle }, { id: 1, name: e.guard }, { id: 2, name: e.substitute }, {
  id: 3,
  name: e.preventEscape
}], ur = (e, a) => [P(e.regularParam), E(e.extraParam), j(e.specialParam), w(e.collaps, a), $(e.specialFlag), H(e.partyAbility)], br = 11, yr = 12, kr = 13, gr = 21, hr = 22, fr = 31, Rr = 32, zr = 33, Ir = 34, Sr = 41, xr = 42, vr = 43, Tr = 44, wr = (e) => [F(e), L(e), _(e), G(e), J(e), K(e), O(e), Q(e), U(e), M(e), W(e), V(e), X(e)], t = (e, a, s) => ({
  kindId: e,
  label: a.domainName,
  pattern: a.format,
  description: a.desc,
  dataSource: s
}), M = (e) => t(41, e.special), F = (e) => t(11, e.recoverHp), L = (e) => t(12, e.recoverMp), _ = (e) => t(13, e.gainTp), G = (e) => t(21, e.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), J = (e) => t(22, e.removeState, { author: "rmmz", module: "data", kind: "state" }), K = (e) => t(31, e.addBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (e) => t(32, e.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Q = (e) => t(33, e.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), U = (e) => t(34, e.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), W = (e) => t(42, e.grow, { author: "rmmz", module: "trait", kind: "params" }), V = (e) => t(43, e.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), X = (e) => t(44, e.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), u = (e, a) => `<${e}:${a}>`, qr = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Er = (e, a) => b(e.note, (s, r) => a(s, r, e)), Ar = (e) => b(e, (a, s) => ({
  key: a,
  value: s
})), b = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(s), (r) => a(r[1], r[2]));
}, Pr = (e, a) => {
  if (e.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (s, r, o) => {
    const l = a(r, o);
    if (l.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return u(r, l);
  });
}, Dr = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(s)).find((o) => o[1] === a);
  return r ? r[2] : void 0;
}, jr = (e, a, s) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (o, l) => l === a ? u(l, s) : o);
}, Cr = (e) => [Y(e.elementRate), Z(e.debuffRate), ee(e.stateRate), ae(e.stateResist), te(e.regularParam), se(e.extraParam), re(e.specialParam), me(e.attackElement), ie(e.attackState), ne(e.attackSpeed), oe(e.attackTimes), le(e.attackSkill), de(e.skillTypeAdd), ce(e.skillTypeSeal), pe(e.skillAdd), ue(e.skillSeal), be(e.equipWeaponType), ye(e.equipArmorType), ke(e.equipLock), ge(e.equipSeal), he(e.slotType), fe(e.actionPlus), Re(e.specialFlag), ze(e.collaps), Ie(e.partyAbility)], Y = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 11,
  dataSource: y()
}), Z = (e) => ({ pattern: e.format, label: e.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ee = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 13,
  dataSource: d()
}), ae = (e) => ({ pattern: e.format, label: e.title, kindId: 14, dataSource: d() }), te = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), se = (e) => ({ pattern: e.format, label: e.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), re = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), me = (e) => ({ pattern: e.format, label: e.title, kindId: 31, dataSource: y() }), ie = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 32,
  dataSource: d()
}), ne = (e) => ({ pattern: e.format, label: e.title, kindId: 33 }), oe = (e) => ({ pattern: e.format, label: e.title, kindId: 34 }), le = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 35,
  dataSource: c()
}), de = (e) => ({ pattern: e.format, label: e.title, kindId: 41, dataSource: k() }), ce = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 42,
  dataSource: k()
}), pe = (e) => ({ pattern: e.format, label: e.title, kindId: 43, dataSource: c() }), ue = (e) => ({ pattern: e.format, label: e.title, kindId: 44, dataSource: c() }), be = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 51,
  dataSource: Se()
}), ye = (e) => ({ pattern: e.format, label: e.title, kindId: 52, dataSource: xe() }), ke = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 53,
  dataSource: p()
}), ge = (e) => ({ pattern: e.format, label: e.title, kindId: 54, dataSource: p() }), he = (e) => ({ pattern: e.format, label: e.title, kindId: 55, dataSource: p() }), fe = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 61
}), Re = (e) => ({ pattern: e.format, label: e.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), ze = (e) => ({ pattern: e.format, label: e.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ie = (e) => ({ pattern: e.format, label: e.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), d = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), c = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Se = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), xe = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), p = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), m = new g({ strict: !0 }), ve = m.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  code: { type: "integer", enum: [320, 324, 325] },
  indent: { type: "integer" },
  parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] }
}, additionalProperties: !1 }), Hr = (e) => ve(e), Te = m.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] }
  },
  required: ["code", "indent", "parameters"]
}), Nr = (e) => Te(e), we = m.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
  },
  additionalProperties: !1
}), $r = (e) => we(e), qe = m.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "string" }] } }, additionalProperties: !1 }), n = (e) => qe(e), Ee = m.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] }
  },
  required: ["code", "indent", "parameters"]
}), Br = (e) => Ee(e), Ae = m.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 5,
    maxItems: 5,
    items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }]
  } },
  required: ["code", "indent", "parameters"]
}), Mr = (e) => Ae(e), Pe = m.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "integer" }, { type: "string" }]
} }, required: ["code", "indent", "parameters"] }), Fr = (e) => Pe(e), De = m.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 103
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), Lr = (e) => De(e), je = m.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, {
    type: "integer",
    minimum: 0,
    maximum: 2
  }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), _r = (e) => je(e), Gr = (e) => n(e) && e.code === 401, Jr = (e) => n(e) && e.code === 405, Kr = (e) => n(e) && e.code === 108, Or = (e) => n(e) && e.code === 408, Qr = (e) => n(e) && e.code === 355, Ur = (e) => n(e) && e.code === 655, i = (e, a) => ({
  name: e,
  id: a
}), Ce = (e) => e.variables.map(i), He = (e) => e.elements.map(i), Ne = (e) => e.equipTypes.map(i), $e = (e) => e.skillTypes.map(i), Be = (e) => e.weaponTypes.map(i), Me = (e) => e.armorTypes.map(i), Fe = (e) => e.switches.map(i), Wr = (e, a) => [_e(e, a), Ge(e, a), Qe(e, a), Je(e, a), Le(e, a), Ke(e, a), Oe(e, a)], Le = (e, a) => ({
  items: Me(e),
  label: a.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), _e = (e, a) => ({ items: He(e), label: a.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ge = (e, a) => ({ items: Ne(e), label: a.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Je = (e, a) => ({
  items: $e(e),
  label: a.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Ke = (e, a) => ({ items: Ce(e), label: a.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Oe = (e, a) => ({ items: Fe(e), label: a.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Qe = (e, a) => ({
  items: Be(e),
  label: a.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  Da as $,
  da as A,
  pa as B,
  ra as C,
  ua as D,
  ca as E,
  ba as F,
  ya as G,
  ka as H,
  ea as I,
  ga as J,
  ha as K,
  la as L,
  fa as M,
  We as N,
  Ra as O,
  za as P,
  Ia as Q,
  Sa as R,
  Ve as S,
  xa as T,
  va as U,
  Ta as V,
  wa as W,
  qa as X,
  Ea as Y,
  Aa as Z,
  Pa as _,
  Nr as a,
  _t as a$,
  ja as a0,
  Ca as a1,
  Ha as a2,
  Na as a3,
  $a as a4,
  Ba as a5,
  Ma as a6,
  Fa as a7,
  La as a8,
  _a as a9,
  yt as aA,
  kt as aB,
  gt as aC,
  ht as aD,
  ft as aE,
  Rt as aF,
  zt as aG,
  It as aH,
  St as aI,
  xt as aJ,
  vt as aK,
  Tt as aL,
  wt as aM,
  qt as aN,
  Et as aO,
  At as aP,
  Pt as aQ,
  Dt as aR,
  jt as aS,
  Ct as aT,
  Ht as aU,
  Nt as aV,
  $t as aW,
  Bt as aX,
  Mt as aY,
  Ft as aZ,
  Lt as a_,
  Ga as aa,
  Ja as ab,
  Ka as ac,
  Oa as ad,
  Qa as ae,
  Ua as af,
  Wa as ag,
  Va as ah,
  Xa as ai,
  Ya as aj,
  Za as ak,
  et as al,
  at as am,
  tt as an,
  st as ao,
  rt as ap,
  mt as aq,
  it as ar,
  nt as as,
  ot as at,
  lt as au,
  dt as av,
  ct as aw,
  pt as ax,
  ut as ay,
  bt as az,
  $r as b,
  Ks as b$,
  Gt as b0,
  Jt as b1,
  Kt as b2,
  Ot as b3,
  Qt as b4,
  Ut as b5,
  Wt as b6,
  Vt as b7,
  ur as b8,
  Xt as b9,
  Is as bA,
  Ss as bB,
  xs as bC,
  vs as bD,
  Ts as bE,
  ws as bF,
  qs as bG,
  Es as bH,
  As as bI,
  Ps as bJ,
  Ds as bK,
  js as bL,
  Cs as bM,
  Hs as bN,
  E as bO,
  A as bP,
  Ns as bQ,
  $s as bR,
  Bs as bS,
  Ms as bT,
  Fs as bU,
  Ls as bV,
  _s as bW,
  Gs as bX,
  Js as bY,
  P as bZ,
  D as b_,
  Yt as ba,
  Zt as bb,
  es as bc,
  as as bd,
  ts as be,
  ss as bf,
  rs as bg,
  ms as bh,
  is as bi,
  ns as bj,
  os as bk,
  ls as bl,
  ds as bm,
  cs as bn,
  ps as bo,
  us as bp,
  bs as bq,
  ys as br,
  ks as bs,
  gs as bt,
  hs as bu,
  fs as bv,
  Rs as bw,
  zs as bx,
  w as by,
  q as bz,
  n as c,
  Os as c0,
  Qs as c1,
  Us as c2,
  Ws as c3,
  Vs as c4,
  Xs as c5,
  Ys as c6,
  Zs as c7,
  er as c8,
  ar as c9,
  Ir as cA,
  Sr as cB,
  xr as cC,
  vr as cD,
  Tr as cE,
  u as cF,
  qr as cG,
  Er as cH,
  Ar as cI,
  b as cJ,
  Pr as cK,
  Dr as cL,
  jr as cM,
  Ce as cN,
  He as cO,
  Ne as cP,
  $e as cQ,
  Be as cR,
  Me as cS,
  Fe as cT,
  Wr as cU,
  j as ca,
  C as cb,
  tr as cc,
  sr as cd,
  rr as ce,
  mr as cf,
  ir as cg,
  nr as ch,
  or as ci,
  H as cj,
  N as ck,
  lr as cl,
  dr as cm,
  cr as cn,
  pr as co,
  $ as cp,
  B as cq,
  wr as cr,
  br as cs,
  yr as ct,
  kr as cu,
  gr as cv,
  hr as cw,
  fr as cx,
  Rr as cy,
  zr as cz,
  Br as d,
  Mr as e,
  Fr as f,
  Lr as g,
  _r as h,
  Hr as i,
  Gr as j,
  Jr as k,
  Kr as l,
  Or as m,
  Qr as n,
  Ur as o,
  Xe as p,
  Ye as q,
  Cr as r,
  Ze as s,
  aa as t,
  ta as u,
  sa as v,
  ma as w,
  ia as x,
  na as y,
  oa as z
};
