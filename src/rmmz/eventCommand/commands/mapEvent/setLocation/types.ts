import type {
  EventCommandLike,
  SET_EVENT_LOCATION,
} from "@RpgTypes/libs/eventCommand";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_SetEventLocation extends EventCommandLike<
  typeof SET_EVENT_LOCATION
> {
  parameters: ParamArray_SetEventLocation;
}

export type ParamArray_SetEventLocation = [
  mapId: number,
  eventId: number,
  x: number,
  y: number,
  direction: Direction8,
];
