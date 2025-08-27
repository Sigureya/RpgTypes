import { EventCommandUnknown } from '../../../../eventCommand';
import { Data_Map } from './map';
export declare const makeMapData: <Command extends EventCommandUnknown = EventCommandUnknown>(map?: Partial<Data_Map<Command>>) => Data_Map<Command>;
