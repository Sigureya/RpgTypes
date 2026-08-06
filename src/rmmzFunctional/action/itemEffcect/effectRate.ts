import type {
  ItemEffect,
  Data_Skill,
  Data_UsableItem,
} from "@RpgTypes/rmmz/rpg";
import {
  isMagicalHit,
  isPhysicalHit,
  traitAttackElements,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";

export const lukEffectRate = (
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
): number => {
  const luk = 1.0 + (subject.luk - target.luk) * 0.001;
  return Math.max(luk, 0.0);
};

export const actionElementMaxRate = (
  target: Rmmz_BattlerBase,
  elements: ReadonlyArray<number>,
): number => {
  if (elements.length === 0) {
    return 1.0;
  }
  return elements.reduce((acc, elementId): number => {
    const rate = target.elementRate(elementId);
    return Math.max(acc, rate);
  }, Number.MIN_VALUE);
};

export const actionCalcElementRate = (
  skill: Data_Skill,
  target: Rmmz_BattlerBase,
): number => {
  if (skill.damage.elementId < 0) {
    const elements: number[] = traitAttackElements(target.allTraits());
    return actionElementMaxRate(target, elements);
  }
  return target.elementRate(skill.damage.elementId);
};

export const actionCalcAttackStateRate = (
  stateId: number,
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return (
    effect.value1 *
    target.stateRate(stateId) *
    subject.attackStatesRate(stateId) *
    lukEffectRate(subject, target)
  );
};

export const actionCalcNormalStateRate = (
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return (
    effect.value1 *
    target.stateRate(effect.dataId) *
    lukEffectRate(subject, target)
  );
};

export const actionItemMrf = (
  data: Data_UsableItem,
  target: Rmmz_BattlerBase,
): number => {
  return isMagicalHit(data) ? target.mrf : 0;
};

export const actionItemHit = (
  data: Data_UsableItem,
  subject: Rmmz_BattlerBase,
): number => {
  if (isPhysicalHit(data)) {
    return data.successRate * 0.01 * subject.hit;
  }
  return data.successRate * 0.01;
};

export const actionItemEva = (
  data: Data_UsableItem,
  target: Rmmz_BattlerBase,
): number => {
  if (isPhysicalHit(data)) {
    return target.eva;
  }
  if (isMagicalHit(data)) {
    return target.mev;
  }
  return 0;
};

export const actionItemCri = (
  data: Data_UsableItem,
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
): number => {
  if (data.damage.critical) {
    return subject.cri * (1 - target.cev);
  }
  return 0;
};
