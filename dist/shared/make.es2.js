const Oe = 0, We = 101, je = 401, Ke = 102, Je = 402, Qe = 103, Ye = 104, Ze = 105, ea = 405, aa = 108, ta = 408, sa = 109, ra = 111, ma = 411, oa = 112, ia = 113, na = 115, la = 117, da = 118, ca = 119, ua = 121, pa = 122, ba = 123, ka = 124, fa = 125, ya = 126, ha = 127, ga = 128, va = 129, Ra = 132, za = 133, Sa = 134, Ia = 135, Ta = 136, wa = 137, Aa = 138, Ea = 139, xa = 140, Pa = 201, Da = 202, Na = 203, Ga = 204, qa = 205, Ha = 206, Ca = 211, Ma = 212, Fa = 213, La = 214, Va = 216, $a = 217, Ba = 221, Ua = 222, Xa = 223, _a = 224, Oa = 225, Wa = 230, ja = 231, Ka = 232, Ja = 233, Qa = 234, Ya = 235, Za = 236, et = 241, at = 242, tt = 243, st = 244, rt = 245, mt = 246, ot = 249, it = 250, nt = 251, lt = 261, dt = 281, ct = 282, ut = 283, pt = 284, bt = 285, kt = 301, ft = 302, yt = 605, ht = 303, gt = 311, vt = 312, Rt = 326, zt = 314, St = 315, It = 313, Tt = 317, wt = 318, At = 320, Et = 321, xt = 322, Pt = 323, Dt = 324, Nt = 325, Gt = 331, qt = 332, Ht = 333, Ct = 334, Mt = 335, Ft = 336, Lt = 337, Vt = 339, $t = 340, Bt = 351, Ut = 342, Xt = 352, _t = 353, Ot = 354, Wt = 355, jt = 655, Kt = 356, Jt = 357, Qt = (e, a) => e.events.map((s) => s ? {
  ...s,
  pages: k(s, a)
} : null), k = (e, a) => e.pages.map((s) => ({
  ...s,
  list: a(s.list)
})), Yt = (e, a) => [f(e.skills, a), y(e.actors, a), h(e.states, a), g(e.armors, a), v(e.classes, a), R(e.enemies, a), z(e.items, a), S(e.weapons, a), I(e.commonEvents, a)], f = (e, a) => ({
  label: a.skill.title,
  items: e,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), y = (e, a) => ({
  items: e,
  label: a.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), h = (e, a) => ({ items: e, label: a.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), g = (e, a) => ({ items: e, label: a.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), v = (e, a) => ({ items: e, label: a.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), R = (e, a) => ({ items: e, label: a.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), z = (e, a) => ({ items: e, label: a.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), S = (e, a) => ({ items: e, label: a.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), I = (e, a) => ({
  items: e,
  label: a.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Zt = 11, es = 12, as = 13, ts = 14, ss = 21, rs = 22, ms = 23, os = 31, is = 32, ns = 33, ls = 34, ds = 35, cs = 41, us = 42, ps = 43, bs = 44, ks = 51, fs = 52, ys = 53, hs = 54, gs = 55, vs = 61, Rs = 62, zs = 63, Ss = 64, Is = 0, Ts = 1, ws = 2, As = 3, T = (e, a) => ({
  items: w(e.options, a),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), w = (e, a) => [{ id: 0, name: a.normal }, { id: 1, name: e.bossCollaps }, { id: 2, name: e.instantCollaps }, {
  id: 3,
  name: e.noneCollaps
}], Es = 0, xs = 1, Ps = 2, Ds = 3, Ns = 4, Gs = 5, qs = 6, Hs = 7, Cs = 8, Ms = 9, A = (e) => ({
  items: E(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), E = (e) => [{ id: 0, name: e.hitRate }, { id: 1, name: e.evasionRate }, { id: 2, name: e.criticalRate }, { id: 3, name: e.criticalEvasionRate }, { id: 4, name: e.magicEvasionRate }, {
  id: 5,
  name: e.magicReflectionRate
}, { id: 6, name: e.counterAttackRate }, { id: 7, name: e.hpRegenerationRate }, { id: 8, name: e.mpRegenerationRate }, { id: 9, name: e.tpRegenerationRate }], Fs = (e, a) => {
  switch (e) {
    case 3:
      return a.criticalEvasionRate;
    case 1:
      return a.evasionRate;
    case 6:
      return a.counterAttackRate;
    case 2:
      return a.criticalRate;
    case 0:
      return a.hitRate;
    case 7:
      return a.hpRegenerationRate;
    case 4:
      return a.magicEvasionRate;
    case 5:
      return a.magicReflectionRate;
    case 8:
      return a.mpRegenerationRate;
    case 9:
      return a.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Ls = 0, Vs = 1, $s = 2, Bs = 3, Us = 4, Xs = 5, _s = 6, Os = 7, x = (e) => ({ items: P(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "params" } }), P = (e) => [{
  id: 0,
  name: e.maxHp
}, { id: 1, name: e.maxMp }, { id: 2, name: e.atk }, { id: 3, name: e.def }, { id: 4, name: e.matk }, { id: 5, name: e.mdef }, { id: 6, name: e.agi }, { id: 7, name: e.luk }], Ws = (e, a) => {
  switch (e) {
    case 0:
      return a.maxHp;
    case 1:
      return a.maxMp;
    case 2:
      return a.atk;
    case 3:
      return a.def;
    case 4:
      return a.matk;
    case 5:
      return a.mdef;
    case 6:
      return a.agi;
    case 7:
      return a.luk;
    default:
      return `?rparams[${e}]`;
  }
}, js = 0, Ks = 1, Js = 2, Qs = 3, Ys = 4, Zs = 5, er = 6, ar = 7, tr = 8, sr = 9, D = (e) => ({ items: N(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), N = (e) => [{
  id: 0,
  name: e.targetRate
}, { id: 1, name: e.guardEffectRate }, { id: 2, name: e.recoveryEffectRate }, { id: 3, name: e.pharmacology }, { id: 4, name: e.mpCostRate }, { id: 5, name: e.tpChargeRate }, {
  id: 6,
  name: e.physicalDamageRate
}, { id: 7, name: e.magicDamageRate }, { id: 8, name: e.floorDamageRate }, { id: 9, name: e.experienceRate }], rr = (e, a) => {
  switch (e) {
    case 9:
      return a.experienceRate;
    case 0:
      return a.targetRate;
    case 8:
      return a.floorDamageRate;
    case 1:
      return a.guardEffectRate;
    case 4:
      return a.mpCostRate;
    case 5:
      return a.tpChargeRate;
    case 6:
      return a.physicalDamageRate;
    case 7:
      return a.magicDamageRate;
    case 3:
      return a.pharmacology;
    case 2:
      return a.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, mr = 0, or = 1, ir = 2, nr = 3, lr = 4, dr = 5, G = (e) => ({
  items: q(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), q = (e) => [{ id: 0, name: e.encounterHalf }, { id: 1, name: e.encounterNone }, { id: 2, name: e.cancelSurprise }, {
  id: 3,
  name: e.raisePreemptive
}, { id: 4, name: e.goldDouble }, { id: 5, name: e.dropItemDouble }], cr = 0, ur = 1, pr = 2, br = 3, H = (e) => ({ items: C(e.options), label: e.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), C = (e) => [{ id: 0, name: e.autoBattle }, { id: 1, name: e.guard }, { id: 2, name: e.substitute }, {
  id: 3,
  name: e.preventEscape
}], kr = (e, a) => [x(e.regularParam), A(e.extraParam), D(e.specialParam), T(e.collaps, a), H(e.specialFlag), G(e.partyAbility)], fr = 11, yr = 12, hr = 13, gr = 21, vr = 22, Rr = 31, zr = 32, Sr = 33, Ir = 34, Tr = 41, wr = 42, Ar = 43, Er = 44, xr = (e) => [F(e), L(e), V(e), $(e), B(e), U(e), X(e), _(e), O(e), M(e), W(e), j(e), K(e)], r = (e, a, s) => ({
  kindId: e,
  label: a.domainName,
  pattern: a.format,
  description: a.desc,
  dataSource: s
}), M = (e) => r(41, e.special), F = (e) => r(11, e.recoverHp), L = (e) => r(12, e.recoverMp), V = (e) => r(13, e.gainTp), $ = (e) => r(21, e.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), B = (e) => r(22, e.removeState, { author: "rmmz", module: "data", kind: "state" }), U = (e) => r(31, e.addBuff, { author: "rmmz", module: "trait", kind: "params" }), X = (e) => r(32, e.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), _ = (e) => r(33, e.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (e) => r(34, e.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), W = (e) => r(42, e.grow, { author: "rmmz", module: "trait", kind: "params" }), j = (e) => r(43, e.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), K = (e) => r(44, e.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Pr = (e, a) => u(e.note, (s, m) => a(s, m, e)), J = (e) => u(e, (a, s) => ({ key: a, value: s })), u = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(s), (m) => a(m[1], m[2]));
}, Q = (e, a = `
`) => [...e.items.map((s) => `<${s.key}:${s.value}>`), e.note].join(a).trim(), Y = (e) => ({ note: Z(e), items: J(e) }), Z = (e) => {
  if (e.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, ee = (e, a) => `<${e}:${a}>`, Dr = (e, a, s = `
`) => {
  const m = Y(e), i = m.items.map((n) => ({ key: n.key, value: a(n) }));
  return Q({ note: m.note, items: i }, s);
}, Nr = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, m = Array.from(e.matchAll(s)).find((i) => i[1] === a);
  return m ? m[2] : void 0;
}, Gr = (e, a, s) => {
  const m = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(m, (i, n) => n === a ? ee(n, s) : i);
}, qr = (e) => [ae(e.elementRate), te(e.debuffRate), se(e.stateRate), re(e.stateResist), me(e.regularParam), oe(e.extraParam), ie(e.specialParam), ne(e.attackElement), le(e.attackState), de(e.attackSpeed), ce(e.attackTimes), ue(e.attackSkill), pe(e.skillTypeAdd), be(e.skillTypeSeal), ke(e.skillAdd), fe(e.skillSeal), ye(e.equipWeaponType), he(e.equipArmorType), ge(e.equipLock), ve(e.equipSeal), Re(e.slotType), ze(e.actionPlus), Se(e.specialFlag), Ie(e.collaps), Te(e.partyAbility)], ae = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 11,
  dataSource: p()
}), te = (e) => ({ pattern: e.format, label: e.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), se = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 13,
  dataSource: l()
}), re = (e) => ({ pattern: e.format, label: e.title, kindId: 14, dataSource: l() }), me = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), oe = (e) => ({ pattern: e.format, label: e.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ie = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ne = (e) => ({ pattern: e.format, label: e.title, kindId: 31, dataSource: p() }), le = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 32,
  dataSource: l()
}), de = (e) => ({ pattern: e.format, label: e.title, kindId: 33 }), ce = (e) => ({ pattern: e.format, label: e.title, kindId: 34 }), ue = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 35,
  dataSource: d()
}), pe = (e) => ({ pattern: e.format, label: e.title, kindId: 41, dataSource: b() }), be = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 42,
  dataSource: b()
}), ke = (e) => ({ pattern: e.format, label: e.title, kindId: 43, dataSource: d() }), fe = (e) => ({ pattern: e.format, label: e.title, kindId: 44, dataSource: d() }), ye = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 51,
  dataSource: we()
}), he = (e) => ({ pattern: e.format, label: e.title, kindId: 52, dataSource: Ae() }), ge = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 53,
  dataSource: c()
}), ve = (e) => ({ pattern: e.format, label: e.title, kindId: 54, dataSource: c() }), Re = (e) => ({ pattern: e.format, label: e.title, kindId: 55, dataSource: c() }), ze = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 61
}), Se = (e) => ({ pattern: e.format, label: e.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ie = (e) => ({ pattern: e.format, label: e.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Te = (e) => ({ pattern: e.format, label: e.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), l = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), d = () => ({ author: "rmmz", module: "data", kind: "skill" }), p = () => ({ author: "rmmz", module: "system", kind: "elements" }), b = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), we = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Ae = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), c = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Hr = 0, Cr = 1, Mr = 0, Fr = 1, Lr = (e, a = 0) => ({
  code: 101,
  indent: a,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Vr = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4] ?? ""
}), $r = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Br = (e, a = 0) => ({ code: 401, indent: a, parameters: [e] }), Ee = {
  variable: 1,
  switch: 2,
  actor: 0,
  item: 0,
  weapon: 0,
  armor: 0,
  skill: 0,
  class: 0,
  state: 0,
  troop: 0,
  enemy: 0,
  common_event: 0
}, xe = ["data", "system", "system"], Pe = (e) => {
  const a = Ee[e];
  return a === void 0 ? {
    author: "rmmz",
    module: "unknown",
    kind: e
  } : { author: "rmmz", module: xe[a], kind: [e, "variable", "switch"][a] };
}, Ur = (e) => {
  const a = Pe(e.kind);
  return a.author === e.author && a.module === e.module && a.kind === e.kind;
}, o = (e, a) => ({
  name: e,
  id: a
}), De = (e) => e.variables.map(o), Ne = (e) => e.elements.map(o), Ge = (e) => e.equipTypes.map(o), qe = (e) => e.skillTypes.map(o), He = (e) => e.weaponTypes.map(o), Ce = (e) => e.armorTypes.map(o), Me = (e) => e.switches.map(o), Xr = (e, a) => [Le(e, a), Ve(e, a), Xe(e, a), $e(e, a), Fe(e, a), Be(e, a), Ue(e, a)], Fe = (e, a) => ({
  items: Ce(e),
  label: a.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Le = (e, a) => ({ items: Ne(e), label: a.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ve = (e, a) => ({ items: Ge(e), label: a.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), $e = (e, a) => ({
  items: qe(e),
  label: a.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Be = (e, a) => ({ items: De(e), label: a.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Ue = (e, a) => ({ items: Me(e), label: a.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Xe = (e, a) => ({
  items: He(e),
  label: a.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), _r = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], Or = (e) => ({
  mhp: e[0],
  mmp: e[1],
  atk: e[2],
  def: e[3],
  mat: e[4],
  mdf: e[5],
  agi: e[6],
  luk: e[7],
  hit: e[8],
  eva: e[9]
}), Wr = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], jr = (e) => ({
  level: e[0],
  levelA: e[1],
  hp: e[2],
  hpA: e[3],
  mp: e[4],
  mpA: e[5],
  tp: e[6],
  tpA: e[7],
  experience: e[8],
  exp: e[9]
}), Kr = (e) => _e(e, ""), _e = (e, a) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continueGame ?? "Continue", a, e.toTitle ?? "To Title", e.cancel ?? "Cancel", a, e.buy ?? "Buy", e.sell ?? "Sell"], Jr = (e) => ({
  fight: e[0],
  escape: e[1],
  attack: e[2],
  guard: e[3],
  item: e[4],
  skill: e[5],
  equip: e[6],
  status: e[7],
  formation: e[8],
  save: e[9],
  gameEnd: e[10],
  options: e[11],
  weapon: e[12],
  armor: e[13],
  keyItem: e[14],
  equip2: e[15],
  optimize: e[16],
  clear: e[17],
  newGame: e[18],
  continueGame: e[19],
  toTitle: e[21],
  cancel: e[22],
  buy: e[24],
  sell: e[25]
}), t = (e, a) => typeof e == "string" ? e : a, Qr = (e) => ({
  actionFailure: t(e.actionFailure, "Action failed."),
  actorDamage: t(e.actorDamage, "%1 took %2 damage."),
  actorRecovery: t(e.actorRecovery, "%1 recovered %2 HP."),
  actorGain: t(e.actorGain, "%1 gained %2."),
  actorLoss: t(e.actorLoss, "%1 lost %2."),
  actorDrain: t(e.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: t(e.actorNoDamage, "%1 was not damaged."),
  actorNoHit: t(e.actorNoHit, "%1 was not hit."),
  alwaysDash: t(e.alwaysDash, "Always dash."),
  bgmVolume: t(e.bgmVolume, "BGM volume"),
  bgsVolume: t(e.bgsVolume, "BGS volume"),
  commandRemember: t(e.commandRemember, "Command remember."),
  criticalToActor: t(e.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: t(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: t(e.counterAttack, "%1 countered!"),
  debuffAdd: t(e.debuffAdd, "%1's %2 was lowered."),
  defeat: t(e.defeat, "Defeat."),
  enemyDamage: t(e.enemyDamage, "%1 took %2 damage."),
  enemyDrain: t(e.enemyDrain, "%1 drained %2 HP."),
  enemyGain: t(e.enemyGain, "%1 gained %2."),
  enemyLoss: t(e.enemyLoss, "%1 lost %2."),
  enemyNoDamage: t(e.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: t(e.enemyNoHit, "%1 was not hit."),
  enemyRecovery: t(e.enemyRecovery, "%1 recovered %2 HP."),
  evasion: t(e.evasion, "%1 evaded the attack!"),
  autosave: t(e.autosave, "Autosave"),
  escapeFailure: t(e.escapeFailure, "Escape failed."),
  escapeStart: t(e.escapeStart, "%1 started to escape!"),
  emerge: t(e.emerge, "%1 appeared!"),
  expNext: t(e.expNext, "Next level in %1 EXP."),
  expTotal: t(e.expTotal, "Total EXP: %1"),
  file: t(e.file, "File"),
  buffAdd: t(e.buffAdd, "%1's %2 was raised."),
  buffRemove: t(e.buffRemove, "%1's %2 was lowered."),
  obtainExp: t(e.obtainExp, "%1 EXP obtained."),
  obtainGold: t(e.obtainGold, "%1 gold obtained."),
  obtainItem: t(e.obtainItem, "%1 obtained %2."),
  obtainSkill: t(e.obtainSkill, "%1 learned %2."),
  levelUp: t(e.levelUp, "%1 leveled up!"),
  partyName: t(e.partyName, "Party"),
  loadMessage: t(e.loadMessage, "Load %1?"),
  meVolume: t(e.meVolume, "ME volume"),
  possession: t(e.possession, "Possession"),
  preemptive: t(e.preemptive, "%1 attacked first!"),
  saveMessage: t(e.saveMessage, "Save %1?"),
  seVolume: t(e.seVolume, "SE volume"),
  magicEvasion: t(e.magicEvasion, "%1 evaded the magic!"),
  magicReflection: t(e.magicReflection, "%1 reflected the magic!"),
  substitute: t(e.substitute, "%1 took the hit!"),
  surprise: t(e.surprise, "%1 surprised the enemy!"),
  touchUI: t(e.touchUI, "Touch UI"),
  useItem: t(e.useItem, "%1 used %2."),
  victory: t(e.victory, "Victory!")
});
export {
  Ma as $,
  fa as A,
  ya as B,
  aa as C,
  ha as D,
  na as E,
  ga as F,
  va as G,
  Ra as H,
  Qe as I,
  za as J,
  Sa as K,
  oa as L,
  Ia as M,
  Oe as N,
  Ta as O,
  wa as P,
  Aa as Q,
  Ea as R,
  We as S,
  xa as T,
  Pa as U,
  Da as V,
  Na as W,
  Ga as X,
  qa as Y,
  Ha as Z,
  Ca as _,
  Br as a,
  Wt as a$,
  Fa as a0,
  La as a1,
  Va as a2,
  $a as a3,
  Ba as a4,
  Ua as a5,
  Xa as a6,
  _a as a7,
  Oa as a8,
  Wa as a9,
  vt as aA,
  Rt as aB,
  zt as aC,
  St as aD,
  It as aE,
  Tt as aF,
  wt as aG,
  At as aH,
  Et as aI,
  xt as aJ,
  Pt as aK,
  Dt as aL,
  Nt as aM,
  Gt as aN,
  qt as aO,
  Ht as aP,
  Ct as aQ,
  Mt as aR,
  Ft as aS,
  Lt as aT,
  Vt as aU,
  $t as aV,
  Bt as aW,
  Ut as aX,
  Xt as aY,
  _t as aZ,
  Ot as a_,
  ja as aa,
  Ka as ab,
  Ja as ac,
  Qa as ad,
  Ya as ae,
  Za as af,
  et as ag,
  at as ah,
  tt as ai,
  st as aj,
  rt as ak,
  mt as al,
  ot as am,
  it as an,
  nt as ao,
  lt as ap,
  dt as aq,
  ct as ar,
  ut as as,
  pt as at,
  bt as au,
  kt as av,
  ft as aw,
  yt as ax,
  ht as ay,
  gt as az,
  Qt as b,
  Qs as b$,
  jt as b0,
  Kt as b1,
  Jt as b2,
  Yt as b3,
  kr as b4,
  Zt as b5,
  es as b6,
  as as b7,
  ts as b8,
  ss as b9,
  Es as bA,
  xs as bB,
  Ps as bC,
  Ds as bD,
  Ns as bE,
  Gs as bF,
  qs as bG,
  Hs as bH,
  Cs as bI,
  Ms as bJ,
  A as bK,
  E as bL,
  Fs as bM,
  Ls as bN,
  Vs as bO,
  $s as bP,
  Bs as bQ,
  Us as bR,
  Xs as bS,
  _s as bT,
  Os as bU,
  x as bV,
  P as bW,
  Ws as bX,
  js as bY,
  Ks as bZ,
  Js as b_,
  rs as ba,
  ms as bb,
  os as bc,
  is as bd,
  ns as be,
  ls as bf,
  ds as bg,
  cs as bh,
  us as bi,
  ps as bj,
  bs as bk,
  ks as bl,
  fs as bm,
  ys as bn,
  hs as bo,
  gs as bp,
  vs as bq,
  Rs as br,
  zs as bs,
  Ss as bt,
  T as bu,
  w as bv,
  Is as bw,
  Ts as bx,
  ws as by,
  As as bz,
  je as c,
  Hr as c$,
  Ys as c0,
  Zs as c1,
  er as c2,
  ar as c3,
  tr as c4,
  sr as c5,
  D as c6,
  N as c7,
  rr as c8,
  mr as c9,
  Er as cA,
  Q as cB,
  Y as cC,
  J as cD,
  u as cE,
  Pr as cF,
  ee as cG,
  Dr as cH,
  Nr as cI,
  Gr as cJ,
  De as cK,
  Ne as cL,
  Ge as cM,
  qe as cN,
  He as cO,
  Ce as cP,
  Me as cQ,
  Xr as cR,
  _r as cS,
  Or as cT,
  Wr as cU,
  jr as cV,
  Kr as cW,
  _e as cX,
  Jr as cY,
  Qr as cZ,
  Mr as c_,
  or as ca,
  ir as cb,
  nr as cc,
  lr as cd,
  dr as ce,
  G as cf,
  q as cg,
  cr as ch,
  ur as ci,
  pr as cj,
  br as ck,
  H as cl,
  C as cm,
  xr as cn,
  fr as co,
  yr as cp,
  hr as cq,
  gr as cr,
  vr as cs,
  Rr as ct,
  zr as cu,
  Sr as cv,
  Ir as cw,
  Tr as cx,
  wr as cy,
  Ar as cz,
  Ke as d,
  Cr as d0,
  Fr as d1,
  Je as e,
  Vr as f,
  Ye as g,
  Ze as h,
  Ur as i,
  ea as j,
  ta as k,
  Pe as l,
  Lr as m,
  sa as n,
  ra as o,
  ma as p,
  ia as q,
  qr as r,
  la as s,
  $r as t,
  da as u,
  ca as v,
  ua as w,
  pa as x,
  ba as y,
  ka as z
};
