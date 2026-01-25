import type { EventCommandUnknown } from "@RpgTypes/rmmz/eventCommand";
import type { MapEvent_PageCondition } from "./condition";
import type { MoveRouteDataUnkwnown } from "./eventCommand/moveRoute";
import type { MapEvent_Image } from "./image/types";

export interface MapEventPage<
  T extends EventCommandUnknown = EventCommandUnknown,
> {
  conditions: MapEvent_PageCondition;
  list: T[];
  directionFix: boolean;
  image: MapEvent_Image;
  moveFrequency: number;
  moveRoute: MoveRouteDataUnkwnown;
  priorityType: number;
  walkAnime: boolean;
  stepAnime: boolean;
  through: boolean;
}
