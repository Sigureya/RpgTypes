import type { ItemEffect } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";

export const calcItemEffectRecoverHp = (
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return (target.mhp * effect.value1 + effect.value2) * target.rec;
};

export const calcItemEffectRecoverMp = (
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return (target.mmp * effect.value1 + effect.value2) * target.rec;
};

export const actionTestEffcectRecoverHp = (
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return (target.mhp * effect.value1 + effect.value2) * target.rec;
};
