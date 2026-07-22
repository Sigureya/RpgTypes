import {
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_PARAM,
  TRAIT_SPARAM,
  TRAIT_STATE_RATE,
} from "./core";
import { traitPi } from "./trait";
import type { Trait } from "./types";

export const traitParamRate = (
  traits: ReadonlyArray<Trait>,
  paramId: number,
): number => {
  return traitPi(traits, TRAIT_PARAM, paramId);
};

export const traitSparam = (
  traits: ReadonlyArray<Trait>,
  sparamId: number,
): number => {
  return traitPi(traits, TRAIT_SPARAM, sparamId);
};

export const traitElementRate = (
  traits: ReadonlyArray<Trait>,
  elementId: number,
): number => {
  return traitPi(traits, TRAIT_ELEMENT_RATE, elementId);
};

export const traitDebuffRate = (
  traits: ReadonlyArray<Trait>,
  paramId: number,
): number => {
  return traitPi(traits, TRAIT_DEBUFF_RATE, paramId);
};

export const traitStateRate = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): number => {
  return traitPi(traits, TRAIT_STATE_RATE, stateId);
};
