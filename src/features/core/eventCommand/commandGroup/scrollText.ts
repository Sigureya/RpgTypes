import {
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz";
import { pickCommands, SimpleEventCommandGroup } from "./core";

export const extractScrollTextGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  return pickCommands(
    list,
    index,
    (cmd) => cmd.code === SHOW_SCROLLING_TEXT,
    (cmd) => cmd.code === SHOW_SCROLLING_TEXT_BODY,
  );
};

export const createScrollTextGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  const { bodies, header } = extractScrollTextGroup(list, index);
  return new SimpleEventCommandGroup(SHOW_SCROLLING_TEXT_BODY, header, bodies);
};
