import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import { OPERAND_RANDOM } from "./constants";
import type { MakeOtherParam } from "./otherTypes";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_Random,
  Operand_Random,
  Command_ControlVariables,
} from "./types";

export const toArrayOperandRandom = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Random,
  operation: number = 0,
): Operand_Random => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_RANDOM,
  value.min,
  value.max,
];

export const makeCommandVariableFromRandom = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Random,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_Random> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandRandom(target, value, other.operation ?? 0),
  };
};
