import { describe, test, expect } from "vitest";
import { makeSystemData } from "./make";
import type { Data_System } from "./system";
import type { SystemDataFragments } from "./systemSegments";

const fullFragments = {
  options: {
    optAutosave: true,
    optDisplayTp: false,
    optDrawTitle: true,
    optExtraExp: false,
    optFloorDeath: true,
    optFollowers: false,
    optKeyItemsNumber: true,
    optSideView: false,
    optSlipDeath: true,
    optTransparent: false,
    optMessageSkip: true,
    optSplashScreen: false,
  },
  advanced: {
    gameId: 12345,
    fontSize: 14,
    fallbackFonts: "fallback fonts",
    screenWidth: 1280,
    screenHeight: 720,
  },
  vehicles: {
    airship: {
      bgm: { name: "airship", volume: 100, pitch: 100, pan: 0 },
      characterName: "airship",
      characterIndex: 0,
      startMapId: 1,
      startX: 2,
      startY: 3,
    },
    boat: {
      bgm: { name: "boat", volume: 100, pitch: 100, pan: 0 },
      characterName: "boat",
      characterIndex: 1,
      startMapId: 4,
      startX: 5,
      startY: 6,
    },
    ship: {
      bgm: { name: "ship", volume: 100, pitch: 100, pan: 0 },
      characterName: "ship",
      characterIndex: 2,
      startMapId: 7,
      startX: 8,
      startY: 9,
    },
  },
  dataNames: {
    armorTypes: ["armorA", "armorB"],
    elements: ["fire", "ice"],
    equipTypes: ["weapon", "armor"],
    weaponTypes: ["sword", "axe"],
    skillTypes: ["magic", "special"],
    switches: ["switch1", "switch2"],
    variables: ["var1", "var2"],
  },
  bgm: {
    titleBgm: { name: "title", volume: 90, pitch: 100, pan: 0 },
    battleBgm: { name: "battle", volume: 80, pitch: 100, pan: 0 },
  },
  me: {
    gameoverMe: { name: "gameover", volume: 70, pitch: 100, pan: 0 },
    defeatMe: { name: "defeat", volume: 60, pitch: 100, pan: 0 },
    victoryMe: { name: "victory", volume: 50, pitch: 100, pan: 0 },
  },
  texts: {
    gameTitle: "Test Game",
    currencyUnit: "G",
  },
  debug: {
    battlerHue: 10,
    battlerName: "debugBattler",
    editMapId: 200,
  },
  battlerTest: {
    battleback1Name: "bb1",
    battleback2Name: "bb2",
    testTroopId: 100,
    testBattlers: [
      { actorId: 1, equips: [1, 2], level: 5 },
      { actorId: 2, equips: [3, 4], level: 6 },
    ],
  },
  images: {
    title1Name: "title1",
    title2Name: "title2",
  },
  gameInit: {
    startMapId: 10,
    startX: 20,
    startY: 30,
    partyMembersArray: [1, 2, 3],
  },
  size: {
    tileSize: 48,
    faceSize: 144,
    iconSize: 32,
  },
  editing: {
    jsonFormatLevel: 1,
    messageWidth1: 600,
    messageWidth2: 400,
  },
} as const satisfies Partial<SystemDataFragments>;

describe("makeSystemData", () => {
  const result: Data_System = makeSystemData(fullFragments);
  describe("copies and assigns main fragments", () => {
    test("copies options", () => {
      expect(result).toMatchObject(fullFragments.options);
    });
    test("copies dataNames", () => {
      expect(result).toMatchObject(fullFragments.dataNames);
    });
    test("copies vehicles", () => {
      expect(result).toMatchObject(fullFragments.vehicles);
    });
    test("copies bgm", () => {
      expect(result).toMatchObject(fullFragments.bgm);
    });
    test("copies me", () => {
      expect(result).toMatchObject(fullFragments.me);
    });
    test("copies texts", () => {
      expect(result).toMatchObject(fullFragments.texts);
    });

    test("copies images", () => {
      expect(result).toMatchObject(fullFragments.images);
    });
    test("copies size", () => {
      expect(result).toMatchObject(fullFragments.size);
    });
  });
  describe("copies and assigns optional fragments", () => {
    test("copies editing", () => {
      expect(result.editor).toEqual(fullFragments.editing);
      expect(result.editor).not.toBe(fullFragments.editing);
    });

    test("copies advanced", () => {
      expect(result.advanced).toMatchObject(fullFragments.advanced);
      expect(result.advanced).not.toBe(fullFragments.advanced);
    });
  });

  describe("deep copy for dataNames arrays", () => {
    test("armorTypes is deep copied", () => {
      expect(result.armorTypes).toEqual(fullFragments.dataNames.armorTypes);
      expect(result.armorTypes).not.toBe(fullFragments.dataNames.armorTypes);
    });
    test("elements is deep copied", () => {
      expect(result.elements).toEqual(fullFragments.dataNames.elements);
      expect(result.elements).not.toBe(fullFragments.dataNames.elements);
    });
    test("equipTypes is deep copied", () => {
      expect(result.equipTypes).toEqual(fullFragments.dataNames.equipTypes);
      expect(result.equipTypes).not.toBe(fullFragments.dataNames.equipTypes);
    });
    test("weaponTypes is deep copied", () => {
      expect(result.weaponTypes).toEqual(fullFragments.dataNames.weaponTypes);
      expect(result.weaponTypes).not.toBe(fullFragments.dataNames.weaponTypes);
    });
    test("skillTypes is deep copied", () => {
      expect(result.skillTypes).toEqual(fullFragments.dataNames.skillTypes);
      expect(result.skillTypes).not.toBe(fullFragments.dataNames.skillTypes);
    });
    test("switches is deep copied", () => {
      expect(result.switches).toEqual(fullFragments.dataNames.switches);
      expect(result.switches).not.toBe(fullFragments.dataNames.switches);
    });
    test("variables is deep copied", () => {
      expect(result.variables).toEqual(fullFragments.dataNames.variables);
      expect(result.variables).not.toBe(fullFragments.dataNames.variables);
    });
  });
});
