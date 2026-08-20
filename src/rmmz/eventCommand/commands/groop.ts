/* eslint-disable @functional/no-loop-statements */
import { SHOW_MESSAGE, SHOW_MESSAGE_BODY } from "@RpgTypes/libs";
import type { EventCommand } from "./union";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "./message";

export interface EventCommandGroupV2<
  Head extends EventCommand,
  Body extends EventCommand,
> {
  head: Head;
  bodies: Body[];
}

export const groupByMessageCommands = (
  list: ReadonlyArray<EventCommand>,
  index: number,
): null | EventCommandGroupV2<
  Command_ShowMessageHeader,
  Command_ShowMessageBody
> => {
  return groopXXX2(
    list,
    index,
    (command) => command.code === SHOW_MESSAGE,
    (command) => command.code === SHOW_MESSAGE_BODY,
  );
};

const groopXXX2 = <TC1 extends EventCommand, TC2 extends EventCommand>(
  list: ReadonlyArray<EventCommand>,
  index: number,
  fn1: (command: EventCommand) => command is TC1,
  fn2: (command: EventCommand) => command is TC2,
): null | EventCommandGroupV2<TC1, TC2> => {
  const head = list[index];
  if (!fn1(head)) {
    return null;
  }

  const temp: TC2[] = [];
  // eslint-disable-next-line @functional/no-let
  for (let i = index + 1; i < list.length; i++) {
    const command = list[i];
    if (fn2(command)) {
      temp.push(command);
    } else {
      return { head: head, bodies: temp };
    }
  }
  return { head: head, bodies: temp };
};
