import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type {
  BooleanParam,
  StringParam,
  ComboParam,
  FileArrayParam,
  FileParam,
  GenericIdParam,
  StructParamPrimitive,
} from "./primitiveParams";

interface TestCase<T extends StructParamPrimitive = StructParamPrimitive> {
  caseName: string;
  input: Token[];
  expected: T;
}

const runTestCases = <T extends StructParamPrimitive>(
  groupName: string,
  testCases: TestCase<T>[]
) => {
  describe(`compileAttributes - ${groupName}`, () => {
    testCases.forEach(({ caseName, input, expected }) => {
      test(`${caseName} - ${expected.kind}`, () => {
        const result = compileAttributes(input);
        expect(result).toEqual(expected);
      });
    });
  });
};

runTestCases<StringParam>("string", [
  {
    caseName: "最小セット",
    input: [
      { keyword: "type", value: "string" },
      { keyword: "default", value: "xyz" },
    ],
    expected: {
      kind: "string",
      default: "xyz",
    },
  },
]);
runTestCases<BooleanParam>("boolean", [
  {
    caseName: "最小セット",
    input: [
      { keyword: "type", value: "boolean" },
      { keyword: "default", value: "true" },
    ],
    expected: {
      kind: "boolean",
      default: true,
    },
  },
  {
    caseName: "フルセット",
    input: [
      { keyword: "type", value: "boolean" },
      { keyword: "default", value: "true" },
      { keyword: "text", value: "is true" },
      { keyword: "desc", value: "this is a boolean" },
      { keyword: "on", value: "enabled" },
      { keyword: "off", value: "disabled" },
    ],
    expected: {
      kind: "boolean",
      default: true,
      text: "is true",
      desc: "this is a boolean",
      on: "enabled",
      off: "disabled",
    },
  },
]);
runTestCases("number", [
  {
    caseName: "最小セット",
    input: [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123.45" },
    ],
    expected: {
      kind: "number",
      default: 123.45,
    },
  },
  {
    caseName: "フルセット",
    input: [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123.45" },
      { keyword: "text", value: "a number" },
      { keyword: "desc", value: "this is a number" },
      { keyword: "digit", value: "123" },
      { keyword: "min", value: "-1000.5" },
      { keyword: "max", value: "1000.5" },
    ],
    expected: {
      kind: "number",
      default: 123.45,
      text: "a number",
      desc: "this is a number",
      digit: 123,
      min: -1000.5,
      max: 1000.5,
    },
  },
]);

runTestCases<ComboParam>("combo", [
  {
    caseName: "最小セット",
    input: [
      { keyword: "type", value: "combo" },
      { keyword: "default", value: "option1" },
      { keyword: "text", value: "a combo" },
      { keyword: "desc", value: "this is a combo" },
      { keyword: "parent", value: "parentId" },
    ],
    expected: {
      kind: "combo",
      default: "option1",
      options: [],
      text: "a combo",
      desc: "this is a combo",
      parent: "parentId",
    },
  },
]);
