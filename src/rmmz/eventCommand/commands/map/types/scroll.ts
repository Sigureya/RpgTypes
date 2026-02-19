import type { EventCommandLike, SCROLL_MAP } from "@RpgTypes/libs/eventCommand";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_ScrollMap extends EventCommandLike<typeof SCROLL_MAP> {
  parameters: ParamArray_ScrollMap;
}

export type ParamArray_ScrollMap = [
  direction: Direction8,
  distance: number,
  speed: number,
  waiting: boolean,
];

export interface ParamObject_ScrollMap {
  direction: Direction8;
  distance: number;
  speed: number;
  waiting: boolean;
}
