import { test, expect, describe } from "vitest";
import Ajv from "ajv";

import { makeSystemData } from "./make";
import type { Data_System } from "./system";
import type { SystemDataFragments } from "./systemSegments";
import {
  makeBooleanOptions,
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
} from "./booleanOptions";
import type { System_GameInitial } from "./subset";

const test2 = <K extends keyof SystemDataFragments>(
  key: K,
  param: Required<SystemDataFragments[K]>,
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
  const ajv = new Ajv();
  const isSystemBooleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
  describe("", () => {
    const options = makeBooleanOptions({});
    test2("options", options, isSystemBooleanOptions);
  });
  describe("", () => {
    const options = makeBooleanOptions({
      optExtraExp: false,
      optAutosave: true,
    });
    test2("options", options, isSystemBooleanOptions);
  });

  describe("", () => {
    const options = makeBooleanOptions({
      optExtraExp: false,
      optAutosave: true,
    });
    const system = makeSystemData({ options: options });
    test("", () => {
      expect(system).toMatchObject(options);
      expect(system.optExtraExp).toBe(options.optExtraExp);
      expect(system.optAutosave).toBe(options.optAutosave);
    });
  });
});
// describe("", () => {
//   const init: System_GameInitial = {
//     startMapId: 0,
//     startX: 0,
//     startY: 0,
//     partyMembersArray: [1, 5],
//   };
// });
