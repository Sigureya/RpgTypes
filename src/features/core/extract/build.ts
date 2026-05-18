import type {
  FileReadBundle,
  MapBatchReadResult,
  ReadSystemResult,
} from "@RpgTypes/fileio";
import {
  FILENAME_COMMON_EVENTS,
  FILENAME_TROOPS,
  FILENAME_ARMORS,
  FILENAME_ACTORS,
  FILENAME_CLASSES,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_WEAPONS,
  FILENAME_SYSTEM,
} from "@RpgTypes/fileio";
import type { ExtractedTextItem } from "@RpgTypes/libs";
import type { Data_Actor, MapFileInfo } from "@RpgTypes/rmmz";
import { createActorControlChars } from "@RpgTypes/rmmz";
import { extractTextFromRawGameData } from "./bundle";
import { extractMapEventTexts } from "./map";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
import { buildRawGameDataNoteNormalization } from "./noteNormarize";
import type {
  SystemKinds,
  RmmzTextPropertys,
  TextCommandParameter,
  EventContainerExtractor,
  ExtractedMapTexts,
  ExtractedSystemTexts,
  SystemTexts,
} from "./text";
import {
  convertCommonEvents,
  convertBattleEvents,
  convertDataList,
  convertStateData,
  convertSystemTypes,
} from "./text";
import type {
  ExtractedTextFinalWithNotes,
  RawGameDataNoteNormalization,
} from "./types";

export const buildExtractResultWithNotes = <UUID>(
  bundle: FileReadBundle,
  kinds: SystemKinds,
  terms: RmmzTextPropertys,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
  extractor: EventContainerExtractor,
): ExtractedTextFinalWithNotes<UUID> => {
  const extractedRawData = extractTextFromRawGameData(bundle.data, extractor);
  const normalizeNote = buildRawGameDataNoteNormalization(
    extractedRawData,
    bundle,
  );

  return buildFinalExtractedResult(
    bundle.data.actors.data,
    normalizeNote,
    kinds,
    terms,
    uuidGen,
    commandNameFn,
  );
};

const collectAllNoteSummaries = (
  normalizedData: RawGameDataNoteNormalization,
): SummarizedNote<SummarizedNoteValue>[] => {
  return [...normalizedData.dataNoteSummary, ...normalizedData.mapNoteSummary];
};

const buildFinalExtractedResult = <UUID>(
  actors: ReadonlyArray<Data_Actor>,
  normalizedData: RawGameDataNoteNormalization,
  kinds: SystemKinds,
  terms: RmmzTextPropertys,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextFinalWithNotes<UUID> => {
  const { eventData, mainData, mapFiles, system } = normalizedData.data.value;
  return {
    noteSummaries: collectAllNoteSummaries(normalizedData),
    pluginParams: [],
    map: flattenMapTexts(mapFiles, uuidGen, commandNameFn),
    commonEvents: convertCommonEvents(
      FILENAME_COMMON_EVENTS,
      eventData.commonEvents,
      uuidGen,
      commandNameFn,
    ),
    troops: convertBattleEvents(
      eventData.troops,
      FILENAME_TROOPS,
      commandNameFn,
      uuidGen,
    ),
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
): ExtractedTextItem<UUID>[] => {
  const mapEventTextGroups: ExtractedTextItem<UUID>[][][][] =
    mapFiles.validMaps.map((map) =>
      extractMapTextGroups(map, uuidGen, commandNameFn),
    );
  return mapEventTextGroups.flat(3);
};

const extractMapTextGroups = <UUID>(
  map: MapFileInfo<ExtractedMapTexts>,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextItem<UUID>[][][] => {
  return map.map.events.map((mapEvent): ExtractedTextItem<UUID>[][] =>
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
