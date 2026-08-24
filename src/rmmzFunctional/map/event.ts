import type {
  MapEvent_PageCondition,
  MapEventPage,
  Provider_RpgItems,
} from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_BranchSourceParty,
  Rmmz_Event,
  Rmmz_GameObjects,
  Rmmz_MapEventContainer,
  Rmmz_Switches,
  Rmmz_Variables,
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
    if (isEventStartable(event, x, y, triggers, normalPriority)) {
      event.start();
    }
  }
};

const isEventStartable = (
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
  gameObjects: Pick<
    Rmmz_GameObjects,
    "actors" | "party" | "variables" | "switches"
  >,
  itemProvider: Provider_RpgItems,
): number => {
  const { actors, party, variables, switches } = gameObjects;
  return pages.findLastIndex((page): boolean => {
    return mapEventMeetsCondition(
      page.conditions,
      itemProvider,
      actors,
      party,
      variables,
      switches,
    );
  });
};

export const mapEventMeetsCondition = <T>(
  condition: MapEvent_PageCondition,
  itemProvider: Provider_RpgItems,
  actors: Rmmz_ActorsReadonly<T>,
  party: Rmmz_BranchSourceParty<T>,
  variables: Rmmz_Variables,
  switches: Rmmz_Switches,
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
