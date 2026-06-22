import { MapFileInfo } from '../../../../rmmz';
import { Data_Map, Data_Troop } from '../../../../rmmz/events';
import { ItemCommandCode, ItemCommandTerms2 } from './eventCommand/types';
import { ExtractedMapEventItems, ExtractedTroopEventItems } from './types';
export declare const extractItemFromMap: (map: MapFileInfo<Data_Map>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedMapEventItems[];
export declare const extractItemFromTroop: (troopList: ReadonlyArray<Data_Troop>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedTroopEventItems[];
