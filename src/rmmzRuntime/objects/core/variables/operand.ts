import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  ParamArray_ChangeActorHP,
  ParamArray_ChangeActorMP,
  ParamArray_ChangeActorTP,
  ParamArray_ChangeActorValue,
  ParamArray_ChangeArmors,
  ParamArray_ChangeEnemyHP,
  ParamArray_ChangeGold,
  ParamArray_ChangeItems,
  ParamArray_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  ParamArray_ChangeEnemyMP,
  ParamArray_ChangeEnemyTP,
} from "@RpgTypes/rmmz/eventCommand/commands/enemy/change";
import type { Rmmz_Variables } from "./types";

export const operateValue = (
  variables: Rmmz_Variables,
  operantion: number,
  operandType: 0 | 1,
  operandValue: number,
): number => {
  const value =
    operandType === 0 ? operandValue : variables.value(operandValue);
  return operantion === 0 ? value : -value;
};

export const operateValue012 = (
  variables: Rmmz_Variables,
  param: ParamArray_ChangeGold,
): number => {
  return operateValue(variables, param[0], param[1], param[2]);
};

export const operateValue123 = (
  variables: Rmmz_Variables,
  param:
    | ParamArray_ChangeItems
    | ParamArray_ChangeWeapons
    | ParamArray_ChangeArmors
    | ParamArray_ChangeEnemyHP
    | ParamArray_ChangeEnemyMP
    | ParamArray_ChangeEnemyTP,
): number => {
  return operateValue(variables, param[1], param[2], param[3]);
};
