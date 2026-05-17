import type { KeyValuePairEx } from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_CommonEvent,
  Data_Troop,
  Data_Map,
} from "@RpgTypes/rmmz";
import type { RuntimeDictionaryData } from "./dictionary";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
import { stringLikeNoteKeys } from "./note";
import type { ActorTextDictionaryHandlers } from "./text";
import { createActorTextDictionary } from "./text";

export const createRuntimeDictionaryData = <T>(
  actors: ReadonlyArray<Data_Actor>,
  commons: ReadonlyArray<Data_CommonEvent>,
  troops: ReadonlyArray<Data_Troop>,
  maps: ReadonlyArray<Data_Map>,
  noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[],
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): RuntimeDictionaryData<T> => {
  const handlers: ActorTextDictionaryHandlers<T> = {
    hashText: hashFn,
    newText: (text) => dictionary.get(text) ?? text,
  };
  return {
    textDictionary: createNewDictionary(dictionary, hashFn),
    targetNoteKeys: textKeys(noteNormalization),
    actorTexts: createActorTextDictionary(
      actors,
      commons,
      troops,
      maps,
      handlers,
    ),
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
