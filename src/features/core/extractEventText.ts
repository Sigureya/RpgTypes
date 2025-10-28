import type {
  Data_Map,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { readNote } from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapEventTexts,
  ExtractedMapTexts,
} from "./extract/types";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import {
  collectMapEvents,
  processCommonEvents,
  processTroopEvents,
} from "./rpg";

export const extractCommonEventTexts = (
  commons: ReadonlyArray<Data_CommonEvent>
): ExtractedCommonEventText[] => {
  return processCommonEvents(
    commons,
    (
      page: { list: ReadonlyArray<EventCommand> },
      pageIndex: number,
      { id }: { id: number }
    ): ExtractedCommonEventText => ({
      eventId: id,
      commands: extractTextFromEventCommands(page.list),
    })
  );
};

export const extractBattleEventTexts = (
  list: ReadonlyArray<Data_Troop>
): ExtractedBattleEventText[][] => {
  return processTroopEvents(
    list,
    (
      page: { list: ReadonlyArray<EventCommand> },
      pageIndex: number,
      { id }: { id: number }
    ): ExtractedBattleEventText => ({
      eventId: id,
      pageIndex,
      commands: extractTextFromEventCommands(page.list),
    })
  );
};

export const extractMapText = (
  map: Data_Map<EventCommand>
): ExtractedMapTexts => ({
  note: map.note,
  noteItems: readNote(map.note),
  displayedName: map.displayName,
  events: extractMapEventTexts(map),
});

const extractMapEventTexts = (
  map: Data_Map<EventCommand>
): ExtractedMapEventTexts[] => {
  return collectMapEvents(
    map,
    (page, pageIndex, event): ExtractedMapEventTexts => ({
      eventId: event.id,
      pageIndex,
      commands: extractTextFromEventCommands(page.list),
      note: event.note,
      noteItems: readNote(event.note),
      name: event.name,
    })
  );
};
