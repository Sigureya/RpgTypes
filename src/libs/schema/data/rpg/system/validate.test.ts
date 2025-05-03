import { describe, test, expect } from "vitest";
import { isSystemBooleanOptions } from "./validate";
import type { System_BoolanOptions } from "./system";

describe("isSystemBooleanOptions", () => {
  test("Valid", () => {
    const mock: System_BoolanOptions = {
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
      optSplashScreen: true,
    };
    expect(isSystemBooleanOptions(mock)).toBe(true);
  });
  test("invalid", () => {
    const mock: Pick<System_BoolanOptions, "optAutosave" | "optDisplayTp"> = {
      optAutosave: true,
      optDisplayTp: true,
    };
    expect(isSystemBooleanOptions(mock)).toBe(false);
  });
  test("invalid", () => {
    const mock: { [K in keyof System_BoolanOptions]: number } = {
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
