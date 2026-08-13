import type {
  MapEvent_PageCondition,
  MapEventPage,
  Provider_RpgItems,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_GameObjects } from "@RpgTypes/rmmzRuntime";

export const mapEventFindProperPageIndex = (
  pages: ReadonlyArray<MapEventPage>,
  gameObjects: Rmmz_GameObjects,
  itemProvider: Provider_RpgItems,
): number => {
  return pages.findLastIndex((page): boolean => {
    return mapEventMeetsCondition(page.conditions, gameObjects, itemProvider);
  });
};

export const mapEventMeetsCondition = (
  condition: MapEvent_PageCondition,
  { actors, party, variables, switches }: Rmmz_GameObjects,
  itemProvider: Provider_RpgItems,
): boolean => {
  if (condition.switch1Valid && !switches.value(condition.switch1Id)) {
    return false;
  }
  if (condition.switch2Valid && !switches.value(condition.switch2Id)) {
    return false;
  }

  if (condition.variableValid) {
    const variableValue = variables.value(condition.variableId);
    if (variableValue < condition.variableValue) {
      return false;
    }
  }
  if (condition.itemValid) {
    const item = itemProvider.dataItem(condition.itemId);
    if (!item) {
      return false;
    }
    if (!party.hasItem(item)) {
      return false;
    }
  }
  if (condition.actorValid) {
    const actor = actors.actor(condition.actorId);
    if (!actor) {
      return false;
    }
    if (!party.members().includes(actor)) {
      return false;
    }
  }

  return true;
};
