import { describe, test, expect } from "vitest";
import type {
  StructRefParam,
  ClassifiedPluginParams,
  PluginParamEx,
} from "@RpgTypes/rmmz/plugin";
import { getPathFromStructParam } from "./paramStruct";
import type { StructPropertysPath } from "./types";

describe("empty struct", () => {
  test("getPathFromStruct", () => {
    const schema: ClassifiedPluginParams = {
      scalas: [],
      scalaArrays: [],
      structs: [],
      structArrays: [],
    };
    const param = {
      name: "emptyStruct",
      attr: { kind: "struct", struct: "EmptyStruct" },
    } as const satisfies PluginParamEx<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["EmptyStruct", schema],
    ]);
    const result = getPathFromStructParam([param], "$", structMap);
    expect(result.items).toEqual([]);
  });
  test("", () => {
    const schema: ClassifiedPluginParams = {
      scalas: [{ name: "actorId", attr: { kind: "actor", default: 0 } }],
      scalaArrays: [],
      structs: [],
      structArrays: [],
    };
    const param = {
      name: "notEmptyStruct",
      attr: { kind: "struct", struct: "NotEmptyStruct" },
    } as const satisfies PluginParamEx<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["NotEmptyStruct", schema],
    ]);
    const result = getPathFromStructParam([param], "$", structMap);
    const expected: StructPropertysPath[] = [
      {
        structName: "NotEmptyStruct",
        scalas: `$.notEmptyStruct["actorId"]`,
        scalaArrays: [],
      },
    ];
    expect(result.items).toEqual(expected);
  });
  test("struct array", () => {
    const schema: ClassifiedPluginParams = {
      scalas: [],
      scalaArrays: [
        {
          name: "numberArray",
          attr: { kind: "number[]", default: [] },
        },
      ],
      structArrays: [],
      structs: [],
    };
    const param = {
      name: "emptyStructArray",
      attr: { kind: "struct", struct: "EmptyStructArray" },
    } as const satisfies PluginParamEx<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["EmptyStructArray", schema],
    ]);
    const result = getPathFromStructParam([param], "$", structMap);
    const expected: StructPropertysPath[] = [
      {
        structName: "EmptyStructArray",
        scalas: undefined,
        scalaArrays: [
          {
            path: "$.emptyStructArray.numberArray[*]",
            param: schema.scalaArrays[0],
          },
        ],
      },
    ];
    expect(result.items).toEqual(expected);
  });
});
