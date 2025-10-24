import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParamsEx } from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { JSONPathJS } from "jsonpath-js";
import { getPathFromStructParam, getPathFromStructSchema } from "./paramStruct";
import type { StructPropertysPath, Result4 } from "./types/struct2";

interface MockPerson {
  name: string;
  age: number;
  b: boolean;
  numberArray: number[];
  stringArray: string[];
}

describe("person", () => {
  const personSchema: ClassifiedPluginParamsEx<MockPerson> = {
    scalas: [
      { name: "name", attr: { kind: "string", default: "" } },
      { name: "age", attr: { kind: "number", default: 0 } },
      { name: "b", attr: { kind: "boolean", default: false } },
    ],
    scalaArrays: [
      { name: "numberArray", attr: { kind: "number[]", default: [] } },
      { name: "stringArray", attr: { kind: "string[]", default: [] } },
    ],
    structs: [],
    structArrays: [],
  };
  const expected: StructPropertysPath[] = [
    {
      scalas: `$.person["name","age","b"]`,
      scalaArrays: ["$.person.numberArray[*]", "$.person.stringArray[*]"],
      structName: "MockPerson",
    },
  ];
  test("getPathFromStruct", () => {
    const param = {
      name: "person",
      attr: { kind: "struct", struct: "MockPerson" },
    } as const satisfies PluginParam<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["MockPerson", personSchema],
    ]);
    const result = getPathFromStructParam([param], "$", structMap);
    expect(result.items).toEqual(expected);
  });
  test("getPathFromStructSchema", () => {
    const result: Result4 = getPathFromStructSchema(
      "MockPerson",
      "$.person",
      new Map([["MockPerson", personSchema]])
    );
    expect(result.items).toEqual(expected);
  });
  test("isvalid path", () => {
    expected.forEach((item) => {
      expect(() => {
        new JSONPathJS(item.scalas);
      }).not.toThrow();
      item.scalaArrays.forEach((path) => {
        expect(() => {
          new JSONPathJS(path);
        }).not.toThrow();
      });
    });
  });
});
