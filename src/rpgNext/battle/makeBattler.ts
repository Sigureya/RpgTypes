import type { StatusParamObject, Data_Enemy } from "@RpgTypes/rmmz";
import { paramArrayToObject } from "@RpgTypes/rmmz";
import { calculateParamRate } from "@RpgTypes/rmmz/rpg/data/main/traitContainers/battlerParam";

export interface NewBattler {
  name: string;
  baseParams: StatusParamObject;
  paramRates: StatusParamObject;
  variables: BattlerVariables;
}

export interface BattlerVariables {
  hp: number;
  mp: number;
  tp: number;
  states: NewState[];
  buffPlus: BuffItem[];
  buffRate: BuffItem[];
  turnCount: number;
  custom: {
    booleans: Record<string, boolean>;
    numbers: Record<string, number>;
    objects: Record<string, object>;
  };
}

export interface BuffItem {
  startTurn: number;
  paramId: number;
  sourceBattlerId: number;
  value: number;
}

export interface NewState {
  stateId: number;
  startTurn: number;
  turnLimit: number;
  sourceBattlerId: number;
}

export const makeBattlerFromEnemy = (enemy: Data_Enemy): NewBattler => {
  const params = paramArrayToObject(enemy.params);

  return {
    name: enemy.name,
    paramRates: calculateParamRate(enemy.traits),
    baseParams: params,
    variables: {
      turnCount: 0,
      hp: params.mhp,
      mp: params.mmp,
      tp: 0,
      states: [],
      custom: {
        booleans: {},
        numbers: {},
        objects: {},
      },
      buffPlus: [],
      buffRate: [],
    },
  };
};
