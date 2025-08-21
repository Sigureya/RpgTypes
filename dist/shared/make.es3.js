import g from "ajv";
const te = 0, se = 101, re = 401, me = 102, ie = 402, oe = 103, ne = 104, le = 105, de = 405, ce = 108, pe = 408, ue = 109, be = 111, ye = 411, ke = 112, ge = 113, fe = 115, he = 117, ve = 118, Re = 119, Ie = 121, ze = 122, Se = 123, xe = 124, Te = 125, Ae = 126, we = 127, Ee = 128, Pe = 129, qe = 132, De = 133, Ne = 134, He = 135, Fe = 136, Ge = 137, Ce = 138, Me = 139, je = 140, Ve = 201, Le = 202, $e = 203, Be = 204, Ue = 205, Xe = 206, _e = 211, Oe = 212, We = 213, Ke = 214, Je = 216, Qe = 217, Ye = 221, Ze = 222, at = 223, et = 224, tt = 225, st = 230, rt = 231, mt = 232, it = 233, ot = 234, nt = 235, lt = 236, dt = 241, ct = 242, pt = 243, ut = 244, bt = 245, yt = 246, kt = 249, gt = 250, ft = 251, ht = 261, vt = 282, Rt = 283, It = 284, zt = 285, St = 301, xt = 302, Tt = 605, At = 303, wt = 311, Et = 312, Pt = 313, qt = 314, Dt = 315, Nt = 320, Ht = 321, Ft = 322, Gt = 323, Ct = 324, Mt = 325, jt = 331, Vt = 332, Lt = 333, $t = 334, Bt = 335, Ut = 336, Xt = 337, _t = 339, Ot = 340, Wt = 351, Kt = 342, Jt = 352, Qt = 353, Yt = 354, Zt = 355, as = 655, es = 356, ts = 357, ss = (a, e) => a.events.map((s) => s ? {
  ...s,
  pages: f(s, e)
} : null), f = (a, e) => a.pages.map((s) => ({
  conditions: s.conditions,
  image: s.image,
  directionFix: s.directionFix,
  moveFrequency: s.moveFrequency,
  moveRoute: s.moveRoute,
  list: e(s.list)
})), rs = (a, e) => [h(a.skills, e), v(a.actors, e), R(a.states, e), I(a.armors, e), z(a.classes, e), S(a.enemies, e), x(a.items, e), T(a.weapons, e), A(a.commonEvents, e)], h = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), v = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), R = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), I = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), z = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), S = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), x = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), T = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), A = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), ms = 11, is = 12, os = 13, ns = 14, ls = 21, ds = 22, cs = 23, ps = 31, us = 32, bs = 33, ys = 34, ks = 35, gs = 41, fs = 42, hs = 43, vs = 44, Rs = 51, Is = 52, zs = 53, Ss = 54, xs = 55, Ts = 61, As = 62, ws = 63, Es = 64, Ps = 0, qs = 1, Ds = 2, Ns = 3, w = (a, e) => ({
  items: E(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), E = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], Hs = 0, Fs = 1, Gs = 2, Cs = 3, Ms = 4, js = 5, Vs = 6, Ls = 7, $s = 8, Bs = 9, P = (a) => ({
  items: q(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), q = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Us = (a, e) => {
  switch (a) {
    case 3:
      return e.criticalEvasionRate;
    case 1:
      return e.evasionRate;
    case 6:
      return e.counterAttackRate;
    case 2:
      return e.criticalRate;
    case 0:
      return e.hitRate;
    case 7:
      return e.hpRegenerationRate;
    case 4:
      return e.magicEvasionRate;
    case 5:
      return e.magicReflectionRate;
    case 8:
      return e.mpRegenerationRate;
    case 9:
      return e.tpRegenerationRate;
  }
  return `?xparams[${a}]`;
}, Xs = 0, _s = 1, Os = 2, Ws = 3, Ks = 4, Js = 5, Qs = 6, Ys = 7, D = (a) => ({ items: N(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), N = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Zs = (a, e) => {
  switch (a) {
    case 0:
      return e.maxHp;
    case 1:
      return e.maxMp;
    case 2:
      return e.atk;
    case 3:
      return e.def;
    case 4:
      return e.matk;
    case 5:
      return e.mdef;
    case 6:
      return e.agi;
    case 7:
      return e.luk;
    default:
      return `?rparams[${a}]`;
  }
}, ar = 0, er = 1, tr = 2, sr = 3, rr = 4, mr = 5, ir = 6, or = 7, nr = 8, lr = 9, H = (a) => ({ items: F(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), F = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], dr = (a, e) => {
  switch (a) {
    case 9:
      return e.experienceRate;
    case 0:
      return e.targetRate;
    case 8:
      return e.floorDamageRate;
    case 1:
      return e.guardEffectRate;
    case 4:
      return e.mpCostRate;
    case 5:
      return e.tpChargeRate;
    case 6:
      return e.physicalDamageRate;
    case 7:
      return e.magicDamageRate;
    case 3:
      return e.pharmacology;
    case 2:
      return e.recoveryEffectRate;
  }
  return `?sparams[${a}]`;
}, cr = 0, pr = 1, ur = 2, br = 3, yr = 4, kr = 5, G = (a) => ({
  items: C(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), C = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], gr = 0, fr = 1, hr = 2, vr = 3, M = (a) => ({ items: j(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), j = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], Rr = (a, e) => [D(a.regularParam), P(a.extraParam), H(a.specialParam), w(a.collaps, e), M(a.specialFlag), G(a.partyAbility)], Ir = 11, zr = 12, Sr = 13, xr = 21, Tr = 22, Ar = 31, wr = 32, Er = 33, Pr = 34, qr = 41, Dr = 42, Nr = 43, Hr = 44, Fr = (a) => [L(a), $(a), B(a), U(a), X(a), _(a), O(a), W(a), K(a), V(a), J(a), Q(a), Y(a)], r = (a, e, s) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: s
}), V = (a) => r(41, a.special), L = (a) => r(11, a.recoverHp), $ = (a) => r(12, a.recoverMp), B = (a) => r(13, a.gainTp), U = (a) => r(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), X = (a) => r(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), _ = (a) => r(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (a) => r(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), W = (a) => r(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), K = (a) => r(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), J = (a) => r(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Q = (a) => r(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Y = (a) => r(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Gr = (a, e) => b(a.note, (s, m) => e(s, m, a)), Z = (a) => b(a, (e, s) => ({ key: e, value: s })), b = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(s), (m) => e(m[1], m[2]));
}, aa = (a, e = `
`) => [...a.items.map((s) => `<${s.key}:${s.value}>`), a.note].join(e).trim(), ea = (a) => ({ note: ta(a), items: Z(a) }), ta = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, sa = (a, e) => `<${a}:${e}>`, Cr = (a, e) => {
  const s = ea(a), m = s.items.map((n) => ({ key: n.key, value: e(n) }));
  return aa({ note: s.note, items: m });
}, Mr = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, m = Array.from(a.matchAll(s)).find((n) => n[1] === e);
  return m ? m[2] : void 0;
}, jr = (a, e, s) => {
  const m = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(m, (n, u) => u === e ? sa(u, s) : n);
}, Vr = (a) => [ra(a.elementRate), ma(a.debuffRate), ia(a.stateRate), oa(a.stateResist), na(a.regularParam), la(a.extraParam), da(a.specialParam), ca(a.attackElement), pa(a.attackState), ua(a.attackSpeed), ba(a.attackTimes), ya(a.attackSkill), ka(a.skillTypeAdd), ga(a.skillTypeSeal), fa(a.skillAdd), ha(a.skillSeal), va(a.equipWeaponType), Ra(a.equipArmorType), Ia(a.equipLock), za(a.equipSeal), Sa(a.slotType), xa(a.actionPlus), Ta(a.specialFlag), Aa(a.collaps), wa(a.partyAbility)], ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: y()
}), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: d()
}), oa = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: d() }), na = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), la = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ca = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: y() }), pa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: d()
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ba = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ya = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: c()
}), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: k() }), ga = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: k()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: c() }), ha = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: c() }), va = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Ea()
}), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Pa() }), Ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: p()
}), za = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: p() }), Sa = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: p() }), xa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ta = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), wa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), d = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), c = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ea = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Pa = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), p = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Lr = (a, e = 0) => ({ code: 101, indent: e, parameters: [(a == null ? void 0 : a.facename) ?? "", (a == null ? void 0 : a.faceIndex) ?? 0, (a == null ? void 0 : a.background) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.speakerName) ?? ""] }), $r = (a) => ({
  facename: a[0],
  faceIndex: a[1],
  background: a[2],
  positionType: a[3],
  speakerName: a[4]
}), Br = (a) => [a.facename, a.faceIndex, a.background, a.positionType, a.speakerName], Ur = (a, e = 0) => ({
  code: 401,
  indent: e,
  parameters: [a]
}), i = new g({ strict: !0 }), qa = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: {
  type: "integer"
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } }, additionalProperties: !1 }), Xr = (a) => qa(a), Da = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] }
  },
  required: ["code", "indent", "parameters"]
}), _r = (a) => Da(a), Na = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
  },
  additionalProperties: !1
}), Or = (a) => Na(a), Ha = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "string" }] } }, additionalProperties: !1 }), l = (a) => Ha(a), Fa = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] }
  },
  required: ["code", "indent", "parameters"]
}), Wr = (a) => Fa(a), Ga = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 5,
    maxItems: 5,
    items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }]
  } },
  required: ["code", "indent", "parameters"]
}), Kr = (a) => Ga(a), Ca = i.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "integer" }, { type: "string" }]
} }, required: ["code", "indent", "parameters"] }), Jr = (a) => Ca(a), Ma = i.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 103
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), Qr = (a) => Ma(a), ja = i.compile({
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
}), Yr = (a) => ja(a), Zr = (a) => l(a) && a.code === 401, am = (a) => l(a) && a.code === 405, em = (a) => l(a) && a.code === 108, tm = (a) => l(a) && a.code === 408, sm = (a) => l(a) && a.code === 355, rm = (a) => l(a) && a.code === 655, o = (a, e) => ({
  name: a,
  id: e
}), Va = (a) => a.variables.map(o), La = (a) => a.elements.map(o), $a = (a) => a.equipTypes.map(o), Ba = (a) => a.skillTypes.map(o), Ua = (a) => a.weaponTypes.map(o), Xa = (a) => a.armorTypes.map(o), _a = (a) => a.switches.map(o), mm = (a, e) => [Wa(a, e), Ka(a, e), Za(a, e), Ja(a, e), Oa(a, e), Qa(a, e), Ya(a, e)], Oa = (a, e) => ({
  items: Xa(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Wa = (a, e) => ({ items: La(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ka = (a, e) => ({ items: $a(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Ja = (a, e) => ({
  items: Ba(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Qa = (a, e) => ({ items: Va(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Ya = (a, e) => ({ items: _a(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Za = (a, e) => ({
  items: Ua(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), im = (a) => [a.mhp ?? "", a.mmp ?? "", a.atk ?? "", a.def ?? "", a.mat ?? "", a.mdf ?? "", a.agi ?? "", a.luk ?? "", a.hit ?? "", a.eva ?? ""], om = (a) => ({
  mhp: a[0],
  mmp: a[1],
  atk: a[2],
  def: a[3],
  mat: a[4],
  mdf: a[5],
  agi: a[6],
  luk: a[7],
  hit: a[8],
  eva: a[9]
}), nm = (a) => [a.level ?? "Level", a.levelA ?? "Level", a.hp ?? "HP", a.hpA ?? "HP", a.mp ?? "MP", a.mpA ?? "MP", a.tp ?? "TP", a.tpA ?? "TP", a.experience ?? "EXP", a.exp ?? "EXP"], lm = (a) => ({
  level: a[0],
  levelA: a[1],
  hp: a[2],
  hpA: a[3],
  mp: a[4],
  mpA: a[5],
  tp: a[6],
  tpA: a[7],
  experience: a[8],
  exp: a[9]
}), dm = (a) => ae(a, ""), ae = (a, e) => [a.fight ?? "Fight", a.escape ?? "Escape", a.attack ?? "Attack", a.guard ?? "Guard", a.item ?? "Item", a.skill ?? "Skill", a.equip ?? "Equip", a.status ?? "Status", a.formation ?? "Formation", a.save ?? "Save", a.gameEnd ?? "Game End", a.options ?? "Options", a.weapon ?? "Weapon", a.armor ?? "Armor", a.keyItem ?? "Key Item", a.equip2 ?? "Equip2", a.optimize ?? "Optimize", a.clear ?? "Clear", a.newGame ?? "New Game", a.continue_ ?? "Continue", e, a.toTitle ?? "To Title", a.cancel ?? "Cancel", e, a.buy ?? "Buy", a.sell ?? "Sell"], cm = (a) => ({
  fight: a[0],
  escape: a[1],
  attack: a[2],
  guard: a[3],
  item: a[4],
  skill: a[5],
  equip: a[6],
  status: a[7],
  formation: a[8],
  save: a[9],
  gameEnd: a[10],
  options: a[11],
  weapon: a[12],
  armor: a[13],
  keyItem: a[14],
  equip2: a[15],
  optimize: a[16],
  clear: a[17],
  newGame: a[18],
  continue_: a[19],
  toTitle: a[21],
  cancel: a[22],
  buy: a[24],
  sell: a[25]
}), t = (a, e) => typeof a == "string" ? a : e, pm = (a) => ({
  actionFailure: t(a.actionFailure, "Action failed."),
  actorDamage: t(a.actorDamage, "%1 took %2 damage."),
  actorRecovery: t(a.actorRecovery, "%1 recovered %2 HP."),
  actorGain: t(a.actorGain, "%1 gained %2."),
  actorLoss: t(a.actorLoss, "%1 lost %2."),
  actorDrain: t(a.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: t(a.actorNoDamage, "%1 was not damaged."),
  actorNoHit: t(a.actorNoHit, "%1 was not hit."),
  alwaysDash: t(a.alwaysDash, "Always dash."),
  bgmVolume: t(a.bgmVolume, "BGM volume"),
  bgsVolume: t(a.bgsVolume, "BGS volume"),
  commandRemember: t(a.commandRemember, "Command remember."),
  criticalToActor: t(a.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: t(a.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: t(a.counterAttack, "%1 countered!"),
  debuffAdd: t(a.debuffAdd, "%1's %2 was lowered."),
  defeat: t(a.defeat, "Defeat."),
  enemyDamage: t(a.enemyDamage, "%1 took %2 damage."),
  enemyDrain: t(a.enemyDrain, "%1 drained %2 HP."),
  enemyGain: t(a.enemyGain, "%1 gained %2."),
  enemyLoss: t(a.enemyLoss, "%1 lost %2."),
  enemyNoDamage: t(a.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: t(a.enemyNoHit, "%1 was not hit."),
  enemyRecovery: t(a.enemyRecovery, "%1 recovered %2 HP."),
  evasion: t(a.evasion, "%1 evaded the attack!"),
  autosave: t(a.autosave, "Autosave"),
  escapeFailure: t(a.escapeFailure, "Escape failed."),
  escapeStart: t(a.escapeStart, "%1 started to escape!"),
  emerge: t(a.emerge, "%1 appeared!"),
  expNext: t(a.expNext, "Next level in %1 EXP."),
  expTotal: t(a.expTotal, "Total EXP: %1"),
  file: t(a.file, "File"),
  buffAdd: t(a.buffAdd, "%1's %2 was raised."),
  buffRemove: t(a.buffRemove, "%1's %2 was lowered."),
  obtainExp: t(a.obtainExp, "%1 EXP obtained."),
  obtainGold: t(a.obtainGold, "%1 gold obtained."),
  obtainItem: t(a.obtainItem, "%1 obtained %2."),
  obtainSkill: t(a.obtainSkill, "%1 learned %2."),
  levelUp: t(a.levelUp, "%1 leveled up!"),
  partyName: t(a.partyName, "Party"),
  loadMessage: t(a.loadMessage, "Load %1?"),
  meVolume: t(a.meVolume, "ME volume"),
  possession: t(a.possession, "Possession"),
  preemptive: t(a.preemptive, "%1 attacked first!"),
  saveMessage: t(a.saveMessage, "Save %1?"),
  seVolume: t(a.seVolume, "SE volume"),
  magicEvasion: t(a.magicEvasion, "%1 evaded the magic!"),
  magicReflection: t(a.magicReflection, "%1 reflected the magic!"),
  substitute: t(a.substitute, "%1 took the hit!"),
  surprise: t(a.surprise, "%1 surprised the enemy!"),
  touchUI: t(a.touchUI, "Touch UI"),
  useItem: t(a.useItem, "%1 used %2."),
  victory: t(a.victory, "Victory!")
});
export {
  He as $,
  de as A,
  pe as B,
  ce as C,
  ue as D,
  be as E,
  ye as F,
  ge as G,
  fe as H,
  oe as I,
  he as J,
  ve as K,
  ke as L,
  Re as M,
  te as N,
  Ie as O,
  ze as P,
  Se as Q,
  xe as R,
  se as S,
  Te as T,
  Ae as U,
  we as V,
  Ee as W,
  Pe as X,
  qe as Y,
  De as Z,
  Ne as _,
  Ur as a,
  Ut as a$,
  Fe as a0,
  Ge as a1,
  Ce as a2,
  Me as a3,
  je as a4,
  Ve as a5,
  Le as a6,
  $e as a7,
  Be as a8,
  Ue as a9,
  gt as aA,
  ft as aB,
  ht as aC,
  vt as aD,
  Rt as aE,
  It as aF,
  zt as aG,
  St as aH,
  xt as aI,
  Tt as aJ,
  At as aK,
  wt as aL,
  Et as aM,
  Pt as aN,
  qt as aO,
  Dt as aP,
  Nt as aQ,
  Ht as aR,
  Ft as aS,
  Gt as aT,
  Ct as aU,
  Mt as aV,
  jt as aW,
  Vt as aX,
  Lt as aY,
  $t as aZ,
  Bt as a_,
  Xe as aa,
  _e as ab,
  Oe as ac,
  We as ad,
  Ke as ae,
  Je as af,
  Qe as ag,
  Ye as ah,
  Ze as ai,
  at as aj,
  et as ak,
  tt as al,
  st as am,
  rt as an,
  mt as ao,
  it as ap,
  ot as aq,
  nt as ar,
  lt as as,
  dt as at,
  ct as au,
  pt as av,
  ut as aw,
  bt as ax,
  yt as ay,
  kt as az,
  _r as b,
  Js as b$,
  Xt as b0,
  _t as b1,
  Ot as b2,
  Wt as b3,
  Kt as b4,
  Jt as b5,
  Qt as b6,
  Yt as b7,
  Zt as b8,
  as as b9,
  As as bA,
  ws as bB,
  Es as bC,
  w as bD,
  E as bE,
  Ps as bF,
  qs as bG,
  Ds as bH,
  Ns as bI,
  Hs as bJ,
  Fs as bK,
  Gs as bL,
  Cs as bM,
  Ms as bN,
  js as bO,
  Vs as bP,
  Ls as bQ,
  $s as bR,
  Bs as bS,
  P as bT,
  q as bU,
  Us as bV,
  Xs as bW,
  _s as bX,
  Os as bY,
  Ws as bZ,
  Ks as b_,
  es as ba,
  ts as bb,
  rs as bc,
  Rr as bd,
  ms as be,
  is as bf,
  os as bg,
  ns as bh,
  ls as bi,
  ds as bj,
  cs as bk,
  ps as bl,
  us as bm,
  bs as bn,
  ys as bo,
  ks as bp,
  gs as bq,
  fs as br,
  hs as bs,
  vs as bt,
  Rs as bu,
  Is as bv,
  zs as bw,
  Ss as bx,
  xs as by,
  Ts as bz,
  Or as c,
  im as c$,
  Qs as c0,
  Ys as c1,
  D as c2,
  N as c3,
  Zs as c4,
  ar as c5,
  er as c6,
  tr as c7,
  sr as c8,
  rr as c9,
  xr as cA,
  Tr as cB,
  Ar as cC,
  wr as cD,
  Er as cE,
  Pr as cF,
  qr as cG,
  Dr as cH,
  Nr as cI,
  Hr as cJ,
  aa as cK,
  ea as cL,
  Z as cM,
  b as cN,
  Gr as cO,
  sa as cP,
  Cr as cQ,
  Mr as cR,
  jr as cS,
  Va as cT,
  La as cU,
  $a as cV,
  Ba as cW,
  Ua as cX,
  Xa as cY,
  _a as cZ,
  mm as c_,
  mr as ca,
  ir as cb,
  or as cc,
  nr as cd,
  lr as ce,
  H as cf,
  F as cg,
  dr as ch,
  cr as ci,
  pr as cj,
  ur as ck,
  br as cl,
  yr as cm,
  kr as cn,
  G as co,
  C as cp,
  gr as cq,
  fr as cr,
  hr as cs,
  vr as ct,
  M as cu,
  j as cv,
  Fr as cw,
  Ir as cx,
  zr as cy,
  Sr as cz,
  l as d,
  om as d0,
  nm as d1,
  lm as d2,
  dm as d3,
  ae as d4,
  cm as d5,
  pm as d6,
  Wr as e,
  $r as f,
  Kr as g,
  Jr as h,
  Xr as i,
  Qr as j,
  Yr as k,
  Zr as l,
  Lr as m,
  am as n,
  em as o,
  tm as p,
  sm as q,
  rm as r,
  Vr as s,
  Br as t,
  ss as u,
  re as v,
  me as w,
  ie as x,
  ne as y,
  le as z
};
