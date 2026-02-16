const Oe = 0, We = 101, _e = 401, je = 102, Ke = 402, Je = 103, Qe = 104, Ye = 105, Ze = 405, ea = 108, aa = 408, ta = 109, sa = 111, ra = 411, ma = 112, oa = 113, ia = 115, la = 117, na = 118, da = 119, ca = 121, ua = 122, pa = 123, ba = 124, ka = 125, fa = 126, ya = 127, ga = 128, ha = 129, va = 132, Ra = 133, za = 134, Sa = 135, Ta = 136, Ia = 137, Aa = 138, Ea = 139, wa = 140, xa = 201, Pa = 202, Da = 203, Na = 204, Ga = 205, qa = 206, Ha = 211, Ca = 212, Ma = 213, Fa = 214, Va = 216, La = 217, $a = 221, Ba = 222, Ua = 223, Xa = 224, Oa = 225, Wa = 230, _a = 231, ja = 232, Ka = 233, Ja = 234, Qa = 235, Ya = 236, Za = 241, et = 242, at = 243, tt = 244, st = 245, rt = 246, mt = 249, ot = 250, it = 251, lt = 261, nt = 281, dt = 282, ct = 283, ut = 284, pt = 285, bt = 301, kt = 302, ft = 605, yt = 303, gt = 311, ht = 312, vt = 326, Rt = 314, zt = 315, St = 313, Tt = 317, It = 318, At = 320, Et = 321, wt = 322, xt = 323, Pt = 324, Dt = 325, Nt = 331, Gt = 332, qt = 333, Ht = 334, Ct = 335, Mt = 336, Ft = 337, Vt = 339, Lt = 340, $t = 351, Bt = 342, Ut = 352, Xt = 353, Ot = 354, Wt = 355, _t = 655, jt = 356, Kt = 357, Jt = (e, a) => [v(e.skills, a), R(e.actors, a), z(e.states, a), S(e.armors, a), T(e.classes, a), I(e.enemies, a), A(e.items, a), E(e.weapons, a), w(e.commonEvents, a)], v = (e, a) => ({
  label: a.skill.title,
  items: e,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), R = (e, a) => ({
  items: e,
  label: a.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), z = (e, a) => ({ items: e, label: a.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), S = (e, a) => ({ items: e, label: a.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), T = (e, a) => ({ items: e, label: a.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), I = (e, a) => ({ items: e, label: a.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), A = (e, a) => ({ items: e, label: a.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), E = (e, a) => ({ items: e, label: a.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), w = (e, a) => ({
  items: e,
  label: a.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Qt = 11, Yt = 12, Zt = 13, es = 14, as = 21, ts = 22, ss = 23, rs = 31, ms = 32, os = 33, is = 34, ls = 35, ns = 41, ds = 42, cs = 43, us = 44, ps = 51, bs = 52, ks = 53, fs = 54, ys = 55, gs = 61, hs = 62, vs = 63, Rs = 64, zs = 0, Ss = 1, Ts = 2, Is = 3, x = (e, a) => ({
  items: P(e.options, a),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), P = (e, a) => [{ id: 0, name: a.normal }, { id: 1, name: e.bossCollaps }, { id: 2, name: e.instantCollaps }, {
  id: 3,
  name: e.noneCollaps
}], As = 0, Es = 1, ws = 2, xs = 3, Ps = 4, Ds = 5, Ns = 6, Gs = 7, qs = 8, Hs = 9, D = (e) => ({
  items: N(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), N = (e) => [{ id: 0, name: e.hitRate }, { id: 1, name: e.evasionRate }, { id: 2, name: e.criticalRate }, { id: 3, name: e.criticalEvasionRate }, { id: 4, name: e.magicEvasionRate }, {
  id: 5,
  name: e.magicReflectionRate
}, { id: 6, name: e.counterAttackRate }, { id: 7, name: e.hpRegenerationRate }, { id: 8, name: e.mpRegenerationRate }, { id: 9, name: e.tpRegenerationRate }], Cs = (e, a) => {
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
}, Ms = 0, Fs = 1, Vs = 2, Ls = 3, $s = 4, Bs = 5, Us = 6, Xs = 7, G = (e) => ({ items: q(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "params" } }), q = (e) => [{
  id: 0,
  name: e.maxHp
}, { id: 1, name: e.maxMp }, { id: 2, name: e.atk }, { id: 3, name: e.def }, { id: 4, name: e.matk }, { id: 5, name: e.mdef }, { id: 6, name: e.agi }, { id: 7, name: e.luk }], Os = (e, a) => {
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
}, Ws = 0, _s = 1, js = 2, Ks = 3, Js = 4, Qs = 5, Ys = 6, Zs = 7, er = 8, ar = 9, H = (e) => ({ items: C(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), C = (e) => [{
  id: 0,
  name: e.targetRate
}, { id: 1, name: e.guardEffectRate }, { id: 2, name: e.recoveryEffectRate }, { id: 3, name: e.pharmacology }, { id: 4, name: e.mpCostRate }, { id: 5, name: e.tpChargeRate }, {
  id: 6,
  name: e.physicalDamageRate
}, { id: 7, name: e.magicDamageRate }, { id: 8, name: e.floorDamageRate }, { id: 9, name: e.experienceRate }], tr = (e, a) => {
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
}, sr = 0, rr = 1, mr = 2, or = 3, ir = 4, lr = 5, M = (e) => ({
  items: F(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), F = (e) => [{ id: 0, name: e.encounterHalf }, { id: 1, name: e.encounterNone }, { id: 2, name: e.cancelSurprise }, {
  id: 3,
  name: e.raisePreemptive
}, { id: 4, name: e.goldDouble }, { id: 5, name: e.dropItemDouble }], nr = 0, dr = 1, cr = 2, ur = 3, V = (e) => ({ items: L(e.options), label: e.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), L = (e) => [{ id: 0, name: e.autoBattle }, { id: 1, name: e.guard }, { id: 2, name: e.substitute }, {
  id: 3,
  name: e.preventEscape
}], pr = (e, a) => [G(e.regularParam), D(e.extraParam), H(e.specialParam), x(e.collaps, a), V(e.specialFlag), M(e.partyAbility)], br = 11, kr = 12, fr = 13, yr = 21, gr = 22, hr = 31, vr = 32, Rr = 33, zr = 34, Sr = 41, Tr = 42, Ir = 43, Ar = 44, Er = (e) => [B(e), U(e), X(e), O(e), W(e), _(e), j(e), K(e), J(e), $(e), Q(e), Y(e), Z(e)], m = (e, a, s) => ({
  kindId: e,
  label: a.domainName,
  pattern: a.format,
  description: a.desc,
  dataSource: s
}), $ = (e) => m(41, e.special), B = (e) => m(11, e.recoverHp), U = (e) => m(12, e.recoverMp), X = (e) => m(13, e.gainTp), O = (e) => m(21, e.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), W = (e) => m(22, e.removeState, { author: "rmmz", module: "data", kind: "state" }), _ = (e) => m(31, e.addBuff, { author: "rmmz", module: "trait", kind: "params" }), j = (e) => m(32, e.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), K = (e) => m(33, e.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), J = (e) => m(34, e.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Q = (e) => m(42, e.grow, { author: "rmmz", module: "trait", kind: "params" }), Y = (e) => m(43, e.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Z = (e) => m(44, e.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), wr = (e, a) => b(e.note, (s, r) => a(s, r, e)), ee = (e) => b(e, (a, s) => ({ key: a, value: s })), b = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(s), (r) => a(r[1], r[2]));
}, k = (e, a = `
`) => [...e.items.map((s) => `<${s.key}:${s.value}>`), e.note].join(a).trim(), f = (e) => ({ note: ae(e), items: ee(e) }), ae = (e) => {
  if (e.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, te = (e, a) => `<${e}:${a}>`, xr = (e, a, s = `
`) => {
  const r = f(e), o = r.items.map((i) => ({ key: i.key, value: a(i) }));
  return k({ note: r.note, items: o }, s);
}, Pr = (e, a, s = `
`) => {
  const r = f(e), o = r.items.map((i) => ((n, p) => {
    if (p.isReplaceTargetNote(n)) {
      const h = p.replaceText(n.value);
      return { key: n.key, value: h ?? n.value };
    }
    return n;
  })(i, a));
  return k({
    note: r.note,
    items: o
  }, s);
}, Dr = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(s)).find((o) => o[1] === a);
  return r ? r[2] : void 0;
}, Nr = (e, a, s) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (o, i) => i === a ? te(i, s) : o);
}, Gr = (e) => [se(e.elementRate), re(e.debuffRate), me(e.stateRate), oe(e.stateResist), ie(e.regularParam), le(e.extraParam), ne(e.specialParam), de(e.attackElement), ce(e.attackState), ue(e.attackSpeed), pe(e.attackTimes), be(e.attackSkill), ke(e.skillTypeAdd), fe(e.skillTypeSeal), ye(e.skillAdd), ge(e.skillSeal), he(e.equipWeaponType), ve(e.equipArmorType), Re(e.equipLock), ze(e.equipSeal), Se(e.slotType), Te(e.actionPlus), Ie(e.specialFlag), Ae(e.collaps), Ee(e.partyAbility)], se = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 11,
  dataSource: y()
}), re = (e) => ({ pattern: e.format, label: e.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), me = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 13,
  dataSource: d()
}), oe = (e) => ({ pattern: e.format, label: e.title, kindId: 14, dataSource: d() }), ie = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), le = (e) => ({ pattern: e.format, label: e.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ne = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), de = (e) => ({ pattern: e.format, label: e.title, kindId: 31, dataSource: y() }), ce = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 32,
  dataSource: d()
}), ue = (e) => ({ pattern: e.format, label: e.title, kindId: 33 }), pe = (e) => ({ pattern: e.format, label: e.title, kindId: 34 }), be = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 35,
  dataSource: c()
}), ke = (e) => ({ pattern: e.format, label: e.title, kindId: 41, dataSource: g() }), fe = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 42,
  dataSource: g()
}), ye = (e) => ({ pattern: e.format, label: e.title, kindId: 43, dataSource: c() }), ge = (e) => ({ pattern: e.format, label: e.title, kindId: 44, dataSource: c() }), he = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 51,
  dataSource: we()
}), ve = (e) => ({ pattern: e.format, label: e.title, kindId: 52, dataSource: xe() }), Re = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 53,
  dataSource: u()
}), ze = (e) => ({ pattern: e.format, label: e.title, kindId: 54, dataSource: u() }), Se = (e) => ({ pattern: e.format, label: e.title, kindId: 55, dataSource: u() }), Te = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 61
}), Ie = (e) => ({ pattern: e.format, label: e.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ae = (e) => ({ pattern: e.format, label: e.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ee = (e) => ({ pattern: e.format, label: e.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), d = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), c = () => ({ author: "rmmz", module: "data", kind: "skill" }), y = () => ({ author: "rmmz", module: "system", kind: "elements" }), g = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), we = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), xe = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), qr = 0, Hr = 1, Cr = 0, Mr = 1, Fr = (e) => e.parameters[2] === 1, Vr = (e) => e.parameters[0], Lr = (e, a = 0) => ({
  code: 101,
  indent: a,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), $r = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4] ?? ""
}), Br = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Ur = (e, a = 0) => ({ code: 401, indent: a, parameters: [e] }), l = (e, a) => ({
  name: e,
  id: a
}), Pe = (e) => e.variables.map(l), De = (e) => e.elements.map(l), Ne = (e) => e.equipTypes.map(l), Ge = (e) => e.skillTypes.map(l), qe = (e) => e.weaponTypes.map(l), He = (e) => e.armorTypes.map(l), Ce = (e) => e.switches.map(l), Xr = (e, a) => [Fe(e, a), Ve(e, a), Ue(e, a), Le(e, a), Me(e, a), $e(e, a), Be(e, a)], Me = (e, a) => ({
  items: He(e),
  label: a.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Fe = (e, a) => ({ items: De(e), label: a.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ve = (e, a) => ({ items: Ne(e), label: a.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Le = (e, a) => ({
  items: Ge(e),
  label: a.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), $e = (e, a) => ({ items: Pe(e), label: a.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Be = (e, a) => ({ items: Ce(e), label: a.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Ue = (e, a) => ({
  items: qe(e),
  label: a.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Or = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], Wr = (e) => ({
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
}), _r = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], jr = (e) => ({
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
}), Kr = (e) => Xe(e, ""), Xe = (e, a) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continueGame ?? "Continue", a, e.toTitle ?? "To Title", e.cancel ?? "Cancel", a, e.buy ?? "Buy", e.sell ?? "Sell"], Jr = (e) => ({
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
  ea as C,
  ga as D,
  ia as E,
  ha as F,
  va as G,
  Ra as H,
  Je as I,
  za as J,
  Sa as K,
  ma as L,
  Ta as M,
  Oe as N,
  Ia as O,
  Aa as P,
  Ea as Q,
  wa as R,
  We as S,
  xa as T,
  Pa as U,
  Da as V,
  Na as W,
  Ga as X,
  qa as Y,
  Ha as Z,
  Ca as _,
  Ur as a,
  _t as a$,
  Fa as a0,
  Va as a1,
  La as a2,
  $a as a3,
  Ba as a4,
  Ua as a5,
  Xa as a6,
  Oa as a7,
  Wa as a8,
  _a as a9,
  vt as aA,
  Rt as aB,
  zt as aC,
  St as aD,
  Tt as aE,
  It as aF,
  At as aG,
  Et as aH,
  wt as aI,
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
  Vt as aT,
  Lt as aU,
  $t as aV,
  Bt as aW,
  Ut as aX,
  Xt as aY,
  Ot as aZ,
  Wt as a_,
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
  lt as ao,
  nt as ap,
  dt as aq,
  ct as ar,
  ut as as,
  pt as at,
  bt as au,
  kt as av,
  ft as aw,
  yt as ax,
  gt as ay,
  ht as az,
  _e as b,
  Js as b$,
  jt as b0,
  Kt as b1,
  Jt as b2,
  pr as b3,
  Qt as b4,
  Yt as b5,
  Zt as b6,
  es as b7,
  as as b8,
  ts as b9,
  Es as bA,
  ws as bB,
  xs as bC,
  Ps as bD,
  Ds as bE,
  Ns as bF,
  Gs as bG,
  qs as bH,
  Hs as bI,
  D as bJ,
  N as bK,
  Cs as bL,
  Ms as bM,
  Fs as bN,
  Vs as bO,
  Ls as bP,
  $s as bQ,
  Bs as bR,
  Us as bS,
  Xs as bT,
  G as bU,
  q as bV,
  Os as bW,
  Ws as bX,
  _s as bY,
  js as bZ,
  Ks as b_,
  ss as ba,
  rs as bb,
  ms as bc,
  os as bd,
  is as be,
  ls as bf,
  ns as bg,
  ds as bh,
  cs as bi,
  us as bj,
  ps as bk,
  bs as bl,
  ks as bm,
  fs as bn,
  ys as bo,
  gs as bp,
  hs as bq,
  vs as br,
  Rs as bs,
  x as bt,
  P as bu,
  zs as bv,
  Ss as bw,
  Ts as bx,
  Is as by,
  As as bz,
  je as c,
  Mr as c$,
  Qs as c0,
  Ys as c1,
  Zs as c2,
  er as c3,
  ar as c4,
  H as c5,
  C as c6,
  tr as c7,
  sr as c8,
  rr as c9,
  k as cA,
  f as cB,
  ee as cC,
  b as cD,
  wr as cE,
  te as cF,
  xr as cG,
  Pr as cH,
  Dr as cI,
  Nr as cJ,
  Pe as cK,
  De as cL,
  Ne as cM,
  Ge as cN,
  qe as cO,
  He as cP,
  Ce as cQ,
  Xr as cR,
  Or as cS,
  Wr as cT,
  _r as cU,
  jr as cV,
  Kr as cW,
  Xe as cX,
  Jr as cY,
  Qr as cZ,
  Cr as c_,
  mr as ca,
  or as cb,
  ir as cc,
  lr as cd,
  M as ce,
  F as cf,
  nr as cg,
  dr as ch,
  cr as ci,
  ur as cj,
  V as ck,
  L as cl,
  Er as cm,
  br as cn,
  kr as co,
  fr as cp,
  yr as cq,
  gr as cr,
  hr as cs,
  vr as ct,
  Rr as cu,
  zr as cv,
  Sr as cw,
  Tr as cx,
  Ir as cy,
  Ar as cz,
  Ke as d,
  qr as d0,
  Hr as d1,
  Qe as e,
  $r as f,
  Vr as g,
  Ye as h,
  Fr as i,
  Ze as j,
  aa as k,
  ta as l,
  Lr as m,
  sa as n,
  ra as o,
  oa as p,
  la as q,
  Gr as r,
  na as s,
  Br as t,
  da as u,
  ca as v,
  ua as w,
  pa as x,
  ba as y,
  ka as z
};
