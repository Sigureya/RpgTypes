import { evaluteArgments } from "./core/evaluteArgments";
import type { CommandExecuteResult } from "./core/types/commandResult";
import type { CommandDefine } from "./core/types/define";
import type {
  NewCommand_LocalNumberLiteral,
  NewCommand_CallNumberFunction,
} from "./types/localNumber";

export const LOCAL_NUMBER: CommandDefine<NewCommand_LocalNumberLiteral> = {
  execute: (command): CommandExecuteResult => ({
    result: {
      type: "number",
      value: command.arg.value,
    },
  }),
};

export const CALL_NUMBER_FUNCTION: CommandDefine<NewCommand_CallNumberFunction> =
  {
    execute: (command, eventState, func) => {
      const args = evaluteArgments(eventState, command.arg.functionArgs, func);
      return {
        result: {
          type: "number",
          value: func.callNumber(eventState, command.arg.functionName, args),
        },
      };
    },
  };
