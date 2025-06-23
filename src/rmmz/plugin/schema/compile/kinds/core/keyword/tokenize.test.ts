import { describe, test, expect } from "vitest";
import type { Token } from "./toknize";
import { tokenize } from "./toknize";
interface TestCase {
  name: string;
  input: string;
  tokenList: Token[];
}

const testCases: TestCase[] = [
  {
    name: "boolean",
    input: `@param bool
    @type boolean
    @text autoBattle
    @default false
    @on enabled
    @off disabled` as const,
    tokenList: [
      { keyword: "param", value: "bool" },
      { keyword: "type", value: "boolean" },
      { keyword: "text", value: "autoBattle" },
      { keyword: "default", value: "false" },
      { keyword: "on", value: "enabled" },
      { keyword: "off", value: "disabled" },
    ],
  },
  {
    name: "number",
    input: `@param num
    @min 0
    @max 1000
    @digit 3
    @type number
    @default 123` as const,
    tokenList: [
      { keyword: "param", value: "num" },
      { keyword: "min", value: "0" },
      { keyword: "max", value: "1000" },
      { keyword: "digit", value: "3" },
      { keyword: "type", value: "number" },
      { keyword: "default", value: "123" },
    ],
  },
  {
    name: "number[]",
    input: `@param numArray
    @type number[]
    @default [1, 2, 3]
    @min 0  
    @max 1000` as const,
    tokenList: [
      { keyword: "param", value: "numArray" },
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: "[1, 2, 3]" },
      { keyword: "min", value: "0" },
      { keyword: "max", value: "1000" },
    ],
  },
  {
    name: "string",
    input: `* @param str
    * @type string
    * @desc This is a string parameter
    *  @default Hello` as const,
    tokenList: [
      { keyword: "param", value: "str" },
      { keyword: "type", value: "string" },
      { keyword: "desc", value: "This is a string parameter" },
      { keyword: "default", value: "Hello" },
    ],
  },
  {
    name: "weapon",
    input:
      "@param weapon\n@type weapon\n@default 0\n@desc This is a weapon parameter",
    tokenList: [
      { keyword: "param", value: "weapon" },
      { keyword: "type", value: "weapon" },
      { keyword: "default", value: "0" },
      { keyword: "desc", value: "This is a weapon parameter" },
    ],
  },
  {
    input: [" * @param p   ", " * @text t "].join("\n"),
    name: "simple param and text",
    tokenList: [
      { keyword: "param", value: "p" },
      { keyword: "text", value: "t" },
    ],
  },
];

const runTestCases = (cases: TestCase[]) => {
  cases.forEach(({ name, input, tokenList: expected }) => {
    test(name, () => {
      const result = tokenize(input);
      expect(result).toEqual(expected);
    });
  });
};
describe("tokenize", () => {
  runTestCases(testCases);
});
