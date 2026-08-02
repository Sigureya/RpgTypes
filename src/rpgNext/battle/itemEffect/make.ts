import type { ItemEffect } from "@RpgTypes/rmmz";
import {
  EFFECT_EX_BOOLEAN_SET,
  EFFECT_EX_BOOLEAN_FLIP,
  EFFECT_EX_NUMBER_ADD,
  EFFECT_EX_NUMBER_DIV,
  EFFECT_EX_NUMBER_MUL,
  EFFECT_EX_NUMBER_SET,
  EFFECT_EX_NUMBER_SUB,
  EFFECT_EX_NUMBER_RESET,
} from "./constants";

export const makeEffectSetBoolean = (
  switchId: number,
  value: boolean,
): ItemEffect => {
  return {
    code: EFFECT_EX_BOOLEAN_SET,
    dataId: switchId,
    value1: value ? 1 : 0,
    value2: 0,
  };
};

export const makeEffectFlipBoolean = (switchId: number): ItemEffect => {
  return {
    code: EFFECT_EX_BOOLEAN_FLIP,
    dataId: switchId,
    value1: 0,
    value2: 0,
  };
};

export const makeEffectSetNumber = (
  variableId: number,
  value: number,
): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_SET,
    dataId: variableId,
    value1: value,
    value2: 0,
  };
};

export const makeEffectAddNumber = (
  variableId: number,
  value: number,
): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_ADD,
    dataId: variableId,
    value1: value,
    value2: 0,
  };
};

export const makeEffectSubNumber = (
  variableId: number,
  value: number,
): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_SUB,
    dataId: variableId,
    value1: value,
    value2: 0,
  };
};

export const makeEffectMulNumber = (
  variableId: number,
  value: number,
): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_MUL,
    dataId: variableId,
    value1: value,
    value2: 0,
  };
};

export const makeEffectDivNumber = (
  variableId: number,
  value: number,
): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_DIV,
    dataId: variableId,
    value1: value,
    value2: 0,
  };
};

export const makeEffectResetNumber = (variableId: number): ItemEffect => {
  return {
    code: EFFECT_EX_NUMBER_RESET,
    dataId: variableId,
    value1: 0,
    value2: 0,
  };
};
