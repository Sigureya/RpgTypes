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
} from "@RpgTypes/fileio";
import type { MapFileInfo, NoteReadResultsWithSource } from "@RpgTypes/rmmz";
import { stringLikeNoteKeys, summarizeNoteKinds } from "./note/note";
import type {
  SummarizedNote,
  SummarizedNote2,
  SummarizedNoteValue,
} from "./note/types";
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
  RawGameDataNoteNormalization,
} from "./types";

export const normalizeBundleNoteTexts = (
  bundle: ExtractedDataBundle,
  asset: AssetFilesBundle,
): ExtractedDataBundle => {
  const keysSet = nonTextNoteKeys(bundle, asset);
  return normalizeBundleNoteTextsWithKeys(bundle, keysSet);
};

export const buildRawGameDataNoteNormalization = (
  data: ExtractedRawGameDataTexts,
  asset: AssetFilesBundle,
): RawGameDataNoteNormalization => {
  const normalizedMainData = normalizeMainDataNotes(data.value.mainData, asset);
  const normalizedMapFiles = normalizeMapFileNotes(
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

interface ResultOfMain {
  noteSummary: SummarizedNote<SummarizedNoteValue>[];
  nonTextNoteKeys: Set<string>;
  mainData: ExtractedDataBundle;
}

const normalizeMainDataNotes = (
  mainData: ExtractedDataBundle,
  asset: AssetFilesBundle,
): ResultOfMain => {
  const noteSummary = summarizeBundleNoteKinds(mainData, asset);
  const nonTextNoteKeys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    nonTextNoteKeys,
    mainData: normalizeBundleNoteTextsWithKeys(mainData, nonTextNoteKeys),
  };
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

export const nonTextNoteKeys = (
  bundle: ExtractedDataBundle,
  asset: AssetFilesBundle,
): Set<string> => {
  const summarized = summarizeBundleNoteKinds(bundle, asset);
  return stringLikeNoteKeys(summarized);
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
  asset: AssetFilesBundle,
): SummarizedNote2[] => {
  const list = bundleToPaXList(bundle);
  return summarizeNoteKinds(list, asset);
};

const bundleToPaXList = (
  bundle: ExtractedDataBundle,
): NoteReadResultsWithSource[] => [
  notesToPaX(FILENAME_ACTORS, bundle.actors),
  notesToPaX(FILENAME_SKILLS, bundle.skills),
  notesToPaX(FILENAME_ITEMS, bundle.items),
  notesToPaX(FILENAME_WEAPONS, bundle.weapons),
  notesToPaX(FILENAME_ARMORS, bundle.armors),
  notesToPaX(FILENAME_CLASSES, bundle.classes),
  notesToPaX(FILENAME_STATES, bundle.states),
  notesToPaX(FILENAME_ENEMIES, bundle.enemies),
];

const notesToPaX = (
  source: string,
  list: readonly ExtractedNoteList[],
): NoteReadResultsWithSource => ({
  source,
  notes: list.flatMap((item) =>
    item.note.map((n) => ({ key: n.key, value: n.value, dataId: n.id })),
  ),
});

export const summarizeNoteKindsFromMapFiles = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  asset: AssetFilesBundle,
): SummarizedNote2[] => {
  const ppx = mapList.map(extractAllMapNotesEx);
  return summarizeNoteKinds(ppx, asset);
};

export const normalizeNoteFromMapFiles = <
  Command extends TextPluginCommandParameter,
>(
  mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[],
  asset: AssetFilesBundle,
): MapFileInfo<ExtractedMapTexts<Command>>[] => {
  const summarized = summarizeNoteKindsFromMapFiles(mapList, asset);
  const keysSet: Set<string> = stringLikeNoteKeys(summarized);
  return normalizeNoteFromMapFilesWithKeys(mapList, keysSet);
};

interface ResultOfMap2 {
  noteSummary: SummarizedNote<SummarizedNoteValue>[];
  validMaps: MapFileInfo<ExtractedMapTexts<TextPluginCommandParameter>>[];
}

const normalizeMapFileNotes = (
  mapList: readonly MapFileInfo<
    ExtractedMapTexts<TextPluginCommandParameter>
  >[],
  asset: AssetFilesBundle,
): ResultOfMap2 => {
  const noteSummary = summarizeNoteKindsFromMapFiles(mapList, asset);
  const keys = stringLikeNoteKeys(noteSummary);
  return {
    noteSummary,
    validMaps: normalizeNoteFromMapFilesWithKeys(mapList, keys),
  };
};
