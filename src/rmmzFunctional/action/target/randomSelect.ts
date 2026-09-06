import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
} from "@RpgTypes/rmmz/rpg";
import { battlerIsAlive, battlerIsDead } from "./support";
import type { Provider_Battlers, Targetable } from "./types";

export const battlersDecideRandomTarget = <T extends Targetable>(
  item: Data_UsableItem,
  units: Provider_Battlers<T>,
  randomValue: number,
): T[] => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(units.friendsUnit(), randomValue);
  }
  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(units.friendsUnit(), randomValue);
  }
  return battlersRandomAliveTarget(units.opponentsUnit(), randomValue);
};

const accumulateTgr = (acc: number, tgr: number): number => {
  return acc + tgr;
};

const readTgr = (battler: Targetable): number => battler.tgr;

export const battlersRandomTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomFn: () => number,
  repeat: number = 1,
): T[] => {
  if (battlers.length === 0) {
    return [];
  }
  if (battlers.length === 1) {
    return new Array<T>(repeat).fill(battlers[0]);
  }
  // tgr は値ではなく計算である。コアスクリプトでは
  // tgr -> sparam(0) -> traitsPi -> allTraits() と辿り、1 回読むだけで
  // traitObjects を concat で畳んで配列を複数作る。
  // したがって 1 人につき 1 回だけ読み、数値の配列に控える。
  // 実測 (味方 8 人 / 特徴を持つ物 8 個): 読み直す形 9610ns → 6901ns。
  // repeat=3 では 18205ns → 6781ns。performance.md [GETR]
  const tgrList: number[] = battlers.map(readTgr);
  const tgrSum: number = tgrList.reduce(accumulateTgr, 0);
  return new Array<null>(repeat)
    .fill(null)
    .map(() => randomSelect(battlers, tgrList, randomFn() * tgrSum));
};

/**
 * 重みの合計から引いていき、0 を下回った時点の 1 人を返す。
 *
 * 見つけた時点で抜けるので for のまま残す (style.md [LOOP] の例外)。
 * reduce へ直すと最後まで走ることになり、実測でこの部分だけ 2 倍近く遅い。
 * 全体では tgr の読み出しが支配的なので差は 1% 程度だが、速くはならない。
 */
const randomSelect = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  tgrList: ReadonlyArray<number>,
  remainingTgr: number,
): T => {
  let targetTgr = remainingTgr;
  for (let i = 0; i < tgrList.length; i++) {
    targetTgr -= tgrList[i];
    if (targetTgr <= 0) {
      return battlers[i];
    }
  }
  return battlers[battlers.length - 1];
};

export const battlersRandomDeadTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T[] => {
  const filted = battlers.filter(battlerIsDead);
  return battlersRandomTarget(filted, () => randomValue);
};

export const battlersRandomAliveTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T[] => {
  const filted = battlers.filter(battlerIsAlive);
  return battlersRandomTarget(filted, () => randomValue);
};

export const actionDecideRandomTarget = <
  B1 extends Targetable,
  B2 extends Targetable,
>(
  item: Data_UsableItem,
  friendsUnit: ReadonlyArray<B1>,
  opponentsUnit: ReadonlyArray<B2>,
  randomValue: number,
): (B1 | B2)[] => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(friendsUnit, randomValue);
  }

  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(friendsUnit, randomValue);
  }

  return battlersRandomAliveTarget(opponentsUnit, randomValue);
};
