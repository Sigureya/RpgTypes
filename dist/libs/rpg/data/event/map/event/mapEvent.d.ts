import { EventCommandUnknown } from '../../../../../eventCommand';
import { MapEventPage } from './page';
import { EventCommand } from './eventCommand';
export interface MapEvent<T extends EventCommandUnknown = EventCommand> {
    id: number;
    name: string;
    pages: MapEventPage<T>[];
    note: string;
    x: number;
    y: number;
}
