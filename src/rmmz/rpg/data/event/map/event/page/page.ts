import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type {
  MoveRouteCommandUnknown,
  MoveRouteData,
} from "@RpgTypes/rmmz/eventCommand";
import type { MapEvent_PageCondition } from "./condition";
import type { MapEvent_Image } from "./image/types";

export interface MapEventPage<
  EC extends EventCommandUnknown = EventCommandUnknown,
  MRC extends MoveRouteCommandUnknown = MoveRouteCommandUnknown,
> {
  conditions: MapEvent_PageCondition;
  list: EC[];
  directionFix: boolean;
  image: MapEvent_Image;
  moveFrequency: number;
  moveRoute: MoveRouteData<MRC>;
  priorityType: number;
  walkAnime: boolean;
  stepAnime: boolean;
  through: boolean;
  moveSpeed: number;
  moveType: number;
  trigger: number;
}
