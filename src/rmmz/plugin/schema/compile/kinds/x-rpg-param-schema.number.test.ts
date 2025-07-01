import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { X_ParamNumber } from "./x-rpg-param-schema";
import { makeRpgParamMetaSchema } from "./x-rpg-param-schema";

const makeValidator = () => {
  const schema = makeRpgParamMetaSchema();
  const ajv = new Ajv({ discriminator: true, strict: true });
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
