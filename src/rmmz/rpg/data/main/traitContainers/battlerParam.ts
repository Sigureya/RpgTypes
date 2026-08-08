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
import type { ExtraParamObject } from "./members/paramArray/types";
import type { Trait } from "./trait";
import {
  TRAIT_PARAM,
  TRAIT_XPARAM,
  traitParamRate,
  XPARAM_HIT_RATE,
  XPARAM_EVA_RATE,
  XPARAM_CRI_CRITICAL_RATE,
} from "./trait";

export interface ParamCalculationOptions {
  buffRateStep: number;
  baseBuffRate: number;
}

export const calculateParamRate = (
  traits: ReadonlyArray<Trait>,
): StatusParamObject => {
  return traits.reduce(accParamRate, makeEmeptyStatusParamObject(1));
};

export const calculateParam2 = (traits: ReadonlyArray<Trait>) => {
  const initial: StatusParamObject & ExtraParamObject = {
    agi: 1,
    atk: 1,
    def: 1,
    mat: 1,
    mdf: 1,
    mhp: 1,
    mmp: 1,
    luk: 1,
    hit: 1,
    eva: 1,
    cri: 1,
    cev: 1,
    mev: 1,
    mrf: 1,
    cnt: 1,
    hrg: 1,
    mrg: 1,
    trg: 1,
    tgr: 1,
    grd: 1,
  };
  return traits.reduce(acccEX, initial);
};

const acccEX = (acc: StatusParamObject & ExtraParamObject, trait: Trait) => {
  const acc1 = accParamRate(acc, trait);
  const acc2 = accEparam(acc1, trait);
  return acc2;
};

const accParamRate = <T extends StatusParamObject>(acc: T, trait: Trait): T => {
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

const accEparam = <T extends ExtraParamObject>(params: T, trait: Trait): T => {
  if (trait.code !== TRAIT_XPARAM) {
    return params;
  }
  if (trait.dataId === XPARAM_HIT_RATE) {
    params.hit *= trait.value;
  }
  if (trait.dataId === XPARAM_EVA_RATE) {
    params.eva *= trait.value;
  }
  if (trait.dataId === XPARAM_CRI_CRITICAL_RATE) {
    params.cri *= trait.value;
  }
  return params;
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
