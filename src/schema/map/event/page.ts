import type { Direction8 } from "../../../game/object/types";
import type { EventCommand } from "../../data";
import type { Condition } from "./condition";
import type { MoveRouteData } from "./moveRoute";

export interface MapEvent_Image {
  characterIndex: number;
  characterName: string;
  direction: Direction8;
  pattern: number;
  tileId: number;
}

export interface MapEventPage {
  conditions: Condition;
  list: EventCommand[];
  directionFix: boolean;
  image: MapEvent_Image;
  moveFrequency: number;
  moveRoute: MoveRouteData;
}
