import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { ACTION_COST_HP, ACTION_COST_MP, ACTION_COST_TP } from "./constants";
import type { ActionCost, ActionTotalCost } from "./types";

export const calcTotalActionCost = (
  cost: ReadonlyArray<ActionCost>,
): ActionTotalCost => {
  return cost.reduce<ActionTotalCost>(
    (total: ActionTotalCost, c): ActionTotalCost => {
      switch (c.code) {
        case ACTION_COST_HP:
          total.hp += c.value;
          break;
        case ACTION_COST_MP:
          total.mp += c.value;
          break;
        case ACTION_COST_TP:
          total.tp += c.value;
          break;
      }
      return total;
    },
    { hp: 0, mp: 0, tp: 0, variable: [] },
  );
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
