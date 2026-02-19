import { SHOW_MESSAGE, SHOW_MESSAGE_BODY } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import { pickCommands, SimpleEventCommandGroup } from "./core";

export const extractMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  return pickCommands(
    list,
    index,
    (a): a is Command_ShowMessageHeader => a.code === SHOW_MESSAGE,
    (b): b is Command_ShowMessageBody => b.code === SHOW_MESSAGE_BODY,
  );
};

export const createMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  const { bodies, header } = extractMessageGroup(list, index);
  return new SimpleEventCommandGroup<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, header, bodies);
};
