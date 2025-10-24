import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParams,
  PluginParam,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import { getPathFromStructParam } from "./paramStruct";
import type { ErrorCodes } from "./types/errorTypes";
import type { Result4 } from "./types/struct2";

const schema: ClassifiedPluginParams = {
  structs: [
    {
      name: "loopMock",
      attr: { kind: "struct", struct: "LoopMock" },
    },
  ],
  structArrays: [
    {
      name: "loopMockArray",
      attr: { kind: "struct[]", struct: "LoopMock" },
    },
  ],
  scalas: [],
  scalaArrays: [],
};

const errors: ErrorCodes = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct",
};

describe("cyclic struct", () => {
  const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
    ["LoopMock", schema],
  ]);
  test("getPathFromStruct", () => {
    const param = {
      name: "loop",
      attr: { kind: "struct", struct: "LoopMock" },
    } as const satisfies PluginParam<StructRefParam>;
    const result: Result4 = getPathFromStructParam([param], "$", structMap);
    const expected: Result4 = {
      items: [
        {
          scalaArrays: [],
          scalas: "$.loop[]",
          structName: "LoopMock",
        },
      ],
      errors: [
        { code: errors.cyclicStruct, path: "$.loop.loopMock" },
        { code: errors.cyclicStruct, path: "$.loop.loopMockArray[*]" },
      ],
    };
    expect(result.errors).toEqual(expected.errors);
    expect(result.items).toEqual(expected.items);
  });
});
