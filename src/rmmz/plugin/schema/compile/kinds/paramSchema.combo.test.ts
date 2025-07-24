import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { ComboParam } from "./core/primitiveParams";
import { makePluginParamSchema } from "./paramSchema";

describe("rmmzSchemaComboParam", () => {
  const ajv = new Ajv({
    strict: true,
    discriminator: true,
    code: { source: false },
  });
  const validate = ajv.compile(makePluginParamSchema());

  describe("valid cases", () => {
    test("validates combo parameter with options", () => {
      const mock: ComboParam = {
        kind: "combo",
        default: "option1",
        options: ["option1", "option2", "option3"],
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects combo parameter without options", () => {
      const mock: Omit<ComboParam, "options"> = {
        kind: "combo",
        default: "option1",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
