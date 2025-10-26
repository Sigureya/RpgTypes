import { describe, expect, it } from "vitest";
import type { FileParam, FileArrayParam } from "./primitiveParams";
import {
  isArrayParam,
  paramHasText,
  isStringValueParam,
  isStructParam,
  isStructArrayParam,
} from "./typeTest";

describe("FileParam", () => {
  const param: FileParam = { kind: "file", default: "icon", dir: "img" };
  it("is not array param", () => {
    expect(param).not.toSatisfy(isArrayParam);
    expect(isArrayParam(param)).toBe(false);
  });

  it("is string value param", () => {
    expect(param).toSatisfy(isStringValueParam);
    expect(isStringValueParam(param)).toBe(true);
  });

  it("does not have text", () => {
    expect(param).not.toSatisfy(paramHasText);
    expect(paramHasText(param)).toBe(false);
  });
  it("is not struct param", () => {
    expect(param).not.toSatisfy(isStructParam);
    expect(isStructParam(param)).toBe(false);
  });
  it("is not struct array param", () => {
    expect(param).not.toSatisfy(isStructArrayParam);
    expect(isStructArrayParam(param)).toBe(false);
  });
});

describe("FileArrayParam", () => {
  const param: FileArrayParam = {
    kind: "file[]",
    dir: "img",
    default: ["icon1", "icon2"],
  };
  it("is array param", () => {
    expect(param).toSatisfy(isArrayParam);
    expect(isArrayParam(param)).toBe(true);
  });
  it("does not have text", () => {
    expect(param).not.toSatisfy(paramHasText);
    expect(paramHasText(param)).toBe(false);
  });
  it("is not struct param", () => {
    expect(param).not.toSatisfy(isStructParam);
    expect(isStructParam(param)).toBe(false);
  });
  it("is not struct array param", () => {
    expect(param).not.toSatisfy(isStructArrayParam);
    expect(isStructArrayParam(param)).toBe(false);
  });
});
