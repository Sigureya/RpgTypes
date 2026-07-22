import type { Data_Class } from "./class";
import type { Data_Enemy } from "./enemy";
import type { StatusParamObject, ParamArray } from "./members";
import {
  makeEmeptyStatusParamObject,
  PARAM_MAX_HP,
  PARAM_MAX_MP,
  PARAM_ATK,
  PARAM_DEF,
  PARAM_MAT,
  PARAM_MDF,
  PARAM_AGI,
  PARAM_LUK,
} from "./members";
import type { Trait } from "./trait";
import { TRAIT_PARAM, traitParamRate } from "./trait";

export interface ParamCalculationOptions {
  buffRateStep: number;
  baseBuffRate: number;
}

export const calculateParamRate = (
  traits: ReadonlyArray<Trait>,
): StatusParamObject => {
  return traits.reduce(accParamRate, makeEmeptyStatusParamObject(1));
};

const accParamRate = (
  acc: StatusParamObject,
  trait: Trait,
): StatusParamObject => {
  if (trait.code !== TRAIT_PARAM) {
    return acc;
  }
  if (trait.dataId === PARAM_MAX_HP) {
    acc.mhp *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_MAX_MP) {
    acc.mmp *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_ATK) {
    acc.atk *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_DEF) {
    acc.def *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_MAT) {
    acc.mat *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_MDF) {
    acc.mdf *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_AGI) {
    acc.agi *= trait.value;
    return acc;
  }
  if (trait.dataId === PARAM_LUK) {
    acc.luk *= trait.value;
    return acc;
  }
  return acc;
};

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
