import { describe, test, expect } from "vitest";
import type Ajv from "ajv";
import type { JSONSchemaType } from "ajv";
import type { AddedKeywordDefinition } from "ajv/dist/types";
import { createAjv } from "./createAjv";
import { X_RMMZ_PARAM_SHARED } from "./keyConstants";
import type { X_MetaParam_Shread } from "./metaTextField";
import { metaSchemaSharedParam } from "./metaTextField";

interface TestCase<T> {
  key: string;
  jsonSchema: JSONSchemaType<T>;
  validSchema: T[];
  invalidSchema: Partial<Record<keyof T, unknown>>[];
}

const runTest = <T>(
  ajv: Ajv,
  { validSchema, invalidSchema, jsonSchema, key }: TestCase<T>
) => {
  describe(`Testing schema for ${key}`, () => {
    test(``, () => {
      const xx = ajv.getKeyword(key) as AddedKeywordDefinition;
      expect(xx).toBeDefined();
      expect(xx.metaSchema).toEqual(jsonSchema);
    });
    const validate = ajv.compile(jsonSchema);
    test.each(validSchema)("", (v) => {
      expect(v).toSatisfy(validate);
    });
    test.each(invalidSchema)("", (v) => {
      expect(v).not.toSatisfy(validate);
    });
  });
};

const testCases: TestCase<X_MetaParam_Shread> = {
  key: X_RMMZ_PARAM_SHARED,
  jsonSchema: metaSchemaSharedParam(),
  validSchema: [
    {
      kind: "weapon",
      parent: "parentField",
    },
  ],
  invalidSchema: [
    {
      // missing 'kind' field
      parent: "invalidField",
    },
    {
      kind: "invalidKind",
      parent: 123, // should be a string
    },
    // {
    //   kind: "anotherKind",
    //   parent: null, // should be a string or undefined
    // },
  ],
};

runTest(createAjv(), testCases);

describe("createAjv", () => {
  test("should create an Ajv instance with strict mode and custom keywords", () => {
    const ajv: Ajv = createAjv();
    expect(ajv).toBeDefined();
    expect(ajv.opts.strict).toBe(true);
    expect(ajv.getKeyword("x-rmmz-param-shared")).toBeDefined();
    expect(ajv.getKeyword("x-rmmz-param-number")).toBeDefined();
    expect(ajv.getKeyword("x-rmmz-param-boolean")).toBeDefined();
  });
});
