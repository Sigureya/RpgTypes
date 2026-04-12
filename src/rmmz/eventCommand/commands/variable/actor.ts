import type { VariableOperation } from "@RpgTypes/libs/eventCommand";
import { CONTROL_VARIABLES, OPERATION_SET } from "@RpgTypes/libs/eventCommand";
import { OPERAND_GAMEDATA } from "./constants";
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

export const makeCommandVaribaleFromActorMaxHp = (
  target: ParamObject_WritingTarget,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_ActorStatus> => {
  return makeCommandVariableFromActorStatusData(
    target,
    { index: 0, param: 0 },
    other,
  );
};
