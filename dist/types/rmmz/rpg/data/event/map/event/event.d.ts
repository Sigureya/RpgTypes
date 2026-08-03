import { EventCommandUnknown, MoveRouteCommandUnknown } from '../../../../../../libs';
import { Data_MapUnknown } from '../types';
import { MapEvent } from './page';
export declare const mapEvents: <CommandType extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>(map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">) => MapEvent<CommandType, MoveRoute>[];
export declare const mapEvent: <CommandType extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>(map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">, eventId: number) => MapEvent<CommandType, MoveRoute> | undefined;
export declare const mapEventsXy: <CommandType extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>(map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">, x: number, y: number) => MapEvent<CommandType, MoveRoute>[];
export declare const mapEventIdXy: <CommandType extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>(map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">, x: number, y: number) => number;
