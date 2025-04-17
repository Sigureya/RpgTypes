const E = (A, R) => {
  const t = { ...A };
  for (const _ in A) {
    const n = R[_];
    typeof n == "string" && (t[_] = n);
  }
  return t;
}, a = (A, R) => {
  const t = {};
  for (const _ in A) {
    const n = A[_], P = R[_] ?? {};
    t[_] = E(
      n,
      P
    );
  }
  return t;
}, e = (A, R) => ({
  name: A,
  id: R
}), r = (A) => A.variables.map(e), c = (A) => A.elements.map(e), M = (A) => A.equipTypes.map(e), o = (A) => A.skillTypes.map(e), L = (A) => A.weaponTypes.map(e), T = (A) => A.armorTypes.map(e), s = (A) => A.terms.params.map(e);
const i = (A, R) => {
  switch (A) {
    case 0:
      return R.maxHp;
    case 1:
      return R.maxMp;
    case 2:
      return R.atk;
    case 3:
      return R.def;
    case 4:
      return R.matk;
    case 5:
      return R.mdef;
    case 6:
      return R.agi;
    case 7:
      return R.luk;
    default:
      return `?rparams[${A}]`;
  }
}, m = (A, R) => {
  switch (A) {
    case 3:
      return R.criticalEvasionRate;
    case 1:
      return R.evasionRate;
    case 6:
      return R.counterAttackRate;
    case 2:
      return R.criticalRate;
    case 0:
      return R.hitRate;
    case 7:
      return R.hpRegenerationRate;
    case 4:
      return R.magicEvasionRate;
    case 5:
      return R.magicReflectionRate;
    case 8:
      return R.mpRegenerationRate;
    case 9:
      return R.tpRegenerationRate;
  }
  return `?xparams[${A}]`;
}, C = (A, R) => {
  switch (A) {
    case 9:
      return R.experienceRate;
    case 0:
      return R.targetRate;
    case 8:
      return R.floorDamageRate;
    case 1:
      return R.guradEffectRate;
    case 4:
      return R.mpCostRate;
    case 5:
      return R.tpChargeRate;
    case 6:
      return R.physicalDamageRate;
    case 7:
      return R.magicDamageRate;
    case 3:
      return R.pharmacology;
    case 2:
      return R.recoveryEffectRate;
  }
  return `?sparams[${A}]`;
}, I = (A, R) => [
  {
    id: 0,
    name: R.normal
  },
  {
    id: 1,
    name: A.bossCollaps
  },
  {
    id: 2,
    name: A.instantCollaps
  },
  {
    id: 3,
    name: A.noneCollaps
  }
], u = (A) => [
  {
    id: 0,
    name: A.encounterHalf
  },
  {
    id: 1,
    name: A.encounterNone
  },
  {
    id: 2,
    name: A.cancelSurprise
  },
  {
    id: 3,
    name: A.raisePreemptive
  },
  {
    id: 4,
    name: A.goldDouble
  },
  {
    id: 5,
    name: A.dropItemDouble
  }
], d = (A) => [
  { id: 0, name: A.maxHp },
  { id: 1, name: A.maxMp },
  { id: 2, name: A.atk },
  { id: 3, name: A.def },
  { id: 4, name: A.matk },
  { id: 5, name: A.mdef },
  { id: 6, name: A.agi },
  { id: 7, name: A.luk }
], S = (A) => [
  {
    id: 0,
    name: A.hitRate
  },
  {
    id: 1,
    name: A.evasionRate
  },
  {
    id: 2,
    name: A.criticalRate
  },
  {
    id: 3,
    name: A.criticalEvasionRate
  },
  {
    id: 4,
    name: A.magicEvasionRate
  },
  {
    id: 5,
    name: A.magicReflectionRate
  },
  {
    id: 6,
    name: A.counterAttackRate
  },
  {
    id: 7,
    name: A.hpRegenerationRate
  },
  {
    id: 8,
    name: A.mpRegenerationRate
  },
  {
    id: 9,
    name: A.tpRegenerationRate
  }
], G = (A) => [
  {
    id: 0,
    name: A.targetRate
  },
  {
    id: 1,
    name: A.guradEffectRate
  },
  {
    id: 2,
    name: A.recoveryEffectRate
  },
  {
    id: 3,
    name: A.pharmacology
  },
  {
    id: 4,
    name: A.mpCostRate
  },
  {
    id: 5,
    name: A.tpChargeRate
  },
  {
    id: 6,
    name: A.physicalDamageRate
  },
  {
    id: 7,
    name: A.magicDamageRate
  },
  {
    id: 8,
    name: A.floorDamageRate
  },
  {
    id: 9,
    name: A.experienceRate
  }
];
export {
  m as extraParamName,
  I as foldCollapsOptions,
  S as foldExtraParam,
  u as foldPartyAbilityOptions,
  d as foldRegularParam,
  G as foldSpecialParams,
  T as getArmorTypes,
  c as getElements,
  M as getEquipTypes,
  s as getParamNames,
  o as getSkillTypes,
  r as getVariableNames,
  L as getWeaponTypes,
  a as mergeNestedPrimitiveRecords,
  E as mergeWithDefaults,
  i as regularParamName,
  C as specialParamName
};
//# sourceMappingURL=namedItemSource.es.js.map
