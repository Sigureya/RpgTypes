import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_PRESERVE_TP,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_SPECIAL_FLAG,
} from "./core";
import type { Trait } from "./types";

export const traitsIsAutoBattle = (traits: ReadonlyArray<Trait>): boolean => {
  return traits.some(
    (trait) =>
      trait.code === TRAIT_SPECIAL_FLAG && trait.dataId === FLAG_ID_AUTO_BATTLE,
  );
};

export const traitIsPreserveTp = (trait: readonly Trait[]): boolean => {
  return trait.some(
    (trait) =>
      trait.code === TRAIT_SPECIAL_FLAG && trait.dataId === FLAG_ID_PRESERVE_TP,
  );
};

export const traitCollapseType = (traits: readonly Trait[]): number => {
  return traits.reduce(accCollapse, 0);
};

const accCollapse = (acc: number, tarits: Trait) => {
  if (tarits.code === TRAIT_COLLAPSE_TYPE) {
    return Math.max(acc, tarits.dataId);
  }
  return acc;
};
