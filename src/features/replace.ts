import type {
  MapEvent,
  Data_Map,
  EventCommand,
  NormalizedEventCommand,
  Command_PluginCommandMZ,
  Command_ScriptHeader,
  Data_TroopUnknonw,
  BattleEventPage,
  Data_CommonEventUnknown,
} from "@RpgTypes/rmmz";
import {
  PLUGIN_COMMAND_MZ,
  repleaceMapEventCommands,
  SCRIPT_EVAL,
} from "@RpgTypes/rmmz";
import { normalizeEventCommands } from "./core/eventCommand/normalize";
import { replaceNoteTextByFunction } from "./core/replace/text";
import { replaceBasicEventCommandTexts } from "./core/replace/text/eventCommand";
import { replaceTextByFunction } from "./core/replace/text/utils";

export interface ReplaceTextHandlers {
  pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
  scriptCommand: (command: Command_ScriptHeader) => Command_ScriptHeader;
  text: (key: string) => string | undefined;
}

export const replaceEventCommandTexts4 = (
  commandList: ReadonlyArray<EventCommand>,
  handlers: ReplaceTextHandlers
): NormalizedEventCommand[] => {
  return normalizeEventCommands(commandList).map(
    (command: NormalizedEventCommand): NormalizedEventCommand => {
      if (command.code === PLUGIN_COMMAND_MZ) {
        return handlers.pluginCommand(command);
      }
      if (command.code === SCRIPT_EVAL) {
        return handlers.scriptCommand(command);
      }
      return replaceBasicEventCommandTexts(command, (key: string) =>
        handlers.text(key)
      );
    }
  );
};

export const replaceTroopTexts2 = (
  troop: Data_TroopUnknonw<EventCommand>,
  handlers: ReplaceTextHandlers
): Data_TroopUnknonw<NormalizedEventCommand> => {
  return replaceTroopTextsXX(
    troop,
    (commandList: ReadonlyArray<EventCommand>) =>
      replaceEventCommandTexts4(commandList, handlers)
  );
};

const replaceTroopTextsXX = (
  troop: Data_TroopUnknonw<EventCommand>,
  commandFn: (commands: ReadonlyArray<EventCommand>) => NormalizedEventCommand[]
): Data_TroopUnknonw<NormalizedEventCommand> => {
  return {
    members: troop.members,
    id: troop.id,
    name: troop.name,
    pages: troop.pages.map(
      (page): BattleEventPage<NormalizedEventCommand> => ({
        conditions: page.conditions,
        span: page.span,
        list: commandFn(page.list),
      })
    ),
  };
};

export const replaceCommonEventTexts2 = (
  commonEvent: Data_CommonEventUnknown<EventCommand>,
  handlers: ReplaceTextHandlers
): Data_CommonEventUnknown<NormalizedEventCommand> => {
  return {
    id: commonEvent.id,
    name: commonEvent.name,
    trigger: commonEvent.trigger,
    switchId: commonEvent.switchId,
    list: replaceEventCommandTexts4(commonEvent.list, handlers),
  };
};

export const replaceMapDataTexts = (
  mapData: Data_Map<EventCommand>,
  handlers: ReplaceTextHandlers
): Data_Map<NormalizedEventCommand> => {
  return replaceMapDataTextsXXX(
    mapData,
    (key: string) => handlers.text(key),
    (commandList: ReadonlyArray<EventCommand>) =>
      replaceEventCommandTexts4(commandList, handlers)
  );
};

const replaceMapDataTextsXXX = (
  mapData: Data_Map<EventCommand>,
  fn: (key: string) => string | undefined,
  commandFn: (commands: ReadonlyArray<EventCommand>) => NormalizedEventCommand[]
): Data_Map<NormalizedEventCommand> => {
  type MapEventType = (MapEvent<NormalizedEventCommand> | null)[];
  const displayName = replaceTextByFunction(mapData.displayName, fn);
  const note = replaceNoteTextByFunction(mapData, fn);
  const events: MapEventType = repleaceMapEventCommands(mapData, commandFn);
  return {
    displayName,
    events,
    note,
    data: mapData.data,
    x: mapData.x,
    y: mapData.y,
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
