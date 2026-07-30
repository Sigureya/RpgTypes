import { FLAG_ID_PRESERVE_TP, TRAIT_SPECIAL_FLAG } from "./core";
import type { Trait } from "./types";

export const traitIsPreserveTp = (trait: readonly Trait[]): boolean => {
  return trait.some(
    (trait) =>
      trait.code === TRAIT_SPECIAL_FLAG && trait.dataId === FLAG_ID_PRESERVE_TP,
  );
};
