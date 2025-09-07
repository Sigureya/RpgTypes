import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { GET_LOCATION_INFO } from "@RpgTypes/rmmz/rpg";
import type { Designation } from "@RpgTypes/rmmz/utils";

export interface Command_GetLocationInfo
  extends EventCommandLike<typeof GET_LOCATION_INFO> {
  parameters: ParamArray_GetLocationInfo;
}

export type ParamArray_GetLocationInfo = [
  variableId: number,
  mode: number,
  designation: ValueOf<Designation>,
  x: number,
  y: number
];
