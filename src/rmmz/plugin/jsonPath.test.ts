import { describe, test, expect } from "vitest";
import { JSONPathJS } from "jsonpath-js";
import type { PluginStructSchemaArray } from "./core";
import { structToJsonPath2 } from "./jsonPath";

interface Person {
  name: string;
  age: number;
  items: number[];
}

interface Pair {
  path: string[];
  value: unknown;
  key: string;
}

interface TestCase<T> {
  caseName: string;
  paths: Pair[];
  object: Record<keyof T, number | string | number[]>;
  schema: PluginStructSchemaArray;
}

interface PathSegmentsResult {
  value: unknown;
  segments: (string | number)[];
}

const runTestCase = <T>(testCase: TestCase<T>) => {
  describe(`testCase.caseName struct:${testCase.schema.struct}`, () => {
    describe("create JSON Path", () => {
      test("", () => {
        const result = structToJsonPath2(testCase.schema.params, ["$"]);
        expect(result.length).toBe(testCase.schema.params.length);
      });
    });

    describe("JSON Path", () => {
      testCase.paths.forEach(({ path, value, key }) => {
        test(key, () => {
          const jsonPath = new JSONPathJS(path.join());
          const result: PathSegmentsResult[] = jsonPath.pathSegments(
            testCase.object
          );
          const expected: PathSegmentsResult[] = [
            {
              segments: [key],
              value: value,
            },
          ];
          expect(result).toEqual(expected);
        });
      });
    });
  });
};

const testCases: TestCase<Person>[] = [
  {
    caseName: "Person",
    paths: [
      { value: 16, path: ["$.age"], key: "age" },
      { value: "Alice", path: ["$.name"], key: "name" },
      { value: [1, 2, 3], path: ["$.items"], key: "items" },
    ],
    object: { name: "Alice", age: 16, items: [1, 2, 3] },
    schema: {
      struct: "Person",
      params: [
        { name: "name", attr: { kind: "string", default: "bob" } },
        { name: "age", attr: { kind: "number", default: 20 } },
        { name: "items", attr: { kind: "item[]", default: [4, 5, 6] } },
      ],
    },
  },
];
describe("jsonPath", () => {
  testCases.forEach(runTestCase);
});
