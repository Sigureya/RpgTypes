import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfNumber } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";
describe("", () => {
  const ajv = new Ajv({ discriminator: true, strict: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);
  test("number", () => {
    const validData: KindOfNumber = {
      kind: "number",
      parent: "parentId",
      default: 0,
    };
    expect(validData).toSatisfy(validate);
  });
});
