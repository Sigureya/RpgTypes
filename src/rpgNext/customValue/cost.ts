import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { ACTION_COST_HP, ACTION_COST_MP } from "./constants";
import type { ActionCost, ActionTotalCost } from "./customValue";

export const calcTotalCost = (
  battler: Rmmz_BattlerBase,
  cost: ReadonlyArray<ActionCost>,
): ActionTotalCost => {
  return {
    hp: 0,
    mp: 0,
    tp: 0,
  };
};

interface BattlerVVV {
  hp: number;
  mp: number;
  tp: number;
}

export const canPayActionCost2 = (
  battler: BattlerVVV,
  cost: ActionTotalCost,
): boolean => {
  return (
    battler.hp >= cost.hp && battler.mp >= cost.mp && battler.tp >= cost.tp
  );
};

export const canPayActionCost = (
  battler: Rmmz_BattlerBase,
  cost: ActionCost,
): boolean => {
  if (cost.code === ACTION_COST_HP) {
    return canPayByHp(battler, cost);
  }
  if (cost.code === ACTION_COST_MP) {
    return canPayByMp(battler, cost);
  }
  return true;
};

const canPayByHp = (battler: Rmmz_BattlerBase, cost: ActionCost): boolean => {
  return battler.hp >= cost.value;
};

const canPayByMp = (battler: Rmmz_BattlerBase, cost: ActionCost): boolean => {
  const mp = cost.value * battler.mcr;
  return battler.mp >= mp;
};
