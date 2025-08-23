import type { Data_Map, MapEventPage } from "@RpgTypes/rmmz";
import type { EventCommand2 } from "@RpgTypes/rmmz/eventCommand/commands/union";
import { processMapEvents } from "../../rpg";
import { extractItemCommands } from "./eventCommand/eventCommand";
import type { ItemCommandCode, ItemCommandTerms2 } from "./eventCommand/types";
import type { ExtractedMapEventItems } from "./types";

export const mmm = (
  map: Data_Map<EventCommand2>,
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string
): ExtractedMapEventItems[][] => {
  return processMapEvents(
    map,
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
