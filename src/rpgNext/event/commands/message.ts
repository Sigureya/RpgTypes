import type { CommandDefine } from "./core/types/define";
import type { NewCommand_ShowMessage } from "./types/showMessage";

const COMMAND_MESSAGE: CommandDefine<NewCommand_ShowMessage> = {
  execute(command, state, func) {
    return {
      wait: {
        wait: "message",
        arg: {},
        count: 0,
      },
      sideEffect: {
        sideEffect: "message",
        arg: command.arg,
      },
    };
  },
};
