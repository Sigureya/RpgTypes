import type { Command2_ShowMessageBody } from "./commands/message/showMessage/types";
import { isCommandTextBody } from "./validate";

export const isCommandShowMessageBody = (
  command: unknown
): command is Command2_ShowMessageBody => {
  return isCommandTextBody(command) && command.code === 401;
};
