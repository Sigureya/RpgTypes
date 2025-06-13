import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_GAME_INITIAL } from "./schema";
import type { System_GameInitial } from "./types";

const ajv = new Ajv();
const isSystemGameInitial = ajv.compile(SCHEMA_SYSTEM_GAME_INITIAL);

describe("SCHEMA_SYSTEM_GAME_INITIAL", () => {
  const validData = {
    startMapId: 1,
    startX: 2,
    startY: 3,
    partyMembersArray: [4, 5],
  } as const satisfies System_GameInitial;

  describe("normal case", () => {
    test("schema validation", () => {
      expect(validData).toSatisfy(isSystemGameInitial);
    });
  });
  describe("error cases", () => {
    test("invalid schema", () => {
      const invalidData = {
        ...validData,
        startMapId: -1, // invalid
      };
      expect(invalidData).not.toSatisfy(isSystemGameInitial);
    });

    test("invalid schema", () => {
      const invalidData = {
        ...validData,
        startX: "invalid", // invalid
      };
      expect(invalidData).not.toSatisfy(isSystemGameInitial);
    });

    test("invalid schema", () => {
      const invalidData = {
        ...validData,
        startY: null, // invalid
      };
      expect(invalidData).not.toSatisfy(isSystemGameInitial);
    });

    test("invalid schema", () => {
      const invalidData = {
        ...validData,
        partyMembersArray: [4, "invalid"], // invalid
      };
      expect(invalidData).not.toSatisfy(isSystemGameInitial);
    });
  });
});
