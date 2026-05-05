import type {
  ReadAllDataErrorMessages,
  MapBatchReadResult,
  ReadSystemResult,
  FileReadBundle,
} from "@RpgTypes/fileio";
import {
  FILENAME_ARMORS,
  FILENAME_ACTORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_WEAPONS,
  FILENAME_TROOPS,
  FILENAME_SYSTEM,
} from "@RpgTypes/fileio";
import type { Data_Actor, MapFileInfo } from "@RpgTypes/rmmz";
import { createActorControlChars } from "@RpgTypes/rmmz";
import type { ExtractedSystemTexts } from "dist/types";
import { extractTextFromRawGameData } from "./bundle";
import { ccedFromList, ctx } from "./commonEvent";
import { convertDataList, convertStateData } from "./mainData";
import { extractMapEventTexts } from "./map";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
import { buildRawGameDataNoteNormalization } from "./noteNormarize";
import type {
  SystemKinds,
  Terms,
  ExtractedTextFinal,
  SystemTexts,
  ExtractedTextItemG,
} from "./sss/types";
import type {
  TextCommandParameter,
  EventContainerExtractor,
  ExtractedMapTexts,
} from "./text";
import { convertSystemTypes } from "./text/system/conv";
import type { RawGameDataNoteNormalization } from "./types";

const READ_ERROR_MESSAGES: ReadAllDataErrorMessages = {
  dataConvertError: "データの変換に失敗しました。",
  fileNotFound: "ファイルが見つかりませんでした。",
  jsonParseError: "JSONの解析に失敗しました。",
  notArray: "データが配列ではありません。",
  invalidStructure: "データの構造が正しくありません。",
  mvAsMz: "RPGツクールMVのプロジェクトはサポートされていません。",
  validateFunctionError: "データの検証中にエラーが発生しました。",
};

export const buildExtractResult2 = <UUID>(
  kinds: SystemKinds,
  bundle: FileReadBundle,
  terms: Terms,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
  extractor: EventContainerExtractor,
): ExtractedTextFinal<UUID, SummarizedNote<SummarizedNoteValue>> => {
  const extractedRawData = extractTextFromRawGameData(bundle.data, extractor);
  const normalizeNote = buildRawGameDataNoteNormalization(
    extractedRawData,
    bundle,
  );

  return buildSuccessData(
    bundle.data.actors.data,
    normalizeNote,
    kinds,
    terms,
    uuidGen,
    commandNameFn,
  );
};

const ggn = (
  normalizedData: RawGameDataNoteNormalization,
): SummarizedNote<SummarizedNoteValue>[] => {
  return [...normalizedData.dataNoteSummary, ...normalizedData.mapNoteSummary];
};

const buildSuccessData = <UUID>(
  actors: ReadonlyArray<Data_Actor>,
  normalizedData: RawGameDataNoteNormalization,
  kinds: SystemKinds,
  terms: Terms,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextFinal<UUID, SummarizedNote<SummarizedNoteValue>> => {
  const { eventData, mainData, mapFiles, system } = normalizedData.data.value;
  return {
    noteX: ggn(normalizedData),
    pluginParams: [],
    map: flattenMapTexts(mapFiles, uuidGen, commandNameFn),
    commonEvents: ccedFromList(
      FILENAME_COMMON_EVENTS,
      eventData.commonEvents,
      uuidGen,
      commandNameFn,
    ),
    troops: ctx(eventData.troops, FILENAME_TROOPS, commandNameFn, uuidGen),
    armors: convertDataList(mainData.armors, FILENAME_ARMORS, terms, uuidGen),
    system: buildSystemTexts(system, uuidGen, kinds),
    actors: {
      texts: convertDataList(mainData.actors, FILENAME_ACTORS, terms, uuidGen),
      controlChars: createActorControlChars(actors),
    },
    classes: convertDataList(
      mainData.classes,
      FILENAME_CLASSES,
      terms,
      uuidGen,
    ),
    enemies: convertDataList(
      mainData.enemies,
      FILENAME_ENEMIES,
      terms,
      uuidGen,
    ),
    items: convertDataList(mainData.items, FILENAME_ITEMS, terms, uuidGen),
    skills: convertDataList(mainData.skills, FILENAME_SKILLS, terms, uuidGen),
    states: convertStateData(mainData.states, FILENAME_STATES, terms, uuidGen),
    weapons: convertDataList(
      mainData.weapons,
      FILENAME_WEAPONS,
      terms,
      uuidGen,
    ),
  };
};

const flattenMapTexts = <UUID>(
  mapFiles: MapBatchReadResult<ExtractedMapTexts>,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextItemG<UUID>[] => {
  const mapEventTextGroups: ExtractedTextItemG<UUID>[][][][] =
    mapFiles.validMaps.map((map) =>
      extractMapTextGroups(map, uuidGen, commandNameFn),
    );
  return mapEventTextGroups.flat(3);
};

const extractMapTextGroups = <UUID>(
  map: MapFileInfo<ExtractedMapTexts>,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextItemG<UUID>[][][] => {
  return map.map.events.map((mapEvent): ExtractedTextItemG<UUID>[][] =>
    extractMapEventTexts(mapEvent, map, uuidGen, commandNameFn),
  );
};

const buildSystemTexts = <UUID>(
  system: ReadSystemResult<ExtractedSystemTexts>,
  uuidGen: (text: string) => UUID,
  kinds: SystemKinds,
): SystemTexts<UUID> => {
  if (system.system === null) {
    return {
      gameTitle: "",
      filename: FILENAME_SYSTEM,
      texts: [],
    };
  }
  return {
    gameTitle: system.system.gameTitle,
    filename: FILENAME_SYSTEM,
    texts: convertSystemTypes(system.system, FILENAME_SYSTEM, kinds, uuidGen),
  };
};
