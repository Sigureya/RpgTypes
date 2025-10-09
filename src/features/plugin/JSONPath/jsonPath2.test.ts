import { describe, test, expect } from "vitest";
import type { PluginParamType } from "@RpgTypes/rmmz/plugin/core/pluginSchemaType";
import { JSONPathJS } from "jsonpath-js";
import { scalaParamPath, arrayParamPath } from "./jsonPath";
import type { ParamJSONPath } from "./types";

interface Person {
  name: string;
  age: number;
  items: number[];
}

const mockStruct = [
  {
    name: "age",
    attr: { kind: "number", default: 20 },
  },
  {
    name: "name",
    attr: { kind: "string", default: "Taro" },
  },
  {
    name: "items",
    attr: { kind: "item[]", default: [1, 2] },
  },
] as const satisfies PluginParamType<Person>[];

const mockPerson = {
  name: "Taro",
  age: 20,
  items: [3, 7],
} as const satisfies Person;

describe("scalaParamPath ", () => {
  describe("number param age", () => {
    const mockPath = "$.age";
    test("", () => {
      const result: ParamJSONPath = scalaParamPath(mockStruct[0], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        path: mockPath,
        param: mockStruct[0],
      };
      expect(result).toEqual(expected);
    });
    test("", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = [20];
      expect(value).toEqual(expected);
    });
  });

  describe("string param name", () => {
    const mockPath = "$.name";
    test("", () => {
      const result: ParamJSONPath = scalaParamPath(mockStruct[1], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        param: mockStruct[1],
        path: mockPath,
      };
      expect(result).toEqual(expected);
    });
    test("", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = ["Taro"];
      expect(value).toEqual(expected);
    });
  });
});

describe("arrayParamPath ", () => {
  describe("item[] param items", () => {
    const mockPath = "$.items[*]";
    test("", () => {
      const result = arrayParamPath(mockStruct[2], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        param: mockStruct[2],
        path: mockPath,
      };
      expect(result).toEqual(expected);
    });
    test("", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = [3, 7];
      expect(value).toEqual(expected);
    });
  });
});
