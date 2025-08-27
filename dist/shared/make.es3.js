import g from "ajv";
const ae = 0, ee = 101, te = 401, se = 102, re = 402, me = 103, ie = 104, oe = 105, ne = 405, le = 108, de = 408, ce = 109, pe = 111, ue = 411, be = 112, ye = 113, ke = 115, ge = 117, fe = 118, he = 119, ve = 121, Re = 122, Ie = 123, ze = 124, Se = 125, xe = 126, Te = 127, Ae = 128, we = 129, Ee = 132, Pe = 133, De = 134, qe = 135, Ne = 136, He = 137, Ge = 138, Ce = 139, Me = 140, je = 201, Fe = 202, Ve = 203, Le = 204, $e = 205, Be = 206, Ue = 211, Xe = 212, _e = 213, Oe = 214, We = 216, Ke = 217, Je = 221, Qe = 222, Ye = 223, Ze = 224, at = 225, et = 230, tt = 231, st = 232, rt = 233, mt = 234, it = 235, ot = 236, nt = 241, lt = 242, dt = 243, ct = 244, pt = 245, ut = 246, bt = 249, yt = 250, kt = 251, gt = 261, ft = 282, ht = 283, vt = 284, Rt = 285, It = 301, zt = 302, St = 605, xt = 303, Tt = 311, At = 312, wt = 313, Et = 314, Pt = 315, Dt = 320, qt = 321, Nt = 322, Ht = 323, Gt = 324, Ct = 325, Mt = 331, jt = 332, Ft = 333, Vt = 334, Lt = 335, $t = 336, Bt = 337, Ut = 339, Xt = 340, _t = 351, Ot = 342, Wt = 352, Kt = 353, Jt = 354, Qt = 355, Yt = 655, Zt = 356, as = 357, es = (a, e) => [f(a.skills, e), h(a.actors, e), v(a.states, e), R(a.armors, e), I(a.classes, e), z(a.enemies, e), S(a.items, e), x(a.weapons, e), T(a.commonEvents, e)], f = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), h = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), v = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), R = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), I = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), z = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), S = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), x = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), T = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), ts = 11, ss = 12, rs = 13, ms = 14, is = 21, os = 22, ns = 23, ls = 31, ds = 32, cs = 33, ps = 34, us = 35, bs = 41, ys = 42, ks = 43, gs = 44, fs = 51, hs = 52, vs = 53, Rs = 54, Is = 55, zs = 61, Ss = 62, xs = 63, Ts = 64, As = 0, ws = 1, Es = 2, Ps = 3, A = (a, e) => ({
  items: w(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), w = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], Ds = 0, qs = 1, Ns = 2, Hs = 3, Gs = 4, Cs = 5, Ms = 6, js = 7, Fs = 8, Vs = 9, E = (a) => ({
  items: P(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), P = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Ls = (a, e) => {
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
}, $s = 0, Bs = 1, Us = 2, Xs = 3, _s = 4, Os = 5, Ws = 6, Ks = 7, D = (a) => ({ items: q(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), q = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Js = (a, e) => {
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
}, Qs = 0, Ys = 1, Zs = 2, ar = 3, er = 4, tr = 5, sr = 6, rr = 7, mr = 8, ir = 9, N = (a) => ({ items: H(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), H = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], or = (a, e) => {
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
}, nr = 0, lr = 1, dr = 2, cr = 3, pr = 4, ur = 5, G = (a) => ({
  items: C(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), C = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], br = 0, yr = 1, kr = 2, gr = 3, M = (a) => ({ items: j(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), j = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], fr = (a, e) => [D(a.regularParam), E(a.extraParam), N(a.specialParam), A(a.collaps, e), M(a.specialFlag), G(a.partyAbility)], hr = 11, vr = 12, Rr = 13, Ir = 21, zr = 22, Sr = 31, xr = 32, Tr = 33, Ar = 34, wr = 41, Er = 42, Pr = 43, Dr = 44, qr = (a) => [V(a), L(a), $(a), B(a), U(a), X(a), _(a), O(a), W(a), F(a), K(a), J(a), Q(a)], r = (a, e, s) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: s
}), F = (a) => r(41, a.special), V = (a) => r(11, a.recoverHp), L = (a) => r(12, a.recoverMp), $ = (a) => r(13, a.gainTp), B = (a) => r(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), U = (a) => r(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), X = (a) => r(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), _ = (a) => r(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), O = (a) => r(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), W = (a) => r(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), K = (a) => r(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), J = (a) => r(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Q = (a) => r(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Nr = (a, e) => b(a.note, (s, m) => e(s, m, a)), Y = (a) => b(a, (e, s) => ({ key: e, value: s })), b = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(s), (m) => e(m[1], m[2]));
}, Z = (a, e = `
`) => [...a.items.map((s) => `<${s.key}:${s.value}>`), a.note].join(e).trim(), aa = (a) => ({ note: ea(a), items: Y(a) }), ea = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ta = (a, e) => `<${a}:${e}>`, Hr = (a, e, s = `
`) => {
  const m = aa(a), l = m.items.map((d) => ({ key: d.key, value: e(d) }));
  return Z({ note: m.note, items: l }, s);
}, Gr = (a, e) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, m = Array.from(a.matchAll(s)).find((l) => l[1] === e);
  return m ? m[2] : void 0;
}, Cr = (a, e, s) => {
  const m = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(m, (l, d) => d === e ? ta(d, s) : l);
}, Mr = (a) => [sa(a.elementRate), ra(a.debuffRate), ma(a.stateRate), ia(a.stateResist), oa(a.regularParam), na(a.extraParam), la(a.specialParam), da(a.attackElement), ca(a.attackState), pa(a.attackSpeed), ua(a.attackTimes), ba(a.attackSkill), ya(a.skillTypeAdd), ka(a.skillTypeSeal), ga(a.skillAdd), fa(a.skillSeal), ha(a.equipWeaponType), va(a.equipArmorType), Ra(a.equipLock), Ia(a.equipSeal), za(a.slotType), Sa(a.actionPlus), xa(a.specialFlag), Ta(a.collaps), Aa(a.partyAbility)], sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: y()
}), ra = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ma = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: c()
}), ia = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: c() }), oa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), la = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), da = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: y() }), ca = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: c()
}), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ba = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: p()
}), ya = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: k() }), ka = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: k()
}), ga = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: p() }), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: p() }), ha = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: wa()
}), va = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Ea() }), Ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: u()
}), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: u() }), za = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: u() }), Sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), xa = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ta = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), c = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), p = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), wa = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ea = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), jr = 0, Fr = 1, Vr = 0, Lr = 1, $r = (a, e = 0) => ({
  code: 101,
  indent: e,
  parameters: [(a == null ? void 0 : a.facename) ?? "", (a == null ? void 0 : a.faceIndex) ?? 0, (a == null ? void 0 : a.background) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.speakerName) ?? ""]
}), Br = (a) => ({
  facename: a[0],
  faceIndex: a[1],
  background: a[2],
  positionType: a[3],
  speakerName: a[4]
}), Ur = (a) => [a.facename, a.faceIndex, a.background, a.positionType, a.speakerName], Xr = (a, e = 0) => ({ code: 401, indent: e, parameters: [a] }), i = new g({ strict: !0 }), Pa = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 2,
    maxItems: 2,
    items: [{ type: "integer", minimum: 0 }, { type: "string" }]
  } },
  additionalProperties: !1
}), _r = (a) => Pa(a), Da = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 105 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } },
  required: ["code", "indent", "parameters"]
}), Or = (a) => Da(a), qa = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: !1 }), Wr = (a) => qa(a), Na = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: !1
}), n = (a) => Na(a), Ha = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 117 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } },
  required: ["code", "indent", "parameters"]
}), Kr = (a) => Ha(a), Ga = i.compile({ type: "object", properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{
  type: "array",
  items: { type: "string" }
}, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } }, required: ["code", "indent", "parameters"] }), Jr = (a) => Ga(a), Ca = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] }
  },
  required: ["code", "indent", "parameters"]
}), Qr = (a) => Ca(a), Ma = i.compile({
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
}), Yr = (a) => Ma(a), Zr = (a) => n(a) && a.code === 401, am = (a) => n(a) && a.code === 405, em = (a) => n(a) && a.code === 108, tm = (a) => n(a) && a.code === 408, sm = (a) => n(a) && a.code === 355, rm = (a) => n(a) && a.code === 655, o = (a, e) => ({
  name: a,
  id: e
}), ja = (a) => a.variables.map(o), Fa = (a) => a.elements.map(o), Va = (a) => a.equipTypes.map(o), La = (a) => a.skillTypes.map(o), $a = (a) => a.weaponTypes.map(o), Ba = (a) => a.armorTypes.map(o), Ua = (a) => a.switches.map(o), mm = (a, e) => [_a(a, e), Oa(a, e), Qa(a, e), Wa(a, e), Xa(a, e), Ka(a, e), Ja(a, e)], Xa = (a, e) => ({
  items: Ba(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), _a = (a, e) => ({ items: Fa(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Oa = (a, e) => ({ items: Va(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Wa = (a, e) => ({
  items: La(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Ka = (a, e) => ({ items: ja(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Ja = (a, e) => ({ items: Ua(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Qa = (a, e) => ({
  items: $a(a),
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
}), dm = (a) => Ya(a, ""), Ya = (a, e) => [a.fight ?? "Fight", a.escape ?? "Escape", a.attack ?? "Attack", a.guard ?? "Guard", a.item ?? "Item", a.skill ?? "Skill", a.equip ?? "Equip", a.status ?? "Status", a.formation ?? "Formation", a.save ?? "Save", a.gameEnd ?? "Game End", a.options ?? "Options", a.weapon ?? "Weapon", a.armor ?? "Armor", a.keyItem ?? "Key Item", a.equip2 ?? "Equip2", a.optimize ?? "Optimize", a.clear ?? "Clear", a.newGame ?? "New Game", a.continue_ ?? "Continue", e, a.toTitle ?? "To Title", a.cancel ?? "Cancel", e, a.buy ?? "Buy", a.sell ?? "Sell"], cm = (a) => ({
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
  ce as A,
  pe as B,
  le as C,
  ue as D,
  ye as E,
  ke as F,
  ge as G,
  fe as H,
  me as I,
  he as J,
  ve as K,
  be as L,
  Re as M,
  ae as N,
  Ie as O,
  ze as P,
  Se as Q,
  xe as R,
  ee as S,
  Te as T,
  Ae as U,
  we as V,
  Ee as W,
  Pe as X,
  De as Y,
  qe as Z,
  Ne as _,
  Xr as a,
  Ut as a$,
  Ge as a0,
  Ce as a1,
  Me as a2,
  je as a3,
  Fe as a4,
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
  Ht as aR,
  Gt as aS,
  Ct as aT,
  Mt as aU,
  jt as aV,
  Ft as aW,
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
  Or as b,
  Ks as b$,
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
  Ts as bA,
  A as bB,
  w as bC,
  As as bD,
  ws as bE,
  Es as bF,
  Ps as bG,
  Ds as bH,
  qs as bI,
  Ns as bJ,
  Hs as bK,
  Gs as bL,
  Cs as bM,
  Ms as bN,
  js as bO,
  Fs as bP,
  Vs as bQ,
  E as bR,
  P as bS,
  Ls as bT,
  $s as bU,
  Bs as bV,
  Us as bW,
  Xs as bX,
  _s as bY,
  Os as bZ,
  Ws as b_,
  es as ba,
  fr as bb,
  ts as bc,
  ss as bd,
  rs as be,
  ms as bf,
  is as bg,
  os as bh,
  ns as bi,
  ls as bj,
  ds as bk,
  cs as bl,
  ps as bm,
  us as bn,
  bs as bo,
  ys as bp,
  ks as bq,
  gs as br,
  fs as bs,
  hs as bt,
  vs as bu,
  Rs as bv,
  Is as bw,
  zs as bx,
  Ss as by,
  xs as bz,
  Wr as c,
  nm as c$,
  D as c0,
  q as c1,
  Js as c2,
  Qs as c3,
  Ys as c4,
  Zs as c5,
  ar as c6,
  er as c7,
  tr as c8,
  sr as c9,
  Sr as cA,
  xr as cB,
  Tr as cC,
  Ar as cD,
  wr as cE,
  Er as cF,
  Pr as cG,
  Dr as cH,
  Z as cI,
  aa as cJ,
  Y as cK,
  b as cL,
  Nr as cM,
  ta as cN,
  Hr as cO,
  Gr as cP,
  Cr as cQ,
  ja as cR,
  Fa as cS,
  Va as cT,
  La as cU,
  $a as cV,
  Ba as cW,
  Ua as cX,
  mm as cY,
  im as cZ,
  om as c_,
  rr as ca,
  mr as cb,
  ir as cc,
  N as cd,
  H as ce,
  or as cf,
  nr as cg,
  lr as ch,
  dr as ci,
  cr as cj,
  pr as ck,
  ur as cl,
  G as cm,
  C as cn,
  br as co,
  yr as cp,
  kr as cq,
  gr as cr,
  M as cs,
  j as ct,
  qr as cu,
  hr as cv,
  vr as cw,
  Rr as cx,
  Ir as cy,
  zr as cz,
  n as d,
  lm as d0,
  dm as d1,
  Ya as d2,
  cm as d3,
  pm as d4,
  jr as d5,
  Vr as d6,
  Lr as d7,
  Fr as d8,
  Kr as e,
  Br as f,
  Jr as g,
  Qr as h,
  _r as i,
  Yr as j,
  Zr as k,
  am as l,
  $r as m,
  em as n,
  tm as o,
  sm as p,
  rm as q,
  Mr as r,
  te as s,
  Ur as t,
  se as u,
  re as v,
  ie as w,
  oe as x,
  ne as y,
  de as z
};
