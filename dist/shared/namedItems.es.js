const Oa = 0, Qa = 1, Ua = 0, Xa = 1, Ya = (a) => a.parameters[2] === 1, Za = (a) => a.parameters[0], d = (a, e) => `\\${a}[${e}]`, ae = (a, e) => e.map(((t, r) => ({ text: t, controlChar: d(a, r) }))), ee = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: d("N", e.id)
}))), te = (a) => a.variables.map(((e, t) => ({
  text: e || "",
  controlChar: d("V", t)
}))).filter(((e) => e.text !== "")), re = (a, e) => [z(a.skills, e), S(a.actors, e), $(a.states, e), v(a.armors, e), T(a.classes, e), I(a.enemies, e), A(a.items, e), x(a.weapons, e), w(a.commonEvents, e)], z = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), S = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), $ = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), v = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), T = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), I = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), A = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), x = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), w = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), se = 11, me = 12, ie = 13, oe = 14, le = 21, ne = 22, de = 23, ue = 31, ce = 32, pe = 33, ke = 34, be = 35, he = 41, fe = 42, ye = 43, ge = 44, Re = 51, ze = 52, Se = 53, $e = 54, ve = 55, Te = 61, Ie = 62, Ae = 63, xe = 64, we = 0, Ee = 1, Ce = 2, Pe = 3, E = (a, e) => ({
  items: C(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), C = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], De = 0, qe = 1, Me = 2, Ne = 3, He = 4, Be = 5, Fe = 6, Ve = 7, We = 8, _e = 9, P = (a) => ({ items: D(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), D = (a) => [{ id: 0, name: a.hitRate }, {
  id: 1,
  name: a.evasionRate
}, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, { id: 5, name: a.magicReflectionRate }, {
  id: 6,
  name: a.counterAttackRate
}, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], je = (a, e) => {
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
}, Le = 0, Ge = 1, Je = 2, Ke = 3, Oe = 4, Qe = 5, Ue = 6, Xe = 7, q = (a) => ({ items: M(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), M = (a) => [{ id: 0, name: a.maxHp }, {
  id: 1,
  name: a.maxMp
}, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Ye = (a, e) => {
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
}, Ze = 0, at = 1, et = 2, tt = 3, rt = 4, st = 5, mt = 6, it = 7, ot = 8, lt = 9, N = (a) => ({ items: H(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), H = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, { id: 6, name: a.physicalDamageRate }, {
  id: 7,
  name: a.magicDamageRate
}, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], nt = (a, e) => {
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
}, dt = 0, ut = 1, ct = 2, pt = 3, kt = 4, bt = 5, B = (a) => ({ items: F(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), F = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, { id: 3, name: a.raisePreemptive }, {
  id: 4,
  name: a.goldDouble
}, { id: 5, name: a.dropItemDouble }], ht = 0, ft = 1, yt = 2, gt = 3, V = (a) => ({ items: W(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), W = (a) => [{
  id: 0,
  name: a.autoBattle
}, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], Rt = (a, e) => [q(a.regularParam), P(a.extraParam), N(a.specialParam), E(a.collaps, e), V(a.specialFlag), B(a.partyAbility)], zt = 11, St = 12, $t = 13, vt = 21, Tt = 22, It = 31, At = 32, xt = 33, wt = 34, Et = 41, Ct = 42, Pt = 43, Dt = 44, qt = (a) => [j(a), L(a), G(a), J(a), K(a), O(a), Q(a), U(a), X(a), _(a), Y(a), Z(a), aa(a)], s = (a, e, t) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: t
}), _ = (a) => s(41, a.special), j = (a) => s(11, a.recoverHp), L = (a) => s(12, a.recoverMp), G = (a) => s(13, a.gainTp), J = (a) => s(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), K = (a) => s(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), O = (a) => s(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Q = (a) => s(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), U = (a) => s(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), X = (a) => s(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Y = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), Z = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), aa = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Mt = (a, e) => b(a.note, ((t, r) => e(t, r, a))), ea = (a) => b(a, ((e, t) => ({ key: e, value: t }))), b = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((r) => e(r[1], r[2])));
}, h = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), f = (a) => ({ note: ta(a), items: ea(a) }), ta = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ra = (a, e) => `<${a}:${e}>`, Nt = (a, e, t = `
`) => {
  const r = f(a), m = r.items.map(((i) => ({ key: i.key, value: e(i) })));
  return h({ note: r.note, items: m }, t);
}, Ht = (a, e, t = `
`) => {
  const r = f(a), m = r.items.map(((i) => ((l, k) => {
    if (k.isReplaceTargetNote(l)) {
      const R = k.replaceText(l.value);
      return { key: l.key, value: R ?? l.value };
    }
    return l;
  })(i, e)));
  return h({
    note: r.note,
    items: m
  }, t);
}, Bt = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return r ? r[2] : void 0;
}, Ft = (a, e, t) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(r, ((m, i) => i === e ? ra(i, t) : m));
}, Vt = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({ key: t[1], value: t[2], id: a.id, name: a.name })));
}, Wt = (a) => [sa(a.elementRate), ma(a.debuffRate), ia(a.stateRate), oa(a.stateResist), la(a.regularParam), na(a.extraParam), da(a.specialParam), ua(a.attackElement), ca(a.attackState), pa(a.attackSpeed), ka(a.attackTimes), ba(a.attackSkill), ha(a.skillTypeAdd), fa(a.skillTypeSeal), ya(a.skillAdd), ga(a.skillSeal), Ra(a.equipWeaponType), za(a.equipArmorType), Sa(a.equipLock), $a(a.equipSeal), va(a.slotType), Ta(a.actionPlus), Ia(a.specialFlag), Aa(a.collaps), xa(a.partyAbility)], sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: y()
}), ma = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), ia = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: u()
}), oa = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: u() }), la = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: y() }), ca = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: u()
}), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ka = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ba = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: c()
}), ha = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: g() }), fa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: g()
}), ya = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: c() }), ga = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: c() }), Ra = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: wa()
}), za = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Ea() }), Sa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: p()
}), $a = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: p() }), va = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: p() }), Ta = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), xa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), u = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), c = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), g = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), wa = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ea = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), p = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Ca = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer"], Pa = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], Da = ["Math.max", "Math.min"], _t = (a) => n(a, Ca) || n(a, Pa) || n(a, Da), n = (a, e) => e.some(((t) => a.includes(t))), o = (a, e) => ({
  name: a,
  id: e
}), qa = (a) => a.variables.map(o), Ma = (a) => a.elements.map(o), Na = (a) => a.equipTypes.map(o), Ha = (a) => a.skillTypes.map(o), Ba = (a) => a.weaponTypes.map(o), Fa = (a) => a.armorTypes.map(o), Va = (a) => a.switches.map(o), jt = (a, e) => [_a(a, e), ja(a, e), Ka(a, e), La(a, e), Wa(a, e), Ga(a, e), Ja(a, e)], Wa = (a, e) => ({
  items: Fa(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), _a = (a, e) => ({ items: Ma(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), ja = (a, e) => ({ items: Na(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), La = (a, e) => ({
  items: Ha(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Ga = (a, e) => ({ items: qa(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Ja = (a, e) => ({ items: Va(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Ka = (a, e) => ({
  items: Ba(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  mt as $,
  gt as A,
  yt as B,
  Ee as C,
  Ca as D,
  It as E,
  ht as F,
  Da as G,
  bt as H,
  dt as I,
  ut as J,
  Pa as K,
  kt as L,
  pt as M,
  Je as N,
  Ke as O,
  ct as P,
  Xe as Q,
  Ue as R,
  Oe as S,
  Le as T,
  Ge as U,
  Qe as V,
  lt as W,
  ot as X,
  at as Y,
  rt as Z,
  it as _,
  Ce as a,
  Mt as a$,
  tt as a0,
  et as a1,
  st as a2,
  Ze as a3,
  Te as a4,
  ue as a5,
  be as a6,
  pe as a7,
  ce as a8,
  ke as a9,
  jt as aA,
  E as aB,
  P as aC,
  Rt as aD,
  B as aE,
  q as aF,
  V as aG,
  N as aH,
  je as aI,
  D as aJ,
  ae as aK,
  Fa as aL,
  Ma as aM,
  Na as aN,
  Za as aO,
  Bt as aP,
  Ha as aQ,
  Va as aR,
  qa as aS,
  Ba as aT,
  _t as aU,
  Ya as aV,
  f as aW,
  F as aX,
  ea as aY,
  b as aZ,
  Vt as a_,
  Ae as aa,
  me as ab,
  se as ac,
  ze as ad,
  Se as ae,
  $e as af,
  Re as ag,
  le as ah,
  xe as ai,
  ye as aj,
  ge as ak,
  he as al,
  fe as am,
  ve as an,
  de as ao,
  Ie as ap,
  ie as aq,
  oe as ar,
  ne as as,
  h as at,
  C as au,
  ee as av,
  d as aw,
  ra as ax,
  te as ay,
  re as az,
  Pe as b,
  Ye as b0,
  M as b1,
  Nt as b2,
  Ht as b3,
  qt as b4,
  Wt as b5,
  Ft as b6,
  W as b7,
  nt as b8,
  H as b9,
  Ua as ba,
  Xa as bb,
  Oa as bc,
  Qa as bd,
  we as c,
  At as d,
  vt as e,
  Dt as f,
  $t as g,
  Ct as h,
  Pt as i,
  zt as j,
  St as k,
  xt as l,
  wt as m,
  Tt as n,
  Et as o,
  Ne as p,
  Fe as q,
  Me as r,
  qe as s,
  De as t,
  Ve as u,
  He as v,
  Be as w,
  We as x,
  _e as y,
  ft as z
};
