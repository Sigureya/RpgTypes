// 発生が確定したエフェクトを適用する関数

import { cloneBuffItem } from "./buff";
import { cloneStateInstance } from "./state/state";
import type { NewState } from "./state/types";
import type { BattlerVariables, BuffItem } from "./types";

interface ItemEffectEx {
  hp: number;
  mp: number;
  tp: number;
  removeBuffSet: ReadonlySet<number>;
  removeStateSet: ReadonlySet<number>;
  addState: ReadonlyArray<NewState>;
  buffPlus: ReadonlyArray<BuffItem>;
  buffRate: ReadonlyArray<BuffItem>;
}

const vwc = <T>(
  list: ReadonlyArray<T>,
  filterFn: (item: T) => boolean,
  addList: ReadonlyArray<T>,
): T[] => {
  return [...list.filter(filterFn), ...addList];
};

const itemEffectPPP = (
  battler: BattlerVariables,
  itemEffect: ItemEffectEx,
): Partial<BattlerVariables> => {
  const buffFilter = (buff: BuffItem): boolean => {
    return !itemEffect.removeBuffSet.has(buff.paramId);
  };
  return {
    turnCount: battler.turnCount,
    hp: battler.hp - itemEffect.hp,
    mp: battler.mp - itemEffect.mp,
    tp: battler.tp - itemEffect.tp,
    custom: battler.custom,
    buffPlus: vwc(
      battler.buffPlus,
      buffFilter,
      itemEffect.buffPlus.map(cloneBuffItem),
    ),
    buffRate: vwc(
      battler.buffRate,
      buffFilter,
      itemEffect.buffRate.map(cloneBuffItem),
    ),
    states: vwc(
      battler.states,
      (state) => !itemEffect.removeStateSet.has(state.stateId),
      itemEffect.addState.map(cloneStateInstance),
    ),
  };
};
