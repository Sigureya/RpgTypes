import type { Direction8, EventCommand, MoveRouteData } from "./eventCommand";
import type { MapEvent_PageCondition } from "./condition";
export interface MapEvent_Image {
    characterIndex: number;
    characterName: string;
    direction: Direction8;
    pattern: number;
    tileId: number;
}
export interface MapEventPage {
    conditions: MapEvent_PageCondition;
    list: EventCommand[];
    directionFix: boolean;
    image: MapEvent_Image;
    moveFrequency: number;
    moveRoute: MoveRouteData;
}
