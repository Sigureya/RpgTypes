import type { ItemEffect, Data_UsableItem, Trait } from "@RpgTypes/rmmz/rpg";
import {
  isMagicalHit,
  isPhysicalHit,
  traitAttackStateRate,
  traitsEffectiveStateRate,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";

/**
 * 運の差による補正。luk は param() 経由なので読むだけで重い。
 * 数値で受け取り、読むのは呼び出し元の 1 回だけにする。
 */
export const lukEffectRate = (subjectLuk: number, targetLuk: number): number => {
  const luk = 1.0 + (subjectLuk - targetLuk) * 0.001;
  return Math.max(luk, 0.0);
};

/**
 * 通常攻撃によるステート付与率。
 *
 * バトラーではなく特徴の配列と補正値を受け取る。効果ごとに
 * target.stateRate / subject.attackStatesRate / luk を読むと、
 * その都度 allTraits() が組み直される。
 * 実測: ステート 6 個で 19823ns → 4025ns。performance.md [HOTL]
 *
 * 無効化されているステートは 0 が返る。呼び出し元はそこで打ち切ってよい。
 * コアスクリプトは倍率を出してから乱数を引き、addState 側で無効化を弾くため、
 * 乱数の消費回数はコアとずれる。ここでは呼び出し回数の削減を優先し、
 * ずれを許容する (再構成であり、乱数列の再現は目的にしていない)。
 */
export const traitsCalcAttackStateRate = (
  stateId: number,
  subjectTraits: ReadonlyArray<Trait>,
  targetTraits: ReadonlyArray<Trait>,
  lukRate: number,
  effect: ItemEffect,
): number => {
  return (
    effect.value1 *
    traitsEffectiveStateRate(targetTraits, stateId) *
    traitAttackStateRate(subjectTraits, stateId) *
    lukRate
  );
};

/** 効果で指定されたステートの付与率。 */
export const traitsCalcNormalStateRate = (
  targetTraits: ReadonlyArray<Trait>,
  lukRate: number,
  effect: ItemEffect,
): number => {
  return (
    effect.value1 * traitsEffectiveStateRate(targetTraits, effect.dataId) * lukRate
  );
};

/**
 * バトラーから重いメンバを 1 回ずつ読んで渡す。
 * 効果が複数あるなら、この関数ではなく traits* を使い、
 * allTraits() と luk の読み出しを呼び出し元で 1 回に畳む。
 */
export const actionCalcAttackStateRate = (
  stateId: number,
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return traitsCalcAttackStateRate(
    stateId,
    subject.allTraits(),
    target.allTraits(),
    lukEffectRate(subject.luk, target.luk),
    effect,
  );
};

export const actionCalcNormalStateRate = (
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
  effect: ItemEffect,
): number => {
  return traitsCalcNormalStateRate(
    target.allTraits(),
    lukEffectRate(subject.luk, target.luk),
    effect,
  );
};

export const actionItemMrf = (
  data: Data_UsableItem,
  target: Rmmz_BattlerBase,
): number => {
  return isMagicalHit(data) ? target.mrf : 0;
};

export const actionItemHit = (
  data: Data_UsableItem,
  subject: Rmmz_BattlerBase,
): number => {
  if (isPhysicalHit(data)) {
    return data.successRate * 0.01 * subject.hit;
  }
  return data.successRate * 0.01;
};

export const actionItemEva = (
  data: Data_UsableItem,
  target: Rmmz_BattlerBase,
): number => {
  if (isPhysicalHit(data)) {
    return target.eva;
  }
  if (isMagicalHit(data)) {
    return target.mev;
  }
  return 0;
};

export const actionItemCri = (
  data: Data_UsableItem,
  subject: Rmmz_BattlerBase,
  target: Rmmz_BattlerBase,
): number => {
  if (data.damage.critical) {
    return subject.cri * (1 - target.cev);
  }
  return 0;
};
