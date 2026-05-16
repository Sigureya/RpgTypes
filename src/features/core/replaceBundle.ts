import type {
  AssetFilesBundle,
  RawGameData,
  ReadArrayResult,
} from "@RpgTypes/fileio";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import type {
  EventContainerExtractor,
  RawGameDataNoteNormalization,
} from "./extract";
import {
  extractTextFromRawGameData,
  buildRawGameDataNoteNormalization,
} from "./extract";
import {
  replaceActorText,
  replaceItemText,
  replaceClassText,
  replaceEnemyText,
  replaceSkillText,
  replaceStateText,
  replaceSystemText,
} from "./replace/text";
import type { MapDataReplaceHandlers } from "./replace/types";
import {
  replaceCommonEventData,
  replaceTroopData,
  replaceMapData,
} from "./replaceEvent";

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

export const replaceRawDataWithAutoNoteFilter = (
  data: RawGameData,
  assetBundle: AssetFilesBundle,
  extractor: EventContainerExtractor,
  handlers: MapDataReplaceHandlers,
): {
  data: RawGameData<NormalizedEventCommand>;
  note: RawGameDataNoteNormalization;
} => {
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
  return {
    data: replaceRawDataBundle(data, h2),
    note: normalizedNote,
  };
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
