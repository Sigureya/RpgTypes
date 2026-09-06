import {
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_PARAM,
  TRAIT_SPARAM,
  TRAIT_STATE_RATE,
} from "./core";
import { traitAttackElements } from "./action";
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

/**
 * 属性が複数ある場合、有効度が最も高いものを採る。
 *
 * バトラーではなく特徴の配列を受け取る。elementRate(id) を属性ごとに呼ぶと
 * その都度 allTraits() が組み直される (performance.md [HOTL])。
 */
export const traitsElementMaxRate = (
  traits: ReadonlyArray<Trait>,
  elements: ReadonlyArray<number>,
): number => {
  if (elements.length === 0) {
    return 1.0;
  }
  return elements.reduce((acc, elementId): number => {
    return Math.max(acc, traitElementRate(traits, elementId));
  }, Number.MIN_VALUE);
};

/**
 * 属性 ID が負なら「通常攻撃」。攻撃属性の中で最も有効なものを採る。
 */
export const traitsCalcElementRate = (
  traits: ReadonlyArray<Trait>,
  elementId: number,
): number => {
  if (elementId < 0) {
    return traitsElementMaxRate(traits, traitAttackElements(traits));
  }
  return traitElementRate(traits, elementId);
};
