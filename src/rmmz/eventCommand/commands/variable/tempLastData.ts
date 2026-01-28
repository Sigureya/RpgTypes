import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERATION_SET } from "./constants";
import type { MakeOtherParam } from "./otherTypes";
import type {
  Command_ControlVariables,
  Operand_LastData,
  ParamObject_Operand_LastData,
  ParamObject_WritingTarget,
} from "./types";
import { VARIABLE_SRC_LAST } from "./types/last/dataSource";

export const makeCommandVariableFromTempLastData = (
  target: ParamObject_WritingTarget,
  src: ParamObject_Operand_LastData,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_LastData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandTempLastData(target, src),
  };
};

const toArrayOperandTempLastData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_LastData,
): Operand_LastData => [
  target.startId,
  target.endId ?? target.startId,
  OPERATION_SET,
  3,
  8,
  VARIABLE_SRC_LAST[value.param],
];
