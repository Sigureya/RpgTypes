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

/**
 * セルフスイッチの読み出し。対象のイベント 1 つに固定した形で渡す。
 *
 * コアは `$gameSelfSwitches.value([mapId, eventId, ch])` を見る。
 * どのイベントかを知っているのは呼び出し元なので、ここへは
 * 「文字 (A/B/C/D) を渡すと真偽が返る」形だけを渡す。
 */
export type MapEvent_SelfSwitchReader = (selfSwitchCh: string) => boolean;

export const mapEventFindProperPageIndex = <T>(
  pages: ReadonlyArray<MapEventPage>,
  itemProvider: Provider_RpgItems,
  actors: Rmmz_ActorsReadonly<T>,
  party: Rmmz_BranchSourceParty<T>,
  variables: Rmmz_Variables,
  switches: Rmmz_Switches,
  selfSwitch: MapEvent_SelfSwitchReader,
): number => {
  return pages.findLastIndex((page): boolean => {
    return mapEventMeetsCondition(
      page.conditions,
      itemProvider,
      actors,
      party,
      variables,
      switches,
      selfSwitch,
    );
  });
};

/**
 * $gameObjects をそのまま渡せる窓口。引数を流すだけで、判定は本体が行う。
 *
 * セルフスイッチの鍵はここで組み立てる。どのイベントかを知っているのは
 * この層なので、純粋関数側はマップ ID もイベント ID も知らずに済む。
 */
export const mapEventFindProperPageIndexByObjects = (
  pages: ReadonlyArray<MapEventPage>,
  itemProvider: Provider_RpgItems,
  gameObjects: Pick<
    Rmmz_GameObjects,
    "actors" | "party" | "variables" | "switches" | "selfSwitches"
  >,
  mapId: number,
  eventId: number,
): number => {
  return mapEventFindProperPageIndex(
    pages,
    itemProvider,
    gameObjects.actors,
    gameObjects.party,
    gameObjects.variables,
    gameObjects.switches,
    (selfSwitchCh) =>
      gameObjects.selfSwitches.value([mapId, eventId, selfSwitchCh]) === true,
  );
};

export const mapEventMeetsCondition = <T>(
  condition: MapEvent_PageCondition,
  itemProvider: Provider_RpgItems,
  actors: Rmmz_ActorsReadonly<T>,
  party: Rmmz_BranchSourceParty<T>,
  variables: Rmmz_Variables,
  switches: Rmmz_Switches,
  selfSwitch: MapEvent_SelfSwitchReader,
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
  if (condition.selfSwitchValid) {
    if (!selfSwitch(condition.selfSwitchCh)) {
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
