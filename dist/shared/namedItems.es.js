const Wa = 0, Ga = 1, Ja = 0, Ka = 1, Oa = (a) => a.parameters[2] === 1, Qa = (a) => a.parameters[0], Ua = (a, e) => [R(a.skills, e), g(a.actors, e), z(a.states, e), S(a.armors, e), v(a.classes, e), I(a.enemies, e), T(a.items, e), w(a.weapons, e), A(a.commonEvents, e)], R = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), g = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), z = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), S = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), v = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), I = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), T = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), w = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), A = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Va = 11, Xa = 12, Ya = 13, Za = 14, ae = 21, ee = 22, te = 23, re = 31, se = 32, me = 33, ie = 34, oe = 35, le = 41, ne = 42, de = 43, ue = 44, ce = 51, pe = 52, ke = 53, be = 54, he = 55, fe = 61, ye = 62, Re = 63, ge = 64, ze = 0, Se = 1, ve = 2, Ie = 3, x = (a, e) => ({
  items: E(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), E = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], Te = 0, we = 1, Ae = 2, xe = 3, Ee = 4, De = 5, Pe = 6, qe = 7, Ce = 8, $e = 9, D = (a) => ({ items: P(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), P = (a) => [{ id: 0, name: a.hitRate }, {
  id: 1,
  name: a.evasionRate
}, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, { id: 5, name: a.magicReflectionRate }, { id: 6, name: a.counterAttackRate }, {
  id: 7,
  name: a.hpRegenerationRate
}, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], He = (a, e) => {
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
}, Ne = 0, Be = 1, Me = 2, Fe = 3, _e = 4, je = 5, Le = 6, We = 7, q = (a) => ({
  items: C(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "params" }
}), C = (a) => [{ id: 0, name: a.maxHp }, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, {
  id: 4,
  name: a.matk
}, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Ge = (a, e) => {
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
}, Je = 0, Ke = 1, Oe = 2, Qe = 3, Ue = 4, Ve = 5, Xe = 6, Ye = 7, Ze = 8, at = 9, $ = (a) => ({
  items: H(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), H = (a) => [{ id: 0, name: a.targetRate }, { id: 1, name: a.guardEffectRate }, {
  id: 2,
  name: a.recoveryEffectRate
}, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, { id: 6, name: a.physicalDamageRate }, { id: 7, name: a.magicDamageRate }, {
  id: 8,
  name: a.floorDamageRate
}, { id: 9, name: a.experienceRate }], et = (a, e) => {
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
}, tt = 0, rt = 1, st = 2, mt = 3, it = 4, ot = 5, N = (a) => ({ items: B(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), B = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, { id: 3, name: a.raisePreemptive }, { id: 4, name: a.goldDouble }, {
  id: 5,
  name: a.dropItemDouble
}], lt = 0, nt = 1, dt = 2, ut = 3, M = (a) => ({ items: F(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), F = (a) => [{ id: 0, name: a.autoBattle }, {
  id: 1,
  name: a.guard
}, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], ct = (a, e) => [q(a.regularParam), D(a.extraParam), $(a.specialParam), x(a.collaps, e), M(a.specialFlag), N(a.partyAbility)], pt = 11, kt = 12, bt = 13, ht = 21, ft = 22, yt = 31, Rt = 32, gt = 33, zt = 34, St = 41, vt = 42, It = 43, Tt = 44, wt = (a) => [j(a), L(a), W(a), G(a), J(a), K(a), O(a), Q(a), U(a), _(a), V(a), X(a), Y(a)], s = (a, e, t) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: t
}), _ = (a) => s(41, a.special), j = (a) => s(11, a.recoverHp), L = (a) => s(12, a.recoverMp), W = (a) => s(13, a.gainTp), G = (a) => s(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), J = (a) => s(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), K = (a) => s(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (a) => s(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Q = (a) => s(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), U = (a) => s(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), V = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), X = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Y = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), At = (a, e) => p(a.note, ((t, r) => e(t, r, a))), Z = (a) => p(a, ((e, t) => ({ key: e, value: t }))), p = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((r) => e(r[1], r[2])));
}, k = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), b = (a) => ({ note: aa(a), items: Z(a) }), aa = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ea = (a, e) => `<${a}:${e}>`, xt = (a, e, t = `
`) => {
  const r = b(a), m = r.items.map(((i) => ({ key: i.key, value: e(i) })));
  return k({ note: r.note, items: m }, t);
}, Et = (a, e, t = `
`) => {
  const r = b(a), m = r.items.map(((i) => ((l, c) => {
    if (c.isReplaceTargetNote(l)) {
      const y = c.replaceText(l.value);
      return { key: l.key, value: y ?? l.value };
    }
    return l;
  })(i, e)));
  return k({
    note: r.note,
    items: m
  }, t);
}, Dt = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return r ? r[2] : void 0;
}, Pt = (a, e, t) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(r, ((m, i) => i === e ? ea(i, t) : m));
}, qt = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({ key: t[1], value: t[2], dataId: a.id, name: a.name })));
}, Ct = (a) => [ta(a.elementRate), ra(a.debuffRate), sa(a.stateRate), ma(a.stateResist), ia(a.regularParam), oa(a.extraParam), la(a.specialParam), na(a.attackElement), da(a.attackState), ua(a.attackSpeed), ca(a.attackTimes), pa(a.attackSkill), ka(a.skillTypeAdd), ba(a.skillTypeSeal), ha(a.skillAdd), fa(a.skillSeal), ya(a.equipWeaponType), Ra(a.equipArmorType), ga(a.equipLock), za(a.equipSeal), Sa(a.slotType), va(a.actionPlus), Ia(a.specialFlag), Ta(a.collaps), wa(a.partyAbility)], ta = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: h()
}), ra = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: n()
}), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: n() }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), oa = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), la = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: h() }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: n()
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ca = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), pa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: d()
}), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: f() }), ba = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: f()
}), ha = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: d() }), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: d() }), ya = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Aa()
}), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: xa() }), ga = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: u()
}), za = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: u() }), Sa = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: u() }), va = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ta = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), wa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), n = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), d = () => ({ author: "rmmz", module: "data", kind: "skill" }), h = () => ({ author: "rmmz", module: "system", kind: "elements" }), f = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Aa = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), xa = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), o = (a, e) => ({
  name: a,
  id: e
}), Ea = (a) => a.variables.map(o), Da = (a) => a.elements.map(o), Pa = (a) => a.equipTypes.map(o), qa = (a) => a.skillTypes.map(o), Ca = (a) => a.weaponTypes.map(o), $a = (a) => a.armorTypes.map(o), Ha = (a) => a.switches.map(o), $t = (a, e) => [Ba(a, e), Ma(a, e), La(a, e), Fa(a, e), Na(a, e), _a(a, e), ja(a, e)], Na = (a, e) => ({
  items: $a(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ba = (a, e) => ({ items: Da(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ma = (a, e) => ({ items: Pa(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Fa = (a, e) => ({
  items: qa(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), _a = (a, e) => ({ items: Ea(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), ja = (a, e) => ({ items: Ha(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), La = (a, e) => ({
  items: Ca(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  Ve as $,
  ut as A,
  dt as B,
  Se as C,
  ot as D,
  yt as E,
  lt as F,
  tt as G,
  rt as H,
  it as I,
  mt as J,
  Me as K,
  Fe as L,
  We as M,
  _e as N,
  Ne as O,
  st as P,
  Be as Q,
  Le as R,
  je as S,
  at as T,
  Ze as U,
  Ke as V,
  Ue as W,
  Ye as X,
  Xe as Y,
  Qe as Z,
  Oe as _,
  ve as a,
  F as a$,
  Je as a0,
  fe as a1,
  re as a2,
  oe as a3,
  me as a4,
  se as a5,
  ie as a6,
  Re as a7,
  Xa as a8,
  Va as a9,
  M as aA,
  $ as aB,
  He as aC,
  P as aD,
  $a as aE,
  Da as aF,
  Pa as aG,
  Qa as aH,
  Dt as aI,
  qa as aJ,
  Ha as aK,
  Ea as aL,
  Ca as aM,
  Oa as aN,
  b as aO,
  B as aP,
  Z as aQ,
  p as aR,
  qt as aS,
  At as aT,
  Ge as aU,
  C as aV,
  xt as aW,
  Et as aX,
  wt as aY,
  Ct as aZ,
  Pt as a_,
  pe as aa,
  ke as ab,
  be as ac,
  ce as ad,
  ae,
  ge as af,
  de as ag,
  ue as ah,
  le as ai,
  ne as aj,
  he as ak,
  te as al,
  ye as am,
  Ya as an,
  Za as ao,
  ee as ap,
  k as aq,
  E as ar,
  ea as as,
  Ua as at,
  $t as au,
  x as av,
  D as aw,
  ct as ax,
  N as ay,
  q as az,
  Ie as b,
  et as b0,
  H as b1,
  Ja as b2,
  Ka as b3,
  Wa as b4,
  Ga as b5,
  ze as c,
  Rt as d,
  ht as e,
  Tt as f,
  bt as g,
  vt as h,
  It as i,
  pt as j,
  kt as k,
  gt as l,
  zt as m,
  ft as n,
  St as o,
  xe as p,
  Pe as q,
  Ae as r,
  we as s,
  Te as t,
  qe as u,
  Ee as v,
  De as w,
  Ce as x,
  $e as y,
  nt as z
};
