import { describe, test, expect } from "vitest";

import Ajv from "ajv";
import makeSystemData from "@RpgTypes/system/make";
import type { Data_System } from "@RpgTypes/system/system";
import type { SystemDataFragments } from "@RpgTypes/system/systemSegments";
import type { System_BooleanOptionsRMMMZ } from "../booleanOptions";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "../booleanOptions";

const ajv = new Ajv();

const mockSystem: Data_System = makeSystemData({});

const test2 = <K extends keyof SystemDataFragments>(
  key: K,
  param: Partial<SystemDataFragments[K]>,
  fn: (data: unknown) => data is Record<keyof typeof param, unknown>
) => {
  const system: Data_System = makeSystemData({
    [key]: param,
  });
  test("", () => {
    expect(system).toMatchObject(param);
  });
  test("", () => {
    expect(fn(param)).toBe(true);
  });
  test("", () => {
    expect(fn(system)).toBe(true);
  });
};

describe("isSystemBooleanOptions", () => {
  const isSystemBooleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
  test("", () => {
    expect(isSystemBooleanOptions(mockSystem)).toBe(true);
  });
  describe("Valid", () => {
    const mock: System_BooleanOptionsRMMMZ = {
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
    test2("options", mock, isSystemBooleanOptions);
  });
  test("invalid", () => {
    const mock: Pick<
      System_BooleanOptionsRMMMZ,
      "optAutosave" | "optDisplayTp"
    > = {
      optAutosave: true,
      optDisplayTp: true,
    };
    expect(isSystemBooleanOptions(mock)).toBe(false);
  });
  test("invalid", () => {
    const mock: { [K in keyof System_BooleanOptionsRMMMZ]: number } = {
      optAutosave: 1,
      optDisplayTp: 1,
      optDrawTitle: 1,
      optExtraExp: 1,
      optFloorDeath: 1,
      optFollowers: 1,
      optKeyItemsNumber: 1,
      optSideView: 1,
      optSlipDeath: 1,
      optTransparent: 1,
      optMessageSkip: 1,
      optSplashScreen: 1,
    };
    expect(isSystemBooleanOptions(mock)).toBe(false);
  });
});
