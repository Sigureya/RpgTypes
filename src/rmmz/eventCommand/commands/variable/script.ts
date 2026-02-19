import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import { OPERAND_SCRIPT } from "./constants";
import type { MakeOtherParam } from "./otherTypes";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_Script,
  Operand_Script,
  Command_ControlVariables,
} from "./types";

export const toArrayOperandScript = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Script,
  operation: number = 0,
): Operand_Script => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_SCRIPT,
  value.code,
];

export const makeCommandVariableFromScript = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Script,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_Script> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandScript(target, value, other.operation ?? 0),
  };
};
