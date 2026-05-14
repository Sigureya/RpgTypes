import type {
  AssetFilesBundle,
  RawGameData,
  ReadArrayResult,
} from "@RpgTypes/fileio";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import {
  extractTextFromRawGameData,
  buildRawGameDataNoteNormalization,
} from "./core/extract";
import {
  replaceActorText,
  replaceItemText,
  replaceClassText,
  replaceEnemyText,
  replaceSkillText,
  replaceStateText,
  replaceSystemText,
} from "./core/replace";
import type { MapDataReplaceHandlers } from "./core/replace/types";
import {
  replaceCommonEventData,
  replaceMapData,
  replaceTroopData,
} from "./core/replaceEvent";
import { createActorTextDictionary } from "./core/rpg";
import type { EventContainerExtractor } from "./extractText";
import type {
  ReplaceRawDataContext,
  GameDataReplaceOutput,
} from "./types/replace";

export const replaceGameDataWithAuxiliaryData = <T>(
  data: RawGameData,
  assetBundle: AssetFilesBundle,
  extractor: EventContainerExtractor,
  handlers: MapDataReplaceHandlers,
  hashFn: (text: string) => T,
): GameDataReplaceOutput<T> => {
  return {
    main: replaceRawDataWithAutoNoteFilter(
      data,
      assetBundle,
      extractor,
      handlers,
    ),
    aux: {
      actorTextDictionary: createActorTextDictionary(
        data.actors.data,
        data.commonEvents.data,
        data.troops.data,
        data.mapFiles.validMaps.map((m) => m.map),
        {
          newText: (text) => handlers.replaceText(text) ?? text,
          hashText: (text) => hashFn(text),
        },
      ),
    },
  };
};

export const replaceRawDataBundle = (
  data: RawGameData,
  handlers: MapDataReplaceHandlers,
): RawGameData<NormalizedEventCommand> => {
  return {
    tilesets: data.tilesets,
    animations: data.animations,
    actors: mapReadArrayResult(data.actors, (actor) =>
      replaceActorText(actor, handlers),
    ),
    armors: mapReadArrayResult(data.armors, (armor) =>
      replaceItemText(armor, handlers),
    ),
    classes: mapReadArrayResult(data.classes, (item) =>
      replaceClassText(item, handlers),
    ),
    commonEvents: mapReadArrayResult(data.commonEvents, (item) =>
      replaceCommonEventData(item, handlers),
    ),
    enemies: mapReadArrayResult(data.enemies, (item) =>
      replaceEnemyText(item, handlers),
    ),
    items: mapReadArrayResult(data.items, (item) =>
      replaceItemText(item, handlers),
    ),
    mapInfos: data.mapInfos,
    skills: mapReadArrayResult(data.skills, (item) =>
      replaceSkillText(item, handlers),
    ),
    states: mapReadArrayResult(data.states, (item) =>
      replaceStateText(item, handlers),
    ),
    system: {
      message: data.system.message,
      system: data.system.system
        ? replaceSystemText(data.system.system, handlers.replaceText)
        : null,
    },
    troops: mapReadArrayResult(data.troops, (item) =>
      replaceTroopData(item, handlers),
    ),
    weapons: mapReadArrayResult(data.weapons, (item) =>
      replaceItemText(item, handlers),
    ),
    mapFiles: {
      info: data.mapFiles.info,
      invalidMaps: data.mapFiles.invalidMaps,
      validMaps: data.mapFiles.validMaps.map((item) => ({
        filename: item.filename,
        editingName: item.editingName,
        map: replaceMapData(item.map, handlers),
      })),
    },
  };
};

const mapReadArrayResult = <T, R>(
  data: ReadArrayResult<T>,
  mapper: (value: T) => R,
): ReadArrayResult<R> => {
  return {
    success: data.success,
    fileName: data.fileName,
    error: data.error,
    data: data.success ? data.data.map(mapper) : [],
  };
};

export const replaceRawDataWithContext = (
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

export const replaceRawDataWithAutoNoteFilter = (
  data: RawGameData,
  assetBundle: AssetFilesBundle,
  extractor: EventContainerExtractor,
  handlers: MapDataReplaceHandlers,
): RawGameData<NormalizedEventCommand> => {
  // まずテキストを抽出し
  const e = extractTextFromRawGameData(data, extractor);
  // 正規化済みノートを取得
  const normalizedNote = buildRawGameDataNoteNormalization(e, {
    audioFiles: assetBundle.audioFiles,
    imageFiles: assetBundle.imageFiles,
    otherFiles: assetBundle.otherFiles,
  });
  // ハンドラを微修正。
  // noteから自動算出した非テキストノートキーをisReplaceTargetNoteで弾くようにする
  const h2 = lapHandlers(normalizedNote.nonTextNoteKeys, handlers);

  // 置換処理を実行
  return replaceRawDataBundle(data, h2);
};

const lapHandlers = (
  ssx: ReadonlySet<string>,
  handlers: MapDataReplaceHandlers,
): MapDataReplaceHandlers => ({
  pluginCommand(command) {
    return handlers.pluginCommand(command);
  },
  scriptCommand(command) {
    return handlers.scriptCommand(command);
  },
  replaceText(key) {
    return handlers.replaceText(key);
  },
  isReplaceTargetNote(item): boolean {
    if (!ssx.has(item.key)) {
      return false;
    }
    return handlers.isReplaceTargetNote(item);
  },
});
