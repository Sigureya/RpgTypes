import type { FileEntry, RawGameData } from "@RpgTypes/fileio";
import {
  FILANEME_AUX_ACTOR_TEXTS,
  FILENAME_AUX_DICTIONARY,
  rawGameDataToMainDataFileEntries,
} from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import { createRuntimeDictionaryData } from "./core/extract/createDictionary";
import type { MapDataReplaceHandlers } from "./core/replace/types";
import { replaceRawDataWithAutoNoteFilter } from "./core/replaceBundle";
import { createActorTextDictionary } from "./core/rpg";
import type { EventContainerExtractor } from "./extractText";
import type {
  ReplaceRawDataContext,
  GameDataReplaceOutput,
  ReplaceAuxiliaryData,
} from "./types";
export {
  replaceRawDataBundle,
  replaceRawDataWithAutoNoteFilter,
} from "./core/replaceBundle";

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
  return [
    ...rawGameDataToMainDataFileEntries(output.main),
    ...auxiliaryDataToFileEntries(output.aux),
  ];
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
  const replaceResult = replaceRawDataWithAutoNoteFilter(
    data,
    assetBundle,
    extractor,
    handlers,
  );
  return {
    main: replaceResult.data,
    aux: {
      actorTextDictionary: createActorTextDictionaryEntries(
        data,
        dictionary,
        hashFn,
      ),
      dictionary: createRuntimeDictionaryData(
        [
          ...replaceResult.note.dataNoteSummary,
          ...replaceResult.note.mapNoteSummary,
        ],
        dictionary,
        hashFn,
      ),
    },
  };
};

const auxiliaryDataToFileEntries = <T>(
  data: ReplaceAuxiliaryData<T>,
): FileEntry[] => {
  return [
    { data: data.actorTextDictionary, filename: FILANEME_AUX_ACTOR_TEXTS },
    { data: data.dictionary, filename: FILENAME_AUX_DICTIONARY },
  ];
};

const createActorTextDictionaryEntries = <T>(
  data: RawGameData,
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): KeyValuePairEx<T, string>[] => {
  return createActorTextDictionary(
    data.actors.data,
    data.commonEvents.data,
    data.troops.data,
    data.mapFiles.validMaps.map((m) => m.map),
    {
      newText: (text) => dictionary.get(text) ?? text,
      hashText: (text) => hashFn(text),
    },
  );
};
