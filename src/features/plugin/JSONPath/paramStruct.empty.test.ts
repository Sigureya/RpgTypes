import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParamsEx,
  PluginParam,
  StructRefParam,
  ClassifiedPluginParams,
} from "@RpgTypes/rmmz/plugin";
import { getPathFromStructParam } from "./paramStruct";
import type { StructPropertysPath } from "./types/struct2";

describe("empty struct", () => {
  const emptySchema: ClassifiedPluginParamsEx<{}> = {
    scalas: [],
    scalaArrays: [],
    structs: [],
    structArrays: [],
  };
  const expected = [] as const satisfies StructPropertysPath[];
  test("getPathFromStruct", () => {
    const param = {
      name: "emptyStruct",
      attr: { kind: "struct", struct: "EmptyStruct" },
    } as const satisfies PluginParam<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["EmptyStruct", emptySchema],
    ]);
    const result = getPathFromStructParam([param], "$", structMap);
    expect(result.items).toEqual(expected);
  });
});
