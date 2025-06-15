import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import Ajv from "ajv";
import type { X_RmmzParamDataId } from "./rmmzParam";
import { metaSchemaDataIdParam, sss } from "./rmmzParam";

interface TestCase<T> {
  caseName: string;
  schema: JSONSchemaType<T>;
  validData: { caseName: string; mock: T }[];
  invalidData: { caseName: string; mock: unknown }[];
}

const runTestCases = <T>(testCases: TestCase<T>) => {
  testCases.validData.forEach(({ caseName, mock: data }) => {
    test(caseName, () => {
      const validate = new Ajv({ strict: true }).compile(testCases.schema);
      expect(data).toSatisfy(validate);
    });
    test("", () => {
      const schema = sss();
      // 暫定処置。内部設定がかなり複雑になりそうなので、少しずつ処理していく
      const validate = new Ajv({ strict: true }).compile(schema);
      expect(data).toSatisfy(validate);
    });
  });
  describe("Invalid case", () => {
    testCases.invalidData.forEach(({ caseName, mock: data }) => {
      test(caseName, () => {
        const validate = new Ajv({ strict: true }).compile(testCases.schema);
        expect(data).not.toSatisfy(validate);
      });
    });
  });
};

const testCasesDataId: TestCase<X_RmmzParamDataId> = {
  caseName: "DataId",
  schema: metaSchemaDataIdParam(),
  validData: [
    {
      caseName: "basic data",
      mock: {
        kind: "dataId",
        data: { sourceId: { author: "rmmz", module: "data", kind: "actor" } },
      },
    },
    {
      caseName: "dataId with sourceId",
      mock: {
        kind: "dataId",
        parent: "parentId",
        data: { sourceId: { author: "rmmz", module: "data", kind: "actor" } },
      },
    },
    {
      caseName: "custom sourceId",
      mock: {
        kind: "dataId",
        data: {
          sourceId: { author: "bob", module: "mySystem", kind: "super" },
        },
      },
    },
    { caseName: "ソースが無い場合", mock: { kind: "dataId", data: {} } },
  ],
  invalidData: [
    {
      caseName: "",
      mock: 9,
    },
  ],
};
runTestCases(testCasesDataId);
