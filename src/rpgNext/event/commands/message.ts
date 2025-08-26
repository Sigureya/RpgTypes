import type { CommandDefine } from "./core/types/define";
import type { NewCommand_ShowMessage } from "./types/showMessage";

export const COMMAND_MESSAGE: CommandDefine<NewCommand_ShowMessage> = {
  execute(command) {
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
