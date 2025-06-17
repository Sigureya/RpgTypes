import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSchema3 } from "./metaSchema";
import type { X_Param_Boolean, X_Param_BooleanInput } from "./x-rpg-param";

const makeValidator = () => {
  const schema = makeSchema3();
  const ajv = new Ajv({ discriminator: true, strict: true });
  return ajv.compile(schema);
};

describe("metaSchema - boolean", () => {
  test("valid boolean param without parent", () => {
    const validate = makeValidator();
    const bool: X_Param_BooleanInput = {
      kind: "boolean",
      data: {
        on: "on",
        off: "off",
      },
    };
    expect(bool).toSatisfy(validate);
  });
  test("valid boolean param with parent", () => {
    const validate = makeValidator();
    const bool: X_Param_BooleanInput = {
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
    test("invalid: off is not a string", () => {
      const invalidBool: Record<keyof X_Param_Boolean, unknown> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
        parent: "parentId",
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
    test("invalid: off is not a string and parent omitted", () => {
      const validate = makeValidator();

      const invalidBool: Partial<Record<keyof X_Param_Boolean, unknown>> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
    test("invalid: missing on kind", () => {
      const validate = makeValidator();
      const invalidBool: Partial<X_Param_BooleanInput> = {
        data: {
          on: "on",
          off: "off",
        },
        parent: "parentId",
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
  });
});
