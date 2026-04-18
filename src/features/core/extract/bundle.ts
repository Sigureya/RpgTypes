import type {
  DataReadErrorItem,
  MapBatchReadResult,
  RawGameData,
  ReadArrayResult,
  ReadSystemResult,
} from "@RpgTypes/fileio";
import { FILENAME_SYSTEM } from "@RpgTypes/fileio";
import type {
  Data_Armor,
  Data_CommonEvent,
  Data_Troop,
  MapFileInfo,
} from "@RpgTypes/rmmz";
import type {
  ExtractedDataBundle,
  ExtractedCommonEventText,
  ExtractedBattleEventText,
  ExtractedMapTexts,
  EventContainerExtractor,
  ExtractedText,
} from "./text";
import {
  extractTextFromActor,
  extractTextFromClass,
  extractTextFromEnemy,
  extractTextFromItem,
  extractTextFromSkill,
  extractTextFromState,
  extractTextFromWeapon,
  extractTextFromArmor,
} from "./text";
import type { ExtractedSystemTexts } from "./text/system";
import { extractTextFromSystem } from "./text/system";

export interface ExtractedRawGameDataTextValue {
  mainData: ExtractedDataBundle;
  eventData: {
    commonEvents: ExtractedCommonEventText[];
    troops: ExtractedBattleEventText[];
  };
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
  system: ReadSystemResult<ExtractedSystemTexts>;
}

export interface ExtractedRawGameDataTexts {
  value: ExtractedRawGameDataTextValue;
  errors: DataReadErrorItem[];
}

export const extractTextFromRawGameData = (
  data: RawGameData,
  extractor: EventContainerExtractor,
): ExtractedRawGameDataTexts => {
  const actors = mapReadArrayResult(data.actors, extractTextFromActor);
  const armors = extractArmors(data.armors);
  const classes = mapReadArrayResult(data.classes, extractTextFromClass);
  const enemies = mapReadArrayResult(data.enemies, extractTextFromEnemy);
  const items = mapReadArrayResult(data.items, extractTextFromItem);
  const mapInfos = mapReadArrayResult(data.mapInfos, (item) => item);
  const skills = mapReadArrayResult(data.skills, extractTextFromSkill);
  const states = mapReadArrayResult(data.states, extractTextFromState);
  const weapons = mapReadArrayResult(data.weapons, extractTextFromWeapon);
  const commonEventResult = extractCommonEvents(data.commonEvents, extractor);
  const troopResult = extractTroops(data.troops, extractor);
  const mapFiles = extractMapFiles(data.mapFiles, extractor);
  const system = systemXX(data.system);
  const errors = collectDataReadErrors([
    actors,
    armors,
    classes,
    enemies,
    items,
    mapInfos,
    skills,
    states,
    weapons,
    commonEventResult,
    troopResult,
  ]).concat(collectMapAndSystemErrors(data.mapFiles, data.system));

  return {
    value: {
      eventData: {
        commonEvents: commonEventResult.data,
        troops: troopResult.data.flat(),
      },
      mapFiles,
      system,
      mainData: {
        actors: actors.data,
        armors: armors.data,
        classes: classes.data,
        enemies: enemies.data,
        items: items.data,
        skills: skills.data,
        states: states.data,
        weapons: weapons.data,
      },
    },
    errors,
  };
};

const systemXX = (
  data: RawGameData["system"],
): ReadSystemResult<ExtractedSystemTexts> => {
  return {
    message: data.message,
    system: data.system ? extractTextFromSystem(data.system) : null,
  };
};

const mapReadArrayResult = <T, R>(
  data: ReadArrayResult<T>,
  mapper: (value: T) => R,
): ReadArrayResult<R> => {
  return {
    error: data.error,
    fileName: data.fileName,
    success: data.success,
    data: data.success ? data.data.map(mapper) : [],
  };
};

const collectDataReadErrors = (
  list: ReadonlyArray<ReadArrayResult<unknown>>,
): DataReadErrorItem[] => {
  return list
    .filter((result) => !result.success)
    .map(
      (result): DataReadErrorItem => ({
        fileName: result.fileName,
        error: result.error,
      }),
    );
};

const collectMapAndSystemErrors = (
  mapFiles: RawGameData["mapFiles"],
  system: RawGameData["system"],
): DataReadErrorItem[] => {
  const mapInfoErrors: DataReadErrorItem[] =
    mapFiles.info.success === false
      ? [
          {
            fileName: mapFiles.info.filename,
            error: mapFiles.info.message,
          },
        ]
      : [];
  const mapFileErrors: DataReadErrorItem[] = mapFiles.invalidMaps.map(
    (item): DataReadErrorItem => ({
      fileName: item.filename,
      error: item.message,
    }),
  );
  const systemErrors: DataReadErrorItem[] =
    system.system === null
      ? [{ fileName: FILENAME_SYSTEM, error: system.message }]
      : [];
  return [...mapInfoErrors, ...mapFileErrors, ...systemErrors];
};

const extractArmors = (
  data: ReadArrayResult<Data_Armor>,
): ReadArrayResult<ExtractedText<Data_Armor>> => {
  return mapReadArrayResult(data, extractTextFromArmor);
};

const extractCommonEvents = (
  data: ReadArrayResult<Data_CommonEvent>,
  extractor: EventContainerExtractor,
): ReadArrayResult<ExtractedCommonEventText> => {
  return mapReadArrayResult(
    data,
    (common): ExtractedCommonEventText =>
      extractor.extractCommonEventText(common),
  );
};

const extractTroops = (
  data: ReadArrayResult<Data_Troop>,
  extractor: EventContainerExtractor,
): ReadArrayResult<ExtractedBattleEventText[]> => {
  return mapReadArrayResult(data, (troop): ExtractedBattleEventText[] =>
    extractor.extractBattleText(troop),
  );
};

const extractMapFiles = (
  data: RawGameData["mapFiles"],
  extractor: EventContainerExtractor,
): MapBatchReadResult<ExtractedMapTexts> => {
  const validMaps: MapFileInfo<ExtractedMapTexts>[] = data.validMaps.map(
    (map) => {
      return {
        editingName: map.editingName,
        filename: map.filename,
        map: extractor.extractMapTexts(map.map),
      };
    },
  );
  return {
    info: data.info,
    invalidMaps: data.invalidMaps,
    validMaps,
  };
};
