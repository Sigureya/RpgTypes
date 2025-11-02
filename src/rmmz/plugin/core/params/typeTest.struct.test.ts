import { describe, test, expect } from "vitest";
import type { StructRefParam, StructArrayRefParam } from "./types";
import {
  isArrayParam,
  isArrayParamEx,
  isStructArrayParam,
  isStructParam,
  isScalarParam,
  hasNumberValueParam,
} from "./typeTest";

describe("struct", () => {
  const param: StructRefParam = {
    kind: "struct",
    struct: "MyStruct",
  };
  test("isStructParam returns true for struct param", () => {
    expect(param).toSatisfy(isStructParam);
  });
  test("isStructArrayParam returns false for struct param", () => {
    expect(param).not.toSatisfy(isStructArrayParam);
  });
  test("isArrayParam returns false for struct param", () => {
    expect(param).not.toSatisfy(isArrayParam);
  });
  test("isArrayParamEx returns false for struct param", () => {
    expect(param).not.toSatisfy((p) => isArrayParamEx(p, "struct"));
  });
  test("isScalarParam returns false for struct param", () => {
    expect(param).not.toSatisfy(isScalarParam);
  });
  test("isNumberValueParamGG returns false for struct param", () => {
    expect(param).not.toSatisfy(hasNumberValueParam);
  });
});

describe("struct array", () => {
  const param: StructArrayRefParam = {
    kind: "struct[]",
    struct: "MyStruct",
  };
  test("isStructArrayParam returns true for struct array param", () => {
    expect(param).toSatisfy(isStructArrayParam);
  });
  test("isStructParam returns false for struct array param", () => {
    expect(param).not.toSatisfy(isStructParam);
  });

  test("isArrayParam returns true for struct array param", () => {
    expect(param).toSatisfy(isArrayParam);
  });
  test("isArrayParamEx returns true for struct array param", () => {
    expect(param).toSatisfy((p) => isArrayParamEx(p, "struct"));
  });
  test("isScalarParam returns false for struct array param", () => {
    expect(param).not.toSatisfy(isScalarParam);
  });
});
