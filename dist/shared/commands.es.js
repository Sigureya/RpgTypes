const Oe = 0, We = 101, _e = 401, je = 102, Ke = 402, Je = 103, Qe = 104, Ye = 105, Ze = 405, ea = 108, aa = 408, ta = 109, sa = 111, ra = 411, oa = 112, ma = 113, ia = 115, na = 117, la = 118, ca = 119, da = 121, ua = 122, pa = 123, ba = 124, ka = 125, ya = 126, fa = 127, ga = 128, ha = 129, va = 132, Ra = 133, za = 134, Sa = 135, Ta = 136, Ia = 137, Aa = 138, Ea = 139, Da = 140, xa = 201, wa = 202, Na = 203, Pa = 204, Ga = 205, Ha = 206, Va = 211, Ma = 212, qa = 213, Fa = 214, La = 216, Ca = 217, Ua = 221, $a = 222, Ba = 223, Xa = 224, Oa = 225, Wa = 230, _a = 231, ja = 232, Ka = 233, Ja = 234, Qa = 235, Ya = 236, Za = 241, et = 242, at = 243, tt = 244, st = 245, rt = 246, ot = 249, mt = 250, it = 251, nt = 261, lt = 281, ct = 282, dt = 283, ut = 284, pt = 285, bt = 301, kt = 302, yt = 605, ft = 303, gt = 311, ht = 312, vt = 326, Rt = 314, zt = 315, St = 313, Tt = 317, It = 318, At = 320, Et = 321, Dt = 322, xt = 323, wt = 324, Nt = 325, Pt = 331, Gt = 332, Ht = 333, Vt = 334, Mt = 335, qt = 336, Ft = 337, Lt = 339, Ct = 340, Ut = 351, $t = 342, Bt = 352, Xt = 353, Ot = 354, Wt = 355, _t = 655, jt = 356, Kt = 357, Jt = (e, a) => [v(e.skills, a), R(e.actors, a), z(e.states, a), S(e.armors, a), T(e.classes, a), I(e.enemies, a), A(e.items, a), E(e.weapons, a), D(e.commonEvents, a)], v = (e, a) => ({
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
} }), D = (e, a) => ({
  items: e,
  label: a.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), Qt = 11, Yt = 12, Zt = 13, es = 14, as = 21, ts = 22, ss = 23, rs = 31, os = 32, ms = 33, is = 34, ns = 35, ls = 41, cs = 42, ds = 43, us = 44, ps = 51, bs = 52, ks = 53, ys = 54, fs = 55, gs = 61, hs = 62, vs = 63, Rs = 64, zs = 0, Ss = 1, Ts = 2, Is = 3, x = (e, a) => ({
  items: w(e.options, a),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), w = (e, a) => [{ id: 0, name: a.normal }, { id: 1, name: e.bossCollaps }, { id: 2, name: e.instantCollaps }, {
  id: 3,
  name: e.noneCollaps
}], As = 0, Es = 1, Ds = 2, xs = 3, ws = 4, Ns = 5, Ps = 6, Gs = 7, Hs = 8, Vs = 9, N = (e) => ({
  items: P(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), P = (e) => [{ id: 0, name: e.hitRate }, { id: 1, name: e.evasionRate }, { id: 2, name: e.criticalRate }, { id: 3, name: e.criticalEvasionRate }, { id: 4, name: e.magicEvasionRate }, {
  id: 5,
  name: e.magicReflectionRate
}, { id: 6, name: e.counterAttackRate }, { id: 7, name: e.hpRegenerationRate }, { id: 8, name: e.mpRegenerationRate }, { id: 9, name: e.tpRegenerationRate }], Ms = (e, a) => {
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
}, qs = 0, Fs = 1, Ls = 2, Cs = 3, Us = 4, $s = 5, Bs = 6, Xs = 7, G = (e) => ({ items: H(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "params" } }), H = (e) => [{
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
}, Ws = 0, _s = 1, js = 2, Ks = 3, Js = 4, Qs = 5, Ys = 6, Zs = 7, er = 8, ar = 9, V = (e) => ({ items: M(e.options), label: e.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), M = (e) => [{
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
}, sr = 0, rr = 1, or = 2, mr = 3, ir = 4, nr = 5, q = (e) => ({
  items: F(e.options),
  label: e.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), F = (e) => [{ id: 0, name: e.encounterHalf }, { id: 1, name: e.encounterNone }, { id: 2, name: e.cancelSurprise }, {
  id: 3,
  name: e.raisePreemptive
}, { id: 4, name: e.goldDouble }, { id: 5, name: e.dropItemDouble }], lr = 0, cr = 1, dr = 2, ur = 3, L = (e) => ({ items: C(e.options), label: e.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), C = (e) => [{ id: 0, name: e.autoBattle }, { id: 1, name: e.guard }, { id: 2, name: e.substitute }, {
  id: 3,
  name: e.preventEscape
}], pr = (e, a) => [G(e.regularParam), N(e.extraParam), V(e.specialParam), x(e.collaps, a), L(e.specialFlag), q(e.partyAbility)], br = 11, kr = 12, yr = 13, fr = 21, gr = 22, hr = 31, vr = 32, Rr = 33, zr = 34, Sr = 41, Tr = 42, Ir = 43, Ar = 44, Er = (e) => [$(e), B(e), X(e), O(e), W(e), _(e), j(e), K(e), J(e), U(e), Q(e), Y(e), Z(e)], o = (e, a, s) => ({
  kindId: e,
  label: a.domainName,
  pattern: a.format,
  description: a.desc,
  dataSource: s
}), U = (e) => o(41, e.special), $ = (e) => o(11, e.recoverHp), B = (e) => o(12, e.recoverMp), X = (e) => o(13, e.gainTp), O = (e) => o(21, e.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), W = (e) => o(22, e.removeState, { author: "rmmz", module: "data", kind: "state" }), _ = (e) => o(31, e.addBuff, { author: "rmmz", module: "trait", kind: "params" }), j = (e) => o(32, e.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), K = (e) => o(33, e.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), J = (e) => o(34, e.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Q = (e) => o(42, e.grow, { author: "rmmz", module: "trait", kind: "params" }), Y = (e) => o(43, e.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Z = (e) => o(44, e.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Dr = (e, a) => b(e.note, (s, r) => a(s, r, e)), ee = (e) => b(e, (a, s) => ({ key: a, value: s })), b = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(s), (r) => a(r[1], r[2]));
}, k = (e, a = `
`) => [...e.items.map((s) => `<${s.key}:${s.value}>`), e.note].join(a).trim(), y = (e) => ({ note: ae(e), items: ee(e) }), ae = (e) => {
  if (e.length >= 3e4) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, te = (e, a) => `<${e}:${a}>`, xr = (e, a, s = `
`) => {
  const r = y(e), m = r.items.map((i) => ({ key: i.key, value: a(i) }));
  return k({ note: r.note, items: m }, s);
}, wr = (e, a, s = `
`) => {
  const r = y(e), m = r.items.map((i) => ((l, p) => {
    if (p.isReplaceTargetNote(l)) {
      const h = p.replaceText(l.value);
      return { key: l.key, value: h ?? l.value };
    }
    return l;
  })(i, a));
  return k({
    note: r.note,
    items: m
  }, s);
}, Nr = (e, a) => {
  const s = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(s)).find((m) => m[1] === a);
  return r ? r[2] : void 0;
}, Pr = (e, a, s) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (m, i) => i === a ? te(i, s) : m);
}, Gr = (e) => [se(e.elementRate), re(e.debuffRate), oe(e.stateRate), me(e.stateResist), ie(e.regularParam), ne(e.extraParam), le(e.specialParam), ce(e.attackElement), de(e.attackState), ue(e.attackSpeed), pe(e.attackTimes), be(e.attackSkill), ke(e.skillTypeAdd), ye(e.skillTypeSeal), fe(e.skillAdd), ge(e.skillSeal), he(e.equipWeaponType), ve(e.equipArmorType), Re(e.equipLock), ze(e.equipSeal), Se(e.slotType), Te(e.actionPlus), Ie(e.specialFlag), Ae(e.collaps), Ee(e.partyAbility)], se = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 11,
  dataSource: f()
}), re = (e) => ({ pattern: e.format, label: e.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), oe = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 13,
  dataSource: c()
}), me = (e) => ({ pattern: e.format, label: e.title, kindId: 14, dataSource: c() }), ie = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), ne = (e) => ({ pattern: e.format, label: e.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), le = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), ce = (e) => ({ pattern: e.format, label: e.title, kindId: 31, dataSource: f() }), de = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 32,
  dataSource: c()
}), ue = (e) => ({ pattern: e.format, label: e.title, kindId: 33 }), pe = (e) => ({ pattern: e.format, label: e.title, kindId: 34 }), be = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 35,
  dataSource: d()
}), ke = (e) => ({ pattern: e.format, label: e.title, kindId: 41, dataSource: g() }), ye = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 42,
  dataSource: g()
}), fe = (e) => ({ pattern: e.format, label: e.title, kindId: 43, dataSource: d() }), ge = (e) => ({ pattern: e.format, label: e.title, kindId: 44, dataSource: d() }), he = (e) => ({
  pattern: e.format,
  label: e.title,
  kindId: 51,
  dataSource: De()
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
} }), Ee = (e) => ({ pattern: e.format, label: e.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), c = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), d = () => ({ author: "rmmz", module: "data", kind: "skill" }), f = () => ({ author: "rmmz", module: "system", kind: "elements" }), g = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), De = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), xe = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), u = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Hr = 0, Vr = 1, Mr = 0, qr = 1, Fr = (e) => e.parameters[2] === 1, Lr = (e) => e.parameters[0], Cr = (e, a = 0) => ({
  code: 101,
  indent: a,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Ur = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4] ?? ""
}), $r = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Br = (e, a = 0) => ({ code: 401, indent: a, parameters: [e] }), n = (e, a) => ({
  name: e,
  id: a
}), we = (e) => e.variables.map(n), Ne = (e) => e.elements.map(n), Pe = (e) => e.equipTypes.map(n), Ge = (e) => e.skillTypes.map(n), He = (e) => e.weaponTypes.map(n), Ve = (e) => e.armorTypes.map(n), Me = (e) => e.switches.map(n), Xr = (e, a) => [Fe(e, a), Le(e, a), Be(e, a), Ce(e, a), qe(e, a), Ue(e, a), $e(e, a)], qe = (e, a) => ({
  items: Ve(e),
  label: a.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Fe = (e, a) => ({ items: Ne(e), label: a.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Le = (e, a) => ({ items: Pe(e), label: a.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Ce = (e, a) => ({
  items: Ge(e),
  label: a.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Ue = (e, a) => ({ items: we(e), label: a.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), $e = (e, a) => ({ items: Me(e), label: a.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Be = (e, a) => ({
  items: He(e),
  label: a.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), t = (e, a) => typeof e == "string" ? e : a, Or = (e) => ({
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
}), Wr = (e) => ({
  actionFailure: e.actionFailure,
  actorDamage: e.actorDamage,
  actorRecovery: e.actorRecovery,
  actorGain: e.actorGain,
  actorLoss: e.actorLoss,
  actorDrain: e.actorDrain,
  actorNoDamage: e.actorNoDamage,
  actorNoHit: e.actorNoHit,
  alwaysDash: e.alwaysDash,
  bgmVolume: e.bgmVolume,
  bgsVolume: e.bgsVolume,
  commandRemember: e.commandRemember,
  criticalToActor: e.criticalToActor,
  criticalToEnemy: e.criticalToEnemy,
  counterAttack: e.counterAttack,
  debuffAdd: e.debuffAdd,
  defeat: e.defeat,
  enemyDamage: e.enemyDamage,
  enemyDrain: e.enemyDrain,
  enemyGain: e.enemyGain,
  enemyLoss: e.enemyLoss,
  enemyNoDamage: e.enemyNoDamage,
  enemyNoHit: e.enemyNoHit,
  enemyRecovery: e.enemyRecovery,
  evasion: e.evasion,
  escapeFailure: e.escapeFailure,
  escapeStart: e.escapeStart,
  emerge: e.emerge,
  expNext: e.expNext,
  expTotal: e.expTotal,
  file: e.file,
  buffAdd: e.buffAdd,
  buffRemove: e.buffRemove,
  obtainExp: e.obtainExp,
  obtainGold: e.obtainGold,
  obtainItem: e.obtainItem,
  obtainSkill: e.obtainSkill,
  levelUp: e.levelUp,
  partyName: e.partyName,
  loadMessage: e.loadMessage,
  meVolume: e.meVolume,
  possession: e.possession,
  magicEvasion: e.magicEvasion,
  magicReflection: e.magicReflection,
  substitute: e.substitute,
  surprise: e.surprise,
  useItem: e.useItem,
  victory: e.victory,
  preemptive: e.preemptive,
  saveMessage: e.saveMessage,
  seVolume: e.seVolume
}), _r = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], jr = (e) => ({
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
}), Kr = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], Jr = (e) => ({
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
}), Qr = (e) => Xe(e, ""), Xe = (e, a) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continueGame ?? "Continue", a, e.toTitle ?? "To Title", e.cancel ?? "Cancel", a, e.buy ?? "Buy", e.sell ?? "Sell"], Yr = (e) => ({
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
});
export {
  qa as $,
  ya as A,
  fa as B,
  ea as C,
  ga as D,
  ia as E,
  ha as F,
  va as G,
  Ra as H,
  Je as I,
  za as J,
  Sa as K,
  oa as L,
  Ta as M,
  Oe as N,
  Ia as O,
  Aa as P,
  Ea as Q,
  Da as R,
  We as S,
  xa as T,
  wa as U,
  Na as V,
  Pa as W,
  Ga as X,
  Ha as Y,
  Va as Z,
  Ma as _,
  Br as a,
  _t as a$,
  Fa as a0,
  La as a1,
  Ca as a2,
  Ua as a3,
  $a as a4,
  Ba as a5,
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
  Dt as aI,
  xt as aJ,
  wt as aK,
  Nt as aL,
  Pt as aM,
  Gt as aN,
  Ht as aO,
  Vt as aP,
  Mt as aQ,
  qt as aR,
  Ft as aS,
  Lt as aT,
  Ct as aU,
  Ut as aV,
  $t as aW,
  Bt as aX,
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
  ot as al,
  mt as am,
  it as an,
  nt as ao,
  lt as ap,
  ct as aq,
  dt as ar,
  ut as as,
  pt as at,
  bt as au,
  kt as av,
  yt as aw,
  ft as ax,
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
  Ds as bB,
  xs as bC,
  ws as bD,
  Ns as bE,
  Ps as bF,
  Gs as bG,
  Hs as bH,
  Vs as bI,
  N as bJ,
  P as bK,
  Ms as bL,
  qs as bM,
  Fs as bN,
  Ls as bO,
  Cs as bP,
  Us as bQ,
  $s as bR,
  Bs as bS,
  Xs as bT,
  G as bU,
  H as bV,
  Os as bW,
  Ws as bX,
  _s as bY,
  js as bZ,
  Ks as b_,
  ss as ba,
  rs as bb,
  os as bc,
  ms as bd,
  is as be,
  ns as bf,
  ls as bg,
  cs as bh,
  ds as bi,
  us as bj,
  ps as bk,
  bs as bl,
  ks as bm,
  ys as bn,
  fs as bo,
  gs as bp,
  hs as bq,
  vs as br,
  Rs as bs,
  x as bt,
  w as bu,
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
  V as c5,
  M as c6,
  tr as c7,
  sr as c8,
  rr as c9,
  k as cA,
  y as cB,
  ee as cC,
  b as cD,
  Dr as cE,
  te as cF,
  xr as cG,
  wr as cH,
  Nr as cI,
  Pr as cJ,
  we as cK,
  Ne as cL,
  Pe as cM,
  Ge as cN,
  He as cO,
  Ve as cP,
  Me as cQ,
  Xr as cR,
  Wr as cS,
  Or as cT,
  _r as cU,
  jr as cV,
  Kr as cW,
  Jr as cX,
  Qr as cY,
  Xe as cZ,
  Yr as c_,
  or as ca,
  mr as cb,
  ir as cc,
  nr as cd,
  q as ce,
  F as cf,
  lr as cg,
  cr as ch,
  dr as ci,
  ur as cj,
  L as ck,
  C as cl,
  Er as cm,
  br as cn,
  kr as co,
  yr as cp,
  fr as cq,
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
  Vr as d2,
  Qe as e,
  Ur as f,
  Lr as g,
  Ye as h,
  Fr as i,
  Ze as j,
  aa as k,
  ta as l,
  Cr as m,
  sa as n,
  ra as o,
  ma as p,
  na as q,
  Gr as r,
  la as s,
  $r as t,
  ca as u,
  da as v,
  ua as w,
  pa as x,
  ba as y,
  ka as z
};
