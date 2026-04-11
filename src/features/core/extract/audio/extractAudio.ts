import { collectMapEvents } from "@RpgTypes/features/core/rpg";
import type {
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { readNote } from "@RpgTypes/rmmz";
import { extractAudioCommands } from "./eventCommand";
import type { AudioPluginCommandParameter } from "./types";
import type {
  ExtractedBattleEventAudio,
  ExtractedCommonEventAudio,
  ExtractedMapAudios,
  ExtractedMapEventAudios,
} from "./types/result";

export const extractCommonEventAudio = <T extends AudioPluginCommandParameter>(
  commons: Data_CommonEvent,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => [],
): ExtractedCommonEventAudio<T> => {
  return {
    eventId: commons.id,
    commands: extractAudioCommands(commons.list, pluginCommandEvaltor),
  };
};

export const extractBattleAudio = <T extends AudioPluginCommandParameter>(
  list: Data_Troop,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => [],
): ExtractedBattleEventAudio<T>[] => {
  return list.pages.map(
    (page, pageIndex): ExtractedBattleEventAudio<T> => ({
      eventId: list.id,
      pageIndex,
      commands: extractAudioCommands(page.list, pluginCommandEvaltor),
    }),
  );
};

export const extractMapAudio = <T extends AudioPluginCommandParameter>(
  map: Data_Map<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => [],
): ExtractedMapAudios<T> => ({
  note: map.note,
  noteItems: readNote(map.note),
  bgm: map.bgm,
  bgs: map.bgs,
  events: extractMapEventAudio(map, pluginCommandEvaltor),
});

const extractMapEventAudio = <T extends AudioPluginCommandParameter>(
  map: Data_Map<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[],
): ExtractedMapEventAudios<T>[] => {
  return collectMapEvents(
    map,
    (page, pageIndex, event): ExtractedMapEventAudios<T> => ({
      eventId: event.id,
      pageIndex,
      commands: extractAudioCommands(page.list, pluginCommandEvaltor),
      note: event.note,
      noteItems: readNote(event.note),
      name: event.name,
    }),
  );
};
