import type { Direction8, EventCommand } from "./eventCommand";
import type { MapEvent_PageCondition } from "./condition";
import type { EventCommandUnknown } from "@RpgTypes/eventCommand";
import type { MoveRouteDataUnkwnown } from "./eventCommand/moveRoute";

export interface MapEvent_Image {
  characterIndex: number;
  characterName: string;
  direction: Direction8;
  pattern: number;
  tileId: number;
}

export interface MapEventPage<T extends EventCommandUnknown = EventCommand> {
  conditions: MapEvent_PageCondition;
  list: T[];
  directionFix: boolean;
  image: MapEvent_Image;
  moveFrequency: number;
  moveRoute: MoveRouteDataUnkwnown;
}
