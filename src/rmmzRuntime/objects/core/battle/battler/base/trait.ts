import type { Trait } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_TraitContainer {
  traits(code: number): Trait[];
  allTraits(): Trait[];
  traitsWithId(code: number, id: number): Trait[];
  traitsPi(code: number, id: number): number;
  traitsSum(code: number, id: number): number;
  traitsSumAll(code: number): number;
  traitsSet(code: number): boolean;
  elementRate(elementId: number): number;
  debuffRate(paramId: number): number;
  stateRate(stateId: number): number;
  addedSkills(): number[];
}
