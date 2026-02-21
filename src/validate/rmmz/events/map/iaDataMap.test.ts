import { describe, test, expect } from "vitest";
import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { EventCommand, MoveRouteCommandUnknown } from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeCommandVariableFromConstant,
} from "@RpgTypes/rmmz";
import type { Data_Map, MapEvent } from "@RpgTypes/rmmz/rpg";
import {
  makeMapData,
  makeMapEvent,
  makeMapEventPage,
} from "@RpgTypes/rmmz/rpg";
import type { ValidateFunction } from "ajv";
const validate: ValidateFunction = require("./mapValidate.cjs");
const isDataMap = (data: unknown): data is Data_Map => {
  return validate(data);
};

const mockEventCommands: EventCommand[] = [
  makeCommandShowMessage({ speakerName: "Hero" }),
  makeCommandShowMessageBody("abc"),
  makeCommandVariableFromConstant({ startId: 1 }, { value: 123 }),
];

const makeMapWithEvents = <T extends EventCommandUnknown>(
  commands: T[],
): Data_Map<T> => {
  const mapEvent: MapEvent<T> = makeMapEvent({
    pages: [makeMapEventPage({ list: commands })],
  });
  return makeMapData({
    events: [null, mapEvent, null],
  });
};

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
    data: new Array(100).fill(0),
    displayName: "",
    disableDashing: false,
    encounterStep: 30,
    parallaxShow: false,
  };
  describe("validate mockEventCommands", () => {
    test("valid Data_Map", () => {
      expect(isDataMap(mockMap)).toBe(true);
    });

    test("generated valid Data_Map", () => {
      const mapData: Data_Map = makeMapData({});
      expect(isDataMap(mapData)).toBe(true);
    });
    test("generated valid Data_Map with events", () => {
      const mapData = makeMapWithEvents(mockEventCommands);
      expect(isDataMap(mapData)).toBe(true);
    });
    test("allows unknown event commands at schema level", () => {
      const mapData = makeMapWithEvents([
        {
          code: 123456,
          indent: 0,
          parameters: ["test parameter", null, undefined, 42, { a: 1, b: 2 }],
        },
      ]);
      expect(isDataMap(mapData)).toBe(true);
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
      test("event page move route command has additional property", () => {
        const invalidMap = makeMapWithEvents([
          {
            code: 0,
            indent: 0,
            parameters: [],
            invalid: "this should not be here",
          },
        ]);
        expect(invalidMap).not.toSatisfy(isDataMap);
      });
      test("event page with completely unknown command", () => {
        const invalidMap = makeMapWithEvents([
          {
            code: 0,
            indent: 0,
          } as EventCommandUnknown,
        ]);
        expect(invalidMap).not.toSatisfy(isDataMap);
      });
    });
  });
});

test("allows unknown move route commands at schema level", () => {
  interface BlokenMvMove extends MoveRouteCommandUnknown {
    indent?: null;
  }
  const mvEvent = makeMapEvent({
    pages: [
      makeMapEventPage<EventCommandUnknown, BlokenMvMove>({
        moveRoute: {
          wait: true,
          repeat: true,
          skippable: true,
          list: [
            { code: 0 },
            { code: 1, indent: null, parameters: [] },
            { code: 2, parameters: [] },
            {
              code: 2,
              parameters: [{ name: "audio", pan: 0, pitch: 0, volume: 0 }],
            },
          ],
        },
      }),
    ],
  });

  const dataMapMv = makeMapData({
    events: [null, mvEvent, null],
  });
  const result = validate(dataMapMv);
  expect(validate.errors).toBeNull();
  expect(result).toBe(true);
});
