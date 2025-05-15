import { SHOW_MESSAGE_BODY } from "@RpgTypes/schema";
import type { Command2_ShowMessageBody } from "./commands";
import { isCommandTextBody } from "./validate";

export const isCommandShowMessageBody = (
  command: unknown
): command is Command2_ShowMessageBody => {
  return isCommandTextBody(command) && command.code === SHOW_MESSAGE_BODY;
};
