import { EventCommandUnknown } from '../../../../eventCommand';
import { MapEvent } from './event';
import { Data_Map } from './map';
export declare const repleaceMapEventCommands: <Command extends EventCommandUnknown>(map: Data_Map<Command>, fn: (list: ReadonlyArray<Command>) => Command[]) => (MapEvent<Command> | null)[];
