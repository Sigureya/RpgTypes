import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_SetEventLocation extends EventCommandLike<203> {
  parameters: ParamArray_SetEventLocation;
}

export type ParamArray_SetEventLocation = [
  mapId: number,
  eventId: number,
  x: number,
  y: number,
  direction: Direction8
];
