import type { Data_Enemy, StatusParamObject } from "@RpgTypes/rmmz";
import { calcEquipParamsObject, paramArrayToObject } from "@RpgTypes/rmmz";
import { calculateParamRate } from "@RpgTypes/rmmz/rpg/data/main/traitContainers/battlerParam";
import type { Rmmz_Actor } from "@RpgTypes/rmmzRuntime";
import type { NewBattler } from "./types";

export const makeBattlerFromEnemy = (enemy: Data_Enemy): NewBattler => {
  const params = paramArrayToObject(enemy.params);
  return {
    name: enemy.name,
    paramRates: calculateParamRate(enemy.traits),
    baseParams: params,
    armors: [],
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

const baseParamxx = (actor: Rmmz_Actor): StatusParamObject => {
  const a = actor.armors();
  return calcEquipParamsObject(a);
};
