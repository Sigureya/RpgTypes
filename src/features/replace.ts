import type { FileEntry, RawGameData } from "@RpgTypes/fileio";
import { rawGameDataToMainDataFileEntries } from "@RpgTypes/fileio";
import type {
  Data_Map,
  NormalizedEventCommand,
  RpgDataBundleHasText,
} from "@RpgTypes/rmmz";
import type { RuntimeDictionary, GameDataReplaceOutput } from "./core/extract";
import { fileEntriesFromDictionary } from "./core/extract";
import { createRuntimeDictionaryData } from "./core/extract/createDictionary";
import {
  replaceActorText,
  replaceArmorText,
  replaceClassText,
  replaceEnemyText,
  replaceItemText,
  replaceSkillText,
  replaceStateText,
  replaceWeaponText,
  replaceSystemText,
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
    system: replaceSystemText(data.system, (text) => {
      return dic.textDictionary.get(text);
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
    ...fileEntriesFromDictionary(output.aux),
  ];
};

export const replaceDataWithHash = <T extends string>(
  { assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext,
  extractor: EventContainerExtractor,
  hashFn: (text: string) => T,
): GameDataReplaceOutput<T> => {
  const handlers: RpgDataReplaceHandlers = {
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
    aux: createRuntimeDictionaryData(
      data.actors.data,
      data.commonEvents.data,
      data.troops.data,
      data.mapFiles.validMaps.map((m) => m.map),
      replaceResult.note.dataNoteSummary,
      dictionary,
      hashFn,
    ),
  };
};
