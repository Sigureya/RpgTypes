import type { Data_Class } from "./class";
import type { Data_Enemy } from "./enemy";
import type { ParamArray } from "./members";
import type { Trait } from "./trait";
import { traitParamRate } from "./trait";

export interface ParamCalculationOptions {
  buffRateStep: number;
  baseBuffRate: number;
}

export const calculateClassDataParam = (
  paramId: number,
  class_: Data_Class,
  level: number,
  traits: ReadonlyArray<Trait>,
  paramPlus: ParamArray,
  buffs: ParamArray,
  option: ParamCalculationOptions,
): number => {
  const baseValue = classParamBase(paramId, class_, level);
  const paramPlusValue = paramPlus[paramId];
  const paramRate = traitParamRate(traits, paramId);
  const buffRate = paramBuffRate(paramId, buffs, option);
  return (baseValue + paramPlusValue) * paramRate * buffRate;
};

export const classParamBase = (
  paramId: number,
  class_: Data_Class,
  level: number,
): number => {
  const baseParamarray = class_.params[paramId];
  if (baseParamarray === undefined) {
    return 0;
  }
  const clampedLevel = Math.max(0, Math.min(level, baseParamarray.length - 1));
  return baseParamarray[clampedLevel];
};

export const calculateEnemyDataParam = (
  paramId: number,
  enemy: Data_Enemy,
  traits: ReadonlyArray<Trait>,
  paramPlus: ParamArray,
  buffs: ParamArray,
  option: ParamCalculationOptions,
): number => {
  const basePlus = enemyParamBasePlus(paramId, enemy, paramPlus);
  const paramRate = traitParamRate(traits, paramId);
  const buff = paramBuffRate(paramId, buffs, option);
  return basePlus * paramRate * buff;
};

const enemyParamBasePlus = (
  paramId: number,
  enemy: Data_Enemy,
  paramPlus: ParamArray,
): number => {
  return Math.max(0, enemy.params[paramId] + paramPlus[paramId]);
};

const paramBuffRate = (
  paramId: number,
  buffRate: ParamArray,
  options: ParamCalculationOptions,
): number => {
  return buffRate[paramId] * options.buffRateStep + options.baseBuffRate;
};
