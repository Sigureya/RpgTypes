import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import SCHEMA_RPG_PARAM_META_SCHEMA from "./x-rpg-param.schema";
import type { X_ParamNumber } from "./x-rpg-paramTypes";

const makeValidator = () => {
  const schema = SCHEMA_RPG_PARAM_META_SCHEMA;
  const ajv = new Ajv({
    discriminator: true,
    strict: true,
    code: { source: false },
  });
  return ajv.compile(schema);
};

describe("Number Schema Tests", () => {
  test("valid number param", () => {
    const validate = makeValidator();
    const num: X_ParamNumber = {
      kind: "number",
      parent: "parentId",
      data: {
        decimals: 2,
      },
    };
    expect(num).toSatisfy(validate);
  });
});
