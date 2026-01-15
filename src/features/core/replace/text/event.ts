import type {
  Data_Map,
  BattleEventPage,
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  Data_CommonEventUnknown,
  NormalizedEventCommand,
  Data_TroopUnknonw,
} from "@RpgTypes/rmmz";
import { PLUGIN_COMMAND_MZ, repleaceMapEventCommands } from "@RpgTypes/rmmz";
import { replaceBasicEventCommandTexts } from "./eventCommand";
import { replaceNoteTextByFunction } from "./note";
import { replaceTextByFunction } from "./utils";

export const replaceTroopTexts = (
  troop: Data_TroopUnknonw<NormalizedEventCommand>,
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
  commonEvent: Data_CommonEventUnknown<NormalizedEventCommand>,
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
  list: ReadonlyArray<NormalizedEventCommand>,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ
): NormalizedEventCommand[] => {
  return list.map((c) =>
    c.code === PLUGIN_COMMAND_MZ
      ? pluginCommandFn(c)
      : replaceBasicEventCommandTexts(c, fn)
  );
};

export const replaceMapDataTexts = (
  mapData: Data_Map<NormalizedEventCommand>,
  fn: (key: string) => string | undefined,
  pluginCommandFn: (
    command: Command_PluginCommandMZ
  ) => Command_PluginCommandMZ = (c) => c
): Data_Map<NormalizedEventCommand> => {
  const displayName = replaceTextByFunction(mapData.displayName, fn);
  const note = replaceNoteTextByFunction(mapData, fn);
  const events = repleaceMapEventCommands(mapData, (commandList) =>
    ccc(commandList, fn, pluginCommandFn)
  );

  const partial: Partial<Data_Map<NormalizedEventCommand>> = {
    displayName,
    events,
    note,
  };
  return {
    ...mapData,
    ...partial,
  };
};
