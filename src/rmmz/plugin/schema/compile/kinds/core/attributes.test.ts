import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type {
  BooleanParam,
  StringParam,
  ComboParam,
  FileArrayParam,
  FileParam,
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

runTestCases<FileParam>("file", [
  {
    caseName: "最小セット",
    input: [
      { keyword: "type", value: "file" },
      { keyword: "default", value: "file.txt" },
      { keyword: "dir", value: "img" },
    ],
    expected: {
      kind: "file",
      default: "file.txt",
      dir: "img",
    },
  },
  {
    caseName: "フルセット",
    input: [
      { keyword: "type", value: "file" },
      { keyword: "default", value: "file.txt" },
      { keyword: "text", value: "a file" },
      { keyword: "desc", value: "this is a file" },
      { keyword: "dir", value: "img" },
      { keyword: "parent", value: "parentId" },
    ],
    expected: {
      kind: "file",
      default: "file.txt",
      text: "a file",
      desc: "this is a file",
      dir: "img",
      parent: "parentId",
    },
  },
]);
