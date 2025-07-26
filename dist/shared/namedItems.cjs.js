"use strict";
const e = (e2, t2) => ({ label: t2.skill.title, items: e2, source: { author: "rmmz", module: "data", kind: "skill" } }), t = (e2, t2) => ({ items: e2, label: t2.actor.title, source: {
  author: "rmmz",
  module: "data",
  kind: "actor"
} }), a = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), r = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), o = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), s = (e2, t2) => ({
  items: e2,
  label: t2.enemy.title,
  source: { author: "rmmz", module: "data", kind: "enemy" }
}), m = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), i = (e2, t2) => ({
  items: e2,
  label: t2.weapon.title,
  source: { author: "rmmz", module: "data", kind: "weapon" }
}), l = (e2, t2) => ({
  items: e2,
  label: t2.commonEvent.title,
  source: { author: "rmmz", module: "data", kind: "common_event" }
}), p = (e2, t2) => ({ items: n(e2.options, t2), label: e2.title, source: { author: "rmmz", module: "trait", kind: "collaps" } }), n = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], d = (e2) => ({ items: A(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), A = (e2) => [{ id: 0, name: e2.hitRate }, {
  id: 1,
  name: e2.evasionRate
}, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, {
  id: 7,
  name: e2.hpRegenerationRate
}, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], u = (e2) => ({ items: T(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), T = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, {
  id: 7,
  name: e2.luk
}], R = (e2) => ({ items: _(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), _ = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, {
  id: 2,
  name: e2.recoveryEffectRate
}, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, { id: 7, name: e2.magicDamageRate }, {
  id: 8,
  name: e2.floorDamageRate
}, { id: 9, name: e2.experienceRate }], c = (e2) => ({ items: E(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), E = (e2) => [{
  id: 0,
  name: e2.encounterHalf
}, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], x = (e2) => ({
  items: I(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), I = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], k = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), P = (e2) => k(41, e2.special), S = (e2) => k(11, e2.recoverHp), L = (e2) => k(12, e2.recoverMp), b = (e2) => k(13, e2.gainTp), f = (e2) => k(21, e2.addState, { author: "rmmz", module: "data", kind: "state" }), y = (e2) => k(22, e2.removeState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), h = (e2) => k(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), C = (e2) => k(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), M = (e2) => k(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), g = (e2) => k(34, e2.removeDebuff, { author: "rmmz", module: "trait", kind: "params" }), F = (e2) => k(42, e2.grow, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), z = (e2) => k(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), D = (e2) => k(44, e2.commonEvent, { author: "rmmz", module: "data", kind: "common_event" }), O = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: le()
}), U = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), N = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: me()
}), v = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: me() }), G = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), B = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Y = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), w = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: le() }), K = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: me()
}), X = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), V = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), H = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: ie()
}), q = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: pe() }), Q = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: pe()
}), W = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: ie() }), $ = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: ie() }), j = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: ne()
}), J = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: de() }), Z = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: Ae()
}), ee = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: Ae() }), te = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: Ae() }), ae = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), re = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), oe = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), se = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), me = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), ie = () => ({ author: "rmmz", module: "data", kind: "skill" }), le = () => ({ author: "rmmz", module: "system", kind: "elements" }), pe = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), ne = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), de = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Ae = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), ue = (e2, t2) => ({
  name: e2,
  id: t2
}), Te = (e2) => e2.variables.map(ue), Re = (e2) => e2.elements.map(ue), _e = (e2) => e2.equipTypes.map(ue), ce = (e2) => e2.skillTypes.map(ue), Ee = (e2) => e2.weaponTypes.map(ue), xe = (e2) => e2.armorTypes.map(ue), Ie = (e2) => e2.switches.map(ue), ke = (e2, t2) => ({
  items: xe(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Pe = (e2, t2) => ({ items: Re(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Se = (e2, t2) => ({ items: _e(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Le = (e2, t2) => ({
  items: ce(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), be = (e2, t2) => ({ items: Te(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), fe = (e2, t2) => ({ items: Ie(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), ye = (e2, t2) => ({
  items: Ee(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
});
exports.COLLAPS_BOSS = 1, exports.COLLAPS_INSTANT = 2, exports.COLLAPS_NONE = 3, exports.COLLAPS_NORMAL = 0, exports.EFFECT_ADD_BUFF = 31, exports.EFFECT_ADD_DEBUFF = 32, exports.EFFECT_ADD_STATE = 21, exports.EFFECT_COMMON_EVENT = 44, exports.EFFECT_GAIN_TP = 13, exports.EFFECT_GROW = 42, exports.EFFECT_LEARN_SKILL = 43, exports.EFFECT_RECOVER_HP = 11, exports.EFFECT_RECOVER_MP = 12, exports.EFFECT_REMOVE_BUFF = 33, exports.EFFECT_REMOVE_DEBUFF = 34, exports.EFFECT_REMOVE_STATE = 22, exports.EFFECT_SPECIAL = 41, exports.EXTRA_PARAM_CEV = 3, exports.EXTRA_PARAM_CNT = 6, exports.EXTRA_PARAM_CRI = 2, exports.EXTRA_PARAM_EVA = 1, exports.EXTRA_PARAM_HIT = 0, exports.EXTRA_PARAM_HRG = 7, exports.EXTRA_PARAM_MEV = 4, exports.EXTRA_PARAM_MRF = 5, exports.EXTRA_PARAM_MRG = 8, exports.EXTRA_PARAM_TRG = 9, exports.FLAG_ID_AUTO_BATTLE = 0, exports.FLAG_ID_GUARD = 1, exports.FLAG_ID_PRESERVE_TP = 3, exports.FLAG_ID_SUBSTITUTE = 2, exports.PARTY_ABILITY_CANCEL_SURPRISE = 2, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = 5, exports.PARTY_ABILITY_ENCOUNTER_HALF = 0, exports.PARTY_ABILITY_ENCOUNTER_NONE = 1, exports.PARTY_ABILITY_GOLD_DOUBLE = 4, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = 3, exports.REGULAR_PARAM_AGI = 6, exports.REGULAR_PARAM_ATK = 2, exports.REGULAR_PARAM_DEF = 3, exports.REGULAR_PARAM_LUK = 7, exports.REGULAR_PARAM_MATK = 4, exports.REGULAR_PARAM_MAX_HP = 0, exports.REGULAR_PARAM_MAX_MP = 1, exports.REGULAR_PARAM_MDEF = 5, exports.SPECIAL_PARAM_EXR = 9, exports.SPECIAL_PARAM_FDR = 8, exports.SPECIAL_PARAM_GRD = 1, exports.SPECIAL_PARAM_MCR = 4, exports.SPECIAL_PARAM_MDR = 7, exports.SPECIAL_PARAM_PDR = 6, exports.SPECIAL_PARAM_PHA = 3, exports.SPECIAL_PARAM_REC = 2, exports.SPECIAL_PARAM_TCR = 5, exports.SPECIAL_PARAM_TGR = 0, exports.TRAIT_ACTION_PLUS = 61, exports.TRAIT_ATTACK_ELEMENT = 31, exports.TRAIT_ATTACK_SKILL = 35, exports.TRAIT_ATTACK_SPEED = 33, exports.TRAIT_ATTACK_STATE = 32, exports.TRAIT_ATTACK_TIMES = 34, exports.TRAIT_COLLAPSE_TYPE = 63, exports.TRAIT_DEBUFF_RATE = 12, exports.TRAIT_ELEMENT_RATE = 11, exports.TRAIT_EQUIP_ARMOR_TYPE = 52, exports.TRAIT_EQUIP_LOCK = 53, exports.TRAIT_EQUIP_SEAL = 54, exports.TRAIT_EQUIP_WEAPON_TYPE = 51, exports.TRAIT_PARAM = 21, exports.TRAIT_PARTY_ABILITY = 64, exports.TRAIT_SKILL_ADD = 43, exports.TRAIT_SKILL_SEAL = 44, exports.TRAIT_SKILL_TYPE_ADD = 41, exports.TRAIT_SKILL_TYPE_SEAL = 42, exports.TRAIT_SLOT_TYPE = 55, exports.TRAIT_SPARAM = 23, exports.TRAIT_SPECIAL_FLAG = 62, exports.TRAIT_STATE_RATE = 13, exports.TRAIT_STATE_RESIST = 14, exports.TRAIT_XPARAM = 22, exports.collapsOptionsToArray = n, exports.defineGameDataSources = (p2, n2) => [e(p2.skills, n2), t(p2.actors, n2), a(p2.states, n2), r(p2.armors, n2), o(p2.classes, n2), s(p2.enemies, n2), m(p2.items, n2), i(p2.weapons, n2), l(p2.commonEvents, n2)], exports.defineSystemItems = (e2, t2) => [Pe(e2, t2), Se(e2, t2), ye(e2, t2), Le(e2, t2), ke(e2, t2), be(e2, t2), fe(e2, t2)], exports.defineTraitCollapseType = p, exports.defineTraitExtraParam = d, exports.defineTraitItems = (e2, t2) => [u(e2.regularParam), d(e2.extraParam), R(e2.specialParam), p(e2.collaps, t2), x(e2.specialFlag), c(e2.partyAbility)], exports.defineTraitPartyAbility = c, exports.defineTraitRegularParam = u, exports.defineTraitSpecialFlag = x, exports.defineTraitSpecialParam = R, exports.extraParamName = (e2, t2) => {
  switch (e2) {
    case 3:
      return t2.criticalEvasionRate;
    case 1:
      return t2.evasionRate;
    case 6:
      return t2.counterAttackRate;
    case 2:
      return t2.criticalRate;
    case 0:
      return t2.hitRate;
    case 7:
      return t2.hpRegenerationRate;
    case 4:
      return t2.magicEvasionRate;
    case 5:
      return t2.magicReflectionRate;
    case 8:
      return t2.mpRegenerationRate;
    case 9:
      return t2.tpRegenerationRate;
  }
  return `?xparams[${e2}]`;
}, exports.extraParamsToArray = A, exports.getArmorTypes = xe, exports.getElementTypes = Re, exports.getEquipTypes = _e, exports.getSkillTypes = ce, exports.getSwitches = Ie, exports.getVariableNames = Te, exports.getWeaponTypes = Ee, exports.partyAbilityToArray = E, exports.regularParamName = (e2, t2) => {
  switch (e2) {
    case 0:
      return t2.maxHp;
    case 1:
      return t2.maxMp;
    case 2:
      return t2.atk;
    case 3:
      return t2.def;
    case 4:
      return t2.matk;
    case 5:
      return t2.mdef;
    case 6:
      return t2.agi;
    case 7:
      return t2.luk;
    default:
      return `?rparams[${e2}]`;
  }
}, exports.regularParamsToArray = T, exports.resolveItemEffectLabels = (e2) => [S(e2), L(e2), b(e2), f(e2), y(e2), h(e2), C(e2), M(e2), g(e2), P(e2), F(e2), z(e2), D(e2)], exports.resolveTraitLabels = (e2) => [O(e2.elementRate), U(e2.debuffRate), N(e2.stateRate), v(e2.stateResist), G(e2.regularParam), B(e2.extraParam), Y(e2.specialParam), w(e2.attackElement), K(e2.attackState), X(e2.attackSpeed), V(e2.attackTimes), H(e2.attackSkill), q(e2.skillTypeAdd), Q(e2.skillTypeSeal), W(e2.skillAdd), $(e2.skillSeal), j(e2.equipWeaponType), J(e2.equipArmorType), Z(e2.equipLock), ee(e2.equipSeal), te(e2.slotType), ae(e2.actionPlus), re(e2.specialFlag), oe(e2.collaps), se(e2.partyAbility)], exports.specialFlagToArray = I, exports.specialParamName = (e2, t2) => {
  switch (e2) {
    case 9:
      return t2.experienceRate;
    case 0:
      return t2.targetRate;
    case 8:
      return t2.floorDamageRate;
    case 1:
      return t2.guardEffectRate;
    case 4:
      return t2.mpCostRate;
    case 5:
      return t2.tpChargeRate;
    case 6:
      return t2.physicalDamageRate;
    case 7:
      return t2.magicDamageRate;
    case 3:
      return t2.pharmacology;
    case 2:
      return t2.recoveryEffectRate;
  }
  return `?sparams[${e2}]`;
}, exports.specialParamsToArray = _;
//# sourceMappingURL=namedItems.cjs.js.map
