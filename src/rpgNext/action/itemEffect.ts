import type { ItemEffect } from "@RpgTypes/rmmz";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

interface EffectXX {
  code: number;
  value: number;
  success: boolean;
}

const lukEffectRate = (subject: Rmmz_Battler, target: Rmmz_Battler) => {
  return Math.max(1.0 + (subject.luk - target.luk) * 0.001, 0.0);
};

const itemEffectRecoverHp = (target: Rmmz_Battler, effect: ItemEffect) => {
  const value = (target.mhp * effect.value1 + effect.value2) * target.rec;
};
