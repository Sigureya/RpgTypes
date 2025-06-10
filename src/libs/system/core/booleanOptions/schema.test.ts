import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import makeSystemData from "src/system/make";
import type { Data_System } from "src/system/system";
import { makeBooleanOptions } from "./options";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./schema";
import type { System_BooleanOptionsRMMMZ as System_BooleanOptions } from "./types";

const ajv = new Ajv();
const isSystemBooleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
const keys: ReadonlySet<keyof System_BooleanOptions> = new Set(
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS.required
);

describe("", () => {
  test("", () => {
    expect(SCHEMA_SYSTEM_BOOLEAN_OPTIONS.required.length).toBe(keys.size);
  });
});
describe("", () => {
  const system: Data_System = makeSystemData({});
  test("", () => {
    expect(isSystemBooleanOptions(system)).toBe(true);
  });
});

describe("", () => {
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
  test("", () => {
    expect(isSystemBooleanOptions(mock)).toBe(true);
  });
  test("", () => {
    const options: Record<keyof System_BooleanOptions, boolean | number> = {
      ...mock,
      optSplashScreen: 0, // invalid type
    };
    expect(isSystemBooleanOptions(options)).toBe(false);
  });
  test("", () => {
    const mock: Omit<System_BooleanOptions, "optExtraExp"> = {
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
    expect(isSystemBooleanOptions(mock)).toBe(false);
  });
});

describe("", () => {
  test("", () => {
    const mock = makeBooleanOptions();
    expect(isSystemBooleanOptions(mock)).toBe(true);
  });
  test("", () => {
    const param: Partial<System_BooleanOptions> = { optAutosave: true };
    expect(isSystemBooleanOptions(param)).toBe(false);
    const options = makeBooleanOptions(param);
    expect(isSystemBooleanOptions(options)).toBe(true);
  });
});
