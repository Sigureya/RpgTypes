import { describe, test, expect } from "vitest";
import {
  makeParamNamesArray,
  makeSoundsArray,
  makeTermsBasic,
  makeTermsCommandArray,
  makeTermsMessages,
  makeVehicleData,
} from "./core";
import { makeSystemData, makeSystemDataFromMV } from "./make";
import type { Data_SystemMV } from "./systemMV";

const mockMVData: Data_SystemMV = {
  menuCommands: [true, true, true, true, true, true],
  locale: "en",
  startMapId: 1,
  startX: 0,
  startY: 0,
  partyMembers: [4, 5, 6],
  magicSkills: [1, 2, 3],
  titleBgm: { name: "Title", volume: 90, pitch: 100, pan: 0 },
  battleBgm: { name: "Battle", volume: 90, pitch: 100, pan: 0 },
  airship: makeVehicleData({ characterName: "Airship", characterIndex: 0 }),
  boat: makeVehicleData({ characterName: "Boat", characterIndex: 0 }),
  ship: makeVehicleData({ characterName: "Ship", characterIndex: 0 }),
  title1Name: "Title1",
  armorTypes: ["Shield", "Accessory"],
  weaponTypes: ["Sword", "Axe"],
  attackMotions: [
    { type: 0, weaponImageId: 0 },
    { type: 1, weaponImageId: 3 },
  ],
  battlerHue: 0,
  battleback1Name: "Battleback1",
  battleback2Name: "Battleback2",
  gameTitle: "My RPG",
  defeatMe: { name: "Defeat", volume: 90, pitch: 100, pan: 0 },
  gameoverMe: { name: "GameOver", volume: 90, pitch: 100, pan: 0 },
  victoryMe: { name: "Victory", volume: 90, pitch: 100, pan: 0 },
  testTroopId: 1,
  battlerName: "Actor1",
  currencyUnit: "G",
  elements: ["Fire", "Ice"],
  equipTypes: ["Accessory", "Guard"],
  editMapId: 1,
  optDisplayTp: true,
  optDrawTitle: false,
  optExtraExp: true,
  optFloorDeath: false,
  optSideView: true,
  optFollowers: true,
  optTransparent: false,
  optSlipDeath: false,
  skillTypes: ["Magic", "Special"],
  sounds: makeSoundsArray(),
  switches: ["Switch1", "Switch2"],
  variables: ["Variable1", "Variable2"],
  windowTone: [0, 0, 0, 0],
  title2Name: "Title2",
  versionId: 12345,
  testBattlers: [{ actorId: 1, level: 1, equips: [1, 2, 3, 4] }],
  terms: {
    basic: makeTermsBasic({}),
    params: makeParamNamesArray({}),
    messages: makeTermsMessages({}),
    commands: makeTermsCommandArray({}),
  },
};

describe("makeSystemDataFromMV", () => {
  test("", () => {
    const systemMZ = makeSystemDataFromMV(mockMVData);
    expect(systemMZ).toMatchObject(mockMVData);
  });
});
