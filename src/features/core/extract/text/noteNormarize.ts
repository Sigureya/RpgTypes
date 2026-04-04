import type {
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./eventCommand";
import {
  extractAllMapNotes,
  filterNoteFromMapTexts,
} from "./eventCommand/note";
import { filterNotesInExtractedText } from "./mainData/note";
import type {
  ExtractedDataBundle,
  ExtractedNoteList,
  ExtractedTextItem,
} from "./mainData/types";
import { stringLikeNoteKeys, summarizeNoteKinds } from "./note/note";
import type {
  AudioFilesSet,
  ImageFilesSet,
  OtherFilesSet,
  SummarizedNote,
} from "./note/types";

export const normalizeMapNotes = <Command extends PluginCommandMzParameter>(
  map: readonly ExtractedMapTexts<Command>[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): ExtractedMapTexts<Command>[] => {
  const list = extractAllMapNotes(map);
  const summarized = summarizeNoteKinds(list, audioFiles, imageFiles, other);
  const keysSet: Set<string> = stringLikeNoteKeys(summarized);
  return map.map((m) =>
    filterNoteFromMapTexts(m, (note) => keysSet.has(note.key)),
  );
};

export const normalizeBundleNoteTexts = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): ExtractedDataBundle => {
  const list = flattenAllBundleNotes(bundle);
  const summarized: SummarizedNote[] = summarizeNoteKinds(
    list,
    audioFiles,
    imageFiles,
    other,
  );
  const keysSet: Set<string> = stringLikeNoteKeys(summarized);
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
