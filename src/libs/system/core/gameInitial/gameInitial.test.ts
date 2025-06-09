import Ajv from "ajv";
import { describe, test, expect } from "vitest";
import { makeGameInitial } from "./gameInitial";
import { SCHEMA_SYSTEM_GAME_INITIAL } from "./schema";
import type { System_GameInitial } from "./types";

const ajv = new Ajv();
const isSystemGameInitial = ajv.compile(SCHEMA_SYSTEM_GAME_INITIAL);

describe("makeGameInitial", () => {
  test("default values", () => {
    const gameInitial = makeGameInitial({});
    expect(gameInitial).toMatchObject({
      startMapId: 0,
      startX: 0,
      startY: 0,
      partyMembersArray: [1],
    } satisfies System_GameInitial);
  });

  test("custom values", () => {
    const gameInitial = makeGameInitial({
      startMapId: 1,
      startX: 2,
      startY: 3,
      partyMembersArray: [4, 5],
    });
    expect(gameInitial).toMatchObject({
      startMapId: 1,
      startX: 2,
      startY: 3,
      partyMembersArray: [4, 5],
    } satisfies System_GameInitial);
  });
});
describe("SCHEMA_SYSTEM_GAME_INITIAL", () => {
  const validData = {
    startMapId: 1,
    startX: 2,
    startY: 3,
    partyMembersArray: [4, 5],
  } as const satisfies System_GameInitial;
  test("schema validation", () => {
    expect(isSystemGameInitial(validData)).toBe(true);
  });

  test("invalid schema", () => {
    const invalidData = {
      ...validData,
      startMapId: -1, // invalid
    };
    expect(isSystemGameInitial(invalidData)).toBe(false);
  });
  test("invalid schema", () => {
    const invalidData = {
      ...validData,
      startX: "invalid", // invalid
    };
    expect(isSystemGameInitial(invalidData)).toBe(false);
  });
  test("invalid schema", () => {
    const invalidData = {
      ...validData,
      startY: null, // invalid
    };
    expect(isSystemGameInitial(invalidData)).toBe(false);
  });
  test("invalid schema", () => {
    const invalidData = {
      ...validData,
      partyMembersArray: [4, "invalid"], // invalid
    };
    expect(isSystemGameInitial(invalidData)).toBe(false);
  });
});
