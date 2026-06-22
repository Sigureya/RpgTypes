import { PLUGIN_COMMAND_MZ, SCRIPT_EVAL } from "@RpgTypes/libs";
import type {
  MapEvent,
  MapEventPage,
  BattleEventPage,
  Data_CommonEventUnknown,
  Data_TroopUnknonw,
  EventCommand,
  NormalizedEventCommand,
  Data_MapUnknown,
} from "@RpgTypes/rmmz";
import { replaceNoteWithHandlers } from "@RpgTypes/rmmz";
import { normalizeEventCommands } from "./eventCommand/normalize";
import type {
  RpgDataReplaceHandlers,
  ReplaceEventTextHandlers,
} from "./replace";
import { replaceBasicEventCommandTexts } from "./replace";
import { replaceTextByHandlers } from "./replace/text/utils";

export const replaceEventCommandTexts = (
  commandList: ReadonlyArray<EventCommand>,
  handlers: ReplaceEventTextHandlers,
): NormalizedEventCommand[] => {
  const textFn = (key: string): string | undefined => handlers.replaceText(key);
  return normalizeEventCommands(commandList).map(
    (command: NormalizedEventCommand): NormalizedEventCommand => {
      if (command.code === PLUGIN_COMMAND_MZ) {
        return handlers.pluginCommand(command);
      }
      if (command.code === SCRIPT_EVAL) {
        return handlers.scriptCommand(command);
      }
      return replaceBasicEventCommandTexts(command, textFn);
    },
  );
};
export const replaceTroopData = (
  troop: Data_TroopUnknonw<EventCommand>,
  handlers: ReplaceEventTextHandlers,
): Data_TroopUnknonw<NormalizedEventCommand> => {
  return {
    members: troop.members,
    id: troop.id,
    name: troop.name,
    pages: troop.pages.map(
      (page): BattleEventPage<NormalizedEventCommand> => ({
        conditions: page.conditions,
        span: page.span,
        list: replaceEventCommandTexts(page.list, handlers),
      }),
    ),
  };
};

export const replaceCommonEventData = (
  commonEvent: Data_CommonEventUnknown<EventCommand>,
  handlers: ReplaceEventTextHandlers,
): Data_CommonEventUnknown<NormalizedEventCommand> => {
  return {
    id: commonEvent.id,
    name: commonEvent.name,
    trigger: commonEvent.trigger,
    switchId: commonEvent.switchId,
    list: replaceEventCommandTexts(commonEvent.list, handlers),
  };
};

export const replaceCommonEventTexts = (
  commonEvent: Data_CommonEventUnknown<EventCommand>,
  fn: (key: string) => string | undefined,
): Data_CommonEventUnknown<NormalizedEventCommand> => {
  return {
    id: commonEvent.id,
    name: commonEvent.name,
    trigger: commonEvent.trigger,
    switchId: commonEvent.switchId,
    list: replaceEventCommandTexts(commonEvent.list, {
      pluginCommand: (command) => command,
      scriptCommand: (command) => command,
      replaceText: fn,
    }),
  };
};

export const replaceMapTexts = (
  mapData: Data_MapUnknown<EventCommand>,
  fn: (key: string) => string | undefined,
): Data_MapUnknown<NormalizedEventCommand> => {
  return replaceMapDataTextsCore(mapData, {
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    replaceText: fn,
    isReplaceTargetNote: () => false,
  });
};

export const replaceMapData = (
  mapData: Data_MapUnknown<EventCommand>,
  handlers: RpgDataReplaceHandlers,
): Data_MapUnknown<NormalizedEventCommand> => {
  return replaceMapDataTextsCore(mapData, handlers);
};

const replaceMapEventTexts = (
  mapEvent: MapEvent<EventCommand>,
  handlers: RpgDataReplaceHandlers,
): MapEvent<NormalizedEventCommand> => {
  return {
    id: mapEvent.id,
    name: mapEvent.name,
    x: mapEvent.x,
    y: mapEvent.y,
    note: replaceNoteWithHandlers(mapEvent.note, handlers),
    pages: mapEvent.pages.map(
      (page): MapEventPage<NormalizedEventCommand> => ({
        ...page,
        list: replaceEventCommandTexts(page.list, handlers),
      }),
    ),
  };
};

const replaceMapDataTextsCore = (
  mapData: Data_MapUnknown<EventCommand>,
  handlers: RpgDataReplaceHandlers,
): Data_MapUnknown<NormalizedEventCommand> => {
  // スプレッド構文だと型チェックを通れないので、全て手動でコピー
  return {
    note: replaceNoteWithHandlers(mapData.note, handlers),
    displayName: replaceTextByHandlers(mapData.displayName, handlers),
    events: mapData.events.map((event) =>
      event ? replaceMapEventTexts(event, handlers) : null,
    ),
    data: mapData.data,
    tilesetId: mapData.tilesetId,
    encounterStep: mapData.encounterStep,
    scrollType: mapData.scrollType,
    specifyBattleback: mapData.specifyBattleback,
    autoplayBgm: mapData.autoplayBgm,
    autoplayBgs: mapData.autoplayBgs,
    battleback1Name: mapData.battleback1Name,
    battleback2Name: mapData.battleback2Name,
    bgm: mapData.bgm,
    bgs: mapData.bgs,
    disableDashing: mapData.disableDashing,
    encounterList: mapData.encounterList,
    height: mapData.height,
    width: mapData.width,
    parallaxLoopX: mapData.parallaxLoopX,
    parallaxLoopY: mapData.parallaxLoopY,
    parallaxName: mapData.parallaxName,
    parallaxShow: mapData.parallaxShow,
    parallaxSx: mapData.parallaxSx,
    parallaxSy: mapData.parallaxSy,
  };
};
