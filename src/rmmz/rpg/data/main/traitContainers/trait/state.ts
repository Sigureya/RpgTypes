import { TRAIT_STATE_RESIST } from "./core";
import { traitStateRate } from "./rate";
import { someTraitMatched, traitSet } from "./trait";
import type { Trait } from "./types";

/**
 * ステートを無効化する特徴を持つか。
 * Game_BattlerBase.isStateResist と同じ (無効化されているとき true)。
 */
export const traitsIsStateResist = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): boolean => {
  return someTraitMatched(traits, TRAIT_STATE_RESIST, stateId);
};

/** 無効化しているステートの一覧。Game_BattlerBase.stateResistSet と同じ。 */
export const traitsStateResistSet = (
  traits: ReadonlyArray<Trait>,
): number[] => {
  return traitSet(traits, TRAIT_STATE_RESIST);
};

/**
 * 無効化まで含めたステートの有効倍率。無効化していれば 0。
 *
 * 付与の判定に使う。0 が返ったらそのステートの処理を打ち切ってよい。
 * 表示用に倍率だけが欲しい場合は traitStateRate を使う
 * (無効化とは別の値なので、混ぜない)。
 */
export const traitsEffectiveStateRate = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): number => {
  if (traitsIsStateResist(traits, stateId)) {
    return 0;
  }
  return traitStateRate(traits, stateId);
};
