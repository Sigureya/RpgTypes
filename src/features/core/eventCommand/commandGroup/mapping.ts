import type { EventCommand } from "@RpgTypes/rmmz";
import {
  COMMENT_HEAD,
  SCRIPT_EVAL,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
} from "@RpgTypes/rmmz";
import { createCommentGroup } from "./comment";
import type { GroopMapper } from "./core";
import { createMessageGroup } from "./message";
import { createScriptGroup } from "./script";
import { createScrollTextGroup } from "./scrollText";

const table: Record<
  number,
  <T>(array: EventCommand[], index: number, mapper: GroopMapper<T>) => T
> = {
  [SHOW_MESSAGE]: <T>(
    array: EventCommand[],
    index: number,
    mapper: GroopMapper<T>
  ): T => mapper.showMessage(createMessageGroup(array, index), index, array),
  [SCRIPT_EVAL]: <T>(
    array: EventCommand[],
    index: number,
    mapper: GroopMapper<T>
  ): T => mapper.script(createScriptGroup(array, index), index, array),
  [COMMENT_HEAD]: <T>(
    array: EventCommand[],
    index: number,
    mapper: GroopMapper<T>
  ): T => mapper.comment(createCommentGroup(array, index), index, array),
  [SHOW_SCROLLING_TEXT]: <T>(
    array: EventCommand[],
    index: number,
    mapper: GroopMapper<T>
  ): T =>
    mapper.showScrollingText(createScrollTextGroup(array, index), index, array),
};

export const mappingGroupCommand2 = <T, U>(
  array: EventCommand[],
  index: number,
  mapper: GroopMapper<T>,
  fallback: (array: EventCommand[], index: number) => U
): T | U => {
  const fn = table[array[index].code as keyof typeof table];
  return fn ? fn(array, index, mapper) : fallback(array, index);
};
