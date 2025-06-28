import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { TokenOf } from "./parse/types/tokenOf";
import type { StringArrayParam, StringParam } from "./primitiveParams";

describe("compileAttributes - string", () => {
  test("minimum set", () => {
    const tokens: TokenOf<StringParam>[] = [
      { keyword: "type", value: "string" },
      { keyword: "default", value: "abc" },
    ];
    const expected: StringParam = {
      kind: "string",
      default: "abc",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: TokenOf<StringParam>[] = [
      { keyword: "type", value: "string" },
      { keyword: "default", value: "xyz" },
      { keyword: "text", value: "label" },
      { keyword: "desc", value: "description" },
      { keyword: "parent", value: "parentName" },
    ];
    const expected: StringParam = {
      kind: "string",
      default: "xyz",
      text: "label",
      desc: "description",
      parent: "parentName",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});

describe("compileAttributes - string[]", () => {
  test("minimum set", () => {
    const tokens: TokenOf<StringArrayParam>[] = [
      { keyword: "type", value: "string[]" },
      { keyword: "default", value: `["a", "b", "c"]` },
    ];
    const expected: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b", "c"],
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("empty array", () => {
    const tokens: TokenOf<StringArrayParam>[] = [
      { keyword: "type", value: "string[]" },
      { keyword: "default", value: `[]` },
    ];
    const expected: StringArrayParam = {
      kind: "string[]",
      default: [],
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});
