import { EventCommandUnknown } from '../../../../../../../libs';
import { MoveRouteCommandUnknown } from '../../../../../../eventCommand';
import { MapEventPage } from './page';
export interface MapEvent<T extends EventCommandUnknown = EventCommandUnknown, R extends MoveRouteCommandUnknown = MoveRouteCommandUnknown> {
    id: number;
    name: string;
    pages: MapEventPage<T, R>[];
    note: string;
    x: number;
    y: number;
}
