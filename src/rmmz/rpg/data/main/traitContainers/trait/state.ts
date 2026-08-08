import { TRAIT_STATE_RESIST } from "./core";
import type { Trait } from "./types";

export const traitsIsStateResist = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): boolean => {
  return traits.every((trait) => {
    return !(trait.code === TRAIT_STATE_RESIST && trait.dataId === stateId);
  });
};
