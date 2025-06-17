import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSchema3 } from "./metaSchema";
import type { X_Param_Number } from "./x-rpg-param";
const makeValidator = () => {
  const schema = makeSchema3();
  const ajv = new Ajv({ discriminator: true, strict: true });
  return ajv.compile(schema);
};

describe("Number Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const num: X_Param_Number = {
      kind: "number",
      parent: "parentId",
      data: {
        digit: 2,
      },
    };
    expect(num).toSatisfy(validate);
  });
});
