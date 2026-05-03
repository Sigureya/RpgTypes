import type { AssetFilesBundle } from "@RpgTypes/fileio";
import {
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_WEAPONS,
  FILENAME_COMMON_EVENTS,
  FILENAME_TROOPS,
} from "@RpgTypes/fileio";
import type { MapFileInfo } from "@RpgTypes/rmmz";
import {
  stringLikeNoteKeys,
  summarizeNoteKinds,
  summarizeNoteKinds2,
} from "./note/note";
import type { SummarizedNote, SummarizedNote2 } from "./note/types";
import type { TextPluginCommandParameter, ExtractedMapTexts } from "./text";
import {
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
  RawGameDataNoteNormalization2,
} from "./types";

export const buildRawGameDataNoteNormalization2 = (
  data: ExtractedRawGameDataTexts,
  asset: AssetFilesBundle,
): RawGameDataNoteNormalization2 => {
  const normalizedMainData = normalizeMainDataNotes2(
    data.value.mainData,
    asset,
  );
  const normalizedMapFiles = normalizeMapFileNotes2(
    data.value.mapFiles.validMaps,
    asset,
  );

  return {
    nonTextNoteKeys: normalizedMainData.nonTextNoteKeys,
    dataNoteSummary: normalizedMainData.noteSummary,
    mapNoteSummary: normalizedMapFiles.noteSummary,
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

interface ResultOfMain2 {
  noteSummary: SummarizedNote2[];
  nonTextNoteKeys: Set<string>;
  mainData: ExtractedDataBundle;
}

const normalizeMainDataNotes2 = (
  mainData: ExtractedDataBundle,
  asset: AssetFilesBundle,
): ResultOfMain2 => {
  const noteSummary = summarizeBundleNoteKinds2(mainData, asset);
  const nonTextNoteKeys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    nonTextNoteKeys,
    mainData: normalizeBundleNoteTextsWithKeys2(mainData, nonTextNoteKeys),
  };
};

const normalizeBundleNoteTextsWithKeys2 = (
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

const summarizeBundleNoteKinds2 = (
  bundle: ExtractedDataBundle,
  asset: AssetFilesBundle,
): SummarizedNote2[] => {
  const list = flattenAllBundleNotes2(bundle);
  return summarizeNoteKinds2(list, asset);
};

const flattenAllBundleNotes2 = (
  bundle: ExtractedDataBundle,
): ExtractedTextItem[] => {
  const noteItems: ExtractedTextItem[][][] = [
    extractNoteArraysFromList2(bundle.actors),
    extractNoteArraysFromList2(bundle.skills),
    extractNoteArraysFromList2(bundle.items),
    extractNoteArraysFromList2(bundle.weapons),
    extractNoteArraysFromList2(bundle.armors),
    extractNoteArraysFromList2(bundle.classes),
    extractNoteArraysFromList2(bundle.states),
    extractNoteArraysFromList2(bundle.enemies),
  ];
  return noteItems.flat(3);
};

const extractNoteArraysFromList2 = (
  note: readonly ExtractedNoteList[],
): ExtractedTextItem[][] => {
  return note.map((item) => item.note);
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

export const normalizeNoteFromMapFiles2 = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  asset: AssetFilesBundle,
): MapFileInfo<ExtractedMapTexts<Command>>[] => {
  const summarized = summarizeNoteKindsFromMapFiles2(mapList, asset);
  const keysSet: Set<string> = stringLikeNoteKeys(summarized);
  return normalizeNoteFromMapFilesWithKeys(mapList, keysSet);
};

interface ResultOfMap2 {
  noteSummary: SummarizedNote2[];
  validMaps: MapFileInfo<ExtractedMapTexts<TextPluginCommandParameter>>[];
}

const normalizeMapFileNotes2 = (
  mapList: readonly MapFileInfo<
    ExtractedMapTexts<TextPluginCommandParameter>
  >[],
  asset: AssetFilesBundle,
): ResultOfMap2 => {
  const noteSummary = summarizeNoteKindsFromMapFiles2(mapList, asset);
  const keys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    validMaps: normalizeNoteFromMapFilesWithKeys(mapList, keys),
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
