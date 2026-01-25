import { describe, test, expect } from "vitest";
import type { EventCommand } from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeCommandVariableFromConstant,
} from "@RpgTypes/rmmz";
import type { Data_Map } from "@RpgTypes/rmmz/rpg";
import {
  makeMapData,
  makeMapEvent,
  makeMapEventPage,
} from "@RpgTypes/rmmz/rpg";
const validate = require("./mapValidate.cjs");
const isDataMap = (data: unknown): data is Data_Map => {
  return validate(data);
};

const mockEventCommands: EventCommand[] = [
  makeCommandShowMessage({ speakerName: "Hero" }),
  makeCommandShowMessageBody("abc"),
  makeCommandVariableFromConstant({ startId: 1 }, { value: 123 }),
];

describe("isDataMap", () => {
  const mockMap: Data_Map = {
    autoplayBgm: false,
    bgm: { name: "", volume: 90, pitch: 100, pan: 0 },
    autoplayBgs: false,
    bgs: { name: "", volume: 90, pitch: 100, pan: 0 },
    battleback1Name: "",
    battleback2Name: "",
    encounterList: [
      {
        weight: 5,
        regionSet: [1, 2, 3],
        troopId: 1,
      },
    ],
    events: [null],
    height: 10,
    note: "",
    parallaxLoopX: false,
    parallaxLoopY: false,
    parallaxName: "",
    parallaxSx: 0,
    parallaxSy: 0,
    specifyBattleback: false,
    scrollType: 0,
    tilesetId: 1,
    width: 10,
    x: 0,
    y: 0,
    data: new Array(100).fill(0),
    displayName: "",
    disableDashing: false,
    encounterStep: 30,
    parallaxShow: false,
  };
  describe("validate mockEventCommands", () => {
    test("valid Data_Map", () => {
      expect(mockMap).toSatisfy(isDataMap);
    });

    test("generated valid Data_Map", () => {
      const mapData: Data_Map = makeMapData({});
      expect(mapData).toSatisfy(isDataMap);
    });
    test("valid", () => {
      const mapData: Data_Map = makeMapData({
        events: [
          null,
          makeMapEvent({
            pages: [makeMapEventPage({ list: mockEventCommands })],
          }),
          null,
        ],
      });
      expect(mapData).toSatisfy(isDataMap);
    });
  });

  describe("invalid Data_Map properties", () => {
    test("additional property", () => {
      const invalidMap = { ...mockMap, extraProperty: 123 };
      expect(invalidMap).not.toSatisfy(isDataMap);
    });
    describe("invalid Data_Map", () => {
      test("width negative", () => {
        const invalidMap = makeMapData({
          width: -10,
        });
        expect(invalidMap).not.toSatisfy(isDataMap);
      });
      test("height negative", () => {
        const invalidMap = makeMapData({
          height: -5,
        });
        expect(invalidMap).not.toSatisfy(isDataMap);
      });
    });
  });
});
