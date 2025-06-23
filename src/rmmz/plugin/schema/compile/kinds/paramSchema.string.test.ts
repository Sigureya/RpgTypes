import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { StringParam } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

describe("rmmzSchemaStringParam", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const validate = ajv.compile(makeParamSchema());

  describe("valid cases", () => {
    test("validates string parameter with default value", () => {
      const mock: StringParam = {
        kind: "string",
        default: "defaultString",
        text: "String Field",
        desc: "A string field",
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects string parameter without default value", () => {
      const mock: Omit<StringParam, "default"> = {
        kind: "string",
        text: "String Field",
        desc: "A string field",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
