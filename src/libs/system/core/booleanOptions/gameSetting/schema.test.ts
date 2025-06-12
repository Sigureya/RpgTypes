import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeBooleanOptions } from "./options";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./schema";
import type { System_BooleanOptionsRMMMZ as System_BooleanOptions } from "./types";

const ajv = new Ajv();
const isSystemBooleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
const keys: ReadonlySet<keyof System_BooleanOptions> = new Set(
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS.required
);

describe("SCHEMA_SYSTEM_BOOLEAN_OPTIONS structure", () => {
  test("required keys length matches unique key set size", () => {
    expect(SCHEMA_SYSTEM_BOOLEAN_OPTIONS.required.length).toBe(keys.size);
  });
});

describe("Direct System_BooleanOptions validation", () => {
  const mock: System_BooleanOptions = {
    optAutosave: true,
    optDisplayTp: true,
    optDrawTitle: true,
    optExtraExp: true,
    optFloorDeath: true,
    optFollowers: true,
    optKeyItemsNumber: true,
    optSideView: true,
    optSlipDeath: true,
    optTransparent: true,
    optMessageSkip: true,
    optSplashScreen: false,
  };
  test("valid System_BooleanOptions passes schema", () => {
    expect(mock).toSatisfy(isSystemBooleanOptions);
  });
  test("invalid type in options fails schema", () => {
    const options: Record<keyof System_BooleanOptions, boolean | number> = {
      ...mock,
      optSplashScreen: 0, // invalid type
    };
    expect(options).not.toSatisfy(isSystemBooleanOptions);
  });
  test("missing required property fails schema", () => {
    const mockMissing: Omit<System_BooleanOptions, "optExtraExp"> = {
      optAutosave: true,
      optDisplayTp: true,
      optDrawTitle: true,
      optFloorDeath: true,
      optFollowers: true,
      optKeyItemsNumber: true,
      optSideView: true,
      optSlipDeath: true,
      optTransparent: true,
      optMessageSkip: true,
      optSplashScreen: false,
    };
    expect(mockMissing).not.toSatisfy(isSystemBooleanOptions);
  });
});

describe("makeBooleanOptions utility", () => {
  test("makeBooleanOptions returns valid options", () => {
    const mock = makeBooleanOptions();
    expect(mock).toSatisfy(isSystemBooleanOptions);
  });
  describe("", () => {
    const param: Partial<System_BooleanOptions> = { optAutosave: true };
    test("partial input fails, but makeBooleanOptions fills defaults", () => {
      expect(param).not.toSatisfy(isSystemBooleanOptions);
    });
    test("", () => {
      const options: System_BooleanOptions = makeBooleanOptions(param);
      expect(options).toSatisfy(isSystemBooleanOptions);
    });
  });
});
