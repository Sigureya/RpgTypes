const Ya = 0, Za = 1, ae = 0, ee = 1, te = (a) => a.parameters[2] === 1, re = (a) => a.parameters[0], u = (a, e) => `\\${a}[${e}]`, se = (a, e) => e.map(((t, r) => ({ text: t, controlChar: u(a, r) }))), me = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: u("N", e.id)
}))), ie = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: u("V", t) }))).filter(((e) => e.text !== "")), h = (a) => !!a, le = (a, e, t) => ({
  data: a,
  eventId: e,
  pageIndex: t
}), v = (a, e, t) => a.list.map(((r) => ({
  data: r,
  eventId: t.id,
  pageIndex: e
}))), n = (a, e) => a.pages.map(((t, r) => e(t, r, a))), $ = (a, e) => a.events.filter(h).map(((t) => n(t, e))), oe = (a, e) => a.events.filter(h).flatMap(((t) => n(t, e))), ne = (a, e) => a.map(((t) => n(t, e))), de = (a, e) => a.flatMap(((t) => n(t, e))), ue = (a, e) => a.map(((t) => e(t, 0, t))), ce = (a) => $(a, v).flat(2), pe = (a, e) => [I(a.skills, e), T(a.actors, e), x(a.states, e), A(a.armors, e), w(a.classes, e), E(a.enemies, e), C(a.items, e), P(a.weapons, e), D(a.commonEvents, e)], I = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), T = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), x = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), A = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), w = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), E = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), C = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), P = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), D = (a, e) => ({
  items: a,
  label: e.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), ke = 11, be = 12, he = 13, fe = 14, ge = 21, ye = 22, Re = 23, ze = 31, Se = 32, ve = 33, $e = 34, Ie = 35, Te = 41, xe = 42, Ae = 43, we = 44, Ee = 51, Ce = 52, Pe = 53, De = 54, Me = 55, qe = 61, Ne = 62, He = 63, Be = 64, je = 0, Fe = 1, Ve = 2, We = 3, M = (a, e) => ({
  items: q(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), q = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], _e = 0, Le = 1, Ge = 2, Je = 3, Ke = 4, Oe = 5, Qe = 6, Ue = 7, Xe = 8, Ye = 9, N = (a) => ({
  items: H(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), H = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], Ze = (a, e) => {
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
}, at = 0, et = 1, tt = 2, rt = 3, st = 4, mt = 5, it = 6, lt = 7, B = (a) => ({ items: j(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), j = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], ot = (a, e) => {
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
}, nt = 0, dt = 1, ut = 2, ct = 3, pt = 4, kt = 5, bt = 6, ht = 7, ft = 8, gt = 9, F = (a) => ({ items: V(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), V = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], yt = (a, e) => {
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
}, Rt = 0, zt = 1, St = 2, vt = 3, $t = 4, It = 5, W = (a) => ({
  items: _(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), _ = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], Tt = 0, xt = 1, At = 2, wt = 3, L = (a) => ({ items: G(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), G = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], Et = (a, e) => [B(a.regularParam), N(a.extraParam), F(a.specialParam), M(a.collaps, e), L(a.specialFlag), W(a.partyAbility)], Ct = 11, Pt = 12, Dt = 13, Mt = 21, qt = 22, Nt = 31, Ht = 32, Bt = 33, jt = 34, Ft = 41, Vt = 42, Wt = 43, _t = 44, Lt = (a) => [K(a), O(a), Q(a), U(a), X(a), Y(a), Z(a), aa(a), ea(a), J(a), ta(a), ra(a), sa(a)], s = (a, e, t) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: t
}), J = (a) => s(41, a.special), K = (a) => s(11, a.recoverHp), O = (a) => s(12, a.recoverMp), Q = (a) => s(13, a.gainTp), U = (a) => s(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), X = (a) => s(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), Y = (a) => s(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Z = (a) => s(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), aa = (a) => s(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), ea = (a) => s(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), ta = (a) => s(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), ra = (a) => s(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), sa = (a) => s(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Gt = (a, e) => f(a.note, ((t, r) => e(t, r, a))), ma = (a) => f(a, ((e, t) => ({ key: e, value: t }))), f = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.matchAll(t), ((r) => e(r[1], r[2])));
}, g = (a, e = `
`) => [...a.items.map(((t) => `<${t.key}:${t.value}>`)), a.note].join(e).trim(), y = (a) => ({ note: ia(a), items: ma(a) }), ia = (a) => {
  if (a.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return a.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, la = (a, e) => `<${a}:${e}>`, Jt = (a, e, t = `
`) => {
  const r = y(a), m = r.items.map(((i) => ({ key: i.key, value: e(i) })));
  return g({ note: r.note, items: m }, t);
}, Kt = (a, e, t = `
`) => {
  const r = y(a), m = r.items.map(((i) => ((o, b) => {
    if (b.isReplaceTargetNote(o)) {
      const S = b.replaceText(o.value);
      return { key: o.key, value: S ?? o.value };
    }
    return o;
  })(i, e)));
  return g({
    note: r.note,
    items: m
  }, t);
}, Ot = (a, e) => {
  const t = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(a.matchAll(t)).find(((m) => m[1] === e));
  return r ? r[2] : void 0;
}, Qt = (a, e, t) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return a.replace(r, ((m, i) => i === e ? la(i, t) : m));
}, Ut = (a) => {
  const e = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(a.note.matchAll(e)).map(((t) => ({ key: t[1], value: t[2], id: a.id, name: a.name })));
}, Xt = (a) => [oa(a.elementRate), na(a.debuffRate), da(a.stateRate), ua(a.stateResist), ca(a.regularParam), pa(a.extraParam), ka(a.specialParam), ba(a.attackElement), ha(a.attackState), fa(a.attackSpeed), ga(a.attackTimes), ya(a.attackSkill), Ra(a.skillTypeAdd), za(a.skillTypeSeal), Sa(a.skillAdd), va(a.skillSeal), $a(a.equipWeaponType), Ia(a.equipArmorType), Ta(a.equipLock), xa(a.equipSeal), Aa(a.slotType), wa(a.actionPlus), Ea(a.specialFlag), Ca(a.collaps), Pa(a.partyAbility)], oa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: R()
}), na = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), da = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: c()
}), ua = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: c() }), ca = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), pa = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ka = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ba = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: R() }), ha = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: c()
}), fa = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), ga = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), ya = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: p()
}), Ra = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: z() }), za = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: z()
}), Sa = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: p() }), va = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: p() }), $a = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Da()
}), Ia = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Ma() }), Ta = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: k()
}), xa = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: k() }), Aa = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: k() }), wa = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ea = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ca = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Pa = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), c = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), p = () => ({ author: "rmmz", module: "data", kind: "skill" }), R = () => ({ author: "rmmz", module: "system", kind: "elements" }), z = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Da = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ma = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), k = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), qa = ["$gameVariables", "$gameSystem", "$gameScreen", "$gameTimer", "$gameMessage", "$gameSwitches", "$gameSelfSwitches", "$gameActors", "$gameParty", "$gameTroop", "$gameMap", "$gamePlayer"], Na = ["$dataActors", "$dataClasses", "$dataSkills", "$dataItems", "$dataEnemies", "$dataWeapons", "$dataArmors", "$dataEnemies", "$dataTroops", "$dataStates", "$dataAnimations", "$dataTilesets", "$dataCommonEvents"], Ha = ["Math.max", "Math.min"], Yt = (a) => d(a, qa) || d(a, Na) || d(a, Ha), d = (a, e) => e.some(((t) => a.includes(t))), l = (a, e) => ({
  name: a,
  id: e
}), Ba = (a) => a.variables.map(l), ja = (a) => a.elements.map(l), Fa = (a) => a.equipTypes.map(l), Va = (a) => a.skillTypes.map(l), Wa = (a) => a.weaponTypes.map(l), _a = (a) => a.armorTypes.map(l), La = (a) => a.switches.map(l), Zt = (a, e) => [Ja(a, e), Ka(a, e), Xa(a, e), Oa(a, e), Ga(a, e), Qa(a, e), Ua(a, e)], Ga = (a, e) => ({
  items: _a(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ja = (a, e) => ({ items: ja(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ka = (a, e) => ({ items: Fa(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Oa = (a, e) => ({
  items: Va(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Qa = (a, e) => ({ items: Ba(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Ua = (a, e) => ({ items: La(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Xa = (a, e) => ({
  items: Wa(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
export {
  bt as $,
  wt as A,
  At as B,
  Fe as C,
  qa as D,
  Nt as E,
  Tt as F,
  Ha as G,
  It as H,
  Rt as I,
  zt as J,
  Na as K,
  $t as L,
  vt as M,
  tt as N,
  rt as O,
  St as P,
  lt as Q,
  it as R,
  st as S,
  at as T,
  et as U,
  mt as V,
  gt as W,
  ft as X,
  dt as Y,
  pt as Z,
  ht as _,
  Ve as a,
  y as a$,
  ct as a0,
  ut as a1,
  kt as a2,
  nt as a3,
  qe as a4,
  ze as a5,
  Ie as a6,
  ve as a7,
  Se as a8,
  $e as a9,
  le as aA,
  la as aB,
  ie as aC,
  pe as aD,
  Zt as aE,
  M as aF,
  N as aG,
  Et as aH,
  W as aI,
  B as aJ,
  L as aK,
  F as aL,
  Ze as aM,
  H as aN,
  se as aO,
  ce as aP,
  _a as aQ,
  ja as aR,
  Fa as aS,
  re as aT,
  Ot as aU,
  Va as aV,
  La as aW,
  Ba as aX,
  Wa as aY,
  Yt as aZ,
  te as a_,
  He as aa,
  be as ab,
  ke as ac,
  Ce as ad,
  Pe as ae,
  De as af,
  Ee as ag,
  ge as ah,
  Be as ai,
  Ae as aj,
  we as ak,
  Te as al,
  xe as am,
  Me as an,
  Re as ao,
  Ne as ap,
  he as aq,
  fe as ar,
  ye as as,
  g as at,
  q as au,
  oe as av,
  de as aw,
  me as ax,
  v as ay,
  u as az,
  We as b,
  _ as b0,
  ue as b1,
  n as b2,
  $ as b3,
  ne as b4,
  ma as b5,
  f as b6,
  Ut as b7,
  Gt as b8,
  ot as b9,
  j as ba,
  Jt as bb,
  Kt as bc,
  Lt as bd,
  Xt as be,
  Qt as bf,
  G as bg,
  yt as bh,
  V as bi,
  ae as bj,
  ee as bk,
  Ya as bl,
  Za as bm,
  je as c,
  Ht as d,
  Mt as e,
  _t as f,
  Dt as g,
  Vt as h,
  Wt as i,
  Ct as j,
  Pt as k,
  Bt as l,
  jt as m,
  qt as n,
  Ft as o,
  Je as p,
  Qe as q,
  Ge as r,
  Le as s,
  _e as t,
  Ue as u,
  Ke as v,
  Oe as w,
  Xe as x,
  Ye as y,
  xt as z
};
