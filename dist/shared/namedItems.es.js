const qa = (a, e) => [d(a.skills, e), u(a.actors, e), c(a.states, e), p(a.armors, e), k(a.classes, e), b(a.enemies, e), h(a.items, e), f(a.weapons, e), y(a.commonEvents, e)], d = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), u = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), c = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), p = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), k = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), b = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), h = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), f = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), y = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Pa = 11, Ca = 12, Ha = 13, Ba = 14, Ma = 21, Na = 22, $a = 23, Fa = 31, La = 32, _a = 33, ja = 34, Ga = 35, Ja = 41, Ka = 42, Oa = 43, Qa = 44, Wa = 51, Ua = 52, Va = 53, Xa = 54, Ya = 55, Za = 61, ae = 62, ee = 63, te = 64, re = 0, se = 1, me = 2, ie = 3, R = (a, e) => ({
  items: z(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), z = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], le = 0, oe = 1, ne = 2, de = 3, ue = 4, ce = 5, pe = 6, ke = 7, be = 8, he = 9, g = (a) => ({ items: S(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), S = (a) => [{ id: 0, name: a.hitRate }, {
  id: 1,
  name: a.evasionRate
}, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, { id: 5, name: a.magicReflectionRate }, { id: 6, name: a.counterAttackRate }, {
  id: 7,
  name: a.hpRegenerationRate
}, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], fe = (a, e) => {
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
}, ye = 0, Re = 1, ze = 2, ge = 3, Se = 4, Ie = 5, ve = 6, Te = 7, I = (a) => ({
  items: v(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "params" }
}), v = (a) => [{ id: 0, name: a.maxHp }, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, {
  id: 4,
  name: a.matk
}, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], we = (a, e) => {
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
}, Ee = 0, xe = 1, De = 2, Ae = 3, qe = 4, Pe = 5, Ce = 6, He = 7, Be = 8, Me = 9, T = (a) => ({
  items: w(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), w = (a) => [{ id: 0, name: a.targetRate }, { id: 1, name: a.guardEffectRate }, {
  id: 2,
  name: a.recoveryEffectRate
}, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, { id: 6, name: a.physicalDamageRate }, { id: 7, name: a.magicDamageRate }, {
  id: 8,
  name: a.floorDamageRate
}, { id: 9, name: a.experienceRate }], Ne = (a, e) => {
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
}, $e = 0, Fe = 1, Le = 2, _e = 3, je = 4, Ge = 5, E = (a) => ({ items: x(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), x = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, { id: 3, name: a.raisePreemptive }, { id: 4, name: a.goldDouble }, {
  id: 5,
  name: a.dropItemDouble
}], Je = 0, Ke = 1, Oe = 2, Qe = 3, D = (a) => ({ items: A(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), A = (a) => [{ id: 0, name: a.autoBattle }, {
  id: 1,
  name: a.guard
}, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], We = (a, e) => [I(a.regularParam), g(a.extraParam), T(a.specialParam), R(a.collaps, e), D(a.specialFlag), E(a.partyAbility)], Ue = 11, Ve = 12, Xe = 13, Ye = 21, Ze = 22, at = 31, et = 32, tt = 33, rt = 34, st = 41, mt = 42, it = 43, lt = 44, ot = (a) => [P(a), C(a), H(a), B(a), M(a), N(a), $(a), F(a), L(a), q(a), _(a), j(a), G(a)], t = (a, e, n) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: n
}), q = (a) => t(41, a.special), P = (a) => t(11, a.recoverHp), C = (a) => t(12, a.recoverMp), H = (a) => t(13, a.gainTp), B = (a) => t(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), M = (a) => t(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), N = (a) => t(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), $ = (a) => t(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), F = (a) => t(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), L = (a) => t(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), _ = (a) => t(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), j = (a) => t(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), G = (a) => t(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), nt = (a) => [J(a.elementRate), K(a.debuffRate), O(a.stateRate), Q(a.stateResist), W(a.regularParam), U(a.extraParam), V(a.specialParam), X(a.attackElement), Y(a.attackState), Z(a.attackSpeed), aa(a.attackTimes), ea(a.attackSkill), ta(a.skillTypeAdd), ra(a.skillTypeSeal), sa(a.skillAdd), ma(a.skillSeal), ia(a.equipWeaponType), la(a.equipArmorType), oa(a.equipLock), na(a.equipSeal), da(a.slotType), ua(a.actionPlus), ca(a.specialFlag), pa(a.collaps), ka(a.partyAbility)], J = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: l()
}), K = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), O = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: s()
}), Q = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: s() }), W = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), U = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), V = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), X = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: l() }), Y = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: s()
}), Z = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), aa = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ea = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: m()
}), ta = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: o() }), ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: o()
}), sa = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: m() }), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: m() }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: ba()
}), la = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: ha() }), oa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: i()
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: i() }), da = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: i() }), ua = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), ca = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), s = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), m = () => ({ author: "rmmz", module: "data", kind: "skill" }), l = () => ({ author: "rmmz", module: "system", kind: "elements" }), o = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), ba = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), ha = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), i = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), r = (a, e) => ({
  name: a,
  id: e
}), fa = (a) => a.variables.map(r), ya = (a) => a.elements.map(r), Ra = (a) => a.equipTypes.map(r), za = (a) => a.skillTypes.map(r), ga = (a) => a.weaponTypes.map(r), Sa = (a) => a.armorTypes.map(r), Ia = (a) => a.switches.map(r), dt = (a, e) => [Ta(a, e), wa(a, e), Aa(a, e), Ea(a, e), va(a, e), xa(a, e), Da(a, e)], va = (a, e) => ({
  items: Sa(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ta = (a, e) => ({ items: ya(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), wa = (a, e) => ({ items: Ra(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Ea = (a, e) => ({
  items: za(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), xa = (a, e) => ({ items: fa(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Da = (a, e) => ({ items: Ia(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Aa = (a, e) => ({
  items: ga(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  ve as $,
  te as A,
  R as B,
  z as C,
  re as D,
  se as E,
  me as F,
  ie as G,
  le as H,
  oe as I,
  ne as J,
  de as K,
  ue as L,
  ce as M,
  pe as N,
  ke as O,
  be as P,
  he as Q,
  g as R,
  S,
  Pa as T,
  fe as U,
  ye as V,
  Re as W,
  ze as X,
  ge as Y,
  Se as Z,
  Ie as _,
  We as a,
  Te as a0,
  I as a1,
  v as a2,
  we as a3,
  Ee as a4,
  xe as a5,
  De as a6,
  Ae as a7,
  qe as a8,
  Pe as a9,
  Ze as aA,
  at as aB,
  et as aC,
  tt as aD,
  rt as aE,
  st as aF,
  mt as aG,
  it as aH,
  lt as aI,
  fa as aJ,
  ya as aK,
  Ra as aL,
  za as aM,
  ga as aN,
  Sa as aO,
  Ia as aP,
  dt as aQ,
  Ce as aa,
  He as ab,
  Be as ac,
  Me as ad,
  T as ae,
  w as af,
  Ne as ag,
  $e as ah,
  Fe as ai,
  Le as aj,
  _e as ak,
  je as al,
  Ge as am,
  E as an,
  x as ao,
  Je as ap,
  Ke as aq,
  Oe as ar,
  Qe as as,
  D as at,
  A as au,
  ot as av,
  Ue as aw,
  Ve as ax,
  Xe as ay,
  Ye as az,
  Ca as b,
  Ha as c,
  qa as d,
  Ba as e,
  Ma as f,
  Na as g,
  $a as h,
  Fa as i,
  La as j,
  _a as k,
  ja as l,
  Ga as m,
  Ja as n,
  Ka as o,
  Oa as p,
  Qa as q,
  nt as r,
  Wa as s,
  Ua as t,
  Va as u,
  Xa as v,
  Ya as w,
  Za as x,
  ae as y,
  ee as z
};
