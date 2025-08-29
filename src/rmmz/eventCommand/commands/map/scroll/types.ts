import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Direction8, SCROLL_MAP } from "@RpgTypes/rmmz/rpg";

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
