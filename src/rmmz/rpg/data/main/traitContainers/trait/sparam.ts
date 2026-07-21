import {
  TRAIT_SPARAM,
  SPARAM_TGR_TARGET_RATE,
  SPARAM_GRD_GUARD_EFFECT_RATE,
  SPARAM_REC_RECOVERY_EFFECT_RATE,
  SPARAM_PHA_PHARMACOLOGY_RATE,
  SPARAM_MCR_MAGIC_COST_RATE,
  SPARAM_TCR_TP_CHARGE_RATE,
  SPARAM_PDR_PHYSICAL_DAMAGE_RATE,
  SPARAM_MDR_MAGIC_DAMAGE_RATE,
  SPARAM_FDR_FLOOR_DAMAGE_RATE,
  SPARAM_EXR_EXPERIENCE_RATE,
} from "./core";
import { traitPi } from "./trait";
import type { Trait } from "./types";

export const traitTargetRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_TGR_TARGET_RATE);
};

export const traitGuardEffectRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_GRD_GUARD_EFFECT_RATE);
};

export const traitRecoveryEffectRate = (
  traits: ReadonlyArray<Trait>,
): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_REC_RECOVERY_EFFECT_RATE);
};

export const traitPharmacologyRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_PHA_PHARMACOLOGY_RATE);
};

export const traitMagicCostRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_MCR_MAGIC_COST_RATE);
};

export const traitTpChargeRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_TCR_TP_CHARGE_RATE);
};

export const traitPhysicalDamageRate = (
  traits: ReadonlyArray<Trait>,
): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_PDR_PHYSICAL_DAMAGE_RATE);
};

export const traitMagicDamageRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_MDR_MAGIC_DAMAGE_RATE);
};

export const traitFloorDamageRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_FDR_FLOOR_DAMAGE_RATE);
};

export const traitExperienceRate = (traits: ReadonlyArray<Trait>): number => {
  return traitPi(traits, TRAIT_SPARAM, SPARAM_EXR_EXPERIENCE_RATE);
};
