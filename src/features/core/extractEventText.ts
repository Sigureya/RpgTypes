import type {
  Data_Map,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  Command_PluginCommandMZ,
} from "@RpgTypes/rmmz";
import { readNote } from "@RpgTypes/rmmz";
import type { PluginCommandMzParameter } from "./extract/text/eventCommand";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapEventTexts,
  ExtractedMapTexts,
} from "./extract/text/eventCommand";
import { extractTextFromEventCommandsEx } from "./getTextFromCommand";
import { collectMapEvents } from "./rpg";

export const extractCommonEventTexts = <T extends PluginCommandMzParameter>(
  commons: Data_CommonEvent,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => []
): ExtractedCommonEventText<T> => {
  return {
    eventId: commons.id,
    commands: extractTextFromEventCommandsEx(
      commons.list,
      pluginCommandEvaltor
    ),
  };
};

export const extractBattleEventTexts = <T extends PluginCommandMzParameter>(
  list: Data_Troop,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => []
): ExtractedBattleEventText<T>[] => {
  return list.pages.map(
    (page, pageIndex): ExtractedBattleEventText<T> => ({
      eventId: list.id,
      pageIndex: pageIndex,
      commands: extractTextFromEventCommandsEx(page.list, pluginCommandEvaltor),
    })
  );
};

export const extractMapText = <T extends PluginCommandMzParameter>(
  map: Data_Map<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => []
): ExtractedMapTexts<T> => ({
  note: map.note,
  noteItems: readNote(map.note),
  displayedName: map.displayName,
  events: extractMapEventTexts(map, pluginCommandEvaltor),
});

const extractMapEventTexts = <T extends PluginCommandMzParameter>(
  map: Data_Map<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[]
): ExtractedMapEventTexts<T>[] => {
  return collectMapEvents(
    map,
    (page, pageIndex, event): ExtractedMapEventTexts<T> => ({
      eventId: event.id,
      pageIndex,
      commands: extractTextFromEventCommandsEx(page.list, pluginCommandEvaltor),
      note: event.note,
      noteItems: readNote(event.note),
      name: event.name,
    })
  );
};
