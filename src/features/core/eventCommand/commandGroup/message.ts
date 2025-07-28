import type {
  EventCommand,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@RpgTypes/rmmz";
import { SHOW_MESSAGE, SHOW_MESSAGE_BODY } from "@RpgTypes/rmmz";
import { pickCommands, SimpleEventCommandGroup } from "./core";

export const extractMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    (a) => a.code === SHOW_MESSAGE,
    (b) => b.code === SHOW_MESSAGE_BODY
  );
};

export const createMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodies, header } = extractMessageGroup(list, index);
  return new SimpleEventCommandGroup<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, header, bodies);
};
