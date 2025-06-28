import { describe, test, expect } from "vitest";
import { compileAttributes } from "./attributes";
import type { TokenOf } from "./parse/types/tokenOf";
import type { NumberParam, NumberArrayParam } from "./primitiveParams";

describe("compileAttributes - number", () => {
  test("最小セット", () => {
    const token: TokenOf<NumberParam>[] = [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123.45" },
    ];

    const expected: NumberParam = {
      kind: "number",
      default: 123.45,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("フルセット", () => {
    const token: TokenOf<NumberParam>[] = [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123.45" },
      { keyword: "text", value: "a number" },
      { keyword: "desc", value: "this is a number" },
      { keyword: "decimals", value: "2" },
      { keyword: "min", value: "-1000.5" },
      { keyword: "max", value: "1000.5" },
    ];

    const expected: NumberParam = {
      kind: "number",
      default: 123.45,
      text: "a number",
      desc: "this is a number",
      decimals: 2,
      min: -1000.5,
      max: 1000.5,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
});

describe("compileAttributes - number[]", () => {
  test("最小セット", () => {
    const token: TokenOf<NumberArrayParam>[] = [
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: `["1", "2", "3"]` },
    ];

    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [1, 2, 3],
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });

  test("空の配列", () => {
    const token: TokenOf<NumberArrayParam>[] = [
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: `[]` },
    ];

    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [],
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("フルセット", () => {
    const token: TokenOf<NumberArrayParam>[] = [
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: `["4", "5", "6"]` },
      { keyword: "text", value: "a number array" },
      { keyword: "decimals", value: "2" },
      { keyword: "desc", value: "this is a number array" },
      { keyword: "min", value: "-1000.5" },
      { keyword: "max", value: "1000.5" },
    ];

    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [4, 5, 6],
      text: "a number array",
      desc: "this is a number array",
      min: -1000.5,
      max: 1000.5,
      decimals: 2,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
});
