import type {
  Data_Map,
  Data_Troop,
  MapEventPage,
  MapFileInfo,
} from "@RpgTypes/rmmz";
import type { EventCommand2 } from "@RpgTypes/rmmz/eventCommand/commands/union";
import { collectMapEvents, correctTroopEvents } from "../../rpg";
import { extractItemCommands } from "./eventCommand/eventCommand";
import type { ItemCommandCode, ItemCommandTerms2 } from "./eventCommand/types";
import type { ExtractedMapEventItems, ExtractedTroopEventItems } from "./types";

export const extractItemFromMap = (
  map: MapFileInfo<Data_Map<EventCommand2>>,
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string
): ExtractedMapEventItems[] => {
  return collectMapEvents(
    map.map,
    (page, index, event): ExtractedMapEventItems => ({
      ...conditionXX(page),
      commands: extractItemCommands(page.list, terms, commandNameFn),
      eventName: event.name,
      pageIndex: index,
    })
  );
};

const conditionXX = (page: MapEventPage<EventCommand2>) => {
  return page.conditions.itemId > 0 && page.conditions.itemValid
    ? { pageCondition: { itemId: page.conditions.itemId } }
    : {};
};

export const extractItemFromTroop = (
  troopList: Data_Troop<EventCommand2>[],
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string
): ExtractedTroopEventItems[] => {
  return correctTroopEvents(
    troopList,
    (page, index, troop): ExtractedTroopEventItems => ({
      commands: extractItemCommands(page.list, terms, commandNameFn),
      eventName: troop.name,
      troopId: troop.id,
      pageIndex: index,
    })
  );
};
