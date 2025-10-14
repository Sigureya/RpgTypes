import { describe, test, expect } from "vitest";
import type { Trait } from "@RpgTypes/rmmz";
import type {
  PluginParam,
  StructArrayRefParam,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParamType2 } from "@RpgTypes/rmmz/plugin/core/pluginSchemaType";
import { JSONPathJS } from "jsonpath-js";
import type { JSONPathType } from "./jsonPathString";
import {
  arrayParamPath,
  scalaParamPath,
  structArrayParamPath,
  structParamPath,
} from "./param";
import type { ParamJSONPath } from "./types";

interface Person {
  name: string;
  age: number;
  items: number[];
}

interface TraitContainer {
  traits: Trait[];
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
] as const satisfies PluginParamType2<Person>[];

const mockPerson = {
  name: "Taro",
  age: 20,
  items: [3, 7],
} as const satisfies Person;

describe("scalaParamPath ", () => {
  describe("number param age", () => {
    const mockPath: JSONPathType<Person> = "$.age";
    test("create", () => {
      const result: ParamJSONPath = scalaParamPath(mockStruct[0], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        path: mockPath,
        param: mockStruct[0],
      };
      expect(result).toEqual(expected);
    });
    test("find", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = [20];
      expect(value).toEqual(expected);
    });
  });

  describe("string param name", () => {
    const mockPath: JSONPathType<Person> = "$.name";
    test("create", () => {
      const result: ParamJSONPath = scalaParamPath(mockStruct[1], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        param: mockStruct[1],
        path: mockPath,
      };
      expect(result).toEqual(expected);
    });
    test("find", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = ["Taro"];
      expect(value).toEqual(expected);
    });
  });
});

describe("arrayParamPath ", () => {
  describe("item[] param items", () => {
    const mockPath: JSONPathType<Person> = "$.items[*]";
    test("create", () => {
      const result = arrayParamPath(mockStruct[2], "$");
      const expected: ParamJSONPath = {
        parent: "$",
        param: mockStruct[2],
        path: mockPath,
      };
      expect(result).toEqual(expected);
    });
    test("find", () => {
      const jsonPath = new JSONPathJS(mockPath);
      const value = jsonPath.find(mockPerson);
      const expected = [3, 7];
      expect(value).toEqual(expected);
    });
  });
});

describe("structParamPath", () => {
  const path = "$.trait";
  test("create", () => {
    const param: PluginParam<StructRefParam> = {
      name: "trait",
      attr: { kind: "struct", struct: "Trait", default: {} },
    };
    const result = structParamPath(param, "$");
    const expected: ParamJSONPath<PluginParam<StructRefParam>> = {
      parent: "$",
      param: param,
      path: path,
    };
    expect(result).toEqual(expected);
  });
  test("find", () => {
    const obj = {
      trait: { code: 11, dataId: 81, value: 123 },
    } as const satisfies { trait: Trait };
    const jsonPath = new JSONPathJS(path);
    const value = jsonPath.find(obj);
    const expected: Trait[] = [{ code: 11, dataId: 81, value: 123 }];
    expect(value).toEqual(expected);
  });
});

describe("structArrayParamPath", () => {
  const path: JSONPathType<TraitContainer> = "$.traits[*]";
  test("create", () => {
    const param: PluginParam<StructArrayRefParam> = {
      name: "traits",
      attr: { kind: "struct[]", struct: "Trait", default: [] },
    };
    const result: ParamJSONPath<PluginParam> = structArrayParamPath(param, "$");
    const expected: ParamJSONPath<PluginParam> = {
      parent: "$",
      param: param,
      path: path,
    };
    expect(result).toEqual(expected);
  });
});
