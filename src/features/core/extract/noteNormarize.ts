import type {
  AssetFilesBundle,
  AudioFilesSet,
  ImageFilesSet,
} from "@RpgTypes/fileio";
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
import type {
  MapFileInfo,
  NoteReadResult,
  NoteReadResultsWithSource,
} from "@RpgTypes/rmmz";
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
  RawGameDataNoteNormalization2,
} from "./types";

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
  return normalizeNoteFromMapFiles2(mapList, {
    audioFiles: audioFiles,
    imageFiles: imageFiles,
    otherFiles: other,
  });
};

export const nonTextNoteKeys = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): Set<string> => {
  return nonTextNoteKeys2(bundle, {
    audioFiles: audioFiles,
    imageFiles: imageFiles,
    otherFiles: other,
  });
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

export const nonTextNoteKeys2 = (
  bundle: ExtractedDataBundle,
  asset: AssetFilesBundle,
): Set<string> => {
  const summarized = summarizeBundleNoteKinds2(bundle, asset);
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

const summarizeBundleNoteKinds2 = (
  bundle: ExtractedDataBundle,
  asset: AssetFilesBundle,
): SummarizedNote2[] => {
  const list = bundleToPaXList(bundle);
  return summarizeNoteKinds2(list, asset);
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
