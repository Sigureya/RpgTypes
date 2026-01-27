import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import type {
  Command_ControlVariables,
  Operand_OtherData,
  OTHER,
  ParamObject_WritingTarget,
} from "./types";

export const makeCommandVariableFromPlaytime = (
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
      3, // Game Data
      7, // Other
      4 satisfies OTHER["PLAY_TIME"], // Play Time
    ],
  };
};

export const makeCommandSystemTimer = (
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
      5 satisfies OTHER["TIMER"],
    ],
  };
};

export const makeCommandSystemSaveCount = (
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
      6 satisfies OTHER["SAVE_COUNT"],
    ],
  };
};

export const makeCommandSystemBattleCount = (
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
      7 satisfies OTHER["BATTLE_COUNT"],
    ],
  };
};

export const makeCommandSystemWinCount = (
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
      8 satisfies OTHER["WIN_COUNT"],
    ],
  };
};

export const makeCommandSystemEscapeCount = (
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
      9 satisfies OTHER["ESCAPE_COUNT"],
    ],
  };
};
