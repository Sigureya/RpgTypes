import { aO as R, aP as g } from "./eventCommandCodes.es.js";
const Ja = 0, Ka = 1, Qa = 0, Ua = 1, Va = (a) => a.parameters[2] === 1, Xa = (a) => a.parameters[0], Ya = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [a?.facename ?? "", a?.faceIndex ?? 0, a?.background ?? 0, a?.positionType ?? 2, a?.speakerName ?? ""]
}), Za = (a) => ({
  facename: a[0],
  faceIndex: a[1],
  background: a[2],
  positionType: a[3],
  speakerName: a[4] ?? ""
}), ae = (a) => [a.facename, a.faceIndex, a.background, a.positionType, a.speakerName], ee = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a]
}), te = (a, e) => [z(a.skills, e), S(a.actors, e), v(a.states, e), I(a.armors, e), T(a.classes, e), x(a.enemies, e), w(a.items, e), A(a.weapons, e), E(a.commonEvents, e)], z = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), S = (a, e) => ({ items: a, label: e.actor.title, source: { author: "rmmz", module: "data", kind: "actor" } }), v = (a, e) => ({
  items: a,
  label: e.state.title,
  source: { author: "rmmz", module: "data", kind: "state" }
}), I = (a, e) => ({ items: a, label: e.armor.title, source: { author: "rmmz", kind: "armor", module: "data" } }), T = (a, e) => ({
  items: a,
  label: e.class.title,
  source: { author: "rmmz", module: "data", kind: "class" }
}), x = (a, e) => ({
  items: a,
  label: e.enemy.title,
  source: { author: "rmmz", module: "data", kind: "enemy" }
}), w = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), A = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), E = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), re = 11, se = 12, me = 13, ie = 14, oe = 21, le = 22, ne = 23, de = 31, ue = 32, ce = 33, pe = 34, ke = 35, be = 41, fe = 42, he = 43, ye = 44, Re = 51, ge = 52, ze = 53, Se = 54, ve = 55, Ie = 61, Te = 62, xe = 63, we = 64, Ae = 0, Ee = 1, De = 2, Pe = 3, D = (a, e) => ({
  items: P(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), P = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], qe = 0, Ce = 1, Ne = 2, $e = 3, He = 4, Be = 5, Me = 6, Fe = 7, _e = 8, je = 9, q = (a) => ({ items: C(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), C = (a) => [{ id: 0, name: a.hitRate }, {
  id: 1,
  name: a.evasionRate
}, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, { id: 5, name: a.magicReflectionRate }, {
  id: 6,
  name: a.counterAttackRate
}, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Le = (a, e) => {
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
}, Oe = 0, We = 1, Ge = 2, Je = 3, Ke = 4, Qe = 5, Ue = 6, Ve = 7, N = (a) => ({ items: $(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), $ = (a) => [{ id: 0, name: a.maxHp }, {
  id: 1,
  name: a.maxMp
}, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Xe = (a, e) => {
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
}, Ye = 0, Ze = 1, at = 2, et = 3, tt = 4, rt = 5, st = 6, mt = 7, it = 8, ot = 9, H = (a) => ({ items: B(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), B = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, { id: 6, name: a.physicalDamageRate }, {
  id: 7,
  name: a.magicDamageRate
}, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], lt = (a, e) => {
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
}, nt = 0, dt = 1, ut = 2, ct = 3, pt = 4, kt = 5, M = (a) => ({ items: F(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), F = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, { id: 3, name: a.raisePreemptive }, {
  id: 4,
  name: a.goldDouble
}, { id: 5, name: a.dropItemDouble }], bt = 0, ft = 1, ht = 2, yt = 3, _ = (a) => ({ items: j(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), j = (a) => [{
  id: 0,
  name: a.autoBattle
}, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], Rt = (a, e) => [N(a.regularParam), q(a.extraParam), H(a.specialParam), D(a.collaps, e), _(a.specialFlag), M(a.partyAbility)], gt = 11, zt = 12, St = 13, vt = 21, It = 22, Tt = 31, xt = 32, wt = 33, At = 34, Et = 41, Dt = 42, Pt = 43, qt = 44, Ct = (a) => [O(a), W(a), G(a), J(a), K(a), Q(a), U(a), V(a), X(a), L(a), Y(a), Z(a), aa(a)], s = (a, e, t) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: t
}), L = (a) => s(41, a.special), O = (a) => s(11, a.recoverHp), W = (a) => s(12, a.recoverMp), G = (a) => s(13, a.gainTp), J = (a) => s(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), K = (a) => s(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), Q = (a) => s(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), U = (a) => s(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), V = (a) => s(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), X = (a) => s(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Y = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Z = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), aa = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Nt = (a, e) => p(a.note, ((t, r) => e(t, r, a))), ea = (a) => p(a, ((e, t) => ({ key: e, value: t }))), p = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((r) => e(r[1], r[2])));
}, k = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), b = (a) => ({ note: ta(a), items: ea(a) }), ta = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ra = (a, e) => `<${a}:${e}>`, $t = (a, e, t = `
`) => {
  const r = b(a), m = r.items.map(((i) => ({ key: i.key, value: e(i) })));
  return k({ note: r.note, items: m }, t);
}, Ht = (a, e, t = `
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
}, Bt = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return r ? r[2] : void 0;
}, Mt = (a, e, t) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(r, ((m, i) => i === e ? ra(i, t) : m));
}, Ft = (a) => [sa(a.elementRate), ma(a.debuffRate), ia(a.stateRate), oa(a.stateResist), la(a.regularParam), na(a.extraParam), da(a.specialParam), ua(a.attackElement), ca(a.attackState), pa(a.attackSpeed), ka(a.attackTimes), ba(a.attackSkill), fa(a.skillTypeAdd), ha(a.skillTypeSeal), ya(a.skillAdd), Ra(a.skillSeal), ga(a.equipWeaponType), za(a.equipArmorType), Sa(a.equipLock), va(a.equipSeal), Ia(a.slotType), Ta(a.actionPlus), xa(a.specialFlag), wa(a.collaps), Aa(a.partyAbility)], sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: f()
}), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: n()
}), oa = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: n() }), la = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: f() }), ca = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: n()
}), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ba = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: d()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: h() }), ha = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: h()
}), ya = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: d() }), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: d() }), ga = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Ea()
}), za = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Da() }), Sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: u()
}), va = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: u() }), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: u() }), Ta = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), xa = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), wa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), n = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), d = () => ({ author: "rmmz", module: "data", kind: "skill" }), f = () => ({ author: "rmmz", module: "system", kind: "elements" }), h = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ea = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Da = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), o = (a, e) => ({
  name: a,
  id: e
}), Pa = (a) => a.variables.map(o), qa = (a) => a.elements.map(o), Ca = (a) => a.equipTypes.map(o), Na = (a) => a.skillTypes.map(o), $a = (a) => a.weaponTypes.map(o), Ha = (a) => a.armorTypes.map(o), Ba = (a) => a.switches.map(o), _t = (a, e) => [Fa(a, e), _a(a, e), Wa(a, e), ja(a, e), Ma(a, e), La(a, e), Oa(a, e)], Ma = (a, e) => ({
  items: Ha(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Fa = (a, e) => ({ items: qa(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), _a = (a, e) => ({ items: Ca(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), ja = (a, e) => ({
  items: Na(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), La = (a, e) => ({ items: Pa(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Oa = (a, e) => ({ items: Ba(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Wa = (a, e) => ({
  items: $a(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  rt as $,
  yt as A,
  ht as B,
  Ee as C,
  kt as D,
  Tt as E,
  bt as F,
  nt as G,
  dt as H,
  pt as I,
  ct as J,
  Ge as K,
  Je as L,
  Ve as M,
  Ke as N,
  Oe as O,
  ut as P,
  We as Q,
  Ue as R,
  Qe as S,
  ot as T,
  it as U,
  Ze as V,
  tt as W,
  mt as X,
  st as Y,
  et as Z,
  at as _,
  De as a,
  Ft as a$,
  Ye as a0,
  Ie as a1,
  de as a2,
  ke as a3,
  ce as a4,
  ue as a5,
  pe as a6,
  xe as a7,
  se as a8,
  re as a9,
  _ as aA,
  H as aB,
  Le as aC,
  C as aD,
  Za as aE,
  Ha as aF,
  qa as aG,
  Ca as aH,
  Xa as aI,
  Bt as aJ,
  Na as aK,
  Ba as aL,
  Pa as aM,
  $a as aN,
  Va as aO,
  Ya as aP,
  ee as aQ,
  b as aR,
  F as aS,
  ea as aT,
  p as aU,
  Nt as aV,
  Xe as aW,
  $ as aX,
  $t as aY,
  Ht as aZ,
  Ct as a_,
  ge as aa,
  ze as ab,
  Se as ac,
  Re as ad,
  oe as ae,
  we as af,
  he as ag,
  ye as ah,
  be as ai,
  fe as aj,
  ve as ak,
  ne as al,
  Te as am,
  me as an,
  ie as ao,
  le as ap,
  k as aq,
  P as ar,
  ra as as,
  te as at,
  _t as au,
  D as av,
  q as aw,
  Rt as ax,
  M as ay,
  N as az,
  Pe as b,
  Mt as b0,
  j as b1,
  lt as b2,
  B as b3,
  ae as b4,
  Qa as b5,
  Ua as b6,
  Ja as b7,
  Ka as b8,
  Ae as c,
  xt as d,
  vt as e,
  qt as f,
  St as g,
  Dt as h,
  Pt as i,
  gt as j,
  zt as k,
  wt as l,
  At as m,
  It as n,
  Et as o,
  $e as p,
  Me as q,
  Ne as r,
  Ce as s,
  qe as t,
  Fe as u,
  He as v,
  Be as w,
  _e as x,
  je as y,
  ft as z
};
