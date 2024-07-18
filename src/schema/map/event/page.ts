import { Direction8 } from "../../../game/object/types/";
import { EventCommand } from "../../data";
import { Condition } from "./condition";
import { Event_MoveRoute } from "./moveRoute";

interface MapEvent_Image {
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
  moveRoute: Event_MoveRoute;
}
