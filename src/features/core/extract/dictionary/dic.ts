import type { FileEntry } from "@RpgTypes/fileio";
import { FILENAME_AUX_DICTIONARY } from "@RpgTypes/fileio";
import type {
  RuntimeDictionary,
  RuntimeDictionaryData,
  RuntimeDictionaryDataWithSystem,
} from "./types";

export const findActorText = <T>(
  text: string,
  dic: RuntimeDictionary<T>,
): string | undefined => {
  const value: T | undefined = dic.actorTextDictionary.get(text);
  if (!value) {
    return undefined;
  }
  const newText = dic.textDictionary.get(value);
  return newText;
};

export const buildRuntimeDictionary = <T>(
  dic: RuntimeDictionaryData<T>,
): RuntimeDictionary<T> => ({
  targetNoteKeys: new Set(dic.targetNoteKeys),
  textDictionary: new Map(
    dic.textDictionary.map(({ key, value }) => [key, value]),
  ),
  actorTextDictionary: new Map(
    dic.actorTexts.map(({ key, value }) => [key, value]),
  ),
});

export const fileEntriesFromDictionary = (
  dic: RuntimeDictionaryDataWithSystem<unknown>,
  filename: string = FILENAME_AUX_DICTIONARY,
): FileEntry[] => {
  return [{ data: dic, filename: filename }];
};
