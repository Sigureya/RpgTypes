import { describe, test, expect } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type { NumberParam } from "./primitiveParams";

describe("compileAttributes - number", () => {
  test("最小セット", () => {
    const token: Token[] = [
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
    const token: Token[] = [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123.45" },
      { keyword: "text", value: "a number" },
      { keyword: "desc", value: "this is a number" },
      { keyword: "digit", value: "123" },
      { keyword: "min", value: "-1000.5" },
      { keyword: "max", value: "1000.5" },
    ] satisfies { keyword: "type" | keyof NumberParam; value: string }[];

    const expected: NumberParam = {
      kind: "number",
      default: 123.45,
      text: "a number",
      desc: "this is a number",
      digit: 123,
      min: -1000.5,
      max: 1000.5,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
});
