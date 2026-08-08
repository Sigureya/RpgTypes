import { TRAIT_ATTACK_STATE, type Trait } from "./traitContainers";
import type { ItemEffect } from "./usableItems";
import { EFFECT_ADD_STATE } from "./usableItems";

export const actionItemEffectAttackStates = (
  itemEffects: ReadonlyArray<ItemEffect>,
  traits: ReadonlyArray<Trait>,
): Trait[] => {
  if (itemEffects.some(isAddAttackStateEffect)) {
    return traits.filter(isAddAttackStateTrait);
  }
  return [];
};

const isAddAttackStateEffect = (effect: ItemEffect): boolean => {
  return effect.code === EFFECT_ADD_STATE && effect.value1 === 0;
};

const isAddAttackStateTrait = (trait: Trait): boolean => {
  return trait.code === TRAIT_ATTACK_STATE;
};
