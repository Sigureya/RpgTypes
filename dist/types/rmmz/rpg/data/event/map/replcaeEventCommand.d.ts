import { EventCommand, MapEvent } from './event';
import { Data_Map } from './map';
export declare const repleaceEventCommands: (map: Data_Map, fn: (list: ReadonlyArray<EventCommand>) => EventCommand[]) => (MapEvent | null)[];
