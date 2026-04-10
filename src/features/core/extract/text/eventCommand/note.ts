import type { NoteReadResult } from "@RpgTypes/rmmz";
import type {
  ExtractedMapEventTexts,
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./types";

export const extractAllMapNotes = (
  map: readonly ExtractedMapTexts[],
): NoteReadResult[] => {
  return map.map(n2).flat(4);
};

export const extractAllMapNotesEx = <T>(
  map: ReadonlyArray<T>,
  fn: (map: T) => ExtractedMapTexts,
): NoteReadResult[] => {
  return map
    .map((m) => {
      const mm = fn(m);
      return n2(mm);
    })
    .flat(4);
};

const n2 = (
  map: ExtractedMapTexts,
): [body: NoteReadResult[], events: NoteReadResult[][]] => {
  return [map.noteItems, map.events.map((e) => e.noteItems)];
};

export const filterNoteFromMapTexts = <
  Command extends PluginCommandMzParameter,
>(
  map: ExtractedMapTexts<Command>,
  fn: (noteItem: NoteReadResult) => boolean,
): ExtractedMapTexts<Command> => {
  return {
    displayedName: map.displayedName,
    note: map.note,
    noteItems: map.noteItems.filter(fn),
    events: map.events.map((e) => e3(e, fn)),
  };
};

const e3 = <Command extends PluginCommandMzParameter>(
  mapEvent: ExtractedMapEventTexts<Command>,
  fn: (noteItem: NoteReadResult, index: number) => boolean,
): ExtractedMapEventTexts<Command> => {
  return {
    eventId: mapEvent.eventId,
    name: mapEvent.name,
    pageIndex: mapEvent.pageIndex,
    commands: mapEvent.commands,
    note: mapEvent.note,
    noteItems: mapEvent.noteItems.filter(fn),
  };
};
