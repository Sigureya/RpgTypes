import { EventCommandUnknown } from '../../../../../../eventCommand';
import { MapEvent_PageCondition } from './condition';
import { EventCommand } from './eventCommand';
import { MoveRouteDataUnkwnown } from './eventCommand/moveRoute';
import { MapEvent_Image } from './image/types';
export interface MapEventPage<T extends EventCommandUnknown = EventCommand> {
    conditions: MapEvent_PageCondition;
    list: T[];
    directionFix: boolean;
    image: MapEvent_Image;
    moveFrequency: number;
    moveRoute: MoveRouteDataUnkwnown;
}
