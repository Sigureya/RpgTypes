import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERAND_GAMEDATA } from "./constants";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_ActorStatus,
  Operand_ActorStatus,
  Command_ControlVariables,
} from "./types";
import type { MakeOtherParam } from "./types/other";

export const toArrayOperandActorStatus = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  operation: number = 0
): Operand_ActorStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  3,
  value.index,
  value.param,
];

export const makeCommandVariableFromStatusData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_ActorStatus> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandActorStatus(target, value, other.operation ?? 0),
  };
};
