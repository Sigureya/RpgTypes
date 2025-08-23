import { Data_Map, Data_Troop } from '../../../../rmmz';
import { EventCommand2 } from '../../../../rmmz/eventCommand/commands/union';
import { ItemCommandCode, ItemCommandTerms2 } from './eventCommand/types';
import { ExtractedMapEventItems, ExtractedTroopEventItems } from './types';
export declare const extractItemFromMap: (map: Data_Map<EventCommand2>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedMapEventItems[];
export declare const extractItemFromTroop: (troopList: Data_Troop<EventCommand2>[], terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedTroopEventItems[];
