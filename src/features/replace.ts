import type {
  Data_Map,
  EventCommand,
  NormalizedEventCommand,
  Command_PluginCommandMZ,
  Command_ScriptHeader,
  Data_TroopUnknonw,
  BattleEventPage,
  Data_CommonEventUnknown,
  NoteReplaceHandlers,
  TextReplaceHandlers,
} from "@RpgTypes/rmmz";
import {
  PLUGIN_COMMAND_MZ,
  replaceNoteWithHandlers,
  repleaceMapEventCommands,
  SCRIPT_EVAL,
} from "@RpgTypes/rmmz";
import { normalizeEventCommands } from "./core/eventCommand/normalize";
import { replaceBasicEventCommandTexts } from "./core/replace/text/eventCommand";
import {
  replaceTextByFunction,
  replaceTextByHandlers,
} from "./core/replace/text/utils";

export interface ReplaceEventTextHandlers extends TextReplaceHandlers {
  pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
  scriptCommand: (command: Command_ScriptHeader) => Command_ScriptHeader;
  replaceText: (key: string) => string | undefined;
}

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

export const replaceTroopTexts = (
  troop: Data_TroopUnknonw<EventCommand>,
  fn: (key: string) => string | undefined,
): Data_TroopUnknonw<NormalizedEventCommand> => {
  const handlers: ReplaceEventTextHandlers = {
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    replaceText: fn,
  };

  return {
    members: troop.members,
    id: troop.id,
    name: replaceTextByFunction(troop.name, fn),
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
    name: replaceTextByFunction(commonEvent.name, fn),
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
  mapData: Data_Map<EventCommand>,
  fn: (key: string) => string | undefined,
): Data_Map<NormalizedEventCommand> => {
  return replaceMapDataTextsCore(mapData, {
    pluginCommand: (c) => c,
    scriptCommand: (c) => c,
    replaceText: fn,
    isReplaceTargetNote: () => false,
  });
};

export const replaceMapData = (
  mapData: Data_Map<EventCommand>,
  handlers: ReplaceEventTextHandlers & NoteReplaceHandlers,
): Data_Map<NormalizedEventCommand> => {
  return replaceMapDataTextsCore(mapData, handlers);
};

const replaceMapDataTextsCore = (
  mapData: Data_Map<EventCommand>,
  handlers: ReplaceEventTextHandlers & NoteReplaceHandlers,
): Data_Map<NormalizedEventCommand> => {
  // スプレッド構文だと型チェックを通れないので、全て手動でコピー
  return {
    note: replaceNoteWithHandlers(mapData.note, handlers),
    displayName: replaceTextByHandlers(mapData.displayName, handlers),
    events: repleaceMapEventCommands(mapData.events, (commands) =>
      replaceEventCommandTexts(commands, handlers),
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
