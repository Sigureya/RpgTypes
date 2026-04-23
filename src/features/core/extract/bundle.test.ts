import { describe, expect, test, vi } from "vitest";
import type { MockedObject } from "vitest";
import type {
  DataReadErrorItem,
  RawGameData,
  ReadArrayResult,
} from "@RpgTypes/fileio";
import {
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_SYSTEM,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
} from "@RpgTypes/fileio";
import type { Data_CommonEvent, Data_Map, Data_Troop } from "@RpgTypes/rmmz";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeCommonEventData,
  makeEnemyData,
  makeItemData,
  makeMapData,
  makeMapInfoData,
  makeSkillData,
  makeStateData,
  makeSystemData,
  makeTroopData,
  makeWeaponData,
} from "@RpgTypes/rmmz";
import { extractTextFromRawGameData } from "./bundle";
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
} from "./text";

const ok = <T>(fileName: string, data: T[]): ReadArrayResult<T> => ({
  success: true,
  fileName,
  error: "",
  data,
});

const ng = <T>(fileName: string, error: string): ReadArrayResult<T> => ({
  success: false,
  fileName,
  error,
  data: [],
});

const createExtractor = (): MockedObject<EventContainerExtractor> => ({
  extractCommonEventText: vi.fn((common: Data_CommonEvent) => ({
    eventId: common.id,
    name: common.name,
    commands: [],
  })),
  extractBattleText: vi.fn((troop: Data_Troop): ExtractedBattleEventText[] => [
    {
      eventId: troop.id,
      pageIndex: 0,
      commands: [],
    },
    {
      eventId: troop.id,
      pageIndex: 1,
      commands: [],
    },
  ]),
  extractMapTexts: vi.fn(
    (map: Data_Map): ExtractedMapTexts => ({
      displayedName: map.displayName,
      note: map.note,
      noteItems: [],
      events: [],
    }),
  ),
});

const makeBaseRawData = (): RawGameData => {
  return {
    actors: ok(FILENAME_ACTORS, [makeActorData({ id: 1, name: "ActorA" })]),
    armors: ok(FILENAME_ARMORS, [makeArmorData({ id: 1, name: "ArmorA" })]),
    classes: ok(FILENAME_CLASSES, [makeClassData({ id: 1, name: "ClassA" })]),
    commonEvents: ok(FILENAME_COMMON_EVENTS, [
      makeCommonEventData({ id: 1, name: "CommonA" }),
      makeCommonEventData({ id: 2, name: "CommonB" }),
    ]),
    enemies: ok(FILENAME_ENEMIES, [makeEnemyData({ id: 1, name: "EnemyA" })]),
    items: ok(FILENAME_ITEMS, [makeItemData({ id: 1, name: "ItemA" })]),
    mapInfos: ok(FILENAME_MAP_INFOS, [
      makeMapInfoData({ id: 1, name: "Map1" }),
    ]),
    skills: ok(FILENAME_SKILLS, [makeSkillData({ id: 1, name: "SkillA" })]),
    states: ok(FILENAME_STATES, [makeStateData({ id: 1, name: "StateA" })]),
    troops: ok(FILENAME_TROOPS, [
      makeTroopData({ id: 1, name: "TroopA" }),
      makeTroopData({ id: 2, name: "TroopB" }),
    ]),
    weapons: ok(FILENAME_WEAPONS, [makeWeaponData({ id: 1, name: "WeaponA" })]),
    mapFiles: {
      info: { success: true },
      validMaps: [
        {
          filename: "Map001.json",
          editingName: "Map1",
          map: makeMapData({ displayName: "MapA", note: "<tag:a>" }),
        },
        {
          filename: "Map002.json",
          editingName: "Map2",
          map: makeMapData({ displayName: "MapB", note: "" }),
        },
      ],
      invalidMaps: [],
    },
    system: {
      message: "",
      system: makeSystemData({ texts: { gameTitle: "Test Game" } }),
    },
    animations: ok("Animations.json", []),
    tilesets: ok("Tilesets.json", []),
  };
};

describe("extractTextFromRawGameData", () => {
  describe("extractTextFromRawGameData", () => {
    test("value を mainData/eventData に分離して返す", () => {
      const extractor = createExtractor();
      const data = makeBaseRawData();
      const result = extractTextFromRawGameData(data, extractor);

      expect(result.errors).toEqual([]);
      expect(result.value.mainData.actors).toHaveLength(1);
      expect(result.value.mainData.armors).toHaveLength(1);
      expect(result.value.eventData.commonEvents).toEqual<
        ExtractedCommonEventText[]
      >([
        { eventId: 1, name: "CommonA", commands: [] },
        { eventId: 2, name: "CommonB", commands: [] },
      ]);
      expect(result.value.eventData.troops).toEqual<ExtractedBattleEventText[]>(
        [
          { eventId: 1, pageIndex: 0, commands: [] },
          { eventId: 1, pageIndex: 1, commands: [] },
          { eventId: 2, pageIndex: 0, commands: [] },
          { eventId: 2, pageIndex: 1, commands: [] },
        ],
      );
      expect(result.value.mapFiles.validMaps).toHaveLength(2);
      expect(result.value.mapFiles.validMaps[0].map.displayedName).toBe("MapA");
      expect(result.value.system.message).toBe("");
      expect(result.value.system.system?.gameTitle).toBe("Test Game");
    });
    test("extractTextFromRawGameData 内で extractor の各抽出関数が呼び出される", () => {
      const extractor = createExtractor();
      const data = makeBaseRawData();

      extractTextFromRawGameData(data, extractor);
      expect(extractor.extractCommonEventText).toHaveBeenCalledTimes(2);
      expect(extractor.extractBattleText).toHaveBeenCalledTimes(2);
      expect(extractor.extractMapTexts).toHaveBeenCalledTimes(
        data.mapFiles.validMaps.length,
      );
    });
  });

  test("read 失敗を errors に集約し、失敗配列は空配列化する", () => {
    const extractor = createExtractor();
    const data = makeBaseRawData();

    data.actors = ng(FILENAME_ACTORS, "actors read failed");
    data.commonEvents = ng(FILENAME_COMMON_EVENTS, "common read failed");
    data.troops = ng(FILENAME_TROOPS, "troops read failed");
    data.mapFiles.info = {
      success: false,
      filename: FILENAME_MAP_INFOS,
      message: "map info read failed",
    };
    data.mapFiles.invalidMaps = [
      {
        filename: "Map999.json",
        editingName: "InvalidMap",
        map: null,
        message: "invalid map",
      },
    ];
    data.system = {
      system: null,
      message: "system read failed",
    };

    const result = extractTextFromRawGameData(data, extractor);

    expect(result.value.mainData.actors).toEqual([]);
    expect(result.value.eventData.commonEvents).toEqual([]);
    expect(result.value.eventData.troops).toEqual([]);
    expect(extractor.extractCommonEventText).not.toHaveBeenCalled();
    expect(extractor.extractBattleText).not.toHaveBeenCalled();

    expect(result.errors).toEqual<DataReadErrorItem[]>([
      { fileName: FILENAME_ACTORS, error: "actors read failed" },
      { fileName: FILENAME_TROOPS, error: "troops read failed" },
      { fileName: FILENAME_COMMON_EVENTS, error: "common read failed" },
      { fileName: FILENAME_MAP_INFOS, error: "map info read failed" },
      { fileName: "Map999.json", error: "invalid map" },
      { fileName: FILENAME_SYSTEM, error: "system read failed" },
    ]);
  });
});
