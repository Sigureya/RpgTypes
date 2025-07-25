import type { EventCommandUnknown } from "@RpgTypes/eventCommand";
import type { MapEvent_PageCondition } from "./condition";
import type { EventCommand } from "./eventCommand";
import type { MoveRouteDataUnkwnown } from "./eventCommand/moveRoute";
import type { MapEvent_Image } from "./image/types";

export interface MapEventPage<T extends EventCommandUnknown = EventCommand> {
  conditions: MapEvent_PageCondition;
  list: T[];
  directionFix: boolean;
  image: MapEvent_Image;
  moveFrequency: number;
  moveRoute: MoveRouteDataUnkwnown;
}
