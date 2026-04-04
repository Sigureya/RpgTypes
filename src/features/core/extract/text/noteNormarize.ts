import type {
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./eventCommand";
import {
  extractAllMapNotes,
  filterNoteFromMapTexts,
} from "./eventCommand/note";
import type {
  ExtractedDataBundle,
  ExtractedNoteList,
  ExtractedText,
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
  return {
    actors: filterNotesInExtractedText(bundle.actors, keysSet),
    enemies: filterNotesInExtractedText(bundle.enemies, keysSet),
    weapons: filterNotesInExtractedText(bundle.weapons, keysSet),
    armors: filterNotesInExtractedText(bundle.armors, keysSet),
    skills: filterNotesInExtractedText(bundle.skills, keysSet),
    states: filterNotesInExtractedText(bundle.states, keysSet),
    items: filterNotesInExtractedText(bundle.items, keysSet),
    classes: filterNotesInExtractedText(bundle.classes, keysSet),
  };
};

const filterNotesInExtractedText = <T>(
  list: readonly ExtractedText<T>[],
  set: ReadonlySet<string>,
): ExtractedText<T>[] => {
  return list
    .map((item): ExtractedText<T> => {
      const filteredNote = item.note.filter((note) => set.has(note.key));
      return {
        main: item.main,
        note: filteredNote,
      };
    })
    .filter(hasData);
};

const hasData = <T>(item: ExtractedText<T>): boolean => {
  return item.note.length > 0 || item.main.length > 0;
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
