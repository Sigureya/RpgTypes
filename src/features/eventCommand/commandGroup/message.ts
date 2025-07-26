import type {
  EventCommand,
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  isCommandShowMessage,
  isCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { pickCommands, SimpleEventCommandGroup } from "./core";

export const extractMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    isCommandShowMessage,
    isCommandShowMessageBody
  );
};

export const createMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodies, header } = extractMessageGroup(list, index);
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, header, bodies);
};
