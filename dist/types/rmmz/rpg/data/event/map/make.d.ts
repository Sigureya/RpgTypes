import { MoveRouteCommandUnknown } from '../../../../../libs';
import { EventCommandUnknown } from '../../../../../libs/eventCommand';
import { Data_MapUnknown } from './map';
import { MapFileInfo } from './mapFileInfo';
import { Data_MapInfo } from './mapInfo';
export declare const makeMapFileInfo: <T>(info: Data_MapInfo, data: T) => MapFileInfo<T>;
export declare const makeMapDataFromSingleEvent: <T extends EventCommandUnknown>(commandKist: T[]) => Data_MapUnknown<T>;
export declare const makeMapData: <Command extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown = MoveRouteCommandUnknown>(map?: Partial<Data_MapUnknown<Command, MoveRoute>>) => Data_MapUnknown<Command, MoveRoute>;
