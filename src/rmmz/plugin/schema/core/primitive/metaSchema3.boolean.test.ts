import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { X_MetaParam_Boolean, X_MetaParamUnion } from "./metaSchema";
import { makeSchema3 } from "./metaSchema3";

const makeValidator = () => {
  const schema = makeSchema3();
  const ajv = new Ajv({ discriminator: true, strict: true });
  return ajv.compile(schema);
};

describe("Union Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const bool: X_MetaParam_Boolean = {
      kind: "boolean",
      data: {
        on: "on",
        off: "off",
      },
    };
    expect(bool).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const bool: X_MetaParamUnion = {
      kind: "boolean",
      data: {
        on: "on",
        off: "off",
      },
      parent: "parentId",
    };
    expect(bool).toSatisfy(validate);
  });
  describe("Invalid case", () => {
    const validate = makeValidator();
    test("", () => {
      const invalidBool: Record<keyof X_MetaParam_Boolean, unknown> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
        parent: "parentId",
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
    test("", () => {
      const validate = makeValidator();

      const invalidBool: Partial<Record<keyof X_MetaParam_Boolean, unknown>> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
  });
});
