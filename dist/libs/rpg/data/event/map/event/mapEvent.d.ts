import { EventCommandUnknown } from '../../../../../../rmmz/eventCommand';
import { EventCommand } from './eventCommand';
import { MapEventPage } from './page';
export interface MapEvent<T extends EventCommandUnknown = EventCommand> {
    id: number;
    name: string;
    pages: MapEventPage<T>[];
    note: string;
    x: number;
    y: number;
}
