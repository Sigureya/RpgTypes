import type {
  Command_RecoverAll,
  Command_RecoverAllTargetVariable,
  RecoverTarget,
} from "./types";

export const isCommandRecoverAllUsingVariable = (
  command: Command_RecoverAll
): command is Command_RecoverAllTargetVariable => {
  return command.parameters[0] === 1;
};

export const makeCommandRecoverAll = (
  indent: number = 0
): Command_RecoverAll => ({
  code: 314,
  indent,
  parameters: [0 satisfies RecoverTarget["EACH_MEMBER"], 0],
});

export const makeCommandRecoverAllTarget = (
  param: {
    targetSelectVariableId: number;
  },
  indent: number = 0
): Command_RecoverAllTargetVariable => ({
  code: 314,
  indent,
  parameters: [1, param.targetSelectVariableId],
});
