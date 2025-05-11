import { SHOW_CHOICES } from "@RpgTypes/schema";
import type {
  Command2_ShowChoices,
  ParamArray_SetupChoice,
  ParamObject_SetupChoice,
} from "./types";

export const fromArraySetupChoice = (
  array: ParamArray_SetupChoice
): ParamObject_SetupChoice => {
  return {
    choices: array[0],
    cancelType: array[1],
    defaultType: array[2],
    positionType: array[3],
    background: array[4],
  };
};

export const toArraySetupChoice = (
  object: Partial<ParamObject_SetupChoice>
): ParamArray_SetupChoice => {
  return [
    object.choices ?? [],
    object.cancelType ?? 0,
    object.defaultType ?? 0,
    object.positionType ?? 2,
    object.background ?? 0,
  ];
};

export const makeCommandSetupChoice = (
  param: Partial<ParamObject_SetupChoice> | undefined,
  indent: number = 0
): Command2_ShowChoices => ({
  code: SHOW_CHOICES,
  indent,
  parameters: [
    param?.choices ?? [],
    param?.cancelType ?? 0,
    param?.defaultType ?? 0,
    param?.positionType ?? 2,
    param?.background ?? 0,
  ],
});
