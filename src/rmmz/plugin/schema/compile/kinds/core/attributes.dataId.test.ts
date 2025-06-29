import { describe, expect, test } from "vitest";
import { compileAttributes2 } from "./attributes";
import type { StructParamPrimitive } from "./primitiveParams";

describe("", () => {
  test("", () => {
    const mock: Partial<Record<keyof StructParamPrimitive, string>> = {
      kind: "enemy",
      default: "0",
    };
    const expected: StructParamPrimitive = {
      kind: "enemy",
      default: 0,
    };
    expect(compileAttributes2(mock)).toEqual(expected);
  });
});
