import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import type { VariableOperation } from "./constants";
import { OPERAND_GAMEDATA, OPERATION_SET } from "./constants";
import type { MakeOtherParam } from "./otherTypes";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_ActorStatus,
  Operand_ActorStatus,
  Command_ControlVariables,
} from "./types";

export const toArrayOperandActorStatus = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  operation: VariableOperation = OPERATION_SET,
): Operand_ActorStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  3,
  value.index,
  value.param,
];

export const makeCommandVariableFromActorStatusData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_ActorStatus> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandActorStatus(target, value, other.operation ?? 0),
  };
};
