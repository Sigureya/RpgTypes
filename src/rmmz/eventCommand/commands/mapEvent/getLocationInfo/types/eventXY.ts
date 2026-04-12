import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";

export type Command_GetEventIdXY = EventCommandLike<
  typeof GET_LOCATION_INFO,
  [variableId: number, modeEventId: 1, designation: 0 | 1, x: number, y: number]
>;

export type ParamArray_GetEventIdXY = Command_GetEventIdXY["parameters"];
