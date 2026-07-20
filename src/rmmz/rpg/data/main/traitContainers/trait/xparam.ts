import {
  TRAIT_XPARAM,
  XPARAM_HIT_RATE,
  XPARAM_CEV_CRITICAL_EVASION_RATE,
  XPARAM_CNT_COUNTER_ATTACK_RATE,
  XPARAM_EVA_RATE,
  XPARAM_HRG_HP_REGEN_RATE,
  XPARAM_MCR_MAGIC_EVASION_RATE,
  XPARAM_MRG_MP_REGEN_RATE,
  XPARAM_MRF_MAGIC_REFLECTION_RATE,
  XPARAM_TRG_TP_REGEN_RATE,
  XPARAM_CRI_CRITICAL_RATE,
} from "./core";
import { traitSum } from "./trait";
import type { Trait } from "./types";

export const triatHitRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_HIT_RATE);
};

export const traitEvaRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_EVA_RATE);
};

export const traitCriticalRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_CRI_CRITICAL_RATE);
};

export const traitCriticalEvasionRate = (
  traits: ReadonlyArray<Trait>,
): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_CEV_CRITICAL_EVASION_RATE);
};

export const traitMagicEvasionRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_MCR_MAGIC_EVASION_RATE);
};

export const traitMagicReflectionRate = (
  traits: ReadonlyArray<Trait>,
): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_MRF_MAGIC_REFLECTION_RATE);
};

export const traitCounterAttackRate = (
  traits: ReadonlyArray<Trait>,
): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_CNT_COUNTER_ATTACK_RATE);
};

export const traitHpRegenRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_HRG_HP_REGEN_RATE);
};

export const traitMpRegenRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_MRG_MP_REGEN_RATE);
};

export const traitTpRegenRate = (traits: ReadonlyArray<Trait>): number => {
  return traitSum(traits, TRAIT_XPARAM, XPARAM_TRG_TP_REGEN_RATE);
};
