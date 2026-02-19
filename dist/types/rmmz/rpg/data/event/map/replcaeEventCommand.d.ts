import { EventCommandUnknown } from '../../../../../libs/eventCommand';
import { MapEvent } from './event';
export declare const repleaceMapEventCommands: <Command extends EventCommandUnknown, RC extends EventCommandUnknown = Command>(map: (MapEvent<Command> | null)[], fn: (list: ReadonlyArray<Command>) => RC[]) => (MapEvent<RC> | null)[];
