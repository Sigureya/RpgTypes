const a = (a2, d2) => [e(a2.skills, d2), t(a2.actors, d2), r(a2.states, d2), s(a2.armors, d2), m(a2.classes, d2), i(a2.enemies, d2), l(a2.items, d2), o(a2.weapons, d2), n(a2.commonEvents, d2)], e = (a2, e2) => ({
  label: e2.skill.title,
  items: a2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), t = (a2, e2) => ({
  items: a2,
  label: e2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), r = (a2, e2) => ({ items: a2, label: e2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), s = (a2, e2) => ({ items: a2, label: e2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), m = (a2, e2) => ({ items: a2, label: e2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), i = (a2, e2) => ({ items: a2, label: e2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), l = (a2, e2) => ({ items: a2, label: e2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), o = (a2, e2) => ({ items: a2, label: e2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), n = (a2, e2) => ({
  items: a2,
  label: e2.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), d = 11, u = 12, c = 13, p = 14, k = 21, b = 22, h = 23, f = 31, y = 32, R = 33, z = 34, g = 35, S = 41, I = 42, v = 43, T = 44, w = 51, E = 52, x = 53, D = 54, A = 55, q = 61, P = 62, C = 63, H = 64, B = 0, M = 1, F = 2, N = 3, $ = (a2, e2) => ({
  items: L(a2.options, e2),
  label: a2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), L = (a2, e2) => [{ id: 0, name: e2.normal }, { id: 1, name: a2.bossCollaps }, { id: 2, name: a2.instantCollaps }, {
  id: 3,
  name: a2.noneCollaps
}], _ = 0, j = 1, G = 2, J = 3, K = 4, O = 5, Q = 6, W = 7, U = 8, V = 9, X = (a2) => ({ items: Y(a2.options), label: a2.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), Y = (a2) => [{ id: 0, name: a2.hitRate }, {
  id: 1,
  name: a2.evasionRate
}, { id: 2, name: a2.criticalRate }, { id: 3, name: a2.criticalEvasionRate }, { id: 4, name: a2.magicEvasionRate }, { id: 5, name: a2.magicReflectionRate }, { id: 6, name: a2.counterAttackRate }, {
  id: 7,
  name: a2.hpRegenerationRate
}, { id: 8, name: a2.mpRegenerationRate }, { id: 9, name: a2.tpRegenerationRate }], Z = (a2, e2) => {
  switch (a2) {
    case 3:
      return e2.criticalEvasionRate;
    case 1:
      return e2.evasionRate;
    case 6:
      return e2.counterAttackRate;
    case 2:
      return e2.criticalRate;
    case 0:
      return e2.hitRate;
    case 7:
      return e2.hpRegenerationRate;
    case 4:
      return e2.magicEvasionRate;
    case 5:
      return e2.magicReflectionRate;
    case 8:
      return e2.mpRegenerationRate;
    case 9:
      return e2.tpRegenerationRate;
  }
  return `?xparams[${a2}]`;
}, aa = 0, ea = 1, ta = 2, ra = 3, sa = 4, ma = 5, ia = 6, la = 7, oa = (a2) => ({
  items: na(a2.options),
  label: a2.title,
  source: { author: "rmmz", module: "trait", kind: "params" }
}), na = (a2) => [{ id: 0, name: a2.maxHp }, { id: 1, name: a2.maxMp }, { id: 2, name: a2.atk }, { id: 3, name: a2.def }, {
  id: 4,
  name: a2.matk
}, { id: 5, name: a2.mdef }, { id: 6, name: a2.agi }, { id: 7, name: a2.luk }], da = (a2, e2) => {
  switch (a2) {
    case 0:
      return e2.maxHp;
    case 1:
      return e2.maxMp;
    case 2:
      return e2.atk;
    case 3:
      return e2.def;
    case 4:
      return e2.matk;
    case 5:
      return e2.mdef;
    case 6:
      return e2.agi;
    case 7:
      return e2.luk;
    default:
      return `?rparams[${a2}]`;
  }
}, ua = 0, ca = 1, pa = 2, ka = 3, ba = 4, ha = 5, fa = 6, ya = 7, Ra = 8, za = 9, ga = (a2) => ({
  items: Sa(a2.options),
  label: a2.title,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), Sa = (a2) => [{ id: 0, name: a2.targetRate }, { id: 1, name: a2.guardEffectRate }, {
  id: 2,
  name: a2.recoveryEffectRate
}, { id: 3, name: a2.pharmacology }, { id: 4, name: a2.mpCostRate }, { id: 5, name: a2.tpChargeRate }, { id: 6, name: a2.physicalDamageRate }, { id: 7, name: a2.magicDamageRate }, {
  id: 8,
  name: a2.floorDamageRate
}, { id: 9, name: a2.experienceRate }], Ia = (a2, e2) => {
  switch (a2) {
    case 9:
      return e2.experienceRate;
    case 0:
      return e2.targetRate;
    case 8:
      return e2.floorDamageRate;
    case 1:
      return e2.guardEffectRate;
    case 4:
      return e2.mpCostRate;
    case 5:
      return e2.tpChargeRate;
    case 6:
      return e2.physicalDamageRate;
    case 7:
      return e2.magicDamageRate;
    case 3:
      return e2.pharmacology;
    case 2:
      return e2.recoveryEffectRate;
  }
  return `?sparams[${a2}]`;
}, va = 0, Ta = 1, wa = 2, Ea = 3, xa = 4, Da = 5, Aa = (a2) => ({ items: qa(a2.options), label: a2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), qa = (a2) => [{ id: 0, name: a2.encounterHalf }, { id: 1, name: a2.encounterNone }, { id: 2, name: a2.cancelSurprise }, { id: 3, name: a2.raisePreemptive }, { id: 4, name: a2.goldDouble }, {
  id: 5,
  name: a2.dropItemDouble
}], Pa = 0, Ca = 1, Ha = 2, Ba = 3, Ma = (a2) => ({ items: Fa(a2.options), label: a2.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), Fa = (a2) => [{ id: 0, name: a2.autoBattle }, {
  id: 1,
  name: a2.guard
}, { id: 2, name: a2.substitute }, {
  id: 3,
  name: a2.preventEscape
}], Na = (a2, e2) => [oa(a2.regularParam), X(a2.extraParam), ga(a2.specialParam), $(a2.collaps, e2), Ma(a2.specialFlag), Aa(a2.partyAbility)], $a = 11, La = 12, _a = 13, ja = 21, Ga = 22, Ja = 31, Ka = 32, Oa = 33, Qa = 34, Wa = 41, Ua = 42, Va = 43, Xa = 44, Ya = (a2) => [ee(a2), te(a2), re(a2), se(a2), me(a2), ie(a2), le(a2), oe(a2), ne(a2), ae(a2), de(a2), ue(a2), ce(a2)], Za = (a2, e2, t2) => ({
  kindId: a2,
  label: e2.domainName,
  pattern: e2.format,
  description: e2.desc,
  dataSource: t2
}), ae = (a2) => Za(41, a2.special), ee = (a2) => Za(11, a2.recoverHp), te = (a2) => Za(12, a2.recoverMp), re = (a2) => Za(13, a2.gainTp), se = (a2) => Za(21, a2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), me = (a2) => Za(22, a2.removeState, { author: "rmmz", module: "data", kind: "state" }), ie = (a2) => Za(31, a2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), le = (a2) => Za(32, a2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), oe = (a2) => Za(33, a2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), ne = (a2) => Za(34, a2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), de = (a2) => Za(42, a2.grow, { author: "rmmz", module: "trait", kind: "params" }), ue = (a2) => Za(43, a2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), ce = (a2) => Za(44, a2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), pe = (a2) => [ke(a2.elementRate), be(a2.debuffRate), he(a2.stateRate), fe(a2.stateResist), ye(a2.regularParam), Re(a2.extraParam), ze(a2.specialParam), ge(a2.attackElement), Se(a2.attackState), Ie(a2.attackSpeed), ve(a2.attackTimes), Te(a2.attackSkill), we(a2.skillTypeAdd), Ee(a2.skillTypeSeal), xe(a2.skillAdd), De(a2.skillSeal), Ae(a2.equipWeaponType), qe(a2.equipArmorType), Pe(a2.equipLock), Ce(a2.equipSeal), He(a2.slotType), Be(a2.actionPlus), Me(a2.specialFlag), Fe(a2.collaps), Ne(a2.partyAbility)], ke = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 11,
  dataSource: _e()
}), be = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), he = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 13,
  dataSource: $e()
}), fe = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 14, dataSource: $e() }), ye = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Re = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ze = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ge = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 31, dataSource: _e() }), Se = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 32,
  dataSource: $e()
}), Ie = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 33 }), ve = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 34 }), Te = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 35,
  dataSource: Le()
}), we = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 41, dataSource: je() }), Ee = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 42,
  dataSource: je()
}), xe = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 43, dataSource: Le() }), De = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 44, dataSource: Le() }), Ae = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 51,
  dataSource: Ge()
}), qe = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 52, dataSource: Je() }), Pe = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 53,
  dataSource: Ke()
}), Ce = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 54, dataSource: Ke() }), He = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 55, dataSource: Ke() }), Be = (a2) => ({
  pattern: a2.format,
  label: a2.title,
  kindId: 61
}), Me = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Fe = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ne = (a2) => ({ pattern: a2.format, label: a2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), $e = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), Le = () => ({ author: "rmmz", module: "data", kind: "skill" }), _e = () => ({ author: "rmmz", module: "system", kind: "elements" }), je = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ge = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Je = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Ke = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Oe = (a2, e2) => ({
  name: a2,
  id: e2
}), Qe = (a2) => a2.variables.map(Oe), We = (a2) => a2.elements.map(Oe), Ue = (a2) => a2.equipTypes.map(Oe), Ve = (a2) => a2.skillTypes.map(Oe), Xe = (a2) => a2.weaponTypes.map(Oe), Ye = (a2) => a2.armorTypes.map(Oe), Ze = (a2) => a2.switches.map(Oe), at = (a2, e2) => [tt(a2, e2), rt(a2, e2), lt(a2, e2), st(a2, e2), et(a2, e2), mt(a2, e2), it(a2, e2)], et = (a2, e2) => ({
  items: Ye(a2),
  label: e2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), tt = (a2, e2) => ({ items: We(a2), label: e2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), rt = (a2, e2) => ({ items: Ue(a2), label: e2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), st = (a2, e2) => ({
  items: Ve(a2),
  label: e2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), mt = (a2, e2) => ({ items: Qe(a2), label: e2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), it = (a2, e2) => ({ items: Ze(a2), label: e2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), lt = (a2, e2) => ({
  items: Xe(a2),
  label: e2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  ia as $,
  H as A,
  $ as B,
  L as C,
  B as D,
  M as E,
  F,
  N as G,
  _ as H,
  j as I,
  G as J,
  J as K,
  K as L,
  O as M,
  Q as N,
  W as O,
  U as P,
  V as Q,
  X as R,
  Y as S,
  d as T,
  Z as U,
  aa as V,
  ea as W,
  ta as X,
  ra as Y,
  sa as Z,
  ma as _,
  Na as a,
  la as a0,
  oa as a1,
  na as a2,
  da as a3,
  ua as a4,
  ca as a5,
  pa as a6,
  ka as a7,
  ba as a8,
  ha as a9,
  Ga as aA,
  Ja as aB,
  Ka as aC,
  Oa as aD,
  Qa as aE,
  Wa as aF,
  Ua as aG,
  Va as aH,
  Xa as aI,
  Qe as aJ,
  We as aK,
  Ue as aL,
  Ve as aM,
  Xe as aN,
  Ye as aO,
  Ze as aP,
  at as aQ,
  fa as aa,
  ya as ab,
  Ra as ac,
  za as ad,
  ga as ae,
  Sa as af,
  Ia as ag,
  va as ah,
  Ta as ai,
  wa as aj,
  Ea as ak,
  xa as al,
  Da as am,
  Aa as an,
  qa as ao,
  Pa as ap,
  Ca as aq,
  Ha as ar,
  Ba as as,
  Ma as at,
  Fa as au,
  Ya as av,
  $a as aw,
  La as ax,
  _a as ay,
  ja as az,
  u as b,
  c,
  a as d,
  p as e,
  k as f,
  b as g,
  h,
  f as i,
  y as j,
  R as k,
  z as l,
  g as m,
  S as n,
  I as o,
  v as p,
  T as q,
  pe as r,
  w as s,
  E as t,
  x as u,
  D as v,
  A as w,
  q as x,
  P as y,
  C as z
};
//# sourceMappingURL=namedItems.es.js.map
