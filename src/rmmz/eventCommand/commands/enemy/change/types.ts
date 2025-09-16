import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ENEMY_TP } from "@RpgTypes/rmmz/rpg";
import type { Designation, Operation_AddSub } from "@RpgTypes/rmmz/utils";

export interface Command_ChangeEnemyHP extends EventCommandLike<331> {
  parameters: ParamArray_ChangeEnemyHP;
}

export interface Command_ChangeEnemyMP extends EventCommandLike<332> {
  parameters: ParamArray_ChangeEnemyValue;
}

export interface Command_ChangeEnemyTP
  extends EventCommandLike<typeof CHANGE_ENEMY_TP> {
  parameters: ParamArray_ChangeEnemyValue;
}

export interface ParamObject_ChangeEnemyValue3 {
  enemyIndex: number;
  valueType: number;
  value: number;
}

export type ParamArray_ChangeEnemyValueTemplate<
  T extends {
    targetType: Designation["DIRECT"] | Designation["VARIABLE"];
    operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"];
  }
> = [
  index: number,
  operation: T["operation"],
  valueType: number,
  value: number
];

export type ParamObject_ChangeEnemyValue =
  | {
      targetType: "direct" | "variable";
      target: number;
      operand: Operand;
    }
  | {
      targetType: "each";
      operand: Operand;
    };

interface Operand {
  mode: "variable" | "direct";
  value: number;
}

export type ParamObject_ChangeEnemyHP = ParamObject_ChangeEnemyValue & {
  allowDeath: boolean;
};

export type ParamArray_LoseAllEnemyMP = ParamArray_ChangeEnemyValueTemplate<{
  targetType: Designation["DIRECT"];
  operation: Operation_AddSub["SUB"];
}>;

export type ParamArray_GainEnemyMP = ParamArray_ChangeEnemyValueTemplate<{
  targetType: Designation["DIRECT"];
  operation: Operation_AddSub["ADD"];
}>;

export type ParamArray_ChangeEnemyValue = [
  index: number,
  operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
  valueType: number,
  value: number
];

export type ParamArray_ChangeEnemyHP = [
  targetType: Designation["DIRECT"] | Designation["VARIABLE"],
  index: number,
  operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
  valueType: number,
  value: number,
  allowDeath: boolean
];
