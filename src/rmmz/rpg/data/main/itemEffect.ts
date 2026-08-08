import type { Trait_AttackState, Trait } from "./traitContainers";
import { isTraitAttackState } from "./traitContainers";
import type { ItemEffect } from "./usableItems";
import { EFFECT_ADD_STATE } from "./usableItems";

export const actionItemEffectAttackStates = (
  itemEffects: ReadonlyArray<ItemEffect>,
  traits: ReadonlyArray<Trait>,
): Trait_AttackState[] => {
  if (itemEffects.some(isAddAttackStateEffect)) {
    return traits.filter(isTraitAttackState);
  }
  return [];
};

const isAddAttackStateEffect = (effect: ItemEffect): boolean => {
  return effect.code === EFFECT_ADD_STATE && effect.value1 === 0;
};
