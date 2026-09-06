import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_SPECIAL_FLAG,
} from "./core";
import type { Trait } from "./types";

/**
 * 特殊フラグ。Game_BattlerBase.specialFlag と同じく dataId で判定する。
 * value ではない。
 */
export const traitsSpecialFlag = (
  traits: ReadonlyArray<Trait>,
  flagId: number,
): boolean => {
  return traits.some(
    (trait) => trait.code === TRAIT_SPECIAL_FLAG && trait.dataId === flagId,
  );
};

export const traitsIsAutoBattle = (traits: ReadonlyArray<Trait>): boolean => {
  return traitsSpecialFlag(traits, FLAG_ID_AUTO_BATTLE);
};

/**
 * 防御の特徴を持つか。
 * Game_BattlerBase.isGuard は、これに加えて canMove() も見る。
 */
export const traitsIsGuard = (traits: ReadonlyArray<Trait>): boolean => {
  return traitsSpecialFlag(traits, FLAG_ID_GUARD);
};

/**
 * 身代わりの特徴を持つか。
 * Game_BattlerBase.isSubstitute は、これに加えて canMove() も見る。
 */
export const traitsIsSubstitute = (traits: ReadonlyArray<Trait>): boolean => {
  return traitsSpecialFlag(traits, FLAG_ID_SUBSTITUTE);
};

export const traitIsPreserveTp = (traits: ReadonlyArray<Trait>): boolean => {
  return traitsSpecialFlag(traits, FLAG_ID_PRESERVE_TP);
};

export const traitCollapseType = (traits: readonly Trait[]): number => {
  return traits.reduce(accCollapse, 0);
};

const accCollapse = (acc: number, trait: Trait): number => {
  if (trait.code === TRAIT_COLLAPSE_TYPE) {
    return Math.max(acc, trait.dataId);
  }
  return acc;
};
