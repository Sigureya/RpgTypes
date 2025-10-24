import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParamsEx } from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { getPathFromStructParam, getPathFromStructSchema } from "./paramStruct";
import type { Result3 } from "./types/struct2";

interface MockPerson {
  name: string;
  age: number;
  b: boolean;
}

describe("person", () => {
  const personSchema: ClassifiedPluginParamsEx<MockPerson> = {
    scalas: [
      { name: "name", attr: { kind: "string", default: "" } },
      { name: "age", attr: { kind: "number", default: 0 } },
      { name: "b", attr: { kind: "boolean", default: false } },
    ],
    scalaArrays: [],
    structs: [],
    structArrays: [],
  };
  const expected: Result3[] = [
    {
      scalas: `$.person["name","age","b"]`,
      scalaArrays: [],
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
    const result = getPathFromStructParam([param], "$.person", structMap);
    expect(result).toEqual(expected);
  });
  test("getPathFromStructSchema", () => {
    const result: Result3[] = getPathFromStructSchema(
      personSchema,
      "$.person",
      new Map()
    );
    expect(result).toEqual(expected);
  });
});
