import { Data_Map, MapFileInfo } from '../../../../rmmz';
import { EventCommand } from '../../../../rmmz/eventCommand/commands/union';
import { Data_Troop } from '../../../../rmmz/events';
import { ItemCommandCode, ItemCommandTerms2 } from './eventCommand/types';
import { ExtractedMapEventItems, ExtractedTroopEventItems } from './types';
export declare const extractItemFromMap: (map: MapFileInfo<Data_Map<EventCommand>>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedMapEventItems[];
export declare const extractItemFromTroop: (troopList: ReadonlyArray<Data_Troop>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ExtractedTroopEventItems[];
