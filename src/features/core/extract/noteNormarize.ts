import type { AudioFilesSet, ImageFilesSet } from "@RpgTypes/fileio";
import type { MapFileInfo, NoteReadResult } from "@RpgTypes/rmmz";
import { stringLikeNoteKeys, summarizeNoteKinds } from "./note/note";
import type { OtherFilesSet, SummarizedNote } from "./note/types";
import type {
  ExtractedMapTexts,
  TextPluginCommandParameter,
} from "./text/eventCommand";
import {
  extractAllMapNotesEx,
  filterNoteFromMapTexts,
} from "./text/eventCommand/note";
import { filterNotesInExtractedText } from "./text/mainData/note";
import type {
  ExtractedDataBundle,
  ExtractedNoteList,
  ExtractedTextItem,
} from "./text/mainData/types";
import type {
  ExtractedRawGameDataTexts,
  NormalizeRawGameDataNoteTextsResult,
} from "./types";

export const normalizeRawGameDataNoteTexts = (
  data: ExtractedRawGameDataTexts,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): NormalizeRawGameDataNoteTextsResult => {
  const validMaps = normalizeNoteFromMapFiles(
    data.value.mapFiles.validMaps,
    audioFiles,
    imageFiles,
    other,
  );
  const mainData = normalizeBundleNoteTexts(
    data.value.mainData,
    audioFiles,
    imageFiles,
    other,
  );
  return {
    nonTextNoteKeys: nonTextNoteKeys(
      data.value.mainData,
      audioFiles,
      imageFiles,
      other,
    ),
    data: {
      errors: data.errors,
      value: {
        mainData: mainData,
        mapFiles: {
          info: data.value.mapFiles.info,
          invalidMaps: data.value.mapFiles.invalidMaps,
          validMaps,
        },
        eventData: data.value.eventData,
        system: data.value.system,
      },
    },
  };
};

export const summarizeNoteKindsFromMapFiles = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): SummarizedNote[] => {
  const list: NoteReadResult[] = extractAllMapNotesEx(mapList, (m) => m.map);
  return summarizeNoteKinds(list, audioFiles, imageFiles, other);
};

export const normalizeNoteFromMapFiles = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): MapFileInfo<ExtractedMapTexts<Command>>[] => {
  const summarized = summarizeNoteKindsFromMapFiles(
    mapList,
    audioFiles,
    imageFiles,
    other,
  );
  const keysSet: Set<string> = stringLikeNoteKeys(summarized);
  return mapList.map(
    (mapData): MapFileInfo<ExtractedMapTexts<Command>> => ({
      filename: mapData.filename,
      editingName: mapData.editingName,
      map: filterNoteFromMapTexts(mapData.map, (note) => keysSet.has(note.key)),
    }),
  );
};

export const nonTextNoteKeys = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): Set<string> => {
  const list = flattenAllBundleNotes(bundle);
  const summarized: SummarizedNote[] = summarizeNoteKinds(
    list,
    audioFiles,
    imageFiles,
    other,
  );
  return stringLikeNoteKeys(summarized);
};

export const normalizeBundleNoteTexts = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): ExtractedDataBundle => {
  const keysSet = nonTextNoteKeys(bundle, audioFiles, imageFiles, other);
  const fn = (note: ExtractedTextItem): boolean => keysSet.has(note.key);
  return {
    actors: filterNotesInExtractedText(bundle.actors, fn),
    enemies: filterNotesInExtractedText(bundle.enemies, fn),
    weapons: filterNotesInExtractedText(bundle.weapons, fn),
    armors: filterNotesInExtractedText(bundle.armors, fn),
    skills: filterNotesInExtractedText(bundle.skills, fn),
    states: filterNotesInExtractedText(bundle.states, fn),
    items: filterNotesInExtractedText(bundle.items, fn),
    classes: filterNotesInExtractedText(bundle.classes, fn),
  };
};

const flattenAllBundleNotes = (
  bundle: ExtractedDataBundle,
): ExtractedTextItem[] => {
  const noteItems: ExtractedTextItem[][][] = [
    extractNoteArraysFromList(bundle.actors),
    extractNoteArraysFromList(bundle.skills),
    extractNoteArraysFromList(bundle.items),
    extractNoteArraysFromList(bundle.weapons),
    extractNoteArraysFromList(bundle.armors),
    extractNoteArraysFromList(bundle.classes),
    extractNoteArraysFromList(bundle.states),
    extractNoteArraysFromList(bundle.enemies),
  ];
  return noteItems.flat(3);
};

const extractNoteArraysFromList = (
  note: readonly ExtractedNoteList[],
): ExtractedTextItem[][] => {
  return note.map((item) => item.note);
};
