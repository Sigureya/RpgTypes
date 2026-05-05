const Wa = 0, Ga = 1, Ja = 0, Ka = 1, Oa = (a) => a.parameters[2] === 1, Qa = (a) => a.parameters[0], n = (a, e) => `\\${a}[${e}]`, Ua = (a, e) => e.map(((t, r) => ({ text: t, controlChar: n(a, r) }))), Xa = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: n("N", e.id)
}))), Ya = (a) => a.variables.map(((e, t) => ({
  text: e || "",
  controlChar: n("V", t)
}))).filter(((e) => e.text !== "")), Za = (a, e) => [g(a.skills, e), z(a.actors, e), S(a.states, e), v(a.armors, e), I(a.classes, e), T(a.enemies, e), x(a.items, e), w(a.weapons, e), A(a.commonEvents, e)], g = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), z = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), S = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), v = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), I = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), T = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), x = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), w = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), A = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), ae = 11, ee = 12, te = 13, re = 14, se = 21, me = 22, ie = 23, oe = 31, le = 32, ne = 33, de = 34, ue = 35, ce = 41, pe = 42, ke = 43, be = 44, he = 51, fe = 52, ye = 53, Re = 54, ge = 55, ze = 61, Se = 62, ve = 63, Ie = 64, Te = 0, xe = 1, we = 2, Ae = 3, E = (a, e) => ({
  items: C(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), C = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], Ee = 0, Ce = 1, De = 2, Pe = 3, $e = 4, qe = 5, Ne = 6, He = 7, Be = 8, Me = 9, D = (a) => ({ items: P(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), P = (a) => [{ id: 0, name: a.hitRate }, {
  id: 1,
  name: a.evasionRate
}, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, { id: 5, name: a.magicReflectionRate }, {
  id: 6,
  name: a.counterAttackRate
}, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Fe = (a, e) => {
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
}, _e = 0, je = 1, Le = 2, Ve = 3, We = 4, Ge = 5, Je = 6, Ke = 7, $ = (a) => ({ items: q(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), q = (a) => [{ id: 0, name: a.maxHp }, {
  id: 1,
  name: a.maxMp
}, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Oe = (a, e) => {
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
}, Qe = 0, Ue = 1, Xe = 2, Ye = 3, Ze = 4, at = 5, et = 6, tt = 7, rt = 8, st = 9, N = (a) => ({ items: H(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), H = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, { id: 6, name: a.physicalDamageRate }, {
  id: 7,
  name: a.magicDamageRate
}, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], mt = (a, e) => {
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
}, it = 0, ot = 1, lt = 2, nt = 3, dt = 4, ut = 5, B = (a) => ({ items: M(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), M = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, { id: 3, name: a.raisePreemptive }, {
  id: 4,
  name: a.goldDouble
}, { id: 5, name: a.dropItemDouble }], ct = 0, pt = 1, kt = 2, bt = 3, F = (a) => ({ items: _(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), _ = (a) => [{
  id: 0,
  name: a.autoBattle
}, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], ht = (a, e) => [$(a.regularParam), D(a.extraParam), N(a.specialParam), E(a.collaps, e), F(a.specialFlag), B(a.partyAbility)], ft = 11, yt = 12, Rt = 13, gt = 21, zt = 22, St = 31, vt = 32, It = 33, Tt = 34, xt = 41, wt = 42, At = 43, Et = 44, Ct = (a) => [L(a), V(a), W(a), G(a), J(a), K(a), O(a), Q(a), U(a), j(a), X(a), Y(a), Z(a)], s = (a, e, t) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: t
}), j = (a) => s(41, a.special), L = (a) => s(11, a.recoverHp), V = (a) => s(12, a.recoverMp), W = (a) => s(13, a.gainTp), G = (a) => s(21, a.addState, {
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
}), X = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Y = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Z = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Dt = (a, e) => k(a.note, ((t, r) => e(t, r, a))), aa = (a) => k(a, ((e, t) => ({ key: e, value: t }))), k = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((r) => e(r[1], r[2])));
}, b = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), h = (a) => ({ note: ea(a), items: aa(a) }), ea = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ta = (a, e) => `<${a}:${e}>`, Pt = (a, e, t = `
`) => {
  const r = h(a), m = r.items.map(((i) => ({ key: i.key, value: e(i) })));
  return b({ note: r.note, items: m }, t);
}, $t = (a, e, t = `
`) => {
  const r = h(a), m = r.items.map(((i) => ((l, p) => {
    if (p.isReplaceTargetNote(l)) {
      const R = p.replaceText(l.value);
      return { key: l.key, value: R ?? l.value };
    }
    return l;
  })(i, e)));
  return b({
    note: r.note,
    items: m
  }, t);
}, qt = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return r ? r[2] : void 0;
}, Nt = (a, e, t) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(r, ((m, i) => i === e ? ta(i, t) : m));
}, Ht = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({ key: t[1], value: t[2], dataId: a.id, name: a.name })));
}, Bt = (a) => [ra(a.elementRate), sa(a.debuffRate), ma(a.stateRate), ia(a.stateResist), oa(a.regularParam), la(a.extraParam), na(a.specialParam), da(a.attackElement), ua(a.attackState), ca(a.attackSpeed), pa(a.attackTimes), ka(a.attackSkill), ba(a.skillTypeAdd), ha(a.skillTypeSeal), fa(a.skillAdd), ya(a.skillSeal), Ra(a.equipWeaponType), ga(a.equipArmorType), za(a.equipLock), Sa(a.equipSeal), va(a.slotType), Ia(a.actionPlus), Ta(a.specialFlag), xa(a.collaps), wa(a.partyAbility)], ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: f()
}), sa = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ma = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: d()
}), ia = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: d() }), oa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), la = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), na = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), da = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: f() }), ua = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: d()
}), ca = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ka = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: u()
}), ba = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: y() }), ha = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: y()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: u() }), ya = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: u() }), Ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Aa()
}), ga = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Ea() }), za = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: c()
}), Sa = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: c() }), va = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: c() }), Ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ta = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), xa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), wa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), d = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), u = () => ({ author: "rmmz", module: "data", kind: "skill" }), f = () => ({ author: "rmmz", module: "system", kind: "elements" }), y = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Aa = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ea = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), c = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), o = (a, e) => ({
  name: a,
  id: e
}), Ca = (a) => a.variables.map(o), Da = (a) => a.elements.map(o), Pa = (a) => a.equipTypes.map(o), $a = (a) => a.skillTypes.map(o), qa = (a) => a.weaponTypes.map(o), Na = (a) => a.armorTypes.map(o), Ha = (a) => a.switches.map(o), Mt = (a, e) => [Ma(a, e), Fa(a, e), Va(a, e), _a(a, e), Ba(a, e), ja(a, e), La(a, e)], Ba = (a, e) => ({
  items: Na(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ma = (a, e) => ({ items: Da(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Fa = (a, e) => ({ items: Pa(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), _a = (a, e) => ({
  items: $a(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), ja = (a, e) => ({ items: Ca(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), La = (a, e) => ({ items: Ha(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Va = (a, e) => ({
  items: qa(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  at as $,
  bt as A,
  kt as B,
  xe as C,
  ut as D,
  St as E,
  ct as F,
  it as G,
  ot as H,
  dt as I,
  nt as J,
  Le as K,
  Ve as L,
  Ke as M,
  We as N,
  _e as O,
  lt as P,
  je as Q,
  Je as R,
  Ge as S,
  st as T,
  rt as U,
  Ue as V,
  Ze as W,
  tt as X,
  et as Y,
  Ye as Z,
  Xe as _,
  we as a,
  $t as a$,
  Qe as a0,
  ze as a1,
  oe as a2,
  ue as a3,
  ne as a4,
  le as a5,
  de as a6,
  ve as a7,
  ee as a8,
  ae as a9,
  ht as aA,
  B as aB,
  $ as aC,
  F as aD,
  N as aE,
  Fe as aF,
  P as aG,
  Ua as aH,
  Na as aI,
  Da as aJ,
  Pa as aK,
  Qa as aL,
  qt as aM,
  $a as aN,
  Ha as aO,
  Ca as aP,
  qa as aQ,
  Oa as aR,
  h as aS,
  M as aT,
  aa as aU,
  k as aV,
  Ht as aW,
  Dt as aX,
  Oe as aY,
  q as aZ,
  Pt as a_,
  fe as aa,
  ye as ab,
  Re as ac,
  he as ad,
  se as ae,
  Ie as af,
  ke as ag,
  be as ah,
  ce as ai,
  pe as aj,
  ge as ak,
  ie as al,
  Se as am,
  te as an,
  re as ao,
  me as ap,
  b as aq,
  C as ar,
  Xa as as,
  n as at,
  ta as au,
  Ya as av,
  Za as aw,
  Mt as ax,
  E as ay,
  D as az,
  Ae as b,
  Ct as b0,
  Bt as b1,
  Nt as b2,
  _ as b3,
  mt as b4,
  H as b5,
  Ja as b6,
  Ka as b7,
  Wa as b8,
  Ga as b9,
  Te as c,
  vt as d,
  gt as e,
  Et as f,
  Rt as g,
  wt as h,
  At as i,
  ft as j,
  yt as k,
  It as l,
  Tt as m,
  zt as n,
  xt as o,
  Pe as p,
  Ne as q,
  De as r,
  Ce as s,
  Ee as t,
  He as u,
  $e as v,
  qe as w,
  Be as x,
  Me as y,
  pt as z
};
