import { describe, test, expect } from "vitest";
import type {
  StringParam,
  StringArrayParam,
  StructRefParam,
  StructArrayRefParam,
} from "./types";
import {
  isArrayParam,
  isArrayParamEx,
  isStructArrayParam,
  isStructParam,
} from "./typeTest";

describe("isArrayParam", () => {
  test("returns false for non-array param, true for array param", () => {
    const stringParam: StringParam = {
      kind: "string",
      default: "abc",
    };
    expect(stringParam).not.toSatisfy(isArrayParam);
  });
  test("returns true for array param", () => {
    const stringArrayParam: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b", "c"],
    };
    expect(stringArrayParam).toSatisfy(isArrayParam);
  });

  test("works as type guard", () => {
    const input: (StringParam | StringArrayParam)[] = [
      { kind: "string", default: "abc" },
      { kind: "string[]", default: ["a", "b", "c"] },
    ];
    const expected: StringArrayParam[] = [
      { kind: "string[]", default: ["a", "b", "c"] },
    ];
    const actual: StringArrayParam[] = input.filter(isArrayParam);
    expect(actual).toEqual(expected);
  });
});

describe("isArrayEx", () => {
  test("returns false for non-array param, true for array param of specified kind", () => {
    const stringParam: StringParam = {
      kind: "string",
      default: "abc",
    };
    expect(stringParam).not.toSatisfy((p) => isArrayParamEx(p, "string"));
  });
  test("returns true for array param of specified kind", () => {
    const stringArrayParam: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b", "c"],
    };
    expect(stringArrayParam).toSatisfy((p) => isArrayParamEx(p, "string"));
  });
  test("returns false for array param of different kind", () => {
    const stringArrayParam: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b", "c"],
    };
    expect(stringArrayParam).not.toSatisfy((p) => isArrayParamEx(p, "number"));
  });
});

describe("isStructParam", () => {
  test("returns true for struct param", () => {
    const structParam: StructRefParam = {
      kind: "struct",
      struct: "MyStruct",
      default: {},
    };
    expect(structParam).toSatisfy(isStructParam);
  });

  test("returns false for non-struct param", () => {
    const stringParam: StringParam = {
      kind: "string",
      default: "abc",
    };
    expect(stringParam).not.toSatisfy(isStructParam);
  });
});

describe("isStructArrayParam", () => {
  test("returns true for struct[] param", () => {
    const structArrayParam: StructArrayRefParam = {
      kind: "struct[]",
      struct: "MyStruct",
      default: [],
    };
    expect(structArrayParam).toSatisfy(isStructArrayParam);
  });

  test("returns false for non-struct[] param", () => {
    const stringArrayParam: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b"],
    };
    expect(stringArrayParam).not.toSatisfy(isStructArrayParam);
  });

  test("returns false for struct param", () => {
    const structParam: StructRefParam = {
      kind: "struct",
      struct: "MyStruct",
      default: {},
    };
    expect(structParam).not.toSatisfy(isStructArrayParam);
  });
});
