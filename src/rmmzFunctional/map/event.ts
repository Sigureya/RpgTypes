import type {
  MapEvent_PageCondition,
  MapEventPage,
  Provider_RpgItems,
} from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Event,
  Rmmz_GameObjects,
  Rmmz_MapEventContainer,
} from "@RpgTypes/rmmzRuntime";

type MapEvent = Pick<
  Rmmz_Event,
  "start" | "pos" | "isTriggerIn" | "isNormalPriority"
>;

// Game_Player.prototype.startMapEvent に相当する
export const startMapEvent = <T extends MapEvent>(
  map: Pick<Rmmz_MapEventContainer<T>, "isEventRunning" | "events">,
  x: number,
  y: number,
  triggers: ReadonlyArray<number>,
  normalPriority: boolean,
): void => {
  if (map.isEventRunning()) {
    return;
  }
  for (const event of map.events()) {
    if (eventStartXX(event, x, y, triggers, normalPriority)) {
      event.start();
    }
  }
};

const eventStartXX = (
  event: MapEvent,
  x: number,
  y: number,
  triggers: ReadonlyArray<number>,
  normalPriority: boolean,
): boolean => {
  if (event.isNormalPriority() !== normalPriority) {
    return false;
  }
  if (!event.pos(x, y)) {
    return false;
  }
  return event.isTriggerIn(triggers);
};

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
