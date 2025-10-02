import { describe, test, expect } from "vitest";
import type { BooleanParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import Ajv from "ajv";
import type { X_ParamData } from "./base/x-rpg-param";
import SCHEMA_RPG_PARAM_META_SCHEMA from "./x-rpg-param.schema";
const makeValidator = () => {
  const schema = SCHEMA_RPG_PARAM_META_SCHEMA;
  const ajv = new Ajv({
    discriminator: true,
    strict: true,
    code: { source: false },
  });
  return ajv.compile(schema);
};

type X_Param_Boolean = X_ParamData<BooleanParam>;

describe("metaSchema - boolean", () => {
  test("valid boolean param without parent", () => {
    const validate = makeValidator();
    const bool: X_ParamData<BooleanParam> = {
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
    const bool: X_ParamData<BooleanParam> = {
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
      const invalidBool: Record<keyof X_ParamData<BooleanParam>, unknown> = {
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
      const invalidBool: Partial<X_Param_Boolean> = {
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
