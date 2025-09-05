import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SCROLL_MAP } from "@RpgTypes/rmmz/rpg";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_ScrollMap
  extends EventCommandLike2<typeof SCROLL_MAP> {
  parameters: ParamArray_ScrollMap;
}

export type ParamArray_ScrollMap = [
  direction: Direction8,
  distance: number,
  speed: number,
  waiting: boolean
];
