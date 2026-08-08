import type { ItemEffect, Trait, Trait_AttackState } from "@RpgTypes/rmmz/rpg";
import {
  EFFECT_ADD_BUFF,
  EFFECT_ADD_STATE,
  EFFECT_RECOVER_HP,
  EFFECT_RECOVER_MP,
  EFFECT_REMOVE_BUFF,
  EFFECT_REMOVE_STATE,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { calcItemEffectRecoverHp } from "./recover";

const filterItemEffects = (
  luk: number,
  targetTraits: ReadonlyArray<Trait>,
  effects: ReadonlyArray<ItemEffect>,
  attackStates: ReadonlyArray<Trait_AttackState>,
  randomFn: () => number,
) => {
  return effects.flatMap((effect) => {
    if (effect.code === EFFECT_REMOVE_STATE) {
      if (itemEffectRemoveState(effect, randomFn())) {
        return effect;
      }
    }
  });
};

const itemEffectAddState = (
  targetTraits: ReadonlyArray<Trait>,
  effect: ItemEffect,
  randomFn: () => number,
) => {};

const itemEffectRemoveState = (
  effect: ItemEffect,
  randomValue: number,
): boolean => {
  return randomValue < effect.value1;
};

const actionItemEffectRecoverHp = (
  target: Rmmz_Battler,
  effect: ItemEffect,
): number => {
  const baseValue = calcItemEffectRecoverHp(target, effect);
  return Math.floor(baseValue);
};

export const actionTestItemEffect = (
  target: Rmmz_Battler,
  effect: ItemEffect,
): boolean => {
  switch (effect.code) {
    case EFFECT_RECOVER_HP:
      return hppxx(target, effect);
    case EFFECT_RECOVER_MP:
      return mppxx(target, effect);
    case EFFECT_ADD_STATE:
      return !target.isStateAffected(effect.dataId);
    case EFFECT_REMOVE_STATE:
      return target.isStateAffected(effect.dataId);
    case EFFECT_ADD_BUFF:
      return !target.isBuffAffected(effect.dataId);
    case EFFECT_REMOVE_BUFF:
      return target.isBuffAffected(effect.dataId);
    default:
      return true;
  }
};

const hppxx = (target: Rmmz_Battler, effect: ItemEffect): boolean => {
  return target.hp < target.mhp || effect.value1 < 0 || effect.value2 < 0;
};

const mppxx = (target: Rmmz_Battler, effect: ItemEffect): boolean => {
  return target.mp < target.mmp || effect.value1 < 0 || effect.value2 < 0;
};
