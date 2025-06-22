import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfBoolean } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

describe("RmmzParam_Boolean JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);

  describe("valid cases", () => {
    test("validates boolean parameter with default true", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: true,
        on: "Enabled",
        off: "Disabled",
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates boolean parameter with default false", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: false,
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects boolean parameter with non-boolean default", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: "true" as any, // Invalid type
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("rejects boolean parameter without required properties", () => {
      const mock: Omit<KindOfBoolean, "default"> = { kind: "boolean" }; // Missing 'default'
      expect(mock).not.toSatisfy(validate);
    });
  });
});
