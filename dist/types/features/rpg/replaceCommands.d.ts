import { Data_CommonEvent, Data_Troop, EventCommand, MapEventContainer } from '../../rmmz/rpg';
import { EventCommandContainer } from './map/';
type EventCommandReplaceFunc = (list: ReadonlyArray<EventCommand>) => EventCommand[];
export declare const replaceEventCommands: <T extends EventCommandContainer>(data: T, fn: EventCommandReplaceFunc) => T;
export declare const replacePages: <Pages extends {
    id: number;
    pages: {
        readonly list: ReadonlyArray<EventCommand>;
    }[];
}>(container: Pages, fn: EventCommandReplaceFunc) => Pages;
export declare const replaceMapEvents: <Map extends MapEventContainer<EventCommand>>(map: Map, fn: EventCommandReplaceFunc) => Map;
export declare const replaceCommonEvents: (events: ReadonlyArray<Data_CommonEvent>, fn: EventCommandReplaceFunc) => Data_CommonEvent[];
export declare const replaceTroops: (list: ReadonlyArray<Data_Troop>, fn: EventCommandReplaceFunc) => Data_Troop[];
export {};
