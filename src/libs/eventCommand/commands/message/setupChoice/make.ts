import { SHOW_CHOICES, SHOW_CHOICES_ITEM } from "@RpgTypes/schema";
import type {
  ParamArray_SetupChoice,
  ParamObject_SetupChoice,
  Command2_ShowChoices,
} from "./types/body";
import type {
  ParamObject_ShowChoiceItem,
  Command2_ShowChoiceItem,
  ParamArray_ShowChoiceItem,
} from "./types/item";

export const makeCommand2_ShowChoiceItem = (
  param: Partial<ParamObject_ShowChoiceItem> | undefined,
  indent: number = 0
): Command2_ShowChoiceItem => ({
  code: SHOW_CHOICES_ITEM,
  indent,
  parameters: [param?.index ?? 0, param?.name ?? ""],
});

export const fromArraySetupChoiceItem = (
  array: ParamArray_ShowChoiceItem
): ParamObject_ShowChoiceItem => ({
  index: array[0],
  name: array[1],
});

export const toArraySetupChoiceItem = (
  object: Partial<ParamObject_ShowChoiceItem>
): ParamArray_ShowChoiceItem => [object.index ?? 0, object.name ?? ""];

export const fromArraySetupChoice = (
  array: ParamArray_SetupChoice
): ParamObject_SetupChoice => ({
  choices: array[0],
  cancelType: array[1],
  defaultType: array[2],
  positionType: array[3],
  background: array[4],
});

export const toArraySetupChoice = (
  object: Partial<ParamObject_SetupChoice>
): ParamArray_SetupChoice => [
  object.choices ?? [],
  object.cancelType ?? 0,
  object.defaultType ?? 0,
  object.positionType ?? 2,
  object.background ?? 0,
];

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
