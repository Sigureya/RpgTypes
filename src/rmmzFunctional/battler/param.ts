import type { StatusParamObject } from "@RpgTypes/rmmz/rpg";
import {
  PARAM_AGI,
  PARAM_MAX_HP,
  PARAM_MAX_MP,
  PARAM_ATK,
  PARAM_DEF,
  PARAM_MAT,
  PARAM_MDF,
  PARAM_LUK,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_StatusParams } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/base/param";

export const battlerBaseParamPlus = (
  battler: Rmmz_StatusParams,
): StatusParamObject => {
  return {
    mhp: battler.paramBasePlus(PARAM_MAX_HP),
    mmp: battler.paramBasePlus(PARAM_MAX_MP),
    agi: battler.paramBasePlus(PARAM_AGI),
    atk: battler.paramBasePlus(PARAM_ATK),
    def: battler.paramBasePlus(PARAM_DEF),
    mat: battler.paramBasePlus(PARAM_MAT),
    mdf: battler.paramBasePlus(PARAM_MDF),
    luk: battler.paramBasePlus(PARAM_LUK),
  };
};

export const battlerBuffRate = (
  battler: Rmmz_StatusParams,
): StatusParamObject => {
  return {
    mhp: battler.paramBuffRate(PARAM_MAX_HP),
    mmp: battler.paramBuffRate(PARAM_MAX_MP),
    agi: battler.paramBuffRate(PARAM_AGI),
    atk: battler.paramBuffRate(PARAM_ATK),
    def: battler.paramBuffRate(PARAM_DEF),
    mat: battler.paramBuffRate(PARAM_MAT),
    mdf: battler.paramBuffRate(PARAM_MDF),
    luk: battler.paramBuffRate(PARAM_LUK),
  };
};
