import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfBoolean } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

describe("RmmzParam_Boolean JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);

  describe("accepts valid KindOfBoolean values", () => {
    test("a", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: true,
        on: "Enabled",
        off: "Disabled",
      };
      expect(mock).toSatisfy(validate);
    });

    test("accepts boolean with default true and on/off labels", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: false,
      };
      expect(mock).toSatisfy(validate);
    });
    test("accepts boolean with undefined optional fields", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: true,
        on: undefined,
        off: undefined,
        desc: undefined,
        text: undefined,
        parent: undefined,
      };
      expect(mock).toSatisfy(validate);
    });
    test("accepts boolean with null optional fields", () => {
      const mock: KindOfBoolean = {
        kind: "boolean",
        default: false,
        desc: null,
        text: null,
        parent: null,
        on: null,
        off: null,
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    describe("rejects boolean parameter with non-boolean default", () => {
      test("rejects string 'true' as default value", () => {
        const mock: KindOfBoolean = {
          kind: "boolean",
          default: "true" as any, // Invalid type
        };
        expect(mock).not.toSatisfy(validate);
      });
      test("rejects string 'false' as default value", () => {
        const mock: KindOfBoolean = {
          kind: "boolean",
          default: "false" as any, // Invalid type
        };
        expect(mock).not.toSatisfy(validate);
      });
    });
    test("rejects boolean parameter missing required default property", () => {
      const mock: Omit<KindOfBoolean, "default"> = { kind: "boolean" }; // Missing 'default'
      expect(mock).not.toSatisfy(validate);
    });
  });
});
