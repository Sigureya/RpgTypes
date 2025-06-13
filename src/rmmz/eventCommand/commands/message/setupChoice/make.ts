import { SHOW_CHOICES, SHOW_CHOICES_ITEM } from "@RpgTypes/rpg";
import type {
  ParamArray_SetupChoice,
  ParamObject_SetupChoice,
  Command_ShowChoices,
} from "./types/body";
import type {
  ParamObject_ShowChoiceWhen,
  Command_ShowChoiceWhen,
  ParamArray_ShowChoiceWhen,
} from "./types/item";

export const makeCommandShowChoiceItem = (
  param: Partial<ParamObject_ShowChoiceWhen> | undefined,
  indent: number = 0
): Command_ShowChoiceWhen => ({
  code: SHOW_CHOICES_ITEM,
  indent,
  parameters: [param?.index ?? 0, param?.name ?? ""],
});

export const fromArraySetupChoiceItem = (
  array: ParamArray_ShowChoiceWhen
): ParamObject_ShowChoiceWhen => ({
  index: array[0],
  name: array[1],
});

export const toArraySetupChoiceItem = (
  object: Partial<ParamObject_ShowChoiceWhen>
): ParamArray_ShowChoiceWhen => [object.index ?? 0, object.name ?? ""];

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
): Command_ShowChoices => ({
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

export const cloneChoices = (
  command: Command_ShowChoices
): Command_ShowChoices => {
  return {
    code: command.code,
    indent: command.indent,
    parameters: [
      [...command.parameters[0]],
      command.parameters[1],
      command.parameters[2],
      command.parameters[3],
      command.parameters[4],
    ],
  };
};
