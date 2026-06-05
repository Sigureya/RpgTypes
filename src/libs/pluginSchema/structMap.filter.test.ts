import { describe, expect, test, vi } from "vitest";
import type {
  PluginSchemaArray,
  PrimitiveParam,
  PluginStructSchemaArray,
} from "@sigureya/rmmz-plugin-schema";
import {
  filterStructParamsByFn,
  filterPluginSchemaByFn,
} from "@sigureya/rmmz-plugin-schema";

interface TestCase {
  caseName: string;
  schema: PluginSchemaArray;
  expected: PluginSchemaArray;
  fn: (param: PrimitiveParam, name: string) => boolean;
}

const eeq = (
  caseName: string,
  fn: (param: PrimitiveParam, name: string) => boolean,
  schema: PluginSchemaArray,
): TestCase => {
  return {
    caseName,
    fn,
    schema,
    expected: schema,
  };
};
const numParams = (schema: ReadonlyArray<PluginStructSchemaArray>): number => {
  return schema.map((s) => s.params.length).reduce((a, b) => a + b, 0);
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    describe("structs", () => {
      test("call", () => {
        const fn = vi.fn(testCase.fn);
        filterStructParamsByFn(testCase.schema.structs, fn);
        expect(fn).toHaveBeenCalledTimes(numParams(testCase.schema.structs));
        testCase.schema.structs.forEach((s) => {
          s.params.forEach((p) => {
            expect(fn).toHaveBeenCalledWith(p.attr, p.name);
          });
        });
      });
      test("returns expected struct names and structs", () => {
        const result = filterStructParamsByFn(
          testCase.schema.structs,
          testCase.fn,
        );
        expect(result.structs).toEqual(testCase.expected.structs);
      });
    });
    describe("filterPluginSchemaByFn", () => {
      test("returns expected schema", () => {
        const result = filterPluginSchemaByFn(testCase.schema, testCase.fn);
        expect(result.structs).toEqual(testCase.expected.structs);
        expect(result.params).toEqual(testCase.expected.params);
        expect(result.commands).toEqual(testCase.expected.commands);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "empty",
    schema: {
      params: [],
      commands: [],
      structs: [],
    },
    expected: {
      structs: [],
      commands: [],
      params: [],
    },
    fn: () => {
      throw new Error("should not be called");
    },
  },
  eeq("all number", (p) => p.kind === "number", {
    params: [
      {
        name: "maxValue",
        attr: { kind: "number", default: 100 },
      },
    ],
    commands: [
      {
        command: "SetPosition",
        desc: "Set the position of an event",
        args: [
          { name: "eventId", attr: { kind: "number", default: 0 } },
          { name: "x", attr: { kind: "number", default: 0 } },
          { name: "y", attr: { kind: "number", default: 0 } },
        ],
      },
    ],
    structs: [
      {
        struct: "Vector2",
        params: [
          { name: "x", attr: { kind: "number", default: 0 } },
          { name: "y", attr: { kind: "number", default: 0 } },
        ],
      },
    ],
  }),
  {
    caseName: "mixed",
    fn: (p) => p.kind === "string",
    schema: {
      commands: [],
      params: [],
      structs: [
        {
          struct: "Person",
          params: [
            { name: "name", attr: { kind: "string", default: "" } },
            { name: "age", attr: { kind: "number", default: 0 } },
          ],
        },
      ],
    },
    expected: {
      commands: [],
      params: [],
      structs: [
        {
          struct: "Person",
          params: [{ name: "name", attr: { kind: "string", default: "" } }],
        },
      ],
    },
  },
  {
    caseName: "all string",
    schema: {
      commands: [
        {
          command: "ShowText",
          args: [{ name: "text", attr: { kind: "string", default: "" } }],
        },
        {
          command: "s1call",
          args: [{ name: "s1", attr: { kind: "struct", struct: "s1" } }],
        },
      ],
      params: [
        {
          name: "gameTitle",
          attr: { kind: "string", default: "My Game" },
        },
      ],
      structs: [
        {
          struct: "s1",
          params: [{ name: "str", attr: { kind: "string", default: "" } }],
        },
        {
          struct: "s2",
          params: [
            { name: "strList", attr: { kind: "string[]", default: [] } },
          ],
        },
        {
          struct: "s3",
          params: [
            { name: "s1", attr: { kind: "struct", struct: "s1" } },
            { name: "s2List", attr: { kind: "struct[]", struct: "s2" } },
          ],
        },
      ],
    },
    expected: {
      commands: [],
      params: [],
      structs: [],
    },
    fn: (p) => p.kind !== "string" && p.kind !== "string[]",
  },

  {
    caseName: "sss",
    fn: (p) => p.kind !== "string" && p.kind !== "string[]",
    schema: {
      commands: [],
      params: [],
      structs: [
        {
          struct: "s1",
          params: [{ name: "str", attr: { kind: "string", default: "" } }],
        },
        {
          struct: "s2",
          params: [
            { name: "strList", attr: { kind: "string[]", default: [] } },
          ],
        },
        {
          struct: "s3",
          params: [
            { name: "s1", attr: { kind: "struct", struct: "s1" } },
            { name: "s2List", attr: { kind: "struct[]", struct: "s2" } },
          ],
        },
        {
          struct: "s4",
          params: [{ name: "s3", attr: { kind: "struct", struct: "s3" } }],
        },
        {
          struct: "s5",
          params: [
            { name: "s4List", attr: { kind: "struct[]", struct: "s4" } },
          ],
        },
      ],
    },
    expected: {
      commands: [],
      params: [],
      structs: [],
    },
  },
];

testCases.forEach(runTestCase);
