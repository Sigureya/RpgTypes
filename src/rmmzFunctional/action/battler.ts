import type { ParamID, StatusParamObject } from "@RpgTypes/rmmz/rpg";
import {
  PARAM_AGI,
  PARAM_MAX_HP,
  PARAM_MAX_MP,
  PARAM_ATK,
  PARAM_DEF,
  PARAM_MAT,
  PARAM_MDF,
  PARAM_LUK,
  calculateParamRate,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const calculateBattlerParams = (
  battler: Rmmz_Battler,
): StatusParamObject => {
  const rate = calculateParamRate(battler.allTraits());
  return {
    agi: calcParam(rate.agi, PARAM_AGI, battler),
    atk: calcParam(rate.atk, PARAM_ATK, battler),
    def: calcParam(rate.def, PARAM_DEF, battler),
    mat: calcParam(rate.mat, PARAM_MAT, battler),
    mdf: calcParam(rate.mdf, PARAM_MDF, battler),
    mhp: calcParam(rate.mhp, PARAM_MAX_HP, battler),
    mmp: calcParam(rate.mmp, PARAM_MAX_MP, battler),
    luk: calcParam(rate.luk, PARAM_LUK, battler),
  };
};

const calcParam = (
  rate: number,
  paramId: ParamID,
  battler: Rmmz_Battler,
): number => {
  const basePlus = battler.paramBasePlus(paramId);
  const buffRate = battler.paramBuffRate(paramId);
  const paramMin = battler.paramMin(paramId);
  const paramMax = battler.paramMax(paramId);
  const value = basePlus * rate * buffRate;
  const clamped = Math.min(Math.max(value, paramMin), paramMax);
  return Math.round(clamped);
};
