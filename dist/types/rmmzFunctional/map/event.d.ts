import { MapEvent_PageCondition, MapEventPage, Provider_RpgItems } from '../../rmmz/rpg';
import { Rmmz_GameObjects } from '../../rmmzRuntime';
export declare const mapEventFindProperPageIndex: (pages: ReadonlyArray<MapEventPage>, gameObjects: Rmmz_GameObjects, itemProvider: Provider_RpgItems) => number;
export declare const mapEventMeetsCondition: (condition: MapEvent_PageCondition, { actors, party, variables, switches }: Rmmz_GameObjects, itemProvider: Provider_RpgItems) => boolean;
