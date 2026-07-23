import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromWeapon extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromWeapon;
}

export interface ParamObject_VariableFromWeapon {
  startId: number;
  endId?: number;
  operation?: VariableOperation;
  weaponId: number;
}

export type ParamArray_VariableFromWeapon = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeWeapon: 1,
  weaponId: number,
];
