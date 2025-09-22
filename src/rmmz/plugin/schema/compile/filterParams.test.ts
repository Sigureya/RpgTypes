import { describe, expect, test } from "vitest";
import type { FilteredPluginSchema } from "./filtedTypes";
import { filterPluginSchemaByParam } from "./filterParams";
import type { PrimitiveParam } from "./kinds";
import type { PluginJSON } from "./kinds/core/pluginJSONTypes";

const paramIsNumber = (param: PrimitiveParam): param is PrimitiveParam => {
  return param.kind === "number";
};

interface TestCase {
  caseName: string;
  sample: PluginJSON;
  expected: FilteredPluginSchema<PrimitiveParam>;
  fn: (param: PrimitiveParam) => param is PrimitiveParam;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("result", () => {
      const result = filterPluginSchemaByParam(testCase.sample, testCase.fn);
      expect(result).toEqual(testCase.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "numberだけ抽出",
    fn: paramIsNumber,
    sample: {
      commands: {
        showMessage: {
          args: {
            message: { kind: "string", default: "" },
            spaker: { kind: "string", default: "" },
            faceName: { kind: "file", dir: "face", default: "" },
            faceIndex: { kind: "number", default: 0 },
          },
        },
      },
      meta: {},
      params: {
        text: { kind: "string", default: "" },
        value: { kind: "number", default: 0 },
      },
      structs: {
        Person: {
          params: {
            name: { kind: "string", default: "" },
            age: { kind: "number", default: 0 },
          },
        },
      },
      target: "MZ",
    },
    expected: {
      commands: {
        showMessage: {
          args: {
            faceIndex: { default: 0, kind: "number" },
          },
        },
      },
      params: { value: { kind: "number", default: 0 } },
      structs: {
        Person: {
          params: {
            age: { kind: "number", default: 0 },
          },
        },
      },
    },
  },
];

testCases.forEach(runTestCase);
