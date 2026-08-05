import type { ItemEffect, Data_Skill } from "@RpgTypes/rmmz/rpg";
import { traitAttackElements } from "@RpgTypes/rmmz/rpg";
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
