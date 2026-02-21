import { EventCommandUnknown } from '../../../../../libs/eventCommand';
import { MoveRouteCommandUnknown } from '../../../../eventCommand';
import { Data_Map } from './map';
import { MapFileInfo } from './mapFileInfo';
import { Data_MapInfo } from './mapInfo';
export declare const makeMapFileInfo: <T>(info: Data_MapInfo, data: T) => MapFileInfo<T>;
export declare const makeMapData: <Command extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>(map?: Partial<Data_Map<Command, MoveRoute>>) => Data_Map<Command, MoveRoute>;
