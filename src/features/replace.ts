import type { RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import type { MapDataReplaceHandlers } from "./core/replace/types";
import { replaceRawDataWithAutoNoteFilter } from "./core/replaceBundle";
import { createActorTextDictionary } from "./core/rpg";
import type { EventContainerExtractor } from "./extractText";
import type {
  GameDataReplaceOutput,
  ReplaceRawDataContext,
} from "./types/replace";
export {
  replaceRawDataBundle,
  replaceRawDataWithAutoNoteFilter,
} from "./core/replaceBundle";

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
  return replaceRawDataWithAutoNoteFilter(
    data,
    assetBundle,
    extractor,
    handlers,
  );
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
  return {
    main: replaceRawDataWithAutoNoteFilter(
      data,
      assetBundle,
      extractor,
      handlers,
    ),
    aux: {
      actorTextDictionary: ccaa2(data, dictionary, hashFn),
      newTextDictionary: createNewDictionary(dictionary, hashFn),
    },
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
