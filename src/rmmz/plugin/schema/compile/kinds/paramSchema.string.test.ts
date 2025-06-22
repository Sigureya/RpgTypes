import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfString } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

describe("rmmzSchemaStringParam", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const validate = ajv.compile(makeParamSchema());

  describe("valid cases", () => {
    test("validates string parameter with default value", () => {
      const mock: KindOfString = {
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
      const mock: Omit<KindOfString, "default"> = {
        kind: "string",
        text: "String Field",
        desc: "A string field",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
