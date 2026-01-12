import type {
  Data_Map,
  BattleEventPage,
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { repleaceMapEventCommands } from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";
import { replaceNoteTextByFunction } from "./note";
import { replaceTextByFunction } from "./utils";

export const replaceTroopTexts = (
  troop: Data_Troop,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (
    command: Command_PluginCommandMZ
  ) => Command_PluginCommandMZ = (c) => c
): Data_Troop => {
  const pages = troop.pages.map(
    (page): BattleEventPage<EventCommand> => ({
      conditions: page.conditions,
      span: page.span,
      list: ccc(page.list, fn, pluginCommandFn),
    })
  );
  return {
    ...troop,
    pages: pages,
  };
};

export const replaceCommonEventTexts = (
  commonEvent: Data_CommonEvent,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (
    command: Command_PluginCommandMZ
  ) => Command_PluginCommandMZ = (c) => c
): Data_CommonEvent => {
  return {
    ...commonEvent,
    list: ccc(commonEvent.list, fn, pluginCommandFn),
  };
};

const ccc = (
  list: ReadonlyArray<EventCommand>,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ
): EventCommand[] => {
  return list.map((c) => replaceEventCommandTexts(c, fn, pluginCommandFn));
};

export const replaceMapDataTexts = (
  mapData: Data_Map<EventCommand>,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (
    command: Command_PluginCommandMZ
  ) => Command_PluginCommandMZ = (c) => c
): Data_Map<EventCommand> => {
  const displayName = replaceTextByFunction(mapData.displayName, fn);
  const note = replaceNoteTextByFunction(mapData, fn);
  const events = repleaceMapEventCommands(mapData, (commandList) =>
    commandList.map((command) =>
      replaceEventCommandTexts(command, fn, pluginCommandFn)
    )
  );

  const partial: Partial<Data_Map<EventCommand>> = {
    displayName,
    events,
    note,
  };
  return {
    ...mapData,
    ...partial,
  };
};
