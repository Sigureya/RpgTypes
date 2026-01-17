import { EventCommandUnknown } from '../../../../eventCommand';
import { Data_Map } from './map';
import { MapFileInfo } from './mapFileInfo';
import { Data_MapInfo } from './mapInfo';
export declare const makeMapFileInfo: <T>(info: Data_MapInfo, data: T) => MapFileInfo<T>;
export declare const makeMapData: <Command extends EventCommandUnknown = EventCommandUnknown>(map?: Partial<Data_Map<Command>>) => Data_Map<Command>;
