import { describe, test, expect } from "vitest";
import type { Context2, ContextUnion } from "./parseContext";
import type { StructParamPrimitive } from "./primitiveParams";
import { semanticAnalysis, sliceToken } from "./semantic";
import type { Token } from "./toknize/toknize";
import { tokenize } from "./toknize/toknize";

interface TestCase {
  name: string;
  input: string;
  token: Token[];
  parsedDefinitions: ContextUnion[];
}

const testCaseBoolean: TestCase = {
  name: "boolean",
  input: `@param bool
    @type boolean
    @text autoBattle
    @default false
    @on enabled
    @off disabled` as const,
  token: [
    { keyword: "param", value: "bool" },
    { keyword: "type", value: "boolean" },
    { keyword: "text", value: "autoBattle" },
    { keyword: "default", value: "false" },
    { keyword: "on", value: "enabled" },
    { keyword: "off", value: "disabled" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        bool: {
          kind: "boolean",
          default: false,
          on: "enabled",
          off: "disabled",
          text: "autoBattle",
        },
      },
    },
  ],
};
const testCaseNumber: TestCase = {
  name: "number",
  input: `@param num
    @min 0
    @max 1000
    @digit 3
    @type number
    @default 123` as const,
  token: [
    { keyword: "param", value: "num" },
    { keyword: "min", value: "0" },
    { keyword: "max", value: "1000" },
    { keyword: "digit", value: "3" },
    { keyword: "type", value: "number" },
    { keyword: "default", value: "123" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        num: {
          kind: "number",
          default: 123,
          min: 0,
          max: 1000,
          digit: 3,
        } satisfies StructParamPrimitive,
      },
    },
  ],
};
const testCaseNumberArray: TestCase = {
  name: "number[]",
  input: `@param numArray
    @type number[]
    @default [1, 2, 3]
    @min 0  
    @max 1000` as const,
  token: [
    { keyword: "param", value: "numArray" },
    { keyword: "type", value: "number[]" },
    { keyword: "default", value: "[1, 2, 3]" },
    { keyword: "min", value: "0" },
    { keyword: "max", value: "1000" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        numArray: {
          kind: "number[]",
          default: [1, 2, 3],
          min: 0,
          max: 1000,
        } satisfies StructParamPrimitive,
      },
    },
  ],
};

const testCaseString: TestCase = {
  name: "string",
  input: `* @param str
    * @type string
    * @desc This is a string parameter
    *  @default Hello` as const,
  token: [
    { keyword: "param", value: "str" },
    { keyword: "type", value: "string" },
    { keyword: "desc", value: "This is a string parameter" },
    { keyword: "default", value: "Hello" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        str: {
          kind: "string",
          default: "Hello",
          desc: "This is a string parameter",
        } satisfies StructParamPrimitive,
      },
    },
  ],
};

const testCaseWeapon: TestCase = {
  name: "weapon",
  input:
    "@param weapon\n@type weapon\n@default 0\n@desc This is a weapon parameter",
  token: [
    { keyword: "param", value: "weapon" },
    { keyword: "type", value: "weapon" },
    { keyword: "default", value: "0" },
    { keyword: "desc", value: "This is a weapon parameter" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        weapon: {
          kind: "weapon",
          default: 0,
          desc: "This is a weapon parameter",
        } satisfies StructParamPrimitive,
      },
    },
  ],
};

const testCaseMultipleParams: TestCase = {
  name: "multiple params",
  input: `@param weapon
    @type weapon
    @default 0
    @param item
    @type item
    @default 1`,
  token: [
    { keyword: "param", value: "weapon" },
    { keyword: "type", value: "weapon" },
    { keyword: "default", value: "0" },
    { keyword: "param", value: "item" },
    { keyword: "type", value: "item" },
    { keyword: "default", value: "1" },
  ],
  parsedDefinitions: [
    {
      context: "param",
      params: {
        weapon: {
          kind: "weapon",
          default: 0,
        } satisfies StructParamPrimitive,
        item: {
          kind: "item",
          default: 1,
        } satisfies StructParamPrimitive,
      },
    },
  ],
};
const testCasesCommand: TestCase = {
  name: "command with params",
  input: `@command newPerson
    @arg  name
    @type string
    @default "bob"
    @arg age
    @type number
    @default 42
    @command GetData
    @arg  id
    @type  number
    `,
  token: [
    { keyword: "command", value: "newPerson" },
    { keyword: "arg", value: "name" },
    { keyword: "type", value: "string" },
    { keyword: "default", value: '"bob"' },
    { keyword: "arg", value: "age" },
    { keyword: "type", value: "number" },
    { keyword: "default", value: "42" },
    { keyword: "command", value: "GetData" },
    { keyword: "arg", value: "id" },
    { keyword: "type", value: "number" },
  ],
  parsedDefinitions: [
    {
      context: "command",
      command: "newPerson",
      args: {
        name: {
          kind: "string",
          default: "bob",
        },
        age: {
          kind: "number",
          default: 42,
        },
      },
    },
    {
      context: "command",
      command: "GetData",
      args: {
        id: {
          kind: "number",
          default: 123,
        },
      },
    },
  ],
};

const testCasesStruct: TestCase = {
  name: "struct with params",
  input: ` /*~struct~Person:
  * @param name
  * @text The name of the person
  * @desc This is a description of the name parameter
  * @type string
  * @default "bob"
  * @param age
  * @type number
  *  @default 18
  */
  `,

  token: [
    { keyword: "struct", value: "Person" },
    { keyword: "param", value: "name" },
    { keyword: "text", value: "The name of the person" },
    { keyword: "desc", value: "This is a description of the name parameter" },
    { keyword: "type", value: "string" },
    { keyword: "default", value: '"bob"' },
    { keyword: "param", value: "age" },
    { keyword: "type", value: "number" },
    { keyword: "default", value: "18" },
  ],
  parsedDefinitions: [
    {
      context: "struct",
      struct: "Person",
      params: {
        name: {
          kind: "string",
          default: "bob",
          text: "The name of the person",
          desc: "This is a description of the name parameter",
        },
        age: {
          kind: "number",
          default: 18,
        },
      },
    },
  ],
};

const mergeTestCases = (caseName: string, cases: TestCase[]): TestCase => {
  return cases.reduce(
    (acc, { input, token, parsedDefinitions: nnnn }) => {
      return {
        input: `${acc.input} \n${input}`,
        token: [...acc.token, ...token],
        parsedDefinitions: [...acc.parsedDefinitions, ...nnnn],
        name: acc.name,
      };
    },
    {
      name: caseName,
      input: "",
      token: [],
      parsedDefinitions: [],
    }
  );
};

const runTestCases = (cases: TestCase[]) => {
  cases.forEach(({ name, input, token, parsedDefinitions }) => {
    describe(name, () => {
      test("tokenize", () => {
        const result = tokenize(input);
        expect(result).toEqual(token);
      });
      test("semanticAnalysis", () => {
        const result = semanticAnalysis(token);
        expect(result).toEqual(parsedDefinitions);
      });
    });
  });
};
describe("sliceToken", () => {
  test("", () => {
    const expected: Context2[] = [
      {
        head: { keyword: "param", value: "bool" },
        tokens: [
          { keyword: "type", value: "boolean" },
          { keyword: "text", value: "autoBattle" },
          { keyword: "default", value: "false" },
          { keyword: "on", value: "enabled" },
          { keyword: "off", value: "disabled" },
        ],
      },
      {
        head: { keyword: "param", value: "num" },
        tokens: [
          { keyword: "type", value: "number" },
          { keyword: "min", value: "0" },
          { keyword: "max", value: "1000" },
          { keyword: "digit", value: "3" },
          { keyword: "default", value: "123" },
        ],
      },
    ];
    const src: Token[] = [
      expected[0].head,
      ...expected[0].tokens,
      expected[1].head,
      ...expected[1].tokens,
    ];

    const result: Context2[] = sliceToken(src);
    expect(result).toEqual(expected);
  });
});
// describe("tokenize", () => {
//   runTestCases([
//     testCaseBoolean,
//     testCaseNumber,
//     testCaseNumberArray,
//     testCaseString,
//     testCaseWeapon,
//     testCaseMultipleParams,
//   ]);
// });
// describe("tokenize command", () => {
//   runTestCases([testCasesCommand]);
// });

// describe("tokenize struct", () => {
//   runTestCases([testCasesStruct]);
// });

// describe("tokenize merge test cases", () => {
//   const mergedCases = mergeTestCases("merged cases", [
//     // ...testCases,
//     testCasesCommand,
//     //    testCasesStruct,
//   ]);
//   runTestCases([mergedCases]);
// });
