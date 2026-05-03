import type {
  MapFileInfo,
  NoteReadResult,
  NoteReadResultEx,
  NoteReadResultsWithSource,
} from "@RpgTypes/rmmz";
import type {
  ExtractedMapEventTexts,
  ExtractedMapTexts,
  TextPluginCommandParameter,
} from "./types";

export const extractAllMapNotesEx = (
  map: MapFileInfo<ExtractedMapTexts>,
): NoteReadResultsWithSource => {
  return {
    source: map.filename,
    notes: [...map.map.noteItems.map(mmx), ...map.map.events.map(eex).flat()],
  };
};

const eex = (e: ExtractedMapEventTexts): NoteReadResultEx[] => {
  return e.noteItems.map(
    (n): NoteReadResultEx => ({
      dataId: e.eventId,
      key: n.key,
      value: n.value,
      name: e.name,
    }),
  );
};

const mmx = (item: NoteReadResult): NoteReadResultEx => ({
  dataId: 0,
  key: item.key,
  value: item.value,
  name: "",
});

export const filterNoteFromMapTexts = <
  Command extends TextPluginCommandParameter,
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

const e3 = <Command extends TextPluginCommandParameter>(
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
