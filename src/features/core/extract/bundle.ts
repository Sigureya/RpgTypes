import type {
  MapBatchReadResult,
  RawGameData,
  ReadArrayResult,
  ReadSystemResult,
} from "@RpgTypes/fileio";
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

export interface ExtractedRawGameDataTexts {
  mainData: ExtractedDataBundle;
  commonEvents: ReadArrayResult<ExtractedCommonEventText>;
  troops: ReadArrayResult<ExtractedBattleEventText[]>;
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
  system: ReadSystemResult<ExtractedSystemTexts>;
}

export const extractTextFromRawGameData = (
  data: RawGameData,
  extractor: EventContainerExtractor,
): ExtractedRawGameDataTexts => {
  const mainData: ExtractedDataBundle = {
    actors: mapReadArrayResult(data.actors, extractTextFromActor).data,
    armors: extractArmors(data.armors).data,
    classes: mapReadArrayResult(data.classes, extractTextFromClass).data,
    enemies: mapReadArrayResult(data.enemies, extractTextFromEnemy).data,
    items: mapReadArrayResult(data.items, extractTextFromItem).data,
    skills: mapReadArrayResult(data.skills, extractTextFromSkill).data,
    states: mapReadArrayResult(data.states, extractTextFromState).data,
    weapons: mapReadArrayResult(data.weapons, extractTextFromWeapon).data,
  };

  return {
    mainData,
    commonEvents: extractCommonEvents(data.commonEvents, extractor),
    troops: extractTroops(data.troops, extractor),
    mapFiles: extractMapFiles(data.mapFiles, extractor),
    system: systemXX(data.system),
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
    data: data.data.map(mapper),
  };
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
