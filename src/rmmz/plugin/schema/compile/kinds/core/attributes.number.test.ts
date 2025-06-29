import { describe, test, expect } from "vitest";
import { compileAttributes } from "./attributes";
import type { ParamSoruceRecord } from "./attributes";
import type { NumberParam, NumberArrayParam } from "./primitiveParams";

describe("compileAttributes - number", () => {
  test("type only", () => {
    const token: ParamSoruceRecord<NumberParam> = {
      kind: "number",
    };

    const expected: NumberParam = {
      kind: "number",
      default: 0,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });

  test("with default", () => {
    const token: ParamSoruceRecord<NumberParam> = {
      kind: "number",
      default: "123.45",
    };

    const expected: NumberParam = {
      kind: "number",
      default: 123.45,
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("with all properties", () => {
    const token: ParamSoruceRecord<NumberParam> = {
      kind: "number",
      default: "123.45",
      text: "a number",
      desc: "this is a number",
      decimals: "2",
      min: "-1000.5",
      max: "1000.5",
    };

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
  test("type only", () => {
    const token: ParamSoruceRecord<NumberArrayParam> = {
      kind: "number[]",
    };

    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [],
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("with default", () => {
    const token: ParamSoruceRecord<NumberArrayParam> = {
      kind: "number[]",
      default: `["1", "2", "3"]`,
    };
    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [1, 2, 3],
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });

  test("with empty array", () => {
    const token: ParamSoruceRecord<NumberArrayParam> = {
      kind: "number[]",
      default: `[]`,
    };
    const expected: NumberArrayParam = {
      kind: "number[]",
      default: [],
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("with all properties", () => {
    const token: ParamSoruceRecord<NumberArrayParam> = {
      kind: "number[]",
      default: `[4, 5, 6]`,
      text: "a number array",
      desc: "this is a number array",
      min: "-1000.5",
      max: "1000.5",
      decimals: "2",
    };

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
