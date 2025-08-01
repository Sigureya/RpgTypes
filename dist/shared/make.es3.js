import f from "ajv";
const Qa = 0, Ya = 101, Za = 401, ae = 102, ee = 402, te = 103, se = 104, re = 105, me = 405, ie = 108, oe = 408, ne = 109, le = 111, de = 411, ce = 112, pe = 113, ue = 115, be = 117, ye = 118, ke = 119, ge = 121, fe = 122, he = 123, ve = 124, Re = 125, Ie = 126, ze = 127, Se = 128, xe = 129, Te = 132, we = 133, Ae = 134, Ee = 135, Pe = 136, De = 137, qe = 138, Ne = 139, He = 140, Ge = 201, Ce = 202, Me = 203, je = 204, Fe = 205, Ve = 206, Le = 211, Be = 212, Ue = 213, Xe = 214, $e = 216, _e = 217, Oe = 221, We = 222, Ke = 223, Je = 224, Qe = 225, Ye = 230, Ze = 231, at = 232, et = 233, tt = 234, st = 235, rt = 236, mt = 241, it = 242, ot = 243, nt = 244, lt = 245, dt = 246, ct = 249, pt = 250, ut = 251, bt = 261, yt = 282, kt = 283, gt = 284, ft = 285, ht = 301, vt = 302, Rt = 605, It = 303, zt = 311, St = 312, xt = 313, Tt = 314, wt = 315, At = 320, Et = 321, Pt = 322, Dt = 323, qt = 324, Nt = 325, Ht = 331, Gt = 332, Ct = 333, Mt = 334, jt = 335, Ft = 336, Vt = 337, Lt = 339, Bt = 340, Ut = 351, Xt = 342, $t = 352, _t = 353, Ot = 354, Wt = 355, Kt = 655, Jt = 356, Qt = 357, Yt = (a, e) => [h(a.skills, e), v(a.actors, e), R(a.states, e), I(a.armors, e), z(a.classes, e), S(a.enemies, e), x(a.items, e), T(a.weapons, e), w(a.commonEvents, e)], h = (a, e) => ({
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
} }), w = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Zt = 11, as = 12, es = 13, ts = 14, ss = 21, rs = 22, ms = 23, is = 31, os = 32, ns = 33, ls = 34, ds = 35, cs = 41, ps = 42, us = 43, bs = 44, ys = 51, ks = 52, gs = 53, fs = 54, hs = 55, vs = 61, Rs = 62, Is = 63, zs = 64, Ss = 0, xs = 1, Ts = 2, ws = 3, A = (a, e) => ({
  items: E(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), E = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], As = 0, Es = 1, Ps = 2, Ds = 3, qs = 4, Ns = 5, Hs = 6, Gs = 7, Cs = 8, Ms = 9, P = (a) => ({
  items: D(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), D = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], js = (a, e) => {
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
}, Fs = 0, Vs = 1, Ls = 2, Bs = 3, Us = 4, Xs = 5, $s = 6, _s = 7, q = (a) => ({ items: N(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), N = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Os = (a, e) => {
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
}, Ws = 0, Ks = 1, Js = 2, Qs = 3, Ys = 4, Zs = 5, ar = 6, er = 7, tr = 8, sr = 9, H = (a) => ({ items: G(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), G = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], rr = (a, e) => {
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
}, mr = 0, ir = 1, or = 2, nr = 3, lr = 4, dr = 5, C = (a) => ({
  items: M(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), M = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], cr = 0, pr = 1, ur = 2, br = 3, j = (a) => ({ items: F(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), F = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], yr = (a, e) => [q(a.regularParam), P(a.extraParam), H(a.specialParam), A(a.collaps, e), j(a.specialFlag), C(a.partyAbility)], kr = 11, gr = 12, fr = 13, hr = 21, vr = 22, Rr = 31, Ir = 32, zr = 33, Sr = 34, xr = 41, Tr = 42, wr = 43, Ar = 44, Er = (a) => [L(a), B(a), U(a), X(a), $(a), _(a), O(a), W(a), K(a), V(a), J(a), Q(a), Y(a)], s = (a, e, r) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: r
}), V = (a) => s(41, a.special), L = (a) => s(11, a.recoverHp), B = (a) => s(12, a.recoverMp), U = (a) => s(13, a.gainTp), X = (a) => s(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), $ = (a) => s(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), _ = (a) => s(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (a) => s(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), W = (a) => s(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), K = (a) => s(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), J = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Q = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Y = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), b = (a, e) => `<${a}:${e}>`, Pr = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Dr = (a, e) => y(a.note, (r, m) => e(r, m, a)), qr = (a) => y(a, (e, r) => ({
  key: e,
  value: r
})), y = (a, e) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(r), (m) => e(m[1], m[2]));
}, Nr = (a, e) => {
  if (a.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (r, m, l) => {
    const d = e(m, l);
    if (d.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return b(m, d);
  });
}, Hr = (a, e) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g, m = Array.from(a.matchAll(r)).find((l) => l[1] === e);
  return m ? m[2] : void 0;
}, Gr = (a, e, r) => {
  const m = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(m, (l, d) => d === e ? b(d, r) : l);
}, Cr = (a) => [Z(a.elementRate), aa(a.debuffRate), ea(a.stateRate), ta(a.stateResist), sa(a.regularParam), ra(a.extraParam), ma(a.specialParam), ia(a.attackElement), oa(a.attackState), na(a.attackSpeed), la(a.attackTimes), da(a.attackSkill), ca(a.skillTypeAdd), pa(a.skillTypeSeal), ua(a.skillAdd), ba(a.skillSeal), ya(a.equipWeaponType), ka(a.equipArmorType), ga(a.equipLock), fa(a.equipSeal), ha(a.slotType), va(a.actionPlus), Ra(a.specialFlag), Ia(a.collaps), za(a.partyAbility)], Z = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: k()
}), aa = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ea = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: c()
}), ta = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: c() }), sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), ra = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ma = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ia = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: k() }), oa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: c()
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), la = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: p()
}), ca = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: g() }), pa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: g()
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: p() }), ba = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: p() }), ya = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Sa()
}), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: xa() }), ga = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: u()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: u() }), ha = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: u() }), va = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), za = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), c = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), p = () => ({ author: "rmmz", module: "data", kind: "skill" }), k = () => ({ author: "rmmz", module: "system", kind: "elements" }), g = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Sa = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), xa = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), i = new f({ strict: !0 }), Ta = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  code: { type: "integer", enum: [320, 324, 325] },
  indent: { type: "integer" },
  parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] }
}, additionalProperties: !1 }), Mr = (a) => Ta(a), wa = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] }
  },
  required: ["code", "indent", "parameters"]
}), jr = (a) => wa(a), Aa = i.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
  },
  additionalProperties: !1
}), Fr = (a) => Aa(a), Ea = i.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "string" }] } }, additionalProperties: !1 }), n = (a) => Ea(a), Pa = i.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] }
  },
  required: ["code", "indent", "parameters"]
}), Vr = (a) => Pa(a), Da = i.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 5,
    maxItems: 5,
    items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }]
  } },
  required: ["code", "indent", "parameters"]
}), Lr = (a) => Da(a), qa = i.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "integer" }, { type: "string" }]
} }, required: ["code", "indent", "parameters"] }), Br = (a) => qa(a), Na = i.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 103
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), Ur = (a) => Na(a), Ha = i.compile({
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
}), Xr = (a) => Ha(a), $r = (a) => n(a) && a.code === 401, _r = (a) => n(a) && a.code === 405, Or = (a) => n(a) && a.code === 108, Wr = (a) => n(a) && a.code === 408, Kr = (a) => n(a) && a.code === 355, Jr = (a) => n(a) && a.code === 655, o = (a, e) => ({
  name: a,
  id: e
}), Ga = (a) => a.variables.map(o), Ca = (a) => a.elements.map(o), Ma = (a) => a.equipTypes.map(o), ja = (a) => a.skillTypes.map(o), Fa = (a) => a.weaponTypes.map(o), Va = (a) => a.armorTypes.map(o), La = (a) => a.switches.map(o), Qr = (a, e) => [Ua(a, e), Xa(a, e), Wa(a, e), $a(a, e), Ba(a, e), _a(a, e), Oa(a, e)], Ba = (a, e) => ({
  items: Va(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ua = (a, e) => ({ items: Ca(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Xa = (a, e) => ({ items: Ma(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), $a = (a, e) => ({
  items: ja(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), _a = (a, e) => ({ items: Ga(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Oa = (a, e) => ({ items: La(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Wa = (a, e) => ({
  items: Fa(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Yr = (a) => [a.mhp ?? "", a.mmp ?? "", a.atk ?? "", a.def ?? "", a.mat ?? "", a.mdf ?? "", a.agi ?? "", a.luk ?? "", a.hit ?? "", a.eva ?? ""], Zr = (a) => ({
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
}), am = (a) => [a.level ?? "Level", a.levelA ?? "Level", a.hp ?? "HP", a.hpA ?? "HP", a.mp ?? "MP", a.mpA ?? "MP", a.tp ?? "TP", a.tpA ?? "TP", a.experience ?? "EXP", a.exp ?? "EXP"], em = (a) => ({
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
}), tm = (a) => Ka(a, ""), Ka = (a, e) => [a.fight ?? "Fight", a.escape ?? "Escape", a.attack ?? "Attack", a.guard ?? "Guard", a.item ?? "Item", a.skill ?? "Skill", a.equip ?? "Equip", a.status ?? "Status", a.formation ?? "Formation", a.save ?? "Save", a.gameEnd ?? "Game End", a.options ?? "Options", a.weapon ?? "Weapon", a.armor ?? "Armor", a.keyItem ?? "Key Item", a.equip2 ?? "Equip2", a.optimize ?? "Optimize", a.clear ?? "Clear", a.newGame ?? "New Game", a.continue_ ?? "Continue", e, a.toTitle ?? "To Title", a.cancel ?? "Cancel", e, a.buy ?? "Buy", a.sell ?? "Sell"], sm = (a) => ({
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
}), t = (a, e) => typeof a == "string" ? a : e, rm = (a) => ({
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
  pe as A,
  be as B,
  ie as C,
  ye as D,
  ue as E,
  ke as F,
  ge as G,
  fe as H,
  te as I,
  he as J,
  ve as K,
  ce as L,
  Re as M,
  Qa as N,
  Ie as O,
  ze as P,
  Se as Q,
  xe as R,
  Ya as S,
  Te as T,
  we as U,
  Ae as V,
  Ee as W,
  Pe as X,
  De as Y,
  qe as Z,
  Ne as _,
  jr as a,
  Xt as a$,
  Ge as a0,
  Ce as a1,
  Me as a2,
  je as a3,
  Fe as a4,
  Ve as a5,
  Le as a6,
  Be as a7,
  Ue as a8,
  Xe as a9,
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
  wt as aK,
  At as aL,
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
  Bt as aZ,
  Ut as a_,
  $e as aa,
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
  Fr as b,
  Os as b$,
  $t as b0,
  _t as b1,
  Ot as b2,
  Wt as b3,
  Kt as b4,
  Jt as b5,
  Qt as b6,
  Yt as b7,
  yr as b8,
  Zt as b9,
  Ss as bA,
  xs as bB,
  Ts as bC,
  ws as bD,
  As as bE,
  Es as bF,
  Ps as bG,
  Ds as bH,
  qs as bI,
  Ns as bJ,
  Hs as bK,
  Gs as bL,
  Cs as bM,
  Ms as bN,
  P as bO,
  D as bP,
  js as bQ,
  Fs as bR,
  Vs as bS,
  Ls as bT,
  Bs as bU,
  Us as bV,
  Xs as bW,
  $s as bX,
  _s as bY,
  q as bZ,
  N as b_,
  as as ba,
  es as bb,
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
  A as by,
  E as bz,
  n as c,
  sm as c$,
  Ws as c0,
  Ks as c1,
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
  wr as cD,
  Ar as cE,
  b as cF,
  Pr as cG,
  Dr as cH,
  qr as cI,
  y as cJ,
  Nr as cK,
  Hr as cL,
  Gr as cM,
  Ga as cN,
  Ca as cO,
  Ma as cP,
  ja as cQ,
  Fa as cR,
  Va as cS,
  La as cT,
  Qr as cU,
  Yr as cV,
  Zr as cW,
  am as cX,
  em as cY,
  tm as cZ,
  Ka as c_,
  H as ca,
  G as cb,
  rr as cc,
  mr as cd,
  ir as ce,
  or as cf,
  nr as cg,
  lr as ch,
  dr as ci,
  C as cj,
  M as ck,
  cr as cl,
  pr as cm,
  ur as cn,
  br as co,
  j as cp,
  F as cq,
  Er as cr,
  kr as cs,
  gr as ct,
  fr as cu,
  hr as cv,
  vr as cw,
  Rr as cx,
  Ir as cy,
  zr as cz,
  Vr as d,
  rm as d0,
  Lr as e,
  Br as f,
  Ur as g,
  Xr as h,
  Mr as i,
  $r as j,
  _r as k,
  Or as l,
  Wr as m,
  Kr as n,
  Jr as o,
  Za as p,
  ae as q,
  Cr as r,
  ee as s,
  se as t,
  re as u,
  me as v,
  oe as w,
  ne as x,
  le as y,
  de as z
};
