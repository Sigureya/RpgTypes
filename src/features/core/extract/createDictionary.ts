import type { KeyValuePairEx } from "@RpgTypes/libs";
import { stringLikeNoteKeys } from "./note";
import type {
  RawGameDataNoteNormalization,
  RuntimeDictionaryData,
} from "./types";

export const createRuntimeDictionaryData = <T>(
  noteNormalization: RawGameDataNoteNormalization,
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
  noteNormalization: RawGameDataNoteNormalization,
): string[] => {
  const set: Set<string> = stringLikeNoteKeys([
    ...noteNormalization.dataNoteSummary,
    ...noteNormalization.mapNoteSummary,
  ]);
  return Array.from(set);
};
