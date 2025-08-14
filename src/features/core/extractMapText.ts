import type { NoteReadResult, Data_Map } from "@RpgTypes/rmmz";
import { readNote } from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import { collectMapEvents } from "./rpg";

export interface ExtractedMapTexts {
  events: ExtractedMapEventTexts[];
  note: string;
  noteItems: NoteReadResult[];
  displayedName: string;
}

export interface ExtractedMapEventTexts {
  eventId: number;
  name: string;
  pageIndex: number;
  commands: TextCommandParameter[];
  note: string;
  noteItems: NoteReadResult[];
}

export const extractMapText = (map: Data_Map): ExtractedMapTexts => ({
  note: map.note,
  noteItems: readNote(map.note),
  displayedName: map.displayName,
  events: extractMapEventTexts(map),
});

const extractMapEventTexts = (map: Data_Map): ExtractedMapEventTexts[] => {
  return collectMapEvents(
    map,
    (page, pageIndex, event): ExtractedMapEventTexts => ({
      eventId: event.id,
      pageIndex,
      commands: extractTextFromEventCommands(page.list),
      note: event.note,
      noteItems: [],
      name: event.name,
    })
  );
};
