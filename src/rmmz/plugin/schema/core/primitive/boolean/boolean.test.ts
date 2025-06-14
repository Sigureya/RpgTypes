import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSchemaBooleanParam } from "./boolean";
import type { RmmzParamCore_Boolean } from "./types";

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
});
