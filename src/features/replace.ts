import type { FileEntry, FileEntryBundle, RawGameData } from "@RpgTypes/fileio";
import { rawGameDataToMainDataFileEntries } from "@RpgTypes/fileio";
import type {
  Data_Map,
  NormalizedEventCommand,
  NoteReadResult,
  RpgDataBundleHasText,
} from "@RpgTypes/rmmz";
import {
  extractTextFromSystem,
  replaceSystemTextDictionary,
} from "@RpgTypes/rmmz";
import type {
  RuntimeDictionary,
  RuntimeDictionaryDataWithSystem,
  RawGameDataNoteNormalization,
  GameDataReplaceOutput,
} from "./core/extract";
import { fileEntriesFromDictionary, pluginManifestFiles } from "./core/extract";
import {
  createRuntimeDictionaryData,
  textKeysSN,
} from "./core/extract/createDictionary";
import {
  replaceActorText,
  replaceArmorText,
  replaceClassText,
  replaceEnemyText,
  replaceItemText,
  replaceSkillText,
  replaceStateText,
  replaceWeaponText,
} from "./core/replace";
import type { RpgDataReplaceHandlers } from "./core/replace/types";
import { replaceRawDataWithAutoNoteFilter } from "./core/replaceBundle";
import {
  replaceCommonEventData,
  replaceMapData,
  replaceTroopData,
} from "./core/replaceEvent";
import type { EventContainerExtractor } from "./extractText";
import type { ReplaceRawDataContext } from "./types";

export {
  replaceRawDataBundle,
  replaceRawDataWithAutoNoteFilter,
} from "./core/replaceBundle";

export const replaceRuntimeMapData = (
  map: Data_Map,
  dic: RuntimeDictionary<string>,
): Data_Map<NormalizedEventCommand> => {
  const handlers: RpgDataReplaceHandlers = {
    replaceText(text) {
      return dic.textDictionary.get(text);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote(item) {
      return dic.targetNoteKeys.has(item.key);
    },
  };
  return replaceMapData(map, handlers);
};

export const replaceRuntimeData = (
  data: RpgDataBundleHasText,
  dic: RuntimeDictionary<string>,
): RpgDataBundleHasText => {
  const handlers: RpgDataReplaceHandlers = {
    replaceText(text) {
      return dic.textDictionary.get(text);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote(item) {
      return dic.targetNoteKeys.has(item.key);
    },
  };
  return {
    actors: data.actors.map((actor) => {
      return replaceActorText(actor, handlers);
    }),
    armors: data.armors.map((armor) => {
      return replaceArmorText(armor, handlers);
    }),
    classes: data.classes.map((item) => {
      return replaceClassText(item, handlers);
    }),
    enemies: data.enemies.map((item) => {
      return replaceEnemyText(item, handlers);
    }),
    items: data.items.map((item) => {
      return replaceItemText(item, handlers);
    }),
    skills: data.skills.map((item) => {
      return replaceSkillText(item, handlers);
    }),
    states: data.states.map((item) => {
      return replaceStateText(item, handlers);
    }),
    troops: data.troops.map((item) => {
      return replaceTroopData(item, handlers);
    }),
    weapons: data.weapons.map((item) => {
      return replaceWeaponText(item, handlers);
    }),
    commonEvents: data.commonEvents.map((item) => {
      return replaceCommonEventData(item, handlers);
    }),
  };
};

export const replaceDataDirectToFileEntries = (
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
): FileEntry[] => {
  const output = replaceDataDirect(context, extractor);
  return rawGameDataToMainDataFileEntries(output);
};

export const replaceDataDirect = (
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
): RawGameData<NormalizedEventCommand> => {
  const handlers: RpgDataReplaceHandlers = {
    replaceText(text) {
      return context.dictionary.get(text);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote(item) {
      return context.textKeys.has(item.key);
    },
  };

  const result = replaceRawDataWithAutoNoteFilter(
    context.data,
    context.assetBundle,
    extractor,
    handlers,
    (text) => context.dictionary.get(text),
  );
  return result.data;
};

export const replaceGameFilesWithHash = <T extends string>(
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): FileEntryBundle => {
  const output = replaceDataWithHash(context, extractor, hashFn);
  return {
    dataJSON: rawGameDataToMainDataFileEntries(output.main),
    scriptJS: [
      pluginManifestFiles(output.aux, {
        description: "書き換え用辞書データ",
        outputDirectory: "translation",
        dictionaryName: "TranslationDictionary",
      }),
      pluginManifestFiles(output.originLike, {
        description: "翻訳前のオリジナル辞書データ",
        outputDirectory: "translation",
        dictionaryName: "OriginalDictionary",
      }),
    ],
  };
};

export const replaceDataWithHashToFileEntries = <T extends string>(
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): FileEntry[] => {
  const output = replaceDataWithHash(context, extractor, hashFn);
  return [
    ...rawGameDataToMainDataFileEntries(output.main),
    ...fileEntriesFromDictionary(output.aux),
  ];
};

export const replaceDataWithHash = <T extends string>(
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): GameDataReplaceOutput<T> => {
  const { data, dictionary } = context;
  const replaceResult = createMain(context, extractor, hashFn);
  return {
    main: replaceResult.data,
    aux: createAux(data, replaceResult.note, dictionary, hashFn),
    originLike: createAux(data, replaceResult.note, new Map(), hashFn),
  };
};

const createMain = <T extends string>(
  context: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
) => {
  const { data, assetBundle, textKeys } = context;
  const handlers: RpgDataReplaceHandlers = {
    replaceText(text: string) {
      const trimmed = text.trimEnd();
      if (trimmed.length === 0) {
        return "";
      }
      return hashFn(trimmed);
    },
    pluginCommand: (command) => command,
    scriptCommand: (command) => command,
    isReplaceTargetNote: (item: NoteReadResult) => {
      return textKeys.has(item.key);
    },
  };
  return replaceRawDataWithAutoNoteFilter(
    data,
    assetBundle,
    extractor,
    handlers,
    (text) => text.trimEnd(),
  );
};

const createAux = <T extends string>(
  data: RawGameData,
  note: RawGameDataNoteNormalization,
  dictionary: ReadonlyMap<string, string>,
  hashFn: (text: string) => T,
): RuntimeDictionaryDataWithSystem<T> => {
  const dicX = createRuntimeDictionaryData(
    data.actors.data,
    data.commonEvents.data,
    data.troops.data,
    data.mapFiles.validMaps.map((m) => m.map),
    dictionary,
    (text): T => {
      return hashFn(text.trimEnd());
    },
  );
  const extractedSystemTexts = extractTextFromSystem(data.system.system);
  return {
    systemTexts: replaceSystemTextDictionary(extractedSystemTexts, (text) => {
      const trimmed = text.trimEnd();
      return dictionary.get(trimmed);
    }),
    actorTexts: dicX.actorTexts,
    targetNoteKeys: textKeysSN([
      ...note.dataNoteSummary,
      ...note.mapNoteSummary,
    ]),
    textDictionary: dicX.textDictionary,
  };
};
