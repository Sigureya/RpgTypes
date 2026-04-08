import { describe, test, expect } from "vitest";
import type { RpgDataBundle } from "@RpgTypes/rmmz";
import {
  FILENAME_ACTORS,
  FILENAME_ANIMATIONS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_SYSTEM,
  FILENAME_TILESET,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
  makeActorData,
  makeArmorData,
  makeClassData,
  makeCommonEventData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
  makeSystemData,
  makeTroopData,
  makeWeaponData,
} from "@RpgTypes/rmmz";
import { fakeFileRead } from "./fakeFs";

interface TestCase {
  caseName: string;
  data: RpgDataBundle;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("actors", () => {
      const result = fakeFileRead(FILENAME_ACTORS, testCase.data);
      const expected = JSON.stringify(testCase.data.actors);
      expect(result).toBe(expected);
    });
    test("armors", () => {
      const result = fakeFileRead(FILENAME_ARMORS, testCase.data);
      const expected = JSON.stringify(testCase.data.armors);
      expect(result).toBe(expected);
    });
    test("classes", () => {
      const result = fakeFileRead(FILENAME_CLASSES, testCase.data);
      const expected = JSON.stringify(testCase.data.classes);
      expect(result).toBe(expected);
    });
    test("enemies", () => {
      const result = fakeFileRead(FILENAME_ENEMIES, testCase.data);
      const expected = JSON.stringify(testCase.data.enemies);
      expect(result).toBe(expected);
    });
    test("items", () => {
      const result = fakeFileRead(FILENAME_ITEMS, testCase.data);
      const expected = JSON.stringify(testCase.data.items);
      expect(result).toBe(expected);
    });
    test("skills", () => {
      const result = fakeFileRead(FILENAME_SKILLS, testCase.data);
      const expected = JSON.stringify(testCase.data.skills);
      expect(result).toBe(expected);
    });
    test("states", () => {
      const result = fakeFileRead(FILENAME_STATES, testCase.data);
      const expected = JSON.stringify(testCase.data.states);
      expect(result).toBe(expected);
    });
    test("system", () => {
      const result = fakeFileRead(FILENAME_SYSTEM, testCase.data);
      const expected = JSON.stringify(testCase.data.system);
      expect(result).toBe(expected);
    });
    test("troops", () => {
      const result = fakeFileRead(FILENAME_TROOPS, testCase.data);
      const expected = JSON.stringify(testCase.data.troops);
      expect(result).toBe(expected);
    });
    test("weapons", () => {
      const result = fakeFileRead(FILENAME_WEAPONS, testCase.data);
      const expected = JSON.stringify(testCase.data.weapons);
      expect(result).toBe(expected);
    });
    test("mapInfos", () => {
      const result = fakeFileRead(FILENAME_MAP_INFOS, testCase.data);
      const expected = JSON.stringify(testCase.data.mapInfos);
      expect(result).toBe(expected);
    });
    test("commonEvents", () => {
      const result = fakeFileRead(FILENAME_COMMON_EVENTS, testCase.data);
      const expected = JSON.stringify(testCase.data.commonEvents);
      expect(result).toBe(expected);
    });
    test("invalid filename", () => {
      const result = fakeFileRead("invalid.json", testCase.data);
      expect(result).toBeUndefined();
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "empty data",
    data: {
      system: makeSystemData({}),
      actors: [],
      classes: [],
      enemies: [],
      items: [],
      skills: [],
      states: [],
      troops: [],
      weapons: [],
      armors: [],
      commonEvents: [],
      animations: [],
      mapInfos: [],
      tilesets: [],
    },
  },
  {
    caseName: "normal case",
    data: {
      system: makeSystemData({}),
      actors: [makeActorData()],
      classes: [makeClassData()],
      enemies: [makeEnemyData()],
      items: [makeItemData()],
      skills: [makeSkillData()],
      states: [makeStateData()],
      troops: [makeTroopData()],
      weapons: [makeWeaponData()],
      armors: [makeArmorData()],
      commonEvents: [makeCommonEventData({})],
      animations: [],
      mapInfos: [
        {
          id: 1,
          name: "Map1",
          parentId: 0,
          order: 0,
          expanded: false,
          scrollX: 0,
          scrollY: 0,
        },
      ],
      tilesets: [],
    },
  },
];

describe("fakeFileRead", () => {
  describe("coverage", () => {
    testCases.forEach(runTestCase);
  });

  describe("should return undefined for non-matching filename or missing data", () => {
    const fileNameList = [
      FILENAME_ACTORS,
      FILENAME_CLASSES,
      FILENAME_ENEMIES,
      FILENAME_MAP_INFOS,
      FILENAME_WEAPONS,
      FILENAME_ANIMATIONS,
      FILENAME_ITEMS,
      FILENAME_SKILLS,
      FILENAME_STATES,
      FILENAME_SYSTEM,
      FILENAME_ARMORS,
      FILENAME_COMMON_EVENTS,
      FILENAME_TROOPS,
      FILENAME_TILESET,
    ];
    test.each(fileNameList)("should return correct data for %s", (filename) => {
      const result = fakeFileRead(filename, {});
      expect(result, filename).toBeUndefined();
    });
  });
});
