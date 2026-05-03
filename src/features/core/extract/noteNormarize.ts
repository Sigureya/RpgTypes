import type {
  AssetFilesBundle,
  AudioFilesSet,
  ImageFilesSet,
} from "@RpgTypes/fileio";
import type { MapFileInfo, NoteReadResult } from "@RpgTypes/rmmz";
import {
  stringLikeNoteKeys,
  summarizeNoteKinds,
  summarizeNoteKinds2,
} from "./note/note";
import type {
  OtherFilesSet,
  SummarizedNote,
  SummarizedNote2,
} from "./note/types";
import type {
  ExtractedMapTexts,
  TextPluginCommandParameter,
} from "./text/eventCommand";
import {
  extractAllMapNotesEx,
  extractAllMapNotesEx2,
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
  RawGameDataNoteNormalization,
} from "./types";

export const buildRawGameDataNoteNormalization = (
  data: ExtractedRawGameDataTexts,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): RawGameDataNoteNormalization => {
  const normalizedMainData = normalizeMainDataNotes(
    data.value.mainData,
    audioFiles,
    imageFiles,
    other,
  );
  const normalizedMapFiles = normalizeMapFileNotes(
    data.value.mapFiles.validMaps,
    audioFiles,
    imageFiles,
    other,
  );

  return {
    dataNoteSummary: normalizedMainData.noteSummary,
    mapNoteSummary: normalizedMapFiles.noteSummary,
    nonTextNoteKeys: normalizedMainData.nonTextNoteKeys,
    data: {
      errors: data.errors,
      value: {
        mainData: normalizedMainData.mainData,
        mapFiles: {
          info: data.value.mapFiles.info,
          invalidMaps: data.value.mapFiles.invalidMaps,
          validMaps: normalizedMapFiles.validMaps,
        },
        eventData: data.value.eventData,
        system: data.value.system,
      },
    },
  };
};

export const summarizeNoteKindsFromMapFiles2 = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  asset: AssetFilesBundle,
): SummarizedNote2[] => {
  const ppx = mapList.map(extractAllMapNotesEx2);
  return summarizeNoteKinds2(ppx, asset);
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
  return normalizeNoteFromMapFilesWithKeys(mapList, keysSet);
};

export const nonTextNoteKeys = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): Set<string> => {
  const summarized: SummarizedNote[] = summarizeBundleNoteKinds(
    bundle,
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
  return normalizeBundleNoteTextsWithKeys(bundle, keysSet);
};

const normalizeBundleNoteTextsWithKeys = (
  bundle: ExtractedDataBundle,
  keysSet: ReadonlySet<string>,
): ExtractedDataBundle => {
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

const normalizeNoteFromMapFilesWithKeys = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  keysSet: ReadonlySet<string>,
): MapFileInfo<ExtractedMapTexts<Command>>[] => {
  return mapList.map(
    (mapData): MapFileInfo<ExtractedMapTexts<Command>> => ({
      filename: mapData.filename,
      editingName: mapData.editingName,
      map: filterNoteFromMapTexts(mapData.map, (note) => keysSet.has(note.key)),
    }),
  );
};

const summarizeBundleNoteKinds = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): SummarizedNote[] => {
  const list = flattenAllBundleNotes(bundle);
  return summarizeNoteKinds(list, audioFiles, imageFiles, other);
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

interface ResultOfMain {
  noteSummary: SummarizedNote[];
  nonTextNoteKeys: Set<string>;
  mainData: ExtractedDataBundle;
}

interface ResultOfMap {
  noteSummary: SummarizedNote[];
  validMaps: MapFileInfo<ExtractedMapTexts<TextPluginCommandParameter>>[];
}

const normalizeMainDataNotes = (
  mainData: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): ResultOfMain => {
  const noteSummary = summarizeBundleNoteKinds(
    mainData,
    audioFiles,
    imageFiles,
    other,
  );
  const nonTextNoteKeys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    nonTextNoteKeys,
    mainData: normalizeBundleNoteTextsWithKeys(mainData, nonTextNoteKeys),
  };
};

const normalizeMapFileNotes = (
  mapList: readonly MapFileInfo<
    ExtractedMapTexts<TextPluginCommandParameter>
  >[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): ResultOfMap => {
  const noteSummary = summarizeNoteKindsFromMapFiles(
    mapList,
    audioFiles,
    imageFiles,
    other,
  );
  const keys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    validMaps: normalizeNoteFromMapFilesWithKeys(mapList, keys),
  };
};
