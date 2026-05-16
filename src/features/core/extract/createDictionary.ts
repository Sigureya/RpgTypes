import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
import { stringLikeNoteKeys } from "./note";
import type { RuntimeDictionaryData } from "./types";

export const createRuntimeDictionaryData = <T>(
  noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[],
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): RuntimeDictionaryData<T> => {
  return {
    dictionary: createNewDictionary(dictionary, hashFn),
    targetNoteKeys: textKeys(noteNormalization),
  };
};

const createNewDictionary = <T>(
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): KeyValuePairEx<T, string>[] => {
  return Array.from(dictionary.entries()).map(
    ([k, v]): KeyValuePairEx<T, string> => ({ key: hashFn(k), value: v }),
  );
};

const textKeys = (
  noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[],
): string[] => {
  const set: Set<string> = stringLikeNoteKeys(noteNormalization);
  return Array.from(set);
};
