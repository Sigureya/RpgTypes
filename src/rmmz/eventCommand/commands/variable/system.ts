import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import type {
  Command_ControlVariables,
  Operand_OtherData,
  OTHER,
  ParamObject_WritingTarget,
} from "./types";

export const makeCommandSystemPlaytime = (
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
      4 satisfies OTHER["PLAY_TIME"],
    ],
  };
};
