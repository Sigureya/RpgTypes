import type { Data_Map, EventCommand } from "@RpgTypes/rmmz";
import { readNote } from "@RpgTypes/rmmz";
import type {
  ExtractedMapEventTexts,
  ExtractedMapTexts,
} from "./extract/types";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import { collectMapEvents } from "./rpg";

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
