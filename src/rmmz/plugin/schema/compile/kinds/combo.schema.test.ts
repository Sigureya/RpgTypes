import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { rmmzSchemaComboParam } from "./combo";
import type { KindOfCombo } from "./core/primitiveParams";

describe("rmmzSchemaComboParam", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(rmmzSchemaComboParam());

  describe("valid cases", () => {
    test("validates combo parameter with options", () => {
      const mock: KindOfCombo = {
        kind: "combo",
        default: "option1",
        options: ["option1", "option2", "option3"],
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects combo parameter without options", () => {
      const mock: Omit<KindOfCombo, "options"> = {
        kind: "combo",
        default: "option1",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
