import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import type {
  ParamObject_WritingTarget,
  Command_ControlVariables,
  Operand_OtherData,
  OTHER,
} from "./types";

export const makeCommandVariableFromMapId = (
  target: ParamObject_WritingTarget,
  operation: number = 0,
): Command_ControlVariables<Operand_OtherData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: [
      target.startId,
      target.endId ?? target.startId,
      operation,
      3,
      7,
      0 satisfies OTHER["MAP_ID"],
    ],
  };
};

export const makeCommandVariableFromPartyMembers = (
  target: ParamObject_WritingTarget,
  operation: number = 0,
): Command_ControlVariables<Operand_OtherData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: [
      target.startId,
      target.endId ?? target.startId,
      operation,
      3,
      7,
      1 satisfies OTHER["PARTY_MEMBERS"],
    ],
  };
};
export const makeCommandVariableFromPartySteps = (
  target: ParamObject_WritingTarget,
  operation: number = 0,
): Command_ControlVariables<Operand_OtherData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: [
      target.startId,
      target.endId ?? target.startId,
      operation,
      3,
      7,
      3 satisfies OTHER["STEPS"],
    ],
  };
};

export const makeCommandVariableFromPartyGold = (
  target: ParamObject_WritingTarget,
  operation: number = 0,
): Command_ControlVariables<Operand_OtherData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: [
      target.startId,
      target.endId ?? target.startId,
      operation,
      3,
      7,
      2 satisfies OTHER["GOLD"],
    ],
  };
};
