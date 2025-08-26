import type { CommandDefine } from "./types/define";
import type { FunctionsTable } from "./types/functions";
import type { NewCommand_If } from "./types/if";
import type { EventState } from "./types/state";

const IF: CommandDefine<NewCommand_If> = {
  execute: (command, state, func) => {
    const value: number = ccc(command, state, func);
    return {
      result: {
        type: "number",
        value,
      },
    };
  },
};

const ccc = (
  command: NewCommand_If,
  state: EventState,
  func: FunctionsTable
): number => {
  return func.callBoolean(
    state,
    command.arg.condition.name,
    command.arg.condition.args
  )
    ? func.callNumber(
        state,
        command.arg.thenValue.name,
        command.arg.thenValue.args
      )
    : func.callNumber(
        state,
        command.arg.elseValue.name,
        command.arg.elseValue.args
      );
};
