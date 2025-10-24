import { describe, test, expect } from "vitest";
import type {
  StructRefParam,
  ClassifiedPluginParams,
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
  ClassifiedPluginParamsEx,
} from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";
import { getScalaParams, getScalaArrayParams } from "./structSupport";

interface ArrayMock {
  numberArray: number[];
  stringArray: string[];
  files: string[];
}

interface ScalaMock {
  stringParam: string;
  numberParam: number;
  booleanParam: boolean;
}

describe("getScalaParams", () => {
  const mockData = {
    stringParam: "hello",
    numberParam: 42,
    booleanParam: true,
  } as const satisfies ScalaMock;
  const schema: ClassifiedPluginParamsEx<ScalaMock> = {
    structs: [],
    structArrays: [],
    scalas: [
      { name: "stringParam", attr: { kind: "string", default: "" } },
      { name: "numberParam", attr: { kind: "number", default: 0 } },
      { name: "booleanParam", attr: { kind: "boolean", default: false } },
    ],
    scalaArrays: [],
  };
  const path = `$["stringParam","numberParam","booleanParam"]`;
  test("path", () => {
    const path1 = getScalaParams(schema.scalas, "$");
    expect(path1).toBe(path);
  });
  test("find", () => {
    const jsonPath = new JSONPathJS(path);
    const result = jsonPath.find(mockData);
    const expected: (string | number | boolean)[] = ["hello", 42, true];
    expect(result).toEqual(expected);
  });
});

describe("getScalaArrayParams", () => {
  const mockData = {
    numberArray: [1, 2, 3],
    stringArray: ["a", "b", "c"],
    files: ["face.png", "icon.png"],
  } as const satisfies ArrayMock;
  const schema: ClassifiedPluginParamsEx<ArrayMock> = {
    structs: [],
    structArrays: [],
    scalas: [],
    scalaArrays: [
      { name: "numberArray", attr: { kind: "number[]", default: [] } },
      { name: "stringArray", attr: { kind: "string[]", default: [] } },
      { name: "files", attr: { kind: "file[]", default: [], dir: "img" } },
    ],
  };
  const paths = ["$.numberArray[*]", "$.stringArray[*]", "$.files[*]"] as const;

  test("", () => {
    const path1 = getScalaArrayParams(schema.scalaArrays, "$");
    expect(path1).toEqual(paths);
  });
  test("find number params", () => {
    const jsonPath = new JSONPathJS(paths[0]);
    const result = jsonPath.find(mockData);
    const expected: number[] = [1, 2, 3];
    expect(result).toEqual(expected);
  });
  test("find string params", () => {
    const jsonPath = new JSONPathJS(paths[1]);
    const result = jsonPath.find(mockData);
    const expected: string[] = ["a", "b", "c"];
    expect(result).toEqual(expected);
  });
  test("find file params", () => {
    const jsonPath = new JSONPathJS(paths[2]);
    const result = jsonPath.find(mockData);
    const expected: string[] = ["face.png", "icon.png"];
    expect(result).toEqual(expected);
  });
});
