import { traitTpChargeRate } from "./sparam";
import type { Trait } from "./types";
import { traitHpRegenRate, traitMpRegenRate } from "./xparam";

export const calculateHpRegenerate = (
  traits: ReadonlyArray<Trait>,
  maxHp: number,
): number => {
  const rate = traitHpRegenRate(traits);
  return Math.floor(maxHp * rate);
};

export const calculateMpRegenerate = (
  traits: ReadonlyArray<Trait>,
  maxMp: number,
): number => {
  const rate = traitMpRegenRate(traits);
  return Math.floor(maxMp * rate);
};

export const calculateTpRegenerate = (
  traits: ReadonlyArray<Trait>,
  maxTp: number,
): number => {
  const rate = traitTpChargeRate(traits);
  return Math.floor(maxTp * rate);
};
