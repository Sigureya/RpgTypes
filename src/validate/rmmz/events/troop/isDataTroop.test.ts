import { describe, expect, test } from "vitest";
import { makeCommandCommonEvent, makeCommandPlayBGM } from "@RpgTypes/rmmz";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Troop } from "@RpgTypes/rmmz/events";
const validate = require("./troopValidate.cjs");

const isDataTroop = (data: unknown): data is Data_Troop => {
  return validate(data);
};

const commands: EventCommand[] = [
  makeCommandCommonEvent({ eventId: 5 }),
  makeCommandPlayBGM({ name: "Battle1", volume: 90, pitch: 100, pan: 0 }),
];

describe("isDataTroop", () => {
  describe("normal", () => {
    test("Valid troop without event pages", () => {
      const troop: Data_Troop = {
        id: 1,
        name: "Troop A",
        members: [],
        pages: [],
      };
      expect(troop).toSatisfy(isDataTroop);
    });

    test("Valid troop with event commands", () => {
      const troop: Data_Troop = {
        id: 2,
        name: "Troop With Events",
        members: [
          {
            enemyId: 1,
            x: 320,
            y: 240,
            hidden: false,
          },
        ],
        pages: [
          {
            conditions: {
              actorHp: 0,
              actorId: 0,
              enemyValid: 0,
              switchValid: 0,
            },
            list: commands,
            span: 0,
          },
        ],
      };
      expect(troop).toSatisfy(isDataTroop);
    });
  });
  describe("edge cases", () => {
    test("Invalid troop", () => {
      expect({}).not.toSatisfy(isDataTroop);
      expect({ id: "1", name: "x", members: [], pages: [] }).not.toSatisfy(
        isDataTroop,
      );
      expect(null).not.toSatisfy(isDataTroop);
      expect(undefined).not.toSatisfy(isDataTroop);
    });
  });
});
