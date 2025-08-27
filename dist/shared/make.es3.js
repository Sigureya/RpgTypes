import g from "ajv";
const ee = 0, te = 101, se = 401, re = 102, me = 402, ie = 103, oe = 104, ne = 105, le = 405, de = 108, ce = 408, pe = 109, ue = 111, be = 411, ye = 112, ke = 113, ge = 115, fe = 117, he = 118, ve = 119, Re = 121, Ie = 122, ze = 123, Se = 124, xe = 125, Te = 126, Ae = 127, we = 128, Ee = 129, Pe = 132, De = 133, qe = 134, Ne = 135, Ge = 136, He = 137, Fe = 138, Ce = 139, Me = 140, je = 201, Ve = 202, Le = 203, $e = 204, Be = 205, Ue = 206, Xe = 211, Oe = 212, We = 213, _e = 214, Ke = 216, Je = 217, Qe = 221, Ye = 222, Ze = 223, at = 224, et = 225, tt = 230, st = 231, rt = 232, mt = 233, it = 234, ot = 235, nt = 236, lt = 241, dt = 242, ct = 243, pt = 244, ut = 245, bt = 246, yt = 249, kt = 250, gt = 251, ft = 261, ht = 282, vt = 283, Rt = 284, It = 285, zt = 301, St = 302, xt = 605, Tt = 303, At = 311, wt = 312, Et = 313, Pt = 314, Dt = 315, qt = 320, Nt = 321, Gt = 322, Ht = 323, Ft = 324, Ct = 325, Mt = 331, jt = 332, Vt = 333, Lt = 334, $t = 335, Bt = 336, Ut = 337, Xt = 339, Ot = 340, Wt = 351, _t = 342, Kt = 352, Jt = 353, Qt = 354, Yt = 355, Zt = 655, as = 356, es = 357, ts = (a, e) => a.events.map((s) => s ? {
  ...s,
  pages: f(s, e)
} : null), f = (a, e) => a.pages.map((s) => ({
  conditions: s.conditions,
  image: s.image,
  directionFix: s.directionFix,
  moveFrequency: s.moveFrequency,
  moveRoute: s.moveRoute,
  list: e(s.list)
})), ss = (a, e) => [h(a.skills, e), v(a.actors, e), R(a.states, e), I(a.armors, e), z(a.classes, e), S(a.enemies, e), x(a.items, e), T(a.weapons, e), A(a.commonEvents, e)], h = (a, e) => ({
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
}), rs = 11, ms = 12, is = 13, os = 14, ns = 21, ls = 22, ds = 23, cs = 31, ps = 32, us = 33, bs = 34, ys = 35, ks = 41, gs = 42, fs = 43, hs = 44, vs = 51, Rs = 52, Is = 53, zs = 54, Ss = 55, xs = 61, Ts = 62, As = 63, ws = 64, Es = 0, Ps = 1, Ds = 2, qs = 3, w = (a, e) => ({
  items: E(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), E = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], Ns = 0, Gs = 1, Hs = 2, Fs = 3, Cs = 4, Ms = 5, js = 6, Vs = 7, Ls = 8, $s = 9, P = (a) => ({
  items: D(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), D = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Bs = (a, e) => {
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
}, Us = 0, Xs = 1, Os = 2, Ws = 3, _s = 4, Ks = 5, Js = 6, Qs = 7, q = (a) => ({ items: N(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), N = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Ys = (a, e) => {
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
}, Zs = 0, ar = 1, er = 2, tr = 3, sr = 4, rr = 5, mr = 6, ir = 7, or = 8, nr = 9, G = (a) => ({ items: H(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), H = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], lr = (a, e) => {
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
}, dr = 0, cr = 1, pr = 2, ur = 3, br = 4, yr = 5, F = (a) => ({
  items: C(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), C = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], kr = 0, gr = 1, fr = 2, hr = 3, M = (a) => ({ items: j(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), j = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], vr = (a, e) => [q(a.regularParam), P(a.extraParam), G(a.specialParam), w(a.collaps, e), M(a.specialFlag), F(a.partyAbility)], Rr = 11, Ir = 12, zr = 13, Sr = 21, xr = 22, Tr = 31, Ar = 32, wr = 33, Er = 34, Pr = 41, Dr = 42, qr = 43, Nr = 44, Gr = (a) => [L(a), $(a), B(a), U(a), X(a), O(a), W(a), _(a), K(a), V(a), J(a), Q(a), Y(a)], r = (a, e, s) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: s
}), V = (a) => r(41, a.special), L = (a) => r(11, a.recoverHp), $ = (a) => r(12, a.recoverMp), B = (a) => r(13, a.gainTp), U = (a) => r(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), X = (a) => r(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), O = (a) => r(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), W = (a) => r(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), _ = (a) => r(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), K = (a) => r(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), J = (a) => r(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Q = (a) => r(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Y = (a) => r(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Hr = (a, e) => b(a.note, (s, m) => e(s, m, a)), Z = (a) => b(a, (e, s) => ({ key: e, value: s })), b = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(s), (m) => e(m[1], m[2]));
}, aa = (a, e = `
`) => [...a.items.map((s) => `<${s.key}:${s.value}>`), a.note].join(e).trim(), ea = (a) => ({ note: ta(a), items: Z(a) }), ta = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, sa = (a, e) => `<${a}:${e}>`, Fr = (a, e, s = `
`) => {
  const m = ea(a), l = m.items.map((d) => ({ key: d.key, value: e(d) }));
  return aa({ note: m.note, items: l }, s);
}, Cr = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, m = Array.from(a.matchAll(s)).find((l) => l[1] === e);
  return m ? m[2] : void 0;
}, Mr = (a, e, s) => {
  const m = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(m, (l, d) => d === e ? sa(d, s) : l);
}, jr = (a) => [ra(a.elementRate), ma(a.debuffRate), ia(a.stateRate), oa(a.stateResist), na(a.regularParam), la(a.extraParam), da(a.specialParam), ca(a.attackElement), pa(a.attackState), ua(a.attackSpeed), ba(a.attackTimes), ya(a.attackSkill), ka(a.skillTypeAdd), ga(a.skillTypeSeal), fa(a.skillAdd), ha(a.skillSeal), va(a.equipWeaponType), Ra(a.equipArmorType), Ia(a.equipLock), za(a.equipSeal), Sa(a.slotType), xa(a.actionPlus), Ta(a.specialFlag), Aa(a.collaps), wa(a.partyAbility)], ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: y()
}), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: c()
}), oa = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: c() }), na = (a) => ({
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
  dataSource: c()
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ba = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ya = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: p()
}), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: k() }), ga = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: k()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: p() }), ha = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: p() }), va = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Ea()
}), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Pa() }), Ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: u()
}), za = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: u() }), Sa = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: u() }), xa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ta = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), wa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), c = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), p = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ea = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Pa = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Vr = 0, Lr = 1, $r = 0, Br = 1, Ur = (a, e = 0) => ({
  code: 101,
  indent: e,
  parameters: [(a == null ? void 0 : a.facename) ?? "", (a == null ? void 0 : a.faceIndex) ?? 0, (a == null ? void 0 : a.background) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.speakerName) ?? ""]
}), Xr = (a) => ({
  facename: a[0],
  faceIndex: a[1],
  background: a[2],
  positionType: a[3],
  speakerName: a[4]
}), Or = (a) => [a.facename, a.faceIndex, a.background, a.positionType, a.speakerName], Wr = (a, e = 0) => ({ code: 401, indent: e, parameters: [a] }), i = new g({ strict: !0 }), Da = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 2,
    maxItems: 2,
    items: [{ type: "integer", minimum: 0 }, { type: "string" }]
  } },
  additionalProperties: !1
}), _r = (a) => Da(a), qa = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 105 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } },
  required: ["code", "indent", "parameters"]
}), Kr = (a) => qa(a), Na = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: !1 }), Jr = (a) => Na(a), Ga = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: !1
}), n = (a) => Ga(a), Ha = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 117 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } },
  required: ["code", "indent", "parameters"]
}), Qr = (a) => Ha(a), Fa = i.compile({ type: "object", properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{
  type: "array",
  items: { type: "string" }
}, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } }, required: ["code", "indent", "parameters"] }), Yr = (a) => Fa(a), Ca = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] }
  },
  required: ["code", "indent", "parameters"]
}), Zr = (a) => Ca(a), Ma = i.compile({
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
}), am = (a) => Ma(a), em = (a) => n(a) && a.code === 401, tm = (a) => n(a) && a.code === 405, sm = (a) => n(a) && a.code === 108, rm = (a) => n(a) && a.code === 408, mm = (a) => n(a) && a.code === 355, im = (a) => n(a) && a.code === 655, o = (a, e) => ({
  name: a,
  id: e
}), ja = (a) => a.variables.map(o), Va = (a) => a.elements.map(o), La = (a) => a.equipTypes.map(o), $a = (a) => a.skillTypes.map(o), Ba = (a) => a.weaponTypes.map(o), Ua = (a) => a.armorTypes.map(o), Xa = (a) => a.switches.map(o), om = (a, e) => [Wa(a, e), _a(a, e), Ya(a, e), Ka(a, e), Oa(a, e), Ja(a, e), Qa(a, e)], Oa = (a, e) => ({
  items: Ua(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Wa = (a, e) => ({ items: Va(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), _a = (a, e) => ({ items: La(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Ka = (a, e) => ({
  items: $a(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Ja = (a, e) => ({ items: ja(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Qa = (a, e) => ({ items: Xa(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Ya = (a, e) => ({
  items: Ba(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), nm = (a) => [a.mhp ?? "", a.mmp ?? "", a.atk ?? "", a.def ?? "", a.mat ?? "", a.mdf ?? "", a.agi ?? "", a.luk ?? "", a.hit ?? "", a.eva ?? ""], lm = (a) => ({
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
}), dm = (a) => [a.level ?? "Level", a.levelA ?? "Level", a.hp ?? "HP", a.hpA ?? "HP", a.mp ?? "MP", a.mpA ?? "MP", a.tp ?? "TP", a.tpA ?? "TP", a.experience ?? "EXP", a.exp ?? "EXP"], cm = (a) => ({
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
}), pm = (a) => Za(a, ""), Za = (a, e) => [a.fight ?? "Fight", a.escape ?? "Escape", a.attack ?? "Attack", a.guard ?? "Guard", a.item ?? "Item", a.skill ?? "Skill", a.equip ?? "Equip", a.status ?? "Status", a.formation ?? "Formation", a.save ?? "Save", a.gameEnd ?? "Game End", a.options ?? "Options", a.weapon ?? "Weapon", a.armor ?? "Armor", a.keyItem ?? "Key Item", a.equip2 ?? "Equip2", a.optimize ?? "Optimize", a.clear ?? "Clear", a.newGame ?? "New Game", a.continueGame ?? "Continue", e, a.toTitle ?? "To Title", a.cancel ?? "Cancel", e, a.buy ?? "Buy", a.sell ?? "Sell"], um = (a) => ({
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
  continueGame: a[19],
  toTitle: a[21],
  cancel: a[22],
  buy: a[24],
  sell: a[25]
}), t = (a, e) => typeof a == "string" ? a : e, bm = (a) => ({
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
  Ge as $,
  ce as A,
  pe as B,
  de as C,
  ue as D,
  be as E,
  ke as F,
  ge as G,
  fe as H,
  ie as I,
  he as J,
  ve as K,
  ye as L,
  Re as M,
  ee as N,
  Ie as O,
  ze as P,
  Se as Q,
  xe as R,
  te as S,
  Te as T,
  Ae as U,
  we as V,
  Ee as W,
  Pe as X,
  De as Y,
  qe as Z,
  Ne as _,
  Wr as a,
  Ut as a$,
  He as a0,
  Fe as a1,
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
  Dt as aO,
  qt as aP,
  Nt as aQ,
  Gt as aR,
  Ht as aS,
  Ft as aT,
  Ct as aU,
  Mt as aV,
  jt as aW,
  Vt as aX,
  Lt as aY,
  $t as aZ,
  Bt as a_,
  Xe as aa,
  Oe as ab,
  We as ac,
  _e as ad,
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
  Kr as b,
  Js as b$,
  Xt as b0,
  Ot as b1,
  Wt as b2,
  _t as b3,
  Kt as b4,
  Jt as b5,
  Qt as b6,
  Yt as b7,
  Zt as b8,
  as as b9,
  As as bA,
  ws as bB,
  w as bC,
  E as bD,
  Es as bE,
  Ps as bF,
  Ds as bG,
  qs as bH,
  Ns as bI,
  Gs as bJ,
  Hs as bK,
  Fs as bL,
  Cs as bM,
  Ms as bN,
  js as bO,
  Vs as bP,
  Ls as bQ,
  $s as bR,
  P as bS,
  D as bT,
  Bs as bU,
  Us as bV,
  Xs as bW,
  Os as bX,
  Ws as bY,
  _s as bZ,
  Ks as b_,
  es as ba,
  ss as bb,
  vr as bc,
  rs as bd,
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
  Jr as c,
  lm as c$,
  Qs as c0,
  q as c1,
  N as c2,
  Ys as c3,
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
  Dr as cG,
  qr as cH,
  Nr as cI,
  aa as cJ,
  ea as cK,
  Z as cL,
  b as cM,
  Hr as cN,
  sa as cO,
  Fr as cP,
  Cr as cQ,
  Mr as cR,
  ja as cS,
  Va as cT,
  La as cU,
  $a as cV,
  Ba as cW,
  Ua as cX,
  Xa as cY,
  om as cZ,
  nm as c_,
  mr as ca,
  ir as cb,
  or as cc,
  nr as cd,
  G as ce,
  H as cf,
  lr as cg,
  dr as ch,
  cr as ci,
  pr as cj,
  ur as ck,
  br as cl,
  yr as cm,
  F as cn,
  C as co,
  kr as cp,
  gr as cq,
  fr as cr,
  hr as cs,
  M as ct,
  j as cu,
  Gr as cv,
  Rr as cw,
  Ir as cx,
  zr as cy,
  Sr as cz,
  n as d,
  dm as d0,
  cm as d1,
  pm as d2,
  Za as d3,
  um as d4,
  bm as d5,
  Vr as d6,
  $r as d7,
  Br as d8,
  Lr as d9,
  Qr as e,
  Xr as f,
  Yr as g,
  Zr as h,
  _r as i,
  am as j,
  em as k,
  tm as l,
  Ur as m,
  sm as n,
  rm as o,
  mm as p,
  im as q,
  jr as r,
  ts as s,
  Or as t,
  se as u,
  re as v,
  me as w,
  oe as x,
  ne as y,
  le as z
};
