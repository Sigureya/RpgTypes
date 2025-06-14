import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { rmmzParamToSchemaBoolean, makeSchemaBooleanParam } from "./boolean";
import type { BooleanArg, RmmzParamCore_Boolean } from "./types";

describe("RmmzParam_Boolean JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true });
  const schema = makeSchemaBooleanParam();
  const validate = ajv.compile(schema);

  describe("valid cases", () => {
    test("validates boolean parameter with default true", () => {
      const mock: RmmzParamCore_Boolean = {
        type: "boolean",
        default: true,
        on: "Enabled",
        off: "Disabled",
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates boolean parameter with default false", () => {
      const mock: RmmzParamCore_Boolean = {
        type: "boolean",
        default: false,
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects boolean parameter with non-boolean default", () => {
      const mock: RmmzParamCore_Boolean = {
        type: "boolean",
        default: "true" as any, // Invalid type
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("rejects boolean parameter without required properties", () => {
      const mock: Omit<RmmzParamCore_Boolean, "default"> = { type: "boolean" }; // Missing 'default'
      expect(mock).not.toSatisfy(validate);
    });
  });

  describe("rmmzParamToSchemaBoolean function", () => {
    test("converts BooleanArg to JSON Schema", () => {
      const boolArg: BooleanArg = {
        type: "boolean",
        default: true,
        text: "Test Boolean",
        desc: "A test boolean parameter",
        on: "Yes",
        off: "No",
      };
      const schemaResult = rmmzParamToSchemaBoolean(boolArg);
      expect(schemaResult).toHaveProperty("type", "boolean");
      expect(schemaResult).toHaveProperty("default", true);
      expect(schemaResult["x-rmmzParam"]).toHaveProperty("on", "Yes");
      expect(schemaResult["x-rmmzParam"]).toHaveProperty("off", "No");
    });
  });
});
