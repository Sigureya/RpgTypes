import { Data_Map, Data_Troop, MapFileInfo } from '../../../../rmmz';
import { EventCommand } from '../../../../rmmz/eventCommand/commands/union';
import { ItemCommandCode, ItemCommandTerms2 } from './eventCommand/types';
import { ExtractedMapEventItems, ExtractedTroopEventItems } from './types';
export declare const extractItemFromMap: (map: MapFileInfo<Data_Map<EventCommand>>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedMapEventItems[];
export declare const extractItemFromTroop: (troopList: Data_Troop<EventCommand>[], terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedTroopEventItems[];
