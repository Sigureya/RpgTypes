import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type { TokenOf } from "./parse/types/tokenOf";
import type { BooleanParam } from "./primitiveParams";

describe("compileAttributes - boolean", () => {
  test("minimum set", () => {
    const tokens: Token[] = [
      { keyword: "type", value: "boolean" },
      { keyword: "default", value: "true" },
    ];
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: true,
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });
  test("minimum set", () => {
    const tokens: TokenOf<BooleanParam>[] = [
      { keyword: "default", value: "false" },
      { keyword: "type", value: "boolean" },
    ];
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: false,
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: Token[] = [
      { keyword: "type", value: "boolean" },
      { keyword: "default", value: "false" },
      { keyword: "text", value: "Enabled?" },
      { keyword: "desc", value: "Is this feature enabled?" },
      { keyword: "on", value: "Yes" },
      { keyword: "off", value: "No" },
      { keyword: "parent", value: "Parent Feature" },
    ];
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: false,
      text: "Enabled?",
      desc: "Is this feature enabled?",
      on: "Yes",
      off: "No",
      parent: "Parent Feature",
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });
});
