import type { FileEntry } from "@RpgTypes/fileio";
import {
  FILANEME_AUX_ACTOR_TEXTS,
  FILENAME_AUX_DICTIONARY,
  rawGameDataToMainDataFileEntries,
  type RawGameData,
} from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import type { MapDataReplaceHandlers } from "./core/replace/types";
import { replaceRawDataWithAutoNoteFilter } from "./core/replaceBundle";
import { createActorTextDictionary } from "./core/rpg";
import type {
  ReplaceRawDataContext,
  GameDataReplaceOutput,
  ReplaceAuxiliaryData,
  RuntimeDictionaryData,
} from "./core/types/replace";
import type { EventContainerExtractor } from "./extractText";
import type { RawGameDataNoteNormalization } from "./types";
export { replaceRawDataBundle } from "./core/replaceBundle";

export const replaceDataDirectToFileEntries = (
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
): FileEntry[] => {
  const output = replaceDataDirect(context, extractor);
  return rawGameDataToMainDataFileEntries(output);
};

export const replaceDataDirect = (
  { assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
): RawGameData<NormalizedEventCommand> => {
  const handlers: MapDataReplaceHandlers = {
    replaceText(text) {
      return dictionary.get(text);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote(item) {
      return textKeys.has(item.key);
    },
  };

  const result = replaceRawDataWithAutoNoteFilter(
    data,
    assetBundle,
    extractor,
    handlers,
  );
  return result.data;
};

export const replaceDataWithHashToFileEntries = <T extends string>(
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): FileEntry[] => {
  const output = replaceDataWithHash(context, extractor, hashFn);
  return [...rawGameDataToMainDataFileEntries(output.main), ...oox(output.aux)];
};

export const replaceDataWithHash = <T extends string>(
  { assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): GameDataReplaceOutput<T> => {
  const handlers: MapDataReplaceHandlers = {
    replaceText(text) {
      return hashFn(text);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote(item) {
      return textKeys.has(item.key);
    },
  };
  const hhhh = replaceRawDataWithAutoNoteFilter(
    data,
    assetBundle,
    extractor,
    handlers,
  );
  return {
    main: hhhh.data,
    aux: {
      actorTextDictionary: ccaa2(data, dictionary, hashFn),
      dictionary: noteXXX(hhhh.note, dictionary, hashFn),
    },
  };
};

const oox = <T>(data: ReplaceAuxiliaryData<T>): FileEntry[] => {
  return [
    { data: data.actorTextDictionary, filename: FILANEME_AUX_ACTOR_TEXTS },
    { data: data.dictionary, filename: FILENAME_AUX_DICTIONARY },
  ];
};

const noteXXX = <T>(
  noteX: RawGameDataNoteNormalization,
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): RuntimeDictionaryData<T> => {
  const s2 = new Set([
    ...noteX.dataNoteSummary.map((s): string => s.key),
    ...noteX.mapNoteSummary.map((s): string => s.key),
  ]);
  return {
    dictionary: createNewDictionary(dictionary, hashFn),
    targetNoteKeys: Array.from(s2),
  };
};

const ccaa2 = <T>(
  data: RawGameData,
  dic: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): KeyValuePairEx<T, string>[] => {
  return createActorTextDictionary(
    data.actors.data,
    data.commonEvents.data,
    data.troops.data,
    data.mapFiles.validMaps.map((m) => m.map),
    {
      newText: (text) => dic.get(text) ?? text,
      hashText: (text) => hashFn(text),
    },
  );
};

const createNewDictionary = <T>(
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): KeyValuePairEx<T, string>[] => {
  return Array.from(dictionary.entries()).map(
    ([k, v]): KeyValuePairEx<T, string> => ({ key: hashFn(k), value: v }),
  );
};
